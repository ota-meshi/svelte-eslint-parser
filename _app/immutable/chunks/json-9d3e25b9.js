import{S as g,i as y,s as m,l as d,u as T,m as h,p as b,v as L,h as c,q as f,b as A,G as u,Z as w,n as _}from"./index-a927ebcf.js";function I(o){let e,n,a,t,r,i;return{c(){e=d("label"),n=d("input"),t=T("Locations"),this.h()},l(p){e=h(p,"LABEL",{class:!0});var s=b(e);n=h(s,"INPUT",{type:!0}),t=L(s,"Locations"),s.forEach(c),this.h()},h(){f(n,"type","checkbox"),n.checked=a=o[0].showLocations,f(e,"class","ast-options svelte-khilcf")},m(p,s){A(p,e,s),u(e,n),u(e,t),r||(i=w(n,"change",o[2]),r=!0)},p(p,[s]){s&1&&a!==(a=p[0].showLocations)&&(n.checked=a)},i:_,o:_,d(p){p&&c(e),r=!1,i()}}}function N(o,e,n){let{options:a={}}=e;function t(i){n(0,a={...a,showLocations:i})}const r=i=>t(i.target.checked);return o.$$set=i=>{"options"in i&&n(0,a=i.options)},[a,t,r]}class S extends g{constructor(e){super(),y(this,e,N,I,m,{options:0})}}function l(o,e,n){const a=typeof n;if(a==="string"||a==="number"||a==="boolean"||n===null){e.appendText(JSON.stringify(n));return}else if(a!=="object"){e.appendText('"?"');return}if(Array.isArray(n)){e.appendText(`[
`).indent();const t=[...n];for(;t.length;){e.appendIndent();const r=t.shift();l(o,e,r),t.length&&e.appendText(","),e.appendText(`
`)}e.outdent().appendIndent().appendText("]")}else{let t=Object.entries(n);const r=E(n);if(r){e.pushNode(n);const i=t.find(([s])=>s==="type"),p=o.showLocations?t.filter(([s])=>s==="loc"||s==="range"):[];t=t.filter(([s])=>s!=="type"&&s!=="loc"&&s!=="range"&&s!=="parent"&&!((s==="start"||s==="end")&&typeof n.start=="number")),i&&t.unshift(i),t.push(...p)}for(e.appendText(`{
`).indent();t.length;){const[i,p]=t.shift();e.appendIndent(),l(o,e,i),e.appendText(": "),l(o,e,p),t.length&&e.appendText(","),e.appendText(`
`)}e.outdent().appendIndent().appendText("}"),r&&e.popNode()}}function E(o){return o!=null&&Array.isArray(o.range)&&"loc"in o&&"type"in o}export{S as A,l as p};
