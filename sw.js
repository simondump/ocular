if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_commonjsHelpers.4e997714.js",revision:null},{url:"assets/AnimatedRouterView.b6b0ef5c.css",revision:null},{url:"assets/AnimatedRouterView.f1699c9a.js",revision:null},{url:"assets/AsyncComponent.c1405181.js",revision:null},{url:"assets/AsyncComponent.d981eaa0.css",revision:null},{url:"assets/BudgetPane.1f6d5f04.css",revision:null},{url:"assets/BudgetPane.4193d732.js",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.050b7bba.css",revision:null},{url:"assets/Button.5254d836.js",revision:null},{url:"assets/ChartPlaceholder.144a8ba8.js",revision:null},{url:"assets/ChartPlaceholder.ddcdc74e.css",revision:null},{url:"assets/Currency.vue_vue_type_script_setup_true_lang.42150daf.js",revision:null},{url:"assets/Dashboard.26908fb6.css",revision:null},{url:"assets/Dashboard.e00e0978.js",revision:null},{url:"assets/DevelopmentChart.6cd81939.css",revision:null},{url:"assets/DevelopmentChart.cc188d80.js",revision:null},{url:"assets/DistributionChart.2275c24f.css",revision:null},{url:"assets/DistributionChart.6588023e.js",revision:null},{url:"assets/Expenses.2bcd17f9.js",revision:null},{url:"assets/Frame.0d1307cf.js",revision:null},{url:"assets/Frame.f2628915.css",revision:null},{url:"assets/Icon.0ea115d3.js",revision:null},{url:"assets/Icon.fd3ba0e8.css",revision:null},{url:"assets/Income.1d4b896e.js",revision:null},{url:"assets/index.7d8e7436.js",revision:null},{url:"assets/index.ed20b6e6.css",revision:null},{url:"assets/installSVGRenderer.cb2cf946.js",revision:null},{url:"assets/Link.737e6dc5.css",revision:null},{url:"assets/Link.754f2728.js",revision:null},{url:"assets/main.db1d78ee.js",revision:null},{url:"assets/Overview.1ba55daa.js",revision:null},{url:"assets/Overview.549a1872.css",revision:null},{url:"assets/Pane.4663b8db.js",revision:null},{url:"assets/Pane.dbc11758.css",revision:null},{url:"assets/Summary.68000cbd.js",revision:null},{url:"assets/Summary.d38d64be.css",revision:null},{url:"assets/useMonthNames.61578759.js",revision:null},{url:"assets/useResizeObserver.fbbbbfea.js",revision:null},{url:"assets/useThemeStyles.77a42a5e.js",revision:null},{url:"index.html",revision:"ddf28dfaaa8509052ee8ee6fdf6826e5"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
