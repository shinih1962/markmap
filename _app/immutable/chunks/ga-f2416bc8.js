let r=(...e)=>{};window.dataLayer=window.dataLayer||[],r=function(){window.dataLayer.push(arguments)},document.addEventListener("click",e=>{const t=s(e.target,{action:"click"});t!=null&&t.label&&r("event",t.action,{event_category:t.category,event_label:t.label,transport_type:"beacon"})});function s(e,t){var c;const a=new Set(["action","category","label"]),o={};for(;e&&a.size;){for(const n of a){const l="ga"+n[0].toUpperCase()+n.slice(1),i=(c=e.dataset)==null?void 0:c[l];i&&(a.delete(l),o[n]=i)}e=e.parentNode}return{category:"global",...t,...o}}export{r as t};