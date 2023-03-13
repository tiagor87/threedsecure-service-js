function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.apply(this,arguments)}var t;!function(e){e[e.Trace=0]="Trace",e[e.Debug=1]="Debug",e[e.Information=2]="Information",e[e.Warning=3]="Warning",e[e.Error=4]="Error",e[e.Critical=5]="Critical",e[e.None=6]="None"}(t||(t={}));var n={__proto__:null,get LogLevel(){return t}},r=/*#__PURE__*/function(){function e(){}return e.convert=function(e){var t=JSON.stringify(e);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},e}(),o=/*#__PURE__*/function(){function e(){}return e.create=function(){var e=[48,32,24,16,15,8,4,1].find(function(e){return e<=screen.colorDepth});return{javaEnabled:navigator.javaEnabled(),javascriptEnabled:!0,language:navigator.language,userAgent:navigator.userAgent,screenWidth:window.screen.width,screenHeight:window.screen.height,timezoneOffset:(new Date).getTimezoneOffset(),colorDepth:e,acceptHeader:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"}},e}(),i=/*#__PURE__*/function(){function e(e){var t=this;this._task=void 0,this._timeout=void 0,this._task=new Promise(function(n){t._timeout=setTimeout(n,e)})}var t=e.prototype;return t.wait=function(){return this._task},t.cancel=function(){clearTimeout(this._timeout),this._task=Promise.reject({message:"Timer cancelled"})},e.sleep=function(t){return new e(t)},e.cancel=function(e){clearTimeout(e)},e}(),s=/*#__PURE__*/function(){function e(){}return e.createIFrame=function(e){var t,n=document.createElement("iframe");return n.id=e.name,n.name=e.name,e.useDefaultStyle?n.setAttribute("style","border: none;position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;opacity: "+(e.isVisible?"1":"0")):n.style.opacity=e.isVisible?"1":"0",null==(t=e.parent)||t.appendChild(n),n},e.createForm=function(e){var t=document.createElement("form");return t.id=e.name,t.name=e.name,t.action=e.actionUrl,t.target=e.target,t.method=e.method,e.parent.appendChild(t),t},e.createInput=function(e){var t=document.createElement("input");return t.id=e.name,t.name=e.name,t.type=e.type,e.parent.appendChild(t),t},e}(),a={__proto__:null,Base64Converter:r,Browser:o,Delay:i,HtmlElementFactory:s,Abstractions:{__proto__:null}};function c(e,t,n){if(!e.s){if(n instanceof l){if(!n.s)return void(n.o=c.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(c.bind(null,e,t),c.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var l=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{c(r,1,i(this.v))}catch(e){c(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?c(r,1,t?t(o):o):n?c(r,1,n(o)):c(r,2,o)}catch(e){c(r,2,e)}},r},e}();function u(e){return e instanceof l&&1&e.s}var h=/*#__PURE__*/function(){function e(e,t){this._options=void 0,this._logger=void 0,this._options=e,this._logger=t}return e.prototype.execute=function(e){var n=this,r=e.executeFn,o=e.method,s=e.correlationId;return new Promise(function(e,a){try{var h,d=function(e){var r;if(h)return e;a(v),n._logger.log({message:'Unhandled error calling "'+o+'"',error:null==(r=v)?void 0:r.error,content:{attempt:p,maxAttempts:n._options.maxAttempts},method:o,correlationId:s,level:t.Error})},p=1,v=null,m=function(e,t){var n;do{var r=e();if(r&&r.then){if(!u(r)){n=!0;break}r=r.v}var o=t();if(u(o)&&(o=o.v),!o)return r}while(!o.then);var i=new l,s=c.bind(null,i,2);return(n?r.then(a):o.then(h)).then(void 0,s),i;function a(n){for(r=n;u(o=t())&&(o=o.v),o;){if(o.then)return void o.then(h).then(void 0,s);if((r=e())&&r.then){if(!u(r))return void r.then(a).then(void 0,s);r=r.v}}c(i,1,r)}function h(n){if(n){do{if((r=e())&&r.then){if(!u(r))return void r.then(a).then(void 0,s);r=r.v}if(u(n=t())&&(n=n.v),!n)return void c(i,1,r)}while(!n.then);n.then(h).then(void 0,s)}else c(i,1,r)}}(function(){function c(e){return h?e:(p++,Promise.resolve(i.sleep(n._options.attemptDelay).wait()).then(function(){}))}var l=function(t,o){try{var i=Promise.resolve(r({attempt:p,maxAttempts:n._options.maxAttempts})).then(function(t){if(t.isSuccess)return e(t.data),void(h=1);t.isTransientError||(a(t),h=1)})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(e){v={message:'Unhandled error calling "'+o+'"',error:e,additionalData:{attempt:p,maxAttempts:n._options.maxAttempts}},n._logger.log({message:'Unhandled error calling "'+o+'"',error:e,content:{attempt:p,maxAttempts:n._options.maxAttempts},method:o,correlationId:s,level:t.Warning})});return l&&l.then?l.then(c):c(l)},function(){return!h&&p<=n._options.maxAttempts});return Promise.resolve(m&&m.then?m.then(d):d(m))}catch(e){return Promise.reject(e)}})},e}(),d=/*#__PURE__*/function(){function n(e,t,n){void 0===n&&(n=new h(e,t)),this._options=void 0,this._retryPolicy=void 0,this._logger=void 0,this._retryPolicy=n,this._logger=t,this._options=e}var r=n.prototype;return r.send=function(n){try{var r=this,o=r;return Promise.resolve(r._retryPolicy.execute({executeFn:function(i){var s=i.attempt,a=i.maxAttempts;try{var c=1e3*(o._options.timeoutInSeconds||30),l=new AbortController,u=setTimeout(function(){return l.abort()},c);return r._logger.log({message:"[Request] HttpClient",content:{request:n,attempt:s,maxAttempts:a},method:"send",correlationId:n.correlationId,level:t.Information}),Promise.resolve(fetch(n.url,{headers:e({},n.headers,{"x-attempt":s.toString(),"x-max-attempts":a.toString(),accept:"application/json","content-type":"application/json"}),keepalive:!0,body:JSON.stringify(n.body),method:n.method,signal:l.signal})).then(function(e){return r._logger.log({message:"[Response] HttpClient",content:{response:e,attempt:s,maxAttempts:a},method:"send",correlationId:n.correlationId,level:t.Information}),clearTimeout(u),Promise.resolve(e.json()).then(function(t){return{isSuccess:e.ok,isTransientError:r.isTransientError(e),data:e.ok?t.data:t}})})}catch(e){return Promise.reject(e)}},method:"["+n.method+"] "+n.url,correlationId:n.correlationId}))}catch(e){return Promise.reject(e)}},r.isTransientError=function(e){return[409,424,500,503,504].includes(e.status)},n}(),p={__proto__:null,FetchHttpClient:d,Abstractions:{__proto__:null}},v=/*#__PURE__*/function(){function e(){}var t=e.prototype;return t.flush=function(){return Promise.resolve()},t.log=function(e){console.log(JSON.stringify(e))},e}();function m(e,t,n){if(!e.s){if(n instanceof g){if(!n.s)return void(n.o=m.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(m.bind(null,e,t),m.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var g=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{m(r,1,i(this.v))}catch(e){m(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?m(r,1,t?t(o):o):n?m(r,1,n(o)):m(r,2,o)}catch(e){m(r,2,e)}},r},e}();function _(e){return e instanceof g&&1&e.s}var f=/*#__PURE__*/function(){function e(t,n,r){void 0===n&&(n=new v),void 0===r&&(r=new d(t,n,new h({maxAttempts:3,attemptDelay:5e3},n))),this._httpClient=void 0,this._logger=void 0,this._options=void 0,this._logs=[],this._interval=void 0,this._logger=n,this._options=t,this._httpClient=r,this._interval=setInterval(this.sendBatch.bind(this),1e3*(this._options.batchLogIntervalInSeconds||e.DEFAULT_BATCH_TIMEOUT))}var n=e.prototype;return n.log=function(e){this._logger.log(e),this._options.elasticLoggerUrl&&this._logs.push({customMessage:e.message,message:"[FRONTEND] "+e.message,service:{name:"ThreeDSecure.Service.JS",version:"3.0.0"},executionDate:new Date,entrypoint:"Execute",method:e.method,correlationId:e.correlationId,content:e.content,level:e.level})},n.flush=function(){try{var t=function(){n._interval=setInterval(n.sendBatch.bind(n),1e3*(n._options.batchLogIntervalInSeconds||e.DEFAULT_BATCH_TIMEOUT))},n=this;clearInterval(n._interval);var r=function(e,t,n){for(var r;;){var o=e();if(_(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!_(i)){r=1;break}i=i.s}if(t){var s=t();if(s&&s.then&&!_(s)){r=2;break}}}var a=new g,c=m.bind(null,a,2);return(0===r?o.then(u):1===r?i.then(l):s.then(h)).then(void 0,c),a;function l(r){i=r;do{if(t&&(s=t())&&s.then&&!_(s))return void s.then(h).then(void 0,c);if(!(o=e())||_(o)&&!o.v)return void m(a,1,i);if(o.then)return void o.then(u).then(void 0,c);_(i=n())&&(i=i.v)}while(!i||!i.then);i.then(l).then(void 0,c)}function u(e){e?(i=n())&&i.then?i.then(l).then(void 0,c):l(i):m(a,1,i)}function h(){(o=e())?o.then?o.then(u).then(void 0,c):u(o):m(a,1,i)}}(function(){return!!n._logs.length},void 0,function(){return Promise.resolve(n.sendBatch()).then(function(){})});return Promise.resolve(r&&r.then?r.then(t):t())}catch(e){return Promise.reject(e)}},n.sendBatch=function(){try{var e=this,n=e._logs.splice(0,10);if(!n.length)return Promise.resolve();var r=n.map(function(e){return e.correlationId})[0],o=function(t,o){try{var i=Promise.resolve(e._httpClient.send({url:e._options.elasticLoggerUrl,method:"POST",body:n,correlationId:r,headers:{"x-api-key":e._options.apiKey}})).then(function(){})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(n){e._logger.log({error:n,message:"Error sending message to elastic",method:"sendBatch",correlationId:r,level:t.Error})});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e}();f.DEFAULT_BATCH_TIMEOUT=5;var I,y={__proto__:null,ConsoleLogger:v,ElasticLogger:f,Abstractions:n};!function(e){e.width250xheight400="01",e.width390xheight400="02",e.width500xheight600="03",e.width600xheight400="04",e.fullscreen="05"}(I||(I={}));var A={__proto__:null,get ChallengeWindowSize(){return I}},E=/*#__PURE__*/function(){function e(e,t){this._options=void 0,this._logger=void 0,this._options=e,this._logger=t}return e.prototype.execute=function(n){var o=this;return n.authResponse.challengeUrl?new Promise(function(i,a){try{o._logger.log({message:"[Request] Challenge execution",content:{authResponse:n.authResponse},method:"executeChallenge",correlationId:n.correlationId,level:t.Information}),o._options.container.innerHTML="",s.createIFrame({parent:o._options.container,name:e.IFRAME_NAME,isVisible:!0,useDefaultStyle:!!o._options.onIFrameCreatedFn});var c=s.createForm({parent:o._options.container,name:e.FORM_NAME,actionUrl:n.authResponse.challengeUrl,target:e.IFRAME_NAME,method:"post"}),l=s.createInput({parent:c,name:e.CREQ_INPUT_NAME,type:e.CREQ_INPUT_TYPE}),u={threeDSServerTransID:n.authResponse.processId,acsTransID:n.authResponse.challengeId,messageVersion:n.authResponse.challengeVersion,messageType:"CReq",challengeWindowSize:o._options.challengeWindowSize||I.width250xheight400},h=r.convert(u);l.value=h,c.submit(),o._logger.log({message:"[Response] Challenge execution",content:{authResponse:n.authResponse,cReq:u,base64CReq:h},method:"executeChallenge",correlationId:n.correlationId,level:t.Information}),i()}catch(e){return o._logger.log({message:"[Error] Challenge execution",content:{authResponse:n.authResponse,error:e},method:"executeChallenge",correlationId:n.correlationId,level:t.Error}),a({message:e.toString()})}}):Promise.resolve()},e}();E.IFRAME_NAME="challengeIframe",E.FORM_NAME="challengeForm",E.CREQ_INPUT_NAME="creq",E.CREQ_INPUT_TYPE="hidden";var x=/*#__PURE__*/function(){function e(e,t){this._logger=void 0,this._options=void 0,this._logger=t,this._options=e}return e.prototype.execute=function(n){var o=this;return n.preAuthResponse.dsMethodUrl?new Promise(function(i,a){try{var c;o._logger.log({message:"[Request] DirectoryServer execution",content:n,method:"directoryServerExecute",correlationId:n.correlationId,level:t.Information}),o._options.container.innerHTML="";var l=s.createIFrame({parent:o._options.container,isVisible:!1,name:e.IFRAME_NAME,useDefaultStyle:!!o._options.onIFrameCreatedFn});null==(c=o._options.onIFrameCreatedFn)||c.call(o._options,l);var u=s.createForm({parent:o._options.container,name:e.FORM_NAME,actionUrl:n.preAuthResponse.dsMethodUrl,target:e.IFRAME_NAME,method:"POST"}),h=s.createInput({parent:u,name:e.FORM_INPUT_NAME,type:e.FROM_INPUT_TYPE}),d=r.convert({threeDSServerTransID:n.preAuthResponse.processId,threeDSMethodNotificationURL:n.preAuthResponse.notificationUrl});h.value=d,u.submit(),o._logger.log({message:"[Response] DirectoryServer execution",content:{request:n,threeDSMethodDataBase64:d},method:"directoryServerExecute",correlationId:n.correlationId,level:t.Information}),i()}catch(e){return o._logger.log({message:"[Error] DirectoryServer execution",content:{request:n,error:e},method:"directoryServerExecute",correlationId:n.correlationId,level:t.Error}),a({message:e.toString()})}}):Promise.resolve()},e}();x.IFRAME_NAME="threeDSMethodIframe",x.FORM_NAME="threeDSMethodForm",x.FORM_INPUT_NAME="threeDSMethodData",x.FROM_INPUT_TYPE="hidden";var S=/*#__PURE__*/function(){function e(e,t,n,r,o){void 0===t&&(t=new f(e)),void 0===n&&(n=new d(e,t)),void 0===r&&(r=new x(e,t)),void 0===o&&(o=new E(e,t)),this._options=void 0,this._logger=void 0,this._client=void 0,this._directoryServer=void 0,this._challenge=void 0,this._options=e,this._logger=t,this._client=n,this._directoryServer=r,this._challenge=o}var n=e.prototype;return n.execute=function(e){try{var t=this;return Promise.resolve(t._preAuth(e)).then(function(n){return Promise.resolve(t._directoryServer.execute({preAuthResponse:n,correlationId:e.correlationId})).then(function(){return Promise.resolve(t._auth(e)).then(function(n){return Promise.resolve(t._challenge.execute({authResponse:n,correlationId:e.correlationId})).then(function(){return Promise.resolve(t._postAuth(e)).then(function(e){return Promise.resolve(t._logger.flush()).then(function(){return e})})})})})})}catch(e){return Promise.reject(e)}},n._preAuth=function(e){return this._logger.log({message:"Executing PreAuth",content:e,method:"_preAuth",correlationId:e.correlationId,level:t.Information}),this._client.send({url:this._options.threeDSecureUrl+"/api/v2/"+e.id+"/preAuth",method:"POST",body:{browser:o.create()},correlationId:e.correlationId,headers:{"x-api-key":this._options.apiKey}})},n._auth=function(e){return this._logger.log({message:"Executing Auth",content:e,method:"_auth",correlationId:e.correlationId,level:t.Information}),this._client.send({url:this._options.threeDSecureUrl+"/api/v1/"+e.id+"/auth",method:"POST",correlationId:e.correlationId,headers:{"x-api-key":this._options.apiKey}})},n._postAuth=function(e){return this._logger.log({message:"Executing PostAuth",content:e,method:"_postAuth",correlationId:e.correlationId,level:t.Information}),this._client.send({url:this._options.threeDSecureUrl+"/api/v2/"+e.id+"/postAuth",method:"POST",correlationId:e.correlationId,headers:{"x-api-key":this._options.apiKey}})},e}(),P={__proto__:null,IFrameDirectoryServerService:x,IFrameChallengeService:E,ThreeDSecureService:S,Abstractions:A},T={__proto__:null,Abstractions:{__proto__:null},Utils:a};exports.HttpClients=p,exports.Loggers=y,exports.Services=P,exports.Shared=T,exports.ThreeDSecureService=S;
//# sourceMappingURL=index.js.map
