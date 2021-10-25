"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7689],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,c=g["".concat(u,".").concat(m)]||g[m]||s[m]||l;return t?i.createElement(c,r(r({ref:n},d),{},{components:t})):i.createElement(c,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},437:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var i=t(87462),a=t(63366),l=(t(67294),t(3905)),r=["components"],o={title:"Plugin Config",keywords:["plugin"],description:"plugin handle explanation"},u=void 0,p={unversionedId:"user-guide/admin-usage/plugin-handle-explanation",id:"version-2.4.0/user-guide/admin-usage/plugin-handle-explanation",isDocsHomePage:!1,title:"Plugin Config",description:"plugin handle explanation",source:"@site/versioned_docs/version-2.4.0/user-guide/admin-usage/plugin-handle-explanation.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/plugin-handle-explanation",permalink:"/docs/2.4.0/user-guide/admin-usage/plugin-handle-explanation",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/user-guide/admin-usage/plugin-handle-explanation.md",version:"2.4.0",frontMatter:{title:"Plugin Config",keywords:["plugin"],description:"plugin handle explanation"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Dict Management",permalink:"/docs/2.4.0/user-guide/admin-usage/dictionary-management"},next:{title:"Selector And Rule Config",permalink:"/docs/2.4.0/user-guide/admin-usage/selector-and-rule"}},d=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin management",id:"plugin-management",children:[]},{value:"Plugin handle management",id:"plugin-handle-management",children:[]}],s={toc:d};function g(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"explanation"},"Explanation"),(0,l.kt)("p",null,"This document will introduce the use of plugins in the ",(0,l.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," , including plugin management and plugin handle management."),(0,l.kt)("p",null,"Please refer to the ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment")," document, choose a way to start ",(0,l.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),". For example, ",(0,l.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"local deployment"),". After startup, visit ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:9095"),", the default username and password are: ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"123456")," ."),(0,l.kt)("h2",{id:"plugin-management"},"Plugin management"),(0,l.kt)("p",null,"In the plugin management, you can manage all plugins in a unified manner, such as turning off or turning on plugins:"),(0,l.kt)("img",{src:"/img/shenyu/basicConfig/pluginHandle/plugin_open_en.jpg",width:"80%",height:"80%"}),(0,l.kt)("p",null,"You can also set configuration information for some plugins, such as setting a registry for ",(0,l.kt)("inlineCode",{parentName:"p"},"Dubbo"),"  plugin:"),(0,l.kt)("img",{src:"/img/shenyu/basicConfig/pluginHandle/plugin_config_en.jpg",width:"80%",height:"80%"}),(0,l.kt)("h2",{id:"plugin-handle-management"},"Plugin handle management"),(0,l.kt)("p",null,"In plugin handle management, you can add ",(0,l.kt)("inlineCode",{parentName:"p"},"handle")," fields to plugin, selector, and rule."),(0,l.kt)("p",null,"For example, add a string type field ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," and a digital type field ",(0,l.kt)("inlineCode",{parentName:"p"},"timeout")," to the rule list of the ",(0,l.kt)("inlineCode",{parentName:"p"},"SpringCloud")," plugin."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"add/edit the ",(0,l.kt)("inlineCode",{parentName:"li"},"handle")," field in the ",(0,l.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"-> BasicConfig -> PluginHandle :")),(0,l.kt)("img",{src:"/img/shenyu/basicConfig/pluginHandle/plugin_handle_field_config_en.jpg",width:"80%",height:"80%"}),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Fill in the field information:")),(0,l.kt)("img",{src:"/img/shenyu/basicConfig/pluginHandle/plugin_handle_add_en.jpg",width:"80%",height:"80%"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PluginName: Drop down to select which plugin needs to add the ",(0,l.kt)("inlineCode",{parentName:"li"},"handle")," field."),(0,l.kt)("li",{parentName:"ul"},"Field: Add the name of the field."),(0,l.kt)("li",{parentName:"ul"},"Describe: Field description."),(0,l.kt)("li",{parentName:"ul"},"DataType: Field data type.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If the ",(0,l.kt)("inlineCode",{parentName:"li"},"DropDown")," is selected, the drop-down selection of the input box on the rule addition page is to go to the dictionary table to find all the available options through the field name to select, so you need to config the selection in ",(0,l.kt)("a",{parentName:"li",href:"./dictionary-management"},"Dictionary Management"),"."))),(0,l.kt)("li",{parentName:"ul"},"FieldType: This field belongs to selector, rule or plugin."),(0,l.kt)("li",{parentName:"ul"},"Sort: Sequence number."),(0,l.kt)("li",{parentName:"ul"},"Required: Is this field required."),(0,l.kt)("li",{parentName:"ul"},"DefaultValue: Specify a default value for this field."),(0,l.kt)("li",{parentName:"ul"},"Placeholder: The message that appears when the user fills in the field."),(0,l.kt)("li",{parentName:"ul"},"Rule (RegExp): The verification rule when the user fills in the field\u3002")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"When adding a rule in the PluginList -> rpc proxy -> ",(0,l.kt)("inlineCode",{parentName:"li"},"SpringCloud")," -> you can enter ",(0,l.kt)("inlineCode",{parentName:"li"},"path")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," :")),(0,l.kt)("img",{src:"/img/shenyu/basicConfig/pluginHandle/plugin_handle_setting_plugin_rule_en.jpg",width:"80%",height:"80%"}))}g.isMDXComponent=!0}}]);