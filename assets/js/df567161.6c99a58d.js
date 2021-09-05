"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7248],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3237:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Application Client Access",keywords:["Client Access"],description:"Application Client Access"},l=void 0,c={unversionedId:"design/register-center-design",id:"version-2.4.0/design/register-center-design",isDocsHomePage:!1,title:"Application Client Access",description:"Application Client Access",source:"@site/versioned_docs/version-2.4.0/design/register-center-design.md",sourceDirName:"design",slug:"/design/register-center-design",permalink:"/docs/design/register-center-design",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/design/register-center-design.md",version:"2.4.0",frontMatter:{title:"Application Client Access",keywords:["Client Access"],description:"Application Client Access"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Data Synchronization Design",permalink:"/docs/design/data-sync"},next:{title:"SPI Design",permalink:"/docs/design/spi-design"}},p=[{value:"Design principle",id:"design-principle",children:[]},{value:"Http Registry",id:"http-registry",children:[]},{value:"Zookeeper Registry",id:"zookeeper-registry",children:[]},{value:"Etcd Registry",id:"etcd-registry",children:[]},{value:"Consul Registry",id:"consul-registry",children:[]},{value:"Nacos Register",id:"nacos-register",children:[]},{value:"SPI",id:"spi",children:[]}],d={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Application client access means to access your microservice to ShenYu gateway, currently supports HTTP, Dubbo, Spring Cloud, gRPC, Motan, Sofa, Tars and other protocols access."),(0,i.kt)("p",null,"Connecting the application client to ShenYu gateway is realized through the registration center, which involves the registration of the client and the synchronization of the server data. The registry supports HTTP, ZooKeeper, Etcd, Consul, and Nacos."),(0,i.kt)("p",null,"Refer to the client access configuration in the user documentation for ",(0,i.kt)("a",{parentName:"p",href:"../user-guide/register-center-access"},"Application Client Access Config")," ."),(0,i.kt)("img",{src:"/img/shenyu/register/application-client-access-en.png",width:"70%",height:"60%"}),(0,i.kt)("h2",{id:"design-principle"},"Design principle"),(0,i.kt)("h4",{id:"client"},"Client"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3081).Z})),(0,i.kt)("p",null,"Declare the registry client type, such as HTTP or ZooKeeper, in your microservice configuration. Use SPI to load and initialize the corresponding registry client when the application starts, implement the post-processor interface associated with the Spring Bean, get the service interface information to register in it, and place the obtained information into Disruptor."),(0,i.kt)("p",null,"The Registry client reads data from the Disruptor and registers the interface information with shenyu-admin, where the Disruptor decouples data from operations for scaling."),(0,i.kt)("h4",{id:"server"},"Server"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4185).Z})),(0,i.kt)("p",null,"Declare the registry server type, such as HTTP or ZooKeeper, in the Shenyu-Admin configuration. When shenyu-admin is started, it will read the configuration type, load and initialize the corresponding registry server, and when the registry server receives the interface information registered by shenyu-client, it will put it into Disruptor, which will trigger the registration processing logic to update the interface information and publish a synchronous event."),(0,i.kt)("p",null,"Disruptor provides data and operations decoupling for expansion. If there are too many registration requests, resulting in abnormal registration, there is also a data buffer role."),(0,i.kt)("h2",{id:"http-registry"},"Http Registry"),(0,i.kt)("p",null,"The principle of HTTP service registration is relatively simple. After Shenyu-Client is started, the relevant service registration interface of Shenyu-Admin will be called to upload data for registration."),(0,i.kt)("p",null,"After receiving the request, shenyu-admin will update the data and publish the data synchronization event to synchronize the interface information to ShenYu Gateway."),(0,i.kt)("h2",{id:"zookeeper-registry"},"Zookeeper Registry"),(0,i.kt)("p",null,"Zookeeper storage struct is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n   \u251c    \u251c\u2500\u2500uri\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot} : save uri data of URIRegisterDTO\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot}\n")),(0,i.kt)("p",null,"shenyu-client starts up, the service interface information (MetaDataRegisterDTO/URIRegisterDTO) wrote above the Zookeeper nodes."),(0,i.kt)("p",null,"shenyu-admin uses the Watch mechanism of Zookeeper to monitor events such as data update and deletion, and triggers the corresponding registration processing logic after data changes. Upon receipt of a change to the MetadataregisterDTO node, the data change and data synchronization event publication of the selector and rule is triggered. Upon receipt of a UriRegisterDTO node change, the upstream of the selector is triggered to publish an update and data synchronization event."),(0,i.kt)("h2",{id:"etcd-registry"},"Etcd Registry"),(0,i.kt)("p",null,"Etcd storage struct is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n   \u251c    \u251c\u2500\u2500uri\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot} : save uri data of URIRegisterDTO\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot}\n")),(0,i.kt)("p",null,"shenyu-client starts up, the service interface information (MetaDataRegisterDTO/URIRegisterDTO) wrote in Ephemeral way above Etcd of the node."),(0,i.kt)("p",null,"shenyu-admin uses Etcd's Watch mechanism to monitor events such as data update and deletion, and triggers the corresponding registration processing logic after data changes. Upon receipt of a change to the MetadataregisterDTO node, the data change and data synchronization event publication of the selector and rule is triggered. Upon receipt of a UriRegisterDTO node change, the upstream of the selector is triggered to publish an update and data synchronization event."),(0,i.kt)("h2",{id:"consul-registry"},"Consul Registry"),(0,i.kt)("p",null,"Consul register client will save URIRegisterDTO to service instance metadata, and URIRegisterDTO will disappear with service unregister."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1305).Z})),(0,i.kt)("p",null,"And Consul register client will save MetaDataRegisterDTO to Key/Value store, storage struct is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n\n")),(0,i.kt)("p",null,"When shenyu-client is started, The service interface information (MetaDataRegisterDTO/URIRegisterDTO) on the Metadata of the ServiceInstance (URIRegisterDTO) and Key-Value (MetaDataRegisterDTO), Store as described above."),(0,i.kt)("p",null,"shenyu-admin senses the update and deletion of data by monitoring the change of index of Catalog and KeyValue, and triggers the corresponding registration processing logic after the change of data. Upon receipt of a change to the MetadataregisterDTO node, the data change and data synchronization event publication of the selector and rule is triggered. Upon receipt of a UriRegisterDTO node change, the upstream of the selector is triggered to publish an update and data synchronization event."),(0,i.kt)("h2",{id:"nacos-register"},"Nacos Register"),(0,i.kt)("p",null,"Nacos registration is divided into two parts: URI and Metadata. URI is registered by instance. In case of service exception, the relevant URI data node will be deleted automatically and send events to the subscriber, and the subscriber will carry out relevant offline processing. Metadata is registered by configuration without any related up-down operation. When a URI instance is registered, the Metadata configuration will be published accordingly. The subscriber monitors data changes and carries out update processing."),(0,i.kt)("p",null,"The URI instance registration command rules are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"shenyu.register.service.${rpcType}\n")),(0,i.kt)("p",null,"Listens on all RpcType nodes initially, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"${contextPath}")," instances registered under them are distinguished by IP and Port, and carry their corresponding contextPath information. After the URI instance is offline, it triggers the update and data synchronization event publication of the selector's upstream."),(0,i.kt)("p",null,"When the URI instance goes online, the corresponding Metadata data will be published. The node name command rules are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"shenyu.register.service.${rpcType}.${contextPath}\n")),(0,i.kt)("p",null,"The subscriber side continues to listen for all Metadata configurations, triggering selector and rule data changes and data synchronization events after the initial subscription and configuration update."),(0,i.kt)("h2",{id:"spi"},"SPI"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"SPI Name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ShenyuClientRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"ShenYu client register SPI")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"Implementation Class")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HttpClientRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Http client register repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ZookeeperClientRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Zookeeper client register repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EtcdClientRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Etcd client register repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConsulClientRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Consul client register repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NacosClientRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Nacos client register repository")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"SPI Name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ShenyuServerRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"ShenYu server register SPI")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"Implementation Class")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ShenyuHttpRegistryController"),(0,i.kt)("td",{parentName:"tr",align:null},"Http server repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ZookeeperServerRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Zookeeper server registry repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EtcdServerRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Etcd server registry repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConsulServerRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Consul server registry repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NacosServerRegisterRepository"),(0,i.kt)("td",{parentName:"tr",align:null},"Nacos server registry repository")))))}u.isMDXComponent=!0},1305:function(e,t,n){t.Z=n.p+"assets/images/Consul-ui-6e5afcb94cfa0232bfd9772e041b9fab.png"},3081:function(e,t,n){t.Z=n.p+"assets/images/client-8ca2283dbd01d24dfceb32bd0057c8dd.png"},4185:function(e,t,n){t.Z=n.p+"assets/images/server-11fb112ea24bec622c29ca1224dfee31.png"}}]);