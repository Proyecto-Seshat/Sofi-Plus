"use strict";(self["webpackChunkmockups"]=self["webpackChunkmockups"]||[]).push([[285],{5680:(e,l,a)=>{a.r(l),a.d(l,{default:()=>J});var o=a(3673),t=a(2323),n=a(1959),u=a(6665),i=a(4417),d=a(5826),s=a(1289),c=a(4826),m=a(4913),r=a(2946),p=a(4842),v=a(8825),f=a(8251),b=a(3787),w=a(765),V=a(1214),U=a(8333);const _=e=>((0,o.dD)("data-v-2bed9960"),e=e(),(0,o.Cn)(),e),g=_((()=>(0,o._)("span",{class:"titulo-pagina"},"Devolucion",-1))),h=_((()=>(0,o._)("span",{class:"comprobante"},"Comprobante #123456",-1))),y=_((()=>(0,o._)("br",null,null,-1))),Z=_((()=>(0,o._)("br",null,null,-1))),W=_((()=>(0,o._)("br",null,null,-1))),k={class:"col-auto row items-end justify-end relative-position"},C={class:"col-auto q-pa-sm item-bordered shadow-2 total"},S=_((()=>(0,o._)("br",null,null,-1))),M={class:"row items-center justify-end"},q={class:"row items-center justify-end"},I=_((()=>(0,o._)("br",null,null,-1))),N={class:"shadow-2 total bg-white full-width text-center"},D=(0,o.aZ)({setup(e){const l=(0,v.Z)(),a=((0,n.iH)(""),(0,n.iH)(0)),_=(0,n.iH)(null);(0,o.bv)((()=>{}));(0,r.r)();const D=(0,n.iH)(new U.v({})),P=(0,n.iH)([{label:"",value:""}]),Q=(0,n.iH)(""),H=[{field:"item",label:"Item",type:w.N.STRING},{field:"codigo",label:"Codigo",type:w.N.NUMBER},{field:"precio",label:"Precio",responsive:!0,type:w.N.NUMBER,formatter:b.M,prefix:"$"},{field:"descuento",label:"Descuento",type:w.N.NUMBER},{field:"impuesto",label:"Impuesto",type:w.N.NUMBER},{field:"cantidad",label:"Cantidad",responsive:!0,type:w.N.NUMBER,formatter:b.M},{field:"total",label:"Total",type:w.N.NUMBER,formatter:b.M,prefix:"$"}],x=(0,n.iH)(new V.f({}));function j(){l.dialog({component:m.Z}).onOk((e=>{x.value=e,P.value=Object.entries(f.M.instance().getUnits(x.value.dimension)).map((e=>({label:e[1].symbol,value:e[0]})));const l=f.M.instance().dimensions[x.value.dimension].baseUnit;Q.value=f.M.instance().getUnits(x.value.dimension)[l].symbol,setTimeout((()=>{_.value.focus(),_.value.select()}),100)}))}const R=(0,n.iH)(0),T=(0,n.iH)(0),E=(0,n.iH)("%");function Y(){let e="0%",l=x.value.precioVenta*R.value;0!==T.value&&("%"===E.value?(l-=l*(T.value/100),e=`${T.value}%`):(l-=T.value,e=`$${T.value}`)),D.value.detalles.push({codigo:x.value.codigo,item:x.value.descripcion,impuesto:x.value.impuesto,precio:x.value.precioVenta,descuento:e,cantidad:R.value,total:l}),x.value={descripcion:"",codigo:"",cantidad:0,dimension:"",unidadPreferida:"",costeTotal:0,costeUnitario:0,fechaIngreso:"",impuesto:0,precioVenta:0},R.value=0,T.value=0}const $=(0,o.Fl)((()=>{let e=0;return D.value.detalles.forEach((l=>{e+=l.total})),e})),B=(0,n.iH)(!0);function z(e){B.value=e.isIntersecting}const F=(0,n.iH)("");function O(){D.value=new U.v({}),x.value={descripcion:"",codigo:"",cantidad:0,dimension:"",unidadPreferida:"",costeTotal:0,costeUnitario:0,fechaIngreso:"",impuesto:0,precioVenta:0},R.value=0,T.value=0,F.value=""}function G(){}function A(){D.value.total=$.value,console.log(D.value)}return(e,m)=>{const r=(0,o.up)("q-space"),v=(0,o.up)("q-select"),f=(0,o.up)("q-btn"),w=(0,o.up)("q-resize-observer"),V=(0,o.up)("q-date"),U=(0,o.up)("q-popup-proxy"),L=(0,o.up)("q-icon"),J=(0,o.up)("q-card-section"),K=(0,o.up)("q-card"),X=(0,o.up)("q-page-sticky"),ee=(0,o.up)("q-page"),le=(0,o.Q2)("intersection"),ae=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(ee,{class:"column q-ml-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)(J,null,{default:(0,o.w5)((()=>[(0,o._)("div",{style:(0,t.j5)({"padding-top":a.value+"px"}),class:"row items-center"},[g,(0,o.Wm)(r),h],4),y,(0,o.Wm)(i.Z,null,{action:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"advance-btn",label:"Agregar item",onClick:Y})])),default:(0,o.w5)((()=>[(0,o.Wm)(c.Z,{"help-key":""},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(p.Z),{modelValue:x.value.descripcion,"onUpdate:modelValue":m[0]||(m[0]=e=>x.value.descripcion=e),label:"Item",readonly:"",onClick:j},null,8,["modelValue"])])),_:1}),(0,o.Wm)(c.Z,{"help-key":"factura:cantidad"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(p.Z),{ref_key:"cantidadHTML",ref:_,modelValue:R.value,"onUpdate:modelValue":m[2]||(m[2]=e=>R.value=e),modelModifiers:{number:!0},label:"Cantidad",placeholder:"Ingrese cantidad",type:"number"},{append:(0,o.w5)((()=>[(0,o.Wm)(v,{modelValue:Q.value,"onUpdate:modelValue":m[1]||(m[1]=e=>Q.value=e),options:P.value,"emit-value":"","map-options":""},null,8,["modelValue","options"])])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)((0,n.SU)(p.Z),{modelValue:T.value,"onUpdate:modelValue":m[4]||(m[4]=e=>T.value=e),label:"Descuento",placeholder:"Ingrese descuento"},{append:(0,o.w5)((()=>[(0,o.Wm)(v,{modelValue:E.value,"onUpdate:modelValue":m[3]||(m[3]=e=>E.value=e),options:["%","$"]},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),Z,(0,o.Wm)(s.Z,{actions:[{icon:"delete",onClick:(e,l)=>{D.value.detalles.splice(l,1)},class:"revert-btn"}],data:D.value.detalles,schema:H,title:"Items"},null,8,["actions","data"]),W,(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",k,[(0,n.SU)(l).platform.is.mobile?((0,o.wg)(),(0,o.j4)(w,{key:0,onResize:m[5]||(m[5]=({height:e})=>{a.value=e})})):(0,o.kq)("",!0),(0,o._)("span",C,[(0,o._)("b",null,"Total devolución: $"+(0,t.zw)((0,n.SU)(b.M)((0,n.SU)($))),1)])])),[[le,z]]),S,(0,o.Wm)(i.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(p.Z),{modelValue:D.value.fecha,"onUpdate:modelValue":m[7]||(m[7]=e=>D.value.fecha=e),label:"Fecha"},{append:(0,o.w5)((()=>[(0,o.Wm)(L,{class:"cursor-pointer",name:"event"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"qDateProxy",cover:"","transition-hide":"scale","transition-show":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{modelValue:D.value.fecha,"onUpdate:modelValue":m[6]||(m[6]=e=>D.value.fecha=e),mask:"DD/MM/YYYY"},{default:(0,o.w5)((()=>[(0,o._)("div",M,[(0,o.wy)((0,o.Wm)(f,{color:"primary",flat:"",label:"Close"},null,512),[[ae]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)((0,n.SU)(p.Z),{modelValue:D.value.fechaVencimiento,"onUpdate:modelValue":m[9]||(m[9]=e=>D.value.fechaVencimiento=e),label:"Fecha Vencimiento"},{append:(0,o.w5)((()=>[(0,o.Wm)(L,{class:"cursor-pointer",name:"event"},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"qDateProxy",cover:"","transition-hide":"scale","transition-show":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{modelValue:D.value.fechaVencimiento,"onUpdate:modelValue":m[8]||(m[8]=e=>D.value.fechaVencimiento=e),mask:"DD/MM/YYYY"},{default:(0,o.w5)((()=>[(0,o._)("div",q,[(0,o.wy)((0,o.Wm)(f,{color:"primary",flat:"",label:"Close"},null,512),[[ae]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue"])])),_:1}),I,(0,o.Wm)(i.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,n.SU)(p.Z),{label:"Nit/CC",modelValue:D.value.clienteID,"onUpdate:modelValue":m[10]||(m[10]=e=>D.value.clienteID=e)},null,8,["modelValue"]),(0,o.Wm)((0,n.SU)(p.Z),{label:"Nombre",modelValue:F.value,"onUpdate:modelValue":m[11]||(m[11]=e=>F.value=e)},null,8,["modelValue"]),(0,o.Wm)(v,{label:"Tipo Pago",modelValue:D.value.tipoPago,"onUpdate:modelValue":m[12]||(m[12]=e=>D.value.tipoPago=e),options:["Efectivo","Credito"]},null,8,["modelValue"])])),_:1}),(0,o.Wm)(J,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d.Z,{btns:[{label:"Cancelar",fn:()=>{(0,n.SU)(l).dialog({component:u.Z,componentProps:{mensaje:"¿Seguro que quieres cancelar?"}}).onOk((a=>{e.x,(0,n.SU)(l).notify("Factura cancelada"),O()})).onCancel((()=>{(0,n.SU)(l).notify("Cancelado")}))},class:"revert-btn",weight:4},{label:"Documento para impresión",fn:G},{label:"Guardar",fn:A,weight:5}]},null,8,["btns"])])),_:1})])),_:1})])),_:1}),B.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(X,{key:0,expand:"",position:"top"},{default:(0,o.w5)((()=>[(0,o._)("span",N,[(0,o._)("b",null,"Total devolución: $"+(0,t.zw)((0,n.SU)(b.M)((0,n.SU)($))),1)])])),_:1}))])),_:1})}}});var P=a(4260),Q=a(4379),H=a(151),x=a(5589),j=a(2025),R=a(3017),T=a(8240),E=a(5151),Y=a(4554),$=a(3944),B=a(6915),z=a(1007),F=a(5094),O=a(677),G=a(7518),A=a.n(G);const L=(0,P.Z)(D,[["__scopeId","data-v-2bed9960"]]),J=L;A()(D,"components",{QPage:Q.Z,QCard:H.Z,QCardSection:x.Z,QSpace:j.Z,QInput:p.Z,QSelect:R.Z,QBtn:T.Z,QResizeObserver:E.Z,QIcon:Y.Z,QPopupProxy:$.Z,QDate:B.Z,QPageSticky:z.Z}),A()(D,"directives",{Intersection:F.Z,ClosePopup:O.Z})}}]);