"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1136],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(y,l(l({ref:t},s),{},{components:n})):o.createElement(y,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6600:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:1,title:"Local Deployment",keywords:["Deployment"],description:"Local Deployment"},p=void 0,c={unversionedId:"deployment/deployment-local",id:"version-2.4.0/deployment/deployment-local",isDocsHomePage:!1,title:"Local Deployment",description:"Local Deployment",source:"@site/versioned_docs/version-2.4.0/deployment/deployment-local.md",sourceDirName:"deployment",slug:"/deployment/deployment-local",permalink:"/docs/deployment/deployment-local",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/deployment/deployment-local.md",version:"2.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Local Deployment",keywords:["Deployment"],description:"Local Deployment"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"SPI Design",permalink:"/docs/design/spi-design"},next:{title:"Binary Packages Deployment",permalink:"/docs/deployment/deployment-package"}},s=[{value:"Environmental preparation",id:"environmental-preparation",children:[]},{value:"Download the compiled code",id:"download-the-compiled-code",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article introduces how to start the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway in the local environment."),(0,a.kt)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install JDK1.8+ locally"),(0,a.kt)("li",{parentName:"ul"},"Install Git locally"),(0,a.kt)("li",{parentName:"ul"},"Install Maven locally"),(0,a.kt)("li",{parentName:"ul"},"Choose a development tool, such as IDEA")),(0,a.kt)("h3",{id:"download-the-compiled-code"},"Download the compiled code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> git clone https://github.com/apache/incubator-shenyu.git\n> cd shenyu\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"use the development tool to start ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.admin.ShenyuAdminBootstrap"),"\uff0cVisit http://localhost:9095, the default username and password are: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"123456")," respectively."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," to store, set the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"--spring.profiles.active = h2"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," for storage, modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml"),".")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"use the development tool to start ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.bootstrap.ShenyuBootstrapApplication"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If using the system of Windows, you may encounter a Git error with ",(0,a.kt)("inlineCode",{parentName:"p"},"filename too long"),". You can run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git config --system core.longpaths true")," to solve this problem."))))}m.isMDXComponent=!0}}]);