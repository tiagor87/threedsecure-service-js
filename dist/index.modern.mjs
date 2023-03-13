function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},e.apply(this,arguments)}var t;!function(e){e[e.Trace=0]="Trace",e[e.Debug=1]="Debug",e[e.Information=2]="Information",e[e.Warning=3]="Warning",e[e.Error=4]="Error",e[e.Critical=5]="Critical",e[e.None=6]="None"}(t||(t={}));var o={__proto__:null,get LogLevel(){return t}};class r{static convert(e){const t=JSON.stringify(e);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}}class n{static create(){const e=[48,32,24,16,15,8,4,1].find(e=>e<=screen.colorDepth);return{javaEnabled:navigator.javaEnabled(),javascriptEnabled:!0,language:navigator.language,userAgent:navigator.userAgent,screenWidth:window.screen.width,screenHeight:window.screen.height,timezoneOffset:(new Date).getTimezoneOffset(),colorDepth:e,acceptHeader:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"}}}class i{constructor(e){this._task=void 0,this._timeout=void 0,this._task=new Promise(t=>{this._timeout=setTimeout(t,e)})}wait(){return this._task}cancel(){clearTimeout(this._timeout),this._task=Promise.reject({message:"Timer cancelled"})}static sleep(e){return new i(e)}static cancel(e){clearTimeout(e)}}class s{static createIFrame(e){var t;const o=document.createElement("iframe");return o.id=e.name,o.name=e.name,e.useDefaultStyle?o.setAttribute("style","border: none;position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;opacity: "+(e.isVisible?"1":"0")):o.style.opacity=e.isVisible?"1":"0",null==(t=e.parent)||t.appendChild(o),o}static createForm(e){const t=document.createElement("form");return t.id=e.name,t.name=e.name,t.action=e.actionUrl,t.target=e.target,t.method=e.method,e.parent.appendChild(t),t}static createInput(e){const t=document.createElement("input");return t.id=e.name,t.name=e.name,t.type=e.type,e.parent.appendChild(t),t}}var a={__proto__:null,Base64Converter:r,Browser:n,Delay:i,HtmlElementFactory:s,Abstractions:{__proto__:null}};class l{constructor(e,t){this._options=void 0,this._logger=void 0,this._options=e,this._logger=t}execute({executeFn:e,method:o,correlationId:r}){var n=this;return new Promise(async function(s,a){var l;let c=1,h=null;do{try{let t=await e({attempt:c,maxAttempts:n._options.maxAttempts});if(t.isSuccess)return void s(t.data);if(!t.isTransientError)return void a(t)}catch(e){h={message:`Unhandled error calling "${o}"`,error:e,additionalData:{attempt:c,maxAttempts:n._options.maxAttempts}},n._logger.log({message:`Unhandled error calling "${o}"`,error:e,content:{attempt:c,maxAttempts:n._options.maxAttempts},method:o,correlationId:r,level:t.Warning})}c++,await i.sleep(n._options.attemptDelay).wait()}while(c<=n._options.maxAttempts);a(h),n._logger.log({message:`Unhandled error calling "${o}"`,error:null==(l=h)?void 0:l.error,content:{attempt:c,maxAttempts:n._options.maxAttempts},method:o,correlationId:r,level:t.Error})})}}class c{constructor(e,t,o=new l(e,t)){this._options=void 0,this._retryPolicy=void 0,this._logger=void 0,this._retryPolicy=o,this._logger=t,this._options=e}async send(o){var r=this;const n=this;return await this._retryPolicy.execute({executeFn:async function({attempt:i,maxAttempts:s}){const a=1e3*(n._options.timeoutInSeconds||30),l=new AbortController,c=setTimeout(()=>l.abort(),a);r._logger.log({message:"[Request] HttpClient",content:{request:o,attempt:i,maxAttempts:s},method:"send",correlationId:o.correlationId,level:t.Information});const h=await fetch(o.url,{headers:e({},o.headers,{"x-attempt":i.toString(),"x-max-attempts":s.toString(),accept:"application/json","content-type":"application/json"}),keepalive:!0,body:JSON.stringify(o.body),method:o.method,signal:l.signal});r._logger.log({message:"[Response] HttpClient",content:{response:h,attempt:i,maxAttempts:s},method:"send",correlationId:o.correlationId,level:t.Information}),clearTimeout(c);const d=await h.json();return{isSuccess:h.ok,isTransientError:r.isTransientError(h),data:h.ok?d.data:d}},method:`[${o.method}] ${o.url}`,correlationId:o.correlationId})}isTransientError(e){return[409,424,500,503,504].includes(e.status)}}var h={__proto__:null,FetchHttpClient:c,Abstractions:{__proto__:null}};class d{flush(){return Promise.resolve()}log(e){console.log(JSON.stringify(e))}}class g{constructor(e,t=new d,o=new c(e,t,new l({maxAttempts:3,attemptDelay:5e3},t))){this._httpClient=void 0,this._logger=void 0,this._options=void 0,this._logs=[],this._interval=void 0,this._logger=t,this._options=e,this._httpClient=o,this._interval=setInterval(this.sendBatch.bind(this),1e3*(this._options.batchLogIntervalInSeconds||g.DEFAULT_BATCH_TIMEOUT))}log(e){this._logger.log(e),this._options.elasticLoggerUrl&&this._logs.push({customMessage:e.message,message:`[FRONTEND] ${e.message}`,service:{name:"ThreeDSecure.Service.JS",version:"3.0.0"},executionDate:new Date,entrypoint:"Execute",method:e.method,correlationId:e.correlationId,content:e.content,level:e.level})}async flush(){for(clearInterval(this._interval);this._logs.length;)await this.sendBatch();this._interval=setInterval(this.sendBatch.bind(this),1e3*(this._options.batchLogIntervalInSeconds||g.DEFAULT_BATCH_TIMEOUT))}async sendBatch(){const e=this._logs.splice(0,10);if(!e.length)return;const o=e.map(e=>e.correlationId)[0];try{await this._httpClient.send({url:this._options.elasticLoggerUrl,method:"POST",body:e,correlationId:o,headers:{"x-api-key":this._options.apiKey}})}catch(e){this._logger.log({error:e,message:"Error sending message to elastic",method:"sendBatch",correlationId:o,level:t.Error})}}}g.DEFAULT_BATCH_TIMEOUT=5;var p,_={__proto__:null,ConsoleLogger:d,ElasticLogger:g,Abstractions:o};!function(e){e.width250xheight400="01",e.width390xheight400="02",e.width500xheight600="03",e.width600xheight400="04",e.fullscreen="05"}(p||(p={}));var m={__proto__:null,get ChallengeWindowSize(){return p}};class u{constructor(e,t){this._options=void 0,this._logger=void 0,this._options=e,this._logger=t}execute(e){return e.authResponse.challengeUrl?new Promise((o,n)=>{try{this._logger.log({message:"[Request] Challenge execution",content:{authResponse:e.authResponse},method:"executeChallenge",correlationId:e.correlationId,level:t.Information}),this._options.container.innerHTML="",s.createIFrame({parent:this._options.container,name:u.IFRAME_NAME,isVisible:!0,useDefaultStyle:!!this._options.onIFrameCreatedFn});const n=s.createForm({parent:this._options.container,name:u.FORM_NAME,actionUrl:e.authResponse.challengeUrl,target:u.IFRAME_NAME,method:"post"}),i=s.createInput({parent:n,name:u.CREQ_INPUT_NAME,type:u.CREQ_INPUT_TYPE}),a={threeDSServerTransID:e.authResponse.processId,acsTransID:e.authResponse.challengeId,messageVersion:e.authResponse.challengeVersion,messageType:"CReq",challengeWindowSize:this._options.challengeWindowSize||p.width250xheight400},l=r.convert(a);i.value=l,n.submit(),this._logger.log({message:"[Response] Challenge execution",content:{authResponse:e.authResponse,cReq:a,base64CReq:l},method:"executeChallenge",correlationId:e.correlationId,level:t.Information}),o()}catch(o){return this._logger.log({message:"[Error] Challenge execution",content:{authResponse:e.authResponse,error:o},method:"executeChallenge",correlationId:e.correlationId,level:t.Error}),n({message:o.toString()})}}):Promise.resolve()}}u.IFRAME_NAME="challengeIframe",u.FORM_NAME="challengeForm",u.CREQ_INPUT_NAME="creq",u.CREQ_INPUT_TYPE="hidden";class v{constructor(e,t){this._logger=void 0,this._options=void 0,this._logger=t,this._options=e}execute(e){return e.preAuthResponse.dsMethodUrl?new Promise((o,n)=>{try{var i;this._logger.log({message:"[Request] DirectoryServer execution",content:e,method:"directoryServerExecute",correlationId:e.correlationId,level:t.Information}),this._options.container.innerHTML="";const n=s.createIFrame({parent:this._options.container,isVisible:!1,name:v.IFRAME_NAME,useDefaultStyle:!!this._options.onIFrameCreatedFn});null==(i=this._options.onIFrameCreatedFn)||i.call(this._options,n);const a=s.createForm({parent:this._options.container,name:v.FORM_NAME,actionUrl:e.preAuthResponse.dsMethodUrl,target:v.IFRAME_NAME,method:"POST"}),l=s.createInput({parent:a,name:v.FORM_INPUT_NAME,type:v.FROM_INPUT_TYPE}),c=r.convert({threeDSServerTransID:e.preAuthResponse.processId,threeDSMethodNotificationURL:e.preAuthResponse.notificationUrl});l.value=c,a.submit(),this._logger.log({message:"[Response] DirectoryServer execution",content:{request:e,threeDSMethodDataBase64:c},method:"directoryServerExecute",correlationId:e.correlationId,level:t.Information}),o()}catch(o){return this._logger.log({message:"[Error] DirectoryServer execution",content:{request:e,error:o},method:"directoryServerExecute",correlationId:e.correlationId,level:t.Error}),n({message:o.toString()})}}):Promise.resolve()}}v.IFRAME_NAME="threeDSMethodIframe",v.FORM_NAME="threeDSMethodForm",v.FORM_INPUT_NAME="threeDSMethodData",v.FROM_INPUT_TYPE="hidden";class I{constructor(e,t=new g(e),o=new c(e,t),r=new v(e,t),n=new u(e,t)){this._options=void 0,this._logger=void 0,this._client=void 0,this._directoryServer=void 0,this._challenge=void 0,this._options=e,this._logger=t,this._client=o,this._directoryServer=r,this._challenge=n}async execute(e){let t=await this._preAuth(e);await this._directoryServer.execute({preAuthResponse:t,correlationId:e.correlationId});let o=await this._auth(e);await this._challenge.execute({authResponse:o,correlationId:e.correlationId});let r=await this._postAuth(e);return await this._logger.flush(),r}_preAuth(e){return this._logger.log({message:"Executing PreAuth",content:e,method:"_preAuth",correlationId:e.correlationId,level:t.Information}),this._client.send({url:`${this._options.threeDSecureUrl}/api/v2/${e.id}/preAuth`,method:"POST",body:{browser:n.create()},correlationId:e.correlationId,headers:{"x-api-key":this._options.apiKey}})}_auth(e){return this._logger.log({message:"Executing Auth",content:e,method:"_auth",correlationId:e.correlationId,level:t.Information}),this._client.send({url:`${this._options.threeDSecureUrl}/api/v1/${e.id}/auth`,method:"POST",correlationId:e.correlationId,headers:{"x-api-key":this._options.apiKey}})}_postAuth(e){return this._logger.log({message:"Executing PostAuth",content:e,method:"_postAuth",correlationId:e.correlationId,level:t.Information}),this._client.send({url:`${this._options.threeDSecureUrl}/api/v2/${e.id}/postAuth`,method:"POST",correlationId:e.correlationId,headers:{"x-api-key":this._options.apiKey}})}}var A={__proto__:null,IFrameDirectoryServerService:v,IFrameChallengeService:u,ThreeDSecureService:I,Abstractions:m},E={__proto__:null,Abstractions:{__proto__:null},Utils:a};export{h as HttpClients,_ as Loggers,A as Services,E as Shared,I as ThreeDSecureService};
//# sourceMappingURL=index.modern.mjs.map