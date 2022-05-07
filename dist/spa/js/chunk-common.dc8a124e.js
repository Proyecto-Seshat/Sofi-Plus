(self["webpackChunkmockups"]=self["webpackChunkmockups"]||[]).push([[64],{8251:(e,s,t)=>{"use strict";t.d(s,{M:()=>o});class a{constructor(e,s,t,a){this.conversionRate={},this.symbol=e,this.name=s,this.conversionRate[a]=t}static baseUnit(e,s){return new a(e,s,1,s)}addConversionRate(e,s){return this.conversionRate[e]=s,this}}class l{constructor(e,s,t){this.units={},this.symbol=e,this.name=s,this.baseUnit=t.name,this.units[t.name]=t}addMeasureUnit(e,s,t,l){return this.units[s]=new a(e,s,l,this.baseUnit),this.units[this.baseUnit].addConversionRate(s,t),this}getUnits(){return this.units}}class o{constructor(){this.dimensions={},this.dimensions["volumen"]=new l("V","volumen",a.baseUnit("l","litro")).addMeasureUnit("ml","mililitro",1e3,.001),this.dimensions["masa"]=new l("M","masa",a.baseUnit("kg","kilogramo")).addMeasureUnit("g","gramo",1e3,.001),this.dimensions["longitud"]=new l("L","longitud",a.baseUnit("m","metro")).addMeasureUnit("mm","milimetro",1e3,.001),this.dimensions["unidad"]=new l("U","unidad",a.baseUnit("un","unidades"))}static instance(){return this._instance}getDimensionsNames(){return Object.keys(this.dimensions)}getUnitsNames(e){return Object.keys(this.dimensions[e].getUnits())}getUnits(e){return this.dimensions[e].getUnits()}}o._instance=new o},765:(e,s,t)=>{"use strict";var a;t.d(s,{N:()=>a}),function(e){e[e["STRING"]=0]="STRING",e[e["NUMBER"]=1]="NUMBER",e[e["DATE"]=2]="DATE",e[e["SELECTION"]=3]="SELECTION",e[e["DIALOG"]=4]="DIALOG"}(a||(a={}))},3787:(e,s,t)=>{"use strict";function a(e){const s=Intl.NumberFormat("es-CO");return s.format(e)}t.d(s,{M:()=>a})},7536:(e,s,t)=>{"use strict";t.d(s,{l:()=>o});var a=t(1488),l=t.n(a);function o(){return l()().format("DD/MM/YYYY")}},8333:(e,s,t)=>{"use strict";t.d(s,{v:()=>l});var a=t(7536);class l{constructor({id:e,detalles:s,fecha:t,fechaVencimiento:l,tipoPago:o,total:n,clienteID:i,clienteNombre:r}){this.id=e||"",this.detalles=s||[],this.fecha=t||(0,a.l)(),this.fechaVencimiento=l||(0,a.l)(),this.clienteID=i||"",this.clienteNombre=r||"",this.tipoPago=o||"",this.total=n||0}}},1214:(e,s,t)=>{"use strict";t.d(s,{f:()=>l});var a=t(7536);class l{constructor({codigo:e,costeUnitario:s,costeTotal:t,descripcion:l,fechaIngreso:o,dimension:n,precioVenta:i,unidadPreferida:r,impuesto:c,cantidad:u}){this.codigo=e||"",this.descripcion=l||"",this.cantidad=u||0,this.dimension=n||"",this.unidadPreferida=r||"",this.impuesto=c||0,this.costeUnitario=s||0,this.costeTotal=t||0,this.precioVenta=i||0,this.fechaIngreso=o||(0,a.l)()}getCode(){return this.codigo}}},9900:(e,s,t)=>{"use strict";t.d(s,{A:()=>o});var a=t(7504);class l{constructor({nombre:e,observaciones:s,clienteID:t,telefono:a}){this.nombre=e||"",this.clienteID=t||"",this.telefono=a||"",this.observaciones=s||"",this.codigo=this.clienteID}getCode(){return this.clienteID}}const o=(0,a.p)("clientes",l)},7504:(e,s,t)=>{"use strict";t.d(s,{p:()=>l});var a=t(7831);const l=function(e,s){return(0,a.Q_)(e,{state:()=>{let e={};return{items:e,codigo:""}},getters:{generateCode:e=>e.codigo,array:e=>Object.values(e.items),find:e=>s=>s.find(e.items)},actions:{add(e){const t=new s(e);this.items[t.getCode()]=t},remove(e){delete this.items[e.getCode()]},affect(e,s){this.items[e]=s(this.items[e])},get(e){return this.items[e]},purge(){this.items={}}},persist:!0})}},2946:(e,s,t)=>{"use strict";t.d(s,{r:()=>o});var a=t(7504),l=t(1214);const o=(0,a.p)("items",l.f)},8978:(e,s,t)=>{"use strict";t.d(s,{D:()=>o});var a=t(7504);class l{constructor({nombre:e,observaciones:s,proveedorID:t,telefono:a}){this.nombre=e||"",this.proveedorID=t||"",this.telefono=a||"",this.observaciones=s||"",this.codigo=this.proveedorID}getCode(){return this.proveedorID}}const o=(0,a.p)("proveedores",l)},3315:(e,s,t)=>{"use strict";t.d(s,{M:()=>l});var a=t(7831);const l=(0,a.Q_)("recurso",{state:()=>({recursos:[{idRecurso:"1",cuenta:"Activos"},{idRecurso:"11",cuenta:"Disponible"},{idRecurso:"1105",cuenta:"Caja"},{idRecurso:"1110",cuenta:"Bancos"},{idRecurso:"13",cuenta:"Deudores"},{idRecurso:"1305",cuenta:"Clientes"},{idRecurso:"14",cuenta:"Inventarios"},{idRecurso:"1405",cuenta:"Materias primas"},{idRecurso:"1410",cuenta:"Productos en proceso"},{idRecurso:"1430",cuenta:"Productos terminados"},{idRecurso:"1435",cuenta:"Mercancias no fabricadas por la empresa"},{idRecurso:"1455",cuenta:"Materiales repuestos y accesorios"},{idRecurso:"1499",cuenta:"Provisiones"},{idRecurso:"15",cuenta:"Propiedad planta y equipo"},{idRecurso:"1516",cuenta:"Construcciones y edificaciones"},{idRecurso:"1524",cuenta:"Equipo de oficina"},{idRecurso:"1592",cuenta:"Depreciacion acumulada ACTIVO NEGATIVO"},{idRecurso:"16",cuenta:"Intangibles"},{idRecurso:"1610",cuenta:"Marcas"},{idRecurso:"1635",cuenta:"Licencias"},{idRecurso:"18",cuenta:"Otros activos"},{idRecurso:"2",cuenta:"Pasivos"},{idRecurso:"21",cuenta:"obligaciones"},{idRecurso:"2105",cuenta:"Cuentas por pagar a bancos"},{idRecurso:"2195",cuenta:"Cuentas por pagar a otras entidades"},{idRecurso:"22",cuenta:"Proveedores"},{idRecurso:"2205",cuenta:"Cuentas por pagar proveedores nacionales"},{idRecurso:"2210",cuenta:"Cuentas por pagar proveedores del exterior"},{idRecurso:"23",cuenta:"Otras obligaciones"},{idRecurso:"2335",cuenta:"Costos y gastos por pagar"},{idRecurso:"24",cuenta:"Impuestos por pagar"},{idRecurso:"25",cuenta:"Obligaciones laborales"},{idRecurso:"2505",cuenta:"Salarios por pagar"},{idRecurso:"28",cuenta:"Otros pasivos"},{idRecurso:"3",cuenta:"Patrimonio"},{idRecurso:"31",cuenta:"Capital social"},{idRecurso:"33",cuenta:"Reservas"},{idRecurso:"4",cuenta:"Ingresos"},{idRecurso:"41",cuenta:"Ingresoso operacionales"},{idRecurso:"4135",cuenta:"Ingreso por ventas"},{idRecurso:"4195",cuenta:"Otros ingresos"},{idRecurso:"4275",cuenta:"Devoluciones en ventas CREDITO NEGATIVO"},{idRecurso:"5",cuenta:"Gastos"},{idRecurso:"51",cuenta:"Gastos de adminostracion"},{idRecurso:"5105",cuenta:"Gastos de personal"},{idRecurso:"5115",cuenta:"Gasto en impuestos"},{idRecurso:"5120",cuenta:"Arrendamientos"},{idRecurso:"5145",cuenta:"Mantenimiento"},{idRecurso:"5160",cuenta:"Depreciacion"},{idRecurso:"5195",cuenta:"Otros gastos"},{idRecurso:"6",cuenta:"Costos de ventas"},{idRecurso:"61",cuenta:"Costo de ventas"},{idRecurso:"6195",cuenta:"Otros costos"},{idRecurso:"62",cuenta:"Costo por compra"},{idRecurso:"6205",cuenta:"Costo por compra de mercancía"},{idRecurso:"7",cuenta:"Costos de producción"},{idRecurso:"71",cuenta:"Costo de materia prima"},{idRecurso:"72",cuenta:"Costo de mano de obra"},{idRecurso:"73",cuenta:"Costo indirecto"},{idRecurso:"74",cuenta:"Costo por servicios prestados"}],recursosTree:{}}),getters:{getTree:e=>(0==Object.keys(e.recursosTree).length&&e.recursos.forEach((s=>{let t=s.idRecurso.substring(0,1);if(1!=s.idRecurso.length){if(e.recursosTree[t]){let a=s.idRecurso.substring(0,2);if(2==s.idRecurso.length)return void(e.recursosTree[t].children[a]={recurso:s,children:{}});if(e.recursosTree[t].children[a]){let l=s.idRecurso.substring(0,4);return void(e.recursosTree[t].children[a].children[l]={recurso:s})}}}else e.recursosTree[t]={recurso:s,children:{}}})),e.recursosTree)},actions:{setRecursos(e){this.recursos=e}},persist:!0})},3311:(e,s,t)=>{"use strict";t.d(s,{g:()=>n});var a=t(7504),l=t(7536);class o{constructor({codigo:e,descripcion:s,costeUnitario:t,fechaCreacion:a,precioVenta:o,impuesto:n}){this.codigo=e||"",this.descripcion=s||"",this.impuesto=n||0,this.costeUnitario=t||0,this.precioVenta=o||0,this.fechaCreacion=a||(0,l.l)()}getCode(){return this.codigo}}const n=(0,a.p)("servicios",o)},9396:(e,s,t)=>{"use strict";t.d(s,{K:()=>l});var a=t(7831);const l=(0,a.Q_)("Help",{state:()=>{const e={terceros:"Son las personas agenas a tu negocio, pueden ser, a quienes vendes ( clientes) o a quienes compras (proveedores)","nit/cc":"Este es el numero de identificacion de tu cedula en caso de querer registrar una persona o el numero de registro que la empresa tiene","terceros:tipo":"Este es el tipo de persona que quieres registrar, seleccionas empresa si quieres registrar un negocio, o seleccionas persona si  quieres registrar una.","factura:cantidad":"Se refiere a la cantidad de un item que se esta vendiendo","factura:producto":"Se refiere al item que se esta vendiendo","recibo:factura":"Factura asociada a la deuda en caso de que el cliente la este pagando"};return{dict:e,helpFlag:!1,helpInfo:""}},actions:{requestHelp(){this.helpFlag=!0,document.addEventListener("keypress",(e=>{"Escape"==e.key&&(this.helpFlag=!1)}))},provideHelp(e){return this.helpFlag=!1,this.helpInfo=this.dict[e],this.dict[e]},closeHelp(){this.helpFlag=!1,this.helpInfo=""}},persist:!0})},2473:(e,s,t)=>{"use strict";t.d(s,{S:()=>l});var a=t(7831);const l=(0,a.Q_)("preferences",{state:()=>({preferedInventario:"",preferedTerceros:""}),getters:{},actions:{setPreferedInventario(e){this.preferedInventario=e},setPreferedTerceros(e){this.preferedTerceros=e}},persist:!0})},5826:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var a=t(3673),l=t(8240),o=t(8825);const n=(0,a.aZ)({props:{btns:null},setup(e){const s=e,t=()=>(0,o.Z)().platform.is.desktop?(0,a.h)("div",{class:"row justify-center q-gutter-sm"},s.btns.map((e=>(0,a.h)(l.Z,{label:e.label,class:`${e.weight?"col-"+e.weight:"col"} ${e.class?e.class:"advance-btn"}`,onClick:e.fn})))):(0,a.h)("div",{class:"column q-gutter-y-sm"},s.btns.map((e=>(0,a.h)(l.Z,{label:e.label,class:`${e.weight?"col-"+e.weight:"col"} ${e.class?e.class:"advance-btn"}`,onClick:e.fn}))));return(e,s)=>((0,a.wg)(),(0,a.j4)(t))}}),i=n,r=i},4585:(e,s,t)=>{"use strict";t.d(s,{Z:()=>R});var a=t(3673),l=t(1959),o=t(4417),n=t(1289),i=t(8825),r=t(6665),c=t(1186),u=t(765),d=t(7536);const p={class:"column justify-start q-gutter-y-sm"},m={class:"row items-center justify-end"},f={key:2,class:"row q-gutter-x-xs q-ma-xs"},h={key:3,class:"row q-gutter-x-xs q-ma-xs"},b=(0,a.aZ)({props:{entity:null,entitySchema:null,data:null,store:null},setup(e){const s=e,t=(0,i.Z)(),b=(0,a.Fl)((()=>s.entitySchema.filter((e=>void 0===e.showInTable||e.showInTable))));function v(e){switch(e.type){case u.N.NUMBER:return"codigo"===e.field?(0,l.iH)(s.store.generateCode):(0,l.iH)(0);case u.N.STRING:return(0,l.iH)("");case u.N.DATE:return(0,l.iH)((0,d.l)());case u.N.SELECTION:return(0,l.iH)(null);default:return(0,l.iH)("")}}function g(e){switch(e.type){case u.N.NUMBER:return"codigo"===e.field?s.store.generateCode:0;case u.N.STRING:return"";case u.N.DATE:return(0,d.l)();case u.N.SELECTION:return null;default:return""}}const w=(0,l.Um)({}),j=(0,l.Um)({});s.entitySchema.forEach((e=>{w[e.field]=v(e),e.computedOptions&&(j[e.field]=v(e))}));const k=[];function C(){s.entitySchema.forEach((e=>{e.computed&&k.push((0,a.YP)(e.computed.dependencies.map((e=>w[e])),((s,t)=>{w[e.field].value=e.computed.compute(s,t)}))),e.computedOptions&&k.push((0,a.YP)(e.computedOptions.dependencies.map((e=>w[e])),((s,t)=>{j[e.field].value=e.computedOptions.compute(s,t)})))}))}(0,a.bv)((()=>{C()})),(0,a.Ah)((()=>{}));const y=(0,l.iH)(!1),_=(0,l.iH)(-1);function q(){y.value=!0}function Z(){t.dialog({component:r.Z,componentProps:{mensaje:"¿Seguro que quieres cancelar?"}}).onOk((e=>{y.value=!1,_.value=-1}))}function R(){let e={};s.entitySchema.forEach((s=>{e[s.field]=w[s.field].value})),console.log(e),s.store.add(e);for(let t of s.entitySchema)w[t.field].value=g(t);y.value=!1}function U(e,t){s.entitySchema.forEach(((s,t)=>{w[s.field].value=e[s.field]})),_.value=t}function D(){try{s.entitySchema.forEach(((e,t)=>{s.data[_.value][e.field]=w[e.field].value})),_.value=-1}catch(e){console.log(e)}}function x(e,t){s.store.remove(e)}return(s,i)=>{const r=(0,a.up)("q-input"),d=(0,a.up)("q-btn"),v=(0,a.up)("q-date"),g=(0,a.up)("q-popup-proxy"),k=(0,a.up)("q-icon"),C=(0,a.up)("q-select"),W=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a.Wm)(n.Z,{actions:[{icon:"edit_note",onClick:U,class:"advance-btn"},{icon:"delete",onClick:x,class:"revert-btn shadow-10"}],data:e.data,schema:(0,l.SU)(b)},null,8,["actions","data","schema"]),y.value||-1!==_.value?((0,a.wg)(),(0,a.j4)(o.Z,{key:0,break:3},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.entitySchema,((e,s)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[e.type===(0,l.SU)(u.N).STRING?((0,a.wg)(),(0,a.j4)(r,{key:0,modelValue:(0,l.SU)(w)[e.field].value,"onUpdate:modelValue":s=>(0,l.SU)(w)[e.field].value=s,label:e.label,type:"text",suffix:e.suffix?e.suffix:void 0,prefix:e.prefix?e.prefix:void 0},null,8,["modelValue","onUpdate:modelValue","label","suffix","prefix"])):e.type===(0,l.SU)(u.N).NUMBER?((0,a.wg)(),(0,a.j4)(r,{key:1,modelValue:(0,l.SU)(w)[e.field].value,"onUpdate:modelValue":s=>(0,l.SU)(w)[e.field].value=s,modelModifiers:{number:!0},label:e.label,suffix:e.suffix?e.suffix:void 0,prefix:e.prefix?e.prefix:void 0,type:"number"},null,8,["modelValue","onUpdate:modelValue","label","suffix","prefix"])):e.type===(0,l.SU)(u.N).DATE?((0,a.wg)(),(0,a.j4)(r,{key:2,modelValue:(0,l.SU)(w)[e.field].value,"onUpdate:modelValue":s=>(0,l.SU)(w)[e.field].value=s,label:e.label,suffix:e.suffix?e.suffix:void 0,prefix:e.prefix?e.prefix:void 0},{append:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"cursor-pointer",name:"event"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{ref_for:!0,ref:"qDateProxy",cover:"","transition-hide":"scale","transition-show":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{modelValue:(0,l.SU)(w)[e.field].value,"onUpdate:modelValue":s=>(0,l.SU)(w)[e.field].value=s,mask:"DD/MM/YYYY"},{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.wy)((0,a.Wm)(d,{color:"primary",flat:"",label:"Close"},null,512),[[W]])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1536)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue","label","suffix","prefix"])):e.type===(0,l.SU)(u.N).SELECTION?((0,a.wg)(),(0,a.j4)(C,{key:3,modelValue:(0,l.SU)(w)[e.field].value,"onUpdate:modelValue":s=>(0,l.SU)(w)[e.field].value=s,label:e.label,options:e.computedOptions?(0,l.SU)(j)[e.field].value:e.options},null,8,["modelValue","onUpdate:modelValue","label","options"])):e.type===(0,l.SU)(u.N).DIALOG?((0,a.wg)(),(0,a.j4)(r,{key:4,label:e.label,modelValue:(0,l.SU)(w)[e.field].value,"onUpdate:modelValue":s=>(0,l.SU)(w)[e.field].value=s,readonly:"",onClick:()=>{(0,l.SU)(t).dialog({component:e.dialog.component}).onOk((s=>{(0,l.SU)(w)[e.field].value=e.dialog.onSuccess(s)})).onCancel(e.dialog.onFailure())}},null,8,["label","modelValue","onUpdate:modelValue","onClick"])):(0,a.kq)("",!0)],64)))),256))])),_:1})):(0,a.kq)("",!0),y.value||-1!==_.value?y.value?((0,a.wg)(),(0,a.iD)("div",f,[(0,a.Wm)(d,{class:"col revert-btn shadow-10",label:"Cancelar",onClick:Z}),(0,a.Wm)(c.Z,{"help-key":"nit/cc"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:`Guardar ${e.entity}`,class:"col advance-btn text-no-wrap",onClick:R},null,8,["label"])])),_:1})])):-1!==_.value?((0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(d,{class:"col revert-btn shadow-10",label:"Cancelar",onClick:Z}),(0,a.Wm)(d,{label:`Editar ${e.entity}`,class:"col advance-btn text-no-wrap",onClick:D},null,8,["label"])])):(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(c.Z,{key:1,"help-key":"terceros"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:`Agregar ${e.entity}`,class:"advance-btn",onClick:q},null,8,["label"])])),_:1}))])}}});var v=t(4842),g=t(4554),w=t(3944),j=t(6915),k=t(8240),C=t(3017),y=t(677),_=t(7518),q=t.n(_);const Z=b,R=Z;q()(b,"components",{QInput:v.Z,QIcon:g.Z,QPopupProxy:w.Z,QDate:j.Z,QBtn:k.Z,QSelect:C.Z}),q()(b,"directives",{ClosePopup:y.Z})},1186:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var a=t(3673),l=t(9396),o=t(9721),n=t(4554);const i=(0,a.aZ)({props:{helpKey:null},setup(e){const s=e,t=(0,a.Rr)(),i=(0,l.K)(),r=(0,a.Fl)((()=>i.helpFlag));function c(e){i.provideHelp(s.helpKey)}let u="";const d=()=>{if(r.value){const e=(0,a.h)(t.default()[0]);return u=e.props["class"],e.props["onClick"]=e=>{c(e)},(0,a.h)(e,{class:"responsive-table-btn"},(()=>[(0,a.h)(o.Z,{floating:!0,class:"advance-btn",outline:!0},(()=>(0,a.h)(n.Z,{name:"help"})))]))}return(0,a.h)(t.default()[0],{class:u})};return(e,s)=>((0,a.wg)(),(0,a.j4)(d))}}),r=i,c=r},4826:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var a=t(3673),l=t(9396),o=t(6115),n=t(4554);const i=(0,a.aZ)({props:{helpKey:null},setup(e){const s=e,t=(0,a.Rr)(),i=(0,l.K)(),r=(0,a.Fl)((()=>i.helpFlag));function c(e){i.provideHelp(s.helpKey)}let u="";const d=()=>{if(r.value){const e=(0,a.h)(t.default()[0]);return u=e.props["class"],e.props["onClick"]=e=>{c(e)},(0,a.h)(o.Z,{class:"responsive-table-btn",label:e.props.label,onClick:e=>{c(e)},onclick:e=>{c(e)},readonly:!0},{append:()=>(0,a.h)(n.Z,{name:"info"})})}return(0,a.h)(t.default()[0],{class:u})};return(e,s)=>((0,a.wg)(),(0,a.j4)(d))}}),r=i,c=r},4913:(e,s,t)=>{"use strict";t.d(s,{Z:()=>T});var a=t(3673),l=t(2323),o=t(1959),n=t(1701),i=t(2946),r=t(3311);class c{constructor(e){this.filter=e}find(e){return Object.values(e).filter((e=>e.codigo.toUpperCase().startsWith(this.filter.value.toUpperCase())||e.descripcion.toUpperCase().startsWith(this.filter.value.toUpperCase())))}}class u{constructor(e){this.filter=e}find(e){return Object.values(e).filter((e=>e.codigo.toUpperCase().startsWith(this.filter.value.toUpperCase())||e.descripcion.toUpperCase().startsWith(this.filter.value.toUpperCase())))}}var d=t(2473);const p=e=>((0,a.dD)("data-v-2739d591"),e=e(),(0,a.Cn)(),e),m=p((()=>(0,a._)("br",null,null,-1))),f=p((()=>(0,a._)("thead",{class:"thead-sticky text-left"},[(0,a._)("tr",null,[(0,a._)("th",null,"Código"),(0,a._)("th",null,"Descripción")])],-1))),h=["onClick"],b=p((()=>(0,a._)("br",null,null,-1))),v=p((()=>(0,a._)("thead",{class:"thead-sticky text-left"},[(0,a._)("tr",null,[(0,a._)("th",null,"Código"),(0,a._)("th",null,"Descripción")])],-1))),g=["onClick"],w=(0,a.aZ)({emits:[...n.Z.emits],setup(e){const{onDialogOK:s,onDialogHide:t,onDialogCancel:p,dialogRef:w}=(0,n.Z)(),j=(0,d.S)();function k(e){console.log(e),j.setPreferedInventario(e)}const C=(0,o.iH)(j.preferedInventario),y=(0,i.r)(),_=(0,r.g)(),q=(0,o.iH)(""),Z=new c(q),R=new u(q),U=(0,o.iH)([]);function D(){switch(C.value){case"items":U.value=y.find(Z);break;case"servicios":U.value=_.find(R);break}}function x(e){s(e)}return(e,s)=>{const t=(0,a.up)("q-tab"),o=(0,a.up)("q-tabs"),n=(0,a.up)("q-separator"),i=(0,a.up)("q-input"),r=(0,a.up)("q-item-section"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-item"),d=(0,a.up)("q-virtual-scroll"),p=(0,a.up)("q-tab-panel"),j=(0,a.up)("q-tab-panels"),y=(0,a.up)("q-card"),_=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(_,{ref_key:"dialogRef",ref:w},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{class:(0,l.C_)({"mobile-modal-selector":e.$q.platform.is.mobile})},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:C.value,"onUpdate:modelValue":[s[0]||(s[0]=e=>C.value=e),k],dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{name:"items",label:"Items"}),(0,a.Wm)(t,{name:"servicios",label:"Servicios"})])),_:1},8,["modelValue"]),(0,a.Wm)(n),(0,a.Wm)(j,{modelValue:C.value,"onUpdate:modelValue":s[3]||(s[3]=e=>C.value=e),animated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"items"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"q-pa-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:q.value,"onUpdate:modelValue":[s[1]||(s[1]=e=>q.value=e),D],autofocus:"",class:"col",label:"Código o descripción"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:"search",round:"",onClick:D})])),_:1})])),_:1}),m,(0,a.Wm)(d,{items:U.value,style:{"max-height":"30vh","min-height":"10vh"},type:"table"},{before:(0,a.w5)((()=>[f])),default:(0,a.w5)((({item:e,index:s})=>[((0,a.wg)(),(0,a.iD)("tr",{key:s,onClick:s=>x(e)},[(0,a._)("td",null,(0,l.zw)(e.codigo),1),(0,a._)("td",null,(0,l.zw)(e.descripcion),1)],8,h))])),_:1},8,["items"])])),_:1}),(0,a.Wm)(p,{name:"servicios"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"q-pa-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:q.value,"onUpdate:modelValue":[s[2]||(s[2]=e=>q.value=e),D],autofocus:"",class:"col",label:"Código o descripción"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:"search",round:"",onClick:D})])),_:1})])),_:1}),b,(0,a.Wm)(d,{items:U.value,style:{"max-height":"30vh","min-height":"10vh"},type:"table"},{before:(0,a.w5)((()=>[v])),default:(0,a.w5)((({item:e,index:s})=>[((0,a.wg)(),(0,a.iD)("tr",{key:s,onClick:s=>x(e)},[(0,a._)("td",null,(0,l.zw)(e.codigo),1),(0,a._)("td",null,(0,l.zw)(e.descripcion),1)],8,g))])),_:1},8,["items"])])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["class"])])),_:1},512)}}});var j=t(4260),k=t(6778),C=t(151),y=t(7547),_=t(3269),q=t(5869),Z=t(5906),R=t(6602),U=t(3414),D=t(2035),x=t(4842),W=t(8240),I=t(9698),S=t(7518),V=t.n(S);const Q=(0,j.Z)(w,[["__scopeId","data-v-2739d591"]]),T=Q;V()(w,"components",{QDialog:k.Z,QCard:C.Z,QTabs:y.Z,QTab:_.Z,QSeparator:q.Z,QTabPanels:Z.Z,QTabPanel:R.Z,QItem:U.Z,QItemSection:D.Z,QInput:x.Z,QBtn:W.Z,QVirtualScroll:I.Z})},6665:(e,s,t)=>{"use strict";t.d(s,{Z:()=>w});var a=t(3673),l=t(1959),o=t(2323),n=t(5826),i=t(1701);const r=(0,a._)("br",null,null,-1),c=(0,a.aZ)({props:{mensaje:null},emits:[...i.Z.emits],setup(e,{emit:s}){const{dialogRef:t,onDialogOK:c,onDialogHide:u,onDialogCancel:d}=(0,i.Z)(),p=[{label:"No",fn:()=>{d()},class:"revert-btn"},{label:"Si",fn:()=>{c()}}];return(s,i)=>{const c=(0,a.up)("q-item-label"),d=(0,a.up)("q-item-section"),m=(0,a.up)("q-item"),f=(0,a.up)("q-card-section"),h=(0,a.up)("q-card"),b=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(b,{ref_key:"dialogRef",ref:t,onHide:(0,l.SU)(u)},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"q-dialog-plugin"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"bg-javeriana"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.mensaje),1)])),_:1})])),_:1})])),_:1}),r,(0,a.Wm)(n.Z,{btns:p})])),_:1})])),_:1})])),_:1},8,["onHide"])}}});var u=t(6778),d=t(151),p=t(5589),m=t(3414),f=t(2035),h=t(2350),b=t(7518),v=t.n(b);const g=c,w=g;v()(c,"components",{QDialog:u.Z,QCard:d.Z,QCardSection:p.Z,QItem:m.Z,QItemSection:f.Z,QItemLabel:h.Z})},4417:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(3673),l=t(8825);const o=(0,a.aZ)({props:{break:null},setup(e){const s=e,t=(0,a.Rr)();function o(){let e=[];t.action&&(e=t.action().map((e=>(e.props=(0,a.dG)(e.props,{class:["col"]}),(0,a.h)(e)))));const s=t.default(),l=[];if(s.length>1)s.forEach((e=>{const s=n(e);l.push((0,a.h)("div",{class:"col column"},[(0,a.h)("span",{class:"col q-pa-sm presentador-mobile-top shadow-1"},s.label),(0,a.h)("span",{class:"col q-pa-sm presentador-mobile-bottom shadow-2"},s.slot)]))}));else{const e=s[0];e.children.forEach((e=>{const s=n(e);l.push((0,a.h)("div",{class:"col column"},[(0,a.h)("span",{class:"col q-pa-sm presentador-mobile-top shadow-1"},s.label),(0,a.h)("span",{class:"col q-pa-sm presentador-mobile-bottom shadow-2"},s.slot)]))}))}return[...l,...e]}function n(e){if(e.props){if(e.props.label)return{label:e.props.label?e.props.label:"",slot:e};{const s=e.children.default()[0];return{label:s.props.label?s.props.label:"",slot:e}}}{const s=e.children[0];return{label:s.props.label?s.props.label:"",slot:e}}}function i(e){if(e){let s=e.map(((e,s,t)=>(e.props=(0,a.dG)(e.props,{class:["col"]}),0==s&&(e.props=(0,a.dG)(e.props,{class:["presentador-mobile-action-bottom-left"]})),s==t.length-1&&(e.props=(0,a.dG)(e.props,{class:["presentador-mobile-action-bottom-right"]})),(0,a.h)(e))));return(0,a.h)("div",{class:["row q-gutter-x-sm"]},s)}return null}function r(e,s){let t=[],l=[];if(e.length>1)e.forEach((e=>{const s=n(e);t.push((0,a.h)("span",{class:"col q-pa-sm"},s.label)),l.push((0,a.h)("span",{class:"col q-pa-sm"},s.slot))}));else{const s=e[0];s.children.forEach((e=>{const s=n(e);t.push((0,a.h)("span",{class:"col q-pa-sm"},s.label)),l.push((0,a.h)("span",{class:"col q-pa-sm"},s.slot))}))}return(0,a.h)("div",[(0,a.h)("div",{class:"row shadow-1 presentador-mobile-top"},t),(0,a.h)("div",{class:["column","presentador-mobile-bottom","shadow-2"]},[(0,a.h)("div",{class:"row items-center"},l),i(s)])])}const c=()=>{const e=s.break?s.break:4;if((0,l.Z)().platform.is.desktop){const s=t.default();let l=null;t.action&&(l=t.action());const o=[];if(s.length>1){for(let t=0;t<s.length;t+=e)t+e>s.length?o.push(r(s,l)):o.push(r(s,null));return(0,a.h)("div",o)}{let t=s[0].children;if(!t){const e=n(s[0]);return(0,a.h)("div",[(0,a.h)("div",{class:"row shadow-1 presentador-mobile-top"},(0,a.h)("span",{class:"col q-pa-sm"},e.label)),(0,a.h)("div",{class:["column","presentador-mobile-bottom","shadow-2"]},[(0,a.h)("div",{class:"row items-center"},(0,a.h)("span",{class:"col q-pa-sm"},e.slot)),i(l)])])}for(let s=0;s<t.length;s+=e)s+e>t.length?o.push(r(t.slice(s,s+e),l)):o.push(r(t.slice(s,s+e),null));return(0,a.h)("div",o)}}return(0,a.h)("div",{class:"column q-gutter-y-sm"},o())};return(e,s)=>((0,a.wg)(),(0,a.j4)(c))}}),n=o,i=n},2062:(e,s,t)=>{"use strict";t.d(s,{Z:()=>g});var a=t(3673),l=t(2323),o=t(1959),n=t(1701),i=t(3315);const r=(0,a.aZ)({emits:[...n.Z.emits],setup(e){const{onDialogOK:s,onDialogHide:t,onDialogCancel:r,dialogRef:c}=(0,n.Z)(),u=(0,i.M)(),d=(0,o.iH)(""),p=e=>e.children?{label:`${e.recurso.idRecurso}: ${e.recurso.cuenta}`,children:Object.values(e.children).map(p),value:e.recurso.idRecurso}:{label:`${e.recurso.idRecurso}: ${e.recurso.cuenta}`,value:e.recurso.idRecurso},m=(0,a.Fl)((()=>{let e=[];for(let s of Object.values(u.getTree))e.push(p(s));return e}));function f(){s(d.value)}return(e,s)=>{const t=(0,a.up)("q-tree"),n=(0,a.up)("q-card-section"),i=(0,a.up)("q-btn"),r=(0,a.up)("q-card"),u=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(u,{ref_key:"dialogRef",ref:c},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:(0,l.C_)({"mobile-modal-selector":e.$q.platform.is.mobile})},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(t,{nodes:(0,o.SU)(m),"node-key":"value",selected:d.value,"onUpdate:selected":s[0]||(s[0]=e=>d.value=e),"selected-color":"red"},null,8,["nodes","selected"])])),_:1}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{label:"Seleccionar",class:"full-width",onClick:f})])),_:1})])),_:1},8,["class"])])),_:1},512)}}});var c=t(4260),u=t(6778),d=t(151),p=t(5589),m=t(5078),f=t(8240),h=t(7518),b=t.n(h);const v=(0,c.Z)(r,[["__scopeId","data-v-20267e3d"]]),g=v;b()(r,"components",{QDialog:u.Z,QCard:d.Z,QCardSection:p.Z,QTree:m.Z,QBtn:f.Z})},1289:(e,s,t)=>{"use strict";t.d(s,{Z:()=>U});var a=t(3673),l=t(2323),o=t(1959);const n=e=>((0,a.dD)("data-v-2977634c"),e=e(),(0,a.Cn)(),e),i={class:"bg-subs"},r=n((()=>(0,a._)("th",null,null,-1))),c={class:"text-center"},u={class:"row q-gutter-x-sm"},d={key:1,class:"column"},p={key:0,class:"bg-subs text-center",style:{"font-size":"x-large"}},m={class:"row q-gutter-x-xs q-ma-xs"},f=(0,a.aZ)({props:{schema:null,data:null,height:null,title:null,actions:null},setup(e){const s=e,t=(0,a.Fl)((()=>s.schema.filter((e=>e.responsive)))),n=(0,o.iH)(null);function f(e){}return(s,h)=>{const b=(0,a.up)("q-btn"),v=(0,a.up)("q-markup-table"),g=(0,a.up)("q-item-label"),w=(0,a.up)("q-item-section"),j=(0,a.up)("q-item"),k=(0,a.up)("q-list"),C=(0,a.up)("q-expansion-item"),y=(0,a.up)("q-virtual-scroll");return(0,a.wg)(),(0,a.iD)("div",null,[s.$q.platform.is.desktop?((0,a.wg)(),(0,a.j4)(v,{key:0,style:(0,l.j5)(`max-height: ${e.height?e.height:400}px`),class:"item-bordered my-sticky-header-table"},{default:(0,a.w5)((()=>[(0,a._)("thead",i,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.schema,(e=>((0,a.wg)(),(0,a.iD)("th",{key:`table-${e.field}`,class:"text-left"},(0,l.zw)(e.label),1)))),128)),r])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.data,((s,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:`table-item-${t}`},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.schema,(e=>((0,a.wg)(),(0,a.iD)("td",{key:`table-item-${t}-${e.field}`,class:"text-left",style:{"white-space":"normal"}},(0,l.zw)(e.prefix?e.prefix:"")+(0,l.zw)(e.formatter?e.formatter(s[e.field]):s[e.field])+(0,l.zw)(e.suffix?e.suffix:""),1)))),128)),(0,a._)("td",c,[(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.actions,((e,o)=>((0,a.wg)(),(0,a.j4)(b,{class:(0,l.C_)([e.class?e.class:"","col"]),icon:e.icon,"label]":e.label,onClick:a=>e.onClick(s,t)},null,8,["class","icon","label]","onClick"])))),256))])])])))),128))])])),_:1},8,["style"])):((0,a.wg)(),(0,a.iD)("div",d,[e.title?((0,a.wg)(),(0,a.iD)("span",p,(0,l.zw)(e.title),1)):(0,a.kq)("",!0),(0,a.Wm)(y,{ref_key:"virtualListRef",ref:n,items:e.data,separator:"",style:{"max-height":"300px"}},{default:(0,a.w5)((({item:s,index:n})=>[(0,a.Wm)(C,{group:"table-items",label:s[e.schema[0].field],"header-class":"advance-btn","switch-toggle-side":"",onClick:e=>f(n)},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(t),(e=>((0,a.wg)(),(0,a.j4)(j,{key:`table-card-${n}-${e.field}`},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.label)+": "+(0,l.zw)(e.prefix?e.prefix:"")+(0,l.zw)(e.formatter?e.formatter(s[e.field]):s[e.field])+(0,l.zw)(e.suffix?e.suffix:""),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024),(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.actions,((e,t)=>((0,a.wg)(),(0,a.j4)(b,(0,a.dG)({class:[e.class?e.class:"","col"],icon:e.icon,label:e.label},e.class?{}:{outline:!0},{onClick:t=>e.onClick(s,n)}),null,16,["class","icon","label","onClick"])))),256))])])),_:2},1032,["label","onClick"])])),_:1},8,["items"])]))])}}});var h=t(4260),b=t(1731),v=t(8240),g=t(9698),w=t(429),j=t(7011),k=t(3414),C=t(2035),y=t(2350),_=t(2462),q=t(7518),Z=t.n(q);const R=(0,h.Z)(f,[["__scopeId","data-v-2977634c"]]),U=R;Z()(f,"components",{QMarkupTable:b.Z,QBtn:v.Z,QVirtualScroll:g.Z,QExpansionItem:w.Z,QList:j.Z,QItem:k.Z,QItemSection:C.Z,QItemLabel:y.Z,QTable:_.Z})},7786:(e,s,t)=>{"use strict";t.d(s,{Z:()=>v});var a=t(3673),l=t(1959),o=t(2323);function n(e){const s=e.split(" "),t=s.map((e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()));return"".concat(...t)}const i=(0,a.aZ)({props:{tabs:null},setup(e){const s=e,t=s.tabs.map(n),i=(0,l.iH)(t[0]);return(0,a.bv)((()=>{console.log(i.value)})),(s,n)=>{const r=(0,a.up)("q-tab"),c=(0,a.up)("q-tabs"),u=(0,a.up)("q-separator"),d=(0,a.up)("q-tab-panel"),p=(0,a.up)("q-tab-panels");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=e=>i.value=e),align:"justify",dense:"","indicator-color":"primary","active-class":"clase-activa",class:"clase-inactiva"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(t),((s,t)=>((0,a.wg)(),(0,a.j4)(r,{label:e.tabs[t],name:s},null,8,["label","name"])))),256))])),_:1},8,["modelValue"]),(0,a.Wm)(u),(0,a.Wm)(p,{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=e=>i.value=e),animated:"",class:(0,o.C_)({"q-pa-none":s.$q.platform.is.mobile})},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(t),(e=>((0,a.wg)(),(0,a.j4)(d,{name:e,class:(0,o.C_)({"q-pa-none":s.$q.platform.is.mobile})},{default:(0,a.w5)((()=>[(0,a.WI)(s.$slots,e)])),_:2},1032,["name","class"])))),256))])),_:3},8,["modelValue","class"])],64)}}});var r=t(4260),c=t(7547),u=t(3269),d=t(5869),p=t(5906),m=t(6602),f=t(7518),h=t.n(f);const b=(0,r.Z)(i,[["__scopeId","data-v-831e23fc"]]),v=b;h()(i,"components",{QTabs:c.Z,QTab:u.Z,QSeparator:d.Z,QTabPanels:p.Z,QTabPanel:m.Z})},3940:(e,s,t)=>{"use strict";t.d(s,{Z:()=>T});var a=t(3673),l=t(2323),o=t(1959),n=t(1701),i=t(9900),r=t(8978);class c{constructor(e){this.filter=e}find(e){return Object.values(e).filter((e=>e.clienteID.toUpperCase().startsWith(this.filter.value.toUpperCase())||e.nombre.toUpperCase().startsWith(this.filter.value.toUpperCase())))}}class u{constructor(e){this.filter=e}find(e){return Object.values(e).filter((e=>e.proveedorID.toUpperCase().startsWith(this.filter.value.toUpperCase())||e.nombre.toUpperCase().startsWith(this.filter.value.toUpperCase())))}}var d=t(2473);const p=e=>((0,a.dD)("data-v-3fa6f009"),e=e(),(0,a.Cn)(),e),m=p((()=>(0,a._)("br",null,null,-1))),f=p((()=>(0,a._)("thead",{class:"thead-sticky text-left"},[(0,a._)("tr",null,[(0,a._)("th",null,"Nit/CC"),(0,a._)("th",null,"Nombre")])],-1))),h=["onClick"],b=p((()=>(0,a._)("br",null,null,-1))),v=p((()=>(0,a._)("thead",{class:"thead-sticky text-left"},[(0,a._)("tr",null,[(0,a._)("th",null,"Nit/CC"),(0,a._)("th",null,"Nombre")])],-1))),g=["onClick"],w=(0,a.aZ)({emits:[...n.Z.emits],setup(e){const{onDialogOK:s,onDialogHide:t,onDialogCancel:p,dialogRef:w}=(0,n.Z)(),j=(0,d.S)();function k(e){j.setPreferedTerceros(e)}const C=(0,o.iH)(j.preferedTerceros),y=(0,i.A)(),_=(0,r.D)(),q=(0,o.iH)(""),Z=new c(q),R=new u(q),U=(0,o.iH)([]);function D(){switch(C.value){case"clientes":U.value=y.find(Z);break;case"proveedores":U.value=_.find(R);break}}function x(e){s(e)}return(e,s)=>{const t=(0,a.up)("q-tab"),o=(0,a.up)("q-tabs"),n=(0,a.up)("q-separator"),i=(0,a.up)("q-input"),r=(0,a.up)("q-item-section"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-item"),d=(0,a.up)("q-virtual-scroll"),p=(0,a.up)("q-tab-panel"),j=(0,a.up)("q-tab-panels"),y=(0,a.up)("q-card"),_=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(_,{ref_key:"dialogRef",ref:w},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{class:(0,l.C_)({"mobile-modal-selector":e.$q.platform.is.mobile})},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:C.value,"onUpdate:modelValue":[s[0]||(s[0]=e=>C.value=e),k],dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{name:"clientes",label:"Clientes"}),(0,a.Wm)(t,{name:"proveedores",label:"Proveedores"})])),_:1},8,["modelValue"]),(0,a.Wm)(n),(0,a.Wm)(j,{modelValue:C.value,"onUpdate:modelValue":s[3]||(s[3]=e=>C.value=e),animated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"clientes"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"q-pa-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:q.value,"onUpdate:modelValue":[s[1]||(s[1]=e=>q.value=e),D],autofocus:"",class:"col",label:"Nit/CC o Nombre"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:"search",round:"",onClick:D})])),_:1})])),_:1}),m,(0,a.Wm)(d,{items:U.value,style:{"max-height":"30vh","min-height":"10vh"},type:"table"},{before:(0,a.w5)((()=>[f])),default:(0,a.w5)((({item:e,index:s})=>[((0,a.wg)(),(0,a.iD)("tr",{key:s,onClick:s=>x(e)},[(0,a._)("td",null,(0,l.zw)(e.clienteID),1),(0,a._)("td",null,(0,l.zw)(e.nombre),1)],8,h))])),_:1},8,["items"])])),_:1}),(0,a.Wm)(p,{name:"proveedores"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"q-pa-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:q.value,"onUpdate:modelValue":[s[2]||(s[2]=e=>q.value=e),D],autofocus:"",class:"col",label:"Nit/CC o Nombre"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(r,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:"search",round:"",onClick:D})])),_:1})])),_:1}),b,(0,a.Wm)(d,{items:U.value,style:{"max-height":"30vh","min-height":"10vh"},type:"table"},{before:(0,a.w5)((()=>[v])),default:(0,a.w5)((({item:e,index:s})=>[((0,a.wg)(),(0,a.iD)("tr",{key:s,onClick:s=>x(e)},[(0,a._)("td",null,(0,l.zw)(e.proveedorID),1),(0,a._)("td",null,(0,l.zw)(e.nombre),1)],8,g))])),_:1},8,["items"])])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["class"])])),_:1},512)}}});var j=t(4260),k=t(6778),C=t(151),y=t(7547),_=t(3269),q=t(5869),Z=t(5906),R=t(6602),U=t(3414),D=t(2035),x=t(4842),W=t(8240),I=t(9698),S=t(7518),V=t.n(S);const Q=(0,j.Z)(w,[["__scopeId","data-v-3fa6f009"]]),T=Q;V()(w,"components",{QDialog:k.Z,QCard:C.Z,QTabs:y.Z,QTab:_.Z,QSeparator:q.Z,QTabPanels:Z.Z,QTabPanel:R.Z,QItem:U.Z,QItemSection:D.Z,QInput:x.Z,QBtn:W.Z,QVirtualScroll:I.Z})},6700:(e,s,t)=>{var a={"./af":5809,"./af.js":5809,"./ar":6069,"./ar-dz":481,"./ar-dz.js":481,"./ar-kw":3994,"./ar-kw.js":3994,"./ar-ly":3312,"./ar-ly.js":3312,"./ar-ma":239,"./ar-ma.js":239,"./ar-sa":1863,"./ar-sa.js":1863,"./ar-tn":9607,"./ar-tn.js":9607,"./ar.js":6069,"./az":9281,"./az.js":9281,"./be":9945,"./be.js":9945,"./bg":9384,"./bg.js":9384,"./bm":1476,"./bm.js":1476,"./bn":3345,"./bn-bd":216,"./bn-bd.js":216,"./bn.js":3345,"./bo":1713,"./bo.js":1713,"./br":9655,"./br.js":9655,"./bs":7296,"./bs.js":7296,"./ca":3049,"./ca.js":3049,"./cs":8393,"./cs.js":8393,"./cv":8039,"./cv.js":8039,"./cy":5563,"./cy.js":5563,"./da":1960,"./da.js":1960,"./de":7533,"./de-at":6674,"./de-at.js":6674,"./de-ch":7732,"./de-ch.js":7732,"./de.js":7533,"./dv":8343,"./dv.js":8343,"./el":7004,"./el.js":7004,"./en-au":2517,"./en-au.js":2517,"./en-ca":4929,"./en-ca.js":4929,"./en-gb":9722,"./en-gb.js":9722,"./en-ie":6923,"./en-ie.js":6923,"./en-il":8050,"./en-il.js":8050,"./en-in":9624,"./en-in.js":9624,"./en-nz":540,"./en-nz.js":540,"./en-sg":4375,"./en-sg.js":4375,"./eo":40,"./eo.js":40,"./es":9720,"./es-do":5595,"./es-do.js":5595,"./es-mx":180,"./es-mx.js":180,"./es-us":1563,"./es-us.js":1563,"./es.js":9720,"./et":9217,"./et.js":9217,"./eu":9474,"./eu.js":9474,"./fa":5243,"./fa.js":5243,"./fi":7645,"./fi.js":7645,"./fil":5350,"./fil.js":5350,"./fo":5622,"./fo.js":5622,"./fr":1467,"./fr-ca":3439,"./fr-ca.js":3439,"./fr-ch":4335,"./fr-ch.js":4335,"./fr.js":1467,"./fy":6026,"./fy.js":6026,"./ga":2969,"./ga.js":2969,"./gd":1347,"./gd.js":1347,"./gl":1085,"./gl.js":1085,"./gom-deva":904,"./gom-deva.js":904,"./gom-latn":9597,"./gom-latn.js":9597,"./gu":8705,"./gu.js":8705,"./he":9128,"./he.js":9128,"./hi":2821,"./hi.js":2821,"./hr":9002,"./hr.js":9002,"./hu":4814,"./hu.js":4814,"./hy-am":658,"./hy-am.js":658,"./id":9344,"./id.js":9344,"./is":8204,"./is.js":8204,"./it":376,"./it-ch":1549,"./it-ch.js":1549,"./it.js":376,"./ja":9293,"./ja.js":9293,"./jv":6401,"./jv.js":6401,"./ka":482,"./ka.js":482,"./kk":7329,"./kk.js":7329,"./km":4241,"./km.js":4241,"./kn":3566,"./kn.js":3566,"./ko":2742,"./ko.js":2742,"./ku":2915,"./ku.js":2915,"./ky":6846,"./ky.js":6846,"./lb":4959,"./lb.js":4959,"./lo":2188,"./lo.js":2188,"./lt":8967,"./lt.js":8967,"./lv":1245,"./lv.js":1245,"./me":751,"./me.js":751,"./mi":7501,"./mi.js":7501,"./mk":1643,"./mk.js":1643,"./ml":5597,"./ml.js":5597,"./mn":7612,"./mn.js":7612,"./mr":9065,"./mr.js":9065,"./ms":4703,"./ms-my":4645,"./ms-my.js":4645,"./ms.js":4703,"./mt":4365,"./mt.js":4365,"./my":3788,"./my.js":3788,"./nb":7357,"./nb.js":7357,"./ne":9109,"./ne.js":9109,"./nl":3746,"./nl-be":1985,"./nl-be.js":1985,"./nl.js":3746,"./nn":7175,"./nn.js":7175,"./oc-lnc":566,"./oc-lnc.js":566,"./pa-in":2733,"./pa-in.js":2733,"./pl":182,"./pl.js":182,"./pt":505,"./pt-br":7839,"./pt-br.js":7839,"./pt.js":505,"./ro":9578,"./ro.js":9578,"./ru":2328,"./ru.js":2328,"./sd":641,"./sd.js":641,"./se":1758,"./se.js":1758,"./si":6680,"./si.js":6680,"./sk":5016,"./sk.js":5016,"./sl":7424,"./sl.js":7424,"./sq":8635,"./sq.js":8635,"./sr":9038,"./sr-cyrl":3716,"./sr-cyrl.js":3716,"./sr.js":9038,"./ss":4771,"./ss.js":4771,"./sv":3517,"./sv.js":3517,"./sw":9419,"./sw.js":9419,"./ta":5959,"./ta.js":5959,"./te":1739,"./te.js":1739,"./tet":2264,"./tet.js":2264,"./tg":4792,"./tg.js":4792,"./th":8328,"./th.js":8328,"./tk":702,"./tk.js":702,"./tl-ph":7814,"./tl-ph.js":7814,"./tlh":797,"./tlh.js":797,"./tr":6691,"./tr.js":6691,"./tzl":6891,"./tzl.js":6891,"./tzm":6362,"./tzm-latn":7855,"./tzm-latn.js":7855,"./tzm.js":6362,"./ug-cn":7606,"./ug-cn.js":7606,"./uk":513,"./uk.js":513,"./ur":3803,"./ur.js":3803,"./uz":344,"./uz-latn":8957,"./uz-latn.js":8957,"./uz.js":344,"./vi":3,"./vi.js":3,"./x-pseudo":8842,"./x-pseudo.js":8842,"./yo":2083,"./yo.js":2083,"./zh-cn":4536,"./zh-cn.js":4536,"./zh-hk":2475,"./zh-hk.js":2475,"./zh-mo":1515,"./zh-mo.js":1515,"./zh-tw":4746,"./zh-tw.js":4746};function l(e){var s=o(e);return t(s)}function o(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=o,e.exports=l,l.id=6700}}]);