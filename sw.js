if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AnimatedRouterView.d6a7f054.css",revision:null},{url:"assets/AnimatedRouterView.db2907a9.js",revision:null},{url:"assets/AsyncComponent.1e0d2c9b.js",revision:null},{url:"assets/AsyncComponent.80fdb502.css",revision:null},{url:"assets/BudgetPane.8f28859d.css",revision:null},{url:"assets/BudgetPane.d05c0091.js",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.9c22645f.js",revision:null},{url:"assets/Button.c9b00bcc.css",revision:null},{url:"assets/ChartPlaceholder.5e8e546c.css",revision:null},{url:"assets/ChartPlaceholder.f8392cc9.js",revision:null},{url:"assets/Currency.vue_vue_type_script_setup_true_lang.07a47067.js",revision:null},{url:"assets/Dashboard.26908fb6.css",revision:null},{url:"assets/Dashboard.5fc75a30.js",revision:null},{url:"assets/DevelopmentChart.3a683298.css",revision:null},{url:"assets/DevelopmentChart.ea287522.js",revision:null},{url:"assets/DistributionChart.0ece18af.css",revision:null},{url:"assets/DistributionChart.75394b78.js",revision:null},{url:"assets/Expenses.6144c0a3.js",revision:null},{url:"assets/Frame.0a14bcbd.css",revision:null},{url:"assets/Frame.f944904e.js",revision:null},{url:"assets/Icon.3e341dd2.css",revision:null},{url:"assets/Icon.865af9cb.js",revision:null},{url:"assets/Income.8028e7ec.js",revision:null},{url:"assets/index.173bba9b.js",revision:null},{url:"assets/index.aafeb81f.css",revision:null},{url:"assets/installSVGRenderer.b8285e1c.js",revision:null},{url:"assets/Link.27a353a2.js",revision:null},{url:"assets/Link.646176f8.css",revision:null},{url:"assets/Overview.c63acf48.css",revision:null},{url:"assets/Overview.cb26a905.js",revision:null},{url:"assets/Pane.bb936f84.js",revision:null},{url:"assets/Pane.ca5401aa.css",revision:null},{url:"assets/Summary.81a5253a.css",revision:null},{url:"assets/Summary.b4b3e75a.js",revision:null},{url:"assets/useMonthNames.62eb2fce.js",revision:null},{url:"assets/useResizeObserver.6501883c.js",revision:null},{url:"assets/useThemeStyles.6f052885.js",revision:null},{url:"index.html",revision:"243d55628eb0df856fa3568bccc6ee38"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
