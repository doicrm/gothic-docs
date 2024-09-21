"use strict";(self.webpackChunkgothic_docs=self.webpackChunkgothic_docs||[]).push([[738],{7731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(4848),o=t(8453);const i={sidebar_position:3},r="Log",c={id:"zNewExternals/log_externals",title:"Log",description:"Log_GetTopicStatus",source:"@site/docs/zNewExternals/log_externals.md",sourceDirName:"zNewExternals",slug:"/zNewExternals/log_externals",permalink:"/gothic-docs/docs/zNewExternals/log_externals",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zNewExternals/log_externals.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Vob",permalink:"/gothic-docs/docs/zNewExternals/vob_externals"},next:{title:"Pozosta\u0142e",permalink:"/gothic-docs/docs/zNewExternals/misc_externals"}},a={},d=[{value:"<code>Log_GetTopicStatus</code>",id:"log_gettopicstatus",level:2}];function l(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"log",children:"Log"})}),"\n",(0,s.jsx)(n.h2,{id:"log_gettopicstatus",children:(0,s.jsx)(n.code,{children:"Log_GetTopicStatus"})}),"\n",(0,s.jsx)(n.p,{children:"Pobiera status zadania."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"func int Log_GetTopicStatus(var string topicName) {};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parametry"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"var string topicName"}),(0,s.jsx)(n.br,{}),"\n","Unikalny ci\u0105g znak\xf3w u\u017cywany do identyfikacji tematu w dzienniku"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Przyk\u0142ad u\u017cycia",type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"if (Log_GetTopicStatus(Topic_InnosEye) == LOG_SUCCESS)\n{\n    // ...\n};\n"})})}),"\n",(0,s.jsx)(n.p,{children:"Obs\u0142ugiwane statusy:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LOG_RUNNING"})," - zadanie jest w toku"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LOG_SUCCESS"})," - zadanie zako\u0144czy\u0142o si\u0119 sukcesem"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LOG_FAILED"})," - zadanie zako\u0144czy\u0142o si\u0119 pora\u017ck\u0105"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LOG_OBSOLETE"})," - zadanie zosta\u0142o porzucone"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-1"})," - zadanie nie pojawi\u0142o si\u0119 jeszcze w dzienniku zada\u0144"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);