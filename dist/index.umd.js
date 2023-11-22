!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).threedsecureService={})}(this,function(e){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}var r;!function(e){e[e.Trace=0]="Trace",e[e.Debug=1]="Debug",e[e.Information=2]="Information",e[e.Warning=3]="Warning",e[e.Error=4]="Error",e[e.Critical=5]="Critical",e[e.None=6]="None"}(r||(r={}));var n={__proto__:null,get LogLevel(){return r}},o=/*#__PURE__*/function(){function e(){this.start=void 0,this.end=void 0,this.start=Date.now()}var t,r;return e.prototype.stop=function(){this.end=Date.now()},t=e,(r=[{key:"elapsed",get:function(){return(this.end||Date.now())-this.start}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key))?o:String(o),n)}var o}(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i=/*#__PURE__*/function(){function e(){}return e.convert=function(e){var t=JSON.stringify(e);return btoa(t).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},e}(),a=/*#__PURE__*/function(){function e(){}return e.create=function(){var e=[48,32,24,16,15,8,4,1].find(function(e){return e<=screen.colorDepth});return{javaEnabled:navigator.javaEnabled(),javascriptEnabled:!0,language:navigator.language,userAgent:navigator.userAgent,screenWidth:window.screen.width,screenHeight:window.screen.height,timezoneOffset:(new Date).getTimezoneOffset(),colorDepth:e,acceptHeader:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"}},e}(),s=/*#__PURE__*/function(){function e(e){var t=this;this._task=void 0,this._timeout=void 0,this._task=new Promise(function(r){t._timeout=setTimeout(r,e)})}var t=e.prototype;return t.wait=function(){return this._task},t.cancel=function(){clearTimeout(this._timeout),this._task=Promise.reject({message:"Timer cancelled"})},e.sleep=function(t){return new e(t)},e.cancel=function(e){clearTimeout(e)},e}(),l=/*#__PURE__*/function(){function e(){}return e.createIFrame=function(e){var t=document.createElement("iframe");return t.id=e.name,t.name=e.name,e.onReadyFn&&e.onReadyFn(t,e.isVisible),e.onCreatedFn&&(e.onCreatedFn(t),t.style.opacity=e.isVisible?"1":"0"),e.parent.appendChild(t),t},e.createForm=function(e){var t=document.createElement("form");return t.id=e.name,t.name=e.name,t.action=e.actionUrl,t.target=e.target,t.method=e.method,e.parent.appendChild(t),t},e.createInput=function(e){var t=document.createElement("input");return t.id=e.name,t.name=e.name,t.type=e.type,e.parent.appendChild(t),t},e}(),c={__proto__:null,Base64Converter:i,Browser:a,Delay:s,HtmlElementFactory:l,Abstractions:{__proto__:null}};function u(e,t,r){if(!e.s){if(r instanceof h){if(!r.s)return void(r.o=u.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(u.bind(null,e,t),u.bind(null,e,2));e.s=t,e.v=r;var n=e.o;n&&n(e)}}var h=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{u(n,1,i(this.v))}catch(e){u(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?u(n,1,t?t(o):o):r?u(n,1,r(o)):u(n,2,o)}catch(e){u(n,2,e)}},n},e}();function d(e){return e instanceof h&&1&e.s}var v=/*#__PURE__*/function(){function e(e,t){this._options=void 0,this._logger=void 0,this._options=e,this._logger=t}return e.prototype.execute=function(e){var t=this,n=e.executeFn,o=e.method,i=e.correlationId;return new Promise(function(e,a){try{var l,c=function(e){var n;if(l)return e;a(m),t._logger.log({message:'Unhandled error calling "'+o+'"',error:null==(n=m)?void 0:n.error,content:{attempt:v,maxAttempts:t._options.maxAttempts},method:o,correlationId:i,level:r.Error})},v=1,m=null,g=function(e,t){var r;do{var n=e();if(n&&n.then){if(!d(n)){r=!0;break}n=n.v}var o=t();if(d(o)&&(o=o.v),!o)return n}while(!o.then);var i=new h,a=u.bind(null,i,2);return(r?n.then(s):o.then(l)).then(void 0,a),i;function s(r){for(n=r;d(o=t())&&(o=o.v),o;){if(o.then)return void o.then(l).then(void 0,a);if((n=e())&&n.then){if(!d(n))return void n.then(s).then(void 0,a);n=n.v}}u(i,1,n)}function l(r){if(r){do{if((n=e())&&n.then){if(!d(n))return void n.then(s).then(void 0,a);n=n.v}if(d(r=t())&&(r=r.v),!r)return void u(i,1,n)}while(!r.then);r.then(l).then(void 0,a)}else u(i,1,n)}}(function(){function c(e){return l?e:(v++,Promise.resolve(s.sleep(t._options.attemptDelay).wait()).then(function(){}))}var u=function(r,o){try{var i=Promise.resolve(n({attempt:v,maxAttempts:t._options.maxAttempts})).then(function(t){if(t.isSuccess)return e(t),void(l=1);t.isTransientError||(a(t),l=1)})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(e){m={message:'Unhandled error calling "'+o+'"',error:e,additionalData:{attempt:v,maxAttempts:t._options.maxAttempts}},t._logger.log({message:'Unhandled error calling "'+o+'"',error:e,content:{attempt:v,maxAttempts:t._options.maxAttempts},method:o,correlationId:i,level:r.Warning})});return u&&u.then?u.then(c):c(u)},function(){return!l&&v<=t._options.maxAttempts});return Promise.resolve(g&&g.then?g.then(c):c(g))}catch(e){return Promise.reject(e)}})},e}(),m=/*#__PURE__*/function(){function e(e,t,r){void 0===r&&(r=new v(e,t)),this._options=void 0,this._retryPolicy=void 0,this._logger=void 0,this._retryPolicy=r,this._logger=t,this._options=e}var n=e.prototype;return n.send=function(e){try{var n=this,i=n;return Promise.resolve(n._retryPolicy.execute({executeFn:function(a){var s=a.attempt,l=a.maxAttempts;try{var c=function(e){return clearTimeout(d),{isSuccess:m.ok,isTransientError:n.isTransientError(m),getData:function(){try{return Promise.resolve(m.json()).then(function(e){return e.data})}catch(e){return Promise.reject(e)}}}},u=1e3*(i._options.timeoutInSeconds||30),h=new AbortController,d=setTimeout(function(){return h.abort()},u),v=new URL(e.url);n._logger.log({message:"ExternalService - Request ("+v.host+")",content:{request:e,attempt:s,maxAttempts:l},method:"send",correlationId:e.correlationId,level:r.Information});var m,g=new o,p=function(o,i){try{var a=Promise.resolve(fetch(e.url,{headers:t({},e.headers,{"x-attempt":s.toString(),"x-max-attempts":l.toString(),accept:"application/json","content-type":"application/json",correlationId:e.correlationId}),keepalive:!0,body:JSON.stringify(e.body),method:e.method,signal:h.signal})).then(function(t){n._logger.log({message:"ExternalService - Response ("+v.host+") in "+g.elapsed+"ms",content:{request:e,attempt:s,maxAttempts:l,response:m=t},method:"send",correlationId:e.correlationId,level:r.Error})})}catch(e){return i(e)}return a&&a.then?a.then(void 0,i):a}(0,function(t){throw n._logger.log({message:"ExternalService - Error ("+v.host+") in "+g.elapsed+"ms",content:{request:e,attempt:s,maxAttempts:l,error:t},method:"send",correlationId:e.correlationId,level:r.Error}),t});return Promise.resolve(p&&p.then?p.then(c):c())}catch(e){return Promise.reject(e)}},method:"["+e.method+"] "+e.url,correlationId:e.correlationId}))}catch(e){return Promise.reject(e)}},n.isTransientError=function(e){return[409,424,500,503,504].includes(e.status)},e}(),g={__proto__:null,FetchHttpClient:m,Abstractions:{__proto__:null}},p=/*#__PURE__*/function(){function e(){}var r=e.prototype;return r.flush=function(){return Promise.resolve()},r.log=function(e){var r,n=t({},e,{error:null==(r=e.error)?void 0:r.toString()});console.log(n)},e}();function f(e,t,r){if(!e.s){if(r instanceof _){if(!r.s)return void(r.o=f.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(f.bind(null,e,t),f.bind(null,e,2));e.s=t,e.v=r;const n=e.o;n&&n(e)}}var _=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{f(n,1,i(this.v))}catch(e){f(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?f(n,1,t?t(o):o):r?f(n,1,r(o)):f(n,2,o)}catch(e){f(n,2,e)}},n},e}();function I(e){return e instanceof _&&1&e.s}var y=/*#__PURE__*/function(){function e(t,r,n){void 0===r&&(r=new p),void 0===n&&(n=new m(t,r,new v({maxAttempts:3,attemptDelay:5e3},r))),this._httpClient=void 0,this._logger=void 0,this._options=void 0,this._logs=[],this._interval=void 0,this._logger=r,this._options=t,this._httpClient=n,this._interval=setInterval(this.sendBatch.bind(this),1e3*(this._options.batchLogIntervalInSeconds||e.DEFAULT_BATCH_TIMEOUT))}var n=e.prototype;return n.log=function(e){var r;this._logger.log(e),this._options.restLoggerUrl&&this._logs.unshift({customMessage:e.message,message:"[Paybyrd.ThreeDSecure.JS] "+e.message,service:{name:"Paybyrd.ThreeDSecure.JS",version:"3.0.0"},environment:this._options.environment||"Development",executionDate:new Date,entrypoint:"Execute",method:e.method,correlationId:e.correlationId,content:t({},e.content,{error:null==(r=e.error)?void 0:r.toString()}),level:e.level})},n.flush=function(){try{var t=function(){r._interval=setInterval(r.sendBatch.bind(r),1e3*(r._options.batchLogIntervalInSeconds||e.DEFAULT_BATCH_TIMEOUT))},r=this;clearInterval(r._interval);var n=function(e,t,r){for(var n;;){var o=e();if(I(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!I(i)){n=1;break}i=i.s}if(t){var a=t();if(a&&a.then&&!I(a)){n=2;break}}}var s=new _,l=f.bind(null,s,2);return(0===n?o.then(u):1===n?i.then(c):a.then(h)).then(void 0,l),s;function c(n){i=n;do{if(t&&(a=t())&&a.then&&!I(a))return void a.then(h).then(void 0,l);if(!(o=e())||I(o)&&!o.v)return void f(s,1,i);if(o.then)return void o.then(u).then(void 0,l);I(i=r())&&(i=i.v)}while(!i||!i.then);i.then(c).then(void 0,l)}function u(e){e?(i=r())&&i.then?i.then(c).then(void 0,l):c(i):f(s,1,i)}function h(){(o=e())?o.then?o.then(u).then(void 0,l):u(o):f(s,1,i)}}(function(){return!!r._logs.length},void 0,function(){return Promise.resolve(r.sendBatch()).then(function(){})});return Promise.resolve(n&&n.then?n.then(t):t())}catch(e){return Promise.reject(e)}},n.sendBatch=function(){try{var e=this,t=e._logs.splice(0,10);if(!t.length)return Promise.resolve();var n=t.map(function(e){return e.correlationId})[0],o=function(r,o){try{var i=Promise.resolve(e._httpClient.send({url:e._options.restLoggerUrl,method:"POST",body:t,correlationId:n})).then(function(){})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(t){e._logger.log({error:t,message:"Error sending message to elastic",method:"sendBatch",correlationId:n,level:r.Error})});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e}();y.DEFAULT_BATCH_TIMEOUT=5;var S,P={__proto__:null,ConsoleLogger:p,RestLogger:y,Abstractions:n};!function(e){e.width250xheight400="01",e.width390xheight400="02",e.width500xheight600="03",e.width600xheight400="04",e.fullscreen="05"}(S||(S={}));var D={__proto__:null,get ChallengeWindowSize(){return S}},b=/*#__PURE__*/function(){function e(e,t){this._options=void 0,this._logger=void 0,this._options=e,this._logger=t}return e.prototype.execute=function(t){var n=this;return t.authResponse.challengeUrl?new Promise(function(a,s){try{n._logger.log({message:"Challenge - Start",content:{authResponse:t.authResponse},method:"executeChallenge",correlationId:t.correlationId,level:r.Information}),n._options.container.innerHTML="";var c=l.createIFrame({parent:n._options.container,name:e.IFRAME_NAME,isVisible:!0,useDefaultStyle:!!n._options.onIFrameCreatedFn,onCreatedFn:n._options.onIFrameCreatedFn,onReadyFn:n._options.onIFrameReadyFn});n._logger.log({message:"Challenge - Create iFrame",method:"executeChallenge",correlationId:t.correlationId,level:r.Information});var u=l.createForm({parent:n._options.container,name:e.FORM_NAME,actionUrl:t.authResponse.challengeUrl,target:e.IFRAME_NAME,method:"post"});n._logger.log({message:"Challenge - Create form",method:"executeChallenge",correlationId:t.correlationId,level:r.Information});var h=l.createInput({parent:u,name:e.CREQ_INPUT_NAME,type:e.CREQ_INPUT_TYPE});n._logger.log({message:"Challenge - Create input",method:"executeChallenge",correlationId:t.correlationId,level:r.Information});var d={threeDSServerTransID:t.authResponse.processId,acsTransID:t.authResponse.challengeId,messageVersion:t.authResponse.challengeVersion,messageType:"CReq",challengeWindowSize:n._options.challengeWindowSize||S.width250xheight400},v=i.convert(d);h.value=v,n._logger.log({message:"Challenge - Prepare cReq",content:{cReq:d,base64CReq:v},method:"executeChallenge",correlationId:t.correlationId,level:r.Information});var m=new o;u.submit(),setTimeout(function e(){var o,i=c.contentDocument||(null==(o=c.contentWindow)?void 0:o.document);"complete"!=(null==i?void 0:i.readyState)?setTimeout(e,100):n._logger.log({message:"Challenge - iFrame loaded in "+m.elapsed+"ms",content:{iFrame:i.body.innerText},method:"executeChallenge",correlationId:t.correlationId,level:r.Information})},100),n._logger.log({message:"Challenge - Submit form",content:{authResponse:t.authResponse,cReq:d,base64CReq:v},method:"executeChallenge",correlationId:t.correlationId,level:r.Information}),a()}catch(e){return n._logger.log({message:"Challenge - error",content:{authResponse:t.authResponse},error:e,method:"executeChallenge",correlationId:t.correlationId,level:r.Error}),s({message:e.toString()})}}):Promise.resolve()},e}();b.IFRAME_NAME="challengeIframe",b.FORM_NAME="challengeForm",b.CREQ_INPUT_NAME="creq",b.CREQ_INPUT_TYPE="hidden";var A=/*#__PURE__*/function(){function e(e,t){this._logger=void 0,this._options=void 0,this._logger=t,this._options=e}return e.prototype.execute=function(t){var n=this;return t.preAuthResponse.dsMethodUrl?new Promise(function(a,s){try{var c;n._logger.log({message:"DirectoryServer - Start",content:{preAuthResponse:t},method:"executeDirectoryServer",correlationId:t.correlationId,level:r.Information}),n._options.container.innerHTML="";var u=l.createIFrame({parent:n._options.container,isVisible:!1,name:e.IFRAME_NAME,useDefaultStyle:!!n._options.onIFrameCreatedFn});null==(c=n._options.onIFrameCreatedFn)||c.call(n._options,u),n._logger.log({message:"DirectoryServer - Create iFrame",method:"executeDirectoryServer",correlationId:t.correlationId,level:r.Information});var h=l.createForm({parent:n._options.container,name:e.FORM_NAME,actionUrl:t.preAuthResponse.dsMethodUrl,target:e.IFRAME_NAME,method:"POST"});n._logger.log({message:"DirectoryServer - Create Form",method:"executeDirectoryServer",correlationId:t.correlationId,level:r.Information});var d=l.createInput({parent:h,name:e.FORM_INPUT_NAME,type:e.FROM_INPUT_TYPE});n._logger.log({message:"DirectoryServer - Create Input",method:"executeDirectoryServer",correlationId:t.correlationId,level:r.Information});var v={threeDSServerTransID:t.preAuthResponse.processId,threeDSMethodNotificationURL:t.preAuthResponse.notificationUrl},m=i.convert(v);d.value=m,n._logger.log({message:"DirectoryServer - Prepare threeDSMethodData",content:{threeDSMethodData:v,threeDSMethodDataBase64:m},method:"executeDirectoryServer",correlationId:t.correlationId,level:r.Information});var g=new o;h.submit(),setTimeout(function e(){var o,i=u.contentDocument||(null==(o=u.contentWindow)?void 0:o.document);"complete"!=(null==i?void 0:i.readyState)?setTimeout(e,100):n._logger.log({message:"DirectoryServer - iFrame loaded in "+g.elapsed+"ms",content:{iFrame:i.body.innerText},method:"executeDirectoryServer",correlationId:t.correlationId,level:r.Information})},100),n._logger.log({message:"DirectoryServer - Submit form",content:{threeDSMethodData:v,threeDSMethodDataBase64:m},method:"executeDirectoryServer",correlationId:t.correlationId,level:r.Information}),a()}catch(e){return n._logger.log({message:"DirectoryServer - Error",content:{preAuthResponse:t},error:e,method:"directoryServerExecute",correlationId:t.correlationId,level:r.Error}),s({message:e.toString()})}}):Promise.resolve()},e}();A.IFRAME_NAME="threeDSMethodIframe",A.FORM_NAME="threeDSMethodForm",A.FORM_INPUT_NAME="threeDSMethodData",A.FROM_INPUT_TYPE="hidden";var x=/*#__PURE__*/function(){function e(e,t,r,n,o){void 0===t&&(t=new y(e)),void 0===r&&(r=new m(e,t)),void 0===n&&(n=new A(e,t)),void 0===o&&(o=new b(e,t)),this._options=void 0,this._logger=void 0,this._client=void 0,this._directoryServer=void 0,this._challenge=void 0,this._options=e,this._logger=t,this._client=r,this._directoryServer=n,this._challenge=o}var t=e.prototype;return t.execute=function(e){try{var t=this;return Promise.resolve(t.preAuth(e)).then(function(r){return Promise.resolve(t._directoryServer.execute({preAuthResponse:r,correlationId:e.correlationId})).then(function(){return Promise.resolve(t.auth(e)).then(function(r){return Promise.resolve(t._challenge.execute({authResponse:r,correlationId:e.correlationId})).then(function(){return Promise.resolve(t.postAuth(e)).then(function(e){return Promise.resolve(t._logger.flush()).then(function(){return e})})})})})})}catch(e){return Promise.reject(e)}},t.preAuth=function(e){try{var t=this;return t._logger.log({message:"Executing PreAuth",content:e,method:"_preAuth",correlationId:e.correlationId,level:r.Information}),Promise.resolve(t._client.send({url:t._options.threeDSecureUrl+"/api/v2/"+e.id+"/preAuth",method:"POST",body:{browser:a.create()},correlationId:e.correlationId})).then(function(e){return Promise.resolve(e.getData())})}catch(e){return Promise.reject(e)}},t.auth=function(e){try{var t=this;return t._logger.log({message:"Executing Auth",content:e,method:"_auth",correlationId:e.correlationId,level:r.Information}),Promise.resolve(t._client.send({url:t._options.threeDSecureUrl+"/api/v1/"+e.id+"/auth",method:"POST",correlationId:e.correlationId})).then(function(e){return Promise.resolve(e.getData())})}catch(e){return Promise.reject(e)}},t.postAuth=function(e){try{var t=this;return t._logger.log({message:"Executing PostAuth",content:e,method:"_postAuth",correlationId:e.correlationId,level:r.Information}),Promise.resolve(t._client.send({url:t._options.threeDSecureUrl+"/api/v2/"+e.id+"/postAuth",method:"POST",correlationId:e.correlationId})).then(function(e){return Promise.resolve(e.getData())})}catch(e){return Promise.reject(e)}},e}(),E={__proto__:null,IFrameDirectoryServerService:A,IFrameChallengeService:b,ThreeDSecureService:x,Abstractions:D},T={__proto__:null,Abstractions:{__proto__:null},Utils:c};e.HttpClients=g,e.Loggers=P,e.Services=E,e.Shared=T,e.ThreeDSecureService=x});
//# sourceMappingURL=index.umd.js.map
