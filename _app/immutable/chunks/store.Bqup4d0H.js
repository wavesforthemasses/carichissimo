import{as as E,F as T,aj as Y,aq as O,A as k,a4 as $,at as j,v as B,au as A,a6 as C,av as P,an as z,aw as S,a0 as g,$ as V,Y as F,a9 as X,ax as x,a8 as G,V as J,p as K,c as Q,X as N,a1 as h,k as U,al as Z,ay as ee,az as re,ag as te,aA as R,b as ae,M as ne,y as se,g as ie}from"./runtime.CfFjOBqu.js";import{c as ue}from"./disclose-version.D6RI8tkr.js";function pe(e,r,a,n=!0){n&&a();for(var s of r)e.addEventListener(s,a);O(()=>{for(var t of r)e.removeEventListener(t,a)})}function oe(e){var r=Y,a=k;E(null),T(null);try{return e()}finally{E(r),T(a)}}const fe=new Set,I=new Set;function ce(e,r,a,n){function s(t){if(n.capture||p.call(r,t),!t.cancelBubble)return oe(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?$(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function ye(e,r,a,n,s){var t={capture:n,passive:s},o=ce(e,r,a,t);(r===document.body||r===window||r===document)&&O(()=>{r.removeEventListener(e,o,t)})}function p(e){var D;var r=this,a=r.ownerDocument,n=e.type,s=((D=e.composedPath)==null?void 0:D.call(e))||[],t=s[0]||e.target,o=0,v=e.__root;if(v){var l=s.indexOf(v);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=s.indexOf(r);if(d===-1)return;l<=d&&(o=l)}if(t=s[o]||e.target,t!==r){j(e,"currentTarget",{configurable:!0,get(){return t||a}});var L=Y,f=k;E(null),T(null);try{for(var i,u=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+n];if(_!==void 0&&!t.disabled)if(B(_)){var[H,...W]=_;H.apply(t,[e,...W])}else _.call(t,e)}catch(y){i?u.push(y):i=y}if(e.cancelBubble||c===r||c===null)break;t=c}if(i){for(let y of u)queueMicrotask(()=>{throw y});throw i}}finally{e.__root=r,delete e.currentTarget,E(L),T(f)}}}const le=["touchstart","touchmove"];function de(e){return le.includes(e)}let M=!0;function ge(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function _e(e,r){return q(e,r)}function we(e,r){A(),r.intro=r.intro??!1;const a=r.target,n=N,s=h;try{for(var t=C(a);t&&(t.nodeType!==8||t.data!==P);)t=z(t);if(!t)throw S;g(!0),V(t),F();const o=q(e,{...r,anchor:t});if(h===null||h.nodeType!==8||h.data!==Z)throw ee(),S;return g(!1),o}catch(o){if(o===S)return r.recover===!1&&re(),A(),te(a),g(!1),_e(e,r);throw o}finally{g(n),V(s)}}const b=new Map;function q(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:o=!0}){A();var v=new Set,l=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!v.has(u)){v.add(u);var c=de(u);r.addEventListener(u,p,{passive:c});var _=b.get(u);_===void 0?(document.addEventListener(u,p,{passive:c}),b.set(u,1)):b.set(u,_+1)}}};l(X(fe)),I.add(l);var d=void 0,L=x(()=>{var f=a??r.appendChild(G());return J(()=>{if(t){K({});var i=Q;i.c=t}s&&(n.$$events=s),N&&ue(f,null),M=o,d=e(f,n)||{},M=!0,N&&(k.nodes_end=h),t&&U()}),()=>{var c;for(var i of v){r.removeEventListener(i,p);var u=b.get(i);--u===0?(document.removeEventListener(i,p),b.delete(i)):b.set(i,u)}I.delete(l),m.delete(d),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return m.set(d,L),d}let m=new WeakMap;function Ee(e){const r=m.get(e);r&&r()}function ve(e,r,a){if(e==null)return r(void 0),R;const n=ae(()=>e.subscribe(r,a));return n.unsubscribe?()=>n.unsubscribe():n}let w=!1;function Te(e,r,a){const n=a[r]??(a[r]={store:null,source:ne(void 0),unsubscribe:R});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=R;else{var s=!0;n.unsubscribe=ve(e,t=>{s?n.source.v=t:se(n.source,t)}),s=!1}return ie(n.source)}function Le(){const e={};return O(()=>{for(var r in e)e[r].unsubscribe()}),e}function Se(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{ge as a,Te as b,Se as c,M as d,ye as e,we as h,pe as l,_e as m,Le as s,Ee as u,oe as w};
