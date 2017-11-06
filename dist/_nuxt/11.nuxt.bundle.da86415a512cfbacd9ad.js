webpackJsonp([11],{168:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(206),i=a(218),r=a(4),n=r(s.a,i.a,null,null,null);e.default=n.exports},205:function(t,e,a){"use strict";var s=a(209),i=a(210),r=a(4),n=r(s.a,i.a,null,null,null);e.a=n.exports},206:function(t,e,a){"use strict";var s=a(68),i=a(69),r=a(207),n=a(212),o=a(205),c=a(215);e.a={name:"home",data:function(){return{title:"Jonathan.com was taken"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Graphic designer. Photographer/photojournalist. Competitive fencer. Professional referee."}]}},components:{t:s.a,tt:i.a,isotopeGrid:r.a,isotopeSort:n.a,isotopeItem:o.a,mainWip:c.a}}},207:function(t,e,a){"use strict";var s=a(208),i=a(211),r=a(4),n=r(s.a,i.a,null,null,null);e.a=n.exports},208:function(t,e,a){"use strict";var s=a(205);e.a={name:"isotopeGrid",components:{isotopeItem:s.a}}},209:function(t,e,a){"use strict";e.a={name:"isotopeItem",props:{name:{required:!0},category:{required:!0}},computed:{imgPath:function(){return"../img/"+this.category+"/"+this.name.toLowerCase().replace(/ /g,"-")+"/"+this.name.toLowerCase().replace(/ /g,"-")+"-cover.jpg"},href:function(){return this.name.toLowerCase().replace(/ /g,"-")}}}},210:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"element-item",class:t.category,attrs:{"data-category":t.category}},[a("div",{staticClass:"hvrbox"},[a("img",{staticClass:"img-autoheight hvrbox-layer_bottom",attrs:{src:t.imgPath,alt:t.name}}),a("nuxt-link",{attrs:{to:t.href}},[a("div",{staticClass:"hvrbox-layer_top"},[a("div",{staticClass:"hvrbox-text"},[a("h5",[t._v(t._s(t.name))]),a("h4",[t._v(t._s(t.category))])])])])],1)])},i=[],r={render:s,staticRenderFns:i};e.a=r},211:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"isotope-grid grid",attrs:{id:"vue-grid-items"}},[a("div",{staticClass:"grid-sizer"}),t._t("default")],2)},i=[],r={render:s,staticRenderFns:i};e.a=r},212:function(t,e,a){"use strict";var s=a(213),i=a(214),r=a(4),n=r(s.a,i.a,null,null,null);e.a=n.exports},213:function(t,e,a){"use strict";var s=a(68);e.a={name:"isotopeSort",components:{t:s.a}}},214:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("t",{staticClass:"isotope-sort",attrs:{id:"filters"}},[t._t("default")],2)},i=[],r={render:s,staticRenderFns:i};e.a=r},215:function(t,e,a){"use strict";var s=a(216),i=a(217),r=a(4),n=r(s.a,i.a,null,null,null);e.a=n.exports},216:function(t,e,a){"use strict";e.a={name:"mainWip",props:{name:{required:!0},category:{required:!0}},computed:{imgPath:function(){return"img/"+this.category+"/"+this.name.toLowerCase().replace(/ /g,"-")+"/"+this.name.toLowerCase().replace(/ /g,"-")+"-cover.jpg"}}}},217:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nuxt-link",{staticClass:"main-wip box-shadow",attrs:{to:"wip"}},[a("div",{staticClass:"hvrbox wip"},[a("img",{staticClass:"img-fluid hvrbox-layer_bottom grayscale",attrs:{src:t.imgPath,alt:t.name}}),a("div",{staticClass:"hvrbox-layer_top"},[a("div",{staticClass:"hvrbox-text"},[a("h5",[t._v(t._s(t.name))]),a("h4",[t._v(t._s(t.category))])])])])])},i=[],r={render:s,staticRenderFns:i};e.a=r},218:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"home"}},[a("isotope-sort",[t._v("I'm Jonathan, a\n    "),a("button",{staticClass:"btn designer",attrs:{"data-filter":".design"}},[t._v("graphic designer,")]),a("button",{staticClass:"btn photographer",attrs:{"data-filter":".photography"}},[t._v("\n        photographer,")]),a("button",{staticClass:"btn photojournalist",attrs:{"data-filter":".photojournalism"}},[t._v("\n        photojournalist,")]),t._v("\n        competitive fencer, and professional referee based in Massachussets\n    "),a("button",{staticClass:"btn",attrs:{"data-filter":"*"}},[t._v("●")])]),a("div",{staticClass:"isotope-grid grid",attrs:{id:"isotope-grid"}},[a("div",{staticClass:"grid-sizer"}),a("isotope-item",{attrs:{name:"senior project",category:"design"}}),a("isotope-item",{attrs:{name:"textile patterns",category:"design"}}),a("isotope-item",{attrs:{name:"STING vodka branding",category:"design"}}),a("isotope-item",{attrs:{name:"exhibition catalog",category:"design"}}),a("isotope-item",{attrs:{name:"patterns",category:"photography"}}),a("isotope-item",{attrs:{name:"human interest",category:"photojournalism"}})],1),a("t",[t._v("right now I'm working on")]),a("main-wip",{attrs:{name:"Simmons Mill Pond signage",category:"design"}}),a("t",[t._v("and in my spare time I like to")]),a("tt",[t._v("play with this website. Since successfully implementing a server-side rendered build of Vue.js, I've been working on implementing CSS grids, ditching Bootstrap, refining the copy, and improving the content on this site.")]),a("script",{attrs:{src:"/js/isotope-init.js"}}),a("script",{attrs:{src:"/js/isotope.pkgd.js"}})],1)},i=[],r={render:s,staticRenderFns:i};e.a=r}});
//# sourceMappingURL=11.nuxt.bundle.da86415a512cfbacd9ad.js.map