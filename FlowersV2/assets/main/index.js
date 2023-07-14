System.register("chunks:///_virtual/Boid.ts",["cc"],(function(t){var i,e,n;return{setters:[function(t){i=t.cclegacy,e=t._decorator,n=t.Renderer}],execute:function(){var o;i._RF.push({},"b8436JnEEpIYL01a+ZPRusP","Boid",void 0);var s=e.ccclass;e.property,t("Boid",s("Boid")(o=function(){function t(t,i,e){this.node=void 0,this.dx=void 0,this.dy=void 0,this.attackRange=3,this.attack=1,this.attackCoolDown=1e3,this.lastAttackTime=0,this.health=3,this.node=t,this.dx=i,this.dy=e}var i=t.prototype;return i.distance=function(t){return this.node.position.clone().subtract(t.node.position).length()},i.setSpeed=function(t,i){this.dx=t,this.dy=i},i.addSpeed=function(t,i){this.dx+=t,this.dy+=i},i.changeColor=function(t){this.node.getComponentInChildren(n).getMaterialInstance(0).setProperty("mainColor",t)},t}())||o);i._RF.pop()}}}));

System.register("chunks:///_virtual/ClickGen.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Rings.ts","./Utils.ts"],(function(t){var e,n,i,a,o,r,c,l,s,u,h,p,y,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,c=t.Node,l=t.geometry,s=t.input,u=t.Input,h=t.Vec3,p=t.Component},function(t){y=t.Rings},function(t){d=t.Utils}],execute:function(){var v,T,f,m,g;o._RF.push({},"23aa0PB+DBHEp+1aBDo886v","ClickGen",void 0);var C=r.ccclass,E=r.property;t("ClickGen",(v=C("ClickGen"),T=E({type:c}),v((g=e((m=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,i(e,"CamPiv",g,a(e)),e.ray=void 0,e.deltaThread=150,e.deltaAcumulate=0,e}n(e,t);var o=e.prototype;return o.start=function(){this.ray=new l.Ray,s.on(u.EventType.TOUCH_MOVE,this.OnTouchMove,this),s.on(u.EventType.TOUCH_START,this.OnTouchStart,this),s.on(u.EventType.TOUCH_END,this.OnTouchEnd,this)},o.OnTouchStart=function(t){this.deltaAcumulate=0},o.OnTouchMove=function(t){if(this.deltaAcumulate+=Math.abs(t.getDeltaX()),!(this.deltaAcumulate<this.deltaThread)){var e=d.cam.node.getWorldRotation().getEulerAngles(new h);e.y+=.4*-t.getDeltaX(),this.CamPiv.setWorldRotationFromEuler(e.x,e.y,e.z)}},o.OnTouchEnd=function(t){if(!(this.deltaAcumulate>this.deltaThread)){var e=t.getLocation();d.cam.screenPointToRay(e.x,e.y,this.ray),y.instance.onRayIn(this.ray)}},e}(p)).prototype,"CamPiv",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=m))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Gen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,a,r,o,l,s,u,c,p,h,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,l=t.Prefab,s=t.instantiate,u=t.director,c=t.Vec3,p=t.pseudoRandom,h=t.pseudoRandomRange,f=t.Component}],execute:function(){var b,d,m,g,y,w,v,M,z,R,C;r._RF.push({},"a30e2QCWk9L64u7RSufmgSU","Gen",void 0);var S=o.ccclass,x=o.property;t("Gen",(b=S("Gen"),d=x({type:l}),b((y=e((g=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r))||this,n(e,"prefab",y,a(e)),n(e,"maxCount",w,a(e)),n(e,"count",v,a(e)),n(e,"scale",M,a(e)),n(e,"angle",z,a(e)),e.list=null,n(e,"deltaTime",R,a(e)),n(e,"lerp",C,a(e)),e.lastUpdate=0,e}i(e,t);var r=e.prototype;return r.start=function(){this.list=new Array},r.addNew=function(){var t=Date.now();if(!(this.lastUpdate+this.deltaTime>t)){this.lastUpdate=t;var e=s(this.prefab);e.parent=u.getScene(),this.list.push(e)}},r.update=function(t){var e=this;this.list.length<this.count&&this.addNew(),this.list.forEach((function(t,i){e.updatePosition(t,e.maxCount-1-i)}))},r.updatePosition=function(t,e){var i=c.rotateY(new c,c.FORWARD.clone(),c.ZERO,e*this.angle),n=i.clone().multiplyScalar(Math.sqrt(e*this.scale)),a=e*this.angle,r=Math.sqrt(e*this.scale),o=r*(1-Math.sin(a));i.clone().multiplyScalar(o);p(e),a=h(e,0,360),a=360*p(e),a=e/this.maxCount*360;var l=.1*(r=10*this.scale)*16*Math.pow(Math.sin(a),3),s=.1*r*(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-1*Math.cos(4*a)),u=new c(-s,0,l),f=c.lerp(new c,u,n,this.lerp);t.position=c.lerp(new c,t.position,f,.1)},r.updateScale=function(t,e){this.lerp=t.progress},r.updateCount=function(t,e){this.count=t.progress*this.maxCount},e}(f)).prototype,"prefab",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=e(g.prototype,"maxCount",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),v=e(g.prototype,"count",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),M=e(g.prototype,"scale",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),z=e(g.prototype,"angle",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 137.5}}),R=e(g.prototype,"deltaTime",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),C=e(g.prototype,"lerp",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),m=g))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Gen.ts","./Boid.ts","./ClickGen.ts","./Rings.ts","./Utils.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Rings.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Boid.ts"],(function(t){var e,n,i,o,r,a,s,d,l,u,c,p,h,f,g,v,b;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.createForOfIteratorHelperLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){a=t.cclegacy,s=t._decorator,d=t.Prefab,l=t.Vec3,u=t.PhysicsSystem,c=t.randomRangeInt,p=t.instantiate,h=t.director,f=t.NodeSpace,g=t.Quat,v=t.Component},function(t){b=t.Boid}],execute:function(){var y,w,P,m,R,B,z,I,D,S,F,x,T,k;a._RF.push({},"2382bKgDb9ERIDhiSuDhuZ6","Rings",void 0);var H=s.ccclass,C=s.property,G=t("BoidState",function(t){return t[t.Centering=0]="Centering",t[t.Bounding=1]="Bounding",t}({}));t("Rings",(y=H("Rings"),w=C([d]),P=C({type:d}),y(((k=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,o(e,"prefabs",B,r(e)),o(e,"prefab",z,r(e)),e.pos=void 0,e.list=void 0,o(e,"lenRange",I,r(e)),o(e,"dampValue",D,r(e)),o(e,"centeringFactor",S,r(e)),o(e,"avoidFactor",F,r(e)),o(e,"minDistance",x,r(e)),o(e,"BoidState",T,r(e)),e}n(e,t);var a=e.prototype;return a.start=function(){e.instance=this,this.pos=new l,this.list=new Array},a.onRayIn=function(t){if(u.instance.raycast(t))for(var e=u.instance.raycastResults,n=0;n<e.length;n++){var i=e[n];return void this.onGenerate(i.hitPoint)}else console.log("raycast does not hit the target node !")},a.GetRandomPrefab=function(){return this.prefabs[c(0,this.prefabs.length)]},a.onGenerate=function(t){var e=p(this.GetRandomPrefab());e.parent=h.getScene(),e.setWorldPosition(t);var n=new b(e,0,0);this.list.push(n)},a.update=function(t){switch(this.BoidState){case G.Centering:this.updateBoid(t);break;case G.Bounding:this.updatePacking(t)}},a.damp=function(t){t.dx=this.dampValue*t.dx,t.dy=this.dampValue*t.dy},a.flyTowardsCenter=function(t){t.dx+=(0-t.node.position.x)*this.centeringFactor,t.dy+=(0-t.node.position.z)*this.centeringFactor},a.avoidOthers=function(t){for(var e,n=0,o=0,r=i(this.list);!(e=r()).done;){var a=e.value;if(a!==t&&t.distance(a)<this.minDistance){var s=t.node.position.clone().subtract(a.node.position),d=this.minDistance-s.length(),l=s.normalize();n+=l.x*d,o+=l.z*d}}t.dx+=n*this.avoidFactor,t.dy+=o*this.avoidFactor},a.updateBoid=function(t){this.updateBoidRotation(t);for(var e,n=i(this.list);!(e=n()).done;){var o=e.value;this.damp(o),this.flyTowardsCenter(o),this.avoidOthers(o)}for(var r,a=i(this.list);!(r=a()).done;){var s=r.value;s.node.translate(new l(s.dx*t,0,s.dy*t),f.WORLD)}this.updateBoidHeight(t)},a.updateBoidRotation=function(t){for(var e,n=i(this.list);!(e=n()).done;){var o=e.value,r=g.rotateAround(new g,g.IDENTITY,l.RIGHT,0);r=g.slerp(r,o.node.rotation,r,.1),o.node.setWorldRotation(r)}},a.updateBoidHeight=function(t){for(var e,n=i(this.list);!(e=n()).done;){var o=e.value,r=o.node.worldPosition.clone();r.y=0,o.node.setWorldPosition(l.lerp(new l,o.node.worldPosition,r,.1))}},a.updatePacking=function(t){this.updatePackingRotation(t),this.updatePackingHeight(t)},a.updatePackingRotation=function(t){for(var e,n=i(this.list);!(e=n()).done;){var o=e.value,r=o.node.worldPosition.clone();r.y=0;var a=r.length(),s=a/this.lenRange*Math.PI,d=Math.asin(o.node.worldPosition.x/a);o.node.worldPosition.z>0?d=-d:d+=Math.PI;var u=g.rotateAround(new g,g.IDENTITY,l.RIGHT,s);u=g.rotateAround(new g,u,l.UP,-d),u=g.slerp(new g,o.node.rotation,u,.1),o.node.setWorldRotation(u)}},a.updatePackingHeight=function(t){for(var e,n=i(this.list);!(e=n()).done;){var o=e.value,r=o.node.worldPosition.clone(),a=o.node.worldPosition.clone();a.y=0;var s=a.length();r.y=2*(1-s/this.lenRange*Math.PI),o.node.setWorldPosition(l.lerp(new l,o.node.worldPosition,r,.1))}},a.SwitchState=function(){this.BoidState=(this.BoidState+1)%(G.Bounding+1)},e}(v)).instance=void 0,B=e((R=k).prototype,"prefabs",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=e(R.prototype,"prefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=e(R.prototype,"lenRange",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),D=e(R.prototype,"dampValue",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.99}}),S=e(R.prototype,"centeringFactor",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.105}}),F=e(R.prototype,"avoidFactor",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.05}}),x=e(R.prototype,"minDistance",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),T=e(R.prototype,"BoidState",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return G.Centering}}),m=R))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/Utils.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,e,o,c,a,r;return{setters:[function(n){t=n.createClass},function(n){e=n.cclegacy,o=n.Color,c=n.Vec4,a=n.math,r=n.director}],execute:function(){e._RF.push({},"9bcc5lIZ2tBba5IyOH9BLXi","Utils",void 0),n("Utils",function(){function n(){}return n.Fibonacci=function(n){for(var t=0,e=1,o=1;n<o;){var c=e;e+=t,o+=t=c}return[0,t]},n.getRelativeToCam=function(n,t,e){return this.cam.node.position.clone().add(this.cam.node.up.clone().multiplyScalar(t)).add(this.cam.node.forward.clone().multiplyScalar(e)).add(this.cam.node.right.clone().multiplyScalar(n))},n.getCameraRotate=function(){return this.cam.node.rotation},n.RandomColor=function(){return o.fromVec4(new c(a.random(),a.random(),a.random(),255),new o)},t(n,null,[{key:"cam",get:function(){if(null==n._cam){var t=r.getScene().getComponentInChildren("cc.Camera");null!=t&&(n._cam=t)}return n._cam}}]),n}())._cam=void 0,e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});