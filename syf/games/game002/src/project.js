window.__require=function t(o,i,e){function c(r,s){if(!i[r]){if(!o[r]){var a=r.split("/");if(a=a[a.length-1],!o[a]){var l="function"==typeof __require&&__require;if(!s&&l)return l(a,!0);if(n)return n(a,!0);throw new Error("Cannot find module '"+r+"'")}}var h=i[r]={exports:{}};o[r][0].call(h.exports,function(t){return c(o[r][1][t]||t)},h,h.exports,t,o,i,e)}return i[r].exports}for(var n="function"==typeof __require&&__require,r=0;r<e.length;r++)c(e[r]);return c}({ball:[function(t,o,i){"use strict";cc._RF.push(o,"34f46jeArdLLpXvcvIIkW4G","ball"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.initVel=0},onBeginContact:function(t,o,i){var e=o.node.getComponent(cc.RigidBody);this.initVel?e.linearVelocity=cc.v2(0,this.initVel):this.initVel=e.linearVelocity.y}}),cc._RF.pop()},{}],block:[function(t,o,i){"use strict";cc._RF.push(o,"6caa2cf2M5J4p8kDgItLzUm","block"),cc.Class({extends:cc.Component,properties:{},init:function(t,o){var i=this.node.getComponent(cc.PhysicsBoxCollider);this.node.width=t,this.node.y=o,i.size.width=t}}),cc._RF.pop()},{}],game:[function(t,o,i){"use strict";cc._RF.push(o,"06469PGaARASbWTuDV/B4lP","game"),cc.Class({extends:cc.Component,properties:{ballNode:cc.Node,blockPrefab:cc.Prefab,blockAreaNode:cc.Node,scoreLabel:cc.Label},onLoad:function(){this.initPhysics(),this.node.on("touchstart",this.boost,this),this.score=0,this.gameStart=0,this.initBlock()},onDestroy:function(){this.node.off("touchstart",this.boost,this)},update:function(t){if(this.gameStart){var o=-(300*(this.score/20+1))*t,i=!0,e=!1,c=void 0;try{for(var n,r=this.blockNodeArr[Symbol.iterator]();!(i=(n=r.next()).done);i=!0){var s=n.value;s.x+=o,s.x<-cc.winSize.width/2-s.width/2&&(this.incrScore(1),s.x=this.getLastBlockPosX()+200)}}catch(t){e=!0,c=t}finally{try{!i&&r.return&&r.return()}finally{if(e)throw c}}}this.ballNode.y<-cc.winSize.height/2&&(console.log("\u6e38\u620f\u501f\u5bbf"),cc.director.loadScene("game"))},incrScore:function(t){this.score+=t,this.scoreLabel.string=this.score},getLastBlockPosX:function(){var t=0,o=!0,i=!1,e=void 0;try{for(var c,n=this.blockNodeArr[Symbol.iterator]();!(o=(c=n.next()).done);o=!0){var r=c.value;r.x>t&&(t=r.x)}}catch(t){i=!0,e=t}finally{try{!o&&n.return&&n.return()}finally{if(i)throw e}}return t},initBlock:function(){this.lastBlockPosX=this.ballNode.x,this.blockNodeArr=[];for(var t=0;t<10;t++){var o=cc.instantiate(this.blockPrefab);o.x=this.lastBlockPosX,o.y=0;var i=40*Math.random()+80,e=50*Math.random()*(Math.random()>.5?-1:1);o.getComponent("block").init(i,e),this.blockAreaNode.addChild(o),this.blockNodeArr.push(o),this.lastBlockPosX+=200}},initPhysics:function(){var t=cc.director.getPhysicsManager();t.enabled=!0,t.gravity=cc.v2(0,-2400)},boost:function(){this.ballNode.getComponent("ball").initVel&&(this.ballNode.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,-2e3),this.gameStart=1)}}),cc._RF.pop()},{}]},{},["ball","block","game"]);