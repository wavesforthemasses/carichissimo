import{S as T,m as U,o as Y,q as j,v as z,w as y,x as G,g,U as v,y as b,z as D,A as L,B as H,C as Z,P as $,D as J,b as q,E as V,R as Q,F as C,G as W,f as F,H as X,L as p,I as k,J as ee,K as re,M as ne,N as te}from"./runtime.BrgjWUEG.js";import{d as ae}from"./disclose-version.DvzMeEI0.js";function E(n,a=null,c){if(typeof n!="object"||n===null||T in n)return n;const P=U(n);if(P!==Y&&P!==j)return n;var u=new Map,o=z(n),h=y(0);o&&u.set("length",y(n.length));var w;return new Proxy(n,{defineProperty(f,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&H();var t=u.get(e);return t===void 0?(t=y(r.value),u.set(e,t)):b(t,E(r.value,w)),!0},deleteProperty(f,e){var r=u.get(e);if(r===void 0)e in f&&u.set(e,y(v));else{if(o&&typeof e=="string"){var t=u.get("length"),i=Number(e);Number.isInteger(i)&&i<t.v&&b(t,i)}b(r,v),K(h)}return!0},get(f,e,r){var d;if(e===T)return n;var t=u.get(e),i=e in f;if(t===void 0&&(!i||(d=D(f,e))!=null&&d.writable)&&(t=y(E(i?f[e]:v,w)),u.set(e,t)),t!==void 0){var s=g(t);return s===v?void 0:s}return Reflect.get(f,e,r)},getOwnPropertyDescriptor(f,e){var r=Reflect.getOwnPropertyDescriptor(f,e);if(r&&"value"in r){var t=u.get(e);t&&(r.value=g(t))}else if(r===void 0){var i=u.get(e),s=i==null?void 0:i.v;if(i!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(f,e){var s;if(e===T)return!0;var r=u.get(e),t=r!==void 0&&r.v!==v||Reflect.has(f,e);if(r!==void 0||L!==null&&(!t||(s=D(f,e))!=null&&s.writable)){r===void 0&&(r=y(t?E(f[e],w):v),u.set(e,r));var i=g(r);if(i===v)return!1}return t},set(f,e,r,t){var O;var i=u.get(e),s=e in f;if(o&&e==="length")for(var d=r;d<i.v;d+=1){var _=u.get(d+"");_!==void 0?b(_,v):d in f&&(_=y(v),u.set(d+"",_))}i===void 0?(!s||(O=D(f,e))!=null&&O.writable)&&(i=y(void 0),b(i,E(r,w)),u.set(e,i)):(s=i.v!==v,b(i,E(r,w)));var m=Reflect.getOwnPropertyDescriptor(f,e);if(m!=null&&m.set&&m.set.call(t,r),!s){if(o&&typeof e=="string"){var x=u.get("length"),I=Number(e);Number.isInteger(I)&&I>=x.v&&b(x,I+1)}K(h)}return!0},ownKeys(f){g(h);var e=Reflect.ownKeys(f).filter(i=>{var s=u.get(i);return s===void 0||s.v!==v});for(var[r,t]of u)t.v!==v&&!(r in f)&&e.push(r);return e},setPrototypeOf(){G()}})}function K(n,a=1){b(n,n.v+a)}const ie={get(n,a){if(!n.exclude.includes(a))return n.props[a]},set(n,a){return!1},getOwnPropertyDescriptor(n,a){if(!n.exclude.includes(a)&&a in n.props)return{enumerable:!0,configurable:!0,value:n.props[a]}},has(n,a){return n.exclude.includes(a)?!1:a in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(a=>!n.exclude.includes(a))}};function se(n,a,c){return new Proxy({props:n,exclude:a},ie)}function M(n){for(var a=L,c=L;a!==null&&!(a.f&(V|Q));)a=a.parent;try{return C(a),n()}finally{C(c)}}function le(n,a,c,P){var B;var u=(c&W)!==0,o=!Z||(c&$)!==0,h=(c&k)!==0,w=(c&ee)!==0,f=!1,e;h?[e,f]=ae(()=>n[a]):e=n[a];var r=(B=D(n,a))==null?void 0:B.set,t=P,i=!0,s=!1,d=()=>(s=!0,i&&(i=!1,w?t=q(P):t=P),t);e===void 0&&P!==void 0&&(r&&o&&J(),e=d(),r&&r(e));var _;if(o)_=()=>{var l=n[a];return l===void 0?d():(i=!0,s=!1,l)};else{var m=M(()=>(u?F:X)(()=>n[a]));m.f|=p,_=()=>{var l=g(m);return l!==void 0&&(t=void 0),l===void 0?t:l}}if(!(c&re))return _;if(r){var x=n.$$legacy;return function(l,R){return arguments.length>0?((!o||!R||x||f)&&r(R?_():l),l):_()}}var I=!1,O=!1,N=ne(e),S=M(()=>F(()=>{var l=_(),R=g(N);return I?(I=!1,O=!0,R):(O=!1,N.v=l)}));return u||(S.equals=te),function(l,R){if(arguments.length>0){const A=R?g(S):o&&h?E(l):l;return S.equals(A)||(I=!0,b(N,A),s&&t!==void 0&&(t=A),q(()=>g(S))),l}return g(S)}}export{E as a,le as p,se as r};