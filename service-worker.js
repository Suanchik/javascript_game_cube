if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const t=e=>n(e,o),c={module:{uri:o},exports:l,require:t};i[o]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),l)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"4452bf519dbcb05f65db.jpeg",revision:null},{url:"b93b42446dc1c76f825d.png",revision:null},{url:"fe174980d7c8df569cb7.gif",revision:null},{url:"index.html",revision:"ceb39304862095f1e23d462cd13f045b"},{url:"main.css",revision:"71195450a9ecf3795e9a249c28b480ba"},{url:"main.js",revision:"a07d1a5b6800b6bd039b73de2166b763"}],{})}));