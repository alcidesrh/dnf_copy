(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{460:function(t,e,r){"use strict";r.r(e);var a=r(18),i=r(11);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={data:function(){return{tab:0,tree:[]}},computed:n({},Object(i.b)("user",["item","loadingItem"])),methods:n(n({},Object(a.b)({getItem:"user/getItem"})),{},{preview:function(t){this.getItem({endpoint:"user-profile",query:{id:t}})}}),created:function(){this.getItem({endpoint:"user-profile",query:{id:decodeURIComponent(this.$route.params.id)}}),console.log(this.item)},destroyed:function(){this.item=null}},l=r(9),v=r(12),m=r.n(v),d=r(447),u=r(91),_=r(92),p=r(255),f=r(25),b=r(375),y=r(430),h=r(82),g=r(452),w=r(68),C=r(376),j=r(453),k=r(475),x=r(469),O=r(371),V=r(474),I=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.item?r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"3","order-md":"12"}},[r("v-card",{staticClass:"mx-auto px-3",attrs:{"min-height":"100%",outlined:""}},[r("v-row",{staticClass:"justify-center mt-3"},[r("v-avatar",{attrs:{color:"grey",size:"80"}},[t.item.image?r("img",{attrs:{src:t.item.image.url}}):r("v-icon",{attrs:{dark:"",size:"80"}},[t._v("mdi-account")])],1)],1),t._v(" "),r("v-row",{staticClass:"justify-center mt-3 headline"},[t._v(t._s(t.item.full_name))]),t._v(" "),r("v-row",[r("v-col",{staticClass:"d-flex justify-center"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"15",color:t.item.active?"teal":"error"}},[t._v("mdi-checkbox-blank-circle")]),t._v("\n              "+t._s(t.item.active?"Activo":"Inactivo")+"\n          ")],1)],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"d-flex justify-center"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:"blue"}},[t._v("mdi-forum")])],1),t._v(" "),r("v-btn",{staticClass:"ml-2 mr-1",attrs:{icon:""}},[r("v-icon",{attrs:{color:"orange"}},[t._v("mdi-email")])],1),t._v(" "),r("v-btn",{staticClass:"mr-2 ml-1",attrs:{icon:""}},[r("v-icon",{attrs:{color:"teal"}},[t._v("mdi-pencil")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:"red"}},[t._v("mdi-delete")])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",[r("v-col",{staticClass:"d-flex justify-center px-0"},[r("v-row",[r("v-col",{staticClass:"py-0 justify-center d-flex",attrs:{cols:"12"}},[t._v("Total Sales")]),t._v(" "),r("v-col",{staticClass:"py-0 justify-center d-flex",attrs:{cols:"12"}},[t._v("$0")])],1)],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-center px-0"},[r("v-row",[r("v-col",{staticClass:"py-0 justify-center d-flex",attrs:{cols:"12"}},[t._v("Total Commission")]),t._v(" "),r("v-col",{staticClass:"py-0 justify-center d-flex",attrs:{cols:"12"}},[t._v("$0")])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",{staticClass:"mt-3"},[r("v-col",{attrs:{cols:"12"}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-email")]),t._v("\n            "+t._s(t.item.email)+"\n          ")],1),t._v(" "),t.item.phone?r("v-col",{attrs:{cols:"12"}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-phone")]),t._v("\n            "+t._s(t.item.phone)+"\n          ")],1):t._e(),t._v(" "),t.item.birthday?r("v-col",{attrs:{cols:"12"}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-calendar-month")]),t._v("\n            "+t._s(t.item.birthday)+"\n          ")],1):t._e(),t._v(" "),t.item.address?r("v-col",{attrs:{cols:"12"}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-map-marker")]),t._v("\n            "+t._s(t.item.address)+"\n          ")],1):t._e()],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9","order-md":"1"}},[r("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",{attrs:{href:"#downlines"}},[t._v("Descendencia")]),t._v(" "),r("v-tab",[t._v("Clientes")]),t._v(" "),r("v-tab",[t._v("Póliza")]),t._v(" "),r("v-tab",[t._v("Subscripción")])],1),t._v(" "),t.item?r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",{attrs:{value:"downlines"}},[r("v-card",{attrs:{flat:"",tile:""}},[r("v-card-text",[t.item.parent&&t.$can("list","all")?r("div",{staticClass:"mb-5 black--text cursor-pointer",on:{click:function(e){return t.$router.push({name:"elite_profile",params:{id:t.item.id}})}}},[r("strong",[t._v("Ascendencia:")]),t._v(" "),r("v-avatar",{staticClass:"ml-2",attrs:{size:"40",color:"grey"}},[t.item.parent.image?r("img",{attrs:{src:t.item.parent.image.url,width:"40"}}):r("v-icon",{attrs:{dark:"",size:"40"}},[t._v("mdi-account")])],1),t._v("\n                "+t._s(t.item.parent.name)+"\n                "),r("v-btn",{attrs:{small:"",color:"teal",icon:""},on:{click:function(e){return t.$router.push({name:"elite_profile",params:{id:t.item.parent.id}})}}},[r("v-icon",[t._v("mdi-eye")])],1)],1):t._e(),t._v(" "),t.item.children.length?r("v-treeview",{attrs:{"open-all":"",items:[t.item],activatable:"","open-on-click":""},scopedSlots:t._u([{key:"prepend",fn:function(e){var a=e.item;return[r("v-avatar",{attrs:{size:"40",color:"grey"},on:{click:function(e){return t.$router.push({name:"elite_profile",params:{id:a.id}})}}},[a.image?r("img",{attrs:{src:a.image.url,width:"40"}}):r("v-icon",{attrs:{dark:"",size:"40"}},[t._v("mdi-account")])],1)]}},{key:"label",fn:function(e){var a=e.item;return[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[r("div",[t._v("\n                      "+t._s(a.name)+"\n                      "),i?r("v-btn",{attrs:{small:"",color:"teal",icon:""},on:{click:function(e){return t.$router.push({name:"elite_profile",params:{id:a.id}})}}},[r("v-icon",[t._v("mdi-eye")])],1):t._e()],1)]}}],null,!0)})]}}],null,!1,4025372432),model:{value:t.tree,callback:function(e){t.tree=e},expression:"tree"}}):r("v-alert",{attrs:{type:"info"}},[t._v("No tiene descendientes")])],1)],1)],1)],1):t._e()],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=I.exports;m()(I,{VAlert:d.a,VAvatar:u.a,VBtn:_.a,VCard:p.a,VCardText:f.b,VCol:b.a,VContainer:y.a,VDivider:h.a,VHover:g.a,VIcon:w.a,VRow:C.a,VTab:j.a,VTabItem:k.a,VTabs:x.a,VTabsItems:O.a,VTreeview:V.a})}}]);