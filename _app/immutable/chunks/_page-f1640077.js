import{_ as t}from"./preload-helper-41c905a7.js";const i=(e,o)=>{const r=e[o];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((m,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+o)))})};async function _(e){return await i(Object.assign({"../docs/faq.md":()=>t(()=>import("./faq-853276a1.js"),[],import.meta.url),"../docs/json-options.md":()=>t(()=>import("./json-options-3b4ebdf8.js"),[],import.meta.url),"../docs/markmap.md":()=>t(()=>import("./markmap-ef13e9c4.js"),[],import.meta.url),"../docs/packages--coc-markmap.md":()=>t(()=>import("./packages--coc-markmap-10bd7856.js"),[],import.meta.url),"../docs/packages--markmap-cli.md":()=>t(()=>import("./packages--markmap-cli-f1154d19.js"),[],import.meta.url),"../docs/packages--markmap-lib.md":()=>t(()=>import("./packages--markmap-lib-998051a3.js"),[],import.meta.url),"../docs/packages--markmap-view.md":()=>t(()=>import("./packages--markmap-view-dd8bb7e3.js"),[],import.meta.url)}),`../docs/${e}.md`)}async function n({params:e}){const o=e.id,{frontmatter:r,html:m}=await _(o);return{path:o,frontmatter:r,html:m}}const s=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{s as _,n as l};
