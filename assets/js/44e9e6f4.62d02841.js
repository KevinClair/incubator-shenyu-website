"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1549],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"FAQ",sidebar_position:14,description:"FAQ",author:"xiaoyu",categories:"Apache ShenYu",tags:["community"]},l=void 0,s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"FAQ",source:"@site/community/13-faq.md",sourceDirName:".",slug:"/faq",permalink:"/community/faq",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/13-faq.md",version:"current",lastUpdatedBy:"Qicz",lastUpdatedAt:1640343634,formattedLastUpdatedAt:"12/24/2021",sidebarPosition:14,frontMatter:{title:"FAQ",sidebar_position:14,description:"FAQ",author:"xiaoyu",categories:"Apache ShenYu",tags:["community"]},sidebar:"community",previous:{title:"Community",permalink:"/community/community"},next:{title:"Run Integration Test Locally",permalink:"/community/integration-test"}},u=[{value:"1. In Windows environment,when cloning Apache Shenyu source code through Git, why prompt filename too long and how to solve it?",id:"1-in-windows-environmentwhen-cloning-apache-shenyu-source-code-through-git-why-prompt-filename-too-long-and-how-to-solve-it",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-in-windows-environmentwhen-cloning-apache-shenyu-source-code-through-git-why-prompt-filename-too-long-and-how-to-solve-it"},"1. In Windows environment,when cloning Apache Shenyu source code through Git, why prompt filename too long and how to solve it?"),(0,i.kt)("p",null,"Answer:"),(0,i.kt)("p",null,"To ensure the readability of source code,the Apache Shenyu Coding Specification requires that the naming of classes,methods and variables be literal and avoid abbreviations,which may result in  Some source files have long names. "),(0,i.kt)("p",null,"Since the Git version of Windows is compiled using msys,it uses the old version of Windows Api,limiting the file name to no more than 260 characters. "),(0,i.kt)("p",null,"The solutions are as follows: "),(0,i.kt)("p",null,"Open cmd.exe (you need to add git to environment variables) and execute the following command to allow git supporting log paths: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git config --global core.longpaths true\n")),(0,i.kt)("p",null,"If we use windows 10, also need enable win32 log paths in registry editor or group strategy(need reboot):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Create the registry key ",(0,i.kt)("inlineCode",{parentName:"p"},"HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem LongPathsEnabled")," (Type: REG_DWORD) in registry editor, and be set to 1.\nOr click \"setting\" button in system menu, print \"Group Policy\" to open a new window \"Edit Group Policy\", and then click 'Computer Configuration' > 'Administrative Templates' > 'System' > 'Filesystem', and then turn on 'Enable Win32 long paths' option.")),(0,i.kt)("p",null,"Reference material:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/windows/desktop/FileIO/naming-a-file"},"https://docs.microsoft.com/zh-cn/windows/desktop/FileIO/naming-a-file")))}m.isMDXComponent=!0}}]);