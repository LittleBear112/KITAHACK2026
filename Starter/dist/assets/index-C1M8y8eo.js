function Yy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Jy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hm={exports:{}},bl={},fm={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),Zy=Symbol.for("react.fragment"),ew=Symbol.for("react.strict_mode"),tw=Symbol.for("react.profiler"),nw=Symbol.for("react.provider"),rw=Symbol.for("react.context"),iw=Symbol.for("react.forward_ref"),sw=Symbol.for("react.suspense"),ow=Symbol.for("react.memo"),lw=Symbol.for("react.lazy"),bh=Symbol.iterator;function aw(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mm=Object.assign,gm={};function ni(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}ni.prototype.isReactComponent={};ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _m(){}_m.prototype=ni.prototype;function xc(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}var Nc=xc.prototype=new _m;Nc.constructor=xc;mm(Nc,ni.prototype);Nc.isPureReactComponent=!0;var Ah=Array.isArray,vm=Object.prototype.hasOwnProperty,Rc={current:null},ym={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vm.call(e,r)&&!ym.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ns,type:t,key:s,ref:o,props:i,_owner:Rc.current}}function uw(t,e){return{$$typeof:Ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ns}function cw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Oh=/\/+/g;function ga(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cw(""+t.key):e.toString(36)}function _o(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ns:case Xy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ga(o,0):r,Ah(i)?(n="",t!=null&&(n=t.replace(Oh,"$&/")+"/"),_o(i,e,n,"",function(u){return u})):i!=null&&(Pc(i)&&(i=uw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Oh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ah(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ga(s,l);o+=_o(s,e,n,a,i)}else if(a=aw(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ga(s,l++),o+=_o(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qs(t,e,n){if(t==null)return t;var r=[],i=0;return _o(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var De={current:null},vo={transition:null},hw={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Rc};function Em(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Qs,forEach:function(t,e,n){Qs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qs(t,function(){e++}),e},toArray:function(t){return Qs(t,function(e){return e})||[]},only:function(t){if(!Pc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=ni;U.Fragment=Zy;U.Profiler=tw;U.PureComponent=xc;U.StrictMode=ew;U.Suspense=sw;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;U.act=Em;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)vm.call(e,a)&&!ym.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ns,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:rw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nw,_context:t},t.Consumer=t};U.createElement=wm;U.createFactory=function(t){var e=wm.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:iw,render:t}};U.isValidElement=Pc;U.lazy=function(t){return{$$typeof:lw,_payload:{_status:-1,_result:t},_init:dw}};U.memo=function(t,e){return{$$typeof:ow,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=vo.transition;vo.transition={};try{t()}finally{vo.transition=e}};U.unstable_act=Em;U.useCallback=function(t,e){return De.current.useCallback(t,e)};U.useContext=function(t){return De.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return De.current.useDeferredValue(t)};U.useEffect=function(t,e){return De.current.useEffect(t,e)};U.useId=function(){return De.current.useId()};U.useImperativeHandle=function(t,e,n){return De.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return De.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return De.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return De.current.useMemo(t,e)};U.useReducer=function(t,e,n){return De.current.useReducer(t,e,n)};U.useRef=function(t){return De.current.useRef(t)};U.useState=function(t){return De.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return De.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return De.current.useTransition()};U.version="18.3.1";fm.exports=U;var w=fm.exports;const Sm=Jy(w),fw=Yy({__proto__:null,default:Sm},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pw=w,mw=Symbol.for("react.element"),gw=Symbol.for("react.fragment"),_w=Object.prototype.hasOwnProperty,vw=pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yw={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_w.call(e,r)&&!yw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mw,type:t,key:s,ref:o,props:i,_owner:vw.current}}bl.Fragment=gw;bl.jsx=Cm;bl.jsxs=Cm;hm.exports=bl;var c=hm.exports,ou={},Im={exports:{}},Qe={},Tm={exports:{}},km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,O){var L=P.length;P.push(O);e:for(;0<L;){var ie=L-1>>>1,ce=P[ie];if(0<i(ce,O))P[ie]=O,P[L]=ce,L=ie;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],L=P.pop();if(L!==O){P[0]=L;e:for(var ie=0,ce=P.length,Ks=ce>>>1;ie<Ks;){var Fn=2*(ie+1)-1,ma=P[Fn],Un=Fn+1,qs=P[Un];if(0>i(ma,L))Un<ce&&0>i(qs,ma)?(P[ie]=qs,P[Un]=L,ie=Un):(P[ie]=ma,P[Fn]=L,ie=Fn);else if(Un<ce&&0>i(qs,L))P[ie]=qs,P[Un]=L,ie=Un;else break e}}return O}function i(P,O){var L=P.sortIndex-O.sortIndex;return L!==0?L:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,d=null,f=3,m=!1,g=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=P)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function E(P){if(y=!1,v(P),!g)if(n(a)!==null)g=!0,fa(I);else{var O=n(u);O!==null&&pa(E,O.startTime-P)}}function I(P,O){g=!1,y&&(y=!1,_(N),N=-1),m=!0;var L=f;try{for(v(O),d=n(a);d!==null&&(!(d.expirationTime>O)||P&&!ot());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var ce=ie(d.expirationTime<=O);O=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),v(O)}else r(a);d=n(a)}if(d!==null)var Ks=!0;else{var Fn=n(u);Fn!==null&&pa(E,Fn.startTime-O),Ks=!1}return Ks}finally{d=null,f=L,m=!1}}var k=!1,x=null,N=-1,q=5,F=-1;function ot(){return!(t.unstable_now()-F<q)}function mi(){if(x!==null){var P=t.unstable_now();F=P;var O=!0;try{O=x(!0,P)}finally{O?gi():(k=!1,x=null)}}else k=!1}var gi;if(typeof p=="function")gi=function(){p(mi)};else if(typeof MessageChannel<"u"){var Ph=new MessageChannel,Qy=Ph.port2;Ph.port1.onmessage=mi,gi=function(){Qy.postMessage(null)}}else gi=function(){S(mi,0)};function fa(P){x=P,k||(k=!0,gi())}function pa(P,O){N=S(function(){P(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,fa(I))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var L=f;f=O;try{return P()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=f;f=P;try{return O()}finally{f=L}},t.unstable_scheduleCallback=function(P,O,L){var ie=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ie+L:ie):L=ie,P){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=L+ce,P={id:h++,callback:O,priorityLevel:P,startTime:L,expirationTime:ce,sortIndex:-1},L>ie?(P.sortIndex=L,e(u,P),n(a)===null&&P===n(u)&&(y?(_(N),N=-1):y=!0,pa(E,L-ie))):(P.sortIndex=ce,e(a,P),g||m||(g=!0,fa(I))),P},t.unstable_shouldYield=ot,t.unstable_wrapCallback=function(P){var O=f;return function(){var L=f;f=O;try{return P.apply(this,arguments)}finally{f=L}}}})(km);Tm.exports=km;var ww=Tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=w,qe=ww;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xm=new Set,Xi={};function dr(t,e){Hr(t,e),Hr(t+"Capture",e)}function Hr(t,e){for(Xi[t]=e,t=0;t<e.length;t++)xm.add(e[t])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,Sw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lh={},Dh={};function Cw(t){return lu.call(Dh,t)?!0:lu.call(Lh,t)?!1:Sw.test(t)?Dh[t]=!0:(Lh[t]=!0,!1)}function Iw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Tw(t,e,n,r){if(e===null||typeof e>"u"||Iw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new Me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new Me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new Me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new Me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new Me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new Me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new Me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new Me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new Me(t,5,!1,t.toLowerCase(),null,!1,!1)});var bc=/[\-:]([a-z])/g;function Ac(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bc,Ac);Ce[e]=new Me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bc,Ac);Ce[e]=new Me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bc,Ac);Ce[e]=new Me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new Me(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new Me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oc(t,e,n,r){var i=Ce.hasOwnProperty(e)?Ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Tw(e,n,i,r)&&(n=null),r||i===null?Cw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),wr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),cu=Symbol.for("react.suspense_list"),Mc=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Pm=Symbol.for("react.offscreen"),Mh=Symbol.iterator;function _i(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,_a;function Pi(t){if(_a===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_a=e&&e[1]||""}return`
`+_a+t}var va=!1;function ya(t,e){if(!t||va)return"";va=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{va=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pi(t):""}function kw(t){switch(t.tag){case 5:return Pi(t.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return t=ya(t.type,!1),t;case 11:return t=ya(t.type.render,!1),t;case 1:return t=ya(t.type,!0),t;default:return""}}function du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Er:return"Fragment";case wr:return"Portal";case au:return"Profiler";case Lc:return"StrictMode";case uu:return"Suspense";case cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rm:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case Dc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mc:return e=t.displayName||null,e!==null?e:du(t.type)||"Memo";case sn:e=t._payload,t=t._init;try{return du(t(e))}catch{}}return null}function xw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return du(e);case 8:return e===Lc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nw(t){var e=bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Js(t){t._valueTracker||(t._valueTracker=Nw(t))}function Am(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hu(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Om(t,e){e=e.checked,e!=null&&Oc(t,"checked",e,!1)}function fu(t,e){Om(t,e);var n=Nn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&pu(t,e.type,Nn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pu(t,e,n){(e!=="number"||Lo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bi=Array.isArray;function Or(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(bi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nn(n)}}function Lm(t,e){var n=Nn(e.value),r=Nn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xs,Mm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xs=Xs||document.createElement("div"),Xs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rw=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){Rw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mi[e]=Mi[t]})});function jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+e).trim():e+"px"}function Fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Pw=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(t,e){if(e){if(Pw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yu=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wu=null,Lr=null,Dr=null;function Bh(t){if(t=bs(t)){if(typeof wu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Ml(e),wu(t.stateNode,t.type,e))}}function Um(t){Lr?Dr?Dr.push(t):Dr=[t]:Lr=t}function zm(){if(Lr){var t=Lr,e=Dr;if(Dr=Lr=null,Bh(t),e)for(t=0;t<e.length;t++)Bh(e[t])}}function Bm(t,e){return t(e)}function Wm(){}var wa=!1;function Vm(t,e,n){if(wa)return t(e,n);wa=!0;try{return Bm(t,e,n)}finally{wa=!1,(Lr!==null||Dr!==null)&&(Wm(),zm())}}function es(t,e){var n=t.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Eu=!1;if(Vt)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Eu=!1}function bw(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ji=!1,Do=null,Mo=!1,Su=null,Aw={onError:function(t){ji=!0,Do=t}};function Ow(t,e,n,r,i,s,o,l,a){ji=!1,Do=null,bw.apply(Aw,arguments)}function Lw(t,e,n,r,i,s,o,l,a){if(Ow.apply(this,arguments),ji){if(ji){var u=Do;ji=!1,Do=null}else throw Error(C(198));Mo||(Mo=!0,Su=u)}}function hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(hr(t)!==t)throw Error(C(188))}function Dw(t){var e=t.alternate;if(!e){if(e=hr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wh(i),t;if(s===r)return Wh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function $m(t){return t=Dw(t),t!==null?Gm(t):null}function Gm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gm(t);if(e!==null)return e;t=t.sibling}return null}var Km=qe.unstable_scheduleCallback,Vh=qe.unstable_cancelCallback,Mw=qe.unstable_shouldYield,jw=qe.unstable_requestPaint,se=qe.unstable_now,Fw=qe.unstable_getCurrentPriorityLevel,Fc=qe.unstable_ImmediatePriority,qm=qe.unstable_UserBlockingPriority,jo=qe.unstable_NormalPriority,Uw=qe.unstable_LowPriority,Qm=qe.unstable_IdlePriority,Al=null,kt=null;function zw(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Vw,Bw=Math.log,Ww=Math.LN2;function Vw(t){return t>>>=0,t===0?32:31-(Bw(t)/Ww|0)|0}var Zs=64,eo=4194304;function Ai(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ai(l):(s&=o,s!==0&&(r=Ai(s)))}else o=n&~i,o!==0?r=Ai(o):s!==0&&(r=Ai(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gt(e),i=1<<n,r|=t[n],e&=~i;return r}function Hw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $w(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Hw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ym(){var t=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),t}function Ea(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=n}function Gw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Uc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Jm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xm,zc,Zm,eg,tg,Iu=!1,to=[],gn=null,_n=null,vn=null,ts=new Map,ns=new Map,ln=[],Kw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(t,e){switch(t){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":ts.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(e.pointerId)}}function yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bs(e),e!==null&&zc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qw(t,e,n,r,i){switch(e){case"focusin":return gn=yi(gn,t,e,n,r,i),!0;case"dragenter":return _n=yi(_n,t,e,n,r,i),!0;case"mouseover":return vn=yi(vn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ts.set(s,yi(ts.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ns.set(s,yi(ns.get(s)||null,t,e,n,r,i)),!0}return!1}function ng(t){var e=Hn(t.target);if(e!==null){var n=hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Hm(n),e!==null){t.blockedOn=e,tg(t.priority,function(){Zm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yu=r,n.target.dispatchEvent(r),yu=null}else return e=bs(n),e!==null&&zc(e),t.blockedOn=n,!1;e.shift()}return!0}function $h(t,e,n){yo(t)&&n.delete(e)}function Qw(){Iu=!1,gn!==null&&yo(gn)&&(gn=null),_n!==null&&yo(_n)&&(_n=null),vn!==null&&yo(vn)&&(vn=null),ts.forEach($h),ns.forEach($h)}function wi(t,e){t.blockedOn===e&&(t.blockedOn=null,Iu||(Iu=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Qw)))}function rs(t){function e(i){return wi(i,t)}if(0<to.length){wi(to[0],t);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gn!==null&&wi(gn,t),_n!==null&&wi(_n,t),vn!==null&&wi(vn,t),ts.forEach(e),ns.forEach(e),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&ln.shift()}var Mr=Yt.ReactCurrentBatchConfig,Uo=!0;function Yw(t,e,n,r){var i=W,s=Mr.transition;Mr.transition=null;try{W=1,Bc(t,e,n,r)}finally{W=i,Mr.transition=s}}function Jw(t,e,n,r){var i=W,s=Mr.transition;Mr.transition=null;try{W=4,Bc(t,e,n,r)}finally{W=i,Mr.transition=s}}function Bc(t,e,n,r){if(Uo){var i=Tu(t,e,n,r);if(i===null)ba(t,e,r,zo,n),Hh(t,r);else if(qw(i,t,e,n,r))r.stopPropagation();else if(Hh(t,r),e&4&&-1<Kw.indexOf(t)){for(;i!==null;){var s=bs(i);if(s!==null&&Xm(s),s=Tu(t,e,n,r),s===null&&ba(t,e,r,zo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ba(t,e,r,null,n)}}var zo=null;function Tu(t,e,n,r){if(zo=null,t=jc(r),t=Hn(t),t!==null)if(e=hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zo=t,null}function rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fw()){case Fc:return 1;case qm:return 4;case jo:case Uw:return 16;case Qm:return 536870912;default:return 16}default:return 16}}var hn=null,Wc=null,wo=null;function ig(){if(wo)return wo;var t,e=Wc,n=e.length,r,i="value"in hn?hn.value:hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wo=i.slice(t,1<r?1-r:void 0)}function Eo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function Gh(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:Gh,this.isPropagationStopped=Gh,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=Ye(ri),Ps=te({},ri,{view:0,detail:0}),Xw=Ye(Ps),Sa,Ca,Ei,Ol=te({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(Sa=t.screenX-Ei.screenX,Ca=t.screenY-Ei.screenY):Ca=Sa=0,Ei=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:Ca}}),Kh=Ye(Ol),Zw=te({},Ol,{dataTransfer:0}),e0=Ye(Zw),t0=te({},Ps,{relatedTarget:0}),Ia=Ye(t0),n0=te({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Ye(n0),i0=te({},ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s0=Ye(i0),o0=te({},ri,{data:0}),qh=Ye(o0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=u0[t])?!!e[t]:!1}function Hc(){return c0}var d0=te({},Ps,{key:function(t){if(t.key){var e=l0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?Eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h0=Ye(d0),f0=te({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=Ye(f0),p0=te({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),m0=Ye(p0),g0=te({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=Ye(g0),v0=te({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=Ye(v0),w0=[9,13,27,32],$c=Vt&&"CompositionEvent"in window,Fi=null;Vt&&"documentMode"in document&&(Fi=document.documentMode);var E0=Vt&&"TextEvent"in window&&!Fi,sg=Vt&&(!$c||Fi&&8<Fi&&11>=Fi),Yh=" ",Jh=!1;function og(t,e){switch(t){case"keyup":return w0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function S0(t,e){switch(t){case"compositionend":return lg(e);case"keypress":return e.which!==32?null:(Jh=!0,Yh);case"textInput":return t=e.data,t===Yh&&Jh?null:t;default:return null}}function C0(t,e){if(Sr)return t==="compositionend"||!$c&&og(t,e)?(t=ig(),wo=Wc=hn=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sg&&e.locale!=="ko"?null:e.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I0[t.type]:e==="textarea"}function ag(t,e,n,r){Um(r),e=Bo(e,"onChange"),0<e.length&&(n=new Vc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ui=null,is=null;function T0(t){yg(t,0)}function Ll(t){var e=Tr(t);if(Am(e))return t}function k0(t,e){if(t==="change")return e}var ug=!1;if(Vt){var Ta;if(Vt){var ka="oninput"in document;if(!ka){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),ka=typeof Zh.oninput=="function"}Ta=ka}else Ta=!1;ug=Ta&&(!document.documentMode||9<document.documentMode)}function ef(){Ui&&(Ui.detachEvent("onpropertychange",cg),is=Ui=null)}function cg(t){if(t.propertyName==="value"&&Ll(is)){var e=[];ag(e,is,t,jc(t)),Vm(T0,e)}}function x0(t,e,n){t==="focusin"?(ef(),Ui=e,is=n,Ui.attachEvent("onpropertychange",cg)):t==="focusout"&&ef()}function N0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(is)}function R0(t,e){if(t==="click")return Ll(e)}function P0(t,e){if(t==="input"||t==="change")return Ll(e)}function b0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:b0;function ss(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lu.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,e){var n=tf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tf(n)}}function dg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hg(){for(var t=window,e=Lo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lo(t.document)}return e}function Gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function A0(t){var e=hg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dg(n.ownerDocument.documentElement,n)){if(r!==null&&Gc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nf(n,s);var o=nf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var O0=Vt&&"documentMode"in document&&11>=document.documentMode,Cr=null,ku=null,zi=null,xu=!1;function rf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xu||Cr==null||Cr!==Lo(r)||(r=Cr,"selectionStart"in r&&Gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zi&&ss(zi,r)||(zi=r,r=Bo(ku,"onSelect"),0<r.length&&(e=new Vc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Cr)))}function ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ir={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},xa={},fg={};Vt&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Dl(t){if(xa[t])return xa[t];if(!Ir[t])return t;var e=Ir[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fg)return xa[t]=e[n];return t}var pg=Dl("animationend"),mg=Dl("animationiteration"),gg=Dl("animationstart"),_g=Dl("transitionend"),vg=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,e){vg.set(t,e),dr(e,[t])}for(var Na=0;Na<sf.length;Na++){var Ra=sf[Na],L0=Ra.toLowerCase(),D0=Ra[0].toUpperCase()+Ra.slice(1);Ln(L0,"on"+D0)}Ln(pg,"onAnimationEnd");Ln(mg,"onAnimationIteration");Ln(gg,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(_g,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function of(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Lw(r,e,void 0,t),t.currentTarget=null}function yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;of(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;of(i,l,u),s=a}}}if(Mo)throw t=Su,Mo=!1,Su=null,t}function Q(t,e){var n=e[Au];n===void 0&&(n=e[Au]=new Set);var r=t+"__bubble";n.has(r)||(wg(e,t,2,!1),n.add(r))}function Pa(t,e,n){var r=0;e&&(r|=4),wg(n,t,r,e)}var io="_reactListening"+Math.random().toString(36).slice(2);function os(t){if(!t[io]){t[io]=!0,xm.forEach(function(n){n!=="selectionchange"&&(M0.has(n)||Pa(n,!1,t),Pa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[io]||(e[io]=!0,Pa("selectionchange",!1,e))}}function wg(t,e,n,r){switch(rg(e)){case 1:var i=Yw;break;case 4:i=Jw;break;default:i=Bc}n=i.bind(null,e,n,t),i=void 0,!Eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ba(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Vm(function(){var u=s,h=jc(n),d=[];e:{var f=vg.get(t);if(f!==void 0){var m=Vc,g=t;switch(t){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":m=h0;break;case"focusin":g="focus",m=Ia;break;case"focusout":g="blur",m=Ia;break;case"beforeblur":case"afterblur":m=Ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=e0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=m0;break;case pg:case mg:case gg:m=r0;break;case _g:m=_0;break;case"scroll":m=Xw;break;case"wheel":m=y0;break;case"copy":case"cut":case"paste":m=s0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qh}var y=(e&4)!==0,S=!y&&t==="scroll",_=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,v;p!==null;){v=p;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,_!==null&&(E=es(p,_),E!=null&&y.push(ls(p,E,v)))),S)break;p=p.return}0<y.length&&(f=new m(f,g,null,n,h),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==yu&&(g=n.relatedTarget||n.fromElement)&&(Hn(g)||g[Ht]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Hn(g):null,g!==null&&(S=hr(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(y=Kh,E="onMouseLeave",_="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Qh,E="onPointerLeave",_="onPointerEnter",p="pointer"),S=m==null?f:Tr(m),v=g==null?f:Tr(g),f=new y(E,p+"leave",m,n,h),f.target=S,f.relatedTarget=v,E=null,Hn(h)===u&&(y=new y(_,p+"enter",g,n,h),y.target=v,y.relatedTarget=S,E=y),S=E,m&&g)t:{for(y=m,_=g,p=0,v=y;v;v=vr(v))p++;for(v=0,E=_;E;E=vr(E))v++;for(;0<p-v;)y=vr(y),p--;for(;0<v-p;)_=vr(_),v--;for(;p--;){if(y===_||_!==null&&y===_.alternate)break t;y=vr(y),_=vr(_)}y=null}else y=null;m!==null&&lf(d,f,m,y,!1),g!==null&&S!==null&&lf(d,S,g,y,!0)}}e:{if(f=u?Tr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var I=k0;else if(Xh(f))if(ug)I=P0;else{I=N0;var k=x0}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=R0);if(I&&(I=I(t,u))){ag(d,I,n,h);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&pu(f,"number",f.value)}switch(k=u?Tr(u):window,t){case"focusin":(Xh(k)||k.contentEditable==="true")&&(Cr=k,ku=u,zi=null);break;case"focusout":zi=ku=Cr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,rf(d,n,h);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":rf(d,n,h)}var x;if($c)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Sr?og(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(sg&&n.locale!=="ko"&&(Sr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Sr&&(x=ig()):(hn=h,Wc="value"in hn?hn.value:hn.textContent,Sr=!0)),k=Bo(u,N),0<k.length&&(N=new qh(N,t,null,n,h),d.push({event:N,listeners:k}),x?N.data=x:(x=lg(n),x!==null&&(N.data=x)))),(x=E0?S0(t,n):C0(t,n))&&(u=Bo(u,"onBeforeInput"),0<u.length&&(h=new qh("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=x))}yg(d,e)})}function ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=es(t,n),s!=null&&r.unshift(ls(t,s,i)),s=es(t,e),s!=null&&r.push(ls(t,s,i))),t=t.return}return r}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=es(n,s),a!=null&&o.unshift(ls(n,a,l))):i||(a=es(n,s),a!=null&&o.push(ls(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var j0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function af(t){return(typeof t=="string"?t:""+t).replace(j0,`
`).replace(F0,"")}function so(t,e,n){if(e=af(e),af(t)!==e&&n)throw Error(C(425))}function Wo(){}var Nu=null,Ru=null;function Pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,z0=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(t){return uf.resolve(null).then(t).catch(B0)}:bu;function B0(t){setTimeout(function(){throw t})}function Aa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),rs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rs(e)}function yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ii=Math.random().toString(36).slice(2),Tt="__reactFiber$"+ii,as="__reactProps$"+ii,Ht="__reactContainer$"+ii,Au="__reactEvents$"+ii,W0="__reactListeners$"+ii,V0="__reactHandles$"+ii;function Hn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ht]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cf(t);t!==null;){if(n=t[Tt])return n;t=cf(t)}return e}t=n,n=t.parentNode}return null}function bs(t){return t=t[Tt]||t[Ht],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Ml(t){return t[as]||null}var Ou=[],kr=-1;function Dn(t){return{current:t}}function Y(t){0>kr||(t.current=Ou[kr],Ou[kr]=null,kr--)}function K(t,e){kr++,Ou[kr]=t.current,t.current=e}var Rn={},Pe=Dn(Rn),We=Dn(!1),Xn=Rn;function $r(t,e){var n=t.type.contextTypes;if(!n)return Rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(t){return t=t.childContextTypes,t!=null}function Vo(){Y(We),Y(Pe)}function df(t,e,n){if(Pe.current!==Rn)throw Error(C(168));K(Pe,e),K(We,n)}function Eg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,xw(t)||"Unknown",i));return te({},n,r)}function Ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,Xn=Pe.current,K(Pe,t),K(We,We.current),!0}function hf(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Eg(t,e,Xn),r.__reactInternalMemoizedMergedChildContext=t,Y(We),Y(Pe),K(Pe,t)):Y(We),K(We,n)}var Lt=null,jl=!1,Oa=!1;function Sg(t){Lt===null?Lt=[t]:Lt.push(t)}function H0(t){jl=!0,Sg(t)}function Mn(){if(!Oa&&Lt!==null){Oa=!0;var t=0,e=W;try{var n=Lt;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Lt=null,jl=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(t+1)),Km(Fc,Mn),i}finally{W=e,Oa=!1}}return null}var xr=[],Nr=0,$o=null,Go=0,Xe=[],Ze=0,Zn=null,Dt=1,Mt="";function zn(t,e){xr[Nr++]=Go,xr[Nr++]=$o,$o=t,Go=e}function Cg(t,e,n){Xe[Ze++]=Dt,Xe[Ze++]=Mt,Xe[Ze++]=Zn,Zn=t;var r=Dt;t=Mt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var s=32-gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-gt(e)+i|n<<i|r,Mt=s+t}else Dt=1<<s|n<<i|r,Mt=t}function Kc(t){t.return!==null&&(zn(t,1),Cg(t,1,0))}function qc(t){for(;t===$o;)$o=xr[--Nr],xr[Nr]=null,Go=xr[--Nr],xr[Nr]=null;for(;t===Zn;)Zn=Xe[--Ze],Xe[Ze]=null,Mt=Xe[--Ze],Xe[Ze]=null,Dt=Xe[--Ze],Xe[Ze]=null}var Ke=null,Ge=null,J=!1,ct=null;function Ig(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ff(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zn!==null?{id:Dt,overflow:Mt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Ge=null,!0):!1;default:return!1}}function Lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(J){var e=Ge;if(e){var n=e;if(!ff(t,e)){if(Lu(t))throw Error(C(418));e=yn(n.nextSibling);var r=Ke;e&&ff(t,e)?Ig(r,n):(t.flags=t.flags&-4097|2,J=!1,Ke=t)}}else{if(Lu(t))throw Error(C(418));t.flags=t.flags&-4097|2,J=!1,Ke=t}}}function pf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function oo(t){if(t!==Ke)return!1;if(!J)return pf(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pu(t.type,t.memoizedProps)),e&&(e=Ge)){if(Lu(t))throw Tg(),Error(C(418));for(;e;)Ig(t,e),e=yn(e.nextSibling)}if(pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Ke?yn(t.stateNode.nextSibling):null;return!0}function Tg(){for(var t=Ge;t;)t=yn(t.nextSibling)}function Gr(){Ge=Ke=null,J=!1}function Qc(t){ct===null?ct=[t]:ct.push(t)}var $0=Yt.ReactCurrentBatchConfig;function Si(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function lo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mf(t){var e=t._init;return e(t._payload)}function kg(t){function e(_,p){if(t){var v=_.deletions;v===null?(_.deletions=[p],_.flags|=16):v.push(p)}}function n(_,p){if(!t)return null;for(;p!==null;)e(_,p),p=p.sibling;return null}function r(_,p){for(_=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function i(_,p){return _=Cn(_,p),_.index=0,_.sibling=null,_}function s(_,p,v){return _.index=v,t?(v=_.alternate,v!==null?(v=v.index,v<p?(_.flags|=2,p):v):(_.flags|=2,p)):(_.flags|=1048576,p)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,p,v,E){return p===null||p.tag!==6?(p=za(v,_.mode,E),p.return=_,p):(p=i(p,v),p.return=_,p)}function a(_,p,v,E){var I=v.type;return I===Er?h(_,p,v.props.children,E,v.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===sn&&mf(I)===p.type)?(E=i(p,v.props),E.ref=Si(_,p,v),E.return=_,E):(E=No(v.type,v.key,v.props,null,_.mode,E),E.ref=Si(_,p,v),E.return=_,E)}function u(_,p,v,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ba(v,_.mode,E),p.return=_,p):(p=i(p,v.children||[]),p.return=_,p)}function h(_,p,v,E,I){return p===null||p.tag!==7?(p=Yn(v,_.mode,E,I),p.return=_,p):(p=i(p,v),p.return=_,p)}function d(_,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=za(""+p,_.mode,v),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ys:return v=No(p.type,p.key,p.props,null,_.mode,v),v.ref=Si(_,null,p),v.return=_,v;case wr:return p=Ba(p,_.mode,v),p.return=_,p;case sn:var E=p._init;return d(_,E(p._payload),v)}if(bi(p)||_i(p))return p=Yn(p,_.mode,v,null),p.return=_,p;lo(_,p)}return null}function f(_,p,v,E){var I=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:l(_,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ys:return v.key===I?a(_,p,v,E):null;case wr:return v.key===I?u(_,p,v,E):null;case sn:return I=v._init,f(_,p,I(v._payload),E)}if(bi(v)||_i(v))return I!==null?null:h(_,p,v,E,null);lo(_,v)}return null}function m(_,p,v,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return _=_.get(v)||null,l(p,_,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ys:return _=_.get(E.key===null?v:E.key)||null,a(p,_,E,I);case wr:return _=_.get(E.key===null?v:E.key)||null,u(p,_,E,I);case sn:var k=E._init;return m(_,p,v,k(E._payload),I)}if(bi(E)||_i(E))return _=_.get(v)||null,h(p,_,E,I,null);lo(p,E)}return null}function g(_,p,v,E){for(var I=null,k=null,x=p,N=p=0,q=null;x!==null&&N<v.length;N++){x.index>N?(q=x,x=null):q=x.sibling;var F=f(_,x,v[N],E);if(F===null){x===null&&(x=q);break}t&&x&&F.alternate===null&&e(_,x),p=s(F,p,N),k===null?I=F:k.sibling=F,k=F,x=q}if(N===v.length)return n(_,x),J&&zn(_,N),I;if(x===null){for(;N<v.length;N++)x=d(_,v[N],E),x!==null&&(p=s(x,p,N),k===null?I=x:k.sibling=x,k=x);return J&&zn(_,N),I}for(x=r(_,x);N<v.length;N++)q=m(x,_,N,v[N],E),q!==null&&(t&&q.alternate!==null&&x.delete(q.key===null?N:q.key),p=s(q,p,N),k===null?I=q:k.sibling=q,k=q);return t&&x.forEach(function(ot){return e(_,ot)}),J&&zn(_,N),I}function y(_,p,v,E){var I=_i(v);if(typeof I!="function")throw Error(C(150));if(v=I.call(v),v==null)throw Error(C(151));for(var k=I=null,x=p,N=p=0,q=null,F=v.next();x!==null&&!F.done;N++,F=v.next()){x.index>N?(q=x,x=null):q=x.sibling;var ot=f(_,x,F.value,E);if(ot===null){x===null&&(x=q);break}t&&x&&ot.alternate===null&&e(_,x),p=s(ot,p,N),k===null?I=ot:k.sibling=ot,k=ot,x=q}if(F.done)return n(_,x),J&&zn(_,N),I;if(x===null){for(;!F.done;N++,F=v.next())F=d(_,F.value,E),F!==null&&(p=s(F,p,N),k===null?I=F:k.sibling=F,k=F);return J&&zn(_,N),I}for(x=r(_,x);!F.done;N++,F=v.next())F=m(x,_,N,F.value,E),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?N:F.key),p=s(F,p,N),k===null?I=F:k.sibling=F,k=F);return t&&x.forEach(function(mi){return e(_,mi)}),J&&zn(_,N),I}function S(_,p,v,E){if(typeof v=="object"&&v!==null&&v.type===Er&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ys:e:{for(var I=v.key,k=p;k!==null;){if(k.key===I){if(I=v.type,I===Er){if(k.tag===7){n(_,k.sibling),p=i(k,v.props.children),p.return=_,_=p;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===sn&&mf(I)===k.type){n(_,k.sibling),p=i(k,v.props),p.ref=Si(_,k,v),p.return=_,_=p;break e}n(_,k);break}else e(_,k);k=k.sibling}v.type===Er?(p=Yn(v.props.children,_.mode,E,v.key),p.return=_,_=p):(E=No(v.type,v.key,v.props,null,_.mode,E),E.ref=Si(_,p,v),E.return=_,_=E)}return o(_);case wr:e:{for(k=v.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(_,p.sibling),p=i(p,v.children||[]),p.return=_,_=p;break e}else{n(_,p);break}else e(_,p);p=p.sibling}p=Ba(v,_.mode,E),p.return=_,_=p}return o(_);case sn:return k=v._init,S(_,p,k(v._payload),E)}if(bi(v))return g(_,p,v,E);if(_i(v))return y(_,p,v,E);lo(_,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(_,p.sibling),p=i(p,v),p.return=_,_=p):(n(_,p),p=za(v,_.mode,E),p.return=_,_=p),o(_)):n(_,p)}return S}var Kr=kg(!0),xg=kg(!1),Ko=Dn(null),qo=null,Rr=null,Yc=null;function Jc(){Yc=Rr=qo=null}function Xc(t){var e=Ko.current;Y(Ko),t._currentValue=e}function Mu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function jr(t,e){qo=t,Yc=Rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ue=!0),t.firstContext=null)}function rt(t){var e=t._currentValue;if(Yc!==t)if(t={context:t,memoizedValue:e,next:null},Rr===null){if(qo===null)throw Error(C(308));Rr=t,qo.dependencies={lanes:0,firstContext:t}}else Rr=Rr.next=t;return e}var $n=null;function Zc(t){$n===null?$n=[t]:$n.push(t)}function Ng(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zc(e)):(n.next=i.next,i.next=n),e.interleaved=n,$t(t,r)}function $t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var on=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$t(t,n)}return i=r.interleaved,i===null?(e.next=e,Zc(r)):(e.next=i.next,i.next=e),r.interleaved=e,$t(t,n)}function So(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uc(t,n)}}function gf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qo(t,e,n,r){var i=t.updateQueue;on=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,h=u=a=null,l=s;do{var f=l.lane,m=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,y=l;switch(f=e,m=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=te({},d,f);break e;case 2:on=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,a=d):h=h.next=m,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);tr|=o,t.lanes=o,t.memoizedState=d}}function _f(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var As={},xt=Dn(As),us=Dn(As),cs=Dn(As);function Gn(t){if(t===As)throw Error(C(174));return t}function td(t,e){switch(K(cs,e),K(us,t),K(xt,As),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gu(e,t)}Y(xt),K(xt,e)}function qr(){Y(xt),Y(us),Y(cs)}function Pg(t){Gn(cs.current);var e=Gn(xt.current),n=gu(e,t.type);e!==n&&(K(us,t),K(xt,n))}function nd(t){us.current===t&&(Y(xt),Y(us))}var X=Dn(0);function Yo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var La=[];function rd(){for(var t=0;t<La.length;t++)La[t]._workInProgressVersionPrimary=null;La.length=0}var Co=Yt.ReactCurrentDispatcher,Da=Yt.ReactCurrentBatchConfig,er=0,ee=null,ae=null,he=null,Jo=!1,Bi=!1,ds=0,G0=0;function ke(){throw Error(C(321))}function id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function sd(t,e,n,r,i,s){if(er=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Co.current=t===null||t.memoizedState===null?Y0:J0,t=n(r,i),Bi){s=0;do{if(Bi=!1,ds=0,25<=s)throw Error(C(301));s+=1,he=ae=null,e.updateQueue=null,Co.current=X0,t=n(r,i)}while(Bi)}if(Co.current=Xo,e=ae!==null&&ae.next!==null,er=0,he=ae=ee=null,Jo=!1,e)throw Error(C(300));return t}function od(){var t=ds!==0;return ds=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=t:he=he.next=t,he}function it(){if(ae===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=he===null?ee.memoizedState:he.next;if(e!==null)he=e,ae=t;else{if(t===null)throw Error(C(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},he===null?ee.memoizedState=he=t:he=he.next=t}return he}function hs(t,e){return typeof e=="function"?e(t):e}function Ma(t){var e=it(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((er&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ee.lanes|=h,tr|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Et(r,e.memoizedState)||(Ue=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ja(t){var e=it(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Et(s,e.memoizedState)||(Ue=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function bg(){}function Ag(t,e){var n=ee,r=it(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,Ue=!0),r=r.queue,ld(Dg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,fs(9,Lg.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(C(349));er&30||Og(n,e,i)}return i}function Og(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lg(t,e,n,r){e.value=n,e.getSnapshot=r,Mg(e)&&jg(t)}function Dg(t,e,n){return n(function(){Mg(e)&&jg(t)})}function Mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function jg(t){var e=$t(t,1);e!==null&&_t(e,t,1,-1)}function vf(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:t},e.queue=t,t=t.dispatch=Q0.bind(null,ee,t),[e.memoizedState,t]}function fs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fg(){return it().memoizedState}function Io(t,e,n,r){var i=It();ee.flags|=t,i.memoizedState=fs(1|e,n,void 0,r===void 0?null:r)}function Fl(t,e,n,r){var i=it();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&id(r,o.deps)){i.memoizedState=fs(e,n,s,r);return}}ee.flags|=t,i.memoizedState=fs(1|e,n,s,r)}function yf(t,e){return Io(8390656,8,t,e)}function ld(t,e){return Fl(2048,8,t,e)}function Ug(t,e){return Fl(4,2,t,e)}function zg(t,e){return Fl(4,4,t,e)}function Bg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wg(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,Bg.bind(null,e,t),n)}function ad(){}function Vg(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&id(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hg(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&id(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $g(t,e,n){return er&21?(Et(n,e)||(n=Ym(),ee.lanes|=n,tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ue=!0),t.memoizedState=n)}function K0(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Da.transition;Da.transition={};try{t(!1),e()}finally{W=n,Da.transition=r}}function Gg(){return it().memoizedState}function q0(t,e,n){var r=Sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(t))qg(e,n);else if(n=Ng(t,e,n,r),n!==null){var i=Ae();_t(n,t,r,i),Qg(n,e,r)}}function Q0(t,e,n){var r=Sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))qg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Et(l,o)){var a=e.interleaved;a===null?(i.next=i,Zc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Ng(t,e,i,r),n!==null&&(i=Ae(),_t(n,t,r,i),Qg(n,e,r))}}function Kg(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function qg(t,e){Bi=Jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uc(t,n)}}var Xo={readContext:rt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Y0={readContext:rt,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:rt,useEffect:yf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Io(4194308,4,Bg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Io(4194308,4,t,e)},useInsertionEffect:function(t,e){return Io(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=q0.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:vf,useDebugValue:ad,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=vf(!1),e=t[0];return t=K0.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=It();if(J){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),ge===null)throw Error(C(349));er&30||Og(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yf(Dg.bind(null,r,s,t),[t]),r.flags|=2048,fs(9,Lg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=ge.identifierPrefix;if(J){var n=Mt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ds++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=G0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},J0={readContext:rt,useCallback:Vg,useContext:rt,useEffect:ld,useImperativeHandle:Wg,useInsertionEffect:Ug,useLayoutEffect:zg,useMemo:Hg,useReducer:Ma,useRef:Fg,useState:function(){return Ma(hs)},useDebugValue:ad,useDeferredValue:function(t){var e=it();return $g(e,ae.memoizedState,t)},useTransition:function(){var t=Ma(hs)[0],e=it().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Ag,useId:Gg,unstable_isNewReconciler:!1},X0={readContext:rt,useCallback:Vg,useContext:rt,useEffect:ld,useImperativeHandle:Wg,useInsertionEffect:Ug,useLayoutEffect:zg,useMemo:Hg,useReducer:ja,useRef:Fg,useState:function(){return ja(hs)},useDebugValue:ad,useDeferredValue:function(t){var e=it();return ae===null?e.memoizedState=t:$g(e,ae.memoizedState,t)},useTransition:function(){var t=ja(hs)[0],e=it().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Ag,useId:Gg,unstable_isNewReconciler:!1};function at(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ju(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ul={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=Sn(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(_t(e,t,i,r),So(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ae(),i=Sn(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(_t(e,t,i,r),So(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ae(),r=Sn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=wn(t,i,r),e!==null&&(_t(e,t,r,n),So(e,t,r))}};function wf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ss(n,r)||!ss(i,s):!0}function Yg(t,e,n){var r=!1,i=Rn,s=e.contextType;return typeof s=="object"&&s!==null?s=rt(s):(i=Ve(e)?Xn:Pe.current,r=e.contextTypes,s=(r=r!=null)?$r(t,i):Rn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ef(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function Fu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ed(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rt(s):(s=Ve(e)?Xn:Pe.current,i.context=$r(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ju(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ul.enqueueReplaceState(i,i.state,null),Qo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qr(t,e){try{var n="",r=e;do n+=kw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Z0=typeof WeakMap=="function"?WeakMap:Map;function Jg(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){el||(el=!0,Qu=r),Uu(t,e)},n}function Xg(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uu(t,e),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Z0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=fE.bind(null,t,e,n),e.then(t,t))}function Cf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function If(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,wn(n,e,1))),n.lanes|=1),t)}var eE=Yt.ReactCurrentOwner,Ue=!1;function be(t,e,n,r){e.child=t===null?xg(e,null,n,r):Kr(e,t.child,n,r)}function Tf(t,e,n,r,i){n=n.render;var s=e.ref;return jr(e,i),r=sd(t,e,n,r,s,i),n=od(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(J&&n&&Kc(e),e.flags|=1,be(t,e,r,i),e.child)}function kf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zg(t,e,s,r,i)):(t=No(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(o,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=Cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ss(s,r)&&t.ref===e.ref)if(Ue=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ue=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return zu(t,e,n,r,i)}function e_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(br,$e),$e|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(br,$e),$e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(br,$e),$e|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(br,$e),$e|=r;return be(t,e,i,n),e.child}function t_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zu(t,e,n,r,i){var s=Ve(n)?Xn:Pe.current;return s=$r(e,s),jr(e,i),n=sd(t,e,n,r,s,i),r=od(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(J&&r&&Kc(e),e.flags|=1,be(t,e,n,i),e.child)}function xf(t,e,n,r,i){if(Ve(n)){var s=!0;Ho(e)}else s=!1;if(jr(e,i),e.stateNode===null)To(t,e),Yg(e,n,r),Fu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Ve(n)?Xn:Pe.current,u=$r(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Ef(e,o,r,u),on=!1;var f=e.memoizedState;o.state=f,Qo(e,r,o,i),a=e.memoizedState,l!==r||f!==a||We.current||on?(typeof h=="function"&&(ju(e,n,h,r),a=e.memoizedState),(l=on||wf(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Rg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:at(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=rt(a):(a=Ve(n)?Xn:Pe.current,a=$r(e,a));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Ef(e,o,r,a),on=!1,f=e.memoizedState,o.state=f,Qo(e,r,o,i);var g=e.memoizedState;l!==d||f!==g||We.current||on?(typeof m=="function"&&(ju(e,n,m,r),g=e.memoizedState),(u=on||wf(e,n,u,r,f,g,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Bu(t,e,n,r,s,i)}function Bu(t,e,n,r,i,s){t_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hf(e,n,!1),Gt(t,e,s);r=e.stateNode,eE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Kr(e,t.child,null,s),e.child=Kr(e,null,l,s)):be(t,e,l,s),e.memoizedState=r.state,i&&hf(e,n,!0),e.child}function n_(t){var e=t.stateNode;e.pendingContext?df(t,e.pendingContext,e.pendingContext!==e.context):e.context&&df(t,e.context,!1),td(t,e.containerInfo)}function Nf(t,e,n,r,i){return Gr(),Qc(i),e.flags|=256,be(t,e,n,r),e.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function r_(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(X,i&1),t===null)return Du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vu(n),e.memoizedState=Wu,t):ud(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return tE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Cn(l,s):(s=Yn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wu,r}return s=t.child,t=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ud(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ao(t,e,n,r){return r!==null&&Qc(r),Kr(e,t.child,null,n),t=ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fa(Error(C(422))),ao(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wl({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Kr(e,t.child,null,o),e.child.memoizedState=Vu(o),e.memoizedState=Wu,s);if(!(e.mode&1))return ao(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Fa(s,r,void 0),ao(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ue||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$t(t,i),_t(r,t,i,-1))}return md(),r=Fa(Error(C(421))),ao(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=yn(i.nextSibling),Ke=e,J=!0,ct=null,t!==null&&(Xe[Ze++]=Dt,Xe[Ze++]=Mt,Xe[Ze++]=Zn,Dt=t.id,Mt=t.overflow,Zn=e),e=ud(e,r.children),e.flags|=4096,e)}function Rf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mu(t.return,e,n)}function Ua(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function i_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(be(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rf(t,n,e);else if(t.tag===19)Rf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ua(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ua(e,!0,n,null,s);break;case"together":Ua(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function To(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nE(t,e,n){switch(e.tag){case 3:n_(e),Gr();break;case 5:Pg(e);break;case 1:Ve(e.type)&&Ho(e);break;case 4:td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(Ko,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?r_(t,e,n):(K(X,X.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);K(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,e_(t,e,n)}return Gt(t,e,n)}var s_,Hu,o_,l_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hu=function(){};o_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gn(xt.current);var s=null;switch(n){case"input":i=hu(t,i),r=hu(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=mu(t,i),r=mu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wo)}_u(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};l_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ci(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rE(t,e,n){var r=e.pendingProps;switch(qc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return Ve(e.type)&&Vo(),xe(e),null;case 3:return r=e.stateNode,qr(),Y(We),Y(Pe),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(Xu(ct),ct=null))),Hu(t,e),xe(e),null;case 5:nd(e);var i=Gn(cs.current);if(n=e.type,t!==null&&e.stateNode!=null)o_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return xe(e),null}if(t=Gn(xt.current),oo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[as]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Oi.length;i++)Q(Oi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":jh(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Uh(r,s),Q("invalid",r)}_u(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&so(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&so(r.textContent,l,t),i=["children",""+l]):Xi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Js(r),Fh(r,s,!0);break;case"textarea":Js(r),zh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[as]=r,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=vu(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oi.length;i++)Q(Oi[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":jh(t,r),i=hu(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Uh(t,r),i=mu(t,r),Q("invalid",t);break;default:i=r}_u(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Fm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Mm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Zi(t,a):typeof a=="number"&&Zi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Oc(t,s,a,o))}switch(n){case"input":Js(t),Fh(t,r,!1);break;case"textarea":Js(t),zh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Or(t,!!r.multiple,s,!1):r.defaultValue!=null&&Or(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)l_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Gn(cs.current),Gn(xt.current),oo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:so(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return xe(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Ge!==null&&e.mode&1&&!(e.flags&128))Tg(),Gr(),e.flags|=98560,s=!1;else if(s=oo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Tt]=e}else Gr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else ct!==null&&(Xu(ct),ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ue===0&&(ue=3):md())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return qr(),Hu(t,e),t===null&&os(e.stateNode.containerInfo),xe(e),null;case 10:return Xc(e.type._context),xe(e),null;case 17:return Ve(e.type)&&Vo(),xe(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ci(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yo(t),o!==null){for(e.flags|=128,Ci(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Yr&&(e.flags|=128,r=!0,Ci(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return xe(e),null}else 2*se()-s.renderingStartTime>Yr&&n!==1073741824&&(e.flags|=128,r=!0,Ci(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=X.current,K(X,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return pd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$e&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function iE(t,e){switch(qc(e),e.tag){case 1:return Ve(e.type)&&Vo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qr(),Y(We),Y(Pe),rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nd(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return qr(),null;case 10:return Xc(e.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var uo=!1,Ne=!1,sE=typeof WeakSet=="function"?WeakSet:Set,R=null;function Pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function $u(t,e,n){try{n()}catch(r){ne(t,e,r)}}var Pf=!1;function oE(t,e){if(Nu=Uo,t=hg(),Gc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++h===r&&(a=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ru={focusedElem:t,selectionRange:n},Uo=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,S=g.memoizedState,_=e.stateNode,p=_.getSnapshotBeforeUpdate(e.elementType===e.type?y:at(e.type,y),S);_.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){ne(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return g=Pf,Pf=!1,g}function Wi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$u(e,n,s)}i=i.next}while(i!==r)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a_(t){var e=t.alternate;e!==null&&(t.alternate=null,a_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[as],delete e[Au],delete e[W0],delete e[V0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u_(t){return t.tag===5||t.tag===3||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wo));else if(r!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}var _e=null,ut=!1;function nn(t,e,n){for(n=n.child;n!==null;)c_(t,e,n),n=n.sibling}function c_(t,e,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Ne||Pr(n,e);case 6:var r=_e,i=ut;_e=null,nn(t,e,n),_e=r,ut=i,_e!==null&&(ut?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(ut?(t=_e,n=n.stateNode,t.nodeType===8?Aa(t.parentNode,n):t.nodeType===1&&Aa(t,n),rs(t)):Aa(_e,n.stateNode));break;case 4:r=_e,i=ut,_e=n.stateNode.containerInfo,ut=!0,nn(t,e,n),_e=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$u(n,e,o),i=i.next}while(i!==r)}nn(t,e,n);break;case 1:if(!Ne&&(Pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}nn(t,e,n);break;case 21:nn(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,nn(t,e,n),Ne=r):nn(t,e,n);break;default:nn(t,e,n)}}function Af(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sE),e.forEach(function(r){var i=mE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,ut=!1;break e;case 3:_e=l.stateNode.containerInfo,ut=!0;break e;case 4:_e=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(_e===null)throw Error(C(160));c_(s,o,i),_e=null,ut=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d_(e,t),e=e.sibling}function d_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),Ct(t),r&4){try{Wi(3,t,t.return),zl(3,t)}catch(y){ne(t,t.return,y)}try{Wi(5,t,t.return)}catch(y){ne(t,t.return,y)}}break;case 1:lt(e,t),Ct(t),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(lt(e,t),Ct(t),r&512&&n!==null&&Pr(n,n.return),t.flags&32){var i=t.stateNode;try{Zi(i,"")}catch(y){ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Om(i,s),vu(l,o);var u=vu(l,s);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?Fm(i,d):h==="dangerouslySetInnerHTML"?Mm(i,d):h==="children"?Zi(i,d):Oc(i,h,d,u)}switch(l){case"input":fu(i,s);break;case"textarea":Lm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Or(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Or(i,!!s.multiple,s.defaultValue,!0):Or(i,!!s.multiple,s.multiple?[]:"",!1))}i[as]=s}catch(y){ne(t,t.return,y)}}break;case 6:if(lt(e,t),Ct(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ne(t,t.return,y)}}break;case 3:if(lt(e,t),Ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rs(e.containerInfo)}catch(y){ne(t,t.return,y)}break;case 4:lt(e,t),Ct(t);break;case 13:lt(e,t),Ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hd=se())),r&4&&Af(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(u=Ne)||h,lt(e,t),Ne=u):lt(e,t),Ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(R=t,h=t.child;h!==null;){for(d=R=h;R!==null;){switch(f=R,m=f.child,f.tag){case 0:case 11:case 14:case 15:Wi(4,f,f.return);break;case 1:Pr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Pr(f,f.return);break;case 22:if(f.memoizedState!==null){Lf(d);continue}}m!==null?(m.return=f,R=m):Lf(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=jm("display",o))}catch(y){ne(t,t.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ne(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(e,t),Ct(t),r&4&&Af(t);break;case 21:break;default:lt(e,t),Ct(t)}}function Ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u_(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zi(i,""),r.flags&=-33);var s=bf(t);qu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bf(t);Ku(t,l,o);break;default:throw Error(C(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lE(t,e,n){R=t,h_(t)}function h_(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=uo;var u=Ne;if(uo=o,(Ne=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?Df(i):a!==null?(a.return=o,R=a):Df(i);for(;s!==null;)R=s,h_(s),s=s.sibling;R=i,uo=l,Ne=u}Of(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Of(t)}}function Of(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_f(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_f(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&rs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ne||e.flags&512&&Gu(e)}catch(f){ne(e,e.return,f)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Lf(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Df(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{Gu(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{Gu(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){R=null;break}var l=e.sibling;if(l!==null){l.return=e.return,R=l;break}R=e.return}}var aE=Math.ceil,Zo=Yt.ReactCurrentDispatcher,cd=Yt.ReactCurrentOwner,nt=Yt.ReactCurrentBatchConfig,z=0,ge=null,oe=null,we=0,$e=0,br=Dn(0),ue=0,ps=null,tr=0,Bl=0,dd=0,Vi=null,je=null,hd=0,Yr=1/0,Ot=null,el=!1,Qu=null,En=null,co=!1,fn=null,tl=0,Hi=0,Yu=null,ko=-1,xo=0;function Ae(){return z&6?se():ko!==-1?ko:ko=se()}function Sn(t){return t.mode&1?z&2&&we!==0?we&-we:$0.transition!==null?(xo===0&&(xo=Ym()),xo):(t=W,t!==0||(t=window.event,t=t===void 0?16:rg(t.type)),t):1}function _t(t,e,n,r){if(50<Hi)throw Hi=0,Yu=null,Error(C(185));Rs(t,n,r),(!(z&2)||t!==ge)&&(t===ge&&(!(z&2)&&(Bl|=n),ue===4&&an(t,we)),He(t,r),n===1&&z===0&&!(e.mode&1)&&(Yr=se()+500,jl&&Mn()))}function He(t,e){var n=t.callbackNode;$w(t,e);var r=Fo(t,t===ge?we:0);if(r===0)n!==null&&Vh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vh(n),e===1)t.tag===0?H0(Mf.bind(null,t)):Sg(Mf.bind(null,t)),z0(function(){!(z&6)&&Mn()}),n=null;else{switch(Jm(r)){case 1:n=Fc;break;case 4:n=qm;break;case 16:n=jo;break;case 536870912:n=Qm;break;default:n=jo}n=w_(n,f_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f_(t,e){if(ko=-1,xo=0,z&6)throw Error(C(327));var n=t.callbackNode;if(Fr()&&t.callbackNode!==n)return null;var r=Fo(t,t===ge?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nl(t,r);else{e=r;var i=z;z|=2;var s=m_();(ge!==t||we!==e)&&(Ot=null,Yr=se()+500,Qn(t,e));do try{dE();break}catch(l){p_(t,l)}while(!0);Jc(),Zo.current=s,z=i,oe!==null?e=0:(ge=null,we=0,e=ue)}if(e!==0){if(e===2&&(i=Cu(t),i!==0&&(r=i,e=Ju(t,i))),e===1)throw n=ps,Qn(t,0),an(t,r),He(t,se()),n;if(e===6)an(t,r);else{if(i=t.current.alternate,!(r&30)&&!uE(i)&&(e=nl(t,r),e===2&&(s=Cu(t),s!==0&&(r=s,e=Ju(t,s))),e===1))throw n=ps,Qn(t,0),an(t,r),He(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Bn(t,je,Ot);break;case 3:if(an(t,r),(r&130023424)===r&&(e=hd+500-se(),10<e)){if(Fo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ae(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bu(Bn.bind(null,t,je,Ot),e);break}Bn(t,je,Ot);break;case 4:if(an(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aE(r/1960))-r,10<r){t.timeoutHandle=bu(Bn.bind(null,t,je,Ot),r);break}Bn(t,je,Ot);break;case 5:Bn(t,je,Ot);break;default:throw Error(C(329))}}}return He(t,se()),t.callbackNode===n?f_.bind(null,t):null}function Ju(t,e){var n=Vi;return t.current.memoizedState.isDehydrated&&(Qn(t,e).flags|=256),t=nl(t,e),t!==2&&(e=je,je=n,e!==null&&Xu(e)),t}function Xu(t){je===null?je=t:je.push.apply(je,t)}function uE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function an(t,e){for(e&=~dd,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gt(e),r=1<<n;t[n]=-1,e&=~r}}function Mf(t){if(z&6)throw Error(C(327));Fr();var e=Fo(t,0);if(!(e&1))return He(t,se()),null;var n=nl(t,e);if(t.tag!==0&&n===2){var r=Cu(t);r!==0&&(e=r,n=Ju(t,r))}if(n===1)throw n=ps,Qn(t,0),an(t,e),He(t,se()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,je,Ot),He(t,se()),null}function fd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Yr=se()+500,jl&&Mn())}}function nr(t){fn!==null&&fn.tag===0&&!(z&6)&&Fr();var e=z;z|=1;var n=nt.transition,r=W;try{if(nt.transition=null,W=1,t)return t()}finally{W=r,nt.transition=n,z=e,!(z&6)&&Mn()}}function pd(){$e=br.current,Y(br)}function Qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,U0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(qc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:qr(),Y(We),Y(Pe),rd();break;case 5:nd(r);break;case 4:qr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Xc(r.type._context);break;case 22:case 23:pd()}n=n.return}if(ge=t,oe=t=Cn(t.current,null),we=$e=e,ue=0,ps=null,dd=Bl=tr=0,je=Vi=null,$n!==null){for(e=0;e<$n.length;e++)if(n=$n[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$n=null}return t}function p_(t,e){do{var n=oe;try{if(Jc(),Co.current=Xo,Jo){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(er=0,he=ae=ee=null,Bi=!1,ds=0,cd.current=null,n===null||n.return===null){ue=1,ps=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Cf(o);if(m!==null){m.flags&=-257,If(m,o,l,s,e),m.mode&1&&Sf(s,u,e),e=m,a=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(a),e.updateQueue=y}else g.add(a);break e}else{if(!(e&1)){Sf(s,u,e),md();break e}a=Error(C(426))}}else if(J&&l.mode&1){var S=Cf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),If(S,o,l,s,e),Qc(Qr(a,l));break e}}s=a=Qr(a,l),ue!==4&&(ue=2),Vi===null?Vi=[s]:Vi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=Jg(s,a,e);gf(s,_);break e;case 1:l=a;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(En===null||!En.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Xg(s,l,e);gf(s,E);break e}}s=s.return}while(s!==null)}__(n)}catch(I){e=I,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function m_(){var t=Zo.current;return Zo.current=Xo,t===null?Xo:t}function md(){(ue===0||ue===3||ue===2)&&(ue=4),ge===null||!(tr&268435455)&&!(Bl&268435455)||an(ge,we)}function nl(t,e){var n=z;z|=2;var r=m_();(ge!==t||we!==e)&&(Ot=null,Qn(t,e));do try{cE();break}catch(i){p_(t,i)}while(!0);if(Jc(),z=n,Zo.current=r,oe!==null)throw Error(C(261));return ge=null,we=0,ue}function cE(){for(;oe!==null;)g_(oe)}function dE(){for(;oe!==null&&!Mw();)g_(oe)}function g_(t){var e=y_(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?__(t):oe=e,cd.current=null}function __(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iE(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,oe=null;return}}else if(n=rE(n,e,$e),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ue===0&&(ue=5)}function Bn(t,e,n){var r=W,i=nt.transition;try{nt.transition=null,W=1,hE(t,e,n,r)}finally{nt.transition=i,W=r}return null}function hE(t,e,n,r){do Fr();while(fn!==null);if(z&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gw(t,s),t===ge&&(oe=ge=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,w_(jo,function(){return Fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nt.transition,nt.transition=null;var o=W;W=1;var l=z;z|=4,cd.current=null,oE(t,n),d_(n,t),A0(Ru),Uo=!!Nu,Ru=Nu=null,t.current=n,lE(n),jw(),z=l,W=o,nt.transition=s}else t.current=n;if(co&&(co=!1,fn=t,tl=i),s=t.pendingLanes,s===0&&(En=null),zw(n.stateNode),He(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(el)throw el=!1,t=Qu,Qu=null,t;return tl&1&&t.tag!==0&&Fr(),s=t.pendingLanes,s&1?t===Yu?Hi++:(Hi=0,Yu=t):Hi=0,Mn(),null}function Fr(){if(fn!==null){var t=Jm(tl),e=nt.transition,n=W;try{if(nt.transition=null,W=16>t?16:t,fn===null)var r=!1;else{if(t=fn,fn=null,tl=0,z&6)throw Error(C(331));var i=z;for(z|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:Wi(8,h,s)}var d=h.child;if(d!==null)d.return=h,R=d;else for(;R!==null;){h=R;var f=h.sibling,m=h.return;if(a_(h),h===u){R=null;break}if(f!==null){f.return=m,R=f;break}R=m}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wi(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,R=_;break e}R=s.return}}var p=t.current;for(R=p;R!==null;){o=R;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,R=v;else e:for(o=p;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(I){ne(l,l.return,I)}if(l===o){R=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,R=E;break e}R=l.return}}if(z=i,Mn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Al,t)}catch{}r=!0}return r}finally{W=n,nt.transition=e}}return!1}function jf(t,e,n){e=Qr(n,e),e=Jg(t,e,1),t=wn(t,e,1),e=Ae(),t!==null&&(Rs(t,1,e),He(t,e))}function ne(t,e,n){if(t.tag===3)jf(t,t,n);else for(;e!==null;){if(e.tag===3){jf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){t=Qr(n,t),t=Xg(e,t,1),e=wn(e,t,1),t=Ae(),e!==null&&(Rs(e,1,t),He(e,t));break}}e=e.return}}function fE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ae(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(we&n)===n&&(ue===4||ue===3&&(we&130023424)===we&&500>se()-hd?Qn(t,0):dd|=n),He(t,e)}function v_(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=Ae();t=$t(t,e),t!==null&&(Rs(t,e,n),He(t,n))}function pE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v_(t,n)}function mE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),v_(t,n)}var y_;y_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)Ue=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ue=!1,nE(t,e,n);Ue=!!(t.flags&131072)}else Ue=!1,J&&e.flags&1048576&&Cg(e,Go,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;To(t,e),t=e.pendingProps;var i=$r(e,Pe.current);jr(e,n),i=sd(null,e,r,t,i,n);var s=od();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(r)?(s=!0,Ho(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ed(e),i.updater=Ul,e.stateNode=i,i._reactInternals=e,Fu(e,r,t,n),e=Bu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&Kc(e),be(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(To(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_E(r),t=at(r,t),i){case 0:e=zu(null,e,r,t,n);break e;case 1:e=xf(null,e,r,t,n);break e;case 11:e=Tf(null,e,r,t,n);break e;case 14:e=kf(null,e,r,at(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),zu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),xf(t,e,r,i,n);case 3:e:{if(n_(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Rg(t,e),Qo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qr(Error(C(423)),e),e=Nf(t,e,r,n,i);break e}else if(r!==i){i=Qr(Error(C(424)),e),e=Nf(t,e,r,n,i);break e}else for(Ge=yn(e.stateNode.containerInfo.firstChild),Ke=e,J=!0,ct=null,n=xg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gr(),r===i){e=Gt(t,e,n);break e}be(t,e,r,n)}e=e.child}return e;case 5:return Pg(e),t===null&&Du(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pu(r,i)?o=null:s!==null&&Pu(r,s)&&(e.flags|=32),t_(t,e),be(t,e,o,n),e.child;case 6:return t===null&&Du(e),null;case 13:return r_(t,e,n);case 4:return td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Kr(e,null,r,n):be(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Tf(t,e,r,i,n);case 7:return be(t,e,e.pendingProps,n),e.child;case 8:return be(t,e,e.pendingProps.children,n),e.child;case 12:return be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(Ko,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!We.current){e=Gt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Mu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}be(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,jr(e,n),i=rt(i),r=r(i),e.flags|=1,be(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),kf(t,e,r,i,n);case 15:return Zg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),To(t,e),e.tag=1,Ve(r)?(t=!0,Ho(e)):t=!1,jr(e,n),Yg(e,r,i),Fu(e,r,i,n),Bu(null,e,r,!0,t,n);case 19:return i_(t,e,n);case 22:return e_(t,e,n)}throw Error(C(156,e.tag))};function w_(t,e){return Km(t,e)}function gE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new gE(t,e,n,r)}function gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _E(t){if(typeof t=="function")return gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dc)return 11;if(t===Mc)return 14}return 2}function Cn(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function No(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Er:return Yn(n.children,i,s,e);case Lc:o=8,i|=8;break;case au:return t=et(12,n,e,i|2),t.elementType=au,t.lanes=s,t;case uu:return t=et(13,n,e,i),t.elementType=uu,t.lanes=s,t;case cu:return t=et(19,n,e,i),t.elementType=cu,t.lanes=s,t;case Pm:return Wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:o=10;break e;case Rm:o=9;break e;case Dc:o=11;break e;case Mc:o=14;break e;case sn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=et(22,t,r,e),t.elementType=Pm,t.lanes=n,t.stateNode={isHidden:!1},t}function za(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function Ba(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _d(t,e,n,r,i,s,o,l,a){return t=new vE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(s),t}function yE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function E_(t){if(!t)return Rn;t=t._reactInternals;e:{if(hr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Ve(n))return Eg(t,n,e)}return e}function S_(t,e,n,r,i,s,o,l,a){return t=_d(n,r,!0,t,i,s,o,l,a),t.context=E_(null),n=t.current,r=Ae(),i=Sn(n),s=zt(r,i),s.callback=e??null,wn(n,s,i),t.current.lanes=i,Rs(t,i,r),He(t,r),t}function Vl(t,e,n,r){var i=e.current,s=Ae(),o=Sn(i);return n=E_(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wn(i,e,o),t!==null&&(_t(t,i,o,s),So(t,i,o)),o}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ff(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vd(t,e){Ff(t,e),(t=t.alternate)&&Ff(t,e)}function wE(){return null}var C_=typeof reportError=="function"?reportError:function(t){console.error(t)};function yd(t){this._internalRoot=t}Hl.prototype.render=yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Vl(t,e,null,null)};Hl.prototype.unmount=yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nr(function(){Vl(null,t,null,null)}),e[Ht]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ln.length&&e!==0&&e<ln[n].priority;n++);ln.splice(n,0,t),n===0&&ng(t)}};function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function EE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rl(o);s.call(u)}}var o=S_(e,r,t,0,null,!1,!1,"",Uf);return t._reactRootContainer=o,t[Ht]=o.current,os(t.nodeType===8?t.parentNode:t),nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=rl(a);l.call(u)}}var a=_d(t,0,!1,null,null,!1,!1,"",Uf);return t._reactRootContainer=a,t[Ht]=a.current,os(t.nodeType===8?t.parentNode:t),nr(function(){Vl(e,a,n,r)}),a}function Gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=rl(o);l.call(a)}}Vl(e,o,t,i)}else o=EE(n,e,t,i,r);return rl(o)}Xm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ai(e.pendingLanes);n!==0&&(Uc(e,n|1),He(e,se()),!(z&6)&&(Yr=se()+500,Mn()))}break;case 13:nr(function(){var r=$t(t,1);if(r!==null){var i=Ae();_t(r,t,1,i)}}),vd(t,1)}};zc=function(t){if(t.tag===13){var e=$t(t,134217728);if(e!==null){var n=Ae();_t(e,t,134217728,n)}vd(t,134217728)}};Zm=function(t){if(t.tag===13){var e=Sn(t),n=$t(t,e);if(n!==null){var r=Ae();_t(n,t,e,r)}vd(t,e)}};eg=function(){return W};tg=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};wu=function(t,e,n){switch(e){case"input":if(fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ml(r);if(!i)throw Error(C(90));Am(r),fu(r,i)}}}break;case"textarea":Lm(t,n);break;case"select":e=n.value,e!=null&&Or(t,!!n.multiple,e,!1)}};Bm=fd;Wm=nr;var SE={usingClientEntryPoint:!1,Events:[bs,Tr,Ml,Um,zm,fd]},Ii={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CE={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$m(t),t===null?null:t.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||wE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Al=ho.inject(CE),kt=ho}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SE;Qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(e))throw Error(C(200));return yE(t,e,null,n)};Qe.createRoot=function(t,e){if(!wd(t))throw Error(C(299));var n=!1,r="",i=C_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_d(t,1,!1,null,null,n,!1,r,i),t[Ht]=e.current,os(t.nodeType===8?t.parentNode:t),new yd(e)};Qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=$m(e),t=t===null?null:t.stateNode,t};Qe.flushSync=function(t){return nr(t)};Qe.hydrate=function(t,e,n){if(!$l(e))throw Error(C(200));return Gl(null,t,e,!0,n)};Qe.hydrateRoot=function(t,e,n){if(!wd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=C_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S_(e,null,t,1,n??null,i,!1,s,o),t[Ht]=e.current,os(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hl(e)};Qe.render=function(t,e,n){if(!$l(e))throw Error(C(200));return Gl(null,t,e,!1,n)};Qe.unmountComponentAtNode=function(t){if(!$l(t))throw Error(C(40));return t._reactRootContainer?(nr(function(){Gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ht]=null})}),!0):!1};Qe.unstable_batchedUpdates=fd;Qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$l(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Gl(t,e,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),Im.exports=Qe;var IE=Im.exports,zf=IE;ou.createRoot=zf.createRoot,ou.hydrateRoot=zf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ms.apply(this,arguments)}var pn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pn||(pn={}));const Bf="popstate";function TE(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Zu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:il(i)}return xE(e,n,null,t)}function le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function T_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kE(){return Math.random().toString(36).substr(2,8)}function Wf(t,e){return{usr:t.state,key:t.key,idx:e}}function Zu(t,e,n,r){return n===void 0&&(n=null),ms({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?si(e):e,{state:n,key:e&&e.key||r||kE()})}function il(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function si(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=pn.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(ms({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){l=pn.Pop;let S=h(),_=S==null?null:S-u;u=S,a&&a({action:l,location:y.location,delta:_})}function f(S,_){l=pn.Push;let p=Zu(y.location,S,_);u=h()+1;let v=Wf(p,u),E=y.createHref(p);try{o.pushState(v,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&a&&a({action:l,location:y.location,delta:1})}function m(S,_){l=pn.Replace;let p=Zu(y.location,S,_);u=h();let v=Wf(p,u),E=y.createHref(p);o.replaceState(v,"",E),s&&a&&a({action:l,location:y.location,delta:0})}function g(S){let _=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:il(S);return p=p.replace(/ $/,"%20"),le(_,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,_)}let y={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Bf,d),a=S,()=>{i.removeEventListener(Bf,d),a=null}},createHref(S){return e(i,S)},createURL:g,encodeLocation(S){let _=g(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:f,replace:m,go(S){return o.go(S)}};return y}var Vf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vf||(Vf={}));function NE(t,e,n){return n===void 0&&(n="/"),RE(t,e,n)}function RE(t,e,n,r){let i=typeof e=="string"?si(e):e,s=Ed(i.pathname||"/",n);if(s==null)return null;let o=k_(t);PE(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=WE(s);l=UE(o[a],u)}return l}function k_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(le(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=In([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),k_(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:jE(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of x_(s.path))i(s,o,a)}),e}function x_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=x_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function PE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bE=/^:[\w-]+$/,AE=3,OE=2,LE=1,DE=10,ME=-2,Hf=t=>t==="*";function jE(t,e){let n=t.split("/"),r=n.length;return n.some(Hf)&&(r+=ME),e&&(r+=OE),n.filter(i=>!Hf(i)).reduce((i,s)=>i+(bE.test(s)?AE:s===""?LE:DE),r)}function FE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UE(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=zE({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},h),f=a.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:In([s,d.pathname]),pathnameBase:GE(In([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=In([s,d.pathnameBase]))}return o}function zE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=BE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:f,isOptional:m}=h;if(f==="*"){let y=l[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const g=l[d];return m&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function BE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),T_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return T_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ed(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function VE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?si(t):t;return{pathname:n?n.startsWith("/")?n:HE(n,e):e,search:KE(r),hash:qE(i)}}function HE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $E(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function N_(t,e){let n=$E(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function R_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=si(t):(i=ms({},t),le(!i.pathname||!i.pathname.includes("?"),Wa("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),Wa("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),Wa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=VE(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const In=t=>t.join("/").replace(/\/\/+/g,"/"),GE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const P_=["post","put","patch","delete"];new Set(P_);const YE=["get",...P_];new Set(YE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gs.apply(this,arguments)}const Sd=w.createContext(null),JE=w.createContext(null),fr=w.createContext(null),Kl=w.createContext(null),Jt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),b_=w.createContext(null);function XE(t,e){let{relative:n}=e===void 0?{}:e;Os()||le(!1);let{basename:r,navigator:i}=w.useContext(fr),{hash:s,pathname:o,search:l}=L_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:In([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Os(){return w.useContext(Kl)!=null}function oi(){return Os()||le(!1),w.useContext(Kl).location}function A_(t){w.useContext(fr).static||w.useLayoutEffect(t)}function li(){let{isDataRoute:t}=w.useContext(Jt);return t?fS():ZE()}function ZE(){Os()||le(!1);let t=w.useContext(Sd),{basename:e,future:n,navigator:r}=w.useContext(fr),{matches:i}=w.useContext(Jt),{pathname:s}=oi(),o=JSON.stringify(N_(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return A_(()=>{l.current=!0}),w.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=R_(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:In([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}const eS=w.createContext(null);function tS(t){let e=w.useContext(Jt).outlet;return e&&w.createElement(eS.Provider,{value:t},e)}function O_(){let{matches:t}=w.useContext(Jt),e=t[t.length-1];return e?e.params:{}}function L_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(fr),{matches:i}=w.useContext(Jt),{pathname:s}=oi(),o=JSON.stringify(N_(i,r.v7_relativeSplatPath));return w.useMemo(()=>R_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function nS(t,e){return rS(t,e)}function rS(t,e,n,r){Os()||le(!1);let{navigator:i}=w.useContext(fr),{matches:s}=w.useContext(Jt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=oi(),h;if(e){var d;let S=typeof e=="string"?si(e):e;a==="/"||(d=S.pathname)!=null&&d.startsWith(a)||le(!1),h=S}else h=u;let f=h.pathname||"/",m=f;if(a!=="/"){let S=a.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let g=NE(t,{pathname:m}),y=aS(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:In([a,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:In([a,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&y?w.createElement(Kl.Provider,{value:{location:gs({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:pn.Pop}},y):y}function iS(){let t=hS(),e=QE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const sS=w.createElement(iS,null);class oS extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(Jt.Provider,{value:this.props.routeContext},w.createElement(b_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lS(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(Sd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Jt.Provider,{value:e},r)}function aS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);h>=0||le(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:f,errors:m}=n,g=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||g){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,d,f)=>{let m,g=!1,y=null,S=null;n&&(m=l&&d.route.id?l[d.route.id]:void 0,y=d.route.errorElement||sS,a&&(u<0&&f===0?(pS("route-fallback"),g=!0,S=null):u===f&&(g=!0,S=d.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,f+1)),p=()=>{let v;return m?v=y:g?v=S:d.route.Component?v=w.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=h,w.createElement(lS,{match:d,routeContext:{outlet:h,matches:_,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(oS,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:p(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):p()},null)}var D_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D_||{}),M_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(M_||{});function uS(t){let e=w.useContext(Sd);return e||le(!1),e}function cS(t){let e=w.useContext(JE);return e||le(!1),e}function dS(t){let e=w.useContext(Jt);return e||le(!1),e}function j_(t){let e=dS(),n=e.matches[e.matches.length-1];return n.route.id||le(!1),n.route.id}function hS(){var t;let e=w.useContext(b_),n=cS(),r=j_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fS(){let{router:t}=uS(D_.UseNavigateStable),e=j_(M_.UseNavigateStable),n=w.useRef(!1);return A_(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,gs({fromRouteId:e},s)))},[t,e])}const $f={};function pS(t,e,n){$f[t]||($f[t]=!0)}function mS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function gS(t){return tS(t.context)}function Je(t){le(!1)}function _S(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pn.Pop,navigator:s,static:o=!1,future:l}=t;Os()&&le(!1);let a=e.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:a,navigator:s,static:o,future:gs({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=si(r));let{pathname:h="/",search:d="",hash:f="",state:m=null,key:g="default"}=r,y=w.useMemo(()=>{let S=Ed(h,a);return S==null?null:{location:{pathname:S,search:d,hash:f,state:m,key:g},navigationType:i}},[a,h,d,f,m,g,i]);return y==null?null:w.createElement(fr.Provider,{value:u},w.createElement(Kl.Provider,{children:n,value:y}))}function vS(t){let{children:e,location:n}=t;return nS(ec(e),n)}new Promise(()=>{});function ec(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,ec(r.props.children,s));return}r.type!==Je&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ec(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(this,arguments)}function yS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ES(t,e){return t.button===0&&(!e||e==="_self")&&!wS(t)}function nc(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function SS(t,e){let n=nc(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const CS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],IS="6";try{window.__reactRouterVersion=IS}catch{}const TS="startTransition",Gf=fw[TS];function kS(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=TE({window:i,v5Compat:!0}));let o=s.current,[l,a]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=w.useCallback(d=>{u&&Gf?Gf(()=>a(d)):a(d)},[a,u]);return w.useLayoutEffect(()=>o.listen(h),[o,h]),w.useEffect(()=>mS(r),[r]),w.createElement(_S,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const xS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h,viewTransition:d}=e,f=yS(e,CS),{basename:m}=w.useContext(fr),g,y=!1;if(typeof u=="string"&&NS.test(u)&&(g=u,xS))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),I=Ed(E.pathname,m);E.origin===v.origin&&I!=null?u=I+E.search+E.hash:y=!0}catch{}let S=XE(u,{relative:i}),_=RS(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,viewTransition:d});function p(v){r&&r(v),v.defaultPrevented||_(v)}return w.createElement("a",tc({},f,{href:g||S,onClick:y||s?r:p,ref:n,target:a}))});var Kf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Kf||(Kf={}));var qf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(qf||(qf={}));function RS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,a=li(),u=oi(),h=L_(t,{relative:o});return w.useCallback(d=>{if(ES(d,n)){d.preventDefault();let f=r!==void 0?r:il(u)===il(h);a(t,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,a,h,r,i,n,t,s,o,l])}function PS(t){let e=w.useRef(nc(t)),n=w.useRef(!1),r=oi(),i=w.useMemo(()=>SS(r.search,n.current?null:e.current),[r.search]),s=li(),o=w.useCallback((l,a)=>{const u=nc(typeof l=="function"?l(i):l);n.current=!0,s("?"+u,a)},[s,i]);return[i,o]}const bS=()=>{};var Qf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw ai(e)},ai=function(t){return new Error("Firebase Database ("+F_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(f=64)),r.push(n[h],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(U_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new OS;const f=s<<2|l>>4;if(r.push(f),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z_=function(t){const e=U_(t);return Cd.encodeByteArray(e,!0)},sl=function(t){return z_(t).replace(/\./g,"")},ol=function(t){try{return Cd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){return B_(void 0,t)}function B_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DS(n)||(t[n]=B_(t[n],e[n]));return t}function DS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=()=>MS().__FIREBASE_DEFAULTS__,FS=()=>{if(typeof process>"u"||typeof Qf>"u")return;const t=Qf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},US=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ol(t[1]);return e&&JSON.parse(e)},Id=()=>{try{return bS()||jS()||FS()||US()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},W_=t=>{var e,n;return(n=(e=Id())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V_=t=>{const e=W_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},H_=()=>{var t;return(t=Id())===null||t===void 0?void 0:t.config},$_=t=>{var e;return(e=Id())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Td(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sl(JSON.stringify(n)),sl(JSON.stringify(o)),""].join(".")}const $i={};function zS(){const t={prod:[],emulator:[]};for(const e of Object.keys($i))$i[e]?t.emulator.push(e):t.prod.push(e);return t}function BS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Yf=!1;function kd(t,e){if(typeof window>"u"||typeof document>"u"||!pr(window.location.host)||$i[t]===e||$i[t]||Yf)return;$i[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=zS().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function a(f,m){f.setAttribute("width","24"),f.setAttribute("id",m),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Yf=!0,o()},f}function h(f,m){f.setAttribute("id",m),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=BS(r),m=n("text"),g=document.getElementById(m)||document.createElement("span"),y=n("learnmore"),S=document.getElementById(y)||document.createElement("a"),_=n("preprendIcon"),p=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const v=f.element;l(v),h(S,y);const E=u();a(p,_),v.append(p,g,S,E),document.body.appendChild(v)}s?(g.innerText="Preview backend disconnected.",p.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(p.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function WS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function K_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HS(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $S(){return F_.NODE_ADMIN===!0}function GS(){try{return typeof indexedDB=="object"}catch{return!1}}function KS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qS,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ds.prototype.create)}}class Ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,l,r)}}function QS(t,e){return t.replace(YS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=_s(ol(s[0])||""),n=_s(ol(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},JS=function(t){const e=q_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XS=function(t){const e=q_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ll(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jf(s)&&Jf(o)){if(!rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):d<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const f=(i<<5|i>>>27)+u+a+h+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function eC(t,e){const n=new tC(t,e);return n.subscribe.bind(n)}class tC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Va),i.error===void 0&&(i.error=Va),i.complete===void 0&&(i.complete=Va);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Va(){}function ql(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ql=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ls;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oC(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sC(t){return t===Wn?void 0:t}function oC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const aC={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},uC=H.INFO,cC={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},dC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nd{constructor(e){this.name=e,this._logLevel=uC,this._logHandler=dC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const hC=(t,e)=>e.some(n=>t instanceof n);let Xf,Zf;function fC(){return Xf||(Xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pC(){return Zf||(Zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,ic=new WeakMap,Y_=new WeakMap,Ha=new WeakMap,Rd=new WeakMap;function mC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Q_.set(n,t)}).catch(()=>{}),Rd.set(e,t),e}function gC(t){if(ic.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ic.set(t,e)}let sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _C(t){sc=t(sc)}function vC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($a(this),e,...n);return Y_.set(r,e.sort?e.sort():[e]),Tn(r)}:pC().includes(t)?function(...e){return t.apply($a(this),e),Tn(Q_.get(this))}:function(...e){return Tn(t.apply($a(this),e))}}function yC(t){return typeof t=="function"?vC(t):(t instanceof IDBTransaction&&gC(t),hC(t,fC())?new Proxy(t,sc):t)}function Tn(t){if(t instanceof IDBRequest)return mC(t);if(Ha.has(t))return Ha.get(t);const e=yC(t);return e!==t&&(Ha.set(t,e),Rd.set(e,t)),e}const $a=t=>Rd.get(t);function wC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Tn(o.result),a.oldVersion,a.newVersion,Tn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const EC=["get","getKey","getAll","getAllKeys","count"],SC=["put","add","delete","clear"],Ga=new Map;function ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ga.get(e))return Ga.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=SC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ga.set(e,s),s}_C(t=>({...t,get:(e,n,r)=>ep(e,n)||t.get(e,n,r),has:(e,n)=>!!ep(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oc="@firebase/app",tp="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Nd("@firebase/app"),TC="@firebase/app-compat",kC="@firebase/analytics-compat",xC="@firebase/analytics",NC="@firebase/app-check-compat",RC="@firebase/app-check",PC="@firebase/auth",bC="@firebase/auth-compat",AC="@firebase/database",OC="@firebase/data-connect",LC="@firebase/database-compat",DC="@firebase/functions",MC="@firebase/functions-compat",jC="@firebase/installations",FC="@firebase/installations-compat",UC="@firebase/messaging",zC="@firebase/messaging-compat",BC="@firebase/performance",WC="@firebase/performance-compat",VC="@firebase/remote-config",HC="@firebase/remote-config-compat",$C="@firebase/storage",GC="@firebase/storage-compat",KC="@firebase/firestore",qC="@firebase/ai",QC="@firebase/firestore-compat",YC="firebase",JC="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="[DEFAULT]",XC={[oc]:"fire-core",[TC]:"fire-core-compat",[xC]:"fire-analytics",[kC]:"fire-analytics-compat",[RC]:"fire-app-check",[NC]:"fire-app-check-compat",[PC]:"fire-auth",[bC]:"fire-auth-compat",[AC]:"fire-rtdb",[OC]:"fire-data-connect",[LC]:"fire-rtdb-compat",[DC]:"fire-fn",[MC]:"fire-fn-compat",[jC]:"fire-iid",[FC]:"fire-iid-compat",[UC]:"fire-fcm",[zC]:"fire-fcm-compat",[BC]:"fire-perf",[WC]:"fire-perf-compat",[VC]:"fire-rc",[HC]:"fire-rc-compat",[$C]:"fire-gcs",[GC]:"fire-gcs-compat",[KC]:"fire-fst",[QC]:"fire-fst-compat",[qC]:"fire-vertex","fire-js":"fire-js",[YC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map,ZC=new Map,ac=new Map;function np(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ir(t){const e=t.name;if(ac.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,t);for(const n of al.values())np(n,t);for(const n of ZC.values())np(n,t);return!0}function Yl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Fe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new Ds("app","Firebase",eI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=JC;function J_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=H_()),!n)throw kn.create("no-options");const s=al.get(i);if(s){if(rr(n,s.options)&&rr(r,s.config))return s;throw kn.create("duplicate-app",{appName:i})}const o=new lC(i);for(const a of ac.values())o.addComponent(a);const l=new tI(n,r,o);return al.set(i,l),l}function Pd(t=lc){const e=al.get(t);if(!e&&t===lc&&H_())return J_();if(!e)throw kn.create("no-app",{appName:t});return e}function Nt(t,e,n){var r;let i=(r=XC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(l.join(" "));return}ir(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="firebase-heartbeat-database",rI=1,vs="firebase-heartbeat-store";let Ka=null;function X_(){return Ka||(Ka=wC(nI,rI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vs)}catch(n){console.warn(n)}}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Ka}async function iI(t){try{const n=(await X_()).transaction(vs),r=await n.objectStore(vs).get(Z_(t));return await n.done,r}catch(e){if(e instanceof Xt)Kt.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function rp(t,e){try{const r=(await X_()).transaction(vs,"readwrite");await r.objectStore(vs).put(e,Z_(t)),await r.done}catch(n){if(n instanceof Xt)Kt.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(r.message)}}}function Z_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=1024,oI=30;class lI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ip();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>oI){const o=cI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ip(),{heartbeatsToSend:r,unsentEntries:i}=aI(this._heartbeatsCache.heartbeats),s=sl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kt.warn(n),""}}}function ip(){return new Date().toISOString().substring(0,10)}function aI(t,e=sI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GS()?KS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sp(t){return sl(JSON.stringify({version:2,heartbeats:t})).length}function cI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){ir(new Pn("platform-logger",e=>new CC(e),"PRIVATE")),ir(new Pn("heartbeat",e=>new lI(e),"PRIVATE")),Nt(oc,tp,t),Nt(oc,tp,"esm2017"),Nt("fire-js","")}dI("");function bd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=ev,tv=new Ds("auth","Firebase",ev());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Nd("@firebase/auth");function fI(t,...e){ul.logLevel<=H.WARN&&ul.warn(`Auth (${mr}): ${t}`,...e)}function Ro(t,...e){ul.logLevel<=H.ERROR&&ul.error(`Auth (${mr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,...e){throw Od(t,...e)}function vt(t,...e){return Od(t,...e)}function Ad(t,e,n){const r=Object.assign(Object.assign({},hI()),{[e]:n});return new Ds("auth","Firebase",r).create(e,{appName:t.name})}function Bt(t){return Ad(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),Ad(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Od(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tv.create(t,...e)}function b(t,e,...n){if(!t)throw Od(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function qt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mI(){return op()==="http:"||op()==="https:"}function op(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mI()||VS()||"connection"in navigator)?navigator.onLine:!0}function _I(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=xd()||K_()}get(){return gI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wI=new Ms(3e4,6e4);function Zt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function en(t,e,n,r,i={}){return rv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ui(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return WS()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&pr(t.emulatorConfig.host)&&(u.credentials="include"),nv.fetch()(await iv(t,t.config.apiHost,n,l),u)})}async function rv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vI),e);try{const i=new SI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw fo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw fo(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ad(t,h,u);st(t,h)}}catch(i){if(i instanceof Xt)throw i;st(t,"network-request-failed",{message:String(i)})}}async function js(t,e,n,r,i={}){const s=await en(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function iv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ld(t.config,i):`${t.config.apiScheme}://${i}`;return yI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function EI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),wI.get())})}}function fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}function lp(t){return t!==void 0&&t.enterprise!==void 0}class CI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function II(t,e){return en(t,"GET","/v2/recaptchaConfig",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){return en(t,"POST","/v1/accounts:delete",e)}async function cl(t,e){return en(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kI(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=Dd(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gi(qa(i.auth_time)),issuedAtTime:Gi(qa(i.iat)),expirationTime:Gi(qa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qa(t){return Number(t)*1e3}function Dd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=ol(n);return i?JSON.parse(i):(Ro("Failed to decode base64 JWT payload"),null)}catch(i){return Ro("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ap(t){const e=Dd(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&xI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ys(t,cl(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sv(s.providerUserInfo):[],l=PI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new cc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function RI(t){const e=Te(t);await dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sv(t){return t.map(e=>{var{providerId:n}=e,r=bd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e){const n=await rv(t,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await iv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&pr(t.emulatorConfig.host)&&(a.credentials="include"),nv.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AI(t,e){return en(t,"POST","/v2/accounts:revokeToken",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=ap(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ur;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ys(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kI(this,e)}reload(){return RI(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await ys(this,TI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:E,isAnonymous:I,providerData:k,stsTokenManager:x}=n;b(v&&x,e,"internal-error");const N=Ur.fromJSON(this.name,x);b(typeof v=="string",e,"internal-error"),rn(d,e.name),rn(f,e.name),b(typeof E=="boolean",e,"internal-error"),b(typeof I=="boolean",e,"internal-error"),rn(m,e.name),rn(g,e.name),rn(y,e.name),rn(S,e.name),rn(_,e.name),rn(p,e.name);const q=new ft({uid:v,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:I,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:N,createdAt:_,lastLoginAt:p});return k&&Array.isArray(k)&&(q.providerData=k.map(F=>Object.assign({},F))),S&&(q._redirectEventId=S),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ur;i.updateFromServerResponse(n);const s=new ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];b(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ur;l.updateFromIdToken(r);const a=new ft({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;function Ft(t){qt(t instanceof Function,"Expected a class definition");let e=up.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,up.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ov.type="NONE";const cp=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Po(this.userKey,i.apiKey,s),this.fullPersistenceKey=Po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await cl(this.auth,{idToken:e}).catch(()=>{});return n?ft._fromGetAccountInfoResponse(this.auth,n,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(Ft(cp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(cp);const o=Po(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const f=await cl(e,{idToken:h}).catch(()=>{});if(!f)break;d=await ft._fromGetAccountInfoResponse(e,f,h)}else d=ft._fromJSON(e,h);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new zr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hv(e))return"Blackberry";if(fv(e))return"Webos";if(av(e))return"Safari";if((e.includes("chrome/")||uv(e))&&!e.includes("edge/"))return"Chrome";if(dv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lv(t=Le()){return/firefox\//i.test(t)}function av(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uv(t=Le()){return/crios\//i.test(t)}function cv(t=Le()){return/iemobile/i.test(t)}function dv(t=Le()){return/android/i.test(t)}function hv(t=Le()){return/blackberry/i.test(t)}function fv(t=Le()){return/webos/i.test(t)}function Md(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OI(t=Le()){var e;return Md(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LI(){return HS()&&document.documentMode===10}function pv(t=Le()){return Md(t)||dv(t)||fv(t)||hv(t)||/windows phone/i.test(t)||cv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t,e=[]){let n;switch(t){case"Browser":n=dp(Le());break;case"Worker":n=`${dp(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e={}){return en(t,"GET","/v2/passwordPolicy",Zt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=6;class FI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new DI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cl(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(Bt(this));const n=e?Te(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MI(this),n=new FI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tn(t){return Te(t)}class hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=eC(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zI(t){Jl=t}function gv(t){return Jl.loadJS(t)}function BI(){return Jl.recaptchaEnterpriseScript}function WI(){return Jl.gapiScript}function VI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class HI{constructor(){this.enterprise=new $I}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $I{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const GI="recaptcha-enterprise",_v="NO_RECAPTCHA";class KI{constructor(e){this.type=GI,this.auth=tn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{II(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new CI(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;lp(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(_v)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HI().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&lp(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=BI();a.length!==0&&(a+=l),gv(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function fp(t,e,n,r=!1,i=!1){const s=new KI(t);let o;if(i)o=_v;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function hl(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await fp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await fp(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e){const n=Yl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(rr(s,e??{}))return i;st(i,"already-initialized")}return n.initialize({options:e})}function QI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YI(t,e,n){const r=tn(t);b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=vv(e),{host:o,port:l}=JI(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},h=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){b(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),b(rr(u,r.config.emulator)&&rr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,pr(o)?(Td(`${s}//${o}${a}`),kd("Auth",!0)):XI()}function vv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JI(t){const e=vv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pp(o)}}}function pp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function ZI(t,e){return en(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t,e){return js(t,"POST","/v1/accounts:signInWithPassword",Zt(t,e))}async function t1(t,e){return en(t,"POST","/v1/accounts:sendOobCode",Zt(t,e))}async function n1(t,e){return t1(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e){return js(t,"POST","/v1/accounts:signInWithEmailLink",Zt(t,e))}async function i1(t,e){return js(t,"POST","/v1/accounts:signInWithEmailLink",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends jd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ws(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ws(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hl(e,n,"signInWithPassword",e1);case"emailLink":return r1(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hl(e,r,"signUpPassword",ZI);case"emailLink":return i1(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e){return js(t,"POST","/v1/accounts:signInWithIdp",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="http://localhost";class sr extends jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Br(e,n)}buildRequest(){const e={requestUri:s1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l1(t){const e=Li(Di(t)).link,n=e?Li(Di(e)).deep_link_id:null,r=Li(Di(t)).deep_link_id;return(r?Li(Di(r)).link:null)||r||n||e||t}class Fd{constructor(e){var n,r,i,s,o,l;const a=Li(Di(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,h=(r=a.oobCode)!==null&&r!==void 0?r:null,d=o1((i=a.mode)!==null&&i!==void 0?i:null);b(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=l1(e);try{return new Fd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,n){return ws._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fd.parseLink(n);return b(r,"argument-error"),ws._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Fs{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Fs{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Fs{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){return js(t,"POST","/v1/accounts:signUp",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ft._fromIdTokenResponse(e,r,i),o=mp(r);return new or({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mp(r);return new or({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fl(e,n,r,i)}}function yv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fl._fromErrorAndOperation(t,s,e,r):s})}async function u1(t,e,n=!1){const r=await ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(t,e,n=!1){const{auth:r}=t;if(Fe(r.app))return Promise.reject(Bt(r));const i="reauthenticate";try{const s=await ys(t,yv(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=Dd(s.idToken);b(o,r,"internal-error");const{sub:l}=o;return b(t.uid===l,r,"user-mismatch"),or._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e,n=!1){if(Fe(t.app))return Promise.reject(Bt(t));const r="signIn",i=await yv(t,r,e),s=await or._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function d1(t,e){return wv(tn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(t){const e=tn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function h1(t,e,n){const r=tn(t);await hl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",n1)}async function f1(t,e,n){if(Fe(t.app))return Promise.reject(Bt(t));const r=tn(t),o=await hl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",a1).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Ev(t),a}),l=await or._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function p1(t,e,n){return Fe(t.app)?Promise.reject(Bt(t)):d1(Te(t),ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ev(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t,e){return Te(t).setPersistence(e)}function m1(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function g1(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function Cv(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}const pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pl,"1"),this.storage.removeItem(pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=1e3,v1=10;class Tv extends Iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,v1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tv.type="LOCAL";const zd=Tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv extends Iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kv.type="SESSION";const Xl=kv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await y1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Bd("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function E1(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function S1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function I1(){return xv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="firebaseLocalStorageDb",T1=1,ml="firebaseLocalStorage",Rv="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(t,e){return t.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function k1(){const t=indexedDB.deleteDatabase(Nv);return new Us(t).toPromise()}function dc(){const t=indexedDB.open(Nv,T1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ml,{keyPath:Rv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ml)?e(r):(r.close(),await k1(),e(await dc()))})})}async function gp(t,e,n){const r=ea(t,!0).put({[Rv]:e,value:n});return new Us(r).toPromise()}async function x1(t,e){const n=ea(t,!1).get(e),r=await new Us(n).toPromise();return r===void 0?null:r.value}function _p(t,e){const n=ea(t,!0).delete(e);return new Us(n).toPromise()}const N1=800,R1=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>R1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zl._getInstance(I1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await S1(),!this.activeServiceWorker)return;this.sender=new w1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dc();return await gp(e,pl,"1"),await _p(e,pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>x1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_p(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ea(i,!1).getAll();return new Us(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const P1=Pv;new Ms(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e){return e?Ft(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function b1(t){return wv(t.auth,new Wd(t),t.bypassAuthState)}function A1(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),c1(n,new Wd(t),t.bypassAuthState)}async function O1(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),u1(n,new Wd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b1;case"linkViaPopup":case"linkViaRedirect":return O1;case"reauthViaPopup":case"reauthViaRedirect":return A1;default:st(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=new Ms(2e3,1e4);async function Ov(t,e,n){if(Fe(t.app))return Promise.reject(vt(t,"operation-not-supported-in-this-environment"));const r=tn(t);pI(t,e,Ud);const i=bv(r,n);return new Kn(r,"signInViaPopup",e,i).executeNotNull()}class Kn extends Av{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L1.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="pendingRedirect",bo=new Map;class M1 extends Av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bo.get(this.auth._key());if(!e){try{const r=await j1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bo.set(this.auth._key(),e)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function j1(t,e){const n=z1(e),r=U1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function F1(t,e){bo.set(t._key(),e)}function U1(t){return Ft(t._redirectPersistence)}function z1(t){return Po(D1,t.config.apiKey,t.name)}async function B1(t,e,n=!1){if(Fe(t.app))return Promise.reject(Bt(t));const r=tn(t),i=bv(r,e),o=await new M1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=10*60*1e3;class V1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W1&&this.cachedEventUids.clear(),this.cachedEventUids.has(vp(e))}saveEventToCache(e){this.cachedEventUids.add(vp(e)),this.lastProcessedEventTime=Date.now()}}function vp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e={}){return en(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K1=/^https?/;async function q1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $1(t);for(const n of e)try{if(Q1(n))return}catch{}st(t,"unauthorized-domain")}function Q1(t){const e=uc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!K1.test(n))return!1;if(G1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new Ms(3e4,6e4);function yp(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function J1(t){return new Promise((e,n)=>{var r,i,s;function o(){yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yp(),n(vt(t,"network-request-failed"))},timeout:Y1.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Rt().gapi)===null||s===void 0)&&s.load)o();else{const l=VI("iframefcb");return Rt()[l]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},gv(`${WI()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Ao=null,e})}let Ao=null;function X1(t){return Ao=Ao||J1(t),Ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new Ms(5e3,15e3),eT="__/auth/iframe",tT="emulator/auth/iframe",nT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iT(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ld(e,tT):`https://${t.config.authDomain}/${eT}`,r={apiKey:e.apiKey,appName:t.name,v:mr},i=rT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ui(r).slice(1)}`}async function sT(t){const e=await X1(t),n=Rt().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:iT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),l=Rt().setTimeout(()=>{s(o)},Z1.get());function a(){Rt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lT=500,aT=600,uT="_blank",cT="http://localhost";class wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dT(t,e,n,r=lT,i=aT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},oT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Le().toLowerCase();n&&(l=uv(u)?uT:n),lv(u)&&(e=e||cT,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(OI(u)&&l!=="_self")return hT(e||"",l),new wp(null);const d=window.open(e||"",l,h);b(d,t,"popup-blocked");try{d.focus()}catch{}return new wp(d)}function hT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="__/auth/handler",pT="emulator/auth/handler",mT=encodeURIComponent("fac");async function Ep(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mr,eventId:i};if(e instanceof Ud){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Fs){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${mT}=${encodeURIComponent(a)}`:"";return`${gT(t)}?${ui(l).slice(1)}${u}`}function gT({config:t}){return t.emulator?Ld(t,pT):`https://${t.authDomain}/${fT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="webStorageSupport";class _T{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xl,this._completeRedirectFn=B1,this._overrideRedirectResult=F1}async _openPopup(e,n,r,i){var s;qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ep(e,n,r,uc(),i);return dT(e,o,Bd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ep(e,n,r,uc(),i);return E1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sT(e),r=new V1(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qa,{type:Qa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qa];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=q1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pv()||av()||Md()}}const vT=_T;var Sp="@firebase/auth",Cp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ET(t){ir(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mv(t)},u=new UI(r,i,s,a);return QI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ir(new Pn("auth-internal",e=>{const n=tn(e.getProvider("auth").getImmediate());return(r=>new yT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Sp,Cp,wT(t)),Nt(Sp,Cp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=5*60,CT=$_("authIdTokenMaxAge")||ST;let Ip=null;const IT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CT)return;const i=n==null?void 0:n.token;Ip!==i&&(Ip=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TT(t=Pd()){const e=Yl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qI(t,{popupRedirectResolver:vT,persistence:[P1,zd,Xl]}),r=$_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=IT(s.toString());g1(n,o,()=>o(n.currentUser)),m1(n,l=>o(l))}}const i=W_("auth");return i&&YI(n,`http://${i}`),n}function kT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ET("Browser");var xT="firebase",NT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(xT,NT,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="firebasestorage.googleapis.com",RT="storageBucket",PT=2*60*1e3,bT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Xt{constructor(e,n,r=0){super(Ya(e),`Firebase Storage: ${n} (${Ya(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,At.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ya(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pt||(Pt={}));function Ya(t){return"storage/"+t}function AT(){const t="An unknown error occurred, please check the error payload for server response.";return new At(Pt.UNKNOWN,t)}function OT(){return new At(Pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LT(){return new At(Pt.CANCELED,"User canceled the upload/download.")}function DT(t){return new At(Pt.INVALID_URL,"Invalid URL '"+t+"'.")}function MT(t){return new At(Pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Tp(t){return new At(Pt.INVALID_ARGUMENT,t)}function Mv(){return new At(Pt.APP_DELETED,"The Firebase app was deleted.")}function jT(t){return new At(Pt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(r.path==="")return r;throw MT(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},y=n===Dv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",_=new RegExp(`^https?://${y}/${i}/${S}`,"i"),v=[{regex:l,indices:a,postModify:s},{regex:m,indices:g,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const I=v[E],k=I.regex.exec(e);if(k){const x=k[I.indices.bucket];let N=k[I.indices.path];N||(N=""),r=new pt(x,N),I.postModify(r);break}}if(r==null)throw DT(e);return r}}class FT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function d(S){i=setTimeout(()=>{i=null,t(m,a())},S)}function f(){s&&clearTimeout(s)}function m(S,..._){if(u){f();return}if(S){f(),h.call(null,S,..._);return}if(a()||o){f(),h.call(null,S,..._);return}r<64&&(r*=2);let v;l===1?(l=2,v=0):v=(r+Math.random())*1e3,d(v)}let g=!1;function y(S){g||(g=!0,f(),!u&&(i!==null?(S||(l=2),clearTimeout(i),d(0)):S||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function zT(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){return t!==void 0}function kp(t,e,n,r){if(r<e)throw Tp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Tp(`Invalid value for '${t}'. Expected ${n} or less.`)}function WT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var gl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gl||(gl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,r,i,s,o,l,a,u,h,d,f=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new po(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===gl.NO_ERROR,a=s.getStatus();if(!l||VT(a,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===gl.ABORT;r(!1,new po(!1,null,h));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new po(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());BT(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=AT();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?Mv():LT();o(a)}else{const a=OT();o(a)}};this.canceled_?n(!1,new po(!1,null,!0)):this.backoffId_=UT(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class po{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $T(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QT(t,e,n,r,i,s,o=!0,l=!1){const a=WT(t.urlParams),u=t.url+a,h=Object.assign({},t.headers);return KT(h,e),$T(h,n),GT(h,s),qT(h,r),new HT(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function JT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _l(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JT(this._location.path)}get storage(){return this._service}get parent(){const e=YT(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new _l(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jT(e)}}function xp(t,e){const n=e==null?void 0:e[RT];return n==null?null:pt.makeFromBucketSpec(n,t)}function XT(t,e,n,r={}){t.host=`${e}:${n}`;const i=pr(e);i&&(Td(`https://${t.host}/b`),kd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:G_(s,t.app.options.projectId))}class ZT{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=Dv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PT,this._maxUploadRetryTime=bT,this._requests=new Set,i!=null?this._bucket=pt.makeFromBucketSpec(i,this._host):this._bucket=xp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=xp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _l(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new FT(Mv());{const o=QT(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Np="@firebase/storage",Rp="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="storage";function ek(t=Pd(),e){t=Te(t);const r=Yl(t,jv).getImmediate({identifier:e}),i=V_("storage");return i&&tk(r,...i),r}function tk(t,e,n,r={}){XT(t,e,n,r)}function nk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ZT(n,r,i,e,mr)}function rk(){ir(new Pn(jv,nk,"PUBLIC").setMultipleInstances(!0)),Nt(Np,Rp,""),Nt(Np,Rp,"esm2017")}rk();var Pp={};const bp="@firebase/database",Ap="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fv="";function ik(t){Fv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sk(e)}}catch{}return new ok},qn=Uv("localStorage"),lk=Uv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Nd("@firebase/database"),ak=function(){let t=1;return function(){return t++}}(),zv=function(t){const e=rC(t),n=new ZS;n.update(e);const r=n.digest();return Cd.encodeByteArray(r)},zs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zs.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let Ki=null,Op=!0;const uk=function(t,e){T(!0,"Can't turn on custom loggers persistently."),Wr.logLevel=H.VERBOSE,Ki=Wr.log.bind(Wr)},ve=function(...t){if(Op===!0&&(Op=!1,Ki===null&&lk.get("logging_enabled")===!0&&uk()),Ki){const e=zs.apply(null,t);Ki(e)}},Bs=function(t){return function(...e){ve(t,...e)}},hc=function(...t){const e="FIREBASE INTERNAL ERROR: "+zs(...t);Wr.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${zs(...t)}`;throw Wr.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+zs(...t);Wr.warn(e)},ck=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lr="[MIN_NAME]",bn="[MAX_NAME]",gr=function(t,e){if(t===e)return 0;if(t===lr||e===bn)return-1;if(e===lr||t===bn)return 1;{const n=Lp(t),r=Lp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},hk=function(t,e){return t===e?0:t<e?-1:1},Ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Hd=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=Hd(t[e[r]]);return n+="}",n},Bv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wv=function(t){T(!Vd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},fk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const gk=new RegExp("^-?(0*)\\d{1,10}$"),_k=-2147483648,vk=2147483647,Lp=function(t){if(gk.test(t)){const e=Number(t);if(e>=_k&&e<=vk)return e}return null},di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},yk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Fe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Oo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Oo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="5",Vv="v",Hv="s",$v="r",Gv="f",Kv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qv="ls",Qv="p",fc="ac",Yv="websocket",Jv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Sk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zv(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===Yv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sk(t)&&(n.ns=t.namespace);const i=[];return Ie(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return LS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={},Xa={};function Gd(t){const e=t.toString();return Ja[e]||(Ja[e]=new Ck),Ja[e]}function Ik(t,e){const n=t.toString();return Xa[n]||(Xa[n]=e()),Xa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&di(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="start",kk="close",xk="pLPCommand",Nk="pRTLPCB",ey="id",ty="pw",ny="ser",Rk="cb",Pk="seg",bk="ts",Ak="d",Ok="dframe",ry=1870,iy=30,Lk=ry-iy,Dk=25e3,Mk=3e4;class Ar{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bs(e),this.stats_=Gd(n),this.urlFn=a=>(this.appCheckToken&&(a[fc]=this.appCheckToken),Zv(n,Jv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Tk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mk)),dk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kd((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dp)this.id=l,this.password=a;else if(o===kk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Dp]="t",r[ny]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Rk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Vv]=$d,this.transportSessionId&&(r[Hv]=this.transportSessionId),this.lastSessionId&&(r[qv]=this.lastSessionId),this.applicationId&&(r[Qv]=this.applicationId),this.appCheckToken&&(r[fc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kv.test(location.hostname)&&(r[$v]=Gv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ar.forceAllow_=!0}static forceDisallow(){Ar.forceDisallow_=!0}static isAvailable(){return Ar.forceAllow_?!0:!Ar.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fk()&&!pk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=z_(n),i=Bv(r,Lk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ok]="t",r[ey]=e,r[ty]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ak(),window[xk+this.uniqueCallbackIdentifier]=e,window[Nk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ve("frame writing exception"),l.stack&&ve(l.stack),ve(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ey]=this.myID,e[ty]=this.myPW,e[ny]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iy+r.length<=ry;){const o=this.pendingSegs.shift();r=r+"&"+Pk+i+"="+o.seg+"&"+bk+i+"="+o.ts+"&"+Ak+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Dk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=16384,Fk=45e3;let vl=null;typeof MozWebSocket<"u"?vl=MozWebSocket:typeof WebSocket<"u"&&(vl=WebSocket);class ht{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bs(this.connId),this.stats_=Gd(n),this.connURL=ht.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Vv]=$d,typeof location<"u"&&location.hostname&&Kv.test(location.hostname)&&(o[$v]=Gv),n&&(o[Hv]=n),r&&(o[qv]=r),i&&(o[fc]=i),s&&(o[Qv]=s),Zv(e,Yv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qn.set("previous_websocket_failure",!0);try{let r;$S(),this.mySock=new vl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vl!==null&&!ht.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_s(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bv(n,jk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{static get ALL_TRANSPORTS(){return[Ar,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ht&&ht.isAvailable();let r=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ht];else{const i=this.transports_=[];for(const s of Es.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=6e4,zk=5e3,Bk=10*1024,Wk=100*1024,Za="t",Mp="d",Vk="s",jp="r",Hk="e",Fp="o",Up="a",zp="n",Bp="p",$k="h";class Gk{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bs("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Za in e){const n=e[Za];n===Up?this.upgradeIfSecondaryHealthy_():n===jp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Up,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ti("t",e),r=Ti("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ti(Za,e);if(Mp in e){const r=e[Mp];if(n===$k){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===zp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Vk?this.onConnectionShutdown_(r):n===jp?this.onReset_(r):n===Hk?hc("Server Error: "+r):n===Fp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$d!==r&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends oy{static getInstance(){return new yl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=32,Vp=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new V("")}function D(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function qd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Kk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ss(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ly(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof V)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new V(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=D(t),r=D(e);if(n===null)return e;if(n===r)return ze(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qk(t,e){const n=Ss(t,0),r=Ss(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=gr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Qd(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Qk{constructor(e,n){this.errorPrefix_=n,this.parts_=Ss(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ql(this.parts_[r]);ay(this)}}function Yk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ql(e),ay(t)}function Jk(t){const e=t.parts_.pop();t.byteLength_-=Ql(e),t.parts_.length>0&&(t.byteLength_-=1)}function ay(t){if(t.byteLength_>Vp)throw new Error(t.errorPrefix_+"has a key path longer than "+Vp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wp+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends oy{static getInstance(){return new Yd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=1e3,Xk=60*5*1e3,Hp=30*1e3,Zk=1.3,ex=3e4,tx="server_kill",$p=3;class Wt extends sy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Wt.nextPersistentConnectionId_++,this.log_=Bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=Xk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ls,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Wt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const r=Jr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=JS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hc("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ex&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new Gk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Oe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(tx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Oe(d),a())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rc(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new V(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$p&&(this.reconnectDelay_=Hp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fv.replace(/\./g,"-")]=1,xd()?e["framework.cordova"]=1:K_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yl.getInstance().currentlyOnline();return rc(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(lr,e),i=new j(lr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;class uy extends ta{static get __EMPTY_NODE(){return mo}static set __EMPTY_NODE(e){mo=e}compare(e,n){return gr(e.name,n.name)}isDefinedOn(e){throw ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(bn,mo)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,mo)}toString(){return".key"}}const Jn=new uy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Be.EMPTY_NODE,this.right=s??Be.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class nx{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,n=Be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new go(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new go(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new nx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t,e){return gr(t.name,e.name)}function Jd(t,e){return gr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;function ix(t){pc=t}const cy=function(t){return typeof t=="number"?"number:"+Wv(t):"string:"+t},dy=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else T(t===pc||t.isEmpty(),"priority of unexpected type.");T(t===pc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp;class de{static set __childrenNodeConstructor(e){Gp=e}static get __childrenNodeConstructor(){return Gp}constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:D(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=D(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wv(this.value_):e+=this.value_,this.lazyHash_=zv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hy,fy;function sx(t){hy=t}function ox(t){fy=t}class lx extends ta{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?gr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(bn,new de("[PRIORITY-POST]",fy))}makePost(e,n){const r=hy(e);return new j(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new lx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=Math.log(2);class ux{constructor(e){const n=s=>parseInt(Math.log(s)/ax,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wl=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new fe(f,d.node,fe.BLACK,null,null);{const m=parseInt(h/2,10)+a,g=i(a,m),y=i(m+1,u);return d=t[m],f=n?n(d):d,new fe(f,d.node,fe.BLACK,g,y)}},s=function(a){let u=null,h=null,d=t.length;const f=function(g,y){const S=d-g,_=d;d-=g;const p=i(S+1,_),v=t[S],E=n?n(v):v;m(new fe(E,v.node,y,null,p))},m=function(g){u?(u.left=g,u=g):(h=g,u=g)};for(let g=0;g<a.count;++g){const y=a.nextBitIsOne(),S=Math.pow(2,a.count-(g+1));y?f(S,fe.BLACK):(f(S,fe.BLACK),f(S,fe.RED))}return h},o=new ux(t.length),l=s(o);return new Be(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;const yr={};class Ut{static get Default(){return T(yr&&Z,"ChildrenNode.ts has not been loaded"),eu=eu||new Ut({".priority":yr},{".priority":Z}),eu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Be?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Jn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=wl(r,e.getCompare()):l=yr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Ut(h,u)}addToIndexes(e,n){const r=ll(this.indexes_,(i,s)=>{const o=Jr(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===yr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),wl(l,o.getCompare())}else return yr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=ll(this.indexes_,i=>{if(i===yr)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Ut(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;class A{static get EMPTY_NODE(){return xi||(xi=new A(new Be(Jd),null,Ut.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&dy(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?xi:n}}getChild(e){const n=D(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?xi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=D(e);if(r===null)return n;{T(D(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cy(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":zv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ws?-1:0}withIndex(e){if(e===Jn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Jn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Jn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cx extends A{constructor(){super(new Be(Jd),A.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Ws=new cx;Object.defineProperties(j,{MIN:{value:new j(lr,A.EMPTY_NODE)},MAX:{value:new j(bn,Ws)}});uy.__EMPTY_NODE=A.EMPTY_NODE;de.__childrenNodeConstructor=A;ix(Ws);ox(Ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=!0;function pe(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,pe(e))}if(!(t instanceof Array)&&dx){const n=[];let r=!1;if(Ie(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=pe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=wl(n,rx,o=>o.name,Jd);if(r){const o=wl(n,Z.getCompare());return new A(s,pe(e),new Ut({".priority":o},{".priority":Z}))}else return new A(s,pe(e),Ut.Default)}else{let n=A.EMPTY_NODE;return Ie(t,(r,i)=>{if(bt(t,r)&&r.substring(0,1)!=="."){const s=pe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(pe(e))}}sx(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends ta{constructor(e){super(),this.indexPath_=e,T(!M(e)&&D(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?gr(e.name,n.name):s}makePost(e,n){const r=pe(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Ws);return new j(bn,e)}toString(){return Ss(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx extends ta{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=pe(e);return new j(n,r)}toString(){return".value"}}const py=new hx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){return{type:"value",snapshotNode:t}}function Xr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Cs(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Xr(n,r)):o.trackChildChange(Is(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(Cs(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Is(i,s,o))}else r.trackChildChange(Xr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.indexedFilter_=new Zd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,a);if(h&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Is(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Cs(n,d));const y=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Xr(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:h&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Cs(u.name,u.node)),s.trackChildChange(Xr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new eh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mx(t){return t.loadsAllData()?new Zd(t.getIndex()):t.hasLimit()?new px(t):new Ts(t)}function gx(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function _x(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function vx(t,e){const n=t.copy();return n.index_=e,n}function Kp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===py?n="$value":t.index_===Jn?n="$key":(T(t.index_ instanceof Xd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends sy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Bs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=El.getListenId_(e,r),l={};this.listens_[o]=l;const a=Kp(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Jr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=El.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Kp(e._queryParams),r=e._path.toString(),i=new Ls;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ui(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=_s(l.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return{value:null,children:new Map}}function gy(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=D(e);t.children.has(r)||t.children.set(r,Sl());const i=t.children.get(r);e=G(e),gy(i,e,n)}}function mc(t,e,n){t.value!==null?n(e,t.value):wx(t,(r,i)=>{const s=new V(e.toString()+"/"+r);mc(i,s,n)})}function wx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ie(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=10*1e3,Sx=30*1e3,Cx=5*60*1e3;class Ix{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ex(e);const r=Qp+(Sx-Qp)*Math.random();qi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ie(e,(i,s)=>{s>0&&bt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Cx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function th(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mt.ACK_USER_WRITE,this.source=th()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new Cl(B(),n,this.revert)}}else return T(D(this.path)===e,"operationForChild called for unrelated child."),new Cl(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.source=e,this.path=n,this.type=mt.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new ks(this.source,B()):new ks(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mt.OVERWRITE}operationForChild(e){return M(this.path)?new ar(this.source,B(),this.snap.getImmediateChild(e)):new ar(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mt.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new ar(this.source,B(),n.value):new Zr(this.source,B(),n)}else return T(D(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zr(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=D(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(fx(o.childName,o.snapshotNode))}),Ni(t,i,"child_removed",e,r,n),Ni(t,i,"child_added",e,r,n),Ni(t,i,"child_moved",s,r,n),Ni(t,i,"child_changed",e,r,n),Ni(t,i,"value",e,r,n),i}function Ni(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Nx(t,l,a)),o.forEach(l=>{const a=xx(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function xx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Nx(t,e,n){if(e.childName==null||n.childName==null)throw ai("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e){return{eventCache:t,serverCache:e}}function Qi(t,e,n,r){return na(new ur(e,n,r),t.serverCache)}function _y(t,e,n,r){return na(t.eventCache,new ur(e,n,r))}function gc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu;const Rx=()=>(tu||(tu=new Be(hk)),tu);class ${static fromObject(e){let n=new $(null);return Ie(e,(r,i)=>{n=n.set(new V(r),i)}),n}constructor(e,n=Rx()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(M(e))return null;{const r=D(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:re(new V(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=D(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new $(null)}}set(e,n){if(M(e))return new $(n,this.children);{const r=D(e),s=(this.children.get(r)||new $(null)).set(G(e),n),o=this.children.insert(r,s);return new $(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const n=D(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new $(null):new $(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=D(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(M(e))return n;{const r=D(e),s=(this.children.get(r)||new $(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new $(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=D(e),o=this.children.get(s);return o?o.findOnPath_(G(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=D(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),re(n,i),r):new $(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new $(null))}}function Yi(t,e,n){if(M(e))return new yt(new $(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ze(i,e);return s=s.updateChild(o,n),new yt(t.writeTree_.set(i,s))}else{const i=new $(n),s=t.writeTree_.setTree(e,i);return new yt(s)}}}function _c(t,e,n){let r=t;return Ie(n,(i,s)=>{r=Yi(r,re(e,i),s)}),r}function Yp(t,e){if(M(e))return yt.empty();{const n=t.writeTree_.setTree(e,new $(null));return new yt(n)}}function vc(t,e){return _r(t,e)!=null}function _r(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function Jp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function xn(t,e){if(M(e))return t;{const n=_r(t,e);return n!=null?new yt(new $(n)):new yt(t.writeTree_.subtree(e))}}function yc(t){return t.writeTree_.isEmpty()}function ei(t,e){return vy(B(),t.writeTree_,e)}function vy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vy(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e){return Sy(e,t)}function Px(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Yi(t.visibleWrites,e,n)),t.lastWriteId=r}function bx(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=_c(t.visibleWrites,e,n),t.lastWriteId=r}function Ax(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ox(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Lx(l,r.path)?i=!1:tt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Dx(t),!0;if(r.snap)t.visibleWrites=Yp(t.visibleWrites,r.path);else{const l=r.children;Ie(l,a=>{t.visibleWrites=Yp(t.visibleWrites,re(r.path,a))})}return!0}else return!1}function Lx(t,e){if(t.snap)return tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tt(re(t.path,n),e))return!0;return!1}function Dx(t){t.visibleWrites=yy(t.allWrites,Mx,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Mx(t){return t.visible}function yy(t,e,n){let r=yt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)tt(n,o)?(l=ze(n,o),r=Yi(r,l,s.snap)):tt(o,n)&&(l=ze(o,n),r=Yi(r,B(),s.snap.getChild(l)));else if(s.children){if(tt(n,o))l=ze(n,o),r=_c(r,l,s.children);else if(tt(o,n))if(l=ze(o,n),M(l))r=_c(r,B(),s.children);else{const a=Jr(s.children,D(l));if(a){const u=a.getChild(G(l));r=Yi(r,B(),u)}}}else throw ai("WriteRecord should have .snap or .children")}}return r}function wy(t,e,n,r,i){if(!r&&!i){const s=_r(t.visibleWrites,e);if(s!=null)return s;{const o=xn(t.visibleWrites,e);if(yc(o))return n;if(n==null&&!vc(o,B()))return null;{const l=n||A.EMPTY_NODE;return ei(o,l)}}}else{const s=xn(t.visibleWrites,e);if(!i&&yc(s))return n;if(!i&&n==null&&!vc(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tt(u.path,e)||tt(e,u.path))},l=yy(t.allWrites,o,e),a=n||A.EMPTY_NODE;return ei(l,a)}}}function jx(t,e,n){let r=A.EMPTY_NODE;const i=_r(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=xn(t.visibleWrites,e);return n.forEachChild(Z,(o,l)=>{const a=ei(xn(s,new V(o)),l);r=r.updateImmediateChild(o,a)}),Jp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=xn(t.visibleWrites,e);return Jp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Fx(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(vc(t.visibleWrites,s))return null;{const o=xn(t.visibleWrites,s);return yc(o)?i.getChild(n):ei(o,i.getChild(n))}}function Ux(t,e,n,r){const i=re(e,n),s=_r(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=xn(t.visibleWrites,i);return ei(o,r.getNode().getImmediateChild(n))}else return null}function zx(t,e){return _r(t.visibleWrites,e)}function Bx(t,e,n,r,i,s,o){let l;const a=xn(t.visibleWrites,e),u=_r(a,B());if(u!=null)l=u;else if(n!=null)l=ei(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=f.getNext();for(;m&&h.length<i;)d(m,r)!==0&&h.push(m),m=f.getNext();return h}else return[]}function Wx(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function Il(t,e,n,r){return wy(t.writeTree,t.treePath,e,n,r)}function sh(t,e){return jx(t.writeTree,t.treePath,e)}function Xp(t,e,n,r){return Fx(t.writeTree,t.treePath,e,n,r)}function Tl(t,e){return zx(t.writeTree,re(t.treePath,e))}function Vx(t,e,n,r,i,s){return Bx(t.writeTree,t.treePath,e,n,r,i,s)}function oh(t,e,n){return Ux(t.writeTree,t.treePath,e,n)}function Ey(t,e){return Sy(re(t.treePath,e),t.writeTree)}function Sy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Is(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Cs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Xr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Is(r,e.snapshotNode,i.oldSnap));else throw ai("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Cy=new $x;class lh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ur(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cr(this.viewCache_),s=Vx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){return{filter:t}}function Kx(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qx(t,e,n,r,i){const s=new Hx;let o,l;if(n.type===mt.OVERWRITE){const u=n;u.source.fromUser?o=wc(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=kl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===mt.MERGE){const u=n;u.source.fromUser?o=Yx(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ec(t,e,u.path,u.children,r,i,l,s))}else if(n.type===mt.ACK_USER_WRITE){const u=n;u.revert?o=Zx(t,e,u.path,r,i,s):o=Jx(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===mt.LISTEN_COMPLETE)o=Xx(t,e,n.path,r,s);else throw ai("Unknown operation type: "+n.type);const a=s.getChanges();return Qx(e,o,a),{viewCache:o,changes:a}}function Qx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=gc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(my(gc(e)))}}function Iy(t,e,n,r,i,s){const o=e.eventCache;if(Tl(r,n)!=null)return e;{let l,a;if(M(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=cr(e),h=u instanceof A?u:A.EMPTY_NODE,d=sh(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Il(r,cr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=D(n);if(u===".priority"){T(An(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=Xp(r,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=G(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=Xp(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=oh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,i,s):l=o.getNode()}}return Qi(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function kl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),m,null)}else{const m=D(n);if(!a.isCompleteForPath(n)&&An(n)>1)return e;const g=G(n),S=a.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?u=h.updatePriority(a.getNode(),S):u=h.updateChild(a.getNode(),m,S,g,Cy,null)}const d=_y(e,u,a.isFullyInitialized()||M(n),h.filtersNodes()),f=new lh(i,d,s);return Iy(t,d,n,i,f,l)}function wc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new lh(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Qi(e,u,!0,t.filter.filtersNodes());else{const d=D(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Qi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=G(n),m=l.getNode().getImmediateChild(d);let g;if(M(f))g=r;else{const y=h.getCompleteChild(d);y!=null?qd(f)===".priority"&&y.getChild(ly(f)).isEmpty()?g=y:g=y.updateChild(f,r):g=A.EMPTY_NODE}if(m.equals(g))a=e;else{const y=t.filter.updateChild(l.getNode(),d,g,f,h,o);a=Qi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Zp(t,e){return t.eventCache.isCompleteForChild(e)}function Yx(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=re(n,a);Zp(e,D(h))&&(l=wc(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=re(n,a);Zp(e,D(h))||(l=wc(t,l,h,u,i,s,o))}),l}function em(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ec(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new $(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),g=em(t,m,f);a=kl(t,a,new V(d),g,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!m){const g=e.serverCache.getNode().getImmediateChild(d),y=em(t,g,f);a=kl(t,a,new V(d),y,i,s,o,l)}}),a}function Jx(t,e,n,r,i,s,o){if(Tl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return kl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new $(null);return a.getNode().forEachChild(Jn,(h,d)=>{u=u.set(new V(h),d)}),Ec(t,e,n,u,i,s,l,o)}else return e}else{let u=new $(null);return r.foreach((h,d)=>{const f=re(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),Ec(t,e,n,u,i,s,l,o)}}function Xx(t,e,n,r,i){const s=e.serverCache,o=_y(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return Iy(t,o,n,r,Cy,i)}function Zx(t,e,n,r,i,s){let o;if(Tl(r,n)!=null)return e;{const l=new lh(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||D(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Il(r,cr(e));else{const d=e.serverCache.getNode();T(d instanceof A,"serverChildren would be complete if leaf node"),h=sh(r,d)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=D(n);let d=oh(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?u=t.filter.updateChild(a,h,d,G(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,A.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Il(r,cr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Tl(r,B())!=null,Qi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Zd(r.getIndex()),s=mx(r);this.processor_=Gx(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),h=new ur(a,o.isFullyInitialized(),i.filtersNodes()),d=new ur(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=na(d,h),this.eventGenerator_=new Tx(this.query_)}get query(){return this.query_}}function tN(t){return t.viewCache_.serverCache.getNode()}function nN(t,e){const n=cr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(D(e)).isEmpty())?n.getChild(e):null}function tm(t){return t.eventRegistrations_.length===0}function rN(t,e){t.eventRegistrations_.push(e)}function nm(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function rm(t,e,n,r){e.type===mt.MERGE&&e.source.queryId!==null&&(T(cr(t.viewCache_),"We should always have a full cache before handling merges"),T(gc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=qx(t.processor_,i,e,n,r);return Kx(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ty(t,s.changes,s.viewCache.eventCache.getNode(),null)}function iN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(Xr(s,o))}),n.isFullyInitialized()&&r.push(my(n.getNode())),Ty(t,r,n.getNode(),e)}function Ty(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return kx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl;class sN{constructor(){this.views=new Map}}function oN(t){T(!xl,"__referenceConstructor has already been defined"),xl=t}function lN(){return T(xl,"Reference.ts has not been loaded"),xl}function aN(t){return t.views.size===0}function ah(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),rm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(rm(o,e,n,r));return s}}function uN(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Il(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=sh(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=na(new ur(l,a,!1),new ur(r,i,!1));return new eN(e,u)}return o}function cN(t,e,n,r,i,s){const o=uN(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rN(o,n),iN(o,n)}function dN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=On(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(nm(u,n,r)),tm(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(nm(a,n,r)),tm(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!On(t)&&s.push(new(lN())(e._repo,e._path)),{removed:s,events:o}}function ky(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vr(t,e){let n=null;for(const r of t.views.values())n=n||nN(r,e);return n}function xy(t,e){if(e._queryParams.loadsAllData())return ra(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ny(t,e){return xy(t,e)!=null}function On(t){return ra(t)!=null}function ra(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl;function hN(t){T(!Nl,"__referenceConstructor has already been defined"),Nl=t}function fN(){return T(Nl,"Reference.ts has not been loaded"),Nl}let pN=1;class im{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=Wx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ry(t,e,n,r,i){return Px(t.pendingWriteTree_,e,n,r,i),i?hi(t,new ar(th(),e,n)):[]}function mN(t,e,n,r){bx(t.pendingWriteTree_,e,n,r);const i=$.fromObject(n);return hi(t,new Zr(th(),e,i))}function mn(t,e,n=!1){const r=Ax(t.pendingWriteTree_,e);if(Ox(t.pendingWriteTree_,e)){let s=new $(null);return r.snap!=null?s=s.set(B(),!0):Ie(r.children,o=>{s=s.set(new V(o),!0)}),hi(t,new Cl(r.path,s,n))}else return[]}function ia(t,e,n){return hi(t,new ar(nh(),e,n))}function gN(t,e,n){const r=$.fromObject(n);return hi(t,new Zr(nh(),e,r))}function _N(t,e){return hi(t,new ks(nh(),e))}function vN(t,e,n){const r=ch(t,n);if(r){const i=dh(r),s=i.path,o=i.queryId,l=ze(s,e),a=new ks(rh(o),l);return hh(t,s,a)}else return[]}function Sc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Ny(o,e))){const a=dN(o,e,n,r);aN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>On(m));if(h&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=EN(f);for(let g=0;g<m.length;++g){const y=m[g],S=y.query,_=Ay(t,y);t.listenProvider_.startListening(Ji(S),Rl(t,S),_.hashFn,_.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(Ji(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(sa(f));t.listenProvider_.stopListening(Ji(f),m)}))}SN(t,u)}return l}function yN(t,e,n,r){const i=ch(t,r);if(i!=null){const s=dh(i),o=s.path,l=s.queryId,a=ze(o,e),u=new ar(rh(l),a,n);return hh(t,o,u)}else return[]}function wN(t,e,n,r){const i=ch(t,r);if(i){const s=dh(i),o=s.path,l=s.queryId,a=ze(o,e),u=$.fromObject(n),h=new Zr(rh(l),a,u);return hh(t,o,h)}else return[]}function sm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=ze(f,i);s=s||Vr(m,g),o=o||On(m)});let l=t.syncPointTree_.get(i);l?(o=o||On(l),s=s||Vr(l,B())):(l=new sN,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const y=Vr(g,B());y&&(s=s.updateImmediateChild(m,y))}));const u=Ny(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=sa(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=CN();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const h=ih(t.pendingWriteTree_,i);let d=cN(l,e,n,h,s,a);if(!u&&!o&&!r){const f=xy(l,e);d=d.concat(IN(t,e,f))}return d}function uh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ze(o,e),u=Vr(l,a);if(u)return u});return wy(i,e,s,n,!0)}function hi(t,e){return Py(e,t.syncPointTree_,null,ih(t.pendingWriteTree_,B()))}function Py(t,e,n,r){if(M(t.path))return by(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Vr(i,B()));let s=[];const o=D(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=Ey(r,o);s=s.concat(Py(l,a,u,h))}return i&&(s=s.concat(ah(i,t,r,n))),s}}function by(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Vr(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Ey(r,o),h=t.operationForChild(o);h&&(s=s.concat(by(h,l,a,u)))}),i&&(s=s.concat(ah(i,t,r,n))),s}function Ay(t,e){const n=e.query,r=Rl(t,n);return{hashFn:()=>(tN(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?vN(t,n._path,r):_N(t,n._path);{const s=mk(i,n);return Sc(t,n,null,s)}}}}function Rl(t,e){const n=sa(e);return t.queryToTagMap.get(n)}function sa(t){return t._path.toString()+"$"+t._queryIdentifier}function ch(t,e){return t.tagToQueryMap.get(e)}function dh(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function hh(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=ih(t.pendingWriteTree_,e);return ah(r,n,i,null)}function EN(t){return t.fold((e,n,r)=>{if(n&&On(n))return[ra(n)];{let i=[];return n&&(i=ky(n)),Ie(r,(s,o)=>{i=i.concat(o)}),i}})}function Ji(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(fN())(t._repo,t._path):t}function SN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=sa(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function CN(){return pN++}function IN(t,e,n){const r=e._path,i=Rl(t,e),s=Ay(t,n),o=t.listenProvider_.startListening(Ji(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)T(!On(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,d)=>{if(!M(u)&&h&&On(h))return[ra(h).query];{let f=[];return h&&(f=f.concat(ky(h).map(m=>m.query))),Ie(d,(m,g)=>{f=f.concat(g)}),f}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(Ji(h),Rl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fh(n)}node(){return this.node_}}class ph{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new ph(this.syncTree_,n)}node(){return uh(this.syncTree_,this.path_)}}const TN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},om=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xN(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},xN=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Oy=function(t,e,n,r){return mh(e,new ph(n,t),r)},Ly=function(t,e,n){return mh(t,new fh(e),n)};function mh(t,e,n){const r=t.getPriority().val(),i=om(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=om(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,pe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(Z,(l,a)=>{const u=mh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _h(t,e){let n=e instanceof V?e:new V(e),r=t,i=D(n);for(;i!==null;){const s=Jr(r.node.children,i)||{children:{},childCount:0};r=new gh(i,r,s),n=G(n),i=D(n)}return r}function fi(t){return t.node.value}function Dy(t,e){t.node.value=e,Cc(t)}function My(t){return t.node.childCount>0}function NN(t){return fi(t)===void 0&&!My(t)}function oa(t,e){Ie(t.node.children,(n,r)=>{e(new gh(n,t,r))})}function jy(t,e,n,r){n&&e(t),oa(t,i=>{jy(i,e,!0)})}function RN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Vs(t){return new V(t.parent===null?t.name:Vs(t.parent)+"/"+t.name)}function Cc(t){t.parent!==null&&PN(t.parent,t.name,t)}function PN(t,e,n){const r=NN(n),i=bt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=/[\[\].#$\/\u0000-\u001F\u007F]/,AN=/[\[\].#$\u0000-\u001F\u007F]/,nu=10*1024*1024,vh=function(t){return typeof t=="string"&&t.length!==0&&!bN.test(t)},Fy=function(t){return typeof t=="string"&&t.length!==0&&!AN.test(t)},ON=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fy(t)},Ic=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Vd(t)||t&&typeof t=="object"&&bt(t,".sv")},Hs=function(t,e,n,r){r&&e===void 0||la(ql(t,"value"),e,n)},la=function(t,e,n){const r=n instanceof V?new Qk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(r)+" with contents = "+e.toString());if(Vd(e))throw new Error(t+"contains "+e.toString()+" "+Vn(r));if(typeof e=="string"&&e.length>nu/3&&Ql(e)>nu)throw new Error(t+"contains a string greater than "+nu+" utf8 bytes "+Vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ie(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!vh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Yk(r,o),la(t,l,r),Jk(r)}),i&&s)throw new Error(t+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},LN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ss(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!vh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(qk);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&tt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},DN=function(t,e,n,r){const i=ql(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ie(e,(o,l)=>{const a=new V(o);if(la(i,l,re(n,a)),qd(a)===".priority"&&!Ic(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),LN(i,s)},yh=function(t,e,n,r){if(!Fy(n))throw new Error(ql(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yh(t,e,n)},wh=function(t,e){if(D(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ON(n))throw new Error(ql(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function aa(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Qd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Uy(t,e,n){aa(t,n),zy(t,r=>Qd(r,e))}function St(t,e,n){aa(t,n),zy(t,r=>tt(r,e)||tt(e,r))}function zy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(UN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ki&&ve("event: "+n.toString()),di(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="repo_interrupt",BN=25;class WN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sl(),this.transactionQueueTree_=new gh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VN(t,e,n){if(t.stats_=Gd(t.repoInfo_),t.forceRestClient_||yk())t.server_=new El(t.repoInfo_,(r,i,s,o)=>{lm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>am(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(r,i,s,o)=>{lm(t,r,i,s,o)},r=>{am(t,r)},r=>{HN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Ik(t.repoInfo_,()=>new Ix(t.stats_,t.server_)),t.infoData_=new yx,t.infoSyncTree_=new im({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ia(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Eh(t,"connected",!1),t.serverSyncTree_=new im({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);St(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function By(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ua(t){return TN({timestamp:By(t)})}function lm(t,e,n,r,i){t.dataUpdateCount++;const s=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=ll(n,u=>pe(u));o=wN(t.serverSyncTree_,s,a,i)}else{const a=pe(n);o=yN(t.serverSyncTree_,s,a,i)}else if(r){const a=ll(n,u=>pe(u));o=gN(t.serverSyncTree_,s,a)}else{const a=pe(n);o=ia(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ti(t,s)),St(t.eventQueue_,l,o)}function am(t,e){Eh(t,"connected",e),e===!1&&KN(t)}function HN(t,e){Ie(e,(n,r)=>{Eh(t,n,r)})}function Eh(t,e,n){const r=new V("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(r,i);const s=ia(t.infoSyncTree_,r,i);St(t.eventQueue_,r,s)}function Sh(t){return t.nextWriteId_++}function $N(t,e,n,r,i){ca(t,"set",{path:e.toString(),value:n,priority:r});const s=ua(t),o=pe(n,r),l=uh(t.serverSyncTree_,e),a=Ly(o,l,s),u=Sh(t),h=Ry(t.serverSyncTree_,e,a,u,!0);aa(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const g=f==="ok";g||Oe("set at "+e+" failed: "+f);const y=mn(t.serverSyncTree_,u,!g);St(t.eventQueue_,e,y),Tc(t,i,f,m)});const d=Ih(t,e);ti(t,d),St(t.eventQueue_,d,[])}function GN(t,e,n,r){ca(t,"update",{path:e.toString(),value:n});let i=!0;const s=ua(t),o={};if(Ie(n,(l,a)=>{i=!1,o[l]=Oy(re(e,l),pe(a),t.serverSyncTree_,s)}),i)ve("update() called with empty data.  Don't do anything."),Tc(t,r,"ok",void 0);else{const l=Sh(t),a=mN(t.serverSyncTree_,e,o,l);aa(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||Oe("update at "+e+" failed: "+u);const f=mn(t.serverSyncTree_,l,!d),m=f.length>0?ti(t,e):e;St(t.eventQueue_,m,f),Tc(t,r,u,h)}),Ie(n,u=>{const h=Ih(t,re(e,u));ti(t,h)}),St(t.eventQueue_,e,[])}}function KN(t){ca(t,"onDisconnectEvents");const e=ua(t),n=Sl();mc(t.onDisconnect_,B(),(i,s)=>{const o=Oy(i,s,t.serverSyncTree_,e);gy(n,i,o)});let r=[];mc(n,B(),(i,s)=>{r=r.concat(ia(t.serverSyncTree_,i,s));const o=Ih(t,i);ti(t,o)}),t.onDisconnect_=Sl(),St(t.eventQueue_,B(),r)}function qN(t,e,n){let r;D(e._path)===".info"?r=sm(t.infoSyncTree_,e,n):r=sm(t.serverSyncTree_,e,n),Uy(t.eventQueue_,e._path,r)}function um(t,e,n){let r;D(e._path)===".info"?r=Sc(t.infoSyncTree_,e,n):r=Sc(t.serverSyncTree_,e,n),Uy(t.eventQueue_,e._path,r)}function QN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zN)}function ca(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ve(n,...e)}function Tc(t,e,n,r){e&&di(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Wy(t,e,n){return uh(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Ch(t,e=t.transactionQueueTree_){if(e||da(t,e),fi(e)){const n=Hy(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&YN(t,Vs(e),n)}else My(e)&&oa(e,n=>{Ch(t,n)})}function YN(t,e,n){const r=n.map(u=>u.currentWriteId),i=Wy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];T(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=ze(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ca(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(mn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();da(t,_h(t.transactionQueueTree_,e)),Ch(t,t.transactionQueueTree_),St(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)di(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Oe("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ti(t,e)}},o)}function ti(t,e){const n=Vy(t,e),r=Vs(n),i=Hy(t,n);return JN(t,i,r),r}function JN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=ze(n,a.path);let h=!1,d;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,i=i.concat(mn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=BN)h=!0,d="maxretry",i=i.concat(mn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Wy(t,a.path,o);a.currentInputSnapshot=f;const m=e[l].update(f.val());if(m!==void 0){la("transaction failed: Data returned ",m,a.path);let g=pe(m);typeof m=="object"&&m!=null&&bt(m,".priority")||(g=g.updatePriority(f.getPriority()));const S=a.currentWriteId,_=ua(t),p=Ly(g,f,_);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=p,a.currentWriteId=Sh(t),o.splice(o.indexOf(S),1),i=i.concat(Ry(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(mn(t.serverSyncTree_,S,!0))}else h=!0,d="nodata",i=i.concat(mn(t.serverSyncTree_,a.currentWriteId,!0))}St(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}da(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)di(r[l]);Ch(t,t.transactionQueueTree_)}function Vy(t,e){let n,r=t.transactionQueueTree_;for(n=D(e);n!==null&&fi(r)===void 0;)r=_h(r,n),e=G(e),n=D(e);return r}function Hy(t,e){const n=[];return $y(t,e,n),n.sort((r,i)=>r.order-i.order),n}function $y(t,e,n){const r=fi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);oa(e,i=>{$y(t,i,n)})}function da(t,e){const n=fi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Dy(e,n.length>0?n:void 0)}oa(e,r=>{da(t,r)})}function Ih(t,e){const n=Vs(Vy(t,e)),r=_h(t.transactionQueueTree_,e);return RN(r,i=>{ru(t,i)}),ru(t,r),jy(r,i=>{ru(t,i)}),n}function ru(t,e){const n=fi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Dy(e,void 0):n.length=s+1,St(t.eventQueue_,Vs(e),i);for(let o=0;o<r.length;o++)di(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const cm=function(t,e){const n=eR(t),r=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ck();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new V(n.pathString)}},eR=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=XN(t.substring(h,d)));const f=ZN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",tR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=dm.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=dm.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class rR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:qd(this._path)}get ref(){return new jn(this._repo,this._path)}get _queryIdentifier(){const e=qp(this._queryParams),n=Hd(e);return n==="{}"?"default":n}get _queryObject(){return qp(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof pi))return!1;const n=this._repo===e._repo,r=Qd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Kk(this._path)}}function sR(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Th(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Jn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==lr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==bn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Z){if(e!=null&&!Ic(e)||n!=null&&!Ic(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof Xd||t.getIndex()===py,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Gy(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class jn extends pi{constructor(e,n){super(e,n,new eh,!1)}get parent(){const e=ly(this._path);return e===null?null:new jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),r=xs(this.ref,e);return new Pl(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Pl(i,xs(this.ref,r),Z)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ee(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?xs(t._root,e):t._root}function xs(t,e){return t=Te(t),D(t._path)===null?MN("child","path",e):yh("child","path",e),new jn(t._repo,re(t._path,e))}function oR(t,e){t=Te(t),wh("push",t._path),Hs("push",e,t._path,!0);const n=By(t._repo),r=tR(n),i=xs(t,r),s=xs(t,r);let o;return e!=null?o=$s(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function lR(t){return wh("remove",t._path),$s(t,null)}function $s(t,e){t=Te(t),wh("set",t._path),Hs("set",e,t._path,!1);const n=new Ls;return $N(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function aR(t,e){DN("update",e,t._path);const n=new Ls;return GN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class kh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new nR("value",this,new Pl(e.snapshotNode,new jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rR(this,e,n):null}matches(e){return e instanceof kh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uR(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(h,d)=>{um(t._repo,t,l),a(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new iR(n,s||void 0),l=new kh(o);return qN(t._repo,t,l),()=>um(t._repo,t,l)}function wt(t,e,n,r){return uR(t,"value",e,n,r)}class ha{}class cR extends ha{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Hs("endAt",this._value,e._path,!0);const n=_x(e._queryParams,this._value,this._key);if(Gy(n),Th(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pi(e._repo,e._path,n,e._orderByCalled)}}class dR extends ha{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Hs("startAt",this._value,e._path,!0);const n=gx(e._queryParams,this._value,this._key);if(Gy(n),Th(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new pi(e._repo,e._path,n,e._orderByCalled)}}class hR extends ha{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){sR(e,"orderByChild");const n=new V(this._path);if(M(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Xd(n),i=vx(e._queryParams,r);return Th(i),new pi(e._repo,e._path,i,!0)}}function fR(t){return yh("orderByChild","path",t),new hR(t)}class pR extends ha{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Hs("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new cR(this._value,this._key)._apply(new dR(this._value,this._key)._apply(e))}}function mR(t,e){return new pR(t,e)}function gR(t,...e){let n=Te(t);for(const r of e)n=r._apply(n);return n}oN(jn);hN(jn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="FIREBASE_DATABASE_EMULATOR_HOST",kc={};let vR=!1;function yR(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=pr(s);t.repoInfo_=new Xv(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function wR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cm(s,i),l=o.repoInfo,a;typeof process<"u"&&Pp&&(a=Pp[_R]),a?(s=`http://${a}?ns=${l.namespace}`,o=cm(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new Ek(t.name,t.options,e);jN("Invalid Firebase Database URL",o),M(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=SR(l,t,u,new wk(t,n));return new CR(h,t)}function ER(t,e){const n=kc[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),QN(t),delete n[t.key]}function SR(t,e,n,r){let i=kc[e.name];i||(i={},kc[e.name]=i);let s=i[t.toURLString()];return s&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new WN(t,vR,n,r),i[t.toURLString()]=s,s}class CR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jn(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ER(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function IR(t=Pd(),e){const n=Yl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=V_("database");r&&TR(n,...r)}return n}function TR(t,e,n,r={}){t=Te(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&rr(r,s.repoInfo_.emulatorOptions))return;Qt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Oo(Oo.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:G_(r.mockUserToken,t.app.options.projectId);o=new Oo(l)}pr(e)&&(Td(e),kd("Database",!0)),yR(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t){ik(mr),ir(new Pn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Nt(bp,Ap,t),Nt(bp,Ap,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kR();const xR={apiKey:"AIzaSyCvV4y8RV-fW6nBGET3QNGP9gV2c43cEWQ",authDomain:"fastjob-db673.firebaseapp.com",databaseURL:"https://fastjob-db673-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"fastjob-db673",storageBucket:"fastjob-db673.firebasestorage.app",messagingSenderId:"376791285981",appId:"1:376791285981:web:475cd604c89665a029db34",measurementId:"G-G9NFPH3XNT"},xh=J_(xR),ye=TT(xh);new dt;ek(xh);const Se=IR(xh),Ky=w.createContext({user:null,loading:!0});function NR({children:t}){const[e,n]=w.useState({user:null,loading:!0});return w.useEffect(()=>{const r=Cv(ye,i=>{n({user:i,loading:!1})},()=>{n({user:null,loading:!1})});return()=>r()},[]),c.jsx(Ky.Provider,{value:e,children:t})}function Gs(){return w.useContext(Ky)}const qy=w.createContext(),iu={en:{nav_brand:"FastJob",nav_jobs:"Jobs",nav_employer:"Employer",nav_postJob:"Post a Job",nav_dashboard:"Dashboard",nav_profile:"Profile",nav_signIn:"Sign in",nav_signOut:"Sign out",nav_hi:"Hi",theme_light:"Light",theme_dark:"Dark",login_title:"Sign in to FastJob",login_subtitle:"Use your email and password.",login_email:"Email",login_password:"Password",login_submit:"Sign in",login_google:"Continue with Google",login_noAccount:"No account? Please contact the admin to create a test account.",login_after:"After signing in you can view the Dashboard, edit your Profile and post jobs as an employer.",profile_title:"Profile",profile_currentRole:"Current role",profile_role_employee:"Job seeker",profile_role_employer:"Employer",profile_role_user:"User",profile_roleLabel:"Account role",profile_loading:"Loading…",profile_needLogin:"Please sign in first to edit your profile.",profile_saved:"Profile saved.",profile_saveError:"Save failed, please try again later.",profile_name:"Name / Nickname",profile_phone:"Phone",profile_city:"City",profile_headline:"One-line headline",profile_about:"About me",profile_about_placeholder:"Briefly introduce your experience, skills, and what kind of job you want…",profile_socialTitle:"Social media / Links",profile_linkedin:"LinkedIn",profile_instagram:"Instagram",profile_website:"Personal website / Portfolio",profile_website_placeholder:"For example: your portfolio / GitHub / Behance etc.",profile_save:"Save profile",post_title:"Post a Job",post_subtitle:"Fill in clear job information so workers can quickly understand your position.",post_notLoggedIn:"You are not logged in yet. You will be asked to login before submitting.",post_success:"Job posted successfully!",post_error:"Failed to publish, please try again later.",post_validation_titleCompany:"Job title and company name cannot be empty.",post_field_title:"Job title",post_field_title_placeholder:"e.g. Software Engineer / Kitchen Helper",post_field_company:"Company name",post_field_company_placeholder:"e.g. Webstation Computer Centre",post_field_location:"Work location (city / area)",post_field_location_placeholder:"e.g. Ipoh / Sunway",post_field_mapLocation:"Map address (optional, used for map)",post_field_mapLocation_placeholder:"e.g. Webstation Computer Centre, Ipoh",post_field_type:"Employment type",post_field_type_parttime:"Part-time",post_field_type_fulltime:"Full-time",post_field_type_intern:"Internship",post_field_salaryMin:"Minimum hourly wage (RM)",post_field_salaryMax:"Maximum hourly wage (RM)",post_field_description:"Job description",post_field_description_placeholder:"Briefly describe who you’re looking for, main duties, working hours etc…",post_field_skills:"Skills required (separated by comma, e.g. HTML, CSS, JS)",post_field_skills_placeholder:"e.g. C, C++, HTML, CSS, JS",post_submit:"Post job",post_submitting:"Posting…"},zh:{nav_brand:"FastJob",nav_jobs:"Jobs",nav_employer:"Employer",nav_postJob:"发布职位",nav_dashboard:"Dashboard",nav_profile:"Profile",nav_signIn:"登录",nav_signOut:"退出",nav_hi:"Hi",theme_light:"浅色",theme_dark:"深色",login_title:"登录 FastJob",login_subtitle:"使用邮箱和密码登录。",login_email:"邮箱",login_password:"密码",login_submit:"登录",login_google:"使用 Google 登录",login_noAccount:"没有账号？请联系管理员创建测试账号。",login_after:"登录后可以查看 Dashboard，修改 Profile，以及作为雇主发布职位。",profile_title:"个人资料",profile_currentRole:"当前身份",profile_role_employee:"求职者",profile_role_employer:"雇主",profile_role_user:"用户",profile_roleLabel:"账号角色",profile_loading:"载入中…",profile_needLogin:"请先登录账号才能编辑个人资料。",profile_saved:"个人资料已保存。",profile_saveError:"保存失败，请稍后再试。",profile_name:"姓名 / 昵称",profile_phone:"电话",profile_city:"所在城市",profile_headline:"一句话简介",profile_about:"关于我",profile_about_placeholder:"简单介绍你的经验、技能、想找怎样的工作…",profile_socialTitle:"社交媒体 / 链接",profile_linkedin:"LinkedIn",profile_instagram:"Instagram",profile_website:"个人网站 / 作品集",profile_website_placeholder:"例如：你的作品集 / GitHub / Behance 链接",profile_save:"保存资料",post_title:"发布职位",post_subtitle:"请填写清楚职位信息，让打工人一眼看到重点。",post_notLoggedIn:"当前未登录，提交时会要求你先登录账号。",post_success:"职位已发布成功！",post_error:"发布失败，请稍后再试。",post_validation_titleCompany:"职位名称和公司名称不能为空。",post_field_title:"职位名称",post_field_title_placeholder:"例如：Software Engineer / 厨房帮手",post_field_company:"公司名称",post_field_company_placeholder:"例如：Webstation Computer Centre",post_field_location:"工作地点（城市 / 区域）",post_field_location_placeholder:"例如：Ipoh / Sunway",post_field_mapLocation:"地图地址（可选，用于地图）",post_field_mapLocation_placeholder:"例如：Webstation Computer Centre, Ipoh",post_field_type:"雇佣类型",post_field_type_parttime:"小时工 / Part-time",post_field_type_fulltime:"全职 / Full-time",post_field_type_intern:"实习 / Internship",post_field_salaryMin:"最低时薪 (RM)",post_field_salaryMax:"最高时薪 (RM)",post_field_description:"职位描述",post_field_description_placeholder:"简单介绍你们需要什么样的人、主要工作内容、上班时间等等…",post_field_skills:"技能要求（用逗号分隔，例如：HTML, CSS, JS）",post_field_skills_placeholder:"例如：C, C++, HTML, CSS, JS",post_submit:"发布职位",post_submitting:"发布中…"}};function RR({children:t}){const[e,n]=w.useState(()=>typeof window>"u"?"zh":localStorage.getItem("lang")||"zh");w.useEffect(()=>{localStorage.setItem("lang",e)},[e]);const r=w.useCallback(s=>(iu[e]||iu.en)[s]||iu.en[s]||s,[e]),i={lang:e,setLang:n,t:r};return c.jsx(qy.Provider,{value:i,children:t})}function Nh(){return w.useContext(qy)}function PR(){const{user:t,loading:e}=Gs(),{lang:n,setLang:r,t:i}=Nh(),s=oi(),[o,l]=w.useState(()=>window.localStorage.getItem("fastjob-theme")==="dark"?"dark":"light");w.useEffect(()=>{document.documentElement.setAttribute("data-theme",o),window.localStorage.setItem("fastjob-theme",o)},[o]);function a(){l(d=>d==="light"?"dark":"light")}function u(){r(d=>d==="zh"?"en":"zh")}const h=d=>s.pathname===d||s.pathname.startsWith(d+"/");return c.jsxs(c.Fragment,{children:[c.jsxs("header",{className:"card",style:{margin:24,marginBottom:0,display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:16},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[c.jsx(Re,{to:"/",style:{fontWeight:900,fontSize:24,color:"var(--primary)",textDecoration:"none",letterSpacing:"0.04em"},children:i("nav_brand")}),c.jsxs("nav",{className:"nav",children:[c.jsx(Ri,{to:"/jobs",label:i("nav_jobs"),active:h("/jobs")}),c.jsx(Ri,{to:"/employer",label:i("nav_employer"),active:h("/employer")}),c.jsx(Ri,{to:"/employer/post",label:i("nav_postJob"),active:h("/employer/post")}),c.jsx(Ri,{to:"/dashboard",label:i("nav_dashboard"),active:h("/dashboard")}),c.jsx(Ri,{to:"/profile",label:i("nav_profile"),active:h("/profile")})]})]}),c.jsxs("div",{className:"nav",children:[c.jsx("button",{type:"button",onClick:u,style:{borderRadius:999,border:"1px solid var(--border)",background:"transparent",padding:"6px 12px",fontSize:13,cursor:"pointer",color:"var(--muted)"},children:n==="zh"?"中文":"English"}),c.jsxs("button",{type:"button",onClick:a,style:{borderRadius:999,border:"none",padding:"6px 12px",cursor:"pointer",background:o==="light"?"var(--primary-light)":"#020617",color:o==="light"?"var(--primary-on-light)":"#f9fafb",display:"inline-flex",alignItems:"center",gap:6,fontSize:13},children:[c.jsx("span",{style:{width:8,height:8,borderRadius:"999px",background:o==="light"?"var(--primary)":"#facc15"}}),i(o==="light"?"theme_light":"theme_dark")]}),e?c.jsx("span",{style:{fontSize:14},children:"Loading..."}):t?c.jsxs(c.Fragment,{children:[c.jsxs("span",{style:{fontSize:14},children:[i("nav_hi"),","," ",c.jsx("span",{style:{fontWeight:500},children:t.email})]}),c.jsx("button",{className:"btn",onClick:()=>ye.signOut(),style:{paddingInline:18},children:i("nav_signOut")})]}):c.jsx(Re,{to:"/login",className:"btn",children:i("nav_signIn")})]})]}),c.jsx("main",{style:{paddingBottom:40},children:c.jsx("div",{className:"container",children:c.jsx(gS,{})})})]})}function Ri({to:t,label:e,active:n}){return c.jsx(Re,{to:t,style:{fontSize:14,color:n?"var(--primary)":"var(--muted)",fontWeight:n?600:400,textDecoration:"none"},children:e})}function bR(){const[t,e]=w.useState(""),[n,r]=w.useState(""),i=li();function s(l){l.preventDefault();const a=new URLSearchParams;t.trim()&&a.set("q",t.trim()),n.trim()&&a.set("loc",n.trim()),i(`/jobs?${a.toString()}`)}function o(l){const a=new URLSearchParams;a.set("q",l),i(`/jobs?${a.toString()}`)}return c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"card",style:{marginBottom:24},children:[c.jsxs("h1",{style:{fontSize:28,marginBottom:8},children:["马来西亚最快的 ",c.jsx("span",{style:{color:"var(--primary)"},children:"小时工平台"})]}),c.jsxs("p",{style:{color:"var(--muted)",marginBottom:16},children:["专注兼职 / 临时工，让老板和打工人都能 ",c.jsx("strong",{children:"快速匹配"}),"。"]}),c.jsxs("form",{className:"search-row",onSubmit:s,children:[c.jsx("input",{type:"text",placeholder:"关键词 (服务员、司机、客服…)",value:t,onChange:l=>e(l.target.value)}),c.jsx("input",{type:"text",placeholder:"📍 地点 (如: Sunway, Ipoh)",value:n,onChange:l=>r(l.target.value)}),c.jsx("button",{type:"submit",className:"btn search-btn",children:"🔍 搜索工作"})]})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{style:{marginBottom:12},children:"热门分类"}),c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[c.jsx("button",{type:"button",className:"btn",style:{background:"var(--primary-light)",color:"var(--primary)"},onClick:()=>o("餐饮"),children:"🍔 餐饮"}),c.jsx("button",{type:"button",className:"btn",style:{background:"var(--primary-light)",color:"var(--primary)"},onClick:()=>o("零售"),children:"🛍 零售"}),c.jsx("button",{type:"button",className:"btn",style:{background:"var(--primary-light)",color:"var(--primary)"},onClick:()=>o("司机"),children:"🚗 司机"}),c.jsx("button",{type:"button",className:"btn",style:{background:"var(--primary-light)",color:"var(--primary)"},onClick:()=>o("客服"),children:"🎧 客服"})]}),c.jsxs("p",{style:{marginTop:16,fontSize:13,color:"var(--muted)"},children:["我是老板，要招人？"," ",c.jsx("a",{href:"/employer",style:{fontWeight:600},children:"进入雇主后台 →"})]})]})]})}function AR(){const[t,e]=w.useState([]),[n,r]=w.useState(!0),[i,s]=w.useState(null),[o]=PS(),l=o.get("q")||"",a=o.get("loc")||"",[u,h]=w.useState(l),[d,f]=w.useState(a),[m,g]=w.useState("all");w.useEffect(()=>{const p=Ee(Se,"jobs"),v=wt(p,E=>{if(!E.exists()){e([]),r(!1);return}const I=E.val(),k=Object.entries(I).map(([x,N])=>({id:x,...N})).sort((x,N)=>(N.postedAt||0)-(x.postedAt||0));e(k),r(!1)},E=>{console.error(E),s(E.message||"Failed to load jobs"),r(!1)});return()=>v()},[]);const S=w.useMemo(()=>t.filter(p=>{const v=`${p.title||""} ${p.companyName||""} ${p.location||""}`.toLowerCase(),E=u.trim().toLowerCase(),I=d.trim().toLowerCase();return!(E&&!v.includes(E)||I&&!(p.location||"").toLowerCase().includes(I)||m!=="all"&&p.employmentType!==m)}),[t,u,d,m]).slice(0,6);function _(){h(""),f(""),g("all")}return c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"card",style:{marginBottom:16},children:[c.jsx("h2",{style:{marginBottom:12},children:"搜索职位"}),c.jsxs("div",{className:"jobs-filter",children:[c.jsx("input",{className:"jobs-filter-input",placeholder:"关键词，例如: 服务员 / Software Engineer",value:u,onChange:p=>h(p.target.value)}),c.jsx("input",{className:"jobs-filter-input",placeholder:"地点，例如: Sunway / Ipoh",value:d,onChange:p=>f(p.target.value)}),c.jsxs("div",{className:"jobs-filter-row",children:[c.jsxs("div",{className:"jobs-filter-type",children:[c.jsx("button",{type:"button",className:"jobs-chip"+(m==="parttime"?" jobs-chip--active":""),onClick:()=>g("parttime"),children:"小时工"}),c.jsx("button",{type:"button",className:"jobs-chip"+(m==="fulltime"?" jobs-chip--active":""),onClick:()=>g("fulltime"),children:"全职"}),c.jsx("button",{type:"button",className:"jobs-chip"+(m==="all"?" jobs-chip--active":""),onClick:()=>g("all"),children:"全部"})]}),c.jsx("button",{type:"button",className:"btn",onClick:_,children:"重置筛选"})]})]})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{style:{marginBottom:12},children:"推荐职位"}),n&&c.jsx("p",{children:"Loading..."}),i&&c.jsxs("p",{style:{color:"var(--danger)"},children:["Error loading jobs: ",i]}),!n&&!i&&S.length===0&&c.jsx("p",{style:{color:"var(--muted)"},children:"暂时没有符合条件的职位，试试修改筛选条件？"}),!n&&!i&&S.length>0&&c.jsx("div",{className:"grid",style:{gap:12},children:S.map(p=>c.jsxs(Re,{to:`/jobs/${p.id}`,className:"card",style:{textDecoration:"none",padding:16,boxShadow:"var(--shadow-soft)"},children:[c.jsx("h4",{style:{marginBottom:6},children:p.title}),c.jsxs("p",{style:{color:"var(--muted)",fontSize:14,marginBottom:8},children:[p.companyName||"公司"," · ",p.location||"地点"]}),c.jsx("p",{style:{fontWeight:600,fontSize:14},children:p.salaryMin||p.salaryMax?`RM ${p.salaryMin||""}${p.salaryMax?" - "+p.salaryMax:""} / 小时`:"薪资面议"}),c.jsxs("div",{style:{marginTop:8},children:[p.employmentType==="parttime"&&c.jsx("span",{className:"badge",children:"兼职 / 小时工"}),p.employmentType==="fulltime"&&c.jsx("span",{className:"badge",children:"全职"})]})]},p.id))})]})]})}function OR(){const{id:t}=O_(),[e,n]=w.useState(null),[r,i]=w.useState(!0);if(w.useEffect(()=>{const o=Ee(Se,"jobs/"+t),l=wt(o,a=>{if(!a.exists()){n(null),i(!1);return}n(a.val()),i(!1)},()=>{n(null),i(!1)});return()=>l()},[t]),r)return c.jsx("div",{className:"container",children:c.jsx("div",{className:"card",children:c.jsx("p",{children:"Loading..."})})});if(!e)return c.jsx("div",{className:"container",children:c.jsx("div",{className:"card",children:c.jsx("p",{children:"Job not found."})})});const s=e.address||`${e.companyName||""} ${e.location||""}`.trim()||"";return c.jsxs("div",{className:"container job-page",children:[c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:e.title}),c.jsx("p",{className:"job-salary",children:e.salaryMin||e.salaryMax?`RM ${e.salaryMin||""}${e.salaryMax?" - "+e.salaryMax:""} / 小时`:"薪资面议"}),c.jsxs("p",{className:"job-company",children:[e.companyName||"公司"," • ",e.location||"地点"]}),s&&c.jsx("div",{className:"job-map",children:c.jsx("iframe",{title:"map",src:`https://www.google.com/maps?q=${encodeURIComponent(s)}&output=embed`,loading:"lazy",style:{border:0,width:"100%",height:"320px"}})})]}),c.jsxs("div",{className:"card",children:[c.jsxs("section",{className:"job-section",children:[c.jsx("h3",{children:"职位描述"}),c.jsx("p",{className:"job-text",children:e.description||"暂无描述。"})]}),c.jsxs("section",{className:"job-section",children:[c.jsx("h3",{children:"技能/要求"}),e.skills&&e.skills.length>0?c.jsx("ul",{className:"job-list",children:e.skills.map((o,l)=>c.jsx("li",{children:o},l))}):c.jsx("p",{className:"job-text",children:"暂无特别要求。"})]})]}),c.jsxs("div",{className:"job-apply-bar",children:[c.jsx("button",{className:"job-fav-btn",children:"⭐ 收藏"}),c.jsx("input",{className:"job-input",placeholder:"姓名"}),c.jsx("input",{className:"job-input",placeholder:"手机"}),c.jsxs("label",{className:"job-upload",children:[c.jsx("span",{children:"上传简历"}),c.jsx("input",{type:"file",style:{display:"none"}})]}),c.jsx("button",{className:"btn job-apply-btn",children:"✅ 立刻申请"})]})]})}function Rh(){const[t,e]=w.useState({role:"employee",employer:!1,loaded:!1});return w.useEffect(()=>{let n=()=>{};const r=Cv(ye,i=>{if(!i){n(),e({role:"employee",employer:!1,loaded:!0});return}const s=Ee(Se,"profiles/"+i.uid);n=wt(s,o=>{const a=(o.val()||{}).role||"employee";e({role:a,employer:a==="employer",loaded:!0})},()=>{e({role:"employee",employer:!1,loaded:!0})})});return()=>{r(),n()}},[]),t}function LR(){const{user:t,loading:e}=Gs(),{role:n,loaded:r}=Rh(),[i,s]=w.useState([]),[o,l]=w.useState([]),[a,u]=w.useState(null),[h,d]=w.useState(!0),[f,m]=w.useState(!0),[g,y]=w.useState(!0);if(w.useEffect(()=>{if(!t){s([]),d(!1);return}const p=Ee(Se,"applications"),v=wt(p,E=>{if(!E.exists()){s([]),d(!1);return}const I=[];E.forEach(k=>{k.forEach(x=>{const N=x.val();N.userId===t.uid&&I.push({id:x.key,jobId:k.key,...N})})}),I.sort((k,x)=>(x.createdAt||0)-(k.createdAt||0)),s(I),d(!1)},()=>{s([]),d(!1)});return()=>v()},[t]),w.useEffect(()=>{if(!t){l([]),m(!1);return}const p=Ee(Se,"jobs"),v=wt(p,E=>{if(!E.exists()){l([]),m(!1);return}const I=[];E.forEach(k=>{const x=k.val();x.ownerId===t.uid&&I.push({id:k.key,...x})}),I.sort((k,x)=>(x.postedAt||0)-(k.postedAt||0)),l(I),m(!1)},()=>{l([]),m(!1)});return()=>v()},[t]),w.useEffect(()=>{if(!t){u(null),y(!1);return}const p=Ee(Se,"plans/"+t.uid),v=wt(p,E=>{u(E.val()||null),y(!1)},()=>{u(null),y(!1)});return()=>v()},[t]),e||!r)return c.jsx("div",{className:"container",children:c.jsx("div",{className:"card",children:c.jsx("p",{children:"Loading..."})})});if(!t)return c.jsx("div",{className:"container",children:c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:"Dashboard"}),c.jsx("p",{children:"请先登录查看你的数据。"}),c.jsx(Re,{className:"btn",to:"/login",style:{marginTop:12},children:"去登录"})]})});const S=i.length,_=o.length;return c.jsxs("div",{className:"container dashboard",children:[c.jsxs("div",{className:"card dashboard-hero",children:[c.jsxs("div",{children:[c.jsx("p",{className:"muted",children:"欢迎回来"}),c.jsx("h2",{style:{margin:"6px 0 4px"},children:t.email}),c.jsxs("p",{style:{fontSize:13,color:"var(--muted)"},children:["当前身份：",n==="employer"?"雇主":"求职者"]})]}),c.jsxs("div",{className:"dashboard-hero-actions",children:[c.jsx(Re,{className:"btn",to:"/jobs",children:"🔍 找工作"}),c.jsx(Re,{className:"btn",to:"/employer/post",children:"➕ 发布职位"}),c.jsx(Re,{className:"btn",to:"/employer",children:"📊 雇主仪表盘"})]})]}),n==="employer"&&c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"雇主套餐状态"}),g?c.jsx("p",{className:"muted",children:"读取中..."}):a?c.jsxs(c.Fragment,{children:[c.jsxs("p",{style:{marginTop:6},children:["当前套餐："," ",c.jsx("strong",{children:a.planType==="trial"?"试用（3 次免费发布）":a.planType==="per_post"?"按帖计费":a.planType==="monthly"?"月度套餐":"未设置"})]}),c.jsxs("p",{style:{marginTop:4},children:["剩余发布次数："," ",c.jsx("strong",{children:a.credits!=null?a.credits:0})]})]}):c.jsx("p",{className:"muted",children:"还没有开通套餐。在发布职位页面可以开通试用（3 次免费发布）。"})]}),c.jsxs("div",{className:"statgrid",children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"stat-value",children:S}),c.jsx("div",{className:"stat-label",children:"我的申请"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"stat-value",children:_}),c.jsx("div",{className:"stat-label",children:"我发布的职位"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"stat-value",children:"0"}),c.jsx("div",{className:"stat-label",children:"获得 Offer"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"stat-value",children:"0"}),c.jsx("div",{className:"stat-label",children:"被拒记录"})]})]}),c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"section-title",children:c.jsx("h3",{children:"我的申请"})}),h&&c.jsx("p",{children:"读取中..."}),!h&&i.length===0&&c.jsx("p",{className:"muted",children:"你还没有投递任何职位。"}),!h&&i.length>0&&c.jsx("ul",{children:i.map(p=>c.jsxs("li",{style:{marginBottom:6},children:[c.jsx("strong",{children:p.jobTitle||"职位"})," ","· ",p.status||"已投递"]},p.id))})]}),n==="employer"&&c.jsxs("div",{className:"card",children:[c.jsx("div",{className:"section-title",children:c.jsx("h3",{children:"我发布的职位（雇主）"})}),f&&c.jsx("p",{children:"读取中..."}),!f&&o.length===0&&c.jsx("p",{className:"muted",children:"你还没有发布任何职位。"}),!f&&o.length>0&&c.jsx("ul",{children:o.map(p=>c.jsxs("li",{style:{marginBottom:6},children:[c.jsx(Re,{to:`/jobs/${p.id}`,children:c.jsx("strong",{children:p.title})})," ","· ",p.location]},p.id))})]})]})}function DR(){const t=li(),{user:e,loading:n}=Gs(),[r,i]=w.useState([]),[s,o]=w.useState(!0),[l,a]=w.useState(null),u="试用（3 次免费发布）",h=3;w.useEffect(()=>{if(n)return;if(!e){o(!1);return}const m=gR(Ee(Se,"jobs"),fR("ownerId"),mR(e.uid)),g=wt(m,y=>{const S=y.val()||{},_=Object.entries(S).map(([p,v])=>({id:p,...v})).sort((p,v)=>(v.postedAt||0)-(p.postedAt||0));i(_),o(!1)},()=>o(!1));return()=>g()},[n,e]);async function d(m){if(window.confirm("确定要删除这个职位吗？删除后无法恢复。")){a(null);try{await lR(Ee(Se,"jobs/"+m)),a({type:"success",message:"职位已删除。"})}catch(y){console.error(y),a({type:"error",message:"删除失败，请稍后再试。"})}}}async function f(m){const g=!(m.isActive??!0),y=g?"打开":"关闭";if(window.confirm(`确定要${y}这个职位吗？`)){a(null);try{await aR(Ee(Se,"jobs/"+m.id),{isActive:g}),a({type:"success",message:`职位已${y}（当前状态：${g?"开放中":"已关闭"}）。`})}catch(_){console.error(_),a({type:"error",message:`${y}失败，请稍后再试。`})}}}return n?c.jsx("div",{className:"card",children:c.jsx("p",{children:"载入中…"})}):e?c.jsxs("div",{className:"dashboard",children:[c.jsxs("div",{className:"card",children:[c.jsx("h2",{style:{marginTop:0,marginBottom:16},children:"雇主套餐状态"}),c.jsxs("p",{style:{margin:0,color:"var(--muted)"},children:["当前套餐：",c.jsx("strong",{children:u})]}),c.jsxs("p",{style:{marginTop:8,color:"var(--muted)"},children:["剩余发布次数（credits）：",c.jsx("strong",{children:h})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"section-title",children:[c.jsx("h2",{style:{margin:0},children:"雇主仪表盘"}),c.jsx("button",{className:"btn",onClick:()=>t("/employer/post"),style:{whiteSpace:"nowrap"},children:"+ 发布一个新职位"})]}),l&&c.jsx("div",{style:{marginBottom:16,padding:12,borderRadius:12,fontSize:14,background:l.type==="success"?"rgba(16,185,129,0.1)":"rgba(239,68,68,0.1)",color:l.type==="success"?"var(--success)":"var(--danger)"},children:l.message}),c.jsx("h3",{style:{marginTop:0,marginBottom:12},children:"我发布的职位"}),s?c.jsx("p",{children:"载入职位中…"}):r.length===0?c.jsx("p",{style:{color:"var(--muted)"},children:"还没有职位。"}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:r.map(m=>{const g=m.isActive??!0;return c.jsx("div",{className:"card",style:{padding:16,margin:0,boxShadow:"none",border:"1px solid var(--border)"},children:c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16,flexWrap:"wrap"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,fontSize:16,marginBottom:4},children:c.jsx(Re,{to:`/jobs/${m.id}`,children:m.title})}),c.jsxs("div",{style:{color:"var(--muted)",fontSize:14},children:[m.companyName," · ",m.location]}),m.salaryMin&&m.salaryMax&&c.jsxs("div",{style:{marginTop:4,fontSize:14,color:"var(--muted)"},children:["RM ",m.salaryMin," - ",m.salaryMax," / 小时"]}),c.jsx("div",{style:{marginTop:6},children:c.jsx("span",{className:"badge",style:{background:g?"rgba(16,185,129,0.12)":"rgba(148,163,184,0.2)",color:g?"#10b981":"#6b7280"},children:g?"开放中":"已关闭"})})]}),c.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[c.jsx("button",{className:"btn",type:"button",onClick:()=>t(`/employer/jobs/${m.id}/edit`),style:{background:"var(--primary)",whiteSpace:"nowrap"},children:"编辑"}),c.jsx("button",{type:"button",onClick:()=>f(m),style:{background:g?"#f59e0b":"#10b981",color:"#fff",border:"none",borderRadius:12,padding:"8px 14px",cursor:"pointer",whiteSpace:"nowrap"},children:g?"关闭职位":"打开职位"}),c.jsx("button",{type:"button",onClick:()=>d(m.id),style:{background:"#ef4444",color:"#fff",border:"none",borderRadius:12,padding:"8px 14px",cursor:"pointer",whiteSpace:"nowrap"},children:"删除"})]})]})},m.id)})})]})]}):c.jsxs("div",{className:"card",children:[c.jsx("h2",{style:{marginTop:0,marginBottom:12},children:"雇主权限需要开通"}),c.jsxs("p",{style:{color:"var(--muted)",marginBottom:16},children:["当前账号是 ",c.jsx("strong",{children:"求职者"})," 身份，不能发布职位。",c.jsx("br",{}),'管理员可以在数据库中把你的 role 改成 "employer"。']}),c.jsx(Re,{to:"/dashboard",className:"btn",children:"返回仪表盘"})]})}function MR(){const{id:t}=O_(),{user:e,loading:n}=Gs(),{role:r,loaded:i}=Rh(),[s,o]=w.useState(null),[l,a]=w.useState([]),[u,h]=w.useState(!0),[d,f]=w.useState(!0);return w.useEffect(()=>{const m=Ee(Se,"jobs/"+t),g=wt(m,y=>{y.exists()&&o(y.val()),h(!1)},()=>h(!1));return()=>g()},[t]),w.useEffect(()=>{const m=Ee(Se,"applications/"+t),g=wt(m,y=>{if(!y.exists()){a([]),f(!1);return}const S=[];y.forEach(_=>S.push({id:_.key,..._.val()})),S.sort((_,p)=>(p.createdAt||0)-(_.createdAt||0)),a(S),f(!1)},()=>{a([]),f(!1)});return()=>g()},[t]),n||!i||u?c.jsx("div",{className:"container",children:c.jsx("div",{className:"card",children:c.jsx("p",{children:"Loading..."})})}):!e||r!=="employer"?c.jsx("div",{className:"container",children:c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:"无权限访问"}),c.jsx("p",{children:"只有雇主才能查看申请人列表。"}),c.jsx(Re,{className:"btn",to:"/login",style:{marginTop:12},children:"去登录"})]})}):c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"card",style:{marginBottom:16},children:[c.jsx("h2",{children:"职位申请人"}),c.jsxs("p",{className:"muted",style:{marginTop:4},children:["职位：",s?s.title:"加载中..."]})]}),c.jsxs("div",{className:"card",children:[d&&c.jsx("p",{children:"载入中..."}),!d&&l.length===0&&c.jsx("p",{className:"muted",children:"还没有人申请这个职位。"}),!d&&l.length>0&&l.map(m=>c.jsxs("div",{className:"card",style:{background:"var(--card)",border:"1px solid var(--border)",marginBottom:12,padding:14},children:[c.jsx("h4",{style:{marginBottom:4},children:m.name||"未填写姓名"}),c.jsxs("p",{style:{fontSize:14,color:"var(--muted)"},children:["手机：",m.phone||"未填写"]}),c.jsx("p",{style:{marginTop:8,fontSize:14},children:m.message||"没有附加说明。"}),m.createdAt&&c.jsxs("p",{style:{marginTop:6,fontSize:12,color:"var(--muted)"},children:["投递时间：",new Date(m.createdAt).toLocaleString()]}),m.phone&&c.jsx("a",{href:`https://wa.me/6${m.phone.replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"btn",style:{marginTop:10,display:"inline-block"},children:"✅ 一键 WhatsApp 联系"})]},m.id))]})]})}function jR(){const t=ye.currentUser,{t:e}=Nh(),[n,r]=w.useState({title:"",companyName:"",location:"",mapLocation:"",employmentType:"parttime",salaryMin:"",salaryMax:"",description:"",skillsText:""}),[i,s]=w.useState(null),[o,l]=w.useState(!1);function a(h){const{name:d,value:f}=h.target;r(m=>({...m,[d]:f}))}async function u(h){if(h.preventDefault(),s(null),!ye.currentUser){s({type:"error",message:e("post.notLoggedIn")});return}if(!n.title.trim()||!n.companyName.trim()){s({type:"error",message:e("post.validation.titleCompany")});return}l(!0);try{const d=n.skillsText.split(",").map(m=>m.trim()).filter(Boolean),f={title:n.title.trim(),companyName:n.companyName.trim(),location:n.location.trim(),mapLocation:n.mapLocation.trim(),employmentType:n.employmentType,salaryMin:n.salaryMin?Number(n.salaryMin):null,salaryMax:n.salaryMax?Number(n.salaryMax):null,description:n.description.trim(),skills:d,ownerId:ye.currentUser.uid,isActive:!0,postedAt:Date.now()};await oR(Ee(Se,"jobs"),f),s({type:"success",message:e("post.success")}),r(m=>({...m,title:"",location:"",mapLocation:"",salaryMin:"",salaryMax:"",description:"",skillsText:""}))}catch(d){console.error(d),s({type:"error",message:e("post.error")})}finally{l(!1)}}return c.jsxs("div",{className:"card",children:[c.jsx("h2",{style:{marginTop:0,marginBottom:16},children:e("post.title")}),c.jsx("p",{style:{marginTop:0,marginBottom:24,color:"var(--muted)"},children:e("post.subtitle")}),!t&&c.jsx("div",{style:{marginBottom:16,padding:12,borderRadius:12,background:"var(--primary-light)",color:"var(--primary-on-light)",fontSize:14},children:e("post.notLoggedIn")}),i&&c.jsx("div",{style:{marginBottom:16,padding:12,borderRadius:12,fontSize:14,background:i.type==="success"?"rgba(16,185,129,0.1)":"rgba(239,68,68,0.1)",color:i.type==="success"?"var(--success)":"var(--danger)"},children:i.message}),c.jsxs("form",{onSubmit:u,className:"jobs-form",children:[c.jsxs("div",{className:"form-grid-2",children:[c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("post.field.title")}),c.jsx("input",{name:"title",value:n.title,onChange:a,placeholder:e("post.field.title.placeholder")})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("post.field.company")}),c.jsx("input",{name:"companyName",value:n.companyName,onChange:a,placeholder:e("post.field.company.placeholder")})]})]}),c.jsxs("div",{className:"form-grid-2",style:{marginTop:18},children:[c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("post.field.location")}),c.jsx("input",{name:"location",value:n.location,onChange:a,placeholder:e("post.field.location.placeholder")})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("post.field.mapLocation")}),c.jsx("input",{name:"mapLocation",value:n.mapLocation,onChange:a,placeholder:e("post.field.mapLocation.placeholder")})]})]}),c.jsxs("div",{className:"form-grid-2",style:{marginTop:18},children:[c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("post.field.type")}),c.jsxs("select",{name:"employmentType",value:n.employmentType,onChange:a,children:[c.jsx("option",{value:"parttime",children:e("post.field.type.parttime")}),c.jsx("option",{value:"fulltime",children:e("post.field.type.fulltime")}),c.jsx("option",{value:"intern",children:e("post.field.type.intern")})]})]}),c.jsxs("div",{className:"form-grid-2",children:[c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("post.field.salaryMin")}),c.jsx("input",{type:"number",name:"salaryMin",value:n.salaryMin,onChange:a,placeholder:"12",min:"0"})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("post.field.salaryMax")}),c.jsx("input",{type:"number",name:"salaryMax",value:n.salaryMax,onChange:a,placeholder:"20",min:"0"})]})]})]}),c.jsxs("div",{className:"form-field",style:{marginTop:24},children:[c.jsx("label",{children:e("post.field.description")}),c.jsx("textarea",{name:"description",value:n.description,onChange:a,placeholder:e("post.field.description.placeholder")})]}),c.jsxs("div",{className:"form-field",style:{marginTop:18},children:[c.jsx("label",{children:e("post.field.skills")}),c.jsx("input",{name:"skillsText",value:n.skillsText,onChange:a,placeholder:e("post.field.skills.placeholder")})]}),c.jsx("div",{style:{marginTop:28},children:c.jsx("button",{type:"submit",className:"btn",disabled:o,style:{minWidth:120},children:e(o?"post.submitting":"post.submit")})})]})]})}function FR(){const t=ye.currentUser,{t:e}=Nh(),[n,r]=w.useState(!0),[i,s]=w.useState(!1),[o,l]=w.useState(null),[a,u]=w.useState({role:"employee",name:"",phone:"",city:"",headline:"",about:"",linkedin:"",instagram:"",website:""});w.useEffect(()=>{if(!t){r(!1);return}const m=Ee(Se,"profiles/"+t.uid),g=wt(m,y=>{const S=y.val();S&&u(_=>({..._,...S})),r(!1)},()=>r(!1));return()=>g()},[t]);function h(m){const{name:g,value:y}=m.target;u(S=>({...S,[g]:y}))}async function d(m){if(m.preventDefault(),l(null),!ye.currentUser){l({type:"error",message:e("profile.needLogin")});return}s(!0);try{const g=Ee(Se,"profiles/"+ye.currentUser.uid);await $s(g,{role:a.role,name:a.name.trim(),phone:a.phone.trim(),city:a.city.trim(),headline:a.headline.trim(),about:a.about.trim(),linkedin:a.linkedin.trim(),instagram:a.instagram.trim(),website:a.website.trim()}),l({type:"success",message:e("profile.saved")})}catch(g){console.error(g),l({type:"error",message:e("profile.saveError")})}finally{s(!1)}}const f=a.role==="employer"?e("profile.role.employer"):a.role==="employee"?e("profile.role.employee"):e("profile.role.user");return c.jsxs("div",{className:"card",children:[c.jsx("h2",{style:{marginTop:0,marginBottom:4},children:e("profile.title")}),c.jsxs("p",{style:{marginTop:0,marginBottom:20,color:"var(--muted)"},children:[e("profile.currentRole"),"：",c.jsx("strong",{children:f})]}),n&&c.jsx("p",{children:e("profile.loading")}),!n&&!t&&c.jsx("p",{style:{color:"var(--danger)"},children:e("profile.needLogin")}),!n&&t&&c.jsxs("form",{onSubmit:d,children:[c.jsxs("div",{style:{marginBottom:20},children:[c.jsx("label",{style:{display:"block",marginBottom:8},children:e("profile.roleLabel")}),c.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[c.jsx("button",{type:"button",onClick:()=>u(m=>({...m,role:"employee"})),className:"btn",style:{background:a.role==="employee"?"var(--primary)":"#020617",border:a.role==="employee"?"none":"1px solid rgba(148,163,184,0.5)"},children:e("profile.role.employee")}),c.jsx("button",{type:"button",onClick:()=>u(m=>({...m,role:"employer"})),className:"btn",style:{background:a.role==="employer"?"var(--primary)":"#020617",border:a.role==="employer"?"none":"1px solid rgba(148,163,184,0.5)"},children:e("profile.role.employer")})]})]}),o&&c.jsx("div",{style:{marginBottom:16,padding:12,borderRadius:12,fontSize:14,background:o.type==="success"?"rgba(16,185,129,0.1)":"rgba(239,68,68,0.1)",color:o.type==="success"?"var(--success)":"var(--danger)"},children:o.message}),c.jsxs("div",{className:"form-grid-2",children:[c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("profile.name")}),c.jsx("input",{name:"name",value:a.name,onChange:h,placeholder:e("profile.name")})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("profile.phone")}),c.jsx("input",{name:"phone",value:a.phone,onChange:h,placeholder:"012-3456789"})]})]}),c.jsxs("div",{className:"form-grid-2",style:{marginTop:18},children:[c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("profile.city")}),c.jsx("input",{name:"city",value:a.city,onChange:h,placeholder:"Ipoh / KL / Penang..."})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("profile.headline")}),c.jsx("input",{name:"headline",value:a.headline,onChange:h,placeholder:"CS Student / Frontend Dev / Part-time waiter"})]})]}),c.jsxs("div",{className:"form-field",style:{marginTop:24},children:[c.jsx("label",{children:e("profile.about")}),c.jsx("textarea",{name:"about",value:a.about,onChange:h,placeholder:e("profile.about.placeholder")})]}),c.jsx("h3",{style:{marginTop:28,marginBottom:12},children:e("profile.socialTitle")}),c.jsxs("div",{className:"form-grid-2",children:[c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("profile.linkedin")}),c.jsx("input",{name:"linkedin",value:a.linkedin,onChange:h,placeholder:"https://www.linkedin.com/in/..."})]}),c.jsxs("div",{className:"form-field",children:[c.jsx("label",{children:e("profile.instagram")}),c.jsx("input",{name:"instagram",value:a.instagram,onChange:h,placeholder:"https://instagram.com/..."})]})]}),c.jsxs("div",{className:"form-field",style:{marginTop:18},children:[c.jsx("label",{children:e("profile.website")}),c.jsx("input",{name:"website",value:a.website,onChange:h,placeholder:e("profile.website.placeholder")})]}),c.jsx("div",{style:{marginTop:28},children:c.jsx("button",{type:"submit",className:"btn",disabled:i,style:{minWidth:120},children:i?"…":e("profile.save")})})]})]})}function UR(){const t=li(),[e,n]=w.useState({email:"",password:""}),[r,i]=w.useState(!0),[s,o]=w.useState(null),[l,a]=w.useState(!1);function u(g){const{name:y,value:S}=g.target;n(_=>({..._,[y]:S}))}async function h(g){return await Sv(ye,r?zd:Xl),g()}async function d(g){g.preventDefault(),o(null),a(!0);try{await h(()=>p1(ye,e.email,e.password)),t("/dashboard")}catch(y){console.error(y),o({type:"error",message:"邮箱或密码错误，请检查后重试。"})}finally{a(!1)}}async function f(){o(null),a(!0);try{const g=new dt;await h(()=>Ov(ye,g)),t("/dashboard")}catch(g){console.error(g),o({type:"error",message:"Google 登录失败，请稍后再试。"})}finally{a(!1)}}async function m(){if(!e.email){o({type:"info",message:"请先在上方输入你要找回密码的邮箱。"});return}o(null),a(!0);try{await h1(ye,e.email),o({type:"info",message:"重置密码邮件已发送，请检查邮箱收件箱或垃圾箱。"})}catch(g){console.error(g),o({type:"error",message:"无法发送重置邮件，请确认邮箱是否正确。"})}finally{a(!1)}}return c.jsxs("div",{style:{minHeight:"calc(100vh - 120px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 16px"},children:[c.jsxs("div",{className:"card login-card-grid",style:{width:"100%",maxWidth:960,borderRadius:22,boxShadow:"var(--shadow-soft, 0 18px 45px rgba(15,23,42,0.18))",padding:0,overflow:"hidden",display:"grid",gridTemplateColumns:"minmax(0, 1.1fr) minmax(0, 1fr)"},children:[c.jsxs("div",{className:"login-hero",style:{position:"relative",padding:32,paddingRight:24,borderRight:"1px solid var(--border)",background:"linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))",overflow:"hidden"},children:[c.jsx("div",{style:{position:"absolute",inset:0,opacity:.12,background:"radial-gradient(circle at 0 0, rgba(249,115,22,0.65), transparent 55%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.6), transparent 55%)",pointerEvents:"none"}}),c.jsxs("div",{style:{position:"relative",zIndex:1},children:[c.jsx("div",{style:{display:"inline-flex",alignItems:"center",borderRadius:999,padding:"4px 10px",fontSize:12,background:"var(--primary-light)",color:"var(--primary-on-light)",fontWeight:600,marginBottom:12},children:"⚡ 马来西亚最快的小时工平台"}),c.jsxs("h1",{style:{margin:0,fontSize:30,lineHeight:1.3},children:["找工作、发招聘，",c.jsx("span",{style:{color:"var(--primary)"},children:" 一站搞定"}),"。"]}),c.jsx("p",{style:{marginTop:12,marginBottom:22,color:"var(--muted)",fontSize:14},children:"FastJob 帮你在 3 分钟内找到合适的小时工机会， 或者快速发布职位，管理你的候选人。"})]})]}),c.jsxs("div",{style:{padding:32,paddingLeft:24,display:"flex",flexDirection:"column",justifyContent:"center",gap:16},children:[c.jsx("h2",{style:{margin:0,marginBottom:4,fontSize:22},children:"登录 FastJob"}),c.jsx("p",{style:{margin:0,marginBottom:10,fontSize:13,color:"var(--muted)"},children:"使用 Google 或邮箱登录你的账号。"}),s&&c.jsx("div",{style:{padding:10,borderRadius:12,marginBottom:4,fontSize:13,color:s.type==="error"?"var(--danger)":"var(--text)",background:s.type==="error"?"rgba(239,68,68,0.12)":"rgba(59,130,246,0.08)",border:s.type==="error"?"1px solid rgba(239,68,68,0.4)":"1px solid rgba(59,130,246,0.35)"},children:s.message}),c.jsxs("button",{type:"button",onClick:f,disabled:l,style:{width:"100%",background:"#ffffff",border:"1px solid var(--border)",padding:"10px 14px",borderRadius:999,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontSize:14},children:[c.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google",style:{width:22,height:22}}),"使用 Google 一键登录"]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:4,marginBottom:4},children:[c.jsx("div",{style:{flex:1,height:1,backgroundColor:"var(--border)",opacity:.7}}),c.jsx("span",{style:{fontSize:12,color:"var(--muted)"},children:"或使用邮箱登录"}),c.jsx("div",{style:{flex:1,height:1,backgroundColor:"var(--border)",opacity:.7}})]}),c.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:10},children:[c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",fontSize:13,marginBottom:4},children:"邮箱"}),c.jsx("input",{name:"email",type:"email",value:e.email,onChange:u,placeholder:"example@gmail.com",required:!0})]}),c.jsxs("div",{style:{marginTop:4},children:[c.jsx("label",{style:{display:"block",fontSize:13,marginBottom:4},children:"密码"}),c.jsx("input",{name:"password",type:"password",value:e.password,onChange:u,placeholder:"请输入密码",required:!0})]}),c.jsxs("div",{style:{marginTop:4,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,fontSize:13},children:[c.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6,cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:r,onChange:g=>i(g.target.checked),style:{width:16,height:16}}),"记住我（在这台设备上保持登录）"]}),c.jsx("button",{type:"button",onClick:m,style:{border:"none",background:"transparent",color:"var(--primary)",cursor:"pointer",padding:0},children:"忘记密码？"})]}),c.jsx("button",{type:"submit",className:"btn",disabled:l,style:{width:"100%",marginTop:10,background:"var(--primary)"},children:l?"处理中…":"登录"})]}),c.jsxs("p",{style:{marginTop:10,fontSize:12,color:"var(--muted)",lineHeight:1.6},children:["还没有帐号？"," ",c.jsx(Re,{to:"/register",style:{color:"var(--primary)"},children:"立即注册"}),"。"]})]})]}),c.jsx("style",{children:`
        @media (max-width: 900px) {
          .login-card-grid {
            grid-template-columns: 1fr !important;
          }
          .login-hero {
            display: none;
          }
        }
      `})]})}function zR(){const t=li(),[e,n]=w.useState({name:"",email:"",password:"",confirm:""}),[r,i]=w.useState(!0),[s,o]=w.useState(null),[l,a]=w.useState(!1);function u(g){const{name:y,value:S}=g.target;n(_=>({..._,[y]:S}))}async function h(g){return await Sv(ye,r?zd:Xl),g()}async function d(g,y={}){const S=Ee(Se,"profiles/"+g.uid);await $s(S,{role:"employee",displayName:e.name||"",email:g.email||"",createdAt:Date.now(),...y})}async function f(g){if(g.preventDefault(),o(null),e.password.length<6){o({type:"error",message:"密码至少需要 6 位字符。"});return}if(e.password!==e.confirm){o({type:"error",message:"两次输入的密码不一致，请重新检查。"});return}a(!0);try{const y=await h(()=>f1(ye,e.email,e.password));await d(y.user),t("/dashboard")}catch(y){console.error(y);let S="注册失败，请稍后再试。";y.code==="auth/email-already-in-use"?S="该邮箱已注册，请直接登录。":y.code==="auth/invalid-email"?S="邮箱格式不正确，请检查。":y.code==="auth/weak-password"&&(S="密码太弱，请设置更复杂一点。"),o({type:"error",message:S})}finally{a(!1)}}async function m(){o(null),a(!0);try{const g=new dt,y=await h(()=>Ov(ye,g));await d(y.user),t("/dashboard")}catch(g){console.error(g),o({type:"error",message:"使用 Google 注册失败，请稍后重试。"})}finally{a(!1)}}return c.jsxs("div",{style:{minHeight:"calc(100vh - 120px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 16px"},children:[c.jsxs("div",{className:"card login-card-grid",style:{width:"100%",maxWidth:960,borderRadius:22,boxShadow:"var(--shadow-soft, 0 18px 45px rgba(15,23,42,0.18))",padding:0,overflow:"hidden",display:"grid",gridTemplateColumns:"minmax(0, 1.1fr) minmax(0, 1fr)"},children:[c.jsxs("div",{className:"login-hero",style:{position:"relative",padding:32,paddingRight:24,borderRight:"1px solid var(--border)",background:"linear-gradient(135deg, rgba(249,115,22,0.1), rgba(37,99,235,0.08))",overflow:"hidden"},children:[c.jsx("div",{style:{position:"absolute",inset:0,opacity:.12,background:"radial-gradient(circle at 0 0, rgba(249,115,22,0.65), transparent 55%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.6), transparent 55%)",pointerEvents:"none"}}),c.jsxs("div",{style:{position:"relative",zIndex:1},children:[c.jsx("div",{style:{display:"inline-flex",alignItems:"center",borderRadius:999,padding:"4px 10px",fontSize:12,background:"var(--primary-light)",color:"var(--primary-on-light)",fontWeight:600,marginBottom:12},children:"🚀 新用户 3 次免费体验发布职位"}),c.jsxs("h1",{style:{margin:0,fontSize:30,lineHeight:1.3},children:["两种身份，",c.jsx("span",{style:{color:"var(--primary)"},children:"自由切换"}),"。"]}),c.jsx("p",{style:{marginTop:12,marginBottom:22,color:"var(--muted)",fontSize:14},children:"现在注册 FastJob，你可以先作为求职者浏览职位， 之后如果需要招聘，只要联系管理员把角色修改为雇主即可。"}),c.jsxs("div",{style:{marginTop:12,padding:14,borderRadius:16,background:"rgba(15,23,42,0.65)",color:"#e5e7eb",fontSize:13,display:"flex",gap:12,alignItems:"flex-start"},children:[c.jsx("div",{style:{width:36,height:36,borderRadius:999,background:"rgba(249,115,22,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20},children:"✅"}),c.jsxs("div",{children:[c.jsx("strong",{children:"注册后记得："}),c.jsxs("div",{style:{marginTop:4},children:["先去 ",c.jsx("span",{style:{color:"var(--primary-light)"},children:"Profile"})," ","填写你的姓名、城市和技能标签，这样雇主更容易找到你。"]})]})]})]})]}),c.jsxs("div",{style:{padding:32,paddingLeft:24,display:"flex",flexDirection:"column",justifyContent:"center",gap:16},children:[c.jsx("h2",{style:{margin:0,marginBottom:4,fontSize:22},children:"创建 FastJob 帐号"}),c.jsx("p",{style:{margin:0,marginBottom:10,fontSize:13,color:"var(--muted)"},children:"使用邮箱注册，一个帐号即可同时用于找工作和发职位。"}),s&&c.jsx("div",{style:{padding:10,borderRadius:12,marginBottom:4,fontSize:13,color:s.type==="error"?"var(--danger)":"var(--text)",background:s.type==="error"?"rgba(239,68,68,0.12)":"rgba(59,130,246,0.08)",border:s.type==="error"?"1px solid rgba(239,68,68,0.4)":"1px solid rgba(59,130,246,0.35)"},children:s.message}),c.jsxs("button",{type:"button",onClick:m,disabled:l,style:{width:"100%",background:"#ffffff",border:"1px solid var(--border)",padding:"10px 14px",borderRadius:999,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontSize:14},children:[c.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google",style:{width:22,height:22}}),"使用 Google 快速注册"]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:4,marginBottom:4},children:[c.jsx("div",{style:{flex:1,height:1,backgroundColor:"var(--border)",opacity:.7}}),c.jsx("span",{style:{fontSize:12,color:"var(--muted)"},children:"或使用邮箱注册"}),c.jsx("div",{style:{flex:1,height:1,backgroundColor:"var(--border)",opacity:.7}})]}),c.jsxs("form",{onSubmit:f,style:{display:"flex",flexDirection:"column",gap:10},children:[c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",fontSize:13,marginBottom:4},children:"姓名 / 昵称"}),c.jsx("input",{name:"name",type:"text",value:e.name,onChange:u,placeholder:"例如：Nevan"})]}),c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",fontSize:13,marginBottom:4},children:"邮箱"}),c.jsx("input",{name:"email",type:"email",value:e.email,onChange:u,placeholder:"example@gmail.com",required:!0})]}),c.jsxs("div",{style:{marginTop:4},children:[c.jsx("label",{style:{display:"block",fontSize:13,marginBottom:4},children:"密码"}),c.jsx("input",{name:"password",type:"password",value:e.password,onChange:u,placeholder:"至少 6 位",required:!0})]}),c.jsxs("div",{style:{marginTop:4},children:[c.jsx("label",{style:{display:"block",fontSize:13,marginBottom:4},children:"确认密码"}),c.jsx("input",{name:"confirm",type:"password",value:e.confirm,onChange:u,placeholder:"再次输入密码",required:!0})]}),c.jsx("div",{style:{marginTop:4,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,fontSize:13},children:c.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:6,cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:r,onChange:g=>i(g.target.checked),style:{width:16,height:16}}),"记住我（在这台设备上保持登录）"]})}),c.jsx("button",{type:"submit",className:"btn",disabled:l,style:{width:"100%",marginTop:10,background:"var(--primary)"},children:l?"正在创建帐号…":"注册并登录"})]}),c.jsxs("p",{style:{marginTop:10,fontSize:12,color:"var(--muted)",lineHeight:1.6},children:["已经有帐号了？"," ",c.jsx(Re,{to:"/login",style:{color:"var(--primary)"},children:"直接登录"}),"。"]})]})]}),c.jsx("style",{children:`
        @media (max-width: 900px) {
          .login-card-grid {
            grid-template-columns: 1fr !important;
          }
          .login-hero {
            display: none;
          }
        }
      `})]})}const BR=w.createContext();function WR({children:t}){const[e,n]=w.useState(()=>typeof window>"u"?"light":localStorage.getItem("theme")||"light");w.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const i={theme:e,toggleTheme:()=>{n(s=>s==="light"?"dark":"light")}};return c.jsx(BR.Provider,{value:i,children:t})}function su({children:t}){const{user:e,loading:n}=Gs(),{employer:r,loaded:i}=Rh(),[s,o]=w.useState(null),[l,a]=w.useState(!0),[u,h]=w.useState(!1);w.useEffect(()=>{if(!e||!r){o(null),a(!1);return}const g=Ee(Se,"plans/"+e.uid),y=wt(g,S=>{o(S.val()||null),a(!1)},()=>{o(null),a(!1)});return()=>y()},[e,r]);async function d(){if(e){h(!0);try{const g=Ee(Se,"plans/"+e.uid);await $s(g,{planType:"trial",credits:3,subscriptionActive:!1,subscriptionUntil:null,createdAt:Date.now()})}catch(g){console.error(g),alert("无法开通试用，请稍后再试")}finally{h(!1)}}}if(n||!i||r&&l)return c.jsx("div",{className:"container",children:c.jsx("div",{className:"card",children:c.jsx("p",{children:"Checking access..."})})});if(!e)return c.jsx("div",{className:"container",children:c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:"请先登录"}),c.jsx("p",{children:"发布职位需要先登录账号。"}),c.jsx(Re,{className:"btn",to:"/login",children:"去登录"})]})});if(!r)return c.jsx("div",{className:"container",children:c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:"雇主权限需要开通"}),c.jsxs("p",{style:{marginTop:8},children:["当前账号是 ",c.jsx("strong",{children:"求职者"})," 身份，不能发布职位。"]}),c.jsxs("p",{style:{marginTop:8},children:["管理员可以在数据库 ",c.jsxs("code",{children:["/profiles/",ye.currentUser.uid]})," 中 把你的 ",c.jsx("code",{children:"role"})," 改成 ",c.jsx("code",{children:'"employer"'}),"。"]}),c.jsx(Re,{to:"/dashboard",className:"btn",style:{marginTop:16},children:"返回仪表盘"})]})});if(!s)return c.jsx("div",{className:"container",children:c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:"开通雇主套餐"}),c.jsxs("p",{style:{marginTop:8},children:["新雇主可获得 ",c.jsx("strong",{children:"3 次免费发布职位"}),"（试用期）。"]}),c.jsx("p",{style:{marginTop:8},children:"之后你可以选择："}),c.jsxs("ul",{style:{marginTop:8,paddingLeft:20},children:[c.jsx("li",{children:"💠 每帖付费（Per Post）– 例如 RM X / 帖"}),c.jsx("li",{children:"💠 每月套餐（Monthly）– 例如 RM Y / 月，不限发布"})]}),c.jsx("p",{style:{marginTop:8,fontSize:13,color:"var(--muted)"},children:"当前 Demo 版本不接真正支付，只是模拟计费逻辑。"}),c.jsx("button",{className:"btn",onClick:d,disabled:u,style:{marginTop:16},children:u?"开通中...":"开始 3 次免费试用"})]})});const f=Date.now(),m=s.subscriptionActive&&(!s.subscriptionUntil||s.subscriptionUntil>f);return c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"card",style:{marginBottom:16},children:[c.jsx("h3",{children:"雇主套餐状态"}),c.jsxs("p",{style:{marginTop:6},children:["当前套餐："," ",c.jsx("strong",{children:s.planType==="trial"?"试用（3 次免费发布）":s.planType==="per_post"?"按帖计费":s.planType==="monthly"?"月度套餐":"未设置"})]}),c.jsxs("p",{style:{marginTop:4},children:["剩余发布次数（credits）："," ",c.jsx("strong",{children:s.credits!=null?s.credits:0})]}),m&&c.jsxs("p",{style:{marginTop:4},children:["月度套餐：",c.jsx("strong",{children:"已激活"})]})]}),t]})}ou.createRoot(document.getElementById("root")).render(c.jsx(Sm.StrictMode,{children:c.jsx(RR,{children:c.jsx(WR,{children:c.jsx(NR,{children:c.jsx(kS,{children:c.jsx(vS,{children:c.jsxs(Je,{path:"/",element:c.jsx(PR,{}),children:[c.jsx(Je,{index:!0,element:c.jsx(bR,{})}),c.jsx(Je,{path:"jobs",element:c.jsx(AR,{})}),c.jsx(Je,{path:"jobs/:jobId",element:c.jsx(OR,{})}),c.jsx(Je,{path:"employer",element:c.jsx(su,{children:c.jsx(DR,{})})}),c.jsx(Je,{path:"employer/post",element:c.jsx(su,{children:c.jsx(jR,{})})}),c.jsx(Je,{path:"employer/jobs/:jobId/applicants",element:c.jsx(su,{children:c.jsx(MR,{})})}),c.jsx(Je,{path:"dashboard",element:c.jsx(LR,{})}),c.jsx(Je,{path:"profile",element:c.jsx(FR,{})}),c.jsx(Je,{path:"login",element:c.jsx(UR,{})}),c.jsx(Je,{path:"register",element:c.jsx(zR,{})})]})})})})})})}));
