"use strict";(self.webpackChunkjaxworld_dapp=self.webpackChunkjaxworld_dapp||[]).push([[1608],{41608:function(t,r,e){e.r(r),e.d(r,{MarketplaceV3:function(){return p}});var n=e(74165),i=e(15861),a=e(15671),s=e(43144),c=e(56986),o=e(66290),p=(e(64166),e(87962),e(7605),e(60862),e(89806),e(72439),function(){function t(r,e,n){(0,a.Z)(this,t);var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.dz(r,e,s,i);(0,c._)(this,"abi",void 0),(0,c._)(this,"contractWrapper",void 0),(0,c._)(this,"storage",void 0),(0,c._)(this,"encoder",void 0),(0,c._)(this,"events",void 0),(0,c._)(this,"estimator",void 0),(0,c._)(this,"platformFees",void 0),(0,c._)(this,"metadata",void 0),(0,c._)(this,"app",void 0),(0,c._)(this,"roles",void 0),(0,c._)(this,"interceptor",void 0),(0,c._)(this,"_chainId",void 0),this._chainId=p,this.abi=o.e.parse(s||[]),this.contractWrapper=h,this.storage=n,this.metadata=new o.ag(this.contractWrapper,o.dF,this.storage),this.app=new o.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new o.ah(this.contractWrapper,t.contractRoles),this.encoder=new o.af(this.contractWrapper),this.estimator=new o.aP(this.contractWrapper),this.events=new o.aQ(this.contractWrapper),this.platformFees=new o.aS(this.contractWrapper),this.interceptor=new o.aR(this.contractWrapper)}return(0,s.Z)(t,[{key:"directListings",get:function(){return(0,o.b_)(this.detectDirectListings(),o.dG)}},{key:"englishAuctions",get:function(){return(0,o.b_)(this.detectEnglishAuctions(),o.dH)}},{key:"offers",get:function(){return(0,o.b_)(this.detectOffers(),o.dI)}},{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"prepare",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(r,e,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:i}));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(r,e,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(r,e,i));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"detectDirectListings",value:function(){if((0,o.b$)(this.contractWrapper,"DirectListings"))return new o.aM(this.contractWrapper,this.storage)}},{key:"detectEnglishAuctions",value:function(){if((0,o.b$)(this.contractWrapper,"EnglishAuctions"))return new o.aN(this.contractWrapper,this.storage)}},{key:"detectOffers",value:function(){if((0,o.b$)(this.contractWrapper,"Offers"))return new o.aO(this.contractWrapper,this.storage)}}]),t}());(0,c._)(p,"contractRoles",["admin","lister","asset"])}}]);