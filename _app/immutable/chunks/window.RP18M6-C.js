import{a8 as se,O as ne,v as ie,a9 as F,V as J,aa as H,ab as fe,M as le,w as B,ac as O,X as T,ad as G,ae as M,T as P,af as te,ag as ue,ah as oe,ai as ce,A as K,aj as ve,W as _e,ak as Q,$ as k,a6 as de,Y as j,Z as he,_ as U,a0 as D,a1 as m,al as pe,am as we,an as Ee,a4 as Te,m as W,ao as ge,ap as Ae,a3 as Ne,a2 as xe,aq as Ie}from"./runtime.CfFjOBqu.js";import{w as ee,l as Le}from"./store.Bqup4d0H.js";function De(a,e){return e}function me(a,e,r,s){for(var f=[],n=e.length,t=0;t<n;t++)te(e[t].e,f,!0);var v=n>0&&f.length===0&&r!==null;if(v){var h=r.parentNode;ue(h),h.append(r),s.clear(),x(a,e[0].prev,e[n-1].next)}oe(f,()=>{for(var d=0;d<n;d++){var _=e[d];v||(s.delete(_.k),x(a,_.prev,_.next)),ce(_.e,!v)}})}function He(a,e,r,s,f,n=null){var t=a,v={items:new Map,first:null},h=(e&Q)!==0;if(h){var d=a;t=T?k(de(d)):d.appendChild(se())}T&&j();var _=null,I=!1;ne(()=>{var i=r(),c=ie(i)?i:i==null?[]:F(i),o=c.length;if(I&&o===0)return;I=o===0;let A=!1;if(T){var w=t.data===he;w!==(o===0)&&(t=U(),k(t),D(!1),A=!0)}if(T){for(var E=null,g,p=0;p<o;p++){if(m.nodeType===8&&m.data===pe){t=m,A=!0,D(!1);break}var l=c[p],u=s(l,p);g=ae(m,v,E,null,l,u,p,f,e),v.items.set(u,g),E=g}o>0&&k(U())}if(!T){var y=ve;Ce(c,v,t,f,e,(y.f&M)!==0,s)}n!==null&&(o===0?_?P(_):_=J(()=>n(t)):_!==null&&_e(_,()=>{_=null})),A&&D(!0),r()}),T&&(t=m)}function Ce(a,e,r,s,f,n,t){var Y,X,V,q;var v=(f&we)!==0,h=(f&(H|O))!==0,d=a.length,_=e.items,I=e.first,i=I,c,o=null,A,w=[],E=[],g,p,l,u;if(v)for(u=0;u<d;u+=1)g=a[u],p=t(g,u),l=_.get(p),l!==void 0&&((Y=l.a)==null||Y.measure(),(A??(A=new Set)).add(l));for(u=0;u<d;u+=1){if(g=a[u],p=t(g,u),l=_.get(p),l===void 0){var y=i?i.e.nodes_start:r;o=ae(y,e,o,o===null?e.first:o.next,g,p,u,s,f),_.set(p,o),w=[],E=[],i=o.next;continue}if(h&&Me(l,g,u,f),l.e.f&M&&(P(l.e),v&&((X=l.a)==null||X.unfix(),(A??(A=new Set)).delete(l))),l!==i){if(c!==void 0&&c.has(l)){if(w.length<E.length){var C=E[0],N;o=C.prev;var b=w[0],R=w[w.length-1];for(N=0;N<w.length;N+=1)Z(w[N],C,r);for(N=0;N<E.length;N+=1)c.delete(E[N]);x(e,b.prev,R.next),x(e,o,b),x(e,R,C),i=C,o=R,u-=1,w=[],E=[]}else c.delete(l),Z(l,i,r),x(e,l.prev,l.next),x(e,l,o===null?e.first:o.next),x(e,o,l),o=l;continue}for(w=[],E=[];i!==null&&i.k!==p;)(n||!(i.e.f&M))&&(c??(c=new Set)).add(i),E.push(i),i=i.next;if(i===null)continue;l=i}w.push(l),o=l,i=l.next}if(i!==null||c!==void 0){for(var L=c===void 0?[]:F(c);i!==null;)(n||!(i.e.f&M))&&L.push(i),i=i.next;var S=L.length;if(S>0){var re=f&Q&&d===0?r:null;if(v){for(u=0;u<S;u+=1)(V=L[u].a)==null||V.measure();for(u=0;u<S;u+=1)(q=L[u].a)==null||q.fix()}me(e,L,re,_)}}v&&Te(()=>{var z;if(A!==void 0)for(l of A)(z=l.a)==null||z.apply()}),K.first=e.first&&e.first.e,K.last=o&&o.e}function Me(a,e,r,s){s&H&&G(a.v,e),s&O?G(a.i,r):a.i=r}function ae(a,e,r,s,f,n,t,v,h){var d=(h&H)!==0,_=(h&fe)===0,I=d?_?le(f):B(f):f,i=h&O?B(t):t,c={i,v:I,k:n,a:null,e:null,prev:r,next:s};try{return c.e=J(()=>v(a,I,i),T),c.e.prev=r&&r.e,c.e.next=s&&s.e,r===null?e.first=c:(r.next=c,r.e.next=c.e),s!==null&&(s.prev=c,s.e.prev=c.e),c}finally{}}function Z(a,e,r){for(var s=a.next?a.next.e.nodes_start:r,f=e?e.e.nodes_start:r,n=a.e.nodes_start;n!==s;){var t=Ee(n);f.before(n),n=t}}function x(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Oe(a,e,r,s,f){var v;T&&j();var n=(v=e.$$slots)==null?void 0:v[r],t=!1;n===!0&&(n=e.children,t=!0),n===void 0||n(a,t?()=>s:s)}function be(a,e,r,s){var f=a.__attributes??(a.__attributes={});T&&(f[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||f[e]!==(f[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[ge]=r),r==null?a.removeAttribute(e):typeof r!="string"&&ye(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var $=new Map;function ye(a){var e=$.get(a.nodeName);if(e)return e;$.set(a.nodeName,e=[]);for(var r,s=W(a),f=Element.prototype;f!==s;){r=Ae(s);for(var n in r)r[n].set&&e.push(n);s=W(s)}return e}function Ye(a,e){var r=a.__className,s=Re(e);T&&a.className===s?a.__className=s:(r!==s||T&&a.className!==s)&&(e==null?a.removeAttribute("class"):a.className=s,a.__className=s)}function Re(a){return a??""}function Xe(a,e,r){if(r){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function Ve(a,e,r=e){var s=a==="x",f=()=>ee(()=>{n=!0,clearTimeout(t),t=setTimeout(v,100),r(window[s?"scrollX":"scrollY"])});addEventListener("scroll",f,{passive:!0});var n=!1,t,v=()=>{n=!1},h=!0;Ne(()=>{var d=e();h?h=!1:!n&&d!=null&&(n=!0,clearTimeout(t),scrollTo(window.scrollX,d),t=setTimeout(v,100))}),xe(f),Ie(()=>{removeEventListener("scroll",f)})}function qe(a,e){Le(window,["resize"],()=>ee(()=>e(window[a])))}export{Oe as a,Ve as b,Ye as c,qe as d,He as e,De as i,be as s,Xe as t};
