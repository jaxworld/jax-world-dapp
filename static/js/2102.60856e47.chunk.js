"use strict";(self.webpackChunkjaxworld_dapp=self.webpackChunkjaxworld_dapp||[]).push([[2102],{2102:(t,e,i)=>{i.d(e,{PhantomConnector:()=>w});var n=i(95768),s=i(40744),c=i(84714),o=i(36236),a=i(85372),h=i(28552),r=i(67587),d=(i(62349),i(78466)),u=new WeakMap;class w extends a.InjectedConnector{constructor(t){const e={...{name:"Phantom",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:r.g},...t.options};super({chains:t.chains,options:e,connectorStorage:t.connectorStorage}),(0,s._)(this,"id",o.w.phantom),(0,n._)(this,u,{writable:!0,value:void 0}),(0,n.a)(this,u,e.UNSTABLE_shimOnConnectSelectAccount)}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e,i;const a=await this.getProvider();if(!a)throw new c.a;this.setupListeners(),this.emit("message",{type:"connecting"});let r=null;if((0,n.b)(this,u)&&null!==(e=this.options)&&void 0!==e&&e.shimDisconnect&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))){r=await this.getAccount().catch((()=>null));if(!!r)try{await a.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(s){if(this.isUserRejectedRequestError(s))throw new c.U(s)}}if(!r){const t=await a.request({method:"eth_requestAccounts"});r=h.getAddress(t[0])}let w=await this.getChainId(),l=this.isChainUnsupported(w);if(t.chainId&&w!==t.chainId)try{await this.switchChain(t.chainId),w=t.chainId,l=this.isChainUnsupported(t.chainId)}catch(o){d.error("Could not switch to chain id : ".concat(t.chainId),o)}null!==(i=this.options)&&void 0!==i&&i.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const p={chain:{id:w,unsupported:l},provider:a,account:r};return this.emit("connect",p),p}catch(s){if(this.isUserRejectedRequestError(s))throw new c.U(s);if(-32002===s.code)throw new c.R(s);throw s}}async switchAccount(){const t=await this.getProvider();await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}}}]);