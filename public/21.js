(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{461:function(e,t,r){"use strict";r.r(t);var a=r(18),i=r(11);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=c(c({mixins:[r(96).a],computed:c({},Object(i.b)("elite",["items"]))},Object(a.b)({list:"elite/getItems"})),{},{methods:{refreshList:function(){this.list({endpoint:"users",query:{role:"elite"}})},backToList:function(){this.$router.push({name:"elite_list"})}}}),n=r(9),d=r(12),m=r.n(d),u=r(92),v=r(25),p=r(479),f=r(375),b=r(430),_=r(454),x=r(436),k=r(437),h=r(376),y=r(36),g=r(433),w=r(24),$=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.item?r("v-container",{attrs:{fluid:""}},[r("div",[r("v-row",[r("v-col",[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("FileUpload",{attrs:{image:e.image,icon:"mdi-account"},on:{"update:image":function(t){e.image=t}}})],1),e._v(" "),r("v-col",{staticClass:"d-md-flex justify-md-end",attrs:{cols:"12",md:"6"}},[r("v-checkbox",{attrs:{label:"Activado"},model:{value:e.item.active,callback:function(t){e.$set(e.item,"active",t)},expression:"item.active"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Nombre",rules:e.fieldRequire,required:""},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Email",rules:e.emailRequire,required:""},model:{value:e.item.email,callback:function(t){e.$set(e.item,"email",t)},expression:"item.email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Número telefónico",rules:e.fieldRequire,required:""},on:{keyup:function(t){e.item.phone=e.isNumber(t,e.item.phone)}},model:{value:e.item.phone,callback:function(t){e.$set(e.item,"phone",t)},expression:"item.phone"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-text-field",{attrs:{label:"Dirección",rules:e.fieldRequire,required:""},model:{value:e.item.address,callback:function(t){e.$set(e.item,"address",t)},expression:"item.address"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("DatePicker",{attrs:{label:"Fecha nacimiento",birthday:"true","date-param":e.item.birthday},on:{"update:dateParam":function(t){return e.$set(e.item,"birthday",t)},"update:date-param":function(t){return e.$set(e.item,"birthday",t)}}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Título"},model:{value:e.item.title,callback:function(t){e.$set(e.item,"title",t)},expression:"item.title"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Comisión"},on:{keyup:function(t){e.item.commission_rate=e.isNumber(t,e.item.commission_rate)}},model:{value:e.item.commission_rate,callback:function(t){e.$set(e.item,"commission_rate",t)},expression:"item.commission_rate"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-checkbox",{attrs:{label:"Liscenciado"},model:{value:e.item.licensed,callback:function(t){e.$set(e.item,"licensed",t)},expression:"item.licensed"}})],1)],1),e._v(" "),e.$can("assing","role")?r("div",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-select",{attrs:{items:e.roles,label:"Rol","item-value":"id","item-text":"name"},model:{value:e.item.role,callback:function(t){e.$set(e.item,"role",t)},expression:"item.role"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-select",{attrs:{items:e.companySelect,label:"Agencia","item-value":"id","item-text":"name"},model:{value:e.item.company_id,callback:function(t){e.$set(e.item,"company_id",t)},expression:"item.company_id"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"7",md:"5"}},[r("UserSelect",{attrs:{user:e.parent,users:e.usersSelect,label:"Padre"},on:{"update:user":function(t){e.parent=t}}})],1),e._v(" "),r("v-col",{attrs:{cols:"5",md:"3"}})],1),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("UserSelectMultiple",{attrs:{usersSelected:e.children,usersRemoved:e.childrenRemoved,users:e.childrenSelect,label:"Hijos"},on:{"update:usersSelected":function(t){e.children=t},"update:users-selected":function(t){e.children=t},"update:usersRemoved":function(t){e.childrenRemoved=t},"update:users-removed":function(t){e.childrenRemoved=t}}})],1)],1)],1):e._e(),e._v(" "),e.item.id?e._e():r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card-text",[r("p",[e._v("Usted va a pagar la membresía del nuevo representante. Una nueva cuenta será creada en el sistema y un correo será enviado al nuevo representante para que active su cuenta.")]),e._v(" "),r("strong",[e._v("Membresia: $80")])])],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Número de tarjeta",required:"",rules:e.fieldRequire},model:{value:e.item.card_number,callback:function(t){e.$set(e.item,"card_number",t)},expression:"item.card_number"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"CVC",required:"",rules:e.fieldRequire},model:{value:e.item.card_cvc,callback:function(t){e.$set(e.item,"card_cvc",t)},expression:"item.card_cvc"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-dialog",{ref:"dialog",attrs:{"return-value":e.card.card_date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){return e.$set(e.card,"card_date",t)},"update:return-value":function(t){return e.$set(e.card,"card_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Vencimiento",readonly:"",required:"",rules:e.fieldRequire},model:{value:e.item.card_date,callback:function(t){e.$set(e.item,"card_date",t)},expression:"item.card_date"}},"v-text-field",i,!1),a))]}}],null,!1,4103217833),model:{value:e.pickerDialog,callback:function(t){e.pickerDialog=t},expression:"pickerDialog"}},[e._v(" "),r("v-date-picker",{ref:"picker",attrs:{scrollable:"",type:"month"},model:{value:e.item.card_date,callback:function(t){e.$set(e.item,"card_date",t)},expression:"item.card_date"}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.pickerDialog=!1}}},[e._v("Cancelar")]),e._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.item.card_date)}}},[e._v("OK")])],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12"}},[r("v-btn",{staticClass:"mr-3",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.$router.push({name:"elite_list"})}}},[e._v("Cancelar")]),e._v(" "),r("v-btn",{attrs:{rounded:"",color:"primary",dark:"",loading:e.loadingItem},on:{click:function(t){return e.save()}}},[e._v("Guardar")])],1)],1)],1)],1)],1)],1)]):e._e()}),[],!1,null,null,null);t.default=$.exports;m()($,{VBtn:u.a,VCardText:v.b,VCheckbox:p.a,VCol:f.a,VContainer:b.a,VDatePicker:_.a,VDialog:x.a,VForm:k.a,VRow:h.a,VSelect:y.a,VSpacer:g.a,VTextField:w.a})}}]);