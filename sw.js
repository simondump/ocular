if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>n(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AnimatedRouterView.293a22d6.js",revision:null},{url:"assets/AnimatedRouterView.53109550.css",revision:null},{url:"assets/AsyncComponent.341d5e23.css",revision:null},{url:"assets/AsyncComponent.7443e504.js",revision:null},{url:"assets/BudgetPane.70888e0e.js",revision:null},{url:"assets/BudgetPane.f6c4a3f0.css",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.1c8e92b7.css",revision:null},{url:"assets/Button.a7b6f618.js",revision:null},{url:"assets/ChartPlaceholder.10ed1146.css",revision:null},{url:"assets/ChartPlaceholder.bebdbc68.js",revision:null},{url:"assets/Currency.vue_vue_type_script_setup_true_lang.9b898402.js",revision:null},{url:"assets/Dashboard.26908fb6.css",revision:null},{url:"assets/Dashboard.28f28782.js",revision:null},{url:"assets/DevelopmentChart.1109c3b0.js",revision:null},{url:"assets/DevelopmentChart.50ef024a.css",revision:null},{url:"assets/DistributionChart.a2fc9d83.css",revision:null},{url:"assets/DistributionChart.f7b7cfd8.js",revision:null},{url:"assets/Expenses.10717c2c.js",revision:null},{url:"assets/Frame.8b8fe2c4.css",revision:null},{url:"assets/Frame.faf88544.js",revision:null},{url:"assets/Icon.21316720.js",revision:null},{url:"assets/Icon.4e6d9d37.css",revision:null},{url:"assets/Income.4f1e1b05.js",revision:null},{url:"assets/index.cb50fcad.js",revision:null},{url:"assets/index.ed20b6e6.css",revision:null},{url:"assets/installSVGRenderer.2382f06f.js",revision:null},{url:"assets/Link.24418c27.js",revision:null},{url:"assets/Link.87e733cb.css",revision:null},{url:"assets/Overview.e4833fb4.js",revision:null},{url:"assets/Overview.f7702895.css",revision:null},{url:"assets/Pane.2c71bc6e.js",revision:null},{url:"assets/Pane.6945096c.css",revision:null},{url:"assets/Summary.88f4eaea.css",revision:null},{url:"assets/Summary.a658d103.js",revision:null},{url:"assets/useMonthNames.1249db86.js",revision:null},{url:"assets/useResizeObserver.14ff4958.js",revision:null},{url:"assets/useThemeStyles.4c5b6106.js",revision:null},{url:"index.html",revision:"bb23c56f8b7aaebf8f60f4558765fe17"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
