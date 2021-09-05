"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9768],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),m=i,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],p={title:"Rewrite\u63d2\u4ef6",keywords:["rewrite"],description:"rewrite\u63d2\u4ef6"},u=void 0,o={unversionedId:"plugin-center/http-handle/rewrite-plugin",id:"version-2.4.0/plugin-center/http-handle/rewrite-plugin",isDocsHomePage:!1,title:"Rewrite\u63d2\u4ef6",description:"rewrite\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/plugin-center/http-handle/rewrite-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/rewrite-plugin",permalink:"/zh/docs/plugin-center/http-handle/rewrite-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/plugin-center/http-handle/rewrite-plugin.md",version:"2.4.0",frontMatter:{title:"Rewrite\u63d2\u4ef6",keywords:["rewrite"],description:"rewrite\u63d2\u4ef6"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Request\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/http-handle/request-plugin"},next:{title:"WebSocket\u4ee3\u7406",permalink:"/zh/docs/plugin-center/http-handle/websocket-plugin"}},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u573a\u666f",id:"\u573a\u666f",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u5728\u5bf9\u76ee\u6807\u670d\u52a1\u8fdb\u884c\u4ee3\u7406\u8c03\u7528\u7684\u65f6\u5019\uff0c\u8fd8\u5bb9\u8bb8\u7528\u6237\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"rewrite")," \u63d2\u4ef6\u6765\u91cd\u5199\u8bf7\u6c42\u8def\u5f84 \u3002")),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," \u7684\u652f\u6301\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u4e0d\u9700\u8981\uff0c\u53ef\u4ee5\u628a\u63d2\u4ef6\u7981\u7528\u3002"))),(0,a.kt)("img",{src:"/img/shenyu/plugin/rewrite/rewrite_open.png",width:"80%",height:"80%"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu rewrite plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-rewrite</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu rewrite plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u624d\u4f1a\u8fdb\u884c\u91cd\u5199\u3002")))),(0,a.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u987e\u540d\u601d\u4e49\uff0c\u91cd\u5199\u63d2\u4ef6\u5c31\u662f\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," \u7684\u91cd\u65b0\u5b9a\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u5339\u914d\u5230\u8bf7\u6c42\u540e\uff0c\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684\u8def\u5f84\uff0c\u90a3\u4e48\u81ea\u5b9a\u4e49\u7684\u8def\u5f84\u5c31\u4f1a\u8986\u76d6\u4e4b\u524d\u7684\u771f\u5b9e\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u4f7f\u7528\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u8def\u5f84\u3002")))}d.isMDXComponent=!0}}]);