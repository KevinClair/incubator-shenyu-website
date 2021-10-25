"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4556],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),g=m(a),N=r,c=g["".concat(o,".").concat(N)]||g[N]||k[N]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},86877:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return g}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"Gateway Property Config",keywords:["Config"],description:"Gateway Property Config"},o=void 0,m={unversionedId:"user-guide/property-config/gateway-property-config",id:"version-2.4.0/user-guide/property-config/gateway-property-config",isDocsHomePage:!1,title:"Gateway Property Config",description:"Gateway Property Config",source:"@site/versioned_docs/version-2.4.0/user-guide/property-config/gateway-property-config.md",sourceDirName:"user-guide/property-config",slug:"/user-guide/property-config/gateway-property-config",permalink:"/docs/2.4.0/user-guide/property-config/gateway-property-config",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/user-guide/property-config/gateway-property-config.md",version:"2.4.0",frontMatter:{title:"Gateway Property Config",keywords:["Config"],description:"Gateway Property Config"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Client Property Config",permalink:"/docs/2.4.0/user-guide/property-config/client-property-config"},next:{title:"Dubbo Proxy",permalink:"/docs/2.4.0/user-guide/dubbo-proxy"}},d=[{value:"Property Config",id:"property-config",children:[]},{value:"Property Detail",id:"property-detail",children:[]}],k={toc:d};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This paper mainly explains how to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," properties on the gateway side."),(0,l.kt)("img",{src:"/img/shenyu/config/shenyu_gateway_application_config.jpg",width:"80%",height:"70%"}),(0,l.kt)("h3",{id:"property-config"},"Property Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n#  httpclient:\n#    strategy: webClient\n#    connectTimeout: 45000\n#    readTimeout: 3000\n#    writeTimeout: 3000\n#    wiretap: false\n#    pool:\n#      type: ELASTIC\n#      name: proxy\n#      maxConnections: 16\n#      acquireTimeout: 45000\n#    proxy:\n#      host:\n#      port:\n#      username:\n#      password:\n#      nonProxyHostsPattern:\n#    ssl:\n#      useInsecureTrustManager: false\n#      trustedX509Certificates:\n#      handshakeTimeout:\n#      closeNotifyFlushTimeout:\n#      closeNotifyReadTimeout:\n#      defaultConfigurationType:\n  file:\n    enabled: true\n  cross:\n    enabled: true\n  exclude:\n    enabled: false\n    paths:\n      - /favicon.ico\n  sync:\n    websocket:\n      urls: ws://localhost:9095/websocket\n#    zookeeper:\n#      url: localhost:2181\n#      sessionTimeout: 5000\n#      connectionTimeout: 2000\n#    http:\n#      url: http://localhost:9095\n#    nacos:\n#      url: localhost:8848\n#      namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n#      username:\n#      password:\n#      acm:\n#        enabled: false\n#        endpoint: acm.aliyun.com\n#        namespace:\n#        accessKey:\n#        secretKey:\n#    etcd:\n#      url: http://localhost:2379\n#    consul:\n#      url: http://localhost:8500\n#      waitTime: 1000\n#      watchDelay: 1000\n")),(0,l.kt)("h3",{id:"property-detail"},"Property Detail"),(0,l.kt)("h5",{id:"shenyuhttpclient-config"},"shenyu.httpclient config"),(0,l.kt)("p",null,"This is the HttpClient configuration used to send proxy requests after proxying the Http and SpringCloud protocols in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ShenYu")," gateway."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"strategy"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"webcwebClient"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The strategy of httpClientPlugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connectTimeout"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"45000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Connection timeout (millisecond), the default value is 45000.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"readTimeout"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Read timeout (millisecond), the default value is 3000.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"writeTimeout"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Write timeout (millisecond), the default value is 3000.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"wiretap"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enables wiretap debugging for Netty HttpClient, the default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pool"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"HttpClient connection pool config")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"proxy"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"HttpClient proxy config")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ssl"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"HttpClient ssl config")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pool")," config")),(0,l.kt)("p",null,"HttpClient connection pool configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ELASTIC"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Type of pool for HttpClient to use, defaults to ELASTIC.",(0,l.kt)("br",null)," - ELASTIC: The connection pool can be cached and grown on demand",(0,l.kt)("br",null),"- FIXED: The connection pool cache and reuse a fixed maximum The number of connections.",(0,l.kt)("br",null),"- DISABLED: The connection pool will always create a new connection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"proxy"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The channel pool map name, defaults to proxy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxConnections"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"the maximum value of 2*CPU and 16"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Only for type FIXED, the maximum number of connections before starting pending acquisition on existing ones.",(0,l.kt)("br",null),"the default value is available number of processors*2. ",(0,l.kt)("br",null)," (but with a minimum value of 16)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"acquireTimeout"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"45000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Only for type FIXED, the maximum time in millis to wait for aquiring. the default value is 45000")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"proxy")," config")),(0,l.kt)("p",null,"Netty HttpClient proxy configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"host"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hostname for proxy configuration of Netty HttpClient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"port"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Port for proxy configuration of Netty HttpClient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"username"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Username for proxy configuration of Netty HttpClient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Password for proxy configuration of Netty HttpClient.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"nonProxyHostsPattern"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Regular expression (Java) for a configured list of hosts. that should be reached directly, bypassing the proxy")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SSL")," config")),(0,l.kt)("p",null,"Gateway routing can support routing to http and https back-end services at the same time. The following is the SSL-related configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"useInsecureTrustManager"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Installs the netty InsecureTrustManagerFactory. This is insecure and not suitable for production.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"trustedX509Certificates"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Trusted certificates for verifying the remote endpoint's certificate.(Use ",(0,l.kt)("inlineCode",{parentName:"td"},",")," to separate multiple values)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"handshakeTimeout"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"10000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SSL handshake timeout. Default to 10000 ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"closeNotifyFlushTimeout"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3000"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SSL close_notify flush timeout. Default to 3000 ms.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"closeNotifyReadTimeout"),(0,l.kt)("td",{parentName:"tr",align:"center"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SSL close_notify read timeout. Default to 0 ms.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"defaultConfigurationType"),(0,l.kt)("td",{parentName:"tr",align:"center"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"TCP"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The default ssl configuration type. Defaults to TCP.",(0,l.kt)("br",null),"- H2: SslProvider will be set depending on OpenSsl.isAlpnSupported(), SslProvider.HTTP2_CIPHERS, ALPN support, HTTP/1.1 and HTTP/2 support.",(0,l.kt)("br",null),"- TCP: ",(0,l.kt)("a",{parentName:"td",href:"https://netty.io/4.1/api/io/netty/handler/ssl/SslProvider.html?is-external=true"},(0,l.kt)("inlineCode",{parentName:"a"},"SslProvider"))," will be set depending on ",(0,l.kt)("inlineCode",{parentName:"td"},"OpenSsl.isAvailable()"),(0,l.kt)("br",null),"- NONE: There will be no default configuration")))),(0,l.kt)("h5",{id:"filter-configuration"},"Filter Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shenyu.file")," config")),(0,l.kt)("p",null,"File filter properties: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enable file size filtering")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shenyu.cross")," config")),(0,l.kt)("p",null,"Cross filter properties: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"allow cross-domain requests")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shenyu.exclude")," config")),(0,l.kt)("p",null,"Exculde filter properties: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to enable ",(0,l.kt)("inlineCode",{parentName:"td"},"exclude filter")," and reject the specified request to pass through the gateway")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"paths"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\x10Requests matching this list can not pass through the gateway (support Path-Matching)")))),(0,l.kt)("h5",{id:"shenyusync-config"},"shenyu.sync config"),(0,l.kt)("p",null,"The Apache ShenYu gateway and the Admin System use data synchronization configurations."),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"websocket")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"urls"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The websocket server address of ",(0,l.kt)("inlineCode",{parentName:"td"},"Admin"),", separate multiple addresses with ",(0,l.kt)("inlineCode",{parentName:"td"},","))))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"zookeeper")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"zookeeper server url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"sessionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"session timeout (millisecond)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"connectionTimeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"connection timeout (millisecond)")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"http long polling")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Admin")," server address")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"nacos")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"nacos url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"acm"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"aliyun ACM service configuration")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"acm")," config")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to enable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ACM service address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"accessKey")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"secretKey")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"etcd")," server url")))),(0,l.kt)("p",null,"The following properties are configured for data synchronization using ",(0,l.kt)("inlineCode",{parentName:"p"},"consul")," :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"consul")," server url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"waitTime"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the timeout period for requesting consul service to pull configuration information (milliseconds)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"watchDelay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"int"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Synchronization interval (milliseconds)")))))}g.isMDXComponent=!0}}]);