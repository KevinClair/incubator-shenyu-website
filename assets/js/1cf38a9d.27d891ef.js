"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6083],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),g=i,h=s["".concat(u,".").concat(g)]||s[g]||d[g]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77017:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},u=void 0,c={unversionedId:"plugin-center/http-handle/redirect-plugin",id:"plugin-center/http-handle/redirect-plugin",isDocsHomePage:!1,title:"Redirect Plugin",description:"redirect plugin",source:"@site/docs/plugin-center/http-handle/redirect-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/redirect-plugin",permalink:"/docs/next/plugin-center/http-handle/redirect-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/http-handle/redirect-plugin.md",version:"current",frontMatter:{title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},sidebar:"tutorialSidebar",previous:{title:"Param-mapping Plugin",permalink:"/docs/next/plugin-center/http-handle/param-mapping-plugin"},next:{title:"RequestPlugin",permalink:"/docs/next/plugin-center/http-handle/request-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Maven Dependency",id:"maven-dependency",children:[]},{value:"Situation",id:"situation",children:[{value:"Redirect",id:"redirect",children:[]},{value:"Gateway&#39;s own interface forwarding",id:"gateways-own-interface-forwarding",children:[]}]}],d={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("p",null,"When the Apache ShenYu gateway makes proxy calls to the target service, it also allows users to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect")," plugin to redirect requests."),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"redirect")," , set to enable."),(0,a.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background."),(0,a.kt)("li",{parentName:"ul"},"Selectors and rules, only matching requests will be forwarded and redirected, please see: ",(0,a.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," .")),(0,a.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-enable-en.png",width:"70%",height:"60%"}),(0,a.kt)("h2",{id:"maven-dependency"},"Maven Dependency"),(0,a.kt)("p",null,"Add the plugin dependency in the pom.xml file of the shenyu-bootstrap project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu redirect plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-redirect</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu redirect plugin end--\x3e\n")),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As the name suggests, the ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect")," plugin is to re-forward and redirect ",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),".")),(0,a.kt)("h3",{id:"redirect"},"Redirect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When we configure a custom path in ",(0,a.kt)("inlineCode",{parentName:"li"},"Rule"),", it should be a reachable service path."),(0,a.kt)("li",{parentName:"ul"},"When the request is matched, the ",(0,a.kt)("inlineCode",{parentName:"li"},"ShenYu Gateway")," will perform the ",(0,a.kt)("inlineCode",{parentName:"li"},"308")," service jump according to the customized path.")),(0,a.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-rule-en.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"gateways-own-interface-forwarding"},"Gateway's own interface forwarding"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When the matching rules are met, the service will use the ",(0,a.kt)("inlineCode",{parentName:"li"},"DispatcherHandler")," internal interface for forwarding."),(0,a.kt)("li",{parentName:"ul"},"To implement the gateway's own interface forwarding, we need to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," as the prefix in the configuration path. The specific configuration is as shown in the figure below.")),(0,a.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-forward-rule-en.png",width:"70%",height:"60%"}))}s.isMDXComponent=!0}}]);