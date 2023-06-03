"use strict";(self.webpackChunkjaxworld_app=self.webpackChunkjaxworld_app||[]).push([[3829],{63829:function(t,r,e){e.r(r),e.d(r,{Vote:function(){return x}});var n=e(29439),a=e(74165),o=e(15861),s=e(15671),c=e(43144),i=e(4110),u=e(42014),p=e(49242),d=e(93358),h=e(19560),f=e(18383),l=e(39707),v=function(t){return t[t.Against=0]="Against",t[t.For=1]="For",t[t.Abstain=2]="Abstain",t}({}),x=(e(64166),e(79955),e(15267),e(86168),e(7605),e(60862),e(89806),function(){function t(r,e,n){var c=this;(0,s.Z)(this,t);var p=this,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},f=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,v=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new u.dC(r,e,f,h);(0,i._)(this,"contractWrapper",void 0),(0,i._)(this,"storage",void 0),(0,i._)(this,"abi",void 0),(0,i._)(this,"metadata",void 0),(0,i._)(this,"app",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"estimator",void 0),(0,i._)(this,"events",void 0),(0,i._)(this,"interceptor",void 0),(0,i._)(this,"_chainId",void 0),(0,i._)(this,"propose",(0,u.du)(function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e){var n,o,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e||(e=[{toAddress:c.contractWrapper.readContract.address,nativeTokenValue:0,transactionData:"0x"}]),n=e.map((function(t){return t.toAddress})),o=e.map((function(t){return t.nativeTokenValue})),s=e.map((function(t){return t.transactionData})),t.abrupt("return",u.aU.fromContractWrapper({contractWrapper:c.contractWrapper,method:"propose",args:[n,o,s,r],parse:function(t){return{id:c.contractWrapper.parseLogs("ProposalCreated",null===t||void 0===t?void 0:t.logs)[0].args.proposalId,receipt:t}}}));case 5:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,i._)(this,"vote",(0,u.du)(function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e){var n,o=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:"",t.next=3,p.ensureExists(r);case 3:return t.abrupt("return",u.aU.fromContractWrapper({contractWrapper:p.contractWrapper,method:"castVoteWithReason",args:[r,e,n]}));case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),(0,i._)(this,"execute",(0,u.du)(function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e,n,o,s,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ensureExists(r);case 2:return t.next=4,c.get(r);case 4:return e=t.sent,n=e.executions.map((function(t){return t.toAddress})),o=e.executions.map((function(t){return t.nativeTokenValue})),s=e.executions.map((function(t){return t.transactionData})),i=d.id(e.description),t.abrupt("return",u.aU.fromContractWrapper({contractWrapper:c.contractWrapper,method:"execute",args:[n,o,s,i]}));case 10:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),this._chainId=l,this.abi=u.e.parse(f||[]),this.contractWrapper=v,this.storage=n,this.metadata=new u.ai(this.contractWrapper,u.dT,this.storage),this.app=new u.aW(this.contractWrapper,this.metadata,this.storage),this.encoder=new u.ah(this.contractWrapper),this.estimator=new u.aO(this.contractWrapper),this.events=new u.aP(this.contractWrapper),this.interceptor=new u.aQ(this.contractWrapper)}return(0,c.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"get",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e,n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAll();case 2:if(e=t.sent,0!==(n=e.filter((function(t){return t.proposalId.eq(h.O$.from(r))}))).length){t.next=6;break}throw new Error("proposal not found");case 6:return t.abrupt("return",n[0]);case 7:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getAll",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var r=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Promise,t.next=3,this.contractWrapper.readContract.getAllProposals();case 3:return t.t1=t.sent.map(function(){var t=(0,o.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.proposalId,t.t1=e.proposer,t.t2=e.description,t.t3=e.startBlock,t.t4=e.endBlock,t.next=7,r.contractWrapper.readContract.state(e.proposalId);case 7:return t.t5=t.sent,t.next=10,r.getProposalVotes(e.proposalId);case 10:return t.t6=t.sent,t.t7=e[3].map((function(t,r){return{toAddress:e.targets[r],nativeTokenValue:t,transactionData:e.calldatas[r]}})),t.abrupt("return",{proposalId:t.t0,proposer:t.t1,description:t.t2,startBlock:t.t3,endBlock:t.t4,state:t.t5,votes:t.t6,executions:t.t7});case 13:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t.abrupt("return",t.t0.all.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getProposalVotes",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.proposalVotes(r);case 2:return e=t.sent,t.abrupt("return",[{type:v.Against,label:"Against",count:e.againstVotes},{type:v.For,label:"For",count:e.forVotes},{type:v.Abstain,label:"Abstain",count:e.abstainVotes}]);case 4:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"hasVoted",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return t.next=3,this.contractWrapper.getSignerAddress();case 3:e=t.sent;case 4:return t.t0=this.contractWrapper.readContract,t.t1=r,t.next=8,(0,u.dv)(e);case 8:return t.t2=t.sent,t.abrupt("return",t.t0.hasVoted.call(t.t0,t.t1,t.t2));case 10:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"canExecute",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e,n,o,s,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.ensureExists(r);case 2:return t.next=4,this.get(r);case 4:return e=t.sent,n=e.executions.map((function(t){return t.toAddress})),o=e.executions.map((function(t){return t.nativeTokenValue})),s=e.executions.map((function(t){return t.transactionData})),c=d.id(e.description),t.prev=9,t.next=12,this.contractWrapper.callStatic().execute(n,o,s,c);case 12:return t.abrupt("return",!0);case 15:return t.prev=15,t.t0=t.catch(9),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,this,[[9,15]])})));return function(r){return t.apply(this,arguments)}}()},{key:"balance",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.provider.getBalance(this.contractWrapper.readContract.address);case 2:return r=t.sent,t.abrupt("return",{name:"",symbol:"",decimals:18,value:r,displayValue:f.formatUnits(r,18)});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfToken",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l.CH,t.next=3,(0,u.dv)(r);case 3:return t.t1=t.sent,t.t2=p,t.t3=this.contractWrapper.getProvider(),e=new t.t0(t.t1,t.t2,t.t3),t.t4=u.bX,t.t5=this.contractWrapper.getProvider(),t.t6=r,t.next=12,e.balanceOf(this.contractWrapper.readContract.address);case 12:return t.t7=t.sent,t.next=15,(0,t.t4)(t.t5,t.t6,t.t7);case 15:return t.abrupt("return",t.sent);case 16:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"ensureExists",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.contractWrapper.readContract.state(r);case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),Error("Proposal ".concat(r," not found"));case 8:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(r){return t.apply(this,arguments)}}()},{key:"settings",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var r,e,o,s,c,i,p,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([this.contractWrapper.readContract.votingDelay(),this.contractWrapper.readContract.votingPeriod(),this.contractWrapper.readContract.token(),this.contractWrapper.readContract["quorumNumerator()"](),this.contractWrapper.readContract.proposalThreshold()]);case 2:return r=t.sent,e=(0,n.Z)(r,5),o=e[0],s=e[1],c=e[2],i=e[3],p=e[4],t.next=11,(0,u.bW)(this.contractWrapper.getProvider(),c);case 11:return d=t.sent,t.abrupt("return",{votingDelay:o.toString(),votingPeriod:s.toString(),votingTokenAddress:c,votingTokenMetadata:d,votingQuorumFraction:i.toString(),proposalTokenThreshold:p.toString()});case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.aU.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r,e,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(r,e,n));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()}]),t}())}}]);