(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{257:function(t,e,i){var n=i(258);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(8)(n,a);n.locals&&(t.exports=n.locals)},258:function(t,e,i){(t.exports=i(7)(!1)).push([t.i,".theme--light.v-divider {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n\n.theme--dark.v-divider {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.v-divider {\n  display: block;\n  flex: 1 1 0px;\n  max-width: 100%;\n  height: 0px;\n  max-height: 0px;\n  border: solid;\n  border-width: thin 0 0 0;\n  transition: inherit;\n}\n.v-divider--inset:not(.v-divider--vertical) {\n  max-width: calc(100% - 72px);\n}\n.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {\n  margin-left: 72px;\n}\n.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical) {\n  margin-right: 72px;\n}\n.v-divider--vertical {\n  align-self: stretch;\n  border: solid;\n  border-width: 0 thin 0 0;\n  display: inline-flex;\n  height: inherit;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 0px;\n  width: 0px;\n  vertical-align: text-bottom;\n}\n.v-divider--vertical.v-divider--inset {\n  margin-top: 8px;\n  min-height: 0;\n  max-height: calc(100% - 16px);\n}",""])},373:function(t,e,i){var n=i(374);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(8)(n,a);n.locals&&(t.exports=n.locals)},374:function(t,e,i){(t.exports=i(7)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item {\n  background: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-pagination .v-pagination__item--active {\n  color: #FFFFFF;\n}\n.theme--light.v-pagination .v-pagination__navigation {\n  background: #FFFFFF;\n}\n\n.theme--dark.v-pagination .v-pagination__item {\n  background: #1E1E1E;\n  color: #FFFFFF;\n}\n.theme--dark.v-pagination .v-pagination__item--active {\n  color: #FFFFFF;\n}\n.theme--dark.v-pagination .v-pagination__navigation {\n  background: #1E1E1E;\n}\n\n.v-pagination {\n  align-items: center;\n  display: inline-flex;\n  list-style-type: none;\n  justify-content: center;\n  margin: 0;\n  max-width: 100%;\n  width: 100%;\n}\n.v-pagination.v-pagination {\n  padding-left: 0;\n}\n.v-pagination > li {\n  align-items: center;\n  display: flex;\n}\n.v-pagination--circle .v-pagination__item,\n.v-pagination--circle .v-pagination__more,\n.v-pagination--circle .v-pagination__navigation {\n  border-radius: 50%;\n}\n.v-pagination--disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.v-pagination__item {\n  background: transparent;\n  border-radius: 4px;\n  font-size: 1rem;\n  height: 34px;\n  margin: 0.3rem;\n  min-width: 34px;\n  padding: 0 5px;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n  width: auto;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.v-pagination__item--active {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.v-pagination__navigation {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  height: 32px;\n  width: 32px;\n  margin: 0.3rem 10px;\n}\n.v-pagination__navigation .v-icon {\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  vertical-align: middle;\n}\n.v-pagination__navigation--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.v-pagination__more {\n  margin: 0.3rem;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: 32px;\n  width: 32px;\n}",""])},375:function(t,e,i){"use strict";i(79);var n=i(3),a=i.n(n),s=i(15),r=i(0);const o=["sm","md","lg","xl"],l=o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),c=o.reduce((t,e)=>(t["offset"+Object(r.G)(e)]={type:[String,Number],default:null},t),{}),p=o.reduce((t,e)=>(t["order"+Object(r.G)(e)]={type:[String,Number],default:null},t),{}),v={col:Object.keys(l),offset:Object.keys(c),order:Object.keys(p)};function d(t,e,i){let n=t;if(null!=i&&!1!==i){if(e){n+="-"+e.replace(t,"")}return"col"!==t||""!==i&&!0!==i?(n+="-"+i,n.toLowerCase()):n.toLowerCase()}}const u=new Map;e.a=a.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...p,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:n,parent:a}){let r="";for(const t in e)r+=String(e[t]);let o=u.get(r);if(!o){let t;for(t in o=[],v)v[t].forEach(i=>{const n=e[i],a=d(t,i,n);a&&o.push(a)});const i=o.some(t=>t.startsWith("col-"));o.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(r,o)}return t(e.tag,Object(s.a)(i,{class:o}),n)}})},376:function(t,e,i){"use strict";i(79);var n=i(3),a=i.n(n),s=i(15),r=i(0);const o=["sm","md","lg","xl"],l=["start","end","center"];function c(t,e){return o.reduce((i,n)=>(i[t+Object(r.G)(n)]=e(),i),{})}const p=t=>[...l,"baseline","stretch"].includes(t),v=c("align",()=>({type:String,default:null,validator:p})),d=t=>[...l,"space-between","space-around"].includes(t),u=c("justify",()=>({type:String,default:null,validator:d})),g=t=>[...l,"space-between","space-around","stretch"].includes(t),h=c("alignContent",()=>({type:String,default:null,validator:g})),m={align:Object.keys(v),justify:Object.keys(u),alignContent:Object.keys(h)},f={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,i){let n=f[t];if(null!=i){if(e){n+="-"+e.replace(t,"")}return n+="-"+i,n.toLowerCase()}}const x=new Map;e.a=a.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p},...v,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:g},...h},render(t,{props:e,data:i,children:n}){let a="";for(const t in e)a+=String(e[t]);let r=x.get(a);if(!r){let t;for(t in r=[],m)m[t].forEach(i=>{const n=e[i],a=b(t,i,n);a&&r.push(a)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),x.set(a,r)}return t(e.tag,Object(s.a)(i,{staticClass:"row",class:r}),n)}})},448:function(t,e,i){"use strict";i(373);var n=i(10),a=i(45),s=i(6),r=i(84),o=i(5),l=i(2);e.a=Object(l.a)(s.a,Object(r.a)({onVisible:["init"]}),o.a).extend({name:"v-pagination",directives:{Resize:a.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1==0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:()=>({maxButtons:0,selected:null}),computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2==0?1:0,n=Math.floor(e/2),a=this.length-n+1+i;if(this.value>n&&this.value<a){const t=this.value-n+2,e=this.value+n-2-i;return[1,"...",...this.range(t,e),"...",this.length]}if(this.value===n){const t=this.value+n-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===a){const t=this.value-n+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,n),"...",...this.range(a,this.length)]}},watch:{value(){this.init()}},mounted(){this.init()},methods:{init(){this.selected=null,this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];for(let n=t=t>0?t:1;n<=e;n++)i.push(n);return i},genIcon:(t,e,i,a,s)=>t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button","aria-label":s},on:i?{}:{click:a}},[t(n.a,[e])])]),genItem(t,e){const i=e===this.value&&(this.color||"primary"),n=e===this.value,a=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(a,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)]))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},457:function(t,e,i){"use strict";i.r(e);var n=i(18),a=i(11),s=i(63),r=i(32),o=i(64),l=i(76);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={mixins:[o.a,l.a],components:{Alert:s.a},computed:p({},Object(a.b)("company",["page","items","loadingList","perPage","pages","search"])),methods:p(p({},Object(n.b)({getItemsAction:"company/getItems",getRemoveAction:"company/remove"})),{},{getItems:function(){this.getItemsAction("companies")},remove:function(t){var e=this;window.confirm("Seguro desea eliminar esta agencia.")&&this.getRemoveAction("company/".concat(t)).then((function(t){"deleted"==t.data&&(r.a.$emit("alert",{text:"Se ha eliminado la agencia",color:"success"}),e.getItems())}))}})},u=i(9),g=i(12),h=i.n(g),m=i(92),f=i(255),b=i(25),x=i(375),y=i(82),_=i(68),w=i(55),j=i(90),C=i(17),S=i(448),O=i(376),k=i(433),$=i(24),F=Object(u.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",[i("v-row",[t.pages?i("v-col",[i("v-text-field",{staticStyle:{"max-width":"300px"},attrs:{label:"Buscar","prepend-inner-icon":"mdi-magnify",clearable:"",loading:t.loadingList},model:{value:t.search,callback:function(e){t.search=e},expression:"search "}})],1):t._e(),t._v(" "),t.$can("create","agency")?i("v-col",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:function(e){return t.$router.push({name:"new"})}}},[i("v-icon",{staticClass:"mr-1",attrs:{size:"20"}},[t._v("mdi-plus")]),t._v("Crear Agencia\n        ")],1)],1):t._e()],1),t._v(" "),t.items.length?i("v-row",t._l(t.items,(function(e,n){return i("v-col",{key:n,staticClass:"pa-1",attrs:{cols:"12",md:"4"}},[i("v-card",{staticClass:"d-inline-block",attrs:{width:"100%",height:"100%",outlined:"",elevation:"3"}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("div",{staticClass:"mb-4"},[i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.$router.push({name:"profile",params:{id:e.id,name:e.name}})}}},[i("v-icon",{attrs:{size:"20",color:"teal"}},[t._v("mdi-pencil")])],1),t._v(" "),t.$can("delete","agency")?i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.remove(e.id)}}},[i("v-icon",{attrs:{size:"20",color:"red"}},[t._v("mdi-delete")])],1):t._e()],1),t._v(" "),i("div",{staticClass:"headline mb-1"},[t._v(t._s(e.name))]),t._v(" "),e.email?i("v-list-item-subtitle",{staticClass:"mt-2"},[i("v-icon",{attrs:{size:"14"}},[t._v("mdi-email")]),t._v("\n                "+t._s(e.email)+"\n              ")],1):t._e(),t._v(" "),e.phone?i("v-list-item-subtitle",{staticClass:"mt-1"},[i("v-icon",{attrs:{size:"14"}},[t._v("mdi-phone")]),t._v("\n                "+t._s(e.phone)+"\n              ")],1):t._e(),t._v(" "),e.address?i("v-list-item-subtitle",{staticClass:"mt-1"},[i("v-icon",{attrs:{size:"14"}},[t._v("mdi-map-marker")]),t._v("\n                "+t._s(e.address)+"\n              ")],1):t._e()],1),t._v(" "),i("v-list-item-avatar",{attrs:{size:"80",color:"grey"}},[e.image?i("img",{attrs:{src:e.image.url}}):i("v-icon",{attrs:{dark:"",size:"60"}},[t._v("mdi-office-building")])],1)],1),t._v(" "),i("div",{staticClass:"d-flex align-end",staticStyle:{height:"90px"}},[i("div",{staticStyle:{bottom:"0px",position:"absolute",width:"100%"}},[i("div",{staticClass:"d-flex justify-space-between px-5 mt-5 font-weight-bold font-12",staticStyle:{color:"#757575"}},[i("div",[i("div",{staticClass:"text-center"},[t._v("0")]),t._v(" "),i("div",{staticClass:"text-center"},[t._v("Clientes")])]),t._v(" "),i("div",[i("div",{staticClass:"text-center"},[t._v("0")]),t._v(" "),i("div",{staticClass:"text-center"},[t._v("Póliza")])]),t._v(" "),i("div",[i("div",{staticClass:"text-center"},[t._v(t._s(e.staff))]),t._v(" "),i("div",{staticClass:"text-center"},[t._v("Personal")])])]),t._v(" "),i("div",{staticClass:"px-5"},[i("v-divider",{staticClass:"my-2"})],1),t._v(" "),i("v-card-actions",{staticClass:"d-flex px-5"},[i("div",[t._v("Admin: "+t._s(e.owner?e.owner.name:"unknow"))]),t._v(" "),i("v-spacer"),t._v(" "),i("div",{staticClass:"float-right",staticStyle:{color:"#757575"}},[i("v-icon",{attrs:{size:"20"}},[t._v("mdi-cash-multiple")]),t._v("$0\n                ")],1)],1)],1)])],1)],1)})),1):i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("Alert",{attrs:{text:"No se encontraron agencia"}})],1)],1),t._v(" "),i("v-pagination",{directives:[{name:"show",rawName:"v-show",value:!t.loadingList&&t.pages,expression:"!loadingList && pages"}],staticClass:"mt-5",attrs:{length:t.pages,"total-visible":t.pages-t.perPage>5?5:t.pages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)}),[],!1,null,null,null);e.default=F.exports;h()(F,{VBtn:m.a,VCard:f.a,VCardActions:b.a,VCol:x.a,VDivider:y.a,VIcon:_.a,VListItem:w.a,VListItemAvatar:j.a,VListItemContent:C.a,VListItemSubtitle:C.b,VPagination:S.a,VRow:O.a,VSpacer:k.a,VTextField:$.a})},63:function(t,e,i){"use strict";var n={props:{text:{required:!0},type:{default:"error"}}},a=i(9),s=i(12),r=i.n(s),o=i(447),l=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{staticClass:"white--text",attrs:{color:"primary"}},[this._v("\n   "+this._s(this.text)+"\n ")])}),[],!1,null,null,null);e.a=l.exports;r()(l,{VAlert:o.a})},64:function(t,e,i){"use strict";var n={watch:{search:function(t){var e=this;if(!t)return this.loadingList=!1,void(1!=this.page?this.page=1:this.getItems());clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.length<3||(1!=e.page?e.page=1:e.getItems())}),1e3)}}},a=i(9),s=Object(a.a)(n,void 0,void 0,!1,null,null,null);e.a=s.exports},76:function(t,e,i){"use strict";var n={watch:{page:function(){this.getItems()}},created:function(){this.page||(this.page=1)}},a=i(9),s=Object(a.a)(n,void 0,void 0,!1,null,null,null);e.a=s.exports},82:function(t,e,i){"use strict";i(257);var n=i(5);e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})}}]);