"use strict";(self.webpackChunkgothic_docs=self.webpackChunkgothic_docs||[]).push([[126],{586:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=o(4848),r=o(8453);const i={sidebar_position:2},a="Vob",l={id:"zNewExternals/vob_externals",title:"Vob",description:"Wld_InsertVob",source:"@site/docs/zNewExternals/vob_externals.md",sourceDirName:"zNewExternals",slug:"/zNewExternals/vob_externals",permalink:"/gothic-docs/docs/zNewExternals/vob_externals",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zNewExternals/vob_externals.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"NPC",permalink:"/gothic-docs/docs/zNewExternals/npc_externals"},next:{title:"Log",permalink:"/gothic-docs/docs/zNewExternals/log_externals"}},t={},c=[{value:"<code>Wld_InsertVob</code>",id:"wld_insertvob",level:2},{value:"<code>Wld_InsertVobPos</code>",id:"wld_insertvobpos",level:2},{value:"<code>Wld_RemoveVob</code>",id:"wld_removevob",level:2},{value:"<code>Wld_RotateVob</code>",id:"wld_rotatevob",level:2},{value:"<code>Vob_SetVisual</code>",id:"vob_setvisual",level:2},{value:"<code>Vob_ClearVisual</code>",id:"vob_clearvisual",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"vob",children:"Vob"})}),"\n",(0,s.jsx)(n.h2,{id:"wld_insertvob",children:(0,s.jsx)(n.code,{children:"Wld_InsertVob"})}),"\n",(0,s.jsx)(n.p,{children:"Tworzy vob na waypoincie lub freepoincie w \u015bwiecie."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"func void Wld_InsertVob(var string vobName, var string pointName, var string visualName, var int isCollDet, var int isSetOnFloor) {};\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'Wld_InsertVob("DEMONPORTAL01", "FP_DEMONPORTAL_01", "ORGANICFOG.PFX", FALSE, FALSE);\n'})})}),"\n",(0,s.jsx)(n.h2,{id:"wld_insertvobpos",children:(0,s.jsx)(n.code,{children:"Wld_InsertVobPos"})}),"\n",(0,s.jsx)(n.p,{children:"Tworzy vob na konkretnych wsp\xf3\u0142rz\u0119dnych w \u015bwiecie."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"func void Wld_InsertVobPos(var string vobName, var int posX, var int posY, var int posZ, var string visualName, var int isCollDet, var int isSetOnFloor) {};\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'Wld_InsertVobPos("DEMONPORTAL01", 29948, 4630, -16982, "ORGANICFOG.PFX", FALSE, FALSE);\n'})})}),"\n",(0,s.jsx)(n.h2,{id:"wld_removevob",children:(0,s.jsx)(n.code,{children:"Wld_RemoveVob"})}),"\n",(0,s.jsx)(n.p,{children:"Usuwa vob o konkretnej nazwie ze \u015bwiata."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"func int Wld_RemoveVob(var string vobName) {};\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'Wld_RemoveVob("DEMONPORTAL01");\n'})})}),"\n",(0,s.jsx)(n.h2,{id:"wld_rotatevob",children:(0,s.jsx)(n.code,{children:"Wld_RotateVob"})}),"\n",(0,s.jsx)(n.p,{children:"S\u0142u\u017cy do obracania voba o konkretnej nazwie w \u015bwiecie gry."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"func void Wld_RotateVob(var string vobName, var int posX, var int posY, var int posZ) {};\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'Wld_RotateVob("DEMONPORTAL01", 180, 360, 90);\n'})})}),"\n",(0,s.jsx)(n.h2,{id:"vob_setvisual",children:(0,s.jsx)(n.code,{children:"Vob_SetVisual"})}),"\n",(0,s.jsx)(n.p,{children:"Zmienia wygl\u0105d vob o konkretnej nazwie w \u015bwiecie."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"func void Vob_SetVisual(var string vobName, var string visualName) {};\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'Vob_SetVisual("DEMONPORTAL01", "FIRE.PFX");\n'})})}),"\n",(0,s.jsx)(n.h2,{id:"vob_clearvisual",children:(0,s.jsx)(n.code,{children:"Vob_ClearVisual"})}),"\n",(0,s.jsx)(n.p,{children:"Usuwa wygl\u0105d vob o konkretnej nazwie w \u015bwiecie."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"func void Vob_ClearVisual(var string vobName) {};\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'Vob_ClearVisual("DEMONPORTAL01");\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>l});var s=o(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);