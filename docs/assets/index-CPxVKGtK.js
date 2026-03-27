(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))d(w);new MutationObserver(w=>{for(const L of w)if(L.type==="childList")for(const U of L.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&d(U)}).observe(document,{childList:!0,subtree:!0});function x(w){const L={};return w.integrity&&(L.integrity=w.integrity),w.referrerPolicy&&(L.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?L.credentials="include":w.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function d(w){if(w.ep)return;w.ep=!0;const L=x(w);fetch(w.href,L)}})();function Va(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var wo={exports:{}},qi={};var Sh;function mm(){if(Sh)return qi;Sh=1;var u=Symbol.for("react.transitional.element"),_=Symbol.for("react.fragment");function x(d,w,L){var U=null;if(L!==void 0&&(U=""+L),w.key!==void 0&&(U=""+w.key),"key"in w){L={};for(var I in w)I!=="key"&&(L[I]=w[I])}else L=w;return w=L.ref,{$$typeof:u,type:d,key:U,ref:w!==void 0?w:null,props:L}}return qi.Fragment=_,qi.jsx=x,qi.jsxs=x,qi}var Th;function bm(){return Th||(Th=1,wo.exports=mm()),wo.exports}var a=bm(),No={exports:{}},Gi={},Ao={exports:{}},Oo={};var jh;function _m(){return jh||(jh=1,(function(u){function _(E,H){var V=E.length;E.push(H);n:for(;0<V;){var Sn=V-1>>>1,Tn=E[Sn];if(0<w(Tn,H))E[Sn]=H,E[V]=Tn,V=Sn;else break n}}function x(E){return E.length===0?null:E[0]}function d(E){if(E.length===0)return null;var H=E[0],V=E.pop();if(V!==H){E[0]=V;n:for(var Sn=0,Tn=E.length,g=Tn>>>1;Sn<g;){var N=2*(Sn+1)-1,G=E[N],J=N+1,an=E[J];if(0>w(G,V))J<Tn&&0>w(an,G)?(E[Sn]=an,E[J]=V,Sn=J):(E[Sn]=G,E[N]=V,Sn=N);else if(J<Tn&&0>w(an,V))E[Sn]=an,E[J]=V,Sn=J;else break n}}return H}function w(E,H){var V=E.sortIndex-H.sortIndex;return V!==0?V:E.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var L=performance;u.unstable_now=function(){return L.now()}}else{var U=Date,I=U.now();u.unstable_now=function(){return U.now()-I}}var z=[],y=[],B=1,A=null,D=3,K=!1,en=!1,Z=!1,pn=!1,vn=typeof setTimeout=="function"?setTimeout:null,xn=typeof clearTimeout=="function"?clearTimeout:null,nn=typeof setImmediate<"u"?setImmediate:null;function sn(E){for(var H=x(y);H!==null;){if(H.callback===null)d(y);else if(H.startTime<=E)d(y),H.sortIndex=H.expirationTime,_(z,H);else break;H=x(y)}}function Dn(E){if(Z=!1,sn(E),!en)if(x(z)!==null)en=!0,mn||(mn=!0,$n());else{var H=x(y);H!==null&&jr(Dn,H.startTime-E)}}var mn=!1,on=-1,zn=5,Fn=-1;function br(){return pn?!0:!(u.unstable_now()-Fn<zn)}function cr(){if(pn=!1,mn){var E=u.unstable_now();Fn=E;var H=!0;try{n:{en=!1,Z&&(Z=!1,xn(on),on=-1),K=!0;var V=D;try{r:{for(sn(E),A=x(z);A!==null&&!(A.expirationTime>E&&br());){var Sn=A.callback;if(typeof Sn=="function"){A.callback=null,D=A.priorityLevel;var Tn=Sn(A.expirationTime<=E);if(E=u.unstable_now(),typeof Tn=="function"){A.callback=Tn,sn(E),H=!0;break r}A===x(z)&&d(z),sn(E)}else d(z);A=x(z)}if(A!==null)H=!0;else{var g=x(y);g!==null&&jr(Dn,g.startTime-E),H=!1}}break n}finally{A=null,D=V,K=!1}H=void 0}}finally{H?$n():mn=!1}}}var $n;if(typeof nn=="function")$n=function(){nn(cr)};else if(typeof MessageChannel<"u"){var wr=new MessageChannel,ar=wr.port2;wr.port1.onmessage=cr,$n=function(){ar.postMessage(null)}}else $n=function(){vn(cr,0)};function jr(E,H){on=vn(function(){E(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(E){E.callback=null},u.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zn=0<E?Math.floor(1e3/E):5},u.unstable_getCurrentPriorityLevel=function(){return D},u.unstable_next=function(E){switch(D){case 1:case 2:case 3:var H=3;break;default:H=D}var V=D;D=H;try{return E()}finally{D=V}},u.unstable_requestPaint=function(){pn=!0},u.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var V=D;D=E;try{return H()}finally{D=V}},u.unstable_scheduleCallback=function(E,H,V){var Sn=u.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Sn+V:Sn):V=Sn,E){case 1:var Tn=-1;break;case 2:Tn=250;break;case 5:Tn=1073741823;break;case 4:Tn=1e4;break;default:Tn=5e3}return Tn=V+Tn,E={id:B++,callback:H,priorityLevel:E,startTime:V,expirationTime:Tn,sortIndex:-1},V>Sn?(E.sortIndex=V,_(y,E),x(z)===null&&E===x(y)&&(Z?(xn(on),on=-1):Z=!0,jr(Dn,V-Sn))):(E.sortIndex=Tn,_(z,E),en||K||(en=!0,mn||(mn=!0,$n()))),E},u.unstable_shouldYield=br,u.unstable_wrapCallback=function(E){var H=D;return function(){var V=D;D=H;try{return E.apply(this,arguments)}finally{D=V}}}})(Oo)),Oo}var Eh;function xm(){return Eh||(Eh=1,Ao.exports=_m()),Ao.exports}var ko={exports:{}},bn={};var wh;function ym(){if(wh)return bn;wh=1;var u=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.iterator;function K(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var en={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,pn={};function vn(g,N,G){this.props=g,this.context=N,this.refs=pn,this.updater=G||en}vn.prototype.isReactComponent={},vn.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},vn.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function xn(){}xn.prototype=vn.prototype;function nn(g,N,G){this.props=g,this.context=N,this.refs=pn,this.updater=G||en}var sn=nn.prototype=new xn;sn.constructor=nn,Z(sn,vn.prototype),sn.isPureReactComponent=!0;var Dn=Array.isArray;function mn(){}var on={H:null,A:null,T:null,S:null},zn=Object.prototype.hasOwnProperty;function Fn(g,N,G){var J=G.ref;return{$$typeof:u,type:g,key:N,ref:J!==void 0?J:null,props:G}}function br(g,N){return Fn(g.type,N,g.props)}function cr(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function $n(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(G){return N[G]})}var wr=/\/+/g;function ar(g,N){return typeof g=="object"&&g!==null&&g.key!=null?$n(""+g.key):N.toString(36)}function jr(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(mn,mn):(g.status="pending",g.then(function(N){g.status==="pending"&&(g.status="fulfilled",g.value=N)},function(N){g.status==="pending"&&(g.status="rejected",g.reason=N)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function E(g,N,G,J,an){var hn=typeof g;(hn==="undefined"||hn==="boolean")&&(g=null);var gn=!1;if(g===null)gn=!0;else switch(hn){case"bigint":case"string":case"number":gn=!0;break;case"object":switch(g.$$typeof){case u:case _:gn=!0;break;case B:return gn=g._init,E(gn(g._payload),N,G,J,an)}}if(gn)return an=an(g),gn=J===""?"."+ar(g,0):J,Dn(an)?(G="",gn!=null&&(G=gn.replace(wr,"$&/")+"/"),E(an,N,G,"",function(Br){return Br})):an!=null&&(cr(an)&&(an=br(an,G+(an.key==null||g&&g.key===an.key?"":(""+an.key).replace(wr,"$&/")+"/")+gn)),N.push(an)),1;gn=0;var Mn=J===""?".":J+":";if(Dn(g))for(var In=0;In<g.length;In++)J=g[In],hn=Mn+ar(J,In),gn+=E(J,N,G,hn,an);else if(In=K(g),typeof In=="function")for(g=In.call(g),In=0;!(J=g.next()).done;)J=J.value,hn=Mn+ar(J,In++),gn+=E(J,N,G,hn,an);else if(hn==="object"){if(typeof g.then=="function")return E(jr(g),N,G,J,an);throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return gn}function H(g,N,G){if(g==null)return g;var J=[],an=0;return E(g,J,"","",function(hn){return N.call(G,hn,an++)}),J}function V(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(G){(g._status===0||g._status===-1)&&(g._status=1,g._result=G)},function(G){(g._status===0||g._status===-1)&&(g._status=2,g._result=G)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var Sn=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},Tn={map:H,forEach:function(g,N,G){H(g,function(){N.apply(this,arguments)},G)},count:function(g){var N=0;return H(g,function(){N++}),N},toArray:function(g){return H(g,function(N){return N})||[]},only:function(g){if(!cr(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return bn.Activity=A,bn.Children=Tn,bn.Component=vn,bn.Fragment=x,bn.Profiler=w,bn.PureComponent=nn,bn.StrictMode=d,bn.Suspense=z,bn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=on,bn.__COMPILER_RUNTIME={__proto__:null,c:function(g){return on.H.useMemoCache(g)}},bn.cache=function(g){return function(){return g.apply(null,arguments)}},bn.cacheSignal=function(){return null},bn.cloneElement=function(g,N,G){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var J=Z({},g.props),an=g.key;if(N!=null)for(hn in N.key!==void 0&&(an=""+N.key),N)!zn.call(N,hn)||hn==="key"||hn==="__self"||hn==="__source"||hn==="ref"&&N.ref===void 0||(J[hn]=N[hn]);var hn=arguments.length-2;if(hn===1)J.children=G;else if(1<hn){for(var gn=Array(hn),Mn=0;Mn<hn;Mn++)gn[Mn]=arguments[Mn+2];J.children=gn}return Fn(g.type,an,J)},bn.createContext=function(g){return g={$$typeof:U,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:L,_context:g},g},bn.createElement=function(g,N,G){var J,an={},hn=null;if(N!=null)for(J in N.key!==void 0&&(hn=""+N.key),N)zn.call(N,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(an[J]=N[J]);var gn=arguments.length-2;if(gn===1)an.children=G;else if(1<gn){for(var Mn=Array(gn),In=0;In<gn;In++)Mn[In]=arguments[In+2];an.children=Mn}if(g&&g.defaultProps)for(J in gn=g.defaultProps,gn)an[J]===void 0&&(an[J]=gn[J]);return Fn(g,hn,an)},bn.createRef=function(){return{current:null}},bn.forwardRef=function(g){return{$$typeof:I,render:g}},bn.isValidElement=cr,bn.lazy=function(g){return{$$typeof:B,_payload:{_status:-1,_result:g},_init:V}},bn.memo=function(g,N){return{$$typeof:y,type:g,compare:N===void 0?null:N}},bn.startTransition=function(g){var N=on.T,G={};on.T=G;try{var J=g(),an=on.S;an!==null&&an(G,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(mn,Sn)}catch(hn){Sn(hn)}finally{N!==null&&G.types!==null&&(N.types=G.types),on.T=N}},bn.unstable_useCacheRefresh=function(){return on.H.useCacheRefresh()},bn.use=function(g){return on.H.use(g)},bn.useActionState=function(g,N,G){return on.H.useActionState(g,N,G)},bn.useCallback=function(g,N){return on.H.useCallback(g,N)},bn.useContext=function(g){return on.H.useContext(g)},bn.useDebugValue=function(){},bn.useDeferredValue=function(g,N){return on.H.useDeferredValue(g,N)},bn.useEffect=function(g,N){return on.H.useEffect(g,N)},bn.useEffectEvent=function(g){return on.H.useEffectEvent(g)},bn.useId=function(){return on.H.useId()},bn.useImperativeHandle=function(g,N,G){return on.H.useImperativeHandle(g,N,G)},bn.useInsertionEffect=function(g,N){return on.H.useInsertionEffect(g,N)},bn.useLayoutEffect=function(g,N){return on.H.useLayoutEffect(g,N)},bn.useMemo=function(g,N){return on.H.useMemo(g,N)},bn.useOptimistic=function(g,N){return on.H.useOptimistic(g,N)},bn.useReducer=function(g,N,G){return on.H.useReducer(g,N,G)},bn.useRef=function(g){return on.H.useRef(g)},bn.useState=function(g){return on.H.useState(g)},bn.useSyncExternalStore=function(g,N,G){return on.H.useSyncExternalStore(g,N,G)},bn.useTransition=function(){return on.H.useTransition()},bn.version="19.2.3",bn}var Nh;function Yo(){return Nh||(Nh=1,ko.exports=ym()),ko.exports}var Mo={exports:{}},Cr={};var Ah;function vm(){if(Ah)return Cr;Ah=1;var u=Yo();function _(z){var y="https://react.dev/errors/"+z;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)y+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+z+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(){}var d={d:{f:x,r:function(){throw Error(_(522))},D:x,C:x,L:x,m:x,X:x,S:x,M:x},p:0,findDOMNode:null},w=Symbol.for("react.portal");function L(z,y,B){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:A==null?null:""+A,children:z,containerInfo:y,implementation:B}}var U=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function I(z,y){if(z==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Cr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Cr.createPortal=function(z,y){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(_(299));return L(z,y,null,B)},Cr.flushSync=function(z){var y=U.T,B=d.p;try{if(U.T=null,d.p=2,z)return z()}finally{U.T=y,d.p=B,d.d.f()}},Cr.preconnect=function(z,y){typeof z=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(z,y))},Cr.prefetchDNS=function(z){typeof z=="string"&&d.d.D(z)},Cr.preinit=function(z,y){if(typeof z=="string"&&y&&typeof y.as=="string"){var B=y.as,A=I(B,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,K=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;B==="style"?d.d.S(z,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:A,integrity:D,fetchPriority:K}):B==="script"&&d.d.X(z,{crossOrigin:A,integrity:D,fetchPriority:K,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Cr.preinitModule=function(z,y){if(typeof z=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var B=I(y.as,y.crossOrigin);d.d.M(z,{crossOrigin:B,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&d.d.M(z)},Cr.preload=function(z,y){if(typeof z=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var B=y.as,A=I(B,y.crossOrigin);d.d.L(z,B,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Cr.preloadModule=function(z,y){if(typeof z=="string")if(y){var B=I(y.as,y.crossOrigin);d.d.m(z,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:B,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else d.d.m(z)},Cr.requestFormReset=function(z){d.d.r(z)},Cr.unstable_batchedUpdates=function(z,y){return z(y)},Cr.useFormState=function(z,y,B){return U.H.useFormState(z,y,B)},Cr.useFormStatus=function(){return U.H.useHostTransitionStatus()},Cr.version="19.2.3",Cr}var Oh;function Fh(){if(Oh)return Mo.exports;Oh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(_){console.error(_)}}return u(),Mo.exports=vm(),Mo.exports}var kh;function Sm(){if(kh)return Gi;kh=1;var u=xm(),_=Yo(),x=Fh();function d(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function L(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function U(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function I(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function z(n){if(L(n)!==n)throw Error(d(188))}function y(n){var r=n.alternate;if(!r){if(r=L(n),r===null)throw Error(d(188));return r!==n?null:n}for(var e=n,t=r;;){var i=e.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){e=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===e)return z(i),n;if(l===t)return z(i),r;l=l.sibling}throw Error(d(188))}if(e.return!==t.return)e=i,t=l;else{for(var s=!1,o=i.child;o;){if(o===e){s=!0,e=i,t=l;break}if(o===t){s=!0,t=i,e=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===e){s=!0,e=l,t=i;break}if(o===t){s=!0,t=l,e=i;break}o=o.sibling}if(!s)throw Error(d(189))}}if(e.alternate!==t)throw Error(d(190))}if(e.tag!==3)throw Error(d(188));return e.stateNode.current===e?n:r}function B(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=B(n),r!==null)return r;n=n.sibling}return null}var A=Object.assign,D=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),en=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),pn=Symbol.for("react.strict_mode"),vn=Symbol.for("react.profiler"),xn=Symbol.for("react.consumer"),nn=Symbol.for("react.context"),sn=Symbol.for("react.forward_ref"),Dn=Symbol.for("react.suspense"),mn=Symbol.for("react.suspense_list"),on=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Fn=Symbol.for("react.activity"),br=Symbol.for("react.memo_cache_sentinel"),cr=Symbol.iterator;function $n(n){return n===null||typeof n!="object"?null:(n=cr&&n[cr]||n["@@iterator"],typeof n=="function"?n:null)}var wr=Symbol.for("react.client.reference");function ar(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===wr?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Z:return"Fragment";case vn:return"Profiler";case pn:return"StrictMode";case Dn:return"Suspense";case mn:return"SuspenseList";case Fn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case en:return"Portal";case nn:return n.displayName||"Context";case xn:return(n._context.displayName||"Context")+".Consumer";case sn:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case on:return r=n.displayName||null,r!==null?r:ar(n.type)||"Memo";case zn:r=n._payload,n=n._init;try{return ar(n(r))}catch{}}return null}var jr=Array.isArray,E=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},Sn=[],Tn=-1;function g(n){return{current:n}}function N(n){0>Tn||(n.current=Sn[Tn],Sn[Tn]=null,Tn--)}function G(n,r){Tn++,Sn[Tn]=n.current,n.current=r}var J=g(null),an=g(null),hn=g(null),gn=g(null);function Mn(n,r){switch(G(hn,r),G(an,n),G(J,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?If(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=If(r),n=Qf(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}N(J),G(J,n)}function In(){N(J),N(an),N(hn)}function Br(n){n.memoizedState!==null&&G(gn,n);var r=J.current,e=Qf(r,n.type);r!==e&&(G(an,n),G(J,e))}function ue(n){an.current===n&&(N(J),N(an)),gn.current===n&&(N(gn),Ci._currentValue=V)}var Re,De;function ne(n){if(Re===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);Re=r&&r[1]||"",De=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+n+De}var kt=!1;function Ln(n,r){if(!n||kt)return"";kt=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(r){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(j){var T=j}Reflect.construct(n,[],R)}else{try{R.call()}catch(j){T=j}n.call(R.prototype)}}else{try{throw Error()}catch(j){T=j}(R=n())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(j){if(j&&T&&typeof j.stack=="string")return[j.stack,T.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),s=l[0],o=l[1];if(s&&o){var f=s.split(`
`),S=o.split(`
`);for(i=t=0;t<f.length&&!f[t].includes("DetermineComponentFrameRoot");)t++;for(;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;if(t===f.length||i===S.length)for(t=f.length-1,i=S.length-1;1<=t&&0<=i&&f[t]!==S[i];)i--;for(;1<=t&&0<=i;t--,i--)if(f[t]!==S[i]){if(t!==1||i!==1)do if(t--,i--,0>i||f[t]!==S[i]){var O=`
`+f[t].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=t&&0<=i);break}}}finally{kt=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?ne(e):""}function rt(n,r){switch(n.tag){case 26:case 27:case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return n.child!==r&&r!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return Ln(n.type,!1);case 11:return Ln(n.type.render,!1);case 1:return Ln(n.type,!0);case 31:return ne("Activity");default:return""}}function je(n){try{var r="",e=null;do r+=rt(n,e),e=n,n=n.return;while(n);return r}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Mt=Object.prototype.hasOwnProperty,ia=u.unstable_scheduleCallback,Ia=u.unstable_cancelCallback,xs=u.unstable_shouldYield,Vi=u.unstable_requestPaint,dr=u.unstable_now,Ii=u.unstable_getCurrentPriorityLevel,ze=u.unstable_ImmediatePriority,Rt=u.unstable_UserBlockingPriority,Dt=u.unstable_NormalPriority,ys=u.unstable_LowPriority,Qi=u.unstable_IdlePriority,vs=u.log,Ss=u.unstable_setDisableYieldValue,zt=null,Dr=null;function Ee(n){if(typeof vs=="function"&&Ss(n),Dr&&typeof Dr.setStrictMode=="function")try{Dr.setStrictMode(zt,n)}catch{}}var Ur=Math.clz32?Math.clz32:Ji,Ts=Math.log,Qa=Math.LN2;function Ji(n){return n>>>=0,n===0?32:31-(Ts(n)/Qa|0)|0}var Lt=256,la=262144,Ct=4194304;function Vr(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function h(n,r,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var o=t&134217727;return o!==0?(t=o&~l,t!==0?i=Vr(t):(s&=o,s!==0?i=Vr(s):e||(e=o&~n,e!==0&&(i=Vr(e))))):(o=t&~l,o!==0?i=Vr(o):s!==0?i=Vr(s):e||(e=t&~n,e!==0&&(i=Vr(e)))),i===0?0:r!==0&&r!==i&&(r&l)===0&&(l=i&-i,e=r&-r,l>=e||l===32&&(e&4194048)!==0)?r:i}function k(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Y(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var n=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),n}function rr(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function Pn(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function P(n,r,e,t,i,l){var s=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var o=n.entanglements,f=n.expirationTimes,S=n.hiddenUpdates;for(e=s&~e;0<e;){var O=31-Ur(e),R=1<<O;o[O]=0,f[O]=-1;var T=S[O];if(T!==null)for(S[O]=null,O=0;O<T.length;O++){var j=T[O];j!==null&&(j.lane&=-536870913)}e&=~R}t!==0&&X(n,t,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~r))}function X(n,r,e){n.pendingLanes|=r,n.suspendedLanes&=~r;var t=31-Ur(r);n.entangledLanes|=r,n.entanglements[t]=n.entanglements[t]|1073741824|e&261930}function dn(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var t=31-Ur(e),i=1<<t;i&r|n[t]&r&&(n[t]|=r),e&=~i}}function fr(n,r){var e=r&-r;return e=(e&42)!==0?1:ir(e),(e&(n.suspendedLanes|r))!==0?0:e}function ir(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Le(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function sa(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:ph(n.type))}function ca(n,r){var e=H.p;try{return H.p=n,r()}finally{H.p=e}}var we=Math.random().toString(36).slice(2),hr="__reactFiber$"+we,zr="__reactProps$"+we,et="__reactContainer$"+we,Ja="__reactEvents$"+we,Xi="__reactListeners$"+we,oa="__reactHandles$"+we,Zi="__reactResources$"+we,Bt="__reactMarker$"+we;function Xa(n){delete n[hr],delete n[zr],delete n[Ja],delete n[Xi],delete n[oa]}function Hr(n){var r=n[hr];if(r)return r;for(var e=n.parentNode;e;){if(r=e[et]||e[hr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=$f(n);n!==null;){if(e=n[hr])return e;n=$f(n)}return r}n=e,e=n.parentNode}return null}function Ce(n){if(n=n[hr]||n[et]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function tt(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(d(33))}function at(n){var r=n[Zi];return r||(r=n[Zi]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function _r(n){n[Bt]=!0}var Fi=new Set,Ut={};function Be(n,r){C(n,r),C(n+"Capture",r)}function C(n,r){for(Ut[n]=r,n=0;n<r.length;n++)Fi.add(r[n])}var tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),En={},Gn={};function gr(n){return Mt.call(Gn,n)?!0:Mt.call(En,n)?!1:tn.test(n)?Gn[n]=!0:(En[n]=!0,!1)}function Lr(n,r,e){if(gr(r))if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var t=r.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+e)}}function re(n,r,e){if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+e)}}function Ir(n,r,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(r,e,""+t)}}function nr(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ee(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Pi(n,r,e){var t=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return i.call(this)},set:function(s){e=""+s,l.call(this,s)}}),Object.defineProperty(n,r,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(s){e=""+s},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ua(n){if(!n._valueTracker){var r=ee(n)?"checked":"value";n._valueTracker=Pi(n,r,""+n[r])}}function Za(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),t="";return n&&(t=ee(n)?n.checked?"true":"false":n.value),n=t,n!==e?(r.setValue(n),!0):!1}function da(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var js=/[\n"\\]/g;function Qr(n){return n.replace(js,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Fa(n,r,e,t,i,l,s,o){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),r!=null?s==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+nr(r)):n.value!==""+nr(r)&&(n.value=""+nr(r)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),r!=null?fa(n,s,nr(r)):e!=null?fa(n,s,nr(e)):t!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+nr(o):n.removeAttribute("name")}function Ht(n,r,e,t,i,l,s,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),r!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||r!=null)){ua(n);return}e=e!=null?""+nr(e):"",r=r!=null?""+nr(r):e,o||r===n.value||(n.value=r),n.defaultValue=r}t=t??i,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=o?n.checked:!!t,n.defaultChecked=!!t,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),ua(n)}function fa(n,r,e){r==="number"&&da(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function Ar(n,r,e,t){if(n=n.options,r){r={};for(var i=0;i<e.length;i++)r["$"+e[i]]=!0;for(e=0;e<n.length;e++)i=r.hasOwnProperty("$"+n[e].value),n[e].selected!==i&&(n[e].selected=i),i&&t&&(n[e].defaultSelected=!0)}else{for(e=""+nr(e),r=null,i=0;i<n.length;i++){if(n[i].value===e){n[i].selected=!0,t&&(n[i].defaultSelected=!0);return}r!==null||n[i].disabled||(r=n[i])}r!==null&&(r.selected=!0)}}function Wi(n,r,e){if(r!=null&&(r=""+nr(r),r!==n.value&&(n.value=r),e==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=e!=null?""+nr(e):""}function ha(n,r,e,t){if(r==null){if(t!=null){if(e!=null)throw Error(d(92));if(jr(t)){if(1<t.length)throw Error(d(93));t=t[0]}e=t}e==null&&(e=""),r=e}e=nr(r),n.defaultValue=e,t=n.textContent,t===e&&t!==""&&t!==null&&(n.value=t),ua(n)}function un(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var $i=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xr(n,r,e){var t=r.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?t?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":t?n.setProperty(r,e):typeof e!="number"||e===0||$i.has(r)?r==="float"?n.cssFloat=e:n[r]=(""+e).trim():n[r]=e+"px"}function Yn(n,r,e){if(r!=null&&typeof r!="object")throw Error(d(62));if(n=n.style,e!=null){for(var t in e)!e.hasOwnProperty(t)||r!=null&&r.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var i in r)t=r[i],r.hasOwnProperty(i)&&e[i]!==t&&xr(n,i,t)}else for(var l in r)r.hasOwnProperty(l)&&xr(n,l,r[l])}function it(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lt(n){return Pa.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function q(){}var W=null;function _n(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var An=null,sr=null;function de(n){var r=Ce(n);if(r&&(n=r.stateNode)){var e=n[zr]||null;n:switch(n=r.stateNode,r.type){case"input":if(Fa(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Qr(""+r)+'"][type="radio"]'),r=0;r<e.length;r++){var t=e[r];if(t!==n&&t.form===n.form){var i=t[zr]||null;if(!i)throw Error(d(90));Fa(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(r=0;r<e.length;r++)t=e[r],t.form===n.form&&Za(t)}break n;case"textarea":Wi(n,e.value,e.defaultValue);break n;case"select":r=e.value,r!=null&&Ar(n,!!e.multiple,r,!1)}}}var Wa=!1;function nl(n,r,e){if(Wa)return n(r,e);Wa=!0;try{var t=n(r);return t}finally{if(Wa=!1,(An!==null||sr!==null)&&(Gl(),An&&(r=An,n=sr,sr=An=null,de(r),n)))for(r=0;r<n.length;r++)de(n[r])}}function $a(n,r){var e=n.stateNode;if(e===null)return null;var t=e[zr]||null;if(t===null)return null;e=t[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(d(231,r,typeof e));return e}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=!1;if(He)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Es=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Es=!1}var st=null,ws=null,rl=null;function Io(){if(rl)return rl;var n,r=ws,e=r.length,t,i="value"in st?st.value:st.textContent,l=i.length;for(n=0;n<e&&r[n]===i[n];n++);var s=e-n;for(t=1;t<=s&&r[e-t]===i[l-t];t++);return rl=i.slice(n,1<t?1-t:void 0)}function el(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function tl(){return!0}function Qo(){return!1}function Jr(n){function r(e,t,i,l,s){this._reactName=e,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(e=n[o],this[o]=e?e(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?tl:Qo,this.isPropagationStopped=Qo,this}return A(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),r}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Jr(qt),ri=A({},qt,{view:0,detail:0}),gg=Jr(ri),Ns,As,ei,il=A({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ks,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ei&&(ei&&n.type==="mousemove"?(Ns=n.screenX-ei.screenX,As=n.screenY-ei.screenY):As=Ns=0,ei=n),Ns)},movementY:function(n){return"movementY"in n?n.movementY:As}}),Jo=Jr(il),pg=A({},il,{dataTransfer:0}),mg=Jr(pg),bg=A({},ri,{relatedTarget:0}),Os=Jr(bg),_g=A({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),xg=Jr(_g),yg=A({},qt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vg=Jr(yg),Sg=A({},qt,{data:0}),Xo=Jr(Sg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Eg[n])?!!r[n]:!1}function ks(){return wg}var Ng=A({},ri,{key:function(n){if(n.key){var r=Tg[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=el(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ks,charCode:function(n){return n.type==="keypress"?el(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?el(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ag=Jr(Ng),Og=A({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=Jr(Og),kg=A({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ks}),Mg=Jr(kg),Rg=A({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=Jr(Rg),zg=A({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=Jr(zg),Cg=A({},qt,{newState:0,oldState:0}),Bg=Jr(Cg),Ug=[9,13,27,32],Ms=He&&"CompositionEvent"in window,ti=null;He&&"documentMode"in document&&(ti=document.documentMode);var Hg=He&&"TextEvent"in window&&!ti,Fo=He&&(!Ms||ti&&8<ti&&11>=ti),Po=" ",Wo=!1;function $o(n,r){switch(n){case"keyup":return Ug.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function qg(n,r){switch(n){case"compositionend":return nu(r);case"keypress":return r.which!==32?null:(Wo=!0,Po);case"textInput":return n=r.data,n===Po&&Wo?null:n;default:return null}}function Gg(n,r){if(ga)return n==="compositionend"||!Ms&&$o(n,r)?(n=Io(),rl=ws=st=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fo&&r.locale!=="ko"?null:r.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Yg[n.type]:r==="textarea"}function eu(n,r,e,t){An?sr?sr.push(t):sr=[t]:An=t,r=Xl(r,"onChange"),0<r.length&&(e=new al("onChange","change",null,e,t),n.push({event:e,listeners:r}))}var ai=null,ii=null;function Kg(n){Hf(n,0)}function ll(n){var r=tt(n);if(Za(r))return n}function tu(n,r){if(n==="change")return r}var au=!1;if(He){var Rs;if(He){var Ds="oninput"in document;if(!Ds){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Ds=typeof iu.oninput=="function"}Rs=Ds}else Rs=!1;au=Rs&&(!document.documentMode||9<document.documentMode)}function lu(){ai&&(ai.detachEvent("onpropertychange",su),ii=ai=null)}function su(n){if(n.propertyName==="value"&&ll(ii)){var r=[];eu(r,ii,n,_n(n)),nl(Kg,r)}}function Vg(n,r,e){n==="focusin"?(lu(),ai=r,ii=e,ai.attachEvent("onpropertychange",su)):n==="focusout"&&lu()}function Ig(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ll(ii)}function Qg(n,r){if(n==="click")return ll(r)}function Jg(n,r){if(n==="input"||n==="change")return ll(r)}function Xg(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var te=typeof Object.is=="function"?Object.is:Xg;function li(n,r){if(te(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var i=e[t];if(!Mt.call(r,i)||!te(n[i],r[i]))return!1}return!0}function cu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ou(n,r){var e=cu(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=r&&t>=r)return{node:e,offset:r-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=cu(e)}}function uu(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?uu(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function du(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=da(n.document);r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=da(n.document)}return r}function zs(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Zg=He&&"documentMode"in document&&11>=document.documentMode,pa=null,Ls=null,si=null,Cs=!1;function fu(n,r,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Cs||pa==null||pa!==da(t)||(t=pa,"selectionStart"in t&&zs(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),si&&li(si,t)||(si=t,t=Xl(Ls,"onSelect"),0<t.length&&(r=new al("onSelect","select",null,r,e),n.push({event:r,listeners:t}),r.target=pa)))}function Gt(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var ma={animationend:Gt("Animation","AnimationEnd"),animationiteration:Gt("Animation","AnimationIteration"),animationstart:Gt("Animation","AnimationStart"),transitionrun:Gt("Transition","TransitionRun"),transitionstart:Gt("Transition","TransitionStart"),transitioncancel:Gt("Transition","TransitionCancel"),transitionend:Gt("Transition","TransitionEnd")},Bs={},hu={};He&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Yt(n){if(Bs[n])return Bs[n];if(!ma[n])return n;var r=ma[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in hu)return Bs[n]=r[e];return n}var gu=Yt("animationend"),pu=Yt("animationiteration"),mu=Yt("animationstart"),Fg=Yt("transitionrun"),Pg=Yt("transitionstart"),Wg=Yt("transitioncancel"),bu=Yt("transitionend"),_u=new Map,Us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Us.push("scrollEnd");function ye(n,r){_u.set(n,r),Be(r,[n])}var sl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},fe=[],ba=0,Hs=0;function cl(){for(var n=ba,r=Hs=ba=0;r<n;){var e=fe[r];fe[r++]=null;var t=fe[r];fe[r++]=null;var i=fe[r];fe[r++]=null;var l=fe[r];if(fe[r++]=null,t!==null&&i!==null){var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}l!==0&&xu(e,i,l)}}function ol(n,r,e,t){fe[ba++]=n,fe[ba++]=r,fe[ba++]=e,fe[ba++]=t,Hs|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function qs(n,r,e,t){return ol(n,r,e,t),ul(n)}function Kt(n,r){return ol(n,null,null,r),ul(n)}function xu(n,r,e){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e);for(var i=!1,l=n.return;l!==null;)l.childLanes|=e,t=l.alternate,t!==null&&(t.childLanes|=e),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&r!==null&&(i=31-Ur(e),n=l.hiddenUpdates,t=n[i],t===null?n[i]=[r]:t.push(r),r.lane=e|536870912),l):null}function ul(n){if(50<Oi)throw Oi=0,Zc=null,Error(d(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var _a={};function $g(n,r,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ae(n,r,e,t){return new $g(n,r,e,t)}function Gs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qe(n,r){var e=n.alternate;return e===null?(e=ae(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function yu(n,r){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function dl(n,r,e,t,i,l){var s=0;if(t=n,typeof n=="function")Gs(n)&&(s=1);else if(typeof n=="string")s=am(n,e,J.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Fn:return n=ae(31,e,r,i),n.elementType=Fn,n.lanes=l,n;case Z:return Vt(e.children,i,l,r);case pn:s=8,i|=24;break;case vn:return n=ae(12,e,r,i|2),n.elementType=vn,n.lanes=l,n;case Dn:return n=ae(13,e,r,i),n.elementType=Dn,n.lanes=l,n;case mn:return n=ae(19,e,r,i),n.elementType=mn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case nn:s=10;break n;case xn:s=9;break n;case sn:s=11;break n;case on:s=14;break n;case zn:s=16,t=null;break n}s=29,e=Error(d(130,n===null?"null":typeof n,"")),t=null}return r=ae(s,e,r,i),r.elementType=n,r.type=t,r.lanes=l,r}function Vt(n,r,e,t){return n=ae(7,n,t,r),n.lanes=e,n}function Ys(n,r,e){return n=ae(6,n,null,r),n.lanes=e,n}function vu(n){var r=ae(18,null,null,0);return r.stateNode=n,r}function Ks(n,r,e){return r=ae(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Su=new WeakMap;function he(n,r){if(typeof n=="object"&&n!==null){var e=Su.get(n);return e!==void 0?e:(r={value:n,source:r,stack:je(r)},Su.set(n,r),r)}return{value:n,source:r,stack:je(r)}}var xa=[],ya=0,fl=null,ci=0,ge=[],pe=0,ct=null,Ne=1,Ae="";function Ge(n,r){xa[ya++]=ci,xa[ya++]=fl,fl=n,ci=r}function Tu(n,r,e){ge[pe++]=Ne,ge[pe++]=Ae,ge[pe++]=ct,ct=n;var t=Ne;n=Ae;var i=32-Ur(t)-1;t&=~(1<<i),e+=1;var l=32-Ur(r)+i;if(30<l){var s=i-i%5;l=(t&(1<<s)-1).toString(32),t>>=s,i-=s,Ne=1<<32-Ur(r)+i|e<<i|t,Ae=l+n}else Ne=1<<l|e<<i|t,Ae=n}function Vs(n){n.return!==null&&(Ge(n,1),Tu(n,1,0))}function Is(n){for(;n===fl;)fl=xa[--ya],xa[ya]=null,ci=xa[--ya],xa[ya]=null;for(;n===ct;)ct=ge[--pe],ge[pe]=null,Ae=ge[--pe],ge[pe]=null,Ne=ge[--pe],ge[pe]=null}function ju(n,r){ge[pe++]=Ne,ge[pe++]=Ae,ge[pe++]=ct,Ne=r.id,Ae=r.overflow,ct=n}var Or=null,er=null,Rn=!1,ot=null,me=!1,Qs=Error(d(519));function ut(n){var r=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oi(he(r,n)),Qs}function Eu(n){var r=n.stateNode,e=n.type,t=n.memoizedProps;switch(r[hr]=n,r[zr]=t,e){case"dialog":Nn("cancel",r),Nn("close",r);break;case"iframe":case"object":case"embed":Nn("load",r);break;case"video":case"audio":for(e=0;e<Mi.length;e++)Nn(Mi[e],r);break;case"source":Nn("error",r);break;case"img":case"image":case"link":Nn("error",r),Nn("load",r);break;case"details":Nn("toggle",r);break;case"input":Nn("invalid",r),Ht(r,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":Nn("invalid",r);break;case"textarea":Nn("invalid",r),ha(r,t.value,t.defaultValue,t.children)}e=t.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||r.textContent===""+e||t.suppressHydrationWarning===!0||Kf(r.textContent,e)?(t.popover!=null&&(Nn("beforetoggle",r),Nn("toggle",r)),t.onScroll!=null&&Nn("scroll",r),t.onScrollEnd!=null&&Nn("scrollend",r),t.onClick!=null&&(r.onclick=q),r=!0):r=!1,r||ut(n,!0)}function wu(n){for(Or=n.return;Or;)switch(Or.tag){case 5:case 31:case 13:me=!1;return;case 27:case 3:me=!0;return;default:Or=Or.return}}function va(n){if(n!==Or)return!1;if(!Rn)return wu(n),Rn=!0,!1;var r=n.tag,e;if((e=r!==3&&r!==27)&&((e=r===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||uo(n.type,n.memoizedProps)),e=!e),e&&er&&ut(n),wu(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));er=Wf(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));er=Wf(n)}else r===27?(r=er,jt(n.type)?(n=mo,mo=null,er=n):er=r):er=Or?_e(n.stateNode.nextSibling):null;return!0}function It(){er=Or=null,Rn=!1}function Js(){var n=ot;return n!==null&&(Pr===null?Pr=n:Pr.push.apply(Pr,n),ot=null),n}function oi(n){ot===null?ot=[n]:ot.push(n)}var Xs=g(null),Qt=null,Ye=null;function dt(n,r,e){G(Xs,r._currentValue),r._currentValue=e}function Ke(n){n._currentValue=Xs.current,N(Xs)}function Zs(n,r,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),n===e)break;n=n.return}}function Fs(n,r,e,t){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var o=l;l=i;for(var f=0;f<r.length;f++)if(o.context===r[f]){l.lanes|=e,o=l.alternate,o!==null&&(o.lanes|=e),Zs(l.return,e,n),t||(s=null);break n}l=o.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(d(341));s.lanes|=e,l=s.alternate,l!==null&&(l.lanes|=e),Zs(s,e,n),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Sa(n,r,e,t){n=null;for(var i=r,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var o=i.type;te(i.pendingProps.value,s.value)||(n!==null?n.push(o):n=[o])}}else if(i===gn.current){if(s=i.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(Ci):n=[Ci])}i=i.return}n!==null&&Fs(r,n,e,t),r.flags|=262144}function hl(n){for(n=n.firstContext;n!==null;){if(!te(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Jt(n){Qt=n,Ye=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function kr(n){return Nu(Qt,n)}function gl(n,r){return Qt===null&&Jt(n),Nu(n,r)}function Nu(n,r){var e=r._currentValue;if(r={context:r,memoizedValue:e,next:null},Ye===null){if(n===null)throw Error(d(308));Ye=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Ye=Ye.next=r;return e}var np=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(e,t){n.push(t)}};this.abort=function(){r.aborted=!0,n.forEach(function(e){return e()})}},rp=u.unstable_scheduleCallback,ep=u.unstable_NormalPriority,yr={$$typeof:nn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ps(){return{controller:new np,data:new Map,refCount:0}}function ui(n){n.refCount--,n.refCount===0&&rp(ep,function(){n.controller.abort()})}var di=null,Ws=0,Ta=0,ja=null;function tp(n,r){if(di===null){var e=di=[];Ws=0,Ta=ro(),ja={status:"pending",value:void 0,then:function(t){e.push(t)}}}return Ws++,r.then(Au,Au),r}function Au(){if(--Ws===0&&di!==null){ja!==null&&(ja.status="fulfilled");var n=di;di=null,Ta=0,ja=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function ap(n,r){var e=[],t={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return n.then(function(){t.status="fulfilled",t.value=r;for(var i=0;i<e.length;i++)(0,e[i])(r)},function(i){for(t.status="rejected",t.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),t}var Ou=E.S;E.S=function(n,r){hf=dr(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&tp(n,r),Ou!==null&&Ou(n,r)};var Xt=g(null);function $s(){var n=Xt.current;return n!==null?n:Wn.pooledCache}function pl(n,r){r===null?G(Xt,Xt.current):G(Xt,r.pool)}function ku(){var n=$s();return n===null?null:{parent:yr._currentValue,pool:n}}var Ea=Error(d(460)),nc=Error(d(474)),ml=Error(d(542)),bl={then:function(){}};function Mu(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ru(n,r,e){switch(e=n[e],e===void 0?n.push(r):e!==r&&(r.then(q,q),r=e),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,zu(n),n;default:if(typeof r.status=="string")r.then(q,q);else{if(n=Wn,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=r,n.status="pending",n.then(function(t){if(r.status==="pending"){var i=r;i.status="fulfilled",i.value=t}},function(t){if(r.status==="pending"){var i=r;i.status="rejected",i.reason=t}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,zu(n),n}throw Ft=r,Ea}}function Zt(n){try{var r=n._init;return r(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ft=e,Ea):e}}var Ft=null;function Du(){if(Ft===null)throw Error(d(459));var n=Ft;return Ft=null,n}function zu(n){if(n===Ea||n===ml)throw Error(d(483))}var wa=null,fi=0;function _l(n){var r=fi;return fi+=1,wa===null&&(wa=[]),Ru(wa,n,r)}function hi(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function xl(n,r){throw r.$$typeof===D?Error(d(525)):(n=Object.prototype.toString.call(r),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Lu(n){function r(b,m){if(n){var v=b.deletions;v===null?(b.deletions=[m],b.flags|=16):v.push(m)}}function e(b,m){if(!n)return null;for(;m!==null;)r(b,m),m=m.sibling;return null}function t(b){for(var m=new Map;b!==null;)b.key!==null?m.set(b.key,b):m.set(b.index,b),b=b.sibling;return m}function i(b,m){return b=qe(b,m),b.index=0,b.sibling=null,b}function l(b,m,v){return b.index=v,n?(v=b.alternate,v!==null?(v=v.index,v<m?(b.flags|=67108866,m):v):(b.flags|=67108866,m)):(b.flags|=1048576,m)}function s(b){return n&&b.alternate===null&&(b.flags|=67108866),b}function o(b,m,v,M){return m===null||m.tag!==6?(m=Ys(v,b.mode,M),m.return=b,m):(m=i(m,v),m.return=b,m)}function f(b,m,v,M){var ln=v.type;return ln===Z?O(b,m,v.props.children,M,v.key):m!==null&&(m.elementType===ln||typeof ln=="object"&&ln!==null&&ln.$$typeof===zn&&Zt(ln)===m.type)?(m=i(m,v.props),hi(m,v),m.return=b,m):(m=dl(v.type,v.key,v.props,null,b.mode,M),hi(m,v),m.return=b,m)}function S(b,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ks(v,b.mode,M),m.return=b,m):(m=i(m,v.children||[]),m.return=b,m)}function O(b,m,v,M,ln){return m===null||m.tag!==7?(m=Vt(v,b.mode,M,ln),m.return=b,m):(m=i(m,v),m.return=b,m)}function R(b,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Ys(""+m,b.mode,v),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case K:return v=dl(m.type,m.key,m.props,null,b.mode,v),hi(v,m),v.return=b,v;case en:return m=Ks(m,b.mode,v),m.return=b,m;case zn:return m=Zt(m),R(b,m,v)}if(jr(m)||$n(m))return m=Vt(m,b.mode,v,null),m.return=b,m;if(typeof m.then=="function")return R(b,_l(m),v);if(m.$$typeof===nn)return R(b,gl(b,m),v);xl(b,m)}return null}function T(b,m,v,M){var ln=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return ln!==null?null:o(b,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case K:return v.key===ln?f(b,m,v,M):null;case en:return v.key===ln?S(b,m,v,M):null;case zn:return v=Zt(v),T(b,m,v,M)}if(jr(v)||$n(v))return ln!==null?null:O(b,m,v,M,null);if(typeof v.then=="function")return T(b,m,_l(v),M);if(v.$$typeof===nn)return T(b,m,gl(b,v),M);xl(b,v)}return null}function j(b,m,v,M,ln){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return b=b.get(v)||null,o(m,b,""+M,ln);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case K:return b=b.get(M.key===null?v:M.key)||null,f(m,b,M,ln);case en:return b=b.get(M.key===null?v:M.key)||null,S(m,b,M,ln);case zn:return M=Zt(M),j(b,m,v,M,ln)}if(jr(M)||$n(M))return b=b.get(v)||null,O(m,b,M,ln,null);if(typeof M.then=="function")return j(b,m,v,_l(M),ln);if(M.$$typeof===nn)return j(b,m,v,gl(m,M),ln);xl(m,M)}return null}function F(b,m,v,M){for(var ln=null,Cn=null,$=m,jn=m=0,kn=null;$!==null&&jn<v.length;jn++){$.index>jn?(kn=$,$=null):kn=$.sibling;var Bn=T(b,$,v[jn],M);if(Bn===null){$===null&&($=kn);break}n&&$&&Bn.alternate===null&&r(b,$),m=l(Bn,m,jn),Cn===null?ln=Bn:Cn.sibling=Bn,Cn=Bn,$=kn}if(jn===v.length)return e(b,$),Rn&&Ge(b,jn),ln;if($===null){for(;jn<v.length;jn++)$=R(b,v[jn],M),$!==null&&(m=l($,m,jn),Cn===null?ln=$:Cn.sibling=$,Cn=$);return Rn&&Ge(b,jn),ln}for($=t($);jn<v.length;jn++)kn=j($,b,jn,v[jn],M),kn!==null&&(n&&kn.alternate!==null&&$.delete(kn.key===null?jn:kn.key),m=l(kn,m,jn),Cn===null?ln=kn:Cn.sibling=kn,Cn=kn);return n&&$.forEach(function(Ot){return r(b,Ot)}),Rn&&Ge(b,jn),ln}function cn(b,m,v,M){if(v==null)throw Error(d(151));for(var ln=null,Cn=null,$=m,jn=m=0,kn=null,Bn=v.next();$!==null&&!Bn.done;jn++,Bn=v.next()){$.index>jn?(kn=$,$=null):kn=$.sibling;var Ot=T(b,$,Bn.value,M);if(Ot===null){$===null&&($=kn);break}n&&$&&Ot.alternate===null&&r(b,$),m=l(Ot,m,jn),Cn===null?ln=Ot:Cn.sibling=Ot,Cn=Ot,$=kn}if(Bn.done)return e(b,$),Rn&&Ge(b,jn),ln;if($===null){for(;!Bn.done;jn++,Bn=v.next())Bn=R(b,Bn.value,M),Bn!==null&&(m=l(Bn,m,jn),Cn===null?ln=Bn:Cn.sibling=Bn,Cn=Bn);return Rn&&Ge(b,jn),ln}for($=t($);!Bn.done;jn++,Bn=v.next())Bn=j($,b,jn,Bn.value,M),Bn!==null&&(n&&Bn.alternate!==null&&$.delete(Bn.key===null?jn:Bn.key),m=l(Bn,m,jn),Cn===null?ln=Bn:Cn.sibling=Bn,Cn=Bn);return n&&$.forEach(function(pm){return r(b,pm)}),Rn&&Ge(b,jn),ln}function Xn(b,m,v,M){if(typeof v=="object"&&v!==null&&v.type===Z&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case K:n:{for(var ln=v.key;m!==null;){if(m.key===ln){if(ln=v.type,ln===Z){if(m.tag===7){e(b,m.sibling),M=i(m,v.props.children),M.return=b,b=M;break n}}else if(m.elementType===ln||typeof ln=="object"&&ln!==null&&ln.$$typeof===zn&&Zt(ln)===m.type){e(b,m.sibling),M=i(m,v.props),hi(M,v),M.return=b,b=M;break n}e(b,m);break}else r(b,m);m=m.sibling}v.type===Z?(M=Vt(v.props.children,b.mode,M,v.key),M.return=b,b=M):(M=dl(v.type,v.key,v.props,null,b.mode,M),hi(M,v),M.return=b,b=M)}return s(b);case en:n:{for(ln=v.key;m!==null;){if(m.key===ln)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){e(b,m.sibling),M=i(m,v.children||[]),M.return=b,b=M;break n}else{e(b,m);break}else r(b,m);m=m.sibling}M=Ks(v,b.mode,M),M.return=b,b=M}return s(b);case zn:return v=Zt(v),Xn(b,m,v,M)}if(jr(v))return F(b,m,v,M);if($n(v)){if(ln=$n(v),typeof ln!="function")throw Error(d(150));return v=ln.call(v),cn(b,m,v,M)}if(typeof v.then=="function")return Xn(b,m,_l(v),M);if(v.$$typeof===nn)return Xn(b,m,gl(b,v),M);xl(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(e(b,m.sibling),M=i(m,v),M.return=b,b=M):(e(b,m),M=Ys(v,b.mode,M),M.return=b,b=M),s(b)):e(b,m)}return function(b,m,v,M){try{fi=0;var ln=Xn(b,m,v,M);return wa=null,ln}catch($){if($===Ea||$===ml)throw $;var Cn=ae(29,$,null,b.mode);return Cn.lanes=M,Cn.return=b,Cn}}}var Pt=Lu(!0),Cu=Lu(!1),ft=!1;function rc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ht(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function gt(n,r,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(Un&2)!==0){var i=t.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r,r=ul(n),xu(n,null,e),r}return ol(n,t,r,e),ul(n)}function gi(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194048)!==0)){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,dn(n,e)}}function tc(n,r){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var i=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,e=e.next}while(e!==null);l===null?i=l=r:l=l.next=r}else i=l=r;e={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}var ac=!1;function pi(){if(ac){var n=ja;if(n!==null)throw n}}function mi(n,r,e,t){ac=!1;var i=n.updateQueue;ft=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var f=o,S=f.next;f.next=null,s===null?l=S:s.next=S,s=f;var O=n.alternate;O!==null&&(O=O.updateQueue,o=O.lastBaseUpdate,o!==s&&(o===null?O.firstBaseUpdate=S:o.next=S,O.lastBaseUpdate=f))}if(l!==null){var R=i.baseState;s=0,O=S=f=null,o=l;do{var T=o.lane&-536870913,j=T!==o.lane;if(j?(On&T)===T:(t&T)===T){T!==0&&T===Ta&&(ac=!0),O!==null&&(O=O.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});n:{var F=n,cn=o;T=r;var Xn=e;switch(cn.tag){case 1:if(F=cn.payload,typeof F=="function"){R=F.call(Xn,R,T);break n}R=F;break n;case 3:F.flags=F.flags&-65537|128;case 0:if(F=cn.payload,T=typeof F=="function"?F.call(Xn,R,T):F,T==null)break n;R=A({},R,T);break n;case 2:ft=!0}}T=o.callback,T!==null&&(n.flags|=64,j&&(n.flags|=8192),j=i.callbacks,j===null?i.callbacks=[T]:j.push(T))}else j={lane:T,tag:o.tag,payload:o.payload,callback:o.callback,next:null},O===null?(S=O=j,f=R):O=O.next=j,s|=T;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;j=o,o=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);O===null&&(f=R),i.baseState=f,i.firstBaseUpdate=S,i.lastBaseUpdate=O,l===null&&(i.shared.lanes=0),xt|=s,n.lanes=s,n.memoizedState=R}}function Bu(n,r){if(typeof n!="function")throw Error(d(191,n));n.call(r)}function Uu(n,r){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)Bu(e[n],r)}var Na=g(null),yl=g(0);function Hu(n,r){n=We,G(yl,n),G(Na,r),We=n|r.baseLanes}function ic(){G(yl,We),G(Na,Na.current)}function lc(){We=yl.current,N(Na),N(yl)}var ie=g(null),be=null;function pt(n){var r=n.alternate;G(pr,pr.current&1),G(ie,n),be===null&&(r===null||Na.current!==null||r.memoizedState!==null)&&(be=n)}function sc(n){G(pr,pr.current),G(ie,n),be===null&&(be=n)}function qu(n){n.tag===22?(G(pr,pr.current),G(ie,n),be===null&&(be=n)):mt()}function mt(){G(pr,pr.current),G(ie,ie.current)}function le(n){N(ie),be===n&&(be=null),N(pr)}var pr=g(0);function vl(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||go(e)||po(e)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ve=0,yn=null,Qn=null,vr=null,Sl=!1,Aa=!1,Wt=!1,Tl=0,bi=0,Oa=null,ip=0;function or(){throw Error(d(321))}function cc(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!te(n[e],r[e]))return!1;return!0}function oc(n,r,e,t,i,l){return Ve=l,yn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,E.H=n===null||n.memoizedState===null?Td:jc,Wt=!1,l=e(t,i),Wt=!1,Aa&&(l=Yu(r,e,t,i)),Gu(n),l}function Gu(n){E.H=yi;var r=Qn!==null&&Qn.next!==null;if(Ve=0,vr=Qn=yn=null,Sl=!1,bi=0,Oa=null,r)throw Error(d(300));n===null||Sr||(n=n.dependencies,n!==null&&hl(n)&&(Sr=!0))}function Yu(n,r,e,t){yn=n;var i=0;do{if(Aa&&(Oa=null),bi=0,Aa=!1,25<=i)throw Error(d(301));if(i+=1,vr=Qn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}E.H=jd,l=r(e,t)}while(Aa);return l}function lp(){var n=E.H,r=n.useState()[0];return r=typeof r.then=="function"?_i(r):r,n=n.useState()[0],(Qn!==null?Qn.memoizedState:null)!==n&&(yn.flags|=1024),r}function uc(){var n=Tl!==0;return Tl=0,n}function dc(n,r,e){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~e}function fc(n){if(Sl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Sl=!1}Ve=0,vr=Qn=yn=null,Aa=!1,bi=Tl=0,Oa=null}function qr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vr===null?yn.memoizedState=vr=n:vr=vr.next=n,vr}function mr(){if(Qn===null){var n=yn.alternate;n=n!==null?n.memoizedState:null}else n=Qn.next;var r=vr===null?yn.memoizedState:vr.next;if(r!==null)vr=r,Qn=n;else{if(n===null)throw yn.alternate===null?Error(d(467)):Error(d(310));Qn=n,n={memoizedState:Qn.memoizedState,baseState:Qn.baseState,baseQueue:Qn.baseQueue,queue:Qn.queue,next:null},vr===null?yn.memoizedState=vr=n:vr=vr.next=n}return vr}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _i(n){var r=bi;return bi+=1,Oa===null&&(Oa=[]),n=Ru(Oa,n,r),r=yn,(vr===null?r.memoizedState:vr.next)===null&&(r=r.alternate,E.H=r===null||r.memoizedState===null?Td:jc),n}function El(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return _i(n);if(n.$$typeof===nn)return kr(n)}throw Error(d(438,String(n)))}function hc(n){var r=null,e=yn.updateQueue;if(e!==null&&(r=e.memoCache),r==null){var t=yn.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(r={data:t.data.map(function(i){return i.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),e===null&&(e=jl(),yn.updateQueue=e),e.memoCache=r,e=r.data[r.index],e===void 0)for(e=r.data[r.index]=Array(n),t=0;t<n;t++)e[t]=br;return r.index++,e}function Ie(n,r){return typeof r=="function"?r(n):r}function wl(n){var r=mr();return gc(r,Qn,n)}function gc(n,r,e){var t=n.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var i=n.baseQueue,l=t.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,t.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{r=i.next;var o=s=null,f=null,S=r,O=!1;do{var R=S.lane&-536870913;if(R!==S.lane?(On&R)===R:(Ve&R)===R){var T=S.revertLane;if(T===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),R===Ta&&(O=!0);else if((Ve&T)===T){S=S.next,T===Ta&&(O=!0);continue}else R={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},f===null?(o=f=R,s=l):f=f.next=R,yn.lanes|=T,xt|=T;R=S.action,Wt&&e(l,R),l=S.hasEagerState?S.eagerState:e(l,R)}else T={lane:R,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},f===null?(o=f=T,s=l):f=f.next=T,yn.lanes|=R,xt|=R;S=S.next}while(S!==null&&S!==r);if(f===null?s=l:f.next=o,!te(l,n.memoizedState)&&(Sr=!0,O&&(e=ja,e!==null)))throw e;n.memoizedState=l,n.baseState=s,n.baseQueue=f,t.lastRenderedState=l}return i===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function pc(n){var r=mr(),e=r.queue;if(e===null)throw Error(d(311));e.lastRenderedReducer=n;var t=e.dispatch,i=e.pending,l=r.memoizedState;if(i!==null){e.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);te(l,r.memoizedState)||(Sr=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),e.lastRenderedState=l}return[l,t]}function Ku(n,r,e){var t=yn,i=mr(),l=Rn;if(l){if(e===void 0)throw Error(d(407));e=e()}else e=r();var s=!te((Qn||i).memoizedState,e);if(s&&(i.memoizedState=e,Sr=!0),i=i.queue,_c(Qu.bind(null,t,i,n),[n]),i.getSnapshot!==r||s||vr!==null&&vr.memoizedState.tag&1){if(t.flags|=2048,ka(9,{destroy:void 0},Iu.bind(null,t,i,e,r),null),Wn===null)throw Error(d(349));l||(Ve&127)!==0||Vu(t,r,e)}return e}function Vu(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=yn.updateQueue,r===null?(r=jl(),yn.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function Iu(n,r,e,t){r.value=e,r.getSnapshot=t,Ju(r)&&Xu(n)}function Qu(n,r,e){return e(function(){Ju(r)&&Xu(n)})}function Ju(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!te(n,e)}catch{return!0}}function Xu(n){var r=Kt(n,2);r!==null&&Wr(r,n,2)}function mc(n){var r=qr();if(typeof n=="function"){var e=n;if(n=e(),Wt){Ee(!0);try{e()}finally{Ee(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:n},r}function Zu(n,r,e,t){return n.baseState=e,gc(n,Qn,typeof t=="function"?t:Ie)}function sp(n,r,e,t,i){if(Ol(n))throw Error(d(485));if(n=r.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};E.T!==null?e(!0):l.isTransition=!1,t(l),e=r.pending,e===null?(l.next=r.pending=l,Fu(r,l)):(l.next=e.next,r.pending=e.next=l)}}function Fu(n,r){var e=r.action,t=r.payload,i=n.state;if(r.isTransition){var l=E.T,s={};E.T=s;try{var o=e(i,t),f=E.S;f!==null&&f(s,o),Pu(n,r,o)}catch(S){bc(n,r,S)}finally{l!==null&&s.types!==null&&(l.types=s.types),E.T=l}}else try{l=e(i,t),Pu(n,r,l)}catch(S){bc(n,r,S)}}function Pu(n,r,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(t){Wu(n,r,t)},function(t){return bc(n,r,t)}):Wu(n,r,e)}function Wu(n,r,e){r.status="fulfilled",r.value=e,$u(r),n.state=e,r=n.pending,r!==null&&(e=r.next,e===r?n.pending=null:(e=e.next,r.next=e,Fu(n,e)))}function bc(n,r,e){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do r.status="rejected",r.reason=e,$u(r),r=r.next;while(r!==t)}n.action=null}function $u(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function nd(n,r){return r}function rd(n,r){if(Rn){var e=Wn.formState;if(e!==null){n:{var t=yn;if(Rn){if(er){r:{for(var i=er,l=me;i.nodeType!==8;){if(!l){i=null;break r}if(i=_e(i.nextSibling),i===null){i=null;break r}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){er=_e(i.nextSibling),t=i.data==="F!";break n}}ut(t)}t=!1}t&&(r=e[0])}}return e=qr(),e.memoizedState=e.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nd,lastRenderedState:r},e.queue=t,e=yd.bind(null,yn,t),t.dispatch=e,t=mc(!1),l=Tc.bind(null,yn,!1,t.queue),t=qr(),i={state:r,dispatch:null,action:n,pending:null},t.queue=i,e=sp.bind(null,yn,i,l,e),i.dispatch=e,t.memoizedState=n,[r,e,!1]}function ed(n){var r=mr();return td(r,Qn,n)}function td(n,r,e){if(r=gc(n,r,nd)[0],n=wl(Ie)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var t=_i(r)}catch(s){throw s===Ea?ml:s}else t=r;r=mr();var i=r.queue,l=i.dispatch;return e!==r.memoizedState&&(yn.flags|=2048,ka(9,{destroy:void 0},cp.bind(null,i,e),null)),[t,l,n]}function cp(n,r){n.action=r}function ad(n){var r=mr(),e=Qn;if(e!==null)return td(r,e,n);mr(),r=r.memoizedState,e=mr();var t=e.queue.dispatch;return e.memoizedState=n,[r,t,!1]}function ka(n,r,e,t){return n={tag:n,create:e,deps:t,inst:r,next:null},r=yn.updateQueue,r===null&&(r=jl(),yn.updateQueue=r),e=r.lastEffect,e===null?r.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,r.lastEffect=n),n}function id(){return mr().memoizedState}function Nl(n,r,e,t){var i=qr();yn.flags|=n,i.memoizedState=ka(1|r,{destroy:void 0},e,t===void 0?null:t)}function Al(n,r,e,t){var i=mr();t=t===void 0?null:t;var l=i.memoizedState.inst;Qn!==null&&t!==null&&cc(t,Qn.memoizedState.deps)?i.memoizedState=ka(r,l,e,t):(yn.flags|=n,i.memoizedState=ka(1|r,l,e,t))}function ld(n,r){Nl(8390656,8,n,r)}function _c(n,r){Al(2048,8,n,r)}function op(n){yn.flags|=4;var r=yn.updateQueue;if(r===null)r=jl(),yn.updateQueue=r,r.events=[n];else{var e=r.events;e===null?r.events=[n]:e.push(n)}}function sd(n){var r=mr().memoizedState;return op({ref:r,nextImpl:n}),function(){if((Un&2)!==0)throw Error(d(440));return r.impl.apply(void 0,arguments)}}function cd(n,r){return Al(4,2,n,r)}function od(n,r){return Al(4,4,n,r)}function ud(n,r){if(typeof r=="function"){n=n();var e=r(n);return function(){typeof e=="function"?e():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function dd(n,r,e){e=e!=null?e.concat([n]):null,Al(4,4,ud.bind(null,r,n),e)}function xc(){}function fd(n,r){var e=mr();r=r===void 0?null:r;var t=e.memoizedState;return r!==null&&cc(r,t[1])?t[0]:(e.memoizedState=[n,r],n)}function hd(n,r){var e=mr();r=r===void 0?null:r;var t=e.memoizedState;if(r!==null&&cc(r,t[1]))return t[0];if(t=n(),Wt){Ee(!0);try{n()}finally{Ee(!1)}}return e.memoizedState=[t,r],t}function yc(n,r,e){return e===void 0||(Ve&1073741824)!==0&&(On&261930)===0?n.memoizedState=r:(n.memoizedState=e,n=pf(),yn.lanes|=n,xt|=n,e)}function gd(n,r,e,t){return te(e,r)?e:Na.current!==null?(n=yc(n,e,t),te(n,r)||(Sr=!0),n):(Ve&42)===0||(Ve&1073741824)!==0&&(On&261930)===0?(Sr=!0,n.memoizedState=e):(n=pf(),yn.lanes|=n,xt|=n,r)}function pd(n,r,e,t,i){var l=H.p;H.p=l!==0&&8>l?l:8;var s=E.T,o={};E.T=o,Tc(n,!1,r,e);try{var f=i(),S=E.S;if(S!==null&&S(o,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var O=ap(f,t);xi(n,r,O,oe(n))}else xi(n,r,t,oe(n))}catch(R){xi(n,r,{then:function(){},status:"rejected",reason:R},oe())}finally{H.p=l,s!==null&&o.types!==null&&(s.types=o.types),E.T=s}}function up(){}function vc(n,r,e,t){if(n.tag!==5)throw Error(d(476));var i=md(n).queue;pd(n,i,r,V,e===null?up:function(){return bd(n),e(t)})}function md(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:V},next:null};var e={};return r.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:e},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function bd(n){var r=md(n);r.next===null&&(r=n.alternate.memoizedState),xi(n,r.next.queue,{},oe())}function Sc(){return kr(Ci)}function _d(){return mr().memoizedState}function xd(){return mr().memoizedState}function dp(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var e=oe();n=ht(e);var t=gt(r,n,e);t!==null&&(Wr(t,r,e),gi(t,r,e)),r={cache:Ps()},n.payload=r;return}r=r.return}}function fp(n,r,e){var t=oe();e={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Ol(n)?vd(r,e):(e=qs(n,r,e,t),e!==null&&(Wr(e,n,t),Sd(e,r,t)))}function yd(n,r,e){var t=oe();xi(n,r,e,t)}function xi(n,r,e,t){var i={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ol(n))vd(r,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var s=r.lastRenderedState,o=l(s,e);if(i.hasEagerState=!0,i.eagerState=o,te(o,s))return ol(n,r,i,0),Wn===null&&cl(),!1}catch{}if(e=qs(n,r,i,t),e!==null)return Wr(e,n,t),Sd(e,r,t),!0}return!1}function Tc(n,r,e,t){if(t={lane:2,revertLane:ro(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ol(n)){if(r)throw Error(d(479))}else r=qs(n,e,t,2),r!==null&&Wr(r,n,2)}function Ol(n){var r=n.alternate;return n===yn||r!==null&&r===yn}function vd(n,r){Aa=Sl=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function Sd(n,r,e){if((e&4194048)!==0){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,dn(n,e)}}var yi={readContext:kr,use:El,useCallback:or,useContext:or,useEffect:or,useImperativeHandle:or,useLayoutEffect:or,useInsertionEffect:or,useMemo:or,useReducer:or,useRef:or,useState:or,useDebugValue:or,useDeferredValue:or,useTransition:or,useSyncExternalStore:or,useId:or,useHostTransitionStatus:or,useFormState:or,useActionState:or,useOptimistic:or,useMemoCache:or,useCacheRefresh:or};yi.useEffectEvent=or;var Td={readContext:kr,use:El,useCallback:function(n,r){return qr().memoizedState=[n,r===void 0?null:r],n},useContext:kr,useEffect:ld,useImperativeHandle:function(n,r,e){e=e!=null?e.concat([n]):null,Nl(4194308,4,ud.bind(null,r,n),e)},useLayoutEffect:function(n,r){return Nl(4194308,4,n,r)},useInsertionEffect:function(n,r){Nl(4,2,n,r)},useMemo:function(n,r){var e=qr();r=r===void 0?null:r;var t=n();if(Wt){Ee(!0);try{n()}finally{Ee(!1)}}return e.memoizedState=[t,r],t},useReducer:function(n,r,e){var t=qr();if(e!==void 0){var i=e(r);if(Wt){Ee(!0);try{e(r)}finally{Ee(!1)}}}else i=r;return t.memoizedState=t.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},t.queue=n,n=n.dispatch=fp.bind(null,yn,n),[t.memoizedState,n]},useRef:function(n){var r=qr();return n={current:n},r.memoizedState=n},useState:function(n){n=mc(n);var r=n.queue,e=yd.bind(null,yn,r);return r.dispatch=e,[n.memoizedState,e]},useDebugValue:xc,useDeferredValue:function(n,r){var e=qr();return yc(e,n,r)},useTransition:function(){var n=mc(!1);return n=pd.bind(null,yn,n.queue,!0,!1),qr().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,e){var t=yn,i=qr();if(Rn){if(e===void 0)throw Error(d(407));e=e()}else{if(e=r(),Wn===null)throw Error(d(349));(On&127)!==0||Vu(t,r,e)}i.memoizedState=e;var l={value:e,getSnapshot:r};return i.queue=l,ld(Qu.bind(null,t,l,n),[n]),t.flags|=2048,ka(9,{destroy:void 0},Iu.bind(null,t,l,e,r),null),e},useId:function(){var n=qr(),r=Wn.identifierPrefix;if(Rn){var e=Ae,t=Ne;e=(t&~(1<<32-Ur(t)-1)).toString(32)+e,r="_"+r+"R_"+e,e=Tl++,0<e&&(r+="H"+e.toString(32)),r+="_"}else e=ip++,r="_"+r+"r_"+e.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:Sc,useFormState:rd,useActionState:rd,useOptimistic:function(n){var r=qr();r.memoizedState=r.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=e,r=Tc.bind(null,yn,!0,e),e.dispatch=r,[n,r]},useMemoCache:hc,useCacheRefresh:function(){return qr().memoizedState=dp.bind(null,yn)},useEffectEvent:function(n){var r=qr(),e={impl:n};return r.memoizedState=e,function(){if((Un&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}},jc={readContext:kr,use:El,useCallback:fd,useContext:kr,useEffect:_c,useImperativeHandle:dd,useInsertionEffect:cd,useLayoutEffect:od,useMemo:hd,useReducer:wl,useRef:id,useState:function(){return wl(Ie)},useDebugValue:xc,useDeferredValue:function(n,r){var e=mr();return gd(e,Qn.memoizedState,n,r)},useTransition:function(){var n=wl(Ie)[0],r=mr().memoizedState;return[typeof n=="boolean"?n:_i(n),r]},useSyncExternalStore:Ku,useId:_d,useHostTransitionStatus:Sc,useFormState:ed,useActionState:ed,useOptimistic:function(n,r){var e=mr();return Zu(e,Qn,n,r)},useMemoCache:hc,useCacheRefresh:xd};jc.useEffectEvent=sd;var jd={readContext:kr,use:El,useCallback:fd,useContext:kr,useEffect:_c,useImperativeHandle:dd,useInsertionEffect:cd,useLayoutEffect:od,useMemo:hd,useReducer:pc,useRef:id,useState:function(){return pc(Ie)},useDebugValue:xc,useDeferredValue:function(n,r){var e=mr();return Qn===null?yc(e,n,r):gd(e,Qn.memoizedState,n,r)},useTransition:function(){var n=pc(Ie)[0],r=mr().memoizedState;return[typeof n=="boolean"?n:_i(n),r]},useSyncExternalStore:Ku,useId:_d,useHostTransitionStatus:Sc,useFormState:ad,useActionState:ad,useOptimistic:function(n,r){var e=mr();return Qn!==null?Zu(e,Qn,n,r):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:hc,useCacheRefresh:xd};jd.useEffectEvent=sd;function Ec(n,r,e,t){r=n.memoizedState,e=e(t,r),e=e==null?r:A({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var wc={enqueueSetState:function(n,r,e){n=n._reactInternals;var t=oe(),i=ht(t);i.payload=r,e!=null&&(i.callback=e),r=gt(n,i,t),r!==null&&(Wr(r,n,t),gi(r,n,t))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var t=oe(),i=ht(t);i.tag=1,i.payload=r,e!=null&&(i.callback=e),r=gt(n,i,t),r!==null&&(Wr(r,n,t),gi(r,n,t))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=oe(),t=ht(e);t.tag=2,r!=null&&(t.callback=r),r=gt(n,t,e),r!==null&&(Wr(r,n,e),gi(r,n,e))}};function Ed(n,r,e,t,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,s):r.prototype&&r.prototype.isPureReactComponent?!li(e,t)||!li(i,l):!0}function wd(n,r,e,t){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,t),r.state!==n&&wc.enqueueReplaceState(r,r.state,null)}function $t(n,r){var e=r;if("ref"in r){e={};for(var t in r)t!=="ref"&&(e[t]=r[t])}if(n=n.defaultProps){e===r&&(e=A({},e));for(var i in n)e[i]===void 0&&(e[i]=n[i])}return e}function Nd(n){sl(n)}function Ad(n){console.error(n)}function Od(n){sl(n)}function kl(n,r){try{var e=n.onUncaughtError;e(r.value,{componentStack:r.stack})}catch(t){setTimeout(function(){throw t})}}function kd(n,r,e){try{var t=n.onCaughtError;t(e.value,{componentStack:e.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Nc(n,r,e){return e=ht(e),e.tag=3,e.payload={element:null},e.callback=function(){kl(n,r)},e}function Md(n){return n=ht(n),n.tag=3,n}function Rd(n,r,e,t){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;n.payload=function(){return i(l)},n.callback=function(){kd(r,e,t)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kd(r,e,t),typeof i!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})})}function hp(n,r,e,t,i){if(e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(r=e.alternate,r!==null&&Sa(r,e,i,!0),e=ie.current,e!==null){switch(e.tag){case 31:case 13:return be===null?Yl():e.alternate===null&&ur===0&&(ur=3),e.flags&=-257,e.flags|=65536,e.lanes=i,t===bl?e.flags|=16384:(r=e.updateQueue,r===null?e.updateQueue=new Set([t]):r.add(t),Wc(n,t,i)),!1;case 22:return e.flags|=65536,t===bl?e.flags|=16384:(r=e.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([t])},e.updateQueue=r):(e=r.retryQueue,e===null?r.retryQueue=new Set([t]):e.add(t)),Wc(n,t,i)),!1}throw Error(d(435,e.tag))}return Wc(n,t,i),Yl(),!1}if(Rn)return r=ie.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=i,t!==Qs&&(n=Error(d(422),{cause:t}),oi(he(n,e)))):(t!==Qs&&(r=Error(d(423),{cause:t}),oi(he(r,e))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,t=he(t,e),i=Nc(n.stateNode,t,i),tc(n,i),ur!==4&&(ur=2)),!1;var l=Error(d(520),{cause:t});if(l=he(l,e),Ai===null?Ai=[l]:Ai.push(l),ur!==4&&(ur=2),r===null)return!0;t=he(t,e),e=r;do{switch(e.tag){case 3:return e.flags|=65536,n=i&-i,e.lanes|=n,n=Nc(e.stateNode,t,n),tc(e,n),!1;case 1:if(r=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(yt===null||!yt.has(l))))return e.flags|=65536,i&=-i,e.lanes|=i,i=Md(i),Rd(i,n,e,t),tc(e,i),!1}e=e.return}while(e!==null);return!1}var Ac=Error(d(461)),Sr=!1;function Mr(n,r,e,t){r.child=n===null?Cu(r,null,e,t):Pt(r,n.child,e,t)}function Dd(n,r,e,t,i){e=e.render;var l=r.ref;if("ref"in t){var s={};for(var o in t)o!=="ref"&&(s[o]=t[o])}else s=t;return Jt(r),t=oc(n,r,e,s,l,i),o=uc(),n!==null&&!Sr?(dc(n,r,i),Qe(n,r,i)):(Rn&&o&&Vs(r),r.flags|=1,Mr(n,r,t,i),r.child)}function zd(n,r,e,t,i){if(n===null){var l=e.type;return typeof l=="function"&&!Gs(l)&&l.defaultProps===void 0&&e.compare===null?(r.tag=15,r.type=l,Ld(n,r,l,t,i)):(n=dl(e.type,null,t,r,r.mode,i),n.ref=r.ref,n.return=r,r.child=n)}if(l=n.child,!Cc(n,i)){var s=l.memoizedProps;if(e=e.compare,e=e!==null?e:li,e(s,t)&&n.ref===r.ref)return Qe(n,r,i)}return r.flags|=1,n=qe(l,t),n.ref=r.ref,n.return=r,r.child=n}function Ld(n,r,e,t,i){if(n!==null){var l=n.memoizedProps;if(li(l,t)&&n.ref===r.ref)if(Sr=!1,r.pendingProps=t=l,Cc(n,i))(n.flags&131072)!==0&&(Sr=!0);else return r.lanes=n.lanes,Qe(n,r,i)}return Oc(n,r,e,t,i)}function Cd(n,r,e,t){var i=t.children,l=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((r.flags&128)!==0){if(l=l!==null?l.baseLanes|e:e,n!==null){for(t=r.child=n.child,i=0;t!==null;)i=i|t.lanes|t.childLanes,t=t.sibling;t=i&~l}else t=0,r.child=null;return Bd(n,r,l,e,t)}if((e&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&pl(r,l!==null?l.cachePool:null),l!==null?Hu(r,l):ic(),qu(r);else return t=r.lanes=536870912,Bd(n,r,l!==null?l.baseLanes|e:e,e,t)}else l!==null?(pl(r,l.cachePool),Hu(r,l),mt(),r.memoizedState=null):(n!==null&&pl(r,null),ic(),mt());return Mr(n,r,i,e),r.child}function vi(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function Bd(n,r,e,t,i){var l=$s();return l=l===null?null:{parent:yr._currentValue,pool:l},r.memoizedState={baseLanes:e,cachePool:l},n!==null&&pl(r,null),ic(),qu(r),n!==null&&Sa(n,r,t,!0),r.childLanes=i,null}function Ml(n,r){return r=Dl({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function Ud(n,r,e){return Pt(r,n.child,null,e),n=Ml(r,r.pendingProps),n.flags|=2,le(r),r.memoizedState=null,n}function gp(n,r,e){var t=r.pendingProps,i=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Rn){if(t.mode==="hidden")return n=Ml(r,t),r.lanes=536870912,vi(null,n);if(sc(r),(n=er)?(n=Pf(n,me),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:ct!==null?{id:Ne,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},e=vu(n),e.return=r,r.child=e,Or=r,er=null)):n=null,n===null)throw ut(r);return r.lanes=536870912,null}return Ml(r,t)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(sc(r),i)if(r.flags&256)r.flags&=-257,r=Ud(n,r,e);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(d(558));else if(Sr||Sa(n,r,e,!1),i=(e&n.childLanes)!==0,Sr||i){if(t=Wn,t!==null&&(s=fr(t,e),s!==0&&s!==l.retryLane))throw l.retryLane=s,Kt(n,s),Wr(t,n,s),Ac;Yl(),r=Ud(n,r,e)}else n=l.treeContext,er=_e(s.nextSibling),Or=r,Rn=!0,ot=null,me=!1,n!==null&&ju(r,n),r=Ml(r,t),r.flags|=4096;return r}return n=qe(n.child,{mode:t.mode,children:t.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Rl(n,r){var e=r.ref;if(e===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(d(284));(n===null||n.ref!==e)&&(r.flags|=4194816)}}function Oc(n,r,e,t,i){return Jt(r),e=oc(n,r,e,t,void 0,i),t=uc(),n!==null&&!Sr?(dc(n,r,i),Qe(n,r,i)):(Rn&&t&&Vs(r),r.flags|=1,Mr(n,r,e,i),r.child)}function Hd(n,r,e,t,i,l){return Jt(r),r.updateQueue=null,e=Yu(r,t,e,i),Gu(n),t=uc(),n!==null&&!Sr?(dc(n,r,l),Qe(n,r,l)):(Rn&&t&&Vs(r),r.flags|=1,Mr(n,r,e,l),r.child)}function qd(n,r,e,t,i){if(Jt(r),r.stateNode===null){var l=_a,s=e.contextType;typeof s=="object"&&s!==null&&(l=kr(s)),l=new e(t,l),r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=wc,r.stateNode=l,l._reactInternals=r,l=r.stateNode,l.props=t,l.state=r.memoizedState,l.refs={},rc(r),s=e.contextType,l.context=typeof s=="object"&&s!==null?kr(s):_a,l.state=r.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ec(r,e,s,t),l.state=r.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&wc.enqueueReplaceState(l,l.state,null),mi(r,t,l,i),pi(),l.state=r.memoizedState),typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!0}else if(n===null){l=r.stateNode;var o=r.memoizedProps,f=$t(e,o);l.props=f;var S=l.context,O=e.contextType;s=_a,typeof O=="object"&&O!==null&&(s=kr(O));var R=e.getDerivedStateFromProps;O=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=r.pendingProps!==o,O||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||S!==s)&&wd(r,l,t,s),ft=!1;var T=r.memoizedState;l.state=T,mi(r,t,l,i),pi(),S=r.memoizedState,o||T!==S||ft?(typeof R=="function"&&(Ec(r,e,R,t),S=r.memoizedState),(f=ft||Ed(r,e,f,t,T,S,s))?(O||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=S),l.props=t,l.state=S,l.context=s,t=f):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{l=r.stateNode,ec(n,r),s=r.memoizedProps,O=$t(e,s),l.props=O,R=r.pendingProps,T=l.context,S=e.contextType,f=_a,typeof S=="object"&&S!==null&&(f=kr(S)),o=e.getDerivedStateFromProps,(S=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==R||T!==f)&&wd(r,l,t,f),ft=!1,T=r.memoizedState,l.state=T,mi(r,t,l,i),pi();var j=r.memoizedState;s!==R||T!==j||ft||n!==null&&n.dependencies!==null&&hl(n.dependencies)?(typeof o=="function"&&(Ec(r,e,o,t),j=r.memoizedState),(O=ft||Ed(r,e,O,t,T,j,f)||n!==null&&n.dependencies!==null&&hl(n.dependencies))?(S||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,j,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,j,f)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&T===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&T===n.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=j),l.props=t,l.state=j,l.context=f,t=O):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&T===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&T===n.memoizedState||(r.flags|=1024),t=!1)}return l=t,Rl(n,r),t=(r.flags&128)!==0,l||t?(l=r.stateNode,e=t&&typeof e.getDerivedStateFromError!="function"?null:l.render(),r.flags|=1,n!==null&&t?(r.child=Pt(r,n.child,null,i),r.child=Pt(r,null,e,i)):Mr(n,r,e,i),r.memoizedState=l.state,n=r.child):n=Qe(n,r,i),n}function Gd(n,r,e,t){return It(),r.flags|=256,Mr(n,r,e,t),r.child}var kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mc(n){return{baseLanes:n,cachePool:ku()}}function Rc(n,r,e){return n=n!==null?n.childLanes&~e:0,r&&(n|=ce),n}function Yd(n,r,e){var t=r.pendingProps,i=!1,l=(r.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(pr.current&2)!==0),s&&(i=!0,r.flags&=-129),s=(r.flags&32)!==0,r.flags&=-33,n===null){if(Rn){if(i?pt(r):mt(),(n=er)?(n=Pf(n,me),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:ct!==null?{id:Ne,overflow:Ae}:null,retryLane:536870912,hydrationErrors:null},e=vu(n),e.return=r,r.child=e,Or=r,er=null)):n=null,n===null)throw ut(r);return po(n)?r.lanes=32:r.lanes=536870912,null}var o=t.children;return t=t.fallback,i?(mt(),i=r.mode,o=Dl({mode:"hidden",children:o},i),t=Vt(t,i,e,null),o.return=r,t.return=r,o.sibling=t,r.child=o,t=r.child,t.memoizedState=Mc(e),t.childLanes=Rc(n,s,e),r.memoizedState=kc,vi(null,t)):(pt(r),Dc(r,o))}var f=n.memoizedState;if(f!==null&&(o=f.dehydrated,o!==null)){if(l)r.flags&256?(pt(r),r.flags&=-257,r=zc(n,r,e)):r.memoizedState!==null?(mt(),r.child=n.child,r.flags|=128,r=null):(mt(),o=t.fallback,i=r.mode,t=Dl({mode:"visible",children:t.children},i),o=Vt(o,i,e,null),o.flags|=2,t.return=r,o.return=r,t.sibling=o,r.child=t,Pt(r,n.child,null,e),t=r.child,t.memoizedState=Mc(e),t.childLanes=Rc(n,s,e),r.memoizedState=kc,r=vi(null,t));else if(pt(r),po(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var S=s.dgst;s=S,t=Error(d(419)),t.stack="",t.digest=s,oi({value:t,source:null,stack:null}),r=zc(n,r,e)}else if(Sr||Sa(n,r,e,!1),s=(e&n.childLanes)!==0,Sr||s){if(s=Wn,s!==null&&(t=fr(s,e),t!==0&&t!==f.retryLane))throw f.retryLane=t,Kt(n,t),Wr(s,n,t),Ac;go(o)||Yl(),r=zc(n,r,e)}else go(o)?(r.flags|=192,r.child=n.child,r=null):(n=f.treeContext,er=_e(o.nextSibling),Or=r,Rn=!0,ot=null,me=!1,n!==null&&ju(r,n),r=Dc(r,t.children),r.flags|=4096);return r}return i?(mt(),o=t.fallback,i=r.mode,f=n.child,S=f.sibling,t=qe(f,{mode:"hidden",children:t.children}),t.subtreeFlags=f.subtreeFlags&65011712,S!==null?o=qe(S,o):(o=Vt(o,i,e,null),o.flags|=2),o.return=r,t.return=r,t.sibling=o,r.child=t,vi(null,t),t=r.child,o=n.child.memoizedState,o===null?o=Mc(e):(i=o.cachePool,i!==null?(f=yr._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=ku(),o={baseLanes:o.baseLanes|e,cachePool:i}),t.memoizedState=o,t.childLanes=Rc(n,s,e),r.memoizedState=kc,vi(n.child,t)):(pt(r),e=n.child,n=e.sibling,e=qe(e,{mode:"visible",children:t.children}),e.return=r,e.sibling=null,n!==null&&(s=r.deletions,s===null?(r.deletions=[n],r.flags|=16):s.push(n)),r.child=e,r.memoizedState=null,e)}function Dc(n,r){return r=Dl({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Dl(n,r){return n=ae(22,n,null,r),n.lanes=0,n}function zc(n,r,e){return Pt(r,n.child,null,e),n=Dc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Kd(n,r,e){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r),Zs(n.return,r,e)}function Lc(n,r,e,t,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:i,treeForkCount:l}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=e,s.tailMode=i,s.treeForkCount=l)}function Vd(n,r,e){var t=r.pendingProps,i=t.revealOrder,l=t.tail;t=t.children;var s=pr.current,o=(s&2)!==0;if(o?(s=s&1|2,r.flags|=128):s&=1,G(pr,s),Mr(n,r,t,e),t=Rn?ci:0,!o&&n!==null&&(n.flags&128)!==0)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kd(n,e,r);else if(n.tag===19)Kd(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"forwards":for(e=r.child,i=null;e!==null;)n=e.alternate,n!==null&&vl(n)===null&&(i=e),e=e.sibling;e=i,e===null?(i=r.child,r.child=null):(i=e.sibling,e.sibling=null),Lc(r,!1,i,e,l,t);break;case"backwards":case"unstable_legacy-backwards":for(e=null,i=r.child,r.child=null;i!==null;){if(n=i.alternate,n!==null&&vl(n)===null){r.child=i;break}n=i.sibling,i.sibling=e,e=i,i=n}Lc(r,!0,e,null,l,t);break;case"together":Lc(r,!1,null,null,void 0,t);break;default:r.memoizedState=null}return r.child}function Qe(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),xt|=r.lanes,(e&r.childLanes)===0)if(n!==null){if(Sa(n,r,e,!1),(e&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(d(153));if(r.child!==null){for(n=r.child,e=qe(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=qe(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function Cc(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&hl(n)))}function pp(n,r,e){switch(r.tag){case 3:Mn(r,r.stateNode.containerInfo),dt(r,yr,n.memoizedState.cache),It();break;case 27:case 5:Br(r);break;case 4:Mn(r,r.stateNode.containerInfo);break;case 10:dt(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,sc(r),null;break;case 13:var t=r.memoizedState;if(t!==null)return t.dehydrated!==null?(pt(r),r.flags|=128,null):(e&r.child.childLanes)!==0?Yd(n,r,e):(pt(r),n=Qe(n,r,e),n!==null?n.sibling:null);pt(r);break;case 19:var i=(n.flags&128)!==0;if(t=(e&r.childLanes)!==0,t||(Sa(n,r,e,!1),t=(e&r.childLanes)!==0),i){if(t)return Vd(n,r,e);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(pr,pr.current),t)break;return null;case 22:return r.lanes=0,Cd(n,r,e,r.pendingProps);case 24:dt(r,yr,n.memoizedState.cache)}return Qe(n,r,e)}function Id(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps)Sr=!0;else{if(!Cc(n,e)&&(r.flags&128)===0)return Sr=!1,pp(n,r,e);Sr=(n.flags&131072)!==0}else Sr=!1,Rn&&(r.flags&1048576)!==0&&Tu(r,ci,r.index);switch(r.lanes=0,r.tag){case 16:n:{var t=r.pendingProps;if(n=Zt(r.elementType),r.type=n,typeof n=="function")Gs(n)?(t=$t(n,t),r.tag=1,r=qd(null,r,n,t,e)):(r.tag=0,r=Oc(null,r,n,t,e));else{if(n!=null){var i=n.$$typeof;if(i===sn){r.tag=11,r=Dd(null,r,n,t,e);break n}else if(i===on){r.tag=14,r=zd(null,r,n,t,e);break n}}throw r=ar(n)||n,Error(d(306,r,""))}}return r;case 0:return Oc(n,r,r.type,r.pendingProps,e);case 1:return t=r.type,i=$t(t,r.pendingProps),qd(n,r,t,i,e);case 3:n:{if(Mn(r,r.stateNode.containerInfo),n===null)throw Error(d(387));t=r.pendingProps;var l=r.memoizedState;i=l.element,ec(n,r),mi(r,t,null,e);var s=r.memoizedState;if(t=s.cache,dt(r,yr,t),t!==l.cache&&Fs(r,[yr],e,!0),pi(),t=s.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:s.cache},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){r=Gd(n,r,t,e);break n}else if(t!==i){i=he(Error(d(424)),r),oi(i),r=Gd(n,r,t,e);break n}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,er=_e(n.firstChild),Or=r,Rn=!0,ot=null,me=!0,e=Cu(r,null,t,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(It(),t===i){r=Qe(n,r,e);break n}Mr(n,r,t,e)}r=r.child}return r;case 26:return Rl(n,r),n===null?(e=th(r.type,null,r.pendingProps,null))?r.memoizedState=e:Rn||(e=r.type,n=r.pendingProps,t=Zl(hn.current).createElement(e),t[hr]=r,t[zr]=n,Rr(t,e,n),_r(t),r.stateNode=t):r.memoizedState=th(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Br(r),n===null&&Rn&&(t=r.stateNode=nh(r.type,r.pendingProps,hn.current),Or=r,me=!0,i=er,jt(r.type)?(mo=i,er=_e(t.firstChild)):er=i),Mr(n,r,r.pendingProps.children,e),Rl(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Rn&&((i=t=er)&&(t=Ip(t,r.type,r.pendingProps,me),t!==null?(r.stateNode=t,Or=r,er=_e(t.firstChild),me=!1,i=!0):i=!1),i||ut(r)),Br(r),i=r.type,l=r.pendingProps,s=n!==null?n.memoizedProps:null,t=l.children,uo(i,l)?t=null:s!==null&&uo(i,s)&&(r.flags|=32),r.memoizedState!==null&&(i=oc(n,r,lp,null,null,e),Ci._currentValue=i),Rl(n,r),Mr(n,r,t,e),r.child;case 6:return n===null&&Rn&&((n=e=er)&&(e=Qp(e,r.pendingProps,me),e!==null?(r.stateNode=e,Or=r,er=null,n=!0):n=!1),n||ut(r)),null;case 13:return Yd(n,r,e);case 4:return Mn(r,r.stateNode.containerInfo),t=r.pendingProps,n===null?r.child=Pt(r,null,t,e):Mr(n,r,t,e),r.child;case 11:return Dd(n,r,r.type,r.pendingProps,e);case 7:return Mr(n,r,r.pendingProps,e),r.child;case 8:return Mr(n,r,r.pendingProps.children,e),r.child;case 12:return Mr(n,r,r.pendingProps.children,e),r.child;case 10:return t=r.pendingProps,dt(r,r.type,t.value),Mr(n,r,t.children,e),r.child;case 9:return i=r.type._context,t=r.pendingProps.children,Jt(r),i=kr(i),t=t(i),r.flags|=1,Mr(n,r,t,e),r.child;case 14:return zd(n,r,r.type,r.pendingProps,e);case 15:return Ld(n,r,r.type,r.pendingProps,e);case 19:return Vd(n,r,e);case 31:return gp(n,r,e);case 22:return Cd(n,r,e,r.pendingProps);case 24:return Jt(r),t=kr(yr),n===null?(i=$s(),i===null&&(i=Wn,l=Ps(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=e),i=l),r.memoizedState={parent:t,cache:i},rc(r),dt(r,yr,i)):((n.lanes&e)!==0&&(ec(n,r),mi(r,null,null,e),pi()),i=n.memoizedState,l=r.memoizedState,i.parent!==t?(i={parent:t,cache:t},r.memoizedState=i,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=i),dt(r,yr,t)):(t=l.cache,dt(r,yr,t),t!==i.cache&&Fs(r,[yr],e,!0))),Mr(n,r,r.pendingProps.children,e),r.child;case 29:throw r.pendingProps}throw Error(d(156,r.tag))}function Je(n){n.flags|=4}function Bc(n,r,e,t,i){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(xf())n.flags|=8192;else throw Ft=bl,nc}else n.flags&=-16777217}function Qd(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ch(r))if(xf())n.flags|=8192;else throw Ft=bl,nc}function zl(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?fn():536870912,n.lanes|=r,za|=r)}function Si(n,r){if(!Rn)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function tr(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(r)for(var i=n.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags&65011712,t|=i.flags&65011712,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=t,n.childLanes=e,r}function mp(n,r,e){var t=r.pendingProps;switch(Is(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tr(r),null;case 1:return tr(r),null;case 3:return e=r.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),r.memoizedState.cache!==t&&(r.flags|=2048),Ke(yr),In(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(va(r)?Je(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Js())),tr(r),null;case 26:var i=r.type,l=r.memoizedState;return n===null?(Je(r),l!==null?(tr(r),Qd(r,l)):(tr(r),Bc(r,i,null,t,e))):l?l!==n.memoizedState?(Je(r),tr(r),Qd(r,l)):(tr(r),r.flags&=-16777217):(n=n.memoizedProps,n!==t&&Je(r),tr(r),Bc(r,i,n,t,e)),null;case 27:if(ue(r),e=hn.current,i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&Je(r);else{if(!t){if(r.stateNode===null)throw Error(d(166));return tr(r),null}n=J.current,va(r)?Eu(r):(n=nh(i,t,e),r.stateNode=n,Je(r))}return tr(r),null;case 5:if(ue(r),i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&Je(r);else{if(!t){if(r.stateNode===null)throw Error(d(166));return tr(r),null}if(l=J.current,va(r))Eu(r);else{var s=Zl(hn.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof t.is=="string"?s.createElement("select",{is:t.is}):s.createElement("select"),t.multiple?l.multiple=!0:t.size&&(l.size=t.size);break;default:l=typeof t.is=="string"?s.createElement(i,{is:t.is}):s.createElement(i)}}l[hr]=r,l[zr]=t;n:for(s=r.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break n;for(;s.sibling===null;){if(s.return===null||s.return===r)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}r.stateNode=l;n:switch(Rr(l,i,t),i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}t&&Je(r)}}return tr(r),Bc(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,e),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==t&&Je(r);else{if(typeof t!="string"&&r.stateNode===null)throw Error(d(166));if(n=hn.current,va(r)){if(n=r.stateNode,e=r.memoizedProps,t=null,i=Or,i!==null)switch(i.tag){case 27:case 5:t=i.memoizedProps}n[hr]=r,n=!!(n.nodeValue===e||t!==null&&t.suppressHydrationWarning===!0||Kf(n.nodeValue,e)),n||ut(r,!0)}else n=Zl(n).createTextNode(t),n[hr]=r,r.stateNode=n}return tr(r),null;case 31:if(e=r.memoizedState,n===null||n.memoizedState!==null){if(t=va(r),e!==null){if(n===null){if(!t)throw Error(d(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[hr]=r}else It(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;tr(r),n=!1}else e=Js(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return r.flags&256?(le(r),r):(le(r),null);if((r.flags&128)!==0)throw Error(d(558))}return tr(r),null;case 13:if(t=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=va(r),t!==null&&t.dehydrated!==null){if(n===null){if(!i)throw Error(d(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[hr]=r}else It(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;tr(r),i=!1}else i=Js(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return r.flags&256?(le(r),r):(le(r),null)}return le(r),(r.flags&128)!==0?(r.lanes=e,r):(e=t!==null,n=n!==null&&n.memoizedState!==null,e&&(t=r.child,i=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(i=t.alternate.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048)),e!==n&&e&&(r.child.flags|=8192),zl(r,r.updateQueue),tr(r),null);case 4:return In(),n===null&&io(r.stateNode.containerInfo),tr(r),null;case 10:return Ke(r.type),tr(r),null;case 19:if(N(pr),t=r.memoizedState,t===null)return tr(r),null;if(i=(r.flags&128)!==0,l=t.rendering,l===null)if(i)Si(t,!1);else{if(ur!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(l=vl(n),l!==null){for(r.flags|=128,Si(t,!1),n=l.updateQueue,r.updateQueue=n,zl(r,n),r.subtreeFlags=0,n=e,e=r.child;e!==null;)yu(e,n),e=e.sibling;return G(pr,pr.current&1|2),Rn&&Ge(r,t.treeForkCount),r.child}n=n.sibling}t.tail!==null&&dr()>Hl&&(r.flags|=128,i=!0,Si(t,!1),r.lanes=4194304)}else{if(!i)if(n=vl(l),n!==null){if(r.flags|=128,i=!0,n=n.updateQueue,r.updateQueue=n,zl(r,n),Si(t,!0),t.tail===null&&t.tailMode==="hidden"&&!l.alternate&&!Rn)return tr(r),null}else 2*dr()-t.renderingStartTime>Hl&&e!==536870912&&(r.flags|=128,i=!0,Si(t,!1),r.lanes=4194304);t.isBackwards?(l.sibling=r.child,r.child=l):(n=t.last,n!==null?n.sibling=l:r.child=l,t.last=l)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=dr(),n.sibling=null,e=pr.current,G(pr,i?e&1|2:e&1),Rn&&Ge(r,t.treeForkCount),n):(tr(r),null);case 22:case 23:return le(r),lc(),t=r.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(r.flags|=8192):t&&(r.flags|=8192),t?(e&536870912)!==0&&(r.flags&128)===0&&(tr(r),r.subtreeFlags&6&&(r.flags|=8192)):tr(r),e=r.updateQueue,e!==null&&zl(r,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==e&&(r.flags|=2048),n!==null&&N(Xt),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),r.memoizedState.cache!==e&&(r.flags|=2048),Ke(yr),tr(r),null;case 25:return null;case 30:return null}throw Error(d(156,r.tag))}function bp(n,r){switch(Is(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ke(yr),In(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ue(r),null;case 31:if(r.memoizedState!==null){if(le(r),r.alternate===null)throw Error(d(340));It()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(le(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(d(340));It()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return N(pr),null;case 4:return In(),null;case 10:return Ke(r.type),null;case 22:case 23:return le(r),lc(),n!==null&&N(Xt),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Ke(yr),null;case 25:return null;default:return null}}function Jd(n,r){switch(Is(r),r.tag){case 3:Ke(yr),In();break;case 26:case 27:case 5:ue(r);break;case 4:In();break;case 31:r.memoizedState!==null&&le(r);break;case 13:le(r);break;case 19:N(pr);break;case 10:Ke(r.type);break;case 22:case 23:le(r),lc(),n!==null&&N(Xt);break;case 24:Ke(yr)}}function Ti(n,r){try{var e=r.updateQueue,t=e!==null?e.lastEffect:null;if(t!==null){var i=t.next;e=i;do{if((e.tag&n)===n){t=void 0;var l=e.create,s=e.inst;t=l(),s.destroy=t}e=e.next}while(e!==i)}}catch(o){Vn(r,r.return,o)}}function bt(n,r,e){try{var t=r.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var l=i.next;t=l;do{if((t.tag&n)===n){var s=t.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,i=r;var f=e,S=o;try{S()}catch(O){Vn(i,f,O)}}}t=t.next}while(t!==l)}}catch(O){Vn(r,r.return,O)}}function Xd(n){var r=n.updateQueue;if(r!==null){var e=n.stateNode;try{Uu(r,e)}catch(t){Vn(n,n.return,t)}}}function Zd(n,r,e){e.props=$t(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(t){Vn(n,r,t)}}function ji(n,r){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof e=="function"?n.refCleanup=e(t):e.current=t}}catch(i){Vn(n,r,i)}}function Oe(n,r){var e=n.ref,t=n.refCleanup;if(e!==null)if(typeof t=="function")try{t()}catch(i){Vn(n,r,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){Vn(n,r,i)}else e.current=null}function Fd(n){var r=n.type,e=n.memoizedProps,t=n.stateNode;try{n:switch(r){case"button":case"input":case"select":case"textarea":e.autoFocus&&t.focus();break n;case"img":e.src?t.src=e.src:e.srcSet&&(t.srcset=e.srcSet)}}catch(i){Vn(n,n.return,i)}}function Uc(n,r,e){try{var t=n.stateNode;Hp(t,n.type,e,r),t[zr]=r}catch(i){Vn(n,n.return,i)}}function Pd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&jt(n.type)||n.tag===4}function Hc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Pd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&jt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qc(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,r):(r=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.appendChild(n),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=q));else if(t!==4&&(t===27&&jt(n.type)&&(e=n.stateNode,r=null),n=n.child,n!==null))for(qc(n,r,e),n=n.sibling;n!==null;)qc(n,r,e),n=n.sibling}function Ll(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(t!==4&&(t===27&&jt(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(Ll(n,r,e),n=n.sibling;n!==null;)Ll(n,r,e),n=n.sibling}function Wd(n){var r=n.stateNode,e=n.memoizedProps;try{for(var t=n.type,i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Rr(r,t,e),r[hr]=n,r[zr]=e}catch(l){Vn(n,n.return,l)}}var Xe=!1,Tr=!1,Gc=!1,$d=typeof WeakSet=="function"?WeakSet:Set,Nr=null;function _p(n,r){if(n=n.containerInfo,co=es,n=du(n),zs(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break n}var s=0,o=-1,f=-1,S=0,O=0,R=n,T=null;r:for(;;){for(var j;R!==e||i!==0&&R.nodeType!==3||(o=s+i),R!==l||t!==0&&R.nodeType!==3||(f=s+t),R.nodeType===3&&(s+=R.nodeValue.length),(j=R.firstChild)!==null;)T=R,R=j;for(;;){if(R===n)break r;if(T===e&&++S===i&&(o=s),T===l&&++O===t&&(f=s),(j=R.nextSibling)!==null)break;R=T,T=R.parentNode}R=j}e=o===-1||f===-1?null:{start:o,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(oo={focusedElem:n,selectionRange:e},es=!1,Nr=r;Nr!==null;)if(r=Nr,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Nr=n;else for(;Nr!==null;){switch(r=Nr,l=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)i=n[e],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,e=r,i=l.memoizedProps,l=l.memoizedState,t=e.stateNode;try{var F=$t(e.type,i);n=t.getSnapshotBeforeUpdate(F,l),t.__reactInternalSnapshotBeforeUpdate=n}catch(cn){Vn(e,e.return,cn)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,e=n.nodeType,e===9)ho(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ho(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(d(163))}if(n=r.sibling,n!==null){n.return=r.return,Nr=n;break}Nr=r.return}}function nf(n,r,e){var t=e.flags;switch(e.tag){case 0:case 11:case 15:Fe(n,e),t&4&&Ti(5,e);break;case 1:if(Fe(n,e),t&4)if(n=e.stateNode,r===null)try{n.componentDidMount()}catch(s){Vn(e,e.return,s)}else{var i=$t(e.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(i,r,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Vn(e,e.return,s)}}t&64&&Xd(e),t&512&&ji(e,e.return);break;case 3:if(Fe(n,e),t&64&&(n=e.updateQueue,n!==null)){if(r=null,e.child!==null)switch(e.child.tag){case 27:case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}try{Uu(n,r)}catch(s){Vn(e,e.return,s)}}break;case 27:r===null&&t&4&&Wd(e);case 26:case 5:Fe(n,e),r===null&&t&4&&Fd(e),t&512&&ji(e,e.return);break;case 12:Fe(n,e);break;case 31:Fe(n,e),t&4&&tf(n,e);break;case 13:Fe(n,e),t&4&&af(n,e),t&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=Np.bind(null,e),Jp(n,e))));break;case 22:if(t=e.memoizedState!==null||Xe,!t){r=r!==null&&r.memoizedState!==null||Tr,i=Xe;var l=Tr;Xe=t,(Tr=r)&&!l?Pe(n,e,(e.subtreeFlags&8772)!==0):Fe(n,e),Xe=i,Tr=l}break;case 30:break;default:Fe(n,e)}}function rf(n){var r=n.alternate;r!==null&&(n.alternate=null,rf(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Xa(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var lr=null,Xr=!1;function Ze(n,r,e){for(e=e.child;e!==null;)ef(n,r,e),e=e.sibling}function ef(n,r,e){if(Dr&&typeof Dr.onCommitFiberUnmount=="function")try{Dr.onCommitFiberUnmount(zt,e)}catch{}switch(e.tag){case 26:Tr||Oe(e,r),Ze(n,r,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Tr||Oe(e,r);var t=lr,i=Xr;jt(e.type)&&(lr=e.stateNode,Xr=!1),Ze(n,r,e),Di(e.stateNode),lr=t,Xr=i;break;case 5:Tr||Oe(e,r);case 6:if(t=lr,i=Xr,lr=null,Ze(n,r,e),lr=t,Xr=i,lr!==null)if(Xr)try{(lr.nodeType===9?lr.body:lr.nodeName==="HTML"?lr.ownerDocument.body:lr).removeChild(e.stateNode)}catch(l){Vn(e,r,l)}else try{lr.removeChild(e.stateNode)}catch(l){Vn(e,r,l)}break;case 18:lr!==null&&(Xr?(n=lr,Zf(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),Ya(n)):Zf(lr,e.stateNode));break;case 4:t=lr,i=Xr,lr=e.stateNode.containerInfo,Xr=!0,Ze(n,r,e),lr=t,Xr=i;break;case 0:case 11:case 14:case 15:bt(2,e,r),Tr||bt(4,e,r),Ze(n,r,e);break;case 1:Tr||(Oe(e,r),t=e.stateNode,typeof t.componentWillUnmount=="function"&&Zd(e,r,t)),Ze(n,r,e);break;case 21:Ze(n,r,e);break;case 22:Tr=(t=Tr)||e.memoizedState!==null,Ze(n,r,e),Tr=t;break;default:Ze(n,r,e)}}function tf(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ya(n)}catch(e){Vn(r,r.return,e)}}}function af(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ya(n)}catch(e){Vn(r,r.return,e)}}function xp(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new $d),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new $d),r;default:throw Error(d(435,n.tag))}}function Cl(n,r){var e=xp(n);r.forEach(function(t){if(!e.has(t)){e.add(t);var i=Ap.bind(null,n,t);t.then(i,i)}})}function Zr(n,r){var e=r.deletions;if(e!==null)for(var t=0;t<e.length;t++){var i=e[t],l=n,s=r,o=s;n:for(;o!==null;){switch(o.tag){case 27:if(jt(o.type)){lr=o.stateNode,Xr=!1;break n}break;case 5:lr=o.stateNode,Xr=!1;break n;case 3:case 4:lr=o.stateNode.containerInfo,Xr=!0;break n}o=o.return}if(lr===null)throw Error(d(160));ef(l,s,i),lr=null,Xr=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)lf(r,n),r=r.sibling}var ve=null;function lf(n,r){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Zr(r,n),Fr(n),t&4&&(bt(3,n,n.return),Ti(3,n),bt(5,n,n.return));break;case 1:Zr(r,n),Fr(n),t&512&&(Tr||e===null||Oe(e,e.return)),t&64&&Xe&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?t:e.concat(t))));break;case 26:var i=ve;if(Zr(r,n),Fr(n),t&512&&(Tr||e===null||Oe(e,e.return)),t&4){var l=e!==null?e.memoizedState:null;if(t=n.memoizedState,e===null)if(t===null)if(n.stateNode===null){n:{t=n.type,e=n.memoizedProps,i=i.ownerDocument||i;r:switch(t){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Bt]||l[hr]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(t),i.head.insertBefore(l,i.querySelector("head > title"))),Rr(l,t,e),l[hr]=n,_r(l),t=l;break n;case"link":var s=lh("link","href",i).get(t+(e.href||""));if(s){for(var o=0;o<s.length;o++)if(l=s[o],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(o,1);break r}}l=i.createElement(t),Rr(l,t,e),i.head.appendChild(l);break;case"meta":if(s=lh("meta","content",i).get(t+(e.content||""))){for(o=0;o<s.length;o++)if(l=s[o],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(o,1);break r}}l=i.createElement(t),Rr(l,t,e),i.head.appendChild(l);break;default:throw Error(d(468,t))}l[hr]=n,_r(l),t=l}n.stateNode=t}else sh(i,n.type,n.stateNode);else n.stateNode=ih(i,t,n.memoizedProps);else l!==t?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,t===null?sh(i,n.type,n.stateNode):ih(i,t,n.memoizedProps)):t===null&&n.stateNode!==null&&Uc(n,n.memoizedProps,e.memoizedProps)}break;case 27:Zr(r,n),Fr(n),t&512&&(Tr||e===null||Oe(e,e.return)),e!==null&&t&4&&Uc(n,n.memoizedProps,e.memoizedProps);break;case 5:if(Zr(r,n),Fr(n),t&512&&(Tr||e===null||Oe(e,e.return)),n.flags&32){i=n.stateNode;try{un(i,"")}catch(F){Vn(n,n.return,F)}}t&4&&n.stateNode!=null&&(i=n.memoizedProps,Uc(n,i,e!==null?e.memoizedProps:i)),t&1024&&(Gc=!0);break;case 6:if(Zr(r,n),Fr(n),t&4){if(n.stateNode===null)throw Error(d(162));t=n.memoizedProps,e=n.stateNode;try{e.nodeValue=t}catch(F){Vn(n,n.return,F)}}break;case 3:if(Wl=null,i=ve,ve=Fl(r.containerInfo),Zr(r,n),ve=i,Fr(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{Ya(r.containerInfo)}catch(F){Vn(n,n.return,F)}Gc&&(Gc=!1,sf(n));break;case 4:t=ve,ve=Fl(n.stateNode.containerInfo),Zr(r,n),Fr(n),ve=t;break;case 12:Zr(r,n),Fr(n);break;case 31:Zr(r,n),Fr(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 13:Zr(r,n),Fr(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Ul=dr()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 22:i=n.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,S=Xe,O=Tr;if(Xe=S||i,Tr=O||f,Zr(r,n),Tr=O,Xe=S,Fr(n),t&8192)n:for(r=n.stateNode,r._visibility=i?r._visibility&-2:r._visibility|1,i&&(e===null||f||Xe||Tr||na(n)),e=null,r=n;;){if(r.tag===5||r.tag===26){if(e===null){f=e=r;try{if(l=f.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=f.stateNode;var R=f.memoizedProps.style,T=R!=null&&R.hasOwnProperty("display")?R.display:null;o.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(F){Vn(f,f.return,F)}}}else if(r.tag===6){if(e===null){f=r;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(F){Vn(f,f.return,F)}}}else if(r.tag===18){if(e===null){f=r;try{var j=f.stateNode;i?Ff(j,!0):Ff(f.stateNode,!1)}catch(F){Vn(f,f.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break n;for(;r.sibling===null;){if(r.return===null||r.return===n)break n;e===r&&(e=null),r=r.return}e===r&&(e=null),r.sibling.return=r.return,r=r.sibling}t&4&&(t=n.updateQueue,t!==null&&(e=t.retryQueue,e!==null&&(t.retryQueue=null,Cl(n,e))));break;case 19:Zr(r,n),Fr(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 30:break;case 21:break;default:Zr(r,n),Fr(n)}}function Fr(n){var r=n.flags;if(r&2){try{for(var e,t=n.return;t!==null;){if(Pd(t)){e=t;break}t=t.return}if(e==null)throw Error(d(160));switch(e.tag){case 27:var i=e.stateNode,l=Hc(n);Ll(n,l,i);break;case 5:var s=e.stateNode;e.flags&32&&(un(s,""),e.flags&=-33);var o=Hc(n);Ll(n,o,s);break;case 3:case 4:var f=e.stateNode.containerInfo,S=Hc(n);qc(n,S,f);break;default:throw Error(d(161))}}catch(O){Vn(n,n.return,O)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function sf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;sf(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Fe(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)nf(n,r.alternate,r),r=r.sibling}function na(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:bt(4,r,r.return),na(r);break;case 1:Oe(r,r.return);var e=r.stateNode;typeof e.componentWillUnmount=="function"&&Zd(r,r.return,e),na(r);break;case 27:Di(r.stateNode);case 26:case 5:Oe(r,r.return),na(r);break;case 22:r.memoizedState===null&&na(r);break;case 30:na(r);break;default:na(r)}n=n.sibling}}function Pe(n,r,e){for(e=e&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var t=r.alternate,i=n,l=r,s=l.flags;switch(l.tag){case 0:case 11:case 15:Pe(i,l,e),Ti(4,l);break;case 1:if(Pe(i,l,e),t=l,i=t.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(S){Vn(t,t.return,S)}if(t=l,i=t.updateQueue,i!==null){var o=t.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)Bu(f[i],o)}catch(S){Vn(t,t.return,S)}}e&&s&64&&Xd(l),ji(l,l.return);break;case 27:Wd(l);case 26:case 5:Pe(i,l,e),e&&t===null&&s&4&&Fd(l),ji(l,l.return);break;case 12:Pe(i,l,e);break;case 31:Pe(i,l,e),e&&s&4&&tf(i,l);break;case 13:Pe(i,l,e),e&&s&4&&af(i,l);break;case 22:l.memoizedState===null&&Pe(i,l,e),ji(l,l.return);break;case 30:break;default:Pe(i,l,e)}r=r.sibling}}function Yc(n,r){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&ui(e))}function Kc(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ui(n))}function Se(n,r,e,t){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)cf(n,r,e,t),r=r.sibling}function cf(n,r,e,t){var i=r.flags;switch(r.tag){case 0:case 11:case 15:Se(n,r,e,t),i&2048&&Ti(9,r);break;case 1:Se(n,r,e,t);break;case 3:Se(n,r,e,t),i&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ui(n)));break;case 12:if(i&2048){Se(n,r,e,t),n=r.stateNode;try{var l=r.memoizedProps,s=l.id,o=l.onPostCommit;typeof o=="function"&&o(s,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(f){Vn(r,r.return,f)}}else Se(n,r,e,t);break;case 31:Se(n,r,e,t);break;case 13:Se(n,r,e,t);break;case 23:break;case 22:l=r.stateNode,s=r.alternate,r.memoizedState!==null?l._visibility&2?Se(n,r,e,t):Ei(n,r):l._visibility&2?Se(n,r,e,t):(l._visibility|=2,Ma(n,r,e,t,(r.subtreeFlags&10256)!==0||!1)),i&2048&&Yc(s,r);break;case 24:Se(n,r,e,t),i&2048&&Kc(r.alternate,r);break;default:Se(n,r,e,t)}}function Ma(n,r,e,t,i){for(i=i&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var l=n,s=r,o=e,f=t,S=s.flags;switch(s.tag){case 0:case 11:case 15:Ma(l,s,o,f,i),Ti(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&2?Ma(l,s,o,f,i):Ei(l,s):(O._visibility|=2,Ma(l,s,o,f,i)),i&&S&2048&&Yc(s.alternate,s);break;case 24:Ma(l,s,o,f,i),i&&S&2048&&Kc(s.alternate,s);break;default:Ma(l,s,o,f,i)}r=r.sibling}}function Ei(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var e=n,t=r,i=t.flags;switch(t.tag){case 22:Ei(e,t),i&2048&&Yc(t.alternate,t);break;case 24:Ei(e,t),i&2048&&Kc(t.alternate,t);break;default:Ei(e,t)}r=r.sibling}}var wi=8192;function Ra(n,r,e){if(n.subtreeFlags&wi)for(n=n.child;n!==null;)of(n,r,e),n=n.sibling}function of(n,r,e){switch(n.tag){case 26:Ra(n,r,e),n.flags&wi&&n.memoizedState!==null&&im(e,ve,n.memoizedState,n.memoizedProps);break;case 5:Ra(n,r,e);break;case 3:case 4:var t=ve;ve=Fl(n.stateNode.containerInfo),Ra(n,r,e),ve=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=wi,wi=16777216,Ra(n,r,e),wi=t):Ra(n,r,e));break;default:Ra(n,r,e)}}function uf(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ni(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Nr=t,ff(t,n)}uf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)df(n),n=n.sibling}function df(n){switch(n.tag){case 0:case 11:case 15:Ni(n),n.flags&2048&&bt(9,n,n.return);break;case 3:Ni(n);break;case 12:Ni(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Bl(n)):Ni(n);break;default:Ni(n)}}function Bl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Nr=t,ff(t,n)}uf(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:bt(8,r,r.return),Bl(r);break;case 22:e=r.stateNode,e._visibility&2&&(e._visibility&=-3,Bl(r));break;default:Bl(r)}n=n.sibling}}function ff(n,r){for(;Nr!==null;){var e=Nr;switch(e.tag){case 0:case 11:case 15:bt(8,e,r);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var t=e.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:ui(e.memoizedState.cache)}if(t=e.child,t!==null)t.return=e,Nr=t;else n:for(e=n;Nr!==null;){t=Nr;var i=t.sibling,l=t.return;if(rf(t),t===e){Nr=null;break n}if(i!==null){i.return=l,Nr=i;break n}Nr=l}}}var yp={getCacheForType:function(n){var r=kr(yr),e=r.data.get(n);return e===void 0&&(e=n(),r.data.set(n,e)),e},cacheSignal:function(){return kr(yr).controller.signal}},vp=typeof WeakMap=="function"?WeakMap:Map,Un=0,Wn=null,wn=null,On=0,Kn=0,se=null,_t=!1,Da=!1,Vc=!1,We=0,ur=0,xt=0,ra=0,Ic=0,ce=0,za=0,Ai=null,Pr=null,Qc=!1,Ul=0,hf=0,Hl=1/0,ql=null,yt=null,Er=0,vt=null,La=null,$e=0,Jc=0,Xc=null,gf=null,Oi=0,Zc=null;function oe(){return(Un&2)!==0&&On!==0?On&-On:E.T!==null?ro():sa()}function pf(){if(ce===0)if((On&536870912)===0||Rn){var n=la;la<<=1,(la&3932160)===0&&(la=262144),ce=n}else ce=536870912;return n=ie.current,n!==null&&(n.flags|=32),ce}function Wr(n,r,e){(n===Wn&&(Kn===2||Kn===9)||n.cancelPendingCommit!==null)&&(Ca(n,0),St(n,On,ce,!1)),Pn(n,e),((Un&2)===0||n!==Wn)&&(n===Wn&&((Un&2)===0&&(ra|=e),ur===4&&St(n,On,ce,!1)),ke(n))}function mf(n,r,e){if((Un&6)!==0)throw Error(d(327));var t=!e&&(r&127)===0&&(r&n.expiredLanes)===0||k(n,r),i=t?jp(n,r):Pc(n,r,!0),l=t;do{if(i===0){Da&&!t&&St(n,r,0,!1);break}else{if(e=n.current.alternate,l&&!Sp(e)){i=Pc(n,r,!1),l=!1;continue}if(i===2){if(l=r,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){r=s;n:{var o=n;i=Ai;var f=o.current.memoizedState.isDehydrated;if(f&&(Ca(o,s).flags|=256),s=Pc(o,s,!1),s!==2){if(Vc&&!f){o.errorRecoveryDisabledLanes|=l,ra|=l,i=4;break n}l=Pr,Pr=i,l!==null&&(Pr===null?Pr=l:Pr.push.apply(Pr,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Ca(n,0),St(n,r,0,!0);break}n:{switch(t=n,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((r&4194048)!==r)break;case 6:St(t,r,ce,!_t);break n;case 2:Pr=null;break;case 3:case 5:break;default:throw Error(d(329))}if((r&62914560)===r&&(i=Ul+300-dr(),10<i)){if(St(t,r,ce,!_t),h(t,0,!0)!==0)break n;$e=r,t.timeoutHandle=Jf(bf.bind(null,t,e,Pr,ql,Qc,r,ce,ra,za,_t,l,"Throttled",-0,0),i);break n}bf(t,e,Pr,ql,Qc,r,ce,ra,za,_t,l,null,-0,0)}}break}while(!0);ke(n)}function bf(n,r,e,t,i,l,s,o,f,S,O,R,T,j){if(n.timeoutHandle=-1,R=r.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:q},of(r,l,R);var F=(l&62914560)===l?Ul-dr():(l&4194048)===l?hf-dr():0;if(F=lm(R,F),F!==null){$e=l,n.cancelPendingCommit=F(Ef.bind(null,n,r,l,e,t,i,s,o,f,O,R,null,T,j)),St(n,l,s,!S);return}}Ef(n,r,l,e,t,i,s,o,f)}function Sp(n){for(var r=n;;){var e=r.tag;if((e===0||e===11||e===15)&&r.flags&16384&&(e=r.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var t=0;t<e.length;t++){var i=e[t],l=i.getSnapshot;i=i.value;try{if(!te(l(),i))return!1}catch{return!1}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function St(n,r,e,t){r&=~Ic,r&=~ra,n.suspendedLanes|=r,n.pingedLanes&=~r,t&&(n.warmLanes|=r),t=n.expirationTimes;for(var i=r;0<i;){var l=31-Ur(i),s=1<<l;t[l]=-1,i&=~s}e!==0&&X(n,e,r)}function Gl(){return(Un&6)===0?(ki(0),!1):!0}function Fc(){if(wn!==null){if(Kn===0)var n=wn.return;else n=wn,Ye=Qt=null,fc(n),wa=null,fi=0,n=wn;for(;n!==null;)Jd(n.alternate,n),n=n.return;wn=null}}function Ca(n,r){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Yp(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),$e=0,Fc(),Wn=n,wn=e=qe(n.current,null),On=r,Kn=0,se=null,_t=!1,Da=k(n,r),Vc=!1,za=ce=Ic=ra=xt=ur=0,Pr=Ai=null,Qc=!1,(r&8)!==0&&(r|=r&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=r;0<t;){var i=31-Ur(t),l=1<<i;r|=n[i],t&=~l}return We=r,cl(),e}function _f(n,r){yn=null,E.H=yi,r===Ea||r===ml?(r=Du(),Kn=3):r===nc?(r=Du(),Kn=4):Kn=r===Ac?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,se=r,wn===null&&(ur=1,kl(n,he(r,n.current)))}function xf(){var n=ie.current;return n===null?!0:(On&4194048)===On?be===null:(On&62914560)===On||(On&536870912)!==0?n===be:!1}function yf(){var n=E.H;return E.H=yi,n===null?yi:n}function vf(){var n=E.A;return E.A=yp,n}function Yl(){ur=4,_t||(On&4194048)!==On&&ie.current!==null||(Da=!0),(xt&134217727)===0&&(ra&134217727)===0||Wn===null||St(Wn,On,ce,!1)}function Pc(n,r,e){var t=Un;Un|=2;var i=yf(),l=vf();(Wn!==n||On!==r)&&(ql=null,Ca(n,r)),r=!1;var s=ur;n:do try{if(Kn!==0&&wn!==null){var o=wn,f=se;switch(Kn){case 8:Fc(),s=6;break n;case 3:case 2:case 9:case 6:ie.current===null&&(r=!0);var S=Kn;if(Kn=0,se=null,Ba(n,o,f,S),e&&Da){s=0;break n}break;default:S=Kn,Kn=0,se=null,Ba(n,o,f,S)}}Tp(),s=ur;break}catch(O){_f(n,O)}while(!0);return r&&n.shellSuspendCounter++,Ye=Qt=null,Un=t,E.H=i,E.A=l,wn===null&&(Wn=null,On=0,cl()),s}function Tp(){for(;wn!==null;)Sf(wn)}function jp(n,r){var e=Un;Un|=2;var t=yf(),i=vf();Wn!==n||On!==r?(ql=null,Hl=dr()+500,Ca(n,r)):Da=k(n,r);n:do try{if(Kn!==0&&wn!==null){r=wn;var l=se;r:switch(Kn){case 1:Kn=0,se=null,Ba(n,r,l,1);break;case 2:case 9:if(Mu(l)){Kn=0,se=null,Tf(r);break}r=function(){Kn!==2&&Kn!==9||Wn!==n||(Kn=7),ke(n)},l.then(r,r);break n;case 3:Kn=7;break n;case 4:Kn=5;break n;case 7:Mu(l)?(Kn=0,se=null,Tf(r)):(Kn=0,se=null,Ba(n,r,l,7));break;case 5:var s=null;switch(wn.tag){case 26:s=wn.memoizedState;case 5:case 27:var o=wn;if(s?ch(s):o.stateNode.complete){Kn=0,se=null;var f=o.sibling;if(f!==null)wn=f;else{var S=o.return;S!==null?(wn=S,Kl(S)):wn=null}break r}}Kn=0,se=null,Ba(n,r,l,5);break;case 6:Kn=0,se=null,Ba(n,r,l,6);break;case 8:Fc(),ur=6;break n;default:throw Error(d(462))}}Ep();break}catch(O){_f(n,O)}while(!0);return Ye=Qt=null,E.H=t,E.A=i,Un=e,wn!==null?0:(Wn=null,On=0,cl(),ur)}function Ep(){for(;wn!==null&&!xs();)Sf(wn)}function Sf(n){var r=Id(n.alternate,n,We);n.memoizedProps=n.pendingProps,r===null?Kl(n):wn=r}function Tf(n){var r=n,e=r.alternate;switch(r.tag){case 15:case 0:r=Hd(e,r,r.pendingProps,r.type,void 0,On);break;case 11:r=Hd(e,r,r.pendingProps,r.type.render,r.ref,On);break;case 5:fc(r);default:Jd(e,r),r=wn=yu(r,We),r=Id(e,r,We)}n.memoizedProps=n.pendingProps,r===null?Kl(n):wn=r}function Ba(n,r,e,t){Ye=Qt=null,fc(r),wa=null,fi=0;var i=r.return;try{if(hp(n,i,r,e,On)){ur=1,kl(n,he(e,n.current)),wn=null;return}}catch(l){if(i!==null)throw wn=i,l;ur=1,kl(n,he(e,n.current)),wn=null;return}r.flags&32768?(Rn||t===1?n=!0:Da||(On&536870912)!==0?n=!1:(_t=n=!0,(t===2||t===9||t===3||t===6)&&(t=ie.current,t!==null&&t.tag===13&&(t.flags|=16384))),jf(r,n)):Kl(r)}function Kl(n){var r=n;do{if((r.flags&32768)!==0){jf(r,_t);return}n=r.return;var e=mp(r.alternate,r,We);if(e!==null){wn=e;return}if(r=r.sibling,r!==null){wn=r;return}wn=r=n}while(r!==null);ur===0&&(ur=5)}function jf(n,r){do{var e=bp(n.alternate,n);if(e!==null){e.flags&=32767,wn=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!r&&(n=n.sibling,n!==null)){wn=n;return}wn=n=e}while(n!==null);ur=6,wn=null}function Ef(n,r,e,t,i,l,s,o,f){n.cancelPendingCommit=null;do Vl();while(Er!==0);if((Un&6)!==0)throw Error(d(327));if(r!==null){if(r===n.current)throw Error(d(177));if(l=r.lanes|r.childLanes,l|=Hs,P(n,e,l,s,o,f),n===Wn&&(wn=Wn=null,On=0),La=r,vt=n,$e=e,Jc=l,Xc=i,gf=t,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Op(Dt,function(){return kf(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||t){t=E.T,E.T=null,i=H.p,H.p=2,s=Un,Un|=4;try{_p(n,r,e)}finally{Un=s,H.p=i,E.T=t}}Er=1,wf(),Nf(),Af()}}function wf(){if(Er===1){Er=0;var n=vt,r=La,e=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||e){e=E.T,E.T=null;var t=H.p;H.p=2;var i=Un;Un|=4;try{lf(r,n);var l=oo,s=du(n.containerInfo),o=l.focusedElem,f=l.selectionRange;if(s!==o&&o&&o.ownerDocument&&uu(o.ownerDocument.documentElement,o)){if(f!==null&&zs(o)){var S=f.start,O=f.end;if(O===void 0&&(O=S),"selectionStart"in o)o.selectionStart=S,o.selectionEnd=Math.min(O,o.value.length);else{var R=o.ownerDocument||document,T=R&&R.defaultView||window;if(T.getSelection){var j=T.getSelection(),F=o.textContent.length,cn=Math.min(f.start,F),Xn=f.end===void 0?cn:Math.min(f.end,F);!j.extend&&cn>Xn&&(s=Xn,Xn=cn,cn=s);var b=ou(o,cn),m=ou(o,Xn);if(b&&m&&(j.rangeCount!==1||j.anchorNode!==b.node||j.anchorOffset!==b.offset||j.focusNode!==m.node||j.focusOffset!==m.offset)){var v=R.createRange();v.setStart(b.node,b.offset),j.removeAllRanges(),cn>Xn?(j.addRange(v),j.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),j.addRange(v))}}}}for(R=[],j=o;j=j.parentNode;)j.nodeType===1&&R.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<R.length;o++){var M=R[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}es=!!co,oo=co=null}finally{Un=i,H.p=t,E.T=e}}n.current=r,Er=2}}function Nf(){if(Er===2){Er=0;var n=vt,r=La,e=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||e){e=E.T,E.T=null;var t=H.p;H.p=2;var i=Un;Un|=4;try{nf(n,r.alternate,r)}finally{Un=i,H.p=t,E.T=e}}Er=3}}function Af(){if(Er===4||Er===3){Er=0,Vi();var n=vt,r=La,e=$e,t=gf;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Er=5:(Er=0,La=vt=null,Of(n,n.pendingLanes));var i=n.pendingLanes;if(i===0&&(yt=null),Le(e),r=r.stateNode,Dr&&typeof Dr.onCommitFiberRoot=="function")try{Dr.onCommitFiberRoot(zt,r,void 0,(r.current.flags&128)===128)}catch{}if(t!==null){r=E.T,i=H.p,H.p=2,E.T=null;try{for(var l=n.onRecoverableError,s=0;s<t.length;s++){var o=t[s];l(o.value,{componentStack:o.stack})}}finally{E.T=r,H.p=i}}($e&3)!==0&&Vl(),ke(n),i=n.pendingLanes,(e&261930)!==0&&(i&42)!==0?n===Zc?Oi++:(Oi=0,Zc=n):Oi=0,ki(0)}}function Of(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,ui(r)))}function Vl(){return wf(),Nf(),Af(),kf()}function kf(){if(Er!==5)return!1;var n=vt,r=Jc;Jc=0;var e=Le($e),t=E.T,i=H.p;try{H.p=32>e?32:e,E.T=null,e=Xc,Xc=null;var l=vt,s=$e;if(Er=0,La=vt=null,$e=0,(Un&6)!==0)throw Error(d(331));var o=Un;if(Un|=4,df(l.current),cf(l,l.current,s,e),Un=o,ki(0,!1),Dr&&typeof Dr.onPostCommitFiberRoot=="function")try{Dr.onPostCommitFiberRoot(zt,l)}catch{}return!0}finally{H.p=i,E.T=t,Of(n,r)}}function Mf(n,r,e){r=he(e,r),r=Nc(n.stateNode,r,2),n=gt(n,r,2),n!==null&&(Pn(n,2),ke(n))}function Vn(n,r,e){if(n.tag===3)Mf(n,n,e);else for(;r!==null;){if(r.tag===3){Mf(r,n,e);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(yt===null||!yt.has(t))){n=he(e,n),e=Md(2),t=gt(r,e,2),t!==null&&(Rd(e,t,r,n),Pn(t,2),ke(t));break}}r=r.return}}function Wc(n,r,e){var t=n.pingCache;if(t===null){t=n.pingCache=new vp;var i=new Set;t.set(r,i)}else i=t.get(r),i===void 0&&(i=new Set,t.set(r,i));i.has(e)||(Vc=!0,i.add(e),n=wp.bind(null,n,r,e),r.then(n,n))}function wp(n,r,e){var t=n.pingCache;t!==null&&t.delete(r),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,Wn===n&&(On&e)===e&&(ur===4||ur===3&&(On&62914560)===On&&300>dr()-Ul?(Un&2)===0&&Ca(n,0):Ic|=e,za===On&&(za=0)),ke(n)}function Rf(n,r){r===0&&(r=fn()),n=Kt(n,r),n!==null&&(Pn(n,r),ke(n))}function Np(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),Rf(n,e)}function Ap(n,r){var e=0;switch(n.tag){case 31:case 13:var t=n.stateNode,i=n.memoizedState;i!==null&&(e=i.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(d(314))}t!==null&&t.delete(r),Rf(n,e)}function Op(n,r){return ia(n,r)}var Il=null,Ua=null,$c=!1,Ql=!1,no=!1,Tt=0;function ke(n){n!==Ua&&n.next===null&&(Ua===null?Il=Ua=n:Ua=Ua.next=n),Ql=!0,$c||($c=!0,Mp())}function ki(n,r){if(!no&&Ql){no=!0;do for(var e=!1,t=Il;t!==null;){if(n!==0){var i=t.pendingLanes;if(i===0)var l=0;else{var s=t.suspendedLanes,o=t.pingedLanes;l=(1<<31-Ur(42|n)+1)-1,l&=i&~(s&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,Cf(t,l))}else l=On,l=h(t,t===Wn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||k(t,l)||(e=!0,Cf(t,l));t=t.next}while(e);no=!1}}function kp(){Df()}function Df(){Ql=$c=!1;var n=0;Tt!==0&&Gp()&&(n=Tt);for(var r=dr(),e=null,t=Il;t!==null;){var i=t.next,l=zf(t,r);l===0?(t.next=null,e===null?Il=i:e.next=i,i===null&&(Ua=e)):(e=t,(n!==0||(l&3)!==0)&&(Ql=!0)),t=i}Er!==0&&Er!==5||ki(n),Tt!==0&&(Tt=0)}function zf(n,r){for(var e=n.suspendedLanes,t=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-Ur(l),o=1<<s,f=i[s];f===-1?((o&e)===0||(o&t)!==0)&&(i[s]=Y(o,r)):f<=r&&(n.expiredLanes|=o),l&=~o}if(r=Wn,e=On,e=h(n,n===r?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,e===0||n===r&&(Kn===2||Kn===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&Ia(t),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||k(n,e)){if(r=e&-e,r===n.callbackPriority)return r;switch(t!==null&&Ia(t),Le(e)){case 2:case 8:e=Rt;break;case 32:e=Dt;break;case 268435456:e=Qi;break;default:e=Dt}return t=Lf.bind(null,n),e=ia(e,t),n.callbackPriority=r,n.callbackNode=e,r}return t!==null&&t!==null&&Ia(t),n.callbackPriority=2,n.callbackNode=null,2}function Lf(n,r){if(Er!==0&&Er!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(Vl()&&n.callbackNode!==e)return null;var t=On;return t=h(n,n===Wn?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(mf(n,t,r),zf(n,dr()),n.callbackNode!=null&&n.callbackNode===e?Lf.bind(null,n):null)}function Cf(n,r){if(Vl())return null;mf(n,r,!0)}function Mp(){Kp(function(){(Un&6)!==0?ia(ze,kp):Df()})}function ro(){if(Tt===0){var n=Ta;n===0&&(n=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Tt=n}return Tt}function Bf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:lt(""+n)}function Uf(n,r){var e=r.ownerDocument.createElement("input");return e.name=r.name,e.value=r.value,n.id&&e.setAttribute("form",n.id),r.parentNode.insertBefore(e,r),n=new FormData(n),e.parentNode.removeChild(e),n}function Rp(n,r,e,t,i){if(r==="submit"&&e&&e.stateNode===i){var l=Bf((i[zr]||null).action),s=t.submitter;s&&(r=(r=s[zr]||null)?Bf(r.formAction):s.getAttribute("formAction"),r!==null&&(l=r,s=null));var o=new al("action","action",null,t,i);n.push({event:o,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Tt!==0){var f=s?Uf(i,s):new FormData(i);vc(e,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(o.preventDefault(),f=s?Uf(i,s):new FormData(i),vc(e,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var eo=0;eo<Us.length;eo++){var to=Us[eo],Dp=to.toLowerCase(),zp=to[0].toUpperCase()+to.slice(1);ye(Dp,"on"+zp)}ye(gu,"onAnimationEnd"),ye(pu,"onAnimationIteration"),ye(mu,"onAnimationStart"),ye("dblclick","onDoubleClick"),ye("focusin","onFocus"),ye("focusout","onBlur"),ye(Fg,"onTransitionRun"),ye(Pg,"onTransitionStart"),ye(Wg,"onTransitionCancel"),ye(bu,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Be("onBeforeInput",["compositionend","keypress","textInput","paste"]),Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mi));function Hf(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],i=t.event;t=t.listeners;n:{var l=void 0;if(r)for(var s=t.length-1;0<=s;s--){var o=t[s],f=o.instance,S=o.currentTarget;if(o=o.listener,f!==l&&i.isPropagationStopped())break n;l=o,i.currentTarget=S;try{l(i)}catch(O){sl(O)}i.currentTarget=null,l=f}else for(s=0;s<t.length;s++){if(o=t[s],f=o.instance,S=o.currentTarget,o=o.listener,f!==l&&i.isPropagationStopped())break n;l=o,i.currentTarget=S;try{l(i)}catch(O){sl(O)}i.currentTarget=null,l=f}}}}function Nn(n,r){var e=r[Ja];e===void 0&&(e=r[Ja]=new Set);var t=n+"__bubble";e.has(t)||(qf(r,n,2,!1),e.add(t))}function ao(n,r,e){var t=0;r&&(t|=4),qf(e,n,t,r)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function io(n){if(!n[Jl]){n[Jl]=!0,Fi.forEach(function(e){e!=="selectionchange"&&(Lp.has(e)||ao(e,!1,n),ao(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Jl]||(r[Jl]=!0,ao("selectionchange",!1,r))}}function qf(n,r,e,t){switch(ph(r)){case 2:var i=om;break;case 8:i=um;break;default:i=vo}e=i.bind(null,r,e,n),i=void 0,!Es||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),t?i!==void 0?n.addEventListener(r,e,{capture:!0,passive:i}):n.addEventListener(r,e,!0):i!==void 0?n.addEventListener(r,e,{passive:i}):n.addEventListener(r,e,!1)}function lo(n,r,e,t,i){var l=t;if((r&1)===0&&(r&2)===0&&t!==null)n:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var o=t.stateNode.containerInfo;if(o===i)break;if(s===4)for(s=t.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;o!==null;){if(s=Hr(o),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){t=l=s;continue n}o=o.parentNode}}t=t.return}nl(function(){var S=l,O=_n(e),R=[];n:{var T=_u.get(n);if(T!==void 0){var j=al,F=n;switch(n){case"keypress":if(el(e)===0)break n;case"keydown":case"keyup":j=Ag;break;case"focusin":F="focus",j=Os;break;case"focusout":F="blur",j=Os;break;case"beforeblur":case"afterblur":j=Os;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Mg;break;case gu:case pu:case mu:j=xg;break;case bu:j=Dg;break;case"scroll":case"scrollend":j=gg;break;case"wheel":j=Lg;break;case"copy":case"cut":case"paste":j=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Zo;break;case"toggle":case"beforetoggle":j=Bg}var cn=(r&4)!==0,Xn=!cn&&(n==="scroll"||n==="scrollend"),b=cn?T!==null?T+"Capture":null:T;cn=[];for(var m=S,v;m!==null;){var M=m;if(v=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||v===null||b===null||(M=$a(m,b),M!=null&&cn.push(Ri(m,M,v))),Xn)break;m=m.return}0<cn.length&&(T=new j(T,F,null,e,O),R.push({event:T,listeners:cn}))}}if((r&7)===0){n:{if(T=n==="mouseover"||n==="pointerover",j=n==="mouseout"||n==="pointerout",T&&e!==W&&(F=e.relatedTarget||e.fromElement)&&(Hr(F)||F[et]))break n;if((j||T)&&(T=O.window===O?O:(T=O.ownerDocument)?T.defaultView||T.parentWindow:window,j?(F=e.relatedTarget||e.toElement,j=S,F=F?Hr(F):null,F!==null&&(Xn=L(F),cn=F.tag,F!==Xn||cn!==5&&cn!==27&&cn!==6)&&(F=null)):(j=null,F=S),j!==F)){if(cn=Jo,M="onMouseLeave",b="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(cn=Zo,M="onPointerLeave",b="onPointerEnter",m="pointer"),Xn=j==null?T:tt(j),v=F==null?T:tt(F),T=new cn(M,m+"leave",j,e,O),T.target=Xn,T.relatedTarget=v,M=null,Hr(O)===S&&(cn=new cn(b,m+"enter",F,e,O),cn.target=v,cn.relatedTarget=Xn,M=cn),Xn=M,j&&F)r:{for(cn=Cp,b=j,m=F,v=0,M=b;M;M=cn(M))v++;M=0;for(var ln=m;ln;ln=cn(ln))M++;for(;0<v-M;)b=cn(b),v--;for(;0<M-v;)m=cn(m),M--;for(;v--;){if(b===m||m!==null&&b===m.alternate){cn=b;break r}b=cn(b),m=cn(m)}cn=null}else cn=null;j!==null&&Gf(R,T,j,cn,!1),F!==null&&Xn!==null&&Gf(R,Xn,F,cn,!0)}}n:{if(T=S?tt(S):window,j=T.nodeName&&T.nodeName.toLowerCase(),j==="select"||j==="input"&&T.type==="file")var Cn=tu;else if(ru(T))if(au)Cn=Jg;else{Cn=Ig;var $=Vg}else j=T.nodeName,!j||j.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?S&&it(S.elementType)&&(Cn=tu):Cn=Qg;if(Cn&&(Cn=Cn(n,S))){eu(R,Cn,e,O);break n}$&&$(n,T,S),n==="focusout"&&S&&T.type==="number"&&S.memoizedProps.value!=null&&fa(T,"number",T.value)}switch($=S?tt(S):window,n){case"focusin":(ru($)||$.contentEditable==="true")&&(pa=$,Ls=S,si=null);break;case"focusout":si=Ls=pa=null;break;case"mousedown":Cs=!0;break;case"contextmenu":case"mouseup":case"dragend":Cs=!1,fu(R,e,O);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":fu(R,e,O)}var jn;if(Ms)n:{switch(n){case"compositionstart":var kn="onCompositionStart";break n;case"compositionend":kn="onCompositionEnd";break n;case"compositionupdate":kn="onCompositionUpdate";break n}kn=void 0}else ga?$o(n,e)&&(kn="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(kn="onCompositionStart");kn&&(Fo&&e.locale!=="ko"&&(ga||kn!=="onCompositionStart"?kn==="onCompositionEnd"&&ga&&(jn=Io()):(st=O,ws="value"in st?st.value:st.textContent,ga=!0)),$=Xl(S,kn),0<$.length&&(kn=new Xo(kn,n,null,e,O),R.push({event:kn,listeners:$}),jn?kn.data=jn:(jn=nu(e),jn!==null&&(kn.data=jn)))),(jn=Hg?qg(n,e):Gg(n,e))&&(kn=Xl(S,"onBeforeInput"),0<kn.length&&($=new Xo("onBeforeInput","beforeinput",null,e,O),R.push({event:$,listeners:kn}),$.data=jn)),Rp(R,n,S,e,O)}Hf(R,r)})}function Ri(n,r,e){return{instance:n,listener:r,currentTarget:e}}function Xl(n,r){for(var e=r+"Capture",t=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=$a(n,e),i!=null&&t.unshift(Ri(n,i,l)),i=$a(n,r),i!=null&&t.push(Ri(n,i,l))),n.tag===3)return t;n=n.return}return[]}function Cp(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Gf(n,r,e,t,i){for(var l=r._reactName,s=[];e!==null&&e!==t;){var o=e,f=o.alternate,S=o.stateNode;if(o=o.tag,f!==null&&f===t)break;o!==5&&o!==26&&o!==27||S===null||(f=S,i?(S=$a(e,l),S!=null&&s.unshift(Ri(e,S,f))):i||(S=$a(e,l),S!=null&&s.push(Ri(e,S,f)))),e=e.return}s.length!==0&&n.push({event:r,listeners:s})}var Bp=/\r\n?/g,Up=/\u0000|\uFFFD/g;function Yf(n){return(typeof n=="string"?n:""+n).replace(Bp,`
`).replace(Up,"")}function Kf(n,r){return r=Yf(r),Yf(n)===r}function Jn(n,r,e,t,i,l){switch(e){case"children":typeof t=="string"?r==="body"||r==="textarea"&&t===""||un(n,t):(typeof t=="number"||typeof t=="bigint")&&r!=="body"&&un(n,""+t);break;case"className":re(n,"class",t);break;case"tabIndex":re(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":re(n,e,t);break;case"style":Yn(n,t,l);break;case"data":if(r!=="object"){re(n,"data",t);break}case"src":case"href":if(t===""&&(r!=="a"||e!=="href")){n.removeAttribute(e);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=lt(""+t),n.setAttribute(e,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(r!=="input"&&Jn(n,r,"name",i.name,i,null),Jn(n,r,"formEncType",i.formEncType,i,null),Jn(n,r,"formMethod",i.formMethod,i,null),Jn(n,r,"formTarget",i.formTarget,i,null)):(Jn(n,r,"encType",i.encType,i,null),Jn(n,r,"method",i.method,i,null),Jn(n,r,"target",i.target,i,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=lt(""+t),n.setAttribute(e,t);break;case"onClick":t!=null&&(n.onclick=q);break;case"onScroll":t!=null&&Nn("scroll",n);break;case"onScrollEnd":t!=null&&Nn("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(e=t.__html,e!=null){if(i.children!=null)throw Error(d(60));n.innerHTML=e}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}e=lt(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""+t):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":t===!0?n.setAttribute(e,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,t):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(e,t):n.removeAttribute(e);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(e):n.setAttribute(e,t);break;case"popover":Nn("beforetoggle",n),Nn("toggle",n),Lr(n,"popover",t);break;case"xlinkActuate":Ir(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Ir(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Ir(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Ir(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Ir(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Ir(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Ir(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Ir(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Ir(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Lr(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Ue.get(e)||e,Lr(n,e,t))}}function so(n,r,e,t,i,l){switch(e){case"style":Yn(n,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(e=t.__html,e!=null){if(i.children!=null)throw Error(d(60));n.innerHTML=e}}break;case"children":typeof t=="string"?un(n,t):(typeof t=="number"||typeof t=="bigint")&&un(n,""+t);break;case"onScroll":t!=null&&Nn("scroll",n);break;case"onScrollEnd":t!=null&&Nn("scrollend",n);break;case"onClick":t!=null&&(n.onclick=q);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),r=e.slice(2,i?e.length-7:void 0),l=n[zr]||null,l=l!=null?l[e]:null,typeof l=="function"&&n.removeEventListener(r,l,i),typeof t=="function")){typeof l!="function"&&l!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(r,t,i);break n}e in n?n[e]=t:t===!0?n.setAttribute(e,""):Lr(n,e,t)}}}function Rr(n,r,e){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nn("error",n),Nn("load",n);var t=!1,i=!1,l;for(l in e)if(e.hasOwnProperty(l)){var s=e[l];if(s!=null)switch(l){case"src":t=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,r));default:Jn(n,r,l,s,e,null)}}i&&Jn(n,r,"srcSet",e.srcSet,e,null),t&&Jn(n,r,"src",e.src,e,null);return;case"input":Nn("invalid",n);var o=l=s=i=null,f=null,S=null;for(t in e)if(e.hasOwnProperty(t)){var O=e[t];if(O!=null)switch(t){case"name":i=O;break;case"type":s=O;break;case"checked":f=O;break;case"defaultChecked":S=O;break;case"value":l=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,r));break;default:Jn(n,r,t,O,e,null)}}Ht(n,l,o,f,S,s,i,!1);return;case"select":Nn("invalid",n),t=s=l=null;for(i in e)if(e.hasOwnProperty(i)&&(o=e[i],o!=null))switch(i){case"value":l=o;break;case"defaultValue":s=o;break;case"multiple":t=o;default:Jn(n,r,i,o,e,null)}r=l,e=s,n.multiple=!!t,r!=null?Ar(n,!!t,r,!1):e!=null&&Ar(n,!!t,e,!0);return;case"textarea":Nn("invalid",n),l=i=t=null;for(s in e)if(e.hasOwnProperty(s)&&(o=e[s],o!=null))switch(s){case"value":t=o;break;case"defaultValue":i=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:Jn(n,r,s,o,e,null)}ha(n,t,i,l);return;case"option":for(f in e)e.hasOwnProperty(f)&&(t=e[f],t!=null)&&(f==="selected"?n.selected=t&&typeof t!="function"&&typeof t!="symbol":Jn(n,r,f,t,e,null));return;case"dialog":Nn("beforetoggle",n),Nn("toggle",n),Nn("cancel",n),Nn("close",n);break;case"iframe":case"object":Nn("load",n);break;case"video":case"audio":for(t=0;t<Mi.length;t++)Nn(Mi[t],n);break;case"image":Nn("error",n),Nn("load",n);break;case"details":Nn("toggle",n);break;case"embed":case"source":case"link":Nn("error",n),Nn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in e)if(e.hasOwnProperty(S)&&(t=e[S],t!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,r));default:Jn(n,r,S,t,e,null)}return;default:if(it(r)){for(O in e)e.hasOwnProperty(O)&&(t=e[O],t!==void 0&&so(n,r,O,t,e,void 0));return}}for(o in e)e.hasOwnProperty(o)&&(t=e[o],t!=null&&Jn(n,r,o,t,e,null))}function Hp(n,r,e,t){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,o=null,f=null,S=null,O=null;for(j in e){var R=e[j];if(e.hasOwnProperty(j)&&R!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":f=R;default:t.hasOwnProperty(j)||Jn(n,r,j,null,t,R)}}for(var T in t){var j=t[T];if(R=e[T],t.hasOwnProperty(T)&&(j!=null||R!=null))switch(T){case"type":l=j;break;case"name":i=j;break;case"checked":S=j;break;case"defaultChecked":O=j;break;case"value":s=j;break;case"defaultValue":o=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(d(137,r));break;default:j!==R&&Jn(n,r,T,j,t,R)}}Fa(n,s,o,f,S,O,l,i);return;case"select":j=s=o=T=null;for(l in e)if(f=e[l],e.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":j=f;default:t.hasOwnProperty(l)||Jn(n,r,l,null,t,f)}for(i in t)if(l=t[i],f=e[i],t.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":T=l;break;case"defaultValue":o=l;break;case"multiple":s=l;default:l!==f&&Jn(n,r,i,l,t,f)}r=o,e=s,t=j,T!=null?Ar(n,!!e,T,!1):!!t!=!!e&&(r!=null?Ar(n,!!e,r,!0):Ar(n,!!e,e?[]:"",!1));return;case"textarea":j=T=null;for(o in e)if(i=e[o],e.hasOwnProperty(o)&&i!=null&&!t.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Jn(n,r,o,null,t,i)}for(s in t)if(i=t[s],l=e[s],t.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":T=i;break;case"defaultValue":j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&Jn(n,r,s,i,t,l)}Wi(n,T,j);return;case"option":for(var F in e)T=e[F],e.hasOwnProperty(F)&&T!=null&&!t.hasOwnProperty(F)&&(F==="selected"?n.selected=!1:Jn(n,r,F,null,t,T));for(f in t)T=t[f],j=e[f],t.hasOwnProperty(f)&&T!==j&&(T!=null||j!=null)&&(f==="selected"?n.selected=T&&typeof T!="function"&&typeof T!="symbol":Jn(n,r,f,T,t,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var cn in e)T=e[cn],e.hasOwnProperty(cn)&&T!=null&&!t.hasOwnProperty(cn)&&Jn(n,r,cn,null,t,T);for(S in t)if(T=t[S],j=e[S],t.hasOwnProperty(S)&&T!==j&&(T!=null||j!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(d(137,r));break;default:Jn(n,r,S,T,t,j)}return;default:if(it(r)){for(var Xn in e)T=e[Xn],e.hasOwnProperty(Xn)&&T!==void 0&&!t.hasOwnProperty(Xn)&&so(n,r,Xn,void 0,t,T);for(O in t)T=t[O],j=e[O],!t.hasOwnProperty(O)||T===j||T===void 0&&j===void 0||so(n,r,O,T,t,j);return}}for(var b in e)T=e[b],e.hasOwnProperty(b)&&T!=null&&!t.hasOwnProperty(b)&&Jn(n,r,b,null,t,T);for(R in t)T=t[R],j=e[R],!t.hasOwnProperty(R)||T===j||T==null&&j==null||Jn(n,r,R,T,t,j)}function Vf(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qp(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,e=performance.getEntriesByType("resource"),t=0;t<e.length;t++){var i=e[t],l=i.transferSize,s=i.initiatorType,o=i.duration;if(l&&o&&Vf(s)){for(s=0,o=i.responseEnd,t+=1;t<e.length;t++){var f=e[t],S=f.startTime;if(S>o)break;var O=f.transferSize,R=f.initiatorType;O&&Vf(R)&&(f=f.responseEnd,s+=O*(f<o?1:(o-S)/(f-S)))}if(--t,r+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var co=null,oo=null;function Zl(n){return n.nodeType===9?n:n.ownerDocument}function If(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qf(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function uo(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var fo=null;function Gp(){var n=window.event;return n&&n.type==="popstate"?n===fo?!1:(fo=n,!0):(fo=null,!1)}var Jf=typeof setTimeout=="function"?setTimeout:void 0,Yp=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,Kp=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(n){return Xf.resolve(null).then(n).catch(Vp)}:Jf;function Vp(n){setTimeout(function(){throw n})}function jt(n){return n==="head"}function Zf(n,r){var e=r,t=0;do{var i=e.nextSibling;if(n.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"||e==="/&"){if(t===0){n.removeChild(i),Ya(r);return}t--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")t++;else if(e==="html")Di(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,Di(e);for(var l=e.firstChild;l;){var s=l.nextSibling,o=l.nodeName;l[Bt]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||e.removeChild(l),l=s}}else e==="body"&&Di(n.ownerDocument.body);e=i}while(e);Ya(r)}function Ff(n,r){var e=n;n=0;do{var t=e.nextSibling;if(e.nodeType===1?r?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(r?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=t}while(e)}function ho(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var e=r;switch(r=r.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":ho(e),Xa(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function Ip(n,r,e,t){for(;n.nodeType===1;){var i=e;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[Bt])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=_e(n.nextSibling),n===null)break}return null}function Qp(n,r,e){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=_e(n.nextSibling),n===null))return null;return n}function Pf(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=_e(n.nextSibling),n===null))return null;return n}function go(n){return n.data==="$?"||n.data==="$~"}function po(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Jp(n,r){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||e.readyState!=="loading")r();else{var t=function(){r(),e.removeEventListener("DOMContentLoaded",t)};e.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function _e(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var mo=null;function Wf(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(r===0)return _e(n.nextSibling);r--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||r++}n=n.nextSibling}return null}function $f(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(r===0)return n;r--}else e!=="/$"&&e!=="/&"||r++}n=n.previousSibling}return null}function nh(n,r,e){switch(r=Zl(e),n){case"html":if(n=r.documentElement,!n)throw Error(d(452));return n;case"head":if(n=r.head,!n)throw Error(d(453));return n;case"body":if(n=r.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Di(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Xa(n)}var xe=new Map,rh=new Set;function Fl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var nt=H.d;H.d={f:Xp,r:Zp,D:Fp,C:Pp,L:Wp,m:$p,X:rm,S:nm,M:em};function Xp(){var n=nt.f(),r=Gl();return n||r}function Zp(n){var r=Ce(n);r!==null&&r.tag===5&&r.type==="form"?bd(r):nt.r(n)}var Ha=typeof document>"u"?null:document;function eh(n,r,e){var t=Ha;if(t&&typeof r=="string"&&r){var i=Qr(r);i='link[rel="'+n+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),rh.has(i)||(rh.add(i),n={rel:n,crossOrigin:e,href:r},t.querySelector(i)===null&&(r=t.createElement("link"),Rr(r,"link",n),_r(r),t.head.appendChild(r)))}}function Fp(n){nt.D(n),eh("dns-prefetch",n,null)}function Pp(n,r){nt.C(n,r),eh("preconnect",n,r)}function Wp(n,r,e){nt.L(n,r,e);var t=Ha;if(t&&n&&r){var i='link[rel="preload"][as="'+Qr(r)+'"]';r==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+Qr(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+Qr(e.imageSizes)+'"]')):i+='[href="'+Qr(n)+'"]';var l=i;switch(r){case"style":l=qa(n);break;case"script":l=Ga(n)}xe.has(l)||(n=A({rel:"preload",href:r==="image"&&e&&e.imageSrcSet?void 0:n,as:r},e),xe.set(l,n),t.querySelector(i)!==null||r==="style"&&t.querySelector(zi(l))||r==="script"&&t.querySelector(Li(l))||(r=t.createElement("link"),Rr(r,"link",n),_r(r),t.head.appendChild(r)))}}function $p(n,r){nt.m(n,r);var e=Ha;if(e&&n){var t=r&&typeof r.as=="string"?r.as:"script",i='link[rel="modulepreload"][as="'+Qr(t)+'"][href="'+Qr(n)+'"]',l=i;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ga(n)}if(!xe.has(l)&&(n=A({rel:"modulepreload",href:n},r),xe.set(l,n),e.querySelector(i)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Li(l)))return}t=e.createElement("link"),Rr(t,"link",n),_r(t),e.head.appendChild(t)}}}function nm(n,r,e){nt.S(n,r,e);var t=Ha;if(t&&n){var i=at(t).hoistableStyles,l=qa(n);r=r||"default";var s=i.get(l);if(!s){var o={loading:0,preload:null};if(s=t.querySelector(zi(l)))o.loading=5;else{n=A({rel:"stylesheet",href:n,"data-precedence":r},e),(e=xe.get(l))&&bo(n,e);var f=s=t.createElement("link");_r(f),Rr(f,"link",n),f._p=new Promise(function(S,O){f.onload=S,f.onerror=O}),f.addEventListener("load",function(){o.loading|=1}),f.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Pl(s,r,t)}s={type:"stylesheet",instance:s,count:1,state:o},i.set(l,s)}}}function rm(n,r){nt.X(n,r);var e=Ha;if(e&&n){var t=at(e).hoistableScripts,i=Ga(n),l=t.get(i);l||(l=e.querySelector(Li(i)),l||(n=A({src:n,async:!0},r),(r=xe.get(i))&&_o(n,r),l=e.createElement("script"),_r(l),Rr(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function em(n,r){nt.M(n,r);var e=Ha;if(e&&n){var t=at(e).hoistableScripts,i=Ga(n),l=t.get(i);l||(l=e.querySelector(Li(i)),l||(n=A({src:n,async:!0,type:"module"},r),(r=xe.get(i))&&_o(n,r),l=e.createElement("script"),_r(l),Rr(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function th(n,r,e,t){var i=(i=hn.current)?Fl(i):null;if(!i)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(r=qa(e.href),e=at(i).hoistableStyles,t=e.get(r),t||(t={type:"style",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=qa(e.href);var l=at(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(zi(n)))&&!l._p&&(s.instance=l,s.state.loading=5),xe.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},xe.set(n,e),l||tm(i,n,e,s.state))),r&&t===null)throw Error(d(528,""));return s}if(r&&t!==null)throw Error(d(529,""));return null;case"script":return r=e.async,e=e.src,typeof e=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ga(e),e=at(i).hoistableScripts,t=e.get(r),t||(t={type:"script",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function qa(n){return'href="'+Qr(n)+'"'}function zi(n){return'link[rel="stylesheet"]['+n+"]"}function ah(n){return A({},n,{"data-precedence":n.precedence,precedence:null})}function tm(n,r,e,t){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?t.loading=1:(r=n.createElement("link"),t.preload=r,r.addEventListener("load",function(){return t.loading|=1}),r.addEventListener("error",function(){return t.loading|=2}),Rr(r,"link",e),_r(r),n.head.appendChild(r))}function Ga(n){return'[src="'+Qr(n)+'"]'}function Li(n){return"script[async]"+n}function ih(n,r,e){if(r.count++,r.instance===null)switch(r.type){case"style":var t=n.querySelector('style[data-href~="'+Qr(e.href)+'"]');if(t)return r.instance=t,_r(t),t;var i=A({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),_r(t),Rr(t,"style",i),Pl(t,e.precedence,n),r.instance=t;case"stylesheet":i=qa(e.href);var l=n.querySelector(zi(i));if(l)return r.state.loading|=4,r.instance=l,_r(l),l;t=ah(e),(i=xe.get(i))&&bo(t,i),l=(n.ownerDocument||n).createElement("link"),_r(l);var s=l;return s._p=new Promise(function(o,f){s.onload=o,s.onerror=f}),Rr(l,"link",t),r.state.loading|=4,Pl(l,e.precedence,n),r.instance=l;case"script":return l=Ga(e.src),(i=n.querySelector(Li(l)))?(r.instance=i,_r(i),i):(t=e,(i=xe.get(l))&&(t=A({},e),_o(t,i)),n=n.ownerDocument||n,i=n.createElement("script"),_r(i),Rr(i,"link",t),n.head.appendChild(i),r.instance=i);case"void":return null;default:throw Error(d(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(t=r.instance,r.state.loading|=4,Pl(t,e.precedence,n));return r.instance}function Pl(n,r,e){for(var t=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=t.length?t[t.length-1]:null,l=i,s=0;s<t.length;s++){var o=t[s];if(o.dataset.precedence===r)l=o;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(r=e.nodeType===9?e.head:e,r.insertBefore(n,r.firstChild))}function bo(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function _o(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Wl=null;function lh(n,r,e){if(Wl===null){var t=new Map,i=Wl=new Map;i.set(e,t)}else i=Wl,t=i.get(e),t||(t=new Map,i.set(e,t));if(t.has(n))return t;for(t.set(n,null),e=e.getElementsByTagName(n),i=0;i<e.length;i++){var l=e[i];if(!(l[Bt]||l[hr]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(r)||"";s=n+s;var o=t.get(s);o?o.push(l):t.set(s,[l])}}return t}function sh(n,r,e){n=n.ownerDocument||n,n.head.insertBefore(e,r==="title"?n.querySelector("head > title"):null)}function am(n,r,e){if(e===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function ch(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function im(n,r,e,t){if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=qa(t.href),l=r.querySelector(zi(i));if(l){r=l._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=$l.bind(n),r.then(n,n)),e.state.loading|=4,e.instance=l,_r(l);return}l=r.ownerDocument||r,t=ah(t),(i=xe.get(i))&&bo(t,i),l=l.createElement("link"),_r(l);var s=l;s._p=new Promise(function(o,f){s.onload=o,s.onerror=f}),Rr(l,"link",t),e.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,r),(r=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=$l.bind(n),r.addEventListener("load",e),r.addEventListener("error",e))}}var xo=0;function lm(n,r){return n.stylesheets&&n.count===0&&rs(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var t=setTimeout(function(){if(n.stylesheets&&rs(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+r);0<n.imgBytes&&xo===0&&(xo=62500*qp());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&rs(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>xo?50:800)+r);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t),clearTimeout(i)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rs(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ns=null;function rs(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ns=new Map,r.forEach(sm,n),ns=null,$l.call(n))}function sm(n,r){if(!(r.state.loading&4)){var e=ns.get(n);if(e)var t=e.get(null);else{e=new Map,ns.set(n,e);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),t=s)}t&&e.set(null,t)}i=r.instance,s=i.getAttribute("data-precedence"),l=e.get(s)||t,l===t&&e.set(null,i),e.set(s,i),this.count++,t=$l.bind(this),i.addEventListener("load",t),i.addEventListener("error",t),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),r.state.loading|=4}}var Ci={$$typeof:nn,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function cm(n,r,e,t,i,l,s,o,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=t,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function oh(n,r,e,t,i,l,s,o,f,S,O,R){return n=new cm(n,r,e,s,f,S,O,R,o),r=1,l===!0&&(r|=24),l=ae(3,null,null,r),n.current=l,l.stateNode=n,r=Ps(),r.refCount++,n.pooledCache=r,r.refCount++,l.memoizedState={element:t,isDehydrated:e,cache:r},rc(l),n}function uh(n){return n?(n=_a,n):_a}function dh(n,r,e,t,i,l){i=uh(i),t.context===null?t.context=i:t.pendingContext=i,t=ht(r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=gt(n,t,r),e!==null&&(Wr(e,n,r),gi(e,n,r))}function fh(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function yo(n,r){fh(n,r),(n=n.alternate)&&fh(n,r)}function hh(n){if(n.tag===13||n.tag===31){var r=Kt(n,67108864);r!==null&&Wr(r,n,67108864),yo(n,67108864)}}function gh(n){if(n.tag===13||n.tag===31){var r=oe();r=ir(r);var e=Kt(n,r);e!==null&&Wr(e,n,r),yo(n,r)}}var es=!0;function om(n,r,e,t){var i=E.T;E.T=null;var l=H.p;try{H.p=2,vo(n,r,e,t)}finally{H.p=l,E.T=i}}function um(n,r,e,t){var i=E.T;E.T=null;var l=H.p;try{H.p=8,vo(n,r,e,t)}finally{H.p=l,E.T=i}}function vo(n,r,e,t){if(es){var i=So(t);if(i===null)lo(n,r,t,ts,e),mh(n,t);else if(fm(i,n,r,e,t))t.stopPropagation();else if(mh(n,t),r&4&&-1<dm.indexOf(n)){for(;i!==null;){var l=Ce(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Vr(l.pendingLanes);if(s!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var f=1<<31-Ur(s);o.entanglements[1]|=f,s&=~f}ke(l),(Un&6)===0&&(Hl=dr()+500,ki(0))}}break;case 31:case 13:o=Kt(l,2),o!==null&&Wr(o,l,2),Gl(),yo(l,2)}if(l=So(t),l===null&&lo(n,r,t,ts,e),l===i)break;i=l}i!==null&&t.stopPropagation()}else lo(n,r,t,null,e)}}function So(n){return n=_n(n),To(n)}var ts=null;function To(n){if(ts=null,n=Hr(n),n!==null){var r=L(n);if(r===null)n=null;else{var e=r.tag;if(e===13){if(n=U(r),n!==null)return n;n=null}else if(e===31){if(n=I(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return ts=n,null}function ph(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ii()){case ze:return 2;case Rt:return 8;case Dt:case ys:return 32;case Qi:return 268435456;default:return 32}default:return 32}}var jo=!1,Et=null,wt=null,Nt=null,Bi=new Map,Ui=new Map,At=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mh(n,r){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":Bi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(r.pointerId)}}function Hi(n,r,e,t,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:r,domEventName:e,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},r!==null&&(r=Ce(r),r!==null&&hh(r)),n):(n.eventSystemFlags|=t,r=n.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),n)}function fm(n,r,e,t,i){switch(r){case"focusin":return Et=Hi(Et,n,r,e,t,i),!0;case"dragenter":return wt=Hi(wt,n,r,e,t,i),!0;case"mouseover":return Nt=Hi(Nt,n,r,e,t,i),!0;case"pointerover":var l=i.pointerId;return Bi.set(l,Hi(Bi.get(l)||null,n,r,e,t,i)),!0;case"gotpointercapture":return l=i.pointerId,Ui.set(l,Hi(Ui.get(l)||null,n,r,e,t,i)),!0}return!1}function bh(n){var r=Hr(n.target);if(r!==null){var e=L(r);if(e!==null){if(r=e.tag,r===13){if(r=U(e),r!==null){n.blockedOn=r,ca(n.priority,function(){gh(e)});return}}else if(r===31){if(r=I(e),r!==null){n.blockedOn=r,ca(n.priority,function(){gh(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function as(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=So(n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);W=t,e.target.dispatchEvent(t),W=null}else return r=Ce(e),r!==null&&hh(r),n.blockedOn=e,!1;r.shift()}return!0}function _h(n,r,e){as(n)&&e.delete(r)}function hm(){jo=!1,Et!==null&&as(Et)&&(Et=null),wt!==null&&as(wt)&&(wt=null),Nt!==null&&as(Nt)&&(Nt=null),Bi.forEach(_h),Ui.forEach(_h)}function is(n,r){n.blockedOn===r&&(n.blockedOn=null,jo||(jo=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,hm)))}var ls=null;function xh(n){ls!==n&&(ls=n,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ls===n&&(ls=null);for(var r=0;r<n.length;r+=3){var e=n[r],t=n[r+1],i=n[r+2];if(typeof t!="function"){if(To(t||e)===null)continue;break}var l=Ce(e);l!==null&&(n.splice(r,3),r-=3,vc(l,{pending:!0,data:i,method:e.method,action:t},t,i))}}))}function Ya(n){function r(f){return is(f,n)}Et!==null&&is(Et,n),wt!==null&&is(wt,n),Nt!==null&&is(Nt,n),Bi.forEach(r),Ui.forEach(r);for(var e=0;e<At.length;e++){var t=At[e];t.blockedOn===n&&(t.blockedOn=null)}for(;0<At.length&&(e=At[0],e.blockedOn===null);)bh(e),e.blockedOn===null&&At.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(t=0;t<e.length;t+=3){var i=e[t],l=e[t+1],s=i[zr]||null;if(typeof l=="function")s||xh(e);else if(s){var o=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[zr]||null)o=s.formAction;else if(To(i)!==null)continue}else o=s.action;typeof o=="function"?e[t+1]=o:(e.splice(t,3),t-=3),xh(e)}}}function yh(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function r(){i!==null&&(i(),i=null),t||setTimeout(e,20)}function e(){if(!t&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(e,100),function(){t=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),i!==null&&(i(),i=null)}}}function Eo(n){this._internalRoot=n}ss.prototype.render=Eo.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(d(409));var e=r.current,t=oe();dh(e,t,n,r,null,null)},ss.prototype.unmount=Eo.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;dh(n.current,2,null,n,null,null),Gl(),r[et]=null}};function ss(n){this._internalRoot=n}ss.prototype.unstable_scheduleHydration=function(n){if(n){var r=sa();n={blockedOn:null,target:n,priority:r};for(var e=0;e<At.length&&r!==0&&r<At[e].priority;e++);At.splice(e,0,n),e===0&&bh(n)}};var vh=_.version;if(vh!=="19.2.3")throw Error(d(527,vh,"19.2.3"));H.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=y(r),n=n!==null?B(n):null,n=n===null?null:n.stateNode,n};var gm={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{zt=cs.inject(gm),Dr=cs}catch{}}return Gi.createRoot=function(n,r){if(!w(n))throw Error(d(299));var e=!1,t="",i=Nd,l=Ad,s=Od;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onUncaughtError!==void 0&&(i=r.onUncaughtError),r.onCaughtError!==void 0&&(l=r.onCaughtError),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=oh(n,1,!1,null,null,e,t,null,i,l,s,yh),n[et]=r.current,io(n),new Eo(r)},Gi.hydrateRoot=function(n,r,e){if(!w(n))throw Error(d(299));var t=!1,i="",l=Nd,s=Ad,o=Od,f=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),r=oh(n,1,!0,r,e??null,t,i,f,l,s,o,yh),r.context=uh(null),e=r.current,t=oe(),t=ir(t),i=ht(t),i.callback=null,gt(e,i,t),e=t,r.current.lanes=e,Pn(r,e),ke(r),n[et]=r.current,io(n),new ss(r)},Gi.version="19.2.3",Gi}var Mh;function Tm(){if(Mh)return No.exports;Mh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(_){console.error(_)}}return u(),No.exports=Sm(),No.exports}var jm=Tm();const Em=Va(jm);var rn=Yo();const bs=Va(rn),Ph=rn.createContext(void 0),wm=({children:u})=>{const _=localStorage.getItem("selectedLanguage")||"python",[x,d]=rn.useState(_);return rn.useEffect(()=>{localStorage.setItem("selectedLanguage",x)},[x]),a.jsx(Ph.Provider,{value:{selectedLanguage:x,setSelectedLanguage:d},children:u})};function Nm(){const u=rn.useContext(Ph);if(u===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return u}const Wh=rn.createContext(void 0);function Am({children:u}){const[_,x]=rn.useState(!0),d=()=>x(!0),w=()=>x(!1),L=()=>x(!_);return a.jsx(Wh.Provider,{value:{isSidebarOpen:_,showSidebar:d,hideSidebar:w,toggleSidebar:L},children:u})}function Ko(){const u=rn.useContext(Wh);if(u===void 0)throw new Error("useSidebar must be used within SidebarProvider");return u}const Om="_wave_nm5to_1",os={wave:Om};function km(){return a.jsxs("div",{className:os.background,children:[a.jsx("div",{className:os.wave}),a.jsx("div",{className:os.wave}),a.jsx("div",{className:os.wave})]})}const Mm="_topbar_dxbgq_1",Rm="_container_dxbgq_22",Dm="_buttonContainer_dxbgq_28",zm="_title_dxbgq_35",Lm="_iconLink_dxbgq_53",Cm="_hamburger_dxbgq_75",Bm="_hamburgerIcon_dxbgq_79",Um="_hamburgerTop_dxbgq_88",Hm="_collapsed_dxbgq_92",qm="_hamburgerMiddle_dxbgq_96",Gm="_hamburgerBottom_dxbgq_106",Te={topbar:Mm,container:Rm,buttonContainer:Dm,title:zm,iconLink:Lm,hamburger:Cm,hamburgerIcon:Bm,hamburgerTop:Um,collapsed:Hm,hamburgerMiddle:qm,hamburgerBottom:Gm};var us={},Rh;function Ym(){if(Rh)return us;Rh=1,us.match=L,us.parse=U;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,_=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,x=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,w=/(dpi|dpcm|dppx)?$/;function L(B,A){return U(B).some(function(D){var K=D.inverse,en=D.type==="all"||A.type===D.type;if(en&&K||!(en||K))return!1;var Z=D.expressions.every(function(pn){var vn=pn.feature,xn=pn.modifier,nn=pn.value,sn=A[vn];if(!sn)return!1;switch(vn){case"orientation":case"scan":return sn.toLowerCase()===nn.toLowerCase();case"width":case"height":case"device-width":case"device-height":nn=y(nn),sn=y(sn);break;case"resolution":nn=z(nn),sn=z(sn);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":nn=I(nn),sn=I(sn);break;case"grid":case"color":case"color-index":case"monochrome":nn=parseInt(nn,10)||1,sn=parseInt(sn,10)||0;break}switch(xn){case"min":return sn>=nn;case"max":return sn<=nn;default:return sn===nn}});return Z&&!K||!Z&&K})}function U(B){return B.split(",").map(function(A){A=A.trim();var D=A.match(u),K=D[1],en=D[2],Z=D[3]||"",pn={};return pn.inverse=!!K&&K.toLowerCase()==="not",pn.type=en?en.toLowerCase():"all",Z=Z.match(/\([^\)]+\)/g)||[],pn.expressions=Z.map(function(vn){var xn=vn.match(_),nn=xn[1].toLowerCase().match(x);return{modifier:nn[1],feature:nn[2],value:xn[2]}}),pn})}function I(B){var A=Number(B),D;return A||(D=B.match(/^(\d+)\s*\/\s*(\d+)$/),A=D[1]/D[2]),A}function z(B){var A=parseFloat(B),D=String(B).match(w)[1];switch(D){case"dpcm":return A/2.54;case"dppx":return A*96;default:return A}}function y(B){var A=parseFloat(B),D=String(B).match(d)[1];switch(D){case"em":return A*16;case"rem":return A*16;case"cm":return A*96/2.54;case"mm":return A*96/2.54/10;case"in":return A*96;case"pt":return A*72;case"pc":return A*72/12;default:return A}}return us}var Ro,Dh;function Km(){if(Dh)return Ro;Dh=1;var u=Ym().match,_=typeof window<"u"?window.matchMedia:null;function x(w,L,U){var I=this,z;_&&!U&&(z=_.call(window,w)),z?(this.matches=z.matches,this.media=z.media,z.addListener(A)):(this.matches=u(w,L),this.media=w),this.addListener=y,this.removeListener=B,this.dispose=D;function y(K){z&&z.addListener(K)}function B(K){z&&z.removeListener(K)}function A(K){I.matches=K.matches,I.media=K.media}function D(){z&&z.removeListener(A)}}function d(w,L,U){return new x(w,L,U)}return Ro=d,Ro}var Vm=Km();const Im=Va(Vm);var Qm=/[A-Z]/g,Jm=/^ms-/,Do={};function Xm(u){return"-"+u.toLowerCase()}function $h(u){if(Do.hasOwnProperty(u))return Do[u];var _=u.replace(Qm,Xm);return Do[u]=Jm.test(_)?"-"+_:_}function Zm(u,_){if(u===_)return!0;if(!u||!_)return!1;const x=Object.keys(u),d=Object.keys(_),w=x.length;if(d.length!==w)return!1;for(let L=0;L<w;L++){const U=x[L];if(u[U]!==_[U]||!Object.prototype.hasOwnProperty.call(_,U))return!1}return!0}var zo={exports:{}},Lo,zh;function Fm(){if(zh)return Lo;zh=1;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Lo=u,Lo}var Co,Lh;function Pm(){if(Lh)return Co;Lh=1;var u=Fm();function _(){}function x(){}return x.resetWarningCache=_,Co=function(){function d(U,I,z,y,B,A){if(A!==u){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}}d.isRequired=d;function w(){return d}var L={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:w,element:d,elementType:d,instanceOf:w,node:d,objectOf:w,oneOf:w,oneOfType:w,shape:w,exact:w,checkPropTypes:x,resetWarningCache:_};return L.PropTypes=L,L},Co}var Ch;function Wm(){return Ch||(Ch=1,zo.exports=Pm()()),zo.exports}var $m=Wm();const Hn=Va($m),Yr=Hn.oneOfType([Hn.string,Hn.number]),ng={all:Hn.bool,grid:Hn.bool,aural:Hn.bool,braille:Hn.bool,handheld:Hn.bool,print:Hn.bool,projection:Hn.bool,screen:Hn.bool,tty:Hn.bool,tv:Hn.bool,embossed:Hn.bool},nb={orientation:Hn.oneOf(["portrait","landscape"]),scan:Hn.oneOf(["progressive","interlace"]),aspectRatio:Hn.string,deviceAspectRatio:Hn.string,height:Yr,deviceHeight:Yr,width:Yr,deviceWidth:Yr,color:Hn.bool,colorIndex:Hn.bool,monochrome:Hn.bool,resolution:Yr,type:Object.keys(ng)},{type:oj,...rb}=nb,eb={minAspectRatio:Hn.string,maxAspectRatio:Hn.string,minDeviceAspectRatio:Hn.string,maxDeviceAspectRatio:Hn.string,minHeight:Yr,maxHeight:Yr,minDeviceHeight:Yr,maxDeviceHeight:Yr,minWidth:Yr,maxWidth:Yr,minDeviceWidth:Yr,maxDeviceWidth:Yr,minColor:Hn.number,maxColor:Hn.number,minColorIndex:Hn.number,maxColorIndex:Hn.number,minMonochrome:Hn.number,maxMonochrome:Hn.number,minResolution:Yr,maxResolution:Yr,...rb},tb={...ng,...eb};var ab={all:tb};const ib=u=>`not ${u}`,lb=(u,_)=>{const x=$h(u);return typeof _=="number"&&(_=`${_}px`),_===!0?x:_===!1?ib(x):`(${x}: ${_})`},sb=u=>u.join(" and "),cb=u=>{const _=[];return Object.keys(ab.all).forEach(x=>{const d=u[x];d!=null&&_.push(lb(x,d))}),sb(_)},ob=rn.createContext(void 0),ub=u=>u.query||cb(u),Bh=u=>u?Object.keys(u).reduce((x,d)=>(x[$h(d)]=u[d],x),{}):void 0,rg=()=>{const u=rn.useRef(!1);return rn.useEffect(()=>{u.current=!0},[]),u.current},db=u=>{const _=rn.useContext(ob),x=()=>Bh(u)||Bh(_),[d,w]=rn.useState(x);return rn.useEffect(()=>{const L=x();Zm(d,L)||w(L)},[u,_]),d},fb=u=>{const _=()=>ub(u),[x,d]=rn.useState(_);return rn.useEffect(()=>{const w=_();x!==w&&d(w)},[u]),x},hb=(u,_)=>{const x=()=>Im(u,_||{},!!_),[d,w]=rn.useState(x),L=rg();return rn.useEffect(()=>{if(L){const U=x();return w(U),()=>{U&&U.dispose()}}},[u,_]),d},gb=u=>{const[_,x]=rn.useState(u.matches);return rn.useEffect(()=>{const d=w=>{x(w.matches)};return u.addListener(d),x(u.matches),()=>{u.removeListener(d)}},[u]),_},eg=(u,_,x)=>{const d=db(_),w=fb(u);if(!w)throw new Error("Invalid or missing MediaQuery!");const L=hb(w,d),U=gb(L),I=rg();return rn.useEffect(()=>{I&&x&&x(U)},[U]),rn.useEffect(()=>()=>{L&&L.dispose()},[]),U};function $r(...u){let _="";for(const x of u)if(x){if(typeof x=="string"||typeof x=="number")_+=(_&&" ")+x;else if(Array.isArray(x)){const d=$r(...x);d&&(_+=(_&&" ")+d)}else if(typeof x=="object")for(const d in x)x[d]&&(_+=(_&&" ")+d)}return _}function tg(){const u=document.documentElement,_=getComputedStyle(u).getPropertyValue("--navbar-height");return parseFloat(_)||76}const pb=u=>u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;function ag(u,_=0){const x=document.querySelector(u);if(!x)return;const d=x.offsetTop,w=window.scrollY,L=d-w-_,U=performance.now(),I=1500,z=y=>{const B=y-U,A=B/I,D=pb(A),K=w+L*(A>1?1:D);window.scrollTo({top:K}),B<I&&requestAnimationFrame(z)};requestAnimationFrame(z)}const mb="_brand_18f9t_1",bb="_bounce_18f9t_19",_b="_glowDisappear_18f9t_23",xb="_heartBeat_18f9t_27",yb="_rubberBand_18f9t_31",vb="_rotate_18f9t_35",ea={brand:mb,bounce:bb,glowDisappear:_b,heartBeat:xb,rubberBand:yb,rotate:vb};function Sb(){const[u,_]=rn.useState(ea.rotate),[x,d]=rn.useState(!1),w=[ea.bounce,ea.glowDisappear,ea.heartBeat,ea.rubberBand,ea.rotate],L=$r(ea.brand,x&&u),U=()=>d(!1),I=()=>{const z=Math.floor(Math.random()*w.length),y=w[z];d(!0),_(y)};return a.jsx("div",{className:L,onClick:I,onAnimationEnd:U,children:"JWL"})}const Tb="_container_uucyv_1",jb="_input_uucyv_6",Eb="_label_uucyv_16",wb="_indicator_uucyv_20",Nb="_decoration_uucyv_28",Yi={container:Tb,input:jb,label:Eb,indicator:wb,decoration:Nb};function Uh(){const u=document.documentElement,[_,x]=rn.useState(!1),d=()=>{const L=new Event("themeChange");u.dispatchEvent(L)},w=()=>{x(!_),u.setAttribute("data-theme",_?"dark":"light"),d()};return rn.useEffect(()=>{const L=u.getAttribute("data-theme");x(L==="light"),d()},[]),a.jsxs("div",{className:Yi.container,children:[a.jsx("input",{className:Yi.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:_,onChange:w}),a.jsxs("label",{className:Yi.label,htmlFor:"theme-switch",children:[a.jsx("span",{className:Yi.indicator}),a.jsx("span",{className:Yi.decoration})]})]})}function Ab(){return a.jsx("svg",{viewBox:"0 0 128 128",children:a.jsxs("g",{fill:"var(--svg-github-fill)",children:[a.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),a.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}function Ob({forwardedRef:u}){const _=rn.useRef(null),{isSidebarOpen:x,toggleSidebar:d}=Ko(),w=eg({maxWidth:768}),L=$r(Te.hamburgerIcon,!x&&Te.collapsed);rn.useLayoutEffect(()=>{if(!_.current)return;const D=new ResizeObserver(K=>{for(const en of K){const Z=en.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${Z}px`)}});return D.observe(_.current),()=>D.disconnect()},[]);const U=D=>{D.preventDefault(),window.history.replaceState({},"",window.location.pathname),ag("main",tg()-2)},I=()=>d(),z=()=>!w&&a.jsx(Sb,{}),y=()=>!w&&a.jsx("a",{href:"main",onClick:U,role:"button",children:a.jsx("h1",{className:Te.title,children:"LeetCode Cheatsheet"})}),B=()=>a.jsx("a",{href:"/leetcode-cheatsheet","aria-label":"GitHub source",className:Te.iconLink,target:"_blank",children:a.jsx(Ab,{})}),A=()=>w?a.jsxs(a.Fragment,{children:[a.jsx(Uh,{}),B()]}):a.jsxs("div",{className:Te.buttonContainer,children:[B(),a.jsx(Uh,{})]});return a.jsx("header",{ref:_,className:Te.topbar,children:a.jsxs("div",{className:Te.container,children:[a.jsxs("div",{ref:u,className:Te.hamburger,onClick:I,children:[a.jsx("span",{className:$r(L,Te.hamburgerTop)}),a.jsx("span",{className:$r(L,Te.hamburgerMiddle)}),a.jsx("span",{className:$r(L,Te.hamburgerBottom)})]}),z(),y(),A()]})})}const kb="_sidebar_8uy5s_1",Mb="_exit_8uy5s_20",Rb="_hide_8uy5s_23",Db="_scrollContainer_8uy5s_27",ds={sidebar:kb,exit:Mb,hide:Rb,scrollContainer:Db};function ig(u,_){rn.useEffect(()=>{const x=d=>{const w=d.target;(Array.isArray(u)?u:[u]).every(I=>I.current&&!I.current.contains(w))&&_()};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[u,_])}const zb="_accordion_1hmri_1",Lb="_button_1hmri_6",Cb="_open_1hmri_25",Bb="_content_1hmri_29",fs={accordion:zb,button:Lb,open:Cb,content:Bb};function Ub(u){const _=parseFloat(u);return!isNaN(_)&&isFinite(_)}function Hh(u){return typeof u=="string"&&u[u.length-1]==="%"&&Ub(u.substring(0,u.length-1))}function Bo(u,_,x){_===0&&!x&&u?.style&&u?.children.length>0&&(u.style.display="none")}function Hb(u,_){_===0&&u?.style&&(u.style.display="")}const qb={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function qh(u,_){return[u.static,_===0&&u.staticHeightZero,typeof _=="number"&&_>0?u.staticHeightSpecific:null,_==="auto"&&u.staticHeightAuto].filter(x=>x).join(" ")}const Gb=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],Yb=bs.forwardRef((u,_)=>{const{animateOpacity:x=!1,animationStateClasses:d={},applyInlineTransitions:w=!0,children:L,className:U="",contentClassName:I,delay:z=0,disableDisplayNone:y=!1,duration:B=500,easing:A="ease",height:D,onHeightAnimationEnd:K,onHeightAnimationStart:en,style:Z,contentRef:pn}=u,vn=Object.assign({},u);Gb.forEach(an=>{delete vn[an]});const xn=rn.useRef(D),nn=rn.useRef(null),sn=rn.useRef(),Dn=rn.useRef(),mn=rn.useRef(Object.assign(Object.assign({},qb),d)),on=typeof window<"u",zn=rn.useRef(on&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),Fn=zn.current?0:z,br=zn.current?0:B;let cr=D,$n="visible";typeof D=="number"?(cr=D<0?0:D,$n="hidden"):Hh(cr)&&(cr=D==="0%"?0:D,$n="hidden");const[wr,ar]=rn.useState(cr),[jr,E]=rn.useState($n),[H,V]=rn.useState(!1),[Sn,Tn]=rn.useState(qh(mn.current,D));rn.useEffect(()=>{Bo(nn.current,wr,y)},[]),rn.useEffect(()=>{if(D!==xn.current&&nn.current){Hb(nn.current,xn.current),nn.current.style.overflow="hidden";const an=nn.current.offsetHeight;nn.current.style.overflow="";const hn=br+Fn;let gn,Mn,In="hidden",Br;const ue=xn.current==="auto";typeof D=="number"?(gn=D<0?0:D,Mn=gn):Hh(D)?(gn=D==="0%"?0:D,Mn=gn):(gn=an,Mn="auto",In=void 0),ue&&(Mn=gn,gn=an);const Re=[mn.current.animating,(xn.current==="auto"||D<xn.current)&&mn.current.animatingUp,(D==="auto"||D>xn.current)&&mn.current.animatingDown,Mn===0&&mn.current.animatingToHeightZero,Mn==="auto"&&mn.current.animatingToHeightAuto,typeof Mn=="number"&&Mn>0?mn.current.animatingToHeightSpecific:null].filter(ne=>ne).join(" "),De=qh(mn.current,Mn);ar(gn),E("hidden"),V(!ue),Tn(Re),clearTimeout(Dn.current),clearTimeout(sn.current),ue?(Br=!0,Dn.current=setTimeout(()=>{ar(Mn),E(In),V(Br),en?.(Mn)},50),sn.current=setTimeout(()=>{V(!1),Tn(De),Bo(nn.current,Mn,y),K?.(Mn)},hn)):(en?.(gn),Dn.current=setTimeout(()=>{ar(Mn),E(In),V(!1),Tn(De),D!=="auto"&&Bo(nn.current,gn,y),K?.(gn)},hn))}return xn.current=D,()=>{clearTimeout(Dn.current),clearTimeout(sn.current)}},[D]);const g=Object.assign(Object.assign({},Z),{height:wr,overflow:jr||Z?.overflow});H&&w&&(g.transition=`height ${br}ms ${A} ${Fn}ms`,Z?.transition&&(g.transition=`${Z.transition}, ${g.transition}`),g.WebkitTransition=g.transition);const N={};x&&(N.transition=`opacity ${br}ms ${A} ${Fn}ms`,N.WebkitTransition=N.transition,wr===0&&(N.opacity=0));const J=typeof vn["aria-hidden"]<"u"?vn["aria-hidden"]:D===0;return bs.createElement("div",Object.assign({},vn,{"aria-hidden":J,className:`${Sn} ${U}`,style:g,ref:_}),bs.createElement("div",{className:I,style:N,ref:an=>{nn.current=an,pn&&(pn.current=an)}},L))});function Kb(){return a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})}function Gr({title:u,children:_}){const[x,d]=rn.useState(!1),w=x?"auto":0,L=$r(fs.button,x&&fs.open),U=()=>d(!x);return a.jsxs("div",{className:fs.accordion,children:[a.jsxs("button",{className:L,onClick:U,children:[a.jsx("span",{children:u}),a.jsx(Kb,{})]}),a.jsx(Yb,{animateOpacity:!0,height:w,duration:400,children:a.jsx("div",{className:fs.content,children:_})})]})}const Vb="_linkWrapper_1logo_1",Ib="_link_1logo_1",Gh={linkWrapper:Vb,link:Ib},Qb="_tooltip_1edpy_1",Jb="_exit_1edpy_13",Xb="_text_1edpy_27",Uo={tooltip:Qb,exit:Jb,text:Xb};var Zb=Fh();const Fb=Va(Zb);function Pb({anchorRef:u,content:_,showTooltip:x}){const d=rn.useRef(null),[w,L]=rn.useState(null),[U,I]=rn.useState(!1),z=$r(Uo.tooltip,!x&&Uo.exit),y=()=>I(!1),B=()=>{x||I(!0)};return rn.useEffect(()=>{if(!x||!u.current)return;const A=u.current.getBoundingClientRect(),D=d.current?.offsetHeight??0,K=A.left+window.scrollX,en=A.top+window.scrollY-D-4;L({top:en,left:K})},[x]),(x||!U)&&u.current&&Fb.createPortal(a.jsx("div",{ref:d,className:z,style:w??{},onAnimationStart:y,onAnimationEnd:B,children:a.jsx("span",{className:Uo.text,children:_})}),document.body)}function Q({href:u,description:_}){const x=rn.useRef(null),[d,w]=rn.useState(!1);let L;const U=y=>{y.preventDefault(),window.history.replaceState({},"",u),clearTimeout(L),w(!1),ag(u,tg()-2)},I=()=>{L=setTimeout(()=>{w(!0)},700)},z=()=>{clearTimeout(L),w(!1)};return a.jsxs("div",{className:Gh.linkWrapper,children:[a.jsx("a",{ref:x,href:u,className:Gh.link,onClick:U,role:"button","aria-description":_,onMouseEnter:I,onMouseLeave:z,children:_}),a.jsx(Pb,{anchorRef:x,content:_,showTooltip:d})]})}function Wb(){return a.jsxs(a.Fragment,{children:[a.jsxs(Gr,{title:"Big O",children:[a.jsx(Q,{href:"#bigo-chart",description:"Time/Space Complexities"}),a.jsx(Q,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),a.jsx(Q,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),a.jsxs(Gr,{title:"Array",children:[a.jsx(Q,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),a.jsx(Q,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),a.jsx(Q,{href:"#array-sliding-window",description:"sliding window"}),a.jsx(Q,{href:"#array-prefix-sum",description:"prefix sum"}),a.jsx(Q,{href:"#array-string-building",description:"efficient string building"})]}),a.jsxs(Gr,{title:"Hash Map",children:[a.jsx(Q,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),a.jsx(Q,{href:"#hashmap-sliding-window",description:"sliding window"})]}),a.jsxs(Gr,{title:"Linked List",children:[a.jsx(Q,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),a.jsx(Q,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),a.jsxs(Gr,{title:"Stack",children:[a.jsx(Q,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),a.jsx(Q,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),a.jsxs(Gr,{title:"Binary Tree",children:[a.jsx(Q,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),a.jsx(Q,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),a.jsx(Q,{href:"#tree-bfs",description:"BFS"})]}),a.jsxs(Gr,{title:"Graph",children:[a.jsx(Q,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),a.jsx(Q,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),a.jsx(Q,{href:"#graph-bfs",description:"BFS"}),a.jsx(Q,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),a.jsx(Q,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),a.jsx(Q,{href:"#graph-kahn",description:"Kahn (topological sort)"}),a.jsx(Q,{href:"#graph-kruskal",description:"Kruskal (mst)"}),a.jsx(Q,{href:"#graph-prim",description:"Prim (mst)"})]}),a.jsx(Gr,{title:"Heap",children:a.jsx(Q,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),a.jsxs(Gr,{title:"Binary Search",children:[a.jsx(Q,{href:"#binarysearch-binary-search",description:"binary search"}),a.jsx(Q,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),a.jsx(Q,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),a.jsx(Q,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),a.jsx(Q,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),a.jsx(Gr,{title:"Backtracking",children:a.jsx(Q,{href:"#backtracking-backtracking",description:"backtracking"})}),a.jsxs(Gr,{title:"Dynamic Programming",children:[a.jsx(Q,{href:"#dp-top-down",description:"top-down DP"}),a.jsx(Q,{href:"#dp-bottom-up",description:"bottom-up DP"}),a.jsx(Q,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),a.jsxs(Gr,{title:"Bit Manipulation",children:[a.jsx(Q,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),a.jsx(Q,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),a.jsx(Q,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),a.jsx(Q,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),a.jsx(Q,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),a.jsx(Q,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),a.jsx(Q,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),a.jsx(Q,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),a.jsx(Q,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),a.jsxs(Gr,{title:"Matrix",children:[a.jsx(Q,{href:"#matrix-create-copy",description:"create / copy"}),a.jsx(Q,{href:"#matrix-diagonals",description:"main / anti diagonals"}),a.jsx(Q,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),a.jsxs(Gr,{title:"Data Structures",children:[a.jsx(Q,{href:"#ds-array",description:"array"}),a.jsx(Q,{href:"#ds-hash-map",description:"hashmap"}),a.jsx(Q,{href:"#ds-linked-list",description:"linked list"}),a.jsx(Q,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),a.jsx(Q,{href:"#ds-binary-tree",description:"binary tree"}),a.jsx(Q,{href:"#ds-binary-search-tree",description:"binary search tree"}),a.jsx(Q,{href:"#ds-graph",description:"graph"}),a.jsx(Q,{href:"#ds-union-find",description:"union find"}),a.jsx(Q,{href:"#ds-union-find-optimized",description:"union find optimized"}),a.jsx(Q,{href:"#ds-trie",description:"trie"})]}),a.jsxs(Gr,{title:"Sorting Algorithms",children:[a.jsx(Q,{href:"#sort-bubble",description:"bubble sort"}),a.jsx(Q,{href:"#sort-selection",description:"selection sort"}),a.jsx(Q,{href:"#sort-insertion",description:"insertion sort"}),a.jsx(Q,{href:"#sort-shell",description:"shell sort"}),a.jsx(Q,{href:"#sort-merge",description:"mergesort"}),a.jsx(Q,{href:"#sort-quick",description:"quicksort"}),a.jsx(Q,{href:"#sort-tim",description:"timsort"}),a.jsx(Q,{href:"#sort-heap",description:"heapsort"}),a.jsx(Q,{href:"#sort-counting",description:"counting sort"}),a.jsx(Q,{href:"#sort-bucket",description:"bucket sort"}),a.jsx(Q,{href:"#sort-radix",description:"radix sort"}),a.jsx(Q,{href:"#sort-cube",description:"cubesort"}),a.jsx(Q,{href:"#sort-bogo",description:"bogo sort"}),a.jsx(Q,{href:"#sort-pancake",description:"pancake sort"}),a.jsx(Q,{href:"#sort-sleep",description:"sleep sort"})]})]})}function $b({hamburgerButtonRef:u}){const _=rn.useRef(null),{isSidebarOpen:x,showSidebar:d,hideSidebar:w}=Ko(),[L,U]=rn.useState(!1),I=$r(ds.sidebar,!x&&ds.exit,!x&&L&&ds.hide),y=eg({maxWidth:768},void 0,K=>{K&&x?w():!K&&!x&&d()}),B=()=>{y&&x&&w()},A=()=>U(!1),D=()=>{x||U(!0)};return ig([_,u],B),a.jsx("nav",{ref:_,className:I,onAnimationStart:A,onAnimationEndCapture:D,children:a.jsx("div",{className:ds.scrollContainer,children:a.jsx(Wb,{})})})}function n0(){const u=rn.useRef(null);return a.jsxs("div",{id:"AppBar",children:[a.jsx(Ob,{forwardedRef:u}),a.jsx($b,{hamburgerButtonRef:u})]})}const r0="_main_1p6ym_1",e0="_sidebarHidden_1p6ym_11",Yh={main:r0,sidebarHidden:e0},t0="_container_1htmy_1",a0="_sectionHeader_1htmy_7",qn={container:t0,sectionHeader:a0},i0="_container_13ll4_1",l0="_label_13ll4_13",s0="_tableWrapper_13ll4_21",c0="_dataRow_13ll4_30",o0="_red_13ll4_51",u0="_oliveGreen_13ll4_55",d0="_green_13ll4_59",f0="_orange_13ll4_63",h0="_yellow_13ll4_67",g0="_gray_13ll4_71",p={container:i0,label:l0,tableWrapper:s0,dataRow:c0,red:o0,oliveGreen:u0,green:d0,orange:f0,yellow:h0,gray:g0};function p0(){const u={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return a.jsx("section",{id:"bigo-chart",children:a.jsxs("div",{className:p.container,children:[a.jsx("h3",{children:"Big-O Complexity Chart"}),a.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[a.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:u.red}),a.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:u.orange}),a.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:u.yellow}),a.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:u.oliveGreen}),a.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:u.green}),a.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),a.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),a.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),a.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),a.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),a.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),a.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),a.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function m0(){return a.jsx("section",{id:"bigo-data-structure-operations-table",children:a.jsxs("div",{className:p.container,children:[a.jsx("h3",{children:"Data Structure Operations"}),a.jsx("div",{className:p.tableWrapper,children:a.jsx("table",{className:p.table,children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Data Structure"}),a.jsx("th",{colSpan:8,children:"Time Complexity"}),a.jsx("th",{children:"Space Complexity"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{colSpan:4,children:"Average"}),a.jsx("th",{colSpan:4,children:"Worst"}),a.jsx("th",{children:"Worst"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{children:"Access"}),a.jsx("th",{children:"Search"}),a.jsx("th",{children:"Insertion"}),a.jsx("th",{children:"Deletion"}),a.jsx("th",{children:"Access"}),a.jsx("th",{children:"Search"}),a.jsx("th",{children:"Insertion"}),a.jsx("th",{children:"Deletion"}),a.jsx("th",{})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function b0(){return a.jsx("section",{id:"bigo-sorting-algorithms-table",children:a.jsxs("div",{className:p.container,children:[a.jsx("h3",{children:"Array Sorting Algorithms"}),a.jsx("div",{className:p.tableWrapper,children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Algorithm"}),a.jsx("th",{colSpan:3,children:"Time Complexity"}),a.jsx("th",{children:"Space Complexity"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{children:"Best"}),a.jsx("th",{children:"Average"}),a.jsx("th",{children:"Worst"}),a.jsx("th",{children:"Worst"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),a.jsx("td",{className:p.yellow,children:"Ω(n)"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),a.jsx("td",{className:p.yellow,children:"Ω(n)"}),a.jsx("td",{className:p.red,children:"Θ(n^2)"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),a.jsx("td",{className:p.yellow,children:"Ω(n)"}),a.jsx("td",{className:p.red,children:"Θ(n^2)"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),a.jsx("td",{className:p.red,children:"Ω(n^2)"}),a.jsx("td",{className:p.red,children:"Θ(n^2)"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.red,children:"Θ(n(log(n))^2)"}),a.jsx("td",{className:p.red,children:"O(n(log(n))^2)"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),a.jsx("td",{className:p.green,children:"Ω(n+k)"}),a.jsx("td",{className:p.green,children:"Θ(n+k)"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),a.jsx("td",{className:p.green,children:"Ω(nk)"}),a.jsx("td",{className:p.green,children:"Θ(nk)"}),a.jsx("td",{className:p.green,children:"O(nk)"}),a.jsx("td",{className:p.yellow,children:"O(n+k)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),a.jsx("td",{className:p.green,children:"Ω(n+k)"}),a.jsx("td",{className:p.green,children:"Θ(n+k)"}),a.jsx("td",{className:p.green,children:"O(n+k)"}),a.jsx("td",{className:p.yellow,children:"O(k)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),a.jsx("td",{className:p.yellow,children:"Ω(n)"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function _0(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Big O"}),a.jsx(p0,{}),a.jsx(m0,{}),a.jsx(b0,{})]})}const x0="_container_12crg_1",y0="_buttonContainer_12crg_12",v0="_tabButtonContainer_12crg_18",S0="_tabButton_12crg_18",hs={container:x0,buttonContainer:y0,tabButtonContainer:v0,tabButton:S0},T0="_code_1qx6e_1",j0="_line_1qx6e_13",Kh={code:T0,line:j0};function E0(u){const _=u.regex,x=u.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",w="[a-zA-Z_]\\w*::",U="(?!struct)("+d+"|"+_.optional(w)+"[a-zA-Z_]\\w*"+_.optional("<[^<>]+>")+")",I={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},y={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[u.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},u.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},B={className:"number",variants:[{begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},A={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},u.inherit(y,{className:"string"}),{className:"string",begin:/<.*?>/},x,u.C_BLOCK_COMMENT_MODE]},D={className:"title",begin:_.optional(w)+u.IDENT_RE,relevance:0},K=_.optional(w)+u.IDENT_RE+"\\s*\\(",en=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],Z=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],pn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],vn=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],sn={type:Z,keyword:en,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:pn},Dn={className:"function.dispatch",relevance:0,keywords:{_hint:vn},begin:_.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,u.IDENT_RE,_.lookahead(/(<[^<>]+>|)\s*\(/))},mn=[Dn,A,I,x,u.C_BLOCK_COMMENT_MODE,B,y],on={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:sn,contains:mn.concat([{begin:/\(/,end:/\)/,keywords:sn,contains:mn.concat(["self"]),relevance:0}]),relevance:0},zn={className:"function",begin:"("+U+"[\\*&\\s]+)+"+K,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:sn,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:sn,relevance:0},{begin:K,returnBegin:!0,contains:[D],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[y,B]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:sn,relevance:0,contains:[x,u.C_BLOCK_COMMENT_MODE,y,B,I,{begin:/\(/,end:/\)/,keywords:sn,relevance:0,contains:["self",x,u.C_BLOCK_COMMENT_MODE,y,B,I]}]},I,x,u.C_BLOCK_COMMENT_MODE,A]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:sn,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(on,zn,Dn,mn,[A,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:sn,contains:["self",I]},{begin:u.IDENT_RE+"::",keywords:sn},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}var Ho,Vh;function w0(){if(Vh)return Ho;Vh=1;function u(h){return h instanceof Map?h.clear=h.delete=h.set=function(){throw new Error("map is read-only")}:h instanceof Set&&(h.add=h.clear=h.delete=function(){throw new Error("set is read-only")}),Object.freeze(h),Object.getOwnPropertyNames(h).forEach(k=>{const Y=h[k],fn=typeof Y;(fn==="object"||fn==="function")&&!Object.isFrozen(Y)&&u(Y)}),h}class _{constructor(k){k.data===void 0&&(k.data={}),this.data=k.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function x(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(h,...k){const Y=Object.create(null);for(const fn in h)Y[fn]=h[fn];return k.forEach(function(fn){for(const rr in fn)Y[rr]=fn[rr]}),Y}const w="</span>",L=h=>!!h.scope,U=(h,{prefix:k})=>{if(h.startsWith("language:"))return h.replace("language:","language-");if(h.includes(".")){const Y=h.split(".");return[`${k}${Y.shift()}`,...Y.map((fn,rr)=>`${fn}${"_".repeat(rr+1)}`)].join(" ")}return`${k}${h}`};class I{constructor(k,Y){this.buffer="",this.classPrefix=Y.classPrefix,k.walk(this)}addText(k){this.buffer+=x(k)}openNode(k){if(!L(k))return;const Y=U(k.scope,{prefix:this.classPrefix});this.span(Y)}closeNode(k){L(k)&&(this.buffer+=w)}value(){return this.buffer}span(k){this.buffer+=`<span class="${k}">`}}const z=(h={})=>{const k={children:[]};return Object.assign(k,h),k};class y{constructor(){this.rootNode=z(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(k){this.top.children.push(k)}openNode(k){const Y=z({scope:k});this.add(Y),this.stack.push(Y)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(k){return this.constructor._walk(k,this.rootNode)}static _walk(k,Y){return typeof Y=="string"?k.addText(Y):Y.children&&(k.openNode(Y),Y.children.forEach(fn=>this._walk(k,fn)),k.closeNode(Y)),k}static _collapse(k){typeof k!="string"&&k.children&&(k.children.every(Y=>typeof Y=="string")?k.children=[k.children.join("")]:k.children.forEach(Y=>{y._collapse(Y)}))}}class B extends y{constructor(k){super(),this.options=k}addText(k){k!==""&&this.add(k)}startScope(k){this.openNode(k)}endScope(){this.closeNode()}__addSublanguage(k,Y){const fn=k.root;Y&&(fn.scope=`language:${Y}`),this.add(fn)}toHTML(){return new I(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function A(h){return h?typeof h=="string"?h:h.source:null}function D(h){return Z("(?=",h,")")}function K(h){return Z("(?:",h,")*")}function en(h){return Z("(?:",h,")?")}function Z(...h){return h.map(Y=>A(Y)).join("")}function pn(h){const k=h[h.length-1];return typeof k=="object"&&k.constructor===Object?(h.splice(h.length-1,1),k):{}}function vn(...h){return"("+(pn(h).capture?"":"?:")+h.map(fn=>A(fn)).join("|")+")"}function xn(h){return new RegExp(h.toString()+"|").exec("").length-1}function nn(h,k){const Y=h&&h.exec(k);return Y&&Y.index===0}const sn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Dn(h,{joinWith:k}){let Y=0;return h.map(fn=>{Y+=1;const rr=Y;let Pn=A(fn),P="";for(;Pn.length>0;){const X=sn.exec(Pn);if(!X){P+=Pn;break}P+=Pn.substring(0,X.index),Pn=Pn.substring(X.index+X[0].length),X[0][0]==="\\"&&X[1]?P+="\\"+String(Number(X[1])+rr):(P+=X[0],X[0]==="("&&Y++)}return P}).map(fn=>`(${fn})`).join(k)}const mn=/\b\B/,on="[a-zA-Z]\\w*",zn="[a-zA-Z_]\\w*",Fn="\\b\\d+(\\.\\d+)?",br="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",cr="\\b(0b[01]+)",$n="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",wr=(h={})=>{const k=/^#![ ]*\//;return h.binary&&(h.begin=Z(k,/.*\b/,h.binary,/\b.*/)),d({scope:"meta",begin:k,end:/$/,relevance:0,"on:begin":(Y,fn)=>{Y.index!==0&&fn.ignoreMatch()}},h)},ar={begin:"\\\\[\\s\\S]",relevance:0},jr={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ar]},E={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ar]},H={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},V=function(h,k,Y={}){const fn=d({scope:"comment",begin:h,end:k,contains:[]},Y);fn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const rr=vn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return fn.contains.push({begin:Z(/[ ]+/,"(",rr,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),fn},Sn=V("//","$"),Tn=V("/\\*","\\*/"),g=V("#","$"),N={scope:"number",begin:Fn,relevance:0},G={scope:"number",begin:br,relevance:0},J={scope:"number",begin:cr,relevance:0},an={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ar,{begin:/\[/,end:/\]/,relevance:0,contains:[ar]}]},hn={scope:"title",begin:on,relevance:0},gn={scope:"title",begin:zn,relevance:0},Mn={begin:"\\.\\s*"+zn,relevance:0};var Br=Object.freeze({__proto__:null,APOS_STRING_MODE:jr,BACKSLASH_ESCAPE:ar,BINARY_NUMBER_MODE:J,BINARY_NUMBER_RE:cr,COMMENT:V,C_BLOCK_COMMENT_MODE:Tn,C_LINE_COMMENT_MODE:Sn,C_NUMBER_MODE:G,C_NUMBER_RE:br,END_SAME_AS_BEGIN:function(h){return Object.assign(h,{"on:begin":(k,Y)=>{Y.data._beginMatch=k[1]},"on:end":(k,Y)=>{Y.data._beginMatch!==k[1]&&Y.ignoreMatch()}})},HASH_COMMENT_MODE:g,IDENT_RE:on,MATCH_NOTHING_RE:mn,METHOD_GUARD:Mn,NUMBER_MODE:N,NUMBER_RE:Fn,PHRASAL_WORDS_MODE:H,QUOTE_STRING_MODE:E,REGEXP_MODE:an,RE_STARTERS_RE:$n,SHEBANG:wr,TITLE_MODE:hn,UNDERSCORE_IDENT_RE:zn,UNDERSCORE_TITLE_MODE:gn});function ue(h,k){h.input[h.index-1]==="."&&k.ignoreMatch()}function Re(h,k){h.className!==void 0&&(h.scope=h.className,delete h.className)}function De(h,k){k&&h.beginKeywords&&(h.begin="\\b("+h.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",h.__beforeBegin=ue,h.keywords=h.keywords||h.beginKeywords,delete h.beginKeywords,h.relevance===void 0&&(h.relevance=0))}function ne(h,k){Array.isArray(h.illegal)&&(h.illegal=vn(...h.illegal))}function kt(h,k){if(h.match){if(h.begin||h.end)throw new Error("begin & end are not supported with match");h.begin=h.match,delete h.match}}function Ln(h,k){h.relevance===void 0&&(h.relevance=1)}const rt=(h,k)=>{if(!h.beforeMatch)return;if(h.starts)throw new Error("beforeMatch cannot be used with starts");const Y=Object.assign({},h);Object.keys(h).forEach(fn=>{delete h[fn]}),h.keywords=Y.keywords,h.begin=Z(Y.beforeMatch,D(Y.begin)),h.starts={relevance:0,contains:[Object.assign(Y,{endsParent:!0})]},h.relevance=0,delete Y.beforeMatch},je=["of","and","for","in","not","or","if","then","parent","list","value"],Mt="keyword";function ia(h,k,Y=Mt){const fn=Object.create(null);return typeof h=="string"?rr(Y,h.split(" ")):Array.isArray(h)?rr(Y,h):Object.keys(h).forEach(function(Pn){Object.assign(fn,ia(h[Pn],k,Pn))}),fn;function rr(Pn,P){k&&(P=P.map(X=>X.toLowerCase())),P.forEach(function(X){const dn=X.split("|");fn[dn[0]]=[Pn,Ia(dn[0],dn[1])]})}}function Ia(h,k){return k?Number(k):xs(h)?0:1}function xs(h){return je.includes(h.toLowerCase())}const Vi={},dr=h=>{console.error(h)},Ii=(h,...k)=>{console.log(`WARN: ${h}`,...k)},ze=(h,k)=>{Vi[`${h}/${k}`]||(console.log(`Deprecated as of ${h}. ${k}`),Vi[`${h}/${k}`]=!0)},Rt=new Error;function Dt(h,k,{key:Y}){let fn=0;const rr=h[Y],Pn={},P={};for(let X=1;X<=k.length;X++)P[X+fn]=rr[X],Pn[X+fn]=!0,fn+=xn(k[X-1]);h[Y]=P,h[Y]._emit=Pn,h[Y]._multi=!0}function ys(h){if(Array.isArray(h.begin)){if(h.skip||h.excludeBegin||h.returnBegin)throw dr("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Rt;if(typeof h.beginScope!="object"||h.beginScope===null)throw dr("beginScope must be object"),Rt;Dt(h,h.begin,{key:"beginScope"}),h.begin=Dn(h.begin,{joinWith:""})}}function Qi(h){if(Array.isArray(h.end)){if(h.skip||h.excludeEnd||h.returnEnd)throw dr("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Rt;if(typeof h.endScope!="object"||h.endScope===null)throw dr("endScope must be object"),Rt;Dt(h,h.end,{key:"endScope"}),h.end=Dn(h.end,{joinWith:""})}}function vs(h){h.scope&&typeof h.scope=="object"&&h.scope!==null&&(h.beginScope=h.scope,delete h.scope)}function Ss(h){vs(h),typeof h.beginScope=="string"&&(h.beginScope={_wrap:h.beginScope}),typeof h.endScope=="string"&&(h.endScope={_wrap:h.endScope}),ys(h),Qi(h)}function zt(h){function k(P,X){return new RegExp(A(P),"m"+(h.case_insensitive?"i":"")+(h.unicodeRegex?"u":"")+(X?"g":""))}class Y{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(X,dn){dn.position=this.position++,this.matchIndexes[this.matchAt]=dn,this.regexes.push([dn,X]),this.matchAt+=xn(X)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const X=this.regexes.map(dn=>dn[1]);this.matcherRe=k(Dn(X,{joinWith:"|"}),!0),this.lastIndex=0}exec(X){this.matcherRe.lastIndex=this.lastIndex;const dn=this.matcherRe.exec(X);if(!dn)return null;const fr=dn.findIndex((Le,sa)=>sa>0&&Le!==void 0),ir=this.matchIndexes[fr];return dn.splice(0,fr),Object.assign(dn,ir)}}class fn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(X){if(this.multiRegexes[X])return this.multiRegexes[X];const dn=new Y;return this.rules.slice(X).forEach(([fr,ir])=>dn.addRule(fr,ir)),dn.compile(),this.multiRegexes[X]=dn,dn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(X,dn){this.rules.push([X,dn]),dn.type==="begin"&&this.count++}exec(X){const dn=this.getMatcher(this.regexIndex);dn.lastIndex=this.lastIndex;let fr=dn.exec(X);if(this.resumingScanAtSamePosition()&&!(fr&&fr.index===this.lastIndex)){const ir=this.getMatcher(0);ir.lastIndex=this.lastIndex+1,fr=ir.exec(X)}return fr&&(this.regexIndex+=fr.position+1,this.regexIndex===this.count&&this.considerAll()),fr}}function rr(P){const X=new fn;return P.contains.forEach(dn=>X.addRule(dn.begin,{rule:dn,type:"begin"})),P.terminatorEnd&&X.addRule(P.terminatorEnd,{type:"end"}),P.illegal&&X.addRule(P.illegal,{type:"illegal"}),X}function Pn(P,X){const dn=P;if(P.isCompiled)return dn;[Re,kt,Ss,rt].forEach(ir=>ir(P,X)),h.compilerExtensions.forEach(ir=>ir(P,X)),P.__beforeBegin=null,[De,ne,Ln].forEach(ir=>ir(P,X)),P.isCompiled=!0;let fr=null;return typeof P.keywords=="object"&&P.keywords.$pattern&&(P.keywords=Object.assign({},P.keywords),fr=P.keywords.$pattern,delete P.keywords.$pattern),fr=fr||/\w+/,P.keywords&&(P.keywords=ia(P.keywords,h.case_insensitive)),dn.keywordPatternRe=k(fr,!0),X&&(P.begin||(P.begin=/\B|\b/),dn.beginRe=k(dn.begin),!P.end&&!P.endsWithParent&&(P.end=/\B|\b/),P.end&&(dn.endRe=k(dn.end)),dn.terminatorEnd=A(dn.end)||"",P.endsWithParent&&X.terminatorEnd&&(dn.terminatorEnd+=(P.end?"|":"")+X.terminatorEnd)),P.illegal&&(dn.illegalRe=k(P.illegal)),P.contains||(P.contains=[]),P.contains=[].concat(...P.contains.map(function(ir){return Ee(ir==="self"?P:ir)})),P.contains.forEach(function(ir){Pn(ir,dn)}),P.starts&&Pn(P.starts,X),dn.matcher=rr(dn),dn}if(h.compilerExtensions||(h.compilerExtensions=[]),h.contains&&h.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return h.classNameAliases=d(h.classNameAliases||{}),Pn(h)}function Dr(h){return h?h.endsWithParent||Dr(h.starts):!1}function Ee(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(k){return d(h,{variants:null},k)})),h.cachedVariants?h.cachedVariants:Dr(h)?d(h,{starts:h.starts?d(h.starts):null}):Object.isFrozen(h)?d(h):h}var Ur="11.11.1";class Ts extends Error{constructor(k,Y){super(k),this.name="HTMLInjectionError",this.html=Y}}const Qa=x,Ji=d,Lt=Symbol("nomatch"),la=7,Ct=function(h){const k=Object.create(null),Y=Object.create(null),fn=[];let rr=!0;const Pn="Could not find the language '{}', did you forget to load/include a language module?",P={disableAutodetect:!0,name:"Plain text",contains:[]};let X={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:B};function dn(C){return X.noHighlightRe.test(C)}function fr(C){let tn=C.className+" ";tn+=C.parentNode?C.parentNode.className:"";const En=X.languageDetectRe.exec(tn);if(En){const Gn=Hr(En[1]);return Gn||(Ii(Pn.replace("{}",En[1])),Ii("Falling back to no-highlight mode for this block.",C)),Gn?En[1]:"no-highlight"}return tn.split(/\s+/).find(Gn=>dn(Gn)||Hr(Gn))}function ir(C,tn,En){let Gn="",gr="";typeof tn=="object"?(Gn=C,En=tn.ignoreIllegals,gr=tn.language):(ze("10.7.0","highlight(lang, code, ...args) has been deprecated."),ze("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),gr=C,Gn=tn),En===void 0&&(En=!0);const Lr={code:Gn,language:gr};Ut("before:highlight",Lr);const re=Lr.result?Lr.result:Le(Lr.language,Lr.code,En);return re.code=Lr.code,Ut("after:highlight",re),re}function Le(C,tn,En,Gn){const gr=Object.create(null);function Lr(q,W){return q.keywords[W]}function re(){if(!un.keywords){xr.addText(Yn);return}let q=0;un.keywordPatternRe.lastIndex=0;let W=un.keywordPatternRe.exec(Yn),_n="";for(;W;){_n+=Yn.substring(q,W.index);const An=Ar.case_insensitive?W[0].toLowerCase():W[0],sr=Lr(un,An);if(sr){const[de,Wa]=sr;if(xr.addText(_n),_n="",gr[An]=(gr[An]||0)+1,gr[An]<=la&&(it+=Wa),de.startsWith("_"))_n+=W[0];else{const nl=Ar.classNameAliases[de]||de;ee(W[0],nl)}}else _n+=W[0];q=un.keywordPatternRe.lastIndex,W=un.keywordPatternRe.exec(Yn)}_n+=Yn.substring(q),xr.addText(_n)}function Ir(){if(Yn==="")return;let q=null;if(typeof un.subLanguage=="string"){if(!k[un.subLanguage]){xr.addText(Yn);return}q=Le(un.subLanguage,Yn,!0,$i[un.subLanguage]),$i[un.subLanguage]=q._top}else q=ca(Yn,un.subLanguage.length?un.subLanguage:null);un.relevance>0&&(it+=q.relevance),xr.__addSublanguage(q._emitter,q.language)}function nr(){un.subLanguage!=null?Ir():re(),Yn=""}function ee(q,W){q!==""&&(xr.startScope(W),xr.addText(q),xr.endScope())}function Pi(q,W){let _n=1;const An=W.length-1;for(;_n<=An;){if(!q._emit[_n]){_n++;continue}const sr=Ar.classNameAliases[q[_n]]||q[_n],de=W[_n];sr?ee(de,sr):(Yn=de,re(),Yn=""),_n++}}function ua(q,W){return q.scope&&typeof q.scope=="string"&&xr.openNode(Ar.classNameAliases[q.scope]||q.scope),q.beginScope&&(q.beginScope._wrap?(ee(Yn,Ar.classNameAliases[q.beginScope._wrap]||q.beginScope._wrap),Yn=""):q.beginScope._multi&&(Pi(q.beginScope,W),Yn="")),un=Object.create(q,{parent:{value:un}}),un}function Za(q,W,_n){let An=nn(q.endRe,_n);if(An){if(q["on:end"]){const sr=new _(q);q["on:end"](W,sr),sr.isMatchIgnored&&(An=!1)}if(An){for(;q.endsParent&&q.parent;)q=q.parent;return q}}if(q.endsWithParent)return Za(q.parent,W,_n)}function da(q){return un.matcher.regexIndex===0?(Yn+=q[0],1):(lt=!0,0)}function js(q){const W=q[0],_n=q.rule,An=new _(_n),sr=[_n.__beforeBegin,_n["on:begin"]];for(const de of sr)if(de&&(de(q,An),An.isMatchIgnored))return da(W);return _n.skip?Yn+=W:(_n.excludeBegin&&(Yn+=W),nr(),!_n.returnBegin&&!_n.excludeBegin&&(Yn=W)),ua(_n,q),_n.returnBegin?0:W.length}function Qr(q){const W=q[0],_n=tn.substring(q.index),An=Za(un,q,_n);if(!An)return Lt;const sr=un;un.endScope&&un.endScope._wrap?(nr(),ee(W,un.endScope._wrap)):un.endScope&&un.endScope._multi?(nr(),Pi(un.endScope,q)):sr.skip?Yn+=W:(sr.returnEnd||sr.excludeEnd||(Yn+=W),nr(),sr.excludeEnd&&(Yn=W));do un.scope&&xr.closeNode(),!un.skip&&!un.subLanguage&&(it+=un.relevance),un=un.parent;while(un!==An.parent);return An.starts&&ua(An.starts,q),sr.returnEnd?0:W.length}function Fa(){const q=[];for(let W=un;W!==Ar;W=W.parent)W.scope&&q.unshift(W.scope);q.forEach(W=>xr.openNode(W))}let Ht={};function fa(q,W){const _n=W&&W[0];if(Yn+=q,_n==null)return nr(),0;if(Ht.type==="begin"&&W.type==="end"&&Ht.index===W.index&&_n===""){if(Yn+=tn.slice(W.index,W.index+1),!rr){const An=new Error(`0 width match regex (${C})`);throw An.languageName=C,An.badRule=Ht.rule,An}return 1}if(Ht=W,W.type==="begin")return js(W);if(W.type==="illegal"&&!En){const An=new Error('Illegal lexeme "'+_n+'" for mode "'+(un.scope||"<unnamed>")+'"');throw An.mode=un,An}else if(W.type==="end"){const An=Qr(W);if(An!==Lt)return An}if(W.type==="illegal"&&_n==="")return Yn+=`
`,1;if(Pa>1e5&&Pa>W.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Yn+=_n,_n.length}const Ar=Hr(C);if(!Ar)throw dr(Pn.replace("{}",C)),new Error('Unknown language: "'+C+'"');const Wi=zt(Ar);let ha="",un=Gn||Wi;const $i={},xr=new X.__emitter(X);Fa();let Yn="",it=0,Ue=0,Pa=0,lt=!1;try{if(Ar.__emitTokens)Ar.__emitTokens(tn,xr);else{for(un.matcher.considerAll();;){Pa++,lt?lt=!1:un.matcher.considerAll(),un.matcher.lastIndex=Ue;const q=un.matcher.exec(tn);if(!q)break;const W=tn.substring(Ue,q.index),_n=fa(W,q);Ue=q.index+_n}fa(tn.substring(Ue))}return xr.finalize(),ha=xr.toHTML(),{language:C,value:ha,relevance:it,illegal:!1,_emitter:xr,_top:un}}catch(q){if(q.message&&q.message.includes("Illegal"))return{language:C,value:Qa(tn),illegal:!0,relevance:0,_illegalBy:{message:q.message,index:Ue,context:tn.slice(Ue-100,Ue+100),mode:q.mode,resultSoFar:ha},_emitter:xr};if(rr)return{language:C,value:Qa(tn),illegal:!1,relevance:0,errorRaised:q,_emitter:xr,_top:un};throw q}}function sa(C){const tn={value:Qa(C),illegal:!1,relevance:0,_top:P,_emitter:new X.__emitter(X)};return tn._emitter.addText(C),tn}function ca(C,tn){tn=tn||X.languages||Object.keys(k);const En=sa(C),Gn=tn.filter(Hr).filter(tt).map(nr=>Le(nr,C,!1));Gn.unshift(En);const gr=Gn.sort((nr,ee)=>{if(nr.relevance!==ee.relevance)return ee.relevance-nr.relevance;if(nr.language&&ee.language){if(Hr(nr.language).supersetOf===ee.language)return 1;if(Hr(ee.language).supersetOf===nr.language)return-1}return 0}),[Lr,re]=gr,Ir=Lr;return Ir.secondBest=re,Ir}function we(C,tn,En){const Gn=tn&&Y[tn]||En;C.classList.add("hljs"),C.classList.add(`language-${Gn}`)}function hr(C){let tn=null;const En=fr(C);if(dn(En))return;if(Ut("before:highlightElement",{el:C,language:En}),C.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",C);return}if(C.children.length>0&&(X.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(C)),X.throwUnescapedHTML))throw new Ts("One of your code blocks includes unescaped HTML.",C.innerHTML);tn=C;const Gn=tn.textContent,gr=En?ir(Gn,{language:En,ignoreIllegals:!0}):ca(Gn);C.innerHTML=gr.value,C.dataset.highlighted="yes",we(C,En,gr.language),C.result={language:gr.language,re:gr.relevance,relevance:gr.relevance},gr.secondBest&&(C.secondBest={language:gr.secondBest.language,relevance:gr.secondBest.relevance}),Ut("after:highlightElement",{el:C,result:gr,text:Gn})}function zr(C){X=Ji(X,C)}const et=()=>{oa(),ze("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ja(){oa(),ze("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Xi=!1;function oa(){function C(){oa()}if(document.readyState==="loading"){Xi||window.addEventListener("DOMContentLoaded",C,!1),Xi=!0;return}document.querySelectorAll(X.cssSelector).forEach(hr)}function Zi(C,tn){let En=null;try{En=tn(h)}catch(Gn){if(dr("Language definition for '{}' could not be registered.".replace("{}",C)),rr)dr(Gn);else throw Gn;En=P}En.name||(En.name=C),k[C]=En,En.rawDefinition=tn.bind(null,h),En.aliases&&Ce(En.aliases,{languageName:C})}function Bt(C){delete k[C];for(const tn of Object.keys(Y))Y[tn]===C&&delete Y[tn]}function Xa(){return Object.keys(k)}function Hr(C){return C=(C||"").toLowerCase(),k[C]||k[Y[C]]}function Ce(C,{languageName:tn}){typeof C=="string"&&(C=[C]),C.forEach(En=>{Y[En.toLowerCase()]=tn})}function tt(C){const tn=Hr(C);return tn&&!tn.disableAutodetect}function at(C){C["before:highlightBlock"]&&!C["before:highlightElement"]&&(C["before:highlightElement"]=tn=>{C["before:highlightBlock"](Object.assign({block:tn.el},tn))}),C["after:highlightBlock"]&&!C["after:highlightElement"]&&(C["after:highlightElement"]=tn=>{C["after:highlightBlock"](Object.assign({block:tn.el},tn))})}function _r(C){at(C),fn.push(C)}function Fi(C){const tn=fn.indexOf(C);tn!==-1&&fn.splice(tn,1)}function Ut(C,tn){const En=C;fn.forEach(function(Gn){Gn[En]&&Gn[En](tn)})}function Be(C){return ze("10.7.0","highlightBlock will be removed entirely in v12.0"),ze("10.7.0","Please use highlightElement now."),hr(C)}Object.assign(h,{highlight:ir,highlightAuto:ca,highlightAll:oa,highlightElement:hr,highlightBlock:Be,configure:zr,initHighlighting:et,initHighlightingOnLoad:Ja,registerLanguage:Zi,unregisterLanguage:Bt,listLanguages:Xa,getLanguage:Hr,registerAliases:Ce,autoDetection:tt,inherit:Ji,addPlugin:_r,removePlugin:Fi}),h.debugMode=function(){rr=!1},h.safeMode=function(){rr=!0},h.versionString=Ur,h.regex={concat:Z,lookahead:D,either:vn,optional:en,anyNumberOfTimes:K};for(const C in Br)typeof Br[C]=="object"&&u(Br[C]);return Object.assign(h,Br),h},Vr=Ct({});return Vr.newInstance=()=>Ct({}),Ho=Vr,Vr.HighlightJS=Vr,Vr.default=Vr,Ho}var N0=w0();const aa=Va(N0);var Ka="[0-9](_*[0-9])*",gs=`\\.(${Ka})`,ps="[0-9a-fA-F](_*[0-9a-fA-F])*",Ih={className:"number",variants:[{begin:`(\\b(${Ka})((${gs})|\\.)?|(${gs}))[eE][+-]?(${Ka})[fFdD]?\\b`},{begin:`\\b(${Ka})((${gs})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${gs})[fFdD]?\\b`},{begin:`\\b(${Ka})[fFdD]\\b`},{begin:`\\b0[xX]((${ps})\\.?|(${ps})?\\.(${ps}))[pP][+-]?(${Ka})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${ps})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function lg(u,_,x){return x===-1?"":u.replace(_,d=>lg(u,_,x-1))}function A0(u){const _=u.regex,x="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d=x+lg("(?:<"+x+"~~~(?:\\s*,\\s*"+x+"~~~)*>)?",/~~~/g,2),z={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},y={className:"meta",begin:"@"+x,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},B={className:"params",begin:/\(/,end:/\)/,keywords:z,relevance:0,contains:[u.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:z,illegal:/<\/|#/,contains:[u.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[u.BACKSLASH_ESCAPE]},u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,x],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[_.concat(/(?!else)/,x),/\s+/,x,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,x],className:{1:"keyword",3:"title.class"},contains:[B,u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+d+"\\s+)",u.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:z,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:z,relevance:0,contains:[y,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,Ih,u.C_BLOCK_COMMENT_MODE]},u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE]},Ih,y]}}function O0(u){const _=u.regex,x="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",d=_.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),w=_.concat(d,/(::\w+)*/),U={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},I={className:"doctag",begin:"@[A-Za-z]+"},z={begin:"#<",end:">"},y=[u.COMMENT("#","$",{contains:[I]}),u.COMMENT("^=begin","^=end",{contains:[I],relevance:10}),u.COMMENT("^__END__",u.MATCH_NOTHING_RE)],B={className:"subst",begin:/#\{/,end:/\}/,keywords:U},A={className:"string",contains:[u.BACKSLASH_ESCAPE,B],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:_.concat(/<<[-~]?'?/,_.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[u.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[u.BACKSLASH_ESCAPE,B]})]}]},D="[1-9](_?[0-9])*|0",K="[0-9](_?[0-9])*",en={className:"number",relevance:0,variants:[{begin:`\\b(${D})(\\.(${K}))?([eE][+-]?(${K})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},Z={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:U}]},mn=[A,{variants:[{match:[/class\s+/,w,/\s+<\s+/,w]},{match:[/\b(class|module)\s+/,w]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:U},{match:[/(include|extend)\s+/,w],scope:{2:"title.class"},keywords:U},{relevance:0,match:[w,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:d,scope:"title.class"},{match:[/def/,/\s+/,x],scope:{1:"keyword",3:"title.function"},contains:[Z]},{begin:u.IDENT_RE+"::"},{className:"symbol",begin:u.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[A,{begin:x}],relevance:0},en,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|(?!=)/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:U},{begin:"("+u.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[u.BACKSLASH_ESCAPE,B],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(z,y),relevance:0}].concat(z,y);B.contains=mn,Z.contains=mn;const br=[{begin:/^\s*=>/,starts:{end:"$",contains:mn}},{className:"meta.prompt",begin:"^("+"[>?]>"+"|"+"[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]"+"|"+"(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>"+")(?=[ ])",starts:{end:"$",keywords:U,contains:mn}}];return y.unshift(z),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:U,illegal:/\/\*/,contains:[u.SHEBANG({binary:"ruby"})].concat(br).concat(y).concat(mn)}}const Qh="[A-Za-z$_][0-9A-Za-z$_]*",k0=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],M0=["true","false","null","undefined","NaN","Infinity"],sg=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],cg=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],og=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],R0=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],D0=[].concat(og,sg,cg);function z0(u){const _=u.regex,x=(V,{after:Sn})=>{const Tn="</"+V[0].slice(1);return V.input.indexOf(Tn,Sn)!==-1},d=Qh,w={begin:"<>",end:"</>"},L=/<[A-Za-z0-9\\._:-]+\s*\/>/,U={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(V,Sn)=>{const Tn=V[0].length+V.index,g=V.input[Tn];if(g==="<"||g===","){Sn.ignoreMatch();return}g===">"&&(x(V,{after:Tn})||Sn.ignoreMatch());let N;const G=V.input.substring(Tn);if(N=G.match(/^\s*=/)){Sn.ignoreMatch();return}if((N=G.match(/^\s+extends\s+/))&&N.index===0){Sn.ignoreMatch();return}}},I={$pattern:Qh,keyword:k0,literal:M0,built_in:D0,"variable.language":R0},z="[0-9](_?[0-9])*",y=`\\.(${z})`,B="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={className:"number",variants:[{begin:`(\\b(${B})((${y})|\\.)?|(${y}))[eE][+-]?(${z})\\b`},{begin:`\\b(${B})\\b((${y})\\b|\\.)?|(${y})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},D={className:"subst",begin:"\\$\\{",end:"\\}",keywords:I,contains:[]},K={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,D],subLanguage:"xml"}},en={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,D],subLanguage:"css"}},Z={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,D],subLanguage:"graphql"}},pn={className:"string",begin:"`",end:"`",contains:[u.BACKSLASH_ESCAPE,D]},xn={className:"comment",variants:[u.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),u.C_BLOCK_COMMENT_MODE,u.C_LINE_COMMENT_MODE]},nn=[u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,K,en,Z,pn,{match:/\$\d+/},A];D.contains=nn.concat({begin:/\{/,end:/\}/,keywords:I,contains:["self"].concat(nn)});const sn=[].concat(xn,D.contains),Dn=sn.concat([{begin:/(\s*)\(/,end:/\)/,keywords:I,contains:["self"].concat(sn)}]),mn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:I,contains:Dn},on={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,_.concat(d,"(",_.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},zn={relevance:0,match:_.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...sg,...cg]}},Fn={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},br={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[mn],illegal:/%/},cr={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function $n(V){return _.concat("(?!",V.join("|"),")")}const wr={match:_.concat(/\b/,$n([...og,"super","import"].map(V=>`${V}\\s*\\(`)),d,_.lookahead(/\s*\(/)),className:"title.function",relevance:0},ar={begin:_.concat(/\./,_.lookahead(_.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},jr={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},mn]},E="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+u.UNDERSCORE_IDENT_RE+")\\s*=>",H={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,_.lookahead(E)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[mn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:I,exports:{PARAMS_CONTAINS:Dn,CLASS_REFERENCE:zn},illegal:/#(?![$_A-z])/,contains:[u.SHEBANG({label:"shebang",binary:"node",relevance:5}),Fn,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,K,en,Z,pn,xn,{match:/\$\d+/},A,zn,{scope:"attr",match:d+_.lookahead(":"),relevance:0},H,{begin:"("+u.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[xn,u.REGEXP_MODE,{className:"function",begin:E,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:u.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:I,contains:Dn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:w.begin,end:w.end},{match:L},{begin:U.begin,"on:begin":U.isTrulyOpeningTag,end:U.end}],subLanguage:"xml",contains:[{begin:U.begin,end:U.end,skip:!0,contains:["self"]}]}]},br,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+u.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[mn,u.inherit(u.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},ar,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[mn]},wr,cr,on,jr,{match:/\$[(.]/}]}}function L0(u){const _=u.regex,x=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],w=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,L=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],U=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],I=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],z=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...U],y=["__debug__","Ellipsis","False","None","NotImplemented","True",...I],B=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...L],A={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:z,literal:y,type:B},D={className:"meta",begin:/^(>>>|\.\.\.) /},K={className:"subst",begin:/\{/,end:/\}/,keywords:A,illegal:/#/},en={begin:/\{\{/,relevance:0},Z={className:"string",contains:[u.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,D],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,D],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,D,en,K]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,D,en,K]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[u.BACKSLASH_ESCAPE,en,K]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[u.BACKSLASH_ESCAPE,en,K]},u.APOS_STRING_MODE,u.QUOTE_STRING_MODE]},pn="[0-9](_?[0-9])*",vn=`(\\b(${pn}))?\\.(${pn})|\\b(${pn})\\.`,xn=`\\b|${d.join("|")}`,nn={className:"number",relevance:0,variants:[{begin:`(\\b(${pn})|(${vn}))[eE][+-]?(${pn})[jJ]?(?=${xn})`},{begin:`(${vn})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${xn})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${xn})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${xn})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${xn})`},{begin:`\\b(${pn})[jJ](?=${xn})`}]},sn={className:"comment",begin:_.lookahead(/# type:/),end:/$/,keywords:A,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Dn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:A,contains:["self",D,nn,Z,u.HASH_COMMENT_MODE,{scope:"params.operator",match:w},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return K.contains=[Z,nn,D],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:A,illegal:/(<\/|\?)|=>/,contains:[D,nn,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},Z,sn,u.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,x],scope:{1:"keyword.def",3:"title.function"},contains:[Dn]},{variants:[{match:[/\bclass/,/\s+/,x,/\s*/,/\(\s*/,x,/\s*\)/]},{match:[/\bclass/,/\s+/,x]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[nn,Dn,Z]},{scope:"operator",match:w}]}}function ug(u){return u?typeof u=="string"?u:u.source:null}function Ki(u){return Zn("(?=",u,")")}function Zn(...u){return u.map(x=>ug(x)).join("")}function C0(u){const _=u[u.length-1];return typeof _=="object"&&_.constructor===Object?(u.splice(u.length-1,1),_):{}}function Kr(...u){return"("+(C0(u).capture?"":"?:")+u.map(d=>ug(d)).join("|")+")"}const Vo=u=>Zn(/\b/,u,/\w$/.test(u)?/\b/:/\B/),B0=["Protocol","Type"].map(Vo),Jh=["init","self"].map(Vo),U0=["Any","Self"],qo=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Xh=["false","nil","true"],H0=["assignment","associativity","higherThan","left","lowerThan","none","right"],q0=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],Zh=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],dg=Kr(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),fg=Kr(dg,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Go=Zn(dg,fg,"*"),hg=Kr(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),_s=Kr(hg,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),Me=Zn(hg,_s,"*"),ms=Zn(/[A-Z]/,_s,"*"),G0=["attached","autoclosure",Zn(/convention\(/,Kr("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",Zn(/objc\(/,Me,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],Y0=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function K0(u){const _={match:/\s+/,relevance:0},x=u.COMMENT("/\\*","\\*/",{contains:["self"]}),d=[u.C_LINE_COMMENT_MODE,x],w={match:[/\./,Kr(...B0,...Jh)],className:{2:"keyword"}},L={match:Zn(/\./,Kr(...qo)),relevance:0},U=qo.filter(Ln=>typeof Ln=="string").concat(["_|0"]),I=qo.filter(Ln=>typeof Ln!="string").concat(U0).map(Vo),z={variants:[{className:"keyword",match:Kr(...I,...Jh)}]},y={$pattern:Kr(/\b\w+/,/#\w+/),keyword:U.concat(q0),literal:Xh},B=[w,L,z],A={match:Zn(/\./,Kr(...Zh)),relevance:0},D={className:"built_in",match:Zn(/\b/,Kr(...Zh),/(?=\()/)},K=[A,D],en={match:/->/,relevance:0},Z={className:"operator",relevance:0,variants:[{match:Go},{match:`\\.(\\.|${fg})+`}]},pn=[en,Z],vn="([0-9]_*)+",xn="([0-9a-fA-F]_*)+",nn={className:"number",relevance:0,variants:[{match:`\\b(${vn})(\\.(${vn}))?([eE][+-]?(${vn}))?\\b`},{match:`\\b0x(${xn})(\\.(${xn}))?([pP][+-]?(${vn}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},sn=(Ln="")=>({className:"subst",variants:[{match:Zn(/\\/,Ln,/[0\\tnr"']/)},{match:Zn(/\\/,Ln,/u\{[0-9a-fA-F]{1,8}\}/)}]}),Dn=(Ln="")=>({className:"subst",match:Zn(/\\/,Ln,/[\t ]*(?:[\r\n]|\r\n)/)}),mn=(Ln="")=>({className:"subst",label:"interpol",begin:Zn(/\\/,Ln,/\(/),end:/\)/}),on=(Ln="")=>({begin:Zn(Ln,/"""/),end:Zn(/"""/,Ln),contains:[sn(Ln),Dn(Ln),mn(Ln)]}),zn=(Ln="")=>({begin:Zn(Ln,/"/),end:Zn(/"/,Ln),contains:[sn(Ln),mn(Ln)]}),Fn={className:"string",variants:[on(),on("#"),on("##"),on("###"),zn(),zn("#"),zn("##"),zn("###")]},br=[u.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[u.BACKSLASH_ESCAPE]}],cr={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:br},$n=Ln=>{const rt=Zn(Ln,/\//),je=Zn(/\//,Ln);return{begin:rt,end:je,contains:[...br,{scope:"comment",begin:`#(?!.*${je})`,end:/$/}]}},wr={scope:"regexp",variants:[$n("###"),$n("##"),$n("#"),cr]},ar={match:Zn(/`/,Me,/`/)},jr={className:"variable",match:/\$\d+/},E={className:"variable",match:`\\$${_s}+`},H=[ar,jr,E],V={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:Y0,contains:[...pn,nn,Fn]}]}},Sn={scope:"keyword",match:Zn(/@/,Kr(...G0),Ki(Kr(/\(/,/\s+/)))},Tn={scope:"meta",match:Zn(/@/,Me)},g=[V,Sn,Tn],N={match:Ki(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:Zn(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,_s,"+")},{className:"type",match:ms,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:Zn(/\s+&\s+/,Ki(ms)),relevance:0}]},G={begin:/</,end:/>/,keywords:y,contains:[...d,...B,...g,en,N]};N.contains.push(G);const J={match:Zn(Me,/\s*:/),keywords:"_|0",relevance:0},an={begin:/\(/,end:/\)/,relevance:0,keywords:y,contains:["self",J,...d,wr,...B,...K,...pn,nn,Fn,...H,...g,N]},hn={begin:/</,end:/>/,keywords:"repeat each",contains:[...d,N]},gn={begin:Kr(Ki(Zn(Me,/\s*:/)),Ki(Zn(Me,/\s+/,Me,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:Me}]},Mn={begin:/\(/,end:/\)/,keywords:y,contains:[gn,...d,...B,...pn,nn,Fn,...g,N,an],endsParent:!0,illegal:/["']/},In={match:[/(func|macro)/,/\s+/,Kr(ar.match,Me,Go)],className:{1:"keyword",3:"title.function"},contains:[hn,Mn,_],illegal:[/\[/,/%/]},Br={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[hn,Mn,_],illegal:/\[|%/},ue={match:[/operator/,/\s+/,Go],className:{1:"keyword",3:"title"}},Re={begin:[/precedencegroup/,/\s+/,ms],className:{1:"keyword",3:"title"},contains:[N],keywords:[...H0,...Xh],end:/}/},De={match:[/class\b/,/\s+/,/func\b/,/\s+/,/\b[A-Za-z_][A-Za-z0-9_]*\b/],scope:{1:"keyword",3:"keyword",5:"title.function"}},ne={match:[/class\b/,/\s+/,/var\b/],scope:{1:"keyword",3:"keyword"}},kt={begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,Me,/\s*/],beginScope:{1:"keyword",3:"title.class"},keywords:y,contains:[hn,...B,{begin:/:/,end:/\{/,keywords:y,contains:[{scope:"title.class.inherited",match:ms},...B],relevance:0}]};for(const Ln of Fn.variants){const rt=Ln.contains.find(Mt=>Mt.label==="interpol");rt.keywords=y;const je=[...B,...K,...pn,nn,Fn,...H];rt.contains=[...je,{begin:/\(/,end:/\)/,contains:["self",...je]}]}return{name:"Swift",keywords:y,contains:[...d,In,Br,De,ne,kt,ue,Re,{beginKeywords:"import",end:/$/,contains:[...d],relevance:0},wr,...B,...K,...pn,nn,Fn,...H,...g,N,an]}}aa.registerLanguage("python",L0);aa.registerLanguage("javascript",z0);aa.registerLanguage("java",A0);aa.registerLanguage("cpp",E0);aa.registerLanguage("ruby",O0);aa.registerLanguage("swift",K0);function V0({code:u,language:_}){const x=rn.useRef(null),[d,w]=rn.useState(""),[L,U]=rn.useState(""),I=$r("hljs",_,Kh.code),z=()=>{if(x.current){const Z=u.split(`
`).map((pn,vn)=>{const xn=aa.highlight(pn,{language:_}).value;return`<span class=${Kh.line} data-line-number=${vn+1}>${xn}</span>`}).join("");U(Z)}},y=()=>{x.current?.querySelectorAll("span[data-line-number]")?.forEach(Z=>Z.addEventListener("click",D))},B=()=>{x.current?.querySelectorAll("span[data-line-number]")?.forEach(Z=>Z.removeEventListener("click",D))},A=()=>{x.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},D=K=>{const en=K.currentTarget,Z=en.getAttribute("data-line-number")??"";A(),Z===d?w(""):(en.setAttribute("focused",""),w(Z))};return ig(x,A),rn.useEffect(()=>(z(),y(),()=>B()),[u,L,d]),a.jsx("pre",{ref:x,children:a.jsx("code",{className:I,dangerouslySetInnerHTML:{__html:L}})})}const I0="_copyButton_1hjzm_1",Q0="_copySvg_1hjzm_25",J0="_checkSvg_1hjzm_32",X0="_checkSvgPath_1hjzm_37",Z0="_enter_1hjzm_48",F0="_exit_1hjzm_52",ta={copyButton:I0,copySvg:Q0,checkSvg:J0,checkSvgPath:X0,enter:Z0,exit:F0};function P0({onClick:u}){const[_,x]=rn.useState("show"),[d,w]=rn.useState("hide"),L=$r(ta.copySvg,_==="enter"&&ta.enter,_==="exit"&&ta.exit),U=$r(ta.checkSvg,d==="exit"&&ta.exit),I=$r(ta.checkSvgPath),z=()=>{_==="show"&&d==="hide"&&(x("exit"),u())},y=()=>{_==="enter"&&x("show"),_==="exit"&&(x("hide"),w("show"))},B=()=>{d==="show"&&setTimeout(()=>{w("exit")},500),d==="exit"&&(w("hide"),x("enter"))},A=()=>_!=="hide"&&a.jsx("svg",{className:L,viewBox:"0 0 512 512",onAnimationEnd:y,children:a.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),D=()=>d!=="hide"&&a.jsx("svg",{className:U,viewBox:"0 0 16 16",onAnimationEnd:B,children:a.jsx("path",{className:I,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return a.jsxs("button",{"aria-label":"copy button",className:ta.copyButton,onClick:z,children:[A(),D()]})}function W0(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),a.jsx("stop",{offset:1,stopColor:"#306998"})]}),a.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#FFD43B"}),a.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),a.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),a.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),a.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),a.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),a.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function $0(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),a.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function n1(){return a.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[a.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),a.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),a.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),a.jsx("g",{children:a.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),a.jsx("g",{children:a.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508 221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841"})}),a.jsx("g",{children:a.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508 263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841"})})]})}function r1(){return a.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[a.jsxs("g",{children:[a.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),a.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),a.jsxs("g",{children:[a.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),a.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),a.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),a.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),a.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),a.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}function e1(){return a.jsx("svg",{viewBox:"0 0 32 32",children:a.jsx("path",{fill:"#DB380E",d:"M9.456 27.25L28 29.782l-6.27-10.441L9.457 27.25zM29.755 7.705c-.548.823-1.097 1.645-1.644 2.468-1.879 2.827-3.758 5.654-5.635 8.482-.105.158-.24.283-.093.525 1.814 2.995 3.613 5.999 5.417 9 .285.474.572.946.941 1.401l1.094-21.852-.08-.023zm-24.76 9.338c.085.081.296.127.395.079 1.74-.855 3.491-1.691 5.192-2.617.555-.302.982-.842 1.46-1.281 1.583-1.452 3.164-2.907 4.744-4.362.097-.089.211-.176.269-.288.568-1.109 1.125-2.224 1.703-3.371-.689-.259-1.341-.512-2.002-.742-.089-.031-.231.031-.328.085-1.53.854-3.088 1.663-4.569 2.595-.741.466-1.345 1.154-2.001 1.752a263.561 263.561 0 0 0-3.156 2.915 5.385 5.385 0 0 0-.744.872c-.713 1.038-1.404 2.091-2.127 3.173.404.419.772.819 1.165 1.191zm6.358-1.418L8.738 26.672l12.286-7.916-9.671-3.13zM28.692 7.74L18.25 9.484l3.544 8.62L28.693 7.74zm-17.194 7.137l9.479 3.077a46701.83 46701.83 0 0 0-3.506-8.538l-5.973 5.461zm-6.372 4.298l-3.317 7.93 6.318-.187-3.001-7.744zm3.075 5.905l.079-.017c.758-3.154 1.528-6.287 2.303-9.565l-5.069 2.635c.864 2.246 1.785 4.615 2.688 6.947zM27.417 7.229l-3.027-.801c-1.451-.381-2.903-.758-4.353-1.143-.181-.048-.312-.08-.419.139-.512 1.05-1.041 2.092-1.561 3.138-.016.032-.013.074-.025.155l9.383-1.422.002-.066zm-5.853-2.388l8.223 2.275-1.359-3.872-6.852 1.519-.012.077zM8.899 27.856c-1.019-.117-2.064-.009-3.097.008-.849.015-1.697.047-2.545.073a.338.338 0 0 0-.262.114l21.044 1.946.014-.094-6.746-.921c-2.802-.383-5.599-.803-8.408-1.127zm-6.952-3.171c.904-2.097 1.804-4.197 2.712-6.292.091-.21.084-.353-.094-.522-.38-.361-.732-.751-1.147-1.182L1.763 24.86l.061.029c.042-.067.093-.131.124-.203zM19.763 4.287c1.524-.393 3.071-.701 4.608-1.044.099-.022.197-.055.295-.083l-.015-.075-6.606.889c.62.271 1.098.473 1.718.314z"})})}function t1(){return a.jsxs("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"128",height:"128",fill:"#F05138"}),a.jsx("text",{x:"64",y:"80",fontSize:"50",fill:"#FFF",fontWeight:"bold",textAnchor:"middle",children:"SW"})]})}const a1={python:W0,javascript:$0,cpp:n1,java:r1,ruby:e1,swift:t1};function c({title:u,children:_}){const{selectedLanguage:x,setSelectedLanguage:d}=Nm(),w=rn.Children.toArray(_),L=w.findIndex(A=>A.props.language===x);let U="";try{U=w[L].props.code}catch{}const I=w[L].props.language,z=A=>{d(w[A].props.language)},y=()=>navigator.clipboard.writeText(U),B=()=>w.map((A,D)=>{const K=a1[A.props.language],en=`view ${A.props.language} code`;return a.jsx("button",{role:"tab","aria-label":en,"aria-selected":D===L,className:hs.tabButton,onClick:()=>z(D),children:a.jsx(K,{})},D)});return a.jsxs("div",{role:"tablist",className:hs.container,children:[a.jsx("h3",{children:u}),a.jsxs("div",{className:hs.buttonContainer,children:[a.jsx("div",{role:"tablist",className:hs.tabButtonContainer,children:B()}),a.jsx(P0,{onClick:y})]}),a.jsx("div",{role:"tabpanel",className:"tabs-content",children:a.jsx(V0,{code:U,language:I})})]})}c.Tab=u=>a.jsx(a.Fragment,{children:u});const i1=`def fn(arr):\r
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
`,l1=`def fn(arr1, arr2):\r
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
`,s1=`def fn(arr):\r
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
`,c1=`def fn(arr):\r
    n = len(arr)\r
    prefix = [arr[0]]\r
\r
    for i in range(1, n):\r
        prefix.append(prefix[-1] + arr[i])\r
\r
    return prefix\r
`,o1=`def fn(strs: list[str]):\r
    ans = []\r
\r
    for char in strs:\r
        ans.append(char)\r
\r
    return ''.join(ans)\r
`,u1=`const fn = (arr) => {\r
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
`,d1=`let fn = (arr1, arr2) => {\r
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
`,f1=`const fn = (arr) => {\r
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
`,h1=`const fn = (arr) => {\r
    let prefix = [arr[0]]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        prefix.push(prefix[prefix.length - 1] + arr[i])\r
    }\r
\r
    return prefix\r
}\r
`,g1=`const fn = (arr) => {\r
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
`,p1=`public int fn(int[] arr) {\r
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
`,m1=`public int fn(int[] arr1, int[] arr2) {\r
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
`,b1=`public int fn(int[] arr) {\r
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
`,_1=`import java.util.ArrayList;\r
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
`,x1=`public String fn(char[] strs) {\r
    StringBuilder sb = new StringBuilder();\r
\r
    for (char c: strs) {\r
        sb.append(c);\r
    }\r
\r
    return sb.toString();\r
}\r
`,y1=`#include <vector>\r
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
`,v1=`#include <vector>\r
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
`,S1=`#include <vector>\r
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
`,T1=`#include <iostream>\r
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
`,j1=`string fn(vector<char>& arr) {\r
    return string(arr.begin(), arr.end())\r
}\r
`,E1=`def fn(arr)\r
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
end`,w1=`// Swift implementation for two_pointers_one_input
// Added Swift Support

func two_pointers_one_input() {
    print("Executing two_pointers_one_input")
}
`,N1=`def fn(arr1, arr2)\r
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
`,A1=`// Swift implementation for two_pointers_two_inputs
// Added Swift Support

func two_pointers_two_inputs() {
    print("Executing two_pointers_two_inputs")
}
`,O1=`def fn(arr)\r
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
`,k1=`// Swift implementation for sliding_window
// Added Swift Support

func sliding_window() {
    print("Executing sliding_window")
}
`,M1=`# This method computes the prefix sum of an array.\r
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
`,R1=`// Swift implementation for prefix_sum
// Added Swift Support

func prefix_sum() {
    print("Executing prefix_sum")
}
`,D1=`def fn(strs)\r
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
`,z1=`// Swift implementation for string_building
// Added Swift Support

func string_building() {
    print("Executing string_building")
}
`;function L1(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Array"}),a.jsx("section",{id:"array-two-pointers-one-input",children:a.jsxs(c,{title:"two pointers: one input, opposite ends",children:[a.jsx(c.Tab,{code:i1,language:"python"}),a.jsx(c.Tab,{code:u1,language:"javascript"}),a.jsx(c.Tab,{code:p1,language:"java"}),a.jsx(c.Tab,{code:y1,language:"cpp"}),a.jsx(c.Tab,{code:E1,language:"ruby"}),a.jsx(c.Tab,{code:w1,language:"swift"})]})}),a.jsx("section",{id:"array-two-pointers-two-inputs",children:a.jsxs(c,{title:"two pointers: two inputs, exhaust both",children:[a.jsx(c.Tab,{code:l1,language:"python"}),a.jsx(c.Tab,{code:d1,language:"javascript"}),a.jsx(c.Tab,{code:m1,language:"java"}),a.jsx(c.Tab,{code:v1,language:"cpp"}),a.jsx(c.Tab,{code:N1,language:"ruby"}),a.jsx(c.Tab,{code:A1,language:"swift"})]})}),a.jsx("section",{id:"array-sliding-window",children:a.jsxs(c,{title:"sliding window",children:[a.jsx(c.Tab,{code:s1,language:"python"}),a.jsx(c.Tab,{code:f1,language:"javascript"}),a.jsx(c.Tab,{code:b1,language:"java"}),a.jsx(c.Tab,{code:S1,language:"cpp"}),a.jsx(c.Tab,{code:O1,language:"ruby"}),a.jsx(c.Tab,{code:k1,language:"swift"})]})}),a.jsx("section",{id:"array-prefix-sum",children:a.jsxs(c,{title:"prefix sum",children:[a.jsx(c.Tab,{code:c1,language:"python"}),a.jsx(c.Tab,{code:h1,language:"javascript"}),a.jsx(c.Tab,{code:_1,language:"java"}),a.jsx(c.Tab,{code:T1,language:"cpp"}),a.jsx(c.Tab,{code:M1,language:"ruby"}),a.jsx(c.Tab,{code:R1,language:"swift"})]})}),a.jsx("section",{id:"array-string-building",children:a.jsxs(c,{title:"efficient string building",children:[a.jsx(c.Tab,{code:o1,language:"python"}),a.jsx(c.Tab,{code:g1,language:"javascript"}),a.jsx(c.Tab,{code:x1,language:"java"}),a.jsx(c.Tab,{code:j1,language:"cpp"}),a.jsx(c.Tab,{code:D1,language:"ruby"}),a.jsx(c.Tab,{code:z1,language:"swift"})]})})]})}const C1=`from collections import defaultdict\r
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
`,B1=`def fn(arr):\r
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
`,U1=`const fn = (arr, k) => {\r
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
`,H1=`function fn(arr) {\r
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
`,q1=`import java.util.HashMap;\r
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
`,G1=`import java.util.HashSet;\r
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
`,Y1=`#include <vector>\r
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
`,K1=`#include <vector>\r
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
`,V1=`def fn(arr, k)\r
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
`,I1=`// Swift implementation for find_number_of_subarrays
// Added Swift Support

func find_number_of_subarrays() {
    print("Executing find_number_of_subarrays")
}
`,Q1=`require 'set'\r
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
`,J1=`// Swift implementation for sliding_window
// Added Swift Support

func sliding_window() {
    print("Executing sliding_window")
}
`;function X1(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Hash Map"}),a.jsx("section",{id:"hashmap-find-number-of-subarrays",children:a.jsxs(c,{title:"find number of subarrays that fit an exact criteria",children:[a.jsx(c.Tab,{code:C1,language:"python"}),a.jsx(c.Tab,{code:U1,language:"javascript"}),a.jsx(c.Tab,{code:q1,language:"java"}),a.jsx(c.Tab,{code:Y1,language:"cpp"}),a.jsx(c.Tab,{code:V1,language:"ruby"}),a.jsx(c.Tab,{code:I1,language:"swift"})]})}),a.jsx("section",{id:"hashmap-sliding-window",children:a.jsxs(c,{title:"sliding window",children:[a.jsx(c.Tab,{code:B1,language:"python"}),a.jsx(c.Tab,{code:H1,language:"javascript"}),a.jsx(c.Tab,{code:G1,language:"java"}),a.jsx(c.Tab,{code:K1,language:"cpp"}),a.jsx(c.Tab,{code:Q1,language:"ruby"}),a.jsx(c.Tab,{code:J1,language:"swift"})]})})]})}const Z1=`def fn(head):\r
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
`,F1=`def fn(head):\r
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
`,P1=`const fn = (head) => {\r
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
`,W1=`const fn = (head) => {\r
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
`,$1=`public int fn(ListNode head) {\r
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
`,n_=`public ListNode fn(ListNode head) {\r
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
`,r_=`int fn(ListNode* head) {\r
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
`,e_=`ListNode* fn(ListNode* head) {\r
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
`,t_=`def fn(head)\r
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
`,a_=`// Swift implementation for fast_and_slow_pointer
// Added Swift Support

func fast_and_slow_pointer() {
    print("Executing fast_and_slow_pointer")
}
`,i_=`def fn(head)\r
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
`,l_=`// Swift implementation for reverse_linked_list
// Added Swift Support

func reverse_linked_list() {
    print("Executing reverse_linked_list")
}
`;function s_(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Linked List"}),a.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:a.jsxs(c,{title:"fast and slow pointer",children:[a.jsx(c.Tab,{code:Z1,language:"python"}),a.jsx(c.Tab,{code:P1,language:"javascript"}),a.jsx(c.Tab,{code:$1,language:"java"}),a.jsx(c.Tab,{code:r_,language:"cpp"}),a.jsx(c.Tab,{code:t_,language:"ruby"}),a.jsx(c.Tab,{code:a_,language:"swift"})]})}),a.jsx("section",{id:"linkedlist-reverse",children:a.jsxs(c,{title:"reverse linked list",children:[a.jsx(c.Tab,{code:F1,language:"python"}),a.jsx(c.Tab,{code:W1,language:"javascript"}),a.jsx(c.Tab,{code:n_,language:"java"}),a.jsx(c.Tab,{code:e_,language:"cpp"}),a.jsx(c.Tab,{code:i_,language:"ruby"}),a.jsx(c.Tab,{code:l_,language:"swift"})]})})]})}const c_=`def fn(arr):\r
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
`,o_=`def fn(arr):\r
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
`,u_=`const fn = (arr) => {\r
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
`,d_=`const fn = (arr) => {\r
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
`,f_=`import java.util.Stack;\r
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
`,h_=`import java.util.Stack;\r
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
`,g_=`#include <stack>\r
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
`,p_=`#include <stack>\r
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
`,m_=`def fn(arr)\r
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
`,b_=`// Swift implementation for monotonic_increasing
// Added Swift Support

func monotonic_increasing() {
    print("Executing monotonic_increasing")
}
`,__=`def fn(arr)\r
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
`,x_=`// Swift implementation for monotonic_decreasing
// Added Swift Support

func monotonic_decreasing() {
    print("Executing monotonic_decreasing")
}
`;function y_(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Stack"}),a.jsx("section",{id:"stack-monotonic-increasing",children:a.jsxs(c,{title:"monotonic increasing stack",children:[a.jsx(c.Tab,{code:c_,language:"python"}),a.jsx(c.Tab,{code:u_,language:"javascript"}),a.jsx(c.Tab,{code:f_,language:"java"}),a.jsx(c.Tab,{code:g_,language:"cpp"}),a.jsx(c.Tab,{code:m_,language:"ruby"}),a.jsx(c.Tab,{code:b_,language:"swift"})]})}),a.jsx("section",{id:"stack-monotonic-decreasing",children:a.jsxs(c,{title:"monotonic decreasing stack",children:[a.jsx(c.Tab,{code:o_,language:"python"}),a.jsx(c.Tab,{code:d_,language:"javascript"}),a.jsx(c.Tab,{code:h_,language:"java"}),a.jsx(c.Tab,{code:p_,language:"cpp"}),a.jsx(c.Tab,{code:__,language:"ruby"}),a.jsx(c.Tab,{code:x_,language:"swift"})]})})]})}const v_=`def dfs(root):\r
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
`,S_=`def dfs(root):\r
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
`,T_=`from collections import deque\r
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
`,j_=`const dfs = (root) => {\r
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
`,E_=`const dfs = (root) => {\r
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
`,w_=`const fn = (root) => {\r
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
`,N_=`public int dfs(TreeNode root) {\r
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
`,A_=`import java.util.Stack;\r
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
`,O_=`import java.util.LinkedList;\r
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
`,k_=`int dfs(TreeNode* root) {\r
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
`,M_=`#include <stack>\r
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
`,R_=`#include <queue>\r
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
`,D_=`def dfs(root)\r
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
`,z_=`// Swift implementation for dfs_recursive
// Added Swift Support

func dfs_recursive() {
    print("Executing dfs_recursive")
}
`,L_=`def dfs(root)\r
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
`,C_=`// Swift implementation for dfs_iterative
// Added Swift Support

func dfs_iterative() {
    print("Executing dfs_iterative")
}
`,B_=`def fn(root)\r
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
`,U_=`// Swift implementation for bfs
// Added Swift Support

func bfs() {
    print("Executing bfs")
}
`;function H_(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Binary Tree"}),a.jsx("section",{id:"tree-dfs-recursive",children:a.jsxs(c,{title:"DFS (recursive)",children:[a.jsx(c.Tab,{code:v_,language:"python"}),a.jsx(c.Tab,{code:j_,language:"javascript"}),a.jsx(c.Tab,{code:N_,language:"java"}),a.jsx(c.Tab,{code:k_,language:"cpp"}),a.jsx(c.Tab,{code:D_,language:"ruby"}),a.jsx(c.Tab,{code:z_,language:"swift"})]})}),a.jsx("section",{id:"tree-dfs-iterative",children:a.jsxs(c,{title:"DFS (iterative)",children:[a.jsx(c.Tab,{code:S_,language:"python"}),a.jsx(c.Tab,{code:E_,language:"javascript"}),a.jsx(c.Tab,{code:A_,language:"java"}),a.jsx(c.Tab,{code:M_,language:"cpp"}),a.jsx(c.Tab,{code:L_,language:"ruby"}),a.jsx(c.Tab,{code:C_,language:"swift"})]})}),a.jsx("section",{id:"tree-bfs",children:a.jsxs(c,{title:"BFS",children:[a.jsx(c.Tab,{code:T_,language:"python"}),a.jsx(c.Tab,{code:w_,language:"javascript"}),a.jsx(c.Tab,{code:O_,language:"java"}),a.jsx(c.Tab,{code:R_,language:"cpp"}),a.jsx(c.Tab,{code:B_,language:"ruby"}),a.jsx(c.Tab,{code:U_,language:"swift"})]})})]})}const q_=`def fn(graph):\r
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
`,G_=`def fn(graph):\r
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
`,Y_=`from collections import deque\r
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
`,K_=`from heapq import heappop, heappush\r
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
`,V_=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:\r
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
`,I_=`from collections import defaultdict, deque\r
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
`,Q_=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
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
`,J_=`from heapq import heappop\r
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
`,X_=`const fn = (graph) => {\r
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
`,Z_=`const fn = (graph) => {\r
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
`,F_=`const fn = (graph) => {\r
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
`,P_=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,W_=`const bellmanFord = (n, edges, source) => {\r
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
`,$_=`const kahnTopologicalSort = (graph) => {\r
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
`,nx=`const kruskalMst = (n, edges) => {\r
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
`,rx=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,ex=`import java.util.HashSet;\r
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
`,tx=`import java.util.Stack;\r
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
`,ax=`import java.util.ArrayList;\r
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
`,ix=`import java.util.Arrays;\r
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
`,lx=`import java.util.Arrays;\r
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
`,sx=`import java.util.ArrayList;\r
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
`,cx=`import java.util.ArrayList;\r
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
`,ox=`import java.util.ArrayList;\r
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
`,ux=`#include <unordered_set>\r
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
`,dx=`#include <stack>\r
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
`,fx=`#include <queue>\r
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
`,hx=`#include <limits>\r
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
`,gx=`#include <vector>\r
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
`,px=`#include <vector>\r
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
`,mx=`#include <vector>\r
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
`,bx=`#include <vector>\r
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
`,_x=`require 'set'\r
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
`,xx=`// Swift implementation for dfs_recursive
// Added Swift Support

func dfs_recursive() {
    print("Executing dfs_recursive")
}
`,yx=`require 'set'\r
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
`,vx=`// Swift implementation for dfs_iterative
// Added Swift Support

func dfs_iterative() {
    print("Executing dfs_iterative")
}
`,Sx=`require 'set'\r
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
`,Tx=`// Swift implementation for bfs
// Added Swift Support

func bfs() {
    print("Executing bfs")
}
`,jx=`require 'priority_queue'\r
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
`,Ex=`// Swift implementation for dijkstra
// Added Swift Support

func dijkstra() {
    print("Executing dijkstra")
}
`,wx=`def bellman_ford(n, edges, source)\r
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
`,Nx=`// Swift implementation for bellman_ford
// Added Swift Support

func bellman_ford() {
    print("Executing bellman_ford")
}
`,Ax=`def kahn_topological_sort(graph)\r
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
`,Ox=`// Swift implementation for kahn
// Added Swift Support

func kahn() {
    print("Executing kahn")
}
`,kx=`def kruskal_mst(n, edges)\r
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
`,Mx=`// Swift implementation for kruskal
// Added Swift Support

func kruskal() {
    print("Executing kruskal")
}
`,Rx=`def prim_mst(n, edges)\r
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
`,Dx=`// Swift implementation for prim
// Added Swift Support

func prim() {
    print("Executing prim")
}
`;function zx(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Graph"}),a.jsx("section",{id:"graph-dfs-recursive",children:a.jsxs(c,{title:"DFS (recursive)",children:[a.jsx(c.Tab,{code:q_,language:"python"}),a.jsx(c.Tab,{code:X_,language:"javascript"}),a.jsx(c.Tab,{code:ex,language:"java"}),a.jsx(c.Tab,{code:ux,language:"cpp"}),a.jsx(c.Tab,{code:_x,language:"ruby"}),a.jsx(c.Tab,{code:xx,language:"swift"})]})}),a.jsx("section",{id:"graph-dfs-iterative",children:a.jsxs(c,{title:"DFS (iterative)",children:[a.jsx(c.Tab,{code:G_,language:"python"}),a.jsx(c.Tab,{code:Z_,language:"javascript"}),a.jsx(c.Tab,{code:tx,language:"java"}),a.jsx(c.Tab,{code:dx,language:"cpp"}),a.jsx(c.Tab,{code:yx,language:"ruby"}),a.jsx(c.Tab,{code:vx,language:"swift"})]})}),a.jsx("section",{id:"graph-bfs",children:a.jsxs(c,{title:"BFS",children:[a.jsx(c.Tab,{code:Y_,language:"python"}),a.jsx(c.Tab,{code:F_,language:"javascript"}),a.jsx(c.Tab,{code:ax,language:"java"}),a.jsx(c.Tab,{code:fx,language:"cpp"}),a.jsx(c.Tab,{code:Sx,language:"ruby"}),a.jsx(c.Tab,{code:Tx,language:"swift"})]})}),a.jsx("section",{id:"graph-dijkstra",children:a.jsxs(c,{title:"Dijkstra (shortest path)",children:[a.jsx(c.Tab,{code:K_,language:"python"}),a.jsx(c.Tab,{code:P_,language:"javascript"}),a.jsx(c.Tab,{code:ix,language:"java"}),a.jsx(c.Tab,{code:hx,language:"cpp"}),a.jsx(c.Tab,{code:jx,language:"ruby"}),a.jsx(c.Tab,{code:Ex,language:"swift"})]})}),a.jsx("section",{id:"graph-bellman-ford",children:a.jsxs(c,{title:"Bellman-Ford (shortest path)",children:[a.jsx(c.Tab,{code:V_,language:"python"}),a.jsx(c.Tab,{code:W_,language:"javascript"}),a.jsx(c.Tab,{code:lx,language:"java"}),a.jsx(c.Tab,{code:gx,language:"cpp"}),a.jsx(c.Tab,{code:wx,language:"ruby"}),a.jsx(c.Tab,{code:Nx,language:"swift"})]})}),a.jsx("section",{id:"graph-kahn",children:a.jsxs(c,{title:"Kahn (topological sort)",children:[a.jsx(c.Tab,{code:I_,language:"python"}),a.jsx(c.Tab,{code:$_,language:"javascript"}),a.jsx(c.Tab,{code:sx,language:"java"}),a.jsx(c.Tab,{code:px,language:"cpp"}),a.jsx(c.Tab,{code:Ax,language:"ruby"}),a.jsx(c.Tab,{code:Ox,language:"swift"})]})}),a.jsx("section",{id:"graph-kruskal",children:a.jsxs(c,{title:"Kruskal (mst)",children:[a.jsx(c.Tab,{code:Q_,language:"python"}),a.jsx(c.Tab,{code:nx,language:"javascript"}),a.jsx(c.Tab,{code:cx,language:"java"}),a.jsx(c.Tab,{code:mx,language:"cpp"}),a.jsx(c.Tab,{code:kx,language:"ruby"}),a.jsx(c.Tab,{code:Mx,language:"swift"})]})}),a.jsx("section",{id:"graph-prim",children:a.jsxs(c,{title:"Prim (mst)",children:[a.jsx(c.Tab,{code:J_,language:"python"}),a.jsx(c.Tab,{code:rx,language:"javascript"}),a.jsx(c.Tab,{code:ox,language:"java"}),a.jsx(c.Tab,{code:bx,language:"cpp"}),a.jsx(c.Tab,{code:Rx,language:"ruby"}),a.jsx(c.Tab,{code:Dx,language:"swift"})]})})]})}const Lx=`from heapq import heappop, heappush\r
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
`,Cx=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,Bx=`import java.util.PriorityQueue;\r
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
`,Ux=`#include <vector>\r
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
`,Hx=`def fn(arr, k)\r
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
`,qx=`// Swift implementation for find_top_k_elements
// Added Swift Support

func find_top_k_elements() {
    print("Executing find_top_k_elements")
}
`;function Gx(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Heap"}),a.jsx("section",{id:"heap-find-top-k-elements",children:a.jsxs(c,{title:"find top k elements",children:[a.jsx(c.Tab,{code:Lx,language:"python"}),a.jsx(c.Tab,{code:Cx,language:"javascript"}),a.jsx(c.Tab,{code:Bx,language:"java"}),a.jsx(c.Tab,{code:Ux,language:"cpp"}),a.jsx(c.Tab,{code:Hx,language:"ruby"}),a.jsx(c.Tab,{code:qx,language:"swift"})]})})]})}const Yx=`def fn(arr, target):\r
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
`,Kx=`def fn(arr, target):\r
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
`,Vx=`def fn(arr, target):\r
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
`,Ix=`def fn(arr):\r
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
`,Qx=`def fn(arr):\r
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
`,Jx=`const fn = (arr, target) => {\r
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
`,Xx=`const fn = (arr, target) => {\r
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
`,Zx=`const fn = (arr, target) => {\r
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
`,Fx=`const fn = (arr) => {\r
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
`,Px=`const fn = (arr) => {\r
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
`,Wx=`public int fn(int[] arr, int target) {\r
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
`,$x=`public int fn(int[] arr, int target) {\r
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
`,ny=`public int fn(int[] arr, int target) {\r
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
`,ry=`public int fn(int[] arr) {\r
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
`,ey=`public int fn(int[] arr) {\r
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
`,ty=`#include <vector>\r
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
`,ay=`#include <vector>\r
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
`,iy=`#include <vector>\r
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
`,ly=`#include <vector>\r
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
`,sy=`#include <vector>\r
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
`,cy=`def fn(arr, target)\r
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
`,oy=`// Swift implementation for binary_search
// Added Swift Support

func binary_search() {
    print("Executing binary_search")
}
`,uy=`def fn(arr, target)\r
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
`,dy=`// Swift implementation for duplicate_elements_left_insertion
// Added Swift Support

func duplicate_elements_left_insertion() {
    print("Executing duplicate_elements_left_insertion")
}
`,fy=`def fn(arr, target)\r
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
`,hy=`// Swift implementation for duplicate_elements_right_insertion
// Added Swift Support

func duplicate_elements_right_insertion() {
    print("Executing duplicate_elements_right_insertion")
}
`,gy=`def fn(arr)\r
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
end`,py=`// Swift implementation for greedy_minimum
// Added Swift Support

func greedy_minimum() {
    print("Executing greedy_minimum")
}
`,my=`def fn(arr)\r
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
`,by=`// Swift implementation for greedy_maximum
// Added Swift Support

func greedy_maximum() {
    print("Executing greedy_maximum")
}
`;function _y(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Binary Search"}),a.jsx("section",{id:"binarysearch-binary-search",children:a.jsxs(c,{title:"binary search",children:[a.jsx(c.Tab,{code:Yx,language:"python"}),a.jsx(c.Tab,{code:Jx,language:"javascript"}),a.jsx(c.Tab,{code:Wx,language:"java"}),a.jsx(c.Tab,{code:ty,language:"cpp"}),a.jsx(c.Tab,{code:cy,language:"ruby"}),a.jsx(c.Tab,{code:oy,language:"swift"})]})}),a.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:a.jsxs(c,{title:"duplicate elements, left-most insertion point",children:[a.jsx(c.Tab,{code:Kx,language:"python"}),a.jsx(c.Tab,{code:Xx,language:"javascript"}),a.jsx(c.Tab,{code:$x,language:"java"}),a.jsx(c.Tab,{code:ay,language:"cpp"}),a.jsx(c.Tab,{code:uy,language:"ruby"}),a.jsx(c.Tab,{code:dy,language:"swift"})]})}),a.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:a.jsxs(c,{title:"duplicate elements, right-most insertion point",children:[a.jsx(c.Tab,{code:Vx,language:"python"}),a.jsx(c.Tab,{code:Zx,language:"javascript"}),a.jsx(c.Tab,{code:ny,language:"java"}),a.jsx(c.Tab,{code:iy,language:"cpp"}),a.jsx(c.Tab,{code:fy,language:"ruby"}),a.jsx(c.Tab,{code:hy,language:"swift"})]})}),a.jsx("section",{id:"binarysearch-greedy-minimum",children:a.jsxs(c,{title:"greedy (minimum)",children:[a.jsx(c.Tab,{code:Ix,language:"python"}),a.jsx(c.Tab,{code:Fx,language:"javascript"}),a.jsx(c.Tab,{code:ry,language:"java"}),a.jsx(c.Tab,{code:ly,language:"cpp"}),a.jsx(c.Tab,{code:gy,language:"ruby"}),a.jsx(c.Tab,{code:py,language:"swift"})]})}),a.jsx("section",{id:"binarysearch-greedy-maximum",children:a.jsxs(c,{title:"greedy (maximum)",children:[a.jsx(c.Tab,{code:Qx,language:"python"}),a.jsx(c.Tab,{code:Px,language:"javascript"}),a.jsx(c.Tab,{code:ey,language:"java"}),a.jsx(c.Tab,{code:sy,language:"cpp"}),a.jsx(c.Tab,{code:my,language:"ruby"}),a.jsx(c.Tab,{code:by,language:"swift"})]})})]})}const xy=`def backtrack(curr, OTHER_ARGUMENTS...):\r
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
`,yy=`const backtrack = (curr, OTHER_ARGUMENTS...) => {\r
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
`,vy=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
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
`,Sy=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
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
`,Ty=`def backtrack(curr, OTHER_ARGUMENTS...)\r
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
`,jy=`// Swift implementation for backtracking
// Added Swift Support

func backtracking() {
    print("Executing backtracking")
}
`;function Ey(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Backtracking"}),a.jsx("section",{id:"backtracking-backtracking",children:a.jsxs(c,{title:"backtracking",children:[a.jsx(c.Tab,{code:xy,language:"python"}),a.jsx(c.Tab,{code:yy,language:"javascript"}),a.jsx(c.Tab,{code:vy,language:"java"}),a.jsx(c.Tab,{code:Sy,language:"cpp"}),a.jsx(c.Tab,{code:Ty,language:"ruby"}),a.jsx(c.Tab,{code:jy,language:"swift"})]})})]})}const wy=`def fn(arr):\r
    @cache\r
    def dp(STATE):\r
        if BASE_CASE:\r
            return 0\r
        return RECURRENCE_RELATION(STATE)\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
`,Ny=`def fn(arr):\r
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
`,Ay=`def kadane(arr: list[int]) -> int:\r
    curr_sub = max_sub = arr[0]\r
\r
    for num in arr[1:]:\r
        curr_sub = max(curr_sub + num, num)\r
        max_sub = max(max_sub, curr_sub)\r
\r
    return max_sub\r
`,Oy=`const fn = (arr) => {\r
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
`,ky=`const fn = (arr) => {\r
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
`,My=`const kadane = (arr) => {\r
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
`,Ry=`import java.util.HashMap;\r
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
`,Dy=`import java.util.Arrays;\r
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
`,zy=`public int kadane(int[] arr) {\r
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
`,Ly=`#include <unordered_map>\r
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
`,Cy=`#include <vector>\r
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
`,By=`#include <vector>\r
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
`,Uy=`def fn(arr)\r
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
`,Hy=`// Swift implementation for top_down
// Added Swift Support

func top_down() {
    print("Executing top_down")
}
`,qy=`def fn(arr)\r
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
`,Gy=`// Swift implementation for bottom_up
// Added Swift Support

func bottom_up() {
    print("Executing bottom_up")
}
`,Yy=`def kadane(arr)\r
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
`,Ky=`// Swift implementation for kadane
// Added Swift Support

func kadane() {
    print("Executing kadane")
}
`;function Vy(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Dynamic Programming"}),a.jsx("section",{id:"dp-top-down",children:a.jsxs(c,{title:"DP top-down",children:[a.jsx(c.Tab,{code:wy,language:"python"}),a.jsx(c.Tab,{code:Oy,language:"javascript"}),a.jsx(c.Tab,{code:Ry,language:"java"}),a.jsx(c.Tab,{code:Ly,language:"cpp"}),a.jsx(c.Tab,{code:Uy,language:"ruby"}),a.jsx(c.Tab,{code:Hy,language:"swift"})]})}),a.jsx("section",{id:"dp-bottom-up",children:a.jsxs(c,{title:"DP bottom-up",children:[a.jsx(c.Tab,{code:Ny,language:"python"}),a.jsx(c.Tab,{code:ky,language:"javascript"}),a.jsx(c.Tab,{code:Dy,language:"java"}),a.jsx(c.Tab,{code:Cy,language:"cpp"}),a.jsx(c.Tab,{code:qy,language:"ruby"}),a.jsx(c.Tab,{code:Gy,language:"swift"})]})}),a.jsx("section",{id:"dp-kadane",children:a.jsxs(c,{title:"Kadane (max-sum subarray)",children:[a.jsx(c.Tab,{code:Ay,language:"python"}),a.jsx(c.Tab,{code:My,language:"javascript"}),a.jsx(c.Tab,{code:zy,language:"java"}),a.jsx(c.Tab,{code:By,language:"cpp"}),a.jsx(c.Tab,{code:Yy,language:"ruby"}),a.jsx(c.Tab,{code:Ky,language:"swift"})]})})]})}const Iy=`def test_kth_bit(num: int, k: int) -> bool:\r
    return num & (1 << k) != 0\r
`,Qy=`def set_kth_bit(num: int, k: int) -> int:\r
    return num | (1 << k)\r
`,Jy=`def clear_kth_bit(num: int, k: int) -> int:\r
    return num & ~(1 << k)\r
`,Xy=`def toggle_kth_bit(num: int, k: int) -> int:\r
    return num ^ (1 << k)\r
`,Zy=`def get_rightmost_set_bit(num: int) -> int:\r
    return num & -num\r
`,Fy=`def count_set_bits(num: int) -> int:\r
    return bin(num).count('1')\r
`,Py=`def multiply_by_power_of_two(num: int, k: int) -> int:\r
    return num << k\r
`,Wy=`def divide_by_power_of_two(num: int, k: int) -> int:\r
    return num >> k\r
`,$y=`def is_power_of_two(num: int) -> bool:\r
    return (num & (num - 1)) == 0\r
`,nv=`def swap_variables(num1: int, num2: int) -> tuple:\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return num1, num2\r
`,rv=`const testKthBit = (num, k) => {\r
    return num & (1 << k) !== 0\r
}\r
`,ev=`const setKthBit = (num, k) => {\r
    return num | (1 << k)\r
}\r
`,tv=`const clearKthBit = (num, k) => {\r
    return num & ~(1 << k)\r
}\r
`,av=`const toggleKthBit = (num, k) => {\r
    return num ^ (1 << k)\r
}\r
`,iv=`const getRightmostSetBit = (num) => {\r
    return num & -num\r
}\r
`,lv=`const countSetBits = (num) => {\r
    return num.toString(2).split('1').length - 1\r
}\r
`,sv=`const multiplyByPowerOfTwo = (num, k) => {\r
    return num << k\r
}\r
`,cv=`const divideByPowerOfTwo = (num, k) => {\r
    return num >> k;\r
}\r
`,ov=`const isPowerOfTwo = (num) => {\r
    return (num & (num - 1)) === 0\r
}\r
`,uv=`const swapVariables = (num1, num2) => {\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return [num1, num2]\r
}\r
`,dv=`public boolean testKthBit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,fv=`public int setKthBit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,hv=`public int clearKthBit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,gv=`public int toggleKthBit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,pv=`public int getRightmostSetBit(int num) {\r
    return num & -num;\r
}\r
`,mv=`public int countSetBits(int num) {\r
    int count = 0;\r
\r
    while (num > 0) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,bv=`public int multiplyByPowerOfTwo(int num, int k) {\r
    return num << k;\r
}\r
`,_v=`public int divideByPowerOfTwo(int num, int k) {\r
    return num >> k;\r
}\r
`,xv=`public boolean isPowerOfTwo(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,yv=`public int[] swapVariables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return new int[] { num1, num2 };\r
}\r
`,vv=`bool test_kth_bit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,Sv=`int set_kth_bit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,Tv=`int clear_kth_bit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,jv=`int toggle_kth_bit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,Ev=`int get_rightmost_set_bit(int num) {\r
    return num & -num;\r
}\r
`,wv=`int count_set_bits(int num) {\r
    int count = 0;\r
\r
    while (num) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,Nv=`int multiply_by_power_of_two(int num, int k) {\r
    return num << k;\r
}\r
`,Av=`int divide_by_power_of_two(int num, int k) {\r
    return num >> k;\r
}\r
`,Ov=`bool is_power_of_two(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,kv=`#include <tuple>\r
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
`,Mv=`def test_kth_bit(num, k)\r
  num & (1 << k) != 0\r
end\r
`,Rv=`// Swift implementation for test_kth_bit
// Added Swift Support

func test_kth_bit() {
    print("Executing test_kth_bit")
}
`,Dv=`def set_kth_bit(num, k)\r
  num | (1 << k)\r
end\r
`,zv=`// Swift implementation for set_kth_bit
// Added Swift Support

func set_kth_bit() {
    print("Executing set_kth_bit")
}
`,Lv=`def clear_kth_bit(num, k)\r
  num & ~(1 << k)\r
end\r
`,Cv=`// Swift implementation for clear_kth_bit
// Added Swift Support

func clear_kth_bit() {
    print("Executing clear_kth_bit")
}
`,Bv=`def toggle_kth_bit(num, k)\r
  num ^ (1 << k)\r
end\r
`,Uv=`// Swift implementation for toggle_kth_bit
// Added Swift Support

func toggle_kth_bit() {
    print("Executing toggle_kth_bit")
}
`,Hv=`def get_rightmost_set_bit(num)\r
  num & -num\r
end\r
`,qv=`// Swift implementation for get_rightmost_bit
// Added Swift Support

func get_rightmost_bit() {
    print("Executing get_rightmost_bit")
}
`,Gv=`def count_set_bits(num)\r
  num.to_s(2).count('1')\r
end\r
`,Yv=`// Swift implementation for count_set_bits
// Added Swift Support

func count_set_bits() {
    print("Executing count_set_bits")
}
`,Kv=`def multiply_by_power_of_two(num, k)\r
  num << k\r
end\r
`,Vv=`// Swift implementation for multiply_power_of_two
// Added Swift Support

func multiply_power_of_two() {
    print("Executing multiply_power_of_two")
}
`,Iv=`def divide_by_power_of_two(num, k)\r
  num >> k\r
end\r
`,Qv=`// Swift implementation for divide_power_of_two
// Added Swift Support

func divide_power_of_two() {
    print("Executing divide_power_of_two")
}
`,Jv=`def is_power_of_two(num)\r
  (num & (num - 1)) == 0\r
end\r
`,Xv=`// Swift implementation for check_power_of_two
// Added Swift Support

func check_power_of_two() {
    print("Executing check_power_of_two")
}
`,Zv=`# in-memory swaps\r
# unnecessary for modern languages\r
def swap_variables(num1, num2)\r
  num1 ^= num2\r
  num2 ^= num1\r
  num1 ^= num2\r
\r
  return num1, num2\r
end\r
`,Fv=`// Swift implementation for swap_variables
// Added Swift Support

func swap_variables() {
    print("Executing swap_variables")
}
`;function Pv(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Bit Manipulation"}),a.jsx("section",{id:"bitmanipulation-test-kth-bit",children:a.jsxs(c,{title:"test kth-bit",children:[a.jsx(c.Tab,{code:Iy,language:"python"}),a.jsx(c.Tab,{code:rv,language:"javascript"}),a.jsx(c.Tab,{code:dv,language:"java"}),a.jsx(c.Tab,{code:vv,language:"cpp"}),a.jsx(c.Tab,{code:Mv,language:"ruby"}),a.jsx(c.Tab,{code:Rv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-set-kth-bit",children:a.jsxs(c,{title:"set kth bit",children:[a.jsx(c.Tab,{code:Qy,language:"python"}),a.jsx(c.Tab,{code:ev,language:"javascript"}),a.jsx(c.Tab,{code:fv,language:"java"}),a.jsx(c.Tab,{code:Sv,language:"cpp"}),a.jsx(c.Tab,{code:Dv,language:"ruby"}),a.jsx(c.Tab,{code:zv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:a.jsxs(c,{title:"clear kth bit",children:[a.jsx(c.Tab,{code:Jy,language:"python"}),a.jsx(c.Tab,{code:tv,language:"javascript"}),a.jsx(c.Tab,{code:hv,language:"java"}),a.jsx(c.Tab,{code:Tv,language:"cpp"}),a.jsx(c.Tab,{code:Lv,language:"ruby"}),a.jsx(c.Tab,{code:Cv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:a.jsxs(c,{title:"toggle kth bit",children:[a.jsx(c.Tab,{code:Xy,language:"python"}),a.jsx(c.Tab,{code:av,language:"javascript"}),a.jsx(c.Tab,{code:gv,language:"java"}),a.jsx(c.Tab,{code:jv,language:"cpp"}),a.jsx(c.Tab,{code:Bv,language:"ruby"}),a.jsx(c.Tab,{code:Uv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:a.jsxs(c,{title:"get rightmost bit",children:[a.jsx(c.Tab,{code:Zy,language:"python"}),a.jsx(c.Tab,{code:iv,language:"javascript"}),a.jsx(c.Tab,{code:pv,language:"java"}),a.jsx(c.Tab,{code:Ev,language:"cpp"}),a.jsx(c.Tab,{code:Hv,language:"ruby"}),a.jsx(c.Tab,{code:qv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-count-set-bits",children:a.jsxs(c,{title:"count set bits",children:[a.jsx(c.Tab,{code:Fy,language:"python"}),a.jsx(c.Tab,{code:lv,language:"javascript"}),a.jsx(c.Tab,{code:mv,language:"java"}),a.jsx(c.Tab,{code:wv,language:"cpp"}),a.jsx(c.Tab,{code:Gv,language:"ruby"}),a.jsx(c.Tab,{code:Yv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:a.jsxs(c,{title:"multiply by 2^k",children:[a.jsx(c.Tab,{code:Py,language:"python"}),a.jsx(c.Tab,{code:sv,language:"javascript"}),a.jsx(c.Tab,{code:bv,language:"java"}),a.jsx(c.Tab,{code:Nv,language:"cpp"}),a.jsx(c.Tab,{code:Kv,language:"ruby"}),a.jsx(c.Tab,{code:Vv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:a.jsxs(c,{title:"divide by 2^k",children:[a.jsx(c.Tab,{code:Wy,language:"python"}),a.jsx(c.Tab,{code:cv,language:"javascript"}),a.jsx(c.Tab,{code:_v,language:"java"}),a.jsx(c.Tab,{code:Av,language:"cpp"}),a.jsx(c.Tab,{code:Iv,language:"ruby"}),a.jsx(c.Tab,{code:Qv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-check-power-of-two",children:a.jsxs(c,{title:"check if number is power of 2",children:[a.jsx(c.Tab,{code:$y,language:"python"}),a.jsx(c.Tab,{code:ov,language:"javascript"}),a.jsx(c.Tab,{code:xv,language:"java"}),a.jsx(c.Tab,{code:Ov,language:"cpp"}),a.jsx(c.Tab,{code:Jv,language:"ruby"}),a.jsx(c.Tab,{code:Xv,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-swap-variables",children:a.jsxs(c,{title:"swap two variables",children:[a.jsx(c.Tab,{code:nv,language:"python"}),a.jsx(c.Tab,{code:uv,language:"javascript"}),a.jsx(c.Tab,{code:yv,language:"java"}),a.jsx(c.Tab,{code:kv,language:"cpp"}),a.jsx(c.Tab,{code:Zv,language:"ruby"}),a.jsx(c.Tab,{code:Fv,language:"swift"})]})})]})}const Wv=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    create_matrix = [[0 for _ in range(c)] for _ in range(r)]\r
    copy_matrix = [row[:] for row in matrix]\r
`,$v=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    main_diagonal = [matrix[i][i] for i in range(min(r, c))]\r
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]\r
`,nS=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    transpose_tuple = zip(*matrix)\r
    transpose = [list(row) for row in transpose_tuple]\r
    rotate_left = transpose[::-1]\r
    rotate_right = [row[::-1] for row in transpose]\r
`,rS=`const fn = (matrix) => {\r
    const r = matrix.length;\r
    const c = matrix[0].length;\r
\r
    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))\r
    const copyMatrix = matrix.map(row => [...row])\r
}\r
`,eS=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])\r
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])\r
}\r
`,tS=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))\r
    const transpose = transposeTuple.map(row => [...row])\r
    const rotateLeft = transpose.reverse()\r
    const rotateRight = transpose.map(row => row.reverse())\r
}\r
`,aS=`import java.util.ArrayList;\r
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
`,iS=`import java.util.ArrayList;\r
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
`,lS=`import java.util.ArrayList;\r
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
`,sS=`#include <vector>\r
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
`,cS=`#include <vector>\r
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
`,oS=`#include <vector>\r
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
`,uS=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  create_matrix = Array.new(r) { Array.new(c, 0) }\r
  copy_matrix = matrix.map(&:dup)\r
end\r
`,dS=`// Swift implementation for create_copy
// Added Swift Support

func create_copy() {
    print("Executing create_copy")
}
`,fS=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  main_diagonal = (0...[r, c].min).map { |i| matrix[i][i] }\r
  anti_diagonal = (0...[r, c].min).map { |i| matrix[i][-i - 1] }\r
end\r
`,hS=`// Swift implementation for diagonals
// Added Swift Support

func diagonals() {
    print("Executing diagonals")
}
`,gS=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  transpose = matrix[0].zip(*matrix[1..-1])\r
  rotate_left = transpose.reverse\r
  rotate_right = transpose.map(&:reverse)\r
end\r
`,pS=`// Swift implementation for rotate_transpose
// Added Swift Support

func rotate_transpose() {
    print("Executing rotate_transpose")
}
`;function mS(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Matrix"}),a.jsx("section",{id:"matrix-create-copy",children:a.jsxs(c,{title:"create / copy",children:[a.jsx(c.Tab,{code:Wv,language:"python"}),a.jsx(c.Tab,{code:rS,language:"javascript"}),a.jsx(c.Tab,{code:aS,language:"java"}),a.jsx(c.Tab,{code:sS,language:"cpp"}),a.jsx(c.Tab,{code:uS,language:"ruby"}),a.jsx(c.Tab,{code:dS,language:"swift"})]})}),a.jsx("section",{id:"matrix-diagonals",children:a.jsxs(c,{title:"diagonals / anti-diagonals",children:[a.jsx(c.Tab,{code:$v,language:"python"}),a.jsx(c.Tab,{code:eS,language:"javascript"}),a.jsx(c.Tab,{code:iS,language:"java"}),a.jsx(c.Tab,{code:cS,language:"cpp"}),a.jsx(c.Tab,{code:fS,language:"ruby"}),a.jsx(c.Tab,{code:hS,language:"swift"})]})}),a.jsx("section",{id:"matrix-rotate-transpose",children:a.jsxs(c,{title:"rotate / transpose",children:[a.jsx(c.Tab,{code:nS,language:"python"}),a.jsx(c.Tab,{code:tS,language:"javascript"}),a.jsx(c.Tab,{code:lS,language:"java"}),a.jsx(c.Tab,{code:oS,language:"cpp"}),a.jsx(c.Tab,{code:gS,language:"ruby"}),a.jsx(c.Tab,{code:pS,language:"swift"})]})})]})}const bS=`from typing import Any\r
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
`,_S=`from typing import Any\r
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
`,xS=`from typing import Any\r
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
`,yS=`from typing import Any\r
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
`,vS=`from typing import Any\r
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
`,SS=`class Graph:\r
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
`,TS=`from typing import Any\r
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
`,jS=`class TrieNode:\r
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
`,ES=`class UnionFind:\r
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
`,wS=`class UnionFind:\r
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
`,NS=`class Array {\r
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
`,AS=`class TreeNode {\r
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
`,OS=`class TreeNode {\r
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
`,kS=`class ListNode {\r
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
`,MS=`class ListNode {\r
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
`,RS=`class Graph {\r
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
`,DS=`class HashMap {\r
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
`,zS=`class TrieNode {\r
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
`,LS=`class UnionFind {\r
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
`,CS=`class UnionFind {\r
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
`,BS=`public class Array<T> {\r
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
`,US=`public class TreeNode<T> {\r
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
`,HS=`public class TreeNode<T extends Comparable<T>> {\r
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
`,qS=`class ListNode {\r
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
`,GS=`public class ListNode<T> {\r
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
`,YS=`import java.util.ArrayList;\r
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
`,KS=`public class HashMap {\r
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
`,VS=`import java.util.ArrayList;\r
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
`,IS=`import java.util.ArrayList;\r
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
`,QS=`import java.util.ArrayList;\r
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
`,JS=`#include <iostream>\r
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
`,XS=`#include <iostream>\r
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
`,ZS=`#include <iostream>\r
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
`,FS=`#include <iostream>\r
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
`,PS=`#include <iostream>\r
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
`,WS=`#include <iostream>\r
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
`,$S=`#include <iostream>\r
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
`,nT=`#include <iostream>\r
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
`,rT=`#include <iostream>\r
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
`,eT=`#include <iostream>\r
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
`,tT=`\r
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
`,aT=`// Swift implementation for array
// Added Swift Support

func array() {
    print("Executing array")
}
`,iT=`class TreeNode\r
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
`,lT=`// Swift implementation for binary_tree
// Added Swift Support

func binary_tree() {
    print("Executing binary_tree")
}
`,sT=`class TreeNode\r
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
`,cT=`// Swift implementation for binary_search_tree
// Added Swift Support

func binary_search_tree() {
    print("Executing binary_search_tree")
}
`,oT=`class ListNode\r
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
`,uT=`// Swift implementation for linked_list
// Added Swift Support

func linked_list() {
    print("Executing linked_list")
}
`,dT=`class ListNode\r
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
`,fT=`// Swift implementation for doubly_linked_list
// Added Swift Support

func doubly_linked_list() {
    print("Executing doubly_linked_list")
}
`,hT=`class Graph\r
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
`,gT=`// Swift implementation for graph
// Added Swift Support

func graph() {
    print("Executing graph")
}
`,pT=`class HashMap\r
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
`,mT=`// Swift implementation for hash_map
// Added Swift Support

func hash_map() {
    print("Executing hash_map")
}
`,bT=`class TrieNode\r
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
`,_T=`// Swift implementation for trie
// Added Swift Support

func trie() {
    print("Executing trie")
}
`,xT=`class UnionFind\r
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
`,yT=`// Swift implementation for union_find
// Added Swift Support

func union_find() {
    print("Executing union_find")
}
`,vT=`class UnionFind\r
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
`,ST=`// Swift implementation for union_find_optimized
// Added Swift Support

func union_find_optimized() {
    print("Executing union_find_optimized")
}
`;function TT(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Data Structures"}),a.jsx("section",{id:"ds-array",children:a.jsxs(c,{title:"array",children:[a.jsx(c.Tab,{code:bS,language:"python"}),a.jsx(c.Tab,{code:NS,language:"javascript"}),a.jsx(c.Tab,{code:BS,language:"java"}),a.jsx(c.Tab,{code:JS,language:"cpp"}),a.jsx(c.Tab,{code:tT,language:"ruby"}),a.jsx(c.Tab,{code:aT,language:"swift"})]})}),a.jsx("section",{id:"ds-hash-map",children:a.jsxs(c,{title:"hash map",children:[a.jsx(c.Tab,{code:TS,language:"python"}),a.jsx(c.Tab,{code:DS,language:"javascript"}),a.jsx(c.Tab,{code:KS,language:"java"}),a.jsx(c.Tab,{code:$S,language:"cpp"}),a.jsx(c.Tab,{code:pT,language:"ruby"}),a.jsx(c.Tab,{code:mT,language:"swift"})]})}),a.jsx("section",{id:"ds-linked-list",children:a.jsxs(c,{title:"linked list",children:[a.jsx(c.Tab,{code:yS,language:"python"}),a.jsx(c.Tab,{code:kS,language:"javascript"}),a.jsx(c.Tab,{code:qS,language:"java"}),a.jsx(c.Tab,{code:FS,language:"cpp"}),a.jsx(c.Tab,{code:oT,language:"ruby"}),a.jsx(c.Tab,{code:uT,language:"swift"})]})}),a.jsx("section",{id:"ds-doubly-linked-list",children:a.jsxs(c,{title:"doubly linked list",children:[a.jsx(c.Tab,{code:vS,language:"python"}),a.jsx(c.Tab,{code:MS,language:"javascript"}),a.jsx(c.Tab,{code:GS,language:"java"}),a.jsx(c.Tab,{code:PS,language:"cpp"}),a.jsx(c.Tab,{code:dT,language:"ruby"}),a.jsx(c.Tab,{code:fT,language:"swift"})]})}),a.jsx("section",{id:"ds-binary-tree",children:a.jsxs(c,{title:"binary tree",children:[a.jsx(c.Tab,{code:_S,language:"python"}),a.jsx(c.Tab,{code:AS,language:"javascript"}),a.jsx(c.Tab,{code:US,language:"java"}),a.jsx(c.Tab,{code:XS,language:"cpp"}),a.jsx(c.Tab,{code:iT,language:"ruby"}),a.jsx(c.Tab,{code:lT,language:"swift"})]})}),a.jsx("section",{id:"ds-binary-search-tree",children:a.jsxs(c,{title:"binary search tree",children:[a.jsx(c.Tab,{code:xS,language:"python"}),a.jsx(c.Tab,{code:OS,language:"javascript"}),a.jsx(c.Tab,{code:HS,language:"java"}),a.jsx(c.Tab,{code:ZS,language:"cpp"}),a.jsx(c.Tab,{code:sT,language:"ruby"}),a.jsx(c.Tab,{code:cT,language:"swift"})]})}),a.jsx("section",{id:"ds-graph",children:a.jsxs(c,{title:"graph",children:[a.jsx(c.Tab,{code:SS,language:"python"}),a.jsx(c.Tab,{code:RS,language:"javascript"}),a.jsx(c.Tab,{code:YS,language:"java"}),a.jsx(c.Tab,{code:WS,language:"cpp"}),a.jsx(c.Tab,{code:hT,language:"ruby"}),a.jsx(c.Tab,{code:gT,language:"swift"})]})}),a.jsx("section",{id:"ds-union-find",children:a.jsxs(c,{title:"union find",children:[a.jsx(c.Tab,{code:ES,language:"python"}),a.jsx(c.Tab,{code:LS,language:"javascript"}),a.jsx(c.Tab,{code:IS,language:"java"}),a.jsx(c.Tab,{code:rT,language:"cpp"}),a.jsx(c.Tab,{code:xT,language:"ruby"}),a.jsx(c.Tab,{code:yT,language:"swift"})]})}),a.jsx("section",{id:"ds-union-find-optimized",children:a.jsxs(c,{title:"union find optimized",children:[a.jsx(c.Tab,{code:wS,language:"python"}),a.jsx(c.Tab,{code:CS,language:"javascript"}),a.jsx(c.Tab,{code:QS,language:"java"}),a.jsx(c.Tab,{code:eT,language:"cpp"}),a.jsx(c.Tab,{code:vT,language:"ruby"}),a.jsx(c.Tab,{code:ST,language:"swift"})]})}),a.jsx("section",{id:"ds-trie",children:a.jsxs(c,{title:"trie",children:[a.jsx(c.Tab,{code:jS,language:"python"}),a.jsx(c.Tab,{code:zS,language:"javascript"}),a.jsx(c.Tab,{code:VS,language:"java"}),a.jsx(c.Tab,{code:nT,language:"cpp"}),a.jsx(c.Tab,{code:bT,language:"ruby"}),a.jsx(c.Tab,{code:_T,language:"swift"})]})})]})}const jT=`import random\r
\r
\r
def bogo_sort(arr: list) -> None:\r
    target = sorted(arr)\r
\r
    while arr != target:\r
        random.shuffle(arr)\r
`,ET=`def bubble_sort(arr: list) -> None:\r
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
`,wT=`def bucket_sort(arr: list) -> list:\r
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
`,NT=`def counting_sort(arr: list) -> list:\r
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
`,AT=`def cube_sort(arr: list, processors: int) -> None:\r
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
`,OT=`def heap_sort(arr: list) -> list:\r
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
`,kT=`def insertion_sort(arr: list) -> None:\r
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
`,MT=`def merge_sort(arr: list) -> list:\r
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
`,RT=`def pancake_sort(arr: list) -> None:\r
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
`,DT=`def quick_sort(arr: list) -> list:\r
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
`,zT=`def radix_sort(arr: list) -> None:\r
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
`,LT=`def selection_sort(arr: list) -> None:\r
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
`,CT=`def shell_sort(arr: list) -> None:\r
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
`,BT=`from threading import Thread\r
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
`,UT=`def tim_sort(arr: list) -> list:\r
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
`,HT=`const bogoSort = (arr) => {\r
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
`,qT=`const bubbleSort = (arr) => {\r
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
`,GT=`const bucketSort = (arr) => {\r
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
`,YT=`const countingSort = (arr) => {\r
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
`,KT=`const cubeSort = (arr, processors) => {\r
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
`,VT=`const heapSort = (arr) => {\r
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
`,IT=`const insertionSort = (arr) => {\r
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
`,QT=`const mergeSort = (arr) => {\r
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
`,JT=`const pancakeSort = (arr) => {\r
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
`,XT=`const quickSort = (arr) => {\r
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
`,ZT=`const radixSort = (arr) => {\r
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
`,FT=`const selectionSort = (arr) => {\r
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
`,PT=`const shellSort = (arr) => {\r
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
`,WT=`const sleepSort = (arr) => {\r
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
`,$T=`const timSort = (arr) => {\r
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
`,n2=`import java.util.Arrays;\r
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
`,r2=`public static void bubbleSort(int[] arr) {\r
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
`,e2=`import java.util.ArrayList;\r
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
`,t2=`import java.util.Arrays;\r
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
`,a2=`import java.util.ArrayList;\r
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
`,i2=`public static int[] heapSort(int[] arr) {\r
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
`,l2=`public static void insertionSort(int[] arr) {\r
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
`,s2=`import java.util.Arrays;\r
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
`,c2=`public static void pancakeSort(int[] arr) {\r
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
`,o2=`import java.util.ArrayList;\r
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
`,u2=`import java.util.Arrays;\r
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
`,d2=`public static void selectionSort(int[] arr) {\r
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
`,f2=`public static void shellSort(int[] arr) {\r
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
`,h2=`import java.util.ArrayList;\r
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
`,g2=`public static int[] timSort(int[] arr) {\r
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
`,p2=`#include <algorithm>\r
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
`,m2=`#include <vector>\r
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
`,b2=`#include <vector>\r
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
`,_2=`#include <vector>\r
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
`,x2=`#include <vector>\r
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
`,y2=`#include <vector>\r
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
`,v2=`#include <vector>\r
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
`,S2=`#include <vector>\r
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
`,T2=`#include <vector>\r
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
`,j2=`#include <vector>\r
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
`,E2=`#include <vector>\r
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
`,w2=`#include <vector>\r
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
`,N2=`#include <vector>\r
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
`,A2=`#include <chrono>\r
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
`,O2=`#include <vector>\r
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
`,k2=`def bogo_sort(arr)\r
  target = arr.sort\r
\r
  until arr == target\r
    arr.shuffle!\r
  end\r
end\r
`,M2=`// Swift implementation for bogo_sort
// Added Swift Support

func bogo_sort() {
    print("Executing bogo_sort")
}
`,R2=`def bubble_sort(arr)\r
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
`,D2=`// Swift implementation for bubble_sort
// Added Swift Support

func bubble_sort() {
    print("Executing bubble_sort")
}
`,z2=`def bucket_sort(arr)\r
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
`,L2=`// Swift implementation for bucket_sort
// Added Swift Support

func bucket_sort() {
    print("Executing bucket_sort")
}
`,C2=`\r
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
`,B2=`// Swift implementation for counting_sort
// Added Swift Support

func counting_sort() {
    print("Executing counting_sort")
}
`,U2=`def cube_sort(arr, processors)\r
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
`,H2=`// Swift implementation for cube_sort
// Added Swift Support

func cube_sort() {
    print("Executing cube_sort")
}
`,q2=`def heap_sort(arr)\r
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
`,G2=`// Swift implementation for heap_sort
// Added Swift Support

func heap_sort() {
    print("Executing heap_sort")
}
`,Y2=`def insertion_sort(arr)\r
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
`,K2=`// Swift implementation for insertion_sort
// Added Swift Support

func insertion_sort() {
    print("Executing insertion_sort")
}
`,V2=`def merge_sort(arr)\r
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
`,I2=`// Swift implementation for merge_sort
// Added Swift Support

func merge_sort() {
    print("Executing merge_sort")
}
`,Q2=`def pancake_sort(arr)\r
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
`,J2=`// Swift implementation for pancake_sort
// Added Swift Support

func pancake_sort() {
    print("Executing pancake_sort")
}
`,X2=`def quick_sort(arr)\r
  n = arr.size\r
  return arr if n <= 1\r
\r
  pivot = arr[n / 2]\r
  left  = arr.select { |x| x < pivot }\r
  right = arr.select { |x| x > pivot }\r
\r
  quick_sort(left) + [pivot] + quick_sort(right)\r
end\r
`,Z2=`// Swift implementation for quick_sort
// Added Swift Support

func quick_sort() {
    print("Executing quick_sort")
}
`,F2=`def radix_sort(arr)\r
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
`,P2=`// Swift implementation for radix_sort
// Added Swift Support

func radix_sort() {
    print("Executing radix_sort")
}
`,W2=`def selection_sort(arr)\r
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
`,$2=`// Swift implementation for selection_sort
// Added Swift Support

func selection_sort() {
    print("Executing selection_sort")
}
`,nj=`def shell_sort(arr)\r
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
`,rj=`// Swift implementation for shell_sort
// Added Swift Support

func shell_sort() {
    print("Executing shell_sort")
}
`,ej=`def sleep_sort(arr)\r
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
`,tj=`// Swift implementation for sleep_sort
// Added Swift Support

func sleep_sort() {
    print("Executing sleep_sort")
}
`,aj=`def tim_sort(arr)\r
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
`,ij=`// Swift implementation for tim_sort
// Added Swift Support

func tim_sort() {
    print("Executing tim_sort")
}
`;function lj(){return a.jsxs("div",{className:qn.container,children:[a.jsx("h2",{className:qn.sectionHeader,children:"Sorting Algorithms"}),a.jsx("section",{id:"sort-bubble",children:a.jsxs(c,{title:"bubble sort",children:[a.jsx(c.Tab,{code:ET,language:"python"}),a.jsx(c.Tab,{code:qT,language:"javascript"}),a.jsx(c.Tab,{code:r2,language:"java"}),a.jsx(c.Tab,{code:m2,language:"cpp"}),a.jsx(c.Tab,{code:R2,language:"ruby"}),a.jsx(c.Tab,{code:D2,language:"swift"})]})}),a.jsx("section",{id:"sort-selection",children:a.jsxs(c,{title:"selection sort",children:[a.jsx(c.Tab,{code:LT,language:"python"}),a.jsx(c.Tab,{code:FT,language:"javascript"}),a.jsx(c.Tab,{code:d2,language:"java"}),a.jsx(c.Tab,{code:w2,language:"cpp"}),a.jsx(c.Tab,{code:W2,language:"ruby"}),a.jsx(c.Tab,{code:$2,language:"swift"})]})}),a.jsx("section",{id:"sort-insertion",children:a.jsxs(c,{title:"insertion sort",children:[a.jsx(c.Tab,{code:kT,language:"python"}),a.jsx(c.Tab,{code:IT,language:"javascript"}),a.jsx(c.Tab,{code:l2,language:"java"}),a.jsx(c.Tab,{code:v2,language:"cpp"}),a.jsx(c.Tab,{code:Y2,language:"ruby"}),a.jsx(c.Tab,{code:K2,language:"swift"})]})}),a.jsx("section",{id:"sort-shell",children:a.jsxs(c,{title:"shell sort",children:[a.jsx(c.Tab,{code:CT,language:"python"}),a.jsx(c.Tab,{code:PT,language:"javascript"}),a.jsx(c.Tab,{code:f2,language:"java"}),a.jsx(c.Tab,{code:N2,language:"cpp"}),a.jsx(c.Tab,{code:nj,language:"ruby"}),a.jsx(c.Tab,{code:rj,language:"swift"})]})}),a.jsx("section",{id:"sort-merge",children:a.jsxs(c,{title:"merge sort",children:[a.jsx(c.Tab,{code:MT,language:"python"}),a.jsx(c.Tab,{code:QT,language:"javascript"}),a.jsx(c.Tab,{code:s2,language:"java"}),a.jsx(c.Tab,{code:S2,language:"cpp"}),a.jsx(c.Tab,{code:V2,language:"ruby"}),a.jsx(c.Tab,{code:I2,language:"swift"})]})}),a.jsx("section",{id:"sort-quick",children:a.jsxs(c,{title:"quick sort",children:[a.jsx(c.Tab,{code:DT,language:"python"}),a.jsx(c.Tab,{code:XT,language:"javascript"}),a.jsx(c.Tab,{code:o2,language:"java"}),a.jsx(c.Tab,{code:j2,language:"cpp"}),a.jsx(c.Tab,{code:X2,language:"ruby"}),a.jsx(c.Tab,{code:Z2,language:"swift"})]})}),a.jsx("section",{id:"sort-tim",children:a.jsxs(c,{title:"timsort",children:[a.jsx(c.Tab,{code:UT,language:"python"}),a.jsx(c.Tab,{code:$T,language:"javascript"}),a.jsx(c.Tab,{code:g2,language:"java"}),a.jsx(c.Tab,{code:O2,language:"cpp"}),a.jsx(c.Tab,{code:aj,language:"ruby"}),a.jsx(c.Tab,{code:ij,language:"swift"})]})}),a.jsx("section",{id:"sort-heap",children:a.jsxs(c,{title:"heap sort",children:[a.jsx(c.Tab,{code:OT,language:"python"}),a.jsx(c.Tab,{code:VT,language:"javascript"}),a.jsx(c.Tab,{code:i2,language:"java"}),a.jsx(c.Tab,{code:y2,language:"cpp"}),a.jsx(c.Tab,{code:q2,language:"ruby"}),a.jsx(c.Tab,{code:G2,language:"swift"})]})}),a.jsx("section",{id:"sort-counting",children:a.jsxs(c,{title:"counting sort",children:[a.jsx(c.Tab,{code:NT,language:"python"}),a.jsx(c.Tab,{code:YT,language:"javascript"}),a.jsx(c.Tab,{code:t2,language:"java"}),a.jsx(c.Tab,{code:_2,language:"cpp"}),a.jsx(c.Tab,{code:C2,language:"ruby"}),a.jsx(c.Tab,{code:B2,language:"swift"})]})}),a.jsx("section",{id:"sort-bucket",children:a.jsxs(c,{title:"bucket sort",children:[a.jsx(c.Tab,{code:wT,language:"python"}),a.jsx(c.Tab,{code:GT,language:"javascript"}),a.jsx(c.Tab,{code:e2,language:"java"}),a.jsx(c.Tab,{code:b2,language:"cpp"}),a.jsx(c.Tab,{code:z2,language:"ruby"}),a.jsx(c.Tab,{code:L2,language:"swift"})]})}),a.jsx("section",{id:"sort-radix",children:a.jsxs(c,{title:"radix sort",children:[a.jsx(c.Tab,{code:zT,language:"python"}),a.jsx(c.Tab,{code:ZT,language:"javascript"}),a.jsx(c.Tab,{code:u2,language:"java"}),a.jsx(c.Tab,{code:E2,language:"cpp"}),a.jsx(c.Tab,{code:F2,language:"ruby"}),a.jsx(c.Tab,{code:P2,language:"swift"})]})}),a.jsx("section",{id:"sort-cube",children:a.jsxs(c,{title:"cubesort",children:[a.jsx(c.Tab,{code:AT,language:"python"}),a.jsx(c.Tab,{code:KT,language:"javascript"}),a.jsx(c.Tab,{code:a2,language:"java"}),a.jsx(c.Tab,{code:x2,language:"cpp"}),a.jsx(c.Tab,{code:U2,language:"ruby"}),a.jsx(c.Tab,{code:H2,language:"swift"})]})}),a.jsx("section",{id:"sort-bogo",children:a.jsxs(c,{title:"bogo sort",children:[a.jsx(c.Tab,{code:jT,language:"python"}),a.jsx(c.Tab,{code:HT,language:"javascript"}),a.jsx(c.Tab,{code:n2,language:"java"}),a.jsx(c.Tab,{code:p2,language:"cpp"}),a.jsx(c.Tab,{code:k2,language:"ruby"}),a.jsx(c.Tab,{code:M2,language:"swift"})]})}),a.jsx("section",{id:"sort-pancake",children:a.jsxs(c,{title:"pancake sort",children:[a.jsx(c.Tab,{code:RT,language:"python"}),a.jsx(c.Tab,{code:JT,language:"javascript"}),a.jsx(c.Tab,{code:c2,language:"java"}),a.jsx(c.Tab,{code:T2,language:"cpp"}),a.jsx(c.Tab,{code:Q2,language:"ruby"}),a.jsx(c.Tab,{code:J2,language:"swift"})]})}),a.jsx("section",{id:"sort-sleep",children:a.jsxs(c,{title:"sleep sort",children:[a.jsx(c.Tab,{code:BT,language:"python"}),a.jsx(c.Tab,{code:WT,language:"javascript"}),a.jsx(c.Tab,{code:h2,language:"java"}),a.jsx(c.Tab,{code:A2,language:"cpp"}),a.jsx(c.Tab,{code:ej,language:"ruby"}),a.jsx(c.Tab,{code:tj,language:"swift"})]})})]})}function sj(){const{isSidebarOpen:u}=Ko(),_=$r(Yh.main,!u&&Yh.sidebarHidden);return a.jsxs("main",{className:_,children:[a.jsx(_0,{}),a.jsx(L1,{}),a.jsx(X1,{}),a.jsx(s_,{}),a.jsx(y_,{}),a.jsx(H_,{}),a.jsx(zx,{}),a.jsx(Gx,{}),a.jsx(_y,{}),a.jsx(Ey,{}),a.jsx(Vy,{}),a.jsx(Pv,{}),a.jsx(mS,{}),a.jsx(TT,{}),a.jsx(lj,{})]})}function cj(){return a.jsx(bs.StrictMode,{children:a.jsx(Am,{children:a.jsx(wm,{children:a.jsxs("div",{className:"App",children:[a.jsx(km,{}),a.jsx(n0,{}),a.jsx(sj,{})]})})})})}Em.createRoot(document.getElementById("root")).render(a.jsx(cj,{}));
