"use strict";(self["webpackChunkmockups"]=self["webpackChunkmockups"]||[]).push([[578],{7887:(e,i,s)=>{s.r(i),s.d(i,{default:()=>R});var t=s(3673),o=s(7786),n=s(1959),a=s(4585),p=s(2946),r=s(7831),l=s(8251),c=s(765);const d=(0,t.aZ)({setup(e){const i=[{field:"descripcion",label:"Descripcion",responsive:!0,type:c.N.STRING},{field:"codigo",label:"Codigo",type:c.N.NUMBER},{field:"cantidad",label:"Cantidad",responsive:!0,type:c.N.NUMBER},{field:"dimension",label:"Dimension",responsive:!0,type:c.N.SELECTION,options:l.M.instance().getDimensionsNames()},{field:"unidadPreferida",label:"Unidad preferida",responsive:!0,type:c.N.SELECTION,computedOptions:{dependencies:["dimension"],compute:(e,i)=>e[0]?l.M.instance().getUnitsNames(e[0]):[""]}},{field:"impuesto",label:"Impuesto",responsive:!0,type:c.N.NUMBER,prefix:"%"},{field:"costeUnitario",label:"Coste Unitario",responsive:!0,type:c.N.NUMBER},{field:"costeTotal",label:"Coste Total",responsive:!0,type:c.N.NUMBER,computed:{dependencies:["costeUnitario","cantidad"],compute:(e,i)=>isNaN(e[0])||isNaN(e[1])?0:e[0]*e[1]}},{field:"precioVenta",label:"Precio de venta",responsive:!0,type:c.N.NUMBER},{field:"fechaIngreso",label:"Fecha de ingreso",responsive:!0,type:c.N.DATE}],s=(0,p.r)(),{array:o}=(0,r.Jk)(s);return(e,p)=>((0,t.wg)(),(0,t.j4)(a.Z,{data:(0,n.SU)(o),"entity-schema":i,entity:"item",store:(0,n.SU)(s)},null,8,["data","store"]))}}),N=d,u=N;var m=s(7504);const f=(0,m.p)("servicios"),v=(0,t.aZ)({setup(e){const i=[{field:"codigo",label:"Codigo",type:c.N.NUMBER},{field:"descripcion",label:"Descripcion",responsive:!0,type:c.N.STRING},{field:"costo",label:"Costo",responsive:!0,type:c.N.NUMBER},{field:"precioVenta",label:"Precio de venta",responsive:!0,type:c.N.NUMBER}],s=((0,n.qj)([{codigo:"123456",descripcion:"PC",costo:"123456",precioVenta:"123456"}]),f()),{array:o}=(0,r.Jk)(s);return(e,p)=>((0,t.wg)(),(0,t.j4)(a.Z,{data:(0,n.SU)(o),"entity-schema":i,entity:"servicio",store:(0,n.SU)(s)},null,8,["data","store"]))}}),y=v,U=y,b=(0,t.aZ)({setup(e){return(e,i)=>{const s=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o.Z,{tabs:["Items","Servicios"]},{Items:(0,t.w5)((()=>[(0,t.Wm)(u)])),Servicios:(0,t.w5)((()=>[(0,t.Wm)(U)])),_:1})])),_:1})}}});var g=s(4379),E=s(7518),C=s.n(E);const M=b,R=M;C()(b,"components",{QPage:g.Z})}}]);