import{u as j,i as K,a as q,b as z,_ as J}from"./installSVGRenderer.807e477c.js";import{d as w,k,o as u,c as P,n as r,a as t,v as G,u as D,G as L,e as d,I as R,J as S,_ as N,j as X,b as l,f as m,F as f,r as b,x as A,l as Z,g as F,w as U}from"./index.d20cb518.js";import{b as H,c as O,t as Q}from"./budgets.8c854936.js";import{P as W}from"./Pane.92cb1383.js";import{B as V}from"./Button.7cea5157.js";import{_ as I}from"./Currency.vue_vue_type_script_setup_true_lang.06daa50e.js";import{u as Y}from"./useMonthNames.42be5bfb.js";const x=w({__name:"MiniChart",props:{class:null,values:null},setup(o){const y=o;j([K,q,z]);const p=k(()=>y.class),a=k(()=>({xAxis:{type:"category",show:!1},yAxis:{show:!1,min:Math.min(...y.values)},grid:{top:"15%",left:0,bottom:"20%",right:0},series:[{data:y.values,type:"line",smooth:!0,showSymbol:!1,color:"var(--c-primary)"}]}));return(i,_)=>(u(),P(J,{class:r(t(p)),options:t(a)},null,8,["class","options"]))}}),ll=["type","value"],sl=w({__name:"CurrencyCell",props:{modelValue:null,max:{default:Number.MAX_SAFE_INTEGER}},emits:["update:modelValue"],setup(o,{emit:y}){const p=o,a=G(),i=G(!1),{n:_}=D(),h=k(()=>{const s=p.modelValue;return i.value||!s?s||"":_(p.modelValue,"currency")}),C=s=>{y("update:modelValue",Math.max(s,0))},B=s=>{s.key==="-"&&s.preventDefault()},$=()=>{i.value=!0,S(()=>{a.value.select()})},c=s=>{const n=Number(s.target.value);!Number.isNaN(n)&&C(n)};return L(()=>p.modelValue,(s,n)=>{(s!=null?s:0)>p.max&&n!==void 0&&y("update:modelValue",n)}),(s,n)=>(u(),d("input",{ref_key:"input",ref:a,class:r(s.$style.currencyCell),type:i.value?"number":"text",value:t(h),onBlur:n[0]||(n[0]=e=>i.value=!1),onFocus:$,onInput:c,onKeydown:[B,n[1]||(n[1]=R((...e)=>{var v,M;return((v=a.value)==null?void 0:v.blur)&&((M=a.value)==null?void 0:M.blur(...e))},["enter"]))]},null,42,ll))}}),el="pc",nl={currencyCell:el},tl={$style:nl},ol=N(sl,[["__cssModules",tl]]),ul=["value"],al=w({__name:"TextCell",props:{modelValue:null,inline:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:y}){const p=o,a=G(),i=X(),_=G(!1),h=k(()=>[i.textInput,{[i.empty]:!p.modelValue,[i.inline]:p.inline}]),C=()=>{_.value=!0,S(()=>{a.value.select()})},B=$=>{y("update:modelValue",$.target.value)};return($,c)=>(u(),d("span",{class:r(t(h))},[l("input",{ref_key:"input",ref:a,value:o.modelValue,type:"text",onBlur:c[0]||(c[0]=s=>_.value=!1),onFocus:C,onInput:B,onKeydown:c[1]||(c[1]=R((...s)=>{var n,e;return((n=a.value)==null?void 0:n.blur)&&((e=a.value)==null?void 0:e.blur(...s))},["enter"]))},null,40,ul)],2))}}),cl="qc",rl="rc",dl="sc",pl={textInput:cl,inline:rl,empty:dl},il={$style:pl},E=N(al,[["__cssModules",il]]),ml=l("span",null,null,-1),yl=l("span",null,null,-1),_l=l("span",null,null,-1),$l=l("span",null,null,-1),vl=l("span",null,null,-1),hl=l("span",null,null,-1),fl=l("span",null,null,-1),gl=l("span",null,null,-1),Cl=l("span",null,null,-1),Bl=l("span",null,null,-1),kl=l("span",null,null,-1),Ml=l("span",null,null,-1),bl=l("span",null,null,-1),wl=l("span",null,null,-1),Vl=l("span",null,null,-1),Gl=l("span",null,null,-1),Nl=l("span",null,null,-1),Il=w({__name:"BudgetGroup",props:{group:null},setup(o){const y=o,p=new Date().getMonth(),{addBudget:a,setBudgetName:i,setBudgetGroupName:_,setBudget:h,removeBudget:C}=F(),{t:B}=D(),$=G(!0),c=k(()=>{const s=new Array(12).fill(0);for(const{values:n}of y.group.budgets)for(let e=0;e<n.length;e++)s[e]+=n[e];return s});return(s,n)=>(u(),d(f,null,[m(V,{icon:$.value?"arrow-down-s-line":"arrow-right-s-line",color:"dimmed",textual:"",onClick:n[0]||(n[0]=e=>$.value=!$.value)},null,8,["icon"]),m(E,{class:r([s.$style.top,s.$style.start]),"model-value":o.group.name,inline:"","onUpdate:modelValue":n[1]||(n[1]=e=>t(_)(o.group.id,e))},null,8,["class","model-value"]),(u(!0),d(f,null,b(t(c),(e,v)=>(u(),d("span",{key:v,class:r(s.$style.top)},[l("span",null,[m(I,{value:e},null,8,["value"])])],2))),128)),l("span",{class:r(s.$style.top)},[l("span",null,A(t(B)("budget.total")),1)],2),l("span",{class:r([s.$style.top,s.$style.end])},[l("span",null,A(t(B)("budget.average")),1)],2),$.value?(u(),d(f,{key:0},[(u(!0),d(f,null,b(o.group.budgets,(e,v)=>(u(),d(f,{key:e.id+v},[ml,m(V,{color:"dimmed",icon:"close-circle",textual:"",onClick:M=>t(C)(e.id)},null,8,["onClick"]),l("span",{class:r(s.$style.header)},[m(E,{"model-value":e.name,"onUpdate:modelValue":M=>t(i)(e.id,M)},null,8,["model-value","onUpdate:modelValue"])],2),(u(!0),d(f,null,b(e.values,(M,g)=>(u(),d("span",{class:r([s.$style.currencyCell,{[s.$style.even]:v%2,[s.$style.firstRow]:v===0,[s.$style.firstColumn]:g===0,[s.$style.currentMonth]:g===t(p),[s.$style.tlc]:v===0&&g===0,[s.$style.trc]:v===0&&g===11,[s.$style.blc]:v===o.group.budgets.length-1&&g===0,[s.$style.brc]:v===o.group.budgets.length-1&&g===11}]),key:e.id+g},[m(ol,{"model-value":e.values[g],"onUpdate:modelValue":T=>t(h)(e.id,g,T)},null,8,["model-value","onUpdate:modelValue"])],2))),128)),l("span",{class:r(s.$style.meta)},[m(I,{value:t(H)(e.values)},null,8,["value"])],2),l("span",{class:r(s.$style.meta)},[m(I,{value:t(O)(e.values)},null,8,["value"])],2)],64))),128)),yl,m(V,{icon:"plus",class:r(s.$style.addBudgetBtn),textual:"",onClick:n[2]||(n[2]=e=>t(a)(o.group.id)),color:"success"},null,8,["class"]),_l,$l,vl,hl,fl,gl,Cl,Bl,kl,Ml,bl,wl,Vl,Gl,Nl],64)):Z("",!0)],64))}}),Al="Za",Dl="ac",Fl="bc",Ul="cc",El="dc",Pl="ec",Rl="fc",Sl="gc",Tl="hc",jl="ic",Kl="jc",ql="kc",zl="lc",Jl="mc",Ll={header:Al,meta:Dl,top:Fl,start:Ul,end:El,currencyCell:Pl,firstRow:Rl,firstColumn:Sl,currentMonth:Tl,even:jl,tlc:Kl,trc:ql,blc:zl,brc:Jl},Xl={$style:Ll},Zl=N(Il,[["__cssModules",Xl]]),Hl=l("span",null,null,-1),Ol=l("span",null,null,-1),Ql=l("span",null,null,-1),Wl=l("span",null,null,-1),Yl=l("span",null,null,-1),xl=l("span",null,null,-1),ls=l("span",null,null,-1),ss=l("span",null,null,-1),es=l("span",null,null,-1),ns=l("span",null,null,-1),ts=l("span",null,null,-1),os=l("span",null,null,-1),us=l("span",null,null,-1),as=l("span",null,null,-1),cs=l("span",null,null,-1),rs=l("span",null,null,-1),ds=l("span",null,null,-1),ps=l("span",null,null,-1),is=l("span",null,null,-1),ms=l("span",null,null,-1),ys=l("span",null,null,-1),_s=l("span",null,null,-1),$s=l("span",null,null,-1),vs=l("span",null,null,-1),hs=w({__name:"BudgetGroups",props:{type:null},setup(o){const y=o,{state:p,addBudgetGroup:a,removeBudgetGroup:i}=F(),{t:_}=D(),h=new Date().getMonth(),C=k(()=>p[y.type]),B=Y(),$=k(()=>{const c=new Array(12).fill(0);for(const{budgets:s}of C.value)for(const{values:n}of s)for(let e=0;e<n.length;e++)c[e]+=n[e];return c});return(c,s)=>(u(),d("div",{class:r(c.$style.budgetGroups)},[Hl,Ol,Ql,(u(!0),d(f,null,b(t(B),(n,e)=>(u(),d("span",{key:n,class:r([c.$style.month,{[c.$style.current]:e===t(h)}])},[l("span",null,A(n),1)],2))),128)),Wl,Yl,xl,ls,l("span",{class:r(c.$style.sum)},A(t(_)("budget.totals")),3),(u(!0),d(f,null,b(t($),(n,e)=>(u(),d("span",{key:e,class:r(c.$style.sum)},[m(I,{value:n},null,8,["value"])],2))),128)),ss,es,(u(!0),d(f,null,b(t(C),n=>(u(),d(f,{key:n.id},[m(V,{color:"dimmed",icon:"close-circle",textual:"",onClick:e=>t(i)(n.id)},null,8,["onClick"]),m(Zl,{group:n},null,8,["group"])],64))),128)),ns,m(V,{class:r(c.$style.addGroupBtn),icon:"plus",text:t(_)("budget.addGroup"),onClick:s[0]||(s[0]=n=>t(a)(o.type))},null,8,["class","text"]),ts,os,us,as,cs,rs,ds,ps,is,ms,ys,_s,$s,vs],2))}}),fs="fa",gs="ga",Cs="ha",Bs="ia",ks="ja",Ms={budgetGroups:fs,sum:gs,month:Cs,current:Bs,addGroupBtn:ks},bs={$style:Ms},ws=N(hs,[["__cssModules",bs]]),Vs=w({__name:"BudgetPane",props:{title:null,type:null},setup(o){const y=o,{state:p}=F(),a=k(()=>Q(p[y.type])),i=a.value.reduce((_,h)=>_+h,0);return(_,h)=>(u(),P(W,{amount:t(i),title:o.title},{header:U(()=>[m(x,{class:r(_.$style.miniChart),values:t(a)},null,8,["class","values"])]),default:U(()=>[m(ws,{type:o.type},null,8,["type"])]),_:1},8,["amount","title"]))}}),Gs="v",Ns={miniChart:Gs},Is={$style:Ns},Ss=N(Vs,[["__cssModules",Is]]);export{Ss as B};
