"use strict";(self.webpackChunkjaxworld_dapp=self.webpackChunkjaxworld_dapp||[]).push([[677],{93207:(e,t,i)=>{function r(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}i.d(t,{n:()=>r})},70677:(e,t,i)=>{i.d(t,{PaperWalletConnector:()=>h});var r=i(95768),n=i(40744),s=i(86750),a=i(67608),o=i(28552),l=i(15920),c=i(93207),d=(i(62349),new WeakMap),u=new WeakMap;class h extends s.C{constructor(e){super(),(0,n._)(this,"id",l.w.paper),(0,n._)(this,"name","Paper Wallet"),(0,n._)(this,"ready",!0),(0,n._)(this,"user",null),(0,r._)(this,d,{writable:!0,value:void 0}),(0,n._)(this,"options",void 0),(0,r._)(this,u,{writable:!0,value:void 0}),(0,n._)(this,"onAccountsChanged",(async e=>{0===e.length?await this.onDisconnect():this.emit("change",{account:o.getAddress(e[0])})})),(0,n._)(this,"onChainChanged",(e=>{const t=(0,c.n)(e),i=-1===this.options.chains.findIndex((e=>e.chainId===t));this.emit("change",{chain:{id:t,unsupported:i}})})),(0,n._)(this,"onDisconnect",(async()=>{this.emit("disconnect")})),this.options=e}getPaperSDK(){return(0,r.b)(this,d)||(0,r.a)(this,d,new Promise((async(e,t)=>{try{const{PaperEmbeddedWalletSdk:t}=await Promise.resolve().then(i.bind(i,67608));e(new t({clientId:this.options.clientId,chain:"Ethereum"}))}catch(r){t(r)}}))),(0,r.b)(this,d)}async connect(e){const t=await this.getPaperSDK();if(!t)throw new Error("Paper SDK not initialized");let i=await t.getUser();switch(i.status){case a.J0.LOGGED_OUT:{let i;i=null!==e&&void 0!==e&&e.email?await t.auth.loginWithPaperEmailOtp({email:e.email}):await t.auth.loginWithPaperModal(),this.user=i.user;break}case a.J0.LOGGED_IN_WALLET_INITIALIZED:this.user=i}if(!this.user)throw new Error("Error connecting User");return this.setupListeners(),this.getAddress()}async disconnect(){const e=await(0,r.b)(this,d);await(null===e||void 0===e?void 0:e.auth.logout()),this.user=null}async getAddress(){return(await this.getSigner()).getAddress()}async isConnected(){try{return!!await this.getAddress()}catch(e){return!1}}async getProvider(){const e=await this.getSigner();if(!e.provider)throw new Error("Provider not found");return e.provider}async getSigner(){var e;if((0,r.b)(this,u))return(0,r.b)(this,u);if(!this.user){const e=await this.getPaperSDK();let t=await e.getUser();if(t.status===a.J0.LOGGED_IN_WALLET_INITIALIZED)this.user=t}const t=await(null===(e=this.user)||void 0===e?void 0:e.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]}));if(!t)throw new Error("Signer not found");return(0,r.a)(this,u,t),t}async isAuthorized(){return!1}async switchChain(e){var t,i;const n=this.options.chains.find((t=>t.chainId===e));if(!n)throw new Error("Chain not configured");await(null===(t=this.user)||void 0===t?void 0:t.wallet.setChain({chain:"Ethereum"})),(0,r.a)(this,u,await(null===(i=this.user)||void 0===i?void 0:i.wallet.getEthersJsSigner({rpcEndpoint:n.rpc[0]}))),this.emit("change",{chain:{id:e,unsupported:!1}})}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}updateChains(e){this.options.chains=e}async getEmail(){if(await this.getProvider(),!this.user)throw new Error("No user found, Paper Wallet is not connected");return this.user.authDetails.email}}},67608:(e,t,i)=>{i.d(t,{PaperEmbeddedWalletSdk:()=>G,J0:()=>C});var r,n,s={Ethereum:"https://rpc.ankr.com/eth",Goerli:"https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",Mumbai:"https://rpc-mumbai.maticvigil.com",Polygon:"https://rpc-mainnet.maticvigil.com",Avalanche:"https://api.avax.network/ext/bc/C/rpc",Optimism:"https://optimism.rpc.thirdweb.com",OptimismGoerli:"https://optimism-goerli.rpc.thirdweb.com",BSC:"https://binance.rpc.thirdweb.com",BSCTestnet:"https://binance-testnet.rpc.thirdweb.com",ArbitrumOne:"https://arbitrum.rpc.thirdweb.com",ArbitrumGoerli:"https://arbitrum-goerli.rpc.thirdweb.com",Fantom:"https://fantom.rpc.thirdweb.com",FantomTestnet:"https://fantom-testnet.rpc.thirdweb.com"},a=()=>{var e;return"undefined"!=typeof window&&"true"===window.localStorage.getItem("IS_PAPER_DEV")?null!=(e=window.localStorage.getItem("PAPER_DEV_URL"))?e:"http://localhost:3000":"undefined"!=typeof window&&window.location.origin.includes("paper.xyz")?window.location.origin:"https://withpaper.com"},o=i(57494),l=i(72388),c=i(54812),d=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,I=(e,t,i)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,w=(e,t)=>{for(var i in t||(t={}))g.call(t,i)&&I(e,i,t[i]);if(p)for(var i of p(t))m.call(t,i)&&I(e,i,t[i]);return e},v=(e,t)=>u(e,h(t)),f=(e,t,i)=>new Promise(((r,n)=>{var s=e=>{try{o(i.next(e))}catch(t){n(t)}},a=e=>{try{o(i.throw(e))}catch(t){n(t)}},o=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);o((i=i.apply(e,t)).next())})),y="/sdk/2022-08-12/embedded-wallet",E=e=>"paperEwsWalletUserId-".concat(e),L=e=>"".concat("walletToken","-").concat(e),S=(e,t)=>"".concat("a","-").concat(e,"-").concat(t),A=(e=>(e.PAPER_EMAIL_OTP="PaperEmailOTP",e.GOOGLE="Google",e.TWITTER="Twitter",e.AUTH0="Auth0",e.CUSTOM_JWT="CustomJWT",e))(A||{}),C=((n=C||{}).LOGGED_OUT="Logged Out",n.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",n),_=((r=_||{}).LOGGED_OUT="Logged Out",r.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",r.LOGGED_IN_NEW_DEVICE="Logged In, New Device",r.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",r),b=new Map,D=class{constructor(e){let{clientId:t}=e;this.isSupported="undefined"!=typeof window&&!!window.localStorage,this.clientId=t}getItem(e){return f(this,null,(function*(){var t;return this.isSupported?window.localStorage.getItem(e):null!=(t=b.get(e))?t:null}))}setItem(e,t){return f(this,null,(function*(){if(this.isSupported)return window.localStorage.setItem(e,t);b.set(e,t)}))}removeItem(e){return f(this,null,(function*(){let t=yield this.getItem(e);return!(!this.isSupported||!t)&&(window.localStorage.removeItem(e),!0)}))}saveAuthCookie(e){return f(this,null,(function*(){yield this.setItem(L(this.clientId),e)}))}getAuthCookie(){return f(this,null,(function*(){return this.getItem(L(this.clientId))}))}removeAuthCookie(){return f(this,null,(function*(){return this.removeItem(L(this.clientId))}))}saveDeviceShare(e,t){return f(this,null,(function*(){yield this.saveWalletUserId(t),yield this.setItem(S(this.clientId,t),e)}))}getDeviceShare(){return f(this,null,(function*(){let e=yield this.getWalletUserId();return e?this.getItem(S(this.clientId,e)):null}))}removeDeviceShare(){return f(this,null,(function*(){let e=yield this.getWalletUserId();return!!e&&this.removeItem(S(this.clientId,e))}))}getWalletUserId(){return f(this,null,(function*(){return this.getItem(E(this.clientId))}))}saveWalletUserId(e){return f(this,null,(function*(){yield this.setItem(E(this.clientId),e)}))}removeWalletUserId(){return f(this,null,(function*(){return this.removeItem(E(this.clientId))}))}};function P(e){return new Promise((t=>{setTimeout(t,1e3*e)}))}var O={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},T=new Map,W=class{constructor(e){let{link:t,iframeId:i,container:r=document.body,iframeStyles:n,onIframeInitialize:s}=e;this.POLLING_INTERVAL_SECONDS=1.4,this.POST_LOAD_BUFFER_SECONDS=1;let a=document.getElementById(i),o=new URL(t),l="1.0.1";if(o.searchParams.set("sdkVersion",l),!a||a.src!=o.href){if(!a){a=document.createElement("iframe");let e=w(w({},O),n);Object.assign(a.style,e),a.setAttribute("id",i),r.appendChild(a)}a.src=o.href,a.setAttribute("data-version",l),a.onload=this.onIframeLoadHandler(a,this.POST_LOAD_BUFFER_SECONDS,s)}this.iframe=a}onIframeLoadedInitVariables(){return f(this,null,(function*(){return{}}))}onIframeLoadHandler(e,t,i){return()=>f(this,null,(function*(){yield new Promise(((r,n)=>f(this,null,(function*(){var s;let o=new MessageChannel;o.port1.onmessage=t=>{let{data:s}=t;return o.port1.close(),s.success?(T.set(e.src,!0),i&&i(),r(!0)):n(new Error(s.error))},yield P(t);null==(s=null==e?void 0:e.contentWindow)||s.postMessage({eventType:"initIframe",data:yield this.onIframeLoadedInitVariables()},"".concat(a()).concat(y),[o.port2])}))))}))}call(e){return f(this,arguments,(function(e){var t=this;let{procedureName:i,params:r,showIframe:n=!1,injectRecoveryCode:s={isInjectRecoveryCode:!1}}=e;return function*(){for(;!T.get(t.iframe.src);)yield P(t.POLLING_INTERVAL_SECONDS);return n&&(t.iframe.style.display="block",yield P(.005)),new Promise(((e,o)=>{var l;if(s.isInjectRecoveryCode){let e=i=>f(t,null,(function*(){var t,r;if(i.origin!==a()||"paper_getRecoveryCode"!==i.data.type||"string"!=typeof i.data.userWalletId)return;let n=yield null==(t=s.getRecoveryCode)?void 0:t.call(s,i.data.userWalletId);null==(r=this.iframe.contentWindow)||r.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:n},a()),window.removeEventListener("message",e)}));window.addEventListener("message",e)}let c=new MessageChannel;c.port1.onmessage=i=>f(t,null,(function*(){let{data:t}=i;c.port1.close(),n&&(yield P(.1),this.iframe.style.display="none"),t.success?e(t.data):o(new Error(t.error))})),null==(l=t.iframe.contentWindow)||l.postMessage({eventType:i,data:r},"".concat(a()).concat(y),[c.port2])}))}()}))}destroy(){T.delete(this.iframe.src)}},N=class extends W{constructor(e){let{clientId:t,customizationOptions:i}=e;super({iframeId:k,link:U({clientId:t,path:y,queryParams:i}).href,container:document.body}),this.clientId=t}onIframeLoadedInitVariables(){return f(this,null,(function*(){let e=new D({clientId:this.clientId});return{authCookie:yield e.getAuthCookie(),deviceShareStored:yield e.getDeviceShare(),walletUserId:yield e.getWalletUserId(),clientId:this.clientId}}))}};function U(e){let{clientId:t,path:i,queryParams:r}=e;var n;let s=new URL(i,a());if(r)for(let a of Object.keys(r))s.searchParams.set(a,(null==(n=r[a])?void 0:n.toString())||"");return s.searchParams.set("clientId",t),s}var k="paper-embedded-wallet-iframe",R=class{constructor(e){let{chain:t,clientId:i,querier:r}=e;this.chain=t,this.clientId=i,this.gaslessTransactionQuerier=r}callContract(e){return f(this,arguments,(function(e){var t=this;let{contractAddress:i,methodArgs:r,methodInterface:n}=e;return function*(){return yield t.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:t.chain,contractAddress:i,method:{args:r,stub:n}}})}()}))}},M=class extends l.Signer{constructor(e){let{provider:t,clientId:i,querier:r}=e;var n;super(),this.DEFAULT_ETHEREUM_CHAIN_ID=5,this.clientId=i,this.querier=r,this.endpoint=null==(n=t.connection)?void 0:n.url,(0,c.defineReadOnly)(this,"provider",t)}getAddress(){return f(this,null,(function*(){let{address:e}=yield this.querier.call({procedureName:"getAddress",params:void 0});return e}))}signMessage(e){return f(this,null,(function*(){var t,i,r,n;let s=yield null==(t=this.provider)?void 0:t.getNetwork();s&&s._defaultProvider;let{signedMessage:a}=yield this.querier.call({procedureName:"signMessage",params:{message:e,chainId:null!=(n=null==(r=yield null==(i=this.provider)?void 0:i.getNetwork())?void 0:r.chainId)?n:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a}))}signTransaction(e){return f(this,null,(function*(){var t,i,r;let{signedTransaction:n}=yield this.querier.call({procedureName:"signTransaction",params:{transaction:e,chainId:null!=(r=null==(i=yield null==(t=this.provider)?void 0:t.getNetwork())?void 0:i.chainId)?r:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return n}))}_signTypedData(e,t,i){return f(this,null,(function*(){var r,n,s;let{signedTypedData:a}=yield this.querier.call({procedureName:"signTypedDataV4",params:{domain:e,types:t,message:i,chainId:null!=(s=null==(n=yield null==(r=this.provider)?void 0:r.getNetwork())?void 0:n.chainId)?s:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a}))}connect(e){return new M({clientId:this.clientId,provider:e,querier:this.querier})}},G=class{constructor(e){let{clientId:t,chain:i,styles:r}=e;this.clientId=t,this.querier=new N({clientId:t,customizationOptions:r}),this.wallet=new class{constructor(e){let{clientId:t,chain:i,querier:r}=e;this.clientId=t,this.chain=i,this.walletManagerQuerier=r,this.gasless=new R({chain:i,clientId:t,querier:r}),this.localStorage=new D({clientId:t})}postWalletSetUp(e){return f(this,arguments,(function(e){var t=this;let{deviceShareStored:i,walletAddress:r,isIframeStorageEnabled:n,walletUserId:s}=e;return function*(){return n||(yield t.localStorage.saveDeviceShare(i,s)),{walletAddress:r}}()}))}getUserWalletStatus(){return f(this,null,(function*(){let e=yield this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return"Logged In, Wallet Initialized"===e.status?{status:"Logged In, Wallet Initialized",user:v(w({},e.user),{wallet:this})}:e}))}setChain(e){return f(this,arguments,(function(e){var t=this;let{chain:i}=e;return function*(){t.chain=i,t.gasless=new R({chain:i,clientId:t.clientId,querier:t.walletManagerQuerier})}()}))}getEthersJsSigner(e){return f(this,null,(function*(){var t;return new M({clientId:this.clientId,provider:(0,o.getDefaultProvider)(null!=(t=null==e?void 0:e.rpcEndpoint)?t:s[this.chain]),querier:this.walletManagerQuerier})}))}}({clientId:t,chain:i,querier:this.querier}),this.auth=new class{constructor(e){let{clientId:t,querier:i,onAuthSuccess:r}=e;this.clientId=t,this.AuthQuerier=i,this.localStorage=new D({clientId:t}),this.onAuthSuccess=r}preLogin(){return f(this,null,(function*(){yield this.logout()}))}postLogin(e){return f(this,arguments,(function(e){var t=this;let{storedToken:i,walletDetails:r}=e;return function*(){return i.shouldStoreCookieString&&(yield t.localStorage.saveAuthCookie(i.cookieString)),yield t.onAuthSuccess({storedToken:i,walletDetails:r})}()}))}loginWithJwtAuth(e){return f(this,arguments,(function(e){var t=this;let{token:i,authProvider:r,recoveryCode:n}=e;return function*(){yield t.preLogin();let e=yield t.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:i,authProvider:r,recoveryCode:n}});return t.postLogin(e)}()}))}loginWithPaperModal(e){return f(this,null,(function*(){yield this.preLogin();let t=yield this.AuthQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:null==e?void 0:e.getRecoveryCode}});return this.postLogin(t)}))}loginWithPaperEmailOtp(e){return f(this,arguments,(function(e){var t=this;let{email:i,recoveryCode:r}=e;return function*(){yield t.preLogin();let e=yield t.AuthQuerier.call({procedureName:"loginWithPaperModal",params:{email:i,recoveryCode:r},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return t.postLogin(e)}()}))}sendPaperEmailLoginOtp(e){return f(this,arguments,(function(e){var t=this;let{email:i}=e;return function*(){yield t.preLogin();let{isNewUser:e,isNewDevice:r}=yield t.AuthQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:i}});return{isNewUser:e,isNewDevice:r}}()}))}verifyPaperEmailLoginOtp(e){return f(this,arguments,(function(e){var t=this;let{email:i,otp:r,recoveryCode:n}=e;return function*(){let e=yield t.AuthQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:i,otp:r,recoveryCode:n},injectRecoveryCode:{isInjectRecoveryCode:!0}});return t.postLogin(e)}()}))}logout(){return f(this,null,(function*(){let{success:e}=yield this.AuthQuerier.call({procedureName:"logout",params:void 0}),t=yield this.localStorage.removeAuthCookie(),i=yield this.localStorage.removeWalletUserId();return{success:e||t||i}}))}}({clientId:t,querier:this.querier,onAuthSuccess:e=>f(this,null,(function*(){return yield this.wallet.postWalletSetUp(v(w({},e.walletDetails),{walletUserId:e.storedToken.authDetails.userWalletId})),{user:{status:"Logged In, Wallet Initialized",authDetails:e.storedToken.authDetails,wallet:this.wallet,walletAddress:e.walletDetails.walletAddress}}}))})}getUser(){return f(this,null,(function*(){let e=yield this.wallet.getUserWalletStatus();switch(e.status){case"Logged In, New Device":case"Logged In, Wallet Uninitialized":return yield this.auth.logout(),this.getUser();case"Logged Out":return{status:"Logged Out"};case"Logged In, Wallet Initialized":return w({status:"Logged In, Wallet Initialized"},e.user)}}))}}}}]);