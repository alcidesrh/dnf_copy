(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{467:function(e,t,r){"use strict";r.r(t);var n=r(18),o=r(11),c=r(63),a=r(32);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={components:{Alert:c.a},computed:s({},Object(o.b)("category",["items","loadingList"])),methods:s(s({},Object(n.b)({getItemsAction:"category/getItems",getRemoveAction:"category/remove"})),{},{getItems:function(){return this.getItemsAction("categories")},remove:function(e){var t=this;window.confirm("Seguro desea eliminar esta agencia.")&&this.getRemoveAction("category/".concat(e)).then((function(e){"deleted"==e.data&&(a.a.$emit("alert",{text:"Se ha eliminado la agencia",color:"success"}),t.getItems())}))}}),created:function(){var e=this;this.getItems().then((function(){return console.log(e.items.length)}))}},v=r(9),m=r(12),p=r.n(m),f=r(92),g=r(375),d=r(452),b=r(68),h=r(376),y=r(474),w=Object(v.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",[r("v-row",[e.$can("create","category")?r("v-col",{staticClass:"d-flex justify-end"},[r("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(t){return e.$router.push({name:"category_new"})}}},[r("v-icon",{staticClass:"mr-1",attrs:{size:"20"}},[e._v("mdi-plus")]),e._v("Crear Categoría\n        ")],1)],1):e._e()],1),e._v(" "),e.items.length?r("v-row",[r("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"4"}},[r("v-treeview",{attrs:{"open-all":"",items:e.items,activatable:"","open-on-click":""},scopedSlots:e._u([{key:"label",fn:function(t){var n=t.item;return[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[r("div",[e._v("\n                  "+e._s(n.name)+"\n                  "),o?r("v-btn",{attrs:{small:"",color:"teal",icon:""},on:{click:function(t){return e.$router.push({name:"category_edit",params:{id:n.id}})}}},[r("v-icon",[e._v("mdi-pencil")])],1):e._e()],1)]}}],null,!0)})]}}],null,!1,2980506105)})],1)],1):r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("Alert",{attrs:{text:"No se encontraron categorías"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=w.exports;p()(w,{VBtn:f.a,VCol:g.a,VHover:d.a,VIcon:b.a,VRow:h.a,VTreeview:y.a})},63:function(e,t,r){"use strict";var n={props:{text:{required:!0},type:{default:"error"}}},o=r(9),c=r(12),a=r.n(c),i=r(447),s=Object(o.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("v-alert",{staticClass:"white--text",attrs:{color:"primary"}},[this._v("\n   "+this._s(this.text)+"\n ")])}),[],!1,null,null,null);t.a=s.exports;a()(s,{VAlert:i.a})}}]);