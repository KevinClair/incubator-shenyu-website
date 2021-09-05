"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[138],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,d=c["".concat(u,".").concat(h)]||c[h]||m[h]||r;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7069:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:3,title:"Selector Detailed Explanation",keywords:["soul"],description:"detailed explanation of selector and rule"},u=void 0,p={unversionedId:"admin/selector-and-rule",id:"version-2.3.0/admin/selector-and-rule",isDocsHomePage:!1,title:"Selector Detailed Explanation",description:"detailed explanation of selector and rule",source:"@site/versioned_docs/version-2.3.0/admin/selector-and-rule.md",sourceDirName:"admin",slug:"/admin/selector-and-rule",permalink:"/docs/2.3.0/admin/selector-and-rule",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0/admin/selector-and-rule.md",version:"2.3.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Selector Detailed Explanation",keywords:["soul"],description:"detailed explanation of selector and rule"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Plugin Handle Explanation",permalink:"/docs/2.3.0/admin/plugin-handle-explanation"},next:{title:"Environment Setup",permalink:"/docs/2.3.0/users-guide/soul-set-up"}},s=[{value:"Features",id:"features",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Selector",id:"selector",children:[]},{value:"Rule",id:"rule",children:[]},{value:"Condition Explanation",id:"condition-explanation",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selector and rule are the key point of soul gateway, you can manage any request with it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This chapter is mainly focus on the concepts of selector and rule and how to use it."))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One plugin has many selector and a selector has many rules, selector is the first filter of request, and the rule is the final filter."),(0,r.kt)("li",{parentName:"ul"},"Please consider this, it would be perfect when the plugin executes the request until it reached the config value."),(0,r.kt)("li",{parentName:"ul"},"Selector and rule are designed to execute only when the request meet the specific condition."),(0,r.kt)("li",{parentName:"ul"},"Please refer to the previous data structure ",(0,r.kt)("a",{parentName:"li",href:"../design/database-design"},"database design"),".")),(0,r.kt)("h2",{id:"selector"},"Selector"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/selector.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"selector detailed explanation\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name\uff1acreate your selector with a distinguish name."),(0,r.kt)("li",{parentName:"ul"},"type\uff1acustom flow is customized request, full flow is full request. customized request will be handled by the conditions as below, while  full request won't. "),(0,r.kt)("li",{parentName:"ul"},"match method: you can combine these conditions with 'and' , 'or' operators."),(0,r.kt)("li",{parentName:"ul"},"condition\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uri: filter request with uri method and support fuzzy matching (/**)."),(0,r.kt)("li",{parentName:"ul"},"header: filter request with request header."),(0,r.kt)("li",{parentName:"ul"},"query: filter request with query string."),(0,r.kt)("li",{parentName:"ul"},"ip: filter request with your real ip."),(0,r.kt)("li",{parentName:"ul"},"host: filter request with your real host."),(0,r.kt)("li",{parentName:"ul"},"post: not recommend to use."),(0,r.kt)("li",{parentName:"ul"},"condition match:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"match : fuzzy string matching\uff0crecommend to combine with uri\uff0csupport restful matching.\uff08/test/**)."),(0,r.kt)("li",{parentName:"ul"},"= : if the values are the same, then they match."),(0,r.kt)("li",{parentName:"ul"},"regEx : regex matching\uff0cmatch characters in regex expression."),(0,r.kt)("li",{parentName:"ul"},"like : string fuzzy matching."))))),(0,r.kt)("li",{parentName:"ul"},"open option\uff1aonly work with enabled."),(0,r.kt)("li",{parentName:"ul"},"print log\uff1ait will print the matching log with the open option enabled."),(0,r.kt)("li",{parentName:"ul"},"execution order\uff1athe smaller will have high priorty to execute among multi-selectors."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the above picture means: when the prefix of the request uri is ",(0,r.kt)("inlineCode",{parentName:"p"},"/test")," and the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," in",(0,r.kt)("inlineCode",{parentName:"p"},"header")," is",(0,r.kt)("inlineCode",{parentName:"p"},"test"),", it will redirect to this service ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1.1.1:8080"),".   ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"selector advice : combine ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," conditon and ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," prefix\uff08/contextPath\uff09as the first request filter."))),(0,r.kt)("h2",{id:"rule"},"Rule"),(0,r.kt)("p",null," ",(0,r.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/rule.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"when the request was passed by the seletor, then it will be processed by the rule, the final filter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"rule is the final confirmation about how to execute request logically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"rule detailed explanation\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name\uff1acreate your rule with a distinguish name."),(0,r.kt)("li",{parentName:"ul"},"match method: you can combine these conditions with 'and' , 'or' operators."),(0,r.kt)("li",{parentName:"ul"},"condition\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uri: filter request with uri method and support fuzzy matching (/**)."),(0,r.kt)("li",{parentName:"ul"},"header: filter request with request header."),(0,r.kt)("li",{parentName:"ul"},"query: filter request with query string."),(0,r.kt)("li",{parentName:"ul"},"ip: filter request with your real ip."),(0,r.kt)("li",{parentName:"ul"},"host: filter request with your real host."),(0,r.kt)("li",{parentName:"ul"},"post: not recommend to use."),(0,r.kt)("li",{parentName:"ul"},"condition match:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"match : fuzzy string matching\uff0crecommend to combine with uri\uff0csupport restful matching.\uff08/test/**\uff09"),(0,r.kt)("li",{parentName:"ul"},"= : if the values are the same, then they match."),(0,r.kt)("li",{parentName:"ul"},"regEx : regex matching\uff0cmatch characters in regex expression."),(0,r.kt)("li",{parentName:"ul"},"like : string fuzzy matching."))))),(0,r.kt)("li",{parentName:"ul"},"open option\uff1aonly work with enabled."),(0,r.kt)("li",{parentName:"ul"},"print log\uff1ait will print the matching log with the open option enabled."),(0,r.kt)("li",{parentName:"ul"},"execution order\uff1athe smaller will have high priorty to execute among multi-rules."),(0,r.kt)("li",{parentName:"ul"},"handle: different plugin has different execution method, pls refer to the specific one."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"above picture means: when the request ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," equals to ",(0,r.kt)("inlineCode",{parentName:"p"},"/http/order/save"),", it will execute based on this rule\uff0cload strategy is ",(0,r.kt)("inlineCode",{parentName:"p"},"random"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"combine selector means \uff1awhen the request ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"/http/order/save"),", it will be redicted to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.1.1.1:8080")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"random")," method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"rule advice: combine ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," condition with ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," the real ",(0,r.kt)("inlineCode",{parentName:"p"},"uri path")," condition as the final filter.\n"))),(0,r.kt)("h2",{id:"condition-explanation"},"Condition Explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"uri matching \uff08recommend\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"uri matching is based on your request uri, the frontend won't change anything before accessing the gateway.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," filter method is the same with",(0,r.kt)("inlineCode",{parentName:"p"},"springmvc")," fuzzy matching.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"in selector\uff0cwe recommend to match with the prefix of uri, and use the specific path in rule.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"when changing the match method, the matching field name can be filled randomly, but make sure the match value must be correct.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"header matching"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"header matches with your ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," request header value."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"query matching"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it matches the query string in your uri, such as: /test?a=1&&b=2."),(0,r.kt)("li",{parentName:"ul"},"so you can add a new condition, choose query method: a   =  1."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ip matching"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"it matches the ip of the http caller.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"especially in the waf plugin, if you find some ip is unsafe, you can add a match condition with this ip, then it can't access any more.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if you use nginx proxy before soul, you can get the right ip with refering to ",(0,r.kt)("a",{parentName:"p",href:"../developer-guide/custom-parsing-ip-and-host"},"parsing-ip-and-host"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"host matching"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it matches the host of http caller."),(0,r.kt)("li",{parentName:"ul"},"especially in waf plugin, if you find some host is unsafe, you can add a match condition with this host, then it can't access any more."),(0,r.kt)("li",{parentName:"ul"},"if you use nginx proxy before soul, you can get the right ip with refering to ",(0,r.kt)("a",{parentName:"li",href:"../developer-guide/custom-parsing-ip-and-host"},"parsing-ip-and-host")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"post matching"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"not recommend to use.")))))}c.isMDXComponent=!0}}]);