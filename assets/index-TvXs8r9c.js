var my=e=>{throw TypeError(e)};var Pd=(e,n,t)=>n.has(e)||my("Cannot "+t);var Z=(e,n,t)=>(Pd(e,n,"read from private field"),t?t.call(e):n.get(e)),Ne=(e,n,t)=>n.has(e)?my("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t),Te=(e,n,t,i)=>(Pd(e,n,"write to private field"),i?i.call(e,t):n.set(e,t),t),Pn=(e,n,t)=>(Pd(e,n,"access private method"),t);var Bl=(e,n,t,i)=>({set _(o){Te(e,n,o,t)},get _(){return Z(e,n,i)}});function VS(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ju(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rd={exports:{}},Uo={},Id={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function BS(){if(gy)return Ie;gy=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),a=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),u=Symbol.iterator;function p(I){return I===null||typeof I!="object"?null:(I=u&&I[u]||I["@@iterator"],typeof I=="function"?I:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,z={};function x(I,H,E){this.props=I,this.context=H,this.refs=z,this.updater=E||g}x.prototype.isReactComponent={},x.prototype.setState=function(I,H){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,H,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function w(){}w.prototype=x.prototype;function _(I,H,E){this.props=I,this.context=H,this.refs=z,this.updater=E||g}var C=_.prototype=new w;C.constructor=_,b(C,x.prototype),C.isPureReactComponent=!0;var R=Array.isArray,D=Object.prototype.hasOwnProperty,P={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function Y(I,H,E){var ce,ke={},ge=null,ye=null;if(H!=null)for(ce in H.ref!==void 0&&(ye=H.ref),H.key!==void 0&&(ge=""+H.key),H)D.call(H,ce)&&!$.hasOwnProperty(ce)&&(ke[ce]=H[ce]);var Ce=arguments.length-2;if(Ce===1)ke.children=E;else if(1<Ce){for(var Ae=Array(Ce),Be=0;Be<Ce;Be++)Ae[Be]=arguments[Be+2];ke.children=Ae}if(I&&I.defaultProps)for(ce in Ce=I.defaultProps,Ce)ke[ce]===void 0&&(ke[ce]=Ce[ce]);return{$$typeof:e,type:I,key:ge,ref:ye,props:ke,_owner:P.current}}function K(I,H){return{$$typeof:e,type:I.type,key:H,ref:I.ref,props:I.props,_owner:I._owner}}function L(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function J(I){var H={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(E){return H[E]})}var G=/\/+/g;function ee(I,H){return typeof I=="object"&&I!==null&&I.key!=null?J(""+I.key):H.toString(36)}function B(I,H,E,ce,ke){var ge=typeof I;(ge==="undefined"||ge==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(ge){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case e:case n:ye=!0}}if(ye)return ye=I,ke=ke(ye),I=ce===""?"."+ee(ye,0):ce,R(ke)?(E="",I!=null&&(E=I.replace(G,"$&/")+"/"),B(ke,H,E,"",function(Be){return Be})):ke!=null&&(L(ke)&&(ke=K(ke,E+(!ke.key||ye&&ye.key===ke.key?"":(""+ke.key).replace(G,"$&/")+"/")+I)),H.push(ke)),1;if(ye=0,ce=ce===""?".":ce+":",R(I))for(var Ce=0;Ce<I.length;Ce++){ge=I[Ce];var Ae=ce+ee(ge,Ce);ye+=B(ge,H,E,Ae,ke)}else if(Ae=p(I),typeof Ae=="function")for(I=Ae.call(I),Ce=0;!(ge=I.next()).done;)ge=ge.value,Ae=ce+ee(ge,Ce++),ye+=B(ge,H,E,Ae,ke);else if(ge==="object")throw H=String(I),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return ye}function re(I,H,E){if(I==null)return I;var ce=[],ke=0;return B(I,ce,"","",function(ge){return H.call(E,ge,ke++)}),ce}function ue(I){if(I._status===-1){var H=I._result;H=H(),H.then(function(E){(I._status===0||I._status===-1)&&(I._status=1,I._result=E)},function(E){(I._status===0||I._status===-1)&&(I._status=2,I._result=E)}),I._status===-1&&(I._status=0,I._result=H)}if(I._status===1)return I._result.default;throw I._result}var X={current:null},F={transition:null},q={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:F,ReactCurrentOwner:P};function j(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:re,forEach:function(I,H,E){re(I,function(){H.apply(this,arguments)},E)},count:function(I){var H=0;return re(I,function(){H++}),H},toArray:function(I){return re(I,function(H){return H})||[]},only:function(I){if(!L(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ie.Component=x,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=_,Ie.StrictMode=i,Ie.Suspense=f,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Ie.act=j,Ie.cloneElement=function(I,H,E){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ce=b({},I.props),ke=I.key,ge=I.ref,ye=I._owner;if(H!=null){if(H.ref!==void 0&&(ge=H.ref,ye=P.current),H.key!==void 0&&(ke=""+H.key),I.type&&I.type.defaultProps)var Ce=I.type.defaultProps;for(Ae in H)D.call(H,Ae)&&!$.hasOwnProperty(Ae)&&(ce[Ae]=H[Ae]===void 0&&Ce!==void 0?Ce[Ae]:H[Ae])}var Ae=arguments.length-2;if(Ae===1)ce.children=E;else if(1<Ae){Ce=Array(Ae);for(var Be=0;Be<Ae;Be++)Ce[Be]=arguments[Be+2];ce.children=Ce}return{$$typeof:e,type:I.type,key:ke,ref:ge,props:ce,_owner:ye}},Ie.createContext=function(I){return I={$$typeof:a,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Ie.createElement=Y,Ie.createFactory=function(I){var H=Y.bind(null,I);return H.type=I,H},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(I){return{$$typeof:d,render:I}},Ie.isValidElement=L,Ie.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:ue}},Ie.memo=function(I,H){return{$$typeof:h,type:I,compare:H===void 0?null:H}},Ie.startTransition=function(I){var H=F.transition;F.transition={};try{I()}finally{F.transition=H}},Ie.unstable_act=j,Ie.useCallback=function(I,H){return X.current.useCallback(I,H)},Ie.useContext=function(I){return X.current.useContext(I)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(I){return X.current.useDeferredValue(I)},Ie.useEffect=function(I,H){return X.current.useEffect(I,H)},Ie.useId=function(){return X.current.useId()},Ie.useImperativeHandle=function(I,H,E){return X.current.useImperativeHandle(I,H,E)},Ie.useInsertionEffect=function(I,H){return X.current.useInsertionEffect(I,H)},Ie.useLayoutEffect=function(I,H){return X.current.useLayoutEffect(I,H)},Ie.useMemo=function(I,H){return X.current.useMemo(I,H)},Ie.useReducer=function(I,H,E){return X.current.useReducer(I,H,E)},Ie.useRef=function(I){return X.current.useRef(I)},Ie.useState=function(I){return X.current.useState(I)},Ie.useSyncExternalStore=function(I,H,E){return X.current.useSyncExternalStore(I,H,E)},Ie.useTransition=function(){return X.current.useTransition()},Ie.version="18.3.1",Ie}var yy;function vh(){return yy||(yy=1,Id.exports=BS()),Id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function US(){if(ky)return Uo;ky=1;var e=vh(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(d,f,h){var y,u={},p=null,g=null;h!==void 0&&(p=""+h),f.key!==void 0&&(p=""+f.key),f.ref!==void 0&&(g=f.ref);for(y in f)i.call(f,y)&&!l.hasOwnProperty(y)&&(u[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)u[y]===void 0&&(u[y]=f[y]);return{$$typeof:n,type:d,key:p,ref:g,props:u,_owner:o.current}}return Uo.Fragment=t,Uo.jsx=a,Uo.jsxs=a,Uo}var vy;function $S(){return vy||(vy=1,Rd.exports=US()),Rd.exports}var N=$S(),Ul={},Md={exports:{}},et={},Dd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function HS(){return by||(by=1,function(e){function n(F,q){var j=F.length;F.push(q);e:for(;0<j;){var I=j-1>>>1,H=F[I];if(0<o(H,q))F[I]=q,F[j]=H,j=I;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var q=F[0],j=F.pop();if(j!==q){F[0]=j;e:for(var I=0,H=F.length,E=H>>>1;I<E;){var ce=2*(I+1)-1,ke=F[ce],ge=ce+1,ye=F[ge];if(0>o(ke,j))ge<H&&0>o(ye,ke)?(F[I]=ye,F[ge]=j,I=ge):(F[I]=ke,F[ce]=j,I=ce);else if(ge<H&&0>o(ye,j))F[I]=ye,F[ge]=j,I=ge;else break e}}return q}function o(F,q){var j=F.sortIndex-q.sortIndex;return j!==0?j:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,d=a.now();e.unstable_now=function(){return a.now()-d}}var f=[],h=[],y=1,u=null,p=3,g=!1,b=!1,z=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(F){for(var q=t(h);q!==null;){if(q.callback===null)i(h);else if(q.startTime<=F)i(h),q.sortIndex=q.expirationTime,n(f,q);else break;q=t(h)}}function R(F){if(z=!1,C(F),!b)if(t(f)!==null)b=!0,ue(D);else{var q=t(h);q!==null&&X(R,q.startTime-F)}}function D(F,q){b=!1,z&&(z=!1,w(Y),Y=-1),g=!0;var j=p;try{for(C(q),u=t(f);u!==null&&(!(u.expirationTime>q)||F&&!J());){var I=u.callback;if(typeof I=="function"){u.callback=null,p=u.priorityLevel;var H=I(u.expirationTime<=q);q=e.unstable_now(),typeof H=="function"?u.callback=H:u===t(f)&&i(f),C(q)}else i(f);u=t(f)}if(u!==null)var E=!0;else{var ce=t(h);ce!==null&&X(R,ce.startTime-q),E=!1}return E}finally{u=null,p=j,g=!1}}var P=!1,$=null,Y=-1,K=5,L=-1;function J(){return!(e.unstable_now()-L<K)}function G(){if($!==null){var F=e.unstable_now();L=F;var q=!0;try{q=$(!0,F)}finally{q?ee():(P=!1,$=null)}}else P=!1}var ee;if(typeof _=="function")ee=function(){_(G)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,re=B.port2;B.port1.onmessage=G,ee=function(){re.postMessage(null)}}else ee=function(){x(G,0)};function ue(F){$=F,P||(P=!0,ee())}function X(F,q){Y=x(function(){F(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,ue(D))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(f)},e.unstable_next=function(F){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var j=p;p=q;try{return F()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=p;p=F;try{return q()}finally{p=j}},e.unstable_scheduleCallback=function(F,q,j){var I=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,F){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=j+H,F={id:y++,callback:q,priorityLevel:F,startTime:j,expirationTime:H,sortIndex:-1},j>I?(F.sortIndex=j,n(h,F),t(f)===null&&F===t(h)&&(z?(w(Y),Y=-1):z=!0,X(R,j-I))):(F.sortIndex=H,n(f,F),b||g||(b=!0,ue(D))),F},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(F){var q=p;return function(){var j=p;p=q;try{return F.apply(this,arguments)}finally{p=j}}}}(Ld)),Ld}var zy;function WS(){return zy||(zy=1,Dd.exports=HS()),Dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function qS(){if(wy)return et;wy=1;var e=vh(),n=WS();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,c=1;c<arguments.length;c++)s+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){a(r,s),a(r+"Capture",s)}function a(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},u={};function p(r){return f.call(u,r)?!0:f.call(y,r)?!1:h.test(r)?u[r]=!0:(y[r]=!0,!1)}function g(r,s,c,m){if(c!==null&&c.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return m?!1:c!==null?!c.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,s,c,m){if(s===null||typeof s>"u"||g(r,s,c,m))return!0;if(m)return!1;if(c!==null)switch(c.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,c,m,k,v,S){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=m,this.attributeNamespace=k,this.mustUseProperty=c,this.propertyName=r,this.type=s,this.sanitizeURL=v,this.removeEmptyString=S}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){x[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];x[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){x[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){x[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){x[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){x[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){x[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){x[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){x[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var w=/[\-:]([a-z])/g;function _(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(w,_);x[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(w,_);x[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(w,_);x[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){x[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),x.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){x[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function C(r,s,c,m){var k=x.hasOwnProperty(s)?x[s]:null;(k!==null?k.type!==0:m||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,c,k,m)&&(c=null),m||k===null?p(s)&&(c===null?r.removeAttribute(s):r.setAttribute(s,""+c)):k.mustUseProperty?r[k.propertyName]=c===null?k.type===3?!1:"":c:(s=k.attributeName,m=k.attributeNamespace,c===null?r.removeAttribute(s):(k=k.type,c=k===3||k===4&&c===!0?"":""+c,m?r.setAttributeNS(m,s,c):r.setAttribute(s,c))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),P=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),J=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),F=Symbol.iterator;function q(r){return r===null||typeof r!="object"?null:(r=F&&r[F]||r["@@iterator"],typeof r=="function"?r:null)}var j=Object.assign,I;function H(r){if(I===void 0)try{throw Error()}catch(c){var s=c.stack.trim().match(/\n( *(at )?)/);I=s&&s[1]||""}return`
`+I+r}var E=!1;function ce(r,s){if(!r||E)return"";E=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(W){var m=W}Reflect.construct(r,[],s)}else{try{s.call()}catch(W){m=W}r.call(s.prototype)}else{try{throw Error()}catch(W){m=W}r()}}catch(W){if(W&&m&&typeof W.stack=="string"){for(var k=W.stack.split(`
`),v=m.stack.split(`
`),S=k.length-1,A=v.length-1;1<=S&&0<=A&&k[S]!==v[A];)A--;for(;1<=S&&0<=A;S--,A--)if(k[S]!==v[A]){if(S!==1||A!==1)do if(S--,A--,0>A||k[S]!==v[A]){var M=`
`+k[S].replace(" at new "," at ");return r.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",r.displayName)),M}while(1<=S&&0<=A);break}}}finally{E=!1,Error.prepareStackTrace=c}return(r=r?r.displayName||r.name:"")?H(r):""}function ke(r){switch(r.tag){case 5:return H(r.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return r=ce(r.type,!1),r;case 11:return r=ce(r.type.render,!1),r;case 1:return r=ce(r.type,!0),r;default:return""}}function ge(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case $:return"Fragment";case P:return"Portal";case K:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case B:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case J:return(r.displayName||"Context")+".Consumer";case L:return(r._context.displayName||"Context")+".Provider";case G:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case re:return s=r.displayName||null,s!==null?s:ge(r.type)||"Memo";case ue:s=r._payload,r=r._init;try{return ge(r(s))}catch{}}return null}function ye(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(s);case 8:return s===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ce(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ae(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Be(r){var s=Ae(r)?"checked":"value",c=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),m=""+r[s];if(!r.hasOwnProperty(s)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var k=c.get,v=c.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return k.call(this)},set:function(S){m=""+S,v.call(this,S)}}),Object.defineProperty(r,s,{enumerable:c.enumerable}),{getValue:function(){return m},setValue:function(S){m=""+S},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function yn(r){r._valueTracker||(r._valueTracker=Be(r))}function At(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var c=s.getValue(),m="";return r&&(m=Ae(r)?r.checked?"true":"false":r.value),r=m,r!==c?(s.setValue(r),!0):!1}function Ln(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Qt(r,s){var c=s.checked;return j({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??r._wrapperState.initialChecked})}function vr(r,s){var c=s.defaultValue==null?"":s.defaultValue,m=s.checked!=null?s.checked:s.defaultChecked;c=Ce(s.value!=null?s.value:c),r._wrapperState={initialChecked:m,initialValue:c,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Yt(r,s){s=s.checked,s!=null&&C(r,"checked",s,!1)}function Xt(r,s){Yt(r,s);var c=Ce(s.value),m=s.type;if(c!=null)m==="number"?(c===0&&r.value===""||r.value!=c)&&(r.value=""+c):r.value!==""+c&&(r.value=""+c);else if(m==="submit"||m==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ot(r,s.type,c):s.hasOwnProperty("defaultValue")&&ot(r,s.type,Ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Zt(r,s,c){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var m=s.type;if(!(m!=="submit"&&m!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,c||s===r.value||(r.value=s),r.defaultValue=s}c=r.name,c!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,c!==""&&(r.name=c)}function ot(r,s,c){(s!=="number"||Ln(r.ownerDocument)!==r)&&(c==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+c&&(r.defaultValue=""+c))}var Pt=Array.isArray;function qn(r,s,c,m){if(r=r.options,s){s={};for(var k=0;k<c.length;k++)s["$"+c[k]]=!0;for(c=0;c<r.length;c++)k=s.hasOwnProperty("$"+r[c].value),r[c].selected!==k&&(r[c].selected=k),k&&m&&(r[c].defaultSelected=!0)}else{for(c=""+Ce(c),s=null,k=0;k<r.length;k++){if(r[k].value===c){r[k].selected=!0,m&&(r[k].defaultSelected=!0);return}s!==null||r[k].disabled||(s=r[k])}s!==null&&(s.selected=!0)}}function Lr(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function mt(r,s){var c=s.value;if(c==null){if(c=s.children,s=s.defaultValue,c!=null){if(s!=null)throw Error(t(92));if(Pt(c)){if(1<c.length)throw Error(t(93));c=c[0]}s=c}s==null&&(s=""),c=s}r._wrapperState={initialValue:Ce(c)}}function es(r,s){var c=Ce(s.value),m=Ce(s.defaultValue);c!=null&&(c=""+c,c!==r.value&&(r.value=c),s.defaultValue==null&&r.defaultValue!==c&&(r.defaultValue=c)),m!=null&&(r.defaultValue=""+m)}function ns(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function Q(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oe(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?Q(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var we,Pe=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,c,m,k){MSApp.execUnsafeLocalFunction(function(){return r(s,c,m,k)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=we.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Re(r,s){if(s){var c=r.firstChild;if(c&&c===r.lastChild&&c.nodeType===3){c.nodeValue=s;return}}r.textContent=s}var pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gt=["Webkit","ms","Moz","O"];Object.keys(pn).forEach(function(r){gt.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),pn[s]=pn[r]})});function Cn(r,s,c){return s==null||typeof s=="boolean"||s===""?"":c||typeof s!="number"||s===0||pn.hasOwnProperty(r)&&pn[r]?(""+s).trim():s+"px"}function On(r,s){r=r.style;for(var c in s)if(s.hasOwnProperty(c)){var m=c.indexOf("--")===0,k=Cn(c,s[c],m);c==="float"&&(c="cssFloat"),m?r.setProperty(c,k):r[c]=k}}var Jt=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(r,s){if(s){if(Jt[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function yt(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nn=null;function ts(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var rs=null,Or=null,er=null;function Rt(r){if(r=Co(r)){if(typeof rs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=tl(s),rs(r.stateNode,r.type,s))}}function Ia(r){Or?er?er.push(r):er=[r]:Or=r}function _e(){if(Or){var r=Or,s=er;if(er=Or=null,Rt(r),s)for(r=0;r<s.length;r++)Rt(s[r])}}function Fe(r,s){return r(s)}function Ue(){}var Fn=!1;function Kn(r,s,c){if(Fn)return r(s,c);Fn=!0;try{return Fe(r,s,c)}finally{Fn=!1,(Or!==null||er!==null)&&(Ue(),_e())}}function Gn(r,s){var c=r.stateNode;if(c===null)return null;var m=tl(c);if(m===null)return null;c=m[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(r=r.type,m=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!m;break e;default:r=!1}if(r)return null;if(c&&typeof c!="function")throw Error(t(231,s,typeof c));return c}var It=!1;if(d)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){It=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{It=!1}function nr(r,s,c,m,k,v,S,A,M){var W=Array.prototype.slice.call(arguments,3);try{s.apply(c,W)}catch(te){this.onError(te)}}var oo=!1,Ma=null,Da=!1,Yu=null,Kx={onError:function(r){oo=!0,Ma=r}};function Gx(r,s,c,m,k,v,S,A,M){oo=!1,Ma=null,nr.apply(Kx,arguments)}function Qx(r,s,c,m,k,v,S,A,M){if(Gx.apply(this,arguments),oo){if(oo){var W=Ma;oo=!1,Ma=null}else throw Error(t(198));Da||(Da=!0,Yu=W)}}function wi(r){var s=r,c=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(c=s.return),r=s.return;while(r)}return s.tag===3?c:null}function Np(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Fp(r){if(wi(r)!==r)throw Error(t(188))}function Yx(r){var s=r.alternate;if(!s){if(s=wi(r),s===null)throw Error(t(188));return s!==r?null:r}for(var c=r,m=s;;){var k=c.return;if(k===null)break;var v=k.alternate;if(v===null){if(m=k.return,m!==null){c=m;continue}break}if(k.child===v.child){for(v=k.child;v;){if(v===c)return Fp(k),r;if(v===m)return Fp(k),s;v=v.sibling}throw Error(t(188))}if(c.return!==m.return)c=k,m=v;else{for(var S=!1,A=k.child;A;){if(A===c){S=!0,c=k,m=v;break}if(A===m){S=!0,m=k,c=v;break}A=A.sibling}if(!S){for(A=v.child;A;){if(A===c){S=!0,c=v,m=k;break}if(A===m){S=!0,m=v,c=k;break}A=A.sibling}if(!S)throw Error(t(189))}}if(c.alternate!==m)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?r:s}function Vp(r){return r=Yx(r),r!==null?Bp(r):null}function Bp(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Bp(r);if(s!==null)return s;r=r.sibling}return null}var Up=n.unstable_scheduleCallback,$p=n.unstable_cancelCallback,Xx=n.unstable_shouldYield,Zx=n.unstable_requestPaint,sn=n.unstable_now,Jx=n.unstable_getCurrentPriorityLevel,Xu=n.unstable_ImmediatePriority,Hp=n.unstable_UserBlockingPriority,La=n.unstable_NormalPriority,e1=n.unstable_LowPriority,Wp=n.unstable_IdlePriority,Oa=null,tr=null;function n1(r){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Oa,r,void 0,(r.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:i1,t1=Math.log,r1=Math.LN2;function i1(r){return r>>>=0,r===0?32:31-(t1(r)/r1|0)|0}var Na=64,Fa=4194304;function ao(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Va(r,s){var c=r.pendingLanes;if(c===0)return 0;var m=0,k=r.suspendedLanes,v=r.pingedLanes,S=c&268435455;if(S!==0){var A=S&~k;A!==0?m=ao(A):(v&=S,v!==0&&(m=ao(v)))}else S=c&~k,S!==0?m=ao(S):v!==0&&(m=ao(v));if(m===0)return 0;if(s!==0&&s!==m&&(s&k)===0&&(k=m&-m,v=s&-s,k>=v||k===16&&(v&4194240)!==0))return s;if((m&4)!==0&&(m|=c&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=m;0<s;)c=31-Mt(s),k=1<<c,m|=r[c],s&=~k;return m}function s1(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o1(r,s){for(var c=r.suspendedLanes,m=r.pingedLanes,k=r.expirationTimes,v=r.pendingLanes;0<v;){var S=31-Mt(v),A=1<<S,M=k[S];M===-1?((A&c)===0||(A&m)!==0)&&(k[S]=s1(A,s)):M<=s&&(r.expiredLanes|=A),v&=~A}}function Zu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function qp(){var r=Na;return Na<<=1,(Na&4194240)===0&&(Na=64),r}function Ju(r){for(var s=[],c=0;31>c;c++)s.push(r);return s}function lo(r,s,c){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Mt(s),r[s]=c}function a1(r,s){var c=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var m=r.eventTimes;for(r=r.expirationTimes;0<c;){var k=31-Mt(c),v=1<<k;s[k]=0,m[k]=-1,r[k]=-1,c&=~v}}function ec(r,s){var c=r.entangledLanes|=s;for(r=r.entanglements;c;){var m=31-Mt(c),k=1<<m;k&s|r[m]&s&&(r[m]|=s),c&=~k}}var Ve=0;function Kp(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Gp,nc,Qp,Yp,Xp,tc=!1,Ba=[],Nr=null,Fr=null,Vr=null,uo=new Map,co=new Map,Br=[],l1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zp(r,s){switch(r){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":uo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(s.pointerId)}}function fo(r,s,c,m,k,v){return r===null||r.nativeEvent!==v?(r={blockedOn:s,domEventName:c,eventSystemFlags:m,nativeEvent:v,targetContainers:[k]},s!==null&&(s=Co(s),s!==null&&nc(s)),r):(r.eventSystemFlags|=m,s=r.targetContainers,k!==null&&s.indexOf(k)===-1&&s.push(k),r)}function u1(r,s,c,m,k){switch(s){case"focusin":return Nr=fo(Nr,r,s,c,m,k),!0;case"dragenter":return Fr=fo(Fr,r,s,c,m,k),!0;case"mouseover":return Vr=fo(Vr,r,s,c,m,k),!0;case"pointerover":var v=k.pointerId;return uo.set(v,fo(uo.get(v)||null,r,s,c,m,k)),!0;case"gotpointercapture":return v=k.pointerId,co.set(v,fo(co.get(v)||null,r,s,c,m,k)),!0}return!1}function Jp(r){var s=xi(r.target);if(s!==null){var c=wi(s);if(c!==null){if(s=c.tag,s===13){if(s=Np(c),s!==null){r.blockedOn=s,Xp(r.priority,function(){Qp(c)});return}}else if(s===3&&c.stateNode.current.memoizedState.isDehydrated){r.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ua(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var c=ic(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(c===null){c=r.nativeEvent;var m=new c.constructor(c.type,c);Nn=m,c.target.dispatchEvent(m),Nn=null}else return s=Co(c),s!==null&&nc(s),r.blockedOn=c,!1;s.shift()}return!0}function em(r,s,c){Ua(r)&&c.delete(s)}function c1(){tc=!1,Nr!==null&&Ua(Nr)&&(Nr=null),Fr!==null&&Ua(Fr)&&(Fr=null),Vr!==null&&Ua(Vr)&&(Vr=null),uo.forEach(em),co.forEach(em)}function ho(r,s){r.blockedOn===s&&(r.blockedOn=null,tc||(tc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,c1)))}function po(r){function s(k){return ho(k,r)}if(0<Ba.length){ho(Ba[0],r);for(var c=1;c<Ba.length;c++){var m=Ba[c];m.blockedOn===r&&(m.blockedOn=null)}}for(Nr!==null&&ho(Nr,r),Fr!==null&&ho(Fr,r),Vr!==null&&ho(Vr,r),uo.forEach(s),co.forEach(s),c=0;c<Br.length;c++)m=Br[c],m.blockedOn===r&&(m.blockedOn=null);for(;0<Br.length&&(c=Br[0],c.blockedOn===null);)Jp(c),c.blockedOn===null&&Br.shift()}var is=R.ReactCurrentBatchConfig,$a=!0;function d1(r,s,c,m){var k=Ve,v=is.transition;is.transition=null;try{Ve=1,rc(r,s,c,m)}finally{Ve=k,is.transition=v}}function f1(r,s,c,m){var k=Ve,v=is.transition;is.transition=null;try{Ve=4,rc(r,s,c,m)}finally{Ve=k,is.transition=v}}function rc(r,s,c,m){if($a){var k=ic(r,s,c,m);if(k===null)zc(r,s,m,Ha,c),Zp(r,m);else if(u1(k,r,s,c,m))m.stopPropagation();else if(Zp(r,m),s&4&&-1<l1.indexOf(r)){for(;k!==null;){var v=Co(k);if(v!==null&&Gp(v),v=ic(r,s,c,m),v===null&&zc(r,s,m,Ha,c),v===k)break;k=v}k!==null&&m.stopPropagation()}else zc(r,s,m,null,c)}}var Ha=null;function ic(r,s,c,m){if(Ha=null,r=ts(m),r=xi(r),r!==null)if(s=wi(r),s===null)r=null;else if(c=s.tag,c===13){if(r=Np(s),r!==null)return r;r=null}else if(c===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Ha=r,null}function nm(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case Xu:return 1;case Hp:return 4;case La:case e1:return 16;case Wp:return 536870912;default:return 16}default:return 16}}var Ur=null,sc=null,Wa=null;function tm(){if(Wa)return Wa;var r,s=sc,c=s.length,m,k="value"in Ur?Ur.value:Ur.textContent,v=k.length;for(r=0;r<c&&s[r]===k[r];r++);var S=c-r;for(m=1;m<=S&&s[c-m]===k[v-m];m++);return Wa=k.slice(r,1<m?1-m:void 0)}function qa(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Ka(){return!0}function rm(){return!1}function at(r){function s(c,m,k,v,S){this._reactName=c,this._targetInst=k,this.type=m,this.nativeEvent=v,this.target=S,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(c=r[A],this[A]=c?c(v):v[A]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ka:rm,this.isPropagationStopped=rm,this}return j(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),s}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=at(ss),mo=j({},ss,{view:0,detail:0}),h1=at(mo),ac,lc,go,Ga=j({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==go&&(go&&r.type==="mousemove"?(ac=r.screenX-go.screenX,lc=r.screenY-go.screenY):lc=ac=0,go=r),ac)},movementY:function(r){return"movementY"in r?r.movementY:lc}}),im=at(Ga),p1=j({},Ga,{dataTransfer:0}),m1=at(p1),g1=j({},mo,{relatedTarget:0}),uc=at(g1),y1=j({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=at(y1),v1=j({},ss,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),b1=at(v1),z1=j({},ss,{data:0}),sm=at(z1),w1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=S1[r])?!!s[r]:!1}function cc(){return _1}var C1=j({},mo,{key:function(r){if(r.key){var s=w1[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=qa(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?x1[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(r){return r.type==="keypress"?qa(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?qa(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),T1=at(C1),j1=j({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=at(j1),E1=j({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),A1=at(E1),P1=j({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=at(P1),I1=j({},Ga,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),M1=at(I1),D1=[9,13,27,32],dc=d&&"CompositionEvent"in window,yo=null;d&&"documentMode"in document&&(yo=document.documentMode);var L1=d&&"TextEvent"in window&&!yo,am=d&&(!dc||yo&&8<yo&&11>=yo),lm=" ",um=!1;function cm(r,s){switch(r){case"keyup":return D1.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var os=!1;function O1(r,s){switch(r){case"compositionend":return dm(s);case"keypress":return s.which!==32?null:(um=!0,lm);case"textInput":return r=s.data,r===lm&&um?null:r;default:return null}}function N1(r,s){if(os)return r==="compositionend"||!dc&&cm(r,s)?(r=tm(),Wa=sc=Ur=null,os=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return am&&s.locale!=="ko"?null:s.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!F1[r.type]:s==="textarea"}function hm(r,s,c,m){Ia(m),s=Ja(s,"onChange"),0<s.length&&(c=new oc("onChange","change",null,c,m),r.push({event:c,listeners:s}))}var ko=null,vo=null;function V1(r){Pm(r,0)}function Qa(r){var s=ds(r);if(At(s))return r}function B1(r,s){if(r==="change")return s}var pm=!1;if(d){var fc;if(d){var hc="oninput"in document;if(!hc){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),hc=typeof mm.oninput=="function"}fc=hc}else fc=!1;pm=fc&&(!document.documentMode||9<document.documentMode)}function gm(){ko&&(ko.detachEvent("onpropertychange",ym),vo=ko=null)}function ym(r){if(r.propertyName==="value"&&Qa(vo)){var s=[];hm(s,vo,r,ts(r)),Kn(V1,s)}}function U1(r,s,c){r==="focusin"?(gm(),ko=s,vo=c,ko.attachEvent("onpropertychange",ym)):r==="focusout"&&gm()}function $1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Qa(vo)}function H1(r,s){if(r==="click")return Qa(s)}function W1(r,s){if(r==="input"||r==="change")return Qa(s)}function q1(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Dt=typeof Object.is=="function"?Object.is:q1;function bo(r,s){if(Dt(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var c=Object.keys(r),m=Object.keys(s);if(c.length!==m.length)return!1;for(m=0;m<c.length;m++){var k=c[m];if(!f.call(s,k)||!Dt(r[k],s[k]))return!1}return!0}function km(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function vm(r,s){var c=km(r);r=0;for(var m;c;){if(c.nodeType===3){if(m=r+c.textContent.length,r<=s&&m>=s)return{node:c,offset:s-r};r=m}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=km(c)}}function bm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?bm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function zm(){for(var r=window,s=Ln();s instanceof r.HTMLIFrameElement;){try{var c=typeof s.contentWindow.location.href=="string"}catch{c=!1}if(c)r=s.contentWindow;else break;s=Ln(r.document)}return s}function pc(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function K1(r){var s=zm(),c=r.focusedElem,m=r.selectionRange;if(s!==c&&c&&c.ownerDocument&&bm(c.ownerDocument.documentElement,c)){if(m!==null&&pc(c)){if(s=m.start,r=m.end,r===void 0&&(r=s),"selectionStart"in c)c.selectionStart=s,c.selectionEnd=Math.min(r,c.value.length);else if(r=(s=c.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var k=c.textContent.length,v=Math.min(m.start,k);m=m.end===void 0?v:Math.min(m.end,k),!r.extend&&v>m&&(k=m,m=v,v=k),k=vm(c,v);var S=vm(c,m);k&&S&&(r.rangeCount!==1||r.anchorNode!==k.node||r.anchorOffset!==k.offset||r.focusNode!==S.node||r.focusOffset!==S.offset)&&(s=s.createRange(),s.setStart(k.node,k.offset),r.removeAllRanges(),v>m?(r.addRange(s),r.extend(S.node,S.offset)):(s.setEnd(S.node,S.offset),r.addRange(s)))}}for(s=[],r=c;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<s.length;c++)r=s[c],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var G1=d&&"documentMode"in document&&11>=document.documentMode,as=null,mc=null,zo=null,gc=!1;function wm(r,s,c){var m=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;gc||as==null||as!==Ln(m)||(m=as,"selectionStart"in m&&pc(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),zo&&bo(zo,m)||(zo=m,m=Ja(mc,"onSelect"),0<m.length&&(s=new oc("onSelect","select",null,s,c),r.push({event:s,listeners:m}),s.target=as)))}function Ya(r,s){var c={};return c[r.toLowerCase()]=s.toLowerCase(),c["Webkit"+r]="webkit"+s,c["Moz"+r]="moz"+s,c}var ls={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},yc={},xm={};d&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Xa(r){if(yc[r])return yc[r];if(!ls[r])return r;var s=ls[r],c;for(c in s)if(s.hasOwnProperty(c)&&c in xm)return yc[r]=s[c];return r}var Sm=Xa("animationend"),_m=Xa("animationiteration"),Cm=Xa("animationstart"),Tm=Xa("transitionend"),jm=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(r,s){jm.set(r,s),l(s,[r])}for(var kc=0;kc<Em.length;kc++){var vc=Em[kc],Q1=vc.toLowerCase(),Y1=vc[0].toUpperCase()+vc.slice(1);$r(Q1,"on"+Y1)}$r(Sm,"onAnimationEnd"),$r(_m,"onAnimationIteration"),$r(Cm,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(Tm,"onTransitionEnd"),a("onMouseEnter",["mouseout","mouseover"]),a("onMouseLeave",["mouseout","mouseover"]),a("onPointerEnter",["pointerout","pointerover"]),a("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Am(r,s,c){var m=r.type||"unknown-event";r.currentTarget=c,Qx(m,s,void 0,r),r.currentTarget=null}function Pm(r,s){s=(s&4)!==0;for(var c=0;c<r.length;c++){var m=r[c],k=m.event;m=m.listeners;e:{var v=void 0;if(s)for(var S=m.length-1;0<=S;S--){var A=m[S],M=A.instance,W=A.currentTarget;if(A=A.listener,M!==v&&k.isPropagationStopped())break e;Am(k,A,W),v=M}else for(S=0;S<m.length;S++){if(A=m[S],M=A.instance,W=A.currentTarget,A=A.listener,M!==v&&k.isPropagationStopped())break e;Am(k,A,W),v=M}}}if(Da)throw r=Yu,Da=!1,Yu=null,r}function qe(r,s){var c=s[Tc];c===void 0&&(c=s[Tc]=new Set);var m=r+"__bubble";c.has(m)||(Rm(s,r,2,!1),c.add(m))}function bc(r,s,c){var m=0;s&&(m|=4),Rm(c,r,m,s)}var Za="_reactListening"+Math.random().toString(36).slice(2);function xo(r){if(!r[Za]){r[Za]=!0,i.forEach(function(c){c!=="selectionchange"&&(X1.has(c)||bc(c,!1,r),bc(c,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Za]||(s[Za]=!0,bc("selectionchange",!1,s))}}function Rm(r,s,c,m){switch(nm(s)){case 1:var k=d1;break;case 4:k=f1;break;default:k=rc}c=k.bind(null,s,c,r),k=void 0,!It||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(k=!0),m?k!==void 0?r.addEventListener(s,c,{capture:!0,passive:k}):r.addEventListener(s,c,!0):k!==void 0?r.addEventListener(s,c,{passive:k}):r.addEventListener(s,c,!1)}function zc(r,s,c,m,k){var v=m;if((s&1)===0&&(s&2)===0&&m!==null)e:for(;;){if(m===null)return;var S=m.tag;if(S===3||S===4){var A=m.stateNode.containerInfo;if(A===k||A.nodeType===8&&A.parentNode===k)break;if(S===4)for(S=m.return;S!==null;){var M=S.tag;if((M===3||M===4)&&(M=S.stateNode.containerInfo,M===k||M.nodeType===8&&M.parentNode===k))return;S=S.return}for(;A!==null;){if(S=xi(A),S===null)return;if(M=S.tag,M===5||M===6){m=v=S;continue e}A=A.parentNode}}m=m.return}Kn(function(){var W=v,te=ts(c),ie=[];e:{var ne=jm.get(r);if(ne!==void 0){var de=oc,he=r;switch(r){case"keypress":if(qa(c)===0)break e;case"keydown":case"keyup":de=T1;break;case"focusin":he="focus",de=uc;break;case"focusout":he="blur",de=uc;break;case"beforeblur":case"afterblur":de=uc;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=m1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=A1;break;case Sm:case _m:case Cm:de=k1;break;case Tm:de=R1;break;case"scroll":de=h1;break;case"wheel":de=M1;break;case"copy":case"cut":case"paste":de=b1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=om}var pe=(s&4)!==0,on=!pe&&r==="scroll",V=pe?ne!==null?ne+"Capture":null:ne;pe=[];for(var O=W,U;O!==null;){U=O;var ae=U.stateNode;if(U.tag===5&&ae!==null&&(U=ae,V!==null&&(ae=Gn(O,V),ae!=null&&pe.push(So(O,ae,U)))),on)break;O=O.return}0<pe.length&&(ne=new de(ne,he,null,c,te),ie.push({event:ne,listeners:pe}))}}if((s&7)===0){e:{if(ne=r==="mouseover"||r==="pointerover",de=r==="mouseout"||r==="pointerout",ne&&c!==Nn&&(he=c.relatedTarget||c.fromElement)&&(xi(he)||he[br]))break e;if((de||ne)&&(ne=te.window===te?te:(ne=te.ownerDocument)?ne.defaultView||ne.parentWindow:window,de?(he=c.relatedTarget||c.toElement,de=W,he=he?xi(he):null,he!==null&&(on=wi(he),he!==on||he.tag!==5&&he.tag!==6)&&(he=null)):(de=null,he=W),de!==he)){if(pe=im,ae="onMouseLeave",V="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(pe=om,ae="onPointerLeave",V="onPointerEnter",O="pointer"),on=de==null?ne:ds(de),U=he==null?ne:ds(he),ne=new pe(ae,O+"leave",de,c,te),ne.target=on,ne.relatedTarget=U,ae=null,xi(te)===W&&(pe=new pe(V,O+"enter",he,c,te),pe.target=U,pe.relatedTarget=on,ae=pe),on=ae,de&&he)n:{for(pe=de,V=he,O=0,U=pe;U;U=us(U))O++;for(U=0,ae=V;ae;ae=us(ae))U++;for(;0<O-U;)pe=us(pe),O--;for(;0<U-O;)V=us(V),U--;for(;O--;){if(pe===V||V!==null&&pe===V.alternate)break n;pe=us(pe),V=us(V)}pe=null}else pe=null;de!==null&&Im(ie,ne,de,pe,!1),he!==null&&on!==null&&Im(ie,on,he,pe,!0)}}e:{if(ne=W?ds(W):window,de=ne.nodeName&&ne.nodeName.toLowerCase(),de==="select"||de==="input"&&ne.type==="file")var me=B1;else if(fm(ne))if(pm)me=W1;else{me=$1;var ve=U1}else(de=ne.nodeName)&&de.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(me=H1);if(me&&(me=me(r,W))){hm(ie,me,c,te);break e}ve&&ve(r,ne,W),r==="focusout"&&(ve=ne._wrapperState)&&ve.controlled&&ne.type==="number"&&ot(ne,"number",ne.value)}switch(ve=W?ds(W):window,r){case"focusin":(fm(ve)||ve.contentEditable==="true")&&(as=ve,mc=W,zo=null);break;case"focusout":zo=mc=as=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,wm(ie,c,te);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":wm(ie,c,te)}var be;if(dc)e:{switch(r){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else os?cm(r,c)&&(Se="onCompositionEnd"):r==="keydown"&&c.keyCode===229&&(Se="onCompositionStart");Se&&(am&&c.locale!=="ko"&&(os||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&os&&(be=tm()):(Ur=te,sc="value"in Ur?Ur.value:Ur.textContent,os=!0)),ve=Ja(W,Se),0<ve.length&&(Se=new sm(Se,r,null,c,te),ie.push({event:Se,listeners:ve}),be?Se.data=be:(be=dm(c),be!==null&&(Se.data=be)))),(be=L1?O1(r,c):N1(r,c))&&(W=Ja(W,"onBeforeInput"),0<W.length&&(te=new sm("onBeforeInput","beforeinput",null,c,te),ie.push({event:te,listeners:W}),te.data=be))}Pm(ie,s)})}function So(r,s,c){return{instance:r,listener:s,currentTarget:c}}function Ja(r,s){for(var c=s+"Capture",m=[];r!==null;){var k=r,v=k.stateNode;k.tag===5&&v!==null&&(k=v,v=Gn(r,c),v!=null&&m.unshift(So(r,v,k)),v=Gn(r,s),v!=null&&m.push(So(r,v,k))),r=r.return}return m}function us(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Im(r,s,c,m,k){for(var v=s._reactName,S=[];c!==null&&c!==m;){var A=c,M=A.alternate,W=A.stateNode;if(M!==null&&M===m)break;A.tag===5&&W!==null&&(A=W,k?(M=Gn(c,v),M!=null&&S.unshift(So(c,M,A))):k||(M=Gn(c,v),M!=null&&S.push(So(c,M,A)))),c=c.return}S.length!==0&&r.push({event:s,listeners:S})}var Z1=/\r\n?/g,J1=/\u0000|\uFFFD/g;function Mm(r){return(typeof r=="string"?r:""+r).replace(Z1,`
`).replace(J1,"")}function el(r,s,c){if(s=Mm(s),Mm(r)!==s&&c)throw Error(t(425))}function nl(){}var wc=null,xc=null;function Sc(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(r){return Dm.resolve(null).then(r).catch(tS)}:_c;function tS(r){setTimeout(function(){throw r})}function Cc(r,s){var c=s,m=0;do{var k=c.nextSibling;if(r.removeChild(c),k&&k.nodeType===8)if(c=k.data,c==="/$"){if(m===0){r.removeChild(k),po(s);return}m--}else c!=="$"&&c!=="$?"&&c!=="$!"||m++;c=k}while(c);po(s)}function Hr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Lm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var c=r.data;if(c==="$"||c==="$!"||c==="$?"){if(s===0)return r;s--}else c==="/$"&&s++}r=r.previousSibling}return null}var cs=Math.random().toString(36).slice(2),rr="__reactFiber$"+cs,_o="__reactProps$"+cs,br="__reactContainer$"+cs,Tc="__reactEvents$"+cs,rS="__reactListeners$"+cs,iS="__reactHandles$"+cs;function xi(r){var s=r[rr];if(s)return s;for(var c=r.parentNode;c;){if(s=c[br]||c[rr]){if(c=s.alternate,s.child!==null||c!==null&&c.child!==null)for(r=Lm(r);r!==null;){if(c=r[rr])return c;r=Lm(r)}return s}r=c,c=r.parentNode}return null}function Co(r){return r=r[rr]||r[br],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ds(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function tl(r){return r[_o]||null}var jc=[],fs=-1;function Wr(r){return{current:r}}function Ke(r){0>fs||(r.current=jc[fs],jc[fs]=null,fs--)}function He(r,s){fs++,jc[fs]=r.current,r.current=s}var qr={},Tn=Wr(qr),Qn=Wr(!1),Si=qr;function hs(r,s){var c=r.type.contextTypes;if(!c)return qr;var m=r.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===s)return m.__reactInternalMemoizedMaskedChildContext;var k={},v;for(v in c)k[v]=s[v];return m&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=k),k}function Yn(r){return r=r.childContextTypes,r!=null}function rl(){Ke(Qn),Ke(Tn)}function Om(r,s,c){if(Tn.current!==qr)throw Error(t(168));He(Tn,s),He(Qn,c)}function Nm(r,s,c){var m=r.stateNode;if(s=s.childContextTypes,typeof m.getChildContext!="function")return c;m=m.getChildContext();for(var k in m)if(!(k in s))throw Error(t(108,ye(r)||"Unknown",k));return j({},c,m)}function il(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||qr,Si=Tn.current,He(Tn,r),He(Qn,Qn.current),!0}function Fm(r,s,c){var m=r.stateNode;if(!m)throw Error(t(169));c?(r=Nm(r,s,Si),m.__reactInternalMemoizedMergedChildContext=r,Ke(Qn),Ke(Tn),He(Tn,r)):Ke(Qn),He(Qn,c)}var zr=null,sl=!1,Ec=!1;function Vm(r){zr===null?zr=[r]:zr.push(r)}function sS(r){sl=!0,Vm(r)}function Kr(){if(!Ec&&zr!==null){Ec=!0;var r=0,s=Ve;try{var c=zr;for(Ve=1;r<c.length;r++){var m=c[r];do m=m(!0);while(m!==null)}zr=null,sl=!1}catch(k){throw zr!==null&&(zr=zr.slice(r+1)),Up(Xu,Kr),k}finally{Ve=s,Ec=!1}}return null}var ps=[],ms=0,ol=null,al=0,kt=[],vt=0,_i=null,wr=1,xr="";function Ci(r,s){ps[ms++]=al,ps[ms++]=ol,ol=r,al=s}function Bm(r,s,c){kt[vt++]=wr,kt[vt++]=xr,kt[vt++]=_i,_i=r;var m=wr;r=xr;var k=32-Mt(m)-1;m&=~(1<<k),c+=1;var v=32-Mt(s)+k;if(30<v){var S=k-k%5;v=(m&(1<<S)-1).toString(32),m>>=S,k-=S,wr=1<<32-Mt(s)+k|c<<k|m,xr=v+r}else wr=1<<v|c<<k|m,xr=r}function Ac(r){r.return!==null&&(Ci(r,1),Bm(r,1,0))}function Pc(r){for(;r===ol;)ol=ps[--ms],ps[ms]=null,al=ps[--ms],ps[ms]=null;for(;r===_i;)_i=kt[--vt],kt[vt]=null,xr=kt[--vt],kt[vt]=null,wr=kt[--vt],kt[vt]=null}var lt=null,ut=null,Ye=!1,Lt=null;function Um(r,s){var c=xt(5,null,null,0);c.elementType="DELETED",c.stateNode=s,c.return=r,s=r.deletions,s===null?(r.deletions=[c],r.flags|=16):s.push(c)}function $m(r,s){switch(r.tag){case 5:var c=r.type;return s=s.nodeType!==1||c.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,lt=r,ut=Hr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,lt=r,ut=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(c=_i!==null?{id:wr,overflow:xr}:null,r.memoizedState={dehydrated:s,treeContext:c,retryLane:1073741824},c=xt(18,null,null,0),c.stateNode=s,c.return=r,r.child=c,lt=r,ut=null,!0):!1;default:return!1}}function Rc(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ic(r){if(Ye){var s=ut;if(s){var c=s;if(!$m(r,s)){if(Rc(r))throw Error(t(418));s=Hr(c.nextSibling);var m=lt;s&&$m(r,s)?Um(m,c):(r.flags=r.flags&-4097|2,Ye=!1,lt=r)}}else{if(Rc(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,lt=r}}}function Hm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;lt=r}function ll(r){if(r!==lt)return!1;if(!Ye)return Hm(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Sc(r.type,r.memoizedProps)),s&&(s=ut)){if(Rc(r))throw Wm(),Error(t(418));for(;s;)Um(r,s),s=Hr(s.nextSibling)}if(Hm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var c=r.data;if(c==="/$"){if(s===0){ut=Hr(r.nextSibling);break e}s--}else c!=="$"&&c!=="$!"&&c!=="$?"||s++}r=r.nextSibling}ut=null}}else ut=lt?Hr(r.stateNode.nextSibling):null;return!0}function Wm(){for(var r=ut;r;)r=Hr(r.nextSibling)}function gs(){ut=lt=null,Ye=!1}function Mc(r){Lt===null?Lt=[r]:Lt.push(r)}var oS=R.ReactCurrentBatchConfig;function To(r,s,c){if(r=c.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var m=c.stateNode}if(!m)throw Error(t(147,r));var k=m,v=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===v?s.ref:(s=function(S){var A=k.refs;S===null?delete A[v]:A[v]=S},s._stringRef=v,s)}if(typeof r!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,r))}return r}function ul(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function qm(r){var s=r._init;return s(r._payload)}function Km(r){function s(V,O){if(r){var U=V.deletions;U===null?(V.deletions=[O],V.flags|=16):U.push(O)}}function c(V,O){if(!r)return null;for(;O!==null;)s(V,O),O=O.sibling;return null}function m(V,O){for(V=new Map;O!==null;)O.key!==null?V.set(O.key,O):V.set(O.index,O),O=O.sibling;return V}function k(V,O){return V=ni(V,O),V.index=0,V.sibling=null,V}function v(V,O,U){return V.index=U,r?(U=V.alternate,U!==null?(U=U.index,U<O?(V.flags|=2,O):U):(V.flags|=2,O)):(V.flags|=1048576,O)}function S(V){return r&&V.alternate===null&&(V.flags|=2),V}function A(V,O,U,ae){return O===null||O.tag!==6?(O=_d(U,V.mode,ae),O.return=V,O):(O=k(O,U),O.return=V,O)}function M(V,O,U,ae){var me=U.type;return me===$?te(V,O,U.props.children,ae,U.key):O!==null&&(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ue&&qm(me)===O.type)?(ae=k(O,U.props),ae.ref=To(V,O,U),ae.return=V,ae):(ae=Il(U.type,U.key,U.props,null,V.mode,ae),ae.ref=To(V,O,U),ae.return=V,ae)}function W(V,O,U,ae){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Cd(U,V.mode,ae),O.return=V,O):(O=k(O,U.children||[]),O.return=V,O)}function te(V,O,U,ae,me){return O===null||O.tag!==7?(O=Mi(U,V.mode,ae,me),O.return=V,O):(O=k(O,U),O.return=V,O)}function ie(V,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return O=_d(""+O,V.mode,U),O.return=V,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case D:return U=Il(O.type,O.key,O.props,null,V.mode,U),U.ref=To(V,null,O),U.return=V,U;case P:return O=Cd(O,V.mode,U),O.return=V,O;case ue:var ae=O._init;return ie(V,ae(O._payload),U)}if(Pt(O)||q(O))return O=Mi(O,V.mode,U,null),O.return=V,O;ul(V,O)}return null}function ne(V,O,U,ae){var me=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return me!==null?null:A(V,O,""+U,ae);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case D:return U.key===me?M(V,O,U,ae):null;case P:return U.key===me?W(V,O,U,ae):null;case ue:return me=U._init,ne(V,O,me(U._payload),ae)}if(Pt(U)||q(U))return me!==null?null:te(V,O,U,ae,null);ul(V,U)}return null}function de(V,O,U,ae,me){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return V=V.get(U)||null,A(O,V,""+ae,me);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:return V=V.get(ae.key===null?U:ae.key)||null,M(O,V,ae,me);case P:return V=V.get(ae.key===null?U:ae.key)||null,W(O,V,ae,me);case ue:var ve=ae._init;return de(V,O,U,ve(ae._payload),me)}if(Pt(ae)||q(ae))return V=V.get(U)||null,te(O,V,ae,me,null);ul(O,ae)}return null}function he(V,O,U,ae){for(var me=null,ve=null,be=O,Se=O=0,bn=null;be!==null&&Se<U.length;Se++){be.index>Se?(bn=be,be=null):bn=be.sibling;var Oe=ne(V,be,U[Se],ae);if(Oe===null){be===null&&(be=bn);break}r&&be&&Oe.alternate===null&&s(V,be),O=v(Oe,O,Se),ve===null?me=Oe:ve.sibling=Oe,ve=Oe,be=bn}if(Se===U.length)return c(V,be),Ye&&Ci(V,Se),me;if(be===null){for(;Se<U.length;Se++)be=ie(V,U[Se],ae),be!==null&&(O=v(be,O,Se),ve===null?me=be:ve.sibling=be,ve=be);return Ye&&Ci(V,Se),me}for(be=m(V,be);Se<U.length;Se++)bn=de(be,V,Se,U[Se],ae),bn!==null&&(r&&bn.alternate!==null&&be.delete(bn.key===null?Se:bn.key),O=v(bn,O,Se),ve===null?me=bn:ve.sibling=bn,ve=bn);return r&&be.forEach(function(ti){return s(V,ti)}),Ye&&Ci(V,Se),me}function pe(V,O,U,ae){var me=q(U);if(typeof me!="function")throw Error(t(150));if(U=me.call(U),U==null)throw Error(t(151));for(var ve=me=null,be=O,Se=O=0,bn=null,Oe=U.next();be!==null&&!Oe.done;Se++,Oe=U.next()){be.index>Se?(bn=be,be=null):bn=be.sibling;var ti=ne(V,be,Oe.value,ae);if(ti===null){be===null&&(be=bn);break}r&&be&&ti.alternate===null&&s(V,be),O=v(ti,O,Se),ve===null?me=ti:ve.sibling=ti,ve=ti,be=bn}if(Oe.done)return c(V,be),Ye&&Ci(V,Se),me;if(be===null){for(;!Oe.done;Se++,Oe=U.next())Oe=ie(V,Oe.value,ae),Oe!==null&&(O=v(Oe,O,Se),ve===null?me=Oe:ve.sibling=Oe,ve=Oe);return Ye&&Ci(V,Se),me}for(be=m(V,be);!Oe.done;Se++,Oe=U.next())Oe=de(be,V,Se,Oe.value,ae),Oe!==null&&(r&&Oe.alternate!==null&&be.delete(Oe.key===null?Se:Oe.key),O=v(Oe,O,Se),ve===null?me=Oe:ve.sibling=Oe,ve=Oe);return r&&be.forEach(function(FS){return s(V,FS)}),Ye&&Ci(V,Se),me}function on(V,O,U,ae){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case D:e:{for(var me=U.key,ve=O;ve!==null;){if(ve.key===me){if(me=U.type,me===$){if(ve.tag===7){c(V,ve.sibling),O=k(ve,U.props.children),O.return=V,V=O;break e}}else if(ve.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ue&&qm(me)===ve.type){c(V,ve.sibling),O=k(ve,U.props),O.ref=To(V,ve,U),O.return=V,V=O;break e}c(V,ve);break}else s(V,ve);ve=ve.sibling}U.type===$?(O=Mi(U.props.children,V.mode,ae,U.key),O.return=V,V=O):(ae=Il(U.type,U.key,U.props,null,V.mode,ae),ae.ref=To(V,O,U),ae.return=V,V=ae)}return S(V);case P:e:{for(ve=U.key;O!==null;){if(O.key===ve)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){c(V,O.sibling),O=k(O,U.children||[]),O.return=V,V=O;break e}else{c(V,O);break}else s(V,O);O=O.sibling}O=Cd(U,V.mode,ae),O.return=V,V=O}return S(V);case ue:return ve=U._init,on(V,O,ve(U._payload),ae)}if(Pt(U))return he(V,O,U,ae);if(q(U))return pe(V,O,U,ae);ul(V,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,O!==null&&O.tag===6?(c(V,O.sibling),O=k(O,U),O.return=V,V=O):(c(V,O),O=_d(U,V.mode,ae),O.return=V,V=O),S(V)):c(V,O)}return on}var ys=Km(!0),Gm=Km(!1),cl=Wr(null),dl=null,ks=null,Dc=null;function Lc(){Dc=ks=dl=null}function Oc(r){var s=cl.current;Ke(cl),r._currentValue=s}function Nc(r,s,c){for(;r!==null;){var m=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,m!==null&&(m.childLanes|=s)):m!==null&&(m.childLanes&s)!==s&&(m.childLanes|=s),r===c)break;r=r.return}}function vs(r,s){dl=r,Dc=ks=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Xn=!0),r.firstContext=null)}function bt(r){var s=r._currentValue;if(Dc!==r)if(r={context:r,memoizedValue:s,next:null},ks===null){if(dl===null)throw Error(t(308));ks=r,dl.dependencies={lanes:0,firstContext:r}}else ks=ks.next=r;return s}var Ti=null;function Fc(r){Ti===null?Ti=[r]:Ti.push(r)}function Qm(r,s,c,m){var k=s.interleaved;return k===null?(c.next=c,Fc(s)):(c.next=k.next,k.next=c),s.interleaved=c,Sr(r,m)}function Sr(r,s){r.lanes|=s;var c=r.alternate;for(c!==null&&(c.lanes|=s),c=r,r=r.return;r!==null;)r.childLanes|=s,c=r.alternate,c!==null&&(c.childLanes|=s),c=r,r=r.return;return c.tag===3?c.stateNode:null}var Gr=!1;function Vc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ym(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function _r(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Qr(r,s,c){var m=r.updateQueue;if(m===null)return null;if(m=m.shared,(Le&2)!==0){var k=m.pending;return k===null?s.next=s:(s.next=k.next,k.next=s),m.pending=s,Sr(r,c)}return k=m.interleaved,k===null?(s.next=s,Fc(m)):(s.next=k.next,k.next=s),m.interleaved=s,Sr(r,c)}function fl(r,s,c){if(s=s.updateQueue,s!==null&&(s=s.shared,(c&4194240)!==0)){var m=s.lanes;m&=r.pendingLanes,c|=m,s.lanes=c,ec(r,c)}}function Xm(r,s){var c=r.updateQueue,m=r.alternate;if(m!==null&&(m=m.updateQueue,c===m)){var k=null,v=null;if(c=c.firstBaseUpdate,c!==null){do{var S={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};v===null?k=v=S:v=v.next=S,c=c.next}while(c!==null);v===null?k=v=s:v=v.next=s}else k=v=s;c={baseState:m.baseState,firstBaseUpdate:k,lastBaseUpdate:v,shared:m.shared,effects:m.effects},r.updateQueue=c;return}r=c.lastBaseUpdate,r===null?c.firstBaseUpdate=s:r.next=s,c.lastBaseUpdate=s}function hl(r,s,c,m){var k=r.updateQueue;Gr=!1;var v=k.firstBaseUpdate,S=k.lastBaseUpdate,A=k.shared.pending;if(A!==null){k.shared.pending=null;var M=A,W=M.next;M.next=null,S===null?v=W:S.next=W,S=M;var te=r.alternate;te!==null&&(te=te.updateQueue,A=te.lastBaseUpdate,A!==S&&(A===null?te.firstBaseUpdate=W:A.next=W,te.lastBaseUpdate=M))}if(v!==null){var ie=k.baseState;S=0,te=W=M=null,A=v;do{var ne=A.lane,de=A.eventTime;if((m&ne)===ne){te!==null&&(te=te.next={eventTime:de,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var he=r,pe=A;switch(ne=s,de=c,pe.tag){case 1:if(he=pe.payload,typeof he=="function"){ie=he.call(de,ie,ne);break e}ie=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=pe.payload,ne=typeof he=="function"?he.call(de,ie,ne):he,ne==null)break e;ie=j({},ie,ne);break e;case 2:Gr=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,ne=k.effects,ne===null?k.effects=[A]:ne.push(A))}else de={eventTime:de,lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},te===null?(W=te=de,M=ie):te=te.next=de,S|=ne;if(A=A.next,A===null){if(A=k.shared.pending,A===null)break;ne=A,A=ne.next,ne.next=null,k.lastBaseUpdate=ne,k.shared.pending=null}}while(!0);if(te===null&&(M=ie),k.baseState=M,k.firstBaseUpdate=W,k.lastBaseUpdate=te,s=k.shared.interleaved,s!==null){k=s;do S|=k.lane,k=k.next;while(k!==s)}else v===null&&(k.shared.lanes=0);Ai|=S,r.lanes=S,r.memoizedState=ie}}function Zm(r,s,c){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var m=r[s],k=m.callback;if(k!==null){if(m.callback=null,m=c,typeof k!="function")throw Error(t(191,k));k.call(m)}}}var jo={},ir=Wr(jo),Eo=Wr(jo),Ao=Wr(jo);function ji(r){if(r===jo)throw Error(t(174));return r}function Bc(r,s){switch(He(Ao,s),He(Eo,r),He(ir,jo),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:oe(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=oe(s,r)}Ke(ir),He(ir,s)}function bs(){Ke(ir),Ke(Eo),Ke(Ao)}function Jm(r){ji(Ao.current);var s=ji(ir.current),c=oe(s,r.type);s!==c&&(He(Eo,r),He(ir,c))}function Uc(r){Eo.current===r&&(Ke(ir),Ke(Eo))}var Ze=Wr(0);function pl(r){for(var s=r;s!==null;){if(s.tag===13){var c=s.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var $c=[];function Hc(){for(var r=0;r<$c.length;r++)$c[r]._workInProgressVersionPrimary=null;$c.length=0}var ml=R.ReactCurrentDispatcher,Wc=R.ReactCurrentBatchConfig,Ei=0,Je=null,mn=null,kn=null,gl=!1,Po=!1,Ro=0,aS=0;function jn(){throw Error(t(321))}function qc(r,s){if(s===null)return!1;for(var c=0;c<s.length&&c<r.length;c++)if(!Dt(r[c],s[c]))return!1;return!0}function Kc(r,s,c,m,k,v){if(Ei=v,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ml.current=r===null||r.memoizedState===null?dS:fS,r=c(m,k),Po){v=0;do{if(Po=!1,Ro=0,25<=v)throw Error(t(301));v+=1,kn=mn=null,s.updateQueue=null,ml.current=hS,r=c(m,k)}while(Po)}if(ml.current=vl,s=mn!==null&&mn.next!==null,Ei=0,kn=mn=Je=null,gl=!1,s)throw Error(t(300));return r}function Gc(){var r=Ro!==0;return Ro=0,r}function sr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?Je.memoizedState=kn=r:kn=kn.next=r,kn}function zt(){if(mn===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=mn.next;var s=kn===null?Je.memoizedState:kn.next;if(s!==null)kn=s,mn=r;else{if(r===null)throw Error(t(310));mn=r,r={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},kn===null?Je.memoizedState=kn=r:kn=kn.next=r}return kn}function Io(r,s){return typeof s=="function"?s(r):s}function Qc(r){var s=zt(),c=s.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var m=mn,k=m.baseQueue,v=c.pending;if(v!==null){if(k!==null){var S=k.next;k.next=v.next,v.next=S}m.baseQueue=k=v,c.pending=null}if(k!==null){v=k.next,m=m.baseState;var A=S=null,M=null,W=v;do{var te=W.lane;if((Ei&te)===te)M!==null&&(M=M.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),m=W.hasEagerState?W.eagerState:r(m,W.action);else{var ie={lane:te,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};M===null?(A=M=ie,S=m):M=M.next=ie,Je.lanes|=te,Ai|=te}W=W.next}while(W!==null&&W!==v);M===null?S=m:M.next=A,Dt(m,s.memoizedState)||(Xn=!0),s.memoizedState=m,s.baseState=S,s.baseQueue=M,c.lastRenderedState=m}if(r=c.interleaved,r!==null){k=r;do v=k.lane,Je.lanes|=v,Ai|=v,k=k.next;while(k!==r)}else k===null&&(c.lanes=0);return[s.memoizedState,c.dispatch]}function Yc(r){var s=zt(),c=s.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var m=c.dispatch,k=c.pending,v=s.memoizedState;if(k!==null){c.pending=null;var S=k=k.next;do v=r(v,S.action),S=S.next;while(S!==k);Dt(v,s.memoizedState)||(Xn=!0),s.memoizedState=v,s.baseQueue===null&&(s.baseState=v),c.lastRenderedState=v}return[v,m]}function eg(){}function ng(r,s){var c=Je,m=zt(),k=s(),v=!Dt(m.memoizedState,k);if(v&&(m.memoizedState=k,Xn=!0),m=m.queue,Xc(ig.bind(null,c,m,r),[r]),m.getSnapshot!==s||v||kn!==null&&kn.memoizedState.tag&1){if(c.flags|=2048,Mo(9,rg.bind(null,c,m,k,s),void 0,null),vn===null)throw Error(t(349));(Ei&30)!==0||tg(c,s,k)}return k}function tg(r,s,c){r.flags|=16384,r={getSnapshot:s,value:c},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[r]):(c=s.stores,c===null?s.stores=[r]:c.push(r))}function rg(r,s,c,m){s.value=c,s.getSnapshot=m,sg(s)&&og(r)}function ig(r,s,c){return c(function(){sg(s)&&og(r)})}function sg(r){var s=r.getSnapshot;r=r.value;try{var c=s();return!Dt(r,c)}catch{return!0}}function og(r){var s=Sr(r,1);s!==null&&Vt(s,r,1,-1)}function ag(r){var s=sr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:r},s.queue=r,r=r.dispatch=cS.bind(null,Je,r),[s.memoizedState,r]}function Mo(r,s,c,m){return r={tag:r,create:s,destroy:c,deps:m,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=r.next=r):(c=s.lastEffect,c===null?s.lastEffect=r.next=r:(m=c.next,c.next=r,r.next=m,s.lastEffect=r)),r}function lg(){return zt().memoizedState}function yl(r,s,c,m){var k=sr();Je.flags|=r,k.memoizedState=Mo(1|s,c,void 0,m===void 0?null:m)}function kl(r,s,c,m){var k=zt();m=m===void 0?null:m;var v=void 0;if(mn!==null){var S=mn.memoizedState;if(v=S.destroy,m!==null&&qc(m,S.deps)){k.memoizedState=Mo(s,c,v,m);return}}Je.flags|=r,k.memoizedState=Mo(1|s,c,v,m)}function ug(r,s){return yl(8390656,8,r,s)}function Xc(r,s){return kl(2048,8,r,s)}function cg(r,s){return kl(4,2,r,s)}function dg(r,s){return kl(4,4,r,s)}function fg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function hg(r,s,c){return c=c!=null?c.concat([r]):null,kl(4,4,fg.bind(null,s,r),c)}function Zc(){}function pg(r,s){var c=zt();s=s===void 0?null:s;var m=c.memoizedState;return m!==null&&s!==null&&qc(s,m[1])?m[0]:(c.memoizedState=[r,s],r)}function mg(r,s){var c=zt();s=s===void 0?null:s;var m=c.memoizedState;return m!==null&&s!==null&&qc(s,m[1])?m[0]:(r=r(),c.memoizedState=[r,s],r)}function gg(r,s,c){return(Ei&21)===0?(r.baseState&&(r.baseState=!1,Xn=!0),r.memoizedState=c):(Dt(c,s)||(c=qp(),Je.lanes|=c,Ai|=c,r.baseState=!0),s)}function lS(r,s){var c=Ve;Ve=c!==0&&4>c?c:4,r(!0);var m=Wc.transition;Wc.transition={};try{r(!1),s()}finally{Ve=c,Wc.transition=m}}function yg(){return zt().memoizedState}function uS(r,s,c){var m=Jr(r);if(c={lane:m,action:c,hasEagerState:!1,eagerState:null,next:null},kg(r))vg(s,c);else if(c=Qm(r,s,c,m),c!==null){var k=Bn();Vt(c,r,m,k),bg(c,s,m)}}function cS(r,s,c){var m=Jr(r),k={lane:m,action:c,hasEagerState:!1,eagerState:null,next:null};if(kg(r))vg(s,k);else{var v=r.alternate;if(r.lanes===0&&(v===null||v.lanes===0)&&(v=s.lastRenderedReducer,v!==null))try{var S=s.lastRenderedState,A=v(S,c);if(k.hasEagerState=!0,k.eagerState=A,Dt(A,S)){var M=s.interleaved;M===null?(k.next=k,Fc(s)):(k.next=M.next,M.next=k),s.interleaved=k;return}}catch{}finally{}c=Qm(r,s,k,m),c!==null&&(k=Bn(),Vt(c,r,m,k),bg(c,s,m))}}function kg(r){var s=r.alternate;return r===Je||s!==null&&s===Je}function vg(r,s){Po=gl=!0;var c=r.pending;c===null?s.next=s:(s.next=c.next,c.next=s),r.pending=s}function bg(r,s,c){if((c&4194240)!==0){var m=s.lanes;m&=r.pendingLanes,c|=m,s.lanes=c,ec(r,c)}}var vl={readContext:bt,useCallback:jn,useContext:jn,useEffect:jn,useImperativeHandle:jn,useInsertionEffect:jn,useLayoutEffect:jn,useMemo:jn,useReducer:jn,useRef:jn,useState:jn,useDebugValue:jn,useDeferredValue:jn,useTransition:jn,useMutableSource:jn,useSyncExternalStore:jn,useId:jn,unstable_isNewReconciler:!1},dS={readContext:bt,useCallback:function(r,s){return sr().memoizedState=[r,s===void 0?null:s],r},useContext:bt,useEffect:ug,useImperativeHandle:function(r,s,c){return c=c!=null?c.concat([r]):null,yl(4194308,4,fg.bind(null,s,r),c)},useLayoutEffect:function(r,s){return yl(4194308,4,r,s)},useInsertionEffect:function(r,s){return yl(4,2,r,s)},useMemo:function(r,s){var c=sr();return s=s===void 0?null:s,r=r(),c.memoizedState=[r,s],r},useReducer:function(r,s,c){var m=sr();return s=c!==void 0?c(s):s,m.memoizedState=m.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},m.queue=r,r=r.dispatch=uS.bind(null,Je,r),[m.memoizedState,r]},useRef:function(r){var s=sr();return r={current:r},s.memoizedState=r},useState:ag,useDebugValue:Zc,useDeferredValue:function(r){return sr().memoizedState=r},useTransition:function(){var r=ag(!1),s=r[0];return r=lS.bind(null,r[1]),sr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,c){var m=Je,k=sr();if(Ye){if(c===void 0)throw Error(t(407));c=c()}else{if(c=s(),vn===null)throw Error(t(349));(Ei&30)!==0||tg(m,s,c)}k.memoizedState=c;var v={value:c,getSnapshot:s};return k.queue=v,ug(ig.bind(null,m,v,r),[r]),m.flags|=2048,Mo(9,rg.bind(null,m,v,c,s),void 0,null),c},useId:function(){var r=sr(),s=vn.identifierPrefix;if(Ye){var c=xr,m=wr;c=(m&~(1<<32-Mt(m)-1)).toString(32)+c,s=":"+s+"R"+c,c=Ro++,0<c&&(s+="H"+c.toString(32)),s+=":"}else c=aS++,s=":"+s+"r"+c.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},fS={readContext:bt,useCallback:pg,useContext:bt,useEffect:Xc,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:dg,useMemo:mg,useReducer:Qc,useRef:lg,useState:function(){return Qc(Io)},useDebugValue:Zc,useDeferredValue:function(r){var s=zt();return gg(s,mn.memoizedState,r)},useTransition:function(){var r=Qc(Io)[0],s=zt().memoizedState;return[r,s]},useMutableSource:eg,useSyncExternalStore:ng,useId:yg,unstable_isNewReconciler:!1},hS={readContext:bt,useCallback:pg,useContext:bt,useEffect:Xc,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:dg,useMemo:mg,useReducer:Yc,useRef:lg,useState:function(){return Yc(Io)},useDebugValue:Zc,useDeferredValue:function(r){var s=zt();return mn===null?s.memoizedState=r:gg(s,mn.memoizedState,r)},useTransition:function(){var r=Yc(Io)[0],s=zt().memoizedState;return[r,s]},useMutableSource:eg,useSyncExternalStore:ng,useId:yg,unstable_isNewReconciler:!1};function Ot(r,s){if(r&&r.defaultProps){s=j({},s),r=r.defaultProps;for(var c in r)s[c]===void 0&&(s[c]=r[c]);return s}return s}function Jc(r,s,c,m){s=r.memoizedState,c=c(m,s),c=c==null?s:j({},s,c),r.memoizedState=c,r.lanes===0&&(r.updateQueue.baseState=c)}var bl={isMounted:function(r){return(r=r._reactInternals)?wi(r)===r:!1},enqueueSetState:function(r,s,c){r=r._reactInternals;var m=Bn(),k=Jr(r),v=_r(m,k);v.payload=s,c!=null&&(v.callback=c),s=Qr(r,v,k),s!==null&&(Vt(s,r,k,m),fl(s,r,k))},enqueueReplaceState:function(r,s,c){r=r._reactInternals;var m=Bn(),k=Jr(r),v=_r(m,k);v.tag=1,v.payload=s,c!=null&&(v.callback=c),s=Qr(r,v,k),s!==null&&(Vt(s,r,k,m),fl(s,r,k))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var c=Bn(),m=Jr(r),k=_r(c,m);k.tag=2,s!=null&&(k.callback=s),s=Qr(r,k,m),s!==null&&(Vt(s,r,m,c),fl(s,r,m))}};function zg(r,s,c,m,k,v,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(m,v,S):s.prototype&&s.prototype.isPureReactComponent?!bo(c,m)||!bo(k,v):!0}function wg(r,s,c){var m=!1,k=qr,v=s.contextType;return typeof v=="object"&&v!==null?v=bt(v):(k=Yn(s)?Si:Tn.current,m=s.contextTypes,v=(m=m!=null)?hs(r,k):qr),s=new s(c,v),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=bl,r.stateNode=s,s._reactInternals=r,m&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=k,r.__reactInternalMemoizedMaskedChildContext=v),s}function xg(r,s,c,m){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(c,m),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(c,m),s.state!==r&&bl.enqueueReplaceState(s,s.state,null)}function ed(r,s,c,m){var k=r.stateNode;k.props=c,k.state=r.memoizedState,k.refs={},Vc(r);var v=s.contextType;typeof v=="object"&&v!==null?k.context=bt(v):(v=Yn(s)?Si:Tn.current,k.context=hs(r,v)),k.state=r.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(Jc(r,s,v,c),k.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof k.getSnapshotBeforeUpdate=="function"||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(s=k.state,typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount(),s!==k.state&&bl.enqueueReplaceState(k,k.state,null),hl(r,c,k,m),k.state=r.memoizedState),typeof k.componentDidMount=="function"&&(r.flags|=4194308)}function zs(r,s){try{var c="",m=s;do c+=ke(m),m=m.return;while(m);var k=c}catch(v){k=`
Error generating stack: `+v.message+`
`+v.stack}return{value:r,source:s,stack:k,digest:null}}function nd(r,s,c){return{value:r,source:null,stack:c??null,digest:s??null}}function td(r,s){try{console.error(s.value)}catch(c){setTimeout(function(){throw c})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function Sg(r,s,c){c=_r(-1,c),c.tag=3,c.payload={element:null};var m=s.value;return c.callback=function(){Tl||(Tl=!0,yd=m),td(r,s)},c}function _g(r,s,c){c=_r(-1,c),c.tag=3;var m=r.type.getDerivedStateFromError;if(typeof m=="function"){var k=s.value;c.payload=function(){return m(k)},c.callback=function(){td(r,s)}}var v=r.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(c.callback=function(){td(r,s),typeof m!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var S=s.stack;this.componentDidCatch(s.value,{componentStack:S!==null?S:""})}),c}function Cg(r,s,c){var m=r.pingCache;if(m===null){m=r.pingCache=new pS;var k=new Set;m.set(s,k)}else k=m.get(s),k===void 0&&(k=new Set,m.set(s,k));k.has(c)||(k.add(c),r=jS.bind(null,r,s,c),s.then(r,r))}function Tg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function jg(r,s,c,m,k){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(s=_r(-1,1),s.tag=2,Qr(c,s,1))),c.lanes|=1),r):(r.flags|=65536,r.lanes=k,r)}var mS=R.ReactCurrentOwner,Xn=!1;function Vn(r,s,c,m){s.child=r===null?Gm(s,null,c,m):ys(s,r.child,c,m)}function Eg(r,s,c,m,k){c=c.render;var v=s.ref;return vs(s,k),m=Kc(r,s,c,m,v,k),c=Gc(),r!==null&&!Xn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~k,Cr(r,s,k)):(Ye&&c&&Ac(s),s.flags|=1,Vn(r,s,m,k),s.child)}function Ag(r,s,c,m,k){if(r===null){var v=c.type;return typeof v=="function"&&!Sd(v)&&v.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(s.tag=15,s.type=v,Pg(r,s,v,m,k)):(r=Il(c.type,null,m,s,s.mode,k),r.ref=s.ref,r.return=s,s.child=r)}if(v=r.child,(r.lanes&k)===0){var S=v.memoizedProps;if(c=c.compare,c=c!==null?c:bo,c(S,m)&&r.ref===s.ref)return Cr(r,s,k)}return s.flags|=1,r=ni(v,m),r.ref=s.ref,r.return=s,s.child=r}function Pg(r,s,c,m,k){if(r!==null){var v=r.memoizedProps;if(bo(v,m)&&r.ref===s.ref)if(Xn=!1,s.pendingProps=m=v,(r.lanes&k)!==0)(r.flags&131072)!==0&&(Xn=!0);else return s.lanes=r.lanes,Cr(r,s,k)}return rd(r,s,c,m,k)}function Rg(r,s,c){var m=s.pendingProps,k=m.children,v=r!==null?r.memoizedState:null;if(m.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(xs,ct),ct|=c;else{if((c&1073741824)===0)return r=v!==null?v.baseLanes|c:c,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(xs,ct),ct|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=v!==null?v.baseLanes:c,He(xs,ct),ct|=m}else v!==null?(m=v.baseLanes|c,s.memoizedState=null):m=c,He(xs,ct),ct|=m;return Vn(r,s,k,c),s.child}function Ig(r,s){var c=s.ref;(r===null&&c!==null||r!==null&&r.ref!==c)&&(s.flags|=512,s.flags|=2097152)}function rd(r,s,c,m,k){var v=Yn(c)?Si:Tn.current;return v=hs(s,v),vs(s,k),c=Kc(r,s,c,m,v,k),m=Gc(),r!==null&&!Xn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~k,Cr(r,s,k)):(Ye&&m&&Ac(s),s.flags|=1,Vn(r,s,c,k),s.child)}function Mg(r,s,c,m,k){if(Yn(c)){var v=!0;il(s)}else v=!1;if(vs(s,k),s.stateNode===null)wl(r,s),wg(s,c,m),ed(s,c,m,k),m=!0;else if(r===null){var S=s.stateNode,A=s.memoizedProps;S.props=A;var M=S.context,W=c.contextType;typeof W=="object"&&W!==null?W=bt(W):(W=Yn(c)?Si:Tn.current,W=hs(s,W));var te=c.getDerivedStateFromProps,ie=typeof te=="function"||typeof S.getSnapshotBeforeUpdate=="function";ie||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(A!==m||M!==W)&&xg(s,S,m,W),Gr=!1;var ne=s.memoizedState;S.state=ne,hl(s,m,S,k),M=s.memoizedState,A!==m||ne!==M||Qn.current||Gr?(typeof te=="function"&&(Jc(s,c,te,m),M=s.memoizedState),(A=Gr||zg(s,c,A,m,ne,M,W))?(ie||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(s.flags|=4194308)):(typeof S.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=m,s.memoizedState=M),S.props=m,S.state=M,S.context=W,m=A):(typeof S.componentDidMount=="function"&&(s.flags|=4194308),m=!1)}else{S=s.stateNode,Ym(r,s),A=s.memoizedProps,W=s.type===s.elementType?A:Ot(s.type,A),S.props=W,ie=s.pendingProps,ne=S.context,M=c.contextType,typeof M=="object"&&M!==null?M=bt(M):(M=Yn(c)?Si:Tn.current,M=hs(s,M));var de=c.getDerivedStateFromProps;(te=typeof de=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(A!==ie||ne!==M)&&xg(s,S,m,M),Gr=!1,ne=s.memoizedState,S.state=ne,hl(s,m,S,k);var he=s.memoizedState;A!==ie||ne!==he||Qn.current||Gr?(typeof de=="function"&&(Jc(s,c,de,m),he=s.memoizedState),(W=Gr||zg(s,c,W,m,ne,he,M)||!1)?(te||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(m,he,M),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(m,he,M)),typeof S.componentDidUpdate=="function"&&(s.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof S.componentDidUpdate!="function"||A===r.memoizedProps&&ne===r.memoizedState||(s.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&ne===r.memoizedState||(s.flags|=1024),s.memoizedProps=m,s.memoizedState=he),S.props=m,S.state=he,S.context=M,m=W):(typeof S.componentDidUpdate!="function"||A===r.memoizedProps&&ne===r.memoizedState||(s.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&ne===r.memoizedState||(s.flags|=1024),m=!1)}return id(r,s,c,m,v,k)}function id(r,s,c,m,k,v){Ig(r,s);var S=(s.flags&128)!==0;if(!m&&!S)return k&&Fm(s,c,!1),Cr(r,s,v);m=s.stateNode,mS.current=s;var A=S&&typeof c.getDerivedStateFromError!="function"?null:m.render();return s.flags|=1,r!==null&&S?(s.child=ys(s,r.child,null,v),s.child=ys(s,null,A,v)):Vn(r,s,A,v),s.memoizedState=m.state,k&&Fm(s,c,!0),s.child}function Dg(r){var s=r.stateNode;s.pendingContext?Om(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Om(r,s.context,!1),Bc(r,s.containerInfo)}function Lg(r,s,c,m,k){return gs(),Mc(k),s.flags|=256,Vn(r,s,c,m),s.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function od(r){return{baseLanes:r,cachePool:null,transitions:null}}function Og(r,s,c){var m=s.pendingProps,k=Ze.current,v=!1,S=(s.flags&128)!==0,A;if((A=S)||(A=r!==null&&r.memoizedState===null?!1:(k&2)!==0),A?(v=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(k|=1),He(Ze,k&1),r===null)return Ic(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(S=m.children,r=m.fallback,v?(m=s.mode,v=s.child,S={mode:"hidden",children:S},(m&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=S):v=Ml(S,m,0,null),r=Mi(r,m,c,null),v.return=s,r.return=s,v.sibling=r,s.child=v,s.child.memoizedState=od(c),s.memoizedState=sd,r):ad(s,S));if(k=r.memoizedState,k!==null&&(A=k.dehydrated,A!==null))return gS(r,s,S,m,A,k,c);if(v){v=m.fallback,S=s.mode,k=r.child,A=k.sibling;var M={mode:"hidden",children:m.children};return(S&1)===0&&s.child!==k?(m=s.child,m.childLanes=0,m.pendingProps=M,s.deletions=null):(m=ni(k,M),m.subtreeFlags=k.subtreeFlags&14680064),A!==null?v=ni(A,v):(v=Mi(v,S,c,null),v.flags|=2),v.return=s,m.return=s,m.sibling=v,s.child=m,m=v,v=s.child,S=r.child.memoizedState,S=S===null?od(c):{baseLanes:S.baseLanes|c,cachePool:null,transitions:S.transitions},v.memoizedState=S,v.childLanes=r.childLanes&~c,s.memoizedState=sd,m}return v=r.child,r=v.sibling,m=ni(v,{mode:"visible",children:m.children}),(s.mode&1)===0&&(m.lanes=c),m.return=s,m.sibling=null,r!==null&&(c=s.deletions,c===null?(s.deletions=[r],s.flags|=16):c.push(r)),s.child=m,s.memoizedState=null,m}function ad(r,s){return s=Ml({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function zl(r,s,c,m){return m!==null&&Mc(m),ys(s,r.child,null,c),r=ad(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function gS(r,s,c,m,k,v,S){if(c)return s.flags&256?(s.flags&=-257,m=nd(Error(t(422))),zl(r,s,S,m)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(v=m.fallback,k=s.mode,m=Ml({mode:"visible",children:m.children},k,0,null),v=Mi(v,k,S,null),v.flags|=2,m.return=s,v.return=s,m.sibling=v,s.child=m,(s.mode&1)!==0&&ys(s,r.child,null,S),s.child.memoizedState=od(S),s.memoizedState=sd,v);if((s.mode&1)===0)return zl(r,s,S,null);if(k.data==="$!"){if(m=k.nextSibling&&k.nextSibling.dataset,m)var A=m.dgst;return m=A,v=Error(t(419)),m=nd(v,m,void 0),zl(r,s,S,m)}if(A=(S&r.childLanes)!==0,Xn||A){if(m=vn,m!==null){switch(S&-S){case 4:k=2;break;case 16:k=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:k=32;break;case 536870912:k=268435456;break;default:k=0}k=(k&(m.suspendedLanes|S))!==0?0:k,k!==0&&k!==v.retryLane&&(v.retryLane=k,Sr(r,k),Vt(m,r,k,-1))}return xd(),m=nd(Error(t(421))),zl(r,s,S,m)}return k.data==="$?"?(s.flags|=128,s.child=r.child,s=ES.bind(null,r),k._reactRetry=s,null):(r=v.treeContext,ut=Hr(k.nextSibling),lt=s,Ye=!0,Lt=null,r!==null&&(kt[vt++]=wr,kt[vt++]=xr,kt[vt++]=_i,wr=r.id,xr=r.overflow,_i=s),s=ad(s,m.children),s.flags|=4096,s)}function Ng(r,s,c){r.lanes|=s;var m=r.alternate;m!==null&&(m.lanes|=s),Nc(r.return,s,c)}function ld(r,s,c,m,k){var v=r.memoizedState;v===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:m,tail:c,tailMode:k}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=m,v.tail=c,v.tailMode=k)}function Fg(r,s,c){var m=s.pendingProps,k=m.revealOrder,v=m.tail;if(Vn(r,s,m.children,c),m=Ze.current,(m&2)!==0)m=m&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ng(r,c,s);else if(r.tag===19)Ng(r,c,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}m&=1}if(He(Ze,m),(s.mode&1)===0)s.memoizedState=null;else switch(k){case"forwards":for(c=s.child,k=null;c!==null;)r=c.alternate,r!==null&&pl(r)===null&&(k=c),c=c.sibling;c=k,c===null?(k=s.child,s.child=null):(k=c.sibling,c.sibling=null),ld(s,!1,k,c,v);break;case"backwards":for(c=null,k=s.child,s.child=null;k!==null;){if(r=k.alternate,r!==null&&pl(r)===null){s.child=k;break}r=k.sibling,k.sibling=c,c=k,k=r}ld(s,!0,c,null,v);break;case"together":ld(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function wl(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Cr(r,s,c){if(r!==null&&(s.dependencies=r.dependencies),Ai|=s.lanes,(c&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,c=ni(r,r.pendingProps),s.child=c,c.return=s;r.sibling!==null;)r=r.sibling,c=c.sibling=ni(r,r.pendingProps),c.return=s;c.sibling=null}return s.child}function yS(r,s,c){switch(s.tag){case 3:Dg(s),gs();break;case 5:Jm(s);break;case 1:Yn(s.type)&&il(s);break;case 4:Bc(s,s.stateNode.containerInfo);break;case 10:var m=s.type._context,k=s.memoizedProps.value;He(cl,m._currentValue),m._currentValue=k;break;case 13:if(m=s.memoizedState,m!==null)return m.dehydrated!==null?(He(Ze,Ze.current&1),s.flags|=128,null):(c&s.child.childLanes)!==0?Og(r,s,c):(He(Ze,Ze.current&1),r=Cr(r,s,c),r!==null?r.sibling:null);He(Ze,Ze.current&1);break;case 19:if(m=(c&s.childLanes)!==0,(r.flags&128)!==0){if(m)return Fg(r,s,c);s.flags|=128}if(k=s.memoizedState,k!==null&&(k.rendering=null,k.tail=null,k.lastEffect=null),He(Ze,Ze.current),m)break;return null;case 22:case 23:return s.lanes=0,Rg(r,s,c)}return Cr(r,s,c)}var Vg,ud,Bg,Ug;Vg=function(r,s){for(var c=s.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===s)break;for(;c.sibling===null;){if(c.return===null||c.return===s)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},ud=function(){},Bg=function(r,s,c,m){var k=r.memoizedProps;if(k!==m){r=s.stateNode,ji(ir.current);var v=null;switch(c){case"input":k=Qt(r,k),m=Qt(r,m),v=[];break;case"select":k=j({},k,{value:void 0}),m=j({},m,{value:void 0}),v=[];break;case"textarea":k=Lr(r,k),m=Lr(r,m),v=[];break;default:typeof k.onClick!="function"&&typeof m.onClick=="function"&&(r.onclick=nl)}Qe(c,m);var S;c=null;for(W in k)if(!m.hasOwnProperty(W)&&k.hasOwnProperty(W)&&k[W]!=null)if(W==="style"){var A=k[W];for(S in A)A.hasOwnProperty(S)&&(c||(c={}),c[S]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?v||(v=[]):(v=v||[]).push(W,null));for(W in m){var M=m[W];if(A=k!=null?k[W]:void 0,m.hasOwnProperty(W)&&M!==A&&(M!=null||A!=null))if(W==="style")if(A){for(S in A)!A.hasOwnProperty(S)||M&&M.hasOwnProperty(S)||(c||(c={}),c[S]="");for(S in M)M.hasOwnProperty(S)&&A[S]!==M[S]&&(c||(c={}),c[S]=M[S])}else c||(v||(v=[]),v.push(W,c)),c=M;else W==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,A=A?A.__html:void 0,M!=null&&A!==M&&(v=v||[]).push(W,M)):W==="children"?typeof M!="string"&&typeof M!="number"||(v=v||[]).push(W,""+M):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(M!=null&&W==="onScroll"&&qe("scroll",r),v||A===M||(v=[])):(v=v||[]).push(W,M))}c&&(v=v||[]).push("style",c);var W=v;(s.updateQueue=W)&&(s.flags|=4)}},Ug=function(r,s,c,m){c!==m&&(s.flags|=4)};function Do(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r.tail=null:c.sibling=null;break;case"collapsed":c=r.tail;for(var m=null;c!==null;)c.alternate!==null&&(m=c),c=c.sibling;m===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:m.sibling=null}}function En(r){var s=r.alternate!==null&&r.alternate.child===r.child,c=0,m=0;if(s)for(var k=r.child;k!==null;)c|=k.lanes|k.childLanes,m|=k.subtreeFlags&14680064,m|=k.flags&14680064,k.return=r,k=k.sibling;else for(k=r.child;k!==null;)c|=k.lanes|k.childLanes,m|=k.subtreeFlags,m|=k.flags,k.return=r,k=k.sibling;return r.subtreeFlags|=m,r.childLanes=c,s}function kS(r,s,c){var m=s.pendingProps;switch(Pc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(s),null;case 1:return Yn(s.type)&&rl(),En(s),null;case 3:return m=s.stateNode,bs(),Ke(Qn),Ke(Tn),Hc(),m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null),(r===null||r.child===null)&&(ll(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Lt!==null&&(bd(Lt),Lt=null))),ud(r,s),En(s),null;case 5:Uc(s);var k=ji(Ao.current);if(c=s.type,r!==null&&s.stateNode!=null)Bg(r,s,c,m,k),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!m){if(s.stateNode===null)throw Error(t(166));return En(s),null}if(r=ji(ir.current),ll(s)){m=s.stateNode,c=s.type;var v=s.memoizedProps;switch(m[rr]=s,m[_o]=v,r=(s.mode&1)!==0,c){case"dialog":qe("cancel",m),qe("close",m);break;case"iframe":case"object":case"embed":qe("load",m);break;case"video":case"audio":for(k=0;k<wo.length;k++)qe(wo[k],m);break;case"source":qe("error",m);break;case"img":case"image":case"link":qe("error",m),qe("load",m);break;case"details":qe("toggle",m);break;case"input":vr(m,v),qe("invalid",m);break;case"select":m._wrapperState={wasMultiple:!!v.multiple},qe("invalid",m);break;case"textarea":mt(m,v),qe("invalid",m)}Qe(c,v),k=null;for(var S in v)if(v.hasOwnProperty(S)){var A=v[S];S==="children"?typeof A=="string"?m.textContent!==A&&(v.suppressHydrationWarning!==!0&&el(m.textContent,A,r),k=["children",A]):typeof A=="number"&&m.textContent!==""+A&&(v.suppressHydrationWarning!==!0&&el(m.textContent,A,r),k=["children",""+A]):o.hasOwnProperty(S)&&A!=null&&S==="onScroll"&&qe("scroll",m)}switch(c){case"input":yn(m),Zt(m,v,!0);break;case"textarea":yn(m),ns(m);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(m.onclick=nl)}m=k,s.updateQueue=m,m!==null&&(s.flags|=4)}else{S=k.nodeType===9?k:k.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Q(c)),r==="http://www.w3.org/1999/xhtml"?c==="script"?(r=S.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof m.is=="string"?r=S.createElement(c,{is:m.is}):(r=S.createElement(c),c==="select"&&(S=r,m.multiple?S.multiple=!0:m.size&&(S.size=m.size))):r=S.createElementNS(r,c),r[rr]=s,r[_o]=m,Vg(r,s,!1,!1),s.stateNode=r;e:{switch(S=yt(c,m),c){case"dialog":qe("cancel",r),qe("close",r),k=m;break;case"iframe":case"object":case"embed":qe("load",r),k=m;break;case"video":case"audio":for(k=0;k<wo.length;k++)qe(wo[k],r);k=m;break;case"source":qe("error",r),k=m;break;case"img":case"image":case"link":qe("error",r),qe("load",r),k=m;break;case"details":qe("toggle",r),k=m;break;case"input":vr(r,m),k=Qt(r,m),qe("invalid",r);break;case"option":k=m;break;case"select":r._wrapperState={wasMultiple:!!m.multiple},k=j({},m,{value:void 0}),qe("invalid",r);break;case"textarea":mt(r,m),k=Lr(r,m),qe("invalid",r);break;default:k=m}Qe(c,k),A=k;for(v in A)if(A.hasOwnProperty(v)){var M=A[v];v==="style"?On(r,M):v==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Pe(r,M)):v==="children"?typeof M=="string"?(c!=="textarea"||M!=="")&&Re(r,M):typeof M=="number"&&Re(r,""+M):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?M!=null&&v==="onScroll"&&qe("scroll",r):M!=null&&C(r,v,M,S))}switch(c){case"input":yn(r),Zt(r,m,!1);break;case"textarea":yn(r),ns(r);break;case"option":m.value!=null&&r.setAttribute("value",""+Ce(m.value));break;case"select":r.multiple=!!m.multiple,v=m.value,v!=null?qn(r,!!m.multiple,v,!1):m.defaultValue!=null&&qn(r,!!m.multiple,m.defaultValue,!0);break;default:typeof k.onClick=="function"&&(r.onclick=nl)}switch(c){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}}m&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return En(s),null;case 6:if(r&&s.stateNode!=null)Ug(r,s,r.memoizedProps,m);else{if(typeof m!="string"&&s.stateNode===null)throw Error(t(166));if(c=ji(Ao.current),ji(ir.current),ll(s)){if(m=s.stateNode,c=s.memoizedProps,m[rr]=s,(v=m.nodeValue!==c)&&(r=lt,r!==null))switch(r.tag){case 3:el(m.nodeValue,c,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&el(m.nodeValue,c,(r.mode&1)!==0)}v&&(s.flags|=4)}else m=(c.nodeType===9?c:c.ownerDocument).createTextNode(m),m[rr]=s,s.stateNode=m}return En(s),null;case 13:if(Ke(Ze),m=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&ut!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Wm(),gs(),s.flags|=98560,v=!1;else if(v=ll(s),m!==null&&m.dehydrated!==null){if(r===null){if(!v)throw Error(t(318));if(v=s.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[rr]=s}else gs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;En(s),v=!1}else Lt!==null&&(bd(Lt),Lt=null),v=!0;if(!v)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=c,s):(m=m!==null,m!==(r!==null&&r.memoizedState!==null)&&m&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Ze.current&1)!==0?gn===0&&(gn=3):xd())),s.updateQueue!==null&&(s.flags|=4),En(s),null);case 4:return bs(),ud(r,s),r===null&&xo(s.stateNode.containerInfo),En(s),null;case 10:return Oc(s.type._context),En(s),null;case 17:return Yn(s.type)&&rl(),En(s),null;case 19:if(Ke(Ze),v=s.memoizedState,v===null)return En(s),null;if(m=(s.flags&128)!==0,S=v.rendering,S===null)if(m)Do(v,!1);else{if(gn!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(S=pl(r),S!==null){for(s.flags|=128,Do(v,!1),m=S.updateQueue,m!==null&&(s.updateQueue=m,s.flags|=4),s.subtreeFlags=0,m=c,c=s.child;c!==null;)v=c,r=m,v.flags&=14680066,S=v.alternate,S===null?(v.childLanes=0,v.lanes=r,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=S.childLanes,v.lanes=S.lanes,v.child=S.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=S.memoizedProps,v.memoizedState=S.memoizedState,v.updateQueue=S.updateQueue,v.type=S.type,r=S.dependencies,v.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),c=c.sibling;return He(Ze,Ze.current&1|2),s.child}r=r.sibling}v.tail!==null&&sn()>Ss&&(s.flags|=128,m=!0,Do(v,!1),s.lanes=4194304)}else{if(!m)if(r=pl(S),r!==null){if(s.flags|=128,m=!0,c=r.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),Do(v,!0),v.tail===null&&v.tailMode==="hidden"&&!S.alternate&&!Ye)return En(s),null}else 2*sn()-v.renderingStartTime>Ss&&c!==1073741824&&(s.flags|=128,m=!0,Do(v,!1),s.lanes=4194304);v.isBackwards?(S.sibling=s.child,s.child=S):(c=v.last,c!==null?c.sibling=S:s.child=S,v.last=S)}return v.tail!==null?(s=v.tail,v.rendering=s,v.tail=s.sibling,v.renderingStartTime=sn(),s.sibling=null,c=Ze.current,He(Ze,m?c&1|2:c&1),s):(En(s),null);case 22:case 23:return wd(),m=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==m&&(s.flags|=8192),m&&(s.mode&1)!==0?(ct&1073741824)!==0&&(En(s),s.subtreeFlags&6&&(s.flags|=8192)):En(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function vS(r,s){switch(Pc(s),s.tag){case 1:return Yn(s.type)&&rl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return bs(),Ke(Qn),Ke(Tn),Hc(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Uc(s),null;case 13:if(Ke(Ze),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));gs()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Ze),null;case 4:return bs(),null;case 10:return Oc(s.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var xl=!1,An=!1,bS=typeof WeakSet=="function"?WeakSet:Set,fe=null;function ws(r,s){var c=r.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(m){nn(r,s,m)}else c.current=null}function cd(r,s,c){try{c()}catch(m){nn(r,s,m)}}var $g=!1;function zS(r,s){if(wc=$a,r=zm(),pc(r)){if("selectionStart"in r)var c={start:r.selectionStart,end:r.selectionEnd};else e:{c=(c=r.ownerDocument)&&c.defaultView||window;var m=c.getSelection&&c.getSelection();if(m&&m.rangeCount!==0){c=m.anchorNode;var k=m.anchorOffset,v=m.focusNode;m=m.focusOffset;try{c.nodeType,v.nodeType}catch{c=null;break e}var S=0,A=-1,M=-1,W=0,te=0,ie=r,ne=null;n:for(;;){for(var de;ie!==c||k!==0&&ie.nodeType!==3||(A=S+k),ie!==v||m!==0&&ie.nodeType!==3||(M=S+m),ie.nodeType===3&&(S+=ie.nodeValue.length),(de=ie.firstChild)!==null;)ne=ie,ie=de;for(;;){if(ie===r)break n;if(ne===c&&++W===k&&(A=S),ne===v&&++te===m&&(M=S),(de=ie.nextSibling)!==null)break;ie=ne,ne=ie.parentNode}ie=de}c=A===-1||M===-1?null:{start:A,end:M}}else c=null}c=c||{start:0,end:0}}else c=null;for(xc={focusedElem:r,selectionRange:c},$a=!1,fe=s;fe!==null;)if(s=fe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,fe=r;else for(;fe!==null;){s=fe;try{var he=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var pe=he.memoizedProps,on=he.memoizedState,V=s.stateNode,O=V.getSnapshotBeforeUpdate(s.elementType===s.type?pe:Ot(s.type,pe),on);V.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ae){nn(s,s.return,ae)}if(r=s.sibling,r!==null){r.return=s.return,fe=r;break}fe=s.return}return he=$g,$g=!1,he}function Lo(r,s,c){var m=s.updateQueue;if(m=m!==null?m.lastEffect:null,m!==null){var k=m=m.next;do{if((k.tag&r)===r){var v=k.destroy;k.destroy=void 0,v!==void 0&&cd(s,c,v)}k=k.next}while(k!==m)}}function Sl(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&r)===r){var m=c.create;c.destroy=m()}c=c.next}while(c!==s)}}function dd(r){var s=r.ref;if(s!==null){var c=r.stateNode;switch(r.tag){case 5:r=c;break;default:r=c}typeof s=="function"?s(r):s.current=r}}function Hg(r){var s=r.alternate;s!==null&&(r.alternate=null,Hg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[rr],delete s[_o],delete s[Tc],delete s[rS],delete s[iS])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Wg(r){return r.tag===5||r.tag===3||r.tag===4}function qg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Wg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function fd(r,s,c){var m=r.tag;if(m===5||m===6)r=r.stateNode,s?c.nodeType===8?c.parentNode.insertBefore(r,s):c.insertBefore(r,s):(c.nodeType===8?(s=c.parentNode,s.insertBefore(r,c)):(s=c,s.appendChild(r)),c=c._reactRootContainer,c!=null||s.onclick!==null||(s.onclick=nl));else if(m!==4&&(r=r.child,r!==null))for(fd(r,s,c),r=r.sibling;r!==null;)fd(r,s,c),r=r.sibling}function hd(r,s,c){var m=r.tag;if(m===5||m===6)r=r.stateNode,s?c.insertBefore(r,s):c.appendChild(r);else if(m!==4&&(r=r.child,r!==null))for(hd(r,s,c),r=r.sibling;r!==null;)hd(r,s,c),r=r.sibling}var wn=null,Nt=!1;function Yr(r,s,c){for(c=c.child;c!==null;)Kg(r,s,c),c=c.sibling}function Kg(r,s,c){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Oa,c)}catch{}switch(c.tag){case 5:An||ws(c,s);case 6:var m=wn,k=Nt;wn=null,Yr(r,s,c),wn=m,Nt=k,wn!==null&&(Nt?(r=wn,c=c.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)):wn.removeChild(c.stateNode));break;case 18:wn!==null&&(Nt?(r=wn,c=c.stateNode,r.nodeType===8?Cc(r.parentNode,c):r.nodeType===1&&Cc(r,c),po(r)):Cc(wn,c.stateNode));break;case 4:m=wn,k=Nt,wn=c.stateNode.containerInfo,Nt=!0,Yr(r,s,c),wn=m,Nt=k;break;case 0:case 11:case 14:case 15:if(!An&&(m=c.updateQueue,m!==null&&(m=m.lastEffect,m!==null))){k=m=m.next;do{var v=k,S=v.destroy;v=v.tag,S!==void 0&&((v&2)!==0||(v&4)!==0)&&cd(c,s,S),k=k.next}while(k!==m)}Yr(r,s,c);break;case 1:if(!An&&(ws(c,s),m=c.stateNode,typeof m.componentWillUnmount=="function"))try{m.props=c.memoizedProps,m.state=c.memoizedState,m.componentWillUnmount()}catch(A){nn(c,s,A)}Yr(r,s,c);break;case 21:Yr(r,s,c);break;case 22:c.mode&1?(An=(m=An)||c.memoizedState!==null,Yr(r,s,c),An=m):Yr(r,s,c);break;default:Yr(r,s,c)}}function Gg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var c=r.stateNode;c===null&&(c=r.stateNode=new bS),s.forEach(function(m){var k=AS.bind(null,r,m);c.has(m)||(c.add(m),m.then(k,k))})}}function Ft(r,s){var c=s.deletions;if(c!==null)for(var m=0;m<c.length;m++){var k=c[m];try{var v=r,S=s,A=S;e:for(;A!==null;){switch(A.tag){case 5:wn=A.stateNode,Nt=!1;break e;case 3:wn=A.stateNode.containerInfo,Nt=!0;break e;case 4:wn=A.stateNode.containerInfo,Nt=!0;break e}A=A.return}if(wn===null)throw Error(t(160));Kg(v,S,k),wn=null,Nt=!1;var M=k.alternate;M!==null&&(M.return=null),k.return=null}catch(W){nn(k,s,W)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Qg(s,r),s=s.sibling}function Qg(r,s){var c=r.alternate,m=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ft(s,r),or(r),m&4){try{Lo(3,r,r.return),Sl(3,r)}catch(pe){nn(r,r.return,pe)}try{Lo(5,r,r.return)}catch(pe){nn(r,r.return,pe)}}break;case 1:Ft(s,r),or(r),m&512&&c!==null&&ws(c,c.return);break;case 5:if(Ft(s,r),or(r),m&512&&c!==null&&ws(c,c.return),r.flags&32){var k=r.stateNode;try{Re(k,"")}catch(pe){nn(r,r.return,pe)}}if(m&4&&(k=r.stateNode,k!=null)){var v=r.memoizedProps,S=c!==null?c.memoizedProps:v,A=r.type,M=r.updateQueue;if(r.updateQueue=null,M!==null)try{A==="input"&&v.type==="radio"&&v.name!=null&&Yt(k,v),yt(A,S);var W=yt(A,v);for(S=0;S<M.length;S+=2){var te=M[S],ie=M[S+1];te==="style"?On(k,ie):te==="dangerouslySetInnerHTML"?Pe(k,ie):te==="children"?Re(k,ie):C(k,te,ie,W)}switch(A){case"input":Xt(k,v);break;case"textarea":es(k,v);break;case"select":var ne=k._wrapperState.wasMultiple;k._wrapperState.wasMultiple=!!v.multiple;var de=v.value;de!=null?qn(k,!!v.multiple,de,!1):ne!==!!v.multiple&&(v.defaultValue!=null?qn(k,!!v.multiple,v.defaultValue,!0):qn(k,!!v.multiple,v.multiple?[]:"",!1))}k[_o]=v}catch(pe){nn(r,r.return,pe)}}break;case 6:if(Ft(s,r),or(r),m&4){if(r.stateNode===null)throw Error(t(162));k=r.stateNode,v=r.memoizedProps;try{k.nodeValue=v}catch(pe){nn(r,r.return,pe)}}break;case 3:if(Ft(s,r),or(r),m&4&&c!==null&&c.memoizedState.isDehydrated)try{po(s.containerInfo)}catch(pe){nn(r,r.return,pe)}break;case 4:Ft(s,r),or(r);break;case 13:Ft(s,r),or(r),k=r.child,k.flags&8192&&(v=k.memoizedState!==null,k.stateNode.isHidden=v,!v||k.alternate!==null&&k.alternate.memoizedState!==null||(gd=sn())),m&4&&Gg(r);break;case 22:if(te=c!==null&&c.memoizedState!==null,r.mode&1?(An=(W=An)||te,Ft(s,r),An=W):Ft(s,r),or(r),m&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!te&&(r.mode&1)!==0)for(fe=r,te=r.child;te!==null;){for(ie=fe=te;fe!==null;){switch(ne=fe,de=ne.child,ne.tag){case 0:case 11:case 14:case 15:Lo(4,ne,ne.return);break;case 1:ws(ne,ne.return);var he=ne.stateNode;if(typeof he.componentWillUnmount=="function"){m=ne,c=ne.return;try{s=m,he.props=s.memoizedProps,he.state=s.memoizedState,he.componentWillUnmount()}catch(pe){nn(m,c,pe)}}break;case 5:ws(ne,ne.return);break;case 22:if(ne.memoizedState!==null){Zg(ie);continue}}de!==null?(de.return=ne,fe=de):Zg(ie)}te=te.sibling}e:for(te=null,ie=r;;){if(ie.tag===5){if(te===null){te=ie;try{k=ie.stateNode,W?(v=k.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(A=ie.stateNode,M=ie.memoizedProps.style,S=M!=null&&M.hasOwnProperty("display")?M.display:null,A.style.display=Cn("display",S))}catch(pe){nn(r,r.return,pe)}}}else if(ie.tag===6){if(te===null)try{ie.stateNode.nodeValue=W?"":ie.memoizedProps}catch(pe){nn(r,r.return,pe)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===r)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===r)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===r)break e;te===ie&&(te=null),ie=ie.return}te===ie&&(te=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Ft(s,r),or(r),m&4&&Gg(r);break;case 21:break;default:Ft(s,r),or(r)}}function or(r){var s=r.flags;if(s&2){try{e:{for(var c=r.return;c!==null;){if(Wg(c)){var m=c;break e}c=c.return}throw Error(t(160))}switch(m.tag){case 5:var k=m.stateNode;m.flags&32&&(Re(k,""),m.flags&=-33);var v=qg(r);hd(r,v,k);break;case 3:case 4:var S=m.stateNode.containerInfo,A=qg(r);fd(r,A,S);break;default:throw Error(t(161))}}catch(M){nn(r,r.return,M)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function wS(r,s,c){fe=r,Yg(r)}function Yg(r,s,c){for(var m=(r.mode&1)!==0;fe!==null;){var k=fe,v=k.child;if(k.tag===22&&m){var S=k.memoizedState!==null||xl;if(!S){var A=k.alternate,M=A!==null&&A.memoizedState!==null||An;A=xl;var W=An;if(xl=S,(An=M)&&!W)for(fe=k;fe!==null;)S=fe,M=S.child,S.tag===22&&S.memoizedState!==null?Jg(k):M!==null?(M.return=S,fe=M):Jg(k);for(;v!==null;)fe=v,Yg(v),v=v.sibling;fe=k,xl=A,An=W}Xg(r)}else(k.subtreeFlags&8772)!==0&&v!==null?(v.return=k,fe=v):Xg(r)}}function Xg(r){for(;fe!==null;){var s=fe;if((s.flags&8772)!==0){var c=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:An||Sl(5,s);break;case 1:var m=s.stateNode;if(s.flags&4&&!An)if(c===null)m.componentDidMount();else{var k=s.elementType===s.type?c.memoizedProps:Ot(s.type,c.memoizedProps);m.componentDidUpdate(k,c.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var v=s.updateQueue;v!==null&&Zm(s,v,m);break;case 3:var S=s.updateQueue;if(S!==null){if(c=null,s.child!==null)switch(s.child.tag){case 5:c=s.child.stateNode;break;case 1:c=s.child.stateNode}Zm(s,S,c)}break;case 5:var A=s.stateNode;if(c===null&&s.flags&4){c=A;var M=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&c.focus();break;case"img":M.src&&(c.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var W=s.alternate;if(W!==null){var te=W.memoizedState;if(te!==null){var ie=te.dehydrated;ie!==null&&po(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||s.flags&512&&dd(s)}catch(ne){nn(s,s.return,ne)}}if(s===r){fe=null;break}if(c=s.sibling,c!==null){c.return=s.return,fe=c;break}fe=s.return}}function Zg(r){for(;fe!==null;){var s=fe;if(s===r){fe=null;break}var c=s.sibling;if(c!==null){c.return=s.return,fe=c;break}fe=s.return}}function Jg(r){for(;fe!==null;){var s=fe;try{switch(s.tag){case 0:case 11:case 15:var c=s.return;try{Sl(4,s)}catch(M){nn(s,c,M)}break;case 1:var m=s.stateNode;if(typeof m.componentDidMount=="function"){var k=s.return;try{m.componentDidMount()}catch(M){nn(s,k,M)}}var v=s.return;try{dd(s)}catch(M){nn(s,v,M)}break;case 5:var S=s.return;try{dd(s)}catch(M){nn(s,S,M)}}}catch(M){nn(s,s.return,M)}if(s===r){fe=null;break}var A=s.sibling;if(A!==null){A.return=s.return,fe=A;break}fe=s.return}}var xS=Math.ceil,_l=R.ReactCurrentDispatcher,pd=R.ReactCurrentOwner,wt=R.ReactCurrentBatchConfig,Le=0,vn=null,un=null,xn=0,ct=0,xs=Wr(0),gn=0,Oo=null,Ai=0,Cl=0,md=0,No=null,Zn=null,gd=0,Ss=1/0,Tr=null,Tl=!1,yd=null,Xr=null,jl=!1,Zr=null,El=0,Fo=0,kd=null,Al=-1,Pl=0;function Bn(){return(Le&6)!==0?sn():Al!==-1?Al:Al=sn()}function Jr(r){return(r.mode&1)===0?1:(Le&2)!==0&&xn!==0?xn&-xn:oS.transition!==null?(Pl===0&&(Pl=qp()),Pl):(r=Ve,r!==0||(r=window.event,r=r===void 0?16:nm(r.type)),r)}function Vt(r,s,c,m){if(50<Fo)throw Fo=0,kd=null,Error(t(185));lo(r,c,m),((Le&2)===0||r!==vn)&&(r===vn&&((Le&2)===0&&(Cl|=c),gn===4&&ei(r,xn)),Jn(r,m),c===1&&Le===0&&(s.mode&1)===0&&(Ss=sn()+500,sl&&Kr()))}function Jn(r,s){var c=r.callbackNode;o1(r,s);var m=Va(r,r===vn?xn:0);if(m===0)c!==null&&$p(c),r.callbackNode=null,r.callbackPriority=0;else if(s=m&-m,r.callbackPriority!==s){if(c!=null&&$p(c),s===1)r.tag===0?sS(ny.bind(null,r)):Vm(ny.bind(null,r)),nS(function(){(Le&6)===0&&Kr()}),c=null;else{switch(Kp(m)){case 1:c=Xu;break;case 4:c=Hp;break;case 16:c=La;break;case 536870912:c=Wp;break;default:c=La}c=uy(c,ey.bind(null,r))}r.callbackPriority=s,r.callbackNode=c}}function ey(r,s){if(Al=-1,Pl=0,(Le&6)!==0)throw Error(t(327));var c=r.callbackNode;if(_s()&&r.callbackNode!==c)return null;var m=Va(r,r===vn?xn:0);if(m===0)return null;if((m&30)!==0||(m&r.expiredLanes)!==0||s)s=Rl(r,m);else{s=m;var k=Le;Le|=2;var v=ry();(vn!==r||xn!==s)&&(Tr=null,Ss=sn()+500,Ri(r,s));do try{CS();break}catch(A){ty(r,A)}while(!0);Lc(),_l.current=v,Le=k,un!==null?s=0:(vn=null,xn=0,s=gn)}if(s!==0){if(s===2&&(k=Zu(r),k!==0&&(m=k,s=vd(r,k))),s===1)throw c=Oo,Ri(r,0),ei(r,m),Jn(r,sn()),c;if(s===6)ei(r,m);else{if(k=r.current.alternate,(m&30)===0&&!SS(k)&&(s=Rl(r,m),s===2&&(v=Zu(r),v!==0&&(m=v,s=vd(r,v))),s===1))throw c=Oo,Ri(r,0),ei(r,m),Jn(r,sn()),c;switch(r.finishedWork=k,r.finishedLanes=m,s){case 0:case 1:throw Error(t(345));case 2:Ii(r,Zn,Tr);break;case 3:if(ei(r,m),(m&130023424)===m&&(s=gd+500-sn(),10<s)){if(Va(r,0)!==0)break;if(k=r.suspendedLanes,(k&m)!==m){Bn(),r.pingedLanes|=r.suspendedLanes&k;break}r.timeoutHandle=_c(Ii.bind(null,r,Zn,Tr),s);break}Ii(r,Zn,Tr);break;case 4:if(ei(r,m),(m&4194240)===m)break;for(s=r.eventTimes,k=-1;0<m;){var S=31-Mt(m);v=1<<S,S=s[S],S>k&&(k=S),m&=~v}if(m=k,m=sn()-m,m=(120>m?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*xS(m/1960))-m,10<m){r.timeoutHandle=_c(Ii.bind(null,r,Zn,Tr),m);break}Ii(r,Zn,Tr);break;case 5:Ii(r,Zn,Tr);break;default:throw Error(t(329))}}}return Jn(r,sn()),r.callbackNode===c?ey.bind(null,r):null}function vd(r,s){var c=No;return r.current.memoizedState.isDehydrated&&(Ri(r,s).flags|=256),r=Rl(r,s),r!==2&&(s=Zn,Zn=c,s!==null&&bd(s)),r}function bd(r){Zn===null?Zn=r:Zn.push.apply(Zn,r)}function SS(r){for(var s=r;;){if(s.flags&16384){var c=s.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var m=0;m<c.length;m++){var k=c[m],v=k.getSnapshot;k=k.value;try{if(!Dt(v(),k))return!1}catch{return!1}}}if(c=s.child,s.subtreeFlags&16384&&c!==null)c.return=s,s=c;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ei(r,s){for(s&=~md,s&=~Cl,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var c=31-Mt(s),m=1<<c;r[c]=-1,s&=~m}}function ny(r){if((Le&6)!==0)throw Error(t(327));_s();var s=Va(r,0);if((s&1)===0)return Jn(r,sn()),null;var c=Rl(r,s);if(r.tag!==0&&c===2){var m=Zu(r);m!==0&&(s=m,c=vd(r,m))}if(c===1)throw c=Oo,Ri(r,0),ei(r,s),Jn(r,sn()),c;if(c===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ii(r,Zn,Tr),Jn(r,sn()),null}function zd(r,s){var c=Le;Le|=1;try{return r(s)}finally{Le=c,Le===0&&(Ss=sn()+500,sl&&Kr())}}function Pi(r){Zr!==null&&Zr.tag===0&&(Le&6)===0&&_s();var s=Le;Le|=1;var c=wt.transition,m=Ve;try{if(wt.transition=null,Ve=1,r)return r()}finally{Ve=m,wt.transition=c,Le=s,(Le&6)===0&&Kr()}}function wd(){ct=xs.current,Ke(xs)}function Ri(r,s){r.finishedWork=null,r.finishedLanes=0;var c=r.timeoutHandle;if(c!==-1&&(r.timeoutHandle=-1,eS(c)),un!==null)for(c=un.return;c!==null;){var m=c;switch(Pc(m),m.tag){case 1:m=m.type.childContextTypes,m!=null&&rl();break;case 3:bs(),Ke(Qn),Ke(Tn),Hc();break;case 5:Uc(m);break;case 4:bs();break;case 13:Ke(Ze);break;case 19:Ke(Ze);break;case 10:Oc(m.type._context);break;case 22:case 23:wd()}c=c.return}if(vn=r,un=r=ni(r.current,null),xn=ct=s,gn=0,Oo=null,md=Cl=Ai=0,Zn=No=null,Ti!==null){for(s=0;s<Ti.length;s++)if(c=Ti[s],m=c.interleaved,m!==null){c.interleaved=null;var k=m.next,v=c.pending;if(v!==null){var S=v.next;v.next=k,m.next=S}c.pending=m}Ti=null}return r}function ty(r,s){do{var c=un;try{if(Lc(),ml.current=vl,gl){for(var m=Je.memoizedState;m!==null;){var k=m.queue;k!==null&&(k.pending=null),m=m.next}gl=!1}if(Ei=0,kn=mn=Je=null,Po=!1,Ro=0,pd.current=null,c===null||c.return===null){gn=1,Oo=s,un=null;break}e:{var v=r,S=c.return,A=c,M=s;if(s=xn,A.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var W=M,te=A,ie=te.tag;if((te.mode&1)===0&&(ie===0||ie===11||ie===15)){var ne=te.alternate;ne?(te.updateQueue=ne.updateQueue,te.memoizedState=ne.memoizedState,te.lanes=ne.lanes):(te.updateQueue=null,te.memoizedState=null)}var de=Tg(S);if(de!==null){de.flags&=-257,jg(de,S,A,v,s),de.mode&1&&Cg(v,W,s),s=de,M=W;var he=s.updateQueue;if(he===null){var pe=new Set;pe.add(M),s.updateQueue=pe}else he.add(M);break e}else{if((s&1)===0){Cg(v,W,s),xd();break e}M=Error(t(426))}}else if(Ye&&A.mode&1){var on=Tg(S);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),jg(on,S,A,v,s),Mc(zs(M,A));break e}}v=M=zs(M,A),gn!==4&&(gn=2),No===null?No=[v]:No.push(v),v=S;do{switch(v.tag){case 3:v.flags|=65536,s&=-s,v.lanes|=s;var V=Sg(v,M,s);Xm(v,V);break e;case 1:A=M;var O=v.type,U=v.stateNode;if((v.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(Xr===null||!Xr.has(U)))){v.flags|=65536,s&=-s,v.lanes|=s;var ae=_g(v,A,s);Xm(v,ae);break e}}v=v.return}while(v!==null)}sy(c)}catch(me){s=me,un===c&&c!==null&&(un=c=c.return);continue}break}while(!0)}function ry(){var r=_l.current;return _l.current=vl,r===null?vl:r}function xd(){(gn===0||gn===3||gn===2)&&(gn=4),vn===null||(Ai&268435455)===0&&(Cl&268435455)===0||ei(vn,xn)}function Rl(r,s){var c=Le;Le|=2;var m=ry();(vn!==r||xn!==s)&&(Tr=null,Ri(r,s));do try{_S();break}catch(k){ty(r,k)}while(!0);if(Lc(),Le=c,_l.current=m,un!==null)throw Error(t(261));return vn=null,xn=0,gn}function _S(){for(;un!==null;)iy(un)}function CS(){for(;un!==null&&!Xx();)iy(un)}function iy(r){var s=ly(r.alternate,r,ct);r.memoizedProps=r.pendingProps,s===null?sy(r):un=s,pd.current=null}function sy(r){var s=r;do{var c=s.alternate;if(r=s.return,(s.flags&32768)===0){if(c=kS(c,s,ct),c!==null){un=c;return}}else{if(c=vS(c,s),c!==null){c.flags&=32767,un=c;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gn=6,un=null;return}}if(s=s.sibling,s!==null){un=s;return}un=s=r}while(s!==null);gn===0&&(gn=5)}function Ii(r,s,c){var m=Ve,k=wt.transition;try{wt.transition=null,Ve=1,TS(r,s,c,m)}finally{wt.transition=k,Ve=m}return null}function TS(r,s,c,m){do _s();while(Zr!==null);if((Le&6)!==0)throw Error(t(327));c=r.finishedWork;var k=r.finishedLanes;if(c===null)return null;if(r.finishedWork=null,r.finishedLanes=0,c===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var v=c.lanes|c.childLanes;if(a1(r,v),r===vn&&(un=vn=null,xn=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||jl||(jl=!0,uy(La,function(){return _s(),null})),v=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||v){v=wt.transition,wt.transition=null;var S=Ve;Ve=1;var A=Le;Le|=4,pd.current=null,zS(r,c),Qg(c,r),K1(xc),$a=!!wc,xc=wc=null,r.current=c,wS(c),Zx(),Le=A,Ve=S,wt.transition=v}else r.current=c;if(jl&&(jl=!1,Zr=r,El=k),v=r.pendingLanes,v===0&&(Xr=null),n1(c.stateNode),Jn(r,sn()),s!==null)for(m=r.onRecoverableError,c=0;c<s.length;c++)k=s[c],m(k.value,{componentStack:k.stack,digest:k.digest});if(Tl)throw Tl=!1,r=yd,yd=null,r;return(El&1)!==0&&r.tag!==0&&_s(),v=r.pendingLanes,(v&1)!==0?r===kd?Fo++:(Fo=0,kd=r):Fo=0,Kr(),null}function _s(){if(Zr!==null){var r=Kp(El),s=wt.transition,c=Ve;try{if(wt.transition=null,Ve=16>r?16:r,Zr===null)var m=!1;else{if(r=Zr,Zr=null,El=0,(Le&6)!==0)throw Error(t(331));var k=Le;for(Le|=4,fe=r.current;fe!==null;){var v=fe,S=v.child;if((fe.flags&16)!==0){var A=v.deletions;if(A!==null){for(var M=0;M<A.length;M++){var W=A[M];for(fe=W;fe!==null;){var te=fe;switch(te.tag){case 0:case 11:case 15:Lo(8,te,v)}var ie=te.child;if(ie!==null)ie.return=te,fe=ie;else for(;fe!==null;){te=fe;var ne=te.sibling,de=te.return;if(Hg(te),te===W){fe=null;break}if(ne!==null){ne.return=de,fe=ne;break}fe=de}}}var he=v.alternate;if(he!==null){var pe=he.child;if(pe!==null){he.child=null;do{var on=pe.sibling;pe.sibling=null,pe=on}while(pe!==null)}}fe=v}}if((v.subtreeFlags&2064)!==0&&S!==null)S.return=v,fe=S;else e:for(;fe!==null;){if(v=fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Lo(9,v,v.return)}var V=v.sibling;if(V!==null){V.return=v.return,fe=V;break e}fe=v.return}}var O=r.current;for(fe=O;fe!==null;){S=fe;var U=S.child;if((S.subtreeFlags&2064)!==0&&U!==null)U.return=S,fe=U;else e:for(S=O;fe!==null;){if(A=fe,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Sl(9,A)}}catch(me){nn(A,A.return,me)}if(A===S){fe=null;break e}var ae=A.sibling;if(ae!==null){ae.return=A.return,fe=ae;break e}fe=A.return}}if(Le=k,Kr(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Oa,r)}catch{}m=!0}return m}finally{Ve=c,wt.transition=s}}return!1}function oy(r,s,c){s=zs(c,s),s=Sg(r,s,1),r=Qr(r,s,1),s=Bn(),r!==null&&(lo(r,1,s),Jn(r,s))}function nn(r,s,c){if(r.tag===3)oy(r,r,c);else for(;s!==null;){if(s.tag===3){oy(s,r,c);break}else if(s.tag===1){var m=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(Xr===null||!Xr.has(m))){r=zs(c,r),r=_g(s,r,1),s=Qr(s,r,1),r=Bn(),s!==null&&(lo(s,1,r),Jn(s,r));break}}s=s.return}}function jS(r,s,c){var m=r.pingCache;m!==null&&m.delete(s),s=Bn(),r.pingedLanes|=r.suspendedLanes&c,vn===r&&(xn&c)===c&&(gn===4||gn===3&&(xn&130023424)===xn&&500>sn()-gd?Ri(r,0):md|=c),Jn(r,s)}function ay(r,s){s===0&&((r.mode&1)===0?s=1:(s=Fa,Fa<<=1,(Fa&130023424)===0&&(Fa=4194304)));var c=Bn();r=Sr(r,s),r!==null&&(lo(r,s,c),Jn(r,c))}function ES(r){var s=r.memoizedState,c=0;s!==null&&(c=s.retryLane),ay(r,c)}function AS(r,s){var c=0;switch(r.tag){case 13:var m=r.stateNode,k=r.memoizedState;k!==null&&(c=k.retryLane);break;case 19:m=r.stateNode;break;default:throw Error(t(314))}m!==null&&m.delete(s),ay(r,c)}var ly;ly=function(r,s,c){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qn.current)Xn=!0;else{if((r.lanes&c)===0&&(s.flags&128)===0)return Xn=!1,yS(r,s,c);Xn=(r.flags&131072)!==0}else Xn=!1,Ye&&(s.flags&1048576)!==0&&Bm(s,al,s.index);switch(s.lanes=0,s.tag){case 2:var m=s.type;wl(r,s),r=s.pendingProps;var k=hs(s,Tn.current);vs(s,c),k=Kc(null,s,m,r,k,c);var v=Gc();return s.flags|=1,typeof k=="object"&&k!==null&&typeof k.render=="function"&&k.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yn(m)?(v=!0,il(s)):v=!1,s.memoizedState=k.state!==null&&k.state!==void 0?k.state:null,Vc(s),k.updater=bl,s.stateNode=k,k._reactInternals=s,ed(s,m,r,c),s=id(null,s,m,!0,v,c)):(s.tag=0,Ye&&v&&Ac(s),Vn(null,s,k,c),s=s.child),s;case 16:m=s.elementType;e:{switch(wl(r,s),r=s.pendingProps,k=m._init,m=k(m._payload),s.type=m,k=s.tag=RS(m),r=Ot(m,r),k){case 0:s=rd(null,s,m,r,c);break e;case 1:s=Mg(null,s,m,r,c);break e;case 11:s=Eg(null,s,m,r,c);break e;case 14:s=Ag(null,s,m,Ot(m.type,r),c);break e}throw Error(t(306,m,""))}return s;case 0:return m=s.type,k=s.pendingProps,k=s.elementType===m?k:Ot(m,k),rd(r,s,m,k,c);case 1:return m=s.type,k=s.pendingProps,k=s.elementType===m?k:Ot(m,k),Mg(r,s,m,k,c);case 3:e:{if(Dg(s),r===null)throw Error(t(387));m=s.pendingProps,v=s.memoizedState,k=v.element,Ym(r,s),hl(s,m,null,c);var S=s.memoizedState;if(m=S.element,v.isDehydrated)if(v={element:m,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},s.updateQueue.baseState=v,s.memoizedState=v,s.flags&256){k=zs(Error(t(423)),s),s=Lg(r,s,m,c,k);break e}else if(m!==k){k=zs(Error(t(424)),s),s=Lg(r,s,m,c,k);break e}else for(ut=Hr(s.stateNode.containerInfo.firstChild),lt=s,Ye=!0,Lt=null,c=Gm(s,null,m,c),s.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(gs(),m===k){s=Cr(r,s,c);break e}Vn(r,s,m,c)}s=s.child}return s;case 5:return Jm(s),r===null&&Ic(s),m=s.type,k=s.pendingProps,v=r!==null?r.memoizedProps:null,S=k.children,Sc(m,k)?S=null:v!==null&&Sc(m,v)&&(s.flags|=32),Ig(r,s),Vn(r,s,S,c),s.child;case 6:return r===null&&Ic(s),null;case 13:return Og(r,s,c);case 4:return Bc(s,s.stateNode.containerInfo),m=s.pendingProps,r===null?s.child=ys(s,null,m,c):Vn(r,s,m,c),s.child;case 11:return m=s.type,k=s.pendingProps,k=s.elementType===m?k:Ot(m,k),Eg(r,s,m,k,c);case 7:return Vn(r,s,s.pendingProps,c),s.child;case 8:return Vn(r,s,s.pendingProps.children,c),s.child;case 12:return Vn(r,s,s.pendingProps.children,c),s.child;case 10:e:{if(m=s.type._context,k=s.pendingProps,v=s.memoizedProps,S=k.value,He(cl,m._currentValue),m._currentValue=S,v!==null)if(Dt(v.value,S)){if(v.children===k.children&&!Qn.current){s=Cr(r,s,c);break e}}else for(v=s.child,v!==null&&(v.return=s);v!==null;){var A=v.dependencies;if(A!==null){S=v.child;for(var M=A.firstContext;M!==null;){if(M.context===m){if(v.tag===1){M=_r(-1,c&-c),M.tag=2;var W=v.updateQueue;if(W!==null){W=W.shared;var te=W.pending;te===null?M.next=M:(M.next=te.next,te.next=M),W.pending=M}}v.lanes|=c,M=v.alternate,M!==null&&(M.lanes|=c),Nc(v.return,c,s),A.lanes|=c;break}M=M.next}}else if(v.tag===10)S=v.type===s.type?null:v.child;else if(v.tag===18){if(S=v.return,S===null)throw Error(t(341));S.lanes|=c,A=S.alternate,A!==null&&(A.lanes|=c),Nc(S,c,s),S=v.sibling}else S=v.child;if(S!==null)S.return=v;else for(S=v;S!==null;){if(S===s){S=null;break}if(v=S.sibling,v!==null){v.return=S.return,S=v;break}S=S.return}v=S}Vn(r,s,k.children,c),s=s.child}return s;case 9:return k=s.type,m=s.pendingProps.children,vs(s,c),k=bt(k),m=m(k),s.flags|=1,Vn(r,s,m,c),s.child;case 14:return m=s.type,k=Ot(m,s.pendingProps),k=Ot(m.type,k),Ag(r,s,m,k,c);case 15:return Pg(r,s,s.type,s.pendingProps,c);case 17:return m=s.type,k=s.pendingProps,k=s.elementType===m?k:Ot(m,k),wl(r,s),s.tag=1,Yn(m)?(r=!0,il(s)):r=!1,vs(s,c),wg(s,m,k),ed(s,m,k,c),id(null,s,m,!0,r,c);case 19:return Fg(r,s,c);case 22:return Rg(r,s,c)}throw Error(t(156,s.tag))};function uy(r,s){return Up(r,s)}function PS(r,s,c,m){this.tag=r,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(r,s,c,m){return new PS(r,s,c,m)}function Sd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function RS(r){if(typeof r=="function")return Sd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===G)return 11;if(r===re)return 14}return 2}function ni(r,s){var c=r.alternate;return c===null?(c=xt(r.tag,s,r.key,r.mode),c.elementType=r.elementType,c.type=r.type,c.stateNode=r.stateNode,c.alternate=r,r.alternate=c):(c.pendingProps=s,c.type=r.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=r.flags&14680064,c.childLanes=r.childLanes,c.lanes=r.lanes,c.child=r.child,c.memoizedProps=r.memoizedProps,c.memoizedState=r.memoizedState,c.updateQueue=r.updateQueue,s=r.dependencies,c.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},c.sibling=r.sibling,c.index=r.index,c.ref=r.ref,c}function Il(r,s,c,m,k,v){var S=2;if(m=r,typeof r=="function")Sd(r)&&(S=1);else if(typeof r=="string")S=5;else e:switch(r){case $:return Mi(c.children,k,v,s);case Y:S=8,k|=8;break;case K:return r=xt(12,c,s,k|2),r.elementType=K,r.lanes=v,r;case ee:return r=xt(13,c,s,k),r.elementType=ee,r.lanes=v,r;case B:return r=xt(19,c,s,k),r.elementType=B,r.lanes=v,r;case X:return Ml(c,k,v,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case L:S=10;break e;case J:S=9;break e;case G:S=11;break e;case re:S=14;break e;case ue:S=16,m=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=xt(S,c,s,k),s.elementType=r,s.type=m,s.lanes=v,s}function Mi(r,s,c,m){return r=xt(7,r,m,s),r.lanes=c,r}function Ml(r,s,c,m){return r=xt(22,r,m,s),r.elementType=X,r.lanes=c,r.stateNode={isHidden:!1},r}function _d(r,s,c){return r=xt(6,r,null,s),r.lanes=c,r}function Cd(r,s,c){return s=xt(4,r.children!==null?r.children:[],r.key,s),s.lanes=c,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function IS(r,s,c,m,k){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=m,this.onRecoverableError=k,this.mutableSourceEagerHydrationData=null}function Td(r,s,c,m,k,v,S,A,M){return r=new IS(r,s,c,A,M),s===1?(s=1,v===!0&&(s|=8)):s=0,v=xt(3,null,null,s),r.current=v,v.stateNode=r,v.memoizedState={element:m,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(v),r}function MS(r,s,c){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:m==null?null:""+m,children:r,containerInfo:s,implementation:c}}function cy(r){if(!r)return qr;r=r._reactInternals;e:{if(wi(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var c=r.type;if(Yn(c))return Nm(r,c,s)}return s}function dy(r,s,c,m,k,v,S,A,M){return r=Td(c,m,!0,r,k,v,S,A,M),r.context=cy(null),c=r.current,m=Bn(),k=Jr(c),v=_r(m,k),v.callback=s??null,Qr(c,v,k),r.current.lanes=k,lo(r,k,m),Jn(r,m),r}function Dl(r,s,c,m){var k=s.current,v=Bn(),S=Jr(k);return c=cy(c),s.context===null?s.context=c:s.pendingContext=c,s=_r(v,S),s.payload={element:r},m=m===void 0?null:m,m!==null&&(s.callback=m),r=Qr(k,s,S),r!==null&&(Vt(r,k,S,v),fl(r,k,S)),S}function Ll(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function fy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var c=r.retryLane;r.retryLane=c!==0&&c<s?c:s}}function jd(r,s){fy(r,s),(r=r.alternate)&&fy(r,s)}function DS(){return null}var hy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ed(r){this._internalRoot=r}Ol.prototype.render=Ed.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Dl(r,s,null,null)},Ol.prototype.unmount=Ed.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Pi(function(){Dl(null,r,null,null)}),s[br]=null}};function Ol(r){this._internalRoot=r}Ol.prototype.unstable_scheduleHydration=function(r){if(r){var s=Yp();r={blockedOn:null,target:r,priority:s};for(var c=0;c<Br.length&&s!==0&&s<Br[c].priority;c++);Br.splice(c,0,r),c===0&&Jp(r)}};function Ad(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Nl(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function py(){}function LS(r,s,c,m,k){if(k){if(typeof m=="function"){var v=m;m=function(){var W=Ll(S);v.call(W)}}var S=dy(s,m,r,0,null,!1,!1,"",py);return r._reactRootContainer=S,r[br]=S.current,xo(r.nodeType===8?r.parentNode:r),Pi(),S}for(;k=r.lastChild;)r.removeChild(k);if(typeof m=="function"){var A=m;m=function(){var W=Ll(M);A.call(W)}}var M=Td(r,0,!1,null,null,!1,!1,"",py);return r._reactRootContainer=M,r[br]=M.current,xo(r.nodeType===8?r.parentNode:r),Pi(function(){Dl(s,M,c,m)}),M}function Fl(r,s,c,m,k){var v=c._reactRootContainer;if(v){var S=v;if(typeof k=="function"){var A=k;k=function(){var M=Ll(S);A.call(M)}}Dl(s,S,r,k)}else S=LS(c,s,r,k,m);return Ll(S)}Gp=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var c=ao(s.pendingLanes);c!==0&&(ec(s,c|1),Jn(s,sn()),(Le&6)===0&&(Ss=sn()+500,Kr()))}break;case 13:Pi(function(){var m=Sr(r,1);if(m!==null){var k=Bn();Vt(m,r,1,k)}}),jd(r,1)}},nc=function(r){if(r.tag===13){var s=Sr(r,134217728);if(s!==null){var c=Bn();Vt(s,r,134217728,c)}jd(r,134217728)}},Qp=function(r){if(r.tag===13){var s=Jr(r),c=Sr(r,s);if(c!==null){var m=Bn();Vt(c,r,s,m)}jd(r,s)}},Yp=function(){return Ve},Xp=function(r,s){var c=Ve;try{return Ve=r,s()}finally{Ve=c}},rs=function(r,s,c){switch(s){case"input":if(Xt(r,c),s=c.name,c.type==="radio"&&s!=null){for(c=r;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<c.length;s++){var m=c[s];if(m!==r&&m.form===r.form){var k=tl(m);if(!k)throw Error(t(90));At(m),Xt(m,k)}}}break;case"textarea":es(r,c);break;case"select":s=c.value,s!=null&&qn(r,!!c.multiple,s,!1)}},Fe=zd,Ue=Pi;var OS={usingClientEntryPoint:!1,Events:[Co,ds,tl,Ia,_e,zd]},Vo={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NS={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Vp(r),r===null?null:r.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||DS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Oa=Vl.inject(NS),tr=Vl}catch{}}return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS,et.createPortal=function(r,s){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(s))throw Error(t(200));return MS(r,s,null,c)},et.createRoot=function(r,s){if(!Ad(r))throw Error(t(299));var c=!1,m="",k=hy;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(m=s.identifierPrefix),s.onRecoverableError!==void 0&&(k=s.onRecoverableError)),s=Td(r,1,!1,null,null,c,!1,m,k),r[br]=s.current,xo(r.nodeType===8?r.parentNode:r),new Ed(s)},et.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Vp(s),r=r===null?null:r.stateNode,r},et.flushSync=function(r){return Pi(r)},et.hydrate=function(r,s,c){if(!Nl(s))throw Error(t(200));return Fl(null,r,s,!0,c)},et.hydrateRoot=function(r,s,c){if(!Ad(r))throw Error(t(405));var m=c!=null&&c.hydratedSources||null,k=!1,v="",S=hy;if(c!=null&&(c.unstable_strictMode===!0&&(k=!0),c.identifierPrefix!==void 0&&(v=c.identifierPrefix),c.onRecoverableError!==void 0&&(S=c.onRecoverableError)),s=dy(s,null,r,1,c??null,k,!1,v,S),r[br]=s.current,xo(r),m)for(r=0;r<m.length;r++)c=m[r],k=c._getVersion,k=k(c._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[c,k]:s.mutableSourceEagerHydrationData.push(c,k);return new Ol(s)},et.render=function(r,s,c){if(!Nl(s))throw Error(t(200));return Fl(null,r,s,!1,c)},et.unmountComponentAtNode=function(r){if(!Nl(r))throw Error(t(40));return r._reactRootContainer?(Pi(function(){Fl(null,null,r,!1,function(){r._reactRootContainer=null,r[br]=null})}),!0):!1},et.unstable_batchedUpdates=zd,et.unstable_renderSubtreeIntoContainer=function(r,s,c,m){if(!Nl(c))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Fl(r,s,c,!1,m)},et.version="18.3.1-next-f1338f8080-20240426",et}var xy;function kb(){if(xy)return Md.exports;xy=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Md.exports=qS(),Md.exports}var Sy;function KS(){if(Sy)return Ul;Sy=1;var e=kb();return Ul.createRoot=e.createRoot,Ul.hydrateRoot=e.hydrateRoot,Ul}var GS=KS(),T=vh();const le=ju(T),QS=VS({__proto__:null,default:le},[T]),YS=1,XS=1e6;let Od=0;function ZS(){return Od=(Od+1)%Number.MAX_SAFE_INTEGER,Od.toString()}const Nd=new Map,_y=e=>{if(Nd.has(e))return;const n=setTimeout(()=>{Nd.delete(e),Xo({type:"REMOVE_TOAST",toastId:e})},XS);Nd.set(e,n)},JS=(e,n)=>{switch(n.type){case"ADD_TOAST":return{...e,toasts:[n.toast,...e.toasts].slice(0,YS)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(t=>t.id===n.toast.id?{...t,...n.toast}:t)};case"DISMISS_TOAST":{const{toastId:t}=n;return t?_y(t):e.toasts.forEach(i=>{_y(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===t||t===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return n.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(t=>t.id!==n.toastId)}}},nu=[];let tu={toasts:[]};function Xo(e){tu=JS(tu,e),nu.forEach(n=>{n(tu)})}function e_({...e}){const n=ZS(),t=o=>Xo({type:"UPDATE_TOAST",toast:{...o,id:n}}),i=()=>Xo({type:"DISMISS_TOAST",toastId:n});return Xo({type:"ADD_TOAST",toast:{...e,id:n,open:!0,onOpenChange:o=>{o||i()}}}),{id:n,dismiss:i,update:t}}function vb(){const[e,n]=T.useState(tu);return T.useEffect(()=>(nu.push(n),()=>{const t=nu.indexOf(n);t>-1&&nu.splice(t,1)}),[e]),{...e,toast:e_,dismiss:t=>Xo({type:"DISMISS_TOAST",toastId:t})}}var Eu=kb();const bb=ju(Eu);function fn(e,n,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e==null||e(o),t===!1||!o.defaultPrevented)return n==null?void 0:n(o)}}function Cy(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function zb(...e){return n=>{let t=!1;const i=e.map(o=>{const l=Cy(o,n);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let o=0;o<i.length;o++){const l=i[o];typeof l=="function"?l():Cy(e[o],null)}}}}function Et(...e){return T.useCallback(zb(...e),e)}function wa(e,n=[]){let t=[];function i(l,a){const d=T.createContext(a),f=t.length;t=[...t,a];const h=u=>{var w;const{scope:p,children:g,...b}=u,z=((w=p==null?void 0:p[e])==null?void 0:w[f])||d,x=T.useMemo(()=>b,Object.values(b));return N.jsx(z.Provider,{value:x,children:g})};h.displayName=l+"Provider";function y(u,p){var z;const g=((z=p==null?void 0:p[e])==null?void 0:z[f])||d,b=T.useContext(g);if(b)return b;if(a!==void 0)return a;throw new Error(`\`${u}\` must be used within \`${l}\``)}return[h,y]}const o=()=>{const l=t.map(a=>T.createContext(a));return function(d){const f=(d==null?void 0:d[e])||l;return T.useMemo(()=>({[`__scope${e}`]:{...d,[e]:f}}),[d,f])}};return o.scopeName=e,[i,n_(o,...n)]}function n_(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const i=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(l){const a=i.reduce((d,{useScope:f,scopeName:h})=>{const u=f(l)[`__scope${h}`];return{...d,...u}},{});return T.useMemo(()=>({[`__scope${n.scopeName}`]:a}),[a])}};return t.scopeName=n.scopeName,t}function fu(e){const n=r_(e),t=T.forwardRef((i,o)=>{const{children:l,...a}=i,d=T.Children.toArray(l),f=d.find(s_);if(f){const h=f.props.children,y=d.map(u=>u===f?T.Children.count(h)>1?T.Children.only(null):T.isValidElement(h)?h.props.children:null:u);return N.jsx(n,{...a,ref:o,children:T.isValidElement(h)?T.cloneElement(h,void 0,y):null})}return N.jsx(n,{...a,ref:o,children:l})});return t.displayName=`${e}.Slot`,t}var t_=fu("Slot");function r_(e){const n=T.forwardRef((t,i)=>{const{children:o,...l}=t;if(T.isValidElement(o)){const a=a_(o),d=o_(l,o.props);return o.type!==T.Fragment&&(d.ref=i?zb(i,a):a),T.cloneElement(o,d)}return T.Children.count(o)>1?T.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var wb=Symbol("radix.slottable");function i_(e){const n=({children:t})=>N.jsx(N.Fragment,{children:t});return n.displayName=`${e}.Slottable`,n.__radixId=wb,n}function s_(e){return T.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===wb}function o_(e,n){const t={...n};for(const i in n){const o=e[i],l=n[i];/^on[A-Z]/.test(i)?o&&l?t[i]=(...d)=>{l(...d),o(...d)}:o&&(t[i]=o):i==="style"?t[i]={...o,...l}:i==="className"&&(t[i]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}function a_(e){var i,o;let n=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function l_(e){const n=e+"CollectionProvider",[t,i]=wa(n),[o,l]=t(n,{collectionRef:{current:null},itemMap:new Map}),a=z=>{const{scope:x,children:w}=z,_=le.useRef(null),C=le.useRef(new Map).current;return N.jsx(o,{scope:x,itemMap:C,collectionRef:_,children:w})};a.displayName=n;const d=e+"CollectionSlot",f=fu(d),h=le.forwardRef((z,x)=>{const{scope:w,children:_}=z,C=l(d,w),R=Et(x,C.collectionRef);return N.jsx(f,{ref:R,children:_})});h.displayName=d;const y=e+"CollectionItemSlot",u="data-radix-collection-item",p=fu(y),g=le.forwardRef((z,x)=>{const{scope:w,children:_,...C}=z,R=le.useRef(null),D=Et(x,R),P=l(y,w);return le.useEffect(()=>(P.itemMap.set(R,{ref:R,...C}),()=>void P.itemMap.delete(R))),N.jsx(p,{[u]:"",ref:D,children:_})});g.displayName=y;function b(z){const x=l(e+"CollectionConsumer",z);return le.useCallback(()=>{const _=x.collectionRef.current;if(!_)return[];const C=Array.from(_.querySelectorAll(`[${u}]`));return Array.from(x.itemMap.values()).sort((P,$)=>C.indexOf(P.ref.current)-C.indexOf($.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:a,Slot:h,ItemSlot:g},b,i]}var u_=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_n=u_.reduce((e,n)=>{const t=fu(`Primitive.${n}`),i=T.forwardRef((o,l)=>{const{asChild:a,...d}=o,f=a?t:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),N.jsx(f,{...d,ref:l})});return i.displayName=`Primitive.${n}`,{...e,[n]:i}},{});function xb(e,n){e&&Eu.flushSync(()=>e.dispatchEvent(n))}function mr(e){const n=T.useRef(e);return T.useEffect(()=>{n.current=e}),T.useMemo(()=>(...t)=>{var i;return(i=n.current)==null?void 0:i.call(n,...t)},[])}function c_(e,n=globalThis==null?void 0:globalThis.document){const t=mr(e);T.useEffect(()=>{const i=o=>{o.key==="Escape"&&t(o)};return n.addEventListener("keydown",i,{capture:!0}),()=>n.removeEventListener("keydown",i,{capture:!0})},[t,n])}var d_="DismissableLayer",Sf="dismissableLayer.update",f_="dismissableLayer.pointerDownOutside",h_="dismissableLayer.focusOutside",Ty,Sb=T.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),bh=T.forwardRef((e,n)=>{const{disableOutsidePointerEvents:t=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:l,onInteractOutside:a,onDismiss:d,...f}=e,h=T.useContext(Sb),[y,u]=T.useState(null),p=(y==null?void 0:y.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,g]=T.useState({}),b=Et(n,$=>u($)),z=Array.from(h.layers),[x]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),w=z.indexOf(x),_=y?z.indexOf(y):-1,C=h.layersWithOutsidePointerEventsDisabled.size>0,R=_>=w,D=m_($=>{const Y=$.target,K=[...h.branches].some(L=>L.contains(Y));!R||K||(o==null||o($),a==null||a($),$.defaultPrevented||d==null||d())},p),P=g_($=>{const Y=$.target;[...h.branches].some(L=>L.contains(Y))||(l==null||l($),a==null||a($),$.defaultPrevented||d==null||d())},p);return c_($=>{_===h.layers.size-1&&(i==null||i($),!$.defaultPrevented&&d&&($.preventDefault(),d()))},p),T.useEffect(()=>{if(y)return t&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(Ty=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(y)),h.layers.add(y),jy(),()=>{t&&h.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Ty)}},[y,p,t,h]),T.useEffect(()=>()=>{y&&(h.layers.delete(y),h.layersWithOutsidePointerEventsDisabled.delete(y),jy())},[y,h]),T.useEffect(()=>{const $=()=>g({});return document.addEventListener(Sf,$),()=>document.removeEventListener(Sf,$)},[]),N.jsx(_n.div,{...f,ref:b,style:{pointerEvents:C?R?"auto":"none":void 0,...e.style},onFocusCapture:fn(e.onFocusCapture,P.onFocusCapture),onBlurCapture:fn(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:fn(e.onPointerDownCapture,D.onPointerDownCapture)})});bh.displayName=d_;var p_="DismissableLayerBranch",_b=T.forwardRef((e,n)=>{const t=T.useContext(Sb),i=T.useRef(null),o=Et(n,i);return T.useEffect(()=>{const l=i.current;if(l)return t.branches.add(l),()=>{t.branches.delete(l)}},[t.branches]),N.jsx(_n.div,{...e,ref:o})});_b.displayName=p_;function m_(e,n=globalThis==null?void 0:globalThis.document){const t=mr(e),i=T.useRef(!1),o=T.useRef(()=>{});return T.useEffect(()=>{const l=d=>{if(d.target&&!i.current){let f=function(){Cb(f_,t,h,{discrete:!0})};const h={originalEvent:d};d.pointerType==="touch"?(n.removeEventListener("click",o.current),o.current=f,n.addEventListener("click",o.current,{once:!0})):f()}else n.removeEventListener("click",o.current);i.current=!1},a=window.setTimeout(()=>{n.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(a),n.removeEventListener("pointerdown",l),n.removeEventListener("click",o.current)}},[n,t]),{onPointerDownCapture:()=>i.current=!0}}function g_(e,n=globalThis==null?void 0:globalThis.document){const t=mr(e),i=T.useRef(!1);return T.useEffect(()=>{const o=l=>{l.target&&!i.current&&Cb(h_,t,{originalEvent:l},{discrete:!1})};return n.addEventListener("focusin",o),()=>n.removeEventListener("focusin",o)},[n,t]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function jy(){const e=new CustomEvent(Sf);document.dispatchEvent(e)}function Cb(e,n,t,{discrete:i}){const o=t.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&o.addEventListener(e,n,{once:!0}),i?xb(o,l):o.dispatchEvent(l)}var y_=bh,k_=_b,Ki=globalThis!=null&&globalThis.document?T.useLayoutEffect:()=>{},v_="Portal",Tb=T.forwardRef((e,n)=>{var d;const{container:t,...i}=e,[o,l]=T.useState(!1);Ki(()=>l(!0),[]);const a=t||o&&((d=globalThis==null?void 0:globalThis.document)==null?void 0:d.body);return a?bb.createPortal(N.jsx(_n.div,{...i,ref:n}),a):null});Tb.displayName=v_;function b_(e,n){return T.useReducer((t,i)=>n[t][i]??t,e)}var zh=e=>{const{present:n,children:t}=e,i=z_(n),o=typeof t=="function"?t({present:i.isPresent}):T.Children.only(t),l=Et(i.ref,w_(o));return typeof t=="function"||i.isPresent?T.cloneElement(o,{ref:l}):null};zh.displayName="Presence";function z_(e){const[n,t]=T.useState(),i=T.useRef({}),o=T.useRef(e),l=T.useRef("none"),a=e?"mounted":"unmounted",[d,f]=b_(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return T.useEffect(()=>{const h=$l(i.current);l.current=d==="mounted"?h:"none"},[d]),Ki(()=>{const h=i.current,y=o.current;if(y!==e){const p=l.current,g=$l(h);e?f("MOUNT"):g==="none"||(h==null?void 0:h.display)==="none"?f("UNMOUNT"):f(y&&p!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),Ki(()=>{if(n){let h;const y=n.ownerDocument.defaultView??window,u=g=>{const z=$l(i.current).includes(g.animationName);if(g.target===n&&z&&(f("ANIMATION_END"),!o.current)){const x=n.style.animationFillMode;n.style.animationFillMode="forwards",h=y.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=x)})}},p=g=>{g.target===n&&(l.current=$l(i.current))};return n.addEventListener("animationstart",p),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{y.clearTimeout(h),n.removeEventListener("animationstart",p),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:T.useCallback(h=>{h&&(i.current=getComputedStyle(h)),t(h)},[])}}function $l(e){return(e==null?void 0:e.animationName)||"none"}function w_(e){var i,o;let n=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function jb({prop:e,defaultProp:n,onChange:t=()=>{}}){const[i,o]=x_({defaultProp:n,onChange:t}),l=e!==void 0,a=l?e:i,d=mr(t),f=T.useCallback(h=>{if(l){const u=typeof h=="function"?h(e):h;u!==e&&d(u)}else o(h)},[l,e,o,d]);return[a,f]}function x_({defaultProp:e,onChange:n}){const t=T.useState(e),[i]=t,o=T.useRef(i),l=mr(n);return T.useEffect(()=>{o.current!==i&&(l(i),o.current=i)},[i,o,l]),t}var S_="VisuallyHidden",Au=T.forwardRef((e,n)=>N.jsx(_n.span,{...e,ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Au.displayName=S_;var __=Au,wh="ToastProvider",[xh,C_,T_]=l_("Toast"),[Eb,$4]=wa("Toast",[T_]),[j_,Pu]=Eb(wh),Ab=e=>{const{__scopeToast:n,label:t="Notification",duration:i=5e3,swipeDirection:o="right",swipeThreshold:l=50,children:a}=e,[d,f]=T.useState(null),[h,y]=T.useState(0),u=T.useRef(!1),p=T.useRef(!1);return t.trim()||console.error(`Invalid prop \`label\` supplied to \`${wh}\`. Expected non-empty \`string\`.`),N.jsx(xh.Provider,{scope:n,children:N.jsx(j_,{scope:n,label:t,duration:i,swipeDirection:o,swipeThreshold:l,toastCount:h,viewport:d,onViewportChange:f,onToastAdd:T.useCallback(()=>y(g=>g+1),[]),onToastRemove:T.useCallback(()=>y(g=>g-1),[]),isFocusedToastEscapeKeyDownRef:u,isClosePausedRef:p,children:a})})};Ab.displayName=wh;var Pb="ToastViewport",E_=["F8"],_f="toast.viewportPause",Cf="toast.viewportResume",Rb=T.forwardRef((e,n)=>{const{__scopeToast:t,hotkey:i=E_,label:o="Notifications ({hotkey})",...l}=e,a=Pu(Pb,t),d=C_(t),f=T.useRef(null),h=T.useRef(null),y=T.useRef(null),u=T.useRef(null),p=Et(n,u,a.onViewportChange),g=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=a.toastCount>0;T.useEffect(()=>{const x=w=>{var C;i.length!==0&&i.every(R=>w[R]||w.code===R)&&((C=u.current)==null||C.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[i]),T.useEffect(()=>{const x=f.current,w=u.current;if(b&&x&&w){const _=()=>{if(!a.isClosePausedRef.current){const P=new CustomEvent(_f);w.dispatchEvent(P),a.isClosePausedRef.current=!0}},C=()=>{if(a.isClosePausedRef.current){const P=new CustomEvent(Cf);w.dispatchEvent(P),a.isClosePausedRef.current=!1}},R=P=>{!x.contains(P.relatedTarget)&&C()},D=()=>{x.contains(document.activeElement)||C()};return x.addEventListener("focusin",_),x.addEventListener("focusout",R),x.addEventListener("pointermove",_),x.addEventListener("pointerleave",D),window.addEventListener("blur",_),window.addEventListener("focus",C),()=>{x.removeEventListener("focusin",_),x.removeEventListener("focusout",R),x.removeEventListener("pointermove",_),x.removeEventListener("pointerleave",D),window.removeEventListener("blur",_),window.removeEventListener("focus",C)}}},[b,a.isClosePausedRef]);const z=T.useCallback(({tabbingDirection:x})=>{const _=d().map(C=>{const R=C.ref.current,D=[R,...U_(R)];return x==="forwards"?D:D.reverse()});return(x==="forwards"?_.reverse():_).flat()},[d]);return T.useEffect(()=>{const x=u.current;if(x){const w=_=>{var D,P,$;const C=_.altKey||_.ctrlKey||_.metaKey;if(_.key==="Tab"&&!C){const Y=document.activeElement,K=_.shiftKey;if(_.target===x&&K){(D=h.current)==null||D.focus();return}const G=z({tabbingDirection:K?"backwards":"forwards"}),ee=G.findIndex(B=>B===Y);Fd(G.slice(ee+1))?_.preventDefault():K?(P=h.current)==null||P.focus():($=y.current)==null||$.focus()}};return x.addEventListener("keydown",w),()=>x.removeEventListener("keydown",w)}},[d,z]),N.jsxs(k_,{ref:f,role:"region","aria-label":o.replace("{hotkey}",g),tabIndex:-1,style:{pointerEvents:b?void 0:"none"},children:[b&&N.jsx(Tf,{ref:h,onFocusFromOutsideViewport:()=>{const x=z({tabbingDirection:"forwards"});Fd(x)}}),N.jsx(xh.Slot,{scope:t,children:N.jsx(_n.ol,{tabIndex:-1,...l,ref:p})}),b&&N.jsx(Tf,{ref:y,onFocusFromOutsideViewport:()=>{const x=z({tabbingDirection:"backwards"});Fd(x)}})]})});Rb.displayName=Pb;var Ib="ToastFocusProxy",Tf=T.forwardRef((e,n)=>{const{__scopeToast:t,onFocusFromOutsideViewport:i,...o}=e,l=Pu(Ib,t);return N.jsx(Au,{"aria-hidden":!0,tabIndex:0,...o,ref:n,style:{position:"fixed"},onFocus:a=>{var h;const d=a.relatedTarget;!((h=l.viewport)!=null&&h.contains(d))&&i()}})});Tf.displayName=Ib;var Ru="Toast",A_="toast.swipeStart",P_="toast.swipeMove",R_="toast.swipeCancel",I_="toast.swipeEnd",Mb=T.forwardRef((e,n)=>{const{forceMount:t,open:i,defaultOpen:o,onOpenChange:l,...a}=e,[d=!0,f]=jb({prop:i,defaultProp:o,onChange:l});return N.jsx(zh,{present:t||d,children:N.jsx(L_,{open:d,...a,ref:n,onClose:()=>f(!1),onPause:mr(e.onPause),onResume:mr(e.onResume),onSwipeStart:fn(e.onSwipeStart,h=>{h.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:fn(e.onSwipeMove,h=>{const{x:y,y:u}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","move"),h.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${y}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${u}px`)}),onSwipeCancel:fn(e.onSwipeCancel,h=>{h.currentTarget.setAttribute("data-swipe","cancel"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:fn(e.onSwipeEnd,h=>{const{x:y,y:u}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","end"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${y}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${u}px`),f(!1)})})})});Mb.displayName=Ru;var[M_,D_]=Eb(Ru,{onClose(){}}),L_=T.forwardRef((e,n)=>{const{__scopeToast:t,type:i="foreground",duration:o,open:l,onClose:a,onEscapeKeyDown:d,onPause:f,onResume:h,onSwipeStart:y,onSwipeMove:u,onSwipeCancel:p,onSwipeEnd:g,...b}=e,z=Pu(Ru,t),[x,w]=T.useState(null),_=Et(n,B=>w(B)),C=T.useRef(null),R=T.useRef(null),D=o||z.duration,P=T.useRef(0),$=T.useRef(D),Y=T.useRef(0),{onToastAdd:K,onToastRemove:L}=z,J=mr(()=>{var re;(x==null?void 0:x.contains(document.activeElement))&&((re=z.viewport)==null||re.focus()),a()}),G=T.useCallback(B=>{!B||B===1/0||(window.clearTimeout(Y.current),P.current=new Date().getTime(),Y.current=window.setTimeout(J,B))},[J]);T.useEffect(()=>{const B=z.viewport;if(B){const re=()=>{G($.current),h==null||h()},ue=()=>{const X=new Date().getTime()-P.current;$.current=$.current-X,window.clearTimeout(Y.current),f==null||f()};return B.addEventListener(_f,ue),B.addEventListener(Cf,re),()=>{B.removeEventListener(_f,ue),B.removeEventListener(Cf,re)}}},[z.viewport,D,f,h,G]),T.useEffect(()=>{l&&!z.isClosePausedRef.current&&G(D)},[l,D,z.isClosePausedRef,G]),T.useEffect(()=>(K(),()=>L()),[K,L]);const ee=T.useMemo(()=>x?Bb(x):null,[x]);return z.viewport?N.jsxs(N.Fragment,{children:[ee&&N.jsx(O_,{__scopeToast:t,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:ee}),N.jsx(M_,{scope:t,onClose:J,children:Eu.createPortal(N.jsx(xh.ItemSlot,{scope:t,children:N.jsx(y_,{asChild:!0,onEscapeKeyDown:fn(d,()=>{z.isFocusedToastEscapeKeyDownRef.current||J(),z.isFocusedToastEscapeKeyDownRef.current=!1}),children:N.jsx(_n.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":z.swipeDirection,...b,ref:_,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:fn(e.onKeyDown,B=>{B.key==="Escape"&&(d==null||d(B.nativeEvent),B.nativeEvent.defaultPrevented||(z.isFocusedToastEscapeKeyDownRef.current=!0,J()))}),onPointerDown:fn(e.onPointerDown,B=>{B.button===0&&(C.current={x:B.clientX,y:B.clientY})}),onPointerMove:fn(e.onPointerMove,B=>{if(!C.current)return;const re=B.clientX-C.current.x,ue=B.clientY-C.current.y,X=!!R.current,F=["left","right"].includes(z.swipeDirection),q=["left","up"].includes(z.swipeDirection)?Math.min:Math.max,j=F?q(0,re):0,I=F?0:q(0,ue),H=B.pointerType==="touch"?10:2,E={x:j,y:I},ce={originalEvent:B,delta:E};X?(R.current=E,Hl(P_,u,ce,{discrete:!1})):Ey(E,z.swipeDirection,H)?(R.current=E,Hl(A_,y,ce,{discrete:!1}),B.target.setPointerCapture(B.pointerId)):(Math.abs(re)>H||Math.abs(ue)>H)&&(C.current=null)}),onPointerUp:fn(e.onPointerUp,B=>{const re=R.current,ue=B.target;if(ue.hasPointerCapture(B.pointerId)&&ue.releasePointerCapture(B.pointerId),R.current=null,C.current=null,re){const X=B.currentTarget,F={originalEvent:B,delta:re};Ey(re,z.swipeDirection,z.swipeThreshold)?Hl(I_,g,F,{discrete:!0}):Hl(R_,p,F,{discrete:!0}),X.addEventListener("click",q=>q.preventDefault(),{once:!0})}})})})}),z.viewport)})]}):null}),O_=e=>{const{__scopeToast:n,children:t,...i}=e,o=Pu(Ru,n),[l,a]=T.useState(!1),[d,f]=T.useState(!1);return V_(()=>a(!0)),T.useEffect(()=>{const h=window.setTimeout(()=>f(!0),1e3);return()=>window.clearTimeout(h)},[]),d?null:N.jsx(Tb,{asChild:!0,children:N.jsx(Au,{...i,children:l&&N.jsxs(N.Fragment,{children:[o.label," ",t]})})})},N_="ToastTitle",Db=T.forwardRef((e,n)=>{const{__scopeToast:t,...i}=e;return N.jsx(_n.div,{...i,ref:n})});Db.displayName=N_;var F_="ToastDescription",Lb=T.forwardRef((e,n)=>{const{__scopeToast:t,...i}=e;return N.jsx(_n.div,{...i,ref:n})});Lb.displayName=F_;var Ob="ToastAction",Nb=T.forwardRef((e,n)=>{const{altText:t,...i}=e;return t.trim()?N.jsx(Vb,{altText:t,asChild:!0,children:N.jsx(Sh,{...i,ref:n})}):(console.error(`Invalid prop \`altText\` supplied to \`${Ob}\`. Expected non-empty \`string\`.`),null)});Nb.displayName=Ob;var Fb="ToastClose",Sh=T.forwardRef((e,n)=>{const{__scopeToast:t,...i}=e,o=D_(Fb,t);return N.jsx(Vb,{asChild:!0,children:N.jsx(_n.button,{type:"button",...i,ref:n,onClick:fn(e.onClick,o.onClose)})})});Sh.displayName=Fb;var Vb=T.forwardRef((e,n)=>{const{__scopeToast:t,altText:i,...o}=e;return N.jsx(_n.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...o,ref:n})});function Bb(e){const n=[];return Array.from(e.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&n.push(i.textContent),B_(i)){const o=i.ariaHidden||i.hidden||i.style.display==="none",l=i.dataset.radixToastAnnounceExclude==="";if(!o)if(l){const a=i.dataset.radixToastAnnounceAlt;a&&n.push(a)}else n.push(...Bb(i))}}),n}function Hl(e,n,t,{discrete:i}){const o=t.originalEvent.currentTarget,l=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});n&&o.addEventListener(e,n,{once:!0}),i?xb(o,l):o.dispatchEvent(l)}var Ey=(e,n,t=0)=>{const i=Math.abs(e.x),o=Math.abs(e.y),l=i>o;return n==="left"||n==="right"?l&&i>t:!l&&o>t};function V_(e=()=>{}){const n=mr(e);Ki(()=>{let t=0,i=0;return t=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(n)),()=>{window.cancelAnimationFrame(t),window.cancelAnimationFrame(i)}},[n])}function B_(e){return e.nodeType===e.ELEMENT_NODE}function U_(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const o=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||o?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function Fd(e){const n=document.activeElement;return e.some(t=>t===n?!0:(t.focus(),document.activeElement!==n))}var $_=Ab,Ub=Rb,$b=Mb,Hb=Db,Wb=Lb,qb=Nb,Kb=Sh;function Gb(e){var n,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(t=Gb(e[n]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function Qb(){for(var e,n,t=0,i="",o=arguments.length;t<o;t++)(e=arguments[t])&&(n=Gb(e))&&(i&&(i+=" "),i+=n);return i}const Ay=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Py=Qb,_h=(e,n)=>t=>{var i;if((n==null?void 0:n.variants)==null)return Py(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:o,defaultVariants:l}=n,a=Object.keys(o).map(h=>{const y=t==null?void 0:t[h],u=l==null?void 0:l[h];if(y===null)return null;const p=Ay(y)||Ay(u);return o[h][p]}),d=t&&Object.entries(t).reduce((h,y)=>{let[u,p]=y;return p===void 0||(h[u]=p),h},{}),f=n==null||(i=n.compoundVariants)===null||i===void 0?void 0:i.reduce((h,y)=>{let{class:u,className:p,...g}=y;return Object.entries(g).every(b=>{let[z,x]=b;return Array.isArray(x)?x.includes({...l,...d}[z]):{...l,...d}[z]===x})?[...h,u,p]:h},[]);return Py(e,a,f,t==null?void 0:t.class,t==null?void 0:t.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yb=(...e)=>e.filter((n,t,i)=>!!n&&n.trim()!==""&&i.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=T.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:a,...d},f)=>T.createElement("svg",{ref:f,...W_,width:n,height:n,stroke:e,strokeWidth:i?Number(t)*24/Number(n):t,className:Yb("lucide",o),...d},[...a.map(([h,y])=>T.createElement(h,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=(e,n)=>{const t=T.forwardRef(({className:i,...o},l)=>T.createElement(q_,{ref:l,iconNode:n,className:Yb(`lucide-${H_(e)}`,i),...o}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Iu("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Iu("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Iu("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Iu("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ch="-",X_=e=>{const n=J_(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:a=>{const d=a.split(Ch);return d[0]===""&&d.length!==1&&d.shift(),Xb(d,n)||Z_(a)},getConflictingClassGroupIds:(a,d)=>{const f=t[a]||[];return d&&i[a]?[...f,...i[a]]:f}}},Xb=(e,n)=>{var a;if(e.length===0)return n.classGroupId;const t=e[0],i=n.nextPart.get(t),o=i?Xb(e.slice(1),i):void 0;if(o)return o;if(n.validators.length===0)return;const l=e.join(Ch);return(a=n.validators.find(({validator:d})=>d(l)))==null?void 0:a.classGroupId},Ry=/^\[(.+)\]$/,Z_=e=>{if(Ry.test(e)){const n=Ry.exec(e)[1],t=n==null?void 0:n.substring(0,n.indexOf(":"));if(t)return"arbitrary.."+t}},J_=e=>{const{theme:n,prefix:t}=e,i={nextPart:new Map,validators:[]};return nC(Object.entries(e.classGroups),t).forEach(([l,a])=>{jf(a,i,l,n)}),i},jf=(e,n,t,i)=>{e.forEach(o=>{if(typeof o=="string"){const l=o===""?n:Iy(n,o);l.classGroupId=t;return}if(typeof o=="function"){if(eC(o)){jf(o(i),n,t,i);return}n.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([l,a])=>{jf(a,Iy(n,l),t,i)})})},Iy=(e,n)=>{let t=e;return n.split(Ch).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},eC=e=>e.isThemeGetter,nC=(e,n)=>n?e.map(([t,i])=>{const o=i.map(l=>typeof l=="string"?n+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([a,d])=>[n+a,d])):l);return[t,o]}):e,tC=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=new Map,i=new Map;const o=(l,a)=>{t.set(l,a),n++,n>e&&(n=0,i=t,t=new Map)};return{get(l){let a=t.get(l);if(a!==void 0)return a;if((a=i.get(l))!==void 0)return o(l,a),a},set(l,a){t.has(l)?t.set(l,a):o(l,a)}}},Zb="!",rC=e=>{const{separator:n,experimentalParseClassName:t}=e,i=n.length===1,o=n[0],l=n.length,a=d=>{const f=[];let h=0,y=0,u;for(let x=0;x<d.length;x++){let w=d[x];if(h===0){if(w===o&&(i||d.slice(x,x+l)===n)){f.push(d.slice(y,x)),y=x+l;continue}if(w==="/"){u=x;continue}}w==="["?h++:w==="]"&&h--}const p=f.length===0?d:d.substring(y),g=p.startsWith(Zb),b=g?p.substring(1):p,z=u&&u>y?u-y:void 0;return{modifiers:f,hasImportantModifier:g,baseClassName:b,maybePostfixModifierPosition:z}};return t?d=>t({className:d,parseClassName:a}):a},iC=e=>{if(e.length<=1)return e;const n=[];let t=[];return e.forEach(i=>{i[0]==="["?(n.push(...t.sort(),i),t=[]):t.push(i)}),n.push(...t.sort()),n},sC=e=>({cache:tC(e.cacheSize),parseClassName:rC(e),...X_(e)}),oC=/\s+/,aC=(e,n)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:o}=n,l=[],a=e.trim().split(oC);let d="";for(let f=a.length-1;f>=0;f-=1){const h=a[f],{modifiers:y,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:g}=t(h);let b=!!g,z=i(b?p.substring(0,g):p);if(!z){if(!b){d=h+(d.length>0?" "+d:d);continue}if(z=i(p),!z){d=h+(d.length>0?" "+d:d);continue}b=!1}const x=iC(y).join(":"),w=u?x+Zb:x,_=w+z;if(l.includes(_))continue;l.push(_);const C=o(z,b);for(let R=0;R<C.length;++R){const D=C[R];l.push(w+D)}d=h+(d.length>0?" "+d:d)}return d};function lC(){let e=0,n,t,i="";for(;e<arguments.length;)(n=arguments[e++])&&(t=Jb(n))&&(i&&(i+=" "),i+=t);return i}const Jb=e=>{if(typeof e=="string")return e;let n,t="";for(let i=0;i<e.length;i++)e[i]&&(n=Jb(e[i]))&&(t&&(t+=" "),t+=n);return t};function uC(e,...n){let t,i,o,l=a;function a(f){const h=n.reduce((y,u)=>u(y),e());return t=sC(h),i=t.cache.get,o=t.cache.set,l=d,d(f)}function d(f){const h=i(f);if(h)return h;const y=aC(f,t);return o(f,y),y}return function(){return l(lC.apply(null,arguments))}}const Ge=e=>{const n=t=>t[e]||[];return n.isThemeGetter=!0,n},ez=/^\[(?:([a-z-]+):)?(.+)\]$/i,cC=/^\d+\/\d+$/,dC=new Set(["px","full","screen"]),fC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,hC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,pC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,mC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,jr=e=>Ms(e)||dC.has(e)||cC.test(e),ri=e=>Zs(e,"length",SC),Ms=e=>!!e&&!Number.isNaN(Number(e)),Vd=e=>Zs(e,"number",Ms),$o=e=>!!e&&Number.isInteger(Number(e)),yC=e=>e.endsWith("%")&&Ms(e.slice(0,-1)),je=e=>ez.test(e),ii=e=>fC.test(e),kC=new Set(["length","size","percentage"]),vC=e=>Zs(e,kC,nz),bC=e=>Zs(e,"position",nz),zC=new Set(["image","url"]),wC=e=>Zs(e,zC,CC),xC=e=>Zs(e,"",_C),Ho=()=>!0,Zs=(e,n,t)=>{const i=ez.exec(e);return i?i[1]?typeof n=="string"?i[1]===n:n.has(i[1]):t(i[2]):!1},SC=e=>hC.test(e)&&!pC.test(e),nz=()=>!1,_C=e=>mC.test(e),CC=e=>gC.test(e),TC=()=>{const e=Ge("colors"),n=Ge("spacing"),t=Ge("blur"),i=Ge("brightness"),o=Ge("borderColor"),l=Ge("borderRadius"),a=Ge("borderSpacing"),d=Ge("borderWidth"),f=Ge("contrast"),h=Ge("grayscale"),y=Ge("hueRotate"),u=Ge("invert"),p=Ge("gap"),g=Ge("gradientColorStops"),b=Ge("gradientColorStopPositions"),z=Ge("inset"),x=Ge("margin"),w=Ge("opacity"),_=Ge("padding"),C=Ge("saturate"),R=Ge("scale"),D=Ge("sepia"),P=Ge("skew"),$=Ge("space"),Y=Ge("translate"),K=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],J=()=>["auto",je,n],G=()=>[je,n],ee=()=>["",jr,ri],B=()=>["auto",Ms,je],re=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ue=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",je],j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>[Ms,je];return{cacheSize:500,separator:":",theme:{colors:[Ho],spacing:[jr,ri],blur:["none","",ii,je],brightness:I(),borderColor:[e],borderRadius:["none","","full",ii,je],borderSpacing:G(),borderWidth:ee(),contrast:I(),grayscale:q(),hueRotate:I(),invert:q(),gap:G(),gradientColorStops:[e],gradientColorStopPositions:[yC,ri],inset:J(),margin:J(),opacity:I(),padding:G(),saturate:I(),scale:I(),sepia:q(),skew:I(),space:G(),translate:G()},classGroups:{aspect:[{aspect:["auto","square","video",je]}],container:["container"],columns:[{columns:[ii]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...re(),je]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[z]}],"inset-x":[{"inset-x":[z]}],"inset-y":[{"inset-y":[z]}],start:[{start:[z]}],end:[{end:[z]}],top:[{top:[z]}],right:[{right:[z]}],bottom:[{bottom:[z]}],left:[{left:[z]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",$o,je]}],basis:[{basis:J()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",je]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",$o,je]}],"grid-cols":[{"grid-cols":[Ho]}],"col-start-end":[{col:["auto",{span:["full",$o,je]},je]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[Ho]}],"row-start-end":[{row:["auto",{span:[$o,je]},je]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",je]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",je]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",je,n]}],"min-w":[{"min-w":[je,n,"min","max","fit"]}],"max-w":[{"max-w":[je,n,"none","full","min","max","fit","prose",{screen:[ii]},ii]}],h:[{h:[je,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[je,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[je,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[je,n,"auto","min","max","fit"]}],"font-size":[{text:["base",ii,ri]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Vd]}],"font-family":[{font:[Ho]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",je]}],"line-clamp":[{"line-clamp":["none",Ms,Vd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",jr,je]}],"list-image":[{"list-image":["none",je]}],"list-style-type":[{list:["none","disc","decimal",je]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ue(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",jr,ri]}],"underline-offset":[{"underline-offset":["auto",jr,je]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:G()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...re(),bC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",vC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},wC]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...ue(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:ue()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...ue()]}],"outline-offset":[{"outline-offset":[jr,je]}],"outline-w":[{outline:[jr,ri]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[jr,ri]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ii,xC]}],"shadow-color":[{shadow:[Ho]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[i]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",ii,je]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[u]}],saturate:[{saturate:[C]}],sepia:[{sepia:[D]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",je]}],duration:[{duration:I()}],ease:[{ease:["linear","in","out","in-out",je]}],delay:[{delay:I()}],animate:[{animate:["none","spin","ping","pulse","bounce",je]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[$o,je]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",je]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":G()}],"scroll-mx":[{"scroll-mx":G()}],"scroll-my":[{"scroll-my":G()}],"scroll-ms":[{"scroll-ms":G()}],"scroll-me":[{"scroll-me":G()}],"scroll-mt":[{"scroll-mt":G()}],"scroll-mr":[{"scroll-mr":G()}],"scroll-mb":[{"scroll-mb":G()}],"scroll-ml":[{"scroll-ml":G()}],"scroll-p":[{"scroll-p":G()}],"scroll-px":[{"scroll-px":G()}],"scroll-py":[{"scroll-py":G()}],"scroll-ps":[{"scroll-ps":G()}],"scroll-pe":[{"scroll-pe":G()}],"scroll-pt":[{"scroll-pt":G()}],"scroll-pr":[{"scroll-pr":G()}],"scroll-pb":[{"scroll-pb":G()}],"scroll-pl":[{"scroll-pl":G()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[jr,ri,Vd]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},jC=uC(TC);function ln(...e){return jC(Qb(e))}function tz(e){const n=[...e];for(let t=n.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[n[t],n[i]]=[n[i],n[t]]}return n}const EC=$_,rz=T.forwardRef(({className:e,...n},t)=>N.jsx(Ub,{ref:t,className:ln("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...n}));rz.displayName=Ub.displayName;const AC=_h("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),iz=T.forwardRef(({className:e,variant:n,...t},i)=>N.jsx($b,{ref:i,className:ln(AC({variant:n}),e),...t}));iz.displayName=$b.displayName;const PC=T.forwardRef(({className:e,...n},t)=>N.jsx(qb,{ref:t,className:ln("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...n}));PC.displayName=qb.displayName;const sz=T.forwardRef(({className:e,...n},t)=>N.jsx(Kb,{ref:t,className:ln("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...n,children:N.jsx(Y_,{className:"h-4 w-4"})}));sz.displayName=Kb.displayName;const oz=T.forwardRef(({className:e,...n},t)=>N.jsx(Hb,{ref:t,className:ln("text-sm font-semibold",e),...n}));oz.displayName=Hb.displayName;const az=T.forwardRef(({className:e,...n},t)=>N.jsx(Wb,{ref:t,className:ln("text-sm opacity-90",e),...n}));az.displayName=Wb.displayName;function RC(){const{toasts:e}=vb();return N.jsxs(EC,{children:[e.map(function({id:n,title:t,description:i,action:o,...l}){return N.jsxs(iz,{...l,children:[N.jsxs("div",{className:"grid gap-1",children:[t&&N.jsx(oz,{children:t}),i&&N.jsx(az,{children:i})]}),o,N.jsx(sz,{})]},n)}),N.jsx(rz,{})]})}var My=["light","dark"],IC="(prefers-color-scheme: dark)",MC=T.createContext(void 0),DC={setTheme:e=>{},themes:[]},LC=()=>{var e;return(e=T.useContext(MC))!=null?e:DC};T.memo(({forcedTheme:e,storageKey:n,attribute:t,enableSystem:i,enableColorScheme:o,defaultTheme:l,value:a,attrs:d,nonce:f})=>{let h=l==="system",y=t==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${d.map(b=>`'${b}'`).join(",")})`};`:`var d=document.documentElement,n='${t}',s='setAttribute';`,u=o?My.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(b,z=!1,x=!0)=>{let w=a?a[b]:b,_=z?b+"|| ''":`'${w}'`,C="";return o&&x&&!z&&My.includes(b)&&(C+=`d.style.colorScheme = '${b}';`),t==="class"?z||w?C+=`c.add(${_})`:C+="null":w&&(C+=`d[s](n,${_})`),C},g=e?`!function(){${y}${p(e)}}()`:i?`!function(){try{${y}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${IC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}${h?"":"else{"+p(l,!1,!1)+"}"}${u}}catch(e){}}()`:`!function(){try{${y}var e=localStorage.getItem('${n}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}else{${p(l,!1,!1)};}${u}}catch(t){}}();`;return T.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})});var OC=e=>{switch(e){case"success":return VC;case"info":return UC;case"warning":return BC;case"error":return $C;default:return null}},NC=Array(12).fill(0),FC=({visible:e,className:n})=>le.createElement("div",{className:["sonner-loading-wrapper",n].filter(Boolean).join(" "),"data-visible":e},le.createElement("div",{className:"sonner-spinner"},NC.map((t,i)=>le.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),VC=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},le.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),BC=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},le.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),UC=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},le.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),$C=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},le.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),HC=le.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},le.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),le.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),WC=()=>{let[e,n]=le.useState(document.hidden);return le.useEffect(()=>{let t=()=>{n(document.hidden)};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),e},Ef=1,qC=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}),this.publish=e=>{this.subscribers.forEach(n=>n(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var n;let{message:t,...i}=e,o=typeof(e==null?void 0:e.id)=="number"||((n=e.id)==null?void 0:n.length)>0?e.id:Ef++,l=this.toasts.find(d=>d.id===o),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),l?this.toasts=this.toasts.map(d=>d.id===o?(this.publish({...d,...e,id:o,title:t}),{...d,...e,id:o,dismissible:a,title:t}):d):this.addToast({title:t,...i,dismissible:a,id:o}),o},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(n=>{this.subscribers.forEach(t=>t({id:n.id,dismiss:!0}))}),this.subscribers.forEach(n=>n({id:e,dismiss:!0})),e),this.message=(e,n)=>this.create({...n,message:e}),this.error=(e,n)=>this.create({...n,message:e,type:"error"}),this.success=(e,n)=>this.create({...n,type:"success",message:e}),this.info=(e,n)=>this.create({...n,type:"info",message:e}),this.warning=(e,n)=>this.create({...n,type:"warning",message:e}),this.loading=(e,n)=>this.create({...n,type:"loading",message:e}),this.promise=(e,n)=>{if(!n)return;let t;n.loading!==void 0&&(t=this.create({...n,promise:e,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));let i=e instanceof Promise?e:e(),o=t!==void 0,l,a=i.then(async f=>{if(l=["resolve",f],le.isValidElement(f))o=!1,this.create({id:t,type:"default",message:f});else if(GC(f)&&!f.ok){o=!1;let h=typeof n.error=="function"?await n.error(`HTTP error! status: ${f.status}`):n.error,y=typeof n.description=="function"?await n.description(`HTTP error! status: ${f.status}`):n.description;this.create({id:t,type:"error",message:h,description:y})}else if(n.success!==void 0){o=!1;let h=typeof n.success=="function"?await n.success(f):n.success,y=typeof n.description=="function"?await n.description(f):n.description;this.create({id:t,type:"success",message:h,description:y})}}).catch(async f=>{if(l=["reject",f],n.error!==void 0){o=!1;let h=typeof n.error=="function"?await n.error(f):n.error,y=typeof n.description=="function"?await n.description(f):n.description;this.create({id:t,type:"error",message:h,description:y})}}).finally(()=>{var f;o&&(this.dismiss(t),t=void 0),(f=n.finally)==null||f.call(n)}),d=()=>new Promise((f,h)=>a.then(()=>l[0]==="reject"?h(l[1]):f(l[1])).catch(h));return typeof t!="string"&&typeof t!="number"?{unwrap:d}:Object.assign(t,{unwrap:d})},this.custom=(e,n)=>{let t=(n==null?void 0:n.id)||Ef++;return this.create({jsx:e(t),id:t,...n}),t},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},tt=new qC,KC=(e,n)=>{let t=(n==null?void 0:n.id)||Ef++;return tt.addToast({title:e,...n,id:t}),t},GC=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",QC=KC,YC=()=>tt.toasts,XC=()=>tt.getActiveToasts();Object.assign(QC,{success:tt.success,info:tt.info,warning:tt.warning,error:tt.error,custom:tt.custom,message:tt.message,promise:tt.promise,dismiss:tt.dismiss,loading:tt.loading},{getHistory:YC,getToasts:XC});function ZC(e,{insertAt:n}={}){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}ZC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Wl(e){return e.label!==void 0}var JC=3,eT="32px",nT="16px",Dy=4e3,tT=356,rT=14,iT=20,sT=200;function Bt(...e){return e.filter(Boolean).join(" ")}function oT(e){let[n,t]=e.split("-"),i=[];return n&&i.push(n),t&&i.push(t),i}var aT=e=>{var n,t,i,o,l,a,d,f,h,y,u;let{invert:p,toast:g,unstyled:b,interacting:z,setHeights:x,visibleToasts:w,heights:_,index:C,toasts:R,expanded:D,removeToast:P,defaultRichColors:$,closeButton:Y,style:K,cancelButtonStyle:L,actionButtonStyle:J,className:G="",descriptionClassName:ee="",duration:B,position:re,gap:ue,loadingIcon:X,expandByDefault:F,classNames:q,icons:j,closeButtonAriaLabel:I="Close toast",pauseWhenPageIsHidden:H}=e,[E,ce]=le.useState(null),[ke,ge]=le.useState(null),[ye,Ce]=le.useState(!1),[Ae,Be]=le.useState(!1),[yn,At]=le.useState(!1),[Ln,Qt]=le.useState(!1),[vr,Yt]=le.useState(!1),[Xt,Zt]=le.useState(0),[ot,Pt]=le.useState(0),qn=le.useRef(g.duration||B||Dy),Lr=le.useRef(null),mt=le.useRef(null),es=C===0,ns=C+1<=w,Q=g.type,oe=g.dismissible!==!1,we=g.className||"",Pe=g.descriptionClassName||"",Re=le.useMemo(()=>_.findIndex(_e=>_e.toastId===g.id)||0,[_,g.id]),pn=le.useMemo(()=>{var _e;return(_e=g.closeButton)!=null?_e:Y},[g.closeButton,Y]),gt=le.useMemo(()=>g.duration||B||Dy,[g.duration,B]),Cn=le.useRef(0),On=le.useRef(0),Jt=le.useRef(0),Qe=le.useRef(null),[yt,Nn]=re.split("-"),ts=le.useMemo(()=>_.reduce((_e,Fe,Ue)=>Ue>=Re?_e:_e+Fe.height,0),[_,Re]),rs=WC(),Or=g.invert||p,er=Q==="loading";On.current=le.useMemo(()=>Re*ue+ts,[Re,ts]),le.useEffect(()=>{qn.current=gt},[gt]),le.useEffect(()=>{Ce(!0)},[]),le.useEffect(()=>{let _e=mt.current;if(_e){let Fe=_e.getBoundingClientRect().height;return Pt(Fe),x(Ue=>[{toastId:g.id,height:Fe,position:g.position},...Ue]),()=>x(Ue=>Ue.filter(Fn=>Fn.toastId!==g.id))}},[x,g.id]),le.useLayoutEffect(()=>{if(!ye)return;let _e=mt.current,Fe=_e.style.height;_e.style.height="auto";let Ue=_e.getBoundingClientRect().height;_e.style.height=Fe,Pt(Ue),x(Fn=>Fn.find(Kn=>Kn.toastId===g.id)?Fn.map(Kn=>Kn.toastId===g.id?{...Kn,height:Ue}:Kn):[{toastId:g.id,height:Ue,position:g.position},...Fn])},[ye,g.title,g.description,x,g.id]);let Rt=le.useCallback(()=>{Be(!0),Zt(On.current),x(_e=>_e.filter(Fe=>Fe.toastId!==g.id)),setTimeout(()=>{P(g)},sT)},[g,P,x,On]);le.useEffect(()=>{if(g.promise&&Q==="loading"||g.duration===1/0||g.type==="loading")return;let _e;return D||z||H&&rs?(()=>{if(Jt.current<Cn.current){let Fe=new Date().getTime()-Cn.current;qn.current=qn.current-Fe}Jt.current=new Date().getTime()})():qn.current!==1/0&&(Cn.current=new Date().getTime(),_e=setTimeout(()=>{var Fe;(Fe=g.onAutoClose)==null||Fe.call(g,g),Rt()},qn.current)),()=>clearTimeout(_e)},[D,z,g,Q,H,rs,Rt]),le.useEffect(()=>{g.delete&&Rt()},[Rt,g.delete]);function Ia(){var _e,Fe,Ue;return j!=null&&j.loading?le.createElement("div",{className:Bt(q==null?void 0:q.loader,(_e=g==null?void 0:g.classNames)==null?void 0:_e.loader,"sonner-loader"),"data-visible":Q==="loading"},j.loading):X?le.createElement("div",{className:Bt(q==null?void 0:q.loader,(Fe=g==null?void 0:g.classNames)==null?void 0:Fe.loader,"sonner-loader"),"data-visible":Q==="loading"},X):le.createElement(FC,{className:Bt(q==null?void 0:q.loader,(Ue=g==null?void 0:g.classNames)==null?void 0:Ue.loader),visible:Q==="loading"})}return le.createElement("li",{tabIndex:0,ref:mt,className:Bt(G,we,q==null?void 0:q.toast,(n=g==null?void 0:g.classNames)==null?void 0:n.toast,q==null?void 0:q.default,q==null?void 0:q[Q],(t=g==null?void 0:g.classNames)==null?void 0:t[Q]),"data-sonner-toast":"","data-rich-colors":(i=g.richColors)!=null?i:$,"data-styled":!(g.jsx||g.unstyled||b),"data-mounted":ye,"data-promise":!!g.promise,"data-swiped":vr,"data-removed":Ae,"data-visible":ns,"data-y-position":yt,"data-x-position":Nn,"data-index":C,"data-front":es,"data-swiping":yn,"data-dismissible":oe,"data-type":Q,"data-invert":Or,"data-swipe-out":Ln,"data-swipe-direction":ke,"data-expanded":!!(D||F&&ye),style:{"--index":C,"--toasts-before":C,"--z-index":R.length-C,"--offset":`${Ae?Xt:On.current}px`,"--initial-height":F?"auto":`${ot}px`,...K,...g.style},onDragEnd:()=>{At(!1),ce(null),Qe.current=null},onPointerDown:_e=>{er||!oe||(Lr.current=new Date,Zt(On.current),_e.target.setPointerCapture(_e.pointerId),_e.target.tagName!=="BUTTON"&&(At(!0),Qe.current={x:_e.clientX,y:_e.clientY}))},onPointerUp:()=>{var _e,Fe,Ue,Fn;if(Ln||!oe)return;Qe.current=null;let Kn=Number(((_e=mt.current)==null?void 0:_e.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Gn=Number(((Fe=mt.current)==null?void 0:Fe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),It=new Date().getTime()-((Ue=Lr.current)==null?void 0:Ue.getTime()),zn=E==="x"?Kn:Gn,nr=Math.abs(zn)/It;if(Math.abs(zn)>=iT||nr>.11){Zt(On.current),(Fn=g.onDismiss)==null||Fn.call(g,g),ge(E==="x"?Kn>0?"right":"left":Gn>0?"down":"up"),Rt(),Qt(!0),Yt(!1);return}At(!1),ce(null)},onPointerMove:_e=>{var Fe,Ue,Fn,Kn;if(!Qe.current||!oe||((Fe=window.getSelection())==null?void 0:Fe.toString().length)>0)return;let Gn=_e.clientY-Qe.current.y,It=_e.clientX-Qe.current.x,zn=(Ue=e.swipeDirections)!=null?Ue:oT(re);!E&&(Math.abs(It)>1||Math.abs(Gn)>1)&&ce(Math.abs(It)>Math.abs(Gn)?"x":"y");let nr={x:0,y:0};E==="y"?(zn.includes("top")||zn.includes("bottom"))&&(zn.includes("top")&&Gn<0||zn.includes("bottom")&&Gn>0)&&(nr.y=Gn):E==="x"&&(zn.includes("left")||zn.includes("right"))&&(zn.includes("left")&&It<0||zn.includes("right")&&It>0)&&(nr.x=It),(Math.abs(nr.x)>0||Math.abs(nr.y)>0)&&Yt(!0),(Fn=mt.current)==null||Fn.style.setProperty("--swipe-amount-x",`${nr.x}px`),(Kn=mt.current)==null||Kn.style.setProperty("--swipe-amount-y",`${nr.y}px`)}},pn&&!g.jsx?le.createElement("button",{"aria-label":I,"data-disabled":er,"data-close-button":!0,onClick:er||!oe?()=>{}:()=>{var _e;Rt(),(_e=g.onDismiss)==null||_e.call(g,g)},className:Bt(q==null?void 0:q.closeButton,(o=g==null?void 0:g.classNames)==null?void 0:o.closeButton)},(l=j==null?void 0:j.close)!=null?l:HC):null,g.jsx||T.isValidElement(g.title)?g.jsx?g.jsx:typeof g.title=="function"?g.title():g.title:le.createElement(le.Fragment,null,Q||g.icon||g.promise?le.createElement("div",{"data-icon":"",className:Bt(q==null?void 0:q.icon,(a=g==null?void 0:g.classNames)==null?void 0:a.icon)},g.promise||g.type==="loading"&&!g.icon?g.icon||Ia():null,g.type!=="loading"?g.icon||(j==null?void 0:j[Q])||OC(Q):null):null,le.createElement("div",{"data-content":"",className:Bt(q==null?void 0:q.content,(d=g==null?void 0:g.classNames)==null?void 0:d.content)},le.createElement("div",{"data-title":"",className:Bt(q==null?void 0:q.title,(f=g==null?void 0:g.classNames)==null?void 0:f.title)},typeof g.title=="function"?g.title():g.title),g.description?le.createElement("div",{"data-description":"",className:Bt(ee,Pe,q==null?void 0:q.description,(h=g==null?void 0:g.classNames)==null?void 0:h.description)},typeof g.description=="function"?g.description():g.description):null),T.isValidElement(g.cancel)?g.cancel:g.cancel&&Wl(g.cancel)?le.createElement("button",{"data-button":!0,"data-cancel":!0,style:g.cancelButtonStyle||L,onClick:_e=>{var Fe,Ue;Wl(g.cancel)&&oe&&((Ue=(Fe=g.cancel).onClick)==null||Ue.call(Fe,_e),Rt())},className:Bt(q==null?void 0:q.cancelButton,(y=g==null?void 0:g.classNames)==null?void 0:y.cancelButton)},g.cancel.label):null,T.isValidElement(g.action)?g.action:g.action&&Wl(g.action)?le.createElement("button",{"data-button":!0,"data-action":!0,style:g.actionButtonStyle||J,onClick:_e=>{var Fe,Ue;Wl(g.action)&&((Ue=(Fe=g.action).onClick)==null||Ue.call(Fe,_e),!_e.defaultPrevented&&Rt())},className:Bt(q==null?void 0:q.actionButton,(u=g==null?void 0:g.classNames)==null?void 0:u.actionButton)},g.action.label):null))};function Ly(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function lT(e,n){let t={};return[e,n].forEach((i,o)=>{let l=o===1,a=l?"--mobile-offset":"--offset",d=l?nT:eT;function f(h){["top","right","bottom","left"].forEach(y=>{t[`${a}-${y}`]=typeof h=="number"?`${h}px`:h})}typeof i=="number"||typeof i=="string"?f(i):typeof i=="object"?["top","right","bottom","left"].forEach(h=>{i[h]===void 0?t[`${a}-${h}`]=d:t[`${a}-${h}`]=typeof i[h]=="number"?`${i[h]}px`:i[h]}):f(d)}),t}var uT=T.forwardRef(function(e,n){let{invert:t,position:i="bottom-right",hotkey:o=["altKey","KeyT"],expand:l,closeButton:a,className:d,offset:f,mobileOffset:h,theme:y="light",richColors:u,duration:p,style:g,visibleToasts:b=JC,toastOptions:z,dir:x=Ly(),gap:w=rT,loadingIcon:_,icons:C,containerAriaLabel:R="Notifications",pauseWhenPageIsHidden:D}=e,[P,$]=le.useState([]),Y=le.useMemo(()=>Array.from(new Set([i].concat(P.filter(H=>H.position).map(H=>H.position)))),[P,i]),[K,L]=le.useState([]),[J,G]=le.useState(!1),[ee,B]=le.useState(!1),[re,ue]=le.useState(y!=="system"?y:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),X=le.useRef(null),F=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),q=le.useRef(null),j=le.useRef(!1),I=le.useCallback(H=>{$(E=>{var ce;return(ce=E.find(ke=>ke.id===H.id))!=null&&ce.delete||tt.dismiss(H.id),E.filter(({id:ke})=>ke!==H.id)})},[]);return le.useEffect(()=>tt.subscribe(H=>{if(H.dismiss){$(E=>E.map(ce=>ce.id===H.id?{...ce,delete:!0}:ce));return}setTimeout(()=>{bb.flushSync(()=>{$(E=>{let ce=E.findIndex(ke=>ke.id===H.id);return ce!==-1?[...E.slice(0,ce),{...E[ce],...H},...E.slice(ce+1)]:[H,...E]})})})}),[]),le.useEffect(()=>{if(y!=="system"){ue(y);return}if(y==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ue("dark"):ue("light")),typeof window>"u")return;let H=window.matchMedia("(prefers-color-scheme: dark)");try{H.addEventListener("change",({matches:E})=>{ue(E?"dark":"light")})}catch{H.addListener(({matches:ce})=>{try{ue(ce?"dark":"light")}catch(ke){console.error(ke)}})}},[y]),le.useEffect(()=>{P.length<=1&&G(!1)},[P]),le.useEffect(()=>{let H=E=>{var ce,ke;o.every(ge=>E[ge]||E.code===ge)&&(G(!0),(ce=X.current)==null||ce.focus()),E.code==="Escape"&&(document.activeElement===X.current||(ke=X.current)!=null&&ke.contains(document.activeElement))&&G(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[o]),le.useEffect(()=>{if(X.current)return()=>{q.current&&(q.current.focus({preventScroll:!0}),q.current=null,j.current=!1)}},[X.current]),le.createElement("section",{ref:n,"aria-label":`${R} ${F}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},Y.map((H,E)=>{var ce;let[ke,ge]=H.split("-");return P.length?le.createElement("ol",{key:H,dir:x==="auto"?Ly():x,tabIndex:-1,ref:X,className:d,"data-sonner-toaster":!0,"data-theme":re,"data-y-position":ke,"data-lifted":J&&P.length>1&&!l,"data-x-position":ge,style:{"--front-toast-height":`${((ce=K[0])==null?void 0:ce.height)||0}px`,"--width":`${tT}px`,"--gap":`${w}px`,...g,...lT(f,h)},onBlur:ye=>{j.current&&!ye.currentTarget.contains(ye.relatedTarget)&&(j.current=!1,q.current&&(q.current.focus({preventScroll:!0}),q.current=null))},onFocus:ye=>{ye.target instanceof HTMLElement&&ye.target.dataset.dismissible==="false"||j.current||(j.current=!0,q.current=ye.relatedTarget)},onMouseEnter:()=>G(!0),onMouseMove:()=>G(!0),onMouseLeave:()=>{ee||G(!1)},onDragEnd:()=>G(!1),onPointerDown:ye=>{ye.target instanceof HTMLElement&&ye.target.dataset.dismissible==="false"||B(!0)},onPointerUp:()=>B(!1)},P.filter(ye=>!ye.position&&E===0||ye.position===H).map((ye,Ce)=>{var Ae,Be;return le.createElement(aT,{key:ye.id,icons:C,index:Ce,toast:ye,defaultRichColors:u,duration:(Ae=z==null?void 0:z.duration)!=null?Ae:p,className:z==null?void 0:z.className,descriptionClassName:z==null?void 0:z.descriptionClassName,invert:t,visibleToasts:b,closeButton:(Be=z==null?void 0:z.closeButton)!=null?Be:a,interacting:ee,position:H,style:z==null?void 0:z.style,unstyled:z==null?void 0:z.unstyled,classNames:z==null?void 0:z.classNames,cancelButtonStyle:z==null?void 0:z.cancelButtonStyle,actionButtonStyle:z==null?void 0:z.actionButtonStyle,removeToast:I,toasts:P.filter(yn=>yn.position==ye.position),heights:K.filter(yn=>yn.position==ye.position),setHeights:L,expandByDefault:l,gap:w,loadingIcon:_,expanded:J,pauseWhenPageIsHidden:D,swipeDirections:e.swipeDirections})})):null}))});const cT=({...e})=>{const{theme:n="system"}=LC();return N.jsx(uT,{theme:n,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},dT=["top","right","bottom","left"],mi=Math.min,ft=Math.max,hu=Math.round,ql=Math.floor,dr=e=>({x:e,y:e}),fT={left:"right",right:"left",bottom:"top",top:"bottom"},hT={start:"end",end:"start"};function Af(e,n,t){return ft(e,mi(n,t))}function Pr(e,n){return typeof e=="function"?e(n):e}function Rr(e){return e.split("-")[0]}function Js(e){return e.split("-")[1]}function Th(e){return e==="x"?"y":"x"}function jh(e){return e==="y"?"height":"width"}function gi(e){return["top","bottom"].includes(Rr(e))?"y":"x"}function Eh(e){return Th(gi(e))}function pT(e,n,t){t===void 0&&(t=!1);const i=Js(e),o=Eh(e),l=jh(o);let a=o==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return n.reference[l]>n.floating[l]&&(a=pu(a)),[a,pu(a)]}function mT(e){const n=pu(e);return[Pf(e),n,Pf(n)]}function Pf(e){return e.replace(/start|end/g,n=>hT[n])}function gT(e,n,t){const i=["left","right"],o=["right","left"],l=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return t?n?o:i:n?i:o;case"left":case"right":return n?l:a;default:return[]}}function yT(e,n,t,i){const o=Js(e);let l=gT(Rr(e),t==="start",i);return o&&(l=l.map(a=>a+"-"+o),n&&(l=l.concat(l.map(Pf)))),l}function pu(e){return e.replace(/left|right|bottom|top/g,n=>fT[n])}function kT(e){return{top:0,right:0,bottom:0,left:0,...e}}function lz(e){return typeof e!="number"?kT(e):{top:e,right:e,bottom:e,left:e}}function mu(e){const{x:n,y:t,width:i,height:o}=e;return{width:i,height:o,top:t,left:n,right:n+i,bottom:t+o,x:n,y:t}}function Oy(e,n,t){let{reference:i,floating:o}=e;const l=gi(n),a=Eh(n),d=jh(a),f=Rr(n),h=l==="y",y=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,p=i[d]/2-o[d]/2;let g;switch(f){case"top":g={x:y,y:i.y-o.height};break;case"bottom":g={x:y,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-o.width,y:u};break;default:g={x:i.x,y:i.y}}switch(Js(n)){case"start":g[a]-=p*(t&&h?-1:1);break;case"end":g[a]+=p*(t&&h?-1:1);break}return g}const vT=async(e,n,t)=>{const{placement:i="bottom",strategy:o="absolute",middleware:l=[],platform:a}=t,d=l.filter(Boolean),f=await(a.isRTL==null?void 0:a.isRTL(n));let h=await a.getElementRects({reference:e,floating:n,strategy:o}),{x:y,y:u}=Oy(h,i,f),p=i,g={},b=0;for(let z=0;z<d.length;z++){const{name:x,fn:w}=d[z],{x:_,y:C,data:R,reset:D}=await w({x:y,y:u,initialPlacement:i,placement:p,strategy:o,middlewareData:g,rects:h,platform:a,elements:{reference:e,floating:n}});y=_??y,u=C??u,g={...g,[x]:{...g[x],...R}},D&&b<=50&&(b++,typeof D=="object"&&(D.placement&&(p=D.placement),D.rects&&(h=D.rects===!0?await a.getElementRects({reference:e,floating:n,strategy:o}):D.rects),{x:y,y:u}=Oy(h,p,f)),z=-1)}return{x:y,y:u,placement:p,strategy:o,middlewareData:g}};async function oa(e,n){var t;n===void 0&&(n={});const{x:i,y:o,platform:l,rects:a,elements:d,strategy:f}=e,{boundary:h="clippingAncestors",rootBoundary:y="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=Pr(n,e),b=lz(g),x=d[p?u==="floating"?"reference":"floating":u],w=mu(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(x)))==null||t?x:x.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(d.floating)),boundary:h,rootBoundary:y,strategy:f})),_=u==="floating"?{x:i,y:o,width:a.floating.width,height:a.floating.height}:a.reference,C=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d.floating)),R=await(l.isElement==null?void 0:l.isElement(C))?await(l.getScale==null?void 0:l.getScale(C))||{x:1,y:1}:{x:1,y:1},D=mu(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:_,offsetParent:C,strategy:f}):_);return{top:(w.top-D.top+b.top)/R.y,bottom:(D.bottom-w.bottom+b.bottom)/R.y,left:(w.left-D.left+b.left)/R.x,right:(D.right-w.right+b.right)/R.x}}const bT=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:i,placement:o,rects:l,platform:a,elements:d,middlewareData:f}=n,{element:h,padding:y=0}=Pr(e,n)||{};if(h==null)return{};const u=lz(y),p={x:t,y:i},g=Eh(o),b=jh(g),z=await a.getDimensions(h),x=g==="y",w=x?"top":"left",_=x?"bottom":"right",C=x?"clientHeight":"clientWidth",R=l.reference[b]+l.reference[g]-p[g]-l.floating[b],D=p[g]-l.reference[g],P=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let $=P?P[C]:0;(!$||!await(a.isElement==null?void 0:a.isElement(P)))&&($=d.floating[C]||l.floating[b]);const Y=R/2-D/2,K=$/2-z[b]/2-1,L=mi(u[w],K),J=mi(u[_],K),G=L,ee=$-z[b]-J,B=$/2-z[b]/2+Y,re=Af(G,B,ee),ue=!f.arrow&&Js(o)!=null&&B!==re&&l.reference[b]/2-(B<G?L:J)-z[b]/2<0,X=ue?B<G?B-G:B-ee:0;return{[g]:p[g]+X,data:{[g]:re,centerOffset:B-re-X,...ue&&{alignmentOffset:X}},reset:ue}}}),zT=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,i;const{placement:o,middlewareData:l,rects:a,initialPlacement:d,platform:f,elements:h}=n,{mainAxis:y=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:z=!0,...x}=Pr(e,n);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const w=Rr(o),_=gi(d),C=Rr(d)===d,R=await(f.isRTL==null?void 0:f.isRTL(h.floating)),D=p||(C||!z?[pu(d)]:mT(d)),P=b!=="none";!p&&P&&D.push(...yT(d,z,b,R));const $=[d,...D],Y=await oa(n,x),K=[];let L=((i=l.flip)==null?void 0:i.overflows)||[];if(y&&K.push(Y[w]),u){const B=pT(o,a,R);K.push(Y[B[0]],Y[B[1]])}if(L=[...L,{placement:o,overflows:K}],!K.every(B=>B<=0)){var J,G;const B=(((J=l.flip)==null?void 0:J.index)||0)+1,re=$[B];if(re)return{data:{index:B,overflows:L},reset:{placement:re}};let ue=(G=L.filter(X=>X.overflows[0]<=0).sort((X,F)=>X.overflows[1]-F.overflows[1])[0])==null?void 0:G.placement;if(!ue)switch(g){case"bestFit":{var ee;const X=(ee=L.filter(F=>{if(P){const q=gi(F.placement);return q===_||q==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(q=>q>0).reduce((q,j)=>q+j,0)]).sort((F,q)=>F[1]-q[1])[0])==null?void 0:ee[0];X&&(ue=X);break}case"initialPlacement":ue=d;break}if(o!==ue)return{reset:{placement:ue}}}return{}}}};function Ny(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function Fy(e){return dT.some(n=>e[n]>=0)}const wT=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:t}=n,{strategy:i="referenceHidden",...o}=Pr(e,n);switch(i){case"referenceHidden":{const l=await oa(n,{...o,elementContext:"reference"}),a=Ny(l,t.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Fy(a)}}}case"escaped":{const l=await oa(n,{...o,altBoundary:!0}),a=Ny(l,t.floating);return{data:{escapedOffsets:a,escaped:Fy(a)}}}default:return{}}}}};async function xT(e,n){const{placement:t,platform:i,elements:o}=e,l=await(i.isRTL==null?void 0:i.isRTL(o.floating)),a=Rr(t),d=Js(t),f=gi(t)==="y",h=["left","top"].includes(a)?-1:1,y=l&&f?-1:1,u=Pr(n,e);let{mainAxis:p,crossAxis:g,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return d&&typeof b=="number"&&(g=d==="end"?b*-1:b),f?{x:g*y,y:p*h}:{x:p*h,y:g*y}}const ST=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,i;const{x:o,y:l,placement:a,middlewareData:d}=n,f=await xT(n,e);return a===((t=d.offset)==null?void 0:t.placement)&&(i=d.arrow)!=null&&i.alignmentOffset?{}:{x:o+f.x,y:l+f.y,data:{...f,placement:a}}}}},_T=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:i,placement:o}=n,{mainAxis:l=!0,crossAxis:a=!1,limiter:d={fn:x=>{let{x:w,y:_}=x;return{x:w,y:_}}},...f}=Pr(e,n),h={x:t,y:i},y=await oa(n,f),u=gi(Rr(o)),p=Th(u);let g=h[p],b=h[u];if(l){const x=p==="y"?"top":"left",w=p==="y"?"bottom":"right",_=g+y[x],C=g-y[w];g=Af(_,g,C)}if(a){const x=u==="y"?"top":"left",w=u==="y"?"bottom":"right",_=b+y[x],C=b-y[w];b=Af(_,b,C)}const z=d.fn({...n,[p]:g,[u]:b});return{...z,data:{x:z.x-t,y:z.y-i,enabled:{[p]:l,[u]:a}}}}}},CT=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:t,y:i,placement:o,rects:l,middlewareData:a}=n,{offset:d=0,mainAxis:f=!0,crossAxis:h=!0}=Pr(e,n),y={x:t,y:i},u=gi(o),p=Th(u);let g=y[p],b=y[u];const z=Pr(d,n),x=typeof z=="number"?{mainAxis:z,crossAxis:0}:{mainAxis:0,crossAxis:0,...z};if(f){const C=p==="y"?"height":"width",R=l.reference[p]-l.floating[C]+x.mainAxis,D=l.reference[p]+l.reference[C]-x.mainAxis;g<R?g=R:g>D&&(g=D)}if(h){var w,_;const C=p==="y"?"width":"height",R=["top","left"].includes(Rr(o)),D=l.reference[u]-l.floating[C]+(R&&((w=a.offset)==null?void 0:w[u])||0)+(R?0:x.crossAxis),P=l.reference[u]+l.reference[C]+(R?0:((_=a.offset)==null?void 0:_[u])||0)-(R?x.crossAxis:0);b<D?b=D:b>P&&(b=P)}return{[p]:g,[u]:b}}}},TT=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){var t,i;const{placement:o,rects:l,platform:a,elements:d}=n,{apply:f=()=>{},...h}=Pr(e,n),y=await oa(n,h),u=Rr(o),p=Js(o),g=gi(o)==="y",{width:b,height:z}=l.floating;let x,w;u==="top"||u==="bottom"?(x=u,w=p===(await(a.isRTL==null?void 0:a.isRTL(d.floating))?"start":"end")?"left":"right"):(w=u,x=p==="end"?"top":"bottom");const _=z-y.top-y.bottom,C=b-y.left-y.right,R=mi(z-y[x],_),D=mi(b-y[w],C),P=!n.middlewareData.shift;let $=R,Y=D;if((t=n.middlewareData.shift)!=null&&t.enabled.x&&(Y=C),(i=n.middlewareData.shift)!=null&&i.enabled.y&&($=_),P&&!p){const L=ft(y.left,0),J=ft(y.right,0),G=ft(y.top,0),ee=ft(y.bottom,0);g?Y=b-2*(L!==0||J!==0?L+J:ft(y.left,y.right)):$=z-2*(G!==0||ee!==0?G+ee:ft(y.top,y.bottom))}await f({...n,availableWidth:Y,availableHeight:$});const K=await a.getDimensions(d.floating);return b!==K.width||z!==K.height?{reset:{rects:!0}}:{}}}};function Mu(){return typeof window<"u"}function eo(e){return uz(e)?(e.nodeName||"").toLowerCase():"#document"}function ht(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function yr(e){var n;return(n=(uz(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function uz(e){return Mu()?e instanceof Node||e instanceof ht(e).Node:!1}function Kt(e){return Mu()?e instanceof Element||e instanceof ht(e).Element:!1}function gr(e){return Mu()?e instanceof HTMLElement||e instanceof ht(e).HTMLElement:!1}function Vy(e){return!Mu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ht(e).ShadowRoot}function xa(e){const{overflow:n,overflowX:t,overflowY:i,display:o}=Gt(e);return/auto|scroll|overlay|hidden|clip/.test(n+i+t)&&!["inline","contents"].includes(o)}function jT(e){return["table","td","th"].includes(eo(e))}function Du(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function Ah(e){const n=Ph(),t=Kt(e)?Gt(e):e;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function ET(e){let n=yi(e);for(;gr(n)&&!Ks(n);){if(Ah(n))return n;if(Du(n))return null;n=yi(n)}return null}function Ph(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ks(e){return["html","body","#document"].includes(eo(e))}function Gt(e){return ht(e).getComputedStyle(e)}function Lu(e){return Kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function yi(e){if(eo(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Vy(e)&&e.host||yr(e);return Vy(n)?n.host:n}function cz(e){const n=yi(e);return Ks(n)?e.ownerDocument?e.ownerDocument.body:e.body:gr(n)&&xa(n)?n:cz(n)}function aa(e,n,t){var i;n===void 0&&(n=[]),t===void 0&&(t=!0);const o=cz(e),l=o===((i=e.ownerDocument)==null?void 0:i.body),a=ht(o);if(l){const d=Rf(a);return n.concat(a,a.visualViewport||[],xa(o)?o:[],d&&t?aa(d):[])}return n.concat(o,aa(o,[],t))}function Rf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function dz(e){const n=Gt(e);let t=parseFloat(n.width)||0,i=parseFloat(n.height)||0;const o=gr(e),l=o?e.offsetWidth:t,a=o?e.offsetHeight:i,d=hu(t)!==l||hu(i)!==a;return d&&(t=l,i=a),{width:t,height:i,$:d}}function Rh(e){return Kt(e)?e:e.contextElement}function Ds(e){const n=Rh(e);if(!gr(n))return dr(1);const t=n.getBoundingClientRect(),{width:i,height:o,$:l}=dz(n);let a=(l?hu(t.width):t.width)/i,d=(l?hu(t.height):t.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!d||!Number.isFinite(d))&&(d=1),{x:a,y:d}}const AT=dr(0);function fz(e){const n=ht(e);return!Ph()||!n.visualViewport?AT:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function PT(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==ht(e)?!1:n}function Gi(e,n,t,i){n===void 0&&(n=!1),t===void 0&&(t=!1);const o=e.getBoundingClientRect(),l=Rh(e);let a=dr(1);n&&(i?Kt(i)&&(a=Ds(i)):a=Ds(e));const d=PT(l,t,i)?fz(l):dr(0);let f=(o.left+d.x)/a.x,h=(o.top+d.y)/a.y,y=o.width/a.x,u=o.height/a.y;if(l){const p=ht(l),g=i&&Kt(i)?ht(i):i;let b=p,z=Rf(b);for(;z&&i&&g!==b;){const x=Ds(z),w=z.getBoundingClientRect(),_=Gt(z),C=w.left+(z.clientLeft+parseFloat(_.paddingLeft))*x.x,R=w.top+(z.clientTop+parseFloat(_.paddingTop))*x.y;f*=x.x,h*=x.y,y*=x.x,u*=x.y,f+=C,h+=R,b=ht(z),z=Rf(b)}}return mu({width:y,height:u,x:f,y:h})}function Ih(e,n){const t=Lu(e).scrollLeft;return n?n.left+t:Gi(yr(e)).left+t}function hz(e,n,t){t===void 0&&(t=!1);const i=e.getBoundingClientRect(),o=i.left+n.scrollLeft-(t?0:Ih(e,i)),l=i.top+n.scrollTop;return{x:o,y:l}}function RT(e){let{elements:n,rect:t,offsetParent:i,strategy:o}=e;const l=o==="fixed",a=yr(i),d=n?Du(n.floating):!1;if(i===a||d&&l)return t;let f={scrollLeft:0,scrollTop:0},h=dr(1);const y=dr(0),u=gr(i);if((u||!u&&!l)&&((eo(i)!=="body"||xa(a))&&(f=Lu(i)),gr(i))){const g=Gi(i);h=Ds(i),y.x=g.x+i.clientLeft,y.y=g.y+i.clientTop}const p=a&&!u&&!l?hz(a,f,!0):dr(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-f.scrollLeft*h.x+y.x+p.x,y:t.y*h.y-f.scrollTop*h.y+y.y+p.y}}function IT(e){return Array.from(e.getClientRects())}function MT(e){const n=yr(e),t=Lu(e),i=e.ownerDocument.body,o=ft(n.scrollWidth,n.clientWidth,i.scrollWidth,i.clientWidth),l=ft(n.scrollHeight,n.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+Ih(e);const d=-t.scrollTop;return Gt(i).direction==="rtl"&&(a+=ft(n.clientWidth,i.clientWidth)-o),{width:o,height:l,x:a,y:d}}function DT(e,n){const t=ht(e),i=yr(e),o=t.visualViewport;let l=i.clientWidth,a=i.clientHeight,d=0,f=0;if(o){l=o.width,a=o.height;const h=Ph();(!h||h&&n==="fixed")&&(d=o.offsetLeft,f=o.offsetTop)}return{width:l,height:a,x:d,y:f}}function LT(e,n){const t=Gi(e,!0,n==="fixed"),i=t.top+e.clientTop,o=t.left+e.clientLeft,l=gr(e)?Ds(e):dr(1),a=e.clientWidth*l.x,d=e.clientHeight*l.y,f=o*l.x,h=i*l.y;return{width:a,height:d,x:f,y:h}}function By(e,n,t){let i;if(n==="viewport")i=DT(e,t);else if(n==="document")i=MT(yr(e));else if(Kt(n))i=LT(n,t);else{const o=fz(e);i={x:n.x-o.x,y:n.y-o.y,width:n.width,height:n.height}}return mu(i)}function pz(e,n){const t=yi(e);return t===n||!Kt(t)||Ks(t)?!1:Gt(t).position==="fixed"||pz(t,n)}function OT(e,n){const t=n.get(e);if(t)return t;let i=aa(e,[],!1).filter(d=>Kt(d)&&eo(d)!=="body"),o=null;const l=Gt(e).position==="fixed";let a=l?yi(e):e;for(;Kt(a)&&!Ks(a);){const d=Gt(a),f=Ah(a);!f&&d.position==="fixed"&&(o=null),(l?!f&&!o:!f&&d.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||xa(a)&&!f&&pz(e,a))?i=i.filter(y=>y!==a):o=d,a=yi(a)}return n.set(e,i),i}function NT(e){let{element:n,boundary:t,rootBoundary:i,strategy:o}=e;const a=[...t==="clippingAncestors"?Du(n)?[]:OT(n,this._c):[].concat(t),i],d=a[0],f=a.reduce((h,y)=>{const u=By(n,y,o);return h.top=ft(u.top,h.top),h.right=mi(u.right,h.right),h.bottom=mi(u.bottom,h.bottom),h.left=ft(u.left,h.left),h},By(n,d,o));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function FT(e){const{width:n,height:t}=dz(e);return{width:n,height:t}}function VT(e,n,t){const i=gr(n),o=yr(n),l=t==="fixed",a=Gi(e,!0,l,n);let d={scrollLeft:0,scrollTop:0};const f=dr(0);if(i||!i&&!l)if((eo(n)!=="body"||xa(o))&&(d=Lu(n)),i){const p=Gi(n,!0,l,n);f.x=p.x+n.clientLeft,f.y=p.y+n.clientTop}else o&&(f.x=Ih(o));const h=o&&!i&&!l?hz(o,d):dr(0),y=a.left+d.scrollLeft-f.x-h.x,u=a.top+d.scrollTop-f.y-h.y;return{x:y,y:u,width:a.width,height:a.height}}function Bd(e){return Gt(e).position==="static"}function Uy(e,n){if(!gr(e)||Gt(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return yr(e)===t&&(t=t.ownerDocument.body),t}function mz(e,n){const t=ht(e);if(Du(e))return t;if(!gr(e)){let o=yi(e);for(;o&&!Ks(o);){if(Kt(o)&&!Bd(o))return o;o=yi(o)}return t}let i=Uy(e,n);for(;i&&jT(i)&&Bd(i);)i=Uy(i,n);return i&&Ks(i)&&Bd(i)&&!Ah(i)?t:i||ET(e)||t}const BT=async function(e){const n=this.getOffsetParent||mz,t=this.getDimensions,i=await t(e.floating);return{reference:VT(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function UT(e){return Gt(e).direction==="rtl"}const $T={convertOffsetParentRelativeRectToViewportRelativeRect:RT,getDocumentElement:yr,getClippingRect:NT,getOffsetParent:mz,getElementRects:BT,getClientRects:IT,getDimensions:FT,getScale:Ds,isElement:Kt,isRTL:UT};function gz(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function HT(e,n){let t=null,i;const o=yr(e);function l(){var d;clearTimeout(i),(d=t)==null||d.disconnect(),t=null}function a(d,f){d===void 0&&(d=!1),f===void 0&&(f=1),l();const h=e.getBoundingClientRect(),{left:y,top:u,width:p,height:g}=h;if(d||n(),!p||!g)return;const b=ql(u),z=ql(o.clientWidth-(y+p)),x=ql(o.clientHeight-(u+g)),w=ql(y),C={rootMargin:-b+"px "+-z+"px "+-x+"px "+-w+"px",threshold:ft(0,mi(1,f))||1};let R=!0;function D(P){const $=P[0].intersectionRatio;if($!==f){if(!R)return a();$?a(!1,$):i=setTimeout(()=>{a(!1,1e-7)},1e3)}$===1&&!gz(h,e.getBoundingClientRect())&&a(),R=!1}try{t=new IntersectionObserver(D,{...C,root:o.ownerDocument})}catch{t=new IntersectionObserver(D,C)}t.observe(e)}return a(!0),l}function WT(e,n,t,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:f=!1}=i,h=Rh(e),y=o||l?[...h?aa(h):[],...aa(n)]:[];y.forEach(w=>{o&&w.addEventListener("scroll",t,{passive:!0}),l&&w.addEventListener("resize",t)});const u=h&&d?HT(h,t):null;let p=-1,g=null;a&&(g=new ResizeObserver(w=>{let[_]=w;_&&_.target===h&&g&&(g.unobserve(n),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var C;(C=g)==null||C.observe(n)})),t()}),h&&!f&&g.observe(h),g.observe(n));let b,z=f?Gi(e):null;f&&x();function x(){const w=Gi(e);z&&!gz(z,w)&&t(),z=w,b=requestAnimationFrame(x)}return t(),()=>{var w;y.forEach(_=>{o&&_.removeEventListener("scroll",t),l&&_.removeEventListener("resize",t)}),u==null||u(),(w=g)==null||w.disconnect(),g=null,f&&cancelAnimationFrame(b)}}const qT=ST,KT=_T,GT=zT,QT=TT,YT=wT,$y=bT,XT=CT,ZT=(e,n,t)=>{const i=new Map,o={platform:$T,...t},l={...o.platform,_c:i};return vT(e,n,{...o,platform:l})};var ru=typeof document<"u"?T.useLayoutEffect:T.useEffect;function gu(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,i,o;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(i=t;i--!==0;)if(!gu(e[i],n[i]))return!1;return!0}if(o=Object.keys(e),t=o.length,t!==Object.keys(n).length)return!1;for(i=t;i--!==0;)if(!{}.hasOwnProperty.call(n,o[i]))return!1;for(i=t;i--!==0;){const l=o[i];if(!(l==="_owner"&&e.$$typeof)&&!gu(e[l],n[l]))return!1}return!0}return e!==e&&n!==n}function yz(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Hy(e,n){const t=yz(e);return Math.round(n*t)/t}function Ud(e){const n=T.useRef(e);return ru(()=>{n.current=e}),n}function JT(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:d=!0,whileElementsMounted:f,open:h}=e,[y,u]=T.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[p,g]=T.useState(i);gu(p,i)||g(i);const[b,z]=T.useState(null),[x,w]=T.useState(null),_=T.useCallback(F=>{F!==P.current&&(P.current=F,z(F))},[]),C=T.useCallback(F=>{F!==$.current&&($.current=F,w(F))},[]),R=l||b,D=a||x,P=T.useRef(null),$=T.useRef(null),Y=T.useRef(y),K=f!=null,L=Ud(f),J=Ud(o),G=Ud(h),ee=T.useCallback(()=>{if(!P.current||!$.current)return;const F={placement:n,strategy:t,middleware:p};J.current&&(F.platform=J.current),ZT(P.current,$.current,F).then(q=>{const j={...q,isPositioned:G.current!==!1};B.current&&!gu(Y.current,j)&&(Y.current=j,Eu.flushSync(()=>{u(j)}))})},[p,n,t,J,G]);ru(()=>{h===!1&&Y.current.isPositioned&&(Y.current.isPositioned=!1,u(F=>({...F,isPositioned:!1})))},[h]);const B=T.useRef(!1);ru(()=>(B.current=!0,()=>{B.current=!1}),[]),ru(()=>{if(R&&(P.current=R),D&&($.current=D),R&&D){if(L.current)return L.current(R,D,ee);ee()}},[R,D,ee,L,K]);const re=T.useMemo(()=>({reference:P,floating:$,setReference:_,setFloating:C}),[_,C]),ue=T.useMemo(()=>({reference:R,floating:D}),[R,D]),X=T.useMemo(()=>{const F={position:t,left:0,top:0};if(!ue.floating)return F;const q=Hy(ue.floating,y.x),j=Hy(ue.floating,y.y);return d?{...F,transform:"translate("+q+"px, "+j+"px)",...yz(ue.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:q,top:j}},[t,d,ue.floating,y.x,y.y]);return T.useMemo(()=>({...y,update:ee,refs:re,elements:ue,floatingStyles:X}),[y,ee,re,ue,X])}const ej=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:i,padding:o}=typeof e=="function"?e(t):e;return i&&n(i)?i.current!=null?$y({element:i.current,padding:o}).fn(t):{}:i?$y({element:i,padding:o}).fn(t):{}}}},nj=(e,n)=>({...qT(e),options:[e,n]}),tj=(e,n)=>({...KT(e),options:[e,n]}),rj=(e,n)=>({...XT(e),options:[e,n]}),ij=(e,n)=>({...GT(e),options:[e,n]}),sj=(e,n)=>({...QT(e),options:[e,n]}),oj=(e,n)=>({...YT(e),options:[e,n]}),aj=(e,n)=>({...ej(e),options:[e,n]});var lj="Arrow",kz=T.forwardRef((e,n)=>{const{children:t,width:i=10,height:o=5,...l}=e;return N.jsx(_n.svg,{...l,ref:n,width:i,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:N.jsx("polygon",{points:"0,0 30,0 15,10"})})});kz.displayName=lj;var uj=kz;function vz(e){const[n,t]=T.useState(void 0);return Ki(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const i=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const l=o[0];let a,d;if("borderBoxSize"in l){const f=l.borderBoxSize,h=Array.isArray(f)?f[0]:f;a=h.inlineSize,d=h.blockSize}else a=e.offsetWidth,d=e.offsetHeight;t({width:a,height:d})});return i.observe(e,{box:"border-box"}),()=>i.unobserve(e)}else t(void 0)},[e]),n}var bz="Popper",[zz,wz]=wa(bz),[H4,xz]=zz(bz),Sz="PopperAnchor",_z=T.forwardRef((e,n)=>{const{__scopePopper:t,virtualRef:i,...o}=e,l=xz(Sz,t),a=T.useRef(null),d=Et(n,a);return T.useEffect(()=>{l.onAnchorChange((i==null?void 0:i.current)||a.current)}),i?null:N.jsx(_n.div,{...o,ref:d})});_z.displayName=Sz;var Mh="PopperContent",[cj,dj]=zz(Mh),Cz=T.forwardRef((e,n)=>{var ye,Ce,Ae,Be,yn,At;const{__scopePopper:t,side:i="bottom",sideOffset:o=0,align:l="center",alignOffset:a=0,arrowPadding:d=0,avoidCollisions:f=!0,collisionBoundary:h=[],collisionPadding:y=0,sticky:u="partial",hideWhenDetached:p=!1,updatePositionStrategy:g="optimized",onPlaced:b,...z}=e,x=xz(Mh,t),[w,_]=T.useState(null),C=Et(n,Ln=>_(Ln)),[R,D]=T.useState(null),P=vz(R),$=(P==null?void 0:P.width)??0,Y=(P==null?void 0:P.height)??0,K=i+(l!=="center"?"-"+l:""),L=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},J=Array.isArray(h)?h:[h],G=J.length>0,ee={padding:L,boundary:J.filter(hj),altBoundary:G},{refs:B,floatingStyles:re,placement:ue,isPositioned:X,middlewareData:F}=JT({strategy:"fixed",placement:K,whileElementsMounted:(...Ln)=>WT(...Ln,{animationFrame:g==="always"}),elements:{reference:x.anchor},middleware:[nj({mainAxis:o+Y,alignmentAxis:a}),f&&tj({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?rj():void 0,...ee}),f&&ij({...ee}),sj({...ee,apply:({elements:Ln,rects:Qt,availableWidth:vr,availableHeight:Yt})=>{const{width:Xt,height:Zt}=Qt.reference,ot=Ln.floating.style;ot.setProperty("--radix-popper-available-width",`${vr}px`),ot.setProperty("--radix-popper-available-height",`${Yt}px`),ot.setProperty("--radix-popper-anchor-width",`${Xt}px`),ot.setProperty("--radix-popper-anchor-height",`${Zt}px`)}}),R&&aj({element:R,padding:d}),pj({arrowWidth:$,arrowHeight:Y}),p&&oj({strategy:"referenceHidden",...ee})]}),[q,j]=Ez(ue),I=mr(b);Ki(()=>{X&&(I==null||I())},[X,I]);const H=(ye=F.arrow)==null?void 0:ye.x,E=(Ce=F.arrow)==null?void 0:Ce.y,ce=((Ae=F.arrow)==null?void 0:Ae.centerOffset)!==0,[ke,ge]=T.useState();return Ki(()=>{w&&ge(window.getComputedStyle(w).zIndex)},[w]),N.jsx("div",{ref:B.setFloating,"data-radix-popper-content-wrapper":"",style:{...re,transform:X?re.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ke,"--radix-popper-transform-origin":[(Be=F.transformOrigin)==null?void 0:Be.x,(yn=F.transformOrigin)==null?void 0:yn.y].join(" "),...((At=F.hide)==null?void 0:At.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:N.jsx(cj,{scope:t,placedSide:q,onArrowChange:D,arrowX:H,arrowY:E,shouldHideArrow:ce,children:N.jsx(_n.div,{"data-side":q,"data-align":j,...z,ref:C,style:{...z.style,animation:X?void 0:"none"}})})})});Cz.displayName=Mh;var Tz="PopperArrow",fj={top:"bottom",right:"left",bottom:"top",left:"right"},jz=T.forwardRef(function(n,t){const{__scopePopper:i,...o}=n,l=dj(Tz,i),a=fj[l.placedSide];return N.jsx("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0},children:N.jsx(uj,{...o,ref:t,style:{...o.style,display:"block"}})})});jz.displayName=Tz;function hj(e){return e!==null}var pj=e=>({name:"transformOrigin",options:e,fn(n){var x,w,_;const{placement:t,rects:i,middlewareData:o}=n,a=((x=o.arrow)==null?void 0:x.centerOffset)!==0,d=a?0:e.arrowWidth,f=a?0:e.arrowHeight,[h,y]=Ez(t),u={start:"0%",center:"50%",end:"100%"}[y],p=(((w=o.arrow)==null?void 0:w.x)??0)+d/2,g=(((_=o.arrow)==null?void 0:_.y)??0)+f/2;let b="",z="";return h==="bottom"?(b=a?u:`${p}px`,z=`${-f}px`):h==="top"?(b=a?u:`${p}px`,z=`${i.floating.height+f}px`):h==="right"?(b=`${-f}px`,z=a?u:`${g}px`):h==="left"&&(b=`${i.floating.width+f}px`,z=a?u:`${g}px`),{data:{x:b,y:z}}}});function Ez(e){const[n,t="center"]=e.split("-");return[n,t]}var mj=_z,gj=Cz,yj=jz,[Ou,W4]=wa("Tooltip",[wz]),Dh=wz(),Az="TooltipProvider",kj=700,Wy="tooltip.open",[vj,Pz]=Ou(Az),Rz=e=>{const{__scopeTooltip:n,delayDuration:t=kj,skipDelayDuration:i=300,disableHoverableContent:o=!1,children:l}=e,a=T.useRef(!0),d=T.useRef(!1),f=T.useRef(0);return T.useEffect(()=>{const h=f.current;return()=>window.clearTimeout(h)},[]),N.jsx(vj,{scope:n,isOpenDelayedRef:a,delayDuration:t,onOpen:T.useCallback(()=>{window.clearTimeout(f.current),a.current=!1},[]),onClose:T.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>a.current=!0,i)},[i]),isPointerInTransitRef:d,onPointerInTransitChange:T.useCallback(h=>{d.current=h},[]),disableHoverableContent:o,children:l})};Rz.displayName=Az;var Iz="Tooltip",[q4,Nu]=Ou(Iz),If="TooltipTrigger",bj=T.forwardRef((e,n)=>{const{__scopeTooltip:t,...i}=e,o=Nu(If,t),l=Pz(If,t),a=Dh(t),d=T.useRef(null),f=Et(n,d,o.onTriggerChange),h=T.useRef(!1),y=T.useRef(!1),u=T.useCallback(()=>h.current=!1,[]);return T.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),N.jsx(mj,{asChild:!0,...a,children:N.jsx(_n.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...i,ref:f,onPointerMove:fn(e.onPointerMove,p=>{p.pointerType!=="touch"&&!y.current&&!l.isPointerInTransitRef.current&&(o.onTriggerEnter(),y.current=!0)}),onPointerLeave:fn(e.onPointerLeave,()=>{o.onTriggerLeave(),y.current=!1}),onPointerDown:fn(e.onPointerDown,()=>{o.open&&o.onClose(),h.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:fn(e.onFocus,()=>{h.current||o.onOpen()}),onBlur:fn(e.onBlur,o.onClose),onClick:fn(e.onClick,o.onClose)})})});bj.displayName=If;var zj="TooltipPortal",[K4,wj]=Ou(zj,{forceMount:void 0}),Gs="TooltipContent",Mz=T.forwardRef((e,n)=>{const t=wj(Gs,e.__scopeTooltip),{forceMount:i=t.forceMount,side:o="top",...l}=e,a=Nu(Gs,e.__scopeTooltip);return N.jsx(zh,{present:i||a.open,children:a.disableHoverableContent?N.jsx(Dz,{side:o,...l,ref:n}):N.jsx(xj,{side:o,...l,ref:n})})}),xj=T.forwardRef((e,n)=>{const t=Nu(Gs,e.__scopeTooltip),i=Pz(Gs,e.__scopeTooltip),o=T.useRef(null),l=Et(n,o),[a,d]=T.useState(null),{trigger:f,onClose:h}=t,y=o.current,{onPointerInTransitChange:u}=i,p=T.useCallback(()=>{d(null),u(!1)},[u]),g=T.useCallback((b,z)=>{const x=b.currentTarget,w={x:b.clientX,y:b.clientY},_=jj(w,x.getBoundingClientRect()),C=Ej(w,_),R=Aj(z.getBoundingClientRect()),D=Rj([...C,...R]);d(D),u(!0)},[u]);return T.useEffect(()=>()=>p(),[p]),T.useEffect(()=>{if(f&&y){const b=x=>g(x,y),z=x=>g(x,f);return f.addEventListener("pointerleave",b),y.addEventListener("pointerleave",z),()=>{f.removeEventListener("pointerleave",b),y.removeEventListener("pointerleave",z)}}},[f,y,g,p]),T.useEffect(()=>{if(a){const b=z=>{const x=z.target,w={x:z.clientX,y:z.clientY},_=(f==null?void 0:f.contains(x))||(y==null?void 0:y.contains(x)),C=!Pj(w,a);_?p():C&&(p(),h())};return document.addEventListener("pointermove",b),()=>document.removeEventListener("pointermove",b)}},[f,y,a,h,p]),N.jsx(Dz,{...e,ref:l})}),[Sj,_j]=Ou(Iz,{isInside:!1}),Cj=i_("TooltipContent"),Dz=T.forwardRef((e,n)=>{const{__scopeTooltip:t,children:i,"aria-label":o,onEscapeKeyDown:l,onPointerDownOutside:a,...d}=e,f=Nu(Gs,t),h=Dh(t),{onClose:y}=f;return T.useEffect(()=>(document.addEventListener(Wy,y),()=>document.removeEventListener(Wy,y)),[y]),T.useEffect(()=>{if(f.trigger){const u=p=>{const g=p.target;g!=null&&g.contains(f.trigger)&&y()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[f.trigger,y]),N.jsx(bh,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:a,onFocusOutside:u=>u.preventDefault(),onDismiss:y,children:N.jsxs(gj,{"data-state":f.stateAttribute,...h,...d,ref:n,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[N.jsx(Cj,{children:i}),N.jsx(Sj,{scope:t,isInside:!0,children:N.jsx(__,{id:f.contentId,role:"tooltip",children:o||i})})]})})});Mz.displayName=Gs;var Lz="TooltipArrow",Tj=T.forwardRef((e,n)=>{const{__scopeTooltip:t,...i}=e,o=Dh(t);return _j(Lz,t).isInside?null:N.jsx(yj,{...o,...i,ref:n})});Tj.displayName=Lz;function jj(e,n){const t=Math.abs(n.top-e.y),i=Math.abs(n.bottom-e.y),o=Math.abs(n.right-e.x),l=Math.abs(n.left-e.x);switch(Math.min(t,i,o,l)){case l:return"left";case o:return"right";case t:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function Ej(e,n,t=5){const i=[];switch(n){case"top":i.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":i.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":i.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":i.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return i}function Aj(e){const{top:n,right:t,bottom:i,left:o}=e;return[{x:o,y:n},{x:t,y:n},{x:t,y:i},{x:o,y:i}]}function Pj(e,n){const{x:t,y:i}=e;let o=!1;for(let l=0,a=n.length-1;l<n.length;a=l++){const d=n[l].x,f=n[l].y,h=n[a].x,y=n[a].y;f>i!=y>i&&t<(h-d)*(i-f)/(y-f)+d&&(o=!o)}return o}function Rj(e){const n=e.slice();return n.sort((t,i)=>t.x<i.x?-1:t.x>i.x?1:t.y<i.y?-1:t.y>i.y?1:0),Ij(n)}function Ij(e){if(e.length<=1)return e.slice();const n=[];for(let i=0;i<e.length;i++){const o=e[i];for(;n.length>=2;){const l=n[n.length-1],a=n[n.length-2];if((l.x-a.x)*(o.y-a.y)>=(l.y-a.y)*(o.x-a.x))n.pop();else break}n.push(o)}n.pop();const t=[];for(let i=e.length-1;i>=0;i--){const o=e[i];for(;t.length>=2;){const l=t[t.length-1],a=t[t.length-2];if((l.x-a.x)*(o.y-a.y)>=(l.y-a.y)*(o.x-a.x))t.pop();else break}t.push(o)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}var Mj=Rz,Oz=Mz;const Dj=Mj,Lj=T.forwardRef(({className:e,sideOffset:n=4,...t},i)=>N.jsx(Oz,{ref:i,sideOffset:n,className:ln("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));Lj.displayName=Oz.displayName;var Fu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Vu=typeof window>"u"||"Deno"in globalThis;function $t(){}function Oj(e,n){return typeof e=="function"?e(n):e}function Nj(e){return typeof e=="number"&&e>=0&&e!==1/0}function Fj(e,n){return Math.max(e+(n||0)-Date.now(),0)}function qy(e,n){return typeof e=="function"?e(n):e}function Vj(e,n){return typeof e=="function"?e(n):e}function Ky(e,n){const{type:t="all",exact:i,fetchStatus:o,predicate:l,queryKey:a,stale:d}=e;if(a){if(i){if(n.queryHash!==Lh(a,n.options))return!1}else if(!ua(n.queryKey,a))return!1}if(t!=="all"){const f=n.isActive();if(t==="active"&&!f||t==="inactive"&&f)return!1}return!(typeof d=="boolean"&&n.isStale()!==d||o&&o!==n.state.fetchStatus||l&&!l(n))}function Gy(e,n){const{exact:t,status:i,predicate:o,mutationKey:l}=e;if(l){if(!n.options.mutationKey)return!1;if(t){if(la(n.options.mutationKey)!==la(l))return!1}else if(!ua(n.options.mutationKey,l))return!1}return!(i&&n.state.status!==i||o&&!o(n))}function Lh(e,n){return((n==null?void 0:n.queryKeyHashFn)||la)(e)}function la(e){return JSON.stringify(e,(n,t)=>Mf(t)?Object.keys(t).sort().reduce((i,o)=>(i[o]=t[o],i),{}):t)}function ua(e,n){return e===n?!0:typeof e!=typeof n?!1:e&&n&&typeof e=="object"&&typeof n=="object"?Object.keys(n).every(t=>ua(e[t],n[t])):!1}function Nz(e,n){if(e===n)return e;const t=Qy(e)&&Qy(n);if(t||Mf(e)&&Mf(n)){const i=t?e:Object.keys(e),o=i.length,l=t?n:Object.keys(n),a=l.length,d=t?[]:{};let f=0;for(let h=0;h<a;h++){const y=t?h:l[h];(!t&&i.includes(y)||t)&&e[y]===void 0&&n[y]===void 0?(d[y]=void 0,f++):(d[y]=Nz(e[y],n[y]),d[y]===e[y]&&e[y]!==void 0&&f++)}return o===a&&f===o?e:d}return n}function Qy(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Mf(e){if(!Yy(e))return!1;const n=e.constructor;if(n===void 0)return!0;const t=n.prototype;return!(!Yy(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Yy(e){return Object.prototype.toString.call(e)==="[object Object]"}function Bj(e){return new Promise(n=>{setTimeout(n,e)})}function Uj(e,n,t){return typeof t.structuralSharing=="function"?t.structuralSharing(e,n):t.structuralSharing!==!1?Nz(e,n):n}function $j(e,n,t=0){const i=[...e,n];return t&&i.length>t?i.slice(1):i}function Hj(e,n,t=0){const i=[n,...e];return t&&i.length>t?i.slice(0,-1):i}var Oh=Symbol();function Fz(e,n){return!e.queryFn&&(n!=null&&n.initialPromise)?()=>n.initialPromise:!e.queryFn||e.queryFn===Oh?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Vi,li,Ns,cb,Wj=(cb=class extends Fu{constructor(){super();Ne(this,Vi);Ne(this,li);Ne(this,Ns);Te(this,Ns,n=>{if(!Vu&&window.addEventListener){const t=()=>n();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){Z(this,li)||this.setEventListener(Z(this,Ns))}onUnsubscribe(){var n;this.hasListeners()||((n=Z(this,li))==null||n.call(this),Te(this,li,void 0))}setEventListener(n){var t;Te(this,Ns,n),(t=Z(this,li))==null||t.call(this),Te(this,li,n(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(n){Z(this,Vi)!==n&&(Te(this,Vi,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(t=>{t(n)})}isFocused(){var n;return typeof Z(this,Vi)=="boolean"?Z(this,Vi):((n=globalThis.document)==null?void 0:n.visibilityState)!=="hidden"}},Vi=new WeakMap,li=new WeakMap,Ns=new WeakMap,cb),Vz=new Wj,Fs,ui,Vs,db,qj=(db=class extends Fu{constructor(){super();Ne(this,Fs,!0);Ne(this,ui);Ne(this,Vs);Te(this,Vs,n=>{if(!Vu&&window.addEventListener){const t=()=>n(!0),i=()=>n(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",i)}}})}onSubscribe(){Z(this,ui)||this.setEventListener(Z(this,Vs))}onUnsubscribe(){var n;this.hasListeners()||((n=Z(this,ui))==null||n.call(this),Te(this,ui,void 0))}setEventListener(n){var t;Te(this,Vs,n),(t=Z(this,ui))==null||t.call(this),Te(this,ui,n(this.setOnline.bind(this)))}setOnline(n){Z(this,Fs)!==n&&(Te(this,Fs,n),this.listeners.forEach(i=>{i(n)}))}isOnline(){return Z(this,Fs)}},Fs=new WeakMap,ui=new WeakMap,Vs=new WeakMap,db),yu=new qj;function Kj(){let e,n;const t=new Promise((o,l)=>{e=o,n=l});t.status="pending",t.catch(()=>{});function i(o){Object.assign(t,o),delete t.resolve,delete t.reject}return t.resolve=o=>{i({status:"fulfilled",value:o}),e(o)},t.reject=o=>{i({status:"rejected",reason:o}),n(o)},t}function Gj(e){return Math.min(1e3*2**e,3e4)}function Bz(e){return(e??"online")==="online"?yu.isOnline():!0}var Uz=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function $d(e){return e instanceof Uz}function $z(e){let n=!1,t=0,i=!1,o;const l=Kj(),a=z=>{var x;i||(p(new Uz(z)),(x=e.abort)==null||x.call(e))},d=()=>{n=!0},f=()=>{n=!1},h=()=>Vz.isFocused()&&(e.networkMode==="always"||yu.isOnline())&&e.canRun(),y=()=>Bz(e.networkMode)&&e.canRun(),u=z=>{var x;i||(i=!0,(x=e.onSuccess)==null||x.call(e,z),o==null||o(),l.resolve(z))},p=z=>{var x;i||(i=!0,(x=e.onError)==null||x.call(e,z),o==null||o(),l.reject(z))},g=()=>new Promise(z=>{var x;o=w=>{(i||h())&&z(w)},(x=e.onPause)==null||x.call(e)}).then(()=>{var z;o=void 0,i||(z=e.onContinue)==null||z.call(e)}),b=()=>{if(i)return;let z;const x=t===0?e.initialPromise:void 0;try{z=x??e.fn()}catch(w){z=Promise.reject(w)}Promise.resolve(z).then(u).catch(w=>{var P;if(i)return;const _=e.retry??(Vu?0:3),C=e.retryDelay??Gj,R=typeof C=="function"?C(t,w):C,D=_===!0||typeof _=="number"&&t<_||typeof _=="function"&&_(t,w);if(n||!D){p(w);return}t++,(P=e.onFail)==null||P.call(e,t,w),Bj(R).then(()=>h()?void 0:g()).then(()=>{n?p(w):b()})})};return{promise:l,cancel:a,continue:()=>(o==null||o(),l),cancelRetry:d,continueRetry:f,canStart:y,start:()=>(y()?b():g().then(b),l)}}var Qj=e=>setTimeout(e,0);function Yj(){let e=[],n=0,t=d=>{d()},i=d=>{d()},o=Qj;const l=d=>{n?e.push(d):o(()=>{t(d)})},a=()=>{const d=e;e=[],d.length&&o(()=>{i(()=>{d.forEach(f=>{t(f)})})})};return{batch:d=>{let f;n++;try{f=d()}finally{n--,n||a()}return f},batchCalls:d=>(...f)=>{l(()=>{d(...f)})},schedule:l,setNotifyFunction:d=>{t=d},setBatchNotifyFunction:d=>{i=d},setScheduler:d=>{o=d}}}var $n=Yj(),Bi,fb,Hz=(fb=class{constructor(){Ne(this,Bi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Nj(this.gcTime)&&Te(this,Bi,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Vu?1/0:5*60*1e3))}clearGcTimeout(){Z(this,Bi)&&(clearTimeout(Z(this,Bi)),Te(this,Bi,void 0))}},Bi=new WeakMap,fb),Bs,Us,Ct,Ui,Rn,ba,$i,Ht,Er,hb,Xj=(hb=class extends Hz{constructor(n){super();Ne(this,Ht);Ne(this,Bs);Ne(this,Us);Ne(this,Ct);Ne(this,Ui);Ne(this,Rn);Ne(this,ba);Ne(this,$i);Te(this,$i,!1),Te(this,ba,n.defaultOptions),this.setOptions(n.options),this.observers=[],Te(this,Ui,n.client),Te(this,Ct,Z(this,Ui).getQueryCache()),this.queryKey=n.queryKey,this.queryHash=n.queryHash,Te(this,Bs,Jj(this.options)),this.state=n.state??Z(this,Bs),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var n;return(n=Z(this,Rn))==null?void 0:n.promise}setOptions(n){this.options={...Z(this,ba),...n},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&Z(this,Ct).remove(this)}setData(n,t){const i=Uj(this.state.data,n,this.options);return Pn(this,Ht,Er).call(this,{data:i,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),i}setState(n,t){Pn(this,Ht,Er).call(this,{type:"setState",state:n,setStateOptions:t})}cancel(n){var i,o;const t=(i=Z(this,Rn))==null?void 0:i.promise;return(o=Z(this,Rn))==null||o.cancel(n),t?t.then($t).catch($t):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(Z(this,Bs))}isActive(){return this.observers.some(n=>Vj(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Oh||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(n=0){return this.state.isInvalidated||this.state.data===void 0||!Fj(this.state.dataUpdatedAt,n)}onFocus(){var t;const n=this.observers.find(i=>i.shouldFetchOnWindowFocus());n==null||n.refetch({cancelRefetch:!1}),(t=Z(this,Rn))==null||t.continue()}onOnline(){var t;const n=this.observers.find(i=>i.shouldFetchOnReconnect());n==null||n.refetch({cancelRefetch:!1}),(t=Z(this,Rn))==null||t.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),Z(this,Ct).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(t=>t!==n),this.observers.length||(Z(this,Rn)&&(Z(this,$i)?Z(this,Rn).cancel({revert:!0}):Z(this,Rn).cancelRetry()),this.scheduleGc()),Z(this,Ct).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Pn(this,Ht,Er).call(this,{type:"invalidate"})}fetch(n,t){var f,h,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(t!=null&&t.cancelRefetch))this.cancel({silent:!0});else if(Z(this,Rn))return Z(this,Rn).continueRetry(),Z(this,Rn).promise}if(n&&this.setOptions(n),!this.options.queryFn){const u=this.observers.find(p=>p.options.queryFn);u&&this.setOptions(u.options)}const i=new AbortController,o=u=>{Object.defineProperty(u,"signal",{enumerable:!0,get:()=>(Te(this,$i,!0),i.signal)})},l=()=>{const u=Fz(this.options,t),p={client:Z(this,Ui),queryKey:this.queryKey,meta:this.meta};return o(p),Te(this,$i,!1),this.options.persister?this.options.persister(u,p,this):u(p)},a={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:Z(this,Ui),state:this.state,fetchFn:l};o(a),(f=this.options.behavior)==null||f.onFetch(a,this),Te(this,Us,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=a.fetchOptions)==null?void 0:h.meta))&&Pn(this,Ht,Er).call(this,{type:"fetch",meta:(y=a.fetchOptions)==null?void 0:y.meta});const d=u=>{var p,g,b,z;$d(u)&&u.silent||Pn(this,Ht,Er).call(this,{type:"error",error:u}),$d(u)||((g=(p=Z(this,Ct).config).onError)==null||g.call(p,u,this),(z=(b=Z(this,Ct).config).onSettled)==null||z.call(b,this.state.data,u,this)),this.scheduleGc()};return Te(this,Rn,$z({initialPromise:t==null?void 0:t.initialPromise,fn:a.fetchFn,abort:i.abort.bind(i),onSuccess:u=>{var p,g,b,z;if(u===void 0){d(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(u)}catch(x){d(x);return}(g=(p=Z(this,Ct).config).onSuccess)==null||g.call(p,u,this),(z=(b=Z(this,Ct).config).onSettled)==null||z.call(b,u,this.state.error,this),this.scheduleGc()},onError:d,onFail:(u,p)=>{Pn(this,Ht,Er).call(this,{type:"failed",failureCount:u,error:p})},onPause:()=>{Pn(this,Ht,Er).call(this,{type:"pause"})},onContinue:()=>{Pn(this,Ht,Er).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),Z(this,Rn).start()}},Bs=new WeakMap,Us=new WeakMap,Ct=new WeakMap,Ui=new WeakMap,Rn=new WeakMap,ba=new WeakMap,$i=new WeakMap,Ht=new WeakSet,Er=function(n){const t=i=>{switch(n.type){case"failed":return{...i,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Zj(i.data,this.options),fetchMeta:n.meta??null};case"success":return{...i,data:n.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:n.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=n.error;return $d(o)&&o.revert&&Z(this,Us)?{...Z(this,Us),fetchStatus:"idle"}:{...i,error:o,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...n.state}}};this.state=t(this.state),$n.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),Z(this,Ct).notify({query:this,type:"updated",action:n})})},hb);function Zj(e,n){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Bz(n.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Jj(e){const n=typeof e.initialData=="function"?e.initialData():e.initialData,t=n!==void 0,i=t?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:n,dataUpdateCount:0,dataUpdatedAt:t?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var lr,pb,eE=(pb=class extends Fu{constructor(n={}){super();Ne(this,lr);this.config=n,Te(this,lr,new Map)}build(n,t,i){const o=t.queryKey,l=t.queryHash??Lh(o,t);let a=this.get(l);return a||(a=new Xj({client:n,queryKey:o,queryHash:l,options:n.defaultQueryOptions(t),state:i,defaultOptions:n.getQueryDefaults(o)}),this.add(a)),a}add(n){Z(this,lr).has(n.queryHash)||(Z(this,lr).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const t=Z(this,lr).get(n.queryHash);t&&(n.destroy(),t===n&&Z(this,lr).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){$n.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return Z(this,lr).get(n)}getAll(){return[...Z(this,lr).values()]}find(n){const t={exact:!0,...n};return this.getAll().find(i=>Ky(t,i))}findAll(n={}){const t=this.getAll();return Object.keys(n).length>0?t.filter(i=>Ky(n,i)):t}notify(n){$n.batch(()=>{this.listeners.forEach(t=>{t(n)})})}onFocus(){$n.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){$n.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},lr=new WeakMap,pb),ur,Un,Hi,cr,oi,mb,nE=(mb=class extends Hz{constructor(n){super();Ne(this,cr);Ne(this,ur);Ne(this,Un);Ne(this,Hi);this.mutationId=n.mutationId,Te(this,Un,n.mutationCache),Te(this,ur,[]),this.state=n.state||tE(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){Z(this,ur).includes(n)||(Z(this,ur).push(n),this.clearGcTimeout(),Z(this,Un).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){Te(this,ur,Z(this,ur).filter(t=>t!==n)),this.scheduleGc(),Z(this,Un).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){Z(this,ur).length||(this.state.status==="pending"?this.scheduleGc():Z(this,Un).remove(this))}continue(){var n;return((n=Z(this,Hi))==null?void 0:n.continue())??this.execute(this.state.variables)}async execute(n){var l,a,d,f,h,y,u,p,g,b,z,x,w,_,C,R,D,P,$,Y;const t=()=>{Pn(this,cr,oi).call(this,{type:"continue"})};Te(this,Hi,$z({fn:()=>this.options.mutationFn?this.options.mutationFn(n):Promise.reject(new Error("No mutationFn found")),onFail:(K,L)=>{Pn(this,cr,oi).call(this,{type:"failed",failureCount:K,error:L})},onPause:()=>{Pn(this,cr,oi).call(this,{type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>Z(this,Un).canRun(this)}));const i=this.state.status==="pending",o=!Z(this,Hi).canStart();try{if(i)t();else{Pn(this,cr,oi).call(this,{type:"pending",variables:n,isPaused:o}),await((a=(l=Z(this,Un).config).onMutate)==null?void 0:a.call(l,n,this));const L=await((f=(d=this.options).onMutate)==null?void 0:f.call(d,n));L!==this.state.context&&Pn(this,cr,oi).call(this,{type:"pending",context:L,variables:n,isPaused:o})}const K=await Z(this,Hi).start();return await((y=(h=Z(this,Un).config).onSuccess)==null?void 0:y.call(h,K,n,this.state.context,this)),await((p=(u=this.options).onSuccess)==null?void 0:p.call(u,K,n,this.state.context)),await((b=(g=Z(this,Un).config).onSettled)==null?void 0:b.call(g,K,null,this.state.variables,this.state.context,this)),await((x=(z=this.options).onSettled)==null?void 0:x.call(z,K,null,n,this.state.context)),Pn(this,cr,oi).call(this,{type:"success",data:K}),K}catch(K){try{throw await((_=(w=Z(this,Un).config).onError)==null?void 0:_.call(w,K,n,this.state.context,this)),await((R=(C=this.options).onError)==null?void 0:R.call(C,K,n,this.state.context)),await((P=(D=Z(this,Un).config).onSettled)==null?void 0:P.call(D,void 0,K,this.state.variables,this.state.context,this)),await((Y=($=this.options).onSettled)==null?void 0:Y.call($,void 0,K,n,this.state.context)),K}finally{Pn(this,cr,oi).call(this,{type:"error",error:K})}}finally{Z(this,Un).runNext(this)}}},ur=new WeakMap,Un=new WeakMap,Hi=new WeakMap,cr=new WeakSet,oi=function(n){const t=i=>{switch(n.type){case"failed":return{...i,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...i,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:n.error,failureCount:i.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}};this.state=t(this.state),$n.batch(()=>{Z(this,ur).forEach(i=>{i.onMutationUpdate(n)}),Z(this,Un).notify({mutation:this,type:"updated",action:n})})},mb);function tE(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ar,Wt,za,gb,rE=(gb=class extends Fu{constructor(n={}){super();Ne(this,Ar);Ne(this,Wt);Ne(this,za);this.config=n,Te(this,Ar,new Set),Te(this,Wt,new Map),Te(this,za,0)}build(n,t,i){const o=new nE({mutationCache:this,mutationId:++Bl(this,za)._,options:n.defaultMutationOptions(t),state:i});return this.add(o),o}add(n){Z(this,Ar).add(n);const t=Kl(n);if(typeof t=="string"){const i=Z(this,Wt).get(t);i?i.push(n):Z(this,Wt).set(t,[n])}this.notify({type:"added",mutation:n})}remove(n){if(Z(this,Ar).delete(n)){const t=Kl(n);if(typeof t=="string"){const i=Z(this,Wt).get(t);if(i)if(i.length>1){const o=i.indexOf(n);o!==-1&&i.splice(o,1)}else i[0]===n&&Z(this,Wt).delete(t)}}this.notify({type:"removed",mutation:n})}canRun(n){const t=Kl(n);if(typeof t=="string"){const i=Z(this,Wt).get(t),o=i==null?void 0:i.find(l=>l.state.status==="pending");return!o||o===n}else return!0}runNext(n){var i;const t=Kl(n);if(typeof t=="string"){const o=(i=Z(this,Wt).get(t))==null?void 0:i.find(l=>l!==n&&l.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){$n.batch(()=>{Z(this,Ar).forEach(n=>{this.notify({type:"removed",mutation:n})}),Z(this,Ar).clear(),Z(this,Wt).clear()})}getAll(){return Array.from(Z(this,Ar))}find(n){const t={exact:!0,...n};return this.getAll().find(i=>Gy(t,i))}findAll(n={}){return this.getAll().filter(t=>Gy(n,t))}notify(n){$n.batch(()=>{this.listeners.forEach(t=>{t(n)})})}resumePausedMutations(){const n=this.getAll().filter(t=>t.state.isPaused);return $n.batch(()=>Promise.all(n.map(t=>t.continue().catch($t))))}},Ar=new WeakMap,Wt=new WeakMap,za=new WeakMap,gb);function Kl(e){var n;return(n=e.options.scope)==null?void 0:n.id}function Xy(e){return{onFetch:(n,t)=>{var y,u,p,g,b;const i=n.options,o=(p=(u=(y=n.fetchOptions)==null?void 0:y.meta)==null?void 0:u.fetchMore)==null?void 0:p.direction,l=((g=n.state.data)==null?void 0:g.pages)||[],a=((b=n.state.data)==null?void 0:b.pageParams)||[];let d={pages:[],pageParams:[]},f=0;const h=async()=>{let z=!1;const x=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(n.signal.aborted?z=!0:n.signal.addEventListener("abort",()=>{z=!0}),n.signal)})},w=Fz(n.options,n.fetchOptions),_=async(C,R,D)=>{if(z)return Promise.reject();if(R==null&&C.pages.length)return Promise.resolve(C);const P={client:n.client,queryKey:n.queryKey,pageParam:R,direction:D?"backward":"forward",meta:n.options.meta};x(P);const $=await w(P),{maxPages:Y}=n.options,K=D?Hj:$j;return{pages:K(C.pages,$,Y),pageParams:K(C.pageParams,R,Y)}};if(o&&l.length){const C=o==="backward",R=C?iE:Zy,D={pages:l,pageParams:a},P=R(i,D);d=await _(D,P,C)}else{const C=e??l.length;do{const R=f===0?a[0]??i.initialPageParam:Zy(i,d);if(f>0&&R==null)break;d=await _(d,R),f++}while(f<C)}return d};n.options.persister?n.fetchFn=()=>{var z,x;return(x=(z=n.options).persister)==null?void 0:x.call(z,h,{client:n.client,queryKey:n.queryKey,meta:n.options.meta,signal:n.signal},t)}:n.fetchFn=h}}}function Zy(e,{pages:n,pageParams:t}){const i=n.length-1;return n.length>0?e.getNextPageParam(n[i],n,t[i],t):void 0}function iE(e,{pages:n,pageParams:t}){var i;return n.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,n[0],n,t[0],t):void 0}var tn,ci,di,$s,Hs,fi,Ws,qs,yb,sE=(yb=class{constructor(e={}){Ne(this,tn);Ne(this,ci);Ne(this,di);Ne(this,$s);Ne(this,Hs);Ne(this,fi);Ne(this,Ws);Ne(this,qs);Te(this,tn,e.queryCache||new eE),Te(this,ci,e.mutationCache||new rE),Te(this,di,e.defaultOptions||{}),Te(this,$s,new Map),Te(this,Hs,new Map),Te(this,fi,0)}mount(){Bl(this,fi)._++,Z(this,fi)===1&&(Te(this,Ws,Vz.subscribe(async e=>{e&&(await this.resumePausedMutations(),Z(this,tn).onFocus())})),Te(this,qs,yu.subscribe(async e=>{e&&(await this.resumePausedMutations(),Z(this,tn).onOnline())})))}unmount(){var e,n;Bl(this,fi)._--,Z(this,fi)===0&&((e=Z(this,Ws))==null||e.call(this),Te(this,Ws,void 0),(n=Z(this,qs))==null||n.call(this),Te(this,qs,void 0))}isFetching(e){return Z(this,tn).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return Z(this,ci).findAll({...e,status:"pending"}).length}getQueryData(e){var t;const n=this.defaultQueryOptions({queryKey:e});return(t=Z(this,tn).get(n.queryHash))==null?void 0:t.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),t=Z(this,tn).build(this,n),i=t.state.data;return i===void 0?this.fetchQuery(e):(e.revalidateIfStale&&t.isStaleByTime(qy(n.staleTime,t))&&this.prefetchQuery(n),Promise.resolve(i))}getQueriesData(e){return Z(this,tn).findAll(e).map(({queryKey:n,state:t})=>{const i=t.data;return[n,i]})}setQueryData(e,n,t){const i=this.defaultQueryOptions({queryKey:e}),o=Z(this,tn).get(i.queryHash),l=o==null?void 0:o.state.data,a=Oj(n,l);if(a!==void 0)return Z(this,tn).build(this,i).setData(a,{...t,manual:!0})}setQueriesData(e,n,t){return $n.batch(()=>Z(this,tn).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,n,t)]))}getQueryState(e){var t;const n=this.defaultQueryOptions({queryKey:e});return(t=Z(this,tn).get(n.queryHash))==null?void 0:t.state}removeQueries(e){const n=Z(this,tn);$n.batch(()=>{n.findAll(e).forEach(t=>{n.remove(t)})})}resetQueries(e,n){const t=Z(this,tn);return $n.batch(()=>(t.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const t={revert:!0,...n},i=$n.batch(()=>Z(this,tn).findAll(e).map(o=>o.cancel(t)));return Promise.all(i).then($t).catch($t)}invalidateQueries(e,n={}){return $n.batch(()=>(Z(this,tn).findAll(e).forEach(t=>{t.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const t={...n,cancelRefetch:n.cancelRefetch??!0},i=$n.batch(()=>Z(this,tn).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let l=o.fetch(void 0,t);return t.throwOnError||(l=l.catch($t)),o.state.fetchStatus==="paused"?Promise.resolve():l}));return Promise.all(i).then($t)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const t=Z(this,tn).build(this,n);return t.isStaleByTime(qy(n.staleTime,t))?t.fetch(n):Promise.resolve(t.state.data)}prefetchQuery(e){return this.fetchQuery(e).then($t).catch($t)}fetchInfiniteQuery(e){return e.behavior=Xy(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then($t).catch($t)}ensureInfiniteQueryData(e){return e.behavior=Xy(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return yu.isOnline()?Z(this,ci).resumePausedMutations():Promise.resolve()}getQueryCache(){return Z(this,tn)}getMutationCache(){return Z(this,ci)}getDefaultOptions(){return Z(this,di)}setDefaultOptions(e){Te(this,di,e)}setQueryDefaults(e,n){Z(this,$s).set(la(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...Z(this,$s).values()],t={};return n.forEach(i=>{ua(e,i.queryKey)&&Object.assign(t,i.defaultOptions)}),t}setMutationDefaults(e,n){Z(this,Hs).set(la(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...Z(this,Hs).values()],t={};return n.forEach(i=>{ua(e,i.mutationKey)&&Object.assign(t,i.defaultOptions)}),t}defaultQueryOptions(e){if(e._defaulted)return e;const n={...Z(this,di).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Lh(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Oh&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...Z(this,di).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){Z(this,tn).clear(),Z(this,ci).clear()}},tn=new WeakMap,ci=new WeakMap,di=new WeakMap,$s=new WeakMap,Hs=new WeakMap,fi=new WeakMap,Ws=new WeakMap,qs=new WeakMap,yb),oE=T.createContext(void 0),aE=({client:e,children:n})=>(T.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),N.jsx(oE.Provider,{value:e,children:n}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ca.apply(this,arguments)}var hi;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(hi||(hi={}));const Jy="popstate";function lE(e){e===void 0&&(e={});function n(o,l){let{pathname:a="/",search:d="",hash:f=""}=Yi(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Df("",{pathname:a,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let a=o.document.querySelector("base"),d="";if(a&&a.getAttribute("href")){let f=o.location.href,h=f.indexOf("#");d=h===-1?f:f.slice(0,h)}return d+"#"+(typeof l=="string"?l:ku(l))}function i(o,l){Nh(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return cE(n,t,i,e)}function hn(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Nh(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function uE(){return Math.random().toString(36).substr(2,8)}function ek(e,n){return{usr:e.state,key:e.key,idx:n}}function Df(e,n,t,i){return t===void 0&&(t=null),ca({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Yi(n):n,{state:t,key:n&&n.key||i||uE()})}function ku(e){let{pathname:n="/",search:t="",hash:i=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Yi(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function cE(e,n,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,a=o.history,d=hi.Pop,f=null,h=y();h==null&&(h=0,a.replaceState(ca({},a.state,{idx:h}),""));function y(){return(a.state||{idx:null}).idx}function u(){d=hi.Pop;let x=y(),w=x==null?null:x-h;h=x,f&&f({action:d,location:z.location,delta:w})}function p(x,w){d=hi.Push;let _=Df(z.location,x,w);t&&t(_,x),h=y()+1;let C=ek(_,h),R=z.createHref(_);try{a.pushState(C,"",R)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;o.location.assign(R)}l&&f&&f({action:d,location:z.location,delta:1})}function g(x,w){d=hi.Replace;let _=Df(z.location,x,w);t&&t(_,x),h=y();let C=ek(_,h),R=z.createHref(_);a.replaceState(C,"",R),l&&f&&f({action:d,location:z.location,delta:0})}function b(x){let w=o.location.origin!=="null"?o.location.origin:o.location.href,_=typeof x=="string"?x:ku(x);return _=_.replace(/ $/,"%20"),hn(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let z={get action(){return d},get location(){return e(o,a)},listen(x){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Jy,u),f=x,()=>{o.removeEventListener(Jy,u),f=null}},createHref(x){return n(o,x)},createURL:b,encodeLocation(x){let w=b(x);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:p,replace:g,go(x){return a.go(x)}};return z}var nk;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nk||(nk={}));function dE(e,n,t){return t===void 0&&(t="/"),fE(e,n,t)}function fE(e,n,t,i){let o=typeof n=="string"?Yi(n):n,l=Fh(o.pathname||"/",t);if(l==null)return null;let a=Wz(e);hE(a);let d=null;for(let f=0;d==null&&f<a.length;++f){let h=_E(l);d=wE(a[f],h)}return d}function Wz(e,n,t,i){n===void 0&&(n=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,a,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};f.relativePath.startsWith("/")&&(hn(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let h=pi([i,f.relativePath]),y=t.concat(f);l.children&&l.children.length>0&&(hn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Wz(l.children,n,y,h)),!(l.path==null&&!l.index)&&n.push({path:h,score:bE(h,l.index),routesMeta:y})};return e.forEach((l,a)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,a);else for(let f of qz(l.path))o(l,a,f)}),n}function qz(e){let n=e.split("/");if(n.length===0)return[];let[t,...i]=n,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let a=qz(i.join("/")),d=[];return d.push(...a.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...a),d.map(f=>e.startsWith("/")&&f===""?"/":f)}function hE(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:zE(n.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const pE=/^:[\w-]+$/,mE=3,gE=2,yE=1,kE=10,vE=-2,tk=e=>e==="*";function bE(e,n){let t=e.split("/"),i=t.length;return t.some(tk)&&(i+=vE),n&&(i+=gE),t.filter(o=>!tk(o)).reduce((o,l)=>o+(pE.test(l)?mE:l===""?yE:kE),i)}function zE(e,n){return e.length===n.length&&e.slice(0,-1).every((i,o)=>i===n[o])?e[e.length-1]-n[n.length-1]:0}function wE(e,n,t){let{routesMeta:i}=e,o={},l="/",a=[];for(let d=0;d<i.length;++d){let f=i[d],h=d===i.length-1,y=l==="/"?n:n.slice(l.length)||"/",u=xE({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},y),p=f.route;if(!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:pi([l,u.pathname]),pathnameBase:EE(pi([l,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(l=pi([l,u.pathnameBase]))}return a}function xE(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,i]=SE(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let l=o[0],a=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((h,y,u)=>{let{paramName:p,isOptional:g}=y;if(p==="*"){let z=d[u]||"";a=l.slice(0,l.length-z.length).replace(/(.)\/+$/,"$1")}const b=d[u];return g&&!b?h[p]=void 0:h[p]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:a,pattern:e}}function SE(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Nh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,d,f)=>(i.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),i]}function _E(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Nh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Fh(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}function CE(e,n){n===void 0&&(n="/");let{pathname:t,search:i="",hash:o=""}=typeof e=="string"?Yi(e):e;return{pathname:t?t.startsWith("/")?t:TE(t,n):n,search:AE(i),hash:PE(o)}}function TE(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Hd(e,n,t,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jE(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Kz(e,n){let t=jE(e);return n?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Gz(e,n,t,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=Yi(e):(o=ca({},e),hn(!o.pathname||!o.pathname.includes("?"),Hd("?","pathname","search",o)),hn(!o.pathname||!o.pathname.includes("#"),Hd("#","pathname","hash",o)),hn(!o.search||!o.search.includes("#"),Hd("#","search","hash",o)));let l=e===""||o.pathname==="",a=l?"/":o.pathname,d;if(a==null)d=t;else{let u=n.length-1;if(!i&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),u-=1;o.pathname=p.join("/")}d=u>=0?n[u]:"/"}let f=CE(o,d),h=a&&a!=="/"&&a.endsWith("/"),y=(l||a===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(h||y)&&(f.pathname+="/"),f}const pi=e=>e.join("/").replace(/\/\/+/g,"/"),EE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),AE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,PE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function RE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qz=["post","put","patch","delete"];new Set(Qz);const IE=["get",...Qz];new Set(IE);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},da.apply(this,arguments)}const Vh=T.createContext(null),ME=T.createContext(null),Xi=T.createContext(null),Bu=T.createContext(null),Zi=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Yz=T.createContext(null);function DE(e,n){let{relative:t}=n===void 0?{}:n;Sa()||hn(!1);let{basename:i,navigator:o}=T.useContext(Xi),{hash:l,pathname:a,search:d}=Zz(e,{relative:t}),f=a;return i!=="/"&&(f=a==="/"?i:pi([i,a])),o.createHref({pathname:f,search:d,hash:l})}function Sa(){return T.useContext(Bu)!=null}function _a(){return Sa()||hn(!1),T.useContext(Bu).location}function Xz(e){T.useContext(Xi).static||T.useLayoutEffect(e)}function LE(){let{isDataRoute:e}=T.useContext(Zi);return e?QE():OE()}function OE(){Sa()||hn(!1);let e=T.useContext(Vh),{basename:n,future:t,navigator:i}=T.useContext(Xi),{matches:o}=T.useContext(Zi),{pathname:l}=_a(),a=JSON.stringify(Kz(o,t.v7_relativeSplatPath)),d=T.useRef(!1);return Xz(()=>{d.current=!0}),T.useCallback(function(h,y){if(y===void 0&&(y={}),!d.current)return;if(typeof h=="number"){i.go(h);return}let u=Gz(h,JSON.parse(a),l,y.relative==="path");e==null&&n!=="/"&&(u.pathname=u.pathname==="/"?n:pi([n,u.pathname])),(y.replace?i.replace:i.push)(u,y.state,y)},[n,i,a,l,e])}function Zz(e,n){let{relative:t}=n===void 0?{}:n,{future:i}=T.useContext(Xi),{matches:o}=T.useContext(Zi),{pathname:l}=_a(),a=JSON.stringify(Kz(o,i.v7_relativeSplatPath));return T.useMemo(()=>Gz(e,JSON.parse(a),l,t==="path"),[e,a,l,t])}function NE(e,n){return FE(e,n)}function FE(e,n,t,i){Sa()||hn(!1);let{navigator:o,static:l}=T.useContext(Xi),{matches:a}=T.useContext(Zi),d=a[a.length-1],f=d?d.params:{};d&&d.pathname;let h=d?d.pathnameBase:"/";d&&d.route;let y=_a(),u;if(n){var p;let w=typeof n=="string"?Yi(n):n;h==="/"||(p=w.pathname)!=null&&p.startsWith(h)||hn(!1),u=w}else u=y;let g=u.pathname||"/",b=g;if(h!=="/"){let w=h.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(w.length).join("/")}let z=dE(e,{pathname:b}),x=HE(z&&z.map(w=>Object.assign({},w,{params:Object.assign({},f,w.params),pathname:pi([h,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?h:pi([h,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,t,i);return n&&x?T.createElement(Bu.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:hi.Pop}},x):x}function VE(){let e=GE(),n=RE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},n),t?T.createElement("pre",{style:o},t):null,null)}const BE=T.createElement(VE,null);class UE extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?T.createElement(Zi.Provider,{value:this.props.routeContext},T.createElement(Yz.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $E(e){let{routeContext:n,match:t,children:i}=e,o=T.useContext(Vh);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),T.createElement(Zi.Provider,{value:n},i)}function HE(e,n,t,i){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),i===void 0&&(i=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,d=(o=t)==null?void 0:o.errors;if(d!=null){let y=a.findIndex(u=>u.route.id&&(d==null?void 0:d[u.route.id])!==void 0);y>=0||hn(!1),a=a.slice(0,Math.min(a.length,y+1))}let f=!1,h=-1;if(t&&i&&i.v7_partialHydration)for(let y=0;y<a.length;y++){let u=a[y];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(h=y),u.route.id){let{loaderData:p,errors:g}=t,b=u.route.loader&&p[u.route.id]===void 0&&(!g||g[u.route.id]===void 0);if(u.route.lazy||b){f=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((y,u,p)=>{let g,b=!1,z=null,x=null;t&&(g=d&&u.route.id?d[u.route.id]:void 0,z=u.route.errorElement||BE,f&&(h<0&&p===0?(YE("route-fallback"),b=!0,x=null):h===p&&(b=!0,x=u.route.hydrateFallbackElement||null)));let w=n.concat(a.slice(0,p+1)),_=()=>{let C;return g?C=z:b?C=x:u.route.Component?C=T.createElement(u.route.Component,null):u.route.element?C=u.route.element:C=y,T.createElement($E,{match:u,routeContext:{outlet:y,matches:w,isDataRoute:t!=null},children:C})};return t&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?T.createElement(UE,{location:t.location,revalidation:t.revalidation,component:z,error:g,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var Jz=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jz||{}),ew=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ew||{});function WE(e){let n=T.useContext(Vh);return n||hn(!1),n}function qE(e){let n=T.useContext(ME);return n||hn(!1),n}function KE(e){let n=T.useContext(Zi);return n||hn(!1),n}function nw(e){let n=KE(),t=n.matches[n.matches.length-1];return t.route.id||hn(!1),t.route.id}function GE(){var e;let n=T.useContext(Yz),t=qE(),i=nw();return n!==void 0?n:(e=t.errors)==null?void 0:e[i]}function QE(){let{router:e}=WE(Jz.UseNavigateStable),n=nw(ew.UseNavigateStable),t=T.useRef(!1);return Xz(()=>{t.current=!0}),T.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,da({fromRouteId:n},l)))},[e,n])}const rk={};function YE(e,n,t){rk[e]||(rk[e]=!0)}function XE(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function iu(e){hn(!1)}function ZE(e){let{basename:n="/",children:t=null,location:i,navigationType:o=hi.Pop,navigator:l,static:a=!1,future:d}=e;Sa()&&hn(!1);let f=n.replace(/^\/*/,"/"),h=T.useMemo(()=>({basename:f,navigator:l,static:a,future:da({v7_relativeSplatPath:!1},d)}),[f,d,l,a]);typeof i=="string"&&(i=Yi(i));let{pathname:y="/",search:u="",hash:p="",state:g=null,key:b="default"}=i,z=T.useMemo(()=>{let x=Fh(y,f);return x==null?null:{location:{pathname:x,search:u,hash:p,state:g,key:b},navigationType:o}},[f,y,u,p,g,b,o]);return z==null?null:T.createElement(Xi.Provider,{value:h},T.createElement(Bu.Provider,{children:t,value:z}))}function JE(e){let{children:n,location:t}=e;return NE(Lf(n),t)}new Promise(()=>{});function Lf(e,n){n===void 0&&(n=[]);let t=[];return T.Children.forEach(e,(i,o)=>{if(!T.isValidElement(i))return;let l=[...n,o];if(i.type===T.Fragment){t.push.apply(t,Lf(i.props.children,l));return}i.type!==iu&&hn(!1),!i.props.index||!i.props.children||hn(!1);let a={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Lf(i.props.children,l)),t.push(a)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Of(){return Of=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Of.apply(this,arguments)}function eA(e,n){if(e==null)return{};var t={},i=Object.keys(e),o,l;for(l=0;l<i.length;l++)o=i[l],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function nA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tA(e,n){return e.button===0&&(!n||n==="_self")&&!nA(e)}const rA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],iA="6";try{window.__reactRouterVersion=iA}catch{}const sA="startTransition",ik=QS[sA];function oA(e){let{basename:n,children:t,future:i,window:o}=e,l=T.useRef();l.current==null&&(l.current=lE({window:o,v5Compat:!0}));let a=l.current,[d,f]=T.useState({action:a.action,location:a.location}),{v7_startTransition:h}=i||{},y=T.useCallback(u=>{h&&ik?ik(()=>f(u)):f(u)},[f,h]);return T.useLayoutEffect(()=>a.listen(y),[a,y]),T.useEffect(()=>XE(i),[i]),T.createElement(ZE,{basename:n,children:t,location:d.location,navigationType:d.action,navigator:a,future:i})}const aA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nf=T.forwardRef(function(n,t){let{onClick:i,relative:o,reloadDocument:l,replace:a,state:d,target:f,to:h,preventScrollReset:y,viewTransition:u}=n,p=eA(n,rA),{basename:g}=T.useContext(Xi),b,z=!1;if(typeof h=="string"&&lA.test(h)&&(b=h,aA))try{let C=new URL(window.location.href),R=h.startsWith("//")?new URL(C.protocol+h):new URL(h),D=Fh(R.pathname,g);R.origin===C.origin&&D!=null?h=D+R.search+R.hash:z=!0}catch{}let x=DE(h,{relative:o}),w=uA(h,{replace:a,state:d,target:f,preventScrollReset:y,relative:o,viewTransition:u});function _(C){i&&i(C),C.defaultPrevented||w(C)}return T.createElement("a",Of({},p,{href:b||x,onClick:z||l?i:_,ref:t,target:f}))});var sk;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sk||(sk={}));var ok;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ok||(ok={}));function uA(e,n){let{target:t,replace:i,state:o,preventScrollReset:l,relative:a,viewTransition:d}=n===void 0?{}:n,f=LE(),h=_a(),y=Zz(e,{relative:a});return T.useCallback(u=>{if(tA(u,t)){u.preventDefault();let p=i!==void 0?i:ku(h)===ku(y);f(e,{replace:p,state:o,preventScrollReset:l,relative:a,viewTransition:d})}},[h,f,y,i,o,t,e,l,a,d])}const cA=()=>N.jsx("div",{className:"p-4 text-center",children:N.jsx("a",{href:"https://www.dyad.sh/",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:"Made with Dyad"})}),tw=T.forwardRef(({className:e,...n},t)=>N.jsx("textarea",{className:ln("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:t,...n}));tw.displayName="Textarea";const dA=_h("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),rt=T.forwardRef(({className:e,variant:n,size:t,asChild:i=!1,...o},l)=>{const a=i?t_:"button";return N.jsx(a,{className:ln(dA({variant:n,size:t,className:e})),ref:l,...o})});rt.displayName="Button";const ak=`be - legyen
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
permit - engedély`,fA=`lifelong - élethosszig tartó
dedication - elkötelezettségre, Elkötelezettséget, elkötelezettségüket
dedicated - elkötelezettek, elkötelezettebb, elkötelezettséget
admirable - csodálatos
learner - nyelvtanuló, tanuló
relief - megkönnyebbülés
academic - akadémiai
willpower - akaraterő
discouraged - elcsüggedtem, Elcsüggedtem, elcsüggedni
accomplish - sikerült elérned, elérjük, érsz el
accomplishment - teljesítmény, teljesítményérzetet
frustrating - frusztrálónak, frusztráló
motor - motor, motorja, motorod
pedal - pedál, fékpedál, fékpedálom
pothole - kátyú
dashboard - műszerfalra, műszerfala, műszerfalat
beneath - alatt, alattatok
sudden - hirtelen
on my way - útközben
berries - bogyókat, Bogyókat, bogyószedés
nostalgic - nosztalgikus, nosztalgiát, nosztalgiássá
good old days - régi szép idők
reminisce - nosztalgiázom, nosztalgiázni
fond - Szeretett
slide - csúszdán, csúszda, csúszdája
bubble gum - rágógumi
lollipop - nyalókámat, nyalóka, nyalókát
hide and seek - bújócska
dodgeball - kerülgetőlabdát, kerülgetőlabda
recess - szünet
scouts - cserkészek
handcuffs - bilincs
illusion - illúzió, illúziót, illúziónak
precisely - pontosan
suspenseful - Izgalmas, izgalmas, izgalmasabb
handkerchief - zsebkendőre, zsebkendőt, zsebkendő
rub - dörzsölöd, dörzsölöm
blindfolded - bekötött szemű, bekötve, bekötött
incredibly - hihetetlenül
gasp - felkiált, felkiáltani, felkiáltsak, felkiáltott
untie - kibogozza, bogozni, kibogozni
knot - csomót, csomó
magician - bűvész
solar system - naprendszer
skeptical - szkeptikus, szkeptikusan, Szkeptikus
convinced - meggyőzte
improbable - valószínűtlen
suppose - feltételezem
spaceship - űrhajó, űrhajóban, űrhajón
galaxy - galaxisunkból, galaxisunkban, galaxisban
ruins - romokban, romjai, romot
theory - teória, elmélet
archeologist - régész
classified - titkosított, titkosította
coincidence - véletlenül, véletlen
ufo - UFO-tól, UFO-t, UFO
alien - idegen, idegennek, idegennel
pyramids - piramisok
formerly - régen
monument - műemléke, műemlék, műemléket
charm - bája, bájának, bájosak
noteworthy - figyelemre méltó
pottery - kerámiák
exhibit - kiállítást, kiállítását, kiállítás
those ones - azok
masterpiece - Mesterműnek, mesterművének, mestermű
portrait - portré, portréja, portrét
capture - megörökítik, megörökíteni, megörökítenie
these ones - ezeket
tower - torony
designed - tervezték, tervezve, tervezte
heritage - örökség
site - honlap, helyszín, hely
ultimate - végső
determination - elszántságát, kitartásod, elszántság
podium - emelvény, emelvényre, emelvényt
medalist - bronzérmes, aranyérmes, ezüstérmes
inspiring - inspiráló, Inspiráló
brazilian - brazil
upcoming - következő
bronze - bronzszínű, bronzérem
anticipated - várják
following - követ, következők
olympic - olimpiai
qualify - kvalifikálni, kvalifikáljanak, kvalifikálta-e
gather - gyűlnek
picturesque - festői
assuming that - feltéve
summit - csúcson, csúcsig, csúcs
leopard - leopárd, leopárdot
poisonous - mérgező
daylight - nappal, nappali fény
dehydrated - kiszáradt
conditions - feltételek, körülmények
attempt - megkísérel, próbálkozás, próba
provided - biztosítani, ellátott
gear - felszerelésre, felszerelésem, felszerelést
safari - szafari
rafting - vadvízi evezés, eveznénk, eveztem
trekking - túrázás
canyon - kanyon, kanyonba, kanyonban
trail - ösvény
target - célod, célokra, célunkat
priority - prioritásunk, prioritás, prioritásnak
guidelines - irányelvek
technical - műszaki
prior - Mielőtt
efficient - hatékony
background information - háttér-információ
corporation - vállalat, vállalattól, vállalatot
obligation - kötelessége, kötelességet, kötelesség
practical - gyakorlati, praktikus, Gyakorlati
potential - potenciálját, potenciálunk, potenciálja
observation - megfigyelés
overall - összességében
run into - befutni, (ők) befutnak, befut(nak)
compliment - bókot, bóknak, Bóknak
liking - szereted-e, szereti, Szereti
expecting - számított
kindergarten - óvoda
loving - szeretőd
overseas - külföldön, külföldre, külföldről
things - dolgainkat, dolgaimat, dologra
going - megy, elmennek, járást
forties - negyvenes éveinkben, negyvenes éveimben
professionally - profi módon
household - háztartási
scrub - dörzsöl, megdörzsöl
paper towels - papírtörlőt, papírtörlőket, papírtörlők
blinds - redőnyt
fabulous - mesés
on account of - következtében, miatt
surely - Biztosan
filmmaker - filmkészítő
mingle - keveredjek, keveredjünk, keveredj
superb - nagyszerű
hors d'oeuvres - előételek
sophisticated - kifinomult
gown - ruhádban, estélyi ruha
gala - gála
effective - hatékony
abs - hasizmaid
session - edzés, foglalkozás
pull-up - húzódzkodás
treadmill - futópad
injury - sérülésből
cardio - kardió
squats - guggol, guggolások
weights - súlyemelés, súlyok, súlyzókat
resolution - fogadalom
deal - megállapodást, megegyezés, megállapodás
unwanted - nem kívánt
lid - WC-tetőt, fedél
fur - szőrme
restore - helyreállíthatnánk, helyreállítom, helyreállítasz
junk - szemetet
whichever - bármelyik, akármit
dominoes - dominó
wants to - szeretne
french fries - hasábburgonya
specific - pontosabb, konkrét
in charge - felelős, megbízva
estimate - becsülték, becsülte, becsülted, becsülni
milestone - mérföldkő
rewarding - jutalmazó
goods - javak
advertising - reklámozás
from now - mostantól
original - eredeti
roughly - durván
slight - kis, enyhe
preference - preferencia, előnyben
sensible - érzékeny
alternate - alternatív
look into - benéznek
considerably - jelentősen
accommodations - szállás
thinking of - gondolkodtam rajta, gondolkodom, gondolkodsz rajta
potentially - potenciálisan
express - kifejezni
passion - szenvedélye, szenvedélyemet
occasionally - alkalmanként
warmth - melegség
permanently - véglegesen
move away - elköltöznek
afterwards - utána
stunning - pompás
chaperone - kísérő
prom queen - bálkirálynő
crown - korona
pose - pózol
tuxedo - szmoking
confirmation - megerősítést
limo - limuzin
prom - végzős bál
spotlight - reflektor
critic - kritikus
highly - nagyon
impressed - lenyűgöz, lenyűgözött
rehearsal - próba
script - forgatókönyv
production - termelés, előállítás
audition - meghallgatás
may be - lehet
equally - egyformán
belongings - tulajdona, holmijaid
divide - elosztjuk, megosztani
plumber - vízvezetékszerelő
behavior - magaviselet, viselkedés, magatartás
hail - jégeső
wristband - karszalag
cotton candy - vattacukor
requirement - követelmény
temporarily - ideiglenes
packed - csomagoltam, bepakolta, csomagoltak
gigantic - hatalmas
uncertain - bizonytalan
artistic - művészi
surroundings - környezet
laundromat - mosoda
deli - delikát bolt, delikát boltot, delikát boltban
adjust - alkalmazkodni, alkalmazkodniuk
conventional - hagyományos
hardworking - szorgalmas
agriculture - mezőgazdaság
values - értékek
spooky - ijesztő
racing - versenyezni
squirrel - mókus
hanging - lógni, akaszt
goosebumps - libabőr
cliffhanger - függővég
darkness - sötétség
werewolf - vérfarkas, vérfarkasról
marshmallow - pillecukrot
s'mores - s'mores
justice - igazság
distract - zavarj
crucial - létfontosságú
footprint - lábnyomot
bullet - golyót
considering - figyelembe, fontolgatjuk
gang - banda, macskabanda
weapon - fegyver
fingerprint - ujjlenyomat
disguise - jelmeze, jelmezben, jelmez
motive - indíték
appreciation - elismerését
ideal - ideális
in the end - végül, Végül is
karaoke - karaoke
any longer - már, tovább
catering - catering
lobster - homár
unpopular - népszerűtlen
theme - téma
tricky - trükkös
seating - ülésrend, ülőhely, helyfoglalás
committee - bizottság
venue - helyszín
hassle - macera
pathetic - szánalmas
considerable - jelentős
gullible - hiszékeny
dishonest - tisztességtelen
desperate - kétségbeesett
furious - dühös
spam - Spam, levélszemét
misleading - félrevezető
fake - hamis
ban - tiltani
scam - csalás
probation - próbaidő
client - klienssel, kliens, kliensed
victim - áldozat
alibi - alibi
evidence - bizonyíték
on the contrary - sőt
accusation - vád, állításod
it was - volt
judge - bírót, bíró
defendant - vádlott
witness - tanú
whistle - sípszó
foul - szabálytalanság, szabálytalanságot
referee - (sport) bíró, bíró
by now - mostanra
mascot - kabala
quarter - negyed
the same - ugyanaz, egyformák, ugyanazok
tailgating - autós piknikezés, parkolóban csomagtartóból ivás
cooler - hűvösebb, menőbb, menőbbek
halftime - félidő
nonsense - nonszensz
playoff - rájátszás
bleachers - lelátónál, lelátó
decade - évtized
breakthrough - áttörés
method - módszer
prevention - megelőző, megelőzés
rural - vidéki
urban - városi
lifestyle - életmód
equality - egyenlőség
gender - nemek
one of the - az egyik ...
unlike - ellentétben, eltérően
union - szövetség, egyesület, unió
strike - sztrájk, munkabeszüntetés
nationwide - országosan, országos, országszerte
over time - idővel, az idők során, az idők folyamán
gradually - fokozatosan
entrepreneur - vállalkozó
vegan - vegán
accessible - elérhető
steady - állandó
slightly - kissé
rise - növekedés, emelkedés, emelkedést
data - adat
investor - befektető
profit - profittal
influential - befolyásos
alternative - alternatíva, választási lehetőség, másik lehetőség
soundtrack - filmzene
worldwide - világhírűvé, világsiker
electronic - elektronikus
release - kiadni
hippie - hippie
songwriter - dalszerző
rhythm - ritmusra, ritmusérzékem
lifetime - élete
bravery - bátorság
lifeguard - úszómester
surfer - szörfös
incident - eset, esemény
neighboring - szomszédos
medal - érem
go away - elmenni
deer - szarvas
fascinating - lenyűgöző, lenyűgözőek
satisfaction - elégedettség
useless - haszontalan
process - folyamat, folyamathoz
sticker - matrica
unavailable - elérhetetlen
defective - rossz
guarantee - garancia, garantáljuk, garanciát
supervisor - felügyelőm, felügyelő
service - szolgáltatás, ügyfélszolgálat, kiszolgálás
waterproof - vízálló
policy - politika
thoughtful - figyelmes
hesitate - habozz
alternatively - alternatív megoldásként, vagy esetleg
of me - énrólam, belőlem, rólam
gardening - kertészkedés
persuade - meggyőz
rearrange - átrendez
unlock - kinyit
out of town - távol van
inconvenient - kellemetlen
wondering - tűnődve
functional - funkcionális
otherwise - máskülönben
fortune - vagyonba
purchase - megvásárol, vásárlás, vásárol
thermometer - hőmérő
impress - lenyűgözd
smelly - büdös
magic - varázslat, mágikus
biggest - legnagyobb
snore - Horkol, horkoló
confidence - bizalmukat
artificial - mesterséges
toenail - köröm, lábköröm
nor - sem
boost - fokozni, növelni
wealthy - gazdag
sequel - folytatás
violent - erőszakos
punch - ütéssel
chase - üldözni, üldözi, üldöztük
suspicious - gyanús
feather - tolla, toll
wolf - farkas, farkasnak
tail - farok
superpower - szupererő
superhero - szuperhős
tolerate - tűrd el, tolerál
microwave - mikrohullámú
rip - elszakad, elszakít
see through - átlát
gum - rágógumit, rágógumimmal, rágógumival
chew - rágj, rágógumit, rágok
vanish - eltűnik, tűnt el
keychain - kulcstartó
shall we - jó
management - menedzsment
at this point - ezen a ponton
capacity - kapacitással, kapacitású
overtime - túlórában, túlóra, túlórázni
submit - beadnunk, adták be, beadtad
possibility - lehetőség, lehetőségünk
certified - tanúsítványra, tanúsítvány, tanúsítványt
brief - rövid
contribute - hozzájárulni
duty - kötelességed
negotiate - tárgyalj, megtárgyalj
expectation - elvárás, elvárása
sensitive - érzékeny
genuine - eredeti
insult - sértésnek
governor - kormányzó, kormányzónak
dip - mártás, mártogatóst
tough - kemények, kemény
calculator - számológép
tray - tálca
cheer - szurkol
from time to time - időről időre, időnként
toxic - mérgező
breakup - szakítást
valid - érvényes
consideration - figyelembe
doubtful - kétséges
approval - jóváhagyását, engedély
as far as i know - tudomásom szerint, amennyire én tudom
accuse - vádolod
confess - bevallom
propose - javasol
suspicion - gyanítom, gyanítod, gyanítottam
suffering - szenvedés, szenved
circumstance - körülmények
survive - túléljük, túlélni, túléljek
encounter - találkozhatunk, találkoztok, találkozunk
aircraft - repülőgépek
rope - kötélen, kötélugró, kötél
deadly - halálos
hurricane - hurrikán
concern - aggaszt, aggodalom, aggodalomra
native - őshonos
injured - sebesült
crab - rák
shelter - menedékhely, menedék
faulty - rossz, rosszak
shipwreck - hajótörést
investigate - vizsgálj, utánajárhatunk
greedy - kapzsi
threaten - fenyeget, megfenyegeti
reaction - reakció
rewatch - újranéz, újra megnéz
loyal - hűséges
anyhow - Mindenesetre
cemetery - temető
villain - gonosztevő
reveal - felfedje, felfedni
affair - viszonyt
orphan - árva
dramatic - drámai
deceive - becsapni
poison - megmérgezni, méreggel, méreg
courage - bátorságot, bátorságom
living - élő, lakunk
patience - türelem
irritated - irritált
productive - termelékeny
miserable - nyomorult, nyomorúságos
consequently - ennek következtében
reflect - elgondolkodni
impact - hatása
bartender - bártender
trap - csapda
determined - eltökélt
savings - megtakarítások
debt - tartozás, adósság
upbringing - neveltetésed, neveltetésem, neveltetése
outrageous - felháborító
frankly - őszintén
mailbox - postaládát, postaládám, mail
fire department - tűzoltóság
privacy - magánélet
endless - végtelen
ruin - tönkretenné, elrontaná
bizarre - bizarr
constantly - állandóan
driveway - kocsibeállón, kocsibeállót
haunted - kísértetjárta
skeleton - csontváz, csontvázat
spirit - szellemiségét
winding - kanyargós
panic - pánikolni, pánikba, bepánikoltatni
chimney - kémény, kéményre
sensation - érzés
crawl - mászik
peculiar - furcsa
flashlight - zseblámpa
abandon - hagyták el, elhagyták
astonished - elképedt
tabloid - bulvárlap, bulvárcikk
obsession - megszállottja, megszállottság
minor - apró
suspend - felfüggeszt
awkward - furcsa
clue - nyom
claim - állítja
odd - furcsa
swear - esküszöm
forward - elő
treat - jutalmamat, kezelésem, vendégül látsz
struggle - küzdesz, nehezen, küzdj
rush - sietünk, sietnek, kisietünk
internal - belső
maintain - fenntartani
in theory - elméletileg, elvileg
affect - (ki)hat vkire/vmire, hatással van, befolyásol
no longer - többé
truly - valóban, igazán
period - korszak, periódus, időszak
initially - eleinte
significant - jelentős
a number of - számos
pretend - teszel, tenni
nevertheless - mindazonáltal
bury - eltemetni, eltemetsz, eltemesse
tale - történet
instantly - azonnal
treasure - kincsvadászatok
strength - erő
get out of - ki, kiszállnak
fate - sors
evil - rossz, gonosznak, gonoszak
arrow - nyilat
magical - varázslatos
sword - kard
approach - megközelíteni
mysterious - rejtélyes
beyond - mögé
journey - utazás, út, utazásunkra
legend - legenda
eventually - végül
envy - irigylem
unreasonable - elfogadhatatlan, túlzó
therapy - terápia
agreement - megegyezés, megállapodás, megállapodást
understandable - érthető
ridiculous - nevetséges
frustration - frusztrációd, frusztráció
offensive - sértő, sértővé
practically - gyakorlatilag
yell - üvölt
admittedly - Be kell vallani
relieved - megkönnyebbült
investment - befektetés
damp - nyirkos
collapse - omlani, összeomlik
crack - repedés
clogged - eltömődött
construction - (meg)építés, építkezés, megépítését
extend - kibővíteni
maintenance - karbantartás
concerning - aggasztó
plumbing - vízvezeték
leak - vízszivárgást, szivárog
brick - tégla, téglaházakat
cautious - óvatos
wound - seb
recovery - felépülésed, felépülése, felépülés
vision - látás, látomás
unconscious - tudattalan
suffer - szenved
wrap - csomagol
severe - súlyos
as if - mintha
weakness - gyengeség
sweat - megizzasszalak, izzad
itch - viszket
formal - hivatalos, formális
bouquet - rózsacsokrot, csokrát
when in doubt - kétség esetén
reception - recepció, fogadás, recepciónál
interact - interaktálni
tablecloth - asztalterítő
inquire - utánajárok, érdeklődhet
what if - mi van (akkor) ha
cooperate - együttműködési, együttműködés
strategy - stratégia, stratégiája
unreliable - megbízhatatlan
let go - elengedlek
shift - műszak
unacceptable - elfogadhatatlan
spreadsheet - táblázatot
availability - elérhetőség
retirement - nyugdíjban
decline - csökken, hanyatlásának
sounds - hangokat, hangzik
unique - egyedi
virtual reality - virtuális valóság
impressive - leglenyűgözőbbek, lenyűgözőek, lenyűgöző
appropriately - megfelelően, illemesebben
homemade - házi
appealing - vonzó
lovely - imádnivaló
housewarming - házavató
irresponsible - felelőtlen
trick - trükkhöz, trükköt, trükkje
memorable - emlékezetes
in other words - más szavakkal
qualified - képes, alkalmas
reference - referencia
experiment - kísérlet
outline - vázlat
faculty - kar
senior - végzős
sitting - ülni, ülés, ülő
thesis - szakdolgozatomat, szakdolgozatom
philosophy - filozófia
underestimate - alábecsül
respond - válaszol, válaszoljak
that's why - ezért
ambitious - nagyravágyó, nagyravágyóak
embarrassment - szégyen
misunderstand - félreért
disagreement - nézeteltérése, vitánk, vita
after all - végül is
unrealistic - irreális
cowboy - cowboy
cliché - klisé
necessarily - szükségszerűen
competitive - versengő
love at first sight - szerelem első látásra
assume - feltételez, feltételezni
conclusion - konklúzió, következtetés
diverse - sokszínű
myth - mítosz
welcoming - vendégszerető
american - amerikai, amerikaiak, az amerikai
reputation - híre, hírnév
folks - emberek
host - házigazda, házigazdájának
allowance - zsebpénzét, zsebpénzére, zsebpénzként
bedtime - lefekvés ideje
nap - szundítani, szundíts, szundít
run to - odafutnak
errand - ügyet
cardboard - kartondobozokba, kartondoboz, kartondobozokat
arrange - rendezed, elrendezése
load - terhelés, teher, rakomány
stubborn - makacs
embarrass - megszégyeníteni, szégyenkezni
risk - kockázat, kockázatot
grounded - szobafogságra
consequence - következmény
edge - szegély, szél (vmi széle), perem
kill - öl
sharp - éles, pontos, pontosan
frost - dér
sledding - szánkózni, szánkózás
seasonal - szezonális
sunlight - napfény
shady - árnyékos
tornado - tornádó
humidity - nedvesség
freezing - fagyos
out there - ott kint
rainbow - szivárványszínű, szivárvány
regarding - vonatkozóan, kapcsolatban
furthermore - továbbá
stand up for - kiállok
by then - addigra
will have - addigra már (csinál majd vki vmit), lesz
elect - megválasztottuk
representative - képviselő
violence - erőszak
campaign - kampány
will you be - leszel, lesztek
threat - fenyegetés
opponent - ellenfél
related - kapcsolódó
turn out - kiderül
bond - kötvény
fluent - folyékony
whoever - Akit (is) ...
influence - befolyás
ages - korok
spontaneous - spontán, spontaneitás
outskirts - külváros
volcano - vulkán, tűzhányó, tűzhányót
unpredictable - kiszámíthatatlan
in the middle of nowhere - a semmi közepén
diner - étkezde
stormy - viharos
deck - fedélzet
sunburn - Leégtél
tropical - trópusi
itinerary - program, programot
soil - talaj
spray - spray-t
stem - szár
looking - néz, utánajártál
pond - tó, halastavat, tavukat
muddy - sárosnak, sáros
lawn - fű, gyep
mow - lenyír, nyír, nyírja
gardener - kertészt, kertésszel, kertész
bush - Bush
ground - föld, talaj
seed - mag
timing - időzítés
absolutely - abszolút, Abszolút
flexibility - hajlékonyság
entire - egész
aware - tisztában
misunderstanding - félreértés
criticize - kritizálni
offend - megsért, sért
liar - hazug
childish - gyerekes
ignore - figyelmen kívül hagyhat, figyelmen kívül hagyni
emotional - érzelmes
temper - türelem
concerned - aggasztott
compromise - kompromisszum
overwhelmed - túlterhelt
surrounding - körülvevő, környező
residential - lakóterület, lakó
storage - tárolóhely, tárolószoba
appliance - eszköz, készülék
brand new - vadonatúj
fireplace - kandalló
commute - ingázáshoz
attic - padlás
landlord - háziúr
suburbs - külváros
i'd - ajánlanám
vitamin - D-vitamin, A-vitamin
supposedly - feltehetően
impression - benyomás
i heard - hallottam
muscle - izmok, izom, izmot
vaccine - védőoltást, védőoltás
apparently - Úgy tűnik
heal - meggyógyul, gyógyulás
lung - tüdőproblémái, a tüdőre
swollen - duzzadt
they say - mondanak
infection - fertőzésem, szemfertőzésén, fertőzés
wrist - csukló
hip - csípő
yawn - ásít
will you - fogjátok, fogsz, fogod
react - reagált
sleepover - ottalvós buli
curfew - kijárási tilalom
beg - könyörögtünk
hopeful - reménykedő
encourage - bátorítanunk
chance - lehetőséget, alkalmat
count - (meg)számol, számolnak, számítanunk
satisfied - elégedett
marry - házasodni
unlikely - valószínűtlen
silly - bolondos, buta
wish - kívánság, kíván (vkinek vmit)
as many - annyi, amennyi
lottery - lottó
exist - létezik
develop - fejlődik, (ki)fejleszt, fejlődni
technique - technika (mesterségbeli)
lack - hiány
pirate - kalóz
immigrate - bevándorol
even though - noha, bár, annak ellenére, hogy
trade - kereskedelmi, kereskedelem
despite - annak ellenére
conquer - meghódítsák
victory - győzelem
settle - rendezzük
civilization - civilizáció
disappear - eltűnnek, eltűnik
human - emberi, ember, emberi lény
proof - bizonyíték
punish - büntet
jury - zsűri, esküdtszék
defend - megvédeni
inform - tájékoztatom, értesítse
partly - részben
secretly - titokban
prisoner - fogoly
prove - bebizonyítani
official - hivatalos
corruption - korrupció
demand - követelés, kereslet, igény (vmire)
likely - valószínűleg
meanwhile - eközben
maximum - maximum
minimum - minimum, legkisebb, legalacsonyabb
come out - kijönni, kijön, kijönnek
how did - hogy
bed and breakfast - szállás reggelivel
travels - utazik, halad
separate - különálló
carry-on - kézipoggyász, kézicsomag
central - központi
immigrant - bevándorló
fasten - becsatolni
select - választani
challenging - kihívást jelentő
as well as - valamint
product - termék
mostly - többnyire
urgent - sürgős
postpone - elhalaszthatjuk
you know - ismersz, ismertek, tudod
did you say - mondtad
financial - pénzügyi
basically - alapvetően
shortly - rövidesen
manage - főnök
contract - szerződés, szerződést
weigh - nyom, mérem
healthcare - egészségügyi
provide - biztosít, nyújt, nyújtanod
cancer - rák
heart disease - szívbetegség
cure - gyógymód
procedure - eljárás
tongue - nyelv
liquid - folyékony, folyadék
come on - gyerünk
perfectly - tökéletesen, teljesen
hunt - vadászik, vadásznak
defense - védelem
offense - támadás
captain - kapitány
diving - búvárkodás, merülés
gymnastics - torna
track - pálya, nyomon
cyclist - biciklista, kerékpáros, biciklis
vintage - vintage, régi
penny - fillér
knit - kötni
sew - varrni
fold - összehajtani, hajtogatta
limited - korlátozott
shipping - szállítás
reasonable - észszerű
code - kód
what to - mihez
sale - eladás
logo - embléma, logó
piercing - piercing
tattoo - tetoválás
hairstyle - frizura
dye - fest
pierced - átszúrt
powder - púder, por
forehead - homlok
lip - ajk
nail polish - körömlakk
remove - eltávolítani
nail - köröm
stylish - stílusos
appearance - megjelenés
expert - szakértő
barbershop - borbély, fodrászat
salon - szalon, fodrászat
generally - általában
circus - cirkusz
trend - trend, irányzat
realistic - valósághű
public - nagyközönség, nyilvánosság, nyilvános
divorce - válás
marvelous - csodálatos
display - bemutatják
comic - vicces, képregény, képregényhez
entertainment - szórakozás
species - faj
endangered - veszélyeztetett
adapt - alkalmazkodni
steep - meredek
planet - bolygó
global warming - globális felmelegedés
being - lények, lenni/vagy, létre
universe - univerzum, világegyetem, világmindenség
turtle - teknős, teknősbéka
habitat - élőhely
pollute - szennyezni
portion - adag
appetizer - előétel
dairy - tejtermék
seated - leültetve
lit - felgyújtottam, gyújtott, meggyújtottam
potluck - batyus vacsi, batyus bál
springtime - tavasz
cleaning - takarítanak, takarít, tisztítok
decorations - dekorációkat, díszek
super bowl - Super Bowl
cider - almabor
harvest - aratás, betakarítás
carve - faragnak
pumpkin - tök, tökös
jack-o'-lantern - töklámpa
summertime - nyáron
specially - különlegesen, kifejezetten
intermission - szünet
refreshments - frissítők
poet - költő
translation - fordítás
frequent - gyakori, gyakoriak
take a look - nézni
user - felhasználó
locate - keressék, megtalál
press - sajtó, megnyom, nyomda
browser - böngésző
device - eszköz, készülék
install - telepíti
giant - hatalmas, óriási
graphics - grafikája
robot - robot
bottom - fenék
sank - elsüllyedt
escape - szökés
grossest - legundorítóbb
bit - darabka, egy kicsi, egy kevés
creature - teremtmény
gross - undorító
bite - harap
riskiest - legkockázatosabb
frightening - ijesztő, rémisztő
frightened - megijedt
risky - kockázatos
silence - csend
weird - furcsa
whisper - suttogni
closer - közelebb, közelebbről
common sense - józan ész
guilty - bűnös
selfish - önző
mistaken - tévedtem
would have had - (nekem/neki/…) lett volna
stupid - hülye
warn - figyelmeztetem
disappoint - csalódást okoz
dig - ásni
bucket - vödör
light bulb - villanykörtét
would have - -t volna (csinált volna)
metal - fém
frame - keret
cupboard - szekrény, szekrényed, szekrényedben
space - tér, hely, űr
electrical - elektromos
pipe - cső
faucet - csapot, csap
gas - benzin (mint üzemanyag), gáz (kémiailag)
within - belül
unnecessary - szükségtelen
announcement - bejelentés
announce - bejelent
pleasure - élvezet, öröm
unkind - durva, barátságtalan
ladies and gentlemen - hölgyeim és uraim
approximate - hozzávetőleges
approximately - hozzávetőleg, megközelítőleg, nagyjából
previously - korábban, előzőleg
led - irányít/vezet (múlt idő), vezettem
stain - folt
pattern - minta
damaged - megrongálódott, megsérül
thick - sűrű
collar - (ing) nyaka
silk - selyem
label - címke, címkét, címkéje
bra - melltartó
watch out for - figyelj
insist - ragaszkodott
cab - taxi
knock - kopogj
wanted - akartak, kértek, akartunk
dressing - öntet
half- - fél
fry - sütni, megsütöm
dozen - tucat
a bit of - egy kis ……
organic - organikus, biológiai
basket - kosár
stir - keverd
cucumber - uborka, uborkát
pour - öntenék, öntünk
raw - nyers
burn - megéghet
boil - forrni, forralni
shake - rázni
noodle - tészta
sticky - ragadós
thinking - gondolkodik, vkire gondolás, gondolkodás
biography - életrajz
recording - felvétel, felvétele
autograph - autogram
extraordinary - rendkívüli, legkülönlegesebb
in case - ha véletlenül, hátha, ha netán
atmosphere - légkör, atmoszféra, hangulat
port - kikötő
scenery - táj
tourism - turizmus
agency - ügynökség
cave - barlang, barlangból
kangaroo - kenguru
spectacular - lenyűgöző, látványos
spa - wellness, gyógyfürdő
massage - masszázs
crew - személyzet
pilot - pilóta
departure - indulás, távozás
go through - átmenni
tech - technológia, tech
talent - tehetség
hairdresser - fodrász
vet - állatorvos
advantage - előny, előnye
babysit - gyerekekre vigyáz
employment - foglalkoztatás, alkalmazására
role - szerep, szerepet, szerepe
athletic - atletikus
goalkeeper - kapus, kapust
clap - tapsolnék
route - útvonalat, útirány, útvonal
dangerously - veszélyesen
obviously - nyilvánvalóan
foreigner - külföldi
style - stílus, stílusát, stílusa
permission - engedély, engedélyre, engedélyt
curriculum - tanterv
permit - engedély, engedélyt
countryside - vidék
on top of - a tetejére, -on/-en/-ön/-n (rajta), a tetején
flat - lakás, lakásszerződést
goat - kecske
landscape - tájkép, táj, látkép
northern - észak
southern - déli
horseback riding - lovaglás
cattle - szarvasmarha
bull - bika
eastern - keleti
western - nyugati
blown - elfújta
farmer - állattenyésztő, farmer, gazda
shade - árnyék
shore - part
sandy - homokos
calf - borjú
calves - borjak
donkey - szamár
ranch - tanyát
tunnel - alagút
speed - sebesség, sebességét
stoplight - közlekedési lámpa, jelzőlámpa
cycle - körfolyamat, ciklus, körforgás
illegal - törvénytelen, illegális
pedestrian - gyalogost
buckle - becsatolni
seatbelt - biztonsági öv
zone - zóna, övezet
allow - (meg)enged
had better - jobban teszi
had better not - jobban teszi ha nem
concentrate - összpontosítani
involve - bevonni
shot - ital
recent - közelmúltbeli, legutóbbi, friss
shoot - lő
murder - gyilkosság
warning - figyelmeztetem
flood - árvíz
explode - felrobban
unemployment - munkanélküliség
decrease - csökken, csökkent
there have been - volt (hangsúlyosan), volt
there has been - történt
protest - tüntetés
improvement - javulás
gorgeous - gyönyörű, gyönyörűek
bunch - csomó
lyrics - dalszöveg
charming - elbűvölő
well-dressed - jól öltözött
mustache - bajusz, bajusza
doing - csinálva, csinál, csinálni
accent - akcentus
credit - hitel
reapply - újra jelentkezem
aloud - hangosan
reread - újra el kell olvasniuk, újraolvas
pronounce - kiejteni
pronunciation - kiejtés
handwriting - kézírás, kézírást
rewrite - átírnod
correction - javítást
absent - hiányzik
participation - részvétel
preparation - készülés
midterm - félévi
skin - bőr
thumb - hüvelykujjam
treatment - kezelés, gyógykezelés, bánásmód
earache - fülfájás, fáj a fülem
will be - lesz
bled - vérzett
ankle - boka
injure - megsérül
health insurance - egészségbiztosítás
request - kérni
reschedule - átütemez
pregnant - állapotos
ache - fájdalom
scrambled eggs - tojásrántotta
alcoholic - alkoholista, alkoholos
bacon - szalonna
takeout - elvitelre
wouldn't - lenne, lennék, lett volna
silverware - ezüstkészlet
would - volna
squash - tök
lime - zöldcitrom, lime
bitter - keserű
rather - elég, egészen, hanem
brake - fékpedál, fékpedálom, fékpedálja
windshield - szélvédő
oil change - olajcsere
headlight - fényszóró
car wash - autómosó
trunk - csomagtartó
sidewalk - járda
tank - üzemanyagtartály
greatest - legnagyobb, legnagyszerűbb, legnagyszerűbbek
achieve - elér (célt), érni
gain - nyertél, nyereség
achievement - teljesítmény, eredmény
current - jelenlegi
training - edzés, teniszedzés, képzés
conference - konferencia, konferenciára
effort - erőfeszítés
as soon as - mihelyt
admire - csodálsz
background - háttér
industry - ipar, iparág
scientist - tudós, tudósnak
graduate - diplomát szerez
condition - állapot, feltétel
recover - felépül, meggyógyul, visszaszerez
on purpose - szándékosan, direkt
excuse - kifogása, mentség
apologize - bocsánatot kér, elnézést kérni
condolences - részvét
forever - örökre
funeral - temetés
loss - veszteség
news - hírek
sooner - előbb, hamarabb
antique - antik
basement - pince
coffee table - kávézóasztal, dohányzóasztal
move out - kiköltöznek
move into - beköltöznek, költöznek be
damage - veszteség, kár, károsodás
utilities - közüzemi szolgáltatások, közművek
lease - bérlet, bérleti
ground floor - földszint
system - rendszer
politely - udvariasan
convince - meggyőzni
waterfall - vízesés
resort - üdülőhely, nyaralóhely
lamb - bárány
happiness - boldogság
religious - vallásos, vallási
lives - él, lakik
ghost - szellem
goddess - Istennő
doubt - kétség, kétely
atheist - ateista
catholic - katolikus
god - Isten
bible - Biblia
priest - pap
death - halál, halált
prayer - ima
waste - pazarolja
loan - hitel, kölcsön
regret - megbánni
personal - személyes, személyi
asking - megkérdezi, kér, kérdezted
admit - bevallom, beismerni
personally - személyesen, személy szerint
favor - szívesség, javára
promote - előléptetni
asked - megkérdezte, kérdezte, kért
totally - teljesen
out-of-date - elavult
apology - bocsánatkérés
run out - elfogyott, kifutnak, kifutott
disappointed - csalódott
disappointing - csalódást keltő, kiábrándító
refuse - visszautasítom, megtagadni
hang - akasztod, akasztotta, akasztja
unfair - igazságtalan
hang up - felakasztani, akasztja
blame - felelősséget, hibáztatás, szemrehányás
negative - nemleges, negatív, elutasító
what a - micsoda ………!
babysitter - bébiszitter
alive - élve, életben (van)
male - hím
female - nő(i)
stepfather - mostohaapa
pass away - elhuny, huny el
stepmother - mostohaanyád
immediate - azonnali
in-laws - házastárs szülei
great-grandson - dédunoka
mother-in-law - anyós
guys - srácok
regards - üdvözlet
one of these days - egyik nap
willing - hajlandó
plain - egyszínű, sima
someplace - valahol, máshová, valahova
2020 - 2020
predict - előre jelezni, megjósolni
2005 - 2005
situation - helyzet, helyzetet
1984 - 1984
at last - végre
recognize - megismertem, megismersz, megismer
seventies - hetvenes évek
eighteenth - tizennyolcadik
invent - feltalálnia
hero - hős
killer - gyilkos
spoil - romlott
cheerful - vidám
lead - vezetni, vezető, vezesse
animation - animáció
kitten - cica, cicát
obvious - nyilvánvaló
so far - eddig
powerful - erőteljes, erős, erősebb
peace - béke, békét
progress - haladás
charity - jótékonyság
rescue - menteni
fair - tisztességes, méltányos, korrekt
poverty - szegénység
mainly - főleg
society - társadalom
wondered - csodálkoztak, gondolkodtam, csodálkozott
majority - többség
army - hadsereg
defeat - vereség, legyőznöd
battle - harc, csata, ütközet
pollution - szennyezés
recently - mostanában, nemrég
law - törvény
disaster - katasztrófa
political - politikai
wonder - csodálkozni, tűnődöm
amazingly - hihetetlenül, elképesztően, meglepően
cabin - faház, kabint, kabin
contest - verseny
briefly - röviden
distance - távolság, táv
support - támogatás
discussion - megbeszélés, vita
intend - szándékoztam, tervezem
safely - biztonságosan
complaint - panasz
internationally - nemzetközileg
brochure - prospektus
comment - megjegyzés
sports - sportokról, sportokban, sportok
frozen - fagyasztott, befagyott
typically - jellemzően
froze - megfagyott
beaten - legyőzött
freeze - megfagy, fagyni, befagy
sometime - egyszer, valamikor
hardly - alig
twin - ikertestvér
stress - stressz
journalist - újságíró
architect - építész
familiar - ismerős
interrupt - félbeszakítani
leisure - szabadidő
poetry - költészet, költői(es)ség
collection - gyűjtemény
league - bajnokság, liga
stranger - idegen
occasion - alkalom, apropó
kettle - vízforraló, teáskannát
lay - fekszik
property - tulajdon, birtok, ingatlan
vehicle - jármű, járművem
lady - hölgy
ladder - létra
easygoing - laza
sense of humor - humorérzék
adopt - örökbe fogadja
personality - (vki) természete, személyiség
positive - pozitív
proud - büszke
handle - fül, füle
generous - nagylelkű
attitude - hozzáállás
friendship - barátság
grateful - hálás
promise - ígéretet, megígérsz
it is - ez, van
unexpected - váratlan
somehow - valahogy
delighted - örültek, elragadtatva, örvendek
elderly - idős
puppy - kiskutyát, kiskutya
appreciate - értékelik
next day - másnap
hitchhike - stoppol
layover - átszállás
hostel - ifjúsági szálló
direct - rendezi, rendezem
depart - felszállnak, elindul, indul
round-trip - retúr, menettérti
ferry - komp
wherever - akárhol, bárhol, bárhová
luxury - luxus
cruise - hajóút
fifties - ötvenes évek
2017 - 2017
eighties - 80-as évek
generation - nemzedék, generáció, korosztály
grown - kinőtt
nowadays - manapság
twenty-fifth - huszonötödik
1992 - 1992
2016 - 2016
born - született/megszületett
1802 - 1802
twenty-first - huszonegyedik
nineteenth - tizenkilencedik
discovery - felfedezés
invention - találmány
bargain - alkalmi vétel, alku
inexpensive - olcsók
worth - ér (vmennyit)
amount - összeged, összeg, mennyiség
owe - tartozik, tartozom
material - anyag
zipper - cipzár
knowing - tudás, tudva, tudását
make it - elkészítik, készítesz
sociable - társaságkedvelő
custom - szokás
we all - (mi) mindannyian, (mi) mind, (mi) mindnyájan
championship - bajnokság, bajnokságot
unless - hacsak
meet up - találkozunk
police report - rendőri jelentés
luckily - szerencsére
commit - elkövetni, elkövet, elkövettél
take place - lesz, történik
arrest - letartóztatás
emergency - sürgősségi osztály, vészhelyzet
unknown - ismeretlen
innocent - ártatlan
thieves - tolvajok
worn - viselt, kopott
thief - tolvaj
search for - keresem, keresik
certain - bizonyos
robbery - rablás
protect - megvéd
in advance - előre
enormous - hatalmas, hatalmasnak
admission - belépés
historic - történelmi
unforgettable - felejthetetlen
balcony - erkély, erkélyem
sung - énekelt
beautifully - szépen
out - kimegyünk, kifelé, kint
guitarist - gitáros
split - szétszakadt, eloszt
yuck - fúj, fuj
disgusting - undorító
herb - gyógynövény, fűszer
starving - éhező
peanut - mogyorót
allergy - allergia
overnight - éjjel, éjszaka
fallen - lehullott, kidőlt, elesett
mild - enyhe
southeast - délkelet
southwest - délnyugat
what is - mi, mit
camel - teve
destination - úti cél
sunshine - napsütés
held - fogott, tartott, tartottak
northwest - északnyugat
coast - part, tengerpart, partvidék
northeast - északkelet
blew - kifújta, elfújta
blow - fúj
whale - bálna
grew - nőtt
wildlife - vadvilág
region - terület, régió, térség
range - hegylánc, tartomány
grow - nőj, termeszteni, nősz
forecast - előrejelzés
tiring - fárasztó
whenever - akármikor
opportunity - alkalom, lehetőség
employer - munkáltató
designer - tervező, divattervező
assistant - asszisztens
up-to-date - friss, aktuális
afford - megengedheti
balance - egyenleg
lent - kölcsönadta, kölcsönzött, kölcsönadott
limit - határ, korlát, határa
paperwork - papírmunka
consider - fontolóra/figyelembe vesz, (meg/át)gondol, tart (vminek)
checking account - folyószámla
temporary - ideiglenes
mobile - mobil
payment - fizetés
transfer - átutal
transaction - tranzakció
beat - legyőz(ött), megdönt(ött) pl. rekordot, megver(t)
olympics - Olimpia
compete - versenyez
root for - szurkol
champion - bajnokok, bajnok
world cup - világbajnokság
talented - ügyes, tehetséges
thriller - thriller
documentary - dokumentumfilm
plot - cselekmény
independent - független, önálló
audience - közönség, hallgatóság
animated - animált, animációs
thank goodness - hála isten
terrified - rémült
yikes - jaj, hűha
creepy - ijesztő, hátborzongató
bee - méh
attack - támadás, roham
cliff - szikla
earthquake - földrengés
anxious - izgatott
swum - úszott
fear - félelem
spider - pók
shark - cápa, cápát (acc)
environmental - környezetvédelmi, környezeti
had to - kellett
immigration - bevándorlás
economy - gazdaság
can't stand - ki nem állhatja
former - egykori, korábbi
truth - igazság
local - helyi
currency - pénznem
democracy - demokrácia
state - állam
upgrade - frissítés
accidentally - véletlenül
username - felhasználónév
voicemail - hangposta
plug - dugó, csatlakozó
attach - csatolni, fűzz
volume - térfogat, hangerő, kötet
smartphone - okostelefon
forgave - megbocsátott
forgiven - megbocsátott
impossible - lehetetlen, lehetetlennek
hold on - várj
forgive - megbocsát
embarrassing - zavarbaejtő
care - gondoskodás, ellátás, törődés
spoken - beszélt(ek), beszéltek
like this - ilyen, így
traffic light - lámpa
watch out - vigyázz
slowed - lelassult
traffic jam - dugó
rush hour - csúcsforgalom
lane - sáv
on the way to - irányába
air conditioning - légkondicionálás
power - teljesítmény (gépé), áram, (átv) erő
switch - lekapcsolod, kapcsol, kapcsoltátok
alarm - ébresztő, riasztó
recycling - újrahasznosítás
break down - elromlott
bathtub - kád
control - befolyás vmi fölött, uralom vmi fölött, irányít
decorate - díszít
attention - figyelem, figyeljünk
used - használta, szokva
difficulty - nehézség, gond, nehézsége
essential - elengedhetetlen
unit - egység, mértékegység
circle - kör, körforgás
register - iratkozni, feliratkozik, jelentkezzen
lab - laboratórium
possible to - lehetséges
internship - gyakornokság, szakmai gyakorlat
hand out - kioszt
require - igényel
bless you - egészségedre
seriously - komolyan
drugstore - gyógyszertár
disease - betegség, betegsége
drug - gyógyszer
illness - betegség, betegségben
advise - tanácsolja, tanácsol
bone - csont
healthier - egészségesebb, egészségesebbnek
painful - fájdalmas
break into - betör
scream - sikolt, sikoly
grab - megragad
according to - szerint
shadow - árnyék
appear - megjelenik, látszanak, tűnik vmi(lyen)nek
criminal - bűnöző, bűnözőt
realize - rájön
lie - fekszek, fekszenek, lefekszünk
secret - titkot, titok, titkom
dusty - poros
among - közé, között, körében
underneath - alatt
gentle - gyengéd, szelíd
butterfly - pillangó, lepke
beauty - szépség
natural - természetes
mosquito - szúnyog
outdoor - szabadtéri, kültéri
peak - csúcs
stick - bot
ant - hangya
nowhere - sehova, sehol, semerre
silent - csendes
direction - irány
valley - völgy
shape - alak, forma
peaceful - békés
in a relationship - kapcsolatban
lately - az utóbbi időben, utóbbi, mostanában
tradition - hagyomány
rarely - ritkán
typical - jellemző, tipikus
honeymoon - nászút
van - van
torn - szakadt
bat - denevér
tore - kiszakadt
tying - kötés
loose - laza
tear - elszakad
fashionable - divatos
so that - (azért,) hogy, hogy
witch - boszorkány
costume - kosztümje, jelmezemet
teenage - kamasz
unbelievable - hihetetlen
sand - homokos, homok, homokot
lover - szerető
chin - álla
creative - kreatív
unemployed - munkanélküli
relaxed - nyugodt, kipihent, laza
confident - magabiztos
amazed - elképedt, lenyűgözve
uninteresting - érdektelen
brilliant - zseniális, ragyogó
alike - hasonlít, hasonló, egyformán
fairly - eléggé, viszonylag, meglehetősen
nickname - beceneve
would you mind - lenne kedved
unlucky - szerencsétlen
ability - képesség
silently - csendben
surprisingly - meglepően
lullaby - altatódalt
mattress - matrac
fluffy - bolyhos
unpleasant - kellemetlen
wing - szárny
step - lépés, (mi) lépünk, lépcsőfok
lightning - villám
flu - influenzás, influenza, influenzád
smooth - sima
angel - angyal
nightmare - rémálom
performer - előadóművész
orchestra - zenekar
commercial - reklám
cinema - mozi, mozihoz, mozit
fiction - fikció
act - cselekedet, tett, felvonás
film - film, filmet (acc.), filmhez
performance - előadás, előadásra, előadásuk
publish - kiadni, közzétenni, közzéteszem
title - cím, címe, címmel
necessary - szükséges, nélkülözhetetlen
trouble - gond, baj
prison - börtön
extremely - rendkívül
solved - megoldotta
completed - elvégezte, elvégeztem, befejezve
media - média, médiát
solve - megold, megoldani
sincerely - őszintén
shaken - rázott
photocopy - fénymásolat
hairstylist - fodrász
baker - pék
blank - üres
shook - rázott
signature - aláírás
farming - gazdálkodás, mezőgazdaság
success - siker, sikert
knowledge - tudás, tudtommal
ordinary - átlagos, hétköznapi
succeed - sikerül
branch - ág, ágat (acc)
go on - folytasd
recycle - újrahasznosít
narrow - keskeny, keskenyek
parking - parkolás
community - közösség, közösségi
grandkid - unokája
double - kettős, dupla, kétszeres
broccoli - brokkoli
annoy - idegesítem
reach - belenyúlt, jutni, ér
although - bár, noha
chili - chilipaprika
plus - meg
whether - hogy
shown - megmutatta
pea - borsó
cabbage - káposzta, káposztás
roll - görgesd, gördül, zsemle
in my opinion - szerintem
imagine - elképzelni
response - válasz, reagálás, reakció
increase - (meg)növel, növelnünk
look like - úgy néz ki, mint
day off - szabadnap
shrimp - garnélarák
careless - figyelmetlen, gondatlan
nightlife - éjszakai élet
clever - okos, ügyes, ügyesek
nightclub - éjszakai klub
social - társadalmi, társasági, társas
web - web, háló
accountant - könyvelő
tax - adó, adót
inch - hüvelykes
however - azonban
know how to - tud hogyan kell
religion - vallás, vallású
indoors - beltérben, bent
swept - felsöpörte
outdoors - kint
corn - kukorica
fewer - kevesebb
sunrise - napkelte, napkeltekor
stream - patak
ahead - előtt, előre
go back - menjetek vissza
leaf - falevél, levél
loudly - hangosan
quietly - halkan
penguin - pingvin
giraffe - zsiráf
dolphin - delfin
beside - mellett, mellé
earth - A Föld, föld
zebra - zebra
parrot - papagáj, papagájt, papagájok
jungle - dzsungel
stone - kő
tiger - tigris
false - hamis
crash - baleset, összeütközés, összeomlás
bomb - bomba
though - noha, habár
expect - elvárd, várni, számít
court - udvarol, udvar, bíróság
in court - a bíróság előtt, a bíróságon
jail - börtön
billion - milliárd
rob - kirabolni
gun - fegyver, pisztoly
enemy - ellenség, ellenségem
border - határ, szegély, határt
spy - kém
leader - vezetője, vezető, vezetővel
government - kormány, kormánya
headline - címsor
security - biztonság
spare - tartalék, pót
visa - vízum
abroad - külföld, külföldön
baggage - csomag
embassy - nagykövetség
reservations - helyfoglalást, foglalások, foglalásokat
transportation - szállítás(i), közlekedés(i), közlekedési
get in - beszáll
citizen - polgár, állampolgár
canceled - lemondva, elmarad, törölt
percent - százalék
underwear - alsónemű
afterward - utána
selfie - szelfi
checkout - pénztár
sleeve - kabátujj, ujj, kabát ujja
quality - minőség, tulajdonság, kvalitás
thrown - dobott
cotton - pamut
tiny - apró
successful - sikeres
barber - borbély, fodrász
marriage - házasság, házasságkötés, házassági
niece - unokahúg, unokahúgom
lesbian - leszbikus
gay - meleg
british - angolok, brit
divorced - elvált
spouse - házastárs
haircut - hajvágás
blind - vak
nephew - unokaöcs, unokaöcsémet
firefighter - tűzoltó
retire - nyugdíjba megy
spinach - spenót
up - fel, fent, fenn
dirt - kosz
bug - bogár
knee - térd, térdem
frog - béka
used to - valaha, volt szokásunk, régen
shy - félénk, szégyenlős
trumpet - trombita
joke - vicc, viccet (acc.)
strict - szigorú
childhood - gyerekkor, gyerekkorom
kicked - rúgta
stood - álltam, állt, álltunk
vase - váza, vázát
till - amíg
cheek - orca
groom - vőlegény
bride - menyasszony
deliver - (ki)szállít, házhoz visz, kézbesít
rose - rózsa, rózsát
engaged - eljegyzett
relative - rokon
greet - köszönni
musician - zenész, zenésznő, zenésznek
shiny - fényes
fountain - szökőkút
wave - integet
celebration - ünneplés, ünnepségre
whatever - bármilyen, akármi
shoulder - váll
candle - gyertya
discover - felfedez, felfedezniük, felfedeztem
fought - harcolt
look out - kinézek
get lost - eltévedtem, eltévedtél, eltévedni
brave - bátor
besides - amúgy, ezenkívül, mellett
monster - szörny
fight - harcol, vita, harc
prince - herceg
cushion - párna
palace - palota, palotát
princess - hercegnő
rung - csörgött
rang - csöngött, csörgött
kiss - csók
scared - ijedt
fall asleep - elalszik, elaludt, elalszanak
shave - borotválni
asleep - alszik, elaludt
awake - ébren
in general - általában
technology - technológia, technika (műszaki)
effect - mellékhatást, hatás, hatásuk
attachment - melléklet, csatolmány
completely - teljesen, maradéktalanul
none - semelyik, semennyi, közületek senki nem ...
search - kutatás, keresés, keres
communicate - kommunikál
private - privát, zártkörű, magánkézben lévő
delete - törlöm
surprising - meglepő
issue - gond, téma, kiadás (vmi kibocsátása)
blog - blog
tissue - zsebkendő
fortunately - szerencsére
bleed - vérzik
aspirin - aszpirin
hug - ölelés
cheers - egészségedre
dj - DJ
outgoing - társaságkedvelő
bald - kopasz
what's up - mi a helyzet
curly - göndör
annual - éves
hidden - elrejtve
couple - pár
agenda - napirend
figure - figura, alak, ábra
thunder - villám
hid - bebújt
icy - jeges
isn't it - ugye, nem
rainy - esős, esősek
hopefully - remélhetőleg
hide - bújtak, bújnak, bújik
lock - zár, lakat, bezár
spill - kiöntsd
heater - fűtőtest
responsible for - felelős
take care of - gondoskodnia, gondoskodik, vigyázzatok
neat - rendezett
dislike - nem szeret, utálod
mop - felmos, felmossuk, felmosom
garbage - szemét
housework - házimunka
decision - döntés
accept - elfogad, fogadnia, elfogadnak
full-time - teljes idős
benefits - hasznok, előnyös/kedvező hatások, jótékony hatások
begun - kezdődött, elkezdett
part-time - részidős
career - életpálya, karrier, pályafutás
responsible - felelős, megbízható, felelősségteljes
engineering - mérnöki
education - nevelés, oktatás, műveltség
research - kutatás, kutatásnak
certificate - tanúsítvány, bizonyítvány
laboratory - laboratórium
similar - hasonló
translate - lefordítja
underline - aláhúz
intermediate - középszintű, középfokú, középhaladó
meaning - jelentés, (elvont dologra) értelem
row - sorba, soron
dorm - kollégium
utensils - evőeszközök
beverage - ital
coconut - kókusz
sour - savanyú
flavor - íz
pineapple - ananász
few - kevés, keveset
allergic - allergiás
taste - íz, íze, megkóstoltad
tuna - tonhal
delivery - kézbesítés, küldemény, szállítmány
smell - szaga, illat, szaguk
container - tartály, edény, tartó
farthest - legmesszebb, legtávolabb
homesick - honvágyat
continent - kontinens
nearby - közel, közelben
patio - terasz
fare - viteldíj
let - engedett, hagy, hagyott
reserve - lefoglalja, lefoglal, (le)foglal
passport control - útlevélellenőrzés
farther - távolabb, tovább
arrival - érkezés
shuttle - űrrepülőgép, transzfer
for the first time - először
solo - szóló, egyedül
traveler - utazó
land - föld, leszálltok, leszáll
located - megtalált, található
quarter past - Negyed, negyed
rent - bérel
quarter to - háromnegyed
anywhere - semerre, sehol, sehova
sheet - lap
advertisement - reklám
withdraw - kivesz
account - számla
deposit - befizet
west - nyugat
do business - üzletel
million - egymillió
atm - bankautomata
east - kelet
highway - autópálya
case - tok
headache - fejfájás
record - felvesz
app - alkalmazás
electric - elektromos
driver - sofőr
shut - becsuk
engine - motor
can you believe it - el tudod hinni
opera - opera
monkey - majom
clown - bohóc
forgetful - feledékeny
driver's license - jogosítvány
guard - őr
known - tudta, ismerte
named - hívják
middle - középső
trash can - szemetes
muffin - muffin
whipped cream - tejszínhab
full of - vmivel tele
brownie - brownie
mustard - mustár
i'd love - Szeretnélek, Szeretnék, Szeretném
grill - grillezik
good job - szép munka
alcohol - alkohol
yummy - finom
cheeseburger - sajtburger
married to - házas, házasok
mechanic - szerelő
actress - színésznő
I don't mind - nem bánom
think of - gondol vkire/vmire
possibly - esetleg, talán
not bad - nem rossz, nem rosszak
these days - manapság
get into - beszállni, beülnek, szállnak be
spare time - szabadidő
notes - jegyzeteket, jegyzeteinket, jegyzetek
or something - vagy valami
click - kattints, kattintson, kattinthatsz
various - különböző
all about - mindent
dream - álom
apply - jelentkezik
each - minden
leftovers - maradék
piece - szelet
blueberry - áfonya
serve - felszolgál
lettuce - saláta
nearly - majdnem
cream cheese - krémsajt
the rest - a többi, a maradék
or not - vagy nincs
bagel - bagel
machine - gép
at least - legalább
cut - vág
thin - vékony
real - valódi
salmon - lazac
omelet - omlett
cookbook - szakácskönyv
writing - írás
principal - igazgató
report card - ellenőrző könyv
guess - kitalál
give back - visszaad
design - terv
description - leírás
not too - nem túl, túl
level - szint
drawn - rajzolt, rajzolva
unusual - szokatlan
get off - le, szállnak le, leszállnak
north - észak
get on - felszállnak, felszállni, felszállsz
feel about - érzünk kapcsolatban, érzitek kapcsolatban, érzel kapcsolatban
wide - széles
thousands - sok ezer, ezrek, ezreket
south - dél
stadium - stadion
match - mérkőzés
hit - üt
synagogue - zsinagóga
pray - imádkozik
roof - tető
exchange - vált
square - tér
bad luck - balszerencse
delay - késik
cigarette - cigaretta
stolen - elloptak, ellopják, lopott
tire - gumi
rat - patkány
security camera - biztonsági kamera
corner - sarok
understood - megértette, értetted, értett
sort - fajta
interest - érdekli
studies - dolgozószobák, tanulmányaimat, tanulmányok
dictionary - szótár
trust - bízik
meant - szándékozott, akarta mondani, jelentett
opposite - szemben
campus - kampusz
hall - folyosó
neither - egyik sem
quit - hagy, otthagy
matter - gond, anyag, téma
diploma - diploma
before bed - lefekvés előtt
as usual - mint mindig
quick - gyors
fog - köd
drove - vezettünk, vezettem, autóztam
across from - szemben
keep fit - fitten tartja magát
in pairs - párban
caught - elkapott, elkapta, elkaptam
advanced - haladó
competition - verseny
deep - mély
a bit - egy kicsit
end up - végül
skateboard - gördeszkázni, gördeszka, gördeszkám
take a walk - sétál
work out - Edzeni, edzünk, edzel
can make it - el tud jönni, el tudsz jönni
include - beleszámít
grass - fű
allergic to - allergiás
by accident - véletlenül
way - út
first of all - először is
sun - nap, napon, napot
spot - hely
peanut butter - mogyoróvaj
about to - készülsz
jar - befőttesüveg
pickle - savanyúság
off - kifelé, biciklidről, elfelé
weekday - hétköznap
just now - az imént
make up - kibékül
offer - felajánl
suddenly - hirtelen
mood - hangulat
grow up - felnő
listen - figyel
embarrassed - zavarban
became - vált, lett, lettek
stay away from - távol fogok maradni, távol kellene maradnunk, maradjunk távol
won - nyertek, győzött, (meg/el)nyert
at the moment - jelenleg
argument - vita
feeling - érzés
don't forget to - ne felejtsétek el, ne felejtsd el, ne felejts
uniform - egyenruha
runner - futó
do you mind if - nem bánja, ha
score a goal - gólt szerez
average - átlagos
play against - játszik egymás ellen, játszanak egymás ellen, játszani egymás ellen
field - pálya
become - válik
tournament - verseny
sign up - jelentkezik
age - életkor
nobody - senkinek, senki, senki nem
smoke - dohányzik
make sure - meggyőződik
take a bath - fürdik
felt - érzett/éreztek, érezte/-ék magát/magukat
bother - zavar
sore - fáj
go to the bathroom - menned, mennie, menjünk
comb - fésű
it'll - fog, lesz
stand up - feláll
reason - ok
operation - műtét
breathe - lélegzik
poor - szegény
weak - gyenge
toe - lábujj
sneeze - tüsszent
look after - gondoskodik vkiről
heart attack - szívroham
difference - különbség
by the way - egyébként
probably - valószínűleg
except - vminek a kivételével, vmitől eltekintve, kivéve
girl - lány
drawing - rajz
drew - rajzolta, rajzolták
especially - különösen
lion - oroszlán
boy - fiú
paintbrush - ecset
wood - fa
made of - készült
Canadian - kanadai
dragon - sárkány
round - kerek
dead - halott
said - mondott, mondta, szólt
australian - ausztrál
painter - festő
elephant - elefánt
famous for - híres/nevezetes valamiről
national - nemzeti
gallery - galéria
entrance - bejárat
down - le, lent
mice - egeret, egerektől, egerek
hill - domb
photograph - fénykép
top - teteje
owl - bagoly
mouse - egér
everybody - mindenkit, mindenki, mindenkinek
wild - vad
change of clothes - váltás ruhára, váltás ruhát, váltás ruha
thunderstorm - zivatar
per - -nként (pl. óránként, fejenként), -nta/-nte (pl. naponta, évente)
woods - erdő
past - mellett, múlt, múltban
sea - tenger
view - kilátás
roast - süt
campfire - tábortűz
sausage - kolbász
get dark - besötétedik
lunchtime - ebédidő
through - keresztül, át
away - távol
village - falu
pair - pár
shop for - Vásárolni, vásárolnom, vásárolni
come back - visszajön
chapter - fejezet
honestly - őszintén
complicated - bonyolult
beginning - kezdet
serious - komoly
bad guy - rosszfiú
pig - disznó
bookshelf - könyvespolc
anyway - mindegy, úgysem
comic book - képregény
mystery - rejtély
cover - borító
cozy - otthonos
in here - itt
blood - vér
until then - Addig
in pain - fájdalmam, fájdalomban
teenager - tinédzser
sat down - leült
into - bele
sit down - leül
woke up - felébredt, felébredtek
dizzy - szédül
fell down - leesett, leestek
fall down - leesik
hold - tart
on foot - gyalog
push - tol
wake up - ébred
toothache - fogfájás
heart - szív
badly - nagyon
immediately - azonnal
calm - nyugodt
nd - 2-án, 2., 42.
you guys - srácok, tihozzátok, ti
grandson - unoka
get along - jól kijön
wooden - fából készült, fa-, fa
the whole time - egész idő alatt
the bar - a bárba
st - 1.
granddaughter - unoka
for a while - egy ideig
rd - 3., 23., 3-a
forty-five - negyvenöt
moment - pillanat
th - 5.
star - csillag
twentieth - huszadik
including - felvesz, tartalmaz, ide/bele/hozzászámít
get dressed - felöltözik
sunset - naplemente
anniversary - évforduló
because of - miatt
great-grandmother - dédnagymama
war - háború
soldier - katona
most - legtöbb
fed - etetésért, etetésből, megetették
sheep - juhukat, juhok, juh
fence - kerítés
eighteen seventy - ezer nyolcszáz hetvenben, ezer nyolcszáz hetven
wind - szél
wet - nedves
destroy - lerombol
uncomfortable - kényelmetlen
tights - harisnyát, harisnya
in the past - A múltban
cap - sapka
put on - felvesz
common - gyakori
replace - pótol
century - évszázad
object - tárgy
touch - megérint
s' - dolgozatainak, eredményeinek, táskáinak
compare - összehasonlít
cheat - csal
hundreds - százak
literature - irodalom
highlight - kiemel
review - átnéz
binder - mappa
certainly - biztosan
an f - egy F
remind - emlékeztet
planner - határidőnapló
vocabulary - szókincs
slowly - lassan
tutor - magántanár
whiteboard - tábla
an a - ötöst
pass - átmegy
bad at - rossz vmiből, rossz
back - hát, hátul, hátsó
souvenir - szuvenír
king - király
lucky - szerencsés
eager - lelkes
passenger - utas
duck - kacsa
queen - királynő
sculpture - szobor
enter - bemegy
artist - művész
theater - színház
prepared - felkészült
ancient - ősi, ókori
temple - templom
happy to - szívesen
postcard - képeslap
identification - igazolvány
sightseeing - városnézés
explore - felfedez
guide - idegenvezető
series - sorozat
final - utolsó
continue - folytat
fantastic - fantasztikus
episode - epizód
die - meghal
latest - legújabb
bad for you - rossz neked
reality tv - valóságshow
entertaining - szórakoztató
until - koromig, amíg … nem, négyig
opinion - vélemény
television - tévéje, tévét, televízió
go out - kimegy
channel - csatorna
yourselves - te magatok, magatok, magatoknak
cannot - kérheted, nem (csinál)hat (vmit), nem
if you like - ha szeretnéd
ourselves - magunk, magunkat, magunknak
themselves - maguknak, magukra, magukat
itself - öt/azt magát, maga, önmagát
connection - kapcsolat
know how - Tudod
restart - újraindít
just a minute - egy pillanat
herself - önmagát, saját maga, önmaga
himself - őt magát, önmaga, önmagát
unmute - bekapcsolja a mikrofont
noise - zaj
myself - önmagam, magam, magamat
yourself - magad, magaddal, magára
introduce - bemutat
speaker - hangszóró
mute - lenémít
have a good day - szép napot
tag - bújócskáznának, bújócskát, bújócskában
gift card - ajándékkártya
exit - kijárat
tight - szűk
flip-flop - strandpapucs
pay back - visszafizet
button - gomb
pocket - zseb
take off - levesz
soft - puha
sweatshirt - melegítőfelső
fitting room - próbafülke
fashion - divat
try on - felpróbál
bathing suit - fürdőruhát, fürdőruha, fürdőruháról
confusing - zavaró, zavaróak, összezavaró
man - férfi
sign - tábla
write down - leír
put away - eltesz
platform - peron, vágányt, peronról
woman - nő
throw away - eldob
turn - elfordul
crosswalk - gyalogátkelő
tree - fa
straight - egyenesen
pick up - felvesz
block - háztömb
take out - elővesz
nineteen ninety - ezerkilencszázkilencvenben
lazy - lusta
businessman - üzletember
flexible - rugalmas
businesswoman - üzletasszony
employee - alkalmazott
began - elkezdett, elkezdődött, kezdtem
yearly - éves
two thousand seven - kétezer-hétben, kétezer-hetes
low - alacsony
raise - fizetésemelés
salary - fizetés
such as - mint például
time off - szabadidő
insurance - biztosítás
deserve - érdemel
promotion - előléptetés
benefit - juttatás
left - felejtette, távozott, elment
reliable - megbízható
twenty fifteen - kétezer-tizenötben, kétezer-tizenöt
forgotten - elfelejtett, felejtettem
memory - memória
seventh - hetedik
elevator - lift
apartment building - lakóépület
refrigerator - hűtőszekrény
curtain - függőny
glue - ragasztó
hole - lyuk
hammer - kalapács
ceiling - mennyezet
repair - megjavít
sold - eladták, eladott, eladtad
shorts - rövidnadrág
donate - adományoz
suit - öltöny
paid - fizetted, fizette, fizetett
way too - túlzottan
hundred - száz, százast
electricity - áram
thirty-seven - harminchét
annoyed - bosszús
shelves - polcokat, polcok, polcokon
shelf - polc
dust - port töröl
incredible - hihetetlen
adorable - aranyos
home - otthon, otthonukat, itthon
bird - madár
desert - sivatag
castle - kastély
adventure - kaland
been - lett, jártál, volt
cloud - felhő
visitor - látogató
airplane - repülőgép
ship - hajó
slept - aludt, aludtunk
ridden - lovagolt, lovagoltam
drunk - ivott
horse - ló
foreign - idegen
the us - az Egyesült Államok
driven - vezetve, vezettünk
been to - voltak, voltál
sixth - hatodik
all right - rendben
beginner - kezdő
cancel - lemond
bingo - bingó
staff - személyzet
exercise machine - edzőgép
fee - díj
photography - fényképészet
tenth - tizedik
in the future - a jövőben
eighty - nyolcvan
able to - képes
monthly - havi
let's do it - csináljuk
ballet - balett
playground - játszótér
climb - mászik
love to - szeretném
day care - napközi
ping pong - pingpong
the day after tomorrow - holnapután
rec center - szabadidőközpont
like to - szeretem, szeretünk, szeret
physics - fizika
spoke - beszélt
semester - félév
give up - feladja
fail - megbukik
fifth - ötödik
assignment - feladat
spell - betűz
error - hiba
turn in - bead
incorrect - helytelen
go over - átnéz
result - eredmény, eredményt
put together - összeállít
look up - megnéz
perhaps - talán
thanks for - Köszönöm, Köszönjük
find out - megtud
follow up - utánajár
fourth - negyedik
not very - nem nagyon
article - cikk
set up - szervez
previous - korábbi
excellent - kiváló
engineer - mérnök
occupation - foglalkozás
currently - jelenleg
prepare - készül
exam - vizsga
experience - tapasztalat
professional - szakmai
here's - itt van, tessék, íme
course - tanfolyam
earn - keres
chosen - választott(a), választottunk
eaten - (meg)ette
application - jelentkezés
complete - teljes, elvégezhetem, elvégeznünk
outfit - ruha
written - megírta, írva
résumé - önéletrajz
cover letter - motivációs levél
eighteen ninety - ezer nyolcszáz kilencvenben
farm - farm
cow - tehén
haven't - nem
seen - látta
hasn't - nincs
taken - elvitt(ék), elvett(ék)
statue - szobor
taught - tanítottunk, tanította, tanított
gotten - lett, megkapta, szerzett
award - díj
degree - diploma
gone - elment, ment, menve
graduation - diplomaosztó
great-grandparent - dédszülő
reunion - összejövetel
visited - meglátogattad, meglátogatták, meglátogatott
flown - repült
chess - sakk
drama - dráma
twenty ten - húsz tíz
participate - részt vesz
seventy - hetven
two thousand three - kétezer, kétezer három
coin - érem
collect - gyűjt
nineteen sixty - ezerkilencszázhatvan, ezerkilencszázhatvanban
how about you - és te
since - minthogy, mivel, óta
town - város
on stage - színpadon
thousand - ezer
soul - soul
flute - fuvola
nineteen - tizenkilenc
volunteer - önkénteskedik
factory - gyár
never mind - ne törődj vele
future - jövő
the news - a hírek
mean - ért
i hope not - remélem, hogy nem
honest - őszinte
shocking - megdöbbentő
fact - tény
disagree - nem ért egyet
against - ellene
pay attention - figyel
pay attention to - figyeljen
election - választás
radio - rádió
not exactly - nem pontosan, Nem pontosan
anybody - senki, bárki, senki sem
candidate - jelölt
president - elnök
politics - politika
somebody - valakire, valakinek, valaki
intelligent - intelligens
vote for - szavazol
politician - politikus
vote - szavaz
horrible - szörnyű
action - felvétel, tett, akció
me neither - Én sem
ending - befejezés
scene - jelenet
subtitles - felirat
American - amerikai
character - szereplő
make sense - értelme van
part - rész
horror - horror
comedy - vígjáték
afraid of - fél, Félek
definitely - határozottan
nothing - semmi
bored - unatkozó
no one - senki
everyone - mindenki
begin - kezdődik
trailer - előzetes
i'd love that - szeretném
mind - felfogás, bánnád, tudat
redo - újracsinál
solution - megoldás
suggest - javasol
feedback - visszajelzés
not right now - nem most
others - többieket, másoknak, többiekkel
respect - tisztel
i don't know - nem ismerem, nem ismerek
for example - például
supplies - kellékre, kellékeket, kellékekre
stapler - tűzőgép
keep - tart
why don't - miért nem
on time - időben
stop - leállít, állni, abbahagy
video call - videóhívás
argue - vitatkozik
in person - személyesen
weekly - heti
conference room - konferenciaterem
the sun - a nap, a napot
clearly - tisztán
the sky - az ég, az égen
the moon - a Holdat
bright - fényes
easily - könnyen
nature - természet
path - út
snowboard - snowboardozik
third - harmadik
regularly - rendszeresen
ever - valaha
forest - erdő
along - végig- (megy/sétál), magával/magukkal (visz/nek), mentén
jog - kocog
swimmer - úszó
up to you - rajtad múlik
choice - választás
jersey - mez
price tag - árcédula
rare - ritka
racket - ütő
affordable - megfizethető
least - legkevésbé
half price - félár
section - részleg
don't care - érdekelnek, érdekel
less - kevésbé
picky - válogatós
list - lista
sandal - szandál
architecture - építészet
geography - földrajz
exactly - pontosan
climate - éghajlat
bilingual - kétnyelvű
hometown - szülőváros
capital - főváros
its - ...a/e/ja/je, a/az...-a/e/ja/je
church - templom
owner - tulajdonos
mosque - mecset
flag - zászló
what do you think of - mit gondolsz
adventurous - kalandvágyó
culture - kultúra
cuisine - konyha
represent - képvisel
Italian - olasz
modern - modern
as - amint, valamiként, miközben
well-known - ismert
population - népesség, lakosság, népessége
fourteen - tizennégy
theirs - övék, az övék, az övéket
fill - tölt
knife - kés
knives - kések, kés, késekre
mixer - mixer
ours - a miénk, a mieink, irodánk
newspaper - újság
pile - halom
toothpaste - fogkrém
hers - övé, az övét
messy - rendetlen
perfume - parfüm
mine - az enyémet, enyéim, enyémet
whose - kié, kinek, akinek
yours - az önöké, a tiétek, a tieid
coat - kabát
alarm clock - ébresztőóra
all kinds of - mindenféle
what time - mikor
congratulations - gratulálok
rsvp - kérjük, jelezzen vissza
speech - beszéd
seventeen - tizenhét
waiter - pincér
photographer - fényképész
champagne - pezsgő
melon - dinnye, dinnyét
steak - steak
adult - felnőtt
tons of - rengeteg
backyard - hátsó udvar
celebrate - ünnepel
hey - szia
casual - laza, hétköznapi
ceremony - ünnepség
graduate from - diplomázzak
where's - Hol van
found - megtalálta, találtuk, talált
carefully - óvatosan, gondosan
parking space - parkolóhely
for sale - eladó
spent - töltötték, elköltöttünk, töltöttek
bookstore - könyvesbolt
euro - euró
price - ár
high - magas
toy - játék
sneaker - sportcipő
leather - bőr
discount - kedvezmény
belt - öv
salesperson - eladó
salespeople - eladóknak, eladó, eladók
there was - volt
there were - volt
jelly - dzsem
sweets - édességet, édességeket
blender - turmixgép
gallon - gallon
half - fél
oven - sütő
mix - összekever
measure - mér
teaspoon - teáskanál
spoon - kanál
mug - bögre
fork - villa
main course - főétel
yogurt - joghurt
curry - curry
pot - fazék
stove - tűzhely
expired - lejárt
hot chocolate - forró csoki
ice - jég
cabinet - szekrény
freezer - fagyasztó
none of - egyik
leaves - (fa)levelek, elindul, elutazik
tool - szerszám
borrow - kölcsönkér
insect - rovar
equipment - felszerelés
what about - mi a helyzet ………vel?
instead - inkább
shout - kiabál
complain - panaszkodik
bicycle - bicikli
anymore - már, tovább
met - találkozott
of course not - természetesen nem
mayor - polgármester
stole - lopták, loptak, lopta
all of - az összes
any of - egyet sem
some of - néhányra, néhány részét, egy részét
yard - udvar
seafood - tenger gyümölcsei
barbecue - grillezett étel
ham - sonka
ketchup - ketchup
slice - szelet
cream - tejszín
flour - liszt
above - föléd, fölé, fölött
bake - süt
cupcake - cupcake
garlic - fokhagyma
basil - bazsalikom
pepper - bors
a variety of - különféle
little - kis
pear - körte
ingredient - hozzávaló
grape - szőlő
cup - csésze, kupa, csészét
peach - őszibarack
supper - vacsorát
good luck - sok szerencsét
else - mást, másról, még (másvalami)
race - verseny
kilometer - kilométer
fried - sült
fit - fitt
avoid - kerül, kerülöm, kerüld
diet - étrend
habit - szokás
winner - győztes
prize - díj
who's - Kit, Ki
wellness - wellness
retreat - elvonulás
activity - tevékenység
energy - energia
cycling - biciklizés, kerékpározást, kerékpározás
teach - tanít
instructor - oktató
each other - egymást, egymásnak
laugh - nevet
chat - beszégetés
such a - olyan, ilyen
surprise - meglepetés
thought - gondolt (vmire), gondolkodott (vmin), (azt) hitt(em/ed/e)
yeah - igen
unfortunately - sajnos
rumor - pletyka
guy - srác
the truth - igazat
glad - örül
shocked - döbbent
awful - szörnyű
break up - szakít
get married - összeházasodik
knew - (ő) tudta, tudta, ismert
romantic - romantikus
hope - remél
relationship - kapcsolat
in love - szerelmes
heard - hallott, meghallottad
download - letölt
turn off - kikapcsol
edit - szerkeszt
program - program
link - link
get a virus - elkap egy vírust
click on - rákattint
virus - vírus
software - szoftver
charger - töltő
connect - csatlakoztat
turn on - bekapcsol
broke - eltört, eltörtek, törte
tablet - tablet
drop - leejt
battery - akkumulátor
debit card - bankkártya
bank - bank
budget - költségvetés
meditate - meditál
journal - napló
stretch - nyújt
while - amíg
life - élet
speak to - beszél vkivel
skill - készség
set - készlet, üdvözlőkártyakészletet, tűzök
think - gondolkozik
get home - hazaér
go to sleep - aludni megy
thirty-first - harmincegyedik
bought - vettem, vásároltak, vásároltál
building - épület
customer - ügyfél
convenient - megfelelő
note - jegyzet
pick - választ
organized - szervezett
task - feladat
suggestion - javaslat
writer - író
best - a legjobb
worst - legrosszabb
department - részleg
conversation - beszélgetés
worse - rosszabb
ready for - kész
goal - cél
world - világom, világnak, világ
whole - egész
spice - fűszer
mango - mangó
special - különleges
ones - azok
silver - ezüst
painting - festmény
bracelet - karkötő
gold - arany, aranyszínű
colorful - színes
lamp - lámpa
rug - szőnyeg
that one - az
the most - legfeledékenyebb
wool - gyapjú
chose - választanék, választottál, választottak
this one - ez
sunglasses - napszemüveg
popular - népszerű
colleague - munkatársad, kollégád, kollégámmal
fault - hiba
if you can - ha tudod
lend - kölcsönad
copy - másol
folder - mappa
if you want - ha akarod
print - nyomtat
create - (el)készít, (meg)alkot, létrehoz
version - változat
right away - azonnal
secretary - titkár
correct - helyes
wrote - írt, írtam, írtak
file - fájl
how old - hány éves, mennyi idős
twenty-one - huszonegy
years old - éves
gossip - pletykál
true - igaz
forgot - elfelejtették, elfelejtette, felejtettem
told - mesélt, elmeséltem, meséltünk
date - dátum, dátumnak, időpont
story - történet
gave - adott, adtak, adta
annoying - idegesítő
wonderful - csodálatos
sang - énekeltünk, énekelt, énekeltem
sing - énekel
brought - hozott, (ő) hozott, elhoztad
sent - küldtünk, küldtél, küldte
text message - szöveges üzenet
invitation - meghívó
happy birthday - boldog születésnapot
balloon - lufi
give - ad
dark - sötét
more often - gyakrabban
brain - agy
thank - megköszön
finger - ujj
improve - fejlődik, javít (rajta), javíthatják
teeth - fog, fogak, fogaid
how often - milyen gyakran
once - egyszer
back pain - hátfájás
must not - Nem szabad
normal - normális
mouth - száj
jump - ugrál
neck - nyak
may - május, talán, -hat, -het
receptionist - recepciós
wheelchair - kerekesszék
stomachache - gyomorfájás
medical - orvosi
lying down - feküdtem
must - biztosan, lennetek, kell
lie down - lefekszik
good for - jók, jó
shouldn't - kéne, kellene
smoothie - turmix
unhealthy - egészségtelen
ran - futottam, odafutott, vezettem
couldn't - láttam, láttunk, találtuk
at all - egyáltalán, sehogy sem
mile - mérföld
marathon - maraton
fitness - fitnesz
even - még
should - kellene, kéne
trainer - edző
hire - felvenni, fogadjak, fogadd
water bottle - vizesüveg
skip - kihagy
might - lehet
workout - edzés
slow - lassú
exhausted - kimerült
over - véget ér
get back - visszaér
washing machine - mosógép
unpack - kicsomagol
second - második
stairs - lépcsői, lépcső, lépcsőn
guest - vendég
foggy - ködös
tour - túra
take a tour - túrára megy
luggage - csomag
without - nélkül
airline - légitársaság
directions - irányok, útmutatások, útbaigazítást
traffic - forgalom
a ride - fuvart
ask for - kérni
classical - klasszikus
violin - hegedű
instrument - hangszer
what's - mi van, mi
puzzle - kirakós
go fishing - horgászni megy
hobby - hobbi
fast food - gyorsétel
stressed out - stresszes
honey - méz
if - ha, -e, e
unhappy - boldogtalan
relaxing - relaxáló
pajamas - pizsama
take a nap - szundít
go to bed - aludni megy
how's it going - hogy mennek a dolgok
stressful - stresszes
exercise - edz
relaxation - relaxálás
recommend - javasol
therapist - terapeuta
side effect - mellékhatás
whole body - teste, tested, testemben
German - német
Arabic - arab
doctor's office - orvosi rendelő
body - test
September - szeptember
tooth - fog
dentist - fogorvos
form - űrlap
fill out - kitölt
pain - fájdalom
anxiety - szorongás
confirm - megerősít
cause - okoz
patient - páciens
clinic - klinika
repeat - ismétel
traditional - hagyományos
made - tette, loptak, rávett
firework - tűzijáték
wore - viseltem, hordtam, viseltél
took - kivett, (el)vitt(e), vállalta
afraid - fél
ate - evett, ettél, ette
November - november
drank - ivott / ittak stb., ivott, itta
huge - hatalmas
twice - kétszer
fall - ősz
saw - látott, megláttuk
then - utána
came - származott, jöttünk, megjött
Christmas - karácsony
went - ment, jártam, hazamentél
got - szerezte, besötétedett, bejutottam
holiday - ünnep
valuable - értékes
update - frissítés
ring - gyűrű
belong to - tartozik
men - a férfiak, férfiakat, férfiak
location - helyszín
crime - bűncselekmény
contact - felveszi a kapcsolatot
missing - eltűnt
how big - mekkora
describe - leír
earring - fülbevaló
diamond - gyémánt
police - rendőrség
anyone - bárkivel, valaki, senkivel
robber - rabló
notice - észrevesz
grandfather - nagyapa
anything - bármi, valami, semmit
detective - nyomozó
steal - lop
say - mond
several - számos
women - a nők, nőket, nők
simple - egyszerű
instructions - utasítások
oops - hoppá
paragraph - bekezdés
mistake - hiba
sure - biztos, biztosra, biztosak
report - jelentés
deadline - határidő
possible - lehetséges
mention - említ
example - példa
idea - ötlet
due - esedékes
someone - valaki
plan - terv
presentation - prezentáció
amazing - lenyűgöző
social media - közösségi média
music video - videóklip
post - bejegyzés
website - webhely
author - szerző
young - fiatal
poem - vers
novel - regény
strange - furcsa
i know - én ismerek, tudok, tudom
director - rendező
pretty - csinos
actor - színész
comedian - humorista
as well - is
member - tag
rude - udvariatlan
rich - gazdag
celebrity - híresség
athlete - sportoló
jazz - dzsessz
go home - hazamegy
sleepy - álmos
drums - doboknál, dobot, dobokat
punk - punk
noisy - zajos
perform - fellép, előadni, lépnek fel
folk - nép
pop - pop
crowd - tömeg
stage - színpad
rap - rapet, rap, rapben
than - amennyire, mint
rock - rock
regular - átlagos
just - csak
festival - fesztivál
get well soon - jobbulást
cast - gipsz
prescription - recept
insurance company - biztosítótársaság
after - után, miután, ezután
grandmother - nagymama
waiting room - váróterem
elbow - könyök
helmet - sisak
bruise - zúzódás
surgery - műtét
quickly - gyorsan
scooter - robogó
ambulance - mentő
fall off - leesik vmiről, leesnek
arrive - érünk, odaértél, ideérni
in front of - előtt, elé
gas station - benzinkút
accident - baleset
motorcycle - motor
magazine - folyóirat
song - dal
show - műsor
cartoon - rajzfilm
had - kellett, megvolt, rendelkezett
pasta - tészta
cereal - gabonapehely
jam - lekvár
cookie - keksz
did - vásároltál, viseltél, tett
rugby - rögbi
play cards - kártyázik
elementary school - általános iskola
grammar - nyelvtan
Japanese - japán
high school - középiskola
cafeteria - menza
cry - sír
eighteen - tizennyolc
as a child - gyerekként
ago - ezelőtt
neighborhood - környék
move - költözik
reply - válaszol
miss - kihagy
health - egészség
in bed - ágyban, az ágyban, ágyba
face - arc
leg - láb
break - eltörtem, törtem, törted
nose - orr
arm - kar
didn't - nem, sem
advice - tanács
appointment - időpont
stay home - otthon marad
follow - követ
did not - nem
hospital - kórház
symptom - tünet
May - május
in the mountains - a hegyekben
bike - bicikli
midnight - éjfél
all weekend - egész hétvégén
last night - tegnap este
February - február
spring - tavasz
season - évszak
dry - szárít, száraz, megszárít
all day - egész nap
golf - golf
in the rain - az esőben
April - április
umbrella - esernyő
June - június
over the weekend - a hétvégén
humid - párás
podcast - podcast
album - album
yesterday - tegnap
December - december
winter - tél
i don't think so - nem hiszem
which - melyik, hányadik, amit
necklace - nyaklánc
blouse - blúz
choose - választ
light - világítás, lámpát, könnyű
fancy - elegáns
wedding - esküvő
happen - történik
attend - részt vesz
around - körül
rain - esik
storm - vihar
picnic - piknik
i think so - azt hiszem
hang out - lóg
tomorrow night - holnap este
afternoon - délután
headphones - fejhallgató
July - július
sunscreen - naptej
pack - csomagol
swimsuit - fürdőnadrágot, fürdőruha, fürdőruhát
first class - első osztály
March - március
actually - valójában
lake - tó
plane - repülő
August - augusztus
across - át
boat - hajó
fly - repül
ocean - óceán
January - január
October - október
can't wait - alig várom
ski - síel
Egypt - Egyiptom
going to - fog, bemenni
raincoat - esőkabát
island - sziget
see you soon - viszlát hamarosan
text - üzenetet ír
agree - egyetért
agree with - érteniük, értek egyet, egyetértek
that's too bad - ez igazán kár
mad at - mérgesek
plan to - tervem hogy, tervem, hogy
jealous - féltékeny
mad - mérges
try to - próbáld meg, megpróbálom, próbálunk
want to - akarja, akarod, akarom
how are you doing - hogy vagy
worried - aggódónak, aggódtál, aggódom
seem - tűnik
lonely - magányos
everything - minden
what's wrong - mi a baj
explain - magyaráz
talk - beszélned, beszélget, beszél
need to - szükséges, kell
normally - rendszerint
routine - rutin
daily - napi
dishwasher - mosogatógép
carpet - szőnyeg
trash - szemét
chore - házimunka
organize - rendbe tesz
vacuum - porszívózik
ew - pfuj
laundry - ruhák
do laundry - mos
smell bad - rossz szagú
do the dishes - mosogat
have to - kell, szükséges
mess - rendetlenség
dish - edény
thirteen - tizenhárom
with a check - csekkel
receive - kap
international - nemzetközi
mail - levél, elküld, mail
add - hozzáad
stamp - bélyeg
would you like to - szeretnéd, szeretnél
sixty - hatvan
would like to - szeretne
envelope - boríték
letter - levél
grandpa - nagypapa
scissors - olló
grandchildren - unokák
card - üdvözlőkártya
present - ajándék
would you like - kér, kéri, szeretnél
pink - rózsaszín
tape - szalag
how can i help you - hogyan segíthetek önnek
clear - átlátszó
would like - kérem, szeretne
comfortable - kényelmes
tip - borravaló
check out - kijelentkezik
heat - fűtés
change - kicserél
temperature - hőmérséklet
blanket - takaró
fix - megjavít
toilet - vécé
sink - mosogató
sir - úr
suitcase - bőrönd
carry - visz
good evening - jó estét
ma'am - asszonyom
id - személyi igazolvány
front desk - recepció
check in - bejelentkezik
lemonade - limonádé
groceries - élelmiszerek, élelmiszerekhez, élelmiszereimhez
shop - vásárol
grilled - grillezett
too many - túl sok
yum - nyami
mushroom - gomba
cart - bevásárlókocsi
much - sok, sokat, sokkal
turkey - pulykahús
sushi - szusi
pork - disznóhús
tasty - finom
soda - üdítő
chocolate - csoki
potato chip - burgonyaszirom
cracker - sós keksz
any - semelyik, bármilyen, bármelyik
oil - olaj
olive - olajbogyó
recipe - recept
makeup - smink
a few - néhány
mother - anya
own - van
refund - visszatérítés
supermarket - szupermarket
printer - nyomtató
cell phone - mobiltelefon
clothing - ruházat, ruházati, ruhára
jewelry - ékszer
furniture - bútor
many - sok
problem - probléma
father - apa
option - lehetőség
customer service - ügyfélszolgálat
information - információ
so much - olyan sok
time - idő
return - visszavisz
paper - papír
essay - esszé
partner - társ
look at - ránéz (valakire)
sentence - mondat
board - tábla
talk about - beszélni
take notes - jegyzetel
lecture - előadás
listen to - (meg)hallgat (vkit/vmit), (oda)figyel (vkire), hallgatod
maybe - talán
stuff - dolog
drawer - fiók
look for - keres
workbook - munkafüzet
all the time - mindig
business - üzlet
chemistry - kémia
talk to - beszélnünk, beszélünk, beszélhetünk
major - szak
Canada - Kanada
college - főiskola
go to - odamennek
behind - mögött, hátul, mögé
shower - zuhanyzó
sofa - kanapé
garden - kert
dresser - komód
different - más
something - valami
dining room - étkező
empty - üres
weren't - nem voltak, nem lenne
kid - gyerek
bed - ágy
wasn't - nem voltam, nem, nem volt
bedroom - hálószoba
door - ajtó
pleased - elégedett
terrible - szörnyű
angry - mérges
interested in - érdekel
British - brit
position - állás
main - legfőbb
responsibility - felősség
challenge - kihívás
name - vezetéknevünk, keresztnevét, név
nervous - ideges
biology - biológia
were - voltunk, voltál, voltatok
worker - alkalmazott
helpful - segítőkész
kind - kedves
company - cég
was - volt, voltam
that's - Ezért, az, Az
last - legutóbbi
interview - interjú
finally - végre
see you tomorrow - viszlát holnap
message - üzenet
email address - e-mail-cím
send - küld
inbox - postaláda
Wi-fi - WIFI
how's - hogy van
microphone - mikrofon
remember - emlékszik
password - jelszó
online - online
type - gépel
webcam - webkamera
useful - hasznos
from home - otthonról
work - munka
keyboard - billentyűzet
day - nap
half an hour - fél óra
flight - repülés, járatunk, repülőút
leave - indul
soon - hamarosan
zoo - állatkert
end - véget ér
noon - dél
schedule - menetrend
subway - metró
hour - óra
train - vonat
get - odaérek, jutni, eljut vhova
station - vonatállomáson, vonatállomás, buszpályaudvart
in a hurry - sietve
because - mert
brunch - villásreggeli
before - előtt
there's - van, ott van
candy - édesség
screen - vászna, képernyőt, képernyő
are there - van
other - más, többi, másik
seat - vécéülőke, ülőhely, ülés
singer - énekes
there are - áll, van, vannak
awesome - remek
people - nép, emberektől, ember
is there - Van-e
long - hosszú
ugly - csúnya
restroom - mosdó
only - csak
there is - van
look - nézd
dance - táncol
pie - pite
bill - számla
save - félretesz
extra - még
butter - vaj
side - oldalsó, oldalon, oldali
between - közé, között, közötti
order - rendel
sauce - szósz
beef - marhahús
wine - bor
evening - este
by - szerint, el, mellett
toward - felém, feléjük, felé
server - pincér
tomorrow - holnap
detail - részlet
finish - befejez
believe - hisz
later - később
him - ellene
ask - kérdez
meeting - értekezlet
them - nekik, azokat, őket
either - sem
tell - mondanod, megmondom, elárulod
on mute - némítva
quite - elég, egészen, igen
hear - hall
yay - hurrá
lose - veszít
point - pont
score - eredmény
beer - sör
thing - dolog, dolgot
glass - üveg, pohár, poharat
salty - sós
chip - csipsz, burgonyaszirom
napkin - szalvéta
during - közben, alatt, folyamán
hate - utál
ad - reklám
concert - koncert
bar - bár
loud - hangos
grandma - nagymama, nagyi
fan - szurkoló
on TV - a tévében
event - esemény
forty - negyven
you're welcome - szívesen
total - összeg
coupon - kupon
receipt - nyugta
um - hát, öö
soap - szappan
paper towel - papírtörlő
decide - dönt
have a headache - fáj a feje
mask - maszk, maszkra, maszkot
throat - torok
pill - tabletta
but - de, hanem, pedig
already - már
toilet paper - vécépapír
brand - márka
bandage - sebtapasz
all - összes
find - talál
aisle - sor
item - termék
popcorn - pattogatott kukorica
again - újra
fries - sült krumpli
share - megoszt
ninety - kilencven
line - sor
minute - perc
next time - legközelebb
wait in line - sorban állni, sorban álljak
parade - parádé
magic show - bűvészelőadás
won't - nem, nem fog
parking lot - parkoló
roller coaster - hullámvasút
how about - Mi lenne
ride - játék
morning - reggel
theme park - vidámpark
Australia - Ausztrália
how many - hány
they'll - lesznek, tesznek, fognak
country - ország
stay - tartózkodik, maradtok, maradnom
we'll - majd, leszunk, fogunk
Africa - Afrika
how long - mennyi ideig
visit - meglátogat
she'll - fog, megy, lesz
South america - Dél-Amerika
he'll - fogja, tesz, lesz
Asia - Ázsia
you'll - leszel, fogsz, kapsz
i'll - fogok
trip - utazás
North america - Észak-Amerika
first - először
will - lesz, majd, fogja
take a flight - repülővel megy
that's fine - az rendben van
garage - garázs
truck - teherautó
in the evening - este
fish - hal
feed - megetet
walk the dog - megsétáltatja a kutyát
the mail - postába
no problem - semmi gond
package - csomag
porch - veranda
counter - pult
flower - virág
put - tesz
of course - természetesen
could - tudtalak, tudtál, -hat
in the afternoon - délután
come over - átjön
lots of - rengeteg, sok
fruit - gyümölcs
healthy - egészséges
meal - étkezésem, étkezésük, étel
yoga - jóga
karate - karate
weight - súly
heavy - nehéz
lift - emel
push-up - fekvőtámasz
far - messze
can't - nem, nem tud
throw - dob
kick - rúg
catch - elkap
inside - belső, belseje, belül
have fun - jól érzi magát
go swimming - úszni megy
worry - aggódik
dangerous - veszélyes
too much - túl sok
area - terület
cross - átmegy
spend - költ
hurry - siet
road - út
bridge - híd
crowded - zsúfolt
forget - elfelejt
purse - retikül
bring - hoz
careful - óvatos
alone - egyedül
charge - feltölt
be - lenniük, legyél, légy
safe - biztonságban
free - díjmentes, ingyenes, ingyen
ok - rendben
tonight - ma este
calendar - naptár
perfect - tökéletes
drive - vezet
sound - hangja, hang, hangzik
let's - Tartsunk, Csináljuk, Menjünk
there - oda
lunch - ebéd
us - nekünk, minket, USA
meet - találkozik
join - csatlakozz, csatlakozom, csatlakozunk
try - megpróbál
me - nekem, én, engem
call - hív
movie theater - mozi
invite - meghív
same - ugyanaz
art - művészet
club - klub
lesson - óra
pool - medence
locker - szekrény
coach - edző
stressed - stresszes
done with - kész van vele
subject - tantárgy
history - történelem
science - tudomány
textbook - tankönyv
math - matek
next - következő
late for - Késésben, késésben
the internet - interneten
use - használ
coffee shop - kávézó
discuss - beszélget
learn - tanul
email - e-mail
language - nyelv
paint - fest
topic - téma
start - kezd
draw - rajzol
project - projekt
on the ground - a földön
fire - tűz
bear - medve
tent - sátor
video - videó
photo - fénykép
smile - mosolyog
river - folyó
hike - túrázik
stand - áll
relax - relaxál
surf - szörföl
camp - kempingezik
beach - tengerpart
still - még mindig
weather - idő
mountain - hegy
snow - hó
scary - ijesztő
snack - harapnivaló
come - jön
make - készít
about - amiatt, kapcsolatban, körül
sit - ül
animal - állat
write - ír
outside - kint
swim - úszik
run - fut
toast - pirítós
sleep - alszik
right now - éppen most
weekend - hétvége
with cash - készpénzzel
plastic - műanyag
with a card - kártyával
pay - kifizet, kifizetni, fizesd
wear - visel
tie - nyakkendő
prefer - jobban szeret
fifty - ötven
money - pénz
cent - cent
pants - nadrág
close - zár
size - méret
when - mikor
clothes - ruhák
what - mi
sell - árul
fine - jó, finom, jól
feet - lábfejek
better - jobb
medicine - gyógyszer
foot - lábfej
sick - beteg
hand - kéz
feel - érez
head - fej
hurt - megbántották, fájni, fáj
stomach - gyomor
ear - fül
child - gyerek
the flu - influenza
fever - láz
feel sick - rosszul érezni magát, rosszul érezni magam
cough - köhögés
never - sosem
board game - társasjáték
closet - szekrény
win - nyer
card game - kártyajáték
rule - szabály
video game - videójáték
good at - jó az írásban
volleyball - röplabda
easy - könnyű
strong - erős
hockey - jégkorong
doesn't - nem
difficult - nehéz
practice - gyakorol
no way - dehogy
don't - nem, ne, nincs
boring - unalmas
football - amerikai foci
enjoy - élvez
come here - gyere ide
first name - keresztnév
last name - vezetéknév
far away - messze
next to - mellett, mellé
pharmacy - gyógyszertár
police officer - rendőr
tourist - turista
grocery store - élelmiszerbolt
post office - posta
does - tesz, nem
live - lakik
know - tudjátok, tud, tudnia
address - cím
do - tisztítsuk, megcsinálod, csinálnom
map - térkép
twelve - tizenkettő
cash - készpénz
good afternoon - jó napot
carrot - répa
thirsty - szomjas
eleven - tizenegy
very much - nagyon
can - lehet, vehetjük, tudnak
potato - krumpli
pound - font
yellow - sárga
more - még több
cherry - cseresznye
lemon - citrom
strawberry - eper
downtown - belváros
go shopping - vásárolni megy
market - piac
hungry - éhes
good night - jó éjt
jeans - farmer
so many - olyan sok
cool - menő
some - valami, valamennyink, egy kis
twenty - húsz
cost - kerül valamibe
dollar - dollár
here are - itt van(nak)
shampoo - sampon
wow - azta
a lot of - sok
brush - hajkefe
medium - közepes méretű
see - lát
orange - narancssárga
boot - csizma
it - azt, ez, az
good morning - jó reggelt
i'd like - szeretnék
purple - lila
t-shirt - póló
dress - ruha
what color - milyen színű, milyen színűek
glasses - szemüveg
backpack - hátizsák
black - fekete
thank you for - Köszönöm, hogy, Köszönöm
her - őt, benne, neki
gift - ajándék
birthday - születésnap
his - övé
bowl - tál
plate - tányér
dirty - piszkos
glove - kesztyű
gray - szürke
lost - elveszett
oh no - Ó, nem
what kind of - milyen
right here - pont itt
wait - vár
under - alul, alatt, alá
read - olvas
notebook - jegyzetfüzet
color - szín
plant - növény
poster - plakát
wall - fal
music - zene
guitar - gitár
play the - játszani
piano - zongora
band - zenekar
those - azok a, azok, azokat
clock - óra
picture - kép
picture of - képet egy
camera - fényképezőgép
thanks - köszi
chair - szék
our - mi
single - egyedülálló
blond - szőke
their - az ő, őket
married - házas
beard - szakáll
short - alacsony
hair - haj
eye - szem
blue - kék
brown - barna
children - a gyerekek, gyereket, gyerekek
has - neki megvan, eszik, áll
uncle - nagybácsi
girlfriend - barátnő
grandparents - nagyszülőm, nagyszülők, nagyszüleinknek
boyfriend - barát
aunt - nagynéni, nagynénim, nagynénémet
ice cream - fagylalt
of - közül
juice - gyümölcslé
bottle - üveg
chicken - csirkehús
rice - rizs
meat - hús
vegetable - zöldség
salt - só
soup - leves
bean - bab
onion - hagyma
cheese - sajt
buy - vásárol
an - egy
apple - alma
tomato - paradicsom
banana - banán
night - éjszaka
travel - utazik
warm - meleg
place - hely
allowed - engedélyezett
on vacation - vakáción
hotel - szálloda
pillow - párna
toothbrush - fogkefe
towel - törülköző
phone number - telefonszám
ready - kész
have - van
reservation - foglalás
room - hely, szoba, üres hely
vacation - szabadság
year - év
summer - nyár
take - megy, vinni, vennie
often - gyakran
p.m. - délután
eat - eszik
dinner - vacsora
walk - sétál
after work - munka után
sometimes - néha
after school - az iskola után
thursday - csütörtök
gym - edzőterem
goes - megy, elmegy, jár
to - hozzá, amynek, ekhez
tuesday - kedd
go - megy
wednesday - szerda
early - korán
start work - kezdeni, elkezdem
start school - kezdted
monday - hétfő
ten - tíz
a.m. - reggel
eat breakfast - megreggeliznek
tv - tévéje, tévét, televízió
at night - éjszaka
movie - film
watch - megnézem, megnézünk, nézzük meg
sunday - vasárnap
month - hónap
week - hét
friday - péntek
wash - mos
floor - padló
window - ablak
usually - általában
always - mindig
sweep - söpör
rest - pihen
every - minden
every day - mindennap
cook - főz
saturday - szombat
basketball - kosárlabda
team - csapat
exciting - izgalmas
me too - én is
a lot - nagyon
play - focizunk, játszanak, rögbizem
ball - labda
favorite - kedvenc
baseball - baseball
sport - sport
tennis - tenisz
love - szeret
soccer - foci
both - mindketten, mindkettő, mindkét
fast - gyors
player - játékos
fifteen - tizenöt, tizenötkor
eight - nyolc
nine - kilenc
airport - repülőtér
almost - majdnem
seven - hét
six - hat
nearest - legközelebbi
taxi - taxi
five - öt
yet - még, már
train station - vonatállomás
bus station - buszpályaudvar
four - négy
thirty - harminc
now - most
bus - busz
what time is it - hány óra van
one - egy
o'clock - órakor, óra
another - még egy
sock - zokni
doll - baba
game - játék
person - személy
who - ki
tall - magas
manager - menedzser
broken - tönkrement
at - iskolánknál, show-nál, diplomaosztónál
why - miért
toy store - játékboltba, játékbolt
over there - ott
downstairs - a földszinten
shoe - cipő
laptop - laptop
where - hol
upstairs - az emeleten
mall - bevásárlóközpont
shoe store - cipőbolt
help - segítség, segíteni, segítsenek
confused - összezavarodva
group - csoport
classroom - osztályterem
homework - házi feladat
bad - rossz
grade - jegy
quiz - kvíz
aren't - ugye, nem, nincsenek
page - oldal
eraser - radír
word - szó
wrong - helytelen
isn't - nem, nincs
pencil - ceruza
number - szám
test - teszt
school - iskola
answer - válasz
question - kérdés
excited - izgatott
take care - vigyázz magadra
parents - szülők
good to see you - jó látni téged
i'm sorry - sajnálom
surprised - meglepett
upset - feldúlt
daughter - lánya
baby - baba
son - fia
sad - szomorú
how - hogy
family - család
happy - boldog
not - nem
tired - fáradt
no - nem
interesting - érdekes
coworker - munkatárs
job - munka
hard - nehéz
desk - íróasztal
book - könyv
boss - főnök
at work - munkában, a munkahelyen, munkahelyen
important - fontos
these - ezek a, ezeket az, ezeket a
document - dokumentum
key - kulcs
office - iroda
computer - számítógép
pen - toll
do you need - szükséged van ...?
done - tett, csinált, végeztünk
full - teljes, tele, teli
credit card - hitelkártya
box - dobozt, doboz, dobozra
enough - elég
drink - ital
spicy - fűszeres
cold - hideg
vegetarian - vegetáriánus
sweet - édes
bread - kenyér
how much - mennyi
hot - forró
egg - tojás
pancake - palacsinta
fresh - friss
available - szabad
for - részére, helyette, tartó
breakfast - reggeli
café - kávézó
bye - szia
they're - Ők, Őket
so - tehát, így, ezért
best friend - legjobb barát
polite - udvarias
he's - ő
she's - ő
sorry - bocsánat
late - késésben
he - ő
neighbor - szomszéd
funny - vicces
we're - vagyunk, leszünk
she - ő
you're - vagy
from - tizenöttől, elől, hattól
friendly - barátságos
cousin - unokatestvér
they - ők
party - buli
fun - szórakoztató
classmate - csoporttárs
we - mi, nekünk
together - együtt
class - csoport
really - nagyon
good - jó, jók, jót
who is - kik vannak ..., ki
cake - torta
roommate - szobatárs
professor - professzor
nice to meet you - Örülök, hogy
also - is
am - vagyok
see you later - viszlát később
near - közelébe, környékén, közel
wallet - pénztárca
car - autó
have a seat - foglalj helyet
food - étel
fridge - hűtő
bathroom - fürdőszoba
on - bekapcsolva, án, rajta
couch - kanapé
clean - tiszta
table - asztal
the - az, a
beautiful - gyönyörű
kitchen - konyha
living room - nappali
how are you - hogy vagy
come in - bejönnek
here is - íme, itt
i'm good - Jól vagyok
apartment - lakás
how much is - mennyibe kerül
green - zöld
cheap - olcsó
that - azt, az az, amit
white - fehér
skirt - szoknya
like - úgy, kedveled, kedvelsz
closed - zárva
on sale - leárazott
want - akar
red - piros
shirt - póló
open - nyitva
new - új
store - bolt
don't worry - ne aggódj
snake - kígyó
three - három
smart - okos
two - kettő
are - vannak
cute - aranyos
rabbit - nyúl
i have - iszom, van, megvan
do you have - nálatok van, nálad van
cat - macska
pet - házikedvenc
dog - kutya
sweater - pulóver
scarf - sál
windy - szeles
it's - ez, van
is it - van
hat - sapka
need - szükség van
cloudy - felhős
in - alatt, bent, be
it's hot - meleg van
it's sunny - napos idő van, napos
it's cold - hideg van
here - itt
it's rainy - Esős az idő
today - ma
at home - otthon, itthon
well - jól
Hindi - hindi
a little - egy kicsit
French - francia
at school - az iskolában, iskolában, iskolába
study - tanul
Chinese - kínai
oh - jaj, ó
understand - ért
you - te
I - én
Spanish - spanyol
English - angol
speak - beszél
great - nagyszerűnek, nagyszerű, nagyszerűen
friend - barát
lawyer - ügyvéd
nurse - ápoló
husband - férj
teacher - tanár
wife - feleség
chef - séf
i'm - vagyok
student - diák
doctor - orvos
delicious - finom
here is your - Itt van a te, Itt van az
check - számla
dessert - desszert
excuse me - elnézést
bowl of soup - tál leves
salad - saláta
burger - hamburger
large - nagy
a - egy, ötöst, A
glass of water - pohár vizet
pizza - pizza
small - kicsi
i'd like a - Szeretnék egy
expensive - drága
sandwich - szendvics
menu - étlap
very - nagyon
park - park
restaurant - étterem
library - könyvtár
old - régi
where is - Hol található, Hol van
right - igazad, ugye, jog
university - egyetem
quiet - csendes
house - ház
famous - híres
this - ez, ez a, e
street - utca
museum - múzeum
busy - zsúfolt
is - az, van, áll
nice - szép
big - nagy
city - város
yes - igen
customs - szokása, vám
welcome to - üdvözlünk a
jacket - kabát
is this - ez, van
phone - telefon
bag - táska
gate - kapu
your - Ön, sportod, ti
ticket - jegy
passport - útlevél
is from - származik
brother - fiútestvér
sister - lánytestvér
this is - ez
my - az én
mom - anya
dad - apa
my name is - a nevem
hi - szia
too - is
and you - És, és te
i am from - származom
goodbye - viszontlátásra
thank you - köszönöm
and - és, meg, pedig
water - víz
hello - szia
sugar - cukor
milk - tej
with - táskával, dobozzal, sérülésem
or - vagy
tea - tea
welcome - üdvözöllek
coffee - kávé
please - kérlek
`,hA=({onLoadCards:e})=>{const[n,t]=T.useState(ak),{toast:i}=vb(),o=()=>{t(ak)},l=()=>{t(fA)},a=()=>{const f=n.split(`
`).filter(u=>u.trim()!==""),h=[];let y=!1;f.forEach((u,p)=>{const g=u.split(" - ");if(g.length>=2){const b=g[0].trim(),z=g.slice(1).join(" - ").trim();b&&z?h.push({id:`card-${Date.now()}-${p}`,front:b,back:z}):(i({title:"Input Error",description:`Line ${p+1} is incomplete. Please ensure both front and back are present.`,variant:"destructive"}),y=!0)}else i({title:"Input Error",description:`Line ${p+1} is not in 'front - back' format.`,variant:"destructive"}),y=!0}),!y&&h.length>0?(e(h),i({title:"Success",description:`${h.length} flashcards loaded!`})):!y&&h.length===0&&i({title:"No Cards Loaded",description:"Please enter some flashcards in 'front - back' format.",variant:"destructive"})},d=f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),a())};return N.jsxs("div",{className:"w-full max-w-2xl p-6 bg-white rounded-lg shadow-md",children:[N.jsx("h2",{className:"text-2xl font-semibold mb-4 text-center",children:"Create Your Flashcards"}),N.jsx("p",{className:"text-gray-600 mb-4 text-center",children:'Enter your words in "front - back" format, one per line.'}),N.jsx(tw,{placeholder:`Example:
Hello - Hola
Goodbye - Adiós
Cat - Gato`,value:n,onChange:f=>t(f.target.value),onKeyDown:d,rows:10,className:"mb-4 resize-y"}),N.jsx(rt,{onClick:o,className:"mr-2",children:"Default Flashcards"}),N.jsx(rt,{onClick:l,className:"mr-2",children:"DL Flashcards"}),N.jsx(rt,{onClick:a,className:"",children:"START"})]})},rw=T.forwardRef(({className:e,...n},t)=>N.jsx("div",{ref:t,className:ln("rounded-lg border bg-card text-card-foreground shadow-sm",e),...n}));rw.displayName="Card";const pA=T.forwardRef(({className:e,...n},t)=>N.jsx("div",{ref:t,className:ln("flex flex-col space-y-1.5 p-6",e),...n}));pA.displayName="CardHeader";const Ff=T.forwardRef(({className:e,...n},t)=>N.jsx("h3",{ref:t,className:ln("text-2xl font-semibold leading-none tracking-tight",e),...n}));Ff.displayName="CardTitle";const mA=T.forwardRef(({className:e,...n},t)=>N.jsx("p",{ref:t,className:ln("text-sm text-muted-foreground",e),...n}));mA.displayName="CardDescription";const Vf=T.forwardRef(({className:e,...n},t)=>N.jsx("div",{ref:t,className:ln("p-6 pt-0",e),...n}));Vf.displayName="CardContent";const gA=T.forwardRef(({className:e,...n},t)=>N.jsx("div",{ref:t,className:ln("flex items-center p-6 pt-0",e),...n}));gA.displayName="CardFooter";function yA(e){const n=T.useRef({value:e,previous:e});return T.useMemo(()=>(n.current.value!==e&&(n.current.previous=n.current.value,n.current.value=e),n.current.previous),[e])}var Bh="Switch",[kA,G4]=wa(Bh),[vA,bA]=kA(Bh),iw=T.forwardRef((e,n)=>{const{__scopeSwitch:t,name:i,checked:o,defaultChecked:l,required:a,disabled:d,value:f="on",onCheckedChange:h,form:y,...u}=e,[p,g]=T.useState(null),b=Et(n,C=>g(C)),z=T.useRef(!1),x=p?y||!!p.closest("form"):!0,[w=!1,_]=jb({prop:o,defaultProp:l,onChange:h});return N.jsxs(vA,{scope:t,checked:w,disabled:d,children:[N.jsx(_n.button,{type:"button",role:"switch","aria-checked":w,"aria-required":a,"data-state":aw(w),"data-disabled":d?"":void 0,disabled:d,value:f,...u,ref:b,onClick:fn(e.onClick,C=>{_(R=>!R),x&&(z.current=C.isPropagationStopped(),z.current||C.stopPropagation())})}),x&&N.jsx(zA,{control:p,bubbles:!z.current,name:i,value:f,checked:w,required:a,disabled:d,form:y,style:{transform:"translateX(-100%)"}})]})});iw.displayName=Bh;var sw="SwitchThumb",ow=T.forwardRef((e,n)=>{const{__scopeSwitch:t,...i}=e,o=bA(sw,t);return N.jsx(_n.span,{"data-state":aw(o.checked),"data-disabled":o.disabled?"":void 0,...i,ref:n})});ow.displayName=sw;var zA=e=>{const{control:n,checked:t,bubbles:i=!0,...o}=e,l=T.useRef(null),a=yA(t),d=vz(n);return T.useEffect(()=>{const f=l.current,h=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(h,"checked").set;if(a!==t&&u){const p=new Event("click",{bubbles:i});u.call(f,t),f.dispatchEvent(p)}},[a,t,i]),N.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...o,tabIndex:-1,ref:l,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function aw(e){return e?"checked":"unchecked"}var lw=iw,wA=ow;const su=T.forwardRef(({className:e,...n},t)=>N.jsx(lw,{className:ln("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...n,ref:t,children:N.jsx(wA,{className:ln("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));su.displayName=lw.displayName;var xA="Label",uw=T.forwardRef((e,n)=>N.jsx(_n.label,{...e,ref:n,onMouseDown:t=>{var o;t.target.closest("button, input, select, textarea")||((o=e.onMouseDown)==null||o.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));uw.displayName=xA;var cw=uw;const SA=_h("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),ou=T.forwardRef(({className:e,...n},t)=>N.jsx(cw,{ref:t,className:ln(SA(),e),...n}));ou.displayName=cw.displayName;const dw=T.createContext({});function _A(e){const n=T.useRef(null);return n.current===null&&(n.current=e()),n.current}const Uh=typeof window<"u",CA=Uh?T.useLayoutEffect:T.useEffect,$h=T.createContext(null);function Hh(e,n){e.indexOf(n)===-1&&e.push(n)}function Wh(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}const Ir=(e,n,t)=>t>n?n:t<e?e:t;let qh=()=>{};const Mr={},fw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function hw(e){return typeof e=="object"&&e!==null}const pw=e=>/^0[^.\s]+$/u.test(e);function Kh(e){let n;return()=>(n===void 0&&(n=e()),n)}const jt=e=>e,TA=(e,n)=>t=>n(e(t)),Ca=(...e)=>e.reduce(TA),fa=(e,n,t)=>{const i=n-e;return i===0?1:(t-e)/i};class Gh{constructor(){this.subscriptions=[]}add(n){return Hh(this.subscriptions,n),()=>Wh(this.subscriptions,n)}notify(n,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](n,t,i);else for(let l=0;l<o;l++){const a=this.subscriptions[l];a&&a(n,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fr=e=>e*1e3,hr=e=>e/1e3;function mw(e,n){return n?e*(1e3/n):0}const gw=(e,n,t)=>(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e,jA=1e-7,EA=12;function AA(e,n,t,i,o){let l,a,d=0;do a=n+(t-n)/2,l=gw(a,i,o)-e,l>0?t=a:n=a;while(Math.abs(l)>jA&&++d<EA);return a}function Ta(e,n,t,i){if(e===n&&t===i)return jt;const o=l=>AA(l,0,1,e,t);return l=>l===0||l===1?l:gw(o(l),n,i)}const yw=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,kw=e=>n=>1-e(1-n),vw=Ta(.33,1.53,.69,.99),Qh=kw(vw),bw=yw(Qh),zw=e=>(e*=2)<1?.5*Qh(e):.5*(2-Math.pow(2,-10*(e-1))),Yh=e=>1-Math.sin(Math.acos(e)),ww=kw(Yh),xw=yw(Yh),PA=Ta(.42,0,1,1),RA=Ta(0,0,.58,1),Sw=Ta(.42,0,.58,1),IA=e=>Array.isArray(e)&&typeof e[0]!="number",_w=e=>Array.isArray(e)&&typeof e[0]=="number",MA={linear:jt,easeIn:PA,easeInOut:Sw,easeOut:RA,circIn:Yh,circInOut:xw,circOut:ww,backIn:Qh,backInOut:bw,backOut:vw,anticipate:zw},DA=e=>typeof e=="string",lk=e=>{if(_w(e)){qh(e.length===4);const[n,t,i,o]=e;return Ta(n,t,i,o)}else if(DA(e))return MA[e];return e},Gl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function LA(e,n){let t=new Set,i=new Set,o=!1,l=!1;const a=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(y){a.has(y)&&(h.schedule(y),e()),y(d)}const h={schedule:(y,u=!1,p=!1)=>{const b=p&&o?t:i;return u&&a.add(y),b.has(y)||b.add(y),y},cancel:y=>{i.delete(y),a.delete(y)},process:y=>{if(d=y,o){l=!0;return}o=!0,[t,i]=[i,t],t.forEach(f),t.clear(),o=!1,l&&(l=!1,h.process(y))}};return h}const OA=40;function Cw(e,n){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,a=Gl.reduce((C,R)=>(C[R]=LA(l),C),{}),{setup:d,read:f,resolveKeyframes:h,preUpdate:y,update:u,preRender:p,render:g,postRender:b}=a,z=()=>{const C=Mr.useManualTiming?o.timestamp:performance.now();t=!1,Mr.useManualTiming||(o.delta=i?1e3/60:Math.max(Math.min(C-o.timestamp,OA),1)),o.timestamp=C,o.isProcessing=!0,d.process(o),f.process(o),h.process(o),y.process(o),u.process(o),p.process(o),g.process(o),b.process(o),o.isProcessing=!1,t&&n&&(i=!1,e(z))},x=()=>{t=!0,i=!0,o.isProcessing||e(z)};return{schedule:Gl.reduce((C,R)=>{const D=a[R];return C[R]=(P,$=!1,Y=!1)=>(t||x(),D.schedule(P,$,Y)),C},{}),cancel:C=>{for(let R=0;R<Gl.length;R++)a[Gl[R]].cancel(C)},state:o,steps:a}}const{schedule:Xe,cancel:ki,state:Sn,steps:Wd}=Cw(typeof requestAnimationFrame<"u"?requestAnimationFrame:jt,!0);let au;function NA(){au=void 0}const it={now:()=>(au===void 0&&it.set(Sn.isProcessing||Mr.useManualTiming?Sn.timestamp:performance.now()),au),set:e=>{au=e,queueMicrotask(NA)}},Tw=e=>n=>typeof n=="string"&&n.startsWith(e),Xh=Tw("--"),FA=Tw("var(--"),Zh=e=>FA(e)?VA.test(e.split("/*")[0].trim()):!1,VA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,no={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ha={...no,transform:e=>Ir(0,1,e)},Ql={...no,default:1},Zo=e=>Math.round(e*1e5)/1e5,Jh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function BA(e){return e==null}const UA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ep=(e,n)=>t=>!!(typeof t=="string"&&UA.test(t)&&t.startsWith(e)||n&&!BA(t)&&Object.prototype.hasOwnProperty.call(t,n)),jw=(e,n,t)=>i=>{if(typeof i!="string")return i;const[o,l,a,d]=i.match(Jh);return{[e]:parseFloat(o),[n]:parseFloat(l),[t]:parseFloat(a),alpha:d!==void 0?parseFloat(d):1}},$A=e=>Ir(0,255,e),qd={...no,transform:e=>Math.round($A(e))},Ni={test:ep("rgb","red"),parse:jw("red","green","blue"),transform:({red:e,green:n,blue:t,alpha:i=1})=>"rgba("+qd.transform(e)+", "+qd.transform(n)+", "+qd.transform(t)+", "+Zo(ha.transform(i))+")"};function HA(e){let n="",t="",i="",o="";return e.length>5?(n=e.substring(1,3),t=e.substring(3,5),i=e.substring(5,7),o=e.substring(7,9)):(n=e.substring(1,2),t=e.substring(2,3),i=e.substring(3,4),o=e.substring(4,5),n+=n,t+=t,i+=i,o+=o),{red:parseInt(n,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Bf={test:ep("#"),parse:HA,transform:Ni.transform},ja=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),ai=ja("deg"),pr=ja("%"),xe=ja("px"),WA=ja("vh"),qA=ja("vw"),uk={...pr,parse:e=>pr.parse(e)/100,transform:e=>pr.transform(e*100)},Es={test:ep("hsl","hue"),parse:jw("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:t,alpha:i=1})=>"hsla("+Math.round(e)+", "+pr.transform(Zo(n))+", "+pr.transform(Zo(t))+", "+Zo(ha.transform(i))+")"},dn={test:e=>Ni.test(e)||Bf.test(e)||Es.test(e),parse:e=>Ni.test(e)?Ni.parse(e):Es.test(e)?Es.parse(e):Bf.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ni.transform(e):Es.transform(e),getAnimatableNone:e=>{const n=dn.parse(e);return n.alpha=0,dn.transform(n)}},KA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function GA(e){var n,t;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Jh))==null?void 0:n.length)||0)+(((t=e.match(KA))==null?void 0:t.length)||0)>0}const Ew="number",Aw="color",QA="var",YA="var(",ck="${}",XA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function pa(e){const n=e.toString(),t=[],i={color:[],number:[],var:[]},o=[];let l=0;const d=n.replace(XA,f=>(dn.test(f)?(i.color.push(l),o.push(Aw),t.push(dn.parse(f))):f.startsWith(YA)?(i.var.push(l),o.push(QA),t.push(f)):(i.number.push(l),o.push(Ew),t.push(parseFloat(f))),++l,ck)).split(ck);return{values:t,split:d,indexes:i,types:o}}function Pw(e){return pa(e).values}function Rw(e){const{split:n,types:t}=pa(e),i=n.length;return o=>{let l="";for(let a=0;a<i;a++)if(l+=n[a],o[a]!==void 0){const d=t[a];d===Ew?l+=Zo(o[a]):d===Aw?l+=dn.transform(o[a]):l+=o[a]}return l}}const ZA=e=>typeof e=="number"?0:dn.test(e)?dn.getAnimatableNone(e):e;function JA(e){const n=Pw(e);return Rw(e)(n.map(ZA))}const vi={test:GA,parse:Pw,createTransformer:Rw,getAnimatableNone:JA};function Kd(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function eP({hue:e,saturation:n,lightness:t,alpha:i}){e/=360,n/=100,t/=100;let o=0,l=0,a=0;if(!n)o=l=a=t;else{const d=t<.5?t*(1+n):t+n-t*n,f=2*t-d;o=Kd(f,d,e+1/3),l=Kd(f,d,e),a=Kd(f,d,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:i}}function vu(e,n){return t=>t>0?n:e}const en=(e,n,t)=>e+(n-e)*t,Gd=(e,n,t)=>{const i=e*e,o=t*(n*n-i)+i;return o<0?0:Math.sqrt(o)},nP=[Bf,Ni,Es],tP=e=>nP.find(n=>n.test(e));function dk(e){const n=tP(e);if(!n)return!1;let t=n.parse(e);return n===Es&&(t=eP(t)),t}const fk=(e,n)=>{const t=dk(e),i=dk(n);if(!t||!i)return vu(e,n);const o={...t};return l=>(o.red=Gd(t.red,i.red,l),o.green=Gd(t.green,i.green,l),o.blue=Gd(t.blue,i.blue,l),o.alpha=en(t.alpha,i.alpha,l),Ni.transform(o))},Uf=new Set(["none","hidden"]);function rP(e,n){return Uf.has(e)?t=>t<=0?e:n:t=>t>=1?n:e}function iP(e,n){return t=>en(e,n,t)}function np(e){return typeof e=="number"?iP:typeof e=="string"?Zh(e)?vu:dn.test(e)?fk:aP:Array.isArray(e)?Iw:typeof e=="object"?dn.test(e)?fk:sP:vu}function Iw(e,n){const t=[...e],i=t.length,o=e.map((l,a)=>np(l)(l,n[a]));return l=>{for(let a=0;a<i;a++)t[a]=o[a](l);return t}}function sP(e,n){const t={...e,...n},i={};for(const o in t)e[o]!==void 0&&n[o]!==void 0&&(i[o]=np(e[o])(e[o],n[o]));return o=>{for(const l in i)t[l]=i[l](o);return t}}function oP(e,n){const t=[],i={color:0,var:0,number:0};for(let o=0;o<n.values.length;o++){const l=n.types[o],a=e.indexes[l][i[l]],d=e.values[a]??0;t[o]=d,i[l]++}return t}const aP=(e,n)=>{const t=vi.createTransformer(n),i=pa(e),o=pa(n);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?Uf.has(e)&&!o.values.length||Uf.has(n)&&!i.values.length?rP(e,n):Ca(Iw(oP(i,o),o.values),t):vu(e,n)};function Mw(e,n,t){return typeof e=="number"&&typeof n=="number"&&typeof t=="number"?en(e,n,t):np(e)(e,n)}const lP=e=>{const n=({timestamp:t})=>e(t);return{start:(t=!0)=>Xe.update(n,t),stop:()=>ki(n),now:()=>Sn.isProcessing?Sn.timestamp:it.now()}},Dw=(e,n,t=10)=>{let i="";const o=Math.max(Math.round(n/t),2);for(let l=0;l<o;l++)i+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},bu=2e4;function tp(e){let n=0;const t=50;let i=e.next(n);for(;!i.done&&n<bu;)n+=t,i=e.next(n);return n>=bu?1/0:n}function uP(e,n=100,t){const i=t({...e,keyframes:[0,n]}),o=Math.min(tp(i),bu);return{type:"keyframes",ease:l=>i.next(o*l).value/n,duration:hr(o)}}const cP=5;function Lw(e,n,t){const i=Math.max(n-cP,0);return mw(t-e(i),n-i)}const rn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},hk=.001;function dP({duration:e=rn.duration,bounce:n=rn.bounce,velocity:t=rn.velocity,mass:i=rn.mass}){let o,l,a=1-n;a=Ir(rn.minDamping,rn.maxDamping,a),e=Ir(rn.minDuration,rn.maxDuration,hr(e)),a<1?(o=h=>{const y=h*a,u=y*e,p=y-t,g=$f(h,a),b=Math.exp(-u);return hk-p/g*b},l=h=>{const u=h*a*e,p=u*t+t,g=Math.pow(a,2)*Math.pow(h,2)*e,b=Math.exp(-u),z=$f(Math.pow(h,2),a);return(-o(h)+hk>0?-1:1)*((p-g)*b)/z}):(o=h=>{const y=Math.exp(-h*e),u=(h-t)*e+1;return-.001+y*u},l=h=>{const y=Math.exp(-h*e),u=(t-h)*(e*e);return y*u});const d=5/e,f=hP(o,l,d);if(e=fr(e),isNaN(f))return{stiffness:rn.stiffness,damping:rn.damping,duration:e};{const h=Math.pow(f,2)*i;return{stiffness:h,damping:a*2*Math.sqrt(i*h),duration:e}}}const fP=12;function hP(e,n,t){let i=t;for(let o=1;o<fP;o++)i=i-e(i)/n(i);return i}function $f(e,n){return e*Math.sqrt(1-n*n)}const pP=["duration","bounce"],mP=["stiffness","damping","mass"];function pk(e,n){return n.some(t=>e[t]!==void 0)}function gP(e){let n={velocity:rn.velocity,stiffness:rn.stiffness,damping:rn.damping,mass:rn.mass,isResolvedFromDuration:!1,...e};if(!pk(e,mP)&&pk(e,pP))if(e.visualDuration){const t=e.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,l=2*Ir(.05,1,1-(e.bounce||0))*Math.sqrt(o);n={...n,mass:rn.mass,stiffness:o,damping:l}}else{const t=dP(e);n={...n,...t,mass:rn.mass},n.isResolvedFromDuration=!0}return n}function zu(e=rn.visualDuration,n=rn.bounce){const t=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:i,restDelta:o}=t;const l=t.keyframes[0],a=t.keyframes[t.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:h,mass:y,duration:u,velocity:p,isResolvedFromDuration:g}=gP({...t,velocity:-hr(t.velocity||0)}),b=p||0,z=h/(2*Math.sqrt(f*y)),x=a-l,w=hr(Math.sqrt(f/y)),_=Math.abs(x)<5;i||(i=_?rn.restSpeed.granular:rn.restSpeed.default),o||(o=_?rn.restDelta.granular:rn.restDelta.default);let C;if(z<1){const D=$f(w,z);C=P=>{const $=Math.exp(-z*w*P);return a-$*((b+z*w*x)/D*Math.sin(D*P)+x*Math.cos(D*P))}}else if(z===1)C=D=>a-Math.exp(-w*D)*(x+(b+w*x)*D);else{const D=w*Math.sqrt(z*z-1);C=P=>{const $=Math.exp(-z*w*P),Y=Math.min(D*P,300);return a-$*((b+z*w*x)*Math.sinh(Y)+D*x*Math.cosh(Y))/D}}const R={calculatedDuration:g&&u||null,next:D=>{const P=C(D);if(g)d.done=D>=u;else{let $=D===0?b:0;z<1&&($=D===0?fr(b):Lw(C,D,P));const Y=Math.abs($)<=i,K=Math.abs(a-P)<=o;d.done=Y&&K}return d.value=d.done?a:P,d},toString:()=>{const D=Math.min(tp(R),bu),P=Dw($=>R.next(D*$).value,D,30);return D+"ms "+P},toTransition:()=>{}};return R}zu.applyToOptions=e=>{const n=uP(e,100,zu);return e.ease=n.ease,e.duration=fr(n.duration),e.type="keyframes",e};function Hf({keyframes:e,velocity:n=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:a,min:d,max:f,restDelta:h=.5,restSpeed:y}){const u=e[0],p={done:!1,value:u},g=Y=>d!==void 0&&Y<d||f!==void 0&&Y>f,b=Y=>d===void 0?f:f===void 0||Math.abs(d-Y)<Math.abs(f-Y)?d:f;let z=t*n;const x=u+z,w=a===void 0?x:a(x);w!==x&&(z=w-u);const _=Y=>-z*Math.exp(-Y/i),C=Y=>w+_(Y),R=Y=>{const K=_(Y),L=C(Y);p.done=Math.abs(K)<=h,p.value=p.done?w:L};let D,P;const $=Y=>{g(p.value)&&(D=Y,P=zu({keyframes:[p.value,b(p.value)],velocity:Lw(C,Y,p.value),damping:o,stiffness:l,restDelta:h,restSpeed:y}))};return $(0),{calculatedDuration:null,next:Y=>{let K=!1;return!P&&D===void 0&&(K=!0,R(Y),$(Y)),D!==void 0&&Y>=D?P.next(Y-D):(!K&&R(Y),p)}}}function yP(e,n,t){const i=[],o=t||Mr.mix||Mw,l=e.length-1;for(let a=0;a<l;a++){let d=o(e[a],e[a+1]);if(n){const f=Array.isArray(n)?n[a]||jt:n;d=Ca(f,d)}i.push(d)}return i}function kP(e,n,{clamp:t=!0,ease:i,mixer:o}={}){const l=e.length;if(qh(l===n.length),l===1)return()=>n[0];if(l===2&&n[0]===n[1])return()=>n[1];const a=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),n=[...n].reverse());const d=yP(n,i,o),f=d.length,h=y=>{if(a&&y<e[0])return n[0];let u=0;if(f>1)for(;u<e.length-2&&!(y<e[u+1]);u++);const p=fa(e[u],e[u+1],y);return d[u](p)};return t?y=>h(Ir(e[0],e[l-1],y)):h}function vP(e,n){const t=e[e.length-1];for(let i=1;i<=n;i++){const o=fa(0,n,i);e.push(en(t,1,o))}}function bP(e){const n=[0];return vP(n,e.length-1),n}function zP(e,n){return e.map(t=>t*n)}function wP(e,n){return e.map(()=>n||Sw).splice(0,e.length-1)}function Jo({duration:e=300,keyframes:n,times:t,ease:i="easeInOut"}){const o=IA(i)?i.map(lk):lk(i),l={done:!1,value:n[0]},a=zP(t&&t.length===n.length?t:bP(n),e),d=kP(a,n,{ease:Array.isArray(o)?o:wP(n,o)});return{calculatedDuration:e,next:f=>(l.value=d(f),l.done=f>=e,l)}}const xP=e=>e!==null;function rp(e,{repeat:n,repeatType:t="loop"},i,o=1){const l=e.filter(xP),d=o<0||n&&t!=="loop"&&n%2===1?0:l.length-1;return!d||i===void 0?l[d]:i}const SP={decay:Hf,inertia:Hf,tween:Jo,keyframes:Jo,spring:zu};function Ow(e){typeof e.type=="string"&&(e.type=SP[e.type])}class ip{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,t){return this.finished.then(n,t)}}const _P=e=>e/100;class sp extends ip{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,o;const{motionValue:t}=this.options;t&&t.updatedAt!==it.now()&&this.tick(it.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Ow(n);const{type:t=Jo,repeat:i=0,repeatDelay:o=0,repeatType:l,velocity:a=0}=n;let{keyframes:d}=n;const f=t||Jo;f!==Jo&&typeof d[0]!="number"&&(this.mixKeyframes=Ca(_P,Mw(d[0],d[1])),d=[0,100]);const h=f({...n,keyframes:d});l==="mirror"&&(this.mirroredGenerator=f({...n,keyframes:[...d].reverse(),velocity:-a})),h.calculatedDuration===null&&(h.calculatedDuration=tp(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=h}updateTime(n){const t=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(n,t=!1){const{generator:i,totalDuration:o,mixKeyframes:l,mirroredGenerator:a,resolvedDuration:d,calculatedDuration:f}=this;if(this.startTime===null)return i.next(0);const{delay:h=0,keyframes:y,repeat:u,repeatType:p,repeatDelay:g,type:b,onUpdate:z,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-o/this.speed,this.startTime)),t?this.currentTime=n:this.updateTime(n);const w=this.currentTime-h*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?w<0:w>o;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,R=i;if(u){const Y=Math.min(this.currentTime,o)/d;let K=Math.floor(Y),L=Y%1;!L&&Y>=1&&(L=1),L===1&&K--,K=Math.min(K,u+1),!!(K%2)&&(p==="reverse"?(L=1-L,g&&(L-=g/d)):p==="mirror"&&(R=a)),C=Ir(0,1,L)*d}const D=_?{done:!1,value:y[0]}:R.next(C);l&&(D.value=l(D.value));let{done:P}=D;!_&&f!==null&&(P=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return $&&b!==Hf&&(D.value=rp(y,this.options,x,this.speed)),z&&z(D.value),$&&this.finish(),D}then(n,t){return this.finished.then(n,t)}get duration(){return hr(this.calculatedDuration)}get time(){return hr(this.currentTime)}set time(n){var t;n=fr(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed),(t=this.driver)==null||t.start(!1)}get speed(){return this.playbackSpeed}set speed(n){this.updateTime(it.now());const t=this.playbackSpeed!==n;this.playbackSpeed=n,t&&(this.time=hr(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:n=lP,startTime:t}=this.options;this.driver||(this.driver=n(a=>this.tick(a))),(l=(o=this.options).onPlay)==null||l.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(it.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var n,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(n=this.options).onComplete)==null||t.call(n)}cancel(){var n,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(n=this.options).onCancel)==null||t.call(n)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),n.observe(this)}}function CP(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const Fi=e=>e*180/Math.PI,Wf=e=>{const n=Fi(Math.atan2(e[1],e[0]));return qf(n)},TP={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Wf,rotateZ:Wf,skewX:e=>Fi(Math.atan(e[1])),skewY:e=>Fi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},qf=e=>(e=e%360,e<0&&(e+=360),e),mk=Wf,gk=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),yk=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),jP={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:gk,scaleY:yk,scale:e=>(gk(e)+yk(e))/2,rotateX:e=>qf(Fi(Math.atan2(e[6],e[5]))),rotateY:e=>qf(Fi(Math.atan2(-e[2],e[0]))),rotateZ:mk,rotate:mk,skewX:e=>Fi(Math.atan(e[4])),skewY:e=>Fi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Kf(e){return e.includes("scale")?1:0}function Gf(e,n){if(!e||e==="none")return Kf(n);const t=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(t)i=jP,o=t;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=TP,o=d}if(!o)return Kf(n);const l=i[n],a=o[1].split(",").map(AP);return typeof l=="function"?l(a):a[l]}const EP=(e,n)=>{const{transform:t="none"}=getComputedStyle(e);return Gf(t,n)};function AP(e){return parseFloat(e.trim())}const to=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ro=new Set(to),kk=e=>e===no||e===xe,PP=new Set(["x","y","z"]),RP=to.filter(e=>!PP.has(e));function IP(e){const n=[];return RP.forEach(t=>{const i=e.getValue(t);i!==void 0&&(n.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),n}const Wi={width:({x:e},{paddingLeft:n="0",paddingRight:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),height:({y:e},{paddingTop:n="0",paddingBottom:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Gf(n,"x"),y:(e,{transform:n})=>Gf(n,"y")};Wi.translateX=Wi.x;Wi.translateY=Wi.y;const qi=new Set;let Qf=!1,Yf=!1,Xf=!1;function Nw(){if(Yf){const e=Array.from(qi).filter(i=>i.needsMeasurement),n=new Set(e.map(i=>i.element)),t=new Map;n.forEach(i=>{const o=IP(i);o.length&&(t.set(i,o),i.render())}),e.forEach(i=>i.measureInitialState()),n.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([l,a])=>{var d;(d=i.getValue(l))==null||d.set(a)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Yf=!1,Qf=!1,qi.forEach(e=>e.complete(Xf)),qi.clear()}function Fw(){qi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Yf=!0)})}function MP(){Xf=!0,Fw(),Nw(),Xf=!1}class op{constructor(n,t,i,o,l,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...n],this.onComplete=t,this.name=i,this.motionValue=o,this.element=l,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(qi.add(this),Qf||(Qf=!0,Xe.read(Fw),Xe.resolveKeyframes(Nw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:t,element:i,motionValue:o}=this;if(n[0]===null){const l=o==null?void 0:o.get(),a=n[n.length-1];if(l!==void 0)n[0]=l;else if(i&&t){const d=i.readValue(t,a);d!=null&&(n[0]=d)}n[0]===void 0&&(n[0]=a),o&&l===void 0&&o.set(n[0])}CP(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),qi.delete(this)}cancel(){this.state==="scheduled"&&(qi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const DP=e=>e.startsWith("--");function LP(e,n,t){DP(n)?e.style.setProperty(n,t):e.style[n]=t}const OP=Kh(()=>window.ScrollTimeline!==void 0),NP={};function FP(e,n){const t=Kh(e);return()=>NP[n]??t()}const Vw=FP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Yo=([e,n,t,i])=>`cubic-bezier(${e}, ${n}, ${t}, ${i})`,vk={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yo([0,.65,.55,1]),circOut:Yo([.55,0,1,.45]),backIn:Yo([.31,.01,.66,-.59]),backOut:Yo([.33,1.53,.69,.99])};function Bw(e,n){if(e)return typeof e=="function"?Vw()?Dw(e,n):"ease-out":_w(e)?Yo(e):Array.isArray(e)?e.map(t=>Bw(t,n)||vk.easeOut):vk[e]}function VP(e,n,t,{delay:i=0,duration:o=300,repeat:l=0,repeatType:a="loop",ease:d="easeOut",times:f}={},h=void 0){const y={[n]:t};f&&(y.offset=f);const u=Bw(d,o);Array.isArray(u)&&(y.easing=u);const p={delay:i,duration:o,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:l+1,direction:a==="reverse"?"alternate":"normal"};return h&&(p.pseudoElement=h),e.animate(y,p)}function Uw(e){return typeof e=="function"&&"applyToOptions"in e}function BP({type:e,...n}){return Uw(e)&&Vw()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class UP extends ip{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,!n)return;const{element:t,name:i,keyframes:o,pseudoElement:l,allowFlatten:a=!1,finalKeyframe:d,onComplete:f}=n;this.isPseudoElement=!!l,this.allowFlatten=a,this.options=n,qh(typeof n.type!="string");const h=BP(n);this.animation=VP(t,i,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const y=rp(o,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(y):LP(t,i,y),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,t;(t=(n=this.animation).finish)==null||t.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,t;this.isPseudoElement||(t=(n=this.animation).commitStyles)==null||t.call(n)}get duration(){var t,i;const n=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return hr(Number(n))}get time(){return hr(Number(this.animation.currentTime)||0)}set time(n){this.finishedTime=null,this.animation.currentTime=fr(n)}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(n){this.animation.startTime=n}attachTimeline({timeline:n,observe:t}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&OP()?(this.animation.timeline=n,jt):t(this)}}const $w={anticipate:zw,backInOut:bw,circInOut:xw};function $P(e){return e in $w}function HP(e){typeof e.ease=="string"&&$P(e.ease)&&(e.ease=$w[e.ease])}const bk=10;class WP extends UP{constructor(n){HP(n),Ow(n),super(n),n.startTime&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:t,onUpdate:i,onComplete:o,element:l,...a}=this.options;if(!t)return;if(n!==void 0){t.set(n);return}const d=new sp({...a,autoplay:!1}),f=fr(this.finishedTime??this.time);t.setWithVelocity(d.sample(f-bk).value,d.sample(f).value,bk),d.stop()}}const zk=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(vi.test(e)||e==="0")&&!e.startsWith("url("));function qP(e){const n=e[0];if(e.length===1)return!0;for(let t=0;t<e.length;t++)if(e[t]!==n)return!0}function KP(e,n,t,i){const o=e[0];if(o===null)return!1;if(n==="display"||n==="visibility")return!0;const l=e[e.length-1],a=zk(o,n),d=zk(l,n);return!a||!d?!1:qP(e)||(t==="spring"||Uw(t))&&i}function Zf(e){e.duration=0,e.type}const GP=new Set(["opacity","clipPath","filter","transform"]),QP=Kh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function YP(e){var y;const{motionValue:n,name:t,repeatDelay:i,repeatType:o,damping:l,type:a}=e;if(!(((y=n==null?void 0:n.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=n.owner.getProps();return QP()&&t&&GP.has(t)&&(t!=="transform"||!h)&&!f&&!i&&o!=="mirror"&&l!==0&&a!=="inertia"}const XP=40;class ZP extends ip{constructor({autoplay:n=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:a="loop",keyframes:d,name:f,motionValue:h,element:y,...u}){var b;super(),this.stop=()=>{var z,x;this._animation&&(this._animation.stop(),(z=this.stopTimeline)==null||z.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=it.now();const p={autoplay:n,delay:t,type:i,repeat:o,repeatDelay:l,repeatType:a,name:f,motionValue:h,element:y,...u},g=(y==null?void 0:y.KeyframeResolver)||op;this.keyframeResolver=new g(d,(z,x,w)=>this.onKeyframesResolved(z,x,p,!w),f,h,y),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(n,t,i,o){this.keyframeResolver=void 0;const{name:l,type:a,velocity:d,delay:f,isHandoff:h,onUpdate:y}=i;this.resolvedAt=it.now(),KP(n,l,a,d)||((Mr.instantAnimations||!f)&&(y==null||y(rp(n,i,t))),n[0]=n[n.length-1],Zf(i),i.repeat=0);const p={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>XP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:n},g=!h&&YP(p)?new WP({...p,element:p.motionValue.owner.current}):new sp(p);g.finished.then(()=>this.notifyFinished()).catch(jt),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(n,t){return this.finished.finally(n).then(()=>{})}get animation(){var n;return this._animation||((n=this.keyframeResolver)==null||n.resume(),MP()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var n;this._animation&&this.animation.cancel(),(n=this.keyframeResolver)==null||n.cancel()}}const JP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function eR(e){const n=JP.exec(e);if(!n)return[,];const[,t,i,o]=n;return[`--${t??i}`,o]}function Hw(e,n,t=1){const[i,o]=eR(e);if(!i)return;const l=window.getComputedStyle(n).getPropertyValue(i);if(l){const a=l.trim();return fw(a)?parseFloat(a):a}return Zh(o)?Hw(o,n,t+1):o}function ap(e,n){return(e==null?void 0:e[n])??(e==null?void 0:e.default)??e}const Ww=new Set(["width","height","top","left","right","bottom",...to]),nR={test:e=>e==="auto",parse:e=>e},qw=e=>n=>n.test(e),Kw=[no,xe,pr,ai,qA,WA,nR],wk=e=>Kw.find(qw(e));function tR(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||pw(e):!0}const rR=new Set(["brightness","contrast","saturate","opacity"]);function iR(e){const[n,t]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[i]=t.match(Jh)||[];if(!i)return e;const o=t.replace(i,"");let l=rR.has(n)?1:0;return i!==t&&(l*=100),n+"("+l+o+")"}const sR=/\b([a-z-]*)\(.*?\)/gu,Jf={...vi,getAnimatableNone:e=>{const n=e.match(sR);return n?n.map(iR).join(" "):e}},xk={...no,transform:Math.round},oR={rotate:ai,rotateX:ai,rotateY:ai,rotateZ:ai,scale:Ql,scaleX:Ql,scaleY:Ql,scaleZ:Ql,skew:ai,skewX:ai,skewY:ai,distance:xe,translateX:xe,translateY:xe,translateZ:xe,x:xe,y:xe,z:xe,perspective:xe,transformPerspective:xe,opacity:ha,originX:uk,originY:uk,originZ:xe},lp={borderWidth:xe,borderTopWidth:xe,borderRightWidth:xe,borderBottomWidth:xe,borderLeftWidth:xe,borderRadius:xe,radius:xe,borderTopLeftRadius:xe,borderTopRightRadius:xe,borderBottomRightRadius:xe,borderBottomLeftRadius:xe,width:xe,maxWidth:xe,height:xe,maxHeight:xe,top:xe,right:xe,bottom:xe,left:xe,padding:xe,paddingTop:xe,paddingRight:xe,paddingBottom:xe,paddingLeft:xe,margin:xe,marginTop:xe,marginRight:xe,marginBottom:xe,marginLeft:xe,backgroundPositionX:xe,backgroundPositionY:xe,...oR,zIndex:xk,fillOpacity:ha,strokeOpacity:ha,numOctaves:xk},aR={...lp,color:dn,backgroundColor:dn,outlineColor:dn,fill:dn,stroke:dn,borderColor:dn,borderTopColor:dn,borderRightColor:dn,borderBottomColor:dn,borderLeftColor:dn,filter:Jf,WebkitFilter:Jf},Gw=e=>aR[e];function Qw(e,n){let t=Gw(e);return t!==Jf&&(t=vi),t.getAnimatableNone?t.getAnimatableNone(n):void 0}const lR=new Set(["auto","none","0"]);function uR(e,n,t){let i=0,o;for(;i<e.length&&!o;){const l=e[i];typeof l=="string"&&!lR.has(l)&&pa(l).values.length&&(o=e[i]),i++}if(o&&t)for(const l of n)e[l]=Qw(t,o)}class cR extends op{constructor(n,t,i,o,l){super(n,t,i,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<n.length;f++){let h=n[f];if(typeof h=="string"&&(h=h.trim(),Zh(h))){const y=Hw(h,t.current);y!==void 0&&(n[f]=y),f===n.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Ww.has(i)||n.length!==2)return;const[o,l]=n,a=wk(o),d=wk(l);if(a!==d)if(kk(a)&&kk(d))for(let f=0;f<n.length;f++){const h=n[f];typeof h=="string"&&(n[f]=parseFloat(h))}else Wi[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:t}=this,i=[];for(let o=0;o<n.length;o++)(n[o]===null||tR(n[o]))&&i.push(o);i.length&&uR(n,i,t)}measureInitialState(){const{element:n,unresolvedKeyframes:t,name:i}=this;if(!n||!n.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wi[i](n.measureViewportBox(),window.getComputedStyle(n.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&n.getValue(i,o).jump(o,!1)}measureEndState(){var d;const{element:n,name:t,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=i.length-1,a=i[l];i[l]=Wi[t](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([f,h])=>{n.getValue(f).set(h)}),this.resolveNoneKeyframes()}}function dR(e,n,t){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let i=document;const o=(t==null?void 0:t[e])??i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const Yw=(e,n)=>n&&typeof e=="number"?n.transform(e):e;function fR(e){return hw(e)&&"offsetHeight"in e}const Sk=30,hR=e=>!isNaN(parseFloat(e));class pR{constructor(n,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var l;const o=it.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(n),this.owner=t.owner}setCurrent(n){this.current=n,this.updatedAt=it.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=hR(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,t){this.events[n]||(this.events[n]=new Gh);const i=this.events[n].add(t);return n==="change"?()=>{i(),Xe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,t){this.passiveEffect=n,this.stopPassiveEffect=t}set(n){this.passiveEffect?this.passiveEffect(n,this.updateAndNotify):this.updateAndNotify(n)}setWithVelocity(n,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-i}jump(n,t=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var n;(n=this.events.change)==null||n.notify(this.current)}addDependent(n){this.dependents||(this.dependents=new Set),this.dependents.add(n)}removeDependent(n){this.dependents&&this.dependents.delete(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=it.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Sk)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Sk);return mw(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(n){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=n(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n,t;(n=this.dependents)==null||n.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qs(e,n){return new pR(e,n)}const{schedule:up}=Cw(queueMicrotask,!1),Ut={x:!1,y:!1};function Xw(){return Ut.x||Ut.y}function mR(e){return e==="x"||e==="y"?Ut[e]?null:(Ut[e]=!0,()=>{Ut[e]=!1}):Ut.x||Ut.y?null:(Ut.x=Ut.y=!0,()=>{Ut.x=Ut.y=!1})}function Zw(e,n){const t=dR(e),i=new AbortController,o={passive:!0,...n,signal:i.signal};return[t,o,()=>i.abort()]}function _k(e){return!(e.pointerType==="touch"||Xw())}function gR(e,n,t={}){const[i,o,l]=Zw(e,t),a=d=>{if(!_k(d))return;const{target:f}=d,h=n(f,d);if(typeof h!="function"||!f)return;const y=u=>{_k(u)&&(h(u),f.removeEventListener("pointerleave",y))};f.addEventListener("pointerleave",y,o)};return i.forEach(d=>{d.addEventListener("pointerenter",a,o)}),l}const Jw=(e,n)=>n?e===n?!0:Jw(e,n.parentElement):!1,cp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,yR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kR(e){return yR.has(e.tagName)||e.tabIndex!==-1}const lu=new WeakSet;function Ck(e){return n=>{n.key==="Enter"&&e(n)}}function Qd(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const vR=(e,n)=>{const t=e.currentTarget;if(!t)return;const i=Ck(()=>{if(lu.has(t))return;Qd(t,"down");const o=Ck(()=>{Qd(t,"up")}),l=()=>Qd(t,"cancel");t.addEventListener("keyup",o,n),t.addEventListener("blur",l,n)});t.addEventListener("keydown",i,n),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),n)};function Tk(e){return cp(e)&&!Xw()}function bR(e,n,t={}){const[i,o,l]=Zw(e,t),a=d=>{const f=d.currentTarget;if(!Tk(d))return;lu.add(f);const h=n(f,d),y=(g,b)=>{window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",p),lu.has(f)&&lu.delete(f),Tk(g)&&typeof h=="function"&&h(g,{success:b})},u=g=>{y(g,f===window||f===document||t.useGlobalTarget||Jw(f,g.target))},p=g=>{y(g,!1)};window.addEventListener("pointerup",u,o),window.addEventListener("pointercancel",p,o)};return i.forEach(d=>{(t.useGlobalTarget?window:d).addEventListener("pointerdown",a,o),fR(d)&&(d.addEventListener("focus",h=>vR(h,o)),!kR(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function e0(e){return hw(e)&&"ownerSVGElement"in e}function zR(e){return e0(e)&&e.tagName==="svg"}const In=e=>!!(e&&e.getVelocity),wR=[...Kw,dn,vi],xR=e=>wR.find(qw(e)),n0=T.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function SR(e=!0){const n=T.useContext($h);if(n===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=n,l=T.useId();T.useEffect(()=>{if(e)return o(l)},[e]);const a=T.useCallback(()=>e&&i&&i(l),[l,i,e]);return!t&&i?[!1,a]:[!0]}const t0=T.createContext({strict:!1}),jk={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ys={};for(const e in jk)Ys[e]={isEnabled:n=>jk[e].some(t=>!!n[t])};function _R(e){for(const n in e)Ys[n]={...Ys[n],...e[n]}}const CR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||CR.has(e)}let r0=e=>!wu(e);function TR(e){typeof e=="function"&&(r0=n=>n.startsWith("on")?!wu(n):e(n))}try{TR(require("@emotion/is-prop-valid").default)}catch{}function jR(e,n,t){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||(r0(o)||t===!0&&wu(o)||!n&&!wu(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}const Uu=T.createContext({});function $u(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ma(e){return typeof e=="string"||Array.isArray(e)}const dp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],fp=["initial",...dp];function Hu(e){return $u(e.animate)||fp.some(n=>ma(e[n]))}function i0(e){return!!(Hu(e)||e.variants)}function ER(e,n){if(Hu(e)){const{initial:t,animate:i}=e;return{initial:t===!1||ma(t)?t:void 0,animate:ma(i)?i:void 0}}return e.inherit!==!1?n:{}}function AR(e){const{initial:n,animate:t}=ER(e,T.useContext(Uu));return T.useMemo(()=>({initial:n,animate:t}),[Ek(n),Ek(t)])}function Ek(e){return Array.isArray(e)?e.join(" "):e}const ga={};function PR(e){for(const n in e)ga[n]=e[n],Xh(n)&&(ga[n].isCSSVariable=!0)}function s0(e,{layout:n,layoutId:t}){return ro.has(e)||e.startsWith("origin")||(n||t!==void 0)&&(!!ga[e]||e==="opacity")}const RR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},IR=to.length;function MR(e,n,t){let i="",o=!0;for(let l=0;l<IR;l++){const a=to[l],d=e[a];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(a.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||t){const h=Yw(d,lp[a]);if(!f){o=!1;const y=RR[a]||a;i+=`${y}(${h}) `}t&&(n[a]=h)}}return i=i.trim(),t?i=t(n,o?"":i):o&&(i="none"),i}function hp(e,n,t){const{style:i,vars:o,transformOrigin:l}=e;let a=!1,d=!1;for(const f in n){const h=n[f];if(ro.has(f)){a=!0;continue}else if(Xh(f)){o[f]=h;continue}else{const y=Yw(h,lp[f]);f.startsWith("origin")?(d=!0,l[f]=y):i[f]=y}}if(n.transform||(a||t?i.transform=MR(n,e.transform,t):i.transform&&(i.transform="none")),d){const{originX:f="50%",originY:h="50%",originZ:y=0}=l;i.transformOrigin=`${f} ${h} ${y}`}}const pp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function o0(e,n,t){for(const i in n)!In(n[i])&&!s0(i,t)&&(e[i]=n[i])}function DR({transformTemplate:e},n){return T.useMemo(()=>{const t=pp();return hp(t,n,e),Object.assign({},t.vars,t.style)},[n])}function LR(e,n){const t=e.style||{},i={};return o0(i,t,e),Object.assign(i,DR(e,n)),i}function OR(e,n){const t={},i=LR(e,n);return e.drag&&e.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(t.tabIndex=0),t.style=i,t}const NR={offset:"stroke-dashoffset",array:"stroke-dasharray"},FR={offset:"strokeDashoffset",array:"strokeDasharray"};function VR(e,n,t=1,i=0,o=!0){e.pathLength=1;const l=o?NR:FR;e[l.offset]=xe.transform(-i);const a=xe.transform(n),d=xe.transform(t);e[l.array]=`${a} ${d}`}function a0(e,{attrX:n,attrY:t,attrScale:i,pathLength:o,pathSpacing:l=1,pathOffset:a=0,...d},f,h,y){if(hp(e,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:u,style:p}=e;u.transform&&(p.transform=u.transform,delete u.transform),(p.transform||u.transformOrigin)&&(p.transformOrigin=u.transformOrigin??"50% 50%",delete u.transformOrigin),p.transform&&(p.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete u.transformBox),n!==void 0&&(u.x=n),t!==void 0&&(u.y=t),i!==void 0&&(u.scale=i),o!==void 0&&VR(u,o,l,a,!1)}const l0=()=>({...pp(),attrs:{}}),u0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function BR(e,n,t,i){const o=T.useMemo(()=>{const l=l0();return a0(l,n,u0(i),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[n]);if(e.style){const l={};o0(l,e.style,e),o.style={...l,...o.style}}return o}const UR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mp(e){return typeof e!="string"||e.includes("-")?!1:!!(UR.indexOf(e)>-1||/[A-Z]/u.test(e))}function $R(e,n,t,{latestValues:i},o,l=!1){const d=(mp(e)?BR:OR)(n,i,o,e),f=jR(n,typeof e=="string",l),h=e!==T.Fragment?{...f,...d,ref:t}:{},{children:y}=n,u=T.useMemo(()=>In(y)?y.get():y,[y]);return T.createElement(e,{...h,children:u})}function Ak(e){const n=[{},{}];return e==null||e.values.forEach((t,i)=>{n[0][i]=t.get(),n[1][i]=t.getVelocity()}),n}function gp(e,n,t,i){if(typeof n=="function"){const[o,l]=Ak(i);n=n(t!==void 0?t:e.custom,o,l)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[o,l]=Ak(i);n=n(t!==void 0?t:e.custom,o,l)}return n}function uu(e){return In(e)?e.get():e}function HR({scrapeMotionValuesFromProps:e,createRenderState:n},t,i,o){return{latestValues:WR(t,i,o,e),renderState:n()}}function WR(e,n,t,i){const o={},l=i(e,{});for(const p in l)o[p]=uu(l[p]);let{initial:a,animate:d}=e;const f=Hu(e),h=i0(e);n&&h&&!f&&e.inherit!==!1&&(a===void 0&&(a=n.initial),d===void 0&&(d=n.animate));let y=t?t.initial===!1:!1;y=y||a===!1;const u=y?d:a;if(u&&typeof u!="boolean"&&!$u(u)){const p=Array.isArray(u)?u:[u];for(let g=0;g<p.length;g++){const b=gp(e,p[g]);if(b){const{transitionEnd:z,transition:x,...w}=b;for(const _ in w){let C=w[_];if(Array.isArray(C)){const R=y?C.length-1:0;C=C[R]}C!==null&&(o[_]=C)}for(const _ in z)o[_]=z[_]}}}return o}const c0=e=>(n,t)=>{const i=T.useContext(Uu),o=T.useContext($h),l=()=>HR(e,n,i,o);return t?l():_A(l)};function yp(e,n,t){var l;const{style:i}=e,o={};for(const a in i)(In(i[a])||n.style&&In(n.style[a])||s0(a,e)||((l=t==null?void 0:t.getValue(a))==null?void 0:l.liveStyle)!==void 0)&&(o[a]=i[a]);return o}const qR=c0({scrapeMotionValuesFromProps:yp,createRenderState:pp});function d0(e,n,t){const i=yp(e,n,t);for(const o in e)if(In(e[o])||In(n[o])){const l=to.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[l]=e[o]}return i}const KR=c0({scrapeMotionValuesFromProps:d0,createRenderState:l0}),GR=Symbol.for("motionComponentSymbol");function As(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function QR(e,n,t){return T.useCallback(i=>{i&&e.onMount&&e.onMount(i),n&&(i?n.mount(i):n.unmount()),t&&(typeof t=="function"?t(i):As(t)&&(t.current=i))},[n])}const kp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),YR="framerAppearId",f0="data-"+kp(YR),h0=T.createContext({});function XR(e,n,t,i,o){var z,x;const{visualElement:l}=T.useContext(Uu),a=T.useContext(t0),d=T.useContext($h),f=T.useContext(n0).reducedMotion,h=T.useRef(null);i=i||a.renderer,!h.current&&i&&(h.current=i(e,{visualState:n,parent:l,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:f}));const y=h.current,u=T.useContext(h0);y&&!y.projection&&o&&(y.type==="html"||y.type==="svg")&&ZR(h.current,t,o,u);const p=T.useRef(!1);T.useInsertionEffect(()=>{y&&p.current&&y.update(t,d)});const g=t[f0],b=T.useRef(!!g&&!((z=window.MotionHandoffIsComplete)!=null&&z.call(window,g))&&((x=window.MotionHasOptimisedAnimation)==null?void 0:x.call(window,g)));return CA(()=>{y&&(p.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),b.current&&y.animationState&&y.animationState.animateChanges())}),T.useEffect(()=>{y&&(!b.current&&y.animationState&&y.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var w;(w=window.MotionHandoffMarkAsComplete)==null||w.call(window,g)}),b.current=!1),y.enteringChildren=void 0)}),y}function ZR(e,n,t,i){const{layoutId:o,layout:l,drag:a,dragConstraints:d,layoutScroll:f,layoutRoot:h,layoutCrossfade:y}=n;e.projection=new t(e.latestValues,n["data-framer-portal-id"]?void 0:p0(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!a||d&&As(d),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,crossfade:y,layoutScroll:f,layoutRoot:h})}function p0(e){if(e)return e.options.allowProjection!==!1?e.projection:p0(e.parent)}function Yd(e,{forwardMotionProps:n=!1}={},t,i){t&&_R(t);const o=mp(e)?KR:qR;function l(d,f){let h;const y={...T.useContext(n0),...d,layoutId:JR(d)},{isStatic:u}=y,p=AR(d),g=o(d,u);if(!u&&Uh){eI();const b=nI(y);h=b.MeasureLayout,p.visualElement=XR(e,g,y,i,b.ProjectionNode)}return N.jsxs(Uu.Provider,{value:p,children:[h&&p.visualElement?N.jsx(h,{visualElement:p.visualElement,...y}):null,$R(e,d,QR(g,p.visualElement,f),g,u,n)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const a=T.forwardRef(l);return a[GR]=e,a}function JR({layoutId:e}){const n=T.useContext(dw).id;return n&&e!==void 0?n+"-"+e:e}function eI(e,n){T.useContext(t0).strict}function nI(e){const{drag:n,layout:t}=Ys;if(!n&&!t)return{};const i={...n,...t};return{MeasureLayout:n!=null&&n.isEnabled(e)||t!=null&&t.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function tI(e,n){if(typeof Proxy>"u")return Yd;const t=new Map,i=(l,a)=>Yd(l,a,e,n),o=(l,a)=>i(l,a);return new Proxy(o,{get:(l,a)=>a==="create"?i:(t.has(a)||t.set(a,Yd(a,void 0,e,n)),t.get(a))})}function m0({top:e,left:n,right:t,bottom:i}){return{x:{min:n,max:t},y:{min:e,max:i}}}function rI({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function iI(e,n){if(!n)return e;const t=n({x:e.left,y:e.top}),i=n({x:e.right,y:e.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Xd(e){return e===void 0||e===1}function eh({scale:e,scaleX:n,scaleY:t}){return!Xd(e)||!Xd(n)||!Xd(t)}function Oi(e){return eh(e)||g0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function g0(e){return Pk(e.x)||Pk(e.y)}function Pk(e){return e&&e!=="0%"}function xu(e,n,t){const i=e-t,o=n*i;return t+o}function Rk(e,n,t,i,o){return o!==void 0&&(e=xu(e,o,i)),xu(e,t,i)+n}function nh(e,n=0,t=1,i,o){e.min=Rk(e.min,n,t,i,o),e.max=Rk(e.max,n,t,i,o)}function y0(e,{x:n,y:t}){nh(e.x,n.translate,n.scale,n.originPoint),nh(e.y,t.translate,t.scale,t.originPoint)}const Ik=.999999999999,Mk=1.0000000000001;function sI(e,n,t,i=!1){const o=t.length;if(!o)return;n.x=n.y=1;let l,a;for(let d=0;d<o;d++){l=t[d],a=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(i&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Rs(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),a&&(n.x*=a.x.scale,n.y*=a.y.scale,y0(e,a)),i&&Oi(l.latestValues)&&Rs(e,l.latestValues))}n.x<Mk&&n.x>Ik&&(n.x=1),n.y<Mk&&n.y>Ik&&(n.y=1)}function Ps(e,n){e.min=e.min+n,e.max=e.max+n}function Dk(e,n,t,i,o=.5){const l=en(e.min,e.max,o);nh(e,n,t,l,i)}function Rs(e,n){Dk(e.x,n.x,n.scaleX,n.scale,n.originX),Dk(e.y,n.y,n.scaleY,n.scale,n.originY)}function k0(e,n){return m0(iI(e.getBoundingClientRect(),n))}function oI(e,n,t){const i=k0(e,t),{scroll:o}=n;return o&&(Ps(i.x,o.offset.x),Ps(i.y,o.offset.y)),i}const Lk=()=>({translate:0,scale:1,origin:0,originPoint:0}),Is=()=>({x:Lk(),y:Lk()}),Ok=()=>({min:0,max:0}),an=()=>({x:Ok(),y:Ok()}),th={current:null},v0={current:!1};function aI(){if(v0.current=!0,!!Uh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>th.current=e.matches;e.addEventListener("change",n),n()}else th.current=!1}const lI=new WeakMap;function uI(e,n,t){for(const i in n){const o=n[i],l=t[i];if(In(o))e.addValue(i,o);else if(In(l))e.addValue(i,Qs(o,{owner:e}));else if(l!==o)if(e.hasValue(i)){const a=e.getValue(i);a.liveStyle===!0?a.jump(o):a.hasAnimated||a.set(o)}else{const a=e.getStaticValue(i);e.addValue(i,Qs(a!==void 0?a:o,{owner:e}))}}for(const i in t)n[i]===void 0&&e.removeValue(i);return n}const Nk=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class cI{scrapeMotionValuesFromProps(n,t,i){return{}}constructor({parent:n,props:t,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:l,visualState:a},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=op,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=it.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Xe.render(this.render,!1,!0))};const{latestValues:f,renderState:h}=a;this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=h,this.parent=n,this.props=t,this.presenceContext=i,this.depth=n?n.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=Hu(t),this.isVariantNode=i0(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:y,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(const p in u){const g=u[p];f[p]!==void 0&&In(g)&&g.set(f[p])}}mount(n){var t;this.current=n,lI.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),v0.current||aI(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:th.current,(t=this.parent)==null||t.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var n;this.projection&&this.projection.unmount(),ki(this.notifyUpdate),ki(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(n=this.parent)==null||n.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(n){this.children.add(n),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(n)}removeChild(n){this.children.delete(n),this.enteringChildren&&this.enteringChildren.delete(n)}bindToMotionValue(n,t){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const i=ro.has(n);i&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",a=>{this.latestValues[n]=a,this.props.onUpdate&&Xe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,n,t)),this.valueSubscriptions.set(n,()=>{o(),l&&l(),t.owner&&t.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Ys){const t=Ys[n];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[n]&&o&&i(this.props)&&(this.features[n]=new o(this)),this.features[n]){const l=this.features[n];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):an()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,t){this.latestValues[n]=t}update(n,t){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Nk.length;i++){const o=Nk[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,a=n[l];a&&(this.propEventSubscriptions[o]=this.on(o,a))}this.prevMotionValues=uI(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(n),()=>t.variantChildren.delete(n)}addValue(n,t){const i=this.values.get(n);t!==i&&(i&&this.removeValue(n),this.bindToMotionValue(n,t),this.values.set(n,t),this.latestValues[n]=t.get())}removeValue(n){this.values.delete(n);const t=this.valueSubscriptions.get(n);t&&(t(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,t){if(this.props.values&&this.props.values[n])return this.props.values[n];let i=this.values.get(n);return i===void 0&&t!==void 0&&(i=Qs(t===null?void 0:t,{owner:this}),this.addValue(n,i)),i}readValue(n,t){let i=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return i!=null&&(typeof i=="string"&&(fw(i)||pw(i))?i=parseFloat(i):!xR(i)&&vi.test(t)&&(i=Qw(n,t)),this.setBaseTarget(n,In(i)?i.get():i)),In(i)?i.get():i}setBaseTarget(n,t){this.baseTarget[n]=t}getBaseTarget(n){var l;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const a=gp(this.props,t,(l=this.presenceContext)==null?void 0:l.custom);a&&(i=a[n])}if(t&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,n);return o!==void 0&&!In(o)?o:this.initialValues[n]!==void 0&&i===void 0?void 0:this.baseTarget[n]}on(n,t){return this.events[n]||(this.events[n]=new Gh),this.events[n].add(t)}notify(n,...t){this.events[n]&&this.events[n].notify(...t)}scheduleRenderMicrotask(){up.render(this.render)}}class b0 extends cI{constructor(){super(...arguments),this.KeyframeResolver=cR}sortInstanceNodePosition(n,t){return n.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(n,t){return n.style?n.style[t]:void 0}removeValueFromRenderState(n,{vars:t,style:i}){delete t[n],delete i[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;In(n)&&(this.childSubscription=n.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function z0(e,{style:n,vars:t},i,o){const l=e.style;let a;for(a in n)l[a]=n[a];o==null||o.applyProjectionStyles(l,i);for(a in t)l.setProperty(a,t[a])}function dI(e){return window.getComputedStyle(e)}class fI extends b0{constructor(){super(...arguments),this.type="html",this.renderInstance=z0}readValueFromInstance(n,t){var i;if(ro.has(t))return(i=this.projection)!=null&&i.isProjecting?Kf(t):EP(n,t);{const o=dI(n),l=(Xh(t)?o.getPropertyValue(t):o[t])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(n,{transformPagePoint:t}){return k0(n,t)}build(n,t,i){hp(n,t,i.transformTemplate)}scrapeMotionValuesFromProps(n,t,i){return yp(n,t,i)}}const w0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function hI(e,n,t,i){z0(e,n,void 0,i);for(const o in n.attrs)e.setAttribute(w0.has(o)?o:kp(o),n.attrs[o])}class pI extends b0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=an}getBaseTargetFromProps(n,t){return n[t]}readValueFromInstance(n,t){if(ro.has(t)){const i=Gw(t);return i&&i.default||0}return t=w0.has(t)?t:kp(t),n.getAttribute(t)}scrapeMotionValuesFromProps(n,t,i){return d0(n,t,i)}build(n,t,i){a0(n,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(n,t,i,o){hI(n,t,i,o)}mount(n){this.isSVGTag=u0(n.tagName),super.mount(n)}}const mI=(e,n)=>mp(e)?new pI(n):new fI(n,{allowProjection:e!==T.Fragment});function Ls(e,n,t){const i=e.getProps();return gp(i,n,t!==void 0?t:i.custom,e)}const rh=e=>Array.isArray(e);function gI(e,n,t){e.hasValue(n)?e.getValue(n).set(t):e.addValue(n,Qs(t))}function yI(e){return rh(e)?e[e.length-1]||0:e}function kI(e,n){const t=Ls(e,n);let{transitionEnd:i={},transition:o={},...l}=t||{};l={...l,...i};for(const a in l){const d=yI(l[a]);gI(e,a,d)}}function vI(e){return!!(In(e)&&e.add)}function ih(e,n){const t=e.getValue("willChange");if(vI(t))return t.add(n);if(!t&&Mr.WillChange){const i=new Mr.WillChange("auto");e.addValue("willChange",i),i.add(n)}}function x0(e){return e.props[f0]}const bI=e=>e!==null;function zI(e,{repeat:n,repeatType:t="loop"},i){const o=e.filter(bI),l=n&&t!=="loop"&&n%2===1?0:o.length-1;return o[l]}const wI={type:"spring",stiffness:500,damping:25,restSpeed:10},xI=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),SI={type:"keyframes",duration:.8},_I={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},CI=(e,{keyframes:n})=>n.length>2?SI:ro.has(e)?e.startsWith("scale")?xI(n[1]):wI:_I;function TI({when:e,delay:n,delayChildren:t,staggerChildren:i,staggerDirection:o,repeat:l,repeatType:a,repeatDelay:d,from:f,elapsed:h,...y}){return!!Object.keys(y).length}const vp=(e,n,t,i={},o,l)=>a=>{const d=ap(i,e)||{},f=d.delay||i.delay||0;let{elapsed:h=0}=i;h=h-fr(f);const y={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:n.getVelocity(),...d,delay:-h,onUpdate:p=>{n.set(p),d.onUpdate&&d.onUpdate(p)},onComplete:()=>{a(),d.onComplete&&d.onComplete()},name:e,motionValue:n,element:l?void 0:o};TI(d)||Object.assign(y,CI(e,y)),y.duration&&(y.duration=fr(y.duration)),y.repeatDelay&&(y.repeatDelay=fr(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let u=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Zf(y),y.delay===0&&(u=!0)),(Mr.instantAnimations||Mr.skipAnimations)&&(u=!0,Zf(y),y.delay=0),y.allowFlatten=!d.type&&!d.ease,u&&!l&&n.get()!==void 0){const p=zI(y.keyframes,d);if(p!==void 0){Xe.update(()=>{y.onUpdate(p),y.onComplete()});return}}return d.isSync?new sp(y):new ZP(y)};function jI({protectedKeys:e,needsAnimating:n},t){const i=e.hasOwnProperty(t)&&n[t]!==!0;return n[t]=!1,i}function S0(e,n,{delay:t=0,transitionOverride:i,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:a,...d}=n;i&&(l=i);const f=[],h=o&&e.animationState&&e.animationState.getState()[o];for(const y in d){const u=e.getValue(y,e.latestValues[y]??null),p=d[y];if(p===void 0||h&&jI(h,y))continue;const g={delay:t,...ap(l||{},y)},b=u.get();if(b!==void 0&&!u.isAnimating&&!Array.isArray(p)&&p===b&&!g.velocity)continue;let z=!1;if(window.MotionHandoffAnimation){const w=x0(e);if(w){const _=window.MotionHandoffAnimation(w,y,Xe);_!==null&&(g.startTime=_,z=!0)}}ih(e,y),u.start(vp(y,u,p,e.shouldReduceMotion&&Ww.has(y)?{type:!1}:g,e,z));const x=u.animation;x&&f.push(x)}return a&&Promise.all(f).then(()=>{Xe.update(()=>{a&&kI(e,a)})}),f}function _0(e,n,t,i=0,o=1){const l=Array.from(e).sort((h,y)=>h.sortNodePosition(y)).indexOf(n),a=e.size,d=(a-1)*i;return typeof t=="function"?t(l,a):o===1?l*i:d-l*i}function sh(e,n,t={}){var f;const i=Ls(e,n,t.type==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(o=t.transitionOverride);const l=i?()=>Promise.all(S0(e,i,t)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(h=0)=>{const{delayChildren:y=0,staggerChildren:u,staggerDirection:p}=o;return EI(e,n,h,y,u,p,t)}:()=>Promise.resolve(),{when:d}=o;if(d){const[h,y]=d==="beforeChildren"?[l,a]:[a,l];return h().then(()=>y())}else return Promise.all([l(),a(t.delay)])}function EI(e,n,t=0,i=0,o=0,l=1,a){const d=[];for(const f of e.variantChildren)f.notify("AnimationStart",n),d.push(sh(f,n,{...a,delay:t+(typeof i=="function"?0:i)+_0(e.variantChildren,f,i,o,l)}).then(()=>f.notify("AnimationComplete",n)));return Promise.all(d)}function AI(e,n,t={}){e.notify("AnimationStart",n);let i;if(Array.isArray(n)){const o=n.map(l=>sh(e,l,t));i=Promise.all(o)}else if(typeof n=="string")i=sh(e,n,t);else{const o=typeof n=="function"?Ls(e,n,t.custom):n;i=Promise.all(S0(e,o,t))}return i.then(()=>{e.notify("AnimationComplete",n)})}function C0(e,n){if(!Array.isArray(n))return!1;const t=n.length;if(t!==e.length)return!1;for(let i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}const PI=fp.length;function T0(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent?T0(e.parent)||{}:{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}const n={};for(let t=0;t<PI;t++){const i=fp[t],o=e.props[i];(ma(o)||o===!1)&&(n[i]=o)}return n}const RI=[...dp].reverse(),II=dp.length;function MI(e){return n=>Promise.all(n.map(({animation:t,options:i})=>AI(e,t,i)))}function DI(e){let n=MI(e),t=Fk(),i=!0;const o=f=>(h,y)=>{var p;const u=Ls(e,y,f==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);if(u){const{transition:g,transitionEnd:b,...z}=u;h={...h,...z,...b}}return h};function l(f){n=f(e)}function a(f){const{props:h}=e,y=T0(e.parent)||{},u=[],p=new Set;let g={},b=1/0;for(let x=0;x<II;x++){const w=RI[x],_=t[w],C=h[w]!==void 0?h[w]:y[w],R=ma(C),D=w===f?_.isActive:null;D===!1&&(b=x);let P=C===y[w]&&C!==h[w]&&R;if(P&&i&&e.manuallyAnimateOnMount&&(P=!1),_.protectedKeys={...g},!_.isActive&&D===null||!C&&!_.prevProp||$u(C)||typeof C=="boolean")continue;const $=LI(_.prevProp,C);let Y=$||w===f&&_.isActive&&!P&&R||x>b&&R,K=!1;const L=Array.isArray(C)?C:[C];let J=L.reduce(o(w),{});D===!1&&(J={});const{prevResolvedValues:G={}}=_,ee={...G,...J},B=X=>{Y=!0,p.has(X)&&(K=!0,p.delete(X)),_.needsAnimating[X]=!0;const F=e.getValue(X);F&&(F.liveStyle=!1)};for(const X in ee){const F=J[X],q=G[X];if(g.hasOwnProperty(X))continue;let j=!1;rh(F)&&rh(q)?j=!C0(F,q):j=F!==q,j?F!=null?B(X):p.add(X):F!==void 0&&p.has(X)?B(X):_.protectedKeys[X]=!0}_.prevProp=C,_.prevResolvedValues=J,_.isActive&&(g={...g,...J}),i&&e.blockInitialAnimation&&(Y=!1);const re=P&&$;Y&&(!re||K)&&u.push(...L.map(X=>{const F={type:w};if(typeof X=="string"&&i&&!re&&e.manuallyAnimateOnMount&&e.parent){const{parent:q}=e,j=Ls(q,X);if(q.enteringChildren&&j){const{delayChildren:I}=j.transition||{};F.delay=_0(q.enteringChildren,e,I)}}return{animation:X,options:F}}))}if(p.size){const x={};if(typeof h.initial!="boolean"){const w=Ls(e,Array.isArray(h.initial)?h.initial[0]:h.initial);w&&w.transition&&(x.transition=w.transition)}p.forEach(w=>{const _=e.getBaseTarget(w),C=e.getValue(w);C&&(C.liveStyle=!0),x[w]=_??null}),u.push({animation:x})}let z=!!u.length;return i&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(z=!1),i=!1,z?n(u):Promise.resolve()}function d(f,h){var u;if(t[f].isActive===h)return Promise.resolve();(u=e.variantChildren)==null||u.forEach(p=>{var g;return(g=p.animationState)==null?void 0:g.setActive(f,h)}),t[f].isActive=h;const y=a(f);for(const p in t)t[p].protectedKeys={};return y}return{animateChanges:a,setActive:d,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Fk(),i=!0}}}function LI(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!C0(n,e):!1}function Di(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fk(){return{animate:Di(!0),whileInView:Di(),whileHover:Di(),whileTap:Di(),whileDrag:Di(),whileFocus:Di(),exit:Di()}}class bi{constructor(n){this.isMounted=!1,this.node=n}update(){}}class OI extends bi{constructor(n){super(n),n.animationState||(n.animationState=DI(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();$u(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:t}=this.node.prevProps||{};n!==t&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let NI=0;class FI extends bi{constructor(){super(...arguments),this.id=NI++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===i)return;const o=this.node.animationState.setActive("exit",!n);t&&!n&&o.then(()=>{t(this.id)})}mount(){const{register:n,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const VI={animation:{Feature:OI},exit:{Feature:FI}};function ya(e,n,t,i={passive:!0}){return e.addEventListener(n,t,i),()=>e.removeEventListener(n,t)}function Ea(e){return{point:{x:e.pageX,y:e.pageY}}}const BI=e=>n=>cp(n)&&e(n,Ea(n));function ea(e,n,t,i){return ya(e,n,BI(t),i)}const j0=1e-4,UI=1-j0,$I=1+j0,E0=.01,HI=0-E0,WI=0+E0;function Wn(e){return e.max-e.min}function qI(e,n,t){return Math.abs(e-n)<=t}function Vk(e,n,t,i=.5){e.origin=i,e.originPoint=en(n.min,n.max,e.origin),e.scale=Wn(t)/Wn(n),e.translate=en(t.min,t.max,e.origin)-e.originPoint,(e.scale>=UI&&e.scale<=$I||isNaN(e.scale))&&(e.scale=1),(e.translate>=HI&&e.translate<=WI||isNaN(e.translate))&&(e.translate=0)}function na(e,n,t,i){Vk(e.x,n.x,t.x,i?i.originX:void 0),Vk(e.y,n.y,t.y,i?i.originY:void 0)}function Bk(e,n,t){e.min=t.min+n.min,e.max=e.min+Wn(n)}function KI(e,n,t){Bk(e.x,n.x,t.x),Bk(e.y,n.y,t.y)}function Uk(e,n,t){e.min=n.min-t.min,e.max=e.min+Wn(n)}function ta(e,n,t){Uk(e.x,n.x,t.x),Uk(e.y,n.y,t.y)}function _t(e){return[e("x"),e("y")]}const A0=({current:e})=>e?e.ownerDocument.defaultView:null,$k=(e,n)=>Math.abs(e-n);function GI(e,n){const t=$k(e.x,n.x),i=$k(e.y,n.y);return Math.sqrt(t**2+i**2)}class P0{constructor(n,t,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:a=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Jd(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,b=GI(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!b)return;const{point:z}=p,{timestamp:x}=Sn;this.history.push({...z,timestamp:x});const{onStart:w,onMove:_}=this.handlers;g||(w&&w(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,p)},this.handlePointerMove=(p,g)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Zd(g,this.transformPagePoint),Xe.update(this.updatePoint,!0)},this.handlePointerUp=(p,g)=>{this.end();const{onEnd:b,onSessionEnd:z,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Jd(p.type==="pointercancel"?this.lastMoveEventInfo:Zd(g,this.transformPagePoint),this.history);this.startEvent&&b&&b(p,w),z&&z(p,w)},!cp(n))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=a,this.contextWindow=o||window;const d=Ea(n),f=Zd(d,this.transformPagePoint),{point:h}=f,{timestamp:y}=Sn;this.history=[{...h,timestamp:y}];const{onSessionStart:u}=t;u&&u(n,Jd(f,this.history)),this.removeListeners=Ca(ea(this.contextWindow,"pointermove",this.handlePointerMove),ea(this.contextWindow,"pointerup",this.handlePointerUp),ea(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),ki(this.updatePoint)}}function Zd(e,n){return n?{point:n(e.point)}:e}function Hk(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Jd({point:e},n){return{point:e,delta:Hk(e,R0(n)),offset:Hk(e,QI(n)),velocity:YI(n,.1)}}function QI(e){return e[0]}function R0(e){return e[e.length-1]}function YI(e,n){if(e.length<2)return{x:0,y:0};let t=e.length-1,i=null;const o=R0(e);for(;t>=0&&(i=e[t],!(o.timestamp-i.timestamp>fr(n)));)t--;if(!i)return{x:0,y:0};const l=hr(o.timestamp-i.timestamp);if(l===0)return{x:0,y:0};const a={x:(o.x-i.x)/l,y:(o.y-i.y)/l};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function XI(e,{min:n,max:t},i){return n!==void 0&&e<n?e=i?en(n,e,i.min):Math.max(e,n):t!==void 0&&e>t&&(e=i?en(t,e,i.max):Math.min(e,t)),e}function Wk(e,n,t){return{min:n!==void 0?e.min+n:void 0,max:t!==void 0?e.max+t-(e.max-e.min):void 0}}function ZI(e,{top:n,left:t,bottom:i,right:o}){return{x:Wk(e.x,t,o),y:Wk(e.y,n,i)}}function qk(e,n){let t=n.min-e.min,i=n.max-e.max;return n.max-n.min<e.max-e.min&&([t,i]=[i,t]),{min:t,max:i}}function JI(e,n){return{x:qk(e.x,n.x),y:qk(e.y,n.y)}}function eM(e,n){let t=.5;const i=Wn(e),o=Wn(n);return o>i?t=fa(n.min,n.max-i,e.min):i>o&&(t=fa(e.min,e.max-o,n.min)),Ir(0,1,t)}function nM(e,n){const t={};return n.min!==void 0&&(t.min=n.min-e.min),n.max!==void 0&&(t.max=n.max-e.min),t}const oh=.35;function tM(e=oh){return e===!1?e=0:e===!0&&(e=oh),{x:Kk(e,"left","right"),y:Kk(e,"top","bottom")}}function Kk(e,n,t){return{min:Gk(e,n),max:Gk(e,t)}}function Gk(e,n){return typeof e=="number"?e:e[n]||0}const rM=new WeakMap;class iM{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=an(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=n}start(n,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=u=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ea(u).point)},a=(u,p)=>{const{drag:g,dragPropagation:b,onDragStart:z}=this.getProps();if(g&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=mR(g),!this.openDragLock))return;this.latestPointerEvent=u,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_t(w=>{let _=this.getAxisMotionValue(w).get()||0;if(pr.test(_)){const{projection:C}=this.visualElement;if(C&&C.layout){const R=C.layout.layoutBox[w];R&&(_=Wn(R)*(parseFloat(_)/100))}}this.originPoint[w]=_}),z&&Xe.postRender(()=>z(u,p)),ih(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},d=(u,p)=>{this.latestPointerEvent=u,this.latestPanInfo=p;const{dragPropagation:g,dragDirectionLock:b,onDirectionLock:z,onDrag:x}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:w}=p;if(b&&this.currentDirection===null){this.currentDirection=sM(w),this.currentDirection!==null&&z&&z(this.currentDirection);return}this.updateAxis("x",p.point,w),this.updateAxis("y",p.point,w),this.visualElement.render(),x&&x(u,p)},f=(u,p)=>{this.latestPointerEvent=u,this.latestPanInfo=p,this.stop(u,p),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>_t(u=>{var p;return this.getAnimationState(u)==="paused"&&((p=this.getAxisMotionValue(u).animation)==null?void 0:p.play())}),{dragSnapToOrigin:y}=this.getProps();this.panSession=new P0(n,{onSessionStart:l,onStart:a,onMove:d,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:i,contextWindow:A0(this.visualElement)})}stop(n,t){const i=n||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!i)return;const{velocity:a}=o;this.startAnimation(a);const{onDragEnd:d}=this.getProps();d&&Xe.postRender(()=>d(i,o))}cancel(){this.isDragging=!1;const{projection:n,animationState:t}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(n,t,i){const{drag:o}=this.getProps();if(!i||!Yl(n,o,this.currentDirection))return;const l=this.getAxisMotionValue(n);let a=this.originPoint[n]+i[n];this.constraints&&this.constraints[n]&&(a=XI(a,this.constraints[n],this.elastic[n])),l.set(a)}resolveConstraints(){var l;const{dragConstraints:n,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;n&&As(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=ZI(i.layoutBox,n):this.constraints=!1,this.elastic=tM(t),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&_t(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=nM(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:t}=this.getProps();if(!n||!As(n))return!1;const i=n.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=oI(i,o.root,this.visualElement.getTransformPagePoint());let a=JI(o.layout.layoutBox,l);if(t){const d=t(rI(a));this.hasMutatedConstraints=!!d,d&&(a=m0(d))}return a}startAnimation(n){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:l,dragSnapToOrigin:a,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},h=_t(y=>{if(!Yl(y,t,this.currentDirection))return;let u=f&&f[y]||{};a&&(u={min:0,max:0});const p=o?200:1e6,g=o?40:1e7,b={type:"inertia",velocity:i?n[y]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...l,...u};return this.startAxisValueAnimation(y,b)});return Promise.all(h).then(d)}startAxisValueAnimation(n,t){const i=this.getAxisMotionValue(n);return ih(this.visualElement,n),i.start(vp(n,i,0,t,this.visualElement,!1))}stopAnimation(){_t(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){_t(n=>{var t;return(t=this.getAxisMotionValue(n).animation)==null?void 0:t.pause()})}getAnimationState(n){var t;return(t=this.getAxisMotionValue(n).animation)==null?void 0:t.state}getAxisMotionValue(n){const t=`_drag${n.toUpperCase()}`,i=this.visualElement.getProps(),o=i[t];return o||this.visualElement.getValue(n,(i.initial?i.initial[n]:void 0)||0)}snapToCursor(n){_t(t=>{const{drag:i}=this.getProps();if(!Yl(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:a,max:d}=o.layout.layoutBox[t];l.set(n[t]-en(a,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!As(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};_t(a=>{const d=this.getAxisMotionValue(a);if(d&&this.constraints!==!1){const f=d.get();o[a]=eM({min:f,max:f},this.constraints[a])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),_t(a=>{if(!Yl(a,n,null))return;const d=this.getAxisMotionValue(a),{min:f,max:h}=this.constraints[a];d.set(en(f,h,o[a]))})}addListeners(){if(!this.visualElement.current)return;rM.set(this.visualElement,this);const n=this.visualElement.current,t=ea(n,"pointerdown",f=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();As(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Xe.read(i);const a=ya(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(_t(y=>{const u=this.getAxisMotionValue(y);u&&(this.originPoint[y]+=f[y].translate,u.set(u.get()+f[y].translate))}),this.visualElement.render())});return()=>{a(),t(),l(),d&&d()}}getProps(){const n=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:a=oh,dragMomentum:d=!0}=n;return{...n,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:l,dragElastic:a,dragMomentum:d}}}function Yl(e,n,t){return(n===!0||n===e)&&(t===null||t===e)}function sM(e,n=10){let t=null;return Math.abs(e.y)>n?t="y":Math.abs(e.x)>n&&(t="x"),t}class oM extends bi{constructor(n){super(n),this.removeGroupControls=jt,this.removeListeners=jt,this.controls=new iM(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Qk=e=>(n,t)=>{e&&Xe.postRender(()=>e(n,t))};class aM extends bi{constructor(){super(...arguments),this.removePointerDownListener=jt}onPointerDown(n){this.session=new P0(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:A0(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:Qk(n),onStart:Qk(t),onMove:i,onEnd:(l,a)=>{delete this.session,o&&Xe.postRender(()=>o(l,a))}}}mount(){this.removePointerDownListener=ea(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const cu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Yk(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const Wo={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(xe.test(e))e=parseFloat(e);else return e;const t=Yk(e,n.target.x),i=Yk(e,n.target.y);return`${t}% ${i}%`}},lM={correct:(e,{treeScale:n,projectionDelta:t})=>{const i=e,o=vi.parse(e);if(o.length>5)return i;const l=vi.createTransformer(e),a=typeof o[0]!="number"?1:0,d=t.x.scale*n.x,f=t.y.scale*n.y;o[0+a]/=d,o[1+a]/=f;const h=en(d,f,.5);return typeof o[2+a]=="number"&&(o[2+a]/=h),typeof o[3+a]=="number"&&(o[3+a]/=h),l(o)}};let ef=!1;class uM extends T.Component{componentDidMount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:l}=n;PR(cM),l&&(t.group&&t.group.add(l),i&&i.register&&o&&i.register(l),ef&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),cu.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:t,visualElement:i,drag:o,isPresent:l}=this.props,{projection:a}=i;return a&&(a.isPresent=l,ef=!0,o||n.layoutDependency!==t||t===void 0||n.isPresent!==l?a.willUpdate():this.safeToRemove(),n.isPresent!==l&&(l?a.promote():a.relegate()||Xe.postRender(()=>{const d=a.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),up.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=n;ef=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function I0(e){const[n,t]=SR(),i=T.useContext(dw);return N.jsx(uM,{...e,layoutGroup:i,switchLayoutGroup:T.useContext(h0),isPresent:n,safeToRemove:t})}const cM={borderRadius:{...Wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Wo,borderTopRightRadius:Wo,borderBottomLeftRadius:Wo,borderBottomRightRadius:Wo,boxShadow:lM};function dM(e,n,t){const i=In(e)?e:Qs(e);return i.start(vp("",i,n,t)),i.animation}const fM=(e,n)=>e.depth-n.depth;class hM{constructor(){this.children=[],this.isDirty=!1}add(n){Hh(this.children,n),this.isDirty=!0}remove(n){Wh(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(fM),this.isDirty=!1,this.children.forEach(n)}}function pM(e,n){const t=it.now(),i=({timestamp:o})=>{const l=o-t;l>=n&&(ki(i),e(l-n))};return Xe.setup(i,!0),()=>ki(i)}const M0=["TopLeft","TopRight","BottomLeft","BottomRight"],mM=M0.length,Xk=e=>typeof e=="string"?parseFloat(e):e,Zk=e=>typeof e=="number"||xe.test(e);function gM(e,n,t,i,o,l){o?(e.opacity=en(0,t.opacity??1,yM(i)),e.opacityExit=en(n.opacity??1,0,kM(i))):l&&(e.opacity=en(n.opacity??1,t.opacity??1,i));for(let a=0;a<mM;a++){const d=`border${M0[a]}Radius`;let f=Jk(n,d),h=Jk(t,d);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||Zk(f)===Zk(h)?(e[d]=Math.max(en(Xk(f),Xk(h),i),0),(pr.test(h)||pr.test(f))&&(e[d]+="%")):e[d]=h}(n.rotate||t.rotate)&&(e.rotate=en(n.rotate||0,t.rotate||0,i))}function Jk(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const yM=D0(0,.5,ww),kM=D0(.5,.95,jt);function D0(e,n,t){return i=>i<e?0:i>n?1:t(fa(e,n,i))}function ev(e,n){e.min=n.min,e.max=n.max}function St(e,n){ev(e.x,n.x),ev(e.y,n.y)}function nv(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function tv(e,n,t,i,o){return e-=n,e=xu(e,1/t,i),o!==void 0&&(e=xu(e,1/o,i)),e}function vM(e,n=0,t=1,i=.5,o,l=e,a=e){if(pr.test(n)&&(n=parseFloat(n),n=en(a.min,a.max,n/100)-a.min),typeof n!="number")return;let d=en(l.min,l.max,i);e===l&&(d-=n),e.min=tv(e.min,n,t,d,o),e.max=tv(e.max,n,t,d,o)}function rv(e,n,[t,i,o],l,a){vM(e,n[t],n[i],n[o],n.scale,l,a)}const bM=["x","scaleX","originX"],zM=["y","scaleY","originY"];function iv(e,n,t,i){rv(e.x,n,bM,t?t.x:void 0,i?i.x:void 0),rv(e.y,n,zM,t?t.y:void 0,i?i.y:void 0)}function sv(e){return e.translate===0&&e.scale===1}function L0(e){return sv(e.x)&&sv(e.y)}function ov(e,n){return e.min===n.min&&e.max===n.max}function wM(e,n){return ov(e.x,n.x)&&ov(e.y,n.y)}function av(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function O0(e,n){return av(e.x,n.x)&&av(e.y,n.y)}function lv(e){return Wn(e.x)/Wn(e.y)}function uv(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class xM{constructor(){this.members=[]}add(n){Hh(this.members,n),n.scheduleRender()}remove(n){if(Wh(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(n){const t=this.members.findIndex(o=>n===o);if(t===0)return!1;let i;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){i=l;break}}return i?(this.promote(i),!0):!1}promote(n,t){const i=this.lead;if(n!==i&&(this.prevLead=i,this.lead=n,n.show(),i)){i.instance&&i.scheduleRender(),n.scheduleRender(),n.resumeFrom=i,t&&(n.resumeFrom.preserveOpacity=!0),i.snapshot&&(n.snapshot=i.snapshot,n.snapshot.latestValues=i.animationValues||i.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:o}=n.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:t,resumingFrom:i}=n;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function SM(e,n,t){let i="";const o=e.x.translate/n.x,l=e.y.translate/n.y,a=(t==null?void 0:t.z)||0;if((o||l||a)&&(i=`translate3d(${o}px, ${l}px, ${a}px) `),(n.x!==1||n.y!==1)&&(i+=`scale(${1/n.x}, ${1/n.y}) `),t){const{transformPerspective:h,rotate:y,rotateX:u,rotateY:p,skewX:g,skewY:b}=t;h&&(i=`perspective(${h}px) ${i}`),y&&(i+=`rotate(${y}deg) `),u&&(i+=`rotateX(${u}deg) `),p&&(i+=`rotateY(${p}deg) `),g&&(i+=`skewX(${g}deg) `),b&&(i+=`skewY(${b}deg) `)}const d=e.x.scale*n.x,f=e.y.scale*n.y;return(d!==1||f!==1)&&(i+=`scale(${d}, ${f})`),i||"none"}const nf=["","X","Y","Z"],_M=1e3;let CM=0;function tf(e,n,t,i){const{latestValues:o}=n;o[e]&&(t[e]=o[e],n.setStaticValue(e,0),i&&(i[e]=0))}function N0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const t=x0(n);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(t,"transform",Xe,!(o||l))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&N0(i)}function F0({attachResizeListener:e,defaultParent:n,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(a={},d=n==null?void 0:n()){this.id=CM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(EM),this.nodes.forEach(IM),this.nodes.forEach(MM),this.nodes.forEach(AM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new hM)}addEventListener(a,d){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Gh),this.eventHandlers.get(a).add(d)}notifyListeners(a,...d){const f=this.eventHandlers.get(a);f&&f.notify(...d)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=e0(a)&&!zR(a),this.instance=a;const{layoutId:d,layout:f,visualElement:h}=this.options;if(h&&!h.current&&h.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||d)&&(this.isLayoutDirty=!0),e){let y,u=0;const p=()=>this.root.updateBlockedByResize=!1;Xe.read(()=>{u=window.innerWidth}),e(a,()=>{const g=window.innerWidth;g!==u&&(u=g,this.root.updateBlockedByResize=!0,y&&y(),y=pM(p,250),cu.hasAnimatedSinceResize&&(cu.hasAnimatedSinceResize=!1,this.nodes.forEach(fv)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&h&&(d||f)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:u,hasRelativeLayoutChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||FM,{onLayoutAnimationStart:z,onLayoutAnimationComplete:x}=h.getProps(),w=!this.targetLayout||!O0(this.targetLayout,g),_=!u&&p;if(this.options.layoutRoot||this.resumeFrom||_||u&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...ap(b,"layout"),onPlay:z,onComplete:x};(h.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(y,_)}else u||fv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ki(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(DM),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&N0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const u=this.path[y];u.shouldResetTransform=!0,u.updateScroll("snapshot"),u.options.layoutRoot&&u.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(dv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(RM),this.nodes.forEach(TM),this.nodes.forEach(jM)):this.nodes.forEach(dv),this.clearAllSnapshots();const d=it.now();Sn.delta=Ir(0,1e3/60,d-Sn.timestamp),Sn.timestamp=d,Sn.isProcessing=!0,Wd.update.process(Sn),Wd.preRender.process(Sn),Wd.render.process(Sn),Sn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,up.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(PM),this.sharedNodes.forEach(LM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Xe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Xe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Wn(this.snapshot.measuredBox.x)&&!Wn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=an(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(d=!1),d&&this.instance){const f=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!L0(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;a&&this.instance&&(d||Oi(this.latestValues)||y)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return a&&(f=this.removeTransform(f)),VM(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:a}=this.options;if(!a)return an();const d=a.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(BM))){const{scroll:y}=this.root;y&&(Ps(d.x,y.offset.x),Ps(d.y,y.offset.y))}return d}removeElementScroll(a){var f;const d=an();if(St(d,a),(f=this.scroll)!=null&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const y=this.path[h],{scroll:u,options:p}=y;y!==this.root&&u&&p.layoutScroll&&(u.wasRoot&&St(d,a),Ps(d.x,u.offset.x),Ps(d.y,u.offset.y))}return d}applyTransform(a,d=!1){const f=an();St(f,a);for(let h=0;h<this.path.length;h++){const y=this.path[h];!d&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Rs(f,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Oi(y.latestValues)&&Rs(f,y.latestValues)}return Oi(this.latestValues)&&Rs(f,this.latestValues),f}removeTransform(a){const d=an();St(d,a);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!Oi(h.latestValues))continue;eh(h.latestValues)&&h.updateSnapshot();const y=an(),u=h.measurePageBox();St(y,u),iv(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return Oi(this.latestValues)&&iv(d,this.latestValues),d}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Sn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var p;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(a||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:u}=this.options;if(!(!this.layout||!(y||u))){if(this.resolvedRelativeTargetAt=Sn.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),ta(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=an(),this.targetWithTransforms=an()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),KI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),y0(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),ta(this.relativeTargetOrigin,this.target,g.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||eh(this.parent.latestValues)||g0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const a=this.getLead(),d=!!this.resumingFrom||this!==a;let f=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Sn.timestamp&&(f=!1),f)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;St(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,p=this.treeScale.y;sI(this.layoutCorrected,this.treeScale,this.path,d),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=an());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(nv(this.prevProjectionDelta.x,this.projectionDelta.x),nv(this.prevProjectionDelta.y,this.projectionDelta.y)),na(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==p||!uv(this.projectionDelta.x,this.prevProjectionDelta.x)||!uv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),a){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Is(),this.projectionDelta=Is(),this.projectionDeltaWithTransform=Is()}setAnimationOrigin(a,d=!1){const f=this.snapshot,h=f?f.latestValues:{},y={...this.latestValues},u=Is();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const p=an(),g=f?f.source:void 0,b=this.layout?this.layout.source:void 0,z=g!==b,x=this.getStack(),w=!x||x.members.length<=1,_=!!(z&&!w&&this.options.crossfade===!0&&!this.path.some(NM));this.animationProgress=0;let C;this.mixTargetDelta=R=>{const D=R/1e3;hv(u.x,a.x,D),hv(u.y,a.y,D),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ta(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),OM(this.relativeTarget,this.relativeTargetOrigin,p,D),C&&wM(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=an()),St(C,this.relativeTarget)),z&&(this.animationValues=y,gM(y,h,this.latestValues,D,_,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var d,f,h;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(h=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||h.stop(),this.pendingAnimation&&(ki(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Xe.update(()=>{cu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Qs(0)),this.currentAnimation=dM(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),a.onUpdate&&a.onUpdate(y)},onStop:()=>{},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_M),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:d,target:f,layout:h,latestValues:y}=a;if(!(!d||!f||!h)){if(this!==a&&this.layout&&h&&V0(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||an();const u=Wn(this.layout.layoutBox.x);f.x.min=a.target.x.min,f.x.max=f.x.min+u;const p=Wn(this.layout.layoutBox.y);f.y.min=a.target.y.min,f.y.max=f.y.min+p}St(d,f),Rs(d,y),na(this.projectionDeltaWithTransform,this.layoutCorrected,d,y)}}registerSharedNode(a,d){this.sharedNodes.has(a)||this.sharedNodes.set(a,new xM),this.sharedNodes.get(a).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var d;const{layoutId:a}=this.options;return a?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:a}=this.options;return a?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:d,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),a&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let d=!1;const{latestValues:f}=a;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const h={};f.z&&tf("z",a,h,this.animationValues);for(let y=0;y<nf.length;y++)tf(`rotate${nf[y]}`,a,h,this.animationValues),tf(`skew${nf[y]}`,a,h,this.animationValues);a.render();for(const y in h)a.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);a.scheduleRender()}applyProjectionStyles(a,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=uu(d==null?void 0:d.pointerEvents)||"",a.transform=f?f(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=uu(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Oi(this.latestValues)&&(a.transform=f?f({},""):"none",this.hasProjected=!1);return}a.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let u=SM(this.projectionDeltaWithTransform,this.treeScale,y);f&&(u=f(y,u)),a.transform=u;const{x:p,y:g}=this.projectionDelta;a.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,h.animationValues?a.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:a.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const b in ga){if(y[b]===void 0)continue;const{correct:z,applyTo:x,isCSSVariable:w}=ga[b],_=u==="none"?y[b]:z(y[b],h);if(x){const C=x.length;for(let R=0;R<C;R++)a[x[R]]=_}else w?this.options.visualElement.renderState.vars[b]=_:a[b]=_}this.options.layoutId&&(a.pointerEvents=h===this?uu(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var d;return(d=a.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(cv),this.root.sharedNodes.clear()}}}function TM(e){e.updateLayout()}function jM(e){var t;const n=((t=e.resumeFrom)==null?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=e.layout,{animationType:l}=e.options,a=n.source!==e.layout.source;l==="size"?_t(u=>{const p=a?n.measuredBox[u]:n.layoutBox[u],g=Wn(p);p.min=i[u].min,p.max=p.min+g}):V0(l,n.layoutBox,i)&&_t(u=>{const p=a?n.measuredBox[u]:n.layoutBox[u],g=Wn(i[u]);p.max=p.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[u].max=e.relativeTarget[u].min+g)});const d=Is();na(d,i,n.layoutBox);const f=Is();a?na(f,e.applyTransform(o,!0),n.measuredBox):na(f,i,n.layoutBox);const h=!L0(d);let y=!1;if(!e.resumeFrom){const u=e.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:p,layout:g}=u;if(p&&g){const b=an();ta(b,n.layoutBox,p.layoutBox);const z=an();ta(z,i,g.layoutBox),O0(b,z)||(y=!0),u.options.layoutRoot&&(e.relativeTarget=z,e.relativeTargetOrigin=b,e.relativeParent=u)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:f,layoutDelta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:y})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function EM(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function AM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function PM(e){e.clearSnapshot()}function cv(e){e.clearMeasurements()}function dv(e){e.isLayoutDirty=!1}function RM(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function fv(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function IM(e){e.resolveTargetDelta()}function MM(e){e.calcProjection()}function DM(e){e.resetSkewAndRotation()}function LM(e){e.removeLeadSnapshot()}function hv(e,n,t){e.translate=en(n.translate,0,t),e.scale=en(n.scale,1,t),e.origin=n.origin,e.originPoint=n.originPoint}function pv(e,n,t,i){e.min=en(n.min,t.min,i),e.max=en(n.max,t.max,i)}function OM(e,n,t,i){pv(e.x,n.x,t.x,i),pv(e.y,n.y,t.y,i)}function NM(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const FM={duration:.45,ease:[.4,0,.1,1]},mv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),gv=mv("applewebkit/")&&!mv("chrome/")?Math.round:jt;function yv(e){e.min=gv(e.min),e.max=gv(e.max)}function VM(e){yv(e.x),yv(e.y)}function V0(e,n,t){return e==="position"||e==="preserve-aspect"&&!qI(lv(n),lv(t),.2)}function BM(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const UM=F0({attachResizeListener:(e,n)=>ya(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),rf={current:void 0},B0=F0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!rf.current){const e=new UM({});e.mount(window),e.setOptions({layoutScroll:!0}),rf.current=e}return rf.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$M={pan:{Feature:aM},drag:{Feature:oM,ProjectionNode:B0,MeasureLayout:I0}};function kv(e,n,t){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=i[o];l&&Xe.postRender(()=>l(n,Ea(n)))}class HM extends bi{mount(){const{current:n}=this.node;n&&(this.unmount=gR(n,(t,i)=>(kv(this.node,i,"Start"),o=>kv(this.node,o,"End"))))}unmount(){}}class WM extends bi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ca(ya(this.node.current,"focus",()=>this.onFocus()),ya(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function vv(e,n,t){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=i[o];l&&Xe.postRender(()=>l(n,Ea(n)))}class qM extends bi{mount(){const{current:n}=this.node;n&&(this.unmount=bR(n,(t,i)=>(vv(this.node,i,"Start"),(o,{success:l})=>vv(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ah=new WeakMap,sf=new WeakMap,KM=e=>{const n=ah.get(e.target);n&&n(e)},GM=e=>{e.forEach(KM)};function QM({root:e,...n}){const t=e||document;sf.has(t)||sf.set(t,{});const i=sf.get(t),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(GM,{root:e,...n})),i[o]}function YM(e,n,t){const i=QM(n);return ah.set(e,t),i.observe(e),()=>{ah.delete(e),i.unobserve(e)}}const XM={some:0,all:1};class ZM extends bi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:l}=n,a={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:XM[o]},d=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:u}=this.node.getProps(),p=h?y:u;p&&p(f)};return YM(this.node.current,a,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:t}=this.node;["amount","margin","root"].some(JM(n,t))&&this.startObserver()}unmount(){}}function JM({viewport:e={}},{viewport:n={}}={}){return t=>e[t]!==n[t]}const eD={inView:{Feature:ZM},tap:{Feature:qM},focus:{Feature:WM},hover:{Feature:HM}},nD={layout:{ProjectionNode:B0,MeasureLayout:I0}},tD={...VI,...eD,...$M,...nD},rD=tI(tD,mI);var of={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var bv;function iD(){return bv||(bv=1,function(e){(function(){var n=function(){this.init()};n.prototype={init:function(){var u=this||t;return u._counter=1e3,u._html5AudioPool=[],u.html5PoolSize=10,u._codecs={},u._howls=[],u._muted=!1,u._volume=1,u._canPlayEvent="canplaythrough",u._navigator=typeof window<"u"&&window.navigator?window.navigator:null,u.masterGain=null,u.noAudio=!1,u.usingWebAudio=!0,u.autoSuspend=!0,u.ctx=null,u.autoUnlock=!0,u._setup(),u},volume:function(u){var p=this||t;if(u=parseFloat(u),p.ctx||y(),typeof u<"u"&&u>=0&&u<=1){if(p._volume=u,p._muted)return p;p.usingWebAudio&&p.masterGain.gain.setValueAtTime(u,t.ctx.currentTime);for(var g=0;g<p._howls.length;g++)if(!p._howls[g]._webAudio)for(var b=p._howls[g]._getSoundIds(),z=0;z<b.length;z++){var x=p._howls[g]._soundById(b[z]);x&&x._node&&(x._node.volume=x._volume*u)}return p}return p._volume},mute:function(u){var p=this||t;p.ctx||y(),p._muted=u,p.usingWebAudio&&p.masterGain.gain.setValueAtTime(u?0:p._volume,t.ctx.currentTime);for(var g=0;g<p._howls.length;g++)if(!p._howls[g]._webAudio)for(var b=p._howls[g]._getSoundIds(),z=0;z<b.length;z++){var x=p._howls[g]._soundById(b[z]);x&&x._node&&(x._node.muted=u?!0:x._muted)}return p},stop:function(){for(var u=this||t,p=0;p<u._howls.length;p++)u._howls[p].stop();return u},unload:function(){for(var u=this||t,p=u._howls.length-1;p>=0;p--)u._howls[p].unload();return u.usingWebAudio&&u.ctx&&typeof u.ctx.close<"u"&&(u.ctx.close(),u.ctx=null,y()),u},codecs:function(u){return(this||t)._codecs[u.replace(/^x-/,"")]},_setup:function(){var u=this||t;if(u.state=u.ctx&&u.ctx.state||"suspended",u._autoSuspend(),!u.usingWebAudio)if(typeof Audio<"u")try{var p=new Audio;typeof p.oncanplaythrough>"u"&&(u._canPlayEvent="canplay")}catch{u.noAudio=!0}else u.noAudio=!0;try{var p=new Audio;p.muted&&(u.noAudio=!0)}catch{}return u.noAudio||u._setupCodecs(),u},_setupCodecs:function(){var u=this||t,p=null;try{p=typeof Audio<"u"?new Audio:null}catch{return u}if(!p||typeof p.canPlayType!="function")return u;var g=p.canPlayType("audio/mpeg;").replace(/^no$/,""),b=u._navigator?u._navigator.userAgent:"",z=b.match(/OPR\/(\d+)/g),x=z&&parseInt(z[0].split("/")[1],10)<33,w=b.indexOf("Safari")!==-1&&b.indexOf("Chrome")===-1,_=b.match(/Version\/(.*?) /),C=w&&_&&parseInt(_[1],10)<15;return u._codecs={mp3:!!(!x&&(g||p.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!g,opus:!!p.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!p.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!p.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(p.canPlayType('audio/wav; codecs="1"')||p.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!p.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!p.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(p.canPlayType("audio/x-m4a;")||p.canPlayType("audio/m4a;")||p.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(p.canPlayType("audio/x-m4b;")||p.canPlayType("audio/m4b;")||p.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(p.canPlayType("audio/x-mp4;")||p.canPlayType("audio/mp4;")||p.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!C&&p.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!C&&p.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!p.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(p.canPlayType("audio/x-flac;")||p.canPlayType("audio/flac;")).replace(/^no$/,"")},u},_unlockAudio:function(){var u=this||t;if(!(u._audioUnlocked||!u.ctx)){u._audioUnlocked=!1,u.autoUnlock=!1,!u._mobileUnloaded&&u.ctx.sampleRate!==44100&&(u._mobileUnloaded=!0,u.unload()),u._scratchBuffer=u.ctx.createBuffer(1,1,22050);var p=function(g){for(;u._html5AudioPool.length<u.html5PoolSize;)try{var b=new Audio;b._unlocked=!0,u._releaseHtml5Audio(b)}catch{u.noAudio=!0;break}for(var z=0;z<u._howls.length;z++)if(!u._howls[z]._webAudio)for(var x=u._howls[z]._getSoundIds(),w=0;w<x.length;w++){var _=u._howls[z]._soundById(x[w]);_&&_._node&&!_._node._unlocked&&(_._node._unlocked=!0,_._node.load())}u._autoResume();var C=u.ctx.createBufferSource();C.buffer=u._scratchBuffer,C.connect(u.ctx.destination),typeof C.start>"u"?C.noteOn(0):C.start(0),typeof u.ctx.resume=="function"&&u.ctx.resume(),C.onended=function(){C.disconnect(0),u._audioUnlocked=!0,document.removeEventListener("touchstart",p,!0),document.removeEventListener("touchend",p,!0),document.removeEventListener("click",p,!0),document.removeEventListener("keydown",p,!0);for(var R=0;R<u._howls.length;R++)u._howls[R]._emit("unlock")}};return document.addEventListener("touchstart",p,!0),document.addEventListener("touchend",p,!0),document.addEventListener("click",p,!0),document.addEventListener("keydown",p,!0),u}},_obtainHtml5Audio:function(){var u=this||t;if(u._html5AudioPool.length)return u._html5AudioPool.pop();var p=new Audio().play();return p&&typeof Promise<"u"&&(p instanceof Promise||typeof p.then=="function")&&p.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(u){var p=this||t;return u._unlocked&&p._html5AudioPool.push(u),p},_autoSuspend:function(){var u=this;if(!(!u.autoSuspend||!u.ctx||typeof u.ctx.suspend>"u"||!t.usingWebAudio)){for(var p=0;p<u._howls.length;p++)if(u._howls[p]._webAudio){for(var g=0;g<u._howls[p]._sounds.length;g++)if(!u._howls[p]._sounds[g]._paused)return u}return u._suspendTimer&&clearTimeout(u._suspendTimer),u._suspendTimer=setTimeout(function(){if(u.autoSuspend){u._suspendTimer=null,u.state="suspending";var b=function(){u.state="suspended",u._resumeAfterSuspend&&(delete u._resumeAfterSuspend,u._autoResume())};u.ctx.suspend().then(b,b)}},3e4),u}},_autoResume:function(){var u=this;if(!(!u.ctx||typeof u.ctx.resume>"u"||!t.usingWebAudio))return u.state==="running"&&u.ctx.state!=="interrupted"&&u._suspendTimer?(clearTimeout(u._suspendTimer),u._suspendTimer=null):u.state==="suspended"||u.state==="running"&&u.ctx.state==="interrupted"?(u.ctx.resume().then(function(){u.state="running";for(var p=0;p<u._howls.length;p++)u._howls[p]._emit("resume")}),u._suspendTimer&&(clearTimeout(u._suspendTimer),u._suspendTimer=null)):u.state==="suspending"&&(u._resumeAfterSuspend=!0),u}};var t=new n,i=function(u){var p=this;if(!u.src||u.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}p.init(u)};i.prototype={init:function(u){var p=this;return t.ctx||y(),p._autoplay=u.autoplay||!1,p._format=typeof u.format!="string"?u.format:[u.format],p._html5=u.html5||!1,p._muted=u.mute||!1,p._loop=u.loop||!1,p._pool=u.pool||5,p._preload=typeof u.preload=="boolean"||u.preload==="metadata"?u.preload:!0,p._rate=u.rate||1,p._sprite=u.sprite||{},p._src=typeof u.src!="string"?u.src:[u.src],p._volume=u.volume!==void 0?u.volume:1,p._xhr={method:u.xhr&&u.xhr.method?u.xhr.method:"GET",headers:u.xhr&&u.xhr.headers?u.xhr.headers:null,withCredentials:u.xhr&&u.xhr.withCredentials?u.xhr.withCredentials:!1},p._duration=0,p._state="unloaded",p._sounds=[],p._endTimers={},p._queue=[],p._playLock=!1,p._onend=u.onend?[{fn:u.onend}]:[],p._onfade=u.onfade?[{fn:u.onfade}]:[],p._onload=u.onload?[{fn:u.onload}]:[],p._onloaderror=u.onloaderror?[{fn:u.onloaderror}]:[],p._onplayerror=u.onplayerror?[{fn:u.onplayerror}]:[],p._onpause=u.onpause?[{fn:u.onpause}]:[],p._onplay=u.onplay?[{fn:u.onplay}]:[],p._onstop=u.onstop?[{fn:u.onstop}]:[],p._onmute=u.onmute?[{fn:u.onmute}]:[],p._onvolume=u.onvolume?[{fn:u.onvolume}]:[],p._onrate=u.onrate?[{fn:u.onrate}]:[],p._onseek=u.onseek?[{fn:u.onseek}]:[],p._onunlock=u.onunlock?[{fn:u.onunlock}]:[],p._onresume=[],p._webAudio=t.usingWebAudio&&!p._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(p),p._autoplay&&p._queue.push({event:"play",action:function(){p.play()}}),p._preload&&p._preload!=="none"&&p.load(),p},load:function(){var u=this,p=null;if(t.noAudio){u._emit("loaderror",null,"No audio support.");return}typeof u._src=="string"&&(u._src=[u._src]);for(var g=0;g<u._src.length;g++){var b,z;if(u._format&&u._format[g])b=u._format[g];else{if(z=u._src[g],typeof z!="string"){u._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}b=/^data:audio\/([^;,]+);/i.exec(z),b||(b=/\.([^.]+)$/.exec(z.split("?",1)[0])),b&&(b=b[1].toLowerCase())}if(b||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),b&&t.codecs(b)){p=u._src[g];break}}if(!p){u._emit("loaderror",null,"No codec support for selected audio sources.");return}return u._src=p,u._state="loading",window.location.protocol==="https:"&&p.slice(0,5)==="http:"&&(u._html5=!0,u._webAudio=!1),new o(u),u._webAudio&&a(u),u},play:function(u,p){var g=this,b=null;if(typeof u=="number")b=u,u=null;else{if(typeof u=="string"&&g._state==="loaded"&&!g._sprite[u])return null;if(typeof u>"u"&&(u="__default",!g._playLock)){for(var z=0,x=0;x<g._sounds.length;x++)g._sounds[x]._paused&&!g._sounds[x]._ended&&(z++,b=g._sounds[x]._id);z===1?u=null:b=null}}var w=b?g._soundById(b):g._inactiveSound();if(!w)return null;if(b&&!u&&(u=w._sprite||"__default"),g._state!=="loaded"){w._sprite=u,w._ended=!1;var _=w._id;return g._queue.push({event:"play",action:function(){g.play(_)}}),_}if(b&&!w._paused)return p||g._loadQueue("play"),w._id;g._webAudio&&t._autoResume();var C=Math.max(0,w._seek>0?w._seek:g._sprite[u][0]/1e3),R=Math.max(0,(g._sprite[u][0]+g._sprite[u][1])/1e3-C),D=R*1e3/Math.abs(w._rate),P=g._sprite[u][0]/1e3,$=(g._sprite[u][0]+g._sprite[u][1])/1e3;w._sprite=u,w._ended=!1;var Y=function(){w._paused=!1,w._seek=C,w._start=P,w._stop=$,w._loop=!!(w._loop||g._sprite[u][2])};if(C>=$){g._ended(w);return}var K=w._node;if(g._webAudio){var L=function(){g._playLock=!1,Y(),g._refreshBuffer(w);var B=w._muted||g._muted?0:w._volume;K.gain.setValueAtTime(B,t.ctx.currentTime),w._playStart=t.ctx.currentTime,typeof K.bufferSource.start>"u"?w._loop?K.bufferSource.noteGrainOn(0,C,86400):K.bufferSource.noteGrainOn(0,C,R):w._loop?K.bufferSource.start(0,C,86400):K.bufferSource.start(0,C,R),D!==1/0&&(g._endTimers[w._id]=setTimeout(g._ended.bind(g,w),D)),p||setTimeout(function(){g._emit("play",w._id),g._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?L():(g._playLock=!0,g.once("resume",L),g._clearTimer(w._id))}else{var J=function(){K.currentTime=C,K.muted=w._muted||g._muted||t._muted||K.muted,K.volume=w._volume*t.volume(),K.playbackRate=w._rate;try{var B=K.play();if(B&&typeof Promise<"u"&&(B instanceof Promise||typeof B.then=="function")?(g._playLock=!0,Y(),B.then(function(){g._playLock=!1,K._unlocked=!0,p?g._loadQueue():g._emit("play",w._id)}).catch(function(){g._playLock=!1,g._emit("playerror",w._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),w._ended=!0,w._paused=!0})):p||(g._playLock=!1,Y(),g._emit("play",w._id)),K.playbackRate=w._rate,K.paused){g._emit("playerror",w._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}u!=="__default"||w._loop?g._endTimers[w._id]=setTimeout(g._ended.bind(g,w),D):(g._endTimers[w._id]=function(){g._ended(w),K.removeEventListener("ended",g._endTimers[w._id],!1)},K.addEventListener("ended",g._endTimers[w._id],!1))}catch(re){g._emit("playerror",w._id,re)}};K.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(K.src=g._src,K.load());var G=window&&window.ejecta||!K.readyState&&t._navigator.isCocoonJS;if(K.readyState>=3||G)J();else{g._playLock=!0,g._state="loading";var ee=function(){g._state="loaded",J(),K.removeEventListener(t._canPlayEvent,ee,!1)};K.addEventListener(t._canPlayEvent,ee,!1),g._clearTimer(w._id)}}return w._id},pause:function(u){var p=this;if(p._state!=="loaded"||p._playLock)return p._queue.push({event:"pause",action:function(){p.pause(u)}}),p;for(var g=p._getSoundIds(u),b=0;b<g.length;b++){p._clearTimer(g[b]);var z=p._soundById(g[b]);if(z&&!z._paused&&(z._seek=p.seek(g[b]),z._rateSeek=0,z._paused=!0,p._stopFade(g[b]),z._node))if(p._webAudio){if(!z._node.bufferSource)continue;typeof z._node.bufferSource.stop>"u"?z._node.bufferSource.noteOff(0):z._node.bufferSource.stop(0),p._cleanBuffer(z._node)}else(!isNaN(z._node.duration)||z._node.duration===1/0)&&z._node.pause();arguments[1]||p._emit("pause",z?z._id:null)}return p},stop:function(u,p){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"stop",action:function(){g.stop(u)}}),g;for(var b=g._getSoundIds(u),z=0;z<b.length;z++){g._clearTimer(b[z]);var x=g._soundById(b[z]);x&&(x._seek=x._start||0,x._rateSeek=0,x._paused=!0,x._ended=!0,g._stopFade(b[z]),x._node&&(g._webAudio?x._node.bufferSource&&(typeof x._node.bufferSource.stop>"u"?x._node.bufferSource.noteOff(0):x._node.bufferSource.stop(0),g._cleanBuffer(x._node)):(!isNaN(x._node.duration)||x._node.duration===1/0)&&(x._node.currentTime=x._start||0,x._node.pause(),x._node.duration===1/0&&g._clearSound(x._node))),p||g._emit("stop",x._id))}return g},mute:function(u,p){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"mute",action:function(){g.mute(u,p)}}),g;if(typeof p>"u")if(typeof u=="boolean")g._muted=u;else return g._muted;for(var b=g._getSoundIds(p),z=0;z<b.length;z++){var x=g._soundById(b[z]);x&&(x._muted=u,x._interval&&g._stopFade(x._id),g._webAudio&&x._node?x._node.gain.setValueAtTime(u?0:x._volume,t.ctx.currentTime):x._node&&(x._node.muted=t._muted?!0:u),g._emit("mute",x._id))}return g},volume:function(){var u=this,p=arguments,g,b;if(p.length===0)return u._volume;if(p.length===1||p.length===2&&typeof p[1]>"u"){var z=u._getSoundIds(),x=z.indexOf(p[0]);x>=0?b=parseInt(p[0],10):g=parseFloat(p[0])}else p.length>=2&&(g=parseFloat(p[0]),b=parseInt(p[1],10));var w;if(typeof g<"u"&&g>=0&&g<=1){if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"volume",action:function(){u.volume.apply(u,p)}}),u;typeof b>"u"&&(u._volume=g),b=u._getSoundIds(b);for(var _=0;_<b.length;_++)w=u._soundById(b[_]),w&&(w._volume=g,p[2]||u._stopFade(b[_]),u._webAudio&&w._node&&!w._muted?w._node.gain.setValueAtTime(g,t.ctx.currentTime):w._node&&!w._muted&&(w._node.volume=g*t.volume()),u._emit("volume",w._id))}else return w=b?u._soundById(b):u._sounds[0],w?w._volume:0;return u},fade:function(u,p,g,b){var z=this;if(z._state!=="loaded"||z._playLock)return z._queue.push({event:"fade",action:function(){z.fade(u,p,g,b)}}),z;u=Math.min(Math.max(0,parseFloat(u)),1),p=Math.min(Math.max(0,parseFloat(p)),1),g=parseFloat(g),z.volume(u,b);for(var x=z._getSoundIds(b),w=0;w<x.length;w++){var _=z._soundById(x[w]);if(_){if(b||z._stopFade(x[w]),z._webAudio&&!_._muted){var C=t.ctx.currentTime,R=C+g/1e3;_._volume=u,_._node.gain.setValueAtTime(u,C),_._node.gain.linearRampToValueAtTime(p,R)}z._startFadeInterval(_,u,p,g,x[w],typeof b>"u")}}return z},_startFadeInterval:function(u,p,g,b,z,x){var w=this,_=p,C=g-p,R=Math.abs(C/.01),D=Math.max(4,R>0?b/R:b),P=Date.now();u._fadeTo=g,u._interval=setInterval(function(){var $=(Date.now()-P)/b;P=Date.now(),_+=C*$,_=Math.round(_*100)/100,C<0?_=Math.max(g,_):_=Math.min(g,_),w._webAudio?u._volume=_:w.volume(_,u._id,!0),x&&(w._volume=_),(g<p&&_<=g||g>p&&_>=g)&&(clearInterval(u._interval),u._interval=null,u._fadeTo=null,w.volume(g,u._id),w._emit("fade",u._id))},D)},_stopFade:function(u){var p=this,g=p._soundById(u);return g&&g._interval&&(p._webAudio&&g._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(g._interval),g._interval=null,p.volume(g._fadeTo,u),g._fadeTo=null,p._emit("fade",u)),p},loop:function(){var u=this,p=arguments,g,b,z;if(p.length===0)return u._loop;if(p.length===1)if(typeof p[0]=="boolean")g=p[0],u._loop=g;else return z=u._soundById(parseInt(p[0],10)),z?z._loop:!1;else p.length===2&&(g=p[0],b=parseInt(p[1],10));for(var x=u._getSoundIds(b),w=0;w<x.length;w++)z=u._soundById(x[w]),z&&(z._loop=g,u._webAudio&&z._node&&z._node.bufferSource&&(z._node.bufferSource.loop=g,g&&(z._node.bufferSource.loopStart=z._start||0,z._node.bufferSource.loopEnd=z._stop,u.playing(x[w])&&(u.pause(x[w],!0),u.play(x[w],!0)))));return u},rate:function(){var u=this,p=arguments,g,b;if(p.length===0)b=u._sounds[0]._id;else if(p.length===1){var z=u._getSoundIds(),x=z.indexOf(p[0]);x>=0?b=parseInt(p[0],10):g=parseFloat(p[0])}else p.length===2&&(g=parseFloat(p[0]),b=parseInt(p[1],10));var w;if(typeof g=="number"){if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"rate",action:function(){u.rate.apply(u,p)}}),u;typeof b>"u"&&(u._rate=g),b=u._getSoundIds(b);for(var _=0;_<b.length;_++)if(w=u._soundById(b[_]),w){u.playing(b[_])&&(w._rateSeek=u.seek(b[_]),w._playStart=u._webAudio?t.ctx.currentTime:w._playStart),w._rate=g,u._webAudio&&w._node&&w._node.bufferSource?w._node.bufferSource.playbackRate.setValueAtTime(g,t.ctx.currentTime):w._node&&(w._node.playbackRate=g);var C=u.seek(b[_]),R=(u._sprite[w._sprite][0]+u._sprite[w._sprite][1])/1e3-C,D=R*1e3/Math.abs(w._rate);(u._endTimers[b[_]]||!w._paused)&&(u._clearTimer(b[_]),u._endTimers[b[_]]=setTimeout(u._ended.bind(u,w),D)),u._emit("rate",w._id)}}else return w=u._soundById(b),w?w._rate:u._rate;return u},seek:function(){var u=this,p=arguments,g,b;if(p.length===0)u._sounds.length&&(b=u._sounds[0]._id);else if(p.length===1){var z=u._getSoundIds(),x=z.indexOf(p[0]);x>=0?b=parseInt(p[0],10):u._sounds.length&&(b=u._sounds[0]._id,g=parseFloat(p[0]))}else p.length===2&&(g=parseFloat(p[0]),b=parseInt(p[1],10));if(typeof b>"u")return 0;if(typeof g=="number"&&(u._state!=="loaded"||u._playLock))return u._queue.push({event:"seek",action:function(){u.seek.apply(u,p)}}),u;var w=u._soundById(b);if(w)if(typeof g=="number"&&g>=0){var _=u.playing(b);_&&u.pause(b,!0),w._seek=g,w._ended=!1,u._clearTimer(b),!u._webAudio&&w._node&&!isNaN(w._node.duration)&&(w._node.currentTime=g);var C=function(){_&&u.play(b,!0),u._emit("seek",b)};if(_&&!u._webAudio){var R=function(){u._playLock?setTimeout(R,0):C()};setTimeout(R,0)}else C()}else if(u._webAudio){var D=u.playing(b)?t.ctx.currentTime-w._playStart:0,P=w._rateSeek?w._rateSeek-w._seek:0;return w._seek+(P+D*Math.abs(w._rate))}else return w._node.currentTime;return u},playing:function(u){var p=this;if(typeof u=="number"){var g=p._soundById(u);return g?!g._paused:!1}for(var b=0;b<p._sounds.length;b++)if(!p._sounds[b]._paused)return!0;return!1},duration:function(u){var p=this,g=p._duration,b=p._soundById(u);return b&&(g=p._sprite[b._sprite][1]/1e3),g},state:function(){return this._state},unload:function(){for(var u=this,p=u._sounds,g=0;g<p.length;g++)p[g]._paused||u.stop(p[g]._id),u._webAudio||(u._clearSound(p[g]._node),p[g]._node.removeEventListener("error",p[g]._errorFn,!1),p[g]._node.removeEventListener(t._canPlayEvent,p[g]._loadFn,!1),p[g]._node.removeEventListener("ended",p[g]._endFn,!1),t._releaseHtml5Audio(p[g]._node)),delete p[g]._node,u._clearTimer(p[g]._id);var b=t._howls.indexOf(u);b>=0&&t._howls.splice(b,1);var z=!0;for(g=0;g<t._howls.length;g++)if(t._howls[g]._src===u._src||u._src.indexOf(t._howls[g]._src)>=0){z=!1;break}return l&&z&&delete l[u._src],t.noAudio=!1,u._state="unloaded",u._sounds=[],u=null,null},on:function(u,p,g,b){var z=this,x=z["_on"+u];return typeof p=="function"&&x.push(b?{id:g,fn:p,once:b}:{id:g,fn:p}),z},off:function(u,p,g){var b=this,z=b["_on"+u],x=0;if(typeof p=="number"&&(g=p,p=null),p||g)for(x=0;x<z.length;x++){var w=g===z[x].id;if(p===z[x].fn&&w||!p&&w){z.splice(x,1);break}}else if(u)b["_on"+u]=[];else{var _=Object.keys(b);for(x=0;x<_.length;x++)_[x].indexOf("_on")===0&&Array.isArray(b[_[x]])&&(b[_[x]]=[])}return b},once:function(u,p,g){var b=this;return b.on(u,p,g,1),b},_emit:function(u,p,g){for(var b=this,z=b["_on"+u],x=z.length-1;x>=0;x--)(!z[x].id||z[x].id===p||u==="load")&&(setTimeout((function(w){w.call(this,p,g)}).bind(b,z[x].fn),0),z[x].once&&b.off(u,z[x].fn,z[x].id));return b._loadQueue(u),b},_loadQueue:function(u){var p=this;if(p._queue.length>0){var g=p._queue[0];g.event===u&&(p._queue.shift(),p._loadQueue()),u||g.action()}return p},_ended:function(u){var p=this,g=u._sprite;if(!p._webAudio&&u._node&&!u._node.paused&&!u._node.ended&&u._node.currentTime<u._stop)return setTimeout(p._ended.bind(p,u),100),p;var b=!!(u._loop||p._sprite[g][2]);if(p._emit("end",u._id),!p._webAudio&&b&&p.stop(u._id,!0).play(u._id),p._webAudio&&b){p._emit("play",u._id),u._seek=u._start||0,u._rateSeek=0,u._playStart=t.ctx.currentTime;var z=(u._stop-u._start)*1e3/Math.abs(u._rate);p._endTimers[u._id]=setTimeout(p._ended.bind(p,u),z)}return p._webAudio&&!b&&(u._paused=!0,u._ended=!0,u._seek=u._start||0,u._rateSeek=0,p._clearTimer(u._id),p._cleanBuffer(u._node),t._autoSuspend()),!p._webAudio&&!b&&p.stop(u._id,!0),p},_clearTimer:function(u){var p=this;if(p._endTimers[u]){if(typeof p._endTimers[u]!="function")clearTimeout(p._endTimers[u]);else{var g=p._soundById(u);g&&g._node&&g._node.removeEventListener("ended",p._endTimers[u],!1)}delete p._endTimers[u]}return p},_soundById:function(u){for(var p=this,g=0;g<p._sounds.length;g++)if(u===p._sounds[g]._id)return p._sounds[g];return null},_inactiveSound:function(){var u=this;u._drain();for(var p=0;p<u._sounds.length;p++)if(u._sounds[p]._ended)return u._sounds[p].reset();return new o(u)},_drain:function(){var u=this,p=u._pool,g=0,b=0;if(!(u._sounds.length<p)){for(b=0;b<u._sounds.length;b++)u._sounds[b]._ended&&g++;for(b=u._sounds.length-1;b>=0;b--){if(g<=p)return;u._sounds[b]._ended&&(u._webAudio&&u._sounds[b]._node&&u._sounds[b]._node.disconnect(0),u._sounds.splice(b,1),g--)}}},_getSoundIds:function(u){var p=this;if(typeof u>"u"){for(var g=[],b=0;b<p._sounds.length;b++)g.push(p._sounds[b]._id);return g}else return[u]},_refreshBuffer:function(u){var p=this;return u._node.bufferSource=t.ctx.createBufferSource(),u._node.bufferSource.buffer=l[p._src],u._panner?u._node.bufferSource.connect(u._panner):u._node.bufferSource.connect(u._node),u._node.bufferSource.loop=u._loop,u._loop&&(u._node.bufferSource.loopStart=u._start||0,u._node.bufferSource.loopEnd=u._stop||0),u._node.bufferSource.playbackRate.setValueAtTime(u._rate,t.ctx.currentTime),p},_cleanBuffer:function(u){var p=this,g=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!u.bufferSource)return p;if(t._scratchBuffer&&u.bufferSource&&(u.bufferSource.onended=null,u.bufferSource.disconnect(0),g))try{u.bufferSource.buffer=t._scratchBuffer}catch{}return u.bufferSource=null,p},_clearSound:function(u){var p=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);p||(u.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var o=function(u){this._parent=u,this.init()};o.prototype={init:function(){var u=this,p=u._parent;return u._muted=p._muted,u._loop=p._loop,u._volume=p._volume,u._rate=p._rate,u._seek=0,u._paused=!0,u._ended=!0,u._sprite="__default",u._id=++t._counter,p._sounds.push(u),u.create(),u},create:function(){var u=this,p=u._parent,g=t._muted||u._muted||u._parent._muted?0:u._volume;return p._webAudio?(u._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),u._node.gain.setValueAtTime(g,t.ctx.currentTime),u._node.paused=!0,u._node.connect(t.masterGain)):t.noAudio||(u._node=t._obtainHtml5Audio(),u._errorFn=u._errorListener.bind(u),u._node.addEventListener("error",u._errorFn,!1),u._loadFn=u._loadListener.bind(u),u._node.addEventListener(t._canPlayEvent,u._loadFn,!1),u._endFn=u._endListener.bind(u),u._node.addEventListener("ended",u._endFn,!1),u._node.src=p._src,u._node.preload=p._preload===!0?"auto":p._preload,u._node.volume=g*t.volume(),u._node.load()),u},reset:function(){var u=this,p=u._parent;return u._muted=p._muted,u._loop=p._loop,u._volume=p._volume,u._rate=p._rate,u._seek=0,u._rateSeek=0,u._paused=!0,u._ended=!0,u._sprite="__default",u._id=++t._counter,u},_errorListener:function(){var u=this;u._parent._emit("loaderror",u._id,u._node.error?u._node.error.code:0),u._node.removeEventListener("error",u._errorFn,!1)},_loadListener:function(){var u=this,p=u._parent;p._duration=Math.ceil(u._node.duration*10)/10,Object.keys(p._sprite).length===0&&(p._sprite={__default:[0,p._duration*1e3]}),p._state!=="loaded"&&(p._state="loaded",p._emit("load"),p._loadQueue()),u._node.removeEventListener(t._canPlayEvent,u._loadFn,!1)},_endListener:function(){var u=this,p=u._parent;p._duration===1/0&&(p._duration=Math.ceil(u._node.duration*10)/10,p._sprite.__default[1]===1/0&&(p._sprite.__default[1]=p._duration*1e3),p._ended(u)),u._node.removeEventListener("ended",u._endFn,!1)}};var l={},a=function(u){var p=u._src;if(l[p]){u._duration=l[p].duration,h(u);return}if(/^data:[^;]+;base64,/.test(p)){for(var g=atob(p.split(",")[1]),b=new Uint8Array(g.length),z=0;z<g.length;++z)b[z]=g.charCodeAt(z);f(b.buffer,u)}else{var x=new XMLHttpRequest;x.open(u._xhr.method,p,!0),x.withCredentials=u._xhr.withCredentials,x.responseType="arraybuffer",u._xhr.headers&&Object.keys(u._xhr.headers).forEach(function(w){x.setRequestHeader(w,u._xhr.headers[w])}),x.onload=function(){var w=(x.status+"")[0];if(w!=="0"&&w!=="2"&&w!=="3"){u._emit("loaderror",null,"Failed loading audio file with status: "+x.status+".");return}f(x.response,u)},x.onerror=function(){u._webAudio&&(u._html5=!0,u._webAudio=!1,u._sounds=[],delete l[p],u.load())},d(x)}},d=function(u){try{u.send()}catch{u.onerror()}},f=function(u,p){var g=function(){p._emit("loaderror",null,"Decoding audio data failed.")},b=function(z){z&&p._sounds.length>0?(l[p._src]=z,h(p,z)):g()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(u).then(b).catch(g):t.ctx.decodeAudioData(u,b,g)},h=function(u,p){p&&!u._duration&&(u._duration=p.duration),Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue())},y=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var u=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),p=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),g=p?parseInt(p[1],10):null;if(u&&g&&g<9){var b=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!b&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};e.Howler=t,e.Howl=i,typeof Bo<"u"?(Bo.HowlerGlobal=n,Bo.Howler=t,Bo.Howl=i,Bo.Sound=o):typeof window<"u"&&(window.HowlerGlobal=n,window.Howler=t,window.Howl=i,window.Sound=o)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var i=this;if(!i.ctx||!i.ctx.listener)return i;for(var o=i._howls.length-1;o>=0;o--)i._howls[o].stereo(t);return i},HowlerGlobal.prototype.pos=function(t,i,o){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(i=typeof i!="number"?l._pos[1]:i,o=typeof o!="number"?l._pos[2]:o,typeof t=="number")l._pos=[t,i,o],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(t,i,o,l,a,d){var f=this;if(!f.ctx||!f.ctx.listener)return f;var h=f._orientation;if(i=typeof i!="number"?h[1]:i,o=typeof o!="number"?h[2]:o,l=typeof l!="number"?h[3]:l,a=typeof a!="number"?h[4]:a,d=typeof d!="number"?h[5]:d,typeof t=="number")f._orientation=[t,i,o,l,a,d],typeof f.ctx.listener.forwardX<"u"?(f.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),f.ctx.listener.forwardY.setTargetAtTime(i,Howler.ctx.currentTime,.1),f.ctx.listener.forwardZ.setTargetAtTime(o,Howler.ctx.currentTime,.1),f.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),f.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),f.ctx.listener.upZ.setTargetAtTime(d,Howler.ctx.currentTime,.1)):f.ctx.listener.setOrientation(t,i,o,l,a,d);else return h;return f},Howl.prototype.init=function(t){return function(i){var o=this;return o._orientation=i.orientation||[1,0,0],o._stereo=i.stereo||null,o._pos=i.pos||null,o._pannerAttr={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:360,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:360,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:0,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:"inverse",maxDistance:typeof i.maxDistance<"u"?i.maxDistance:1e4,panningModel:typeof i.panningModel<"u"?i.panningModel:"HRTF",refDistance:typeof i.refDistance<"u"?i.refDistance:1,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:1},o._onstereo=i.onstereo?[{fn:i.onstereo}]:[],o._onpos=i.onpos?[{fn:i.onpos}]:[],o._onorientation=i.onorientation?[{fn:i.onorientation}]:[],t.call(this,i)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"stereo",action:function(){o.stereo(t,i)}}),o;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof i>"u")if(typeof t=="number")o._stereo=t,o._pos=[t,0,0];else return o._stereo;for(var a=o._getSoundIds(i),d=0;d<a.length;d++){var f=o._soundById(a[d]);if(f)if(typeof t=="number")f._stereo=t,f._pos=[t,0,0],f._node&&(f._pannerAttr.panningModel="equalpower",(!f._panner||!f._panner.pan)&&n(f,l),l==="spatial"?typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):f._panner.setPosition(t,0,0):f._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),o._emit("stereo",f._id);else return f._stereo}return o},Howl.prototype.pos=function(t,i,o,l){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,i,o,l)}}),a;if(i=typeof i!="number"?0:i,o=typeof o!="number"?-.5:o,typeof l>"u")if(typeof t=="number")a._pos=[t,i,o];else return a._pos;for(var d=a._getSoundIds(l),f=0;f<d.length;f++){var h=a._soundById(d[f]);if(h)if(typeof t=="number")h._pos=[t,i,o],h._node&&((!h._panner||h._panner.pan)&&n(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(i,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(o,Howler.ctx.currentTime)):h._panner.setPosition(t,i,o)),a._emit("pos",h._id);else return h._pos}return a},Howl.prototype.orientation=function(t,i,o,l){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,i,o,l)}}),a;if(i=typeof i!="number"?a._orientation[1]:i,o=typeof o!="number"?a._orientation[2]:o,typeof l>"u")if(typeof t=="number")a._orientation=[t,i,o];else return a._orientation;for(var d=a._getSoundIds(l),f=0;f<d.length;f++){var h=a._soundById(d[f]);if(h)if(typeof t=="number")h._orientation=[t,i,o],h._node&&(h._panner||(h._pos||(h._pos=a._pos||[0,0,-.5]),n(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(i,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(o,Howler.ctx.currentTime)):h._panner.setOrientation(t,i,o)),a._emit("orientation",h._id);else return h._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,i=arguments,o,l,a;if(!t._webAudio)return t;if(i.length===0)return t._pannerAttr;if(i.length===1)if(typeof i[0]=="object")o=i[0],typeof l>"u"&&(o.pannerAttr||(o.pannerAttr={coneInnerAngle:o.coneInnerAngle,coneOuterAngle:o.coneOuterAngle,coneOuterGain:o.coneOuterGain,distanceModel:o.distanceModel,maxDistance:o.maxDistance,refDistance:o.refDistance,rolloffFactor:o.rolloffFactor,panningModel:o.panningModel}),t._pannerAttr={coneInnerAngle:typeof o.pannerAttr.coneInnerAngle<"u"?o.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof o.pannerAttr.coneOuterAngle<"u"?o.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof o.pannerAttr.coneOuterGain<"u"?o.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof o.pannerAttr.distanceModel<"u"?o.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof o.pannerAttr.maxDistance<"u"?o.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof o.pannerAttr.refDistance<"u"?o.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof o.pannerAttr.rolloffFactor<"u"?o.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof o.pannerAttr.panningModel<"u"?o.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(i[0],10)),a?a._pannerAttr:t._pannerAttr;else i.length===2&&(o=i[0],l=parseInt(i[1],10));for(var d=t._getSoundIds(l),f=0;f<d.length;f++)if(a=t._soundById(d[f]),a){var h=a._pannerAttr;h={coneInnerAngle:typeof o.coneInnerAngle<"u"?o.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof o.coneOuterAngle<"u"?o.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof o.coneOuterGain<"u"?o.coneOuterGain:h.coneOuterGain,distanceModel:typeof o.distanceModel<"u"?o.distanceModel:h.distanceModel,maxDistance:typeof o.maxDistance<"u"?o.maxDistance:h.maxDistance,refDistance:typeof o.refDistance<"u"?o.refDistance:h.refDistance,rolloffFactor:typeof o.rolloffFactor<"u"?o.rolloffFactor:h.rolloffFactor,panningModel:typeof o.panningModel<"u"?o.panningModel:h.panningModel};var y=a._panner;y||(a._pos||(a._pos=t._pos||[0,0,-.5]),n(a,"spatial"),y=a._panner),y.coneInnerAngle=h.coneInnerAngle,y.coneOuterAngle=h.coneOuterAngle,y.coneOuterGain=h.coneOuterGain,y.distanceModel=h.distanceModel,y.maxDistance=h.maxDistance,y.refDistance=h.refDistance,y.rolloffFactor=h.rolloffFactor,y.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var i=this,o=i._parent;i._orientation=o._orientation,i._stereo=o._stereo,i._pos=o._pos,i._pannerAttr=o._pannerAttr,t.call(this),i._stereo?o.stereo(i._stereo):i._pos&&o.pos(i._pos[0],i._pos[1],i._pos[2],i._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var i=this,o=i._parent;return i._orientation=o._orientation,i._stereo=o._stereo,i._pos=o._pos,i._pannerAttr=o._pannerAttr,i._stereo?o.stereo(i._stereo):i._pos?o.pos(i._pos[0],i._pos[1],i._pos[2],i._id):i._panner&&(i._panner.disconnect(0),i._panner=void 0,o._refreshBuffer(i)),t.call(this)}}(Sound.prototype.reset);var n=function(t,i){i=i||"spatial",i==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(of)),of}var sD=iD();const oD="/flashcard/assets/soundsprite-64vFzmZt.mp3",U0={success:[0,1e3],error:[1e3,1e3]},aD=new sD.Howl({src:[oD],sprite:U0,volume:.5});function lD(){return T.useCallback(e=>{U0[e]?aD.play(e):console.warn(`Sound "${e}" not found in sprite`)},[])}const uD=function(e){const n=new SpeechSynthesisUtterance(e);n.lang="en-US",n.rate=1,n.pitch=1,speechSynthesis.speak(n)},cD=({flashcards:e,onReset:n})=>{const[t,i]=T.useState(0),[o,l]=T.useState(!1),[a,d]=T.useState([]),[f,h]=T.useState(""),[y,u]=T.useState(null),[p,g]=T.useState("bg-blue-100"),[b,z]=T.useState(!0),[x,w]=T.useState(!1),[_,C]=T.useState(!1),R=T.useRef(null),D=lD(),[P,$]=T.useState(1),[Y,K]=T.useState(0),L=T.useCallback(()=>{const X=e[t];if(_&&uD(X.front),!X)return;const F=X.back;h(F);const q=e.filter((E,ce)=>ce!==t).map(E=>E.back),j=Array.from(new Set(q)).filter(E=>E!==F),I=[];for(;I.length<2&&j.length>0;){const E=Math.floor(Math.random()*j.length);I.push(j[E]),j.splice(E,1)}for(;I.length<2;)I.push(`Another Option ${I.length+1}`);const H=tz([F,...I]);d(H),u(null),l(!1),g("bg-blue-100")},[e,t]);T.useEffect(()=>{L()},[t,e,L]);const J=T.useCallback(()=>{l(X=>!X)},[]),G=T.useCallback(()=>{R.current&&(clearTimeout(R.current),R.current=null),l(!1),u(null),g("bg-blue-100"),i(X=>{const F=(X+1)%e.length;return $(q=>q+1),F})},[e,e.length]),ee=T.useCallback(()=>{R.current&&(clearTimeout(R.current),R.current=null),l(!1),u(null),g("bg-blue-100"),i(X=>{const F=(X-1+e.length)%e.length;return $(q=>q+1),F})},[e.length]),B=T.useCallback((X,F)=>{y===null&&(u(F),l(!0),X===f?(x&&D("success"),g("bg-green-100"),K(q=>q+1),b&&(R.current=setTimeout(()=>{G()},1e3))):(x&&D("error"),g("bg-red-100"),b&&(R.current=setTimeout(()=>{G()},2e3))))},[y,f,b,G]);T.useEffect(()=>()=>{R.current&&clearTimeout(R.current)},[t]),T.useEffect(()=>{const X=F=>{switch(F.key){case"ArrowLeft":ee();break;case"ArrowRight":G();break;case"ArrowUp":case"ArrowDown":J();break;case"Enter":n();break;case"1":case"2":case"3":const q=parseInt(F.key)-1;a[q]&&B(a[q],q);break}};return window.addEventListener("keydown",X),()=>{window.removeEventListener("keydown",X)}},[ee,G,J,n,a,B]);const re=T.useCallback(()=>{y===null?($(1),K(0)):($(0),K(0)),R.current&&(clearTimeout(R.current),R.current=null),l(!1),u(null),g("bg-blue-100")},[y]);if(e.length===0)return N.jsxs("div",{className:"text-center p-6",children:[N.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"No flashcards loaded. Please add some to start!"}),N.jsx(rt,{onClick:n,children:"Start New Session"})]});const ue=e[t];return N.jsxs("div",{className:ln("w-full max-w-2xl p-6 flex flex-col items-center rounded-lg shadow-md transition-colors duration-300",p),children:[N.jsxs("div",{className:"flex items-center space-x-2 mb-4 self-end",children:[N.jsx(su,{id:"sound-mode",checked:x,onCheckedChange:w}),N.jsx(ou,{htmlFor:"sound-mode",children:"Sound"}),N.jsx(su,{id:"speech-mode",checked:_,onCheckedChange:C}),N.jsx(ou,{htmlFor:"speech-mode",children:"Speech"}),N.jsx(su,{id:"auto-next-mode",checked:b,onCheckedChange:z}),N.jsx(ou,{htmlFor:"auto-next-mode",children:"Auto-Next"})]}),N.jsx(rw,{className:"w-full h-80 flex flex-col justify-between items-center p-6 mb-6 relative perspective-1000 bg-white",children:N.jsxs("div",{className:ln("relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",o?"rotate-y-180":""),children:[N.jsx("div",{className:"absolute w-full h-full backface-hidden flex items-center justify-center text-center p-4",children:N.jsx(Vf,{className:"flex flex-col items-center justify-center h-full w-full",children:N.jsx(Ff,{className:"text-3xl font-bold",children:ue.front})})}),N.jsx("div",{className:"absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center text-center p-4",children:N.jsx(Vf,{className:"flex flex-col items-center justify-center h-full w-full",children:N.jsx(Ff,{className:"text-3xl font-bold",children:ue.back})})})]})},ue.id),N.jsxs("div",{className:"flex justify-center items-center space-x-4 mb-6 w-full",children:[N.jsx(rt,{onClick:ee,variant:"outline",size:"icon",children:N.jsx(K_,{className:"h-5 w-5"})}),N.jsxs(rt,{onClick:J,className:"flex-grow max-w-xs",children:[N.jsx(Q_,{className:"h-4 w-4 mr-2"})," Flip Card"]}),N.jsx(rt,{onClick:G,variant:"outline",size:"icon",children:N.jsx(G_,{className:"h-5 w-5"})})]}),N.jsx("div",{className:"grid grid-cols-1 gap-3 w-full max-w-xs mb-6",children:a.map((X,F)=>N.jsxs(rt,{onClick:()=>B(X,F),variant:y===F?X===f?"default":"destructive":"outline",className:ln("w-full py-3 text-lg",y!==null&&X===f&&"bg-green-500 hover:bg-green-600 text-white",y===F&&X!==f&&"bg-red-500 hover:bg-red-600 text-white",y!==null&&y!==F&&X!==f&&"opacity-50 cursor-not-allowed"),disabled:y!==null,children:[F+1,". ",X]},F))}),N.jsxs("div",{className:"text-lg text-gray-700 mb-6 flex justify-center items-center space-x-2",children:[N.jsxs("span",{children:["Cards Presented: ",P]}),N.jsx("span",{children:"|"}),N.jsxs("span",{children:["Correct Answers:"," ",N.jsx(rD.span,{initial:{scale:1,color:"#000000"},animate:{scale:[1,2.5,1],color:["#000000","#22C55E","#000000"]},transition:{duration:.7},className:"font-bold",children:Y},Y)]})]}),N.jsxs("div",{className:"flex space-x-4",children:[N.jsx(rt,{onClick:re,variant:"outline",children:"Reset Stats"}),N.jsx(rt,{onClick:n,variant:"secondary",children:"Start New Session"})]})]})},dD="/flashcard/assets/background-CIPNA0V-.jpeg",fD=()=>{const[e,n]=T.useState(null),t=o=>{const l=tz(o);n(l)},i=()=>{n(null)};return N.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 bg-no-repeat bg-cover",style:{backgroundImage:`url(${dD})`},children:[N.jsx("h1",{className:"text-4xl font-bold mb-8 text-center",children:"Flashcard Learner"}),e===null?N.jsx(hA,{onLoadCards:t}):N.jsx(cD,{flashcards:e,onReset:i}),N.jsx("div",{className:"mt-8",children:N.jsx(Nf,{to:"/specs",children:N.jsx(rt,{variant:"link",className:"text-blue-600 hover:text-blue-800",children:"View Application Specification"})})}),N.jsx(cA,{})]})},hD=()=>{const e=_a();return T.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),N.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:N.jsxs("div",{className:"text-center",children:[N.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),N.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),N.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})};function pD(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const mD=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,gD=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yD={};function zv(e,n){return(yD.jsx?gD:mD).test(e)}const kD=/[ \t\n\f\r]/g;function vD(e){return typeof e=="object"?e.type==="text"?wv(e.value):!1:wv(e)}function wv(e){return e.replace(kD,"")===""}class Aa{constructor(n,t,i){this.normal=t,this.property=n,i&&(this.space=i)}}Aa.prototype.normal={};Aa.prototype.property={};Aa.prototype.space=void 0;function $0(e,n){const t={},i={};for(const o of e)Object.assign(t,o.property),Object.assign(i,o.normal);return new Aa(t,i,n)}function lh(e){return e.toLowerCase()}class st{constructor(n,t){this.attribute=t,this.property=n}}st.prototype.attribute="";st.prototype.booleanish=!1;st.prototype.boolean=!1;st.prototype.commaOrSpaceSeparated=!1;st.prototype.commaSeparated=!1;st.prototype.defined=!1;st.prototype.mustUseProperty=!1;st.prototype.number=!1;st.prototype.overloadedBoolean=!1;st.prototype.property="";st.prototype.spaceSeparated=!1;st.prototype.space=void 0;let bD=0;const Ee=Ji(),cn=Ji(),uh=Ji(),se=Ji(),We=Ji(),Os=Ji(),dt=Ji();function Ji(){return 2**++bD}const ch=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ee,booleanish:cn,commaOrSpaceSeparated:dt,commaSeparated:Os,number:se,overloadedBoolean:uh,spaceSeparated:We},Symbol.toStringTag,{value:"Module"})),af=Object.keys(ch);class bp extends st{constructor(n,t,i,o){let l=-1;if(super(n,t),xv(this,"space",o),typeof i=="number")for(;++l<af.length;){const a=af[l];xv(this,af[l],(i&ch[a])===ch[a])}}}bp.prototype.defined=!0;function xv(e,n,t){t&&(e[n]=t)}function io(e){const n={},t={};for(const[i,o]of Object.entries(e.properties)){const l=new bp(i,e.transform(e.attributes||{},i),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(l.mustUseProperty=!0),n[i]=l,t[lh(i)]=i,t[lh(l.attribute)]=i}return new Aa(n,t,e.space)}const H0=io({properties:{ariaActiveDescendant:null,ariaAtomic:cn,ariaAutoComplete:null,ariaBusy:cn,ariaChecked:cn,ariaColCount:se,ariaColIndex:se,ariaColSpan:se,ariaControls:We,ariaCurrent:null,ariaDescribedBy:We,ariaDetails:null,ariaDisabled:cn,ariaDropEffect:We,ariaErrorMessage:null,ariaExpanded:cn,ariaFlowTo:We,ariaGrabbed:cn,ariaHasPopup:null,ariaHidden:cn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:We,ariaLevel:se,ariaLive:null,ariaModal:cn,ariaMultiLine:cn,ariaMultiSelectable:cn,ariaOrientation:null,ariaOwns:We,ariaPlaceholder:null,ariaPosInSet:se,ariaPressed:cn,ariaReadOnly:cn,ariaRelevant:null,ariaRequired:cn,ariaRoleDescription:We,ariaRowCount:se,ariaRowIndex:se,ariaRowSpan:se,ariaSelected:cn,ariaSetSize:se,ariaSort:null,ariaValueMax:se,ariaValueMin:se,ariaValueNow:se,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function W0(e,n){return n in e?e[n]:n}function q0(e,n){return W0(e,n.toLowerCase())}const zD=io({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Os,acceptCharset:We,accessKey:We,action:null,allow:null,allowFullScreen:Ee,allowPaymentRequest:Ee,allowUserMedia:Ee,alt:null,as:null,async:Ee,autoCapitalize:null,autoComplete:We,autoFocus:Ee,autoPlay:Ee,blocking:We,capture:null,charSet:null,checked:Ee,cite:null,className:We,cols:se,colSpan:null,content:null,contentEditable:cn,controls:Ee,controlsList:We,coords:se|Os,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ee,defer:Ee,dir:null,dirName:null,disabled:Ee,download:uh,draggable:cn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ee,formTarget:null,headers:We,height:se,hidden:uh,high:se,href:null,hrefLang:null,htmlFor:We,httpEquiv:We,id:null,imageSizes:null,imageSrcSet:null,inert:Ee,inputMode:null,integrity:null,is:null,isMap:Ee,itemId:null,itemProp:We,itemRef:We,itemScope:Ee,itemType:We,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ee,low:se,manifest:null,max:null,maxLength:se,media:null,method:null,min:null,minLength:se,multiple:Ee,muted:Ee,name:null,nonce:null,noModule:Ee,noValidate:Ee,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ee,optimum:se,pattern:null,ping:We,placeholder:null,playsInline:Ee,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ee,referrerPolicy:null,rel:We,required:Ee,reversed:Ee,rows:se,rowSpan:se,sandbox:We,scope:null,scoped:Ee,seamless:Ee,selected:Ee,shadowRootClonable:Ee,shadowRootDelegatesFocus:Ee,shadowRootMode:null,shape:null,size:se,sizes:null,slot:null,span:se,spellCheck:cn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:se,step:null,style:null,tabIndex:se,target:null,title:null,translate:null,type:null,typeMustMatch:Ee,useMap:null,value:cn,width:se,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:We,axis:null,background:null,bgColor:null,border:se,borderColor:null,bottomMargin:se,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ee,declare:Ee,event:null,face:null,frame:null,frameBorder:null,hSpace:se,leftMargin:se,link:null,longDesc:null,lowSrc:null,marginHeight:se,marginWidth:se,noResize:Ee,noHref:Ee,noShade:Ee,noWrap:Ee,object:null,profile:null,prompt:null,rev:null,rightMargin:se,rules:null,scheme:null,scrolling:cn,standby:null,summary:null,text:null,topMargin:se,valueType:null,version:null,vAlign:null,vLink:null,vSpace:se,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ee,disableRemotePlayback:Ee,prefix:null,property:null,results:se,security:null,unselectable:null},space:"html",transform:q0}),wD=io({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:dt,accentHeight:se,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:se,amplitude:se,arabicForm:null,ascent:se,attributeName:null,attributeType:null,azimuth:se,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:se,by:null,calcMode:null,capHeight:se,className:We,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:se,diffuseConstant:se,direction:null,display:null,dur:null,divisor:se,dominantBaseline:null,download:Ee,dx:null,dy:null,edgeMode:null,editable:null,elevation:se,enableBackground:null,end:null,event:null,exponent:se,externalResourcesRequired:null,fill:null,fillOpacity:se,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Os,g2:Os,glyphName:Os,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:se,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:se,horizOriginX:se,horizOriginY:se,id:null,ideographic:se,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:se,k:se,k1:se,k2:se,k3:se,k4:se,kernelMatrix:dt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:se,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:se,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:se,overlineThickness:se,paintOrder:null,panose1:null,path:null,pathLength:se,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:We,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:se,pointsAtY:se,pointsAtZ:se,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:dt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:dt,rev:dt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:dt,requiredFeatures:dt,requiredFonts:dt,requiredFormats:dt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:se,specularExponent:se,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:se,strikethroughThickness:se,string:null,stroke:null,strokeDashArray:dt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:se,strokeOpacity:se,strokeWidth:null,style:null,surfaceScale:se,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:dt,tabIndex:se,tableValues:null,target:null,targetX:se,targetY:se,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:dt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:se,underlineThickness:se,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:se,values:null,vAlphabetic:se,vMathematical:se,vectorEffect:null,vHanging:se,vIdeographic:se,version:null,vertAdvY:se,vertOriginX:se,vertOriginY:se,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:se,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:W0}),K0=io({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),G0=io({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:q0}),Q0=io({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),xD={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},SD=/[A-Z]/g,Sv=/-[a-z]/g,_D=/^data[-\w.:]+$/i;function CD(e,n){const t=lh(n);let i=n,o=st;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&_D.test(n)){if(n.charAt(4)==="-"){const l=n.slice(5).replace(Sv,jD);i="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=n.slice(4);if(!Sv.test(l)){let a=l.replace(SD,TD);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}o=bp}return new o(i,n)}function TD(e){return"-"+e.toLowerCase()}function jD(e){return e.charAt(1).toUpperCase()}const ED=$0([H0,zD,K0,G0,Q0],"html"),zp=$0([H0,wD,K0,G0,Q0],"svg");function AD(e){return e.join(" ").trim()}var Cs={},lf,_v;function PD(){if(_v)return lf;_v=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,t=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,a=/^[;\s]*/,d=/^\s+|\s+$/g,f=`
`,h="/",y="*",u="",p="comment",g="declaration";lf=function(z,x){if(typeof z!="string")throw new TypeError("First argument must be a string");if(!z)return[];x=x||{};var w=1,_=1;function C(ee){var B=ee.match(n);B&&(w+=B.length);var re=ee.lastIndexOf(f);_=~re?ee.length-re:_+ee.length}function R(){var ee={line:w,column:_};return function(B){return B.position=new D(ee),Y(),B}}function D(ee){this.start=ee,this.end={line:w,column:_},this.source=x.source}D.prototype.content=z;function P(ee){var B=new Error(x.source+":"+w+":"+_+": "+ee);if(B.reason=ee,B.filename=x.source,B.line=w,B.column=_,B.source=z,!x.silent)throw B}function $(ee){var B=ee.exec(z);if(B){var re=B[0];return C(re),z=z.slice(re.length),B}}function Y(){$(t)}function K(ee){var B;for(ee=ee||[];B=L();)B!==!1&&ee.push(B);return ee}function L(){var ee=R();if(!(h!=z.charAt(0)||y!=z.charAt(1))){for(var B=2;u!=z.charAt(B)&&(y!=z.charAt(B)||h!=z.charAt(B+1));)++B;if(B+=2,u===z.charAt(B-1))return P("End of comment missing");var re=z.slice(2,B-2);return _+=2,C(re),z=z.slice(B),_+=2,ee({type:p,comment:re})}}function J(){var ee=R(),B=$(i);if(B){if(L(),!$(o))return P("property missing ':'");var re=$(l),ue=ee({type:g,property:b(B[0].replace(e,u)),value:re?b(re[0].replace(e,u)):u});return $(a),ue}}function G(){var ee=[];K(ee);for(var B;B=J();)B!==!1&&(ee.push(B),K(ee));return ee}return Y(),G()};function b(z){return z?z.replace(d,u):u}return lf}var Cv;function RD(){if(Cv)return Cs;Cv=1;var e=Cs&&Cs.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Cs,"__esModule",{value:!0}),Cs.default=t;var n=e(PD());function t(i,o){var l=null;if(!i||typeof i!="string")return l;var a=(0,n.default)(i),d=typeof o=="function";return a.forEach(function(f){if(f.type==="declaration"){var h=f.property,y=f.value;d?o(h,y,f):y&&(l=l||{},l[h]=y)}}),l}return Cs}var qo={},Tv;function ID(){if(Tv)return qo;Tv=1,Object.defineProperty(qo,"__esModule",{value:!0}),qo.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,t=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,l=function(h){return!h||t.test(h)||e.test(h)},a=function(h,y){return y.toUpperCase()},d=function(h,y){return"".concat(y,"-")},f=function(h,y){return y===void 0&&(y={}),l(h)?h:(h=h.toLowerCase(),y.reactCompat?h=h.replace(o,d):h=h.replace(i,d),h.replace(n,a))};return qo.camelCase=f,qo}var Ko,jv;function MD(){if(jv)return Ko;jv=1;var e=Ko&&Ko.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},n=e(RD()),t=ID();function i(o,l){var a={};return!o||typeof o!="string"||(0,n.default)(o,function(d,f){d&&f&&(a[(0,t.camelCase)(d,l)]=f)}),a}return i.default=i,Ko=i,Ko}var DD=MD();const LD=ju(DD),Y0=X0("end"),wp=X0("start");function X0(e){return n;function n(t){const i=t&&t.position&&t.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function OD(e){const n=wp(e),t=Y0(e);if(n&&t)return{start:n,end:t}}function ra(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ev(e.position):"start"in e||"end"in e?Ev(e):"line"in e||"column"in e?dh(e):""}function dh(e){return Av(e&&e.line)+":"+Av(e&&e.column)}function Ev(e){return dh(e&&e.start)+"-"+dh(e&&e.end)}function Av(e){return e&&typeof e=="number"?e:1}class Dn extends Error{constructor(n,t,i){super(),typeof t=="string"&&(i=t,t=void 0);let o="",l={},a=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?o=n:!l.cause&&n&&(a=!0,o=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof i=="string"){const f=i.indexOf(":");f===-1?l.ruleId=i:(l.source=i.slice(0,f),l.ruleId=i.slice(f+1))}if(!l.place&&l.ancestors&&l.ancestors){const f=l.ancestors[l.ancestors.length-1];f&&(l.place=f.position)}const d=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=d?d.line:void 0,this.name=ra(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=a&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Dn.prototype.file="";Dn.prototype.name="";Dn.prototype.reason="";Dn.prototype.message="";Dn.prototype.stack="";Dn.prototype.column=void 0;Dn.prototype.line=void 0;Dn.prototype.ancestors=void 0;Dn.prototype.cause=void 0;Dn.prototype.fatal=void 0;Dn.prototype.place=void 0;Dn.prototype.ruleId=void 0;Dn.prototype.source=void 0;const xp={}.hasOwnProperty,ND=new Map,FD=/[A-Z]/g,VD=new Set(["table","tbody","thead","tfoot","tr"]),BD=new Set(["td","th"]),Z0="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function UD(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let i;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=YD(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=QD(t,n.jsx,n.jsxs)}const o={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:i,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?zp:ED,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},l=J0(o,e,void 0);return l&&typeof l!="string"?l:o.create(e,o.Fragment,{children:l||void 0},void 0)}function J0(e,n,t){if(n.type==="element")return $D(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return HD(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return qD(e,n,t);if(n.type==="mdxjsEsm")return WD(e,n);if(n.type==="root")return KD(e,n,t);if(n.type==="text")return GD(e,n)}function $D(e,n,t){const i=e.schema;let o=i;n.tagName.toLowerCase()==="svg"&&i.space==="html"&&(o=zp,e.schema=o),e.ancestors.push(n);const l=nx(e,n.tagName,!1),a=XD(e,n);let d=_p(e,n);return VD.has(n.tagName)&&(d=d.filter(function(f){return typeof f=="string"?!vD(f):!0})),ex(e,a,l,n),Sp(a,d),e.ancestors.pop(),e.schema=i,e.create(n,l,a,t)}function HD(e,n){if(n.data&&n.data.estree&&e.evaluater){const i=n.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}ka(e,n.position)}function WD(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);ka(e,n.position)}function qD(e,n,t){const i=e.schema;let o=i;n.name==="svg"&&i.space==="html"&&(o=zp,e.schema=o),e.ancestors.push(n);const l=n.name===null?e.Fragment:nx(e,n.name,!0),a=ZD(e,n),d=_p(e,n);return ex(e,a,l,n),Sp(a,d),e.ancestors.pop(),e.schema=i,e.create(n,l,a,t)}function KD(e,n,t){const i={};return Sp(i,_p(e,n)),e.create(n,e.Fragment,i,t)}function GD(e,n){return n.value}function ex(e,n,t,i){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=i)}function Sp(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function QD(e,n,t){return i;function i(o,l,a,d){const h=Array.isArray(a.children)?t:n;return d?h(l,a,d):h(l,a)}}function YD(e,n){return t;function t(i,o,l,a){const d=Array.isArray(l.children),f=wp(i);return n(o,l,a,d,{columnNumber:f?f.column-1:void 0,fileName:e,lineNumber:f?f.line:void 0},void 0)}}function XD(e,n){const t={};let i,o;for(o in n.properties)if(o!=="children"&&xp.call(n.properties,o)){const l=JD(e,o,n.properties[o]);if(l){const[a,d]=l;e.tableCellAlignToStyle&&a==="align"&&typeof d=="string"&&BD.has(n.tagName)?i=d:t[a]=d}}if(i){const l=t.style||(t.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return t}function ZD(e,n){const t={};for(const i of n.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const l=i.data.estree.body[0];l.type;const a=l.expression;a.type;const d=a.properties[0];d.type,Object.assign(t,e.evaluater.evaluateExpression(d.argument))}else ka(e,n.position);else{const o=i.name;let l;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const d=i.value.data.estree.body[0];d.type,l=e.evaluater.evaluateExpression(d.expression)}else ka(e,n.position);else l=i.value===null?!0:i.value;t[o]=l}return t}function _p(e,n){const t=[];let i=-1;const o=e.passKeys?new Map:ND;for(;++i<n.children.length;){const l=n.children[i];let a;if(e.passKeys){const f=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(f){const h=o.get(f)||0;a=f+"-"+h,o.set(f,h+1)}}const d=J0(e,l,a);d!==void 0&&t.push(d)}return t}function JD(e,n,t){const i=CD(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=i.commaSeparated?pD(t):AD(t)),i.property==="style"){let o=typeof t=="object"?t:eL(e,String(t));return e.stylePropertyNameCase==="css"&&(o=nL(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&i.space?xD[i.property]||i.property:i.attribute,t]}}function eL(e,n){try{return LD(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const i=t,o=new Dn("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=e.filePath||void 0,o.url=Z0+"#cannot-parse-style-attribute",o}}function nx(e,n,t){let i;if(!t)i={type:"Literal",value:n};else if(n.includes(".")){const o=n.split(".");let l=-1,a;for(;++l<o.length;){const d=zv(o[l])?{type:"Identifier",name:o[l]}:{type:"Literal",value:o[l]};a=a?{type:"MemberExpression",object:a,property:d,computed:!!(l&&d.type==="Literal"),optional:!1}:d}i=a}else i=zv(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(i.type==="Literal"){const o=i.value;return xp.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(i);ka(e)}function ka(e,n){const t=new Dn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Z0+"#cannot-handle-mdx-estrees-without-createevaluater",t}function nL(e){const n={};let t;for(t in e)xp.call(e,t)&&(n[tL(t)]=e[t]);return n}function tL(e){let n=e.replace(FD,rL);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function rL(e){return"-"+e.toLowerCase()}const uf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},iL={};function Cp(e,n){const t=iL,i=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,o=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return tx(e,i,o)}function tx(e,n,t){if(sL(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Pv(e.children,n,t)}return Array.isArray(e)?Pv(e,n,t):""}function Pv(e,n,t){const i=[];let o=-1;for(;++o<e.length;)i[o]=tx(e[o],n,t);return i.join("")}function sL(e){return!!(e&&typeof e=="object")}const Rv=document.createElement("i");function Tp(e){const n="&"+e+";";Rv.innerHTML=n;const t=Rv.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function pt(e,n,t,i){const o=e.length;let l=0,a;if(n<0?n=-n>o?0:o+n:n=n>o?o:n,t=t>0?t:0,i.length<1e4)a=Array.from(i),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);l<i.length;)a=i.slice(l,l+1e4),a.unshift(n,0),e.splice(...a),l+=1e4,n+=1e4}function Tt(e,n){return e.length>0?(pt(e,e.length,0,n),e):n}const Iv={}.hasOwnProperty;function rx(e){const n={};let t=-1;for(;++t<e.length;)oL(n,e[t]);return n}function oL(e,n){let t;for(t in n){const o=(Iv.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let a;if(l)for(a in l){Iv.call(o,a)||(o[a]=[]);const d=l[a];aL(o[a],Array.isArray(d)?d:d?[d]:[])}}}function aL(e,n){let t=-1;const i=[];for(;++t<n.length;)(n[t].add==="after"?e:i).push(n[t]);pt(e,0,0,i)}function ix(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function qt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Hn=zi(/[A-Za-z]/),Mn=zi(/[\dA-Za-z]/),lL=zi(/[#-'*+\--9=?A-Z^-~]/);function Su(e){return e!==null&&(e<32||e===127)}const fh=zi(/\d/),uL=zi(/[\dA-Fa-f]/),cL=zi(/[!-/:-@[-`{-~]/);function ze(e){return e!==null&&e<-2}function $e(e){return e!==null&&(e<0||e===32)}function Me(e){return e===-2||e===-1||e===32}const Wu=zi(new RegExp("\\p{P}|\\p{S}","u")),Qi=zi(/\s/);function zi(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function so(e){const n=[];let t=-1,i=0,o=0;for(;++t<e.length;){const l=e.charCodeAt(t);let a="";if(l===37&&Mn(e.charCodeAt(t+1))&&Mn(e.charCodeAt(t+2)))o=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(a=String.fromCharCode(l));else if(l>55295&&l<57344){const d=e.charCodeAt(t+1);l<56320&&d>56319&&d<57344?(a=String.fromCharCode(l,d),o=1):a="�"}else a=String.fromCharCode(l);a&&(n.push(e.slice(i,t),encodeURIComponent(a)),i=t+o+1,a=""),o&&(t+=o,o=0)}return n.join("")+e.slice(i)}function De(e,n,t,i){const o=i?i-1:Number.POSITIVE_INFINITY;let l=0;return a;function a(f){return Me(f)?(e.enter(t),d(f)):n(f)}function d(f){return Me(f)&&l++<o?(e.consume(f),d):(e.exit(t),n(f))}}const dL={tokenize:fL};function fL(e){const n=e.attempt(this.parser.constructs.contentInitial,i,o);let t;return n;function i(d){if(d===null){e.consume(d);return}return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),De(e,n,"linePrefix")}function o(d){return e.enter("paragraph"),l(d)}function l(d){const f=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=f),t=f,a(d)}function a(d){if(d===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(d);return}return ze(d)?(e.consume(d),e.exit("chunkText"),l):(e.consume(d),a)}}const hL={tokenize:pL},Mv={tokenize:mL};function pL(e){const n=this,t=[];let i=0,o,l,a;return d;function d(C){if(i<t.length){const R=t[i];return n.containerState=R[1],e.attempt(R[0].continuation,f,h)(C)}return h(C)}function f(C){if(i++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&_();const R=n.events.length;let D=R,P;for(;D--;)if(n.events[D][0]==="exit"&&n.events[D][1].type==="chunkFlow"){P=n.events[D][1].end;break}w(i);let $=R;for(;$<n.events.length;)n.events[$][1].end={...P},$++;return pt(n.events,D+1,0,n.events.slice(R)),n.events.length=$,h(C)}return d(C)}function h(C){if(i===t.length){if(!o)return p(C);if(o.currentConstruct&&o.currentConstruct.concrete)return b(C);n.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Mv,y,u)(C)}function y(C){return o&&_(),w(i),p(C)}function u(C){return n.parser.lazy[n.now().line]=i!==t.length,a=n.now().offset,b(C)}function p(C){return n.containerState={},e.attempt(Mv,g,b)(C)}function g(C){return i++,t.push([n.currentConstruct,n.containerState]),p(C)}function b(C){if(C===null){o&&_(),w(0),e.consume(C);return}return o=o||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:l}),z(C)}function z(C){if(C===null){x(e.exit("chunkFlow"),!0),w(0),e.consume(C);return}return ze(C)?(e.consume(C),x(e.exit("chunkFlow")),i=0,n.interrupt=void 0,d):(e.consume(C),z)}function x(C,R){const D=n.sliceStream(C);if(R&&D.push(null),C.previous=l,l&&(l.next=C),l=C,o.defineSkip(C.start),o.write(D),n.parser.lazy[C.start.line]){let P=o.events.length;for(;P--;)if(o.events[P][1].start.offset<a&&(!o.events[P][1].end||o.events[P][1].end.offset>a))return;const $=n.events.length;let Y=$,K,L;for(;Y--;)if(n.events[Y][0]==="exit"&&n.events[Y][1].type==="chunkFlow"){if(K){L=n.events[Y][1].end;break}K=!0}for(w(i),P=$;P<n.events.length;)n.events[P][1].end={...L},P++;pt(n.events,Y+1,0,n.events.slice($)),n.events.length=P}}function w(C){let R=t.length;for(;R-- >C;){const D=t[R];n.containerState=D[1],D[0].exit.call(n,e)}t.length=C}function _(){o.write([null]),l=void 0,o=void 0,n.containerState._closeFlow=void 0}}function mL(e,n,t){return De(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Xs(e){if(e===null||$e(e)||Qi(e))return 1;if(Wu(e))return 2}function qu(e,n,t){const i=[];let o=-1;for(;++o<e.length;){const l=e[o].resolveAll;l&&!i.includes(l)&&(n=l(n,t),i.push(l))}return n}const hh={name:"attention",resolveAll:gL,tokenize:yL};function gL(e,n){let t=-1,i,o,l,a,d,f,h,y;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(i=t;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;f=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const u={...e[i][1].end},p={...e[t][1].start};Dv(u,-f),Dv(p,f),a={type:f>1?"strongSequence":"emphasisSequence",start:u,end:{...e[i][1].end}},d={type:f>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:p},l={type:f>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},o={type:f>1?"strong":"emphasis",start:{...a.start},end:{...d.end}},e[i][1].end={...a.start},e[t][1].start={...d.end},h=[],e[i][1].end.offset-e[i][1].start.offset&&(h=Tt(h,[["enter",e[i][1],n],["exit",e[i][1],n]])),h=Tt(h,[["enter",o,n],["enter",a,n],["exit",a,n],["enter",l,n]]),h=Tt(h,qu(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),h=Tt(h,[["exit",l,n],["enter",d,n],["exit",d,n],["exit",o,n]]),e[t][1].end.offset-e[t][1].start.offset?(y=2,h=Tt(h,[["enter",e[t][1],n],["exit",e[t][1],n]])):y=0,pt(e,i-1,t-i+3,h),t=i+h.length-y-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function yL(e,n){const t=this.parser.constructs.attentionMarkers.null,i=this.previous,o=Xs(i);let l;return a;function a(f){return l=f,e.enter("attentionSequence"),d(f)}function d(f){if(f===l)return e.consume(f),d;const h=e.exit("attentionSequence"),y=Xs(f),u=!y||y===2&&o||t.includes(f),p=!o||o===2&&y||t.includes(i);return h._open=!!(l===42?u:u&&(o||!p)),h._close=!!(l===42?p:p&&(y||!u)),n(f)}}function Dv(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const kL={name:"autolink",tokenize:vL};function vL(e,n,t){let i=0;return o;function o(g){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(g){return Hn(g)?(e.consume(g),a):g===64?t(g):h(g)}function a(g){return g===43||g===45||g===46||Mn(g)?(i=1,d(g)):h(g)}function d(g){return g===58?(e.consume(g),i=0,f):(g===43||g===45||g===46||Mn(g))&&i++<32?(e.consume(g),d):(i=0,h(g))}function f(g){return g===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),n):g===null||g===32||g===60||Su(g)?t(g):(e.consume(g),f)}function h(g){return g===64?(e.consume(g),y):lL(g)?(e.consume(g),h):t(g)}function y(g){return Mn(g)?u(g):t(g)}function u(g){return g===46?(e.consume(g),i=0,y):g===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),n):p(g)}function p(g){if((g===45||Mn(g))&&i++<63){const b=g===45?p:u;return e.consume(g),b}return t(g)}}const Pa={partial:!0,tokenize:bL};function bL(e,n,t){return i;function i(l){return Me(l)?De(e,o,"linePrefix")(l):o(l)}function o(l){return l===null||ze(l)?n(l):t(l)}}const sx={continuation:{tokenize:wL},exit:xL,name:"blockQuote",tokenize:zL};function zL(e,n,t){const i=this;return o;function o(a){if(a===62){const d=i.containerState;return d.open||(e.enter("blockQuote",{_container:!0}),d.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),l}return t(a)}function l(a){return Me(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function wL(e,n,t){const i=this;return o;function o(a){return Me(a)?De(e,l,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):l(a)}function l(a){return e.attempt(sx,n,t)(a)}}function xL(e){e.exit("blockQuote")}const ox={name:"characterEscape",tokenize:SL};function SL(e,n,t){return i;function i(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),o}function o(l){return cL(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const ax={name:"characterReference",tokenize:_L};function _L(e,n,t){const i=this;let o=0,l,a;return d;function d(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),f}function f(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),h):(e.enter("characterReferenceValue"),l=31,a=Mn,y(u))}function h(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,a=uL,y):(e.enter("characterReferenceValue"),l=7,a=fh,y(u))}function y(u){if(u===59&&o){const p=e.exit("characterReferenceValue");return a===Mn&&!Tp(i.sliceSerialize(p))?t(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(u)&&o++<l?(e.consume(u),y):t(u)}}const Lv={partial:!0,tokenize:TL},Ov={concrete:!0,name:"codeFenced",tokenize:CL};function CL(e,n,t){const i=this,o={partial:!0,tokenize:D};let l=0,a=0,d;return f;function f(P){return h(P)}function h(P){const $=i.events[i.events.length-1];return l=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,d=P,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(P)}function y(P){return P===d?(a++,e.consume(P),y):a<3?t(P):(e.exit("codeFencedFenceSequence"),Me(P)?De(e,u,"whitespace")(P):u(P))}function u(P){return P===null||ze(P)?(e.exit("codeFencedFence"),i.interrupt?n(P):e.check(Lv,z,R)(P)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(P))}function p(P){return P===null||ze(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(P)):Me(P)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),De(e,g,"whitespace")(P)):P===96&&P===d?t(P):(e.consume(P),p)}function g(P){return P===null||ze(P)?u(P):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),b(P))}function b(P){return P===null||ze(P)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(P)):P===96&&P===d?t(P):(e.consume(P),b)}function z(P){return e.attempt(o,R,x)(P)}function x(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),w}function w(P){return l>0&&Me(P)?De(e,_,"linePrefix",l+1)(P):_(P)}function _(P){return P===null||ze(P)?e.check(Lv,z,R)(P):(e.enter("codeFlowValue"),C(P))}function C(P){return P===null||ze(P)?(e.exit("codeFlowValue"),_(P)):(e.consume(P),C)}function R(P){return e.exit("codeFenced"),n(P)}function D(P,$,Y){let K=0;return L;function L(re){return P.enter("lineEnding"),P.consume(re),P.exit("lineEnding"),J}function J(re){return P.enter("codeFencedFence"),Me(re)?De(P,G,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(re):G(re)}function G(re){return re===d?(P.enter("codeFencedFenceSequence"),ee(re)):Y(re)}function ee(re){return re===d?(K++,P.consume(re),ee):K>=a?(P.exit("codeFencedFenceSequence"),Me(re)?De(P,B,"whitespace")(re):B(re)):Y(re)}function B(re){return re===null||ze(re)?(P.exit("codeFencedFence"),$(re)):Y(re)}}}function TL(e,n,t){const i=this;return o;function o(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),l)}function l(a){return i.parser.lazy[i.now().line]?t(a):n(a)}}const cf={name:"codeIndented",tokenize:EL},jL={partial:!0,tokenize:AL};function EL(e,n,t){const i=this;return o;function o(h){return e.enter("codeIndented"),De(e,l,"linePrefix",5)(h)}function l(h){const y=i.events[i.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?a(h):t(h)}function a(h){return h===null?f(h):ze(h)?e.attempt(jL,a,f)(h):(e.enter("codeFlowValue"),d(h))}function d(h){return h===null||ze(h)?(e.exit("codeFlowValue"),a(h)):(e.consume(h),d)}function f(h){return e.exit("codeIndented"),n(h)}}function AL(e,n,t){const i=this;return o;function o(a){return i.parser.lazy[i.now().line]?t(a):ze(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):De(e,l,"linePrefix",5)(a)}function l(a){const d=i.events[i.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?n(a):ze(a)?o(a):t(a)}}const PL={name:"codeText",previous:IL,resolve:RL,tokenize:ML};function RL(e){let n=e.length-4,t=3,i,o;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(i=t;++i<n;)if(e[i][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(i=t-1,n++;++i<=n;)o===void 0?i!==n&&e[i][1].type!=="lineEnding"&&(o=i):(i===n||e[i][1].type==="lineEnding")&&(e[o][1].type="codeTextData",i!==o+2&&(e[o][1].end=e[i-1][1].end,e.splice(o+2,i-o-2),n-=i-o-2,i=o+2),o=void 0);return e}function IL(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ML(e,n,t){let i=0,o,l;return a;function a(u){return e.enter("codeText"),e.enter("codeTextSequence"),d(u)}function d(u){return u===96?(e.consume(u),i++,d):(e.exit("codeTextSequence"),f(u))}function f(u){return u===null?t(u):u===32?(e.enter("space"),e.consume(u),e.exit("space"),f):u===96?(l=e.enter("codeTextSequence"),o=0,y(u)):ze(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),f):(e.enter("codeTextData"),h(u))}function h(u){return u===null||u===32||u===96||ze(u)?(e.exit("codeTextData"),f(u)):(e.consume(u),h)}function y(u){return u===96?(e.consume(u),o++,y):o===i?(e.exit("codeTextSequence"),e.exit("codeText"),n(u)):(l.type="codeTextData",h(u))}}class DL{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const i=t??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(n,i):n>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(n,t,i){const o=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return i&&Go(this.left,i),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Go(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Go(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Go(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Go(this.left,t.reverse())}}}function Go(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function lx(e){const n={};let t=-1,i,o,l,a,d,f,h;const y=new DL(e);for(;++t<y.length;){for(;t in n;)t=n[t];if(i=y.get(t),t&&i[1].type==="chunkFlow"&&y.get(t-1)[1].type==="listItemPrefix"&&(f=i[1]._tokenizer.events,l=0,l<f.length&&f[l][1].type==="lineEndingBlank"&&(l+=2),l<f.length&&f[l][1].type==="content"))for(;++l<f.length&&f[l][1].type!=="content";)f[l][1].type==="chunkText"&&(f[l][1]._isInFirstContentOfListItem=!0,l++);if(i[0]==="enter")i[1].contentType&&(Object.assign(n,LL(y,t)),t=n[t],h=!0);else if(i[1]._container){for(l=t,o=void 0;l--;)if(a=y.get(l),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(o&&(y.get(o)[1].type="lineEndingBlank"),a[1].type="lineEnding",o=l);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;o&&(i[1].end={...y.get(o)[1].start},d=y.slice(o,t),d.unshift(i),y.splice(o,t-o+1,d))}}return pt(e,0,Number.POSITIVE_INFINITY,y.slice(0)),!h}function LL(e,n){const t=e.get(n)[1],i=e.get(n)[2];let o=n-1;const l=[];let a=t._tokenizer;a||(a=i.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const d=a.events,f=[],h={};let y,u,p=-1,g=t,b=0,z=0;const x=[z];for(;g;){for(;e.get(++o)[1]!==g;);l.push(o),g._tokenizer||(y=i.sliceStream(g),g.next||y.push(null),u&&a.defineSkip(g.start),g._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(y),g._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),u=g,g=g.next}for(g=t;++p<d.length;)d[p][0]==="exit"&&d[p-1][0]==="enter"&&d[p][1].type===d[p-1][1].type&&d[p][1].start.line!==d[p][1].end.line&&(z=p+1,x.push(z),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(a.events=[],g?(g._tokenizer=void 0,g.previous=void 0):x.pop(),p=x.length;p--;){const w=d.slice(x[p],x[p+1]),_=l.pop();f.push([_,_+w.length-1]),e.splice(_,2,w)}for(f.reverse(),p=-1;++p<f.length;)h[b+f[p][0]]=b+f[p][1],b+=f[p][1]-f[p][0]-1;return h}const OL={resolve:FL,tokenize:VL},NL={partial:!0,tokenize:BL};function FL(e){return lx(e),e}function VL(e,n){let t;return i;function i(d){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),o(d)}function o(d){return d===null?l(d):ze(d)?e.check(NL,a,l)(d):(e.consume(d),o)}function l(d){return e.exit("chunkContent"),e.exit("content"),n(d)}function a(d){return e.consume(d),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,o}}function BL(e,n,t){const i=this;return o;function o(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),De(e,l,"linePrefix")}function l(a){if(a===null||ze(a))return t(a);const d=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?n(a):e.interrupt(i.parser.constructs.flow,t,n)(a)}}function ux(e,n,t,i,o,l,a,d,f){const h=f||Number.POSITIVE_INFINITY;let y=0;return u;function u(w){return w===60?(e.enter(i),e.enter(o),e.enter(l),e.consume(w),e.exit(l),p):w===null||w===32||w===41||Su(w)?t(w):(e.enter(i),e.enter(a),e.enter(d),e.enter("chunkString",{contentType:"string"}),z(w))}function p(w){return w===62?(e.enter(l),e.consume(w),e.exit(l),e.exit(o),e.exit(i),n):(e.enter(d),e.enter("chunkString",{contentType:"string"}),g(w))}function g(w){return w===62?(e.exit("chunkString"),e.exit(d),p(w)):w===null||w===60||ze(w)?t(w):(e.consume(w),w===92?b:g)}function b(w){return w===60||w===62||w===92?(e.consume(w),g):g(w)}function z(w){return!y&&(w===null||w===41||$e(w))?(e.exit("chunkString"),e.exit(d),e.exit(a),e.exit(i),n(w)):y<h&&w===40?(e.consume(w),y++,z):w===41?(e.consume(w),y--,z):w===null||w===32||w===40||Su(w)?t(w):(e.consume(w),w===92?x:z)}function x(w){return w===40||w===41||w===92?(e.consume(w),z):z(w)}}function cx(e,n,t,i,o,l){const a=this;let d=0,f;return h;function h(g){return e.enter(i),e.enter(o),e.consume(g),e.exit(o),e.enter(l),y}function y(g){return d>999||g===null||g===91||g===93&&!f||g===94&&!d&&"_hiddenFootnoteSupport"in a.parser.constructs?t(g):g===93?(e.exit(l),e.enter(o),e.consume(g),e.exit(o),e.exit(i),n):ze(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),u(g))}function u(g){return g===null||g===91||g===93||ze(g)||d++>999?(e.exit("chunkString"),y(g)):(e.consume(g),f||(f=!Me(g)),g===92?p:u)}function p(g){return g===91||g===92||g===93?(e.consume(g),d++,u):u(g)}}function dx(e,n,t,i,o,l){let a;return d;function d(p){return p===34||p===39||p===40?(e.enter(i),e.enter(o),e.consume(p),e.exit(o),a=p===40?41:p,f):t(p)}function f(p){return p===a?(e.enter(o),e.consume(p),e.exit(o),e.exit(i),n):(e.enter(l),h(p))}function h(p){return p===a?(e.exit(l),f(a)):p===null?t(p):ze(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),De(e,h,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(p))}function y(p){return p===a||p===null||ze(p)?(e.exit("chunkString"),h(p)):(e.consume(p),p===92?u:y)}function u(p){return p===a||p===92?(e.consume(p),y):y(p)}}function ia(e,n){let t;return i;function i(o){return ze(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t=!0,i):Me(o)?De(e,i,t?"linePrefix":"lineSuffix")(o):n(o)}}const UL={name:"definition",tokenize:HL},$L={partial:!0,tokenize:WL};function HL(e,n,t){const i=this;let o;return l;function l(g){return e.enter("definition"),a(g)}function a(g){return cx.call(i,e,d,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function d(g){return o=qt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),f):t(g)}function f(g){return $e(g)?ia(e,h)(g):h(g)}function h(g){return ux(e,y,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function y(g){return e.attempt($L,u,u)(g)}function u(g){return Me(g)?De(e,p,"whitespace")(g):p(g)}function p(g){return g===null||ze(g)?(e.exit("definition"),i.parser.defined.push(o),n(g)):t(g)}}function WL(e,n,t){return i;function i(d){return $e(d)?ia(e,o)(d):t(d)}function o(d){return dx(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function l(d){return Me(d)?De(e,a,"whitespace")(d):a(d)}function a(d){return d===null||ze(d)?n(d):t(d)}}const qL={name:"hardBreakEscape",tokenize:KL};function KL(e,n,t){return i;function i(l){return e.enter("hardBreakEscape"),e.consume(l),o}function o(l){return ze(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const GL={name:"headingAtx",resolve:QL,tokenize:YL};function QL(e,n){let t=e.length-2,i=3,o,l;return e[i][1].type==="whitespace"&&(i+=2),t-2>i&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(i===t-1||t-4>i&&e[t-2][1].type==="whitespace")&&(t-=i+1===t?2:4),t>i&&(o={type:"atxHeadingText",start:e[i][1].start,end:e[t][1].end},l={type:"chunkText",start:e[i][1].start,end:e[t][1].end,contentType:"text"},pt(e,i,t-i+1,[["enter",o,n],["enter",l,n],["exit",l,n],["exit",o,n]])),e}function YL(e,n,t){let i=0;return o;function o(y){return e.enter("atxHeading"),l(y)}function l(y){return e.enter("atxHeadingSequence"),a(y)}function a(y){return y===35&&i++<6?(e.consume(y),a):y===null||$e(y)?(e.exit("atxHeadingSequence"),d(y)):t(y)}function d(y){return y===35?(e.enter("atxHeadingSequence"),f(y)):y===null||ze(y)?(e.exit("atxHeading"),n(y)):Me(y)?De(e,d,"whitespace")(y):(e.enter("atxHeadingText"),h(y))}function f(y){return y===35?(e.consume(y),f):(e.exit("atxHeadingSequence"),d(y))}function h(y){return y===null||y===35||$e(y)?(e.exit("atxHeadingText"),d(y)):(e.consume(y),h)}}const XL=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Nv=["pre","script","style","textarea"],ZL={concrete:!0,name:"htmlFlow",resolveTo:n2,tokenize:t2},JL={partial:!0,tokenize:i2},e2={partial:!0,tokenize:r2};function n2(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function t2(e,n,t){const i=this;let o,l,a,d,f;return h;function h(E){return y(E)}function y(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),u}function u(E){return E===33?(e.consume(E),p):E===47?(e.consume(E),l=!0,z):E===63?(e.consume(E),o=3,i.interrupt?n:j):Hn(E)?(e.consume(E),a=String.fromCharCode(E),x):t(E)}function p(E){return E===45?(e.consume(E),o=2,g):E===91?(e.consume(E),o=5,d=0,b):Hn(E)?(e.consume(E),o=4,i.interrupt?n:j):t(E)}function g(E){return E===45?(e.consume(E),i.interrupt?n:j):t(E)}function b(E){const ce="CDATA[";return E===ce.charCodeAt(d++)?(e.consume(E),d===ce.length?i.interrupt?n:G:b):t(E)}function z(E){return Hn(E)?(e.consume(E),a=String.fromCharCode(E),x):t(E)}function x(E){if(E===null||E===47||E===62||$e(E)){const ce=E===47,ke=a.toLowerCase();return!ce&&!l&&Nv.includes(ke)?(o=1,i.interrupt?n(E):G(E)):XL.includes(a.toLowerCase())?(o=6,ce?(e.consume(E),w):i.interrupt?n(E):G(E)):(o=7,i.interrupt&&!i.parser.lazy[i.now().line]?t(E):l?_(E):C(E))}return E===45||Mn(E)?(e.consume(E),a+=String.fromCharCode(E),x):t(E)}function w(E){return E===62?(e.consume(E),i.interrupt?n:G):t(E)}function _(E){return Me(E)?(e.consume(E),_):L(E)}function C(E){return E===47?(e.consume(E),L):E===58||E===95||Hn(E)?(e.consume(E),R):Me(E)?(e.consume(E),C):L(E)}function R(E){return E===45||E===46||E===58||E===95||Mn(E)?(e.consume(E),R):D(E)}function D(E){return E===61?(e.consume(E),P):Me(E)?(e.consume(E),D):C(E)}function P(E){return E===null||E===60||E===61||E===62||E===96?t(E):E===34||E===39?(e.consume(E),f=E,$):Me(E)?(e.consume(E),P):Y(E)}function $(E){return E===f?(e.consume(E),f=null,K):E===null||ze(E)?t(E):(e.consume(E),$)}function Y(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||$e(E)?D(E):(e.consume(E),Y)}function K(E){return E===47||E===62||Me(E)?C(E):t(E)}function L(E){return E===62?(e.consume(E),J):t(E)}function J(E){return E===null||ze(E)?G(E):Me(E)?(e.consume(E),J):t(E)}function G(E){return E===45&&o===2?(e.consume(E),ue):E===60&&o===1?(e.consume(E),X):E===62&&o===4?(e.consume(E),I):E===63&&o===3?(e.consume(E),j):E===93&&o===5?(e.consume(E),q):ze(E)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(JL,H,ee)(E)):E===null||ze(E)?(e.exit("htmlFlowData"),ee(E)):(e.consume(E),G)}function ee(E){return e.check(e2,B,H)(E)}function B(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),re}function re(E){return E===null||ze(E)?ee(E):(e.enter("htmlFlowData"),G(E))}function ue(E){return E===45?(e.consume(E),j):G(E)}function X(E){return E===47?(e.consume(E),a="",F):G(E)}function F(E){if(E===62){const ce=a.toLowerCase();return Nv.includes(ce)?(e.consume(E),I):G(E)}return Hn(E)&&a.length<8?(e.consume(E),a+=String.fromCharCode(E),F):G(E)}function q(E){return E===93?(e.consume(E),j):G(E)}function j(E){return E===62?(e.consume(E),I):E===45&&o===2?(e.consume(E),j):G(E)}function I(E){return E===null||ze(E)?(e.exit("htmlFlowData"),H(E)):(e.consume(E),I)}function H(E){return e.exit("htmlFlow"),n(E)}}function r2(e,n,t){const i=this;return o;function o(a){return ze(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),l):t(a)}function l(a){return i.parser.lazy[i.now().line]?t(a):n(a)}}function i2(e,n,t){return i;function i(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Pa,n,t)}}const s2={name:"htmlText",tokenize:o2};function o2(e,n,t){const i=this;let o,l,a;return d;function d(j){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(j),f}function f(j){return j===33?(e.consume(j),h):j===47?(e.consume(j),D):j===63?(e.consume(j),C):Hn(j)?(e.consume(j),Y):t(j)}function h(j){return j===45?(e.consume(j),y):j===91?(e.consume(j),l=0,b):Hn(j)?(e.consume(j),_):t(j)}function y(j){return j===45?(e.consume(j),g):t(j)}function u(j){return j===null?t(j):j===45?(e.consume(j),p):ze(j)?(a=u,X(j)):(e.consume(j),u)}function p(j){return j===45?(e.consume(j),g):u(j)}function g(j){return j===62?ue(j):j===45?p(j):u(j)}function b(j){const I="CDATA[";return j===I.charCodeAt(l++)?(e.consume(j),l===I.length?z:b):t(j)}function z(j){return j===null?t(j):j===93?(e.consume(j),x):ze(j)?(a=z,X(j)):(e.consume(j),z)}function x(j){return j===93?(e.consume(j),w):z(j)}function w(j){return j===62?ue(j):j===93?(e.consume(j),w):z(j)}function _(j){return j===null||j===62?ue(j):ze(j)?(a=_,X(j)):(e.consume(j),_)}function C(j){return j===null?t(j):j===63?(e.consume(j),R):ze(j)?(a=C,X(j)):(e.consume(j),C)}function R(j){return j===62?ue(j):C(j)}function D(j){return Hn(j)?(e.consume(j),P):t(j)}function P(j){return j===45||Mn(j)?(e.consume(j),P):$(j)}function $(j){return ze(j)?(a=$,X(j)):Me(j)?(e.consume(j),$):ue(j)}function Y(j){return j===45||Mn(j)?(e.consume(j),Y):j===47||j===62||$e(j)?K(j):t(j)}function K(j){return j===47?(e.consume(j),ue):j===58||j===95||Hn(j)?(e.consume(j),L):ze(j)?(a=K,X(j)):Me(j)?(e.consume(j),K):ue(j)}function L(j){return j===45||j===46||j===58||j===95||Mn(j)?(e.consume(j),L):J(j)}function J(j){return j===61?(e.consume(j),G):ze(j)?(a=J,X(j)):Me(j)?(e.consume(j),J):K(j)}function G(j){return j===null||j===60||j===61||j===62||j===96?t(j):j===34||j===39?(e.consume(j),o=j,ee):ze(j)?(a=G,X(j)):Me(j)?(e.consume(j),G):(e.consume(j),B)}function ee(j){return j===o?(e.consume(j),o=void 0,re):j===null?t(j):ze(j)?(a=ee,X(j)):(e.consume(j),ee)}function B(j){return j===null||j===34||j===39||j===60||j===61||j===96?t(j):j===47||j===62||$e(j)?K(j):(e.consume(j),B)}function re(j){return j===47||j===62||$e(j)?K(j):t(j)}function ue(j){return j===62?(e.consume(j),e.exit("htmlTextData"),e.exit("htmlText"),n):t(j)}function X(j){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),F}function F(j){return Me(j)?De(e,q,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):q(j)}function q(j){return e.enter("htmlTextData"),a(j)}}const jp={name:"labelEnd",resolveAll:c2,resolveTo:d2,tokenize:f2},a2={tokenize:h2},l2={tokenize:p2},u2={tokenize:m2};function c2(e){let n=-1;const t=[];for(;++n<e.length;){const i=e[n][1];if(t.push(e[n]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const o=i.type==="labelImage"?4:2;i.type="data",n+=o}}return e.length!==t.length&&pt(e,0,e.length,t),e}function d2(e,n){let t=e.length,i=0,o,l,a,d;for(;t--;)if(o=e[t][1],l){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[t][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(l=t,o.type!=="labelLink")){i=2;break}}else o.type==="labelEnd"&&(a=t);const f={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},h={type:"label",start:{...e[l][1].start},end:{...e[a][1].end}},y={type:"labelText",start:{...e[l+i+2][1].end},end:{...e[a-2][1].start}};return d=[["enter",f,n],["enter",h,n]],d=Tt(d,e.slice(l+1,l+i+3)),d=Tt(d,[["enter",y,n]]),d=Tt(d,qu(n.parser.constructs.insideSpan.null,e.slice(l+i+4,a-3),n)),d=Tt(d,[["exit",y,n],e[a-2],e[a-1],["exit",h,n]]),d=Tt(d,e.slice(a+1)),d=Tt(d,[["exit",f,n]]),pt(e,l,e.length,d),e}function f2(e,n,t){const i=this;let o=i.events.length,l,a;for(;o--;)if((i.events[o][1].type==="labelImage"||i.events[o][1].type==="labelLink")&&!i.events[o][1]._balanced){l=i.events[o][1];break}return d;function d(p){return l?l._inactive?u(p):(a=i.parser.defined.includes(qt(i.sliceSerialize({start:l.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),f):t(p)}function f(p){return p===40?e.attempt(a2,y,a?y:u)(p):p===91?e.attempt(l2,y,a?h:u)(p):a?y(p):u(p)}function h(p){return e.attempt(u2,y,u)(p)}function y(p){return n(p)}function u(p){return l._balanced=!0,t(p)}}function h2(e,n,t){return i;function i(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),o}function o(u){return $e(u)?ia(e,l)(u):l(u)}function l(u){return u===41?y(u):ux(e,a,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function a(u){return $e(u)?ia(e,f)(u):y(u)}function d(u){return t(u)}function f(u){return u===34||u===39||u===40?dx(e,h,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):y(u)}function h(u){return $e(u)?ia(e,y)(u):y(u)}function y(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),n):t(u)}}function p2(e,n,t){const i=this;return o;function o(d){return cx.call(i,e,l,a,"reference","referenceMarker","referenceString")(d)}function l(d){return i.parser.defined.includes(qt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?n(d):t(d)}function a(d){return t(d)}}function m2(e,n,t){return i;function i(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),o}function o(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const g2={name:"labelStartImage",resolveAll:jp.resolveAll,tokenize:y2};function y2(e,n,t){const i=this;return o;function o(d){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(d),e.exit("labelImageMarker"),l}function l(d){return d===91?(e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelImage"),a):t(d)}function a(d){return d===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(d):n(d)}}const k2={name:"labelStartLink",resolveAll:jp.resolveAll,tokenize:v2};function v2(e,n,t){const i=this;return o;function o(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),l}function l(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(a):n(a)}}const df={name:"lineEnding",tokenize:b2};function b2(e,n){return t;function t(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),De(e,n,"linePrefix")}}const du={name:"thematicBreak",tokenize:z2};function z2(e,n,t){let i=0,o;return l;function l(h){return e.enter("thematicBreak"),a(h)}function a(h){return o=h,d(h)}function d(h){return h===o?(e.enter("thematicBreakSequence"),f(h)):i>=3&&(h===null||ze(h))?(e.exit("thematicBreak"),n(h)):t(h)}function f(h){return h===o?(e.consume(h),i++,f):(e.exit("thematicBreakSequence"),Me(h)?De(e,d,"whitespace")(h):d(h))}}const nt={continuation:{tokenize:_2},exit:T2,name:"list",tokenize:S2},w2={partial:!0,tokenize:j2},x2={partial:!0,tokenize:C2};function S2(e,n,t){const i=this,o=i.events[i.events.length-1];let l=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,a=0;return d;function d(g){const b=i.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!i.containerState.marker||g===i.containerState.marker:fh(g)){if(i.containerState.type||(i.containerState.type=b,e.enter(b,{_container:!0})),b==="listUnordered")return e.enter("listItemPrefix"),g===42||g===45?e.check(du,t,h)(g):h(g);if(!i.interrupt||g===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),f(g)}return t(g)}function f(g){return fh(g)&&++a<10?(e.consume(g),f):(!i.interrupt||a<2)&&(i.containerState.marker?g===i.containerState.marker:g===41||g===46)?(e.exit("listItemValue"),h(g)):t(g)}function h(g){return e.enter("listItemMarker"),e.consume(g),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||g,e.check(Pa,i.interrupt?t:y,e.attempt(w2,p,u))}function y(g){return i.containerState.initialBlankLine=!0,l++,p(g)}function u(g){return Me(g)?(e.enter("listItemPrefixWhitespace"),e.consume(g),e.exit("listItemPrefixWhitespace"),p):t(g)}function p(g){return i.containerState.size=l+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(g)}}function _2(e,n,t){const i=this;return i.containerState._closeFlow=void 0,e.check(Pa,o,l);function o(d){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,De(e,n,"listItemIndent",i.containerState.size+1)(d)}function l(d){return i.containerState.furtherBlankLines||!Me(d)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,a(d)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(x2,n,a)(d))}function a(d){return i.containerState._closeFlow=!0,i.interrupt=void 0,De(e,e.attempt(nt,n,t),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function C2(e,n,t){const i=this;return De(e,o,"listItemIndent",i.containerState.size+1);function o(l){const a=i.events[i.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===i.containerState.size?n(l):t(l)}}function T2(e){e.exit(this.containerState.type)}function j2(e,n,t){const i=this;return De(e,o,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(l){const a=i.events[i.events.length-1];return!Me(l)&&a&&a[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}const Fv={name:"setextUnderline",resolveTo:E2,tokenize:A2};function E2(e,n){let t=e.length,i,o,l;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){i=t;break}e[t][1].type==="paragraph"&&(o=t)}else e[t][1].type==="content"&&e.splice(t,1),!l&&e[t][1].type==="definition"&&(l=t);const a={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",l?(e.splice(o,0,["enter",a,n]),e.splice(l+1,0,["exit",e[i][1],n]),e[i][1].end={...e[l][1].end}):e[i][1]=a,e.push(["exit",a,n]),e}function A2(e,n,t){const i=this;let o;return l;function l(h){let y=i.events.length,u;for(;y--;)if(i.events[y][1].type!=="lineEnding"&&i.events[y][1].type!=="linePrefix"&&i.events[y][1].type!=="content"){u=i.events[y][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||u)?(e.enter("setextHeadingLine"),o=h,a(h)):t(h)}function a(h){return e.enter("setextHeadingLineSequence"),d(h)}function d(h){return h===o?(e.consume(h),d):(e.exit("setextHeadingLineSequence"),Me(h)?De(e,f,"lineSuffix")(h):f(h))}function f(h){return h===null||ze(h)?(e.exit("setextHeadingLine"),n(h)):t(h)}}const P2={tokenize:R2};function R2(e){const n=this,t=e.attempt(Pa,i,e.attempt(this.parser.constructs.flowInitial,o,De(e,e.attempt(this.parser.constructs.flow,o,e.attempt(OL,o)),"linePrefix")));return t;function i(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function o(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const I2={resolveAll:hx()},M2=fx("string"),D2=fx("text");function fx(e){return{resolveAll:hx(e==="text"?L2:void 0),tokenize:n};function n(t){const i=this,o=this.parser.constructs[e],l=t.attempt(o,a,d);return a;function a(y){return h(y)?l(y):d(y)}function d(y){if(y===null){t.consume(y);return}return t.enter("data"),t.consume(y),f}function f(y){return h(y)?(t.exit("data"),l(y)):(t.consume(y),f)}function h(y){if(y===null)return!0;const u=o[y];let p=-1;if(u)for(;++p<u.length;){const g=u[p];if(!g.previous||g.previous.call(i,i.previous))return!0}return!1}}}function hx(e){return n;function n(t,i){let o=-1,l;for(;++o<=t.length;)l===void 0?t[o]&&t[o][1].type==="data"&&(l=o,o++):(!t[o]||t[o][1].type!=="data")&&(o!==l+2&&(t[l][1].end=t[o-1][1].end,t.splice(l+2,o-l-2),o=l+2),l=void 0);return e?e(t,i):t}}function L2(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const i=e[t-1][1],o=n.sliceStream(i);let l=o.length,a=-1,d=0,f;for(;l--;){const h=o[l];if(typeof h=="string"){for(a=h.length;h.charCodeAt(a-1)===32;)d++,a--;if(a)break;a=-1}else if(h===-2)f=!0,d++;else if(h!==-1){l++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(d=0),d){const h={type:t===e.length||f||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?a:i.start._bufferIndex+a,_index:i.start._index+l,line:i.end.line,column:i.end.column-d,offset:i.end.offset-d},end:{...i.end}};i.end={...h.start},i.start.offset===i.end.offset?Object.assign(i,h):(e.splice(t,0,["enter",h,n],["exit",h,n]),t+=2)}t++}return e}const O2={42:nt,43:nt,45:nt,48:nt,49:nt,50:nt,51:nt,52:nt,53:nt,54:nt,55:nt,56:nt,57:nt,62:sx},N2={91:UL},F2={[-2]:cf,[-1]:cf,32:cf},V2={35:GL,42:du,45:[Fv,du],60:ZL,61:Fv,95:du,96:Ov,126:Ov},B2={38:ax,92:ox},U2={[-5]:df,[-4]:df,[-3]:df,33:g2,38:ax,42:hh,60:[kL,s2],91:k2,92:[qL,ox],93:jp,95:hh,96:PL},$2={null:[hh,I2]},H2={null:[42,95]},W2={null:[]},q2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:H2,contentInitial:N2,disable:W2,document:O2,flow:V2,flowInitial:F2,insideSpan:$2,string:B2,text:U2},Symbol.toStringTag,{value:"Module"}));function K2(e,n,t){let i={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const o={},l=[];let a=[],d=[];const f={attempt:$(D),check:$(P),consume:_,enter:C,exit:R,interrupt:$(P,{interrupt:!0})},h={code:null,containerState:{},defineSkip:z,events:[],now:b,parser:e,previous:null,sliceSerialize:p,sliceStream:g,write:u};let y=n.tokenize.call(h,f);return n.resolveAll&&l.push(n),h;function u(J){return a=Tt(a,J),x(),a[a.length-1]!==null?[]:(Y(n,0),h.events=qu(l,h.events,h),h.events)}function p(J,G){return Q2(g(J),G)}function g(J){return G2(a,J)}function b(){const{_bufferIndex:J,_index:G,line:ee,column:B,offset:re}=i;return{_bufferIndex:J,_index:G,line:ee,column:B,offset:re}}function z(J){o[J.line]=J.column,L()}function x(){let J;for(;i._index<a.length;){const G=a[i._index];if(typeof G=="string")for(J=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===J&&i._bufferIndex<G.length;)w(G.charCodeAt(i._bufferIndex));else w(G)}}function w(J){y=y(J)}function _(J){ze(J)?(i.line++,i.column=1,i.offset+=J===-3?2:1,L()):J!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===a[i._index].length&&(i._bufferIndex=-1,i._index++)),h.previous=J}function C(J,G){const ee=G||{};return ee.type=J,ee.start=b(),h.events.push(["enter",ee,h]),d.push(ee),ee}function R(J){const G=d.pop();return G.end=b(),h.events.push(["exit",G,h]),G}function D(J,G){Y(J,G.from)}function P(J,G){G.restore()}function $(J,G){return ee;function ee(B,re,ue){let X,F,q,j;return Array.isArray(B)?H(B):"tokenize"in B?H([B]):I(B);function I(ge){return ye;function ye(Ce){const Ae=Ce!==null&&ge[Ce],Be=Ce!==null&&ge.null,yn=[...Array.isArray(Ae)?Ae:Ae?[Ae]:[],...Array.isArray(Be)?Be:Be?[Be]:[]];return H(yn)(Ce)}}function H(ge){return X=ge,F=0,ge.length===0?ue:E(ge[F])}function E(ge){return ye;function ye(Ce){return j=K(),q=ge,ge.partial||(h.currentConstruct=ge),ge.name&&h.parser.constructs.disable.null.includes(ge.name)?ke():ge.tokenize.call(G?Object.assign(Object.create(h),G):h,f,ce,ke)(Ce)}}function ce(ge){return J(q,j),re}function ke(ge){return j.restore(),++F<X.length?E(X[F]):ue}}}function Y(J,G){J.resolveAll&&!l.includes(J)&&l.push(J),J.resolve&&pt(h.events,G,h.events.length-G,J.resolve(h.events.slice(G),h)),J.resolveTo&&(h.events=J.resolveTo(h.events,h))}function K(){const J=b(),G=h.previous,ee=h.currentConstruct,B=h.events.length,re=Array.from(d);return{from:B,restore:ue};function ue(){i=J,h.previous=G,h.currentConstruct=ee,h.events.length=B,d=re,L()}}function L(){i.line in o&&i.column<2&&(i.column=o[i.line],i.offset+=o[i.line]-1)}}function G2(e,n){const t=n.start._index,i=n.start._bufferIndex,o=n.end._index,l=n.end._bufferIndex;let a;if(t===o)a=[e[t].slice(i,l)];else{if(a=e.slice(t,o),i>-1){const d=a[0];typeof d=="string"?a[0]=d.slice(i):a.shift()}l>0&&a.push(e[o].slice(0,l))}return a}function Q2(e,n){let t=-1;const i=[];let o;for(;++t<e.length;){const l=e[t];let a;if(typeof l=="string")a=l;else switch(l){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&o)continue;a=" ";break}default:a=String.fromCharCode(l)}o=l===-2,i.push(a)}return i.join("")}function Y2(e){const i={constructs:rx([q2,...(e||{}).extensions||[]]),content:o(dL),defined:[],document:o(hL),flow:o(P2),lazy:{},string:o(M2),text:o(D2)};return i;function o(l){return a;function a(d){return K2(i,l,d)}}}function X2(e){for(;!lx(e););return e}const Vv=/[\0\t\n\r]/g;function Z2(){let e=1,n="",t=!0,i;return o;function o(l,a,d){const f=[];let h,y,u,p,g;for(l=n+(typeof l=="string"?l.toString():new TextDecoder(a||void 0).decode(l)),u=0,n="",t&&(l.charCodeAt(0)===65279&&u++,t=void 0);u<l.length;){if(Vv.lastIndex=u,h=Vv.exec(l),p=h&&h.index!==void 0?h.index:l.length,g=l.charCodeAt(p),!h){n=l.slice(u);break}if(g===10&&u===p&&i)f.push(-3),i=void 0;else switch(i&&(f.push(-5),i=void 0),u<p&&(f.push(l.slice(u,p)),e+=p-u),g){case 0:{f.push(65533),e++;break}case 9:{for(y=Math.ceil(e/4)*4,f.push(-2);e++<y;)f.push(-1);break}case 10:{f.push(-4),e=1;break}default:i=!0,e=1}u=p+1}return d&&(i&&f.push(-5),n&&f.push(n),f.push(null)),f}}const J2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function eO(e){return e.replace(J2,nO)}function nO(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const o=t.charCodeAt(1),l=o===120||o===88;return ix(t.slice(l?2:1),l?16:10)}return Tp(t)||e}const px={}.hasOwnProperty;function tO(e,n,t){return typeof n!="string"&&(t=n,n=void 0),rO(t)(X2(Y2(t).document().write(Z2()(e,n,!0))))}function rO(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(ot),autolinkProtocol:K,autolinkEmail:K,atxHeading:l(vr),blockQuote:l(Be),characterEscape:K,characterReference:K,codeFenced:l(yn),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:l(yn,a),codeText:l(At,a),codeTextData:K,data:K,codeFlowValue:K,definition:l(Ln),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:l(Qt),hardBreakEscape:l(Yt),hardBreakTrailing:l(Yt),htmlFlow:l(Xt,a),htmlFlowData:K,htmlText:l(Xt,a),htmlTextData:K,image:l(Zt),label:a,link:l(ot),listItem:l(qn),listItemValue:p,listOrdered:l(Pt,u),listUnordered:l(Pt),paragraph:l(Lr),reference:E,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:l(vr),strong:l(mt),thematicBreak:l(ns)},exit:{atxHeading:f(),atxHeadingSequence:D,autolink:f(),autolinkEmail:Ae,autolinkProtocol:Ce,blockQuote:f(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:ge,characterReference:ye,codeFenced:f(x),codeFencedFence:z,codeFencedFenceInfo:g,codeFencedFenceMeta:b,codeFlowValue:L,codeIndented:f(w),codeText:f(re),codeTextData:L,data:L,definition:f(),definitionDestinationString:R,definitionLabelString:_,definitionTitleString:C,emphasis:f(),hardBreakEscape:f(G),hardBreakTrailing:f(G),htmlFlow:f(ee),htmlFlowData:L,htmlText:f(B),htmlTextData:L,image:f(X),label:q,labelText:F,lineEnding:J,link:f(ue),listItem:f(),listOrdered:f(),listUnordered:f(),paragraph:f(),referenceString:ce,resourceDestinationString:j,resourceTitleString:I,resource:H,setextHeading:f(Y),setextHeadingLineSequence:$,setextHeadingText:P,strong:f(),thematicBreak:f()}};mx(n,(e||{}).mdastExtensions||[]);const t={};return i;function i(Q){let oe={type:"root",children:[]};const we={stack:[oe],tokenStack:[],config:n,enter:d,exit:h,buffer:a,resume:y,data:t},Pe=[];let Re=-1;for(;++Re<Q.length;)if(Q[Re][1].type==="listOrdered"||Q[Re][1].type==="listUnordered")if(Q[Re][0]==="enter")Pe.push(Re);else{const pn=Pe.pop();Re=o(Q,pn,Re)}for(Re=-1;++Re<Q.length;){const pn=n[Q[Re][0]];px.call(pn,Q[Re][1].type)&&pn[Q[Re][1].type].call(Object.assign({sliceSerialize:Q[Re][2].sliceSerialize},we),Q[Re][1])}if(we.tokenStack.length>0){const pn=we.tokenStack[we.tokenStack.length-1];(pn[1]||Bv).call(we,void 0,pn[0])}for(oe.position={start:si(Q.length>0?Q[0][1].start:{line:1,column:1,offset:0}),end:si(Q.length>0?Q[Q.length-2][1].end:{line:1,column:1,offset:0})},Re=-1;++Re<n.transforms.length;)oe=n.transforms[Re](oe)||oe;return oe}function o(Q,oe,we){let Pe=oe-1,Re=-1,pn=!1,gt,Cn,On,Jt;for(;++Pe<=we;){const Qe=Q[Pe];switch(Qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Qe[0]==="enter"?Re++:Re--,Jt=void 0;break}case"lineEndingBlank":{Qe[0]==="enter"&&(gt&&!Jt&&!Re&&!On&&(On=Pe),Jt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Jt=void 0}if(!Re&&Qe[0]==="enter"&&Qe[1].type==="listItemPrefix"||Re===-1&&Qe[0]==="exit"&&(Qe[1].type==="listUnordered"||Qe[1].type==="listOrdered")){if(gt){let yt=Pe;for(Cn=void 0;yt--;){const Nn=Q[yt];if(Nn[1].type==="lineEnding"||Nn[1].type==="lineEndingBlank"){if(Nn[0]==="exit")continue;Cn&&(Q[Cn][1].type="lineEndingBlank",pn=!0),Nn[1].type="lineEnding",Cn=yt}else if(!(Nn[1].type==="linePrefix"||Nn[1].type==="blockQuotePrefix"||Nn[1].type==="blockQuotePrefixWhitespace"||Nn[1].type==="blockQuoteMarker"||Nn[1].type==="listItemIndent"))break}On&&(!Cn||On<Cn)&&(gt._spread=!0),gt.end=Object.assign({},Cn?Q[Cn][1].start:Qe[1].end),Q.splice(Cn||Pe,0,["exit",gt,Qe[2]]),Pe++,we++}if(Qe[1].type==="listItemPrefix"){const yt={type:"listItem",_spread:!1,start:Object.assign({},Qe[1].start),end:void 0};gt=yt,Q.splice(Pe,0,["enter",yt,Qe[2]]),Pe++,we++,On=void 0,Jt=!0}}}return Q[oe][1]._spread=pn,we}function l(Q,oe){return we;function we(Pe){d.call(this,Q(Pe),Pe),oe&&oe.call(this,Pe)}}function a(){this.stack.push({type:"fragment",children:[]})}function d(Q,oe,we){this.stack[this.stack.length-1].children.push(Q),this.stack.push(Q),this.tokenStack.push([oe,we||void 0]),Q.position={start:si(oe.start),end:void 0}}function f(Q){return oe;function oe(we){Q&&Q.call(this,we),h.call(this,we)}}function h(Q,oe){const we=this.stack.pop(),Pe=this.tokenStack.pop();if(Pe)Pe[0].type!==Q.type&&(oe?oe.call(this,Q,Pe[0]):(Pe[1]||Bv).call(this,Q,Pe[0]));else throw new Error("Cannot close `"+Q.type+"` ("+ra({start:Q.start,end:Q.end})+"): it’s not open");we.position.end=si(Q.end)}function y(){return Cp(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=!0}function p(Q){if(this.data.expectingFirstListItemValue){const oe=this.stack[this.stack.length-2];oe.start=Number.parseInt(this.sliceSerialize(Q),10),this.data.expectingFirstListItemValue=void 0}}function g(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.lang=Q}function b(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.meta=Q}function z(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function x(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function w(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Q.replace(/(\r?\n|\r)$/g,"")}function _(Q){const oe=this.resume(),we=this.stack[this.stack.length-1];we.label=oe,we.identifier=qt(this.sliceSerialize(Q)).toLowerCase()}function C(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.title=Q}function R(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.url=Q}function D(Q){const oe=this.stack[this.stack.length-1];if(!oe.depth){const we=this.sliceSerialize(Q).length;oe.depth=we}}function P(){this.data.setextHeadingSlurpLineEnding=!0}function $(Q){const oe=this.stack[this.stack.length-1];oe.depth=this.sliceSerialize(Q).codePointAt(0)===61?1:2}function Y(){this.data.setextHeadingSlurpLineEnding=void 0}function K(Q){const we=this.stack[this.stack.length-1].children;let Pe=we[we.length-1];(!Pe||Pe.type!=="text")&&(Pe=es(),Pe.position={start:si(Q.start),end:void 0},we.push(Pe)),this.stack.push(Pe)}function L(Q){const oe=this.stack.pop();oe.value+=this.sliceSerialize(Q),oe.position.end=si(Q.end)}function J(Q){const oe=this.stack[this.stack.length-1];if(this.data.atHardBreak){const we=oe.children[oe.children.length-1];we.position.end=si(Q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(oe.type)&&(K.call(this,Q),L.call(this,Q))}function G(){this.data.atHardBreak=!0}function ee(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Q}function B(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Q}function re(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.value=Q}function ue(){const Q=this.stack[this.stack.length-1];if(this.data.inReference){const oe=this.data.referenceType||"shortcut";Q.type+="Reference",Q.referenceType=oe,delete Q.url,delete Q.title}else delete Q.identifier,delete Q.label;this.data.referenceType=void 0}function X(){const Q=this.stack[this.stack.length-1];if(this.data.inReference){const oe=this.data.referenceType||"shortcut";Q.type+="Reference",Q.referenceType=oe,delete Q.url,delete Q.title}else delete Q.identifier,delete Q.label;this.data.referenceType=void 0}function F(Q){const oe=this.sliceSerialize(Q),we=this.stack[this.stack.length-2];we.label=eO(oe),we.identifier=qt(oe).toLowerCase()}function q(){const Q=this.stack[this.stack.length-1],oe=this.resume(),we=this.stack[this.stack.length-1];if(this.data.inReference=!0,we.type==="link"){const Pe=Q.children;we.children=Pe}else we.alt=oe}function j(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.url=Q}function I(){const Q=this.resume(),oe=this.stack[this.stack.length-1];oe.title=Q}function H(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function ce(Q){const oe=this.resume(),we=this.stack[this.stack.length-1];we.label=oe,we.identifier=qt(this.sliceSerialize(Q)).toLowerCase(),this.data.referenceType="full"}function ke(Q){this.data.characterReferenceType=Q.type}function ge(Q){const oe=this.sliceSerialize(Q),we=this.data.characterReferenceType;let Pe;we?(Pe=ix(oe,we==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Pe=Tp(oe);const Re=this.stack[this.stack.length-1];Re.value+=Pe}function ye(Q){const oe=this.stack.pop();oe.position.end=si(Q.end)}function Ce(Q){L.call(this,Q);const oe=this.stack[this.stack.length-1];oe.url=this.sliceSerialize(Q)}function Ae(Q){L.call(this,Q);const oe=this.stack[this.stack.length-1];oe.url="mailto:"+this.sliceSerialize(Q)}function Be(){return{type:"blockquote",children:[]}}function yn(){return{type:"code",lang:null,meta:null,value:""}}function At(){return{type:"inlineCode",value:""}}function Ln(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Qt(){return{type:"emphasis",children:[]}}function vr(){return{type:"heading",depth:0,children:[]}}function Yt(){return{type:"break"}}function Xt(){return{type:"html",value:""}}function Zt(){return{type:"image",title:null,url:"",alt:null}}function ot(){return{type:"link",title:null,url:"",children:[]}}function Pt(Q){return{type:"list",ordered:Q.type==="listOrdered",start:null,spread:Q._spread,children:[]}}function qn(Q){return{type:"listItem",spread:Q._spread,checked:null,children:[]}}function Lr(){return{type:"paragraph",children:[]}}function mt(){return{type:"strong",children:[]}}function es(){return{type:"text",value:""}}function ns(){return{type:"thematicBreak"}}}function si(e){return{line:e.line,column:e.column,offset:e.offset}}function mx(e,n){let t=-1;for(;++t<n.length;){const i=n[t];Array.isArray(i)?mx(e,i):iO(e,i)}}function iO(e,n){let t;for(t in n)if(px.call(n,t))switch(t){case"canContainEols":{const i=n[t];i&&e[t].push(...i);break}case"transforms":{const i=n[t];i&&e[t].push(...i);break}case"enter":case"exit":{const i=n[t];i&&Object.assign(e[t],i);break}}}function Bv(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+ra({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+ra({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+ra({start:n.start,end:n.end})+") is still open")}function sO(e){const n=this;n.parser=t;function t(i){return tO(i,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function oO(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function aO(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function lO(e,n){const t=n.value?n.value+`
`:"",i={};n.lang&&(i.className=["language-"+n.lang]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function uO(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function cO(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function dO(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(n.identifier).toUpperCase(),o=so(i.toLowerCase()),l=e.footnoteOrder.indexOf(i);let a,d=e.footnoteCounts.get(i);d===void 0?(d=0,e.footnoteOrder.push(i),a=e.footnoteOrder.length):a=l+1,d+=1,e.footnoteCounts.set(i,d);const f={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+o,id:t+"fnref-"+o+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,f);const h={type:"element",tagName:"sup",properties:{},children:[f]};return e.patch(n,h),e.applyData(n,h)}function fO(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function hO(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function gx(e,n){const t=n.referenceType;let i="]";if(t==="collapsed"?i+="[]":t==="full"&&(i+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+i}];const o=e.all(n),l=o[0];l&&l.type==="text"?l.value="["+l.value:o.unshift({type:"text",value:"["});const a=o[o.length-1];return a&&a.type==="text"?a.value+=i:o.push({type:"text",value:i}),o}function pO(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return gx(e,n);const o={src:so(i.url||""),alt:n.alt};i.title!==null&&i.title!==void 0&&(o.title=i.title);const l={type:"element",tagName:"img",properties:o,children:[]};return e.patch(n,l),e.applyData(n,l)}function mO(e,n){const t={src:so(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,i),e.applyData(n,i)}function gO(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const i={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,i),e.applyData(n,i)}function yO(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return gx(e,n);const o={href:so(i.url||"")};i.title!==null&&i.title!==void 0&&(o.title=i.title);const l={type:"element",tagName:"a",properties:o,children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function kO(e,n){const t={href:so(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function vO(e,n,t){const i=e.all(n),o=t?bO(t):yx(n),l={},a=[];if(typeof n.checked=="boolean"){const y=i[0];let u;y&&y.type==="element"&&y.tagName==="p"?u=y:(u={type:"element",tagName:"p",properties:{},children:[]},i.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let d=-1;for(;++d<i.length;){const y=i[d];(o||d!==0||y.type!=="element"||y.tagName!=="p")&&a.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!o?a.push(...y.children):a.push(y)}const f=i[i.length-1];f&&(o||f.type!=="element"||f.tagName!=="p")&&a.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:l,children:a};return e.patch(n,h),e.applyData(n,h)}function bO(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let i=-1;for(;!n&&++i<t.length;)n=yx(t[i])}return n}function yx(e){const n=e.spread;return n??e.children.length>1}function zO(e,n){const t={},i=e.all(n);let o=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++o<i.length;){const a=i[o];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(i,!0)};return e.patch(n,l),e.applyData(n,l)}function wO(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function xO(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function SO(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function _O(e,n){const t=e.all(n),i=t.shift(),o=[];if(i){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(n.children[0],a),o.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},d=wp(n.children[1]),f=Y0(n.children[n.children.length-1]);d&&f&&(a.position={start:d,end:f}),o.push(a)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(n,l),e.applyData(n,l)}function CO(e,n,t){const i=t?t.children:void 0,l=(i?i.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,d=a?a.length:n.children.length;let f=-1;const h=[];for(;++f<d;){const u=n.children[f],p={},g=a?a[f]:void 0;g&&(p.align=g);let b={type:"element",tagName:l,properties:p,children:[]};u&&(b.children=e.all(u),e.patch(u,b),b=e.applyData(u,b)),h.push(b)}const y={type:"element",tagName:"tr",properties:{},children:e.wrap(h,!0)};return e.patch(n,y),e.applyData(n,y)}function TO(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Uv=9,$v=32;function jO(e){const n=String(e),t=/\r?\n|\r/g;let i=t.exec(n),o=0;const l=[];for(;i;)l.push(Hv(n.slice(o,i.index),o>0,!0),i[0]),o=i.index+i[0].length,i=t.exec(n);return l.push(Hv(n.slice(o),o>0,!1)),l.join("")}function Hv(e,n,t){let i=0,o=e.length;if(n){let l=e.codePointAt(i);for(;l===Uv||l===$v;)i++,l=e.codePointAt(i)}if(t){let l=e.codePointAt(o-1);for(;l===Uv||l===$v;)o--,l=e.codePointAt(o-1)}return o>i?e.slice(i,o):""}function EO(e,n){const t={type:"text",value:jO(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function AO(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const PO={blockquote:oO,break:aO,code:lO,delete:uO,emphasis:cO,footnoteReference:dO,heading:fO,html:hO,imageReference:pO,image:mO,inlineCode:gO,linkReference:yO,link:kO,listItem:vO,list:zO,paragraph:wO,root:xO,strong:SO,table:_O,tableCell:TO,tableRow:CO,text:EO,thematicBreak:AO,toml:Xl,yaml:Xl,definition:Xl,footnoteDefinition:Xl};function Xl(){}const kx=-1,Ku=0,sa=1,_u=2,Ep=3,Ap=4,Pp=5,Rp=6,vx=7,bx=8,Wv=typeof self=="object"?self:globalThis,RO=(e,n)=>{const t=(o,l)=>(e.set(l,o),o),i=o=>{if(e.has(o))return e.get(o);const[l,a]=n[o];switch(l){case Ku:case kx:return t(a,o);case sa:{const d=t([],o);for(const f of a)d.push(i(f));return d}case _u:{const d=t({},o);for(const[f,h]of a)d[i(f)]=i(h);return d}case Ep:return t(new Date(a),o);case Ap:{const{source:d,flags:f}=a;return t(new RegExp(d,f),o)}case Pp:{const d=t(new Map,o);for(const[f,h]of a)d.set(i(f),i(h));return d}case Rp:{const d=t(new Set,o);for(const f of a)d.add(i(f));return d}case vx:{const{name:d,message:f}=a;return t(new Wv[d](f),o)}case bx:return t(BigInt(a),o);case"BigInt":return t(Object(BigInt(a)),o);case"ArrayBuffer":return t(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:d}=new Uint8Array(a);return t(new DataView(d),a)}}return t(new Wv[l](a),o)};return i},qv=e=>RO(new Map,e)(0),Ts="",{toString:IO}={},{keys:MO}=Object,Qo=e=>{const n=typeof e;if(n!=="object"||!e)return[Ku,n];const t=IO.call(e).slice(8,-1);switch(t){case"Array":return[sa,Ts];case"Object":return[_u,Ts];case"Date":return[Ep,Ts];case"RegExp":return[Ap,Ts];case"Map":return[Pp,Ts];case"Set":return[Rp,Ts];case"DataView":return[sa,t]}return t.includes("Array")?[sa,t]:t.includes("Error")?[vx,t]:[_u,t]},Zl=([e,n])=>e===Ku&&(n==="function"||n==="symbol"),DO=(e,n,t,i)=>{const o=(a,d)=>{const f=i.push(a)-1;return t.set(d,f),f},l=a=>{if(t.has(a))return t.get(a);let[d,f]=Qo(a);switch(d){case Ku:{let y=a;switch(f){case"bigint":d=bx,y=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+f);y=null;break;case"undefined":return o([kx],a)}return o([d,y],a)}case sa:{if(f){let p=a;return f==="DataView"?p=new Uint8Array(a.buffer):f==="ArrayBuffer"&&(p=new Uint8Array(a)),o([f,[...p]],a)}const y=[],u=o([d,y],a);for(const p of a)y.push(l(p));return u}case _u:{if(f)switch(f){case"BigInt":return o([f,a.toString()],a);case"Boolean":case"Number":case"String":return o([f,a.valueOf()],a)}if(n&&"toJSON"in a)return l(a.toJSON());const y=[],u=o([d,y],a);for(const p of MO(a))(e||!Zl(Qo(a[p])))&&y.push([l(p),l(a[p])]);return u}case Ep:return o([d,a.toISOString()],a);case Ap:{const{source:y,flags:u}=a;return o([d,{source:y,flags:u}],a)}case Pp:{const y=[],u=o([d,y],a);for(const[p,g]of a)(e||!(Zl(Qo(p))||Zl(Qo(g))))&&y.push([l(p),l(g)]);return u}case Rp:{const y=[],u=o([d,y],a);for(const p of a)(e||!Zl(Qo(p)))&&y.push(l(p));return u}}const{message:h}=a;return o([d,{name:f,message:h}],a)};return l},Kv=(e,{json:n,lossy:t}={})=>{const i=[];return DO(!(n||t),!!n,new Map,i)(e),i},Cu=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?qv(Kv(e,n)):structuredClone(e):(e,n)=>qv(Kv(e,n));function LO(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function OO(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function NO(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||LO,i=e.options.footnoteBackLabel||OO,o=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let f=-1;for(;++f<e.footnoteOrder.length;){const h=e.footnoteById.get(e.footnoteOrder[f]);if(!h)continue;const y=e.all(h),u=String(h.identifier).toUpperCase(),p=so(u.toLowerCase());let g=0;const b=[],z=e.footnoteCounts.get(u);for(;z!==void 0&&++g<=z;){b.length>0&&b.push({type:"text",value:" "});let _=typeof t=="string"?t:t(f,g);typeof _=="string"&&(_={type:"text",value:_}),b.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+p+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(f,g),className:["data-footnote-backref"]},children:Array.isArray(_)?_:[_]})}const x=y[y.length-1];if(x&&x.type==="element"&&x.tagName==="p"){const _=x.children[x.children.length-1];_&&_.type==="text"?_.value+=" ":x.children.push({type:"text",value:" "}),x.children.push(...b)}else y.push(...b);const w={type:"element",tagName:"li",properties:{id:n+"fn-"+p},children:e.wrap(y,!0)};e.patch(h,w),d.push(w)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...Cu(a),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(d,!0)},{type:"text",value:`
`}]}}const Gu=function(e){if(e==null)return UO;if(typeof e=="function")return Qu(e);if(typeof e=="object")return Array.isArray(e)?FO(e):VO(e);if(typeof e=="string")return BO(e);throw new Error("Expected function, string, or object as test")};function FO(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Gu(e[t]);return Qu(i);function i(...o){let l=-1;for(;++l<n.length;)if(n[l].apply(this,o))return!0;return!1}}function VO(e){const n=e;return Qu(t);function t(i){const o=i;let l;for(l in e)if(o[l]!==n[l])return!1;return!0}}function BO(e){return Qu(n);function n(t){return t&&t.type===e}}function Qu(e){return n;function n(t,i,o){return!!($O(t)&&e.call(this,t,typeof i=="number"?i:void 0,o||void 0))}}function UO(){return!0}function $O(e){return e!==null&&typeof e=="object"&&"type"in e}const zx=[],HO=!0,ph=!1,WO="skip";function wx(e,n,t,i){let o;typeof n=="function"&&typeof t!="function"?(i=t,t=n):o=n;const l=Gu(o),a=i?-1:1;d(e,void 0,[])();function d(f,h,y){const u=f&&typeof f=="object"?f:{};if(typeof u.type=="string"){const g=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(f.type+(g?"<"+g+">":""))+")"})}return p;function p(){let g=zx,b,z,x;if((!n||l(f,h,y[y.length-1]||void 0))&&(g=qO(t(f,y)),g[0]===ph))return g;if("children"in f&&f.children){const w=f;if(w.children&&g[0]!==WO)for(z=(i?w.children.length:-1)+a,x=y.concat(w);z>-1&&z<w.children.length;){const _=w.children[z];if(b=d(_,z,x)(),b[0]===ph)return b;z=typeof b[1]=="number"?b[1]:z+a}}return g}}}function qO(e){return Array.isArray(e)?e:typeof e=="number"?[HO,e]:e==null?zx:[e]}function Ip(e,n,t,i){let o,l,a;typeof n=="function"?(l=void 0,a=n,o=t):(l=n,a=t,o=i),wx(e,l,d,o);function d(f,h){const y=h[h.length-1],u=y?y.children.indexOf(f):void 0;return a(f,u,y)}}const mh={}.hasOwnProperty,KO={};function GO(e,n){const t=n||KO,i=new Map,o=new Map,l=new Map,a={...PO,...t.handlers},d={all:h,applyData:YO,definitionById:i,footnoteById:o,footnoteCounts:l,footnoteOrder:[],handlers:a,one:f,options:t,patch:QO,wrap:ZO};return Ip(e,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const u=y.type==="definition"?i:o,p=String(y.identifier).toUpperCase();u.has(p)||u.set(p,y)}}),d;function f(y,u){const p=y.type,g=d.handlers[p];if(mh.call(d.handlers,p)&&g)return g(d,y,u);if(d.options.passThrough&&d.options.passThrough.includes(p)){if("children"in y){const{children:z,...x}=y,w=Cu(x);return w.children=d.all(y),w}return Cu(y)}return(d.options.unknownHandler||XO)(d,y,u)}function h(y){const u=[];if("children"in y){const p=y.children;let g=-1;for(;++g<p.length;){const b=d.one(p[g],y);if(b){if(g&&p[g-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=Gv(b.value)),!Array.isArray(b)&&b.type==="element")){const z=b.children[0];z&&z.type==="text"&&(z.value=Gv(z.value))}Array.isArray(b)?u.push(...b):u.push(b)}}}return u}}function QO(e,n){e.position&&(n.position=OD(e))}function YO(e,n){let t=n;if(e&&e.data){const i=e.data.hName,o=e.data.hChildren,l=e.data.hProperties;if(typeof i=="string")if(t.type==="element")t.tagName=i;else{const a="children"in t?t.children:[t];t={type:"element",tagName:i,properties:{},children:a}}t.type==="element"&&l&&Object.assign(t.properties,Cu(l)),"children"in t&&t.children&&o!==null&&o!==void 0&&(t.children=o)}return t}function XO(e,n){const t=n.data||{},i="value"in n&&!(mh.call(t,"hProperties")||mh.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function ZO(e,n){const t=[];let i=-1;for(n&&t.push({type:"text",value:`
`});++i<e.length;)i&&t.push({type:"text",value:`
`}),t.push(e[i]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function Gv(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Qv(e,n){const t=GO(e,n),i=t.one(e,void 0),o=NO(t),l=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return o&&l.children.push({type:"text",value:`
`},o),l}function JO(e,n){return e&&"run"in e?async function(t,i){const o=Qv(t,{file:i,...n});await e.run(o,i)}:function(t,i){return Qv(t,{file:i,...e||n})}}function Yv(e){if(e)throw e}var ff,Xv;function eN(){if(Xv)return ff;Xv=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=function(h){return typeof Array.isArray=="function"?Array.isArray(h):n.call(h)==="[object Array]"},l=function(h){if(!h||n.call(h)!=="[object Object]")return!1;var y=e.call(h,"constructor"),u=h.constructor&&h.constructor.prototype&&e.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!y&&!u)return!1;var p;for(p in h);return typeof p>"u"||e.call(h,p)},a=function(h,y){t&&y.name==="__proto__"?t(h,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):h[y.name]=y.newValue},d=function(h,y){if(y==="__proto__")if(e.call(h,y)){if(i)return i(h,y).value}else return;return h[y]};return ff=function f(){var h,y,u,p,g,b,z=arguments[0],x=1,w=arguments.length,_=!1;for(typeof z=="boolean"&&(_=z,z=arguments[1]||{},x=2),(z==null||typeof z!="object"&&typeof z!="function")&&(z={});x<w;++x)if(h=arguments[x],h!=null)for(y in h)u=d(z,y),p=d(h,y),z!==p&&(_&&p&&(l(p)||(g=o(p)))?(g?(g=!1,b=u&&o(u)?u:[]):b=u&&l(u)?u:{},a(z,{name:y,newValue:f(_,b,p)})):typeof p<"u"&&a(z,{name:y,newValue:p}));return z},ff}var nN=eN();const hf=ju(nN);function gh(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function tN(){const e=[],n={run:t,use:i};return n;function t(...o){let l=-1;const a=o.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);d(null,...o);function d(f,...h){const y=e[++l];let u=-1;if(f){a(f);return}for(;++u<o.length;)(h[u]===null||h[u]===void 0)&&(h[u]=o[u]);o=h,y?rN(y,d)(...h):a(null,...h)}}function i(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function rN(e,n){let t;return i;function i(...a){const d=e.length>a.length;let f;d&&a.push(o);try{f=e.apply(this,a)}catch(h){const y=h;if(d&&t)throw y;return o(y)}d||(f&&f.then&&typeof f.then=="function"?f.then(l,o):f instanceof Error?o(f):l(f))}function o(a,...d){t||(t=!0,n(a,...d))}function l(a){o(null,a)}}const ar={basename:iN,dirname:sN,extname:oN,join:aN,sep:"/"};function iN(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');Ra(e);let t=0,i=-1,o=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(l){t=o+1;break}}else i<0&&(l=!0,i=o+1);return i<0?"":e.slice(t,i)}if(n===e)return"";let a=-1,d=n.length-1;for(;o--;)if(e.codePointAt(o)===47){if(l){t=o+1;break}}else a<0&&(l=!0,a=o+1),d>-1&&(e.codePointAt(o)===n.codePointAt(d--)?d<0&&(i=o):(d=-1,i=a));return t===i?i=a:i<0&&(i=e.length),e.slice(t,i)}function sN(e){if(Ra(e),e.length===0)return".";let n=-1,t=e.length,i;for(;--t;)if(e.codePointAt(t)===47){if(i){n=t;break}}else i||(i=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function oN(e){Ra(e);let n=e.length,t=-1,i=0,o=-1,l=0,a;for(;n--;){const d=e.codePointAt(n);if(d===47){if(a){i=n+1;break}continue}t<0&&(a=!0,t=n+1),d===46?o<0?o=n:l!==1&&(l=1):o>-1&&(l=-1)}return o<0||t<0||l===0||l===1&&o===t-1&&o===i+1?"":e.slice(o,t)}function aN(...e){let n=-1,t;for(;++n<e.length;)Ra(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":lN(t)}function lN(e){Ra(e);const n=e.codePointAt(0)===47;let t=uN(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function uN(e,n){let t="",i=0,o=-1,l=0,a=-1,d,f;for(;++a<=e.length;){if(a<e.length)d=e.codePointAt(a);else{if(d===47)break;d=47}if(d===47){if(!(o===a-1||l===1))if(o!==a-1&&l===2){if(t.length<2||i!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(f=t.lastIndexOf("/"),f!==t.length-1){f<0?(t="",i=0):(t=t.slice(0,f),i=t.length-1-t.lastIndexOf("/")),o=a,l=0;continue}}else if(t.length>0){t="",i=0,o=a,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",i=2)}else t.length>0?t+="/"+e.slice(o+1,a):t=e.slice(o+1,a),i=a-o-1;o=a,l=0}else d===46&&l>-1?l++:l=-1}return t}function Ra(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const cN={cwd:dN};function dN(){return"/"}function yh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function fN(e){if(typeof e=="string")e=new URL(e);else if(!yh(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return hN(e)}function hN(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const i=n.codePointAt(t+2);if(i===70||i===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const pf=["history","path","basename","stem","extname","dirname"];class xx{constructor(n){let t;n?yh(n)?t={path:n}:typeof n=="string"||pN(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":cN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<pf.length;){const l=pf[i];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let o;for(o in t)pf.includes(o)||(this[o]=t[o])}get basename(){return typeof this.path=="string"?ar.basename(this.path):void 0}set basename(n){gf(n,"basename"),mf(n,"basename"),this.path=ar.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?ar.dirname(this.path):void 0}set dirname(n){Zv(this.basename,"dirname"),this.path=ar.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?ar.extname(this.path):void 0}set extname(n){if(mf(n,"extname"),Zv(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ar.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){yh(n)&&(n=fN(n)),gf(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?ar.basename(this.path,this.extname):void 0}set stem(n){gf(n,"stem"),mf(n,"stem"),this.path=ar.join(this.dirname||"",n+(this.extname||""))}fail(n,t,i){const o=this.message(n,t,i);throw o.fatal=!0,o}info(n,t,i){const o=this.message(n,t,i);return o.fatal=void 0,o}message(n,t,i){const o=new Dn(n,t,i);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function mf(e,n){if(e&&e.includes(ar.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+ar.sep+"`")}function gf(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Zv(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function pN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const mN=function(e){const i=this.constructor.prototype,o=i[e],l=function(){return o.apply(l,arguments)};return Object.setPrototypeOf(l,i),l},gN={}.hasOwnProperty;class Mp extends mN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=tN()}copy(){const n=new Mp;let t=-1;for(;++t<this.attachers.length;){const i=this.attachers[t];n.use(...i)}return n.data(hf(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(vf("data",this.frozen),this.namespace[n]=t,this):gN.call(this.namespace,n)&&this.namespace[n]||void 0:n?(vf("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const o=t.call(n,...i);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Jl(n),i=this.parser||this.Parser;return yf("parse",i),i(String(t),t)}process(n,t){const i=this;return this.freeze(),yf("process",this.parser||this.Parser),kf("process",this.compiler||this.Compiler),t?o(void 0,t):new Promise(o);function o(l,a){const d=Jl(n),f=i.parse(d);i.run(f,d,function(y,u,p){if(y||!u||!p)return h(y);const g=u,b=i.stringify(g,p);vN(b)?p.value=b:p.result=b,h(y,p)});function h(y,u){y||!u?a(y):l?l(u):t(void 0,u)}}}processSync(n){let t=!1,i;return this.freeze(),yf("processSync",this.parser||this.Parser),kf("processSync",this.compiler||this.Compiler),this.process(n,o),eb("processSync","process",t),i;function o(l,a){t=!0,Yv(l),i=a}}run(n,t,i){Jv(n),this.freeze();const o=this.transformers;return!i&&typeof t=="function"&&(i=t,t=void 0),i?l(void 0,i):new Promise(l);function l(a,d){const f=Jl(t);o.run(n,f,h);function h(y,u,p){const g=u||n;y?d(y):a?a(g):i(void 0,g,p)}}}runSync(n,t){let i=!1,o;return this.run(n,t,l),eb("runSync","run",i),o;function l(a,d){Yv(a),o=d,i=!0}}stringify(n,t){this.freeze();const i=Jl(t),o=this.compiler||this.Compiler;return kf("stringify",o),Jv(n),o(n,i)}use(n,...t){const i=this.attachers,o=this.namespace;if(vf("use",this.frozen),n!=null)if(typeof n=="function")f(n,t);else if(typeof n=="object")Array.isArray(n)?d(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(h){if(typeof h=="function")f(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[y,...u]=h;f(y,u)}else a(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function a(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(h.plugins),h.settings&&(o.settings=hf(!0,o.settings,h.settings))}function d(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){const u=h[y];l(u)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function f(h,y){let u=-1,p=-1;for(;++u<i.length;)if(i[u][0]===h){p=u;break}if(p===-1)i.push([h,...y]);else if(y.length>0){let[g,...b]=y;const z=i[p][1];gh(z)&&gh(g)&&(g=hf(!0,z,g)),i[p]=[h,g,...b]}}}}const yN=new Mp().freeze();function yf(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function kf(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function vf(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Jv(e){if(!gh(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function eb(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Jl(e){return kN(e)?e:new xx(e)}function kN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function vN(e){return typeof e=="string"||bN(e)}function bN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const zN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",nb=[],tb={allowDangerousHtml:!0},wN=/^(https?|ircs?|mailto|xmpp)$/i,xN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function SN(e){const n=_N(e),t=CN(e);return TN(n.runSync(n.parse(t),t),e)}function _N(e){const n=e.rehypePlugins||nb,t=e.remarkPlugins||nb,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...tb}:tb;return yN().use(sO).use(t).use(JO,i).use(n)}function CN(e){const n=e.children||"",t=new xx;return typeof n=="string"&&(t.value=n),t}function TN(e,n){const t=n.allowedElements,i=n.allowElement,o=n.components,l=n.disallowedElements,a=n.skipHtml,d=n.unwrapDisallowed,f=n.urlTransform||jN;for(const y of xN)Object.hasOwn(n,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+zN+y.id,void 0);return Ip(e,h),UD(e,{Fragment:N.Fragment,components:o,ignoreInvalidStyle:!0,jsx:N.jsx,jsxs:N.jsxs,passKeys:!0,passNode:!0});function h(y,u,p){if(y.type==="raw"&&p&&typeof u=="number")return a?p.children.splice(u,1):p.children[u]={type:"text",value:y.value},u;if(y.type==="element"){let g;for(g in uf)if(Object.hasOwn(uf,g)&&Object.hasOwn(y.properties,g)){const b=y.properties[g],z=uf[g];(z===null||z.includes(y.tagName))&&(y.properties[g]=f(String(b||""),g,y))}}if(y.type==="element"){let g=t?!t.includes(y.tagName):l?l.includes(y.tagName):!1;if(!g&&i&&typeof u=="number"&&(g=!i(y,u,p)),g&&p&&typeof u=="number")return d&&y.children?p.children.splice(u,1,...y.children):p.children.splice(u,1),u}}}function jN(e){const n=e.indexOf(":"),t=e.indexOf("?"),i=e.indexOf("#"),o=e.indexOf("/");return n===-1||o!==-1&&n>o||t!==-1&&n>t||i!==-1&&n>i||wN.test(e.slice(0,n))?e:""}function rb(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let i=0,o=t.indexOf(n);for(;o!==-1;)i++,o=t.indexOf(n,o+n.length);return i}function EN(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function AN(e,n,t){const o=Gu((t||{}).ignore||[]),l=PN(n);let a=-1;for(;++a<l.length;)wx(e,"text",d);function d(h,y){let u=-1,p;for(;++u<y.length;){const g=y[u],b=p?p.children:void 0;if(o(g,b?b.indexOf(g):void 0,p))return;p=g}if(p)return f(h,y)}function f(h,y){const u=y[y.length-1],p=l[a][0],g=l[a][1];let b=0;const x=u.children.indexOf(h);let w=!1,_=[];p.lastIndex=0;let C=p.exec(h.value);for(;C;){const R=C.index,D={index:C.index,input:C.input,stack:[...y,h]};let P=g(...C,D);if(typeof P=="string"&&(P=P.length>0?{type:"text",value:P}:void 0),P===!1?p.lastIndex=R+1:(b!==R&&_.push({type:"text",value:h.value.slice(b,R)}),Array.isArray(P)?_.push(...P):P&&_.push(P),b=R+C[0].length,w=!0),!p.global)break;C=p.exec(h.value)}return w?(b<h.value.length&&_.push({type:"text",value:h.value.slice(b)}),u.children.splice(x,1,..._)):_=[h],x+_.length}}function PN(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let i=-1;for(;++i<t.length;){const o=t[i];n.push([RN(o[0]),IN(o[1])])}return n}function RN(e){return typeof e=="string"?new RegExp(EN(e),"g"):e}function IN(e){return typeof e=="function"?e:function(){return e}}const bf="phrasing",zf=["autolink","link","image","label"];function MN(){return{transforms:[BN],enter:{literalAutolink:LN,literalAutolinkEmail:wf,literalAutolinkHttp:wf,literalAutolinkWww:wf},exit:{literalAutolink:VN,literalAutolinkEmail:FN,literalAutolinkHttp:ON,literalAutolinkWww:NN}}}function DN(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:bf,notInConstruct:zf},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:bf,notInConstruct:zf},{character:":",before:"[ps]",after:"\\/",inConstruct:bf,notInConstruct:zf}]}}function LN(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function wf(e){this.config.enter.autolinkProtocol.call(this,e)}function ON(e){this.config.exit.autolinkProtocol.call(this,e)}function NN(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function FN(e){this.config.exit.autolinkEmail.call(this,e)}function VN(e){this.exit(e)}function BN(e){AN(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,UN],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),$N]],{ignore:["link","linkReference"]})}function UN(e,n,t,i,o){let l="";if(!Sx(o)||(/^w/i.test(n)&&(t=n+t,n="",l="http://"),!HN(t)))return!1;const a=WN(t+i);if(!a[0])return!1;const d={type:"link",title:null,url:l+n+a[0],children:[{type:"text",value:n+a[0]}]};return a[1]?[d,{type:"text",value:a[1]}]:d}function $N(e,n,t,i){return!Sx(i,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function HN(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function WN(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],i=t.indexOf(")");const o=rb(e,"(");let l=rb(e,")");for(;i!==-1&&o>l;)e+=t.slice(0,i+1),t=t.slice(i+1),i=t.indexOf(")"),l++;return[e,t]}function Sx(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Qi(t)||Wu(t))&&(!n||t!==47)}_x.peek=eF;function qN(){this.buffer()}function KN(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function GN(){this.buffer()}function QN(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function YN(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=qt(this.sliceSerialize(e)).toLowerCase(),t.label=n}function XN(e){this.exit(e)}function ZN(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=qt(this.sliceSerialize(e)).toLowerCase(),t.label=n}function JN(e){this.exit(e)}function eF(){return"["}function _x(e,n,t,i){const o=t.createTracker(i);let l=o.move("[^");const a=t.enter("footnoteReference"),d=t.enter("reference");return l+=o.move(t.safe(t.associationId(e),{after:"]",before:l})),d(),a(),l+=o.move("]"),l}function nF(){return{enter:{gfmFootnoteCallString:qN,gfmFootnoteCall:KN,gfmFootnoteDefinitionLabelString:GN,gfmFootnoteDefinition:QN},exit:{gfmFootnoteCallString:YN,gfmFootnoteCall:XN,gfmFootnoteDefinitionLabelString:ZN,gfmFootnoteDefinition:JN}}}function tF(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:_x},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(i,o,l,a){const d=l.createTracker(a);let f=d.move("[^");const h=l.enter("footnoteDefinition"),y=l.enter("label");return f+=d.move(l.safe(l.associationId(i),{before:f,after:"]"})),y(),f+=d.move("]:"),i.children&&i.children.length>0&&(d.shift(4),f+=d.move((n?`
`:" ")+l.indentLines(l.containerFlow(i,d.current()),n?Cx:rF))),h(),f}}function rF(e,n,t){return n===0?e:Cx(e,n,t)}function Cx(e,n,t){return(t?"":"    ")+e}const iF=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Tx.peek=uF;function sF(){return{canContainEols:["delete"],enter:{strikethrough:aF},exit:{strikethrough:lF}}}function oF(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:iF}],handlers:{delete:Tx}}}function aF(e){this.enter({type:"delete",children:[]},e)}function lF(e){this.exit(e)}function Tx(e,n,t,i){const o=t.createTracker(i),l=t.enter("strikethrough");let a=o.move("~~");return a+=t.containerPhrasing(e,{...o.current(),before:a,after:"~"}),a+=o.move("~~"),l(),a}function uF(){return"~"}function cF(e){return e.length}function dF(e,n){const t=n||{},i=(t.align||[]).concat(),o=t.stringLength||cF,l=[],a=[],d=[],f=[];let h=0,y=-1;for(;++y<e.length;){const z=[],x=[];let w=-1;for(e[y].length>h&&(h=e[y].length);++w<e[y].length;){const _=fF(e[y][w]);if(t.alignDelimiters!==!1){const C=o(_);x[w]=C,(f[w]===void 0||C>f[w])&&(f[w]=C)}z.push(_)}a[y]=z,d[y]=x}let u=-1;if(typeof i=="object"&&"length"in i)for(;++u<h;)l[u]=ib(i[u]);else{const z=ib(i);for(;++u<h;)l[u]=z}u=-1;const p=[],g=[];for(;++u<h;){const z=l[u];let x="",w="";z===99?(x=":",w=":"):z===108?x=":":z===114&&(w=":");let _=t.alignDelimiters===!1?1:Math.max(1,f[u]-x.length-w.length);const C=x+"-".repeat(_)+w;t.alignDelimiters!==!1&&(_=x.length+_+w.length,_>f[u]&&(f[u]=_),g[u]=_),p[u]=C}a.splice(1,0,p),d.splice(1,0,g),y=-1;const b=[];for(;++y<a.length;){const z=a[y],x=d[y];u=-1;const w=[];for(;++u<h;){const _=z[u]||"";let C="",R="";if(t.alignDelimiters!==!1){const D=f[u]-(x[u]||0),P=l[u];P===114?C=" ".repeat(D):P===99?D%2?(C=" ".repeat(D/2+.5),R=" ".repeat(D/2-.5)):(C=" ".repeat(D/2),R=C):R=" ".repeat(D)}t.delimiterStart!==!1&&!u&&w.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&_==="")&&(t.delimiterStart!==!1||u)&&w.push(" "),t.alignDelimiters!==!1&&w.push(C),w.push(_),t.alignDelimiters!==!1&&w.push(R),t.padding!==!1&&w.push(" "),(t.delimiterEnd!==!1||u!==h-1)&&w.push("|")}b.push(t.delimiterEnd===!1?w.join("").replace(/ +$/,""):w.join(""))}return b.join(`
`)}function fF(e){return e==null?"":String(e)}function ib(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function hF(e,n,t,i){const o=t.enter("blockquote"),l=t.createTracker(i);l.move("> "),l.shift(2);const a=t.indentLines(t.containerFlow(e,l.current()),pF);return o(),a}function pF(e,n,t){return">"+(t?"":" ")+e}function mF(e,n){return sb(e,n.inConstruct,!0)&&!sb(e,n.notInConstruct,!1)}function sb(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let i=-1;for(;++i<n.length;)if(e.includes(n[i]))return!0;return!1}function ob(e,n,t,i){let o=-1;for(;++o<t.unsafe.length;)if(t.unsafe[o].character===`
`&&mF(t.stack,t.unsafe[o]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function gF(e,n){const t=String(e);let i=t.indexOf(n),o=i,l=0,a=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===o?++l>a&&(a=l):l=1,o=i+n.length,i=t.indexOf(n,o);return a}function yF(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function kF(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function vF(e,n,t,i){const o=kF(t),l=e.value||"",a=o==="`"?"GraveAccent":"Tilde";if(yF(e,t)){const u=t.enter("codeIndented"),p=t.indentLines(l,bF);return u(),p}const d=t.createTracker(i),f=o.repeat(Math.max(gF(l,o)+1,3)),h=t.enter("codeFenced");let y=d.move(f);if(e.lang){const u=t.enter(`codeFencedLang${a}`);y+=d.move(t.safe(e.lang,{before:y,after:" ",encode:["`"],...d.current()})),u()}if(e.lang&&e.meta){const u=t.enter(`codeFencedMeta${a}`);y+=d.move(" "),y+=d.move(t.safe(e.meta,{before:y,after:`
`,encode:["`"],...d.current()})),u()}return y+=d.move(`
`),l&&(y+=d.move(l+`
`)),y+=d.move(f),h(),y}function bF(e,n,t){return(t?"":"    ")+e}function Dp(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function zF(e,n,t,i){const o=Dp(t),l=o==='"'?"Quote":"Apostrophe",a=t.enter("definition");let d=t.enter("label");const f=t.createTracker(i);let h=f.move("[");return h+=f.move(t.safe(t.associationId(e),{before:h,after:"]",...f.current()})),h+=f.move("]: "),d(),!e.url||/[\0- \u007F]/.test(e.url)?(d=t.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(t.safe(e.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(d=t.enter("destinationRaw"),h+=f.move(t.safe(e.url,{before:h,after:e.title?" ":`
`,...f.current()}))),d(),e.title&&(d=t.enter(`title${l}`),h+=f.move(" "+o),h+=f.move(t.safe(e.title,{before:h,after:o,...f.current()})),h+=f.move(o),d()),a(),h}function wF(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function va(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Tu(e,n,t){const i=Xs(e),o=Xs(n);return i===void 0?o===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}jx.peek=xF;function jx(e,n,t,i){const o=wF(t),l=t.enter("emphasis"),a=t.createTracker(i),d=a.move(o);let f=a.move(t.containerPhrasing(e,{after:o,before:d,...a.current()}));const h=f.charCodeAt(0),y=Tu(i.before.charCodeAt(i.before.length-1),h,o);y.inside&&(f=va(h)+f.slice(1));const u=f.charCodeAt(f.length-1),p=Tu(i.after.charCodeAt(0),u,o);p.inside&&(f=f.slice(0,-1)+va(u));const g=a.move(o);return l(),t.attentionEncodeSurroundingInfo={after:p.outside,before:y.outside},d+f+g}function xF(e,n,t){return t.options.emphasis||"*"}function SF(e,n){let t=!1;return Ip(e,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return t=!0,ph}),!!((!e.depth||e.depth<3)&&Cp(e)&&(n.options.setext||t))}function _F(e,n,t,i){const o=Math.max(Math.min(6,e.depth||1),1),l=t.createTracker(i);if(SF(e,t)){const y=t.enter("headingSetext"),u=t.enter("phrasing"),p=t.containerPhrasing(e,{...l.current(),before:`
`,after:`
`});return u(),y(),p+`
`+(o===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const a="#".repeat(o),d=t.enter("headingAtx"),f=t.enter("phrasing");l.move(a+" ");let h=t.containerPhrasing(e,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(h)&&(h=va(h.charCodeAt(0))+h.slice(1)),h=h?a+" "+h:a,t.options.closeAtx&&(h+=" "+a),f(),d(),h}Ex.peek=CF;function Ex(e){return e.value||""}function CF(){return"<"}Ax.peek=TF;function Ax(e,n,t,i){const o=Dp(t),l=o==='"'?"Quote":"Apostrophe",a=t.enter("image");let d=t.enter("label");const f=t.createTracker(i);let h=f.move("![");return h+=f.move(t.safe(e.alt,{before:h,after:"]",...f.current()})),h+=f.move("]("),d(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(d=t.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(t.safe(e.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(d=t.enter("destinationRaw"),h+=f.move(t.safe(e.url,{before:h,after:e.title?" ":")",...f.current()}))),d(),e.title&&(d=t.enter(`title${l}`),h+=f.move(" "+o),h+=f.move(t.safe(e.title,{before:h,after:o,...f.current()})),h+=f.move(o),d()),h+=f.move(")"),a(),h}function TF(){return"!"}Px.peek=jF;function Px(e,n,t,i){const o=e.referenceType,l=t.enter("imageReference");let a=t.enter("label");const d=t.createTracker(i);let f=d.move("![");const h=t.safe(e.alt,{before:f,after:"]",...d.current()});f+=d.move(h+"]["),a();const y=t.stack;t.stack=[],a=t.enter("reference");const u=t.safe(t.associationId(e),{before:f,after:"]",...d.current()});return a(),t.stack=y,l(),o==="full"||!h||h!==u?f+=d.move(u+"]"):o==="shortcut"?f=f.slice(0,-1):f+=d.move("]"),f}function jF(){return"!"}Rx.peek=EF;function Rx(e,n,t){let i=e.value||"",o="`",l=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(i);)o+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++l<t.unsafe.length;){const a=t.unsafe[l],d=t.compilePattern(a);let f;if(a.atBreak)for(;f=d.exec(i);){let h=f.index;i.charCodeAt(h)===10&&i.charCodeAt(h-1)===13&&h--,i=i.slice(0,h)+" "+i.slice(f.index+1)}}return o+i+o}function EF(){return"`"}function Ix(e,n){const t=Cp(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Mx.peek=AF;function Mx(e,n,t,i){const o=Dp(t),l=o==='"'?"Quote":"Apostrophe",a=t.createTracker(i);let d,f;if(Ix(e,t)){const y=t.stack;t.stack=[],d=t.enter("autolink");let u=a.move("<");return u+=a.move(t.containerPhrasing(e,{before:u,after:">",...a.current()})),u+=a.move(">"),d(),t.stack=y,u}d=t.enter("link"),f=t.enter("label");let h=a.move("[");return h+=a.move(t.containerPhrasing(e,{before:h,after:"](",...a.current()})),h+=a.move("]("),f(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(f=t.enter("destinationLiteral"),h+=a.move("<"),h+=a.move(t.safe(e.url,{before:h,after:">",...a.current()})),h+=a.move(">")):(f=t.enter("destinationRaw"),h+=a.move(t.safe(e.url,{before:h,after:e.title?" ":")",...a.current()}))),f(),e.title&&(f=t.enter(`title${l}`),h+=a.move(" "+o),h+=a.move(t.safe(e.title,{before:h,after:o,...a.current()})),h+=a.move(o),f()),h+=a.move(")"),d(),h}function AF(e,n,t){return Ix(e,t)?"<":"["}Dx.peek=PF;function Dx(e,n,t,i){const o=e.referenceType,l=t.enter("linkReference");let a=t.enter("label");const d=t.createTracker(i);let f=d.move("[");const h=t.containerPhrasing(e,{before:f,after:"]",...d.current()});f+=d.move(h+"]["),a();const y=t.stack;t.stack=[],a=t.enter("reference");const u=t.safe(t.associationId(e),{before:f,after:"]",...d.current()});return a(),t.stack=y,l(),o==="full"||!h||h!==u?f+=d.move(u+"]"):o==="shortcut"?f=f.slice(0,-1):f+=d.move("]"),f}function PF(){return"["}function Lp(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function RF(e){const n=Lp(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function IF(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function Lx(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function MF(e,n,t,i){const o=t.enter("list"),l=t.bulletCurrent;let a=e.ordered?IF(t):Lp(t);const d=e.ordered?a==="."?")":".":RF(t);let f=n&&t.bulletLastUsed?a===t.bulletLastUsed:!1;if(!e.ordered){const y=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&y&&(!y.children||!y.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(f=!0),Lx(t)===a&&y){let u=-1;for(;++u<e.children.length;){const p=e.children[u];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){f=!0;break}}}}f&&(a=d),t.bulletCurrent=a;const h=t.containerFlow(e,i);return t.bulletLastUsed=a,t.bulletCurrent=l,o(),h}function DF(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function LF(e,n,t,i){const o=DF(t);let l=t.bulletCurrent||Lp(t);n&&n.type==="list"&&n.ordered&&(l=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+l);let a=l.length+1;(o==="tab"||o==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(a=Math.ceil(a/4)*4);const d=t.createTracker(i);d.move(l+" ".repeat(a-l.length)),d.shift(a);const f=t.enter("listItem"),h=t.indentLines(t.containerFlow(e,d.current()),y);return f(),h;function y(u,p,g){return p?(g?"":" ".repeat(a))+u:(g?l:l+" ".repeat(a-l.length))+u}}function OF(e,n,t,i){const o=t.enter("paragraph"),l=t.enter("phrasing"),a=t.containerPhrasing(e,i);return l(),o(),a}const NF=Gu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function FF(e,n,t,i){return(e.children.some(function(a){return NF(a)})?t.containerPhrasing:t.containerFlow).call(t,e,i)}function VF(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}Ox.peek=BF;function Ox(e,n,t,i){const o=VF(t),l=t.enter("strong"),a=t.createTracker(i),d=a.move(o+o);let f=a.move(t.containerPhrasing(e,{after:o,before:d,...a.current()}));const h=f.charCodeAt(0),y=Tu(i.before.charCodeAt(i.before.length-1),h,o);y.inside&&(f=va(h)+f.slice(1));const u=f.charCodeAt(f.length-1),p=Tu(i.after.charCodeAt(0),u,o);p.inside&&(f=f.slice(0,-1)+va(u));const g=a.move(o+o);return l(),t.attentionEncodeSurroundingInfo={after:p.outside,before:y.outside},d+f+g}function BF(e,n,t){return t.options.strong||"*"}function UF(e,n,t,i){return t.safe(e.value,i)}function $F(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function HF(e,n,t){const i=(Lx(t)+(t.options.ruleSpaces?" ":"")).repeat($F(t));return t.options.ruleSpaces?i.slice(0,-1):i}const Nx={blockquote:hF,break:ob,code:vF,definition:zF,emphasis:jx,hardBreak:ob,heading:_F,html:Ex,image:Ax,imageReference:Px,inlineCode:Rx,link:Mx,linkReference:Dx,list:MF,listItem:LF,paragraph:OF,root:FF,strong:Ox,text:UF,thematicBreak:HF};function WF(){return{enter:{table:qF,tableData:ab,tableHeader:ab,tableRow:GF},exit:{codeText:QF,table:KF,tableData:xf,tableHeader:xf,tableRow:xf}}}function qF(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function KF(e){this.exit(e),this.data.inTable=void 0}function GF(e){this.enter({type:"tableRow",children:[]},e)}function xf(e){this.exit(e)}function ab(e){this.enter({type:"tableCell",children:[]},e)}function QF(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,YF));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function YF(e,n){return n==="|"?n:e}function XF(e){const n=e||{},t=n.tableCellPadding,i=n.tablePipeAlign,o=n.stringLength,l=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:a,tableCell:f,tableRow:d}};function a(g,b,z,x){return h(y(g,z,x),g.align)}function d(g,b,z,x){const w=u(g,z,x),_=h([w]);return _.slice(0,_.indexOf(`
`))}function f(g,b,z,x){const w=z.enter("tableCell"),_=z.enter("phrasing"),C=z.containerPhrasing(g,{...x,before:l,after:l});return _(),w(),C}function h(g,b){return dF(g,{align:b,alignDelimiters:i,padding:t,stringLength:o})}function y(g,b,z){const x=g.children;let w=-1;const _=[],C=b.enter("table");for(;++w<x.length;)_[w]=u(x[w],b,z);return C(),_}function u(g,b,z){const x=g.children;let w=-1;const _=[],C=b.enter("tableRow");for(;++w<x.length;)_[w]=f(x[w],g,b,z);return C(),_}function p(g,b,z){let x=Nx.inlineCode(g,b,z);return z.stack.includes("tableCell")&&(x=x.replace(/\|/g,"\\$&")),x}}function ZF(){return{exit:{taskListCheckValueChecked:lb,taskListCheckValueUnchecked:lb,paragraph:e4}}}function JF(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:n4}}}function lb(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function e4(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const i=t.children[0];if(i&&i.type==="text"){const o=n.children;let l=-1,a;for(;++l<o.length;){const d=o[l];if(d.type==="paragraph"){a=d;break}}a===t&&(i.value=i.value.slice(1),i.value.length===0?t.children.shift():t.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,t.position.start=Object.assign({},i.position.start)))}}this.exit(e)}function n4(e,n,t,i){const o=e.children[0],l=typeof e.checked=="boolean"&&o&&o.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",d=t.createTracker(i);l&&d.move(a);let f=Nx.listItem(e,n,t,{...i,...d.current()});return l&&(f=f.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),f;function h(y){return y+a}}function t4(){return[MN(),nF(),sF(),WF(),ZF()]}function r4(e){return{extensions:[DN(),tF(e),oF(),XF(e),JF()]}}const i4={tokenize:c4,partial:!0},Fx={tokenize:d4,partial:!0},Vx={tokenize:f4,partial:!0},Bx={tokenize:h4,partial:!0},s4={tokenize:p4,partial:!0},Ux={name:"wwwAutolink",tokenize:l4,previous:Hx},$x={name:"protocolAutolink",tokenize:u4,previous:Wx},Dr={name:"emailAutolink",tokenize:a4,previous:qx},kr={};function o4(){return{text:kr}}let Li=48;for(;Li<123;)kr[Li]=Dr,Li++,Li===58?Li=65:Li===91&&(Li=97);kr[43]=Dr;kr[45]=Dr;kr[46]=Dr;kr[95]=Dr;kr[72]=[Dr,$x];kr[104]=[Dr,$x];kr[87]=[Dr,Ux];kr[119]=[Dr,Ux];function a4(e,n,t){const i=this;let o,l;return a;function a(u){return!kh(u)||!qx.call(i,i.previous)||Op(i.events)?t(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),d(u))}function d(u){return kh(u)?(e.consume(u),d):u===64?(e.consume(u),f):t(u)}function f(u){return u===46?e.check(s4,y,h)(u):u===45||u===95||Mn(u)?(l=!0,e.consume(u),f):y(u)}function h(u){return e.consume(u),o=!0,f}function y(u){return l&&o&&Hn(i.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(u)):t(u)}}function l4(e,n,t){const i=this;return o;function o(a){return a!==87&&a!==119||!Hx.call(i,i.previous)||Op(i.events)?t(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(i4,e.attempt(Fx,e.attempt(Vx,l),t),t)(a))}function l(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(a)}}function u4(e,n,t){const i=this;let o="",l=!1;return a;function a(u){return(u===72||u===104)&&Wx.call(i,i.previous)&&!Op(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(u),e.consume(u),d):t(u)}function d(u){if(Hn(u)&&o.length<5)return o+=String.fromCodePoint(u),e.consume(u),d;if(u===58){const p=o.toLowerCase();if(p==="http"||p==="https")return e.consume(u),f}return t(u)}function f(u){return u===47?(e.consume(u),l?h:(l=!0,f)):t(u)}function h(u){return u===null||Su(u)||$e(u)||Qi(u)||Wu(u)?t(u):e.attempt(Fx,e.attempt(Vx,y),t)(u)}function y(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(u)}}function c4(e,n,t){let i=0;return o;function o(a){return(a===87||a===119)&&i<3?(i++,e.consume(a),o):a===46&&i===3?(e.consume(a),l):t(a)}function l(a){return a===null?t(a):n(a)}}function d4(e,n,t){let i,o,l;return a;function a(h){return h===46||h===95?e.check(Bx,f,d)(h):h===null||$e(h)||Qi(h)||h!==45&&Wu(h)?f(h):(l=!0,e.consume(h),a)}function d(h){return h===95?i=!0:(o=i,i=void 0),e.consume(h),a}function f(h){return o||i||!l?t(h):n(h)}}function f4(e,n){let t=0,i=0;return o;function o(a){return a===40?(t++,e.consume(a),o):a===41&&i<t?l(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(Bx,n,l)(a):a===null||$e(a)||Qi(a)?n(a):(e.consume(a),o)}function l(a){return a===41&&i++,e.consume(a),o}}function h4(e,n,t){return i;function i(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(e.consume(d),i):d===38?(e.consume(d),l):d===93?(e.consume(d),o):d===60||d===null||$e(d)||Qi(d)?n(d):t(d)}function o(d){return d===null||d===40||d===91||$e(d)||Qi(d)?n(d):i(d)}function l(d){return Hn(d)?a(d):t(d)}function a(d){return d===59?(e.consume(d),i):Hn(d)?(e.consume(d),a):t(d)}}function p4(e,n,t){return i;function i(l){return e.consume(l),o}function o(l){return Mn(l)?t(l):n(l)}}function Hx(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||$e(e)}function Wx(e){return!Hn(e)}function qx(e){return!(e===47||kh(e))}function kh(e){return e===43||e===45||e===46||e===95||Mn(e)}function Op(e){let n=e.length,t=!1;for(;n--;){const i=e[n][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){t=!0;break}if(i._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const m4={tokenize:x4,partial:!0};function g4(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:b4,continuation:{tokenize:z4},exit:w4}},text:{91:{name:"gfmFootnoteCall",tokenize:v4},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:y4,resolveTo:k4}}}}function y4(e,n,t){const i=this;let o=i.events.length;const l=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let a;for(;o--;){const f=i.events[o][1];if(f.type==="labelImage"){a=f;break}if(f.type==="gfmFootnoteCall"||f.type==="labelLink"||f.type==="label"||f.type==="image"||f.type==="link")break}return d;function d(f){if(!a||!a._balanced)return t(f);const h=qt(i.sliceSerialize({start:a.end,end:i.now()}));return h.codePointAt(0)!==94||!l.includes(h.slice(1))?t(f):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),n(f))}}function k4(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},d=[e[t+1],e[t+2],["enter",i,n],e[t+3],e[t+4],["enter",o,n],["exit",o,n],["enter",l,n],["enter",a,n],["exit",a,n],["exit",l,n],e[e.length-2],e[e.length-1],["exit",i,n]];return e.splice(t,e.length-t+1,...d),e}function v4(e,n,t){const i=this,o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let l=0,a;return d;function d(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),f}function f(u){return u!==94?t(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",h)}function h(u){if(l>999||u===93&&!a||u===null||u===91||$e(u))return t(u);if(u===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return o.includes(qt(i.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(u)}return $e(u)||(a=!0),l++,e.consume(u),u===92?y:h}function y(u){return u===91||u===92||u===93?(e.consume(u),l++,h):h(u)}}function b4(e,n,t){const i=this,o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let l,a=0,d;return f;function f(b){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(b){return b===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",y):t(b)}function y(b){if(a>999||b===93&&!d||b===null||b===91||$e(b))return t(b);if(b===93){e.exit("chunkString");const z=e.exit("gfmFootnoteDefinitionLabelString");return l=qt(i.sliceSerialize(z)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return $e(b)||(d=!0),a++,e.consume(b),b===92?u:y}function u(b){return b===91||b===92||b===93?(e.consume(b),a++,y):y(b)}function p(b){return b===58?(e.enter("definitionMarker"),e.consume(b),e.exit("definitionMarker"),o.includes(l)||o.push(l),De(e,g,"gfmFootnoteDefinitionWhitespace")):t(b)}function g(b){return n(b)}}function z4(e,n,t){return e.check(Pa,n,e.attempt(m4,n,t))}function w4(e){e.exit("gfmFootnoteDefinition")}function x4(e,n,t){const i=this;return De(e,o,"gfmFootnoteDefinitionIndent",5);function o(l){const a=i.events[i.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?n(l):t(l)}}function S4(e){let t=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:l,resolveAll:o};return t==null&&(t=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function o(a,d){let f=-1;for(;++f<a.length;)if(a[f][0]==="enter"&&a[f][1].type==="strikethroughSequenceTemporary"&&a[f][1]._close){let h=f;for(;h--;)if(a[h][0]==="exit"&&a[h][1].type==="strikethroughSequenceTemporary"&&a[h][1]._open&&a[f][1].end.offset-a[f][1].start.offset===a[h][1].end.offset-a[h][1].start.offset){a[f][1].type="strikethroughSequence",a[h][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},a[h][1].start),end:Object.assign({},a[f][1].end)},u={type:"strikethroughText",start:Object.assign({},a[h][1].end),end:Object.assign({},a[f][1].start)},p=[["enter",y,d],["enter",a[h][1],d],["exit",a[h][1],d],["enter",u,d]],g=d.parser.constructs.insideSpan.null;g&&pt(p,p.length,0,qu(g,a.slice(h+1,f),d)),pt(p,p.length,0,[["exit",u,d],["enter",a[f][1],d],["exit",a[f][1],d],["exit",y,d]]),pt(a,h-1,f-h+3,p),f=h+p.length-2;break}}for(f=-1;++f<a.length;)a[f][1].type==="strikethroughSequenceTemporary"&&(a[f][1].type="data");return a}function l(a,d,f){const h=this.previous,y=this.events;let u=0;return p;function p(b){return h===126&&y[y.length-1][1].type!=="characterEscape"?f(b):(a.enter("strikethroughSequenceTemporary"),g(b))}function g(b){const z=Xs(h);if(b===126)return u>1?f(b):(a.consume(b),u++,g);if(u<2&&!t)return f(b);const x=a.exit("strikethroughSequenceTemporary"),w=Xs(b);return x._open=!w||w===2&&!!z,x._close=!z||z===2&&!!w,d(b)}}}class _4{constructor(){this.map=[]}add(n,t,i){C4(this,n,t,i)}consume(n){if(this.map.sort(function(l,a){return l[0]-a[0]}),this.map.length===0)return;let t=this.map.length;const i=[];for(;t>0;)t-=1,i.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];i.push(n.slice()),n.length=0;let o=i.pop();for(;o;){for(const l of o)n.push(l);o=i.pop()}this.map.length=0}}function C4(e,n,t,i){let o=0;if(!(t===0&&i.length===0)){for(;o<e.map.length;){if(e.map[o][0]===n){e.map[o][1]+=t,e.map[o][2].push(...i);return}o+=1}e.map.push([n,t,i])}}function T4(e,n){let t=!1;const i=[];for(;n<e.length;){const o=e[n];if(t){if(o[0]==="enter")o[1].type==="tableContent"&&i.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const l=i.length-1;i[l]=i[l]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return i}function j4(){return{flow:{null:{name:"table",tokenize:E4,resolveAll:A4}}}}function E4(e,n,t){const i=this;let o=0,l=0,a;return d;function d(L){let J=i.events.length-1;for(;J>-1;){const B=i.events[J][1].type;if(B==="lineEnding"||B==="linePrefix")J--;else break}const G=J>-1?i.events[J][1].type:null,ee=G==="tableHead"||G==="tableRow"?P:f;return ee===P&&i.parser.lazy[i.now().line]?t(L):ee(L)}function f(L){return e.enter("tableHead"),e.enter("tableRow"),h(L)}function h(L){return L===124||(a=!0,l+=1),y(L)}function y(L){return L===null?t(L):ze(L)?l>1?(l=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(L),e.exit("lineEnding"),g):t(L):Me(L)?De(e,y,"whitespace")(L):(l+=1,a&&(a=!1,o+=1),L===124?(e.enter("tableCellDivider"),e.consume(L),e.exit("tableCellDivider"),a=!0,y):(e.enter("data"),u(L)))}function u(L){return L===null||L===124||$e(L)?(e.exit("data"),y(L)):(e.consume(L),L===92?p:u)}function p(L){return L===92||L===124?(e.consume(L),u):u(L)}function g(L){return i.interrupt=!1,i.parser.lazy[i.now().line]?t(L):(e.enter("tableDelimiterRow"),a=!1,Me(L)?De(e,b,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):b(L))}function b(L){return L===45||L===58?x(L):L===124?(a=!0,e.enter("tableCellDivider"),e.consume(L),e.exit("tableCellDivider"),z):D(L)}function z(L){return Me(L)?De(e,x,"whitespace")(L):x(L)}function x(L){return L===58?(l+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(L),e.exit("tableDelimiterMarker"),w):L===45?(l+=1,w(L)):L===null||ze(L)?R(L):D(L)}function w(L){return L===45?(e.enter("tableDelimiterFiller"),_(L)):D(L)}function _(L){return L===45?(e.consume(L),_):L===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(L),e.exit("tableDelimiterMarker"),C):(e.exit("tableDelimiterFiller"),C(L))}function C(L){return Me(L)?De(e,R,"whitespace")(L):R(L)}function R(L){return L===124?b(L):L===null||ze(L)?!a||o!==l?D(L):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(L)):D(L)}function D(L){return t(L)}function P(L){return e.enter("tableRow"),$(L)}function $(L){return L===124?(e.enter("tableCellDivider"),e.consume(L),e.exit("tableCellDivider"),$):L===null||ze(L)?(e.exit("tableRow"),n(L)):Me(L)?De(e,$,"whitespace")(L):(e.enter("data"),Y(L))}function Y(L){return L===null||L===124||$e(L)?(e.exit("data"),$(L)):(e.consume(L),L===92?K:Y)}function K(L){return L===92||L===124?(e.consume(L),Y):Y(L)}}function A4(e,n){let t=-1,i=!0,o=0,l=[0,0,0,0],a=[0,0,0,0],d=!1,f=0,h,y,u;const p=new _4;for(;++t<e.length;){const g=e[t],b=g[1];g[0]==="enter"?b.type==="tableHead"?(d=!1,f!==0&&(ub(p,n,f,h,y),y=void 0,f=0),h={type:"table",start:Object.assign({},b.start),end:Object.assign({},b.end)},p.add(t,0,[["enter",h,n]])):b.type==="tableRow"||b.type==="tableDelimiterRow"?(i=!0,u=void 0,l=[0,0,0,0],a=[0,t+1,0,0],d&&(d=!1,y={type:"tableBody",start:Object.assign({},b.start),end:Object.assign({},b.end)},p.add(t,0,[["enter",y,n]])),o=b.type==="tableDelimiterRow"?2:y?3:1):o&&(b.type==="data"||b.type==="tableDelimiterMarker"||b.type==="tableDelimiterFiller")?(i=!1,a[2]===0&&(l[1]!==0&&(a[0]=a[1],u=eu(p,n,l,o,void 0,u),l=[0,0,0,0]),a[2]=t)):b.type==="tableCellDivider"&&(i?i=!1:(l[1]!==0&&(a[0]=a[1],u=eu(p,n,l,o,void 0,u)),l=a,a=[l[1],t,0,0])):b.type==="tableHead"?(d=!0,f=t):b.type==="tableRow"||b.type==="tableDelimiterRow"?(f=t,l[1]!==0?(a[0]=a[1],u=eu(p,n,l,o,t,u)):a[1]!==0&&(u=eu(p,n,a,o,t,u)),o=0):o&&(b.type==="data"||b.type==="tableDelimiterMarker"||b.type==="tableDelimiterFiller")&&(a[3]=t)}for(f!==0&&ub(p,n,f,h,y),p.consume(n.events),t=-1;++t<n.events.length;){const g=n.events[t];g[0]==="enter"&&g[1].type==="table"&&(g[1]._align=T4(n.events,t))}return e}function eu(e,n,t,i,o,l){const a=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",d="tableContent";t[0]!==0&&(l.end=Object.assign({},js(n.events,t[0])),e.add(t[0],0,[["exit",l,n]]));const f=js(n.events,t[1]);if(l={type:a,start:Object.assign({},f),end:Object.assign({},f)},e.add(t[1],0,[["enter",l,n]]),t[2]!==0){const h=js(n.events,t[2]),y=js(n.events,t[3]),u={type:d,start:Object.assign({},h),end:Object.assign({},y)};if(e.add(t[2],0,[["enter",u,n]]),i!==2){const p=n.events[t[2]],g=n.events[t[3]];if(p[1].end=Object.assign({},g[1].end),p[1].type="chunkText",p[1].contentType="text",t[3]>t[2]+1){const b=t[2]+1,z=t[3]-t[2]-1;e.add(b,z,[])}}e.add(t[3]+1,0,[["exit",u,n]])}return o!==void 0&&(l.end=Object.assign({},js(n.events,o)),e.add(o,0,[["exit",l,n]]),l=void 0),l}function ub(e,n,t,i,o){const l=[],a=js(n.events,t);o&&(o.end=Object.assign({},a),l.push(["exit",o,n])),i.end=Object.assign({},a),l.push(["exit",i,n]),e.add(t+1,0,l)}function js(e,n){const t=e[n],i=t[0]==="enter"?"start":"end";return t[1][i]}const P4={name:"tasklistCheck",tokenize:I4};function R4(){return{text:{91:P4}}}function I4(e,n,t){const i=this;return o;function o(f){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?t(f):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(f),e.exit("taskListCheckMarker"),l)}function l(f){return $e(f)?(e.enter("taskListCheckValueUnchecked"),e.consume(f),e.exit("taskListCheckValueUnchecked"),a):f===88||f===120?(e.enter("taskListCheckValueChecked"),e.consume(f),e.exit("taskListCheckValueChecked"),a):t(f)}function a(f){return f===93?(e.enter("taskListCheckMarker"),e.consume(f),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),d):t(f)}function d(f){return ze(f)?n(f):Me(f)?e.check({tokenize:M4},n,t)(f):t(f)}}function M4(e,n,t){return De(e,i,"whitespace");function i(o){return o===null?t(o):n(o)}}function D4(e){return rx([o4(),g4(),S4(e),j4(),R4()])}const L4={};function O4(e){const n=this,t=e||L4,i=n.data(),o=i.micromarkExtensions||(i.micromarkExtensions=[]),l=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),a=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);o.push(D4(t)),l.push(t4()),a.push(r4(t))}const N4=`# Flashcard Learner Application Specification

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
5.  **Session End/Reset:** User can reset statistics or start a new session at any time.`,F4=()=>N.jsx("div",{className:"min-h-screen flex flex-col items-center bg-gray-100 p-4",children:N.jsxs("div",{className:"w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8",children:[N.jsx("div",{className:"flex justify-start mb-6",children:N.jsx(Nf,{to:"/",children:N.jsx(rt,{variant:"outline",children:"Back to Home"})})}),N.jsx("div",{className:"prose prose-lg max-w-none text-gray-800",children:N.jsx(SN,{remarkPlugins:[O4],children:N4})}),N.jsx("div",{className:"flex justify-start mt-8",children:N.jsx(Nf,{to:"/",children:N.jsx(rt,{variant:"outline",children:"Back to Home"})})})]})}),V4=new sE,B4=()=>N.jsx(aE,{client:V4,children:N.jsxs(Dj,{children:[N.jsx(RC,{}),N.jsx(cT,{}),N.jsx(oA,{children:N.jsxs(JE,{children:[N.jsx(iu,{path:"/",element:N.jsx(fD,{})}),N.jsx(iu,{path:"/specs",element:N.jsx(F4,{})})," ",N.jsx(iu,{path:"*",element:N.jsx(hD,{})})]})})]})});GS.createRoot(document.getElementById("root")).render(N.jsx(B4,{}));
