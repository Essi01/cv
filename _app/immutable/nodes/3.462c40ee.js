import{s as ye,f as w,g as k,h as E,d as _,j as p,i as q,a as C,e as he,c as I,I as Ee,K as m,n as xe,l as Q,m as W,T as $e,p as X,M as Ve}from"../chunks/scheduler.7a274a43.js";import{S as Ae,i as Se,b as j,d as z,m as L,a as D,t as y,e as U,g as de,c as me}from"../chunks/index.28409b7f.js";import{A as pe,e as re,u as je,U as le,b as ze,g as _e}from"../chunks/UIcon.abf03691.js";import{C as Le}from"../chunks/Card.8b301a84.js";import{C as Ue}from"../chunks/Chip.2121a9fa.js";import{S as Me}from"../chunks/SearchPage.47dfa2c0.js";import{c as ve}from"../chunks/app.49854a0e.js";import{C as ue}from"../chunks/CardDivider.09b854d8.js";const be=[{degree:"Bachelor degree of Computer Science specialization in Cybersecurity",description:"",location:"Agder",logo:pe.Unknown,name:"",organization:"UiA",period:{from:new Date(2022,8,15),to:new Date(2025,7,1)},shortDescription:"",slug:"dummy-education-item",subjects:["Cybersecurity","Object-oriented programming","Network","Operating systems","Databases","kubernetes","Chaos engineering"]},{degree:"PhD of Computer Science",description:"",location:"USA",logo:pe.Unknown,name:"",organization:"MIT",period:{from:new Date(2023,0,1)},shortDescription:"",slug:"dummy-education-item-2",subjects:["Assembly","Rust","Computer Architecture","Algorithms and Data structures"]}],Pe="Education";function we(f,t,r){const e=f.slice();return e[2]=t[r],e[4]=r,e}function ke(f,t,r){const e=f.slice();return e[5]=t[r],e}function qe(f){let t,r,e=[],o=new Map,u,n,c=re(f[0]);const i=l=>l[2].slug;for(let l=0;l<c.length;l+=1){let a=we(f,c,l),v=i(a);o.set(v,e[l]=Ce(v,a))}return{c(){t=w("div"),r=C();for(let l=0;l<e.length;l+=1)e[l].c();u=he(),this.h()},l(l){t=k(l,"DIV",{class:!0}),E(t).forEach(_),r=I(l);for(let a=0;a<e.length;a+=1)e[a].l(l);u=he(),this.h()},h(){p(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,a){q(l,t,a),q(l,r,a);for(let v=0;v<e.length;v+=1)e[v]&&e[v].m(l,a);q(l,u,a),n=!0},p(l,a){a&1&&(c=re(l[0]),de(),e=je(e,a,i,1,l,c,o,u.parentNode,ze,Ce,u,we),me())},i(l){if(!n){for(let a=0;a<c.length;a+=1)D(e[a]);n=!0}},o(l){for(let a=0;a<e.length;a+=1)y(e[a]);n=!1},d(l){l&&(_(t),_(r),_(u));for(let a=0;a<e.length;a+=1)e[a].d(l)}}}function Be(f){let t,r,e,o,u="Could not find anything...",n;return r=new le({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=w("div"),j(r.$$.fragment),e=C(),o=w("p"),o.textContent=u,this.h()},l(c){t=k(c,"DIV",{class:!0});var i=E(t);z(r.$$.fragment,i),e=I(i),o=k(i,"P",{class:!0,["data-svelte-h"]:!0}),Ee(o)!=="svelte-1jyyf6v"&&(o.textContent=u),i.forEach(_),this.h()},h(){p(o,"class","font-300"),p(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,i){q(c,t,i),L(r,t,null),m(t,e),m(t,o),n=!0},p:xe,i(c){n||(D(r.$$.fragment,c),n=!0)},o(c){y(r.$$.fragment,c),n=!1},d(c){c&&_(t),U(r)}}}function Ne(f){let t=f[5]+"",r;return{c(){r=Q(t)},l(e){r=W(e,t)},m(e,o){q(e,r,o)},p(e,o){o&1&&t!==(t=e[5]+"")&&X(r,t)},d(e){e&&_(r)}}}function De(f){let t,r;return t=new Ue({props:{$$slots:{default:[Ne]},$$scope:{ctx:f}}}),{c(){j(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,o){L(t,e,o),r=!0},p(e,o){const u={};o&257&&(u.$$scope={dirty:o,ctx:e}),t.$set(u)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}function Oe(f){let t,r,e,o,u,n,c=f[2].degree+"",i,l,a,v=f[2].organization+"",V,b,g,x,K,M,B,ne,F=f[2].location+"",Y,ae,N,se,P,O,oe,H=ve(f[2].period.from,f[2].period.to)+"",Z,ie,R,ce,T,A;x=new ue({}),B=new le({props:{icon:"i-carbon-location"}}),N=new ue({}),O=new le({props:{icon:"i-carbon-time"}}),R=new ue({});let G=re(f[2].subjects),h=[];for(let s=0;s<G.length;s+=1)h[s]=De(ke(f,G,s));const Ie=s=>y(h[s],1,1,()=>{h[s]=null});return{c(){t=w("div"),r=w("img"),u=C(),n=w("div"),i=Q(c),l=C(),a=w("div"),V=Q(v),b=C(),g=w("div"),j(x.$$.fragment),K=C(),M=w("div"),j(B.$$.fragment),ne=C(),Y=Q(F),ae=C(),j(N.$$.fragment),se=C(),P=w("div"),j(O.$$.fragment),oe=C(),Z=Q(H),ie=C(),j(R.$$.fragment),ce=C(),T=w("div");for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){t=k(s,"DIV",{class:!0});var d=E(t);r=k(d,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),u=I(d),n=k(d,"DIV",{class:!0});var $=E(n);i=W($,c),$.forEach(_),l=I(d),a=k(d,"DIV",{});var J=E(a);V=W(J,v),J.forEach(_),b=I(d),g=k(d,"DIV",{class:!0});var S=E(g);z(x.$$.fragment,S),K=I(S),M=k(S,"DIV",{class:!0});var ee=E(M);z(B.$$.fragment,ee),ne=I(ee),Y=W(ee,F),ee.forEach(_),ae=I(S),z(N.$$.fragment,S),se=I(S),P=k(S,"DIV",{class:!0});var te=E(P);z(O.$$.fragment,te),oe=I(te),Z=W(te,H),te.forEach(_),ie=I(S),z(R.$$.fragment,S),S.forEach(_),ce=I(d),T=k(d,"DIV",{class:!0});var ge=E(T);for(let fe=0;fe<h.length;fe+=1)h[fe].l(ge);ge.forEach(_),d.forEach(_),this.h()},h(){$e(r.src,e=_e(f[2].logo))||p(r,"src",e),p(r,"alt",o=f[2].organization),p(r,"height","50"),p(r,"width","50"),p(r,"class","mb-5"),p(n,"class","text-[1.3em]"),p(M,"class","row items-center gap-2"),p(P,"class","row items-center gap-2"),p(g,"class","col text-[0.9em]"),p(T,"class","row flex-wrap gap-1"),p(t,"class","flex-1 col gap-2 items-stretch")},m(s,d){q(s,t,d),m(t,r),m(t,u),m(t,n),m(n,i),m(t,l),m(t,a),m(a,V),m(t,b),m(t,g),L(x,g,null),m(g,K),m(g,M),L(B,M,null),m(M,ne),m(M,Y),m(g,ae),L(N,g,null),m(g,se),m(g,P),L(O,P,null),m(P,oe),m(P,Z),m(g,ie),L(R,g,null),m(t,ce),m(t,T);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(T,null);A=!0},p(s,d){if((!A||d&1&&!$e(r.src,e=_e(s[2].logo)))&&p(r,"src",e),(!A||d&1&&o!==(o=s[2].organization))&&p(r,"alt",o),(!A||d&1)&&c!==(c=s[2].degree+"")&&X(i,c),(!A||d&1)&&v!==(v=s[2].organization+"")&&X(V,v),(!A||d&1)&&F!==(F=s[2].location+"")&&X(Y,F),(!A||d&1)&&H!==(H=ve(s[2].period.from,s[2].period.to)+"")&&X(Z,H),d&1){G=re(s[2].subjects);let $;for($=0;$<G.length;$+=1){const J=ke(s,G,$);h[$]?(h[$].p(J,d),D(h[$],1)):(h[$]=De(J),h[$].c(),D(h[$],1),h[$].m(T,null))}for(de(),$=G.length;$<h.length;$+=1)Ie($);me()}},i(s){if(!A){D(x.$$.fragment,s),D(B.$$.fragment,s),D(N.$$.fragment,s),D(O.$$.fragment,s),D(R.$$.fragment,s);for(let d=0;d<G.length;d+=1)D(h[d]);A=!0}},o(s){y(x.$$.fragment,s),y(B.$$.fragment,s),y(N.$$.fragment,s),y(O.$$.fragment,s),y(R.$$.fragment,s),h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)y(h[d]);A=!1},d(s){s&&_(t),U(x),U(B),U(N),U(O),U(R),Ve(h,s)}}}function Ce(f,t){let r,e,o,u,n,c,i,l,a,v,V;return n=new le({props:{icon:"i-carbon-condition-point"}}),l=new Le({props:{$$slots:{default:[Oe]},$$scope:{ctx:t}}}),{key:f,first:null,c(){r=w("div"),e=w("div"),o=C(),u=w("div"),j(n.$$.fragment),c=C(),i=w("div"),j(l.$$.fragment),a=C(),this.h()},l(b){r=k(b,"DIV",{class:!0});var g=E(r);e=k(g,"DIV",{class:!0}),E(e).forEach(_),o=I(g),u=k(g,"DIV",{class:!0});var x=E(u);z(n.$$.fragment,x),x.forEach(_),c=I(g),i=k(g,"DIV",{class:!0});var K=E(i);z(l.$$.fragment,K),K.forEach(_),a=I(g),g.forEach(_),this.h()},h(){p(e,"class","flex-1 hidden lg:flex"),p(u,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),p(i,"class","col flex-1 items-stretch"),p(r,"class",v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(b,g){q(b,r,g),m(r,e),m(r,o),m(r,u),L(n,u,null),m(r,c),m(r,i),L(l,i,null),m(r,a),V=!0},p(b,g){t=b;const x={};g&257&&(x.$$scope={dirty:g,ctx:t}),l.$set(x),(!V||g&1&&v!==(v=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&p(r,"class",v)},i(b){V||(D(n.$$.fragment,b),D(l.$$.fragment,b),V=!0)},o(b){y(n.$$.fragment,b),y(l.$$.fragment,b),V=!1},d(b){b&&_(r),U(n),U(l)}}}function Re(f){let t,r,e,o;const u=[Be,qe],n=[];function c(i,l){return i[0].length===0?0:1}return r=c(f),e=n[r]=u[r](f),{c(){t=w("div"),e.c(),this.h()},l(i){t=k(i,"DIV",{class:!0});var l=E(t);e.l(l),l.forEach(_),this.h()},h(){p(t,"class","col items-center relative mt-10 flex-1")},m(i,l){q(i,t,l),n[r].m(t,null),o=!0},p(i,l){let a=r;r=c(i),r===a?n[r].p(i,l):(de(),y(n[a],1,1,()=>{n[a]=null}),me(),e=n[r],e?e.p(i,l):(e=n[r]=u[r](i),e.c()),D(e,1),e.m(t,null))},i(i){o||(D(e),o=!0)},o(i){y(e),o=!1},d(i){i&&_(t),n[r].d()}}}function Te(f){let t,r;return t=new Me({props:{title:Pe,search:Ge,$$slots:{default:[Re]},$$scope:{ctx:f}}}),t.$on("search",f[1]),{c(){j(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,o){L(t,e,o),r=!0},p(e,[o]){const u={};o&257&&(u.$$scope={dirty:o,ctx:e}),t.$set(u)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){y(t.$$.fragment,e),r=!1},d(e){U(t,e)}}}let Ge="";function Ke(f,t,r){let e=be;return[e,u=>{const n=u.detail.search;r(0,e=be.filter(c=>c.degree.toLowerCase().includes(n)||c.description.toLowerCase().includes(n)||c.location.toLowerCase().includes(n)||c.name.toLowerCase().includes(n)||c.organization.toLowerCase().includes(n)||c.subjects.some(i=>i.toLowerCase().includes(n))))}]}class et extends Ae{constructor(t){super(),Se(this,t,Ke,Te,ye,{})}}export{et as component};