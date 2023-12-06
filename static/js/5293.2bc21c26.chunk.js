"use strict";(self.webpackChunkjaxworld_dapp=self.webpackChunkjaxworld_dapp||[]).push([[5293],{9341:(t,r,a)=>{a.d(r,{S:()=>n});var e=a(56986),i=a(99598);class n{get chainId(){return this._chainId}constructor(t,r,a){(0,e._)(this,"contractWrapper",void 0),(0,e._)(this,"storage",void 0),(0,e._)(this,"erc721",void 0),(0,e._)(this,"_chainId",void 0),(0,e._)(this,"transfer",(0,i.ds)((async(t,r)=>this.erc721.transfer.prepare(t,r)))),(0,e._)(this,"setApprovalForAll",(0,i.ds)((async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)))),(0,e._)(this,"setApprovalForToken",(0,i.ds)((async(t,r)=>i.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await(0,i.cH)(t),r]})))),this.contractWrapper=t,this.storage=r,this.erc721=new i.au(this.contractWrapper,this.storage,a),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await(0,i.cH)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await(0,i.cH)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},55293:(t,r,a)=>{a.r(r),a.d(r,{SignatureDrop:()=>h});var e=a(56986),i=a(99598),n=a(9341),s=a(55214),c=a(19560),o=a(81895);a(64166),a(62349),a(7605),a(60862),a(89806),a(79955);class h extends n.S{constructor(t,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.dz(t,r,c,n),a,o),(0,e._)(this,"abi",void 0),(0,e._)(this,"owner",void 0),(0,e._)(this,"encoder",void 0),(0,e._)(this,"estimator",void 0),(0,e._)(this,"metadata",void 0),(0,e._)(this,"app",void 0),(0,e._)(this,"sales",void 0),(0,e._)(this,"platformFees",void 0),(0,e._)(this,"events",void 0),(0,e._)(this,"roles",void 0),(0,e._)(this,"interceptor",void 0),(0,e._)(this,"royalties",void 0),(0,e._)(this,"claimConditions",void 0),(0,e._)(this,"revealer",void 0),(0,e._)(this,"signature",void 0),(0,e._)(this,"checkout",void 0),(0,e._)(this,"createBatch",(0,i.ds)((async(t,r)=>this.erc721.lazyMint.prepare(t,r)))),(0,e._)(this,"claimTo",(0,i.ds)((async(t,r,a)=>this.erc721.claimTo.prepare(t,r,a)))),(0,e._)(this,"claim",(0,i.ds)((async(t,r)=>this.erc721.claim.prepare(t,r)))),(0,e._)(this,"burn",(0,i.ds)((async t=>this.erc721.burn.prepare(t)))),this.abi=i.e.parse(c||[]),this.metadata=new i.ag(this.contractWrapper,i.dM,this.storage),this.app=new i.a$(this.contractWrapper,this.metadata,this.storage),this.roles=new i.ah(this.contractWrapper,h.contractRoles),this.royalties=new i.ai(this.contractWrapper,this.metadata),this.sales=new i.aj(this.contractWrapper),this.encoder=new i.af(this.contractWrapper),this.estimator=new i.aP(this.contractWrapper),this.events=new i.aQ(this.contractWrapper),this.platformFees=new i.aS(this.contractWrapper),this.interceptor=new i.aR(this.contractWrapper),this.claimConditions=new i.al(this.contractWrapper,this.metadata,this.storage),this.signature=new i.aD(this.contractWrapper,this.storage),this.revealer=new i.ak(this.contractWrapper,this.storage,i.dN.name,(()=>this.erc721.nextTokenIdToMint())),this.signature=new i.aD(this.contractWrapper,this.storage),this.owner=new i.aU(this.contractWrapper),this.checkout=new s.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),r=await this.totalUnclaimedSupply();return t.add(r)}async getAllClaimed(t){const r=c.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=c.O$.from((null===t||void 0===t?void 0:t.count)||e.c).toNumber(),i=Math.min((await this.totalClaimedSupply()).toNumber(),r+a);return await Promise.all(Array.from(Array(i).keys()).map((t=>this.get(t.toString()))))}async getAllUnclaimed(t){const r=c.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=c.O$.from((null===t||void 0===t?void 0:t.count)||e.c).toNumber(),i=c.O$.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),n=c.O$.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),i.toNumber()+a));return await Promise.all(Array.from(Array(n.sub(i).toNumber()).keys()).map((t=>this.erc721.getTokenMetadata(i.add(t).toString()))))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole((0,i.bE)("transfer"),o.d)}async getClaimTransaction(t,r,a){return this.erc721.getClaimTransaction(t,r,a)}async prepare(t,r,a){return i.aV.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}(0,e._)(h,"contractRoles",["admin","minter","transfer"])},55214:(t,r,a)=>{a.d(r,{a:()=>p});var e=a(56986),i=a(99598),n=a(17389);const s="".concat("https://paper.xyz/api","/").concat("2022-08-12","/platform/thirdweb"),c={[i.cT.Mainnet]:"Ethereum",[i.cT.Goerli]:"Goerli",[i.cT.Polygon]:"Polygon",[i.cT.Mumbai]:"Mumbai",[i.cT.Avalanche]:"Avalanche"};async function o(t,r){const a=function(t){return(0,n.Z)(t in c,"chainId not supported by paper: ".concat(t)),c[t]}(r),e=await fetch("".concat(s,"/register-contract?contractAddress=").concat(t,"&chain=").concat(a)),i=await e.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}const h={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};class p{constructor(t){(0,e._)(this,"contractWrapper",void 0),this.contractWrapper=t}async getCheckoutId(){return o(this.contractWrapper.readContract.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await async function(t,r){const a=await fetch("".concat(s,"/checkout-link-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...h,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),e=await a.json();return(0,n.Z)(e.checkoutLinkIntentUrl,"Failed to create checkout link intent"),e.checkoutLinkIntentUrl}(await this.getCheckoutId(),t)}}}}]);