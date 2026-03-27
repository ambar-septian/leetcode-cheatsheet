(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))d(E);new MutationObserver(E=>{for(const z of E)if(z.type==="childList")for(const U of z.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&d(U)}).observe(document,{childList:!0,subtree:!0});function _(E){const z={};return E.integrity&&(z.integrity=E.integrity),E.referrerPolicy&&(z.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?z.credentials="include":E.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function d(E){if(E.ep)return;E.ep=!0;const z=_(E);fetch(E.href,z)}})();function Ka(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Ec={exports:{}},Ii={};var Th;function mm(){if(Th)return Ii;Th=1;var u=Symbol.for("react.transitional.element"),v=Symbol.for("react.fragment");function _(d,E,z){var U=null;if(z!==void 0&&(U=""+z),E.key!==void 0&&(U=""+E.key),"key"in E){z={};for(var V in E)V!=="key"&&(z[V]=E[V])}else z=E;return E=z.ref,{$$typeof:u,type:d,key:U,ref:E!==void 0?E:null,props:z}}return Ii.Fragment=v,Ii.jsx=_,Ii.jsxs=_,Ii}var Sh;function bm(){return Sh||(Sh=1,Ec.exports=mm()),Ec.exports}var a=bm(),Ac={exports:{}},qi={},wc={exports:{}},Oc={};var jh;function vm(){return jh||(jh=1,(function(u){function v(N,H){var K=N.length;N.push(H);n:for(;0<K;){var Tn=K-1>>>1,Sn=N[Tn];if(0<E(Sn,H))N[Tn]=H,N[K]=Sn,K=Tn;else break n}}function _(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var H=N[0],K=N.pop();if(K!==H){N[0]=K;n:for(var Tn=0,Sn=N.length,g=Sn>>>1;Tn<g;){var A=2*(Tn+1)-1,q=N[A],X=A+1,an=N[X];if(0>E(q,K))X<Sn&&0>E(an,q)?(N[Tn]=an,N[X]=K,Tn=X):(N[Tn]=q,N[A]=K,Tn=A);else if(X<Sn&&0>E(an,K))N[Tn]=an,N[X]=K,Tn=X;else break n}}return H}function E(N,H){var K=N.sortIndex-H.sortIndex;return K!==0?K:N.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;u.unstable_now=function(){return z.now()}}else{var U=Date,V=U.now();u.unstable_now=function(){return U.now()-V}}var L=[],x=[],B=1,w=null,D=3,Y=!1,en=!1,Z=!1,pn=!1,yn=typeof setTimeout=="function"?setTimeout:null,_n=typeof clearTimeout=="function"?clearTimeout:null,nn=typeof setImmediate<"u"?setImmediate:null;function sn(N){for(var H=_(x);H!==null;){if(H.callback===null)d(x);else if(H.startTime<=N)d(x),H.sortIndex=H.expirationTime,v(L,H);else break;H=_(x)}}function Dn(N){if(Z=!1,sn(N),!en)if(_(L)!==null)en=!0,mn||(mn=!0,$n());else{var H=_(x);H!==null&&jr(Dn,H.startTime-N)}}var mn=!1,cn=-1,Ln=5,Fn=-1;function br(){return pn?!0:!(u.unstable_now()-Fn<Ln)}function or(){if(pn=!1,mn){var N=u.unstable_now();Fn=N;var H=!0;try{n:{en=!1,Z&&(Z=!1,_n(cn),cn=-1),Y=!0;var K=D;try{r:{for(sn(N),w=_(L);w!==null&&!(w.expirationTime>N&&br());){var Tn=w.callback;if(typeof Tn=="function"){w.callback=null,D=w.priorityLevel;var Sn=Tn(w.expirationTime<=N);if(N=u.unstable_now(),typeof Sn=="function"){w.callback=Sn,sn(N),H=!0;break r}w===_(L)&&d(L),sn(N)}else d(L);w=_(L)}if(w!==null)H=!0;else{var g=_(x);g!==null&&jr(Dn,g.startTime-N),H=!1}}break n}finally{w=null,D=K,Y=!1}H=void 0}}finally{H?$n():mn=!1}}}var $n;if(typeof nn=="function")$n=function(){nn(or)};else if(typeof MessageChannel<"u"){var Er=new MessageChannel,ar=Er.port2;Er.port1.onmessage=or,$n=function(){ar.postMessage(null)}}else $n=function(){yn(or,0)};function jr(N,H){cn=yn(function(){N(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(N){N.callback=null},u.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ln=0<N?Math.floor(1e3/N):5},u.unstable_getCurrentPriorityLevel=function(){return D},u.unstable_next=function(N){switch(D){case 1:case 2:case 3:var H=3;break;default:H=D}var K=D;D=H;try{return N()}finally{D=K}},u.unstable_requestPaint=function(){pn=!0},u.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=D;D=N;try{return H()}finally{D=K}},u.unstable_scheduleCallback=function(N,H,K){var Tn=u.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Tn+K:Tn):K=Tn,N){case 1:var Sn=-1;break;case 2:Sn=250;break;case 5:Sn=1073741823;break;case 4:Sn=1e4;break;default:Sn=5e3}return Sn=K+Sn,N={id:B++,callback:H,priorityLevel:N,startTime:K,expirationTime:Sn,sortIndex:-1},K>Tn?(N.sortIndex=K,v(x,N),_(L)===null&&N===_(x)&&(Z?(_n(cn),cn=-1):Z=!0,jr(Dn,K-Tn))):(N.sortIndex=Sn,v(L,N),en||Y||(en=!0,mn||(mn=!0,$n()))),N},u.unstable_shouldYield=br,u.unstable_wrapCallback=function(N){var H=D;return function(){var K=D;D=H;try{return N.apply(this,arguments)}finally{D=K}}}})(Oc)),Oc}var Nh;function _m(){return Nh||(Nh=1,wc.exports=vm()),wc.exports}var kc={exports:{}},bn={};var Eh;function xm(){if(Eh)return bn;Eh=1;var u=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),U=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.iterator;function Y(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var en={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,pn={};function yn(g,A,q){this.props=g,this.context=A,this.refs=pn,this.updater=q||en}yn.prototype.isReactComponent={},yn.prototype.setState=function(g,A){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,A,"setState")},yn.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function _n(){}_n.prototype=yn.prototype;function nn(g,A,q){this.props=g,this.context=A,this.refs=pn,this.updater=q||en}var sn=nn.prototype=new _n;sn.constructor=nn,Z(sn,yn.prototype),sn.isPureReactComponent=!0;var Dn=Array.isArray;function mn(){}var cn={H:null,A:null,T:null,S:null},Ln=Object.prototype.hasOwnProperty;function Fn(g,A,q){var X=q.ref;return{$$typeof:u,type:g,key:A,ref:X!==void 0?X:null,props:q}}function br(g,A){return Fn(g.type,A,g.props)}function or(g){return typeof g=="object"&&g!==null&&g.$$typeof===u}function $n(g){var A={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return A[q]})}var Er=/\/+/g;function ar(g,A){return typeof g=="object"&&g!==null&&g.key!=null?$n(""+g.key):A.toString(36)}function jr(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(mn,mn):(g.status="pending",g.then(function(A){g.status==="pending"&&(g.status="fulfilled",g.value=A)},function(A){g.status==="pending"&&(g.status="rejected",g.reason=A)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function N(g,A,q,X,an){var hn=typeof g;(hn==="undefined"||hn==="boolean")&&(g=null);var gn=!1;if(g===null)gn=!0;else switch(hn){case"bigint":case"string":case"number":gn=!0;break;case"object":switch(g.$$typeof){case u:case v:gn=!0;break;case B:return gn=g._init,N(gn(g._payload),A,q,X,an)}}if(gn)return an=an(g),gn=X===""?"."+ar(g,0):X,Dn(an)?(q="",gn!=null&&(q=gn.replace(Er,"$&/")+"/"),N(an,A,q,"",function(Br){return Br})):an!=null&&(or(an)&&(an=br(an,q+(an.key==null||g&&g.key===an.key?"":(""+an.key).replace(Er,"$&/")+"/")+gn)),A.push(an)),1;gn=0;var Mn=X===""?".":X+":";if(Dn(g))for(var Vn=0;Vn<g.length;Vn++)X=g[Vn],hn=Mn+ar(X,Vn),gn+=N(X,A,q,hn,an);else if(Vn=Y(g),typeof Vn=="function")for(g=Vn.call(g),Vn=0;!(X=g.next()).done;)X=X.value,hn=Mn+ar(X,Vn++),gn+=N(X,A,q,hn,an);else if(hn==="object"){if(typeof g.then=="function")return N(jr(g),A,q,X,an);throw A=String(g),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return gn}function H(g,A,q){if(g==null)return g;var X=[],an=0;return N(g,X,"","",function(hn){return A.call(q,hn,an++)}),X}function K(g){if(g._status===-1){var A=g._result;A=A(),A.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=A)}if(g._status===1)return g._result.default;throw g._result}var Tn=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},Sn={map:H,forEach:function(g,A,q){H(g,function(){A.apply(this,arguments)},q)},count:function(g){var A=0;return H(g,function(){A++}),A},toArray:function(g){return H(g,function(A){return A})||[]},only:function(g){if(!or(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return bn.Activity=w,bn.Children=Sn,bn.Component=yn,bn.Fragment=_,bn.Profiler=E,bn.PureComponent=nn,bn.StrictMode=d,bn.Suspense=L,bn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=cn,bn.__COMPILER_RUNTIME={__proto__:null,c:function(g){return cn.H.useMemoCache(g)}},bn.cache=function(g){return function(){return g.apply(null,arguments)}},bn.cacheSignal=function(){return null},bn.cloneElement=function(g,A,q){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var X=Z({},g.props),an=g.key;if(A!=null)for(hn in A.key!==void 0&&(an=""+A.key),A)!Ln.call(A,hn)||hn==="key"||hn==="__self"||hn==="__source"||hn==="ref"&&A.ref===void 0||(X[hn]=A[hn]);var hn=arguments.length-2;if(hn===1)X.children=q;else if(1<hn){for(var gn=Array(hn),Mn=0;Mn<hn;Mn++)gn[Mn]=arguments[Mn+2];X.children=gn}return Fn(g.type,an,X)},bn.createContext=function(g){return g={$$typeof:U,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:z,_context:g},g},bn.createElement=function(g,A,q){var X,an={},hn=null;if(A!=null)for(X in A.key!==void 0&&(hn=""+A.key),A)Ln.call(A,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(an[X]=A[X]);var gn=arguments.length-2;if(gn===1)an.children=q;else if(1<gn){for(var Mn=Array(gn),Vn=0;Vn<gn;Vn++)Mn[Vn]=arguments[Vn+2];an.children=Mn}if(g&&g.defaultProps)for(X in gn=g.defaultProps,gn)an[X]===void 0&&(an[X]=gn[X]);return Fn(g,hn,an)},bn.createRef=function(){return{current:null}},bn.forwardRef=function(g){return{$$typeof:V,render:g}},bn.isValidElement=or,bn.lazy=function(g){return{$$typeof:B,_payload:{_status:-1,_result:g},_init:K}},bn.memo=function(g,A){return{$$typeof:x,type:g,compare:A===void 0?null:A}},bn.startTransition=function(g){var A=cn.T,q={};cn.T=q;try{var X=g(),an=cn.S;an!==null&&an(q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(mn,Tn)}catch(hn){Tn(hn)}finally{A!==null&&q.types!==null&&(A.types=q.types),cn.T=A}},bn.unstable_useCacheRefresh=function(){return cn.H.useCacheRefresh()},bn.use=function(g){return cn.H.use(g)},bn.useActionState=function(g,A,q){return cn.H.useActionState(g,A,q)},bn.useCallback=function(g,A){return cn.H.useCallback(g,A)},bn.useContext=function(g){return cn.H.useContext(g)},bn.useDebugValue=function(){},bn.useDeferredValue=function(g,A){return cn.H.useDeferredValue(g,A)},bn.useEffect=function(g,A){return cn.H.useEffect(g,A)},bn.useEffectEvent=function(g){return cn.H.useEffectEvent(g)},bn.useId=function(){return cn.H.useId()},bn.useImperativeHandle=function(g,A,q){return cn.H.useImperativeHandle(g,A,q)},bn.useInsertionEffect=function(g,A){return cn.H.useInsertionEffect(g,A)},bn.useLayoutEffect=function(g,A){return cn.H.useLayoutEffect(g,A)},bn.useMemo=function(g,A){return cn.H.useMemo(g,A)},bn.useOptimistic=function(g,A){return cn.H.useOptimistic(g,A)},bn.useReducer=function(g,A,q){return cn.H.useReducer(g,A,q)},bn.useRef=function(g){return cn.H.useRef(g)},bn.useState=function(g){return cn.H.useState(g)},bn.useSyncExternalStore=function(g,A,q){return cn.H.useSyncExternalStore(g,A,q)},bn.useTransition=function(){return cn.H.useTransition()},bn.version="19.2.3",bn}var Ah;function Gc(){return Ah||(Ah=1,kc.exports=xm()),kc.exports}var Mc={exports:{}},Cr={};var wh;function ym(){if(wh)return Cr;wh=1;var u=Gc();function v(L){var x="https://react.dev/errors/"+L;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)x+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+L+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var d={d:{f:_,r:function(){throw Error(v(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},E=Symbol.for("react.portal");function z(L,x,B){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:w==null?null:""+w,children:L,containerInfo:x,implementation:B}}var U=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function V(L,x){if(L==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Cr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Cr.createPortal=function(L,x){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(v(299));return z(L,x,null,B)},Cr.flushSync=function(L){var x=U.T,B=d.p;try{if(U.T=null,d.p=2,L)return L()}finally{U.T=x,d.p=B,d.d.f()}},Cr.preconnect=function(L,x){typeof L=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(L,x))},Cr.prefetchDNS=function(L){typeof L=="string"&&d.d.D(L)},Cr.preinit=function(L,x){if(typeof L=="string"&&x&&typeof x.as=="string"){var B=x.as,w=V(B,x.crossOrigin),D=typeof x.integrity=="string"?x.integrity:void 0,Y=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;B==="style"?d.d.S(L,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:w,integrity:D,fetchPriority:Y}):B==="script"&&d.d.X(L,{crossOrigin:w,integrity:D,fetchPriority:Y,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Cr.preinitModule=function(L,x){if(typeof L=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var B=V(x.as,x.crossOrigin);d.d.M(L,{crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(L)},Cr.preload=function(L,x){if(typeof L=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var B=x.as,w=V(B,x.crossOrigin);d.d.L(L,B,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Cr.preloadModule=function(L,x){if(typeof L=="string")if(x){var B=V(x.as,x.crossOrigin);d.d.m(L,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:B,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(L)},Cr.requestFormReset=function(L){d.d.r(L)},Cr.unstable_batchedUpdates=function(L,x){return L(x)},Cr.useFormState=function(L,x,B){return U.H.useFormState(L,x,B)},Cr.useFormStatus=function(){return U.H.useHostTransitionStatus()},Cr.version="19.2.3",Cr}var Oh;function Fh(){if(Oh)return Mc.exports;Oh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(v){console.error(v)}}return u(),Mc.exports=ym(),Mc.exports}var kh;function Tm(){if(kh)return qi;kh=1;var u=_m(),v=Gc(),_=Fh();function d(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function z(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function U(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function V(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function L(n){if(z(n)!==n)throw Error(d(188))}function x(n){var r=n.alternate;if(!r){if(r=z(n),r===null)throw Error(d(188));return r!==n?null:n}for(var e=n,t=r;;){var i=e.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){e=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===e)return L(i),n;if(l===t)return L(i),r;l=l.sibling}throw Error(d(188))}if(e.return!==t.return)e=i,t=l;else{for(var s=!1,c=i.child;c;){if(c===e){s=!0,e=i,t=l;break}if(c===t){s=!0,t=i,e=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===e){s=!0,e=l,t=i;break}if(c===t){s=!0,t=l,e=i;break}c=c.sibling}if(!s)throw Error(d(189))}}if(e.alternate!==t)throw Error(d(190))}if(e.tag!==3)throw Error(d(188));return e.stateNode.current===e?n:r}function B(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=B(n),r!==null)return r;n=n.sibling}return null}var w=Object.assign,D=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),en=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),pn=Symbol.for("react.strict_mode"),yn=Symbol.for("react.profiler"),_n=Symbol.for("react.consumer"),nn=Symbol.for("react.context"),sn=Symbol.for("react.forward_ref"),Dn=Symbol.for("react.suspense"),mn=Symbol.for("react.suspense_list"),cn=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Fn=Symbol.for("react.activity"),br=Symbol.for("react.memo_cache_sentinel"),or=Symbol.iterator;function $n(n){return n===null||typeof n!="object"?null:(n=or&&n[or]||n["@@iterator"],typeof n=="function"?n:null)}var Er=Symbol.for("react.client.reference");function ar(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Er?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Z:return"Fragment";case yn:return"Profiler";case pn:return"StrictMode";case Dn:return"Suspense";case mn:return"SuspenseList";case Fn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case en:return"Portal";case nn:return n.displayName||"Context";case _n:return(n._context.displayName||"Context")+".Consumer";case sn:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case cn:return r=n.displayName||null,r!==null?r:ar(n.type)||"Memo";case Ln:r=n._payload,n=n._init;try{return ar(n(r))}catch{}}return null}var jr=Array.isArray,N=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Tn=[],Sn=-1;function g(n){return{current:n}}function A(n){0>Sn||(n.current=Tn[Sn],Tn[Sn]=null,Sn--)}function q(n,r){Sn++,Tn[Sn]=n.current,n.current=r}var X=g(null),an=g(null),hn=g(null),gn=g(null);function Mn(n,r){switch(q(hn,r),q(an,n),q(X,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Vf(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Vf(r),n=Qf(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}A(X),q(X,n)}function Vn(){A(X),A(an),A(hn)}function Br(n){n.memoizedState!==null&&q(gn,n);var r=X.current,e=Qf(r,n.type);r!==e&&(q(an,n),q(X,e))}function ue(n){an.current===n&&(A(X),A(an)),gn.current===n&&(A(gn),Ci._currentValue=K)}var Re,De;function ne(n){if(Re===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);Re=r&&r[1]||"",De=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Re+n+De}var kt=!1;function zn(n,r){if(!n||kt)return"";kt=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(r){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(j){var S=j}Reflect.construct(n,[],R)}else{try{R.call()}catch(j){S=j}n.call(R.prototype)}}else{try{throw Error()}catch(j){S=j}(R=n())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(j){if(j&&S&&typeof j.stack=="string")return[j.stack,S.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var f=s.split(`
`),T=c.split(`
`);for(i=t=0;t<f.length&&!f[t].includes("DetermineComponentFrameRoot");)t++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(t===f.length||i===T.length)for(t=f.length-1,i=T.length-1;1<=t&&0<=i&&f[t]!==T[i];)i--;for(;1<=t&&0<=i;t--,i--)if(f[t]!==T[i]){if(t!==1||i!==1)do if(t--,i--,0>i||f[t]!==T[i]){var O=`
`+f[t].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=t&&0<=i);break}}}finally{kt=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?ne(e):""}function rt(n,r){switch(n.tag){case 26:case 27:case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return n.child!==r&&r!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return zn(n.type,!1);case 11:return zn(n.type.render,!1);case 1:return zn(n.type,!0);case 31:return ne("Activity");default:return""}}function je(n){try{var r="",e=null;do r+=rt(n,e),e=n,n=n.return;while(n);return r}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Mt=Object.prototype.hasOwnProperty,ia=u.unstable_scheduleCallback,Va=u.unstable_cancelCallback,_s=u.unstable_shouldYield,Ki=u.unstable_requestPaint,dr=u.unstable_now,Vi=u.unstable_getCurrentPriorityLevel,Le=u.unstable_ImmediatePriority,Rt=u.unstable_UserBlockingPriority,Dt=u.unstable_NormalPriority,xs=u.unstable_LowPriority,Qi=u.unstable_IdlePriority,ys=u.log,Ts=u.unstable_setDisableYieldValue,Lt=null,Dr=null;function Ne(n){if(typeof ys=="function"&&Ts(n),Dr&&typeof Dr.setStrictMode=="function")try{Dr.setStrictMode(Lt,n)}catch{}}var Ur=Math.clz32?Math.clz32:Xi,Ss=Math.log,Qa=Math.LN2;function Xi(n){return n>>>=0,n===0?32:31-(Ss(n)/Qa|0)|0}var zt=256,la=262144,Ct=4194304;function Kr(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function h(n,r,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var c=t&134217727;return c!==0?(t=c&~l,t!==0?i=Kr(t):(s&=c,s!==0?i=Kr(s):e||(e=c&~n,e!==0&&(i=Kr(e))))):(c=t&~l,c!==0?i=Kr(c):s!==0?i=Kr(s):e||(e=t&~n,e!==0&&(i=Kr(e)))),i===0?0:r!==0&&r!==i&&(r&l)===0&&(l=i&-i,e=r&-r,l>=e||l===32&&(e&4194048)!==0)?r:i}function k(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function G(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var n=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),n}function rr(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function Pn(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function P(n,r,e,t,i,l){var s=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var c=n.entanglements,f=n.expirationTimes,T=n.hiddenUpdates;for(e=s&~e;0<e;){var O=31-Ur(e),R=1<<O;c[O]=0,f[O]=-1;var S=T[O];if(S!==null)for(T[O]=null,O=0;O<S.length;O++){var j=S[O];j!==null&&(j.lane&=-536870913)}e&=~R}t!==0&&J(n,t,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~r))}function J(n,r,e){n.pendingLanes|=r,n.suspendedLanes&=~r;var t=31-Ur(r);n.entangledLanes|=r,n.entanglements[t]=n.entanglements[t]|1073741824|e&261930}function dn(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var t=31-Ur(e),i=1<<t;i&r|n[t]&r&&(n[t]|=r),e&=~i}}function fr(n,r){var e=r&-r;return e=(e&42)!==0?1:ir(e),(e&(n.suspendedLanes|r))!==0?0:e}function ir(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ze(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function sa(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:ph(n.type))}function oa(n,r){var e=H.p;try{return H.p=n,r()}finally{H.p=e}}var Ee=Math.random().toString(36).slice(2),hr="__reactFiber$"+Ee,Lr="__reactProps$"+Ee,et="__reactContainer$"+Ee,Xa="__reactEvents$"+Ee,Ji="__reactListeners$"+Ee,ca="__reactHandles$"+Ee,Zi="__reactResources$"+Ee,Bt="__reactMarker$"+Ee;function Ja(n){delete n[hr],delete n[Lr],delete n[Xa],delete n[Ji],delete n[ca]}function Hr(n){var r=n[hr];if(r)return r;for(var e=n.parentNode;e;){if(r=e[et]||e[hr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=$f(n);n!==null;){if(e=n[hr])return e;n=$f(n)}return r}n=e,e=n.parentNode}return null}function Ce(n){if(n=n[hr]||n[et]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function tt(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(d(33))}function at(n){var r=n[Zi];return r||(r=n[Zi]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function vr(n){n[Bt]=!0}var Fi=new Set,Ut={};function Be(n,r){C(n,r),C(n+"Capture",r)}function C(n,r){for(Ut[n]=r,n=0;n<r.length;n++)Fi.add(r[n])}var tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nn={},qn={};function gr(n){return Mt.call(qn,n)?!0:Mt.call(Nn,n)?!1:tn.test(n)?qn[n]=!0:(Nn[n]=!0,!1)}function zr(n,r,e){if(gr(r))if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var t=r.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+e)}}function re(n,r,e){if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+e)}}function Vr(n,r,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(r,e,""+t)}}function nr(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ee(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Pi(n,r,e){var t=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return i.call(this)},set:function(s){e=""+s,l.call(this,s)}}),Object.defineProperty(n,r,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(s){e=""+s},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ua(n){if(!n._valueTracker){var r=ee(n)?"checked":"value";n._valueTracker=Pi(n,r,""+n[r])}}function Za(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),t="";return n&&(t=ee(n)?n.checked?"true":"false":n.value),n=t,n!==e?(r.setValue(n),!0):!1}function da(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var js=/[\n"\\]/g;function Qr(n){return n.replace(js,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Fa(n,r,e,t,i,l,s,c){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),r!=null?s==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+nr(r)):n.value!==""+nr(r)&&(n.value=""+nr(r)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),r!=null?fa(n,s,nr(r)):e!=null?fa(n,s,nr(e)):t!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+nr(c):n.removeAttribute("name")}function Ht(n,r,e,t,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),r!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||r!=null)){ua(n);return}e=e!=null?""+nr(e):"",r=r!=null?""+nr(r):e,c||r===n.value||(n.value=r),n.defaultValue=r}t=t??i,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=c?n.checked:!!t,n.defaultChecked=!!t,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),ua(n)}function fa(n,r,e){r==="number"&&da(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function wr(n,r,e,t){if(n=n.options,r){r={};for(var i=0;i<e.length;i++)r["$"+e[i]]=!0;for(e=0;e<n.length;e++)i=r.hasOwnProperty("$"+n[e].value),n[e].selected!==i&&(n[e].selected=i),i&&t&&(n[e].defaultSelected=!0)}else{for(e=""+nr(e),r=null,i=0;i<n.length;i++){if(n[i].value===e){n[i].selected=!0,t&&(n[i].defaultSelected=!0);return}r!==null||n[i].disabled||(r=n[i])}r!==null&&(r.selected=!0)}}function Wi(n,r,e){if(r!=null&&(r=""+nr(r),r!==n.value&&(n.value=r),e==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=e!=null?""+nr(e):""}function ha(n,r,e,t){if(r==null){if(t!=null){if(e!=null)throw Error(d(92));if(jr(t)){if(1<t.length)throw Error(d(93));t=t[0]}e=t}e==null&&(e=""),r=e}e=nr(r),n.defaultValue=e,t=n.textContent,t===e&&t!==""&&t!==null&&(n.value=t),ua(n)}function un(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var $i=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _r(n,r,e){var t=r.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?t?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":t?n.setProperty(r,e):typeof e!="number"||e===0||$i.has(r)?r==="float"?n.cssFloat=e:n[r]=(""+e).trim():n[r]=e+"px"}function Gn(n,r,e){if(r!=null&&typeof r!="object")throw Error(d(62));if(n=n.style,e!=null){for(var t in e)!e.hasOwnProperty(t)||r!=null&&r.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var i in r)t=r[i],r.hasOwnProperty(i)&&e[i]!==t&&_r(n,i,t)}else for(var l in r)r.hasOwnProperty(l)&&_r(n,l,r[l])}function it(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lt(n){return Pa.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function I(){}var W=null;function vn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wn=null,sr=null;function de(n){var r=Ce(n);if(r&&(n=r.stateNode)){var e=n[Lr]||null;n:switch(n=r.stateNode,r.type){case"input":if(Fa(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Qr(""+r)+'"][type="radio"]'),r=0;r<e.length;r++){var t=e[r];if(t!==n&&t.form===n.form){var i=t[Lr]||null;if(!i)throw Error(d(90));Fa(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(r=0;r<e.length;r++)t=e[r],t.form===n.form&&Za(t)}break n;case"textarea":Wi(n,e.value,e.defaultValue);break n;case"select":r=e.value,r!=null&&wr(n,!!e.multiple,r,!1)}}}var Wa=!1;function nl(n,r,e){if(Wa)return n(r,e);Wa=!0;try{var t=n(r);return t}finally{if(Wa=!1,(wn!==null||sr!==null)&&(ql(),wn&&(r=wn,n=sr,sr=wn=null,de(r),n)))for(r=0;r<n.length;r++)de(n[r])}}function $a(n,r){var e=n.stateNode;if(e===null)return null;var t=e[Lr]||null;if(t===null)return null;e=t[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(d(231,r,typeof e));return e}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=!1;if(He)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Ns=!1}var st=null,Es=null,rl=null;function Vc(){if(rl)return rl;var n,r=Es,e=r.length,t,i="value"in st?st.value:st.textContent,l=i.length;for(n=0;n<e&&r[n]===i[n];n++);var s=e-n;for(t=1;t<=s&&r[e-t]===i[l-t];t++);return rl=i.slice(n,1<t?1-t:void 0)}function el(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function tl(){return!0}function Qc(){return!1}function Xr(n){function r(e,t,i,l,s){this._reactName=e,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(e=n[c],this[c]=e?e(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?tl:Qc,this.isPropagationStopped=Qc,this}return w(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),r}var It={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Xr(It),ri=w({},It,{view:0,detail:0}),gg=Xr(ri),As,ws,ei,il=w({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ks,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ei&&(ei&&n.type==="mousemove"?(As=n.screenX-ei.screenX,ws=n.screenY-ei.screenY):ws=As=0,ei=n),As)},movementY:function(n){return"movementY"in n?n.movementY:ws}}),Xc=Xr(il),pg=w({},il,{dataTransfer:0}),mg=Xr(pg),bg=w({},ri,{relatedTarget:0}),Os=Xr(bg),vg=w({},It,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=Xr(vg),xg=w({},It,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yg=Xr(xg),Tg=w({},It,{data:0}),Jc=Xr(Tg),Sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Ng[n])?!!r[n]:!1}function ks(){return Eg}var Ag=w({},ri,{key:function(n){if(n.key){var r=Sg[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=el(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ks,charCode:function(n){return n.type==="keypress"?el(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?el(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wg=Xr(Ag),Og=w({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=Xr(Og),kg=w({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ks}),Mg=Xr(kg),Rg=w({},It,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=Xr(Rg),Lg=w({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zg=Xr(Lg),Cg=w({},It,{newState:0,oldState:0}),Bg=Xr(Cg),Ug=[9,13,27,32],Ms=He&&"CompositionEvent"in window,ti=null;He&&"documentMode"in document&&(ti=document.documentMode);var Hg=He&&"TextEvent"in window&&!ti,Fc=He&&(!Ms||ti&&8<ti&&11>=ti),Pc=" ",Wc=!1;function $c(n,r){switch(n){case"keyup":return Ug.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function Ig(n,r){switch(n){case"compositionend":return nu(r);case"keypress":return r.which!==32?null:(Wc=!0,Pc);case"textInput":return n=r.data,n===Pc&&Wc?null:n;default:return null}}function qg(n,r){if(ga)return n==="compositionend"||!Ms&&$c(n,r)?(n=Vc(),rl=Es=st=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fc&&r.locale!=="ko"?null:r.data;default:return null}}var Gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Gg[n.type]:r==="textarea"}function eu(n,r,e,t){wn?sr?sr.push(t):sr=[t]:wn=t,r=Jl(r,"onChange"),0<r.length&&(e=new al("onChange","change",null,e,t),n.push({event:e,listeners:r}))}var ai=null,ii=null;function Yg(n){Hf(n,0)}function ll(n){var r=tt(n);if(Za(r))return n}function tu(n,r){if(n==="change")return r}var au=!1;if(He){var Rs;if(He){var Ds="oninput"in document;if(!Ds){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Ds=typeof iu.oninput=="function"}Rs=Ds}else Rs=!1;au=Rs&&(!document.documentMode||9<document.documentMode)}function lu(){ai&&(ai.detachEvent("onpropertychange",su),ii=ai=null)}function su(n){if(n.propertyName==="value"&&ll(ii)){var r=[];eu(r,ii,n,vn(n)),nl(Yg,r)}}function Kg(n,r,e){n==="focusin"?(lu(),ai=r,ii=e,ai.attachEvent("onpropertychange",su)):n==="focusout"&&lu()}function Vg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ll(ii)}function Qg(n,r){if(n==="click")return ll(r)}function Xg(n,r){if(n==="input"||n==="change")return ll(r)}function Jg(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var te=typeof Object.is=="function"?Object.is:Jg;function li(n,r){if(te(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var i=e[t];if(!Mt.call(r,i)||!te(n[i],r[i]))return!1}return!0}function ou(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cu(n,r){var e=ou(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=r&&t>=r)return{node:e,offset:r-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=ou(e)}}function uu(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?uu(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function du(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=da(n.document);r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=da(n.document)}return r}function Ls(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Zg=He&&"documentMode"in document&&11>=document.documentMode,pa=null,zs=null,si=null,Cs=!1;function fu(n,r,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Cs||pa==null||pa!==da(t)||(t=pa,"selectionStart"in t&&Ls(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),si&&li(si,t)||(si=t,t=Jl(zs,"onSelect"),0<t.length&&(r=new al("onSelect","select",null,r,e),n.push({event:r,listeners:t}),r.target=pa)))}function qt(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var ma={animationend:qt("Animation","AnimationEnd"),animationiteration:qt("Animation","AnimationIteration"),animationstart:qt("Animation","AnimationStart"),transitionrun:qt("Transition","TransitionRun"),transitionstart:qt("Transition","TransitionStart"),transitioncancel:qt("Transition","TransitionCancel"),transitionend:qt("Transition","TransitionEnd")},Bs={},hu={};He&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Gt(n){if(Bs[n])return Bs[n];if(!ma[n])return n;var r=ma[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in hu)return Bs[n]=r[e];return n}var gu=Gt("animationend"),pu=Gt("animationiteration"),mu=Gt("animationstart"),Fg=Gt("transitionrun"),Pg=Gt("transitionstart"),Wg=Gt("transitioncancel"),bu=Gt("transitionend"),vu=new Map,Us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Us.push("scrollEnd");function xe(n,r){vu.set(n,r),Be(r,[n])}var sl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},fe=[],ba=0,Hs=0;function ol(){for(var n=ba,r=Hs=ba=0;r<n;){var e=fe[r];fe[r++]=null;var t=fe[r];fe[r++]=null;var i=fe[r];fe[r++]=null;var l=fe[r];if(fe[r++]=null,t!==null&&i!==null){var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}l!==0&&_u(e,i,l)}}function cl(n,r,e,t){fe[ba++]=n,fe[ba++]=r,fe[ba++]=e,fe[ba++]=t,Hs|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function Is(n,r,e,t){return cl(n,r,e,t),ul(n)}function Yt(n,r){return cl(n,null,null,r),ul(n)}function _u(n,r,e){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e);for(var i=!1,l=n.return;l!==null;)l.childLanes|=e,t=l.alternate,t!==null&&(t.childLanes|=e),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&r!==null&&(i=31-Ur(e),n=l.hiddenUpdates,t=n[i],t===null?n[i]=[r]:t.push(r),r.lane=e|536870912),l):null}function ul(n){if(50<Oi)throw Oi=0,Fo=null,Error(d(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var va={};function $g(n,r,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ae(n,r,e,t){return new $g(n,r,e,t)}function qs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ie(n,r){var e=n.alternate;return e===null?(e=ae(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function xu(n,r){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function dl(n,r,e,t,i,l){var s=0;if(t=n,typeof n=="function")qs(n)&&(s=1);else if(typeof n=="string")s=am(n,e,X.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Fn:return n=ae(31,e,r,i),n.elementType=Fn,n.lanes=l,n;case Z:return Kt(e.children,i,l,r);case pn:s=8,i|=24;break;case yn:return n=ae(12,e,r,i|2),n.elementType=yn,n.lanes=l,n;case Dn:return n=ae(13,e,r,i),n.elementType=Dn,n.lanes=l,n;case mn:return n=ae(19,e,r,i),n.elementType=mn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case nn:s=10;break n;case _n:s=9;break n;case sn:s=11;break n;case cn:s=14;break n;case Ln:s=16,t=null;break n}s=29,e=Error(d(130,n===null?"null":typeof n,"")),t=null}return r=ae(s,e,r,i),r.elementType=n,r.type=t,r.lanes=l,r}function Kt(n,r,e,t){return n=ae(7,n,t,r),n.lanes=e,n}function Gs(n,r,e){return n=ae(6,n,null,r),n.lanes=e,n}function yu(n){var r=ae(18,null,null,0);return r.stateNode=n,r}function Ys(n,r,e){return r=ae(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Tu=new WeakMap;function he(n,r){if(typeof n=="object"&&n!==null){var e=Tu.get(n);return e!==void 0?e:(r={value:n,source:r,stack:je(r)},Tu.set(n,r),r)}return{value:n,source:r,stack:je(r)}}var _a=[],xa=0,fl=null,oi=0,ge=[],pe=0,ot=null,Ae=1,we="";function qe(n,r){_a[xa++]=oi,_a[xa++]=fl,fl=n,oi=r}function Su(n,r,e){ge[pe++]=Ae,ge[pe++]=we,ge[pe++]=ot,ot=n;var t=Ae;n=we;var i=32-Ur(t)-1;t&=~(1<<i),e+=1;var l=32-Ur(r)+i;if(30<l){var s=i-i%5;l=(t&(1<<s)-1).toString(32),t>>=s,i-=s,Ae=1<<32-Ur(r)+i|e<<i|t,we=l+n}else Ae=1<<l|e<<i|t,we=n}function Ks(n){n.return!==null&&(qe(n,1),Su(n,1,0))}function Vs(n){for(;n===fl;)fl=_a[--xa],_a[xa]=null,oi=_a[--xa],_a[xa]=null;for(;n===ot;)ot=ge[--pe],ge[pe]=null,we=ge[--pe],ge[pe]=null,Ae=ge[--pe],ge[pe]=null}function ju(n,r){ge[pe++]=Ae,ge[pe++]=we,ge[pe++]=ot,Ae=r.id,we=r.overflow,ot=n}var Or=null,er=null,Rn=!1,ct=null,me=!1,Qs=Error(d(519));function ut(n){var r=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ci(he(r,n)),Qs}function Nu(n){var r=n.stateNode,e=n.type,t=n.memoizedProps;switch(r[hr]=n,r[Lr]=t,e){case"dialog":An("cancel",r),An("close",r);break;case"iframe":case"object":case"embed":An("load",r);break;case"video":case"audio":for(e=0;e<Mi.length;e++)An(Mi[e],r);break;case"source":An("error",r);break;case"img":case"image":case"link":An("error",r),An("load",r);break;case"details":An("toggle",r);break;case"input":An("invalid",r),Ht(r,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":An("invalid",r);break;case"textarea":An("invalid",r),ha(r,t.value,t.defaultValue,t.children)}e=t.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||r.textContent===""+e||t.suppressHydrationWarning===!0||Yf(r.textContent,e)?(t.popover!=null&&(An("beforetoggle",r),An("toggle",r)),t.onScroll!=null&&An("scroll",r),t.onScrollEnd!=null&&An("scrollend",r),t.onClick!=null&&(r.onclick=I),r=!0):r=!1,r||ut(n,!0)}function Eu(n){for(Or=n.return;Or;)switch(Or.tag){case 5:case 31:case 13:me=!1;return;case 27:case 3:me=!0;return;default:Or=Or.return}}function ya(n){if(n!==Or)return!1;if(!Rn)return Eu(n),Rn=!0,!1;var r=n.tag,e;if((e=r!==3&&r!==27)&&((e=r===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||dc(n.type,n.memoizedProps)),e=!e),e&&er&&ut(n),Eu(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));er=Wf(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));er=Wf(n)}else r===27?(r=er,jt(n.type)?(n=mc,mc=null,er=n):er=r):er=Or?ve(n.stateNode.nextSibling):null;return!0}function Vt(){er=Or=null,Rn=!1}function Xs(){var n=ct;return n!==null&&(Pr===null?Pr=n:Pr.push.apply(Pr,n),ct=null),n}function ci(n){ct===null?ct=[n]:ct.push(n)}var Js=g(null),Qt=null,Ge=null;function dt(n,r,e){q(Js,r._currentValue),r._currentValue=e}function Ye(n){n._currentValue=Js.current,A(Js)}function Zs(n,r,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),n===e)break;n=n.return}}function Fs(n,r,e,t){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var c=l;l=i;for(var f=0;f<r.length;f++)if(c.context===r[f]){l.lanes|=e,c=l.alternate,c!==null&&(c.lanes|=e),Zs(l.return,e,n),t||(s=null);break n}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(d(341));s.lanes|=e,l=s.alternate,l!==null&&(l.lanes|=e),Zs(s,e,n),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Ta(n,r,e,t){n=null;for(var i=r,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var c=i.type;te(i.pendingProps.value,s.value)||(n!==null?n.push(c):n=[c])}}else if(i===gn.current){if(s=i.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(Ci):n=[Ci])}i=i.return}n!==null&&Fs(r,n,e,t),r.flags|=262144}function hl(n){for(n=n.firstContext;n!==null;){if(!te(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Xt(n){Qt=n,Ge=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function kr(n){return Au(Qt,n)}function gl(n,r){return Qt===null&&Xt(n),Au(n,r)}function Au(n,r){var e=r._currentValue;if(r={context:r,memoizedValue:e,next:null},Ge===null){if(n===null)throw Error(d(308));Ge=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Ge=Ge.next=r;return e}var np=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(e,t){n.push(t)}};this.abort=function(){r.aborted=!0,n.forEach(function(e){return e()})}},rp=u.unstable_scheduleCallback,ep=u.unstable_NormalPriority,xr={$$typeof:nn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ps(){return{controller:new np,data:new Map,refCount:0}}function ui(n){n.refCount--,n.refCount===0&&rp(ep,function(){n.controller.abort()})}var di=null,Ws=0,Sa=0,ja=null;function tp(n,r){if(di===null){var e=di=[];Ws=0,Sa=ec(),ja={status:"pending",value:void 0,then:function(t){e.push(t)}}}return Ws++,r.then(wu,wu),r}function wu(){if(--Ws===0&&di!==null){ja!==null&&(ja.status="fulfilled");var n=di;di=null,Sa=0,ja=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function ap(n,r){var e=[],t={status:"pending",value:null,reason:null,then:function(i){e.push(i)}};return n.then(function(){t.status="fulfilled",t.value=r;for(var i=0;i<e.length;i++)(0,e[i])(r)},function(i){for(t.status="rejected",t.reason=i,i=0;i<e.length;i++)(0,e[i])(void 0)}),t}var Ou=N.S;N.S=function(n,r){hf=dr(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&tp(n,r),Ou!==null&&Ou(n,r)};var Jt=g(null);function $s(){var n=Jt.current;return n!==null?n:Wn.pooledCache}function pl(n,r){r===null?q(Jt,Jt.current):q(Jt,r.pool)}function ku(){var n=$s();return n===null?null:{parent:xr._currentValue,pool:n}}var Na=Error(d(460)),no=Error(d(474)),ml=Error(d(542)),bl={then:function(){}};function Mu(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ru(n,r,e){switch(e=n[e],e===void 0?n.push(r):e!==r&&(r.then(I,I),r=e),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Lu(n),n;default:if(typeof r.status=="string")r.then(I,I);else{if(n=Wn,n!==null&&100<n.shellSuspendCounter)throw Error(d(482));n=r,n.status="pending",n.then(function(t){if(r.status==="pending"){var i=r;i.status="fulfilled",i.value=t}},function(t){if(r.status==="pending"){var i=r;i.status="rejected",i.reason=t}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Lu(n),n}throw Ft=r,Na}}function Zt(n){try{var r=n._init;return r(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ft=e,Na):e}}var Ft=null;function Du(){if(Ft===null)throw Error(d(459));var n=Ft;return Ft=null,n}function Lu(n){if(n===Na||n===ml)throw Error(d(483))}var Ea=null,fi=0;function vl(n){var r=fi;return fi+=1,Ea===null&&(Ea=[]),Ru(Ea,n,r)}function hi(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function _l(n,r){throw r.$$typeof===D?Error(d(525)):(n=Object.prototype.toString.call(r),Error(d(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function zu(n){function r(b,m){if(n){var y=b.deletions;y===null?(b.deletions=[m],b.flags|=16):y.push(m)}}function e(b,m){if(!n)return null;for(;m!==null;)r(b,m),m=m.sibling;return null}function t(b){for(var m=new Map;b!==null;)b.key!==null?m.set(b.key,b):m.set(b.index,b),b=b.sibling;return m}function i(b,m){return b=Ie(b,m),b.index=0,b.sibling=null,b}function l(b,m,y){return b.index=y,n?(y=b.alternate,y!==null?(y=y.index,y<m?(b.flags|=67108866,m):y):(b.flags|=67108866,m)):(b.flags|=1048576,m)}function s(b){return n&&b.alternate===null&&(b.flags|=67108866),b}function c(b,m,y,M){return m===null||m.tag!==6?(m=Gs(y,b.mode,M),m.return=b,m):(m=i(m,y),m.return=b,m)}function f(b,m,y,M){var ln=y.type;return ln===Z?O(b,m,y.props.children,M,y.key):m!==null&&(m.elementType===ln||typeof ln=="object"&&ln!==null&&ln.$$typeof===Ln&&Zt(ln)===m.type)?(m=i(m,y.props),hi(m,y),m.return=b,m):(m=dl(y.type,y.key,y.props,null,b.mode,M),hi(m,y),m.return=b,m)}function T(b,m,y,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Ys(y,b.mode,M),m.return=b,m):(m=i(m,y.children||[]),m.return=b,m)}function O(b,m,y,M,ln){return m===null||m.tag!==7?(m=Kt(y,b.mode,M,ln),m.return=b,m):(m=i(m,y),m.return=b,m)}function R(b,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Gs(""+m,b.mode,y),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Y:return y=dl(m.type,m.key,m.props,null,b.mode,y),hi(y,m),y.return=b,y;case en:return m=Ys(m,b.mode,y),m.return=b,m;case Ln:return m=Zt(m),R(b,m,y)}if(jr(m)||$n(m))return m=Kt(m,b.mode,y,null),m.return=b,m;if(typeof m.then=="function")return R(b,vl(m),y);if(m.$$typeof===nn)return R(b,gl(b,m),y);_l(b,m)}return null}function S(b,m,y,M){var ln=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return ln!==null?null:c(b,m,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Y:return y.key===ln?f(b,m,y,M):null;case en:return y.key===ln?T(b,m,y,M):null;case Ln:return y=Zt(y),S(b,m,y,M)}if(jr(y)||$n(y))return ln!==null?null:O(b,m,y,M,null);if(typeof y.then=="function")return S(b,m,vl(y),M);if(y.$$typeof===nn)return S(b,m,gl(b,y),M);_l(b,y)}return null}function j(b,m,y,M,ln){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return b=b.get(y)||null,c(m,b,""+M,ln);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Y:return b=b.get(M.key===null?y:M.key)||null,f(m,b,M,ln);case en:return b=b.get(M.key===null?y:M.key)||null,T(m,b,M,ln);case Ln:return M=Zt(M),j(b,m,y,M,ln)}if(jr(M)||$n(M))return b=b.get(y)||null,O(m,b,M,ln,null);if(typeof M.then=="function")return j(b,m,y,vl(M),ln);if(M.$$typeof===nn)return j(b,m,y,gl(m,M),ln);_l(m,M)}return null}function F(b,m,y,M){for(var ln=null,Cn=null,$=m,jn=m=0,kn=null;$!==null&&jn<y.length;jn++){$.index>jn?(kn=$,$=null):kn=$.sibling;var Bn=S(b,$,y[jn],M);if(Bn===null){$===null&&($=kn);break}n&&$&&Bn.alternate===null&&r(b,$),m=l(Bn,m,jn),Cn===null?ln=Bn:Cn.sibling=Bn,Cn=Bn,$=kn}if(jn===y.length)return e(b,$),Rn&&qe(b,jn),ln;if($===null){for(;jn<y.length;jn++)$=R(b,y[jn],M),$!==null&&(m=l($,m,jn),Cn===null?ln=$:Cn.sibling=$,Cn=$);return Rn&&qe(b,jn),ln}for($=t($);jn<y.length;jn++)kn=j($,b,jn,y[jn],M),kn!==null&&(n&&kn.alternate!==null&&$.delete(kn.key===null?jn:kn.key),m=l(kn,m,jn),Cn===null?ln=kn:Cn.sibling=kn,Cn=kn);return n&&$.forEach(function(Ot){return r(b,Ot)}),Rn&&qe(b,jn),ln}function on(b,m,y,M){if(y==null)throw Error(d(151));for(var ln=null,Cn=null,$=m,jn=m=0,kn=null,Bn=y.next();$!==null&&!Bn.done;jn++,Bn=y.next()){$.index>jn?(kn=$,$=null):kn=$.sibling;var Ot=S(b,$,Bn.value,M);if(Ot===null){$===null&&($=kn);break}n&&$&&Ot.alternate===null&&r(b,$),m=l(Ot,m,jn),Cn===null?ln=Ot:Cn.sibling=Ot,Cn=Ot,$=kn}if(Bn.done)return e(b,$),Rn&&qe(b,jn),ln;if($===null){for(;!Bn.done;jn++,Bn=y.next())Bn=R(b,Bn.value,M),Bn!==null&&(m=l(Bn,m,jn),Cn===null?ln=Bn:Cn.sibling=Bn,Cn=Bn);return Rn&&qe(b,jn),ln}for($=t($);!Bn.done;jn++,Bn=y.next())Bn=j($,b,jn,Bn.value,M),Bn!==null&&(n&&Bn.alternate!==null&&$.delete(Bn.key===null?jn:Bn.key),m=l(Bn,m,jn),Cn===null?ln=Bn:Cn.sibling=Bn,Cn=Bn);return n&&$.forEach(function(pm){return r(b,pm)}),Rn&&qe(b,jn),ln}function Jn(b,m,y,M){if(typeof y=="object"&&y!==null&&y.type===Z&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Y:n:{for(var ln=y.key;m!==null;){if(m.key===ln){if(ln=y.type,ln===Z){if(m.tag===7){e(b,m.sibling),M=i(m,y.props.children),M.return=b,b=M;break n}}else if(m.elementType===ln||typeof ln=="object"&&ln!==null&&ln.$$typeof===Ln&&Zt(ln)===m.type){e(b,m.sibling),M=i(m,y.props),hi(M,y),M.return=b,b=M;break n}e(b,m);break}else r(b,m);m=m.sibling}y.type===Z?(M=Kt(y.props.children,b.mode,M,y.key),M.return=b,b=M):(M=dl(y.type,y.key,y.props,null,b.mode,M),hi(M,y),M.return=b,b=M)}return s(b);case en:n:{for(ln=y.key;m!==null;){if(m.key===ln)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){e(b,m.sibling),M=i(m,y.children||[]),M.return=b,b=M;break n}else{e(b,m);break}else r(b,m);m=m.sibling}M=Ys(y,b.mode,M),M.return=b,b=M}return s(b);case Ln:return y=Zt(y),Jn(b,m,y,M)}if(jr(y))return F(b,m,y,M);if($n(y)){if(ln=$n(y),typeof ln!="function")throw Error(d(150));return y=ln.call(y),on(b,m,y,M)}if(typeof y.then=="function")return Jn(b,m,vl(y),M);if(y.$$typeof===nn)return Jn(b,m,gl(b,y),M);_l(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(e(b,m.sibling),M=i(m,y),M.return=b,b=M):(e(b,m),M=Gs(y,b.mode,M),M.return=b,b=M),s(b)):e(b,m)}return function(b,m,y,M){try{fi=0;var ln=Jn(b,m,y,M);return Ea=null,ln}catch($){if($===Na||$===ml)throw $;var Cn=ae(29,$,null,b.mode);return Cn.lanes=M,Cn.return=b,Cn}}}var Pt=zu(!0),Cu=zu(!1),ft=!1;function ro(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ht(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function gt(n,r,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(Un&2)!==0){var i=t.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r,r=ul(n),_u(n,null,e),r}return cl(n,t,r,e),ul(n)}function gi(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194048)!==0)){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,dn(n,e)}}function to(n,r){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var i=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var s={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,e=e.next}while(e!==null);l===null?i=l=r:l=l.next=r}else i=l=r;e={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}var ao=!1;function pi(){if(ao){var n=ja;if(n!==null)throw n}}function mi(n,r,e,t){ao=!1;var i=n.updateQueue;ft=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,T=f.next;f.next=null,s===null?l=T:s.next=T,s=f;var O=n.alternate;O!==null&&(O=O.updateQueue,c=O.lastBaseUpdate,c!==s&&(c===null?O.firstBaseUpdate=T:c.next=T,O.lastBaseUpdate=f))}if(l!==null){var R=i.baseState;s=0,O=T=f=null,c=l;do{var S=c.lane&-536870913,j=S!==c.lane;if(j?(On&S)===S:(t&S)===S){S!==0&&S===Sa&&(ao=!0),O!==null&&(O=O.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var F=n,on=c;S=r;var Jn=e;switch(on.tag){case 1:if(F=on.payload,typeof F=="function"){R=F.call(Jn,R,S);break n}R=F;break n;case 3:F.flags=F.flags&-65537|128;case 0:if(F=on.payload,S=typeof F=="function"?F.call(Jn,R,S):F,S==null)break n;R=w({},R,S);break n;case 2:ft=!0}}S=c.callback,S!==null&&(n.flags|=64,j&&(n.flags|=8192),j=i.callbacks,j===null?i.callbacks=[S]:j.push(S))}else j={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},O===null?(T=O=j,f=R):O=O.next=j,s|=S;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;j=c,c=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);O===null&&(f=R),i.baseState=f,i.firstBaseUpdate=T,i.lastBaseUpdate=O,l===null&&(i.shared.lanes=0),_t|=s,n.lanes=s,n.memoizedState=R}}function Bu(n,r){if(typeof n!="function")throw Error(d(191,n));n.call(r)}function Uu(n,r){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)Bu(e[n],r)}var Aa=g(null),xl=g(0);function Hu(n,r){n=We,q(xl,n),q(Aa,r),We=n|r.baseLanes}function io(){q(xl,We),q(Aa,Aa.current)}function lo(){We=xl.current,A(Aa),A(xl)}var ie=g(null),be=null;function pt(n){var r=n.alternate;q(pr,pr.current&1),q(ie,n),be===null&&(r===null||Aa.current!==null||r.memoizedState!==null)&&(be=n)}function so(n){q(pr,pr.current),q(ie,n),be===null&&(be=n)}function Iu(n){n.tag===22?(q(pr,pr.current),q(ie,n),be===null&&(be=n)):mt()}function mt(){q(pr,pr.current),q(ie,ie.current)}function le(n){A(ie),be===n&&(be=null),A(pr)}var pr=g(0);function yl(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||gc(e)||pc(e)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ke=0,xn=null,Qn=null,yr=null,Tl=!1,wa=!1,Wt=!1,Sl=0,bi=0,Oa=null,ip=0;function cr(){throw Error(d(321))}function oo(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!te(n[e],r[e]))return!1;return!0}function co(n,r,e,t,i,l){return Ke=l,xn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,N.H=n===null||n.memoizedState===null?Sd:No,Wt=!1,l=e(t,i),Wt=!1,wa&&(l=Gu(r,e,t,i)),qu(n),l}function qu(n){N.H=xi;var r=Qn!==null&&Qn.next!==null;if(Ke=0,yr=Qn=xn=null,Tl=!1,bi=0,Oa=null,r)throw Error(d(300));n===null||Tr||(n=n.dependencies,n!==null&&hl(n)&&(Tr=!0))}function Gu(n,r,e,t){xn=n;var i=0;do{if(wa&&(Oa=null),bi=0,wa=!1,25<=i)throw Error(d(301));if(i+=1,yr=Qn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}N.H=jd,l=r(e,t)}while(wa);return l}function lp(){var n=N.H,r=n.useState()[0];return r=typeof r.then=="function"?vi(r):r,n=n.useState()[0],(Qn!==null?Qn.memoizedState:null)!==n&&(xn.flags|=1024),r}function uo(){var n=Sl!==0;return Sl=0,n}function fo(n,r,e){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~e}function ho(n){if(Tl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Tl=!1}Ke=0,yr=Qn=xn=null,wa=!1,bi=Sl=0,Oa=null}function Ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yr===null?xn.memoizedState=yr=n:yr=yr.next=n,yr}function mr(){if(Qn===null){var n=xn.alternate;n=n!==null?n.memoizedState:null}else n=Qn.next;var r=yr===null?xn.memoizedState:yr.next;if(r!==null)yr=r,Qn=n;else{if(n===null)throw xn.alternate===null?Error(d(467)):Error(d(310));Qn=n,n={memoizedState:Qn.memoizedState,baseState:Qn.baseState,baseQueue:Qn.baseQueue,queue:Qn.queue,next:null},yr===null?xn.memoizedState=yr=n:yr=yr.next=n}return yr}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vi(n){var r=bi;return bi+=1,Oa===null&&(Oa=[]),n=Ru(Oa,n,r),r=xn,(yr===null?r.memoizedState:yr.next)===null&&(r=r.alternate,N.H=r===null||r.memoizedState===null?Sd:No),n}function Nl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return vi(n);if(n.$$typeof===nn)return kr(n)}throw Error(d(438,String(n)))}function go(n){var r=null,e=xn.updateQueue;if(e!==null&&(r=e.memoCache),r==null){var t=xn.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(r={data:t.data.map(function(i){return i.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),e===null&&(e=jl(),xn.updateQueue=e),e.memoCache=r,e=r.data[r.index],e===void 0)for(e=r.data[r.index]=Array(n),t=0;t<n;t++)e[t]=br;return r.index++,e}function Ve(n,r){return typeof r=="function"?r(n):r}function El(n){var r=mr();return po(r,Qn,n)}function po(n,r,e){var t=n.queue;if(t===null)throw Error(d(311));t.lastRenderedReducer=e;var i=n.baseQueue,l=t.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,t.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{r=i.next;var c=s=null,f=null,T=r,O=!1;do{var R=T.lane&-536870913;if(R!==T.lane?(On&R)===R:(Ke&R)===R){var S=T.revertLane;if(S===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),R===Sa&&(O=!0);else if((Ke&S)===S){T=T.next,S===Sa&&(O=!0);continue}else R={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=R,s=l):f=f.next=R,xn.lanes|=S,_t|=S;R=T.action,Wt&&e(l,R),l=T.hasEagerState?T.eagerState:e(l,R)}else S={lane:R,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(c=f=S,s=l):f=f.next=S,xn.lanes|=R,_t|=R;T=T.next}while(T!==null&&T!==r);if(f===null?s=l:f.next=c,!te(l,n.memoizedState)&&(Tr=!0,O&&(e=ja,e!==null)))throw e;n.memoizedState=l,n.baseState=s,n.baseQueue=f,t.lastRenderedState=l}return i===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function mo(n){var r=mr(),e=r.queue;if(e===null)throw Error(d(311));e.lastRenderedReducer=n;var t=e.dispatch,i=e.pending,l=r.memoizedState;if(i!==null){e.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);te(l,r.memoizedState)||(Tr=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),e.lastRenderedState=l}return[l,t]}function Yu(n,r,e){var t=xn,i=mr(),l=Rn;if(l){if(e===void 0)throw Error(d(407));e=e()}else e=r();var s=!te((Qn||i).memoizedState,e);if(s&&(i.memoizedState=e,Tr=!0),i=i.queue,_o(Qu.bind(null,t,i,n),[n]),i.getSnapshot!==r||s||yr!==null&&yr.memoizedState.tag&1){if(t.flags|=2048,ka(9,{destroy:void 0},Vu.bind(null,t,i,e,r),null),Wn===null)throw Error(d(349));l||(Ke&127)!==0||Ku(t,r,e)}return e}function Ku(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=xn.updateQueue,r===null?(r=jl(),xn.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function Vu(n,r,e,t){r.value=e,r.getSnapshot=t,Xu(r)&&Ju(n)}function Qu(n,r,e){return e(function(){Xu(r)&&Ju(n)})}function Xu(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!te(n,e)}catch{return!0}}function Ju(n){var r=Yt(n,2);r!==null&&Wr(r,n,2)}function bo(n){var r=Ir();if(typeof n=="function"){var e=n;if(n=e(),Wt){Ne(!0);try{e()}finally{Ne(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:n},r}function Zu(n,r,e,t){return n.baseState=e,po(n,Qn,typeof t=="function"?t:Ve)}function sp(n,r,e,t,i){if(Ol(n))throw Error(d(485));if(n=r.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};N.T!==null?e(!0):l.isTransition=!1,t(l),e=r.pending,e===null?(l.next=r.pending=l,Fu(r,l)):(l.next=e.next,r.pending=e.next=l)}}function Fu(n,r){var e=r.action,t=r.payload,i=n.state;if(r.isTransition){var l=N.T,s={};N.T=s;try{var c=e(i,t),f=N.S;f!==null&&f(s,c),Pu(n,r,c)}catch(T){vo(n,r,T)}finally{l!==null&&s.types!==null&&(l.types=s.types),N.T=l}}else try{l=e(i,t),Pu(n,r,l)}catch(T){vo(n,r,T)}}function Pu(n,r,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(t){Wu(n,r,t)},function(t){return vo(n,r,t)}):Wu(n,r,e)}function Wu(n,r,e){r.status="fulfilled",r.value=e,$u(r),n.state=e,r=n.pending,r!==null&&(e=r.next,e===r?n.pending=null:(e=e.next,r.next=e,Fu(n,e)))}function vo(n,r,e){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do r.status="rejected",r.reason=e,$u(r),r=r.next;while(r!==t)}n.action=null}function $u(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function nd(n,r){return r}function rd(n,r){if(Rn){var e=Wn.formState;if(e!==null){n:{var t=xn;if(Rn){if(er){r:{for(var i=er,l=me;i.nodeType!==8;){if(!l){i=null;break r}if(i=ve(i.nextSibling),i===null){i=null;break r}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){er=ve(i.nextSibling),t=i.data==="F!";break n}}ut(t)}t=!1}t&&(r=e[0])}}return e=Ir(),e.memoizedState=e.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nd,lastRenderedState:r},e.queue=t,e=xd.bind(null,xn,t),t.dispatch=e,t=bo(!1),l=jo.bind(null,xn,!1,t.queue),t=Ir(),i={state:r,dispatch:null,action:n,pending:null},t.queue=i,e=sp.bind(null,xn,i,l,e),i.dispatch=e,t.memoizedState=n,[r,e,!1]}function ed(n){var r=mr();return td(r,Qn,n)}function td(n,r,e){if(r=po(n,r,nd)[0],n=El(Ve)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var t=vi(r)}catch(s){throw s===Na?ml:s}else t=r;r=mr();var i=r.queue,l=i.dispatch;return e!==r.memoizedState&&(xn.flags|=2048,ka(9,{destroy:void 0},op.bind(null,i,e),null)),[t,l,n]}function op(n,r){n.action=r}function ad(n){var r=mr(),e=Qn;if(e!==null)return td(r,e,n);mr(),r=r.memoizedState,e=mr();var t=e.queue.dispatch;return e.memoizedState=n,[r,t,!1]}function ka(n,r,e,t){return n={tag:n,create:e,deps:t,inst:r,next:null},r=xn.updateQueue,r===null&&(r=jl(),xn.updateQueue=r),e=r.lastEffect,e===null?r.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,r.lastEffect=n),n}function id(){return mr().memoizedState}function Al(n,r,e,t){var i=Ir();xn.flags|=n,i.memoizedState=ka(1|r,{destroy:void 0},e,t===void 0?null:t)}function wl(n,r,e,t){var i=mr();t=t===void 0?null:t;var l=i.memoizedState.inst;Qn!==null&&t!==null&&oo(t,Qn.memoizedState.deps)?i.memoizedState=ka(r,l,e,t):(xn.flags|=n,i.memoizedState=ka(1|r,l,e,t))}function ld(n,r){Al(8390656,8,n,r)}function _o(n,r){wl(2048,8,n,r)}function cp(n){xn.flags|=4;var r=xn.updateQueue;if(r===null)r=jl(),xn.updateQueue=r,r.events=[n];else{var e=r.events;e===null?r.events=[n]:e.push(n)}}function sd(n){var r=mr().memoizedState;return cp({ref:r,nextImpl:n}),function(){if((Un&2)!==0)throw Error(d(440));return r.impl.apply(void 0,arguments)}}function od(n,r){return wl(4,2,n,r)}function cd(n,r){return wl(4,4,n,r)}function ud(n,r){if(typeof r=="function"){n=n();var e=r(n);return function(){typeof e=="function"?e():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function dd(n,r,e){e=e!=null?e.concat([n]):null,wl(4,4,ud.bind(null,r,n),e)}function xo(){}function fd(n,r){var e=mr();r=r===void 0?null:r;var t=e.memoizedState;return r!==null&&oo(r,t[1])?t[0]:(e.memoizedState=[n,r],n)}function hd(n,r){var e=mr();r=r===void 0?null:r;var t=e.memoizedState;if(r!==null&&oo(r,t[1]))return t[0];if(t=n(),Wt){Ne(!0);try{n()}finally{Ne(!1)}}return e.memoizedState=[t,r],t}function yo(n,r,e){return e===void 0||(Ke&1073741824)!==0&&(On&261930)===0?n.memoizedState=r:(n.memoizedState=e,n=pf(),xn.lanes|=n,_t|=n,e)}function gd(n,r,e,t){return te(e,r)?e:Aa.current!==null?(n=yo(n,e,t),te(n,r)||(Tr=!0),n):(Ke&42)===0||(Ke&1073741824)!==0&&(On&261930)===0?(Tr=!0,n.memoizedState=e):(n=pf(),xn.lanes|=n,_t|=n,r)}function pd(n,r,e,t,i){var l=H.p;H.p=l!==0&&8>l?l:8;var s=N.T,c={};N.T=c,jo(n,!1,r,e);try{var f=i(),T=N.S;if(T!==null&&T(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var O=ap(f,t);_i(n,r,O,ce(n))}else _i(n,r,t,ce(n))}catch(R){_i(n,r,{then:function(){},status:"rejected",reason:R},ce())}finally{H.p=l,s!==null&&c.types!==null&&(s.types=c.types),N.T=s}}function up(){}function To(n,r,e,t){if(n.tag!==5)throw Error(d(476));var i=md(n).queue;pd(n,i,r,K,e===null?up:function(){return bd(n),e(t)})}function md(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:K},next:null};var e={};return r.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:e},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function bd(n){var r=md(n);r.next===null&&(r=n.alternate.memoizedState),_i(n,r.next.queue,{},ce())}function So(){return kr(Ci)}function vd(){return mr().memoizedState}function _d(){return mr().memoizedState}function dp(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var e=ce();n=ht(e);var t=gt(r,n,e);t!==null&&(Wr(t,r,e),gi(t,r,e)),r={cache:Ps()},n.payload=r;return}r=r.return}}function fp(n,r,e){var t=ce();e={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Ol(n)?yd(r,e):(e=Is(n,r,e,t),e!==null&&(Wr(e,n,t),Td(e,r,t)))}function xd(n,r,e){var t=ce();_i(n,r,e,t)}function _i(n,r,e,t){var i={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ol(n))yd(r,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var s=r.lastRenderedState,c=l(s,e);if(i.hasEagerState=!0,i.eagerState=c,te(c,s))return cl(n,r,i,0),Wn===null&&ol(),!1}catch{}if(e=Is(n,r,i,t),e!==null)return Wr(e,n,t),Td(e,r,t),!0}return!1}function jo(n,r,e,t){if(t={lane:2,revertLane:ec(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ol(n)){if(r)throw Error(d(479))}else r=Is(n,e,t,2),r!==null&&Wr(r,n,2)}function Ol(n){var r=n.alternate;return n===xn||r!==null&&r===xn}function yd(n,r){wa=Tl=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function Td(n,r,e){if((e&4194048)!==0){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,dn(n,e)}}var xi={readContext:kr,use:Nl,useCallback:cr,useContext:cr,useEffect:cr,useImperativeHandle:cr,useLayoutEffect:cr,useInsertionEffect:cr,useMemo:cr,useReducer:cr,useRef:cr,useState:cr,useDebugValue:cr,useDeferredValue:cr,useTransition:cr,useSyncExternalStore:cr,useId:cr,useHostTransitionStatus:cr,useFormState:cr,useActionState:cr,useOptimistic:cr,useMemoCache:cr,useCacheRefresh:cr};xi.useEffectEvent=cr;var Sd={readContext:kr,use:Nl,useCallback:function(n,r){return Ir().memoizedState=[n,r===void 0?null:r],n},useContext:kr,useEffect:ld,useImperativeHandle:function(n,r,e){e=e!=null?e.concat([n]):null,Al(4194308,4,ud.bind(null,r,n),e)},useLayoutEffect:function(n,r){return Al(4194308,4,n,r)},useInsertionEffect:function(n,r){Al(4,2,n,r)},useMemo:function(n,r){var e=Ir();r=r===void 0?null:r;var t=n();if(Wt){Ne(!0);try{n()}finally{Ne(!1)}}return e.memoizedState=[t,r],t},useReducer:function(n,r,e){var t=Ir();if(e!==void 0){var i=e(r);if(Wt){Ne(!0);try{e(r)}finally{Ne(!1)}}}else i=r;return t.memoizedState=t.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},t.queue=n,n=n.dispatch=fp.bind(null,xn,n),[t.memoizedState,n]},useRef:function(n){var r=Ir();return n={current:n},r.memoizedState=n},useState:function(n){n=bo(n);var r=n.queue,e=xd.bind(null,xn,r);return r.dispatch=e,[n.memoizedState,e]},useDebugValue:xo,useDeferredValue:function(n,r){var e=Ir();return yo(e,n,r)},useTransition:function(){var n=bo(!1);return n=pd.bind(null,xn,n.queue,!0,!1),Ir().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,e){var t=xn,i=Ir();if(Rn){if(e===void 0)throw Error(d(407));e=e()}else{if(e=r(),Wn===null)throw Error(d(349));(On&127)!==0||Ku(t,r,e)}i.memoizedState=e;var l={value:e,getSnapshot:r};return i.queue=l,ld(Qu.bind(null,t,l,n),[n]),t.flags|=2048,ka(9,{destroy:void 0},Vu.bind(null,t,l,e,r),null),e},useId:function(){var n=Ir(),r=Wn.identifierPrefix;if(Rn){var e=we,t=Ae;e=(t&~(1<<32-Ur(t)-1)).toString(32)+e,r="_"+r+"R_"+e,e=Sl++,0<e&&(r+="H"+e.toString(32)),r+="_"}else e=ip++,r="_"+r+"r_"+e.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:So,useFormState:rd,useActionState:rd,useOptimistic:function(n){var r=Ir();r.memoizedState=r.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=e,r=jo.bind(null,xn,!0,e),e.dispatch=r,[n,r]},useMemoCache:go,useCacheRefresh:function(){return Ir().memoizedState=dp.bind(null,xn)},useEffectEvent:function(n){var r=Ir(),e={impl:n};return r.memoizedState=e,function(){if((Un&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}},No={readContext:kr,use:Nl,useCallback:fd,useContext:kr,useEffect:_o,useImperativeHandle:dd,useInsertionEffect:od,useLayoutEffect:cd,useMemo:hd,useReducer:El,useRef:id,useState:function(){return El(Ve)},useDebugValue:xo,useDeferredValue:function(n,r){var e=mr();return gd(e,Qn.memoizedState,n,r)},useTransition:function(){var n=El(Ve)[0],r=mr().memoizedState;return[typeof n=="boolean"?n:vi(n),r]},useSyncExternalStore:Yu,useId:vd,useHostTransitionStatus:So,useFormState:ed,useActionState:ed,useOptimistic:function(n,r){var e=mr();return Zu(e,Qn,n,r)},useMemoCache:go,useCacheRefresh:_d};No.useEffectEvent=sd;var jd={readContext:kr,use:Nl,useCallback:fd,useContext:kr,useEffect:_o,useImperativeHandle:dd,useInsertionEffect:od,useLayoutEffect:cd,useMemo:hd,useReducer:mo,useRef:id,useState:function(){return mo(Ve)},useDebugValue:xo,useDeferredValue:function(n,r){var e=mr();return Qn===null?yo(e,n,r):gd(e,Qn.memoizedState,n,r)},useTransition:function(){var n=mo(Ve)[0],r=mr().memoizedState;return[typeof n=="boolean"?n:vi(n),r]},useSyncExternalStore:Yu,useId:vd,useHostTransitionStatus:So,useFormState:ad,useActionState:ad,useOptimistic:function(n,r){var e=mr();return Qn!==null?Zu(e,Qn,n,r):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:go,useCacheRefresh:_d};jd.useEffectEvent=sd;function Eo(n,r,e,t){r=n.memoizedState,e=e(t,r),e=e==null?r:w({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var Ao={enqueueSetState:function(n,r,e){n=n._reactInternals;var t=ce(),i=ht(t);i.payload=r,e!=null&&(i.callback=e),r=gt(n,i,t),r!==null&&(Wr(r,n,t),gi(r,n,t))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var t=ce(),i=ht(t);i.tag=1,i.payload=r,e!=null&&(i.callback=e),r=gt(n,i,t),r!==null&&(Wr(r,n,t),gi(r,n,t))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=ce(),t=ht(e);t.tag=2,r!=null&&(t.callback=r),r=gt(n,t,e),r!==null&&(Wr(r,n,e),gi(r,n,e))}};function Nd(n,r,e,t,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,s):r.prototype&&r.prototype.isPureReactComponent?!li(e,t)||!li(i,l):!0}function Ed(n,r,e,t){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,t),r.state!==n&&Ao.enqueueReplaceState(r,r.state,null)}function $t(n,r){var e=r;if("ref"in r){e={};for(var t in r)t!=="ref"&&(e[t]=r[t])}if(n=n.defaultProps){e===r&&(e=w({},e));for(var i in n)e[i]===void 0&&(e[i]=n[i])}return e}function Ad(n){sl(n)}function wd(n){console.error(n)}function Od(n){sl(n)}function kl(n,r){try{var e=n.onUncaughtError;e(r.value,{componentStack:r.stack})}catch(t){setTimeout(function(){throw t})}}function kd(n,r,e){try{var t=n.onCaughtError;t(e.value,{componentStack:e.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function wo(n,r,e){return e=ht(e),e.tag=3,e.payload={element:null},e.callback=function(){kl(n,r)},e}function Md(n){return n=ht(n),n.tag=3,n}function Rd(n,r,e,t){var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;n.payload=function(){return i(l)},n.callback=function(){kd(r,e,t)}}var s=e.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kd(r,e,t),typeof i!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})})}function hp(n,r,e,t,i){if(e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(r=e.alternate,r!==null&&Ta(r,e,i,!0),e=ie.current,e!==null){switch(e.tag){case 31:case 13:return be===null?Gl():e.alternate===null&&ur===0&&(ur=3),e.flags&=-257,e.flags|=65536,e.lanes=i,t===bl?e.flags|=16384:(r=e.updateQueue,r===null?e.updateQueue=new Set([t]):r.add(t),$o(n,t,i)),!1;case 22:return e.flags|=65536,t===bl?e.flags|=16384:(r=e.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([t])},e.updateQueue=r):(e=r.retryQueue,e===null?r.retryQueue=new Set([t]):e.add(t)),$o(n,t,i)),!1}throw Error(d(435,e.tag))}return $o(n,t,i),Gl(),!1}if(Rn)return r=ie.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=i,t!==Qs&&(n=Error(d(422),{cause:t}),ci(he(n,e)))):(t!==Qs&&(r=Error(d(423),{cause:t}),ci(he(r,e))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,t=he(t,e),i=wo(n.stateNode,t,i),to(n,i),ur!==4&&(ur=2)),!1;var l=Error(d(520),{cause:t});if(l=he(l,e),wi===null?wi=[l]:wi.push(l),ur!==4&&(ur=2),r===null)return!0;t=he(t,e),e=r;do{switch(e.tag){case 3:return e.flags|=65536,n=i&-i,e.lanes|=n,n=wo(e.stateNode,t,n),to(e,n),!1;case 1:if(r=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(xt===null||!xt.has(l))))return e.flags|=65536,i&=-i,e.lanes|=i,i=Md(i),Rd(i,n,e,t),to(e,i),!1}e=e.return}while(e!==null);return!1}var Oo=Error(d(461)),Tr=!1;function Mr(n,r,e,t){r.child=n===null?Cu(r,null,e,t):Pt(r,n.child,e,t)}function Dd(n,r,e,t,i){e=e.render;var l=r.ref;if("ref"in t){var s={};for(var c in t)c!=="ref"&&(s[c]=t[c])}else s=t;return Xt(r),t=co(n,r,e,s,l,i),c=uo(),n!==null&&!Tr?(fo(n,r,i),Qe(n,r,i)):(Rn&&c&&Ks(r),r.flags|=1,Mr(n,r,t,i),r.child)}function Ld(n,r,e,t,i){if(n===null){var l=e.type;return typeof l=="function"&&!qs(l)&&l.defaultProps===void 0&&e.compare===null?(r.tag=15,r.type=l,zd(n,r,l,t,i)):(n=dl(e.type,null,t,r,r.mode,i),n.ref=r.ref,n.return=r,r.child=n)}if(l=n.child,!Bo(n,i)){var s=l.memoizedProps;if(e=e.compare,e=e!==null?e:li,e(s,t)&&n.ref===r.ref)return Qe(n,r,i)}return r.flags|=1,n=Ie(l,t),n.ref=r.ref,n.return=r,r.child=n}function zd(n,r,e,t,i){if(n!==null){var l=n.memoizedProps;if(li(l,t)&&n.ref===r.ref)if(Tr=!1,r.pendingProps=t=l,Bo(n,i))(n.flags&131072)!==0&&(Tr=!0);else return r.lanes=n.lanes,Qe(n,r,i)}return ko(n,r,e,t,i)}function Cd(n,r,e,t){var i=t.children,l=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((r.flags&128)!==0){if(l=l!==null?l.baseLanes|e:e,n!==null){for(t=r.child=n.child,i=0;t!==null;)i=i|t.lanes|t.childLanes,t=t.sibling;t=i&~l}else t=0,r.child=null;return Bd(n,r,l,e,t)}if((e&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&pl(r,l!==null?l.cachePool:null),l!==null?Hu(r,l):io(),Iu(r);else return t=r.lanes=536870912,Bd(n,r,l!==null?l.baseLanes|e:e,e,t)}else l!==null?(pl(r,l.cachePool),Hu(r,l),mt(),r.memoizedState=null):(n!==null&&pl(r,null),io(),mt());return Mr(n,r,i,e),r.child}function yi(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function Bd(n,r,e,t,i){var l=$s();return l=l===null?null:{parent:xr._currentValue,pool:l},r.memoizedState={baseLanes:e,cachePool:l},n!==null&&pl(r,null),io(),Iu(r),n!==null&&Ta(n,r,t,!0),r.childLanes=i,null}function Ml(n,r){return r=Dl({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function Ud(n,r,e){return Pt(r,n.child,null,e),n=Ml(r,r.pendingProps),n.flags|=2,le(r),r.memoizedState=null,n}function gp(n,r,e){var t=r.pendingProps,i=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Rn){if(t.mode==="hidden")return n=Ml(r,t),r.lanes=536870912,yi(null,n);if(so(r),(n=er)?(n=Pf(n,me),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:ot!==null?{id:Ae,overflow:we}:null,retryLane:536870912,hydrationErrors:null},e=yu(n),e.return=r,r.child=e,Or=r,er=null)):n=null,n===null)throw ut(r);return r.lanes=536870912,null}return Ml(r,t)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(so(r),i)if(r.flags&256)r.flags&=-257,r=Ud(n,r,e);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(d(558));else if(Tr||Ta(n,r,e,!1),i=(e&n.childLanes)!==0,Tr||i){if(t=Wn,t!==null&&(s=fr(t,e),s!==0&&s!==l.retryLane))throw l.retryLane=s,Yt(n,s),Wr(t,n,s),Oo;Gl(),r=Ud(n,r,e)}else n=l.treeContext,er=ve(s.nextSibling),Or=r,Rn=!0,ct=null,me=!1,n!==null&&ju(r,n),r=Ml(r,t),r.flags|=4096;return r}return n=Ie(n.child,{mode:t.mode,children:t.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Rl(n,r){var e=r.ref;if(e===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(d(284));(n===null||n.ref!==e)&&(r.flags|=4194816)}}function ko(n,r,e,t,i){return Xt(r),e=co(n,r,e,t,void 0,i),t=uo(),n!==null&&!Tr?(fo(n,r,i),Qe(n,r,i)):(Rn&&t&&Ks(r),r.flags|=1,Mr(n,r,e,i),r.child)}function Hd(n,r,e,t,i,l){return Xt(r),r.updateQueue=null,e=Gu(r,t,e,i),qu(n),t=uo(),n!==null&&!Tr?(fo(n,r,l),Qe(n,r,l)):(Rn&&t&&Ks(r),r.flags|=1,Mr(n,r,e,l),r.child)}function Id(n,r,e,t,i){if(Xt(r),r.stateNode===null){var l=va,s=e.contextType;typeof s=="object"&&s!==null&&(l=kr(s)),l=new e(t,l),r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ao,r.stateNode=l,l._reactInternals=r,l=r.stateNode,l.props=t,l.state=r.memoizedState,l.refs={},ro(r),s=e.contextType,l.context=typeof s=="object"&&s!==null?kr(s):va,l.state=r.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eo(r,e,s,t),l.state=r.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&Ao.enqueueReplaceState(l,l.state,null),mi(r,t,l,i),pi(),l.state=r.memoizedState),typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!0}else if(n===null){l=r.stateNode;var c=r.memoizedProps,f=$t(e,c);l.props=f;var T=l.context,O=e.contextType;s=va,typeof O=="object"&&O!==null&&(s=kr(O));var R=e.getDerivedStateFromProps;O=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=r.pendingProps!==c,O||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||T!==s)&&Ed(r,l,t,s),ft=!1;var S=r.memoizedState;l.state=S,mi(r,t,l,i),pi(),T=r.memoizedState,c||S!==T||ft?(typeof R=="function"&&(Eo(r,e,R,t),T=r.memoizedState),(f=ft||Nd(r,e,f,t,S,T,s))?(O||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=T),l.props=t,l.state=T,l.context=s,t=f):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{l=r.stateNode,eo(n,r),s=r.memoizedProps,O=$t(e,s),l.props=O,R=r.pendingProps,S=l.context,T=e.contextType,f=va,typeof T=="object"&&T!==null&&(f=kr(T)),c=e.getDerivedStateFromProps,(T=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==R||S!==f)&&Ed(r,l,t,f),ft=!1,S=r.memoizedState,l.state=S,mi(r,t,l,i),pi();var j=r.memoizedState;s!==R||S!==j||ft||n!==null&&n.dependencies!==null&&hl(n.dependencies)?(typeof c=="function"&&(Eo(r,e,c,t),j=r.memoizedState),(O=ft||Nd(r,e,O,t,S,j,f)||n!==null&&n.dependencies!==null&&hl(n.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,j,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,j,f)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=j),l.props=t,l.state=j,l.context=f,t=O):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&S===n.memoizedState||(r.flags|=1024),t=!1)}return l=t,Rl(n,r),t=(r.flags&128)!==0,l||t?(l=r.stateNode,e=t&&typeof e.getDerivedStateFromError!="function"?null:l.render(),r.flags|=1,n!==null&&t?(r.child=Pt(r,n.child,null,i),r.child=Pt(r,null,e,i)):Mr(n,r,e,i),r.memoizedState=l.state,n=r.child):n=Qe(n,r,i),n}function qd(n,r,e,t){return Vt(),r.flags|=256,Mr(n,r,e,t),r.child}var Mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ro(n){return{baseLanes:n,cachePool:ku()}}function Do(n,r,e){return n=n!==null?n.childLanes&~e:0,r&&(n|=oe),n}function Gd(n,r,e){var t=r.pendingProps,i=!1,l=(r.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(pr.current&2)!==0),s&&(i=!0,r.flags&=-129),s=(r.flags&32)!==0,r.flags&=-33,n===null){if(Rn){if(i?pt(r):mt(),(n=er)?(n=Pf(n,me),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:ot!==null?{id:Ae,overflow:we}:null,retryLane:536870912,hydrationErrors:null},e=yu(n),e.return=r,r.child=e,Or=r,er=null)):n=null,n===null)throw ut(r);return pc(n)?r.lanes=32:r.lanes=536870912,null}var c=t.children;return t=t.fallback,i?(mt(),i=r.mode,c=Dl({mode:"hidden",children:c},i),t=Kt(t,i,e,null),c.return=r,t.return=r,c.sibling=t,r.child=c,t=r.child,t.memoizedState=Ro(e),t.childLanes=Do(n,s,e),r.memoizedState=Mo,yi(null,t)):(pt(r),Lo(r,c))}var f=n.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(l)r.flags&256?(pt(r),r.flags&=-257,r=zo(n,r,e)):r.memoizedState!==null?(mt(),r.child=n.child,r.flags|=128,r=null):(mt(),c=t.fallback,i=r.mode,t=Dl({mode:"visible",children:t.children},i),c=Kt(c,i,e,null),c.flags|=2,t.return=r,c.return=r,t.sibling=c,r.child=t,Pt(r,n.child,null,e),t=r.child,t.memoizedState=Ro(e),t.childLanes=Do(n,s,e),r.memoizedState=Mo,r=yi(null,t));else if(pt(r),pc(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var T=s.dgst;s=T,t=Error(d(419)),t.stack="",t.digest=s,ci({value:t,source:null,stack:null}),r=zo(n,r,e)}else if(Tr||Ta(n,r,e,!1),s=(e&n.childLanes)!==0,Tr||s){if(s=Wn,s!==null&&(t=fr(s,e),t!==0&&t!==f.retryLane))throw f.retryLane=t,Yt(n,t),Wr(s,n,t),Oo;gc(c)||Gl(),r=zo(n,r,e)}else gc(c)?(r.flags|=192,r.child=n.child,r=null):(n=f.treeContext,er=ve(c.nextSibling),Or=r,Rn=!0,ct=null,me=!1,n!==null&&ju(r,n),r=Lo(r,t.children),r.flags|=4096);return r}return i?(mt(),c=t.fallback,i=r.mode,f=n.child,T=f.sibling,t=Ie(f,{mode:"hidden",children:t.children}),t.subtreeFlags=f.subtreeFlags&65011712,T!==null?c=Ie(T,c):(c=Kt(c,i,e,null),c.flags|=2),c.return=r,t.return=r,t.sibling=c,r.child=t,yi(null,t),t=r.child,c=n.child.memoizedState,c===null?c=Ro(e):(i=c.cachePool,i!==null?(f=xr._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=ku(),c={baseLanes:c.baseLanes|e,cachePool:i}),t.memoizedState=c,t.childLanes=Do(n,s,e),r.memoizedState=Mo,yi(n.child,t)):(pt(r),e=n.child,n=e.sibling,e=Ie(e,{mode:"visible",children:t.children}),e.return=r,e.sibling=null,n!==null&&(s=r.deletions,s===null?(r.deletions=[n],r.flags|=16):s.push(n)),r.child=e,r.memoizedState=null,e)}function Lo(n,r){return r=Dl({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Dl(n,r){return n=ae(22,n,null,r),n.lanes=0,n}function zo(n,r,e){return Pt(r,n.child,null,e),n=Lo(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Yd(n,r,e){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r),Zs(n.return,r,e)}function Co(n,r,e,t,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:i,treeForkCount:l}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=e,s.tailMode=i,s.treeForkCount=l)}function Kd(n,r,e){var t=r.pendingProps,i=t.revealOrder,l=t.tail;t=t.children;var s=pr.current,c=(s&2)!==0;if(c?(s=s&1|2,r.flags|=128):s&=1,q(pr,s),Mr(n,r,t,e),t=Rn?oi:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yd(n,e,r);else if(n.tag===19)Yd(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"forwards":for(e=r.child,i=null;e!==null;)n=e.alternate,n!==null&&yl(n)===null&&(i=e),e=e.sibling;e=i,e===null?(i=r.child,r.child=null):(i=e.sibling,e.sibling=null),Co(r,!1,i,e,l,t);break;case"backwards":case"unstable_legacy-backwards":for(e=null,i=r.child,r.child=null;i!==null;){if(n=i.alternate,n!==null&&yl(n)===null){r.child=i;break}n=i.sibling,i.sibling=e,e=i,i=n}Co(r,!0,e,null,l,t);break;case"together":Co(r,!1,null,null,void 0,t);break;default:r.memoizedState=null}return r.child}function Qe(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),_t|=r.lanes,(e&r.childLanes)===0)if(n!==null){if(Ta(n,r,e,!1),(e&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(d(153));if(r.child!==null){for(n=r.child,e=Ie(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=Ie(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function Bo(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&hl(n)))}function pp(n,r,e){switch(r.tag){case 3:Mn(r,r.stateNode.containerInfo),dt(r,xr,n.memoizedState.cache),Vt();break;case 27:case 5:Br(r);break;case 4:Mn(r,r.stateNode.containerInfo);break;case 10:dt(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,so(r),null;break;case 13:var t=r.memoizedState;if(t!==null)return t.dehydrated!==null?(pt(r),r.flags|=128,null):(e&r.child.childLanes)!==0?Gd(n,r,e):(pt(r),n=Qe(n,r,e),n!==null?n.sibling:null);pt(r);break;case 19:var i=(n.flags&128)!==0;if(t=(e&r.childLanes)!==0,t||(Ta(n,r,e,!1),t=(e&r.childLanes)!==0),i){if(t)return Kd(n,r,e);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(pr,pr.current),t)break;return null;case 22:return r.lanes=0,Cd(n,r,e,r.pendingProps);case 24:dt(r,xr,n.memoizedState.cache)}return Qe(n,r,e)}function Vd(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps)Tr=!0;else{if(!Bo(n,e)&&(r.flags&128)===0)return Tr=!1,pp(n,r,e);Tr=(n.flags&131072)!==0}else Tr=!1,Rn&&(r.flags&1048576)!==0&&Su(r,oi,r.index);switch(r.lanes=0,r.tag){case 16:n:{var t=r.pendingProps;if(n=Zt(r.elementType),r.type=n,typeof n=="function")qs(n)?(t=$t(n,t),r.tag=1,r=Id(null,r,n,t,e)):(r.tag=0,r=ko(null,r,n,t,e));else{if(n!=null){var i=n.$$typeof;if(i===sn){r.tag=11,r=Dd(null,r,n,t,e);break n}else if(i===cn){r.tag=14,r=Ld(null,r,n,t,e);break n}}throw r=ar(n)||n,Error(d(306,r,""))}}return r;case 0:return ko(n,r,r.type,r.pendingProps,e);case 1:return t=r.type,i=$t(t,r.pendingProps),Id(n,r,t,i,e);case 3:n:{if(Mn(r,r.stateNode.containerInfo),n===null)throw Error(d(387));t=r.pendingProps;var l=r.memoizedState;i=l.element,eo(n,r),mi(r,t,null,e);var s=r.memoizedState;if(t=s.cache,dt(r,xr,t),t!==l.cache&&Fs(r,[xr],e,!0),pi(),t=s.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:s.cache},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){r=qd(n,r,t,e);break n}else if(t!==i){i=he(Error(d(424)),r),ci(i),r=qd(n,r,t,e);break n}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,er=ve(n.firstChild),Or=r,Rn=!0,ct=null,me=!0,e=Cu(r,null,t,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Vt(),t===i){r=Qe(n,r,e);break n}Mr(n,r,t,e)}r=r.child}return r;case 26:return Rl(n,r),n===null?(e=th(r.type,null,r.pendingProps,null))?r.memoizedState=e:Rn||(e=r.type,n=r.pendingProps,t=Zl(hn.current).createElement(e),t[hr]=r,t[Lr]=n,Rr(t,e,n),vr(t),r.stateNode=t):r.memoizedState=th(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Br(r),n===null&&Rn&&(t=r.stateNode=nh(r.type,r.pendingProps,hn.current),Or=r,me=!0,i=er,jt(r.type)?(mc=i,er=ve(t.firstChild)):er=i),Mr(n,r,r.pendingProps.children,e),Rl(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Rn&&((i=t=er)&&(t=Vp(t,r.type,r.pendingProps,me),t!==null?(r.stateNode=t,Or=r,er=ve(t.firstChild),me=!1,i=!0):i=!1),i||ut(r)),Br(r),i=r.type,l=r.pendingProps,s=n!==null?n.memoizedProps:null,t=l.children,dc(i,l)?t=null:s!==null&&dc(i,s)&&(r.flags|=32),r.memoizedState!==null&&(i=co(n,r,lp,null,null,e),Ci._currentValue=i),Rl(n,r),Mr(n,r,t,e),r.child;case 6:return n===null&&Rn&&((n=e=er)&&(e=Qp(e,r.pendingProps,me),e!==null?(r.stateNode=e,Or=r,er=null,n=!0):n=!1),n||ut(r)),null;case 13:return Gd(n,r,e);case 4:return Mn(r,r.stateNode.containerInfo),t=r.pendingProps,n===null?r.child=Pt(r,null,t,e):Mr(n,r,t,e),r.child;case 11:return Dd(n,r,r.type,r.pendingProps,e);case 7:return Mr(n,r,r.pendingProps,e),r.child;case 8:return Mr(n,r,r.pendingProps.children,e),r.child;case 12:return Mr(n,r,r.pendingProps.children,e),r.child;case 10:return t=r.pendingProps,dt(r,r.type,t.value),Mr(n,r,t.children,e),r.child;case 9:return i=r.type._context,t=r.pendingProps.children,Xt(r),i=kr(i),t=t(i),r.flags|=1,Mr(n,r,t,e),r.child;case 14:return Ld(n,r,r.type,r.pendingProps,e);case 15:return zd(n,r,r.type,r.pendingProps,e);case 19:return Kd(n,r,e);case 31:return gp(n,r,e);case 22:return Cd(n,r,e,r.pendingProps);case 24:return Xt(r),t=kr(xr),n===null?(i=$s(),i===null&&(i=Wn,l=Ps(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=e),i=l),r.memoizedState={parent:t,cache:i},ro(r),dt(r,xr,i)):((n.lanes&e)!==0&&(eo(n,r),mi(r,null,null,e),pi()),i=n.memoizedState,l=r.memoizedState,i.parent!==t?(i={parent:t,cache:t},r.memoizedState=i,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=i),dt(r,xr,t)):(t=l.cache,dt(r,xr,t),t!==i.cache&&Fs(r,[xr],e,!0))),Mr(n,r,r.pendingProps.children,e),r.child;case 29:throw r.pendingProps}throw Error(d(156,r.tag))}function Xe(n){n.flags|=4}function Uo(n,r,e,t,i){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(_f())n.flags|=8192;else throw Ft=bl,no}else n.flags&=-16777217}function Qd(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!oh(r))if(_f())n.flags|=8192;else throw Ft=bl,no}function Ll(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?fn():536870912,n.lanes|=r,La|=r)}function Ti(n,r){if(!Rn)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function tr(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(r)for(var i=n.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags&65011712,t|=i.flags&65011712,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)e|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=t,n.childLanes=e,r}function mp(n,r,e){var t=r.pendingProps;switch(Vs(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tr(r),null;case 1:return tr(r),null;case 3:return e=r.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),r.memoizedState.cache!==t&&(r.flags|=2048),Ye(xr),Vn(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(ya(r)?Xe(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Xs())),tr(r),null;case 26:var i=r.type,l=r.memoizedState;return n===null?(Xe(r),l!==null?(tr(r),Qd(r,l)):(tr(r),Uo(r,i,null,t,e))):l?l!==n.memoizedState?(Xe(r),tr(r),Qd(r,l)):(tr(r),r.flags&=-16777217):(n=n.memoizedProps,n!==t&&Xe(r),tr(r),Uo(r,i,n,t,e)),null;case 27:if(ue(r),e=hn.current,i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&Xe(r);else{if(!t){if(r.stateNode===null)throw Error(d(166));return tr(r),null}n=X.current,ya(r)?Nu(r):(n=nh(i,t,e),r.stateNode=n,Xe(r))}return tr(r),null;case 5:if(ue(r),i=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&Xe(r);else{if(!t){if(r.stateNode===null)throw Error(d(166));return tr(r),null}if(l=X.current,ya(r))Nu(r);else{var s=Zl(hn.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof t.is=="string"?s.createElement("select",{is:t.is}):s.createElement("select"),t.multiple?l.multiple=!0:t.size&&(l.size=t.size);break;default:l=typeof t.is=="string"?s.createElement(i,{is:t.is}):s.createElement(i)}}l[hr]=r,l[Lr]=t;n:for(s=r.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break n;for(;s.sibling===null;){if(s.return===null||s.return===r)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}r.stateNode=l;n:switch(Rr(l,i,t),i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}t&&Xe(r)}}return tr(r),Uo(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,e),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==t&&Xe(r);else{if(typeof t!="string"&&r.stateNode===null)throw Error(d(166));if(n=hn.current,ya(r)){if(n=r.stateNode,e=r.memoizedProps,t=null,i=Or,i!==null)switch(i.tag){case 27:case 5:t=i.memoizedProps}n[hr]=r,n=!!(n.nodeValue===e||t!==null&&t.suppressHydrationWarning===!0||Yf(n.nodeValue,e)),n||ut(r,!0)}else n=Zl(n).createTextNode(t),n[hr]=r,r.stateNode=n}return tr(r),null;case 31:if(e=r.memoizedState,n===null||n.memoizedState!==null){if(t=ya(r),e!==null){if(n===null){if(!t)throw Error(d(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(557));n[hr]=r}else Vt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;tr(r),n=!1}else e=Xs(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return r.flags&256?(le(r),r):(le(r),null);if((r.flags&128)!==0)throw Error(d(558))}return tr(r),null;case 13:if(t=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=ya(r),t!==null&&t.dehydrated!==null){if(n===null){if(!i)throw Error(d(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[hr]=r}else Vt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;tr(r),i=!1}else i=Xs(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return r.flags&256?(le(r),r):(le(r),null)}return le(r),(r.flags&128)!==0?(r.lanes=e,r):(e=t!==null,n=n!==null&&n.memoizedState!==null,e&&(t=r.child,i=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(i=t.alternate.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048)),e!==n&&e&&(r.child.flags|=8192),Ll(r,r.updateQueue),tr(r),null);case 4:return Vn(),n===null&&lc(r.stateNode.containerInfo),tr(r),null;case 10:return Ye(r.type),tr(r),null;case 19:if(A(pr),t=r.memoizedState,t===null)return tr(r),null;if(i=(r.flags&128)!==0,l=t.rendering,l===null)if(i)Ti(t,!1);else{if(ur!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(l=yl(n),l!==null){for(r.flags|=128,Ti(t,!1),n=l.updateQueue,r.updateQueue=n,Ll(r,n),r.subtreeFlags=0,n=e,e=r.child;e!==null;)xu(e,n),e=e.sibling;return q(pr,pr.current&1|2),Rn&&qe(r,t.treeForkCount),r.child}n=n.sibling}t.tail!==null&&dr()>Hl&&(r.flags|=128,i=!0,Ti(t,!1),r.lanes=4194304)}else{if(!i)if(n=yl(l),n!==null){if(r.flags|=128,i=!0,n=n.updateQueue,r.updateQueue=n,Ll(r,n),Ti(t,!0),t.tail===null&&t.tailMode==="hidden"&&!l.alternate&&!Rn)return tr(r),null}else 2*dr()-t.renderingStartTime>Hl&&e!==536870912&&(r.flags|=128,i=!0,Ti(t,!1),r.lanes=4194304);t.isBackwards?(l.sibling=r.child,r.child=l):(n=t.last,n!==null?n.sibling=l:r.child=l,t.last=l)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=dr(),n.sibling=null,e=pr.current,q(pr,i?e&1|2:e&1),Rn&&qe(r,t.treeForkCount),n):(tr(r),null);case 22:case 23:return le(r),lo(),t=r.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(r.flags|=8192):t&&(r.flags|=8192),t?(e&536870912)!==0&&(r.flags&128)===0&&(tr(r),r.subtreeFlags&6&&(r.flags|=8192)):tr(r),e=r.updateQueue,e!==null&&Ll(r,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==e&&(r.flags|=2048),n!==null&&A(Jt),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),r.memoizedState.cache!==e&&(r.flags|=2048),Ye(xr),tr(r),null;case 25:return null;case 30:return null}throw Error(d(156,r.tag))}function bp(n,r){switch(Vs(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ye(xr),Vn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ue(r),null;case 31:if(r.memoizedState!==null){if(le(r),r.alternate===null)throw Error(d(340));Vt()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(le(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(d(340));Vt()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return A(pr),null;case 4:return Vn(),null;case 10:return Ye(r.type),null;case 22:case 23:return le(r),lo(),n!==null&&A(Jt),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Ye(xr),null;case 25:return null;default:return null}}function Xd(n,r){switch(Vs(r),r.tag){case 3:Ye(xr),Vn();break;case 26:case 27:case 5:ue(r);break;case 4:Vn();break;case 31:r.memoizedState!==null&&le(r);break;case 13:le(r);break;case 19:A(pr);break;case 10:Ye(r.type);break;case 22:case 23:le(r),lo(),n!==null&&A(Jt);break;case 24:Ye(xr)}}function Si(n,r){try{var e=r.updateQueue,t=e!==null?e.lastEffect:null;if(t!==null){var i=t.next;e=i;do{if((e.tag&n)===n){t=void 0;var l=e.create,s=e.inst;t=l(),s.destroy=t}e=e.next}while(e!==i)}}catch(c){Kn(r,r.return,c)}}function bt(n,r,e){try{var t=r.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var l=i.next;t=l;do{if((t.tag&n)===n){var s=t.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=r;var f=e,T=c;try{T()}catch(O){Kn(i,f,O)}}}t=t.next}while(t!==l)}}catch(O){Kn(r,r.return,O)}}function Jd(n){var r=n.updateQueue;if(r!==null){var e=n.stateNode;try{Uu(r,e)}catch(t){Kn(n,n.return,t)}}}function Zd(n,r,e){e.props=$t(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(t){Kn(n,r,t)}}function ji(n,r){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof e=="function"?n.refCleanup=e(t):e.current=t}}catch(i){Kn(n,r,i)}}function Oe(n,r){var e=n.ref,t=n.refCleanup;if(e!==null)if(typeof t=="function")try{t()}catch(i){Kn(n,r,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(i){Kn(n,r,i)}else e.current=null}function Fd(n){var r=n.type,e=n.memoizedProps,t=n.stateNode;try{n:switch(r){case"button":case"input":case"select":case"textarea":e.autoFocus&&t.focus();break n;case"img":e.src?t.src=e.src:e.srcSet&&(t.srcset=e.srcSet)}}catch(i){Kn(n,n.return,i)}}function Ho(n,r,e){try{var t=n.stateNode;Hp(t,n.type,e,r),t[Lr]=r}catch(i){Kn(n,n.return,i)}}function Pd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&jt(n.type)||n.tag===4}function Io(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Pd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&jt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qo(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,r):(r=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.appendChild(n),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=I));else if(t!==4&&(t===27&&jt(n.type)&&(e=n.stateNode,r=null),n=n.child,n!==null))for(qo(n,r,e),n=n.sibling;n!==null;)qo(n,r,e),n=n.sibling}function zl(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(t!==4&&(t===27&&jt(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(zl(n,r,e),n=n.sibling;n!==null;)zl(n,r,e),n=n.sibling}function Wd(n){var r=n.stateNode,e=n.memoizedProps;try{for(var t=n.type,i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Rr(r,t,e),r[hr]=n,r[Lr]=e}catch(l){Kn(n,n.return,l)}}var Je=!1,Sr=!1,Go=!1,$d=typeof WeakSet=="function"?WeakSet:Set,Ar=null;function vp(n,r){if(n=n.containerInfo,cc=es,n=du(n),Ls(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break n}var s=0,c=-1,f=-1,T=0,O=0,R=n,S=null;r:for(;;){for(var j;R!==e||i!==0&&R.nodeType!==3||(c=s+i),R!==l||t!==0&&R.nodeType!==3||(f=s+t),R.nodeType===3&&(s+=R.nodeValue.length),(j=R.firstChild)!==null;)S=R,R=j;for(;;){if(R===n)break r;if(S===e&&++T===i&&(c=s),S===l&&++O===t&&(f=s),(j=R.nextSibling)!==null)break;R=S,S=R.parentNode}R=j}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(uc={focusedElem:n,selectionRange:e},es=!1,Ar=r;Ar!==null;)if(r=Ar,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ar=n;else for(;Ar!==null;){switch(r=Ar,l=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)i=n[e],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,e=r,i=l.memoizedProps,l=l.memoizedState,t=e.stateNode;try{var F=$t(e.type,i);n=t.getSnapshotBeforeUpdate(F,l),t.__reactInternalSnapshotBeforeUpdate=n}catch(on){Kn(e,e.return,on)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,e=n.nodeType,e===9)hc(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":hc(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(d(163))}if(n=r.sibling,n!==null){n.return=r.return,Ar=n;break}Ar=r.return}}function nf(n,r,e){var t=e.flags;switch(e.tag){case 0:case 11:case 15:Fe(n,e),t&4&&Si(5,e);break;case 1:if(Fe(n,e),t&4)if(n=e.stateNode,r===null)try{n.componentDidMount()}catch(s){Kn(e,e.return,s)}else{var i=$t(e.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(i,r,n.__reactInternalSnapshotBeforeUpdate)}catch(s){Kn(e,e.return,s)}}t&64&&Jd(e),t&512&&ji(e,e.return);break;case 3:if(Fe(n,e),t&64&&(n=e.updateQueue,n!==null)){if(r=null,e.child!==null)switch(e.child.tag){case 27:case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}try{Uu(n,r)}catch(s){Kn(e,e.return,s)}}break;case 27:r===null&&t&4&&Wd(e);case 26:case 5:Fe(n,e),r===null&&t&4&&Fd(e),t&512&&ji(e,e.return);break;case 12:Fe(n,e);break;case 31:Fe(n,e),t&4&&tf(n,e);break;case 13:Fe(n,e),t&4&&af(n,e),t&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=Ap.bind(null,e),Xp(n,e))));break;case 22:if(t=e.memoizedState!==null||Je,!t){r=r!==null&&r.memoizedState!==null||Sr,i=Je;var l=Sr;Je=t,(Sr=r)&&!l?Pe(n,e,(e.subtreeFlags&8772)!==0):Fe(n,e),Je=i,Sr=l}break;case 30:break;default:Fe(n,e)}}function rf(n){var r=n.alternate;r!==null&&(n.alternate=null,rf(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Ja(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var lr=null,Jr=!1;function Ze(n,r,e){for(e=e.child;e!==null;)ef(n,r,e),e=e.sibling}function ef(n,r,e){if(Dr&&typeof Dr.onCommitFiberUnmount=="function")try{Dr.onCommitFiberUnmount(Lt,e)}catch{}switch(e.tag){case 26:Sr||Oe(e,r),Ze(n,r,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Sr||Oe(e,r);var t=lr,i=Jr;jt(e.type)&&(lr=e.stateNode,Jr=!1),Ze(n,r,e),Di(e.stateNode),lr=t,Jr=i;break;case 5:Sr||Oe(e,r);case 6:if(t=lr,i=Jr,lr=null,Ze(n,r,e),lr=t,Jr=i,lr!==null)if(Jr)try{(lr.nodeType===9?lr.body:lr.nodeName==="HTML"?lr.ownerDocument.body:lr).removeChild(e.stateNode)}catch(l){Kn(e,r,l)}else try{lr.removeChild(e.stateNode)}catch(l){Kn(e,r,l)}break;case 18:lr!==null&&(Jr?(n=lr,Zf(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),Ga(n)):Zf(lr,e.stateNode));break;case 4:t=lr,i=Jr,lr=e.stateNode.containerInfo,Jr=!0,Ze(n,r,e),lr=t,Jr=i;break;case 0:case 11:case 14:case 15:bt(2,e,r),Sr||bt(4,e,r),Ze(n,r,e);break;case 1:Sr||(Oe(e,r),t=e.stateNode,typeof t.componentWillUnmount=="function"&&Zd(e,r,t)),Ze(n,r,e);break;case 21:Ze(n,r,e);break;case 22:Sr=(t=Sr)||e.memoizedState!==null,Ze(n,r,e),Sr=t;break;default:Ze(n,r,e)}}function tf(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ga(n)}catch(e){Kn(r,r.return,e)}}}function af(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ga(n)}catch(e){Kn(r,r.return,e)}}function _p(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new $d),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new $d),r;default:throw Error(d(435,n.tag))}}function Cl(n,r){var e=_p(n);r.forEach(function(t){if(!e.has(t)){e.add(t);var i=wp.bind(null,n,t);t.then(i,i)}})}function Zr(n,r){var e=r.deletions;if(e!==null)for(var t=0;t<e.length;t++){var i=e[t],l=n,s=r,c=s;n:for(;c!==null;){switch(c.tag){case 27:if(jt(c.type)){lr=c.stateNode,Jr=!1;break n}break;case 5:lr=c.stateNode,Jr=!1;break n;case 3:case 4:lr=c.stateNode.containerInfo,Jr=!0;break n}c=c.return}if(lr===null)throw Error(d(160));ef(l,s,i),lr=null,Jr=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)lf(r,n),r=r.sibling}var ye=null;function lf(n,r){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Zr(r,n),Fr(n),t&4&&(bt(3,n,n.return),Si(3,n),bt(5,n,n.return));break;case 1:Zr(r,n),Fr(n),t&512&&(Sr||e===null||Oe(e,e.return)),t&64&&Je&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?t:e.concat(t))));break;case 26:var i=ye;if(Zr(r,n),Fr(n),t&512&&(Sr||e===null||Oe(e,e.return)),t&4){var l=e!==null?e.memoizedState:null;if(t=n.memoizedState,e===null)if(t===null)if(n.stateNode===null){n:{t=n.type,e=n.memoizedProps,i=i.ownerDocument||i;r:switch(t){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Bt]||l[hr]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(t),i.head.insertBefore(l,i.querySelector("head > title"))),Rr(l,t,e),l[hr]=n,vr(l),t=l;break n;case"link":var s=lh("link","href",i).get(t+(e.href||""));if(s){for(var c=0;c<s.length;c++)if(l=s[c],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){s.splice(c,1);break r}}l=i.createElement(t),Rr(l,t,e),i.head.appendChild(l);break;case"meta":if(s=lh("meta","content",i).get(t+(e.content||""))){for(c=0;c<s.length;c++)if(l=s[c],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){s.splice(c,1);break r}}l=i.createElement(t),Rr(l,t,e),i.head.appendChild(l);break;default:throw Error(d(468,t))}l[hr]=n,vr(l),t=l}n.stateNode=t}else sh(i,n.type,n.stateNode);else n.stateNode=ih(i,t,n.memoizedProps);else l!==t?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,t===null?sh(i,n.type,n.stateNode):ih(i,t,n.memoizedProps)):t===null&&n.stateNode!==null&&Ho(n,n.memoizedProps,e.memoizedProps)}break;case 27:Zr(r,n),Fr(n),t&512&&(Sr||e===null||Oe(e,e.return)),e!==null&&t&4&&Ho(n,n.memoizedProps,e.memoizedProps);break;case 5:if(Zr(r,n),Fr(n),t&512&&(Sr||e===null||Oe(e,e.return)),n.flags&32){i=n.stateNode;try{un(i,"")}catch(F){Kn(n,n.return,F)}}t&4&&n.stateNode!=null&&(i=n.memoizedProps,Ho(n,i,e!==null?e.memoizedProps:i)),t&1024&&(Go=!0);break;case 6:if(Zr(r,n),Fr(n),t&4){if(n.stateNode===null)throw Error(d(162));t=n.memoizedProps,e=n.stateNode;try{e.nodeValue=t}catch(F){Kn(n,n.return,F)}}break;case 3:if(Wl=null,i=ye,ye=Fl(r.containerInfo),Zr(r,n),ye=i,Fr(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{Ga(r.containerInfo)}catch(F){Kn(n,n.return,F)}Go&&(Go=!1,sf(n));break;case 4:t=ye,ye=Fl(n.stateNode.containerInfo),Zr(r,n),Fr(n),ye=t;break;case 12:Zr(r,n),Fr(n);break;case 31:Zr(r,n),Fr(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 13:Zr(r,n),Fr(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Ul=dr()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 22:i=n.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,T=Je,O=Sr;if(Je=T||i,Sr=O||f,Zr(r,n),Sr=O,Je=T,Fr(n),t&8192)n:for(r=n.stateNode,r._visibility=i?r._visibility&-2:r._visibility|1,i&&(e===null||f||Je||Sr||na(n)),e=null,r=n;;){if(r.tag===5||r.tag===26){if(e===null){f=e=r;try{if(l=f.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=f.stateNode;var R=f.memoizedProps.style,S=R!=null&&R.hasOwnProperty("display")?R.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(F){Kn(f,f.return,F)}}}else if(r.tag===6){if(e===null){f=r;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(F){Kn(f,f.return,F)}}}else if(r.tag===18){if(e===null){f=r;try{var j=f.stateNode;i?Ff(j,!0):Ff(f.stateNode,!1)}catch(F){Kn(f,f.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break n;for(;r.sibling===null;){if(r.return===null||r.return===n)break n;e===r&&(e=null),r=r.return}e===r&&(e=null),r.sibling.return=r.return,r=r.sibling}t&4&&(t=n.updateQueue,t!==null&&(e=t.retryQueue,e!==null&&(t.retryQueue=null,Cl(n,e))));break;case 19:Zr(r,n),Fr(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 30:break;case 21:break;default:Zr(r,n),Fr(n)}}function Fr(n){var r=n.flags;if(r&2){try{for(var e,t=n.return;t!==null;){if(Pd(t)){e=t;break}t=t.return}if(e==null)throw Error(d(160));switch(e.tag){case 27:var i=e.stateNode,l=Io(n);zl(n,l,i);break;case 5:var s=e.stateNode;e.flags&32&&(un(s,""),e.flags&=-33);var c=Io(n);zl(n,c,s);break;case 3:case 4:var f=e.stateNode.containerInfo,T=Io(n);qo(n,T,f);break;default:throw Error(d(161))}}catch(O){Kn(n,n.return,O)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function sf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;sf(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Fe(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)nf(n,r.alternate,r),r=r.sibling}function na(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:bt(4,r,r.return),na(r);break;case 1:Oe(r,r.return);var e=r.stateNode;typeof e.componentWillUnmount=="function"&&Zd(r,r.return,e),na(r);break;case 27:Di(r.stateNode);case 26:case 5:Oe(r,r.return),na(r);break;case 22:r.memoizedState===null&&na(r);break;case 30:na(r);break;default:na(r)}n=n.sibling}}function Pe(n,r,e){for(e=e&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var t=r.alternate,i=n,l=r,s=l.flags;switch(l.tag){case 0:case 11:case 15:Pe(i,l,e),Si(4,l);break;case 1:if(Pe(i,l,e),t=l,i=t.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Kn(t,t.return,T)}if(t=l,i=t.updateQueue,i!==null){var c=t.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)Bu(f[i],c)}catch(T){Kn(t,t.return,T)}}e&&s&64&&Jd(l),ji(l,l.return);break;case 27:Wd(l);case 26:case 5:Pe(i,l,e),e&&t===null&&s&4&&Fd(l),ji(l,l.return);break;case 12:Pe(i,l,e);break;case 31:Pe(i,l,e),e&&s&4&&tf(i,l);break;case 13:Pe(i,l,e),e&&s&4&&af(i,l);break;case 22:l.memoizedState===null&&Pe(i,l,e),ji(l,l.return);break;case 30:break;default:Pe(i,l,e)}r=r.sibling}}function Yo(n,r){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&ui(e))}function Ko(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ui(n))}function Te(n,r,e,t){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)of(n,r,e,t),r=r.sibling}function of(n,r,e,t){var i=r.flags;switch(r.tag){case 0:case 11:case 15:Te(n,r,e,t),i&2048&&Si(9,r);break;case 1:Te(n,r,e,t);break;case 3:Te(n,r,e,t),i&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ui(n)));break;case 12:if(i&2048){Te(n,r,e,t),n=r.stateNode;try{var l=r.memoizedProps,s=l.id,c=l.onPostCommit;typeof c=="function"&&c(s,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(f){Kn(r,r.return,f)}}else Te(n,r,e,t);break;case 31:Te(n,r,e,t);break;case 13:Te(n,r,e,t);break;case 23:break;case 22:l=r.stateNode,s=r.alternate,r.memoizedState!==null?l._visibility&2?Te(n,r,e,t):Ni(n,r):l._visibility&2?Te(n,r,e,t):(l._visibility|=2,Ma(n,r,e,t,(r.subtreeFlags&10256)!==0||!1)),i&2048&&Yo(s,r);break;case 24:Te(n,r,e,t),i&2048&&Ko(r.alternate,r);break;default:Te(n,r,e,t)}}function Ma(n,r,e,t,i){for(i=i&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var l=n,s=r,c=e,f=t,T=s.flags;switch(s.tag){case 0:case 11:case 15:Ma(l,s,c,f,i),Si(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&2?Ma(l,s,c,f,i):Ni(l,s):(O._visibility|=2,Ma(l,s,c,f,i)),i&&T&2048&&Yo(s.alternate,s);break;case 24:Ma(l,s,c,f,i),i&&T&2048&&Ko(s.alternate,s);break;default:Ma(l,s,c,f,i)}r=r.sibling}}function Ni(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var e=n,t=r,i=t.flags;switch(t.tag){case 22:Ni(e,t),i&2048&&Yo(t.alternate,t);break;case 24:Ni(e,t),i&2048&&Ko(t.alternate,t);break;default:Ni(e,t)}r=r.sibling}}var Ei=8192;function Ra(n,r,e){if(n.subtreeFlags&Ei)for(n=n.child;n!==null;)cf(n,r,e),n=n.sibling}function cf(n,r,e){switch(n.tag){case 26:Ra(n,r,e),n.flags&Ei&&n.memoizedState!==null&&im(e,ye,n.memoizedState,n.memoizedProps);break;case 5:Ra(n,r,e);break;case 3:case 4:var t=ye;ye=Fl(n.stateNode.containerInfo),Ra(n,r,e),ye=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=Ei,Ei=16777216,Ra(n,r,e),Ei=t):Ra(n,r,e));break;default:Ra(n,r,e)}}function uf(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ai(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Ar=t,ff(t,n)}uf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)df(n),n=n.sibling}function df(n){switch(n.tag){case 0:case 11:case 15:Ai(n),n.flags&2048&&bt(9,n,n.return);break;case 3:Ai(n);break;case 12:Ai(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Bl(n)):Ai(n);break;default:Ai(n)}}function Bl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Ar=t,ff(t,n)}uf(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:bt(8,r,r.return),Bl(r);break;case 22:e=r.stateNode,e._visibility&2&&(e._visibility&=-3,Bl(r));break;default:Bl(r)}n=n.sibling}}function ff(n,r){for(;Ar!==null;){var e=Ar;switch(e.tag){case 0:case 11:case 15:bt(8,e,r);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var t=e.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:ui(e.memoizedState.cache)}if(t=e.child,t!==null)t.return=e,Ar=t;else n:for(e=n;Ar!==null;){t=Ar;var i=t.sibling,l=t.return;if(rf(t),t===e){Ar=null;break n}if(i!==null){i.return=l,Ar=i;break n}Ar=l}}}var xp={getCacheForType:function(n){var r=kr(xr),e=r.data.get(n);return e===void 0&&(e=n(),r.data.set(n,e)),e},cacheSignal:function(){return kr(xr).controller.signal}},yp=typeof WeakMap=="function"?WeakMap:Map,Un=0,Wn=null,En=null,On=0,Yn=0,se=null,vt=!1,Da=!1,Vo=!1,We=0,ur=0,_t=0,ra=0,Qo=0,oe=0,La=0,wi=null,Pr=null,Xo=!1,Ul=0,hf=0,Hl=1/0,Il=null,xt=null,Nr=0,yt=null,za=null,$e=0,Jo=0,Zo=null,gf=null,Oi=0,Fo=null;function ce(){return(Un&2)!==0&&On!==0?On&-On:N.T!==null?ec():sa()}function pf(){if(oe===0)if((On&536870912)===0||Rn){var n=la;la<<=1,(la&3932160)===0&&(la=262144),oe=n}else oe=536870912;return n=ie.current,n!==null&&(n.flags|=32),oe}function Wr(n,r,e){(n===Wn&&(Yn===2||Yn===9)||n.cancelPendingCommit!==null)&&(Ca(n,0),Tt(n,On,oe,!1)),Pn(n,e),((Un&2)===0||n!==Wn)&&(n===Wn&&((Un&2)===0&&(ra|=e),ur===4&&Tt(n,On,oe,!1)),ke(n))}function mf(n,r,e){if((Un&6)!==0)throw Error(d(327));var t=!e&&(r&127)===0&&(r&n.expiredLanes)===0||k(n,r),i=t?jp(n,r):Wo(n,r,!0),l=t;do{if(i===0){Da&&!t&&Tt(n,r,0,!1);break}else{if(e=n.current.alternate,l&&!Tp(e)){i=Wo(n,r,!1),l=!1;continue}if(i===2){if(l=r,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){r=s;n:{var c=n;i=wi;var f=c.current.memoizedState.isDehydrated;if(f&&(Ca(c,s).flags|=256),s=Wo(c,s,!1),s!==2){if(Vo&&!f){c.errorRecoveryDisabledLanes|=l,ra|=l,i=4;break n}l=Pr,Pr=i,l!==null&&(Pr===null?Pr=l:Pr.push.apply(Pr,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Ca(n,0),Tt(n,r,0,!0);break}n:{switch(t=n,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((r&4194048)!==r)break;case 6:Tt(t,r,oe,!vt);break n;case 2:Pr=null;break;case 3:case 5:break;default:throw Error(d(329))}if((r&62914560)===r&&(i=Ul+300-dr(),10<i)){if(Tt(t,r,oe,!vt),h(t,0,!0)!==0)break n;$e=r,t.timeoutHandle=Xf(bf.bind(null,t,e,Pr,Il,Xo,r,oe,ra,La,vt,l,"Throttled",-0,0),i);break n}bf(t,e,Pr,Il,Xo,r,oe,ra,La,vt,l,null,-0,0)}}break}while(!0);ke(n)}function bf(n,r,e,t,i,l,s,c,f,T,O,R,S,j){if(n.timeoutHandle=-1,R=r.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:I},cf(r,l,R);var F=(l&62914560)===l?Ul-dr():(l&4194048)===l?hf-dr():0;if(F=lm(R,F),F!==null){$e=l,n.cancelPendingCommit=F(Nf.bind(null,n,r,l,e,t,i,s,c,f,O,R,null,S,j)),Tt(n,l,s,!T);return}}Nf(n,r,l,e,t,i,s,c,f)}function Tp(n){for(var r=n;;){var e=r.tag;if((e===0||e===11||e===15)&&r.flags&16384&&(e=r.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var t=0;t<e.length;t++){var i=e[t],l=i.getSnapshot;i=i.value;try{if(!te(l(),i))return!1}catch{return!1}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Tt(n,r,e,t){r&=~Qo,r&=~ra,n.suspendedLanes|=r,n.pingedLanes&=~r,t&&(n.warmLanes|=r),t=n.expirationTimes;for(var i=r;0<i;){var l=31-Ur(i),s=1<<l;t[l]=-1,i&=~s}e!==0&&J(n,e,r)}function ql(){return(Un&6)===0?(ki(0),!1):!0}function Po(){if(En!==null){if(Yn===0)var n=En.return;else n=En,Ge=Qt=null,ho(n),Ea=null,fi=0,n=En;for(;n!==null;)Xd(n.alternate,n),n=n.return;En=null}}function Ca(n,r){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Gp(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),$e=0,Po(),Wn=n,En=e=Ie(n.current,null),On=r,Yn=0,se=null,vt=!1,Da=k(n,r),Vo=!1,La=oe=Qo=ra=_t=ur=0,Pr=wi=null,Xo=!1,(r&8)!==0&&(r|=r&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=r;0<t;){var i=31-Ur(t),l=1<<i;r|=n[i],t&=~l}return We=r,ol(),e}function vf(n,r){xn=null,N.H=xi,r===Na||r===ml?(r=Du(),Yn=3):r===no?(r=Du(),Yn=4):Yn=r===Oo?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,se=r,En===null&&(ur=1,kl(n,he(r,n.current)))}function _f(){var n=ie.current;return n===null?!0:(On&4194048)===On?be===null:(On&62914560)===On||(On&536870912)!==0?n===be:!1}function xf(){var n=N.H;return N.H=xi,n===null?xi:n}function yf(){var n=N.A;return N.A=xp,n}function Gl(){ur=4,vt||(On&4194048)!==On&&ie.current!==null||(Da=!0),(_t&134217727)===0&&(ra&134217727)===0||Wn===null||Tt(Wn,On,oe,!1)}function Wo(n,r,e){var t=Un;Un|=2;var i=xf(),l=yf();(Wn!==n||On!==r)&&(Il=null,Ca(n,r)),r=!1;var s=ur;n:do try{if(Yn!==0&&En!==null){var c=En,f=se;switch(Yn){case 8:Po(),s=6;break n;case 3:case 2:case 9:case 6:ie.current===null&&(r=!0);var T=Yn;if(Yn=0,se=null,Ba(n,c,f,T),e&&Da){s=0;break n}break;default:T=Yn,Yn=0,se=null,Ba(n,c,f,T)}}Sp(),s=ur;break}catch(O){vf(n,O)}while(!0);return r&&n.shellSuspendCounter++,Ge=Qt=null,Un=t,N.H=i,N.A=l,En===null&&(Wn=null,On=0,ol()),s}function Sp(){for(;En!==null;)Tf(En)}function jp(n,r){var e=Un;Un|=2;var t=xf(),i=yf();Wn!==n||On!==r?(Il=null,Hl=dr()+500,Ca(n,r)):Da=k(n,r);n:do try{if(Yn!==0&&En!==null){r=En;var l=se;r:switch(Yn){case 1:Yn=0,se=null,Ba(n,r,l,1);break;case 2:case 9:if(Mu(l)){Yn=0,se=null,Sf(r);break}r=function(){Yn!==2&&Yn!==9||Wn!==n||(Yn=7),ke(n)},l.then(r,r);break n;case 3:Yn=7;break n;case 4:Yn=5;break n;case 7:Mu(l)?(Yn=0,se=null,Sf(r)):(Yn=0,se=null,Ba(n,r,l,7));break;case 5:var s=null;switch(En.tag){case 26:s=En.memoizedState;case 5:case 27:var c=En;if(s?oh(s):c.stateNode.complete){Yn=0,se=null;var f=c.sibling;if(f!==null)En=f;else{var T=c.return;T!==null?(En=T,Yl(T)):En=null}break r}}Yn=0,se=null,Ba(n,r,l,5);break;case 6:Yn=0,se=null,Ba(n,r,l,6);break;case 8:Po(),ur=6;break n;default:throw Error(d(462))}}Np();break}catch(O){vf(n,O)}while(!0);return Ge=Qt=null,N.H=t,N.A=i,Un=e,En!==null?0:(Wn=null,On=0,ol(),ur)}function Np(){for(;En!==null&&!_s();)Tf(En)}function Tf(n){var r=Vd(n.alternate,n,We);n.memoizedProps=n.pendingProps,r===null?Yl(n):En=r}function Sf(n){var r=n,e=r.alternate;switch(r.tag){case 15:case 0:r=Hd(e,r,r.pendingProps,r.type,void 0,On);break;case 11:r=Hd(e,r,r.pendingProps,r.type.render,r.ref,On);break;case 5:ho(r);default:Xd(e,r),r=En=xu(r,We),r=Vd(e,r,We)}n.memoizedProps=n.pendingProps,r===null?Yl(n):En=r}function Ba(n,r,e,t){Ge=Qt=null,ho(r),Ea=null,fi=0;var i=r.return;try{if(hp(n,i,r,e,On)){ur=1,kl(n,he(e,n.current)),En=null;return}}catch(l){if(i!==null)throw En=i,l;ur=1,kl(n,he(e,n.current)),En=null;return}r.flags&32768?(Rn||t===1?n=!0:Da||(On&536870912)!==0?n=!1:(vt=n=!0,(t===2||t===9||t===3||t===6)&&(t=ie.current,t!==null&&t.tag===13&&(t.flags|=16384))),jf(r,n)):Yl(r)}function Yl(n){var r=n;do{if((r.flags&32768)!==0){jf(r,vt);return}n=r.return;var e=mp(r.alternate,r,We);if(e!==null){En=e;return}if(r=r.sibling,r!==null){En=r;return}En=r=n}while(r!==null);ur===0&&(ur=5)}function jf(n,r){do{var e=bp(n.alternate,n);if(e!==null){e.flags&=32767,En=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!r&&(n=n.sibling,n!==null)){En=n;return}En=n=e}while(n!==null);ur=6,En=null}function Nf(n,r,e,t,i,l,s,c,f){n.cancelPendingCommit=null;do Kl();while(Nr!==0);if((Un&6)!==0)throw Error(d(327));if(r!==null){if(r===n.current)throw Error(d(177));if(l=r.lanes|r.childLanes,l|=Hs,P(n,e,l,s,c,f),n===Wn&&(En=Wn=null,On=0),za=r,yt=n,$e=e,Jo=l,Zo=i,gf=t,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Op(Dt,function(){return kf(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||t){t=N.T,N.T=null,i=H.p,H.p=2,s=Un,Un|=4;try{vp(n,r,e)}finally{Un=s,H.p=i,N.T=t}}Nr=1,Ef(),Af(),wf()}}function Ef(){if(Nr===1){Nr=0;var n=yt,r=za,e=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||e){e=N.T,N.T=null;var t=H.p;H.p=2;var i=Un;Un|=4;try{lf(r,n);var l=uc,s=du(n.containerInfo),c=l.focusedElem,f=l.selectionRange;if(s!==c&&c&&c.ownerDocument&&uu(c.ownerDocument.documentElement,c)){if(f!==null&&Ls(c)){var T=f.start,O=f.end;if(O===void 0&&(O=T),"selectionStart"in c)c.selectionStart=T,c.selectionEnd=Math.min(O,c.value.length);else{var R=c.ownerDocument||document,S=R&&R.defaultView||window;if(S.getSelection){var j=S.getSelection(),F=c.textContent.length,on=Math.min(f.start,F),Jn=f.end===void 0?on:Math.min(f.end,F);!j.extend&&on>Jn&&(s=Jn,Jn=on,on=s);var b=cu(c,on),m=cu(c,Jn);if(b&&m&&(j.rangeCount!==1||j.anchorNode!==b.node||j.anchorOffset!==b.offset||j.focusNode!==m.node||j.focusOffset!==m.offset)){var y=R.createRange();y.setStart(b.node,b.offset),j.removeAllRanges(),on>Jn?(j.addRange(y),j.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),j.addRange(y))}}}}for(R=[],j=c;j=j.parentNode;)j.nodeType===1&&R.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<R.length;c++){var M=R[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}es=!!cc,uc=cc=null}finally{Un=i,H.p=t,N.T=e}}n.current=r,Nr=2}}function Af(){if(Nr===2){Nr=0;var n=yt,r=za,e=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||e){e=N.T,N.T=null;var t=H.p;H.p=2;var i=Un;Un|=4;try{nf(n,r.alternate,r)}finally{Un=i,H.p=t,N.T=e}}Nr=3}}function wf(){if(Nr===4||Nr===3){Nr=0,Ki();var n=yt,r=za,e=$e,t=gf;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Nr=5:(Nr=0,za=yt=null,Of(n,n.pendingLanes));var i=n.pendingLanes;if(i===0&&(xt=null),ze(e),r=r.stateNode,Dr&&typeof Dr.onCommitFiberRoot=="function")try{Dr.onCommitFiberRoot(Lt,r,void 0,(r.current.flags&128)===128)}catch{}if(t!==null){r=N.T,i=H.p,H.p=2,N.T=null;try{for(var l=n.onRecoverableError,s=0;s<t.length;s++){var c=t[s];l(c.value,{componentStack:c.stack})}}finally{N.T=r,H.p=i}}($e&3)!==0&&Kl(),ke(n),i=n.pendingLanes,(e&261930)!==0&&(i&42)!==0?n===Fo?Oi++:(Oi=0,Fo=n):Oi=0,ki(0)}}function Of(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,ui(r)))}function Kl(){return Ef(),Af(),wf(),kf()}function kf(){if(Nr!==5)return!1;var n=yt,r=Jo;Jo=0;var e=ze($e),t=N.T,i=H.p;try{H.p=32>e?32:e,N.T=null,e=Zo,Zo=null;var l=yt,s=$e;if(Nr=0,za=yt=null,$e=0,(Un&6)!==0)throw Error(d(331));var c=Un;if(Un|=4,df(l.current),of(l,l.current,s,e),Un=c,ki(0,!1),Dr&&typeof Dr.onPostCommitFiberRoot=="function")try{Dr.onPostCommitFiberRoot(Lt,l)}catch{}return!0}finally{H.p=i,N.T=t,Of(n,r)}}function Mf(n,r,e){r=he(e,r),r=wo(n.stateNode,r,2),n=gt(n,r,2),n!==null&&(Pn(n,2),ke(n))}function Kn(n,r,e){if(n.tag===3)Mf(n,n,e);else for(;r!==null;){if(r.tag===3){Mf(r,n,e);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(xt===null||!xt.has(t))){n=he(e,n),e=Md(2),t=gt(r,e,2),t!==null&&(Rd(e,t,r,n),Pn(t,2),ke(t));break}}r=r.return}}function $o(n,r,e){var t=n.pingCache;if(t===null){t=n.pingCache=new yp;var i=new Set;t.set(r,i)}else i=t.get(r),i===void 0&&(i=new Set,t.set(r,i));i.has(e)||(Vo=!0,i.add(e),n=Ep.bind(null,n,r,e),r.then(n,n))}function Ep(n,r,e){var t=n.pingCache;t!==null&&t.delete(r),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,Wn===n&&(On&e)===e&&(ur===4||ur===3&&(On&62914560)===On&&300>dr()-Ul?(Un&2)===0&&Ca(n,0):Qo|=e,La===On&&(La=0)),ke(n)}function Rf(n,r){r===0&&(r=fn()),n=Yt(n,r),n!==null&&(Pn(n,r),ke(n))}function Ap(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),Rf(n,e)}function wp(n,r){var e=0;switch(n.tag){case 31:case 13:var t=n.stateNode,i=n.memoizedState;i!==null&&(e=i.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(d(314))}t!==null&&t.delete(r),Rf(n,e)}function Op(n,r){return ia(n,r)}var Vl=null,Ua=null,nc=!1,Ql=!1,rc=!1,St=0;function ke(n){n!==Ua&&n.next===null&&(Ua===null?Vl=Ua=n:Ua=Ua.next=n),Ql=!0,nc||(nc=!0,Mp())}function ki(n,r){if(!rc&&Ql){rc=!0;do for(var e=!1,t=Vl;t!==null;){if(n!==0){var i=t.pendingLanes;if(i===0)var l=0;else{var s=t.suspendedLanes,c=t.pingedLanes;l=(1<<31-Ur(42|n)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,Cf(t,l))}else l=On,l=h(t,t===Wn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||k(t,l)||(e=!0,Cf(t,l));t=t.next}while(e);rc=!1}}function kp(){Df()}function Df(){Ql=nc=!1;var n=0;St!==0&&qp()&&(n=St);for(var r=dr(),e=null,t=Vl;t!==null;){var i=t.next,l=Lf(t,r);l===0?(t.next=null,e===null?Vl=i:e.next=i,i===null&&(Ua=e)):(e=t,(n!==0||(l&3)!==0)&&(Ql=!0)),t=i}Nr!==0&&Nr!==5||ki(n),St!==0&&(St=0)}function Lf(n,r){for(var e=n.suspendedLanes,t=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-Ur(l),c=1<<s,f=i[s];f===-1?((c&e)===0||(c&t)!==0)&&(i[s]=G(c,r)):f<=r&&(n.expiredLanes|=c),l&=~c}if(r=Wn,e=On,e=h(n,n===r?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,e===0||n===r&&(Yn===2||Yn===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&Va(t),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||k(n,e)){if(r=e&-e,r===n.callbackPriority)return r;switch(t!==null&&Va(t),ze(e)){case 2:case 8:e=Rt;break;case 32:e=Dt;break;case 268435456:e=Qi;break;default:e=Dt}return t=zf.bind(null,n),e=ia(e,t),n.callbackPriority=r,n.callbackNode=e,r}return t!==null&&t!==null&&Va(t),n.callbackPriority=2,n.callbackNode=null,2}function zf(n,r){if(Nr!==0&&Nr!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(Kl()&&n.callbackNode!==e)return null;var t=On;return t=h(n,n===Wn?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(mf(n,t,r),Lf(n,dr()),n.callbackNode!=null&&n.callbackNode===e?zf.bind(null,n):null)}function Cf(n,r){if(Kl())return null;mf(n,r,!0)}function Mp(){Yp(function(){(Un&6)!==0?ia(Le,kp):Df()})}function ec(){if(St===0){var n=Sa;n===0&&(n=zt,zt<<=1,(zt&261888)===0&&(zt=256)),St=n}return St}function Bf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:lt(""+n)}function Uf(n,r){var e=r.ownerDocument.createElement("input");return e.name=r.name,e.value=r.value,n.id&&e.setAttribute("form",n.id),r.parentNode.insertBefore(e,r),n=new FormData(n),e.parentNode.removeChild(e),n}function Rp(n,r,e,t,i){if(r==="submit"&&e&&e.stateNode===i){var l=Bf((i[Lr]||null).action),s=t.submitter;s&&(r=(r=s[Lr]||null)?Bf(r.formAction):s.getAttribute("formAction"),r!==null&&(l=r,s=null));var c=new al("action","action",null,t,i);n.push({event:c,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(St!==0){var f=s?Uf(i,s):new FormData(i);To(e,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(c.preventDefault(),f=s?Uf(i,s):new FormData(i),To(e,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var tc=0;tc<Us.length;tc++){var ac=Us[tc],Dp=ac.toLowerCase(),Lp=ac[0].toUpperCase()+ac.slice(1);xe(Dp,"on"+Lp)}xe(gu,"onAnimationEnd"),xe(pu,"onAnimationIteration"),xe(mu,"onAnimationStart"),xe("dblclick","onDoubleClick"),xe("focusin","onFocus"),xe("focusout","onBlur"),xe(Fg,"onTransitionRun"),xe(Pg,"onTransitionStart"),xe(Wg,"onTransitionCancel"),xe(bu,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Be("onBeforeInput",["compositionend","keypress","textInput","paste"]),Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mi));function Hf(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],i=t.event;t=t.listeners;n:{var l=void 0;if(r)for(var s=t.length-1;0<=s;s--){var c=t[s],f=c.instance,T=c.currentTarget;if(c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=T;try{l(i)}catch(O){sl(O)}i.currentTarget=null,l=f}else for(s=0;s<t.length;s++){if(c=t[s],f=c.instance,T=c.currentTarget,c=c.listener,f!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=T;try{l(i)}catch(O){sl(O)}i.currentTarget=null,l=f}}}}function An(n,r){var e=r[Xa];e===void 0&&(e=r[Xa]=new Set);var t=n+"__bubble";e.has(t)||(If(r,n,2,!1),e.add(t))}function ic(n,r,e){var t=0;r&&(t|=4),If(e,n,t,r)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function lc(n){if(!n[Xl]){n[Xl]=!0,Fi.forEach(function(e){e!=="selectionchange"&&(zp.has(e)||ic(e,!1,n),ic(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Xl]||(r[Xl]=!0,ic("selectionchange",!1,r))}}function If(n,r,e,t){switch(ph(r)){case 2:var i=cm;break;case 8:i=um;break;default:i=yc}e=i.bind(null,r,e,n),i=void 0,!Ns||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),t?i!==void 0?n.addEventListener(r,e,{capture:!0,passive:i}):n.addEventListener(r,e,!0):i!==void 0?n.addEventListener(r,e,{passive:i}):n.addEventListener(r,e,!1)}function sc(n,r,e,t,i){var l=t;if((r&1)===0&&(r&2)===0&&t!==null)n:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var c=t.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=t.return;s!==null;){var f=s.tag;if((f===3||f===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Hr(c),s===null)return;if(f=s.tag,f===5||f===6||f===26||f===27){t=l=s;continue n}c=c.parentNode}}t=t.return}nl(function(){var T=l,O=vn(e),R=[];n:{var S=vu.get(n);if(S!==void 0){var j=al,F=n;switch(n){case"keypress":if(el(e)===0)break n;case"keydown":case"keyup":j=wg;break;case"focusin":F="focus",j=Os;break;case"focusout":F="blur",j=Os;break;case"beforeblur":case"afterblur":j=Os;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Mg;break;case gu:case pu:case mu:j=_g;break;case bu:j=Dg;break;case"scroll":case"scrollend":j=gg;break;case"wheel":j=zg;break;case"copy":case"cut":case"paste":j=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Zc;break;case"toggle":case"beforetoggle":j=Bg}var on=(r&4)!==0,Jn=!on&&(n==="scroll"||n==="scrollend"),b=on?S!==null?S+"Capture":null:S;on=[];for(var m=T,y;m!==null;){var M=m;if(y=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||y===null||b===null||(M=$a(m,b),M!=null&&on.push(Ri(m,M,y))),Jn)break;m=m.return}0<on.length&&(S=new j(S,F,null,e,O),R.push({event:S,listeners:on}))}}if((r&7)===0){n:{if(S=n==="mouseover"||n==="pointerover",j=n==="mouseout"||n==="pointerout",S&&e!==W&&(F=e.relatedTarget||e.fromElement)&&(Hr(F)||F[et]))break n;if((j||S)&&(S=O.window===O?O:(S=O.ownerDocument)?S.defaultView||S.parentWindow:window,j?(F=e.relatedTarget||e.toElement,j=T,F=F?Hr(F):null,F!==null&&(Jn=z(F),on=F.tag,F!==Jn||on!==5&&on!==27&&on!==6)&&(F=null)):(j=null,F=T),j!==F)){if(on=Xc,M="onMouseLeave",b="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(on=Zc,M="onPointerLeave",b="onPointerEnter",m="pointer"),Jn=j==null?S:tt(j),y=F==null?S:tt(F),S=new on(M,m+"leave",j,e,O),S.target=Jn,S.relatedTarget=y,M=null,Hr(O)===T&&(on=new on(b,m+"enter",F,e,O),on.target=y,on.relatedTarget=Jn,M=on),Jn=M,j&&F)r:{for(on=Cp,b=j,m=F,y=0,M=b;M;M=on(M))y++;M=0;for(var ln=m;ln;ln=on(ln))M++;for(;0<y-M;)b=on(b),y--;for(;0<M-y;)m=on(m),M--;for(;y--;){if(b===m||m!==null&&b===m.alternate){on=b;break r}b=on(b),m=on(m)}on=null}else on=null;j!==null&&qf(R,S,j,on,!1),F!==null&&Jn!==null&&qf(R,Jn,F,on,!0)}}n:{if(S=T?tt(T):window,j=S.nodeName&&S.nodeName.toLowerCase(),j==="select"||j==="input"&&S.type==="file")var Cn=tu;else if(ru(S))if(au)Cn=Xg;else{Cn=Vg;var $=Kg}else j=S.nodeName,!j||j.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?T&&it(T.elementType)&&(Cn=tu):Cn=Qg;if(Cn&&(Cn=Cn(n,T))){eu(R,Cn,e,O);break n}$&&$(n,S,T),n==="focusout"&&T&&S.type==="number"&&T.memoizedProps.value!=null&&fa(S,"number",S.value)}switch($=T?tt(T):window,n){case"focusin":(ru($)||$.contentEditable==="true")&&(pa=$,zs=T,si=null);break;case"focusout":si=zs=pa=null;break;case"mousedown":Cs=!0;break;case"contextmenu":case"mouseup":case"dragend":Cs=!1,fu(R,e,O);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":fu(R,e,O)}var jn;if(Ms)n:{switch(n){case"compositionstart":var kn="onCompositionStart";break n;case"compositionend":kn="onCompositionEnd";break n;case"compositionupdate":kn="onCompositionUpdate";break n}kn=void 0}else ga?$c(n,e)&&(kn="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(kn="onCompositionStart");kn&&(Fc&&e.locale!=="ko"&&(ga||kn!=="onCompositionStart"?kn==="onCompositionEnd"&&ga&&(jn=Vc()):(st=O,Es="value"in st?st.value:st.textContent,ga=!0)),$=Jl(T,kn),0<$.length&&(kn=new Jc(kn,n,null,e,O),R.push({event:kn,listeners:$}),jn?kn.data=jn:(jn=nu(e),jn!==null&&(kn.data=jn)))),(jn=Hg?Ig(n,e):qg(n,e))&&(kn=Jl(T,"onBeforeInput"),0<kn.length&&($=new Jc("onBeforeInput","beforeinput",null,e,O),R.push({event:$,listeners:kn}),$.data=jn)),Rp(R,n,T,e,O)}Hf(R,r)})}function Ri(n,r,e){return{instance:n,listener:r,currentTarget:e}}function Jl(n,r){for(var e=r+"Capture",t=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=$a(n,e),i!=null&&t.unshift(Ri(n,i,l)),i=$a(n,r),i!=null&&t.push(Ri(n,i,l))),n.tag===3)return t;n=n.return}return[]}function Cp(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function qf(n,r,e,t,i){for(var l=r._reactName,s=[];e!==null&&e!==t;){var c=e,f=c.alternate,T=c.stateNode;if(c=c.tag,f!==null&&f===t)break;c!==5&&c!==26&&c!==27||T===null||(f=T,i?(T=$a(e,l),T!=null&&s.unshift(Ri(e,T,f))):i||(T=$a(e,l),T!=null&&s.push(Ri(e,T,f)))),e=e.return}s.length!==0&&n.push({event:r,listeners:s})}var Bp=/\r\n?/g,Up=/\u0000|\uFFFD/g;function Gf(n){return(typeof n=="string"?n:""+n).replace(Bp,`
`).replace(Up,"")}function Yf(n,r){return r=Gf(r),Gf(n)===r}function Xn(n,r,e,t,i,l){switch(e){case"children":typeof t=="string"?r==="body"||r==="textarea"&&t===""||un(n,t):(typeof t=="number"||typeof t=="bigint")&&r!=="body"&&un(n,""+t);break;case"className":re(n,"class",t);break;case"tabIndex":re(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":re(n,e,t);break;case"style":Gn(n,t,l);break;case"data":if(r!=="object"){re(n,"data",t);break}case"src":case"href":if(t===""&&(r!=="a"||e!=="href")){n.removeAttribute(e);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=lt(""+t),n.setAttribute(e,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(r!=="input"&&Xn(n,r,"name",i.name,i,null),Xn(n,r,"formEncType",i.formEncType,i,null),Xn(n,r,"formMethod",i.formMethod,i,null),Xn(n,r,"formTarget",i.formTarget,i,null)):(Xn(n,r,"encType",i.encType,i,null),Xn(n,r,"method",i.method,i,null),Xn(n,r,"target",i.target,i,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=lt(""+t),n.setAttribute(e,t);break;case"onClick":t!=null&&(n.onclick=I);break;case"onScroll":t!=null&&An("scroll",n);break;case"onScrollEnd":t!=null&&An("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(e=t.__html,e!=null){if(i.children!=null)throw Error(d(60));n.innerHTML=e}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}e=lt(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""+t):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":t===!0?n.setAttribute(e,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,t):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(e,t):n.removeAttribute(e);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(e):n.setAttribute(e,t);break;case"popover":An("beforetoggle",n),An("toggle",n),zr(n,"popover",t);break;case"xlinkActuate":Vr(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Vr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Vr(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Vr(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Vr(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Vr(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Vr(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Vr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Vr(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":zr(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Ue.get(e)||e,zr(n,e,t))}}function oc(n,r,e,t,i,l){switch(e){case"style":Gn(n,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(d(61));if(e=t.__html,e!=null){if(i.children!=null)throw Error(d(60));n.innerHTML=e}}break;case"children":typeof t=="string"?un(n,t):(typeof t=="number"||typeof t=="bigint")&&un(n,""+t);break;case"onScroll":t!=null&&An("scroll",n);break;case"onScrollEnd":t!=null&&An("scrollend",n);break;case"onClick":t!=null&&(n.onclick=I);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(i=e.endsWith("Capture"),r=e.slice(2,i?e.length-7:void 0),l=n[Lr]||null,l=l!=null?l[e]:null,typeof l=="function"&&n.removeEventListener(r,l,i),typeof t=="function")){typeof l!="function"&&l!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(r,t,i);break n}e in n?n[e]=t:t===!0?n.setAttribute(e,""):zr(n,e,t)}}}function Rr(n,r,e){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":An("error",n),An("load",n);var t=!1,i=!1,l;for(l in e)if(e.hasOwnProperty(l)){var s=e[l];if(s!=null)switch(l){case"src":t=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,r));default:Xn(n,r,l,s,e,null)}}i&&Xn(n,r,"srcSet",e.srcSet,e,null),t&&Xn(n,r,"src",e.src,e,null);return;case"input":An("invalid",n);var c=l=s=i=null,f=null,T=null;for(t in e)if(e.hasOwnProperty(t)){var O=e[t];if(O!=null)switch(t){case"name":i=O;break;case"type":s=O;break;case"checked":f=O;break;case"defaultChecked":T=O;break;case"value":l=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(d(137,r));break;default:Xn(n,r,t,O,e,null)}}Ht(n,l,c,f,T,s,i,!1);return;case"select":An("invalid",n),t=s=l=null;for(i in e)if(e.hasOwnProperty(i)&&(c=e[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":t=c;default:Xn(n,r,i,c,e,null)}r=l,e=s,n.multiple=!!t,r!=null?wr(n,!!t,r,!1):e!=null&&wr(n,!!t,e,!0);return;case"textarea":An("invalid",n),l=i=t=null;for(s in e)if(e.hasOwnProperty(s)&&(c=e[s],c!=null))switch(s){case"value":t=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:Xn(n,r,s,c,e,null)}ha(n,t,i,l);return;case"option":for(f in e)e.hasOwnProperty(f)&&(t=e[f],t!=null)&&(f==="selected"?n.selected=t&&typeof t!="function"&&typeof t!="symbol":Xn(n,r,f,t,e,null));return;case"dialog":An("beforetoggle",n),An("toggle",n),An("cancel",n),An("close",n);break;case"iframe":case"object":An("load",n);break;case"video":case"audio":for(t=0;t<Mi.length;t++)An(Mi[t],n);break;case"image":An("error",n),An("load",n);break;case"details":An("toggle",n);break;case"embed":case"source":case"link":An("error",n),An("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in e)if(e.hasOwnProperty(T)&&(t=e[T],t!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,r));default:Xn(n,r,T,t,e,null)}return;default:if(it(r)){for(O in e)e.hasOwnProperty(O)&&(t=e[O],t!==void 0&&oc(n,r,O,t,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(t=e[c],t!=null&&Xn(n,r,c,t,e,null))}function Hp(n,r,e,t){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,f=null,T=null,O=null;for(j in e){var R=e[j];if(e.hasOwnProperty(j)&&R!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":f=R;default:t.hasOwnProperty(j)||Xn(n,r,j,null,t,R)}}for(var S in t){var j=t[S];if(R=e[S],t.hasOwnProperty(S)&&(j!=null||R!=null))switch(S){case"type":l=j;break;case"name":i=j;break;case"checked":T=j;break;case"defaultChecked":O=j;break;case"value":s=j;break;case"defaultValue":c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(d(137,r));break;default:j!==R&&Xn(n,r,S,j,t,R)}}Fa(n,s,c,f,T,O,l,i);return;case"select":j=s=c=S=null;for(l in e)if(f=e[l],e.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":j=f;default:t.hasOwnProperty(l)||Xn(n,r,l,null,t,f)}for(i in t)if(l=t[i],f=e[i],t.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":S=l;break;case"defaultValue":c=l;break;case"multiple":s=l;default:l!==f&&Xn(n,r,i,l,t,f)}r=c,e=s,t=j,S!=null?wr(n,!!e,S,!1):!!t!=!!e&&(r!=null?wr(n,!!e,r,!0):wr(n,!!e,e?[]:"",!1));return;case"textarea":j=S=null;for(c in e)if(i=e[c],e.hasOwnProperty(c)&&i!=null&&!t.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Xn(n,r,c,null,t,i)}for(s in t)if(i=t[s],l=e[s],t.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":S=i;break;case"defaultValue":j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&Xn(n,r,s,i,t,l)}Wi(n,S,j);return;case"option":for(var F in e)S=e[F],e.hasOwnProperty(F)&&S!=null&&!t.hasOwnProperty(F)&&(F==="selected"?n.selected=!1:Xn(n,r,F,null,t,S));for(f in t)S=t[f],j=e[f],t.hasOwnProperty(f)&&S!==j&&(S!=null||j!=null)&&(f==="selected"?n.selected=S&&typeof S!="function"&&typeof S!="symbol":Xn(n,r,f,S,t,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var on in e)S=e[on],e.hasOwnProperty(on)&&S!=null&&!t.hasOwnProperty(on)&&Xn(n,r,on,null,t,S);for(T in t)if(S=t[T],j=e[T],t.hasOwnProperty(T)&&S!==j&&(S!=null||j!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(d(137,r));break;default:Xn(n,r,T,S,t,j)}return;default:if(it(r)){for(var Jn in e)S=e[Jn],e.hasOwnProperty(Jn)&&S!==void 0&&!t.hasOwnProperty(Jn)&&oc(n,r,Jn,void 0,t,S);for(O in t)S=t[O],j=e[O],!t.hasOwnProperty(O)||S===j||S===void 0&&j===void 0||oc(n,r,O,S,t,j);return}}for(var b in e)S=e[b],e.hasOwnProperty(b)&&S!=null&&!t.hasOwnProperty(b)&&Xn(n,r,b,null,t,S);for(R in t)S=t[R],j=e[R],!t.hasOwnProperty(R)||S===j||S==null&&j==null||Xn(n,r,R,S,t,j)}function Kf(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ip(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,e=performance.getEntriesByType("resource"),t=0;t<e.length;t++){var i=e[t],l=i.transferSize,s=i.initiatorType,c=i.duration;if(l&&c&&Kf(s)){for(s=0,c=i.responseEnd,t+=1;t<e.length;t++){var f=e[t],T=f.startTime;if(T>c)break;var O=f.transferSize,R=f.initiatorType;O&&Kf(R)&&(f=f.responseEnd,s+=O*(f<c?1:(c-T)/(f-T)))}if(--t,r+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var cc=null,uc=null;function Zl(n){return n.nodeType===9?n:n.ownerDocument}function Vf(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qf(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function dc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var fc=null;function qp(){var n=window.event;return n&&n.type==="popstate"?n===fc?!1:(fc=n,!0):(fc=null,!1)}var Xf=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,Yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(n){return Jf.resolve(null).then(n).catch(Kp)}:Xf;function Kp(n){setTimeout(function(){throw n})}function jt(n){return n==="head"}function Zf(n,r){var e=r,t=0;do{var i=e.nextSibling;if(n.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"||e==="/&"){if(t===0){n.removeChild(i),Ga(r);return}t--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")t++;else if(e==="html")Di(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,Di(e);for(var l=e.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[Bt]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||e.removeChild(l),l=s}}else e==="body"&&Di(n.ownerDocument.body);e=i}while(e);Ga(r)}function Ff(n,r){var e=n;n=0;do{var t=e.nextSibling;if(e.nodeType===1?r?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(r?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=t}while(e)}function hc(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var e=r;switch(r=r.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":hc(e),Ja(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function Vp(n,r,e,t){for(;n.nodeType===1;){var i=e;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[Bt])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=ve(n.nextSibling),n===null)break}return null}function Qp(n,r,e){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=ve(n.nextSibling),n===null))return null;return n}function Pf(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=ve(n.nextSibling),n===null))return null;return n}function gc(n){return n.data==="$?"||n.data==="$~"}function pc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Xp(n,r){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||e.readyState!=="loading")r();else{var t=function(){r(),e.removeEventListener("DOMContentLoaded",t)};e.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function ve(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var mc=null;function Wf(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(r===0)return ve(n.nextSibling);r--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||r++}n=n.nextSibling}return null}function $f(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(r===0)return n;r--}else e!=="/$"&&e!=="/&"||r++}n=n.previousSibling}return null}function nh(n,r,e){switch(r=Zl(e),n){case"html":if(n=r.documentElement,!n)throw Error(d(452));return n;case"head":if(n=r.head,!n)throw Error(d(453));return n;case"body":if(n=r.body,!n)throw Error(d(454));return n;default:throw Error(d(451))}}function Di(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ja(n)}var _e=new Map,rh=new Set;function Fl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var nt=H.d;H.d={f:Jp,r:Zp,D:Fp,C:Pp,L:Wp,m:$p,X:rm,S:nm,M:em};function Jp(){var n=nt.f(),r=ql();return n||r}function Zp(n){var r=Ce(n);r!==null&&r.tag===5&&r.type==="form"?bd(r):nt.r(n)}var Ha=typeof document>"u"?null:document;function eh(n,r,e){var t=Ha;if(t&&typeof r=="string"&&r){var i=Qr(r);i='link[rel="'+n+'"][href="'+i+'"]',typeof e=="string"&&(i+='[crossorigin="'+e+'"]'),rh.has(i)||(rh.add(i),n={rel:n,crossOrigin:e,href:r},t.querySelector(i)===null&&(r=t.createElement("link"),Rr(r,"link",n),vr(r),t.head.appendChild(r)))}}function Fp(n){nt.D(n),eh("dns-prefetch",n,null)}function Pp(n,r){nt.C(n,r),eh("preconnect",n,r)}function Wp(n,r,e){nt.L(n,r,e);var t=Ha;if(t&&n&&r){var i='link[rel="preload"][as="'+Qr(r)+'"]';r==="image"&&e&&e.imageSrcSet?(i+='[imagesrcset="'+Qr(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(i+='[imagesizes="'+Qr(e.imageSizes)+'"]')):i+='[href="'+Qr(n)+'"]';var l=i;switch(r){case"style":l=Ia(n);break;case"script":l=qa(n)}_e.has(l)||(n=w({rel:"preload",href:r==="image"&&e&&e.imageSrcSet?void 0:n,as:r},e),_e.set(l,n),t.querySelector(i)!==null||r==="style"&&t.querySelector(Li(l))||r==="script"&&t.querySelector(zi(l))||(r=t.createElement("link"),Rr(r,"link",n),vr(r),t.head.appendChild(r)))}}function $p(n,r){nt.m(n,r);var e=Ha;if(e&&n){var t=r&&typeof r.as=="string"?r.as:"script",i='link[rel="modulepreload"][as="'+Qr(t)+'"][href="'+Qr(n)+'"]',l=i;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=qa(n)}if(!_e.has(l)&&(n=w({rel:"modulepreload",href:n},r),_e.set(l,n),e.querySelector(i)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(zi(l)))return}t=e.createElement("link"),Rr(t,"link",n),vr(t),e.head.appendChild(t)}}}function nm(n,r,e){nt.S(n,r,e);var t=Ha;if(t&&n){var i=at(t).hoistableStyles,l=Ia(n);r=r||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=t.querySelector(Li(l)))c.loading=5;else{n=w({rel:"stylesheet",href:n,"data-precedence":r},e),(e=_e.get(l))&&bc(n,e);var f=s=t.createElement("link");vr(f),Rr(f,"link",n),f._p=new Promise(function(T,O){f.onload=T,f.onerror=O}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Pl(s,r,t)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function rm(n,r){nt.X(n,r);var e=Ha;if(e&&n){var t=at(e).hoistableScripts,i=qa(n),l=t.get(i);l||(l=e.querySelector(zi(i)),l||(n=w({src:n,async:!0},r),(r=_e.get(i))&&vc(n,r),l=e.createElement("script"),vr(l),Rr(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function em(n,r){nt.M(n,r);var e=Ha;if(e&&n){var t=at(e).hoistableScripts,i=qa(n),l=t.get(i);l||(l=e.querySelector(zi(i)),l||(n=w({src:n,async:!0,type:"module"},r),(r=_e.get(i))&&vc(n,r),l=e.createElement("script"),vr(l),Rr(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function th(n,r,e,t){var i=(i=hn.current)?Fl(i):null;if(!i)throw Error(d(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(r=Ia(e.href),e=at(i).hoistableStyles,t=e.get(r),t||(t={type:"style",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=Ia(e.href);var l=at(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(Li(n)))&&!l._p&&(s.instance=l,s.state.loading=5),_e.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},_e.set(n,e),l||tm(i,n,e,s.state))),r&&t===null)throw Error(d(528,""));return s}if(r&&t!==null)throw Error(d(529,""));return null;case"script":return r=e.async,e=e.src,typeof e=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=qa(e),e=at(i).hoistableScripts,t=e.get(r),t||(t={type:"script",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,n))}}function Ia(n){return'href="'+Qr(n)+'"'}function Li(n){return'link[rel="stylesheet"]['+n+"]"}function ah(n){return w({},n,{"data-precedence":n.precedence,precedence:null})}function tm(n,r,e,t){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?t.loading=1:(r=n.createElement("link"),t.preload=r,r.addEventListener("load",function(){return t.loading|=1}),r.addEventListener("error",function(){return t.loading|=2}),Rr(r,"link",e),vr(r),n.head.appendChild(r))}function qa(n){return'[src="'+Qr(n)+'"]'}function zi(n){return"script[async]"+n}function ih(n,r,e){if(r.count++,r.instance===null)switch(r.type){case"style":var t=n.querySelector('style[data-href~="'+Qr(e.href)+'"]');if(t)return r.instance=t,vr(t),t;var i=w({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),vr(t),Rr(t,"style",i),Pl(t,e.precedence,n),r.instance=t;case"stylesheet":i=Ia(e.href);var l=n.querySelector(Li(i));if(l)return r.state.loading|=4,r.instance=l,vr(l),l;t=ah(e),(i=_e.get(i))&&bc(t,i),l=(n.ownerDocument||n).createElement("link"),vr(l);var s=l;return s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Rr(l,"link",t),r.state.loading|=4,Pl(l,e.precedence,n),r.instance=l;case"script":return l=qa(e.src),(i=n.querySelector(zi(l)))?(r.instance=i,vr(i),i):(t=e,(i=_e.get(l))&&(t=w({},e),vc(t,i)),n=n.ownerDocument||n,i=n.createElement("script"),vr(i),Rr(i,"link",t),n.head.appendChild(i),r.instance=i);case"void":return null;default:throw Error(d(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(t=r.instance,r.state.loading|=4,Pl(t,e.precedence,n));return r.instance}function Pl(n,r,e){for(var t=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=t.length?t[t.length-1]:null,l=i,s=0;s<t.length;s++){var c=t[s];if(c.dataset.precedence===r)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(r=e.nodeType===9?e.head:e,r.insertBefore(n,r.firstChild))}function bc(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function vc(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Wl=null;function lh(n,r,e){if(Wl===null){var t=new Map,i=Wl=new Map;i.set(e,t)}else i=Wl,t=i.get(e),t||(t=new Map,i.set(e,t));if(t.has(n))return t;for(t.set(n,null),e=e.getElementsByTagName(n),i=0;i<e.length;i++){var l=e[i];if(!(l[Bt]||l[hr]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(r)||"";s=n+s;var c=t.get(s);c?c.push(l):t.set(s,[l])}}return t}function sh(n,r,e){n=n.ownerDocument||n,n.head.insertBefore(e,r==="title"?n.querySelector("head > title"):null)}function am(n,r,e){if(e===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function oh(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function im(n,r,e,t){if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Ia(t.href),l=r.querySelector(Li(i));if(l){r=l._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=$l.bind(n),r.then(n,n)),e.state.loading|=4,e.instance=l,vr(l);return}l=r.ownerDocument||r,t=ah(t),(i=_e.get(i))&&bc(t,i),l=l.createElement("link"),vr(l);var s=l;s._p=new Promise(function(c,f){s.onload=c,s.onerror=f}),Rr(l,"link",t),e.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,r),(r=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=$l.bind(n),r.addEventListener("load",e),r.addEventListener("error",e))}}var _c=0;function lm(n,r){return n.stylesheets&&n.count===0&&rs(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var t=setTimeout(function(){if(n.stylesheets&&rs(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+r);0<n.imgBytes&&_c===0&&(_c=62500*Ip());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&rs(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>_c?50:800)+r);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t),clearTimeout(i)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rs(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ns=null;function rs(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ns=new Map,r.forEach(sm,n),ns=null,$l.call(n))}function sm(n,r){if(!(r.state.loading&4)){var e=ns.get(n);if(e)var t=e.get(null);else{e=new Map,ns.set(n,e);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(e.set(s.dataset.precedence,s),t=s)}t&&e.set(null,t)}i=r.instance,s=i.getAttribute("data-precedence"),l=e.get(s)||t,l===t&&e.set(null,i),e.set(s,i),this.count++,t=$l.bind(this),i.addEventListener("load",t),i.addEventListener("error",t),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),r.state.loading|=4}}var Ci={$$typeof:nn,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function om(n,r,e,t,i,l,s,c,f){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=t,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ch(n,r,e,t,i,l,s,c,f,T,O,R){return n=new om(n,r,e,s,f,T,O,R,c),r=1,l===!0&&(r|=24),l=ae(3,null,null,r),n.current=l,l.stateNode=n,r=Ps(),r.refCount++,n.pooledCache=r,r.refCount++,l.memoizedState={element:t,isDehydrated:e,cache:r},ro(l),n}function uh(n){return n?(n=va,n):va}function dh(n,r,e,t,i,l){i=uh(i),t.context===null?t.context=i:t.pendingContext=i,t=ht(r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=gt(n,t,r),e!==null&&(Wr(e,n,r),gi(e,n,r))}function fh(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function xc(n,r){fh(n,r),(n=n.alternate)&&fh(n,r)}function hh(n){if(n.tag===13||n.tag===31){var r=Yt(n,67108864);r!==null&&Wr(r,n,67108864),xc(n,67108864)}}function gh(n){if(n.tag===13||n.tag===31){var r=ce();r=ir(r);var e=Yt(n,r);e!==null&&Wr(e,n,r),xc(n,r)}}var es=!0;function cm(n,r,e,t){var i=N.T;N.T=null;var l=H.p;try{H.p=2,yc(n,r,e,t)}finally{H.p=l,N.T=i}}function um(n,r,e,t){var i=N.T;N.T=null;var l=H.p;try{H.p=8,yc(n,r,e,t)}finally{H.p=l,N.T=i}}function yc(n,r,e,t){if(es){var i=Tc(t);if(i===null)sc(n,r,t,ts,e),mh(n,t);else if(fm(i,n,r,e,t))t.stopPropagation();else if(mh(n,t),r&4&&-1<dm.indexOf(n)){for(;i!==null;){var l=Ce(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Kr(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var f=1<<31-Ur(s);c.entanglements[1]|=f,s&=~f}ke(l),(Un&6)===0&&(Hl=dr()+500,ki(0))}}break;case 31:case 13:c=Yt(l,2),c!==null&&Wr(c,l,2),ql(),xc(l,2)}if(l=Tc(t),l===null&&sc(n,r,t,ts,e),l===i)break;i=l}i!==null&&t.stopPropagation()}else sc(n,r,t,null,e)}}function Tc(n){return n=vn(n),Sc(n)}var ts=null;function Sc(n){if(ts=null,n=Hr(n),n!==null){var r=z(n);if(r===null)n=null;else{var e=r.tag;if(e===13){if(n=U(r),n!==null)return n;n=null}else if(e===31){if(n=V(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return ts=n,null}function ph(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vi()){case Le:return 2;case Rt:return 8;case Dt:case xs:return 32;case Qi:return 268435456;default:return 32}default:return 32}}var jc=!1,Nt=null,Et=null,At=null,Bi=new Map,Ui=new Map,wt=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mh(n,r){switch(n){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Bi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(r.pointerId)}}function Hi(n,r,e,t,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:r,domEventName:e,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},r!==null&&(r=Ce(r),r!==null&&hh(r)),n):(n.eventSystemFlags|=t,r=n.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),n)}function fm(n,r,e,t,i){switch(r){case"focusin":return Nt=Hi(Nt,n,r,e,t,i),!0;case"dragenter":return Et=Hi(Et,n,r,e,t,i),!0;case"mouseover":return At=Hi(At,n,r,e,t,i),!0;case"pointerover":var l=i.pointerId;return Bi.set(l,Hi(Bi.get(l)||null,n,r,e,t,i)),!0;case"gotpointercapture":return l=i.pointerId,Ui.set(l,Hi(Ui.get(l)||null,n,r,e,t,i)),!0}return!1}function bh(n){var r=Hr(n.target);if(r!==null){var e=z(r);if(e!==null){if(r=e.tag,r===13){if(r=U(e),r!==null){n.blockedOn=r,oa(n.priority,function(){gh(e)});return}}else if(r===31){if(r=V(e),r!==null){n.blockedOn=r,oa(n.priority,function(){gh(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function as(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=Tc(n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);W=t,e.target.dispatchEvent(t),W=null}else return r=Ce(e),r!==null&&hh(r),n.blockedOn=e,!1;r.shift()}return!0}function vh(n,r,e){as(n)&&e.delete(r)}function hm(){jc=!1,Nt!==null&&as(Nt)&&(Nt=null),Et!==null&&as(Et)&&(Et=null),At!==null&&as(At)&&(At=null),Bi.forEach(vh),Ui.forEach(vh)}function is(n,r){n.blockedOn===r&&(n.blockedOn=null,jc||(jc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,hm)))}var ls=null;function _h(n){ls!==n&&(ls=n,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ls===n&&(ls=null);for(var r=0;r<n.length;r+=3){var e=n[r],t=n[r+1],i=n[r+2];if(typeof t!="function"){if(Sc(t||e)===null)continue;break}var l=Ce(e);l!==null&&(n.splice(r,3),r-=3,To(l,{pending:!0,data:i,method:e.method,action:t},t,i))}}))}function Ga(n){function r(f){return is(f,n)}Nt!==null&&is(Nt,n),Et!==null&&is(Et,n),At!==null&&is(At,n),Bi.forEach(r),Ui.forEach(r);for(var e=0;e<wt.length;e++){var t=wt[e];t.blockedOn===n&&(t.blockedOn=null)}for(;0<wt.length&&(e=wt[0],e.blockedOn===null);)bh(e),e.blockedOn===null&&wt.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(t=0;t<e.length;t+=3){var i=e[t],l=e[t+1],s=i[Lr]||null;if(typeof l=="function")s||_h(e);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[Lr]||null)c=s.formAction;else if(Sc(i)!==null)continue}else c=s.action;typeof c=="function"?e[t+1]=c:(e.splice(t,3),t-=3),_h(e)}}}function xh(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function r(){i!==null&&(i(),i=null),t||setTimeout(e,20)}function e(){if(!t&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(e,100),function(){t=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),i!==null&&(i(),i=null)}}}function Nc(n){this._internalRoot=n}ss.prototype.render=Nc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(d(409));var e=r.current,t=ce();dh(e,t,n,r,null,null)},ss.prototype.unmount=Nc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;dh(n.current,2,null,n,null,null),ql(),r[et]=null}};function ss(n){this._internalRoot=n}ss.prototype.unstable_scheduleHydration=function(n){if(n){var r=sa();n={blockedOn:null,target:n,priority:r};for(var e=0;e<wt.length&&r!==0&&r<wt[e].priority;e++);wt.splice(e,0,n),e===0&&bh(n)}};var yh=v.version;if(yh!=="19.2.3")throw Error(d(527,yh,"19.2.3"));H.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(d(188)):(n=Object.keys(n).join(","),Error(d(268,n)));return n=x(r),n=n!==null?B(n):null,n=n===null?null:n.stateNode,n};var gm={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{Lt=os.inject(gm),Dr=os}catch{}}return qi.createRoot=function(n,r){if(!E(n))throw Error(d(299));var e=!1,t="",i=Ad,l=wd,s=Od;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onUncaughtError!==void 0&&(i=r.onUncaughtError),r.onCaughtError!==void 0&&(l=r.onCaughtError),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=ch(n,1,!1,null,null,e,t,null,i,l,s,xh),n[et]=r.current,lc(n),new Nc(r)},qi.hydrateRoot=function(n,r,e){if(!E(n))throw Error(d(299));var t=!1,i="",l=Ad,s=wd,c=Od,f=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),r=ch(n,1,!0,r,e??null,t,i,f,l,s,c,xh),r.context=uh(null),e=r.current,t=ce(),t=ir(t),i=ht(t),i.callback=null,gt(e,i,t),e=t,r.current.lanes=e,Pn(r,e),ke(r),n[et]=r.current,lc(n),new ss(r)},qi.version="19.2.3",qi}var Mh;function Sm(){if(Mh)return Ac.exports;Mh=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(v){console.error(v)}}return u(),Ac.exports=Tm(),Ac.exports}var jm=Sm();const Nm=Ka(jm);var rn=Gc();const bs=Ka(rn),Ph=rn.createContext(void 0),Em=({children:u})=>{const v=localStorage.getItem("selectedLanguage")||"python",[_,d]=rn.useState(v);return rn.useEffect(()=>{localStorage.setItem("selectedLanguage",_)},[_]),a.jsx(Ph.Provider,{value:{selectedLanguage:_,setSelectedLanguage:d},children:u})};function Am(){const u=rn.useContext(Ph);if(u===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return u}const Wh=rn.createContext(void 0);function wm({children:u}){const[v,_]=rn.useState(!0),d=()=>_(!0),E=()=>_(!1),z=()=>_(!v);return a.jsx(Wh.Provider,{value:{isSidebarOpen:v,showSidebar:d,hideSidebar:E,toggleSidebar:z},children:u})}function Yc(){const u=rn.useContext(Wh);if(u===void 0)throw new Error("useSidebar must be used within SidebarProvider");return u}const Om="_wave_nm5to_1",cs={wave:Om};function km(){return a.jsxs("div",{className:cs.background,children:[a.jsx("div",{className:cs.wave}),a.jsx("div",{className:cs.wave}),a.jsx("div",{className:cs.wave})]})}const Mm="_topbar_dxbgq_1",Rm="_container_dxbgq_22",Dm="_buttonContainer_dxbgq_28",Lm="_title_dxbgq_35",zm="_iconLink_dxbgq_53",Cm="_hamburger_dxbgq_75",Bm="_hamburgerIcon_dxbgq_79",Um="_hamburgerTop_dxbgq_88",Hm="_collapsed_dxbgq_92",Im="_hamburgerMiddle_dxbgq_96",qm="_hamburgerBottom_dxbgq_106",Se={topbar:Mm,container:Rm,buttonContainer:Dm,title:Lm,iconLink:zm,hamburger:Cm,hamburgerIcon:Bm,hamburgerTop:Um,collapsed:Hm,hamburgerMiddle:Im,hamburgerBottom:qm};var us={},Rh;function Gm(){if(Rh)return us;Rh=1,us.match=z,us.parse=U;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,v=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,_=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,E=/(dpi|dpcm|dppx)?$/;function z(B,w){return U(B).some(function(D){var Y=D.inverse,en=D.type==="all"||w.type===D.type;if(en&&Y||!(en||Y))return!1;var Z=D.expressions.every(function(pn){var yn=pn.feature,_n=pn.modifier,nn=pn.value,sn=w[yn];if(!sn)return!1;switch(yn){case"orientation":case"scan":return sn.toLowerCase()===nn.toLowerCase();case"width":case"height":case"device-width":case"device-height":nn=x(nn),sn=x(sn);break;case"resolution":nn=L(nn),sn=L(sn);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":nn=V(nn),sn=V(sn);break;case"grid":case"color":case"color-index":case"monochrome":nn=parseInt(nn,10)||1,sn=parseInt(sn,10)||0;break}switch(_n){case"min":return sn>=nn;case"max":return sn<=nn;default:return sn===nn}});return Z&&!Y||!Z&&Y})}function U(B){return B.split(",").map(function(w){w=w.trim();var D=w.match(u),Y=D[1],en=D[2],Z=D[3]||"",pn={};return pn.inverse=!!Y&&Y.toLowerCase()==="not",pn.type=en?en.toLowerCase():"all",Z=Z.match(/\([^\)]+\)/g)||[],pn.expressions=Z.map(function(yn){var _n=yn.match(v),nn=_n[1].toLowerCase().match(_);return{modifier:nn[1],feature:nn[2],value:_n[2]}}),pn})}function V(B){var w=Number(B),D;return w||(D=B.match(/^(\d+)\s*\/\s*(\d+)$/),w=D[1]/D[2]),w}function L(B){var w=parseFloat(B),D=String(B).match(E)[1];switch(D){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function x(B){var w=parseFloat(B),D=String(B).match(d)[1];switch(D){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}return us}var Rc,Dh;function Ym(){if(Dh)return Rc;Dh=1;var u=Gm().match,v=typeof window<"u"?window.matchMedia:null;function _(E,z,U){var V=this,L;v&&!U&&(L=v.call(window,E)),L?(this.matches=L.matches,this.media=L.media,L.addListener(w)):(this.matches=u(E,z),this.media=E),this.addListener=x,this.removeListener=B,this.dispose=D;function x(Y){L&&L.addListener(Y)}function B(Y){L&&L.removeListener(Y)}function w(Y){V.matches=Y.matches,V.media=Y.media}function D(){L&&L.removeListener(w)}}function d(E,z,U){return new _(E,z,U)}return Rc=d,Rc}var Km=Ym();const Vm=Ka(Km);var Qm=/[A-Z]/g,Xm=/^ms-/,Dc={};function Jm(u){return"-"+u.toLowerCase()}function $h(u){if(Dc.hasOwnProperty(u))return Dc[u];var v=u.replace(Qm,Jm);return Dc[u]=Xm.test(v)?"-"+v:v}function Zm(u,v){if(u===v)return!0;if(!u||!v)return!1;const _=Object.keys(u),d=Object.keys(v),E=_.length;if(d.length!==E)return!1;for(let z=0;z<E;z++){const U=_[z];if(u[U]!==v[U]||!Object.prototype.hasOwnProperty.call(v,U))return!1}return!0}var Lc={exports:{}},zc,Lh;function Fm(){if(Lh)return zc;Lh=1;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return zc=u,zc}var Cc,zh;function Pm(){if(zh)return Cc;zh=1;var u=Fm();function v(){}function _(){}return _.resetWarningCache=v,Cc=function(){function d(U,V,L,x,B,w){if(w!==u){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}}d.isRequired=d;function E(){return d}var z={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:E,element:d,elementType:d,instanceOf:E,node:d,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:_,resetWarningCache:v};return z.PropTypes=z,z},Cc}var Ch;function Wm(){return Ch||(Ch=1,Lc.exports=Pm()()),Lc.exports}var $m=Wm();const Hn=Ka($m),Gr=Hn.oneOfType([Hn.string,Hn.number]),ng={all:Hn.bool,grid:Hn.bool,aural:Hn.bool,braille:Hn.bool,handheld:Hn.bool,print:Hn.bool,projection:Hn.bool,screen:Hn.bool,tty:Hn.bool,tv:Hn.bool,embossed:Hn.bool},nb={orientation:Hn.oneOf(["portrait","landscape"]),scan:Hn.oneOf(["progressive","interlace"]),aspectRatio:Hn.string,deviceAspectRatio:Hn.string,height:Gr,deviceHeight:Gr,width:Gr,deviceWidth:Gr,color:Hn.bool,colorIndex:Hn.bool,monochrome:Hn.bool,resolution:Gr,type:Object.keys(ng)},{type:cj,...rb}=nb,eb={minAspectRatio:Hn.string,maxAspectRatio:Hn.string,minDeviceAspectRatio:Hn.string,maxDeviceAspectRatio:Hn.string,minHeight:Gr,maxHeight:Gr,minDeviceHeight:Gr,maxDeviceHeight:Gr,minWidth:Gr,maxWidth:Gr,minDeviceWidth:Gr,maxDeviceWidth:Gr,minColor:Hn.number,maxColor:Hn.number,minColorIndex:Hn.number,maxColorIndex:Hn.number,minMonochrome:Hn.number,maxMonochrome:Hn.number,minResolution:Gr,maxResolution:Gr,...rb},tb={...ng,...eb};var ab={all:tb};const ib=u=>`not ${u}`,lb=(u,v)=>{const _=$h(u);return typeof v=="number"&&(v=`${v}px`),v===!0?_:v===!1?ib(_):`(${_}: ${v})`},sb=u=>u.join(" and "),ob=u=>{const v=[];return Object.keys(ab.all).forEach(_=>{const d=u[_];d!=null&&v.push(lb(_,d))}),sb(v)},cb=rn.createContext(void 0),ub=u=>u.query||ob(u),Bh=u=>u?Object.keys(u).reduce((_,d)=>(_[$h(d)]=u[d],_),{}):void 0,rg=()=>{const u=rn.useRef(!1);return rn.useEffect(()=>{u.current=!0},[]),u.current},db=u=>{const v=rn.useContext(cb),_=()=>Bh(u)||Bh(v),[d,E]=rn.useState(_);return rn.useEffect(()=>{const z=_();Zm(d,z)||E(z)},[u,v]),d},fb=u=>{const v=()=>ub(u),[_,d]=rn.useState(v);return rn.useEffect(()=>{const E=v();_!==E&&d(E)},[u]),_},hb=(u,v)=>{const _=()=>Vm(u,v||{},!!v),[d,E]=rn.useState(_),z=rg();return rn.useEffect(()=>{if(z){const U=_();return E(U),()=>{U&&U.dispose()}}},[u,v]),d},gb=u=>{const[v,_]=rn.useState(u.matches);return rn.useEffect(()=>{const d=E=>{_(E.matches)};return u.addListener(d),_(u.matches),()=>{u.removeListener(d)}},[u]),v},eg=(u,v,_)=>{const d=db(v),E=fb(u);if(!E)throw new Error("Invalid or missing MediaQuery!");const z=hb(E,d),U=gb(z),V=rg();return rn.useEffect(()=>{V&&_&&_(U)},[U]),rn.useEffect(()=>()=>{z&&z.dispose()},[]),U};function $r(...u){let v="";for(const _ of u)if(_){if(typeof _=="string"||typeof _=="number")v+=(v&&" ")+_;else if(Array.isArray(_)){const d=$r(..._);d&&(v+=(v&&" ")+d)}else if(typeof _=="object")for(const d in _)_[d]&&(v+=(v&&" ")+d)}return v}function tg(){const u=document.documentElement,v=getComputedStyle(u).getPropertyValue("--navbar-height");return parseFloat(v)||76}const pb=u=>u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;function ag(u,v=0){const _=document.querySelector(u);if(!_)return;const d=_.offsetTop,E=window.scrollY,z=d-E-v,U=performance.now(),V=1500,L=x=>{const B=x-U,w=B/V,D=pb(w),Y=E+z*(w>1?1:D);window.scrollTo({top:Y}),B<V&&requestAnimationFrame(L)};requestAnimationFrame(L)}const mb="_brand_18f9t_1",bb="_bounce_18f9t_19",vb="_glowDisappear_18f9t_23",_b="_heartBeat_18f9t_27",xb="_rubberBand_18f9t_31",yb="_rotate_18f9t_35",ea={brand:mb,bounce:bb,glowDisappear:vb,heartBeat:_b,rubberBand:xb,rotate:yb};function Tb(){const[u,v]=rn.useState(ea.rotate),[_,d]=rn.useState(!1),E=[ea.bounce,ea.glowDisappear,ea.heartBeat,ea.rubberBand,ea.rotate],z=$r(ea.brand,_&&u),U=()=>d(!1),V=()=>{const L=Math.floor(Math.random()*E.length),x=E[L];d(!0),v(x)};return a.jsx("div",{className:z,onClick:V,onAnimationEnd:U,children:"JWL"})}const Sb="_container_uucyv_1",jb="_input_uucyv_6",Nb="_label_uucyv_16",Eb="_indicator_uucyv_20",Ab="_decoration_uucyv_28",Gi={container:Sb,input:jb,label:Nb,indicator:Eb,decoration:Ab};function Uh(){const u=document.documentElement,[v,_]=rn.useState(!1),d=()=>{const z=new Event("themeChange");u.dispatchEvent(z)},E=()=>{_(!v),u.setAttribute("data-theme",v?"dark":"light"),d()};return rn.useEffect(()=>{const z=u.getAttribute("data-theme");_(z==="light"),d()},[]),a.jsxs("div",{className:Gi.container,children:[a.jsx("input",{className:Gi.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:v,onChange:E}),a.jsxs("label",{className:Gi.label,htmlFor:"theme-switch",children:[a.jsx("span",{className:Gi.indicator}),a.jsx("span",{className:Gi.decoration})]})]})}function wb(){return a.jsx("svg",{viewBox:"0 0 128 128",children:a.jsxs("g",{fill:"var(--svg-github-fill)",children:[a.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),a.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}function Ob({forwardedRef:u}){const v=rn.useRef(null),{isSidebarOpen:_,toggleSidebar:d}=Yc(),E=eg({maxWidth:768}),z=$r(Se.hamburgerIcon,!_&&Se.collapsed);rn.useLayoutEffect(()=>{if(!v.current)return;const D=new ResizeObserver(Y=>{for(const en of Y){const Z=en.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${Z}px`)}});return D.observe(v.current),()=>D.disconnect()},[]);const U=D=>{D.preventDefault(),window.history.replaceState({},"",window.location.pathname),ag("main",tg()-2)},V=()=>d(),L=()=>!E&&a.jsx(Tb,{}),x=()=>!E&&a.jsx("a",{href:"main",onClick:U,role:"button",children:a.jsx("h1",{className:Se.title,children:"LeetCode Cheatsheet"})}),B=()=>a.jsx("a",{href:"/leetcode-cheatsheet","aria-label":"GitHub source",className:Se.iconLink,target:"_blank",children:a.jsx(wb,{})}),w=()=>E?a.jsxs(a.Fragment,{children:[a.jsx(Uh,{}),B()]}):a.jsxs("div",{className:Se.buttonContainer,children:[B(),a.jsx(Uh,{})]});return a.jsx("header",{ref:v,className:Se.topbar,children:a.jsxs("div",{className:Se.container,children:[a.jsxs("div",{ref:u,className:Se.hamburger,onClick:V,children:[a.jsx("span",{className:$r(z,Se.hamburgerTop)}),a.jsx("span",{className:$r(z,Se.hamburgerMiddle)}),a.jsx("span",{className:$r(z,Se.hamburgerBottom)})]}),L(),x(),w()]})})}const kb="_sidebar_8uy5s_1",Mb="_exit_8uy5s_20",Rb="_hide_8uy5s_23",Db="_scrollContainer_8uy5s_27",ds={sidebar:kb,exit:Mb,hide:Rb,scrollContainer:Db};function ig(u,v){rn.useEffect(()=>{const _=d=>{const E=d.target;(Array.isArray(u)?u:[u]).every(V=>V.current&&!V.current.contains(E))&&v()};return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[u,v])}const Lb="_accordion_1hmri_1",zb="_button_1hmri_6",Cb="_open_1hmri_25",Bb="_content_1hmri_29",fs={accordion:Lb,button:zb,open:Cb,content:Bb};function Ub(u){const v=parseFloat(u);return!isNaN(v)&&isFinite(v)}function Hh(u){return typeof u=="string"&&u[u.length-1]==="%"&&Ub(u.substring(0,u.length-1))}function Bc(u,v,_){v===0&&!_&&u?.style&&u?.children.length>0&&(u.style.display="none")}function Hb(u,v){v===0&&u?.style&&(u.style.display="")}const Ib={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Ih(u,v){return[u.static,v===0&&u.staticHeightZero,typeof v=="number"&&v>0?u.staticHeightSpecific:null,v==="auto"&&u.staticHeightAuto].filter(_=>_).join(" ")}const qb=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],Gb=bs.forwardRef((u,v)=>{const{animateOpacity:_=!1,animationStateClasses:d={},applyInlineTransitions:E=!0,children:z,className:U="",contentClassName:V,delay:L=0,disableDisplayNone:x=!1,duration:B=500,easing:w="ease",height:D,onHeightAnimationEnd:Y,onHeightAnimationStart:en,style:Z,contentRef:pn}=u,yn=Object.assign({},u);qb.forEach(an=>{delete yn[an]});const _n=rn.useRef(D),nn=rn.useRef(null),sn=rn.useRef(),Dn=rn.useRef(),mn=rn.useRef(Object.assign(Object.assign({},Ib),d)),cn=typeof window<"u",Ln=rn.useRef(cn&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),Fn=Ln.current?0:L,br=Ln.current?0:B;let or=D,$n="visible";typeof D=="number"?(or=D<0?0:D,$n="hidden"):Hh(or)&&(or=D==="0%"?0:D,$n="hidden");const[Er,ar]=rn.useState(or),[jr,N]=rn.useState($n),[H,K]=rn.useState(!1),[Tn,Sn]=rn.useState(Ih(mn.current,D));rn.useEffect(()=>{Bc(nn.current,Er,x)},[]),rn.useEffect(()=>{if(D!==_n.current&&nn.current){Hb(nn.current,_n.current),nn.current.style.overflow="hidden";const an=nn.current.offsetHeight;nn.current.style.overflow="";const hn=br+Fn;let gn,Mn,Vn="hidden",Br;const ue=_n.current==="auto";typeof D=="number"?(gn=D<0?0:D,Mn=gn):Hh(D)?(gn=D==="0%"?0:D,Mn=gn):(gn=an,Mn="auto",Vn=void 0),ue&&(Mn=gn,gn=an);const Re=[mn.current.animating,(_n.current==="auto"||D<_n.current)&&mn.current.animatingUp,(D==="auto"||D>_n.current)&&mn.current.animatingDown,Mn===0&&mn.current.animatingToHeightZero,Mn==="auto"&&mn.current.animatingToHeightAuto,typeof Mn=="number"&&Mn>0?mn.current.animatingToHeightSpecific:null].filter(ne=>ne).join(" "),De=Ih(mn.current,Mn);ar(gn),N("hidden"),K(!ue),Sn(Re),clearTimeout(Dn.current),clearTimeout(sn.current),ue?(Br=!0,Dn.current=setTimeout(()=>{ar(Mn),N(Vn),K(Br),en?.(Mn)},50),sn.current=setTimeout(()=>{K(!1),Sn(De),Bc(nn.current,Mn,x),Y?.(Mn)},hn)):(en?.(gn),Dn.current=setTimeout(()=>{ar(Mn),N(Vn),K(!1),Sn(De),D!=="auto"&&Bc(nn.current,gn,x),Y?.(gn)},hn))}return _n.current=D,()=>{clearTimeout(Dn.current),clearTimeout(sn.current)}},[D]);const g=Object.assign(Object.assign({},Z),{height:Er,overflow:jr||Z?.overflow});H&&E&&(g.transition=`height ${br}ms ${w} ${Fn}ms`,Z?.transition&&(g.transition=`${Z.transition}, ${g.transition}`),g.WebkitTransition=g.transition);const A={};_&&(A.transition=`opacity ${br}ms ${w} ${Fn}ms`,A.WebkitTransition=A.transition,Er===0&&(A.opacity=0));const X=typeof yn["aria-hidden"]<"u"?yn["aria-hidden"]:D===0;return bs.createElement("div",Object.assign({},yn,{"aria-hidden":X,className:`${Tn} ${U}`,style:g,ref:v}),bs.createElement("div",{className:V,style:A,ref:an=>{nn.current=an,pn&&(pn.current=an)}},z))});function Yb(){return a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})}function qr({title:u,children:v}){const[_,d]=rn.useState(!1),E=_?"auto":0,z=$r(fs.button,_&&fs.open),U=()=>d(!_);return a.jsxs("div",{className:fs.accordion,children:[a.jsxs("button",{className:z,onClick:U,children:[a.jsx("span",{children:u}),a.jsx(Yb,{})]}),a.jsx(Gb,{animateOpacity:!0,height:E,duration:400,children:a.jsx("div",{className:fs.content,children:v})})]})}const Kb="_linkWrapper_1logo_1",Vb="_link_1logo_1",qh={linkWrapper:Kb,link:Vb},Qb="_tooltip_1edpy_1",Xb="_exit_1edpy_13",Jb="_text_1edpy_27",Uc={tooltip:Qb,exit:Xb,text:Jb};var Zb=Fh();const Fb=Ka(Zb);function Pb({anchorRef:u,content:v,showTooltip:_}){const d=rn.useRef(null),[E,z]=rn.useState(null),[U,V]=rn.useState(!1),L=$r(Uc.tooltip,!_&&Uc.exit),x=()=>V(!1),B=()=>{_||V(!0)};return rn.useEffect(()=>{if(!_||!u.current)return;const w=u.current.getBoundingClientRect(),D=d.current?.offsetHeight??0,Y=w.left+window.scrollX,en=w.top+window.scrollY-D-4;z({top:en,left:Y})},[_]),(_||!U)&&u.current&&Fb.createPortal(a.jsx("div",{ref:d,className:L,style:E??{},onAnimationStart:x,onAnimationEnd:B,children:a.jsx("span",{className:Uc.text,children:v})}),document.body)}function Q({href:u,description:v}){const _=rn.useRef(null),[d,E]=rn.useState(!1);let z;const U=x=>{x.preventDefault(),window.history.replaceState({},"",u),clearTimeout(z),E(!1),ag(u,tg()-2)},V=()=>{z=setTimeout(()=>{E(!0)},700)},L=()=>{clearTimeout(z),E(!1)};return a.jsxs("div",{className:qh.linkWrapper,children:[a.jsx("a",{ref:_,href:u,className:qh.link,onClick:U,role:"button","aria-description":v,onMouseEnter:V,onMouseLeave:L,children:v}),a.jsx(Pb,{anchorRef:_,content:v,showTooltip:d})]})}function Wb(){return a.jsxs(a.Fragment,{children:[a.jsxs(qr,{title:"Big O",children:[a.jsx(Q,{href:"#bigo-chart",description:"Time/Space Complexities"}),a.jsx(Q,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),a.jsx(Q,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),a.jsxs(qr,{title:"Array",children:[a.jsx(Q,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),a.jsx(Q,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),a.jsx(Q,{href:"#array-sliding-window",description:"sliding window"}),a.jsx(Q,{href:"#array-prefix-sum",description:"prefix sum"}),a.jsx(Q,{href:"#array-string-building",description:"efficient string building"})]}),a.jsxs(qr,{title:"Hash Map",children:[a.jsx(Q,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),a.jsx(Q,{href:"#hashmap-sliding-window",description:"sliding window"})]}),a.jsxs(qr,{title:"Linked List",children:[a.jsx(Q,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),a.jsx(Q,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),a.jsxs(qr,{title:"Stack",children:[a.jsx(Q,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),a.jsx(Q,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),a.jsxs(qr,{title:"Binary Tree",children:[a.jsx(Q,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),a.jsx(Q,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),a.jsx(Q,{href:"#tree-bfs",description:"BFS"})]}),a.jsxs(qr,{title:"Graph",children:[a.jsx(Q,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),a.jsx(Q,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),a.jsx(Q,{href:"#graph-bfs",description:"BFS"}),a.jsx(Q,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),a.jsx(Q,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),a.jsx(Q,{href:"#graph-kahn",description:"Kahn (topological sort)"}),a.jsx(Q,{href:"#graph-kruskal",description:"Kruskal (mst)"}),a.jsx(Q,{href:"#graph-prim",description:"Prim (mst)"})]}),a.jsx(qr,{title:"Heap",children:a.jsx(Q,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),a.jsxs(qr,{title:"Binary Search",children:[a.jsx(Q,{href:"#binarysearch-binary-search",description:"binary search"}),a.jsx(Q,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),a.jsx(Q,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),a.jsx(Q,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),a.jsx(Q,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),a.jsx(qr,{title:"Backtracking",children:a.jsx(Q,{href:"#backtracking-backtracking",description:"backtracking"})}),a.jsxs(qr,{title:"Dynamic Programming",children:[a.jsx(Q,{href:"#dp-top-down",description:"top-down DP"}),a.jsx(Q,{href:"#dp-bottom-up",description:"bottom-up DP"}),a.jsx(Q,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),a.jsxs(qr,{title:"Bit Manipulation",children:[a.jsx(Q,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),a.jsx(Q,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),a.jsx(Q,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),a.jsx(Q,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),a.jsx(Q,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),a.jsx(Q,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),a.jsx(Q,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),a.jsx(Q,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),a.jsx(Q,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),a.jsxs(qr,{title:"Matrix",children:[a.jsx(Q,{href:"#matrix-create-copy",description:"create / copy"}),a.jsx(Q,{href:"#matrix-diagonals",description:"main / anti diagonals"}),a.jsx(Q,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),a.jsxs(qr,{title:"Data Structures",children:[a.jsx(Q,{href:"#ds-array",description:"array"}),a.jsx(Q,{href:"#ds-hash-map",description:"hashmap"}),a.jsx(Q,{href:"#ds-linked-list",description:"linked list"}),a.jsx(Q,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),a.jsx(Q,{href:"#ds-binary-tree",description:"binary tree"}),a.jsx(Q,{href:"#ds-binary-search-tree",description:"binary search tree"}),a.jsx(Q,{href:"#ds-graph",description:"graph"}),a.jsx(Q,{href:"#ds-union-find",description:"union find"}),a.jsx(Q,{href:"#ds-union-find-optimized",description:"union find optimized"}),a.jsx(Q,{href:"#ds-trie",description:"trie"})]}),a.jsxs(qr,{title:"Sorting Algorithms",children:[a.jsx(Q,{href:"#sort-bubble",description:"bubble sort"}),a.jsx(Q,{href:"#sort-selection",description:"selection sort"}),a.jsx(Q,{href:"#sort-insertion",description:"insertion sort"}),a.jsx(Q,{href:"#sort-shell",description:"shell sort"}),a.jsx(Q,{href:"#sort-merge",description:"mergesort"}),a.jsx(Q,{href:"#sort-quick",description:"quicksort"}),a.jsx(Q,{href:"#sort-tim",description:"timsort"}),a.jsx(Q,{href:"#sort-heap",description:"heapsort"}),a.jsx(Q,{href:"#sort-counting",description:"counting sort"}),a.jsx(Q,{href:"#sort-bucket",description:"bucket sort"}),a.jsx(Q,{href:"#sort-radix",description:"radix sort"}),a.jsx(Q,{href:"#sort-cube",description:"cubesort"}),a.jsx(Q,{href:"#sort-bogo",description:"bogo sort"}),a.jsx(Q,{href:"#sort-pancake",description:"pancake sort"}),a.jsx(Q,{href:"#sort-sleep",description:"sleep sort"})]})]})}function $b({hamburgerButtonRef:u}){const v=rn.useRef(null),{isSidebarOpen:_,showSidebar:d,hideSidebar:E}=Yc(),[z,U]=rn.useState(!1),V=$r(ds.sidebar,!_&&ds.exit,!_&&z&&ds.hide),x=eg({maxWidth:768},void 0,Y=>{Y&&_?E():!Y&&!_&&d()}),B=()=>{x&&_&&E()},w=()=>U(!1),D=()=>{_||U(!0)};return ig([v,u],B),a.jsx("nav",{ref:v,className:V,onAnimationStart:w,onAnimationEndCapture:D,children:a.jsx("div",{className:ds.scrollContainer,children:a.jsx(Wb,{})})})}function n0(){const u=rn.useRef(null);return a.jsxs("div",{id:"AppBar",children:[a.jsx(Ob,{forwardedRef:u}),a.jsx($b,{hamburgerButtonRef:u})]})}const r0="_main_1p6ym_1",e0="_sidebarHidden_1p6ym_11",Gh={main:r0,sidebarHidden:e0},t0="_container_1htmy_1",a0="_sectionHeader_1htmy_7",In={container:t0,sectionHeader:a0},i0="_container_13ll4_1",l0="_label_13ll4_13",s0="_tableWrapper_13ll4_21",o0="_dataRow_13ll4_30",c0="_red_13ll4_51",u0="_oliveGreen_13ll4_55",d0="_green_13ll4_59",f0="_orange_13ll4_63",h0="_yellow_13ll4_67",g0="_gray_13ll4_71",p={container:i0,label:l0,tableWrapper:s0,dataRow:o0,red:c0,oliveGreen:u0,green:d0,orange:f0,yellow:h0,gray:g0};function p0(){const u={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return a.jsx("section",{id:"bigo-chart",children:a.jsxs("div",{className:p.container,children:[a.jsx("h3",{children:"Big-O Complexity Chart"}),a.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[a.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:u.red}),a.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:u.orange}),a.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:u.yellow}),a.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:u.oliveGreen}),a.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:u.green}),a.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),a.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),a.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),a.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),a.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),a.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),a.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),a.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),a.jsx("text",{className:p.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function m0(){return a.jsx("section",{id:"bigo-data-structure-operations-table",children:a.jsxs("div",{className:p.container,children:[a.jsx("h3",{children:"Data Structure Operations"}),a.jsx("div",{className:p.tableWrapper,children:a.jsx("table",{className:p.table,children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Data Structure"}),a.jsx("th",{colSpan:8,children:"Time Complexity"}),a.jsx("th",{children:"Space Complexity"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{colSpan:4,children:"Average"}),a.jsx("th",{colSpan:4,children:"Worst"}),a.jsx("th",{children:"Worst"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{children:"Access"}),a.jsx("th",{children:"Search"}),a.jsx("th",{children:"Insertion"}),a.jsx("th",{children:"Deletion"}),a.jsx("th",{children:"Access"}),a.jsx("th",{children:"Search"}),a.jsx("th",{children:"Insertion"}),a.jsx("th",{children:"Deletion"}),a.jsx("th",{})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.yellow,children:"Θ(n)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.green,children:"O(1)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.green,children:"Θ(1)"}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.gray,children:"N/A"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.oliveGreen,children:"Θ(log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function b0(){return a.jsx("section",{id:"bigo-sorting-algorithms-table",children:a.jsxs("div",{className:p.container,children:[a.jsx("h3",{children:"Array Sorting Algorithms"}),a.jsx("div",{className:p.tableWrapper,children:a.jsx("table",{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("th",{children:"Algorithm"}),a.jsx("th",{colSpan:3,children:"Time Complexity"}),a.jsx("th",{children:"Space Complexity"})]}),a.jsxs("tr",{children:[a.jsx("th",{}),a.jsx("th",{children:"Best"}),a.jsx("th",{children:"Average"}),a.jsx("th",{children:"Worst"}),a.jsx("th",{children:"Worst"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.oliveGreen,children:"O(log(n))"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),a.jsx("td",{className:p.yellow,children:"Ω(n)"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),a.jsx("td",{className:p.yellow,children:"Ω(n)"}),a.jsx("td",{className:p.red,children:"Θ(n^2)"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),a.jsx("td",{className:p.yellow,children:"Ω(n)"}),a.jsx("td",{className:p.red,children:"Θ(n^2)"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),a.jsx("td",{className:p.red,children:"Ω(n^2)"}),a.jsx("td",{className:p.red,children:"Θ(n^2)"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),a.jsx("td",{className:p.orange,children:"Ω(n log(n))"}),a.jsx("td",{className:p.red,children:"Θ(n(log(n))^2)"}),a.jsx("td",{className:p.red,children:"O(n(log(n))^2)"}),a.jsx("td",{className:p.green,children:"O(1)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),a.jsx("td",{className:p.green,children:"Ω(n+k)"}),a.jsx("td",{className:p.green,children:"Θ(n+k)"}),a.jsx("td",{className:p.red,children:"O(n^2)"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),a.jsx("td",{className:p.green,children:"Ω(nk)"}),a.jsx("td",{className:p.green,children:"Θ(nk)"}),a.jsx("td",{className:p.green,children:"O(nk)"}),a.jsx("td",{className:p.yellow,children:"O(n+k)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),a.jsx("td",{className:p.green,children:"Ω(n+k)"}),a.jsx("td",{className:p.green,children:"Θ(n+k)"}),a.jsx("td",{className:p.green,children:"O(n+k)"}),a.jsx("td",{className:p.yellow,children:"O(k)"})]}),a.jsxs("tr",{className:p.dataRow,children:[a.jsx("td",{children:a.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),a.jsx("td",{className:p.yellow,children:"Ω(n)"}),a.jsx("td",{className:p.orange,children:"Θ(n log(n))"}),a.jsx("td",{className:p.orange,children:"O(n log(n))"}),a.jsx("td",{className:p.yellow,children:"O(n)"})]})]})})})]})})}function v0(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Big O"}),a.jsx(p0,{}),a.jsx(m0,{}),a.jsx(b0,{})]})}const _0="_container_12crg_1",x0="_buttonContainer_12crg_12",y0="_tabButtonContainer_12crg_18",T0="_tabButton_12crg_18",hs={container:_0,buttonContainer:x0,tabButtonContainer:y0,tabButton:T0},S0="_code_1qx6e_1",j0="_line_1qx6e_13",Yh={code:S0,line:j0};function N0(u){const v=u.regex,_=u.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),d="decltype\\(auto\\)",E="[a-zA-Z_]\\w*::",U="(?!struct)("+d+"|"+v.optional(E)+"[a-zA-Z_]\\w*"+v.optional("<[^<>]+>")+")",V={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},x={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[u.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},u.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},B={className:"number",variants:[{begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},w={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},u.inherit(x,{className:"string"}),{className:"string",begin:/<.*?>/},_,u.C_BLOCK_COMMENT_MODE]},D={className:"title",begin:v.optional(E)+u.IDENT_RE,relevance:0},Y=v.optional(E)+u.IDENT_RE+"\\s*\\(",en=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],Z=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],pn=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],yn=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],sn={type:Z,keyword:en,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:pn},Dn={className:"function.dispatch",relevance:0,keywords:{_hint:yn},begin:v.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,u.IDENT_RE,v.lookahead(/(<[^<>]+>|)\s*\(/))},mn=[Dn,w,V,_,u.C_BLOCK_COMMENT_MODE,B,x],cn={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:sn,contains:mn.concat([{begin:/\(/,end:/\)/,keywords:sn,contains:mn.concat(["self"]),relevance:0}]),relevance:0},Ln={className:"function",begin:"("+U+"[\\*&\\s]+)+"+Y,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:sn,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:d,keywords:sn,relevance:0},{begin:Y,returnBegin:!0,contains:[D],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[x,B]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:sn,relevance:0,contains:[_,u.C_BLOCK_COMMENT_MODE,x,B,V,{begin:/\(/,end:/\)/,keywords:sn,relevance:0,contains:["self",_,u.C_BLOCK_COMMENT_MODE,x,B,V]}]},V,_,u.C_BLOCK_COMMENT_MODE,w]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:sn,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(cn,Ln,Dn,mn,[w,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:sn,contains:["self",V]},{begin:u.IDENT_RE+"::",keywords:sn},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}var Hc,Kh;function E0(){if(Kh)return Hc;Kh=1;function u(h){return h instanceof Map?h.clear=h.delete=h.set=function(){throw new Error("map is read-only")}:h instanceof Set&&(h.add=h.clear=h.delete=function(){throw new Error("set is read-only")}),Object.freeze(h),Object.getOwnPropertyNames(h).forEach(k=>{const G=h[k],fn=typeof G;(fn==="object"||fn==="function")&&!Object.isFrozen(G)&&u(G)}),h}class v{constructor(k){k.data===void 0&&(k.data={}),this.data=k.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function _(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(h,...k){const G=Object.create(null);for(const fn in h)G[fn]=h[fn];return k.forEach(function(fn){for(const rr in fn)G[rr]=fn[rr]}),G}const E="</span>",z=h=>!!h.scope,U=(h,{prefix:k})=>{if(h.startsWith("language:"))return h.replace("language:","language-");if(h.includes(".")){const G=h.split(".");return[`${k}${G.shift()}`,...G.map((fn,rr)=>`${fn}${"_".repeat(rr+1)}`)].join(" ")}return`${k}${h}`};class V{constructor(k,G){this.buffer="",this.classPrefix=G.classPrefix,k.walk(this)}addText(k){this.buffer+=_(k)}openNode(k){if(!z(k))return;const G=U(k.scope,{prefix:this.classPrefix});this.span(G)}closeNode(k){z(k)&&(this.buffer+=E)}value(){return this.buffer}span(k){this.buffer+=`<span class="${k}">`}}const L=(h={})=>{const k={children:[]};return Object.assign(k,h),k};class x{constructor(){this.rootNode=L(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(k){this.top.children.push(k)}openNode(k){const G=L({scope:k});this.add(G),this.stack.push(G)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(k){return this.constructor._walk(k,this.rootNode)}static _walk(k,G){return typeof G=="string"?k.addText(G):G.children&&(k.openNode(G),G.children.forEach(fn=>this._walk(k,fn)),k.closeNode(G)),k}static _collapse(k){typeof k!="string"&&k.children&&(k.children.every(G=>typeof G=="string")?k.children=[k.children.join("")]:k.children.forEach(G=>{x._collapse(G)}))}}class B extends x{constructor(k){super(),this.options=k}addText(k){k!==""&&this.add(k)}startScope(k){this.openNode(k)}endScope(){this.closeNode()}__addSublanguage(k,G){const fn=k.root;G&&(fn.scope=`language:${G}`),this.add(fn)}toHTML(){return new V(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function w(h){return h?typeof h=="string"?h:h.source:null}function D(h){return Z("(?=",h,")")}function Y(h){return Z("(?:",h,")*")}function en(h){return Z("(?:",h,")?")}function Z(...h){return h.map(G=>w(G)).join("")}function pn(h){const k=h[h.length-1];return typeof k=="object"&&k.constructor===Object?(h.splice(h.length-1,1),k):{}}function yn(...h){return"("+(pn(h).capture?"":"?:")+h.map(fn=>w(fn)).join("|")+")"}function _n(h){return new RegExp(h.toString()+"|").exec("").length-1}function nn(h,k){const G=h&&h.exec(k);return G&&G.index===0}const sn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Dn(h,{joinWith:k}){let G=0;return h.map(fn=>{G+=1;const rr=G;let Pn=w(fn),P="";for(;Pn.length>0;){const J=sn.exec(Pn);if(!J){P+=Pn;break}P+=Pn.substring(0,J.index),Pn=Pn.substring(J.index+J[0].length),J[0][0]==="\\"&&J[1]?P+="\\"+String(Number(J[1])+rr):(P+=J[0],J[0]==="("&&G++)}return P}).map(fn=>`(${fn})`).join(k)}const mn=/\b\B/,cn="[a-zA-Z]\\w*",Ln="[a-zA-Z_]\\w*",Fn="\\b\\d+(\\.\\d+)?",br="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",or="\\b(0b[01]+)",$n="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Er=(h={})=>{const k=/^#![ ]*\//;return h.binary&&(h.begin=Z(k,/.*\b/,h.binary,/\b.*/)),d({scope:"meta",begin:k,end:/$/,relevance:0,"on:begin":(G,fn)=>{G.index!==0&&fn.ignoreMatch()}},h)},ar={begin:"\\\\[\\s\\S]",relevance:0},jr={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ar]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ar]},H={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},K=function(h,k,G={}){const fn=d({scope:"comment",begin:h,end:k,contains:[]},G);fn.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const rr=yn("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return fn.contains.push({begin:Z(/[ ]+/,"(",rr,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),fn},Tn=K("//","$"),Sn=K("/\\*","\\*/"),g=K("#","$"),A={scope:"number",begin:Fn,relevance:0},q={scope:"number",begin:br,relevance:0},X={scope:"number",begin:or,relevance:0},an={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ar,{begin:/\[/,end:/\]/,relevance:0,contains:[ar]}]},hn={scope:"title",begin:cn,relevance:0},gn={scope:"title",begin:Ln,relevance:0},Mn={begin:"\\.\\s*"+Ln,relevance:0};var Br=Object.freeze({__proto__:null,APOS_STRING_MODE:jr,BACKSLASH_ESCAPE:ar,BINARY_NUMBER_MODE:X,BINARY_NUMBER_RE:or,COMMENT:K,C_BLOCK_COMMENT_MODE:Sn,C_LINE_COMMENT_MODE:Tn,C_NUMBER_MODE:q,C_NUMBER_RE:br,END_SAME_AS_BEGIN:function(h){return Object.assign(h,{"on:begin":(k,G)=>{G.data._beginMatch=k[1]},"on:end":(k,G)=>{G.data._beginMatch!==k[1]&&G.ignoreMatch()}})},HASH_COMMENT_MODE:g,IDENT_RE:cn,MATCH_NOTHING_RE:mn,METHOD_GUARD:Mn,NUMBER_MODE:A,NUMBER_RE:Fn,PHRASAL_WORDS_MODE:H,QUOTE_STRING_MODE:N,REGEXP_MODE:an,RE_STARTERS_RE:$n,SHEBANG:Er,TITLE_MODE:hn,UNDERSCORE_IDENT_RE:Ln,UNDERSCORE_TITLE_MODE:gn});function ue(h,k){h.input[h.index-1]==="."&&k.ignoreMatch()}function Re(h,k){h.className!==void 0&&(h.scope=h.className,delete h.className)}function De(h,k){k&&h.beginKeywords&&(h.begin="\\b("+h.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",h.__beforeBegin=ue,h.keywords=h.keywords||h.beginKeywords,delete h.beginKeywords,h.relevance===void 0&&(h.relevance=0))}function ne(h,k){Array.isArray(h.illegal)&&(h.illegal=yn(...h.illegal))}function kt(h,k){if(h.match){if(h.begin||h.end)throw new Error("begin & end are not supported with match");h.begin=h.match,delete h.match}}function zn(h,k){h.relevance===void 0&&(h.relevance=1)}const rt=(h,k)=>{if(!h.beforeMatch)return;if(h.starts)throw new Error("beforeMatch cannot be used with starts");const G=Object.assign({},h);Object.keys(h).forEach(fn=>{delete h[fn]}),h.keywords=G.keywords,h.begin=Z(G.beforeMatch,D(G.begin)),h.starts={relevance:0,contains:[Object.assign(G,{endsParent:!0})]},h.relevance=0,delete G.beforeMatch},je=["of","and","for","in","not","or","if","then","parent","list","value"],Mt="keyword";function ia(h,k,G=Mt){const fn=Object.create(null);return typeof h=="string"?rr(G,h.split(" ")):Array.isArray(h)?rr(G,h):Object.keys(h).forEach(function(Pn){Object.assign(fn,ia(h[Pn],k,Pn))}),fn;function rr(Pn,P){k&&(P=P.map(J=>J.toLowerCase())),P.forEach(function(J){const dn=J.split("|");fn[dn[0]]=[Pn,Va(dn[0],dn[1])]})}}function Va(h,k){return k?Number(k):_s(h)?0:1}function _s(h){return je.includes(h.toLowerCase())}const Ki={},dr=h=>{console.error(h)},Vi=(h,...k)=>{console.log(`WARN: ${h}`,...k)},Le=(h,k)=>{Ki[`${h}/${k}`]||(console.log(`Deprecated as of ${h}. ${k}`),Ki[`${h}/${k}`]=!0)},Rt=new Error;function Dt(h,k,{key:G}){let fn=0;const rr=h[G],Pn={},P={};for(let J=1;J<=k.length;J++)P[J+fn]=rr[J],Pn[J+fn]=!0,fn+=_n(k[J-1]);h[G]=P,h[G]._emit=Pn,h[G]._multi=!0}function xs(h){if(Array.isArray(h.begin)){if(h.skip||h.excludeBegin||h.returnBegin)throw dr("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Rt;if(typeof h.beginScope!="object"||h.beginScope===null)throw dr("beginScope must be object"),Rt;Dt(h,h.begin,{key:"beginScope"}),h.begin=Dn(h.begin,{joinWith:""})}}function Qi(h){if(Array.isArray(h.end)){if(h.skip||h.excludeEnd||h.returnEnd)throw dr("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Rt;if(typeof h.endScope!="object"||h.endScope===null)throw dr("endScope must be object"),Rt;Dt(h,h.end,{key:"endScope"}),h.end=Dn(h.end,{joinWith:""})}}function ys(h){h.scope&&typeof h.scope=="object"&&h.scope!==null&&(h.beginScope=h.scope,delete h.scope)}function Ts(h){ys(h),typeof h.beginScope=="string"&&(h.beginScope={_wrap:h.beginScope}),typeof h.endScope=="string"&&(h.endScope={_wrap:h.endScope}),xs(h),Qi(h)}function Lt(h){function k(P,J){return new RegExp(w(P),"m"+(h.case_insensitive?"i":"")+(h.unicodeRegex?"u":"")+(J?"g":""))}class G{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(J,dn){dn.position=this.position++,this.matchIndexes[this.matchAt]=dn,this.regexes.push([dn,J]),this.matchAt+=_n(J)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const J=this.regexes.map(dn=>dn[1]);this.matcherRe=k(Dn(J,{joinWith:"|"}),!0),this.lastIndex=0}exec(J){this.matcherRe.lastIndex=this.lastIndex;const dn=this.matcherRe.exec(J);if(!dn)return null;const fr=dn.findIndex((ze,sa)=>sa>0&&ze!==void 0),ir=this.matchIndexes[fr];return dn.splice(0,fr),Object.assign(dn,ir)}}class fn{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(J){if(this.multiRegexes[J])return this.multiRegexes[J];const dn=new G;return this.rules.slice(J).forEach(([fr,ir])=>dn.addRule(fr,ir)),dn.compile(),this.multiRegexes[J]=dn,dn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(J,dn){this.rules.push([J,dn]),dn.type==="begin"&&this.count++}exec(J){const dn=this.getMatcher(this.regexIndex);dn.lastIndex=this.lastIndex;let fr=dn.exec(J);if(this.resumingScanAtSamePosition()&&!(fr&&fr.index===this.lastIndex)){const ir=this.getMatcher(0);ir.lastIndex=this.lastIndex+1,fr=ir.exec(J)}return fr&&(this.regexIndex+=fr.position+1,this.regexIndex===this.count&&this.considerAll()),fr}}function rr(P){const J=new fn;return P.contains.forEach(dn=>J.addRule(dn.begin,{rule:dn,type:"begin"})),P.terminatorEnd&&J.addRule(P.terminatorEnd,{type:"end"}),P.illegal&&J.addRule(P.illegal,{type:"illegal"}),J}function Pn(P,J){const dn=P;if(P.isCompiled)return dn;[Re,kt,Ts,rt].forEach(ir=>ir(P,J)),h.compilerExtensions.forEach(ir=>ir(P,J)),P.__beforeBegin=null,[De,ne,zn].forEach(ir=>ir(P,J)),P.isCompiled=!0;let fr=null;return typeof P.keywords=="object"&&P.keywords.$pattern&&(P.keywords=Object.assign({},P.keywords),fr=P.keywords.$pattern,delete P.keywords.$pattern),fr=fr||/\w+/,P.keywords&&(P.keywords=ia(P.keywords,h.case_insensitive)),dn.keywordPatternRe=k(fr,!0),J&&(P.begin||(P.begin=/\B|\b/),dn.beginRe=k(dn.begin),!P.end&&!P.endsWithParent&&(P.end=/\B|\b/),P.end&&(dn.endRe=k(dn.end)),dn.terminatorEnd=w(dn.end)||"",P.endsWithParent&&J.terminatorEnd&&(dn.terminatorEnd+=(P.end?"|":"")+J.terminatorEnd)),P.illegal&&(dn.illegalRe=k(P.illegal)),P.contains||(P.contains=[]),P.contains=[].concat(...P.contains.map(function(ir){return Ne(ir==="self"?P:ir)})),P.contains.forEach(function(ir){Pn(ir,dn)}),P.starts&&Pn(P.starts,J),dn.matcher=rr(dn),dn}if(h.compilerExtensions||(h.compilerExtensions=[]),h.contains&&h.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return h.classNameAliases=d(h.classNameAliases||{}),Pn(h)}function Dr(h){return h?h.endsWithParent||Dr(h.starts):!1}function Ne(h){return h.variants&&!h.cachedVariants&&(h.cachedVariants=h.variants.map(function(k){return d(h,{variants:null},k)})),h.cachedVariants?h.cachedVariants:Dr(h)?d(h,{starts:h.starts?d(h.starts):null}):Object.isFrozen(h)?d(h):h}var Ur="11.11.1";class Ss extends Error{constructor(k,G){super(k),this.name="HTMLInjectionError",this.html=G}}const Qa=_,Xi=d,zt=Symbol("nomatch"),la=7,Ct=function(h){const k=Object.create(null),G=Object.create(null),fn=[];let rr=!0;const Pn="Could not find the language '{}', did you forget to load/include a language module?",P={disableAutodetect:!0,name:"Plain text",contains:[]};let J={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:B};function dn(C){return J.noHighlightRe.test(C)}function fr(C){let tn=C.className+" ";tn+=C.parentNode?C.parentNode.className:"";const Nn=J.languageDetectRe.exec(tn);if(Nn){const qn=Hr(Nn[1]);return qn||(Vi(Pn.replace("{}",Nn[1])),Vi("Falling back to no-highlight mode for this block.",C)),qn?Nn[1]:"no-highlight"}return tn.split(/\s+/).find(qn=>dn(qn)||Hr(qn))}function ir(C,tn,Nn){let qn="",gr="";typeof tn=="object"?(qn=C,Nn=tn.ignoreIllegals,gr=tn.language):(Le("10.7.0","highlight(lang, code, ...args) has been deprecated."),Le("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),gr=C,qn=tn),Nn===void 0&&(Nn=!0);const zr={code:qn,language:gr};Ut("before:highlight",zr);const re=zr.result?zr.result:ze(zr.language,zr.code,Nn);return re.code=zr.code,Ut("after:highlight",re),re}function ze(C,tn,Nn,qn){const gr=Object.create(null);function zr(I,W){return I.keywords[W]}function re(){if(!un.keywords){_r.addText(Gn);return}let I=0;un.keywordPatternRe.lastIndex=0;let W=un.keywordPatternRe.exec(Gn),vn="";for(;W;){vn+=Gn.substring(I,W.index);const wn=wr.case_insensitive?W[0].toLowerCase():W[0],sr=zr(un,wn);if(sr){const[de,Wa]=sr;if(_r.addText(vn),vn="",gr[wn]=(gr[wn]||0)+1,gr[wn]<=la&&(it+=Wa),de.startsWith("_"))vn+=W[0];else{const nl=wr.classNameAliases[de]||de;ee(W[0],nl)}}else vn+=W[0];I=un.keywordPatternRe.lastIndex,W=un.keywordPatternRe.exec(Gn)}vn+=Gn.substring(I),_r.addText(vn)}function Vr(){if(Gn==="")return;let I=null;if(typeof un.subLanguage=="string"){if(!k[un.subLanguage]){_r.addText(Gn);return}I=ze(un.subLanguage,Gn,!0,$i[un.subLanguage]),$i[un.subLanguage]=I._top}else I=oa(Gn,un.subLanguage.length?un.subLanguage:null);un.relevance>0&&(it+=I.relevance),_r.__addSublanguage(I._emitter,I.language)}function nr(){un.subLanguage!=null?Vr():re(),Gn=""}function ee(I,W){I!==""&&(_r.startScope(W),_r.addText(I),_r.endScope())}function Pi(I,W){let vn=1;const wn=W.length-1;for(;vn<=wn;){if(!I._emit[vn]){vn++;continue}const sr=wr.classNameAliases[I[vn]]||I[vn],de=W[vn];sr?ee(de,sr):(Gn=de,re(),Gn=""),vn++}}function ua(I,W){return I.scope&&typeof I.scope=="string"&&_r.openNode(wr.classNameAliases[I.scope]||I.scope),I.beginScope&&(I.beginScope._wrap?(ee(Gn,wr.classNameAliases[I.beginScope._wrap]||I.beginScope._wrap),Gn=""):I.beginScope._multi&&(Pi(I.beginScope,W),Gn="")),un=Object.create(I,{parent:{value:un}}),un}function Za(I,W,vn){let wn=nn(I.endRe,vn);if(wn){if(I["on:end"]){const sr=new v(I);I["on:end"](W,sr),sr.isMatchIgnored&&(wn=!1)}if(wn){for(;I.endsParent&&I.parent;)I=I.parent;return I}}if(I.endsWithParent)return Za(I.parent,W,vn)}function da(I){return un.matcher.regexIndex===0?(Gn+=I[0],1):(lt=!0,0)}function js(I){const W=I[0],vn=I.rule,wn=new v(vn),sr=[vn.__beforeBegin,vn["on:begin"]];for(const de of sr)if(de&&(de(I,wn),wn.isMatchIgnored))return da(W);return vn.skip?Gn+=W:(vn.excludeBegin&&(Gn+=W),nr(),!vn.returnBegin&&!vn.excludeBegin&&(Gn=W)),ua(vn,I),vn.returnBegin?0:W.length}function Qr(I){const W=I[0],vn=tn.substring(I.index),wn=Za(un,I,vn);if(!wn)return zt;const sr=un;un.endScope&&un.endScope._wrap?(nr(),ee(W,un.endScope._wrap)):un.endScope&&un.endScope._multi?(nr(),Pi(un.endScope,I)):sr.skip?Gn+=W:(sr.returnEnd||sr.excludeEnd||(Gn+=W),nr(),sr.excludeEnd&&(Gn=W));do un.scope&&_r.closeNode(),!un.skip&&!un.subLanguage&&(it+=un.relevance),un=un.parent;while(un!==wn.parent);return wn.starts&&ua(wn.starts,I),sr.returnEnd?0:W.length}function Fa(){const I=[];for(let W=un;W!==wr;W=W.parent)W.scope&&I.unshift(W.scope);I.forEach(W=>_r.openNode(W))}let Ht={};function fa(I,W){const vn=W&&W[0];if(Gn+=I,vn==null)return nr(),0;if(Ht.type==="begin"&&W.type==="end"&&Ht.index===W.index&&vn===""){if(Gn+=tn.slice(W.index,W.index+1),!rr){const wn=new Error(`0 width match regex (${C})`);throw wn.languageName=C,wn.badRule=Ht.rule,wn}return 1}if(Ht=W,W.type==="begin")return js(W);if(W.type==="illegal"&&!Nn){const wn=new Error('Illegal lexeme "'+vn+'" for mode "'+(un.scope||"<unnamed>")+'"');throw wn.mode=un,wn}else if(W.type==="end"){const wn=Qr(W);if(wn!==zt)return wn}if(W.type==="illegal"&&vn==="")return Gn+=`
`,1;if(Pa>1e5&&Pa>W.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Gn+=vn,vn.length}const wr=Hr(C);if(!wr)throw dr(Pn.replace("{}",C)),new Error('Unknown language: "'+C+'"');const Wi=Lt(wr);let ha="",un=qn||Wi;const $i={},_r=new J.__emitter(J);Fa();let Gn="",it=0,Ue=0,Pa=0,lt=!1;try{if(wr.__emitTokens)wr.__emitTokens(tn,_r);else{for(un.matcher.considerAll();;){Pa++,lt?lt=!1:un.matcher.considerAll(),un.matcher.lastIndex=Ue;const I=un.matcher.exec(tn);if(!I)break;const W=tn.substring(Ue,I.index),vn=fa(W,I);Ue=I.index+vn}fa(tn.substring(Ue))}return _r.finalize(),ha=_r.toHTML(),{language:C,value:ha,relevance:it,illegal:!1,_emitter:_r,_top:un}}catch(I){if(I.message&&I.message.includes("Illegal"))return{language:C,value:Qa(tn),illegal:!0,relevance:0,_illegalBy:{message:I.message,index:Ue,context:tn.slice(Ue-100,Ue+100),mode:I.mode,resultSoFar:ha},_emitter:_r};if(rr)return{language:C,value:Qa(tn),illegal:!1,relevance:0,errorRaised:I,_emitter:_r,_top:un};throw I}}function sa(C){const tn={value:Qa(C),illegal:!1,relevance:0,_top:P,_emitter:new J.__emitter(J)};return tn._emitter.addText(C),tn}function oa(C,tn){tn=tn||J.languages||Object.keys(k);const Nn=sa(C),qn=tn.filter(Hr).filter(tt).map(nr=>ze(nr,C,!1));qn.unshift(Nn);const gr=qn.sort((nr,ee)=>{if(nr.relevance!==ee.relevance)return ee.relevance-nr.relevance;if(nr.language&&ee.language){if(Hr(nr.language).supersetOf===ee.language)return 1;if(Hr(ee.language).supersetOf===nr.language)return-1}return 0}),[zr,re]=gr,Vr=zr;return Vr.secondBest=re,Vr}function Ee(C,tn,Nn){const qn=tn&&G[tn]||Nn;C.classList.add("hljs"),C.classList.add(`language-${qn}`)}function hr(C){let tn=null;const Nn=fr(C);if(dn(Nn))return;if(Ut("before:highlightElement",{el:C,language:Nn}),C.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",C);return}if(C.children.length>0&&(J.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(C)),J.throwUnescapedHTML))throw new Ss("One of your code blocks includes unescaped HTML.",C.innerHTML);tn=C;const qn=tn.textContent,gr=Nn?ir(qn,{language:Nn,ignoreIllegals:!0}):oa(qn);C.innerHTML=gr.value,C.dataset.highlighted="yes",Ee(C,Nn,gr.language),C.result={language:gr.language,re:gr.relevance,relevance:gr.relevance},gr.secondBest&&(C.secondBest={language:gr.secondBest.language,relevance:gr.secondBest.relevance}),Ut("after:highlightElement",{el:C,result:gr,text:qn})}function Lr(C){J=Xi(J,C)}const et=()=>{ca(),Le("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Xa(){ca(),Le("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ji=!1;function ca(){function C(){ca()}if(document.readyState==="loading"){Ji||window.addEventListener("DOMContentLoaded",C,!1),Ji=!0;return}document.querySelectorAll(J.cssSelector).forEach(hr)}function Zi(C,tn){let Nn=null;try{Nn=tn(h)}catch(qn){if(dr("Language definition for '{}' could not be registered.".replace("{}",C)),rr)dr(qn);else throw qn;Nn=P}Nn.name||(Nn.name=C),k[C]=Nn,Nn.rawDefinition=tn.bind(null,h),Nn.aliases&&Ce(Nn.aliases,{languageName:C})}function Bt(C){delete k[C];for(const tn of Object.keys(G))G[tn]===C&&delete G[tn]}function Ja(){return Object.keys(k)}function Hr(C){return C=(C||"").toLowerCase(),k[C]||k[G[C]]}function Ce(C,{languageName:tn}){typeof C=="string"&&(C=[C]),C.forEach(Nn=>{G[Nn.toLowerCase()]=tn})}function tt(C){const tn=Hr(C);return tn&&!tn.disableAutodetect}function at(C){C["before:highlightBlock"]&&!C["before:highlightElement"]&&(C["before:highlightElement"]=tn=>{C["before:highlightBlock"](Object.assign({block:tn.el},tn))}),C["after:highlightBlock"]&&!C["after:highlightElement"]&&(C["after:highlightElement"]=tn=>{C["after:highlightBlock"](Object.assign({block:tn.el},tn))})}function vr(C){at(C),fn.push(C)}function Fi(C){const tn=fn.indexOf(C);tn!==-1&&fn.splice(tn,1)}function Ut(C,tn){const Nn=C;fn.forEach(function(qn){qn[Nn]&&qn[Nn](tn)})}function Be(C){return Le("10.7.0","highlightBlock will be removed entirely in v12.0"),Le("10.7.0","Please use highlightElement now."),hr(C)}Object.assign(h,{highlight:ir,highlightAuto:oa,highlightAll:ca,highlightElement:hr,highlightBlock:Be,configure:Lr,initHighlighting:et,initHighlightingOnLoad:Xa,registerLanguage:Zi,unregisterLanguage:Bt,listLanguages:Ja,getLanguage:Hr,registerAliases:Ce,autoDetection:tt,inherit:Xi,addPlugin:vr,removePlugin:Fi}),h.debugMode=function(){rr=!1},h.safeMode=function(){rr=!0},h.versionString=Ur,h.regex={concat:Z,lookahead:D,either:yn,optional:en,anyNumberOfTimes:Y};for(const C in Br)typeof Br[C]=="object"&&u(Br[C]);return Object.assign(h,Br),h},Kr=Ct({});return Kr.newInstance=()=>Ct({}),Hc=Kr,Kr.HighlightJS=Kr,Kr.default=Kr,Hc}var A0=E0();const aa=Ka(A0);var Ya="[0-9](_*[0-9])*",gs=`\\.(${Ya})`,ps="[0-9a-fA-F](_*[0-9a-fA-F])*",Vh={className:"number",variants:[{begin:`(\\b(${Ya})((${gs})|\\.)?|(${gs}))[eE][+-]?(${Ya})[fFdD]?\\b`},{begin:`\\b(${Ya})((${gs})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${gs})[fFdD]?\\b`},{begin:`\\b(${Ya})[fFdD]\\b`},{begin:`\\b0[xX]((${ps})\\.?|(${ps})?\\.(${ps}))[pP][+-]?(${Ya})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${ps})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function lg(u,v,_){return _===-1?"":u.replace(v,d=>lg(u,v,_-1))}function w0(u){const v=u.regex,_="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",d=_+lg("(?:<"+_+"~~~(?:\\s*,\\s*"+_+"~~~)*>)?",/~~~/g,2),L={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},x={className:"meta",begin:"@"+_,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},B={className:"params",begin:/\(/,end:/\)/,keywords:L,relevance:0,contains:[u.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:L,illegal:/<\/|#/,contains:[u.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[u.BACKSLASH_ESCAPE]},u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,_],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[v.concat(/(?!else)/,_),/\s+/,_,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,_],className:{1:"keyword",3:"title.class"},contains:[B,u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+d+"\\s+)",u.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:L,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:L,relevance:0,contains:[x,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,Vh,u.C_BLOCK_COMMENT_MODE]},u.C_LINE_COMMENT_MODE,u.C_BLOCK_COMMENT_MODE]},Vh,x]}}function O0(u){const v=u.regex,_="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",d=v.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),E=v.concat(d,/(::\w+)*/),U={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},V={className:"doctag",begin:"@[A-Za-z]+"},L={begin:"#<",end:">"},x=[u.COMMENT("#","$",{contains:[V]}),u.COMMENT("^=begin","^=end",{contains:[V],relevance:10}),u.COMMENT("^__END__",u.MATCH_NOTHING_RE)],B={className:"subst",begin:/#\{/,end:/\}/,keywords:U},w={className:"string",contains:[u.BACKSLASH_ESCAPE,B],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:v.concat(/<<[-~]?'?/,v.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[u.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[u.BACKSLASH_ESCAPE,B]})]}]},D="[1-9](_?[0-9])*|0",Y="[0-9](_?[0-9])*",en={className:"number",relevance:0,variants:[{begin:`\\b(${D})(\\.(${Y}))?([eE][+-]?(${Y})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},Z={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:U}]},mn=[w,{variants:[{match:[/class\s+/,E,/\s+<\s+/,E]},{match:[/\b(class|module)\s+/,E]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:U},{match:[/(include|extend)\s+/,E],scope:{2:"title.class"},keywords:U},{relevance:0,match:[E,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:d,scope:"title.class"},{match:[/def/,/\s+/,_],scope:{1:"keyword",3:"title.function"},contains:[Z]},{begin:u.IDENT_RE+"::"},{className:"symbol",begin:u.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[w,{begin:_}],relevance:0},en,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|(?!=)/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:U},{begin:"("+u.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[u.BACKSLASH_ESCAPE,B],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(L,x),relevance:0}].concat(L,x);B.contains=mn,Z.contains=mn;const br=[{begin:/^\s*=>/,starts:{end:"$",contains:mn}},{className:"meta.prompt",begin:"^("+"[>?]>"+"|"+"[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]"+"|"+"(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>"+")(?=[ ])",starts:{end:"$",keywords:U,contains:mn}}];return x.unshift(L),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:U,illegal:/\/\*/,contains:[u.SHEBANG({binary:"ruby"})].concat(br).concat(x).concat(mn)}}const Qh="[A-Za-z$_][0-9A-Za-z$_]*",k0=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],M0=["true","false","null","undefined","NaN","Infinity"],sg=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],og=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],cg=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],R0=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],D0=[].concat(cg,sg,og);function L0(u){const v=u.regex,_=(K,{after:Tn})=>{const Sn="</"+K[0].slice(1);return K.input.indexOf(Sn,Tn)!==-1},d=Qh,E={begin:"<>",end:"</>"},z=/<[A-Za-z0-9\\._:-]+\s*\/>/,U={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(K,Tn)=>{const Sn=K[0].length+K.index,g=K.input[Sn];if(g==="<"||g===","){Tn.ignoreMatch();return}g===">"&&(_(K,{after:Sn})||Tn.ignoreMatch());let A;const q=K.input.substring(Sn);if(A=q.match(/^\s*=/)){Tn.ignoreMatch();return}if((A=q.match(/^\s+extends\s+/))&&A.index===0){Tn.ignoreMatch();return}}},V={$pattern:Qh,keyword:k0,literal:M0,built_in:D0,"variable.language":R0},L="[0-9](_?[0-9])*",x=`\\.(${L})`,B="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",w={className:"number",variants:[{begin:`(\\b(${B})((${x})|\\.)?|(${x}))[eE][+-]?(${L})\\b`},{begin:`\\b(${B})\\b((${x})\\b|\\.)?|(${x})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},D={className:"subst",begin:"\\$\\{",end:"\\}",keywords:V,contains:[]},Y={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,D],subLanguage:"xml"}},en={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,D],subLanguage:"css"}},Z={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,D],subLanguage:"graphql"}},pn={className:"string",begin:"`",end:"`",contains:[u.BACKSLASH_ESCAPE,D]},_n={className:"comment",variants:[u.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),u.C_BLOCK_COMMENT_MODE,u.C_LINE_COMMENT_MODE]},nn=[u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,Y,en,Z,pn,{match:/\$\d+/},w];D.contains=nn.concat({begin:/\{/,end:/\}/,keywords:V,contains:["self"].concat(nn)});const sn=[].concat(_n,D.contains),Dn=sn.concat([{begin:/(\s*)\(/,end:/\)/,keywords:V,contains:["self"].concat(sn)}]),mn={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:V,contains:Dn},cn={variants:[{match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,v.concat(d,"(",v.concat(/\./,d),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},Ln={relevance:0,match:v.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...sg,...og]}},Fn={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},br={variants:[{match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[mn],illegal:/%/},or={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function $n(K){return v.concat("(?!",K.join("|"),")")}const Er={match:v.concat(/\b/,$n([...cg,"super","import"].map(K=>`${K}\\s*\\(`)),d,v.lookahead(/\s*\(/)),className:"title.function",relevance:0},ar={begin:v.concat(/\./,v.lookahead(v.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},jr={match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},mn]},N="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+u.UNDERSCORE_IDENT_RE+")\\s*=>",H={match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,v.lookahead(N)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[mn]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:V,exports:{PARAMS_CONTAINS:Dn,CLASS_REFERENCE:Ln},illegal:/#(?![$_A-z])/,contains:[u.SHEBANG({label:"shebang",binary:"node",relevance:5}),Fn,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,Y,en,Z,pn,_n,{match:/\$\d+/},w,Ln,{scope:"attr",match:d+v.lookahead(":"),relevance:0},H,{begin:"("+u.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_n,u.REGEXP_MODE,{className:"function",begin:N,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:u.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:V,contains:Dn}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E.begin,end:E.end},{match:z},{begin:U.begin,"on:begin":U.isTrulyOpeningTag,end:U.end}],subLanguage:"xml",contains:[{begin:U.begin,end:U.end,skip:!0,contains:["self"]}]}]},br,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+u.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[mn,u.inherit(u.TITLE_MODE,{begin:d,className:"title.function"})]},{match:/\.\.\./,relevance:0},ar,{match:"\\$"+d,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[mn]},Er,or,cn,jr,{match:/\$[(.]/}]}}function z0(u){const v=u.regex,_=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),d=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],E=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,z=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],U=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],V=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],L=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...U],x=["__debug__","Ellipsis","False","None","NotImplemented","True",...V],B=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...z],w={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:d,built_in:L,literal:x,type:B},D={className:"meta",begin:/^(>>>|\.\.\.) /},Y={className:"subst",begin:/\{/,end:/\}/,keywords:w,illegal:/#/},en={begin:/\{\{/,relevance:0},Z={className:"string",contains:[u.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,D],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,D],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,D,en,Y]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,D,en,Y]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[u.BACKSLASH_ESCAPE,en,Y]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[u.BACKSLASH_ESCAPE,en,Y]},u.APOS_STRING_MODE,u.QUOTE_STRING_MODE]},pn="[0-9](_?[0-9])*",yn=`(\\b(${pn}))?\\.(${pn})|\\b(${pn})\\.`,_n=`\\b|${d.join("|")}`,nn={className:"number",relevance:0,variants:[{begin:`(\\b(${pn})|(${yn}))[eE][+-]?(${pn})[jJ]?(?=${_n})`},{begin:`(${yn})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_n})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${_n})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${_n})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_n})`},{begin:`\\b(${pn})[jJ](?=${_n})`}]},sn={className:"comment",begin:v.lookahead(/# type:/),end:/$/,keywords:w,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Dn={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:w,contains:["self",D,nn,Z,u.HASH_COMMENT_MODE,{scope:"params.operator",match:E},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return Y.contains=[Z,nn,D],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:w,illegal:/(<\/|\?)|=>/,contains:[D,nn,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},Z,sn,u.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,_],scope:{1:"keyword.def",3:"title.function"},contains:[Dn]},{variants:[{match:[/\bclass/,/\s+/,_,/\s*/,/\(\s*/,_,/\s*\)/]},{match:[/\bclass/,/\s+/,_]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[nn,Dn,Z]},{scope:"operator",match:E}]}}function ug(u){return u?typeof u=="string"?u:u.source:null}function Yi(u){return Zn("(?=",u,")")}function Zn(...u){return u.map(_=>ug(_)).join("")}function C0(u){const v=u[u.length-1];return typeof v=="object"&&v.constructor===Object?(u.splice(u.length-1,1),v):{}}function Yr(...u){return"("+(C0(u).capture?"":"?:")+u.map(d=>ug(d)).join("|")+")"}const Kc=u=>Zn(/\b/,u,/\w$/.test(u)?/\b/:/\B/),B0=["Protocol","Type"].map(Kc),Xh=["init","self"].map(Kc),U0=["Any","Self"],Ic=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Jh=["false","nil","true"],H0=["assignment","associativity","higherThan","left","lowerThan","none","right"],I0=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],Zh=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],dg=Yr(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),fg=Yr(dg,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),qc=Zn(dg,fg,"*"),hg=Yr(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),vs=Yr(hg,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),Me=Zn(hg,vs,"*"),ms=Zn(/[A-Z]/,vs,"*"),q0=["attached","autoclosure",Zn(/convention\(/,Yr("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",Zn(/objc\(/,Me,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],G0=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function Y0(u){const v={match:/\s+/,relevance:0},_=u.COMMENT("/\\*","\\*/",{contains:["self"]}),d=[u.C_LINE_COMMENT_MODE,_],E={match:[/\./,Yr(...B0,...Xh)],className:{2:"keyword"}},z={match:Zn(/\./,Yr(...Ic)),relevance:0},U=Ic.filter(zn=>typeof zn=="string").concat(["_|0"]),V=Ic.filter(zn=>typeof zn!="string").concat(U0).map(Kc),L={variants:[{className:"keyword",match:Yr(...V,...Xh)}]},x={$pattern:Yr(/\b\w+/,/#\w+/),keyword:U.concat(I0),literal:Jh},B=[E,z,L],w={match:Zn(/\./,Yr(...Zh)),relevance:0},D={className:"built_in",match:Zn(/\b/,Yr(...Zh),/(?=\()/)},Y=[w,D],en={match:/->/,relevance:0},Z={className:"operator",relevance:0,variants:[{match:qc},{match:`\\.(\\.|${fg})+`}]},pn=[en,Z],yn="([0-9]_*)+",_n="([0-9a-fA-F]_*)+",nn={className:"number",relevance:0,variants:[{match:`\\b(${yn})(\\.(${yn}))?([eE][+-]?(${yn}))?\\b`},{match:`\\b0x(${_n})(\\.(${_n}))?([pP][+-]?(${yn}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},sn=(zn="")=>({className:"subst",variants:[{match:Zn(/\\/,zn,/[0\\tnr"']/)},{match:Zn(/\\/,zn,/u\{[0-9a-fA-F]{1,8}\}/)}]}),Dn=(zn="")=>({className:"subst",match:Zn(/\\/,zn,/[\t ]*(?:[\r\n]|\r\n)/)}),mn=(zn="")=>({className:"subst",label:"interpol",begin:Zn(/\\/,zn,/\(/),end:/\)/}),cn=(zn="")=>({begin:Zn(zn,/"""/),end:Zn(/"""/,zn),contains:[sn(zn),Dn(zn),mn(zn)]}),Ln=(zn="")=>({begin:Zn(zn,/"/),end:Zn(/"/,zn),contains:[sn(zn),mn(zn)]}),Fn={className:"string",variants:[cn(),cn("#"),cn("##"),cn("###"),Ln(),Ln("#"),Ln("##"),Ln("###")]},br=[u.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[u.BACKSLASH_ESCAPE]}],or={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:br},$n=zn=>{const rt=Zn(zn,/\//),je=Zn(/\//,zn);return{begin:rt,end:je,contains:[...br,{scope:"comment",begin:`#(?!.*${je})`,end:/$/}]}},Er={scope:"regexp",variants:[$n("###"),$n("##"),$n("#"),or]},ar={match:Zn(/`/,Me,/`/)},jr={className:"variable",match:/\$\d+/},N={className:"variable",match:`\\$${vs}+`},H=[ar,jr,N],K={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:G0,contains:[...pn,nn,Fn]}]}},Tn={scope:"keyword",match:Zn(/@/,Yr(...q0),Yi(Yr(/\(/,/\s+/)))},Sn={scope:"meta",match:Zn(/@/,Me)},g=[K,Tn,Sn],A={match:Yi(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:Zn(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,vs,"+")},{className:"type",match:ms,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:Zn(/\s+&\s+/,Yi(ms)),relevance:0}]},q={begin:/</,end:/>/,keywords:x,contains:[...d,...B,...g,en,A]};A.contains.push(q);const X={match:Zn(Me,/\s*:/),keywords:"_|0",relevance:0},an={begin:/\(/,end:/\)/,relevance:0,keywords:x,contains:["self",X,...d,Er,...B,...Y,...pn,nn,Fn,...H,...g,A]},hn={begin:/</,end:/>/,keywords:"repeat each",contains:[...d,A]},gn={begin:Yr(Yi(Zn(Me,/\s*:/)),Yi(Zn(Me,/\s+/,Me,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:Me}]},Mn={begin:/\(/,end:/\)/,keywords:x,contains:[gn,...d,...B,...pn,nn,Fn,...g,A,an],endsParent:!0,illegal:/["']/},Vn={match:[/(func|macro)/,/\s+/,Yr(ar.match,Me,qc)],className:{1:"keyword",3:"title.function"},contains:[hn,Mn,v],illegal:[/\[/,/%/]},Br={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[hn,Mn,v],illegal:/\[|%/},ue={match:[/operator/,/\s+/,qc],className:{1:"keyword",3:"title"}},Re={begin:[/precedencegroup/,/\s+/,ms],className:{1:"keyword",3:"title"},contains:[A],keywords:[...H0,...Jh],end:/}/},De={match:[/class\b/,/\s+/,/func\b/,/\s+/,/\b[A-Za-z_][A-Za-z0-9_]*\b/],scope:{1:"keyword",3:"keyword",5:"title.function"}},ne={match:[/class\b/,/\s+/,/var\b/],scope:{1:"keyword",3:"keyword"}},kt={begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,Me,/\s*/],beginScope:{1:"keyword",3:"title.class"},keywords:x,contains:[hn,...B,{begin:/:/,end:/\{/,keywords:x,contains:[{scope:"title.class.inherited",match:ms},...B],relevance:0}]};for(const zn of Fn.variants){const rt=zn.contains.find(Mt=>Mt.label==="interpol");rt.keywords=x;const je=[...B,...Y,...pn,nn,Fn,...H];rt.contains=[...je,{begin:/\(/,end:/\)/,contains:["self",...je]}]}return{name:"Swift",keywords:x,contains:[...d,Vn,Br,De,ne,kt,ue,Re,{beginKeywords:"import",end:/$/,contains:[...d],relevance:0},Er,...B,...Y,...pn,nn,Fn,...H,...g,A,an]}}aa.registerLanguage("python",z0);aa.registerLanguage("javascript",L0);aa.registerLanguage("java",w0);aa.registerLanguage("cpp",N0);aa.registerLanguage("ruby",O0);aa.registerLanguage("swift",Y0);function K0({code:u,language:v}){const _=rn.useRef(null),[d,E]=rn.useState(""),[z,U]=rn.useState(""),V=$r("hljs",v,Yh.code),L=()=>{if(_.current){const Z=u.split(`
`).map((pn,yn)=>{const _n=aa.highlight(pn,{language:v}).value;return`<span class=${Yh.line} data-line-number=${yn+1}>${_n}</span>`}).join("");U(Z)}},x=()=>{_.current?.querySelectorAll("span[data-line-number]")?.forEach(Z=>Z.addEventListener("click",D))},B=()=>{_.current?.querySelectorAll("span[data-line-number]")?.forEach(Z=>Z.removeEventListener("click",D))},w=()=>{_.current?.querySelector(`span[data-line-number="${d}"]`)?.removeAttribute("focused")},D=Y=>{const en=Y.currentTarget,Z=en.getAttribute("data-line-number")??"";w(),Z===d?E(""):(en.setAttribute("focused",""),E(Z))};return ig(_,w),rn.useEffect(()=>(L(),x(),()=>B()),[u,z,d]),a.jsx("pre",{ref:_,children:a.jsx("code",{className:V,dangerouslySetInnerHTML:{__html:z}})})}const V0="_copyButton_1hjzm_1",Q0="_copySvg_1hjzm_25",X0="_checkSvg_1hjzm_32",J0="_checkSvgPath_1hjzm_37",Z0="_enter_1hjzm_48",F0="_exit_1hjzm_52",ta={copyButton:V0,copySvg:Q0,checkSvg:X0,checkSvgPath:J0,enter:Z0,exit:F0};function P0({onClick:u}){const[v,_]=rn.useState("show"),[d,E]=rn.useState("hide"),z=$r(ta.copySvg,v==="enter"&&ta.enter,v==="exit"&&ta.exit),U=$r(ta.checkSvg,d==="exit"&&ta.exit),V=$r(ta.checkSvgPath),L=()=>{v==="show"&&d==="hide"&&(_("exit"),u())},x=()=>{v==="enter"&&_("show"),v==="exit"&&(_("hide"),E("show"))},B=()=>{d==="show"&&setTimeout(()=>{E("exit")},500),d==="exit"&&(E("hide"),_("enter"))},w=()=>v!=="hide"&&a.jsx("svg",{className:z,viewBox:"0 0 512 512",onAnimationEnd:x,children:a.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),D=()=>d!=="hide"&&a.jsx("svg",{className:U,viewBox:"0 0 16 16",onAnimationEnd:B,children:a.jsx("path",{className:V,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return a.jsxs("button",{"aria-label":"copy button",className:ta.copyButton,onClick:L,children:[w(),D()]})}function W0(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),a.jsx("stop",{offset:1,stopColor:"#306998"})]}),a.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#FFD43B"}),a.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),a.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),a.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),a.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[a.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),a.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),a.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function $0(){return a.jsxs("svg",{viewBox:"0 0 128 128",children:[a.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),a.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function n1(){return a.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35",enableBackground:"new 0 0 306 344.35",children:[a.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),a.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),a.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),a.jsx("g",{children:a.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),a.jsx("g",{children:a.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508 221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841"})}),a.jsx("g",{children:a.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508 263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841"})})]})}function r1(){return a.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[a.jsxs("g",{children:[a.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),a.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),a.jsxs("g",{children:[a.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),a.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),a.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),a.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),a.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),a.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}function e1(){return a.jsx("svg",{viewBox:"0 0 32 32",children:a.jsx("path",{fill:"#DB380E",d:"M9.456 27.25L28 29.782l-6.27-10.441L9.457 27.25zM29.755 7.705c-.548.823-1.097 1.645-1.644 2.468-1.879 2.827-3.758 5.654-5.635 8.482-.105.158-.24.283-.093.525 1.814 2.995 3.613 5.999 5.417 9 .285.474.572.946.941 1.401l1.094-21.852-.08-.023zm-24.76 9.338c.085.081.296.127.395.079 1.74-.855 3.491-1.691 5.192-2.617.555-.302.982-.842 1.46-1.281 1.583-1.452 3.164-2.907 4.744-4.362.097-.089.211-.176.269-.288.568-1.109 1.125-2.224 1.703-3.371-.689-.259-1.341-.512-2.002-.742-.089-.031-.231.031-.328.085-1.53.854-3.088 1.663-4.569 2.595-.741.466-1.345 1.154-2.001 1.752a263.561 263.561 0 0 0-3.156 2.915 5.385 5.385 0 0 0-.744.872c-.713 1.038-1.404 2.091-2.127 3.173.404.419.772.819 1.165 1.191zm6.358-1.418L8.738 26.672l12.286-7.916-9.671-3.13zM28.692 7.74L18.25 9.484l3.544 8.62L28.693 7.74zm-17.194 7.137l9.479 3.077a46701.83 46701.83 0 0 0-3.506-8.538l-5.973 5.461zm-6.372 4.298l-3.317 7.93 6.318-.187-3.001-7.744zm3.075 5.905l.079-.017c.758-3.154 1.528-6.287 2.303-9.565l-5.069 2.635c.864 2.246 1.785 4.615 2.688 6.947zM27.417 7.229l-3.027-.801c-1.451-.381-2.903-.758-4.353-1.143-.181-.048-.312-.08-.419.139-.512 1.05-1.041 2.092-1.561 3.138-.016.032-.013.074-.025.155l9.383-1.422.002-.066zm-5.853-2.388l8.223 2.275-1.359-3.872-6.852 1.519-.012.077zM8.899 27.856c-1.019-.117-2.064-.009-3.097.008-.849.015-1.697.047-2.545.073a.338.338 0 0 0-.262.114l21.044 1.946.014-.094-6.746-.921c-2.802-.383-5.599-.803-8.408-1.127zm-6.952-3.171c.904-2.097 1.804-4.197 2.712-6.292.091-.21.084-.353-.094-.522-.38-.361-.732-.751-1.147-1.182L1.763 24.86l.061.029c.042-.067.093-.131.124-.203zM19.763 4.287c1.524-.393 3.071-.701 4.608-1.044.099-.022.197-.055.295-.083l-.015-.075-6.606.889c.62.271 1.098.473 1.718.314z"})})}function t1(){return a.jsxs("svg",{viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{width:"128",height:"128",fill:"#F05138"}),a.jsx("text",{x:"64",y:"80",fontSize:"50",fill:"#FFF",fontWeight:"bold",textAnchor:"middle",children:"SW"})]})}const a1={python:W0,javascript:$0,cpp:n1,java:r1,ruby:e1,swift:t1};function o({title:u,children:v}){const{selectedLanguage:_,setSelectedLanguage:d}=Am(),E=rn.Children.toArray(v),z=E.findIndex(w=>w.props.language===_);let U="";try{U=E[z].props.code}catch{}const V=E[z].props.language,L=w=>{d(E[w].props.language)},x=()=>navigator.clipboard.writeText(U),B=()=>E.map((w,D)=>{const Y=a1[w.props.language],en=`view ${w.props.language} code`;return a.jsx("button",{role:"tab","aria-label":en,"aria-selected":D===z,className:hs.tabButton,onClick:()=>L(D),children:a.jsx(Y,{})},D)});return a.jsxs("div",{role:"tablist",className:hs.container,children:[a.jsx("h3",{children:u}),a.jsxs("div",{className:hs.buttonContainer,children:[a.jsx("div",{role:"tablist",className:hs.tabButtonContainer,children:B()}),a.jsx(P0,{onClick:x})]}),a.jsx("div",{role:"tabpanel",className:"tabs-content",children:a.jsx(K0,{code:U,language:V})})]})}o.Tab=u=>a.jsx(a.Fragment,{children:u});const i1=`def fn(arr):\r
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
`,o1=`def fn(arr):\r
    n = len(arr)\r
    prefix = [arr[0]]\r
\r
    for i in range(1, n):\r
        prefix.append(prefix[-1] + arr[i])\r
\r
    return prefix\r
`,c1=`def fn(strs: list[str]):\r
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
`,v1=`import java.util.ArrayList;\r
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
`,_1=`public String fn(char[] strs) {\r
    StringBuilder sb = new StringBuilder();\r
\r
    for (char c: strs) {\r
        sb.append(c);\r
    }\r
\r
    return sb.toString();\r
}\r
`,x1=`#include <vector>\r
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
`,y1=`#include <vector>\r
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
`,T1=`#include <vector>\r
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
`,S1=`#include <iostream>\r
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
`,N1=`def fn(arr)\r
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
end`,E1=`func fn(_ arr: [Int]) -> Int {
    var ans = 0
    var left = 0
    var right = arr.count - 1

    while left < right {
        // TODO: logic with left and right
        let CONDITION = true
        if CONDITION {
            left += 1
        } else {
            right -= 1
        }
    }

    return ans
}
`,A1=`def fn(arr1, arr2)\r
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
`,w1=`func fn(_ arr1: [Int], _ arr2: [Int]) -> Int {
    var i = 0
    var j = 0
    var ans = 0

    while i < arr1.count && j < arr2.count {
        // TODO: logic
        let CONDITION = true
        if CONDITION {
            i += 1
        } else {
            j += 1
        }
    }

    while i < arr1.count {
        // TODO: logic
        i += 1
    }

    while j < arr2.count {
        // TODO: logic
        j += 1
    }

    return ans
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
`,k1=`func fn(_ arr: [Int]) -> Int {
    let n = arr.count
    var window = 0
    var left = 0
    var ans = 0

    for right in 0..<n {
        // TODO: add arr[right] to window

        // while WINDOW_CONDITION_BROKEN
        while false {
            // TODO: remove arr[left] from window
            left += 1
        }

        // TODO: update ans
    }

    return ans
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
`,R1=`func fn(_ arr: [Int]) -> [Int] {
    let n = arr.count
    var prefix = [arr[0]]

    for i in 1..<n {
        prefix.append(prefix.last! + arr[i])
    }

    return prefix
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
`,L1=`func fn(_ strs: [Character]) -> String {
    var ans = [Character]()

    for char in strs {
        ans.append(char)
    }

    return String(ans)
}
`;function z1(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Array"}),a.jsx("section",{id:"array-two-pointers-one-input",children:a.jsxs(o,{title:"two pointers: one input, opposite ends",children:[a.jsx(o.Tab,{code:i1,language:"python"}),a.jsx(o.Tab,{code:u1,language:"javascript"}),a.jsx(o.Tab,{code:p1,language:"java"}),a.jsx(o.Tab,{code:x1,language:"cpp"}),a.jsx(o.Tab,{code:N1,language:"ruby"}),a.jsx(o.Tab,{code:E1,language:"swift"})]})}),a.jsx("section",{id:"array-two-pointers-two-inputs",children:a.jsxs(o,{title:"two pointers: two inputs, exhaust both",children:[a.jsx(o.Tab,{code:l1,language:"python"}),a.jsx(o.Tab,{code:d1,language:"javascript"}),a.jsx(o.Tab,{code:m1,language:"java"}),a.jsx(o.Tab,{code:y1,language:"cpp"}),a.jsx(o.Tab,{code:A1,language:"ruby"}),a.jsx(o.Tab,{code:w1,language:"swift"})]})}),a.jsx("section",{id:"array-sliding-window",children:a.jsxs(o,{title:"sliding window",children:[a.jsx(o.Tab,{code:s1,language:"python"}),a.jsx(o.Tab,{code:f1,language:"javascript"}),a.jsx(o.Tab,{code:b1,language:"java"}),a.jsx(o.Tab,{code:T1,language:"cpp"}),a.jsx(o.Tab,{code:O1,language:"ruby"}),a.jsx(o.Tab,{code:k1,language:"swift"})]})}),a.jsx("section",{id:"array-prefix-sum",children:a.jsxs(o,{title:"prefix sum",children:[a.jsx(o.Tab,{code:o1,language:"python"}),a.jsx(o.Tab,{code:h1,language:"javascript"}),a.jsx(o.Tab,{code:v1,language:"java"}),a.jsx(o.Tab,{code:S1,language:"cpp"}),a.jsx(o.Tab,{code:M1,language:"ruby"}),a.jsx(o.Tab,{code:R1,language:"swift"})]})}),a.jsx("section",{id:"array-string-building",children:a.jsxs(o,{title:"efficient string building",children:[a.jsx(o.Tab,{code:c1,language:"python"}),a.jsx(o.Tab,{code:g1,language:"javascript"}),a.jsx(o.Tab,{code:_1,language:"java"}),a.jsx(o.Tab,{code:j1,language:"cpp"}),a.jsx(o.Tab,{code:D1,language:"ruby"}),a.jsx(o.Tab,{code:L1,language:"swift"})]})})]})}const C1=`from collections import defaultdict\r
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
`,I1=`import java.util.HashMap;\r
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
`,q1=`import java.util.HashSet;\r
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
`,G1=`#include <vector>\r
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
`,Y1=`#include <vector>\r
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
`,K1=`def fn(arr, k)\r
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
`,V1=`func fn(_ arr: [Int], _ k: Int) -> Int {
    var counts = [0: 1]
    var ans = 0
    var curr = 0

    for num in arr {
        // TODO: logic to change curr
        ans += counts[curr - k, default: 0]
        counts[curr, default: 0] += 1
    }

    return ans
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
`,X1=`func fn(_ arr: [Int]) -> Int {
    var window = Set<Int>()
    var ans = 0
    var left = 0

    for right in 0..<arr.count {
        // TODO: add arr[right] to window

        while false { // WINDOW_CONDITION_BROKEN
            // TODO: remove arr[left] from window
            left += 1
        }

        // TODO: update ans
    }

    return ans
}
`;function J1(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Hash Map"}),a.jsx("section",{id:"hashmap-find-number-of-subarrays",children:a.jsxs(o,{title:"find number of subarrays that fit an exact criteria",children:[a.jsx(o.Tab,{code:C1,language:"python"}),a.jsx(o.Tab,{code:U1,language:"javascript"}),a.jsx(o.Tab,{code:I1,language:"java"}),a.jsx(o.Tab,{code:G1,language:"cpp"}),a.jsx(o.Tab,{code:K1,language:"ruby"}),a.jsx(o.Tab,{code:V1,language:"swift"})]})}),a.jsx("section",{id:"hashmap-sliding-window",children:a.jsxs(o,{title:"sliding window",children:[a.jsx(o.Tab,{code:B1,language:"python"}),a.jsx(o.Tab,{code:H1,language:"javascript"}),a.jsx(o.Tab,{code:q1,language:"java"}),a.jsx(o.Tab,{code:Y1,language:"cpp"}),a.jsx(o.Tab,{code:Q1,language:"ruby"}),a.jsx(o.Tab,{code:X1,language:"swift"})]})})]})}const Z1=`def fn(head):\r
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
`,nv=`public ListNode fn(ListNode head) {\r
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
`,rv=`int fn(ListNode* head) {\r
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
`,ev=`ListNode* fn(ListNode* head) {\r
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
`,tv=`def fn(head)\r
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
`,av=`func fn(_ head: ListNode<Int>?) -> Int {
    var slow = head
    var fast = head
    var ans = 0

    while fast != nil && fast?.next != nil {
        // TODO: logic
        slow = slow?.next
        fast = fast?.next?.next
    }

    return ans
}
`,iv=`def fn(head)\r
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
`,lv=`func fn(_ head: ListNode<Int>?) -> ListNode<Int>? {
    var prev: ListNode<Int>? = nil
    var curr = head

    while let node = curr {
        let nxt = node.next
        node.next = prev
        prev = node
        curr = nxt
    }

    return prev
}
`;function sv(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Linked List"}),a.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:a.jsxs(o,{title:"fast and slow pointer",children:[a.jsx(o.Tab,{code:Z1,language:"python"}),a.jsx(o.Tab,{code:P1,language:"javascript"}),a.jsx(o.Tab,{code:$1,language:"java"}),a.jsx(o.Tab,{code:rv,language:"cpp"}),a.jsx(o.Tab,{code:tv,language:"ruby"}),a.jsx(o.Tab,{code:av,language:"swift"})]})}),a.jsx("section",{id:"linkedlist-reverse",children:a.jsxs(o,{title:"reverse linked list",children:[a.jsx(o.Tab,{code:F1,language:"python"}),a.jsx(o.Tab,{code:W1,language:"javascript"}),a.jsx(o.Tab,{code:nv,language:"java"}),a.jsx(o.Tab,{code:ev,language:"cpp"}),a.jsx(o.Tab,{code:iv,language:"ruby"}),a.jsx(o.Tab,{code:lv,language:"swift"})]})})]})}const ov=`def fn(arr):\r
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
`,cv=`def fn(arr):\r
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
`,uv=`const fn = (arr) => {\r
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
`,dv=`const fn = (arr) => {\r
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
`,fv=`import java.util.Stack;\r
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
`,hv=`import java.util.Stack;\r
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
`,gv=`#include <stack>\r
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
`,pv=`#include <stack>\r
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
`,mv=`def fn(arr)\r
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
`,bv=`func fn(_ arr: [Int]) -> Int {
    var stack = [Int]()
    var ans = 0

    for num in arr {
        while !stack.isEmpty && stack.last! > num {
            // TODO: logic
            stack.removeLast()
        }
        stack.append(num)
    }

    return ans
}
`,vv=`def fn(arr)\r
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
`,_v=`func fn(_ arr: [Int]) -> Int {
    var stack = [Int]()
    var ans = 0

    for num in arr {
        while !stack.isEmpty && stack.last! < num {
            // TODO: logic
            stack.removeLast()
        }
        stack.append(num)
    }

    return ans
}
`;function xv(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Stack"}),a.jsx("section",{id:"stack-monotonic-increasing",children:a.jsxs(o,{title:"monotonic increasing stack",children:[a.jsx(o.Tab,{code:ov,language:"python"}),a.jsx(o.Tab,{code:uv,language:"javascript"}),a.jsx(o.Tab,{code:fv,language:"java"}),a.jsx(o.Tab,{code:gv,language:"cpp"}),a.jsx(o.Tab,{code:mv,language:"ruby"}),a.jsx(o.Tab,{code:bv,language:"swift"})]})}),a.jsx("section",{id:"stack-monotonic-decreasing",children:a.jsxs(o,{title:"monotonic decreasing stack",children:[a.jsx(o.Tab,{code:cv,language:"python"}),a.jsx(o.Tab,{code:dv,language:"javascript"}),a.jsx(o.Tab,{code:hv,language:"java"}),a.jsx(o.Tab,{code:pv,language:"cpp"}),a.jsx(o.Tab,{code:vv,language:"ruby"}),a.jsx(o.Tab,{code:_v,language:"swift"})]})})]})}const yv=`def dfs(root):\r
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
`,Tv=`def dfs(root):\r
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
`,Sv=`from collections import deque\r
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
`,jv=`const dfs = (root) => {\r
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
`,Nv=`const dfs = (root) => {\r
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
`,Ev=`const fn = (root) => {\r
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
`,Av=`public int dfs(TreeNode root) {\r
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
`,wv=`import java.util.Stack;\r
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
`,Ov=`import java.util.LinkedList;\r
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
`,kv=`int dfs(TreeNode* root) {\r
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
`,Mv=`#include <stack>\r
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
`,Rv=`#include <queue>\r
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
`,Dv=`def dfs(root)\r
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
`,Lv=`func dfs(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }

    var ans = 0

    // TODO: logic
    _ = dfs(root.left)
    _ = dfs(root.right)

    return ans
}
`,zv=`def dfs(root)\r
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
`,Cv=`func dfs(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }
    var stack = [root]
    var ans = 0

    while !stack.isEmpty {
        let node = stack.removeLast()
        // TODO: logic
        if let left = node.left {
            stack.append(left)
        }
        if let right = node.right {
            stack.append(right)
        }
    }

    return ans
}
`,Bv=`def fn(root)\r
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
`,Uv=`class TreeNode {
    var val: Int
    var left: TreeNode?
    var right: TreeNode?
    init(_ val: Int) { self.val = val }
}

func fn(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }
    var que = [root]
    var ans = 0

    while !que.isEmpty {
        let currentLength = que.count
        // TODO: logic for current level
        for _ in 0..<currentLength {
            let node = que.removeFirst()
            // TODO: logic
            if let left = node.left {
                que.append(left)
            }
            if let right = node.right {
                que.append(right)
            }
        }
    }

    return ans
}
`;function Hv(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Binary Tree"}),a.jsx("section",{id:"tree-dfs-recursive",children:a.jsxs(o,{title:"DFS (recursive)",children:[a.jsx(o.Tab,{code:yv,language:"python"}),a.jsx(o.Tab,{code:jv,language:"javascript"}),a.jsx(o.Tab,{code:Av,language:"java"}),a.jsx(o.Tab,{code:kv,language:"cpp"}),a.jsx(o.Tab,{code:Dv,language:"ruby"}),a.jsx(o.Tab,{code:Lv,language:"swift"})]})}),a.jsx("section",{id:"tree-dfs-iterative",children:a.jsxs(o,{title:"DFS (iterative)",children:[a.jsx(o.Tab,{code:Tv,language:"python"}),a.jsx(o.Tab,{code:Nv,language:"javascript"}),a.jsx(o.Tab,{code:wv,language:"java"}),a.jsx(o.Tab,{code:Mv,language:"cpp"}),a.jsx(o.Tab,{code:zv,language:"ruby"}),a.jsx(o.Tab,{code:Cv,language:"swift"})]})}),a.jsx("section",{id:"tree-bfs",children:a.jsxs(o,{title:"BFS",children:[a.jsx(o.Tab,{code:Sv,language:"python"}),a.jsx(o.Tab,{code:Ev,language:"javascript"}),a.jsx(o.Tab,{code:Ov,language:"java"}),a.jsx(o.Tab,{code:Rv,language:"cpp"}),a.jsx(o.Tab,{code:Bv,language:"ruby"}),a.jsx(o.Tab,{code:Uv,language:"swift"})]})})]})}const Iv=`def fn(graph):\r
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
`,qv=`def fn(graph):\r
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
`,Gv=`from collections import deque\r
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
`,Yv=`from heapq import heappop, heappush\r
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
`,Kv=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:\r
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
`,Vv=`from collections import defaultdict, deque\r
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
`,Qv=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
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
`,Xv=`from heapq import heappop\r
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
`,Jv=`const fn = (graph) => {\r
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
`,Zv=`const fn = (graph) => {\r
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
`,Fv=`const fn = (graph) => {\r
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
`,Pv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,Wv=`const bellmanFord = (n, edges, source) => {\r
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
`,$v=`const kahnTopologicalSort = (graph) => {\r
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
`,n_=`const kruskalMst = (n, edges) => {\r
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
`,r_=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,e_=`import java.util.HashSet;\r
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
`,t_=`import java.util.Stack;\r
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
`,a_=`import java.util.ArrayList;\r
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
`,i_=`import java.util.Arrays;\r
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
`,l_=`import java.util.Arrays;\r
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
`,s_=`import java.util.ArrayList;\r
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
`,o_=`import java.util.ArrayList;\r
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
`,c_=`import java.util.ArrayList;\r
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
`,u_=`#include <unordered_set>\r
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
`,d_=`#include <stack>\r
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
`,f_=`#include <queue>\r
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
`,h_=`#include <limits>\r
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
`,g_=`#include <vector>\r
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
`,p_=`#include <vector>\r
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
`,m_=`#include <vector>\r
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
`,b_=`#include <vector>\r
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
`,v_=`require 'set'\r
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
`,__=`func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
    var seen = Set([startNode])

    func dfs(_ node: Int) -> Int {
        var ans = 0
        // TODO: logic
        if let neighbors = graph[node] {
            for neighbor in neighbors {
                if !seen.contains(neighbor) {
                    seen.insert(neighbor)
                    ans += dfs(neighbor)
                }
            }
        }
        return ans
    }

    return dfs(startNode)
}
`,x_=`require 'set'\r
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
`,y_=`func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
    var stack = [startNode]
    var seen = Set([startNode])
    var ans = 0

    while !stack.isEmpty {
        let node = stack.removeLast()
        // TODO: logic
        if let neighbors = graph[node] {
            for neighbor in neighbors {
                if !seen.contains(neighbor) {
                    seen.insert(neighbor)
                    stack.append(neighbor)
                }
            }
        }
    }

    return ans
}
`,T_=`require 'set'\r
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
`,S_=`func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
    var que = [startNode]
    var seen = Set([startNode])
    var ans = 0

    while !que.isEmpty {
        let node = que.removeFirst()
        // TODO: logic
        if let neighbors = graph[node] {
            for neighbor in neighbors {
                if !seen.contains(neighbor) {
                    seen.insert(neighbor)
                    que.append(neighbor)
                }
            }
        }
    }

    return ans
}
`,j_=`require 'priority_queue'\r
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
`,N_=`import Foundation

// Assuming a basic MinHeap or PriorityQueue exists
func dijkstras(_ graph: [[(node: Int, weight: Int)]], _ source: Int) -> [Int] {
    let n = graph.count
    var distances = Array(repeating: Int.max / 2, count: n)
    distances[source] = 0

    // Omitted PriorityQueue implementation for brevity
    var heap = [(dist: 0, node: source)]

    while !heap.isEmpty {
        heap.sort { $0.dist < $1.dist }
        let current = heap.removeFirst()

        if current.dist > distances[current.node] { continue }

        for neighbor in graph[current.node] {
            let dist = current.dist + neighbor.weight

            if dist < distances[neighbor.node] {
                distances[neighbor.node] = dist
                heap.append((dist: dist, node: neighbor.node))
            }
        }
    }

    return distances
}
`,E_=`def bellman_ford(n, edges, source)\r
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
`,A_=`func bellmanFord(_ n: Int, _ edges: [(u: Int, v: Int, w: Int)], _ source: Int) -> [Int] {
    var distances = Array(repeating: Int.max / 2, count: n)
    distances[source] = 0

    for _ in 0..<(n - 1) {
        for edge in edges {
            if distances[edge.u] != Int.max / 2 && distances[edge.u] + edge.w < distances[edge.v] {
                distances[edge.v] = distances[edge.u] + edge.w
            }
        }
    }

    // Check for negative-weight cycles
    for edge in edges {
        if distances[edge.u] != Int.max / 2 && distances[edge.u] + edge.w < distances[edge.v] {
            return []
        }
    }

    return distances
}
`,w_=`def kahn_topological_sort(graph)\r
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
`,O_=`func kahnTopologicalSort(_ graph: [Int: [Int]]) -> [Int] {
    var result = [Int]()
    var indegree = [Int: Int]()

    for vertices in graph.values {
        for v in vertices {
            indegree[v, default: 0] += 1
        }
    }

    var que = [Int]()
    for node in graph.keys {
        if indegree[node] == nil || indegree[node]! == 0 {
            que.append(node)
        }
    }

    while !que.isEmpty {
        let node = que.removeFirst()
        result.append(node)

        if let neighbors = graph[node] {
            for neighbor in neighbors {
                indegree[neighbor]! -= 1
                if indegree[neighbor]! == 0 {
                    que.append(neighbor)
                }
            }
        }
    }

    return result.count == graph.count ? result : []
}
`,k_=`def kruskal_mst(n, edges)\r
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
`,M_=`func kruskalMST(_ n: Int, _ edges: [(w: Int, u: Int, v: Int)]) -> [(Int, Int, Int)] {
    var mst = [(Int, Int, Int)]()
    let uf = UnionFind(n) // Assuming UnionFind exists
    let sortedEdges = edges.sorted { $0.w < $1.w }

    for edge in sortedEdges {
        if !uf.connected(edge.u, edge.v) {
            uf.union(edge.u, edge.v)
            mst.append((edge.w, edge.u, edge.v))
        }
    }

    return mst
}
`,R_=`def prim_mst(n, edges)\r
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
`,D_=`func primMST(_ n: Int, _ edges: [(w: Int, u: Int, v: Int)]) -> [(Int, Int, Int)] {
    var mst = [(Int, Int, Int)]()
    let uf = UnionFind(n)
    var sortedEdges = edges.sorted { $0.w < $1.w }

    while !sortedEdges.isEmpty {
        let edge = sortedEdges.removeFirst()

        if !uf.connected(edge.u, edge.v) {
            uf.union(edge.u, edge.v)
            mst.append((edge.w, edge.u, edge.v))
        }
    }

    return mst
}
`;function L_(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Graph"}),a.jsx("section",{id:"graph-dfs-recursive",children:a.jsxs(o,{title:"DFS (recursive)",children:[a.jsx(o.Tab,{code:Iv,language:"python"}),a.jsx(o.Tab,{code:Jv,language:"javascript"}),a.jsx(o.Tab,{code:e_,language:"java"}),a.jsx(o.Tab,{code:u_,language:"cpp"}),a.jsx(o.Tab,{code:v_,language:"ruby"}),a.jsx(o.Tab,{code:__,language:"swift"})]})}),a.jsx("section",{id:"graph-dfs-iterative",children:a.jsxs(o,{title:"DFS (iterative)",children:[a.jsx(o.Tab,{code:qv,language:"python"}),a.jsx(o.Tab,{code:Zv,language:"javascript"}),a.jsx(o.Tab,{code:t_,language:"java"}),a.jsx(o.Tab,{code:d_,language:"cpp"}),a.jsx(o.Tab,{code:x_,language:"ruby"}),a.jsx(o.Tab,{code:y_,language:"swift"})]})}),a.jsx("section",{id:"graph-bfs",children:a.jsxs(o,{title:"BFS",children:[a.jsx(o.Tab,{code:Gv,language:"python"}),a.jsx(o.Tab,{code:Fv,language:"javascript"}),a.jsx(o.Tab,{code:a_,language:"java"}),a.jsx(o.Tab,{code:f_,language:"cpp"}),a.jsx(o.Tab,{code:T_,language:"ruby"}),a.jsx(o.Tab,{code:S_,language:"swift"})]})}),a.jsx("section",{id:"graph-dijkstra",children:a.jsxs(o,{title:"Dijkstra (shortest path)",children:[a.jsx(o.Tab,{code:Yv,language:"python"}),a.jsx(o.Tab,{code:Pv,language:"javascript"}),a.jsx(o.Tab,{code:i_,language:"java"}),a.jsx(o.Tab,{code:h_,language:"cpp"}),a.jsx(o.Tab,{code:j_,language:"ruby"}),a.jsx(o.Tab,{code:N_,language:"swift"})]})}),a.jsx("section",{id:"graph-bellman-ford",children:a.jsxs(o,{title:"Bellman-Ford (shortest path)",children:[a.jsx(o.Tab,{code:Kv,language:"python"}),a.jsx(o.Tab,{code:Wv,language:"javascript"}),a.jsx(o.Tab,{code:l_,language:"java"}),a.jsx(o.Tab,{code:g_,language:"cpp"}),a.jsx(o.Tab,{code:E_,language:"ruby"}),a.jsx(o.Tab,{code:A_,language:"swift"})]})}),a.jsx("section",{id:"graph-kahn",children:a.jsxs(o,{title:"Kahn (topological sort)",children:[a.jsx(o.Tab,{code:Vv,language:"python"}),a.jsx(o.Tab,{code:$v,language:"javascript"}),a.jsx(o.Tab,{code:s_,language:"java"}),a.jsx(o.Tab,{code:p_,language:"cpp"}),a.jsx(o.Tab,{code:w_,language:"ruby"}),a.jsx(o.Tab,{code:O_,language:"swift"})]})}),a.jsx("section",{id:"graph-kruskal",children:a.jsxs(o,{title:"Kruskal (mst)",children:[a.jsx(o.Tab,{code:Qv,language:"python"}),a.jsx(o.Tab,{code:n_,language:"javascript"}),a.jsx(o.Tab,{code:o_,language:"java"}),a.jsx(o.Tab,{code:m_,language:"cpp"}),a.jsx(o.Tab,{code:k_,language:"ruby"}),a.jsx(o.Tab,{code:M_,language:"swift"})]})}),a.jsx("section",{id:"graph-prim",children:a.jsxs(o,{title:"Prim (mst)",children:[a.jsx(o.Tab,{code:Xv,language:"python"}),a.jsx(o.Tab,{code:r_,language:"javascript"}),a.jsx(o.Tab,{code:c_,language:"java"}),a.jsx(o.Tab,{code:b_,language:"cpp"}),a.jsx(o.Tab,{code:R_,language:"ruby"}),a.jsx(o.Tab,{code:D_,language:"swift"})]})})]})}const z_=`from heapq import heappop, heappush\r
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
`,C_=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,B_=`import java.util.PriorityQueue;\r
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
`,U_=`#include <vector>\r
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
`,H_=`def fn(arr, k)\r
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
`,I_=`func fn(_ arr: [Int], _ k: Int) -> [Int] {
    var heap = [Int]() // Assuming a MinHeap array structure

    for num in arr {
        // TODO: logic to push onto heap according to problem's criteria
        heap.append(num)
        heap.sort() // Naive for simplicity here
        
        if heap.count > k {
            heap.removeFirst()
        }
    }

    return heap
}
`;function q_(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Heap"}),a.jsx("section",{id:"heap-find-top-k-elements",children:a.jsxs(o,{title:"find top k elements",children:[a.jsx(o.Tab,{code:z_,language:"python"}),a.jsx(o.Tab,{code:C_,language:"javascript"}),a.jsx(o.Tab,{code:B_,language:"java"}),a.jsx(o.Tab,{code:U_,language:"cpp"}),a.jsx(o.Tab,{code:H_,language:"ruby"}),a.jsx(o.Tab,{code:I_,language:"swift"})]})})]})}const G_=`def fn(arr, target):\r
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
`,Y_=`def fn(arr, target):\r
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
`,K_=`def fn(arr, target):\r
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
`,V_=`def fn(arr):\r
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
`,Q_=`def fn(arr):\r
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
`,X_=`const fn = (arr, target) => {\r
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
`,J_=`const fn = (arr, target) => {\r
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
`,Z_=`const fn = (arr, target) => {\r
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
`,F_=`const fn = (arr) => {\r
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
`,P_=`const fn = (arr) => {\r
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
`,W_=`public int fn(int[] arr, int target) {\r
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
`,$_=`public int fn(int[] arr, int target) {\r
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
`,nx=`public int fn(int[] arr, int target) {\r
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
`,rx=`public int fn(int[] arr) {\r
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
`,ex=`public int fn(int[] arr) {\r
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
`,tx=`#include <vector>\r
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
`,ax=`#include <vector>\r
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
`,ix=`#include <vector>\r
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
`,lx=`#include <vector>\r
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
`,sx=`#include <vector>\r
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
`,ox=`def fn(arr, target)\r
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
`,cx=`func fn(_ arr: [Int], _ target: Int) -> Int? {
    var left = 0
    var right = arr.count - 1

    while left <= right {
        let mid = left + (right - left) / 2

        if arr[mid] == target {
            // TODO: logic
            return mid
        }
        if arr[mid] > target {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
`,ux=`def fn(arr, target)\r
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
`,dx=`func fn(_ arr: [Int], _ target: Int) -> Int {
    var left = 0
    var right = arr.count

    while left < right {
        let mid = left + (right - left) / 2

        if arr[mid] >= target {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
`,fx=`def fn(arr, target)\r
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
`,hx=`func fn(_ arr: [Int], _ target: Int) -> Int {
    var left = 0
    var right = arr.count

    while left < right {
        let mid = left + (right - left) / 2

        if arr[mid] > target {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
`,gx=`def fn(arr)\r
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
end`,px=`func fn(_ arr: [Int]) -> Int {
    func check(_ x: Int) -> Bool {
        let BOOLEAN = true
        return BOOLEAN
    }

    let MINIMUM_POSSIBLE_ANSWER = 0
    let MAXIMUM_POSSIBLE_ANSWER = arr.count

    var left = MINIMUM_POSSIBLE_ANSWER
    var right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right {
        let mid = left + (right - left) / 2

        if check(mid) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
`,mx=`def fn(arr)\r
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
`,bx=`func fn(_ arr: [Int]) -> Int {
    func check(_ x: Int) -> Bool {
        let BOOLEAN = true
        return BOOLEAN
    }

    let MINIMUM_POSSIBLE_ANSWER = 0
    let MAXIMUM_POSSIBLE_ANSWER = arr.count

    var left = MINIMUM_POSSIBLE_ANSWER
    var right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right {
        let mid = left + (right - left) / 2

        if check(mid) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
}
`;function vx(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Binary Search"}),a.jsx("section",{id:"binarysearch-binary-search",children:a.jsxs(o,{title:"binary search",children:[a.jsx(o.Tab,{code:G_,language:"python"}),a.jsx(o.Tab,{code:X_,language:"javascript"}),a.jsx(o.Tab,{code:W_,language:"java"}),a.jsx(o.Tab,{code:tx,language:"cpp"}),a.jsx(o.Tab,{code:ox,language:"ruby"}),a.jsx(o.Tab,{code:cx,language:"swift"})]})}),a.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:a.jsxs(o,{title:"duplicate elements, left-most insertion point",children:[a.jsx(o.Tab,{code:Y_,language:"python"}),a.jsx(o.Tab,{code:J_,language:"javascript"}),a.jsx(o.Tab,{code:$_,language:"java"}),a.jsx(o.Tab,{code:ax,language:"cpp"}),a.jsx(o.Tab,{code:ux,language:"ruby"}),a.jsx(o.Tab,{code:dx,language:"swift"})]})}),a.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:a.jsxs(o,{title:"duplicate elements, right-most insertion point",children:[a.jsx(o.Tab,{code:K_,language:"python"}),a.jsx(o.Tab,{code:Z_,language:"javascript"}),a.jsx(o.Tab,{code:nx,language:"java"}),a.jsx(o.Tab,{code:ix,language:"cpp"}),a.jsx(o.Tab,{code:fx,language:"ruby"}),a.jsx(o.Tab,{code:hx,language:"swift"})]})}),a.jsx("section",{id:"binarysearch-greedy-minimum",children:a.jsxs(o,{title:"greedy (minimum)",children:[a.jsx(o.Tab,{code:V_,language:"python"}),a.jsx(o.Tab,{code:F_,language:"javascript"}),a.jsx(o.Tab,{code:rx,language:"java"}),a.jsx(o.Tab,{code:lx,language:"cpp"}),a.jsx(o.Tab,{code:gx,language:"ruby"}),a.jsx(o.Tab,{code:px,language:"swift"})]})}),a.jsx("section",{id:"binarysearch-greedy-maximum",children:a.jsxs(o,{title:"greedy (maximum)",children:[a.jsx(o.Tab,{code:Q_,language:"python"}),a.jsx(o.Tab,{code:P_,language:"javascript"}),a.jsx(o.Tab,{code:ex,language:"java"}),a.jsx(o.Tab,{code:sx,language:"cpp"}),a.jsx(o.Tab,{code:mx,language:"ruby"}),a.jsx(o.Tab,{code:bx,language:"swift"})]})})]})}const _x=`def backtrack(curr, OTHER_ARGUMENTS...):\r
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
`,xx=`const backtrack = (curr, OTHER_ARGUMENTS...) => {\r
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
`,yx=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
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
`,Tx=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
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
`,Sx=`def backtrack(curr, OTHER_ARGUMENTS...)\r
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
`,jx=`func backtrack(_ curr: inout [Int]) -> Int {
    let BASE_CASE = false
    if BASE_CASE {
        // TODO: modify answer
        return 0
    }

    var ans = 0
    let ITERATE_OVER_INPUT = 0..<5

    for _ in ITERATE_OVER_INPUT {
        // TODO: modify current state
        ans += backtrack(&curr)
        // TODO: undo modification of current state
    }

    return ans
}
`;function Nx(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Backtracking"}),a.jsx("section",{id:"backtracking-backtracking",children:a.jsxs(o,{title:"backtracking",children:[a.jsx(o.Tab,{code:_x,language:"python"}),a.jsx(o.Tab,{code:xx,language:"javascript"}),a.jsx(o.Tab,{code:yx,language:"java"}),a.jsx(o.Tab,{code:Tx,language:"cpp"}),a.jsx(o.Tab,{code:Sx,language:"ruby"}),a.jsx(o.Tab,{code:jx,language:"swift"})]})})]})}const Ex=`def fn(arr):\r
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
`,wx=`def kadane(arr: list[int]) -> int:\r
    curr_sub = max_sub = arr[0]\r
\r
    for num in arr[1:]:\r
        curr_sub = max(curr_sub + num, num)\r
        max_sub = max(max_sub, curr_sub)\r
\r
    return max_sub\r
`,Ox=`const fn = (arr) => {\r
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
`,kx=`const fn = (arr) => {\r
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
`,Mx=`const kadane = (arr) => {\r
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
`,Dx=`import java.util.Arrays;\r
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
`,Lx=`public int kadane(int[] arr) {\r
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
`,zx=`#include <unordered_map>\r
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
`,Hx=`func fn(_ arr: [Int]) -> Int {
    var memo = [Int: Int]()
    
    func dp(_ state: Int) -> Int {
        let BASE_CASE = state == 0
        if BASE_CASE {
            return 0
        }
        if let cached = memo[state] {
            return cached
        }
        // RECURRENCE_RELATION
        let result = state // Placeholder
        memo[state] = result
        return result
    }

    return dp(arr.count)
}
`,Ix=`def fn(arr)\r
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
`,qx=`func fn(_ arr: [Int]) -> Int {
    let BASE_CASE = 0
    let STATE_FOR_WHOLE_INPUT = arr.count
    let SMALLEST_SUBPROBLEM = 1
    
    if BASE_CASE > 0 {
        return 0
    }

    var dp = Array(repeating: BASE_CASE, count: STATE_FOR_WHOLE_INPUT + 1)

    for state in SMALLEST_SUBPROBLEM...STATE_FOR_WHOLE_INPUT {
        // RECURRENCE_RELATION
        dp[state] = dp[state - 1] // Example placeholder
    }

    return dp[STATE_FOR_WHOLE_INPUT]
}
`,Gx=`def kadane(arr)\r
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
`,Yx=`func kadane(_ arr: [Int]) -> Int {
    guard !arr.isEmpty else { return 0 }
    
    var currSub = arr[0]
    var maxSub = arr[0]

    for num in arr.dropFirst() {
        currSub = max(currSub + num, num)
        maxSub = max(maxSub, currSub)
    }

    return maxSub
}
`;function Kx(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Dynamic Programming"}),a.jsx("section",{id:"dp-top-down",children:a.jsxs(o,{title:"DP top-down",children:[a.jsx(o.Tab,{code:Ex,language:"python"}),a.jsx(o.Tab,{code:Ox,language:"javascript"}),a.jsx(o.Tab,{code:Rx,language:"java"}),a.jsx(o.Tab,{code:zx,language:"cpp"}),a.jsx(o.Tab,{code:Ux,language:"ruby"}),a.jsx(o.Tab,{code:Hx,language:"swift"})]})}),a.jsx("section",{id:"dp-bottom-up",children:a.jsxs(o,{title:"DP bottom-up",children:[a.jsx(o.Tab,{code:Ax,language:"python"}),a.jsx(o.Tab,{code:kx,language:"javascript"}),a.jsx(o.Tab,{code:Dx,language:"java"}),a.jsx(o.Tab,{code:Cx,language:"cpp"}),a.jsx(o.Tab,{code:Ix,language:"ruby"}),a.jsx(o.Tab,{code:qx,language:"swift"})]})}),a.jsx("section",{id:"dp-kadane",children:a.jsxs(o,{title:"Kadane (max-sum subarray)",children:[a.jsx(o.Tab,{code:wx,language:"python"}),a.jsx(o.Tab,{code:Mx,language:"javascript"}),a.jsx(o.Tab,{code:Lx,language:"java"}),a.jsx(o.Tab,{code:Bx,language:"cpp"}),a.jsx(o.Tab,{code:Gx,language:"ruby"}),a.jsx(o.Tab,{code:Yx,language:"swift"})]})})]})}const Vx=`def test_kth_bit(num: int, k: int) -> bool:\r
    return num & (1 << k) != 0\r
`,Qx=`def set_kth_bit(num: int, k: int) -> int:\r
    return num | (1 << k)\r
`,Xx=`def clear_kth_bit(num: int, k: int) -> int:\r
    return num & ~(1 << k)\r
`,Jx=`def toggle_kth_bit(num: int, k: int) -> int:\r
    return num ^ (1 << k)\r
`,Zx=`def get_rightmost_set_bit(num: int) -> int:\r
    return num & -num\r
`,Fx=`def count_set_bits(num: int) -> int:\r
    return bin(num).count('1')\r
`,Px=`def multiply_by_power_of_two(num: int, k: int) -> int:\r
    return num << k\r
`,Wx=`def divide_by_power_of_two(num: int, k: int) -> int:\r
    return num >> k\r
`,$x=`def is_power_of_two(num: int) -> bool:\r
    return (num & (num - 1)) == 0\r
`,ny=`def swap_variables(num1: int, num2: int) -> tuple:\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return num1, num2\r
`,ry=`const testKthBit = (num, k) => {\r
    return num & (1 << k) !== 0\r
}\r
`,ey=`const setKthBit = (num, k) => {\r
    return num | (1 << k)\r
}\r
`,ty=`const clearKthBit = (num, k) => {\r
    return num & ~(1 << k)\r
}\r
`,ay=`const toggleKthBit = (num, k) => {\r
    return num ^ (1 << k)\r
}\r
`,iy=`const getRightmostSetBit = (num) => {\r
    return num & -num\r
}\r
`,ly=`const countSetBits = (num) => {\r
    return num.toString(2).split('1').length - 1\r
}\r
`,sy=`const multiplyByPowerOfTwo = (num, k) => {\r
    return num << k\r
}\r
`,oy=`const divideByPowerOfTwo = (num, k) => {\r
    return num >> k;\r
}\r
`,cy=`const isPowerOfTwo = (num) => {\r
    return (num & (num - 1)) === 0\r
}\r
`,uy=`const swapVariables = (num1, num2) => {\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return [num1, num2]\r
}\r
`,dy=`public boolean testKthBit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,fy=`public int setKthBit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,hy=`public int clearKthBit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,gy=`public int toggleKthBit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,py=`public int getRightmostSetBit(int num) {\r
    return num & -num;\r
}\r
`,my=`public int countSetBits(int num) {\r
    int count = 0;\r
\r
    while (num > 0) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,by=`public int multiplyByPowerOfTwo(int num, int k) {\r
    return num << k;\r
}\r
`,vy=`public int divideByPowerOfTwo(int num, int k) {\r
    return num >> k;\r
}\r
`,_y=`public boolean isPowerOfTwo(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,xy=`public int[] swapVariables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return new int[] { num1, num2 };\r
}\r
`,yy=`bool test_kth_bit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,Ty=`int set_kth_bit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,Sy=`int clear_kth_bit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,jy=`int toggle_kth_bit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,Ny=`int get_rightmost_set_bit(int num) {\r
    return num & -num;\r
}\r
`,Ey=`int count_set_bits(int num) {\r
    int count = 0;\r
\r
    while (num) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,Ay=`int multiply_by_power_of_two(int num, int k) {\r
    return num << k;\r
}\r
`,wy=`int divide_by_power_of_two(int num, int k) {\r
    return num >> k;\r
}\r
`,Oy=`bool is_power_of_two(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,ky=`#include <tuple>\r
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
`,My=`def test_kth_bit(num, k)\r
  num & (1 << k) != 0\r
end\r
`,Ry=`func testKthBit(_ num: Int, _ k: Int) -> Bool {
    return (num & (1 << k)) != 0
}
`,Dy=`def set_kth_bit(num, k)\r
  num | (1 << k)\r
end\r
`,Ly=`func setKthBit(_ num: Int, _ k: Int) -> Int {
    return num | (1 << k)
}
`,zy=`def clear_kth_bit(num, k)\r
  num & ~(1 << k)\r
end\r
`,Cy=`func clearKthBit(_ num: Int, _ k: Int) -> Int {
    return num & ~(1 << k)
}
`,By=`def toggle_kth_bit(num, k)\r
  num ^ (1 << k)\r
end\r
`,Uy=`func toggleKthBit(_ num: Int, _ k: Int) -> Int {
    return num ^ (1 << k)
}
`,Hy=`def get_rightmost_set_bit(num)\r
  num & -num\r
end\r
`,Iy=`func getRightmostSetBit(_ num: Int) -> Int {
    return num & -num
}
`,qy=`def count_set_bits(num)\r
  num.to_s(2).count('1')\r
end\r
`,Gy=`func countSetBits(_ num: Int) -> Int {
    return num.nonzeroBitCount
}
`,Yy=`def multiply_by_power_of_two(num, k)\r
  num << k\r
end\r
`,Ky=`func multiplyByPowerOfTwo(_ num: Int, _ k: Int) -> Int {
    return num << k
}
`,Vy=`def divide_by_power_of_two(num, k)\r
  num >> k\r
end\r
`,Qy=`func divideByPowerOfTwo(_ num: Int, _ k: Int) -> Int {
    return num >> k
}
`,Xy=`def is_power_of_two(num)\r
  (num & (num - 1)) == 0\r
end\r
`,Jy=`func isPowerOfTwo(_ num: Int) -> Bool {
    return num > 0 && (num & (num - 1)) == 0
}
`,Zy=`# in-memory swaps\r
# unnecessary for modern languages\r
def swap_variables(num1, num2)\r
  num1 ^= num2\r
  num2 ^= num1\r
  num1 ^= num2\r
\r
  return num1, num2\r
end\r
`,Fy=`func swapVariables(_ num1: inout Int, _ num2: inout Int) {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
}
`;function Py(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Bit Manipulation"}),a.jsx("section",{id:"bitmanipulation-test-kth-bit",children:a.jsxs(o,{title:"test kth-bit",children:[a.jsx(o.Tab,{code:Vx,language:"python"}),a.jsx(o.Tab,{code:ry,language:"javascript"}),a.jsx(o.Tab,{code:dy,language:"java"}),a.jsx(o.Tab,{code:yy,language:"cpp"}),a.jsx(o.Tab,{code:My,language:"ruby"}),a.jsx(o.Tab,{code:Ry,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-set-kth-bit",children:a.jsxs(o,{title:"set kth bit",children:[a.jsx(o.Tab,{code:Qx,language:"python"}),a.jsx(o.Tab,{code:ey,language:"javascript"}),a.jsx(o.Tab,{code:fy,language:"java"}),a.jsx(o.Tab,{code:Ty,language:"cpp"}),a.jsx(o.Tab,{code:Dy,language:"ruby"}),a.jsx(o.Tab,{code:Ly,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:a.jsxs(o,{title:"clear kth bit",children:[a.jsx(o.Tab,{code:Xx,language:"python"}),a.jsx(o.Tab,{code:ty,language:"javascript"}),a.jsx(o.Tab,{code:hy,language:"java"}),a.jsx(o.Tab,{code:Sy,language:"cpp"}),a.jsx(o.Tab,{code:zy,language:"ruby"}),a.jsx(o.Tab,{code:Cy,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:a.jsxs(o,{title:"toggle kth bit",children:[a.jsx(o.Tab,{code:Jx,language:"python"}),a.jsx(o.Tab,{code:ay,language:"javascript"}),a.jsx(o.Tab,{code:gy,language:"java"}),a.jsx(o.Tab,{code:jy,language:"cpp"}),a.jsx(o.Tab,{code:By,language:"ruby"}),a.jsx(o.Tab,{code:Uy,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:a.jsxs(o,{title:"get rightmost bit",children:[a.jsx(o.Tab,{code:Zx,language:"python"}),a.jsx(o.Tab,{code:iy,language:"javascript"}),a.jsx(o.Tab,{code:py,language:"java"}),a.jsx(o.Tab,{code:Ny,language:"cpp"}),a.jsx(o.Tab,{code:Hy,language:"ruby"}),a.jsx(o.Tab,{code:Iy,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-count-set-bits",children:a.jsxs(o,{title:"count set bits",children:[a.jsx(o.Tab,{code:Fx,language:"python"}),a.jsx(o.Tab,{code:ly,language:"javascript"}),a.jsx(o.Tab,{code:my,language:"java"}),a.jsx(o.Tab,{code:Ey,language:"cpp"}),a.jsx(o.Tab,{code:qy,language:"ruby"}),a.jsx(o.Tab,{code:Gy,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:a.jsxs(o,{title:"multiply by 2^k",children:[a.jsx(o.Tab,{code:Px,language:"python"}),a.jsx(o.Tab,{code:sy,language:"javascript"}),a.jsx(o.Tab,{code:by,language:"java"}),a.jsx(o.Tab,{code:Ay,language:"cpp"}),a.jsx(o.Tab,{code:Yy,language:"ruby"}),a.jsx(o.Tab,{code:Ky,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:a.jsxs(o,{title:"divide by 2^k",children:[a.jsx(o.Tab,{code:Wx,language:"python"}),a.jsx(o.Tab,{code:oy,language:"javascript"}),a.jsx(o.Tab,{code:vy,language:"java"}),a.jsx(o.Tab,{code:wy,language:"cpp"}),a.jsx(o.Tab,{code:Vy,language:"ruby"}),a.jsx(o.Tab,{code:Qy,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-check-power-of-two",children:a.jsxs(o,{title:"check if number is power of 2",children:[a.jsx(o.Tab,{code:$x,language:"python"}),a.jsx(o.Tab,{code:cy,language:"javascript"}),a.jsx(o.Tab,{code:_y,language:"java"}),a.jsx(o.Tab,{code:Oy,language:"cpp"}),a.jsx(o.Tab,{code:Xy,language:"ruby"}),a.jsx(o.Tab,{code:Jy,language:"swift"})]})}),a.jsx("section",{id:"bitmanipulation-swap-variables",children:a.jsxs(o,{title:"swap two variables",children:[a.jsx(o.Tab,{code:ny,language:"python"}),a.jsx(o.Tab,{code:uy,language:"javascript"}),a.jsx(o.Tab,{code:xy,language:"java"}),a.jsx(o.Tab,{code:ky,language:"cpp"}),a.jsx(o.Tab,{code:Zy,language:"ruby"}),a.jsx(o.Tab,{code:Fy,language:"swift"})]})})]})}const Wy=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    create_matrix = [[0 for _ in range(c)] for _ in range(r)]\r
    copy_matrix = [row[:] for row in matrix]\r
`,$y=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    main_diagonal = [matrix[i][i] for i in range(min(r, c))]\r
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]\r
`,nT=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    transpose_tuple = zip(*matrix)\r
    transpose = [list(row) for row in transpose_tuple]\r
    rotate_left = transpose[::-1]\r
    rotate_right = [row[::-1] for row in transpose]\r
`,rT=`const fn = (matrix) => {\r
    const r = matrix.length;\r
    const c = matrix[0].length;\r
\r
    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))\r
    const copyMatrix = matrix.map(row => [...row])\r
}\r
`,eT=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])\r
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])\r
}\r
`,tT=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))\r
    const transpose = transposeTuple.map(row => [...row])\r
    const rotateLeft = transpose.reverse()\r
    const rotateRight = transpose.map(row => row.reverse())\r
}\r
`,aT=`import java.util.ArrayList;\r
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
`,iT=`import java.util.ArrayList;\r
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
`,lT=`import java.util.ArrayList;\r
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
`,sT=`#include <vector>\r
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
`,oT=`#include <vector>\r
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
`,cT=`#include <vector>\r
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
`,uT=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  create_matrix = Array.new(r) { Array.new(c, 0) }\r
  copy_matrix = matrix.map(&:dup)\r
end\r
`,dT=`func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count

    let createMatrix = Array(repeating: Array(repeating: 0, count: c), count: r)
    let copyMatrix = matrix.map { $0 }
}
`,fT=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  main_diagonal = (0...[r, c].min).map { |i| matrix[i][i] }\r
  anti_diagonal = (0...[r, c].min).map { |i| matrix[i][-i - 1] }\r
end\r
`,hT=`func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count
    let limit = min(r, c)

    var mainDiagonal = [Int]()
    var antiDiagonal = [Int]()

    for i in 0..<limit {
        mainDiagonal.append(matrix[i][i])
        antiDiagonal.append(matrix[i][c - 1 - i])
    }
}
`,gT=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  transpose = matrix[0].zip(*matrix[1..-1])\r
  rotate_left = transpose.reverse\r
  rotate_right = transpose.map(&:reverse)\r
end\r
`,pT=`func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count

    var transpose = Array(repeating: Array(repeating: 0, count: r), count: c)
    for i in 0..<r {
        for j in 0..<c {
            transpose[j][i] = matrix[i][j]
        }
    }

    let rotateLeft = transpose.reversed()
    let rotateRight = transpose.map { $0.reversed() }
}
`;function mT(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Matrix"}),a.jsx("section",{id:"matrix-create-copy",children:a.jsxs(o,{title:"create / copy",children:[a.jsx(o.Tab,{code:Wy,language:"python"}),a.jsx(o.Tab,{code:rT,language:"javascript"}),a.jsx(o.Tab,{code:aT,language:"java"}),a.jsx(o.Tab,{code:sT,language:"cpp"}),a.jsx(o.Tab,{code:uT,language:"ruby"}),a.jsx(o.Tab,{code:dT,language:"swift"})]})}),a.jsx("section",{id:"matrix-diagonals",children:a.jsxs(o,{title:"diagonals / anti-diagonals",children:[a.jsx(o.Tab,{code:$y,language:"python"}),a.jsx(o.Tab,{code:eT,language:"javascript"}),a.jsx(o.Tab,{code:iT,language:"java"}),a.jsx(o.Tab,{code:oT,language:"cpp"}),a.jsx(o.Tab,{code:fT,language:"ruby"}),a.jsx(o.Tab,{code:hT,language:"swift"})]})}),a.jsx("section",{id:"matrix-rotate-transpose",children:a.jsxs(o,{title:"rotate / transpose",children:[a.jsx(o.Tab,{code:nT,language:"python"}),a.jsx(o.Tab,{code:tT,language:"javascript"}),a.jsx(o.Tab,{code:lT,language:"java"}),a.jsx(o.Tab,{code:cT,language:"cpp"}),a.jsx(o.Tab,{code:gT,language:"ruby"}),a.jsx(o.Tab,{code:pT,language:"swift"})]})})]})}const bT=`from typing import Any\r
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
`,vT=`from typing import Any\r
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
`,_T=`from typing import Any\r
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
`,xT=`from typing import Any\r
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
`,yT=`from typing import Any\r
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
`,TT=`class Graph:\r
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
`,ST=`from typing import Any\r
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
`,jT=`class TrieNode:\r
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
`,NT=`class UnionFind:\r
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
`,ET=`class UnionFind:\r
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
`,AT=`class Array {\r
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
`,wT=`class TreeNode {\r
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
`,OT=`class TreeNode {\r
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
`,kT=`class ListNode {\r
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
`,MT=`class ListNode {\r
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
`,RT=`class Graph {\r
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
`,DT=`class HashMap {\r
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
`,LT=`class TrieNode {\r
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
`,zT=`class UnionFind {\r
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
`,CT=`class UnionFind {\r
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
`,BT=`public class Array<T> {\r
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
`,UT=`public class TreeNode<T> {\r
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
`,HT=`public class TreeNode<T extends Comparable<T>> {\r
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
`,IT=`class ListNode {\r
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
`,qT=`public class ListNode<T> {\r
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
`,GT=`import java.util.ArrayList;\r
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
`,YT=`public class HashMap {\r
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
`,KT=`import java.util.ArrayList;\r
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
`,VT=`import java.util.ArrayList;\r
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
`,QT=`import java.util.ArrayList;\r
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
`,XT=`#include <iostream>\r
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
`,JT=`#include <iostream>\r
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
`,ZT=`#include <iostream>\r
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
`,FT=`#include <iostream>\r
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
`,PT=`#include <iostream>\r
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
`,WT=`#include <iostream>\r
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
`,$T=`#include <iostream>\r
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
`,nS=`#include <iostream>\r
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
`,rS=`#include <iostream>\r
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
`,eS=`#include <iostream>\r
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
`,tS=`\r
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
`,aS=`class Array<T> {
    var size: Int
    var data: [T?]

    init(size: Int) {
        self.size = size
        self.data = Array(repeating: nil, count: size)
    }

    subscript(index: Int) -> T? {
        get { return data[index] }
        set { data[index] = newValue }
    }

    var count: Int { return data.count }
}
`,iS=`class TreeNode\r
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
`,lS=`class TreeNode<T> {
    var data: T
    var left: TreeNode?
    var right: TreeNode?
    init(_ data: T) { self.data = data }
}

class BinaryTree<T> {
    var root: TreeNode<T>?

    func insert(_ data: T) {
        if let root = root {
            _ = insertNode(root, data)
        } else {
            root = TreeNode(data)
        }
    }

    private func insertNode(_ node: TreeNode<T>?, _ data: T) -> TreeNode<T> {
        guard let node = node else { return TreeNode(data) }
        
        if node.left == nil {
            node.left = TreeNode(data)
        } else if node.right == nil {
            node.right = TreeNode(data)
        } else {
            node.left = insertNode(node.left, data)
        }
        return node
    }
}
`,sS=`class TreeNode\r
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
`,oS=`class TreeNode<T: Comparable> {
    var data: T
    var left: TreeNode?
    var right: TreeNode?
    init(_ data: T) { self.data = data }
}

class BinarySearchTree<T: Comparable> {
    var root: TreeNode<T>?

    func insert(_ data: T) {
        if let root = root {
            insertNode(root, data)
        } else {
            root = TreeNode(data)
        }
    }

    private func insertNode(_ node: TreeNode<T>, _ data: T) {
        if data < node.data {
            if let left = node.left {
                insertNode(left, data)
            } else {
                node.left = TreeNode(data)
            }
        } else {
            if let right = node.right {
                insertNode(right, data)
            } else {
                node.right = TreeNode(data)
            }
        }
    }
}
`,cS=`class ListNode\r
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
`,uS=`class ListNode<T: Equatable> {
    var data: T
    var next: ListNode?
    init(_ data: T) { self.data = data }
}

class LinkedList<T: Equatable> {
    var head: ListNode<T>?

    func append(_ data: T) {
        guard let head = head else {
            self.head = ListNode(data)
            return
        }
        var curr = head
        while let next = curr.next { curr = next }
        curr.next = ListNode(data)
    }

    func delete(_ data: T) {
        if head?.data == data {
            head = head?.next
            return
        }
        var prev: ListNode<T>? = nil
        var curr = head
        while let node = curr {
            if node.data == data {
                prev?.next = node.next
                return
            }
            prev = node
            curr = node.next
        }
    }

    func reverse() {
        var prev: ListNode<T>? = nil
        var curr = head

        while let node = curr {
            let nxt = node.next
            node.next = prev
            prev = node
            curr = nxt
        }
        head = prev
    }
}
`,dS=`class ListNode\r
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
`,fS=`class ListNode<T: Equatable> {
    var data: T
    var prev: ListNode?
    var next: ListNode?
    init(_ data: T) { self.data = data }
}

class DoublyLinkedList<T: Equatable> {
    var head: ListNode<T>?

    func append(_ data: T) {
        let newNode = ListNode(data)
        guard let head = head else {
            self.head = newNode
            return
        }
        var curr = head
        while let next = curr.next { curr = next }
        curr.next = newNode
        newNode.prev = curr
    }

    func delete(_ data: T) {
        var curr = head
        while let node = curr {
            if node.data == data {
                node.prev?.next = node.next
                node.next?.prev = node.prev
                if node === head { head = node.next }
                return
            }
            curr = node.next
        }
    }

    func reverse() {
        var curr = head
        var prevNode: ListNode<T>? = nil

        while let node = curr {
            let nextNode = node.next
            node.next = prevNode
            node.prev = nextNode
            prevNode = node
            curr = nextNode
        }
        head = prevNode
    }
}
`,hS=`class Graph\r
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
`,gS=`class Graph {
    var graph = [String: [String]]()

    func addVertex(_ vertex: String) {
        if graph[vertex] == nil {
            graph[vertex] = []
        }
    }

    func addEdge(_ a: String, _ b: String) {
        addVertex(a)
        addVertex(b)
        graph[a]?.append(b)
        graph[b]?.append(a)
    }

    func getNeighbors(_ vertex: String) -> [String] {
        return graph[vertex] ?? []
    }
}
`,pS=`class HashMap\r
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
`,mS=`class HashMap<T> {
    let size = 100000
    var bucket: [T?]

    init() {
        self.bucket = Array(repeating: nil, count: size)
    }

    private func hash(_ key: Int) -> Int {
        return abs(key) % size
    }

    func set(_ key: Int, _ value: T) {
        bucket[hash(key)] = value
    }

    func get(_ key: Int) -> T? {
        return bucket[hash(key)]
    }

    func remove(_ key: Int) {
        bucket[hash(key)] = nil
    }
}
`,bS=`class TrieNode\r
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
`,vS=`class TrieNode {
    var children = [Character: TrieNode]()
    var isWord = false
}

class Trie {
    let root = TrieNode()

    func insert(_ word: String) {
        var node = root
        for char in word {
            if node.children[char] == nil {
                node.children[char] = TrieNode()
            }
            node = node.children[char]!
        }
        node.isWord = true
    }

    func search(_ word: String) -> Bool {
        var node = root
        for char in word {
            guard let nextNode = node.children[char] else { return false }
            node = nextNode
        }
        return node.isWord
    }

    func startsWith(_ prefix: String) -> Bool {
        var node = root
        for char in prefix {
            guard let nextNode = node.children[char] else { return false }
            node = nextNode
        }
        return true
    }
}
`,_S=`class UnionFind\r
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
`,xS=`class UnionFind {
    var root: [Int]

    init(_ n: Int) {
        root = Array(0..<n)
    }

    func find(_ a: Int) -> Int {
        return a == root[a] ? a : find(root[a])
    }

    func union(_ a: Int, _ b: Int) {
        root[find(a)] = find(b)
    }

    func connected(_ a: Int, _ b: Int) -> Bool {
        return find(a) == find(b)
    }
}
`,yS=`class UnionFind\r
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
`,TS=`class UnionFind {
    var root: [Int]
    var rank: [Int]

    init(_ n: Int) {
        root = Array(0..<n)
        rank = Array(repeating: 1, count: n)
    }

    func find(_ a: Int) -> Int {
        if a == root[a] { return a }
        root[a] = find(root[a])
        return root[a]
    }

    func union(_ a: Int, _ b: Int) {
        let rootA = find(a)
        let rootB = find(b)

        if rootA != rootB {
            if rank[rootA] < rank[rootB] {
                root[rootA] = rootB
            } else if rank[rootA] > rank[rootB] {
                root[rootB] = rootA
            } else {
                root[rootB] = rootA
                rank[rootA] += 1
            }
        }
    }

    func connected(_ a: Int, _ b: Int) -> Bool {
        return find(a) == find(b)
    }
}
`;function SS(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Data Structures"}),a.jsx("section",{id:"ds-array",children:a.jsxs(o,{title:"array",children:[a.jsx(o.Tab,{code:bT,language:"python"}),a.jsx(o.Tab,{code:AT,language:"javascript"}),a.jsx(o.Tab,{code:BT,language:"java"}),a.jsx(o.Tab,{code:XT,language:"cpp"}),a.jsx(o.Tab,{code:tS,language:"ruby"}),a.jsx(o.Tab,{code:aS,language:"swift"})]})}),a.jsx("section",{id:"ds-hash-map",children:a.jsxs(o,{title:"hash map",children:[a.jsx(o.Tab,{code:ST,language:"python"}),a.jsx(o.Tab,{code:DT,language:"javascript"}),a.jsx(o.Tab,{code:YT,language:"java"}),a.jsx(o.Tab,{code:$T,language:"cpp"}),a.jsx(o.Tab,{code:pS,language:"ruby"}),a.jsx(o.Tab,{code:mS,language:"swift"})]})}),a.jsx("section",{id:"ds-linked-list",children:a.jsxs(o,{title:"linked list",children:[a.jsx(o.Tab,{code:xT,language:"python"}),a.jsx(o.Tab,{code:kT,language:"javascript"}),a.jsx(o.Tab,{code:IT,language:"java"}),a.jsx(o.Tab,{code:FT,language:"cpp"}),a.jsx(o.Tab,{code:cS,language:"ruby"}),a.jsx(o.Tab,{code:uS,language:"swift"})]})}),a.jsx("section",{id:"ds-doubly-linked-list",children:a.jsxs(o,{title:"doubly linked list",children:[a.jsx(o.Tab,{code:yT,language:"python"}),a.jsx(o.Tab,{code:MT,language:"javascript"}),a.jsx(o.Tab,{code:qT,language:"java"}),a.jsx(o.Tab,{code:PT,language:"cpp"}),a.jsx(o.Tab,{code:dS,language:"ruby"}),a.jsx(o.Tab,{code:fS,language:"swift"})]})}),a.jsx("section",{id:"ds-binary-tree",children:a.jsxs(o,{title:"binary tree",children:[a.jsx(o.Tab,{code:vT,language:"python"}),a.jsx(o.Tab,{code:wT,language:"javascript"}),a.jsx(o.Tab,{code:UT,language:"java"}),a.jsx(o.Tab,{code:JT,language:"cpp"}),a.jsx(o.Tab,{code:iS,language:"ruby"}),a.jsx(o.Tab,{code:lS,language:"swift"})]})}),a.jsx("section",{id:"ds-binary-search-tree",children:a.jsxs(o,{title:"binary search tree",children:[a.jsx(o.Tab,{code:_T,language:"python"}),a.jsx(o.Tab,{code:OT,language:"javascript"}),a.jsx(o.Tab,{code:HT,language:"java"}),a.jsx(o.Tab,{code:ZT,language:"cpp"}),a.jsx(o.Tab,{code:sS,language:"ruby"}),a.jsx(o.Tab,{code:oS,language:"swift"})]})}),a.jsx("section",{id:"ds-graph",children:a.jsxs(o,{title:"graph",children:[a.jsx(o.Tab,{code:TT,language:"python"}),a.jsx(o.Tab,{code:RT,language:"javascript"}),a.jsx(o.Tab,{code:GT,language:"java"}),a.jsx(o.Tab,{code:WT,language:"cpp"}),a.jsx(o.Tab,{code:hS,language:"ruby"}),a.jsx(o.Tab,{code:gS,language:"swift"})]})}),a.jsx("section",{id:"ds-union-find",children:a.jsxs(o,{title:"union find",children:[a.jsx(o.Tab,{code:NT,language:"python"}),a.jsx(o.Tab,{code:zT,language:"javascript"}),a.jsx(o.Tab,{code:VT,language:"java"}),a.jsx(o.Tab,{code:rS,language:"cpp"}),a.jsx(o.Tab,{code:_S,language:"ruby"}),a.jsx(o.Tab,{code:xS,language:"swift"})]})}),a.jsx("section",{id:"ds-union-find-optimized",children:a.jsxs(o,{title:"union find optimized",children:[a.jsx(o.Tab,{code:ET,language:"python"}),a.jsx(o.Tab,{code:CT,language:"javascript"}),a.jsx(o.Tab,{code:QT,language:"java"}),a.jsx(o.Tab,{code:eS,language:"cpp"}),a.jsx(o.Tab,{code:yS,language:"ruby"}),a.jsx(o.Tab,{code:TS,language:"swift"})]})}),a.jsx("section",{id:"ds-trie",children:a.jsxs(o,{title:"trie",children:[a.jsx(o.Tab,{code:jT,language:"python"}),a.jsx(o.Tab,{code:LT,language:"javascript"}),a.jsx(o.Tab,{code:KT,language:"java"}),a.jsx(o.Tab,{code:nS,language:"cpp"}),a.jsx(o.Tab,{code:bS,language:"ruby"}),a.jsx(o.Tab,{code:vS,language:"swift"})]})})]})}const jS=`import random\r
\r
\r
def bogo_sort(arr: list) -> None:\r
    target = sorted(arr)\r
\r
    while arr != target:\r
        random.shuffle(arr)\r
`,NS=`def bubble_sort(arr: list) -> None:\r
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
`,ES=`def bucket_sort(arr: list) -> list:\r
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
`,AS=`def counting_sort(arr: list) -> list:\r
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
`,wS=`def cube_sort(arr: list, processors: int) -> None:\r
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
`,OS=`def heap_sort(arr: list) -> list:\r
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
`,kS=`def insertion_sort(arr: list) -> None:\r
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
`,MS=`def merge_sort(arr: list) -> list:\r
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
`,RS=`def pancake_sort(arr: list) -> None:\r
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
`,DS=`def quick_sort(arr: list) -> list:\r
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
`,LS=`def radix_sort(arr: list) -> None:\r
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
`,zS=`def selection_sort(arr: list) -> None:\r
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
`,CS=`def shell_sort(arr: list) -> None:\r
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
`,BS=`from threading import Thread\r
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
`,US=`def tim_sort(arr: list) -> list:\r
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
`,HS=`const bogoSort = (arr) => {\r
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
`,IS=`const bubbleSort = (arr) => {\r
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
`,qS=`const bucketSort = (arr) => {\r
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
`,GS=`const countingSort = (arr) => {\r
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
`,YS=`const cubeSort = (arr, processors) => {\r
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
`,KS=`const heapSort = (arr) => {\r
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
`,VS=`const insertionSort = (arr) => {\r
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
`,QS=`const mergeSort = (arr) => {\r
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
`,XS=`const pancakeSort = (arr) => {\r
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
`,JS=`const quickSort = (arr) => {\r
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
`,ZS=`const radixSort = (arr) => {\r
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
`,FS=`const selectionSort = (arr) => {\r
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
`,PS=`const shellSort = (arr) => {\r
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
`,WS=`const sleepSort = (arr) => {\r
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
`,$S=`const timSort = (arr) => {\r
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
`,o2=`public static void pancakeSort(int[] arr) {\r
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
`,c2=`import java.util.ArrayList;\r
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
`,v2=`#include <vector>\r
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
`,_2=`#include <vector>\r
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
`,x2=`#include <vector>\r
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
`,y2=`#include <vector>\r
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
`,T2=`#include <vector>\r
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
`,S2=`#include <vector>\r
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
`,N2=`#include <vector>\r
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
`,E2=`#include <vector>\r
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
`,A2=`#include <vector>\r
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
`,w2=`#include <chrono>\r
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
`,M2=`func bogoSort(_ arr: inout [Int]) {
    let target = arr.sorted()

    while arr != target {
        arr.shuffle() // Swift 4.2+
    }
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
`,D2=`func bubbleSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in 0..<n {
        var swapped = false

        for j in 0..<(n - i - 1) {
            if arr[j] > arr[j + 1] {
                arr.swapAt(j, j + 1)
                swapped = true
            }
        }

        if !swapped {
            break
        }
    }
}
`,L2=`def bucket_sort(arr)\r
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
`,z2=`func bucketSort(_ arr: [Double]) -> [Double] {
    if arr.isEmpty { return [] }
    let numBuckets = 10
    let minNum = arr.min()!
    let maxNum = arr.max()!
    let bucketSize = (maxNum - minNum) / Double(numBuckets)
    var buckets = Array(repeating: [Double](), count: numBuckets)

    for num in arr {
        let index = min(Int((num - minNum) / bucketSize), numBuckets - 1)
        buckets[index].append(num)
    }

    return buckets.flatMap { $0.sorted() }
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
`,B2=`func countingSort(_ arr: [Int]) -> [Int] {
    guard !arr.isEmpty else { return [] }
    let maxNum = arr.max()!
    let minNum = arr.min()!
    let countRange = maxNum - minNum + 1
    var count = Array(repeating: 0, count: countRange)
    var output = Array(repeating: 0, count: arr.count)

    for num in arr {
        count[num - minNum] += 1
    }

    for i in 1..<countRange {
        count[i] += count[i - 1]
    }

    for num in arr.reversed() {
        output[count[num - minNum] - 1] = num
        count[num - minNum] -= 1
    }

    return output
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
`,H2=`func cubeSort(_ arr: inout [Int], _ processors: Int) {
    // Advanced dimensional merge sort algorithm
    // Requires concurrent processing arrays, naive representation here
    arr.sort() // Placeholder
}
`,I2=`def heap_sort(arr)\r
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
`,q2=`func heapSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in stride(from: n / 2 - 1, through: 0, by: -1) {
        heapify(&arr, n, i)
    }
    for i in stride(from: n - 1, through: 1, by: -1) {
        arr.swapAt(i, 0)
        heapify(&arr, i, 0)
    }
}

func heapify(_ arr: inout [Int], _ n: Int, _ i: Int) {
    var largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if left < n && arr[left] > arr[largest] { largest = left }
    if right < n && arr[right] > arr[largest] { largest = right }

    if largest != i {
        arr.swapAt(i, largest)
        heapify(&arr, n, largest)
    }
}
`,G2=`def insertion_sort(arr)\r
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
`,Y2=`func insertionSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in 1..<n {
        let key = arr[i]
        var j = i

        while j > 0 && key < arr[j - 1] {
            arr[j] = arr[j - 1]
            j -= 1
        }

        arr[j] = key
    }
}
`,K2=`def merge_sort(arr)\r
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
`,V2=`func mergeSort(_ arr: [Int]) -> [Int] {
    let n = arr.count
    if n <= 1 { return arr }

    let mid = n / 2
    let left = mergeSort(Array(arr[0..<mid]))
    let right = mergeSort(Array(arr[mid..<n]))

    return merge(left, right)
}

func merge(_ left: [Int], _ right: [Int]) -> [Int] {
    var output = [Int]()
    var l = 0, r = 0

    while l < left.count && r < right.count {
        if left[l] <= right[r] {
            output.append(left[l])
            l += 1
        } else {
            output.append(right[r])
            r += 1
        }
    }
    output.append(contentsOf: left[l...])
    output.append(contentsOf: right[r...])

    return output
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
`,X2=`func pancakeSort(_ arr: inout [Int]) {
    let n = arr.count

    for size in stride(from: n, to: 1, by: -1) {
        let maxIdx = findMaxIndex(arr, size)

        if maxIdx != size - 1 {
            flip(&arr, maxIdx)
            flip(&arr, size - 1)
        }
    }
}

func flip(_ arr: inout [Int], _ i: Int) {
    var left = 0
    var right = i

    while left < right {
        arr.swapAt(left, right)
        left += 1
        right -= 1
    }
}

func findMaxIndex(_ arr: [Int], _ n: Int) -> Int {
    var maxIdx = 0
    for i in 0..<n {
        if arr[i] > arr[maxIdx] { maxIdx = i }
    }
    return maxIdx
}
`,J2=`def quick_sort(arr)\r
  n = arr.size\r
  return arr if n <= 1\r
\r
  pivot = arr[n / 2]\r
  left  = arr.select { |x| x < pivot }\r
  right = arr.select { |x| x > pivot }\r
\r
  quick_sort(left) + [pivot] + quick_sort(right)\r
end\r
`,Z2=`func quickSort(_ arr: [Int]) -> [Int] {
    if arr.count <= 1 { return arr }

    let pivot = arr[arr.count / 2]
    let left = arr.filter { $0 < pivot }
    let right = arr.filter { $0 > pivot }
    let equals = arr.filter { $0 == pivot }

    return quickSort(left) + equals + quickSort(right)
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
`,P2=`func radixSort(_ arr: inout [Int]) {
    guard let maxVal = arr.max() else { return }
    var exp = 1

    while maxVal / exp > 0 {
        countingSortRadix(&arr, exp)
        exp *= 10
    }
}

func countingSortRadix(_ arr: inout [Int], _ exp: Int) {
    let n = arr.count
    var output = Array(repeating: 0, count: n)
    var count = Array(repeating: 0, count: 10)

    for i in 0..<n {
        let idx = (arr[i] / exp) % 10
        count[idx] += 1
    }

    for i in 1..<10 {
        count[i] += count[i - 1]
    }

    for i in stride(from: n - 1, through: 0, by: -1) {
        let idx = (arr[i] / exp) % 10
        output[count[idx] - 1] = arr[i]
        count[idx] -= 1
    }

    for i in 0..<n {
        arr[i] = output[i]
    }
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
`,$2=`func selectionSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in 0..<n {
        var minI = i

        for j in (i + 1)..<n {
            if arr[j] < arr[minI] {
                minI = j
            }
        }

        if minI != i {
            arr.swapAt(i, minI)
        }
    }
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
`,rj=`func shellSort(_ arr: inout [Int]) {
    let n = arr.count
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1]

    for gap in gaps {
        if gap >= n { continue }
        for i in gap..<n {
            let tmp = arr[i]
            var j = i

            while j >= gap && arr[j - gap] > tmp {
                arr[j] = arr[j - gap]
                j -= gap
            }
            if j != i {
                arr[j] = tmp
            }
        }
    }
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
`,tj=`import Foundation

func sleepSort(_ arr: [Double]) {
    let group = DispatchGroup()
    var output = [Double]()
    var lock = os_unfair_lock()

    for num in arr {
        group.enter()
        DispatchQueue.global().asyncAfter(deadline: .now() + num / 1000.0) {
            os_unfair_lock_lock(&lock)
            output.append(num)
            os_unfair_lock_unlock(&lock)
            group.leave()
        }
    }

    group.wait()
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
`,ij=`func timSort(_ arr: inout [Int]) {
    let n = arr.count
    let minRun = 32

    for start in stride(from: 0, to: n, by: minRun) {
        let end = min(start + minRun - 1, n - 1)
        insertionSortTim(&arr, start, end)
    }

    var size = minRun

    while size < n {
        for left in stride(from: 0, to: n, by: 2 * size) {
            let mid = min(n - 1, left + size - 1)
            let right = min(left + 2 * size - 1, n - 1)
            
            if mid < right {
                let merged = mergeTim(Array(arr[left...mid]), Array(arr[(mid + 1)...right]))
                for (index, val) in merged.enumerated() {
                    arr[left + index] = val
                }
            }
        }
        size *= 2
    }
}

func insertionSortTim(_ arr: inout [Int], _ left: Int, _ right: Int) {
    for i in (left + 1)...right {
        let key = arr[i]
        var j = i

        while j > left && arr[j - 1] > key {
            arr[j] = arr[j - 1]
            j -= 1
        }
        arr[j] = key
    }
}

func mergeTim(_ left: [Int], _ right: [Int]) -> [Int] {
    var output = [Int]()
    var l = 0, r = 0

    while l < left.count && r < right.count {
        if left[l] <= right[r] {
            output.append(left[l])
            l += 1
        } else {
            output.append(right[r])
            r += 1
        }
    }
    output.append(contentsOf: left[l...])
    output.append(contentsOf: right[r...])
    return output
}
`;function lj(){return a.jsxs("div",{className:In.container,children:[a.jsx("h2",{className:In.sectionHeader,children:"Sorting Algorithms"}),a.jsx("section",{id:"sort-bubble",children:a.jsxs(o,{title:"bubble sort",children:[a.jsx(o.Tab,{code:NS,language:"python"}),a.jsx(o.Tab,{code:IS,language:"javascript"}),a.jsx(o.Tab,{code:r2,language:"java"}),a.jsx(o.Tab,{code:m2,language:"cpp"}),a.jsx(o.Tab,{code:R2,language:"ruby"}),a.jsx(o.Tab,{code:D2,language:"swift"})]})}),a.jsx("section",{id:"sort-selection",children:a.jsxs(o,{title:"selection sort",children:[a.jsx(o.Tab,{code:zS,language:"python"}),a.jsx(o.Tab,{code:FS,language:"javascript"}),a.jsx(o.Tab,{code:d2,language:"java"}),a.jsx(o.Tab,{code:E2,language:"cpp"}),a.jsx(o.Tab,{code:W2,language:"ruby"}),a.jsx(o.Tab,{code:$2,language:"swift"})]})}),a.jsx("section",{id:"sort-insertion",children:a.jsxs(o,{title:"insertion sort",children:[a.jsx(o.Tab,{code:kS,language:"python"}),a.jsx(o.Tab,{code:VS,language:"javascript"}),a.jsx(o.Tab,{code:l2,language:"java"}),a.jsx(o.Tab,{code:y2,language:"cpp"}),a.jsx(o.Tab,{code:G2,language:"ruby"}),a.jsx(o.Tab,{code:Y2,language:"swift"})]})}),a.jsx("section",{id:"sort-shell",children:a.jsxs(o,{title:"shell sort",children:[a.jsx(o.Tab,{code:CS,language:"python"}),a.jsx(o.Tab,{code:PS,language:"javascript"}),a.jsx(o.Tab,{code:f2,language:"java"}),a.jsx(o.Tab,{code:A2,language:"cpp"}),a.jsx(o.Tab,{code:nj,language:"ruby"}),a.jsx(o.Tab,{code:rj,language:"swift"})]})}),a.jsx("section",{id:"sort-merge",children:a.jsxs(o,{title:"merge sort",children:[a.jsx(o.Tab,{code:MS,language:"python"}),a.jsx(o.Tab,{code:QS,language:"javascript"}),a.jsx(o.Tab,{code:s2,language:"java"}),a.jsx(o.Tab,{code:T2,language:"cpp"}),a.jsx(o.Tab,{code:K2,language:"ruby"}),a.jsx(o.Tab,{code:V2,language:"swift"})]})}),a.jsx("section",{id:"sort-quick",children:a.jsxs(o,{title:"quick sort",children:[a.jsx(o.Tab,{code:DS,language:"python"}),a.jsx(o.Tab,{code:JS,language:"javascript"}),a.jsx(o.Tab,{code:c2,language:"java"}),a.jsx(o.Tab,{code:j2,language:"cpp"}),a.jsx(o.Tab,{code:J2,language:"ruby"}),a.jsx(o.Tab,{code:Z2,language:"swift"})]})}),a.jsx("section",{id:"sort-tim",children:a.jsxs(o,{title:"timsort",children:[a.jsx(o.Tab,{code:US,language:"python"}),a.jsx(o.Tab,{code:$S,language:"javascript"}),a.jsx(o.Tab,{code:g2,language:"java"}),a.jsx(o.Tab,{code:O2,language:"cpp"}),a.jsx(o.Tab,{code:aj,language:"ruby"}),a.jsx(o.Tab,{code:ij,language:"swift"})]})}),a.jsx("section",{id:"sort-heap",children:a.jsxs(o,{title:"heap sort",children:[a.jsx(o.Tab,{code:OS,language:"python"}),a.jsx(o.Tab,{code:KS,language:"javascript"}),a.jsx(o.Tab,{code:i2,language:"java"}),a.jsx(o.Tab,{code:x2,language:"cpp"}),a.jsx(o.Tab,{code:I2,language:"ruby"}),a.jsx(o.Tab,{code:q2,language:"swift"})]})}),a.jsx("section",{id:"sort-counting",children:a.jsxs(o,{title:"counting sort",children:[a.jsx(o.Tab,{code:AS,language:"python"}),a.jsx(o.Tab,{code:GS,language:"javascript"}),a.jsx(o.Tab,{code:t2,language:"java"}),a.jsx(o.Tab,{code:v2,language:"cpp"}),a.jsx(o.Tab,{code:C2,language:"ruby"}),a.jsx(o.Tab,{code:B2,language:"swift"})]})}),a.jsx("section",{id:"sort-bucket",children:a.jsxs(o,{title:"bucket sort",children:[a.jsx(o.Tab,{code:ES,language:"python"}),a.jsx(o.Tab,{code:qS,language:"javascript"}),a.jsx(o.Tab,{code:e2,language:"java"}),a.jsx(o.Tab,{code:b2,language:"cpp"}),a.jsx(o.Tab,{code:L2,language:"ruby"}),a.jsx(o.Tab,{code:z2,language:"swift"})]})}),a.jsx("section",{id:"sort-radix",children:a.jsxs(o,{title:"radix sort",children:[a.jsx(o.Tab,{code:LS,language:"python"}),a.jsx(o.Tab,{code:ZS,language:"javascript"}),a.jsx(o.Tab,{code:u2,language:"java"}),a.jsx(o.Tab,{code:N2,language:"cpp"}),a.jsx(o.Tab,{code:F2,language:"ruby"}),a.jsx(o.Tab,{code:P2,language:"swift"})]})}),a.jsx("section",{id:"sort-cube",children:a.jsxs(o,{title:"cubesort",children:[a.jsx(o.Tab,{code:wS,language:"python"}),a.jsx(o.Tab,{code:YS,language:"javascript"}),a.jsx(o.Tab,{code:a2,language:"java"}),a.jsx(o.Tab,{code:_2,language:"cpp"}),a.jsx(o.Tab,{code:U2,language:"ruby"}),a.jsx(o.Tab,{code:H2,language:"swift"})]})}),a.jsx("section",{id:"sort-bogo",children:a.jsxs(o,{title:"bogo sort",children:[a.jsx(o.Tab,{code:jS,language:"python"}),a.jsx(o.Tab,{code:HS,language:"javascript"}),a.jsx(o.Tab,{code:n2,language:"java"}),a.jsx(o.Tab,{code:p2,language:"cpp"}),a.jsx(o.Tab,{code:k2,language:"ruby"}),a.jsx(o.Tab,{code:M2,language:"swift"})]})}),a.jsx("section",{id:"sort-pancake",children:a.jsxs(o,{title:"pancake sort",children:[a.jsx(o.Tab,{code:RS,language:"python"}),a.jsx(o.Tab,{code:XS,language:"javascript"}),a.jsx(o.Tab,{code:o2,language:"java"}),a.jsx(o.Tab,{code:S2,language:"cpp"}),a.jsx(o.Tab,{code:Q2,language:"ruby"}),a.jsx(o.Tab,{code:X2,language:"swift"})]})}),a.jsx("section",{id:"sort-sleep",children:a.jsxs(o,{title:"sleep sort",children:[a.jsx(o.Tab,{code:BS,language:"python"}),a.jsx(o.Tab,{code:WS,language:"javascript"}),a.jsx(o.Tab,{code:h2,language:"java"}),a.jsx(o.Tab,{code:w2,language:"cpp"}),a.jsx(o.Tab,{code:ej,language:"ruby"}),a.jsx(o.Tab,{code:tj,language:"swift"})]})})]})}function sj(){const{isSidebarOpen:u}=Yc(),v=$r(Gh.main,!u&&Gh.sidebarHidden);return a.jsxs("main",{className:v,children:[a.jsx(v0,{}),a.jsx(z1,{}),a.jsx(J1,{}),a.jsx(sv,{}),a.jsx(xv,{}),a.jsx(Hv,{}),a.jsx(L_,{}),a.jsx(q_,{}),a.jsx(vx,{}),a.jsx(Nx,{}),a.jsx(Kx,{}),a.jsx(Py,{}),a.jsx(mT,{}),a.jsx(SS,{}),a.jsx(lj,{})]})}function oj(){return a.jsx(bs.StrictMode,{children:a.jsx(wm,{children:a.jsx(Em,{children:a.jsxs("div",{className:"App",children:[a.jsx(km,{}),a.jsx(n0,{}),a.jsx(sj,{})]})})})})}Nm.createRoot(document.getElementById("root")).render(a.jsx(oj,{}));
