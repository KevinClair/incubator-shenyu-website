"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3181],{5111:function(e,t,n){n.r(t);var a=n(7294),l=n(2263),r=n(6742),c=n(4926),i=n(6730);t.default=function(){var e=(0,l.Z)().siteConfig,t=e.organizationName,n=e.projectName,m=(0,i.useVersions)(),o=(0,i.useLatestVersion)(),u=m.find((function(e){return"current"===e.name})),s=m.filter((function(e){return e!==o&&"current"!==e.name})),E="https://github.com/"+t+"/"+n;return a.createElement(c.Z,{title:"Versions",description:"Apache ShenYu(Incubating)  Versions page listing all documented site versions"},a.createElement("main",{className:"container margin-vert--lg"},a.createElement("h1",null,"Apache ShenYu(Incubating) documentation versions"),o&&a.createElement("div",{className:"margin-bottom--lg"},a.createElement("h3",{id:"next"},"Current version (Stable)"),a.createElement("p",null,"Here you can find the documentation for current released version."),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,o.label),a.createElement("td",null,a.createElement(r.Z,{to:o.path+"/index"},"Documentation")),a.createElement("td",null,a.createElement("a",{href:E+"/releases/tag/v"+o.name},"Release Notes")))))),u!==o&&a.createElement("div",{className:"margin-bottom--lg"},a.createElement("h3",{id:"latest"},"Next version (Unreleased)"),a.createElement("p",null,"Here you can find the documentation for work-in-process unreleased version."),a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,u.label),a.createElement("td",null,a.createElement(r.Z,{to:u.path+"/index"},"Documentation")))))),s.length>0&&a.createElement("div",{className:"margin-bottom--lg"},a.createElement("h3",{id:"archive"},"Past versions (Not maintained anymore)"),a.createElement("p",null,"Here you can find documentation for previous versions of Apache ShenYu(Incubating)."),a.createElement("table",null,a.createElement("tbody",null,s.map((function(e){return a.createElement("tr",{key:e.name},a.createElement("th",null,e.label),a.createElement("td",null,a.createElement(r.Z,{to:e.path+"/index"},"Documentation")),a.createElement("td",null,a.createElement("a",{href:E+"/releases/tag/v"+e.name},"Release Notes")))})))))))}}}]);