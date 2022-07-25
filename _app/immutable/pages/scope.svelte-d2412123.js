import{S as Z,i as x,s as nn,O as A,P as W,l as z,u as an,x as N,a as H,m as G,p as Q,v as pn,y as O,h as k,c as K,q as B,b as en,G as P,z as V,w as dn,Q as X,f as J,t as M,C as q,R as rn,n as ln}from"../chunks/index-a927ebcf.js";import{M as Y,_ as un}from"../chunks/svelte-eslint-parser-1b416bbd.js";import{A as fn,p as E}from"../chunks/json-9d3e25b9.js";function cn(d){let l,i,h,o,m,j,g,f,$,S,c,T;function F(p){d[8](p)}let w={};d[0]!==void 0&&(w.options=d[0]),o=new fn({props:w}),A.push(()=>W(o,"options",F));function y(p){d[10](p)}let L={language:"html"};d[1]!==void 0&&(L.code=d[1]),f=new Y({props:L}),d[9](f),A.push(()=>W(f,"code",y)),f.$on("focusEditorText",d[11]),f.$on("changeCursorPosition",d[12]);let v={code:d[2].json,language:"json",readOnly:!0};return c=new Y({props:v}),d[13](c),c.$on("focusEditorText",d[14]),c.$on("changeCursorPosition",d[15]),{c(){l=z("div"),i=z("div"),h=an(d[3]),N(o.$$.fragment),j=H(),g=z("div"),N(f.$$.fragment),S=H(),N(c.$$.fragment),this.h()},l(p){l=G(p,"DIV",{class:!0});var _=Q(l);i=G(_,"DIV",{class:!0});var b=Q(i);h=pn(b,d[3]),O(o.$$.fragment,b),b.forEach(k),j=K(_),g=G(_,"DIV",{class:!0});var I=Q(g);O(f.$$.fragment,I),S=K(I),O(c.$$.fragment,I),I.forEach(k),_.forEach(k),this.h()},h(){B(i,"class","ast-tools svelte-116kuo8"),B(g,"class","ast-explorer svelte-116kuo8"),B(l,"class","ast-explorer-root svelte-116kuo8")},m(p,_){en(p,l,_),P(l,i),P(i,h),V(o,i,null),P(l,j),P(l,g),V(f,g,null),P(g,S),V(c,g,null),T=!0},p(p,[_]){(!T||_&8)&&dn(h,p[3]);const b={};!m&&_&1&&(m=!0,b.options=p[0],X(()=>m=!1)),o.$set(b);const I={};!$&&_&2&&($=!0,I.code=p[1],X(()=>$=!1)),f.$set(I);const C={};_&4&&(C.code=p[2].json),c.$set(C)},i(p){T||(J(o.$$.fragment,p),J(f.$$.fragment,p),J(c.$$.fragment,p),T=!0)},o(p){M(o.$$.fragment,p),M(f.$$.fragment,p),M(c.$$.fragment,p),T=!1},d(p){p&&k(l),q(o),d[9](null),q(f),d[13](null),q(c)}}}function hn(d,l,i){let h={showLocations:!1},o=`<script>
    let a = 1; 
    let b = 2;
<\/script>

<input type="number" bind:value={a}>
<input type="number" bind:value={b}>

<p>{a} + {b} = {a + b}</p>`,m={},j="",g="",f,$;function S(e,n){let t;const s=Date.now();try{t=un(n).scopeManager}catch(a){i(2,m={json:JSON.stringify({message:a.message,...a}),locations:[]}),i(3,g=`${Date.now()-s}ms`);return}i(3,g=`${Date.now()-s}ms`);const r=w(e,t);i(2,m=r)}function c(e){j=e}function T(e,n){if(j!==n||!m)return;const t=e.position;if(n==="source"){const a=s(m,"sourceLoc");a&&f.setCursorPosition(a.jsonLoc)}else if(n==="json"){const a=s(m,"jsonLoc");a&&$.setCursorPosition(a.sourceLoc,{columnOffset:1})}function s(a,u){let D=a.locations.find(R=>r(R[u],t)),U;for(;D&&(U=D.locations.find(R=>r(R[u],t)));)D=U;return D}function r(a,u){return a.start.line<u.lineNumber&&u.lineNumber<a.end.line?!0:a.start.line===u.lineNumber&&u.lineNumber===a.end.line?a.start.column<=u.column&&u.column<a.end.column:a.start.line===u.lineNumber&&u.lineNumber<a.end.line?a.start.column<=u.column:a.start.line<u.lineNumber&&u.lineNumber===a.end.line?u.column<a.end.column:!1}}class F{constructor(){this.json="",this.jsonPosition={line:1,column:1},this.locations=[],this._indentOffset=0,this._stack=null}pushNode(n){this._stack={upper:this._stack,node:n,jsonLocStart:{...this.jsonPosition},locations:[]}}popNode(){const n={node:this._stack.node,sourceLoc:this._stack.node.loc,jsonLoc:{start:this._stack.jsonLocStart,end:{...this.jsonPosition}},locations:this._stack.locations};this._stack=this._stack.upper,this._stack?this._stack.locations.push(n):this.locations.push(n)}appendText(n){const t=String(n);this.json+=t;const s=t.split(`
`);return s.length>1?this.jsonPosition={line:this.jsonPosition.line+s.length-1,column:s.pop().length+1}:this.jsonPosition.column+=t.length,this}appendIndent(){return this.appendText("  ".repeat(this._indentOffset))}indent(){return this._indentOffset++,this}outdent(){return this._indentOffset--,this}}function w(e,n){const t=new F;return y(e,t,n.globalScope),t}function y(e,n,t){n.appendIndent().appendText(`{
`).indent(),n.appendIndent().appendText(`"type": "${t.type}",
`),n.appendIndent().appendText(`"variables": [
`).indent(),t.variables.forEach((s,r)=>{L(e,n,s),t.variables.length-1!==r&&n.appendText(","),n.appendText(`
`)}),n.outdent().appendIndent().appendText(`],
`),n.appendIndent().appendText(`"references": [
`).indent(),t.references.forEach((s,r)=>{v(e,n,s),t.references.length-1!==r&&n.appendText(","),n.appendText(`
`)}),n.outdent().appendIndent().appendText(`],
`),n.appendIndent().appendText(`"childScopes": [
`).indent(),t.childScopes.forEach((s,r)=>{y(e,n,s),t.childScopes.length-1!==r&&n.appendText(","),n.appendText(`
`)}),n.outdent().appendIndent().appendText(`],
`),n.appendIndent().appendText(`"through": [
`).indent(),t.through.forEach((s,r)=>{v(e,n,s),t.through.length-1!==r&&n.appendText(","),n.appendText(`
`)}),n.outdent().appendIndent().appendText(`]
`),n.outdent().appendIndent().appendText("}")}function L(e,n,t){n.appendIndent().appendText(`{
`).indent(),n.appendIndent().appendText(`"name": "${t.name}",
`),n.appendIndent().appendText(`"identifiers": [
`).indent(),t.identifiers.forEach((s,r)=>{n.appendIndent(),E(e,n,s),t.identifiers.length-1!==r&&n.appendText(","),n.appendText(`
`)}),n.outdent().appendIndent().appendText(`],
`),n.appendIndent().appendText(`"defs": [
`).indent(),t.defs.forEach((s,r)=>{n.appendIndent(),E(e,n,s),t.defs.length-1!==r&&n.appendText(","),n.appendText(`
`)}),n.outdent().appendIndent().appendText(`],
`),n.appendIndent().appendText(`"references": [
`).indent(),t.references.forEach((s,r)=>{v(e,n,s),t.references.length-1!==r&&n.appendText(","),n.appendText(`
`)}),n.outdent().appendIndent().appendText(`]
`),n.outdent().appendIndent().appendText("}")}function v(e,n,t){var s,r,a,u;n.appendIndent().appendText(`{
`).indent(),n.appendIndent().appendText('"identifier": '),E(e,n,t.identifier),n.appendText(`,
`),n.appendIndent().appendText('"from": '),E(e,n,t.from.type),n.appendText(`,
`),n.appendIndent().appendText('"resolved": '),E(e,n,(a=(r=(s=t.resolved)==null?void 0:s.defs[0])==null?void 0:r.name)!=null?a:null),n.appendText(`,
`),n.appendIndent().appendText('"init": '),E(e,n,(u=t.init)!=null?u:null),n.appendText(`
`),n.outdent().appendIndent().appendText("}")}function p(e){h=e,i(0,h)}function _(e){A[e?"unshift":"push"](()=>{$=e,i(5,$)})}function b(e){o=e,i(1,o)}const I=()=>c("source"),C=e=>T(e.detail,"source");function tn(e){A[e?"unshift":"push"](()=>{f=e,i(4,f)})}const on=()=>c("json"),sn=e=>T(e.detail,"json");return d.$$.update=()=>{d.$$.dirty&3&&S(h,o)},[h,o,m,g,f,$,c,T,p,_,b,I,C,tn,on,sn]}class mn extends Z{constructor(l){super(),x(this,l,hn,cn,nn,{})}}function _n(d){let l,i,h;return i=new mn({}),{c(){l=H(),N(i.$$.fragment),this.h()},l(o){rn('[data-svelte="svelte-1whbk5c"]',document.head).forEach(k),l=K(o),O(i.$$.fragment,o),this.h()},h(){document.title="ScopeManager | svelte-eslint-parser"},m(o,m){en(o,l,m),V(i,o,m),h=!0},p:ln,i(o){h||(J(i.$$.fragment,o),h=!0)},o(o){M(i.$$.fragment,o),h=!1},d(o){o&&k(l),q(i,o)}}}const $n=!0;class bn extends Z{constructor(l){super(),x(this,l,null,_n,nn,{})}}export{bn as default,$n as prerender};
