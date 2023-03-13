import { FetchHttpClient } from "../httpClients";
import { IHttpClient } from "../httpClients/abstractions";
import { LinearRetryPolicy } from "../httpClients/retryPolicies";
import { IElasticLoggerOptions, ILog, ILogger, LogLevel } from "./abstractions";
import { ConsoleLogger } from "./ConsoleLogger";

interface IFullLog {
    service: {
        name: string;
        version: string
    },
    executionDate: Date,
    entrypoint: string;
    method: string;
    correlationId: string;
    level: LogLevel;
    customMessage: string;
    message: string;
    content?: object;
    exeption?: object;
}

export class ElasticLogger implements ILogger {
    private static readonly DEFAULT_BATCH_TIMEOUT = 5;
    private readonly _httpClient: IHttpClient;
    private readonly _logger: ILogger;
    private readonly _options: IElasticLoggerOptions;
    private _logs: Array<IFullLog> = [];
    private _interval: NodeJS.Timer;

    constructor(options: IElasticLoggerOptions,
        logger: ILogger = new ConsoleLogger(),
        httpClient: IHttpClient = new FetchHttpClient(options, logger, new LinearRetryPolicy({
            maxAttempts: 3,
            attemptDelay: 5000
        }, logger))) {
        this._logger = logger;
        this._options = options;
        this._httpClient = httpClient;
        this._interval = setInterval(this.sendBatch.bind(this), (this._options.batchLogIntervalInSeconds || ElasticLogger.DEFAULT_BATCH_TIMEOUT) * 1000);
    }

    log(log: ILog): void {
        this._logger.log(log);

        if (!this._options.elasticLoggerUrl)
        {
            return;
        }

        this._logs.push({
            customMessage: log.message,
            message: `[FRONTEND] ${log.message}`,
            service: {
                name: 'ThreeDSecure.Service.JS',
                version: '3.0.0'
            },
            executionDate: new Date(),
            entrypoint: 'Execute',
            method: log.method,
            correlationId: log.correlationId,
            content: log.content,
            level: log.level
        });
    }

    async flush(): Promise<void> {
        clearInterval(this._interval);
        while (this._logs.length) {
            await this.sendBatch();
        }
        this._interval = setInterval(this.sendBatch.bind(this), (this._options.batchLogIntervalInSeconds || ElasticLogger.DEFAULT_BATCH_TIMEOUT) * 1000);
    }

    async sendBatch() : Promise<void> {
        const logs = this._logs.splice(0, 10);
        if (!logs.length) {
            return;
        }
        const correlationId = logs.map(x => x.correlationId)[0];
        try {
            await this._httpClient.send<void>({
                url: this._options.elasticLoggerUrl,
                method: 'POST',
                body: logs,
                correlationId,
                headers: {
                    'x-api-key': this._options.apiKey
                }
            });
        } catch (error) {
            this._logger.log({
                error: error,
                message: 'Error sending message to elastic',
                method: 'sendBatch',
                correlationId,
                level: LogLevel.Error
            });
        }
    }
}