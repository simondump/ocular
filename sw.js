if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_commonjsHelpers.4e997714.js",revision:null},{url:"assets/AnimatedRouterView.843c8b37.js",revision:null},{url:"assets/AnimatedRouterView.b1d8b509.css",revision:null},{url:"assets/AsyncComponent.bf274fbb.js",revision:null},{url:"assets/AsyncComponent.d981eaa0.css",revision:null},{url:"assets/BudgetPane.3a7002d1.js",revision:null},{url:"assets/BudgetPane.697bc27d.css",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.522419fb.css",revision:null},{url:"assets/Button.a43f5cdf.js",revision:null},{url:"assets/ChartPlaceholder.6afb0da6.js",revision:null},{url:"assets/ChartPlaceholder.e839922c.css",revision:null},{url:"assets/Currency.vue_vue_type_script_setup_true_lang.842447c0.js",revision:null},{url:"assets/Dashboard.26908fb6.css",revision:null},{url:"assets/Dashboard.6c7c3c1a.js",revision:null},{url:"assets/DevelopmentChart.6cd81939.css",revision:null},{url:"assets/DevelopmentChart.fdc23826.js",revision:null},{url:"assets/DistributionChart.203d653b.css",revision:null},{url:"assets/DistributionChart.34a6a1dd.js",revision:null},{url:"assets/Expenses.a54b9f49.js",revision:null},{url:"assets/Frame.1bc0e5ee.js",revision:null},{url:"assets/Frame.ed4ba0c2.css",revision:null},{url:"assets/Icon.22a98d35.css",revision:null},{url:"assets/Icon.bc583291.js",revision:null},{url:"assets/Income.7ad91b67.js",revision:null},{url:"assets/index.f1bcfc4c.css",revision:null},{url:"assets/index.fd01b108.js",revision:null},{url:"assets/installSVGRenderer.9da13352.js",revision:null},{url:"assets/Link.1e8d71a4.css",revision:null},{url:"assets/Link.41330f1c.js",revision:null},{url:"assets/main.db1d78ee.js",revision:null},{url:"assets/Overview.b3659a30.css",revision:null},{url:"assets/Overview.e58e31a5.js",revision:null},{url:"assets/Pane.481584a4.js",revision:null},{url:"assets/Pane.e9b2025f.css",revision:null},{url:"assets/Summary.b7b431e9.css",revision:null},{url:"assets/Summary.de331a4e.js",revision:null},{url:"assets/useMonthNames.ef4409aa.js",revision:null},{url:"assets/useResizeObserver.da677390.js",revision:null},{url:"assets/useThemeStyles.df733ff3.js",revision:null},{url:"index.html",revision:"0f4ad1e2ef623a53ed089e107448ce7a"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
