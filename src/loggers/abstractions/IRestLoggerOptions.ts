import { IHttpClientOptions } from "../../httpClients/abstractions";

export interface IRestLoggerOptions extends IHttpClientOptions {
    environment: 'Development' | 'Staging' | 'Production',
    restLoggerUrl: string;
    batchLogIntervalInSeconds: number;
}