"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9754],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,f=d["".concat(u,".").concat(g)]||d[g]||c[g]||l;return t?i.createElement(f,o(o({ref:n},p),{},{components:t})):i.createElement(f,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var s=2;s<l;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6135:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],a={sidebar_position:7,title:"Sentinel Plugin",keywords:["soul"],description:"sentinel plugin"},u=void 0,s={unversionedId:"plugins/sentinel-plugin",id:"version-2.3.0/plugins/sentinel-plugin",isDocsHomePage:!1,title:"Sentinel Plugin",description:"sentinel plugin",source:"@site/versioned_docs/version-2.3.0/plugins/sentinel-plugin.md",sourceDirName:"plugins",slug:"/plugins/sentinel-plugin",permalink:"/docs/2.3.0/plugins/sentinel-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/plugins/sentinel-plugin.md",version:"2.3.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Sentinel Plugin",keywords:["soul"],description:"sentinel plugin"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Hystrix Plugin",permalink:"/docs/2.3.0/plugins/hystrix-plugin"},next:{title:"Resilience4j Plugin",permalink:"/docs/2.3.0/plugins/resilience4j-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Usage",id:"plugin-usage",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"explanation"},"Explanation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sentinel is one of the options that supports flow control and circuit breaking."),(0,l.kt)("li",{parentName:"ul"},"Sentinel supports flow control and circuit breaking functions for gateway.")),(0,l.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e  plugin management --\x3e ",(0,l.kt)("inlineCode",{parentName:"li"},"sentinel")," set to enable."),(0,l.kt)("li",{parentName:"ul"},"If you don't want to use it, please close the plugin in ",(0,l.kt)("inlineCode",{parentName:"li"},"soul-admin"),".")),(0,l.kt)("h2",{id:"plugin-usage"},"Plugin Usage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Introducing the follow supports to the pom.xml file of soul project.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul sentinel plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-sentinel</artifactId>\n       <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul sentinel plugin end--\x3e\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,l.kt)("a",{parentName:"li",href:"../admin/selector-and-rule"},"selector")),(0,l.kt)("li",{parentName:"ul"},"Sentinel Processing Details",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flowRuleEnable (1 or 0)"),": whether enable sentinel flow control function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flowRuleControlBehavior"),": effect(reject directly/ queue/ slow start up), it do not support flow control by invocation relation. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flowRuleGrade"),": type of current limit threshold(QPS or Thread Count)\u3002\n"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"degradeRuleEnable (1 or 0)"),": whether enable circuit breaking function of ",(0,l.kt)("inlineCode",{parentName:"li"},"sentinel"),".\n"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"degradeRuleGrade"),": circuit breaker strategy, support RT of seconds level/ Error Ratio of seconds level/ Error Count of minutes level strategy.\n"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"degradeRuleCount"),": threshold.\n"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"degradeRuleTimeWindow"),": time of degrading(unit: second).\n"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fallbackUri"),": degraded uri after circuit breaking.")))))}d.isMDXComponent=!0}}]);