var py=e=>{throw TypeError(e)};var Pd=(e,n,t)=>n.has(e)||py("Cannot "+t);var J=(e,n,t)=>(Pd(e,n,"read from private field"),t?t.call(e):n.get(e)),Ne=(e,n,t)=>n.has(e)?py("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t),_e=(e,n,t,i)=>(Pd(e,n,"write to private field"),i?i.call(e,t):n.set(e,t),t),Rn=(e,n,t)=>(Pd(e,n,"access private method"),t);var Bl=(e,n,t,i)=>({set _(s){_e(e,n,s,t)},get _(){return J(e,n,i)}});function Vj(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rd={exports:{}},Bs={},Id={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function Bj(){if(gy)return Ie;gy=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),o=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),u=Symbol.iterator;function h(I){return I===null||typeof I!="object"?null:(I=u&&I[u]||I["@@iterator"],typeof I=="function"?I:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,b={};function x(I,H,E){this.props=I,this.context=H,this.refs=b,this.updater=E||g}x.prototype.isReactComponent={},x.prototype.setState=function(I,H){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,H,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function w(){}w.prototype=x.prototype;function S(I,H,E){this.props=I,this.context=H,this.refs=b,this.updater=E||g}var C=S.prototype=new w;C.constructor=S,z(C,x.prototype),C.isPureReactComponent=!0;var R=Array.isArray,D=Object.prototype.hasOwnProperty,P={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function Y(I,H,E){var ce,ke={},ge=null,ye=null;if(H!=null)for(ce in H.ref!==void 0&&(ye=H.ref),H.key!==void 0&&(ge=""+H.key),H)D.call(H,ce)&&!$.hasOwnProperty(ce)&&(ke[ce]=H[ce]);var Ce=arguments.length-2;if(Ce===1)ke.children=E;else if(1<Ce){for(var Ae=Array(Ce),Be=0;Be<Ce;Be++)Ae[Be]=arguments[Be+2];ke.children=Ae}if(I&&I.defaultProps)for(ce in Ce=I.defaultProps,Ce)ke[ce]===void 0&&(ke[ce]=Ce[ce]);return{$$typeof:e,type:I,key:ge,ref:ye,props:ke,_owner:P.current}}function K(I,H){return{$$typeof:e,type:I.type,key:H,ref:I.ref,props:I.props,_owner:I._owner}}function L(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function Z(I){var H={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(E){return H[E]})}var G=/\/+/g;function ee(I,H){return typeof I=="object"&&I!==null&&I.key!=null?Z(""+I.key):H.toString(36)}function B(I,H,E,ce,ke){var ge=typeof I;(ge==="undefined"||ge==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case e:case n:ye=!0}}if(ye)return ye=I,ke=ke(ye),I=ce===""?"."+ee(ye,0):ce,R(ke)?(E="",I!=null&&(E=I.replace(G,"$&/")+"/"),B(ke,H,E,"",function(Be){return Be})):ke!=null&&(L(ke)&&(ke=K(ke,E+(!ke.key||ye&&ye.key===ke.key?"":(""+ke.key).replace(G,"$&/")+"/")+I)),H.push(ke)),1;if(ye=0,ce=ce===""?".":ce+":",R(I))for(var Ce=0;Ce<I.length;Ce++){ge=I[Ce];var Ae=ce+ee(ge,Ce);ye+=B(ge,H,E,Ae,ke)}else if(Ae=h(I),typeof Ae=="function")for(I=Ae.call(I),Ce=0;!(ge=I.next()).done;)ge=ge.value,Ae=ce+ee(ge,Ce++),ye+=B(ge,H,E,Ae,ke);else if(ge==="object")throw H=String(I),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return ye}function re(I,H,E){if(I==null)return I;var ce=[],ke=0;return B(I,ce,"","",function(ge){return H.call(E,ge,ke++)}),ce}function ue(I){if(I._status===-1){var H=I._result;H=H(),H.then(function(E){(I._status===0||I._status===-1)&&(I._status=1,I._result=E)},function(E){(I._status===0||I._status===-1)&&(I._status=2,I._result=E)}),I._status===-1&&(I._status=0,I._result=H)}if(I._status===1)return I._result.default;throw I._result}var X={current:null},F={transition:null},q={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:F,ReactCurrentOwner:P};function T(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:re,forEach:function(I,H,E){re(I,function(){H.apply(this,arguments)},E)},count:function(I){var H=0;return re(I,function(){H++}),H},toArray:function(I){return re(I,function(H){return H})||[]},only:function(I){if(!L(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ie.Component=x,Ie.Fragment=t,Ie.Profiler=s,Ie.PureComponent=S,Ie.StrictMode=i,Ie.Suspense=f,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Ie.act=T,Ie.cloneElement=function(I,H,E){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ce=z({},I.props),ke=I.key,ge=I.ref,ye=I._owner;if(H!=null){if(H.ref!==void 0&&(ge=H.ref,ye=P.current),H.key!==void 0&&(ke=""+H.key),I.type&&I.type.defaultProps)var Ce=I.type.defaultProps;for(Ae in H)D.call(H,Ae)&&!$.hasOwnProperty(Ae)&&(ce[Ae]=H[Ae]===void 0&&Ce!==void 0?Ce[Ae]:H[Ae])}var Ae=arguments.length-2;if(Ae===1)ce.children=E;else if(1<Ae){Ce=Array(Ae);for(var Be=0;Be<Ae;Be++)Ce[Be]=arguments[Be+2];ce.children=Ce}return{$$typeof:e,type:I.type,key:ke,ref:ge,props:ce,_owner:ye}},Ie.createContext=function(I){return I={$$typeof:o,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Ie.createElement=Y,Ie.createFactory=function(I){var H=Y.bind(null,I);return H.type=I,H},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(I){return{$$typeof:d,render:I}},Ie.isValidElement=L,Ie.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:ue}},Ie.memo=function(I,H){return{$$typeof:m,type:I,compare:H===void 0?null:H}},Ie.startTransition=function(I){var H=F.transition;F.transition={};try{I()}finally{F.transition=H}},Ie.unstable_act=T,Ie.useCallback=function(I,H){return X.current.useCallback(I,H)},Ie.useContext=function(I){return X.current.useContext(I)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(I){return X.current.useDeferredValue(I)},Ie.useEffect=function(I,H){return X.current.useEffect(I,H)},Ie.useId=function(){return X.current.useId()},Ie.useImperativeHandle=function(I,H,E){return X.current.useImperativeHandle(I,H,E)},Ie.useInsertionEffect=function(I,H){return X.current.useInsertionEffect(I,H)},Ie.useLayoutEffect=function(I,H){return X.current.useLayoutEffect(I,H)},Ie.useMemo=function(I,H){return X.current.useMemo(I,H)},Ie.useReducer=function(I,H,E){return X.current.useReducer(I,H,E)},Ie.useRef=function(I){return X.current.useRef(I)},Ie.useState=function(I){return X.current.useState(I)},Ie.useSyncExternalStore=function(I,H,E){return X.current.useSyncExternalStore(I,H,E)},Ie.useTransition=function(){return X.current.useTransition()},Ie.version="18.3.1",Ie}var yy;function vm(){return yy||(yy=1,Id.exports=Bj()),Id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function Uj(){if(ky)return Bs;ky=1;var e=vm(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(d,f,m){var y,u={},h=null,g=null;m!==void 0&&(h=""+m),f.key!==void 0&&(h=""+f.key),f.ref!==void 0&&(g=f.ref);for(y in f)i.call(f,y)&&!l.hasOwnProperty(y)&&(u[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)u[y]===void 0&&(u[y]=f[y]);return{$$typeof:n,type:d,key:h,ref:g,props:u,_owner:s.current}}return Bs.Fragment=t,Bs.jsx=o,Bs.jsxs=o,Bs}var vy;function $j(){return vy||(vy=1,Rd.exports=Uj()),Rd.exports}var O=$j(),Ul={},Md={exports:{}},nt={},Dd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy;function Hj(){return zy||(zy=1,function(e){function n(F,q){var T=F.length;F.push(q);e:for(;0<T;){var I=T-1>>>1,H=F[I];if(0<s(H,q))F[I]=q,F[T]=H,T=I;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var q=F[0],T=F.pop();if(T!==q){F[0]=T;e:for(var I=0,H=F.length,E=H>>>1;I<E;){var ce=2*(I+1)-1,ke=F[ce],ge=ce+1,ye=F[ge];if(0>s(ke,T))ge<H&&0>s(ye,ke)?(F[I]=ye,F[ge]=T,I=ge):(F[I]=ke,F[ce]=T,I=ce);else if(ge<H&&0>s(ye,T))F[I]=ye,F[ge]=T,I=ge;else break e}}return q}function s(F,q){var T=F.sortIndex-q.sortIndex;return T!==0?T:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,d=o.now();e.unstable_now=function(){return o.now()-d}}var f=[],m=[],y=1,u=null,h=3,g=!1,z=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(F){for(var q=t(m);q!==null;){if(q.callback===null)i(m);else if(q.startTime<=F)i(m),q.sortIndex=q.expirationTime,n(f,q);else break;q=t(m)}}function R(F){if(b=!1,C(F),!z)if(t(f)!==null)z=!0,ue(D);else{var q=t(m);q!==null&&X(R,q.startTime-F)}}function D(F,q){z=!1,b&&(b=!1,w(Y),Y=-1),g=!0;var T=h;try{for(C(q),u=t(f);u!==null&&(!(u.expirationTime>q)||F&&!Z());){var I=u.callback;if(typeof I=="function"){u.callback=null,h=u.priorityLevel;var H=I(u.expirationTime<=q);q=e.unstable_now(),typeof H=="function"?u.callback=H:u===t(f)&&i(f),C(q)}else i(f);u=t(f)}if(u!==null)var E=!0;else{var ce=t(m);ce!==null&&X(R,ce.startTime-q),E=!1}return E}finally{u=null,h=T,g=!1}}var P=!1,$=null,Y=-1,K=5,L=-1;function Z(){return!(e.unstable_now()-L<K)}function G(){if($!==null){var F=e.unstable_now();L=F;var q=!0;try{q=$(!0,F)}finally{q?ee():(P=!1,$=null)}}else P=!1}var ee;if(typeof S=="function")ee=function(){S(G)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,re=B.port2;B.port1.onmessage=G,ee=function(){re.postMessage(null)}}else ee=function(){x(G,0)};function ue(F){$=F,P||(P=!0,ee())}function X(F,q){Y=x(function(){F(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){z||g||(z=!0,ue(D))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(f)},e.unstable_next=function(F){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var T=h;h=q;try{return F()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var T=h;h=F;try{return q()}finally{h=T}},e.unstable_scheduleCallback=function(F,q,T){var I=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?I+T:I):T=I,F){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=T+H,F={id:y++,callback:q,priorityLevel:F,startTime:T,expirationTime:H,sortIndex:-1},T>I?(F.sortIndex=T,n(m,F),t(f)===null&&F===t(m)&&(b?(w(Y),Y=-1):b=!0,X(R,T-I))):(F.sortIndex=H,n(f,F),z||g||(z=!0,ue(D))),F},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(F){var q=h;return function(){var T=h;h=q;try{return F.apply(this,arguments)}finally{h=T}}}}(Ld)),Ld}var by;function Wj(){return by||(by=1,Dd.exports=Hj()),Dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function qj(){if(wy)return nt;wy=1;var e=vm(),n=Wj();function t(r){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+r,c=1;c<arguments.length;c++)a+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(r,a){o(r,a),o(r+"Capture",a)}function o(r,a){for(s[r]=a,r=0;r<a.length;r++)i.add(a[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},u={};function h(r){return f.call(u,r)?!0:f.call(y,r)?!1:m.test(r)?u[r]=!0:(y[r]=!0,!1)}function g(r,a,c,p){if(c!==null&&c.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return p?!1:c!==null?!c.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function z(r,a,c,p){if(a===null||typeof a>"u"||g(r,a,c,p))return!0;if(p)return!1;if(c!==null)switch(c.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function b(r,a,c,p,k,v,j){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=p,this.attributeNamespace=k,this.mustUseProperty=c,this.propertyName=r,this.type=a,this.sanitizeURL=v,this.removeEmptyString=j}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){x[r]=new b(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var a=r[0];x[a]=new b(a,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){x[r]=new b(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){x[r]=new b(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){x[r]=new b(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){x[r]=new b(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){x[r]=new b(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){x[r]=new b(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){x[r]=new b(r,5,!1,r.toLowerCase(),null,!1,!1)});var w=/[\-:]([a-z])/g;function S(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var a=r.replace(w,S);x[a]=new b(a,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var a=r.replace(w,S);x[a]=new b(a,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var a=r.replace(w,S);x[a]=new b(a,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){x[r]=new b(r,1,!1,r.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){x[r]=new b(r,1,!1,r.toLowerCase(),null,!0,!0)});function C(r,a,c,p){var k=x.hasOwnProperty(a)?x[a]:null;(k!==null?k.type!==0:p||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(z(a,c,k,p)&&(c=null),p||k===null?h(a)&&(c===null?r.removeAttribute(a):r.setAttribute(a,""+c)):k.mustUseProperty?r[k.propertyName]=c===null?k.type===3?!1:"":c:(a=k.attributeName,p=k.attributeNamespace,c===null?r.removeAttribute(a):(k=k.type,c=k===3||k===4&&c===!0?"":""+c,p?r.setAttributeNS(p,a,c):r.setAttribute(a,c))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),P=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),Z=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),F=Symbol.iterator;function q(r){return r===null||typeof r!="object"?null:(r=F&&r[F]||r["@@iterator"],typeof r=="function"?r:null)}var T=Object.assign,I;function H(r){if(I===void 0)try{throw Error()}catch(c){var a=c.stack.trim().match(/\n( *(at )?)/);I=a&&a[1]||""}return`
`+I+r}var E=!1;function ce(r,a){if(!r||E)return"";E=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(W){var p=W}Reflect.construct(r,[],a)}else{try{a.call()}catch(W){p=W}r.call(a.prototype)}else{try{throw Error()}catch(W){p=W}r()}}catch(W){if(W&&p&&typeof W.stack=="string"){for(var k=W.stack.split(`
`),v=p.stack.split(`
`),j=k.length-1,A=v.length-1;1<=j&&0<=A&&k[j]!==v[A];)A--;for(;1<=j&&0<=A;j--,A--)if(k[j]!==v[A]){if(j!==1||A!==1)do if(j--,A--,0>A||k[j]!==v[A]){var M=`
`+k[j].replace(" at new "," at ");return r.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",r.displayName)),M}while(1<=j&&0<=A);break}}}finally{E=!1,Error.prepareStackTrace=c}return(r=r?r.displayName||r.name:"")?H(r):""}function ke(r){switch(r.tag){case 5:return H(r.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return r=ce(r.type,!1),r;case 11:return r=ce(r.type.render,!1),r;case 1:return r=ce(r.type,!0),r;default:return""}}function ge(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case $:return"Fragment";case P:return"Portal";case K:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case B:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Z:return(r.displayName||"Context")+".Consumer";case L:return(r._context.displayName||"Context")+".Provider";case G:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case re:return a=r.displayName||null,a!==null?a:ge(r.type)||"Memo";case ue:a=r._payload,r=r._init;try{return ge(r(a))}catch{}}return null}function ye(r){var a=r.type;switch(r.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=a.render,r=r.displayName||r.name||"",a.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(a);case 8:return a===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Ce(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ae(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Be(r){var a=Ae(r)?"checked":"value",c=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),p=""+r[a];if(!r.hasOwnProperty(a)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var k=c.get,v=c.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return k.call(this)},set:function(j){p=""+j,v.call(this,j)}}),Object.defineProperty(r,a,{enumerable:c.enumerable}),{getValue:function(){return p},setValue:function(j){p=""+j},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function kn(r){r._valueTracker||(r._valueTracker=Be(r))}function At(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var c=a.getValue(),p="";return r&&(p=Ae(r)?r.checked?"true":"false":r.value),r=p,r!==c?(a.setValue(r),!0):!1}function On(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Qt(r,a){var c=a.checked;return T({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??r._wrapperState.initialChecked})}function vr(r,a){var c=a.defaultValue==null?"":a.defaultValue,p=a.checked!=null?a.checked:a.defaultChecked;c=Ce(a.value!=null?a.value:c),r._wrapperState={initialChecked:p,initialValue:c,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Yt(r,a){a=a.checked,a!=null&&C(r,"checked",a,!1)}function Xt(r,a){Yt(r,a);var c=Ce(a.value),p=a.type;if(c!=null)p==="number"?(c===0&&r.value===""||r.value!=c)&&(r.value=""+c):r.value!==""+c&&(r.value=""+c);else if(p==="submit"||p==="reset"){r.removeAttribute("value");return}a.hasOwnProperty("value")?st(r,a.type,c):a.hasOwnProperty("defaultValue")&&st(r,a.type,Ce(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(r.defaultChecked=!!a.defaultChecked)}function Jt(r,a,c){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var p=a.type;if(!(p!=="submit"&&p!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+r._wrapperState.initialValue,c||a===r.value||(r.value=a),r.defaultValue=a}c=r.name,c!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,c!==""&&(r.name=c)}function st(r,a,c){(a!=="number"||On(r.ownerDocument)!==r)&&(c==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+c&&(r.defaultValue=""+c))}var Pt=Array.isArray;function Kn(r,a,c,p){if(r=r.options,a){a={};for(var k=0;k<c.length;k++)a["$"+c[k]]=!0;for(c=0;c<r.length;c++)k=a.hasOwnProperty("$"+r[c].value),r[c].selected!==k&&(r[c].selected=k),k&&p&&(r[c].defaultSelected=!0)}else{for(c=""+Ce(c),a=null,k=0;k<r.length;k++){if(r[k].value===c){r[k].selected=!0,p&&(r[k].defaultSelected=!0);return}a!==null||r[k].disabled||(a=r[k])}a!==null&&(a.selected=!0)}}function Lr(r,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return T({},a,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function pt(r,a){var c=a.value;if(c==null){if(c=a.children,a=a.defaultValue,c!=null){if(a!=null)throw Error(t(92));if(Pt(c)){if(1<c.length)throw Error(t(93));c=c[0]}a=c}a==null&&(a=""),c=a}r._wrapperState={initialValue:Ce(c)}}function ea(r,a){var c=Ce(a.value),p=Ce(a.defaultValue);c!=null&&(c=""+c,c!==r.value&&(r.value=c),a.defaultValue==null&&r.defaultValue!==c&&(r.defaultValue=c)),p!=null&&(r.defaultValue=""+p)}function na(r){var a=r.textContent;a===r._wrapperState.initialValue&&a!==""&&a!==null&&(r.value=a)}function Q(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(r,a){return r==null||r==="http://www.w3.org/1999/xhtml"?Q(a):r==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var we,Pe=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,c,p,k){MSApp.execUnsafeLocalFunction(function(){return r(a,c,p,k)})}:r}(function(r,a){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=a;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=we.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;a.firstChild;)r.appendChild(a.firstChild)}});function Re(r,a){if(a){var c=r.firstChild;if(c&&c===r.lastChild&&c.nodeType===3){c.nodeValue=a;return}}r.textContent=a}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gt=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(r){gt.forEach(function(a){a=a+r.charAt(0).toUpperCase()+r.substring(1),pn[a]=pn[r]})});function _n(r,a,c){return a==null||typeof a=="boolean"||a===""?"":c||typeof a!="number"||a===0||pn.hasOwnProperty(r)&&pn[r]?(""+a).trim():a+"px"}function Nn(r,a){r=r.style;for(var c in a)if(a.hasOwnProperty(c)){var p=c.indexOf("--")===0,k=_n(c,a[c],p);c==="float"&&(c="cssFloat"),p?r.setProperty(c,k):r[c]=k}}var Zt=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(r,a){if(a){if(Zt[r]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function yt(r,a){if(r.indexOf("-")===-1)return typeof a.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fn=null;function ta(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ra=null,Or=null,er=null;function Rt(r){if(r=Ss(r)){if(typeof ra!="function")throw Error(t(280));var a=r.stateNode;a&&(a=tl(a),ra(r.stateNode,r.type,a))}}function Io(r){Or?er?er.push(r):er=[r]:Or=r}function Se(){if(Or){var r=Or,a=er;if(er=Or=null,Rt(r),a)for(r=0;r<a.length;r++)Rt(a[r])}}function Fe(r,a){return r(a)}function Ue(){}var Vn=!1;function Gn(r,a,c){if(Vn)return r(a,c);Vn=!0;try{return Fe(r,a,c)}finally{Vn=!1,(Or!==null||er!==null)&&(Ue(),Se())}}function Qn(r,a){var c=r.stateNode;if(c===null)return null;var p=tl(c);if(p===null)return null;c=p[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(r=r.type,p=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!p;break e;default:r=!1}if(r)return null;if(c&&typeof c!="function")throw Error(t(231,a,typeof c));return c}var It=!1;if(d)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){It=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{It=!1}function nr(r,a,c,p,k,v,j,A,M){var W=Array.prototype.slice.call(arguments,3);try{a.apply(c,W)}catch(te){this.onError(te)}}var ss=!1,Mo=null,Do=!1,Yu=null,K0={onError:function(r){ss=!0,Mo=r}};function G0(r,a,c,p,k,v,j,A,M){ss=!1,Mo=null,nr.apply(K0,arguments)}function Q0(r,a,c,p,k,v,j,A,M){if(G0.apply(this,arguments),ss){if(ss){var W=Mo;ss=!1,Mo=null}else throw Error(t(198));Do||(Do=!0,Yu=W)}}function wi(r){var a=r,c=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,(a.flags&4098)!==0&&(c=a.return),r=a.return;while(r)}return a.tag===3?c:null}function Nh(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function Fh(r){if(wi(r)!==r)throw Error(t(188))}function Y0(r){var a=r.alternate;if(!a){if(a=wi(r),a===null)throw Error(t(188));return a!==r?null:r}for(var c=r,p=a;;){var k=c.return;if(k===null)break;var v=k.alternate;if(v===null){if(p=k.return,p!==null){c=p;continue}break}if(k.child===v.child){for(v=k.child;v;){if(v===c)return Fh(k),r;if(v===p)return Fh(k),a;v=v.sibling}throw Error(t(188))}if(c.return!==p.return)c=k,p=v;else{for(var j=!1,A=k.child;A;){if(A===c){j=!0,c=k,p=v;break}if(A===p){j=!0,p=k,c=v;break}A=A.sibling}if(!j){for(A=v.child;A;){if(A===c){j=!0,c=v,p=k;break}if(A===p){j=!0,p=v,c=k;break}A=A.sibling}if(!j)throw Error(t(189))}}if(c.alternate!==p)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?r:a}function Vh(r){return r=Y0(r),r!==null?Bh(r):null}function Bh(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var a=Bh(r);if(a!==null)return a;r=r.sibling}return null}var Uh=n.unstable_scheduleCallback,$h=n.unstable_cancelCallback,X0=n.unstable_shouldYield,J0=n.unstable_requestPaint,sn=n.unstable_now,Z0=n.unstable_getCurrentPriorityLevel,Xu=n.unstable_ImmediatePriority,Hh=n.unstable_UserBlockingPriority,Lo=n.unstable_NormalPriority,e1=n.unstable_LowPriority,Wh=n.unstable_IdlePriority,Oo=null,tr=null;function n1(r){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Oo,r,void 0,(r.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:i1,t1=Math.log,r1=Math.LN2;function i1(r){return r>>>=0,r===0?32:31-(t1(r)/r1|0)|0}var No=64,Fo=4194304;function os(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Vo(r,a){var c=r.pendingLanes;if(c===0)return 0;var p=0,k=r.suspendedLanes,v=r.pingedLanes,j=c&268435455;if(j!==0){var A=j&~k;A!==0?p=os(A):(v&=j,v!==0&&(p=os(v)))}else j=c&~k,j!==0?p=os(j):v!==0&&(p=os(v));if(p===0)return 0;if(a!==0&&a!==p&&(a&k)===0&&(k=p&-p,v=a&-a,k>=v||k===16&&(v&4194240)!==0))return a;if((p&4)!==0&&(p|=c&16),a=r.entangledLanes,a!==0)for(r=r.entanglements,a&=p;0<a;)c=31-Mt(a),k=1<<c,p|=r[c],a&=~k;return p}function a1(r,a){switch(r){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s1(r,a){for(var c=r.suspendedLanes,p=r.pingedLanes,k=r.expirationTimes,v=r.pendingLanes;0<v;){var j=31-Mt(v),A=1<<j,M=k[j];M===-1?((A&c)===0||(A&p)!==0)&&(k[j]=a1(A,a)):M<=a&&(r.expiredLanes|=A),v&=~A}}function Ju(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function qh(){var r=No;return No<<=1,(No&4194240)===0&&(No=64),r}function Zu(r){for(var a=[],c=0;31>c;c++)a.push(r);return a}function ls(r,a,c){r.pendingLanes|=a,a!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,a=31-Mt(a),r[a]=c}function o1(r,a){var c=r.pendingLanes&~a;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=a,r.mutableReadLanes&=a,r.entangledLanes&=a,a=r.entanglements;var p=r.eventTimes;for(r=r.expirationTimes;0<c;){var k=31-Mt(c),v=1<<k;a[k]=0,p[k]=-1,r[k]=-1,c&=~v}}function ec(r,a){var c=r.entangledLanes|=a;for(r=r.entanglements;c;){var p=31-Mt(c),k=1<<p;k&a|r[p]&a&&(r[p]|=a),c&=~k}}var Ve=0;function Kh(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Gh,nc,Qh,Yh,Xh,tc=!1,Bo=[],Nr=null,Fr=null,Vr=null,us=new Map,cs=new Map,Br=[],l1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jh(r,a){switch(r){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":us.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(a.pointerId)}}function ds(r,a,c,p,k,v){return r===null||r.nativeEvent!==v?(r={blockedOn:a,domEventName:c,eventSystemFlags:p,nativeEvent:v,targetContainers:[k]},a!==null&&(a=Ss(a),a!==null&&nc(a)),r):(r.eventSystemFlags|=p,a=r.targetContainers,k!==null&&a.indexOf(k)===-1&&a.push(k),r)}function u1(r,a,c,p,k){switch(a){case"focusin":return Nr=ds(Nr,r,a,c,p,k),!0;case"dragenter":return Fr=ds(Fr,r,a,c,p,k),!0;case"mouseover":return Vr=ds(Vr,r,a,c,p,k),!0;case"pointerover":var v=k.pointerId;return us.set(v,ds(us.get(v)||null,r,a,c,p,k)),!0;case"gotpointercapture":return v=k.pointerId,cs.set(v,ds(cs.get(v)||null,r,a,c,p,k)),!0}return!1}function Zh(r){var a=xi(r.target);if(a!==null){var c=wi(a);if(c!==null){if(a=c.tag,a===13){if(a=Nh(c),a!==null){r.blockedOn=a,Xh(r.priority,function(){Qh(c)});return}}else if(a===3&&c.stateNode.current.memoizedState.isDehydrated){r.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Uo(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var c=ic(r.domEventName,r.eventSystemFlags,a[0],r.nativeEvent);if(c===null){c=r.nativeEvent;var p=new c.constructor(c.type,c);Fn=p,c.target.dispatchEvent(p),Fn=null}else return a=Ss(c),a!==null&&nc(a),r.blockedOn=c,!1;a.shift()}return!0}function ep(r,a,c){Uo(r)&&c.delete(a)}function c1(){tc=!1,Nr!==null&&Uo(Nr)&&(Nr=null),Fr!==null&&Uo(Fr)&&(Fr=null),Vr!==null&&Uo(Vr)&&(Vr=null),us.forEach(ep),cs.forEach(ep)}function fs(r,a){r.blockedOn===a&&(r.blockedOn=null,tc||(tc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,c1)))}function ms(r){function a(k){return fs(k,r)}if(0<Bo.length){fs(Bo[0],r);for(var c=1;c<Bo.length;c++){var p=Bo[c];p.blockedOn===r&&(p.blockedOn=null)}}for(Nr!==null&&fs(Nr,r),Fr!==null&&fs(Fr,r),Vr!==null&&fs(Vr,r),us.forEach(a),cs.forEach(a),c=0;c<Br.length;c++)p=Br[c],p.blockedOn===r&&(p.blockedOn=null);for(;0<Br.length&&(c=Br[0],c.blockedOn===null);)Zh(c),c.blockedOn===null&&Br.shift()}var ia=R.ReactCurrentBatchConfig,$o=!0;function d1(r,a,c,p){var k=Ve,v=ia.transition;ia.transition=null;try{Ve=1,rc(r,a,c,p)}finally{Ve=k,ia.transition=v}}function f1(r,a,c,p){var k=Ve,v=ia.transition;ia.transition=null;try{Ve=4,rc(r,a,c,p)}finally{Ve=k,ia.transition=v}}function rc(r,a,c,p){if($o){var k=ic(r,a,c,p);if(k===null)bc(r,a,p,Ho,c),Jh(r,p);else if(u1(k,r,a,c,p))p.stopPropagation();else if(Jh(r,p),a&4&&-1<l1.indexOf(r)){for(;k!==null;){var v=Ss(k);if(v!==null&&Gh(v),v=ic(r,a,c,p),v===null&&bc(r,a,p,Ho,c),v===k)break;k=v}k!==null&&p.stopPropagation()}else bc(r,a,p,null,c)}}var Ho=null;function ic(r,a,c,p){if(Ho=null,r=ta(p),r=xi(r),r!==null)if(a=wi(r),a===null)r=null;else if(c=a.tag,c===13){if(r=Nh(a),r!==null)return r;r=null}else if(c===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null);return Ho=r,null}function np(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z0()){case Xu:return 1;case Hh:return 4;case Lo:case e1:return 16;case Wh:return 536870912;default:return 16}default:return 16}}var Ur=null,ac=null,Wo=null;function tp(){if(Wo)return Wo;var r,a=ac,c=a.length,p,k="value"in Ur?Ur.value:Ur.textContent,v=k.length;for(r=0;r<c&&a[r]===k[r];r++);var j=c-r;for(p=1;p<=j&&a[c-p]===k[v-p];p++);return Wo=k.slice(r,1<p?1-p:void 0)}function qo(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function Ko(){return!0}function rp(){return!1}function ot(r){function a(c,p,k,v,j){this._reactName=c,this._targetInst=k,this.type=p,this.nativeEvent=v,this.target=j,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(c=r[A],this[A]=c?c(v):v[A]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ko:rp,this.isPropagationStopped=rp,this}return T(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),a}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=ot(aa),hs=T({},aa,{view:0,detail:0}),m1=ot(hs),oc,lc,ps,Go=T({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ps&&(ps&&r.type==="mousemove"?(oc=r.screenX-ps.screenX,lc=r.screenY-ps.screenY):lc=oc=0,ps=r),oc)},movementY:function(r){return"movementY"in r?r.movementY:lc}}),ip=ot(Go),h1=T({},Go,{dataTransfer:0}),p1=ot(h1),g1=T({},hs,{relatedTarget:0}),uc=ot(g1),y1=T({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=ot(y1),v1=T({},aa,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),z1=ot(v1),b1=T({},aa,{data:0}),ap=ot(b1),w1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=j1[r])?!!a[r]:!1}function cc(){return S1}var C1=T({},hs,{key:function(r){if(r.key){var a=w1[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=qo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?x1[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(r){return r.type==="keypress"?qo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?qo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),_1=ot(C1),T1=T({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=ot(T1),E1=T({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),A1=ot(E1),P1=T({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=ot(P1),I1=T({},Go,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),M1=ot(I1),D1=[9,13,27,32],dc=d&&"CompositionEvent"in window,gs=null;d&&"documentMode"in document&&(gs=document.documentMode);var L1=d&&"TextEvent"in window&&!gs,op=d&&(!dc||gs&&8<gs&&11>=gs),lp=" ",up=!1;function cp(r,a){switch(r){case"keyup":return D1.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var sa=!1;function O1(r,a){switch(r){case"compositionend":return dp(a);case"keypress":return a.which!==32?null:(up=!0,lp);case"textInput":return r=a.data,r===lp&&up?null:r;default:return null}}function N1(r,a){if(sa)return r==="compositionend"||!dc&&cp(r,a)?(r=tp(),Wo=ac=Ur=null,sa=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return op&&a.locale!=="ko"?null:a.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!F1[r.type]:a==="textarea"}function mp(r,a,c,p){Io(p),a=Zo(a,"onChange"),0<a.length&&(c=new sc("onChange","change",null,c,p),r.push({event:c,listeners:a}))}var ys=null,ks=null;function V1(r){Pp(r,0)}function Qo(r){var a=da(r);if(At(a))return r}function B1(r,a){if(r==="change")return a}var hp=!1;if(d){var fc;if(d){var mc="oninput"in document;if(!mc){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),mc=typeof pp.oninput=="function"}fc=mc}else fc=!1;hp=fc&&(!document.documentMode||9<document.documentMode)}function gp(){ys&&(ys.detachEvent("onpropertychange",yp),ks=ys=null)}function yp(r){if(r.propertyName==="value"&&Qo(ks)){var a=[];mp(a,ks,r,ta(r)),Gn(V1,a)}}function U1(r,a,c){r==="focusin"?(gp(),ys=a,ks=c,ys.attachEvent("onpropertychange",yp)):r==="focusout"&&gp()}function $1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Qo(ks)}function H1(r,a){if(r==="click")return Qo(a)}function W1(r,a){if(r==="input"||r==="change")return Qo(a)}function q1(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var Dt=typeof Object.is=="function"?Object.is:q1;function vs(r,a){if(Dt(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var c=Object.keys(r),p=Object.keys(a);if(c.length!==p.length)return!1;for(p=0;p<c.length;p++){var k=c[p];if(!f.call(a,k)||!Dt(r[k],a[k]))return!1}return!0}function kp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function vp(r,a){var c=kp(r);r=0;for(var p;c;){if(c.nodeType===3){if(p=r+c.textContent.length,r<=a&&p>=a)return{node:c,offset:a-r};r=p}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=kp(c)}}function zp(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?zp(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function bp(){for(var r=window,a=On();a instanceof r.HTMLIFrameElement;){try{var c=typeof a.contentWindow.location.href=="string"}catch{c=!1}if(c)r=a.contentWindow;else break;a=On(r.document)}return a}function hc(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}function K1(r){var a=bp(),c=r.focusedElem,p=r.selectionRange;if(a!==c&&c&&c.ownerDocument&&zp(c.ownerDocument.documentElement,c)){if(p!==null&&hc(c)){if(a=p.start,r=p.end,r===void 0&&(r=a),"selectionStart"in c)c.selectionStart=a,c.selectionEnd=Math.min(r,c.value.length);else if(r=(a=c.ownerDocument||document)&&a.defaultView||window,r.getSelection){r=r.getSelection();var k=c.textContent.length,v=Math.min(p.start,k);p=p.end===void 0?v:Math.min(p.end,k),!r.extend&&v>p&&(k=p,p=v,v=k),k=vp(c,v);var j=vp(c,p);k&&j&&(r.rangeCount!==1||r.anchorNode!==k.node||r.anchorOffset!==k.offset||r.focusNode!==j.node||r.focusOffset!==j.offset)&&(a=a.createRange(),a.setStart(k.node,k.offset),r.removeAllRanges(),v>p?(r.addRange(a),r.extend(j.node,j.offset)):(a.setEnd(j.node,j.offset),r.addRange(a)))}}for(a=[],r=c;r=r.parentNode;)r.nodeType===1&&a.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<a.length;c++)r=a[c],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var G1=d&&"documentMode"in document&&11>=document.documentMode,oa=null,pc=null,zs=null,gc=!1;function wp(r,a,c){var p=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;gc||oa==null||oa!==On(p)||(p=oa,"selectionStart"in p&&hc(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),zs&&vs(zs,p)||(zs=p,p=Zo(pc,"onSelect"),0<p.length&&(a=new sc("onSelect","select",null,a,c),r.push({event:a,listeners:p}),a.target=oa)))}function Yo(r,a){var c={};return c[r.toLowerCase()]=a.toLowerCase(),c["Webkit"+r]="webkit"+a,c["Moz"+r]="moz"+a,c}var la={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},yc={},xp={};d&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Xo(r){if(yc[r])return yc[r];if(!la[r])return r;var a=la[r],c;for(c in a)if(a.hasOwnProperty(c)&&c in xp)return yc[r]=a[c];return r}var jp=Xo("animationend"),Sp=Xo("animationiteration"),Cp=Xo("animationstart"),_p=Xo("transitionend"),Tp=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(r,a){Tp.set(r,a),l(a,[r])}for(var kc=0;kc<Ep.length;kc++){var vc=Ep[kc],Q1=vc.toLowerCase(),Y1=vc[0].toUpperCase()+vc.slice(1);$r(Q1,"on"+Y1)}$r(jp,"onAnimationEnd"),$r(Sp,"onAnimationIteration"),$r(Cp,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(_p,"onTransitionEnd"),o("onMouseEnter",["mouseout","mouseover"]),o("onMouseLeave",["mouseout","mouseover"]),o("onPointerEnter",["pointerout","pointerover"]),o("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Ap(r,a,c){var p=r.type||"unknown-event";r.currentTarget=c,Q0(p,a,void 0,r),r.currentTarget=null}function Pp(r,a){a=(a&4)!==0;for(var c=0;c<r.length;c++){var p=r[c],k=p.event;p=p.listeners;e:{var v=void 0;if(a)for(var j=p.length-1;0<=j;j--){var A=p[j],M=A.instance,W=A.currentTarget;if(A=A.listener,M!==v&&k.isPropagationStopped())break e;Ap(k,A,W),v=M}else for(j=0;j<p.length;j++){if(A=p[j],M=A.instance,W=A.currentTarget,A=A.listener,M!==v&&k.isPropagationStopped())break e;Ap(k,A,W),v=M}}}if(Do)throw r=Yu,Do=!1,Yu=null,r}function Ke(r,a){var c=a[_c];c===void 0&&(c=a[_c]=new Set);var p=r+"__bubble";c.has(p)||(Rp(a,r,2,!1),c.add(p))}function zc(r,a,c){var p=0;a&&(p|=4),Rp(c,r,p,a)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function ws(r){if(!r[Jo]){r[Jo]=!0,i.forEach(function(c){c!=="selectionchange"&&(X1.has(c)||zc(c,!1,r),zc(c,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[Jo]||(a[Jo]=!0,zc("selectionchange",!1,a))}}function Rp(r,a,c,p){switch(np(a)){case 1:var k=d1;break;case 4:k=f1;break;default:k=rc}c=k.bind(null,a,c,r),k=void 0,!It||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(k=!0),p?k!==void 0?r.addEventListener(a,c,{capture:!0,passive:k}):r.addEventListener(a,c,!0):k!==void 0?r.addEventListener(a,c,{passive:k}):r.addEventListener(a,c,!1)}function bc(r,a,c,p,k){var v=p;if((a&1)===0&&(a&2)===0&&p!==null)e:for(;;){if(p===null)return;var j=p.tag;if(j===3||j===4){var A=p.stateNode.containerInfo;if(A===k||A.nodeType===8&&A.parentNode===k)break;if(j===4)for(j=p.return;j!==null;){var M=j.tag;if((M===3||M===4)&&(M=j.stateNode.containerInfo,M===k||M.nodeType===8&&M.parentNode===k))return;j=j.return}for(;A!==null;){if(j=xi(A),j===null)return;if(M=j.tag,M===5||M===6){p=v=j;continue e}A=A.parentNode}}p=p.return}Gn(function(){var W=v,te=ta(c),ie=[];e:{var ne=Tp.get(r);if(ne!==void 0){var de=sc,me=r;switch(r){case"keypress":if(qo(c)===0)break e;case"keydown":case"keyup":de=_1;break;case"focusin":me="focus",de=uc;break;case"focusout":me="blur",de=uc;break;case"beforeblur":case"afterblur":de=uc;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=A1;break;case jp:case Sp:case Cp:de=k1;break;case _p:de=R1;break;case"scroll":de=m1;break;case"wheel":de=M1;break;case"copy":case"cut":case"paste":de=z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=sp}var he=(a&4)!==0,on=!he&&r==="scroll",V=he?ne!==null?ne+"Capture":null:ne;he=[];for(var N=W,U;N!==null;){U=N;var oe=U.stateNode;if(U.tag===5&&oe!==null&&(U=oe,V!==null&&(oe=Qn(N,V),oe!=null&&he.push(xs(N,oe,U)))),on)break;N=N.return}0<he.length&&(ne=new de(ne,me,null,c,te),ie.push({event:ne,listeners:he}))}}if((a&7)===0){e:{if(ne=r==="mouseover"||r==="pointerover",de=r==="mouseout"||r==="pointerout",ne&&c!==Fn&&(me=c.relatedTarget||c.fromElement)&&(xi(me)||me[zr]))break e;if((de||ne)&&(ne=te.window===te?te:(ne=te.ownerDocument)?ne.defaultView||ne.parentWindow:window,de?(me=c.relatedTarget||c.toElement,de=W,me=me?xi(me):null,me!==null&&(on=wi(me),me!==on||me.tag!==5&&me.tag!==6)&&(me=null)):(de=null,me=W),de!==me)){if(he=ip,oe="onMouseLeave",V="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(he=sp,oe="onPointerLeave",V="onPointerEnter",N="pointer"),on=de==null?ne:da(de),U=me==null?ne:da(me),ne=new he(oe,N+"leave",de,c,te),ne.target=on,ne.relatedTarget=U,oe=null,xi(te)===W&&(he=new he(V,N+"enter",me,c,te),he.target=U,he.relatedTarget=on,oe=he),on=oe,de&&me)n:{for(he=de,V=me,N=0,U=he;U;U=ua(U))N++;for(U=0,oe=V;oe;oe=ua(oe))U++;for(;0<N-U;)he=ua(he),N--;for(;0<U-N;)V=ua(V),U--;for(;N--;){if(he===V||V!==null&&he===V.alternate)break n;he=ua(he),V=ua(V)}he=null}else he=null;de!==null&&Ip(ie,ne,de,he,!1),me!==null&&on!==null&&Ip(ie,on,me,he,!0)}}e:{if(ne=W?da(W):window,de=ne.nodeName&&ne.nodeName.toLowerCase(),de==="select"||de==="input"&&ne.type==="file")var pe=B1;else if(fp(ne))if(hp)pe=W1;else{pe=$1;var ve=U1}else(de=ne.nodeName)&&de.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(pe=H1);if(pe&&(pe=pe(r,W))){mp(ie,pe,c,te);break e}ve&&ve(r,ne,W),r==="focusout"&&(ve=ne._wrapperState)&&ve.controlled&&ne.type==="number"&&st(ne,"number",ne.value)}switch(ve=W?da(W):window,r){case"focusin":(fp(ve)||ve.contentEditable==="true")&&(oa=ve,pc=W,zs=null);break;case"focusout":zs=pc=oa=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,wp(ie,c,te);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":wp(ie,c,te)}var ze;if(dc)e:{switch(r){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else sa?cp(r,c)&&(je="onCompositionEnd"):r==="keydown"&&c.keyCode===229&&(je="onCompositionStart");je&&(op&&c.locale!=="ko"&&(sa||je!=="onCompositionStart"?je==="onCompositionEnd"&&sa&&(ze=tp()):(Ur=te,ac="value"in Ur?Ur.value:Ur.textContent,sa=!0)),ve=Zo(W,je),0<ve.length&&(je=new ap(je,r,null,c,te),ie.push({event:je,listeners:ve}),ze?je.data=ze:(ze=dp(c),ze!==null&&(je.data=ze)))),(ze=L1?O1(r,c):N1(r,c))&&(W=Zo(W,"onBeforeInput"),0<W.length&&(te=new ap("onBeforeInput","beforeinput",null,c,te),ie.push({event:te,listeners:W}),te.data=ze))}Pp(ie,a)})}function xs(r,a,c){return{instance:r,listener:a,currentTarget:c}}function Zo(r,a){for(var c=a+"Capture",p=[];r!==null;){var k=r,v=k.stateNode;k.tag===5&&v!==null&&(k=v,v=Qn(r,c),v!=null&&p.unshift(xs(r,v,k)),v=Qn(r,a),v!=null&&p.push(xs(r,v,k))),r=r.return}return p}function ua(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Ip(r,a,c,p,k){for(var v=a._reactName,j=[];c!==null&&c!==p;){var A=c,M=A.alternate,W=A.stateNode;if(M!==null&&M===p)break;A.tag===5&&W!==null&&(A=W,k?(M=Qn(c,v),M!=null&&j.unshift(xs(c,M,A))):k||(M=Qn(c,v),M!=null&&j.push(xs(c,M,A)))),c=c.return}j.length!==0&&r.push({event:a,listeners:j})}var J1=/\r\n?/g,Z1=/\u0000|\uFFFD/g;function Mp(r){return(typeof r=="string"?r:""+r).replace(J1,`
`).replace(Z1,"")}function el(r,a,c){if(a=Mp(a),Mp(r)!==a&&c)throw Error(t(425))}function nl(){}var wc=null,xc=null;function jc(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,ej=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,nj=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(r){return Dp.resolve(null).then(r).catch(tj)}:Sc;function tj(r){setTimeout(function(){throw r})}function Cc(r,a){var c=a,p=0;do{var k=c.nextSibling;if(r.removeChild(c),k&&k.nodeType===8)if(c=k.data,c==="/$"){if(p===0){r.removeChild(k),ms(a);return}p--}else c!=="$"&&c!=="$?"&&c!=="$!"||p++;c=k}while(c);ms(a)}function Hr(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return r}function Lp(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var c=r.data;if(c==="$"||c==="$!"||c==="$?"){if(a===0)return r;a--}else c==="/$"&&a++}r=r.previousSibling}return null}var ca=Math.random().toString(36).slice(2),rr="__reactFiber$"+ca,js="__reactProps$"+ca,zr="__reactContainer$"+ca,_c="__reactEvents$"+ca,rj="__reactListeners$"+ca,ij="__reactHandles$"+ca;function xi(r){var a=r[rr];if(a)return a;for(var c=r.parentNode;c;){if(a=c[zr]||c[rr]){if(c=a.alternate,a.child!==null||c!==null&&c.child!==null)for(r=Lp(r);r!==null;){if(c=r[rr])return c;r=Lp(r)}return a}r=c,c=r.parentNode}return null}function Ss(r){return r=r[rr]||r[zr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function da(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function tl(r){return r[js]||null}var Tc=[],fa=-1;function Wr(r){return{current:r}}function Ge(r){0>fa||(r.current=Tc[fa],Tc[fa]=null,fa--)}function He(r,a){fa++,Tc[fa]=r.current,r.current=a}var qr={},Tn=Wr(qr),Yn=Wr(!1),ji=qr;function ma(r,a){var c=r.type.contextTypes;if(!c)return qr;var p=r.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===a)return p.__reactInternalMemoizedMaskedChildContext;var k={},v;for(v in c)k[v]=a[v];return p&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=a,r.__reactInternalMemoizedMaskedChildContext=k),k}function Xn(r){return r=r.childContextTypes,r!=null}function rl(){Ge(Yn),Ge(Tn)}function Op(r,a,c){if(Tn.current!==qr)throw Error(t(168));He(Tn,a),He(Yn,c)}function Np(r,a,c){var p=r.stateNode;if(a=a.childContextTypes,typeof p.getChildContext!="function")return c;p=p.getChildContext();for(var k in p)if(!(k in a))throw Error(t(108,ye(r)||"Unknown",k));return T({},c,p)}function il(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||qr,ji=Tn.current,He(Tn,r),He(Yn,Yn.current),!0}function Fp(r,a,c){var p=r.stateNode;if(!p)throw Error(t(169));c?(r=Np(r,a,ji),p.__reactInternalMemoizedMergedChildContext=r,Ge(Yn),Ge(Tn),He(Tn,r)):Ge(Yn),He(Yn,c)}var br=null,al=!1,Ec=!1;function Vp(r){br===null?br=[r]:br.push(r)}function aj(r){al=!0,Vp(r)}function Kr(){if(!Ec&&br!==null){Ec=!0;var r=0,a=Ve;try{var c=br;for(Ve=1;r<c.length;r++){var p=c[r];do p=p(!0);while(p!==null)}br=null,al=!1}catch(k){throw br!==null&&(br=br.slice(r+1)),Uh(Xu,Kr),k}finally{Ve=a,Ec=!1}}return null}var ha=[],pa=0,sl=null,ol=0,kt=[],vt=0,Si=null,wr=1,xr="";function Ci(r,a){ha[pa++]=ol,ha[pa++]=sl,sl=r,ol=a}function Bp(r,a,c){kt[vt++]=wr,kt[vt++]=xr,kt[vt++]=Si,Si=r;var p=wr;r=xr;var k=32-Mt(p)-1;p&=~(1<<k),c+=1;var v=32-Mt(a)+k;if(30<v){var j=k-k%5;v=(p&(1<<j)-1).toString(32),p>>=j,k-=j,wr=1<<32-Mt(a)+k|c<<k|p,xr=v+r}else wr=1<<v|c<<k|p,xr=r}function Ac(r){r.return!==null&&(Ci(r,1),Bp(r,1,0))}function Pc(r){for(;r===sl;)sl=ha[--pa],ha[pa]=null,ol=ha[--pa],ha[pa]=null;for(;r===Si;)Si=kt[--vt],kt[vt]=null,xr=kt[--vt],kt[vt]=null,wr=kt[--vt],kt[vt]=null}var lt=null,ut=null,Xe=!1,Lt=null;function Up(r,a){var c=xt(5,null,null,0);c.elementType="DELETED",c.stateNode=a,c.return=r,a=r.deletions,a===null?(r.deletions=[c],r.flags|=16):a.push(c)}function $p(r,a){switch(r.tag){case 5:var c=r.type;return a=a.nodeType!==1||c.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(r.stateNode=a,lt=r,ut=Hr(a.firstChild),!0):!1;case 6:return a=r.pendingProps===""||a.nodeType!==3?null:a,a!==null?(r.stateNode=a,lt=r,ut=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(c=Si!==null?{id:wr,overflow:xr}:null,r.memoizedState={dehydrated:a,treeContext:c,retryLane:1073741824},c=xt(18,null,null,0),c.stateNode=a,c.return=r,r.child=c,lt=r,ut=null,!0):!1;default:return!1}}function Rc(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ic(r){if(Xe){var a=ut;if(a){var c=a;if(!$p(r,a)){if(Rc(r))throw Error(t(418));a=Hr(c.nextSibling);var p=lt;a&&$p(r,a)?Up(p,c):(r.flags=r.flags&-4097|2,Xe=!1,lt=r)}}else{if(Rc(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,lt=r}}}function Hp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;lt=r}function ll(r){if(r!==lt)return!1;if(!Xe)return Hp(r),Xe=!0,!1;var a;if((a=r.tag!==3)&&!(a=r.tag!==5)&&(a=r.type,a=a!=="head"&&a!=="body"&&!jc(r.type,r.memoizedProps)),a&&(a=ut)){if(Rc(r))throw Wp(),Error(t(418));for(;a;)Up(r,a),a=Hr(a.nextSibling)}if(Hp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8){var c=r.data;if(c==="/$"){if(a===0){ut=Hr(r.nextSibling);break e}a--}else c!=="$"&&c!=="$!"&&c!=="$?"||a++}r=r.nextSibling}ut=null}}else ut=lt?Hr(r.stateNode.nextSibling):null;return!0}function Wp(){for(var r=ut;r;)r=Hr(r.nextSibling)}function ga(){ut=lt=null,Xe=!1}function Mc(r){Lt===null?Lt=[r]:Lt.push(r)}var sj=R.ReactCurrentBatchConfig;function Cs(r,a,c){if(r=c.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var p=c.stateNode}if(!p)throw Error(t(147,r));var k=p,v=""+r;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===v?a.ref:(a=function(j){var A=k.refs;j===null?delete A[v]:A[v]=j},a._stringRef=v,a)}if(typeof r!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,r))}return r}function ul(r,a){throw r=Object.prototype.toString.call(a),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r))}function qp(r){var a=r._init;return a(r._payload)}function Kp(r){function a(V,N){if(r){var U=V.deletions;U===null?(V.deletions=[N],V.flags|=16):U.push(N)}}function c(V,N){if(!r)return null;for(;N!==null;)a(V,N),N=N.sibling;return null}function p(V,N){for(V=new Map;N!==null;)N.key!==null?V.set(N.key,N):V.set(N.index,N),N=N.sibling;return V}function k(V,N){return V=ni(V,N),V.index=0,V.sibling=null,V}function v(V,N,U){return V.index=U,r?(U=V.alternate,U!==null?(U=U.index,U<N?(V.flags|=2,N):U):(V.flags|=2,N)):(V.flags|=1048576,N)}function j(V){return r&&V.alternate===null&&(V.flags|=2),V}function A(V,N,U,oe){return N===null||N.tag!==6?(N=Sd(U,V.mode,oe),N.return=V,N):(N=k(N,U),N.return=V,N)}function M(V,N,U,oe){var pe=U.type;return pe===$?te(V,N,U.props.children,oe,U.key):N!==null&&(N.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ue&&qp(pe)===N.type)?(oe=k(N,U.props),oe.ref=Cs(V,N,U),oe.return=V,oe):(oe=Il(U.type,U.key,U.props,null,V.mode,oe),oe.ref=Cs(V,N,U),oe.return=V,oe)}function W(V,N,U,oe){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=Cd(U,V.mode,oe),N.return=V,N):(N=k(N,U.children||[]),N.return=V,N)}function te(V,N,U,oe,pe){return N===null||N.tag!==7?(N=Mi(U,V.mode,oe,pe),N.return=V,N):(N=k(N,U),N.return=V,N)}function ie(V,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Sd(""+N,V.mode,U),N.return=V,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case D:return U=Il(N.type,N.key,N.props,null,V.mode,U),U.ref=Cs(V,null,N),U.return=V,U;case P:return N=Cd(N,V.mode,U),N.return=V,N;case ue:var oe=N._init;return ie(V,oe(N._payload),U)}if(Pt(N)||q(N))return N=Mi(N,V.mode,U,null),N.return=V,N;ul(V,N)}return null}function ne(V,N,U,oe){var pe=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return pe!==null?null:A(V,N,""+U,oe);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case D:return U.key===pe?M(V,N,U,oe):null;case P:return U.key===pe?W(V,N,U,oe):null;case ue:return pe=U._init,ne(V,N,pe(U._payload),oe)}if(Pt(U)||q(U))return pe!==null?null:te(V,N,U,oe,null);ul(V,U)}return null}function de(V,N,U,oe,pe){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return V=V.get(U)||null,A(N,V,""+oe,pe);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case D:return V=V.get(oe.key===null?U:oe.key)||null,M(N,V,oe,pe);case P:return V=V.get(oe.key===null?U:oe.key)||null,W(N,V,oe,pe);case ue:var ve=oe._init;return de(V,N,U,ve(oe._payload),pe)}if(Pt(oe)||q(oe))return V=V.get(U)||null,te(N,V,oe,pe,null);ul(N,oe)}return null}function me(V,N,U,oe){for(var pe=null,ve=null,ze=N,je=N=0,bn=null;ze!==null&&je<U.length;je++){ze.index>je?(bn=ze,ze=null):bn=ze.sibling;var Oe=ne(V,ze,U[je],oe);if(Oe===null){ze===null&&(ze=bn);break}r&&ze&&Oe.alternate===null&&a(V,ze),N=v(Oe,N,je),ve===null?pe=Oe:ve.sibling=Oe,ve=Oe,ze=bn}if(je===U.length)return c(V,ze),Xe&&Ci(V,je),pe;if(ze===null){for(;je<U.length;je++)ze=ie(V,U[je],oe),ze!==null&&(N=v(ze,N,je),ve===null?pe=ze:ve.sibling=ze,ve=ze);return Xe&&Ci(V,je),pe}for(ze=p(V,ze);je<U.length;je++)bn=de(ze,V,je,U[je],oe),bn!==null&&(r&&bn.alternate!==null&&ze.delete(bn.key===null?je:bn.key),N=v(bn,N,je),ve===null?pe=bn:ve.sibling=bn,ve=bn);return r&&ze.forEach(function(ti){return a(V,ti)}),Xe&&Ci(V,je),pe}function he(V,N,U,oe){var pe=q(U);if(typeof pe!="function")throw Error(t(150));if(U=pe.call(U),U==null)throw Error(t(151));for(var ve=pe=null,ze=N,je=N=0,bn=null,Oe=U.next();ze!==null&&!Oe.done;je++,Oe=U.next()){ze.index>je?(bn=ze,ze=null):bn=ze.sibling;var ti=ne(V,ze,Oe.value,oe);if(ti===null){ze===null&&(ze=bn);break}r&&ze&&ti.alternate===null&&a(V,ze),N=v(ti,N,je),ve===null?pe=ti:ve.sibling=ti,ve=ti,ze=bn}if(Oe.done)return c(V,ze),Xe&&Ci(V,je),pe;if(ze===null){for(;!Oe.done;je++,Oe=U.next())Oe=ie(V,Oe.value,oe),Oe!==null&&(N=v(Oe,N,je),ve===null?pe=Oe:ve.sibling=Oe,ve=Oe);return Xe&&Ci(V,je),pe}for(ze=p(V,ze);!Oe.done;je++,Oe=U.next())Oe=de(ze,V,je,Oe.value,oe),Oe!==null&&(r&&Oe.alternate!==null&&ze.delete(Oe.key===null?je:Oe.key),N=v(Oe,N,je),ve===null?pe=Oe:ve.sibling=Oe,ve=Oe);return r&&ze.forEach(function(Fj){return a(V,Fj)}),Xe&&Ci(V,je),pe}function on(V,N,U,oe){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case D:e:{for(var pe=U.key,ve=N;ve!==null;){if(ve.key===pe){if(pe=U.type,pe===$){if(ve.tag===7){c(V,ve.sibling),N=k(ve,U.props.children),N.return=V,V=N;break e}}else if(ve.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===ue&&qp(pe)===ve.type){c(V,ve.sibling),N=k(ve,U.props),N.ref=Cs(V,ve,U),N.return=V,V=N;break e}c(V,ve);break}else a(V,ve);ve=ve.sibling}U.type===$?(N=Mi(U.props.children,V.mode,oe,U.key),N.return=V,V=N):(oe=Il(U.type,U.key,U.props,null,V.mode,oe),oe.ref=Cs(V,N,U),oe.return=V,V=oe)}return j(V);case P:e:{for(ve=U.key;N!==null;){if(N.key===ve)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){c(V,N.sibling),N=k(N,U.children||[]),N.return=V,V=N;break e}else{c(V,N);break}else a(V,N);N=N.sibling}N=Cd(U,V.mode,oe),N.return=V,V=N}return j(V);case ue:return ve=U._init,on(V,N,ve(U._payload),oe)}if(Pt(U))return me(V,N,U,oe);if(q(U))return he(V,N,U,oe);ul(V,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,N!==null&&N.tag===6?(c(V,N.sibling),N=k(N,U),N.return=V,V=N):(c(V,N),N=Sd(U,V.mode,oe),N.return=V,V=N),j(V)):c(V,N)}return on}var ya=Kp(!0),Gp=Kp(!1),cl=Wr(null),dl=null,ka=null,Dc=null;function Lc(){Dc=ka=dl=null}function Oc(r){var a=cl.current;Ge(cl),r._currentValue=a}function Nc(r,a,c){for(;r!==null;){var p=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,p!==null&&(p.childLanes|=a)):p!==null&&(p.childLanes&a)!==a&&(p.childLanes|=a),r===c)break;r=r.return}}function va(r,a){dl=r,Dc=ka=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&a)!==0&&(Jn=!0),r.firstContext=null)}function zt(r){var a=r._currentValue;if(Dc!==r)if(r={context:r,memoizedValue:a,next:null},ka===null){if(dl===null)throw Error(t(308));ka=r,dl.dependencies={lanes:0,firstContext:r}}else ka=ka.next=r;return a}var _i=null;function Fc(r){_i===null?_i=[r]:_i.push(r)}function Qp(r,a,c,p){var k=a.interleaved;return k===null?(c.next=c,Fc(a)):(c.next=k.next,k.next=c),a.interleaved=c,jr(r,p)}function jr(r,a){r.lanes|=a;var c=r.alternate;for(c!==null&&(c.lanes|=a),c=r,r=r.return;r!==null;)r.childLanes|=a,c=r.alternate,c!==null&&(c.childLanes|=a),c=r,r=r.return;return c.tag===3?c.stateNode:null}var Gr=!1;function Vc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Sr(r,a){return{eventTime:r,lane:a,tag:0,payload:null,callback:null,next:null}}function Qr(r,a,c){var p=r.updateQueue;if(p===null)return null;if(p=p.shared,(Le&2)!==0){var k=p.pending;return k===null?a.next=a:(a.next=k.next,k.next=a),p.pending=a,jr(r,c)}return k=p.interleaved,k===null?(a.next=a,Fc(p)):(a.next=k.next,k.next=a),p.interleaved=a,jr(r,c)}function fl(r,a,c){if(a=a.updateQueue,a!==null&&(a=a.shared,(c&4194240)!==0)){var p=a.lanes;p&=r.pendingLanes,c|=p,a.lanes=c,ec(r,c)}}function Xp(r,a){var c=r.updateQueue,p=r.alternate;if(p!==null&&(p=p.updateQueue,c===p)){var k=null,v=null;if(c=c.firstBaseUpdate,c!==null){do{var j={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};v===null?k=v=j:v=v.next=j,c=c.next}while(c!==null);v===null?k=v=a:v=v.next=a}else k=v=a;c={baseState:p.baseState,firstBaseUpdate:k,lastBaseUpdate:v,shared:p.shared,effects:p.effects},r.updateQueue=c;return}r=c.lastBaseUpdate,r===null?c.firstBaseUpdate=a:r.next=a,c.lastBaseUpdate=a}function ml(r,a,c,p){var k=r.updateQueue;Gr=!1;var v=k.firstBaseUpdate,j=k.lastBaseUpdate,A=k.shared.pending;if(A!==null){k.shared.pending=null;var M=A,W=M.next;M.next=null,j===null?v=W:j.next=W,j=M;var te=r.alternate;te!==null&&(te=te.updateQueue,A=te.lastBaseUpdate,A!==j&&(A===null?te.firstBaseUpdate=W:A.next=W,te.lastBaseUpdate=M))}if(v!==null){var ie=k.baseState;j=0,te=W=M=null,A=v;do{var ne=A.lane,de=A.eventTime;if((p&ne)===ne){te!==null&&(te=te.next={eventTime:de,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var me=r,he=A;switch(ne=a,de=c,he.tag){case 1:if(me=he.payload,typeof me=="function"){ie=me.call(de,ie,ne);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=he.payload,ne=typeof me=="function"?me.call(de,ie,ne):me,ne==null)break e;ie=T({},ie,ne);break e;case 2:Gr=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,ne=k.effects,ne===null?k.effects=[A]:ne.push(A))}else de={eventTime:de,lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},te===null?(W=te=de,M=ie):te=te.next=de,j|=ne;if(A=A.next,A===null){if(A=k.shared.pending,A===null)break;ne=A,A=ne.next,ne.next=null,k.lastBaseUpdate=ne,k.shared.pending=null}}while(!0);if(te===null&&(M=ie),k.baseState=M,k.firstBaseUpdate=W,k.lastBaseUpdate=te,a=k.shared.interleaved,a!==null){k=a;do j|=k.lane,k=k.next;while(k!==a)}else v===null&&(k.shared.lanes=0);Ai|=j,r.lanes=j,r.memoizedState=ie}}function Jp(r,a,c){if(r=a.effects,a.effects=null,r!==null)for(a=0;a<r.length;a++){var p=r[a],k=p.callback;if(k!==null){if(p.callback=null,p=c,typeof k!="function")throw Error(t(191,k));k.call(p)}}}var _s={},ir=Wr(_s),Ts=Wr(_s),Es=Wr(_s);function Ti(r){if(r===_s)throw Error(t(174));return r}function Bc(r,a){switch(He(Es,a),He(Ts,r),He(ir,_s),r=a.nodeType,r){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:se(null,"");break;default:r=r===8?a.parentNode:a,a=r.namespaceURI||null,r=r.tagName,a=se(a,r)}Ge(ir),He(ir,a)}function za(){Ge(ir),Ge(Ts),Ge(Es)}function Zp(r){Ti(Es.current);var a=Ti(ir.current),c=se(a,r.type);a!==c&&(He(Ts,r),He(ir,c))}function Uc(r){Ts.current===r&&(Ge(ir),Ge(Ts))}var Ze=Wr(0);function hl(r){for(var a=r;a!==null;){if(a.tag===13){var c=a.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var $c=[];function Hc(){for(var r=0;r<$c.length;r++)$c[r]._workInProgressVersionPrimary=null;$c.length=0}var pl=R.ReactCurrentDispatcher,Wc=R.ReactCurrentBatchConfig,Ei=0,en=null,gn=null,vn=null,gl=!1,As=!1,Ps=0,oj=0;function En(){throw Error(t(321))}function qc(r,a){if(a===null)return!1;for(var c=0;c<a.length&&c<r.length;c++)if(!Dt(r[c],a[c]))return!1;return!0}function Kc(r,a,c,p,k,v){if(Ei=v,en=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,pl.current=r===null||r.memoizedState===null?dj:fj,r=c(p,k),As){v=0;do{if(As=!1,Ps=0,25<=v)throw Error(t(301));v+=1,vn=gn=null,a.updateQueue=null,pl.current=mj,r=c(p,k)}while(As)}if(pl.current=vl,a=gn!==null&&gn.next!==null,Ei=0,vn=gn=en=null,gl=!1,a)throw Error(t(300));return r}function Gc(){var r=Ps!==0;return Ps=0,r}function ar(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?en.memoizedState=vn=r:vn=vn.next=r,vn}function bt(){if(gn===null){var r=en.alternate;r=r!==null?r.memoizedState:null}else r=gn.next;var a=vn===null?en.memoizedState:vn.next;if(a!==null)vn=a,gn=r;else{if(r===null)throw Error(t(310));gn=r,r={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},vn===null?en.memoizedState=vn=r:vn=vn.next=r}return vn}function Rs(r,a){return typeof a=="function"?a(r):a}function Qc(r){var a=bt(),c=a.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var p=gn,k=p.baseQueue,v=c.pending;if(v!==null){if(k!==null){var j=k.next;k.next=v.next,v.next=j}p.baseQueue=k=v,c.pending=null}if(k!==null){v=k.next,p=p.baseState;var A=j=null,M=null,W=v;do{var te=W.lane;if((Ei&te)===te)M!==null&&(M=M.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),p=W.hasEagerState?W.eagerState:r(p,W.action);else{var ie={lane:te,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};M===null?(A=M=ie,j=p):M=M.next=ie,en.lanes|=te,Ai|=te}W=W.next}while(W!==null&&W!==v);M===null?j=p:M.next=A,Dt(p,a.memoizedState)||(Jn=!0),a.memoizedState=p,a.baseState=j,a.baseQueue=M,c.lastRenderedState=p}if(r=c.interleaved,r!==null){k=r;do v=k.lane,en.lanes|=v,Ai|=v,k=k.next;while(k!==r)}else k===null&&(c.lanes=0);return[a.memoizedState,c.dispatch]}function Yc(r){var a=bt(),c=a.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var p=c.dispatch,k=c.pending,v=a.memoizedState;if(k!==null){c.pending=null;var j=k=k.next;do v=r(v,j.action),j=j.next;while(j!==k);Dt(v,a.memoizedState)||(Jn=!0),a.memoizedState=v,a.baseQueue===null&&(a.baseState=v),c.lastRenderedState=v}return[v,p]}function eg(){}function ng(r,a){var c=en,p=bt(),k=a(),v=!Dt(p.memoizedState,k);if(v&&(p.memoizedState=k,Jn=!0),p=p.queue,Xc(ig.bind(null,c,p,r),[r]),p.getSnapshot!==a||v||vn!==null&&vn.memoizedState.tag&1){if(c.flags|=2048,Is(9,rg.bind(null,c,p,k,a),void 0,null),zn===null)throw Error(t(349));(Ei&30)!==0||tg(c,a,k)}return k}function tg(r,a,c){r.flags|=16384,r={getSnapshot:a,value:c},a=en.updateQueue,a===null?(a={lastEffect:null,stores:null},en.updateQueue=a,a.stores=[r]):(c=a.stores,c===null?a.stores=[r]:c.push(r))}function rg(r,a,c,p){a.value=c,a.getSnapshot=p,ag(a)&&sg(r)}function ig(r,a,c){return c(function(){ag(a)&&sg(r)})}function ag(r){var a=r.getSnapshot;r=r.value;try{var c=a();return!Dt(r,c)}catch{return!0}}function sg(r){var a=jr(r,1);a!==null&&Vt(a,r,1,-1)}function og(r){var a=ar();return typeof r=="function"&&(r=r()),a.memoizedState=a.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:r},a.queue=r,r=r.dispatch=cj.bind(null,en,r),[a.memoizedState,r]}function Is(r,a,c,p){return r={tag:r,create:a,destroy:c,deps:p,next:null},a=en.updateQueue,a===null?(a={lastEffect:null,stores:null},en.updateQueue=a,a.lastEffect=r.next=r):(c=a.lastEffect,c===null?a.lastEffect=r.next=r:(p=c.next,c.next=r,r.next=p,a.lastEffect=r)),r}function lg(){return bt().memoizedState}function yl(r,a,c,p){var k=ar();en.flags|=r,k.memoizedState=Is(1|a,c,void 0,p===void 0?null:p)}function kl(r,a,c,p){var k=bt();p=p===void 0?null:p;var v=void 0;if(gn!==null){var j=gn.memoizedState;if(v=j.destroy,p!==null&&qc(p,j.deps)){k.memoizedState=Is(a,c,v,p);return}}en.flags|=r,k.memoizedState=Is(1|a,c,v,p)}function ug(r,a){return yl(8390656,8,r,a)}function Xc(r,a){return kl(2048,8,r,a)}function cg(r,a){return kl(4,2,r,a)}function dg(r,a){return kl(4,4,r,a)}function fg(r,a){if(typeof a=="function")return r=r(),a(r),function(){a(null)};if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function mg(r,a,c){return c=c!=null?c.concat([r]):null,kl(4,4,fg.bind(null,a,r),c)}function Jc(){}function hg(r,a){var c=bt();a=a===void 0?null:a;var p=c.memoizedState;return p!==null&&a!==null&&qc(a,p[1])?p[0]:(c.memoizedState=[r,a],r)}function pg(r,a){var c=bt();a=a===void 0?null:a;var p=c.memoizedState;return p!==null&&a!==null&&qc(a,p[1])?p[0]:(r=r(),c.memoizedState=[r,a],r)}function gg(r,a,c){return(Ei&21)===0?(r.baseState&&(r.baseState=!1,Jn=!0),r.memoizedState=c):(Dt(c,a)||(c=qh(),en.lanes|=c,Ai|=c,r.baseState=!0),a)}function lj(r,a){var c=Ve;Ve=c!==0&&4>c?c:4,r(!0);var p=Wc.transition;Wc.transition={};try{r(!1),a()}finally{Ve=c,Wc.transition=p}}function yg(){return bt().memoizedState}function uj(r,a,c){var p=Zr(r);if(c={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null},kg(r))vg(a,c);else if(c=Qp(r,a,c,p),c!==null){var k=Un();Vt(c,r,p,k),zg(c,a,p)}}function cj(r,a,c){var p=Zr(r),k={lane:p,action:c,hasEagerState:!1,eagerState:null,next:null};if(kg(r))vg(a,k);else{var v=r.alternate;if(r.lanes===0&&(v===null||v.lanes===0)&&(v=a.lastRenderedReducer,v!==null))try{var j=a.lastRenderedState,A=v(j,c);if(k.hasEagerState=!0,k.eagerState=A,Dt(A,j)){var M=a.interleaved;M===null?(k.next=k,Fc(a)):(k.next=M.next,M.next=k),a.interleaved=k;return}}catch{}finally{}c=Qp(r,a,k,p),c!==null&&(k=Un(),Vt(c,r,p,k),zg(c,a,p))}}function kg(r){var a=r.alternate;return r===en||a!==null&&a===en}function vg(r,a){As=gl=!0;var c=r.pending;c===null?a.next=a:(a.next=c.next,c.next=a),r.pending=a}function zg(r,a,c){if((c&4194240)!==0){var p=a.lanes;p&=r.pendingLanes,c|=p,a.lanes=c,ec(r,c)}}var vl={readContext:zt,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},dj={readContext:zt,useCallback:function(r,a){return ar().memoizedState=[r,a===void 0?null:a],r},useContext:zt,useEffect:ug,useImperativeHandle:function(r,a,c){return c=c!=null?c.concat([r]):null,yl(4194308,4,fg.bind(null,a,r),c)},useLayoutEffect:function(r,a){return yl(4194308,4,r,a)},useInsertionEffect:function(r,a){return yl(4,2,r,a)},useMemo:function(r,a){var c=ar();return a=a===void 0?null:a,r=r(),c.memoizedState=[r,a],r},useReducer:function(r,a,c){var p=ar();return a=c!==void 0?c(a):a,p.memoizedState=p.baseState=a,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:a},p.queue=r,r=r.dispatch=uj.bind(null,en,r),[p.memoizedState,r]},useRef:function(r){var a=ar();return r={current:r},a.memoizedState=r},useState:og,useDebugValue:Jc,useDeferredValue:function(r){return ar().memoizedState=r},useTransition:function(){var r=og(!1),a=r[0];return r=lj.bind(null,r[1]),ar().memoizedState=r,[a,r]},useMutableSource:function(){},useSyncExternalStore:function(r,a,c){var p=en,k=ar();if(Xe){if(c===void 0)throw Error(t(407));c=c()}else{if(c=a(),zn===null)throw Error(t(349));(Ei&30)!==0||tg(p,a,c)}k.memoizedState=c;var v={value:c,getSnapshot:a};return k.queue=v,ug(ig.bind(null,p,v,r),[r]),p.flags|=2048,Is(9,rg.bind(null,p,v,c,a),void 0,null),c},useId:function(){var r=ar(),a=zn.identifierPrefix;if(Xe){var c=xr,p=wr;c=(p&~(1<<32-Mt(p)-1)).toString(32)+c,a=":"+a+"R"+c,c=Ps++,0<c&&(a+="H"+c.toString(32)),a+=":"}else c=oj++,a=":"+a+"r"+c.toString(32)+":";return r.memoizedState=a},unstable_isNewReconciler:!1},fj={readContext:zt,useCallback:hg,useContext:zt,useEffect:Xc,useImperativeHandle:mg,useInsertionEffect:cg,useLayoutEffect:dg,useMemo:pg,useReducer:Qc,useRef:lg,useState:function(){return Qc(Rs)},useDebugValue:Jc,useDeferredValue:function(r){var a=bt();return gg(a,gn.memoizedState,r)},useTransition:function(){var r=Qc(Rs)[0],a=bt().memoizedState;return[r,a]},useMutableSource:eg,useSyncExternalStore:ng,useId:yg,unstable_isNewReconciler:!1},mj={readContext:zt,useCallback:hg,useContext:zt,useEffect:Xc,useImperativeHandle:mg,useInsertionEffect:cg,useLayoutEffect:dg,useMemo:pg,useReducer:Yc,useRef:lg,useState:function(){return Yc(Rs)},useDebugValue:Jc,useDeferredValue:function(r){var a=bt();return gn===null?a.memoizedState=r:gg(a,gn.memoizedState,r)},useTransition:function(){var r=Yc(Rs)[0],a=bt().memoizedState;return[r,a]},useMutableSource:eg,useSyncExternalStore:ng,useId:yg,unstable_isNewReconciler:!1};function Ot(r,a){if(r&&r.defaultProps){a=T({},a),r=r.defaultProps;for(var c in r)a[c]===void 0&&(a[c]=r[c]);return a}return a}function Zc(r,a,c,p){a=r.memoizedState,c=c(p,a),c=c==null?a:T({},a,c),r.memoizedState=c,r.lanes===0&&(r.updateQueue.baseState=c)}var zl={isMounted:function(r){return(r=r._reactInternals)?wi(r)===r:!1},enqueueSetState:function(r,a,c){r=r._reactInternals;var p=Un(),k=Zr(r),v=Sr(p,k);v.payload=a,c!=null&&(v.callback=c),a=Qr(r,v,k),a!==null&&(Vt(a,r,k,p),fl(a,r,k))},enqueueReplaceState:function(r,a,c){r=r._reactInternals;var p=Un(),k=Zr(r),v=Sr(p,k);v.tag=1,v.payload=a,c!=null&&(v.callback=c),a=Qr(r,v,k),a!==null&&(Vt(a,r,k,p),fl(a,r,k))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var c=Un(),p=Zr(r),k=Sr(c,p);k.tag=2,a!=null&&(k.callback=a),a=Qr(r,k,p),a!==null&&(Vt(a,r,p,c),fl(a,r,p))}};function bg(r,a,c,p,k,v,j){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(p,v,j):a.prototype&&a.prototype.isPureReactComponent?!vs(c,p)||!vs(k,v):!0}function wg(r,a,c){var p=!1,k=qr,v=a.contextType;return typeof v=="object"&&v!==null?v=zt(v):(k=Xn(a)?ji:Tn.current,p=a.contextTypes,v=(p=p!=null)?ma(r,k):qr),a=new a(c,v),r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=zl,r.stateNode=a,a._reactInternals=r,p&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=k,r.__reactInternalMemoizedMaskedChildContext=v),a}function xg(r,a,c,p){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(c,p),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(c,p),a.state!==r&&zl.enqueueReplaceState(a,a.state,null)}function ed(r,a,c,p){var k=r.stateNode;k.props=c,k.state=r.memoizedState,k.refs={},Vc(r);var v=a.contextType;typeof v=="object"&&v!==null?k.context=zt(v):(v=Xn(a)?ji:Tn.current,k.context=ma(r,v)),k.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Zc(r,a,v,c),k.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof k.getSnapshotBeforeUpdate=="function"||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(a=k.state,typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount(),a!==k.state&&zl.enqueueReplaceState(k,k.state,null),ml(r,c,k,p),k.state=r.memoizedState),typeof k.componentDidMount=="function"&&(r.flags|=4194308)}function ba(r,a){try{var c="",p=a;do c+=ke(p),p=p.return;while(p);var k=c}catch(v){k=`
Error generating stack: `+v.message+`
`+v.stack}return{value:r,source:a,stack:k,digest:null}}function nd(r,a,c){return{value:r,source:null,stack:c??null,digest:a??null}}function td(r,a){try{console.error(a.value)}catch(c){setTimeout(function(){throw c})}}var hj=typeof WeakMap=="function"?WeakMap:Map;function jg(r,a,c){c=Sr(-1,c),c.tag=3,c.payload={element:null};var p=a.value;return c.callback=function(){_l||(_l=!0,yd=p),td(r,a)},c}function Sg(r,a,c){c=Sr(-1,c),c.tag=3;var p=r.type.getDerivedStateFromError;if(typeof p=="function"){var k=a.value;c.payload=function(){return p(k)},c.callback=function(){td(r,a)}}var v=r.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(c.callback=function(){td(r,a),typeof p!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var j=a.stack;this.componentDidCatch(a.value,{componentStack:j!==null?j:""})}),c}function Cg(r,a,c){var p=r.pingCache;if(p===null){p=r.pingCache=new hj;var k=new Set;p.set(a,k)}else k=p.get(a),k===void 0&&(k=new Set,p.set(a,k));k.has(c)||(k.add(c),r=Tj.bind(null,r,a,c),a.then(r,r))}function _g(r){do{var a;if((a=r.tag===13)&&(a=r.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return r;r=r.return}while(r!==null);return null}function Tg(r,a,c,p,k){return(r.mode&1)===0?(r===a?r.flags|=65536:(r.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(a=Sr(-1,1),a.tag=2,Qr(c,a,1))),c.lanes|=1),r):(r.flags|=65536,r.lanes=k,r)}var pj=R.ReactCurrentOwner,Jn=!1;function Bn(r,a,c,p){a.child=r===null?Gp(a,null,c,p):ya(a,r.child,c,p)}function Eg(r,a,c,p,k){c=c.render;var v=a.ref;return va(a,k),p=Kc(r,a,c,p,v,k),c=Gc(),r!==null&&!Jn?(a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~k,Cr(r,a,k)):(Xe&&c&&Ac(a),a.flags|=1,Bn(r,a,p,k),a.child)}function Ag(r,a,c,p,k){if(r===null){var v=c.type;return typeof v=="function"&&!jd(v)&&v.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(a.tag=15,a.type=v,Pg(r,a,v,p,k)):(r=Il(c.type,null,p,a,a.mode,k),r.ref=a.ref,r.return=a,a.child=r)}if(v=r.child,(r.lanes&k)===0){var j=v.memoizedProps;if(c=c.compare,c=c!==null?c:vs,c(j,p)&&r.ref===a.ref)return Cr(r,a,k)}return a.flags|=1,r=ni(v,p),r.ref=a.ref,r.return=a,a.child=r}function Pg(r,a,c,p,k){if(r!==null){var v=r.memoizedProps;if(vs(v,p)&&r.ref===a.ref)if(Jn=!1,a.pendingProps=p=v,(r.lanes&k)!==0)(r.flags&131072)!==0&&(Jn=!0);else return a.lanes=r.lanes,Cr(r,a,k)}return rd(r,a,c,p,k)}function Rg(r,a,c){var p=a.pendingProps,k=p.children,v=r!==null?r.memoizedState:null;if(p.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(xa,ct),ct|=c;else{if((c&1073741824)===0)return r=v!==null?v.baseLanes|c:c,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:r,cachePool:null,transitions:null},a.updateQueue=null,He(xa,ct),ct|=r,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=v!==null?v.baseLanes:c,He(xa,ct),ct|=p}else v!==null?(p=v.baseLanes|c,a.memoizedState=null):p=c,He(xa,ct),ct|=p;return Bn(r,a,k,c),a.child}function Ig(r,a){var c=a.ref;(r===null&&c!==null||r!==null&&r.ref!==c)&&(a.flags|=512,a.flags|=2097152)}function rd(r,a,c,p,k){var v=Xn(c)?ji:Tn.current;return v=ma(a,v),va(a,k),c=Kc(r,a,c,p,v,k),p=Gc(),r!==null&&!Jn?(a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~k,Cr(r,a,k)):(Xe&&p&&Ac(a),a.flags|=1,Bn(r,a,c,k),a.child)}function Mg(r,a,c,p,k){if(Xn(c)){var v=!0;il(a)}else v=!1;if(va(a,k),a.stateNode===null)wl(r,a),wg(a,c,p),ed(a,c,p,k),p=!0;else if(r===null){var j=a.stateNode,A=a.memoizedProps;j.props=A;var M=j.context,W=c.contextType;typeof W=="object"&&W!==null?W=zt(W):(W=Xn(c)?ji:Tn.current,W=ma(a,W));var te=c.getDerivedStateFromProps,ie=typeof te=="function"||typeof j.getSnapshotBeforeUpdate=="function";ie||typeof j.UNSAFE_componentWillReceiveProps!="function"&&typeof j.componentWillReceiveProps!="function"||(A!==p||M!==W)&&xg(a,j,p,W),Gr=!1;var ne=a.memoizedState;j.state=ne,ml(a,p,j,k),M=a.memoizedState,A!==p||ne!==M||Yn.current||Gr?(typeof te=="function"&&(Zc(a,c,te,p),M=a.memoizedState),(A=Gr||bg(a,c,A,p,ne,M,W))?(ie||typeof j.UNSAFE_componentWillMount!="function"&&typeof j.componentWillMount!="function"||(typeof j.componentWillMount=="function"&&j.componentWillMount(),typeof j.UNSAFE_componentWillMount=="function"&&j.UNSAFE_componentWillMount()),typeof j.componentDidMount=="function"&&(a.flags|=4194308)):(typeof j.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=p,a.memoizedState=M),j.props=p,j.state=M,j.context=W,p=A):(typeof j.componentDidMount=="function"&&(a.flags|=4194308),p=!1)}else{j=a.stateNode,Yp(r,a),A=a.memoizedProps,W=a.type===a.elementType?A:Ot(a.type,A),j.props=W,ie=a.pendingProps,ne=j.context,M=c.contextType,typeof M=="object"&&M!==null?M=zt(M):(M=Xn(c)?ji:Tn.current,M=ma(a,M));var de=c.getDerivedStateFromProps;(te=typeof de=="function"||typeof j.getSnapshotBeforeUpdate=="function")||typeof j.UNSAFE_componentWillReceiveProps!="function"&&typeof j.componentWillReceiveProps!="function"||(A!==ie||ne!==M)&&xg(a,j,p,M),Gr=!1,ne=a.memoizedState,j.state=ne,ml(a,p,j,k);var me=a.memoizedState;A!==ie||ne!==me||Yn.current||Gr?(typeof de=="function"&&(Zc(a,c,de,p),me=a.memoizedState),(W=Gr||bg(a,c,W,p,ne,me,M)||!1)?(te||typeof j.UNSAFE_componentWillUpdate!="function"&&typeof j.componentWillUpdate!="function"||(typeof j.componentWillUpdate=="function"&&j.componentWillUpdate(p,me,M),typeof j.UNSAFE_componentWillUpdate=="function"&&j.UNSAFE_componentWillUpdate(p,me,M)),typeof j.componentDidUpdate=="function"&&(a.flags|=4),typeof j.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof j.componentDidUpdate!="function"||A===r.memoizedProps&&ne===r.memoizedState||(a.flags|=4),typeof j.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&ne===r.memoizedState||(a.flags|=1024),a.memoizedProps=p,a.memoizedState=me),j.props=p,j.state=me,j.context=M,p=W):(typeof j.componentDidUpdate!="function"||A===r.memoizedProps&&ne===r.memoizedState||(a.flags|=4),typeof j.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&ne===r.memoizedState||(a.flags|=1024),p=!1)}return id(r,a,c,p,v,k)}function id(r,a,c,p,k,v){Ig(r,a);var j=(a.flags&128)!==0;if(!p&&!j)return k&&Fp(a,c,!1),Cr(r,a,v);p=a.stateNode,pj.current=a;var A=j&&typeof c.getDerivedStateFromError!="function"?null:p.render();return a.flags|=1,r!==null&&j?(a.child=ya(a,r.child,null,v),a.child=ya(a,null,A,v)):Bn(r,a,A,v),a.memoizedState=p.state,k&&Fp(a,c,!0),a.child}function Dg(r){var a=r.stateNode;a.pendingContext?Op(r,a.pendingContext,a.pendingContext!==a.context):a.context&&Op(r,a.context,!1),Bc(r,a.containerInfo)}function Lg(r,a,c,p,k){return ga(),Mc(k),a.flags|=256,Bn(r,a,c,p),a.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function sd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Og(r,a,c){var p=a.pendingProps,k=Ze.current,v=!1,j=(a.flags&128)!==0,A;if((A=j)||(A=r!==null&&r.memoizedState===null?!1:(k&2)!==0),A?(v=!0,a.flags&=-129):(r===null||r.memoizedState!==null)&&(k|=1),He(Ze,k&1),r===null)return Ic(a),r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((a.mode&1)===0?a.lanes=1:r.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(j=p.children,r=p.fallback,v?(p=a.mode,v=a.child,j={mode:"hidden",children:j},(p&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=j):v=Ml(j,p,0,null),r=Mi(r,p,c,null),v.return=a,r.return=a,v.sibling=r,a.child=v,a.child.memoizedState=sd(c),a.memoizedState=ad,r):od(a,j));if(k=r.memoizedState,k!==null&&(A=k.dehydrated,A!==null))return gj(r,a,j,p,A,k,c);if(v){v=p.fallback,j=a.mode,k=r.child,A=k.sibling;var M={mode:"hidden",children:p.children};return(j&1)===0&&a.child!==k?(p=a.child,p.childLanes=0,p.pendingProps=M,a.deletions=null):(p=ni(k,M),p.subtreeFlags=k.subtreeFlags&14680064),A!==null?v=ni(A,v):(v=Mi(v,j,c,null),v.flags|=2),v.return=a,p.return=a,p.sibling=v,a.child=p,p=v,v=a.child,j=r.child.memoizedState,j=j===null?sd(c):{baseLanes:j.baseLanes|c,cachePool:null,transitions:j.transitions},v.memoizedState=j,v.childLanes=r.childLanes&~c,a.memoizedState=ad,p}return v=r.child,r=v.sibling,p=ni(v,{mode:"visible",children:p.children}),(a.mode&1)===0&&(p.lanes=c),p.return=a,p.sibling=null,r!==null&&(c=a.deletions,c===null?(a.deletions=[r],a.flags|=16):c.push(r)),a.child=p,a.memoizedState=null,p}function od(r,a){return a=Ml({mode:"visible",children:a},r.mode,0,null),a.return=r,r.child=a}function bl(r,a,c,p){return p!==null&&Mc(p),ya(a,r.child,null,c),r=od(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function gj(r,a,c,p,k,v,j){if(c)return a.flags&256?(a.flags&=-257,p=nd(Error(t(422))),bl(r,a,j,p)):a.memoizedState!==null?(a.child=r.child,a.flags|=128,null):(v=p.fallback,k=a.mode,p=Ml({mode:"visible",children:p.children},k,0,null),v=Mi(v,k,j,null),v.flags|=2,p.return=a,v.return=a,p.sibling=v,a.child=p,(a.mode&1)!==0&&ya(a,r.child,null,j),a.child.memoizedState=sd(j),a.memoizedState=ad,v);if((a.mode&1)===0)return bl(r,a,j,null);if(k.data==="$!"){if(p=k.nextSibling&&k.nextSibling.dataset,p)var A=p.dgst;return p=A,v=Error(t(419)),p=nd(v,p,void 0),bl(r,a,j,p)}if(A=(j&r.childLanes)!==0,Jn||A){if(p=zn,p!==null){switch(j&-j){case 4:k=2;break;case 16:k=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:k=32;break;case 536870912:k=268435456;break;default:k=0}k=(k&(p.suspendedLanes|j))!==0?0:k,k!==0&&k!==v.retryLane&&(v.retryLane=k,jr(r,k),Vt(p,r,k,-1))}return xd(),p=nd(Error(t(421))),bl(r,a,j,p)}return k.data==="$?"?(a.flags|=128,a.child=r.child,a=Ej.bind(null,r),k._reactRetry=a,null):(r=v.treeContext,ut=Hr(k.nextSibling),lt=a,Xe=!0,Lt=null,r!==null&&(kt[vt++]=wr,kt[vt++]=xr,kt[vt++]=Si,wr=r.id,xr=r.overflow,Si=a),a=od(a,p.children),a.flags|=4096,a)}function Ng(r,a,c){r.lanes|=a;var p=r.alternate;p!==null&&(p.lanes|=a),Nc(r.return,a,c)}function ld(r,a,c,p,k){var v=r.memoizedState;v===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:p,tail:c,tailMode:k}:(v.isBackwards=a,v.rendering=null,v.renderingStartTime=0,v.last=p,v.tail=c,v.tailMode=k)}function Fg(r,a,c){var p=a.pendingProps,k=p.revealOrder,v=p.tail;if(Bn(r,a,p.children,c),p=Ze.current,(p&2)!==0)p=p&1|2,a.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ng(r,c,a);else if(r.tag===19)Ng(r,c,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}p&=1}if(He(Ze,p),(a.mode&1)===0)a.memoizedState=null;else switch(k){case"forwards":for(c=a.child,k=null;c!==null;)r=c.alternate,r!==null&&hl(r)===null&&(k=c),c=c.sibling;c=k,c===null?(k=a.child,a.child=null):(k=c.sibling,c.sibling=null),ld(a,!1,k,c,v);break;case"backwards":for(c=null,k=a.child,a.child=null;k!==null;){if(r=k.alternate,r!==null&&hl(r)===null){a.child=k;break}r=k.sibling,k.sibling=c,c=k,k=r}ld(a,!0,c,null,v);break;case"together":ld(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function wl(r,a){(a.mode&1)===0&&r!==null&&(r.alternate=null,a.alternate=null,a.flags|=2)}function Cr(r,a,c){if(r!==null&&(a.dependencies=r.dependencies),Ai|=a.lanes,(c&a.childLanes)===0)return null;if(r!==null&&a.child!==r.child)throw Error(t(153));if(a.child!==null){for(r=a.child,c=ni(r,r.pendingProps),a.child=c,c.return=a;r.sibling!==null;)r=r.sibling,c=c.sibling=ni(r,r.pendingProps),c.return=a;c.sibling=null}return a.child}function yj(r,a,c){switch(a.tag){case 3:Dg(a),ga();break;case 5:Zp(a);break;case 1:Xn(a.type)&&il(a);break;case 4:Bc(a,a.stateNode.containerInfo);break;case 10:var p=a.type._context,k=a.memoizedProps.value;He(cl,p._currentValue),p._currentValue=k;break;case 13:if(p=a.memoizedState,p!==null)return p.dehydrated!==null?(He(Ze,Ze.current&1),a.flags|=128,null):(c&a.child.childLanes)!==0?Og(r,a,c):(He(Ze,Ze.current&1),r=Cr(r,a,c),r!==null?r.sibling:null);He(Ze,Ze.current&1);break;case 19:if(p=(c&a.childLanes)!==0,(r.flags&128)!==0){if(p)return Fg(r,a,c);a.flags|=128}if(k=a.memoizedState,k!==null&&(k.rendering=null,k.tail=null,k.lastEffect=null),He(Ze,Ze.current),p)break;return null;case 22:case 23:return a.lanes=0,Rg(r,a,c)}return Cr(r,a,c)}var Vg,ud,Bg,Ug;Vg=function(r,a){for(var c=a.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break;for(;c.sibling===null;){if(c.return===null||c.return===a)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},ud=function(){},Bg=function(r,a,c,p){var k=r.memoizedProps;if(k!==p){r=a.stateNode,Ti(ir.current);var v=null;switch(c){case"input":k=Qt(r,k),p=Qt(r,p),v=[];break;case"select":k=T({},k,{value:void 0}),p=T({},p,{value:void 0}),v=[];break;case"textarea":k=Lr(r,k),p=Lr(r,p),v=[];break;default:typeof k.onClick!="function"&&typeof p.onClick=="function"&&(r.onclick=nl)}Ye(c,p);var j;c=null;for(W in k)if(!p.hasOwnProperty(W)&&k.hasOwnProperty(W)&&k[W]!=null)if(W==="style"){var A=k[W];for(j in A)A.hasOwnProperty(j)&&(c||(c={}),c[j]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?v||(v=[]):(v=v||[]).push(W,null));for(W in p){var M=p[W];if(A=k!=null?k[W]:void 0,p.hasOwnProperty(W)&&M!==A&&(M!=null||A!=null))if(W==="style")if(A){for(j in A)!A.hasOwnProperty(j)||M&&M.hasOwnProperty(j)||(c||(c={}),c[j]="");for(j in M)M.hasOwnProperty(j)&&A[j]!==M[j]&&(c||(c={}),c[j]=M[j])}else c||(v||(v=[]),v.push(W,c)),c=M;else W==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,A=A?A.__html:void 0,M!=null&&A!==M&&(v=v||[]).push(W,M)):W==="children"?typeof M!="string"&&typeof M!="number"||(v=v||[]).push(W,""+M):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(M!=null&&W==="onScroll"&&Ke("scroll",r),v||A===M||(v=[])):(v=v||[]).push(W,M))}c&&(v=v||[]).push("style",c);var W=v;(a.updateQueue=W)&&(a.flags|=4)}},Ug=function(r,a,c,p){c!==p&&(a.flags|=4)};function Ms(r,a){if(!Xe)switch(r.tailMode){case"hidden":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r.tail=null:c.sibling=null;break;case"collapsed":c=r.tail;for(var p=null;c!==null;)c.alternate!==null&&(p=c),c=c.sibling;p===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:p.sibling=null}}function An(r){var a=r.alternate!==null&&r.alternate.child===r.child,c=0,p=0;if(a)for(var k=r.child;k!==null;)c|=k.lanes|k.childLanes,p|=k.subtreeFlags&14680064,p|=k.flags&14680064,k.return=r,k=k.sibling;else for(k=r.child;k!==null;)c|=k.lanes|k.childLanes,p|=k.subtreeFlags,p|=k.flags,k.return=r,k=k.sibling;return r.subtreeFlags|=p,r.childLanes=c,a}function kj(r,a,c){var p=a.pendingProps;switch(Pc(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(a),null;case 1:return Xn(a.type)&&rl(),An(a),null;case 3:return p=a.stateNode,za(),Ge(Yn),Ge(Tn),Hc(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(r===null||r.child===null)&&(ll(a)?a.flags|=4:r===null||r.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Lt!==null&&(zd(Lt),Lt=null))),ud(r,a),An(a),null;case 5:Uc(a);var k=Ti(Es.current);if(c=a.type,r!==null&&a.stateNode!=null)Bg(r,a,c,p,k),r.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!p){if(a.stateNode===null)throw Error(t(166));return An(a),null}if(r=Ti(ir.current),ll(a)){p=a.stateNode,c=a.type;var v=a.memoizedProps;switch(p[rr]=a,p[js]=v,r=(a.mode&1)!==0,c){case"dialog":Ke("cancel",p),Ke("close",p);break;case"iframe":case"object":case"embed":Ke("load",p);break;case"video":case"audio":for(k=0;k<bs.length;k++)Ke(bs[k],p);break;case"source":Ke("error",p);break;case"img":case"image":case"link":Ke("error",p),Ke("load",p);break;case"details":Ke("toggle",p);break;case"input":vr(p,v),Ke("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!v.multiple},Ke("invalid",p);break;case"textarea":pt(p,v),Ke("invalid",p)}Ye(c,v),k=null;for(var j in v)if(v.hasOwnProperty(j)){var A=v[j];j==="children"?typeof A=="string"?p.textContent!==A&&(v.suppressHydrationWarning!==!0&&el(p.textContent,A,r),k=["children",A]):typeof A=="number"&&p.textContent!==""+A&&(v.suppressHydrationWarning!==!0&&el(p.textContent,A,r),k=["children",""+A]):s.hasOwnProperty(j)&&A!=null&&j==="onScroll"&&Ke("scroll",p)}switch(c){case"input":kn(p),Jt(p,v,!0);break;case"textarea":kn(p),na(p);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(p.onclick=nl)}p=k,a.updateQueue=p,p!==null&&(a.flags|=4)}else{j=k.nodeType===9?k:k.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Q(c)),r==="http://www.w3.org/1999/xhtml"?c==="script"?(r=j.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof p.is=="string"?r=j.createElement(c,{is:p.is}):(r=j.createElement(c),c==="select"&&(j=r,p.multiple?j.multiple=!0:p.size&&(j.size=p.size))):r=j.createElementNS(r,c),r[rr]=a,r[js]=p,Vg(r,a,!1,!1),a.stateNode=r;e:{switch(j=yt(c,p),c){case"dialog":Ke("cancel",r),Ke("close",r),k=p;break;case"iframe":case"object":case"embed":Ke("load",r),k=p;break;case"video":case"audio":for(k=0;k<bs.length;k++)Ke(bs[k],r);k=p;break;case"source":Ke("error",r),k=p;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),k=p;break;case"details":Ke("toggle",r),k=p;break;case"input":vr(r,p),k=Qt(r,p),Ke("invalid",r);break;case"option":k=p;break;case"select":r._wrapperState={wasMultiple:!!p.multiple},k=T({},p,{value:void 0}),Ke("invalid",r);break;case"textarea":pt(r,p),k=Lr(r,p),Ke("invalid",r);break;default:k=p}Ye(c,k),A=k;for(v in A)if(A.hasOwnProperty(v)){var M=A[v];v==="style"?Nn(r,M):v==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Pe(r,M)):v==="children"?typeof M=="string"?(c!=="textarea"||M!=="")&&Re(r,M):typeof M=="number"&&Re(r,""+M):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?M!=null&&v==="onScroll"&&Ke("scroll",r):M!=null&&C(r,v,M,j))}switch(c){case"input":kn(r),Jt(r,p,!1);break;case"textarea":kn(r),na(r);break;case"option":p.value!=null&&r.setAttribute("value",""+Ce(p.value));break;case"select":r.multiple=!!p.multiple,v=p.value,v!=null?Kn(r,!!p.multiple,v,!1):p.defaultValue!=null&&Kn(r,!!p.multiple,p.defaultValue,!0);break;default:typeof k.onClick=="function"&&(r.onclick=nl)}switch(c){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return An(a),null;case 6:if(r&&a.stateNode!=null)Ug(r,a,r.memoizedProps,p);else{if(typeof p!="string"&&a.stateNode===null)throw Error(t(166));if(c=Ti(Es.current),Ti(ir.current),ll(a)){if(p=a.stateNode,c=a.memoizedProps,p[rr]=a,(v=p.nodeValue!==c)&&(r=lt,r!==null))switch(r.tag){case 3:el(p.nodeValue,c,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&el(p.nodeValue,c,(r.mode&1)!==0)}v&&(a.flags|=4)}else p=(c.nodeType===9?c:c.ownerDocument).createTextNode(p),p[rr]=a,a.stateNode=p}return An(a),null;case 13:if(Ge(Ze),p=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&ut!==null&&(a.mode&1)!==0&&(a.flags&128)===0)Wp(),ga(),a.flags|=98560,v=!1;else if(v=ll(a),p!==null&&p.dehydrated!==null){if(r===null){if(!v)throw Error(t(318));if(v=a.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[rr]=a}else ga(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;An(a),v=!1}else Lt!==null&&(zd(Lt),Lt=null),v=!0;if(!v)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=c,a):(p=p!==null,p!==(r!==null&&r.memoizedState!==null)&&p&&(a.child.flags|=8192,(a.mode&1)!==0&&(r===null||(Ze.current&1)!==0?yn===0&&(yn=3):xd())),a.updateQueue!==null&&(a.flags|=4),An(a),null);case 4:return za(),ud(r,a),r===null&&ws(a.stateNode.containerInfo),An(a),null;case 10:return Oc(a.type._context),An(a),null;case 17:return Xn(a.type)&&rl(),An(a),null;case 19:if(Ge(Ze),v=a.memoizedState,v===null)return An(a),null;if(p=(a.flags&128)!==0,j=v.rendering,j===null)if(p)Ms(v,!1);else{if(yn!==0||r!==null&&(r.flags&128)!==0)for(r=a.child;r!==null;){if(j=hl(r),j!==null){for(a.flags|=128,Ms(v,!1),p=j.updateQueue,p!==null&&(a.updateQueue=p,a.flags|=4),a.subtreeFlags=0,p=c,c=a.child;c!==null;)v=c,r=p,v.flags&=14680066,j=v.alternate,j===null?(v.childLanes=0,v.lanes=r,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=j.childLanes,v.lanes=j.lanes,v.child=j.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=j.memoizedProps,v.memoizedState=j.memoizedState,v.updateQueue=j.updateQueue,v.type=j.type,r=j.dependencies,v.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),c=c.sibling;return He(Ze,Ze.current&1|2),a.child}r=r.sibling}v.tail!==null&&sn()>ja&&(a.flags|=128,p=!0,Ms(v,!1),a.lanes=4194304)}else{if(!p)if(r=hl(j),r!==null){if(a.flags|=128,p=!0,c=r.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),Ms(v,!0),v.tail===null&&v.tailMode==="hidden"&&!j.alternate&&!Xe)return An(a),null}else 2*sn()-v.renderingStartTime>ja&&c!==1073741824&&(a.flags|=128,p=!0,Ms(v,!1),a.lanes=4194304);v.isBackwards?(j.sibling=a.child,a.child=j):(c=v.last,c!==null?c.sibling=j:a.child=j,v.last=j)}return v.tail!==null?(a=v.tail,v.rendering=a,v.tail=a.sibling,v.renderingStartTime=sn(),a.sibling=null,c=Ze.current,He(Ze,p?c&1|2:c&1),a):(An(a),null);case 22:case 23:return wd(),p=a.memoizedState!==null,r!==null&&r.memoizedState!==null!==p&&(a.flags|=8192),p&&(a.mode&1)!==0?(ct&1073741824)!==0&&(An(a),a.subtreeFlags&6&&(a.flags|=8192)):An(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function vj(r,a){switch(Pc(a),a.tag){case 1:return Xn(a.type)&&rl(),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return za(),Ge(Yn),Ge(Tn),Hc(),r=a.flags,(r&65536)!==0&&(r&128)===0?(a.flags=r&-65537|128,a):null;case 5:return Uc(a),null;case 13:if(Ge(Ze),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(t(340));ga()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return Ge(Ze),null;case 4:return za(),null;case 10:return Oc(a.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var xl=!1,Pn=!1,zj=typeof WeakSet=="function"?WeakSet:Set,fe=null;function wa(r,a){var c=r.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(p){tn(r,a,p)}else c.current=null}function cd(r,a,c){try{c()}catch(p){tn(r,a,p)}}var $g=!1;function bj(r,a){if(wc=$o,r=bp(),hc(r)){if("selectionStart"in r)var c={start:r.selectionStart,end:r.selectionEnd};else e:{c=(c=r.ownerDocument)&&c.defaultView||window;var p=c.getSelection&&c.getSelection();if(p&&p.rangeCount!==0){c=p.anchorNode;var k=p.anchorOffset,v=p.focusNode;p=p.focusOffset;try{c.nodeType,v.nodeType}catch{c=null;break e}var j=0,A=-1,M=-1,W=0,te=0,ie=r,ne=null;n:for(;;){for(var de;ie!==c||k!==0&&ie.nodeType!==3||(A=j+k),ie!==v||p!==0&&ie.nodeType!==3||(M=j+p),ie.nodeType===3&&(j+=ie.nodeValue.length),(de=ie.firstChild)!==null;)ne=ie,ie=de;for(;;){if(ie===r)break n;if(ne===c&&++W===k&&(A=j),ne===v&&++te===p&&(M=j),(de=ie.nextSibling)!==null)break;ie=ne,ne=ie.parentNode}ie=de}c=A===-1||M===-1?null:{start:A,end:M}}else c=null}c=c||{start:0,end:0}}else c=null;for(xc={focusedElem:r,selectionRange:c},$o=!1,fe=a;fe!==null;)if(a=fe,r=a.child,(a.subtreeFlags&1028)!==0&&r!==null)r.return=a,fe=r;else for(;fe!==null;){a=fe;try{var me=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var he=me.memoizedProps,on=me.memoizedState,V=a.stateNode,N=V.getSnapshotBeforeUpdate(a.elementType===a.type?he:Ot(a.type,he),on);V.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var U=a.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(oe){tn(a,a.return,oe)}if(r=a.sibling,r!==null){r.return=a.return,fe=r;break}fe=a.return}return me=$g,$g=!1,me}function Ds(r,a,c){var p=a.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var k=p=p.next;do{if((k.tag&r)===r){var v=k.destroy;k.destroy=void 0,v!==void 0&&cd(a,c,v)}k=k.next}while(k!==p)}}function jl(r,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&r)===r){var p=c.create;c.destroy=p()}c=c.next}while(c!==a)}}function dd(r){var a=r.ref;if(a!==null){var c=r.stateNode;switch(r.tag){case 5:r=c;break;default:r=c}typeof a=="function"?a(r):a.current=r}}function Hg(r){var a=r.alternate;a!==null&&(r.alternate=null,Hg(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&(delete a[rr],delete a[js],delete a[_c],delete a[rj],delete a[ij])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Wg(r){return r.tag===5||r.tag===3||r.tag===4}function qg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Wg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function fd(r,a,c){var p=r.tag;if(p===5||p===6)r=r.stateNode,a?c.nodeType===8?c.parentNode.insertBefore(r,a):c.insertBefore(r,a):(c.nodeType===8?(a=c.parentNode,a.insertBefore(r,c)):(a=c,a.appendChild(r)),c=c._reactRootContainer,c!=null||a.onclick!==null||(a.onclick=nl));else if(p!==4&&(r=r.child,r!==null))for(fd(r,a,c),r=r.sibling;r!==null;)fd(r,a,c),r=r.sibling}function md(r,a,c){var p=r.tag;if(p===5||p===6)r=r.stateNode,a?c.insertBefore(r,a):c.appendChild(r);else if(p!==4&&(r=r.child,r!==null))for(md(r,a,c),r=r.sibling;r!==null;)md(r,a,c),r=r.sibling}var xn=null,Nt=!1;function Yr(r,a,c){for(c=c.child;c!==null;)Kg(r,a,c),c=c.sibling}function Kg(r,a,c){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Oo,c)}catch{}switch(c.tag){case 5:Pn||wa(c,a);case 6:var p=xn,k=Nt;xn=null,Yr(r,a,c),xn=p,Nt=k,xn!==null&&(Nt?(r=xn,c=c.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)):xn.removeChild(c.stateNode));break;case 18:xn!==null&&(Nt?(r=xn,c=c.stateNode,r.nodeType===8?Cc(r.parentNode,c):r.nodeType===1&&Cc(r,c),ms(r)):Cc(xn,c.stateNode));break;case 4:p=xn,k=Nt,xn=c.stateNode.containerInfo,Nt=!0,Yr(r,a,c),xn=p,Nt=k;break;case 0:case 11:case 14:case 15:if(!Pn&&(p=c.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){k=p=p.next;do{var v=k,j=v.destroy;v=v.tag,j!==void 0&&((v&2)!==0||(v&4)!==0)&&cd(c,a,j),k=k.next}while(k!==p)}Yr(r,a,c);break;case 1:if(!Pn&&(wa(c,a),p=c.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=c.memoizedProps,p.state=c.memoizedState,p.componentWillUnmount()}catch(A){tn(c,a,A)}Yr(r,a,c);break;case 21:Yr(r,a,c);break;case 22:c.mode&1?(Pn=(p=Pn)||c.memoizedState!==null,Yr(r,a,c),Pn=p):Yr(r,a,c);break;default:Yr(r,a,c)}}function Gg(r){var a=r.updateQueue;if(a!==null){r.updateQueue=null;var c=r.stateNode;c===null&&(c=r.stateNode=new zj),a.forEach(function(p){var k=Aj.bind(null,r,p);c.has(p)||(c.add(p),p.then(k,k))})}}function Ft(r,a){var c=a.deletions;if(c!==null)for(var p=0;p<c.length;p++){var k=c[p];try{var v=r,j=a,A=j;e:for(;A!==null;){switch(A.tag){case 5:xn=A.stateNode,Nt=!1;break e;case 3:xn=A.stateNode.containerInfo,Nt=!0;break e;case 4:xn=A.stateNode.containerInfo,Nt=!0;break e}A=A.return}if(xn===null)throw Error(t(160));Kg(v,j,k),xn=null,Nt=!1;var M=k.alternate;M!==null&&(M.return=null),k.return=null}catch(W){tn(k,a,W)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Qg(a,r),a=a.sibling}function Qg(r,a){var c=r.alternate,p=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ft(a,r),sr(r),p&4){try{Ds(3,r,r.return),jl(3,r)}catch(he){tn(r,r.return,he)}try{Ds(5,r,r.return)}catch(he){tn(r,r.return,he)}}break;case 1:Ft(a,r),sr(r),p&512&&c!==null&&wa(c,c.return);break;case 5:if(Ft(a,r),sr(r),p&512&&c!==null&&wa(c,c.return),r.flags&32){var k=r.stateNode;try{Re(k,"")}catch(he){tn(r,r.return,he)}}if(p&4&&(k=r.stateNode,k!=null)){var v=r.memoizedProps,j=c!==null?c.memoizedProps:v,A=r.type,M=r.updateQueue;if(r.updateQueue=null,M!==null)try{A==="input"&&v.type==="radio"&&v.name!=null&&Yt(k,v),yt(A,j);var W=yt(A,v);for(j=0;j<M.length;j+=2){var te=M[j],ie=M[j+1];te==="style"?Nn(k,ie):te==="dangerouslySetInnerHTML"?Pe(k,ie):te==="children"?Re(k,ie):C(k,te,ie,W)}switch(A){case"input":Xt(k,v);break;case"textarea":ea(k,v);break;case"select":var ne=k._wrapperState.wasMultiple;k._wrapperState.wasMultiple=!!v.multiple;var de=v.value;de!=null?Kn(k,!!v.multiple,de,!1):ne!==!!v.multiple&&(v.defaultValue!=null?Kn(k,!!v.multiple,v.defaultValue,!0):Kn(k,!!v.multiple,v.multiple?[]:"",!1))}k[js]=v}catch(he){tn(r,r.return,he)}}break;case 6:if(Ft(a,r),sr(r),p&4){if(r.stateNode===null)throw Error(t(162));k=r.stateNode,v=r.memoizedProps;try{k.nodeValue=v}catch(he){tn(r,r.return,he)}}break;case 3:if(Ft(a,r),sr(r),p&4&&c!==null&&c.memoizedState.isDehydrated)try{ms(a.containerInfo)}catch(he){tn(r,r.return,he)}break;case 4:Ft(a,r),sr(r);break;case 13:Ft(a,r),sr(r),k=r.child,k.flags&8192&&(v=k.memoizedState!==null,k.stateNode.isHidden=v,!v||k.alternate!==null&&k.alternate.memoizedState!==null||(gd=sn())),p&4&&Gg(r);break;case 22:if(te=c!==null&&c.memoizedState!==null,r.mode&1?(Pn=(W=Pn)||te,Ft(a,r),Pn=W):Ft(a,r),sr(r),p&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!te&&(r.mode&1)!==0)for(fe=r,te=r.child;te!==null;){for(ie=fe=te;fe!==null;){switch(ne=fe,de=ne.child,ne.tag){case 0:case 11:case 14:case 15:Ds(4,ne,ne.return);break;case 1:wa(ne,ne.return);var me=ne.stateNode;if(typeof me.componentWillUnmount=="function"){p=ne,c=ne.return;try{a=p,me.props=a.memoizedProps,me.state=a.memoizedState,me.componentWillUnmount()}catch(he){tn(p,c,he)}}break;case 5:wa(ne,ne.return);break;case 22:if(ne.memoizedState!==null){Jg(ie);continue}}de!==null?(de.return=ne,fe=de):Jg(ie)}te=te.sibling}e:for(te=null,ie=r;;){if(ie.tag===5){if(te===null){te=ie;try{k=ie.stateNode,W?(v=k.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(A=ie.stateNode,M=ie.memoizedProps.style,j=M!=null&&M.hasOwnProperty("display")?M.display:null,A.style.display=_n("display",j))}catch(he){tn(r,r.return,he)}}}else if(ie.tag===6){if(te===null)try{ie.stateNode.nodeValue=W?"":ie.memoizedProps}catch(he){tn(r,r.return,he)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===r)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===r)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===r)break e;te===ie&&(te=null),ie=ie.return}te===ie&&(te=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Ft(a,r),sr(r),p&4&&Gg(r);break;case 21:break;default:Ft(a,r),sr(r)}}function sr(r){var a=r.flags;if(a&2){try{e:{for(var c=r.return;c!==null;){if(Wg(c)){var p=c;break e}c=c.return}throw Error(t(160))}switch(p.tag){case 5:var k=p.stateNode;p.flags&32&&(Re(k,""),p.flags&=-33);var v=qg(r);md(r,v,k);break;case 3:case 4:var j=p.stateNode.containerInfo,A=qg(r);fd(r,A,j);break;default:throw Error(t(161))}}catch(M){tn(r,r.return,M)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function wj(r,a,c){fe=r,Yg(r)}function Yg(r,a,c){for(var p=(r.mode&1)!==0;fe!==null;){var k=fe,v=k.child;if(k.tag===22&&p){var j=k.memoizedState!==null||xl;if(!j){var A=k.alternate,M=A!==null&&A.memoizedState!==null||Pn;A=xl;var W=Pn;if(xl=j,(Pn=M)&&!W)for(fe=k;fe!==null;)j=fe,M=j.child,j.tag===22&&j.memoizedState!==null?Zg(k):M!==null?(M.return=j,fe=M):Zg(k);for(;v!==null;)fe=v,Yg(v),v=v.sibling;fe=k,xl=A,Pn=W}Xg(r)}else(k.subtreeFlags&8772)!==0&&v!==null?(v.return=k,fe=v):Xg(r)}}function Xg(r){for(;fe!==null;){var a=fe;if((a.flags&8772)!==0){var c=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Pn||jl(5,a);break;case 1:var p=a.stateNode;if(a.flags&4&&!Pn)if(c===null)p.componentDidMount();else{var k=a.elementType===a.type?c.memoizedProps:Ot(a.type,c.memoizedProps);p.componentDidUpdate(k,c.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var v=a.updateQueue;v!==null&&Jp(a,v,p);break;case 3:var j=a.updateQueue;if(j!==null){if(c=null,a.child!==null)switch(a.child.tag){case 5:c=a.child.stateNode;break;case 1:c=a.child.stateNode}Jp(a,j,c)}break;case 5:var A=a.stateNode;if(c===null&&a.flags&4){c=A;var M=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&c.focus();break;case"img":M.src&&(c.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var W=a.alternate;if(W!==null){var te=W.memoizedState;if(te!==null){var ie=te.dehydrated;ie!==null&&ms(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||a.flags&512&&dd(a)}catch(ne){tn(a,a.return,ne)}}if(a===r){fe=null;break}if(c=a.sibling,c!==null){c.return=a.return,fe=c;break}fe=a.return}}function Jg(r){for(;fe!==null;){var a=fe;if(a===r){fe=null;break}var c=a.sibling;if(c!==null){c.return=a.return,fe=c;break}fe=a.return}}function Zg(r){for(;fe!==null;){var a=fe;try{switch(a.tag){case 0:case 11:case 15:var c=a.return;try{jl(4,a)}catch(M){tn(a,c,M)}break;case 1:var p=a.stateNode;if(typeof p.componentDidMount=="function"){var k=a.return;try{p.componentDidMount()}catch(M){tn(a,k,M)}}var v=a.return;try{dd(a)}catch(M){tn(a,v,M)}break;case 5:var j=a.return;try{dd(a)}catch(M){tn(a,j,M)}}}catch(M){tn(a,a.return,M)}if(a===r){fe=null;break}var A=a.sibling;if(A!==null){A.return=a.return,fe=A;break}fe=a.return}}var xj=Math.ceil,Sl=R.ReactCurrentDispatcher,hd=R.ReactCurrentOwner,wt=R.ReactCurrentBatchConfig,Le=0,zn=null,cn=null,jn=0,ct=0,xa=Wr(0),yn=0,Ls=null,Ai=0,Cl=0,pd=0,Os=null,Zn=null,gd=0,ja=1/0,_r=null,_l=!1,yd=null,Xr=null,Tl=!1,Jr=null,El=0,Ns=0,kd=null,Al=-1,Pl=0;function Un(){return(Le&6)!==0?sn():Al!==-1?Al:Al=sn()}function Zr(r){return(r.mode&1)===0?1:(Le&2)!==0&&jn!==0?jn&-jn:sj.transition!==null?(Pl===0&&(Pl=qh()),Pl):(r=Ve,r!==0||(r=window.event,r=r===void 0?16:np(r.type)),r)}function Vt(r,a,c,p){if(50<Ns)throw Ns=0,kd=null,Error(t(185));ls(r,c,p),((Le&2)===0||r!==zn)&&(r===zn&&((Le&2)===0&&(Cl|=c),yn===4&&ei(r,jn)),et(r,p),c===1&&Le===0&&(a.mode&1)===0&&(ja=sn()+500,al&&Kr()))}function et(r,a){var c=r.callbackNode;s1(r,a);var p=Vo(r,r===zn?jn:0);if(p===0)c!==null&&$h(c),r.callbackNode=null,r.callbackPriority=0;else if(a=p&-p,r.callbackPriority!==a){if(c!=null&&$h(c),a===1)r.tag===0?aj(ny.bind(null,r)):Vp(ny.bind(null,r)),nj(function(){(Le&6)===0&&Kr()}),c=null;else{switch(Kh(p)){case 1:c=Xu;break;case 4:c=Hh;break;case 16:c=Lo;break;case 536870912:c=Wh;break;default:c=Lo}c=uy(c,ey.bind(null,r))}r.callbackPriority=a,r.callbackNode=c}}function ey(r,a){if(Al=-1,Pl=0,(Le&6)!==0)throw Error(t(327));var c=r.callbackNode;if(Sa()&&r.callbackNode!==c)return null;var p=Vo(r,r===zn?jn:0);if(p===0)return null;if((p&30)!==0||(p&r.expiredLanes)!==0||a)a=Rl(r,p);else{a=p;var k=Le;Le|=2;var v=ry();(zn!==r||jn!==a)&&(_r=null,ja=sn()+500,Ri(r,a));do try{Cj();break}catch(A){ty(r,A)}while(!0);Lc(),Sl.current=v,Le=k,cn!==null?a=0:(zn=null,jn=0,a=yn)}if(a!==0){if(a===2&&(k=Ju(r),k!==0&&(p=k,a=vd(r,k))),a===1)throw c=Ls,Ri(r,0),ei(r,p),et(r,sn()),c;if(a===6)ei(r,p);else{if(k=r.current.alternate,(p&30)===0&&!jj(k)&&(a=Rl(r,p),a===2&&(v=Ju(r),v!==0&&(p=v,a=vd(r,v))),a===1))throw c=Ls,Ri(r,0),ei(r,p),et(r,sn()),c;switch(r.finishedWork=k,r.finishedLanes=p,a){case 0:case 1:throw Error(t(345));case 2:Ii(r,Zn,_r);break;case 3:if(ei(r,p),(p&130023424)===p&&(a=gd+500-sn(),10<a)){if(Vo(r,0)!==0)break;if(k=r.suspendedLanes,(k&p)!==p){Un(),r.pingedLanes|=r.suspendedLanes&k;break}r.timeoutHandle=Sc(Ii.bind(null,r,Zn,_r),a);break}Ii(r,Zn,_r);break;case 4:if(ei(r,p),(p&4194240)===p)break;for(a=r.eventTimes,k=-1;0<p;){var j=31-Mt(p);v=1<<j,j=a[j],j>k&&(k=j),p&=~v}if(p=k,p=sn()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*xj(p/1960))-p,10<p){r.timeoutHandle=Sc(Ii.bind(null,r,Zn,_r),p);break}Ii(r,Zn,_r);break;case 5:Ii(r,Zn,_r);break;default:throw Error(t(329))}}}return et(r,sn()),r.callbackNode===c?ey.bind(null,r):null}function vd(r,a){var c=Os;return r.current.memoizedState.isDehydrated&&(Ri(r,a).flags|=256),r=Rl(r,a),r!==2&&(a=Zn,Zn=c,a!==null&&zd(a)),r}function zd(r){Zn===null?Zn=r:Zn.push.apply(Zn,r)}function jj(r){for(var a=r;;){if(a.flags&16384){var c=a.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var p=0;p<c.length;p++){var k=c[p],v=k.getSnapshot;k=k.value;try{if(!Dt(v(),k))return!1}catch{return!1}}}if(c=a.child,a.subtreeFlags&16384&&c!==null)c.return=a,a=c;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ei(r,a){for(a&=~pd,a&=~Cl,r.suspendedLanes|=a,r.pingedLanes&=~a,r=r.expirationTimes;0<a;){var c=31-Mt(a),p=1<<c;r[c]=-1,a&=~p}}function ny(r){if((Le&6)!==0)throw Error(t(327));Sa();var a=Vo(r,0);if((a&1)===0)return et(r,sn()),null;var c=Rl(r,a);if(r.tag!==0&&c===2){var p=Ju(r);p!==0&&(a=p,c=vd(r,p))}if(c===1)throw c=Ls,Ri(r,0),ei(r,a),et(r,sn()),c;if(c===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=a,Ii(r,Zn,_r),et(r,sn()),null}function bd(r,a){var c=Le;Le|=1;try{return r(a)}finally{Le=c,Le===0&&(ja=sn()+500,al&&Kr())}}function Pi(r){Jr!==null&&Jr.tag===0&&(Le&6)===0&&Sa();var a=Le;Le|=1;var c=wt.transition,p=Ve;try{if(wt.transition=null,Ve=1,r)return r()}finally{Ve=p,wt.transition=c,Le=a,(Le&6)===0&&Kr()}}function wd(){ct=xa.current,Ge(xa)}function Ri(r,a){r.finishedWork=null,r.finishedLanes=0;var c=r.timeoutHandle;if(c!==-1&&(r.timeoutHandle=-1,ej(c)),cn!==null)for(c=cn.return;c!==null;){var p=c;switch(Pc(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&rl();break;case 3:za(),Ge(Yn),Ge(Tn),Hc();break;case 5:Uc(p);break;case 4:za();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:Oc(p.type._context);break;case 22:case 23:wd()}c=c.return}if(zn=r,cn=r=ni(r.current,null),jn=ct=a,yn=0,Ls=null,pd=Cl=Ai=0,Zn=Os=null,_i!==null){for(a=0;a<_i.length;a++)if(c=_i[a],p=c.interleaved,p!==null){c.interleaved=null;var k=p.next,v=c.pending;if(v!==null){var j=v.next;v.next=k,p.next=j}c.pending=p}_i=null}return r}function ty(r,a){do{var c=cn;try{if(Lc(),pl.current=vl,gl){for(var p=en.memoizedState;p!==null;){var k=p.queue;k!==null&&(k.pending=null),p=p.next}gl=!1}if(Ei=0,vn=gn=en=null,As=!1,Ps=0,hd.current=null,c===null||c.return===null){yn=1,Ls=a,cn=null;break}e:{var v=r,j=c.return,A=c,M=a;if(a=jn,A.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var W=M,te=A,ie=te.tag;if((te.mode&1)===0&&(ie===0||ie===11||ie===15)){var ne=te.alternate;ne?(te.updateQueue=ne.updateQueue,te.memoizedState=ne.memoizedState,te.lanes=ne.lanes):(te.updateQueue=null,te.memoizedState=null)}var de=_g(j);if(de!==null){de.flags&=-257,Tg(de,j,A,v,a),de.mode&1&&Cg(v,W,a),a=de,M=W;var me=a.updateQueue;if(me===null){var he=new Set;he.add(M),a.updateQueue=he}else me.add(M);break e}else{if((a&1)===0){Cg(v,W,a),xd();break e}M=Error(t(426))}}else if(Xe&&A.mode&1){var on=_g(j);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Tg(on,j,A,v,a),Mc(ba(M,A));break e}}v=M=ba(M,A),yn!==4&&(yn=2),Os===null?Os=[v]:Os.push(v),v=j;do{switch(v.tag){case 3:v.flags|=65536,a&=-a,v.lanes|=a;var V=jg(v,M,a);Xp(v,V);break e;case 1:A=M;var N=v.type,U=v.stateNode;if((v.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(Xr===null||!Xr.has(U)))){v.flags|=65536,a&=-a,v.lanes|=a;var oe=Sg(v,A,a);Xp(v,oe);break e}}v=v.return}while(v!==null)}ay(c)}catch(pe){a=pe,cn===c&&c!==null&&(cn=c=c.return);continue}break}while(!0)}function ry(){var r=Sl.current;return Sl.current=vl,r===null?vl:r}function xd(){(yn===0||yn===3||yn===2)&&(yn=4),zn===null||(Ai&268435455)===0&&(Cl&268435455)===0||ei(zn,jn)}function Rl(r,a){var c=Le;Le|=2;var p=ry();(zn!==r||jn!==a)&&(_r=null,Ri(r,a));do try{Sj();break}catch(k){ty(r,k)}while(!0);if(Lc(),Le=c,Sl.current=p,cn!==null)throw Error(t(261));return zn=null,jn=0,yn}function Sj(){for(;cn!==null;)iy(cn)}function Cj(){for(;cn!==null&&!X0();)iy(cn)}function iy(r){var a=ly(r.alternate,r,ct);r.memoizedProps=r.pendingProps,a===null?ay(r):cn=a,hd.current=null}function ay(r){var a=r;do{var c=a.alternate;if(r=a.return,(a.flags&32768)===0){if(c=kj(c,a,ct),c!==null){cn=c;return}}else{if(c=vj(c,a),c!==null){c.flags&=32767,cn=c;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yn=6,cn=null;return}}if(a=a.sibling,a!==null){cn=a;return}cn=a=r}while(a!==null);yn===0&&(yn=5)}function Ii(r,a,c){var p=Ve,k=wt.transition;try{wt.transition=null,Ve=1,_j(r,a,c,p)}finally{wt.transition=k,Ve=p}return null}function _j(r,a,c,p){do Sa();while(Jr!==null);if((Le&6)!==0)throw Error(t(327));c=r.finishedWork;var k=r.finishedLanes;if(c===null)return null;if(r.finishedWork=null,r.finishedLanes=0,c===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var v=c.lanes|c.childLanes;if(o1(r,v),r===zn&&(cn=zn=null,jn=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Tl||(Tl=!0,uy(Lo,function(){return Sa(),null})),v=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||v){v=wt.transition,wt.transition=null;var j=Ve;Ve=1;var A=Le;Le|=4,hd.current=null,bj(r,c),Qg(c,r),K1(xc),$o=!!wc,xc=wc=null,r.current=c,wj(c),J0(),Le=A,Ve=j,wt.transition=v}else r.current=c;if(Tl&&(Tl=!1,Jr=r,El=k),v=r.pendingLanes,v===0&&(Xr=null),n1(c.stateNode),et(r,sn()),a!==null)for(p=r.onRecoverableError,c=0;c<a.length;c++)k=a[c],p(k.value,{componentStack:k.stack,digest:k.digest});if(_l)throw _l=!1,r=yd,yd=null,r;return(El&1)!==0&&r.tag!==0&&Sa(),v=r.pendingLanes,(v&1)!==0?r===kd?Ns++:(Ns=0,kd=r):Ns=0,Kr(),null}function Sa(){if(Jr!==null){var r=Kh(El),a=wt.transition,c=Ve;try{if(wt.transition=null,Ve=16>r?16:r,Jr===null)var p=!1;else{if(r=Jr,Jr=null,El=0,(Le&6)!==0)throw Error(t(331));var k=Le;for(Le|=4,fe=r.current;fe!==null;){var v=fe,j=v.child;if((fe.flags&16)!==0){var A=v.deletions;if(A!==null){for(var M=0;M<A.length;M++){var W=A[M];for(fe=W;fe!==null;){var te=fe;switch(te.tag){case 0:case 11:case 15:Ds(8,te,v)}var ie=te.child;if(ie!==null)ie.return=te,fe=ie;else for(;fe!==null;){te=fe;var ne=te.sibling,de=te.return;if(Hg(te),te===W){fe=null;break}if(ne!==null){ne.return=de,fe=ne;break}fe=de}}}var me=v.alternate;if(me!==null){var he=me.child;if(he!==null){me.child=null;do{var on=he.sibling;he.sibling=null,he=on}while(he!==null)}}fe=v}}if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,fe=j;else e:for(;fe!==null;){if(v=fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Ds(9,v,v.return)}var V=v.sibling;if(V!==null){V.return=v.return,fe=V;break e}fe=v.return}}var N=r.current;for(fe=N;fe!==null;){j=fe;var U=j.child;if((j.subtreeFlags&2064)!==0&&U!==null)U.return=j,fe=U;else e:for(j=N;fe!==null;){if(A=fe,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:jl(9,A)}}catch(pe){tn(A,A.return,pe)}if(A===j){fe=null;break e}var oe=A.sibling;if(oe!==null){oe.return=A.return,fe=oe;break e}fe=A.return}}if(Le=k,Kr(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Oo,r)}catch{}p=!0}return p}finally{Ve=c,wt.transition=a}}return!1}function sy(r,a,c){a=ba(c,a),a=jg(r,a,1),r=Qr(r,a,1),a=Un(),r!==null&&(ls(r,1,a),et(r,a))}function tn(r,a,c){if(r.tag===3)sy(r,r,c);else for(;a!==null;){if(a.tag===3){sy(a,r,c);break}else if(a.tag===1){var p=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(Xr===null||!Xr.has(p))){r=ba(c,r),r=Sg(a,r,1),a=Qr(a,r,1),r=Un(),a!==null&&(ls(a,1,r),et(a,r));break}}a=a.return}}function Tj(r,a,c){var p=r.pingCache;p!==null&&p.delete(a),a=Un(),r.pingedLanes|=r.suspendedLanes&c,zn===r&&(jn&c)===c&&(yn===4||yn===3&&(jn&130023424)===jn&&500>sn()-gd?Ri(r,0):pd|=c),et(r,a)}function oy(r,a){a===0&&((r.mode&1)===0?a=1:(a=Fo,Fo<<=1,(Fo&130023424)===0&&(Fo=4194304)));var c=Un();r=jr(r,a),r!==null&&(ls(r,a,c),et(r,c))}function Ej(r){var a=r.memoizedState,c=0;a!==null&&(c=a.retryLane),oy(r,c)}function Aj(r,a){var c=0;switch(r.tag){case 13:var p=r.stateNode,k=r.memoizedState;k!==null&&(c=k.retryLane);break;case 19:p=r.stateNode;break;default:throw Error(t(314))}p!==null&&p.delete(a),oy(r,c)}var ly;ly=function(r,a,c){if(r!==null)if(r.memoizedProps!==a.pendingProps||Yn.current)Jn=!0;else{if((r.lanes&c)===0&&(a.flags&128)===0)return Jn=!1,yj(r,a,c);Jn=(r.flags&131072)!==0}else Jn=!1,Xe&&(a.flags&1048576)!==0&&Bp(a,ol,a.index);switch(a.lanes=0,a.tag){case 2:var p=a.type;wl(r,a),r=a.pendingProps;var k=ma(a,Tn.current);va(a,c),k=Kc(null,a,p,r,k,c);var v=Gc();return a.flags|=1,typeof k=="object"&&k!==null&&typeof k.render=="function"&&k.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Xn(p)?(v=!0,il(a)):v=!1,a.memoizedState=k.state!==null&&k.state!==void 0?k.state:null,Vc(a),k.updater=zl,a.stateNode=k,k._reactInternals=a,ed(a,p,r,c),a=id(null,a,p,!0,v,c)):(a.tag=0,Xe&&v&&Ac(a),Bn(null,a,k,c),a=a.child),a;case 16:p=a.elementType;e:{switch(wl(r,a),r=a.pendingProps,k=p._init,p=k(p._payload),a.type=p,k=a.tag=Rj(p),r=Ot(p,r),k){case 0:a=rd(null,a,p,r,c);break e;case 1:a=Mg(null,a,p,r,c);break e;case 11:a=Eg(null,a,p,r,c);break e;case 14:a=Ag(null,a,p,Ot(p.type,r),c);break e}throw Error(t(306,p,""))}return a;case 0:return p=a.type,k=a.pendingProps,k=a.elementType===p?k:Ot(p,k),rd(r,a,p,k,c);case 1:return p=a.type,k=a.pendingProps,k=a.elementType===p?k:Ot(p,k),Mg(r,a,p,k,c);case 3:e:{if(Dg(a),r===null)throw Error(t(387));p=a.pendingProps,v=a.memoizedState,k=v.element,Yp(r,a),ml(a,p,null,c);var j=a.memoizedState;if(p=j.element,v.isDehydrated)if(v={element:p,isDehydrated:!1,cache:j.cache,pendingSuspenseBoundaries:j.pendingSuspenseBoundaries,transitions:j.transitions},a.updateQueue.baseState=v,a.memoizedState=v,a.flags&256){k=ba(Error(t(423)),a),a=Lg(r,a,p,c,k);break e}else if(p!==k){k=ba(Error(t(424)),a),a=Lg(r,a,p,c,k);break e}else for(ut=Hr(a.stateNode.containerInfo.firstChild),lt=a,Xe=!0,Lt=null,c=Gp(a,null,p,c),a.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(ga(),p===k){a=Cr(r,a,c);break e}Bn(r,a,p,c)}a=a.child}return a;case 5:return Zp(a),r===null&&Ic(a),p=a.type,k=a.pendingProps,v=r!==null?r.memoizedProps:null,j=k.children,jc(p,k)?j=null:v!==null&&jc(p,v)&&(a.flags|=32),Ig(r,a),Bn(r,a,j,c),a.child;case 6:return r===null&&Ic(a),null;case 13:return Og(r,a,c);case 4:return Bc(a,a.stateNode.containerInfo),p=a.pendingProps,r===null?a.child=ya(a,null,p,c):Bn(r,a,p,c),a.child;case 11:return p=a.type,k=a.pendingProps,k=a.elementType===p?k:Ot(p,k),Eg(r,a,p,k,c);case 7:return Bn(r,a,a.pendingProps,c),a.child;case 8:return Bn(r,a,a.pendingProps.children,c),a.child;case 12:return Bn(r,a,a.pendingProps.children,c),a.child;case 10:e:{if(p=a.type._context,k=a.pendingProps,v=a.memoizedProps,j=k.value,He(cl,p._currentValue),p._currentValue=j,v!==null)if(Dt(v.value,j)){if(v.children===k.children&&!Yn.current){a=Cr(r,a,c);break e}}else for(v=a.child,v!==null&&(v.return=a);v!==null;){var A=v.dependencies;if(A!==null){j=v.child;for(var M=A.firstContext;M!==null;){if(M.context===p){if(v.tag===1){M=Sr(-1,c&-c),M.tag=2;var W=v.updateQueue;if(W!==null){W=W.shared;var te=W.pending;te===null?M.next=M:(M.next=te.next,te.next=M),W.pending=M}}v.lanes|=c,M=v.alternate,M!==null&&(M.lanes|=c),Nc(v.return,c,a),A.lanes|=c;break}M=M.next}}else if(v.tag===10)j=v.type===a.type?null:v.child;else if(v.tag===18){if(j=v.return,j===null)throw Error(t(341));j.lanes|=c,A=j.alternate,A!==null&&(A.lanes|=c),Nc(j,c,a),j=v.sibling}else j=v.child;if(j!==null)j.return=v;else for(j=v;j!==null;){if(j===a){j=null;break}if(v=j.sibling,v!==null){v.return=j.return,j=v;break}j=j.return}v=j}Bn(r,a,k.children,c),a=a.child}return a;case 9:return k=a.type,p=a.pendingProps.children,va(a,c),k=zt(k),p=p(k),a.flags|=1,Bn(r,a,p,c),a.child;case 14:return p=a.type,k=Ot(p,a.pendingProps),k=Ot(p.type,k),Ag(r,a,p,k,c);case 15:return Pg(r,a,a.type,a.pendingProps,c);case 17:return p=a.type,k=a.pendingProps,k=a.elementType===p?k:Ot(p,k),wl(r,a),a.tag=1,Xn(p)?(r=!0,il(a)):r=!1,va(a,c),wg(a,p,k),ed(a,p,k,c),id(null,a,p,!0,r,c);case 19:return Fg(r,a,c);case 22:return Rg(r,a,c)}throw Error(t(156,a.tag))};function uy(r,a){return Uh(r,a)}function Pj(r,a,c,p){this.tag=r,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(r,a,c,p){return new Pj(r,a,c,p)}function jd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Rj(r){if(typeof r=="function")return jd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===G)return 11;if(r===re)return 14}return 2}function ni(r,a){var c=r.alternate;return c===null?(c=xt(r.tag,a,r.key,r.mode),c.elementType=r.elementType,c.type=r.type,c.stateNode=r.stateNode,c.alternate=r,r.alternate=c):(c.pendingProps=a,c.type=r.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=r.flags&14680064,c.childLanes=r.childLanes,c.lanes=r.lanes,c.child=r.child,c.memoizedProps=r.memoizedProps,c.memoizedState=r.memoizedState,c.updateQueue=r.updateQueue,a=r.dependencies,c.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},c.sibling=r.sibling,c.index=r.index,c.ref=r.ref,c}function Il(r,a,c,p,k,v){var j=2;if(p=r,typeof r=="function")jd(r)&&(j=1);else if(typeof r=="string")j=5;else e:switch(r){case $:return Mi(c.children,k,v,a);case Y:j=8,k|=8;break;case K:return r=xt(12,c,a,k|2),r.elementType=K,r.lanes=v,r;case ee:return r=xt(13,c,a,k),r.elementType=ee,r.lanes=v,r;case B:return r=xt(19,c,a,k),r.elementType=B,r.lanes=v,r;case X:return Ml(c,k,v,a);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case L:j=10;break e;case Z:j=9;break e;case G:j=11;break e;case re:j=14;break e;case ue:j=16,p=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return a=xt(j,c,a,k),a.elementType=r,a.type=p,a.lanes=v,a}function Mi(r,a,c,p){return r=xt(7,r,p,a),r.lanes=c,r}function Ml(r,a,c,p){return r=xt(22,r,p,a),r.elementType=X,r.lanes=c,r.stateNode={isHidden:!1},r}function Sd(r,a,c){return r=xt(6,r,null,a),r.lanes=c,r}function Cd(r,a,c){return a=xt(4,r.children!==null?r.children:[],r.key,a),a.lanes=c,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}function Ij(r,a,c,p,k){this.tag=a,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=p,this.onRecoverableError=k,this.mutableSourceEagerHydrationData=null}function _d(r,a,c,p,k,v,j,A,M){return r=new Ij(r,a,c,A,M),a===1?(a=1,v===!0&&(a|=8)):a=0,v=xt(3,null,null,a),r.current=v,v.stateNode=r,v.memoizedState={element:p,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(v),r}function Mj(r,a,c){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:p==null?null:""+p,children:r,containerInfo:a,implementation:c}}function cy(r){if(!r)return qr;r=r._reactInternals;e:{if(wi(r)!==r||r.tag!==1)throw Error(t(170));var a=r;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Xn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(r.tag===1){var c=r.type;if(Xn(c))return Np(r,c,a)}return a}function dy(r,a,c,p,k,v,j,A,M){return r=_d(c,p,!0,r,k,v,j,A,M),r.context=cy(null),c=r.current,p=Un(),k=Zr(c),v=Sr(p,k),v.callback=a??null,Qr(c,v,k),r.current.lanes=k,ls(r,k,p),et(r,p),r}function Dl(r,a,c,p){var k=a.current,v=Un(),j=Zr(k);return c=cy(c),a.context===null?a.context=c:a.pendingContext=c,a=Sr(v,j),a.payload={element:r},p=p===void 0?null:p,p!==null&&(a.callback=p),r=Qr(k,a,j),r!==null&&(Vt(r,k,j,v),fl(r,k,j)),j}function Ll(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function fy(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var c=r.retryLane;r.retryLane=c!==0&&c<a?c:a}}function Td(r,a){fy(r,a),(r=r.alternate)&&fy(r,a)}function Dj(){return null}var my=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ed(r){this._internalRoot=r}Ol.prototype.render=Ed.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(t(409));Dl(r,a,null,null)},Ol.prototype.unmount=Ed.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;Pi(function(){Dl(null,r,null,null)}),a[zr]=null}};function Ol(r){this._internalRoot=r}Ol.prototype.unstable_scheduleHydration=function(r){if(r){var a=Yh();r={blockedOn:null,target:r,priority:a};for(var c=0;c<Br.length&&a!==0&&a<Br[c].priority;c++);Br.splice(c,0,r),c===0&&Zh(r)}};function Ad(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Nl(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function hy(){}function Lj(r,a,c,p,k){if(k){if(typeof p=="function"){var v=p;p=function(){var W=Ll(j);v.call(W)}}var j=dy(a,p,r,0,null,!1,!1,"",hy);return r._reactRootContainer=j,r[zr]=j.current,ws(r.nodeType===8?r.parentNode:r),Pi(),j}for(;k=r.lastChild;)r.removeChild(k);if(typeof p=="function"){var A=p;p=function(){var W=Ll(M);A.call(W)}}var M=_d(r,0,!1,null,null,!1,!1,"",hy);return r._reactRootContainer=M,r[zr]=M.current,ws(r.nodeType===8?r.parentNode:r),Pi(function(){Dl(a,M,c,p)}),M}function Fl(r,a,c,p,k){var v=c._reactRootContainer;if(v){var j=v;if(typeof k=="function"){var A=k;k=function(){var M=Ll(j);A.call(M)}}Dl(a,j,r,k)}else j=Lj(c,a,r,k,p);return Ll(j)}Gh=function(r){switch(r.tag){case 3:var a=r.stateNode;if(a.current.memoizedState.isDehydrated){var c=os(a.pendingLanes);c!==0&&(ec(a,c|1),et(a,sn()),(Le&6)===0&&(ja=sn()+500,Kr()))}break;case 13:Pi(function(){var p=jr(r,1);if(p!==null){var k=Un();Vt(p,r,1,k)}}),Td(r,1)}},nc=function(r){if(r.tag===13){var a=jr(r,134217728);if(a!==null){var c=Un();Vt(a,r,134217728,c)}Td(r,134217728)}},Qh=function(r){if(r.tag===13){var a=Zr(r),c=jr(r,a);if(c!==null){var p=Un();Vt(c,r,a,p)}Td(r,a)}},Yh=function(){return Ve},Xh=function(r,a){var c=Ve;try{return Ve=r,a()}finally{Ve=c}},ra=function(r,a,c){switch(a){case"input":if(Xt(r,c),a=c.name,c.type==="radio"&&a!=null){for(c=r;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<c.length;a++){var p=c[a];if(p!==r&&p.form===r.form){var k=tl(p);if(!k)throw Error(t(90));At(p),Xt(p,k)}}}break;case"textarea":ea(r,c);break;case"select":a=c.value,a!=null&&Kn(r,!!c.multiple,a,!1)}},Fe=bd,Ue=Pi;var Oj={usingClientEntryPoint:!1,Events:[Ss,da,tl,Io,Se,bd]},Fs={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nj={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Vh(r),r===null?null:r.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||Dj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Oo=Vl.inject(Nj),tr=Vl}catch{}}return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oj,nt.createPortal=function(r,a){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(a))throw Error(t(200));return Mj(r,a,null,c)},nt.createRoot=function(r,a){if(!Ad(r))throw Error(t(299));var c=!1,p="",k=my;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(k=a.onRecoverableError)),a=_d(r,1,!1,null,null,c,!1,p,k),r[zr]=a.current,ws(r.nodeType===8?r.parentNode:r),new Ed(a)},nt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Vh(a),r=r===null?null:r.stateNode,r},nt.flushSync=function(r){return Pi(r)},nt.hydrate=function(r,a,c){if(!Nl(a))throw Error(t(200));return Fl(null,r,a,!0,c)},nt.hydrateRoot=function(r,a,c){if(!Ad(r))throw Error(t(405));var p=c!=null&&c.hydratedSources||null,k=!1,v="",j=my;if(c!=null&&(c.unstable_strictMode===!0&&(k=!0),c.identifierPrefix!==void 0&&(v=c.identifierPrefix),c.onRecoverableError!==void 0&&(j=c.onRecoverableError)),a=dy(a,null,r,1,c??null,k,!1,v,j),r[zr]=a.current,ws(r),p)for(r=0;r<p.length;r++)c=p[r],k=c._getVersion,k=k(c._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[c,k]:a.mutableSourceEagerHydrationData.push(c,k);return new Ol(a)},nt.render=function(r,a,c){if(!Nl(a))throw Error(t(200));return Fl(null,r,a,!1,c)},nt.unmountComponentAtNode=function(r){if(!Nl(r))throw Error(t(40));return r._reactRootContainer?(Pi(function(){Fl(null,null,r,!1,function(){r._reactRootContainer=null,r[zr]=null})}),!0):!1},nt.unstable_batchedUpdates=bd,nt.unstable_renderSubtreeIntoContainer=function(r,a,c,p){if(!Nl(c))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Fl(r,a,c,!1,p)},nt.version="18.3.1-next-f1338f8080-20240426",nt}var xy;function kz(){if(xy)return Md.exports;xy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Md.exports=qj(),Md.exports}var jy;function Kj(){if(jy)return Ul;jy=1;var e=kz();return Ul.createRoot=e.createRoot,Ul.hydrateRoot=e.hydrateRoot,Ul}var Gj=Kj(),_=vm();const le=Tu(_),Qj=Vj({__proto__:null,default:le},[_]),Yj=1,Xj=1e6;let Od=0;function Jj(){return Od=(Od+1)%Number.MAX_SAFE_INTEGER,Od.toString()}const Nd=new Map,Sy=e=>{if(Nd.has(e))return;const n=setTimeout(()=>{Nd.delete(e),Ys({type:"REMOVE_TOAST",toastId:e})},Xj);Nd.set(e,n)},Zj=(e,n)=>{switch(n.type){case"ADD_TOAST":return{...e,toasts:[n.toast,...e.toasts].slice(0,Yj)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(t=>t.id===n.toast.id?{...t,...n.toast}:t)};case"DISMISS_TOAST":{const{toastId:t}=n;return t?Sy(t):e.toasts.forEach(i=>{Sy(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===t||t===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return n.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(t=>t.id!==n.toastId)}}},nu=[];let tu={toasts:[]};function Ys(e){tu=Zj(tu,e),nu.forEach(n=>{n(tu)})}function eS({...e}){const n=Jj(),t=s=>Ys({type:"UPDATE_TOAST",toast:{...s,id:n}}),i=()=>Ys({type:"DISMISS_TOAST",toastId:n});return Ys({type:"ADD_TOAST",toast:{...e,id:n,open:!0,onOpenChange:s=>{s||i()}}}),{id:n,dismiss:i,update:t}}function vz(){const[e,n]=_.useState(tu);return _.useEffect(()=>(nu.push(n),()=>{const t=nu.indexOf(n);t>-1&&nu.splice(t,1)}),[e]),{...e,toast:eS,dismiss:t=>Ys({type:"DISMISS_TOAST",toastId:t})}}var Eu=kz();const zz=Tu(Eu);function mn(e,n,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return n==null?void 0:n(s)}}function Cy(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function bz(...e){return n=>{let t=!1;const i=e.map(s=>{const l=Cy(s,n);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let s=0;s<i.length;s++){const l=i[s];typeof l=="function"?l():Cy(e[s],null)}}}}function Et(...e){return _.useCallback(bz(...e),e)}function wo(e,n=[]){let t=[];function i(l,o){const d=_.createContext(o),f=t.length;t=[...t,o];const m=u=>{var w;const{scope:h,children:g,...z}=u,b=((w=h==null?void 0:h[e])==null?void 0:w[f])||d,x=_.useMemo(()=>z,Object.values(z));return O.jsx(b.Provider,{value:x,children:g})};m.displayName=l+"Provider";function y(u,h){var b;const g=((b=h==null?void 0:h[e])==null?void 0:b[f])||d,z=_.useContext(g);if(z)return z;if(o!==void 0)return o;throw new Error(`\`${u}\` must be used within \`${l}\``)}return[m,y]}const s=()=>{const l=t.map(o=>_.createContext(o));return function(d){const f=(d==null?void 0:d[e])||l;return _.useMemo(()=>({[`__scope${e}`]:{...d,[e]:f}}),[d,f])}};return s.scopeName=e,[i,nS(s,...n)]}function nS(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const i=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(l){const o=i.reduce((d,{useScope:f,scopeName:m})=>{const u=f(l)[`__scope${m}`];return{...d,...u}},{});return _.useMemo(()=>({[`__scope${n.scopeName}`]:o}),[o])}};return t.scopeName=n.scopeName,t}function fu(e){const n=rS(e),t=_.forwardRef((i,s)=>{const{children:l,...o}=i,d=_.Children.toArray(l),f=d.find(aS);if(f){const m=f.props.children,y=d.map(u=>u===f?_.Children.count(m)>1?_.Children.only(null):_.isValidElement(m)?m.props.children:null:u);return O.jsx(n,{...o,ref:s,children:_.isValidElement(m)?_.cloneElement(m,void 0,y):null})}return O.jsx(n,{...o,ref:s,children:l})});return t.displayName=`${e}.Slot`,t}var tS=fu("Slot");function rS(e){const n=_.forwardRef((t,i)=>{const{children:s,...l}=t;if(_.isValidElement(s)){const o=oS(s),d=sS(l,s.props);return s.type!==_.Fragment&&(d.ref=i?bz(i,o):o),_.cloneElement(s,d)}return _.Children.count(s)>1?_.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var wz=Symbol("radix.slottable");function iS(e){const n=({children:t})=>O.jsx(O.Fragment,{children:t});return n.displayName=`${e}.Slottable`,n.__radixId=wz,n}function aS(e){return _.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===wz}function sS(e,n){const t={...n};for(const i in n){const s=e[i],l=n[i];/^on[A-Z]/.test(i)?s&&l?t[i]=(...d)=>{l(...d),s(...d)}:s&&(t[i]=s):i==="style"?t[i]={...s,...l}:i==="className"&&(t[i]=[s,l].filter(Boolean).join(" "))}return{...e,...t}}function oS(e){var i,s;let n=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function lS(e){const n=e+"CollectionProvider",[t,i]=wo(n),[s,l]=t(n,{collectionRef:{current:null},itemMap:new Map}),o=b=>{const{scope:x,children:w}=b,S=le.useRef(null),C=le.useRef(new Map).current;return O.jsx(s,{scope:x,itemMap:C,collectionRef:S,children:w})};o.displayName=n;const d=e+"CollectionSlot",f=fu(d),m=le.forwardRef((b,x)=>{const{scope:w,children:S}=b,C=l(d,w),R=Et(x,C.collectionRef);return O.jsx(f,{ref:R,children:S})});m.displayName=d;const y=e+"CollectionItemSlot",u="data-radix-collection-item",h=fu(y),g=le.forwardRef((b,x)=>{const{scope:w,children:S,...C}=b,R=le.useRef(null),D=Et(x,R),P=l(y,w);return le.useEffect(()=>(P.itemMap.set(R,{ref:R,...C}),()=>void P.itemMap.delete(R))),O.jsx(h,{[u]:"",ref:D,children:S})});g.displayName=y;function z(b){const x=l(e+"CollectionConsumer",b);return le.useCallback(()=>{const S=x.collectionRef.current;if(!S)return[];const C=Array.from(S.querySelectorAll(`[${u}]`));return Array.from(x.itemMap.values()).sort((P,$)=>C.indexOf(P.ref.current)-C.indexOf($.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:o,Slot:m,ItemSlot:g},z,i]}var uS=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Cn=uS.reduce((e,n)=>{const t=fu(`Primitive.${n}`),i=_.forwardRef((s,l)=>{const{asChild:o,...d}=s,f=o?t:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),O.jsx(f,{...d,ref:l})});return i.displayName=`Primitive.${n}`,{...e,[n]:i}},{});function xz(e,n){e&&Eu.flushSync(()=>e.dispatchEvent(n))}function pr(e){const n=_.useRef(e);return _.useEffect(()=>{n.current=e}),_.useMemo(()=>(...t)=>{var i;return(i=n.current)==null?void 0:i.call(n,...t)},[])}function cS(e,n=globalThis==null?void 0:globalThis.document){const t=pr(e);_.useEffect(()=>{const i=s=>{s.key==="Escape"&&t(s)};return n.addEventListener("keydown",i,{capture:!0}),()=>n.removeEventListener("keydown",i,{capture:!0})},[t,n])}var dS="DismissableLayer",jf="dismissableLayer.update",fS="dismissableLayer.pointerDownOutside",mS="dismissableLayer.focusOutside",_y,jz=_.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),zm=_.forwardRef((e,n)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:l,onInteractOutside:o,onDismiss:d,...f}=e,m=_.useContext(jz),[y,u]=_.useState(null),h=(y==null?void 0:y.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,g]=_.useState({}),z=Et(n,$=>u($)),b=Array.from(m.layers),[x]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),w=b.indexOf(x),S=y?b.indexOf(y):-1,C=m.layersWithOutsidePointerEventsDisabled.size>0,R=S>=w,D=pS($=>{const Y=$.target,K=[...m.branches].some(L=>L.contains(Y));!R||K||(s==null||s($),o==null||o($),$.defaultPrevented||d==null||d())},h),P=gS($=>{const Y=$.target;[...m.branches].some(L=>L.contains(Y))||(l==null||l($),o==null||o($),$.defaultPrevented||d==null||d())},h);return cS($=>{S===m.layers.size-1&&(i==null||i($),!$.defaultPrevented&&d&&($.preventDefault(),d()))},h),_.useEffect(()=>{if(y)return t&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(_y=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(y)),m.layers.add(y),Ty(),()=>{t&&m.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=_y)}},[y,h,t,m]),_.useEffect(()=>()=>{y&&(m.layers.delete(y),m.layersWithOutsidePointerEventsDisabled.delete(y),Ty())},[y,m]),_.useEffect(()=>{const $=()=>g({});return document.addEventListener(jf,$),()=>document.removeEventListener(jf,$)},[]),O.jsx(Cn.div,{...f,ref:z,style:{pointerEvents:C?R?"auto":"none":void 0,...e.style},onFocusCapture:mn(e.onFocusCapture,P.onFocusCapture),onBlurCapture:mn(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:mn(e.onPointerDownCapture,D.onPointerDownCapture)})});zm.displayName=dS;var hS="DismissableLayerBranch",Sz=_.forwardRef((e,n)=>{const t=_.useContext(jz),i=_.useRef(null),s=Et(n,i);return _.useEffect(()=>{const l=i.current;if(l)return t.branches.add(l),()=>{t.branches.delete(l)}},[t.branches]),O.jsx(Cn.div,{...e,ref:s})});Sz.displayName=hS;function pS(e,n=globalThis==null?void 0:globalThis.document){const t=pr(e),i=_.useRef(!1),s=_.useRef(()=>{});return _.useEffect(()=>{const l=d=>{if(d.target&&!i.current){let f=function(){Cz(fS,t,m,{discrete:!0})};const m={originalEvent:d};d.pointerType==="touch"?(n.removeEventListener("click",s.current),s.current=f,n.addEventListener("click",s.current,{once:!0})):f()}else n.removeEventListener("click",s.current);i.current=!1},o=window.setTimeout(()=>{n.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(o),n.removeEventListener("pointerdown",l),n.removeEventListener("click",s.current)}},[n,t]),{onPointerDownCapture:()=>i.current=!0}}function gS(e,n=globalThis==null?void 0:globalThis.document){const t=pr(e),i=_.useRef(!1);return _.useEffect(()=>{const s=l=>{l.target&&!i.current&&Cz(mS,t,{originalEvent:l},{discrete:!1})};return n.addEventListener("focusin",s),()=>n.removeEventListener("focusin",s)},[n,t]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Ty(){const e=new CustomEvent(jf);document.dispatchEvent(e)}function Cz(e,n,t,{discrete:i}){const s=t.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&s.addEventListener(e,n,{once:!0}),i?xz(s,l):s.dispatchEvent(l)}var yS=zm,kS=Sz,Ki=globalThis!=null&&globalThis.document?_.useLayoutEffect:()=>{},vS="Portal",_z=_.forwardRef((e,n)=>{var d;const{container:t,...i}=e,[s,l]=_.useState(!1);Ki(()=>l(!0),[]);const o=t||s&&((d=globalThis==null?void 0:globalThis.document)==null?void 0:d.body);return o?zz.createPortal(O.jsx(Cn.div,{...i,ref:n}),o):null});_z.displayName=vS;function zS(e,n){return _.useReducer((t,i)=>n[t][i]??t,e)}var bm=e=>{const{present:n,children:t}=e,i=bS(n),s=typeof t=="function"?t({present:i.isPresent}):_.Children.only(t),l=Et(i.ref,wS(s));return typeof t=="function"||i.isPresent?_.cloneElement(s,{ref:l}):null};bm.displayName="Presence";function bS(e){const[n,t]=_.useState(),i=_.useRef({}),s=_.useRef(e),l=_.useRef("none"),o=e?"mounted":"unmounted",[d,f]=zS(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return _.useEffect(()=>{const m=$l(i.current);l.current=d==="mounted"?m:"none"},[d]),Ki(()=>{const m=i.current,y=s.current;if(y!==e){const h=l.current,g=$l(m);e?f("MOUNT"):g==="none"||(m==null?void 0:m.display)==="none"?f("UNMOUNT"):f(y&&h!==g?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,f]),Ki(()=>{if(n){let m;const y=n.ownerDocument.defaultView??window,u=g=>{const b=$l(i.current).includes(g.animationName);if(g.target===n&&b&&(f("ANIMATION_END"),!s.current)){const x=n.style.animationFillMode;n.style.animationFillMode="forwards",m=y.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=x)})}},h=g=>{g.target===n&&(l.current=$l(i.current))};return n.addEventListener("animationstart",h),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{y.clearTimeout(m),n.removeEventListener("animationstart",h),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:_.useCallback(m=>{m&&(i.current=getComputedStyle(m)),t(m)},[])}}function $l(e){return(e==null?void 0:e.animationName)||"none"}function wS(e){var i,s;let n=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function Tz({prop:e,defaultProp:n,onChange:t=()=>{}}){const[i,s]=xS({defaultProp:n,onChange:t}),l=e!==void 0,o=l?e:i,d=pr(t),f=_.useCallback(m=>{if(l){const u=typeof m=="function"?m(e):m;u!==e&&d(u)}else s(m)},[l,e,s,d]);return[o,f]}function xS({defaultProp:e,onChange:n}){const t=_.useState(e),[i]=t,s=_.useRef(i),l=pr(n);return _.useEffect(()=>{s.current!==i&&(l(i),s.current=i)},[i,s,l]),t}var jS="VisuallyHidden",Au=_.forwardRef((e,n)=>O.jsx(Cn.span,{...e,ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Au.displayName=jS;var SS=Au,wm="ToastProvider",[xm,CS,_S]=lS("Toast"),[Ez,nV]=wo("Toast",[_S]),[TS,Pu]=Ez(wm),Az=e=>{const{__scopeToast:n,label:t="Notification",duration:i=5e3,swipeDirection:s="right",swipeThreshold:l=50,children:o}=e,[d,f]=_.useState(null),[m,y]=_.useState(0),u=_.useRef(!1),h=_.useRef(!1);return t.trim()||console.error(`Invalid prop \`label\` supplied to \`${wm}\`. Expected non-empty \`string\`.`),O.jsx(xm.Provider,{scope:n,children:O.jsx(TS,{scope:n,label:t,duration:i,swipeDirection:s,swipeThreshold:l,toastCount:m,viewport:d,onViewportChange:f,onToastAdd:_.useCallback(()=>y(g=>g+1),[]),onToastRemove:_.useCallback(()=>y(g=>g-1),[]),isFocusedToastEscapeKeyDownRef:u,isClosePausedRef:h,children:o})})};Az.displayName=wm;var Pz="ToastViewport",ES=["F8"],Sf="toast.viewportPause",Cf="toast.viewportResume",Rz=_.forwardRef((e,n)=>{const{__scopeToast:t,hotkey:i=ES,label:s="Notifications ({hotkey})",...l}=e,o=Pu(Pz,t),d=CS(t),f=_.useRef(null),m=_.useRef(null),y=_.useRef(null),u=_.useRef(null),h=Et(n,u,o.onViewportChange),g=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),z=o.toastCount>0;_.useEffect(()=>{const x=w=>{var C;i.length!==0&&i.every(R=>w[R]||w.code===R)&&((C=u.current)==null||C.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[i]),_.useEffect(()=>{const x=f.current,w=u.current;if(z&&x&&w){const S=()=>{if(!o.isClosePausedRef.current){const P=new CustomEvent(Sf);w.dispatchEvent(P),o.isClosePausedRef.current=!0}},C=()=>{if(o.isClosePausedRef.current){const P=new CustomEvent(Cf);w.dispatchEvent(P),o.isClosePausedRef.current=!1}},R=P=>{!x.contains(P.relatedTarget)&&C()},D=()=>{x.contains(document.activeElement)||C()};return x.addEventListener("focusin",S),x.addEventListener("focusout",R),x.addEventListener("pointermove",S),x.addEventListener("pointerleave",D),window.addEventListener("blur",S),window.addEventListener("focus",C),()=>{x.removeEventListener("focusin",S),x.removeEventListener("focusout",R),x.removeEventListener("pointermove",S),x.removeEventListener("pointerleave",D),window.removeEventListener("blur",S),window.removeEventListener("focus",C)}}},[z,o.isClosePausedRef]);const b=_.useCallback(({tabbingDirection:x})=>{const S=d().map(C=>{const R=C.ref.current,D=[R,...US(R)];return x==="forwards"?D:D.reverse()});return(x==="forwards"?S.reverse():S).flat()},[d]);return _.useEffect(()=>{const x=u.current;if(x){const w=S=>{var D,P,$;const C=S.altKey||S.ctrlKey||S.metaKey;if(S.key==="Tab"&&!C){const Y=document.activeElement,K=S.shiftKey;if(S.target===x&&K){(D=m.current)==null||D.focus();return}const G=b({tabbingDirection:K?"backwards":"forwards"}),ee=G.findIndex(B=>B===Y);Fd(G.slice(ee+1))?S.preventDefault():K?(P=m.current)==null||P.focus():($=y.current)==null||$.focus()}};return x.addEventListener("keydown",w),()=>x.removeEventListener("keydown",w)}},[d,b]),O.jsxs(kS,{ref:f,role:"region","aria-label":s.replace("{hotkey}",g),tabIndex:-1,style:{pointerEvents:z?void 0:"none"},children:[z&&O.jsx(_f,{ref:m,onFocusFromOutsideViewport:()=>{const x=b({tabbingDirection:"forwards"});Fd(x)}}),O.jsx(xm.Slot,{scope:t,children:O.jsx(Cn.ol,{tabIndex:-1,...l,ref:h})}),z&&O.jsx(_f,{ref:y,onFocusFromOutsideViewport:()=>{const x=b({tabbingDirection:"backwards"});Fd(x)}})]})});Rz.displayName=Pz;var Iz="ToastFocusProxy",_f=_.forwardRef((e,n)=>{const{__scopeToast:t,onFocusFromOutsideViewport:i,...s}=e,l=Pu(Iz,t);return O.jsx(Au,{"aria-hidden":!0,tabIndex:0,...s,ref:n,style:{position:"fixed"},onFocus:o=>{var m;const d=o.relatedTarget;!((m=l.viewport)!=null&&m.contains(d))&&i()}})});_f.displayName=Iz;var Ru="Toast",AS="toast.swipeStart",PS="toast.swipeMove",RS="toast.swipeCancel",IS="toast.swipeEnd",Mz=_.forwardRef((e,n)=>{const{forceMount:t,open:i,defaultOpen:s,onOpenChange:l,...o}=e,[d=!0,f]=Tz({prop:i,defaultProp:s,onChange:l});return O.jsx(bm,{present:t||d,children:O.jsx(LS,{open:d,...o,ref:n,onClose:()=>f(!1),onPause:pr(e.onPause),onResume:pr(e.onResume),onSwipeStart:mn(e.onSwipeStart,m=>{m.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:mn(e.onSwipeMove,m=>{const{x:y,y:u}=m.detail.delta;m.currentTarget.setAttribute("data-swipe","move"),m.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${y}px`),m.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${u}px`)}),onSwipeCancel:mn(e.onSwipeCancel,m=>{m.currentTarget.setAttribute("data-swipe","cancel"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:mn(e.onSwipeEnd,m=>{const{x:y,y:u}=m.detail.delta;m.currentTarget.setAttribute("data-swipe","end"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),m.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${y}px`),m.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${u}px`),f(!1)})})})});Mz.displayName=Ru;var[MS,DS]=Ez(Ru,{onClose(){}}),LS=_.forwardRef((e,n)=>{const{__scopeToast:t,type:i="foreground",duration:s,open:l,onClose:o,onEscapeKeyDown:d,onPause:f,onResume:m,onSwipeStart:y,onSwipeMove:u,onSwipeCancel:h,onSwipeEnd:g,...z}=e,b=Pu(Ru,t),[x,w]=_.useState(null),S=Et(n,B=>w(B)),C=_.useRef(null),R=_.useRef(null),D=s||b.duration,P=_.useRef(0),$=_.useRef(D),Y=_.useRef(0),{onToastAdd:K,onToastRemove:L}=b,Z=pr(()=>{var re;(x==null?void 0:x.contains(document.activeElement))&&((re=b.viewport)==null||re.focus()),o()}),G=_.useCallback(B=>{!B||B===1/0||(window.clearTimeout(Y.current),P.current=new Date().getTime(),Y.current=window.setTimeout(Z,B))},[Z]);_.useEffect(()=>{const B=b.viewport;if(B){const re=()=>{G($.current),m==null||m()},ue=()=>{const X=new Date().getTime()-P.current;$.current=$.current-X,window.clearTimeout(Y.current),f==null||f()};return B.addEventListener(Sf,ue),B.addEventListener(Cf,re),()=>{B.removeEventListener(Sf,ue),B.removeEventListener(Cf,re)}}},[b.viewport,D,f,m,G]),_.useEffect(()=>{l&&!b.isClosePausedRef.current&&G(D)},[l,D,b.isClosePausedRef,G]),_.useEffect(()=>(K(),()=>L()),[K,L]);const ee=_.useMemo(()=>x?Bz(x):null,[x]);return b.viewport?O.jsxs(O.Fragment,{children:[ee&&O.jsx(OS,{__scopeToast:t,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:ee}),O.jsx(MS,{scope:t,onClose:Z,children:Eu.createPortal(O.jsx(xm.ItemSlot,{scope:t,children:O.jsx(yS,{asChild:!0,onEscapeKeyDown:mn(d,()=>{b.isFocusedToastEscapeKeyDownRef.current||Z(),b.isFocusedToastEscapeKeyDownRef.current=!1}),children:O.jsx(Cn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":b.swipeDirection,...z,ref:S,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:mn(e.onKeyDown,B=>{B.key==="Escape"&&(d==null||d(B.nativeEvent),B.nativeEvent.defaultPrevented||(b.isFocusedToastEscapeKeyDownRef.current=!0,Z()))}),onPointerDown:mn(e.onPointerDown,B=>{B.button===0&&(C.current={x:B.clientX,y:B.clientY})}),onPointerMove:mn(e.onPointerMove,B=>{if(!C.current)return;const re=B.clientX-C.current.x,ue=B.clientY-C.current.y,X=!!R.current,F=["left","right"].includes(b.swipeDirection),q=["left","up"].includes(b.swipeDirection)?Math.min:Math.max,T=F?q(0,re):0,I=F?0:q(0,ue),H=B.pointerType==="touch"?10:2,E={x:T,y:I},ce={originalEvent:B,delta:E};X?(R.current=E,Hl(PS,u,ce,{discrete:!1})):Ey(E,b.swipeDirection,H)?(R.current=E,Hl(AS,y,ce,{discrete:!1}),B.target.setPointerCapture(B.pointerId)):(Math.abs(re)>H||Math.abs(ue)>H)&&(C.current=null)}),onPointerUp:mn(e.onPointerUp,B=>{const re=R.current,ue=B.target;if(ue.hasPointerCapture(B.pointerId)&&ue.releasePointerCapture(B.pointerId),R.current=null,C.current=null,re){const X=B.currentTarget,F={originalEvent:B,delta:re};Ey(re,b.swipeDirection,b.swipeThreshold)?Hl(IS,g,F,{discrete:!0}):Hl(RS,h,F,{discrete:!0}),X.addEventListener("click",q=>q.preventDefault(),{once:!0})}})})})}),b.viewport)})]}):null}),OS=e=>{const{__scopeToast:n,children:t,...i}=e,s=Pu(Ru,n),[l,o]=_.useState(!1),[d,f]=_.useState(!1);return VS(()=>o(!0)),_.useEffect(()=>{const m=window.setTimeout(()=>f(!0),1e3);return()=>window.clearTimeout(m)},[]),d?null:O.jsx(_z,{asChild:!0,children:O.jsx(Au,{...i,children:l&&O.jsxs(O.Fragment,{children:[s.label," ",t]})})})},NS="ToastTitle",Dz=_.forwardRef((e,n)=>{const{__scopeToast:t,...i}=e;return O.jsx(Cn.div,{...i,ref:n})});Dz.displayName=NS;var FS="ToastDescription",Lz=_.forwardRef((e,n)=>{const{__scopeToast:t,...i}=e;return O.jsx(Cn.div,{...i,ref:n})});Lz.displayName=FS;var Oz="ToastAction",Nz=_.forwardRef((e,n)=>{const{altText:t,...i}=e;return t.trim()?O.jsx(Vz,{altText:t,asChild:!0,children:O.jsx(jm,{...i,ref:n})}):(console.error(`Invalid prop \`altText\` supplied to \`${Oz}\`. Expected non-empty \`string\`.`),null)});Nz.displayName=Oz;var Fz="ToastClose",jm=_.forwardRef((e,n)=>{const{__scopeToast:t,...i}=e,s=DS(Fz,t);return O.jsx(Vz,{asChild:!0,children:O.jsx(Cn.button,{type:"button",...i,ref:n,onClick:mn(e.onClick,s.onClose)})})});jm.displayName=Fz;var Vz=_.forwardRef((e,n)=>{const{__scopeToast:t,altText:i,...s}=e;return O.jsx(Cn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...s,ref:n})});function Bz(e){const n=[];return Array.from(e.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&n.push(i.textContent),BS(i)){const s=i.ariaHidden||i.hidden||i.style.display==="none",l=i.dataset.radixToastAnnounceExclude==="";if(!s)if(l){const o=i.dataset.radixToastAnnounceAlt;o&&n.push(o)}else n.push(...Bz(i))}}),n}function Hl(e,n,t,{discrete:i}){const s=t.originalEvent.currentTarget,l=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});n&&s.addEventListener(e,n,{once:!0}),i?xz(s,l):s.dispatchEvent(l)}var Ey=(e,n,t=0)=>{const i=Math.abs(e.x),s=Math.abs(e.y),l=i>s;return n==="left"||n==="right"?l&&i>t:!l&&s>t};function VS(e=()=>{}){const n=pr(e);Ki(()=>{let t=0,i=0;return t=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(n)),()=>{window.cancelAnimationFrame(t),window.cancelAnimationFrame(i)}},[n])}function BS(e){return e.nodeType===e.ELEMENT_NODE}function US(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const s=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||s?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function Fd(e){const n=document.activeElement;return e.some(t=>t===n?!0:(t.focus(),document.activeElement!==n))}var $S=Az,Uz=Rz,$z=Mz,Hz=Dz,Wz=Lz,qz=Nz,Kz=jm;function Gz(e){var n,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(n=0;n<s;n++)e[n]&&(t=Gz(e[n]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function Qz(){for(var e,n,t=0,i="",s=arguments.length;t<s;t++)(e=arguments[t])&&(n=Gz(e))&&(i&&(i+=" "),i+=n);return i}const Ay=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Py=Qz,Sm=(e,n)=>t=>{var i;if((n==null?void 0:n.variants)==null)return Py(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:s,defaultVariants:l}=n,o=Object.keys(s).map(m=>{const y=t==null?void 0:t[m],u=l==null?void 0:l[m];if(y===null)return null;const h=Ay(y)||Ay(u);return s[m][h]}),d=t&&Object.entries(t).reduce((m,y)=>{let[u,h]=y;return h===void 0||(m[u]=h),m},{}),f=n==null||(i=n.compoundVariants)===null||i===void 0?void 0:i.reduce((m,y)=>{let{class:u,className:h,...g}=y;return Object.entries(g).every(z=>{let[b,x]=z;return Array.isArray(x)?x.includes({...l,...d}[b]):{...l,...d}[b]===x})?[...m,u,h]:m},[]);return Py(e,o,f,t==null?void 0:t.class,t==null?void 0:t.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yz=(...e)=>e.filter((n,t,i)=>!!n&&n.trim()!==""&&i.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=_.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:o,...d},f)=>_.createElement("svg",{ref:f,...WS,width:n,height:n,stroke:e,strokeWidth:i?Number(t)*24/Number(n):t,className:Yz("lucide",s),...d},[...o.map(([m,y])=>_.createElement(m,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=(e,n)=>{const t=_.forwardRef(({className:i,...s},l)=>_.createElement(qS,{ref:l,iconNode:n,className:Yz(`lucide-${HS(e)}`,i),...s}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=Iu("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=Iu("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=Iu("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=Iu("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Cm="-",XS=e=>{const n=ZS(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:o=>{const d=o.split(Cm);return d[0]===""&&d.length!==1&&d.shift(),Xz(d,n)||JS(o)},getConflictingClassGroupIds:(o,d)=>{const f=t[o]||[];return d&&i[o]?[...f,...i[o]]:f}}},Xz=(e,n)=>{var o;if(e.length===0)return n.classGroupId;const t=e[0],i=n.nextPart.get(t),s=i?Xz(e.slice(1),i):void 0;if(s)return s;if(n.validators.length===0)return;const l=e.join(Cm);return(o=n.validators.find(({validator:d})=>d(l)))==null?void 0:o.classGroupId},Ry=/^\[(.+)\]$/,JS=e=>{if(Ry.test(e)){const n=Ry.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},ZS=e=>{const{theme:n,prefix:t}=e,i={nextPart:new Map,validators:[]};return nC(Object.entries(e.classGroups),t).forEach(([l,o])=>{Tf(o,i,l,n)}),i},Tf=(e,n,t,i)=>{e.forEach(s=>{if(typeof s=="string"){const l=s===""?n:Iy(n,s);l.classGroupId=t;return}if(typeof s=="function"){if(eC(s)){Tf(s(i),n,t,i);return}n.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([l,o])=>{Tf(o,Iy(n,l),t,i)})})},Iy=(e,n)=>{let t=e;return n.split(Cm).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},eC=e=>e.isThemeGetter,nC=(e,n)=>n?e.map(([t,i])=>{const s=i.map(l=>typeof l=="string"?n+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([o,d])=>[n+o,d])):l);return[t,s]}):e,tC=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,i=new Map;const s=(l,o)=>{t.set(l,o),n++,n>e&&(n=0,i=t,t=new Map)};return{get(l){let o=t.get(l);if(o!==void 0)return o;if((o=i.get(l))!==void 0)return s(l,o),o},set(l,o){t.has(l)?t.set(l,o):s(l,o)}}},Jz="!",rC=e=>{const{separator:n,experimentalParseClassName:t}=e,i=n.length===1,s=n[0],l=n.length,o=d=>{const f=[];let m=0,y=0,u;for(let x=0;x<d.length;x++){let w=d[x];if(m===0){if(w===s&&(i||d.slice(x,x+l)===n)){f.push(d.slice(y,x)),y=x+l;continue}if(w==="/"){u=x;continue}}w==="["?m++:w==="]"&&m--}const h=f.length===0?d:d.substring(y),g=h.startsWith(Jz),z=g?h.substring(1):h,b=u&&u>y?u-y:void 0;return{modifiers:f,hasImportantModifier:g,baseClassName:z,maybePostfixModifierPosition:b}};return t?d=>t({className:d,parseClassName:o}):o},iC=e=>{if(e.length<=1)return e;const n=[];let t=[];return e.forEach(i=>{i[0]==="["?(n.push(...t.sort(),i),t=[]):t.push(i)}),n.push(...t.sort()),n},aC=e=>({cache:tC(e.cacheSize),parseClassName:rC(e),...XS(e)}),sC=/\s+/,oC=(e,n)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:s}=n,l=[],o=e.trim().split(sC);let d="";for(let f=o.length-1;f>=0;f-=1){const m=o[f],{modifiers:y,hasImportantModifier:u,baseClassName:h,maybePostfixModifierPosition:g}=t(m);let z=!!g,b=i(z?h.substring(0,g):h);if(!b){if(!z){d=m+(d.length>0?" "+d:d);continue}if(b=i(h),!b){d=m+(d.length>0?" "+d:d);continue}z=!1}const x=iC(y).join(":"),w=u?x+Jz:x,S=w+b;if(l.includes(S))continue;l.push(S);const C=s(b,z);for(let R=0;R<C.length;++R){const D=C[R];l.push(w+D)}d=m+(d.length>0?" "+d:d)}return d};function lC(){let e=0,n,t,i="";for(;e<arguments.length;)(n=arguments[e++])&&(t=Zz(n))&&(i&&(i+=" "),i+=t);return i}const Zz=e=>{if(typeof e=="string")return e;let n,t="";for(let i=0;i<e.length;i++)e[i]&&(n=Zz(e[i]))&&(t&&(t+=" "),t+=n);return t};function uC(e,...n){let t,i,s,l=o;function o(f){const m=n.reduce((y,u)=>u(y),e());return t=aC(m),i=t.cache.get,s=t.cache.set,l=d,d(f)}function d(f){const m=i(f);if(m)return m;const y=oC(f,t);return s(f,y),y}return function(){return l(lC.apply(null,arguments))}}const Qe=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},eb=/^\[(?:([a-z-]+):)?(.+)\]$/i,cC=/^\d+\/\d+$/,dC=new Set(["px","full","screen"]),fC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,mC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,pC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Tr=e=>Ma(e)||dC.has(e)||cC.test(e),ri=e=>Ja(e,"length",jC),Ma=e=>!!e&&!Number.isNaN(Number(e)),Vd=e=>Ja(e,"number",Ma),Us=e=>!!e&&Number.isInteger(Number(e)),yC=e=>e.endsWith("%")&&Ma(e.slice(0,-1)),Te=e=>eb.test(e),ii=e=>fC.test(e),kC=new Set(["length","size","percentage"]),vC=e=>Ja(e,kC,nb),zC=e=>Ja(e,"position",nb),bC=new Set(["image","url"]),wC=e=>Ja(e,bC,CC),xC=e=>Ja(e,"",SC),$s=()=>!0,Ja=(e,n,t)=>{const i=eb.exec(e);return i?i[1]?typeof n=="string"?i[1]===n:n.has(i[1]):t(i[2]):!1},jC=e=>mC.test(e)&&!hC.test(e),nb=()=>!1,SC=e=>pC.test(e),CC=e=>gC.test(e),_C=()=>{const e=Qe("colors"),n=Qe("spacing"),t=Qe("blur"),i=Qe("brightness"),s=Qe("borderColor"),l=Qe("borderRadius"),o=Qe("borderSpacing"),d=Qe("borderWidth"),f=Qe("contrast"),m=Qe("grayscale"),y=Qe("hueRotate"),u=Qe("invert"),h=Qe("gap"),g=Qe("gradientColorStops"),z=Qe("gradientColorStopPositions"),b=Qe("inset"),x=Qe("margin"),w=Qe("opacity"),S=Qe("padding"),C=Qe("saturate"),R=Qe("scale"),D=Qe("sepia"),P=Qe("skew"),$=Qe("space"),Y=Qe("translate"),K=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],Z=()=>["auto",Te,n],G=()=>[Te,n],ee=()=>["",Tr,ri],B=()=>["auto",Ma,Te],re=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ue=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",Te],T=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>[Ma,Te];return{cacheSize:500,separator:":",theme:{colors:[$s],spacing:[Tr,ri],blur:["none","",ii,Te],brightness:I(),borderColor:[e],borderRadius:["none","","full",ii,Te],borderSpacing:G(),borderWidth:ee(),contrast:I(),grayscale:q(),hueRotate:I(),invert:q(),gap:G(),gradientColorStops:[e],gradientColorStopPositions:[yC,ri],inset:Z(),margin:Z(),opacity:I(),padding:G(),saturate:I(),scale:I(),sepia:q(),skew:I(),space:G(),translate:G()},classGroups:{aspect:[{aspect:["auto","square","video",Te]}],container:["container"],columns:[{columns:[ii]}],"break-after":[{"break-after":T()}],"break-before":[{"break-before":T()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...re(),Te]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Us,Te]}],basis:[{basis:Z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Te]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",Us,Te]}],"grid-cols":[{"grid-cols":[$s]}],"col-start-end":[{col:["auto",{span:["full",Us,Te]},Te]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[$s]}],"row-start-end":[{row:["auto",{span:[Us,Te]},Te]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Te]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Te,n]}],"min-w":[{"min-w":[Te,n,"min","max","fit"]}],"max-w":[{"max-w":[Te,n,"none","full","min","max","fit","prose",{screen:[ii]},ii]}],h:[{h:[Te,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Te,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Te,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Te,n,"auto","min","max","fit"]}],"font-size":[{text:["base",ii,ri]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Vd]}],"font-family":[{font:[$s]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Te]}],"line-clamp":[{"line-clamp":["none",Ma,Vd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Tr,Te]}],"list-image":[{"list-image":["none",Te]}],"list-style-type":[{list:["none","disc","decimal",Te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ue(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Tr,ri]}],"underline-offset":[{"underline-offset":["auto",Tr,Te]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...re(),zC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",vC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},wC]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[z]}],"gradient-via-pos":[{via:[z]}],"gradient-to-pos":[{to:[z]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...ue(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:ue()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...ue()]}],"outline-offset":[{"outline-offset":[Tr,Te]}],"outline-w":[{outline:[Tr,ri]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[Tr,ri]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ii,xC]}],"shadow-color":[{shadow:[$s]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[i]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",ii,Te]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[u]}],saturate:[{saturate:[C]}],sepia:[{sepia:[D]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Te]}],duration:[{duration:I()}],ease:[{ease:["linear","in","out","in-out",Te]}],delay:[{delay:I()}],animate:[{animate:["none","spin","ping","pulse","bounce",Te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[Us,Te]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Te]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Te]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Te]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Tr,ri,Vd]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},TC=uC(_C);function un(...e){return TC(Qz(e))}function tb(e){const n=[...e];for(let t=n.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[n[t],n[i]]=[n[i],n[t]]}return n}const EC=$S,rb=_.forwardRef(({className:e,...n},t)=>O.jsx(Uz,{ref:t,className:un("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...n}));rb.displayName=Uz.displayName;const AC=Sm("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),ib=_.forwardRef(({className:e,variant:n,...t},i)=>O.jsx($z,{ref:i,className:un(AC({variant:n}),e),...t}));ib.displayName=$z.displayName;const PC=_.forwardRef(({className:e,...n},t)=>O.jsx(qz,{ref:t,className:un("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...n}));PC.displayName=qz.displayName;const ab=_.forwardRef(({className:e,...n},t)=>O.jsx(Kz,{ref:t,className:un("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...n,children:O.jsx(YS,{className:"h-4 w-4"})}));ab.displayName=Kz.displayName;const sb=_.forwardRef(({className:e,...n},t)=>O.jsx(Hz,{ref:t,className:un("text-sm font-semibold",e),...n}));sb.displayName=Hz.displayName;const ob=_.forwardRef(({className:e,...n},t)=>O.jsx(Wz,{ref:t,className:un("text-sm opacity-90",e),...n}));ob.displayName=Wz.displayName;function RC(){const{toasts:e}=vz();return O.jsxs(EC,{children:[e.map(function({id:n,title:t,description:i,action:s,...l}){return O.jsxs(ib,{...l,children:[O.jsxs("div",{className:"grid gap-1",children:[t&&O.jsx(sb,{children:t}),i&&O.jsx(ob,{children:i})]}),s,O.jsx(ab,{})]},n)}),O.jsx(rb,{})]})}var My=["light","dark"],IC="(prefers-color-scheme: dark)",MC=_.createContext(void 0),DC={setTheme:e=>{},themes:[]},LC=()=>{var e;return(e=_.useContext(MC))!=null?e:DC};_.memo(({forcedTheme:e,storageKey:n,attribute:t,enableSystem:i,enableColorScheme:s,defaultTheme:l,value:o,attrs:d,nonce:f})=>{let m=l==="system",y=t==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${d.map(z=>`'${z}'`).join(",")})`};`:`var d=document.documentElement,n='${t}',s='setAttribute';`,u=s?My.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(z,b=!1,x=!0)=>{let w=o?o[z]:z,S=b?z+"|| ''":`'${w}'`,C="";return s&&x&&!b&&My.includes(z)&&(C+=`d.style.colorScheme = '${z}';`),t==="class"?b||w?C+=`c.add(${S})`:C+="null":w&&(C+=`d[s](n,${S})`),C},g=e?`!function(){${y}${h(e)}}()`:i?`!function(){try{${y}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${m})){var t='${IC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}${m?"":"else{"+h(l,!1,!1)+"}"}${u}}catch(e){}}()`:`!function(){try{${y}var e=localStorage.getItem('${n}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}else{${h(l,!1,!1)};}${u}}catch(t){}}();`;return _.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})});var OC=e=>{switch(e){case"success":return VC;case"info":return UC;case"warning":return BC;case"error":return $C;default:return null}},NC=Array(12).fill(0),FC=({visible:e,className:n})=>le.createElement("div",{className:["sonner-loading-wrapper",n].filter(Boolean).join(" "),"data-visible":e},le.createElement("div",{className:"sonner-spinner"},NC.map((t,i)=>le.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),VC=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},le.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),BC=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},le.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),UC=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},le.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),$C=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},le.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),HC=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},le.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),le.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),WC=()=>{let[e,n]=le.useState(document.hidden);return le.useEffect(()=>{let t=()=>{n(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),e},Ef=1,qC=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}),this.publish=e=>{this.subscribers.forEach(n=>n(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var n;let{message:t,...i}=e,s=typeof(e==null?void 0:e.id)=="number"||((n=e.id)==null?void 0:n.length)>0?e.id:Ef++,l=this.toasts.find(d=>d.id===s),o=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),l?this.toasts=this.toasts.map(d=>d.id===s?(this.publish({...d,...e,id:s,title:t}),{...d,...e,id:s,dismissible:o,title:t}):d):this.addToast({title:t,...i,dismissible:o,id:s}),s},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(n=>{this.subscribers.forEach(t=>t({id:n.id,dismiss:!0}))}),this.subscribers.forEach(n=>n({id:e,dismiss:!0})),e),this.message=(e,n)=>this.create({...n,message:e}),this.error=(e,n)=>this.create({...n,message:e,type:"error"}),this.success=(e,n)=>this.create({...n,type:"success",message:e}),this.info=(e,n)=>this.create({...n,type:"info",message:e}),this.warning=(e,n)=>this.create({...n,type:"warning",message:e}),this.loading=(e,n)=>this.create({...n,type:"loading",message:e}),this.promise=(e,n)=>{if(!n)return;let t;n.loading!==void 0&&(t=this.create({...n,promise:e,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));let i=e instanceof Promise?e:e(),s=t!==void 0,l,o=i.then(async f=>{if(l=["resolve",f],le.isValidElement(f))s=!1,this.create({id:t,type:"default",message:f});else if(GC(f)&&!f.ok){s=!1;let m=typeof n.error=="function"?await n.error(`HTTP error! status: ${f.status}`):n.error,y=typeof n.description=="function"?await n.description(`HTTP error! status: ${f.status}`):n.description;this.create({id:t,type:"error",message:m,description:y})}else if(n.success!==void 0){s=!1;let m=typeof n.success=="function"?await n.success(f):n.success,y=typeof n.description=="function"?await n.description(f):n.description;this.create({id:t,type:"success",message:m,description:y})}}).catch(async f=>{if(l=["reject",f],n.error!==void 0){s=!1;let m=typeof n.error=="function"?await n.error(f):n.error,y=typeof n.description=="function"?await n.description(f):n.description;this.create({id:t,type:"error",message:m,description:y})}}).finally(()=>{var f;s&&(this.dismiss(t),t=void 0),(f=n.finally)==null||f.call(n)}),d=()=>new Promise((f,m)=>o.then(()=>l[0]==="reject"?m(l[1]):f(l[1])).catch(m));return typeof t!="string"&&typeof t!="number"?{unwrap:d}:Object.assign(t,{unwrap:d})},this.custom=(e,n)=>{let t=(n==null?void 0:n.id)||Ef++;return this.create({jsx:e(t),id:t,...n}),t},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},rt=new qC,KC=(e,n)=>{let t=(n==null?void 0:n.id)||Ef++;return rt.addToast({title:e,...n,id:t}),t},GC=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",QC=KC,YC=()=>rt.toasts,XC=()=>rt.getActiveToasts();Object.assign(QC,{success:rt.success,info:rt.info,warning:rt.warning,error:rt.error,custom:rt.custom,message:rt.message,promise:rt.promise,dismiss:rt.dismiss,loading:rt.loading},{getHistory:YC,getToasts:XC});function JC(e,{insertAt:n}={}){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}JC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Wl(e){return e.label!==void 0}var ZC=3,e_="32px",n_="16px",Dy=4e3,t_=356,r_=14,i_=20,a_=200;function Bt(...e){return e.filter(Boolean).join(" ")}function s_(e){let[n,t]=e.split("-"),i=[];return n&&i.push(n),t&&i.push(t),i}var o_=e=>{var n,t,i,s,l,o,d,f,m,y,u;let{invert:h,toast:g,unstyled:z,interacting:b,setHeights:x,visibleToasts:w,heights:S,index:C,toasts:R,expanded:D,removeToast:P,defaultRichColors:$,closeButton:Y,style:K,cancelButtonStyle:L,actionButtonStyle:Z,className:G="",descriptionClassName:ee="",duration:B,position:re,gap:ue,loadingIcon:X,expandByDefault:F,classNames:q,icons:T,closeButtonAriaLabel:I="Close toast",pauseWhenPageIsHidden:H}=e,[E,ce]=le.useState(null),[ke,ge]=le.useState(null),[ye,Ce]=le.useState(!1),[Ae,Be]=le.useState(!1),[kn,At]=le.useState(!1),[On,Qt]=le.useState(!1),[vr,Yt]=le.useState(!1),[Xt,Jt]=le.useState(0),[st,Pt]=le.useState(0),Kn=le.useRef(g.duration||B||Dy),Lr=le.useRef(null),pt=le.useRef(null),ea=C===0,na=C+1<=w,Q=g.type,se=g.dismissible!==!1,we=g.className||"",Pe=g.descriptionClassName||"",Re=le.useMemo(()=>S.findIndex(Se=>Se.toastId===g.id)||0,[S,g.id]),pn=le.useMemo(()=>{var Se;return(Se=g.closeButton)!=null?Se:Y},[g.closeButton,Y]),gt=le.useMemo(()=>g.duration||B||Dy,[g.duration,B]),_n=le.useRef(0),Nn=le.useRef(0),Zt=le.useRef(0),Ye=le.useRef(null),[yt,Fn]=re.split("-"),ta=le.useMemo(()=>S.reduce((Se,Fe,Ue)=>Ue>=Re?Se:Se+Fe.height,0),[S,Re]),ra=WC(),Or=g.invert||h,er=Q==="loading";Nn.current=le.useMemo(()=>Re*ue+ta,[Re,ta]),le.useEffect(()=>{Kn.current=gt},[gt]),le.useEffect(()=>{Ce(!0)},[]),le.useEffect(()=>{let Se=pt.current;if(Se){let Fe=Se.getBoundingClientRect().height;return Pt(Fe),x(Ue=>[{toastId:g.id,height:Fe,position:g.position},...Ue]),()=>x(Ue=>Ue.filter(Vn=>Vn.toastId!==g.id))}},[x,g.id]),le.useLayoutEffect(()=>{if(!ye)return;let Se=pt.current,Fe=Se.style.height;Se.style.height="auto";let Ue=Se.getBoundingClientRect().height;Se.style.height=Fe,Pt(Ue),x(Vn=>Vn.find(Gn=>Gn.toastId===g.id)?Vn.map(Gn=>Gn.toastId===g.id?{...Gn,height:Ue}:Gn):[{toastId:g.id,height:Ue,position:g.position},...Vn])},[ye,g.title,g.description,x,g.id]);let Rt=le.useCallback(()=>{Be(!0),Jt(Nn.current),x(Se=>Se.filter(Fe=>Fe.toastId!==g.id)),setTimeout(()=>{P(g)},a_)},[g,P,x,Nn]);le.useEffect(()=>{if(g.promise&&Q==="loading"||g.duration===1/0||g.type==="loading")return;let Se;return D||b||H&&ra?(()=>{if(Zt.current<_n.current){let Fe=new Date().getTime()-_n.current;Kn.current=Kn.current-Fe}Zt.current=new Date().getTime()})():Kn.current!==1/0&&(_n.current=new Date().getTime(),Se=setTimeout(()=>{var Fe;(Fe=g.onAutoClose)==null||Fe.call(g,g),Rt()},Kn.current)),()=>clearTimeout(Se)},[D,b,g,Q,H,ra,Rt]),le.useEffect(()=>{g.delete&&Rt()},[Rt,g.delete]);function Io(){var Se,Fe,Ue;return T!=null&&T.loading?le.createElement("div",{className:Bt(q==null?void 0:q.loader,(Se=g==null?void 0:g.classNames)==null?void 0:Se.loader,"sonner-loader"),"data-visible":Q==="loading"},T.loading):X?le.createElement("div",{className:Bt(q==null?void 0:q.loader,(Fe=g==null?void 0:g.classNames)==null?void 0:Fe.loader,"sonner-loader"),"data-visible":Q==="loading"},X):le.createElement(FC,{className:Bt(q==null?void 0:q.loader,(Ue=g==null?void 0:g.classNames)==null?void 0:Ue.loader),visible:Q==="loading"})}return le.createElement("li",{tabIndex:0,ref:pt,className:Bt(G,we,q==null?void 0:q.toast,(n=g==null?void 0:g.classNames)==null?void 0:n.toast,q==null?void 0:q.default,q==null?void 0:q[Q],(t=g==null?void 0:g.classNames)==null?void 0:t[Q]),"data-sonner-toast":"","data-rich-colors":(i=g.richColors)!=null?i:$,"data-styled":!(g.jsx||g.unstyled||z),"data-mounted":ye,"data-promise":!!g.promise,"data-swiped":vr,"data-removed":Ae,"data-visible":na,"data-y-position":yt,"data-x-position":Fn,"data-index":C,"data-front":ea,"data-swiping":kn,"data-dismissible":se,"data-type":Q,"data-invert":Or,"data-swipe-out":On,"data-swipe-direction":ke,"data-expanded":!!(D||F&&ye),style:{"--index":C,"--toasts-before":C,"--z-index":R.length-C,"--offset":`${Ae?Xt:Nn.current}px`,"--initial-height":F?"auto":`${st}px`,...K,...g.style},onDragEnd:()=>{At(!1),ce(null),Ye.current=null},onPointerDown:Se=>{er||!se||(Lr.current=new Date,Jt(Nn.current),Se.target.setPointerCapture(Se.pointerId),Se.target.tagName!=="BUTTON"&&(At(!0),Ye.current={x:Se.clientX,y:Se.clientY}))},onPointerUp:()=>{var Se,Fe,Ue,Vn;if(On||!se)return;Ye.current=null;let Gn=Number(((Se=pt.current)==null?void 0:Se.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Qn=Number(((Fe=pt.current)==null?void 0:Fe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),It=new Date().getTime()-((Ue=Lr.current)==null?void 0:Ue.getTime()),wn=E==="x"?Gn:Qn,nr=Math.abs(wn)/It;if(Math.abs(wn)>=i_||nr>.11){Jt(Nn.current),(Vn=g.onDismiss)==null||Vn.call(g,g),ge(E==="x"?Gn>0?"right":"left":Qn>0?"down":"up"),Rt(),Qt(!0),Yt(!1);return}At(!1),ce(null)},onPointerMove:Se=>{var Fe,Ue,Vn,Gn;if(!Ye.current||!se||((Fe=window.getSelection())==null?void 0:Fe.toString().length)>0)return;let Qn=Se.clientY-Ye.current.y,It=Se.clientX-Ye.current.x,wn=(Ue=e.swipeDirections)!=null?Ue:s_(re);!E&&(Math.abs(It)>1||Math.abs(Qn)>1)&&ce(Math.abs(It)>Math.abs(Qn)?"x":"y");let nr={x:0,y:0};E==="y"?(wn.includes("top")||wn.includes("bottom"))&&(wn.includes("top")&&Qn<0||wn.includes("bottom")&&Qn>0)&&(nr.y=Qn):E==="x"&&(wn.includes("left")||wn.includes("right"))&&(wn.includes("left")&&It<0||wn.includes("right")&&It>0)&&(nr.x=It),(Math.abs(nr.x)>0||Math.abs(nr.y)>0)&&Yt(!0),(Vn=pt.current)==null||Vn.style.setProperty("--swipe-amount-x",`${nr.x}px`),(Gn=pt.current)==null||Gn.style.setProperty("--swipe-amount-y",`${nr.y}px`)}},pn&&!g.jsx?le.createElement("button",{"aria-label":I,"data-disabled":er,"data-close-button":!0,onClick:er||!se?()=>{}:()=>{var Se;Rt(),(Se=g.onDismiss)==null||Se.call(g,g)},className:Bt(q==null?void 0:q.closeButton,(s=g==null?void 0:g.classNames)==null?void 0:s.closeButton)},(l=T==null?void 0:T.close)!=null?l:HC):null,g.jsx||_.isValidElement(g.title)?g.jsx?g.jsx:typeof g.title=="function"?g.title():g.title:le.createElement(le.Fragment,null,Q||g.icon||g.promise?le.createElement("div",{"data-icon":"",className:Bt(q==null?void 0:q.icon,(o=g==null?void 0:g.classNames)==null?void 0:o.icon)},g.promise||g.type==="loading"&&!g.icon?g.icon||Io():null,g.type!=="loading"?g.icon||(T==null?void 0:T[Q])||OC(Q):null):null,le.createElement("div",{"data-content":"",className:Bt(q==null?void 0:q.content,(d=g==null?void 0:g.classNames)==null?void 0:d.content)},le.createElement("div",{"data-title":"",className:Bt(q==null?void 0:q.title,(f=g==null?void 0:g.classNames)==null?void 0:f.title)},typeof g.title=="function"?g.title():g.title),g.description?le.createElement("div",{"data-description":"",className:Bt(ee,Pe,q==null?void 0:q.description,(m=g==null?void 0:g.classNames)==null?void 0:m.description)},typeof g.description=="function"?g.description():g.description):null),_.isValidElement(g.cancel)?g.cancel:g.cancel&&Wl(g.cancel)?le.createElement("button",{"data-button":!0,"data-cancel":!0,style:g.cancelButtonStyle||L,onClick:Se=>{var Fe,Ue;Wl(g.cancel)&&se&&((Ue=(Fe=g.cancel).onClick)==null||Ue.call(Fe,Se),Rt())},className:Bt(q==null?void 0:q.cancelButton,(y=g==null?void 0:g.classNames)==null?void 0:y.cancelButton)},g.cancel.label):null,_.isValidElement(g.action)?g.action:g.action&&Wl(g.action)?le.createElement("button",{"data-button":!0,"data-action":!0,style:g.actionButtonStyle||Z,onClick:Se=>{var Fe,Ue;Wl(g.action)&&((Ue=(Fe=g.action).onClick)==null||Ue.call(Fe,Se),!Se.defaultPrevented&&Rt())},className:Bt(q==null?void 0:q.actionButton,(u=g==null?void 0:g.classNames)==null?void 0:u.actionButton)},g.action.label):null))};function Ly(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function l_(e,n){let t={};return[e,n].forEach((i,s)=>{let l=s===1,o=l?"--mobile-offset":"--offset",d=l?n_:e_;function f(m){["top","right","bottom","left"].forEach(y=>{t[`${o}-${y}`]=typeof m=="number"?`${m}px`:m})}typeof i=="number"||typeof i=="string"?f(i):typeof i=="object"?["top","right","bottom","left"].forEach(m=>{i[m]===void 0?t[`${o}-${m}`]=d:t[`${o}-${m}`]=typeof i[m]=="number"?`${i[m]}px`:i[m]}):f(d)}),t}var u_=_.forwardRef(function(e,n){let{invert:t,position:i="bottom-right",hotkey:s=["altKey","KeyT"],expand:l,closeButton:o,className:d,offset:f,mobileOffset:m,theme:y="light",richColors:u,duration:h,style:g,visibleToasts:z=ZC,toastOptions:b,dir:x=Ly(),gap:w=r_,loadingIcon:S,icons:C,containerAriaLabel:R="Notifications",pauseWhenPageIsHidden:D}=e,[P,$]=le.useState([]),Y=le.useMemo(()=>Array.from(new Set([i].concat(P.filter(H=>H.position).map(H=>H.position)))),[P,i]),[K,L]=le.useState([]),[Z,G]=le.useState(!1),[ee,B]=le.useState(!1),[re,ue]=le.useState(y!=="system"?y:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),X=le.useRef(null),F=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),q=le.useRef(null),T=le.useRef(!1),I=le.useCallback(H=>{$(E=>{var ce;return(ce=E.find(ke=>ke.id===H.id))!=null&&ce.delete||rt.dismiss(H.id),E.filter(({id:ke})=>ke!==H.id)})},[]);return le.useEffect(()=>rt.subscribe(H=>{if(H.dismiss){$(E=>E.map(ce=>ce.id===H.id?{...ce,delete:!0}:ce));return}setTimeout(()=>{zz.flushSync(()=>{$(E=>{let ce=E.findIndex(ke=>ke.id===H.id);return ce!==-1?[...E.slice(0,ce),{...E[ce],...H},...E.slice(ce+1)]:[H,...E]})})})}),[]),le.useEffect(()=>{if(y!=="system"){ue(y);return}if(y==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ue("dark"):ue("light")),typeof window>"u")return;let H=window.matchMedia("(prefers-color-scheme: dark)");try{H.addEventListener("change",({matches:E})=>{ue(E?"dark":"light")})}catch{H.addListener(({matches:ce})=>{try{ue(ce?"dark":"light")}catch(ke){console.error(ke)}})}},[y]),le.useEffect(()=>{P.length<=1&&G(!1)},[P]),le.useEffect(()=>{let H=E=>{var ce,ke;s.every(ge=>E[ge]||E.code===ge)&&(G(!0),(ce=X.current)==null||ce.focus()),E.code==="Escape"&&(document.activeElement===X.current||(ke=X.current)!=null&&ke.contains(document.activeElement))&&G(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[s]),le.useEffect(()=>{if(X.current)return()=>{q.current&&(q.current.focus({preventScroll:!0}),q.current=null,T.current=!1)}},[X.current]),le.createElement("section",{ref:n,"aria-label":`${R} ${F}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},Y.map((H,E)=>{var ce;let[ke,ge]=H.split("-");return P.length?le.createElement("ol",{key:H,dir:x==="auto"?Ly():x,tabIndex:-1,ref:X,className:d,"data-sonner-toaster":!0,"data-theme":re,"data-y-position":ke,"data-lifted":Z&&P.length>1&&!l,"data-x-position":ge,style:{"--front-toast-height":`${((ce=K[0])==null?void 0:ce.height)||0}px`,"--width":`${t_}px`,"--gap":`${w}px`,...g,...l_(f,m)},onBlur:ye=>{T.current&&!ye.currentTarget.contains(ye.relatedTarget)&&(T.current=!1,q.current&&(q.current.focus({preventScroll:!0}),q.current=null))},onFocus:ye=>{ye.target instanceof HTMLElement&&ye.target.dataset.dismissible==="false"||T.current||(T.current=!0,q.current=ye.relatedTarget)},onMouseEnter:()=>G(!0),onMouseMove:()=>G(!0),onMouseLeave:()=>{ee||G(!1)},onDragEnd:()=>G(!1),onPointerDown:ye=>{ye.target instanceof HTMLElement&&ye.target.dataset.dismissible==="false"||B(!0)},onPointerUp:()=>B(!1)},P.filter(ye=>!ye.position&&E===0||ye.position===H).map((ye,Ce)=>{var Ae,Be;return le.createElement(o_,{key:ye.id,icons:C,index:Ce,toast:ye,defaultRichColors:u,duration:(Ae=b==null?void 0:b.duration)!=null?Ae:h,className:b==null?void 0:b.className,descriptionClassName:b==null?void 0:b.descriptionClassName,invert:t,visibleToasts:z,closeButton:(Be=b==null?void 0:b.closeButton)!=null?Be:o,interacting:ee,position:H,style:b==null?void 0:b.style,unstyled:b==null?void 0:b.unstyled,classNames:b==null?void 0:b.classNames,cancelButtonStyle:b==null?void 0:b.cancelButtonStyle,actionButtonStyle:b==null?void 0:b.actionButtonStyle,removeToast:I,toasts:P.filter(kn=>kn.position==ye.position),heights:K.filter(kn=>kn.position==ye.position),setHeights:L,expandByDefault:l,gap:w,loadingIcon:S,expanded:Z,pauseWhenPageIsHidden:D,swipeDirections:e.swipeDirections})})):null}))});const c_=({...e})=>{const{theme:n="system"}=LC();return O.jsx(u_,{theme:n,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},d_=["top","right","bottom","left"],pi=Math.min,ft=Math.max,mu=Math.round,ql=Math.floor,dr=e=>({x:e,y:e}),f_={left:"right",right:"left",bottom:"top",top:"bottom"},m_={start:"end",end:"start"};function Af(e,n,t){return ft(e,pi(n,t))}function Pr(e,n){return typeof e=="function"?e(n):e}function Rr(e){return e.split("-")[0]}function Za(e){return e.split("-")[1]}function _m(e){return e==="x"?"y":"x"}function Tm(e){return e==="y"?"height":"width"}function gi(e){return["top","bottom"].includes(Rr(e))?"y":"x"}function Em(e){return _m(gi(e))}function h_(e,n,t){t===void 0&&(t=!1);const i=Za(e),s=Em(e),l=Tm(s);let o=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return n.reference[l]>n.floating[l]&&(o=hu(o)),[o,hu(o)]}function p_(e){const n=hu(e);return[Pf(e),n,Pf(n)]}function Pf(e){return e.replace(/start|end/g,n=>m_[n])}function g_(e,n,t){const i=["left","right"],s=["right","left"],l=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return t?n?s:i:n?i:s;case"left":case"right":return n?l:o;default:return[]}}function y_(e,n,t,i){const s=Za(e);let l=g_(Rr(e),t==="start",i);return s&&(l=l.map(o=>o+"-"+s),n&&(l=l.concat(l.map(Pf)))),l}function hu(e){return e.replace(/left|right|bottom|top/g,n=>f_[n])}function k_(e){return{top:0,right:0,bottom:0,left:0,...e}}function lb(e){return typeof e!="number"?k_(e):{top:e,right:e,bottom:e,left:e}}function pu(e){const{x:n,y:t,width:i,height:s}=e;return{width:i,height:s,top:t,left:n,right:n+i,bottom:t+s,x:n,y:t}}function Oy(e,n,t){let{reference:i,floating:s}=e;const l=gi(n),o=Em(n),d=Tm(o),f=Rr(n),m=l==="y",y=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,h=i[d]/2-s[d]/2;let g;switch(f){case"top":g={x:y,y:i.y-s.height};break;case"bottom":g={x:y,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-s.width,y:u};break;default:g={x:i.x,y:i.y}}switch(Za(n)){case"start":g[o]-=h*(t&&m?-1:1);break;case"end":g[o]+=h*(t&&m?-1:1);break}return g}const v_=async(e,n,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:l=[],platform:o}=t,d=l.filter(Boolean),f=await(o.isRTL==null?void 0:o.isRTL(n));let m=await o.getElementRects({reference:e,floating:n,strategy:s}),{x:y,y:u}=Oy(m,i,f),h=i,g={},z=0;for(let b=0;b<d.length;b++){const{name:x,fn:w}=d[b],{x:S,y:C,data:R,reset:D}=await w({x:y,y:u,initialPlacement:i,placement:h,strategy:s,middlewareData:g,rects:m,platform:o,elements:{reference:e,floating:n}});y=S??y,u=C??u,g={...g,[x]:{...g[x],...R}},D&&z<=50&&(z++,typeof D=="object"&&(D.placement&&(h=D.placement),D.rects&&(m=D.rects===!0?await o.getElementRects({reference:e,floating:n,strategy:s}):D.rects),{x:y,y:u}=Oy(m,h,f)),b=-1)}return{x:y,y:u,placement:h,strategy:s,middlewareData:g}};async function ao(e,n){var t;n===void 0&&(n={});const{x:i,y:s,platform:l,rects:o,elements:d,strategy:f}=e,{boundary:m="clippingAncestors",rootBoundary:y="viewport",elementContext:u="floating",altBoundary:h=!1,padding:g=0}=Pr(n,e),z=lb(g),x=d[h?u==="floating"?"reference":"floating":u],w=pu(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(x)))==null||t?x:x.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(d.floating)),boundary:m,rootBoundary:y,strategy:f})),S=u==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,C=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d.floating)),R=await(l.isElement==null?void 0:l.isElement(C))?await(l.getScale==null?void 0:l.getScale(C))||{x:1,y:1}:{x:1,y:1},D=pu(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:S,offsetParent:C,strategy:f}):S);return{top:(w.top-D.top+z.top)/R.y,bottom:(D.bottom-w.bottom+z.bottom)/R.y,left:(w.left-D.left+z.left)/R.x,right:(D.right-w.right+z.right)/R.x}}const z_=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:i,placement:s,rects:l,platform:o,elements:d,middlewareData:f}=n,{element:m,padding:y=0}=Pr(e,n)||{};if(m==null)return{};const u=lb(y),h={x:t,y:i},g=Em(s),z=Tm(g),b=await o.getDimensions(m),x=g==="y",w=x?"top":"left",S=x?"bottom":"right",C=x?"clientHeight":"clientWidth",R=l.reference[z]+l.reference[g]-h[g]-l.floating[z],D=h[g]-l.reference[g],P=await(o.getOffsetParent==null?void 0:o.getOffsetParent(m));let $=P?P[C]:0;(!$||!await(o.isElement==null?void 0:o.isElement(P)))&&($=d.floating[C]||l.floating[z]);const Y=R/2-D/2,K=$/2-b[z]/2-1,L=pi(u[w],K),Z=pi(u[S],K),G=L,ee=$-b[z]-Z,B=$/2-b[z]/2+Y,re=Af(G,B,ee),ue=!f.arrow&&Za(s)!=null&&B!==re&&l.reference[z]/2-(B<G?L:Z)-b[z]/2<0,X=ue?B<G?B-G:B-ee:0;return{[g]:h[g]+X,data:{[g]:re,centerOffset:B-re-X,...ue&&{alignmentOffset:X}},reset:ue}}}),b_=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,i;const{placement:s,middlewareData:l,rects:o,initialPlacement:d,platform:f,elements:m}=n,{mainAxis:y=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:z="none",flipAlignment:b=!0,...x}=Pr(e,n);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const w=Rr(s),S=gi(d),C=Rr(d)===d,R=await(f.isRTL==null?void 0:f.isRTL(m.floating)),D=h||(C||!b?[hu(d)]:p_(d)),P=z!=="none";!h&&P&&D.push(...y_(d,b,z,R));const $=[d,...D],Y=await ao(n,x),K=[];let L=((i=l.flip)==null?void 0:i.overflows)||[];if(y&&K.push(Y[w]),u){const B=h_(s,o,R);K.push(Y[B[0]],Y[B[1]])}if(L=[...L,{placement:s,overflows:K}],!K.every(B=>B<=0)){var Z,G;const B=(((Z=l.flip)==null?void 0:Z.index)||0)+1,re=$[B];if(re)return{data:{index:B,overflows:L},reset:{placement:re}};let ue=(G=L.filter(X=>X.overflows[0]<=0).sort((X,F)=>X.overflows[1]-F.overflows[1])[0])==null?void 0:G.placement;if(!ue)switch(g){case"bestFit":{var ee;const X=(ee=L.filter(F=>{if(P){const q=gi(F.placement);return q===S||q==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(q=>q>0).reduce((q,T)=>q+T,0)]).sort((F,q)=>F[1]-q[1])[0])==null?void 0:ee[0];X&&(ue=X);break}case"initialPlacement":ue=d;break}if(s!==ue)return{reset:{placement:ue}}}return{}}}};function Ny(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function Fy(e){return d_.some(n=>e[n]>=0)}const w_=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:t}=n,{strategy:i="referenceHidden",...s}=Pr(e,n);switch(i){case"referenceHidden":{const l=await ao(n,{...s,elementContext:"reference"}),o=Ny(l,t.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:Fy(o)}}}case"escaped":{const l=await ao(n,{...s,altBoundary:!0}),o=Ny(l,t.floating);return{data:{escapedOffsets:o,escaped:Fy(o)}}}default:return{}}}}};async function x_(e,n){const{placement:t,platform:i,elements:s}=e,l=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=Rr(t),d=Za(t),f=gi(t)==="y",m=["left","top"].includes(o)?-1:1,y=l&&f?-1:1,u=Pr(n,e);let{mainAxis:h,crossAxis:g,alignmentAxis:z}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return d&&typeof z=="number"&&(g=d==="end"?z*-1:z),f?{x:g*y,y:h*m}:{x:h*m,y:g*y}}const j_=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,i;const{x:s,y:l,placement:o,middlewareData:d}=n,f=await x_(n,e);return o===((t=d.offset)==null?void 0:t.placement)&&(i=d.arrow)!=null&&i.alignmentOffset?{}:{x:s+f.x,y:l+f.y,data:{...f,placement:o}}}}},S_=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:i,placement:s}=n,{mainAxis:l=!0,crossAxis:o=!1,limiter:d={fn:x=>{let{x:w,y:S}=x;return{x:w,y:S}}},...f}=Pr(e,n),m={x:t,y:i},y=await ao(n,f),u=gi(Rr(s)),h=_m(u);let g=m[h],z=m[u];if(l){const x=h==="y"?"top":"left",w=h==="y"?"bottom":"right",S=g+y[x],C=g-y[w];g=Af(S,g,C)}if(o){const x=u==="y"?"top":"left",w=u==="y"?"bottom":"right",S=z+y[x],C=z-y[w];z=Af(S,z,C)}const b=d.fn({...n,[h]:g,[u]:z});return{...b,data:{x:b.x-t,y:b.y-i,enabled:{[h]:l,[u]:o}}}}}},C_=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:t,y:i,placement:s,rects:l,middlewareData:o}=n,{offset:d=0,mainAxis:f=!0,crossAxis:m=!0}=Pr(e,n),y={x:t,y:i},u=gi(s),h=_m(u);let g=y[h],z=y[u];const b=Pr(d,n),x=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(f){const C=h==="y"?"height":"width",R=l.reference[h]-l.floating[C]+x.mainAxis,D=l.reference[h]+l.reference[C]-x.mainAxis;g<R?g=R:g>D&&(g=D)}if(m){var w,S;const C=h==="y"?"width":"height",R=["top","left"].includes(Rr(s)),D=l.reference[u]-l.floating[C]+(R&&((w=o.offset)==null?void 0:w[u])||0)+(R?0:x.crossAxis),P=l.reference[u]+l.reference[C]+(R?0:((S=o.offset)==null?void 0:S[u])||0)-(R?x.crossAxis:0);z<D?z=D:z>P&&(z=P)}return{[h]:g,[u]:z}}}},__=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){var t,i;const{placement:s,rects:l,platform:o,elements:d}=n,{apply:f=()=>{},...m}=Pr(e,n),y=await ao(n,m),u=Rr(s),h=Za(s),g=gi(s)==="y",{width:z,height:b}=l.floating;let x,w;u==="top"||u==="bottom"?(x=u,w=h===(await(o.isRTL==null?void 0:o.isRTL(d.floating))?"start":"end")?"left":"right"):(w=u,x=h==="end"?"top":"bottom");const S=b-y.top-y.bottom,C=z-y.left-y.right,R=pi(b-y[x],S),D=pi(z-y[w],C),P=!n.middlewareData.shift;let $=R,Y=D;if((t=n.middlewareData.shift)!=null&&t.enabled.x&&(Y=C),(i=n.middlewareData.shift)!=null&&i.enabled.y&&($=S),P&&!h){const L=ft(y.left,0),Z=ft(y.right,0),G=ft(y.top,0),ee=ft(y.bottom,0);g?Y=z-2*(L!==0||Z!==0?L+Z:ft(y.left,y.right)):$=b-2*(G!==0||ee!==0?G+ee:ft(y.top,y.bottom))}await f({...n,availableWidth:Y,availableHeight:$});const K=await o.getDimensions(d.floating);return z!==K.width||b!==K.height?{reset:{rects:!0}}:{}}}};function Mu(){return typeof window<"u"}function es(e){return ub(e)?(e.nodeName||"").toLowerCase():"#document"}function mt(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function yr(e){var n;return(n=(ub(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function ub(e){return Mu()?e instanceof Node||e instanceof mt(e).Node:!1}function Kt(e){return Mu()?e instanceof Element||e instanceof mt(e).Element:!1}function gr(e){return Mu()?e instanceof HTMLElement||e instanceof mt(e).HTMLElement:!1}function Vy(e){return!Mu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mt(e).ShadowRoot}function xo(e){const{overflow:n,overflowX:t,overflowY:i,display:s}=Gt(e);return/auto|scroll|overlay|hidden|clip/.test(n+i+t)&&!["inline","contents"].includes(s)}function T_(e){return["table","td","th"].includes(es(e))}function Du(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function Am(e){const n=Pm(),t=Kt(e)?Gt(e):e;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function E_(e){let n=yi(e);for(;gr(n)&&!Ka(n);){if(Am(n))return n;if(Du(n))return null;n=yi(n)}return null}function Pm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ka(e){return["html","body","#document"].includes(es(e))}function Gt(e){return mt(e).getComputedStyle(e)}function Lu(e){return Kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function yi(e){if(es(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Vy(e)&&e.host||yr(e);return Vy(n)?n.host:n}function cb(e){const n=yi(e);return Ka(n)?e.ownerDocument?e.ownerDocument.body:e.body:gr(n)&&xo(n)?n:cb(n)}function so(e,n,t){var i;n===void 0&&(n=[]),t===void 0&&(t=!0);const s=cb(e),l=s===((i=e.ownerDocument)==null?void 0:i.body),o=mt(s);if(l){const d=Rf(o);return n.concat(o,o.visualViewport||[],xo(s)?s:[],d&&t?so(d):[])}return n.concat(s,so(s,[],t))}function Rf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function db(e){const n=Gt(e);let t=parseFloat(n.width)||0,i=parseFloat(n.height)||0;const s=gr(e),l=s?e.offsetWidth:t,o=s?e.offsetHeight:i,d=mu(t)!==l||mu(i)!==o;return d&&(t=l,i=o),{width:t,height:i,$:d}}function Rm(e){return Kt(e)?e:e.contextElement}function Da(e){const n=Rm(e);if(!gr(n))return dr(1);const t=n.getBoundingClientRect(),{width:i,height:s,$:l}=db(n);let o=(l?mu(t.width):t.width)/i,d=(l?mu(t.height):t.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!d||!Number.isFinite(d))&&(d=1),{x:o,y:d}}const A_=dr(0);function fb(e){const n=mt(e);return!Pm()||!n.visualViewport?A_:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function P_(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==mt(e)?!1:n}function Gi(e,n,t,i){n===void 0&&(n=!1),t===void 0&&(t=!1);const s=e.getBoundingClientRect(),l=Rm(e);let o=dr(1);n&&(i?Kt(i)&&(o=Da(i)):o=Da(e));const d=P_(l,t,i)?fb(l):dr(0);let f=(s.left+d.x)/o.x,m=(s.top+d.y)/o.y,y=s.width/o.x,u=s.height/o.y;if(l){const h=mt(l),g=i&&Kt(i)?mt(i):i;let z=h,b=Rf(z);for(;b&&i&&g!==z;){const x=Da(b),w=b.getBoundingClientRect(),S=Gt(b),C=w.left+(b.clientLeft+parseFloat(S.paddingLeft))*x.x,R=w.top+(b.clientTop+parseFloat(S.paddingTop))*x.y;f*=x.x,m*=x.y,y*=x.x,u*=x.y,f+=C,m+=R,z=mt(b),b=Rf(z)}}return pu({width:y,height:u,x:f,y:m})}function Im(e,n){const t=Lu(e).scrollLeft;return n?n.left+t:Gi(yr(e)).left+t}function mb(e,n,t){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),s=i.left+n.scrollLeft-(t?0:Im(e,i)),l=i.top+n.scrollTop;return{x:s,y:l}}function R_(e){let{elements:n,rect:t,offsetParent:i,strategy:s}=e;const l=s==="fixed",o=yr(i),d=n?Du(n.floating):!1;if(i===o||d&&l)return t;let f={scrollLeft:0,scrollTop:0},m=dr(1);const y=dr(0),u=gr(i);if((u||!u&&!l)&&((es(i)!=="body"||xo(o))&&(f=Lu(i)),gr(i))){const g=Gi(i);m=Da(i),y.x=g.x+i.clientLeft,y.y=g.y+i.clientTop}const h=o&&!u&&!l?mb(o,f,!0):dr(0);return{width:t.width*m.x,height:t.height*m.y,x:t.x*m.x-f.scrollLeft*m.x+y.x+h.x,y:t.y*m.y-f.scrollTop*m.y+y.y+h.y}}function I_(e){return Array.from(e.getClientRects())}function M_(e){const n=yr(e),t=Lu(e),i=e.ownerDocument.body,s=ft(n.scrollWidth,n.clientWidth,i.scrollWidth,i.clientWidth),l=ft(n.scrollHeight,n.clientHeight,i.scrollHeight,i.clientHeight);let o=-t.scrollLeft+Im(e);const d=-t.scrollTop;return Gt(i).direction==="rtl"&&(o+=ft(n.clientWidth,i.clientWidth)-s),{width:s,height:l,x:o,y:d}}function D_(e,n){const t=mt(e),i=yr(e),s=t.visualViewport;let l=i.clientWidth,o=i.clientHeight,d=0,f=0;if(s){l=s.width,o=s.height;const m=Pm();(!m||m&&n==="fixed")&&(d=s.offsetLeft,f=s.offsetTop)}return{width:l,height:o,x:d,y:f}}function L_(e,n){const t=Gi(e,!0,n==="fixed"),i=t.top+e.clientTop,s=t.left+e.clientLeft,l=gr(e)?Da(e):dr(1),o=e.clientWidth*l.x,d=e.clientHeight*l.y,f=s*l.x,m=i*l.y;return{width:o,height:d,x:f,y:m}}function By(e,n,t){let i;if(n==="viewport")i=D_(e,t);else if(n==="document")i=M_(yr(e));else if(Kt(n))i=L_(n,t);else{const s=fb(e);i={x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}}return pu(i)}function hb(e,n){const t=yi(e);return t===n||!Kt(t)||Ka(t)?!1:Gt(t).position==="fixed"||hb(t,n)}function O_(e,n){const t=n.get(e);if(t)return t;let i=so(e,[],!1).filter(d=>Kt(d)&&es(d)!=="body"),s=null;const l=Gt(e).position==="fixed";let o=l?yi(e):e;for(;Kt(o)&&!Ka(o);){const d=Gt(o),f=Am(o);!f&&d.position==="fixed"&&(s=null),(l?!f&&!s:!f&&d.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||xo(o)&&!f&&hb(e,o))?i=i.filter(y=>y!==o):s=d,o=yi(o)}return n.set(e,i),i}function N_(e){let{element:n,boundary:t,rootBoundary:i,strategy:s}=e;const o=[...t==="clippingAncestors"?Du(n)?[]:O_(n,this._c):[].concat(t),i],d=o[0],f=o.reduce((m,y)=>{const u=By(n,y,s);return m.top=ft(u.top,m.top),m.right=pi(u.right,m.right),m.bottom=pi(u.bottom,m.bottom),m.left=ft(u.left,m.left),m},By(n,d,s));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function F_(e){const{width:n,height:t}=db(e);return{width:n,height:t}}function V_(e,n,t){const i=gr(n),s=yr(n),l=t==="fixed",o=Gi(e,!0,l,n);let d={scrollLeft:0,scrollTop:0};const f=dr(0);if(i||!i&&!l)if((es(n)!=="body"||xo(s))&&(d=Lu(n)),i){const h=Gi(n,!0,l,n);f.x=h.x+n.clientLeft,f.y=h.y+n.clientTop}else s&&(f.x=Im(s));const m=s&&!i&&!l?mb(s,d):dr(0),y=o.left+d.scrollLeft-f.x-m.x,u=o.top+d.scrollTop-f.y-m.y;return{x:y,y:u,width:o.width,height:o.height}}function Bd(e){return Gt(e).position==="static"}function Uy(e,n){if(!gr(e)||Gt(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return yr(e)===t&&(t=t.ownerDocument.body),t}function pb(e,n){const t=mt(e);if(Du(e))return t;if(!gr(e)){let s=yi(e);for(;s&&!Ka(s);){if(Kt(s)&&!Bd(s))return s;s=yi(s)}return t}let i=Uy(e,n);for(;i&&T_(i)&&Bd(i);)i=Uy(i,n);return i&&Ka(i)&&Bd(i)&&!Am(i)?t:i||E_(e)||t}const B_=async function(e){const n=this.getOffsetParent||pb,t=this.getDimensions,i=await t(e.floating);return{reference:V_(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function U_(e){return Gt(e).direction==="rtl"}const $_={convertOffsetParentRelativeRectToViewportRelativeRect:R_,getDocumentElement:yr,getClippingRect:N_,getOffsetParent:pb,getElementRects:B_,getClientRects:I_,getDimensions:F_,getScale:Da,isElement:Kt,isRTL:U_};function gb(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function H_(e,n){let t=null,i;const s=yr(e);function l(){var d;clearTimeout(i),(d=t)==null||d.disconnect(),t=null}function o(d,f){d===void 0&&(d=!1),f===void 0&&(f=1),l();const m=e.getBoundingClientRect(),{left:y,top:u,width:h,height:g}=m;if(d||n(),!h||!g)return;const z=ql(u),b=ql(s.clientWidth-(y+h)),x=ql(s.clientHeight-(u+g)),w=ql(y),C={rootMargin:-z+"px "+-b+"px "+-x+"px "+-w+"px",threshold:ft(0,pi(1,f))||1};let R=!0;function D(P){const $=P[0].intersectionRatio;if($!==f){if(!R)return o();$?o(!1,$):i=setTimeout(()=>{o(!1,1e-7)},1e3)}$===1&&!gb(m,e.getBoundingClientRect())&&o(),R=!1}try{t=new IntersectionObserver(D,{...C,root:s.ownerDocument})}catch{t=new IntersectionObserver(D,C)}t.observe(e)}return o(!0),l}function W_(e,n,t,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:f=!1}=i,m=Rm(e),y=s||l?[...m?so(m):[],...so(n)]:[];y.forEach(w=>{s&&w.addEventListener("scroll",t,{passive:!0}),l&&w.addEventListener("resize",t)});const u=m&&d?H_(m,t):null;let h=-1,g=null;o&&(g=new ResizeObserver(w=>{let[S]=w;S&&S.target===m&&g&&(g.unobserve(n),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var C;(C=g)==null||C.observe(n)})),t()}),m&&!f&&g.observe(m),g.observe(n));let z,b=f?Gi(e):null;f&&x();function x(){const w=Gi(e);b&&!gb(b,w)&&t(),b=w,z=requestAnimationFrame(x)}return t(),()=>{var w;y.forEach(S=>{s&&S.removeEventListener("scroll",t),l&&S.removeEventListener("resize",t)}),u==null||u(),(w=g)==null||w.disconnect(),g=null,f&&cancelAnimationFrame(z)}}const q_=j_,K_=S_,G_=b_,Q_=__,Y_=w_,$y=z_,X_=C_,J_=(e,n,t)=>{const i=new Map,s={platform:$_,...t},l={...s.platform,_c:i};return v_(e,n,{...s,platform:l})};var ru=typeof document<"u"?_.useLayoutEffect:_.useEffect;function gu(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,i,s;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(i=t;i--!==0;)if(!gu(e[i],n[i]))return!1;return!0}if(s=Object.keys(e),t=s.length,t!==Object.keys(n).length)return!1;for(i=t;i--!==0;)if(!{}.hasOwnProperty.call(n,s[i]))return!1;for(i=t;i--!==0;){const l=s[i];if(!(l==="_owner"&&e.$$typeof)&&!gu(e[l],n[l]))return!1}return!0}return e!==e&&n!==n}function yb(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Hy(e,n){const t=yb(e);return Math.round(n*t)/t}function Ud(e){const n=_.useRef(e);return ru(()=>{n.current=e}),n}function Z_(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:i=[],platform:s,elements:{reference:l,floating:o}={},transform:d=!0,whileElementsMounted:f,open:m}=e,[y,u]=_.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[h,g]=_.useState(i);gu(h,i)||g(i);const[z,b]=_.useState(null),[x,w]=_.useState(null),S=_.useCallback(F=>{F!==P.current&&(P.current=F,b(F))},[]),C=_.useCallback(F=>{F!==$.current&&($.current=F,w(F))},[]),R=l||z,D=o||x,P=_.useRef(null),$=_.useRef(null),Y=_.useRef(y),K=f!=null,L=Ud(f),Z=Ud(s),G=Ud(m),ee=_.useCallback(()=>{if(!P.current||!$.current)return;const F={placement:n,strategy:t,middleware:h};Z.current&&(F.platform=Z.current),J_(P.current,$.current,F).then(q=>{const T={...q,isPositioned:G.current!==!1};B.current&&!gu(Y.current,T)&&(Y.current=T,Eu.flushSync(()=>{u(T)}))})},[h,n,t,Z,G]);ru(()=>{m===!1&&Y.current.isPositioned&&(Y.current.isPositioned=!1,u(F=>({...F,isPositioned:!1})))},[m]);const B=_.useRef(!1);ru(()=>(B.current=!0,()=>{B.current=!1}),[]),ru(()=>{if(R&&(P.current=R),D&&($.current=D),R&&D){if(L.current)return L.current(R,D,ee);ee()}},[R,D,ee,L,K]);const re=_.useMemo(()=>({reference:P,floating:$,setReference:S,setFloating:C}),[S,C]),ue=_.useMemo(()=>({reference:R,floating:D}),[R,D]),X=_.useMemo(()=>{const F={position:t,left:0,top:0};if(!ue.floating)return F;const q=Hy(ue.floating,y.x),T=Hy(ue.floating,y.y);return d?{...F,transform:"translate("+q+"px, "+T+"px)",...yb(ue.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:q,top:T}},[t,d,ue.floating,y.x,y.y]);return _.useMemo(()=>({...y,update:ee,refs:re,elements:ue,floatingStyles:X}),[y,ee,re,ue,X])}const eT=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:i,padding:s}=typeof e=="function"?e(t):e;return i&&n(i)?i.current!=null?$y({element:i.current,padding:s}).fn(t):{}:i?$y({element:i,padding:s}).fn(t):{}}}},nT=(e,n)=>({...q_(e),options:[e,n]}),tT=(e,n)=>({...K_(e),options:[e,n]}),rT=(e,n)=>({...X_(e),options:[e,n]}),iT=(e,n)=>({...G_(e),options:[e,n]}),aT=(e,n)=>({...Q_(e),options:[e,n]}),sT=(e,n)=>({...Y_(e),options:[e,n]}),oT=(e,n)=>({...eT(e),options:[e,n]});var lT="Arrow",kb=_.forwardRef((e,n)=>{const{children:t,width:i=10,height:s=5,...l}=e;return O.jsx(Cn.svg,{...l,ref:n,width:i,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:O.jsx("polygon",{points:"0,0 30,0 15,10"})})});kb.displayName=lT;var uT=kb;function vb(e){const[n,t]=_.useState(void 0);return Ki(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const i=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const l=s[0];let o,d;if("borderBoxSize"in l){const f=l.borderBoxSize,m=Array.isArray(f)?f[0]:f;o=m.inlineSize,d=m.blockSize}else o=e.offsetWidth,d=e.offsetHeight;t({width:o,height:d})});return i.observe(e,{box:"border-box"}),()=>i.unobserve(e)}else t(void 0)},[e]),n}var zb="Popper",[bb,wb]=wo(zb),[tV,xb]=bb(zb),jb="PopperAnchor",Sb=_.forwardRef((e,n)=>{const{__scopePopper:t,virtualRef:i,...s}=e,l=xb(jb,t),o=_.useRef(null),d=Et(n,o);return _.useEffect(()=>{l.onAnchorChange((i==null?void 0:i.current)||o.current)}),i?null:O.jsx(Cn.div,{...s,ref:d})});Sb.displayName=jb;var Mm="PopperContent",[cT,dT]=bb(Mm),Cb=_.forwardRef((e,n)=>{var ye,Ce,Ae,Be,kn,At;const{__scopePopper:t,side:i="bottom",sideOffset:s=0,align:l="center",alignOffset:o=0,arrowPadding:d=0,avoidCollisions:f=!0,collisionBoundary:m=[],collisionPadding:y=0,sticky:u="partial",hideWhenDetached:h=!1,updatePositionStrategy:g="optimized",onPlaced:z,...b}=e,x=xb(Mm,t),[w,S]=_.useState(null),C=Et(n,On=>S(On)),[R,D]=_.useState(null),P=vb(R),$=(P==null?void 0:P.width)??0,Y=(P==null?void 0:P.height)??0,K=i+(l!=="center"?"-"+l:""),L=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},Z=Array.isArray(m)?m:[m],G=Z.length>0,ee={padding:L,boundary:Z.filter(mT),altBoundary:G},{refs:B,floatingStyles:re,placement:ue,isPositioned:X,middlewareData:F}=Z_({strategy:"fixed",placement:K,whileElementsMounted:(...On)=>W_(...On,{animationFrame:g==="always"}),elements:{reference:x.anchor},middleware:[nT({mainAxis:s+Y,alignmentAxis:o}),f&&tT({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?rT():void 0,...ee}),f&&iT({...ee}),aT({...ee,apply:({elements:On,rects:Qt,availableWidth:vr,availableHeight:Yt})=>{const{width:Xt,height:Jt}=Qt.reference,st=On.floating.style;st.setProperty("--radix-popper-available-width",`${vr}px`),st.setProperty("--radix-popper-available-height",`${Yt}px`),st.setProperty("--radix-popper-anchor-width",`${Xt}px`),st.setProperty("--radix-popper-anchor-height",`${Jt}px`)}}),R&&oT({element:R,padding:d}),hT({arrowWidth:$,arrowHeight:Y}),h&&sT({strategy:"referenceHidden",...ee})]}),[q,T]=Eb(ue),I=pr(z);Ki(()=>{X&&(I==null||I())},[X,I]);const H=(ye=F.arrow)==null?void 0:ye.x,E=(Ce=F.arrow)==null?void 0:Ce.y,ce=((Ae=F.arrow)==null?void 0:Ae.centerOffset)!==0,[ke,ge]=_.useState();return Ki(()=>{w&&ge(window.getComputedStyle(w).zIndex)},[w]),O.jsx("div",{ref:B.setFloating,"data-radix-popper-content-wrapper":"",style:{...re,transform:X?re.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ke,"--radix-popper-transform-origin":[(Be=F.transformOrigin)==null?void 0:Be.x,(kn=F.transformOrigin)==null?void 0:kn.y].join(" "),...((At=F.hide)==null?void 0:At.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:O.jsx(cT,{scope:t,placedSide:q,onArrowChange:D,arrowX:H,arrowY:E,shouldHideArrow:ce,children:O.jsx(Cn.div,{"data-side":q,"data-align":T,...b,ref:C,style:{...b.style,animation:X?void 0:"none"}})})})});Cb.displayName=Mm;var _b="PopperArrow",fT={top:"bottom",right:"left",bottom:"top",left:"right"},Tb=_.forwardRef(function(n,t){const{__scopePopper:i,...s}=n,l=dT(_b,i),o=fT[l.placedSide];return O.jsx("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0},children:O.jsx(uT,{...s,ref:t,style:{...s.style,display:"block"}})})});Tb.displayName=_b;function mT(e){return e!==null}var hT=e=>({name:"transformOrigin",options:e,fn(n){var x,w,S;const{placement:t,rects:i,middlewareData:s}=n,o=((x=s.arrow)==null?void 0:x.centerOffset)!==0,d=o?0:e.arrowWidth,f=o?0:e.arrowHeight,[m,y]=Eb(t),u={start:"0%",center:"50%",end:"100%"}[y],h=(((w=s.arrow)==null?void 0:w.x)??0)+d/2,g=(((S=s.arrow)==null?void 0:S.y)??0)+f/2;let z="",b="";return m==="bottom"?(z=o?u:`${h}px`,b=`${-f}px`):m==="top"?(z=o?u:`${h}px`,b=`${i.floating.height+f}px`):m==="right"?(z=`${-f}px`,b=o?u:`${g}px`):m==="left"&&(z=`${i.floating.width+f}px`,b=o?u:`${g}px`),{data:{x:z,y:b}}}});function Eb(e){const[n,t="center"]=e.split("-");return[n,t]}var pT=Sb,gT=Cb,yT=Tb,[Ou,rV]=wo("Tooltip",[wb]),Dm=wb(),Ab="TooltipProvider",kT=700,Wy="tooltip.open",[vT,Pb]=Ou(Ab),Rb=e=>{const{__scopeTooltip:n,delayDuration:t=kT,skipDelayDuration:i=300,disableHoverableContent:s=!1,children:l}=e,o=_.useRef(!0),d=_.useRef(!1),f=_.useRef(0);return _.useEffect(()=>{const m=f.current;return()=>window.clearTimeout(m)},[]),O.jsx(vT,{scope:n,isOpenDelayedRef:o,delayDuration:t,onOpen:_.useCallback(()=>{window.clearTimeout(f.current),o.current=!1},[]),onClose:_.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>o.current=!0,i)},[i]),isPointerInTransitRef:d,onPointerInTransitChange:_.useCallback(m=>{d.current=m},[]),disableHoverableContent:s,children:l})};Rb.displayName=Ab;var Ib="Tooltip",[iV,Nu]=Ou(Ib),If="TooltipTrigger",zT=_.forwardRef((e,n)=>{const{__scopeTooltip:t,...i}=e,s=Nu(If,t),l=Pb(If,t),o=Dm(t),d=_.useRef(null),f=Et(n,d,s.onTriggerChange),m=_.useRef(!1),y=_.useRef(!1),u=_.useCallback(()=>m.current=!1,[]);return _.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),O.jsx(pT,{asChild:!0,...o,children:O.jsx(Cn.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...i,ref:f,onPointerMove:mn(e.onPointerMove,h=>{h.pointerType!=="touch"&&!y.current&&!l.isPointerInTransitRef.current&&(s.onTriggerEnter(),y.current=!0)}),onPointerLeave:mn(e.onPointerLeave,()=>{s.onTriggerLeave(),y.current=!1}),onPointerDown:mn(e.onPointerDown,()=>{s.open&&s.onClose(),m.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:mn(e.onFocus,()=>{m.current||s.onOpen()}),onBlur:mn(e.onBlur,s.onClose),onClick:mn(e.onClick,s.onClose)})})});zT.displayName=If;var bT="TooltipPortal",[aV,wT]=Ou(bT,{forceMount:void 0}),Ga="TooltipContent",Mb=_.forwardRef((e,n)=>{const t=wT(Ga,e.__scopeTooltip),{forceMount:i=t.forceMount,side:s="top",...l}=e,o=Nu(Ga,e.__scopeTooltip);return O.jsx(bm,{present:i||o.open,children:o.disableHoverableContent?O.jsx(Db,{side:s,...l,ref:n}):O.jsx(xT,{side:s,...l,ref:n})})}),xT=_.forwardRef((e,n)=>{const t=Nu(Ga,e.__scopeTooltip),i=Pb(Ga,e.__scopeTooltip),s=_.useRef(null),l=Et(n,s),[o,d]=_.useState(null),{trigger:f,onClose:m}=t,y=s.current,{onPointerInTransitChange:u}=i,h=_.useCallback(()=>{d(null),u(!1)},[u]),g=_.useCallback((z,b)=>{const x=z.currentTarget,w={x:z.clientX,y:z.clientY},S=TT(w,x.getBoundingClientRect()),C=ET(w,S),R=AT(b.getBoundingClientRect()),D=RT([...C,...R]);d(D),u(!0)},[u]);return _.useEffect(()=>()=>h(),[h]),_.useEffect(()=>{if(f&&y){const z=x=>g(x,y),b=x=>g(x,f);return f.addEventListener("pointerleave",z),y.addEventListener("pointerleave",b),()=>{f.removeEventListener("pointerleave",z),y.removeEventListener("pointerleave",b)}}},[f,y,g,h]),_.useEffect(()=>{if(o){const z=b=>{const x=b.target,w={x:b.clientX,y:b.clientY},S=(f==null?void 0:f.contains(x))||(y==null?void 0:y.contains(x)),C=!PT(w,o);S?h():C&&(h(),m())};return document.addEventListener("pointermove",z),()=>document.removeEventListener("pointermove",z)}},[f,y,o,m,h]),O.jsx(Db,{...e,ref:l})}),[jT,ST]=Ou(Ib,{isInside:!1}),CT=iS("TooltipContent"),Db=_.forwardRef((e,n)=>{const{__scopeTooltip:t,children:i,"aria-label":s,onEscapeKeyDown:l,onPointerDownOutside:o,...d}=e,f=Nu(Ga,t),m=Dm(t),{onClose:y}=f;return _.useEffect(()=>(document.addEventListener(Wy,y),()=>document.removeEventListener(Wy,y)),[y]),_.useEffect(()=>{if(f.trigger){const u=h=>{const g=h.target;g!=null&&g.contains(f.trigger)&&y()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[f.trigger,y]),O.jsx(zm,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:o,onFocusOutside:u=>u.preventDefault(),onDismiss:y,children:O.jsxs(gT,{"data-state":f.stateAttribute,...m,...d,ref:n,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[O.jsx(CT,{children:i}),O.jsx(jT,{scope:t,isInside:!0,children:O.jsx(SS,{id:f.contentId,role:"tooltip",children:s||i})})]})})});Mb.displayName=Ga;var Lb="TooltipArrow",_T=_.forwardRef((e,n)=>{const{__scopeTooltip:t,...i}=e,s=Dm(t);return ST(Lb,t).isInside?null:O.jsx(yT,{...s,...i,ref:n})});_T.displayName=Lb;function TT(e,n){const t=Math.abs(n.top-e.y),i=Math.abs(n.bottom-e.y),s=Math.abs(n.right-e.x),l=Math.abs(n.left-e.x);switch(Math.min(t,i,s,l)){case l:return"left";case s:return"right";case t:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function ET(e,n,t=5){const i=[];switch(n){case"top":i.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":i.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":i.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":i.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return i}function AT(e){const{top:n,right:t,bottom:i,left:s}=e;return[{x:s,y:n},{x:t,y:n},{x:t,y:i},{x:s,y:i}]}function PT(e,n){const{x:t,y:i}=e;let s=!1;for(let l=0,o=n.length-1;l<n.length;o=l++){const d=n[l].x,f=n[l].y,m=n[o].x,y=n[o].y;f>i!=y>i&&t<(m-d)*(i-f)/(y-f)+d&&(s=!s)}return s}function RT(e){const n=e.slice();return n.sort((t,i)=>t.x<i.x?-1:t.x>i.x?1:t.y<i.y?-1:t.y>i.y?1:0),IT(n)}function IT(e){if(e.length<=1)return e.slice();const n=[];for(let i=0;i<e.length;i++){const s=e[i];for(;n.length>=2;){const l=n[n.length-1],o=n[n.length-2];if((l.x-o.x)*(s.y-o.y)>=(l.y-o.y)*(s.x-o.x))n.pop();else break}n.push(s)}n.pop();const t=[];for(let i=e.length-1;i>=0;i--){const s=e[i];for(;t.length>=2;){const l=t[t.length-1],o=t[t.length-2];if((l.x-o.x)*(s.y-o.y)>=(l.y-o.y)*(s.x-o.x))t.pop();else break}t.push(s)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}var MT=Rb,Ob=Mb;const DT=MT,LT=_.forwardRef(({className:e,sideOffset:n=4,...t},i)=>O.jsx(Ob,{ref:i,sideOffset:n,className:un("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));LT.displayName=Ob.displayName;var Fu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Vu=typeof window>"u"||"Deno"in globalThis;function $t(){}function OT(e,n){return typeof e=="function"?e(n):e}function NT(e){return typeof e=="number"&&e>=0&&e!==1/0}function FT(e,n){return Math.max(e+(n||0)-Date.now(),0)}function qy(e,n){return typeof e=="function"?e(n):e}function VT(e,n){return typeof e=="function"?e(n):e}function Ky(e,n){const{type:t="all",exact:i,fetchStatus:s,predicate:l,queryKey:o,stale:d}=e;if(o){if(i){if(n.queryHash!==Lm(o,n.options))return!1}else if(!lo(n.queryKey,o))return!1}if(t!=="all"){const f=n.isActive();if(t==="active"&&!f||t==="inactive"&&f)return!1}return!(typeof d=="boolean"&&n.isStale()!==d||s&&s!==n.state.fetchStatus||l&&!l(n))}function Gy(e,n){const{exact:t,status:i,predicate:s,mutationKey:l}=e;if(l){if(!n.options.mutationKey)return!1;if(t){if(oo(n.options.mutationKey)!==oo(l))return!1}else if(!lo(n.options.mutationKey,l))return!1}return!(i&&n.state.status!==i||s&&!s(n))}function Lm(e,n){return((n==null?void 0:n.queryKeyHashFn)||oo)(e)}function oo(e){return JSON.stringify(e,(n,t)=>Mf(t)?Object.keys(t).sort().reduce((i,s)=>(i[s]=t[s],i),{}):t)}function lo(e,n){return e===n?!0:typeof e!=typeof n?!1:e&&n&&typeof e=="object"&&typeof n=="object"?Object.keys(n).every(t=>lo(e[t],n[t])):!1}function Nb(e,n){if(e===n)return e;const t=Qy(e)&&Qy(n);if(t||Mf(e)&&Mf(n)){const i=t?e:Object.keys(e),s=i.length,l=t?n:Object.keys(n),o=l.length,d=t?[]:{};let f=0;for(let m=0;m<o;m++){const y=t?m:l[m];(!t&&i.includes(y)||t)&&e[y]===void 0&&n[y]===void 0?(d[y]=void 0,f++):(d[y]=Nb(e[y],n[y]),d[y]===e[y]&&e[y]!==void 0&&f++)}return s===o&&f===s?e:d}return n}function Qy(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Mf(e){if(!Yy(e))return!1;const n=e.constructor;if(n===void 0)return!0;const t=n.prototype;return!(!Yy(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Yy(e){return Object.prototype.toString.call(e)==="[object Object]"}function BT(e){return new Promise(n=>{setTimeout(n,e)})}function UT(e,n,t){return typeof t.structuralSharing=="function"?t.structuralSharing(e,n):t.structuralSharing!==!1?Nb(e,n):n}function $T(e,n,t=0){const i=[...e,n];return t&&i.length>t?i.slice(1):i}function HT(e,n,t=0){const i=[n,...e];return t&&i.length>t?i.slice(0,-1):i}var Om=Symbol();function Fb(e,n){return!e.queryFn&&(n!=null&&n.initialPromise)?()=>n.initialPromise:!e.queryFn||e.queryFn===Om?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Vi,li,Na,cz,WT=(cz=class extends Fu{constructor(){super();Ne(this,Vi);Ne(this,li);Ne(this,Na);_e(this,Na,n=>{if(!Vu&&window.addEventListener){const t=()=>n();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){J(this,li)||this.setEventListener(J(this,Na))}onUnsubscribe(){var n;this.hasListeners()||((n=J(this,li))==null||n.call(this),_e(this,li,void 0))}setEventListener(n){var t;_e(this,Na,n),(t=J(this,li))==null||t.call(this),_e(this,li,n(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(n){J(this,Vi)!==n&&(_e(this,Vi,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(t=>{t(n)})}isFocused(){var n;return typeof J(this,Vi)=="boolean"?J(this,Vi):((n=globalThis.document)==null?void 0:n.visibilityState)!=="hidden"}},Vi=new WeakMap,li=new WeakMap,Na=new WeakMap,cz),Vb=new WT,Fa,ui,Va,dz,qT=(dz=class extends Fu{constructor(){super();Ne(this,Fa,!0);Ne(this,ui);Ne(this,Va);_e(this,Va,n=>{if(!Vu&&window.addEventListener){const t=()=>n(!0),i=()=>n(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",i)}}})}onSubscribe(){J(this,ui)||this.setEventListener(J(this,Va))}onUnsubscribe(){var n;this.hasListeners()||((n=J(this,ui))==null||n.call(this),_e(this,ui,void 0))}setEventListener(n){var t;_e(this,Va,n),(t=J(this,ui))==null||t.call(this),_e(this,ui,n(this.setOnline.bind(this)))}setOnline(n){J(this,Fa)!==n&&(_e(this,Fa,n),this.listeners.forEach(i=>{i(n)}))}isOnline(){return J(this,Fa)}},Fa=new WeakMap,ui=new WeakMap,Va=new WeakMap,dz),yu=new qT;function KT(){let e,n;const t=new Promise((s,l)=>{e=s,n=l});t.status="pending",t.catch(()=>{});function i(s){Object.assign(t,s),delete t.resolve,delete t.reject}return t.resolve=s=>{i({status:"fulfilled",value:s}),e(s)},t.reject=s=>{i({status:"rejected",reason:s}),n(s)},t}function GT(e){return Math.min(1e3*2**e,3e4)}function Bb(e){return(e??"online")==="online"?yu.isOnline():!0}var Ub=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function $d(e){return e instanceof Ub}function $b(e){let n=!1,t=0,i=!1,s;const l=KT(),o=b=>{var x;i||(h(new Ub(b)),(x=e.abort)==null||x.call(e))},d=()=>{n=!0},f=()=>{n=!1},m=()=>Vb.isFocused()&&(e.networkMode==="always"||yu.isOnline())&&e.canRun(),y=()=>Bb(e.networkMode)&&e.canRun(),u=b=>{var x;i||(i=!0,(x=e.onSuccess)==null||x.call(e,b),s==null||s(),l.resolve(b))},h=b=>{var x;i||(i=!0,(x=e.onError)==null||x.call(e,b),s==null||s(),l.reject(b))},g=()=>new Promise(b=>{var x;s=w=>{(i||m())&&b(w)},(x=e.onPause)==null||x.call(e)}).then(()=>{var b;s=void 0,i||(b=e.onContinue)==null||b.call(e)}),z=()=>{if(i)return;let b;const x=t===0?e.initialPromise:void 0;try{b=x??e.fn()}catch(w){b=Promise.reject(w)}Promise.resolve(b).then(u).catch(w=>{var P;if(i)return;const S=e.retry??(Vu?0:3),C=e.retryDelay??GT,R=typeof C=="function"?C(t,w):C,D=S===!0||typeof S=="number"&&t<S||typeof S=="function"&&S(t,w);if(n||!D){h(w);return}t++,(P=e.onFail)==null||P.call(e,t,w),BT(R).then(()=>m()?void 0:g()).then(()=>{n?h(w):z()})})};return{promise:l,cancel:o,continue:()=>(s==null||s(),l),cancelRetry:d,continueRetry:f,canStart:y,start:()=>(y()?z():g().then(z),l)}}var QT=e=>setTimeout(e,0);function YT(){let e=[],n=0,t=d=>{d()},i=d=>{d()},s=QT;const l=d=>{n?e.push(d):s(()=>{t(d)})},o=()=>{const d=e;e=[],d.length&&s(()=>{i(()=>{d.forEach(f=>{t(f)})})})};return{batch:d=>{let f;n++;try{f=d()}finally{n--,n||o()}return f},batchCalls:d=>(...f)=>{l(()=>{d(...f)})},schedule:l,setNotifyFunction:d=>{t=d},setBatchNotifyFunction:d=>{i=d},setScheduler:d=>{s=d}}}var Hn=YT(),Bi,fz,Hb=(fz=class{constructor(){Ne(this,Bi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),NT(this.gcTime)&&_e(this,Bi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Vu?1/0:5*60*1e3))}clearGcTimeout(){J(this,Bi)&&(clearTimeout(J(this,Bi)),_e(this,Bi,void 0))}},Bi=new WeakMap,fz),Ba,Ua,Ct,Ui,In,zo,$i,Ht,Er,mz,XT=(mz=class extends Hb{constructor(n){super();Ne(this,Ht);Ne(this,Ba);Ne(this,Ua);Ne(this,Ct);Ne(this,Ui);Ne(this,In);Ne(this,zo);Ne(this,$i);_e(this,$i,!1),_e(this,zo,n.defaultOptions),this.setOptions(n.options),this.observers=[],_e(this,Ui,n.client),_e(this,Ct,J(this,Ui).getQueryCache()),this.queryKey=n.queryKey,this.queryHash=n.queryHash,_e(this,Ba,ZT(this.options)),this.state=n.state??J(this,Ba),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var n;return(n=J(this,In))==null?void 0:n.promise}setOptions(n){this.options={...J(this,zo),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&J(this,Ct).remove(this)}setData(n,t){const i=UT(this.state.data,n,this.options);return Rn(this,Ht,Er).call(this,{data:i,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),i}setState(n,t){Rn(this,Ht,Er).call(this,{type:"setState",state:n,setStateOptions:t})}cancel(n){var i,s;const t=(i=J(this,In))==null?void 0:i.promise;return(s=J(this,In))==null||s.cancel(n),t?t.then($t).catch($t):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(J(this,Ba))}isActive(){return this.observers.some(n=>VT(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Om||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(n=0){return this.state.isInvalidated||this.state.data===void 0||!FT(this.state.dataUpdatedAt,n)}onFocus(){var t;const n=this.observers.find(i=>i.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(t=J(this,In))==null||t.continue()}onOnline(){var t;const n=this.observers.find(i=>i.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(t=J(this,In))==null||t.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),J(this,Ct).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(t=>t!==n),this.observers.length||(J(this,In)&&(J(this,$i)?J(this,In).cancel({revert:!0}):J(this,In).cancelRetry()),this.scheduleGc()),J(this,Ct).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Rn(this,Ht,Er).call(this,{type:"invalidate"})}fetch(n,t){var f,m,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(J(this,In))return J(this,In).continueRetry(),J(this,In).promise}if(n&&this.setOptions(n),!this.options.queryFn){const u=this.observers.find(h=>h.options.queryFn);u&&this.setOptions(u.options)}const i=new AbortController,s=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(_e(this,$i,!0),i.signal)})},l=()=>{const u=Fb(this.options,t),h={client:J(this,Ui),queryKey:this.queryKey,meta:this.meta};return s(h),_e(this,$i,!1),this.options.persister?this.options.persister(u,h,this):u(h)},o={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:J(this,Ui),state:this.state,fetchFn:l};s(o),(f=this.options.behavior)==null||f.onFetch(o,this),_e(this,Ua,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=o.fetchOptions)==null?void 0:m.meta))&&Rn(this,Ht,Er).call(this,{type:"fetch",meta:(y=o.fetchOptions)==null?void 0:y.meta});const d=u=>{var h,g,z,b;$d(u)&&u.silent||Rn(this,Ht,Er).call(this,{type:"error",error:u}),$d(u)||((g=(h=J(this,Ct).config).onError)==null||g.call(h,u,this),(b=(z=J(this,Ct).config).onSettled)==null||b.call(z,this.state.data,u,this)),this.scheduleGc()};return _e(this,In,$b({initialPromise:t==null?void 0:t.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:u=>{var h,g,z,b;if(u===void 0){d(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(u)}catch(x){d(x);return}(g=(h=J(this,Ct).config).onSuccess)==null||g.call(h,u,this),(b=(z=J(this,Ct).config).onSettled)==null||b.call(z,u,this.state.error,this),this.scheduleGc()},onError:d,onFail:(u,h)=>{Rn(this,Ht,Er).call(this,{type:"failed",failureCount:u,error:h})},onPause:()=>{Rn(this,Ht,Er).call(this,{type:"pause"})},onContinue:()=>{Rn(this,Ht,Er).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),J(this,In).start()}},Ba=new WeakMap,Ua=new WeakMap,Ct=new WeakMap,Ui=new WeakMap,In=new WeakMap,zo=new WeakMap,$i=new WeakMap,Ht=new WeakSet,Er=function(n){const t=i=>{switch(n.type){case"failed":return{...i,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...JT(i.data,this.options),fetchMeta:n.meta??null};case"success":return{...i,data:n.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=n.error;return $d(s)&&s.revert&&J(this,Ua)?{...J(this,Ua),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...n.state}}};this.state=t(this.state),Hn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),J(this,Ct).notify({query:this,type:"updated",action:n})})},mz);function JT(e,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Bb(n.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function ZT(e){const n=typeof e.initialData=="function"?e.initialData():e.initialData,t=n!==void 0,i=t?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:t?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var lr,hz,eE=(hz=class extends Fu{constructor(n={}){super();Ne(this,lr);this.config=n,_e(this,lr,new Map)}build(n,t,i){const s=t.queryKey,l=t.queryHash??Lm(s,t);let o=this.get(l);return o||(o=new XT({client:n,queryKey:s,queryHash:l,options:n.defaultQueryOptions(t),state:i,defaultOptions:n.getQueryDefaults(s)}),this.add(o)),o}add(n){J(this,lr).has(n.queryHash)||(J(this,lr).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const t=J(this,lr).get(n.queryHash);t&&(n.destroy(),t===n&&J(this,lr).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Hn.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return J(this,lr).get(n)}getAll(){return[...J(this,lr).values()]}find(n){const t={exact:!0,...n};return this.getAll().find(i=>Ky(t,i))}findAll(n={}){const t=this.getAll();return Object.keys(n).length>0?t.filter(i=>Ky(n,i)):t}notify(n){Hn.batch(()=>{this.listeners.forEach(t=>{t(n)})})}onFocus(){Hn.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Hn.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},lr=new WeakMap,hz),ur,$n,Hi,cr,si,pz,nE=(pz=class extends Hb{constructor(n){super();Ne(this,cr);Ne(this,ur);Ne(this,$n);Ne(this,Hi);this.mutationId=n.mutationId,_e(this,$n,n.mutationCache),_e(this,ur,[]),this.state=n.state||tE(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){J(this,ur).includes(n)||(J(this,ur).push(n),this.clearGcTimeout(),J(this,$n).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){_e(this,ur,J(this,ur).filter(t=>t!==n)),this.scheduleGc(),J(this,$n).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){J(this,ur).length||(this.state.status==="pending"?this.scheduleGc():J(this,$n).remove(this))}continue(){var n;return((n=J(this,Hi))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var l,o,d,f,m,y,u,h,g,z,b,x,w,S,C,R,D,P,$,Y;const t=()=>{Rn(this,cr,si).call(this,{type:"continue"})};_e(this,Hi,$b({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(K,L)=>{Rn(this,cr,si).call(this,{type:"failed",failureCount:K,error:L})},onPause:()=>{Rn(this,cr,si).call(this,{type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>J(this,$n).canRun(this)}));const i=this.state.status==="pending",s=!J(this,Hi).canStart();try{if(i)t();else{Rn(this,cr,si).call(this,{type:"pending",variables:n,isPaused:s}),await((o=(l=J(this,$n).config).onMutate)==null?void 0:o.call(l,n,this));const L=await((f=(d=this.options).onMutate)==null?void 0:f.call(d,n));L!==this.state.context&&Rn(this,cr,si).call(this,{type:"pending",context:L,variables:n,isPaused:s})}const K=await J(this,Hi).start();return await((y=(m=J(this,$n).config).onSuccess)==null?void 0:y.call(m,K,n,this.state.context,this)),await((h=(u=this.options).onSuccess)==null?void 0:h.call(u,K,n,this.state.context)),await((z=(g=J(this,$n).config).onSettled)==null?void 0:z.call(g,K,null,this.state.variables,this.state.context,this)),await((x=(b=this.options).onSettled)==null?void 0:x.call(b,K,null,n,this.state.context)),Rn(this,cr,si).call(this,{type:"success",data:K}),K}catch(K){try{throw await((S=(w=J(this,$n).config).onError)==null?void 0:S.call(w,K,n,this.state.context,this)),await((R=(C=this.options).onError)==null?void 0:R.call(C,K,n,this.state.context)),await((P=(D=J(this,$n).config).onSettled)==null?void 0:P.call(D,void 0,K,this.state.variables,this.state.context,this)),await((Y=($=this.options).onSettled)==null?void 0:Y.call($,void 0,K,n,this.state.context)),K}finally{Rn(this,cr,si).call(this,{type:"error",error:K})}}finally{J(this,$n).runNext(this)}}},ur=new WeakMap,$n=new WeakMap,Hi=new WeakMap,cr=new WeakSet,si=function(n){const t=i=>{switch(n.type){case"failed":return{...i,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...i,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:n.error,failureCount:i.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=t(this.state),Hn.batch(()=>{J(this,ur).forEach(i=>{i.onMutationUpdate(n)}),J(this,$n).notify({mutation:this,type:"updated",action:n})})},pz);function tE(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ar,Wt,bo,gz,rE=(gz=class extends Fu{constructor(n={}){super();Ne(this,Ar);Ne(this,Wt);Ne(this,bo);this.config=n,_e(this,Ar,new Set),_e(this,Wt,new Map),_e(this,bo,0)}build(n,t,i){const s=new nE({mutationCache:this,mutationId:++Bl(this,bo)._,options:n.defaultMutationOptions(t),state:i});return this.add(s),s}add(n){J(this,Ar).add(n);const t=Kl(n);if(typeof t=="string"){const i=J(this,Wt).get(t);i?i.push(n):J(this,Wt).set(t,[n])}this.notify({type:"added",mutation:n})}remove(n){if(J(this,Ar).delete(n)){const t=Kl(n);if(typeof t=="string"){const i=J(this,Wt).get(t);if(i)if(i.length>1){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}else i[0]===n&&J(this,Wt).delete(t)}}this.notify({type:"removed",mutation:n})}canRun(n){const t=Kl(n);if(typeof t=="string"){const i=J(this,Wt).get(t),s=i==null?void 0:i.find(l=>l.state.status==="pending");return!s||s===n}else return!0}runNext(n){var i;const t=Kl(n);if(typeof t=="string"){const s=(i=J(this,Wt).get(t))==null?void 0:i.find(l=>l!==n&&l.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Hn.batch(()=>{J(this,Ar).forEach(n=>{this.notify({type:"removed",mutation:n})}),J(this,Ar).clear(),J(this,Wt).clear()})}getAll(){return Array.from(J(this,Ar))}find(n){const t={exact:!0,...n};return this.getAll().find(i=>Gy(t,i))}findAll(n={}){return this.getAll().filter(t=>Gy(n,t))}notify(n){Hn.batch(()=>{this.listeners.forEach(t=>{t(n)})})}resumePausedMutations(){const n=this.getAll().filter(t=>t.state.isPaused);return Hn.batch(()=>Promise.all(n.map(t=>t.continue().catch($t))))}},Ar=new WeakMap,Wt=new WeakMap,bo=new WeakMap,gz);function Kl(e){var n;return(n=e.options.scope)==null?void 0:n.id}function Xy(e){return{onFetch:(n,t)=>{var y,u,h,g,z;const i=n.options,s=(h=(u=(y=n.fetchOptions)==null?void 0:y.meta)==null?void 0:u.fetchMore)==null?void 0:h.direction,l=((g=n.state.data)==null?void 0:g.pages)||[],o=((z=n.state.data)==null?void 0:z.pageParams)||[];let d={pages:[],pageParams:[]},f=0;const m=async()=>{let b=!1;const x=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(n.signal.aborted?b=!0:n.signal.addEventListener("abort",()=>{b=!0}),n.signal)})},w=Fb(n.options,n.fetchOptions),S=async(C,R,D)=>{if(b)return Promise.reject();if(R==null&&C.pages.length)return Promise.resolve(C);const P={client:n.client,queryKey:n.queryKey,pageParam:R,direction:D?"backward":"forward",meta:n.options.meta};x(P);const $=await w(P),{maxPages:Y}=n.options,K=D?HT:$T;return{pages:K(C.pages,$,Y),pageParams:K(C.pageParams,R,Y)}};if(s&&l.length){const C=s==="backward",R=C?iE:Jy,D={pages:l,pageParams:o},P=R(i,D);d=await S(D,P,C)}else{const C=e??l.length;do{const R=f===0?o[0]??i.initialPageParam:Jy(i,d);if(f>0&&R==null)break;d=await S(d,R),f++}while(f<C)}return d};n.options.persister?n.fetchFn=()=>{var b,x;return(x=(b=n.options).persister)==null?void 0:x.call(b,m,{client:n.client,queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},t)}:n.fetchFn=m}}}function Jy(e,{pages:n,pageParams:t}){const i=n.length-1;return n.length>0?e.getNextPageParam(n[i],n,t[i],t):void 0}function iE(e,{pages:n,pageParams:t}){var i;return n.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,n[0],n,t[0],t):void 0}var rn,ci,di,$a,Ha,fi,Wa,qa,yz,aE=(yz=class{constructor(e={}){Ne(this,rn);Ne(this,ci);Ne(this,di);Ne(this,$a);Ne(this,Ha);Ne(this,fi);Ne(this,Wa);Ne(this,qa);_e(this,rn,e.queryCache||new eE),_e(this,ci,e.mutationCache||new rE),_e(this,di,e.defaultOptions||{}),_e(this,$a,new Map),_e(this,Ha,new Map),_e(this,fi,0)}mount(){Bl(this,fi)._++,J(this,fi)===1&&(_e(this,Wa,Vb.subscribe(async e=>{e&&(await this.resumePausedMutations(),J(this,rn).onFocus())})),_e(this,qa,yu.subscribe(async e=>{e&&(await this.resumePausedMutations(),J(this,rn).onOnline())})))}unmount(){var e,n;Bl(this,fi)._--,J(this,fi)===0&&((e=J(this,Wa))==null||e.call(this),_e(this,Wa,void 0),(n=J(this,qa))==null||n.call(this),_e(this,qa,void 0))}isFetching(e){return J(this,rn).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return J(this,ci).findAll({...e,status:"pending"}).length}getQueryData(e){var t;const n=this.defaultQueryOptions({queryKey:e});return(t=J(this,rn).get(n.queryHash))==null?void 0:t.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),t=J(this,rn).build(this,n),i=t.state.data;return i===void 0?this.fetchQuery(e):(e.revalidateIfStale&&t.isStaleByTime(qy(n.staleTime,t))&&this.prefetchQuery(n),Promise.resolve(i))}getQueriesData(e){return J(this,rn).findAll(e).map(({queryKey:n,state:t})=>{const i=t.data;return[n,i]})}setQueryData(e,n,t){const i=this.defaultQueryOptions({queryKey:e}),s=J(this,rn).get(i.queryHash),l=s==null?void 0:s.state.data,o=OT(n,l);if(o!==void 0)return J(this,rn).build(this,i).setData(o,{...t,manual:!0})}setQueriesData(e,n,t){return Hn.batch(()=>J(this,rn).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,t)]))}getQueryState(e){var t;const n=this.defaultQueryOptions({queryKey:e});return(t=J(this,rn).get(n.queryHash))==null?void 0:t.state}removeQueries(e){const n=J(this,rn);Hn.batch(()=>{n.findAll(e).forEach(t=>{n.remove(t)})})}resetQueries(e,n){const t=J(this,rn);return Hn.batch(()=>(t.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const t={revert:!0,...n},i=Hn.batch(()=>J(this,rn).findAll(e).map(s=>s.cancel(t)));return Promise.all(i).then($t).catch($t)}invalidateQueries(e,n={}){return Hn.batch(()=>(J(this,rn).findAll(e).forEach(t=>{t.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const t={...n,cancelRefetch:n.cancelRefetch??!0},i=Hn.batch(()=>J(this,rn).findAll(e).filter(s=>!s.isDisabled()).map(s=>{let l=s.fetch(void 0,t);return t.throwOnError||(l=l.catch($t)),s.state.fetchStatus==="paused"?Promise.resolve():l}));return Promise.all(i).then($t)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const t=J(this,rn).build(this,n);return t.isStaleByTime(qy(n.staleTime,t))?t.fetch(n):Promise.resolve(t.state.data)}prefetchQuery(e){return this.fetchQuery(e).then($t).catch($t)}fetchInfiniteQuery(e){return e.behavior=Xy(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then($t).catch($t)}ensureInfiniteQueryData(e){return e.behavior=Xy(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return yu.isOnline()?J(this,ci).resumePausedMutations():Promise.resolve()}getQueryCache(){return J(this,rn)}getMutationCache(){return J(this,ci)}getDefaultOptions(){return J(this,di)}setDefaultOptions(e){_e(this,di,e)}setQueryDefaults(e,n){J(this,$a).set(oo(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...J(this,$a).values()],t={};return n.forEach(i=>{lo(e,i.queryKey)&&Object.assign(t,i.defaultOptions)}),t}setMutationDefaults(e,n){J(this,Ha).set(oo(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...J(this,Ha).values()],t={};return n.forEach(i=>{lo(e,i.mutationKey)&&Object.assign(t,i.defaultOptions)}),t}defaultQueryOptions(e){if(e._defaulted)return e;const n={...J(this,di).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Lm(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Om&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...J(this,di).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){J(this,rn).clear(),J(this,ci).clear()}},rn=new WeakMap,ci=new WeakMap,di=new WeakMap,$a=new WeakMap,Ha=new WeakMap,fi=new WeakMap,Wa=new WeakMap,qa=new WeakMap,yz),sE=_.createContext(void 0),oE=({client:e,children:n})=>(_.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),O.jsx(sE.Provider,{value:e,children:n}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},uo.apply(this,arguments)}var mi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mi||(mi={}));const Zy="popstate";function lE(e){e===void 0&&(e={});function n(s,l){let{pathname:o="/",search:d="",hash:f=""}=Yi(s.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Df("",{pathname:o,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(s,l){let o=s.document.querySelector("base"),d="";if(o&&o.getAttribute("href")){let f=s.location.href,m=f.indexOf("#");d=m===-1?f:f.slice(0,m)}return d+"#"+(typeof l=="string"?l:ku(l))}function i(s,l){Nm(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return cE(n,t,i,e)}function hn(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Nm(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function uE(){return Math.random().toString(36).substr(2,8)}function ek(e,n){return{usr:e.state,key:e.key,idx:n}}function Df(e,n,t,i){return t===void 0&&(t=null),uo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Yi(n):n,{state:t,key:n&&n.key||i||uE()})}function ku(e){let{pathname:n="/",search:t="",hash:i=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Yi(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function cE(e,n,t,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:l=!1}=i,o=s.history,d=mi.Pop,f=null,m=y();m==null&&(m=0,o.replaceState(uo({},o.state,{idx:m}),""));function y(){return(o.state||{idx:null}).idx}function u(){d=mi.Pop;let x=y(),w=x==null?null:x-m;m=x,f&&f({action:d,location:b.location,delta:w})}function h(x,w){d=mi.Push;let S=Df(b.location,x,w);t&&t(S,x),m=y()+1;let C=ek(S,m),R=b.createHref(S);try{o.pushState(C,"",R)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;s.location.assign(R)}l&&f&&f({action:d,location:b.location,delta:1})}function g(x,w){d=mi.Replace;let S=Df(b.location,x,w);t&&t(S,x),m=y();let C=ek(S,m),R=b.createHref(S);o.replaceState(C,"",R),l&&f&&f({action:d,location:b.location,delta:0})}function z(x){let w=s.location.origin!=="null"?s.location.origin:s.location.href,S=typeof x=="string"?x:ku(x);return S=S.replace(/ $/,"%20"),hn(w,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,w)}let b={get action(){return d},get location(){return e(s,o)},listen(x){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(Zy,u),f=x,()=>{s.removeEventListener(Zy,u),f=null}},createHref(x){return n(s,x)},createURL:z,encodeLocation(x){let w=z(x);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:h,replace:g,go(x){return o.go(x)}};return b}var nk;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nk||(nk={}));function dE(e,n,t){return t===void 0&&(t="/"),fE(e,n,t)}function fE(e,n,t,i){let s=typeof n=="string"?Yi(n):n,l=Fm(s.pathname||"/",t);if(l==null)return null;let o=Wb(e);mE(o);let d=null;for(let f=0;d==null&&f<o.length;++f){let m=SE(l);d=wE(o[f],m)}return d}function Wb(e,n,t,i){n===void 0&&(n=[]),t===void 0&&(t=[]),i===void 0&&(i="");let s=(l,o,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};f.relativePath.startsWith("/")&&(hn(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let m=hi([i,f.relativePath]),y=t.concat(f);l.children&&l.children.length>0&&(hn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Wb(l.children,n,y,m)),!(l.path==null&&!l.index)&&n.push({path:m,score:zE(m,l.index),routesMeta:y})};return e.forEach((l,o)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,o);else for(let f of qb(l.path))s(l,o,f)}),n}function qb(e){let n=e.split("/");if(n.length===0)return[];let[t,...i]=n,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let o=qb(i.join("/")),d=[];return d.push(...o.map(f=>f===""?l:[l,f].join("/"))),s&&d.push(...o),d.map(f=>e.startsWith("/")&&f===""?"/":f)}function mE(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:bE(n.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const hE=/^:[\w-]+$/,pE=3,gE=2,yE=1,kE=10,vE=-2,tk=e=>e==="*";function zE(e,n){let t=e.split("/"),i=t.length;return t.some(tk)&&(i+=vE),n&&(i+=gE),t.filter(s=>!tk(s)).reduce((s,l)=>s+(hE.test(l)?pE:l===""?yE:kE),i)}function bE(e,n){return e.length===n.length&&e.slice(0,-1).every((i,s)=>i===n[s])?e[e.length-1]-n[n.length-1]:0}function wE(e,n,t){let{routesMeta:i}=e,s={},l="/",o=[];for(let d=0;d<i.length;++d){let f=i[d],m=d===i.length-1,y=l==="/"?n:n.slice(l.length)||"/",u=xE({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y),h=f.route;if(!u)return null;Object.assign(s,u.params),o.push({params:s,pathname:hi([l,u.pathname]),pathnameBase:EE(hi([l,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(l=hi([l,u.pathnameBase]))}return o}function xE(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,i]=jE(e.path,e.caseSensitive,e.end),s=n.match(t);if(!s)return null;let l=s[0],o=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:i.reduce((m,y,u)=>{let{paramName:h,isOptional:g}=y;if(h==="*"){let b=d[u]||"";o=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const z=d[u];return g&&!z?m[h]=void 0:m[h]=(z||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:o,pattern:e}}function jE(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Nm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,d,f)=>(i.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),i]}function SE(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Nm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Fm(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}function CE(e,n){n===void 0&&(n="/");let{pathname:t,search:i="",hash:s=""}=typeof e=="string"?Yi(e):e;return{pathname:t?t.startsWith("/")?t:_E(t,n):n,search:AE(i),hash:PE(s)}}function _E(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Hd(e,n,t,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function TE(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Kb(e,n){let t=TE(e);return n?t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Gb(e,n,t,i){i===void 0&&(i=!1);let s;typeof e=="string"?s=Yi(e):(s=uo({},e),hn(!s.pathname||!s.pathname.includes("?"),Hd("?","pathname","search",s)),hn(!s.pathname||!s.pathname.includes("#"),Hd("#","pathname","hash",s)),hn(!s.search||!s.search.includes("#"),Hd("#","search","hash",s)));let l=e===""||s.pathname==="",o=l?"/":s.pathname,d;if(o==null)d=t;else{let u=n.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),u-=1;s.pathname=h.join("/")}d=u>=0?n[u]:"/"}let f=CE(s,d),m=o&&o!=="/"&&o.endsWith("/"),y=(l||o===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||y)&&(f.pathname+="/"),f}const hi=e=>e.join("/").replace(/\/\/+/g,"/"),EE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),AE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,PE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function RE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qb=["post","put","patch","delete"];new Set(Qb);const IE=["get",...Qb];new Set(IE);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},co.apply(this,arguments)}const Vm=_.createContext(null),ME=_.createContext(null),Xi=_.createContext(null),Bu=_.createContext(null),Ji=_.createContext({outlet:null,matches:[],isDataRoute:!1}),Yb=_.createContext(null);function DE(e,n){let{relative:t}=n===void 0?{}:n;jo()||hn(!1);let{basename:i,navigator:s}=_.useContext(Xi),{hash:l,pathname:o,search:d}=Jb(e,{relative:t}),f=o;return i!=="/"&&(f=o==="/"?i:hi([i,o])),s.createHref({pathname:f,search:d,hash:l})}function jo(){return _.useContext(Bu)!=null}function So(){return jo()||hn(!1),_.useContext(Bu).location}function Xb(e){_.useContext(Xi).static||_.useLayoutEffect(e)}function LE(){let{isDataRoute:e}=_.useContext(Ji);return e?QE():OE()}function OE(){jo()||hn(!1);let e=_.useContext(Vm),{basename:n,future:t,navigator:i}=_.useContext(Xi),{matches:s}=_.useContext(Ji),{pathname:l}=So(),o=JSON.stringify(Kb(s,t.v7_relativeSplatPath)),d=_.useRef(!1);return Xb(()=>{d.current=!0}),_.useCallback(function(m,y){if(y===void 0&&(y={}),!d.current)return;if(typeof m=="number"){i.go(m);return}let u=Gb(m,JSON.parse(o),l,y.relative==="path");e==null&&n!=="/"&&(u.pathname=u.pathname==="/"?n:hi([n,u.pathname])),(y.replace?i.replace:i.push)(u,y.state,y)},[n,i,o,l,e])}function Jb(e,n){let{relative:t}=n===void 0?{}:n,{future:i}=_.useContext(Xi),{matches:s}=_.useContext(Ji),{pathname:l}=So(),o=JSON.stringify(Kb(s,i.v7_relativeSplatPath));return _.useMemo(()=>Gb(e,JSON.parse(o),l,t==="path"),[e,o,l,t])}function NE(e,n){return FE(e,n)}function FE(e,n,t,i){jo()||hn(!1);let{navigator:s,static:l}=_.useContext(Xi),{matches:o}=_.useContext(Ji),d=o[o.length-1],f=d?d.params:{};d&&d.pathname;let m=d?d.pathnameBase:"/";d&&d.route;let y=So(),u;if(n){var h;let w=typeof n=="string"?Yi(n):n;m==="/"||(h=w.pathname)!=null&&h.startsWith(m)||hn(!1),u=w}else u=y;let g=u.pathname||"/",z=g;if(m!=="/"){let w=m.replace(/^\//,"").split("/");z="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=dE(e,{pathname:z}),x=HE(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},f,w.params),pathname:hi([m,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?m:hi([m,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,t,i);return n&&x?_.createElement(Bu.Provider,{value:{location:co({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:mi.Pop}},x):x}function VE(){let e=GE(),n=RE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},n),t?_.createElement("pre",{style:s},t):null,null)}const BE=_.createElement(VE,null);class UE extends _.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?_.createElement(Ji.Provider,{value:this.props.routeContext},_.createElement(Yb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $E(e){let{routeContext:n,match:t,children:i}=e,s=_.useContext(Vm);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(Ji.Provider,{value:n},i)}function HE(e,n,t,i){var s;if(n===void 0&&(n=[]),t===void 0&&(t=null),i===void 0&&(i=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,d=(s=t)==null?void 0:s.errors;if(d!=null){let y=o.findIndex(u=>u.route.id&&(d==null?void 0:d[u.route.id])!==void 0);y>=0||hn(!1),o=o.slice(0,Math.min(o.length,y+1))}let f=!1,m=-1;if(t&&i&&i.v7_partialHydration)for(let y=0;y<o.length;y++){let u=o[y];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(m=y),u.route.id){let{loaderData:h,errors:g}=t,z=u.route.loader&&h[u.route.id]===void 0&&(!g||g[u.route.id]===void 0);if(u.route.lazy||z){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((y,u,h)=>{let g,z=!1,b=null,x=null;t&&(g=d&&u.route.id?d[u.route.id]:void 0,b=u.route.errorElement||BE,f&&(m<0&&h===0?(YE("route-fallback"),z=!0,x=null):m===h&&(z=!0,x=u.route.hydrateFallbackElement||null)));let w=n.concat(o.slice(0,h+1)),S=()=>{let C;return g?C=b:z?C=x:u.route.Component?C=_.createElement(u.route.Component,null):u.route.element?C=u.route.element:C=y,_.createElement($E,{match:u,routeContext:{outlet:y,matches:w,isDataRoute:t!=null},children:C})};return t&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?_.createElement(UE,{location:t.location,revalidation:t.revalidation,component:b,error:g,children:S(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):S()},null)}var Zb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zb||{}),ew=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ew||{});function WE(e){let n=_.useContext(Vm);return n||hn(!1),n}function qE(e){let n=_.useContext(ME);return n||hn(!1),n}function KE(e){let n=_.useContext(Ji);return n||hn(!1),n}function nw(e){let n=KE(),t=n.matches[n.matches.length-1];return t.route.id||hn(!1),t.route.id}function GE(){var e;let n=_.useContext(Yb),t=qE(),i=nw();return n!==void 0?n:(e=t.errors)==null?void 0:e[i]}function QE(){let{router:e}=WE(Zb.UseNavigateStable),n=nw(ew.UseNavigateStable),t=_.useRef(!1);return Xb(()=>{t.current=!0}),_.useCallback(function(s,l){l===void 0&&(l={}),t.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,co({fromRouteId:n},l)))},[e,n])}const rk={};function YE(e,n,t){rk[e]||(rk[e]=!0)}function XE(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function iu(e){hn(!1)}function JE(e){let{basename:n="/",children:t=null,location:i,navigationType:s=mi.Pop,navigator:l,static:o=!1,future:d}=e;jo()&&hn(!1);let f=n.replace(/^\/*/,"/"),m=_.useMemo(()=>({basename:f,navigator:l,static:o,future:co({v7_relativeSplatPath:!1},d)}),[f,d,l,o]);typeof i=="string"&&(i=Yi(i));let{pathname:y="/",search:u="",hash:h="",state:g=null,key:z="default"}=i,b=_.useMemo(()=>{let x=Fm(y,f);return x==null?null:{location:{pathname:x,search:u,hash:h,state:g,key:z},navigationType:s}},[f,y,u,h,g,z,s]);return b==null?null:_.createElement(Xi.Provider,{value:m},_.createElement(Bu.Provider,{children:t,value:b}))}function ZE(e){let{children:n,location:t}=e;return NE(Lf(n),t)}new Promise(()=>{});function Lf(e,n){n===void 0&&(n=[]);let t=[];return _.Children.forEach(e,(i,s)=>{if(!_.isValidElement(i))return;let l=[...n,s];if(i.type===_.Fragment){t.push.apply(t,Lf(i.props.children,l));return}i.type!==iu&&hn(!1),!i.props.index||!i.props.children||hn(!1);let o={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Lf(i.props.children,l)),t.push(o)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Of(){return Of=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Of.apply(this,arguments)}function eA(e,n){if(e==null)return{};var t={},i=Object.keys(e),s,l;for(l=0;l<i.length;l++)s=i[l],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}function nA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tA(e,n){return e.button===0&&(!n||n==="_self")&&!nA(e)}const rA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],iA="6";try{window.__reactRouterVersion=iA}catch{}const aA="startTransition",ik=Qj[aA];function sA(e){let{basename:n,children:t,future:i,window:s}=e,l=_.useRef();l.current==null&&(l.current=lE({window:s,v5Compat:!0}));let o=l.current,[d,f]=_.useState({action:o.action,location:o.location}),{v7_startTransition:m}=i||{},y=_.useCallback(u=>{m&&ik?ik(()=>f(u)):f(u)},[f,m]);return _.useLayoutEffect(()=>o.listen(y),[o,y]),_.useEffect(()=>XE(i),[i]),_.createElement(JE,{basename:n,children:t,location:d.location,navigationType:d.action,navigator:o,future:i})}const oA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nf=_.forwardRef(function(n,t){let{onClick:i,relative:s,reloadDocument:l,replace:o,state:d,target:f,to:m,preventScrollReset:y,viewTransition:u}=n,h=eA(n,rA),{basename:g}=_.useContext(Xi),z,b=!1;if(typeof m=="string"&&lA.test(m)&&(z=m,oA))try{let C=new URL(window.location.href),R=m.startsWith("//")?new URL(C.protocol+m):new URL(m),D=Fm(R.pathname,g);R.origin===C.origin&&D!=null?m=D+R.search+R.hash:b=!0}catch{}let x=DE(m,{relative:s}),w=uA(m,{replace:o,state:d,target:f,preventScrollReset:y,relative:s,viewTransition:u});function S(C){i&&i(C),C.defaultPrevented||w(C)}return _.createElement("a",Of({},h,{href:z||x,onClick:b||l?i:S,ref:t,target:f}))});var ak;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ak||(ak={}));var sk;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sk||(sk={}));function uA(e,n){let{target:t,replace:i,state:s,preventScrollReset:l,relative:o,viewTransition:d}=n===void 0?{}:n,f=LE(),m=So(),y=Jb(e,{relative:o});return _.useCallback(u=>{if(tA(u,t)){u.preventDefault();let h=i!==void 0?i:ku(m)===ku(y);f(e,{replace:h,state:s,preventScrollReset:l,relative:o,viewTransition:d})}},[m,f,y,i,s,t,e,l,o,d])}const cA=()=>O.jsx("div",{className:"p-4 text-center",children:O.jsx("a",{href:"https://www.dyad.sh/",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:"Made with Dyad"})}),tw=_.forwardRef(({className:e,...n},t)=>O.jsx("textarea",{className:un("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:t,...n}));tw.displayName="Textarea";const dA=Sm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),qe=_.forwardRef(({className:e,variant:n,size:t,asChild:i=!1,...s},l)=>{const o=i?tS:"button";return O.jsx(o,{className:un(dA({variant:n,size:t,className:e})),ref:l,...s})});qe.displayName="Button";const ok=`be - legyen
I - én
you - te
the - a
a - egy
to - hogy
it - azt
not - nem
that - hogy
and - és
of - a
do - csinálj
have - van
what - Mi
we - mi
in - ban
get - kap
this - ez
my - az én
me - nekem
go - megy
oh - ó
can - tud
no - nem
for - mert
know - tud
just - éppen
your - a te
all - minden
so - így
he - ő
but - de
yeah - igen
well - jól
think - gondol
here - i@
want - akar
out - ki
about - körülbelül
good - jó
come - jön
up - fel
say - mondd
now - jelenleg
at - a
one - egy
hey - hé
they - azok
see - látni
if - ha
how - hogyan
like - mint
she - ő
look - Nézze
make - készíteni
right - jobbra
guy - fickó
take - vesz
let - hagyd
really - igazán
okay - Rendben
her - neki
uh - ööö
tell - mondd el
him - neki
why - Miért
there - o@
time - idő
thing - dolog
will - akarat
like - mint
when - amikor
as - mint
because - mert
some - néhány
our - a miénk
yes - igen
there - o@
back - vissza
mean - átlagos
man - férfi
little - kis
give - ad
his - az övé
us - minket
them - őket
need - igény
then - majd
shall - kell
or - vagy
talk - beszélgetés
okay - Rendben
something - valami
where - ahol
great - nagy
way - út
never - soha
call - hívás
too - is
by - által
sorry - sajnálom
over - fele@
love - szeretet
wait - Várjon
more - több
down - le-
day - nap
two - két
people - emberek
God - Isten
very - nagyon
off - le
work - munka
thank - köszönet
big - nagy
try - megpróbál
dad - apu
maybe - talán
feel - érezni
friend - barát
even - még
sure - Persze
find - lelet
kid - kölyök
these - ezek
boy - fiú
put - tesz
please - Kérem
happen - történik
much - sokkal
night - éjszaka
bad - rossz
those - azok
any - bármilyen
right - jobbra
first - első
leave - szabadság
year - év
hear - hall
right - jobbra
ever - valaha
Mr - Úr
again - újra
use - használat
mom - anya
may - május
hi - Szia
life - élet
nice - szép
new - új
still - még mindig
kind - fajta
anything - bármi
only - csak
baby - baba
than - mint
fine - finom
hello - Helló
keep - tart
girl - lány
help - Segítség
believe - hisz
woman - nő
lot - sok
play - játék
ask - kérdez
start - indul
home - o@hon
nothing - semmi
their - az ő
meet - találkozik
show - megmutat
around - körül
guess - találgatás
old - régi
hell - pokol
before - elő@
always - mindig
three - három
listen - hallgat
thanks - Köszönöm
minute - perc
actually - tulajdonképpen
eat - eszik
place - hely
live - élő
away - el
after - után
bring - hozni
every - minden
everything - minden
money - pénz
person - személy
watch - óra
other - más
remember - emlékszem
house - ház
wrong - rossz
kill - megöl
school - iskola
everyone - mindenki
run - fut
late - késő
care - gondoskodás
car - autó
move - mozog
idea - ötlet
another - másik
someone - valaki
today - ma
turn - fordulat
real - igazi
happy - boldog
whole - egész
week - hét
job - munka
fun - szórakozás
problem - probléma
break - szünet
world - világ
which - melyik
must - kell
party - fél
buy - vétel
through - keresztül
together - együ@
room - szoba
family - család
stay - marad
lose - veszít
stuff - dolog
son - fiú
stupid - hülye
name - név
everybody - mindenki
last - utolsó
long - hosszú
tonight - ma este
child - gyermek
sit - ül
course - pálya
pretty - szép
hold - tart
game - játék
forget - elfelejteni
else - más
own - saját
five - öt
second - második
doctor - orvos
dollar - dollár
enough - elég
dog - kutya
funny - vicces
wear - viselet
die - meghal
sir - uram
hard - kemény
honey - méz
sound - hang
sex - szex
hate - gyűlölet
suppose - feltételezem
God - Isten
head - fej
understand - megérteni
whoa - Hűha
movie - film
worry - aggodalom
cool - hűvös
marry - házasságot kötni
miss - hiányzik
pay - fizetés
hour - óra
crazy - őrült
change - változás
hot - forró
most - legtöbb
excuse - mentség
mother - anya
check - ellenőrzés
pick - csákány
word - szó
same - azonos
yourself - magad
ready - kész
seem - látszik
win - győzelem
walk - séta
father - apa
story - történet
already - már
hope - remény
part - rész
open - nyito@
lady - hölgy
read - olvas
drink - ital
sleep - alvás
number - szám
write - ír
morning - reggel
tomorrow - holnap
next - következő
phone - telefon
four - négy
last - utolsó
once - egyszer
somebody - valaki
probably - valószínűleg
without - nélkül
many - sok
such - ilyen
eye - szem
drive - hajtás
wife - feleség
book - könyv
hang - akasztani
since - mivel
throw - dobás
name - név
dead - halo@
stand - állvány
myself - magamat
aw - jaj
dinner - vacsora
anyone - bárki
hand - kéz
each - minden
anyway - különben is
television - televízió
learn - tanul
shut - zárva
town - város
beautiful - gyönyörű
both - mindkét
date - dátum
spend - tölt
office - hivatal
hit - találat
yet - még
save - megtakarítás
true - IGAZ
sweet - édes
food - élelmiszer
while - míg
send - elküld
high - magas
anymore - többé
also - is
news - hír
Christmas - karácsonyi
ten - Tz
ass - szamár
business - üzleU
only - csak
couple - párosít
totally - teljesen
door - ajtó
gay - meleg
exactly - pontosan
parent - szülő
few - kevés
month - hónap
easy - könnyen
deal - üzlet
hurt - fáj
nobody - senki
OK - RENDBEN
perfect - tökéletes
lie - hazugság
free - ingyenes
young - fiatal
weird - furcsa
whatever - bármi
brother - testvér
work - munka
kid - kölyök
ago - ezelő@
end - vég
other - más
ball - labda
finally - végül
line - vonal
its - annak
important - fontos
fall - esik
heart - szív
long - hosszú
fat - zsír
class - osztály
shoot - lő
picture - kép
sell - elad
side - oldal
wish - kíván
love - szeretet
mind - elme
hair - haj
cut - vágo@
wedding - esküvő
reason - ok
become - válik
least - legkevésbé
look - Nézze
bite - harapás
fuck - basszus
under - ala@
bed - ágy
paper - papír
different - különböző
catch - fogás
mine - enyém
six - hat
set - készlet
face - arc
speak - beszél
suck - szív
sometimes - néha
city - város
special - különleges
stick - bot
question - kérdés
dude - haver
realize - rájönni
birthday - születésnap
point - pont
enjoy - élvez
fact - tény
dance - tánc
soon - hamar
bar - bár
wonder - csoda
joke - tréfa
relationship - kapcsolat
chance - véletlen
black - fekete
almost - majdnem
fight - harc
card - kártya
song - dal
little - kis
bye - Viszlát
coffee - kávé
awesome - döbbenetes
sick - beteg
apartment - lakás
sorry - sajnálom
back - vissza
figure - ábra
pull - Húzni
box - doboz
dream - álom
water - víz
decide - dönt
store - bolt
bet - tét
lunch - ebéd
face - arc
anybody - bárki
afraid - félek
buddy - haver
cute - csinos
close - közeli
bathroom - fürdőszoba
show - megmutat
mind - elme
steal - lop
full - tele
company - vállalat
front - elülső
ahead - előre
moment - pillanat
case - ügy
date - dátum
though - bár
body - test
Mrs - Asszony
pants - nadrág
bitch - kurva
promise - ígéret
glad - boldog
kiss - csók
either - bármelyik
fire - Tűz
grow - nő
build - épít
table - táblázat
ticket - jegy
matter - anyag
teach - tanít
cat - macska
sister - nővér
girlfriend - barátnő
hat - kalap
touch - érintés
terrible - szörnyű
beer - sör
damn - átkozo@
club - klub
amaze - meghökkent
smell - szag
gift - ajándék
serious - súlyos
plan - terv
street - utca
team - csapat
order - rendelés
cry - kiáltás
zero - nulla
drop - csepp
act - törvény
alone - kizárólag
seat - ülés
eh - ööö
between - közö@
eight - nyolc
twenty - húsz
foot - láb
seven - hét
finish - befejezés
gentleman - úriember
hand - kéz
point - pont
blow - fúj
small - kicsi
trouble - baj
sweetie - édesem
sing - énekel
pass - átmegy
beat - üt
piece - darab
shoe - cipő
welcome - üdvözöljük
god - Isten
white - fehér
kick - rúgás
bag - táska
fire - Tűz
early - korai
excite - felizgat
wonderful - csodálatos
seriously - komolyan
country - ország
mouth - száj
question - kérdés
dear - kedves
quite - egészen
smart - okos
husband - férj
shh - pszt
invite - meghív
rest - pihenés
yours - a Uéd
behind - mögö@
key - kulcsfontosságú
end - vég
dress - ruha
red - piros
laugh - nevetés
help - Segítség
agree - egyetért
machine - gép
yep - Igen
return - visszatérés
space - tér
mad - őrült
truth - igazság
ice - jég
follow - követni
outside - kívül
idiot - idióta
rule - szabály
absolutely - teljesen
next - következő
against - ellen
American - amerikai
need - igény
scare - megijeszt
notice - értesítés
chicken - csirke
ride - lovagol
music - zene
join - csatlakozik
next - következő
good-bye - búcsú
ruin - rom
war - háború
screw - csavar
light - fény
along - mentén
poor - szegény
sense - érzék
able - képes
matter - anyag
secret - Utkos
fly - repül
top - felső
sure - Persze
fair - igazságos
relax - pihenj
boyfriend - barát
plan - terv
mistake - hiba
luck - szerencse
group - csoport
daughter - lánya
college - főiskola
president - elnök
far - messze
sign - jel
close - közeli
message - üzenet
freak - szörnyszülö@
fault - hiba
quick - gyors
till - amíg
except - kivéve
single - egyetlen
shirt - ing
choice - választás
attention - Figyelem
power - hatalom
quit - kilép
answer - válasz
trust - bizalom
fifty - ötven
leg - láb
wake - ébred
human - emberi
star - csillag
student - diák
air - levegő
chair - szék
gun - pisztoly
begin - kezdődik
death - halál
tree - fa
boss - főnök
while - míg
present - jelenlegi
instead - helye@e
lucky - szerencsés
safe - biztonságos
cold - hideg
ahh - áá
explain - magyarázd el
video - videó
brain - agy
completely - teljesen
voice - hang
cake - torta
drink - ital
trip - utazás
monkey - majom
hundred - száz
fix - javítás
entire - teljes
expect - számítani
million - millió
allow - engedélyez
forever - örökre
hide - elrejt
huge - hatalmas
interesting - érdekes
fight - harc
roll - tekercs
clothes - ruházat
fast - gyors
grab - megragad
teacher - tanár
crap - szar
animal - állaU
burn - éget
tough - kemény
restaurant - é@erem
sort - fajta
tooth - fog
marriage - házasság
proud - büszke
uncle - nagybácsi
push - tol
butt - csikk
offer - ajánlat
unless - hacsak
feeling - érzés
suit - öltöny
floor - emelet
cream - krém
favorite - kedvenc
naked - meztelen
list - lista
ring - gyűrű
clean - Uszta
apologize - bocsánatot kérni
clear - világos
Earth - Föld
share - részesedés
fill - töltelék
cool - hűvös
ridiculous - nevetséges
alive - élő
pretend - színlelni
hospital - kórház
sad - szomorú
bunch - csokor
half - fél
police - rendőrség
fish - hal
window - ablak
busy - elfoglalt
sign - jel
call - hívás
pie - pite
answer - válasz
raise - emel
somewhere - valahol
sandwich - szendvics
thirty - harminc
sale - eladás
choose - választ
definitely - határozo@an
swear - esküszik
pretty - szép
boat - hajó
tired - fáradt
upset - felborít
less - kevesebb
nine - kilenc
thousand - ezer
smoke - füst
embarrass - zavarba hoz
band - zenekar
bear - medve
none - egyik sem
Santa - Mikulás
strong - erős
law - törvény
toilet - WC
jump - ugrás
count - gróf
egg - tojás
Saturday - szombat
blue - kék
horrible - szörnyű
shit - szar
favor - szívesség
handle - fogantyú
wall - fal
art - művészet
cover - borító
arm - kar
perhaps - talán
simple - egyszerű
bus - busz
appreciate - értékelem
himself - ő maga
surprise - meglepetés
candy - cukorka
finger - ujj
worth - érdemes
state - állami
possible - lehetséges
rich - gazdag
short - rövid
king - király
knock - kopogás
cookie - süU
penis - hímvessző
history - történelem
imagine - képzeld el
third - harmadik
blood - vér
drug - kábítószer
future - jövőbeli
prove - bizonyítani
surprise - meglepetés
alright - rendben van
captain - kapitány
evening - este
congratulations - Gratulálok
system - rendszer
record - rekord
age - kor
deserve - megérdemlik
normal - normál
yesterday - tegnap
jerk - bunkó
yay - hurrá
bird - madár
nose - orr
bother - zavar
fan - venUlátor
letter - levél
rather - inkább
head - fej
interested - érdekelt
owe - tartozik
pregnant - terhes
destroy - elpuszTt
bear - medve
evil - gonosz
milk - tej
admit - beismerni
apparently - látszólag
conversation - beszélgetés
obviously - nyilvánvalóan
jacket - kabát
during - ala@
accept - elfogad
dumb - néma
consider - fontolóra
mention - említés
step - lépés
deal - üzlet
hungry - éhes
situation - helyzet
lead - ólom
twelve - Uzenkét
fantastic - fantaszUkus
hole - lyuk
plus - plusz
note - jegyzet
test - teszt
honest - becsületes
character - karakter
holy - szent
manager - menedzser
lesson - lecke
soul - lélek
nope - dehogy
dark - sötét
difference - különbség
wine - bor
road - út
calm - nyugodt
personal - személyes
clown - bohóc
computer - számítógép
horse - ló
gosh - istenem
mayor - polgármester
inside - belső
sexy - szexis
dirty - piszkos
carry - visz
professor - egyetemi tanár
usually - általában
bottle - üveg
cheese - sajt
summer - nyári
remind - emlékeztet
afternoon - délután
pee - pisilni
across - át
angry - dühös
fella - fickó
reach - elér
shower - zuhany
cup - csésze
lawyer - ügyvéd
camera - kamera
pain - fájdalom
hurry - siet
desk - íróasztal
monster - szörnyeteg
certainly - biztosan
cop - zsaru
credit - hitel
prepare - készít
anywhere - bárhol
breakfast - reggeli
bastard - fa@yú
damn - átkozo@
church - templom
hire - bérel
decision - döntés
Miss - Hiányzik
pig - sertés
loser - vesztes
deep - mély
chocolate - csokoládé
service - szolgáltatás
Jew - zsidó
tape - szalag
kitchen - konyha
half - fél
rid - megszabadulni
grandpa - nagypapa
hero - hős
shot - lövés
spot - folt
folks - emberek
yell - ordítás
awful - szörnyű
scene - színhely
trick - trükk
asshole - seggfej
issue - kérdés
lovely - bájos
visit - látogatás
honor - becsület
clean - Uszta
second - második
chick - csaj
costume - ruha
Friday - péntek
hall - terem
Ms - Asszony
fake - hamisítvány
forgive - megbocsát
grade - fokozat
fifteen - Uzenöt
ought - kellene
cheat - csal
Chinese - kínai
crap - szar
create - teremt
comfortable - kényelmes
hotel - szálloda
magazine - magazin
settle - letelepedni
accident - baleset
boob - fajankó
excellent - kiváló
neighbor - szomszéd
train - vonat
board - bizo@ság
spirit - szellem
cow - tehén
building - épület
ear - fül
giant - óriás
ugly - csúnya
toy - játék
cancel - mégsem
strange - furcsa
aunt - néni
island - sziget
extra - külön-
fit - illik
rock - szikla
step - lépés
action - akció
bill - számla
field - mező
kiss - csók
fresh - friss
level - szint
cost - költség
size - méret
cell - sejt
serve - szolgál
shake - ráz
neck - nyak
bowl - tál
control - ellenőrzés
loud - hangos
bedroom - hálószoba
check - ellenőrzés
heaven - ég
right - jobbra
commercial - kereskedelmi
draw - rajzolni
guest - vendég
insane - őrült
fail - kudarc
cook - szakács
pleasure - öröm
truck - teherautó
science - tudomány
careful - óvatos
nervous - ideges
although - bár
gas - gáz
ew - új
scream - sikoly
pool - medence
appear - megjelenik
clearly - egyértelműen
silly - buta
feed - takarmány
charge - díj
neither - sem
wash - mosás
stink - bűz
magic - mágikus
plane - repülőgép
tiny - apró
prison - börtön
cause - ok
photo - fénykép
public - nyilvános
button - gomb
flower - virág
memory - memória
own - saját
fast - gyors
base - bázis
involve - bevonni
madam - madám
blame - hibáztatni
whoo - Hűha
bike - bicikli
freeze - fagy
sexual - szexuális
code - kód
celebrate - ünnepel
couch - kanapé
inside - belső
price - ár
assume - feltételez
delicious - finom
forty - negyven
player - játékos
soup - leves
waste - hulladék
coat - kabát
doll - baba
security - biztonság
warm - meleg
football - futball
model - modell
whose - akinek
besides - kívül
middle - középső
shop - üzlet
garbage - szemét
client - ügyfél
ground - föld
lame - béna
project - projekt
dare - merészel
shop - üzlet
episode - epizód
glass - üveg
green - zöld
lock - zár
award - díj
straight - egyenes
unbelievable - hihetetlen
court - bíróság
experience - tapasztalat
final - végső
large - nagy
salad - saláta
belong - tartozik
fuck - basszus
station - állomás
area - terület
vote - szavazás
crime - bűncselekmény
meat - hús
romantic - romanUkus
treat - élvezet
forward - előre
glasses - szemüveg
lie - hazugság
taste - íz
weight - súly
mail - felad
cab - taxi
two hundred - kétszáz
boring - fúrás
information - információ
total - teljes
channel - csatorna
page - oldal
suddenly - hirtelen
sake - szaké
Thanksgiving - Hálaadás
private - magán
French - francia
winner - győztes
past - elmúlt
pen - toll
twice - kétszer
cousin - unokatestvér
jealous - féltékeny
mess - rendetlenség
planet - bolygó
scary - ijedős
universe - világegyetem
upstairs - emeleten
genius - zseni
dangerous - veszélyes
nuts - diófélék
ourselves - magunkat
race - verseny
suggest - javasol
turn - fordulat
sea - tenger
officer - Usztviselő
meal - étkezés
popular - népszerű
report - jelentés
welcome - üdvözöljük
flight - repülési
change - változás
driver - sofőr
wheel - kerék
dump - szemétlerakó
five hundred - ötszáz
member - tag
add - hozzáadás
confuse - összezavar
form - forma
government - kormány
Sunday - vasárnap
order - rendelés
continue - folytatás
event - esemény
quiet - csendes
low - alacsony
color - szín
Jewish - zsidó
nah - nem
breast - mell
parking - parkolás
ride - lovagol
wild - vad
turkey - Törökország
blah - blabla
thought - gondolat
famous - híres
gold - arany
pound - font
skin - bőr
one hundred - száz
rat - patkány
switch - kapcsoló
tie - nyakkendő
career - karrier
juice - lé
like - mint
protect - védelmet
shame - szégyen
bottom - alsó
respect - Usztelet
underwear - alsónemű
Indian - indián
closet - szekrény
meeting - találkozó
sun - nap
afford - megengedhet magának
bald - kopasz
engage - bekapcsolódni
plant - növény
towel - törülköző
mall - bevásárlóközpont
regular - szabályos
bone - csont
dig - ásni
fear - félelem
cancer - Rák
discuss - megbeszélni
fancy - képzelet
control - ellenőrzés
advice - tanács
center - központ
apple - alma
everywhere - mindenhol
holiday - ünnep
cash - készpénz
common - közös
crush - összetörni
mess - rendetlenség
peace - béke
warn - figyelmeztet
welcome - üdvözöljük
adult - felnő@
noise - zaj
rock - szikla
super - szuper
bread - kenyér
fucking - kibaszo@
porn - pornó
three hundred - háromszáz
type - Tpus
borrow - kölcsön
department - osztály
plate - lemez
breathe - lélegzik
classic - klasszikus
disgusting - undorító
tall - magas
taste - íz
replace - cserélni
somehow - valahogy
theater - színház
discover - felfedezni
incredible - hihetetlen
plenty - bőven
comedy - komédia
enter - belép
introduce - bemutatni
whenever - bármikor
butter - vaj
possibly - esetleg
sweetheart - Édesem
jail - börtön
season - évad
study - tanulmány
miracle - csoda
complete - teljes
hook - horog
perfectly - tökéletesen
stare - bámul
flag - zászló
jeez - istenem
roommate - szobatárs
ship - hajó
wood - faipari
actor - színész
break - szünet
prize - díj
thanks - Köszönöm
corner - sarok
fourth - negyedik
sneak - se@enkedik
piss - húgy
pocket - zseb
tip - Upp
alone - kizárólag
lately - utóbbi időben
queen - királynő
tear - könny
especially - főleg
lay - világi
pressure - nyomás
rip - hasítás
assistant - helye@es
camp - tábor
judge - bíró
North - Északi
often - gyakran
vacation - vakáció
impossible - lehetetlen
square - négyzet
left - balra
grandma - nagymama
gross - bru@ó
pal - haver
smile - mosoly
speech - beszéd
bust - mellszobor
gee - Jé
handsome - jóképű
safety - biztonság
test - teszt
community - közösség
beach - strand
gym - tornaterem
toast - pirítós
disease - betegség
paint - festék
themselves - maguk
Monday - héaő
pack - csomag
punch - puncs
customer - vevő
healthy - egészséges
invent - feltalálni
princess - hercegnő
merry - vidám
someday - valamikor
blind - vak
certain - bizonyos
solve - megoldani
study - tanulmány
sweater - pulóver
terrific - nagyszerű
wet - nedves
attack - támadás
beg - könyörög
cigarette - cigare@a
sugar - cukor
weekend - hétvégi
damn - átkozo@
sock - zokni
emergency - vészhelyzet
mood - hangulat
peanut - földimogyoró
stage - színpad
tight - szoros
gum - gumi
moon - hold
nature - természet
straight - egyenes
angel - angyal
corporate - társasági
damn - átkozo@
exist - létezik
ghost - szellem
sauce - szósz
stomach - gyomor
twenty-five - huszonöt
block - tömb
herself - önmaga
murder - gyilkosság
speed - sebesség
Jesus - Jézus
mix - keverék
track - pálya
opportunity - lehetőség
society - társadalom
whoo-hoo - Húúú
upon - rá
difficult - nehéz
killer - gyilkos
lip - ajak
market - piac
goodness - jóság
pillow - párna
tie - nyakkendő
arrive - megérkezik
mountain - hegy
slip - csúszás
belt - öv
museum - múzeum
oil - olaj
press - sajtó
respect - Usztelet
airplane - repülőgép
airport - repülőtér
honestly - őszintén
contest - verseny
fabulous - mesés
spell - varázslat
whoever - bárki
bell - harang
friendship - barátság
national - nemzeU
alien - idegen
dream - álom
fool - bolond
past - elmúlt
bless - áldás
cartoon - rajzfilm
near - közel
swim - úszás
fruit - gyümölcs
roof - tető
theory - elmélet
according - szerint
guilty - bűnös
potato - burgonya
dish - tál
sound - hang
uncomfortable - kényelmetlen
wrap - betakar
cheap - olcsó
employee - munkavállaló
interview - interjú
perform - előadni
spring - tavaszi
text - szöveg
tour - kirándulás
treat - élvezet
awkward - kínos
expensive - drága
unfortunately - sajnos
purse - pénztárca
charge - díj
ha-ha - Haha
divorce - válás
ring - gyűrű
bra - melltartó
brown - barna
duck - kacsa
English - angol
celebrity - híresség
double - ke@ős
period - időszak
rent - bérlés
today - ma
barely - alig
bye-bye - viszlát
ignore - figyelmen kívül hagyni
language - nyelv
laundry - mosoda
social - szociális
dress - ruha
soft - puha
apology - bocsánatkérés
concert - koncert
disappoint - csalódást okozni
knife - kés
hilarious - vidám
judge - bíró
blanket - takaró
comic - komikus
leader - vezető
local - helyi
neighborhood - környék
trap - csapda
West - nyugat
bury - eltemetni
whore - kurva
cross - kereszt
sheet - lap
suffer - szenved
tax - adó
bath - fürdőkád
receive - kap
sometime - egykori
split - hasíto@
soda - szóda
talent - tehetség
account - számla
convince - meggyőzni
dessert - desszert
purpose - cél
report - jelentés
weak - gyenge
cheer - éljenzés
move - mozog
support - támogatás
research - kutatás
tongue - nyelv
Valentine - Szerető
pill - table@a
snake - kígyó
battle - csata
license - engedély
nut - dió
health - egészség
natural - természetes
gorgeous - nagyszerű
vagina - hüvely
audience - közönség
knee - térd
term - kifejezés
dance - tánc
score - pontszám
sue - perel
whether - hogy
artist - művész
attack - támadás
bang - bumm
bean - bab
attractive - vonzó
breath - lehelet
cover - borító
empty - üres
lonely - magányos
painting - festés
truly - valóban
army - hadsereg
avoid - elkerül
gang - banda
land - föld
nerd - kocka
others - mások
slap - pofon
when - amikor
appointment - kinevezés
dick - fasz
lesbian - leszbikus
outfit - felszerelés
adventure - kaland
devil - ördög
liar - hazug
nurse - nővér
pot - edény
responsible - felelős
salesman - eladó
slow - lassú
smile - mosoly
wallet - pénztárca
commit - elkötelez
example - példa
fake - hamisítvány
obvious - nyilvánvaló
pirate - kalóz
radio - rádió
chase - üldözés
due - esedékes
familiar - ismerős
homework - házi feladat
birth - születés
Canadian - kanadai
favorite - kedvenc
prefer - előnyben részesít
rub - dörzsölje
sky - ég
basically - alapvetően
coach - edző
deliver - szállít
laboratory - laboratórium
address - cím
lift - lib
concern - vonatkozik
eleven - Uzenegy
round - kerek
wish - kíván
guard - őr
contact - érintkezés
over - fele@
package - csomag
travel - utazási
sixty - hatvan
anniversary - évforduló
force - erő
rest - pihenés
spread - terjedés
adorable - imádni való
ocean - óceán
percent - százalékos
shit - szar
wing - szárny
above - fele@
alcohol - alkohol
crash - összeomlás
insurance - biztosítás
nuclear - nukleáris
pathetic - szánalmas
row - sor
sight - látvány
trash - szemét
available - elérhető
brave - bátor
climb - emelkedés
earn - pénzt keres
East - KeleU
impress - lenyűgöz
league - liga
waste - hulladék
within - belül
writer - író
crowd - tömeg
flip - megfordítás
hug - ölelés
drag - húzás
funeral - temetés
literally - szó szerint
lousy - tetves
opinion - vélemény
pack - csomag
spit - nyárs
van - furgon
behavior - viselkedés
complain - panaszkodik
future - jövőbeli
interest - kamat
itself - maga
mirror - tükör
recently - nemrég
stripper - sztripTztáncos
subject - téma
bright - fényes
design - tervezés
general - általános
kidney - vese
result - eredmény
strike - sztrájk
corn - kukorica
correct - helyes
grandmother - nagymama
hug - ölelés
nightmare - lidércnyomás
ours - a miénk
yellow - sárga
rise - emelkedik
Christian - keresztény
doughnut - fánk
original - eredeU
position - pozíció
quarter - negyed
fool - bolond
annoy - bosszant
can - tud
match - mérkőzés
play - játék
traffic - forgalom
actual - tényleges
banana - banán
conference - konferencia
lake - tó
medical - orvosi
medicine - gyógyszer
pray - imádkozik
shave - borotválkozás
tub - kád
bake - süt
option - opció
South - Déli
creepy - hátborzongató
douchebag - seggfej
eventually - végül is
interrupt - megszakítás
library - könyvtár
rude - durva
advertisement - hirdetés
danger - veszély
fourteen - Uzennégy
master - fő-
math - matemaUka
propose - javasol
Thursday - csütörtök
apart - szétválasztva
darling - Drágám
gather - gyűjt
mostly - többnyire
support - támogatás
bubble - buborék
energy - energia
heavy - nehéz
laser - lézer
manage - kezel
meanwhile - közben
network - hálózat
weapon - fegyver
condition - állapot
copy - másolat
female - női
quickly - gyorsan
religion - vallás
snow - hó
Tuesday - kedd
version - változat
bomb - bomba
clear - világos
faith - hit
innocent - ártatlan
remove - eltávolít
survive - túlélni
bee - méh
bride - menyasszony
cause - ok
fifth - ötödik
several - számos
basketball - kosárlabda
downtown - belvárosi
elephant - elefánt
freak - szörnyszülö@
wipe - törölje
arrest - letartóztatás
bored - uno@
bully - verekedő
clock - óra
indeed - valóban
massage - masszázs
shape - alak
skip - kihagyás
strike - sztrájk
dry - száraz
remain - marad
style - sTlus
surgery - sebészet
toe - lábujj
yard - udvar
brilliant - ragyogó
circle - kör
duty - vám
enemy - ellenség
focus - fókusz
lover - szerető
midnight - éjfél
simply - egyszerűen
Spanish - spanyol
boom - fellendülés
describe - leírni
legal - jogi
Mexican - mexikói
powerful - erős
series - sorozat
wire - huzal
candle - gyertya
diaper - pelenka
direction - irány
divorce - válás
eighteen - Uzennyolc
express - expressz
plastic - műanyag
responsibility - felelősség
starve - éheztetni
united - egyesült
worker - munkás
hope - remény
immediately - azonnal
nowhere - sehol
separate - különálló
watch - óra
emotional - érzelmi
hardly - alig
pilot - pilóta
vampire - vámpír
attitude - hozzáállás
balloon - ballon
exact - pontos
frankly - őszintén szólva
hip - csípő
pet - kedvenc
prank - csíny
announcement - közlemény
effect - hatás
escape - menekülés
golden - aranysárga
nipple - mellbimbó
rough - durva
stick - bot
trade - kereskedelmi
twin - iker
waiter - pincér
architect - építészmérnök
beauty - szépség
mate - társ
official - hivatalos
practice - gyakorlat
t-shirt - póló
bug - bogár
crack - repedés
four hundred - négyszáz
half - fél
smoke - füst
contract - szerződés
nail - köröm
recognize - felismerni
scientist - tudós
set - készlet
shoulder - váll
successful - sikeres
turd - szar
view - kilátás
basement - pince
degree - fokozat
fortune - szerencse
hit - találat
invitation - meghívás
nail - köröm
oops - hoppá
professional - szakmai
search - keresés
swing - hinta
train - vonat
weather - időjárás
alarm - riasztás
fun - szórakozás
kitty - cica
nap - szunyókálás
practice - gyakorlat
precious - értékes
product - termék
rabbit - nyúl
role - szerep
snack - falatozás
sucker - szívó
tag - címke
chef - séf
chew - rágás
evidence - bizonyíték
fantasy - fantázia
operation - művelet
puppy - kölyökkutya
rain - eső
spin - pörgés
throat - torok
e-mail - email
present - jelenlegi
reality - valóság
saint - szent
top - felső
victim - áldozat
waitress - pincérnő
booze - nyakal
condom - óvszer
director - igazgató
hunt - vadászat
menu - menü
mystery - rejtély
quiet - csendes
regret - megbánás
technically - technikailag
ton - tonna
attract - vonz
aware - tudatában
chest - mellkas
dentist - fogorvos
far - messze
focus - fókusz
illegal - illegális
mouse - egér
pencil - ceruza
sentence - mondat
sixteen - Uzenhat
squeeze - présel
audition - meghallgatás
lobster - homár
success - siker
terrorist - terrorista
asleep - alvó
fashion - divat
glove - kesztyű
item - tétel
recommend - ajánlom
tuna - tonhal
warehouse - raktár
Italian - olasz
lazy - lusta
tank - tartály
whale - bálna
zone - zóna
honor - becsület
panic - pánik
bachelor - agglegény
chain - lánc
creature - teremtmény
diamond - gyémánt
however - viszont
image - kép
parade - felvonulás
rocket - rakéta
solution - megoldás
cable - kábel
culture - kultúra
forty-five - negyvenöt
garage - garázs
male - férfi
revenge - bosszú
shrimp - garnélarák
thin - vékony
vote - szavazás
aside - félre
bum - ingyenélő
distract - elterelni a figyelmet
humiliate - megaláz
locker - öltözőszekrény
native - bennszülö@
performance - teljesítmény
policy - poliUka
pony - póniló
release - kiadás
stone - kő
woohoo - juhúú
advantage - előny
basket - kosár
breakup - szakítás
device - eszköz
garden - kert
patient - beteg
pink - rózsaszín
represent - képvisel
thirteen - Uzenhárom
treasure - kincs
amount - összeg
fart - fing
newspaper - újság
wind - szél
act - törvény
ashamed - szégyellem
champion - bajnok
light - fény
scout - felderítő
guitar - gitár
mental - szellemi
sensitive - érzékeny
twenty-four - huszonnégy
heat - hőség
otherwise - egyébként
seventeen - Uzenhét
string - húr
wind - szél
downstairs - földszint
impressive - hatásos
poop - tat
property - ingatlan
skill - készség
walk - séta
dammit - a francba
lead - ólom
pancake - palacsinta
slow - lassú
stranger - idegen
charity - jótékonyság
crap - szar
freedom - szabadság
pour - öntés
stuff - dolog
tradition - hagyomány
beef - marhahús
bite - harapás
bullet - golyó
curious - kíváncsi
disaster - katasztrófa
factory - gyár
forest - erdő
middle - középső
odd - páratlan
provide - biztosít
repeat - ismétlés
section - szakasz
subway - metró
choke - fojtás
dirt - piszok
frog - béka
pumpkin - tök
swallow - nyelés
bacon - szalonna
clever - okos
competition - verseny
e-mail - email
lick - nyalás
mission - misszió
pair - pár
soap - szappan
tail - farok
tattoo - tetoválás
activity - tevékenység
bridge - híd
detail - részlet
diet - diéta
insult - sértés
theme - téma
university - egyetemi
champagne - pezsgő
charming - bájos
compare - összehasonlítás
gut - belek
map - térkép
napkin - szalvéta
punch - puncs
apply - jelentkezik
challenge - kihívás
collect - gyűjt
cupcake - muﬃn
fridge - hűtőszekrény
imagination - képzelet
joke - tréfa
pad - párna
script - forgatókönyv
whip - ostor
left - balra
affair - ügy
benefit - haszon
beyond - túl
book - könyv
citizen - polgár
fart - fing
grant - támogatás
junk - szemét
magical - mágikus
prom - szalagavató
schedule - menetrend
studio - stúdió
value - érték
wise - bölcs
Bible - Biblia
clue - nyom
suicide - öngyilkosság
Wednesday - szerda
friendly - barátságos
claim - követelés
complicate - bonyolít
doubt - kétség
generation - generáció
grave - sír
require - igényel
stair - lépcsőfok
depend - függ
maid - szobalány
moron - idióta
necessary - szükséges
oven - sütő
paint - festék
refer - utal
scratch - karcolás
spill - bukás
stain - folt
adopt - örökbe fogadni
brush - kefe
delivery - kézbesítés
disappear - eltűnik
elementary - alapvető
tear - könny
trap - csapda
amazing - elképesztő
Asian - ázsiai
boot - csomagtartó
connection - kapcsolat
eve - este
happiness - boldogság
lifetime - éle@artam
officially - hivatalosan
quality - minőség
agreement - megállapodás
argument - érv
carpet - szőnyeg
crisis - válság
design - tervezés
drawer - fiók
further - további
incredibly - hihetetlenül
loose - laza
pair - pár
refuse - hulladék
risk - kockázat
selfish - önző
village - falu
anger - harag
assure - biztosítékot
bet - tét
bingo - bingó
bunny - nyuszi
crawl - csúszás
demand - kereslet
desperate - kétségbeese@
elevator - lib
goat - kecske
honeymoon - nászút
insist - ragaszkodik
million - millió
murder - gyilkosság
usual - szokásos
beloved - szerete@
copy - másolat
festival - feszUvál
tennis - tenisz
threaten - fenyeget
beginning - kezdet
cigar - szivar
dancer - táncos
heck - a fene
low - alacsony
material - anyag
Yankee - jenki
chapter - fejezet
chat - csevegés
homeless - hajléktalan
lap - öl
major - őrnagy
river - folyó
shark - cápa
strength - erő
accidentally - véletlenül
ancient - ősi
collection - gyűjtemény
exercise - gyakorlat
include - tartalmaz
offense - sértés
screen - képernyő
tomato - paradicsom
cafeteria - büfé
crack - repedés
crappy - vacak
Japanese - japán
statue - szobor
supply - kínálat
versus - kontra
winter - téli
tool - eszköz
asleep - alvó
bend - kanyar
commitment - elköteleze@ség
disturb - zavar
fish - hal
joy - öröm
presentation - előadás
shove - lök
tube - cső
being - lény
damn - átkozo@
experiment - kísérlet
fellow - fickó
German - német
jar - korsó
mint - menta
physical - fizikai
punish - büntetni
remote - távoli
slut - kurva
twist - csavar
cap - sapka
criminal - bűnügyi
eight hundred - nyolcszáz
inspire - inspirál
main - fő-
sink - mosogató
smooth - sima
snap - pa@anás
thumb - hüvelykujj
witness - tanú
abandon - elhagyni
affect - hatással
beard - szakáll
bucket - vödör
county - megye
gain - nyereség
poem - vers
reporter - riporter
review - felülvizsgálat
training - edzés
among - közö@
battery - akkumulátor
deny - tagadni
electric - elektromos
flavor - aroma
forbid - Ult
fudge - karamell
hooray - hurrá
obsess - gyötör
positive - poziTv
rob - rablás
signal - jel
solid - szilárd
website - weboldal
aye - igen
century - század
click - kadntás
cracker - keksz
dry-cleaning - vegyUszTtás
dump - szemétlerakó
effort - erőfeszítés
gate - kapu
hooker - kurva
impression - benyomás
inappropriate - nem megfelelő
inspector - ellenőr
statement - nyilatkozat
thrill - izgalom
wiener - virsli
bond - kötvény
challenge - kihívás
filthy - mocskos
grandfather - nagyapa
host - házigazda
producer - termelő
witch - boszorkány
appropriate - megfelelő
coincidence - egybeesés
furniture - bútor
laugh - nevetés
lemon - citrom
load - terhelés
mock - ál
normally - normális esetben
physics - fizika
sack - zsák
stock - készlet
storm - vihar
wheelchair - kerekesszék
announce - bejelenteni
bagel - bécsi kifli
cocktail - koktél
committee - bizo@ság
crew - legénység
defense - védelem
extremely - rendkívül
file - fájl
haircut - hajvágás
loss - veszteség
proof - bizonyíték
salt - só
score - pontszám
spare - tartalék
tape - szalag
ex - volt
fairy - tündér
fort - erőd
grape - szőlő
including - beleértve
makeup - smink
nation - nemzet
six hundred - hatszáz
block - tömb
childhood - gyermekkor
cut - vágo@
develop - fejleszteni
race - verseny
reference - referencia
shorts - rövidnadrág
talk - beszélgetés
therapist - terapeuta
tip - Upp
tone - hangnem
warm - meleg
accent - hangsúly
avenue - sugárút
below - ala@
cloud - felhő
concern - vonatkozik
distance - távolság
doubt - kétség
exhaust - kipufogó
goal - cél
roll - tekercs
suggestion - javaslat
grocery - élelmiszerbolt
belief - hit
bump - ütődés
inch - hüvelyk
jury - zsűri
neat - Uszta
odds - esély
reservation - foglalás
rush - rohanás
spider - pók
squirrel - mókus
topic - téma
toss - dobás
uniform - egyenruha
violence - erőszak
wide - széles
zoo - állatkert
boo - lehurrogás
bullshit - hülyeség
cruel - kegyetlen
dial - tárcsa
jeans - farmer
pile - halom
poison - méreg
pure - Uszta
romance - románc
slave - rabszolga
slowly - lassan
awake - ébren
belly - has
booth - bódé
gentle - kedves
pipe - cső
poster - poszter
Russian - orosz
sweep - söpörni
sword - kard
ultimate - végső
debate - vita
explode - felrobban
float - úszó
justice - igazságszolgáltatás
kick - rúgás
poker - póker
pride - büszkeség
psych - pszichológus
rain - eső
rare - ritka
rumor - szóbeszéd
title - cím
vision - látomás
wrestle - birkózik
column - oszlop
connect - kapcsolódni
hockey - jégkorong
hook - horog
kidnap - elrablás
limo - limuzin
painful - fájdalmas
path - útvonal
permission - engedély
prince - herceg
process - folyamat
senator - szenátor
smash - összetör
mean - átlagos
anytime - bármikor
back - vissza
bat - denevér
ceremony - szertartás
declare - kijelenteni
helpful - hasznos
iron - vas
picture - kép
print - nyomtatás
rope - kötél
sail - vitorla
sleep - alvás
attend - részt vesz
doom - végzet
education - oktatás
flush - öblítés
fry - süt
melt - olvad
pardon - Bocsánat
passion - szenvedély
personally - személyesen
poop - tat
popcorn - pa@ogato@ kukorica
pussy - punci
trick - trükk
zombie - zombi
ankle - boka
bail - óvadék
discount - kedvezmény
entertainment - szórakozás
excuse - mentség
jazz - dzsessz
kind - fajta
lion - oroszlán
match - mérkőzés
prayer - ima
stamp - bélyeg
betray - elárul
bracelet - karkötő
brownie - manó
creative - alkotó
expression - kifejezés
lock - zár
negative - negaTv
pickle - savanyúság
puzzle - rejtvény
recipe - recept
stab - szúrás
toward - felé
wave - hullám
wherever - bárhol
article - cikk
backwards - visszafelé
central - közponU
mustache - bajusz
pudding - puding
seek - keres
slide - csúszik
tit - cinege
trial - próba
trophy - trófea
best - legjobb
damage - kár
decent - megfelelő
easily - könnyen
engine - motor
journey - utazás
lawn - gyep
place - hely
pretzel - perec
routine - ruUn
sand - homok
someplace - valahol
stretch - nyújtózkodás
whack - ütés
bloody - véres
brand - márka
British - brit
budget - költségvetés
cabin - kabin
determine - meghatározni
doggie - kutyus
entertain - szórakoztatni
helmet - sisak
jackass - hímszamár
media - média
motion - mozgás
poke - bök
practically - gyakorlaUlag
rule - szabály
scotch - skót
source - forrás
spoil - zsákmány
teenager - Uzenéves
turtle - teknősbéka
visit - látogatás
authority - hatóság
bleed - vérzik
comment - megjegyzés
compete - versenyez
confidence - bizalom
convention - konvenció
defend - megvédeni
flash - vaku
heal - gyógyít
hippie - hippi
inside - belső
past - elmúlt
phase - fázis
puppet - báb
respond - reagál
reveal - felfed
sharp - éles
transfer - átruházás
wig - paróka
aisle - folyosó
command - parancs
detective - nyomozó
dolphin - delfin
exit - kijárat
expert - szakértő
grand - nagy
heat - hőség
industry - ipar
label - címke
limit - határ
mature - ére@
pitch - hangmagasság
pump - sziva@yú
racist - rasszista
swing - hinta
whom - kit
comedian - komikus
compliment - bók
fork - villa
guarantee - garancia
magician - bűvész
murderer - gyilkos
occur - előfordul
pork - sertéshús
soccer - futball
wave - hullám
access - hozzáférés
actress - színésznő
backup - biztonsági mentés
bam - bumm
behave - viselkedik
encourage - bátorít
estate - birtok
fellow - fickó
flirt - flört
handicap - hátrány
hose - tömlő
incident - incidens
lost - elvesze@
occasion - alkalom
route - útvonal
secretary - Utkár
classy - ízléses
confess - bevallom
drown - megfullad
environment - környezet
false - HAMIS
highly - nagyon
legend - legenda
production - termelés
tale - mese
talented - tehetséges
threat - fenyegetés
vegetable - növényi
amen - ámen
capital - tőke
cruise - hajókázás
experience - tapasztalat
forth - tovább
judgment - ítélet
nonsense - ostobaság
offend - megsért
pepper - bors
phrase - kifejezés
picnic - piknik
privacy - magánélet
self - én
shitty - szar
smell - szag
attach - csatolni
billion - milliárd
cheers - Egészségére
coma - kóma
contain - tartalmaz
earring - fülbevaló
fascinating - elbűvölő
fear - félelem
gal - lány
ham - sonka
pronounce - kiejteni
sample - minta
victory - győzelem
behold - íme
cereal - gabona
concentrate - sűrítmény
depressed - nyomo@
drama - dráma
explanation - magyarázat
fate - sors
hallway - folyosó
ninety - kilencven
particular - különös
pleased - elégede@
response - válasz
search - keresés
cold - hideg
ground - föld
liquor - folyadék
lower - alacsonyabb
miserable - nyomorult
pin - tű
purchase - vásárlás
satisfy - kielégíteni
sexually - szexuálisan
shout - kiáltás
site - telek
thee - téged
tonight - ma este
unit - egység
complaint - panasz
condo - társasházi lakás
cool - hűvös
donate - adományoz
fur - szőrme
good-looking - jóképű
gravy - szab
imaginary - képzeletbeli
lemonade - limonádé
muscle - izom
nearly - közel
opposite - szemben
rent - bérlés
sweat - izzad
tiger - Ugris
valuable - értékes
alcoholic - alkoholos
arrest - letartóztatás
counselor - tanácsadó
failure - hiba
farmer - gazda
horn - kürt
human - emberi
lamp - lámpa
orange - narancs
peach - őszibarack
roller - henger
staff - személyzet
text - szöveg
thief - tolvaj
force - erő
secret - Utkos
approve - jóváhagy
campus - egyetem
coast - tengerpart
cure - gyógymód
dinosaur - dinoszaurusz
directly - közvetlenül
dry - száraz
haunt - tanya
location - elhelyezkedés
open - nyito@
owner - tulajdonos
patch - tapasz
treatment - kezelés
trunk - törzs
abortion - abortusz
bark - ugat
bartender - csapos
brunch - villásreggeli
casual - alkalmi
chaos - káosz
chief - fő
chop - szelet
dust - por
intend - szándékozik
lottery - lo@ó
musical - zenei
opening - nyílás
personality - személyiség
publish - közzétenni
sausage - kolbász
spot - folt
underneath - alul
unfair - Usztességtelen
violent - erőszakos
wizard - varázsló
aboard - fedélzeten
argue - vitatkozni
attempt - kísérlet
badly - rosszul
bush - bokor
fold - hajtás
footage - felvétel
height - magasság
labor - munkaerő
nephew - unokaöcs
pass - átmegy
reaction - reakció
shy - félénk
cage - ketrec
colonel - ezredes
courage - bátorság
cure - gyógymód
delightful - elragadó
emotion - érzelem
expose - leleplez
fence - kerítés
glue - ragasztó
noodle - tökfej
organ - szerv
pole - pólus
refrigerator - hűtőszekrény
skull - koponya
touch - érintés
airline - légitársaság
background - há@ér
bravo - bravó
cheek - arc
count - gróf
expense - költség
Irish - ír
ladder - létra
mug - bögre
nickname - becenév
pea - borsó
principal - fő
rack - állvány
session - ülés
soldier - katona
urine - vizelet
virgin - szűz
wander - vándorol
bump - ütődés
carrot - sárgarépa
circus - cirkusz
former - korábbi
generous - nagylelkű
gesture - gesztus
halfway - félúton
inside - belső
ninja - nindzsa
o'clock - órakor
promise - ígéret
prostitute - prosUtuált
round - kerek
shelter - menedék
sperm - sperma
technology - technológia
thanks - Köszönöm
agent - ügynök
ability - képesség
awfully - szörnyen
cherry - cseresznye
discussion - vita
documentary - dokumentumfilm
invest - befektetés
jet - sugárhajtású
knowledge - tudás
load - terhelés
minister - miniszter
motherfucker - köcsög
offensive - támadó
promote - népszerűsíteni
retire - visszavonul
singer - énekes
specific - különleges
sudden - hirtelen
tuck - behúzás
sin - bűn
chart - diagram
grader - földgyalu
ant - hangya
bull - bika
carefully - gondosan
cleaning - UszTtás
dork - hülye
dummy - színlelt
exam - vizsgálat
helicopter - helikopter
moustache - bajusz
rate - arány
recall - visszahívás
reject - elutasít
ski - sí
spy - kém
stress - feszültség
therapy - terápia
travel - utazási
upper - felső
very - nagyon
sponge - szivacs
profit - nyereség
assignment - kijelölés
bounce - ugrál
branch - ág
daily - napi
dice - dobókocka
dignity - méltóság
entirely - teljesen
flatter - hízeleg
form - forma
fraud - csalás
offer - ajánlat
pit - gödör
slow - lassú
status - állapot
terrify - megijeszt
thirty-five - harmincöt
yogurt - joghurt
random - véletlen
blond - szőke
cube - kocka
alley - sikátor
arrange - elintézni
coupon - kupon
ditch - árok
drunk - részeg
edge - él
gamble - szerencsejáték
gray - szürke
hostage - túsz
inform - tájékoztat
likely - valószínűleg
mask - maszk
nasty - csúnya
Olympics - Olimpia
panties - bugyi
priest - pap
rock - szikla
shine - ragyog
shower - zuhany
left - balra
capable - képes
corporation - vállalat
delete - töröl
dental - fogászaU
engagement - elköteleződés
entitle - feljogosít
howdy - szia
ironic - ironikus
movement - mozgás
piano - zongora
scooter - robogó
silver - ezüst
slightly - némileg
sort - fajta
tragic - tragikus
underpants - alsónadrág
cabinet - szekrény
debt - adósság
global - globális
hereby - ezennel
kindergarten - óvoda
mustard - mustár
old-fashioned - régimódi
procedure - eljárás
progress - előrehalad
scale - skála
select - kiválasztás
rib - borda
armed - fegyveres
astronaut - űrhajós
backyard - udvar
camp - tábor
capture - elfog
cart - kocsi
casino - kaszinó
Catholic - katolikus
chop - szelet
cleaner - UszTtó
desert - sivatag
ex-boyfriend - volt barát
executive - végrehajtó
foreign - külföldi
fully - teljesen
interview - interjú
lean - sovány
louse - tetű
march - március
novel - regény
one thousand - ezer
orange - narancs
sense - érzék
slice - szelet
species - faj
strip-club - sztripTzbár
weigh - mérlegelni
weirdo - különc
shadow - árnyék
accomplish - elérni
barbecue - grillezés
cast - öntvény
curse - átok
define - meghatározni
double - ke@ős
equipment - felszerelés
fever - láz
front - elülső
gig - koncert
harassment - zaklatás
intelligent - intelligens
manner - modor
marijuana - marihuána
operate - működik
post - posta
quest - küldetés
raise - emel
raisin - mazsola
record - rekord
religious - vallási
skinny - sovány
slide - csúszik
stinky - büdös
sushi - szusi
thy - te
whew - tyűha
adult - felnő@
allergic - allergiás
appearance - megjelenés
cave - barlang
drunken - i@as
fireman - tűzoltó
frame - keret
graduate - diplomás
hammer - kalapács
naughty - rossz
nine hundred - kilencszáz
salary - fizetés
signature - aláírás
slap - pofon
special - különleges
bowl - tál
border - határ
afterwards - később
curtain - függöny
defeat - vereség
desire - vágy
ex-wife - volt feleség
firework - tűzijáték
habit - szokás
lane - sáv
late - késő
management - menedzsment
mighty - hatalmas
Muslim - muzulmán
nanny - dajka
nicely - szépen
polite - udvarias
political - poliUkai
rage - harag
rainbow - szivárvány
smelly - büdös
tissue - szövet
triangle - háromszög
useless - hiábavaló
visitor - látogató
angle - szög
anonymous - névtelen
calendar - naptár
comic - komikus
dibs - játékcsontocskák
dip - mártogatós
financial - pénzügyi
flat - lakás
grand - nagy
identity - idenUtás
light - fény
living - élő
register - nyilvántartás
shocking - megdöbbentő
shopping - bevásárlás
sixth - hatodik
spoon - kanál
strawberry - eper
target - cél
teenage - Uzenéves
thick - vastag
whoops - hoppá
counter - ellen
agency - ügynökség
carnival - karnevál
confirm - megerősíteni
corpse - hulla
disagree - nem ért egyet
feature - funkció
firm - cég
fit - illik
hill - hegy
hopefully - remélhetőleg
jam - lekvár
lamb - bárány
local - helyi
log - napló
party - fél
printer - nyomtató
sketch - vázlat
ski - sí
steam - gőz
superhero - szuperhős
terribly - szörnyen
toothbrush - fogkefe
top - felső
council - tanács
deck - fedélzet
dragon - sárkány
election - választás
lack - hiány
lawsuit - per
lecture - előadás
mysterious - Utokzatos
pleasant - kellemes
pregnancy - terhesség
professional - szakmai
reward - jutalom
risk - kockázat
rose - rózsa
scientific - tudományos
specifically - konkrétan
tune - dallam
acid - sav
argh - ááá
candidate - jelölt
differently - eltérően
economy - gazdaság
eighty - nyolcvan
fee - díj
flame - láng
foundation - alapítvány
joint - közös
oy - ó
punishment - büntetés
rally - gyűlés
reception - recepció
request - kér
resist - ellenáll
schedule - menetrend
seven hundred - hétszáz
shock - sokk
sore - fájó
suspect - gyanúsíto@
union - unió
telephone - telefon
extra - külön-
accuse - vádol
ape - emberszabású majom
badge - jelvény
barn - istálló
buck - bak
catch - fogás
divide - osztás
eternity - örökkévalóság
hopeless - reménytelen
intervention - beavatkozás
jam - lekvár
knock - kopogás
mattress - matrac
millionaire - milliomos
observe - megfigyelni
react - reagál
speaker - hangszóró
spicy - fűszeres
stadium - stadion
syndrome - szindróma
unhappy - boldogtalan
vow - fogadalom
will - akarat
youth - ifúság
admire - csodál
ambulance - mentőautó
bonus - bónusz
commission - jutalék
crotch - ágyék
deer - szarvas
fountain - szökőkút
grease - zsír
immigrant - bevándorló
injury - sérülés
intense - erős
journal - folyóirat
launch - dob
medal - érem
mile - mérföld
plant - növény
rescue - mentés
semester - szemeszter
tire - gumi
worship - imádat
seed - mag
dot - pont
a.m. - de.
alert - éber
confident - magabiztos
currently - jelenleg
escape - menekülés
found - talált
frustrate - frusztrál
improve - javítani
intercourse - közösülés
investment - beruházás
jelly - zselé
loan - hitel
musical - zenei
protest - Ultakozás
seal - pecsét
shock - sokk
silent - csendes
temperature - hőmérséklet
testicle - here
typical - Upikus
unusual - szokatlan
approach - megközelítés
April - április
attempt - kísérlet
bow - íj
castle - vár
dine - vacsorázni
fiance - vőlegény
goo - ragacs
governor - kormányzó
lotion - testápoló
measure - intézkedés
necklace - nyaklánc
nor - sem
orgasm - orgazmus
poetry - költészet
reasonable - ésszerű
run - fut
scam - átverés
shift - váltás
sneaker - tornacipő
straighten - kiegyenesedik
tap - csap
track - pálya
unlike - ellentétben
bench - pad
blowjob - szopás
championship - bajnokság
Coke - Koksz
darkness - sötétség
diary - napló
figure - ábra
guilt - bűnösség
horny - kemény
intimate - meghi@
laughter - nevetés
lend - kölcsönöz
organization - szervezet
outside - kívül
purple - lila
rice - rizs
seminar - szeminárium
senior - idősebb
shape - alak
sheep - juh
sweat - izzad
upside - felfelé
vehicle - jármű
seventy - hetven
achieve - elérni
addiction - függőség
architecture - építészet
certain - bizonyos
demon - démon
dry-cleaner - vegyUszTtó
dumbass - idióta
freezer - mélyhűtő
guide - útmutató
harm - kár
honk - dudál
install - telepítés
mascot - kabala
massive - tömeges
metal - fém
nest - fészek
nineteen - Uzenkilenc
possibility - lehetőség
praise - dicséret
prescription - recept
produce - termel
salmon - lazac
surround - körülölelő
tragedy - tragédia
trip - utazás
troll - manó
tune - dallam
wagon - kocsi
whisper - su@ogás
yummy - isteni finom
ban - Ulalom
bind - kötés
brand-new - vadonatúj
butterfly - pillangó
cast - öntvény
ceiling - mennyezet
constantly - állandóan
elbow - könyök
electricity - elektromosság
exchange - csere
grass - fű
misunderstanding - félreértés
reunion - újraegyesülés
rush - rohanás
sacred - szent
sergeant - őrmester
solo - szóló
syrup - szirup
therefore - ezért
timing - időzítés
where - ahol
whistle - síp
knight - lovag
awful - szörnyű
ballet - bale@
blade - penge
blast - robbanás
celebration - ünneplés
cheesecake - saj@orta
communicate - kommunikálni
cough - köhögés
cripple - nyomorék
dozen - tucat
fall - esik
following - következő
goddamn - a francba
heel - sarok
hold - tart
lad - fiú
noon - dél
onion - hagyma
pound - font
relieve - enyhíteni
saving - megtakarítás
scheme - rendszer
silence - csend
skate - korcsolya
twenty-two - huszonke@ő
volunteer - önkéntes
application - alkalmazás
cinnamon - fahéj
coconut - kókuszdió
construction - építés
curse - átok
Easter - húsvéU
ex-girlfriend - volt barátnő
explore - felfedezni
frame - keret
highway - autópálya
imply - jelent
pottery - fazekasság
soak - áztatás
sticker - matrica
survivor - túlélő
task - feladat
yoga - jóga
beast - vadállat
biology - biológia
carve - farag
destiny - sors
detention - fogva tartás
direct - közvetlen
drill - fúró
firm - cég
grill - grillsütő
potential - potenciális
rehearsal - próba
related - összefüggő
ribbon - szalag
spaghetti - spaged
stress - feszültség
stuffing - töltelék
surely - biztosan
twenty-three - huszonhárom
drum - dob
accountant - könyvelő
chill - hideg
coaster - hullámvasút
conditioner - kondicionáló
cone - kúp
deaf - süket
dismiss - elutasít
dive - merülés
error - hiba
file - fájl
fly - repül
hers - az övé
jewelry - ékszerek
mercy - kegyelem
naturally - természetesen
nickel - nikkel
object - objektum
scissors - olló
secretly - Utkosan
smack - csednt
supportive - támogató
suspect - gyanúsíto@
tick - ketyeg
way - út
wicked - gonosz
wisdom - bölcsesség
woo - udvarol
essay - esszé
land - föld
audition - meghallgatás
butler - komornyik
cash - készpénz
deadly - halálos
delicate - finom
document - dokumentum
emotionally - érzelmileg
establish - létrehoz
flute - fuvola
groom - vőlegény
horror - borzalom
humanity - emberiség
maker - készítő
martini - marUni
mud - sár
needy - rászoruló
psychic - lelki
reduce - csökkenteni
retarded - retardált
return - visszatérés
rod - rúd
rubber - gumi
rug - szőnyeg
steer - Unó
symbol - szimbólum
testify - tanúskodni
thirsty - szomjas
traditional - hagyományos
try - megpróbál
twin - iker
succeed - sikerül
mob - csőcselék
basic - alapvető
behalf - nevében
booty - zsákmány
bridesmaid - nyoszolyólány
chore - házimunka
coin - érme
correct - helyes
crowded - zsúfolt
envelope - boríték
exciting - izgalmas
greetings - üdvözletek
living - élő
medication - gyógyszer
necessarily - szükségszerűen
organize - szervez
overreact - túlreagálni
pageant - parádé
press - sajtó
principle - alapelv
reward - jutalom
sneeze - tüsszentés
tasty - ízletes
tobacco - dohány
volunteer - önkéntes
whee - kerék
facility - létesítmény
skirt - szoknya
dedicate - szentel
despite - ellenére
download - letöltés
fetus - magzat
frighten - megijeszt
grateful - hálás
gravity - gravitáció
hail - jégeső
handle - fogantyú
hay - széna
hideous - förtelmes
hobby - hobbi
legally - jogilag
lighting - világítás
lobby - előcsarnok
lung - tüdő
musician - zenész
petty - piU
plot - telek
poison - méreg
presence - jelenlét
promotion - előléptetés
radioactive - radioakTv
relief - megkönnyebbülés
resource - forrás
sailor - tengerész
sober - józan
sofa - pamlag
switch - kapcsoló
tavern - kocsma
toaster - kenyérpirító
annual - évi
bathe - fürdik
bully - verekedő
catalog - katalógus
cheerleader - pompomlány
combination - kombináció
combine - kombájn
complete - teljes
conclusion - következtetés
cotton - pamut
crab - Rák
damage - kár
erase - töröl
fairly - meglehetősen
fund - alap
hog - disznó
hurricane - hurrikán
July - július
mansion - kastély
motorcycle - motorkerékpár
off - le
pigeon - galamb
politics - poliUka
proper - megfelelő
qualify - jogosult
receptionist - recepciós
recover - visszaszerez
release - kiadás
sarcasm - gúny
sheriff - seriﬀ
shoo - elhesseget
soy - szója
suspicious - gyanús
sweaty - izzadt
technique - technika
thigh - comb
toxic - mérgező
twenty-seven - huszonhét
vest - mellény
crib - gyerekágy
amusement - szórakoztatás
average - átlagos
backpack - háUzsák
balance - egyensúly
beverage - ital
boxer - bokszoló
confession - gyónás
deeply - mélységesen
fabric - szövet
herpes - herpesz
hobo - csavargó
host - házigazda
hybrid - hibrid
increase - növekedés
meth - metamfetamin
prevent - megakadályozni
prisoner - fogoly
protection - védelem
queer - furcsa
refresh - frissítés
request - kér
shush - Csi@
strap - szíj
tray - tálca
type - Tpus
yuck - fúj
vomit - hányás
academy - akadémia
anus - végbélnyílás
babysitter - bébiszi@er
banner - transzparens
beneath - ala@
bid - ajánlat
bladder - hólyag
cult - kultusz
dealer - kereskedő
flesh - hús
fulfill - teljesíteni
heck - a fene
hint - célzás
hump - púp
identify - azonosítani
intimidate - megfélemlíteni
leather - bőr
list - lista
madness - őrültség
merely - csupán
mole - anyajegy
Nazi - náci
passionate - szenvedélyes
post - posta
recent - friss
satellite - műhold
shampoo - sampon
share - részesedés
sink - mosogató
sleepy - álmos
smug - önelégült
spray - permet
straw - szalma
supermarket - szupermarket
tend - hajlamosak
twenty-one - huszonegy
umbrella - esernyő
wrestler - birkózó
bud - bimbó
boner - baklövés
riot - lázadás
blast - robbanás
chess - sakk
chin - áll
clip - csipesz
concept - koncepció
core - mag
deed - te@
destruction - megsemmisítés
display - kijelző
DNA - DNS
eighth - nyolcadik
eliminate - megszüntetni
goose - liba
homosexual - homoszexuális
invention - találmány
marathon - maraton
meaning - jelentés
minus - mínusz
ouch - Jaj
paperwork - papírmunka
physical - fizikai
pilgrim - zarándok
pitch - hangmagasság
plug - dugó
psst - psszt
replacement - csere
review - felülvizsgálat
surrender - megadás
towards - felé
vacuum - vákuum
board - bizo@ság
crystal - kristály
data - adat
done - kész
dryer - szárítógép
editor - szerkesztő
evolve - fejlődik
flow - folyik
germ - csíra
grace - kegyelem
harsh - durva
intelligence - intelligencia
jaw - állkapocs
juicy - lédús
lipstick - ajakrúzs
luckily - szerencsére
male - férfi
medium - közepes
minority - kisebbség
overnight - éjszakai
particularly - különösen
payment - fizetés
scenario - forgatókönyv
scrub - bozót
shiny - fényes
thoughtful - figyelmes
tops - felsők
tribe - törzs
worthless - értéktelen
retirement - nyugdíjazás
righty - jobbkezes
absolute - abszolút
breeze - szellő
adjustment - beállítás
adoption - örökbefogadás
anyhow - mindenesetre
athlete - sportoló
burst - robbanás
cocoa - kakaó
courtesy - udvariasság
current - jelenlegi
dough - tészta
embrace - ölelés
foolish - bolond
locate - helymeghatározás
memo - feljegyzés
mentally - szellemileg
minor - kisebb
moo - bőg
quote - idézet
raccoon - mosómedve
seduce - elcsábítani
sleeve - ujj
strangle - megfojt
sunshine - napfény
tickle - viszket
tower - torony
troop - csapat
use - használat
volume - kötet
wingman - kísérő
wonder - csoda
constant - állandó
cue - dákó
acknowledge - elismerni
addition - kiegészítés
alarm - riasztás
bass - basszus
blessing - áldás
businessman - üzletember
classroom - tanterem
clinic - klinika
coward - gyáva
driveway - műút
elect - választ
exchange - csere
fist - ököl
giant - óriás
grown-up - felnő@
indicate - jelez
ingredient - hozzávaló
instance - példány
insult - sértés
June - június
lighten - világosítani
limit - határ
mailman - postás
massage - masszázs
mop - felmosórongy
noble - nemes
opposite - szemben
pajamas - pizsama
physically - fizikailag
print - nyomtatás
pro - profi
regarding - kapcsolatban
reverend - Usztelendő
root - gyökér
ship - hajó
slutty - ribanc
sniff - szippantás
spin - pörgés
swell - dagad
thirty-one - harmincegy
value - érték
mushroom - gomba
advanced - fejle@
amuse - szórakoztat
ancestor - ős
attic - padlás
broccoli - brokkoli
circumstance - körülmény
clothing - ruházat
decade - évUzed
disorder - rendellenesség
dungeon - börtön
even - még
evolution - evolúció
exception - kivétel
function - funkció
geek - kocka
glorious - dicső
gossip - pletyka
happily - boldogan
ID - azonosító
March - március
military - katonai
nude - meztelen
pan - Pán
paradise - paradicsom
pervert - perverz
pet - kedvenc
pinch - csipet
pity - kár
rotten - rothadt
seventh - hetedik
similar - hasonló
stand - állvány
tractor - traktor
tunnel - alagút
vanilla - vanília
violate - megsérU
wreck - roncs
zip - irányítószám
bedtime - lefekvés ideje
cape - köpeny
cost - költség
crossword - keresztrejtvény
designer - tervező
enormous - hatalmas
extreme - szélső
fragile - törékeny
genetic - geneUkai
length - hossz
lightning - villám
magic - mágikus
magnificent - nagyszerű
mankind - emberiség
marshmallow - mályvacukor
May - május
meatball - húsgombóc
messy - rendetlen
mount - hegy
navy - haditengerészet
oppose - ellenezni
passenger - utas
playground - játszótér
possession - birtoklás
proposal - javaslat
psycho - pszichopata
rainforest - esőerdő
stereotype - sztereoTpia
sudden - hirtelen
sunglasses - napszemüveg
temp - hőmérséklet
thou - te
urinal - vizelde
wah - vau
Republican - Köztársasági
abuse - visszaélés
adjust - igazít
approval - jóváhagyás
certificate - bizonyítvány
coach - edző
complex - összete@
contestant - versenyző
drop - csepp
era - korszak
exhibit - kiállítás
fame - hírnév
gene - gén
hop - komló
invisible - láthatatlan
kitten - cica
maniac - mániás
myth - mítosz
needle - tű
patch - tapasz
prime - elsődleges
puke - hányás
rating - értékelés
reserve - tartalék
root - gyökér
round - kerek
sarcastic - szarkaszUkus
shelf - polc
skeleton - csontváz
submit - beküldés
supervisor - felügyelő
symptom - tünet
virus - vírus
weakness - gyengeség
barrel - hordó
applause - taps
average - átlagos
boil - forraljuk
brag - henceg
buckle - csat
burglar - betörő
caller - hívó
carton - kartondoboz
color - szín
donkey - szamár
environmental - környezeU
equal - egyenlő
expand - kibontás
flu - influenza
forehead - homlok
greet - köszönt
illness - betegség
injure - megsebesít
lifestyle - életmód
objection - kifogás
outrage - merénylet
pasta - tészta
practical - gyakorlaU
recess - mélyedés
recycle - újrahasznosít
rehearse - próbál
roast - sült
seventy-five - hetvenöt
shit - szar
shred - foszlány
sloppy - lucskos
somewhat - némileg
spray - permet
suitcase - bőrönd
take - vesz
tense - feszült
valley - völgy
web - háló
entrance - bejárat
appetite - étvágy
association - egyesület
attorney - ügyvéd
bun - konty
clubhouse - klubház
confront - szembeszállni
contribute - hozzájárul
critic - kriUkus
depressing - nyomasztó
dime - Tzcentes
discovery - felfedezés
effective - hatékony
excitement - izgalom
expectation - várakozás
eyebrow - szemöldök
fluffy - bolyhos
headache - fejfájás
independent - független
integrity - integritás
lizard - gyík
logic - logika
mug - bögre
plain - egyszerű
poet - költő
quietly - csendesen
relative - relaTv
safely - biztonságosan
shrink - összezsugorodik
slam - becsapódás
suit - öltöny
surprisingly - meglepően
testing - tesztelés
throughout - végig
tournament - torna
twist - csavar
wardrobe - gardrób
wrist - csukló
nerve - ideg
deposit - letét
trail - nyom
collar - gallér
bicycle - kerékpár
ahem - khm
alike - hasonló
allergy - allergia
atheist - ateista
chamber - kamra
cheeseburger - sajtburger
conscience - lelkiismeret
cuddle - ölelkezés
existence - létezés
gallery - galéria
instinct - ösztön
instruction - oktatás
loyal - lojális
maintain - fenntart
maintenance - karbantartás
meaningless - értelmetlen
memorize - memorizálni
missile - rakéta
moist - nedves
nag - gebe
ninety-five - kilencvenöt
pattern - minta
physicist - fizikus
pointless - értelmetlen
polish - lengyel
reading - olvasás
silence - csend
sitcom - szituációs komédia
slight - enyhe
softball - sobball labdajáték
star - csillag
strip - szalag
temple - templom
torture - kínzás
torture - kínzás
wax - viasz
wooden - fa
inner - belső
elf - manó
claw - karom
layer - réteg
refund - visszatérítés
cycle - ciklus
mighty - hatalmas
awareness - tudatosság
baggage - poggyász
closing - záró
cricket - krike@
dear - kedves
decorate - díszít
definition - meghatározás
development - fejlesztés
discipline - fegyelem
double - ke@ős
ending - befejező
entry - belépés
explosion - robbanás
frozen - fagyaszto@
guard - őr
hack - csapkod
homemade - házi
hunter - vadász
interest - kamat
kite - sárkány
master - fő-
meantime - időközben
mortgage - jelzálog
oho - óó
pact - egyezmény
palace - palota
password - jelszó
pledge - fogadalom
pond - tavacska
power - hatalom
resolution - felbontás
rig - kötélzet
sacrifice - áldozat
sector - ágazat
steam - gőz
sunset - napnyugta
superior - kiváló
surgeon - sebész
tease - kötekedik
thus - így
twenty-eight - huszonnyolc
vegetarian - vegetáriánus
videotape - videokaze@a
view - kilátás
wide - széles
workout - edzés
wound - seb
pyramid - piramis
buffet - büfé
antique - anUk
appeal - fellebbezés
arrangement - elrendezés
base - bázis
closure - bezárás
dramatic - drámai
generally - általában
hysterical - hisztérikus
ill - beteg
lid - fedél
method - módszer
outrageous - felháborító
peel - héj
rash - kiütés
sacrifice - áldozat
so-called - úgyneveze@
sophisticated - kifinomult
stool - széklet
struggle - küzdelem
subtle - apró
suspend - felfüggesztés
tension - feszültség
water - víz
wealthy - gazdag
spare - tartalék
cushion - párna
rebel - lázadó
Mafia - Maﬃa
aim - cél
auto - autó
bowel - bél
bug - bogár
bummer - dőzsölés
cater - ellát
CEO - vezérigazgató
chubby - pufók
comfort - kényelem
conflict - konfliktus
convert - megtérít
dairy - tejtermék
division - osztály
donation - adomány
edit - szerkesztés
expire - lejár
flash - vaku
flyer - szórólap
freaky - furcsa
goods - áruk
hamster - hörcsög
honesty - becsületesség
ignorant - tudatlan
inspiration - ihlet
masturbate - maszturbál
melon - dinnye
metaphor - metafora
midget - törpe
moral - erkölcsi
net - ne@ó
one hundred fifty - százötven
participate - részt vesz
quarterback - irányító
radiation - sugárzás
raw - nyers
relate - kapcsolódnak
resident - lakos
seventy-two - hetvenke@ő
snuggle - odasimul
southern - déli
sticky - ragadós
three-way - háromirányú
tin - ón
workplace - munkahely
zoom - zoomolás
acting - ható
spiritual - lelki
slot - rés
activate - akUválás
air - levegő
briefcase - aktatáska
cologne - Köln
competitive - versenyképes
cross - kereszt
depression - depresszió
early - korai
extend - kiterjeszteni
fighter - harcos
gently - gyengéden
gone - elmúlt
graduation - ballagás
grief - bánat
growth - növekedés
infect - megfertőzni
latte - la@e
leak - szivárog
logical - logikus
lure - csali
macaroni - makaróni
millennium - évezred
ninety-nine - kilencvenkilenc
olive - olajbogyó
ordinary - rendes
outer - külső
oxygen - oxigén
patient - beteg
peaceful - békés
phony - HAMIS
protocol - jegyzőkönyv
realistic - realiszUkus
recital - előadás
remarkable - figyelemre méltó
sabotage - szabotázs
sadly - szomorúan
senior - idősebb
sparkle - szikra
thirty-two - harmincke@ő
tow - kóc
vulnerable - sebezhető
waters - vizek
welcome - üdvözöljük
wolf - farkas
wreck - roncs
yum - finom
loaf - cipó
perfume - parfüm
bare - csupasz
resume - önéletrajz
scar - sebhely
bang - bumm
address - cím
agenda - napirend
assign - hozzárendel
autograph - autogram
await - vár
billionaire - milliárdos
bookstore - könyvesbolt
buyer - vevő
charade - színjáték
collapse - összeomlás
conditioning - kondicionálás
consequence - következmény
crooked - görbe
cultural - kulturális
dating - randevúzás
deli - csemege
examine - megvizsgál
fry - süt
grown - felnő@
hormone - hormon
hush - Csi@
insecure - bizonytalan
intention - szándék
international - nemzetközi
line - vonal
maple - juharfa
one thousand one hundred - ezerszáz
pose - póz
psychiatrist - pszichiáter
repair - javítás
shotgun - vadászpuska
steady - állandó
strategy - stratégia
tempt - csábít
vet - állatorvos
witness - tanú
yikes - hűha
hood - motorháztető
dawn - hajnal
tent - sátor
bathtub - fürdőkád
bitch - kurva
broad - széles
brutal - brutális
buzz - zümmögés
campaign - kampány
conduct - magatartás
copier - másológép
cranky - házsártos
eternal - örök
foam - hab
FYI - Tájékoztatásul
greedy - kapzsi
hiya - szia
kisser - csókolózni
lava - láva
like - mint
loosen - lazíts
mailbox - postafiók
naive - naiv
particle - részecske
perspective - perspekTva
plug - dugó
privilege - kiváltság
resolve - elhatározás
scarf - sál
start - indul
trainer - edző
unable - képtelen
unacceptable - elfogadhatatlan
unfortunate - szerencsétlen
update - frissítés
volcano - vulkán
weed - gyom
worthy - méltó
vault - boltozat
permanent - állandó
gag - öklendezés
addicted - függő
bah - pá
balance - egyensúly
bitter - keserű
boo - lehurrogás
braces - fogszabályozó
cashmere - kasmír
chimp - csimpánz
comfort - kényelem
communist - kommunista
consultant - tanácsadó
criticize - kriUzálni
cutie - szivi
decaf - koﬀeinmentes kávé
demonstrate - demonstrálni
denial - tagadás
distraction - figyelemelterelés
dunk - tunkol
edition - kiadás
embarrassment - zavar
extension - kiterjesztés
Frisbee - Frizbi
grind - darál
hairy - szőrös
handy - ügyes
humble - alázatos
juggle - zsonglőrködik
kit - készlet
lift - lib
loyalty - hűség
lyric - lírai
maestro - mester
molest - molesztál
occasionally - néha
overwhelm - elborít
pee - pisilni
pharmacy - gyógyszertár
preserve - megőrizni
properly - megfelelően
restroom - WC
secure - biztonságos
settlement - település
sundae - fagylaltkehely
toad - varangy
trailer - utánfutó
transform - átalakítás
trust - bizalom
uterus - méh
violation - szabálysértés
weekly - heU
flying - repülő
advise - tanácsot ad
altar - oltár
assembly - összeszerelés
bath - fürdőkád
beaver - hód
blazer - blézer
compromise - kiegyezés
conspiracy - összeesküvés
critical - kriUkai
devastated - elpuszTto@
disappointment - csalódás
drawing - rajz
dumpster - kukáskonténer
feather - madártoll
feature - funkció
furious - dühös
goddess - istennő
housekeeper - házvezetőnő
immature - éretlen
jackpot - főnyeremény
janitor - gondnok
jungle - dzsungel
Korean - koreai
lasagna - lasagne
liberty - szabadság
opponent - ellenfél
penguin - pingvin
photographer - fényképész
process - folyamat
psychic - lelki
puffy - puﬀadt
quote - idézet
racket - ütő
region - régió
robe - palást
sea - tenger
sew - varr
shatter - összetör
sickness - betegség
sidekick - haver
skank - ribanc
spice - fűszer
starter - indító
stir - keverés
structure - szerkezet
sub - alad
touchdown - földetérés
pimp - strici
brief - rövid
anxiety - szorongás
approach - megközelítés
bay - öböl
beat - üt
buzz - zümmögés
chemistry - kémia
desperately - kétségbeese@en
diabetes - cukorbetegség
diarrhea - hasmenés
dictionary - szótár
doorman - portás
exploit - kihasználni
fatty - zsíros
fluid - folyadék
forty-two - negyvenke@ő
gender - nem
glitter - fénylik
harass - zaklat
hen - tyúk
improv - improvizáció
interfere - zavar
irony - irónia
married - házas
novelty - újdonság
phew - Fú
phony - HAMIS
previous - előző
rehab - rehabilitáció
reindeer - rénszarvas
reminder - emlékeztető
rescue - mentés
resent - neheztel
rodeo - rodeó
round - kerek
severe - szigorú
slippery - csúszós
smoker - dohányos
spooky - kísérteUes
tap - csap
thirty-eight - harmincnyolc
transplant - átültetés
villain - gazember
well - jól
whatsoever - bármilyet
stunt - kaszkadőr
dock - dokk
vomit - hányás
a.k.a. - más néven
accurate - pontos
alter - változtat
ash - hamu
authentic - hiteles
basis - alap
booger - takony
broken - törö@
chemical - kémiai
clap - taps
closely - szorosan
commissioner - biztos
communication - kommunikáció
drive - hajtás
Dutch - holland
engineer - mérnök
federal - szövetségi
fetch - lehívás
forty-eight - negyvennyolc
fried - sült
glory - dicsőség
godfather - keresztapa
harmless - ártalmatlan
hurry - siet
importantly - fontosabb
lounge - társalgó
major - őrnagy
milkshake - turmix
mutant - mutáns
near - közel
negotiate - tárgyalni
notebook - jegyzeaüzet
outlet - konnektor
paycheck - fizetési csekk
prop - támaszt
quantum - kvantum
range - hatótávolság
sane - épelméjű
saxophone - szaxofon
smiley - mosolygó
solar - nap
spaceship - űrhajó
stem - szár
sting - fullánk
storage - tárolás
suite - kíséret
trade - kereskedelmi
unlock - kinyit
urban - városi
wacky - kiszámíthatatlan
warrior - harcos
Congress - Kongresszus
adore - rajong
aggressive - agresszív
balcony - erkély
beam - gerenda
charm - báj
cock - kakas
consume - fogyaszt
crank - hajtókar
duck - kacsa
European - európai
fatso - kövér
fiction - fikció
headquarters - központ
holder - tartó
income - jövedelem
ink - Unta
instrument - eszköz
jinx - vészmadár
kindly - kedvesen
liquid - folyékony
lump - csomó
magnet - mágnes
mail - felad
marketing - markeUng
originally - eredeUleg
pfft - pm
piggy - kismalac
pineapple - ananász
poo - kaki
porch - veranda
predict - megjósolni
priceless - megfizethetetlen
priority - prioritás
public - nyilvános
ramp - rámpa
receipt - nyugta
rusty - rozsdás
sandal - szandál
seize - megragadni
servant - szolga
shrink - összezsugorodik
sidewalk - járda
significant - jelentős
slaughter - levágás
spine - gerinc
stubborn - makacs
stumble - botlás
trouble - baj
upset - felborít
urge - késztetés
urgent - sürgős
veal - borjúhús
wink - kacsintás
notch - bemetszés
scum - hab
sewer - szennyvízcsatorna
bargain - alku
driving - vezetés
remark - megjegyzés
abort - megszakít
active - akTv
aid - támogatás
aspirin - aszpirin
bakery - pékség
biggie - nagyfiú
bold - bátor
bomb - bomba
brat - kölyök
cemetery - temető
cleanse - UszTt
colleague - kolléga
colon - vastagbél
confusion - zavar
congratulate - gratulál
contact - érintkezés
context - kontextus
creeps - libabőr
demand - kereslet
dull - unalmas
fog - köd
fuzzy - bolyhos
individual - egyedi
insensitive - érzéketlen
investigation - vizsgálat
investor - befektető
irresponsible - felelőtlen
knit - kötö@
meter - méter
nominate - jelöl
oatmeal - zabpehely
omelet - omle@
overcome - legyőzni
plaque - plake@
pursue - üldöz
reflect - tükröződik
relation - kapcsolat
rep - képviselő
retard - retardált
seat - ülés
shack - kunyhó
sincere - őszinte
slice - szelet
snap - pa@anás
spell - varázslat
theft - lopás
tricky - trükkös
tummy - has
twenty-six - huszonhat
undo - visszavonás
unnecessary - szükségtelen
unpleasant - kellemetlen
vase - váza
waist - derék
swan - ha@yú
premiere - bemutató
thunder - mennydörgés
bizarre - bizarr
cliff - szikla
comb - fésű
curl - becsavar
disable - leUltás
district - kerület
emerge - előbukkanni
emperor - császár
endless - végtelen
fantasize - fantáziál
folk - népi
fortunately - szerencsére
forward - előre
gap - rés
goggles - védőszemüveg
handshake - kézfogás
illusion - illúzió
infection - fertőzés
influence - befolyás
liberal - liberális
mutual - kölcsönös
nun - apáca
object - objektum
p.m. - délután
patience - türelem
pickup - felvétel
portrait - portré
possess - birtokol
rabies - vesze@ség
redneck - paraszt
regard - tekinte@el
relevant - lényeges
restrain - féken tartani
satisfaction - elégede@ség
secondly - másodszor
single - egyetlen
sip - korty
sponsor - szponzor
sprinkles - szórások
steel - acél
subtitle - felirat
tackle - felszerelés
tacky - ragadós
territory - terület
tourist - turista
tremendous - óriási
trim - vágás
tux - szmoking
valentine - szerető
vegan - vegán
womb - méh
institute - intézet
paw - mancs
absence - távollét
acceptable - elfogadható
apart - szétválasztva
assemble - összeszerelni
assistance - támogatás
back - vissza
bluff - blöﬀ
bribe - vesztegetés
bum - ingyenélő
conceive - foganni
diner - étkező
drill - fúró
expel - kiutasít
finals - döntő
flow - folyik
garlic - fokhagyma
groin - ágyék
handful - maréknyi
hike - túra
importance - fontosság
intimacy - meghi@ség
inventor - feltaláló
mummy - múmia
ninth - kilencedik
occupy - elfoglalni
pamphlet - röpirat
pause - szünet
pretentious - elbizakodo@
ranch - tanya
reverse - fordíto@
rooster - kakas
scramble - tülekedés
scrape - kaparás
sensation - érzés
shuttle - transzfer
stall - bódé
storm - vihar
summon - idézés
tad - srác
tan - cserszínű
tango - tangó
teeny - pici
tenth - Uzedik
thirty-six - harminchat
thrill - izgalom
trash - szemét
twenty-nine - huszonkilenc
unexpected - váratlan
unicorn - egyszarvú
unknown - ismeretlen
unpack - kicsomagolni
useful - hasznos
variety - fajta
vicious - gonosz
voter - szavazó
warning - figyelmeztetés
writing - írás
photograph - fénykép
jerky - száríto@
manure - trágya
razor - borotva
animate - élő
atmosphere - légkör
boundary - határ
cardboard - karton
cherish - dédelgetni
civilization - civilizáció
commander - parancsnok
conquer - meghódítani
convenience - kényelem
cook - szakács
cram - bemagol
deadline - határidő
detector - detektor
dresser - komód
elegant - elegáns
empire - birodalom
extraordinary - rendkívüli
grandson - unoka
helpless - tehetetlen
hike - túra
historical - történelmi
homeless - hajléktalan
hottie - dögös lány
identical - azonos
initiate - beavato@
investigate - nyomoz
itch - viszket
Jell-O - Zselé
juvenile - fiatalkori
lack - hiány
Latin - laUn
luggage - poggyász
mannequin - manöken
motivate - moUválni
niece - unokahúg
passport - útlevél
pharmacist - gyógyszerész
pitcher - kancsó
planetarium - planetárium
poisoning - mérgezés
policeman - rendőr
precisely - pontosan
profile - profil
reconsider - újragondolni
ritual - szertartás
robbery - rablás
self-esteem - önbecsülés
semen - sperma
six-pack - hatos csomag
sleigh - szánkó
spontaneous - spontán
stat - staUszUka
stunning - lenyűgöző
supper - vacsora
tab - fül
thirty-four - harmincnégy
thirty-seven - harminchét
toast - pirítós
tolerate - elviselni
translate - fordít
tuxedo - szmoking
wand - pálca
wipe - törölje
dimension - dimenzió
serial - sorozatszám
toll - útdíj
affection - szeretet
African-American - afroamerikai
anchor - horgony
anthropology - antropológia
author - szerző
blend - keverék
blink - pislogás
blonde - szőke
brakes - fékek
breed - fajta
brochure - brosúra
clay - agyag
coin - érme
coitus - közösülés
correction - javítás
curly - göndör
custody - őrizet
direct - közvetlen
diversity - sokféleség
dodge - kitérés
drain - csatorna
dye - festék
dynamite - dinamit
equation - egyenlet
errand - küldetés
exclusive - kizárólagos
halftime - félidő
hearing - meghallgatás
hoop - karika
hunk - nagy darab
invade - megszállni
invasion - invázió
jealousy - féltékenység
jingle - csilingel
judgmental - ítélkező
kingdom - királyság
label - címke
lollipop - nyalóka
lying - fekvő
manipulate - manipulálni
mechanic - szerelő
mode - mód
narrow - keskeny
oath - eskü
odor - szag
outstanding - kiemelkedő
owl - bagoly
pope - pápa
pursuit - törekvés
rely - támaszkodik
reputation - hírnév
restore - visszaállítás
rhyme - rím
scoop - gombóc
screw - csavar
scrotum - herezacskó
superstar - szupersztár
surface - felület
teens - Unédzserek
tweet - csipog
two thousand - kétezer
undercover - Utkos
veteran - veterán
viewer - néző
wax - viasz
whine - nyafog
windshield - szélvédő
bait - csali
epic - epikus
working - dolgozó
shovel - lapát
execute - végrehajt
experiment - kísérlet
fireplace - kandalló
flee - menekül
flood - árvíz
half-hour - fél óra
heritage - örökség
housewife - háziasszony
instructor - oktató
leftover - maradék
lieutenant - hadnagy
lovable - kedves
mayonnaise - majonéz
microphone - mikrofon
nudity - meztelenség
obligation - köteleze@ség
obsession - megszállo@ság
patrol - járőr
salty - sós
schnapps - pálinka
setup - beállítás
shortly - hamarosan
sour - savanyú
spectacular - látványos
steroid - szteroid
stomp - taposás
survival - túlélés
sweatshirt - pulóver
swell - dagad
theirs - övék
traitor - áruló
uptight - feszült
wait - Várjon
arrival - érkezés
autograph - autogram
babysit - bébiszi@erkedés
backstage - színfalak mögöd
bond - kötvény
boogie - mumus
busboy - buszfiú
buttocks - fenék
camel - teve
cattle - marha
chalk - kréta
cheater - csaló
clone - klón
cobra - kobra
contribution - hozzájárulás
cough - köhögés
devote - szentel
dip - mártogatós
doodle - firkál
ease - könnyedség
erection - erekció
harm - kár
ideal - ideál
lease - bérlet
legendary - legendás
absurd - abszurd
additional - további
advertise - hirdet
appetizer - előétel
attraction - vonzerő
blow - fúj
brick - tégla
canned - konzervált
caterer - élelmező
center - központ
chilly - hűvös
classmate - osztálytárs
conclude - következtetés
consult - konzultáljon
correctly - helyesen
cozy - kényelmes
curiosity - kíváncsiság
dorm - kollégium
educate - oktat
educational - nevelési
enthusiasm - lelkesedés
filth - piszok
fitness - fitnesz
forgiveness - megbocsátás
foul - szabálytalanság
genitals - nemi szervek
goddamned - átkozo@
guess - találgatás
gutter - esővízcsatorna
horribly - szörnyen
household - háztartás
infinite - végtelen
inject - injekció
leaf - levél növényen
leap - ugrás
leap - ugrás
loving - szerető
manly - férfias
many - sok
masterpiece - remekmű
obnoxious - kellemetlen
Olympic - olimpiai
opener - nyitó
orientation - tájolás
origin - származás
orphan - árva
penalty - büntetés
residence - lakóhely
reverse - fordíto@
shallow - sekély
shipment - szállítmány
siren - sziréna
soothe - megnyugtat
spank - elfenekel
strict - szigorú
strongly - erősen
superpower - szuperképesség
violin - hegedű
volunteer - önkéntes
wake-up - ébredés
mass - tömeg
scent - illat
grip - markolat
recorder - felvevő
acceptance - elfogadás
acquaintance - ismerős
acquire - szerez
alrighty - rendben
alternative - alternaTv
anxious - aggódó
applaud - tapsol
baloney - halandzsa
capacity - kapacitás
childish - gyerekes
circle - kör
cola - kóla
comment - megjegyzés
detect - észlelni
equal - egyenlő
exotic - egzoUkus
giggle - kuncogás
gnome - gnóm
guidance - útmutatás
historic - történelmi
kiddo - kölyök
kosher - kóser
limbo - börtön
marvelous - csodálatos
minimum - minimális
missy - kisasszony
mix - keverék
nauseous - undorító
nurse - nővér
observation - megfigyelés
obstacle - akadály
overlook - figyelmen kívül hagy
philosophy - filozófia
racist - rasszista
recruit - újonc
sexuality - nemiség
shenanigan - móka
silk - selyem
swipe - elcsór
topless - félig meztelen
trauma - sérülés
tunnel - alagút
unemployed - munkanélküli
unlikely - valószínűtlen
update - frissítés
verdict - ítélet
virginity - szüzesség
whistle - síp
x-ray - röntgen
oral - orális
affairs - ügyek
anthem - himnusz
ashtray - hamutartó
assist - segít
banker - bankár
benefit - haszon
cafe - kávéház
caffeine - koﬀein
chase - üldözés
con - csalás
container - tartály
convenient - kényelmes
cord - zsinór
courthouse - bíróság
criticism - kriUka
curb - járdaszegély
dawg - haver
delight - élvezet
distant - távoli
dizzy - szédül
dressing - öltözködés
erotic - eroUkus
eyeball - szemgolyó
facial - arc-
flap - fékszárny
freshen - felfrissít
galaxy - galaxis
guardian - gyám
highlight - kiemelés
hoard - felhalmoz
hygiene - higiénia
institution - intézmény
keeper - kapus
lettuce - saláta
maiden - lány
membership - tagság
mild - enyhe
misery - szenvedés
mistaken - téves
mixer - keverő
parlor - társalgó
pity - kár
platter - tál
pointy - hegyes
poorly - rosszul
population - lakosság
psychology - pszichológia
risky - kockázatos
robber - rabló
runner - futó
runway - kifutópálya
scholarship - ösztöndíj
slim - vékony
swimsuit - fürdőruha
temporary - ideiglenes
thankful - hálás
triple - hármas
urinate - vizel
valid - érvényes
wing - szárny
winning - nyerő
convict - elítélt
crown - korona
floss - hernyóselyem
stew - pörkölt
administration - adminisztráció
auction - árverés
billboard - hirdetőtábla
bouquet - csokor
bourbon - bourbon whisky
brainwash - agymosás
breakdown - lebontás
caramel - karamella
casting - öntvény
cease - megszűnik
cheesy - sajtos
choir - kórus
cocky - öntelt
contraction - összehúzódás
creator - Teremtő
drain - csatorna
drip - csöpög
espresso - eszpresszó
essence - esszencia
exclamation - felkiáltás
experimental - kísérleU
faculty - kar
female - női
finale - finálé
flaw - hiba
gardener - kertész
greasy - zsíros
guide - útmutató
hammock - függőágy
hostess - háziasszony
initiative - kezdeményezés
live - élő
liver - máj
loan - hitel
mermaid - sellő
military - katonai
mingle - keveredik
moose - jávorszarvas
mosquito - szúnyog
mural - falfestmény
no-one - senki
non - nem
opening - nyílás
orchestra - zenekar
orphanage - árvaház
pimple - pa@anás
portal - portál
prick - pöcs
psychological - pszichológiai
rebuild - újjáépíteni
reckon - számol
recovery - felépülés
rip-off - átverés
scare - megijeszt
simulate - szimulál
simulation - szimuláció
squad - osztag
technical - műszaki
tolerance - tolerancia
tribute - Usztelgés
vice - helye@es
vile - hitvány
wilderness - vadon
worm - féreg
trigger - ravaszt
calf - borjú
scoop - gombóc
accomplishment - teljesítmény
admission - belépés
age - kor
beside - melle@
blame - hibáztatni
cabbage - káposzta
cocaine - kokain
colorful - színes
controversial - vitato@
courtroom - tárgyalóterem
crispy - ropogós
delay - késleltetés
domestic - háztartási
eastern - keleU
elsewhere - máshol
ex-husband - volt férj
exaggerate - túloz
exercise - gyakorlat
father-in-law - após
feces - széklet
formula - képlet
freeway - autópálya
grade - fokozat
grownup - felnő@
hallelujah - Alleluja
hostile - ellenséges
hurtful - bántó
industrial - ipari
intern - gyakornok
ironically - ironikusan
irrelevant - irreleváns
isolate - izolál
knot - csomó
landlord - földesúr
leadership - vezetés
majesty - felség
merge - összeolvad
monologue - monológ
nine thirty - kilenc harminc
orgy - orgia
overdue - lejárt
postpone - elhalaszt
rag - rongy
registration - bejegyzés
rhythm - ritmus
screwdriver - csavarhúzó
scuba - búvárfelszerelés
selection - kiválasztás
shell - héj
sincerely - őszintén
sitter - felügyelő
startle - megijeszt
stripe - csík
stroller - babakocsi
stud - csap
subscription - előfizetés
sunrise - napkelte
toupee - üstök
unconscious - öntudatlan
underestimate - alábecsülni
unique - egyedülálló
various - különféle
vein - ér
weep - sír
whiskey - whisky
witty - szellemes
worry - aggodalom
memorial - emlékmű
permit - engedély`,fA=`literature - irodalom
such as - mint például
bee - méh
stairs - lépcsői, lépcső, lépcsőn
inbox - postaláda
charming - elbűvölő
dishonest - tisztességtelen
over time - idővel, az idők során, az idők folyamán
bra - melltartó
honey - méz
windy - szeles
video - videó
oil - olaj
good - jó, jók, jót
penny - fillér
brought - hozott, (ő) hozott, elhoztad
confirmation - megerősítést
thanks for - Köszönöm, Köszönjük
paper - papír
a bit - egy kicsit
a few - néhány
corn - kukorica
description - leírás
victory - győzelem
what - mi
partly - részben
outskirts - külváros
northwest - északnyugat
invention - találmány
bravery - bátorság
broke - eltört, eltörtek, törte
use - használ
burger - hamburger
night - éjszaka
market - piac
quarter - negyed
user - felhasználó
beyond - mögé
see - lát
good afternoon - jó napot
wash - mos
without - nélkül
guidelines - irányelvek
difference - különbség
cliché - klisé
comfortable - kényelmes
from - tizenöttől, elől, hattól
cancer - rák
allow - (meg)enged
architecture - építészet
confirm - megerősít
browser - böngésző
seed - mag
unexpected - váratlan
fly - repül
there were - volt
feedback - visszajelzés
port - kikötő
coupon - kupon
overnight - éjjel, éjszaka
off - kifelé, biciklidről, elfelé
scrub - dörzsöl, megdörzsöl
meanwhile - eközben
herself - önmagát, saját maga, önmaga
believe - hisz
put away - eltesz
heal - meggyógyul, gyógyulás
fur - szőrme
as well - is
lovely - imádnivaló
repeat - ismétel
virus - vírus
hold - tart
willing - hajlandó
on - bekapcsolva, án, rajta
childhood - gyerekkor, gyerekkorom
haircut - hajvágás
policy - politika
determined - eltökélt
fill out - kitölt
ice - jég
steep - meredek
killer - gyilkos
farm - farm
post - bejegyzés
within - belül
genuine - eredeti
southwest - délnyugat
period - korszak, periódus, időszak
furthermore - továbbá
introduce - bemutat
butterfly - pillangó, lepke
pile - halom
motive - indíték
scarf - sál
have - van
right - igazad, ugye, jog
background information - háttér-információ
uniform - egyenruha
foggy - ködös
loudly - hangosan
fashionable - divatos
delighted - örültek, elragadtatva, örvendek
advertising - reklámozás
sequel - folytatás
no - nem
jam - lekvár
jeans - farmer
plan to - tervem hogy, tervem, hogy
design - terv
inspiring - inspiráló, Inspiráló
eraser - radír
rich - gazdag
rec center - szabadidőközpont
gotten - lett, megkapta, szerzett
obvious - nyilvánvaló
two - kettő
sheep - juhukat, juhok, juh
coin - érem
small - kicsi
arrival - érkezés
July - július
actress - színésznő
break down - elromlott
right away - azonnal
animation - animáció
win - nyer
chase - üldözni, üldözi, üldöztük
flood - árvíz
beside - mellett, mellé
prefer - jobban szeret
mistake - hiba
trailer - előzetes
spare time - szabadidő
parrot - papagáj, papagájt, papagájok
answer - válasz
leg - láb
ticket - jegy
part-time - részidős
pollution - szennyezés
much - sok, sokat, sokkal
French - francia
meant - szándékozott, akarta mondani, jelentett
champagne - pezsgő
if you like - ha szeretnéd
twenty ten - húsz tíz
sad - szomorú
housework - házimunka
click on - rákattint
born - született/megszületett
recovery - felépülésed, felépülése, felépülés
neither - egyik sem
violent - erőszakos
secretary - titkár
color - szín
meet up - találkozunk
alarm - ébresztő, riasztó
get dark - besötétedik
salmon - lazac
headache - fejfájás
soul - soul
mainly - főleg
done with - kész van vele
have a good day - szép napot
as - amint, valamiként, miközben
example - példa
coffee shop - kávézó
totally - teljesen
chemistry - kémia
mad - mérges
next day - másnap
egg - tojás
email address - e-mail-cím
anything - bármi, valami, semmit
is from - származik
fallen - lehullott, kidőlt, elesett
knowing - tudás, tudva, tudását
swim - úszik
card game - kártyajáték
tiger - tigris
living room - nappali
minimum - minimum, legkisebb, legalacsonyabb
date - dátum, dátumnak, időpont
official - hivatalos
intermission - szünet
fix - megjavít
how much - mennyi
scrambled eggs - tojásrántotta
pork - disznóhús
initially - eleinte
arrange - rendezed, elrendezése
January - január
concerned - aggasztott
afterward - utána
rd - 3., 23., 3-a
mountain - hegy
actually - valójában
physics - fizika
unpopular - népszerűtlen
amazingly - hihetetlenül, elképesztően, meglepően
named - hívják
her - őt, benne, neki
platform - peron, vágányt, peronról
far away - messze
stand - áll
feather - tolla, toll
family - család
look up - megnéz
helmet - sisak
taken - elvitt(ék), elvett(ék)
towel - törülköző
prayer - ima
black - fekete
seatbelt - biztonsági öv
rsvp - kérjük, jelezzen vissza
cart - bevásárlókocsi
old - régi
dream - álom
climate - éghajlat
reveal - felfedje, felfedni
deep - mély
amazed - elképedt, lenyűgözve
text message - szöveges üzenet
someplace - valahol, máshová, valahova
right here - pont itt
half- - fél
publish - kiadni, közzétenni, közzéteszem
cupboard - szekrény, szekrényed, szekrényedben
let - engedett, hagy, hagyott
rearrange - átrendez
by accident - véletlenül
dress - ruha
village - falu
certified - tanúsítványra, tanúsítvány, tanúsítványt
circle - kör, körforgás
create - (el)készít, (meg)alkot, létrehoz
which - melyik, hányadik, amit
scenery - táj
tutor - magántanár
ant - hangya
fight - harcol, vita, harc
unusual - szokatlan
push - tol
submit - beadnunk, adták be, beadtad
happy - boldog
customs - szokása, vám
listen - figyel
synagogue - zsinagóga
propose - javasol
got - szerezte, besötétedett, bejutottam
see you later - viszlát később
household - háztartási
later - később
not - nem
price - ár
exactly - pontosan
chew - rágj, rágógumit, rágok
deadline - határidő
encourage - bátorítanunk
aspirin - aszpirin
yearly - éves
stadium - stadion
spicy - fűszeres
agree - egyetért
solution - megoldás
ago - ezelőtt
predict - előre jelezni, megjósolni
return - visszavisz
full-time - teljes idős
alike - hasonlít, hasonló, egyformán
funny - vicces
illegal - törvénytelen, illegális
atmosphere - légkör, atmoszféra, hangulat
can't stand - ki nem állhatja
part - rész
babysitter - bébiszitter
creepy - ijesztő, hátborzongató
cardio - kardió
borrow - kölcsönkér
go out - kimegy
professionally - profi módon
hockey - jégkorong
first name - keresztnév
mix - összekever
peak - csúcs
champion - bajnokok, bajnok
hometown - szülőváros
service - szolgáltatás, ügyfélszolgálat, kiszolgálás
chess - sakk
leaf - falevél, levél
dashboard - műszerfalra, műszerfala, műszerfalat
Chinese - kínai
lifestyle - életmód
archeologist - régész
retirement - nyugdíjban
preference - preferencia, előnyben
high - magas
jacket - kabát
cannot - kérheted, nem (csinál)hat (vmit), nem
voicemail - hangposta
gym - edzőterem
empty - üres
mattress - matrac
shocking - megdöbbentő
forties - negyvenes éveinkben, negyvenes éveimben
temperature - hőmérséklet
practice - gyakorol
double - kettős, dupla, kétszeres
dip - mártás, mártogatóst
tablecloth - asztalterítő
out-of-date - elavult
along - végig- (megy/sétál), magával/magukkal (visz/nek), mentén
vegan - vegán
purchase - megvásárol, vásárlás, vásárol
parents - szülők
investor - befektető
soundtrack - filmzene
unnecessary - szükségtelen
how - hogy
cent - cent
worried - aggódónak, aggódtál, aggódom
tourist - turista
adapt - alkalmazkodni
why - miért
in a hurry - sietve
relaxing - relaxáló
what time - mikor
tons of - rengeteg
slice - szelet
pottery - kerámiák
picky - válogatós
few - kevés, keveset
select - választani
gentle - gyengéd, szelíd
bedtime - lefekvés ideje
besides - amúgy, ezenkívül, mellett
destroy - lerombol
level - szint
two thousand seven - kétezer-hétben, kétezer-hetes
sensitive - érzékeny
costume - kosztümje, jelmezemet
grandchildren - unokák
computer - számítógép
against - ellene
fifth - ötödik
on the ground - a földön
i heard - hallottam
rare - ritka
capital - főváros
touch - megérint
a lot of - sok
cycling - biciklizés, kerékpározást, kerékpározás
oven - sütő
organic - organikus, biológiai
pickle - savanyúság
thesis - szakdolgozatomat, szakdolgozatom
just now - az imént
unconscious - tudattalan
recognize - megismertem, megismersz, megismer
frustration - frusztrációd, frusztráció
bored - unatkozó
path - út
together - együtt
architect - építész
crucial - létfontosságú
lead - vezetni, vezető, vezesse
they say - mondanak
scared - ijedt
lady - hölgy
seasonal - szezonális
nowadays - manapság
i'd love that - szeretném
adorable - aranyos
and - és, meg, pedig
bicycle - bicikli
irritated - irritált
secret - titkot, titok, titkom
perfectly - tökéletesen, teljesen
insult - sértésnek
hidden - elrejtve
impact - hatása
forty - negyven
o'clock - órakor, óra
sophisticated - kifinomult
per - -nként (pl. óránként, fejenként), -nta/-nte (pl. naponta, évente)
science - tudomány
from time to time - időről időre, időnként
insurance - biztosítás
fluffy - bolyhos
shouldn't - kéne, kellene
unavailable - elérhetetlen
internationally - nemzetközileg
as usual - mint mindig
essential - elengedhetetlen
brown - barna
tuna - tonhal
windshield - szélvédő
bled - vérzett
weights - súlyemelés, súlyok, súlyzókat
rent - bérel
teeth - fog, fogak, fogaid
limited - korlátozott
purple - lila
until then - Addig
pleasure - élvezet, öröm
anxiety - szorongás
annoy - idegesítem
performer - előadóművész
haven't - nem
front desk - recepció
peculiar - furcsa
difficult - nehéz
blew - kifújta, elfújta
guilty - bűnös
illness - betegség, betegségben
academic - akadémiai
episode - epizód
spinach - spenót
film - film, filmet (acc.), filmhez
all about - mindent
jazz - dzsessz
would you like to - szeretnéd, szeretnél
lost - elveszett
section - részleg
at home - otthon, itthon
air conditioning - légkondicionálás
qualified - képes, alkalmas
stressed - stresszes
anyhow - Mindenesetre
scary - ijesztő
fall down - leesik
reserve - lefoglalja, lefoglal, (le)foglal
lend - kölcsönad
guess - kitalál
bye - szia
did not - nem
down - le, lent
silver - ezüst
habitat - élőhely
twenty fifteen - kétezer-tizenötben, kétezer-tizenöt
write - ír
silent - csendes
all day - egész nap
alternatively - alternatív megoldásként, vagy esetleg
doctor's office - orvosi rendelő
sightseeing - városnézés
i'm sorry - sajnálom
citizen - polgár, állampolgár
stretch - nyújt
put on - felvesz
salon - szalon, fodrászat
belong to - tartozik
legend - legenda
ham - sonka
roughly - durván
participation - részvétel
treadmill - futópad
ad - reklám
incorrect - helytelen
invite - meghív
planet - bolygó
member - tag
bit - darabka, egy kicsi, egy kevés
extremely - rendkívül
deposit - befizet
tiny - apró
juice - gyümölcslé
appear - megjelenik, látszanak, tűnik vmi(lyen)nek
push-up - fekvőtámasz
young - fiatal
release - kiadni
crowded - zsúfolt
cover - borító
wish - kívánság, kíván (vkinek vmit)
sunburn - Leégtél
pronunciation - kiejtés
cheerful - vidám
stressed out - stresszes
spy - kém
shot - ital
tail - farok
gymnastics - torna
ring - gyűrű
kill - öl
considerable - jelentős
good at - jó az írásban
label - címke, címkét, címkéje
compete - versenyez
footprint - lábnyomot
warning - figyelmeztetem
pocket - zseb
fruit - gyümölcs
harvest - aratás, betakarítás
spider - pók
get off - le, szállnak le, leszállnak
regret - megbánni
puppy - kiskutyát, kiskutya
printer - nyomtató
conversation - beszélgetés
silence - csend
waterproof - vízálló
American - amerikai
ladies and gentlemen - hölgyeim és uraim
no one - senki
court - udvarol, udvar, bíróság
condition - állapot, feltétel
skip - kihagy
guard - őr
me neither - Én sem
chair - szék
organize - rendbe tesz
unemployment - munkanélküliség
sound - hangja, hang, hangzik
look like - úgy néz ki, mint
muffin - muffin
mustard - mustár
history - történelem
calculator - számológép
about to - készülsz
will - lesz, majd, fogja
gun - fegyver, pisztoly
maximum - maximum
saturday - szombat
neighborhood - környék
eye - szem
police report - rendőri jelentés
australian - ausztrál
underline - aláhúz
planner - határidőnapló
upcoming - következő
break - eltörtem, törtem, törted
marathon - maraton
you'll - leszel, fogsz, kapsz
how are you - hogy vagy
even though - noha, bár, annak ellenére, hogy
hairstyle - frizura
mean - ért
threaten - fenyeget, megfenyegeti
news - hírek
raw - nyers
despite - annak ellenére
stay away from - távol fogok maradni, távol kellene maradnunk, maradjunk távol
visitor - látogató
friendly - barátságos
shark - cápa, cápát (acc)
side effect - mellékhatás
pack - csomagol
sang - énekeltünk, énekelt, énekeltem
anywhere - semerre, sehol, sehova
an f - egy F
take a tour - túrára megy
proof - bizonyíték
kicked - rúgta
how's - hogy van
entrance - bejárat
customer - ügyfél
don't forget to - ne felejtsétek el, ne felejtsd el, ne felejts
bleed - vérzik
forget - elfelejt
branch - ág, ágat (acc)
in the end - végül, Végül is
moment - pillanat
global warming - globális felmelegedés
sauce - szósz
scissors - olló
good evening - jó estét
majority - többség
driveway - kocsibeállón, kocsibeállót
least - legkevésbé
wasn't - nem voltam, nem, nem volt
leisure - szabadidő
toast - pirítós
boil - forrni, forralni
restart - újraindít
let's - Tartsunk, Csináljuk, Menjünk
top - teteje
told - mesélt, elmeséltem, meséltünk
had to - kellett
appointment - időpont
campus - kampusz
journey - utazás, út, utazásunkra
a.m. - reggel
hello - szia
plain - egyszínű, sima
could - tudtalak, tudtál, -hat
atm - bankautomata
ages - korok
bathroom - fürdőszoba
internal - belső
ceiling - mennyezet
whisper - suttogni
important - fontos
wait - vár
incredible - hihetetlen
prison - börtön
Italian - olasz
afterwards - utána
February - február
wanted - akartak, kértek, akartunk
sweet - édes
announce - bejelent
comic book - képregény
free - díjmentes, ingyenes, ingyen
how many - hány
packed - csomagoltam, bepakolta, csomagoltak
niece - unokahúg, unokahúgom
female - nő(i)
nice to meet you - Örülök, hogy
freezer - fagyasztó
shown - megmutatta
lime - zöldcitrom, lime
greedy - kapzsi
pyramids - piramisok
aloud - hangosan
care - gondoskodás, ellátás, törődés
hill - domb
bandage - sebtapasz
adventurous - kalandvágyó
quickly - gyorsan
jar - befőttesüveg
sign - tábla
for example - például
torn - szakadt
in court - a bíróság előtt, a bíróságon
what time is it - hány óra van
success - siker, sikert
regards - üdvözlet
convenient - megfelelő
mood - hangulat
react - reagált
tuesday - kedd
invitation - meghívó
love to - szeretném
groom - vőlegény
wood - fa
message - üzenet
board - tábla
thirty-seven - harminchét
threat - fenyegetés
instrument - hangszer
object - tárgy
instructions - utasítások
amount - összeged, összeg, mennyiség
train - vonat
salary - fizetés
raise - fizetésemelés
ultimate - végső
beautiful - gyönyörű
show - műsor
matter - gond, anyag, téma
shave - borotválni
balcony - erkély, erkélyem
regular - átlagos
been - lett, jártál, volt
for a while - egy ideig
agriculture - mezőgazdaság
nurse - ápoló
hire - felvenni, fogadjak, fogadd
risky - kockázatos
i'd like a - Szeretnék egy
cyclist - biciklista, kerékpáros, biciklis
lonely - magányos
distract - zavarj
profit - profittal
teacher - tanár
go home - hazamegy
cat - macska
underestimate - alábecsül
do the dishes - mosogat
guy - srác
obviously - nyilvánvalóan
withdraw - kivesz
condolences - részvét
flown - repült
in theory - elméletileg, elvileg
witch - boszorkány
cough - köhögés
choice - választás
squirrel - mókus
animal - állat
relax - relaxál
attend - részt vesz
approval - jóváhagyását, engedély
six - hat
disgusting - undorító
reasonable - észszerű
how's it going - hogy mennek a dolgok
modern - modern
personal - személyes, személyi
finish - befejez
was - volt, voltam
whole - egész
north - észak
bright - fényes
briefly - röviden
eighty - nyolcvan
talented - ügyes, tehetséges
deceive - becsapni
job - munka
drums - doboknál, dobot, dobokat
flag - zászló
evil - rossz, gonosznak, gonoszak
mixer - mixer
happy birthday - boldog születésnapot
gray - szürke
goal - cél
holiday - ünnep
speed - sebesség, sebességét
webcam - webkamera
make up - kibékül
summit - csúcson, csúcsig, csúcs
gorgeous - gyönyörű, gyönyörűek
carrot - répa
became - vált, lett, lettek
think of - gondol vkire/vmire
reread - újra el kell olvasniuk, újraolvas
reason - ok
pray - imádkozik
kangaroo - kenguru
also - is
more often - gyakrabban
payment - fizetés
final - utolsó
judge - bírót, bíró
rest - pihen
probably - valószínűleg
diet - étrend
sushi - szusi
foreign - idegen
maintain - fenntartani
things - dolgainkat, dolgaimat, dologra
nevertheless - mindazonáltal
grandma - nagymama, nagyi
up - fel, fent, fenn
assume - feltételez, feltételezni
root for - szurkol
endangered - veszélyeztetett
often - gyakran
gossip - pletykál
mystery - rejtély
forgot - elfelejtették, elfelejtette, felejtettem
plot - cselekmény
snowboard - snowboardozik
incident - eset, esemény
lane - sáv
practically - gyakorlatilag
ridden - lovagolt, lovagoltam
obsession - megszállottja, megszállottság
lifelong - élethosszig tartó
seated - leültetve
disguise - jelmeze, jelmezben, jelmez
high school - középiskola
ear - fül
throw - dob
study - tanul
twin - ikertestvér
shocked - döbbent
map - térkép
french fries - hasábburgonya
trade - kereskedelmi, kereskedelem
thank you - köszönöm
championship - bajnokság, bajnokságot
various - különböző
traveler - utazó
picture of - képet egy
collar - (ing) nyaka
at all - egyáltalán, sehogy sem
foreigner - külföldi
blog - blog
worth - ér (vmennyit)
grow - nőj, termeszteni, nősz
pass away - elhuny, huny el
consider - fontolóra/figyelembe vesz, (meg/át)gondol, tart (vminek)
sink - mosogató
communicate - kommunikál
how about - Mi lenne
consequence - következmény
title - cím, címe, címmel
coffee table - kávézóasztal, dohányzóasztal
promote - előléptetni
sell - árul
thought - gondolt (vmire), gondolkodott (vmin), (azt) hitt(em/ed/e)
efficient - hatékony
grocery store - élelmiszerbolt
thinking of - gondolkodtam rajta, gondolkodom, gondolkodsz rajta
superb - nagyszerű
theme - téma
candidate - jelölt
those ones - azok
canceled - lemondva, elmarad, törölt
a number of - számos
starving - éhező
magic - varázslat, mágikus
pot - fazék
magician - bűvész
responsible - felelős, megbízható, felelősségteljes
them - nekik, azokat, őket
relaxation - relaxálás
system - rendszer
shook - rázott
thumb - hüvelykujjam
offense - támadás
early - korán
ever - valaha
afford - megengedheti
unhappy - boldogtalan
mushroom - gomba
antique - antik
heavy - nehéz
stand up - feláll
regarding - vonatkozóan, kapcsolatban
remind - emlékeztet
area - terület
grossest - legundorítóbb
east - kelet
jewelry - ékszer
look for - keres
taught - tanítottunk, tanította, tanított
forgotten - elfelejtett, felejtettem
crowd - tömeg
reservation - foglalás
cave - barlang, barlangból
roof - tető
injure - megsérül
step - lépés, (mi) lépünk, lépcsőfok
evidence - bizonyíték
allergy - allergia
father - apa
annoying - idegesítő
another - még egy
claim - állítja
boat - hajó
course - tanfolyam
bird - madár
eighteen - tizennyolc
offend - megsért, sért
ball - labda
ufo - UFO-tól, UFO-t, UFO
lie down - lefekszik
what if - mi van (akkor) ha
hanging - lógni, akaszt
bucket - vödör
ceremony - ünnepség
immediate - azonnali
teach - tanít
noteworthy - figyelemre méltó
alone - egyedül
disagree - nem ért egyet
hard - nehéz
tissue - zsebkendő
accidentally - véletlenül
stepmother - mostohaanyád
circumstance - körülmények
swimsuit - fürdőnadrágot, fürdőruha, fürdőruhát
package - csomag
who's - Kit, Ki
death - halál, halált
habit - szokás
picture - kép
author - szerző
diamond - gyémánt
central - központi
arrow - nyilat
no longer - többé
rugby - rögbi
cream cheese - krémsajt
each other - egymást, egymásnak
put - tesz
generation - nemzedék, generáció, korosztály
donkey - szamár
unreasonable - elfogadhatatlan, túlzó
lift - emel
click - kattints, kattintson, kattinthatsz
time - idő
fasten - becsatolni
effort - erőfeszítés
classroom - osztályterem
politely - udvariasan
spouse - házastárs
currently - jelenleg
landscape - tájkép, táj, látkép
several - számos
suffering - szenvedés, szenved
outrageous - felháborító
entrepreneur - vállalkozó
mobile - mobil
truly - valóban, igazán
basket - kosár
brush - hajkefe
plate - tányér
piercing - piercing
action - felvétel, tett, akció
stunning - pompás
media - média, médiát
assistant - asszisztens
shelves - polcokat, polcok, polcokon
word - szó
go shopping - vásárolni megy
shrimp - garnélarák
grown - kinőtt
March - március
visit - meglátogat
sick - beteg
keep - tart
play the - játszani
do you need - szükséged van ...?
cowboy - cowboy
excellent - kiváló
fitness - fitnesz
written - megírta, írva
dragon - sárkány
goat - kecske
task - feladat
count - (meg)számol, számolnak, számítanunk
tree - fa
sneaker - sportcipő
pattern - minta
specific - pontosabb, konkrét
pain - fájdalom
frequent - gyakori, gyakoriak
even - még
begin - kezdődik
nice - szép
keep fit - fitten tartja magát
unknown - ismeretlen
alibi - alibi
tomorrow - holnap
fifty - ötven
snake - kígyó
mustache - bajusz, bajusza
two thousand three - kétezer, kétezer három
maintenance - karbantartás
pleased - elégedett
before - előtt
traditional - hagyományos
hat - sapka
sharp - éles, pontos, pontosan
require - igényel
flute - fuvola
she - ő
water bottle - vizesüveg
am - vagyok
goddess - Istennő
recently - mostanában, nemrég
lecture - előadás
wedding - esküvő
strict - szigorú
itch - viszket
playoff - rájátszás
goalkeeper - kapus, kapust
smelly - büdös
theory - teória, elmélet
rewarding - jutalmazó
carry - visz
designer - tervező, divattervező
sleepy - álmos
professor - professzor
biography - életrajz
water - víz
everything - minden
green - zöld
hip - csípő
artist - művész
classified - titkosított, titkosította
alternate - alternatív
p.m. - délután
cucumber - uborka, uborkát
nearby - közel, közelben
out there - ott kint
cookie - keksz
same - ugyanaz
quick - gyors
flexibility - hajlékonyság
photo - fénykép
will you - fogjátok, fogsz, fogod
garbage - szemét
marriage - házasság, házasságkötés, házassági
love at first sight - szerelem első látásra
meat - hús
read - olvas
hurt - megbántották, fájni, fáj
ankle - boka
dictionary - szótár
have to - kell, szükséges
minute - perc
pencil - ceruza
invent - feltalálnia
annual - éves
he's - ő
comedian - humorista
furniture - bútor
springtime - tavasz
anxious - izgatott
olive - olajbogyó
admirable - csodálatos
party - buli
record - felvesz
health insurance - egészségbiztosítás
less - kevésbé
see through - átlát
crown - korona
muddy - sárosnak, sáros
day off - szabadnap
boot - csizma
conference room - konferenciaterem
expert - szakértő
bottom - fenék
property - tulajdon, birtok, ingatlan
program - program
unbelievable - hihetetlen
heart - szív
what to - mihez
euro - euró
because - mert
cancel - lemond
cupcake - cupcake
solved - megoldotta
journal - napló
teenager - tinédzser
secretly - titokban
fabulous - mesés
abroad - külföld, külföldön
slide - csúszdán, csúszda, csúszdája
affordable - megfizethető
flexible - rugalmas
scam - csalás
anymore - már, tovább
stay - tartózkodik, maradtok, maradnom
easily - könnyen
hot - forró
allowed - engedélyezett
bruise - zúzódás
daily - napi
omelet - omlett
teaspoon - teáskanál
main - legfőbb
grass - fű
kiss - csók
experience - tapasztalat
home - otthon, otthonukat, itthon
balloon - lufi
vaccine - védőoltást, védőoltás
polite - udvarias
although - bár, noha
ask for - kérni
known - tudta, ismerte
sandwich - szendvics
sir - úr
paper towel - papírtörlő
embassy - nagykövetség
twenty-fifth - huszonötödik
recess - szünet
surfer - szörfös
improvement - javulás
temporary - ideiglenes
character - szereplő
welcome to - üdvözlünk a
go through - átmenni
forecast - előrejelzés
snack - harapnivaló
allergic to - allergiás
decision - döntés
only - csak
get in - beszáll
utensils - evőeszközök
yell - üvölt
fry - sütni, megsütöm
prize - díj
end - véget ér
island - sziget
international - nemzetközi
bowl - tál
appreciate - értékelik
fairly - eléggé, viszonylag, meglehetősen
away - távol
not bad - nem rossz, nem rosszak
coach - edző
yay - hurrá
respond - válaszol, válaszoljak
climb - mászik
graphics - grafikája
technology - technológia, technika (műszaki)
postcard - képeslap
next to - mellett, mellé
trouble - gond, baj
shy - félénk, szégyenlős
cross - átmegy
feed - megetet
coincidence - véletlenül, véletlen
hopeful - reménykedő
gasp - felkiált, felkiáltani, felkiáltsak, felkiáltott
suppose - feltételezem
finally - végre
accuse - vádolod
volleyball - röplabda
i'm good - Jól vagyok
main course - főétel
how big - mekkora
anybody - senki, bárki, senki sem
van - van
café - kávézó
after school - az iskola után
seven - hét
artistic - művészi
worry - aggódik
boost - fokozni, növelni
mango - mangó
bagel - bagel
dolphin - delfin
these - ezek a, ezeket az, ezeket a
gross - undorító
some of - néhányra, néhány részét, egy részét
fought - harcolt
connection - kapcsolat
operation - műtét
thanks - köszi
get back - visszaér
postpone - elhalaszthatjuk
sleepover - ottalvós buli
big - nagy
closed - zárva
progress - haladás
consideration - figyelembe
hundred - száz, százast
stress - stressz
mute - lenémít
approximate - hozzávetőleges
apologize - bocsánatot kér, elnézést kérni
cafeteria - menza
hospital - kórház
sword - kard
beneath - alatt, alattatok
better - jobb
treasure - kincsvadászatok
hassle - macera
civilization - civilizáció
get - odaérek, jutni, eljut vhova
souvenir - szuvenír
i'll - fogok
request - kérni
generally - általában
relationship - kapcsolat
accept - elfogad, fogadnia, elfogadnak
thoughtful - figyelmes
cast - gipsz
in the middle of nowhere - a semmi közepén
management - menedzsment
toy - játék
translation - fordítás
i don't think so - nem hiszem
stove - tűzhely
wing - szárny
tour - túra
surf - szörföl
apple - alma
Spanish - spanyol
closet - szekrény
decade - évtized
shall we - jó
mouse - egér
disappoint - csalódást okoz
speaker - hangszóró
tag - bújócskáznának, bújócskát, bújócskában
public - nagyközönség, nyilvánosság, nyilvános
soup - leves
on foot - gyalog
score - eredmény
avoid - kerül, kerülöm, kerüld
tonight - ma este
present - ajándék
original - eredeti
turtle - teknős, teknősbéka
something - valami
minor - apró
medium - közepes méretű
bible - Biblia
restroom - mosdó
skeptical - szkeptikus, szkeptikusan, Szkeptikus
position - állás
did you say - mondtad
promotion - előléptetés
are there - van
Canadian - kanadai
career - életpálya, karrier, pályafutás
berries - bogyókat, Bogyókat, bogyószedés
this one - ez
by now - mostanra
brother - fiútestvér
won - nyertek, győzött, (meg/el)nyert
protest - tüntetés
knew - (ő) tudta, tudta, ismert
slow - lassú
block - háztömb
barbecue - grillezett étel
watch - megnézem, megnézünk, nézzük meg
bad at - rossz vmiből, rossz
emergency - sürgősségi osztály, vészhelyzet
tech - technológia, tech
fall asleep - elalszik, elaludt, elalszanak
travels - utazik, halad
cooler - hűvösebb, menőbb, menőbbek
strike - sztrájk, munkabeszüntetés
name - vezetéknevünk, keresztnevét, név
if - ha, -e, e
here's - itt van, tessék, íme
equally - egyformán
should - kellene, kéne
dj - DJ
neck - nyak
false - hamis
contract - szerződés, szerződést
solar system - naprendszer
hairdresser - fodrász
st - 1.
far - messze
move out - kiköltöznek
luxury - luxus
lunchtime - ebédidő
clear - átlátszó
convinced - meggyőzte
suspenseful - Izgalmas, izgalmas, izgalmasabb
stuff - dolog
brunch - villásreggeli
here is - íme, itt
follow - követ
search - kutatás, keresés, keres
agreement - megegyezés, megállapodás, megállapodást
loud - hangos
disappointing - csalódást keltő, kiábrándító
umbrella - esernyő
gate - kapu
nose - orr
twice - kétszer
cheap - olcsó
ideal - ideális
season - évszak
miss - kihagy
expect - elvárd, várni, számít
banana - banán
stage - színpad
these days - manapság
garlic - fokhagyma
wet - nedves
liquid - folyékony, folyadék
performance - előadás, előadásra, előadásuk
sung - énekelt
sleep - alszik
pay attention - figyel
zebra - zebra
hesitate - habozz
actor - színész
textbook - tankönyv
it's sunny - napos idő van, napos
weigh - nyom, mérem
series - sorozat
fireplace - kandalló
cook - főz
lemon - citrom
engineering - mérnöki
trip - utazás
take care of - gondoskodnia, gondoskodik, vigyázzatok
heard - hallott, meghallottad
ugly - csúnya
earthquake - földrengés
messy - rendetlen
thinking - gondolkodik, vkire gondolás, gondolkodás
in the afternoon - délután
hers - övé, az övét
influential - befolyásos
farthest - legmesszebb, legtávolabb
if you want - ha akarod
son - fia
cardboard - kartondobozokba, kartondoboz, kartondobozokat
gay - meleg
skeleton - csontváz, csontvázat
women - a nők, nőket, nők
guitar - gitár
laugh - nevet
carefully - óvatosan, gondosan
equality - egyenlőség
discuss - beszélget
vintage - vintage, régi
spice - fűszer
recommend - javasol
have a seat - foglalj helyet
earn - keres
with a card - kártyával
would - volna
print - nyomtat
happiness - boldogság
German - német
pear - körte
fewer - kevesebb
the sky - az ég, az égen
see you tomorrow - viszlát holnap
watch out - vigyázz
semester - félév
prepared - felkészült
businesswoman - üzletasszony
otherwise - máskülönben
following - követ, következők
expensive - drága
hide and seek - bújócska
wonderful - csodálatos
orphan - árva
admittedly - Be kell vallani
located - megtalált, található
grilled - grillezett
buy - vásárol
weak - gyenge
neighboring - szomszédos
turn in - bead
atheist - ateista
speak - beszél
nightmare - rémálom
weakness - gyengeség
private - privát, zártkörű, magánkézben lévő
tattoo - tetoválás
view - kilátás
fifteen - tizenöt, tizenötkor
how about you - és te
tea - tea
currency - pénznem
pronounce - kiejteni
sense of humor - humorérzék
haunted - kísértetjárta
run - fut
bridge - híd
sport - sport
completely - teljesen, maradéktalanul
long - hosszú
pasta - tészta
handle - fül, füle
favorite - kedvenc
robbery - rablás
ghost - szellem
related - kapcsolódó
impression - benyomás
glue - ragasztó
poisonous - mérgező
racing - versenyezni
region - terület, régió, térség
must not - Nem szabad
no problem - semmi gond
dining room - étkező
curry - curry
move into - beköltöznek, költöznek be
reach - belenyúlt, jutni, ér
bingo - bingó
pathetic - szánalmas
button - gomb
camera - fényképezőgép
it's - ez, van
arm - kar
good job - szép munka
background - háttér
mother - anya
spoke - beszélt
beach - tengerpart
do - tisztítsuk, megcsinálod, csinálnom
save - félretesz
point - pont
filmmaker - filmkészítő
thick - sűrű
dance - táncol
immigration - bevándorlás
lemonade - limonádé
doctor - orvos
he'll - fogja, tesz, lesz
that's fine - az rendben van
casual - laza, hétköznapi
sorry - bocsánat
situation - helyzet, helyzetet
theme park - vidámpark
dishwasher - mosogatógép
including - felvesz, tartalmaz, ide/bele/hozzászámít
headphones - fejhallgató
faculty - kar
you know - ismersz, ismertek, tudod
careless - figyelmetlen, gondatlan
expectation - elvárás, elvárása
competition - verseny
birthday - születésnap
give up - feladja
campfire - tábortűz
songwriter - dalszerző
till - amíg
lamb - bárány
stranger - idegen
lack - hiány
reunion - összejövetel
requirement - követelmény
slowly - lassan
interview - interjú
ahead - előtt, előre
remember - emlékszik
brilliant - zseniális, ragyogó
bomb - bomba
understandable - érthető
impress - lenyűgözd
four - négy
field - pálya
employment - foglalkoztatás, alkalmazására
loan - hitel, kölcsön
found - megtalálta, találtuk, talált
turn - elfordul
celebration - ünneplés, ünnepségre
barbershop - borbély, fodrászat
the whole time - egész idő alatt
ridiculous - nevetséges
survive - túléljük, túlélni, túléljek
into - bele
overseas - külföldön, külföldre, külföldről
suspicion - gyanítom, gyanítod, gyanítottam
potential - potenciálját, potenciálunk, potenciálja
cheek - orca
we all - (mi) mindannyian, (mi) mind, (mi) mindnyájan
arrest - letartóztatás
elbow - könyök
opinion - vélemény
go to sleep - aludni megy
out of town - távol van
fish - hal
defective - rossz
you guys - srácok, tihozzátok, ti
cloudy - felhős
make - készít
photocopy - fénymásolat
social media - közösségi média
frightening - ijesztő, rémisztő
precisely - pontosan
wrap - csomagol
score a goal - gólt szerez
row - sorba, soron
toilet - vécé
move away - elköltöznek
sweets - édességet, édességeket
English - angol
unit - egység, mértékegység
improbable - valószínűtlen
throat - torok
bug - bogár
succeed - sikerül
the mail - postába
cake - torta
spam - Spam, levélszemét
downtown - belváros
spot - hely
ballet - balett
salespeople - eladóknak, eladó, eladók
fork - villa
enjoy - élvez
patio - terasz
immigrant - bevándorló
grateful - hálás
sunday - vasárnap
after work - munka után
at - iskolánknál, show-nál, diplomaosztónál
yoga - jóga
rice - rizs
confidence - bizalmukat
back pain - hátfájás
classmate - csoporttárs
river - folyó
contest - verseny
vote - szavaz
truth - igazság
lawn - fű, gyep
the internet - interneten
where's - Hol van
register - iratkozni, feliratkozik, jelentkezzen
cabinet - szekrény
thirty - harminc
plane - repülő
technique - technika (mesterségbeli)
leave - indul
side - oldalsó, oldalon, oldali
negative - nemleges, negatív, elutasító
mask - maszk, maszkra, maszkot
trap - csapda
defeat - vereség, legyőznöd
every day - mindennap
professional - szakmai
peanut butter - mogyoróvaj
pen - toll
previous - korábbi
i'd love - Szeretnélek, Szeretnék, Szeretném
gender - nemek
football - amerikai foci
tabloid - bulvárlap, bulvárcikk
strong - erős
unlike - ellentétben, eltérően
fold - összehajtani, hajtogatta
typical - jellemző, tipikus
already - már
Wi-fi - WIFI
warn - figyelmeztetem
influence - befolyás
blow - fúj
divide - elosztjuk, megosztani
lit - felgyújtottam, gyújtott, meggyújtottam
fell down - leesett, leestek
calendar - naptár
tank - üzemanyagtartály
always - mindig
among - közé, között, körében
hand - kéz
folk - nép
on sale - leárazott
feel - érez
thirsty - szomjas
usually - általában
going - megy, elmennek, járást
healthcare - egészségügyi
whole body - teste, tested, testemben
there has been - történt
recover - felépül, meggyógyul, visszaszerez
bury - eltemetni, eltemetsz, eltemesse
application - jelentkezés
adjust - alkalmazkodni, alkalmazkodniuk
graduate from - diplomázzak
cautious - óvatos
fair - tisztességes, méltányos, korrekt
foot - lábfej
try to - próbáld meg, megpróbálom, próbálunk
normally - rendszerint
rise - növekedés, emelkedés, emelkedést
selfie - szelfi
waiter - pincér
beer - sör
folder - mappa
unfair - igazságtalan
peace - béke, békét
can't - nem, nem tud
chili - chilipaprika
milk - tej
dedicated - elkötelezettek, elkötelezettebb, elkötelezettséget
accessible - elérhető
gardening - kertészkedés
universe - univerzum, világegyetem, világmindenség
as many - annyi, amennyi
being - lények, lenni/vagy, létre
version - változat
poor - szegény
car - autó
one - egy
gather - gyűlnek
recent - közelmúltbeli, legutóbbi, friss
vacation - szabadság
volume - térfogat, hangerő, kötet
whichever - bármelyik, akármit
plant - növény
pillow - párna
colleague - munkatársad, kollégád, kollégámmal
weather - idő
hour - óra
monkey - majom
gown - ruhádban, estélyi ruha
midnight - éjfél
app - alkalmazás
password - jelszó
cure - gyógymód
charity - jótékonyság
lease - bérlet, bérleti
pedestrian - gyalogost
with - táskával, dobozzal, sérülésem
fence - kerítés
concentrate - összpontosítani
podcast - podcast
thing - dolog, dolgot
practical - gyakorlati, praktikus, Gyakorlati
rural - vidéki
clogged - eltömődött
olympics - Olimpia
she's - ő
load - terhelés, teher, rakomány
defense - védelem
car wash - autómosó
find - talál
maybe - talán
formal - hivatalos, formális
in person - személyesen
discount - kedvezmény
backpack - hátizsák
sculpture - szobor
past - mellett, múlt, múltban
groceries - élelmiszerek, élelmiszerekhez, élelmiszereimhez
thousand - ezer
would like to - szeretne
the flu - influenza
murder - gyilkosság
almost - majdnem
absolutely - abszolút, Abszolút
wooden - fából készült, fa-, fa
get married - összeházasodik
tool - szerszám
difficulty - nehézség, gond, nehézsége
have a headache - fáj a feje
cost - kerül valamibe
screen - vászna, képernyőt, képernyő
awake - ébren
popcorn - pattogatott kukorica
dizzy - szédül
tale - történet
girl - lány
statue - szobor
visa - vízum
library - könyvtár
conquer - meghódítsák
replace - pótol
steak - steak
across - át
electricity - áram
grammar - nyelvtan
bride - menyasszony
hang out - lóg
garden - kert
site - honlap, helyszín, hely
prisoner - fogoly
brochure - prospektus
lover - szerető
paint - fest
keychain - kulcstartó
appearance - megjelenés
does - tesz, nem
try - megpróbál
enormous - hatalmas, hatalmasnak
dehydrated - kiszáradt
problem - probléma
set - készlet, üdvözlőkártyakészletet, tűzök
punish - büntet
pick - választ
weekend - hétvége
all weekend - egész hétvégén
massage - masszázs
loss - veszteség
paper towels - papírtörlőt, papírtörlőket, papírtörlők
famous - híres
healthier - egészségesebb, egészségesebbnek
overall - összességében
saw - látott, megláttuk
hors d'oeuvres - előételek
snore - Horkol, horkoló
knives - kések, kés, késekre
camel - teve
feeling - érzés
vanish - eltűnik, tűnt el
retreat - elvonulás
unlock - kinyit
list - lista
or something - vagy valami
ferry - komp
binder - mappa
lawyer - ügyvéd
necklace - nyaklánc
or - vagy
bike - bicikli
calm - nyugodt
dairy - tejtermék
volcano - vulkán, tűzhányó, tűzhányót
any - semelyik, bármilyen, bármelyik
rope - kötélen, kötélugró, kötél
curriculum - tanterv
social - társadalmi, társasági, társas
olympic - olimpiai
unlikely - valószínűtlen
knock - kopogj
half price - félár
temple - templom
cheat - csal
transaction - tranzakció
committee - bizottság
guarantee - garancia, garantáljuk, garanciát
shelter - menedékhely, menedék
lives - él, lakik
their - az ő, őket
supposedly - feltehetően
last - legutóbbi
tuxedo - szmoking
kilometer - kilométer
ran - futottam, odafutott, vezettem
fever - láz
curtain - függőny
critic - kritikus
hole - lyuk
may - május, talán, -hat, -het
oh - jaj, ó
pull-up - húzódzkodás
definitely - határozottan
clinic - klinika
correction - javítást
goods - javak
measure - mér
won't - nem, nem fog
fact - tény
so many - olyan sok
username - felhasználónév
trumpet - trombita
medicine - gyógyszer
correct - helyes
faucet - csapot, csap
clearly - tisztán
spray - spray-t
impressive - leglenyűgözőbbek, lenyűgözőek, lenyűgöző
divorce - válás
poetry - költészet, költői(es)ség
novel - regény
accomplishment - teljesítmény, teljesítményérzetet
shipping - szállítás
clue - nyom
valley - völgy
paragraph - bekezdés
muscle - izmok, izom, izmot
broccoli - brokkoli
don't - nem, ne, nincs
fast food - gyorsétel
superpower - szupererő
mingle - keveredjek, keveredjünk, keveredj
dentist - fogorvos
strategy - stratégia, stratégiája
are - vannak
health - egészség
intelligent - intelligens
rude - udvariatlan
paintbrush - ecset
bookstore - könyvesbolt
damp - nyirkos
asked - megkérdezte, kérdezte, kért
terrified - rémült
loyal - hűséges
arrive - érünk, odaértél, ideérni
takeout - elvitelre
perfect - tökéletes
end up - végül
redo - újracsinál
eighties - 80-as évek
brazilian - brazil
made of - készült
necessarily - szükségszerűen
prevention - megelőző, megelőzés
fog - köd
nervous - ideges
pea - borsó
taste - íz, íze, megkóstoltad
scientist - tudós, tudósnak
next - következő
take place - lesz, történik
war - háború
gallery - galéria
productive - termelékeny
change - kicserél
upbringing - neveltetésed, neveltetésem, neveltetése
red - piros
nearest - legközelebbi
attack - támadás, roham
on mute - némítva
get lost - eltévedtem, eltévedtél, eltévedni
misleading - félrevezető
British - brit
sheet - lap
squash - tök
pick up - felvesz
strange - furcsa
s' - dolgozatainak, eredményeinek, táskáinak
relieved - megkönnyebbült
remove - eltávolítani
more - még több
laboratory - laboratórium
fate - sors
thirty-first - harmincegyedik
human - emberi, ember, emberi lény
successful - sikeres
wave - integet
tall - magas
parking - parkolás
question - kérdés
head - fej
refrigerator - hűtőszekrény
bathing suit - fürdőruhát, fürdőruha, fürdőruháról
production - termelés, előállítás
personally - személyesen, személy szerint
porch - veranda
wildlife - vadvilág
catch - elkap
check out - kijelentkezik
lab - laboratórium
robber - rabló
corporation - vállalat, vállalattól, vállalatot
negotiate - tárgyalj, megtárgyalj
jury - zsűri, esküdtszék
sudden - hirtelen
reservations - helyfoglalást, foglalások, foglalásokat
recycling - újrahasznosítás
monster - szörny
cream - tejszín
fake - hamis
hang - akasztod, akasztotta, akasztja
scene - jelenet
shampoo - sampon
suspend - felfüggeszt
ability - képesség
split - szétszakadt, eloszt
sandy - homokos
will be - lesz
bread - kenyér
awesome - remek
ranch - tanyát
divorced - elvált
jealous - féltékeny
like this - ilyen, így
direct - rendezi, rendezem
himself - őt magát, önmaga, önmagát
bone - csont
vitamin - D-vitamin, A-vitamin
considerably - jelentősen
appealing - vonzó
argument - vita
eventually - végül
misunderstand - félreért
can't wait - alig várom
kid - gyerek
lip - ajk
governor - kormányzó, kormányzónak
trust - bízik
too much - túl sok
thank - megköszön
pollute - szennyezni
hid - bebújt
complaint - panasz
accent - akcentus
baseball - baseball
salad - saláta
tomorrow night - holnap este
one of these days - egyik nap
creative - kreatív
afraid of - fél, Félek
especially - különösen
environmental - környezetvédelmi, környezeti
repair - megjavít
likely - valószínűleg
outdoors - kint
steady - állandó
today - ma
decorations - dekorációkat, díszek
beautifully - szépen
outgoing - társaságkedvelő
pay attention to - figyeljen
entire - egész
collection - gyűjtemény
broken - tönkrement
lullaby - altatódalt
struggle - küzdesz, nehezen, küzdj
seventy - hetven
look out - kinézek
dirt - kosz
occupation - foglalkozás
agency - ügynökség
thank you for - Köszönöm, hogy, Köszönöm
light bulb - villanykörtét
roll - görgesd, gördül, zsemle
concern - aggaszt, aggodalom, aggodalomra
month - hónap
seat - vécéülőke, ülőhely, ülés
winding - kanyargós
garage - garázs
well - jól
world cup - világbajnokság
smell bad - rossz szagú
notebook - jegyzetfüzet
except - vminek a kivételével, vmitől eltekintve, kivéve
desk - íróasztal
restore - helyreállíthatnánk, helyreállítom, helyreállítasz
hippie - hippie
announcement - bejelentés
provide - biztosít, nyújt, nyújtanod
flight - repülés, járatunk, repülőút
the most - legfeledékenyebb
intermediate - középszintű, középfokú, középhaladó
a ride - fuvart
explain - magyaráz
innocent - ártatlan
take a walk - sétál
crawl - mászik
wind - szél
catholic - katolikus
has - neki megvan, eszik, áll
the - az, a
new - új
calves - borjak
nowhere - sehova, sehol, semerre
wait in line - sorban állni, sorban álljak
satisfaction - elégedettség
what color - milyen színű, milyen színűek
golf - golf
seventh - hetedik
reliable - megbízható
come on - gyerünk
soap - szappan
doesn't - nem
motorcycle - motor
would have - -t volna (csinált volna)
abs - hasizmaid
society - társadalom
poison - megmérgezni, méreggel, méreg
government - kormány, kormánya
well-known - ismert
worn - viselt, kopott
thermometer - hőmérő
calf - borjú
go fishing - horgászni megy
onion - hagyma
understood - megértette, értetted, értett
others - többieket, másoknak, többiekkel
good night - jó éjt
anyone - bárkivel, valaki, senkivel
drop - leejt
leak - vízszivárgást, szivárog
last night - tegnap este
act - cselekedet, tett, felvonás
hope - remél
jog - kocog
Japanese - japán
get dressed - felöltözik
bizarre - bizarr
clown - bohóc
a bit of - egy kis ……
twenty-first - huszonegyedik
trekking - túrázás
compliment - bókot, bóknak, Bóknak
grew - nőtt
jungle - dzsungel
lion - oroszlán
stir - keverd
album - album
housewarming - házavató
bill - számla
roller coaster - hullámvasút
yeah - igen
puzzle - kirakós
go back - menjetek vissza
greatest - legnagyobb, legnagyszerűbb, legnagyszerűbbek
hurricane - hurrikán
disaster - katasztrófa
issue - gond, téma, kiadás (vmi kibocsátása)
obligation - kötelessége, kötelességet, kötelesség
continent - kontinens
he - ő
upgrade - frissítés
route - útvonalat, útirány, útvonal
sensible - érzékeny
first class - első osztály
concerning - aggasztó
southeast - délkelet
decline - csökken, hanyatlásának
encounter - találkozhatunk, találkoztok, találkozunk
hitchhike - stoppol
take off - levesz
hairstylist - fodrász
cabbage - káposzta, káposztás
is - az, van, áll
venue - helyszín
documentary - dokumentumfilm
square - tér
track - pálya, nyomon
leopard - leopárd, leopárdot
whether - hogy
drug - gyógyszer
microwave - mikrohullámú
at this point - ezen a ponton
spring - tavasz
cow - tehén
search for - keresem, keresik
sugar - cukor
amazing - lenyűgöző
tray - tálca
edit - szerkeszt
unemployed - munkanélküli
hopefully - remélhetőleg
fountain - szökőkút
weird - furcsa
elevator - lift
recipe - recept
all right - rendben
bad - rossz
highway - autópálya
eat - eszik
bitter - keserű
yard - udvar
offer - felajánl
can you believe it - el tudod hinni
find out - megtud
eight - nyolc
british - angolok, brit
ice cream - fagylalt
cheers - egészségedre
drugstore - gyógyszertár
of me - énrólam, belőlem, rólam
shaken - rázott
distance - távolság, táv
house - ház
staff - személyzet
take a flight - repülővel megy
mention - említ
not very - nem nagyon
download - letölt
available - szabad
immediately - azonnal
breakfast - reggeli
left - felejtette, távozott, elment
supermarket - szupermarket
looking - néz, utánajártál
cabin - faház, kabint, kabin
product - termék
beginning - kezdet
after all - végül is
runner - futó
piano - zongora
decide - dönt
northeast - északkelet
enough - elég
December - december
prom - végzős bál
on the way to - irányába
giraffe - zsiráf
sunglasses - napszemüveg
stand up for - kiállok
nail polish - körömlakk
hostel - ifjúsági szálló
logo - embléma, logó
aware - tisztában
realize - rájön
then - utána
consequently - ennek következtében
confident - magabiztos
all kinds of - mindenféle
mild - enyhe
budget - költségvetés
ski - síel
dusty - poros
biggest - legnagyobb
take a look - nézni
helpful - segítőkész
pose - pózol
street - utca
order - rendel
mosquito - szúnyog
intend - szándékoztam, tervezem
airplane - repülőgép
president - elnök
blender - turmixgép
spoil - romlott
dessert - desszert
in here - itt
responsible for - felelős
trend - trend, irányzat
crime - bűncselekmény
him - ellene
done - tett, csinált, végeztünk
but - de, hanem, pedig
peaceful - békés
crack - repedés
solve - megold, megoldani
frightened - megijedt
bedroom - hálószoba
such a - olyan, ilyen
test - teszt
yourselves - te magatok, magatok, magatoknak
player - játékos
blindfolded - bekötött szemű, bekötve, bekötött
prescription - recept
paperwork - papírmunka
common - gyakori
trunk - csomagtartó
half an hour - fél óra
near - közelébe, környékén, közel
can make it - el tud jönni, el tudsz jönni
relative - rokon
commercial - reklám
married to - házas, házasok
memory - memória
newspaper - újság
lollipop - nyalókámat, nyalóka, nyalókát
menu - étlap
thriller - thriller
dedication - elkötelezettségre, Elkötelezettséget, elkötelezettségüket
gum - rágógumit, rágógumimmal, rágógumival
grandpa - nagypapa
thank goodness - hála isten
insurance company - biztosítótársaság
exit - kijárat
get a virus - elkap egy vírust
tailgating - autós piknikezés, parkolóban csomagtartóból ivás
doll - baba
until - koromig, amíg … nem, négyig
sat down - leült
deadly - halálos
urgent - sürgős
rescue - menteni
fare - viteldíj
army - hadsereg
masterpiece - Mesterműnek, mesterművének, mestermű
seem - tűnik
surprising - meglepő
themselves - maguknak, magukra, magukat
target - célod, célokra, célunkat
lake - tó
world - világom, világnak, világ
project - projekt
move - költözik
lobster - homár
throw away - eldob
missing - eltűnt
heritage - örökség
great-grandson - dédunoka
observation - megfigyelés
wondered - csodálkoztak, gondolkodtam, csodálkozott
hang up - felakasztani, akasztja
bracelet - karkötő
potluck - batyus vacsi, batyus bál
potato - krumpli
said - mondott, mondta, szólt
is there - Van-e
charger - töltő
admission - belépés
energy - energia
journalist - újságíró
fridge - hűtő
continue - folytat
reference - referencia
unhealthy - egészségtelen
absent - hiányzik
before bed - lefekvés előtt
ninety - kilencven
grounded - szobafogságra
allowance - zsebpénzét, zsebpénzére, zsebpénzként
by then - addigra
don't care - érdekelnek, érdekel
the truth - igazat
any of - egyet sem
shower - zuhanyzó
stepfather - mostohaapa
shape - alak, forma
locker - szekrény
bush - Bush
somehow - valahogy
place - hely
museum - múzeum
herb - gyógynövény, fűszer
twenty - húsz
school - iskola
describe - leír
anniversary - évforduló
employer - munkáltató
a variety of - különféle
way too - túlzottan
delete - törlöm
research - kutatás, kutatásnak
start - kezd
bathtub - kád
charge - feltölt
forever - örökre
stubborn - makacs
canyon - kanyon, kanyonba, kanyonban
opposite - szemben
knowledge - tudás, tudtommal
patience - türelem
buckle - becsatolni
owe - tartozik, tartozom
live - lakik
departure - indulás, távozás
sneeze - tüsszent
material - anyag
taxi - taxi
race - verseny
don't worry - ne aggódj
how long - mennyi ideig
realistic - valósághű
celebrity - híresség
occasionally - alkalmanként
graduation - diplomaosztó
injury - sérülésből
give - ad
everybody - mindenkit, mindenki, mindenkinek
spooky - ijesztő
unless - hacsak
superhero - szuperhős
dollar - dollár
spent - töltötték, elköltöttünk, töltöttek
post office - posta
popular - népszerű
first - először
pharmacy - gyógyszertár
second - második
seen - látta
very much - nagyon
meet - találkozik
learn - tanul
comb - fésű
asleep - alszik, elaludt
try on - felpróbál
rose - rózsa, rózsát
sociable - társaságkedvelő
had - kellett, megvolt, rendelkezett
possible - lehetséges
radio - rádió
traffic light - lámpa
average - átlagos
eastern - keleti
napkin - szalvéta
express - kifejezni
cushion - párna
safely - biztonságosan
former - egykori, korábbi
marvelous - csodálatos
park - park
ready - kész
response - válasz, reagálás, reakció
coat - kabát
painful - fájdalmas
gone - elment, ment, menve
turkey - pulykahús
protect - megvéd
soccer - foci
myself - önmagam, magam, magamat
book - könyv
medal - érem
diverse - sokszínű
sure - biztos, biztosra, biztosak
hot chocolate - forró csoki
while - amíg
tower - torony
device - eszköz, készülék
pool - medence
nap - szundítani, szundíts, szundít
functional - funkcionális
vase - váza, vázát
and you - És, és te
finger - ujj
recording - felvétel, felvétele
vegetarian - vegetáriánus
headline - címsor
outdoor - szabadtéri, kültéri
yet - még, már
sitting - ülni, ülés, ülő
quit - hagy, otthagy
behavior - magaviselet, viselkedés, magatartás
formerly - régen
electronic - elektronikus
outfit - ruha
sounds - hangokat, hangzik
at school - az iskolában, iskolában, iskolába
own - van
exchange - vált
seventeen - tizenhét
belongings - tulajdona, holmijaid
breakthrough - áttörés
start school - kezdted
mall - bevásárlóközpont
photography - fényképészet
technical - műszaki
its - ...a/e/ja/je, a/az...-a/e/ja/je
guest - vendég
unwanted - nem kívánt
yogurt - joghurt
noise - zaj
chapter - fejezet
someone - valaki
discover - felfedez, felfedezniük, felfedeztem
permission - engedély, engedélyre, engedélyt
delivery - kézbesítés, küldemény, szállítmány
hike - túrázik
run out - elfogyott, kifutnak, kifutott
injured - sebesült
tip - borravaló
cause - okoz
brain - agy
smell - szaga, illat, szaguk
cold - hideg
let go - elengedlek
ten - tíz
makeup - smink
mug - bögre
childish - gyerekes
used - használta, szokva
basketball - kosárlabda
earache - fülfájás, fáj a fülem
caught - elkapott, elkapta, elkaptam
the day after tomorrow - holnapután
short - alacsony
tying - kötés
special - különleges
welcome - üdvözöllek
narrow - keskeny, keskenyek
why don't - miért nem
of course - természetesen
admire - csodálsz
oops - hoppá
as a child - gyerekként
pajamas - pizsama
bottle - üveg
meal - étkezésem, étkezésük, étel
quarter past - Negyed, negyed
not too - nem túl, túl
ship - hajó
weren't - nem voltak, nem lenne
die - meghal
host - házigazda, házigazdájának
compromise - kompromisszum
group - csoport
in advance - előre
little - kis
serve - felszolgál
abandon - hagyták el, elhagyták
take care - vigyázz magadra
location - helyszín
mouth - száj
grape - szőlő
waiting room - váróterem
pour - öntenék, öntünk
brick - tégla, téglaházakat
potentially - potenciálisan
conditions - feltételek, körülmények
talent - tehetség
cartoon - rajzfilm
on TV - a tévében
floor - padló
capture - megörökítik, megörökíteni, megörökítenie
prince - herceg
tourism - turizmus
mechanic - szerelő
driven - vezetve, vezettünk
age - életkor
feel sick - rosszul érezni magát, rosszul érezni magam
heart attack - szívroham
baby - baba
space - tér, hely, űr
bilingual - kétnyelvű
eighteen seventy - ezer nyolcszáz hetvenben, ezer nyolcszáz hetven
cotton - pamut
all of - az összes
no way - dehogy
fried - sült
reality tv - valóságshow
awful - szörnyű
a little - egy kicsit
Christmas - karácsony
data - adat
in front of - előtt, elé
took - kivett, (el)vitt(e), vállalta
reminisce - nosztalgiázom, nosztalgiázni
junk - szemetet
in charge - felelős, megbízva
unpredictable - kiszámíthatatlan
i know - én ismerek, tudok, tudom
gullible - hiszékeny
interrupt - félbeszakítani
exercise machine - edzőgép
couch - kanapé
fresh - friss
leather - bőr
appreciation - elismerését
good old days - régi szép idők
excited - izgatott
club - klub
great - nagyszerűnek, nagyszerű, nagyszerűen
nearly - majdnem
ma'am - asszonyom
forty-five - negyvenöt
diploma - diploma
please - kérlek
century - évszázad
train station - vonatállomás
one of the - az egyik ...
shop for - Vásárolni, vásárolnom, vásárolni
jelly - dzsem
television - tévéje, tévét, televízió
hide - bújtak, bújnak, bújik
pumpkin - tök, tökös
the bar - a bárba
chore - házimunka
method - módszer
zipper - cipzár
dye - fest
director - rendező
freeze - megfagy, fagyni, befagy
this - ez, ez a, e
sit down - leül
in the past - A múltban
freezing - fagyos
play against - játszik egymás ellen, játszanak egymás ellen, játszani egymás ellen
grow up - felnő
soft - puha
soon - hamarosan
June - június
demand - követelés, kereslet, igény (vmire)
contribute - hozzájárulni
class - csoport
develop - fejlődik, (ki)fejleszt, fejlődni
fantastic - fantasztikus
instead - inkább
it's hot - meleg van
life - élet
smooth - sima
beef - marhahús
errand - ügyet
road - út
bartender - bártender
bar - bár
steal - lop
suit - öltöny
clever - okos, ügyes, ügyesek
itself - öt/azt magát, maga, önmagát
chose - választanék, választottál, választottak
decrease - csökken, csökkent
frustrating - frusztrálónak, frusztráló
rock - rock
talk to - beszélnünk, beszélünk, beszélhetünk
open - nyitva
south - dél
bad luck - balszerencse
musician - zenész, zenésznő, zenésznek
apology - bocsánatkérés
treatment - kezelés, gyógykezelés, bánásmód
been to - voltak, voltál
justice - igazság
hail - jégeső
rumor - pletyka
busy - zsúfolt
certainly - biztosan
think - gondolkozik
whistle - sípszó
on time - időben
noisy - zajos
cherry - cseresznye
slept - aludt, aludtunk
bleachers - lelátónál, lelátó
doing - csinálva, csinál, csinálni
owner - tulajdonos
geography - földrajz
excuse - kifogása, mentség
trick - trükkhöz, trükköt, trükkje
South america - Dél-Amerika
pay - kifizet, kifizetni, fizesd
damaged - megrongálódott, megsérül
talk - beszélned, beszélget, beszél
notes - jegyzeteket, jegyzeteinket, jegyzetek
sent - küldtünk, küldtél, küldte
how did - hogy
weekday - hétköznap
approach - megközelíteni
yum - nyami
silently - csendben
apartment - lakás
article - cikk
curly - göndör
concert - koncert
writer - író
tricky - trükkös
heart disease - szívbetegség
skin - bőr
pepper - bors
bake - süt
gas station - benzinkút
outline - vázlat
education - nevelés, oktatás, műveltség
door - ajtó
happen - történik
downstairs - a földszinten
exhibit - kiállítást, kiállítását, kiállítás
safe - biztonságban
sour - savanyú
slowed - lelassult
dark - sötét
bouquet - rózsacsokrot, csokrát
bean - bab
those - azok a, azok, azokat
cousin - unokatestvér
however - azonban
suburbs - külváros
cheeseburger - sajtburger
switch - lekapcsolod, kapcsol, kapcsoltátok
homework - házi feladat
lesson - óra
mad at - mérgesek
noodle - tészta
debt - tartozás, adósság
engineer - mérnök
install - telepíti
mostly - többnyire
curfew - kijárási tilalom
medical - orvosi
every - minden
gift - ajándék
salt - só
provided - biztosítani, ellátott
clean - tiszta
constantly - állandóan
begun - kezdődött, elkezdett
once - egyszer
careful - óvatos
approximately - hozzávetőleg, megközelítőleg, nagyjából
passion - szenvedélye, szenvedélyemet
political - politikai
stain - folt
check - számla
well-dressed - jól öltözött
mom - anya
permit - engedély, engedélyt
solo - szóló, egyedül
mosque - mecset
graduate - diplomát szerez
insect - rovar
up-to-date - friss, aktuális
passenger - utas
scooter - robogó
do laundry - mos
police - rendőrség
came - származott, jöttünk, megjött
fortunately - szerencsére
instantly - azonnal
ache - fájdalom
glad - örül
joke - vicc, viccet (acc.)
worst - legrosszabb
bear - medve
know how to - tud hogyan kell
goes - megy, elmegy, jár
flashlight - zseblámpa
security camera - biztonsági kamera
nineteen - tizenkilenc
darkness - sötétség
rap - rapet, rap, rapben
liking - szereted-e, szereti, Szereti
server - pincér
state - állam
in the mountains - a hegyekben
stood - álltam, állt, álltunk
crash - baleset, összeütközés, összeomlás
ban - tiltani
there was - volt
dog - kutya
investigate - vizsgálj, utánajárhatunk
break into - betör
in pain - fájdalmam, fájdalomban
pill - tabletta
flat - lakás, lakásszerződést
fed - etetésért, etetésből, megetették
wolf - farkas, farkasnak
dislike - nem szeret, utálod
sunrise - napkelte, napkeltekor
pipe - cső
yikes - jaj, hűha
each - minden
giant - hatalmas, óriási
lifeguard - úszómester
wife - feleség
summer - nyár
attitude - hozzáállás
shoe store - cipőbolt
they're - Ők, Őket
money - pénz
magic show - bűvészelőadás
battle - harc, csata, ütközet
an - egy
hunt - vadászik, vadásznak
it'll - fog, lesz
weekly - heti
stoplight - közlekedési lámpa, jelzőlámpa
accident - baleset
other - más, többi, másik
specially - különlegesen, kifejezetten
potato chip - burgonyaszirom
through - keresztül, át
grandkid - unokája
under - alul, alatt, alá
Australia - Ausztrália
persuade - meggyőz
elephant - elefánt
thirteen - tizenhárom
writing - írás
ready for - kész
spill - kiöntsd
advertisement - reklám
temper - türelem
driver - sofőr
routine - rutin
gigantic - hatalmas
reply - válaszol
unkind - durva, barátságtalan
toxic - mérgező
visited - meglátogattad, meglátogatták, meglátogatott
boss - főnök
video call - videóhívás
elementary school - általános iskola
turn off - kikapcsol
oh no - Ó, nem
shorts - rövidnadrág
candy - édesség
billion - milliárd
singer - énekes
wondering - tűnődve
meeting - értekezlet
or not - vagy nincs
number - szám
discouraged - elcsüggedtem, Elcsüggedtem, elcsüggedni
fries - sült krumpli
daughter - lánya
picnic - piknik
during - közben, alatt, folyamán
skirt - szoknya
midterm - félévi
that - azt, az az, amit
text - üzenetet ír
pants - nadrág
penguin - pingvin
over the weekend - a hétvégén
reapply - újra jelentkezem
with cash - készpénzzel
isn't - nem, nincs
wherever - akárhol, bárhol, bárhová
person - személy
tent - sátor
support - támogatás
relief - megkönnyebbülés
ambitious - nagyravágyó, nagyravágyóak
refund - visszatérítés
is this - ez, van
first of all - először is
it's cold - hideg van
sunset - naplemente
married - házas
bus station - buszpályaudvar
able to - képes
middle - középső
forest - erdő
cleaning - takarítanak, takarít, tisztítok
winter - tél
plastic - műanyag
stop - leállít, állni, abbahagy
now - most
when - mikor
eleven - tizenegy
yours - az önöké, a tiétek, a tieid
idea - ötlet
next time - legközelebb
advanced - haladó
woods - erdő
perfume - parfüm
shoot - lő
discussion - megbeszélés, vita
nightclub - éjszakai klub
a lot - nagyon
impressed - lenyűgöz, lenyűgözött
need to - szükséges, kell
sea - tenger
battery - akkumulátor
folks - emberek
kettle - vízforraló, teáskannát
type - gépel
senior - végzős
creature - teremtmény
handwriting - kézírás, kézírást
direction - irány
cotton candy - vattacukor
nothing - semmi
music - zene
Hindi - hindi
icy - jeges
control - befolyás vmi fölött, uralom vmi fölött, irányít
sleeve - kabátujj, ujj, kabát ujja
typically - jellemzően
volunteer - önkénteskedik
impossible - lehetetlen, lehetetlennek
appropriately - megfelelően, illemesebben
game - játék
fiction - fikció
natural - természetes
endless - végtelen
trash can - szemetes
size - méret
toe - lábujj
wow - azta
inquire - utánajárok, érdeklődhet
podium - emelvény, emelvényre, emelvényt
homesick - honvágyat
lesbian - leszbikus
for sale - eladó
sit - ül
criminal - bűnöző, bűnözőt
cooperate - együttműködési, együttműködés
goodbye - viszontlátásra
wrong - helytelen
pilot - pilóta
cry - sír
eager - lelkes
here are - itt van(nak)
jersey - mez
tradition - hagyomány
unlucky - szerencsétlen
powerful - erőteljes, erős, erősebb
fun - szórakoztató
what is - mi, mit
squats - guggol, guggolások
bull - bika
tolerate - tűrd el, tolerál
nostalgic - nosztalgikus, nosztalgiát, nosztalgiássá
horror - horror
fire department - tűzoltóság
toothache - fogfájás
as well as - valamint
many - sok
need - szükség van
cab - taxi
appetizer - előétel
fitting room - próbafülke
frozen - fagyasztott, befagyott
purse - retikül
favor - szívesség, javára
tie - nyakkendő
hug - ölelés
disappear - eltűnnek, eltűnik
um - hát, öö
baker - pék
have fun - jól érzi magát
nightlife - éjszakai élet
attention - figyelem, figyeljünk
rip - elszakad, elszakít
wall - fal
lately - az utóbbi időben, utóbbi, mostanában
work - munka
advice - tanács
mayor - polgármester
immigrate - bevándorol
sticker - matrica
swear - esküszöm
probation - próbaidő
chimney - kémény, kéményre
Arabic - arab
warm - meleg
expired - lejárt
classical - klasszikus
therapist - terapeuta
crew - személyzet
jump - ugrál
engine - motor
serious - komoly
fortune - vagyonba
comment - megjegyzés
earth - A Föld, föld
not right now - nem most
on top of - a tetejére, -on/-en/-ön/-n (rajta), a tetején
guitarist - gitáros
excuse me - elnézést
annoyed - bosszús
chaperone - kísérő
burn - megéghet
dish - edény
utilities - közüzemi szolgáltatások, közművek
native - őshonos
grill - grillezik
tape - szalag
limit - határ, korlát, határa
embarrassed - zavarban
audition - meghallgatás
ancient - ősi, ókori
underneath - alatt
didn't - nem, sem
allergic - allergiás
farming - gazdálkodás, mezőgazdaság
the moon - a Holdat
wrist - csukló
i hope not - remélem, hogy nem
receive - kap
lung - tüdőproblémái, a tüdőre
three - három
in - alatt, bent, be
possibly - esetleg, talán
room - hely, szoba, üres hely
work out - Edzeni, edzünk, edzel
come over - átjön
argue - vitatkozik
everyone - mindenki
autograph - autogram
clothing - ruházat, ruházati, ruhára
at work - munkában, a munkahelyen, munkahelyen
sister - lánytestvér
mow - lenyír, nyír, nyírja
isn't it - ugye, nem
degree - diploma
chef - séf
surgery - műtét
portrait - portré, portréja, portrét
me - nekem, én, engem
child - gyerek
us - nekünk, minket, USA
upstairs - az emeleten
timing - időzítés
around - körül
document - dokumentum
blueberry - áfonya
benefits - hasznok, előnyös/kedvező hatások, jótékony hatások
athletic - atletikus
alcoholic - alkoholista, alkoholos
custom - szokás
gas - benzin (mint üzemanyag), gáz (kémiailag)
grade - jegy
real - valódi
construction - (meg)építés, építkezés, megépítését
bat - denevér
as far as i know - tudomásom szerint, amennyire én tudom
yourself - magad, magaddal, magára
may be - lehet
comedy - vígjáték
granddaughter - unoka
defend - megvédeni
mice - egeret, egerektől, egerek
beg - könyörögtünk
copy - másol
tornado - tornádó
sometime - egyszer, valamikor
put together - összeállít
process - folyamat, folyamathoz
easygoing - laza
college - főiskola
leaves - (fa)levelek, elindul, elutazik
wild - vad
resort - üdülőhely, nyaralóhely
woke up - felébredt, felébredtek
fill - tölt
forgiven - megbocsátott
forgetful - feledékeny
league - bajnokság, liga
will you be - leszel, lesztek
none of - egyik
fond - Szeretett
smart - okos
hobby - hobbi
swum - úszott
shop - vásárol
take - megy, vinni, vennie
cute - aranyos
uncle - nagybácsi
thin - vékony
straight - egyenesen
decorate - díszít
faulty - rossz, rosszak
beard - szakáll
nor - sem
donate - adományoz
tight - szűk
resolution - fogadalom
microphone - mikrofon
going to - fog, bemenni
froze - megfagyott
elderly - idős
magical - varázslatos
cap - sapka
welcoming - vendégszerető
aren't - ugye, nem, nincsenek
shade - árnyék
sports - sportokról, sportokban, sportok
day - nap
respect - tisztel
qualify - kvalifikálni, kvalifikáljanak, kvalifikálta-e
yuck - fúj, fuj
dig - ásni
artificial - mesterséges
weight - súly
make it - elkészítik, készítesz
pop - pop
spontaneous - spontán, spontaneitás
prove - bebizonyítani
bother - zavar
criticize - kritizálni
how can i help you - hogyan segíthetek önnek
the sun - a nap, a napot
regularly - rendszeresen
doubt - kétség, kétely
prom queen - bálkirálynő
round - kerek
baggage - csomag
not exactly - nem pontosan, Nem pontosan
quite - elég, egészen, igen
heat - fűtés
beverage - ital
spectacular - lenyűgöző, látványos
flu - influenzás, influenza, influenzád
what's - mi van, mi
spoken - beszélt(ek), beszéltek
spreadsheet - táblázatot
enemy - ellenség, ellenségem
wrote - írt, írtam, írtak
listen to - (meg)hallgat (vkit/vmit), (oda)figyel (vkire), hallgatod
cheer - szurkol
attach - csatolni, fűzz
stupid - hülye
ambulance - mentő
tomato - paradicsom
businessman - üzletember
coworker - munkatárs
hey - szia
possible to - lehetséges
achieve - elér (célt), érni
ruin - tönkretenné, elrontaná
valuable - értékes
pineapple - ananász
good morning - jó reggelt
dead - halott
afternoon - délután
lottery - lottó
bank - bank
carpet - szőnyeg
soda - üdítő
restaurant - étterem
challenging - kihívást jelentő
office - iroda
interested in - érdekel
look at - ránéz (valakire)
how old - hány éves, mennyi idős
style - stílus, stílusát, stílusa
line - sor
entertainment - szórakozás
brand new - vadonatúj
stone - kő
subway - metró
bookshelf - könyvespolc
bond - kötvény
address - cím
incredibly - hihetetlenül
agree with - érteniük, értek egyet, egyetértek
suspicious - gyanús
poverty - szegénység
take a bath - fürdik
partner - társ
apparently - Úgy tűnik
pond - tó, halastavat, tavukat
you're welcome - szívesen
what kind of - milyen
truck - teherautó
a - egy, ötöst, A
indoors - beltérben, bent
like to - szeretem, szeretünk, szeret
time off - szabadidő
police officer - rendőr
whatever - bármilyen, akármi
compare - összehasonlít
availability - elérhetőség
advise - tanácsolja, tanácsol
spirit - szellemiségét
princess - hercegnő
surprise - meglepetés
tenth - tizedik
glasses - szemüveg
sixth - hatodik
fit - fitt
building - épület
skateboard - gördeszkázni, gördeszka, gördeszkám
dirty - piszkos
magazine - folyóirat
bite - harap
national - nemzeti
mop - felmos, felmossuk, felmosom
again - újra
confess - bevallom
northern - észak
lose - veszít
ignore - figyelmen kívül hagyhat, figyelmen kívül hagyni
rehearsal - próba
hardly - alig
unmute - bekapcsolja a mikrofont
discovery - felfedezés
alive - élve, életben (van)
just - csak
surely - Biztosan
picturesque - festői
city - város
racket - ütő
pierced - átszúrt
who - ki
sentence - mondat
speak to - beszél vkivel
feet - lábfejek
seating - ülésrend, ülőhely, helyfoglalás
nationwide - országosan, országos, országszerte
zone - zóna, övezet
movie theater - mozi
karate - karate
karaoke - karaoke
start work - kezdeni, elkezdem
extraordinary - rendkívüli, legkülönlegesebb
wouldn't - lenne, lennék, lett volna
they'll - lesznek, tesznek, fognak
considering - figyelembe, fontolgatjuk
parade - parádé
dorm - kollégium
chicken - csirkehús
male - hím
dresser - komód
glove - kesztyű
victim - áldozat
April - április
hammer - kalapács
kindergarten - óvoda
tasty - finom
shelf - polc
let's do it - csináljuk
identification - igazolvány
stem - szár
historic - történelmi
monthly - havi
shortly - rövidesen
set up - szervez
review - átnéz
painting - festmény
useless - haszontalan
math - matek
too many - túl sok
celebrate - ünnepel
robot - robot
phone number - telefonszám
dressing - öntet
send - küld
dust - port töröl
topic - téma
surroundings - környezet
riskiest - legkockázatosabb
thursday - csütörtök
trash - szemét
million - egymillió
weapon - fegyver
complete - teljes, elvégezhetem, elvégeznünk
contact - felveszi a kapcsolatot
fall off - leesik vmiről, leesnek
with a check - csekkel
whale - bálna
ladder - létra
bacon - szalonna
ask - kérdez
driver's license - jogosítvány
wine - bor
good to see you - jó látni téged
art - művészet
basically - alapvetően
tennis - tenisz
deliver - (ki)szállít, házhoz visz, kézbesít
run to - odafutnak
smile - mosolyog
man - férfi
horrible - szörnyű
deck - fedélzet
airport - repülőtér
washing machine - mosógép
website - webhely
parking space - parkolóhely
we - mi, nekünk
breathe - lélegzik
inside - belső, belseje, belül
principal - igazgató
gave - adott, adtak, adta
sunscreen - naptej
activity - tevékenység
corner - sarok
whose - kié, kinek, akinek
orchestra - zenekar
scouts - cserkészek
nineteenth - tizenkilencedik
press - sajtó, megnyom, nyomda
else - mást, másról, még (másvalami)
any longer - már, tovább
shipwreck - hajótörést
summertime - nyáron
where - hol
behind - mögött, hátul, mögé
instructor - oktató
get on - felszállnak, felszállni, felszállsz
envelope - boríték
sofa - kanapé
dangerous - veszélyes
receptionist - recepciós
wristband - karszalag
fast - gyors
mind - felfogás, bánnád, tudat
reschedule - átütemez
blood - vér
bus - busz
deer - szarvas
reaction - reakció
manage - főnök
last name - vezetéknév
southern - déli
play cards - kártyázik
awkward - furcsa
essay - esszé
confusing - zavaró, zavaróak, összezavaró
lazy - lusta
sausage - kolbász
to - hozzá, amynek, ekhez
chosen - választott(a), választottunk
values - értékek
ingredient - hozzávaló
mailbox - postaládát, postaládám, mail
write down - leír
when in doubt - kétség esetén
husband - férj
envy - irigylem
patient - páciens
translate - lefordítja
american - amerikai, amerikaiak, az amerikai
they - ők
would you like - kér, kéri, szeretnél
landlord - háziúr
university - egyetem
estimate - becsülték, becsülte, becsülted, becsülni
hit - üt
countryside - vidék
drank - ivott / ittak stb., ivott, itta
admit - bevallom, beismerni
look - nézd
nineteen ninety - ezerkilencszázkilencvenben
band - zenekar
best friend - legjobb barát
email - e-mail
affair - viszonyt
role - szerep, szerepet, szerepe
sore - fáj
kitchen - konyha
grandfather - nagyapa
toilet paper - vécépapír
gift card - ajándékkártya
shut - becsuk
brand - márka
inexpensive - olcsók
poem - vers
white - fehér
hear - hall
trail - ösvény
here - itt
drive - vezet
here is your - Itt van a te, Itt van az
wool - gyapjú
none - semelyik, semennyi, közületek senki nem ...
due - esedékes
frame - keret
woman - nő
become - válik
nobody - senkinek, senki, senki nem
snow - hó
at the moment - jelenleg
warmth - melegség
by the way - egyébként
bag - táska
panic - pánikolni, pánikba, bepánikoltatni
walk - sétál
great-grandmother - dédnagymama
in other words - más szavakkal
western - nyugati
reputation - híre, hírnév
shift - műszak
glass of water - pohár vizet
forward - elő
brake - fékpedál, fékpedálom, fékpedálja
i'm - vagyok
error - hiba
spell - betűz
talk about - beszélni
great-grandparent - dédszülő
gang - banda, macskabanda
knee - térd, térdem
effective - hatékony
diving - búvárkodás, merülés
enter - bemegy
complicated - bonyolult
must - biztosan, lennetek, kell
turn on - bekapcsol
bald - kopasz
gardener - kertészt, kertésszel, kertész
gain - nyertél, nyereség
chip - csipsz, burgonyaszirom
prior - Mielőtt
shoe - cipő
aircraft - repülőgépek
twenty-one - huszonegy
gradually - fokozatosan
friend - barát
thrown - dobott
pothole - kátyú
surprised - meglepett
sale - eladás
medalist - bronzérmes, aranyérmes, ezüstérmes
that's why - ezért
flip-flop - strandpapucs
account - számla
eighteen ninety - ezer nyolcszáz kilencvenben
so that - (azért,) hogy, hogy
spotlight - reflektor
pancake - palacsinta
hasn't - nincs
storage - tárolóhely, tárolószoba
drawer - fiók
give back - visszaad
similar - hasonló
conclusion - konklúzió, következtetés
daylight - nappal, nappali fény
paid - fizetted, fizette, fizetett
vet - állatorvos
transfer - átutal
mistaken - tévedtem
chocolate - csoki
go to the bathroom - menned, mennie, menjünk
guys - srácok
worse - rosszabb
go away - elmenni
ordinary - átlagos, hétköznapi
retire - nyugdíjba megy
lent - kölcsönadta, kölcsönzött, kölcsönadott
furious - dühös
disappointed - csalódott
Egypt - Egyiptom
detail - részlet
week - hét
cracker - sós keksz
candle - gyertya
bed - ágy
union - szövetség, egyesület, unió
over there - ott
join - csatlakozz, csatlakozom, csatlakozunk
town - város
never - sosem
opera - opera
sold - eladták, eladott, eladtad
vision - látás, látomás
myth - mítosz
halftime - félidő
sing - énekel
powder - púder, por
refuse - visszautasítom, megtagadni
stapler - tűzőgép
unforgettable - felejthetetlen
silverware - ezüstkészlet
outside - kint
suffer - szenved
flour - liszt
inch - hüvelykes
theirs - övék, az övék, az övéket
motor - motor, motorja, motorod
commit - elkövetni, elkövet, elkövettél
get along - jól kijön
basil - bazsalikom
blank - üres
satisfied - elégedett
lyrics - dalszöveg
i am from - származom
anyway - mindegy, úgysem
miserable - nyomorult, nyomorúságos
come here - gyere ide
law - törvény
story - történet
comic - vicces, képregény, képregényhez
make sense - értelme van
sincerely - őszintén
since - minthogy, mivel, óta
security - biztonság
tights - harisnyát, harisnya
exam - vizsga
form - űrlap
sticky - ragadós
brownie - brownie
fan - szurkoló
pretty - csinos
fifties - ötvenes évek
what's wrong - mi a baj
go to - odamennek
positive - pozitív
gold - arany, aranyszínű
convince - meggyőzni
suggest - javasol
nail - köröm
highly - nagyon
aisle - sor
couldn't - láttam, láttunk, találtuk
get home - hazaér
sign up - jelentkezik
skill - készség
figure - figura, alak, ábra
from home - otthonról
delicious - finom
handcuffs - bilincs
will have - addigra már (csinál majd vki vmit), lesz
department - részleg
in the future - a jövőben
fall - ősz
Canada - Kanada
the rest - a többi, a maradék
for - részére, helyette, tartó
afraid - fél
increase - (meg)növel, növelnünk
risk - kockázat, kockázatot
lucky - szerencsés
single - egyedülálló
rang - csöngött, csörgött
infection - fertőzésem, szemfertőzésén, fertőzés
aunt - nagynéni, nagynénim, nagynénémet
most - legtöbb
trainer - edző
drawing - rajz
checkout - pénztár
drove - vezettünk, vezettem, autóztam
vehicle - jármű, járművem
in general - általában
pig - disznó
cereal - gabonapehely
healthy - egészséges
funeral - temetés
share - megoszt
airline - légitársaság
on vacation - vakáción
mother-in-law - anyós
pay back - visszafizet
hall - folyosó
display - bemutatják
collect - gyűjt
future - jövő
rainbow - szivárványszínű, szivárvány
gallon - gallon
pretend - teszel, tenni
cool - menő
hundreds - százak
affect - (ki)hat vkire/vmire, hatással van, befolyásol
i have - iszom, van, megvan
inform - tájékoztatom, értesítse
deal - megállapodást, megegyezés, megállapodás
defendant - vádlott
brave - bátor
file - fájl
rather - elég, egészen, hanem
waterfall - vízesés
online - online
thief - tolvaj
station - vonatállomáson, vonatállomás, buszpályaudvart
deserve - érdemel
slight - kis, enyhe
ruins - romokban, romjai, romot
bad guy - rosszfiú
urban - városi
come back - visszajön
quiet - csendes
there - oda
toothbrush - fogkefe
occasion - alkalom, apropó
do you have - nálatok van, nálad van
interest - érdekli
channel - csatorna
hungry - éhes
crosswalk - gyalogátkelő
really - nagyon
guide - idegenvezető
cloud - felhő
belt - öv
toothpaste - fogkrém
still - még mindig
where is - Hol található, Hol van
insist - ragaszkodott
table - asztal
all the time - mindig
doubtful - kétséges
drawn - rajzolt, rajzolva
easy - könnyű
designed - tervezték, tervezve, tervezte
appliance - eszköz, készülék
imagine - elképzelni
because of - miatt
collapse - omlani, összeomlik
ate - evett, ettél, ette
in bed - ágyban, az ágyban, ágyba
in love - szerelmes
love - szeret
nine - kilenc
glass - üveg, pohár, poharat
dad - apa
fingerprint - ujjlenyomat
blinds - redőnyt
violence - erőszak
mascot - kabala
gear - felszerelésre, felszerelésem, felszerelést
spend - költ
spare - tartalék, pót
debit card - bankkártya
award - díj
rung - csörgött
tax - adó, adót
smartphone - okostelefon
accusation - vád, állításod
headlight - fényszóró
jail - börtön
misunderstanding - félreértés
August - augusztus
than - amennyire, mint
nephew - unokaöcs, unokaöcsémet
conference - konferencia, konferenciára
is it - van
rush - sietünk, sietnek, kisietünk
industry - ipar, iparág
software - szoftver
half - fél
interesting - érdekes
marshmallow - pillecukrot
slightly - kissé
there is - van
stomach - gyomor
it's rainy - Esős az idő
tournament - verseny
prepare - készül
detective - nyomozó
passport - útlevél
irresponsible - felelőtlen
unpack - kicsomagol
current - jelenlegi
me too - én is
reflect - elgondolkodni
depart - felszállnak, elindul, indul
therapy - terápia
embarrassment - szégyen
just a minute - egy pillanat
portion - adag
report card - ellenőrző könyv
forgive - megbocsát
face - arc
ending - befejezés
supplies - kellékre, kellékeket, kellékekre
organized - szervezett
for the first time - először
sweater - pulóver
elect - megválasztottuk
there's - van, ott van
perform - fellép, előadni, lépnek fel
stay home - otthon marad
strawberry - eper
i'd like - szeretnék
punk - punk
so - tehát, így, ezért
lunch - ebéd
follow up - utánajár
case - tok
smoothie - turmix
late - késésben
might - lehet
oil change - olajcsere
toy store - játékboltba, játékbolt
third - harmadik
check in - bejelentkezik
closer - közelebb, közelebbről
customer service - ügyfélszolgálat
machine - gép
stylish - stílusos
include - beleszámít
up to you - rajtad múlik
agenda - napirend
melon - dinnye, dinnyét
monday - hétfő
carve - faragnak
forgave - megbocsátott
I - én
peach - őszibarack
responsibility - felősség
on the contrary - sőt
run into - befutni, (ők) befutnak, befut(nak)
store - bolt
lightning - villám
overtime - túlórában, túlóra, túlórázni
phone - telefon
it was - volt
November - november
you - te
the us - az Egyesült Államok
tongue - nyelv
limo - limuzin
romantic - romantikus
accommodations - szállás
priest - pap
settle - rendezzük
babysit - gyerekekre vigyáz
galaxy - galaxisunkból, galaxisunkban, galaxisban
highlight - kiemel
toward - felém, feléjük, felé
savings - megtakarítások
back - hát, hátul, hátsó
cup - csésze, kupa, csészét
that one - az
either - sem
chat - beszégetés
my name is - a nevem
colorful - színes
fourteen - tizennégy
friday - péntek
who is - kik vannak ..., ki
internship - gyakornokság, szakmai gyakorlat
stamp - bélyeg
selfish - önző
script - forgatókönyv
bullet - golyót
rewrite - átírnod
layover - átszállás
normal - normális
hardworking - szorgalmas
shore - part
went - ment, jártam, hazamentél
goosebumps - libabőr
anticipated - várják
offensive - sértő, sértővé
zoo - állatkert
experiment - kísérlet
would have had - (nekem/neki/…) lett volna
call - hív
sweep - söpör
ours - a miénk, a mieink, irodánk
politics - politika
play - focizunk, játszanak, rögbizem
winner - győztes
do you mind if - nem bánja, ha
significant - jelentős
good for - jók, jó
financial - pénzügyi
stolen - elloptak, ellopják, lopott
extra - még
bought - vettem, vásároltak, vásároltál
pirate - kalóz
west - nyugat
had better - jobban teszi
th - 5.
dramatic - drámai
disease - betegség, betegsége
privacy - magánélet
interact - interaktálni
liar - hazug
explode - felrobban
politician - politikus
swept - felsöpörte
food - étel
eaten - (meg)ette
noon - dél
escape - szökés
attic - padlás
language - nyelv
rule - szabály
beaten - legyőzött
apply - jelentkezik
come in - bejönnek
draw - rajzol
movie - film
go to bed - aludni megy
valid - érvényes
basement - pince
round-trip - retúr, menettérti
lay - fekszik
proud - büszke
star - csillag
surprisingly - meglepően
residential - lakóterület, lakó
key - kulcs
temporarily - ideiglenes
wallet - pénztárca
of course not - természetesen nem
had better not - jobban teszi ha nem
barber - borbély, fodrász
reception - recepció, fogadás, recepciónál
horse - ló
wants to - szeretne
orange - narancssárga
what a - micsoda ………!
hand out - kioszt
animated - animált, animációs
toenail - köröm, lábköröm
edge - szegély, szél (vmi széle), perem
shiny - fényes
horseback riding - lovaglás
an a - ötöst
coast - part, tengerpart, partvidék
unacceptable - elfogadhatatlan
clap - tapsolnék
economy - gazdaság
eat breakfast - megreggeliznek
this is - ez
if you can - ha tudod
event - esemény
nickname - beceneve
unrealistic - irreális
relaxed - nyugodt, kipihent, laza
drink - ital
very - nagyon
we're - vagyunk, leszünk
bring - hoz
take a nap - szundít
get well soon - jobbulást
knot - csomót, csomó
frost - dér
beginner - kezdő
lying down - feküdtem
sensation - érzés
above - föléd, fölé, fölött
grandmother - nagymama
somebody - valakire, valakinek, valaki
accomplish - sikerült elérned, elérjük, érsz el
lie - fekszek, fekszenek, lefekszünk
farmer - állattenyésztő, farmer, gazda
note - jegyzet
morning - reggel
web - web, háló
lamp - lámpa
crab - rák
on my way - útközben
subtitles - felirat
help - segítség, segíteni, segítsenek
roast - süt
duck - kacsa
some - valami, valamennyink, egy kis
grandparents - nagyszülőm, nagyszülők, nagyszüleinknek
percent - százalék
virtual reality - virtuális valóság
shout - kiabál
ride - játék
sunshine - napsütés
tv - tévéje, tévét, televízió
destination - úti cél
tear - elszakad
pass - átmegy
poet - költő
team - csapat
electrical - elektromos
unique - egyedi
on stage - színpadon
symptom - tünet
effect - mellékhatást, hatás, hatásuk
range - hegylánc, tartomány
quiz - kvíz
evening - este
fascinating - lenyűgöző, lenyűgözőek
container - tartály, edény, tartó
studies - dolgozószobák, tanulmányaimat, tanulmányok
watch out for - figyelj
shirt - póló
tore - kiszakadt
look into - benéznek
violin - hegedű
sweat - megizzasszalak, izzad
travel - utazik
bargain - alkalmi vétel, alku
athlete - sportoló
boy - fiú
equipment - felszerelés
upset - feldúlt
at least - legalább
nature - természet
poster - plakát
fee - díj
vacuum - porszívózik
worldwide - világhírűvé, világsiker
hero - hős
overwhelmed - túlterhelt
true - igaz
audience - közönség, hallgatóság
dinner - vacsora
beat - legyőz(ött), megdönt(ött) pl. rekordot, megver(t)
exhausted - kimerült
previously - korábban, előzőleg
badly - nagyon
nd - 2-án, 2., 42.
separate - különálló
loose - laza
simple - egyszerű
species - faj
full of - vmivel tele
it - azt, ez, az
sweatshirt - melegítőfelső
neat - rendezett
cozy - otthonos
go on - folytasd
completed - elvégezte, elvégeztem, befejezve
itinerary - program, programot
workout - edzés
shadow - árnyék
refreshments - frissítők
silk - selyem
desert - sivatag
can - lehet, vehetjük, tudnak
wore - viseltem, hordtam, viseltél
desperate - kétségbeesett
board game - társasjáték
out - kimegyünk, kifelé, kint
safari - szafari
religious - vallásos, vallási
the same - ugyanaz, egyformák, ugyanazok
assuming that - feltéve
blanket - takaró
ourselves - magunk, magunkat, magunknak
cider - almabor
what's up - mi a helyzet
come out - kijönni, kijön, kijönnek
about - amiatt, kapcsolatban, körül
embarrass - megszégyeníteni, szégyenkezni
five - öt
kitten - cica, cicát
scream - sikolt, sikoly
flavor - íz
willpower - akaraterő
page - oldal
yellow - sárga
receipt - nyugta
too - is
independent - független, önálló
kind - kedves
cinema - mozi, mozihoz, mozit
choose - választ
nineteen sixty - ezerkilencszázhatvan, ezerkilencszázhatvanban
know - tudjátok, tud, tudnia
sooner - előbb, hamarabb
friendship - barátság
drew - rajzolta, rajzolták
price tag - árcédula
item - termék
ones - azok
electric - elektromos
famous for - híres/nevezetes valamiről
firefighter - tűzoltó
smoke - dohányzik
sledding - szánkózni, szánkózás
honest - őszinte
emotional - érzelmes
grandson - unoka
girlfriend - barátnő
advantage - előny, előnye
engaged - eljegyzett
ping pong - pingpong
after - után, miután, ezután
were - voltunk, voltál, voltatok
earring - fülbevaló
handkerchief - zsebkendőre, zsebkendőt, zsebkendő
rush hour - csúcsforgalom
opponent - ellenfél
make sure - meggyőződik
fine - jó, finom, jól
blond - szőke
spaceship - űrhajó, űrhajóban, űrhajón
whipped cream - tejszínhab
sun - nap, napon, napot
music video - videóklip
lid - WC-tetőt, fedél
useful - hasznos
punch - ütéssel
report - jelentés
children - a gyerekek, gyereket, gyerekek
disagreement - nézeteltérése, vitánk, vita
border - határ, szegély, határt
hair - haj
storm - vihar
wheelchair - kerekesszék
terrible - szörnyű
spoon - kanál
turn out - kiderül
astonished - elképedt
yes - igen
North america - Észak-Amerika
thieves - tolvajok
latest - legújabb
go swimming - úszni megy
in case - ha véletlenül, hátha, ha netán
flower - virág
different - más
deli - delikát bolt, delikát boltot, delikát boltban
living - élő, lakunk
forehead - homlok
rarely - ritkán
ketchup - ketchup
diner - étkezde
captain - kapitány
adopt - örökbe fogadja
connect - csatlakoztat
loving - szeretőd
we'll - majd, leszunk, fogunk
coconut - kókusz
know how - Tudod
wake up - ébred
card - üdvözlőkártya
hate - utál
marry - házasodni
transportation - szállítás(i), közlekedés(i), közlekedési
country - ország
adventure - kaland
conventional - hagyományos
seriously - komolyan
boyfriend - barát
playground - játszótér
theater - színház
right now - éppen most
October - október
courage - bátorságot, bátorságom
dominoes - dominó
roommate - szobatárs
you're - vagy
year - év
church - templom
stressful - stresszes
sometimes - néha
religion - vallás, vallású
that's too bad - ez igazán kár
want to - akarja, akarod, akarom
understand - ért
bad for you - rossz neked
be - lenniük, legyél, légy
never mind - ne törődj vele
generous - nagylelkű
spa - wellness, gyógyfürdő
directions - irányok, útmutatások, útbaigazítást
quarter to - háromnegyed
salesperson - eladó
honestly - őszintén
frankly - őszintén
witness - tanú
learner - nyelvtanuló, tanuló
dangerously - veszélyesen
super bowl - Super Bowl
castle - kastély
in-laws - házastárs szülei
adult - felnőtt
determination - elszántságát, kitartásod, elszántság
vegetable - zöldség
congratulations - gratulálok
recycle - újrahasznosít
common sense - józan ész
shoulder - váll
pie - pite
expecting - számított
blame - felelősséget, hibáztatás, szemrehányás
break up - szakít
rub - dörzsölöd, dörzsölöm
plus - meg
like - úgy, kedveled, kedvelsz
how much is - mennyibe kerül
employee - alkalmazott
blue - kék
dozen - tucat
untie - kibogozza, bogozni, kibogozni
see you soon - viszlát hamarosan
counter - pult
coffee - kávé
notice - észrevesz
cover letter - motivációs levél
balance - egyenleg
seventies - hetvenes évek
would like - kérem, szeretne
grab - megragad
achievement - teljesítmény, eredmény
pair - pár
monument - műemléke, műemlék, műemléket
procedure - eljárás
humid - párás
clothes - ruhák
cliffhanger - függővég
supper - vacsorát
corruption - korrupció
the news - a hírek
wellness - wellness
late for - Késésben, késésben
villain - gonosztevő
cash - készpénz
cycle - körfolyamat, ciklus, körforgás
population - népesség, lakosság, népessége
across from - szemben
between - közé, között, közötti
plan - terv
presentation - prezentáció
fire - tűz
whiteboard - tábla
angry - mérges
years old - éves
exercise - edz
full - teljes, tele, teli
what about - mi a helyzet ………vel?
painter - festő
twentieth - huszadik
manager - menedzser
information - információ
benefit - juttatás
factory - gyár
representative - képviselő
delay - késik
backyard - hátsó udvar
gala - gála
plumbing - vízvezeték
rain - esik
extend - kibővíteni
box - dobozt, doboz, dobozra
commute - ingázáshoz
luggage - csomag
sort - fajta
capacity - kapacitással, kapacitású
opportunity - alkalom, lehetőség
charm - bája, bájának, bájosak
go over - átnéz
cigarette - cigaretta
angel - angyal
cruise - hajóút
cemetery - temető
do business - üzletel
say - mond
permanently - véglegesen
entertaining - szórakoztató
democracy - demokrácia
honeymoon - nászút
in pairs - párban
frog - béka
felt - érzett/éreztek, érezte/-ék magát/magukat
king - király
Asia - Ázsia
strength - erő
necessary - szükséges, nélkülözhetetlen
tough - kemények, kemény
thunder - villám
attempt - megkísérel, próbálkozás, próba
firework - tűzijáték
farther - távolabb, tovább
local - helyi
inconvenient - kellemetlen
laundromat - mosoda
training - edzés, teniszedzés, képzés
tire - gumi
pet - házikedvenc
update - frissítés
signature - aláírás
nonsense - nonszensz
pregnant - állapotos
drunk - ivott
rainy - esős, esősek
on account of - következtében, miatt
though - noha, habár
these ones - ezeket
greet - köszönni
sidewalk - járda
asking - megkérdezi, kér, kérdezted
queen - királynő
best - a legjobb
alien - idegen, idegennek, idegennel
did - vásároltál, viseltél, tett
on purpose - szándékosan, direkt
familiar - ismerős
there are - áll, van, vannak
change of clothes - váltás ruhára, váltás ruhát, váltás ruha
your - Ön, sportod, ti
huge - hatalmas
she'll - fog, megy, lesz
began - elkezdett, elkezdődött, kezdtem
take notes - jegyzetel
cut - vág
good luck - sok szerencsét
blown - elfújta
unpleasant - kellemetlen
pink - rózsaszín
waste - pazarolja
result - eredmény, eredményt
in a relationship - kapcsolatban
mysterious - rejtélyes
campaign - kampány
speech - beszéd
stream - patak
pedal - pedál, fékpedál, fékpedálom
his - övé
photographer - fényképész
in the evening - este
subject - tantárgy
severe - súlyos
body - test
cuisine - konyha
what do you think of - mit gondolsz
cookbook - szakácskönyv
go - megy
fear - félelem
shady - árnyékos
supervisor - felügyelőm, felügyelő
there have been - volt (hangsúlyosan), volt
traffic jam - dugó
sank - elsüllyedt
swollen - duzzadt
embarrassing - zavarbaejtő
ground - föld, talaj
teenage - kamasz
bunch - csomó
rafting - vadvízi evezés, eveznénk, eveztem
schedule - menetrend
ok - rendben
lettuce - saláta
fault - hiba
unfortunately - sajnos
apartment building - lakóépület
seafood - tenger gyümölcsei
credit - hitel
happy to - szívesen
god - Isten
rabbit - nyúl
mile - mérföld
possibility - lehetőség, lehetőségünk
wound - seb
tired - fáradt
photograph - fénykép
bubble gum - rágógumi
investment - befektetés
butter - vaj
fourth - negyedik
bed and breakfast - szállás reggelivel
exist - létezik
in the rain - az esőben
rewatch - újranéz, újra megnéz
election - választás
wide - széles
by - szerint, el, mellett
complain - panaszkodik
people - nép, emberektől, ember
wear - visel
fancy - elegáns
circus - cirkusz
leader - vezetője, vezető, vezetővel
cell phone - mobiltelefon
workbook - munkafüzet
odd - furcsa
duty - kötelességed
heater - fűtőtest
meaning - jelentés, (elvont dologra) értelem
mess - rendetlenség
low - alacsony
uncertain - bizonytalan
metal - fém
fluent - folyékony
knit - kötni
would you mind - lenne kedved
suddenly - hirtelen
option - lehetőség
rob - kirabolni
certain - bizonyos
worker - alkalmazott
chance - lehetőséget, alkalmat
alternative - alternatíva, választási lehetőség, másik lehetőség
mine - az enyémet, enyéim, enyémet
total - összeg
treat - jutalmamat, kezelésem, vendégül látsz
bronze - bronzszínű, bronzérem
referee - (sport) bíró, bíró
locate - keressék, megtalál
close - zár
client - klienssel, kliens, kliensed
accountant - könyvelő
attachment - melléklet, csatolmány
laundry - ruhák
confused - összezavarodva
way - út
link - link
peanut - mogyorót
our - mi
want - akar
humidity - nedvesség
milestone - mérföldkő
traffic - forgalom
met - találkozott
yummy - finom
dry - szárít, száraz, megszárít
philosophy - filozófia
wonder - csodálkozni, tűnődöm
tropical - trópusi
cattle - szarvasmarha
promise - ígéretet, megígérsz
suitcase - bőrönd
thousands - sok ezer, ezrek, ezreket
alcohol - alkohol
how often - milyen gyakran
certificate - tanúsítvány, bizonyítvány
window - ablak
hotel - szálloda
land - föld, leszálltok, leszáll
damage - veszteség, kár, károsodás
id - személyi igazolvány
personality - (vki) természete, személyiség
video game - videójáték
whoever - Akit (is) ...
I don't mind - nem bánom
rug - szőnyeg
large - nagy
homemade - házi
all - összes
at night - éjszaka
bowl of soup - tál leves
tunnel - alagút
knife - kés
uninteresting - érdektelen
checking account - folyószámla
credit card - hitelkártya
take out - elővesz
silly - bolondos, buta
come - jön
kick - rúg
match - mérkőzés
wednesday - szerda
improve - fejlődik, javít (rajta), javíthatják
my - az én
culture - kultúra
soil - talaj
get into - beszállni, beülnek, szállnak be
power - teljesítmény (gépé), áram, (átv) erő
camp - kempingezik
twelve - tizenkettő
assignment - feladat
made - tette, loptak, rávett
underwear - alsónemű
ew - pfuj
eighteenth - tizennyolcadik
neighbor - szomszéd
sunlight - napfény
how are you doing - hogy vagy
so much - olyan sok
cheese - sajt
sock - zokni
community - közösség, közösségi
i don't know - nem ismerem, nem ismerek
dodgeball - kerülgetőlabdát, kerülgetőlabda
look after - gondoskodik vkiről
walk the dog - megsétáltatja a kutyát
plug - dugó, csatlakozó
soldier - katona
thunderstorm - zivatar
yawn - ásít
student - diák
clock - óra
rhythm - ritmusra, ritmusérzékem
sandal - szandál
tooth - fog
vote for - szavazol
chin - álla
surrounding - körülvevő, környező
jack-o'-lantern - töklámpa
hurry - siet
s'mores - s'mores
feel about - érzünk kapcsolatban, érzitek kapcsolatban, érzel kapcsolatban
stormy - viharos
tell - mondanod, megmondom, elárulod
illusion - illúzió, illúziót, illúziónak
over - véget ér
led - irányít/vezet (múlt idő), vezettem
boring - unalmas
hold on - várj
from now - mostantól
company - cég
plumber - vízvezetékszerelő
laptop - laptop
blind - vak
stole - lopták, loptak, lopta
ocean - óceán
festival - fesztivál
raincoat - esőkabát
swimmer - úszó
keyboard - billentyűzet
whenever - akármikor
light - világítás, lámpát, könnyű
session - edzés, foglalkozás
biology - biológia
i think so - azt hiszem
couple - pár
brief - rövid
carry-on - kézipoggyász, kézicsomag
meditate - meditál
pound - font
challenge - kihívás
fail - megbukik
tablet - tablet
beauty - szépség
alarm clock - ébresztőóra
held - fogott, tartott, tartottak
code - kód
werewolf - vérfarkas, vérfarkasról
quietly - halkan
of - közül
lock - zár, lakat, bezár
participate - részt vesz
it is - ez, van
September - szeptember
explore - felfedez
passport control - útlevélellenőrzés
parking lot - parkoló
stick - bot
at last - végre
bless you - egészségedre
piece - szelet
men - a férfiak, férfiakat, férfiak
drama - dráma
breakup - szakítást
wealthy - gazdag
major - szak
according to - szerint
lots of - rengeteg, sok
so far - eddig
song - dal
résumé - önéletrajz
owl - bagoly
day care - napközi
that's - Ezért, az, Az
pizza - pizza
vocabulary - szókincs
foul - szabálytalanság, szabálytalanságot
luckily - szerencsére
May - május
fashion - divat
cliff - szikla
competitive - versengő
priority - prioritásunk, prioritás, prioritásnak
Africa - Afrika
letter - levél
add - hozzáad
rat - patkány
exciting - izgalmas
tiring - fárasztó
memorable - emlékezetes
ground floor - földszint
in my opinion - szerintem
unreliable - megbízhatatlan
sand - homokos, homok, homokot
both - mindketten, mindkettő, mindkét
hi - szia
stomachache - gyomorfájás
quality - minőség, tulajdonság, kvalitás
catering - catering
salty - sós
shake - rázni
palace - palota, palotát
perhaps - talán
business - üzlet
sew - varrni
leftovers - maradék
i'd - ajánlanám
sixty - hatvan
shuttle - űrrepülőgép, transzfer
used to - valaha, volt szokásunk, régen
mail - levél, elküld, mail
preparation - készülés
yesterday - tegnap
represent - képvisel
lifetime - élete
t-shirt - póló
get out of - ki, kiszállnak
uncomfortable - kényelmetlen
suggestion - javaslat
blouse - blúz
as if - mintha
involve - bevonni
as soon as - mihelyt
`,mA=`such as - mint például
charming - elbűvölő
dishonest - tisztességtelen
windy - szeles
good - jó, jók, jót
a few - néhány
comfortable - kényelmes
unexpected - váratlan
lovely - imádnivaló
willing - hajlandó
steep - meredek
genuine - eredeti
foggy - ködös
fashionable - divatos
rich - gazdag
obvious - nyilvánvaló
small - kicsi
much - sok, sokat, sokkal
French - francia
sad - szomorú
violent - erőszakos
mad - mérges
minimum - minimum, legkisebb, legalacsonyabb
how much - mennyi
unpopular - népszerűtlen
black - fekete
old - régi
deep - mély
amazed - elképedt, lenyűgözve
ant - hangya
unusual - szokatlan
happy - boldog
funny - vicces
illegal - törvénytelen, illegális
Chinese - kínai
high - magas
empty - üres
shocking - megdöbbentő
double - kettős, dupla, kétszeres
unnecessary - szükségtelen
picky - válogatós
few - kevés, keveset
select - választani
gentle - gyengéd, szelíd
sensitive - érzékeny
rare - ritka
organic - organikus, biológiai
unconscious - tudattalan
crucial - létfontosságú
seasonal - szezonális
adorable - aranyos
irritated - irritált
secret - titkot, titok, titkom
sophisticated - kifinomult
fluffy - bolyhos
unavailable - elérhetetlen
as usual - mint mindig
difficult - nehéz
guilty - bűnös
academic - akadémiai
scary - ijesztő
silent - csendes
i'm sorry - sajnálom
incorrect - helytelen
tiny - apró
young - fiatal
cheerful - vidám
considerable - jelentős
good at - jó az írásban
American - amerikai
australian - ausztrál
upcoming - következő
raw - nyers
friendly - barátságos
least - legkevésbé
top - teteje
internal - belső
important - fontos
incredible - hihetetlen
Italian - olasz
sweet - édes
free - díjmentes, ingyenes, ingyen
how many - hány
greedy - kapzsi
adventurous - kalandvágyó
convenient - megfelelő
ultimate - végső
beautiful - gyönyörű
regular - átlagos
risky - kockázatos
lonely - magányos
underestimate - alábecsül
reasonable - észszerű
modern - modern
personal - személyes, személyi
whole - egész
bright - fényes
gray - szürke
gorgeous - gyönyörű, gyönyörűek
final - utolsó
foreign - idegen
lifelong - élethosszig tartó
twin - ikertestvér
various - különböző
worth - ér (vmennyit)
efficient - hatékony
responsible - felelős, megbízható, felelősségteljes
unhappy - boldogtalan
heavy - nehéz
grossest - legundorítóbb
annoying - idegesítő
immediate - azonnali
noteworthy - figyelemre méltó
hard - nehéz
central - központi
each other - egymást, egymásnak
unreasonable - elfogadhatatlan, túlzó
several - számos
outrageous - felháborító
stunning - pompás
sick - beteg
excellent - kiváló
specific - pontosabb, konkrét
frequent - gyakori, gyakoriak
nice - szép
unknown - ismeretlen
traditional - hagyományos
sharp - éles, pontos, pontosan
strict - szigorú
sleepy - álmos
same - ugyanaz
quick - gyors
annual - éves
anxious - izgatott
admirable - csodálatos
muddy - sárosnak, sáros
unbelievable - hihetetlen
fabulous - mesés
affordable - megfizethető
flexible - rugalmas
hot - forró
main - legfőbb
polite - udvarias
temporary - ideiglenes
allergic to - allergiás
not bad - nem rossz, nem rosszak
shy - félénk, szégyenlős
hopeful - reménykedő
i'm good - Jól vagyok
how big - mekkora
artistic - művészi
gross - undorító
big - nagy
approximate - hozzávetőleges
thoughtful - figyelmes
Spanish - spanyol
present - ajándék
original - eredeti
minor - apró
medium - közepes méretű
skeptical - szkeptikus, szkeptikusan, Szkeptikus
Canadian - kanadai
slow - lassú
bad at - rossz vmiből, rossz
cooler - hűvösebb, menőbb, menőbbek
false - hamis
lunchtime - ebédidő
suspenseful - Izgalmas, izgalmas, izgalmasabb
loud - hangos
disappointing - csalódást keltő, kiábrándító
cheap - olcsó
ideal - ideális
it's sunny - napos idő van, napos
ugly - csúnya
influential - befolyásos
farthest - legmesszebb, legtávolabb
gay - meleg
German - német
fewer - kevesebb
expensive - drága
wonderful - csodálatos
weak - gyenge
private - privát, zártkörű, magánkézben lévő
favorite - kedvenc
poisonous - mérgező
pathetic - szánalmas
thick - sűrű
that's fine - az rendben van
sorry - bocsánat
careless - figyelmetlen, gondatlan
stranger - idegen
understandable - érthető
ridiculous - nevetséges
defective - rossz
cloudy - felhős
frightening - ijesztő, rémisztő
English - angol
improbable - valószínűtlen
grateful - hálás
negative - nemleges, negatív, elutasító
professional - szakmai
previous - korábbi
strong - erős
typical - jellemző, tipikus
cautious - óvatos
fair - tisztességes, méltányos, korrekt
unfair - igazságtalan
accessible - elérhető
as many - annyi, amennyi
poor - szegény
recent - közelmúltbeli, legutóbbi, friss
practical - gyakorlati, praktikus, Gyakorlati
rural - vidéki
formal - hivatalos, formális
past - mellett, múlt, múltban
wooden - fából készült, fa-, fa
awake - ébren
dizzy - szédül
enormous - hatalmas, hatalmasnak
famous - híres
overall - összességében
social - társadalmi, társasági, társas
olympic - olimpiai
unlikely - valószínűtlen
last - legutóbbi
so many - olyan sok
correct - helyes
impressive - leglenyűgözőbbek, lenyűgözőek, lenyűgöző
intelligent - intelligens
loyal - hűséges
perfect - tökéletes
nervous - ideges
next - következő
productive - termelékeny
red - piros
nearest - legközelebbi
British - brit
strange - furcsa
thirty-first - harmincegyedik
successful - sikeres
tall - magas
sudden - hirtelen
fake - hamis
awesome - remek
jealous - féltékeny
direct - rendezi, rendezem
too much - túl sok
accent - akcentus
creative - kreatív
afraid of - fél, Félek
environmental - környezetvédelmi, környezeti
likely - valószínűleg
steady - állandó
entire - egész
intermediate - középszintű, középfokú, középhaladó
innocent - ártatlan
new - új
seventh - hetedik
reliable - megbízható
Japanese - japán
bizarre - bizarr
twenty-first - huszonegyedik
greatest - legnagyobb, legnagyszerűbb, legnagyszerűbbek
square - tér
amazing - lenyűgöző
unemployed - munkanélküli
weird - furcsa
bad - rossz
bitter - keserű
british - angolok, brit
available - szabad
aware - tisztában
confident - magabiztos
mild - enyhe
biggest - legnagyobb
helpful - segítőkész
responsible for - felelős
peaceful - békés
common - gyakori
relative - rokon
commercial - reklám
married to - házas, házasok
deadly - halálos
urgent - sürgős
surprising - meglepő
unhealthy - egészségtelen
delete - törlöm
stubborn - makacs
opposite - szemben
live - lakik
realistic - valósághű
popular - népszerű
second - második
asleep - alszik, elaludt
sociable - társaságkedvelő
possible - lehetséges
average - átlagos
former - egykori, korábbi
marvelous - csodálatos
ready - kész
painful - fájdalmas
diverse - sokszínű
sure - biztos, biztosra, biztosak
functional - funkcionális
outdoor - szabadtéri, kültéri
electronic - elektronikus
own - van
unwanted - nem kívánt
cold - hideg
short - alacsony
special - különleges
narrow - keskeny, keskenyek
little - kis
awful - szörnyű
a little - egy kicsit
unpredictable - kiszámíthatatlan
gullible - hiszékeny
interrupt - félbeszakítani
fresh - friss
great - nagyszerűnek, nagyszerű, nagyszerűen
soft - puha
it's hot - meleg van
clever - okos, ügyes, ügyesek
frustrating - frusztrálónak, frusztráló
open - nyitva
south - dél
busy - zsúfolt
whistle - sípszó
noisy - zajos
safe - biztonságban
sour - savanyú
dark - sötét
mad at - mérgesek
medical - orvosi
clean - tiszta
careful - óvatos
political - politikai
glad - örül
flat - lakás, lakásszerződést
stoplight - közlekedési lámpa, jelzőlámpa
other - más, többi, másik
ready for - kész
routine - rutin
gigantic - hatalmas
ambitious - nagyravágyó, nagyravágyóak
it's cold - hideg van
able to - képes
middle - középső
senior - végzős
icy - jeges
impossible - lehetetlen, lehetetlennek
natural - természetes
endless - végtelen
wrong - helytelen
eager - lelkes
unlucky - szerencsétlen
powerful - erőteljes, erős, erősebb
nostalgic - nosztalgikus, nosztalgiát, nosztalgiássá
many - sok
frozen - fagyasztott, befagyott
Arabic - arab
warm - meleg
classical - klasszikus
serious - komoly
annoyed - bosszús
native - őshonos
embarrassed - zavarban
ancient - ősi, ókori
allergic - allergiás
athletic - atletikus
alcoholic - alkoholista, alkoholos
real - valódi
easygoing - laza
wild - vad
forgetful - feledékeny
smart - okos
swum - úszott
cute - aranyos
thin - vékony
faulty - rossz, rosszak
tight - szűk
elderly - idős
magical - varázslatos
spontaneous - spontán, spontaneitás
round - kerek
stupid - hülye
possible to - lehetséges
valuable - értékes
dead - halott
interested in - érdekel
how old - hány éves, mennyi idős
brand new - vadonatúj
suspicious - gyanús
you're welcome - szívesen
tenth - tizedik
sixth - hatodik
fit - fitt
dirty - piszkos
northern - észak
alive - élve, életben (van)
picturesque - festői
extraordinary - rendkívüli, legkülönlegesebb
tasty - finom
historic - történelmi
useless - haszontalan
too many - túl sok
complete - teljes, elvégezhetem, elvégeznünk
horrible - szörnyű
dangerous - veszélyes
fast - gyors
awkward - furcsa
lazy - lusta
inexpensive - olcsók
white - fehér
due - esedékes
western - nyugati
effective - hatékony
complicated - bonyolult
bald - kopasz
surprised - meglepett
similar - hasonló
worse - rosszabb
ordinary - átlagos, hétköznapi
furious - dühös
unforgettable - felejthetetlen
blank - üres
miserable - nyomorult, nyomorúságos
comic - vicces, képregény, képregényhez
what's wrong - mi a baj
positive - pozitív
afraid - fél
lucky - szerencsés
single - egyedülálló
in general - általában
healthy - egészséges
cool - menő
brave - bátor
slight - kis, enyhe
urban - városi
quiet - csendes
hungry - éhes
doubtful - kétséges
easy - könnyű
spare - tartalék, pót
half - fél
interesting - érdekes
it's rainy - Esős az idő
irresponsible - felelőtlen
current - jelenlegi
third - harmadik
romantic - romantikus
colorful - színes
selfish - önző
normal - normális
offensive - sértő, sértővé
ours - a miénk, a mieink, irodánk
significant - jelentős
good for - jók, jó
financial - pénzügyi
extra - még
dramatic - drámai
attic - padlás
valid - érvényes
proud - büszke
residential - lakóterület, lakó
key - kulcs
shiny - fényes
unacceptable - elfogadhatatlan
unrealistic - irreális
electrical - elektromos
unique - egyedi
fascinating - lenyűgöző, lenyűgözőek
at least - legalább
true - igaz
separate - különálló
loose - laza
simple - egyszerű
full of - vmivel tele
neat - rendezett
desperate - kétségbeesett
religious - vallásos, vallási
the same - ugyanaz, egyformák, ugyanazok
yellow - sárga
independent - független, önálló
famous for - híres/nevezetes valamiről
honest - őszinte
emotional - érzelmes
fine - jó, finom, jól
lid - WC-tetőt, fedél
useful - hasznos
terrible - szörnyű
latest - legújabb
different - más
conventional - hagyományos
stressful - stresszes
that's too bad - ez igazán kár
bad for you - rossz neked
generous - nagylelkű
how much is - mennyibe kerül
blue - kék
untie - kibogozza, bogozni, kibogozni
angry - mérges
full - teljes, tele, teli
necessary - szükséges, nélkülözhetetlen
tough - kemények, kemény
local - helyi
pregnant - állapotos
drunk - ivott
familiar - ismerős
huge - hatalmas
unpleasant - kellemetlen
pink - rózsaszín
mysterious - rejtélyes
subject - tantárgy
severe - súlyos
shady - árnyékos
swollen - duzzadt
happy to - szívesen
tired - fáradt
fourth - negyedik
fancy - elegáns
odd - furcsa
low - alacsony
uncertain - bizonytalan
fluent - folyékony
certain - bizonyos
yummy - finom
dry - szárít, száraz, megszárít
tropical - trópusi
large - nagy
silly - bolondos, buta
blind - vak
brief - rövid
at last - végre
wealthy - gazdag
major - szak
competitive - versengő
exciting - izgalmas
memorable - emlékezetes
unreliable - megbízhatatlan
salty - sós
uncomfortable - kényelmetlen
`,hA=`beyond - mögé
without - nélkül
from - tizenöttől, elől, hattól
off - kifelé, biciklidről, elfelé
on - bekapcsolva, án, rajta
within - belül
as - amint, valamiként, miközben
along - végig- (megy/sétál), magával/magukkal (visz/nek), mentén
against - ellene
per - -nként (pl. óránként, fejenként), -nta/-nte (pl. naponta, évente)
until then - Addig
about to - készülsz
before - előtt
beneath - alatt, alattatok
by now - mostanra
into - bele
at - iskolánknál, show-nál, diplomaosztónál
unlike - ellentétben, eltérően
among - közé, között, körében
with - táskával, dobozzal, sérülésem
across - át
like this - ilyen, így
of me - énrólam, belőlem, rólam
in here - itt
near - közelébe, környékén, közel
until - koromig, amíg … nem, négyig
by then - addigra
stepfather - mostohaapa
through - keresztül, át
under - alul, alatt, alá
during - közben, alatt, folyamán
underneath - alatt
in - alatt, bent, be
for - részére, helyette, tartó
than - amennyire, mint
up to you - rajtad múlik
toward - felém, feléjük, felé
after - után, miután, ezután
across from - szemben
between - közé, között, közötti
by - szerint, el, mellett
from now - mostantól
of - közül
as if - mintha
`,pA=`partly - részben
overnight - éjjel, éjszaka
meanwhile - eközben
as well - is
furthermore - továbbá
loudly - hangosan
right away - azonnal
beside - mellett, mellé
mainly - főleg
totally - teljesen
initially - eleinte
afterward - utána
actually - valójában
amazingly - hihetetlenül, elképesztően, meglepően
far away - messze
right here - pont itt
later - később
exactly - pontosan
yearly - éves
ago - ezelőtt
alike - hasonlít, hasonló, egyformán
professionally - profi módon
besides - amúgy, ezenkívül, mellett
fifth - ötödik
just now - az imént
together - együtt
nowadays - manapság
perfectly - tökéletesen, teljesen
internationally - nemzetközileg
all about - mindent
anyhow - Mindenesetre
down - le, lent
alternatively - alternatív megoldásként, vagy esetleg
roughly - durván
extremely - rendkívül
even though - noha, bár, annak ellenére, hogy
anywhere - semerre, sehol, sehova
a.m. - reggel
plain - egyszínű, sima
afterwards - utána
aloud - hangosan
quickly - gyorsan
obviously - nyilvánvalóan
briefly - röviden
also - is
more often - gyakrabban
probably - valószínűleg
nevertheless - mindazonáltal
up - fel, fent, fenn
often - gyakran
practically - gyakorlatilag
at all - egyáltalán, sehogy sem
early - korán
ever - valaha
alone - egyedül
accidentally - véletlenül
no longer - többé
politely - udvariasan
currently - jelenleg
truly - valóban, igazán
even - még
recently - mostanában, nemrég
smelly - büdös
p.m. - délután
nearby - közel, közelben
out there - ott kint
less - kevésbé
secretly - titokban
abroad - külföld, külföldön
anymore - már, tovább
easily - könnyen
daily - napi
only - csak
fairly - eléggé, viszonylag, meglehetősen
away - távol
next to - mellett, mellé
finally - végre
better - jobb
generally - általában
here's - itt van, tessék, íme
equally - egyformán
far - messze
clear - átlátszó
here is - íme, itt
twice - kétszer
carefully - óvatosan, gondosan
otherwise - máskülönben
admittedly - Be kell vallani
tattoo - tetoválás
completely - teljesen, maradéktalanul
long - hosszú
slowly - lassan
ahead - előtt, előre
overseas - külföldön, külföldre, külföldről
precisely - pontosan
already - már
always - mindig
usually - általában
normally - rendszerint
maybe - talán
almost - majdnem
absolutely - abszolút, Abszolút
supposedly - feltehetően
definitely - határozottan
clearly - tisztán
takeout - elvitelre
necessarily - szükségszerűen
more - még több
personally - személyesen, személy szerint
considerably - jelentősen
eventually - végül
especially - különösen
outdoors - kint
beautifully - szépen
well - jól
nowhere - sehova, sehol, semerre
hopefully - remélhetőleg
all right - rendben
immediately - azonnal
after all - végül is
northeast - északkelet
enough - elég
then - utána
consequently - ennek következtében
somehow - valahogy
way too - túlzottan
forever - örökre
occasionally - alkalmanként
first - először
very much - nagyon
safely - biztonságosan
yet - még, már
formerly - régen
oops - hoppá
potentially - potenciálisan
nearly - majdnem
jelly - dzsem
soon - hamarosan
instead - inkább
certainly - biztosan
silently - csendben
downstairs - a földszinten
however - azonban
mostly - többnyire
constantly - állandóan
once - egyszer
approximately - hozzávetőleg, megközelítőleg, nagyjából
fortunately - szerencsére
instantly - azonnal
worst - legrosszabb
specially - különlegesen, kifejezetten
first of all - először is
now - most
typically - jellemzően
appropriately - megfelelően, illemesebben
here are - itt van(nak)
as well as - valamint
lately - az utóbbi időben, utóbbi, mostanában
possibly - esetleg, talán
upstairs - az emeleten
around - körül
sometime - egyszer, valamikor
straight - egyenesen
regularly - rendszeresen
quite - elég, egészen, igen
incredibly - hihetetlenül
apparently - Úgy tűnik
again - újra
hardly - alig
just - csak
surely - Biztosan
nationwide - országosan, országos, országszerte
monthly - havi
shortly - rövidesen
basically - alapvetően
inside - belső, belseje, belül
else - mást, másról, még (másvalami)
behind - mögött, hátul, mögé
sore - fáj
here - itt
here is your - Itt van a te, Itt van az
forward - elő
prior - Mielőtt
gradually - fokozatosan
over there - ott
never - sosem
outside - kint
anyway - mindegy, úgysem
sincerely - őszintén
pretty - csinos
highly - nagyon
most - legtöbb
rather - elég, egészen, hanem
online - online
really - nagyon
still - még mindig
slightly - kissé
so - tehát, így, ezért
late - késésben
closer - közelebb, közelebbről
back - hát, hátul, hátsó
either - sem
surprisingly - meglepően
temporarily - ideiglenes
very - nagyon
above - föléd, fölé, fölött
worldwide - világhírűvé, világsiker
previously - korábban, előzőleg
badly - nagyon
nd - 2-án, 2., 42.
out - kimegyünk, kifelé, kint
about - amiatt, kapcsolatban, körül
too - is
kind - kedves
sooner - előbb, hamarabb
rarely - ritkán
seriously - komolyan
right now - éppen most
sometimes - néha
honestly - őszintén
frankly - őszintén
dangerously - veszélyesen
late for - Késésben, késésben
permanently - véglegesen
farther - távolabb, tovább
best - a legjobb
unfortunately - sajnos
wide - széles
suddenly - hirtelen
close - zár
so much - olyan sok
over - véget ér
quietly - halkan
so far - eddig
luckily - szerencsére
perhaps - talán
as soon as - mihelyt
`,gA=`is from - származik
cannot - kérheted, nem (csinál)hat (vmit), nem
shouldn't - kéne, kellene
will - lesz, majd, fogja
wasn't - nem voltam, nem, nem volt
could - tudtalak, tudtál, -hat
been - lett, jártál, volt
was - volt, voltam
am - vagyok
will you - fogjátok, fogsz, fogod
shall we - jó
are there - van
should - kellene, kéne
would - volna
must not - Nem szabad
can't - nem, nem tud
being - lények, lenni/vagy, létre
may - május, talán, -hat, -het
won't - nem, nem fog
are - vannak
will be - lesz
is - az, van, áll
is there - Van-e
weren't - nem voltak, nem lenne
been to - voltak, voltál
isn't - nem, nincs
is this - ez, van
isn't it - ugye, nem
may be - lehet
will you be - leszel, lesztek
aren't - ugye, nem, nincsenek
wouldn't - lenne, lennék, lett volna
must - biztosan, lennetek, kell
couldn't - láttam, láttunk, találtuk
is it - van
might - lehet
can - lehet, vehetjük, tudnak
were - voltunk, voltál, voltatok
be - lenniük, legyél, légy
May - május
`,yA=`neither - egyik sem
and - és, meg, pedig
or something - vagy valami
or - vagy
but - de, hanem, pedig
and you - És, és te
or not - vagy nincs
nor - sem
plus - meg
`,kA=`the most - legfeledékenyebb
such a - olyan, ilyen
whose - kié, kinek, akinek
the us - az Egyesült Államok
that one - az
`,vA=`literature - irodalom
stairs - lépcsői, lépcső, lépcsőn
inbox - postaláda
over time - idővel, az idők során, az idők folyamán
bra - melltartó
honey - méz
video - videó
oil - olaj
penny - fillér
confirmation - megerősítést
thanks for - Köszönöm, Köszönjük
paper - papír
a bit - egy kicsit
corn - kukorica
description - leírás
victory - győzelem
outskirts - külváros
northwest - északnyugat
invention - találmány
bravery - bátorság
use - használ
burger - hamburger
night - éjszaka
market - piac
quarter - negyed
user - felhasználó
good afternoon - jó napot
wash - mos
guidelines - irányelvek
difference - különbség
cancer - rák
architecture - építészet
seed - mag
feedback - visszajelzés
port - kikötő
coupon - kupon
scrub - dörzsöl, megdörzsöl
fur - szőrme
childhood - gyerekkor, gyerekkorom
policy - politika
ice - jég
killer - gyilkos
farm - farm
southwest - délnyugat
period - korszak, periódus, időszak
butterfly - pillangó, lepke
pile - halom
motive - indíték
background information - háttér-információ
uniform - egyenruha
sequel - folytatás
jeans - farmer
design - terv
eraser - radír
sheep - juhukat, juhok, juh
coin - érem
arrival - érkezés
actress - színésznő
animation - animáció
chase - üldözni, üldözi, üldöztük
flood - árvíz
mistake - hiba
trailer - előzetes
spare time - szabadidő
ticket - jegy
part-time - részidős
pollution - szennyezés
housework - házimunka
recovery - felépülésed, felépülése, felépülés
secretary - titkár
color - szín
alarm - ébresztő, riasztó
salmon - lazac
soul - soul
example - példa
coffee shop - kávézó
chemistry - kémia
next day - másnap
egg - tojás
email address - e-mail-cím
card game - kártyajáték
tiger - tigris
living room - nappali
date - dátum, dátumnak, időpont
official - hivatalos
intermission - szünet
fix - megjavít
pork - disznóhús
arrange - rendezed, elrendezése
rd - 3., 23., 3-a
mountain - hegy
physics - fizika
platform - peron, vágányt, peronról
family - család
helmet - sisak
prayer - ima
cart - bevásárlókocsi
dream - álom
climate - éghajlat
text message - szöveges üzenet
someplace - valahol, máshová, valahova
cupboard - szekrény, szekrényed, szekrényedben
by accident - véletlenül
dress - ruha
village - falu
scenery - táj
tutor - magántanár
customs - szokása, vám
synagogue - zsinagóga
household - háztartási
price - ár
deadline - határidő
aspirin - aszpirin
stadium - stadion
spicy - fűszeres
solution - megoldás
full-time - teljes idős
atmosphere - légkör, atmoszféra, hangulat
part - rész
babysitter - bébiszitter
first name - keresztnév
champion - bajnokok, bajnok
hometown - szülőváros
service - szolgáltatás, ügyfélszolgálat, kiszolgálás
chess - sakk
leaf - falevél, levél
dashboard - műszerfalra, műszerfala, műszerfalat
lifestyle - életmód
archeologist - régész
retirement - nyugdíjban
preference - preferencia, előnyben
jacket - kabát
forties - negyvenes éveinkben, negyvenes éveimben
temperature - hőmérséklet
out-of-date - elavult
vegan - vegán
purchase - megvásárol, vásárlás, vásárol
parents - szülők
investor - befektető
soundtrack - filmzene
cent - cent
tourist - turista
in a hurry - sietve
what time - mikor
tons of - rengeteg
slice - szelet
pottery - kerámiák
bedtime - lefekvés ideje
level - szint
costume - kosztümje, jelmezemet
grandchildren - unokák
computer - számítógép
on the ground - a földön
capital - főváros
touch - megérint
a lot of - sok
cycling - biciklizés, kerékpározást, kerékpározás
thesis - szakdolgozatomat, szakdolgozatom
frustration - frusztrációd, frusztráció
path - út
architect - építész
bicycle - bicikli
insult - sértésnek
impact - hatása
o'clock - órakor, óra
science - tudomány
from time to time - időről időre, időnként
insurance - biztosítás
windshield - szélvédő
weights - súlyemelés, súlyok, súlyzókat
rent - bérel
teeth - fog, fogak, fogaid
purple - lila
pleasure - élvezet, öröm
anxiety - szorongás
front desk - recepció
illness - betegség, betegségben
episode - epizód
film - film, filmet (acc.), filmhez
jazz - dzsessz
section - részleg
at home - otthon, itthon
air conditioning - légkondicionálás
reserve - lefoglalja, lefoglal, (le)foglal
silver - ezüst
all day - egész nap
doctor's office - orvosi rendelő
citizen - polgár, állampolgár
salon - szalon, fodrászat
legend - legenda
participation - részvétel
treadmill - futópad
ad - reklám
planet - bolygó
member - tag
bit - darabka, egy kicsi, egy kevés
deposit - befizet
release - kiadni
sunburn - Leégtél
pronunciation - kiejtés
spy - kém
tail - farok
gymnastics - torna
ring - gyűrű
label - címke, címkét, címkéje
footprint - lábnyomot
pocket - zseb
fruit - gyümölcs
harvest - aratás, betakarítás
regret - megbánni
printer - nyomtató
conversation - beszélgetés
silence - csend
ladies and gentlemen - hölgyeim és uraim
no one - senki
court - udvarol, udvar, bíróság
condition - állapot, feltétel
skip - kihagy
guard - őr
chair - szék
unemployment - munkanélküliség
mustard - mustár
history - történelem
calculator - számológép
neighborhood - környék
eye - szem
police report - rendőri jelentés
underline - aláhúz
planner - határidőnapló
hairstyle - frizura
news - hírek
side effect - mellékhatás
an f - egy F
proof - bizonyíték
entrance - bejárat
customer - ügyfél
bleed - vérzik
branch - ág, ágat (acc)
in the end - végül, Végül is
moment - pillanat
global warming - globális felmelegedés
scissors - olló
good evening - jó estét
majority - többség
driveway - kocsibeállón, kocsibeállót
leisure - szabadidő
toast - pirítós
appointment - időpont
campus - kampusz
journey - utazás, út, utazásunkra
ages - korok
bathroom - fürdőszoba
ceiling - mennyezet
whisper - suttogni
prison - börtön
comic book - képregény
niece - unokahúg, unokahúgom
female - nő(i)
lime - zöldcitrom, lime
pyramids - piramisok
bandage - sebtapasz
jar - befőttesüveg
sign - tábla
for example - például
in court - a bíróság előtt, a bíróságon
what time is it - hány óra van
success - siker, sikert
regards - üdvözlet
mood - hangulat
invitation - meghívó
wood - fa
message - üzenet
threat - fenyegetés
instrument - hangszer
instructions - utasítások
amount - összeged, összeg, mennyiség
salary - fizetés
matter - gond, anyag, téma
shave - borotválni
for a while - egy ideig
agriculture - mezőgazdaság
nurse - ápoló
cyclist - biciklista, kerékpáros, biciklis
distract - zavarj
profit - profittal
teacher - tanár
cat - macska
guy - srác
condolences - részvét
in theory - elméletileg, elvileg
choice - választás
animal - állat
approval - jóváhagyását, engedély
finish - befejez
north - észak
deceive - becsapni
job - munka
flag - zászló
evil - rossz, gonosznak, gonoszak
mixer - mixer
happy birthday - boldog születésnapot
goal - cél
holiday - ünnep
speed - sebesség, sebességét
summit - csúcson, csúcsig, csúcs
carrot - répa
reread - újra el kell olvasniuk, újraolvas
reason - ok
payment - fizetés
judge - bírót, bíró
things - dolgainkat, dolgaimat, dologra
grandma - nagymama, nagyi
gossip - pletykál
mystery - rejtély
plot - cselekmény
incident - eset, esemény
lane - sáv
obsession - megszállottja, megszállottság
high school - középiskola
study - tanul
map - térkép
french fries - hasábburgonya
trade - kereskedelmi, kereskedelem
championship - bajnokság, bajnokságot
picture of - képet egy
collar - (ing) nyaka
foreigner - külföldi
blog - blog
sink - mosogató
consequence - következmény
title - cím, címe, címmel
coffee table - kávézóasztal, dohányzóasztal
grocery store - élelmiszerbolt
superb - nagyszerű
theme - téma
candidate - jelölt
those ones - azok
a number of - számos
magic - varázslat, mágikus
pot - fazék
relaxation - relaxálás
system - rendszer
thumb - hüvelykujjam
offense - támadás
mushroom - gomba
antique - antik
area - terület
jewelry - ékszer
reservation - foglalás
roof - tető
evidence - bizonyíték
allergy - allergia
boat - hajó
course - tanfolyam
bird - madár
offend - megsért, sért
ball - labda
bucket - vödör
ceremony - ünnepség
tissue - zsebkendő
circumstance - körülmények
swimsuit - fürdőnadrágot, fürdőruha, fürdőruhát
package - csomag
death - halál, halált
habit - szokás
picture - kép
author - szerző
diamond - gyémánt
arrow - nyilat
cream cheese - krémsajt
generation - nemzedék, generáció, korosztály
donkey - szamár
time - idő
effort - erőfeszítés
classroom - osztályterem
spouse - házastárs
landscape - tájkép, táj, látkép
basket - kosár
brush - hajkefe
plate - tányér
action - felvétel, tett, akció
media - média, médiát
assistant - asszisztens
shelves - polcokat, polcok, polcokon
word - szó
shrimp - garnélarák
fitness - fitnesz
dragon - sárkány
task - feladat
count - (meg)számol, számolnak, számítanunk
tree - fa
pattern - minta
pain - fájdalom
alibi - alibi
tomorrow - holnap
snake - kígyó
maintenance - karbantartás
hat - sapka
flute - fuvola
water bottle - vizesüveg
goddess - Istennő
lecture - előadás
wedding - esküvő
goalkeeper - kapus, kapust
theory - teória, elmélet
designer - tervező, divattervező
biography - életrajz
water - víz
hip - csípő
artist - művész
flexibility - hajlékonyság
garbage - szemét
marriage - házasság, házasságkötés, házassági
love at first sight - szerelem első látásra
meat - hús
ankle - boka
minute - perc
invent - feltalálnia
furniture - bútor
springtime - tavasz
olive - olajbogyó
party - buli
health insurance - egészségbiztosítás
day off - szabadnap
boot - csizma
conference room - konferenciaterem
expert - szakértő
bottom - fenék
property - tulajdon, birtok, ingatlan
program - program
heart - szív
euro - euró
cupcake - cupcake
teenager - tinédzser
slide - csúszdán, csúszda, csúszdája
bruise - zúzódás
teaspoon - teáskanál
grass - fű
experience - tapasztalat
home - otthon, otthonukat, itthon
balloon - lufi
vaccine - védőoltást, védőoltás
sandwich - szendvics
sir - úr
paper towel - papírtörlő
embassy - nagykövetség
twenty-fifth - huszonötödik
recess - szünet
improvement - javulás
character - szereplő
snack - harapnivaló
decision - döntés
utensils - evőeszközök
prize - díj
end - véget ér
island - sziget
coach - edző
yay - hurrá
graphics - grafikája
technology - technológia, technika (műszaki)
postcard - képeslap
trouble - gond, baj
feed - megetet
coincidence - véletlenül, véletlen
gasp - felkiált, felkiáltani, felkiáltsak, felkiáltott
volleyball - röplabda
main course - főétel
after school - az iskola után
dolphin - delfin
connection - kapcsolat
operation - műtét
thanks - köszi
sleepover - ottalvós buli
consideration - figyelembe
stress - stressz
mute - lenémít
cafeteria - menza
hospital - kórház
sword - kard
treasure - kincsvadászatok
civilization - civilizáció
souvenir - szuvenír
request - kérni
relationship - kapcsolat
in the middle of nowhere - a semmi közepén
management - menedzsment
toy - játék
translation - fordítás
stove - tűzhely
wing - szárny
tour - túra
surf - szörföl
apple - alma
decade - évtized
speaker - hangszóró
tag - bújócskáznának, bújócskát, bújócskában
public - nagyközönség, nyilvánosság, nyilvános
on foot - gyalog
tonight - ma este
restroom - mosdó
position - állás
promotion - előléptetés
career - életpálya, karrier, pályafutás
berries - bogyókat, Bogyókat, bogyószedés
this one - ez
brother - fiútestvér
protest - tüntetés
block - háztömb
barbecue - grillezett étel
emergency - sürgősségi osztály, vészhelyzet
travels - utazik, halad
name - vezetéknevünk, keresztnevét, név
neck - nyak
contract - szerződés, szerződést
solar system - naprendszer
hairdresser - fodrász
luxury - luxus
stuff - dolog
brunch - villásreggeli
search - kutatás, keresés, keres
agreement - megegyezés, megállapodás, megállapodást
nose - orr
season - évszak
stage - színpad
these days - manapság
performance - előadás, előadásra, előadásuk
sleep - alszik
zebra - zebra
actor - színész
textbook - tankönyv
fireplace - kandalló
engineering - mérnöki
trip - utazás
earthquake - földrengés
messy - rendetlen
in the afternoon - délután
hers - övé, az övét
son - fia
women - a nők, nőket, nők
guitar - gitár
equality - egyenlőség
vintage - vintage, régi
spice - fűszer
with a card - kártyával
print - nyomtat
happiness - boldogság
the sky - az ég, az égen
semester - félév
orphan - árva
weakness - gyengeség
view - kilátás
tea - tea
currency - pénznem
pronounce - kiejteni
sense of humor - humorérzék
sport - sport
pasta - tészta
robbery - rablás
ghost - szellem
impression - benyomás
glue - ragasztó
region - terület, régió, térség
no problem - semmi gond
dining room - étkező
camera - fényképezőgép
arm - kar
good job - szép munka
background - háttér
mother - anya
point - pont
filmmaker - filmkészítő
dance - táncol
immigration - bevándorlás
doctor - orvos
situation - helyzet, helyzetet
dishwasher - mosogatógép
headphones - fejhallgató
faculty - kar
expectation - elvárás, elvárása
competition - verseny
birthday - születésnap
songwriter - dalszerző
lack - hiány
reunion - összejövetel
requirement - követelmény
interview - interjú
bomb - bomba
field - pálya
employment - foglalkoztatás, alkalmazására
loan - hitel, kölcsön
celebration - ünneplés, ünnepségre
the whole time - egész idő alatt
suspicion - gyanítom, gyanítod, gyanítottam
potential - potenciálját, potenciálunk, potenciálja
elbow - könyök
opinion - vélemény
out of town - távol van
fish - hal
you guys - srácok, tihozzátok, ti
photocopy - fénymásolat
social media - közösségi média
wrap - csomagol
row - sorba, soron
toilet - vécé
sweets - édességet, édességeket
unit - egység, mértékegység
throat - torok
bug - bogár
the mail - postába
cake - torta
spam - Spam, levélszemét
downtown - belváros
salespeople - eladóknak, eladó, eladók
patio - terasz
immigrant - bevándorló
after work - munka után
yoga - jóga
rice - rizs
confidence - bizalmukat
back pain - hátfájás
river - folyó
contest - verseny
vote - szavaz
truth - igazság
the internet - interneten
plane - repülő
technique - technika (mesterségbeli)
side - oldalsó, oldalon, oldali
trap - csapda
defeat - vereség, legyőznöd
every day - mindennap
peanut butter - mogyoróvaj
pen - toll
gender - nemek
football - amerikai foci
Wi-fi - WIFI
influence - befolyás
calendar - naptár
tank - üzemanyagtartály
hand - kéz
folk - nép
on sale - leárazott
whole body - teste, tested, testemben
application - jelentkezés
foot - lábfej
selfie - szelfi
waiter - pincér
beer - sör
folder - mappa
peace - béke, békét
chili - chilipaprika
milk - tej
universe - univerzum, világegyetem, világmindenség
version - változat
car - autó
vacation - szabadság
volume - térfogat, hangerő, kötet
plant - növény
colleague - munkatársad, kollégád, kollégámmal
weather - idő
hour - óra
midnight - éjfél
charity - jótékonyság
lease - bérlet, bérleti
fence - kerítés
podcast - podcast
thing - dolog, dolgot
olympics - Olimpia
load - terhelés, teher, rakomány
defense - védelem
car wash - autómosó
in person - személyesen
discount - kedvezmény
sculpture - szobor
groceries - élelmiszerek, élelmiszerekhez, élelmiszereimhez
the flu - influenza
murder - gyilkosság
tool - szerszám
difficulty - nehézség, gond, nehézsége
cost - kerül valamibe
tale - történet
girl - lány
statue - szobor
visa - vízum
library - könyvtár
conquer - meghódítsák
steak - steak
electricity - áram
bride - menyasszony
garden - kert
site - honlap, helyszín, hely
brochure - prospektus
paint - fest
appearance - megjelenés
problem - probléma
weekend - hétvége
all weekend - egész hétvégén
massage - masszázs
loss - veszteség
paper towels - papírtörlőt, papírtörlőket, papírtörlők
healthier - egészségesebb, egészségesebbnek
knives - kések, kés, késekre
camel - teve
retreat - elvonulás
unlock - kinyit
list - lista
ferry - komp
binder - mappa
lawyer - ügyvéd
necklace - nyaklánc
bike - bicikli
calm - nyugodt
dairy - tejtermék
rope - kötélen, kötélugró, kötél
curriculum - tanterv
half price - félár
transaction - tranzakció
committee - bizottság
shelter - menedékhely, menedék
lives - él, lakik
fever - láz
curtain - függőny
critic - kritikus
hole - lyuk
clinic - klinika
correction - javítást
goods - javak
measure - mér
fact - tény
trumpet - trombita
medicine - gyógyszer
divorce - válás
poetry - költészet, költői(es)ség
novel - regény
accomplishment - teljesítmény, teljesítményérzetet
shipping - szállítás
clue - nyom
paragraph - bekezdés
muscle - izmok, izom, izmot
broccoli - brokkoli
fast food - gyorsétel
superpower - szupererő
dentist - fogorvos
strategy - stratégia, stratégiája
health - egészség
rude - udvariatlan
paintbrush - ecset
bookstore - könyvesbolt
redo - újracsinál
eighties - 80-as évek
prevention - megelőző, megelőzés
fog - köd
pea - borsó
taste - íz, íze, megkóstoltad
war - háború
attack - támadás, roham
on mute - némítva
sheet - lap
s' - dolgozatainak, eredményeinek, táskáinak
laboratory - laboratórium
human - emberi, ember, emberi lény
wave - integet
parking - parkolás
question - kérdés
head - fej
refrigerator - hűtőszekrény
bathing suit - fürdőruhát, fürdőruha, fürdőruháról
production - termelés, előállítás
porch - veranda
wildlife - vadvilág
lab - laboratórium
corporation - vállalat, vállalattól, vállalatot
jury - zsűri, esküdtszék
reservations - helyfoglalást, foglalások, foglalásokat
monster - szörny
cream - tejszín
scene - jelenet
ability - képesség
sandy - homokos
bread - kenyér
ranch - tanyát
bone - csont
vitamin - D-vitamin, A-vitamin
argument - vita
misunderstand - félreért
lip - ajk
governor - kormányzó, kormányzónak
trust - bízik
baseball - baseball
salad - saláta
tomorrow night - holnap este
one of these days - egyik nap
repair - megjavít
today - ma
decorations - dekorációkat, díszek
collection - gyűjtemény
struggle - küzdesz, nehezen, küzdj
dirt - kosz
occupation - foglalkozás
agency - ügynökség
roll - görgesd, gördül, zsemle
concern - aggaszt, aggodalom, aggodalomra
month - hónap
seat - vécéülőke, ülőhely, ülés
garage - garázs
notebook - jegyzetfüzet
desk - íróasztal
hippie - hippie
announcement - bejelentés
flight - repülés, járatunk, repülőút
a ride - fuvart
crawl - mászik
wind - szél
calves - borjak
satisfaction - elégedettség
what color - milyen színű, milyen színűek
golf - golf
soap - szappan
motorcycle - motor
abs - hasizmaid
society - társadalom
poison - megmérgezni, méreggel, méreg
government - kormány, kormánya
calf - borjú
onion - hagyma
others - többieket, másoknak, többiekkel
good night - jó éjt
leak - vízszivárgást, szivárog
last night - tegnap este
act - cselekedet, tett, felvonás
hope - remél
a bit of - egy kis ……
compliment - bókot, bóknak, Bóknak
lion - oroszlán
album - album
bill - számla
roller coaster - hullámvasút
puzzle - kirakós
hurricane - hurrikán
disaster - katasztrófa
issue - gond, téma, kiadás (vmi kibocsátása)
obligation - kötelessége, kötelességet, kötelesség
continent - kontinens
route - útvonalat, útirány, útvonal
first class - első osztály
decline - csökken, hanyatlásának
hitchhike - stoppol
documentary - dokumentumfilm
track - pálya, nyomon
leopard - leopárd, leopárdot
drug - gyógyszer
microwave - mikrohullámú
at this point - ezen a ponton
spring - tavasz
cow - tehén
sugar - cukor
edit - szerkeszt
elevator - lift
highway - autópálya
yard - udvar
ice cream - fagylalt
cheers - egészségedre
drugstore - gyógyszertár
distance - távolság, táv
staff - személyzet
download - letölt
breakfast - reggeli
supermarket - szupermarket
cabin - faház, kabint, kabin
product - termék
piano - zongora
on the way to - irányába
sunglasses - napszemüveg
nail polish - körömlakk
hostel - ifjúsági szálló
logo - embléma, logó
all kinds of - mindenféle
budget - költségvetés
ski - síel
street - utca
order - rendel
mosquito - szúnyog
airplane - repülőgép
president - elnök
blender - turmixgép
spoil - romlott
dessert - desszert
trend - trend, irányzat
crime - bűncselekmény
bedroom - hálószoba
test - teszt
yourselves - te magatok, magatok, magatoknak
player - játékos
prescription - recept
paperwork - papírmunka
trunk - csomagtartó
half an hour - fél óra
memory - memória
newspaper - újság
thriller - thriller
dedication - elkötelezettségre, Elkötelezettséget, elkötelezettségüket
gum - rágógumit, rágógumimmal, rágógumival
insurance company - biztosítótársaság
exit - kijárat
doll - baba
rescue - menteni
army - hadsereg
target - célod, célokra, célunkat
world - világom, világnak, világ
project - projekt
heritage - örökség
great-grandson - dédunoka
observation - megfigyelés
bracelet - karkötő
potluck - batyus vacsi, batyus bál
potato - krumpli
charger - töltő
admission - belépés
energy - energia
journalist - újságíró
fridge - hűtő
reference - referencia
absent - hiányzik
before bed - lefekvés előtt
allowance - zsebpénzét, zsebpénzére, zsebpénzként
the truth - igazat
shape - alak, forma
locker - szekrény
place - hely
herb - gyógynövény, fűszer
school - iskola
anniversary - évforduló
employer - munkáltató
a variety of - különféle
research - kutatás, kutatásnak
knowledge - tudás, tudtommal
patience - türelem
owe - tartozik, tartozom
departure - indulás, távozás
material - anyag
taxi - taxi
race - verseny
celebrity - híresség
graduation - diplomaosztó
injury - sérülésből
superhero - szuperhős
dollar - dollár
post office - posta
pharmacy - gyógyszertár
radio - rádió
traffic light - lámpa
cushion - párna
response - válasz, reagálás, reakció
coat - kabát
soccer - foci
hot chocolate - forró csoki
device - eszköz, készülék
pool - medence
nap - szundítani, szundíts, szundít
vase - váza, vázát
finger - ujj
headline - címsor
behavior - magaviselet, viselkedés, magatartás
outfit - ruha
at school - az iskolában, iskolában, iskolába
exchange - vált
belongings - tulajdona, holmijaid
breakthrough - áttörés
mall - bevásárlóközpont
photography - fényképészet
guest - vendég
chapter - fejezet
permission - engedély, engedélyre, engedélyt
delivery - kézbesítés, küldemény, szállítmány
hike - túrázik
tip - borravaló
brain - agy
smell - szaga, illat, szaguk
makeup - smink
childish - gyerekes
basketball - kosárlabda
earache - fülfájás, fáj a fülem
the day after tomorrow - holnapután
of course - természetesen
as a child - gyerekként
pajamas - pizsama
bottle - üveg
meal - étkezésem, étkezésük, étel
quarter past - Negyed, negyed
ship - hajó
host - házigazda, házigazdájának
compromise - kompromisszum
group - csoport
in advance - előre
location - helyszín
mouth - száj
grape - szőlő
waiting room - váróterem
brick - tégla, téglaházakat
conditions - feltételek, körülmények
talent - tehetség
cartoon - rajzfilm
on TV - a tévében
floor - padló
tourism - turizmus
mechanic - szerelő
age - életkor
heart attack - szívroham
baby - baba
space - tér, hely, űr
cotton - pamut
no way - dehogy
reality tv - valóságshow
data - adat
in front of - előtt, elé
junk - szemetet
in charge - felelős, megbízva
exercise machine - edzőgép
couch - kanapé
leather - bőr
appreciation - elismerését
good old days - régi szép idők
club - klub
ma'am - asszonyom
diploma - diploma
century - évszázad
train station - vonatállomás
television - tévéje, tévét, televízió
the bar - a bárba
chore - házimunka
method - módszer
zipper - cipzár
dye - fest
director - rendező
in the past - A múltban
demand - követelés, kereslet, igény (vmire)
class - csoport
life - élet
beef - marhahús
road - út
bartender - bártender
bar - bár
suit - öltöny
decrease - csökken, csökkent
rock - rock
bad luck - balszerencse
musician - zenész, zenésznő, zenésznek
apology - bocsánatkérés
treatment - kezelés, gyógykezelés, bánásmód
justice - igazság
hail - jégeső
rumor - pletyka
on time - időben
cherry - cseresznye
bleachers - lelátónál, lelátó
geography - földrajz
trick - trükkhöz, trükköt, trükkje
weekday - hétköznap
approach - megközelíteni
apartment - lakás
article - cikk
writer - író
heart disease - szívbetegség
skin - bőr
pepper - bors
gas station - benzinkút
outline - vázlat
education - nevelés, oktatás, műveltség
door - ajtó
exhibit - kiállítást, kiállítását, kiállítás
bean - bab
suburbs - külváros
switch - lekapcsolod, kapcsol, kapcsoltátok
lesson - óra
debt - tartozás, adósság
engineer - mérnök
curfew - kijárási tilalom
gift - ajándék
salt - só
passion - szenvedélye, szenvedélyemet
stain - folt
mom - anya
permit - engedély, engedélyt
mosque - mecset
graduate - diplomát szerez
insect - rovar
up-to-date - friss, aktuális
passenger - utas
police - rendőrség
bear - medve
flashlight - zseblámpa
security camera - biztonsági kamera
darkness - sötétség
rap - rapet, rap, rapben
server - pincér
state - állam
in the mountains - a hegyekben
crash - baleset, összeütközés, összeomlás
ban - tiltani
dog - kutya
in pain - fájdalmam, fájdalomban
pill - tabletta
sunrise - napkelte, napkeltekor
pipe - cső
yikes - jaj, hűha
giant - hatalmas, óriási
wife - feleség
summer - nyár
attitude - hozzáállás
shoe store - cipőbolt
money - pénz
magic show - bűvészelőadás
battle - harc, csata, ütközet
hunt - vadászik, vadásznak
accident - baleset
potato chip - burgonyaszirom
grandkid - unokája
elephant - elefánt
spill - kiöntsd
advertisement - reklám
driver - sofőr
reply - válaszol
unkind - durva, barátságtalan
boss - főnök
video call - videóhívás
candy - édesség
singer - énekes
meeting - értekezlet
number - szám
fries - sült krumpli
picnic - piknik
midterm - félévi
text - üzenetet ír
pants - nadrág
over the weekend - a hétvégén
with cash - készpénzzel
person - személy
tent - sátor
relief - megkönnyebbülés
refund - visszatérítés
sunset - naplemente
bus station - buszpályaudvar
forest - erdő
winter - tél
plastic - műanyag
yours - az önöké, a tiétek, a tieid
idea - ötlet
next time - legközelebb
woods - erdő
perfume - parfüm
discussion - megbeszélés, vita
nightclub - éjszakai klub
a lot - nagyon
sea - tenger
battery - akkumulátor
folks - emberek
type - gépel
creature - teremtmény
handwriting - kézírás, kézírást
direction - irány
cotton candy - vattacukor
music - zene
control - befolyás vmi fölött, uralom vmi fölött, irányít
volunteer - önkénteskedik
game - játék
fiction - fikció
trash can - szemetes
size - méret
toe - lábujj
for sale - eladó
goodbye - viszontlátásra
pilot - pilóta
tradition - hagyomány
fun - szórakoztató
squats - guggol, guggolások
bull - bika
horror - horror
fire department - tűzoltóság
cab - taxi
appetizer - előétel
fitting room - próbafülke
purse - retikül
tie - nyakkendő
nightlife - éjszakai élet
attention - figyelem, figyeljünk
wall - fal
advice - tanács
mayor - polgármester
sticker - matrica
probation - próbaidő
chimney - kémény, kéményre
therapist - terapeuta
crew - személyzet
jump - ugrál
engine - motor
fortune - vagyonba
comment - megjegyzés
earth - A Föld, föld
on top of - a tetejére, -on/-en/-ön/-n (rajta), a tetején
guitarist - gitáros
dish - edény
utilities - közüzemi szolgáltatások, közművek
grill - grillezik
tape - szalag
audition - meghallgatás
the moon - a Holdat
wrist - csukló
lung - tüdőproblémái, a tüdőre
room - hely, szoba, üres hely
clothing - ruházat, ruházati, ruhára
at work - munkában, a munkahelyen, munkahelyen
sister - lánytestvér
degree - diploma
chef - séf
surgery - műtét
portrait - portré, portréja, portrét
child - gyerek
document - dokumentum
benefits - hasznok, előnyös/kedvező hatások, jótékony hatások
custom - szokás
gas - benzin (mint üzemanyag), gáz (kémiailag)
grade - jegy
construction - (meg)építés, építkezés, megépítését
bat - denevér
comedy - vígjáték
granddaughter - unoka
mice - egeret, egerektől, egerek
copy - másol
tornado - tornádó
process - folyamat, folyamathoz
college - főiskola
resort - üdülőhely, nyaralóhely
league - bajnokság, liga
none of - egyik
hobby - hobbi
shop - vásárol
uncle - nagybácsi
resolution - fogadalom
cap - sapka
shade - árnyék
sports - sportokról, sportokban, sportok
day - nap
respect - tisztel
yuck - fúj, fuj
weight - súly
the sun - a nap, a napot
baggage - csomag
heat - fűtés
beverage - ital
spreadsheet - táblázatot
enemy - ellenség, ellenségem
cheer - szurkol
ambulance - mentő
tomato - paradicsom
businessman - üzletember
coworker - munkatárs
ruin - tönkretenné, elrontaná
pineapple - ananász
good morning - jó reggelt
afternoon - délután
lottery - lottó
carpet - szőnyeg
restaurant - étterem
office - iroda
style - stílus, stílusát, stílusa
line - sor
entertainment - szórakozás
stone - kő
subway - metró
bond - kötvény
address - cím
poverty - szegénység
partner - társ
pond - tó, halastavat, tavukat
what kind of - milyen
truck - teherautó
indoors - beltérben, bent
time off - szabadidő
police officer - rendőr
compare - összehasonlít
availability - elérhetőség
princess - hercegnő
surprise - meglepetés
glasses - szemüveg
magazine - folyóirat
rehearsal - próba
city - város
racket - ütő
sentence - mondat
feet - lábfejek
zone - zóna, övezet
movie theater - mozi
parade - parádé
dorm - kollégium
chicken - csirkehús
male - hím
dresser - komód
glove - kesztyű
victim - áldozat
hammer - kalapács
kindergarten - óvoda
shelf - polc
identification - igazolvány
stem - szár
math - matek
robot - robot
phone number - telefonszám
dust - port töröl
topic - téma
surroundings - környezet
riskiest - legkockázatosabb
trash - szemét
weapon - fegyver
contact - felveszi a kapcsolatot
with a check - csekkel
whale - bálna
ladder - létra
driver's license - jogosítvány
wine - bor
art - művészet
tennis - tenisz
man - férfi
deck - fedélzet
washing machine - mosógép
website - webhely
parking space - parkolóhely
principal - igazgató
activity - tevékenység
corner - sarok
scouts - cserkészek
press - sajtó, megnyom, nyomda
summertime - nyáron
instructor - oktató
sofa - kanapé
receptionist - recepciós
wristband - karszalag
reschedule - átütemez
blood - vér
bus - busz
deer - szarvas
reaction - reakció
last name - vezetéknév
essay - esszé
sausage - kolbász
values - értékek
ingredient - hozzávaló
when in doubt - kétség esetén
husband - férj
envy - irigylem
patient - páciens
university - egyetem
estimate - becsülték, becsülte, becsülted, becsülni
countryside - vidék
drank - ivott / ittak stb., ivott, itta
band - zenekar
best friend - legjobb barát
email - e-mail
role - szerep, szerepet, szerepe
kitchen - konyha
grandfather - nagyapa
toilet paper - vécépapír
gift card - ajándékkártya
brand - márka
trail - ösvény
wool - gyapjú
none - semelyik, semennyi, közületek senki nem ...
frame - keret
woman - nő
snow - hó
at the moment - jelenleg
warmth - melegség
by the way - egyébként
bag - táska
panic - pánikolni, pánikba, bepánikoltatni
great-grandmother - dédnagymama
in other words - más szavakkal
reputation - híre, hírnév
shift - műszak
glass of water - pohár vizet
brake - fékpedál, fékpedálom, fékpedálja
error - hiba
great-grandparent - dédszülő
gang - banda, macskabanda
knee - térd, térdem
diving - búvárkodás, merülés
gardener - kertészt, kertésszel, kertész
chip - csipsz, burgonyaszirom
shoe - cipő
aircraft - repülőgépek
friend - barát
sale - eladás
medalist - bronzérmes, aranyérmes, ezüstérmes
flip-flop - strandpapucs
spotlight - reflektor
storage - tárolóhely, tárolószoba
drawer - fiók
conclusion - konklúzió, következtetés
daylight - nappal, nappali fény
vet - állatorvos
transfer - átutal
chocolate - csoki
guys - srácok
detail - részlet
week - hét
cracker - sós keksz
candle - gyertya
bed - ágy
union - szövetség, egyesület, unió
town - város
opera - opera
vision - látás, látomás
myth - mítosz
halftime - félidő
powder - púder, por
stapler - tűzőgép
silverware - ezüstkészlet
flour - liszt
inch - hüvelykes
lyrics - dalszöveg
law - törvény
story - történet
security - biztonság
tights - harisnyát, harisnya
exam - vizsga
form - űrlap
fan - szurkoló
fifties - ötvenes évek
gold - arany, aranyszínű
convince - meggyőzni
nail - köröm
skill - készség
figure - figura, alak, ábra
from home - otthonról
handcuffs - bilincs
in the future - a jövőben
fall - ősz
the rest - a többi, a maradék
increase - (meg)növel, növelnünk
risk - kockázat, kockázatot
infection - fertőzésem, szemfertőzésén, fertőzés
aunt - nagynéni, nagynénim, nagynénémet
trainer - edző
checkout - pénztár
vehicle - jármű, járművem
pig - disznó
cereal - gabonapehely
share - megoszt
airline - légitársaság
on vacation - vakáción
mother-in-law - anyós
future - jövő
rainbow - szivárványszínű, szivárvány
gallon - gallon
hundreds - százak
deal - megállapodást, megegyezés, megállapodás
defendant - vádlott
file - fájl
waterfall - vízesés
thief - tolvaj
station - vonatállomáson, vonatállomás, buszpályaudvart
bad guy - rosszfiú
toothbrush - fogkefe
occasion - alkalom, apropó
interest - érdekli
channel - csatorna
cloud - felhő
toothpaste - fogkrém
table - asztal
all the time - mindig
appliance - eszköz, készülék
in bed - ágyban, az ágyban, ágyba
in love - szerelmes
love - szeret
glass - üveg, pohár, poharat
dad - apa
fingerprint - ujjlenyomat
blinds - redőnyt
violence - erőszak
gear - felszerelésre, felszerelésem, felszerelést
debit card - bankkártya
award - díj
rung - csörgött
tax - adó, adót
accusation - vád, állításod
headlight - fényszóró
jail - börtön
conference - konferencia, konferenciára
rush - sietünk, sietnek, kisietünk
industry - ipar, iparág
software - szoftver
stomach - gyomor
tournament - verseny
detective - nyomozó
passport - útlevél
depart - felszállnak, elindul, indul
therapy - terápia
embarrassment - szégyen
just a minute - egy pillanat
portion - adag
report card - ellenőrző könyv
supplies - kellékre, kellékeket, kellékekre
for the first time - először
elect - megválasztottuk
strawberry - eper
punk - punk
lunch - ebéd
case - tok
smoothie - turmix
oil change - olajcsere
toy store - játékboltba, játékbolt
customer service - ügyfélszolgálat
machine - gép
agenda - napirend
carve - faragnak
responsibility - felősség
on the contrary - sőt
store - bolt
lightning - villám
overtime - túlórában, túlóra, túlórázni
phone - telefon
tongue - nyelv
accommodations - szállás
babysit - gyerekekre vigyáz
galaxy - galaxisunkból, galaxisunkban, galaxisban
savings - megtakarítások
chat - beszégetés
my name is - a nevem
internship - gyakornokság, szakmai gyakorlat
script - forgatókönyv
bullet - golyót
shore - part
goosebumps - libabőr
experiment - kísérlet
politics - politika
winner - győztes
disease - betegség, betegsége
privacy - magánélet
liar - hazug
politician - politikus
food - étel
noon - dél
language - nyelv
rule - szabály
movie - film
basement - pince
round-trip - retúr, menettérti
wallet - pénztárca
of course not - természetesen nem
reception - recepció, fogadás, recepciónál
horse - ló
toenail - köröm, lábköröm
edge - szegély, szél (vmi széle), perem
horseback riding - lovaglás
an a - ötöst
clap - tapsolnék
economy - gazdaság
event - esemény
knot - csomót, csomó
frost - dér
beginner - kezdő
sensation - érzés
grandmother - nagymama
farmer - állattenyésztő, farmer, gazda
morning - reggel
lamp - lámpa
on my way - útközben
subtitles - felirat
roast - süt
duck - kacsa
grandparents - nagyszülőm, nagyszülők, nagyszüleinknek
percent - százalék
virtual reality - virtuális valóság
tv - tévéje, tévét, televízió
destination - úti cél
tear - elszakad
poet - költő
team - csapat
on stage - színpadon
symptom - tünet
effect - mellékhatást, hatás, hatásuk
range - hegylánc, tartomány
quiz - kvíz
evening - este
container - tartály, edény, tartó
studies - dolgozószobák, tanulmányaimat, tanulmányok
shirt - póló
sweat - megizzasszalak, izzad
travel - utazik
bargain - alkalmi vétel, alku
athlete - sportoló
boy - fiú
equipment - felszerelés
nature - természet
poster - plakát
fee - díj
vacuum - porszívózik
hero - hős
audience - közönség, hallgatóság
dinner - vacsora
sweatshirt - melegítőfelső
workout - edzés
shadow - árnyék
refreshments - frissítők
silk - selyem
board game - társasjáték
blanket - takaró
cider - almabor
flavor - íz
willpower - akaraterő
page - oldal
receipt - nyugta
friendship - barátság
price tag - árcédula
item - termék
ones - azok
firefighter - tűzoltó
grandson - unoka
advantage - előny, előnye
earring - fülbevaló
handkerchief - zsebkendőre, zsebkendőt, zsebkendő
rush hour - csúcsforgalom
opponent - ellenfél
spaceship - űrhajó, űrhajóban, űrhajón
music video - videóklip
children - a gyerekek, gyereket, gyerekek
disagreement - nézeteltérése, vitánk, vita
border - határ, szegély, határt
hair - haj
storm - vihar
spoon - kanál
thieves - tolvajok
in case - ha véletlenül, hátha, ha netán
flower - virág
ketchup - ketchup
captain - kapitány
card - üdvözlőkártya
transportation - szállítás(i), közlekedés(i), közlekedési
country - ország
adventure - kaland
boyfriend - barát
playground - játszótér
theater - színház
courage - bátorságot, bátorságom
dominoes - dominó
roommate - szobatárs
year - év
church - templom
religion - vallás, vallású
spa - wellness, gyógyfürdő
directions - irányok, útmutatások, útbaigazítást
quarter to - háromnegyed
witness - tanú
learner - nyelvtanuló, tanuló
super bowl - Super Bowl
in-laws - házastárs szülei
adult - felnőtt
determination - elszántságát, kitartásod, elszántság
vegetable - zöldség
congratulations - gratulálok
recycle - újrahasznosít
common sense - józan ész
shoulder - váll
pie - pite
employee - alkalmazott
dozen - tucat
coffee - kávé
cover letter - motivációs levél
balance - egyenleg
seventies - hetvenes évek
grab - megragad
achievement - teljesítmény, eredmény
monument - műemléke, műemlék, műemléket
procedure - eljárás
clothes - ruhák
cliffhanger - függővég
supper - vacsorát
corruption - korrupció
the news - a hírek
wellness - wellness
villain - gonosztevő
cash - készpénz
cycle - körfolyamat, ciklus, körforgás
population - népesség, lakosság, népessége
plan - terv
presentation - prezentáció
fire - tűz
whiteboard - tábla
years old - éves
exercise - edz
painter - festő
manager - menedzser
information - információ
benefit - juttatás
factory - gyár
representative - képviselő
delay - késik
backyard - hátsó udvar
gala - gála
plumbing - vízvezeték
rain - esik
commute - ingázáshoz
luggage - csomag
sort - fajta
capacity - kapacitással, kapacitású
opportunity - alkalom, lehetőség
charm - bája, bájának, bájosak
angel - angyal
cruise - hajóút
cemetery - temető
democracy - demokrácia
honeymoon - nászút
in pairs - párban
frog - béka
king - király
strength - erő
thunder - villám
attempt - megkísérel, próbálkozás, próba
firework - tűzijáték
inconvenient - kellemetlen
laundromat - mosoda
tire - gumi
pet - házikedvenc
update - frissítés
signature - aláírás
nonsense - nonszensz
on account of - következtében, miatt
these ones - ezeket
greet - köszönni
on purpose - szándékosan, direkt
change of clothes - váltás ruhára, váltás ruhát, váltás ruha
good luck - sok szerencsét
waste - pazarolja
in a relationship - kapcsolatban
campaign - kampány
speech - beszéd
pedal - pedál, fékpedál, fékpedálom
photographer - fényképész
in the evening - este
body - test
cuisine - konyha
traffic jam - dugó
ground - föld, talaj
teenage - kamasz
bunch - csomó
schedule - menetrend
apartment building - lakóépület
seafood - tenger gyümölcsei
credit - hitel
rabbit - nyúl
mile - mérföld
possibility - lehetőség, lehetőségünk
photograph - fénykép
bubble gum - rágógumi
investment - befektetés
butter - vaj
bed and breakfast - szállás reggelivel
in the rain - az esőben
election - választás
people - nép, emberektől, ember
circus - cirkusz
leader - vezetője, vezető, vezetővel
cell phone - mobiltelefon
duty - kötelességed
mess - rendetlenség
metal - fém
option - lehetőség
worker - alkalmazott
chance - lehetőséget, alkalmat
alternative - alternatíva, választási lehetőség, másik lehetőség
mine - az enyémet, enyéim, enyémet
total - összeg
bronze - bronzszínű, bronzérem
referee - (sport) bíró, bíró
client - klienssel, kliens, kliensed
accountant - könyvelő
attachment - melléklet, csatolmány
laundry - ruhák
way - út
peanut - mogyorót
humidity - nedvesség
milestone - mérföldkő
traffic - forgalom
philosophy - filozófia
wonder - csodálkozni, tűnődöm
cattle - szarvasmarha
promise - ígéretet, megígérsz
suitcase - bőrönd
thousands - sok ezer, ezrek, ezreket
alcohol - alkohol
certificate - tanúsítvány, bizonyítvány
window - ablak
hotel - szálloda
land - föld, leszálltok, leszáll
damage - veszteség, kár, károsodás
personality - (vki) természete, személyiség
video game - videójáték
rug - szőnyeg
at night - éjszaka
bowl of soup - tál leves
tunnel - alagút
knife - kés
credit card - hitelkártya
culture - kultúra
soil - talaj
power - teljesítmény (gépé), áram, (átv) erő
camp - kempingezik
assignment - feladat
underwear - alsónemű
sunlight - napfény
community - közösség, közösségi
dodgeball - kerülgetőlabdát, kerülgetőlabda
soldier - katona
thunderstorm - zivatar
yawn - ásít
student - diák
clock - óra
sandal - szandál
s'mores - s'mores
illusion - illúzió, illúziót, illúziónak
company - cég
laptop - laptop
festival - fesztivál
raincoat - esőkabát
swimmer - úszó
light - világítás, lámpát, könnyű
session - edzés, foglalkozás
biology - biológia
couple - pár
meditate - meditál
pound - font
challenge - kihívás
beauty - szépség
code - kód
explore - felfedez
passport control - útlevélellenőrzés
parking lot - parkoló
piece - szelet
men - a férfiak, férfiakat, férfiak
drama - dráma
lots of - rengeteg, sok
song - dal
owl - bagoly
day care - napközi
vocabulary - szókincs
fashion - divat
priority - prioritásunk, prioritás, prioritásnak
letter - levél
ground floor - földszint
in my opinion - szerintem
sand - homokos, homok, homokot
quality - minőség, tulajdonság, kvalitás
palace - palota, palotát
business - üzlet
leftovers - maradék
shuttle - űrrepülőgép, transzfer
mail - levél, elküld, mail
preparation - készülés
yesterday - tegnap
lifetime - élete
t-shirt - póló
suggestion - javaslat
blouse - blúz
`,zA=`two - kettő
twenty ten - húsz tíz
two thousand seven - kétezer-hétben, kétezer-hetes
forty - negyven
twenty fifteen - kétezer-tizenötben, kétezer-tizenöt
thirty-seven - harminchét
six - hat
eighty - nyolcvan
eighteen - tizennyolc
fifty - ötven
two thousand three - kétezer, kétezer három
seven - hét
hundred - száz, százast
fifteen - tizenöt, tizenötkor
four - négy
thirty - harminc
one - egy
thousand - ezer
seventy - hetven
eight - nyolc
ninety - kilencven
twenty - húsz
seventeen - tizenhét
ten - tíz
eighteen seventy - ezer nyolcszáz hetvenben, ezer nyolcszáz hetven
forty-five - negyvenöt
one of the - az egyik ...
nineteen - tizenkilenc
thirteen - tizenhárom
billion - milliárd
eleven - tizenegy
three - három
million - egymillió
nineteen ninety - ezerkilencszázkilencvenben
twenty-one - huszonegy
eighteen ninety - ezer nyolcszáz kilencvenben
nine - kilenc
fourteen - tizennégy
five - öt
nineteen sixty - ezerkilencszázhatvan, ezerkilencszázhatvanban
twelve - tizenkettő
`,bA=`what - mi
herself - önmagát, saját maga, önmaga
anything - bármi, valami, semmit
her - őt, benne, neki
which - melyik, hányadik, amit
me neither - Én sem
you'll - leszel, fogsz, kapsz
them - nekik, azokat, őket
another - még egy
what if - mi van (akkor) ha
who's - Kit, Ki
she - ő
everything - minden
he's - ő
what to - mihez
anybody - senki, bárki, senki sem
these - ezek a, ezeket az, ezeket a
some of - néhányra, néhány részét, egy részét
i'll - fogok
something - valami
it's - ez, van
he'll - fogja, tesz, lesz
we all - (mi) mindannyian, (mi) mind, (mi) mindnyájan
there has been - történt
whichever - bármelyik, akármit
she's - ő
any - semelyik, bármilyen, bármelyik
their - az ő, őket
himself - őt magát, önmaga, önmagát
the - az, a
anyone - bárkivel, valaki, senkivel
he - ő
him - ellene
themselves - maguknak, magukra, magukat
any of - egyet sem
everybody - mindenkit, mindenki, mindenkinek
myself - önmagam, magam, magamat
its - ...a/e/ja/je, a/az...-a/e/ja/je
someone - valaki
all of - az összes
this - ez, ez a, e
itself - öt/azt magát, maga, önmagát
those - azok a, azok, azokat
every - minden
each - minden
they're - Ők, Őket
an - egy
it'll - fog, lesz
nothing - semmi
what is - mi, mit
everyone - mindenki
me - nekem, én, engem
us - nekünk, minket, USA
yourself - magad, magaddal, magára
what's - mi van, mi
bookshelf - könyvespolc
a - egy, ötöst, A
whatever - bármilyen, akármi
who - ki
they'll - lesznek, tesznek, fognak
we - mi, nekünk
any longer - már, tovább
they - ők
nobody - senkinek, senki, senki nem
i'm - vagyok
that's why - ezért
i am from - származom
there - oda
me too - én is
I - én
it was - volt
you - te
who is - kik vannak ..., ki
what a - micsoda ………!
this is - ez
we're - vagyunk, leszünk
somebody - valakire, valakinek, valaki
some - valami, valamennyink, egy kis
it - azt, ez, az
ourselves - magunk, magunkat, magunknak
what's up - mi a helyzet
we'll - majd, leszunk, fogunk
you're - vagy
what about - mi a helyzet ………vel?
your - Ön, sportod, ti
she'll - fog, megy, lesz
his - övé
there have been - volt (hangsúlyosan), volt
our - mi
whoever - Akit (is) ...
all - összes
my - az én
it is - ez, van
that's - Ezért, az, Az
both - mindketten, mindkettő, mindkét
`,wA=`bee - méh
cliché - klisé
browser - böngésző
virus - vírus
haircut - hajvágás
jam - lekvár
rec center - szabadidőközpont
July - július
parrot - papagáj, papagájt, papagájok
leg - láb
champagne - pezsgő
headache - fejfájás
January - január
feather - tolla, toll
rsvp - kérjük, jelezzen vissza
circle - kör, körforgás
creepy - ijesztő, hátborzongató
cardio - kardió
hockey - jégkorong
peak - csúcs
gym - edzőterem
mattress - matrac
dip - mártás, mártogatóst
oven - sütő
pickle - savanyúság
lady - hölgy
essential - elengedhetetlen
brown - barna
tuna - tonhal
performer - előadóművész
peculiar - furcsa
spinach - spenót
habitat - élőhely
ham - sonka
juice - gyümölcslé
puppy - kiskutyát, kiskutya
waterproof - vízálló
gun - fegyver, pisztoly
maximum - maximum
saturday - szombat
marathon - maraton
visitor - látogató
shark - cápa, cápát (acc)
restart - újraindít
atm - bankautomata
February - február
freezer - fagyasztó
hill - domb
tuesday - kedd
groom - vőlegény
board - tábla
balcony - erkély, erkélyem
witch - boszorkány
cough - köhögés
squirrel - mókus
webcam - webkamera
kangaroo - kenguru
diet - étrend
sushi - szusi
snowboard - snowboardozik
disguise - jelmeze, jelmezben, jelmez
traveler - utazó
magician - bűvész
east - kelet
father - apa
ufo - UFO-tól, UFO-t, UFO
stepmother - mostohaanyád
entrepreneur - vállalkozó
mobile - mobil
March - március
cowboy - cowboy
goat - kecske
sneaker - sportcipő
mustache - bajusz, bajusza
playoff - rájátszás
professor - professzor
green - zöld
cucumber - uborka, uborkát
cookie - keksz
photo - fénykép
dictionary - szótár
pencil - ceruza
comedian - humorista
record - felvesz
crown - korona
journal - napló
scam - csalás
forecast - előrejelzés
fry - sütni, megsütöm
international - nemzetközi
bowl - tál
van - van
café - kávézó
mango - mangó
bagel - bagel
hassle - macera
mouse - egér
soup - leves
turtle - teknős, teknősbéka
bible - Biblia
tech - technológia, tech
dj - DJ
st - 1.
umbrella - esernyő
gate - kapu
banana - banán
garlic - fokhagyma
wet - nedves
liquid - folyékony, folyadék
sung - énekelt
series - sorozat
cardboard - kartondobozokba, kartondoboz, kartondobozokat
skeleton - csontváz, csontvázat
businesswoman - üzletasszony
atheist - ateista
bridge - híd
curry - curry
bingo - bingó
button - gomb
beach - tengerpart
lemonade - limonádé
casual - laza, hétköznapi
theme park - vidámpark
lamb - bárány
brilliant - zseniális, ragyogó
barbershop - borbély, fodrászat
spot - hely
sunday - vasárnap
classmate - csoporttárs
lawn - fű, gyep
cabinet - szekrény
mask - maszk, maszkra, maszkot
tabloid - bulvárlap, bulvárcikk
thirsty - szomjas
healthcare - egészségügyi
pillow - párna
monkey - majom
gown - ruhádban, estélyi ruha
app - alkalmazás
password - jelszó
pedestrian - gyalogost
backpack - hátizsák
screen - vászna, képernyőt, képernyő
grammar - nyelvtan
prisoner - fogoly
lover - szerető
volcano - vulkán, tűzhányó, tűzhányót
temple - templom
tuxedo - szmoking
kilometer - kilométer
username - felhasználónév
faucet - csapot, csap
spray - spray-t
valley - völgy
mingle - keveredjek, keveredjünk, keveredj
damp - nyirkos
brazilian - brazil
scientist - tudós, tudósnak
gallery - galéria
robber - rabló
shampoo - sampon
kid - gyerek
hid - bebújt
complaint - panasz
light bulb - villanykörtét
world cup - világbajnokság
catholic - katolikus
thermometer - hőmérő
jog - kocog
jungle - dzsungel
sensible - érzékeny
southeast - délkelet
hairstylist - fodrász
cabbage - káposzta, káposztás
house - ház
runner - futó
December - december
prom - végzős bál
giraffe - zsiráf
dusty - poros
lollipop - nyalókámat, nyalóka, nyalókát
menu - étlap
grandpa - nagypapa
masterpiece - Mesterműnek, mesterművének, mestermű
lake - tó
lobster - homár
bush - Bush
museum - múzeum
bathtub - kád
comb - fésű
eastern - keleti
napkin - szalvéta
park - park
turkey - pulykahús
book - könyv
medal - érem
tower - torony
vegetarian - vegetáriánus
technical - műszaki
yogurt - joghurt
noise - zaj
mug - bögre
admire - csodálsz
abandon - hagyták el, elhagyták
prince - herceg
bilingual - kétnyelvű
Christmas - karácsony
June - június
fantastic - fantasztikus
smooth - sima
errand - ügyet
owner - tulajdonos
South america - Dél-Amerika
curly - göndör
tricky - trükkös
bouquet - rózsacsokrot, csokrát
cousin - unokatestvér
homework - házi feladat
solo - szóló, egyedül
scooter - robogó
ache - fájdalom
joke - vicc, viccet (acc.)
wolf - farkas, farkasnak
lifeguard - úszómester
weekly - heti
Australia - Ausztrália
temper - türelem
toxic - mérgező
elementary school - általános iskola
daughter - lánya
skirt - szoknya
penguin - pingvin
kettle - vízforraló, teáskannát
Hindi - hindi
homesick - honvágyat
lesbian - leszbikus
criminal - bűnöző, bűnözőt
jersey - mez
toothache - fogfájás
hug - ölelés
baker - pék
chaperone - kísérő
autograph - autogram
blueberry - áfonya
beg - könyörögtünk
fond - Szeretett
beard - szakáll
microphone - mikrofon
artificial - mesterséges
prom queen - bálkirálynő
spectacular - lenyűgöző, látványos
flu - influenzás, influenza, influenzád
bank - bank
soda - üdítő
spirit - szellemiségét
skateboard - gördeszkázni, gördeszka, gördeszkám
national - nemzeti
confess - bevallom
discovery - felfedezés
karaoke - karaoke
April - április
thursday - csütörtök
bacon - szalonna
airport - repülőtér
orchestra - zenekar
nineteenth - tizenkilencedik
shipwreck - hajótörést
envelope - boríték
southern - déli
mailbox - postaládát, postaládám, mail
american - amerikai, amerikaiak, az amerikai
landlord - háziúr
affair - viszonyt
poem - vers
pothole - kátyú
mistaken - tévedtem
lent - kölcsönadta, kölcsönzött, kölcsönadott
Egypt - Egyiptom
theirs - övék, az övék, az övéket
motor - motor, motorja, motorod
basil - bazsalikom
sticky - ragadós
brownie - brownie
aisle - sor
delicious - finom
department - részleg
Canada - Kanada
rang - csöngött, csörgött
funeral - temetés
hall - folyosó
belt - öv
mascot - kabala
August - augusztus
nephew - unokaöcs, unokaöcsémet
sweater - pulóver
stylish - stílusos
melon - dinnye, dinnyét
monday - hétfő
peach - őszibarack
November - november
priest - pap
highlight - kiemel
cup - csésze, kupa, csészét
friday - péntek
layover - átszállás
zoo - állatkert
west - nyugat
star - csillag
barber - borbély, fodrász
orange - narancssárga
coast - part, tengerpart, partvidék
nickname - beceneve
web - web, háló
crab - rák
violin - hegedű
species - faj
cozy - otthonos
itinerary - program, programot
desert - sivatag
safari - szafari
embarrass - megszégyeníteni, szégyenkezni
cinema - mozi, mozihoz, mozit
electric - elektromos
ping pong - pingpong
blond - szőke
sun - nap, napon, napot
wheelchair - kerekesszék
North america - Észak-Amerika
deli - delikát bolt, delikát boltot, delikát boltban
forehead - homlok
diner - étkezde
coconut - kókusz
October - október
salesperson - eladó
castle - kastély
rub - dörzsölöd, dörzsölöm
counter - pult
humid - párás
twentieth - huszadik
box - dobozt, doboz, dobozra
cigarette - cigaretta
Asia - Ázsia
rainy - esős, esősek
queen - királynő
alien - idegen, idegennek, idegennel
stream - patak
supervisor - felügyelőm, felügyelő
god - Isten
rewatch - újranéz, újra megnéz
workbook - munkafüzet
heater - fűtőtest
rob - kirabolni
wednesday - szerda
eighteenth - tizennyolcadik
neighbor - szomszéd
cheese - sajt
sock - zokni
rhythm - ritmusra, ritmusérzékem
tooth - fog
chin - álla
jack-o'-lantern - töklámpa
stormy - viharos
plumber - vízvezetékszerelő
ocean - óceán
keyboard - billentyűzet
tablet - tablet
alarm clock - ébresztőóra
werewolf - vérfarkas, vérfarkasról
September - szeptember
stick - bot
breakup - szakítást
pizza - pizza
foul - szabálytalanság, szabálytalanságot
cliff - szikla
Africa - Afrika
stomachache - gyomorfájás
sixty - hatvan
`,xA=`how - hogy
why - miért
how are you - hogy vagy
despite - annak ellenére
how's - hogy van
how about - Mi lenne
because - mert
although - bár, noha
if - ha, -e, e
how about you - és te
till - amíg
where's - Hol van
except - vminek a kivételével, vmitől eltekintve, kivéve
whether - hogy
how long - mennyi ideig
unless - hacsak
while - amíg
why don't - miért nem
how did - hogy
that - azt, az az, amit
wherever - akárhol, bárhol, bárhová
when - mikor
where - hol
so that - (azért,) hogy, hogy
since - minthogy, mivel, óta
where is - Hol található, Hol van
because of - miatt
if you can - ha tudod
though - noha, habár
how often - milyen gyakran
whenever - akármikor
`,jA=`brought - hozott, (ő) hozott, elhoztad
broke - eltört, eltörtek, törte
see - lát
allow - (meg)enged
confirm - megerősít
fly - repül
there were - volt
believe - hisz
put away - eltesz
heal - meggyógyul, gyógyulás
repeat - ismétel
hold - tart
determined - eltökélt
fill out - kitölt
post - bejegyzés
introduce - bemutat
scarf - sál
have - van
delighted - örültek, elragadtatva, örvendek
advertising - reklámozás
plan to - tervem hogy, tervem, hogy
inspiring - inspiráló, Inspiráló
gotten - lett, megkapta, szerzett
break down - elromlott
win - nyer
prefer - jobban szeret
answer - válasz
meant - szándékozott, akarta mondani, jelentett
if you like - ha szeretnéd
click on - rákattint
born - született/megszületett
meet up - találkozunk
get dark - besötétedik
done with - kész van vele
have a good day - szép napot
fallen - lehullott, kidőlt, elesett
knowing - tudás, tudva, tudását
swim - úszik
scrambled eggs - tojásrántotta
concerned - aggasztott
named - hívják
stand - áll
look up - megnéz
taken - elvitt(ék), elvett(ék)
towel - törülköző
seatbelt - biztonsági öv
reveal - felfedje, felfedni
publish - kiadni, közzétenni, közzéteszem
let - engedett, hagy, hagyott
rearrange - átrendez
certified - tanúsítványra, tanúsítvány, tanúsítványt
create - (el)készít, (meg)alkot, létrehoz
fight - harcol, vita, harc
push - tol
submit - beadnunk, adták be, beadtad
listen - figyel
propose - javasol
got - szerezte, besötétedett, bejutottam
see you later - viszlát később
chew - rágj, rágógumit, rágok
encourage - bátorítanunk
agree - egyetért
predict - előre jelezni, megjósolni
return - visszavisz
can't stand - ki nem állhatja
borrow - kölcsönkér
go out - kimegy
mix - összekever
voicemail - hangposta
practice - gyakorol
tablecloth - asztalterítő
worried - aggódónak, aggódtál, aggódom
adapt - alkalmazkodni
relaxing - relaxáló
destroy - lerombol
i heard - hallottam
recognize - megismertem, megismersz, megismer
bored - unatkozó
lead - vezetni, vezető, vezesse
they say - mondanak
scared - ijedt
i'd love that - szeretném
hidden - elrejtve
bled - vérzett
limited - korlátozott
annoy - idegesítem
haven't - nem
blew - kifújta, elfújta
would you like to - szeretnéd, szeretnél
lost - elveszett
qualified - képes, alkalmas
stressed - stresszes
fall down - leesik
lend - kölcsönad
guess - kitalál
did not - nem
write - ír
sightseeing - városnézés
stretch - nyújt
put on - felvesz
belong to - tartozik
invite - meghív
appear - megjelenik, látszanak, tűnik vmi(lyen)nek
push-up - fekvőtámasz
crowded - zsúfolt
cover - borító
wish - kívánság, kíván (vkinek vmit)
stressed out - stresszes
shot - ital
kill - öl
compete - versenyez
warning - figyelmeztetem
spider - pók
get off - le, szállnak le, leszállnak
organize - rendbe tesz
sound - hangja, hang, hangzik
look like - úgy néz ki, mint
muffin - muffin
break - eltörtem, törtem, törted
mean - ért
threaten - fenyeget, megfenyegeti
stay away from - távol fogok maradni, távol kellene maradnunk, maradjunk távol
pack - csomagol
sang - énekeltünk, énekelt, énekeltem
take a tour - túrára megy
kicked - rúgta
don't forget to - ne felejtsétek el, ne felejtsd el, ne felejts
forget - elfelejt
sauce - szósz
boil - forrni, forralni
let's - Tartsunk, Csináljuk, Menjünk
told - mesélt, elmeséltem, meséltünk
had to - kellett
wait - vár
wanted - akartak, kértek, akartunk
announce - bejelent
packed - csomagoltam, bepakolta, csomagoltak
nice to meet you - Örülök, hogy
shown - megmutatta
care - gondoskodás, ellátás, törődés
torn - szakadt
react - reagált
love to - szeretném
object - tárgy
train - vonat
raise - fizetésemelés
show - műsor
hire - felvenni, fogadjak, fogadd
i'd like a - Szeretnék egy
go home - hazamegy
do the dishes - mosogat
withdraw - kivesz
flown - repült
relax - relaxál
attend - részt vesz
disgusting - undorító
how's it going - hogy mennek a dolgok
talented - ügyes, tehetséges
drums - doboknál, dobot, dobokat
make up - kibékül
became - vált, lett, lettek
think of - gondol vkire/vmire
pray - imádkozik
rest - pihen
maintain - fenntartani
assume - feltételez, feltételezni
root for - szurkol
endangered - veszélyeztetett
forgot - elfelejtették, elfelejtette, felejtettem
ridden - lovagolt, lovagoltam
seated - leültetve
throw - dob
shocked - döbbent
thank you - köszönöm
grow - nőj, termeszteni, nősz
pass away - elhuny, huny el
consider - fontolóra/figyelembe vesz, (meg/át)gondol, tart (vminek)
communicate - kommunikál
promote - előléptetni
sell - árul
thought - gondolt (vmire), gondolkodott (vmin), (azt) hitt(em/ed/e)
thinking of - gondolkodtam rajta, gondolkodom, gondolkodsz rajta
canceled - lemondva, elmarad, törölt
starving - éhező
shook - rázott
afford - megengedheti
stand up - feláll
regarding - vonatkozóan, kapcsolatban
remind - emlékeztet
look for - keres
taught - tanítottunk, tanította, tanított
forgotten - elfelejtett, felejtettem
crowd - tömeg
cave - barlang, barlangból
injure - megsérül
step - lépés, (mi) lépünk, lépcsőfok
claim - állítja
lie down - lefekszik
hanging - lógni, akaszt
teach - tanít
disagree - nem ért egyet
rugby - rögbi
put - tesz
lift - emel
click - kattints, kattintson, kattinthatsz
fasten - becsatolni
suffering - szenvedés, szenved
piercing - piercing
go shopping - vásárolni megy
grown - kinőtt
visit - meglátogat
keep - tart
play the - játszani
do you need - szükséged van ...?
written - megírta, írva
begin - kezdődik
keep fit - fitten tartja magát
pleased - elégedett
require - igényel
itch - viszket
rewarding - jutalmazó
carry - visz
classified - titkosított, titkosította
alternate - alternatív
read - olvas
hurt - megbántották, fájni, fáj
have to - kell, szükséges
see through - átlát
cancel - lemond
solved - megoldotta
stay - tartózkodik, maradtok, maradnom
allowed - engedélyezett
omelet - omlett
kiss - csók
ask for - kérni
known - tudta, ismerte
surfer - szörfös
welcome to - üdvözlünk a
go through - átmenni
get in - beszáll
yell - üvölt
appreciate - értékelik
respond - válaszol, válaszoljak
climb - mászik
cross - átmegy
suppose - feltételezem
accuse - vádolod
worry - aggódik
boost - fokozni, növelni
fought - harcolt
get back - visszaér
postpone - elhalaszthatjuk
closed - zárva
progress - haladás
apologize - bocsánatot kér, elnézést kérni
get - odaérek, jutni, eljut vhova
accept - elfogad, fogadnia, elfogadnak
cast - gipsz
i don't think so - nem hiszem
closet - szekrény
disappoint - csalódást okoz
score - eredmény
avoid - kerül, kerülöm, kerüld
did you say - mondtad
won - nyertek, győzött, (meg/el)nyert
knew - (ő) tudta, tudta, ismert
watch - megnézem, megnézünk, nézzük meg
fall asleep - elalszik, elaludt, elalszanak
strike - sztrájk, munkabeszüntetés
move out - kiköltöznek
convinced - meggyőzte
follow - követ
miss - kihagy
expect - elvárd, várni, számít
pay attention - figyel
hesitate - habozz
weigh - nyom, mérem
cook - főz
lemon - citrom
take care of - gondoskodnia, gondoskodik, vigyázzatok
heard - hallott, meghallottad
thinking - gondolkodik, vkire gondolás, gondolkodás
if you want - ha akarod
laugh - nevet
discuss - beszélget
recommend - javasol
have a seat - foglalj helyet
earn - keres
pear - körte
see you tomorrow - viszlát holnap
watch out - vigyázz
prepared - felkészült
following - követ, következők
hide and seek - bújócska
located - megtalált, található
grilled - grillezett
buy - vásárol
neighboring - szomszédos
turn in - bead
speak - beszél
nightmare - rémálom
haunted - kísértetjárta
run - fut
handle - fül, füle
related - kapcsolódó
racing - versenyezni
move into - beköltöznek, költöznek be
reach - belenyúlt, jutni, ér
spoke - beszélt
do - tisztítsuk, megcsinálod, csinálnom
save - félretesz
including - felvesz, tartalmaz, ide/bele/hozzászámít
you know - ismersz, ismertek, tudod
give up - feladja
campfire - tábortűz
remember - emlékszik
impress - lenyűgözd
found - megtalálta, találtuk, talált
turn - elfordul
survive - túléljük, túlélni, túléljek
cheek - orca
arrest - letartóztatás
go to sleep - aludni megy
make - készít
score a goal - gólt szerez
move away - elköltöznek
succeed - sikerül
ballet - balett
fork - villa
enjoy - élvez
register - iratkozni, feliratkozik, jelentkezzen
leave - indul
i'd love - Szeretnélek, Szeretnék, Szeretném
fold - összehajtani, hajtogatta
warn - figyelmeztetem
blow - fúj
divide - elosztjuk, megosztani
lit - felgyújtottam, gyújtott, meggyújtottam
fell down - leesett, leestek
feel - érez
going - megy, elmennek, járást
recover - felépül, meggyógyul, visszaszerez
bury - eltemetni, eltemetsz, eltemesse
adjust - alkalmazkodni, alkalmazkodniuk
graduate from - diplomázzak
try to - próbáld meg, megpróbálom, próbálunk
rise - növekedés, emelkedés, emelkedést
dedicated - elkötelezettek, elkötelezettebb, elkötelezettséget
gardening - kertészkedés
gather - gyűlnek
cure - gyógymód
concentrate - összpontosítani
clogged - eltömődött
find - talál
would like to - szeretne
get married - összeházasodik
have a headache - fáj a feje
popcorn - pattogatott kukorica
replace - pótol
hang out - lóg
keychain - kulcstartó
does - tesz, nem
try - megpróbál
dehydrated - kiszáradt
set - készlet, üdvözlőkártyakészletet, tűzök
punish - büntet
pick - választ
saw - látott, megláttuk
hors d'oeuvres - előételek
snore - Horkol, horkoló
feeling - érzés
vanish - eltűnik, tűnt el
knock - kopogj
cheat - csal
guarantee - garancia, garantáljuk, garanciát
ran - futottam, odafutott, vezettem
pull-up - húzódzkodás
don't - nem, ne, nincs
asked - megkérdezte, kérdezte, kért
terrified - rémült
arrive - érünk, odaértél, ideérni
end up - végül
made of - készült
take place - lesz, történik
change - kicserél
upbringing - neveltetésed, neveltetésem, neveltetése
get lost - eltévedtem, eltévedtél, eltévedni
misleading - félrevezető
squash - tök
pick up - felvesz
relieved - megkönnyebbült
remove - eltávolítani
fate - sors
catch - elkap
check out - kijelentkezik
negotiate - tárgyalj, megtárgyalj
recycling - újrahasznosítás
hang - akasztod, akasztotta, akasztja
suspend - felfüggeszt
split - szétszakadt, eloszt
divorced - elvált
appealing - vonzó
can't wait - alig várom
thank - megköszön
pollute - szennyezni
outgoing - társaságkedvelő
pay attention to - figyeljen
broken - tönkrement
look out - kinézek
thank you for - Köszönöm, hogy, Köszönöm
winding - kanyargós
smell bad - rossz szagú
restore - helyreállíthatnánk, helyreállítom, helyreállítasz
provide - biztosít, nyújt, nyújtanod
explain - magyaráz
take a walk - sétál
has - neki megvan, eszik, áll
wait in line - sorban állni, sorban álljak
come on - gyerünk
doesn't - nem
would have - -t volna (csinált volna)
well-known - ismert
worn - viselt, kopott
go fishing - horgászni megy
understood - megértette, értetted, értett
drop - leejt
get dressed - felöltözik
clown - bohóc
trekking - túrázás
grew - nőtt
stir - keverd
housewarming - házavató
go back - menjetek vissza
upgrade - frissítés
concerning - aggasztó
encounter - találkozhatunk, találkoztok, találkozunk
take off - levesz
venue - helyszín
search for - keresem, keresik
tray - tálca
fountain - szökőkút
recipe - recept
eat - eszik
offer - felajánl
can you believe it - el tudod hinni
find out - megtud
shaken - rázott
take a flight - repülővel megy
mention - említ
left - felejtette, távozott, elment
looking - néz, utánajártál
beginning - kezdet
decide - dönt
stand up for - kiállok
realize - rájön
take a look - nézni
pose - pózol
intend - szándékoztam, tervezem
done - tett, csinált, végeztünk
crack - repedés
solve - megold, megoldani
frightened - megijedt
blindfolded - bekötött szemű, bekötve, bekötött
can make it - el tud jönni, el tudsz jönni
thank goodness - hála isten
get a virus - elkap egy vírust
tailgating - autós piknikezés, parkolóban csomagtartóból ivás
sat down - leült
fare - viteldíj
seem - tűnik
move - költözik
throw away - eldob
missing - eltűnt
wondered - csodálkoztak, gondolkodtam, csodálkozott
hang up - felakasztani, akasztja
said - mondott, mondta, szólt
continue - folytat
grounded - szobafogságra
don't care - érdekelnek, érdekel
shower - zuhanyzó
describe - leír
start - kezd
charge - feltölt
canyon - kanyon, kanyonba, kanyonban
buckle - becsatolni
sneeze - tüsszent
don't worry - ne aggódj
give - ad
spooky - ijesztő
spent - töltötték, elköltöttünk, töltöttek
seen - látta
meet - találkozik
learn - tanul
try on - felpróbál
rose - rózsa, rózsát
had - kellett, megvolt, rendelkezett
express - kifejezni
gone - elment, ment, menve
protect - megvéd
recording - felvétel, felvétele
sitting - ülni, ülés, ülő
quit - hagy, otthagy
sounds - hangokat, hangzik
start school - kezdted
discover - felfedez, felfedezniük, felfedeztem
run out - elfogyott, kifutnak, kifutott
injured - sebesült
cause - okoz
let go - elengedlek
used - használta, szokva
caught - elkapott, elkapta, elkaptam
tying - kötés
welcome - üdvözöllek
die - meghal
serve - felszolgál
take care - vigyázz magadra
pour - öntenék, öntünk
capture - megörökítik, megörökíteni, megörökítenie
driven - vezetve, vezettünk
feel sick - rosszul érezni magát, rosszul érezni magam
fried - sült
took - kivett, (el)vitt(e), vállalta
reminisce - nosztalgiázom, nosztalgiázni
i know - én ismerek, tudok, tudom
excited - izgatott
shop for - Vásárolni, vásárolnom, vásárolni
hide - bújtak, bújnak, bújik
pumpkin - tök, tökös
freeze - megfagy, fagyni, befagy
sit down - leül
freezing - fagyos
play against - játszik egymás ellen, játszanak egymás ellen, játszani egymás ellen
grow up - felnő
contribute - hozzájárulni
develop - fejlődik, (ki)fejleszt, fejlődni
steal - lop
chose - választanék, választottál, választottak
talk to - beszélnünk, beszélünk, beszélhetünk
think - gondolkozik
slept - aludt, aludtunk
doing - csinálva, csinál, csinálni
excuse - kifogása, mentség
pay - kifizet, kifizetni, fizesd
damaged - megrongálódott, megsérül
talk - beszélned, beszélget, beszél
notes - jegyzeteket, jegyzeteinket, jegyzetek
sent - küldtünk, küldtél, küldte
yum - nyami
bake - süt
happen - történik
slowed - lelassult
cheeseburger - sajtburger
noodle - tészta
install - telepíti
provided - biztosítani, ellátott
begun - kezdődött, elkezdett
check - számla
well-dressed - jól öltözött
do laundry - mos
came - származott, jöttünk, megjött
know how to - tud hogyan kell
goes - megy, elmegy, jár
liking - szereted-e, szereti, Szereti
stood - álltam, állt, álltunk
there was - volt
investigate - vizsgálj, utánajárhatunk
break into - betör
fed - etetésért, etetésből, megetették
dislike - nem szeret, utálod
persuade - meggyőz
writing - írás
visited - meglátogattad, meglátogatták, meglátogatott
turn off - kikapcsol
shorts - rövidnadrág
wondering - tűnődve
discouraged - elcsüggedtem, Elcsüggedtem, elcsüggedni
reapply - újra jelentkezem
support - támogatás
married - házas
cleaning - takarítanak, takarít, tisztítok
stop - leállít, állni, abbahagy
advanced - haladó
shoot - lő
impressed - lenyűgöz, lenyűgözött
need to - szükséges, kell
sleeve - kabátujj, ujj, kabát ujja
inquire - utánajárok, érdeklődhet
podium - emelvény, emelvényre, emelvényt
sit - ül
cooperate - együttműködési, együttműködés
cry - sír
tolerate - tűrd el, tolerál
need - szükség van
favor - szívesség, javára
disappear - eltűnnek, eltűnik
have fun - jól érzi magát
rip - elszakad, elszakít
work - munka
immigrate - bevándorol
swear - esküszöm
expired - lejárt
excuse me - elnézést
burn - megéghet
limit - határ, korlát, határa
didn't - nem, sem
farming - gazdálkodás, mezőgazdaság
i hope not - remélem, hogy nem
receive - kap
work out - Edzeni, edzünk, edzel
come over - átjön
argue - vitatkozik
mow - lenyír, nyír, nyírja
timing - időzítés
as far as i know - tudomásom szerint, amennyire én tudom
defend - megvédeni
put together - összeállít
leaves - (fa)levelek, elindul, elutazik
woke up - felébredt, felébredtek
fill - tölt
forgiven - megbocsátott
take - megy, vinni, vennie
decorate - díszít
donate - adományoz
going to - fog, bemenni
welcoming - vendégszerető
qualify - kvalifikálni, kvalifikáljanak, kvalifikálta-e
dig - ásni
make it - elkészítik, készítesz
pop - pop
prove - bebizonyítani
bother - zavar
criticize - kritizálni
how can i help you - hogyan segíthetek önnek
doubt - kétség, kétely
spoken - beszélt(ek), beszéltek
wrote - írt, írtam, írtak
listen to - (meg)hallgat (vkit/vmit), (oda)figyel (vkire), hallgatod
attach - csatolni, fűzz
achieve - elér (célt), érni
challenging - kihívást jelentő
look at - ránéz (valakire)
agree with - érteniük, értek egyet, egyetértek
take a bath - fürdik
advise - tanácsolja, tanácsol
building - épület
bite - harap
mop - felmos, felmossuk, felmosom
lose - veszít
ignore - figyelmen kívül hagyhat, figyelmen kívül hagyni
unmute - bekapcsolja a mikrofont
pierced - átszúrt
speak to - beszél vkivel
seating - ülésrend, ülőhely, helyfoglalás
karate - karate
start work - kezdeni, elkezdem
considering - figyelembe, fontolgatjuk
let's do it - csináljuk
set up - szervez
review - átnéz
painting - festmény
celebrate - ünnepel
dressing - öntet
send - küld
fall off - leesik vmiről, leesnek
ask - kérdez
good to see you - jó látni téged
deliver - (ki)szállít, házhoz visz, kézbesít
run to - odafutnak
smile - mosolyog
breathe - lélegzik
gave - adott, adtak, adta
sunscreen - naptej
get on - felszállnak, felszállni, felszállsz
mind - felfogás, bánnád, tudat
manage - főnök
play cards - kártyázik
confusing - zavaró, zavaróak, összezavaró
chosen - választott(a), választottunk
write down - leír
translate - lefordítja
would you like - kér, kéri, szeretnél
hit - üt
admit - bevallom, beismerni
look - nézd
shut - becsuk
hear - hall
drive - vezet
become - válik
walk - sétál
spell - betűz
talk about - beszélni
enter - bemegy
turn on - bekapcsol
gain - nyertél, nyereség
thrown - dobott
account - számla
pancake - palacsinta
hasn't - nincs
give back - visszaad
paid - fizetted, fizette, fizetett
go to the bathroom - menned, mennie, menjünk
go away - elmenni
retire - nyugdíjba megy
disappointed - csalódott
join - csatlakozz, csatlakozom, csatlakozunk
sold - eladták, eladott, eladtad
sing - énekel
refuse - visszautasítom, megtagadni
suffer - szenved
commit - elkövetni, elkövet, elkövettél
get along - jól kijön
satisfied - elégedett
come here - gyere ide
make sense - értelme van
go to - odamennek
suggest - javasol
get home - hazaér
sign up - jelentkezik
will have - addigra már (csinál majd vki vmit), lesz
drawing - rajz
drove - vezettünk, vezettem, autóztam
pay back - visszafizet
display - bemutatják
collect - gyűjt
pretend - teszel, tenni
affect - (ki)hat vkire/vmire, hatással van, befolyásol
i have - iszom, van, megvan
inform - tájékoztatom, értesítse
deserve - érdemel
ruins - romokban, romjai, romot
come back - visszajön
do you have - nálatok van, nálad van
crosswalk - gyalogátkelő
guide - idegenvezető
insist - ragaszkodott
drawn - rajzolt, rajzolva
designed - tervezték, tervezve, tervezte
imagine - elképzelni
collapse - omlani, összeomlik
ate - evett, ettél, ette
spend - költ
smartphone - okostelefon
misunderstanding - félreértés
marshmallow - pillecukrot
there is - van
prepare - készül
unpack - kicsomagol
reflect - elgondolkodni
forgive - megbocsát
face - arc
ending - befejezés
organized - szervezett
there's - van, ott van
perform - fellép, előadni, lépnek fel
stay home - otthon marad
i'd like - szeretnék
follow up - utánajár
check in - bejelentkezik
include - beleszámít
forgave - megbocsátott
run into - befutni, (ők) befutnak, befut(nak)
limo - limuzin
settle - rendezzük
stamp - bélyeg
rewrite - átírnod
hardworking - szorgalmas
went - ment, jártam, hazamentél
anticipated - várják
would have had - (nekem/neki/…) lett volna
call - hív
sweep - söpör
play - focizunk, játszanak, rögbizem
do you mind if - nem bánja, ha
stolen - elloptak, ellopják, lopott
bought - vettem, vásároltak, vásároltál
pirate - kalóz
had better - jobban teszi
interact - interaktálni
explode - felrobban
swept - felsöpörte
eaten - (meg)ette
escape - szökés
beaten - legyőzött
apply - jelentkezik
come in - bejönnek
draw - rajzol
go to bed - aludni megy
lay - fekszik
had better not - jobban teszi ha nem
wants to - szeretne
hand out - kioszt
animated - animált, animációs
eat breakfast - megreggeliznek
relaxed - nyugodt, kipihent, laza
drink - ital
bring - hoz
take a nap - szundít
get well soon - jobbulást
lying down - feküdtem
accomplish - sikerült elérned, elérjük, érsz el
lie - fekszek, fekszenek, lefekszünk
note - jegyzet
help - segítség, segíteni, segítsenek
shout - kiabál
ride - játék
sunshine - napsütés
pass - átmegy
watch out for - figyelj
tore - kiszakadt
look into - benéznek
upset - feldúlt
overwhelmed - túlterhelt
beat - legyőz(ött), megdönt(ött) pl. rekordot, megver(t)
exhausted - kimerült
go on - folytasd
completed - elvégezte, elvégeztem, befejezve
wore - viseltem, hordtam, viseltél
assuming that - feltéve
come out - kijönni, kijön, kijönnek
kitten - cica, cicát
scream - sikolt, sikoly
choose - választ
know - tudjátok, tud, tudnia
drew - rajzolta, rajzolták
smoke - dohányzik
sledding - szánkózni, szánkózás
girlfriend - barátnő
engaged - eljegyzett
make sure - meggyőződik
whipped cream - tejszínhab
punch - ütéssel
report - jelentés
turn out - kiderül
astonished - elképedt
go swimming - úszni megy
living - élő, lakunk
adopt - örökbe fogadja
connect - csatlakoztat
loving - szeretőd
know how - Tudod
wake up - ébred
hate - utál
marry - házasodni
want to - akarja, akarod, akarom
understand - ért
never mind - ne törődj vele
expecting - számított
blame - felelősséget, hibáztatás, szemrehányás
break up - szakít
see you soon - viszlát hamarosan
notice - észrevesz
would like - kérem, szeretne
pair - pár
extend - kibővíteni
go over - átnéz
do business - üzletel
say - mond
entertaining - szórakoztató
felt - érzett/éreztek, érezte/-ék magát/magukat
training - edzés, teniszedzés, képzés
sidewalk - járda
asking - megkérdezi, kér, kérdezted
did - vásároltál, viseltél, tett
there are - áll, van, vannak
began - elkezdett, elkezdődött, kezdtem
take notes - jegyzetel
cut - vág
blown - elfújta
result - eredmény, eredményt
what do you think of - mit gondolsz
cookbook - szakácskönyv
go - megy
fear - félelem
sank - elsüllyedt
embarrassing - zavarbaejtő
rafting - vadvízi evezés, eveznénk, eveztem
lettuce - saláta
fault - hiba
wound - seb
exist - létezik
complain - panaszkodik
wear - visel
meaning - jelentés, (elvont dologra) értelem
knit - kötni
would you mind - lenne kedved
treat - jutalmamat, kezelésem, vendégül látsz
locate - keressék, megtalál
confused - összezavarodva
link - link
want - akar
met - találkozott
id - személyi igazolvány
I don't mind - nem bánom
homemade - házi
uninteresting - érdektelen
checking account - folyószámla
take out - elővesz
come - jön
kick - rúg
match - mérkőzés
improve - fejlődik, javít (rajta), javíthatják
get into - beszállni, beülnek, szállnak be
made - tette, loptak, rávett
ew - pfuj
how are you doing - hogy vagy
i don't know - nem ismerem, nem ismerek
look after - gondoskodik vkiről
walk the dog - megsétáltatja a kutyát
plug - dugó, csatlakozó
vote for - szavazol
surrounding - körülvevő, környező
hurry - siet
feel about - érzünk kapcsolatban, érzitek kapcsolatban, érzel kapcsolatban
tell - mondanod, megmondom, elárulod
led - irányít/vezet (múlt idő), vezettem
boring - unalmas
hold on - várj
stole - lopták, loptak, lopta
i think so - azt hiszem
carry-on - kézipoggyász, kézicsomag
fail - megbukik
held - fogott, tartott, tartottak
lock - zár, lakat, bezár
participate - részt vesz
bless you - egészségedre
according to - szerint
résumé - önéletrajz
add - hozzáad
rat - patkány
tiring - fárasztó
catering - catering
shake - rázni
sew - varrni
i'd - ajánlanám
used to - valaha, volt szokásunk, régen
represent - képvisel
get out of - ki, kiszállnak
involve - bevonni
`,SA=({onLoadCards:e})=>{const[n,t]=_.useState(ok),{toast:i}=vz(),s=()=>{const o=n.split(`
`).filter(m=>m.trim()!==""),d=[];let f=!1;o.forEach((m,y)=>{const u=m.split(" - ");if(u.length>=2){const h=u[0].trim(),g=u.slice(1).join(" - ").trim();h&&g?d.push({id:`card-${Date.now()}-${y}`,front:h,back:g}):(i({title:"Input Error",description:`Line ${y+1} is incomplete. Please ensure both front and back are present.`,variant:"destructive"}),f=!0)}else i({title:"Input Error",description:`Line ${y+1} is not in 'front - back' format.`,variant:"destructive"}),f=!0}),!f&&d.length>0?(e(d),i({title:"Success",description:`${d.length} flashcards loaded!`})):!f&&d.length===0&&i({title:"No Cards Loaded",description:"Please enter some flashcards in 'front - back' format.",variant:"destructive"})},l=o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),s())};return O.jsxs("div",{className:"w-full max-w-2xl p-6 bg-white rounded-lg shadow-md",children:[O.jsx("h2",{className:"text-2xl font-semibold mb-4 text-center",children:"Create Your Flashcards"}),O.jsx("p",{className:"text-gray-600 mb-4 text-center",children:'Enter your words in "front - back" format, one per line.'}),O.jsx(tw,{placeholder:`Example:
Hello - Hola
Goodbye - Adiós
Cat - Gato`,value:n,onChange:o=>t(o.target.value),onKeyDown:l,rows:10,className:"mb-4 resize-y"}),O.jsxs("div",{className:"flex flex-row gap-2 flex-wrap w-full",children:[O.jsx(qe,{onClick:()=>t(ok),children:"Default Flashcards"}),O.jsx(qe,{onClick:()=>t(fA),children:"DL Flashcards"}),O.jsx(qe,{onClick:()=>t(mA),children:"ADJ"}),O.jsx(qe,{onClick:()=>t(hA),children:"ADP"}),O.jsx(qe,{onClick:()=>t(pA),children:"ADV"}),O.jsx(qe,{onClick:()=>t(gA),children:"AUX"}),O.jsx(qe,{onClick:()=>t(yA),children:"CCONJ"}),O.jsx(qe,{onClick:()=>t(kA),children:"DET"}),O.jsx(qe,{onClick:()=>t(vA),children:"NOUN"}),O.jsx(qe,{onClick:()=>t(zA),children:"NUM"}),O.jsx(qe,{onClick:()=>t(bA),children:"PRON"}),O.jsx(qe,{onClick:()=>t(wA),children:"PREP"}),O.jsx(qe,{onClick:()=>t(xA),children:"SCONJ"}),O.jsx(qe,{onClick:()=>t(jA),children:"VERB"}),O.jsx(qe,{onClick:s,className:"bg-green-500",children:"START"})]})]})},rw=_.forwardRef(({className:e,...n},t)=>O.jsx("div",{ref:t,className:un("rounded-lg border bg-card text-card-foreground shadow-sm",e),...n}));rw.displayName="Card";const CA=_.forwardRef(({className:e,...n},t)=>O.jsx("div",{ref:t,className:un("flex flex-col space-y-1.5 p-6",e),...n}));CA.displayName="CardHeader";const Ff=_.forwardRef(({className:e,...n},t)=>O.jsx("h3",{ref:t,className:un("text-2xl font-semibold leading-none tracking-tight",e),...n}));Ff.displayName="CardTitle";const _A=_.forwardRef(({className:e,...n},t)=>O.jsx("p",{ref:t,className:un("text-sm text-muted-foreground",e),...n}));_A.displayName="CardDescription";const Vf=_.forwardRef(({className:e,...n},t)=>O.jsx("div",{ref:t,className:un("p-6 pt-0",e),...n}));Vf.displayName="CardContent";const TA=_.forwardRef(({className:e,...n},t)=>O.jsx("div",{ref:t,className:un("flex items-center p-6 pt-0",e),...n}));TA.displayName="CardFooter";function EA(e){const n=_.useRef({value:e,previous:e});return _.useMemo(()=>(n.current.value!==e&&(n.current.previous=n.current.value,n.current.value=e),n.current.previous),[e])}var Bm="Switch",[AA,sV]=wo(Bm),[PA,RA]=AA(Bm),iw=_.forwardRef((e,n)=>{const{__scopeSwitch:t,name:i,checked:s,defaultChecked:l,required:o,disabled:d,value:f="on",onCheckedChange:m,form:y,...u}=e,[h,g]=_.useState(null),z=Et(n,C=>g(C)),b=_.useRef(!1),x=h?y||!!h.closest("form"):!0,[w=!1,S]=Tz({prop:s,defaultProp:l,onChange:m});return O.jsxs(PA,{scope:t,checked:w,disabled:d,children:[O.jsx(Cn.button,{type:"button",role:"switch","aria-checked":w,"aria-required":o,"data-state":ow(w),"data-disabled":d?"":void 0,disabled:d,value:f,...u,ref:z,onClick:mn(e.onClick,C=>{S(R=>!R),x&&(b.current=C.isPropagationStopped(),b.current||C.stopPropagation())})}),x&&O.jsx(IA,{control:h,bubbles:!b.current,name:i,value:f,checked:w,required:o,disabled:d,form:y,style:{transform:"translateX(-100%)"}})]})});iw.displayName=Bm;var aw="SwitchThumb",sw=_.forwardRef((e,n)=>{const{__scopeSwitch:t,...i}=e,s=RA(aw,t);return O.jsx(Cn.span,{"data-state":ow(s.checked),"data-disabled":s.disabled?"":void 0,...i,ref:n})});sw.displayName=aw;var IA=e=>{const{control:n,checked:t,bubbles:i=!0,...s}=e,l=_.useRef(null),o=EA(t),d=vb(n);return _.useEffect(()=>{const f=l.current,m=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(m,"checked").set;if(o!==t&&u){const h=new Event("click",{bubbles:i});u.call(f,t),f.dispatchEvent(h)}},[o,t,i]),O.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...s,tabIndex:-1,ref:l,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function ow(e){return e?"checked":"unchecked"}var lw=iw,MA=sw;const au=_.forwardRef(({className:e,...n},t)=>O.jsx(lw,{className:un("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...n,ref:t,children:O.jsx(MA,{className:un("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));au.displayName=lw.displayName;var DA="Label",uw=_.forwardRef((e,n)=>O.jsx(Cn.label,{...e,ref:n,onMouseDown:t=>{var s;t.target.closest("button, input, select, textarea")||((s=e.onMouseDown)==null||s.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));uw.displayName=DA;var cw=uw;const LA=Sm("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),su=_.forwardRef(({className:e,...n},t)=>O.jsx(cw,{ref:t,className:un(LA(),e),...n}));su.displayName=cw.displayName;const dw=_.createContext({});function OA(e){const n=_.useRef(null);return n.current===null&&(n.current=e()),n.current}const Um=typeof window<"u",NA=Um?_.useLayoutEffect:_.useEffect,$m=_.createContext(null);function Hm(e,n){e.indexOf(n)===-1&&e.push(n)}function Wm(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}const Ir=(e,n,t)=>t>n?n:t<e?e:t;let qm=()=>{};const Mr={},fw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function mw(e){return typeof e=="object"&&e!==null}const hw=e=>/^0[^.\s]+$/u.test(e);function Km(e){let n;return()=>(n===void 0&&(n=e()),n)}const Tt=e=>e,FA=(e,n)=>t=>n(e(t)),Co=(...e)=>e.reduce(FA),fo=(e,n,t)=>{const i=n-e;return i===0?1:(t-e)/i};class Gm{constructor(){this.subscriptions=[]}add(n){return Hm(this.subscriptions,n),()=>Wm(this.subscriptions,n)}notify(n,t,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](n,t,i);else for(let l=0;l<s;l++){const o=this.subscriptions[l];o&&o(n,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fr=e=>e*1e3,mr=e=>e/1e3;function pw(e,n){return n?e*(1e3/n):0}const gw=(e,n,t)=>(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e,VA=1e-7,BA=12;function UA(e,n,t,i,s){let l,o,d=0;do o=n+(t-n)/2,l=gw(o,i,s)-e,l>0?t=o:n=o;while(Math.abs(l)>VA&&++d<BA);return o}function _o(e,n,t,i){if(e===n&&t===i)return Tt;const s=l=>UA(l,0,1,e,t);return l=>l===0||l===1?l:gw(s(l),n,i)}const yw=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,kw=e=>n=>1-e(1-n),vw=_o(.33,1.53,.69,.99),Qm=kw(vw),zw=yw(Qm),bw=e=>(e*=2)<1?.5*Qm(e):.5*(2-Math.pow(2,-10*(e-1))),Ym=e=>1-Math.sin(Math.acos(e)),ww=kw(Ym),xw=yw(Ym),$A=_o(.42,0,1,1),HA=_o(0,0,.58,1),jw=_o(.42,0,.58,1),WA=e=>Array.isArray(e)&&typeof e[0]!="number",Sw=e=>Array.isArray(e)&&typeof e[0]=="number",qA={linear:Tt,easeIn:$A,easeInOut:jw,easeOut:HA,circIn:Ym,circInOut:xw,circOut:ww,backIn:Qm,backInOut:zw,backOut:vw,anticipate:bw},KA=e=>typeof e=="string",lk=e=>{if(Sw(e)){qm(e.length===4);const[n,t,i,s]=e;return _o(n,t,i,s)}else if(KA(e))return qA[e];return e},Gl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GA(e,n){let t=new Set,i=new Set,s=!1,l=!1;const o=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(y){o.has(y)&&(m.schedule(y),e()),y(d)}const m={schedule:(y,u=!1,h=!1)=>{const z=h&&s?t:i;return u&&o.add(y),z.has(y)||z.add(y),y},cancel:y=>{i.delete(y),o.delete(y)},process:y=>{if(d=y,s){l=!0;return}s=!0,[t,i]=[i,t],t.forEach(f),t.clear(),s=!1,l&&(l=!1,m.process(y))}};return m}const QA=40;function Cw(e,n){let t=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,o=Gl.reduce((C,R)=>(C[R]=GA(l),C),{}),{setup:d,read:f,resolveKeyframes:m,preUpdate:y,update:u,preRender:h,render:g,postRender:z}=o,b=()=>{const C=Mr.useManualTiming?s.timestamp:performance.now();t=!1,Mr.useManualTiming||(s.delta=i?1e3/60:Math.max(Math.min(C-s.timestamp,QA),1)),s.timestamp=C,s.isProcessing=!0,d.process(s),f.process(s),m.process(s),y.process(s),u.process(s),h.process(s),g.process(s),z.process(s),s.isProcessing=!1,t&&n&&(i=!1,e(b))},x=()=>{t=!0,i=!0,s.isProcessing||e(b)};return{schedule:Gl.reduce((C,R)=>{const D=o[R];return C[R]=(P,$=!1,Y=!1)=>(t||x(),D.schedule(P,$,Y)),C},{}),cancel:C=>{for(let R=0;R<Gl.length;R++)o[Gl[R]].cancel(C)},state:s,steps:o}}const{schedule:Je,cancel:ki,state:Sn,steps:Wd}=Cw(typeof requestAnimationFrame<"u"?requestAnimationFrame:Tt,!0);let ou;function YA(){ou=void 0}const it={now:()=>(ou===void 0&&it.set(Sn.isProcessing||Mr.useManualTiming?Sn.timestamp:performance.now()),ou),set:e=>{ou=e,queueMicrotask(YA)}},_w=e=>n=>typeof n=="string"&&n.startsWith(e),Xm=_w("--"),XA=_w("var(--"),Jm=e=>XA(e)?JA.test(e.split("/*")[0].trim()):!1,JA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ns={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},mo={...ns,transform:e=>Ir(0,1,e)},Ql={...ns,default:1},Xs=e=>Math.round(e*1e5)/1e5,Zm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZA(e){return e==null}const eP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,eh=(e,n)=>t=>!!(typeof t=="string"&&eP.test(t)&&t.startsWith(e)||n&&!ZA(t)&&Object.prototype.hasOwnProperty.call(t,n)),Tw=(e,n,t)=>i=>{if(typeof i!="string")return i;const[s,l,o,d]=i.match(Zm);return{[e]:parseFloat(s),[n]:parseFloat(l),[t]:parseFloat(o),alpha:d!==void 0?parseFloat(d):1}},nP=e=>Ir(0,255,e),qd={...ns,transform:e=>Math.round(nP(e))},Ni={test:eh("rgb","red"),parse:Tw("red","green","blue"),transform:({red:e,green:n,blue:t,alpha:i=1})=>"rgba("+qd.transform(e)+", "+qd.transform(n)+", "+qd.transform(t)+", "+Xs(mo.transform(i))+")"};function tP(e){let n="",t="",i="",s="";return e.length>5?(n=e.substring(1,3),t=e.substring(3,5),i=e.substring(5,7),s=e.substring(7,9)):(n=e.substring(1,2),t=e.substring(2,3),i=e.substring(3,4),s=e.substring(4,5),n+=n,t+=t,i+=i,s+=s),{red:parseInt(n,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Bf={test:eh("#"),parse:tP,transform:Ni.transform},To=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),oi=To("deg"),hr=To("%"),xe=To("px"),rP=To("vh"),iP=To("vw"),uk={...hr,parse:e=>hr.parse(e)/100,transform:e=>hr.transform(e*100)},Ea={test:eh("hsl","hue"),parse:Tw("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:t,alpha:i=1})=>"hsla("+Math.round(e)+", "+hr.transform(Xs(n))+", "+hr.transform(Xs(t))+", "+Xs(mo.transform(i))+")"},fn={test:e=>Ni.test(e)||Bf.test(e)||Ea.test(e),parse:e=>Ni.test(e)?Ni.parse(e):Ea.test(e)?Ea.parse(e):Bf.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ni.transform(e):Ea.transform(e),getAnimatableNone:e=>{const n=fn.parse(e);return n.alpha=0,fn.transform(n)}},aP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sP(e){var n,t;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Zm))==null?void 0:n.length)||0)+(((t=e.match(aP))==null?void 0:t.length)||0)>0}const Ew="number",Aw="color",oP="var",lP="var(",ck="${}",uP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ho(e){const n=e.toString(),t=[],i={color:[],number:[],var:[]},s=[];let l=0;const d=n.replace(uP,f=>(fn.test(f)?(i.color.push(l),s.push(Aw),t.push(fn.parse(f))):f.startsWith(lP)?(i.var.push(l),s.push(oP),t.push(f)):(i.number.push(l),s.push(Ew),t.push(parseFloat(f))),++l,ck)).split(ck);return{values:t,split:d,indexes:i,types:s}}function Pw(e){return ho(e).values}function Rw(e){const{split:n,types:t}=ho(e),i=n.length;return s=>{let l="";for(let o=0;o<i;o++)if(l+=n[o],s[o]!==void 0){const d=t[o];d===Ew?l+=Xs(s[o]):d===Aw?l+=fn.transform(s[o]):l+=s[o]}return l}}const cP=e=>typeof e=="number"?0:fn.test(e)?fn.getAnimatableNone(e):e;function dP(e){const n=Pw(e);return Rw(e)(n.map(cP))}const vi={test:sP,parse:Pw,createTransformer:Rw,getAnimatableNone:dP};function Kd(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function fP({hue:e,saturation:n,lightness:t,alpha:i}){e/=360,n/=100,t/=100;let s=0,l=0,o=0;if(!n)s=l=o=t;else{const d=t<.5?t*(1+n):t+n-t*n,f=2*t-d;s=Kd(f,d,e+1/3),l=Kd(f,d,e),o=Kd(f,d,e-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(o*255),alpha:i}}function vu(e,n){return t=>t>0?n:e}const nn=(e,n,t)=>e+(n-e)*t,Gd=(e,n,t)=>{const i=e*e,s=t*(n*n-i)+i;return s<0?0:Math.sqrt(s)},mP=[Bf,Ni,Ea],hP=e=>mP.find(n=>n.test(e));function dk(e){const n=hP(e);if(!n)return!1;let t=n.parse(e);return n===Ea&&(t=fP(t)),t}const fk=(e,n)=>{const t=dk(e),i=dk(n);if(!t||!i)return vu(e,n);const s={...t};return l=>(s.red=Gd(t.red,i.red,l),s.green=Gd(t.green,i.green,l),s.blue=Gd(t.blue,i.blue,l),s.alpha=nn(t.alpha,i.alpha,l),Ni.transform(s))},Uf=new Set(["none","hidden"]);function pP(e,n){return Uf.has(e)?t=>t<=0?e:n:t=>t>=1?n:e}function gP(e,n){return t=>nn(e,n,t)}function nh(e){return typeof e=="number"?gP:typeof e=="string"?Jm(e)?vu:fn.test(e)?fk:vP:Array.isArray(e)?Iw:typeof e=="object"?fn.test(e)?fk:yP:vu}function Iw(e,n){const t=[...e],i=t.length,s=e.map((l,o)=>nh(l)(l,n[o]));return l=>{for(let o=0;o<i;o++)t[o]=s[o](l);return t}}function yP(e,n){const t={...e,...n},i={};for(const s in t)e[s]!==void 0&&n[s]!==void 0&&(i[s]=nh(e[s])(e[s],n[s]));return s=>{for(const l in i)t[l]=i[l](s);return t}}function kP(e,n){const t=[],i={color:0,var:0,number:0};for(let s=0;s<n.values.length;s++){const l=n.types[s],o=e.indexes[l][i[l]],d=e.values[o]??0;t[s]=d,i[l]++}return t}const vP=(e,n)=>{const t=vi.createTransformer(n),i=ho(e),s=ho(n);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Uf.has(e)&&!s.values.length||Uf.has(n)&&!i.values.length?pP(e,n):Co(Iw(kP(i,s),s.values),t):vu(e,n)};function Mw(e,n,t){return typeof e=="number"&&typeof n=="number"&&typeof t=="number"?nn(e,n,t):nh(e)(e,n)}const zP=e=>{const n=({timestamp:t})=>e(t);return{start:(t=!0)=>Je.update(n,t),stop:()=>ki(n),now:()=>Sn.isProcessing?Sn.timestamp:it.now()}},Dw=(e,n,t=10)=>{let i="";const s=Math.max(Math.round(n/t),2);for(let l=0;l<s;l++)i+=Math.round(e(l/(s-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},zu=2e4;function th(e){let n=0;const t=50;let i=e.next(n);for(;!i.done&&n<zu;)n+=t,i=e.next(n);return n>=zu?1/0:n}function bP(e,n=100,t){const i=t({...e,keyframes:[0,n]}),s=Math.min(th(i),zu);return{type:"keyframes",ease:l=>i.next(s*l).value/n,duration:mr(s)}}const wP=5;function Lw(e,n,t){const i=Math.max(n-wP,0);return pw(t-e(i),n-i)}const an={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},mk=.001;function xP({duration:e=an.duration,bounce:n=an.bounce,velocity:t=an.velocity,mass:i=an.mass}){let s,l,o=1-n;o=Ir(an.minDamping,an.maxDamping,o),e=Ir(an.minDuration,an.maxDuration,mr(e)),o<1?(s=m=>{const y=m*o,u=y*e,h=y-t,g=$f(m,o),z=Math.exp(-u);return mk-h/g*z},l=m=>{const u=m*o*e,h=u*t+t,g=Math.pow(o,2)*Math.pow(m,2)*e,z=Math.exp(-u),b=$f(Math.pow(m,2),o);return(-s(m)+mk>0?-1:1)*((h-g)*z)/b}):(s=m=>{const y=Math.exp(-m*e),u=(m-t)*e+1;return-.001+y*u},l=m=>{const y=Math.exp(-m*e),u=(t-m)*(e*e);return y*u});const d=5/e,f=SP(s,l,d);if(e=fr(e),isNaN(f))return{stiffness:an.stiffness,damping:an.damping,duration:e};{const m=Math.pow(f,2)*i;return{stiffness:m,damping:o*2*Math.sqrt(i*m),duration:e}}}const jP=12;function SP(e,n,t){let i=t;for(let s=1;s<jP;s++)i=i-e(i)/n(i);return i}function $f(e,n){return e*Math.sqrt(1-n*n)}const CP=["duration","bounce"],_P=["stiffness","damping","mass"];function hk(e,n){return n.some(t=>e[t]!==void 0)}function TP(e){let n={velocity:an.velocity,stiffness:an.stiffness,damping:an.damping,mass:an.mass,isResolvedFromDuration:!1,...e};if(!hk(e,_P)&&hk(e,CP))if(e.visualDuration){const t=e.visualDuration,i=2*Math.PI/(t*1.2),s=i*i,l=2*Ir(.05,1,1-(e.bounce||0))*Math.sqrt(s);n={...n,mass:an.mass,stiffness:s,damping:l}}else{const t=xP(e);n={...n,...t,mass:an.mass},n.isResolvedFromDuration=!0}return n}function bu(e=an.visualDuration,n=an.bounce){const t=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:i,restDelta:s}=t;const l=t.keyframes[0],o=t.keyframes[t.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:m,mass:y,duration:u,velocity:h,isResolvedFromDuration:g}=TP({...t,velocity:-mr(t.velocity||0)}),z=h||0,b=m/(2*Math.sqrt(f*y)),x=o-l,w=mr(Math.sqrt(f/y)),S=Math.abs(x)<5;i||(i=S?an.restSpeed.granular:an.restSpeed.default),s||(s=S?an.restDelta.granular:an.restDelta.default);let C;if(b<1){const D=$f(w,b);C=P=>{const $=Math.exp(-b*w*P);return o-$*((z+b*w*x)/D*Math.sin(D*P)+x*Math.cos(D*P))}}else if(b===1)C=D=>o-Math.exp(-w*D)*(x+(z+w*x)*D);else{const D=w*Math.sqrt(b*b-1);C=P=>{const $=Math.exp(-b*w*P),Y=Math.min(D*P,300);return o-$*((z+b*w*x)*Math.sinh(Y)+D*x*Math.cosh(Y))/D}}const R={calculatedDuration:g&&u||null,next:D=>{const P=C(D);if(g)d.done=D>=u;else{let $=D===0?z:0;b<1&&($=D===0?fr(z):Lw(C,D,P));const Y=Math.abs($)<=i,K=Math.abs(o-P)<=s;d.done=Y&&K}return d.value=d.done?o:P,d},toString:()=>{const D=Math.min(th(R),zu),P=Dw($=>R.next(D*$).value,D,30);return D+"ms "+P},toTransition:()=>{}};return R}bu.applyToOptions=e=>{const n=bP(e,100,bu);return e.ease=n.ease,e.duration=fr(n.duration),e.type="keyframes",e};function Hf({keyframes:e,velocity:n=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:o,min:d,max:f,restDelta:m=.5,restSpeed:y}){const u=e[0],h={done:!1,value:u},g=Y=>d!==void 0&&Y<d||f!==void 0&&Y>f,z=Y=>d===void 0?f:f===void 0||Math.abs(d-Y)<Math.abs(f-Y)?d:f;let b=t*n;const x=u+b,w=o===void 0?x:o(x);w!==x&&(b=w-u);const S=Y=>-b*Math.exp(-Y/i),C=Y=>w+S(Y),R=Y=>{const K=S(Y),L=C(Y);h.done=Math.abs(K)<=m,h.value=h.done?w:L};let D,P;const $=Y=>{g(h.value)&&(D=Y,P=bu({keyframes:[h.value,z(h.value)],velocity:Lw(C,Y,h.value),damping:s,stiffness:l,restDelta:m,restSpeed:y}))};return $(0),{calculatedDuration:null,next:Y=>{let K=!1;return!P&&D===void 0&&(K=!0,R(Y),$(Y)),D!==void 0&&Y>=D?P.next(Y-D):(!K&&R(Y),h)}}}function EP(e,n,t){const i=[],s=t||Mr.mix||Mw,l=e.length-1;for(let o=0;o<l;o++){let d=s(e[o],e[o+1]);if(n){const f=Array.isArray(n)?n[o]||Tt:n;d=Co(f,d)}i.push(d)}return i}function AP(e,n,{clamp:t=!0,ease:i,mixer:s}={}){const l=e.length;if(qm(l===n.length),l===1)return()=>n[0];if(l===2&&n[0]===n[1])return()=>n[1];const o=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),n=[...n].reverse());const d=EP(n,i,s),f=d.length,m=y=>{if(o&&y<e[0])return n[0];let u=0;if(f>1)for(;u<e.length-2&&!(y<e[u+1]);u++);const h=fo(e[u],e[u+1],y);return d[u](h)};return t?y=>m(Ir(e[0],e[l-1],y)):m}function PP(e,n){const t=e[e.length-1];for(let i=1;i<=n;i++){const s=fo(0,n,i);e.push(nn(t,1,s))}}function RP(e){const n=[0];return PP(n,e.length-1),n}function IP(e,n){return e.map(t=>t*n)}function MP(e,n){return e.map(()=>n||jw).splice(0,e.length-1)}function Js({duration:e=300,keyframes:n,times:t,ease:i="easeInOut"}){const s=WA(i)?i.map(lk):lk(i),l={done:!1,value:n[0]},o=IP(t&&t.length===n.length?t:RP(n),e),d=AP(o,n,{ease:Array.isArray(s)?s:MP(n,s)});return{calculatedDuration:e,next:f=>(l.value=d(f),l.done=f>=e,l)}}const DP=e=>e!==null;function rh(e,{repeat:n,repeatType:t="loop"},i,s=1){const l=e.filter(DP),d=s<0||n&&t!=="loop"&&n%2===1?0:l.length-1;return!d||i===void 0?l[d]:i}const LP={decay:Hf,inertia:Hf,tween:Js,keyframes:Js,spring:bu};function Ow(e){typeof e.type=="string"&&(e.type=LP[e.type])}class ih{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,t){return this.finished.then(n,t)}}const OP=e=>e/100;class ah extends ih{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,s;const{motionValue:t}=this.options;t&&t.updatedAt!==it.now()&&this.tick(it.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(i=this.options).onStop)==null||s.call(i))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Ow(n);const{type:t=Js,repeat:i=0,repeatDelay:s=0,repeatType:l,velocity:o=0}=n;let{keyframes:d}=n;const f=t||Js;f!==Js&&typeof d[0]!="number"&&(this.mixKeyframes=Co(OP,Mw(d[0],d[1])),d=[0,100]);const m=f({...n,keyframes:d});l==="mirror"&&(this.mirroredGenerator=f({...n,keyframes:[...d].reverse(),velocity:-o})),m.calculatedDuration===null&&(m.calculatedDuration=th(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=m}updateTime(n){const t=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(n,t=!1){const{generator:i,totalDuration:s,mixKeyframes:l,mirroredGenerator:o,resolvedDuration:d,calculatedDuration:f}=this;if(this.startTime===null)return i.next(0);const{delay:m=0,keyframes:y,repeat:u,repeatType:h,repeatDelay:g,type:z,onUpdate:b,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-s/this.speed,this.startTime)),t?this.currentTime=n:this.updateTime(n);const w=this.currentTime-m*(this.playbackSpeed>=0?1:-1),S=this.playbackSpeed>=0?w<0:w>s;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let C=this.currentTime,R=i;if(u){const Y=Math.min(this.currentTime,s)/d;let K=Math.floor(Y),L=Y%1;!L&&Y>=1&&(L=1),L===1&&K--,K=Math.min(K,u+1),!!(K%2)&&(h==="reverse"?(L=1-L,g&&(L-=g/d)):h==="mirror"&&(R=o)),C=Ir(0,1,L)*d}const D=S?{done:!1,value:y[0]}:R.next(C);l&&(D.value=l(D.value));let{done:P}=D;!S&&f!==null&&(P=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return $&&z!==Hf&&(D.value=rh(y,this.options,x,this.speed)),b&&b(D.value),$&&this.finish(),D}then(n,t){return this.finished.then(n,t)}get duration(){return mr(this.calculatedDuration)}get time(){return mr(this.currentTime)}set time(n){var t;n=fr(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),(t=this.driver)==null||t.start(!1)}get speed(){return this.playbackSpeed}set speed(n){this.updateTime(it.now());const t=this.playbackSpeed!==n;this.playbackSpeed=n,t&&(this.time=mr(this.currentTime))}play(){var s,l;if(this.isStopped)return;const{driver:n=zP,startTime:t}=this.options;this.driver||(this.driver=n(o=>this.tick(o))),(l=(s=this.options).onPlay)==null||l.call(s);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(it.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(n=this.options).onComplete)==null||t.call(n)}cancel(){var n,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(n=this.options).onCancel)==null||t.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),n.observe(this)}}function NP(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const Fi=e=>e*180/Math.PI,Wf=e=>{const n=Fi(Math.atan2(e[1],e[0]));return qf(n)},FP={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Wf,rotateZ:Wf,skewX:e=>Fi(Math.atan(e[1])),skewY:e=>Fi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},qf=e=>(e=e%360,e<0&&(e+=360),e),pk=Wf,gk=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),yk=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),VP={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:gk,scaleY:yk,scale:e=>(gk(e)+yk(e))/2,rotateX:e=>qf(Fi(Math.atan2(e[6],e[5]))),rotateY:e=>qf(Fi(Math.atan2(-e[2],e[0]))),rotateZ:pk,rotate:pk,skewX:e=>Fi(Math.atan(e[4])),skewY:e=>Fi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Kf(e){return e.includes("scale")?1:0}function Gf(e,n){if(!e||e==="none")return Kf(n);const t=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,s;if(t)i=VP,s=t;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=FP,s=d}if(!s)return Kf(n);const l=i[n],o=s[1].split(",").map(UP);return typeof l=="function"?l(o):o[l]}const BP=(e,n)=>{const{transform:t="none"}=getComputedStyle(e);return Gf(t,n)};function UP(e){return parseFloat(e.trim())}const ts=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],rs=new Set(ts),kk=e=>e===ns||e===xe,$P=new Set(["x","y","z"]),HP=ts.filter(e=>!$P.has(e));function WP(e){const n=[];return HP.forEach(t=>{const i=e.getValue(t);i!==void 0&&(n.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),n}const Wi={width:({x:e},{paddingLeft:n="0",paddingRight:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),height:({y:e},{paddingTop:n="0",paddingBottom:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Gf(n,"x"),y:(e,{transform:n})=>Gf(n,"y")};Wi.translateX=Wi.x;Wi.translateY=Wi.y;const qi=new Set;let Qf=!1,Yf=!1,Xf=!1;function Nw(){if(Yf){const e=Array.from(qi).filter(i=>i.needsMeasurement),n=new Set(e.map(i=>i.element)),t=new Map;n.forEach(i=>{const s=WP(i);s.length&&(t.set(i,s),i.render())}),e.forEach(i=>i.measureInitialState()),n.forEach(i=>{i.render();const s=t.get(i);s&&s.forEach(([l,o])=>{var d;(d=i.getValue(l))==null||d.set(o)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Yf=!1,Qf=!1,qi.forEach(e=>e.complete(Xf)),qi.clear()}function Fw(){qi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Yf=!0)})}function qP(){Xf=!0,Fw(),Nw(),Xf=!1}class sh{constructor(n,t,i,s,l,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=t,this.name=i,this.motionValue=s,this.element=l,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(qi.add(this),Qf||(Qf=!0,Je.read(Fw),Je.resolveKeyframes(Nw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:t,element:i,motionValue:s}=this;if(n[0]===null){const l=s==null?void 0:s.get(),o=n[n.length-1];if(l!==void 0)n[0]=l;else if(i&&t){const d=i.readValue(t,o);d!=null&&(n[0]=d)}n[0]===void 0&&(n[0]=o),s&&l===void 0&&s.set(n[0])}NP(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),qi.delete(this)}cancel(){this.state==="scheduled"&&(qi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const KP=e=>e.startsWith("--");function GP(e,n,t){KP(n)?e.style.setProperty(n,t):e.style[n]=t}const QP=Km(()=>window.ScrollTimeline!==void 0),YP={};function XP(e,n){const t=Km(e);return()=>YP[n]??t()}const Vw=XP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Qs=([e,n,t,i])=>`cubic-bezier(${e}, ${n}, ${t}, ${i})`,vk={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qs([0,.65,.55,1]),circOut:Qs([.55,0,1,.45]),backIn:Qs([.31,.01,.66,-.59]),backOut:Qs([.33,1.53,.69,.99])};function Bw(e,n){if(e)return typeof e=="function"?Vw()?Dw(e,n):"ease-out":Sw(e)?Qs(e):Array.isArray(e)?e.map(t=>Bw(t,n)||vk.easeOut):vk[e]}function JP(e,n,t,{delay:i=0,duration:s=300,repeat:l=0,repeatType:o="loop",ease:d="easeOut",times:f}={},m=void 0){const y={[n]:t};f&&(y.offset=f);const u=Bw(d,s);Array.isArray(u)&&(y.easing=u);const h={delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:l+1,direction:o==="reverse"?"alternate":"normal"};return m&&(h.pseudoElement=m),e.animate(y,h)}function Uw(e){return typeof e=="function"&&"applyToOptions"in e}function ZP({type:e,...n}){return Uw(e)&&Vw()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class eR extends ih{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,!n)return;const{element:t,name:i,keyframes:s,pseudoElement:l,allowFlatten:o=!1,finalKeyframe:d,onComplete:f}=n;this.isPseudoElement=!!l,this.allowFlatten=o,this.options=n,qm(typeof n.type!="string");const m=ZP(n);this.animation=JP(t,i,s,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const y=rh(s,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(y):GP(t,i,y),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,t;(t=(n=this.animation).finish)==null||t.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,t;this.isPseudoElement||(t=(n=this.animation).commitStyles)==null||t.call(n)}get duration(){var t,i;const n=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return mr(Number(n))}get time(){return mr(Number(this.animation.currentTime)||0)}set time(n){this.finishedTime=null,this.animation.currentTime=fr(n)}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(n){this.animation.startTime=n}attachTimeline({timeline:n,observe:t}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&QP()?(this.animation.timeline=n,Tt):t(this)}}const $w={anticipate:bw,backInOut:zw,circInOut:xw};function nR(e){return e in $w}function tR(e){typeof e.ease=="string"&&nR(e.ease)&&(e.ease=$w[e.ease])}const zk=10;class rR extends eR{constructor(n){tR(n),Ow(n),super(n),n.startTime&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:t,onUpdate:i,onComplete:s,element:l,...o}=this.options;if(!t)return;if(n!==void 0){t.set(n);return}const d=new ah({...o,autoplay:!1}),f=fr(this.finishedTime??this.time);t.setWithVelocity(d.sample(f-zk).value,d.sample(f).value,zk),d.stop()}}const bk=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(vi.test(e)||e==="0")&&!e.startsWith("url("));function iR(e){const n=e[0];if(e.length===1)return!0;for(let t=0;t<e.length;t++)if(e[t]!==n)return!0}function aR(e,n,t,i){const s=e[0];if(s===null)return!1;if(n==="display"||n==="visibility")return!0;const l=e[e.length-1],o=bk(s,n),d=bk(l,n);return!o||!d?!1:iR(e)||(t==="spring"||Uw(t))&&i}function Jf(e){e.duration=0,e.type}const sR=new Set(["opacity","clipPath","filter","transform"]),oR=Km(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function lR(e){var y;const{motionValue:n,name:t,repeatDelay:i,repeatType:s,damping:l,type:o}=e;if(!(((y=n==null?void 0:n.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:m}=n.owner.getProps();return oR()&&t&&sR.has(t)&&(t!=="transform"||!m)&&!f&&!i&&s!=="mirror"&&l!==0&&o!=="inertia"}const uR=40;class cR extends ih{constructor({autoplay:n=!0,delay:t=0,type:i="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:o="loop",keyframes:d,name:f,motionValue:m,element:y,...u}){var z;super(),this.stop=()=>{var b,x;this._animation&&(this._animation.stop(),(b=this.stopTimeline)==null||b.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=it.now();const h={autoplay:n,delay:t,type:i,repeat:s,repeatDelay:l,repeatType:o,name:f,motionValue:m,element:y,...u},g=(y==null?void 0:y.KeyframeResolver)||sh;this.keyframeResolver=new g(d,(b,x,w)=>this.onKeyframesResolved(b,x,h,!w),f,m,y),(z=this.keyframeResolver)==null||z.scheduleResolve()}onKeyframesResolved(n,t,i,s){this.keyframeResolver=void 0;const{name:l,type:o,velocity:d,delay:f,isHandoff:m,onUpdate:y}=i;this.resolvedAt=it.now(),aR(n,l,o,d)||((Mr.instantAnimations||!f)&&(y==null||y(rh(n,i,t))),n[0]=n[n.length-1],Jf(i),i.repeat=0);const h={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>uR?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:n},g=!m&&lR(h)?new rR({...h,element:h.motionValue.owner.current}):new ah(h);g.finished.then(()=>this.notifyFinished()).catch(Tt),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(n,t){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),qP()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}const dR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function fR(e){const n=dR.exec(e);if(!n)return[,];const[,t,i,s]=n;return[`--${t??i}`,s]}function Hw(e,n,t=1){const[i,s]=fR(e);if(!i)return;const l=window.getComputedStyle(n).getPropertyValue(i);if(l){const o=l.trim();return fw(o)?parseFloat(o):o}return Jm(s)?Hw(s,n,t+1):s}function oh(e,n){return(e==null?void 0:e[n])??(e==null?void 0:e.default)??e}const Ww=new Set(["width","height","top","left","right","bottom",...ts]),mR={test:e=>e==="auto",parse:e=>e},qw=e=>n=>n.test(e),Kw=[ns,xe,hr,oi,iP,rP,mR],wk=e=>Kw.find(qw(e));function hR(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||hw(e):!0}const pR=new Set(["brightness","contrast","saturate","opacity"]);function gR(e){const[n,t]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[i]=t.match(Zm)||[];if(!i)return e;const s=t.replace(i,"");let l=pR.has(n)?1:0;return i!==t&&(l*=100),n+"("+l+s+")"}const yR=/\b([a-z-]*)\(.*?\)/gu,Zf={...vi,getAnimatableNone:e=>{const n=e.match(yR);return n?n.map(gR).join(" "):e}},xk={...ns,transform:Math.round},kR={rotate:oi,rotateX:oi,rotateY:oi,rotateZ:oi,scale:Ql,scaleX:Ql,scaleY:Ql,scaleZ:Ql,skew:oi,skewX:oi,skewY:oi,distance:xe,translateX:xe,translateY:xe,translateZ:xe,x:xe,y:xe,z:xe,perspective:xe,transformPerspective:xe,opacity:mo,originX:uk,originY:uk,originZ:xe},lh={borderWidth:xe,borderTopWidth:xe,borderRightWidth:xe,borderBottomWidth:xe,borderLeftWidth:xe,borderRadius:xe,radius:xe,borderTopLeftRadius:xe,borderTopRightRadius:xe,borderBottomRightRadius:xe,borderBottomLeftRadius:xe,width:xe,maxWidth:xe,height:xe,maxHeight:xe,top:xe,right:xe,bottom:xe,left:xe,padding:xe,paddingTop:xe,paddingRight:xe,paddingBottom:xe,paddingLeft:xe,margin:xe,marginTop:xe,marginRight:xe,marginBottom:xe,marginLeft:xe,backgroundPositionX:xe,backgroundPositionY:xe,...kR,zIndex:xk,fillOpacity:mo,strokeOpacity:mo,numOctaves:xk},vR={...lh,color:fn,backgroundColor:fn,outlineColor:fn,fill:fn,stroke:fn,borderColor:fn,borderTopColor:fn,borderRightColor:fn,borderBottomColor:fn,borderLeftColor:fn,filter:Zf,WebkitFilter:Zf},Gw=e=>vR[e];function Qw(e,n){let t=Gw(e);return t!==Zf&&(t=vi),t.getAnimatableNone?t.getAnimatableNone(n):void 0}const zR=new Set(["auto","none","0"]);function bR(e,n,t){let i=0,s;for(;i<e.length&&!s;){const l=e[i];typeof l=="string"&&!zR.has(l)&&ho(l).values.length&&(s=e[i]),i++}if(s&&t)for(const l of n)e[l]=Qw(t,s)}class wR extends sh{constructor(n,t,i,s,l){super(n,t,i,s,l,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<n.length;f++){let m=n[f];if(typeof m=="string"&&(m=m.trim(),Jm(m))){const y=Hw(m,t.current);y!==void 0&&(n[f]=y),f===n.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Ww.has(i)||n.length!==2)return;const[s,l]=n,o=wk(s),d=wk(l);if(o!==d)if(kk(o)&&kk(d))for(let f=0;f<n.length;f++){const m=n[f];typeof m=="string"&&(n[f]=parseFloat(m))}else Wi[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:t}=this,i=[];for(let s=0;s<n.length;s++)(n[s]===null||hR(n[s]))&&i.push(s);i.length&&bR(n,i,t)}measureInitialState(){const{element:n,unresolvedKeyframes:t,name:i}=this;if(!n||!n.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wi[i](n.measureViewportBox(),window.getComputedStyle(n.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&n.getValue(i,s).jump(s,!1)}measureEndState(){var d;const{element:n,name:t,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(t);s&&s.jump(this.measuredOrigin,!1);const l=i.length-1,o=i[l];i[l]=Wi[t](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([f,m])=>{n.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function xR(e,n,t){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let i=document;const s=(t==null?void 0:t[e])??i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}const Yw=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function jR(e){return mw(e)&&"offsetHeight"in e}const jk=30,SR=e=>!isNaN(parseFloat(e));class CR{constructor(n,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var l;const s=it.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=t.owner}setCurrent(n){this.current=n,this.updatedAt=it.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=SR(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,t){this.events[n]||(this.events[n]=new Gm);const i=this.events[n].add(t);return n==="change"?()=>{i(),Je.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,t){this.passiveEffect=n,this.stopPassiveEffect=t}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-i}jump(n,t=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=it.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>jk)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,jk);return pw(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(n){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=n(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,t;(n=this.dependents)==null||n.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qa(e,n){return new CR(e,n)}const{schedule:uh}=Cw(queueMicrotask,!1),Ut={x:!1,y:!1};function Xw(){return Ut.x||Ut.y}function _R(e){return e==="x"||e==="y"?Ut[e]?null:(Ut[e]=!0,()=>{Ut[e]=!1}):Ut.x||Ut.y?null:(Ut.x=Ut.y=!0,()=>{Ut.x=Ut.y=!1})}function Jw(e,n){const t=xR(e),i=new AbortController,s={passive:!0,...n,signal:i.signal};return[t,s,()=>i.abort()]}function Sk(e){return!(e.pointerType==="touch"||Xw())}function TR(e,n,t={}){const[i,s,l]=Jw(e,t),o=d=>{if(!Sk(d))return;const{target:f}=d,m=n(f,d);if(typeof m!="function"||!f)return;const y=u=>{Sk(u)&&(m(u),f.removeEventListener("pointerleave",y))};f.addEventListener("pointerleave",y,s)};return i.forEach(d=>{d.addEventListener("pointerenter",o,s)}),l}const Zw=(e,n)=>n?e===n?!0:Zw(e,n.parentElement):!1,ch=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,ER=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function AR(e){return ER.has(e.tagName)||e.tabIndex!==-1}const lu=new WeakSet;function Ck(e){return n=>{n.key==="Enter"&&e(n)}}function Qd(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const PR=(e,n)=>{const t=e.currentTarget;if(!t)return;const i=Ck(()=>{if(lu.has(t))return;Qd(t,"down");const s=Ck(()=>{Qd(t,"up")}),l=()=>Qd(t,"cancel");t.addEventListener("keyup",s,n),t.addEventListener("blur",l,n)});t.addEventListener("keydown",i,n),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),n)};function _k(e){return ch(e)&&!Xw()}function RR(e,n,t={}){const[i,s,l]=Jw(e,t),o=d=>{const f=d.currentTarget;if(!_k(d))return;lu.add(f);const m=n(f,d),y=(g,z)=>{window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",h),lu.has(f)&&lu.delete(f),_k(g)&&typeof m=="function"&&m(g,{success:z})},u=g=>{y(g,f===window||f===document||t.useGlobalTarget||Zw(f,g.target))},h=g=>{y(g,!1)};window.addEventListener("pointerup",u,s),window.addEventListener("pointercancel",h,s)};return i.forEach(d=>{(t.useGlobalTarget?window:d).addEventListener("pointerdown",o,s),jR(d)&&(d.addEventListener("focus",m=>PR(m,s)),!AR(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function ex(e){return mw(e)&&"ownerSVGElement"in e}function IR(e){return ex(e)&&e.tagName==="svg"}const Mn=e=>!!(e&&e.getVelocity),MR=[...Kw,fn,vi],DR=e=>MR.find(qw(e)),nx=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function LR(e=!0){const n=_.useContext($m);if(n===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:s}=n,l=_.useId();_.useEffect(()=>{if(e)return s(l)},[e]);const o=_.useCallback(()=>e&&i&&i(l),[l,i,e]);return!t&&i?[!1,o]:[!0]}const tx=_.createContext({strict:!1}),Tk={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ya={};for(const e in Tk)Ya[e]={isEnabled:n=>Tk[e].some(t=>!!n[t])};function OR(e){for(const n in e)Ya[n]={...Ya[n],...e[n]}}const NR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||NR.has(e)}let rx=e=>!wu(e);function FR(e){typeof e=="function"&&(rx=n=>n.startsWith("on")?!wu(n):e(n))}try{FR(require("@emotion/is-prop-valid").default)}catch{}function VR(e,n,t){const i={};for(const s in e)s==="values"&&typeof e.values=="object"||(rx(s)||t===!0&&wu(s)||!n&&!wu(s)||e.draggable&&s.startsWith("onDrag"))&&(i[s]=e[s]);return i}const Uu=_.createContext({});function $u(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function po(e){return typeof e=="string"||Array.isArray(e)}const dh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],fh=["initial",...dh];function Hu(e){return $u(e.animate)||fh.some(n=>po(e[n]))}function ix(e){return!!(Hu(e)||e.variants)}function BR(e,n){if(Hu(e)){const{initial:t,animate:i}=e;return{initial:t===!1||po(t)?t:void 0,animate:po(i)?i:void 0}}return e.inherit!==!1?n:{}}function UR(e){const{initial:n,animate:t}=BR(e,_.useContext(Uu));return _.useMemo(()=>({initial:n,animate:t}),[Ek(n),Ek(t)])}function Ek(e){return Array.isArray(e)?e.join(" "):e}const go={};function $R(e){for(const n in e)go[n]=e[n],Xm(n)&&(go[n].isCSSVariable=!0)}function ax(e,{layout:n,layoutId:t}){return rs.has(e)||e.startsWith("origin")||(n||t!==void 0)&&(!!go[e]||e==="opacity")}const HR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},WR=ts.length;function qR(e,n,t){let i="",s=!0;for(let l=0;l<WR;l++){const o=ts[l],d=e[o];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(o.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||t){const m=Yw(d,lh[o]);if(!f){s=!1;const y=HR[o]||o;i+=`${y}(${m}) `}t&&(n[o]=m)}}return i=i.trim(),t?i=t(n,s?"":i):s&&(i="none"),i}function mh(e,n,t){const{style:i,vars:s,transformOrigin:l}=e;let o=!1,d=!1;for(const f in n){const m=n[f];if(rs.has(f)){o=!0;continue}else if(Xm(f)){s[f]=m;continue}else{const y=Yw(m,lh[f]);f.startsWith("origin")?(d=!0,l[f]=y):i[f]=y}}if(n.transform||(o||t?i.transform=qR(n,e.transform,t):i.transform&&(i.transform="none")),d){const{originX:f="50%",originY:m="50%",originZ:y=0}=l;i.transformOrigin=`${f} ${m} ${y}`}}const hh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sx(e,n,t){for(const i in n)!Mn(n[i])&&!ax(i,t)&&(e[i]=n[i])}function KR({transformTemplate:e},n){return _.useMemo(()=>{const t=hh();return mh(t,n,e),Object.assign({},t.vars,t.style)},[n])}function GR(e,n){const t=e.style||{},i={};return sx(i,t,e),Object.assign(i,KR(e,n)),i}function QR(e,n){const t={},i=GR(e,n);return e.drag&&e.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(t.tabIndex=0),t.style=i,t}const YR={offset:"stroke-dashoffset",array:"stroke-dasharray"},XR={offset:"strokeDashoffset",array:"strokeDasharray"};function JR(e,n,t=1,i=0,s=!0){e.pathLength=1;const l=s?YR:XR;e[l.offset]=xe.transform(-i);const o=xe.transform(n),d=xe.transform(t);e[l.array]=`${o} ${d}`}function ox(e,{attrX:n,attrY:t,attrScale:i,pathLength:s,pathSpacing:l=1,pathOffset:o=0,...d},f,m,y){if(mh(e,d,m),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:u,style:h}=e;u.transform&&(h.transform=u.transform,delete u.transform),(h.transform||u.transformOrigin)&&(h.transformOrigin=u.transformOrigin??"50% 50%",delete u.transformOrigin),h.transform&&(h.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete u.transformBox),n!==void 0&&(u.x=n),t!==void 0&&(u.y=t),i!==void 0&&(u.scale=i),s!==void 0&&JR(u,s,l,o,!1)}const lx=()=>({...hh(),attrs:{}}),ux=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ZR(e,n,t,i){const s=_.useMemo(()=>{const l=lx();return ox(l,n,ux(i),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[n]);if(e.style){const l={};sx(l,e.style,e),s.style={...l,...s.style}}return s}const eI=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ph(e){return typeof e!="string"||e.includes("-")?!1:!!(eI.indexOf(e)>-1||/[A-Z]/u.test(e))}function nI(e,n,t,{latestValues:i},s,l=!1){const d=(ph(e)?ZR:QR)(n,i,s,e),f=VR(n,typeof e=="string",l),m=e!==_.Fragment?{...f,...d,ref:t}:{},{children:y}=n,u=_.useMemo(()=>Mn(y)?y.get():y,[y]);return _.createElement(e,{...m,children:u})}function Ak(e){const n=[{},{}];return e==null||e.values.forEach((t,i)=>{n[0][i]=t.get(),n[1][i]=t.getVelocity()}),n}function gh(e,n,t,i){if(typeof n=="function"){const[s,l]=Ak(i);n=n(t!==void 0?t:e.custom,s,l)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[s,l]=Ak(i);n=n(t!==void 0?t:e.custom,s,l)}return n}function uu(e){return Mn(e)?e.get():e}function tI({scrapeMotionValuesFromProps:e,createRenderState:n},t,i,s){return{latestValues:rI(t,i,s,e),renderState:n()}}function rI(e,n,t,i){const s={},l=i(e,{});for(const h in l)s[h]=uu(l[h]);let{initial:o,animate:d}=e;const f=Hu(e),m=ix(e);n&&m&&!f&&e.inherit!==!1&&(o===void 0&&(o=n.initial),d===void 0&&(d=n.animate));let y=t?t.initial===!1:!1;y=y||o===!1;const u=y?d:o;if(u&&typeof u!="boolean"&&!$u(u)){const h=Array.isArray(u)?u:[u];for(let g=0;g<h.length;g++){const z=gh(e,h[g]);if(z){const{transitionEnd:b,transition:x,...w}=z;for(const S in w){let C=w[S];if(Array.isArray(C)){const R=y?C.length-1:0;C=C[R]}C!==null&&(s[S]=C)}for(const S in b)s[S]=b[S]}}}return s}const cx=e=>(n,t)=>{const i=_.useContext(Uu),s=_.useContext($m),l=()=>tI(e,n,i,s);return t?l():OA(l)};function yh(e,n,t){var l;const{style:i}=e,s={};for(const o in i)(Mn(i[o])||n.style&&Mn(n.style[o])||ax(o,e)||((l=t==null?void 0:t.getValue(o))==null?void 0:l.liveStyle)!==void 0)&&(s[o]=i[o]);return s}const iI=cx({scrapeMotionValuesFromProps:yh,createRenderState:hh});function dx(e,n,t){const i=yh(e,n,t);for(const s in e)if(Mn(e[s])||Mn(n[s])){const l=ts.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[l]=e[s]}return i}const aI=cx({scrapeMotionValuesFromProps:dx,createRenderState:lx}),sI=Symbol.for("motionComponentSymbol");function Aa(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function oI(e,n,t){return _.useCallback(i=>{i&&e.onMount&&e.onMount(i),n&&(i?n.mount(i):n.unmount()),t&&(typeof t=="function"?t(i):Aa(t)&&(t.current=i))},[n])}const kh=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),lI="framerAppearId",fx="data-"+kh(lI),mx=_.createContext({});function uI(e,n,t,i,s){var b,x;const{visualElement:l}=_.useContext(Uu),o=_.useContext(tx),d=_.useContext($m),f=_.useContext(nx).reducedMotion,m=_.useRef(null);i=i||o.renderer,!m.current&&i&&(m.current=i(e,{visualState:n,parent:l,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:f}));const y=m.current,u=_.useContext(mx);y&&!y.projection&&s&&(y.type==="html"||y.type==="svg")&&cI(m.current,t,s,u);const h=_.useRef(!1);_.useInsertionEffect(()=>{y&&h.current&&y.update(t,d)});const g=t[fx],z=_.useRef(!!g&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,g))&&((x=window.MotionHasOptimisedAnimation)==null?void 0:x.call(window,g)));return NA(()=>{y&&(h.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),z.current&&y.animationState&&y.animationState.animateChanges())}),_.useEffect(()=>{y&&(!z.current&&y.animationState&&y.animationState.animateChanges(),z.current&&(queueMicrotask(()=>{var w;(w=window.MotionHandoffMarkAsComplete)==null||w.call(window,g)}),z.current=!1),y.enteringChildren=void 0)}),y}function cI(e,n,t,i){const{layoutId:s,layout:l,drag:o,dragConstraints:d,layoutScroll:f,layoutRoot:m,layoutCrossfade:y}=n;e.projection=new t(e.latestValues,n["data-framer-portal-id"]?void 0:hx(e.parent)),e.projection.setOptions({layoutId:s,layout:l,alwaysMeasureLayout:!!o||d&&Aa(d),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,crossfade:y,layoutScroll:f,layoutRoot:m})}function hx(e){if(e)return e.options.allowProjection!==!1?e.projection:hx(e.parent)}function Yd(e,{forwardMotionProps:n=!1}={},t,i){t&&OR(t);const s=ph(e)?aI:iI;function l(d,f){let m;const y={..._.useContext(nx),...d,layoutId:dI(d)},{isStatic:u}=y,h=UR(d),g=s(d,u);if(!u&&Um){fI();const z=mI(y);m=z.MeasureLayout,h.visualElement=uI(e,g,y,i,z.ProjectionNode)}return O.jsxs(Uu.Provider,{value:h,children:[m&&h.visualElement?O.jsx(m,{visualElement:h.visualElement,...y}):null,nI(e,d,oI(g,h.visualElement,f),g,u,n)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const o=_.forwardRef(l);return o[sI]=e,o}function dI({layoutId:e}){const n=_.useContext(dw).id;return n&&e!==void 0?n+"-"+e:e}function fI(e,n){_.useContext(tx).strict}function mI(e){const{drag:n,layout:t}=Ya;if(!n&&!t)return{};const i={...n,...t};return{MeasureLayout:n!=null&&n.isEnabled(e)||t!=null&&t.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function hI(e,n){if(typeof Proxy>"u")return Yd;const t=new Map,i=(l,o)=>Yd(l,o,e,n),s=(l,o)=>i(l,o);return new Proxy(s,{get:(l,o)=>o==="create"?i:(t.has(o)||t.set(o,Yd(o,void 0,e,n)),t.get(o))})}function px({top:e,left:n,right:t,bottom:i}){return{x:{min:n,max:t},y:{min:e,max:i}}}function pI({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function gI(e,n){if(!n)return e;const t=n({x:e.left,y:e.top}),i=n({x:e.right,y:e.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Xd(e){return e===void 0||e===1}function em({scale:e,scaleX:n,scaleY:t}){return!Xd(e)||!Xd(n)||!Xd(t)}function Oi(e){return em(e)||gx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function gx(e){return Pk(e.x)||Pk(e.y)}function Pk(e){return e&&e!=="0%"}function xu(e,n,t){const i=e-t,s=n*i;return t+s}function Rk(e,n,t,i,s){return s!==void 0&&(e=xu(e,s,i)),xu(e,t,i)+n}function nm(e,n=0,t=1,i,s){e.min=Rk(e.min,n,t,i,s),e.max=Rk(e.max,n,t,i,s)}function yx(e,{x:n,y:t}){nm(e.x,n.translate,n.scale,n.originPoint),nm(e.y,t.translate,t.scale,t.originPoint)}const Ik=.999999999999,Mk=1.0000000000001;function yI(e,n,t,i=!1){const s=t.length;if(!s)return;n.x=n.y=1;let l,o;for(let d=0;d<s;d++){l=t[d],o=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(i&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Ra(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),o&&(n.x*=o.x.scale,n.y*=o.y.scale,yx(e,o)),i&&Oi(l.latestValues)&&Ra(e,l.latestValues))}n.x<Mk&&n.x>Ik&&(n.x=1),n.y<Mk&&n.y>Ik&&(n.y=1)}function Pa(e,n){e.min=e.min+n,e.max=e.max+n}function Dk(e,n,t,i,s=.5){const l=nn(e.min,e.max,s);nm(e,n,t,l,i)}function Ra(e,n){Dk(e.x,n.x,n.scaleX,n.scale,n.originX),Dk(e.y,n.y,n.scaleY,n.scale,n.originY)}function kx(e,n){return px(gI(e.getBoundingClientRect(),n))}function kI(e,n,t){const i=kx(e,t),{scroll:s}=n;return s&&(Pa(i.x,s.offset.x),Pa(i.y,s.offset.y)),i}const Lk=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ia=()=>({x:Lk(),y:Lk()}),Ok=()=>({min:0,max:0}),ln=()=>({x:Ok(),y:Ok()}),tm={current:null},vx={current:!1};function vI(){if(vx.current=!0,!!Um)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>tm.current=e.matches;e.addEventListener("change",n),n()}else tm.current=!1}const zI=new WeakMap;function bI(e,n,t){for(const i in n){const s=n[i],l=t[i];if(Mn(s))e.addValue(i,s);else if(Mn(l))e.addValue(i,Qa(s,{owner:e}));else if(l!==s)if(e.hasValue(i)){const o=e.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=e.getStaticValue(i);e.addValue(i,Qa(o!==void 0?o:s,{owner:e}))}}for(const i in t)n[i]===void 0&&e.removeValue(i);return n}const Nk=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class wI{scrapeMotionValuesFromProps(n,t,i){return{}}constructor({parent:n,props:t,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:l,visualState:o},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=sh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=it.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,Je.render(this.render,!1,!0))};const{latestValues:f,renderState:m}=o;this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=m,this.parent=n,this.props=t,this.presenceContext=i,this.depth=n?n.depth+1:0,this.reducedMotionConfig=s,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=Hu(t),this.isVariantNode=ix(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:y,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(const h in u){const g=u[h];f[h]!==void 0&&Mn(g)&&g.set(f[h])}}mount(n){var t;this.current=n,zI.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),vx.current||vI(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:tm.current,(t=this.parent)==null||t.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var n;this.projection&&this.projection.unmount(),ki(this.notifyUpdate),ki(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,t){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const i=rs.has(n);i&&this.onBindTransform&&this.onBindTransform();const s=t.on("change",o=>{this.latestValues[n]=o,this.props.onUpdate&&Je.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,n,t)),this.valueSubscriptions.set(n,()=>{s(),l&&l(),t.owner&&t.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Ya){const t=Ya[n];if(!t)continue;const{isEnabled:i,Feature:s}=t;if(!this.features[n]&&s&&i(this.props)&&(this.features[n]=new s(this)),this.features[n]){const l=this.features[n];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ln()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,t){this.latestValues[n]=t}update(n,t){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Nk.length;i++){const s=Nk[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l="on"+s,o=n[l];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=bI(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(n),()=>t.variantChildren.delete(n)}addValue(n,t){const i=this.values.get(n);t!==i&&(i&&this.removeValue(n),this.bindToMotionValue(n,t),this.values.set(n,t),this.latestValues[n]=t.get())}removeValue(n){this.values.delete(n);const t=this.valueSubscriptions.get(n);t&&(t(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,t){if(this.props.values&&this.props.values[n])return this.props.values[n];let i=this.values.get(n);return i===void 0&&t!==void 0&&(i=Qa(t===null?void 0:t,{owner:this}),this.addValue(n,i)),i}readValue(n,t){let i=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return i!=null&&(typeof i=="string"&&(fw(i)||hw(i))?i=parseFloat(i):!DR(i)&&vi.test(t)&&(i=Qw(n,t)),this.setBaseTarget(n,Mn(i)?i.get():i)),Mn(i)?i.get():i}setBaseTarget(n,t){this.baseTarget[n]=t}getBaseTarget(n){var l;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const o=gh(this.props,t,(l=this.presenceContext)==null?void 0:l.custom);o&&(i=o[n])}if(t&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,n);return s!==void 0&&!Mn(s)?s:this.initialValues[n]!==void 0&&i===void 0?void 0:this.baseTarget[n]}on(n,t){return this.events[n]||(this.events[n]=new Gm),this.events[n].add(t)}notify(n,...t){this.events[n]&&this.events[n].notify(...t)}scheduleRenderMicrotask(){uh.render(this.render)}}class zx extends wI{constructor(){super(...arguments),this.KeyframeResolver=wR}sortInstanceNodePosition(n,t){return n.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(n,t){return n.style?n.style[t]:void 0}removeValueFromRenderState(n,{vars:t,style:i}){delete t[n],delete i[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Mn(n)&&(this.childSubscription=n.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function bx(e,{style:n,vars:t},i,s){const l=e.style;let o;for(o in n)l[o]=n[o];s==null||s.applyProjectionStyles(l,i);for(o in t)l.setProperty(o,t[o])}function xI(e){return window.getComputedStyle(e)}class jI extends zx{constructor(){super(...arguments),this.type="html",this.renderInstance=bx}readValueFromInstance(n,t){var i;if(rs.has(t))return(i=this.projection)!=null&&i.isProjecting?Kf(t):BP(n,t);{const s=xI(n),l=(Xm(t)?s.getPropertyValue(t):s[t])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(n,{transformPagePoint:t}){return kx(n,t)}build(n,t,i){mh(n,t,i.transformTemplate)}scrapeMotionValuesFromProps(n,t,i){return yh(n,t,i)}}const wx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function SI(e,n,t,i){bx(e,n,void 0,i);for(const s in n.attrs)e.setAttribute(wx.has(s)?s:kh(s),n.attrs[s])}class CI extends zx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ln}getBaseTargetFromProps(n,t){return n[t]}readValueFromInstance(n,t){if(rs.has(t)){const i=Gw(t);return i&&i.default||0}return t=wx.has(t)?t:kh(t),n.getAttribute(t)}scrapeMotionValuesFromProps(n,t,i){return dx(n,t,i)}build(n,t,i){ox(n,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(n,t,i,s){SI(n,t,i,s)}mount(n){this.isSVGTag=ux(n.tagName),super.mount(n)}}const _I=(e,n)=>ph(e)?new CI(n):new jI(n,{allowProjection:e!==_.Fragment});function La(e,n,t){const i=e.getProps();return gh(i,n,t!==void 0?t:i.custom,e)}const rm=e=>Array.isArray(e);function TI(e,n,t){e.hasValue(n)?e.getValue(n).set(t):e.addValue(n,Qa(t))}function EI(e){return rm(e)?e[e.length-1]||0:e}function AI(e,n){const t=La(e,n);let{transitionEnd:i={},transition:s={},...l}=t||{};l={...l,...i};for(const o in l){const d=EI(l[o]);TI(e,o,d)}}function PI(e){return!!(Mn(e)&&e.add)}function im(e,n){const t=e.getValue("willChange");if(PI(t))return t.add(n);if(!t&&Mr.WillChange){const i=new Mr.WillChange("auto");e.addValue("willChange",i),i.add(n)}}function xx(e){return e.props[fx]}const RI=e=>e!==null;function II(e,{repeat:n,repeatType:t="loop"},i){const s=e.filter(RI),l=n&&t!=="loop"&&n%2===1?0:s.length-1;return s[l]}const MI={type:"spring",stiffness:500,damping:25,restSpeed:10},DI=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),LI={type:"keyframes",duration:.8},OI={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},NI=(e,{keyframes:n})=>n.length>2?LI:rs.has(e)?e.startsWith("scale")?DI(n[1]):MI:OI;function FI({when:e,delay:n,delayChildren:t,staggerChildren:i,staggerDirection:s,repeat:l,repeatType:o,repeatDelay:d,from:f,elapsed:m,...y}){return!!Object.keys(y).length}const vh=(e,n,t,i={},s,l)=>o=>{const d=oh(i,e)||{},f=d.delay||i.delay||0;let{elapsed:m=0}=i;m=m-fr(f);const y={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:n.getVelocity(),...d,delay:-m,onUpdate:h=>{n.set(h),d.onUpdate&&d.onUpdate(h)},onComplete:()=>{o(),d.onComplete&&d.onComplete()},name:e,motionValue:n,element:l?void 0:s};FI(d)||Object.assign(y,NI(e,y)),y.duration&&(y.duration=fr(y.duration)),y.repeatDelay&&(y.repeatDelay=fr(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let u=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Jf(y),y.delay===0&&(u=!0)),(Mr.instantAnimations||Mr.skipAnimations)&&(u=!0,Jf(y),y.delay=0),y.allowFlatten=!d.type&&!d.ease,u&&!l&&n.get()!==void 0){const h=II(y.keyframes,d);if(h!==void 0){Je.update(()=>{y.onUpdate(h),y.onComplete()});return}}return d.isSync?new ah(y):new cR(y)};function VI({protectedKeys:e,needsAnimating:n},t){const i=e.hasOwnProperty(t)&&n[t]!==!0;return n[t]=!1,i}function jx(e,n,{delay:t=0,transitionOverride:i,type:s}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:o,...d}=n;i&&(l=i);const f=[],m=s&&e.animationState&&e.animationState.getState()[s];for(const y in d){const u=e.getValue(y,e.latestValues[y]??null),h=d[y];if(h===void 0||m&&VI(m,y))continue;const g={delay:t,...oh(l||{},y)},z=u.get();if(z!==void 0&&!u.isAnimating&&!Array.isArray(h)&&h===z&&!g.velocity)continue;let b=!1;if(window.MotionHandoffAnimation){const w=xx(e);if(w){const S=window.MotionHandoffAnimation(w,y,Je);S!==null&&(g.startTime=S,b=!0)}}im(e,y),u.start(vh(y,u,h,e.shouldReduceMotion&&Ww.has(y)?{type:!1}:g,e,b));const x=u.animation;x&&f.push(x)}return o&&Promise.all(f).then(()=>{Je.update(()=>{o&&AI(e,o)})}),f}function Sx(e,n,t,i=0,s=1){const l=Array.from(e).sort((m,y)=>m.sortNodePosition(y)).indexOf(n),o=e.size,d=(o-1)*i;return typeof t=="function"?t(l,o):s===1?l*i:d-l*i}function am(e,n,t={}){var f;const i=La(e,n,t.type==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(s=t.transitionOverride);const l=i?()=>Promise.all(jx(e,i,t)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:y=0,staggerChildren:u,staggerDirection:h}=s;return BI(e,n,m,y,u,h,t)}:()=>Promise.resolve(),{when:d}=s;if(d){const[m,y]=d==="beforeChildren"?[l,o]:[o,l];return m().then(()=>y())}else return Promise.all([l(),o(t.delay)])}function BI(e,n,t=0,i=0,s=0,l=1,o){const d=[];for(const f of e.variantChildren)f.notify("AnimationStart",n),d.push(am(f,n,{...o,delay:t+(typeof i=="function"?0:i)+Sx(e.variantChildren,f,i,s,l)}).then(()=>f.notify("AnimationComplete",n)));return Promise.all(d)}function UI(e,n,t={}){e.notify("AnimationStart",n);let i;if(Array.isArray(n)){const s=n.map(l=>am(e,l,t));i=Promise.all(s)}else if(typeof n=="string")i=am(e,n,t);else{const s=typeof n=="function"?La(e,n,t.custom):n;i=Promise.all(jx(e,s,t))}return i.then(()=>{e.notify("AnimationComplete",n)})}function Cx(e,n){if(!Array.isArray(n))return!1;const t=n.length;if(t!==e.length)return!1;for(let i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}const $I=fh.length;function _x(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent?_x(e.parent)||{}:{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}const n={};for(let t=0;t<$I;t++){const i=fh[t],s=e.props[i];(po(s)||s===!1)&&(n[i]=s)}return n}const HI=[...dh].reverse(),WI=dh.length;function qI(e){return n=>Promise.all(n.map(({animation:t,options:i})=>UI(e,t,i)))}function KI(e){let n=qI(e),t=Fk(),i=!0;const s=f=>(m,y)=>{var h;const u=La(e,y,f==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(u){const{transition:g,transitionEnd:z,...b}=u;m={...m,...b,...z}}return m};function l(f){n=f(e)}function o(f){const{props:m}=e,y=_x(e.parent)||{},u=[],h=new Set;let g={},z=1/0;for(let x=0;x<WI;x++){const w=HI[x],S=t[w],C=m[w]!==void 0?m[w]:y[w],R=po(C),D=w===f?S.isActive:null;D===!1&&(z=x);let P=C===y[w]&&C!==m[w]&&R;if(P&&i&&e.manuallyAnimateOnMount&&(P=!1),S.protectedKeys={...g},!S.isActive&&D===null||!C&&!S.prevProp||$u(C)||typeof C=="boolean")continue;const $=GI(S.prevProp,C);let Y=$||w===f&&S.isActive&&!P&&R||x>z&&R,K=!1;const L=Array.isArray(C)?C:[C];let Z=L.reduce(s(w),{});D===!1&&(Z={});const{prevResolvedValues:G={}}=S,ee={...G,...Z},B=X=>{Y=!0,h.has(X)&&(K=!0,h.delete(X)),S.needsAnimating[X]=!0;const F=e.getValue(X);F&&(F.liveStyle=!1)};for(const X in ee){const F=Z[X],q=G[X];if(g.hasOwnProperty(X))continue;let T=!1;rm(F)&&rm(q)?T=!Cx(F,q):T=F!==q,T?F!=null?B(X):h.add(X):F!==void 0&&h.has(X)?B(X):S.protectedKeys[X]=!0}S.prevProp=C,S.prevResolvedValues=Z,S.isActive&&(g={...g,...Z}),i&&e.blockInitialAnimation&&(Y=!1);const re=P&&$;Y&&(!re||K)&&u.push(...L.map(X=>{const F={type:w};if(typeof X=="string"&&i&&!re&&e.manuallyAnimateOnMount&&e.parent){const{parent:q}=e,T=La(q,X);if(q.enteringChildren&&T){const{delayChildren:I}=T.transition||{};F.delay=Sx(q.enteringChildren,e,I)}}return{animation:X,options:F}}))}if(h.size){const x={};if(typeof m.initial!="boolean"){const w=La(e,Array.isArray(m.initial)?m.initial[0]:m.initial);w&&w.transition&&(x.transition=w.transition)}h.forEach(w=>{const S=e.getBaseTarget(w),C=e.getValue(w);C&&(C.liveStyle=!0),x[w]=S??null}),u.push({animation:x})}let b=!!u.length;return i&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(b=!1),i=!1,b?n(u):Promise.resolve()}function d(f,m){var u;if(t[f].isActive===m)return Promise.resolve();(u=e.variantChildren)==null||u.forEach(h=>{var g;return(g=h.animationState)==null?void 0:g.setActive(f,m)}),t[f].isActive=m;const y=o(f);for(const h in t)t[h].protectedKeys={};return y}return{animateChanges:o,setActive:d,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Fk(),i=!0}}}function GI(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!Cx(n,e):!1}function Di(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fk(){return{animate:Di(!0),whileInView:Di(),whileHover:Di(),whileTap:Di(),whileDrag:Di(),whileFocus:Di(),exit:Di()}}class zi{constructor(n){this.isMounted=!1,this.node=n}update(){}}class QI extends zi{constructor(n){super(n),n.animationState||(n.animationState=KI(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();$u(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:t}=this.node.prevProps||{};n!==t&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let YI=0;class XI extends zi{constructor(){super(...arguments),this.id=YI++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===i)return;const s=this.node.animationState.setActive("exit",!n);t&&!n&&s.then(()=>{t(this.id)})}mount(){const{register:n,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const JI={animation:{Feature:QI},exit:{Feature:XI}};function yo(e,n,t,i={passive:!0}){return e.addEventListener(n,t,i),()=>e.removeEventListener(n,t)}function Eo(e){return{point:{x:e.pageX,y:e.pageY}}}const ZI=e=>n=>ch(n)&&e(n,Eo(n));function Zs(e,n,t,i){return yo(e,n,ZI(t),i)}const Tx=1e-4,eM=1-Tx,nM=1+Tx,Ex=.01,tM=0-Ex,rM=0+Ex;function qn(e){return e.max-e.min}function iM(e,n,t){return Math.abs(e-n)<=t}function Vk(e,n,t,i=.5){e.origin=i,e.originPoint=nn(n.min,n.max,e.origin),e.scale=qn(t)/qn(n),e.translate=nn(t.min,t.max,e.origin)-e.originPoint,(e.scale>=eM&&e.scale<=nM||isNaN(e.scale))&&(e.scale=1),(e.translate>=tM&&e.translate<=rM||isNaN(e.translate))&&(e.translate=0)}function eo(e,n,t,i){Vk(e.x,n.x,t.x,i?i.originX:void 0),Vk(e.y,n.y,t.y,i?i.originY:void 0)}function Bk(e,n,t){e.min=t.min+n.min,e.max=e.min+qn(n)}function aM(e,n,t){Bk(e.x,n.x,t.x),Bk(e.y,n.y,t.y)}function Uk(e,n,t){e.min=n.min-t.min,e.max=e.min+qn(n)}function no(e,n,t){Uk(e.x,n.x,t.x),Uk(e.y,n.y,t.y)}function St(e){return[e("x"),e("y")]}const Ax=({current:e})=>e?e.ownerDocument.defaultView:null,$k=(e,n)=>Math.abs(e-n);function sM(e,n){const t=$k(e.x,n.x),i=$k(e.y,n.y);return Math.sqrt(t**2+i**2)}class Px{constructor(n,t,{transformPagePoint:i,contextWindow:s=window,dragSnapToOrigin:l=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Zd(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,z=sM(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!z)return;const{point:b}=h,{timestamp:x}=Sn;this.history.push({...b,timestamp:x});const{onStart:w,onMove:S}=this.handlers;g||(w&&w(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,h)},this.handlePointerMove=(h,g)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Jd(g,this.transformPagePoint),Je.update(this.updatePoint,!0)},this.handlePointerUp=(h,g)=>{this.end();const{onEnd:z,onSessionEnd:b,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Zd(h.type==="pointercancel"?this.lastMoveEventInfo:Jd(g,this.transformPagePoint),this.history);this.startEvent&&z&&z(h,w),b&&b(h,w)},!ch(n))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=s||window;const d=Eo(n),f=Jd(d,this.transformPagePoint),{point:m}=f,{timestamp:y}=Sn;this.history=[{...m,timestamp:y}];const{onSessionStart:u}=t;u&&u(n,Zd(f,this.history)),this.removeListeners=Co(Zs(this.contextWindow,"pointermove",this.handlePointerMove),Zs(this.contextWindow,"pointerup",this.handlePointerUp),Zs(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),ki(this.updatePoint)}}function Jd(e,n){return n?{point:n(e.point)}:e}function Hk(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Zd({point:e},n){return{point:e,delta:Hk(e,Rx(n)),offset:Hk(e,oM(n)),velocity:lM(n,.1)}}function oM(e){return e[0]}function Rx(e){return e[e.length-1]}function lM(e,n){if(e.length<2)return{x:0,y:0};let t=e.length-1,i=null;const s=Rx(e);for(;t>=0&&(i=e[t],!(s.timestamp-i.timestamp>fr(n)));)t--;if(!i)return{x:0,y:0};const l=mr(s.timestamp-i.timestamp);if(l===0)return{x:0,y:0};const o={x:(s.x-i.x)/l,y:(s.y-i.y)/l};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function uM(e,{min:n,max:t},i){return n!==void 0&&e<n?e=i?nn(n,e,i.min):Math.max(e,n):t!==void 0&&e>t&&(e=i?nn(t,e,i.max):Math.min(e,t)),e}function Wk(e,n,t){return{min:n!==void 0?e.min+n:void 0,max:t!==void 0?e.max+t-(e.max-e.min):void 0}}function cM(e,{top:n,left:t,bottom:i,right:s}){return{x:Wk(e.x,t,s),y:Wk(e.y,n,i)}}function qk(e,n){let t=n.min-e.min,i=n.max-e.max;return n.max-n.min<e.max-e.min&&([t,i]=[i,t]),{min:t,max:i}}function dM(e,n){return{x:qk(e.x,n.x),y:qk(e.y,n.y)}}function fM(e,n){let t=.5;const i=qn(e),s=qn(n);return s>i?t=fo(n.min,n.max-i,e.min):i>s&&(t=fo(e.min,e.max-s,n.min)),Ir(0,1,t)}function mM(e,n){const t={};return n.min!==void 0&&(t.min=n.min-e.min),n.max!==void 0&&(t.max=n.max-e.min),t}const sm=.35;function hM(e=sm){return e===!1?e=0:e===!0&&(e=sm),{x:Kk(e,"left","right"),y:Kk(e,"top","bottom")}}function Kk(e,n,t){return{min:Gk(e,n),max:Gk(e,t)}}function Gk(e,n){return typeof e=="number"?e:e[n]||0}const pM=new WeakMap;class gM{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ln(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Eo(u).point)},o=(u,h)=>{const{drag:g,dragPropagation:z,onDragStart:b}=this.getProps();if(g&&!z&&(this.openDragLock&&this.openDragLock(),this.openDragLock=_R(g),!this.openDragLock))return;this.latestPointerEvent=u,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),St(w=>{let S=this.getAxisMotionValue(w).get()||0;if(hr.test(S)){const{projection:C}=this.visualElement;if(C&&C.layout){const R=C.layout.layoutBox[w];R&&(S=qn(R)*(parseFloat(S)/100))}}this.originPoint[w]=S}),b&&Je.postRender(()=>b(u,h)),im(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},d=(u,h)=>{this.latestPointerEvent=u,this.latestPanInfo=h;const{dragPropagation:g,dragDirectionLock:z,onDirectionLock:b,onDrag:x}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:w}=h;if(z&&this.currentDirection===null){this.currentDirection=yM(w),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",h.point,w),this.updateAxis("y",h.point,w),this.visualElement.render(),x&&x(u,h)},f=(u,h)=>{this.latestPointerEvent=u,this.latestPanInfo=h,this.stop(u,h),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>St(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)==null?void 0:h.play())}),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Px(n,{onSessionStart:l,onStart:o,onMove:d,onSessionEnd:f,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:i,contextWindow:Ax(this.visualElement)})}stop(n,t){const i=n||this.latestPointerEvent,s=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!s||!i)return;const{velocity:o}=s;this.startAnimation(o);const{onDragEnd:d}=this.getProps();d&&Je.postRender(()=>d(i,s))}cancel(){this.isDragging=!1;const{projection:n,animationState:t}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(n,t,i){const{drag:s}=this.getProps();if(!i||!Yl(n,s,this.currentDirection))return;const l=this.getAxisMotionValue(n);let o=this.originPoint[n]+i[n];this.constraints&&this.constraints[n]&&(o=uM(o,this.constraints[n],this.elastic[n])),l.set(o)}resolveConstraints(){var l;const{dragConstraints:n,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,s=this.constraints;n&&Aa(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=cM(i.layoutBox,n):this.constraints=!1,this.elastic=hM(t),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&St(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=mM(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:t}=this.getProps();if(!n||!Aa(n))return!1;const i=n.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=kI(i,s.root,this.visualElement.getTransformPagePoint());let o=dM(s.layout.layoutBox,l);if(t){const d=t(pI(o));this.hasMutatedConstraints=!!d,d&&(o=px(d))}return o}startAnimation(n){const{drag:t,dragMomentum:i,dragElastic:s,dragTransition:l,dragSnapToOrigin:o,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},m=St(y=>{if(!Yl(y,t,this.currentDirection))return;let u=f&&f[y]||{};o&&(u={min:0,max:0});const h=s?200:1e6,g=s?40:1e7,z={type:"inertia",velocity:i?n[y]:0,bounceStiffness:h,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...l,...u};return this.startAxisValueAnimation(y,z)});return Promise.all(m).then(d)}startAxisValueAnimation(n,t){const i=this.getAxisMotionValue(n);return im(this.visualElement,n),i.start(vh(n,i,0,t,this.visualElement,!1))}stopAnimation(){St(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){St(n=>{var t;return(t=this.getAxisMotionValue(n).animation)==null?void 0:t.pause()})}getAnimationState(n){var t;return(t=this.getAxisMotionValue(n).animation)==null?void 0:t.state}getAxisMotionValue(n){const t=`_drag${n.toUpperCase()}`,i=this.visualElement.getProps(),s=i[t];return s||this.visualElement.getValue(n,(i.initial?i.initial[n]:void 0)||0)}snapToCursor(n){St(t=>{const{drag:i}=this.getProps();if(!Yl(t,i,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(t);if(s&&s.layout){const{min:o,max:d}=s.layout.layoutBox[t];l.set(n[t]-nn(o,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Aa(t)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};St(o=>{const d=this.getAxisMotionValue(o);if(d&&this.constraints!==!1){const f=d.get();s[o]=fM({min:f,max:f},this.constraints[o])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),St(o=>{if(!Yl(o,n,null))return;const d=this.getAxisMotionValue(o),{min:f,max:m}=this.constraints[o];d.set(nn(f,m,s[o]))})}addListeners(){if(!this.visualElement.current)return;pM.set(this.visualElement,this);const n=this.visualElement.current,t=Zs(n,"pointerdown",f=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();Aa(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,l=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Je.read(i);const o=yo(window,"resize",()=>this.scalePositionWithinConstraints()),d=s.addEventListener("didUpdate",({delta:f,hasLayoutChanged:m})=>{this.isDragging&&m&&(St(y=>{const u=this.getAxisMotionValue(y);u&&(this.originPoint[y]+=f[y].translate,u.set(u.get()+f[y].translate))}),this.visualElement.render())});return()=>{o(),t(),l(),d&&d()}}getProps(){const n=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:o=sm,dragMomentum:d=!0}=n;return{...n,drag:t,dragDirectionLock:i,dragPropagation:s,dragConstraints:l,dragElastic:o,dragMomentum:d}}}function Yl(e,n,t){return(n===!0||n===e)&&(t===null||t===e)}function yM(e,n=10){let t=null;return Math.abs(e.y)>n?t="y":Math.abs(e.x)>n&&(t="x"),t}class kM extends zi{constructor(n){super(n),this.removeGroupControls=Tt,this.removeListeners=Tt,this.controls=new gM(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Tt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Qk=e=>(n,t)=>{e&&Je.postRender(()=>e(n,t))};class vM extends zi{constructor(){super(...arguments),this.removePointerDownListener=Tt}onPointerDown(n){this.session=new Px(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ax(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:t,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Qk(n),onStart:Qk(t),onMove:i,onEnd:(l,o)=>{delete this.session,s&&Je.postRender(()=>s(l,o))}}}mount(){this.removePointerDownListener=Zs(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const cu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Yk(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const Hs={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(xe.test(e))e=parseFloat(e);else return e;const t=Yk(e,n.target.x),i=Yk(e,n.target.y);return`${t}% ${i}%`}},zM={correct:(e,{treeScale:n,projectionDelta:t})=>{const i=e,s=vi.parse(e);if(s.length>5)return i;const l=vi.createTransformer(e),o=typeof s[0]!="number"?1:0,d=t.x.scale*n.x,f=t.y.scale*n.y;s[0+o]/=d,s[1+o]/=f;const m=nn(d,f,.5);return typeof s[2+o]=="number"&&(s[2+o]/=m),typeof s[3+o]=="number"&&(s[3+o]/=m),l(s)}};let ef=!1;class bM extends _.Component{componentDidMount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:i,layoutId:s}=this.props,{projection:l}=n;$R(wM),l&&(t.group&&t.group.add(l),i&&i.register&&s&&i.register(l),ef&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),cu.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:t,visualElement:i,drag:s,isPresent:l}=this.props,{projection:o}=i;return o&&(o.isPresent=l,ef=!0,s||n.layoutDependency!==t||t===void 0||n.isPresent!==l?o.willUpdate():this.safeToRemove(),n.isPresent!==l&&(l?o.promote():o.relegate()||Je.postRender(()=>{const d=o.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),uh.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:s}=n;ef=!0,s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function Ix(e){const[n,t]=LR(),i=_.useContext(dw);return O.jsx(bM,{...e,layoutGroup:i,switchLayoutGroup:_.useContext(mx),isPresent:n,safeToRemove:t})}const wM={borderRadius:{...Hs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Hs,borderTopRightRadius:Hs,borderBottomLeftRadius:Hs,borderBottomRightRadius:Hs,boxShadow:zM};function xM(e,n,t){const i=Mn(e)?e:Qa(e);return i.start(vh("",i,n,t)),i.animation}const jM=(e,n)=>e.depth-n.depth;class SM{constructor(){this.children=[],this.isDirty=!1}add(n){Hm(this.children,n),this.isDirty=!0}remove(n){Wm(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(jM),this.isDirty=!1,this.children.forEach(n)}}function CM(e,n){const t=it.now(),i=({timestamp:s})=>{const l=s-t;l>=n&&(ki(i),e(l-n))};return Je.setup(i,!0),()=>ki(i)}const Mx=["TopLeft","TopRight","BottomLeft","BottomRight"],_M=Mx.length,Xk=e=>typeof e=="string"?parseFloat(e):e,Jk=e=>typeof e=="number"||xe.test(e);function TM(e,n,t,i,s,l){s?(e.opacity=nn(0,t.opacity??1,EM(i)),e.opacityExit=nn(n.opacity??1,0,AM(i))):l&&(e.opacity=nn(n.opacity??1,t.opacity??1,i));for(let o=0;o<_M;o++){const d=`border${Mx[o]}Radius`;let f=Zk(n,d),m=Zk(t,d);if(f===void 0&&m===void 0)continue;f||(f=0),m||(m=0),f===0||m===0||Jk(f)===Jk(m)?(e[d]=Math.max(nn(Xk(f),Xk(m),i),0),(hr.test(m)||hr.test(f))&&(e[d]+="%")):e[d]=m}(n.rotate||t.rotate)&&(e.rotate=nn(n.rotate||0,t.rotate||0,i))}function Zk(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const EM=Dx(0,.5,ww),AM=Dx(.5,.95,Tt);function Dx(e,n,t){return i=>i<e?0:i>n?1:t(fo(e,n,i))}function ev(e,n){e.min=n.min,e.max=n.max}function jt(e,n){ev(e.x,n.x),ev(e.y,n.y)}function nv(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function tv(e,n,t,i,s){return e-=n,e=xu(e,1/t,i),s!==void 0&&(e=xu(e,1/s,i)),e}function PM(e,n=0,t=1,i=.5,s,l=e,o=e){if(hr.test(n)&&(n=parseFloat(n),n=nn(o.min,o.max,n/100)-o.min),typeof n!="number")return;let d=nn(l.min,l.max,i);e===l&&(d-=n),e.min=tv(e.min,n,t,d,s),e.max=tv(e.max,n,t,d,s)}function rv(e,n,[t,i,s],l,o){PM(e,n[t],n[i],n[s],n.scale,l,o)}const RM=["x","scaleX","originX"],IM=["y","scaleY","originY"];function iv(e,n,t,i){rv(e.x,n,RM,t?t.x:void 0,i?i.x:void 0),rv(e.y,n,IM,t?t.y:void 0,i?i.y:void 0)}function av(e){return e.translate===0&&e.scale===1}function Lx(e){return av(e.x)&&av(e.y)}function sv(e,n){return e.min===n.min&&e.max===n.max}function MM(e,n){return sv(e.x,n.x)&&sv(e.y,n.y)}function ov(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function Ox(e,n){return ov(e.x,n.x)&&ov(e.y,n.y)}function lv(e){return qn(e.x)/qn(e.y)}function uv(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class DM{constructor(){this.members=[]}add(n){Hm(this.members,n),n.scheduleRender()}remove(n){if(Wm(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(n){const t=this.members.findIndex(s=>n===s);if(t===0)return!1;let i;for(let s=t;s>=0;s--){const l=this.members[s];if(l.isPresent!==!1){i=l;break}}return i?(this.promote(i),!0):!1}promote(n,t){const i=this.lead;if(n!==i&&(this.prevLead=i,this.lead=n,n.show(),i)){i.instance&&i.scheduleRender(),n.scheduleRender(),n.resumeFrom=i,t&&(n.resumeFrom.preserveOpacity=!0),i.snapshot&&(n.snapshot=i.snapshot,n.snapshot.latestValues=i.animationValues||i.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:s}=n.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:t,resumingFrom:i}=n;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function LM(e,n,t){let i="";const s=e.x.translate/n.x,l=e.y.translate/n.y,o=(t==null?void 0:t.z)||0;if((s||l||o)&&(i=`translate3d(${s}px, ${l}px, ${o}px) `),(n.x!==1||n.y!==1)&&(i+=`scale(${1/n.x}, ${1/n.y}) `),t){const{transformPerspective:m,rotate:y,rotateX:u,rotateY:h,skewX:g,skewY:z}=t;m&&(i=`perspective(${m}px) ${i}`),y&&(i+=`rotate(${y}deg) `),u&&(i+=`rotateX(${u}deg) `),h&&(i+=`rotateY(${h}deg) `),g&&(i+=`skewX(${g}deg) `),z&&(i+=`skewY(${z}deg) `)}const d=e.x.scale*n.x,f=e.y.scale*n.y;return(d!==1||f!==1)&&(i+=`scale(${d}, ${f})`),i||"none"}const nf=["","X","Y","Z"],OM=1e3;let NM=0;function tf(e,n,t,i){const{latestValues:s}=n;s[e]&&(t[e]=s[e],n.setStaticValue(e,0),i&&(i[e]=0))}function Nx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const t=xx(n);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(t,"transform",Je,!(s||l))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&Nx(i)}function Fx({attachResizeListener:e,defaultParent:n,measureScroll:t,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},d=n==null?void 0:n()){this.id=NM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(BM),this.nodes.forEach(WM),this.nodes.forEach(qM),this.nodes.forEach(UM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new SM)}addEventListener(o,d){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Gm),this.eventHandlers.get(o).add(d)}notifyListeners(o,...d){const f=this.eventHandlers.get(o);f&&f.notify(...d)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=ex(o)&&!IR(o),this.instance=o;const{layoutId:d,layout:f,visualElement:m}=this.options;if(m&&!m.current&&m.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||d)&&(this.isLayoutDirty=!0),e){let y,u=0;const h=()=>this.root.updateBlockedByResize=!1;Je.read(()=>{u=window.innerWidth}),e(o,()=>{const g=window.innerWidth;g!==u&&(u=g,this.root.updateBlockedByResize=!0,y&&y(),y=CM(h,250),cu.hasAnimatedSinceResize&&(cu.hasAnimatedSinceResize=!1,this.nodes.forEach(fv)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||f)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:u,hasRelativeLayoutChanged:h,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const z=this.options.transition||m.getDefaultTransition()||XM,{onLayoutAnimationStart:b,onLayoutAnimationComplete:x}=m.getProps(),w=!this.targetLayout||!Ox(this.targetLayout,g),S=!u&&h;if(this.options.layoutRoot||this.resumeFrom||S||u&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...oh(z,"layout"),onPlay:b,onComplete:x};(m.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(y,S)}else u||fv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ki(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KM),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Nx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const u=this.path[y];u.shouldResetTransform=!0,u.updateScroll("snapshot"),u.options.layoutRoot&&u.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(dv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(HM),this.nodes.forEach(FM),this.nodes.forEach(VM)):this.nodes.forEach(dv),this.clearAllSnapshots();const d=it.now();Sn.delta=Ir(0,1e3/60,d-Sn.timestamp),Sn.timestamp=d,Sn.isProcessing=!0,Wd.update.process(Sn),Wd.preRender.process(Sn),Wd.render.process(Sn),Sn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,uh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($M),this.sharedNodes.forEach(GM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!qn(this.snapshot.measuredBox.x)&&!qn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ln(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(d=!1),d&&this.instance){const f=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!Lx(this.projectionDelta),f=this.getTransformTemplate(),m=f?f(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;o&&this.instance&&(d||Oi(this.latestValues)||y)&&(s(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return o&&(f=this.removeTransform(f)),JM(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:o}=this.options;if(!o)return ln();const d=o.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(ZM))){const{scroll:y}=this.root;y&&(Pa(d.x,y.offset.x),Pa(d.y,y.offset.y))}return d}removeElementScroll(o){var f;const d=ln();if(jt(d,o),(f=this.scroll)!=null&&f.wasRoot)return d;for(let m=0;m<this.path.length;m++){const y=this.path[m],{scroll:u,options:h}=y;y!==this.root&&u&&h.layoutScroll&&(u.wasRoot&&jt(d,o),Pa(d.x,u.offset.x),Pa(d.y,u.offset.y))}return d}applyTransform(o,d=!1){const f=ln();jt(f,o);for(let m=0;m<this.path.length;m++){const y=this.path[m];!d&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ra(f,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Oi(y.latestValues)&&Ra(f,y.latestValues)}return Oi(this.latestValues)&&Ra(f,this.latestValues),f}removeTransform(o){const d=ln();jt(d,o);for(let f=0;f<this.path.length;f++){const m=this.path[f];if(!m.instance||!Oi(m.latestValues))continue;em(m.latestValues)&&m.updateSnapshot();const y=ln(),u=m.measurePageBox();jt(y,u),iv(d,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return Oi(this.latestValues)&&iv(d,this.latestValues),d}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Sn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var h;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(o||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:u}=this.options;if(!(!this.layout||!(y||u))){if(this.resolvedRelativeTargetAt=Sn.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ln(),this.relativeTargetOrigin=ln(),no(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ln(),this.targetWithTransforms=ln()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),aM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):jt(this.target,this.layout.layoutBox),yx(this.target,this.targetDelta)):jt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ln(),this.relativeTargetOrigin=ln(),no(this.relativeTargetOrigin,this.target,g.target),jt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||em(this.parent.latestValues)||gx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var z;const o=this.getLead(),d=!!this.resumingFrom||this!==o;let f=!0;if((this.isProjectionDirty||(z=this.parent)!=null&&z.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Sn.timestamp&&(f=!1),f)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;jt(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,h=this.treeScale.y;yI(this.layoutCorrected,this.treeScale,this.path,d),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ln());const{target:g}=o;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(nv(this.prevProjectionDelta.x,this.projectionDelta.x),nv(this.prevProjectionDelta.y,this.projectionDelta.y)),eo(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==h||!uv(this.projectionDelta.x,this.prevProjectionDelta.x)||!uv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),o){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ia(),this.projectionDelta=Ia(),this.projectionDeltaWithTransform=Ia()}setAnimationOrigin(o,d=!1){const f=this.snapshot,m=f?f.latestValues:{},y={...this.latestValues},u=Ia();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const h=ln(),g=f?f.source:void 0,z=this.layout?this.layout.source:void 0,b=g!==z,x=this.getStack(),w=!x||x.members.length<=1,S=!!(b&&!w&&this.options.crossfade===!0&&!this.path.some(YM));this.animationProgress=0;let C;this.mixTargetDelta=R=>{const D=R/1e3;mv(u.x,o.x,D),mv(u.y,o.y,D),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(no(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),QM(this.relativeTarget,this.relativeTargetOrigin,h,D),C&&MM(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=ln()),jt(C,this.relativeTarget)),b&&(this.animationValues=y,TM(y,m,this.latestValues,D,S,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var d,f,m;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(m=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||m.stop(),this.pendingAnimation&&(ki(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Je.update(()=>{cu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Qa(0)),this.currentAnimation=xM(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),o.onUpdate&&o.onUpdate(y)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(OM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:d,target:f,layout:m,latestValues:y}=o;if(!(!d||!f||!m)){if(this!==o&&this.layout&&m&&Vx(this.options.animationType,this.layout.layoutBox,m.layoutBox)){f=this.target||ln();const u=qn(this.layout.layoutBox.x);f.x.min=o.target.x.min,f.x.max=f.x.min+u;const h=qn(this.layout.layoutBox.y);f.y.min=o.target.y.min,f.y.max=f.y.min+h}jt(d,f),Ra(d,y),eo(this.projectionDeltaWithTransform,this.layoutCorrected,d,y)}}registerSharedNode(o,d){this.sharedNodes.has(o)||this.sharedNodes.set(o,new DM),this.sharedNodes.get(o).add(d);const m=d.options.initialPromotionConfig;d.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(d):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var d;const{layoutId:o}=this.options;return o?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:o}=this.options;return o?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:d,preserveFollowOpacity:f}={}){const m=this.getStack();m&&m.promote(this,f),o&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let d=!1;const{latestValues:f}=o;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const m={};f.z&&tf("z",o,m,this.animationValues);for(let y=0;y<nf.length;y++)tf(`rotate${nf[y]}`,o,m,this.animationValues),tf(`skew${nf[y]}`,o,m,this.animationValues);o.render();for(const y in m)o.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);o.scheduleRender()}applyProjectionStyles(o,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=uu(d==null?void 0:d.pointerEvents)||"",o.transform=f?f(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=uu(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Oi(this.latestValues)&&(o.transform=f?f({},""):"none",this.hasProjected=!1);return}o.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let u=LM(this.projectionDeltaWithTransform,this.treeScale,y);f&&(u=f(y,u)),o.transform=u;const{x:h,y:g}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${g.origin*100}% 0`,m.animationValues?o.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:o.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const z in go){if(y[z]===void 0)continue;const{correct:b,applyTo:x,isCSSVariable:w}=go[z],S=u==="none"?y[z]:b(y[z],m);if(x){const C=x.length;for(let R=0;R<C;R++)o[x[R]]=S}else w?this.options.visualElement.renderState.vars[z]=S:o[z]=S}this.options.layoutId&&(o.pointerEvents=m===this?uu(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var d;return(d=o.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(cv),this.root.sharedNodes.clear()}}}function FM(e){e.updateLayout()}function VM(e){var t;const n=((t=e.resumeFrom)==null?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=e.layout,{animationType:l}=e.options,o=n.source!==e.layout.source;l==="size"?St(u=>{const h=o?n.measuredBox[u]:n.layoutBox[u],g=qn(h);h.min=i[u].min,h.max=h.min+g}):Vx(l,n.layoutBox,i)&&St(u=>{const h=o?n.measuredBox[u]:n.layoutBox[u],g=qn(i[u]);h.max=h.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[u].max=e.relativeTarget[u].min+g)});const d=Ia();eo(d,i,n.layoutBox);const f=Ia();o?eo(f,e.applyTransform(s,!0),n.measuredBox):eo(f,i,n.layoutBox);const m=!Lx(d);let y=!1;if(!e.resumeFrom){const u=e.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:h,layout:g}=u;if(h&&g){const z=ln();no(z,n.layoutBox,h.layoutBox);const b=ln();no(b,i,g.layoutBox),Ox(z,b)||(y=!0),u.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=z,e.relativeParent=u)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:f,layoutDelta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:y})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function BM(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function UM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function $M(e){e.clearSnapshot()}function cv(e){e.clearMeasurements()}function dv(e){e.isLayoutDirty=!1}function HM(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function fv(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function WM(e){e.resolveTargetDelta()}function qM(e){e.calcProjection()}function KM(e){e.resetSkewAndRotation()}function GM(e){e.removeLeadSnapshot()}function mv(e,n,t){e.translate=nn(n.translate,0,t),e.scale=nn(n.scale,1,t),e.origin=n.origin,e.originPoint=n.originPoint}function hv(e,n,t,i){e.min=nn(n.min,t.min,i),e.max=nn(n.max,t.max,i)}function QM(e,n,t,i){hv(e.x,n.x,t.x,i),hv(e.y,n.y,t.y,i)}function YM(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const XM={duration:.45,ease:[.4,0,.1,1]},pv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),gv=pv("applewebkit/")&&!pv("chrome/")?Math.round:Tt;function yv(e){e.min=gv(e.min),e.max=gv(e.max)}function JM(e){yv(e.x),yv(e.y)}function Vx(e,n,t){return e==="position"||e==="preserve-aspect"&&!iM(lv(n),lv(t),.2)}function ZM(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const eD=Fx({attachResizeListener:(e,n)=>yo(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),rf={current:void 0},Bx=Fx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!rf.current){const e=new eD({});e.mount(window),e.setOptions({layoutScroll:!0}),rf.current=e}return rf.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),nD={pan:{Feature:vM},drag:{Feature:kM,ProjectionNode:Bx,MeasureLayout:Ix}};function kv(e,n,t){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",t==="Start");const s="onHover"+t,l=i[s];l&&Je.postRender(()=>l(n,Eo(n)))}class tD extends zi{mount(){const{current:n}=this.node;n&&(this.unmount=TR(n,(t,i)=>(kv(this.node,i,"Start"),s=>kv(this.node,s,"End"))))}unmount(){}}class rD extends zi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Co(yo(this.node.current,"focus",()=>this.onFocus()),yo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function vv(e,n,t){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",t==="Start");const s="onTap"+(t==="End"?"":t),l=i[s];l&&Je.postRender(()=>l(n,Eo(n)))}class iD extends zi{mount(){const{current:n}=this.node;n&&(this.unmount=RR(n,(t,i)=>(vv(this.node,i,"Start"),(s,{success:l})=>vv(this.node,s,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const om=new WeakMap,af=new WeakMap,aD=e=>{const n=om.get(e.target);n&&n(e)},sD=e=>{e.forEach(aD)};function oD({root:e,...n}){const t=e||document;af.has(t)||af.set(t,{});const i=af.get(t),s=JSON.stringify(n);return i[s]||(i[s]=new IntersectionObserver(sD,{root:e,...n})),i[s]}function lD(e,n,t){const i=oD(n);return om.set(e,t),i.observe(e),()=>{om.delete(e),i.unobserve(e)}}const uD={some:0,all:1};class cD extends zi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:t,margin:i,amount:s="some",once:l}=n,o={root:t?t.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:uD[s]},d=f=>{const{isIntersecting:m}=f;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:u}=this.node.getProps(),h=m?y:u;h&&h(f)};return lD(this.node.current,o,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:t}=this.node;["amount","margin","root"].some(dD(n,t))&&this.startObserver()}unmount(){}}function dD({viewport:e={}},{viewport:n={}}={}){return t=>e[t]!==n[t]}const fD={inView:{Feature:cD},tap:{Feature:iD},focus:{Feature:rD},hover:{Feature:tD}},mD={layout:{ProjectionNode:Bx,MeasureLayout:Ix}},hD={...JI,...fD,...nD,...mD},pD=hI(hD,_I);var sf={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var zv;function gD(){return zv||(zv=1,function(e){(function(){var n=function(){this.init()};n.prototype={init:function(){var u=this||t;return u._counter=1e3,u._html5AudioPool=[],u.html5PoolSize=10,u._codecs={},u._howls=[],u._muted=!1,u._volume=1,u._canPlayEvent="canplaythrough",u._navigator=typeof window<"u"&&window.navigator?window.navigator:null,u.masterGain=null,u.noAudio=!1,u.usingWebAudio=!0,u.autoSuspend=!0,u.ctx=null,u.autoUnlock=!0,u._setup(),u},volume:function(u){var h=this||t;if(u=parseFloat(u),h.ctx||y(),typeof u<"u"&&u>=0&&u<=1){if(h._volume=u,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(u,t.ctx.currentTime);for(var g=0;g<h._howls.length;g++)if(!h._howls[g]._webAudio)for(var z=h._howls[g]._getSoundIds(),b=0;b<z.length;b++){var x=h._howls[g]._soundById(z[b]);x&&x._node&&(x._node.volume=x._volume*u)}return h}return h._volume},mute:function(u){var h=this||t;h.ctx||y(),h._muted=u,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(u?0:h._volume,t.ctx.currentTime);for(var g=0;g<h._howls.length;g++)if(!h._howls[g]._webAudio)for(var z=h._howls[g]._getSoundIds(),b=0;b<z.length;b++){var x=h._howls[g]._soundById(z[b]);x&&x._node&&(x._node.muted=u?!0:x._muted)}return h},stop:function(){for(var u=this||t,h=0;h<u._howls.length;h++)u._howls[h].stop();return u},unload:function(){for(var u=this||t,h=u._howls.length-1;h>=0;h--)u._howls[h].unload();return u.usingWebAudio&&u.ctx&&typeof u.ctx.close<"u"&&(u.ctx.close(),u.ctx=null,y()),u},codecs:function(u){return(this||t)._codecs[u.replace(/^x-/,"")]},_setup:function(){var u=this||t;if(u.state=u.ctx&&u.ctx.state||"suspended",u._autoSuspend(),!u.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(u._canPlayEvent="canplay")}catch{u.noAudio=!0}else u.noAudio=!0;try{var h=new Audio;h.muted&&(u.noAudio=!0)}catch{}return u.noAudio||u._setupCodecs(),u},_setupCodecs:function(){var u=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return u}if(!h||typeof h.canPlayType!="function")return u;var g=h.canPlayType("audio/mpeg;").replace(/^no$/,""),z=u._navigator?u._navigator.userAgent:"",b=z.match(/OPR\/(\d+)/g),x=b&&parseInt(b[0].split("/")[1],10)<33,w=z.indexOf("Safari")!==-1&&z.indexOf("Chrome")===-1,S=z.match(/Version\/(.*?) /),C=w&&S&&parseInt(S[1],10)<15;return u._codecs={mp3:!!(!x&&(g||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!g,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!C&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!C&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},u},_unlockAudio:function(){var u=this||t;if(!(u._audioUnlocked||!u.ctx)){u._audioUnlocked=!1,u.autoUnlock=!1,!u._mobileUnloaded&&u.ctx.sampleRate!==44100&&(u._mobileUnloaded=!0,u.unload()),u._scratchBuffer=u.ctx.createBuffer(1,1,22050);var h=function(g){for(;u._html5AudioPool.length<u.html5PoolSize;)try{var z=new Audio;z._unlocked=!0,u._releaseHtml5Audio(z)}catch{u.noAudio=!0;break}for(var b=0;b<u._howls.length;b++)if(!u._howls[b]._webAudio)for(var x=u._howls[b]._getSoundIds(),w=0;w<x.length;w++){var S=u._howls[b]._soundById(x[w]);S&&S._node&&!S._node._unlocked&&(S._node._unlocked=!0,S._node.load())}u._autoResume();var C=u.ctx.createBufferSource();C.buffer=u._scratchBuffer,C.connect(u.ctx.destination),typeof C.start>"u"?C.noteOn(0):C.start(0),typeof u.ctx.resume=="function"&&u.ctx.resume(),C.onended=function(){C.disconnect(0),u._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var R=0;R<u._howls.length;R++)u._howls[R]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),u}},_obtainHtml5Audio:function(){var u=this||t;if(u._html5AudioPool.length)return u._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(u){var h=this||t;return u._unlocked&&h._html5AudioPool.push(u),h},_autoSuspend:function(){var u=this;if(!(!u.autoSuspend||!u.ctx||typeof u.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<u._howls.length;h++)if(u._howls[h]._webAudio){for(var g=0;g<u._howls[h]._sounds.length;g++)if(!u._howls[h]._sounds[g]._paused)return u}return u._suspendTimer&&clearTimeout(u._suspendTimer),u._suspendTimer=setTimeout(function(){if(u.autoSuspend){u._suspendTimer=null,u.state="suspending";var z=function(){u.state="suspended",u._resumeAfterSuspend&&(delete u._resumeAfterSuspend,u._autoResume())};u.ctx.suspend().then(z,z)}},3e4),u}},_autoResume:function(){var u=this;if(!(!u.ctx||typeof u.ctx.resume>"u"||!t.usingWebAudio))return u.state==="running"&&u.ctx.state!=="interrupted"&&u._suspendTimer?(clearTimeout(u._suspendTimer),u._suspendTimer=null):u.state==="suspended"||u.state==="running"&&u.ctx.state==="interrupted"?(u.ctx.resume().then(function(){u.state="running";for(var h=0;h<u._howls.length;h++)u._howls[h]._emit("resume")}),u._suspendTimer&&(clearTimeout(u._suspendTimer),u._suspendTimer=null)):u.state==="suspending"&&(u._resumeAfterSuspend=!0),u}};var t=new n,i=function(u){var h=this;if(!u.src||u.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(u)};i.prototype={init:function(u){var h=this;return t.ctx||y(),h._autoplay=u.autoplay||!1,h._format=typeof u.format!="string"?u.format:[u.format],h._html5=u.html5||!1,h._muted=u.mute||!1,h._loop=u.loop||!1,h._pool=u.pool||5,h._preload=typeof u.preload=="boolean"||u.preload==="metadata"?u.preload:!0,h._rate=u.rate||1,h._sprite=u.sprite||{},h._src=typeof u.src!="string"?u.src:[u.src],h._volume=u.volume!==void 0?u.volume:1,h._xhr={method:u.xhr&&u.xhr.method?u.xhr.method:"GET",headers:u.xhr&&u.xhr.headers?u.xhr.headers:null,withCredentials:u.xhr&&u.xhr.withCredentials?u.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=u.onend?[{fn:u.onend}]:[],h._onfade=u.onfade?[{fn:u.onfade}]:[],h._onload=u.onload?[{fn:u.onload}]:[],h._onloaderror=u.onloaderror?[{fn:u.onloaderror}]:[],h._onplayerror=u.onplayerror?[{fn:u.onplayerror}]:[],h._onpause=u.onpause?[{fn:u.onpause}]:[],h._onplay=u.onplay?[{fn:u.onplay}]:[],h._onstop=u.onstop?[{fn:u.onstop}]:[],h._onmute=u.onmute?[{fn:u.onmute}]:[],h._onvolume=u.onvolume?[{fn:u.onvolume}]:[],h._onrate=u.onrate?[{fn:u.onrate}]:[],h._onseek=u.onseek?[{fn:u.onseek}]:[],h._onunlock=u.onunlock?[{fn:u.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var u=this,h=null;if(t.noAudio){u._emit("loaderror",null,"No audio support.");return}typeof u._src=="string"&&(u._src=[u._src]);for(var g=0;g<u._src.length;g++){var z,b;if(u._format&&u._format[g])z=u._format[g];else{if(b=u._src[g],typeof b!="string"){u._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}z=/^data:audio\/([^;,]+);/i.exec(b),z||(z=/\.([^.]+)$/.exec(b.split("?",1)[0])),z&&(z=z[1].toLowerCase())}if(z||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),z&&t.codecs(z)){h=u._src[g];break}}if(!h){u._emit("loaderror",null,"No codec support for selected audio sources.");return}return u._src=h,u._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(u._html5=!0,u._webAudio=!1),new s(u),u._webAudio&&o(u),u},play:function(u,h){var g=this,z=null;if(typeof u=="number")z=u,u=null;else{if(typeof u=="string"&&g._state==="loaded"&&!g._sprite[u])return null;if(typeof u>"u"&&(u="__default",!g._playLock)){for(var b=0,x=0;x<g._sounds.length;x++)g._sounds[x]._paused&&!g._sounds[x]._ended&&(b++,z=g._sounds[x]._id);b===1?u=null:z=null}}var w=z?g._soundById(z):g._inactiveSound();if(!w)return null;if(z&&!u&&(u=w._sprite||"__default"),g._state!=="loaded"){w._sprite=u,w._ended=!1;var S=w._id;return g._queue.push({event:"play",action:function(){g.play(S)}}),S}if(z&&!w._paused)return h||g._loadQueue("play"),w._id;g._webAudio&&t._autoResume();var C=Math.max(0,w._seek>0?w._seek:g._sprite[u][0]/1e3),R=Math.max(0,(g._sprite[u][0]+g._sprite[u][1])/1e3-C),D=R*1e3/Math.abs(w._rate),P=g._sprite[u][0]/1e3,$=(g._sprite[u][0]+g._sprite[u][1])/1e3;w._sprite=u,w._ended=!1;var Y=function(){w._paused=!1,w._seek=C,w._start=P,w._stop=$,w._loop=!!(w._loop||g._sprite[u][2])};if(C>=$){g._ended(w);return}var K=w._node;if(g._webAudio){var L=function(){g._playLock=!1,Y(),g._refreshBuffer(w);var B=w._muted||g._muted?0:w._volume;K.gain.setValueAtTime(B,t.ctx.currentTime),w._playStart=t.ctx.currentTime,typeof K.bufferSource.start>"u"?w._loop?K.bufferSource.noteGrainOn(0,C,86400):K.bufferSource.noteGrainOn(0,C,R):w._loop?K.bufferSource.start(0,C,86400):K.bufferSource.start(0,C,R),D!==1/0&&(g._endTimers[w._id]=setTimeout(g._ended.bind(g,w),D)),h||setTimeout(function(){g._emit("play",w._id),g._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?L():(g._playLock=!0,g.once("resume",L),g._clearTimer(w._id))}else{var Z=function(){K.currentTime=C,K.muted=w._muted||g._muted||t._muted||K.muted,K.volume=w._volume*t.volume(),K.playbackRate=w._rate;try{var B=K.play();if(B&&typeof Promise<"u"&&(B instanceof Promise||typeof B.then=="function")?(g._playLock=!0,Y(),B.then(function(){g._playLock=!1,K._unlocked=!0,h?g._loadQueue():g._emit("play",w._id)}).catch(function(){g._playLock=!1,g._emit("playerror",w._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),w._ended=!0,w._paused=!0})):h||(g._playLock=!1,Y(),g._emit("play",w._id)),K.playbackRate=w._rate,K.paused){g._emit("playerror",w._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}u!=="__default"||w._loop?g._endTimers[w._id]=setTimeout(g._ended.bind(g,w),D):(g._endTimers[w._id]=function(){g._ended(w),K.removeEventListener("ended",g._endTimers[w._id],!1)},K.addEventListener("ended",g._endTimers[w._id],!1))}catch(re){g._emit("playerror",w._id,re)}};K.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(K.src=g._src,K.load());var G=window&&window.ejecta||!K.readyState&&t._navigator.isCocoonJS;if(K.readyState>=3||G)Z();else{g._playLock=!0,g._state="loading";var ee=function(){g._state="loaded",Z(),K.removeEventListener(t._canPlayEvent,ee,!1)};K.addEventListener(t._canPlayEvent,ee,!1),g._clearTimer(w._id)}}return w._id},pause:function(u){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(u)}}),h;for(var g=h._getSoundIds(u),z=0;z<g.length;z++){h._clearTimer(g[z]);var b=h._soundById(g[z]);if(b&&!b._paused&&(b._seek=h.seek(g[z]),b._rateSeek=0,b._paused=!0,h._stopFade(g[z]),b._node))if(h._webAudio){if(!b._node.bufferSource)continue;typeof b._node.bufferSource.stop>"u"?b._node.bufferSource.noteOff(0):b._node.bufferSource.stop(0),h._cleanBuffer(b._node)}else(!isNaN(b._node.duration)||b._node.duration===1/0)&&b._node.pause();arguments[1]||h._emit("pause",b?b._id:null)}return h},stop:function(u,h){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"stop",action:function(){g.stop(u)}}),g;for(var z=g._getSoundIds(u),b=0;b<z.length;b++){g._clearTimer(z[b]);var x=g._soundById(z[b]);x&&(x._seek=x._start||0,x._rateSeek=0,x._paused=!0,x._ended=!0,g._stopFade(z[b]),x._node&&(g._webAudio?x._node.bufferSource&&(typeof x._node.bufferSource.stop>"u"?x._node.bufferSource.noteOff(0):x._node.bufferSource.stop(0),g._cleanBuffer(x._node)):(!isNaN(x._node.duration)||x._node.duration===1/0)&&(x._node.currentTime=x._start||0,x._node.pause(),x._node.duration===1/0&&g._clearSound(x._node))),h||g._emit("stop",x._id))}return g},mute:function(u,h){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"mute",action:function(){g.mute(u,h)}}),g;if(typeof h>"u")if(typeof u=="boolean")g._muted=u;else return g._muted;for(var z=g._getSoundIds(h),b=0;b<z.length;b++){var x=g._soundById(z[b]);x&&(x._muted=u,x._interval&&g._stopFade(x._id),g._webAudio&&x._node?x._node.gain.setValueAtTime(u?0:x._volume,t.ctx.currentTime):x._node&&(x._node.muted=t._muted?!0:u),g._emit("mute",x._id))}return g},volume:function(){var u=this,h=arguments,g,z;if(h.length===0)return u._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var b=u._getSoundIds(),x=b.indexOf(h[0]);x>=0?z=parseInt(h[0],10):g=parseFloat(h[0])}else h.length>=2&&(g=parseFloat(h[0]),z=parseInt(h[1],10));var w;if(typeof g<"u"&&g>=0&&g<=1){if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"volume",action:function(){u.volume.apply(u,h)}}),u;typeof z>"u"&&(u._volume=g),z=u._getSoundIds(z);for(var S=0;S<z.length;S++)w=u._soundById(z[S]),w&&(w._volume=g,h[2]||u._stopFade(z[S]),u._webAudio&&w._node&&!w._muted?w._node.gain.setValueAtTime(g,t.ctx.currentTime):w._node&&!w._muted&&(w._node.volume=g*t.volume()),u._emit("volume",w._id))}else return w=z?u._soundById(z):u._sounds[0],w?w._volume:0;return u},fade:function(u,h,g,z){var b=this;if(b._state!=="loaded"||b._playLock)return b._queue.push({event:"fade",action:function(){b.fade(u,h,g,z)}}),b;u=Math.min(Math.max(0,parseFloat(u)),1),h=Math.min(Math.max(0,parseFloat(h)),1),g=parseFloat(g),b.volume(u,z);for(var x=b._getSoundIds(z),w=0;w<x.length;w++){var S=b._soundById(x[w]);if(S){if(z||b._stopFade(x[w]),b._webAudio&&!S._muted){var C=t.ctx.currentTime,R=C+g/1e3;S._volume=u,S._node.gain.setValueAtTime(u,C),S._node.gain.linearRampToValueAtTime(h,R)}b._startFadeInterval(S,u,h,g,x[w],typeof z>"u")}}return b},_startFadeInterval:function(u,h,g,z,b,x){var w=this,S=h,C=g-h,R=Math.abs(C/.01),D=Math.max(4,R>0?z/R:z),P=Date.now();u._fadeTo=g,u._interval=setInterval(function(){var $=(Date.now()-P)/z;P=Date.now(),S+=C*$,S=Math.round(S*100)/100,C<0?S=Math.max(g,S):S=Math.min(g,S),w._webAudio?u._volume=S:w.volume(S,u._id,!0),x&&(w._volume=S),(g<h&&S<=g||g>h&&S>=g)&&(clearInterval(u._interval),u._interval=null,u._fadeTo=null,w.volume(g,u._id),w._emit("fade",u._id))},D)},_stopFade:function(u){var h=this,g=h._soundById(u);return g&&g._interval&&(h._webAudio&&g._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(g._interval),g._interval=null,h.volume(g._fadeTo,u),g._fadeTo=null,h._emit("fade",u)),h},loop:function(){var u=this,h=arguments,g,z,b;if(h.length===0)return u._loop;if(h.length===1)if(typeof h[0]=="boolean")g=h[0],u._loop=g;else return b=u._soundById(parseInt(h[0],10)),b?b._loop:!1;else h.length===2&&(g=h[0],z=parseInt(h[1],10));for(var x=u._getSoundIds(z),w=0;w<x.length;w++)b=u._soundById(x[w]),b&&(b._loop=g,u._webAudio&&b._node&&b._node.bufferSource&&(b._node.bufferSource.loop=g,g&&(b._node.bufferSource.loopStart=b._start||0,b._node.bufferSource.loopEnd=b._stop,u.playing(x[w])&&(u.pause(x[w],!0),u.play(x[w],!0)))));return u},rate:function(){var u=this,h=arguments,g,z;if(h.length===0)z=u._sounds[0]._id;else if(h.length===1){var b=u._getSoundIds(),x=b.indexOf(h[0]);x>=0?z=parseInt(h[0],10):g=parseFloat(h[0])}else h.length===2&&(g=parseFloat(h[0]),z=parseInt(h[1],10));var w;if(typeof g=="number"){if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"rate",action:function(){u.rate.apply(u,h)}}),u;typeof z>"u"&&(u._rate=g),z=u._getSoundIds(z);for(var S=0;S<z.length;S++)if(w=u._soundById(z[S]),w){u.playing(z[S])&&(w._rateSeek=u.seek(z[S]),w._playStart=u._webAudio?t.ctx.currentTime:w._playStart),w._rate=g,u._webAudio&&w._node&&w._node.bufferSource?w._node.bufferSource.playbackRate.setValueAtTime(g,t.ctx.currentTime):w._node&&(w._node.playbackRate=g);var C=u.seek(z[S]),R=(u._sprite[w._sprite][0]+u._sprite[w._sprite][1])/1e3-C,D=R*1e3/Math.abs(w._rate);(u._endTimers[z[S]]||!w._paused)&&(u._clearTimer(z[S]),u._endTimers[z[S]]=setTimeout(u._ended.bind(u,w),D)),u._emit("rate",w._id)}}else return w=u._soundById(z),w?w._rate:u._rate;return u},seek:function(){var u=this,h=arguments,g,z;if(h.length===0)u._sounds.length&&(z=u._sounds[0]._id);else if(h.length===1){var b=u._getSoundIds(),x=b.indexOf(h[0]);x>=0?z=parseInt(h[0],10):u._sounds.length&&(z=u._sounds[0]._id,g=parseFloat(h[0]))}else h.length===2&&(g=parseFloat(h[0]),z=parseInt(h[1],10));if(typeof z>"u")return 0;if(typeof g=="number"&&(u._state!=="loaded"||u._playLock))return u._queue.push({event:"seek",action:function(){u.seek.apply(u,h)}}),u;var w=u._soundById(z);if(w)if(typeof g=="number"&&g>=0){var S=u.playing(z);S&&u.pause(z,!0),w._seek=g,w._ended=!1,u._clearTimer(z),!u._webAudio&&w._node&&!isNaN(w._node.duration)&&(w._node.currentTime=g);var C=function(){S&&u.play(z,!0),u._emit("seek",z)};if(S&&!u._webAudio){var R=function(){u._playLock?setTimeout(R,0):C()};setTimeout(R,0)}else C()}else if(u._webAudio){var D=u.playing(z)?t.ctx.currentTime-w._playStart:0,P=w._rateSeek?w._rateSeek-w._seek:0;return w._seek+(P+D*Math.abs(w._rate))}else return w._node.currentTime;return u},playing:function(u){var h=this;if(typeof u=="number"){var g=h._soundById(u);return g?!g._paused:!1}for(var z=0;z<h._sounds.length;z++)if(!h._sounds[z]._paused)return!0;return!1},duration:function(u){var h=this,g=h._duration,z=h._soundById(u);return z&&(g=h._sprite[z._sprite][1]/1e3),g},state:function(){return this._state},unload:function(){for(var u=this,h=u._sounds,g=0;g<h.length;g++)h[g]._paused||u.stop(h[g]._id),u._webAudio||(u._clearSound(h[g]._node),h[g]._node.removeEventListener("error",h[g]._errorFn,!1),h[g]._node.removeEventListener(t._canPlayEvent,h[g]._loadFn,!1),h[g]._node.removeEventListener("ended",h[g]._endFn,!1),t._releaseHtml5Audio(h[g]._node)),delete h[g]._node,u._clearTimer(h[g]._id);var z=t._howls.indexOf(u);z>=0&&t._howls.splice(z,1);var b=!0;for(g=0;g<t._howls.length;g++)if(t._howls[g]._src===u._src||u._src.indexOf(t._howls[g]._src)>=0){b=!1;break}return l&&b&&delete l[u._src],t.noAudio=!1,u._state="unloaded",u._sounds=[],u=null,null},on:function(u,h,g,z){var b=this,x=b["_on"+u];return typeof h=="function"&&x.push(z?{id:g,fn:h,once:z}:{id:g,fn:h}),b},off:function(u,h,g){var z=this,b=z["_on"+u],x=0;if(typeof h=="number"&&(g=h,h=null),h||g)for(x=0;x<b.length;x++){var w=g===b[x].id;if(h===b[x].fn&&w||!h&&w){b.splice(x,1);break}}else if(u)z["_on"+u]=[];else{var S=Object.keys(z);for(x=0;x<S.length;x++)S[x].indexOf("_on")===0&&Array.isArray(z[S[x]])&&(z[S[x]]=[])}return z},once:function(u,h,g){var z=this;return z.on(u,h,g,1),z},_emit:function(u,h,g){for(var z=this,b=z["_on"+u],x=b.length-1;x>=0;x--)(!b[x].id||b[x].id===h||u==="load")&&(setTimeout((function(w){w.call(this,h,g)}).bind(z,b[x].fn),0),b[x].once&&z.off(u,b[x].fn,b[x].id));return z._loadQueue(u),z},_loadQueue:function(u){var h=this;if(h._queue.length>0){var g=h._queue[0];g.event===u&&(h._queue.shift(),h._loadQueue()),u||g.action()}return h},_ended:function(u){var h=this,g=u._sprite;if(!h._webAudio&&u._node&&!u._node.paused&&!u._node.ended&&u._node.currentTime<u._stop)return setTimeout(h._ended.bind(h,u),100),h;var z=!!(u._loop||h._sprite[g][2]);if(h._emit("end",u._id),!h._webAudio&&z&&h.stop(u._id,!0).play(u._id),h._webAudio&&z){h._emit("play",u._id),u._seek=u._start||0,u._rateSeek=0,u._playStart=t.ctx.currentTime;var b=(u._stop-u._start)*1e3/Math.abs(u._rate);h._endTimers[u._id]=setTimeout(h._ended.bind(h,u),b)}return h._webAudio&&!z&&(u._paused=!0,u._ended=!0,u._seek=u._start||0,u._rateSeek=0,h._clearTimer(u._id),h._cleanBuffer(u._node),t._autoSuspend()),!h._webAudio&&!z&&h.stop(u._id,!0),h},_clearTimer:function(u){var h=this;if(h._endTimers[u]){if(typeof h._endTimers[u]!="function")clearTimeout(h._endTimers[u]);else{var g=h._soundById(u);g&&g._node&&g._node.removeEventListener("ended",h._endTimers[u],!1)}delete h._endTimers[u]}return h},_soundById:function(u){for(var h=this,g=0;g<h._sounds.length;g++)if(u===h._sounds[g]._id)return h._sounds[g];return null},_inactiveSound:function(){var u=this;u._drain();for(var h=0;h<u._sounds.length;h++)if(u._sounds[h]._ended)return u._sounds[h].reset();return new s(u)},_drain:function(){var u=this,h=u._pool,g=0,z=0;if(!(u._sounds.length<h)){for(z=0;z<u._sounds.length;z++)u._sounds[z]._ended&&g++;for(z=u._sounds.length-1;z>=0;z--){if(g<=h)return;u._sounds[z]._ended&&(u._webAudio&&u._sounds[z]._node&&u._sounds[z]._node.disconnect(0),u._sounds.splice(z,1),g--)}}},_getSoundIds:function(u){var h=this;if(typeof u>"u"){for(var g=[],z=0;z<h._sounds.length;z++)g.push(h._sounds[z]._id);return g}else return[u]},_refreshBuffer:function(u){var h=this;return u._node.bufferSource=t.ctx.createBufferSource(),u._node.bufferSource.buffer=l[h._src],u._panner?u._node.bufferSource.connect(u._panner):u._node.bufferSource.connect(u._node),u._node.bufferSource.loop=u._loop,u._loop&&(u._node.bufferSource.loopStart=u._start||0,u._node.bufferSource.loopEnd=u._stop||0),u._node.bufferSource.playbackRate.setValueAtTime(u._rate,t.ctx.currentTime),h},_cleanBuffer:function(u){var h=this,g=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!u.bufferSource)return h;if(t._scratchBuffer&&u.bufferSource&&(u.bufferSource.onended=null,u.bufferSource.disconnect(0),g))try{u.bufferSource.buffer=t._scratchBuffer}catch{}return u.bufferSource=null,h},_clearSound:function(u){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(u.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var s=function(u){this._parent=u,this.init()};s.prototype={init:function(){var u=this,h=u._parent;return u._muted=h._muted,u._loop=h._loop,u._volume=h._volume,u._rate=h._rate,u._seek=0,u._paused=!0,u._ended=!0,u._sprite="__default",u._id=++t._counter,h._sounds.push(u),u.create(),u},create:function(){var u=this,h=u._parent,g=t._muted||u._muted||u._parent._muted?0:u._volume;return h._webAudio?(u._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),u._node.gain.setValueAtTime(g,t.ctx.currentTime),u._node.paused=!0,u._node.connect(t.masterGain)):t.noAudio||(u._node=t._obtainHtml5Audio(),u._errorFn=u._errorListener.bind(u),u._node.addEventListener("error",u._errorFn,!1),u._loadFn=u._loadListener.bind(u),u._node.addEventListener(t._canPlayEvent,u._loadFn,!1),u._endFn=u._endListener.bind(u),u._node.addEventListener("ended",u._endFn,!1),u._node.src=h._src,u._node.preload=h._preload===!0?"auto":h._preload,u._node.volume=g*t.volume(),u._node.load()),u},reset:function(){var u=this,h=u._parent;return u._muted=h._muted,u._loop=h._loop,u._volume=h._volume,u._rate=h._rate,u._seek=0,u._rateSeek=0,u._paused=!0,u._ended=!0,u._sprite="__default",u._id=++t._counter,u},_errorListener:function(){var u=this;u._parent._emit("loaderror",u._id,u._node.error?u._node.error.code:0),u._node.removeEventListener("error",u._errorFn,!1)},_loadListener:function(){var u=this,h=u._parent;h._duration=Math.ceil(u._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),u._node.removeEventListener(t._canPlayEvent,u._loadFn,!1)},_endListener:function(){var u=this,h=u._parent;h._duration===1/0&&(h._duration=Math.ceil(u._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(u)),u._node.removeEventListener("ended",u._endFn,!1)}};var l={},o=function(u){var h=u._src;if(l[h]){u._duration=l[h].duration,m(u);return}if(/^data:[^;]+;base64,/.test(h)){for(var g=atob(h.split(",")[1]),z=new Uint8Array(g.length),b=0;b<g.length;++b)z[b]=g.charCodeAt(b);f(z.buffer,u)}else{var x=new XMLHttpRequest;x.open(u._xhr.method,h,!0),x.withCredentials=u._xhr.withCredentials,x.responseType="arraybuffer",u._xhr.headers&&Object.keys(u._xhr.headers).forEach(function(w){x.setRequestHeader(w,u._xhr.headers[w])}),x.onload=function(){var w=(x.status+"")[0];if(w!=="0"&&w!=="2"&&w!=="3"){u._emit("loaderror",null,"Failed loading audio file with status: "+x.status+".");return}f(x.response,u)},x.onerror=function(){u._webAudio&&(u._html5=!0,u._webAudio=!1,u._sounds=[],delete l[h],u.load())},d(x)}},d=function(u){try{u.send()}catch{u.onerror()}},f=function(u,h){var g=function(){h._emit("loaderror",null,"Decoding audio data failed.")},z=function(b){b&&h._sounds.length>0?(l[h._src]=b,m(h,b)):g()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(u).then(z).catch(g):t.ctx.decodeAudioData(u,z,g)},m=function(u,h){h&&!u._duration&&(u._duration=h.duration),Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue())},y=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var u=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),g=h?parseInt(h[1],10):null;if(u&&g&&g<9){var z=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!z&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};e.Howler=t,e.Howl=i,typeof Vs<"u"?(Vs.HowlerGlobal=n,Vs.Howler=t,Vs.Howl=i,Vs.Sound=s):typeof window<"u"&&(window.HowlerGlobal=n,window.Howler=t,window.Howl=i,window.Sound=s)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var i=this;if(!i.ctx||!i.ctx.listener)return i;for(var s=i._howls.length-1;s>=0;s--)i._howls[s].stereo(t);return i},HowlerGlobal.prototype.pos=function(t,i,s){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(i=typeof i!="number"?l._pos[1]:i,s=typeof s!="number"?l._pos[2]:s,typeof t=="number")l._pos=[t,i,s],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(t,i,s,l,o,d){var f=this;if(!f.ctx||!f.ctx.listener)return f;var m=f._orientation;if(i=typeof i!="number"?m[1]:i,s=typeof s!="number"?m[2]:s,l=typeof l!="number"?m[3]:l,o=typeof o!="number"?m[4]:o,d=typeof d!="number"?m[5]:d,typeof t=="number")f._orientation=[t,i,s,l,o,d],typeof f.ctx.listener.forwardX<"u"?(f.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),f.ctx.listener.forwardY.setTargetAtTime(i,Howler.ctx.currentTime,.1),f.ctx.listener.forwardZ.setTargetAtTime(s,Howler.ctx.currentTime,.1),f.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),f.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),f.ctx.listener.upZ.setTargetAtTime(d,Howler.ctx.currentTime,.1)):f.ctx.listener.setOrientation(t,i,s,l,o,d);else return m;return f},Howl.prototype.init=function(t){return function(i){var s=this;return s._orientation=i.orientation||[1,0,0],s._stereo=i.stereo||null,s._pos=i.pos||null,s._pannerAttr={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:360,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:360,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:0,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:"inverse",maxDistance:typeof i.maxDistance<"u"?i.maxDistance:1e4,panningModel:typeof i.panningModel<"u"?i.panningModel:"HRTF",refDistance:typeof i.refDistance<"u"?i.refDistance:1,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:1},s._onstereo=i.onstereo?[{fn:i.onstereo}]:[],s._onpos=i.onpos?[{fn:i.onpos}]:[],s._onorientation=i.onorientation?[{fn:i.onorientation}]:[],t.call(this,i)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,i){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"stereo",action:function(){s.stereo(t,i)}}),s;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof i>"u")if(typeof t=="number")s._stereo=t,s._pos=[t,0,0];else return s._stereo;for(var o=s._getSoundIds(i),d=0;d<o.length;d++){var f=s._soundById(o[d]);if(f)if(typeof t=="number")f._stereo=t,f._pos=[t,0,0],f._node&&(f._pannerAttr.panningModel="equalpower",(!f._panner||!f._panner.pan)&&n(f,l),l==="spatial"?typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):f._panner.setPosition(t,0,0):f._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),s._emit("stereo",f._id);else return f._stereo}return s},Howl.prototype.pos=function(t,i,s,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,i,s,l)}}),o;if(i=typeof i!="number"?0:i,s=typeof s!="number"?-.5:s,typeof l>"u")if(typeof t=="number")o._pos=[t,i,s];else return o._pos;for(var d=o._getSoundIds(l),f=0;f<d.length;f++){var m=o._soundById(d[f]);if(m)if(typeof t=="number")m._pos=[t,i,s],m._node&&((!m._panner||m._panner.pan)&&n(m,"spatial"),typeof m._panner.positionX<"u"?(m._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),m._panner.positionY.setValueAtTime(i,Howler.ctx.currentTime),m._panner.positionZ.setValueAtTime(s,Howler.ctx.currentTime)):m._panner.setPosition(t,i,s)),o._emit("pos",m._id);else return m._pos}return o},Howl.prototype.orientation=function(t,i,s,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,i,s,l)}}),o;if(i=typeof i!="number"?o._orientation[1]:i,s=typeof s!="number"?o._orientation[2]:s,typeof l>"u")if(typeof t=="number")o._orientation=[t,i,s];else return o._orientation;for(var d=o._getSoundIds(l),f=0;f<d.length;f++){var m=o._soundById(d[f]);if(m)if(typeof t=="number")m._orientation=[t,i,s],m._node&&(m._panner||(m._pos||(m._pos=o._pos||[0,0,-.5]),n(m,"spatial")),typeof m._panner.orientationX<"u"?(m._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),m._panner.orientationY.setValueAtTime(i,Howler.ctx.currentTime),m._panner.orientationZ.setValueAtTime(s,Howler.ctx.currentTime)):m._panner.setOrientation(t,i,s)),o._emit("orientation",m._id);else return m._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,i=arguments,s,l,o;if(!t._webAudio)return t;if(i.length===0)return t._pannerAttr;if(i.length===1)if(typeof i[0]=="object")s=i[0],typeof l>"u"&&(s.pannerAttr||(s.pannerAttr={coneInnerAngle:s.coneInnerAngle,coneOuterAngle:s.coneOuterAngle,coneOuterGain:s.coneOuterGain,distanceModel:s.distanceModel,maxDistance:s.maxDistance,refDistance:s.refDistance,rolloffFactor:s.rolloffFactor,panningModel:s.panningModel}),t._pannerAttr={coneInnerAngle:typeof s.pannerAttr.coneInnerAngle<"u"?s.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof s.pannerAttr.coneOuterAngle<"u"?s.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof s.pannerAttr.coneOuterGain<"u"?s.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof s.pannerAttr.distanceModel<"u"?s.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof s.pannerAttr.maxDistance<"u"?s.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof s.pannerAttr.refDistance<"u"?s.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof s.pannerAttr.rolloffFactor<"u"?s.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof s.pannerAttr.panningModel<"u"?s.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(i[0],10)),o?o._pannerAttr:t._pannerAttr;else i.length===2&&(s=i[0],l=parseInt(i[1],10));for(var d=t._getSoundIds(l),f=0;f<d.length;f++)if(o=t._soundById(d[f]),o){var m=o._pannerAttr;m={coneInnerAngle:typeof s.coneInnerAngle<"u"?s.coneInnerAngle:m.coneInnerAngle,coneOuterAngle:typeof s.coneOuterAngle<"u"?s.coneOuterAngle:m.coneOuterAngle,coneOuterGain:typeof s.coneOuterGain<"u"?s.coneOuterGain:m.coneOuterGain,distanceModel:typeof s.distanceModel<"u"?s.distanceModel:m.distanceModel,maxDistance:typeof s.maxDistance<"u"?s.maxDistance:m.maxDistance,refDistance:typeof s.refDistance<"u"?s.refDistance:m.refDistance,rolloffFactor:typeof s.rolloffFactor<"u"?s.rolloffFactor:m.rolloffFactor,panningModel:typeof s.panningModel<"u"?s.panningModel:m.panningModel};var y=o._panner;y||(o._pos||(o._pos=t._pos||[0,0,-.5]),n(o,"spatial"),y=o._panner),y.coneInnerAngle=m.coneInnerAngle,y.coneOuterAngle=m.coneOuterAngle,y.coneOuterGain=m.coneOuterGain,y.distanceModel=m.distanceModel,y.maxDistance=m.maxDistance,y.refDistance=m.refDistance,y.rolloffFactor=m.rolloffFactor,y.panningModel=m.panningModel}return t},Sound.prototype.init=function(t){return function(){var i=this,s=i._parent;i._orientation=s._orientation,i._stereo=s._stereo,i._pos=s._pos,i._pannerAttr=s._pannerAttr,t.call(this),i._stereo?s.stereo(i._stereo):i._pos&&s.pos(i._pos[0],i._pos[1],i._pos[2],i._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var i=this,s=i._parent;return i._orientation=s._orientation,i._stereo=s._stereo,i._pos=s._pos,i._pannerAttr=s._pannerAttr,i._stereo?s.stereo(i._stereo):i._pos?s.pos(i._pos[0],i._pos[1],i._pos[2],i._id):i._panner&&(i._panner.disconnect(0),i._panner=void 0,s._refreshBuffer(i)),t.call(this)}}(Sound.prototype.reset);var n=function(t,i){i=i||"spatial",i==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(sf)),sf}var yD=gD();const kD="/flashcard/assets/soundsprite-64vFzmZt.mp3",Ux={success:[0,1e3],error:[1e3,1e3]},vD=new yD.Howl({src:[kD],sprite:Ux,volume:.5});function zD(){return _.useCallback(e=>{Ux[e]?vD.play(e):console.warn(`Sound "${e}" not found in sprite`)},[])}const bD=function(e){const n=new SpeechSynthesisUtterance(e);n.lang="en-US",n.rate=1,n.pitch=1,speechSynthesis.speak(n)},wD=({flashcards:e,onReset:n})=>{const[t,i]=_.useState(0),[s,l]=_.useState(!1),[o,d]=_.useState([]),[f,m]=_.useState(""),[y,u]=_.useState(null),[h,g]=_.useState("bg-blue-100"),[z,b]=_.useState(!0),[x,w]=_.useState(!1),[S,C]=_.useState(!1),R=_.useRef(null),D=zD(),[P,$]=_.useState(1),[Y,K]=_.useState(0),L=_.useCallback(()=>{const X=e[t];if(S&&bD(X.front),!X)return;const F=X.back;m(F);const q=e.filter((E,ce)=>ce!==t).map(E=>E.back),T=Array.from(new Set(q)).filter(E=>E!==F),I=[];for(;I.length<2&&T.length>0;){const E=Math.floor(Math.random()*T.length);I.push(T[E]),T.splice(E,1)}for(;I.length<2;)I.push(`Another Option ${I.length+1}`);const H=tb([F,...I]);d(H),u(null),l(!1),g("bg-blue-100")},[e,t]);_.useEffect(()=>{L()},[t,e,L]);const Z=_.useCallback(()=>{l(X=>!X)},[]),G=_.useCallback(()=>{R.current&&(clearTimeout(R.current),R.current=null),l(!1),u(null),g("bg-blue-100"),i(X=>{const F=(X+1)%e.length;return $(q=>q+1),F})},[e,e.length]),ee=_.useCallback(()=>{R.current&&(clearTimeout(R.current),R.current=null),l(!1),u(null),g("bg-blue-100"),i(X=>{const F=(X-1+e.length)%e.length;return $(q=>q+1),F})},[e.length]),B=_.useCallback((X,F)=>{y===null&&(u(F),l(!0),X===f?(x&&D("success"),g("bg-green-100"),K(q=>q+1),z&&(R.current=setTimeout(()=>{G()},1e3))):(x&&D("error"),g("bg-red-100"),z&&(R.current=setTimeout(()=>{G()},2e3))))},[y,f,z,G]);_.useEffect(()=>()=>{R.current&&clearTimeout(R.current)},[t]),_.useEffect(()=>{const X=F=>{switch(F.key){case"ArrowLeft":ee();break;case"ArrowRight":G();break;case"ArrowUp":case"ArrowDown":Z();break;case"Enter":n();break;case"1":case"2":case"3":const q=parseInt(F.key)-1;o[q]&&B(o[q],q);break}};return window.addEventListener("keydown",X),()=>{window.removeEventListener("keydown",X)}},[ee,G,Z,n,o,B]);const re=_.useCallback(()=>{y===null?($(1),K(0)):($(0),K(0)),R.current&&(clearTimeout(R.current),R.current=null),l(!1),u(null),g("bg-blue-100")},[y]);if(e.length===0)return O.jsxs("div",{className:"text-center p-6",children:[O.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"No flashcards loaded. Please add some to start!"}),O.jsx(qe,{onClick:n,children:"Start New Session"})]});const ue=e[t];return O.jsxs("div",{className:un("w-full max-w-2xl p-6 flex flex-col items-center rounded-lg shadow-md transition-colors duration-300",h),children:[O.jsxs("div",{className:"flex items-center space-x-2 mb-4 self-end",children:[O.jsx(au,{id:"sound-mode",checked:x,onCheckedChange:w}),O.jsx(su,{htmlFor:"sound-mode",children:"Sound"}),O.jsx(au,{id:"speech-mode",checked:S,onCheckedChange:C}),O.jsx(su,{htmlFor:"speech-mode",children:"Speech"}),O.jsx(au,{id:"auto-next-mode",checked:z,onCheckedChange:b}),O.jsx(su,{htmlFor:"auto-next-mode",children:"Auto-Next"})]}),O.jsx(rw,{className:"w-full h-80 flex flex-col justify-between items-center p-6 mb-6 relative perspective-1000 bg-white",children:O.jsxs("div",{className:un("relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",s?"rotate-y-180":""),children:[O.jsx("div",{className:"absolute w-full h-full backface-hidden flex items-center justify-center text-center p-4",children:O.jsx(Vf,{className:"flex flex-col items-center justify-center h-full w-full",children:O.jsx(Ff,{className:"text-3xl font-bold",children:ue.front})})}),O.jsx("div",{className:"absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center text-center p-4",children:O.jsx(Vf,{className:"flex flex-col items-center justify-center h-full w-full",children:O.jsx(Ff,{className:"text-3xl font-bold",children:ue.back})})})]})},ue.id),O.jsxs("div",{className:"flex justify-center items-center space-x-4 mb-6 w-full",children:[O.jsx(qe,{onClick:ee,variant:"outline",size:"icon",children:O.jsx(KS,{className:"h-5 w-5"})}),O.jsxs(qe,{onClick:Z,className:"flex-grow max-w-xs",children:[O.jsx(QS,{className:"h-4 w-4 mr-2"})," Flip Card"]}),O.jsx(qe,{onClick:G,variant:"outline",size:"icon",children:O.jsx(GS,{className:"h-5 w-5"})})]}),O.jsx("div",{className:"grid grid-cols-1 gap-3 w-full max-w-xs mb-6",children:o.map((X,F)=>O.jsxs(qe,{onClick:()=>B(X,F),variant:y===F?X===f?"default":"destructive":"outline",className:un("w-full py-3 text-lg",y!==null&&X===f&&"bg-green-500 hover:bg-green-600 text-white",y===F&&X!==f&&"bg-red-500 hover:bg-red-600 text-white",y!==null&&y!==F&&X!==f&&"opacity-50 cursor-not-allowed"),disabled:y!==null,children:[F+1,". ",X]},F))}),O.jsxs("div",{className:"text-lg text-gray-700 mb-6 flex justify-center items-center space-x-2",children:[O.jsxs("span",{children:["Cards Presented: ",P]}),O.jsx("span",{children:"|"}),O.jsxs("span",{children:["Correct Answers:"," ",O.jsx(pD.span,{initial:{scale:1,color:"#000000"},animate:{scale:[1,2.5,1],color:["#000000","#22C55E","#000000"]},transition:{duration:.7},className:"font-bold",children:Y},Y)]})]}),O.jsxs("div",{className:"flex space-x-4",children:[O.jsx(qe,{onClick:re,variant:"outline",children:"Reset Stats"}),O.jsx(qe,{onClick:n,variant:"secondary",children:"Start New Session"})]})]})},xD="/flashcard/assets/background-CIPNA0V-.jpeg",jD=()=>{const[e,n]=_.useState(null),t=s=>{const l=tb(s);n(l)},i=()=>{n(null)};return O.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 bg-no-repeat bg-cover",style:{backgroundImage:`url(${xD})`},children:[O.jsx("h1",{className:"text-4xl font-bold mb-8 text-center",children:"Flashcard Learner"}),e===null?O.jsx(SA,{onLoadCards:t}):O.jsx(wD,{flashcards:e,onReset:i}),O.jsx("div",{className:"mt-8",children:O.jsx(Nf,{to:"/specs",children:O.jsx(qe,{variant:"link",className:"text-blue-600 hover:text-blue-800",children:"View Application Specification"})})}),O.jsx(cA,{})]})},SD=()=>{const e=So();return _.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),O.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:O.jsxs("div",{className:"text-center",children:[O.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),O.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),O.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function CD(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const _D=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,TD=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ED={};function bv(e,n){return(ED.jsx?TD:_D).test(e)}const AD=/[ \t\n\f\r]/g;function PD(e){return typeof e=="object"?e.type==="text"?wv(e.value):!1:wv(e)}function wv(e){return e.replace(AD,"")===""}class Ao{constructor(n,t,i){this.normal=t,this.property=n,i&&(this.space=i)}}Ao.prototype.normal={};Ao.prototype.property={};Ao.prototype.space=void 0;function $x(e,n){const t={},i={};for(const s of e)Object.assign(t,s.property),Object.assign(i,s.normal);return new Ao(t,i,n)}function lm(e){return e.toLowerCase()}class at{constructor(n,t){this.attribute=t,this.property=n}}at.prototype.attribute="";at.prototype.booleanish=!1;at.prototype.boolean=!1;at.prototype.commaOrSpaceSeparated=!1;at.prototype.commaSeparated=!1;at.prototype.defined=!1;at.prototype.mustUseProperty=!1;at.prototype.number=!1;at.prototype.overloadedBoolean=!1;at.prototype.property="";at.prototype.spaceSeparated=!1;at.prototype.space=void 0;let RD=0;const Ee=Zi(),dn=Zi(),um=Zi(),ae=Zi(),We=Zi(),Oa=Zi(),dt=Zi();function Zi(){return 2**++RD}const cm=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ee,booleanish:dn,commaOrSpaceSeparated:dt,commaSeparated:Oa,number:ae,overloadedBoolean:um,spaceSeparated:We},Symbol.toStringTag,{value:"Module"})),of=Object.keys(cm);class zh extends at{constructor(n,t,i,s){let l=-1;if(super(n,t),xv(this,"space",s),typeof i=="number")for(;++l<of.length;){const o=of[l];xv(this,of[l],(i&cm[o])===cm[o])}}}zh.prototype.defined=!0;function xv(e,n,t){t&&(e[n]=t)}function is(e){const n={},t={};for(const[i,s]of Object.entries(e.properties)){const l=new zh(i,e.transform(e.attributes||{},i),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(l.mustUseProperty=!0),n[i]=l,t[lm(i)]=i,t[lm(l.attribute)]=i}return new Ao(n,t,e.space)}const Hx=is({properties:{ariaActiveDescendant:null,ariaAtomic:dn,ariaAutoComplete:null,ariaBusy:dn,ariaChecked:dn,ariaColCount:ae,ariaColIndex:ae,ariaColSpan:ae,ariaControls:We,ariaCurrent:null,ariaDescribedBy:We,ariaDetails:null,ariaDisabled:dn,ariaDropEffect:We,ariaErrorMessage:null,ariaExpanded:dn,ariaFlowTo:We,ariaGrabbed:dn,ariaHasPopup:null,ariaHidden:dn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:We,ariaLevel:ae,ariaLive:null,ariaModal:dn,ariaMultiLine:dn,ariaMultiSelectable:dn,ariaOrientation:null,ariaOwns:We,ariaPlaceholder:null,ariaPosInSet:ae,ariaPressed:dn,ariaReadOnly:dn,ariaRelevant:null,ariaRequired:dn,ariaRoleDescription:We,ariaRowCount:ae,ariaRowIndex:ae,ariaRowSpan:ae,ariaSelected:dn,ariaSetSize:ae,ariaSort:null,ariaValueMax:ae,ariaValueMin:ae,ariaValueNow:ae,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Wx(e,n){return n in e?e[n]:n}function qx(e,n){return Wx(e,n.toLowerCase())}const ID=is({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Oa,acceptCharset:We,accessKey:We,action:null,allow:null,allowFullScreen:Ee,allowPaymentRequest:Ee,allowUserMedia:Ee,alt:null,as:null,async:Ee,autoCapitalize:null,autoComplete:We,autoFocus:Ee,autoPlay:Ee,blocking:We,capture:null,charSet:null,checked:Ee,cite:null,className:We,cols:ae,colSpan:null,content:null,contentEditable:dn,controls:Ee,controlsList:We,coords:ae|Oa,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ee,defer:Ee,dir:null,dirName:null,disabled:Ee,download:um,draggable:dn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ee,formTarget:null,headers:We,height:ae,hidden:um,high:ae,href:null,hrefLang:null,htmlFor:We,httpEquiv:We,id:null,imageSizes:null,imageSrcSet:null,inert:Ee,inputMode:null,integrity:null,is:null,isMap:Ee,itemId:null,itemProp:We,itemRef:We,itemScope:Ee,itemType:We,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ee,low:ae,manifest:null,max:null,maxLength:ae,media:null,method:null,min:null,minLength:ae,multiple:Ee,muted:Ee,name:null,nonce:null,noModule:Ee,noValidate:Ee,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ee,optimum:ae,pattern:null,ping:We,placeholder:null,playsInline:Ee,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ee,referrerPolicy:null,rel:We,required:Ee,reversed:Ee,rows:ae,rowSpan:ae,sandbox:We,scope:null,scoped:Ee,seamless:Ee,selected:Ee,shadowRootClonable:Ee,shadowRootDelegatesFocus:Ee,shadowRootMode:null,shape:null,size:ae,sizes:null,slot:null,span:ae,spellCheck:dn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ae,step:null,style:null,tabIndex:ae,target:null,title:null,translate:null,type:null,typeMustMatch:Ee,useMap:null,value:dn,width:ae,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:We,axis:null,background:null,bgColor:null,border:ae,borderColor:null,bottomMargin:ae,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ee,declare:Ee,event:null,face:null,frame:null,frameBorder:null,hSpace:ae,leftMargin:ae,link:null,longDesc:null,lowSrc:null,marginHeight:ae,marginWidth:ae,noResize:Ee,noHref:Ee,noShade:Ee,noWrap:Ee,object:null,profile:null,prompt:null,rev:null,rightMargin:ae,rules:null,scheme:null,scrolling:dn,standby:null,summary:null,text:null,topMargin:ae,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ae,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ee,disableRemotePlayback:Ee,prefix:null,property:null,results:ae,security:null,unselectable:null},space:"html",transform:qx}),MD=is({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:dt,accentHeight:ae,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ae,amplitude:ae,arabicForm:null,ascent:ae,attributeName:null,attributeType:null,azimuth:ae,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ae,by:null,calcMode:null,capHeight:ae,className:We,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ae,diffuseConstant:ae,direction:null,display:null,dur:null,divisor:ae,dominantBaseline:null,download:Ee,dx:null,dy:null,edgeMode:null,editable:null,elevation:ae,enableBackground:null,end:null,event:null,exponent:ae,externalResourcesRequired:null,fill:null,fillOpacity:ae,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Oa,g2:Oa,glyphName:Oa,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ae,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ae,horizOriginX:ae,horizOriginY:ae,id:null,ideographic:ae,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ae,k:ae,k1:ae,k2:ae,k3:ae,k4:ae,kernelMatrix:dt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ae,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ae,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ae,overlineThickness:ae,paintOrder:null,panose1:null,path:null,pathLength:ae,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:We,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ae,pointsAtY:ae,pointsAtZ:ae,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:dt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:dt,rev:dt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:dt,requiredFeatures:dt,requiredFonts:dt,requiredFormats:dt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ae,specularExponent:ae,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ae,strikethroughThickness:ae,string:null,stroke:null,strokeDashArray:dt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ae,strokeOpacity:ae,strokeWidth:null,style:null,surfaceScale:ae,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:dt,tabIndex:ae,tableValues:null,target:null,targetX:ae,targetY:ae,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:dt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ae,underlineThickness:ae,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ae,values:null,vAlphabetic:ae,vMathematical:ae,vectorEffect:null,vHanging:ae,vIdeographic:ae,version:null,vertAdvY:ae,vertOriginX:ae,vertOriginY:ae,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ae,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Wx}),Kx=is({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Gx=is({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:qx}),Qx=is({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),DD={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},LD=/[A-Z]/g,jv=/-[a-z]/g,OD=/^data[-\w.:]+$/i;function ND(e,n){const t=lm(n);let i=n,s=at;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&OD.test(n)){if(n.charAt(4)==="-"){const l=n.slice(5).replace(jv,VD);i="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=n.slice(4);if(!jv.test(l)){let o=l.replace(LD,FD);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}s=zh}return new s(i,n)}function FD(e){return"-"+e.toLowerCase()}function VD(e){return e.charAt(1).toUpperCase()}const BD=$x([Hx,ID,Kx,Gx,Qx],"html"),bh=$x([Hx,MD,Kx,Gx,Qx],"svg");function UD(e){return e.join(" ").trim()}var Ca={},lf,Sv;function $D(){if(Sv)return lf;Sv=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,t=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,d=/^\s+|\s+$/g,f=`
`,m="/",y="*",u="",h="comment",g="declaration";lf=function(b,x){if(typeof b!="string")throw new TypeError("First argument must be a string");if(!b)return[];x=x||{};var w=1,S=1;function C(ee){var B=ee.match(n);B&&(w+=B.length);var re=ee.lastIndexOf(f);S=~re?ee.length-re:S+ee.length}function R(){var ee={line:w,column:S};return function(B){return B.position=new D(ee),Y(),B}}function D(ee){this.start=ee,this.end={line:w,column:S},this.source=x.source}D.prototype.content=b;function P(ee){var B=new Error(x.source+":"+w+":"+S+": "+ee);if(B.reason=ee,B.filename=x.source,B.line=w,B.column=S,B.source=b,!x.silent)throw B}function $(ee){var B=ee.exec(b);if(B){var re=B[0];return C(re),b=b.slice(re.length),B}}function Y(){$(t)}function K(ee){var B;for(ee=ee||[];B=L();)B!==!1&&ee.push(B);return ee}function L(){var ee=R();if(!(m!=b.charAt(0)||y!=b.charAt(1))){for(var B=2;u!=b.charAt(B)&&(y!=b.charAt(B)||m!=b.charAt(B+1));)++B;if(B+=2,u===b.charAt(B-1))return P("End of comment missing");var re=b.slice(2,B-2);return S+=2,C(re),b=b.slice(B),S+=2,ee({type:h,comment:re})}}function Z(){var ee=R(),B=$(i);if(B){if(L(),!$(s))return P("property missing ':'");var re=$(l),ue=ee({type:g,property:z(B[0].replace(e,u)),value:re?z(re[0].replace(e,u)):u});return $(o),ue}}function G(){var ee=[];K(ee);for(var B;B=Z();)B!==!1&&(ee.push(B),K(ee));return ee}return Y(),G()};function z(b){return b?b.replace(d,u):u}return lf}var Cv;function HD(){if(Cv)return Ca;Cv=1;var e=Ca&&Ca.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Ca,"__esModule",{value:!0}),Ca.default=t;var n=e($D());function t(i,s){var l=null;if(!i||typeof i!="string")return l;var o=(0,n.default)(i),d=typeof s=="function";return o.forEach(function(f){if(f.type==="declaration"){var m=f.property,y=f.value;d?s(m,y,f):y&&(l=l||{},l[m]=y)}}),l}return Ca}var Ws={},_v;function WD(){if(_v)return Ws;_v=1,Object.defineProperty(Ws,"__esModule",{value:!0}),Ws.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,t=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,l=function(m){return!m||t.test(m)||e.test(m)},o=function(m,y){return y.toUpperCase()},d=function(m,y){return"".concat(y,"-")},f=function(m,y){return y===void 0&&(y={}),l(m)?m:(m=m.toLowerCase(),y.reactCompat?m=m.replace(s,d):m=m.replace(i,d),m.replace(n,o))};return Ws.camelCase=f,Ws}var qs,Tv;function qD(){if(Tv)return qs;Tv=1;var e=qs&&qs.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},n=e(HD()),t=WD();function i(s,l){var o={};return!s||typeof s!="string"||(0,n.default)(s,function(d,f){d&&f&&(o[(0,t.camelCase)(d,l)]=f)}),o}return i.default=i,qs=i,qs}var KD=qD();const GD=Tu(KD),Yx=Xx("end"),wh=Xx("start");function Xx(e){return n;function n(t){const i=t&&t.position&&t.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function QD(e){const n=wh(e),t=Yx(e);if(n&&t)return{start:n,end:t}}function to(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ev(e.position):"start"in e||"end"in e?Ev(e):"line"in e||"column"in e?dm(e):""}function dm(e){return Av(e&&e.line)+":"+Av(e&&e.column)}function Ev(e){return dm(e&&e.start)+"-"+dm(e&&e.end)}function Av(e){return e&&typeof e=="number"?e:1}class Ln extends Error{constructor(n,t,i){super(),typeof t=="string"&&(i=t,t=void 0);let s="",l={},o=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?s=n:!l.cause&&n&&(o=!0,s=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof i=="string"){const f=i.indexOf(":");f===-1?l.ruleId=i:(l.source=i.slice(0,f),l.ruleId=i.slice(f+1))}if(!l.place&&l.ancestors&&l.ancestors){const f=l.ancestors[l.ancestors.length-1];f&&(l.place=f.position)}const d=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=d?d.line:void 0,this.name=to(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=o&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ln.prototype.file="";Ln.prototype.name="";Ln.prototype.reason="";Ln.prototype.message="";Ln.prototype.stack="";Ln.prototype.column=void 0;Ln.prototype.line=void 0;Ln.prototype.ancestors=void 0;Ln.prototype.cause=void 0;Ln.prototype.fatal=void 0;Ln.prototype.place=void 0;Ln.prototype.ruleId=void 0;Ln.prototype.source=void 0;const xh={}.hasOwnProperty,YD=new Map,XD=/[A-Z]/g,JD=new Set(["table","tbody","thead","tfoot","tr"]),ZD=new Set(["td","th"]),Jx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function eL(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let i;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=lL(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=oL(t,n.jsx,n.jsxs)}const s={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:i,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?bh:BD,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},l=Zx(s,e,void 0);return l&&typeof l!="string"?l:s.create(e,s.Fragment,{children:l||void 0},void 0)}function Zx(e,n,t){if(n.type==="element")return nL(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return tL(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return iL(e,n,t);if(n.type==="mdxjsEsm")return rL(e,n);if(n.type==="root")return aL(e,n,t);if(n.type==="text")return sL(e,n)}function nL(e,n,t){const i=e.schema;let s=i;n.tagName.toLowerCase()==="svg"&&i.space==="html"&&(s=bh,e.schema=s),e.ancestors.push(n);const l=n0(e,n.tagName,!1),o=uL(e,n);let d=Sh(e,n);return JD.has(n.tagName)&&(d=d.filter(function(f){return typeof f=="string"?!PD(f):!0})),e0(e,o,l,n),jh(o,d),e.ancestors.pop(),e.schema=i,e.create(n,l,o,t)}function tL(e,n){if(n.data&&n.data.estree&&e.evaluater){const i=n.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}ko(e,n.position)}function rL(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);ko(e,n.position)}function iL(e,n,t){const i=e.schema;let s=i;n.name==="svg"&&i.space==="html"&&(s=bh,e.schema=s),e.ancestors.push(n);const l=n.name===null?e.Fragment:n0(e,n.name,!0),o=cL(e,n),d=Sh(e,n);return e0(e,o,l,n),jh(o,d),e.ancestors.pop(),e.schema=i,e.create(n,l,o,t)}function aL(e,n,t){const i={};return jh(i,Sh(e,n)),e.create(n,e.Fragment,i,t)}function sL(e,n){return n.value}function e0(e,n,t,i){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=i)}function jh(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function oL(e,n,t){return i;function i(s,l,o,d){const m=Array.isArray(o.children)?t:n;return d?m(l,o,d):m(l,o)}}function lL(e,n){return t;function t(i,s,l,o){const d=Array.isArray(l.children),f=wh(i);return n(s,l,o,d,{columnNumber:f?f.column-1:void 0,fileName:e,lineNumber:f?f.line:void 0},void 0)}}function uL(e,n){const t={};let i,s;for(s in n.properties)if(s!=="children"&&xh.call(n.properties,s)){const l=dL(e,s,n.properties[s]);if(l){const[o,d]=l;e.tableCellAlignToStyle&&o==="align"&&typeof d=="string"&&ZD.has(n.tagName)?i=d:t[o]=d}}if(i){const l=t.style||(t.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return t}function cL(e,n){const t={};for(const i of n.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const l=i.data.estree.body[0];l.type;const o=l.expression;o.type;const d=o.properties[0];d.type,Object.assign(t,e.evaluater.evaluateExpression(d.argument))}else ko(e,n.position);else{const s=i.name;let l;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const d=i.value.data.estree.body[0];d.type,l=e.evaluater.evaluateExpression(d.expression)}else ko(e,n.position);else l=i.value===null?!0:i.value;t[s]=l}return t}function Sh(e,n){const t=[];let i=-1;const s=e.passKeys?new Map:YD;for(;++i<n.children.length;){const l=n.children[i];let o;if(e.passKeys){const f=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(f){const m=s.get(f)||0;o=f+"-"+m,s.set(f,m+1)}}const d=Zx(e,l,o);d!==void 0&&t.push(d)}return t}function dL(e,n,t){const i=ND(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=i.commaSeparated?CD(t):UD(t)),i.property==="style"){let s=typeof t=="object"?t:fL(e,String(t));return e.stylePropertyNameCase==="css"&&(s=mL(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&i.space?DD[i.property]||i.property:i.attribute,t]}}function fL(e,n){try{return GD(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const i=t,s=new Ln("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=Jx+"#cannot-parse-style-attribute",s}}function n0(e,n,t){let i;if(!t)i={type:"Literal",value:n};else if(n.includes(".")){const s=n.split(".");let l=-1,o;for(;++l<s.length;){const d=bv(s[l])?{type:"Identifier",name:s[l]}:{type:"Literal",value:s[l]};o=o?{type:"MemberExpression",object:o,property:d,computed:!!(l&&d.type==="Literal"),optional:!1}:d}i=o}else i=bv(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(i.type==="Literal"){const s=i.value;return xh.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(i);ko(e)}function ko(e,n){const t=new Ln("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Jx+"#cannot-handle-mdx-estrees-without-createevaluater",t}function mL(e){const n={};let t;for(t in e)xh.call(e,t)&&(n[hL(t)]=e[t]);return n}function hL(e){let n=e.replace(XD,pL);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function pL(e){return"-"+e.toLowerCase()}const uf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},gL={};function Ch(e,n){const t=gL,i=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,s=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return t0(e,i,s)}function t0(e,n,t){if(yL(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Pv(e.children,n,t)}return Array.isArray(e)?Pv(e,n,t):""}function Pv(e,n,t){const i=[];let s=-1;for(;++s<e.length;)i[s]=t0(e[s],n,t);return i.join("")}function yL(e){return!!(e&&typeof e=="object")}const Rv=document.createElement("i");function _h(e){const n="&"+e+";";Rv.innerHTML=n;const t=Rv.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function ht(e,n,t,i){const s=e.length;let l=0,o;if(n<0?n=-n>s?0:s+n:n=n>s?s:n,t=t>0?t:0,i.length<1e4)o=Array.from(i),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);l<i.length;)o=i.slice(l,l+1e4),o.unshift(n,0),e.splice(...o),l+=1e4,n+=1e4}function _t(e,n){return e.length>0?(ht(e,e.length,0,n),e):n}const Iv={}.hasOwnProperty;function r0(e){const n={};let t=-1;for(;++t<e.length;)kL(n,e[t]);return n}function kL(e,n){let t;for(t in n){const s=(Iv.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let o;if(l)for(o in l){Iv.call(s,o)||(s[o]=[]);const d=l[o];vL(s[o],Array.isArray(d)?d:d?[d]:[])}}}function vL(e,n){let t=-1;const i=[];for(;++t<n.length;)(n[t].add==="after"?e:i).push(n[t]);ht(e,0,0,i)}function i0(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function qt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Wn=bi(/[A-Za-z]/),Dn=bi(/[\dA-Za-z]/),zL=bi(/[#-'*+\--9=?A-Z^-~]/);function ju(e){return e!==null&&(e<32||e===127)}const fm=bi(/\d/),bL=bi(/[\dA-Fa-f]/),wL=bi(/[!-/:-@[-`{-~]/);function be(e){return e!==null&&e<-2}function $e(e){return e!==null&&(e<0||e===32)}function Me(e){return e===-2||e===-1||e===32}const Wu=bi(new RegExp("\\p{P}|\\p{S}","u")),Qi=bi(/\s/);function bi(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function as(e){const n=[];let t=-1,i=0,s=0;for(;++t<e.length;){const l=e.charCodeAt(t);let o="";if(l===37&&Dn(e.charCodeAt(t+1))&&Dn(e.charCodeAt(t+2)))s=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));else if(l>55295&&l<57344){const d=e.charCodeAt(t+1);l<56320&&d>56319&&d<57344?(o=String.fromCharCode(l,d),s=1):o="�"}else o=String.fromCharCode(l);o&&(n.push(e.slice(i,t),encodeURIComponent(o)),i=t+s+1,o=""),s&&(t+=s,s=0)}return n.join("")+e.slice(i)}function De(e,n,t,i){const s=i?i-1:Number.POSITIVE_INFINITY;let l=0;return o;function o(f){return Me(f)?(e.enter(t),d(f)):n(f)}function d(f){return Me(f)&&l++<s?(e.consume(f),d):(e.exit(t),n(f))}}const xL={tokenize:jL};function jL(e){const n=e.attempt(this.parser.constructs.contentInitial,i,s);let t;return n;function i(d){if(d===null){e.consume(d);return}return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),De(e,n,"linePrefix")}function s(d){return e.enter("paragraph"),l(d)}function l(d){const f=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=f),t=f,o(d)}function o(d){if(d===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(d);return}return be(d)?(e.consume(d),e.exit("chunkText"),l):(e.consume(d),o)}}const SL={tokenize:CL},Mv={tokenize:_L};function CL(e){const n=this,t=[];let i=0,s,l,o;return d;function d(C){if(i<t.length){const R=t[i];return n.containerState=R[1],e.attempt(R[0].continuation,f,m)(C)}return m(C)}function f(C){if(i++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,s&&S();const R=n.events.length;let D=R,P;for(;D--;)if(n.events[D][0]==="exit"&&n.events[D][1].type==="chunkFlow"){P=n.events[D][1].end;break}w(i);let $=R;for(;$<n.events.length;)n.events[$][1].end={...P},$++;return ht(n.events,D+1,0,n.events.slice(R)),n.events.length=$,m(C)}return d(C)}function m(C){if(i===t.length){if(!s)return h(C);if(s.currentConstruct&&s.currentConstruct.concrete)return z(C);n.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Mv,y,u)(C)}function y(C){return s&&S(),w(i),h(C)}function u(C){return n.parser.lazy[n.now().line]=i!==t.length,o=n.now().offset,z(C)}function h(C){return n.containerState={},e.attempt(Mv,g,z)(C)}function g(C){return i++,t.push([n.currentConstruct,n.containerState]),h(C)}function z(C){if(C===null){s&&S(),w(0),e.consume(C);return}return s=s||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:l}),b(C)}function b(C){if(C===null){x(e.exit("chunkFlow"),!0),w(0),e.consume(C);return}return be(C)?(e.consume(C),x(e.exit("chunkFlow")),i=0,n.interrupt=void 0,d):(e.consume(C),b)}function x(C,R){const D=n.sliceStream(C);if(R&&D.push(null),C.previous=l,l&&(l.next=C),l=C,s.defineSkip(C.start),s.write(D),n.parser.lazy[C.start.line]){let P=s.events.length;for(;P--;)if(s.events[P][1].start.offset<o&&(!s.events[P][1].end||s.events[P][1].end.offset>o))return;const $=n.events.length;let Y=$,K,L;for(;Y--;)if(n.events[Y][0]==="exit"&&n.events[Y][1].type==="chunkFlow"){if(K){L=n.events[Y][1].end;break}K=!0}for(w(i),P=$;P<n.events.length;)n.events[P][1].end={...L},P++;ht(n.events,Y+1,0,n.events.slice($)),n.events.length=P}}function w(C){let R=t.length;for(;R-- >C;){const D=t[R];n.containerState=D[1],D[0].exit.call(n,e)}t.length=C}function S(){s.write([null]),l=void 0,s=void 0,n.containerState._closeFlow=void 0}}function _L(e,n,t){return De(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Xa(e){if(e===null||$e(e)||Qi(e))return 1;if(Wu(e))return 2}function qu(e,n,t){const i=[];let s=-1;for(;++s<e.length;){const l=e[s].resolveAll;l&&!i.includes(l)&&(n=l(n,t),i.push(l))}return n}const mm={name:"attention",resolveAll:TL,tokenize:EL};function TL(e,n){let t=-1,i,s,l,o,d,f,m,y;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(i=t;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;f=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const u={...e[i][1].end},h={...e[t][1].start};Dv(u,-f),Dv(h,f),o={type:f>1?"strongSequence":"emphasisSequence",start:u,end:{...e[i][1].end}},d={type:f>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:h},l={type:f>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},s={type:f>1?"strong":"emphasis",start:{...o.start},end:{...d.end}},e[i][1].end={...o.start},e[t][1].start={...d.end},m=[],e[i][1].end.offset-e[i][1].start.offset&&(m=_t(m,[["enter",e[i][1],n],["exit",e[i][1],n]])),m=_t(m,[["enter",s,n],["enter",o,n],["exit",o,n],["enter",l,n]]),m=_t(m,qu(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),m=_t(m,[["exit",l,n],["enter",d,n],["exit",d,n],["exit",s,n]]),e[t][1].end.offset-e[t][1].start.offset?(y=2,m=_t(m,[["enter",e[t][1],n],["exit",e[t][1],n]])):y=0,ht(e,i-1,t-i+3,m),t=i+m.length-y-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function EL(e,n){const t=this.parser.constructs.attentionMarkers.null,i=this.previous,s=Xa(i);let l;return o;function o(f){return l=f,e.enter("attentionSequence"),d(f)}function d(f){if(f===l)return e.consume(f),d;const m=e.exit("attentionSequence"),y=Xa(f),u=!y||y===2&&s||t.includes(f),h=!s||s===2&&y||t.includes(i);return m._open=!!(l===42?u:u&&(s||!h)),m._close=!!(l===42?h:h&&(y||!u)),n(f)}}function Dv(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const AL={name:"autolink",tokenize:PL};function PL(e,n,t){let i=0;return s;function s(g){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(g){return Wn(g)?(e.consume(g),o):g===64?t(g):m(g)}function o(g){return g===43||g===45||g===46||Dn(g)?(i=1,d(g)):m(g)}function d(g){return g===58?(e.consume(g),i=0,f):(g===43||g===45||g===46||Dn(g))&&i++<32?(e.consume(g),d):(i=0,m(g))}function f(g){return g===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),n):g===null||g===32||g===60||ju(g)?t(g):(e.consume(g),f)}function m(g){return g===64?(e.consume(g),y):zL(g)?(e.consume(g),m):t(g)}function y(g){return Dn(g)?u(g):t(g)}function u(g){return g===46?(e.consume(g),i=0,y):g===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),n):h(g)}function h(g){if((g===45||Dn(g))&&i++<63){const z=g===45?h:u;return e.consume(g),z}return t(g)}}const Po={partial:!0,tokenize:RL};function RL(e,n,t){return i;function i(l){return Me(l)?De(e,s,"linePrefix")(l):s(l)}function s(l){return l===null||be(l)?n(l):t(l)}}const a0={continuation:{tokenize:ML},exit:DL,name:"blockQuote",tokenize:IL};function IL(e,n,t){const i=this;return s;function s(o){if(o===62){const d=i.containerState;return d.open||(e.enter("blockQuote",{_container:!0}),d.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),l}return t(o)}function l(o){return Me(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function ML(e,n,t){const i=this;return s;function s(o){return Me(o)?De(e,l,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):l(o)}function l(o){return e.attempt(a0,n,t)(o)}}function DL(e){e.exit("blockQuote")}const s0={name:"characterEscape",tokenize:LL};function LL(e,n,t){return i;function i(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),s}function s(l){return wL(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const o0={name:"characterReference",tokenize:OL};function OL(e,n,t){const i=this;let s=0,l,o;return d;function d(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),f}function f(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),m):(e.enter("characterReferenceValue"),l=31,o=Dn,y(u))}function m(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,o=bL,y):(e.enter("characterReferenceValue"),l=7,o=fm,y(u))}function y(u){if(u===59&&s){const h=e.exit("characterReferenceValue");return o===Dn&&!_h(i.sliceSerialize(h))?t(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(u)&&s++<l?(e.consume(u),y):t(u)}}const Lv={partial:!0,tokenize:FL},Ov={concrete:!0,name:"codeFenced",tokenize:NL};function NL(e,n,t){const i=this,s={partial:!0,tokenize:D};let l=0,o=0,d;return f;function f(P){return m(P)}function m(P){const $=i.events[i.events.length-1];return l=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,d=P,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(P)}function y(P){return P===d?(o++,e.consume(P),y):o<3?t(P):(e.exit("codeFencedFenceSequence"),Me(P)?De(e,u,"whitespace")(P):u(P))}function u(P){return P===null||be(P)?(e.exit("codeFencedFence"),i.interrupt?n(P):e.check(Lv,b,R)(P)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(P))}function h(P){return P===null||be(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(P)):Me(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),De(e,g,"whitespace")(P)):P===96&&P===d?t(P):(e.consume(P),h)}function g(P){return P===null||be(P)?u(P):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),z(P))}function z(P){return P===null||be(P)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(P)):P===96&&P===d?t(P):(e.consume(P),z)}function b(P){return e.attempt(s,R,x)(P)}function x(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),w}function w(P){return l>0&&Me(P)?De(e,S,"linePrefix",l+1)(P):S(P)}function S(P){return P===null||be(P)?e.check(Lv,b,R)(P):(e.enter("codeFlowValue"),C(P))}function C(P){return P===null||be(P)?(e.exit("codeFlowValue"),S(P)):(e.consume(P),C)}function R(P){return e.exit("codeFenced"),n(P)}function D(P,$,Y){let K=0;return L;function L(re){return P.enter("lineEnding"),P.consume(re),P.exit("lineEnding"),Z}function Z(re){return P.enter("codeFencedFence"),Me(re)?De(P,G,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(re):G(re)}function G(re){return re===d?(P.enter("codeFencedFenceSequence"),ee(re)):Y(re)}function ee(re){return re===d?(K++,P.consume(re),ee):K>=o?(P.exit("codeFencedFenceSequence"),Me(re)?De(P,B,"whitespace")(re):B(re)):Y(re)}function B(re){return re===null||be(re)?(P.exit("codeFencedFence"),$(re)):Y(re)}}}function FL(e,n,t){const i=this;return s;function s(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l)}function l(o){return i.parser.lazy[i.now().line]?t(o):n(o)}}const cf={name:"codeIndented",tokenize:BL},VL={partial:!0,tokenize:UL};function BL(e,n,t){const i=this;return s;function s(m){return e.enter("codeIndented"),De(e,l,"linePrefix",5)(m)}function l(m){const y=i.events[i.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?o(m):t(m)}function o(m){return m===null?f(m):be(m)?e.attempt(VL,o,f)(m):(e.enter("codeFlowValue"),d(m))}function d(m){return m===null||be(m)?(e.exit("codeFlowValue"),o(m)):(e.consume(m),d)}function f(m){return e.exit("codeIndented"),n(m)}}function UL(e,n,t){const i=this;return s;function s(o){return i.parser.lazy[i.now().line]?t(o):be(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),s):De(e,l,"linePrefix",5)(o)}function l(o){const d=i.events[i.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?n(o):be(o)?s(o):t(o)}}const $L={name:"codeText",previous:WL,resolve:HL,tokenize:qL};function HL(e){let n=e.length-4,t=3,i,s;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(i=t;++i<n;)if(e[i][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(i=t-1,n++;++i<=n;)s===void 0?i!==n&&e[i][1].type!=="lineEnding"&&(s=i):(i===n||e[i][1].type==="lineEnding")&&(e[s][1].type="codeTextData",i!==s+2&&(e[s][1].end=e[i-1][1].end,e.splice(s+2,i-s-2),n-=i-s-2,i=s+2),s=void 0);return e}function WL(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function qL(e,n,t){let i=0,s,l;return o;function o(u){return e.enter("codeText"),e.enter("codeTextSequence"),d(u)}function d(u){return u===96?(e.consume(u),i++,d):(e.exit("codeTextSequence"),f(u))}function f(u){return u===null?t(u):u===32?(e.enter("space"),e.consume(u),e.exit("space"),f):u===96?(l=e.enter("codeTextSequence"),s=0,y(u)):be(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),f):(e.enter("codeTextData"),m(u))}function m(u){return u===null||u===32||u===96||be(u)?(e.exit("codeTextData"),f(u)):(e.consume(u),m)}function y(u){return u===96?(e.consume(u),s++,y):s===i?(e.exit("codeTextSequence"),e.exit("codeText"),n(u)):(l.type="codeTextData",m(u))}}class KL{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const i=t??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(n,i):n>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(n,t,i){const s=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return i&&Ks(this.left,i),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Ks(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Ks(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Ks(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Ks(this.left,t.reverse())}}}function Ks(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function l0(e){const n={};let t=-1,i,s,l,o,d,f,m;const y=new KL(e);for(;++t<y.length;){for(;t in n;)t=n[t];if(i=y.get(t),t&&i[1].type==="chunkFlow"&&y.get(t-1)[1].type==="listItemPrefix"&&(f=i[1]._tokenizer.events,l=0,l<f.length&&f[l][1].type==="lineEndingBlank"&&(l+=2),l<f.length&&f[l][1].type==="content"))for(;++l<f.length&&f[l][1].type!=="content";)f[l][1].type==="chunkText"&&(f[l][1]._isInFirstContentOfListItem=!0,l++);if(i[0]==="enter")i[1].contentType&&(Object.assign(n,GL(y,t)),t=n[t],m=!0);else if(i[1]._container){for(l=t,s=void 0;l--;)if(o=y.get(l),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(s&&(y.get(s)[1].type="lineEndingBlank"),o[1].type="lineEnding",s=l);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;s&&(i[1].end={...y.get(s)[1].start},d=y.slice(s,t),d.unshift(i),y.splice(s,t-s+1,d))}}return ht(e,0,Number.POSITIVE_INFINITY,y.slice(0)),!m}function GL(e,n){const t=e.get(n)[1],i=e.get(n)[2];let s=n-1;const l=[];let o=t._tokenizer;o||(o=i.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const d=o.events,f=[],m={};let y,u,h=-1,g=t,z=0,b=0;const x=[b];for(;g;){for(;e.get(++s)[1]!==g;);l.push(s),g._tokenizer||(y=i.sliceStream(g),g.next||y.push(null),u&&o.defineSkip(g.start),g._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(y),g._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),u=g,g=g.next}for(g=t;++h<d.length;)d[h][0]==="exit"&&d[h-1][0]==="enter"&&d[h][1].type===d[h-1][1].type&&d[h][1].start.line!==d[h][1].end.line&&(b=h+1,x.push(b),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(o.events=[],g?(g._tokenizer=void 0,g.previous=void 0):x.pop(),h=x.length;h--;){const w=d.slice(x[h],x[h+1]),S=l.pop();f.push([S,S+w.length-1]),e.splice(S,2,w)}for(f.reverse(),h=-1;++h<f.length;)m[z+f[h][0]]=z+f[h][1],z+=f[h][1]-f[h][0]-1;return m}const QL={resolve:XL,tokenize:JL},YL={partial:!0,tokenize:ZL};function XL(e){return l0(e),e}function JL(e,n){let t;return i;function i(d){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),s(d)}function s(d){return d===null?l(d):be(d)?e.check(YL,o,l)(d):(e.consume(d),s)}function l(d){return e.exit("chunkContent"),e.exit("content"),n(d)}function o(d){return e.consume(d),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,s}}function ZL(e,n,t){const i=this;return s;function s(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),De(e,l,"linePrefix")}function l(o){if(o===null||be(o))return t(o);const d=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?n(o):e.interrupt(i.parser.constructs.flow,t,n)(o)}}function u0(e,n,t,i,s,l,o,d,f){const m=f||Number.POSITIVE_INFINITY;let y=0;return u;function u(w){return w===60?(e.enter(i),e.enter(s),e.enter(l),e.consume(w),e.exit(l),h):w===null||w===32||w===41||ju(w)?t(w):(e.enter(i),e.enter(o),e.enter(d),e.enter("chunkString",{contentType:"string"}),b(w))}function h(w){return w===62?(e.enter(l),e.consume(w),e.exit(l),e.exit(s),e.exit(i),n):(e.enter(d),e.enter("chunkString",{contentType:"string"}),g(w))}function g(w){return w===62?(e.exit("chunkString"),e.exit(d),h(w)):w===null||w===60||be(w)?t(w):(e.consume(w),w===92?z:g)}function z(w){return w===60||w===62||w===92?(e.consume(w),g):g(w)}function b(w){return!y&&(w===null||w===41||$e(w))?(e.exit("chunkString"),e.exit(d),e.exit(o),e.exit(i),n(w)):y<m&&w===40?(e.consume(w),y++,b):w===41?(e.consume(w),y--,b):w===null||w===32||w===40||ju(w)?t(w):(e.consume(w),w===92?x:b)}function x(w){return w===40||w===41||w===92?(e.consume(w),b):b(w)}}function c0(e,n,t,i,s,l){const o=this;let d=0,f;return m;function m(g){return e.enter(i),e.enter(s),e.consume(g),e.exit(s),e.enter(l),y}function y(g){return d>999||g===null||g===91||g===93&&!f||g===94&&!d&&"_hiddenFootnoteSupport"in o.parser.constructs?t(g):g===93?(e.exit(l),e.enter(s),e.consume(g),e.exit(s),e.exit(i),n):be(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),u(g))}function u(g){return g===null||g===91||g===93||be(g)||d++>999?(e.exit("chunkString"),y(g)):(e.consume(g),f||(f=!Me(g)),g===92?h:u)}function h(g){return g===91||g===92||g===93?(e.consume(g),d++,u):u(g)}}function d0(e,n,t,i,s,l){let o;return d;function d(h){return h===34||h===39||h===40?(e.enter(i),e.enter(s),e.consume(h),e.exit(s),o=h===40?41:h,f):t(h)}function f(h){return h===o?(e.enter(s),e.consume(h),e.exit(s),e.exit(i),n):(e.enter(l),m(h))}function m(h){return h===o?(e.exit(l),f(o)):h===null?t(h):be(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),De(e,m,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(h))}function y(h){return h===o||h===null||be(h)?(e.exit("chunkString"),m(h)):(e.consume(h),h===92?u:y)}function u(h){return h===o||h===92?(e.consume(h),y):y(h)}}function ro(e,n){let t;return i;function i(s){return be(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t=!0,i):Me(s)?De(e,i,t?"linePrefix":"lineSuffix")(s):n(s)}}const eO={name:"definition",tokenize:tO},nO={partial:!0,tokenize:rO};function tO(e,n,t){const i=this;let s;return l;function l(g){return e.enter("definition"),o(g)}function o(g){return c0.call(i,e,d,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function d(g){return s=qt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),f):t(g)}function f(g){return $e(g)?ro(e,m)(g):m(g)}function m(g){return u0(e,y,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function y(g){return e.attempt(nO,u,u)(g)}function u(g){return Me(g)?De(e,h,"whitespace")(g):h(g)}function h(g){return g===null||be(g)?(e.exit("definition"),i.parser.defined.push(s),n(g)):t(g)}}function rO(e,n,t){return i;function i(d){return $e(d)?ro(e,s)(d):t(d)}function s(d){return d0(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function l(d){return Me(d)?De(e,o,"whitespace")(d):o(d)}function o(d){return d===null||be(d)?n(d):t(d)}}const iO={name:"hardBreakEscape",tokenize:aO};function aO(e,n,t){return i;function i(l){return e.enter("hardBreakEscape"),e.consume(l),s}function s(l){return be(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const sO={name:"headingAtx",resolve:oO,tokenize:lO};function oO(e,n){let t=e.length-2,i=3,s,l;return e[i][1].type==="whitespace"&&(i+=2),t-2>i&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(i===t-1||t-4>i&&e[t-2][1].type==="whitespace")&&(t-=i+1===t?2:4),t>i&&(s={type:"atxHeadingText",start:e[i][1].start,end:e[t][1].end},l={type:"chunkText",start:e[i][1].start,end:e[t][1].end,contentType:"text"},ht(e,i,t-i+1,[["enter",s,n],["enter",l,n],["exit",l,n],["exit",s,n]])),e}function lO(e,n,t){let i=0;return s;function s(y){return e.enter("atxHeading"),l(y)}function l(y){return e.enter("atxHeadingSequence"),o(y)}function o(y){return y===35&&i++<6?(e.consume(y),o):y===null||$e(y)?(e.exit("atxHeadingSequence"),d(y)):t(y)}function d(y){return y===35?(e.enter("atxHeadingSequence"),f(y)):y===null||be(y)?(e.exit("atxHeading"),n(y)):Me(y)?De(e,d,"whitespace")(y):(e.enter("atxHeadingText"),m(y))}function f(y){return y===35?(e.consume(y),f):(e.exit("atxHeadingSequence"),d(y))}function m(y){return y===null||y===35||$e(y)?(e.exit("atxHeadingText"),d(y)):(e.consume(y),m)}}const uO=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Nv=["pre","script","style","textarea"],cO={concrete:!0,name:"htmlFlow",resolveTo:mO,tokenize:hO},dO={partial:!0,tokenize:gO},fO={partial:!0,tokenize:pO};function mO(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function hO(e,n,t){const i=this;let s,l,o,d,f;return m;function m(E){return y(E)}function y(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),u}function u(E){return E===33?(e.consume(E),h):E===47?(e.consume(E),l=!0,b):E===63?(e.consume(E),s=3,i.interrupt?n:T):Wn(E)?(e.consume(E),o=String.fromCharCode(E),x):t(E)}function h(E){return E===45?(e.consume(E),s=2,g):E===91?(e.consume(E),s=5,d=0,z):Wn(E)?(e.consume(E),s=4,i.interrupt?n:T):t(E)}function g(E){return E===45?(e.consume(E),i.interrupt?n:T):t(E)}function z(E){const ce="CDATA[";return E===ce.charCodeAt(d++)?(e.consume(E),d===ce.length?i.interrupt?n:G:z):t(E)}function b(E){return Wn(E)?(e.consume(E),o=String.fromCharCode(E),x):t(E)}function x(E){if(E===null||E===47||E===62||$e(E)){const ce=E===47,ke=o.toLowerCase();return!ce&&!l&&Nv.includes(ke)?(s=1,i.interrupt?n(E):G(E)):uO.includes(o.toLowerCase())?(s=6,ce?(e.consume(E),w):i.interrupt?n(E):G(E)):(s=7,i.interrupt&&!i.parser.lazy[i.now().line]?t(E):l?S(E):C(E))}return E===45||Dn(E)?(e.consume(E),o+=String.fromCharCode(E),x):t(E)}function w(E){return E===62?(e.consume(E),i.interrupt?n:G):t(E)}function S(E){return Me(E)?(e.consume(E),S):L(E)}function C(E){return E===47?(e.consume(E),L):E===58||E===95||Wn(E)?(e.consume(E),R):Me(E)?(e.consume(E),C):L(E)}function R(E){return E===45||E===46||E===58||E===95||Dn(E)?(e.consume(E),R):D(E)}function D(E){return E===61?(e.consume(E),P):Me(E)?(e.consume(E),D):C(E)}function P(E){return E===null||E===60||E===61||E===62||E===96?t(E):E===34||E===39?(e.consume(E),f=E,$):Me(E)?(e.consume(E),P):Y(E)}function $(E){return E===f?(e.consume(E),f=null,K):E===null||be(E)?t(E):(e.consume(E),$)}function Y(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||$e(E)?D(E):(e.consume(E),Y)}function K(E){return E===47||E===62||Me(E)?C(E):t(E)}function L(E){return E===62?(e.consume(E),Z):t(E)}function Z(E){return E===null||be(E)?G(E):Me(E)?(e.consume(E),Z):t(E)}function G(E){return E===45&&s===2?(e.consume(E),ue):E===60&&s===1?(e.consume(E),X):E===62&&s===4?(e.consume(E),I):E===63&&s===3?(e.consume(E),T):E===93&&s===5?(e.consume(E),q):be(E)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(dO,H,ee)(E)):E===null||be(E)?(e.exit("htmlFlowData"),ee(E)):(e.consume(E),G)}function ee(E){return e.check(fO,B,H)(E)}function B(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),re}function re(E){return E===null||be(E)?ee(E):(e.enter("htmlFlowData"),G(E))}function ue(E){return E===45?(e.consume(E),T):G(E)}function X(E){return E===47?(e.consume(E),o="",F):G(E)}function F(E){if(E===62){const ce=o.toLowerCase();return Nv.includes(ce)?(e.consume(E),I):G(E)}return Wn(E)&&o.length<8?(e.consume(E),o+=String.fromCharCode(E),F):G(E)}function q(E){return E===93?(e.consume(E),T):G(E)}function T(E){return E===62?(e.consume(E),I):E===45&&s===2?(e.consume(E),T):G(E)}function I(E){return E===null||be(E)?(e.exit("htmlFlowData"),H(E)):(e.consume(E),I)}function H(E){return e.exit("htmlFlow"),n(E)}}function pO(e,n,t){const i=this;return s;function s(o){return be(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):t(o)}function l(o){return i.parser.lazy[i.now().line]?t(o):n(o)}}function gO(e,n,t){return i;function i(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt(Po,n,t)}}const yO={name:"htmlText",tokenize:kO};function kO(e,n,t){const i=this;let s,l,o;return d;function d(T){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(T),f}function f(T){return T===33?(e.consume(T),m):T===47?(e.consume(T),D):T===63?(e.consume(T),C):Wn(T)?(e.consume(T),Y):t(T)}function m(T){return T===45?(e.consume(T),y):T===91?(e.consume(T),l=0,z):Wn(T)?(e.consume(T),S):t(T)}function y(T){return T===45?(e.consume(T),g):t(T)}function u(T){return T===null?t(T):T===45?(e.consume(T),h):be(T)?(o=u,X(T)):(e.consume(T),u)}function h(T){return T===45?(e.consume(T),g):u(T)}function g(T){return T===62?ue(T):T===45?h(T):u(T)}function z(T){const I="CDATA[";return T===I.charCodeAt(l++)?(e.consume(T),l===I.length?b:z):t(T)}function b(T){return T===null?t(T):T===93?(e.consume(T),x):be(T)?(o=b,X(T)):(e.consume(T),b)}function x(T){return T===93?(e.consume(T),w):b(T)}function w(T){return T===62?ue(T):T===93?(e.consume(T),w):b(T)}function S(T){return T===null||T===62?ue(T):be(T)?(o=S,X(T)):(e.consume(T),S)}function C(T){return T===null?t(T):T===63?(e.consume(T),R):be(T)?(o=C,X(T)):(e.consume(T),C)}function R(T){return T===62?ue(T):C(T)}function D(T){return Wn(T)?(e.consume(T),P):t(T)}function P(T){return T===45||Dn(T)?(e.consume(T),P):$(T)}function $(T){return be(T)?(o=$,X(T)):Me(T)?(e.consume(T),$):ue(T)}function Y(T){return T===45||Dn(T)?(e.consume(T),Y):T===47||T===62||$e(T)?K(T):t(T)}function K(T){return T===47?(e.consume(T),ue):T===58||T===95||Wn(T)?(e.consume(T),L):be(T)?(o=K,X(T)):Me(T)?(e.consume(T),K):ue(T)}function L(T){return T===45||T===46||T===58||T===95||Dn(T)?(e.consume(T),L):Z(T)}function Z(T){return T===61?(e.consume(T),G):be(T)?(o=Z,X(T)):Me(T)?(e.consume(T),Z):K(T)}function G(T){return T===null||T===60||T===61||T===62||T===96?t(T):T===34||T===39?(e.consume(T),s=T,ee):be(T)?(o=G,X(T)):Me(T)?(e.consume(T),G):(e.consume(T),B)}function ee(T){return T===s?(e.consume(T),s=void 0,re):T===null?t(T):be(T)?(o=ee,X(T)):(e.consume(T),ee)}function B(T){return T===null||T===34||T===39||T===60||T===61||T===96?t(T):T===47||T===62||$e(T)?K(T):(e.consume(T),B)}function re(T){return T===47||T===62||$e(T)?K(T):t(T)}function ue(T){return T===62?(e.consume(T),e.exit("htmlTextData"),e.exit("htmlText"),n):t(T)}function X(T){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(T),e.exit("lineEnding"),F}function F(T){return Me(T)?De(e,q,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):q(T)}function q(T){return e.enter("htmlTextData"),o(T)}}const Th={name:"labelEnd",resolveAll:wO,resolveTo:xO,tokenize:jO},vO={tokenize:SO},zO={tokenize:CO},bO={tokenize:_O};function wO(e){let n=-1;const t=[];for(;++n<e.length;){const i=e[n][1];if(t.push(e[n]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const s=i.type==="labelImage"?4:2;i.type="data",n+=s}}return e.length!==t.length&&ht(e,0,e.length,t),e}function xO(e,n){let t=e.length,i=0,s,l,o,d;for(;t--;)if(s=e[t][1],l){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[t][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(l=t,s.type!=="labelLink")){i=2;break}}else s.type==="labelEnd"&&(o=t);const f={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},m={type:"label",start:{...e[l][1].start},end:{...e[o][1].end}},y={type:"labelText",start:{...e[l+i+2][1].end},end:{...e[o-2][1].start}};return d=[["enter",f,n],["enter",m,n]],d=_t(d,e.slice(l+1,l+i+3)),d=_t(d,[["enter",y,n]]),d=_t(d,qu(n.parser.constructs.insideSpan.null,e.slice(l+i+4,o-3),n)),d=_t(d,[["exit",y,n],e[o-2],e[o-1],["exit",m,n]]),d=_t(d,e.slice(o+1)),d=_t(d,[["exit",f,n]]),ht(e,l,e.length,d),e}function jO(e,n,t){const i=this;let s=i.events.length,l,o;for(;s--;)if((i.events[s][1].type==="labelImage"||i.events[s][1].type==="labelLink")&&!i.events[s][1]._balanced){l=i.events[s][1];break}return d;function d(h){return l?l._inactive?u(h):(o=i.parser.defined.includes(qt(i.sliceSerialize({start:l.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),f):t(h)}function f(h){return h===40?e.attempt(vO,y,o?y:u)(h):h===91?e.attempt(zO,y,o?m:u)(h):o?y(h):u(h)}function m(h){return e.attempt(bO,y,u)(h)}function y(h){return n(h)}function u(h){return l._balanced=!0,t(h)}}function SO(e,n,t){return i;function i(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),s}function s(u){return $e(u)?ro(e,l)(u):l(u)}function l(u){return u===41?y(u):u0(e,o,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function o(u){return $e(u)?ro(e,f)(u):y(u)}function d(u){return t(u)}function f(u){return u===34||u===39||u===40?d0(e,m,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):y(u)}function m(u){return $e(u)?ro(e,y)(u):y(u)}function y(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),n):t(u)}}function CO(e,n,t){const i=this;return s;function s(d){return c0.call(i,e,l,o,"reference","referenceMarker","referenceString")(d)}function l(d){return i.parser.defined.includes(qt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?n(d):t(d)}function o(d){return t(d)}}function _O(e,n,t){return i;function i(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),s}function s(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const TO={name:"labelStartImage",resolveAll:Th.resolveAll,tokenize:EO};function EO(e,n,t){const i=this;return s;function s(d){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(d),e.exit("labelImageMarker"),l}function l(d){return d===91?(e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelImage"),o):t(d)}function o(d){return d===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(d):n(d)}}const AO={name:"labelStartLink",resolveAll:Th.resolveAll,tokenize:PO};function PO(e,n,t){const i=this;return s;function s(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),l}function l(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(o):n(o)}}const df={name:"lineEnding",tokenize:RO};function RO(e,n){return t;function t(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),De(e,n,"linePrefix")}}const du={name:"thematicBreak",tokenize:IO};function IO(e,n,t){let i=0,s;return l;function l(m){return e.enter("thematicBreak"),o(m)}function o(m){return s=m,d(m)}function d(m){return m===s?(e.enter("thematicBreakSequence"),f(m)):i>=3&&(m===null||be(m))?(e.exit("thematicBreak"),n(m)):t(m)}function f(m){return m===s?(e.consume(m),i++,f):(e.exit("thematicBreakSequence"),Me(m)?De(e,d,"whitespace")(m):d(m))}}const tt={continuation:{tokenize:OO},exit:FO,name:"list",tokenize:LO},MO={partial:!0,tokenize:VO},DO={partial:!0,tokenize:NO};function LO(e,n,t){const i=this,s=i.events[i.events.length-1];let l=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,o=0;return d;function d(g){const z=i.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(z==="listUnordered"?!i.containerState.marker||g===i.containerState.marker:fm(g)){if(i.containerState.type||(i.containerState.type=z,e.enter(z,{_container:!0})),z==="listUnordered")return e.enter("listItemPrefix"),g===42||g===45?e.check(du,t,m)(g):m(g);if(!i.interrupt||g===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),f(g)}return t(g)}function f(g){return fm(g)&&++o<10?(e.consume(g),f):(!i.interrupt||o<2)&&(i.containerState.marker?g===i.containerState.marker:g===41||g===46)?(e.exit("listItemValue"),m(g)):t(g)}function m(g){return e.enter("listItemMarker"),e.consume(g),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||g,e.check(Po,i.interrupt?t:y,e.attempt(MO,h,u))}function y(g){return i.containerState.initialBlankLine=!0,l++,h(g)}function u(g){return Me(g)?(e.enter("listItemPrefixWhitespace"),e.consume(g),e.exit("listItemPrefixWhitespace"),h):t(g)}function h(g){return i.containerState.size=l+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(g)}}function OO(e,n,t){const i=this;return i.containerState._closeFlow=void 0,e.check(Po,s,l);function s(d){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,De(e,n,"listItemIndent",i.containerState.size+1)(d)}function l(d){return i.containerState.furtherBlankLines||!Me(d)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,o(d)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(DO,n,o)(d))}function o(d){return i.containerState._closeFlow=!0,i.interrupt=void 0,De(e,e.attempt(tt,n,t),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function NO(e,n,t){const i=this;return De(e,s,"listItemIndent",i.containerState.size+1);function s(l){const o=i.events[i.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===i.containerState.size?n(l):t(l)}}function FO(e){e.exit(this.containerState.type)}function VO(e,n,t){const i=this;return De(e,s,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(l){const o=i.events[i.events.length-1];return!Me(l)&&o&&o[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}const Fv={name:"setextUnderline",resolveTo:BO,tokenize:UO};function BO(e,n){let t=e.length,i,s,l;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){i=t;break}e[t][1].type==="paragraph"&&(s=t)}else e[t][1].type==="content"&&e.splice(t,1),!l&&e[t][1].type==="definition"&&(l=t);const o={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",l?(e.splice(s,0,["enter",o,n]),e.splice(l+1,0,["exit",e[i][1],n]),e[i][1].end={...e[l][1].end}):e[i][1]=o,e.push(["exit",o,n]),e}function UO(e,n,t){const i=this;let s;return l;function l(m){let y=i.events.length,u;for(;y--;)if(i.events[y][1].type!=="lineEnding"&&i.events[y][1].type!=="linePrefix"&&i.events[y][1].type!=="content"){u=i.events[y][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||u)?(e.enter("setextHeadingLine"),s=m,o(m)):t(m)}function o(m){return e.enter("setextHeadingLineSequence"),d(m)}function d(m){return m===s?(e.consume(m),d):(e.exit("setextHeadingLineSequence"),Me(m)?De(e,f,"lineSuffix")(m):f(m))}function f(m){return m===null||be(m)?(e.exit("setextHeadingLine"),n(m)):t(m)}}const $O={tokenize:HO};function HO(e){const n=this,t=e.attempt(Po,i,e.attempt(this.parser.constructs.flowInitial,s,De(e,e.attempt(this.parser.constructs.flow,s,e.attempt(QL,s)),"linePrefix")));return t;function i(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function s(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const WO={resolveAll:m0()},qO=f0("string"),KO=f0("text");function f0(e){return{resolveAll:m0(e==="text"?GO:void 0),tokenize:n};function n(t){const i=this,s=this.parser.constructs[e],l=t.attempt(s,o,d);return o;function o(y){return m(y)?l(y):d(y)}function d(y){if(y===null){t.consume(y);return}return t.enter("data"),t.consume(y),f}function f(y){return m(y)?(t.exit("data"),l(y)):(t.consume(y),f)}function m(y){if(y===null)return!0;const u=s[y];let h=-1;if(u)for(;++h<u.length;){const g=u[h];if(!g.previous||g.previous.call(i,i.previous))return!0}return!1}}}function m0(e){return n;function n(t,i){let s=-1,l;for(;++s<=t.length;)l===void 0?t[s]&&t[s][1].type==="data"&&(l=s,s++):(!t[s]||t[s][1].type!=="data")&&(s!==l+2&&(t[l][1].end=t[s-1][1].end,t.splice(l+2,s-l-2),s=l+2),l=void 0);return e?e(t,i):t}}function GO(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const i=e[t-1][1],s=n.sliceStream(i);let l=s.length,o=-1,d=0,f;for(;l--;){const m=s[l];if(typeof m=="string"){for(o=m.length;m.charCodeAt(o-1)===32;)d++,o--;if(o)break;o=-1}else if(m===-2)f=!0,d++;else if(m!==-1){l++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(d=0),d){const m={type:t===e.length||f||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?o:i.start._bufferIndex+o,_index:i.start._index+l,line:i.end.line,column:i.end.column-d,offset:i.end.offset-d},end:{...i.end}};i.end={...m.start},i.start.offset===i.end.offset?Object.assign(i,m):(e.splice(t,0,["enter",m,n],["exit",m,n]),t+=2)}t++}return e}const QO={42:tt,43:tt,45:tt,48:tt,49:tt,50:tt,51:tt,52:tt,53:tt,54:tt,55:tt,56:tt,57:tt,62:a0},YO={91:eO},XO={[-2]:cf,[-1]:cf,32:cf},JO={35:sO,42:du,45:[Fv,du],60:cO,61:Fv,95:du,96:Ov,126:Ov},ZO={38:o0,92:s0},e2={[-5]:df,[-4]:df,[-3]:df,33:TO,38:o0,42:mm,60:[AL,yO],91:AO,92:[iO,s0],93:Th,95:mm,96:$L},n2={null:[mm,WO]},t2={null:[42,95]},r2={null:[]},i2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:t2,contentInitial:YO,disable:r2,document:QO,flow:JO,flowInitial:XO,insideSpan:n2,string:ZO,text:e2},Symbol.toStringTag,{value:"Module"}));function a2(e,n,t){let i={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const s={},l=[];let o=[],d=[];const f={attempt:$(D),check:$(P),consume:S,enter:C,exit:R,interrupt:$(P,{interrupt:!0})},m={code:null,containerState:{},defineSkip:b,events:[],now:z,parser:e,previous:null,sliceSerialize:h,sliceStream:g,write:u};let y=n.tokenize.call(m,f);return n.resolveAll&&l.push(n),m;function u(Z){return o=_t(o,Z),x(),o[o.length-1]!==null?[]:(Y(n,0),m.events=qu(l,m.events,m),m.events)}function h(Z,G){return o2(g(Z),G)}function g(Z){return s2(o,Z)}function z(){const{_bufferIndex:Z,_index:G,line:ee,column:B,offset:re}=i;return{_bufferIndex:Z,_index:G,line:ee,column:B,offset:re}}function b(Z){s[Z.line]=Z.column,L()}function x(){let Z;for(;i._index<o.length;){const G=o[i._index];if(typeof G=="string")for(Z=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===Z&&i._bufferIndex<G.length;)w(G.charCodeAt(i._bufferIndex));else w(G)}}function w(Z){y=y(Z)}function S(Z){be(Z)?(i.line++,i.column=1,i.offset+=Z===-3?2:1,L()):Z!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===o[i._index].length&&(i._bufferIndex=-1,i._index++)),m.previous=Z}function C(Z,G){const ee=G||{};return ee.type=Z,ee.start=z(),m.events.push(["enter",ee,m]),d.push(ee),ee}function R(Z){const G=d.pop();return G.end=z(),m.events.push(["exit",G,m]),G}function D(Z,G){Y(Z,G.from)}function P(Z,G){G.restore()}function $(Z,G){return ee;function ee(B,re,ue){let X,F,q,T;return Array.isArray(B)?H(B):"tokenize"in B?H([B]):I(B);function I(ge){return ye;function ye(Ce){const Ae=Ce!==null&&ge[Ce],Be=Ce!==null&&ge.null,kn=[...Array.isArray(Ae)?Ae:Ae?[Ae]:[],...Array.isArray(Be)?Be:Be?[Be]:[]];return H(kn)(Ce)}}function H(ge){return X=ge,F=0,ge.length===0?ue:E(ge[F])}function E(ge){return ye;function ye(Ce){return T=K(),q=ge,ge.partial||(m.currentConstruct=ge),ge.name&&m.parser.constructs.disable.null.includes(ge.name)?ke():ge.tokenize.call(G?Object.assign(Object.create(m),G):m,f,ce,ke)(Ce)}}function ce(ge){return Z(q,T),re}function ke(ge){return T.restore(),++F<X.length?E(X[F]):ue}}}function Y(Z,G){Z.resolveAll&&!l.includes(Z)&&l.push(Z),Z.resolve&&ht(m.events,G,m.events.length-G,Z.resolve(m.events.slice(G),m)),Z.resolveTo&&(m.events=Z.resolveTo(m.events,m))}function K(){const Z=z(),G=m.previous,ee=m.currentConstruct,B=m.events.length,re=Array.from(d);return{from:B,restore:ue};function ue(){i=Z,m.previous=G,m.currentConstruct=ee,m.events.length=B,d=re,L()}}function L(){i.line in s&&i.column<2&&(i.column=s[i.line],i.offset+=s[i.line]-1)}}function s2(e,n){const t=n.start._index,i=n.start._bufferIndex,s=n.end._index,l=n.end._bufferIndex;let o;if(t===s)o=[e[t].slice(i,l)];else{if(o=e.slice(t,s),i>-1){const d=o[0];typeof d=="string"?o[0]=d.slice(i):o.shift()}l>0&&o.push(e[s].slice(0,l))}return o}function o2(e,n){let t=-1;const i=[];let s;for(;++t<e.length;){const l=e[t];let o;if(typeof l=="string")o=l;else switch(l){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&s)continue;o=" ";break}default:o=String.fromCharCode(l)}s=l===-2,i.push(o)}return i.join("")}function l2(e){const i={constructs:r0([i2,...(e||{}).extensions||[]]),content:s(xL),defined:[],document:s(SL),flow:s($O),lazy:{},string:s(qO),text:s(KO)};return i;function s(l){return o;function o(d){return a2(i,l,d)}}}function u2(e){for(;!l0(e););return e}const Vv=/[\0\t\n\r]/g;function c2(){let e=1,n="",t=!0,i;return s;function s(l,o,d){const f=[];let m,y,u,h,g;for(l=n+(typeof l=="string"?l.toString():new TextDecoder(o||void 0).decode(l)),u=0,n="",t&&(l.charCodeAt(0)===65279&&u++,t=void 0);u<l.length;){if(Vv.lastIndex=u,m=Vv.exec(l),h=m&&m.index!==void 0?m.index:l.length,g=l.charCodeAt(h),!m){n=l.slice(u);break}if(g===10&&u===h&&i)f.push(-3),i=void 0;else switch(i&&(f.push(-5),i=void 0),u<h&&(f.push(l.slice(u,h)),e+=h-u),g){case 0:{f.push(65533),e++;break}case 9:{for(y=Math.ceil(e/4)*4,f.push(-2);e++<y;)f.push(-1);break}case 10:{f.push(-4),e=1;break}default:i=!0,e=1}u=h+1}return d&&(i&&f.push(-5),n&&f.push(n),f.push(null)),f}}const d2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function f2(e){return e.replace(d2,m2)}function m2(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const s=t.charCodeAt(1),l=s===120||s===88;return i0(t.slice(l?2:1),l?16:10)}return _h(t)||e}const h0={}.hasOwnProperty;function h2(e,n,t){return typeof n!="string"&&(t=n,n=void 0),p2(t)(u2(l2(t).document().write(c2()(e,n,!0))))}function p2(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(st),autolinkProtocol:K,autolinkEmail:K,atxHeading:l(vr),blockQuote:l(Be),characterEscape:K,characterReference:K,codeFenced:l(kn),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:l(kn,o),codeText:l(At,o),codeTextData:K,data:K,codeFlowValue:K,definition:l(On),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:l(Qt),hardBreakEscape:l(Yt),hardBreakTrailing:l(Yt),htmlFlow:l(Xt,o),htmlFlowData:K,htmlText:l(Xt,o),htmlTextData:K,image:l(Jt),label:o,link:l(st),listItem:l(Kn),listItemValue:h,listOrdered:l(Pt,u),listUnordered:l(Pt),paragraph:l(Lr),reference:E,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:l(vr),strong:l(pt),thematicBreak:l(na)},exit:{atxHeading:f(),atxHeadingSequence:D,autolink:f(),autolinkEmail:Ae,autolinkProtocol:Ce,blockQuote:f(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:ge,characterReference:ye,codeFenced:f(x),codeFencedFence:b,codeFencedFenceInfo:g,codeFencedFenceMeta:z,codeFlowValue:L,codeIndented:f(w),codeText:f(re),codeTextData:L,data:L,definition:f(),definitionDestinationString:R,definitionLabelString:S,definitionTitleString:C,emphasis:f(),hardBreakEscape:f(G),hardBreakTrailing:f(G),htmlFlow:f(ee),htmlFlowData:L,htmlText:f(B),htmlTextData:L,image:f(X),label:q,labelText:F,lineEnding:Z,link:f(ue),listItem:f(),listOrdered:f(),listUnordered:f(),paragraph:f(),referenceString:ce,resourceDestinationString:T,resourceTitleString:I,resource:H,setextHeading:f(Y),setextHeadingLineSequence:$,setextHeadingText:P,strong:f(),thematicBreak:f()}};p0(n,(e||{}).mdastExtensions||[]);const t={};return i;function i(Q){let se={type:"root",children:[]};const we={stack:[se],tokenStack:[],config:n,enter:d,exit:m,buffer:o,resume:y,data:t},Pe=[];let Re=-1;for(;++Re<Q.length;)if(Q[Re][1].type==="listOrdered"||Q[Re][1].type==="listUnordered")if(Q[Re][0]==="enter")Pe.push(Re);else{const pn=Pe.pop();Re=s(Q,pn,Re)}for(Re=-1;++Re<Q.length;){const pn=n[Q[Re][0]];h0.call(pn,Q[Re][1].type)&&pn[Q[Re][1].type].call(Object.assign({sliceSerialize:Q[Re][2].sliceSerialize},we),Q[Re][1])}if(we.tokenStack.length>0){const pn=we.tokenStack[we.tokenStack.length-1];(pn[1]||Bv).call(we,void 0,pn[0])}for(se.position={start:ai(Q.length>0?Q[0][1].start:{line:1,column:1,offset:0}),end:ai(Q.length>0?Q[Q.length-2][1].end:{line:1,column:1,offset:0})},Re=-1;++Re<n.transforms.length;)se=n.transforms[Re](se)||se;return se}function s(Q,se,we){let Pe=se-1,Re=-1,pn=!1,gt,_n,Nn,Zt;for(;++Pe<=we;){const Ye=Q[Pe];switch(Ye[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ye[0]==="enter"?Re++:Re--,Zt=void 0;break}case"lineEndingBlank":{Ye[0]==="enter"&&(gt&&!Zt&&!Re&&!Nn&&(Nn=Pe),Zt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Zt=void 0}if(!Re&&Ye[0]==="enter"&&Ye[1].type==="listItemPrefix"||Re===-1&&Ye[0]==="exit"&&(Ye[1].type==="listUnordered"||Ye[1].type==="listOrdered")){if(gt){let yt=Pe;for(_n=void 0;yt--;){const Fn=Q[yt];if(Fn[1].type==="lineEnding"||Fn[1].type==="lineEndingBlank"){if(Fn[0]==="exit")continue;_n&&(Q[_n][1].type="lineEndingBlank",pn=!0),Fn[1].type="lineEnding",_n=yt}else if(!(Fn[1].type==="linePrefix"||Fn[1].type==="blockQuotePrefix"||Fn[1].type==="blockQuotePrefixWhitespace"||Fn[1].type==="blockQuoteMarker"||Fn[1].type==="listItemIndent"))break}Nn&&(!_n||Nn<_n)&&(gt._spread=!0),gt.end=Object.assign({},_n?Q[_n][1].start:Ye[1].end),Q.splice(_n||Pe,0,["exit",gt,Ye[2]]),Pe++,we++}if(Ye[1].type==="listItemPrefix"){const yt={type:"listItem",_spread:!1,start:Object.assign({},Ye[1].start),end:void 0};gt=yt,Q.splice(Pe,0,["enter",yt,Ye[2]]),Pe++,we++,Nn=void 0,Zt=!0}}}return Q[se][1]._spread=pn,we}function l(Q,se){return we;function we(Pe){d.call(this,Q(Pe),Pe),se&&se.call(this,Pe)}}function o(){this.stack.push({type:"fragment",children:[]})}function d(Q,se,we){this.stack[this.stack.length-1].children.push(Q),this.stack.push(Q),this.tokenStack.push([se,we||void 0]),Q.position={start:ai(se.start),end:void 0}}function f(Q){return se;function se(we){Q&&Q.call(this,we),m.call(this,we)}}function m(Q,se){const we=this.stack.pop(),Pe=this.tokenStack.pop();if(Pe)Pe[0].type!==Q.type&&(se?se.call(this,Q,Pe[0]):(Pe[1]||Bv).call(this,Q,Pe[0]));else throw new Error("Cannot close `"+Q.type+"` ("+to({start:Q.start,end:Q.end})+"): it’s not open");we.position.end=ai(Q.end)}function y(){return Ch(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=!0}function h(Q){if(this.data.expectingFirstListItemValue){const se=this.stack[this.stack.length-2];se.start=Number.parseInt(this.sliceSerialize(Q),10),this.data.expectingFirstListItemValue=void 0}}function g(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.lang=Q}function z(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.meta=Q}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.value=Q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function w(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.value=Q.replace(/(\r?\n|\r)$/g,"")}function S(Q){const se=this.resume(),we=this.stack[this.stack.length-1];we.label=se,we.identifier=qt(this.sliceSerialize(Q)).toLowerCase()}function C(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.title=Q}function R(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.url=Q}function D(Q){const se=this.stack[this.stack.length-1];if(!se.depth){const we=this.sliceSerialize(Q).length;se.depth=we}}function P(){this.data.setextHeadingSlurpLineEnding=!0}function $(Q){const se=this.stack[this.stack.length-1];se.depth=this.sliceSerialize(Q).codePointAt(0)===61?1:2}function Y(){this.data.setextHeadingSlurpLineEnding=void 0}function K(Q){const we=this.stack[this.stack.length-1].children;let Pe=we[we.length-1];(!Pe||Pe.type!=="text")&&(Pe=ea(),Pe.position={start:ai(Q.start),end:void 0},we.push(Pe)),this.stack.push(Pe)}function L(Q){const se=this.stack.pop();se.value+=this.sliceSerialize(Q),se.position.end=ai(Q.end)}function Z(Q){const se=this.stack[this.stack.length-1];if(this.data.atHardBreak){const we=se.children[se.children.length-1];we.position.end=ai(Q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(se.type)&&(K.call(this,Q),L.call(this,Q))}function G(){this.data.atHardBreak=!0}function ee(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.value=Q}function B(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.value=Q}function re(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.value=Q}function ue(){const Q=this.stack[this.stack.length-1];if(this.data.inReference){const se=this.data.referenceType||"shortcut";Q.type+="Reference",Q.referenceType=se,delete Q.url,delete Q.title}else delete Q.identifier,delete Q.label;this.data.referenceType=void 0}function X(){const Q=this.stack[this.stack.length-1];if(this.data.inReference){const se=this.data.referenceType||"shortcut";Q.type+="Reference",Q.referenceType=se,delete Q.url,delete Q.title}else delete Q.identifier,delete Q.label;this.data.referenceType=void 0}function F(Q){const se=this.sliceSerialize(Q),we=this.stack[this.stack.length-2];we.label=f2(se),we.identifier=qt(se).toLowerCase()}function q(){const Q=this.stack[this.stack.length-1],se=this.resume(),we=this.stack[this.stack.length-1];if(this.data.inReference=!0,we.type==="link"){const Pe=Q.children;we.children=Pe}else we.alt=se}function T(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.url=Q}function I(){const Q=this.resume(),se=this.stack[this.stack.length-1];se.title=Q}function H(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function ce(Q){const se=this.resume(),we=this.stack[this.stack.length-1];we.label=se,we.identifier=qt(this.sliceSerialize(Q)).toLowerCase(),this.data.referenceType="full"}function ke(Q){this.data.characterReferenceType=Q.type}function ge(Q){const se=this.sliceSerialize(Q),we=this.data.characterReferenceType;let Pe;we?(Pe=i0(se,we==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Pe=_h(se);const Re=this.stack[this.stack.length-1];Re.value+=Pe}function ye(Q){const se=this.stack.pop();se.position.end=ai(Q.end)}function Ce(Q){L.call(this,Q);const se=this.stack[this.stack.length-1];se.url=this.sliceSerialize(Q)}function Ae(Q){L.call(this,Q);const se=this.stack[this.stack.length-1];se.url="mailto:"+this.sliceSerialize(Q)}function Be(){return{type:"blockquote",children:[]}}function kn(){return{type:"code",lang:null,meta:null,value:""}}function At(){return{type:"inlineCode",value:""}}function On(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Qt(){return{type:"emphasis",children:[]}}function vr(){return{type:"heading",depth:0,children:[]}}function Yt(){return{type:"break"}}function Xt(){return{type:"html",value:""}}function Jt(){return{type:"image",title:null,url:"",alt:null}}function st(){return{type:"link",title:null,url:"",children:[]}}function Pt(Q){return{type:"list",ordered:Q.type==="listOrdered",start:null,spread:Q._spread,children:[]}}function Kn(Q){return{type:"listItem",spread:Q._spread,checked:null,children:[]}}function Lr(){return{type:"paragraph",children:[]}}function pt(){return{type:"strong",children:[]}}function ea(){return{type:"text",value:""}}function na(){return{type:"thematicBreak"}}}function ai(e){return{line:e.line,column:e.column,offset:e.offset}}function p0(e,n){let t=-1;for(;++t<n.length;){const i=n[t];Array.isArray(i)?p0(e,i):g2(e,i)}}function g2(e,n){let t;for(t in n)if(h0.call(n,t))switch(t){case"canContainEols":{const i=n[t];i&&e[t].push(...i);break}case"transforms":{const i=n[t];i&&e[t].push(...i);break}case"enter":case"exit":{const i=n[t];i&&Object.assign(e[t],i);break}}}function Bv(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+to({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+to({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+to({start:n.start,end:n.end})+") is still open")}function y2(e){const n=this;n.parser=t;function t(i){return h2(i,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function k2(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function v2(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function z2(e,n){const t=n.value?n.value+`
`:"",i={};n.lang&&(i.className=["language-"+n.lang]);let s={type:"element",tagName:"code",properties:i,children:[{type:"text",value:t}]};return n.meta&&(s.data={meta:n.meta}),e.patch(n,s),s=e.applyData(n,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(n,s),s}function b2(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function w2(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function x2(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(n.identifier).toUpperCase(),s=as(i.toLowerCase()),l=e.footnoteOrder.indexOf(i);let o,d=e.footnoteCounts.get(i);d===void 0?(d=0,e.footnoteOrder.push(i),o=e.footnoteOrder.length):o=l+1,d+=1,e.footnoteCounts.set(i,d);const f={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+s,id:t+"fnref-"+s+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,f);const m={type:"element",tagName:"sup",properties:{},children:[f]};return e.patch(n,m),e.applyData(n,m)}function j2(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function S2(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function g0(e,n){const t=n.referenceType;let i="]";if(t==="collapsed"?i+="[]":t==="full"&&(i+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+i}];const s=e.all(n),l=s[0];l&&l.type==="text"?l.value="["+l.value:s.unshift({type:"text",value:"["});const o=s[s.length-1];return o&&o.type==="text"?o.value+=i:s.push({type:"text",value:i}),s}function C2(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return g0(e,n);const s={src:as(i.url||""),alt:n.alt};i.title!==null&&i.title!==void 0&&(s.title=i.title);const l={type:"element",tagName:"img",properties:s,children:[]};return e.patch(n,l),e.applyData(n,l)}function _2(e,n){const t={src:as(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,i),e.applyData(n,i)}function T2(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const i={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,i),e.applyData(n,i)}function E2(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return g0(e,n);const s={href:as(i.url||"")};i.title!==null&&i.title!==void 0&&(s.title=i.title);const l={type:"element",tagName:"a",properties:s,children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function A2(e,n){const t={href:as(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function P2(e,n,t){const i=e.all(n),s=t?R2(t):y0(n),l={},o=[];if(typeof n.checked=="boolean"){const y=i[0];let u;y&&y.type==="element"&&y.tagName==="p"?u=y:(u={type:"element",tagName:"p",properties:{},children:[]},i.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let d=-1;for(;++d<i.length;){const y=i[d];(s||d!==0||y.type!=="element"||y.tagName!=="p")&&o.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!s?o.push(...y.children):o.push(y)}const f=i[i.length-1];f&&(s||f.type!=="element"||f.tagName!=="p")&&o.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:l,children:o};return e.patch(n,m),e.applyData(n,m)}function R2(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let i=-1;for(;!n&&++i<t.length;)n=y0(t[i])}return n}function y0(e){const n=e.spread;return n??e.children.length>1}function I2(e,n){const t={},i=e.all(n);let s=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++s<i.length;){const o=i[s];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(i,!0)};return e.patch(n,l),e.applyData(n,l)}function M2(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function D2(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function L2(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function O2(e,n){const t=e.all(n),i=t.shift(),s=[];if(i){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(n.children[0],o),s.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},d=wh(n.children[1]),f=Yx(n.children[n.children.length-1]);d&&f&&(o.position={start:d,end:f}),s.push(o)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(n,l),e.applyData(n,l)}function N2(e,n,t){const i=t?t.children:void 0,l=(i?i.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,d=o?o.length:n.children.length;let f=-1;const m=[];for(;++f<d;){const u=n.children[f],h={},g=o?o[f]:void 0;g&&(h.align=g);let z={type:"element",tagName:l,properties:h,children:[]};u&&(z.children=e.all(u),e.patch(u,z),z=e.applyData(u,z)),m.push(z)}const y={type:"element",tagName:"tr",properties:{},children:e.wrap(m,!0)};return e.patch(n,y),e.applyData(n,y)}function F2(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Uv=9,$v=32;function V2(e){const n=String(e),t=/\r?\n|\r/g;let i=t.exec(n),s=0;const l=[];for(;i;)l.push(Hv(n.slice(s,i.index),s>0,!0),i[0]),s=i.index+i[0].length,i=t.exec(n);return l.push(Hv(n.slice(s),s>0,!1)),l.join("")}function Hv(e,n,t){let i=0,s=e.length;if(n){let l=e.codePointAt(i);for(;l===Uv||l===$v;)i++,l=e.codePointAt(i)}if(t){let l=e.codePointAt(s-1);for(;l===Uv||l===$v;)s--,l=e.codePointAt(s-1)}return s>i?e.slice(i,s):""}function B2(e,n){const t={type:"text",value:V2(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function U2(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const $2={blockquote:k2,break:v2,code:z2,delete:b2,emphasis:w2,footnoteReference:x2,heading:j2,html:S2,imageReference:C2,image:_2,inlineCode:T2,linkReference:E2,link:A2,listItem:P2,list:I2,paragraph:M2,root:D2,strong:L2,table:O2,tableCell:F2,tableRow:N2,text:B2,thematicBreak:U2,toml:Xl,yaml:Xl,definition:Xl,footnoteDefinition:Xl};function Xl(){}const k0=-1,Ku=0,io=1,Su=2,Eh=3,Ah=4,Ph=5,Rh=6,v0=7,z0=8,Wv=typeof self=="object"?self:globalThis,H2=(e,n)=>{const t=(s,l)=>(e.set(l,s),s),i=s=>{if(e.has(s))return e.get(s);const[l,o]=n[s];switch(l){case Ku:case k0:return t(o,s);case io:{const d=t([],s);for(const f of o)d.push(i(f));return d}case Su:{const d=t({},s);for(const[f,m]of o)d[i(f)]=i(m);return d}case Eh:return t(new Date(o),s);case Ah:{const{source:d,flags:f}=o;return t(new RegExp(d,f),s)}case Ph:{const d=t(new Map,s);for(const[f,m]of o)d.set(i(f),i(m));return d}case Rh:{const d=t(new Set,s);for(const f of o)d.add(i(f));return d}case v0:{const{name:d,message:f}=o;return t(new Wv[d](f),s)}case z0:return t(BigInt(o),s);case"BigInt":return t(Object(BigInt(o)),s);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:d}=new Uint8Array(o);return t(new DataView(d),o)}}return t(new Wv[l](o),s)};return i},qv=e=>H2(new Map,e)(0),_a="",{toString:W2}={},{keys:q2}=Object,Gs=e=>{const n=typeof e;if(n!=="object"||!e)return[Ku,n];const t=W2.call(e).slice(8,-1);switch(t){case"Array":return[io,_a];case"Object":return[Su,_a];case"Date":return[Eh,_a];case"RegExp":return[Ah,_a];case"Map":return[Ph,_a];case"Set":return[Rh,_a];case"DataView":return[io,t]}return t.includes("Array")?[io,t]:t.includes("Error")?[v0,t]:[Su,t]},Jl=([e,n])=>e===Ku&&(n==="function"||n==="symbol"),K2=(e,n,t,i)=>{const s=(o,d)=>{const f=i.push(o)-1;return t.set(d,f),f},l=o=>{if(t.has(o))return t.get(o);let[d,f]=Gs(o);switch(d){case Ku:{let y=o;switch(f){case"bigint":d=z0,y=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+f);y=null;break;case"undefined":return s([k0],o)}return s([d,y],o)}case io:{if(f){let h=o;return f==="DataView"?h=new Uint8Array(o.buffer):f==="ArrayBuffer"&&(h=new Uint8Array(o)),s([f,[...h]],o)}const y=[],u=s([d,y],o);for(const h of o)y.push(l(h));return u}case Su:{if(f)switch(f){case"BigInt":return s([f,o.toString()],o);case"Boolean":case"Number":case"String":return s([f,o.valueOf()],o)}if(n&&"toJSON"in o)return l(o.toJSON());const y=[],u=s([d,y],o);for(const h of q2(o))(e||!Jl(Gs(o[h])))&&y.push([l(h),l(o[h])]);return u}case Eh:return s([d,o.toISOString()],o);case Ah:{const{source:y,flags:u}=o;return s([d,{source:y,flags:u}],o)}case Ph:{const y=[],u=s([d,y],o);for(const[h,g]of o)(e||!(Jl(Gs(h))||Jl(Gs(g))))&&y.push([l(h),l(g)]);return u}case Rh:{const y=[],u=s([d,y],o);for(const h of o)(e||!Jl(Gs(h)))&&y.push(l(h));return u}}const{message:m}=o;return s([d,{name:f,message:m}],o)};return l},Kv=(e,{json:n,lossy:t}={})=>{const i=[];return K2(!(n||t),!!n,new Map,i)(e),i},Cu=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?qv(Kv(e,n)):structuredClone(e):(e,n)=>qv(Kv(e,n));function G2(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function Q2(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Y2(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||G2,i=e.options.footnoteBackLabel||Q2,s=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let f=-1;for(;++f<e.footnoteOrder.length;){const m=e.footnoteById.get(e.footnoteOrder[f]);if(!m)continue;const y=e.all(m),u=String(m.identifier).toUpperCase(),h=as(u.toLowerCase());let g=0;const z=[],b=e.footnoteCounts.get(u);for(;b!==void 0&&++g<=b;){z.length>0&&z.push({type:"text",value:" "});let S=typeof t=="string"?t:t(f,g);typeof S=="string"&&(S={type:"text",value:S}),z.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(f,g),className:["data-footnote-backref"]},children:Array.isArray(S)?S:[S]})}const x=y[y.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const S=x.children[x.children.length-1];S&&S.type==="text"?S.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...z)}else y.push(...z);const w={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(y,!0)};e.patch(m,w),d.push(w)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Cu(o),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(d,!0)},{type:"text",value:`
`}]}}const Gu=function(e){if(e==null)return eN;if(typeof e=="function")return Qu(e);if(typeof e=="object")return Array.isArray(e)?X2(e):J2(e);if(typeof e=="string")return Z2(e);throw new Error("Expected function, string, or object as test")};function X2(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Gu(e[t]);return Qu(i);function i(...s){let l=-1;for(;++l<n.length;)if(n[l].apply(this,s))return!0;return!1}}function J2(e){const n=e;return Qu(t);function t(i){const s=i;let l;for(l in e)if(s[l]!==n[l])return!1;return!0}}function Z2(e){return Qu(n);function n(t){return t&&t.type===e}}function Qu(e){return n;function n(t,i,s){return!!(nN(t)&&e.call(this,t,typeof i=="number"?i:void 0,s||void 0))}}function eN(){return!0}function nN(e){return e!==null&&typeof e=="object"&&"type"in e}const b0=[],tN=!0,hm=!1,rN="skip";function w0(e,n,t,i){let s;typeof n=="function"&&typeof t!="function"?(i=t,t=n):s=n;const l=Gu(s),o=i?-1:1;d(e,void 0,[])();function d(f,m,y){const u=f&&typeof f=="object"?f:{};if(typeof u.type=="string"){const g=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(f.type+(g?"<"+g+">":""))+")"})}return h;function h(){let g=b0,z,b,x;if((!n||l(f,m,y[y.length-1]||void 0))&&(g=iN(t(f,y)),g[0]===hm))return g;if("children"in f&&f.children){const w=f;if(w.children&&g[0]!==rN)for(b=(i?w.children.length:-1)+o,x=y.concat(w);b>-1&&b<w.children.length;){const S=w.children[b];if(z=d(S,b,x)(),z[0]===hm)return z;b=typeof z[1]=="number"?z[1]:b+o}}return g}}}function iN(e){return Array.isArray(e)?e:typeof e=="number"?[tN,e]:e==null?b0:[e]}function Ih(e,n,t,i){let s,l,o;typeof n=="function"?(l=void 0,o=n,s=t):(l=n,o=t,s=i),w0(e,l,d,s);function d(f,m){const y=m[m.length-1],u=y?y.children.indexOf(f):void 0;return o(f,u,y)}}const pm={}.hasOwnProperty,aN={};function sN(e,n){const t=n||aN,i=new Map,s=new Map,l=new Map,o={...$2,...t.handlers},d={all:m,applyData:lN,definitionById:i,footnoteById:s,footnoteCounts:l,footnoteOrder:[],handlers:o,one:f,options:t,patch:oN,wrap:cN};return Ih(e,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const u=y.type==="definition"?i:s,h=String(y.identifier).toUpperCase();u.has(h)||u.set(h,y)}}),d;function f(y,u){const h=y.type,g=d.handlers[h];if(pm.call(d.handlers,h)&&g)return g(d,y,u);if(d.options.passThrough&&d.options.passThrough.includes(h)){if("children"in y){const{children:b,...x}=y,w=Cu(x);return w.children=d.all(y),w}return Cu(y)}return(d.options.unknownHandler||uN)(d,y,u)}function m(y){const u=[];if("children"in y){const h=y.children;let g=-1;for(;++g<h.length;){const z=d.one(h[g],y);if(z){if(g&&h[g-1].type==="break"&&(!Array.isArray(z)&&z.type==="text"&&(z.value=Gv(z.value)),!Array.isArray(z)&&z.type==="element")){const b=z.children[0];b&&b.type==="text"&&(b.value=Gv(b.value))}Array.isArray(z)?u.push(...z):u.push(z)}}}return u}}function oN(e,n){e.position&&(n.position=QD(e))}function lN(e,n){let t=n;if(e&&e.data){const i=e.data.hName,s=e.data.hChildren,l=e.data.hProperties;if(typeof i=="string")if(t.type==="element")t.tagName=i;else{const o="children"in t?t.children:[t];t={type:"element",tagName:i,properties:{},children:o}}t.type==="element"&&l&&Object.assign(t.properties,Cu(l)),"children"in t&&t.children&&s!==null&&s!==void 0&&(t.children=s)}return t}function uN(e,n){const t=n.data||{},i="value"in n&&!(pm.call(t,"hProperties")||pm.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function cN(e,n){const t=[];let i=-1;for(n&&t.push({type:"text",value:`
`});++i<e.length;)i&&t.push({type:"text",value:`
`}),t.push(e[i]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Gv(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Qv(e,n){const t=sN(e,n),i=t.one(e,void 0),s=Y2(t),l=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return s&&l.children.push({type:"text",value:`
`},s),l}function dN(e,n){return e&&"run"in e?async function(t,i){const s=Qv(t,{file:i,...n});await e.run(s,i)}:function(t,i){return Qv(t,{file:i,...e||n})}}function Yv(e){if(e)throw e}var ff,Xv;function fN(){if(Xv)return ff;Xv=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=function(m){return typeof Array.isArray=="function"?Array.isArray(m):n.call(m)==="[object Array]"},l=function(m){if(!m||n.call(m)!=="[object Object]")return!1;var y=e.call(m,"constructor"),u=m.constructor&&m.constructor.prototype&&e.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!y&&!u)return!1;var h;for(h in m);return typeof h>"u"||e.call(m,h)},o=function(m,y){t&&y.name==="__proto__"?t(m,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):m[y.name]=y.newValue},d=function(m,y){if(y==="__proto__")if(e.call(m,y)){if(i)return i(m,y).value}else return;return m[y]};return ff=function f(){var m,y,u,h,g,z,b=arguments[0],x=1,w=arguments.length,S=!1;for(typeof b=="boolean"&&(S=b,b=arguments[1]||{},x=2),(b==null||typeof b!="object"&&typeof b!="function")&&(b={});x<w;++x)if(m=arguments[x],m!=null)for(y in m)u=d(b,y),h=d(m,y),b!==h&&(S&&h&&(l(h)||(g=s(h)))?(g?(g=!1,z=u&&s(u)?u:[]):z=u&&l(u)?u:{},o(b,{name:y,newValue:f(S,z,h)})):typeof h<"u"&&o(b,{name:y,newValue:h}));return b},ff}var mN=fN();const mf=Tu(mN);function gm(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function hN(){const e=[],n={run:t,use:i};return n;function t(...s){let l=-1;const o=s.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);d(null,...s);function d(f,...m){const y=e[++l];let u=-1;if(f){o(f);return}for(;++u<s.length;)(m[u]===null||m[u]===void 0)&&(m[u]=s[u]);s=m,y?pN(y,d)(...m):o(null,...m)}}function i(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),n}}function pN(e,n){let t;return i;function i(...o){const d=e.length>o.length;let f;d&&o.push(s);try{f=e.apply(this,o)}catch(m){const y=m;if(d&&t)throw y;return s(y)}d||(f&&f.then&&typeof f.then=="function"?f.then(l,s):f instanceof Error?s(f):l(f))}function s(o,...d){t||(t=!0,n(o,...d))}function l(o){s(null,o)}}const or={basename:gN,dirname:yN,extname:kN,join:vN,sep:"/"};function gN(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Ro(e);let t=0,i=-1,s=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(l){t=s+1;break}}else i<0&&(l=!0,i=s+1);return i<0?"":e.slice(t,i)}if(n===e)return"";let o=-1,d=n.length-1;for(;s--;)if(e.codePointAt(s)===47){if(l){t=s+1;break}}else o<0&&(l=!0,o=s+1),d>-1&&(e.codePointAt(s)===n.codePointAt(d--)?d<0&&(i=s):(d=-1,i=o));return t===i?i=o:i<0&&(i=e.length),e.slice(t,i)}function yN(e){if(Ro(e),e.length===0)return".";let n=-1,t=e.length,i;for(;--t;)if(e.codePointAt(t)===47){if(i){n=t;break}}else i||(i=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function kN(e){Ro(e);let n=e.length,t=-1,i=0,s=-1,l=0,o;for(;n--;){const d=e.codePointAt(n);if(d===47){if(o){i=n+1;break}continue}t<0&&(o=!0,t=n+1),d===46?s<0?s=n:l!==1&&(l=1):s>-1&&(l=-1)}return s<0||t<0||l===0||l===1&&s===t-1&&s===i+1?"":e.slice(s,t)}function vN(...e){let n=-1,t;for(;++n<e.length;)Ro(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":zN(t)}function zN(e){Ro(e);const n=e.codePointAt(0)===47;let t=bN(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function bN(e,n){let t="",i=0,s=-1,l=0,o=-1,d,f;for(;++o<=e.length;){if(o<e.length)d=e.codePointAt(o);else{if(d===47)break;d=47}if(d===47){if(!(s===o-1||l===1))if(s!==o-1&&l===2){if(t.length<2||i!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(f=t.lastIndexOf("/"),f!==t.length-1){f<0?(t="",i=0):(t=t.slice(0,f),i=t.length-1-t.lastIndexOf("/")),s=o,l=0;continue}}else if(t.length>0){t="",i=0,s=o,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",i=2)}else t.length>0?t+="/"+e.slice(s+1,o):t=e.slice(s+1,o),i=o-s-1;s=o,l=0}else d===46&&l>-1?l++:l=-1}return t}function Ro(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const wN={cwd:xN};function xN(){return"/"}function ym(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function jN(e){if(typeof e=="string")e=new URL(e);else if(!ym(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return SN(e)}function SN(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const i=n.codePointAt(t+2);if(i===70||i===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(n)}const hf=["history","path","basename","stem","extname","dirname"];class x0{constructor(n){let t;n?ym(n)?t={path:n}:typeof n=="string"||CN(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":wN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<hf.length;){const l=hf[i];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let s;for(s in t)hf.includes(s)||(this[s]=t[s])}get basename(){return typeof this.path=="string"?or.basename(this.path):void 0}set basename(n){gf(n,"basename"),pf(n,"basename"),this.path=or.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?or.dirname(this.path):void 0}set dirname(n){Jv(this.basename,"dirname"),this.path=or.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?or.extname(this.path):void 0}set extname(n){if(pf(n,"extname"),Jv(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=or.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){ym(n)&&(n=jN(n)),gf(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?or.basename(this.path,this.extname):void 0}set stem(n){gf(n,"stem"),pf(n,"stem"),this.path=or.join(this.dirname||"",n+(this.extname||""))}fail(n,t,i){const s=this.message(n,t,i);throw s.fatal=!0,s}info(n,t,i){const s=this.message(n,t,i);return s.fatal=void 0,s}message(n,t,i){const s=new Ln(n,t,i);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function pf(e,n){if(e&&e.includes(or.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+or.sep+"`")}function gf(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Jv(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function CN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const _N=function(e){const i=this.constructor.prototype,s=i[e],l=function(){return s.apply(l,arguments)};return Object.setPrototypeOf(l,i),l},TN={}.hasOwnProperty;class Mh extends _N{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=hN()}copy(){const n=new Mh;let t=-1;for(;++t<this.attachers.length;){const i=this.attachers[t];n.use(...i)}return n.data(mf(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(vf("data",this.frozen),this.namespace[n]=t,this):TN.call(this.namespace,n)&&this.namespace[n]||void 0:n?(vf("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const s=t.call(n,...i);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Zl(n),i=this.parser||this.Parser;return yf("parse",i),i(String(t),t)}process(n,t){const i=this;return this.freeze(),yf("process",this.parser||this.Parser),kf("process",this.compiler||this.Compiler),t?s(void 0,t):new Promise(s);function s(l,o){const d=Zl(n),f=i.parse(d);i.run(f,d,function(y,u,h){if(y||!u||!h)return m(y);const g=u,z=i.stringify(g,h);PN(z)?h.value=z:h.result=z,m(y,h)});function m(y,u){y||!u?o(y):l?l(u):t(void 0,u)}}}processSync(n){let t=!1,i;return this.freeze(),yf("processSync",this.parser||this.Parser),kf("processSync",this.compiler||this.Compiler),this.process(n,s),ez("processSync","process",t),i;function s(l,o){t=!0,Yv(l),i=o}}run(n,t,i){Zv(n),this.freeze();const s=this.transformers;return!i&&typeof t=="function"&&(i=t,t=void 0),i?l(void 0,i):new Promise(l);function l(o,d){const f=Zl(t);s.run(n,f,m);function m(y,u,h){const g=u||n;y?d(y):o?o(g):i(void 0,g,h)}}}runSync(n,t){let i=!1,s;return this.run(n,t,l),ez("runSync","run",i),s;function l(o,d){Yv(o),s=d,i=!0}}stringify(n,t){this.freeze();const i=Zl(t),s=this.compiler||this.Compiler;return kf("stringify",s),Zv(n),s(n,i)}use(n,...t){const i=this.attachers,s=this.namespace;if(vf("use",this.frozen),n!=null)if(typeof n=="function")f(n,t);else if(typeof n=="object")Array.isArray(n)?d(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(m){if(typeof m=="function")f(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[y,...u]=m;f(y,u)}else o(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function o(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(m.plugins),m.settings&&(s.settings=mf(!0,s.settings,m.settings))}function d(m){let y=-1;if(m!=null)if(Array.isArray(m))for(;++y<m.length;){const u=m[y];l(u)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function f(m,y){let u=-1,h=-1;for(;++u<i.length;)if(i[u][0]===m){h=u;break}if(h===-1)i.push([m,...y]);else if(y.length>0){let[g,...z]=y;const b=i[h][1];gm(b)&&gm(g)&&(g=mf(!0,b,g)),i[h]=[m,g,...z]}}}}const EN=new Mh().freeze();function yf(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function kf(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function vf(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Zv(e){if(!gm(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ez(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Zl(e){return AN(e)?e:new x0(e)}function AN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function PN(e){return typeof e=="string"||RN(e)}function RN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const IN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",nz=[],tz={allowDangerousHtml:!0},MN=/^(https?|ircs?|mailto|xmpp)$/i,DN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function LN(e){const n=ON(e),t=NN(e);return FN(n.runSync(n.parse(t),t),e)}function ON(e){const n=e.rehypePlugins||nz,t=e.remarkPlugins||nz,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...tz}:tz;return EN().use(y2).use(t).use(dN,i).use(n)}function NN(e){const n=e.children||"",t=new x0;return typeof n=="string"&&(t.value=n),t}function FN(e,n){const t=n.allowedElements,i=n.allowElement,s=n.components,l=n.disallowedElements,o=n.skipHtml,d=n.unwrapDisallowed,f=n.urlTransform||VN;for(const y of DN)Object.hasOwn(n,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+IN+y.id,void 0);return Ih(e,m),eL(e,{Fragment:O.Fragment,components:s,ignoreInvalidStyle:!0,jsx:O.jsx,jsxs:O.jsxs,passKeys:!0,passNode:!0});function m(y,u,h){if(y.type==="raw"&&h&&typeof u=="number")return o?h.children.splice(u,1):h.children[u]={type:"text",value:y.value},u;if(y.type==="element"){let g;for(g in uf)if(Object.hasOwn(uf,g)&&Object.hasOwn(y.properties,g)){const z=y.properties[g],b=uf[g];(b===null||b.includes(y.tagName))&&(y.properties[g]=f(String(z||""),g,y))}}if(y.type==="element"){let g=t?!t.includes(y.tagName):l?l.includes(y.tagName):!1;if(!g&&i&&typeof u=="number"&&(g=!i(y,u,h)),g&&h&&typeof u=="number")return d&&y.children?h.children.splice(u,1,...y.children):h.children.splice(u,1),u}}}function VN(e){const n=e.indexOf(":"),t=e.indexOf("?"),i=e.indexOf("#"),s=e.indexOf("/");return n===-1||s!==-1&&n>s||t!==-1&&n>t||i!==-1&&n>i||MN.test(e.slice(0,n))?e:""}function rz(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let i=0,s=t.indexOf(n);for(;s!==-1;)i++,s=t.indexOf(n,s+n.length);return i}function BN(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function UN(e,n,t){const s=Gu((t||{}).ignore||[]),l=$N(n);let o=-1;for(;++o<l.length;)w0(e,"text",d);function d(m,y){let u=-1,h;for(;++u<y.length;){const g=y[u],z=h?h.children:void 0;if(s(g,z?z.indexOf(g):void 0,h))return;h=g}if(h)return f(m,y)}function f(m,y){const u=y[y.length-1],h=l[o][0],g=l[o][1];let z=0;const x=u.children.indexOf(m);let w=!1,S=[];h.lastIndex=0;let C=h.exec(m.value);for(;C;){const R=C.index,D={index:C.index,input:C.input,stack:[...y,m]};let P=g(...C,D);if(typeof P=="string"&&(P=P.length>0?{type:"text",value:P}:void 0),P===!1?h.lastIndex=R+1:(z!==R&&S.push({type:"text",value:m.value.slice(z,R)}),Array.isArray(P)?S.push(...P):P&&S.push(P),z=R+C[0].length,w=!0),!h.global)break;C=h.exec(m.value)}return w?(z<m.value.length&&S.push({type:"text",value:m.value.slice(z)}),u.children.splice(x,1,...S)):S=[m],x+S.length}}function $N(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let i=-1;for(;++i<t.length;){const s=t[i];n.push([HN(s[0]),WN(s[1])])}return n}function HN(e){return typeof e=="string"?new RegExp(BN(e),"g"):e}function WN(e){return typeof e=="function"?e:function(){return e}}const zf="phrasing",bf=["autolink","link","image","label"];function qN(){return{transforms:[ZN],enter:{literalAutolink:GN,literalAutolinkEmail:wf,literalAutolinkHttp:wf,literalAutolinkWww:wf},exit:{literalAutolink:JN,literalAutolinkEmail:XN,literalAutolinkHttp:QN,literalAutolinkWww:YN}}}function KN(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:zf,notInConstruct:bf},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:zf,notInConstruct:bf},{character:":",before:"[ps]",after:"\\/",inConstruct:zf,notInConstruct:bf}]}}function GN(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function wf(e){this.config.enter.autolinkProtocol.call(this,e)}function QN(e){this.config.exit.autolinkProtocol.call(this,e)}function YN(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function XN(e){this.config.exit.autolinkEmail.call(this,e)}function JN(e){this.exit(e)}function ZN(e){UN(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,eF],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),nF]],{ignore:["link","linkReference"]})}function eF(e,n,t,i,s){let l="";if(!j0(s)||(/^w/i.test(n)&&(t=n+t,n="",l="http://"),!tF(t)))return!1;const o=rF(t+i);if(!o[0])return!1;const d={type:"link",title:null,url:l+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[d,{type:"text",value:o[1]}]:d}function nF(e,n,t,i){return!j0(i,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function tF(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function rF(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],i=t.indexOf(")");const s=rz(e,"(");let l=rz(e,")");for(;i!==-1&&s>l;)e+=t.slice(0,i+1),t=t.slice(i+1),i=t.indexOf(")"),l++;return[e,t]}function j0(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Qi(t)||Wu(t))&&(!n||t!==47)}S0.peek=fF;function iF(){this.buffer()}function aF(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function sF(){this.buffer()}function oF(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function lF(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=qt(this.sliceSerialize(e)).toLowerCase(),t.label=n}function uF(e){this.exit(e)}function cF(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=qt(this.sliceSerialize(e)).toLowerCase(),t.label=n}function dF(e){this.exit(e)}function fF(){return"["}function S0(e,n,t,i){const s=t.createTracker(i);let l=s.move("[^");const o=t.enter("footnoteReference"),d=t.enter("reference");return l+=s.move(t.safe(t.associationId(e),{after:"]",before:l})),d(),o(),l+=s.move("]"),l}function mF(){return{enter:{gfmFootnoteCallString:iF,gfmFootnoteCall:aF,gfmFootnoteDefinitionLabelString:sF,gfmFootnoteDefinition:oF},exit:{gfmFootnoteCallString:lF,gfmFootnoteCall:uF,gfmFootnoteDefinitionLabelString:cF,gfmFootnoteDefinition:dF}}}function hF(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:S0},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(i,s,l,o){const d=l.createTracker(o);let f=d.move("[^");const m=l.enter("footnoteDefinition"),y=l.enter("label");return f+=d.move(l.safe(l.associationId(i),{before:f,after:"]"})),y(),f+=d.move("]:"),i.children&&i.children.length>0&&(d.shift(4),f+=d.move((n?`
`:" ")+l.indentLines(l.containerFlow(i,d.current()),n?C0:pF))),m(),f}}function pF(e,n,t){return n===0?e:C0(e,n,t)}function C0(e,n,t){return(t?"":"    ")+e}const gF=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];_0.peek=bF;function yF(){return{canContainEols:["delete"],enter:{strikethrough:vF},exit:{strikethrough:zF}}}function kF(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:gF}],handlers:{delete:_0}}}function vF(e){this.enter({type:"delete",children:[]},e)}function zF(e){this.exit(e)}function _0(e,n,t,i){const s=t.createTracker(i),l=t.enter("strikethrough");let o=s.move("~~");return o+=t.containerPhrasing(e,{...s.current(),before:o,after:"~"}),o+=s.move("~~"),l(),o}function bF(){return"~"}function wF(e){return e.length}function xF(e,n){const t=n||{},i=(t.align||[]).concat(),s=t.stringLength||wF,l=[],o=[],d=[],f=[];let m=0,y=-1;for(;++y<e.length;){const b=[],x=[];let w=-1;for(e[y].length>m&&(m=e[y].length);++w<e[y].length;){const S=jF(e[y][w]);if(t.alignDelimiters!==!1){const C=s(S);x[w]=C,(f[w]===void 0||C>f[w])&&(f[w]=C)}b.push(S)}o[y]=b,d[y]=x}let u=-1;if(typeof i=="object"&&"length"in i)for(;++u<m;)l[u]=iz(i[u]);else{const b=iz(i);for(;++u<m;)l[u]=b}u=-1;const h=[],g=[];for(;++u<m;){const b=l[u];let x="",w="";b===99?(x=":",w=":"):b===108?x=":":b===114&&(w=":");let S=t.alignDelimiters===!1?1:Math.max(1,f[u]-x.length-w.length);const C=x+"-".repeat(S)+w;t.alignDelimiters!==!1&&(S=x.length+S+w.length,S>f[u]&&(f[u]=S),g[u]=S),h[u]=C}o.splice(1,0,h),d.splice(1,0,g),y=-1;const z=[];for(;++y<o.length;){const b=o[y],x=d[y];u=-1;const w=[];for(;++u<m;){const S=b[u]||"";let C="",R="";if(t.alignDelimiters!==!1){const D=f[u]-(x[u]||0),P=l[u];P===114?C=" ".repeat(D):P===99?D%2?(C=" ".repeat(D/2+.5),R=" ".repeat(D/2-.5)):(C=" ".repeat(D/2),R=C):R=" ".repeat(D)}t.delimiterStart!==!1&&!u&&w.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&S==="")&&(t.delimiterStart!==!1||u)&&w.push(" "),t.alignDelimiters!==!1&&w.push(C),w.push(S),t.alignDelimiters!==!1&&w.push(R),t.padding!==!1&&w.push(" "),(t.delimiterEnd!==!1||u!==m-1)&&w.push("|")}z.push(t.delimiterEnd===!1?w.join("").replace(/ +$/,""):w.join(""))}return z.join(`
`)}function jF(e){return e==null?"":String(e)}function iz(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function SF(e,n,t,i){const s=t.enter("blockquote"),l=t.createTracker(i);l.move("> "),l.shift(2);const o=t.indentLines(t.containerFlow(e,l.current()),CF);return s(),o}function CF(e,n,t){return">"+(t?"":" ")+e}function _F(e,n){return az(e,n.inConstruct,!0)&&!az(e,n.notInConstruct,!1)}function az(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let i=-1;for(;++i<n.length;)if(e.includes(n[i]))return!0;return!1}function sz(e,n,t,i){let s=-1;for(;++s<t.unsafe.length;)if(t.unsafe[s].character===`
`&&_F(t.stack,t.unsafe[s]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function TF(e,n){const t=String(e);let i=t.indexOf(n),s=i,l=0,o=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===s?++l>o&&(o=l):l=1,s=i+n.length,i=t.indexOf(n,s);return o}function EF(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function AF(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function PF(e,n,t,i){const s=AF(t),l=e.value||"",o=s==="`"?"GraveAccent":"Tilde";if(EF(e,t)){const u=t.enter("codeIndented"),h=t.indentLines(l,RF);return u(),h}const d=t.createTracker(i),f=s.repeat(Math.max(TF(l,s)+1,3)),m=t.enter("codeFenced");let y=d.move(f);if(e.lang){const u=t.enter(`codeFencedLang${o}`);y+=d.move(t.safe(e.lang,{before:y,after:" ",encode:["`"],...d.current()})),u()}if(e.lang&&e.meta){const u=t.enter(`codeFencedMeta${o}`);y+=d.move(" "),y+=d.move(t.safe(e.meta,{before:y,after:`
`,encode:["`"],...d.current()})),u()}return y+=d.move(`
`),l&&(y+=d.move(l+`
`)),y+=d.move(f),m(),y}function RF(e,n,t){return(t?"":"    ")+e}function Dh(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function IF(e,n,t,i){const s=Dh(t),l=s==='"'?"Quote":"Apostrophe",o=t.enter("definition");let d=t.enter("label");const f=t.createTracker(i);let m=f.move("[");return m+=f.move(t.safe(t.associationId(e),{before:m,after:"]",...f.current()})),m+=f.move("]: "),d(),!e.url||/[\0- \u007F]/.test(e.url)?(d=t.enter("destinationLiteral"),m+=f.move("<"),m+=f.move(t.safe(e.url,{before:m,after:">",...f.current()})),m+=f.move(">")):(d=t.enter("destinationRaw"),m+=f.move(t.safe(e.url,{before:m,after:e.title?" ":`
`,...f.current()}))),d(),e.title&&(d=t.enter(`title${l}`),m+=f.move(" "+s),m+=f.move(t.safe(e.title,{before:m,after:s,...f.current()})),m+=f.move(s),d()),o(),m}function MF(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function vo(e){return"&#x"+e.toString(16).toUpperCase()+";"}function _u(e,n,t){const i=Xa(e),s=Xa(n);return i===void 0?s===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}T0.peek=DF;function T0(e,n,t,i){const s=MF(t),l=t.enter("emphasis"),o=t.createTracker(i),d=o.move(s);let f=o.move(t.containerPhrasing(e,{after:s,before:d,...o.current()}));const m=f.charCodeAt(0),y=_u(i.before.charCodeAt(i.before.length-1),m,s);y.inside&&(f=vo(m)+f.slice(1));const u=f.charCodeAt(f.length-1),h=_u(i.after.charCodeAt(0),u,s);h.inside&&(f=f.slice(0,-1)+vo(u));const g=o.move(s);return l(),t.attentionEncodeSurroundingInfo={after:h.outside,before:y.outside},d+f+g}function DF(e,n,t){return t.options.emphasis||"*"}function LF(e,n){let t=!1;return Ih(e,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return t=!0,hm}),!!((!e.depth||e.depth<3)&&Ch(e)&&(n.options.setext||t))}function OF(e,n,t,i){const s=Math.max(Math.min(6,e.depth||1),1),l=t.createTracker(i);if(LF(e,t)){const y=t.enter("headingSetext"),u=t.enter("phrasing"),h=t.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return u(),y(),h+`
`+(s===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const o="#".repeat(s),d=t.enter("headingAtx"),f=t.enter("phrasing");l.move(o+" ");let m=t.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(m)&&(m=vo(m.charCodeAt(0))+m.slice(1)),m=m?o+" "+m:o,t.options.closeAtx&&(m+=" "+o),f(),d(),m}E0.peek=NF;function E0(e){return e.value||""}function NF(){return"<"}A0.peek=FF;function A0(e,n,t,i){const s=Dh(t),l=s==='"'?"Quote":"Apostrophe",o=t.enter("image");let d=t.enter("label");const f=t.createTracker(i);let m=f.move("![");return m+=f.move(t.safe(e.alt,{before:m,after:"]",...f.current()})),m+=f.move("]("),d(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(d=t.enter("destinationLiteral"),m+=f.move("<"),m+=f.move(t.safe(e.url,{before:m,after:">",...f.current()})),m+=f.move(">")):(d=t.enter("destinationRaw"),m+=f.move(t.safe(e.url,{before:m,after:e.title?" ":")",...f.current()}))),d(),e.title&&(d=t.enter(`title${l}`),m+=f.move(" "+s),m+=f.move(t.safe(e.title,{before:m,after:s,...f.current()})),m+=f.move(s),d()),m+=f.move(")"),o(),m}function FF(){return"!"}P0.peek=VF;function P0(e,n,t,i){const s=e.referenceType,l=t.enter("imageReference");let o=t.enter("label");const d=t.createTracker(i);let f=d.move("![");const m=t.safe(e.alt,{before:f,after:"]",...d.current()});f+=d.move(m+"]["),o();const y=t.stack;t.stack=[],o=t.enter("reference");const u=t.safe(t.associationId(e),{before:f,after:"]",...d.current()});return o(),t.stack=y,l(),s==="full"||!m||m!==u?f+=d.move(u+"]"):s==="shortcut"?f=f.slice(0,-1):f+=d.move("]"),f}function VF(){return"!"}R0.peek=BF;function R0(e,n,t){let i=e.value||"",s="`",l=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(i);)s+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++l<t.unsafe.length;){const o=t.unsafe[l],d=t.compilePattern(o);let f;if(o.atBreak)for(;f=d.exec(i);){let m=f.index;i.charCodeAt(m)===10&&i.charCodeAt(m-1)===13&&m--,i=i.slice(0,m)+" "+i.slice(f.index+1)}}return s+i+s}function BF(){return"`"}function I0(e,n){const t=Ch(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}M0.peek=UF;function M0(e,n,t,i){const s=Dh(t),l=s==='"'?"Quote":"Apostrophe",o=t.createTracker(i);let d,f;if(I0(e,t)){const y=t.stack;t.stack=[],d=t.enter("autolink");let u=o.move("<");return u+=o.move(t.containerPhrasing(e,{before:u,after:">",...o.current()})),u+=o.move(">"),d(),t.stack=y,u}d=t.enter("link"),f=t.enter("label");let m=o.move("[");return m+=o.move(t.containerPhrasing(e,{before:m,after:"](",...o.current()})),m+=o.move("]("),f(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(f=t.enter("destinationLiteral"),m+=o.move("<"),m+=o.move(t.safe(e.url,{before:m,after:">",...o.current()})),m+=o.move(">")):(f=t.enter("destinationRaw"),m+=o.move(t.safe(e.url,{before:m,after:e.title?" ":")",...o.current()}))),f(),e.title&&(f=t.enter(`title${l}`),m+=o.move(" "+s),m+=o.move(t.safe(e.title,{before:m,after:s,...o.current()})),m+=o.move(s),f()),m+=o.move(")"),d(),m}function UF(e,n,t){return I0(e,t)?"<":"["}D0.peek=$F;function D0(e,n,t,i){const s=e.referenceType,l=t.enter("linkReference");let o=t.enter("label");const d=t.createTracker(i);let f=d.move("[");const m=t.containerPhrasing(e,{before:f,after:"]",...d.current()});f+=d.move(m+"]["),o();const y=t.stack;t.stack=[],o=t.enter("reference");const u=t.safe(t.associationId(e),{before:f,after:"]",...d.current()});return o(),t.stack=y,l(),s==="full"||!m||m!==u?f+=d.move(u+"]"):s==="shortcut"?f=f.slice(0,-1):f+=d.move("]"),f}function $F(){return"["}function Lh(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function HF(e){const n=Lh(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function WF(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function L0(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function qF(e,n,t,i){const s=t.enter("list"),l=t.bulletCurrent;let o=e.ordered?WF(t):Lh(t);const d=e.ordered?o==="."?")":".":HF(t);let f=n&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!e.ordered){const y=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&y&&(!y.children||!y.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(f=!0),L0(t)===o&&y){let u=-1;for(;++u<e.children.length;){const h=e.children[u];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){f=!0;break}}}}f&&(o=d),t.bulletCurrent=o;const m=t.containerFlow(e,i);return t.bulletLastUsed=o,t.bulletCurrent=l,s(),m}function KF(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function GF(e,n,t,i){const s=KF(t);let l=t.bulletCurrent||Lh(t);n&&n.type==="list"&&n.ordered&&(l=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+l);let o=l.length+1;(s==="tab"||s==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(o=Math.ceil(o/4)*4);const d=t.createTracker(i);d.move(l+" ".repeat(o-l.length)),d.shift(o);const f=t.enter("listItem"),m=t.indentLines(t.containerFlow(e,d.current()),y);return f(),m;function y(u,h,g){return h?(g?"":" ".repeat(o))+u:(g?l:l+" ".repeat(o-l.length))+u}}function QF(e,n,t,i){const s=t.enter("paragraph"),l=t.enter("phrasing"),o=t.containerPhrasing(e,i);return l(),s(),o}const YF=Gu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function XF(e,n,t,i){return(e.children.some(function(o){return YF(o)})?t.containerPhrasing:t.containerFlow).call(t,e,i)}function JF(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}O0.peek=ZF;function O0(e,n,t,i){const s=JF(t),l=t.enter("strong"),o=t.createTracker(i),d=o.move(s+s);let f=o.move(t.containerPhrasing(e,{after:s,before:d,...o.current()}));const m=f.charCodeAt(0),y=_u(i.before.charCodeAt(i.before.length-1),m,s);y.inside&&(f=vo(m)+f.slice(1));const u=f.charCodeAt(f.length-1),h=_u(i.after.charCodeAt(0),u,s);h.inside&&(f=f.slice(0,-1)+vo(u));const g=o.move(s+s);return l(),t.attentionEncodeSurroundingInfo={after:h.outside,before:y.outside},d+f+g}function ZF(e,n,t){return t.options.strong||"*"}function e4(e,n,t,i){return t.safe(e.value,i)}function n4(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function t4(e,n,t){const i=(L0(t)+(t.options.ruleSpaces?" ":"")).repeat(n4(t));return t.options.ruleSpaces?i.slice(0,-1):i}const N0={blockquote:SF,break:sz,code:PF,definition:IF,emphasis:T0,hardBreak:sz,heading:OF,html:E0,image:A0,imageReference:P0,inlineCode:R0,link:M0,linkReference:D0,list:qF,listItem:GF,paragraph:QF,root:XF,strong:O0,text:e4,thematicBreak:t4};function r4(){return{enter:{table:i4,tableData:oz,tableHeader:oz,tableRow:s4},exit:{codeText:o4,table:a4,tableData:xf,tableHeader:xf,tableRow:xf}}}function i4(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function a4(e){this.exit(e),this.data.inTable=void 0}function s4(e){this.enter({type:"tableRow",children:[]},e)}function xf(e){this.exit(e)}function oz(e){this.enter({type:"tableCell",children:[]},e)}function o4(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,l4));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function l4(e,n){return n==="|"?n:e}function u4(e){const n=e||{},t=n.tableCellPadding,i=n.tablePipeAlign,s=n.stringLength,l=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:o,tableCell:f,tableRow:d}};function o(g,z,b,x){return m(y(g,b,x),g.align)}function d(g,z,b,x){const w=u(g,b,x),S=m([w]);return S.slice(0,S.indexOf(`
`))}function f(g,z,b,x){const w=b.enter("tableCell"),S=b.enter("phrasing"),C=b.containerPhrasing(g,{...x,before:l,after:l});return S(),w(),C}function m(g,z){return xF(g,{align:z,alignDelimiters:i,padding:t,stringLength:s})}function y(g,z,b){const x=g.children;let w=-1;const S=[],C=z.enter("table");for(;++w<x.length;)S[w]=u(x[w],z,b);return C(),S}function u(g,z,b){const x=g.children;let w=-1;const S=[],C=z.enter("tableRow");for(;++w<x.length;)S[w]=f(x[w],g,z,b);return C(),S}function h(g,z,b){let x=N0.inlineCode(g,z,b);return b.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function c4(){return{exit:{taskListCheckValueChecked:lz,taskListCheckValueUnchecked:lz,paragraph:f4}}}function d4(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:m4}}}function lz(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function f4(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const i=t.children[0];if(i&&i.type==="text"){const s=n.children;let l=-1,o;for(;++l<s.length;){const d=s[l];if(d.type==="paragraph"){o=d;break}}o===t&&(i.value=i.value.slice(1),i.value.length===0?t.children.shift():t.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,t.position.start=Object.assign({},i.position.start)))}}this.exit(e)}function m4(e,n,t,i){const s=e.children[0],l=typeof e.checked=="boolean"&&s&&s.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",d=t.createTracker(i);l&&d.move(o);let f=N0.listItem(e,n,t,{...i,...d.current()});return l&&(f=f.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,m)),f;function m(y){return y+o}}function h4(){return[qN(),mF(),yF(),r4(),c4()]}function p4(e){return{extensions:[KN(),hF(e),kF(),u4(e),d4()]}}const g4={tokenize:w4,partial:!0},F0={tokenize:x4,partial:!0},V0={tokenize:j4,partial:!0},B0={tokenize:S4,partial:!0},y4={tokenize:C4,partial:!0},U0={name:"wwwAutolink",tokenize:z4,previous:H0},$0={name:"protocolAutolink",tokenize:b4,previous:W0},Dr={name:"emailAutolink",tokenize:v4,previous:q0},kr={};function k4(){return{text:kr}}let Li=48;for(;Li<123;)kr[Li]=Dr,Li++,Li===58?Li=65:Li===91&&(Li=97);kr[43]=Dr;kr[45]=Dr;kr[46]=Dr;kr[95]=Dr;kr[72]=[Dr,$0];kr[104]=[Dr,$0];kr[87]=[Dr,U0];kr[119]=[Dr,U0];function v4(e,n,t){const i=this;let s,l;return o;function o(u){return!km(u)||!q0.call(i,i.previous)||Oh(i.events)?t(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),d(u))}function d(u){return km(u)?(e.consume(u),d):u===64?(e.consume(u),f):t(u)}function f(u){return u===46?e.check(y4,y,m)(u):u===45||u===95||Dn(u)?(l=!0,e.consume(u),f):y(u)}function m(u){return e.consume(u),s=!0,f}function y(u){return l&&s&&Wn(i.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(u)):t(u)}}function z4(e,n,t){const i=this;return s;function s(o){return o!==87&&o!==119||!H0.call(i,i.previous)||Oh(i.events)?t(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(g4,e.attempt(F0,e.attempt(V0,l),t),t)(o))}function l(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(o)}}function b4(e,n,t){const i=this;let s="",l=!1;return o;function o(u){return(u===72||u===104)&&W0.call(i,i.previous)&&!Oh(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),s+=String.fromCodePoint(u),e.consume(u),d):t(u)}function d(u){if(Wn(u)&&s.length<5)return s+=String.fromCodePoint(u),e.consume(u),d;if(u===58){const h=s.toLowerCase();if(h==="http"||h==="https")return e.consume(u),f}return t(u)}function f(u){return u===47?(e.consume(u),l?m:(l=!0,f)):t(u)}function m(u){return u===null||ju(u)||$e(u)||Qi(u)||Wu(u)?t(u):e.attempt(F0,e.attempt(V0,y),t)(u)}function y(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(u)}}function w4(e,n,t){let i=0;return s;function s(o){return(o===87||o===119)&&i<3?(i++,e.consume(o),s):o===46&&i===3?(e.consume(o),l):t(o)}function l(o){return o===null?t(o):n(o)}}function x4(e,n,t){let i,s,l;return o;function o(m){return m===46||m===95?e.check(B0,f,d)(m):m===null||$e(m)||Qi(m)||m!==45&&Wu(m)?f(m):(l=!0,e.consume(m),o)}function d(m){return m===95?i=!0:(s=i,i=void 0),e.consume(m),o}function f(m){return s||i||!l?t(m):n(m)}}function j4(e,n){let t=0,i=0;return s;function s(o){return o===40?(t++,e.consume(o),s):o===41&&i<t?l(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(B0,n,l)(o):o===null||$e(o)||Qi(o)?n(o):(e.consume(o),s)}function l(o){return o===41&&i++,e.consume(o),s}}function S4(e,n,t){return i;function i(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(e.consume(d),i):d===38?(e.consume(d),l):d===93?(e.consume(d),s):d===60||d===null||$e(d)||Qi(d)?n(d):t(d)}function s(d){return d===null||d===40||d===91||$e(d)||Qi(d)?n(d):i(d)}function l(d){return Wn(d)?o(d):t(d)}function o(d){return d===59?(e.consume(d),i):Wn(d)?(e.consume(d),o):t(d)}}function C4(e,n,t){return i;function i(l){return e.consume(l),s}function s(l){return Dn(l)?t(l):n(l)}}function H0(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$e(e)}function W0(e){return!Wn(e)}function q0(e){return!(e===47||km(e))}function km(e){return e===43||e===45||e===46||e===95||Dn(e)}function Oh(e){let n=e.length,t=!1;for(;n--;){const i=e[n][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){t=!0;break}if(i._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const _4={tokenize:D4,partial:!0};function T4(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:R4,continuation:{tokenize:I4},exit:M4}},text:{91:{name:"gfmFootnoteCall",tokenize:P4},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:E4,resolveTo:A4}}}}function E4(e,n,t){const i=this;let s=i.events.length;const l=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o;for(;s--;){const f=i.events[s][1];if(f.type==="labelImage"){o=f;break}if(f.type==="gfmFootnoteCall"||f.type==="labelLink"||f.type==="label"||f.type==="image"||f.type==="link")break}return d;function d(f){if(!o||!o._balanced)return t(f);const m=qt(i.sliceSerialize({start:o.end,end:i.now()}));return m.codePointAt(0)!==94||!l.includes(m.slice(1))?t(f):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),n(f))}}function A4(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},d=[e[t+1],e[t+2],["enter",i,n],e[t+3],e[t+4],["enter",s,n],["exit",s,n],["enter",l,n],["enter",o,n],["exit",o,n],["exit",l,n],e[e.length-2],e[e.length-1],["exit",i,n]];return e.splice(t,e.length-t+1,...d),e}function P4(e,n,t){const i=this,s=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let l=0,o;return d;function d(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),f}function f(u){return u!==94?t(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",m)}function m(u){if(l>999||u===93&&!o||u===null||u===91||$e(u))return t(u);if(u===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return s.includes(qt(i.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(u)}return $e(u)||(o=!0),l++,e.consume(u),u===92?y:m}function y(u){return u===91||u===92||u===93?(e.consume(u),l++,m):m(u)}}function R4(e,n,t){const i=this,s=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let l,o=0,d;return f;function f(z){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(z),e.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(z){return z===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(z),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",y):t(z)}function y(z){if(o>999||z===93&&!d||z===null||z===91||$e(z))return t(z);if(z===93){e.exit("chunkString");const b=e.exit("gfmFootnoteDefinitionLabelString");return l=qt(i.sliceSerialize(b)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(z),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return $e(z)||(d=!0),o++,e.consume(z),z===92?u:y}function u(z){return z===91||z===92||z===93?(e.consume(z),o++,y):y(z)}function h(z){return z===58?(e.enter("definitionMarker"),e.consume(z),e.exit("definitionMarker"),s.includes(l)||s.push(l),De(e,g,"gfmFootnoteDefinitionWhitespace")):t(z)}function g(z){return n(z)}}function I4(e,n,t){return e.check(Po,n,e.attempt(_4,n,t))}function M4(e){e.exit("gfmFootnoteDefinition")}function D4(e,n,t){const i=this;return De(e,s,"gfmFootnoteDefinitionIndent",5);function s(l){const o=i.events[i.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(l):t(l)}}function L4(e){let t=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:l,resolveAll:s};return t==null&&(t=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function s(o,d){let f=-1;for(;++f<o.length;)if(o[f][0]==="enter"&&o[f][1].type==="strikethroughSequenceTemporary"&&o[f][1]._close){let m=f;for(;m--;)if(o[m][0]==="exit"&&o[m][1].type==="strikethroughSequenceTemporary"&&o[m][1]._open&&o[f][1].end.offset-o[f][1].start.offset===o[m][1].end.offset-o[m][1].start.offset){o[f][1].type="strikethroughSequence",o[m][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},o[m][1].start),end:Object.assign({},o[f][1].end)},u={type:"strikethroughText",start:Object.assign({},o[m][1].end),end:Object.assign({},o[f][1].start)},h=[["enter",y,d],["enter",o[m][1],d],["exit",o[m][1],d],["enter",u,d]],g=d.parser.constructs.insideSpan.null;g&&ht(h,h.length,0,qu(g,o.slice(m+1,f),d)),ht(h,h.length,0,[["exit",u,d],["enter",o[f][1],d],["exit",o[f][1],d],["exit",y,d]]),ht(o,m-1,f-m+3,h),f=m+h.length-2;break}}for(f=-1;++f<o.length;)o[f][1].type==="strikethroughSequenceTemporary"&&(o[f][1].type="data");return o}function l(o,d,f){const m=this.previous,y=this.events;let u=0;return h;function h(z){return m===126&&y[y.length-1][1].type!=="characterEscape"?f(z):(o.enter("strikethroughSequenceTemporary"),g(z))}function g(z){const b=Xa(m);if(z===126)return u>1?f(z):(o.consume(z),u++,g);if(u<2&&!t)return f(z);const x=o.exit("strikethroughSequenceTemporary"),w=Xa(z);return x._open=!w||w===2&&!!b,x._close=!b||b===2&&!!w,d(z)}}}class O4{constructor(){this.map=[]}add(n,t,i){N4(this,n,t,i)}consume(n){if(this.map.sort(function(l,o){return l[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const i=[];for(;t>0;)t-=1,i.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];i.push(n.slice()),n.length=0;let s=i.pop();for(;s;){for(const l of s)n.push(l);s=i.pop()}this.map.length=0}}function N4(e,n,t,i){let s=0;if(!(t===0&&i.length===0)){for(;s<e.map.length;){if(e.map[s][0]===n){e.map[s][1]+=t,e.map[s][2].push(...i);return}s+=1}e.map.push([n,t,i])}}function F4(e,n){let t=!1;const i=[];for(;n<e.length;){const s=e[n];if(t){if(s[0]==="enter")s[1].type==="tableContent"&&i.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const l=i.length-1;i[l]=i[l]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return i}function V4(){return{flow:{null:{name:"table",tokenize:B4,resolveAll:U4}}}}function B4(e,n,t){const i=this;let s=0,l=0,o;return d;function d(L){let Z=i.events.length-1;for(;Z>-1;){const B=i.events[Z][1].type;if(B==="lineEnding"||B==="linePrefix")Z--;else break}const G=Z>-1?i.events[Z][1].type:null,ee=G==="tableHead"||G==="tableRow"?P:f;return ee===P&&i.parser.lazy[i.now().line]?t(L):ee(L)}function f(L){return e.enter("tableHead"),e.enter("tableRow"),m(L)}function m(L){return L===124||(o=!0,l+=1),y(L)}function y(L){return L===null?t(L):be(L)?l>1?(l=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(L),e.exit("lineEnding"),g):t(L):Me(L)?De(e,y,"whitespace")(L):(l+=1,o&&(o=!1,s+=1),L===124?(e.enter("tableCellDivider"),e.consume(L),e.exit("tableCellDivider"),o=!0,y):(e.enter("data"),u(L)))}function u(L){return L===null||L===124||$e(L)?(e.exit("data"),y(L)):(e.consume(L),L===92?h:u)}function h(L){return L===92||L===124?(e.consume(L),u):u(L)}function g(L){return i.interrupt=!1,i.parser.lazy[i.now().line]?t(L):(e.enter("tableDelimiterRow"),o=!1,Me(L)?De(e,z,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):z(L))}function z(L){return L===45||L===58?x(L):L===124?(o=!0,e.enter("tableCellDivider"),e.consume(L),e.exit("tableCellDivider"),b):D(L)}function b(L){return Me(L)?De(e,x,"whitespace")(L):x(L)}function x(L){return L===58?(l+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(L),e.exit("tableDelimiterMarker"),w):L===45?(l+=1,w(L)):L===null||be(L)?R(L):D(L)}function w(L){return L===45?(e.enter("tableDelimiterFiller"),S(L)):D(L)}function S(L){return L===45?(e.consume(L),S):L===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(L),e.exit("tableDelimiterMarker"),C):(e.exit("tableDelimiterFiller"),C(L))}function C(L){return Me(L)?De(e,R,"whitespace")(L):R(L)}function R(L){return L===124?z(L):L===null||be(L)?!o||s!==l?D(L):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(L)):D(L)}function D(L){return t(L)}function P(L){return e.enter("tableRow"),$(L)}function $(L){return L===124?(e.enter("tableCellDivider"),e.consume(L),e.exit("tableCellDivider"),$):L===null||be(L)?(e.exit("tableRow"),n(L)):Me(L)?De(e,$,"whitespace")(L):(e.enter("data"),Y(L))}function Y(L){return L===null||L===124||$e(L)?(e.exit("data"),$(L)):(e.consume(L),L===92?K:Y)}function K(L){return L===92||L===124?(e.consume(L),Y):Y(L)}}function U4(e,n){let t=-1,i=!0,s=0,l=[0,0,0,0],o=[0,0,0,0],d=!1,f=0,m,y,u;const h=new O4;for(;++t<e.length;){const g=e[t],z=g[1];g[0]==="enter"?z.type==="tableHead"?(d=!1,f!==0&&(uz(h,n,f,m,y),y=void 0,f=0),m={type:"table",start:Object.assign({},z.start),end:Object.assign({},z.end)},h.add(t,0,[["enter",m,n]])):z.type==="tableRow"||z.type==="tableDelimiterRow"?(i=!0,u=void 0,l=[0,0,0,0],o=[0,t+1,0,0],d&&(d=!1,y={type:"tableBody",start:Object.assign({},z.start),end:Object.assign({},z.end)},h.add(t,0,[["enter",y,n]])),s=z.type==="tableDelimiterRow"?2:y?3:1):s&&(z.type==="data"||z.type==="tableDelimiterMarker"||z.type==="tableDelimiterFiller")?(i=!1,o[2]===0&&(l[1]!==0&&(o[0]=o[1],u=eu(h,n,l,s,void 0,u),l=[0,0,0,0]),o[2]=t)):z.type==="tableCellDivider"&&(i?i=!1:(l[1]!==0&&(o[0]=o[1],u=eu(h,n,l,s,void 0,u)),l=o,o=[l[1],t,0,0])):z.type==="tableHead"?(d=!0,f=t):z.type==="tableRow"||z.type==="tableDelimiterRow"?(f=t,l[1]!==0?(o[0]=o[1],u=eu(h,n,l,s,t,u)):o[1]!==0&&(u=eu(h,n,o,s,t,u)),s=0):s&&(z.type==="data"||z.type==="tableDelimiterMarker"||z.type==="tableDelimiterFiller")&&(o[3]=t)}for(f!==0&&uz(h,n,f,m,y),h.consume(n.events),t=-1;++t<n.events.length;){const g=n.events[t];g[0]==="enter"&&g[1].type==="table"&&(g[1]._align=F4(n.events,t))}return e}function eu(e,n,t,i,s,l){const o=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",d="tableContent";t[0]!==0&&(l.end=Object.assign({},Ta(n.events,t[0])),e.add(t[0],0,[["exit",l,n]]));const f=Ta(n.events,t[1]);if(l={type:o,start:Object.assign({},f),end:Object.assign({},f)},e.add(t[1],0,[["enter",l,n]]),t[2]!==0){const m=Ta(n.events,t[2]),y=Ta(n.events,t[3]),u={type:d,start:Object.assign({},m),end:Object.assign({},y)};if(e.add(t[2],0,[["enter",u,n]]),i!==2){const h=n.events[t[2]],g=n.events[t[3]];if(h[1].end=Object.assign({},g[1].end),h[1].type="chunkText",h[1].contentType="text",t[3]>t[2]+1){const z=t[2]+1,b=t[3]-t[2]-1;e.add(z,b,[])}}e.add(t[3]+1,0,[["exit",u,n]])}return s!==void 0&&(l.end=Object.assign({},Ta(n.events,s)),e.add(s,0,[["exit",l,n]]),l=void 0),l}function uz(e,n,t,i,s){const l=[],o=Ta(n.events,t);s&&(s.end=Object.assign({},o),l.push(["exit",s,n])),i.end=Object.assign({},o),l.push(["exit",i,n]),e.add(t+1,0,l)}function Ta(e,n){const t=e[n],i=t[0]==="enter"?"start":"end";return t[1][i]}const $4={name:"tasklistCheck",tokenize:W4};function H4(){return{text:{91:$4}}}function W4(e,n,t){const i=this;return s;function s(f){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?t(f):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(f),e.exit("taskListCheckMarker"),l)}function l(f){return $e(f)?(e.enter("taskListCheckValueUnchecked"),e.consume(f),e.exit("taskListCheckValueUnchecked"),o):f===88||f===120?(e.enter("taskListCheckValueChecked"),e.consume(f),e.exit("taskListCheckValueChecked"),o):t(f)}function o(f){return f===93?(e.enter("taskListCheckMarker"),e.consume(f),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),d):t(f)}function d(f){return be(f)?n(f):Me(f)?e.check({tokenize:q4},n,t)(f):t(f)}}function q4(e,n,t){return De(e,i,"whitespace");function i(s){return s===null?t(s):n(s)}}function K4(e){return r0([k4(),T4(),L4(e),V4(),H4()])}const G4={};function Q4(e){const n=this,t=e||G4,i=n.data(),s=i.micromarkExtensions||(i.micromarkExtensions=[]),l=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),o=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);s.push(K4(t)),l.push(h4()),o.push(p4(t))}const Y4=`# Flashcard Learner Application Specification

## 1. Purpose
The Flashcard Learner application is designed to help users memorize information efficiently through interactive flashcards. Users can input custom sets of flashcards and practice them using a flip-card interface and a multiple-choice quiz mode.

## 2. Key Features

### 2.1 Flashcard Input
-   **Format:** Users input flashcards in a simple "front - back" format, one per line, into a text area.
-   **Validation:** The application validates input lines, ensuring each has both a front and a back, and provides toast notifications for errors.
-   **Loading:** A "Load Flashcards" button processes the input and shuffles the cards for the learning session.
-   **Keyboard Shortcut:** Pressing 'Enter' (without 'Shift') in the input area triggers the "Load Flashcards" action.

### 2.2 Flashcard Viewing and Navigation
-   **Card Display:** Displays one flashcard at a time, showing either the front or the back.
-   **Flip Functionality:** A "Flip Card" button (or 'ArrowUp'/'ArrowDown' keys) toggles between the front and back of the current card.
-   **Navigation:** "Previous" ('ArrowLeft' key) and "Next" ('ArrowRight' key) buttons allow users to move through the flashcard deck.
-   **3D Flip Effect:** Cards have a visual 3D flip animation when toggling between front and back.

### 2.3 Quiz Mode
-   **Multiple Choice Options:** For each flashcard, three options are presented: the correct answer and two randomly selected incorrect answers from the current deck.
-   **Selection:** Users can click on an option or use number keys (1, 2, 3) to select an answer.
-   **Feedback:**
    -   Correct answer: The card background turns green, and the correct answer counter flashes.
    -   Incorrect answer: The card background turns red, and the selected incorrect option is highlighted.
-   **Auto-Next:** An "Auto-Next on Correct" toggle is enabled by default, automatically advancing to the next card 2 seconds after a correct answer is selected.

### 2.4 Statistics
-   **Counters:** Displays "Cards Presented" (in gray) and "Correct Answers" (in black, with a green flash animation) counts.
-   **Correct Answer Animation:** The "Correct Answers" counter visually flashes with a zoom and color change when a correct answer is given.
-   **Reset Stats:** A button to reset the "Cards Presented" and "Correct Answers" counts.

### 2.5 Session Management
-   **Start New Session:** A button to clear the current flashcards and return to the input screen. This can also be triggered by the 'Enter' key when not in the input field.

## 3. Technology Stack
-   **Frontend Framework:** React (with TypeScript)
-   **Routing:** React Router
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui (pre-built components)
-   **Icons:** Lucide React
-   **Animation:** Framer Motion
-   **State Management/Data Fetching:** React Query (though not heavily utilized for this app's current scope)
-   **Build Tool:** Vite

## 4. User Flow
1.  **Initial State:** User sees a text area to input flashcards.
2.  **Input Cards:** User types or pastes flashcards in "front - back" format.
3.  **Load Cards:** User clicks "Load Flashcards" or presses 'Enter'.
4.  **Learning Session:**
    -   The first flashcard is displayed (front side).
    -   User can flip the card, navigate through cards, or select an answer from the options.
    -   If an answer is selected, feedback is provided (color change, counter update).
    -   If auto-next is enabled and the answer is correct, the app moves to the next card.
5.  **Session End/Reset:** User can reset statistics or start a new session at any time.`,X4=()=>O.jsx("div",{className:"min-h-screen flex flex-col items-center bg-gray-100 p-4",children:O.jsxs("div",{className:"w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8",children:[O.jsx("div",{className:"flex justify-start mb-6",children:O.jsx(Nf,{to:"/",children:O.jsx(qe,{variant:"outline",children:"Back to Home"})})}),O.jsx("div",{className:"prose prose-lg max-w-none text-gray-800",children:O.jsx(LN,{remarkPlugins:[Q4],children:Y4})}),O.jsx("div",{className:"flex justify-start mt-8",children:O.jsx(Nf,{to:"/",children:O.jsx(qe,{variant:"outline",children:"Back to Home"})})})]})}),J4=new aE,Z4=()=>O.jsx(oE,{client:J4,children:O.jsxs(DT,{children:[O.jsx(RC,{}),O.jsx(c_,{}),O.jsx(sA,{children:O.jsxs(ZE,{children:[O.jsx(iu,{path:"/",element:O.jsx(jD,{})}),O.jsx(iu,{path:"/specs",element:O.jsx(X4,{})})," ",O.jsx(iu,{path:"*",element:O.jsx(SD,{})})]})})]})});Gj.createRoot(document.getElementById("root")).render(O.jsx(Z4,{}));
