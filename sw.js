if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>n(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_commonjsHelpers.4e997714.js",revision:null},{url:"assets/AnimatedRouterView.ac816475.css",revision:null},{url:"assets/AnimatedRouterView.d1f38bef.js",revision:null},{url:"assets/AsyncComponent.51e01b69.css",revision:null},{url:"assets/AsyncComponent.d8f1a69a.js",revision:null},{url:"assets/BudgetPane.0fb063ed.js",revision:null},{url:"assets/BudgetPane.f58c9651.css",revision:null},{url:"assets/budgets.8c854936.js",revision:null},{url:"assets/Button.0e0585ba.css",revision:null},{url:"assets/Button.9d576977.js",revision:null},{url:"assets/ChartPlaceholder.b4fe9d5f.js",revision:null},{url:"assets/ChartPlaceholder.fc4f2a88.css",revision:null},{url:"assets/Currency.1c18e626.js",revision:null},{url:"assets/Currency.3020d51f.css",revision:null},{url:"assets/Dashboard.033ac333.css",revision:null},{url:"assets/Dashboard.67d4a373.js",revision:null},{url:"assets/DemoData.74ec2d62.js",revision:null},{url:"assets/DevelopmentChart.1f079d7b.js",revision:null},{url:"assets/DevelopmentChart.53b8f9bb.css",revision:null},{url:"assets/DistributionChart.7db206b1.js",revision:null},{url:"assets/DistributionChart.c388c55a.css",revision:null},{url:"assets/Expenses.6b44ad66.js",revision:null},{url:"assets/Frame.19b1b2d0.css",revision:null},{url:"assets/Frame.2d4a647c.js",revision:null},{url:"assets/Icon.d3adfd6c.js",revision:null},{url:"assets/Icon.e5bcafba.css",revision:null},{url:"assets/Income.24511622.js",revision:null},{url:"assets/index.437ff09f.css",revision:null},{url:"assets/index.6c956d2f.js",revision:null},{url:"assets/installSVGRenderer.c163cdbd.js",revision:null},{url:"assets/Link.1c4915e6.css",revision:null},{url:"assets/Link.c050ba1a.js",revision:null},{url:"assets/main.db1d78ee.js",revision:null},{url:"assets/Overview.2d3bd1d3.css",revision:null},{url:"assets/Overview.7e9ebc23.js",revision:null},{url:"assets/Pane.75e469bf.js",revision:null},{url:"assets/Pane.a8e46ee1.css",revision:null},{url:"assets/Summary.943ba810.js",revision:null},{url:"assets/Summary.dcadd370.css",revision:null},{url:"assets/useMonthNames.33441cf0.js",revision:null},{url:"assets/useResizeObserver.c3d0c088.js",revision:null},{url:"assets/useThemeStyles.b16dbd94.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"8685b29892b9f67d70de5eef71c6616b"},{url:"images/icon-maskable-192x192.png",revision:"6f7776c00ea4989bfe9f596a862874ae"},{url:"images/icon-maskable-256x256.png",revision:"edc41cd303465aa068a0883e6c80aaec"},{url:"images/icon-maskable-512x512.png",revision:"219d10726cb1fe2ec4d82ee792cc9171"},{url:"images/icon-maskable-1024x1024.png",revision:"8eafbf60e614f60e20368cecacd6b1dd"},{url:"images/icon-192x192.png",revision:"3f1c9737c3ea2218d437239ed852bd8d"},{url:"images/icon-512x512.png",revision:"8377a3bb55077554423bbbf6ef2df394"},{url:"images/icon-1024x1024.png",revision:"e0256998bec2278de5c61376a4aae7e1"},{url:"manifest.webmanifest",revision:"4a814bd4f2ed2afb3d55d1d072a1f2d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
