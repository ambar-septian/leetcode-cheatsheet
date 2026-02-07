(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))d(E);new MutationObserver(E=>{for(const L of E)if(L.type==="childList")for(const B of L.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&d(B)}).observe(document,{childList:!0,subtree:!0});function x(E){const L={};return E.integrity&&(L.integrity=E.integrity),E.referrerPolicy&&(L.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?L.credentials="include":E.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function d(E){if(E.ep)return;E.ep=!0;const L=x(E);fetch(E.href,L)}})();function La(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var xu={exports:{}},Li={};var hh;function nm(){if(hh)return Li;hh=1;var o=Symbol.for("react.transitional.element"),y=Symbol.for("react.fragment");function x(d,E,L){var B=null;if(L!==void 0&&(B=""+L),E.key!==void 0&&(B=""+E.key),"key"in E){L={};for(var K in E)K!=="key"&&(L[K]=E[K])}else L=E;return E=L.ref,{$$typeof:o,type:d,key:B,ref:E!==void 0?E:null,props:L}}return Li.Fragment=y,Li.jsx=x,Li.jsxs=x,Li}var gh;function rm(){return gh||(gh=1,xu.exports=nm()),xu.exports}var a=rm(),vu={exports:{}},Ci={},_u={exports:{}},Tu={};var ph;function em(){return ph||(ph=1,(function(o){function y(N,q){var Q=N.length;N.push(q);n:for(;0<Q;){var _n=Q-1>>>1,Tn=N[_n];if(0<E(Tn,q))N[_n]=q,N[Q]=Tn,Q=_n;else break n}}function x(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var q=N[0],Q=N.pop();if(Q!==q){N[0]=Q;n:for(var _n=0,Tn=N.length,p=Tn>>>1;_n<p;){var w=2*(_n+1)-1,G=N[w],Z=w+1,ln=N[Z];if(0>E(G,Q))Z<Tn&&0>E(ln,G)?(N[_n]=ln,N[Z]=Q,_n=Z):(N[_n]=G,N[w]=Q,_n=w);else if(Z<Tn&&0>E(ln,Q))N[_n]=ln,N[Z]=Q,_n=Z;else break n}}return q}function E(N,q){var Q=N.sortIndex-q.sortIndex;return Q!==0?Q:N.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;o.unstable_now=function(){return L.now()}}else{var B=Date,K=B.now();o.unstable_now=function(){return B.now()-K}}var D=[],T=[],U=1,O=null,z=3,J=!1,tn=!1,F=!1,Sn=!1,An=typeof setTimeout=="function"?setTimeout:null,vn=typeof clearTimeout=="function"?clearTimeout:null,an=typeof setImmediate<"u"?setImmediate:null;function on(N){for(var q=x(T);q!==null;){if(q.callback===null)d(T);else if(q.startTime<=N)d(T),q.sortIndex=q.expirationTime,y(D,q);else break;q=x(T)}}function Bn(N){if(F=!1,on(N),!tn)if(x(D)!==null)tn=!0,yn||(yn=!0,tr());else{var q=x(T);q!==null&&jr(Bn,q.startTime-N)}}var yn=!1,fn=-1,Jn=5,hr=-1;function Sr(){return Sn?!0:!(o.unstable_now()-hr<Jn)}function gr(){if(Sn=!1,yn){var N=o.unstable_now();hr=N;var q=!0;try{n:{tn=!1,F&&(F=!1,vn(fn),fn=-1),J=!0;var Q=z;try{r:{for(on(N),O=x(D);O!==null&&!(O.expirationTime>N&&Sr());){var _n=O.callback;if(typeof _n=="function"){O.callback=null,z=O.priorityLevel;var Tn=_n(O.expirationTime<=N);if(N=o.unstable_now(),typeof Tn=="function"){O.callback=Tn,on(N),q=!0;break r}O===x(D)&&d(D),on(N)}else d(D);O=x(D)}if(O!==null)q=!0;else{var p=x(T);p!==null&&jr(Bn,p.startTime-N),q=!1}}break n}finally{O=null,z=Q,J=!1}q=void 0}}finally{q?tr():yn=!1}}}var tr;if(typeof an=="function")tr=function(){an(gr)};else if(typeof MessageChannel<"u"){var Dr=new MessageChannel,lr=Dr.port2;Dr.port1.onmessage=gr,tr=function(){lr.postMessage(null)}}else tr=function(){An(gr,0)};function jr(N,q){fn=An(function(){N(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Jn=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_next=function(N){switch(z){case 1:case 2:case 3:var q=3;break;default:q=z}var Q=z;z=q;try{return N()}finally{z=Q}},o.unstable_requestPaint=function(){Sn=!0},o.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=z;z=N;try{return q()}finally{z=Q}},o.unstable_scheduleCallback=function(N,q,Q){var _n=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?_n+Q:_n):Q=_n,N){case 1:var Tn=-1;break;case 2:Tn=250;break;case 5:Tn=1073741823;break;case 4:Tn=1e4;break;default:Tn=5e3}return Tn=Q+Tn,N={id:U++,callback:q,priorityLevel:N,startTime:Q,expirationTime:Tn,sortIndex:-1},Q>_n?(N.sortIndex=Q,y(T,N),x(D)===null&&N===x(T)&&(F?(vn(fn),fn=-1):F=!0,jr(Bn,Q-_n))):(N.sortIndex=Tn,y(D,N),tn||J||(tn=!0,yn||(yn=!0,tr()))),N},o.unstable_shouldYield=Sr,o.unstable_wrapCallback=function(N){var q=z;return function(){var Q=z;z=q;try{return N.apply(this,arguments)}finally{z=Q}}}})(Tu)),Tu}var mh;function tm(){return mh||(mh=1,_u.exports=em()),_u.exports}var Su={exports:{}},gn={};var bh;function am(){if(bh)return gn;bh=1;var o=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),z=Symbol.iterator;function J(p){return p===null||typeof p!="object"?null:(p=z&&p[z]||p["@@iterator"],typeof p=="function"?p:null)}var tn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Sn={};function An(p,w,G){this.props=p,this.context=w,this.refs=Sn,this.updater=G||tn}An.prototype.isReactComponent={},An.prototype.setState=function(p,w){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,w,"setState")},An.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function vn(){}vn.prototype=An.prototype;function an(p,w,G){this.props=p,this.context=w,this.refs=Sn,this.updater=G||tn}var on=an.prototype=new vn;on.constructor=an,F(on,An.prototype),on.isPureReactComponent=!0;var Bn=Array.isArray;function yn(){}var fn={H:null,A:null,T:null,S:null},Jn=Object.prototype.hasOwnProperty;function hr(p,w,G){var Z=G.ref;return{$$typeof:o,type:p,key:w,ref:Z!==void 0?Z:null,props:G}}function Sr(p,w){return hr(p.type,w,p.props)}function gr(p){return typeof p=="object"&&p!==null&&p.$$typeof===o}function tr(p){var w={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(G){return w[G]})}var Dr=/\/+/g;function lr(p,w){return typeof p=="object"&&p!==null&&p.key!=null?tr(""+p.key):w.toString(36)}function jr(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(yn,yn):(p.status="pending",p.then(function(w){p.status==="pending"&&(p.status="fulfilled",p.value=w)},function(w){p.status==="pending"&&(p.status="rejected",p.reason=w)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function N(p,w,G,Z,ln){var mn=typeof p;(mn==="undefined"||mn==="boolean")&&(p=null);var hn=!1;if(p===null)hn=!0;else switch(mn){case"bigint":case"string":case"number":hn=!0;break;case"object":switch(p.$$typeof){case o:case y:hn=!0;break;case U:return hn=p._init,N(hn(p._payload),w,G,Z,ln)}}if(hn)return ln=ln(p),hn=Z===""?"."+lr(p,0):Z,Bn(ln)?(G="",hn!=null&&(G=hn.replace(Dr,"$&/")+"/"),N(ln,w,G,"",function(Fr){return Fr})):ln!=null&&(gr(ln)&&(ln=Sr(ln,G+(ln.key==null||p&&p.key===ln.key?"":(""+ln.key).replace(Dr,"$&/")+"/")+hn)),w.push(ln)),1;hn=0;var Rn=Z===""?".":Z+":";if(Bn(p))for(var In=0;In<p.length;In++)Z=p[In],mn=Rn+lr(Z,In),hn+=N(Z,w,G,mn,ln);else if(In=J(p),typeof In=="function")for(p=In.call(p),In=0;!(Z=p.next()).done;)Z=Z.value,mn=Rn+lr(Z,In++),hn+=N(Z,w,G,mn,ln);else if(mn==="object"){if(typeof p.then=="function")return N(jr(p),w,G,Z,ln);throw w=String(p),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return hn}function q(p,w,G){if(p==null)return p;var Z=[],ln=0;return N(p,Z,"","",function(mn){return w.call(G,mn,ln++)}),Z}function Q(p){if(p._status===-1){var w=p._result;w=w(),w.then(function(G){(p._status===0||p._status===-1)&&(p._status=1,p._result=G)},function(G){(p._status===0||p._status===-1)&&(p._status=2,p._result=G)}),p._status===-1&&(p._status=0,p._result=w)}if(p._status===1)return p._result.default;throw p._result}var _n=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},Tn={map:q,forEach:function(p,w,G){q(p,function(){w.apply(this,arguments)},G)},count:function(p){var w=0;return q(p,function(){w++}),w},toArray:function(p){return q(p,function(w){return w})||[]},only:function(p){if(!gr(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return gn.Activity=O,gn.Children=Tn,gn.Component=An,gn.Fragment=x,gn.Profiler=E,gn.PureComponent=an,gn.StrictMode=d,gn.Suspense=D,gn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fn,gn.__COMPILER_RUNTIME={__proto__:null,c:function(p){return fn.H.useMemoCache(p)}},gn.cache=function(p){return function(){return p.apply(null,arguments)}},gn.cacheSignal=function(){return null},gn.cloneElement=function(p,w,G){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var Z=F({},p.props),ln=p.key;if(w!=null)for(mn in w.key!==void 0&&(ln=""+w.key),w)!Jn.call(w,mn)||mn==="key"||mn==="__self"||mn==="__source"||mn==="ref"&&w.ref===void 0||(Z[mn]=w[mn]);var mn=arguments.length-2;if(mn===1)Z.children=G;else if(1<mn){for(var hn=Array(mn),Rn=0;Rn<mn;Rn++)hn[Rn]=arguments[Rn+2];Z.children=hn}return hr(p.type,ln,Z)},gn.createContext=function(p){return p={$$typeof:B,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:L,_context:p},p},gn.createElement=function(p,w,G){var Z,ln={},mn=null;if(w!=null)for(Z in w.key!==void 0&&(mn=""+w.key),w)Jn.call(w,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ln[Z]=w[Z]);var hn=arguments.length-2;if(hn===1)ln.children=G;else if(1<hn){for(var Rn=Array(hn),In=0;In<hn;In++)Rn[In]=arguments[In+2];ln.children=Rn}if(p&&p.defaultProps)for(Z in hn=p.defaultProps,hn)ln[Z]===void 0&&(ln[Z]=hn[Z]);return hr(p,mn,ln)},gn.createRef=function(){return{current:null}},gn.forwardRef=function(p){return{$$typeof:K,render:p}},gn.isValidElement=gr,gn.lazy=function(p){return{$$typeof:U,_payload:{_status:-1,_result:p},_init:Q}},gn.memo=function(p,w){return{$$typeof:T,type:p,compare:w===void 0?null:w}},gn.startTransition=function(p){var w=fn.T,G={};fn.T=G;try{var Z=p(),ln=fn.S;ln!==null&&ln(G,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(yn,_n)}catch(mn){_n(mn)}finally{w!==null&&G.types!==null&&(w.types=G.types),fn.T=w}},gn.unstable_useCacheRefresh=function(){return fn.H.useCacheRefresh()},gn.use=function(p){return fn.H.use(p)},gn.useActionState=function(p,w,G){return fn.H.useActionState(p,w,G)},gn.useCallback=function(p,w){return fn.H.useCallback(p,w)},gn.useContext=function(p){return fn.H.useContext(p)},gn.useDebugValue=function(){},gn.useDeferredValue=function(p,w){return fn.H.useDeferredValue(p,w)},gn.useEffect=function(p,w){return fn.H.useEffect(p,w)},gn.useEffectEvent=function(p){return fn.H.useEffectEvent(p)},gn.useId=function(){return fn.H.useId()},gn.useImperativeHandle=function(p,w,G){return fn.H.useImperativeHandle(p,w,G)},gn.useInsertionEffect=function(p,w){return fn.H.useInsertionEffect(p,w)},gn.useLayoutEffect=function(p,w){return fn.H.useLayoutEffect(p,w)},gn.useMemo=function(p,w){return fn.H.useMemo(p,w)},gn.useOptimistic=function(p,w){return fn.H.useOptimistic(p,w)},gn.useReducer=function(p,w,G){return fn.H.useReducer(p,w,G)},gn.useRef=function(p){return fn.H.useRef(p)},gn.useState=function(p){return fn.H.useState(p)},gn.useSyncExternalStore=function(p,w,G){return fn.H.useSyncExternalStore(p,w,G)},gn.useTransition=function(){return fn.H.useTransition()},gn.version="19.2.3",gn}var yh;function zu(){return yh||(yh=1,Su.exports=am()),Su.exports}var ju={exports:{}},zr={};var xh;function im(){if(xh)return zr;xh=1;var o=zu();function y(D){var T="https://react.dev/errors/"+D;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)T+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+D+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(){}var d={d:{f:x,r:function(){throw Error(y(522))},D:x,C:x,L:x,m:x,X:x,S:x,M:x},p:0,findDOMNode:null},E=Symbol.for("react.portal");function L(D,T,U){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:O==null?null:""+O,children:D,containerInfo:T,implementation:U}}var B=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function K(D,T){if(D==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return zr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,zr.createPortal=function(D,T){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(y(299));return L(D,T,null,U)},zr.flushSync=function(D){var T=B.T,U=d.p;try{if(B.T=null,d.p=2,D)return D()}finally{B.T=T,d.p=U,d.d.f()}},zr.preconnect=function(D,T){typeof D=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,d.d.C(D,T))},zr.prefetchDNS=function(D){typeof D=="string"&&d.d.D(D)},zr.preinit=function(D,T){if(typeof D=="string"&&T&&typeof T.as=="string"){var U=T.as,O=K(U,T.crossOrigin),z=typeof T.integrity=="string"?T.integrity:void 0,J=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;U==="style"?d.d.S(D,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:O,integrity:z,fetchPriority:J}):U==="script"&&d.d.X(D,{crossOrigin:O,integrity:z,fetchPriority:J,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},zr.preinitModule=function(D,T){if(typeof D=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var U=K(T.as,T.crossOrigin);d.d.M(D,{crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&d.d.M(D)},zr.preload=function(D,T){if(typeof D=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var U=T.as,O=K(U,T.crossOrigin);d.d.L(D,U,{crossOrigin:O,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},zr.preloadModule=function(D,T){if(typeof D=="string")if(T){var U=K(T.as,T.crossOrigin);d.d.m(D,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:U,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else d.d.m(D)},zr.requestFormReset=function(D){d.d.r(D)},zr.unstable_batchedUpdates=function(D,T){return D(T)},zr.useFormState=function(D,T,U){return B.H.useFormState(D,T,U)},zr.useFormStatus=function(){return B.H.useHostTransitionStatus()},zr.version="19.2.3",zr}var vh;function Uh(){if(vh)return ju.exports;vh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(y){console.error(y)}}return o(),ju.exports=im(),ju.exports}var _h;function lm(){if(_h)return Ci;_h=1;var o=tm(),y=zu(),x=Uh();function d(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function L(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function B(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function K(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function D(n){if(L(n)!==n)throw Error(d(188))}function T(n){var r=n.alternate;if(!r){if(r=L(n),r===null)throw Error(d(188));return r!==n?null:n}for(var e=n,t=r;;){var i=e.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){e=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===e)return D(i),n;if(l===t)return D(i),r;l=l.sibling}throw Error(d(188))}if(e.return!==t.return)e=i,t=l;else{for(var s=!1,u=i.child;u;){if(u===e){s=!0,e=i,t=l;break}if(u===t){s=!0,t=i,e=l;break}u=u.sibling}if(!s){for(u=l.child;u;){if(u===e){s=!0,e=l,t=i;break}if(u===t){s=!0,t=l,e=i;break}u=u.sibling}if(!s)throw Error(d(189))}}if(e.alternate!==t)throw Error(d(190))}if(e.tag!==3)throw Error(d(188));return e.stateNode.current===e?n:r}function U(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=U(n),r!==null)return r;n=n.sibling}return null}var O=Object.assign,z=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),tn=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Sn=Symbol.for("react.strict_mode"),An=Symbol.for("react.profiler"),vn=Symbol.for("react.consumer"),an=Symbol.for("react.context"),on=Symbol.for("react.forward_ref"),Bn=Symbol.for("react.suspense"),yn=Symbol.for("react.suspense_list"),fn=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),hr=Symbol.for("react.activity"),Sr=Symbol.for("react.memo_cache_sentinel"),gr=Symbol.iterator;function tr(n){return n===null||typeof n!="object"?null:(n=gr&&n[gr]||n["@@iterator"],typeof n=="function"?n:null)}var Dr=Symbol.for("react.client.reference");function lr(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Dr?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case An:return"Profiler";case Sn:return"StrictMode";case Bn:return"Suspense";case yn:return"SuspenseList";case hr:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case tn:return"Portal";case an:return n.displayName||"Context";case vn:return(n._context.displayName||"Context")+".Consumer";case on:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fn:return r=n.displayName||null,r!==null?r:lr(n.type)||"Memo";case Jn:r=n._payload,n=n._init;try{return lr(n(r))}catch{}}return null}var jr=Array.isArray,N=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},_n=[],Tn=-1;function p(n){return{current:n}}function w(n){0>Tn||(n.current=_n[Tn],_n[Tn]=null,Tn--)}function G(n,r){Tn++,_n[Tn]=n.current,n.current=r}var Z=p(null),ln=p(null),mn=p(null),hn=p(null);function Rn(n,r){switch(G(mn,r),G(ln,n),G(Z,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Cf(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Cf(r),n=Bf(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}w(Z),G(Z,n)}function In(){w(Z),w(ln),w(mn)}function Fr(n){n.memoizedState!==null&&G(hn,n);var r=Z.current,e=Bf(r,n.type);r!==e&&(G(ln,n),G(Z,e))}function ve(n){ln.current===n&&(w(Z),w(ln)),hn.current===n&&(w(hn),ki._currentValue=Q)}var Tt,St;function pe(n){if(Tt===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);Tt=r&&r[1]||"",St=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tt+n+St}var Ba=!1;function Ua(n,r){if(!n||Ba)return"";Ba=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(r){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(j){var S=j}Reflect.construct(n,[],R)}else{try{R.call()}catch(j){S=j}n.call(R.prototype)}}else{try{throw Error()}catch(j){S=j}(R=n())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(j){if(j&&S&&typeof j.stack=="string")return[j.stack,S.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),s=l[0],u=l[1];if(s&&u){var f=s.split(`
`),_=u.split(`
`);for(i=t=0;t<f.length&&!f[t].includes("DetermineComponentFrameRoot");)t++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(t===f.length||i===_.length)for(t=f.length-1,i=_.length-1;1<=t&&0<=i&&f[t]!==_[i];)i--;for(;1<=t&&0<=i;t--,i--)if(f[t]!==_[i]){if(t!==1||i!==1)do if(t--,i--,0>i||f[t]!==_[i]){var A=`
`+f[t].replace(" at new "," at ");return n.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",n.displayName)),A}while(1<=t&&0<=i);break}}}finally{Ba=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?pe(e):""}function fs(n,r){switch(n.tag){case 26:case 27:case 5:return pe(n.type);case 16:return pe("Lazy");case 13:return n.child!==r&&r!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return Ua(n.type,!1);case 11:return Ua(n.type.render,!1);case 1:return Ua(n.type,!0);case 31:return pe("Activity");default:return""}}function Ui(n){try{var r="",e=null;do r+=fs(n,e),e=n,n=n.return;while(n);return r}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Ha=Object.prototype.hasOwnProperty,Ft=o.unstable_scheduleCallback,qa=o.unstable_cancelCallback,hs=o.unstable_shouldYield,Hi=o.unstable_requestPaint,sr=o.unstable_now,qi=o.unstable_getCurrentPriorityLevel,Ae=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,Nt=o.unstable_NormalPriority,gs=o.unstable_LowPriority,Gi=o.unstable_IdlePriority,ps=o.log,ms=o.unstable_setDisableYieldValue,Et=null,Mr=null;function _e(n){if(typeof ps=="function"&&ms(n),Mr&&typeof Mr.setStrictMode=="function")try{Mr.setStrictMode(Et,n)}catch{}}var Lr=Math.clz32?Math.clz32:Yi,bs=Math.log,Ga=Math.LN2;function Yi(n){return n>>>=0,n===0?32:31-(bs(n)/Ga|0)|0}var At=256,Wt=262144,Ot=4194304;function qr(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function h(n,r,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var u=t&134217727;return u!==0?(t=u&~l,t!==0?i=qr(t):(s&=u,s!==0?i=qr(s):e||(e=u&~n,e!==0&&(i=qr(e))))):(u=t&~l,u!==0?i=qr(u):s!==0?i=qr(s):e||(e=t&~n,e!==0&&(i=qr(e)))),i===0?0:r!==0&&r!==i&&(r&l)===0&&(l=i&-i,e=r&-r,l>=e||l===32&&(e&4194048)!==0)?r:i}function M(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Y(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dn(){var n=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),n}function Wn(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function Xn(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function W(n,r,e,t,i,l){var s=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var u=n.entanglements,f=n.expirationTimes,_=n.hiddenUpdates;for(e=s&~e;0<e;){var A=31-Lr(e),R=1<<A;u[A]=0,f[A]=-1;var S=_[A];if(S!==null)for(_[A]=null,A=0;A<S.length;A++){var j=S[A];j!==null&&(j.lane&=-536870913)}e&=~R}t!==0&&X(n,t,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~r))}function X(n,r,e){n.pendingLanes|=r,n.suspendedLanes&=~r;var t=31-Lr(r);n.entangledLanes|=r,n.entanglements[t]=n.entanglements[t]|1073741824|e&261930}function un(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var t=31-Lr(e),i=1<<t;i&r|n[t]&r&&(n[t]|=r),e&=~i}}function cr(n,r){var e=r&-r;return e=(e&42)!==0?1:nr(e),(e&(n.suspendedLanes|r))!==0?0:e}function nr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Oe(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Pt(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:lh(n.type))}function $t(n,r){var e=q.p;try{return q.p=n,r()}finally{q.p=e}}var Te=Math.random().toString(36).slice(2),ur="__reactFiber$"+Te,kr="__reactProps$"+Te,Ze="__reactContainer$"+Te,Ya="__reactEvents$"+Te,Vi="__reactListeners$"+Te,na="__reactHandles$"+Te,Qi="__reactResources$"+Te,wt="__reactMarker$"+Te;function Va(n){delete n[ur],delete n[kr],delete n[Ya],delete n[Vi],delete n[na]}function Cr(n){var r=n[ur];if(r)return r;for(var e=n.parentNode;e;){if(r=e[Ze]||e[ur]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=Qf(n);n!==null;){if(e=n[ur])return e;n=Qf(n)}return r}n=e,e=n.parentNode}return null}function we(n){if(n=n[ur]||n[Ze]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Ie(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(d(33))}function Fe(n){var r=n[Qi];return r||(r=n[Qi]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function pr(n){n[wt]=!0}var Ki=new Set,Mt={};function Me(n,r){C(n,r),C(n+"Capture",r)}function C(n,r){for(Mt[n]=r,n=0;n<r.length;n++)Ki.add(r[n])}var rn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jn={},Hn={};function or(n){return Ha.call(Hn,n)?!0:Ha.call(jn,n)?!1:rn.test(n)?Hn[n]=!0:(jn[n]=!0,!1)}function Rr(n,r,e){if(or(r))if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var t=r.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+e)}}function Wr(n,r,e){if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+e)}}function Gr(n,r,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(r,e,""+t)}}function Fn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pr(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ji(n,r,e){var t=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return i.call(this)},set:function(s){e=""+s,l.call(this,s)}}),Object.defineProperty(n,r,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(s){e=""+s},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ra(n){if(!n._valueTracker){var r=Pr(n)?"checked":"value";n._valueTracker=Ji(n,r,""+n[r])}}function Qa(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),t="";return n&&(t=Pr(n)?n.checked?"true":"false":n.value),n=t,n!==e?(r.setValue(n),!0):!1}function ea(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ys=/[\n"\\]/g;function Yr(n){return n.replace(ys,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ka(n,r,e,t,i,l,s,u){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),r!=null?s==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Fn(r)):n.value!==""+Fn(r)&&(n.value=""+Fn(r)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),r!=null?ta(n,s,Fn(r)):e!=null?ta(n,s,Fn(e)):t!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.name=""+Fn(u):n.removeAttribute("name")}function kt(n,r,e,t,i,l,s,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),r!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||r!=null)){ra(n);return}e=e!=null?""+Fn(e):"",r=r!=null?""+Fn(r):e,u||r===n.value||(n.value=r),n.defaultValue=r}t=t??i,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=u?n.checked:!!t,n.defaultChecked=!!t,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),ra(n)}function ta(n,r,e){r==="number"&&ea(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function Nr(n,r,e,t){if(n=n.options,r){r={};for(var i=0;i<e.length;i++)r["$"+e[i]]=!0;for(e=0;e<n.length;e++)i=r.hasOwnProperty("$"+n[e].value),n[e].selected!==i&&(n[e].selected=i),i&&t&&(n[e].defaultSelected=!0)}else{for(e=""+Fn(e),r=null,i=0;i<n.length;i++){if(n[i].value===e){n[i].selected=!0,t&&(n[i].defaultSelected=!0);return}r!==null||n[i].disabled||(r=n[i])}r!==null&&(r.selected=!0)}}function Xi(n,r,e){if(r!=null&&(r=""+Fn(r),r!==n.value&&(n.value=r),e==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=e!=null?""+Fn(e):""}function aa(n,r,e,t){if(r==null){if(t!=null){if(e!=null)throw Error(d(92));if(jr(t)){if(1<t.length)throw Error(d(93));t=t[0]}e=t}e==null&&(e=""),r=e}e=Fn(r),n.defaultValue=e,t=n.textContent,t===e&&t!==""&&t!==null&&(n.value=t),ra(n)}function cn(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mr(n,r,e){var t=r.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?t?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":t?n.setProperty(r,e):typeof e!="number"||e===0||Zi.has(r)?r==="float"?n.cssFloat=e:n[r]=(""+e).trim():n[r]=e+"px"}function qn(n,r,e){if(r!=null&&typeof r!="object")throw Error(d(62));if(n=n.style,e!=null){for(var t in e)!e.hasOwnProperty(t)||r!=null&&r.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var i in r)t=r[i],r.hasOwnProperty(i)&&e[i]!==t&&mr(n,i,t)}else for(var l in r)r.hasOwnProperty(l)&&mr(n,l,r[l])}function We(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ke=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ja=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pe(n){return Ja.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function H(){}var P=null;function pn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var On=null,er=null;function le(n){var r=we(n);if(r&&(n=r.stateNode)){var e=n[kr]||null;n:switch(n=r.stateNode,r.type){case"input":if(Ka(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Yr(""+r)+'"][type="radio"]'),r=0;r<e.length;r++){var t=e[r];if(t!==n&&t.form===n.form){var i=t[kr]||null;if(!i)throw Error(d(90));Ka(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(r=0;r<e.length;r++)t=e[r],t.form===n.form&&Qa(t)}break n;case"textarea":Xi(n,e.value,e.defaultValue);break n;case"select":r=e.value,r!=null&&Nr(n,!!e.multiple,r,!1)}}}var Xa=!1;function Ii(n,r,e){if(Xa)return n(r,e);Xa=!0;try{var t=n(r);return t}finally{if(Xa=!1,(On!==null||er!==null)&&(Cl(),On&&(r=On,n=er,er=On=null,le(r),n)))for(r=0;r<n.length;r++)le(n[r])}}function Za(n,r){var e=n.stateNode;if(e===null)return null;var t=e[kr]||null;if(t===null)return null;e=t[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(d(231,r,typeof e));return e}var Re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xs=!1;if(Re)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{xs=!1}var $e=null,vs=null,Fi=null;function Lu(){if(Fi)return Fi;var n,r=vs,e=r.length,t,i="value"in $e?$e.value:$e.textContent,l=i.length;for(n=0;n<e&&r[n]===i[n];n++);var s=e-n;for(t=1;t<=s&&r[e-t]===i[l-t];t++);return Fi=i.slice(n,1<t?1-t:void 0)}function Wi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Pi(){return!0}function Cu(){return!1}function Vr(n){function r(e,t,i,l,s){this._reactName=e,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(e=n[u],this[u]=e?e(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Pi:Cu,this.isPropagationStopped=Cu,this}return O(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),r}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=Vr(Rt),Fa=O({},Rt,{view:0,detail:0}),Ph=Vr(Fa),_s,Ts,Wa,nl=O({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wa&&(Wa&&n.type==="mousemove"?(_s=n.screenX-Wa.screenX,Ts=n.screenY-Wa.screenY):Ts=_s=0,Wa=n),_s)},movementY:function(n){return"movementY"in n?n.movementY:Ts}}),Bu=Vr(nl),$h=O({},nl,{dataTransfer:0}),ng=Vr($h),rg=O({},Fa,{relatedTarget:0}),Ss=Vr(rg),eg=O({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=Vr(eg),ag=O({},Rt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ig=Vr(ag),lg=O({},Rt,{data:0}),Uu=Vr(lg),sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ug[n])?!!r[n]:!1}function js(){return og}var dg=O({},Fa,{key:function(n){if(n.key){var r=sg[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Wi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(n){return n.type==="keypress"?Wi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fg=Vr(dg),hg=O({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=Vr(hg),gg=O({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),pg=Vr(gg),mg=O({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=Vr(mg),yg=O({},nl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xg=Vr(yg),vg=O({},Rt,{newState:0,oldState:0}),_g=Vr(vg),Tg=[9,13,27,32],Ns=Re&&"CompositionEvent"in window,Pa=null;Re&&"documentMode"in document&&(Pa=document.documentMode);var Sg=Re&&"TextEvent"in window&&!Pa,qu=Re&&(!Ns||Pa&&8<Pa&&11>=Pa),Gu=" ",Yu=!1;function Vu(n,r){switch(n){case"keyup":return Tg.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ia=!1;function jg(n,r){switch(n){case"compositionend":return Qu(r);case"keypress":return r.which!==32?null:(Yu=!0,Gu);case"textInput":return n=r.data,n===Gu&&Yu?null:n;default:return null}}function Ng(n,r){if(ia)return n==="compositionend"||!Ns&&Vu(n,r)?(n=Lu(),Fi=vs=$e=null,ia=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return qu&&r.locale!=="ko"?null:r.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ku(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Eg[n.type]:r==="textarea"}function Ju(n,r,e,t){On?er?er.push(t):er=[t]:On=t,r=Vl(r,"onChange"),0<r.length&&(e=new $i("onChange","change",null,e,t),n.push({event:e,listeners:r}))}var $a=null,ni=null;function Ag(n){Mf(n,0)}function rl(n){var r=Ie(n);if(Qa(r))return n}function Xu(n,r){if(n==="change")return r}var Zu=!1;if(Re){var Es;if(Re){var As="oninput"in document;if(!As){var Iu=document.createElement("div");Iu.setAttribute("oninput","return;"),As=typeof Iu.oninput=="function"}Es=As}else Es=!1;Zu=Es&&(!document.documentMode||9<document.documentMode)}function Fu(){$a&&($a.detachEvent("onpropertychange",Wu),ni=$a=null)}function Wu(n){if(n.propertyName==="value"&&rl(ni)){var r=[];Ju(r,ni,n,pn(n)),Ii(Ag,r)}}function Og(n,r,e){n==="focusin"?(Fu(),$a=r,ni=e,$a.attachEvent("onpropertychange",Wu)):n==="focusout"&&Fu()}function wg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl(ni)}function Mg(n,r){if(n==="click")return rl(r)}function kg(n,r){if(n==="input"||n==="change")return rl(r)}function Rg(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var $r=typeof Object.is=="function"?Object.is:Rg;function ri(n,r){if($r(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var i=e[t];if(!Ha.call(r,i)||!$r(n[i],r[i]))return!1}return!0}function Pu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $u(n,r){var e=Pu(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=r&&t>=r)return{node:e,offset:r-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=Pu(e)}}function no(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?no(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ro(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ea(n.document);r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=ea(n.document)}return r}function Os(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var zg=Re&&"documentMode"in document&&11>=document.documentMode,la=null,ws=null,ei=null,Ms=!1;function eo(n,r,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Ms||la==null||la!==ea(t)||(t=la,"selectionStart"in t&&Os(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ei&&ri(ei,t)||(ei=t,t=Vl(ws,"onSelect"),0<t.length&&(r=new $i("onSelect","select",null,r,e),n.push({event:r,listeners:t}),r.target=la)))}function zt(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var sa={animationend:zt("Animation","AnimationEnd"),animationiteration:zt("Animation","AnimationIteration"),animationstart:zt("Animation","AnimationStart"),transitionrun:zt("Transition","TransitionRun"),transitionstart:zt("Transition","TransitionStart"),transitioncancel:zt("Transition","TransitionCancel"),transitionend:zt("Transition","TransitionEnd")},ks={},to={};Re&&(to=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function Dt(n){if(ks[n])return ks[n];if(!sa[n])return n;var r=sa[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in to)return ks[n]=r[e];return n}var ao=Dt("animationend"),io=Dt("animationiteration"),lo=Dt("animationstart"),Dg=Dt("transitionrun"),Lg=Dt("transitionstart"),Cg=Dt("transitioncancel"),so=Dt("transitionend"),co=new Map,Rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rs.push("scrollEnd");function me(n,r){co.set(n,r),Me(r,[n])}var el=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},se=[],ca=0,zs=0;function tl(){for(var n=ca,r=zs=ca=0;r<n;){var e=se[r];se[r++]=null;var t=se[r];se[r++]=null;var i=se[r];se[r++]=null;var l=se[r];if(se[r++]=null,t!==null&&i!==null){var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}l!==0&&uo(e,i,l)}}function al(n,r,e,t){se[ca++]=n,se[ca++]=r,se[ca++]=e,se[ca++]=t,zs|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function Ds(n,r,e,t){return al(n,r,e,t),il(n)}function Lt(n,r){return al(n,null,null,r),il(n)}function uo(n,r,e){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e);for(var i=!1,l=n.return;l!==null;)l.childLanes|=e,t=l.alternate,t!==null&&(t.childLanes|=e),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&r!==null&&(i=31-Lr(e),n=l.hiddenUpdates,t=n[i],t===null?n[i]=[r]:t.push(r),r.lane=e|536870912),l):null}function il(n){if(50<ji)throw ji=0,Vc=null,Error(d(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ua={};function Bg(n,r,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ne(n,r,e,t){return new Bg(n,r,e,t)}function Ls(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ze(n,r){var e=n.alternate;return e===null?(e=ne(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function oo(n,r){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function ll(n,r,e,t,i,l){var s=0;if(t=n,typeof n=="function")Ls(n)&&(s=1);else if(typeof n=="string")s=Yp(n,e,Z.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case hr:return n=ne(31,e,r,i),n.elementType=hr,n.lanes=l,n;case F:return Ct(e.children,i,l,r);case Sn:s=8,i|=24;break;case An:return n=ne(12,e,r,i|2),n.elementType=An,n.lanes=l,n;case Bn:return n=ne(13,e,r,i),n.elementType=Bn,n.lanes=l,n;case yn:return n=ne(19,e,r,i),n.elementType=yn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case an:s=10;break n;case vn:s=9;break n;case on:s=11;break n;case fn:s=14;break n;case Jn:s=16,t=null;break n}s=29,e=Error(d(130,n===null?"null":typeof n,"")),t=null}return r=ne(s,e,r,i),r.elementType=n,r.type=t,r.lanes=l,r}function Ct(n,r,e,t){return n=ne(7,n,t,r),n.lanes=e,n}function Cs(n,r,e){return n=ne(6,n,null,r),n.lanes=e,n}function fo(n){var r=ne(18,null,null,0);return r.stateNode=n,r}function Bs(n,r,e){return r=ne(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var ho=new WeakMap;function ce(n,r){if(typeof n=="object"&&n!==null){var e=ho.get(n);return e!==void 0?e:(r={value:n,source:r,stack:Ui(r)},ho.set(n,r),r)}return{value:n,source:r,stack:Ui(r)}}var oa=[],da=0,sl=null,ti=0,ue=[],oe=0,nt=null,Se=1,je="";function De(n,r){oa[da++]=ti,oa[da++]=sl,sl=n,ti=r}function go(n,r,e){ue[oe++]=Se,ue[oe++]=je,ue[oe++]=nt,nt=n;var t=Se;n=je;var i=32-Lr(t)-1;t&=~(1<<i),e+=1;var l=32-Lr(r)+i;if(30<l){var s=i-i%5;l=(t&(1<<s)-1).toString(32),t>>=s,i-=s,Se=1<<32-Lr(r)+i|e<<i|t,je=l+n}else Se=1<<l|e<<i|t,je=n}function Us(n){n.return!==null&&(De(n,1),go(n,1,0))}function Hs(n){for(;n===sl;)sl=oa[--da],oa[da]=null,ti=oa[--da],oa[da]=null;for(;n===nt;)nt=ue[--oe],ue[oe]=null,je=ue[--oe],ue[oe]=null,Se=ue[--oe],ue[oe]=null}function po(n,r){ue[oe++]=Se,ue[oe++]=je,ue[oe++]=nt,Se=r.id,je=r.overflow,nt=n}var Er=null,Pn=null,kn=!1,rt=null,de=!1,qs=Error(d(519));function et(n){var r=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ai(ce(r,n)),qs}function mo(n){var r=n.stateNode,e=n.type,t=n.memoizedProps;switch(r[ur]=n,r[kr]=t,e){case"dialog":En("cancel",r),En("close",r);break;case"iframe":case"object":case"embed":En("load",r);break;case"video":case"audio":for(e=0;e<Ei.length;e++)En(Ei[e],r);break;case"source":En("error",r);break;case"img":case"image":case"link":En("error",r),En("load",r);break;case"details":En("toggle",r);break;case"input":En("invalid",r),kt(r,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":En("invalid",r);break;case"textarea":En("invalid",r),aa(r,t.value,t.defaultValue,t.children)}e=t.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||r.textContent===""+e||t.suppressHydrationWarning===!0||Df(r.textContent,e)?(t.popover!=null&&(En("beforetoggle",r),En("toggle",r)),t.onScroll!=null&&En("scroll",r),t.onScrollEnd!=null&&En("scrollend",r),t.onClick!=null&&(r.onclick=H),r=!0):r=!1,r||et(n,!0)}function bo(n){for(Er=n.return;Er;)switch(Er.tag){case 5:case 31:case 13:de=!1;return;case 27:case 3:de=!0;return;default:Er=Er.return}}function fa(n){if(n!==Er)return!1;if(!kn)return bo(n),kn=!0,!1;var r=n.tag,e;if((e=r!==3&&r!==27)&&((e=r===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||au(n.type,n.memoizedProps)),e=!e),e&&Pn&&et(n),bo(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));Pn=Vf(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));Pn=Vf(n)}else r===27?(r=Pn,mt(n.type)?(n=uu,uu=null,Pn=n):Pn=r):Pn=Er?he(n.stateNode.nextSibling):null;return!0}function Bt(){Pn=Er=null,kn=!1}function Gs(){var n=rt;return n!==null&&(Xr===null?Xr=n:Xr.push.apply(Xr,n),rt=null),n}function ai(n){rt===null?rt=[n]:rt.push(n)}var Ys=p(null),Ut=null,Le=null;function tt(n,r,e){G(Ys,r._currentValue),r._currentValue=e}function Ce(n){n._currentValue=Ys.current,w(Ys)}function Vs(n,r,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),n===e)break;n=n.return}}function Qs(n,r,e,t){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var u=l;l=i;for(var f=0;f<r.length;f++)if(u.context===r[f]){l.lanes|=e,u=l.alternate,u!==null&&(u.lanes|=e),Vs(l.return,e,n),t||(s=null);break n}l=u.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(d(341));s.lanes|=e,l=s.alternate,l!==null&&(l.lanes|=e),Vs(s,e,n),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ha(n,r,e,t){n=null;for(var i=r,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var u=i.type;$r(i.pendingProps.value,s.value)||(n!==null?n.push(u):n=[u])}}else if(i===hn.current){if(s=i.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(ki):n=[ki])}i=i.return}n!==null&&Qs(r,n,e,t),r.flags|=262144}function cl(n){for(n=n.firstContext;n!==null;){if(!$r(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ht(n){Ut=n,Le=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ar(n){return yo(Ut,n)}function ul(n,r){return Ut===null&&Ht(n),yo(n,r)}function yo(n,r){var e=r._currentValue;if(r={context:r,memoizedValue:e,next:null},Le===null){if(n===null)throw Error(d(308));Le=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Le=Le.next=r;return e}var Ug=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(e,t){n.push(t)}};this.abort=function(){r.aborted=!0,n.forEach(function(e){return e()})}},Hg=o.unstable_scheduleCallback,qg=o.unstable_NormalPriority,br={$$typeof:an,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ks(){return{controller:new Ug,data:new Map,refCount:0}}function ii(n){n.refCount--,n.refCount===0&&Hg(qg,function(){n.controller.abort()})}var li=null,Js=0,ga=0,pa=null;function Gg(n,r){if(li===null){var e=li=[];Js=0,ga=Ic(),pa={status:"pending",value:void 0,then:function(t){e.push(t)}}}return Js++,r.then(xo,xo),r}function xo(){if(--Js===0&&li!==null){pa!==null&&(pa.status="fulfilled");var n=li;li=null,ga=0,pa=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Yg(n,r){var e=[],t={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return n.then(function(){t.status="fulfilled",t.value=r;for(var i=0;i<e.length;i++)(0,e[i])(r)},function(i){for(t.status="rejected",t.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),t}var vo=N.S;N.S=function(n,r){tf=sr(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&Gg(n,r),vo!==null&&vo(n,r)};var qt=p(null);function Xs(){var n=qt.current;return n!==null?n:Zn.pooledCache}function ol(n,r){r===null?G(qt,qt.current):G(qt,r.pool)}function _o(){var n=Xs();return n===null?null:{parent:br._currentValue,pool:n}}var ma=Error(d(460)),Zs=Error(d(474)),dl=Error(d(542)),fl={then:function(){}};function To(n){return n=n.status,n==="fulfilled"||n==="rejected"}function So(n,r,e){switch(e=n[e],e===void 0?n.push(r):e!==r&&(r.then(H,H),r=e),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,No(n),n;default:if(typeof r.status=="string")r.then(H,H);else{if(n=Zn,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=r,n.status="pending",n.then(function(t){if(r.status==="pending"){var i=r;i.status="fulfilled",i.value=t}},function(t){if(r.status==="pending"){var i=r;i.status="rejected",i.reason=t}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,No(n),n}throw Yt=r,ma}}function Gt(n){try{var r=n._init;return r(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Yt=e,ma):e}}var Yt=null;function jo(){if(Yt===null)throw Error(d(459));var n=Yt;return Yt=null,n}function No(n){if(n===ma||n===dl)throw Error(d(483))}var ba=null,si=0;function hl(n){var r=si;return si+=1,ba===null&&(ba=[]),So(ba,n,r)}function ci(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function gl(n,r){throw r.$$typeof===z?Error(d(525)):(n=Object.prototype.toString.call(r),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Eo(n){function r(b,m){if(n){var v=b.deletions;v===null?(b.deletions=[m],b.flags|=16):v.push(m)}}function e(b,m){if(!n)return null;for(;m!==null;)r(b,m),m=m.sibling;return null}function t(b){for(var m=new Map;b!==null;)b.key!==null?m.set(b.key,b):m.set(b.index,b),b=b.sibling;return m}function i(b,m){return b=ze(b,m),b.index=0,b.sibling=null,b}function l(b,m,v){return b.index=v,n?(v=b.alternate,v!==null?(v=v.index,v<m?(b.flags|=67108866,m):v):(b.flags|=67108866,m)):(b.flags|=1048576,m)}function s(b){return n&&b.alternate===null&&(b.flags|=67108866),b}function u(b,m,v,k){return m===null||m.tag!==6?(m=Cs(v,b.mode,k),m.return=b,m):(m=i(m,v),m.return=b,m)}function f(b,m,v,k){var en=v.type;return en===F?A(b,m,v.props.children,k,v.key):m!==null&&(m.elementType===en||typeof en=="object"&&en!==null&&en.$$typeof===Jn&&Gt(en)===m.type)?(m=i(m,v.props),ci(m,v),m.return=b,m):(m=ll(v.type,v.key,v.props,null,b.mode,k),ci(m,v),m.return=b,m)}function _(b,m,v,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Bs(v,b.mode,k),m.return=b,m):(m=i(m,v.children||[]),m.return=b,m)}function A(b,m,v,k,en){return m===null||m.tag!==7?(m=Ct(v,b.mode,k,en),m.return=b,m):(m=i(m,v),m.return=b,m)}function R(b,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Cs(""+m,b.mode,v),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case J:return v=ll(m.type,m.key,m.props,null,b.mode,v),ci(v,m),v.return=b,v;case tn:return m=Bs(m,b.mode,v),m.return=b,m;case Jn:return m=Gt(m),R(b,m,v)}if(jr(m)||tr(m))return m=Ct(m,b.mode,v,null),m.return=b,m;if(typeof m.then=="function")return R(b,hl(m),v);if(m.$$typeof===an)return R(b,ul(b,m),v);gl(b,m)}return null}function S(b,m,v,k){var en=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return en!==null?null:u(b,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case J:return v.key===en?f(b,m,v,k):null;case tn:return v.key===en?_(b,m,v,k):null;case Jn:return v=Gt(v),S(b,m,v,k)}if(jr(v)||tr(v))return en!==null?null:A(b,m,v,k,null);if(typeof v.then=="function")return S(b,m,hl(v),k);if(v.$$typeof===an)return S(b,m,ul(b,v),k);gl(b,v)}return null}function j(b,m,v,k,en){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return b=b.get(v)||null,u(m,b,""+k,en);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case J:return b=b.get(k.key===null?v:k.key)||null,f(m,b,k,en);case tn:return b=b.get(k.key===null?v:k.key)||null,_(m,b,k,en);case Jn:return k=Gt(k),j(b,m,v,k,en)}if(jr(k)||tr(k))return b=b.get(v)||null,A(m,b,k,en,null);if(typeof k.then=="function")return j(b,m,v,hl(k),en);if(k.$$typeof===an)return j(b,m,v,ul(m,k),en);gl(m,k)}return null}function I(b,m,v,k){for(var en=null,zn=null,$=m,xn=m=0,Mn=null;$!==null&&xn<v.length;xn++){$.index>xn?(Mn=$,$=null):Mn=$.sibling;var Dn=S(b,$,v[xn],k);if(Dn===null){$===null&&($=Mn);break}n&&$&&Dn.alternate===null&&r(b,$),m=l(Dn,m,xn),zn===null?en=Dn:zn.sibling=Dn,zn=Dn,$=Mn}if(xn===v.length)return e(b,$),kn&&De(b,xn),en;if($===null){for(;xn<v.length;xn++)$=R(b,v[xn],k),$!==null&&(m=l($,m,xn),zn===null?en=$:zn.sibling=$,zn=$);return kn&&De(b,xn),en}for($=t($);xn<v.length;xn++)Mn=j($,b,xn,v[xn],k),Mn!==null&&(n&&Mn.alternate!==null&&$.delete(Mn.key===null?xn:Mn.key),m=l(Mn,m,xn),zn===null?en=Mn:zn.sibling=Mn,zn=Mn);return n&&$.forEach(function(_t){return r(b,_t)}),kn&&De(b,xn),en}function sn(b,m,v,k){if(v==null)throw Error(d(151));for(var en=null,zn=null,$=m,xn=m=0,Mn=null,Dn=v.next();$!==null&&!Dn.done;xn++,Dn=v.next()){$.index>xn?(Mn=$,$=null):Mn=$.sibling;var _t=S(b,$,Dn.value,k);if(_t===null){$===null&&($=Mn);break}n&&$&&_t.alternate===null&&r(b,$),m=l(_t,m,xn),zn===null?en=_t:zn.sibling=_t,zn=_t,$=Mn}if(Dn.done)return e(b,$),kn&&De(b,xn),en;if($===null){for(;!Dn.done;xn++,Dn=v.next())Dn=R(b,Dn.value,k),Dn!==null&&(m=l(Dn,m,xn),zn===null?en=Dn:zn.sibling=Dn,zn=Dn);return kn&&De(b,xn),en}for($=t($);!Dn.done;xn++,Dn=v.next())Dn=j($,b,xn,Dn.value,k),Dn!==null&&(n&&Dn.alternate!==null&&$.delete(Dn.key===null?xn:Dn.key),m=l(Dn,m,xn),zn===null?en=Dn:zn.sibling=Dn,zn=Dn);return n&&$.forEach(function($p){return r(b,$p)}),kn&&De(b,xn),en}function Kn(b,m,v,k){if(typeof v=="object"&&v!==null&&v.type===F&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case J:n:{for(var en=v.key;m!==null;){if(m.key===en){if(en=v.type,en===F){if(m.tag===7){e(b,m.sibling),k=i(m,v.props.children),k.return=b,b=k;break n}}else if(m.elementType===en||typeof en=="object"&&en!==null&&en.$$typeof===Jn&&Gt(en)===m.type){e(b,m.sibling),k=i(m,v.props),ci(k,v),k.return=b,b=k;break n}e(b,m);break}else r(b,m);m=m.sibling}v.type===F?(k=Ct(v.props.children,b.mode,k,v.key),k.return=b,b=k):(k=ll(v.type,v.key,v.props,null,b.mode,k),ci(k,v),k.return=b,b=k)}return s(b);case tn:n:{for(en=v.key;m!==null;){if(m.key===en)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){e(b,m.sibling),k=i(m,v.children||[]),k.return=b,b=k;break n}else{e(b,m);break}else r(b,m);m=m.sibling}k=Bs(v,b.mode,k),k.return=b,b=k}return s(b);case Jn:return v=Gt(v),Kn(b,m,v,k)}if(jr(v))return I(b,m,v,k);if(tr(v)){if(en=tr(v),typeof en!="function")throw Error(d(150));return v=en.call(v),sn(b,m,v,k)}if(typeof v.then=="function")return Kn(b,m,hl(v),k);if(v.$$typeof===an)return Kn(b,m,ul(b,v),k);gl(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(e(b,m.sibling),k=i(m,v),k.return=b,b=k):(e(b,m),k=Cs(v,b.mode,k),k.return=b,b=k),s(b)):e(b,m)}return function(b,m,v,k){try{si=0;var en=Kn(b,m,v,k);return ba=null,en}catch($){if($===ma||$===dl)throw $;var zn=ne(29,$,null,b.mode);return zn.lanes=k,zn.return=b,zn}}}var Vt=Eo(!0),Ao=Eo(!1),at=!1;function Is(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fs(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function it(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function lt(n,r,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(Ln&2)!==0){var i=t.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r,r=il(n),uo(n,null,e),r}return al(n,t,r,e),il(n)}function ui(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194048)!==0)){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,un(n,e)}}function Ws(n,r){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var i=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,e=e.next}while(e!==null);l===null?i=l=r:l=l.next=r}else i=l=r;e={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}var Ps=!1;function oi(){if(Ps){var n=pa;if(n!==null)throw n}}function di(n,r,e,t){Ps=!1;var i=n.updateQueue;at=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var f=u,_=f.next;f.next=null,s===null?l=_:s.next=_,s=f;var A=n.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==s&&(u===null?A.firstBaseUpdate=_:u.next=_,A.lastBaseUpdate=f))}if(l!==null){var R=i.baseState;s=0,A=_=f=null,u=l;do{var S=u.lane&-536870913,j=S!==u.lane;if(j?(wn&S)===S:(t&S)===S){S!==0&&S===ga&&(Ps=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});n:{var I=n,sn=u;S=r;var Kn=e;switch(sn.tag){case 1:if(I=sn.payload,typeof I=="function"){R=I.call(Kn,R,S);break n}R=I;break n;case 3:I.flags=I.flags&-65537|128;case 0:if(I=sn.payload,S=typeof I=="function"?I.call(Kn,R,S):I,S==null)break n;R=O({},R,S);break n;case 2:at=!0}}S=u.callback,S!==null&&(n.flags|=64,j&&(n.flags|=8192),j=i.callbacks,j===null?i.callbacks=[S]:j.push(S))}else j={lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?(_=A=j,f=R):A=A.next=j,s|=S;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;j=u,u=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);A===null&&(f=R),i.baseState=f,i.firstBaseUpdate=_,i.lastBaseUpdate=A,l===null&&(i.shared.lanes=0),dt|=s,n.lanes=s,n.memoizedState=R}}function Oo(n,r){if(typeof n!="function")throw Error(d(191,n));n.call(r)}function wo(n,r){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)Oo(e[n],r)}var ya=p(null),pl=p(0);function Mo(n,r){n=Ke,G(pl,n),G(ya,r),Ke=n|r.baseLanes}function $s(){G(pl,Ke),G(ya,ya.current)}function nc(){Ke=pl.current,w(ya),w(pl)}var re=p(null),fe=null;function st(n){var r=n.alternate;G(dr,dr.current&1),G(re,n),fe===null&&(r===null||ya.current!==null||r.memoizedState!==null)&&(fe=n)}function rc(n){G(dr,dr.current),G(re,n),fe===null&&(fe=n)}function ko(n){n.tag===22?(G(dr,dr.current),G(re,n),fe===null&&(fe=n)):ct()}function ct(){G(dr,dr.current),G(re,re.current)}function ee(n){w(re),fe===n&&(fe=null),w(dr)}var dr=p(0);function ml(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||su(e)||cu(e)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Be=0,bn=null,Vn=null,yr=null,bl=!1,xa=!1,Qt=!1,yl=0,fi=0,va=null,Vg=0;function ar(){throw Error(d(321))}function ec(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!$r(n[e],r[e]))return!1;return!0}function tc(n,r,e,t,i,l){return Be=l,bn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,N.H=n===null||n.memoizedState===null?gd:yc,Qt=!1,l=e(t,i),Qt=!1,xa&&(l=zo(r,e,t,i)),Ro(n),l}function Ro(n){N.H=pi;var r=Vn!==null&&Vn.next!==null;if(Be=0,yr=Vn=bn=null,bl=!1,fi=0,va=null,r)throw Error(d(300));n===null||xr||(n=n.dependencies,n!==null&&cl(n)&&(xr=!0))}function zo(n,r,e,t){bn=n;var i=0;do{if(xa&&(va=null),fi=0,xa=!1,25<=i)throw Error(d(301));if(i+=1,yr=Vn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}N.H=pd,l=r(e,t)}while(xa);return l}function Qg(){var n=N.H,r=n.useState()[0];return r=typeof r.then=="function"?hi(r):r,n=n.useState()[0],(Vn!==null?Vn.memoizedState:null)!==n&&(bn.flags|=1024),r}function ac(){var n=yl!==0;return yl=0,n}function ic(n,r,e){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~e}function lc(n){if(bl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}bl=!1}Be=0,yr=Vn=bn=null,xa=!1,fi=yl=0,va=null}function Br(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yr===null?bn.memoizedState=yr=n:yr=yr.next=n,yr}function fr(){if(Vn===null){var n=bn.alternate;n=n!==null?n.memoizedState:null}else n=Vn.next;var r=yr===null?bn.memoizedState:yr.next;if(r!==null)yr=r,Vn=n;else{if(n===null)throw bn.alternate===null?Error(d(467)):Error(d(310));Vn=n,n={memoizedState:Vn.memoizedState,baseState:Vn.baseState,baseQueue:Vn.baseQueue,queue:Vn.queue,next:null},yr===null?bn.memoizedState=yr=n:yr=yr.next=n}return yr}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hi(n){var r=fi;return fi+=1,va===null&&(va=[]),n=So(va,n,r),r=bn,(yr===null?r.memoizedState:yr.next)===null&&(r=r.alternate,N.H=r===null||r.memoizedState===null?gd:yc),n}function vl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return hi(n);if(n.$$typeof===an)return Ar(n)}throw Error(d(438,String(n)))}function sc(n){var r=null,e=bn.updateQueue;if(e!==null&&(r=e.memoCache),r==null){var t=bn.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(r={data:t.data.map(function(i){return i.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),e===null&&(e=xl(),bn.updateQueue=e),e.memoCache=r,e=r.data[r.index],e===void 0)for(e=r.data[r.index]=Array(n),t=0;t<n;t++)e[t]=Sr;return r.index++,e}function Ue(n,r){return typeof r=="function"?r(n):r}function _l(n){var r=fr();return cc(r,Vn,n)}function cc(n,r,e){var t=n.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var i=n.baseQueue,l=t.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,t.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{r=i.next;var u=s=null,f=null,_=r,A=!1;do{var R=_.lane&-536870913;if(R!==_.lane?(wn&R)===R:(Be&R)===R){var S=_.revertLane;if(S===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),R===ga&&(A=!0);else if((Be&S)===S){_=_.next,S===ga&&(A=!0);continue}else R={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},f===null?(u=f=R,s=l):f=f.next=R,bn.lanes|=S,dt|=S;R=_.action,Qt&&e(l,R),l=_.hasEagerState?_.eagerState:e(l,R)}else S={lane:R,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},f===null?(u=f=S,s=l):f=f.next=S,bn.lanes|=R,dt|=R;_=_.next}while(_!==null&&_!==r);if(f===null?s=l:f.next=u,!$r(l,n.memoizedState)&&(xr=!0,A&&(e=pa,e!==null)))throw e;n.memoizedState=l,n.baseState=s,n.baseQueue=f,t.lastRenderedState=l}return i===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function uc(n){var r=fr(),e=r.queue;if(e===null)throw Error(d(311));e.lastRenderedReducer=n;var t=e.dispatch,i=e.pending,l=r.memoizedState;if(i!==null){e.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);$r(l,r.memoizedState)||(xr=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),e.lastRenderedState=l}return[l,t]}function Do(n,r,e){var t=bn,i=fr(),l=kn;if(l){if(e===void 0)throw Error(d(407));e=e()}else e=r();var s=!$r((Vn||i).memoizedState,e);if(s&&(i.memoizedState=e,xr=!0),i=i.queue,fc(Bo.bind(null,t,i,n),[n]),i.getSnapshot!==r||s||yr!==null&&yr.memoizedState.tag&1){if(t.flags|=2048,_a(9,{destroy:void 0},Co.bind(null,t,i,e,r),null),Zn===null)throw Error(d(349));l||(Be&127)!==0||Lo(t,r,e)}return e}function Lo(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=bn.updateQueue,r===null?(r=xl(),bn.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function Co(n,r,e,t){r.value=e,r.getSnapshot=t,Uo(r)&&Ho(n)}function Bo(n,r,e){return e(function(){Uo(r)&&Ho(n)})}function Uo(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!$r(n,e)}catch{return!0}}function Ho(n){var r=Lt(n,2);r!==null&&Zr(r,n,2)}function oc(n){var r=Br();if(typeof n=="function"){var e=n;if(n=e(),Qt){_e(!0);try{e()}finally{_e(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:n},r}function qo(n,r,e,t){return n.baseState=e,cc(n,Vn,typeof t=="function"?t:Ue)}function Kg(n,r,e,t,i){if(jl(n))throw Error(d(485));if(n=r.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};N.T!==null?e(!0):l.isTransition=!1,t(l),e=r.pending,e===null?(l.next=r.pending=l,Go(r,l)):(l.next=e.next,r.pending=e.next=l)}}function Go(n,r){var e=r.action,t=r.payload,i=n.state;if(r.isTransition){var l=N.T,s={};N.T=s;try{var u=e(i,t),f=N.S;f!==null&&f(s,u),Yo(n,r,u)}catch(_){dc(n,r,_)}finally{l!==null&&s.types!==null&&(l.types=s.types),N.T=l}}else try{l=e(i,t),Yo(n,r,l)}catch(_){dc(n,r,_)}}function Yo(n,r,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(t){Vo(n,r,t)},function(t){return dc(n,r,t)}):Vo(n,r,e)}function Vo(n,r,e){r.status="fulfilled",r.value=e,Qo(r),n.state=e,r=n.pending,r!==null&&(e=r.next,e===r?n.pending=null:(e=e.next,r.next=e,Go(n,e)))}function dc(n,r,e){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do r.status="rejected",r.reason=e,Qo(r),r=r.next;while(r!==t)}n.action=null}function Qo(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Ko(n,r){return r}function Jo(n,r){if(kn){var e=Zn.formState;if(e!==null){n:{var t=bn;if(kn){if(Pn){r:{for(var i=Pn,l=de;i.nodeType!==8;){if(!l){i=null;break r}if(i=he(i.nextSibling),i===null){i=null;break r}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Pn=he(i.nextSibling),t=i.data==="F!";break n}}et(t)}t=!1}t&&(r=e[0])}}return e=Br(),e.memoizedState=e.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:r},e.queue=t,e=dd.bind(null,bn,t),t.dispatch=e,t=oc(!1),l=bc.bind(null,bn,!1,t.queue),t=Br(),i={state:r,dispatch:null,action:n,pending:null},t.queue=i,e=Kg.bind(null,bn,i,l,e),i.dispatch=e,t.memoizedState=n,[r,e,!1]}function Xo(n){var r=fr();return Zo(r,Vn,n)}function Zo(n,r,e){if(r=cc(n,r,Ko)[0],n=_l(Ue)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var t=hi(r)}catch(s){throw s===ma?dl:s}else t=r;r=fr();var i=r.queue,l=i.dispatch;return e!==r.memoizedState&&(bn.flags|=2048,_a(9,{destroy:void 0},Jg.bind(null,i,e),null)),[t,l,n]}function Jg(n,r){n.action=r}function Io(n){var r=fr(),e=Vn;if(e!==null)return Zo(r,e,n);fr(),r=r.memoizedState,e=fr();var t=e.queue.dispatch;return e.memoizedState=n,[r,t,!1]}function _a(n,r,e,t){return n={tag:n,create:e,deps:t,inst:r,next:null},r=bn.updateQueue,r===null&&(r=xl(),bn.updateQueue=r),e=r.lastEffect,e===null?r.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,r.lastEffect=n),n}function Fo(){return fr().memoizedState}function Tl(n,r,e,t){var i=Br();bn.flags|=n,i.memoizedState=_a(1|r,{destroy:void 0},e,t===void 0?null:t)}function Sl(n,r,e,t){var i=fr();t=t===void 0?null:t;var l=i.memoizedState.inst;Vn!==null&&t!==null&&ec(t,Vn.memoizedState.deps)?i.memoizedState=_a(r,l,e,t):(bn.flags|=n,i.memoizedState=_a(1|r,l,e,t))}function Wo(n,r){Tl(8390656,8,n,r)}function fc(n,r){Sl(2048,8,n,r)}function Xg(n){bn.flags|=4;var r=bn.updateQueue;if(r===null)r=xl(),bn.updateQueue=r,r.events=[n];else{var e=r.events;e===null?r.events=[n]:e.push(n)}}function Po(n){var r=fr().memoizedState;return Xg({ref:r,nextImpl:n}),function(){if((Ln&2)!==0)throw Error(d(440));return r.impl.apply(void 0,arguments)}}function $o(n,r){return Sl(4,2,n,r)}function nd(n,r){return Sl(4,4,n,r)}function rd(n,r){if(typeof r=="function"){n=n();var e=r(n);return function(){typeof e=="function"?e():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function ed(n,r,e){e=e!=null?e.concat([n]):null,Sl(4,4,rd.bind(null,r,n),e)}function hc(){}function td(n,r){var e=fr();r=r===void 0?null:r;var t=e.memoizedState;return r!==null&&ec(r,t[1])?t[0]:(e.memoizedState=[n,r],n)}function ad(n,r){var e=fr();r=r===void 0?null:r;var t=e.memoizedState;if(r!==null&&ec(r,t[1]))return t[0];if(t=n(),Qt){_e(!0);try{n()}finally{_e(!1)}}return e.memoizedState=[t,r],t}function gc(n,r,e){return e===void 0||(Be&1073741824)!==0&&(wn&261930)===0?n.memoizedState=r:(n.memoizedState=e,n=lf(),bn.lanes|=n,dt|=n,e)}function id(n,r,e,t){return $r(e,r)?e:ya.current!==null?(n=gc(n,e,t),$r(n,r)||(xr=!0),n):(Be&42)===0||(Be&1073741824)!==0&&(wn&261930)===0?(xr=!0,n.memoizedState=e):(n=lf(),bn.lanes|=n,dt|=n,r)}function ld(n,r,e,t,i){var l=q.p;q.p=l!==0&&8>l?l:8;var s=N.T,u={};N.T=u,bc(n,!1,r,e);try{var f=i(),_=N.S;if(_!==null&&_(u,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var A=Yg(f,t);gi(n,r,A,ie(n))}else gi(n,r,t,ie(n))}catch(R){gi(n,r,{then:function(){},status:"rejected",reason:R},ie())}finally{q.p=l,s!==null&&u.types!==null&&(s.types=u.types),N.T=s}}function Zg(){}function pc(n,r,e,t){if(n.tag!==5)throw Error(d(476));var i=sd(n).queue;ld(n,i,r,Q,e===null?Zg:function(){return cd(n),e(t)})}function sd(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:Q},next:null};var e={};return r.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ue,lastRenderedState:e},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function cd(n){var r=sd(n);r.next===null&&(r=n.alternate.memoizedState),gi(n,r.next.queue,{},ie())}function mc(){return Ar(ki)}function ud(){return fr().memoizedState}function od(){return fr().memoizedState}function Ig(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var e=ie();n=it(e);var t=lt(r,n,e);t!==null&&(Zr(t,r,e),ui(t,r,e)),r={cache:Ks()},n.payload=r;return}r=r.return}}function Fg(n,r,e){var t=ie();e={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},jl(n)?fd(r,e):(e=Ds(n,r,e,t),e!==null&&(Zr(e,n,t),hd(e,r,t)))}function dd(n,r,e){var t=ie();gi(n,r,e,t)}function gi(n,r,e,t){var i={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(jl(n))fd(r,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var s=r.lastRenderedState,u=l(s,e);if(i.hasEagerState=!0,i.eagerState=u,$r(u,s))return al(n,r,i,0),Zn===null&&tl(),!1}catch{}if(e=Ds(n,r,i,t),e!==null)return Zr(e,n,t),hd(e,r,t),!0}return!1}function bc(n,r,e,t){if(t={lane:2,revertLane:Ic(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},jl(n)){if(r)throw Error(d(479))}else r=Ds(n,e,t,2),r!==null&&Zr(r,n,2)}function jl(n){var r=n.alternate;return n===bn||r!==null&&r===bn}function fd(n,r){xa=bl=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function hd(n,r,e){if((e&4194048)!==0){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,un(n,e)}}var pi={readContext:Ar,use:vl,useCallback:ar,useContext:ar,useEffect:ar,useImperativeHandle:ar,useLayoutEffect:ar,useInsertionEffect:ar,useMemo:ar,useReducer:ar,useRef:ar,useState:ar,useDebugValue:ar,useDeferredValue:ar,useTransition:ar,useSyncExternalStore:ar,useId:ar,useHostTransitionStatus:ar,useFormState:ar,useActionState:ar,useOptimistic:ar,useMemoCache:ar,useCacheRefresh:ar};pi.useEffectEvent=ar;var gd={readContext:Ar,use:vl,useCallback:function(n,r){return Br().memoizedState=[n,r===void 0?null:r],n},useContext:Ar,useEffect:Wo,useImperativeHandle:function(n,r,e){e=e!=null?e.concat([n]):null,Tl(4194308,4,rd.bind(null,r,n),e)},useLayoutEffect:function(n,r){return Tl(4194308,4,n,r)},useInsertionEffect:function(n,r){Tl(4,2,n,r)},useMemo:function(n,r){var e=Br();r=r===void 0?null:r;var t=n();if(Qt){_e(!0);try{n()}finally{_e(!1)}}return e.memoizedState=[t,r],t},useReducer:function(n,r,e){var t=Br();if(e!==void 0){var i=e(r);if(Qt){_e(!0);try{e(r)}finally{_e(!1)}}}else i=r;return t.memoizedState=t.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},t.queue=n,n=n.dispatch=Fg.bind(null,bn,n),[t.memoizedState,n]},useRef:function(n){var r=Br();return n={current:n},r.memoizedState=n},useState:function(n){n=oc(n);var r=n.queue,e=dd.bind(null,bn,r);return r.dispatch=e,[n.memoizedState,e]},useDebugValue:hc,useDeferredValue:function(n,r){var e=Br();return gc(e,n,r)},useTransition:function(){var n=oc(!1);return n=ld.bind(null,bn,n.queue,!0,!1),Br().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,e){var t=bn,i=Br();if(kn){if(e===void 0)throw Error(d(407));e=e()}else{if(e=r(),Zn===null)throw Error(d(349));(wn&127)!==0||Lo(t,r,e)}i.memoizedState=e;var l={value:e,getSnapshot:r};return i.queue=l,Wo(Bo.bind(null,t,l,n),[n]),t.flags|=2048,_a(9,{destroy:void 0},Co.bind(null,t,l,e,r),null),e},useId:function(){var n=Br(),r=Zn.identifierPrefix;if(kn){var e=je,t=Se;e=(t&~(1<<32-Lr(t)-1)).toString(32)+e,r="_"+r+"R_"+e,e=yl++,0<e&&(r+="H"+e.toString(32)),r+="_"}else e=Vg++,r="_"+r+"r_"+e.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:mc,useFormState:Jo,useActionState:Jo,useOptimistic:function(n){var r=Br();r.memoizedState=r.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=e,r=bc.bind(null,bn,!0,e),e.dispatch=r,[n,r]},useMemoCache:sc,useCacheRefresh:function(){return Br().memoizedState=Ig.bind(null,bn)},useEffectEvent:function(n){var r=Br(),e={impl:n};return r.memoizedState=e,function(){if((Ln&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}},yc={readContext:Ar,use:vl,useCallback:td,useContext:Ar,useEffect:fc,useImperativeHandle:ed,useInsertionEffect:$o,useLayoutEffect:nd,useMemo:ad,useReducer:_l,useRef:Fo,useState:function(){return _l(Ue)},useDebugValue:hc,useDeferredValue:function(n,r){var e=fr();return id(e,Vn.memoizedState,n,r)},useTransition:function(){var n=_l(Ue)[0],r=fr().memoizedState;return[typeof n=="boolean"?n:hi(n),r]},useSyncExternalStore:Do,useId:ud,useHostTransitionStatus:mc,useFormState:Xo,useActionState:Xo,useOptimistic:function(n,r){var e=fr();return qo(e,Vn,n,r)},useMemoCache:sc,useCacheRefresh:od};yc.useEffectEvent=Po;var pd={readContext:Ar,use:vl,useCallback:td,useContext:Ar,useEffect:fc,useImperativeHandle:ed,useInsertionEffect:$o,useLayoutEffect:nd,useMemo:ad,useReducer:uc,useRef:Fo,useState:function(){return uc(Ue)},useDebugValue:hc,useDeferredValue:function(n,r){var e=fr();return Vn===null?gc(e,n,r):id(e,Vn.memoizedState,n,r)},useTransition:function(){var n=uc(Ue)[0],r=fr().memoizedState;return[typeof n=="boolean"?n:hi(n),r]},useSyncExternalStore:Do,useId:ud,useHostTransitionStatus:mc,useFormState:Io,useActionState:Io,useOptimistic:function(n,r){var e=fr();return Vn!==null?qo(e,Vn,n,r):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:sc,useCacheRefresh:od};pd.useEffectEvent=Po;function xc(n,r,e,t){r=n.memoizedState,e=e(t,r),e=e==null?r:O({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var vc={enqueueSetState:function(n,r,e){n=n._reactInternals;var t=ie(),i=it(t);i.payload=r,e!=null&&(i.callback=e),r=lt(n,i,t),r!==null&&(Zr(r,n,t),ui(r,n,t))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var t=ie(),i=it(t);i.tag=1,i.payload=r,e!=null&&(i.callback=e),r=lt(n,i,t),r!==null&&(Zr(r,n,t),ui(r,n,t))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=ie(),t=it(e);t.tag=2,r!=null&&(t.callback=r),r=lt(n,t,e),r!==null&&(Zr(r,n,e),ui(r,n,e))}};function md(n,r,e,t,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,s):r.prototype&&r.prototype.isPureReactComponent?!ri(e,t)||!ri(i,l):!0}function bd(n,r,e,t){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,t),r.state!==n&&vc.enqueueReplaceState(r,r.state,null)}function Kt(n,r){var e=r;if("ref"in r){e={};for(var t in r)t!=="ref"&&(e[t]=r[t])}if(n=n.defaultProps){e===r&&(e=O({},e));for(var i in n)e[i]===void 0&&(e[i]=n[i])}return e}function yd(n){el(n)}function xd(n){console.error(n)}function vd(n){el(n)}function Nl(n,r){try{var e=n.onUncaughtError;e(r.value,{componentStack:r.stack})}catch(t){setTimeout(function(){throw t})}}function _d(n,r,e){try{var t=n.onCaughtError;t(e.value,{componentStack:e.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function _c(n,r,e){return e=it(e),e.tag=3,e.payload={element:null},e.callback=function(){Nl(n,r)},e}function Td(n){return n=it(n),n.tag=3,n}function Sd(n,r,e,t){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;n.payload=function(){return i(l)},n.callback=function(){_d(r,e,t)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_d(r,e,t),typeof i!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})})}function Wg(n,r,e,t,i){if(e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(r=e.alternate,r!==null&&ha(r,e,i,!0),e=re.current,e!==null){switch(e.tag){case 31:case 13:return fe===null?Bl():e.alternate===null&&ir===0&&(ir=3),e.flags&=-257,e.flags|=65536,e.lanes=i,t===fl?e.flags|=16384:(r=e.updateQueue,r===null?e.updateQueue=new Set([t]):r.add(t),Jc(n,t,i)),!1;case 22:return e.flags|=65536,t===fl?e.flags|=16384:(r=e.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([t])},e.updateQueue=r):(e=r.retryQueue,e===null?r.retryQueue=new Set([t]):e.add(t)),Jc(n,t,i)),!1}throw Error(d(435,e.tag))}return Jc(n,t,i),Bl(),!1}if(kn)return r=re.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=i,t!==qs&&(n=Error(d(422),{cause:t}),ai(ce(n,e)))):(t!==qs&&(r=Error(d(423),{cause:t}),ai(ce(r,e))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,t=ce(t,e),i=_c(n.stateNode,t,i),Ws(n,i),ir!==4&&(ir=2)),!1;var l=Error(d(520),{cause:t});if(l=ce(l,e),Si===null?Si=[l]:Si.push(l),ir!==4&&(ir=2),r===null)return!0;t=ce(t,e),e=r;do{switch(e.tag){case 3:return e.flags|=65536,n=i&-i,e.lanes|=n,n=_c(e.stateNode,t,n),Ws(e,n),!1;case 1:if(r=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ft===null||!ft.has(l))))return e.flags|=65536,i&=-i,e.lanes|=i,i=Td(i),Sd(i,n,e,t),Ws(e,i),!1}e=e.return}while(e!==null);return!1}var Tc=Error(d(461)),xr=!1;function Or(n,r,e,t){r.child=n===null?Ao(r,null,e,t):Vt(r,n.child,e,t)}function jd(n,r,e,t,i){e=e.render;var l=r.ref;if("ref"in t){var s={};for(var u in t)u!=="ref"&&(s[u]=t[u])}else s=t;return Ht(r),t=tc(n,r,e,s,l,i),u=ac(),n!==null&&!xr?(ic(n,r,i),He(n,r,i)):(kn&&u&&Us(r),r.flags|=1,Or(n,r,t,i),r.child)}function Nd(n,r,e,t,i){if(n===null){var l=e.type;return typeof l=="function"&&!Ls(l)&&l.defaultProps===void 0&&e.compare===null?(r.tag=15,r.type=l,Ed(n,r,l,t,i)):(n=ll(e.type,null,t,r,r.mode,i),n.ref=r.ref,n.return=r,r.child=n)}if(l=n.child,!Mc(n,i)){var s=l.memoizedProps;if(e=e.compare,e=e!==null?e:ri,e(s,t)&&n.ref===r.ref)return He(n,r,i)}return r.flags|=1,n=ze(l,t),n.ref=r.ref,n.return=r,r.child=n}function Ed(n,r,e,t,i){if(n!==null){var l=n.memoizedProps;if(ri(l,t)&&n.ref===r.ref)if(xr=!1,r.pendingProps=t=l,Mc(n,i))(n.flags&131072)!==0&&(xr=!0);else return r.lanes=n.lanes,He(n,r,i)}return Sc(n,r,e,t,i)}function Ad(n,r,e,t){var i=t.children,l=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((r.flags&128)!==0){if(l=l!==null?l.baseLanes|e:e,n!==null){for(t=r.child=n.child,i=0;t!==null;)i=i|t.lanes|t.childLanes,t=t.sibling;t=i&~l}else t=0,r.child=null;return Od(n,r,l,e,t)}if((e&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&ol(r,l!==null?l.cachePool:null),l!==null?Mo(r,l):$s(),ko(r);else return t=r.lanes=536870912,Od(n,r,l!==null?l.baseLanes|e:e,e,t)}else l!==null?(ol(r,l.cachePool),Mo(r,l),ct(),r.memoizedState=null):(n!==null&&ol(r,null),$s(),ct());return Or(n,r,i,e),r.child}function mi(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function Od(n,r,e,t,i){var l=Xs();return l=l===null?null:{parent:br._currentValue,pool:l},r.memoizedState={baseLanes:e,cachePool:l},n!==null&&ol(r,null),$s(),ko(r),n!==null&&ha(n,r,t,!0),r.childLanes=i,null}function El(n,r){return r=Ol({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function wd(n,r,e){return Vt(r,n.child,null,e),n=El(r,r.pendingProps),n.flags|=2,ee(r),r.memoizedState=null,n}function Pg(n,r,e){var t=r.pendingProps,i=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(kn){if(t.mode==="hidden")return n=El(r,t),r.lanes=536870912,mi(null,n);if(rc(r),(n=Pn)?(n=Yf(n,de),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:nt!==null?{id:Se,overflow:je}:null,retryLane:536870912,hydrationErrors:null},e=fo(n),e.return=r,r.child=e,Er=r,Pn=null)):n=null,n===null)throw et(r);return r.lanes=536870912,null}return El(r,t)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(rc(r),i)if(r.flags&256)r.flags&=-257,r=wd(n,r,e);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(d(558));else if(xr||ha(n,r,e,!1),i=(e&n.childLanes)!==0,xr||i){if(t=Zn,t!==null&&(s=cr(t,e),s!==0&&s!==l.retryLane))throw l.retryLane=s,Lt(n,s),Zr(t,n,s),Tc;Bl(),r=wd(n,r,e)}else n=l.treeContext,Pn=he(s.nextSibling),Er=r,kn=!0,rt=null,de=!1,n!==null&&po(r,n),r=El(r,t),r.flags|=4096;return r}return n=ze(n.child,{mode:t.mode,children:t.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Al(n,r){var e=r.ref;if(e===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(d(284));(n===null||n.ref!==e)&&(r.flags|=4194816)}}function Sc(n,r,e,t,i){return Ht(r),e=tc(n,r,e,t,void 0,i),t=ac(),n!==null&&!xr?(ic(n,r,i),He(n,r,i)):(kn&&t&&Us(r),r.flags|=1,Or(n,r,e,i),r.child)}function Md(n,r,e,t,i,l){return Ht(r),r.updateQueue=null,e=zo(r,t,e,i),Ro(n),t=ac(),n!==null&&!xr?(ic(n,r,l),He(n,r,l)):(kn&&t&&Us(r),r.flags|=1,Or(n,r,e,l),r.child)}function kd(n,r,e,t,i){if(Ht(r),r.stateNode===null){var l=ua,s=e.contextType;typeof s=="object"&&s!==null&&(l=Ar(s)),l=new e(t,l),r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=vc,r.stateNode=l,l._reactInternals=r,l=r.stateNode,l.props=t,l.state=r.memoizedState,l.refs={},Is(r),s=e.contextType,l.context=typeof s=="object"&&s!==null?Ar(s):ua,l.state=r.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xc(r,e,s,t),l.state=r.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&vc.enqueueReplaceState(l,l.state,null),di(r,t,l,i),oi(),l.state=r.memoizedState),typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!0}else if(n===null){l=r.stateNode;var u=r.memoizedProps,f=Kt(e,u);l.props=f;var _=l.context,A=e.contextType;s=ua,typeof A=="object"&&A!==null&&(s=Ar(A));var R=e.getDerivedStateFromProps;A=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=r.pendingProps!==u,A||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||_!==s)&&bd(r,l,t,s),at=!1;var S=r.memoizedState;l.state=S,di(r,t,l,i),oi(),_=r.memoizedState,u||S!==_||at?(typeof R=="function"&&(xc(r,e,R,t),_=r.memoizedState),(f=at||md(r,e,f,t,S,_,s))?(A||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=_),l.props=t,l.state=_,l.context=s,t=f):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{l=r.stateNode,Fs(n,r),s=r.memoizedProps,A=Kt(e,s),l.props=A,R=r.pendingProps,S=l.context,_=e.contextType,f=ua,typeof _=="object"&&_!==null&&(f=Ar(_)),u=e.getDerivedStateFromProps,(_=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==R||S!==f)&&bd(r,l,t,f),at=!1,S=r.memoizedState,l.state=S,di(r,t,l,i),oi();var j=r.memoizedState;s!==R||S!==j||at||n!==null&&n.dependencies!==null&&cl(n.dependencies)?(typeof u=="function"&&(xc(r,e,u,t),j=r.memoizedState),(A=at||md(r,e,A,t,S,j,f)||n!==null&&n.dependencies!==null&&cl(n.dependencies))?(_||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,j,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,j,f)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=j),l.props=t,l.state=j,l.context=f,t=A):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=1024),t=!1)}return l=t,Al(n,r),t=(r.flags&128)!==0,l||t?(l=r.stateNode,e=t&&typeof e.getDerivedStateFromError!="function"?null:l.render(),r.flags|=1,n!==null&&t?(r.child=Vt(r,n.child,null,i),r.child=Vt(r,null,e,i)):Or(n,r,e,i),r.memoizedState=l.state,n=r.child):n=He(n,r,i),n}function Rd(n,r,e,t){return Bt(),r.flags|=256,Or(n,r,e,t),r.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(n){return{baseLanes:n,cachePool:_o()}}function Ec(n,r,e){return n=n!==null?n.childLanes&~e:0,r&&(n|=ae),n}function zd(n,r,e){var t=r.pendingProps,i=!1,l=(r.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(dr.current&2)!==0),s&&(i=!0,r.flags&=-129),s=(r.flags&32)!==0,r.flags&=-33,n===null){if(kn){if(i?st(r):ct(),(n=Pn)?(n=Yf(n,de),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:nt!==null?{id:Se,overflow:je}:null,retryLane:536870912,hydrationErrors:null},e=fo(n),e.return=r,r.child=e,Er=r,Pn=null)):n=null,n===null)throw et(r);return cu(n)?r.lanes=32:r.lanes=536870912,null}var u=t.children;return t=t.fallback,i?(ct(),i=r.mode,u=Ol({mode:"hidden",children:u},i),t=Ct(t,i,e,null),u.return=r,t.return=r,u.sibling=t,r.child=u,t=r.child,t.memoizedState=Nc(e),t.childLanes=Ec(n,s,e),r.memoizedState=jc,mi(null,t)):(st(r),Ac(r,u))}var f=n.memoizedState;if(f!==null&&(u=f.dehydrated,u!==null)){if(l)r.flags&256?(st(r),r.flags&=-257,r=Oc(n,r,e)):r.memoizedState!==null?(ct(),r.child=n.child,r.flags|=128,r=null):(ct(),u=t.fallback,i=r.mode,t=Ol({mode:"visible",children:t.children},i),u=Ct(u,i,e,null),u.flags|=2,t.return=r,u.return=r,t.sibling=u,r.child=t,Vt(r,n.child,null,e),t=r.child,t.memoizedState=Nc(e),t.childLanes=Ec(n,s,e),r.memoizedState=jc,r=mi(null,t));else if(st(r),cu(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var _=s.dgst;s=_,t=Error(d(419)),t.stack="",t.digest=s,ai({value:t,source:null,stack:null}),r=Oc(n,r,e)}else if(xr||ha(n,r,e,!1),s=(e&n.childLanes)!==0,xr||s){if(s=Zn,s!==null&&(t=cr(s,e),t!==0&&t!==f.retryLane))throw f.retryLane=t,Lt(n,t),Zr(s,n,t),Tc;su(u)||Bl(),r=Oc(n,r,e)}else su(u)?(r.flags|=192,r.child=n.child,r=null):(n=f.treeContext,Pn=he(u.nextSibling),Er=r,kn=!0,rt=null,de=!1,n!==null&&po(r,n),r=Ac(r,t.children),r.flags|=4096);return r}return i?(ct(),u=t.fallback,i=r.mode,f=n.child,_=f.sibling,t=ze(f,{mode:"hidden",children:t.children}),t.subtreeFlags=f.subtreeFlags&65011712,_!==null?u=ze(_,u):(u=Ct(u,i,e,null),u.flags|=2),u.return=r,t.return=r,t.sibling=u,r.child=t,mi(null,t),t=r.child,u=n.child.memoizedState,u===null?u=Nc(e):(i=u.cachePool,i!==null?(f=br._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=_o(),u={baseLanes:u.baseLanes|e,cachePool:i}),t.memoizedState=u,t.childLanes=Ec(n,s,e),r.memoizedState=jc,mi(n.child,t)):(st(r),e=n.child,n=e.sibling,e=ze(e,{mode:"visible",children:t.children}),e.return=r,e.sibling=null,n!==null&&(s=r.deletions,s===null?(r.deletions=[n],r.flags|=16):s.push(n)),r.child=e,r.memoizedState=null,e)}function Ac(n,r){return r=Ol({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Ol(n,r){return n=ne(22,n,null,r),n.lanes=0,n}function Oc(n,r,e){return Vt(r,n.child,null,e),n=Ac(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Dd(n,r,e){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r),Vs(n.return,r,e)}function wc(n,r,e,t,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:i,treeForkCount:l}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=e,s.tailMode=i,s.treeForkCount=l)}function Ld(n,r,e){var t=r.pendingProps,i=t.revealOrder,l=t.tail;t=t.children;var s=dr.current,u=(s&2)!==0;if(u?(s=s&1|2,r.flags|=128):s&=1,G(dr,s),Or(n,r,t,e),t=kn?ti:0,!u&&n!==null&&(n.flags&128)!==0)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dd(n,e,r);else if(n.tag===19)Dd(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"forwards":for(e=r.child,i=null;e!==null;)n=e.alternate,n!==null&&ml(n)===null&&(i=e),e=e.sibling;e=i,e===null?(i=r.child,r.child=null):(i=e.sibling,e.sibling=null),wc(r,!1,i,e,l,t);break;case"backwards":case"unstable_legacy-backwards":for(e=null,i=r.child,r.child=null;i!==null;){if(n=i.alternate,n!==null&&ml(n)===null){r.child=i;break}n=i.sibling,i.sibling=e,e=i,i=n}wc(r,!0,e,null,l,t);break;case"together":wc(r,!1,null,null,void 0,t);break;default:r.memoizedState=null}return r.child}function He(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),dt|=r.lanes,(e&r.childLanes)===0)if(n!==null){if(ha(n,r,e,!1),(e&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(d(153));if(r.child!==null){for(n=r.child,e=ze(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=ze(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function Mc(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&cl(n)))}function $g(n,r,e){switch(r.tag){case 3:Rn(r,r.stateNode.containerInfo),tt(r,br,n.memoizedState.cache),Bt();break;case 27:case 5:Fr(r);break;case 4:Rn(r,r.stateNode.containerInfo);break;case 10:tt(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,rc(r),null;break;case 13:var t=r.memoizedState;if(t!==null)return t.dehydrated!==null?(st(r),r.flags|=128,null):(e&r.child.childLanes)!==0?zd(n,r,e):(st(r),n=He(n,r,e),n!==null?n.sibling:null);st(r);break;case 19:var i=(n.flags&128)!==0;if(t=(e&r.childLanes)!==0,t||(ha(n,r,e,!1),t=(e&r.childLanes)!==0),i){if(t)return Ld(n,r,e);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(dr,dr.current),t)break;return null;case 22:return r.lanes=0,Ad(n,r,e,r.pendingProps);case 24:tt(r,br,n.memoizedState.cache)}return He(n,r,e)}function Cd(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps)xr=!0;else{if(!Mc(n,e)&&(r.flags&128)===0)return xr=!1,$g(n,r,e);xr=(n.flags&131072)!==0}else xr=!1,kn&&(r.flags&1048576)!==0&&go(r,ti,r.index);switch(r.lanes=0,r.tag){case 16:n:{var t=r.pendingProps;if(n=Gt(r.elementType),r.type=n,typeof n=="function")Ls(n)?(t=Kt(n,t),r.tag=1,r=kd(null,r,n,t,e)):(r.tag=0,r=Sc(null,r,n,t,e));else{if(n!=null){var i=n.$$typeof;if(i===on){r.tag=11,r=jd(null,r,n,t,e);break n}else if(i===fn){r.tag=14,r=Nd(null,r,n,t,e);break n}}throw r=lr(n)||n,Error(d(306,r,""))}}return r;case 0:return Sc(n,r,r.type,r.pendingProps,e);case 1:return t=r.type,i=Kt(t,r.pendingProps),kd(n,r,t,i,e);case 3:n:{if(Rn(r,r.stateNode.containerInfo),n===null)throw Error(d(387));t=r.pendingProps;var l=r.memoizedState;i=l.element,Fs(n,r),di(r,t,null,e);var s=r.memoizedState;if(t=s.cache,tt(r,br,t),t!==l.cache&&Qs(r,[br],e,!0),oi(),t=s.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:s.cache},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){r=Rd(n,r,t,e);break n}else if(t!==i){i=ce(Error(d(424)),r),ai(i),r=Rd(n,r,t,e);break n}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Pn=he(n.firstChild),Er=r,kn=!0,rt=null,de=!0,e=Ao(r,null,t,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Bt(),t===i){r=He(n,r,e);break n}Or(n,r,t,e)}r=r.child}return r;case 26:return Al(n,r),n===null?(e=Zf(r.type,null,r.pendingProps,null))?r.memoizedState=e:kn||(e=r.type,n=r.pendingProps,t=Ql(mn.current).createElement(e),t[ur]=r,t[kr]=n,wr(t,e,n),pr(t),r.stateNode=t):r.memoizedState=Zf(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Fr(r),n===null&&kn&&(t=r.stateNode=Kf(r.type,r.pendingProps,mn.current),Er=r,de=!0,i=Pn,mt(r.type)?(uu=i,Pn=he(t.firstChild)):Pn=i),Or(n,r,r.pendingProps.children,e),Al(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&kn&&((i=t=Pn)&&(t=wp(t,r.type,r.pendingProps,de),t!==null?(r.stateNode=t,Er=r,Pn=he(t.firstChild),de=!1,i=!0):i=!1),i||et(r)),Fr(r),i=r.type,l=r.pendingProps,s=n!==null?n.memoizedProps:null,t=l.children,au(i,l)?t=null:s!==null&&au(i,s)&&(r.flags|=32),r.memoizedState!==null&&(i=tc(n,r,Qg,null,null,e),ki._currentValue=i),Al(n,r),Or(n,r,t,e),r.child;case 6:return n===null&&kn&&((n=e=Pn)&&(e=Mp(e,r.pendingProps,de),e!==null?(r.stateNode=e,Er=r,Pn=null,n=!0):n=!1),n||et(r)),null;case 13:return zd(n,r,e);case 4:return Rn(r,r.stateNode.containerInfo),t=r.pendingProps,n===null?r.child=Vt(r,null,t,e):Or(n,r,t,e),r.child;case 11:return jd(n,r,r.type,r.pendingProps,e);case 7:return Or(n,r,r.pendingProps,e),r.child;case 8:return Or(n,r,r.pendingProps.children,e),r.child;case 12:return Or(n,r,r.pendingProps.children,e),r.child;case 10:return t=r.pendingProps,tt(r,r.type,t.value),Or(n,r,t.children,e),r.child;case 9:return i=r.type._context,t=r.pendingProps.children,Ht(r),i=Ar(i),t=t(i),r.flags|=1,Or(n,r,t,e),r.child;case 14:return Nd(n,r,r.type,r.pendingProps,e);case 15:return Ed(n,r,r.type,r.pendingProps,e);case 19:return Ld(n,r,e);case 31:return Pg(n,r,e);case 22:return Ad(n,r,e,r.pendingProps);case 24:return Ht(r),t=Ar(br),n===null?(i=Xs(),i===null&&(i=Zn,l=Ks(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=e),i=l),r.memoizedState={parent:t,cache:i},Is(r),tt(r,br,i)):((n.lanes&e)!==0&&(Fs(n,r),di(r,null,null,e),oi()),i=n.memoizedState,l=r.memoizedState,i.parent!==t?(i={parent:t,cache:t},r.memoizedState=i,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=i),tt(r,br,t)):(t=l.cache,tt(r,br,t),t!==i.cache&&Qs(r,[br],e,!0))),Or(n,r,r.pendingProps.children,e),r.child;case 29:throw r.pendingProps}throw Error(d(156,r.tag))}function qe(n){n.flags|=4}function kc(n,r,e,t,i){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(of())n.flags|=8192;else throw Yt=fl,Zs}else n.flags&=-16777217}function Bd(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!$f(r))if(of())n.flags|=8192;else throw Yt=fl,Zs}function wl(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?dn():536870912,n.lanes|=r,Na|=r)}function bi(n,r){if(!kn)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function $n(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(r)for(var i=n.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags&65011712,t|=i.flags&65011712,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=t,n.childLanes=e,r}function np(n,r,e){var t=r.pendingProps;switch(Hs(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(r),null;case 1:return $n(r),null;case 3:return e=r.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),r.memoizedState.cache!==t&&(r.flags|=2048),Ce(br),In(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(fa(r)?qe(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Gs())),$n(r),null;case 26:var i=r.type,l=r.memoizedState;return n===null?(qe(r),l!==null?($n(r),Bd(r,l)):($n(r),kc(r,i,null,t,e))):l?l!==n.memoizedState?(qe(r),$n(r),Bd(r,l)):($n(r),r.flags&=-16777217):(n=n.memoizedProps,n!==t&&qe(r),$n(r),kc(r,i,n,t,e)),null;case 27:if(ve(r),e=mn.current,i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&qe(r);else{if(!t){if(r.stateNode===null)throw Error(d(166));return $n(r),null}n=Z.current,fa(r)?mo(r):(n=Kf(i,t,e),r.stateNode=n,qe(r))}return $n(r),null;case 5:if(ve(r),i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&qe(r);else{if(!t){if(r.stateNode===null)throw Error(d(166));return $n(r),null}if(l=Z.current,fa(r))mo(r);else{var s=Ql(mn.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof t.is=="string"?s.createElement("select",{is:t.is}):s.createElement("select"),t.multiple?l.multiple=!0:t.size&&(l.size=t.size);break;default:l=typeof t.is=="string"?s.createElement(i,{is:t.is}):s.createElement(i)}}l[ur]=r,l[kr]=t;n:for(s=r.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break n;for(;s.sibling===null;){if(s.return===null||s.return===r)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}r.stateNode=l;n:switch(wr(l,i,t),i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}t&&qe(r)}}return $n(r),kc(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,e),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==t&&qe(r);else{if(typeof t!="string"&&r.stateNode===null)throw Error(d(166));if(n=mn.current,fa(r)){if(n=r.stateNode,e=r.memoizedProps,t=null,i=Er,i!==null)switch(i.tag){case 27:case 5:t=i.memoizedProps}n[ur]=r,n=!!(n.nodeValue===e||t!==null&&t.suppressHydrationWarning===!0||Df(n.nodeValue,e)),n||et(r,!0)}else n=Ql(n).createTextNode(t),n[ur]=r,r.stateNode=n}return $n(r),null;case 31:if(e=r.memoizedState,n===null||n.memoizedState!==null){if(t=fa(r),e!==null){if(n===null){if(!t)throw Error(d(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[ur]=r}else Bt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$n(r),n=!1}else e=Gs(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return r.flags&256?(ee(r),r):(ee(r),null);if((r.flags&128)!==0)throw Error(d(558))}return $n(r),null;case 13:if(t=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=fa(r),t!==null&&t.dehydrated!==null){if(n===null){if(!i)throw Error(d(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[ur]=r}else Bt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$n(r),i=!1}else i=Gs(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return r.flags&256?(ee(r),r):(ee(r),null)}return ee(r),(r.flags&128)!==0?(r.lanes=e,r):(e=t!==null,n=n!==null&&n.memoizedState!==null,e&&(t=r.child,i=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(i=t.alternate.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048)),e!==n&&e&&(r.child.flags|=8192),wl(r,r.updateQueue),$n(r),null);case 4:return In(),n===null&&$c(r.stateNode.containerInfo),$n(r),null;case 10:return Ce(r.type),$n(r),null;case 19:if(w(dr),t=r.memoizedState,t===null)return $n(r),null;if(i=(r.flags&128)!==0,l=t.rendering,l===null)if(i)bi(t,!1);else{if(ir!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(l=ml(n),l!==null){for(r.flags|=128,bi(t,!1),n=l.updateQueue,r.updateQueue=n,wl(r,n),r.subtreeFlags=0,n=e,e=r.child;e!==null;)oo(e,n),e=e.sibling;return G(dr,dr.current&1|2),kn&&De(r,t.treeForkCount),r.child}n=n.sibling}t.tail!==null&&sr()>Dl&&(r.flags|=128,i=!0,bi(t,!1),r.lanes=4194304)}else{if(!i)if(n=ml(l),n!==null){if(r.flags|=128,i=!0,n=n.updateQueue,r.updateQueue=n,wl(r,n),bi(t,!0),t.tail===null&&t.tailMode==="hidden"&&!l.alternate&&!kn)return $n(r),null}else 2*sr()-t.renderingStartTime>Dl&&e!==536870912&&(r.flags|=128,i=!0,bi(t,!1),r.lanes=4194304);t.isBackwards?(l.sibling=r.child,r.child=l):(n=t.last,n!==null?n.sibling=l:r.child=l,t.last=l)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=sr(),n.sibling=null,e=dr.current,G(dr,i?e&1|2:e&1),kn&&De(r,t.treeForkCount),n):($n(r),null);case 22:case 23:return ee(r),nc(),t=r.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(r.flags|=8192):t&&(r.flags|=8192),t?(e&536870912)!==0&&(r.flags&128)===0&&($n(r),r.subtreeFlags&6&&(r.flags|=8192)):$n(r),e=r.updateQueue,e!==null&&wl(r,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==e&&(r.flags|=2048),n!==null&&w(qt),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),r.memoizedState.cache!==e&&(r.flags|=2048),Ce(br),$n(r),null;case 25:return null;case 30:return null}throw Error(d(156,r.tag))}function rp(n,r){switch(Hs(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ce(br),In(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ve(r),null;case 31:if(r.memoizedState!==null){if(ee(r),r.alternate===null)throw Error(d(340));Bt()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(ee(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Bt()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return w(dr),null;case 4:return In(),null;case 10:return Ce(r.type),null;case 22:case 23:return ee(r),nc(),n!==null&&w(qt),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Ce(br),null;case 25:return null;default:return null}}function Ud(n,r){switch(Hs(r),r.tag){case 3:Ce(br),In();break;case 26:case 27:case 5:ve(r);break;case 4:In();break;case 31:r.memoizedState!==null&&ee(r);break;case 13:ee(r);break;case 19:w(dr);break;case 10:Ce(r.type);break;case 22:case 23:ee(r),nc(),n!==null&&w(qt);break;case 24:Ce(br)}}function yi(n,r){try{var e=r.updateQueue,t=e!==null?e.lastEffect:null;if(t!==null){var i=t.next;e=i;do{if((e.tag&n)===n){t=void 0;var l=e.create,s=e.inst;t=l(),s.destroy=t}e=e.next}while(e!==i)}}catch(u){Yn(r,r.return,u)}}function ut(n,r,e){try{var t=r.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var l=i.next;t=l;do{if((t.tag&n)===n){var s=t.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,i=r;var f=e,_=u;try{_()}catch(A){Yn(i,f,A)}}}t=t.next}while(t!==l)}}catch(A){Yn(r,r.return,A)}}function Hd(n){var r=n.updateQueue;if(r!==null){var e=n.stateNode;try{wo(r,e)}catch(t){Yn(n,n.return,t)}}}function qd(n,r,e){e.props=Kt(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(t){Yn(n,r,t)}}function xi(n,r){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof e=="function"?n.refCleanup=e(t):e.current=t}}catch(i){Yn(n,r,i)}}function Ne(n,r){var e=n.ref,t=n.refCleanup;if(e!==null)if(typeof t=="function")try{t()}catch(i){Yn(n,r,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){Yn(n,r,i)}else e.current=null}function Gd(n){var r=n.type,e=n.memoizedProps,t=n.stateNode;try{n:switch(r){case"button":case"input":case"select":case"textarea":e.autoFocus&&t.focus();break n;case"img":e.src?t.src=e.src:e.srcSet&&(t.srcset=e.srcSet)}}catch(i){Yn(n,n.return,i)}}function Rc(n,r,e){try{var t=n.stateNode;Sp(t,n.type,e,r),t[kr]=r}catch(i){Yn(n,n.return,i)}}function Yd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&mt(n.type)||n.tag===4}function zc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Yd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&mt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Dc(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,r):(r=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.appendChild(n),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=H));else if(t!==4&&(t===27&&mt(n.type)&&(e=n.stateNode,r=null),n=n.child,n!==null))for(Dc(n,r,e),n=n.sibling;n!==null;)Dc(n,r,e),n=n.sibling}function Ml(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(t!==4&&(t===27&&mt(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(Ml(n,r,e),n=n.sibling;n!==null;)Ml(n,r,e),n=n.sibling}function Vd(n){var r=n.stateNode,e=n.memoizedProps;try{for(var t=n.type,i=r.attributes;i.length;)r.removeAttributeNode(i[0]);wr(r,t,e),r[ur]=n,r[kr]=e}catch(l){Yn(n,n.return,l)}}var Ge=!1,vr=!1,Lc=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,Tr=null;function ep(n,r){if(n=n.containerInfo,eu=Wl,n=ro(n),Os(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break n}var s=0,u=-1,f=-1,_=0,A=0,R=n,S=null;r:for(;;){for(var j;R!==e||i!==0&&R.nodeType!==3||(u=s+i),R!==l||t!==0&&R.nodeType!==3||(f=s+t),R.nodeType===3&&(s+=R.nodeValue.length),(j=R.firstChild)!==null;)S=R,R=j;for(;;){if(R===n)break r;if(S===e&&++_===i&&(u=s),S===l&&++A===t&&(f=s),(j=R.nextSibling)!==null)break;R=S,S=R.parentNode}R=j}e=u===-1||f===-1?null:{start:u,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(tu={focusedElem:n,selectionRange:e},Wl=!1,Tr=r;Tr!==null;)if(r=Tr,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Tr=n;else for(;Tr!==null;){switch(r=Tr,l=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)i=n[e],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,e=r,i=l.memoizedProps,l=l.memoizedState,t=e.stateNode;try{var I=Kt(e.type,i);n=t.getSnapshotBeforeUpdate(I,l),t.__reactInternalSnapshotBeforeUpdate=n}catch(sn){Yn(e,e.return,sn)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,e=n.nodeType,e===9)lu(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":lu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(d(163))}if(n=r.sibling,n!==null){n.return=r.return,Tr=n;break}Tr=r.return}}function Kd(n,r,e){var t=e.flags;switch(e.tag){case 0:case 11:case 15:Ve(n,e),t&4&&yi(5,e);break;case 1:if(Ve(n,e),t&4)if(n=e.stateNode,r===null)try{n.componentDidMount()}catch(s){Yn(e,e.return,s)}else{var i=Kt(e.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(i,r,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Yn(e,e.return,s)}}t&64&&Hd(e),t&512&&xi(e,e.return);break;case 3:if(Ve(n,e),t&64&&(n=e.updateQueue,n!==null)){if(r=null,e.child!==null)switch(e.child.tag){case 27:case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}try{wo(n,r)}catch(s){Yn(e,e.return,s)}}break;case 27:r===null&&t&4&&Vd(e);case 26:case 5:Ve(n,e),r===null&&t&4&&Gd(e),t&512&&xi(e,e.return);break;case 12:Ve(n,e);break;case 31:Ve(n,e),t&4&&Zd(n,e);break;case 13:Ve(n,e),t&4&&Id(n,e),t&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=dp.bind(null,e),kp(n,e))));break;case 22:if(t=e.memoizedState!==null||Ge,!t){r=r!==null&&r.memoizedState!==null||vr,i=Ge;var l=vr;Ge=t,(vr=r)&&!l?Qe(n,e,(e.subtreeFlags&8772)!==0):Ve(n,e),Ge=i,vr=l}break;case 30:break;default:Ve(n,e)}}function Jd(n){var r=n.alternate;r!==null&&(n.alternate=null,Jd(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Va(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var rr=null,Qr=!1;function Ye(n,r,e){for(e=e.child;e!==null;)Xd(n,r,e),e=e.sibling}function Xd(n,r,e){if(Mr&&typeof Mr.onCommitFiberUnmount=="function")try{Mr.onCommitFiberUnmount(Et,e)}catch{}switch(e.tag){case 26:vr||Ne(e,r),Ye(n,r,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:vr||Ne(e,r);var t=rr,i=Qr;mt(e.type)&&(rr=e.stateNode,Qr=!1),Ye(n,r,e),Oi(e.stateNode),rr=t,Qr=i;break;case 5:vr||Ne(e,r);case 6:if(t=rr,i=Qr,rr=null,Ye(n,r,e),rr=t,Qr=i,rr!==null)if(Qr)try{(rr.nodeType===9?rr.body:rr.nodeName==="HTML"?rr.ownerDocument.body:rr).removeChild(e.stateNode)}catch(l){Yn(e,r,l)}else try{rr.removeChild(e.stateNode)}catch(l){Yn(e,r,l)}break;case 18:rr!==null&&(Qr?(n=rr,qf(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),za(n)):qf(rr,e.stateNode));break;case 4:t=rr,i=Qr,rr=e.stateNode.containerInfo,Qr=!0,Ye(n,r,e),rr=t,Qr=i;break;case 0:case 11:case 14:case 15:ut(2,e,r),vr||ut(4,e,r),Ye(n,r,e);break;case 1:vr||(Ne(e,r),t=e.stateNode,typeof t.componentWillUnmount=="function"&&qd(e,r,t)),Ye(n,r,e);break;case 21:Ye(n,r,e);break;case 22:vr=(t=vr)||e.memoizedState!==null,Ye(n,r,e),vr=t;break;default:Ye(n,r,e)}}function Zd(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{za(n)}catch(e){Yn(r,r.return,e)}}}function Id(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{za(n)}catch(e){Yn(r,r.return,e)}}function tp(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Qd),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Qd),r;default:throw Error(d(435,n.tag))}}function kl(n,r){var e=tp(n);r.forEach(function(t){if(!e.has(t)){e.add(t);var i=fp.bind(null,n,t);t.then(i,i)}})}function Kr(n,r){var e=r.deletions;if(e!==null)for(var t=0;t<e.length;t++){var i=e[t],l=n,s=r,u=s;n:for(;u!==null;){switch(u.tag){case 27:if(mt(u.type)){rr=u.stateNode,Qr=!1;break n}break;case 5:rr=u.stateNode,Qr=!1;break n;case 3:case 4:rr=u.stateNode.containerInfo,Qr=!0;break n}u=u.return}if(rr===null)throw Error(d(160));Xd(l,s,i),rr=null,Qr=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Fd(r,n),r=r.sibling}var be=null;function Fd(n,r){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Kr(r,n),Jr(n),t&4&&(ut(3,n,n.return),yi(3,n),ut(5,n,n.return));break;case 1:Kr(r,n),Jr(n),t&512&&(vr||e===null||Ne(e,e.return)),t&64&&Ge&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?t:e.concat(t))));break;case 26:var i=be;if(Kr(r,n),Jr(n),t&512&&(vr||e===null||Ne(e,e.return)),t&4){var l=e!==null?e.memoizedState:null;if(t=n.memoizedState,e===null)if(t===null)if(n.stateNode===null){n:{t=n.type,e=n.memoizedProps,i=i.ownerDocument||i;r:switch(t){case"title":l=i.getElementsByTagName("title")[0],(!l||l[wt]||l[ur]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(t),i.head.insertBefore(l,i.querySelector("head > title"))),wr(l,t,e),l[ur]=n,pr(l),t=l;break n;case"link":var s=Wf("link","href",i).get(t+(e.href||""));if(s){for(var u=0;u<s.length;u++)if(l=s[u],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(u,1);break r}}l=i.createElement(t),wr(l,t,e),i.head.appendChild(l);break;case"meta":if(s=Wf("meta","content",i).get(t+(e.content||""))){for(u=0;u<s.length;u++)if(l=s[u],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(u,1);break r}}l=i.createElement(t),wr(l,t,e),i.head.appendChild(l);break;default:throw Error(d(468,t))}l[ur]=n,pr(l),t=l}n.stateNode=t}else Pf(i,n.type,n.stateNode);else n.stateNode=Ff(i,t,n.memoizedProps);else l!==t?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,t===null?Pf(i,n.type,n.stateNode):Ff(i,t,n.memoizedProps)):t===null&&n.stateNode!==null&&Rc(n,n.memoizedProps,e.memoizedProps)}break;case 27:Kr(r,n),Jr(n),t&512&&(vr||e===null||Ne(e,e.return)),e!==null&&t&4&&Rc(n,n.memoizedProps,e.memoizedProps);break;case 5:if(Kr(r,n),Jr(n),t&512&&(vr||e===null||Ne(e,e.return)),n.flags&32){i=n.stateNode;try{cn(i,"")}catch(I){Yn(n,n.return,I)}}t&4&&n.stateNode!=null&&(i=n.memoizedProps,Rc(n,i,e!==null?e.memoizedProps:i)),t&1024&&(Lc=!0);break;case 6:if(Kr(r,n),Jr(n),t&4){if(n.stateNode===null)throw Error(d(162));t=n.memoizedProps,e=n.stateNode;try{e.nodeValue=t}catch(I){Yn(n,n.return,I)}}break;case 3:if(Xl=null,i=be,be=Kl(r.containerInfo),Kr(r,n),be=i,Jr(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{za(r.containerInfo)}catch(I){Yn(n,n.return,I)}Lc&&(Lc=!1,Wd(n));break;case 4:t=be,be=Kl(n.stateNode.containerInfo),Kr(r,n),Jr(n),be=t;break;case 12:Kr(r,n),Jr(n);break;case 31:Kr(r,n),Jr(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,kl(n,t)));break;case 13:Kr(r,n),Jr(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(zl=sr()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,kl(n,t)));break;case 22:i=n.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,_=Ge,A=vr;if(Ge=_||i,vr=A||f,Kr(r,n),vr=A,Ge=_,Jr(n),t&8192)n:for(r=n.stateNode,r._visibility=i?r._visibility&-2:r._visibility|1,i&&(e===null||f||Ge||vr||Jt(n)),e=null,r=n;;){if(r.tag===5||r.tag===26){if(e===null){f=e=r;try{if(l=f.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=f.stateNode;var R=f.memoizedProps.style,S=R!=null&&R.hasOwnProperty("display")?R.display:null;u.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(I){Yn(f,f.return,I)}}}else if(r.tag===6){if(e===null){f=r;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(I){Yn(f,f.return,I)}}}else if(r.tag===18){if(e===null){f=r;try{var j=f.stateNode;i?Gf(j,!0):Gf(f.stateNode,!1)}catch(I){Yn(f,f.return,I)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break n;for(;r.sibling===null;){if(r.return===null||r.return===n)break n;e===r&&(e=null),r=r.return}e===r&&(e=null),r.sibling.return=r.return,r=r.sibling}t&4&&(t=n.updateQueue,t!==null&&(e=t.retryQueue,e!==null&&(t.retryQueue=null,kl(n,e))));break;case 19:Kr(r,n),Jr(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,kl(n,t)));break;case 30:break;case 21:break;default:Kr(r,n),Jr(n)}}function Jr(n){var r=n.flags;if(r&2){try{for(var e,t=n.return;t!==null;){if(Yd(t)){e=t;break}t=t.return}if(e==null)throw Error(d(160));switch(e.tag){case 27:var i=e.stateNode,l=zc(n);Ml(n,l,i);break;case 5:var s=e.stateNode;e.flags&32&&(cn(s,""),e.flags&=-33);var u=zc(n);Ml(n,u,s);break;case 3:case 4:var f=e.stateNode.containerInfo,_=zc(n);Dc(n,_,f);break;default:throw Error(d(161))}}catch(A){Yn(n,n.return,A)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Wd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Wd(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Ve(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Kd(n,r.alternate,r),r=r.sibling}function Jt(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:ut(4,r,r.return),Jt(r);break;case 1:Ne(r,r.return);var e=r.stateNode;typeof e.componentWillUnmount=="function"&&qd(r,r.return,e),Jt(r);break;case 27:Oi(r.stateNode);case 26:case 5:Ne(r,r.return),Jt(r);break;case 22:r.memoizedState===null&&Jt(r);break;case 30:Jt(r);break;default:Jt(r)}n=n.sibling}}function Qe(n,r,e){for(e=e&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var t=r.alternate,i=n,l=r,s=l.flags;switch(l.tag){case 0:case 11:case 15:Qe(i,l,e),yi(4,l);break;case 1:if(Qe(i,l,e),t=l,i=t.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(_){Yn(t,t.return,_)}if(t=l,i=t.updateQueue,i!==null){var u=t.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)Oo(f[i],u)}catch(_){Yn(t,t.return,_)}}e&&s&64&&Hd(l),xi(l,l.return);break;case 27:Vd(l);case 26:case 5:Qe(i,l,e),e&&t===null&&s&4&&Gd(l),xi(l,l.return);break;case 12:Qe(i,l,e);break;case 31:Qe(i,l,e),e&&s&4&&Zd(i,l);break;case 13:Qe(i,l,e),e&&s&4&&Id(i,l);break;case 22:l.memoizedState===null&&Qe(i,l,e),xi(l,l.return);break;case 30:break;default:Qe(i,l,e)}r=r.sibling}}function Cc(n,r){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&ii(e))}function Bc(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ii(n))}function ye(n,r,e,t){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Pd(n,r,e,t),r=r.sibling}function Pd(n,r,e,t){var i=r.flags;switch(r.tag){case 0:case 11:case 15:ye(n,r,e,t),i&2048&&yi(9,r);break;case 1:ye(n,r,e,t);break;case 3:ye(n,r,e,t),i&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ii(n)));break;case 12:if(i&2048){ye(n,r,e,t),n=r.stateNode;try{var l=r.memoizedProps,s=l.id,u=l.onPostCommit;typeof u=="function"&&u(s,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(f){Yn(r,r.return,f)}}else ye(n,r,e,t);break;case 31:ye(n,r,e,t);break;case 13:ye(n,r,e,t);break;case 23:break;case 22:l=r.stateNode,s=r.alternate,r.memoizedState!==null?l._visibility&2?ye(n,r,e,t):vi(n,r):l._visibility&2?ye(n,r,e,t):(l._visibility|=2,Ta(n,r,e,t,(r.subtreeFlags&10256)!==0||!1)),i&2048&&Cc(s,r);break;case 24:ye(n,r,e,t),i&2048&&Bc(r.alternate,r);break;default:ye(n,r,e,t)}}function Ta(n,r,e,t,i){for(i=i&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var l=n,s=r,u=e,f=t,_=s.flags;switch(s.tag){case 0:case 11:case 15:Ta(l,s,u,f,i),yi(8,s);break;case 23:break;case 22:var A=s.stateNode;s.memoizedState!==null?A._visibility&2?Ta(l,s,u,f,i):vi(l,s):(A._visibility|=2,Ta(l,s,u,f,i)),i&&_&2048&&Cc(s.alternate,s);break;case 24:Ta(l,s,u,f,i),i&&_&2048&&Bc(s.alternate,s);break;default:Ta(l,s,u,f,i)}r=r.sibling}}function vi(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var e=n,t=r,i=t.flags;switch(t.tag){case 22:vi(e,t),i&2048&&Cc(t.alternate,t);break;case 24:vi(e,t),i&2048&&Bc(t.alternate,t);break;default:vi(e,t)}r=r.sibling}}var _i=8192;function Sa(n,r,e){if(n.subtreeFlags&_i)for(n=n.child;n!==null;)$d(n,r,e),n=n.sibling}function $d(n,r,e){switch(n.tag){case 26:Sa(n,r,e),n.flags&_i&&n.memoizedState!==null&&Vp(e,be,n.memoizedState,n.memoizedProps);break;case 5:Sa(n,r,e);break;case 3:case 4:var t=be;be=Kl(n.stateNode.containerInfo),Sa(n,r,e),be=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=_i,_i=16777216,Sa(n,r,e),_i=t):Sa(n,r,e));break;default:Sa(n,r,e)}}function nf(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ti(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Tr=t,ef(t,n)}nf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rf(n),n=n.sibling}function rf(n){switch(n.tag){case 0:case 11:case 15:Ti(n),n.flags&2048&&ut(9,n,n.return);break;case 3:Ti(n);break;case 12:Ti(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Rl(n)):Ti(n);break;default:Ti(n)}}function Rl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Tr=t,ef(t,n)}nf(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:ut(8,r,r.return),Rl(r);break;case 22:e=r.stateNode,e._visibility&2&&(e._visibility&=-3,Rl(r));break;default:Rl(r)}n=n.sibling}}function ef(n,r){for(;Tr!==null;){var e=Tr;switch(e.tag){case 0:case 11:case 15:ut(8,e,r);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var t=e.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:ii(e.memoizedState.cache)}if(t=e.child,t!==null)t.return=e,Tr=t;else n:for(e=n;Tr!==null;){t=Tr;var i=t.sibling,l=t.return;if(Jd(t),t===e){Tr=null;break n}if(i!==null){i.return=l,Tr=i;break n}Tr=l}}}var ap={getCacheForType:function(n){var r=Ar(br),e=r.data.get(n);return e===void 0&&(e=n(),r.data.set(n,e)),e},cacheSignal:function(){return Ar(br).controller.signal}},ip=typeof WeakMap=="function"?WeakMap:Map,Ln=0,Zn=null,Nn=null,wn=0,Gn=0,te=null,ot=!1,ja=!1,Uc=!1,Ke=0,ir=0,dt=0,Xt=0,Hc=0,ae=0,Na=0,Si=null,Xr=null,qc=!1,zl=0,tf=0,Dl=1/0,Ll=null,ft=null,_r=0,ht=null,Ea=null,Je=0,Gc=0,Yc=null,af=null,ji=0,Vc=null;function ie(){return(Ln&2)!==0&&wn!==0?wn&-wn:N.T!==null?Ic():Pt()}function lf(){if(ae===0)if((wn&536870912)===0||kn){var n=Wt;Wt<<=1,(Wt&3932160)===0&&(Wt=262144),ae=n}else ae=536870912;return n=re.current,n!==null&&(n.flags|=32),ae}function Zr(n,r,e){(n===Zn&&(Gn===2||Gn===9)||n.cancelPendingCommit!==null)&&(Aa(n,0),gt(n,wn,ae,!1)),Xn(n,e),((Ln&2)===0||n!==Zn)&&(n===Zn&&((Ln&2)===0&&(Xt|=e),ir===4&&gt(n,wn,ae,!1)),Ee(n))}function sf(n,r,e){if((Ln&6)!==0)throw Error(d(327));var t=!e&&(r&127)===0&&(r&n.expiredLanes)===0||M(n,r),i=t?cp(n,r):Kc(n,r,!0),l=t;do{if(i===0){ja&&!t&&gt(n,r,0,!1);break}else{if(e=n.current.alternate,l&&!lp(e)){i=Kc(n,r,!1),l=!1;continue}if(i===2){if(l=r,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){r=s;n:{var u=n;i=Si;var f=u.current.memoizedState.isDehydrated;if(f&&(Aa(u,s).flags|=256),s=Kc(u,s,!1),s!==2){if(Uc&&!f){u.errorRecoveryDisabledLanes|=l,Xt|=l,i=4;break n}l=Xr,Xr=i,l!==null&&(Xr===null?Xr=l:Xr.push.apply(Xr,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Aa(n,0),gt(n,r,0,!0);break}n:{switch(t=n,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((r&4194048)!==r)break;case 6:gt(t,r,ae,!ot);break n;case 2:Xr=null;break;case 3:case 5:break;default:throw Error(d(329))}if((r&62914560)===r&&(i=zl+300-sr(),10<i)){if(gt(t,r,ae,!ot),h(t,0,!0)!==0)break n;Je=r,t.timeoutHandle=Uf(cf.bind(null,t,e,Xr,Ll,qc,r,ae,Xt,Na,ot,l,"Throttled",-0,0),i);break n}cf(t,e,Xr,Ll,qc,r,ae,Xt,Na,ot,l,null,-0,0)}}break}while(!0);Ee(n)}function cf(n,r,e,t,i,l,s,u,f,_,A,R,S,j){if(n.timeoutHandle=-1,R=r.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:H},$d(r,l,R);var I=(l&62914560)===l?zl-sr():(l&4194048)===l?tf-sr():0;if(I=Qp(R,I),I!==null){Je=l,n.cancelPendingCommit=I(mf.bind(null,n,r,l,e,t,i,s,u,f,A,R,null,S,j)),gt(n,l,s,!_);return}}mf(n,r,l,e,t,i,s,u,f)}function lp(n){for(var r=n;;){var e=r.tag;if((e===0||e===11||e===15)&&r.flags&16384&&(e=r.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var t=0;t<e.length;t++){var i=e[t],l=i.getSnapshot;i=i.value;try{if(!$r(l(),i))return!1}catch{return!1}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function gt(n,r,e,t){r&=~Hc,r&=~Xt,n.suspendedLanes|=r,n.pingedLanes&=~r,t&&(n.warmLanes|=r),t=n.expirationTimes;for(var i=r;0<i;){var l=31-Lr(i),s=1<<l;t[l]=-1,i&=~s}e!==0&&X(n,e,r)}function Cl(){return(Ln&6)===0?(Ni(0),!1):!0}function Qc(){if(Nn!==null){if(Gn===0)var n=Nn.return;else n=Nn,Le=Ut=null,lc(n),ba=null,si=0,n=Nn;for(;n!==null;)Ud(n.alternate,n),n=n.return;Nn=null}}function Aa(n,r){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Ep(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),Je=0,Qc(),Zn=n,Nn=e=ze(n.current,null),wn=r,Gn=0,te=null,ot=!1,ja=M(n,r),Uc=!1,Na=ae=Hc=Xt=dt=ir=0,Xr=Si=null,qc=!1,(r&8)!==0&&(r|=r&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=r;0<t;){var i=31-Lr(t),l=1<<i;r|=n[i],t&=~l}return Ke=r,tl(),e}function uf(n,r){bn=null,N.H=pi,r===ma||r===dl?(r=jo(),Gn=3):r===Zs?(r=jo(),Gn=4):Gn=r===Tc?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,te=r,Nn===null&&(ir=1,Nl(n,ce(r,n.current)))}function of(){var n=re.current;return n===null?!0:(wn&4194048)===wn?fe===null:(wn&62914560)===wn||(wn&536870912)!==0?n===fe:!1}function df(){var n=N.H;return N.H=pi,n===null?pi:n}function ff(){var n=N.A;return N.A=ap,n}function Bl(){ir=4,ot||(wn&4194048)!==wn&&re.current!==null||(ja=!0),(dt&134217727)===0&&(Xt&134217727)===0||Zn===null||gt(Zn,wn,ae,!1)}function Kc(n,r,e){var t=Ln;Ln|=2;var i=df(),l=ff();(Zn!==n||wn!==r)&&(Ll=null,Aa(n,r)),r=!1;var s=ir;n:do try{if(Gn!==0&&Nn!==null){var u=Nn,f=te;switch(Gn){case 8:Qc(),s=6;break n;case 3:case 2:case 9:case 6:re.current===null&&(r=!0);var _=Gn;if(Gn=0,te=null,Oa(n,u,f,_),e&&ja){s=0;break n}break;default:_=Gn,Gn=0,te=null,Oa(n,u,f,_)}}sp(),s=ir;break}catch(A){uf(n,A)}while(!0);return r&&n.shellSuspendCounter++,Le=Ut=null,Ln=t,N.H=i,N.A=l,Nn===null&&(Zn=null,wn=0,tl()),s}function sp(){for(;Nn!==null;)hf(Nn)}function cp(n,r){var e=Ln;Ln|=2;var t=df(),i=ff();Zn!==n||wn!==r?(Ll=null,Dl=sr()+500,Aa(n,r)):ja=M(n,r);n:do try{if(Gn!==0&&Nn!==null){r=Nn;var l=te;r:switch(Gn){case 1:Gn=0,te=null,Oa(n,r,l,1);break;case 2:case 9:if(To(l)){Gn=0,te=null,gf(r);break}r=function(){Gn!==2&&Gn!==9||Zn!==n||(Gn=7),Ee(n)},l.then(r,r);break n;case 3:Gn=7;break n;case 4:Gn=5;break n;case 7:To(l)?(Gn=0,te=null,gf(r)):(Gn=0,te=null,Oa(n,r,l,7));break;case 5:var s=null;switch(Nn.tag){case 26:s=Nn.memoizedState;case 5:case 27:var u=Nn;if(s?$f(s):u.stateNode.complete){Gn=0,te=null;var f=u.sibling;if(f!==null)Nn=f;else{var _=u.return;_!==null?(Nn=_,Ul(_)):Nn=null}break r}}Gn=0,te=null,Oa(n,r,l,5);break;case 6:Gn=0,te=null,Oa(n,r,l,6);break;case 8:Qc(),ir=6;break n;default:throw Error(d(462))}}up();break}catch(A){uf(n,A)}while(!0);return Le=Ut=null,N.H=t,N.A=i,Ln=e,Nn!==null?0:(Zn=null,wn=0,tl(),ir)}function up(){for(;Nn!==null&&!hs();)hf(Nn)}function hf(n){var r=Cd(n.alternate,n,Ke);n.memoizedProps=n.pendingProps,r===null?Ul(n):Nn=r}function gf(n){var r=n,e=r.alternate;switch(r.tag){case 15:case 0:r=Md(e,r,r.pendingProps,r.type,void 0,wn);break;case 11:r=Md(e,r,r.pendingProps,r.type.render,r.ref,wn);break;case 5:lc(r);default:Ud(e,r),r=Nn=oo(r,Ke),r=Cd(e,r,Ke)}n.memoizedProps=n.pendingProps,r===null?Ul(n):Nn=r}function Oa(n,r,e,t){Le=Ut=null,lc(r),ba=null,si=0;var i=r.return;try{if(Wg(n,i,r,e,wn)){ir=1,Nl(n,ce(e,n.current)),Nn=null;return}}catch(l){if(i!==null)throw Nn=i,l;ir=1,Nl(n,ce(e,n.current)),Nn=null;return}r.flags&32768?(kn||t===1?n=!0:ja||(wn&536870912)!==0?n=!1:(ot=n=!0,(t===2||t===9||t===3||t===6)&&(t=re.current,t!==null&&t.tag===13&&(t.flags|=16384))),pf(r,n)):Ul(r)}function Ul(n){var r=n;do{if((r.flags&32768)!==0){pf(r,ot);return}n=r.return;var e=np(r.alternate,r,Ke);if(e!==null){Nn=e;return}if(r=r.sibling,r!==null){Nn=r;return}Nn=r=n}while(r!==null);ir===0&&(ir=5)}function pf(n,r){do{var e=rp(n.alternate,n);if(e!==null){e.flags&=32767,Nn=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!r&&(n=n.sibling,n!==null)){Nn=n;return}Nn=n=e}while(n!==null);ir=6,Nn=null}function mf(n,r,e,t,i,l,s,u,f){n.cancelPendingCommit=null;do Hl();while(_r!==0);if((Ln&6)!==0)throw Error(d(327));if(r!==null){if(r===n.current)throw Error(d(177));if(l=r.lanes|r.childLanes,l|=zs,W(n,e,l,s,u,f),n===Zn&&(Nn=Zn=null,wn=0),Ea=r,ht=n,Je=e,Gc=l,Yc=i,af=t,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,hp(Nt,function(){return _f(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||t){t=N.T,N.T=null,i=q.p,q.p=2,s=Ln,Ln|=4;try{ep(n,r,e)}finally{Ln=s,q.p=i,N.T=t}}_r=1,bf(),yf(),xf()}}function bf(){if(_r===1){_r=0;var n=ht,r=Ea,e=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||e){e=N.T,N.T=null;var t=q.p;q.p=2;var i=Ln;Ln|=4;try{Fd(r,n);var l=tu,s=ro(n.containerInfo),u=l.focusedElem,f=l.selectionRange;if(s!==u&&u&&u.ownerDocument&&no(u.ownerDocument.documentElement,u)){if(f!==null&&Os(u)){var _=f.start,A=f.end;if(A===void 0&&(A=_),"selectionStart"in u)u.selectionStart=_,u.selectionEnd=Math.min(A,u.value.length);else{var R=u.ownerDocument||document,S=R&&R.defaultView||window;if(S.getSelection){var j=S.getSelection(),I=u.textContent.length,sn=Math.min(f.start,I),Kn=f.end===void 0?sn:Math.min(f.end,I);!j.extend&&sn>Kn&&(s=Kn,Kn=sn,sn=s);var b=$u(u,sn),m=$u(u,Kn);if(b&&m&&(j.rangeCount!==1||j.anchorNode!==b.node||j.anchorOffset!==b.offset||j.focusNode!==m.node||j.focusOffset!==m.offset)){var v=R.createRange();v.setStart(b.node,b.offset),j.removeAllRanges(),sn>Kn?(j.addRange(v),j.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),j.addRange(v))}}}}for(R=[],j=u;j=j.parentNode;)j.nodeType===1&&R.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<R.length;u++){var k=R[u];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Wl=!!eu,tu=eu=null}finally{Ln=i,q.p=t,N.T=e}}n.current=r,_r=2}}function yf(){if(_r===2){_r=0;var n=ht,r=Ea,e=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||e){e=N.T,N.T=null;var t=q.p;q.p=2;var i=Ln;Ln|=4;try{Kd(n,r.alternate,r)}finally{Ln=i,q.p=t,N.T=e}}_r=3}}function xf(){if(_r===4||_r===3){_r=0,Hi();var n=ht,r=Ea,e=Je,t=af;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?_r=5:(_r=0,Ea=ht=null,vf(n,n.pendingLanes));var i=n.pendingLanes;if(i===0&&(ft=null),Oe(e),r=r.stateNode,Mr&&typeof Mr.onCommitFiberRoot=="function")try{Mr.onCommitFiberRoot(Et,r,void 0,(r.current.flags&128)===128)}catch{}if(t!==null){r=N.T,i=q.p,q.p=2,N.T=null;try{for(var l=n.onRecoverableError,s=0;s<t.length;s++){var u=t[s];l(u.value,{componentStack:u.stack})}}finally{N.T=r,q.p=i}}(Je&3)!==0&&Hl(),Ee(n),i=n.pendingLanes,(e&261930)!==0&&(i&42)!==0?n===Vc?ji++:(ji=0,Vc=n):ji=0,Ni(0)}}function vf(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,ii(r)))}function Hl(){return bf(),yf(),xf(),_f()}function _f(){if(_r!==5)return!1;var n=ht,r=Gc;Gc=0;var e=Oe(Je),t=N.T,i=q.p;try{q.p=32>e?32:e,N.T=null,e=Yc,Yc=null;var l=ht,s=Je;if(_r=0,Ea=ht=null,Je=0,(Ln&6)!==0)throw Error(d(331));var u=Ln;if(Ln|=4,rf(l.current),Pd(l,l.current,s,e),Ln=u,Ni(0,!1),Mr&&typeof Mr.onPostCommitFiberRoot=="function")try{Mr.onPostCommitFiberRoot(Et,l)}catch{}return!0}finally{q.p=i,N.T=t,vf(n,r)}}function Tf(n,r,e){r=ce(e,r),r=_c(n.stateNode,r,2),n=lt(n,r,2),n!==null&&(Xn(n,2),Ee(n))}function Yn(n,r,e){if(n.tag===3)Tf(n,n,e);else for(;r!==null;){if(r.tag===3){Tf(r,n,e);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ft===null||!ft.has(t))){n=ce(e,n),e=Td(2),t=lt(r,e,2),t!==null&&(Sd(e,t,r,n),Xn(t,2),Ee(t));break}}r=r.return}}function Jc(n,r,e){var t=n.pingCache;if(t===null){t=n.pingCache=new ip;var i=new Set;t.set(r,i)}else i=t.get(r),i===void 0&&(i=new Set,t.set(r,i));i.has(e)||(Uc=!0,i.add(e),n=op.bind(null,n,r,e),r.then(n,n))}function op(n,r,e){var t=n.pingCache;t!==null&&t.delete(r),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,Zn===n&&(wn&e)===e&&(ir===4||ir===3&&(wn&62914560)===wn&&300>sr()-zl?(Ln&2)===0&&Aa(n,0):Hc|=e,Na===wn&&(Na=0)),Ee(n)}function Sf(n,r){r===0&&(r=dn()),n=Lt(n,r),n!==null&&(Xn(n,r),Ee(n))}function dp(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),Sf(n,e)}function fp(n,r){var e=0;switch(n.tag){case 31:case 13:var t=n.stateNode,i=n.memoizedState;i!==null&&(e=i.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(d(314))}t!==null&&t.delete(r),Sf(n,e)}function hp(n,r){return Ft(n,r)}var ql=null,wa=null,Xc=!1,Gl=!1,Zc=!1,pt=0;function Ee(n){n!==wa&&n.next===null&&(wa===null?ql=wa=n:wa=wa.next=n),Gl=!0,Xc||(Xc=!0,pp())}function Ni(n,r){if(!Zc&&Gl){Zc=!0;do for(var e=!1,t=ql;t!==null;){if(n!==0){var i=t.pendingLanes;if(i===0)var l=0;else{var s=t.suspendedLanes,u=t.pingedLanes;l=(1<<31-Lr(42|n)+1)-1,l&=i&~(s&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,Af(t,l))}else l=wn,l=h(t,t===Zn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||M(t,l)||(e=!0,Af(t,l));t=t.next}while(e);Zc=!1}}function gp(){jf()}function jf(){Gl=Xc=!1;var n=0;pt!==0&&Np()&&(n=pt);for(var r=sr(),e=null,t=ql;t!==null;){var i=t.next,l=Nf(t,r);l===0?(t.next=null,e===null?ql=i:e.next=i,i===null&&(wa=e)):(e=t,(n!==0||(l&3)!==0)&&(Gl=!0)),t=i}_r!==0&&_r!==5||Ni(n),pt!==0&&(pt=0)}function Nf(n,r){for(var e=n.suspendedLanes,t=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-Lr(l),u=1<<s,f=i[s];f===-1?((u&e)===0||(u&t)!==0)&&(i[s]=Y(u,r)):f<=r&&(n.expiredLanes|=u),l&=~u}if(r=Zn,e=wn,e=h(n,n===r?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,e===0||n===r&&(Gn===2||Gn===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&qa(t),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||M(n,e)){if(r=e&-e,r===n.callbackPriority)return r;switch(t!==null&&qa(t),Oe(e)){case 2:case 8:e=jt;break;case 32:e=Nt;break;case 268435456:e=Gi;break;default:e=Nt}return t=Ef.bind(null,n),e=Ft(e,t),n.callbackPriority=r,n.callbackNode=e,r}return t!==null&&t!==null&&qa(t),n.callbackPriority=2,n.callbackNode=null,2}function Ef(n,r){if(_r!==0&&_r!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(Hl()&&n.callbackNode!==e)return null;var t=wn;return t=h(n,n===Zn?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(sf(n,t,r),Nf(n,sr()),n.callbackNode!=null&&n.callbackNode===e?Ef.bind(null,n):null)}function Af(n,r){if(Hl())return null;sf(n,r,!0)}function pp(){Ap(function(){(Ln&6)!==0?Ft(Ae,gp):jf()})}function Ic(){if(pt===0){var n=ga;n===0&&(n=At,At<<=1,(At&261888)===0&&(At=256)),pt=n}return pt}function Of(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Pe(""+n)}function wf(n,r){var e=r.ownerDocument.createElement("input");return e.name=r.name,e.value=r.value,n.id&&e.setAttribute("form",n.id),r.parentNode.insertBefore(e,r),n=new FormData(n),e.parentNode.removeChild(e),n}function mp(n,r,e,t,i){if(r==="submit"&&e&&e.stateNode===i){var l=Of((i[kr]||null).action),s=t.submitter;s&&(r=(r=s[kr]||null)?Of(r.formAction):s.getAttribute("formAction"),r!==null&&(l=r,s=null));var u=new $i("action","action",null,t,i);n.push({event:u,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(pt!==0){var f=s?wf(i,s):new FormData(i);pc(e,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(u.preventDefault(),f=s?wf(i,s):new FormData(i),pc(e,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var Fc=0;Fc<Rs.length;Fc++){var Wc=Rs[Fc],bp=Wc.toLowerCase(),yp=Wc[0].toUpperCase()+Wc.slice(1);me(bp,"on"+yp)}me(ao,"onAnimationEnd"),me(io,"onAnimationIteration"),me(lo,"onAnimationStart"),me("dblclick","onDoubleClick"),me("focusin","onFocus"),me("focusout","onBlur"),me(Dg,"onTransitionRun"),me(Lg,"onTransitionStart"),me(Cg,"onTransitionCancel"),me(so,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Me("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Me("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Me("onBeforeInput",["compositionend","keypress","textInput","paste"]),Me("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Me("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Me("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ei));function Mf(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],i=t.event;t=t.listeners;n:{var l=void 0;if(r)for(var s=t.length-1;0<=s;s--){var u=t[s],f=u.instance,_=u.currentTarget;if(u=u.listener,f!==l&&i.isPropagationStopped())break n;l=u,i.currentTarget=_;try{l(i)}catch(A){el(A)}i.currentTarget=null,l=f}else for(s=0;s<t.length;s++){if(u=t[s],f=u.instance,_=u.currentTarget,u=u.listener,f!==l&&i.isPropagationStopped())break n;l=u,i.currentTarget=_;try{l(i)}catch(A){el(A)}i.currentTarget=null,l=f}}}}function En(n,r){var e=r[Ya];e===void 0&&(e=r[Ya]=new Set);var t=n+"__bubble";e.has(t)||(kf(r,n,2,!1),e.add(t))}function Pc(n,r,e){var t=0;r&&(t|=4),kf(e,n,t,r)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function $c(n){if(!n[Yl]){n[Yl]=!0,Ki.forEach(function(e){e!=="selectionchange"&&(xp.has(e)||Pc(e,!1,n),Pc(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Yl]||(r[Yl]=!0,Pc("selectionchange",!1,r))}}function kf(n,r,e,t){switch(lh(r)){case 2:var i=Xp;break;case 8:i=Zp;break;default:i=gu}e=i.bind(null,r,e,n),i=void 0,!xs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),t?i!==void 0?n.addEventListener(r,e,{capture:!0,passive:i}):n.addEventListener(r,e,!0):i!==void 0?n.addEventListener(r,e,{passive:i}):n.addEventListener(r,e,!1)}function nu(n,r,e,t,i){var l=t;if((r&1)===0&&(r&2)===0&&t!==null)n:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var u=t.stateNode.containerInfo;if(u===i)break;if(s===4)for(s=t.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;u!==null;){if(s=Cr(u),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){t=l=s;continue n}u=u.parentNode}}t=t.return}Ii(function(){var _=l,A=pn(e),R=[];n:{var S=co.get(n);if(S!==void 0){var j=$i,I=n;switch(n){case"keypress":if(Wi(e)===0)break n;case"keydown":case"keyup":j=fg;break;case"focusin":I="focus",j=Ss;break;case"focusout":I="blur",j=Ss;break;case"beforeblur":case"afterblur":j=Ss;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=pg;break;case ao:case io:case lo:j=tg;break;case so:j=bg;break;case"scroll":case"scrollend":j=Ph;break;case"wheel":j=xg;break;case"copy":case"cut":case"paste":j=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Hu;break;case"toggle":case"beforetoggle":j=_g}var sn=(r&4)!==0,Kn=!sn&&(n==="scroll"||n==="scrollend"),b=sn?S!==null?S+"Capture":null:S;sn=[];for(var m=_,v;m!==null;){var k=m;if(v=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||v===null||b===null||(k=Za(m,b),k!=null&&sn.push(Ai(m,k,v))),Kn)break;m=m.return}0<sn.length&&(S=new j(S,I,null,e,A),R.push({event:S,listeners:sn}))}}if((r&7)===0){n:{if(S=n==="mouseover"||n==="pointerover",j=n==="mouseout"||n==="pointerout",S&&e!==P&&(I=e.relatedTarget||e.fromElement)&&(Cr(I)||I[Ze]))break n;if((j||S)&&(S=A.window===A?A:(S=A.ownerDocument)?S.defaultView||S.parentWindow:window,j?(I=e.relatedTarget||e.toElement,j=_,I=I?Cr(I):null,I!==null&&(Kn=L(I),sn=I.tag,I!==Kn||sn!==5&&sn!==27&&sn!==6)&&(I=null)):(j=null,I=_),j!==I)){if(sn=Bu,k="onMouseLeave",b="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(sn=Hu,k="onPointerLeave",b="onPointerEnter",m="pointer"),Kn=j==null?S:Ie(j),v=I==null?S:Ie(I),S=new sn(k,m+"leave",j,e,A),S.target=Kn,S.relatedTarget=v,k=null,Cr(A)===_&&(sn=new sn(b,m+"enter",I,e,A),sn.target=v,sn.relatedTarget=Kn,k=sn),Kn=k,j&&I)r:{for(sn=vp,b=j,m=I,v=0,k=b;k;k=sn(k))v++;k=0;for(var en=m;en;en=sn(en))k++;for(;0<v-k;)b=sn(b),v--;for(;0<k-v;)m=sn(m),k--;for(;v--;){if(b===m||m!==null&&b===m.alternate){sn=b;break r}b=sn(b),m=sn(m)}sn=null}else sn=null;j!==null&&Rf(R,S,j,sn,!1),I!==null&&Kn!==null&&Rf(R,Kn,I,sn,!0)}}n:{if(S=_?Ie(_):window,j=S.nodeName&&S.nodeName.toLowerCase(),j==="select"||j==="input"&&S.type==="file")var zn=Xu;else if(Ku(S))if(Zu)zn=kg;else{zn=wg;var $=Og}else j=S.nodeName,!j||j.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?_&&We(_.elementType)&&(zn=Xu):zn=Mg;if(zn&&(zn=zn(n,_))){Ju(R,zn,e,A);break n}$&&$(n,S,_),n==="focusout"&&_&&S.type==="number"&&_.memoizedProps.value!=null&&ta(S,"number",S.value)}switch($=_?Ie(_):window,n){case"focusin":(Ku($)||$.contentEditable==="true")&&(la=$,ws=_,ei=null);break;case"focusout":ei=ws=la=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,eo(R,e,A);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":eo(R,e,A)}var xn;if(Ns)n:{switch(n){case"compositionstart":var Mn="onCompositionStart";break n;case"compositionend":Mn="onCompositionEnd";break n;case"compositionupdate":Mn="onCompositionUpdate";break n}Mn=void 0}else ia?Vu(n,e)&&(Mn="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(Mn="onCompositionStart");Mn&&(qu&&e.locale!=="ko"&&(ia||Mn!=="onCompositionStart"?Mn==="onCompositionEnd"&&ia&&(xn=Lu()):($e=A,vs="value"in $e?$e.value:$e.textContent,ia=!0)),$=Vl(_,Mn),0<$.length&&(Mn=new Uu(Mn,n,null,e,A),R.push({event:Mn,listeners:$}),xn?Mn.data=xn:(xn=Qu(e),xn!==null&&(Mn.data=xn)))),(xn=Sg?jg(n,e):Ng(n,e))&&(Mn=Vl(_,"onBeforeInput"),0<Mn.length&&($=new Uu("onBeforeInput","beforeinput",null,e,A),R.push({event:$,listeners:Mn}),$.data=xn)),mp(R,n,_,e,A)}Mf(R,r)})}function Ai(n,r,e){return{instance:n,listener:r,currentTarget:e}}function Vl(n,r){for(var e=r+"Capture",t=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Za(n,e),i!=null&&t.unshift(Ai(n,i,l)),i=Za(n,r),i!=null&&t.push(Ai(n,i,l))),n.tag===3)return t;n=n.return}return[]}function vp(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Rf(n,r,e,t,i){for(var l=r._reactName,s=[];e!==null&&e!==t;){var u=e,f=u.alternate,_=u.stateNode;if(u=u.tag,f!==null&&f===t)break;u!==5&&u!==26&&u!==27||_===null||(f=_,i?(_=Za(e,l),_!=null&&s.unshift(Ai(e,_,f))):i||(_=Za(e,l),_!=null&&s.push(Ai(e,_,f)))),e=e.return}s.length!==0&&n.push({event:r,listeners:s})}var _p=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function zf(n){return(typeof n=="string"?n:""+n).replace(_p,`
`).replace(Tp,"")}function Df(n,r){return r=zf(r),zf(n)===r}function Qn(n,r,e,t,i,l){switch(e){case"children":typeof t=="string"?r==="body"||r==="textarea"&&t===""||cn(n,t):(typeof t=="number"||typeof t=="bigint")&&r!=="body"&&cn(n,""+t);break;case"className":Wr(n,"class",t);break;case"tabIndex":Wr(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(n,e,t);break;case"style":qn(n,t,l);break;case"data":if(r!=="object"){Wr(n,"data",t);break}case"src":case"href":if(t===""&&(r!=="a"||e!=="href")){n.removeAttribute(e);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=Pe(""+t),n.setAttribute(e,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(r!=="input"&&Qn(n,r,"name",i.name,i,null),Qn(n,r,"formEncType",i.formEncType,i,null),Qn(n,r,"formMethod",i.formMethod,i,null),Qn(n,r,"formTarget",i.formTarget,i,null)):(Qn(n,r,"encType",i.encType,i,null),Qn(n,r,"method",i.method,i,null),Qn(n,r,"target",i.target,i,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=Pe(""+t),n.setAttribute(e,t);break;case"onClick":t!=null&&(n.onclick=H);break;case"onScroll":t!=null&&En("scroll",n);break;case"onScrollEnd":t!=null&&En("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(e=t.__html,e!=null){if(i.children!=null)throw Error(d(60));n.innerHTML=e}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}e=Pe(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""+t):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":t===!0?n.setAttribute(e,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,t):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(e,t):n.removeAttribute(e);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(e):n.setAttribute(e,t);break;case"popover":En("beforetoggle",n),En("toggle",n),Rr(n,"popover",t);break;case"xlinkActuate":Gr(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Gr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Gr(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Gr(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Gr(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Gr(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Gr(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Gr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Gr(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Rr(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=ke.get(e)||e,Rr(n,e,t))}}function ru(n,r,e,t,i,l){switch(e){case"style":qn(n,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(e=t.__html,e!=null){if(i.children!=null)throw Error(d(60));n.innerHTML=e}}break;case"children":typeof t=="string"?cn(n,t):(typeof t=="number"||typeof t=="bigint")&&cn(n,""+t);break;case"onScroll":t!=null&&En("scroll",n);break;case"onScrollEnd":t!=null&&En("scrollend",n);break;case"onClick":t!=null&&(n.onclick=H);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),r=e.slice(2,i?e.length-7:void 0),l=n[kr]||null,l=l!=null?l[e]:null,typeof l=="function"&&n.removeEventListener(r,l,i),typeof t=="function")){typeof l!="function"&&l!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(r,t,i);break n}e in n?n[e]=t:t===!0?n.setAttribute(e,""):Rr(n,e,t)}}}function wr(n,r,e){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":En("error",n),En("load",n);var t=!1,i=!1,l;for(l in e)if(e.hasOwnProperty(l)){var s=e[l];if(s!=null)switch(l){case"src":t=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,r));default:Qn(n,r,l,s,e,null)}}i&&Qn(n,r,"srcSet",e.srcSet,e,null),t&&Qn(n,r,"src",e.src,e,null);return;case"input":En("invalid",n);var u=l=s=i=null,f=null,_=null;for(t in e)if(e.hasOwnProperty(t)){var A=e[t];if(A!=null)switch(t){case"name":i=A;break;case"type":s=A;break;case"checked":f=A;break;case"defaultChecked":_=A;break;case"value":l=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,r));break;default:Qn(n,r,t,A,e,null)}}kt(n,l,u,f,_,s,i,!1);return;case"select":En("invalid",n),t=s=l=null;for(i in e)if(e.hasOwnProperty(i)&&(u=e[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":s=u;break;case"multiple":t=u;default:Qn(n,r,i,u,e,null)}r=l,e=s,n.multiple=!!t,r!=null?Nr(n,!!t,r,!1):e!=null&&Nr(n,!!t,e,!0);return;case"textarea":En("invalid",n),l=i=t=null;for(s in e)if(e.hasOwnProperty(s)&&(u=e[s],u!=null))switch(s){case"value":t=u;break;case"defaultValue":i=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:Qn(n,r,s,u,e,null)}aa(n,t,i,l);return;case"option":for(f in e)e.hasOwnProperty(f)&&(t=e[f],t!=null)&&(f==="selected"?n.selected=t&&typeof t!="function"&&typeof t!="symbol":Qn(n,r,f,t,e,null));return;case"dialog":En("beforetoggle",n),En("toggle",n),En("cancel",n),En("close",n);break;case"iframe":case"object":En("load",n);break;case"video":case"audio":for(t=0;t<Ei.length;t++)En(Ei[t],n);break;case"image":En("error",n),En("load",n);break;case"details":En("toggle",n);break;case"embed":case"source":case"link":En("error",n),En("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in e)if(e.hasOwnProperty(_)&&(t=e[_],t!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,r));default:Qn(n,r,_,t,e,null)}return;default:if(We(r)){for(A in e)e.hasOwnProperty(A)&&(t=e[A],t!==void 0&&ru(n,r,A,t,e,void 0));return}}for(u in e)e.hasOwnProperty(u)&&(t=e[u],t!=null&&Qn(n,r,u,t,e,null))}function Sp(n,r,e,t){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,u=null,f=null,_=null,A=null;for(j in e){var R=e[j];if(e.hasOwnProperty(j)&&R!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":f=R;default:t.hasOwnProperty(j)||Qn(n,r,j,null,t,R)}}for(var S in t){var j=t[S];if(R=e[S],t.hasOwnProperty(S)&&(j!=null||R!=null))switch(S){case"type":l=j;break;case"name":i=j;break;case"checked":_=j;break;case"defaultChecked":A=j;break;case"value":s=j;break;case"defaultValue":u=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(d(137,r));break;default:j!==R&&Qn(n,r,S,j,t,R)}}Ka(n,s,u,f,_,A,l,i);return;case"select":j=s=u=S=null;for(l in e)if(f=e[l],e.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":j=f;default:t.hasOwnProperty(l)||Qn(n,r,l,null,t,f)}for(i in t)if(l=t[i],f=e[i],t.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":S=l;break;case"defaultValue":u=l;break;case"multiple":s=l;default:l!==f&&Qn(n,r,i,l,t,f)}r=u,e=s,t=j,S!=null?Nr(n,!!e,S,!1):!!t!=!!e&&(r!=null?Nr(n,!!e,r,!0):Nr(n,!!e,e?[]:"",!1));return;case"textarea":j=S=null;for(u in e)if(i=e[u],e.hasOwnProperty(u)&&i!=null&&!t.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Qn(n,r,u,null,t,i)}for(s in t)if(i=t[s],l=e[s],t.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":S=i;break;case"defaultValue":j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&Qn(n,r,s,i,t,l)}Xi(n,S,j);return;case"option":for(var I in e)S=e[I],e.hasOwnProperty(I)&&S!=null&&!t.hasOwnProperty(I)&&(I==="selected"?n.selected=!1:Qn(n,r,I,null,t,S));for(f in t)S=t[f],j=e[f],t.hasOwnProperty(f)&&S!==j&&(S!=null||j!=null)&&(f==="selected"?n.selected=S&&typeof S!="function"&&typeof S!="symbol":Qn(n,r,f,S,t,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var sn in e)S=e[sn],e.hasOwnProperty(sn)&&S!=null&&!t.hasOwnProperty(sn)&&Qn(n,r,sn,null,t,S);for(_ in t)if(S=t[_],j=e[_],t.hasOwnProperty(_)&&S!==j&&(S!=null||j!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(d(137,r));break;default:Qn(n,r,_,S,t,j)}return;default:if(We(r)){for(var Kn in e)S=e[Kn],e.hasOwnProperty(Kn)&&S!==void 0&&!t.hasOwnProperty(Kn)&&ru(n,r,Kn,void 0,t,S);for(A in t)S=t[A],j=e[A],!t.hasOwnProperty(A)||S===j||S===void 0&&j===void 0||ru(n,r,A,S,t,j);return}}for(var b in e)S=e[b],e.hasOwnProperty(b)&&S!=null&&!t.hasOwnProperty(b)&&Qn(n,r,b,null,t,S);for(R in t)S=t[R],j=e[R],!t.hasOwnProperty(R)||S===j||S==null&&j==null||Qn(n,r,R,S,t,j)}function Lf(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jp(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,e=performance.getEntriesByType("resource"),t=0;t<e.length;t++){var i=e[t],l=i.transferSize,s=i.initiatorType,u=i.duration;if(l&&u&&Lf(s)){for(s=0,u=i.responseEnd,t+=1;t<e.length;t++){var f=e[t],_=f.startTime;if(_>u)break;var A=f.transferSize,R=f.initiatorType;A&&Lf(R)&&(f=f.responseEnd,s+=A*(f<u?1:(u-_)/(f-_)))}if(--t,r+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var eu=null,tu=null;function Ql(n){return n.nodeType===9?n:n.ownerDocument}function Cf(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bf(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function au(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var iu=null;function Np(){var n=window.event;return n&&n.type==="popstate"?n===iu?!1:(iu=n,!0):(iu=null,!1)}var Uf=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(n){return Hf.resolve(null).then(n).catch(Op)}:Uf;function Op(n){setTimeout(function(){throw n})}function mt(n){return n==="head"}function qf(n,r){var e=r,t=0;do{var i=e.nextSibling;if(n.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"||e==="/&"){if(t===0){n.removeChild(i),za(r);return}t--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")t++;else if(e==="html")Oi(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,Oi(e);for(var l=e.firstChild;l;){var s=l.nextSibling,u=l.nodeName;l[wt]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||e.removeChild(l),l=s}}else e==="body"&&Oi(n.ownerDocument.body);e=i}while(e);za(r)}function Gf(n,r){var e=n;n=0;do{var t=e.nextSibling;if(e.nodeType===1?r?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(r?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=t}while(e)}function lu(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var e=r;switch(r=r.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":lu(e),Va(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function wp(n,r,e,t){for(;n.nodeType===1;){var i=e;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[wt])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=he(n.nextSibling),n===null)break}return null}function Mp(n,r,e){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=he(n.nextSibling),n===null))return null;return n}function Yf(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=he(n.nextSibling),n===null))return null;return n}function su(n){return n.data==="$?"||n.data==="$~"}function cu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function kp(n,r){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||e.readyState!=="loading")r();else{var t=function(){r(),e.removeEventListener("DOMContentLoaded",t)};e.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function he(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var uu=null;function Vf(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(r===0)return he(n.nextSibling);r--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||r++}n=n.nextSibling}return null}function Qf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(r===0)return n;r--}else e!=="/$"&&e!=="/&"||r++}n=n.previousSibling}return null}function Kf(n,r,e){switch(r=Ql(e),n){case"html":if(n=r.documentElement,!n)throw Error(d(452));return n;case"head":if(n=r.head,!n)throw Error(d(453));return n;case"body":if(n=r.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Oi(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Va(n)}var ge=new Map,Jf=new Set;function Kl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Xe=q.d;q.d={f:Rp,r:zp,D:Dp,C:Lp,L:Cp,m:Bp,X:Hp,S:Up,M:qp};function Rp(){var n=Xe.f(),r=Cl();return n||r}function zp(n){var r=we(n);r!==null&&r.tag===5&&r.type==="form"?cd(r):Xe.r(n)}var Ma=typeof document>"u"?null:document;function Xf(n,r,e){var t=Ma;if(t&&typeof r=="string"&&r){var i=Yr(r);i='link[rel="'+n+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),Jf.has(i)||(Jf.add(i),n={rel:n,crossOrigin:e,href:r},t.querySelector(i)===null&&(r=t.createElement("link"),wr(r,"link",n),pr(r),t.head.appendChild(r)))}}function Dp(n){Xe.D(n),Xf("dns-prefetch",n,null)}function Lp(n,r){Xe.C(n,r),Xf("preconnect",n,r)}function Cp(n,r,e){Xe.L(n,r,e);var t=Ma;if(t&&n&&r){var i='link[rel="preload"][as="'+Yr(r)+'"]';r==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+Yr(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+Yr(e.imageSizes)+'"]')):i+='[href="'+Yr(n)+'"]';var l=i;switch(r){case"style":l=ka(n);break;case"script":l=Ra(n)}ge.has(l)||(n=O({rel:"preload",href:r==="image"&&e&&e.imageSrcSet?void 0:n,as:r},e),ge.set(l,n),t.querySelector(i)!==null||r==="style"&&t.querySelector(wi(l))||r==="script"&&t.querySelector(Mi(l))||(r=t.createElement("link"),wr(r,"link",n),pr(r),t.head.appendChild(r)))}}function Bp(n,r){Xe.m(n,r);var e=Ma;if(e&&n){var t=r&&typeof r.as=="string"?r.as:"script",i='link[rel="modulepreload"][as="'+Yr(t)+'"][href="'+Yr(n)+'"]',l=i;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ra(n)}if(!ge.has(l)&&(n=O({rel:"modulepreload",href:n},r),ge.set(l,n),e.querySelector(i)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Mi(l)))return}t=e.createElement("link"),wr(t,"link",n),pr(t),e.head.appendChild(t)}}}function Up(n,r,e){Xe.S(n,r,e);var t=Ma;if(t&&n){var i=Fe(t).hoistableStyles,l=ka(n);r=r||"default";var s=i.get(l);if(!s){var u={loading:0,preload:null};if(s=t.querySelector(wi(l)))u.loading=5;else{n=O({rel:"stylesheet",href:n,"data-precedence":r},e),(e=ge.get(l))&&ou(n,e);var f=s=t.createElement("link");pr(f),wr(f,"link",n),f._p=new Promise(function(_,A){f.onload=_,f.onerror=A}),f.addEventListener("load",function(){u.loading|=1}),f.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Jl(s,r,t)}s={type:"stylesheet",instance:s,count:1,state:u},i.set(l,s)}}}function Hp(n,r){Xe.X(n,r);var e=Ma;if(e&&n){var t=Fe(e).hoistableScripts,i=Ra(n),l=t.get(i);l||(l=e.querySelector(Mi(i)),l||(n=O({src:n,async:!0},r),(r=ge.get(i))&&du(n,r),l=e.createElement("script"),pr(l),wr(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function qp(n,r){Xe.M(n,r);var e=Ma;if(e&&n){var t=Fe(e).hoistableScripts,i=Ra(n),l=t.get(i);l||(l=e.querySelector(Mi(i)),l||(n=O({src:n,async:!0,type:"module"},r),(r=ge.get(i))&&du(n,r),l=e.createElement("script"),pr(l),wr(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function Zf(n,r,e,t){var i=(i=mn.current)?Kl(i):null;if(!i)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(r=ka(e.href),e=Fe(i).hoistableStyles,t=e.get(r),t||(t={type:"style",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=ka(e.href);var l=Fe(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(wi(n)))&&!l._p&&(s.instance=l,s.state.loading=5),ge.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},ge.set(n,e),l||Gp(i,n,e,s.state))),r&&t===null)throw Error(d(528,""));return s}if(r&&t!==null)throw Error(d(529,""));return null;case"script":return r=e.async,e=e.src,typeof e=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ra(e),e=Fe(i).hoistableScripts,t=e.get(r),t||(t={type:"script",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function ka(n){return'href="'+Yr(n)+'"'}function wi(n){return'link[rel="stylesheet"]['+n+"]"}function If(n){return O({},n,{"data-precedence":n.precedence,precedence:null})}function Gp(n,r,e,t){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?t.loading=1:(r=n.createElement("link"),t.preload=r,r.addEventListener("load",function(){return t.loading|=1}),r.addEventListener("error",function(){return t.loading|=2}),wr(r,"link",e),pr(r),n.head.appendChild(r))}function Ra(n){return'[src="'+Yr(n)+'"]'}function Mi(n){return"script[async]"+n}function Ff(n,r,e){if(r.count++,r.instance===null)switch(r.type){case"style":var t=n.querySelector('style[data-href~="'+Yr(e.href)+'"]');if(t)return r.instance=t,pr(t),t;var i=O({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),pr(t),wr(t,"style",i),Jl(t,e.precedence,n),r.instance=t;case"stylesheet":i=ka(e.href);var l=n.querySelector(wi(i));if(l)return r.state.loading|=4,r.instance=l,pr(l),l;t=If(e),(i=ge.get(i))&&ou(t,i),l=(n.ownerDocument||n).createElement("link"),pr(l);var s=l;return s._p=new Promise(function(u,f){s.onload=u,s.onerror=f}),wr(l,"link",t),r.state.loading|=4,Jl(l,e.precedence,n),r.instance=l;case"script":return l=Ra(e.src),(i=n.querySelector(Mi(l)))?(r.instance=i,pr(i),i):(t=e,(i=ge.get(l))&&(t=O({},e),du(t,i)),n=n.ownerDocument||n,i=n.createElement("script"),pr(i),wr(i,"link",t),n.head.appendChild(i),r.instance=i);case"void":return null;default:throw Error(d(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(t=r.instance,r.state.loading|=4,Jl(t,e.precedence,n));return r.instance}function Jl(n,r,e){for(var t=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=t.length?t[t.length-1]:null,l=i,s=0;s<t.length;s++){var u=t[s];if(u.dataset.precedence===r)l=u;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(r=e.nodeType===9?e.head:e,r.insertBefore(n,r.firstChild))}function ou(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function du(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Xl=null;function Wf(n,r,e){if(Xl===null){var t=new Map,i=Xl=new Map;i.set(e,t)}else i=Xl,t=i.get(e),t||(t=new Map,i.set(e,t));if(t.has(n))return t;for(t.set(n,null),e=e.getElementsByTagName(n),i=0;i<e.length;i++){var l=e[i];if(!(l[wt]||l[ur]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(r)||"";s=n+s;var u=t.get(s);u?u.push(l):t.set(s,[l])}}return t}function Pf(n,r,e){n=n.ownerDocument||n,n.head.insertBefore(e,r==="title"?n.querySelector("head > title"):null)}function Yp(n,r,e){if(e===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function $f(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Vp(n,r,e,t){if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=ka(t.href),l=r.querySelector(wi(i));if(l){r=l._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=Zl.bind(n),r.then(n,n)),e.state.loading|=4,e.instance=l,pr(l);return}l=r.ownerDocument||r,t=If(t),(i=ge.get(i))&&ou(t,i),l=l.createElement("link"),pr(l);var s=l;s._p=new Promise(function(u,f){s.onload=u,s.onerror=f}),wr(l,"link",t),e.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,r),(r=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Zl.bind(n),r.addEventListener("load",e),r.addEventListener("error",e))}}var fu=0;function Qp(n,r){return n.stylesheets&&n.count===0&&Fl(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var t=setTimeout(function(){if(n.stylesheets&&Fl(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+r);0<n.imgBytes&&fu===0&&(fu=62500*jp());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Fl(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>fu?50:800)+r);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t),clearTimeout(i)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Il=null;function Fl(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Il=new Map,r.forEach(Kp,n),Il=null,Zl.call(n))}function Kp(n,r){if(!(r.state.loading&4)){var e=Il.get(n);if(e)var t=e.get(null);else{e=new Map,Il.set(n,e);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),t=s)}t&&e.set(null,t)}i=r.instance,s=i.getAttribute("data-precedence"),l=e.get(s)||t,l===t&&e.set(null,i),e.set(s,i),this.count++,t=Zl.bind(this),i.addEventListener("load",t),i.addEventListener("error",t),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),r.state.loading|=4}}var ki={$$typeof:an,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Jp(n,r,e,t,i,l,s,u,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wn(0),this.hiddenUpdates=Wn(null),this.identifierPrefix=t,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function nh(n,r,e,t,i,l,s,u,f,_,A,R){return n=new Jp(n,r,e,s,f,_,A,R,u),r=1,l===!0&&(r|=24),l=ne(3,null,null,r),n.current=l,l.stateNode=n,r=Ks(),r.refCount++,n.pooledCache=r,r.refCount++,l.memoizedState={element:t,isDehydrated:e,cache:r},Is(l),n}function rh(n){return n?(n=ua,n):ua}function eh(n,r,e,t,i,l){i=rh(i),t.context===null?t.context=i:t.pendingContext=i,t=it(r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=lt(n,t,r),e!==null&&(Zr(e,n,r),ui(e,n,r))}function th(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function hu(n,r){th(n,r),(n=n.alternate)&&th(n,r)}function ah(n){if(n.tag===13||n.tag===31){var r=Lt(n,67108864);r!==null&&Zr(r,n,67108864),hu(n,67108864)}}function ih(n){if(n.tag===13||n.tag===31){var r=ie();r=nr(r);var e=Lt(n,r);e!==null&&Zr(e,n,r),hu(n,r)}}var Wl=!0;function Xp(n,r,e,t){var i=N.T;N.T=null;var l=q.p;try{q.p=2,gu(n,r,e,t)}finally{q.p=l,N.T=i}}function Zp(n,r,e,t){var i=N.T;N.T=null;var l=q.p;try{q.p=8,gu(n,r,e,t)}finally{q.p=l,N.T=i}}function gu(n,r,e,t){if(Wl){var i=pu(t);if(i===null)nu(n,r,t,Pl,e),sh(n,t);else if(Fp(i,n,r,e,t))t.stopPropagation();else if(sh(n,t),r&4&&-1<Ip.indexOf(n)){for(;i!==null;){var l=we(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=qr(l.pendingLanes);if(s!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var f=1<<31-Lr(s);u.entanglements[1]|=f,s&=~f}Ee(l),(Ln&6)===0&&(Dl=sr()+500,Ni(0))}}break;case 31:case 13:u=Lt(l,2),u!==null&&Zr(u,l,2),Cl(),hu(l,2)}if(l=pu(t),l===null&&nu(n,r,t,Pl,e),l===i)break;i=l}i!==null&&t.stopPropagation()}else nu(n,r,t,null,e)}}function pu(n){return n=pn(n),mu(n)}var Pl=null;function mu(n){if(Pl=null,n=Cr(n),n!==null){var r=L(n);if(r===null)n=null;else{var e=r.tag;if(e===13){if(n=B(r),n!==null)return n;n=null}else if(e===31){if(n=K(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Pl=n,null}function lh(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qi()){case Ae:return 2;case jt:return 8;case Nt:case gs:return 32;case Gi:return 268435456;default:return 32}default:return 32}}var bu=!1,bt=null,yt=null,xt=null,Ri=new Map,zi=new Map,vt=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sh(n,r){switch(n){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Ri.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(r.pointerId)}}function Di(n,r,e,t,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:r,domEventName:e,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},r!==null&&(r=we(r),r!==null&&ah(r)),n):(n.eventSystemFlags|=t,r=n.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),n)}function Fp(n,r,e,t,i){switch(r){case"focusin":return bt=Di(bt,n,r,e,t,i),!0;case"dragenter":return yt=Di(yt,n,r,e,t,i),!0;case"mouseover":return xt=Di(xt,n,r,e,t,i),!0;case"pointerover":var l=i.pointerId;return Ri.set(l,Di(Ri.get(l)||null,n,r,e,t,i)),!0;case"gotpointercapture":return l=i.pointerId,zi.set(l,Di(zi.get(l)||null,n,r,e,t,i)),!0}return!1}function ch(n){var r=Cr(n.target);if(r!==null){var e=L(r);if(e!==null){if(r=e.tag,r===13){if(r=B(e),r!==null){n.blockedOn=r,$t(n.priority,function(){ih(e)});return}}else if(r===31){if(r=K(e),r!==null){n.blockedOn=r,$t(n.priority,function(){ih(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $l(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=pu(n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);P=t,e.target.dispatchEvent(t),P=null}else return r=we(e),r!==null&&ah(r),n.blockedOn=e,!1;r.shift()}return!0}function uh(n,r,e){$l(n)&&e.delete(r)}function Wp(){bu=!1,bt!==null&&$l(bt)&&(bt=null),yt!==null&&$l(yt)&&(yt=null),xt!==null&&$l(xt)&&(xt=null),Ri.forEach(uh),zi.forEach(uh)}function ns(n,r){n.blockedOn===r&&(n.blockedOn=null,bu||(bu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Wp)))}var rs=null;function oh(n){rs!==n&&(rs=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rs===n&&(rs=null);for(var r=0;r<n.length;r+=3){var e=n[r],t=n[r+1],i=n[r+2];if(typeof t!="function"){if(mu(t||e)===null)continue;break}var l=we(e);l!==null&&(n.splice(r,3),r-=3,pc(l,{pending:!0,data:i,method:e.method,action:t},t,i))}}))}function za(n){function r(f){return ns(f,n)}bt!==null&&ns(bt,n),yt!==null&&ns(yt,n),xt!==null&&ns(xt,n),Ri.forEach(r),zi.forEach(r);for(var e=0;e<vt.length;e++){var t=vt[e];t.blockedOn===n&&(t.blockedOn=null)}for(;0<vt.length&&(e=vt[0],e.blockedOn===null);)ch(e),e.blockedOn===null&&vt.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(t=0;t<e.length;t+=3){var i=e[t],l=e[t+1],s=i[kr]||null;if(typeof l=="function")s||oh(e);else if(s){var u=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[kr]||null)u=s.formAction;else if(mu(i)!==null)continue}else u=s.action;typeof u=="function"?e[t+1]=u:(e.splice(t,3),t-=3),oh(e)}}}function dh(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function r(){i!==null&&(i(),i=null),t||setTimeout(e,20)}function e(){if(!t&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(e,100),function(){t=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),i!==null&&(i(),i=null)}}}function yu(n){this._internalRoot=n}es.prototype.render=yu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(d(409));var e=r.current,t=ie();eh(e,t,n,r,null,null)},es.prototype.unmount=yu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;eh(n.current,2,null,n,null,null),Cl(),r[Ze]=null}};function es(n){this._internalRoot=n}es.prototype.unstable_scheduleHydration=function(n){if(n){var r=Pt();n={blockedOn:null,target:n,priority:r};for(var e=0;e<vt.length&&r!==0&&r<vt[e].priority;e++);vt.splice(e,0,n),e===0&&ch(n)}};var fh=y.version;if(fh!=="19.2.3")throw Error(d(527,fh,"19.2.3"));q.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=T(r),n=n!==null?U(n):null,n=n===null?null:n.stateNode,n};var Pp={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{Et=ts.inject(Pp),Mr=ts}catch{}}return Ci.createRoot=function(n,r){if(!E(n))throw Error(d(299));var e=!1,t="",i=yd,l=xd,s=vd;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onUncaughtError!==void 0&&(i=r.onUncaughtError),r.onCaughtError!==void 0&&(l=r.onCaughtError),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=nh(n,1,!1,null,null,e,t,null,i,l,s,dh),n[Ze]=r.current,$c(n),new yu(r)},Ci.hydrateRoot=function(n,r,e){if(!E(n))throw Error(d(299));var t=!1,i="",l=yd,s=xd,u=vd,f=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),r=nh(n,1,!0,r,e??null,t,i,f,l,s,u,dh),r.context=rh(null),e=r.current,t=ie(),t=nr(t),i=it(t),i.callback=null,lt(e,i,t),e=t,r.current.lanes=e,Xn(r,e),Ee(r),n[Ze]=r.current,$c(n),new es(r)},Ci.version="19.2.3",Ci}var Th;function sm(){if(Th)return vu.exports;Th=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(y){console.error(y)}}return o(),vu.exports=lm(),vu.exports}var cm=sm();const um=La(cm);var nn=zu();const ds=La(nn),Hh=nn.createContext(void 0),om=({children:o})=>{const y=localStorage.getItem("selectedLanguage")||"python",[x,d]=nn.useState(y);return nn.useEffect(()=>{localStorage.setItem("selectedLanguage",x)},[x]),a.jsx(Hh.Provider,{value:{selectedLanguage:x,setSelectedLanguage:d},children:o})};function dm(){const o=nn.useContext(Hh);if(o===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return o}const qh=nn.createContext(void 0);function fm({children:o}){const[y,x]=nn.useState(!0),d=()=>x(!0),E=()=>x(!1),L=()=>x(!y);return a.jsx(qh.Provider,{value:{isSidebarOpen:y,showSidebar:d,hideSidebar:E,toggleSidebar:L},children:o})}function Du(){const o=nn.useContext(qh);if(o===void 0)throw new Error("useSidebar must be used within SidebarProvider");return o}const hm="_wave_nm5to_1",as={wave:hm};function gm(){return a.jsxs("div",{className:as.background,children:[a.jsx("div",{className:as.wave}),a.jsx("div",{className:as.wave}),a.jsx("div",{className:as.wave})]})}const pm="_topbar_dxbgq_1",mm="_container_dxbgq_22",bm="_buttonContainer_dxbgq_28",ym="_title_dxbgq_35",xm="_iconLink_dxbgq_53",vm="_hamburger_dxbgq_75",_m="_hamburgerIcon_dxbgq_79",Tm="_hamburgerTop_dxbgq_88",Sm="_collapsed_dxbgq_92",jm="_hamburgerMiddle_dxbgq_96",Nm="_hamburgerBottom_dxbgq_106",xe={topbar:pm,container:mm,buttonContainer:bm,title:ym,iconLink:xm,hamburger:vm,hamburgerIcon:_m,hamburgerTop:Tm,collapsed:Sm,hamburgerMiddle:jm,hamburgerBottom:Nm};var is={},Sh;function Em(){if(Sh)return is;Sh=1,is.match=L,is.parse=B;var o=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,y=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,x=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,E=/(dpi|dpcm|dppx)?$/;function L(U,O){return B(U).some(function(z){var J=z.inverse,tn=z.type==="all"||O.type===z.type;if(tn&&J||!(tn||J))return!1;var F=z.expressions.every(function(Sn){var An=Sn.feature,vn=Sn.modifier,an=Sn.value,on=O[An];if(!on)return!1;switch(An){case"orientation":case"scan":return on.toLowerCase()===an.toLowerCase();case"width":case"height":case"device-width":case"device-height":an=T(an),on=T(on);break;case"resolution":an=D(an),on=D(on);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":an=K(an),on=K(on);break;case"grid":case"color":case"color-index":case"monochrome":an=parseInt(an,10)||1,on=parseInt(on,10)||0;break}switch(vn){case"min":return on>=an;case"max":return on<=an;default:return on===an}});return F&&!J||!F&&J})}function B(U){return U.split(",").map(function(O){O=O.trim();var z=O.match(o),J=z[1],tn=z[2],F=z[3]||"",Sn={};return Sn.inverse=!!J&&J.toLowerCase()==="not",Sn.type=tn?tn.toLowerCase():"all",F=F.match(/\([^\)]+\)/g)||[],Sn.expressions=F.map(function(An){var vn=An.match(y),an=vn[1].toLowerCase().match(x);return{modifier:an[1],feature:an[2],value:vn[2]}}),Sn})}function K(U){var O=Number(U),z;return O||(z=U.match(/^(\d+)\s*\/\s*(\d+)$/),O=z[1]/z[2]),O}function D(U){var O=parseFloat(U),z=String(U).match(E)[1];switch(z){case"dpcm":return O/2.54;case"dppx":return O*96;default:return O}}function T(U){var O=parseFloat(U),z=String(U).match(d)[1];switch(z){case"em":return O*16;case"rem":return O*16;case"cm":return O*96/2.54;case"mm":return O*96/2.54/10;case"in":return O*96;case"pt":return O*72;case"pc":return O*72/12;default:return O}}return is}var Nu,jh;function Am(){if(jh)return Nu;jh=1;var o=Em().match,y=typeof window<"u"?window.matchMedia:null;function x(E,L,B){var K=this,D;y&&!B&&(D=y.call(window,E)),D?(this.matches=D.matches,this.media=D.media,D.addListener(O)):(this.matches=o(E,L),this.media=E),this.addListener=T,this.removeListener=U,this.dispose=z;function T(J){D&&D.addListener(J)}function U(J){D&&D.removeListener(J)}function O(J){K.matches=J.matches,K.media=J.media}function z(){D&&D.removeListener(O)}}function d(E,L,B){return new x(E,L,B)}return Nu=d,Nu}var Om=Am();const wm=La(Om);var Mm=/[A-Z]/g,km=/^ms-/,Eu={};function Rm(o){return"-"+o.toLowerCase()}function Gh(o){if(Eu.hasOwnProperty(o))return Eu[o];var y=o.replace(Mm,Rm);return Eu[o]=km.test(y)?"-"+y:y}function zm(o,y){if(o===y)return!0;if(!o||!y)return!1;const x=Object.keys(o),d=Object.keys(y),E=x.length;if(d.length!==E)return!1;for(let L=0;L<E;L++){const B=x[L];if(o[B]!==y[B]||!Object.prototype.hasOwnProperty.call(y,B))return!1}return!0}var Au={exports:{}},Ou,Nh;function Dm(){if(Nh)return Ou;Nh=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ou=o,Ou}var wu,Eh;function Lm(){if(Eh)return wu;Eh=1;var o=Dm();function y(){}function x(){}return x.resetWarningCache=y,wu=function(){function d(B,K,D,T,U,O){if(O!==o){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}d.isRequired=d;function E(){return d}var L={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:E,element:d,elementType:d,instanceOf:E,node:d,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:x,resetWarningCache:y};return L.PropTypes=L,L},wu}var Ah;function Cm(){return Ah||(Ah=1,Au.exports=Lm()()),Au.exports}var Bm=Cm();const Cn=La(Bm),Hr=Cn.oneOfType([Cn.string,Cn.number]),Yh={all:Cn.bool,grid:Cn.bool,aural:Cn.bool,braille:Cn.bool,handheld:Cn.bool,print:Cn.bool,projection:Cn.bool,screen:Cn.bool,tty:Cn.bool,tv:Cn.bool,embossed:Cn.bool},Um={orientation:Cn.oneOf(["portrait","landscape"]),scan:Cn.oneOf(["progressive","interlace"]),aspectRatio:Cn.string,deviceAspectRatio:Cn.string,height:Hr,deviceHeight:Hr,width:Hr,deviceWidth:Hr,color:Cn.bool,colorIndex:Cn.bool,monochrome:Cn.bool,resolution:Hr,type:Object.keys(Yh)},{type:TS,...Hm}=Um,qm={minAspectRatio:Cn.string,maxAspectRatio:Cn.string,minDeviceAspectRatio:Cn.string,maxDeviceAspectRatio:Cn.string,minHeight:Hr,maxHeight:Hr,minDeviceHeight:Hr,maxDeviceHeight:Hr,minWidth:Hr,maxWidth:Hr,minDeviceWidth:Hr,maxDeviceWidth:Hr,minColor:Cn.number,maxColor:Cn.number,minColorIndex:Cn.number,maxColorIndex:Cn.number,minMonochrome:Cn.number,maxMonochrome:Cn.number,minResolution:Hr,maxResolution:Hr,...Hm},Gm={...Yh,...qm};var Ym={all:Gm};const Vm=o=>`not ${o}`,Qm=(o,y)=>{const x=Gh(o);return typeof y=="number"&&(y=`${y}px`),y===!0?x:y===!1?Vm(x):`(${x}: ${y})`},Km=o=>o.join(" and "),Jm=o=>{const y=[];return Object.keys(Ym.all).forEach(x=>{const d=o[x];d!=null&&y.push(Qm(x,d))}),Km(y)},Xm=nn.createContext(void 0),Zm=o=>o.query||Jm(o),Oh=o=>o?Object.keys(o).reduce((x,d)=>(x[Gh(d)]=o[d],x),{}):void 0,Vh=()=>{const o=nn.useRef(!1);return nn.useEffect(()=>{o.current=!0},[]),o.current},Im=o=>{const y=nn.useContext(Xm),x=()=>Oh(o)||Oh(y),[d,E]=nn.useState(x);return nn.useEffect(()=>{const L=x();zm(d,L)||E(L)},[o,y]),d},Fm=o=>{const y=()=>Zm(o),[x,d]=nn.useState(y);return nn.useEffect(()=>{const E=y();x!==E&&d(E)},[o]),x},Wm=(o,y)=>{const x=()=>wm(o,y||{},!!y),[d,E]=nn.useState(x),L=Vh();return nn.useEffect(()=>{if(L){const B=x();return E(B),()=>{B&&B.dispose()}}},[o,y]),d},Pm=o=>{const[y,x]=nn.useState(o.matches);return nn.useEffect(()=>{const d=E=>{x(E.matches)};return o.addListener(d),x(o.matches),()=>{o.removeListener(d)}},[o]),y},Qh=(o,y,x)=>{const d=Im(y),E=Fm(o);if(!E)throw new Error("Invalid or missing MediaQuery!");const L=Wm(E,d),B=Pm(L),K=Vh();return nn.useEffect(()=>{K&&x&&x(B)},[B]),nn.useEffect(()=>()=>{L&&L.dispose()},[]),B};function Ir(...o){let y="";for(const x of o)if(x){if(typeof x=="string"||typeof x=="number")y+=(y&&" ")+x;else if(Array.isArray(x)){const d=Ir(...x);d&&(y+=(y&&" ")+d)}else if(typeof x=="object")for(const d in x)x[d]&&(y+=(y&&" ")+d)}return y}function Kh(){const o=document.documentElement,y=getComputedStyle(o).getPropertyValue("--navbar-height");return parseFloat(y)||76}const $m=o=>o<.5?2*o*o:1-Math.pow(-2*o+2,2)/2;function Jh(o,y=0){const x=document.querySelector(o);if(!x)return;const d=x.offsetTop,E=window.scrollY,L=d-E-y,B=performance.now(),K=1500,D=T=>{const U=T-B,O=U/K,z=$m(O),J=E+L*(O>1?1:z);window.scrollTo({top:J}),U<K&&requestAnimationFrame(D)};requestAnimationFrame(D)}const nb="_brand_18f9t_1",rb="_bounce_18f9t_19",eb="_glowDisappear_18f9t_23",tb="_heartBeat_18f9t_27",ab="_rubberBand_18f9t_31",ib="_rotate_18f9t_35",Zt={brand:nb,bounce:rb,glowDisappear:eb,heartBeat:tb,rubberBand:ab,rotate:ib};function lb(){const[o,y]=nn.useState(Zt.rotate),[x,d]=nn.useState(!1),E=[Zt.bounce,Zt.glowDisappear,Zt.heartBeat,Zt.rubberBand,Zt.rotate],L=Ir(Zt.brand,x&&o),B=()=>d(!1),K=()=>{const D=Math.floor(Math.random()*E.length),T=E[D];d(!0),y(T)};return a.jsx("div",{className:L,onClick:K,onAnimationEnd:B,children:"JWL"})}const sb="_container_uucyv_1",cb="_input_uucyv_6",ub="_label_uucyv_16",ob="_indicator_uucyv_20",db="_decoration_uucyv_28",Bi={container:sb,input:cb,label:ub,indicator:ob,decoration:db};function wh(){const o=document.documentElement,[y,x]=nn.useState(!1),d=()=>{const L=new Event("themeChange");o.dispatchEvent(L)},E=()=>{x(!y),o.setAttribute("data-theme",y?"dark":"light"),d()};return nn.useEffect(()=>{const L=o.getAttribute("data-theme");x(L==="light"),d()},[]),a.jsxs("div",{className:Bi.container,children:[a.jsx("input",{className:Bi.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:y,onChange:E}),a.jsxs("label",{className:Bi.label,htmlFor:"theme-switch",children:[a.jsx("span",{className:Bi.indicator}),a.jsx("span",{className:Bi.decoration})]})]})}function fb(){return a.jsx("svg",{viewBox:"0 0 128 128",children:a.jsxs("g",{fill:"var(--svg-github-fill)",children:[a.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),a.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}function hb({forwardedRef:o}){const y=nn.useRef(null),{isSidebarOpen:x,toggleSidebar:d}=Du(),E=Qh({maxWidth:768}),L=Ir(xe.hamburgerIcon,!x&&xe.collapsed);nn.useLayoutEffect(()=>{if(!y.current)return;const z=new ResizeObserver(J=>{for(const tn of J){const F=tn.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${F}px`)}});return z.observe(y.current),()=>z.disconnect()},[]);const B=z=>{z.preventDefault(),window.history.replaceState({},"",window.location.pathname),Jh("main",Kh()-2)},K=()=>d(),D=()=>!E&&a.jsx(lb,{}),T=()=>!E&&a.jsx("a",{href:"main",onClick:B,role:"button",children:a.jsx("h1",{className:xe.title,children:"LeetCode Cheatsheet"})}),U=()=>a.jsx("a",{href:"/leetcode-cheatsheet","aria-label":"GitHub source",className:xe.iconLink,target:"_blank",children:a.jsx(fb,{})}),O=()=>E?a.jsxs(a.Fragment,{children:[a.jsx(wh,{}),U()]}):a.jsxs("div",{className:xe.buttonContainer,children:[U(),a.jsx(wh,{})]});return a.jsx("header",{ref:y,className:xe.topbar,children:a.jsxs("div",{className:xe.container,children:[a.jsxs("div",{ref:o,className:xe.hamburger,onClick:K,children:[a.jsx("span",{className:Ir(L,xe.hamburgerTop)}),a.jsx("span",{className:Ir(L,xe.hamburgerMiddle)}),a.jsx("span",{className:Ir(L,xe.hamburgerBottom)})]}),D(),T(),O()]})})}const gb="_sidebar_8uy5s_1",pb="_exit_8uy5s_20",mb="_hide_8uy5s_23",bb="_scrollContainer_8uy5s_27",ls={sidebar:gb,exit:pb,hide:mb,scrollContainer:bb};function Xh(o,y){nn.useEffect(()=>{const x=d=>{const E=d.target;(Array.isArray(o)?o:[o]).every(K=>K.current&&!K.current.contains(E))&&y()};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[o,y])}const yb="_accordion_1hmri_1",xb="_button_1hmri_6",vb="_open_1hmri_25",_b="_content_1hmri_29",ss={accordion:yb,button:xb,open:vb,content:_b};function Tb(o){const y=parseFloat(o);return!isNaN(y)&&isFinite(y)}function Mh(o){return typeof o=="string"&&o[o.length-1]==="%"&&Tb(o.substring(0,o.length-1))}function Mu(o,y,x){y===0&&!x&&o?.style&&o?.children.length>0&&(o.style.display="none")}function Sb(o,y){y===0&&o?.style&&(o.style.display="")}const jb={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function kh(o,y){return[o.static,y===0&&o.staticHeightZero,typeof y=="number"&&y>0?o.staticHeightSpecific:null,y==="auto"&&o.staticHeightAuto].filter(x=>x).join(" ")}const Nb=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],Eb=ds.forwardRef((o,y)=>{const{animateOpacity:x=!1,animationStateClasses:d={},applyInlineTransitions:E=!0,children:L,className:B="",contentClassName:K,delay:D=0,disableDisplayNone:T=!1,duration:U=500,easing:O="ease",height:z,onHeightAnimationEnd:J,onHeightAnimationStart:tn,style:F,contentRef:Sn}=o,An=Object.assign({},o);Nb.forEach(ln=>{delete An[ln]});const vn=nn.useRef(z),an=nn.useRef(null),on=nn.useRef(),Bn=nn.useRef(),yn=nn.useRef(Object.assign(Object.assign({},jb),d)),fn=typeof window<"u",Jn=nn.useRef(fn&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),hr=Jn.current?0:D,Sr=Jn.current?0:U;let gr=z,tr="visible";typeof z=="number"?(gr=z<0?0:z,tr="hidden"):Mh(gr)&&(gr=z==="0%"?0:z,tr="hidden");const[Dr,lr]=nn.useState(gr),[jr,N]=nn.useState(tr),[q,Q]=nn.useState(!1),[_n,Tn]=nn.useState(kh(yn.current,z));nn.useEffect(()=>{Mu(an.current,Dr,T)},[]),nn.useEffect(()=>{if(z!==vn.current&&an.current){Sb(an.current,vn.current),an.current.style.overflow="hidden";const ln=an.current.offsetHeight;an.current.style.overflow="";const mn=Sr+hr;let hn,Rn,In="hidden",Fr;const ve=vn.current==="auto";typeof z=="number"?(hn=z<0?0:z,Rn=hn):Mh(z)?(hn=z==="0%"?0:z,Rn=hn):(hn=ln,Rn="auto",In=void 0),ve&&(Rn=hn,hn=ln);const Tt=[yn.current.animating,(vn.current==="auto"||z<vn.current)&&yn.current.animatingUp,(z==="auto"||z>vn.current)&&yn.current.animatingDown,Rn===0&&yn.current.animatingToHeightZero,Rn==="auto"&&yn.current.animatingToHeightAuto,typeof Rn=="number"&&Rn>0?yn.current.animatingToHeightSpecific:null].filter(pe=>pe).join(" "),St=kh(yn.current,Rn);lr(hn),N("hidden"),Q(!ve),Tn(Tt),clearTimeout(Bn.current),clearTimeout(on.current),ve?(Fr=!0,Bn.current=setTimeout(()=>{lr(Rn),N(In),Q(Fr),tn?.(Rn)},50),on.current=setTimeout(()=>{Q(!1),Tn(St),Mu(an.current,Rn,T),J?.(Rn)},mn)):(tn?.(hn),Bn.current=setTimeout(()=>{lr(Rn),N(In),Q(!1),Tn(St),z!=="auto"&&Mu(an.current,hn,T),J?.(hn)},mn))}return vn.current=z,()=>{clearTimeout(Bn.current),clearTimeout(on.current)}},[z]);const p=Object.assign(Object.assign({},F),{height:Dr,overflow:jr||F?.overflow});q&&E&&(p.transition=`height ${Sr}ms ${O} ${hr}ms`,F?.transition&&(p.transition=`${F.transition}, ${p.transition}`),p.WebkitTransition=p.transition);const w={};x&&(w.transition=`opacity ${Sr}ms ${O} ${hr}ms`,w.WebkitTransition=w.transition,Dr===0&&(w.opacity=0));const Z=typeof An["aria-hidden"]<"u"?An["aria-hidden"]:z===0;return ds.createElement("div",Object.assign({},An,{"aria-hidden":Z,className:`${_n} ${B}`,style:p,ref:y}),ds.createElement("div",{className:K,style:w,ref:ln=>{an.current=ln,Sn&&(Sn.current=ln)}},L))});function Ab(){return a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})}function Ur({title:o,children:y}){const[x,d]=nn.useState(!1),E=x?"auto":0,L=Ir(ss.button,x&&ss.open),B=()=>d(!x);return a.jsxs("div",{className:ss.accordion,children:[a.jsxs("button",{className:L,onClick:B,children:[a.jsx("span",{children:o}),a.jsx(Ab,{})]}),a.jsx(Eb,{animateOpacity:!0,height:E,duration:400,children:a.jsx("div",{className:ss.content,children:y})})]})}const Ob="_linkWrapper_1logo_1",wb="_link_1logo_1",Rh={linkWrapper:Ob,link:wb},Mb="_tooltip_1edpy_1",kb="_exit_1edpy_13",Rb="_text_1edpy_27",ku={tooltip:Mb,exit:kb,text:Rb};var zb=Uh();const Db=La(zb);function Lb({anchorRef:o,content:y,showTooltip:x}){const d=nn.useRef(null),[E,L]=nn.useState(null),[B,K]=nn.useState(!1),D=Ir(ku.tooltip,!x&&ku.exit),T=()=>K(!1),U=()=>{x||K(!0)};return nn.useEffect(()=>{if(!x||!o.current)return;const O=o.current.getBoundingClientRect(),z=d.current?.offsetHeight??0,J=O.left+window.scrollX,tn=O.top+window.scrollY-z-4;L({top:tn,left:J})},[x]),(x||!B)&&o.current&&Db.createPortal(a.jsx("div",{ref:d,className:D,style:E??{},onAnimationStart:T,onAnimationEnd:U,children:a.jsx("span",{className:ku.text,children:y})}),document.body)}function V({href:o,description:y}){const x=nn.useRef(null),[d,E]=nn.useState(!1);let L;const B=T=>{T.preventDefault(),window.history.replaceState({},"",o),clearTimeout(L),E(!1),Jh(o,Kh()-2)},K=()=>{L=setTimeout(()=>{E(!0)},700)},D=()=>{clearTimeout(L),E(!1)};return a.jsxs("div",{className:Rh.linkWrapper,children:[a.jsx("a",{ref:x,href:o,className:Rh.link,onClick:B,role:"button","aria-description":y,onMouseEnter:K,onMouseLeave:D,children:y}),a.jsx(Lb,{anchorRef:x,content:y,showTooltip:d})]})}function Cb(){return a.jsxs(a.Fragment,{children:[a.jsxs(Ur,{title:"Big O",children:[a.jsx(V,{href:"#bigo-chart",description:"Time/Space Complexities"}),a.jsx(V,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),a.jsx(V,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),a.jsxs(Ur,{title:"Array",children:[a.jsx(V,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),a.jsx(V,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),a.jsx(V,{href:"#array-sliding-window",description:"sliding window"}),a.jsx(V,{href:"#array-prefix-sum",description:"prefix sum"}),a.jsx(V,{href:"#array-string-building",description:"efficient string building"})]}),a.jsxs(Ur,{title:"Hash Map",children:[a.jsx(V,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),a.jsx(V,{href:"#hashmap-sliding-window",description:"sliding window"})]}),a.jsxs(Ur,{title:"Linked List",children:[a.jsx(V,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),a.jsx(V,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),a.jsxs(Ur,{title:"Stack",children:[a.jsx(V,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),a.jsx(V,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),a.jsxs(Ur,{title:"Binary Tree",children:[a.jsx(V,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),a.jsx(V,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),a.jsx(V,{href:"#tree-bfs",description:"BFS"})]}),a.jsxs(Ur,{title:"Graph",children:[a.jsx(V,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),a.jsx(V,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),a.jsx(V,{href:"#graph-bfs",description:"BFS"}),a.jsx(V,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),a.jsx(V,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),a.jsx(V,{href:"#graph-kahn",description:"Kahn (topological sort)"}),a.jsx(V,{href:"#graph-kruskal",description:"Kruskal (mst)"}),a.jsx(V,{href:"#graph-prim",description:"Prim (mst)"})]}),a.jsx(Ur,{title:"Heap",children:a.jsx(V,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),a.jsxs(Ur,{title:"Binary Search",children:[a.jsx(V,{href:"#binarysearch-binary-search",description:"binary search"}),a.jsx(V,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),a.jsx(V,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),a.jsx(V,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),a.jsx(V,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),a.jsx(Ur,{title:"Backtracking",children:a.jsx(V,{href:"#backtracking-backtracking",description:"backtracking"})}),a.jsxs(Ur,{title:"Dynamic Programming",children:[a.jsx(V,{href:"#dp-top-down",description:"top-down DP"}),a.jsx(V,{href:"#dp-bottom-up",description:"bottom-up DP"}),a.jsx(V,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),a.jsxs(Ur,{title:"Bit Manipulation",children:[a.jsx(V,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),a.jsx(V,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),a.jsx(V,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),a.jsx(V,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),a.jsx(V,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),a.jsx(V,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),a.jsx(V,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),a.jsx(V,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),a.jsx(V,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),a.jsxs(Ur,{title:"Matrix",children:[a.jsx(V,{href:"#matrix-create-copy",description:"create / copy"}),a.jsx(V,{href:"#matrix-diagonals",description:"main / anti diagonals"}),a.jsx(V,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),a.jsxs(Ur,{title:"Data Structures",children:[a.jsx(V,{href:"#ds-array",description:"array"}),a.jsx(V,{href:"#ds-hash-map",description:"hashmap"}),a.jsx(V,{href:"#ds-linked-list",description:"linked list"}),a.jsx(V,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),a.jsx(V,{href:"#ds-binary-tree",description:"binary tree"}),a.jsx(V,{href:"#ds-binary-search-tree",description:"binary search tree"}),a.jsx(V,{href:"#ds-graph",description:"graph"}),a.jsx(V,{href:"#ds-union-find",description:"union find"}),a.jsx(V,{href:"#ds-union-find-optimized",description:"union find optimized"}),a.jsx(V,{href:"#ds-trie",description:"trie"})]}),a.jsxs(Ur,{title:"Sorting Algorithms",children:[a.jsx(V,{href:"#sort-bubble",description:"bubble sort"}),a.jsx(V,{href:"#sort-selection",description:"selection sort"}),a.jsx(V,{href:"#sort-insertion",description:"insertion sort"}),a.jsx(V,{href:"#sort-shell",description:"shell sort"}),a.jsx(V,{href:"#sort-merge",description:"mergesort"}),a.jsx(V,{href:"#sort-quick",description:"quicksort"}),a.jsx(V,{href:"#sort-tim",description:"timsort"}),a.jsx(V,{href:"#sort-heap",description:"heapsort"}),a.jsx(V,{href:"#sort-counting",description:"counting sort"}),a.jsx(V,{href:"#sort-bucket",description:"bucket sort"}),a.jsx(V,{href:"#sort-radix",description:"radix sort"}),a.jsx(V,{href:"#sort-cube",description:"cubesort"}),a.jsx(V,{href:"#sort-bogo",description:"bogo sort"}),a.jsx(V,{href:"#sort-pancake",description:"pancake sort"}),a.jsx(V,{href:"#sort-sleep",description:"sleep sort"})]})]})}function Bb({hamburgerButtonRef:o}){const y=nn.useRef(null),{isSidebarOpen:x,showSidebar:d,hideSidebar:E}=Du(),[L,B]=nn.useState(!1),K=Ir(ls.sidebar,!x&&ls.exit,!x&&L&&ls.hide),T=Qh({maxWidth:768},void 0,J=>{J&&x?E():!J&&!x&&d()}),U=()=>{T&&x&&E()},O=()=>B(!1),z=()=>{x||B(!0)};return Xh([y,o],U),a.jsx("nav",{ref:y,className:K,onAnimationStart:O,onAnimationEndCapture:z,children:a.jsx("div",{className:ls.scrollContainer,children:a.jsx(Cb,{})})})}function Ub(){const o=nn.useRef(null);return a.jsxs("div",{id:"AppBar",children:[a.jsx(hb,{forwardedRef:o}),a.jsx(Bb,{hamburgerButtonRef:o})]})}const Hb="_main_1p6ym_1",qb="_sidebarHidden_1p6ym_11",zh={main:Hb,sidebarHidden:qb},Gb="_container_1htmy_1",Yb="_sectionHeader_1htmy_7",Un={container:Gb,sectionHeader:Yb},Vb="_container_13ll4_1",Qb="_label_13ll4_13",Kb="_tableWrapper_13ll4_21",Jb="_dataRow_13ll4_30",Xb="_red_13ll4_51",Zb="_oliveGreen_13ll4_55",Ib="_green_13ll4_59",Fb="_orange_13ll4_63",Wb="_yellow_13ll4_67",Pb="_gray_13ll4_71",g={container:Vb,label:Qb,tableWrapper:Kb,dataRow:Jb,red:Xb,oliveGreen:Zb,green:Ib,orange:Fb,yellow:Wb,gray:Pb};function $b(){const o={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return a.jsx("section",{id:"bigo-chart",children:a.jsxs("div",{className:g.container,children:[a.jsx("h3",{children:"Big-O Complexity Chart"}),a.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[a.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:o.red}),a.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:o.orange}),a.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:o.yellow}),a.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:o.oliveGreen}),a.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:o.green}),a.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),a.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),a.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),a.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),a.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),a.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),a.jsx("text",{className:g.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),a.jsx("text",{className:g.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function n1(){return a.jsx("section",{id:"bigo-data-structure-operations-table",children:a.jsxs("div",{className:g.container,children:[a.jsx("h3",{children:"Data Structure Operations"}),a.jsx("div",{className:g.tableWrapper,children:a.jsx("table",{className:g.table,children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Data Structure"}),a.jsx("th",{colSpan:8,children:"Time Complexity"}),a.jsx("th",{children:"Space Complexity"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{colSpan:4,children:"Average"}),a.jsx("th",{colSpan:4,children:"Worst"}),a.jsx("th",{children:"Worst"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{children:"Access"}),a.jsx("th",{children:"Search"}),a.jsx("th",{children:"Insertion"}),a.jsx("th",{children:"Deletion"}),a.jsx("th",{children:"Access"}),a.jsx("th",{children:"Search"}),a.jsx("th",{children:"Insertion"}),a.jsx("th",{children:"Deletion"}),a.jsx("th",{})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.yellow,children:"Θ(n)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.green,children:"O(1)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.green,children:"Θ(1)"}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.gray,children:"N/A"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]})]})})})]})})}function r1(){return a.jsx("section",{id:"bigo-sorting-algorithms-table",children:a.jsxs("div",{className:g.container,children:[a.jsx("h3",{children:"Array Sorting Algorithms"}),a.jsx("div",{className:g.tableWrapper,children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Algorithm"}),a.jsx("th",{colSpan:3,children:"Time Complexity"}),a.jsx("th",{children:"Space Complexity"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{children:"Best"}),a.jsx("th",{children:"Average"}),a.jsx("th",{children:"Worst"}),a.jsx("th",{children:"Worst"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.oliveGreen,children:"O(log(n))"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),a.jsx("td",{className:g.yellow,children:"Ω(n)"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),a.jsx("td",{className:g.yellow,children:"Ω(n)"}),a.jsx("td",{className:g.red,children:"Θ(n^2)"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),a.jsx("td",{className:g.yellow,children:"Ω(n)"}),a.jsx("td",{className:g.red,children:"Θ(n^2)"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),a.jsx("td",{className:g.red,children:"Ω(n^2)"}),a.jsx("td",{className:g.red,children:"Θ(n^2)"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),a.jsx("td",{className:g.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:g.red,children:"Θ(n(log(n))^2)"}),a.jsx("td",{className:g.red,children:"O(n(log(n))^2)"}),a.jsx("td",{className:g.green,children:"O(1)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),a.jsx("td",{className:g.green,children:"Ω(n+k)"}),a.jsx("td",{className:g.green,children:"Θ(n+k)"}),a.jsx("td",{className:g.red,children:"O(n^2)"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),a.jsx("td",{className:g.green,children:"Ω(nk)"}),a.jsx("td",{className:g.green,children:"Θ(nk)"}),a.jsx("td",{className:g.green,children:"O(nk)"}),a.jsx("td",{className:g.yellow,children:"O(n+k)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),a.jsx("td",{className:g.green,children:"Ω(n+k)"}),a.jsx("td",{className:g.green,children:"Θ(n+k)"}),a.jsx("td",{className:g.green,children:"O(n+k)"}),a.jsx("td",{className:g.yellow,children:"O(k)"})]}),a.jsxs("tr",{className:g.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),a.jsx("td",{className:g.yellow,children:"Ω(n)"}),a.jsx("td",{className:g.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:g.orange,children:"O(n log(n))"}),a.jsx("td",{className:g.yellow,children:"O(n)"})]})]})})})]})})}function e1(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Big O"}),a.jsx($b,{}),a.jsx(n1,{}),a.jsx(r1,{})]})}const t1="_container_12crg_1",a1="_buttonContainer_12crg_12",i1="_tabButtonContainer_12crg_18",l1="_tabButton_12crg_18",cs={container:t1,buttonContainer:a1,tabButtonContainer:i1,tabButton:l1},s1="_code_1qx6e_1",c1="_line_1qx6e_13",Dh={code:s1,line:c1};function u1(o){const y=o.regex,x=o.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",E="[a-zA-Z_]\\w*::",B="(?!struct)("+d+"|"+y.optional(E)+"[a-zA-Z_]\\w*"+y.optional("<[^<>]+>")+")",K={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},T={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[o.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},o.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},U={className:"number",variants:[{begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},O={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},o.inherit(T,{className:"string"}),{className:"string",begin:/<.*?>/},x,o.C_BLOCK_COMMENT_MODE]},z={className:"title",begin:y.optional(E)+o.IDENT_RE,relevance:0},J=y.optional(E)+o.IDENT_RE+"\\s*\\(",tn=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],F=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],Sn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],An=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],on={type:F,keyword:tn,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:Sn},Bn={className:"function.dispatch",relevance:0,keywords:{_hint:An},begin:y.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,o.IDENT_RE,y.lookahead(/(<[^<>]+>|)\s*\(/))},yn=[Bn,O,K,x,o.C_BLOCK_COMMENT_MODE,U,T],fn={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:on,contains:yn.concat([{begin:/\(/,end:/\)/,keywords:on,contains:yn.concat(["self"]),relevance:0}]),relevance:0},Jn={className:"function",begin:"("+B+"[\\*&\\s]+)+"+J,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:on,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:on,relevance:0},{begin:J,returnBegin:!0,contains:[z],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[T,U]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:on,relevance:0,contains:[x,o.C_BLOCK_COMMENT_MODE,T,U,K,{begin:/\(/,end:/\)/,keywords:on,relevance:0,contains:["self",x,o.C_BLOCK_COMMENT_MODE,T,U,K]}]},K,x,o.C_BLOCK_COMMENT_MODE,O]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:on,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(fn,Jn,Bn,yn,[O,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:on,contains:["self",K]},{begin:o.IDENT_RE+"::",keywords:on},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}var Ru,Lh;function o1(){if(Lh)return Ru;Lh=1;function o(h){return h instanceof Map?h.clear=h.delete=h.set=function(){throw new Error("map is read-only")}:h instanceof Set&&(h.add=h.clear=h.delete=function(){throw new Error("set is read-only")}),Object.freeze(h),Object.getOwnPropertyNames(h).forEach(M=>{const Y=h[M],dn=typeof Y;(dn==="object"||dn==="function")&&!Object.isFrozen(Y)&&o(Y)}),h}class y{constructor(M){M.data===void 0&&(M.data={}),this.data=M.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function x(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(h,...M){const Y=Object.create(null);for(const dn in h)Y[dn]=h[dn];return M.forEach(function(dn){for(const Wn in dn)Y[Wn]=dn[Wn]}),Y}const E="</span>",L=h=>!!h.scope,B=(h,{prefix:M})=>{if(h.startsWith("language:"))return h.replace("language:","language-");if(h.includes(".")){const Y=h.split(".");return[`${M}${Y.shift()}`,...Y.map((dn,Wn)=>`${dn}${"_".repeat(Wn+1)}`)].join(" ")}return`${M}${h}`};class K{constructor(M,Y){this.buffer="",this.classPrefix=Y.classPrefix,M.walk(this)}addText(M){this.buffer+=x(M)}openNode(M){if(!L(M))return;const Y=B(M.scope,{prefix:this.classPrefix});this.span(Y)}closeNode(M){L(M)&&(this.buffer+=E)}value(){return this.buffer}span(M){this.buffer+=`<span class="${M}">`}}const D=(h={})=>{const M={children:[]};return Object.assign(M,h),M};class T{constructor(){this.rootNode=D(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(M){this.top.children.push(M)}openNode(M){const Y=D({scope:M});this.add(Y),this.stack.push(Y)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(M){return this.constructor._walk(M,this.rootNode)}static _walk(M,Y){return typeof Y=="string"?M.addText(Y):Y.children&&(M.openNode(Y),Y.children.forEach(dn=>this._walk(M,dn)),M.closeNode(Y)),M}static _collapse(M){typeof M!="string"&&M.children&&(M.children.every(Y=>typeof Y=="string")?M.children=[M.children.join("")]:M.children.forEach(Y=>{T._collapse(Y)}))}}class U extends T{constructor(M){super(),this.options=M}addText(M){M!==""&&this.add(M)}startScope(M){this.openNode(M)}endScope(){this.closeNode()}__addSublanguage(M,Y){const dn=M.root;Y&&(dn.scope=`language:${Y}`),this.add(dn)}toHTML(){return new K(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function O(h){return h?typeof h=="string"?h:h.source:null}function z(h){return F("(?=",h,")")}function J(h){return F("(?:",h,")*")}function tn(h){return F("(?:",h,")?")}function F(...h){return h.map(Y=>O(Y)).join("")}function Sn(h){const M=h[h.length-1];return typeof M=="object"&&M.constructor===Object?(h.splice(h.length-1,1),M):{}}function An(...h){return"("+(Sn(h).capture?"":"?:")+h.map(dn=>O(dn)).join("|")+")"}function vn(h){return new RegExp(h.toString()+"|").exec("").length-1}function an(h,M){const Y=h&&h.exec(M);return Y&&Y.index===0}const on=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Bn(h,{joinWith:M}){let Y=0;return h.map(dn=>{Y+=1;const Wn=Y;let Xn=O(dn),W="";for(;Xn.length>0;){const X=on.exec(Xn);if(!X){W+=Xn;break}W+=Xn.substring(0,X.index),Xn=Xn.substring(X.index+X[0].length),X[0][0]==="\\"&&X[1]?W+="\\"+String(Number(X[1])+Wn):(W+=X[0],X[0]==="("&&Y++)}return W}).map(dn=>`(${dn})`).join(M)}const yn=/\b\B/,fn="[a-zA-Z]\\w*",Jn="[a-zA-Z_]\\w*",hr="\\b\\d+(\\.\\d+)?",Sr="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",gr="\\b(0b[01]+)",tr="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Dr=(h={})=>{const M=/^#![ ]*\//;return h.binary&&(h.begin=F(M,/.*\b/,h.binary,/\b.*/)),d({scope:"meta",begin:M,end:/$/,relevance:0,"on:begin":(Y,dn)=>{Y.index!==0&&dn.ignoreMatch()}},h)},lr={begin:"\\\\[\\s\\S]",relevance:0},jr={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[lr]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[lr]},q={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Q=function(h,M,Y={}){const dn=d({scope:"comment",begin:h,end:M,contains:[]},Y);dn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Wn=An("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return dn.contains.push({begin:F(/[ ]+/,"(",Wn,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),dn},_n=Q("//","$"),Tn=Q("/\\*","\\*/"),p=Q("#","$"),w={scope:"number",begin:hr,relevance:0},G={scope:"number",begin:Sr,relevance:0},Z={scope:"number",begin:gr,relevance:0},ln={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[lr,{begin:/\[/,end:/\]/,relevance:0,contains:[lr]}]},mn={scope:"title",begin:fn,relevance:0},hn={scope:"title",begin:Jn,relevance:0},Rn={begin:"\\.\\s*"+Jn,relevance:0};var Fr=Object.freeze({__proto__:null,APOS_STRING_MODE:jr,BACKSLASH_ESCAPE:lr,BINARY_NUMBER_MODE:Z,BINARY_NUMBER_RE:gr,COMMENT:Q,C_BLOCK_COMMENT_MODE:Tn,C_LINE_COMMENT_MODE:_n,C_NUMBER_MODE:G,C_NUMBER_RE:Sr,END_SAME_AS_BEGIN:function(h){return Object.assign(h,{"on:begin":(M,Y)=>{Y.data._beginMatch=M[1]},"on:end":(M,Y)=>{Y.data._beginMatch!==M[1]&&Y.ignoreMatch()}})},HASH_COMMENT_MODE:p,IDENT_RE:fn,MATCH_NOTHING_RE:yn,METHOD_GUARD:Rn,NUMBER_MODE:w,NUMBER_RE:hr,PHRASAL_WORDS_MODE:q,QUOTE_STRING_MODE:N,REGEXP_MODE:ln,RE_STARTERS_RE:tr,SHEBANG:Dr,TITLE_MODE:mn,UNDERSCORE_IDENT_RE:Jn,UNDERSCORE_TITLE_MODE:hn});function ve(h,M){h.input[h.index-1]==="."&&M.ignoreMatch()}function Tt(h,M){h.className!==void 0&&(h.scope=h.className,delete h.className)}function St(h,M){M&&h.beginKeywords&&(h.begin="\\b("+h.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",h.__beforeBegin=ve,h.keywords=h.keywords||h.beginKeywords,delete h.beginKeywords,h.relevance===void 0&&(h.relevance=0))}function pe(h,M){Array.isArray(h.illegal)&&(h.illegal=An(...h.illegal))}function Ba(h,M){if(h.match){if(h.begin||h.end)throw new Error("begin & end are not supported with match");h.begin=h.match,delete h.match}}function Ua(h,M){h.relevance===void 0&&(h.relevance=1)}const fs=(h,M)=>{if(!h.beforeMatch)return;if(h.starts)throw new Error("beforeMatch cannot be used with starts");const Y=Object.assign({},h);Object.keys(h).forEach(dn=>{delete h[dn]}),h.keywords=Y.keywords,h.begin=F(Y.beforeMatch,z(Y.begin)),h.starts={relevance:0,contains:[Object.assign(Y,{endsParent:!0})]},h.relevance=0,delete Y.beforeMatch},Ui=["of","and","for","in","not","or","if","then","parent","list","value"],Ha="keyword";function Ft(h,M,Y=Ha){const dn=Object.create(null);return typeof h=="string"?Wn(Y,h.split(" ")):Array.isArray(h)?Wn(Y,h):Object.keys(h).forEach(function(Xn){Object.assign(dn,Ft(h[Xn],M,Xn))}),dn;function Wn(Xn,W){M&&(W=W.map(X=>X.toLowerCase())),W.forEach(function(X){const un=X.split("|");dn[un[0]]=[Xn,qa(un[0],un[1])]})}}function qa(h,M){return M?Number(M):hs(h)?0:1}function hs(h){return Ui.includes(h.toLowerCase())}const Hi={},sr=h=>{console.error(h)},qi=(h,...M)=>{console.log(`WARN: ${h}`,...M)},Ae=(h,M)=>{Hi[`${h}/${M}`]||(console.log(`Deprecated as of ${h}. ${M}`),Hi[`${h}/${M}`]=!0)},jt=new Error;function Nt(h,M,{key:Y}){let dn=0;const Wn=h[Y],Xn={},W={};for(let X=1;X<=M.length;X++)W[X+dn]=Wn[X],Xn[X+dn]=!0,dn+=vn(M[X-1]);h[Y]=W,h[Y]._emit=Xn,h[Y]._multi=!0}function gs(h){if(Array.isArray(h.begin)){if(h.skip||h.excludeBegin||h.returnBegin)throw sr("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),jt;if(typeof h.beginScope!="object"||h.beginScope===null)throw sr("beginScope must be object"),jt;Nt(h,h.begin,{key:"beginScope"}),h.begin=Bn(h.begin,{joinWith:""})}}function Gi(h){if(Array.isArray(h.end)){if(h.skip||h.excludeEnd||h.returnEnd)throw sr("skip, excludeEnd, returnEnd not compatible with endScope: {}"),jt;if(typeof h.endScope!="object"||h.endScope===null)throw sr("endScope must be object"),jt;Nt(h,h.end,{key:"endScope"}),h.end=Bn(h.end,{joinWith:""})}}function ps(h){h.scope&&typeof h.scope=="object"&&h.scope!==null&&(h.beginScope=h.scope,delete h.scope)}function ms(h){ps(h),typeof h.beginScope=="string"&&(h.beginScope={_wrap:h.beginScope}),typeof h.endScope=="string"&&(h.endScope={_wrap:h.endScope}),gs(h),Gi(h)}function Et(h){function M(W,X){return new RegExp(O(W),"m"+(h.case_insensitive?"i":"")+(h.unicodeRegex?"u":"")+(X?"g":""))}class Y{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(X,un){un.position=this.position++,this.matchIndexes[this.matchAt]=un,this.regexes.push([un,X]),this.matchAt+=vn(X)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const X=this.regexes.map(un=>un[1]);this.matcherRe=M(Bn(X,{joinWith:"|"}),!0),this.lastIndex=0}exec(X){this.matcherRe.lastIndex=this.lastIndex;const un=this.matcherRe.exec(X);if(!un)return null;const cr=un.findIndex((Oe,Pt)=>Pt>0&&Oe!==void 0),nr=this.matchIndexes[cr];return un.splice(0,cr),Object.assign(un,nr)}}class dn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(X){if(this.multiRegexes[X])return this.multiRegexes[X];const un=new Y;return this.rules.slice(X).forEach(([cr,nr])=>un.addRule(cr,nr)),un.compile(),this.multiRegexes[X]=un,un}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(X,un){this.rules.push([X,un]),un.type==="begin"&&this.count++}exec(X){const un=this.getMatcher(this.regexIndex);un.lastIndex=this.lastIndex;let cr=un.exec(X);if(this.resumingScanAtSamePosition()&&!(cr&&cr.index===this.lastIndex)){const nr=this.getMatcher(0);nr.lastIndex=this.lastIndex+1,cr=nr.exec(X)}return cr&&(this.regexIndex+=cr.position+1,this.regexIndex===this.count&&this.considerAll()),cr}}function Wn(W){const X=new dn;return W.contains.forEach(un=>X.addRule(un.begin,{rule:un,type:"begin"})),W.terminatorEnd&&X.addRule(W.terminatorEnd,{type:"end"}),W.illegal&&X.addRule(W.illegal,{type:"illegal"}),X}function Xn(W,X){const un=W;if(W.isCompiled)return un;[Tt,Ba,ms,fs].forEach(nr=>nr(W,X)),h.compilerExtensions.forEach(nr=>nr(W,X)),W.__beforeBegin=null,[St,pe,Ua].forEach(nr=>nr(W,X)),W.isCompiled=!0;let cr=null;return typeof W.keywords=="object"&&W.keywords.$pattern&&(W.keywords=Object.assign({},W.keywords),cr=W.keywords.$pattern,delete W.keywords.$pattern),cr=cr||/\w+/,W.keywords&&(W.keywords=Ft(W.keywords,h.case_insensitive)),un.keywordPatternRe=M(cr,!0),X&&(W.begin||(W.begin=/\B|\b/),un.beginRe=M(un.begin),!W.end&&!W.endsWithParent&&(W.end=/\B|\b/),W.end&&(un.endRe=M(un.end)),un.terminatorEnd=O(un.end)||"",W.endsWithParent&&X.terminatorEnd&&(un.terminatorEnd+=(W.end?"|":"")+X.terminatorEnd)),W.illegal&&(un.illegalRe=M(W.illegal)),W.contains||(W.contains=[]),W.contains=[].concat(...W.contains.map(function(nr){return _e(nr==="self"?W:nr)})),W.contains.forEach(function(nr){Xn(nr,un)}),W.starts&&Xn(W.starts,X),un.matcher=Wn(un),un}if(h.compilerExtensions||(h.compilerExtensions=[]),h.contains&&h.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return h.classNameAliases=d(h.classNameAliases||{}),Xn(h)}function Mr(h){return h?h.endsWithParent||Mr(h.starts):!1}function _e(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(M){return d(h,{variants:null},M)})),h.cachedVariants?h.cachedVariants:Mr(h)?d(h,{starts:h.starts?d(h.starts):null}):Object.isFrozen(h)?d(h):h}var Lr="11.11.1";class bs extends Error{constructor(M,Y){super(M),this.name="HTMLInjectionError",this.html=Y}}const Ga=x,Yi=d,At=Symbol("nomatch"),Wt=7,Ot=function(h){const M=Object.create(null),Y=Object.create(null),dn=[];let Wn=!0;const Xn="Could not find the language '{}', did you forget to load/include a language module?",W={disableAutodetect:!0,name:"Plain text",contains:[]};let X={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:U};function un(C){return X.noHighlightRe.test(C)}function cr(C){let rn=C.className+" ";rn+=C.parentNode?C.parentNode.className:"";const jn=X.languageDetectRe.exec(rn);if(jn){const Hn=Cr(jn[1]);return Hn||(qi(Xn.replace("{}",jn[1])),qi("Falling back to no-highlight mode for this block.",C)),Hn?jn[1]:"no-highlight"}return rn.split(/\s+/).find(Hn=>un(Hn)||Cr(Hn))}function nr(C,rn,jn){let Hn="",or="";typeof rn=="object"?(Hn=C,jn=rn.ignoreIllegals,or=rn.language):(Ae("10.7.0","highlight(lang, code, ...args) has been deprecated."),Ae("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),or=C,Hn=rn),jn===void 0&&(jn=!0);const Rr={code:Hn,language:or};Mt("before:highlight",Rr);const Wr=Rr.result?Rr.result:Oe(Rr.language,Rr.code,jn);return Wr.code=Rr.code,Mt("after:highlight",Wr),Wr}function Oe(C,rn,jn,Hn){const or=Object.create(null);function Rr(H,P){return H.keywords[P]}function Wr(){if(!cn.keywords){mr.addText(qn);return}let H=0;cn.keywordPatternRe.lastIndex=0;let P=cn.keywordPatternRe.exec(qn),pn="";for(;P;){pn+=qn.substring(H,P.index);const On=Nr.case_insensitive?P[0].toLowerCase():P[0],er=Rr(cn,On);if(er){const[le,Xa]=er;if(mr.addText(pn),pn="",or[On]=(or[On]||0)+1,or[On]<=Wt&&(We+=Xa),le.startsWith("_"))pn+=P[0];else{const Ii=Nr.classNameAliases[le]||le;Pr(P[0],Ii)}}else pn+=P[0];H=cn.keywordPatternRe.lastIndex,P=cn.keywordPatternRe.exec(qn)}pn+=qn.substring(H),mr.addText(pn)}function Gr(){if(qn==="")return;let H=null;if(typeof cn.subLanguage=="string"){if(!M[cn.subLanguage]){mr.addText(qn);return}H=Oe(cn.subLanguage,qn,!0,Zi[cn.subLanguage]),Zi[cn.subLanguage]=H._top}else H=$t(qn,cn.subLanguage.length?cn.subLanguage:null);cn.relevance>0&&(We+=H.relevance),mr.__addSublanguage(H._emitter,H.language)}function Fn(){cn.subLanguage!=null?Gr():Wr(),qn=""}function Pr(H,P){H!==""&&(mr.startScope(P),mr.addText(H),mr.endScope())}function Ji(H,P){let pn=1;const On=P.length-1;for(;pn<=On;){if(!H._emit[pn]){pn++;continue}const er=Nr.classNameAliases[H[pn]]||H[pn],le=P[pn];er?Pr(le,er):(qn=le,Wr(),qn=""),pn++}}function ra(H,P){return H.scope&&typeof H.scope=="string"&&mr.openNode(Nr.classNameAliases[H.scope]||H.scope),H.beginScope&&(H.beginScope._wrap?(Pr(qn,Nr.classNameAliases[H.beginScope._wrap]||H.beginScope._wrap),qn=""):H.beginScope._multi&&(Ji(H.beginScope,P),qn="")),cn=Object.create(H,{parent:{value:cn}}),cn}function Qa(H,P,pn){let On=an(H.endRe,pn);if(On){if(H["on:end"]){const er=new y(H);H["on:end"](P,er),er.isMatchIgnored&&(On=!1)}if(On){for(;H.endsParent&&H.parent;)H=H.parent;return H}}if(H.endsWithParent)return Qa(H.parent,P,pn)}function ea(H){return cn.matcher.regexIndex===0?(qn+=H[0],1):(Pe=!0,0)}function ys(H){const P=H[0],pn=H.rule,On=new y(pn),er=[pn.__beforeBegin,pn["on:begin"]];for(const le of er)if(le&&(le(H,On),On.isMatchIgnored))return ea(P);return pn.skip?qn+=P:(pn.excludeBegin&&(qn+=P),Fn(),!pn.returnBegin&&!pn.excludeBegin&&(qn=P)),ra(pn,H),pn.returnBegin?0:P.length}function Yr(H){const P=H[0],pn=rn.substring(H.index),On=Qa(cn,H,pn);if(!On)return At;const er=cn;cn.endScope&&cn.endScope._wrap?(Fn(),Pr(P,cn.endScope._wrap)):cn.endScope&&cn.endScope._multi?(Fn(),Ji(cn.endScope,H)):er.skip?qn+=P:(er.returnEnd||er.excludeEnd||(qn+=P),Fn(),er.excludeEnd&&(qn=P));do cn.scope&&mr.closeNode(),!cn.skip&&!cn.subLanguage&&(We+=cn.relevance),cn=cn.parent;while(cn!==On.parent);return On.starts&&ra(On.starts,H),er.returnEnd?0:P.length}function Ka(){const H=[];for(let P=cn;P!==Nr;P=P.parent)P.scope&&H.unshift(P.scope);H.forEach(P=>mr.openNode(P))}let kt={};function ta(H,P){const pn=P&&P[0];if(qn+=H,pn==null)return Fn(),0;if(kt.type==="begin"&&P.type==="end"&&kt.index===P.index&&pn===""){if(qn+=rn.slice(P.index,P.index+1),!Wn){const On=new Error(`0 width match regex (${C})`);throw On.languageName=C,On.badRule=kt.rule,On}return 1}if(kt=P,P.type==="begin")return ys(P);if(P.type==="illegal"&&!jn){const On=new Error('Illegal lexeme "'+pn+'" for mode "'+(cn.scope||"<unnamed>")+'"');throw On.mode=cn,On}else if(P.type==="end"){const On=Yr(P);if(On!==At)return On}if(P.type==="illegal"&&pn==="")return qn+=`
`,1;if(Ja>1e5&&Ja>P.index*3)throw new Error("potential infinite loop, way more iterations than matches");return qn+=pn,pn.length}const Nr=Cr(C);if(!Nr)throw sr(Xn.replace("{}",C)),new Error('Unknown language: "'+C+'"');const Xi=Et(Nr);let aa="",cn=Hn||Xi;const Zi={},mr=new X.__emitter(X);Ka();let qn="",We=0,ke=0,Ja=0,Pe=!1;try{if(Nr.__emitTokens)Nr.__emitTokens(rn,mr);else{for(cn.matcher.considerAll();;){Ja++,Pe?Pe=!1:cn.matcher.considerAll(),cn.matcher.lastIndex=ke;const H=cn.matcher.exec(rn);if(!H)break;const P=rn.substring(ke,H.index),pn=ta(P,H);ke=H.index+pn}ta(rn.substring(ke))}return mr.finalize(),aa=mr.toHTML(),{language:C,value:aa,relevance:We,illegal:!1,_emitter:mr,_top:cn}}catch(H){if(H.message&&H.message.includes("Illegal"))return{language:C,value:Ga(rn),illegal:!0,relevance:0,_illegalBy:{message:H.message,index:ke,context:rn.slice(ke-100,ke+100),mode:H.mode,resultSoFar:aa},_emitter:mr};if(Wn)return{language:C,value:Ga(rn),illegal:!1,relevance:0,errorRaised:H,_emitter:mr,_top:cn};throw H}}function Pt(C){const rn={value:Ga(C),illegal:!1,relevance:0,_top:W,_emitter:new X.__emitter(X)};return rn._emitter.addText(C),rn}function $t(C,rn){rn=rn||X.languages||Object.keys(M);const jn=Pt(C),Hn=rn.filter(Cr).filter(Ie).map(Fn=>Oe(Fn,C,!1));Hn.unshift(jn);const or=Hn.sort((Fn,Pr)=>{if(Fn.relevance!==Pr.relevance)return Pr.relevance-Fn.relevance;if(Fn.language&&Pr.language){if(Cr(Fn.language).supersetOf===Pr.language)return 1;if(Cr(Pr.language).supersetOf===Fn.language)return-1}return 0}),[Rr,Wr]=or,Gr=Rr;return Gr.secondBest=Wr,Gr}function Te(C,rn,jn){const Hn=rn&&Y[rn]||jn;C.classList.add("hljs"),C.classList.add(`language-${Hn}`)}function ur(C){let rn=null;const jn=cr(C);if(un(jn))return;if(Mt("before:highlightElement",{el:C,language:jn}),C.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",C);return}if(C.children.length>0&&(X.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(C)),X.throwUnescapedHTML))throw new bs("One of your code blocks includes unescaped HTML.",C.innerHTML);rn=C;const Hn=rn.textContent,or=jn?nr(Hn,{language:jn,ignoreIllegals:!0}):$t(Hn);C.innerHTML=or.value,C.dataset.highlighted="yes",Te(C,jn,or.language),C.result={language:or.language,re:or.relevance,relevance:or.relevance},or.secondBest&&(C.secondBest={language:or.secondBest.language,relevance:or.secondBest.relevance}),Mt("after:highlightElement",{el:C,result:or,text:Hn})}function kr(C){X=Yi(X,C)}const Ze=()=>{na(),Ae("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ya(){na(),Ae("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Vi=!1;function na(){function C(){na()}if(document.readyState==="loading"){Vi||window.addEventListener("DOMContentLoaded",C,!1),Vi=!0;return}document.querySelectorAll(X.cssSelector).forEach(ur)}function Qi(C,rn){let jn=null;try{jn=rn(h)}catch(Hn){if(sr("Language definition for '{}' could not be registered.".replace("{}",C)),Wn)sr(Hn);else throw Hn;jn=W}jn.name||(jn.name=C),M[C]=jn,jn.rawDefinition=rn.bind(null,h),jn.aliases&&we(jn.aliases,{languageName:C})}function wt(C){delete M[C];for(const rn of Object.keys(Y))Y[rn]===C&&delete Y[rn]}function Va(){return Object.keys(M)}function Cr(C){return C=(C||"").toLowerCase(),M[C]||M[Y[C]]}function we(C,{languageName:rn}){typeof C=="string"&&(C=[C]),C.forEach(jn=>{Y[jn.toLowerCase()]=rn})}function Ie(C){const rn=Cr(C);return rn&&!rn.disableAutodetect}function Fe(C){C["before:highlightBlock"]&&!C["before:highlightElement"]&&(C["before:highlightElement"]=rn=>{C["before:highlightBlock"](Object.assign({block:rn.el},rn))}),C["after:highlightBlock"]&&!C["after:highlightElement"]&&(C["after:highlightElement"]=rn=>{C["after:highlightBlock"](Object.assign({block:rn.el},rn))})}function pr(C){Fe(C),dn.push(C)}function Ki(C){const rn=dn.indexOf(C);rn!==-1&&dn.splice(rn,1)}function Mt(C,rn){const jn=C;dn.forEach(function(Hn){Hn[jn]&&Hn[jn](rn)})}function Me(C){return Ae("10.7.0","highlightBlock will be removed entirely in v12.0"),Ae("10.7.0","Please use highlightElement now."),ur(C)}Object.assign(h,{highlight:nr,highlightAuto:$t,highlightAll:na,highlightElement:ur,highlightBlock:Me,configure:kr,initHighlighting:Ze,initHighlightingOnLoad:Ya,registerLanguage:Qi,unregisterLanguage:wt,listLanguages:Va,getLanguage:Cr,registerAliases:we,autoDetection:Ie,inherit:Yi,addPlugin:pr,removePlugin:Ki}),h.debugMode=function(){Wn=!1},h.safeMode=function(){Wn=!0},h.versionString=Lr,h.regex={concat:F,lookahead:z,either:An,optional:tn,anyNumberOfTimes:J};for(const C in Fr)typeof Fr[C]=="object"&&o(Fr[C]);return Object.assign(h,Fr),h},qr=Ot({});return qr.newInstance=()=>Ot({}),Ru=qr,qr.HighlightJS=qr,qr.default=qr,Ru}var d1=o1();const Ca=La(d1);var Da="[0-9](_*[0-9])*",us=`\\.(${Da})`,os="[0-9a-fA-F](_*[0-9a-fA-F])*",Ch={className:"number",variants:[{begin:`(\\b(${Da})((${us})|\\.)?|(${us}))[eE][+-]?(${Da})[fFdD]?\\b`},{begin:`\\b(${Da})((${us})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${us})[fFdD]?\\b`},{begin:`\\b(${Da})[fFdD]\\b`},{begin:`\\b0[xX]((${os})\\.?|(${os})?\\.(${os}))[pP][+-]?(${Da})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${os})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function Zh(o,y,x){return x===-1?"":o.replace(y,d=>Zh(o,y,x-1))}function f1(o){const y=o.regex,x="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d=x+Zh("(?:<"+x+"~~~(?:\\s*,\\s*"+x+"~~~)*>)?",/~~~/g,2),D={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},T={className:"meta",begin:"@"+x,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},U={className:"params",begin:/\(/,end:/\)/,keywords:D,relevance:0,contains:[o.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:D,illegal:/<\/|#/,contains:[o.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[o.BACKSLASH_ESCAPE]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,x],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[y.concat(/(?!else)/,x),/\s+/,x,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,x],className:{1:"keyword",3:"title.class"},contains:[U,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+d+"\\s+)",o.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:D,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:D,relevance:0,contains:[T,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,Ch,o.C_BLOCK_COMMENT_MODE]},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},Ch,T]}}function h1(o){const y=o.regex,x="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",d=y.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),E=y.concat(d,/(::\w+)*/),B={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},K={className:"doctag",begin:"@[A-Za-z]+"},D={begin:"#<",end:">"},T=[o.COMMENT("#","$",{contains:[K]}),o.COMMENT("^=begin","^=end",{contains:[K],relevance:10}),o.COMMENT("^__END__",o.MATCH_NOTHING_RE)],U={className:"subst",begin:/#\{/,end:/\}/,keywords:B},O={className:"string",contains:[o.BACKSLASH_ESCAPE,U],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:y.concat(/<<[-~]?'?/,y.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[o.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[o.BACKSLASH_ESCAPE,U]})]}]},z="[1-9](_?[0-9])*|0",J="[0-9](_?[0-9])*",tn={className:"number",relevance:0,variants:[{begin:`\\b(${z})(\\.(${J}))?([eE][+-]?(${J})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},F={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:B}]},yn=[O,{variants:[{match:[/class\s+/,E,/\s+<\s+/,E]},{match:[/\b(class|module)\s+/,E]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:B},{match:[/(include|extend)\s+/,E],scope:{2:"title.class"},keywords:B},{relevance:0,match:[E,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:d,scope:"title.class"},{match:[/def/,/\s+/,x],scope:{1:"keyword",3:"title.function"},contains:[F]},{begin:o.IDENT_RE+"::"},{className:"symbol",begin:o.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[O,{begin:x}],relevance:0},tn,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|(?!=)/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:B},{begin:"("+o.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[o.BACKSLASH_ESCAPE,U],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(D,T),relevance:0}].concat(D,T);U.contains=yn,F.contains=yn;const Sr=[{begin:/^\s*=>/,starts:{end:"$",contains:yn}},{className:"meta.prompt",begin:"^("+"[>?]>"+"|"+"[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]"+"|"+"(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>"+")(?=[ ])",starts:{end:"$",keywords:B,contains:yn}}];return T.unshift(D),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:B,illegal:/\/\*/,contains:[o.SHEBANG({binary:"ruby"})].concat(Sr).concat(T).concat(yn)}}const Bh="[A-Za-z$_][0-9A-Za-z$_]*",g1=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],p1=["true","false","null","undefined","NaN","Infinity"],Ih=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Fh=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Wh=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],m1=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],b1=[].concat(Wh,Ih,Fh);function y1(o){const y=o.regex,x=(Q,{after:_n})=>{const Tn="</"+Q[0].slice(1);return Q.input.indexOf(Tn,_n)!==-1},d=Bh,E={begin:"<>",end:"</>"},L=/<[A-Za-z0-9\\._:-]+\s*\/>/,B={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(Q,_n)=>{const Tn=Q[0].length+Q.index,p=Q.input[Tn];if(p==="<"||p===","){_n.ignoreMatch();return}p===">"&&(x(Q,{after:Tn})||_n.ignoreMatch());let w;const G=Q.input.substring(Tn);if(w=G.match(/^\s*=/)){_n.ignoreMatch();return}if((w=G.match(/^\s+extends\s+/))&&w.index===0){_n.ignoreMatch();return}}},K={$pattern:Bh,keyword:g1,literal:p1,built_in:b1,"variable.language":m1},D="[0-9](_?[0-9])*",T=`\\.(${D})`,U="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",O={className:"number",variants:[{begin:`(\\b(${U})((${T})|\\.)?|(${T}))[eE][+-]?(${D})\\b`},{begin:`\\b(${U})\\b((${T})\\b|\\.)?|(${T})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},z={className:"subst",begin:"\\$\\{",end:"\\}",keywords:K,contains:[]},J={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,z],subLanguage:"xml"}},tn={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,z],subLanguage:"css"}},F={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,z],subLanguage:"graphql"}},Sn={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,z]},vn={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},an=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,J,tn,F,Sn,{match:/\$\d+/},O];z.contains=an.concat({begin:/\{/,end:/\}/,keywords:K,contains:["self"].concat(an)});const on=[].concat(vn,z.contains),Bn=on.concat([{begin:/(\s*)\(/,end:/\)/,keywords:K,contains:["self"].concat(on)}]),yn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:K,contains:Bn},fn={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,y.concat(d,"(",y.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},Jn={relevance:0,match:y.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ih,...Fh]}},hr={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Sr={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[yn],illegal:/%/},gr={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function tr(Q){return y.concat("(?!",Q.join("|"),")")}const Dr={match:y.concat(/\b/,tr([...Wh,"super","import"].map(Q=>`${Q}\\s*\\(`)),d,y.lookahead(/\s*\(/)),className:"title.function",relevance:0},lr={begin:y.concat(/\./,y.lookahead(y.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},jr={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},yn]},N="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",q={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,y.lookahead(N)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[yn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:K,exports:{PARAMS_CONTAINS:Bn,CLASS_REFERENCE:Jn},illegal:/#(?![$_A-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),hr,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,J,tn,F,Sn,vn,{match:/\$\d+/},O,Jn,{scope:"attr",match:d+y.lookahead(":"),relevance:0},q,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[vn,o.REGEXP_MODE,{className:"function",begin:N,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:K,contains:Bn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E.begin,end:E.end},{match:L},{begin:B.begin,"on:begin":B.isTrulyOpeningTag,end:B.end}],subLanguage:"xml",contains:[{begin:B.begin,end:B.end,skip:!0,contains:["self"]}]}]},Sr,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[yn,o.inherit(o.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},lr,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[yn]},Dr,gr,fn,jr,{match:/\$[(.]/}]}}function x1(o){const y=o.regex,x=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],E=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,L=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],B=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],K=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],D=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...B],T=["__debug__","Ellipsis","False","None","NotImplemented","True",...K],U=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...L],O={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:D,literal:T,type:U},z={className:"meta",begin:/^(>>>|\.\.\.) /},J={className:"subst",begin:/\{/,end:/\}/,keywords:O,illegal:/#/},tn={begin:/\{\{/,relevance:0},F={className:"string",contains:[o.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,z],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,z],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,z,tn,J]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,z,tn,J]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,tn,J]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,tn,J]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},Sn="[0-9](_?[0-9])*",An=`(\\b(${Sn}))?\\.(${Sn})|\\b(${Sn})\\.`,vn=`\\b|${d.join("|")}`,an={className:"number",relevance:0,variants:[{begin:`(\\b(${Sn})|(${An}))[eE][+-]?(${Sn})[jJ]?(?=${vn})`},{begin:`(${An})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${vn})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${vn})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${vn})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${vn})`},{begin:`\\b(${Sn})[jJ](?=${vn})`}]},on={className:"comment",begin:y.lookahead(/# type:/),end:/$/,keywords:O,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Bn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:O,contains:["self",z,an,F,o.HASH_COMMENT_MODE,{scope:"params.operator",match:E},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return J.contains=[F,an,z],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:O,illegal:/(<\/|\?)|=>/,contains:[z,an,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},F,on,o.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,x],scope:{1:"keyword.def",3:"title.function"},contains:[Bn]},{variants:[{match:[/\bclass/,/\s+/,x,/\s*/,/\(\s*/,x,/\s*\)/]},{match:[/\bclass/,/\s+/,x]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[an,Bn,F]},{scope:"operator",match:E}]}}Ca.registerLanguage("python",x1);Ca.registerLanguage("javascript",y1);Ca.registerLanguage("java",f1);Ca.registerLanguage("cpp",u1);Ca.registerLanguage("ruby",h1);function v1({code:o,language:y}){const x=nn.useRef(null),[d,E]=nn.useState(""),[L,B]=nn.useState(""),K=Ir("hljs",y,Dh.code),D=()=>{if(x.current){const F=o.split(`
`).map((Sn,An)=>{const vn=Ca.highlight(Sn,{language:y}).value;return`<span class=${Dh.line} data-line-number=${An+1}>${vn}</span>`}).join("");B(F)}},T=()=>{x.current?.querySelectorAll("span[data-line-number]")?.forEach(F=>F.addEventListener("click",z))},U=()=>{x.current?.querySelectorAll("span[data-line-number]")?.forEach(F=>F.removeEventListener("click",z))},O=()=>{x.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},z=J=>{const tn=J.currentTarget,F=tn.getAttribute("data-line-number")??"";O(),F===d?E(""):(tn.setAttribute("focused",""),E(F))};return Xh(x,O),nn.useEffect(()=>(D(),T(),()=>U()),[o,L,d]),a.jsx("pre",{ref:x,children:a.jsx("code",{className:K,dangerouslySetInnerHTML:{__html:L}})})}const _1="_copyButton_1hjzm_1",T1="_copySvg_1hjzm_25",S1="_checkSvg_1hjzm_32",j1="_checkSvgPath_1hjzm_37",N1="_enter_1hjzm_48",E1="_exit_1hjzm_52",It={copyButton:_1,copySvg:T1,checkSvg:S1,checkSvgPath:j1,enter:N1,exit:E1};function A1({onClick:o}){const[y,x]=nn.useState("show"),[d,E]=nn.useState("hide"),L=Ir(It.copySvg,y==="enter"&&It.enter,y==="exit"&&It.exit),B=Ir(It.checkSvg,d==="exit"&&It.exit),K=Ir(It.checkSvgPath),D=()=>{y==="show"&&d==="hide"&&(x("exit"),o())},T=()=>{y==="enter"&&x("show"),y==="exit"&&(x("hide"),E("show"))},U=()=>{d==="show"&&setTimeout(()=>{E("exit")},500),d==="exit"&&(E("hide"),x("enter"))},O=()=>y!=="hide"&&a.jsx("svg",{className:L,viewBox:"0 0 512 512",onAnimationEnd:T,children:a.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),z=()=>d!=="hide"&&a.jsx("svg",{className:B,viewBox:"0 0 16 16",onAnimationEnd:U,children:a.jsx("path",{className:K,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return a.jsxs("button",{"aria-label":"copy button",className:It.copyButton,onClick:D,children:[O(),z()]})}function O1(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),a.jsx("stop",{offset:1,stopColor:"#306998"})]}),a.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#FFD43B"}),a.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),a.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),a.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),a.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),a.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),a.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function w1(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),a.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function M1(){return a.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[a.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),a.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),a.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),a.jsx("g",{children:a.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),a.jsx("g",{children:a.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),a.jsx("g",{children:a.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function k1(){return a.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[a.jsxs("g",{children:[a.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),a.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),a.jsxs("g",{children:[a.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),a.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),a.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),a.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),a.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),a.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}function R1(){return a.jsx("svg",{viewBox:"0 0 32 32",children:a.jsx("path",{fill:"#DB380E",d:"M9.456 27.25L28 29.782l-6.27-10.441L9.457 27.25zM29.755 7.705c-.548.823-1.097 1.645-1.644 2.468-1.879 2.827-3.758 5.654-5.635 8.482-.105.158-.24.283-.093.525 1.814 2.995 3.613 5.999 5.417 9 .285.474.572.946.941 1.401l1.094-21.852-.08-.023zm-24.76 9.338c.085.081.296.127.395.079 1.74-.855 3.491-1.691 5.192-2.617.555-.302.982-.842 1.46-1.281 1.583-1.452 3.164-2.907 4.744-4.362.097-.089.211-.176.269-.288.568-1.109 1.125-2.224 1.703-3.371-.689-.259-1.341-.512-2.002-.742-.089-.031-.231.031-.328.085-1.53.854-3.088 1.663-4.569 2.595-.741.466-1.345 1.154-2.001 1.752a263.561 263.561 0 0 0-3.156 2.915 5.385 5.385 0 0 0-.744.872c-.713 1.038-1.404 2.091-2.127 3.173.404.419.772.819 1.165 1.191zm6.358-1.418L8.738 26.672l12.286-7.916-9.671-3.13zM28.692 7.74L18.25 9.484l3.544 8.62L28.693 7.74zm-17.194 7.137l9.479 3.077a46701.83 46701.83 0 0 0-3.506-8.538l-5.973 5.461zm-6.372 4.298l-3.317 7.93 6.318-.187-3.001-7.744zm3.075 5.905l.079-.017c.758-3.154 1.528-6.287 2.303-9.565l-5.069 2.635c.864 2.246 1.785 4.615 2.688 6.947zM27.417 7.229l-3.027-.801c-1.451-.381-2.903-.758-4.353-1.143-.181-.048-.312-.08-.419.139-.512 1.05-1.041 2.092-1.561 3.138-.016.032-.013.074-.025.155l9.383-1.422.002-.066zm-5.853-2.388l8.223 2.275-1.359-3.872-6.852 1.519-.012.077zM8.899 27.856c-1.019-.117-2.064-.009-3.097.008-.849.015-1.697.047-2.545.073a.338.338 0 0 0-.262.114l21.044 1.946.014-.094-6.746-.921c-2.802-.383-5.599-.803-8.408-1.127zm-6.952-3.171c.904-2.097 1.804-4.197 2.712-6.292.091-.21.084-.353-.094-.522-.38-.361-.732-.751-1.147-1.182L1.763 24.86l.061.029c.042-.067.093-.131.124-.203zM19.763 4.287c1.524-.393 3.071-.701 4.608-1.044.099-.022.197-.055.295-.083l-.015-.075-6.606.889c.62.271 1.098.473 1.718.314z"})})}const z1={python:O1,javascript:w1,cpp:M1,java:k1,ruby:R1};function c({title:o,children:y}){const{selectedLanguage:x,setSelectedLanguage:d}=dm(),E=nn.Children.toArray(y),L=E.findIndex(O=>O.props.language===x);let B="";try{B=E[L].props.code}catch{}const K=E[L].props.language,D=O=>{d(E[O].props.language)},T=()=>navigator.clipboard.writeText(B),U=()=>E.map((O,z)=>{const J=z1[O.props.language],tn=`view ${O.props.language} code`;return a.jsx("button",{role:"tab","aria-label":tn,"aria-selected":z===L,className:cs.tabButton,onClick:()=>D(z),children:a.jsx(J,{})},z)});return a.jsxs("div",{role:"tablist",className:cs.container,children:[a.jsx("h3",{children:o}),a.jsxs("div",{className:cs.buttonContainer,children:[a.jsx("div",{role:"tablist",className:cs.tabButtonContainer,children:U()}),a.jsx(A1,{onClick:T})]}),a.jsx("div",{role:"tabpanel",className:"tabs-content",children:a.jsx(v1,{code:B,language:K})})]})}c.Tab=o=>a.jsx(a.Fragment,{children:o});const D1=`def fn(arr):\r
    ans = 0\r
    left = 0\r
    right = len(arr) - 1\r
\r
    while left < right:\r
        # TODO: logic with left and right\r
        if CONDITION:\r
            left += 1\r
        else:\r
            right -= 1\r
\r
    return ans\r
`,L1=`def fn(arr1, arr2):\r
    i = 0\r
    j = 0\r
    ans = 0\r
\r
    while i < len(arr1) and j < len(arr2):\r
        # TODO: logic\r
        if CONDITION:\r
            i += 1\r
        else:\r
            j += 1\r
\r
    while i < len(arr1):\r
        # TODO: logic\r
        i += 1\r
\r
    while j < len(arr2):\r
        # TODO: logic\r
        j += 1\r
\r
    return ans\r
`,C1=`def fn(arr):\r
    n = len(arr)\r
    window = 0\r
    left = 0\r
    ans = 0\r
\r
    for right in range(n):\r
        # TODO: add arr[right] to window\r
\r
        while WINDOW_CONDITION_BROKEN:\r
            # TODO: remove arr[left] from window\r
            left += 1\r
\r
        # TODO: update ans\r
\r
    return ans\r
`,B1=`def fn(arr):\r
    n = len(arr)\r
    prefix = [arr[0]]\r
\r
    for i in range(1, n):\r
        prefix.append(prefix[-1] + arr[i])\r
\r
    return prefix\r
`,U1=`def fn(strs: list[str]):\r
    ans = []\r
\r
    for char in strs:\r
        ans.append(char)\r
\r
    return ''.join(ans)\r
`,H1=`const fn = (arr) => {\r
    let ans = 0\r
    let left = 0\r
    let right = arr.length - 1\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++\r
        } else {\r
            right--\r
        }\r
    }\r
\r
    return ans\r
}\r
`,q1=`let fn = (arr1, arr2) => {\r
    let ans = 0\r
    let i = 0\r
    let j = 0\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++\r
        } else {\r
            j++\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        // TODO: logic\r
        i++\r
    }\r
\r
    while (j < arr2.length) {\r
        // TODO: logic\r
        j++\r
    }\r
\r
    return ans\r
}\r
`,G1=`const fn = (arr) => {\r
    let window = 0\r
    let ans = 0\r
    let left = 0\r
\r
    for (let right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans\r
}\r
`,Y1=`const fn = (arr) => {\r
    let prefix = [arr[0]]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        prefix.push(prefix[prefix.length - 1] + arr[i])\r
    }\r
\r
    return prefix\r
}\r
`,V1=`const fn = (arr) => {\r
    let ans = []\r
\r
    for (const c of arr) {\r
        ans.push(c)\r
    }\r
\r
    return ans.join('')\r
}\r
\r
const fn = (arr) => {\r
    let ans = ''\r
\r
    for (const c of arr) {\r
        ans += c\r
    }\r
\r
    return ans\r
}\r
`,Q1=`public int fn(int[] arr) {\r
    int ans = 0;\r
    int left = 0;\r
    int right = arr.length - 1;\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++;\r
        } else {\r
            right--;\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,K1=`public int fn(int[] arr1, int[] arr2) {\r
    int i = 0;\r
    int j = 0;\r
    int ans = 0;\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++;\r
        } else {\r
            j++;\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        // TODO: logic\r
        i++;\r
    }\r
\r
    while (j < arr2.length) {\r
        // TODO: logic\r
        j++;\r
    }\r
\r
    return ans;\r
}\r
`,J1=`public int fn(int[] arr) {\r
    int n = arr.length;\r
    int window = 0;\r
    int left = 0;\r
    int ans = 0;\r
\r
    for (int right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,X1=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public int[] fn(int[] arr) {\r
    int n = arr.length;\r
    int[] prefix = new int[n];\r
    prefix[0] = arr[0];\r
\r
    for (int i = 1; i < n; i++) {\r
        prefix[i] = prefix[i - 1] + arr[i];\r
    }\r
\r
    return prefix;\r
}\r
`,Z1=`public String fn(char[] strs) {\r
    StringBuilder sb = new StringBuilder();\r
\r
    for (char c: strs) {\r
        sb.append(c);\r
    }\r
\r
    return sb.toString();\r
}\r
`,I1=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    int ans = 0;\r
    int left = 0;\r
    int right = arr.size() - 1;\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++;\r
        } else {\r
            right--;\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,F1=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr1, vector<int>& arr2) {\r
    int i = 0;\r
    int j = 0;\r
    int ans = 0;\r
\r
    while (i < arr1.size() && j < arr2.size()) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++;\r
        } else {\r
            j++;\r
        }\r
    }\r
\r
    while (i < arr1.size()) {\r
        // TODO: logic\r
        i++;\r
    }\r
\r
    while (j < arr2.size()) {\r
        // TODO: logic\r
        j++;\r
    }\r
\r
    return ans;\r
}\r
`,W1=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    int n = arr.size();\r
    int window = 0;\r
    int left = 0;\r
    int ans = 0;\r
\r
    for (int right = 0; right < n; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,P1=`#include <iostream>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> fn(vector<int>& arr) {\r
    int n = arr.size();\r
    vector<int> prefix;\r
    prefix.push_back(arr[0]);\r
\r
    for (int i = 1; i < n; ++i) {\r
        prefix.push_back(prefix.back() + arr[i]);\r
    }\r
\r
    return prefix;\r
}\r
`,$1=`string fn(vector<char>& arr) {\r
    return string(arr.begin(), arr.end())\r
}\r
`,n0=`def fn(arr)\r
  ans   = 0\r
  left  = 0\r
  right = arr.length - 1\r
\r
  while left < right\r
    # TODO: logic with left and right\r
    if CONDITION\r
      left  += 1\r
    else\r
      right -= 1\r
    end\r
  end\r
\r
  ans\r
end`,r0=`def fn(arr1, arr2)\r
  i, j  = 0, 0\r
  ans   = 0\r
\r
  while i < arr1.length && j < arr2.length\r
    # TODO: Logic\r
    if CONDITION\r
      i += 1\r
    else\r
      j += 1\r
    end\r
  end\r
\r
  while i < arr1.length\r
    # TODO: Logic\r
    i += 1\r
  end\r
\r
  while j < arr2.length\r
    # TODO: Logic\r
    j += 1\r
  end\r
\r
  ans\r
end\r
`,e0=`def fn(arr)\r
  n       = arr.length\r
  window  = 0\r
  left    = 0\r
  result  = 0\r
\r
  (0...n).each do |right|\r
    # TODO: add arr[right] to window\r
\r
    while WINDOW_CONDITION_BROKEN\r
      # TODO: remove arr[left] from window\r
      left += 1\r
    end\r
\r
    # TODO: update result\r
  end\r
\r
  result\r
end\r
`,t0=`# This method computes the prefix sum of an array.\r
# It returns a new array where each element at index i is the sum of elements from index 0 to i-1 in the original array.\r
# # For example, given the array [1, 2, 3], the prefix sum array will be [1, 3, 6].\r
def prefix_sum(arr)\r
  n       = arr.length\r
  prefix  = [arr[0]]\r
\r
  (1...n).each do |i|\r
    prefix << (prefix.last + arr[i])\r
  end\r
\r
  prefix\r
end\r
`,a0=`def fn(strs)\r
  # array of strings/chrs\r
  ans = []\r
\r
  strs.each do |char|\r
    ans << char\r
  end\r
\r
  ans.join('')\r
end\r
\r
# simple\r
def fn2(strs)\r
  strs.join\r
end\r
`;function i0(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Array"}),a.jsx("section",{id:"array-two-pointers-one-input",children:a.jsxs(c,{title:"two pointers: one input, opposite ends",children:[a.jsx(c.Tab,{code:D1,language:"python"}),a.jsx(c.Tab,{code:H1,language:"javascript"}),a.jsx(c.Tab,{code:Q1,language:"java"}),a.jsx(c.Tab,{code:I1,language:"cpp"}),a.jsx(c.Tab,{code:n0,language:"ruby"})]})}),a.jsx("section",{id:"array-two-pointers-two-inputs",children:a.jsxs(c,{title:"two pointers: two inputs, exhaust both",children:[a.jsx(c.Tab,{code:L1,language:"python"}),a.jsx(c.Tab,{code:q1,language:"javascript"}),a.jsx(c.Tab,{code:K1,language:"java"}),a.jsx(c.Tab,{code:F1,language:"cpp"}),a.jsx(c.Tab,{code:r0,language:"ruby"})]})}),a.jsx("section",{id:"array-sliding-window",children:a.jsxs(c,{title:"sliding window",children:[a.jsx(c.Tab,{code:C1,language:"python"}),a.jsx(c.Tab,{code:G1,language:"javascript"}),a.jsx(c.Tab,{code:J1,language:"java"}),a.jsx(c.Tab,{code:W1,language:"cpp"}),a.jsx(c.Tab,{code:e0,language:"ruby"})]})}),a.jsx("section",{id:"array-prefix-sum",children:a.jsxs(c,{title:"prefix sum",children:[a.jsx(c.Tab,{code:B1,language:"python"}),a.jsx(c.Tab,{code:Y1,language:"javascript"}),a.jsx(c.Tab,{code:X1,language:"java"}),a.jsx(c.Tab,{code:P1,language:"cpp"}),a.jsx(c.Tab,{code:t0,language:"ruby"})]})}),a.jsx("section",{id:"array-string-building",children:a.jsxs(c,{title:"efficient string building",children:[a.jsx(c.Tab,{code:U1,language:"python"}),a.jsx(c.Tab,{code:V1,language:"javascript"}),a.jsx(c.Tab,{code:Z1,language:"java"}),a.jsx(c.Tab,{code:$1,language:"cpp"}),a.jsx(c.Tab,{code:a0,language:"ruby"})]})})]})}const l0=`from collections import defaultdict\r
\r
\r
def fn(arr, k):\r
    counts = defaultdict(int)\r
    counts[0] = 1\r
    ans = curr = 0\r
\r
    for num in arr:\r
        # TODO: logic to change curr\r
        ans += counts[curr - k]\r
        counts[curr] += 1\r
\r
    return ans\r
`,s0=`def fn(arr):\r
    window = set()\r
    ans = 0\r
    left = 0\r
\r
    for right, ELEMENT in enumerate(arr):\r
        # TODO: add arr[right] to window\r
\r
        while WINDOW_CONDITION_BROKEN:\r
            # TODO: remove arr[left] from window\r
            left += 1\r
\r
        # TODO: update ans\r
\r
    return ans\r
`,c0=`const fn = (arr, k) => {\r
    let counts = new Map()\r
    counts.set(0, 1)\r
    let ans = 0\r
    let curr = 0\r
\r
    for (const num of arr) {\r
        // TODO: logic to change curr\r
        ans += counts.get(curr - k) || 0\r
        counts.set(curr, (counts.get(curr) || 0) + 1)\r
    }\r
\r
    return ans\r
}\r
`,u0=`function fn(arr) {\r
    let window = new Set()\r
    let ans = 0\r
    let left = 0\r
\r
    for (let right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left += 1\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans\r
}\r
`,o0=`import java.util.HashMap;\r
import java.util.Map;\r
\r
\r
public int fn(int[] arr, int k) {\r
    Map<Integer, Integer> counts = new HashMap<>();\r
    counts.put(0, 1);\r
    int ans = 0;\r
    int curr = 0;\r
\r
    for (int num: arr) {\r
        // TODO: logic to change curr\r
        ans += counts.getOrDefault(curr - k, 0);\r
        counts.put(curr, counts.getOrDefault(curr, 0) + 1);\r
    }\r
\r
    return ans;\r
}\r
`,d0=`import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
public int fn(int[] arr) {\r
    Set<Integer> window = new HashSet<>();\r
    int ans = 0;\r
    int left = 0;\r
\r
    for (int right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,f0=`#include <vector>\r
#include <unordered_map>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int k) {\r
    unordered_map<int, int> counts;\r
    counts[0] = 1;\r
    int ans = 0;\r
    int curr = 0;\r
\r
    for (int num : arr) {\r
        // TODO: logic to change curr\r
        ans += counts[curr - k];\r
        counts[curr]++;\r
    }\r
\r
    return ans;\r
}\r
`,h0=`#include <vector>\r
#include <unordered_set>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    unordered_set<int> window;\r
    int ans = 0;\r
    int left = 0;\r
\r
    for (int right = 0; right < arr.size(); right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,g0=`def fn(arr, k)\r
  counts    = Hash.new(0)\r
  counts[0] = 1\r
  ans       = 0\r
  curr      = 0\r
\r
  arr.each do |num|\r
    # TODO: logic to change curr\r
    ans += counts[curr - k]\r
    counts[curr] += 1\r
  end\r
\r
  ans\r
end\r
`,p0=`require 'set'\r
\r
def fn(arr)\r
  window  = Set.new\r
  ans     = 0\r
  left    = 0\r
\r
  arr.each_with_index do |ELEMENT, right|\r
    # TODO: add arr[right] to window\r
\r
    while WINDOW_CONDITION_BROKEN\r
      # TODO: remove arr[left] from window\r
      left += 1\r
    end\r
\r
    # TODO: update ans\r
  end\r
\r
  ans\r
end\r
`;function m0(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Hash Map"}),a.jsx("section",{id:"hashmap-find-number-of-subarrays",children:a.jsxs(c,{title:"find number of subarrays that fit an exact criteria",children:[a.jsx(c.Tab,{code:l0,language:"python"}),a.jsx(c.Tab,{code:c0,language:"javascript"}),a.jsx(c.Tab,{code:o0,language:"java"}),a.jsx(c.Tab,{code:f0,language:"cpp"}),a.jsx(c.Tab,{code:g0,language:"ruby"})]})}),a.jsx("section",{id:"hashmap-sliding-window",children:a.jsxs(c,{title:"sliding window",children:[a.jsx(c.Tab,{code:s0,language:"python"}),a.jsx(c.Tab,{code:u0,language:"javascript"}),a.jsx(c.Tab,{code:d0,language:"java"}),a.jsx(c.Tab,{code:h0,language:"cpp"}),a.jsx(c.Tab,{code:p0,language:"ruby"})]})})]})}const b0=`def fn(head):\r
    slow = head\r
    fast = head\r
    ans = 0\r
\r
    while fast and fast.next:\r
        # TODO: logic\r
        slow = slow.next\r
        fast = fast.next.next\r
\r
    return ans\r
`,y0=`def fn(head):\r
    prev = None\r
    curr = head\r
\r
    while curr:\r
        nxt = curr.next\r
        curr.next = prev\r
        prev = curr\r
        curr = nxt\r
\r
    return prev\r
`,x0=`const fn = (head) => {\r
    let ans = 0\r
    let slow = head\r
    let fast = head\r
\r
    while (fast && fast.next) {\r
        // TODO: logic\r
        slow = slow.next\r
        fast = fast.next.next\r
    }\r
\r
    return ans\r
}\r
`,v0=`const fn = (head) => {\r
    let prev = null\r
    let curr = head\r
\r
    while (curr) {\r
        let next = curr.next\r
        curr.next = prev\r
        prev = curr\r
        curr = next\r
    }\r
\r
    return prev\r
}\r
`,_0=`public int fn(ListNode head) {\r
    ListNode slow = head;\r
    ListNode fast = head;\r
    int ans = 0;\r
\r
    while (fast != null && fast.next != null) {\r
        // TODO: logic\r
        slow = slow.next;\r
        fast = fast.next.next;\r
    }\r
\r
    return ans;\r
}\r
`,T0=`public ListNode fn(ListNode head) {\r
    ListNode curr = head;\r
    ListNode prev = null;\r
\r
    while (curr != null) {\r
        ListNode nextNode = curr.next;\r
        curr.next = prev;\r
        prev = curr;\r
        curr = nextNode;\r
    }\r
\r
    return prev;\r
}\r
`,S0=`int fn(ListNode* head) {\r
    ListNode* slow = head;\r
    ListNode* fast = head;\r
    int ans = 0;\r
\r
    while (fast && fast->next) {\r
        // TODO: logic\r
        slow = slow->next;\r
        fast = fast->next->next;\r
    }\r
\r
    return ans;\r
}\r
`,j0=`ListNode* fn(ListNode* head) {\r
    ListNode* prev = nullptr;\r
    ListNode* curr = head;\r
\r
    while (curr) {\r
        ListNode* nxt = curr->next;\r
        curr->next = prev;\r
        prev = curr;\r
        curr = nxt;\r
    }\r
\r
    return prev;\r
}\r
`,N0=`def fn(head)\r
  slow  = head\r
  fast  = head\r
  ans   = 0\r
\r
  until fast.nil? || fast.next.nil?\r
    # TODO: logic\r
    slow = slow.next\r
    fast = fast.next.next\r
  end\r
\r
  ans\r
end\r
`,E0=`def fn(head)\r
  prev = nil\r
  curr = head\r
\r
  until curr.nil?\r
    nxt = curr.next\r
    curr.next = prev\r
    prev = curr\r
    curr = nxt\r
  end\r
\r
  prev\r
end\r
`;function A0(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Linked List"}),a.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:a.jsxs(c,{title:"fast and slow pointer",children:[a.jsx(c.Tab,{code:b0,language:"python"}),a.jsx(c.Tab,{code:x0,language:"javascript"}),a.jsx(c.Tab,{code:_0,language:"java"}),a.jsx(c.Tab,{code:S0,language:"cpp"}),a.jsx(c.Tab,{code:N0,language:"ruby"})]})}),a.jsx("section",{id:"linkedlist-reverse",children:a.jsxs(c,{title:"reverse linked list",children:[a.jsx(c.Tab,{code:y0,language:"python"}),a.jsx(c.Tab,{code:v0,language:"javascript"}),a.jsx(c.Tab,{code:T0,language:"java"}),a.jsx(c.Tab,{code:j0,language:"cpp"}),a.jsx(c.Tab,{code:E0,language:"ruby"})]})})]})}const O0=`def fn(arr):\r
    stack = []\r
    ans = 0\r
\r
    for num in arr:\r
        while stack and stack[-1] > num:\r
            # TODO: logic\r
            stack.pop()\r
        stack.append(num)\r
\r
    return ans\r
`,w0=`def fn(arr):\r
    stack = []\r
    ans = 0\r
\r
    for num in arr:\r
        while stack and stack[-1] < num:\r
            # TODO: logic\r
            stack.pop()\r
        stack.append(num)\r
\r
    return ans\r
`,M0=`const fn = (arr) => {\r
    let stack = []\r
    let ans = 0\r
\r
    for (const num of arr) {\r
        while (stack.length && stack[stack.length - 1] > num) {\r
            // TODO: logic\r
            stack.pop()\r
        }\r
\r
        stack.push(num)\r
    }\r
\r
    return ans\r
}\r
`,k0=`const fn = (arr) => {\r
    let stack = []\r
    let ans = 0\r
\r
    for (const num of arr) {\r
        while (stack.length && stack[stack.length - 1] < num) {\r
            // TODO: logic\r
            stack.pop()\r
        }\r
\r
        stack.push(num)\r
    }\r
\r
    return ans\r
}\r
`,R0=`import java.util.Stack;\r
\r
\r
public int fn(int[] arr) {\r
    Stack<Integer> stack = new Stack<>();\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.isEmpty() && stack.peek() > num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,z0=`import java.util.Stack;\r
\r
\r
public int fn(int[] arr) {\r
    Stack<Integer> stack = new Stack<>();\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.isEmpty() && stack.peek() < num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,D0=`#include <stack>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    stack<int> stack;\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.empty() && stack.top() > num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,L0=`#include <stack>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    stack<int> stack;\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.empty() && stack.top() < num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,C0=`def fn(arr)\r
  stack = []\r
  ans   = 0\r
\r
  arr.each do |num|\r
    while !stack.empty? && stack[-1] > num\r
      # TODO: logic\r
      stack.pop\r
    end\r
    stack << num\r
  end\r
\r
  ans\r
end\r
`,B0=`def fn(arr)\r
  stack = []\r
  ans   = 0\r
\r
  arr.each do |num|\r
    while !stack.empty? && stack[-1] < num\r
      # TODO: logic\r
      stack.pop\r
    end\r
    stack << num\r
  end\r
\r
  ans\r
end\r
`;function U0(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Stack"}),a.jsx("section",{id:"stack-monotonic-increasing",children:a.jsxs(c,{title:"monotonic increasing stack",children:[a.jsx(c.Tab,{code:O0,language:"python"}),a.jsx(c.Tab,{code:M0,language:"javascript"}),a.jsx(c.Tab,{code:R0,language:"java"}),a.jsx(c.Tab,{code:D0,language:"cpp"}),a.jsx(c.Tab,{code:C0,language:"ruby"})]})}),a.jsx("section",{id:"stack-monotonic-decreasing",children:a.jsxs(c,{title:"monotonic decreasing stack",children:[a.jsx(c.Tab,{code:w0,language:"python"}),a.jsx(c.Tab,{code:k0,language:"javascript"}),a.jsx(c.Tab,{code:z0,language:"java"}),a.jsx(c.Tab,{code:L0,language:"cpp"}),a.jsx(c.Tab,{code:B0,language:"ruby"})]})})]})}const H0=`def dfs(root):\r
    if not root:\r
        return\r
\r
    ans = 0\r
\r
    # TODO: logic\r
    dfs(root.left)\r
    dfs(root.right)\r
\r
    return ans\r
`,q0=`def dfs(root):\r
    stack = [root]\r
    ans = 0\r
\r
    while stack:\r
        node = stack.pop()\r
        # TODO: logic\r
        if node.left:\r
            stack.append(node.left)\r
        if node.right:\r
            stack.append(node.right)\r
\r
    return ans\r
`,G0=`from collections import deque\r
\r
\r
def fn(root):\r
    que = deque([root])\r
    ans = 0\r
\r
    while que:\r
        current_length = len(que)\r
        # TODO: logic for current level\r
        for _ in range(current_length):\r
            node = que.popleft()\r
            # TODO: logic\r
            if node.left:\r
                que.append(node.left)\r
            if node.right:\r
                que.append(node.right)\r
\r
    return ans\r
`,Y0=`const dfs = (root) => {\r
    if (!root) {\r
        return\r
    }\r
\r
    let ans = 0\r
\r
    // TODO: logic\r
    dfs(root.left)\r
    dfs(root.right)\r
\r
    return ans\r
}\r
`,V0=`const dfs = (root) => {\r
    let stack = [root]\r
    let ans = 0\r
\r
    while (stack.length) {\r
        let node = stack.pop()\r
        // TODO: logic\r
        if (node.left) {\r
            stack.push(node.left)\r
        }\r
        if (node.right) {\r
            stack.push(node.right)\r
        }\r
    }\r
\r
    return ans\r
}\r
`,Q0=`const fn = (root) => {\r
    let que = [root]\r
    let ans = 0\r
\r
    while (que.length) {\r
        let currentLength = que.length\r
        let nextQue = []\r
        // TODO: logic for current level\r
\r
        for (let i = 0; i < currentLength; i++) {\r
            let node = que[i]\r
            // TODO: logic\r
            if (node.left) {\r
                nextQue.push(node.left)\r
            }\r
            if (node.right) {\r
                nextQue.push(node.right)\r
            }\r
        }\r
\r
        que = nextQue\r
    }\r
\r
    return ans\r
}\r
`,K0=`public int dfs(TreeNode root) {\r
    if (root == null) {\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    // TODO: logic\r
    ans += dfs(root.left);\r
    ans += dfs(root.right);\r
\r
    return ans;\r
}\r
`,J0=`import java.util.Stack;\r
\r
\r
public int dfs(TreeNode root) {\r
    Stack<TreeNode> stack = new Stack<>();\r
    stack.push(root);\r
    int ans = 0;\r
\r
    while (!stack.isEmpty()) {\r
        TreeNode node = stack.pop();\r
        // TODO: logic\r
        if (node.left != null) {\r
            stack.push(node.left);\r
        }\r
        if (node.right != null) {\r
            stack.push(node.right);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,X0=`import java.util.LinkedList;\r
import java.util.Queue;\r
\r
\r
public int fn(TreeNode root) {\r
    Queue<TreeNode> que = new LinkedList<>();\r
    que.add(root);\r
    int ans = 0;\r
\r
    while (!que.isEmpty()) {\r
        int currentLength = que.size();\r
        // TODO: logic for current level\r
        for (int i = 0; i < currentLength; i++) {\r
            TreeNode node = que.remove();\r
            // TODO: logic\r
            if (node.left != null) {\r
                que.add(node.left);\r
            }\r
            if (node.right != null) {\r
                que.add(node.right);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,Z0=`int dfs(TreeNode* root) {\r
    if (root == nullptr) {\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    // TODO: logic\r
    dfs(root.left);\r
    dfs(root.right);\r
\r
    return ans;\r
}\r
`,I0=`#include <stack>\r
\r
using namespace std;\r
\r
\r
int dfs(TreeNode* root) {\r
    stack<TreeNode*> stack;\r
    stack.push(root);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        TreeNode* node = stack.top();\r
        stack.pop();\r
        // TODO: logic\r
        if (node->left) {\r
            stack.push(node->left);\r
        }\r
        if (node->right) {\r
            stack.push(node->right);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,F0=`#include <queue>\r
\r
using namespace std;\r
\r
\r
int fn(TreeNode* root) {\r
    queue<TreeNode*> que;\r
    que.push(root);\r
    int ans = 0;\r
\r
    while (!que.empty()) {\r
        int currentLength = que.size();\r
        // TODO: logic for current level\r
\r
        for (int i = 0; i < currentLength; i++) {\r
            TreeNode* node = que.front();\r
            que.pop();\r
            // TODO: logic\r
            if (node->left != nullptr) {\r
                que.push(node->left);\r
            }\r
            if (node->right != nullptr) {\r
                que.push(node->right);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,W0=`def dfs(root)\r
  return unless root\r
\r
  ans = 0\r
\r
  # TODO: logic\r
  dfs(root.left)\r
  dfs(root.right)\r
\r
  ans\r
end\r
`,P0=`def dfs(root)\r
  stack = [root]\r
  ans   = 0\r
\r
  until stack.empty?\r
    node = stack.pop\r
    # TODO: logic\r
\r
    stack << node.left if node.left\r
    stack << node.right if node.right\r
  end\r
\r
  ans\r
end\r
`,$0=`def fn(root)\r
  queue = [root]\r
  ans   = 0\r
\r
  until queue.empty?\r
    current_length = queue.length\r
    # TODO: logic for current level\r
\r
    current_length.times do\r
      node = queue.shift\r
      # TODO: logic\r
\r
      queue << node.left if node.left\r
      queue << node.right if node.right\r
    end\r
  end\r
\r
  ans\r
end\r
`;function ny(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Binary Tree"}),a.jsx("section",{id:"tree-dfs-recursive",children:a.jsxs(c,{title:"DFS (recursive)",children:[a.jsx(c.Tab,{code:H0,language:"python"}),a.jsx(c.Tab,{code:Y0,language:"javascript"}),a.jsx(c.Tab,{code:K0,language:"java"}),a.jsx(c.Tab,{code:Z0,language:"cpp"}),a.jsx(c.Tab,{code:W0,language:"ruby"})]})}),a.jsx("section",{id:"tree-dfs-iterative",children:a.jsxs(c,{title:"DFS (iterative)",children:[a.jsx(c.Tab,{code:q0,language:"python"}),a.jsx(c.Tab,{code:V0,language:"javascript"}),a.jsx(c.Tab,{code:J0,language:"java"}),a.jsx(c.Tab,{code:I0,language:"cpp"}),a.jsx(c.Tab,{code:P0,language:"ruby"})]})}),a.jsx("section",{id:"tree-bfs",children:a.jsxs(c,{title:"BFS",children:[a.jsx(c.Tab,{code:G0,language:"python"}),a.jsx(c.Tab,{code:Q0,language:"javascript"}),a.jsx(c.Tab,{code:X0,language:"java"}),a.jsx(c.Tab,{code:F0,language:"cpp"}),a.jsx(c.Tab,{code:$0,language:"ruby"})]})})]})}const ry=`def fn(graph):\r
    def dfs(node):\r
        ans = 0\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                ans += dfs(neighbor)\r
\r
        return ans\r
\r
    seen = {START_NODE}\r
\r
    return dfs(START_NODE)\r
`,ey=`def fn(graph):\r
    stack = [START_NODE]\r
    seen = {START_NODE}\r
    ans = 0\r
\r
    while stack:\r
        node = stack.pop()\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                stack.append(neighbor)\r
\r
    return ans\r
`,ty=`from collections import deque\r
\r
\r
def fn(graph):\r
    que = deque([START_NODE])\r
    seen = {START_NODE}\r
    ans = 0\r
\r
    while que:\r
        node = que.popleft()\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                que.append(neighbor)\r
\r
    return ans\r
`,ay=`from heapq import heappop, heappush\r
\r
\r
def dijkstras(graph: list[list[tuple[int, int]]], source: int) -> list[int]:\r
    n = len(graph)\r
    distances = [float('inf')] * n\r
    distances[source] = 0\r
    heap = [(0, source)]\r
\r
    while heap:\r
        curr_dist, node = heappop(heap)\r
\r
        if curr_dist > distances[node]:\r
            continue\r
\r
        for neighbor, weight in graph[node]:\r
            dist = curr_dist + weight\r
\r
            if dist < distances[neighbor]:\r
                distances[neighbor] = dist\r
                heappush(heap, (dist, neighbor))\r
\r
    return distances\r
`,iy=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:\r
    distances = [float('inf')] * n\r
    distances[source] = 0\r
\r
    for _ in range(n - 1):\r
        for u, v, w in edges:\r
            if distances[u] != float('inf') and distances[u] + w < distances[v]:\r
                distances[v] = distances[u] + w\r
\r
    for u, v, w in edges:\r
        if distances[u] != float('inf') and distances[u] + w < distances[v]:\r
            return []\r
\r
    return distances\r
`,ly=`from collections import defaultdict, deque\r
\r
\r
def kahn_topological_sort(graph: dict[int, list[int]]) -> list[int]:\r
    result = []\r
    indegree = defaultdict(int)\r
\r
    for vertices in graph.values():\r
        for v in vertices:\r
            indegree[v] += 1\r
\r
    que = deque([node for node in graph if not indegree[node]])\r
\r
    while que:\r
        node = que.popleft()\r
        result.append(node)\r
\r
        for neighbor in graph[node]:\r
            indegree[neighbor] -= 1\r
\r
            if not indegree[neighbor]:\r
                que.append(neighbor)\r
\r
    return result if len(result) == len(graph) else []\r
`,sy=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
    mst = []\r
    uf = UnionFind(n)\r
    edges.sort()\r
\r
    for w, u, v in edges:\r
        if not uf.connected(u, v):\r
            uf.union(u, v)\r
            mst.append((w, u, v))\r
\r
    return mst\r
`,cy=`from heapq import heappop\r
\r
\r
def prim_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
    mst = []\r
    uf = UnionFind(n)\r
    edges.sort()\r
\r
    while edges:\r
        w, u, v = heappop(edges)\r
\r
        if not uf.connected(u, v):\r
            uf.union(u, v)\r
            mst.append((w, u, v))\r
\r
    return mst\r
`,uy=`const fn = (graph) => {\r
    const dfs = (node) => {\r
        let ans = 0\r
        // TODO: logic\r
        for (const neighbor of graph[node]) {\r
            if (!seen.has(neighbor)) {\r
                seen.add(neighbor)\r
                ans += dfs(neighbor)\r
            }\r
        }\r
\r
        return ans\r
    }\r
\r
    let seen = new Set([START_NODE])\r
\r
    return dfs(START_NODE)\r
}\r
`,oy=`const fn = (graph) => {\r
    let stack = [START_NODE]\r
    let seen = new Set([START_NODE])\r
    let ans = 0\r
\r
    while (stack.length) {\r
        let node = stack.pop()\r
        // TODO: logic\r
        for (const neighbor of graph[node]) {\r
            if (!seen.has(neighbor)) {\r
                seen.add(neighbor)\r
                stack.push(neighbor)\r
            }\r
        }\r
    }\r
\r
    return ans\r
}\r
`,dy=`const fn = (graph) => {\r
    let que = [START_NODE]\r
    let seen = new Set([START_NODE])\r
    let ans = 0\r
\r
    while (que.length) {\r
        let currentLength = que.length\r
        let nextQue = []\r
\r
        for (let i = 0; i < currentLength; i++) {\r
            let node = que[i]\r
            // TODO: logic\r
            for (const neighbor of graph[node]) {\r
                if (!seen.has(neighbor)) {\r
                    seen.add(neighbor)\r
                    nextQue.push(neighbor)\r
                }\r
            }\r
        }\r
\r
        que = nextQue\r
    }\r
\r
    return ans\r
}\r
`,fy=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,hy=`const bellmanFord = (n, edges, source) => {\r
    let distances = new Array(n).fill(Infinity)\r
    distances[source] = 0\r
\r
    for (let i = 0; i < n - 1; i++) {\r
        for (let j = 0; j < edges.length; j++) {\r
            let [u, v, w] = edges[j]\r
\r
            if (distances[u] !== Infinity && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w\r
            }\r
        }\r
    }\r
\r
    for (let i = 0; i < edges.length; i++) {\r
        let [u, v, w] = edges[i]\r
\r
        if (distances[u] !== Infinity && distances[u] + w < distances[v]) {\r
            return []\r
        }\r
    }\r
\r
    return distances\r
}\r
`,gy=`const kahnTopologicalSort = (graph) => {\r
    const result = []\r
    const queue = []\r
    const indegree = new Map()\r
\r
    for (let nodes of Object.values(graph)) {\r
        for (let node of nodes) {\r
            if (indegree.has(node)) {\r
                indegree.set(node, indegree.get(node) + 1)\r
            } else {\r
                indegree.set(node, 1)\r
            }\r
        }\r
    }\r
\r
    for (let node of Object.keys(graph)) {\r
        if (!indegree.has(node)) {\r
            queue.push(node)\r
        }\r
    }\r
\r
    while (queue.length > 0) {\r
        const node = queue.shift()\r
        result.push(node)\r
\r
        if (graph[node]) {\r
            for (let neighbor of graph[node]) {\r
                indegree.set(neighbor, indegree.get(neighbor) - 1)\r
\r
                if (indegree.get(neighbor) === 0) {\r
                    queue.push(neighbor)\r
                }\r
            }\r
        }\r
    }\r
\r
    return result.length === Object.keys(graph).length ? result : []\r
}\r
`,py=`const kruskalMst = (n, edges) => {\r
    let mst = []\r
    let uf = new UnionFind(n)\r
\r
    edges.sort((a, b) => a[0] - b[0])\r
\r
    for (let i = 0; i < edges.length; i++) {\r
        let [w, u, v] = edges[i]\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v)\r
            mst.push([w, u, v])\r
        }\r
    }\r
\r
    return mst\r
}\r
`,my=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,by=`import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
Set<Integer> seen = new HashSet<>();\r
\r
public int fn(int[][] graph) {\r
    seen.add(START_NODE);\r
    return dfs(START_NODE, graph);\r
}\r
\r
public int dfs(int node, int[][] graph) {\r
    int ans = 0;\r
    // TODO: logic\r
    for (int neighbor: graph[node]) {\r
        if (!seen.contains(neighbor)) {\r
            seen.add(neighbor);\r
            ans += dfs(neighbor, graph);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,yy=`import java.util.Stack;\r
import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
public int fn(int[][] graph) {\r
    Stack<Integer> stack = new Stack<>();\r
    Set<Integer> seen = new HashSet<>();\r
    stack.push(START_NODE);\r
    seen.add(START_NODE);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        int node = stack.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (!seen.contains(neighbor)) {\r
                seen.add(neighbor);\r
                stack.push(neighbor);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,xy=`import java.util.ArrayList;\r
import java.util.HashSet;\r
import java.util.LinkedList;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Queue;\r
import java.util.Set;\r
\r
\r
public int fn(int[][] graph) {\r
    Queue<Integer> que = new LinkedList<>();\r
    Set<Integer> seen = new HashSet<>();\r
    que.offer(START_NODE);\r
    seen.add(START_NODE);\r
    int ans = 0;\r
\r
    while (!que.isEmpty()) {\r
        int node = que.remove();\r
        // TODO: Logic\r
        for (int neighbor: graph[node]) {\r
            if (!seen.contains(neighbor)) {\r
                seen.add(neighbor);\r
                que.add(neighbor);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,vy=`import java.util.Arrays;\r
import java.util.Comparator;\r
import java.util.PriorityQueue;\r
import java.util.Queue;\r
import java.util.List;\r
\r
\r
public int[] dijkstras(List<List<int[]>> graph, int source) {\r
    int n = graph.size();\r
    int[] distances = new int[n];\r
    Arrays.fill(distances, Integer.MAX_VALUE);\r
    distances[source] = 0;\r
\r
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));\r
    pq.offer(new int[]{source, 0});\r
\r
    while (!pq.isEmpty()) {\r
        int[] curr = pq.poll();\r
        int node = curr[0];\r
        int dist = curr[1];\r
\r
        if (dist > distances[node]) {\r
            continue;\r
        }\r
\r
        for (int[] edge : graph.get(node)) {\r
            int neighbor = edge[0];\r
            int weight = edge[1];\r
            int newDist = dist + weight;\r
\r
            if (newDist < distances[neighbor]) {\r
                distances[neighbor] = newDist;\r
                pq.offer(new int[]{neighbor, newDist});\r
            }\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,_y=`import java.util.Arrays;\r
import java.util.List;\r
\r
\r
public int[] bellmanFord(int n, List<int[]> edges, int source) {\r
    int[] distances = new int[n];\r
    Arrays.fill(distances, Integer.MAX_VALUE);\r
    distances[source] = 0;\r
\r
    for (int i = 0; i < n - 1; i++) {\r
        for (int[] edge : edges) {\r
            int u = edge[0];\r
            int v = edge[1];\r
            int w = edge[2];\r
\r
            if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w;\r
            }\r
        }\r
    }\r
\r
    for (int[] edge : edges) {\r
        int u = edge[0];\r
        int v = edge[1];\r
        int w = edge[2];\r
\r
        if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {\r
            return new int[]{};\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,Ty=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.LinkedList;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Queue;\r
\r
\r
public static List<Integer> kahnTopologicalSort(Map<Integer, List<Integer>> graph) {\r
    List<Integer> result = new ArrayList<>();\r
    Map<Integer, Integer> indegree = new HashMap<>();\r
    Queue<Integer> que = new LinkedList<>();\r
\r
    for (List<Integer> vertices : graph.values()) {\r
        for (int v : vertices) {\r
            indegree.put(v, indegree.getOrDefault(v, 0) + 1);\r
        }\r
    }\r
\r
    for (Integer node : graph.keySet()) {\r
        if (!indegree.containsKey(node)) {\r
            que.offer(node);\r
        }\r
    }\r
\r
    while (!que.isEmpty()) {\r
        int node = que.poll();\r
        result.add(node);\r
\r
        if (graph.containsKey(node)) {\r
            for (int neighbor : graph.get(node)) {\r
                indegree.put(neighbor, indegree.get(neighbor) - 1);\r
\r
                if (indegree.get(neighbor) == 0) {\r
                    que.offer(neighbor);\r
                }\r
            }\r
        }\r
    }\r
\r
    if (result.size() != graph.size()) {\r
        return new ArrayList<>();\r
    }\r
\r
    return result;\r
}\r
`,Sy=`import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
\r
\r
public List<int[]> kruskalMST(int n, List<int[]> edges) {\r
    List<int[]> mst = new ArrayList<>();\r
    UnionFind uf = new UnionFind(n);\r
    Collections.sort(edges, (a, b) -> Integer.compare(a[0], b[0]));\r
\r
    for (int[] edge : edges) {\r
        int weight = edge[0];\r
        int u = edge[1];\r
        int v = edge[2];\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v);\r
            mst.add(edge);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,jy=`import java.util.ArrayList;\r
import java.util.Comparator;\r
import java.util.List;\r
import java.util.PriorityQueue;\r
\r
\r
public List<int[]> primMST(int n, List<int[]> edges) {\r
    List<int[]> mst = new ArrayList<>();\r
    UnionFind uf = new UnionFind(n);\r
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(edge -> edge[0]));\r
\r
    for (int[] edge : edges) {\r
        pq.offer(edge);\r
    }\r
\r
    while (!pq.isEmpty()) {\r
        int[] edge = pq.poll();\r
        int w = edge[0];\r
        int u = edge[1];\r
        int v = edge[2];\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v);\r
            mst.add(edge);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,Ny=`#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
unordered_set<int> seen;\r
\r
int fn(vector<vector<int>>& graph) {\r
    seen.insert(START_NODE);\r
    return dfs(START_NODE, graph);\r
}\r
\r
int dfs(int node, vector<vector<int>>& graph) {\r
    int ans = 0;\r
    // TODO: logic\r
    for (int neighbor: graph[node]) {\r
        if (seen.find(neighbor) == seen.end()) {\r
            seen.insert(neighbor);\r
            ans += dfs(neighbor, graph);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,Ey=`#include <stack>\r
#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<vector<int>>& graph) {\r
    stack<int> stack;\r
    unordered_set<int> seen;\r
    stack.push(START_NODE);\r
    seen.insert(START_NODE);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        int node = stack.top();\r
        stack.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (seen.find(neighbor) == seen.end()) {\r
                seen.insert(neighbor);\r
                stack.push(neighbor);\r
            }\r
        }\r
    }\r
}\r
`,Ay=`#include <queue>\r
#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<vector<int>>& graph) {\r
    queue<int> que;\r
    unordered_set<int> seen;\r
    que.push(START_NODE);\r
    seen.insert(START_NODE);\r
    int ans = 0;\r
\r
    while (!que.empty()) {\r
        int node = que.front();\r
        que.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (seen.find(neighbor) == seen.end()) {\r
                seen.insert(neighbor);\r
                que.push(neighbor);\r
            }\r
        }\r
    }\r
}\r
`,Oy=`#include <limits>\r
#include <queue>\r
#include <utility>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> dijkstra(vector<vector<pair<int, int>>>& graph, int source) {\r
    int n = graph.size();\r
    vector<int> distances(n, INT_MAX);\r
    distances[source] = 0;\r
\r
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;\r
    heap.push({0, source});\r
\r
    while (!heap.empty()) {\r
        int currDist = heap.top().first;\r
        int node = heap.top().second;\r
        heap.pop();\r
\r
        if (currDist > distances[node]) {\r
            continue;\r
        }\r
\r
        for (pair<int, int> edge : graph[node]) {\r
            int neighbor = edge.first;\r
            int weight = edge.second;\r
            int dist = currDist + weight;\r
\r
            if (dist < distances[neighbor]) {\r
                distances[neighbor] = dist;\r
                heap.push({dist, neighbor});\r
            }\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,wy=`#include <vector>\r
#include <utility>\r
#include <limits>\r
\r
using namespace std;\r
\r
\r
vector<int> bellman_ford(int n, vector<pair<pair<int, int>, int>>& edges, int source) {\r
    vector<int> distances(n, numeric_limits<int>::max());\r
    distances[source] = 0;\r
\r
    for (int i = 0; i < n - 1; ++i) {\r
        for (const auto& edge : edges) {\r
            int u = edge.first.first;\r
            int v = edge.first.second;\r
            int w = edge.second;\r
\r
            if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w;\r
            }\r
        }\r
    }\r
\r
    for (const auto& edge : edges) {\r
        int u = edge.first.first;\r
        int v = edge.first.second;\r
        int w = edge.second;\r
\r
        if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {\r
            return vector<int>();\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,My=`#include <vector>\r
#include <unordered_map>\r
#include <queue>\r
\r
using namespace std;\r
\r
\r
vector<int> kahn_topological_sort(unordered_map<int, vector<int>>& graph) {\r
    vector<int> result;\r
    unordered_map<int, int> indegree;\r
\r
    for (auto& [node, neighbors] : graph) {\r
        for (int neighbor : neighbors) {\r
            indegree[neighbor]++;\r
        }\r
    }\r
\r
    queue<int> que;\r
\r
    for (auto& [node, _] : graph) {\r
        if (indegree[node] == 0) {\r
            que.push(node);\r
        }\r
    }\r
\r
    while (!que.empty()) {\r
        int node = que.front();\r
        que.pop();\r
        result.push_back(node);\r
\r
        for (int neighbor : graph[node]) {\r
            indegree[neighbor]--;\r
            if (indegree[neighbor] == 0) {\r
                que.push(neighbor);\r
            }\r
        }\r
    }\r
\r
    return (result.size() == graph.size()) ? result : vector<int>();\r
}\r
`,ky=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<tuple<int, int, int>> kruskal_mst(int n, vector<tuple<int, int, int>>& edges) {\r
    vector<tuple<int, int, int>> mst;\r
    UnionFind uf(n);\r
    sort(edges.begin(), edges.end());\r
\r
    for (auto& [w, u, v] : edges) {\r
        if (!uf.connected(u, v)) {\r
            uf.unionNodes(u, v);\r
            mst.emplace_back(w, u, v);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,Ry=`#include <vector>\r
#include <queue>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<tuple<int, int, int>> prim_mst(int n, vector<tuple<int, int, int>>& edges) {\r
    vector<tuple<int, int, int>> mst;\r
    UnionFind uf(n);\r
    make_heap(edges.begin(), edges.end());\r
\r
    while (!edges.empty()) {\r
        auto [w, u, v] = edges.front();\r
        pop_heap(edges.begin(), edges.end());\r
        edges.pop_back();\r
\r
        if (!uf.connected(u, v)) {\r
            uf.unionNodes(u, v);\r
            mst.emplace_back(w, u, v);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,zy=`require 'set'\r
\r
def fn(graph)\r
  seen = Set.new([START_NODE])\r
\r
  dfs = lambda do |node|\r
    ans = 0\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        ans += dfs.call(neighbor)\r
      end\r
    end\r
    ans\r
  end\r
\r
  dfs.call(START_NODE)\r
end\r
`,Dy=`require 'set'\r
\r
def fn(graph)\r
  stack = [START_NODE]\r
  seen  = Set.new([START_NODE])\r
  ans   = 0\r
\r
  until stack.empty?\r
    node = stack.pop\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        stack << neighbor\r
      end\r
    end\r
  end\r
\r
  ans\r
end\r
`,Ly=`require 'set'\r
\r
def fn(graph)\r
  queue = [START_NODE]\r
  seen  = Set.new([START_NODE])\r
  ans   = 0\r
\r
  until queue.empty?\r
    node = queue.shift\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        queue << neighbor\r
      end\r
    end\r
  end\r
\r
  ans\r
end\r
`,Cy=`require 'priority_queue'\r
\r
def dijkstras(graph, source)\r
  n         = graph.size\r
  distances = Array.new(n, Float::INFINITY)\r
\r
  distances[source] = 0\r
\r
  heap = PriorityQueue.new\r
  heap[source] = 0\r
\r
  until heap.empty?\r
    node, curr_dist = heap.delete_min\r
    next if curr_dist > distances[node]\r
\r
    graph[node].each do |neighbor, weight|\r
      dist = curr_dist + weight\r
      if dist < distances[neighbor]\r
        distances[neighbor] = dist\r
        heap[neighbor] = dist\r
      end\r
    end\r
  end\r
\r
  distances\r
end\r
`,By=`def bellman_ford(n, edges, source)\r
  distances         = Array.new(n, Float::INFINITY)\r
  distances[source] = 0\r
\r
  (n - 1).times do\r
    edges.each do |u, v, w|\r
      if distances[u] != Float::INFINITY && distances[u] + w < distances[v]\r
        distances[v] = distances[u] + w\r
      end\r
    end\r
  end\r
\r
  edges.each do |u, v, w|\r
    if distances[u] != Float::INFINITY && distances[u] + w < distances[v]\r
      return []\r
    end\r
  end\r
\r
  distances\r
end\r
`,Uy=`def kahn_topological_sort(graph)\r
  result    = []\r
  indegree  = Hash.new(0)\r
\r
  graph.each_value do |vertices|\r
    vertices.each do |v|\r
      indegree[v] += 1\r
    end\r
  end\r
\r
  queue = graph.keys.select { |node| indegree[node] == 0 }\r
\r
  until queue.empty?\r
    node = queue.shift\r
    result << node\r
\r
    graph[node].each do |neighbor|\r
      indegree[neighbor] -= 1\r
      queue << neighbor if indegree[neighbor] == 0\r
    end\r
  end\r
\r
  result.size == graph.size ? result : []\r
end\r
`,Hy=`def kruskal_mst(n, edges)\r
  mst = []\r
  uf  = UnionFind.new(n)\r
  edges.sort.each do |w, u, v|\r
    unless uf.connected(u, v)\r
      uf.union(u, v)\r
      mst << [w, u, v]\r
    end\r
  end\r
\r
  mst\r
end\r
`,qy=`def prim_mst(n, edges)\r
  mst = []\r
  uf  = UnionFind.new(n)\r
  edges.sort.each do |w, u, v|\r
    unless uf.connected(u, v)\r
      uf.union(u, v)\r
      mst << [w, u, v]\r
    end\r
  end\r
\r
  mst\r
end\r
`;function Gy(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Graph"}),a.jsx("section",{id:"graph-dfs-recursive",children:a.jsxs(c,{title:"DFS (recursive)",children:[a.jsx(c.Tab,{code:ry,language:"python"}),a.jsx(c.Tab,{code:uy,language:"javascript"}),a.jsx(c.Tab,{code:by,language:"java"}),a.jsx(c.Tab,{code:Ny,language:"cpp"}),a.jsx(c.Tab,{code:zy,language:"ruby"})]})}),a.jsx("section",{id:"graph-dfs-iterative",children:a.jsxs(c,{title:"DFS (iterative)",children:[a.jsx(c.Tab,{code:ey,language:"python"}),a.jsx(c.Tab,{code:oy,language:"javascript"}),a.jsx(c.Tab,{code:yy,language:"java"}),a.jsx(c.Tab,{code:Ey,language:"cpp"}),a.jsx(c.Tab,{code:Dy,language:"ruby"})]})}),a.jsx("section",{id:"graph-bfs",children:a.jsxs(c,{title:"BFS",children:[a.jsx(c.Tab,{code:ty,language:"python"}),a.jsx(c.Tab,{code:dy,language:"javascript"}),a.jsx(c.Tab,{code:xy,language:"java"}),a.jsx(c.Tab,{code:Ay,language:"cpp"}),a.jsx(c.Tab,{code:Ly,language:"ruby"})]})}),a.jsx("section",{id:"graph-dijkstra",children:a.jsxs(c,{title:"Dijkstra (shortest path)",children:[a.jsx(c.Tab,{code:ay,language:"python"}),a.jsx(c.Tab,{code:fy,language:"javascript"}),a.jsx(c.Tab,{code:vy,language:"java"}),a.jsx(c.Tab,{code:Oy,language:"cpp"}),a.jsx(c.Tab,{code:Cy,language:"ruby"})]})}),a.jsx("section",{id:"graph-bellman-ford",children:a.jsxs(c,{title:"Bellman-Ford (shortest path)",children:[a.jsx(c.Tab,{code:iy,language:"python"}),a.jsx(c.Tab,{code:hy,language:"javascript"}),a.jsx(c.Tab,{code:_y,language:"java"}),a.jsx(c.Tab,{code:wy,language:"cpp"}),a.jsx(c.Tab,{code:By,language:"ruby"})]})}),a.jsx("section",{id:"graph-kahn",children:a.jsxs(c,{title:"Kahn (topological sort)",children:[a.jsx(c.Tab,{code:ly,language:"python"}),a.jsx(c.Tab,{code:gy,language:"javascript"}),a.jsx(c.Tab,{code:Ty,language:"java"}),a.jsx(c.Tab,{code:My,language:"cpp"}),a.jsx(c.Tab,{code:Uy,language:"ruby"})]})}),a.jsx("section",{id:"graph-kruskal",children:a.jsxs(c,{title:"Kruskal (mst)",children:[a.jsx(c.Tab,{code:sy,language:"python"}),a.jsx(c.Tab,{code:py,language:"javascript"}),a.jsx(c.Tab,{code:Sy,language:"java"}),a.jsx(c.Tab,{code:ky,language:"cpp"}),a.jsx(c.Tab,{code:Hy,language:"ruby"})]})}),a.jsx("section",{id:"graph-prim",children:a.jsxs(c,{title:"Prim (mst)",children:[a.jsx(c.Tab,{code:cy,language:"python"}),a.jsx(c.Tab,{code:my,language:"javascript"}),a.jsx(c.Tab,{code:jy,language:"java"}),a.jsx(c.Tab,{code:Ry,language:"cpp"}),a.jsx(c.Tab,{code:qy,language:"ruby"})]})})]})}const Yy=`from heapq import heappop, heappush\r
\r
\r
def fn(arr, k):\r
    heap = []\r
\r
    for num in arr:\r
        # TODO: logic to push onto heap according to problem's criteria\r
        heappush(heap, (CRITERIA, num))\r
\r
        if len(heap) > k:\r
            heappop(heap)\r
\r
    return [num for num in heap]\r
`,Vy=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,Qy=`import java.util.PriorityQueue;\r
\r
\r
public int[] fn(int[] arr, int k) {\r
    PriorityQueue<Integer> heap = new PriorityQueue<>(CRITERIA);\r
\r
    for (int num: arr) {\r
        // TODO: logic to push onto heap according to problem's criteria\r
        heap.add(num);\r
\r
        if (heap.size() > k) {\r
            heap.remove();\r
        }\r
    }\r
\r
    int[] ans = new int[k];\r
\r
    for (int i = 0; i < k; i++) {\r
        ans[i] = heap.remove();\r
    }\r
\r
    return ans;\r
}\r
`,Ky=`#include <vector>\r
#include <queue>\r
\r
using namespace std;\r
\r
\r
vector<int> fn(vector<int>& arr, int k) {\r
    priority_queue<int, vector<int>, greater<int>> min_heap;\r
    vector<int> result;\r
\r
    for (int num : arr) {\r
        // TODO: logic to push onto heap according to problem's criteria\r
        min_heap.push(num);\r
\r
        if (min_heap.size() > k) {\r
            min_heap.pop();\r
        }\r
    }\r
\r
    while (!min_heap.empty()) {\r
        result.push_back(min_heap.top());\r
        min_heap.pop();\r
    }\r
\r
    return result;\r
}\r
`,Jy=`def fn(arr, k)\r
  heap = []\r
\r
  arr.each do |num|\r
    # TODO: logic to push onto heap according to problem's criteria\r
    heap.push([CRITERIA, num])\r
\r
    if heap.size > k\r
      # TODO: pop the top element from heap\r
      heap.pop\r
    end\r
  end\r
\r
  heap.map { |item| item[1] }\r
end\r
`;function Xy(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Heap"}),a.jsx("section",{id:"heap-find-top-k-elements",children:a.jsxs(c,{title:"find top k elements",children:[a.jsx(c.Tab,{code:Yy,language:"python"}),a.jsx(c.Tab,{code:Vy,language:"javascript"}),a.jsx(c.Tab,{code:Qy,language:"java"}),a.jsx(c.Tab,{code:Ky,language:"cpp"}),a.jsx(c.Tab,{code:Jy,language:"ruby"})]})})]})}const Zy=`def fn(arr, target):\r
    left = 0\r
    right = len(arr) - 1\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] == target:\r
            # TODO: logic\r
            return\r
        if arr[mid] > target:\r
            right = mid - 1\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Iy=`def fn(arr, target):\r
    left = 0\r
    right = len(arr)\r
\r
    while left < right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] >= target:\r
            right = mid\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Fy=`def fn(arr, target):\r
    left = 0\r
    right = len(arr)\r
\r
    while left < right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] > target:\r
            right = mid\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Wy=`def fn(arr):\r
    def check(x):\r
        return BOOLEAN\r
\r
    left = MINIMUM_POSSIBLE_ANSWER\r
    right = MAXIMUM_POSSIBLE_ANSWER\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if check(mid):\r
            right = mid - 1\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Py=`def fn(arr):\r
    def check(x):\r
        return BOOLEAN\r
\r
    left = MINIMUM_POSSIBLE_ANSWER\r
    right = MAXIMUM_POSSIBLE_ANSWER\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if check(mid):\r
            left = mid + 1\r
        else:\r
            right = mid - 1\r
\r
    return right\r
`,$y=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length - 1\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return\r
        }\r
\r
        if (arr[mid] > target) {\r
            right = mid - 1\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,nx=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length\r
\r
    while (left < right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] >= target) {\r
            right = mid\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,rx=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length\r
\r
    while (left < right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] > target) {\r
            right = mid\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,ex=`const fn = (arr) => {\r
    const check = (x) => {\r
        return BOOLEAN\r
    }\r
\r
    let left = MINIMUM_POSSIBLE_ANSWER\r
    let right = MAXMIMUM_POSSIBLE_ANSWER\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (check(mid)) {\r
            right = mid - 1\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,tx=`const fn = (arr) => {\r
    const check = (x) => {\r
        return BOOLEAN\r
    }\r
\r
    let left = MINIMUM_POSSIBLE_ANSWER\r
    let right = MAXMIMUM_POSSIBLE_ANSWER\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (check(mid)) {\r
            left = mid + 1\r
        } else {\r
            right = mid - 1\r
        }\r
    }\r
\r
    return right\r
}\r
`,ax=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length - 1;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return mid;\r
        }\r
        if (arr[mid] > target) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,ix=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length;\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] >= target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,lx=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length;\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] > target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,sx=`public int fn(int[] arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
\r
public boolean check(int x) {\r
    return BOOLEAN\r
}\r
`,cx=`public int fn(int[] arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            left = mid + 1;\r
        } else {\r
            right = mid - 1;\r
        }\r
    }\r
\r
    return right;\r
}\r
\r
public boolean check(int x) {\r
    return BOOLEAN\r
}\r
`,ux=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size() - 1;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return mid;\r
        }\r
        if (arr[mid] > target) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,ox=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size();\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] >= target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,dx=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size();\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] > target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,fx=`#include <vector>\r
\r
using namespace std;\r
\r
\r
bool check(int x) {\r
    return BOOLEAN;\r
}\r
\r
int fn(vector<int>& arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,hx=`#include <vector>\r
\r
using namespace std;\r
\r
\r
bool check(int x) {\r
    return BOOLEAN;\r
}\r
\r
int fn(vector<int>& arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            left = mid + 1;\r
        } else {\r
            right = mid - 1;\r
        }\r
    }\r
\r
    return right;\r
}\r
`,gx=`def fn(arr, target)\r
  left  = 0\r
  right = arr.length - 1\r
\r
  while left <= right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] == target\r
      # TODO: logic\r
      return\r
    elsif arr[mid] > target\r
      right = mid - 1\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,px=`def fn(arr, target)\r
  left  = 0\r
  right = len(arr)\r
\r
  while left < right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] >= target\r
      right = mid\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,mx=`def fn(arr, target)\r
  left  = 0\r
  right = len(arr)\r
\r
  while left < right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] > target\r
      right = mid\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,bx=`def fn(arr)\r
  left  = MINIMUM_POSSIBLE_ANSWER\r
  right = MAXIMUM_POSSIBLE_ANSWER\r
\r
  while left <= right\r
    mid = (left + right) / 2 # int div\r
\r
    if check(mid)\r
      right = mid - 1\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
\r
def check(x)\r
  BOOLEAN\r
end`,yx=`def fn(arr)\r
  left  = MINIMUM_POSSIBLE_ANSWER\r
  right = MAXIMUM_POSSIBLE_ANSWER\r
\r
  while left <= right\r
    mid = (left + right) / 2 # integer division\r
\r
    if check(mid)\r
      left = mid + 1\r
    else\r
      right = mid - 1\r
    end\r
\r
  end\r
\r
  right\r
end\r
\r
def check(x)\r
  BOOLEAN\r
end\r
`;function xx(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Binary Search"}),a.jsx("section",{id:"binarysearch-binary-search",children:a.jsxs(c,{title:"binary search",children:[a.jsx(c.Tab,{code:Zy,language:"python"}),a.jsx(c.Tab,{code:$y,language:"javascript"}),a.jsx(c.Tab,{code:ax,language:"java"}),a.jsx(c.Tab,{code:ux,language:"cpp"}),a.jsx(c.Tab,{code:gx,language:"ruby"})]})}),a.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:a.jsxs(c,{title:"duplicate elements, left-most insertion point",children:[a.jsx(c.Tab,{code:Iy,language:"python"}),a.jsx(c.Tab,{code:nx,language:"javascript"}),a.jsx(c.Tab,{code:ix,language:"java"}),a.jsx(c.Tab,{code:ox,language:"cpp"}),a.jsx(c.Tab,{code:px,language:"ruby"})]})}),a.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:a.jsxs(c,{title:"duplicate elements, right-most insertion point",children:[a.jsx(c.Tab,{code:Fy,language:"python"}),a.jsx(c.Tab,{code:rx,language:"javascript"}),a.jsx(c.Tab,{code:lx,language:"java"}),a.jsx(c.Tab,{code:dx,language:"cpp"}),a.jsx(c.Tab,{code:mx,language:"ruby"})]})}),a.jsx("section",{id:"binarysearch-greedy-minimum",children:a.jsxs(c,{title:"greedy (minimum)",children:[a.jsx(c.Tab,{code:Wy,language:"python"}),a.jsx(c.Tab,{code:ex,language:"javascript"}),a.jsx(c.Tab,{code:sx,language:"java"}),a.jsx(c.Tab,{code:fx,language:"cpp"}),a.jsx(c.Tab,{code:bx,language:"ruby"})]})}),a.jsx("section",{id:"binarysearch-greedy-maximum",children:a.jsxs(c,{title:"greedy (maximum)",children:[a.jsx(c.Tab,{code:Py,language:"python"}),a.jsx(c.Tab,{code:tx,language:"javascript"}),a.jsx(c.Tab,{code:cx,language:"java"}),a.jsx(c.Tab,{code:hx,language:"cpp"}),a.jsx(c.Tab,{code:yx,language:"ruby"})]})})]})}const vx=`def backtrack(curr, OTHER_ARGUMENTS...):\r
    if (BASE_CASE):\r
        # TODO: modify answer\r
        return\r
\r
    ans = 0\r
\r
    for (ITERATE_OVER_INPUT):\r
        # TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...)\r
        # TODO: undo modification of current state\r
\r
    return ans\r
`,_x=`const backtrack = (curr, OTHER_ARGUMENTS...) => {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return\r
    }\r
\r
    let ans = 0\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...)\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans\r
}\r
`,Tx=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...);\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans;\r
}\r
`,Sx=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...);\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans;\r
}\r
`,jx=`def backtrack(curr, OTHER_ARGUMENTS...)\r
  if(BASE_CASE)\r
    # TODO: modify answer\r
    return\r
  end\r
\r
  ans = 0\r
\r
  INPUTS.each do |i|\r
    # TODO: modify current state\r
    ans += backtrack(curr, OTHER_ARGUMENTS...)\r
    # TODO: undo modification of current state\r
  end\r
\r
  ans\r
end\r
`;function Nx(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Backtracking"}),a.jsx("section",{id:"backtracking-backtracking",children:a.jsxs(c,{title:"backtracking",children:[a.jsx(c.Tab,{code:vx,language:"python"}),a.jsx(c.Tab,{code:_x,language:"javascript"}),a.jsx(c.Tab,{code:Tx,language:"java"}),a.jsx(c.Tab,{code:Sx,language:"cpp"}),a.jsx(c.Tab,{code:jx,language:"ruby"})]})})]})}const Ex=`def fn(arr):\r
    @cache\r
    def dp(STATE):\r
        if BASE_CASE:\r
            return 0\r
        return RECURRENCE_RELATION(STATE)\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
`,Ax=`def fn(arr):\r
    if BASE_CASE:\r
        return 0\r
\r
    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)\r
\r
    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):\r
        if BASE_CASE:\r
            dp[STATE] = BASE_CASE\r
        else:\r
            dp[STATE] = RECURRENCE_RELATION(STATE)\r
\r
    return dp[STATE_FOR_WHOLE_INPUT]\r
`,Ox=`def kadane(arr: list[int]) -> int:\r
    curr_sub = max_sub = arr[0]\r
\r
    for num in arr[1:]:\r
        curr_sub = max(curr_sub + num, num)\r
        max_sub = max(max_sub, curr_sub)\r
\r
    return max_sub\r
`,wx=`const fn = (arr) => {\r
    const dp = (STATE) => {\r
        if (BASE_CASE) {\r
            return 0\r
        }\r
\r
        if (memo[STATE] != -1) {\r
            return memo[STATE]\r
        }\r
\r
        let ans = RECURRENCE_RELATION(STATE)\r
        memo[STATE] = ans\r
\r
        return ans\r
    }\r
\r
    let memo = ARRAY_SIZED_ACCORDING_TO_STATE\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
}\r
`,Mx=`const fn = (arr) => {\r
    const dp = new Array(STATE_FOR_WHOLE_INPUT + 1).fill(BASE_CASE)\r
\r
    for (let state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; state++) {\r
        if (BASE_CASE) {\r
            dp[state] = BASE_CASE\r
        } else {\r
            dp[state] = RECURRENCE_RELATION(state)\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT]\r
}\r
`,kx=`const kadane = (arr) => {\r
    let currSub = arr[0]\r
    let maxSub = arr[0]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        currSub = Math.max(currSub + arr[i], arr[i])\r
        maxSub = Math.max(maxSub, currSub)\r
    }\r
\r
    return maxSub\r
}\r
`,Rx=`import java.util.HashMap;\r
import java.util.Map;\r
\r
\r
Map<STATE, Integer> memo = new HashMap<>();\r
\r
public int fn(int[] arr) {\r
    return dp(STATE_FOR_WHOLE_INPUT, arr);\r
}\r
\r
public int dp(STATE, int[] arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    if (memo.contains(STATE)) {\r
        return memo.get(STATE);\r
    }\r
\r
    int ans = RECURRENCE_RELATION(STATE);\r
    memo.put(STATE, ans);\r
    return ans;\r
}\r
`,zx=`import java.util.Arrays;\r
\r
\r
public int fn(int[] arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    int[] dp = new int[STATE_FOR_WHOLE_INPUT + 1];\r
    Arrays.fill(dp, BASE_CASE);\r
\r
    for (int STATE = SMALLEST_SUBPROBLEM; STATE <= STATE_FOR_WHOLE_INPUT; STATE++) {\r
        if (BASE_CASE) {\r
            dp[STATE] = BASE_CASE;\r
        } else {\r
            dp[STATE] = RECURRENCE_RELATION(STATE);\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT];\r
}\r
`,Dx=`public int kadane(int[] arr) {\r
    int currSub = arr[0];\r
    int maxSub = arr[0];\r
\r
    for (int i = 1; i < arr.length; i++) {\r
        currSub = Math.max(currSub + arr[i], arr[i]);\r
        maxSub = Math.max(maxSub, currSub);\r
    }\r
\r
    return maxSub;\r
}\r
`,Lx=`#include <unordered_map>\r
\r
using namespace std;\r
\r
\r
unordered_map<STATE, int> memo;\r
\r
int fn(vector<int>& arr) {\r
    return dp(STATE_FOR_WHOLE_INPUT, arr);\r
}\r
\r
int dp(STATE, vector<int>& arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    if (memo.find(STATE) != memo.end()) {\r
        return memo[STATE];\r
    }\r
\r
    int ans = RECURRENCE_RELATION(STATE);\r
    memo[STATE] = ans;\r
    return ans;\r
}\r
`,Cx=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
int fn(int arr[], int size) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    vector<int> dp(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE);\r
\r
    for (int state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; ++state) {\r
        if (BASE_CASE) {\r
            dp[state] = BASE_CASE;\r
        } else {\r
            dp[state] = RECURRENCE_RELATION(state);\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT];\r
}\r
`,Bx=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
int kadane(vector<int>& arr) {\r
    int curr_sub = arr[0];\r
    int max_sub = arr[0];\r
\r
    for (size_t i = 1; i < arr.size(); ++i) {\r
        curr_sub = max(curr_sub + arr[i], arr[i]);\r
        max_sub = max(max_sub, curr_sub);\r
    }\r
\r
    return max_sub;\r
}\r
`,Ux=`def fn(arr)\r
  cache = {}\r
\r
  dp = lambda do |state|\r
    return 0 if BASE_CASE\r
    return cache[state] if cache.key?(state)\r
\r
    cache[state] = RECURRENCE_RELATION(state)\r
  end\r
\r
  dp.call(STATE_FOR_WHOLE_INPUT)\r
end\r
`,Hx=`def fn(arr)\r
  if BASE_CASE\r
    return 0\r
  end\r
\r
  dp = Array.new(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE)\r
\r
  (SMALLEST_SUBPROBLEM..STATE_FOR_WHOLE_INPUT).each do |state|\r
    if BASE_CASE\r
      dp[state] = BASE_CASE\r
    else\r
      dp[state] = RECURRENCE_RELATION(state)\r
    end\r
  end\r
\r
  dp[STATE_FOR_WHOLE_INPUT]\r
end\r
`,qx=`def kadane(arr)\r
  curr_sub  = arr[0]\r
  max_sub   = arr[0]\r
\r
  arr[1..-1].each do |num|\r
    curr_sub = [curr_sub + num, num].max\r
    max_sub = [max_sub, curr_sub].max\r
  end\r
\r
  max_sub\r
end\r
`;function Gx(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Dynamic Programming"}),a.jsx("section",{id:"dp-top-down",children:a.jsxs(c,{title:"DP top-down",children:[a.jsx(c.Tab,{code:Ex,language:"python"}),a.jsx(c.Tab,{code:wx,language:"javascript"}),a.jsx(c.Tab,{code:Rx,language:"java"}),a.jsx(c.Tab,{code:Lx,language:"cpp"}),a.jsx(c.Tab,{code:Ux,language:"ruby"})]})}),a.jsx("section",{id:"dp-bottom-up",children:a.jsxs(c,{title:"DP bottom-up",children:[a.jsx(c.Tab,{code:Ax,language:"python"}),a.jsx(c.Tab,{code:Mx,language:"javascript"}),a.jsx(c.Tab,{code:zx,language:"java"}),a.jsx(c.Tab,{code:Cx,language:"cpp"}),a.jsx(c.Tab,{code:Hx,language:"ruby"})]})}),a.jsx("section",{id:"dp-kadane",children:a.jsxs(c,{title:"Kadane (max-sum subarray)",children:[a.jsx(c.Tab,{code:Ox,language:"python"}),a.jsx(c.Tab,{code:kx,language:"javascript"}),a.jsx(c.Tab,{code:Dx,language:"java"}),a.jsx(c.Tab,{code:Bx,language:"cpp"}),a.jsx(c.Tab,{code:qx,language:"ruby"})]})})]})}const Yx=`def test_kth_bit(num: int, k: int) -> bool:\r
    return num & (1 << k) != 0\r
`,Vx=`def set_kth_bit(num: int, k: int) -> int:\r
    return num | (1 << k)\r
`,Qx=`def clear_kth_bit(num: int, k: int) -> int:\r
    return num & ~(1 << k)\r
`,Kx=`def toggle_kth_bit(num: int, k: int) -> int:\r
    return num ^ (1 << k)\r
`,Jx=`def get_rightmost_set_bit(num: int) -> int:\r
    return num & -num\r
`,Xx=`def count_set_bits(num: int) -> int:\r
    return bin(num).count('1')\r
`,Zx=`def multiply_by_power_of_two(num: int, k: int) -> int:\r
    return num << k\r
`,Ix=`def divide_by_power_of_two(num: int, k: int) -> int:\r
    return num >> k\r
`,Fx=`def is_power_of_two(num: int) -> bool:\r
    return (num & (num - 1)) == 0\r
`,Wx=`def swap_variables(num1: int, num2: int) -> tuple:\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return num1, num2\r
`,Px=`const testKthBit = (num, k) => {\r
    return num & (1 << k) !== 0\r
}\r
`,$x=`const setKthBit = (num, k) => {\r
    return num | (1 << k)\r
}\r
`,nv=`const clearKthBit = (num, k) => {\r
    return num & ~(1 << k)\r
}\r
`,rv=`const toggleKthBit = (num, k) => {\r
    return num ^ (1 << k)\r
}\r
`,ev=`const getRightmostSetBit = (num) => {\r
    return num & -num\r
}\r
`,tv=`const countSetBits = (num) => {\r
    return num.toString(2).split('1').length - 1\r
}\r
`,av=`const multiplyByPowerOfTwo = (num, k) => {\r
    return num << k\r
}\r
`,iv=`const divideByPowerOfTwo = (num, k) => {\r
    return num >> k;\r
}\r
`,lv=`const isPowerOfTwo = (num) => {\r
    return (num & (num - 1)) === 0\r
}\r
`,sv=`const swapVariables = (num1, num2) => {\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return [num1, num2]\r
}\r
`,cv=`public boolean testKthBit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,uv=`public int setKthBit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,ov=`public int clearKthBit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,dv=`public int toggleKthBit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,fv=`public int getRightmostSetBit(int num) {\r
    return num & -num;\r
}\r
`,hv=`public int countSetBits(int num) {\r
    int count = 0;\r
\r
    while (num > 0) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,gv=`public int multiplyByPowerOfTwo(int num, int k) {\r
    return num << k;\r
}\r
`,pv=`public int divideByPowerOfTwo(int num, int k) {\r
    return num >> k;\r
}\r
`,mv=`public boolean isPowerOfTwo(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,bv=`public int[] swapVariables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return new int[] { num1, num2 };\r
}\r
`,yv=`bool test_kth_bit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,xv=`int set_kth_bit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,vv=`int clear_kth_bit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,_v=`int toggle_kth_bit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,Tv=`int get_rightmost_set_bit(int num) {\r
    return num & -num;\r
}\r
`,Sv=`int count_set_bits(int num) {\r
    int count = 0;\r
\r
    while (num) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,jv=`int multiply_by_power_of_two(int num, int k) {\r
    return num << k;\r
}\r
`,Nv=`int divide_by_power_of_two(int num, int k) {\r
    return num >> k;\r
}\r
`,Ev=`bool is_power_of_two(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,Av=`#include <tuple>\r
\r
using namespace std;\r
\r
\r
tuple<int, int> swap_variables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return std::make_tuple(num1, num2);\r
}\r
`,Ov=`def test_kth_bit(num, k)\r
  num & (1 << k) != 0\r
end\r
`,wv=`def set_kth_bit(num, k)\r
  num | (1 << k)\r
end\r
`,Mv=`def clear_kth_bit(num, k)\r
  num & ~(1 << k)\r
end\r
`,kv=`def toggle_kth_bit(num, k)\r
  num ^ (1 << k)\r
end\r
`,Rv=`def get_rightmost_set_bit(num)\r
  num & -num\r
end\r
`,zv=`def count_set_bits(num)\r
  num.to_s(2).count('1')\r
end\r
`,Dv=`def multiply_by_power_of_two(num, k)\r
  num << k\r
end\r
`,Lv=`def divide_by_power_of_two(num, k)\r
  num >> k\r
end\r
`,Cv=`def is_power_of_two(num)\r
  (num & (num - 1)) == 0\r
end\r
`,Bv=`# in-memory swaps\r
# unnecessary for modern languages\r
def swap_variables(num1, num2)\r
  num1 ^= num2\r
  num2 ^= num1\r
  num1 ^= num2\r
\r
  return num1, num2\r
end\r
`;function Uv(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Bit Manipulation"}),a.jsx("section",{id:"bitmanipulation-test-kth-bit",children:a.jsxs(c,{title:"test kth-bit",children:[a.jsx(c.Tab,{code:Yx,language:"python"}),a.jsx(c.Tab,{code:Px,language:"javascript"}),a.jsx(c.Tab,{code:cv,language:"java"}),a.jsx(c.Tab,{code:yv,language:"cpp"}),a.jsx(c.Tab,{code:Ov,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-set-kth-bit",children:a.jsxs(c,{title:"set kth bit",children:[a.jsx(c.Tab,{code:Vx,language:"python"}),a.jsx(c.Tab,{code:$x,language:"javascript"}),a.jsx(c.Tab,{code:uv,language:"java"}),a.jsx(c.Tab,{code:xv,language:"cpp"}),a.jsx(c.Tab,{code:wv,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:a.jsxs(c,{title:"clear kth bit",children:[a.jsx(c.Tab,{code:Qx,language:"python"}),a.jsx(c.Tab,{code:nv,language:"javascript"}),a.jsx(c.Tab,{code:ov,language:"java"}),a.jsx(c.Tab,{code:vv,language:"cpp"}),a.jsx(c.Tab,{code:Mv,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:a.jsxs(c,{title:"toggle kth bit",children:[a.jsx(c.Tab,{code:Kx,language:"python"}),a.jsx(c.Tab,{code:rv,language:"javascript"}),a.jsx(c.Tab,{code:dv,language:"java"}),a.jsx(c.Tab,{code:_v,language:"cpp"}),a.jsx(c.Tab,{code:kv,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:a.jsxs(c,{title:"get rightmost bit",children:[a.jsx(c.Tab,{code:Jx,language:"python"}),a.jsx(c.Tab,{code:ev,language:"javascript"}),a.jsx(c.Tab,{code:fv,language:"java"}),a.jsx(c.Tab,{code:Tv,language:"cpp"}),a.jsx(c.Tab,{code:Rv,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-count-set-bits",children:a.jsxs(c,{title:"count set bits",children:[a.jsx(c.Tab,{code:Xx,language:"python"}),a.jsx(c.Tab,{code:tv,language:"javascript"}),a.jsx(c.Tab,{code:hv,language:"java"}),a.jsx(c.Tab,{code:Sv,language:"cpp"}),a.jsx(c.Tab,{code:zv,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:a.jsxs(c,{title:"multiply by 2^k",children:[a.jsx(c.Tab,{code:Zx,language:"python"}),a.jsx(c.Tab,{code:av,language:"javascript"}),a.jsx(c.Tab,{code:gv,language:"java"}),a.jsx(c.Tab,{code:jv,language:"cpp"}),a.jsx(c.Tab,{code:Dv,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:a.jsxs(c,{title:"divide by 2^k",children:[a.jsx(c.Tab,{code:Ix,language:"python"}),a.jsx(c.Tab,{code:iv,language:"javascript"}),a.jsx(c.Tab,{code:pv,language:"java"}),a.jsx(c.Tab,{code:Nv,language:"cpp"}),a.jsx(c.Tab,{code:Lv,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-check-power-of-two",children:a.jsxs(c,{title:"check if number is power of 2",children:[a.jsx(c.Tab,{code:Fx,language:"python"}),a.jsx(c.Tab,{code:lv,language:"javascript"}),a.jsx(c.Tab,{code:mv,language:"java"}),a.jsx(c.Tab,{code:Ev,language:"cpp"}),a.jsx(c.Tab,{code:Cv,language:"ruby"})]})}),a.jsx("section",{id:"bitmanipulation-swap-variables",children:a.jsxs(c,{title:"swap two variables",children:[a.jsx(c.Tab,{code:Wx,language:"python"}),a.jsx(c.Tab,{code:sv,language:"javascript"}),a.jsx(c.Tab,{code:bv,language:"java"}),a.jsx(c.Tab,{code:Av,language:"cpp"}),a.jsx(c.Tab,{code:Bv,language:"ruby"})]})})]})}const Hv=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    create_matrix = [[0 for _ in range(c)] for _ in range(r)]\r
    copy_matrix = [row[:] for row in matrix]\r
`,qv=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    main_diagonal = [matrix[i][i] for i in range(min(r, c))]\r
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]\r
`,Gv=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    transpose_tuple = zip(*matrix)\r
    transpose = [list(row) for row in transpose_tuple]\r
    rotate_left = transpose[::-1]\r
    rotate_right = [row[::-1] for row in transpose]\r
`,Yv=`const fn = (matrix) => {\r
    const r = matrix.length;\r
    const c = matrix[0].length;\r
\r
    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))\r
    const copyMatrix = matrix.map(row => [...row])\r
}\r
`,Vv=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])\r
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])\r
}\r
`,Qv=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))\r
    const transpose = transposeTuple.map(row => [...row])\r
    const rotateLeft = transpose.reverse()\r
    const rotateRight = transpose.map(row => row.reverse())\r
}\r
`,Kv=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public void fn(List<List<Integer>> matrix) {\r
    List<List<Integer>> createMatrix = new ArrayList<>();\r
    List<List<Integer>> copyMatrix = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int i = 0; i < r; i++) {\r
        List<Integer> row = new ArrayList<>();\r
\r
        for (int j = 0; j < c; j++) {\r
            row.add(0);\r
        }\r
\r
        createMatrix.add(row);\r
    }\r
\r
    for (List<Integer> row : matrix) {\r
        copyMatrix.add(new ArrayList<>(row));\r
    }\r
}\r
`,Jv=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public void fn(List<List<Integer>> matrix) {\r
    List<Integer> mainDiagonal = new ArrayList<>();\r
    List<Integer> antiDiagonal = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int i = 0; i < Math.min(r, c); i++) {\r
        mainDiagonal.add(matrix.get(i).get(i));\r
    }\r
\r
    for (int i = 0; i < Math.min(r, c); i++) {\r
        antiDiagonal.add(matrix.get(i).get(c - 1 - i));\r
    }\r
}\r
`,Xv=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static void fn(List<List<Integer>> matrix) {\r
    List<List<Integer>> transpose = new ArrayList<>();\r
    List<List<Integer>> rotateLeft = new ArrayList<>();\r
    List<List<Integer>> rotateRight = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int j = 0; j < c; j++) {\r
        List<Integer> newRow = new ArrayList<>();\r
\r
        for (int i = 0; i < r; i++) {\r
            newRow.add(matrix.get(i).get(j));\r
        }\r
\r
        transpose.add(newRow);\r
    }\r
\r
    for (int i = transpose.size() - 1; i >= 0; i--) {\r
        rotateLeft.add(transpose.get(i));\r
    }\r
\r
    for (List<Integer> row : transpose) {\r
        List<Integer> newRow = new ArrayList<>();\r
\r
        for (int i = row.size() - 1; i >= 0; i--) {\r
            newRow.add(row.get(i));\r
        }\r
\r
        rotateRight.add(newRow);\r
    }\r
}\r
`,Zv=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
\r
    vector<vector<int>> create_matrix(r, vector<int>(c, 0));\r
    vector<vector<int>> copy_matrix(matrix);\r
}\r
`,Iv=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
\r
    vector<int> main_diagonal;\r
    vector<int> anti_diagonal;\r
\r
    for (int i = 0; i < min(r, c); ++i) {\r
        main_diagonal.push_back(matrix[i][i]);\r
        anti_diagonal.push_back(matrix[i][c - i - 1]);\r
    }\r
}\r
`,Fv=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
    vector<vector<int>> transpose(c, vector<int>(r));\r
    vector<vector<int>> rotate_left(c, vector<int>(r));\r
    vector<vector<int>> rotate_right(c, vector<int>(r));\r
\r
    for (int i = 0; i < r; ++i) {\r
        for (int j = 0; j < c; ++j) {\r
            transpose[j][i] = matrix[i][j];\r
        }\r
    }\r
\r
    for (int i = 0; i < c; ++i) {\r
        for (int j = 0; j < r; ++j) {\r
            rotate_left[i][j] = transpose[c - i - 1][j];\r
        }\r
    }\r
\r
    for (int i = 0; i < c; ++i) {\r
        for (int j = 0; j < r; ++j) {\r
            rotate_right[i][j] = transpose[i][r - j - 1];\r
        }\r
    }\r
}\r
`,Wv=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  create_matrix = Array.new(r) { Array.new(c, 0) }\r
  copy_matrix = matrix.map(&:dup)\r
end\r
`,Pv=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  main_diagonal = (0...[r, c].min).map { |i| matrix[i][i] }\r
  anti_diagonal = (0...[r, c].min).map { |i| matrix[i][-i - 1] }\r
end\r
`,$v=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  transpose = matrix[0].zip(*matrix[1..-1])\r
  rotate_left = transpose.reverse\r
  rotate_right = transpose.map(&:reverse)\r
end\r
`;function n_(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Matrix"}),a.jsx("section",{id:"matrix-create-copy",children:a.jsxs(c,{title:"create / copy",children:[a.jsx(c.Tab,{code:Hv,language:"python"}),a.jsx(c.Tab,{code:Yv,language:"javascript"}),a.jsx(c.Tab,{code:Kv,language:"java"}),a.jsx(c.Tab,{code:Zv,language:"cpp"}),a.jsx(c.Tab,{code:Wv,language:"ruby"})]})}),a.jsx("section",{id:"matrix-diagonals",children:a.jsxs(c,{title:"diagonals / anti-diagonals",children:[a.jsx(c.Tab,{code:qv,language:"python"}),a.jsx(c.Tab,{code:Vv,language:"javascript"}),a.jsx(c.Tab,{code:Jv,language:"java"}),a.jsx(c.Tab,{code:Iv,language:"cpp"}),a.jsx(c.Tab,{code:Pv,language:"ruby"})]})}),a.jsx("section",{id:"matrix-rotate-transpose",children:a.jsxs(c,{title:"rotate / transpose",children:[a.jsx(c.Tab,{code:Gv,language:"python"}),a.jsx(c.Tab,{code:Qv,language:"javascript"}),a.jsx(c.Tab,{code:Xv,language:"java"}),a.jsx(c.Tab,{code:Fv,language:"cpp"}),a.jsx(c.Tab,{code:$v,language:"ruby"})]})})]})}const r_=`from typing import Any\r
\r
\r
class Array:\r
    def __init__(self, size: int) -> None:\r
        self.size = size\r
        self.data = [None] * size\r
\r
    def __getitem__(self, index: int) -> Any:\r
        return self.data[index]\r
\r
    def __setitem__(self, index: int, value: Any) -> None:\r
        self.data[index] = value\r
\r
    def __len__(self) -> int:\r
        return len(self.data)\r
\r
    def __repr__(self) -> str:\r
        return repr(self.data)\r
`,e_=`from typing import Any\r
\r
\r
class TreeNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.left = None\r
        self.right = None\r
\r
\r
class BinaryTree:\r
    def __init__(self) -> None:\r
        self.root = None\r
\r
    def insert(self, data: Any) -> None:\r
        if not self.root:\r
            self.root = TreeNode(data)\r
        else:\r
            self.insert_node(self.root, data)\r
\r
    def insert_node(self, node: TreeNode | None, data: Any) -> TreeNode:\r
        if not node:\r
            return TreeNode(data)\r
\r
        if not node.left:\r
            node.left = TreeNode(data)\r
        elif not node.right:\r
            node.right = TreeNode(data)\r
        else:\r
            node.left = self.insert_node(node.left, data)\r
\r
        return node\r
\r
    def __repr__(self) -> str:\r
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)\r
\r
    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:\r
        if node is None:\r
            return ''\r
\r
        result = ''\r
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)\r
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'\r
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)\r
\r
        return result\r
`,t_=`from typing import Any\r
\r
\r
class TreeNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.left = None\r
        self.right = None\r
\r
\r
class BinarySearchTree:\r
    def __init__(self) -> None:\r
        self.root = None\r
\r
    def insert(self, data: Any) -> None:\r
        if not self.root:\r
            self.root = TreeNode(data)\r
        else:\r
            self.insert_node(self.root, data)\r
\r
    def insert_node(self, node: TreeNode | None, data: Any) -> None:\r
        if data < node.data:\r
            if not node.left:\r
                node.left = TreeNode(data)\r
            else:\r
                self.insert_node(node.left, data)\r
        else:\r
            if not node.right:\r
                node.right = TreeNode(data)\r
            else:\r
                self.insert_node(node.right, data)\r
\r
    def __repr__(self) -> str:\r
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)\r
\r
    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:\r
        if node is None:\r
            return ''\r
\r
        result = ''\r
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)\r
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'\r
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)\r
\r
        return result\r
`,a_=`from typing import Any\r
\r
\r
class ListNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.next = None\r
\r
    def __repr__(self) -> str:\r
        return f'[{self.data}]'\r
\r
\r
class LinkedList:\r
    def __init__(self) -> None:\r
        self.head = None\r
\r
    def append(self, data: Any) -> None:\r
        if not self.head:\r
            self.head = ListNode(data)\r
            return\r
\r
        curr = self.head\r
\r
        while curr.next:\r
            curr = curr.next\r
\r
        curr.next = ListNode(data)\r
\r
    def delete(self, data: Any) -> None:\r
        if not self.head:\r
            return\r
\r
        if self.head.data == data:\r
            self.head = self.head.next\r
            return\r
\r
        prev = None\r
        curr = self.head\r
\r
        while curr:\r
            if curr.data == data:\r
                prev.next = curr.next\r
                return\r
\r
            prev = curr\r
            curr = curr.next\r
\r
    def reverse(self) -> None:\r
        prev = None\r
        curr = self.head\r
\r
        while curr:\r
            nxt = curr.next\r
            curr.next = prev\r
            prev = curr\r
            curr = nxt\r
\r
        self.head = prev\r
\r
    def __repr__(self) -> str:\r
        if not self.head:\r
            return 'None'\r
\r
        nodes = []\r
        node = self.head\r
\r
        while node:\r
            nodes.append(repr(node))\r
            node = node.next\r
\r
        return ' -> '.join(nodes) + ' -> None'\r
`,i_=`from typing import Any\r
\r
\r
class ListNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.prev = None\r
        self.next = None\r
\r
    def __repr__(self) -> str:\r
        return f'[{self.data}]'\r
\r
\r
class DoublyLinkedList:\r
    def __init__(self) -> None:\r
        self.head = None\r
\r
    def append(self, data: Any) -> None:\r
        if not self.head:\r
            self.head = ListNode(data)\r
            return\r
\r
        curr = self.head\r
\r
        while curr.next:\r
            curr = curr.next\r
\r
        new_node = ListNode(data)\r
        curr.next = new_node\r
        new_node.prev = curr\r
\r
    def delete(self, data: Any) -> None:\r
        if not self.head:\r
            return\r
\r
        if self.head.data == data:\r
            self.head = self.head.next\r
            if self.head:\r
                self.head.prev = None\r
            return\r
\r
        curr = self.head\r
        while curr:\r
            if curr.data == data:\r
                prev_node = curr.prev\r
                prev_node.next = curr.next\r
                if curr.next:\r
                    curr.next.prev = prev_node\r
                return\r
            curr = curr.next\r
\r
    def reverse(self) -> None:\r
        curr = self.head\r
        prev = None\r
\r
        while curr:\r
            nxt = curr.next\r
            curr.next = prev\r
            curr.prev = nxt\r
            prev = curr\r
            curr = nxt\r
\r
        self.head = prev\r
\r
    def __repr__(self) -> str:\r
        if not self.head:\r
            return 'None'\r
\r
        nodes = []\r
        curr = self.head\r
\r
        while curr:\r
            nodes.append(repr(curr))\r
            curr = curr.next\r
\r
        return ' <-> '.join(nodes) + ' <-> None'\r
`,l_=`class Graph:\r
    def __init__(self) -> None:\r
        self.graph = {}\r
\r
    def add_vertex(self, vertex: str) -> None:\r
        if vertex not in self.graph:\r
            self.graph[vertex] = []\r
\r
    def add_edge(self, a: str, b: str) -> None:\r
        self.add_vertex(a)\r
        self.add_vertex(b)\r
        self.graph[a].append(b)\r
        self.graph[b].append(a)\r
\r
    def get_neighbors(self, vertex: str) -> list[str]:\r
        return self.graph.get(vertex, [])\r
\r
    def __repr__(self) -> str:\r
        output = ''\r
\r
        for vertex, neighbors in self.graph.items():\r
            output += f'{vertex} - {' - '.join(neighbors)}\\n'\r
\r
        return output\r
`,s_=`from typing import Any\r
\r
\r
class HashMap:\r
    def __init__(self) -> None:\r
        self.size = 100000\r
        self.bucket = [None] * self.size\r
\r
    def _hash(self, key: int) -> int:\r
        return hash(key) % self.size\r
\r
    def __setitem__(self, key: int, value: Any) -> None:\r
        self.bucket[self._hash(key)] = value\r
\r
    def __getitem__(self, key: int) -> Any:\r
        return self.bucket[self._hash(key)]\r
\r
    def __delitem__(self, key: int) -> None:\r
        self.bucket[self._hash(key)] = None\r
`,c_=`class TrieNode:\r
    def __init__(self) -> None:\r
        self.children = {}\r
        self.is_word = False\r
\r
\r
class Trie:\r
    def __init__(self) -> None:\r
        self.root = TrieNode()\r
\r
    def build(self, words: list[str]) -> None:\r
        for word in words:\r
            self.insert(word)\r
\r
    def insert(self, word: str) -> None:\r
        node = self.root\r
\r
        for char in word:\r
            if char not in node.children:\r
                node.children[char] = TrieNode()\r
            node = node.children[char]\r
\r
        node.is_word = True\r
\r
    def search(self, word: str) -> bool:\r
        node = self.root\r
\r
        for char in word:\r
            if char not in node.children:\r
                return False\r
            node = node.children[char]\r
\r
        return node.is_word\r
\r
    def starts_with(self, prefix: str) -> bool:\r
        node = self.root\r
\r
        for char in prefix:\r
            if char not in node.children:\r
                return False\r
            node = node.children[char]\r
\r
        return True\r
\r
    def collect_words(self, node: TrieNode, prefix: str) -> list[str]:\r
        words = []\r
\r
        if node.is_word:\r
            words.append(prefix)\r
\r
        for char, child_node in node.children.items():\r
            words.extend(self.collect_words(child_node, prefix + char))\r
\r
        return words\r
\r
    def __repr__(self) -> str:\r
        return 'Trie:\\n' + self._print_trie(self.root)\r
\r
    def _print_trie(self, node: TrieNode | None, level: int = 0, prefix: str = '') -> str:\r
        output = ''\r
        prefix_str = '    ' * level + prefix\r
\r
        if not node:\r
            return output\r
\r
        if node.is_word:\r
            output += prefix_str + ' ├─ ' + '(*)' + '\\n'\r
\r
        for i, (char, child_node) in enumerate(node.children.items()):\r
            is_last = i == len(node.children) - 1\r
            marker = '└─ ' if is_last else '├─ '\r
            output += prefix_str + marker + char + '\\n'\r
            output += self._print_trie(child_node, level + 1, '    │' if not is_last else '     ')\r
\r
        return output\r
`,u_=`class UnionFind:\r
    def __init__(self, n: int) -> None:\r
        self.root = list(range(n))\r
\r
    def find(self, a: int) -> int:\r
        return a if a == self.root[a] else self.find(self.root[a])\r
\r
    def union(self, a: int, b: int) -> None:\r
        self.root[self.find(a)] = self.find(b)\r
\r
    def connected(self, a: int, b: int) -> bool:\r
        return self.find(a) == self.find(b)\r
\r
    def __repr__(self) -> str:\r
        n = len(self.root)\r
        lines = []\r
        components = {}\r
\r
        for i in range(n):\r
            root = self.find(i)\r
\r
            if root not in components:\r
                components[root] = []\r
\r
            components[root].append(i)\r
\r
        for component in components.values():\r
            lines.append(' - '.join(f'({node})' for node in component))\r
\r
        return '\\n'.join(lines)\r
`,o_=`class UnionFind:\r
    def __init__(self, n: int) -> None:\r
        self.root = list(range(n))\r
        self.rank = [1] * n\r
\r
    def find(self, a: int) -> int:\r
        return a if a == self.root[a] else self.find(self.root[a])\r
\r
    def union(self, a: int, b: int) -> None:\r
        root_a = self.find(a)\r
        root_b = self.find(b)\r
\r
        if root_a != root_b:\r
            if self.rank[root_a] < self.rank[root_b]:\r
                self.root[root_a] = root_b\r
            elif self.rank[root_a] > self.rank[root_b]:\r
                self.root[root_b] = root_a\r
            else:\r
                self.root[root_b] = root_a\r
                self.rank[root_a] += 1\r
\r
    def connected(self, a: int, b: int) -> bool:\r
        return self.find(a) == self.find(b)\r
\r
    def __repr__(self) -> str:\r
        n = len(self.root)\r
        lines = []\r
        components = {}\r
\r
        for i in range(n):\r
            root = self.find(i)\r
\r
            if root not in components:\r
                components[root] = []\r
\r
            components[root].append(i)\r
\r
        for component in components.values():\r
            lines.append(' - '.join(f'({node})' for node in component))\r
\r
        return '\\n'.join(lines)\r
`,d_=`class Array {\r
    constructor(size) {\r
        this.size = size\r
        this.data = new Array(size).fill(null)\r
    }\r
\r
    getItem(index) {\r
        return this.data[index]\r
    }\r
\r
    setItem(index, value) {\r
        this.data[index] = value\r
    }\r
\r
    get length() {\r
        return this.data.length\r
    }\r
\r
    toString() {\r
        return this.data.toString()\r
    }\r
}\r
`,f_=`class TreeNode {\r
    constructor(data) {\r
        this.data = data\r
        this.left = null\r
        this.right = null\r
    }\r
}\r
\r
class BinaryTree {\r
    constructor() {\r
        this.root = null\r
    }\r
\r
    insert(data) {\r
        if (!this.root) {\r
            this.root = new TreeNode(data)\r
        } else {\r
            this.insertNode(this.root, data)\r
        }\r
    }\r
\r
    insertNode(node, data) {\r
        if (!node) {\r
            return new TreeNode(data)\r
        }\r
\r
        if (!node.left) {\r
            node.left = new TreeNode(data)\r
        } else if (!node.right) {\r
            node.right = new TreeNode(data)\r
        } else {\r
            node.left = this.insertNode(node.left, data)\r
        }\r
\r
        return node\r
    }\r
\r
    toString() {\r
        return this.root ? this.printTree(this.root, '', true) : 'Empty tree'\r
    }\r
\r
    printTree(node, prefix, isLeft) {\r
        if (!node) {\r
            return ''\r
        }\r
\r
        let result = ''\r
        result += this.printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)\r
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'\r
        result += this.printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)\r
\r
        return result\r
    }\r
}\r
`,h_=`class TreeNode {\r
    constructor(data) {\r
        this.data = data\r
        this.left = null\r
        this.right = null\r
    }\r
}\r
\r
class BinarySearchTree {\r
    constructor() {\r
        this.root = null\r
    }\r
\r
    insert(data) {\r
        if (!this.root) {\r
            this.root = new TreeNode(data)\r
        } else {\r
            this._insertNode(this.root, data)\r
        }\r
    }\r
\r
    _insertNode(node, data) {\r
        if (data < node.data) {\r
            if (!node.left) {\r
                node.left = new TreeNode(data)\r
            } else {\r
                this._insertNode(node.left, data)\r
            }\r
        } else {\r
            if (!node.right) {\r
                node.right = new TreeNode(data)\r
            } else {\r
                this._insertNode(node.right, data)\r
            }\r
        }\r
    }\r
\r
    toString() {\r
        return this.root ? this._printTree(this.root, '', true) : 'Empty tree'\r
    }\r
\r
    _printTree(node, prefix, isLeft) {\r
        if (!node) {\r
            return ''\r
        }\r
\r
        let result = ''\r
        result += this._printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)\r
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'\r
        result += this._printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)\r
\r
        return result\r
    }\r
}\r
`,g_=`class ListNode {\r
    constructor(data) {\r
        this.data = data\r
        this.next = null\r
    }\r
\r
    toString() {\r
        return \`[\${this.data}]\`\r
    }\r
}\r
\r
class LinkedList {\r
    constructor() {\r
        this.head = null\r
    }\r
\r
    append(data) {\r
        if (!this.head) {\r
            this.head = new ListNode(data)\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr.next) {\r
            curr = curr.next\r
        }\r
\r
        curr.next = new ListNode(data)\r
    }\r
\r
    delete(data) {\r
        if (!this.head) {\r
            return\r
        }\r
\r
        if (this.head.data === data) {\r
            this.head = this.head.next\r
            return\r
        }\r
\r
        let prev = null\r
        let curr = this.head\r
\r
        while (curr) {\r
            if (curr.data === data) {\r
                prev.next = curr.next\r
                return\r
            }\r
\r
            prev = curr\r
            curr = curr.next\r
        }\r
    }\r
\r
    reverse() {\r
        let prev = null\r
        let curr = this.head\r
\r
        while (curr) {\r
            let nxt = curr.next\r
            curr.next = prev\r
            prev = curr\r
            curr = nxt\r
        }\r
\r
        this.head = prev\r
    }\r
\r
    toString() {\r
        if (!this.head) {\r
            return 'None'\r
        }\r
\r
        let nodes = []\r
        let node = this.head\r
\r
        while (node) {\r
            nodes.push(node.toString())\r
            node = node.next\r
        }\r
\r
        return nodes.join(' -> ') + ' -> None'\r
    }\r
}\r
`,p_=`class ListNode {\r
    constructor(data) {\r
        this.data = data\r
        this.prev = null\r
        this.next = null\r
    }\r
\r
    toString() {\r
        return \`[\${this.data}]\`\r
    }\r
}\r
\r
class DoublyLinkedList {\r
    constructor() {\r
        this.head = null\r
    }\r
\r
    append(data) {\r
        if (!this.head) {\r
            this.head = new ListNode(data)\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr.next) {\r
            curr = curr.next\r
        }\r
\r
        const new_node = new ListNode(data)\r
        curr.next = new_node\r
        new_node.prev = curr\r
    }\r
\r
    delete(data) {\r
        if (!this.head) {\r
            return\r
        }\r
\r
        if (this.head.data === data) {\r
            this.head = this.head.next\r
            if (this.head) {\r
                this.head.prev = null\r
            }\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr) {\r
            if (curr.data === data) {\r
                const prev_node = curr.prev\r
                prev_node.next = curr.next\r
                if (curr.next) {\r
                    curr.next.prev = prev_node\r
                }\r
                return\r
            }\r
            curr = curr.next\r
        }\r
    }\r
\r
    reverse() {\r
        let curr = this.head\r
        let prev = null\r
\r
        while (curr) {\r
            const nxt = curr.next\r
            curr.next = prev\r
            curr.prev = nxt\r
            prev = curr\r
            curr = nxt\r
        }\r
\r
        this.head = prev\r
    }\r
\r
    toString() {\r
        if (!this.head) {\r
            return 'None'\r
        }\r
\r
        const nodes = []\r
        let curr = this.head\r
\r
        while (curr) {\r
            nodes.push(curr.toString())\r
            curr = curr.next\r
        }\r
\r
        return nodes.join(' <-> ') + ' <-> None'\r
    }\r
}\r
`,m_=`class Graph {\r
    constructor() {\r
        this.graph = {}\r
    }\r
\r
    addVertex(vertex) {\r
        if (!(vertex in this.graph)) {\r
            this.graph[vertex] = []\r
        }\r
    }\r
\r
    addEdge(a, b) {\r
        this.addVertex(a)\r
        this.addVertex(b)\r
        this.graph[a].push(b)\r
        this.graph[b].push(a)\r
    }\r
\r
    getNeighbors(vertex) {\r
        return this.graph[vertex] || []\r
    }\r
\r
    toString() {\r
        let output = ''\r
\r
        for (const [vertex, neighbors] of Object.entries(this.graph)) {\r
            output += \`\${vertex} - \${neighbors.join(' - ')}\\n\`\r
        }\r
\r
        return output\r
    }\r
}\r
`,b_=`class HashMap {\r
    constructor() {\r
        this.size = 100000\r
        this.bucket = new Array(this.size).fill(null)\r
    }\r
\r
    _hash(key) {\r
        return key % this.size\r
    }\r
\r
    setItem(key, value) {\r
        this.bucket[this._hash(key)] = value\r
    }\r
\r
    getItem(key) {\r
        return this.bucket[this._hash(key)]\r
    }\r
\r
    deleteItem(key) {\r
        this.bucket[this._hash(key)] = null\r
    }\r
}\r
`,y_=`class TrieNode {\r
    constructor() {\r
        this.children = {}\r
        this.isWord = false\r
    }\r
}\r
\r
class Trie {\r
    constructor() {\r
        this.root = new TrieNode()\r
    }\r
\r
    build(words) {\r
        for (const word of words) {\r
            this.insert(word)\r
        }\r
    }\r
\r
    insert(word) {\r
        let node = this.root\r
\r
        for (const char of word) {\r
            if (!(char in node.children)) {\r
                node.children[char] = new TrieNode()\r
            }\r
            node = node.children[char]\r
        }\r
\r
        node.isWord = true\r
    }\r
\r
    search(word) {\r
        let node = this.root\r
\r
        for (const char of word) {\r
            if (!(char in node.children)) {\r
                return false\r
            }\r
            node = node.children[char]\r
        }\r
\r
        return node.isWord\r
    }\r
\r
    startsWith(prefix) {\r
        let node = this.root\r
\r
        for (const char of prefix) {\r
            if (!(char in node.children)) {\r
                return false\r
            }\r
            node = node.children[char]\r
        }\r
\r
        return true\r
    }\r
\r
    collectWords(node, prefix) {\r
        const words = []\r
\r
        if (node.isWord) {\r
            words.push(prefix)\r
        }\r
\r
        for (const [char, childNode] of Object.entries(node.children)) {\r
            words.push(...this.collectWords(childNode, prefix + char))\r
        }\r
\r
        return words\r
    }\r
\r
    toString() {\r
        return 'Trie:\\n' + this._printTrie(this.root)\r
    }\r
\r
    _printTrie(node, level = 0, prefix = '') {\r
        let output = ''\r
        const prefixStr = '    '.repeat(level) + prefix\r
\r
        if (!node) {\r
            return output\r
        }\r
\r
        if (node.isWord) {\r
            output += prefixStr + ' ├─ ' + '(*)' + '\\n'\r
        }\r
\r
        const children = Object.entries(node.children)\r
        children.forEach(([char, childNode], i) => {\r
            const isLast = i === children.length - 1\r
            const marker = isLast ? '└─ ' : '├─ '\r
            output += prefixStr + marker + char + '\\n'\r
            output += this._printTrie(childNode, level + 1, isLast ? '     ' : '    │')\r
        })\r
\r
        return output\r
    }\r
}\r
`,x_=`class UnionFind {\r
    constructor(n) {\r
        this.root = [...Array(n).keys()]\r
    }\r
\r
    find(a) {\r
        return a === this.root[a] ? a : this.find(this.root[a])\r
    }\r
\r
    union(a, b) {\r
        this.root[this.find(a)] = this.find(b)\r
    }\r
\r
    connected(a, b) {\r
        return this.find(a) === this.find(b)\r
    }\r
\r
    toString() {\r
        const n = this.root.length\r
        const lines = []\r
        const components = {}\r
\r
        for (let i = 0; i < n; i++) {\r
            const root = this.find(i)\r
\r
            if (!(root in components)) {\r
                components[root] = []\r
            }\r
\r
            components[root].push(i)\r
        }\r
\r
        for (const component of Object.values(components)) {\r
            lines.push(\`(\${component.join(' - ')})\`)\r
        }\r
\r
        return lines.join('\\n')\r
    }\r
}\r
`,v_=`class UnionFind {\r
    constructor(n) {\r
        this.root = [...Array(n).keys()]\r
        this.rank = Array(n).fill(1)\r
    }\r
\r
    find(a) {\r
        return a === this.root[a] ? a : this.find(this.root[a])\r
    }\r
\r
    union(a, b) {\r
        const rootA = this.find(a)\r
        const rootB = this.find(b)\r
\r
        if (rootA !== rootB) {\r
            if (this.rank[rootA] < this.rank[rootB]) {\r
                this.root[rootA] = rootB\r
            } else if (this.rank[rootA] > this.rank[rootB]) {\r
                this.root[rootB] = rootA\r
            } else {\r
                this.root[rootB] = rootA\r
                this.rank[rootA]++\r
            }\r
        }\r
    }\r
\r
    connected(a, b) {\r
        return this.find(a) === this.find(b)\r
    }\r
\r
    toString() {\r
        const n = this.root.length\r
        const lines = []\r
        const components = {}\r
\r
        for (let i = 0; i < n; i++) {\r
            const root = this.find(i)\r
\r
            if (!(root in components)) {\r
                components[root] = []\r
            }\r
\r
            components[root].push(i)\r
        }\r
\r
        for (const component of Object.values(components)) {\r
            lines.push(component.map(node => \`(\${node})\`).join(' - '))\r
        }\r
\r
        return lines.join('\\n')\r
    }\r
}\r
`,__=`public class Array<T> {\r
    private int size;\r
    private T[] data;\r
\r
    @SuppressWarnings("unchecked")\r
    public Array(int size) {\r
        this.size = size;\r
        this.data = (T[]) new Object[size];\r
    }\r
\r
    public T get(int index) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);\r
        }\r
        return data[index];\r
    }\r
\r
    public void set(int index, T value) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);\r
        }\r
        data[index] = value;\r
    }\r
\r
    public int size() {\r
        return size;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        StringBuilder sb = new StringBuilder("[");\r
\r
        for (int i = 0; i < size; i++) {\r
            sb.append(data[i]);\r
            if (i < size - 1) {\r
                sb.append(", ");\r
            }\r
        }\r
\r
        sb.append("]");\r
        return sb.toString();\r
    }\r
}\r
`,T_=`public class TreeNode<T> {\r
    T data;\r
    TreeNode<T> left;\r
    TreeNode<T> right;\r
\r
    public TreeNode(T data) {\r
        this.data = data;\r
        left = null;\r
        right = null;\r
    }\r
}\r
\r
public class BinaryTree<T> {\r
    TreeNode<T> root;\r
\r
    public BinaryTree() {\r
        root = null;\r
    }\r
\r
    public void insert(T data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    private TreeNode<T> insertNode(TreeNode<T> node, T data) {\r
        if (node == null) {\r
            return new TreeNode<>(data);\r
        }\r
\r
        if (node.left == null) {\r
            node.left = new TreeNode<>(data);\r
        } else if (node.right == null) {\r
            node.right = new TreeNode<>(data);\r
        } else {\r
            node.left = insertNode(node.left, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return root == null ? "Empty tree" : printTree(root, "", true);\r
    }\r
\r
    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {\r
        if (node == null) {\r
            return "";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));\r
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");\r
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));\r
\r
        return sb.toString();\r
    }\r
}\r
`,S_=`public class TreeNode<T extends Comparable<T>> {\r
    T data;\r
    TreeNode<T> left;\r
    TreeNode<T> right;\r
\r
    public TreeNode(T data) {\r
        this.data = data;\r
        left = null;\r
        right = null;\r
    }\r
}\r
\r
public class BinarySearchTree<T extends Comparable<T>> {\r
    TreeNode<T> root;\r
\r
    public BinarySearchTree() {\r
        root = null;\r
    }\r
\r
    public void insert(T data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    private TreeNode<T> insertNode(TreeNode<T> node, T data) {\r
        if (node == null) {\r
            return new TreeNode<>(data);\r
        }\r
\r
        if (data.compareTo(node.data) < 0) {\r
            node.left = insertNode(node.left, data);\r
        } else if (data.compareTo(node.data) > 0) {\r
            node.right = insertNode(node.right, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return root == null ? "Empty tree" : printTree(root, "", true);\r
    }\r
\r
    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {\r
        if (node == null) {\r
            return "";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));\r
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");\r
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));\r
\r
        return sb.toString();\r
    }\r
}\r
`,j_=`class ListNode {\r
    public int data;\r
    public ListNode next;\r
\r
    public ListNode(int data) {\r
        this.data = data;\r
        this.next = null;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "[" + data + "]";\r
    }\r
}\r
\r
class LinkedList {\r
    private ListNode head;\r
\r
    public LinkedList() {\r
        this.head = null;\r
    }\r
\r
    public void append(int data) {\r
        if (head == null) {\r
            head = new ListNode(data);\r
            return;\r
        }\r
\r
        ListNode current = head;\r
\r
        while (current.next != null) {\r
            current = current.next;\r
        }\r
\r
        current.next = new ListNode(data);\r
    }\r
\r
    public void delete(int data) {\r
        if (head == null) {\r
            return;\r
        }\r
\r
        if (head.data == data) {\r
            head = head.next;\r
            return;\r
        }\r
\r
        ListNode prev = null;\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            if (current.data == data) {\r
                prev.next = current.next;\r
                return;\r
            }\r
            prev = current;\r
            current = current.next;\r
        }\r
    }\r
\r
    public void reverse() {\r
        ListNode prev = null;\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            ListNode next = current.next;\r
            current.next = prev;\r
            prev = current;\r
            current = next;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        if (head == null) {\r
            return "None";\r
        }\r
\r
        StringBuilder result = new StringBuilder();\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            result.append(current.toString()).append(" -> ");\r
            current = current.next;\r
        }\r
\r
        result.append("None");\r
        return result.toString();\r
    }\r
}\r
`,N_=`public class ListNode<T> {\r
    T data;\r
    ListNode<T> prev;\r
    ListNode<T> next;\r
\r
    public ListNode(T data) {\r
        this.data = data;\r
        prev = null;\r
        next = null;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "[" + data + "]";\r
    }\r
}\r
\r
public class DoublyLinkedList<T> {\r
    ListNode<T> head;\r
\r
    public DoublyLinkedList() {\r
        head = null;\r
    }\r
\r
    public void append(T data) {\r
        if (head == null) {\r
            head = new ListNode<>(data);\r
            return;\r
        }\r
\r
        ListNode<T> curr = head;\r
\r
        while (curr.next != null) {\r
            curr = curr.next;\r
        }\r
\r
        ListNode<T> newNode = new ListNode<>(data);\r
        curr.next = newNode;\r
        newNode.prev = curr;\r
    }\r
\r
    public void delete(T data) {\r
        if (head == null) {\r
            return;\r
        }\r
\r
        if (head.data.equals(data)) {\r
            head = head.next;\r
            if (head != null) {\r
                head.prev = null;\r
            }\r
            return;\r
        }\r
\r
        ListNode<T> curr = head;\r
\r
        while (curr != null) {\r
            if (curr.data.equals(data)) {\r
                ListNode<T> prevNode = curr.prev;\r
                prevNode.next = curr.next;\r
                if (curr.next != null) {\r
                    curr.next.prev = prevNode;\r
                }\r
                return;\r
            }\r
            curr = curr.next;\r
        }\r
    }\r
\r
    public void reverse() {\r
        ListNode<T> curr = head;\r
        ListNode<T> prev = null;\r
\r
        while (curr != null) {\r
            ListNode<T> nextNode = curr.next;\r
            curr.next = prev;\r
            curr.prev = nextNode;\r
            prev = curr;\r
            curr = nextNode;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        if (head == null) {\r
            return "None";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        ListNode<T> curr = head;\r
\r
        while (curr != null) {\r
            sb.append(curr.toString()).append(" <-> ");\r
            curr = curr.next;\r
        }\r
\r
        sb.append("None");\r
        return sb.toString();\r
    }\r
}\r
`,E_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
public class Graph {\r
    Map<String, List<String>> graph;\r
\r
    public Graph() {\r
        graph = new HashMap<>();\r
    }\r
\r
    public void addVertex(String vertex) {\r
        if (!graph.containsKey(vertex)) {\r
            graph.put(vertex, new ArrayList<>());\r
        }\r
    }\r
\r
    public void addEdge(String a, String b) {\r
        addVertex(a);\r
        addVertex(b);\r
        graph.get(a).add(b);\r
        graph.get(b).add(a);\r
    }\r
\r
    public List<String> getNeighbors(String vertex) {\r
        return graph.getOrDefault(vertex, new ArrayList<>());\r
    }\r
\r
    @Override\r
    public String toString() {\r
        StringBuilder output = new StringBuilder();\r
\r
        for (Map.Entry<String, List<String>> entry : graph.entrySet()) {\r
            output.append(entry.getKey()).append(" - ").append(String.join(" - ", entry.getValue())).append("\\n");\r
        }\r
\r
        return output.toString();\r
    }\r
}\r
`,A_=`public class HashMap {\r
    private int size;\r
    private Object[] bucket;\r
\r
    public HashMap() {\r
        size = 100000;\r
        bucket = new Object[size];\r
    }\r
\r
    private int hash(int key) {\r
        return key % size;\r
    }\r
\r
    public void put(int key, Object value) {\r
        bucket[hash(key)] = value;\r
    }\r
\r
    public Object get(int key) {\r
        return bucket[hash(key)];\r
    }\r
\r
    public void remove(int key) {\r
        bucket[hash(key)] = null;\r
    }\r
}\r
`,O_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
class TrieNode {\r
    Map<Character, TrieNode> children;\r
    boolean isWord;\r
\r
    public TrieNode() {\r
        this.children = new HashMap<>();\r
        this.isWord = false;\r
    }\r
}\r
\r
class Trie {\r
    TrieNode root;\r
\r
    public Trie() {\r
        this.root = new TrieNode();\r
    }\r
\r
    public void build(String[] words) {\r
        for (String word : words) {\r
            insert(word);\r
        }\r
    }\r
\r
    public void insert(String word) {\r
        TrieNode node = root;\r
\r
        for (char ch : word.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                node.children.put(ch, new TrieNode());\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        node.isWord = true;\r
    }\r
\r
    public boolean search(String word) {\r
        TrieNode node = root;\r
\r
        for (char ch : word.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                return false;\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        return node.isWord;\r
    }\r
\r
    public boolean startsWith(String prefix) {\r
        TrieNode node = root;\r
\r
        for (char ch : prefix.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                return false;\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        return true;\r
    }\r
\r
    public List<String> collectWords(TrieNode node, String prefix) {\r
        List<String> words = new ArrayList<>();\r
\r
        if (node.isWord) {\r
            words.add(prefix);\r
        }\r
\r
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {\r
            words.addAll(collectWords(entry.getValue(), prefix + entry.getKey()));\r
        }\r
\r
        return words;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "Trie:\\n" + printTrie(root, 0, null);\r
    }\r
\r
    private String printTrie(TrieNode node, int level, String prefix) {\r
        StringBuilder output = new StringBuilder();\r
        String prefixStr = "\\t".repeat(level) + prefix;\r
\r
        if (node == null) {\r
            return output.toString();\r
        }\r
\r
        if (node.isWord) {\r
            output.append(prefixStr).append(" ├─ ").append("(*)").append("\\n");\r
        }\r
\r
        int i = 0;\r
\r
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {\r
            boolean isLast = i == node.children.size() - 1;\r
            String marker = isLast ? "└─ " : "├─ ";\r
            output.append(prefixStr).append(marker).append(entry.getKey()).append("\\n");\r
            output.append(printTrie(entry.getValue(), level + 1, isLast ? "    │" : "     "));\r
            i++;\r
        }\r
\r
        return output.toString();\r
    }\r
}\r
`,w_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
public class UnionFind {\r
    private int[] root;\r
\r
    public UnionFind(int n) {\r
        this.root = new int[n];\r
        for (int i = 0; i < n; i++) {\r
            this.root[i] = i;\r
        }\r
    }\r
\r
    public int find(int a) {\r
        if (a == root[a]) {\r
            return a;\r
        }\r
        return root[a] = find(root[a]);\r
    }\r
\r
    public void union(int a, int b) {\r
        root[find(a)] = find(b);\r
    }\r
\r
    public boolean connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        int n = root.length;\r
        List<List<Integer>> components = new ArrayList<>();\r
        Map<Integer, List<Integer>> componentMap = new HashMap<>();\r
\r
        for (int i = 0; i < n; i++) {\r
            int root = find(i);\r
\r
            if (!componentMap.containsKey(root)) {\r
                componentMap.put(root, new ArrayList<>());\r
            }\r
\r
            componentMap.get(root).add(i);\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
\r
        for (List<Integer> component : componentMap.values()) {\r
            sb.append(" - ").append(component);\r
        }\r
\r
        return sb.toString();\r
    }\r
}\r
`,M_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
class UnionFind {\r
    int[] root;\r
    int[] rank;\r
\r
    public UnionFind(int n) {\r
        this.root = new int[n];\r
        this.rank = new int[n];\r
\r
        for (int i = 0; i < n; i++) {\r
            this.root[i] = i;\r
            this.rank[i] = 1;\r
        }\r
    }\r
\r
    public int find(int a) {\r
        if (a == root[a]) {\r
            return a;\r
        }\r
        return root[a] = find(root[a]);\r
    }\r
\r
    public void union(int a, int b) {\r
        int rootA = find(a);\r
        int rootB = find(b);\r
\r
        if (rootA != rootB) {\r
            if (rank[rootA] < rank[rootB]) {\r
                root[rootA] = rootB;\r
            } else if (rank[rootA] > rank[rootB]) {\r
                root[rootB] = rootA;\r
            } else {\r
                root[rootB] = rootA;\r
                rank[rootA]++;\r
            }\r
        }\r
    }\r
\r
    public boolean connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        int n = root.length;\r
        Map<Integer, List<Integer>> componentMap = new HashMap<>();\r
\r
        for (int i = 0; i < n; i++) {\r
            int root = find(i);\r
\r
            if (!componentMap.containsKey(root)) {\r
                componentMap.put(root, new ArrayList<>());\r
            }\r
\r
            componentMap.get(root).add(i);\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
\r
        for (List<Integer> component : componentMap.values()) {\r
            sb.append(" - ").append(component);\r
        }\r
\r
        return sb.toString();\r
    }\r
}\r
`,k_=`#include <iostream>\r
#include <stdexcept>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class Array {\r
private:\r
    T* data;\r
    size_t size;\r
\r
public:\r
    Array(size_t size) : size(size) {\r
        data = new T[size];\r
    }\r
\r
    ~Array() {\r
        delete[] data;\r
    }\r
\r
    T& operator[](size_t index) {\r
        if (index >= size) {\r
            throw std::out_of_range("Index out of range");\r
        }\r
        return data[index];\r
    }\r
\r
    const T& operator[](size_t index) const {\r
        if (index >= size) {\r
            throw out_of_range("Index out of range");\r
        }\r
        return data[index];\r
    }\r
\r
    size_t len() const {\r
        return size;\r
    }\r
\r
    friend ostream& operator<<(ostream& os, const Array<T>& arr) {\r
        os << "[";\r
        for (size_t i = 0; i < arr.size; ++i) {\r
            os << arr.data[i];\r
            if (i < arr.size - 1) {\r
                os << ", ";\r
            }\r
        }\r
        os << "]";\r
        return os;\r
    }\r
};\r
`,R_=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class BinaryTree {\r
private:\r
    shared_ptr<TreeNode<T>> root;\r
\r
public:\r
    BinaryTree() : root(nullptr) {}\r
\r
    void insert(const T& data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    shared_ptr<TreeNode<T>> insertNode(shared_ptr<TreeNode<T>> node, const T& data) {\r
        if (!node) {\r
            return make_shared<TreeNode<T>>(data);\r
        }\r
\r
        if (!node->left) {\r
            node->left = make_shared<TreeNode<T>>(data);\r
        } else if (!node->right) {\r
            node->right = make_shared<TreeNode<T>>(data);\r
        } else {\r
            node->left = insertNode(node->left, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    string printTree() const {\r
        return root ? printNode(root, "", true) : "Empty tree";\r
    }\r
\r
    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {\r
        string result;\r
        if (node) {\r
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);\r
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";\r
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);\r
        }\r
        return result;\r
    }\r
};\r
`,z_=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class BinarySearchTree {\r
private:\r
    shared_ptr<TreeNode<T>> root;\r
\r
public:\r
    BinarySearchTree() : root(nullptr) {}\r
\r
    void insert(const T& data) {\r
        if (!root) {\r
            root = make_shared<TreeNode<T>>(data);\r
        } else {\r
            insertNode(root, data);\r
        }\r
    }\r
\r
    void insertNode(shared_ptr<TreeNode<T>>& node, const T& data) {\r
        if (data < node->data) {\r
            if (!node->left) {\r
                node->left = make_shared<TreeNode<T>>(data);\r
            } else {\r
                insertNode(node->left, data);\r
            }\r
        } else {\r
            if (!node->right) {\r
                node->right = make_shared<TreeNode<T>>(data);\r
            } else {\r
                insertNode(node->right, data);\r
            }\r
        }\r
    }\r
\r
    string printTree() const {\r
        return root ? printNode(root, "", true) : "Empty tree";\r
    }\r
\r
    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {\r
        string result;\r
        if (node) {\r
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);\r
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";\r
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);\r
        }\r
        return result;\r
    }\r
};\r
`,D_=`#include <iostream>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class ListNode {\r
public:\r
    T data;\r
    ListNode* next;\r
\r
    ListNode(const T& data) : data(data), next(nullptr) {}\r
};\r
\r
template<typename T>\r
class LinkedList {\r
private:\r
    ListNode<T>* head;\r
\r
public:\r
    LinkedList() : head(nullptr) {}\r
\r
    void append(const T& data) {\r
        if (!head) {\r
            head = new ListNode<T>(data);\r
            return;\r
        }\r
\r
        ListNode<T>* curr = head;\r
\r
        while (curr->next) {\r
            curr = curr->next;\r
        }\r
\r
        curr->next = new ListNode<T>(data);\r
    }\r
\r
    void deleteNode(const T& data) {\r
        if (!head) {\r
            return;\r
        }\r
\r
        if (head->data == data) {\r
            ListNode<T>* temp = head;\r
            head = head->next;\r
            delete temp;\r
            return;\r
        }\r
\r
        ListNode<T>* prev = nullptr;\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            if (curr->data == data) {\r
                prev->next = curr->next;\r
                delete curr;\r
                return;\r
            }\r
\r
            prev = curr;\r
            curr = curr->next;\r
        }\r
    }\r
\r
    void reverse() {\r
        ListNode<T>* prev = nullptr;\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            ListNode<T>* nextNode = curr->next;\r
            curr->next = prev;\r
            prev = curr;\r
            curr = nextNode;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    ~LinkedList() {\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            ListNode<T>* temp = curr;\r
            curr = curr->next;\r
            delete temp;\r
        }\r
    }\r
\r
    void display() {\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            cout << "[" << curr->data << "]";\r
            if (curr->next) {\r
                cout << " -> ";\r
            }\r
            curr = curr->next;\r
        }\r
\r
        cout << " -> None" << endl;\r
    }\r
};\r
`,L_=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class ListNode {\r
public:\r
    T data;\r
    shared_ptr<ListNode<T>> prev;\r
    shared_ptr<ListNode<T>> next;\r
\r
    ListNode(const T& data) : data(data), prev(nullptr), next(nullptr) {}\r
};\r
\r
template<typename T>\r
class DoublyLinkedList {\r
private:\r
    shared_ptr<ListNode<T>> head;\r
\r
public:\r
    DoublyLinkedList() : head(nullptr) {}\r
\r
    void append(const T& data) {\r
        if (!head) {\r
            head = make_shared<ListNode<T>>(data);\r
            return;\r
        }\r
\r
        auto curr = head;\r
\r
        while (curr->next) {\r
            curr = curr->next;\r
        }\r
\r
        auto new_node = make_shared<ListNode<T>>(data);\r
        curr->next = new_node;\r
        new_node->prev = curr;\r
    }\r
\r
    void deleteNode(const T& data) {\r
        if (!head) {\r
            return;\r
        }\r
\r
        if (head->data == data) {\r
            head = head->next;\r
            if (head) {\r
                head->prev = nullptr;\r
            }\r
            return;\r
        }\r
\r
        auto curr = head;\r
\r
        while (curr) {\r
            if (curr->data == data) {\r
                auto prev_node = curr->prev;\r
                prev_node->next = curr->next;\r
\r
                if (curr->next) {\r
                    curr->next->prev = prev_node;\r
                }\r
\r
                return;\r
            }\r
            curr = curr->next;\r
        }\r
    }\r
\r
    void reverse() {\r
        auto curr = head;\r
        shared_ptr<ListNode<T>> prev = nullptr;\r
\r
        while (curr) {\r
            auto next_node = curr->next;\r
            curr->next = prev;\r
            curr->prev = next_node;\r
            prev = curr;\r
            curr = next_node;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    string toString() const {\r
        if (!head) {\r
            return "None";\r
        }\r
\r
        string result;\r
        auto curr = head;\r
\r
        while (curr) {\r
            result += "[" + to_string(curr->data) + "]";\r
\r
            if (curr->next) {\r
                result += " <-> ";\r
            }\r
\r
            curr = curr->next;\r
        }\r
\r
        result += " <-> None";\r
        return result;\r
    }\r
};\r
`,C_=`#include <iostream>\r
#include <unordered_map>\r
#include <vector>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
class Graph {\r
private:\r
    unordered_map<string, vector<string>> graph;\r
\r
public:\r
    Graph() {}\r
\r
    void addVertex(const string& vertex) {\r
        if (graph.find(vertex) == graph.end()) {\r
            graph[vertex] = {};\r
        }\r
    }\r
\r
    void addEdge(const string& a, const string& b) {\r
        addVertex(a);\r
        addVertex(b);\r
        graph[a].push_back(b);\r
        graph[b].push_back(a);\r
    }\r
\r
    vector<string> getNeighbors(const string& vertex) {\r
        return graph[vertex];\r
    }\r
\r
    string toString() {\r
        string output;\r
\r
        for (const auto& [vertex, neighbors] : graph) {\r
            output += vertex + " - ";\r
\r
            for (const auto& neighbor : neighbors) {\r
                output += neighbor + " - ";\r
            }\r
\r
            output.pop_back();\r
            output.pop_back();\r
            output += "\\n";\r
        }\r
\r
        return output;\r
    }\r
};\r
`,B_=`#include <iostream>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
template<typename KeyType, typename ValueType>\r
class HashMap {\r
private:\r
    const size_t size = 100000;\r
    vector<pair<KeyType, ValueType>> buckets[size];\r
\r
    size_t hash(const KeyType& key) {\r
        return hash<KeyType>{}(key) % size;\r
    }\r
\r
public:\r
    HashMap() {}\r
\r
    void setItem(const KeyType& key, const ValueType& value) {\r
        size_t index = hash(key);\r
\r
        for (auto& pair : buckets[index]) {\r
            if (pair.first == key) {\r
                pair.second = value;\r
                return;\r
            }\r
        }\r
\r
        buckets[index].emplace_back(key, value);\r
    }\r
\r
    ValueType& getItem(const KeyType& key) {\r
        size_t index = hash(key);\r
\r
        for (auto& pair : buckets[index]) {\r
            if (pair.first == key) {\r
                return pair.second;\r
            }\r
        }\r
\r
        throw out_of_range("Key not found");\r
    }\r
\r
    void delItem(const KeyType& key) {\r
        size_t index = hash(key);\r
\r
        for (auto it = buckets[index].begin(); it != buckets[index].end(); ++it) {\r
            if (it->first == key) {\r
                buckets[index].erase(it);\r
                return;\r
            }\r
        }\r
    }\r
};\r
`,U_=`#include <iostream>\r
#include <unordered_map>\r
#include <vector>\r
#include <memory>\r
\r
using namespace std;\r
\r
\r
class TrieNode {\r
public:\r
    unordered_map<char, shared_ptr<TrieNode>> children;\r
    bool is_word;\r
\r
    TrieNode() : is_word(false) {}\r
};\r
\r
class Trie {\r
private:\r
    shared_ptr<TrieNode> root;\r
\r
public:\r
    Trie() : root(make_shared<TrieNode>()) {}\r
\r
    void build(const vector<string>& words) {\r
        for (const auto& word : words) {\r
            insert(word);\r
        }\r
    }\r
\r
    void insert(const string& word) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : word) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                node->children[ch] = make_shared<TrieNode>();\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        node->is_word = true;\r
    }\r
\r
    bool search(const string& word) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : word) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                return false;\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        return node->is_word;\r
    }\r
\r
    bool startsWith(const string& prefix) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : prefix) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                return false;\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        return true;\r
    }\r
\r
    vector<string> collectWords(shared_ptr<TrieNode> node, const string& prefix) {\r
        vector<string> words;\r
\r
        if (node->is_word) {\r
            words.push_back(prefix);\r
        }\r
\r
        for (const auto& [ch, childNode] : node->children) {\r
            auto childWords = collectWords(childNode, prefix + ch);\r
            words.insert(words.end(), childWords.begin(), childWords.end());\r
        }\r
\r
        return words;\r
    }\r
\r
    vector<string> collectWords() {\r
        return collectWords(root, "");\r
    }\r
};\r
`,H_=`#include <iostream>\r
#include <string>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
class UnionFind {\r
private:\r
    vector<int> root;\r
\r
public:\r
    UnionFind(int n) : root(n) {\r
        for (int i = 0; i < n; ++i) {\r
            root[i] = i;\r
        }\r
    }\r
\r
    int find(int a) {\r
        return a == root[a] ? a : root[a] = find(root[a]);\r
    }\r
\r
    void unionSets(int a, int b) {\r
        root[find(a)] = find(b);\r
    }\r
\r
    bool connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    string toString() {\r
        int n = root.size();\r
        vector<vector<int>> components(n);\r
\r
        for (int i = 0; i < n; ++i) {\r
            components[find(i)].push_back(i);\r
        }\r
\r
        string result;\r
\r
        for (const auto& component : components) {\r
            if (!component.empty()) {\r
                for (int node : component) {\r
                    result += "(" + to_string(node) + ") - ";\r
                }\r
                result.pop_back();\r
                result.pop_back();\r
                result += "\\n";\r
            }\r
        }\r
\r
        return result;\r
    }\r
};\r
`,q_=`#include <iostream>\r
#include <string>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
class UnionFind {\r
private:\r
    vector<int> root;\r
    vector<int> rank;\r
\r
public:\r
    UnionFind(int n) : root(n), rank(n, 1) {\r
        for (int i = 0; i < n; ++i) {\r
            root[i] = i;\r
        }\r
    }\r
\r
    int find(int a) {\r
        return a == root[a] ? a : root[a] = find(root[a]);\r
    }\r
\r
    void unionSets(int a, int b) {\r
        int rootA = find(a);\r
        int rootB = find(b);\r
\r
        if (rootA != rootB) {\r
            if (rank[rootA] < rank[rootB]) {\r
                root[rootA] = rootB;\r
            } else if (rank[rootA] > rank[rootB]) {\r
                root[rootB] = rootA;\r
            } else {\r
                root[rootB] = rootA;\r
                rank[rootA]++;\r
            }\r
        }\r
    }\r
\r
    bool connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    string toString() {\r
        int n = root.size();\r
        vector<vector<int>> components(n);\r
\r
        for (int i = 0; i < n; ++i) {\r
            components[find(i)].push_back(i);\r
        }\r
\r
        string result;\r
\r
        for (const auto& component : components) {\r
            if (!component.empty()) {\r
                for (int node : component) {\r
                    result += "(" + to_string(node) + ") - ";\r
                }\r
                result.pop_back();\r
                result.pop_back();\r
                result += "\\n";\r
            }\r
        }\r
\r
        return result;\r
    }\r
};\r
`,G_=`\r
class Array\r
  def initialize(size)\r
    @size = size\r
    @data = Array.new(size)\r
  end\r
\r
  def [](index)\r
    @data[index]\r
  end\r
\r
  def []=(index, value)\r
    @data[index] = value\r
  end\r
\r
  def length\r
    @data.length\r
  end\r
\r
  def to_s\r
    @data.to_s\r
  end\r
end\r
`,Y_=`class TreeNode\r
  attr_accessor :data, :left, :right\r
\r
  def initialize(data)\r
    @data   = data\r
    @left   = nil\r
    @right  = nil\r
  end\r
end\r
\r
class BinaryTree\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = nil\r
  end\r
\r
  def insert(data)\r
    if @root.nil?\r
      @root = TreeNode.new(data)\r
    else\r
      insert_node(@root, data)\r
    end\r
  end\r
\r
  def insert_node(node, data)\r
    return TreeNode.new(data) if node.nil?\r
\r
    if node.left.nil?\r
      node.left = TreeNode.new(data)\r
    elsif node.right.nil?\r
      node.right = TreeNode.new(data)\r
    else\r
      node.left = insert_node(node.left, data)\r
    end\r
\r
    node\r
  end\r
\r
  def to_s\r
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)\r
  end\r
\r
  private\r
\r
  def print_tree(node, prefix, is_left)\r
    return '' if node.nil?\r
\r
    result = ''\r
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)\r
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\\n"\r
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)\r
\r
    result\r
  end\r
end\r
`,V_=`class TreeNode\r
  attr_accessor :data, :left, :right\r
\r
  def initialize(data)\r
    @data   = data\r
    @left   = nil\r
    @right  = nil\r
  end\r
end\r
\r
class BinarySearchTree\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = nil\r
  end\r
\r
  def insert(data)\r
    if @root.nil?\r
      @root = TreeNode.new(data)\r
    else\r
      insert_node(@root, data)\r
    end\r
  end\r
\r
  def insert_node(node, data)\r
    if data < node.data\r
      if node.left.nil?\r
        node.left = TreeNode.new(data)\r
      else\r
        insert_node(node.left, data)\r
      end\r
    else\r
      if node.right.nil?\r
        node.right = TreeNode.new(data)\r
      else\r
        insert_node(node.right, data)\r
      end\r
    end\r
  end\r
\r
  def to_s\r
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)\r
  end\r
\r
  private\r
\r
  def print_tree(node, prefix, is_left)\r
    return '' if node.nil?\r
\r
    result = ''\r
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)\r
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\\n"\r
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)\r
\r
    result\r
  end\r
end\r
`,Q_=`class ListNode\r
  attr_accessor :data, :next\r
\r
  def initialize(data)\r
    @data = data\r
    @next = nil\r
  end\r
\r
  def to_s\r
    "[#{@data}]"\r
  end\r
end\r
\r
class LinkedList\r
  attr_accessor :head\r
\r
  def initialize\r
    @head = nil\r
  end\r
\r
  def append(data)\r
    if @head.nil?\r
      @head = ListNode.new(data)\r
      return\r
    end\r
\r
    curr = @head\r
    curr = curr.next while curr.next\r
    curr.next = ListNode.new(data)\r
  end\r
\r
  def delete(data)\r
    return if @head.nil?\r
\r
    if @head.data == data\r
      @head = @head.next\r
      return\r
    end\r
\r
    prev = nil\r
    curr = @head\r
\r
    while curr\r
      if curr.data == data\r
        prev.next = curr.next\r
        return\r
      end\r
      prev = curr\r
      curr = curr.next\r
    end\r
  end\r
\r
  def reverse\r
    prev = nil\r
    curr = @head\r
\r
    while curr\r
      nxt = curr.next\r
      curr.next = prev\r
      prev = curr\r
      curr = nxt\r
    end\r
\r
    @head = prev\r
  end\r
\r
  def to_s\r
    return 'nil' if @head.nil?\r
\r
    nodes = []\r
    curr = @head\r
    while curr\r
      nodes << curr.to_s\r
      curr = curr.next\r
    end\r
\r
    nodes.join(' -> ') + ' -> nil'\r
  end\r
end\r
`,K_=`class ListNode\r
  attr_accessor :data, :prev, :next\r
\r
  def initialize(data)\r
    @data = data\r
    @prev = nil\r
    @next = nil\r
  end\r
\r
  def to_s\r
    "[#{@data}]"\r
  end\r
end\r
\r
class DoublyLinkedList\r
  attr_accessor :head\r
\r
  def initialize\r
    @head = nil\r
  end\r
\r
  def append(data)\r
    if @head.nil?\r
      @head = ListNode.new(data)\r
      return\r
    end\r
\r
    curr = @head\r
    curr = curr.next while curr.next\r
\r
    new_node = ListNode.new(data)\r
    curr.next = new_node\r
    new_node.prev = curr\r
  end\r
\r
  def delete(data)\r
    return if @head.nil?\r
\r
    if @head.data == data\r
      @head = @head.next\r
      @head.prev = nil if @head\r
      return\r
    end\r
\r
    curr = @head\r
    while curr\r
      if curr.data == data\r
        prev_node = curr.prev\r
        prev_node.next = curr.next\r
        curr.next.prev = prev_node if curr.next\r
        return\r
      end\r
      curr = curr.next\r
    end\r
  end\r
\r
  def reverse\r
    curr = @head\r
    prev = nil\r
\r
    while curr\r
      nxt = curr.next\r
      curr.next = prev\r
      curr.prev = nxt\r
      prev = curr\r
      curr = nxt\r
    end\r
\r
    @head = prev\r
  end\r
\r
  def to_s\r
    return 'None' if @head.nil?\r
\r
    nodes = []\r
    curr = @head\r
    while curr\r
      nodes << curr.to_s\r
      curr = curr.next\r
    end\r
\r
    nodes.join(' <-> ') + ' <-> None'\r
  end\r
end\r
`,J_=`class Graph\r
  attr_accessor :graph\r
\r
  def initialize\r
    @graph = {}\r
  end\r
\r
  def add_vertex(vertex)\r
    @graph[vertex] ||= []\r
  end\r
\r
  def add_edge(a, b)\r
    add_vertex(a)\r
    add_vertex(b)\r
    @graph[a] << b\r
    @graph[b] << a\r
  end\r
\r
  def get_neighbors(vertex)\r
    @graph.fetch(vertex, [])\r
  end\r
\r
  def to_s\r
    output = ''\r
    @graph.each do |vertex, neighbors|\r
      output += "#{vertex} - #{neighbors.join(' - ')}\\n"\r
    end\r
    output\r
  end\r
end\r
`,X_=`class HashMap\r
  def initialize\r
    @size   = 100_000\r
    @bucket = Array.new(@size)\r
  end\r
\r
  def hash_key(key)\r
    key.hash % @size\r
  end\r
\r
  def []=(key, value)\r
    @bucket[hash_key(key)] = value\r
  end\r
\r
  def [](key)\r
    @bucket[hash_key(key)]\r
  end\r
\r
  def delete(key)\r
    @bucket[hash_key(key)] = nil\r
  end\r
end\r
`,Z_=`class TrieNode\r
  attr_accessor :children, :is_word\r
\r
  def initialize\r
    @children = {}\r
    @is_word  = false\r
  end\r
end\r
\r
class Trie\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = TrieNode.new\r
  end\r
\r
  def build(words)\r
    words.each { |word| insert(word) }\r
  end\r
\r
  def insert(word)\r
    node = @root\r
    word.each_char do |char|\r
      node.children[char] ||= TrieNode.new\r
      node = node.children[char]\r
    end\r
    node.is_word = true\r
  end\r
\r
  def search(word)\r
    node = @root\r
    word.each_char do |char|\r
      return false unless node.children.key?(char)\r
      node = node.children[char]\r
    end\r
    node.is_word\r
  end\r
\r
  def starts_with(prefix)\r
    node = @root\r
    prefix.each_char do |char|\r
      return false unless node.children.key?(char)\r
      node = node.children[char]\r
    end\r
    true\r
  end\r
\r
  def collect_words(node = @root, prefix = '')\r
    words = []\r
    words << prefix if node.is_word\r
    node.children.each do |char, child_node|\r
      words.concat(collect_words(child_node, prefix + char))\r
    end\r
    words\r
  end\r
\r
  def to_s\r
    "Trie:\\n" + print_trie(@root)\r
  end\r
\r
  private\r
\r
  def print_trie(node, level = 0, prefix = '')\r
    return '' unless node\r
\r
    output = ''\r
    prefix_str = '    ' * level + prefix\r
    output += prefix_str + ' ├─ (*)' + "\\n" if node.is_word\r
\r
    node.children.each_with_index do |(char, child_node), i|\r
      is_last = i == node.children.size - 1\r
      marker = is_last ? '└─ ' : '├─ '\r
      output += prefix_str + marker + char + "\\n"\r
      new_prefix = is_last ? '     ' : '    │'\r
      output += print_trie(child_node, level + 1, new_prefix)\r
    end\r
\r
    output\r
  end\r
end\r
`,I_=`class UnionFind\r
  attr_accessor :root\r
\r
  def initialize(n)\r
    @root = Array.new(n) { |i| i }\r
  end\r
\r
  def find(a)\r
    return a if a == @root[a]\r
\r
    @root[a] = find(@root[a])\r
  end\r
\r
  def union(a, b)\r
    @root[find(a)] = find(b)\r
  end\r
\r
  def connected(a, b)\r
    find(a) == find(b)\r
  end\r
\r
  def to_s\r
    n = @root.size\r
    components = Hash.new { |h, k| h[k] = [] }\r
\r
    (0...n).each do |i|\r
      root_i = find(i)\r
      components[root_i] << i\r
    end\r
\r
    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\\n")\r
  end\r
end\r
`,F_=`class UnionFind\r
  attr_accessor :root, :rank\r
\r
  def initialize(n)\r
    @root = Array.new(n) { |i| i }\r
    @rank = Array.new(n, 1)\r
  end\r
\r
  def find(a)\r
    return a if a == @root[a]\r
\r
    @root[a] = find(@root[a])\r
  end\r
\r
  def union(a, b)\r
    root_a = find(a)\r
    root_b = find(b)\r
\r
    return if root_a == root_b\r
\r
    if @rank[root_a] < @rank[root_b]\r
      @root[root_a] = root_b\r
    elsif @rank[root_a] > @rank[root_b]\r
      @root[root_b] = root_a\r
    else\r
      @root[root_b] = root_a\r
      @rank[root_a] += 1\r
    end\r
  end\r
\r
  def connected(a, b)\r
    find(a) == find(b)\r
  end\r
\r
  def to_s\r
    n = @root.size\r
    components = Hash.new { |h, k| h[k] = [] }\r
\r
    (0...n).each do |i|\r
      root_i = find(i)\r
      components[root_i] << i\r
    end\r
\r
    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\\n")\r
  end\r
end\r
`;function W_(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Data Structures"}),a.jsx("section",{id:"ds-array",children:a.jsxs(c,{title:"array",children:[a.jsx(c.Tab,{code:r_,language:"python"}),a.jsx(c.Tab,{code:d_,language:"javascript"}),a.jsx(c.Tab,{code:__,language:"java"}),a.jsx(c.Tab,{code:k_,language:"cpp"}),a.jsx(c.Tab,{code:G_,language:"ruby"})]})}),a.jsx("section",{id:"ds-hash-map",children:a.jsxs(c,{title:"hash map",children:[a.jsx(c.Tab,{code:s_,language:"python"}),a.jsx(c.Tab,{code:b_,language:"javascript"}),a.jsx(c.Tab,{code:A_,language:"java"}),a.jsx(c.Tab,{code:B_,language:"cpp"}),a.jsx(c.Tab,{code:X_,language:"ruby"})]})}),a.jsx("section",{id:"ds-linked-list",children:a.jsxs(c,{title:"linked list",children:[a.jsx(c.Tab,{code:a_,language:"python"}),a.jsx(c.Tab,{code:g_,language:"javascript"}),a.jsx(c.Tab,{code:j_,language:"java"}),a.jsx(c.Tab,{code:D_,language:"cpp"}),a.jsx(c.Tab,{code:Q_,language:"ruby"})]})}),a.jsx("section",{id:"ds-doubly-linked-list",children:a.jsxs(c,{title:"doubly linked list",children:[a.jsx(c.Tab,{code:i_,language:"python"}),a.jsx(c.Tab,{code:p_,language:"javascript"}),a.jsx(c.Tab,{code:N_,language:"java"}),a.jsx(c.Tab,{code:L_,language:"cpp"}),a.jsx(c.Tab,{code:K_,language:"ruby"})]})}),a.jsx("section",{id:"ds-binary-tree",children:a.jsxs(c,{title:"binary tree",children:[a.jsx(c.Tab,{code:e_,language:"python"}),a.jsx(c.Tab,{code:f_,language:"javascript"}),a.jsx(c.Tab,{code:T_,language:"java"}),a.jsx(c.Tab,{code:R_,language:"cpp"}),a.jsx(c.Tab,{code:Y_,language:"ruby"})]})}),a.jsx("section",{id:"ds-binary-search-tree",children:a.jsxs(c,{title:"binary search tree",children:[a.jsx(c.Tab,{code:t_,language:"python"}),a.jsx(c.Tab,{code:h_,language:"javascript"}),a.jsx(c.Tab,{code:S_,language:"java"}),a.jsx(c.Tab,{code:z_,language:"cpp"}),a.jsx(c.Tab,{code:V_,language:"ruby"})]})}),a.jsx("section",{id:"ds-graph",children:a.jsxs(c,{title:"graph",children:[a.jsx(c.Tab,{code:l_,language:"python"}),a.jsx(c.Tab,{code:m_,language:"javascript"}),a.jsx(c.Tab,{code:E_,language:"java"}),a.jsx(c.Tab,{code:C_,language:"cpp"}),a.jsx(c.Tab,{code:J_,language:"ruby"})]})}),a.jsx("section",{id:"ds-union-find",children:a.jsxs(c,{title:"union find",children:[a.jsx(c.Tab,{code:u_,language:"python"}),a.jsx(c.Tab,{code:x_,language:"javascript"}),a.jsx(c.Tab,{code:w_,language:"java"}),a.jsx(c.Tab,{code:H_,language:"cpp"}),a.jsx(c.Tab,{code:I_,language:"ruby"})]})}),a.jsx("section",{id:"ds-union-find-optimized",children:a.jsxs(c,{title:"union find optimized",children:[a.jsx(c.Tab,{code:o_,language:"python"}),a.jsx(c.Tab,{code:v_,language:"javascript"}),a.jsx(c.Tab,{code:M_,language:"java"}),a.jsx(c.Tab,{code:q_,language:"cpp"}),a.jsx(c.Tab,{code:F_,language:"ruby"})]})}),a.jsx("section",{id:"ds-trie",children:a.jsxs(c,{title:"trie",children:[a.jsx(c.Tab,{code:c_,language:"python"}),a.jsx(c.Tab,{code:y_,language:"javascript"}),a.jsx(c.Tab,{code:O_,language:"java"}),a.jsx(c.Tab,{code:U_,language:"cpp"}),a.jsx(c.Tab,{code:Z_,language:"ruby"})]})})]})}const P_=`import random\r
\r
\r
def bogo_sort(arr: list) -> None:\r
    target = sorted(arr)\r
\r
    while arr != target:\r
        random.shuffle(arr)\r
`,$_=`def bubble_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(n):\r
        swapped = False\r
\r
        for j in range(0, n - i - 1):\r
            if arr[j] > arr[j + 1]:\r
                arr[j], arr[j + 1] = arr[j + 1], arr[j]\r
                swapped = True\r
\r
        if not swapped:\r
            break\r
`,nT=`def bucket_sort(arr: list) -> list:\r
    num_buckets = 10\r
    min_num = min(arr)\r
    max_num = max(arr)\r
    bucket_size = (max_num - min_num) / num_buckets\r
    buckets = [[] for _ in range(num_buckets)]\r
\r
    for num in arr:\r
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)\r
        buckets[index].append(num)\r
\r
    return [num for bucket in buckets for num in sorted(bucket)]\r
`,rT=`def counting_sort(arr: list) -> list:\r
    max_num = max(arr)\r
    min_num = min(arr)\r
    count_range = max_num - min_num + 1\r
    count = [0] * count_range\r
    output = [0] * len(arr)\r
\r
    for num in arr:\r
        count[num - min_num] += 1\r
\r
    for i in range(1, count_range):\r
        count[i] += count[i - 1]\r
\r
    for num in arr[::-1]:\r
        output[count[num - min_num] - 1] = num\r
        count[num - min_num] -= 1\r
\r
    return output\r
`,eT=`def cube_sort(arr: list, processors: int) -> None:\r
    n = len(arr)\r
    subarrays = []\r
    subarray_size = n // processors\r
\r
    for i in range(processors):\r
        subarray = arr[i * subarray_size : (i + 1) * subarray_size]\r
        subarrays.append(subarray)\r
\r
    for subarray in subarrays:\r
        subarray.sort()\r
\r
    for dimension in range(processors.bit_length() - 1):\r
        for i in range(processors):\r
            partner = i ^ (1 << dimension)\r
            if i < partner:\r
                merged = subarrays[i] + subarrays[partner]\r
            else:\r
                merged = subarrays[partner] + subarrays[i]\r
            merged.sort()\r
            subarrays[i] = merged[:subarray_size]\r
            subarrays[partner] = merged[subarray_size:]\r
\r
    arr[:] = [num for subarray in subarrays for num in subarray]\r
`,tT=`def heap_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    for i in range(n // 2 - 1, -1, -1):\r
        heapify(arr, n, i)\r
    for i in range(n - 1, 0, -1):\r
        arr[i], arr[0] = arr[0], arr[i]\r
        heapify(arr, i, 0)\r
\r
    return arr\r
\r
def heapify(arr: list, n: int, i: int) -> None:\r
    largest = i\r
    left = 2 * i + 1\r
    right = 2 * i + 2\r
\r
    if left < n and arr[left] > arr[largest]:\r
        largest = left\r
    if right < n and arr[right] > arr[largest]:\r
        largest = right\r
    if largest != i:\r
        arr[i], arr[largest] = arr[largest], arr[i]\r
        heapify(arr, n, largest)\r
`,aT=`def insertion_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(1, n):\r
        key = arr[i]\r
\r
        while i > 0 and key < arr[i - 1]:\r
            arr[i] = arr[i - 1]\r
            i -= 1\r
\r
        arr[i] = key\r
`,iT=`def merge_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    mid = n // 2\r
    left = merge_sort(arr[:mid])\r
    right = merge_sort(arr[mid:])\r
\r
    return merge(left, right)\r
\r
def merge(left: list, right: list) -> list:\r
    output = []\r
\r
    while left and right:\r
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)\r
        output.append(min_num)\r
\r
    output.extend(left)\r
    output.extend(right)\r
\r
    return output\r
`,lT=`def pancake_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for size in reversed(range(2, n + 1)):\r
        max_idx = find_max_index(arr, size)\r
\r
        if max_idx != size - 1:\r
            flip(arr, max_idx)\r
            flip(arr, size - 1)\r
\r
def flip(arr: list, i: int) -> None:\r
    left = 0\r
\r
    while left < i:\r
        arr[left], arr[i] = arr[i], arr[left]\r
        left += 1\r
        i -= 1\r
\r
def find_max_index(arr: list, n: int) -> int:\r
    max_idx = 0\r
\r
    for i in range(n):\r
        if arr[i] > arr[max_idx]:\r
            max_idx = i\r
\r
    return max_idx\r
`,sT=`def quick_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    pivot = arr[n // 2]\r
    left = [x for x in arr if x < pivot]\r
    right = [x for x in arr if x > pivot]\r
\r
    return quick_sort(left) + [pivot] + quick_sort(right)\r
`,cT=`def radix_sort(arr: list) -> None:\r
    max_val = max(arr)\r
    exp = 1\r
\r
    while max_val // exp > 0:\r
        counting_sort(arr, exp)\r
        exp *= 10\r
\r
def counting_sort(arr: list, exp: int) -> None:\r
    n = len(arr)\r
    output = [0] * n\r
    count = [0] * 10\r
\r
    for i in range(n):\r
        idx = arr[i] // exp\r
        count[idx % 10] += 1\r
\r
    for i in range(1, 10):\r
        count[i] += count[i - 1]\r
\r
    i = n - 1\r
\r
    while i >= 0:\r
        idx = arr[i] // exp\r
        output[count[idx % 10] - 1] = arr[i]\r
        count[idx % 10] -= 1\r
        i -= 1\r
\r
    for i in range(n):\r
        arr[i] = output[i]\r
`,uT=`def selection_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(n):\r
        min_i = i\r
\r
        for j in range(i + 1, n):\r
            if arr[j] < arr[min_i]:\r
                min_i = j\r
\r
        if min_i != i:\r
            arr[i], arr[min_i] = arr[min_i], arr[i]\r
`,oT=`def shell_sort(arr: list) -> None:\r
    n = len(arr)\r
    gaps = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
    for gap in gaps:\r
        for i in range(gap, n):\r
            tmp = arr[i]\r
            j = i\r
\r
            while j >= gap and arr[j - gap] > tmp:\r
                arr[j] = arr[j - gap]\r
                j -= gap\r
\r
            if j != i:\r
                arr[j] = tmp\r
`,dT=`from threading import Thread\r
from time import sleep\r
\r
\r
def sleep_sort(arr: list ) -> list:\r
    sorted_arr = []\r
    threads = []\r
\r
    for num in arr:\r
        thread = Thread(target=snorlax, args=(num, sorted_arr))\r
        threads.append(thread)\r
\r
    for thread in threads:\r
        thread.start( )\r
\r
    for thread in threads:\r
        thread.join()\r
\r
    return sorted_arr\r
\r
def snorlax(num: float, arr: list) -> None:\r
    sleep(num / 1000.0)\r
    arr.append(num)\r
`,fT=`def tim_sort(arr: list) -> list:\r
    n = len(arr)\r
    min_run = 32\r
\r
    for start in range(0, n, min_run):\r
        end = min(start + min_run - 1, n - 1)\r
        insertion_sort(arr, start, end)\r
\r
    size = min_run\r
\r
    while size < n:\r
        for left in range(0, n, 2 * size):\r
            mid = min(n - 1, left + size - 1)\r
            right = min((left + 2 * size - 1), (n - 1))\r
            arr[left : right + 1] = merge(arr[left : mid + 1], arr[mid + 1 : right + 1])\r
        size *= 2\r
\r
    return arr\r
\r
def insertion_sort(arr: list, left: int, right: int) -> None:\r
    for i in range(left + 1, right + 1):\r
        key = arr[i]\r
\r
        while i > 0 and key < arr[i - 1]:\r
            arr[i] = arr[i - 1]\r
            i -= 1\r
\r
        arr[i] = key\r
\r
def merge_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    mid = n // 2\r
    left = merge_sort(arr[:mid])\r
    right = merge_sort(arr[mid:])\r
\r
    return merge(left, right)\r
\r
def merge(left: list, right: list) -> list:\r
    output = []\r
\r
    while left and right:\r
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)\r
        output.append(min_num)\r
\r
    output.extend(left)\r
    output.extend(right)\r
\r
    return output\r
`,hT=`const bogoSort = (arr) => {\r
    const isSorted = (arr) => {\r
        for (let i = 0; i < arr.length - 1; i++) {\r
            if (arr[i] > arr[i + 1]) {\r
                return false\r
            }\r
        }\r
\r
        return true\r
    }\r
\r
    const shuffleArray = (arr) => {\r
        for (let i = arr.length - 1; i > 0; i--) {\r
            const j = Math.floor(Math.random() * (i + 1))\r
            [arr[i], arr[j]] = [arr[j], arr[i]]\r
        }\r
\r
        return arr\r
    }\r
\r
    while (!isSorted(arr)) {\r
        arr = shuffleArray(arr)\r
    }\r
}\r
`,gT=`const bubbleSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 0; i < n; i++) {\r
        let swapped = false\r
\r
        for (let j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]\r
                swapped = true\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break\r
        }\r
    }\r
}\r
`,pT=`const bucketSort = (arr) => {\r
    const num_buckets = 10\r
    const min_num = Math.min(...arr)\r
    const max_num = Math.max(...arr)\r
    const bucket_size = (max_num - min_num) / num_buckets\r
    const buckets = Array.from({ length: num_buckets }, () => [])\r
\r
    for (const num of arr) {\r
        const index = Math.min(Math.floor((num - min_num) / bucket_size), num_buckets - 1)\r
        buckets[index].push(num)\r
    }\r
\r
    return buckets.flatMap(bucket => bucket.sort((a, b) => a - b))\r
}\r
`,mT=`const countingSort = (arr) => {\r
    const max_num = Math.max(...arr)\r
    const min_num = Math.min(...arr)\r
    const count_range = max_num - min_num + 1\r
    const count = Array(count_range).fill(0)\r
    const output = Array(arr.length)\r
\r
    for (const num of arr) {\r
        count[num - min_num]++\r
    }\r
\r
    for (let i = 1; i < count_range; i++) {\r
        count[i] += count[i - 1]\r
    }\r
\r
    for (let i = arr.length - 1; i >= 0; i--) {\r
        output[count[arr[i] - min_num] - 1] = arr[i]\r
        count[arr[i] - min_num]--\r
    }\r
\r
    return output\r
}\r
`,bT=`const cubeSort = (arr, processors) => {\r
    const n = arr.length\r
    const subarrays = []\r
    const subarraySize = Math.floor(n / processors)\r
\r
    for (let i = 0; i < processors; i++) {\r
        const subarray = arr.slice(i * subarraySize, (i + 1) * subarraySize)\r
        subarray.sort((a, b) => a - b)\r
        subarrays.push(subarray)\r
    }\r
\r
    for (let dimension = 0; dimension < Math.floor(Math.log2(processors)); dimension++) {\r
        for (let i = 0; i < processors; i++) {\r
            const partner = i ^ (1 << dimension)\r
            if (i < partner) {\r
                const merged = subarrays[i].concat(subarrays[partner])\r
                merged.sort((a, b) => a - b)\r
                subarrays[i] = merged.slice(0, subarraySize)\r
                subarrays[partner] = merged.slice(subarraySize)\r
            }\r
        }\r
    }\r
\r
    arr.splice(0, arr.length, ...subarrays.flat())\r
}\r
`,yT=`const heapSort = (arr) => {\r
    const n = arr.length\r
\r
    const heapify = (arr, n, i) => {\r
        let largest = i\r
        const left = 2 * i + 1\r
        const right = 2 * i + 2\r
\r
        if (left < n && arr[left] > arr[largest]) {\r
            largest = left\r
        }\r
        if (right < n && arr[right] > arr[largest]) {\r
            largest = right\r
        }\r
        if (largest !== i) {\r
            [arr[i], arr[largest]] = [arr[largest], arr[i]]\r
            heapify(arr, n, largest)\r
        }\r
    }\r
\r
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {\r
        heapify(arr, n, i)\r
    }\r
    for (let i = n - 1; i > 0; i--) {\r
        [arr[i], arr[0]] = [arr[0], arr[i]]\r
        heapify(arr, i, 0)\r
    }\r
\r
    return arr\r
}\r
`,xT=`const insertionSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 1; i < n; i++) {\r
        let key = arr[i]\r
        let j = i - 1\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j]\r
            j--\r
        }\r
\r
        arr[j + 1] = key\r
    }\r
}\r
`,vT=`const mergeSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const mid = Math.floor(n / 2)\r
    const left = mergeSort(arr.slice(0, mid))\r
    const right = mergeSort(arr.slice(mid))\r
\r
    return merge(left, right)\r
}\r
\r
const merge = (left, right) => {\r
    const output = []\r
\r
    while (left.length && right.length) {\r
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()\r
        output.push(minNum)\r
    }\r
\r
    output.push(...left)\r
    output.push(...right)\r
\r
    return output\r
}\r
`,_T=`const pancakeSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let size = n; size > 1; size--) {\r
        const maxIdx = findMaxIndex(arr, size)\r
\r
        if (maxIdx !== size - 1) {\r
            flip(arr, maxIdx)\r
            flip(arr, size - 1)\r
        }\r
    }\r
}\r
\r
const flip = (arr, i) => {\r
    let left = 0\r
\r
    while (left < i) {\r
        [arr[left], arr[i]] = [arr[i], arr[left]]\r
        left++\r
        i--\r
    }\r
}\r
\r
const findMaxIndex = (arr, n) => {\r
    let maxIdx = 0\r
\r
    for (let i = 0; i < n; i++) {\r
        if (arr[i] > arr[maxIdx]) {\r
            maxIdx = i\r
        }\r
    }\r
\r
    return maxIdx\r
}\r
`,TT=`const quickSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const pivot = arr[Math.floor(n / 2)]\r
    const left = arr.filter(x => x < pivot)\r
    const right = arr.filter(x => x > pivot)\r
\r
    return [...quickSort(left), pivot, ...quickSort(right)]\r
}\r
`,ST=`const radixSort = (arr) => {\r
    const maxVal = Math.max(...arr)\r
    let exp = 1\r
\r
    while (maxVal / exp > 0) {\r
        countingSort(arr, exp)\r
        exp *= 10\r
    }\r
}\r
\r
const countingSort = (arr, exp) => {\r
    const n = arr.length\r
    const output = new Array(n).fill(0)\r
    const count = new Array(10).fill(0)\r
\r
    for (let i = 0; i < n; i++) {\r
        const idx = Math.floor(arr[i] / exp)\r
        count[idx % 10] += 1\r
    }\r
\r
    for (let i = 1; i < 10; i++) {\r
        count[i] += count[i - 1]\r
    }\r
\r
    let i = n - 1\r
\r
    while (i >= 0) {\r
        const idx = Math.floor(arr[i] / exp)\r
        output[count[idx % 10] - 1] = arr[i]\r
        count[idx % 10] -= 1\r
        i -= 1\r
    }\r
\r
    for (let i = 0; i < n; i++) {\r
        arr[i] = output[i]\r
    }\r
}\r
`,jT=`const selectionSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 0; i < n; i++) {\r
        let minIndex = i\r
\r
        for (let j = i + 1; j < n; j++) {\r
            if (arr[j] < arr[minIndex]) {\r
                minIndex = j\r
            }\r
        }\r
\r
        if (minIndex !== i) {\r
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]\r
        }\r
    }\r
}\r
`,NT=`const shellSort = (arr) => {\r
    const n = arr.length\r
    const gaps = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
    for (const gap of gaps) {\r
        for (let i = gap; i < n; i++) {\r
            const tmp = arr[i]\r
            let j = i\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap]\r
                j -= gap\r
            }\r
\r
            if (j !== i) {\r
                arr[j] = tmp\r
            }\r
        }\r
    }\r
}\r
`,ET=`const sleepSort = (arr) => {\r
    const sortedArr = []\r
    const promises = []\r
\r
    for (const num of arr) {\r
        promises.push(new Promise((resolve) => setTimeout(() => {\r
            sortedArr.push(num)\r
            resolve()\r
        }, num)))\r
    }\r
\r
    return Promise.all(promises).then(() => sortedArr)\r
}\r
`,AT=`const timSort = (arr) => {\r
    const n = arr.length\r
    const minRun = 32\r
\r
    for (let start = 0; start < n; start += minRun) {\r
        const end = Math.min(start + minRun - 1, n - 1)\r
        insertionSort(arr, start, end)\r
    }\r
\r
    let size = minRun\r
\r
    while (size < n) {\r
        for (let left = 0; left < n; left += 2 * size) {\r
            const mid = Math.min(n - 1, left + size - 1)\r
            const right = Math.min((left + 2 * size - 1), (n - 1))\r
            const merged = merge(arr.slice(left, mid + 1), arr.slice(mid + 1, right + 1))\r
            arr.splice(left, right - left + 1, ...merged)\r
        }\r
        size *= 2\r
    }\r
\r
    return arr\r
}\r
\r
const insertionSort = (arr, left, right) => {\r
    for (let i = left + 1; i <= right; i++) {\r
        const key = arr[i]\r
        let j = i\r
\r
        while (j > left && key < arr[j - 1]) {\r
            arr[j] = arr[j - 1]\r
            j--\r
        }\r
\r
        arr[j] = key\r
    }\r
}\r
\r
const mergeSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const mid = Math.floor(n / 2)\r
    const left = mergeSort(arr.slice(0, mid))\r
    const right = mergeSort(arr.slice(mid))\r
\r
    return merge(left, right)\r
}\r
\r
const merge = (left, right) => {\r
    const output = []\r
\r
    while (left.length && right.length) {\r
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()\r
        output.push(minNum)\r
    }\r
\r
    return output.concat(left).concat(right)\r
}\r
`,OT=`import java.util.Arrays;\r
import java.util.Random;\r
\r
\r
public static void bogoSort(int[] arr) {\r
    int[] target = Arrays.copyOf(arr, arr.length);\r
    Arrays.sort(target);\r
\r
    while (!Arrays.equals(arr, target)) {\r
        shuffleArray(arr);\r
    }\r
}\r
\r
public static void shuffleArray(int[] arr) {\r
    Random rnd = new Random();\r
\r
    for (int i = arr.length - 1; i > 0; i--) {\r
        int index = rnd.nextInt(i + 1);\r
        int temp = arr[index];\r
        arr[index] = arr[i];\r
        arr[i] = temp;\r
    }\r
}\r
`,wT=`public static void bubbleSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 0; i < n; i++) {\r
        boolean swapped = false;\r
\r
        for (int j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                int temp = arr[j];\r
                arr[j] = arr[j + 1];\r
                arr[j + 1] = temp;\r
                swapped = true;\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break;\r
        }\r
    }\r
}\r
`,MT=`import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.Collections;\r
import java.util.List;\r
\r
\r
public static int[] bucketSort(int[] arr) {\r
    int numBuckets = 10;\r
    int index;\r
    int[] result = new int[arr.length];\r
    int minNum = Arrays.stream(arr).min().getAsInt();\r
    int maxNum = Arrays.stream(arr).max().getAsInt();\r
    double bucketSize = (double) (maxNum - minNum) / numBuckets;\r
    List<List<Integer>> buckets = new ArrayList<>(numBuckets);\r
\r
    for (int i = 0; i < numBuckets; i++) {\r
        buckets.add(new ArrayList<>());\r
    }\r
\r
    for (int num : arr) {\r
        index = Math.min((int) ((num - minNum) / bucketSize), numBuckets - 1);\r
        buckets.get(index).add(num);\r
    }\r
\r
    index = 0;\r
\r
    for (List<Integer> bucket : buckets) {\r
        Collections.sort(bucket);\r
\r
        for (int num : bucket) {\r
            result[index++] = num;\r
        }\r
    }\r
\r
    return result;\r
}\r
`,kT=`import java.util.Arrays;\r
\r
\r
public static int[] countingSort(int[] arr) {\r
    int maxNum = Arrays.stream(arr).max().orElse(Integer.MIN_VALUE);\r
    int minNum = Arrays.stream(arr).min().orElse(Integer.MAX_VALUE);\r
    int countRange = maxNum - minNum + 1;\r
    int[] count = new int[countRange];\r
    int[] output = new int[arr.length];\r
\r
    for (int num : arr) {\r
        count[num - minNum]++;\r
    }\r
\r
    for (int i = 1; i < countRange; i++) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = arr.length - 1; i >= 0; i--) {\r
        output[count[arr[i] - minNum] - 1] = arr[i];\r
        count[arr[i] - minNum]--;\r
    }\r
\r
    return output;\r
}\r
`,RT=`import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.List;\r
\r
\r
public static void cubeSort(int[] arr, int processors) {\r
    int n = arr.length;\r
    List<int[]> subarrays = new ArrayList<>();\r
    int subarraySize = (n + processors - 1) / processors;\r
\r
    for (int i = 0; i < processors; i++) {\r
        int[] subarray = new int[Math.min(subarraySize, n - i * subarraySize)];\r
        System.arraycopy(arr, i * subarraySize, subarray, 0, subarray.length);\r
        Arrays.sort(subarray);\r
        subarrays.add(subarray);\r
    }\r
\r
    for (int dimension = 0; dimension < Integer.SIZE - 1; dimension++) {\r
        for (int i = 0; i < processors; i++) {\r
            int partner = i ^ (1 << dimension);\r
\r
            if (i < partner && partner < processors) {\r
                int[] merged = merge(subarrays.get(i), subarrays.get(partner));\r
                System.arraycopy(merged, 0, subarrays.get(i), 0, subarraySize);\r
                System.arraycopy(merged, subarraySize, subarrays.get(partner), 0, subarraySize);\r
            }\r
        }\r
    }\r
\r
    int index = 0;\r
\r
    for (int[] subarray : subarrays) {\r
        for (int num : subarray) {\r
            arr[index++] = num;\r
        }\r
    }\r
}\r
\r
public static int[] merge(int[] arr1, int[] arr2) {\r
    int[] merged = new int[arr1.length + arr2.length];\r
    int i = 0, j = 0, k = 0;\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        if (arr1[i] < arr2[j]) {\r
            merged[k++] = arr1[i++];\r
        } else {\r
            merged[k++] = arr2[j++];\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        merged[k++] = arr1[i++];\r
    }\r
\r
    while (j < arr2.length) {\r
        merged[k++] = arr2[j++];\r
    }\r
\r
    return merged;\r
}\r
`,zT=`public static int[] heapSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = n / 2 - 1; i >= 0; i--) {\r
        heapify(arr, n, i);\r
    }\r
\r
    for (int i = n - 1; i > 0; i--) {\r
        int temp = arr[0];\r
        arr[0] = arr[i];\r
        arr[i] = temp;\r
\r
        heapify(arr, i, 0);\r
    }\r
\r
    return arr;\r
}\r
\r
public static void heapify(int[] arr, int n, int i) {\r
    int largest = i;\r
    int left = 2 * i + 1;\r
    int right = 2 * i + 2;\r
\r
    if (left < n && arr[left] > arr[largest]) {\r
        largest = left;\r
    }\r
    if (right < n && arr[right] > arr[largest]) {\r
        largest = right;\r
    }\r
    if (largest != i) {\r
        int temp = arr[i];\r
        arr[i] = arr[largest];\r
        arr[largest] = temp;\r
\r
        heapify(arr, n, largest);\r
    }\r
}\r
`,DT=`public static void insertionSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 1; i < n; i++) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            j--;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
`,LT=`import java.util.Arrays;\r
\r
\r
public static int[] mergeSort(int[] arr) {\r
    int n = arr.length;\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int mid = n / 2;\r
    int[] left = Arrays.copyOfRange(arr, 0, mid);\r
    int[] right = Arrays.copyOfRange(arr, mid, n);\r
\r
    left = mergeSort(left);\r
    right = mergeSort(right);\r
\r
    return merge(left, right);\r
}\r
\r
public static int[] merge(int[] left, int[] right) {\r
    int[] output = new int[left.length + right.length];\r
    int i = 0, j = 0, k = 0;\r
\r
    while (i < left.length && j < right.length) {\r
        if (left[i] <= right[j]) {\r
            output[k++] = left[i++];\r
        } else {\r
            output[k++] = right[j++];\r
        }\r
    }\r
\r
    while (i < left.length) {\r
        output[k++] = left[i++];\r
    }\r
\r
    while (j < right.length) {\r
        output[k++] = right[j++];\r
    }\r
\r
    return output;\r
}\r
`,CT=`public static void pancakeSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int size = n; size >= 2; size--) {\r
        int maxIdx = findMaxIndex(arr, size);\r
\r
        if (maxIdx != size - 1) {\r
            flip(arr, maxIdx);\r
            flip(arr, size - 1);\r
        }\r
    }\r
}\r
\r
public static void flip(int[] arr, int i) {\r
    int left = 0;\r
\r
    while (left < i) {\r
        int temp = arr[left];\r
        arr[left] = arr[i];\r
        arr[i] = temp;\r
        left++;\r
        i--;\r
    }\r
}\r
\r
public static int findMaxIndex(int[] arr, int n) {\r
    int maxIdx = 0;\r
\r
    for (int i = 0; i < n; i++) {\r
        if (arr[i] > arr[maxIdx]) {\r
            maxIdx = i;\r
        }\r
    }\r
\r
    return maxIdx;\r
}\r
`,BT=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static int[] quickSort(int[] arr) {\r
    int n = arr.length;\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int pivot = arr[n / 2];\r
    List<Integer> left = new ArrayList<>();\r
    List<Integer> right = new ArrayList<>();\r
\r
    for (int x : arr) {\r
        if (x < pivot) {\r
            left.add(x);\r
        } else if (x > pivot) {\r
            right.add(x);\r
        }\r
    }\r
\r
    int[] sortedLeft = quickSort(left.stream().mapToInt(i -> i).toArray());\r
    int[] sortedRight = quickSort(right.stream().mapToInt(i -> i).toArray());\r
    int[] result = new int[n];\r
\r
    System.arraycopy(sortedLeft, 0, result, 0, sortedLeft.length);\r
    result[sortedLeft.length] = pivot;\r
    System.arraycopy(sortedRight, 0, result, sortedLeft.length + 1, sortedRight.length);\r
\r
    return result;\r
}\r
`,UT=`import java.util.Arrays;\r
\r
\r
public static void radixSort(int[] arr) {\r
    int maxVal = Arrays.stream(arr).max().getAsInt();\r
    int exp = 1;\r
\r
    while (maxVal / exp > 0) {\r
        countingSort(arr, exp);\r
        exp *= 10;\r
    }\r
}\r
\r
public static void countingSort(int[] arr, int exp) {\r
    int n = arr.length;\r
    int[] output = new int[n];\r
    int[] count = new int[10];\r
\r
    for (int i = 0; i < n; i++) {\r
        int idx = arr[i] / exp;\r
        count[idx % 10]++;\r
    }\r
\r
    for (int i = 1; i < 10; i++) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = n - 1; i >= 0; i--) {\r
        int idx = arr[i] / exp;\r
        output[count[idx % 10] - 1] = arr[i];\r
        count[idx % 10]--;\r
    }\r
\r
    System.arraycopy(output, 0, arr, 0, n);\r
}\r
`,HT=`public static void selectionSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 0; i < n; i++) {\r
        int minIdx = i;\r
\r
        for (int j = i + 1; j < n; j++) {\r
            if (arr[j] < arr[minIdx]) {\r
                minIdx = j;\r
            }\r
        }\r
\r
        if (minIdx != i) {\r
            int temp = arr[i];\r
            arr[i] = arr[minIdx];\r
            arr[minIdx] = temp;\r
        }\r
    }\r
}\r
`,qT=`public static void shellSort(int[] arr) {\r
    int n = arr.length;\r
    int[] gaps = {701, 301, 132, 57, 23, 10, 4, 1};\r
\r
    for (int gap : gaps) {\r
        for (int i = gap; i < n; i++) {\r
            int tmp = arr[i];\r
            int j = i;\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap];\r
                j -= gap;\r
            }\r
\r
            if (j != i) {\r
                arr[j] = tmp;\r
            }\r
        }\r
    }\r
}\r
`,GT=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static int[] sleepSort(int[] arr) {\r
    List<Integer> sortedArr = new ArrayList<>();\r
    List<Thread> threads = new ArrayList<>();\r
\r
    for (int num : arr) {\r
        Thread thread = new Thread(() -> snorlax(num, sortedArr));\r
        threads.add(thread);\r
    }\r
\r
    for (Thread thread : threads) {\r
        thread.start();\r
    }\r
\r
    for (Thread thread : threads) {\r
        try {\r
            thread.join();\r
        } catch (InterruptedException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
\r
    return sortedArr.stream().mapToInt(i -> i).toArray();\r
}\r
\r
public static void snorlax(int num, List<Integer> arr) {\r
    try {\r
        Thread.sleep(num);\r
    } catch (InterruptedException e) {\r
        e.printStackTrace();\r
    }\r
    arr.add(num);\r
}\r
`,YT=`public static int[] timSort(int[] arr) {\r
    int n = arr.length;\r
    int minRun = 32;\r
\r
    for (int start = 0; start < n; start += minRun) {\r
        int end = Math.min(start + minRun - 1, n - 1);\r
        insertionSort(arr, start, end);\r
    }\r
\r
    int size = minRun;\r
\r
    while (size < n) {\r
        for (int left = 0; left < n; left += 2 * size) {\r
            int mid = Math.min(n - 1, left + size - 1);\r
            int right = Math.min(left + 2 * size - 1, n - 1);\r
            arr = merge(arr, left, mid, right);\r
        }\r
        size *= 2;\r
    }\r
\r
    return arr;\r
}\r
\r
public static void insertionSort(int[] arr, int left, int right) {\r
    for (int i = left + 1; i <= right; i++) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= left && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            j--;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
\r
public static int[] merge(int[] arr, int left, int mid, int right) {\r
    int[] output = new int[right - left + 1];\r
    int i = left, j = mid + 1, k = 0;\r
\r
    while (i <= mid && j <= right) {\r
        if (arr[i] <= arr[j]) {\r
            output[k++] = arr[i++];\r
        } else {\r
            output[k++] = arr[j++];\r
        }\r
    }\r
\r
    while (i <= mid) {\r
        output[k++] = arr[i++];\r
    }\r
\r
    while (j <= right) {\r
        output[k++] = arr[j++];\r
    }\r
\r
    System.arraycopy(output, 0, arr, left, output.length);\r
    return arr;\r
}\r
`,VT=`#include <algorithm>\r
#include <random>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
void BogoSort(vector<int>& arr) {\r
    vector<int> target = arr;\r
    sort(target.begin(), target.end());\r
\r
    random_device rd;\r
    mt19937 g(rd());\r
\r
    while (!is_sorted(arr.begin(), arr.end())) {\r
        shuffle(arr.begin(), arr.end(), g);\r
    }\r
}\r
`,QT=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void BubbleSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 0; i < n; ++i) {\r
        bool swapped = false;\r
\r
        for (int j = 0; j < n - i - 1; ++j) {\r
            if (arr[j] > arr[j + 1]) {\r
                std::swap(arr[j], arr[j + 1]);\r
                swapped = true;\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break;\r
        }\r
    }\r
}\r
`,KT=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<int> BucketSort(vector<int>& arr) {\r
    int num_buckets = 10;\r
    int min_num = *min_element(arr.begin(), arr.end());\r
    int max_num = *max_element(arr.begin(), arr.end());\r
    double bucket_size = static_cast<double>(max_num - min_num) / num_buckets;\r
    vector<vector<int>> buckets(num_buckets);\r
    vector<int> result;\r
\r
    for (int num : arr) {\r
        int index = min(static_cast<int>((num - min_num) / bucket_size), num_buckets - 1);\r
        buckets[index].push_back(num);\r
    }\r
\r
    for (auto& bucket : buckets) {\r
        sort(bucket.begin(), bucket.end());\r
        result.insert(result.end(), bucket.begin(), bucket.end());\r
    }\r
\r
    return result;\r
}\r
`,JT=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<int> CountingSort(vector<int>& arr) {\r
    int max_num = *max_element(arr.begin(), arr.end());\r
    int min_num = *min_element(arr.begin(), arr.end());\r
    int count_range = max_num - min_num + 1;\r
    vector<int> count(count_range, 0);\r
    vector<int> output(arr.size(), 0);\r
\r
    for (int num : arr) {\r
        count[num - min_num]++;\r
    }\r
\r
    for (int i = 1; i < count_range; ++i) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = arr.size() - 1; i >= 0; --i) {\r
        output[count[arr[i] - min_num] - 1] = arr[i];\r
        count[arr[i] - min_num]--;\r
    }\r
\r
    return output;\r
}\r
`,XT=`#include <vector>\r
#include <algorithm>\r
#include <cmath>\r
\r
using namespace std;\r
\r
\r
void CubeSort(vector<int>& arr, int processors) {\r
    int n = arr.size();\r
    vector<vector<int>> subarrays;\r
    int subarray_size = n / processors;\r
\r
    for (int i = 0; i < processors; ++i) {\r
        vector<int> subarray(arr.begin() + i * subarray_size, arr.begin() + (i + 1) * subarray_size);\r
        sort(subarray.begin(), subarray.end());\r
        subarrays.push_back(subarray);\r
    }\r
\r
    for (int dimension = 0; dimension < log2(processors); ++dimension) {\r
        for (int i = 0; i < processors; ++i) {\r
            int partner = i ^ (1 << dimension);\r
            vector<int> merged;\r
            if (i < partner) {\r
                merged = subarrays[i];\r
                merged.insert(merged.end(), subarrays[partner].begin(), subarrays[partner].end());\r
            } else {\r
                merged = subarrays[partner];\r
                merged.insert(merged.end(), subarrays[i].begin(), subarrays[i].end());\r
            }\r
            sort(merged.begin(), merged.end());\r
            subarrays[i].assign(merged.begin(), merged.begin() + subarray_size);\r
            subarrays[partner].assign(merged.begin() + subarray_size, merged.end());\r
        }\r
    }\r
\r
    arr.clear();\r
    for (auto& subarray : subarrays) {\r
        arr.insert(arr.end(), subarray.begin(), subarray.end());\r
    }\r
}\r
`,ZT=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void Heapify(vector<int>& arr, int n, int i) {\r
    int largest = i;\r
    int left = 2 * i + 1;\r
    int right = 2 * i + 2;\r
\r
    if (left < n && arr[left] > arr[largest]) {\r
        largest = left;\r
    }\r
    if (right < n && arr[right] > arr[largest]) {\r
        largest = right;\r
    }\r
    if (largest != i) {\r
        swap(arr[i], arr[largest]);\r
        Heapify(arr, n, largest);\r
    }\r
}\r
\r
void HeapSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = n / 2 - 1; i >= 0; --i) {\r
        Heapify(arr, n, i);\r
    }\r
    for (int i = n - 1; i > 0; --i) {\r
        swap(arr[0], arr[i]);\r
        Heapify(arr, i, 0);\r
    }\r
}\r
`,IT=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void InsertionSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 1; i < n; ++i) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            --j;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
`,FT=`#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> Merge(vector<int>& left, vector<int>& right) {\r
    vector<int> output;\r
\r
    while (!left.empty() && !right.empty()) {\r
        int min_num = (left[0] <= right[0]) ? left[0] : right[0];\r
        output.push_back(min_num);\r
\r
        if (left[0] <= right[0]) {\r
            left.erase(left.begin());\r
        } else {\r
            right.erase(right.begin());\r
        }\r
    }\r
\r
    output.insert(output.end(), left.begin(), left.end());\r
    output.insert(output.end(), right.begin(), right.end());\r
\r
    return output;\r
}\r
\r
vector<int> MergeSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int mid = n / 2;\r
    vector<int> left(arr.begin(), arr.begin() + mid);\r
    vector<int> right(arr.begin() + mid, arr.end());\r
\r
    left = MergeSort(left);\r
    right = MergeSort(right);\r
\r
    return Merge(left, right);\r
}\r
`,WT=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int FindMaxIndex(vector<int>& arr, int n) {\r
    int max_idx = 0;\r
\r
    for (int i = 0; i < n; ++i) {\r
        if (arr[i] > arr[max_idx]) {\r
            max_idx = i;\r
        }\r
    }\r
\r
    return max_idx;\r
}\r
\r
void Flip(vector<int>& arr, int i) {\r
    int left = 0;\r
\r
    while (left < i) {\r
        swap(arr[left], arr[i]);\r
        left++;\r
        i--;\r
    }\r
}\r
\r
void PancakeSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int size = n; size >= 2; --size) {\r
        int max_idx = FindMaxIndex(arr, size);\r
\r
        if (max_idx != size - 1) {\r
            Flip(arr, max_idx);\r
            Flip(arr, size - 1);\r
        }\r
    }\r
}\r
`,PT=`#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> QuickSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int pivot = arr[n / 2];\r
    vector<int> left, right;\r
\r
    for (int x : arr) {\r
        if (x < pivot) {\r
            left.push_back(x);\r
        } else if (x > pivot) {\r
            right.push_back(x);\r
        }\r
    }\r
\r
    left = QuickSort(left);\r
    right = QuickSort(right);\r
\r
    left.push_back(pivot);\r
    left.insert(left.end(), right.begin(), right.end());\r
\r
    return left;\r
}\r
`,$T=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void CountingSort(vector<int>& arr, int exp) {\r
    int n = arr.size();\r
    vector<int> output(n, 0);\r
    vector<int> count(10, 0);\r
\r
    for (int i = 0; i < n; ++i) {\r
        int idx = arr[i] / exp % 10;\r
        count[idx]++;\r
    }\r
\r
    for (int i = 1; i < 10; ++i) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = n - 1; i >= 0; --i) {\r
        int idx = arr[i] / exp % 10;\r
        output[count[idx] - 1] = arr[i];\r
        count[idx]--;\r
    }\r
\r
    for (int i = 0; i < n; ++i) {\r
        arr[i] = output[i];\r
    }\r
}\r
\r
void RadixSort(vector<int>& arr) {\r
    int max_val = *max_element(arr.begin(), arr.end());\r
    int exp = 1;\r
\r
    while (max_val / exp > 0) {\r
        CountingSort(arr, exp);\r
        exp *= 10;\r
    }\r
}\r
`,nS=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void SelectionSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 0; i < n; ++i) {\r
        int min_i = i;\r
\r
        for (int j = i + 1; j < n; ++j) {\r
            if (arr[j] < arr[min_i]) {\r
                min_i = j;\r
            }\r
        }\r
\r
        if (min_i != i) {\r
            swap(arr[i], arr[min_i]);\r
        }\r
    }\r
}\r
`,rS=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void ShellSort(vector<int>& arr) {\r
    int n = arr.size();\r
    vector<int> gaps = {701, 301, 132, 57, 23, 10, 4, 1};\r
\r
    for (int gap : gaps) {\r
        for (int i = gap; i < n; ++i) {\r
            int tmp = arr[i];\r
            int j = i;\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap];\r
                j -= gap;\r
            }\r
\r
            if (j != i) {\r
                arr[j] = tmp;\r
            }\r
        }\r
    }\r
}\r
`,eS=`#include <chrono>\r
#include <thread>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
void Snorlax(double num, vector<double>& arr) {\r
    this_thread::sleep_for(chrono::milliseconds(static_cast<int>(num)));\r
    arr.push_back(num);\r
}\r
\r
vector<double> SleepSort(vector<double>& arr) {\r
    vector<double> sorted_arr;\r
    vector<thread> threads;\r
\r
    for (double num : arr) {\r
        threads.emplace_back(Snorlax, num, ref(sorted_arr));\r
    }\r
\r
    for (thread& t : threads) {\r
        t.join();\r
    }\r
\r
    return sorted_arr;\r
}\r
`,tS=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
void InsertionSort(vector<double>& arr, int left, int right) {\r
    for (int i = left + 1; i <= right; ++i) {\r
        double key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= left && arr[j] > key) {\r
            arr[j + 1] = arr[j];\r
            --j;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
\r
vector<double> Merge(const vector<double>& left, const vector<double>& right) {\r
    vector<double> output;\r
\r
    int left_index = 0;\r
    int right_index = 0;\r
\r
    while (left_index < left.size() && right_index < right.size()) {\r
        if (left[left_index] <= right[right_index]) {\r
            output.push_back(left[left_index++]);\r
        } else {\r
            output.push_back(right[right_index++]);\r
        }\r
    }\r
\r
    while (left_index < left.size()) {\r
        output.push_back(left[left_index++]);\r
    }\r
\r
    while (right_index < right.size()) {\r
        output.push_back(right[right_index++]);\r
    }\r
\r
    return output;\r
}\r
\r
vector<double> TimSort(vector<double>& arr) {\r
    int n = arr.size();\r
    int min_run = 32;\r
\r
    for (int start = 0; start < n; start += min_run) {\r
        int end = min(start + min_run - 1, n - 1);\r
        InsertionSort(arr, start, end);\r
    }\r
\r
    int size = min_run;\r
\r
    while (size < n) {\r
        for (int left = 0; left < n; left += 2 * size) {\r
            int mid = min(n - 1, left + size - 1);\r
            int right = min((left + 2 * size - 1), (n - 1));\r
            vector<double> merged = Merge(\r
                vector<double>(arr.begin() + left, arr.begin() + mid + 1),\r
                vector<double>(arr.begin() + mid + 1, arr.begin() + right + 1)\r
            );\r
            copy(merged.begin(), merged.end(), arr.begin() + left);\r
        }\r
        size *= 2;\r
    }\r
\r
    return arr;\r
}\r
`,aS=`def bogo_sort(arr)\r
  target = arr.sort\r
\r
  until arr == target\r
    arr.shuffle!\r
  end\r
end\r
`,iS=`def bubble_sort(arr)\r
  n = arr.size\r
\r
  n.times do |i|\r
    swapped = false\r
\r
    (0...(n - i - 1)).each do |j|\r
      if arr[j] > arr[j + 1]\r
        arr[j], arr[j + 1] = arr[j + 1], arr[j]\r
        swapped = true\r
      end\r
    end\r
\r
    break unless swapped\r
  end\r
end\r
`,lS=`def bucket_sort(arr)\r
  num_buckets = 10\r
  min_num     = arr.min\r
  max_num     = arr.max\r
  bucket_size = (max_num - min_num).to_f / num_buckets\r
  buckets     = Array.new(num_buckets) { [] }\r
\r
  arr.each do |num|\r
    index = [( (num - min_num) / bucket_size ).to_i, num_buckets - 1].min\r
    buckets[index] << num\r
  end\r
\r
  buckets.map { |bucket| bucket.sort }.flatten\r
end\r
`,sS=`\r
def counting_sort(arr)\r
  max_num     = arr.max\r
  min_num     = arr.min\r
  count_range = max_num - min_num + 1\r
  count       = Array.new(count_range, 0)\r
  output      = Array.new(arr.size, 0)\r
\r
  arr.each do |num|\r
    count[num - min_num] += 1\r
  end\r
\r
  (1...count_range).each do |i|\r
    count[i] += count[i - 1]\r
  end\r
\r
  arr.reverse_each do |num|\r
    output[count[num - min_num] - 1] = num\r
    count[num - min_num] -= 1\r
  end\r
\r
  output\r
end\r
`,cS=`def cube_sort(arr, processors)\r
  n             = arr.size\r
  subarrays     = []\r
  subarray_size = n / processors\r
\r
  (0...processors).each do |i|\r
    subarray = arr[i * subarray_size, subarray_size]\r
    subarrays << subarray\r
  end\r
\r
  subarrays.each(&:sort!)\r
\r
  (0...(processors.bit_length - 1)).each do |dimension|\r
    (0...processors).each do |i|\r
      partner = i ^ (1 << dimension)\r
      if i < partner\r
        merged = subarrays[i] + subarrays[partner]\r
      else\r
        merged = subarrays[partner] + subarrays[i]\r
      end\r
      merged.sort!\r
      subarrays[i] = merged[0...subarray_size]\r
      subarrays[partner] = merged[subarray_size, subarray_size]\r
    end\r
  end\r
\r
  arr.replace(subarrays.flatten)\r
end\r
`,uS=`def heap_sort(arr)\r
  n = arr.size\r
\r
  (n / 2 - 1).downto(0) do |i|\r
    heapify(arr, n, i)\r
  end\r
\r
  (n - 1).downto(1) do |i|\r
    arr[i], arr[0] = arr[0], arr[i]\r
    heapify(arr, i, 0)\r
  end\r
\r
  arr\r
end\r
\r
def heapify(arr, n, i)\r
  largest = i\r
  left = 2 * i + 1\r
  right = 2 * i + 2\r
\r
  largest = left if left < n && arr[left] > arr[largest]\r
  largest = right if right < n && arr[right] > arr[largest]\r
\r
  if largest != i\r
    arr[i], arr[largest] = arr[largest], arr[i]\r
    heapify(arr, n, largest)\r
  end\r
end\r
`,oS=`def insertion_sort(arr)\r
  n = arr.size\r
\r
  (1...n).each do |i|\r
    key = arr[i]\r
    j = i - 1\r
\r
    while j >= 0 && key < arr[j]\r
      arr[j + 1] = arr[j]\r
      j -= 1\r
    end\r
\r
    arr[j + 1] = key\r
  end\r
end\r
`,dS=`def merge_sort(arr)\r
  n = arr.size\r
  return arr if n <= 1\r
\r
  mid   = n / 2\r
  left  = merge_sort(arr[0...mid])\r
  right = merge_sort(arr[mid..-1])\r
\r
  merge(left, right)\r
end\r
\r
def merge(left, right)\r
  output = []\r
\r
  until left.empty? || right.empty?\r
    if left.first <= right.first\r
      output << left.shift\r
    else\r
      output << right.shift\r
    end\r
  end\r
\r
  output + left + right\r
end\r
`,fS=`def pancake_sort(arr)\r
  n = arr.size\r
\r
  (2..n).to_a.reverse.each do |size|\r
    max_idx = find_max_index(arr, size)\r
\r
    if max_idx != size - 1\r
      flip(arr, max_idx)\r
      flip(arr, size - 1)\r
    end\r
  end\r
end\r
\r
def flip(arr, i)\r
  left = 0\r
\r
  while left < i\r
    arr[left], arr[i] = arr[i], arr[left]\r
    left += 1\r
    i -= 1\r
  end\r
end\r
\r
def find_max_index(arr, n)\r
  max_idx = 0\r
\r
  n.times do |i|\r
    max_idx = i if arr[i] > arr[max_idx]\r
  end\r
\r
  max_idx\r
end\r
`,hS=`def quick_sort(arr)\r
  n = arr.size\r
  return arr if n <= 1\r
\r
  pivot = arr[n / 2]\r
  left  = arr.select { |x| x < pivot }\r
  right = arr.select { |x| x > pivot }\r
\r
  quick_sort(left) + [pivot] + quick_sort(right)\r
end\r
`,gS=`def radix_sort(arr)\r
  max_val = arr.max\r
  exp     = 1\r
\r
  while max_val / exp > 0\r
    counting_sort(arr, exp)\r
    exp *= 10\r
  end\r
end\r
\r
def counting_sort(arr, exp)\r
  n       = arr.size\r
  output  = Array.new(n, 0)\r
  count   = Array.new(10, 0)\r
\r
  n.times do |i|\r
    idx = arr[i] / exp\r
    count[idx % 10] += 1\r
  end\r
\r
  (1...10).each do |i|\r
    count[i] += count[i - 1]\r
  end\r
\r
  (n - 1).downto(0) do |i|\r
    idx = arr[i] / exp\r
    output[count[idx % 10] - 1] = arr[i]\r
    count[idx % 10] -= 1\r
  end\r
\r
  n.times do |i|\r
    arr[i] = output[i]\r
  end\r
end\r
`,pS=`def selection_sort(arr)\r
  n = arr.size\r
\r
  n.times do |i|\r
    min_i = i\r
\r
    ((i + 1)...n).each do |j|\r
      min_i = j if arr[j] < arr[min_i]\r
    end\r
\r
    arr[i], arr[min_i] = arr[min_i], arr[i] if min_i != i\r
  end\r
end\r
`,mS=`def shell_sort(arr)\r
  n     = arr.size\r
  gaps  = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
  gaps.each do |gap|\r
    (gap...n).each do |i|\r
      tmp = arr[i]\r
      j = i\r
\r
      while j >= gap && arr[j - gap] > tmp\r
        arr[j] = arr[j - gap]\r
        j -= gap\r
      end\r
\r
      arr[j] = tmp if j != i\r
    end\r
  end\r
end\r
`,bS=`def sleep_sort(arr)\r
  sorted_arr  = []\r
  threads     = []\r
\r
  arr.each do |num|\r
    threads << Thread.new do\r
      sleep(num / 1000.0)\r
      sorted_arr << num\r
    end\r
  end\r
\r
  threads.each(&:join)\r
  sorted_arr\r
end\r
`,yS=`def tim_sort(arr)\r
  n       = arr.size\r
  min_run = 32\r
\r
  (0...n).step(min_run) do |start_idx|\r
    end_idx = [start_idx + min_run - 1, n - 1].min\r
    insertion_sort(arr, start_idx, end_idx)\r
  end\r
\r
  size = min_run\r
\r
  while size < n\r
    (0...n).step(2 * size) do |left|\r
      mid = [left + size - 1, n - 1].min\r
      right = [left + 2 * size - 1, n - 1].min\r
      arr[left..right] = merge(arr[left..mid], arr[(mid + 1)..right])\r
    end\r
    size *= 2\r
  end\r
\r
  arr\r
end\r
\r
def insertion_sort(arr, left, right)\r
  (left + 1..right).each do |i|\r
    key = arr[i]\r
    j = i\r
    while j > left && key < arr[j - 1]\r
      arr[j] = arr[j - 1]\r
      j -= 1\r
    end\r
    arr[j] = key\r
  end\r
end\r
\r
def merge_sort(arr)\r
  return arr if arr.size <= 1\r
\r
  mid = arr.size / 2\r
  left = merge_sort(arr[0...mid])\r
  right = merge_sort(arr[mid..-1])\r
\r
  merge(left, right)\r
end\r
\r
def merge(left, right)\r
  output = []\r
\r
  until left.empty? || right.empty?\r
    if left.first <= right.first\r
      output << left.shift\r
    else\r
      output << right.shift\r
    end\r
  end\r
\r
  output + left + right\r
end\r
`;function xS(){return a.jsxs("div",{className:Un.container,children:[a.jsx("h2",{className:Un.sectionHeader,children:"Sorting Algorithms"}),a.jsx("section",{id:"sort-bubble",children:a.jsxs(c,{title:"bubble sort",children:[a.jsx(c.Tab,{code:$_,language:"python"}),a.jsx(c.Tab,{code:gT,language:"javascript"}),a.jsx(c.Tab,{code:wT,language:"java"}),a.jsx(c.Tab,{code:QT,language:"cpp"}),a.jsx(c.Tab,{code:iS,language:"ruby"})]})}),a.jsx("section",{id:"sort-selection",children:a.jsxs(c,{title:"selection sort",children:[a.jsx(c.Tab,{code:uT,language:"python"}),a.jsx(c.Tab,{code:jT,language:"javascript"}),a.jsx(c.Tab,{code:HT,language:"java"}),a.jsx(c.Tab,{code:nS,language:"cpp"}),a.jsx(c.Tab,{code:pS,language:"ruby"})]})}),a.jsx("section",{id:"sort-insertion",children:a.jsxs(c,{title:"insertion sort",children:[a.jsx(c.Tab,{code:aT,language:"python"}),a.jsx(c.Tab,{code:xT,language:"javascript"}),a.jsx(c.Tab,{code:DT,language:"java"}),a.jsx(c.Tab,{code:IT,language:"cpp"}),a.jsx(c.Tab,{code:oS,language:"ruby"})]})}),a.jsx("section",{id:"sort-shell",children:a.jsxs(c,{title:"shell sort",children:[a.jsx(c.Tab,{code:oT,language:"python"}),a.jsx(c.Tab,{code:NT,language:"javascript"}),a.jsx(c.Tab,{code:qT,language:"java"}),a.jsx(c.Tab,{code:rS,language:"cpp"}),a.jsx(c.Tab,{code:mS,language:"ruby"})]})}),a.jsx("section",{id:"sort-merge",children:a.jsxs(c,{title:"merge sort",children:[a.jsx(c.Tab,{code:iT,language:"python"}),a.jsx(c.Tab,{code:vT,language:"javascript"}),a.jsx(c.Tab,{code:LT,language:"java"}),a.jsx(c.Tab,{code:FT,language:"cpp"}),a.jsx(c.Tab,{code:dS,language:"ruby"})]})}),a.jsx("section",{id:"sort-quick",children:a.jsxs(c,{title:"quick sort",children:[a.jsx(c.Tab,{code:sT,language:"python"}),a.jsx(c.Tab,{code:TT,language:"javascript"}),a.jsx(c.Tab,{code:BT,language:"java"}),a.jsx(c.Tab,{code:PT,language:"cpp"}),a.jsx(c.Tab,{code:hS,language:"ruby"})]})}),a.jsx("section",{id:"sort-tim",children:a.jsxs(c,{title:"timsort",children:[a.jsx(c.Tab,{code:fT,language:"python"}),a.jsx(c.Tab,{code:AT,language:"javascript"}),a.jsx(c.Tab,{code:YT,language:"java"}),a.jsx(c.Tab,{code:tS,language:"cpp"}),a.jsx(c.Tab,{code:yS,language:"ruby"})]})}),a.jsx("section",{id:"sort-heap",children:a.jsxs(c,{title:"heap sort",children:[a.jsx(c.Tab,{code:tT,language:"python"}),a.jsx(c.Tab,{code:yT,language:"javascript"}),a.jsx(c.Tab,{code:zT,language:"java"}),a.jsx(c.Tab,{code:ZT,language:"cpp"}),a.jsx(c.Tab,{code:uS,language:"ruby"})]})}),a.jsx("section",{id:"sort-counting",children:a.jsxs(c,{title:"counting sort",children:[a.jsx(c.Tab,{code:rT,language:"python"}),a.jsx(c.Tab,{code:mT,language:"javascript"}),a.jsx(c.Tab,{code:kT,language:"java"}),a.jsx(c.Tab,{code:JT,language:"cpp"}),a.jsx(c.Tab,{code:sS,language:"ruby"})]})}),a.jsx("section",{id:"sort-bucket",children:a.jsxs(c,{title:"bucket sort",children:[a.jsx(c.Tab,{code:nT,language:"python"}),a.jsx(c.Tab,{code:pT,language:"javascript"}),a.jsx(c.Tab,{code:MT,language:"java"}),a.jsx(c.Tab,{code:KT,language:"cpp"}),a.jsx(c.Tab,{code:lS,language:"ruby"})]})}),a.jsx("section",{id:"sort-radix",children:a.jsxs(c,{title:"radix sort",children:[a.jsx(c.Tab,{code:cT,language:"python"}),a.jsx(c.Tab,{code:ST,language:"javascript"}),a.jsx(c.Tab,{code:UT,language:"java"}),a.jsx(c.Tab,{code:$T,language:"cpp"}),a.jsx(c.Tab,{code:gS,language:"ruby"})]})}),a.jsx("section",{id:"sort-cube",children:a.jsxs(c,{title:"cubesort",children:[a.jsx(c.Tab,{code:eT,language:"python"}),a.jsx(c.Tab,{code:bT,language:"javascript"}),a.jsx(c.Tab,{code:RT,language:"java"}),a.jsx(c.Tab,{code:XT,language:"cpp"}),a.jsx(c.Tab,{code:cS,language:"ruby"})]})}),a.jsx("section",{id:"sort-bogo",children:a.jsxs(c,{title:"bogo sort",children:[a.jsx(c.Tab,{code:P_,language:"python"}),a.jsx(c.Tab,{code:hT,language:"javascript"}),a.jsx(c.Tab,{code:OT,language:"java"}),a.jsx(c.Tab,{code:VT,language:"cpp"}),a.jsx(c.Tab,{code:aS,language:"ruby"})]})}),a.jsx("section",{id:"sort-pancake",children:a.jsxs(c,{title:"pancake sort",children:[a.jsx(c.Tab,{code:lT,language:"python"}),a.jsx(c.Tab,{code:_T,language:"javascript"}),a.jsx(c.Tab,{code:CT,language:"java"}),a.jsx(c.Tab,{code:WT,language:"cpp"}),a.jsx(c.Tab,{code:fS,language:"ruby"})]})}),a.jsx("section",{id:"sort-sleep",children:a.jsxs(c,{title:"sleep sort",children:[a.jsx(c.Tab,{code:dT,language:"python"}),a.jsx(c.Tab,{code:ET,language:"javascript"}),a.jsx(c.Tab,{code:GT,language:"java"}),a.jsx(c.Tab,{code:eS,language:"cpp"}),a.jsx(c.Tab,{code:bS,language:"ruby"})]})})]})}function vS(){const{isSidebarOpen:o}=Du(),y=Ir(zh.main,!o&&zh.sidebarHidden);return a.jsxs("main",{className:y,children:[a.jsx(e1,{}),a.jsx(i0,{}),a.jsx(m0,{}),a.jsx(A0,{}),a.jsx(U0,{}),a.jsx(ny,{}),a.jsx(Gy,{}),a.jsx(Xy,{}),a.jsx(xx,{}),a.jsx(Nx,{}),a.jsx(Gx,{}),a.jsx(Uv,{}),a.jsx(n_,{}),a.jsx(W_,{}),a.jsx(xS,{})]})}function _S(){return a.jsx(ds.StrictMode,{children:a.jsx(fm,{children:a.jsx(om,{children:a.jsxs("div",{className:"App",children:[a.jsx(gm,{}),a.jsx(Ub,{}),a.jsx(vS,{})]})})})})}um.createRoot(document.getElementById("root")).render(a.jsx(_S,{}));
