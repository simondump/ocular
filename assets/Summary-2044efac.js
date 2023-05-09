import{d as T,e as r,b as n,x as l,n as t,m as I,o as a,_ as w,u as C,k as v,c as A,w as F,r as f,a as s,F as h,g as B,f as M,E as L,G as P}from"./index-178b91a7.js";import{A as z}from"./AsyncComponent-90626fb2.js";import{b as S,c as k,f as H,s as J,a as O,t as D}from"./budgets-e575fe6c.js";import{u as N}from"./useMonthNames-3c17fd06.js";const Q=T({__name:"SummaryTable",props:{title:null},setup(y){return(d,m)=>(a(),r("div",{class:t(d.$style.summaryTable)},[n("h1",{class:t(d.$style.title)},l(y.title),3),n("div",{class:t(d.$style.table)},[I(d.$slots,"default")],2)],2))}}),R="__",j="a_",q="b_",K={summaryTable:R,title:j,table:q},U={$style:K},V=w(Q,[["__cssModules",U]]),W=n("span",null,null,-1),X=T({__name:"GroupsSummaryTable",props:{class:null,groups:null,title:null},setup(y){const d=y,{t:m,n:u}=C(),{isCurrentMonth:$}=B(),g=N(),p=v(()=>H(d.groups));return(i,e)=>(a(),A(V,{title:y.title},{default:F(()=>[n("div",{class:t(i.$style.table)},[W,(a(!0),r(h,null,f(s(g),(b,o)=>(a(),r("span",{class:t([i.$style.bold,{[i.$style.currentMonth]:s($)(o)}]),key:b},l(b),3))),128)),n("span",{class:t(i.$style.bold)},l(s(m)("budget.total")),3),n("span",{class:t(i.$style.bold)},l(s(m)("budget.average")),3),(a(!0),r(h,null,f(s(p),(b,o)=>(a(),r(h,{key:b.id},[n("span",{class:t(i.$style.bold)},l(b.name),3),(a(!0),r(h,null,f(b.totals,(c,E)=>(a(),r("span",{class:t({[i.$style.current]:s($)(E),[i.$style.first]:o===0,[i.$style.last]:o===s(p).length-1}),key:E},l(s(u)(c,"currency")),3))),128)),n("span",{class:t(i.$style.bold)},l(s(u)(s(S)(b.totals),"currency")),3),n("span",{class:t(i.$style.bold)},l(s(u)(s(k)(b.totals),"currency")),3)],64))),128))],2)]),_:1},8,["title"]))}}),Y="s",Z="t",_="u",x="v",ss="w",es="x",ts="y",ls={table:Y,bold:Z,muted:_,currentMonth:x,current:ss,first:es,last:ts},ns={$style:ls},G=w(X,[["__cssModules",ns]]),as=n("span",null,null,-1),rs=n("span",null,null,-1),os=n("span",null,null,-1),us=T({__name:"TotalsSummaryTable",props:{income:{default:()=>[]},expenses:{default:()=>[]},title:null},setup(y){const d=y,{t:m,n:u}=C(),{isCurrentMonth:$}=B(),g=N(),p=v(()=>J(d.income,d.expenses)),i=v(()=>O(p.value));return(e,b)=>(a(),A(V,{title:y.title},{default:F(()=>[n("div",{class:t(e.$style.table)},[as,(a(!0),r(h,null,f(s(g),(o,c)=>(a(),r("span",{class:t([e.$style.bold,{[e.$style.currentMonth]:s($)(c)}]),key:o},l(o),3))),128)),n("span",{class:t(e.$style.bold)},l(s(m)("budget.total")),3),n("span",{class:t(e.$style.bold)},l(s(m)("budget.average")),3),n("span",{class:t([e.$style.bold,e.$style.muted])},l(s(m)("dashboard.income")),3),(a(!0),r(h,null,f(y.income,(o,c)=>(a(),r("span",{class:t([e.$style.muted,e.$style.first,e.$style.income,{[e.$style.current]:s($)(c)}]),key:c},l(s(u)(o,"currency")),3))),128)),n("span",{class:t(e.$style.muted)},l(s(u)(s(S)(y.income),"currency")),3),n("span",{class:t(e.$style.muted)},l(s(u)(s(k)(y.income),"currency")),3),n("span",{class:t([e.$style.bold,e.$style.muted])},l(s(m)("dashboard.expenses")),3),(a(!0),r(h,null,f(y.expenses,(o,c)=>(a(),r("span",{class:t([e.$style.muted,e.$style.expense,{[e.$style.current]:s($)(c)}]),key:c},l(s(u)(o,"currency")),3))),128)),n("span",{class:t(e.$style.muted)},l(s(u)(s(S)(y.expenses),"currency")),3),n("span",{class:t(e.$style.muted)},l(s(u)(s(k)(y.expenses),"currency")),3),n("span",{class:t([e.$style.bold,e.$style.muted])},l(s(m)("dashboard.netSavings")),3),(a(!0),r(h,null,f(s(p),(o,c)=>(a(),r("span",{class:t([e.$style.muted,{[e.$style.current]:s($)(c),[e.$style.overdrawn]:o<0}]),key:c},l(s(u)(o,"currency")),3))),128)),n("span",{class:t(e.$style.muted)},l(s(u)(s(S)(s(p)),"currency")),3),n("span",{class:t(e.$style.muted)},l(s(u)(s(k)(s(p)),"currency")),3),n("span",{class:t(e.$style.bold)},l(s(m)("dashboard.endingBalance")),3),(a(!0),r(h,null,f(s(i),(o,c)=>(a(),r("span",{class:t([e.$style.bold,e.$style.last,{[e.$style.current]:s($)(c),[e.$style.overdrawn]:o<0}]),key:c},l(s(u)(o,"currency")),3))),128)),rs,os],2)]),_:1},8,["title"]))}}),cs="C",ys="D",ds="E",ms="F",is="G",$s="H",ps="I",bs="J",hs={table:cs,bold:ys,muted:ds,currentMonth:ms,current:is,first:$s,last:ps,overdrawn:bs},fs={$style:hs},gs=w(us,[["__cssModules",fs]]),vs=T({__name:"Summary",setup(y){const{state:d}=B(),{t:m}=C(),u=P(),$=v(()=>D(d.income)),g=v(()=>D(d.expenses));return(p,i)=>(a(),r("div",{class:t(p.$style.summary)},[M(z,{show:s(u)!=="mobile",class:t(p.$style.chart),import:()=>L(()=>import("./DevelopmentChart-12a5acc1.js"),["assets/DevelopmentChart-12a5acc1.js","assets/ChartPlaceholder-82ad3de2.js","assets/Icon-402a6697.js","assets/index-178b91a7.js","assets/index-437ff09f.css","assets/Icon-a5d1de2d.css","assets/ChartPlaceholder-be4a547b.css","assets/installSVGRenderer-5d30a377.js","assets/useResizeObserver-fee20e3a.js","assets/useMonthNames-3c17fd06.js","assets/budgets-e575fe6c.js","assets/DevelopmentChart-f3e3143e.css"])},null,8,["show","class","import"]),M(gs,{title:s(m)("dashboard.summary"),income:s($),expenses:s(g)},null,8,["title","income","expenses"]),M(G,{title:s(m)("dashboard.income"),groups:s(d).income},null,8,["title","groups"]),M(G,{title:s(m)("dashboard.expenses"),groups:s(d).expenses},null,8,["title","groups"])],2))}}),Ms="d",Ss="e",ks={summary:Ms,chart:Ss},Ts={$style:ks},Ds=w(vs,[["__cssModules",Ts]]);export{Ds as default};
