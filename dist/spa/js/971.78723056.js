"use strict";(self["webpackChunkmockups"]=self["webpackChunkmockups"]||[]).push([[971],{2694:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Ne});var t=l(3673),o=l(7786),u=l(2323),n=l(1959),i=l(6665),c=l(4417),d=l(5826),r=l(1289),s=l(4826),m=l(4913),p=l(4842),f=l(8825),v=l(8251),b=l(3787),w=l(765),y=l(1214),h=l(8333),V=l(1185),Z=l(852),_=l(7831),g=l(2946);const U=(0,g.r)(),W=(0,_.Q_)("factura",{state:()=>({facturasByID:{}}),getters:{},actions:{validateFactura(e){const a=[];return""==e.clienteID&&a.push("Debe seleccionar un cliente"),""==e.tipoPago&&a.push("Debe seleccionar un tipo de pago"),a.length>0||e.detalles.forEach((e=>{const l=U.get(e.codigo);l&&e.cantidad>l.cantidad&&a.push(`No hay suficiente ${l.descripcion}, quedan ${l.cantidad}${l.unidadPreferida}`)})),a},registerFactura(e){this.facturasByID[e.id]=e,e.detalles.forEach((e=>{U.affect(e.codigo,(a=>{if(a)return a.cantidad-=e.cantidad,a.costeTotal-=a.costeUnitario*e.cantidad,a}))}))},findByID(e){return[this.facturasByID[e]]},findByCliente(e){return Object.values(this.facturasByID).filter((a=>a.clienteID.startsWith(e)))},findByFecha(e){return Object.values(this.facturasByID).filter((a=>a.fecha==e))}},persist:!0});var I=l(1186);const k=e=>((0,t.dD)("data-v-672957a8"),e=e(),(0,t.Cn)(),e),D={class:"row items-center"},C=k((()=>(0,t._)("span",{class:"titulo-pagina"},"Factura de venta",-1))),N={class:"comprobante"},q=k((()=>(0,t._)("br",null,null,-1))),M=k((()=>(0,t._)("br",null,null,-1))),S=k((()=>(0,t._)("br",null,null,-1))),B={class:"col-auto row items-end justify-end relative-position"},Q={class:"col-auto q-pa-sm item-bordered shadow-2 total"},F=k((()=>(0,t._)("br",null,null,-1))),P={class:"row items-center justify-end"},R={class:"row items-center justify-end"},j=k((()=>(0,t._)("br",null,null,-1))),E=k((()=>(0,t._)("br",null,null,-1))),T={class:"shadow-2 total bg-white full-width text-center"},H=(0,t.aZ)({emits:["facturaCreada"],setup(e,{emit:a}){const l=(0,f.Z)(),o=(0,n.iH)(0),_=(0,n.iH)(null),g=W(),U=(0,n.iH)(new h.v({id:(0,V.Z)()})),k=(0,n.iH)([{label:"",value:""}]),H=(0,n.iH)(""),x=[{field:"item",label:"Item",type:w.N.STRING},{field:"codigo",label:"Codigo",type:w.N.NUMBER},{field:"precio",label:"Precio",responsive:!0,type:w.N.NUMBER,formatter:b.M,prefix:"$"},{field:"descuento",label:"Descuento",type:w.N.NUMBER},{field:"impuesto",label:"Impuesto",type:w.N.NUMBER,formatter:e=>`${e}%`},{field:"cantidad",label:"Cantidad",responsive:!0,type:w.N.NUMBER,formatter:b.M},{field:"total",label:"Total",type:w.N.NUMBER,formatter:b.M,prefix:"$"}],$=(0,n.iH)(new y.f({})),Y=(0,n.iH)("ITEM");function z(){l.dialog({component:m.Z}).onOk((e=>{switch($.value=e,Y.value=e.type,e.type){case"ITEM":k.value=Object.entries(v.M.instance().getUnits(e.dimension)).map((e=>({label:e[1].symbol,value:e[0]})));const a=v.M.instance().dimensions[e.dimension].baseUnit;H.value=v.M.instance().getUnits(e.dimension)[a].symbol;break}setTimeout((()=>{_.value.focus(),_.value.select()}),100)}))}function O(){l.dialog({component:Z.Z}).onOk((e=>{e.clienteID?U.value.clienteID=e.clienteID:U.value.clienteID=e.proveedorID,U.value.clienteNombre=e.nombre}))}const G=(0,n.iH)(0),A=(0,n.iH)(0),L=(0,n.iH)("%");function J(){let e="0%",a=$.value.precio*G.value;0!==A.value&&("%"===L.value?(a-=a*(A.value/100),e=`${A.value}%`):(a-=A.value,e=`$${A.value}`)),U.value.detalles.push({codigo:$.value.codigo,item:$.value.descripcion,impuesto:$.value.impuesto,precio:$.value.precio,descuento:e,cantidad:G.value,total:a}),$.value=new y.f({}),G.value=0,A.value=0}const K=(0,t.Fl)((()=>{let e=0;return U.value.detalles.forEach((a=>{e+=a.total})),e})),X=(0,n.iH)(!0);function ee(e){X.value=e.isIntersecting}const ae=(0,n.iH)("");function le(){U.value=new h.v({}),$.value=new y.f({}),G.value=0,A.value=0,ae.value=""}function te(){U.value.total=K.value,a("facturaCreada",U.value);const e=g.validateFactura(U.value);e.length>0?e.forEach((e=>{l.notify(e)})):(g.registerFactura(U.value),U.value=new h.v({id:(0,V.Z)()}))}return(e,a)=>{const m=(0,t.up)("q-space"),f=(0,t.up)("q-select"),v=(0,t.up)("q-btn"),w=(0,t.up)("q-resize-observer"),y=(0,t.up)("q-date"),h=(0,t.up)("q-popup-proxy"),V=(0,t.up)("q-icon"),Z=(0,t.up)("q-card-section"),g=(0,t.up)("q-card"),W=(0,t.up)("q-page-sticky"),ae=(0,t.Q2)("intersection"),oe=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(g,{flat:""},{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{style:(0,u.j5)({"padding-bottom":o.value+"px"})},{default:(0,t.w5)((()=>[(0,t._)("div",D,[C,(0,t.Wm)(m),(0,t._)("span",N,"ID Factura: "+(0,u.zw)(U.value.id),1)]),q,(0,t.Wm)(c.Z,null,{action:(0,t.w5)((()=>[(0,t.Wm)(I.Z,{"help-key":"factura:agregarItem"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{class:"advance-btn",label:"Agregar item",onClick:J})])),_:1})])),default:(0,t.w5)((()=>[(0,t.Wm)(s.Z,{"help-key":"factura:item"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{modelValue:$.value.descripcion,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value.descripcion=e),label:"Item",readonly:"",onClick:z},null,8,["modelValue"])])),_:1}),(0,t.Wm)(s.Z,{"help-key":"factura:cantidad"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{ref_key:"cantidadHTML",ref:_,modelValue:G.value,"onUpdate:modelValue":a[2]||(a[2]=e=>G.value=e),modelModifiers:{number:!0},label:"Cantidad",placeholder:"Ingrese cantidad",type:"number"},{append:(0,t.w5)((()=>["ITEM"==Y.value?((0,t.wg)(),(0,t.j4)(f,{key:0,modelValue:H.value,"onUpdate:modelValue":a[1]||(a[1]=e=>H.value=e),options:k.value,"emit-value":"","map-options":""},null,8,["modelValue","options"])):(0,t.kq)("",!0)])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(s.Z,{"help-key":"factura:descuento"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{modelValue:A.value,"onUpdate:modelValue":a[4]||(a[4]=e=>A.value=e),label:"Descuento",placeholder:"Ingrese descuento"},{append:(0,t.w5)((()=>[(0,t.Wm)(f,{modelValue:L.value,"onUpdate:modelValue":a[3]||(a[3]=e=>L.value=e),options:["%","$"]},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),M,(0,t.Wm)(r.Z,{actions:[{icon:"delete",onClick:(e,a)=>{U.value.detalles.splice(a,1)},class:"revert-btn"}],data:U.value.detalles,schema:x,title:"Items"},null,8,["actions","data"]),S,(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",B,[(0,n.SU)(l).platform.is.mobile?((0,t.wg)(),(0,t.j4)(w,{key:0,onResize:a[5]||(a[5]=({height:e})=>{o.value=e})})):(0,t.kq)("",!0),(0,t._)("span",Q,[(0,t._)("b",null,"Total factura: $"+(0,u.zw)((0,n.SU)(b.M)((0,n.SU)(K))),1)])])),[[ae,ee]]),F,(0,t.Wm)(c.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s.Z,{"help-key":"factura:fecha"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{modelValue:U.value.fecha,"onUpdate:modelValue":a[7]||(a[7]=e=>U.value.fecha=e),label:"Fecha"},{append:(0,t.w5)((()=>[(0,t.Wm)(V,{class:"cursor-pointer",name:"event"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{ref:"qDateProxy",cover:"","transition-hide":"scale","transition-show":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:U.value.fecha,"onUpdate:modelValue":a[6]||(a[6]=e=>U.value.fecha=e),mask:"DD/MM/YYYY"},{default:(0,t.w5)((()=>[(0,t._)("div",P,[(0,t.wy)((0,t.Wm)(v,{color:"primary",flat:"",label:"Close"},null,512),[[oe]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(s.Z,{"help-key":"factura:fechaVencimiento"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{modelValue:U.value.fechaVencimiento,"onUpdate:modelValue":a[9]||(a[9]=e=>U.value.fechaVencimiento=e),label:"Fecha Vencimiento"},{append:(0,t.w5)((()=>[(0,t.Wm)(V,{class:"cursor-pointer",name:"event"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{ref:"qDateProxy",cover:"","transition-hide":"scale","transition-show":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:U.value.fechaVencimiento,"onUpdate:modelValue":a[8]||(a[8]=e=>U.value.fechaVencimiento=e),mask:"DD/MM/YYYY"},{default:(0,t.w5)((()=>[(0,t._)("div",R,[(0,t.wy)((0,t.Wm)(v,{color:"primary",flat:"",label:"Close"},null,512),[[oe]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),j,(0,t.Wm)(c.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s.Z,{"help-key":"factura:terceroID"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{label:"Nit/CC",modelValue:U.value.clienteID,"onUpdate:modelValue":a[10]||(a[10]=e=>U.value.clienteID=e),readonly:"",onClick:O},null,8,["modelValue"])])),_:1}),(0,t.Wm)(s.Z,{"help-key":"factura:nombre"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{label:"Nombre",modelValue:U.value.clienteNombre,"onUpdate:modelValue":a[11]||(a[11]=e=>U.value.clienteNombre=e),readonly:""},null,8,["modelValue"])])),_:1}),(0,t.Wm)(s.Z,{"help-key":"factura:tipoPago"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{label:"Tipo Pago",modelValue:U.value.tipoPago,"onUpdate:modelValue":a[12]||(a[12]=e=>U.value.tipoPago=e),options:["Efectivo","Credito"]},null,8,["modelValue"])])),_:1})])),_:1}),E,(0,t.Wm)(d.Z,{btns:[{label:"Cancelar",fn:()=>{(0,n.SU)(l).dialog({component:i.Z,componentProps:{mensaje:"¿Seguro que quieres cancelar?"}}).onOk((a=>{e.x,(0,n.SU)(l).notify("Factura cancelada"),le()})).onCancel((()=>{(0,n.SU)(l).notify("Cancelado")}))},class:"revert-btn shadow-10"},{label:"Guardar",fn:te}]},null,8,["btns"])])),_:1},8,["style"])])),_:1}),X.value?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(W,{key:0,expand:"",position:"bottom"},{default:(0,t.w5)((()=>[(0,t._)("span",T,[(0,t._)("b",null,"Total factura: $"+(0,u.zw)((0,n.SU)(b.M)((0,n.SU)(K))),1)])])),_:1}))],64)}}});var x=l(4260),$=l(151),Y=l(5589),z=l(2025),O=l(3017),G=l(8240),A=l(5151),L=l(4554),J=l(3944),K=l(6915),X=l(1007),ee=l(5094),ae=l(677),le=l(7518),te=l.n(le);const oe=(0,x.Z)(H,[["__scopeId","data-v-672957a8"]]),ue=oe;te()(H,"components",{QCard:$.Z,QCardSection:Y.Z,QSpace:z.Z,QInput:p.Z,QSelect:O.Z,QBtn:G.Z,QResizeObserver:A.Z,QIcon:L.Z,QPopupProxy:J.Z,QDate:K.Z,QPageSticky:X.Z}),te()(H,"directives",{Intersection:ee.Z,ClosePopup:ae.Z});const ne=e=>((0,t.dD)("data-v-ee2a0ce6"),e=e(),(0,t.Cn)(),e),ie=ne((()=>(0,t._)("span",{class:"titulo-pagina"},"Factura de venta",-1))),ce={class:"comprobante"},de=ne((()=>(0,t._)("br",null,null,-1))),re=ne((()=>(0,t._)("br",null,null,-1))),se={class:"col-auto row items-end justify-end relative-position"},me={class:"col-auto q-pa-sm item-bordered shadow-2 total"},pe=ne((()=>(0,t._)("br",null,null,-1))),fe=ne((()=>(0,t._)("br",null,null,-1))),ve=(0,t.aZ)({props:{factura:null},setup(e){const a=(0,f.Z)(),l=(0,n.iH)(0),o=[{field:"item",label:"Item",type:w.N.STRING},{field:"codigo",label:"Codigo",type:w.N.NUMBER},{field:"precio",label:"Precio",responsive:!0,type:w.N.NUMBER,formatter:b.M,prefix:"$"},{field:"descuento",label:"Descuento",type:w.N.NUMBER},{field:"impuesto",label:"Impuesto",type:w.N.NUMBER,formatter:e=>`${e}%`},{field:"cantidad",label:"Cantidad",responsive:!0,type:w.N.NUMBER,formatter:b.M},{field:"total",label:"Total",type:w.N.NUMBER,formatter:b.M,prefix:"$"}];return(i,d)=>{const s=(0,t.up)("q-space"),m=(0,t.up)("q-resize-observer"),f=(0,t.up)("q-card-section"),v=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(v,{flat:""},{default:(0,t.w5)((()=>[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t._)("div",{style:(0,u.j5)({"padding-top":l.value+"px"}),class:"row items-center"},[ie,(0,t.Wm)(s),(0,t._)("span",ce,"ID Factura: "+(0,u.zw)(e.factura.id),1)],4),de,(0,t.Wm)(r.Z,{data:e.factura.detalles,schema:o,title:"Items"},null,8,["data"]),re,(0,t._)("div",se,[(0,n.SU)(a).platform.is.mobile?((0,t.wg)(),(0,t.j4)(m,{key:0,onResize:d[0]||(d[0]=({height:e})=>{l.value=e})})):(0,t.kq)("",!0),(0,t._)("span",me,[(0,t._)("b",null,"Total factura: $"+(0,u.zw)((0,n.SU)(b.M)(e.factura.total)),1)])]),pe,(0,t.Wm)(c.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{modelValue:e.factura.fecha,"onUpdate:modelValue":d[1]||(d[1]=a=>e.factura.fecha=a),label:"Fecha",readonly:""},null,8,["modelValue"]),(0,t.Wm)((0,n.SU)(p.Z),{modelValue:e.factura.fechaVencimiento,"onUpdate:modelValue":d[2]||(d[2]=a=>e.factura.fechaVencimiento=a),label:"Fecha Vencimiento",readonly:""},null,8,["modelValue"])])),_:1}),fe,(0,t.Wm)(c.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,n.SU)(p.Z),{label:"Nit/CC",modelValue:e.factura.clienteID,"onUpdate:modelValue":d[3]||(d[3]=a=>e.factura.clienteID=a),readonly:""},null,8,["modelValue"]),(0,t.Wm)((0,n.SU)(p.Z),{label:"Nombre",modelValue:e.factura.clienteNombre,"onUpdate:modelValue":d[4]||(d[4]=a=>e.factura.clienteNombre=a),readonly:""},null,8,["modelValue"]),(0,t.Wm)((0,n.SU)(p.Z),{label:"Tipo Pago",modelValue:e.factura.tipoPago,"onUpdate:modelValue":d[5]||(d[5]=a=>e.factura.tipoPago=a),readonly:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),be=(0,x.Z)(ve,[["__scopeId","data-v-ee2a0ce6"]]),we=be;te()(ve,"components",{QCard:$.Z,QCardSection:Y.Z,QSpace:z.Z,QResizeObserver:A.Z,QInput:p.Z});const ye=e=>((0,t.dD)("data-v-3c3b023e"),e=e(),(0,t.Cn)(),e),he={key:1},Ve={key:3},Ze={class:"row items-center justify-end"},_e={key:5},ge=ye((()=>(0,t._)("br",null,null,-1))),Ue=(0,t.aZ)({setup(e){const a=(0,n.iH)("ID"),l=[{label:"Buscar por ID",value:"ID"},{label:"Buscar por Cliente",value:"Cliente"},{label:"Buscar por Fecha",value:"Fecha"}],o=W(),u=(0,n.iH)(""),i=(0,n.iH)([]),d=(0,n.iH)(null);function s(){v.dialog({component:Z.Z}).onOk((e=>{e.clienteID?u.value=e.clienteID:u.value=e.proveedorID}))}function m(){switch(a.value){case"ID":i.value=o.findByID(u.value);break;case"Cliente":i.value=o.findByCliente(u.value);break;case"Fecha":i.value=o.findByFecha(u.value);break}console.log(i.value)}const v=(0,f.Z)(),y=[{field:"id",label:"ID",responsive:!0,type:w.N.STRING},{field:"fecha",label:"Fecha",responsive:!0,type:w.N.STRING},{field:"clienteID",label:"Nit/CC",responsive:!0,type:w.N.STRING},{field:"tipoPago",label:"Tipo de pago",responsive:!0,type:w.N.STRING},{field:"total",label:"Total",responsive:!0,type:w.N.NUMBER,formatter:b.M,prefix:"$"}];return(e,o)=>{const f=(0,t.up)("q-select"),v=(0,t.up)("q-btn"),b=(0,t.up)("q-date"),w=(0,t.up)("q-popup-proxy"),h=(0,t.up)("q-icon"),V=(0,t.up)("q-card-section"),Z=(0,t.up)("q-card"),_=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(Z,{flat:""},{default:(0,t.w5)((()=>[(0,t.Wm)(V,null,{default:(0,t.w5)((()=>["ID"===a.value?((0,t.wg)(),(0,t.j4)(c.Z,{key:0},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{label:"Modo",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),options:l,"emit-value":"","map-options":""},null,8,["modelValue"]),(0,t.Wm)((0,n.SU)(p.Z),{label:"ID",modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>u.value=e)},null,8,["modelValue"]),(0,t.Wm)(v,{label:"Buscar",class:"full-width",onClick:m})])),_:1})):(0,t.kq)("",!0),"ID"===a.value?((0,t.wg)(),(0,t.iD)("br",he)):(0,t.kq)("",!0),"Cliente"===a.value?((0,t.wg)(),(0,t.j4)(c.Z,{key:2},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{label:"Modo",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=e=>a.value=e),options:l,"emit-value":"","map-options":""},null,8,["modelValue"]),(0,t.Wm)((0,n.SU)(p.Z),{label:"Nit/CC",modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=e=>u.value=e),readonly:"",onClick:s},null,8,["modelValue"]),(0,t.Wm)(v,{label:"Buscar",class:"full-width",onClick:m})])),_:1})):(0,t.kq)("",!0),"Cliente"===a.value?((0,t.wg)(),(0,t.iD)("br",Ve)):(0,t.kq)("",!0),"Fecha"===a.value?((0,t.wg)(),(0,t.j4)(c.Z,{key:4},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{label:"Modo",modelValue:a.value,"onUpdate:modelValue":o[4]||(o[4]=e=>a.value=e),options:l,"emit-value":"","map-options":""},null,8,["modelValue"]),(0,t.Wm)((0,n.SU)(p.Z),{modelValue:u.value,"onUpdate:modelValue":o[6]||(o[6]=e=>u.value=e),label:"Fecha"},{append:(0,t.w5)((()=>[(0,t.Wm)(h,{class:"cursor-pointer",name:"event"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{ref:"qDateProxy",cover:"","transition-hide":"scale","transition-show":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:u.value,"onUpdate:modelValue":o[5]||(o[5]=e=>u.value=e),mask:"DD/MM/YYYY"},{default:(0,t.w5)((()=>[(0,t._)("div",Ze,[(0,t.wy)((0,t.Wm)(v,{color:"primary",flat:"",label:"Close"},null,512),[[_]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(v,{label:"Buscar",class:"full-width",onClick:m})])),_:1})):(0,t.kq)("",!0),"Fecha"===a.value?((0,t.wg)(),(0,t.iD)("br",_e)):(0,t.kq)("",!0),(0,t.Wm)(r.Z,{schema:y,data:i.value,actions:[{icon:"check_circle",onClick:(e,a)=>{d.value=e},class:"advance-btn"}]},null,8,["data","actions"]),ge,d.value?((0,t.wg)(),(0,t.j4)(we,{key:6,factura:d.value},null,8,["factura"])):(0,t.kq)("",!0)])),_:1})])),_:1})}}}),We=(0,x.Z)(Ue,[["__scopeId","data-v-3c3b023e"]]),Ie=We;te()(Ue,"components",{QCard:$.Z,QCardSection:Y.Z,QSelect:O.Z,QInput:p.Z,QBtn:G.Z,QIcon:L.Z,QPopupProxy:J.Z,QDate:K.Z}),te()(Ue,"directives",{ClosePopup:ae.Z});const ke=(0,t.aZ)({setup(e){const a=(0,n.iH)(new h.v({}));function l(e){a.value=e}return(e,u)=>{const n=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(n,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o.Z,{tabs:["Crear","Buscar"]},{Crear:(0,t.w5)((()=>[(0,t.Wm)(ue,{onFacturaCreada:l})])),Buscar:(0,t.w5)((()=>[(0,t.Wm)(Ie,{factura:a.value},null,8,["factura"])])),_:1})])),_:1})}}});var De=l(4379);const Ce=ke,Ne=Ce;te()(ke,"components",{QPage:De.Z})}}]);