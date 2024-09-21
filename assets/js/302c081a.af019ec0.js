"use strict";(self.webpackChunkgothic_docs=self.webpackChunkgothic_docs||[]).push([[133],{4170:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=c(4848),r=c(8453);const i={sidebar_position:1},s="NPC",a={id:"zNewExternals/npc_externals",title:"NPC",description:"Npc_GetRoutineName",source:"@site/docs/zNewExternals/npc_externals.md",sourceDirName:"zNewExternals",slug:"/zNewExternals/npc_externals",permalink:"/gothic-docs/docs/zNewExternals/npc_externals",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zNewExternals/npc_externals.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"zNewExternals",permalink:"/gothic-docs/docs/category/znewexternals"},next:{title:"Vob",permalink:"/gothic-docs/docs/zNewExternals/vob_externals"}},o={},d=[{value:"<code>Npc_GetRoutineName</code>",id:"npc_getroutinename",level:2},{value:"<code>Npc_IsInRoutineName</code>",id:"npc_isinroutinename",level:2},{value:"<code>Npc_GetSlotItem</code>",id:"npc_getslotitem",level:2},{value:"<code>Npc_EquipItem</code>",id:"npc_equipitem",level:2},{value:"<code>Npc_IsInWorld</code>",id:"npc_isinworld",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"npc",children:"NPC"})}),"\n",(0,t.jsx)(n.h2,{id:"npc_getroutinename",children:(0,t.jsx)(n.code,{children:"Npc_GetRoutineName"})}),"\n",(0,t.jsxs)(n.p,{children:["Pobiera nazw\u0119 aktualnej rutyny NPC.\n",(0,t.jsx)(n.strong,{children:"WiP - nie dzia\u0142a poprawnie!"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"func string Npc_GetRoutineName(var C_NPC npc) {};\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"Print(Npc_GetRoutineName(self));\n"})})}),"\n",(0,t.jsx)(n.h2,{id:"npc_isinroutinename",children:(0,t.jsx)(n.code,{children:"Npc_IsInRoutineName"})}),"\n",(0,t.jsx)(n.p,{children:"Sprawdza, czy NPC znajduje si\u0119 w rutynie o podanej nazwie."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"func int Npc_IsInRoutineName(var C_NPC npc, var string routineName) {};\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'if (Npc_IsInRoutineName(self, "Start"))\n{\n    // ...\n};\n'})})}),"\n",(0,t.jsx)(n.h2,{id:"npc_getslotitem",children:(0,t.jsx)(n.code,{children:"Npc_GetSlotItem"})}),"\n",(0,t.jsx)(n.p,{children:"Sprawdza, co znajduje si\u0119 w konkretnym slocie modelu NPC."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"func int Npc_GetSlotItem(var C_NPC npc, var string slotName) {};\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var C_Item torch; torch = Npc_GetSlotItem(slf, "ZS_LEFTHAND");\n\nif (!Hlp_IsValidItem(torch)) { return FALSE; };\n\nreturn Hlp_IsItem(torch, ItLsTorchBurning) || Hlp_IsItem(torch, ItLsTorchBurned);\n'})})}),"\n",(0,t.jsx)(n.h2,{id:"npc_equipitem",children:(0,t.jsx)(n.code,{children:"Npc_EquipItem"})}),"\n",(0,t.jsx)(n.p,{children:"Wyekwipowanie przez NPC dowolnego przedmiotu."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"func int Npc_EquipItem(var C_NPC npc, var C_Item itm) {};\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"Npc_EquipItem(self, ItLsTorch);\n"})})}),"\n",(0,t.jsx)(n.h2,{id:"npc_isinworld",children:(0,t.jsx)(n.code,{children:"Npc_IsInWorld"})}),"\n",(0,t.jsxs)(n.p,{children:["Sprawdza, czy NPC przebywa w \u015bwiecie. Alternatywa dla ",(0,t.jsx)(n.code,{children:"Npc_IsDead"}),". Czasem mo\u017ce zwr\xf3ci\u0107 z\u0142\u0105 warto\u015b\u0107."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"func int Npc_IsInWorld(var C_NPC npc) {};\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"if (Npc_IsInWorld(self))\n{\n    // ...\n};\n"})})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>s,x:()=>a});var t=c(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);