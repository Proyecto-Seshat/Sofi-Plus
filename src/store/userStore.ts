import {defineStore} from "pinia";

export const userStore = defineStore("User", {
  state: () => {
    const permissions: { [key: string]: any[] } = {
      "ADMIN": [
        {
          key: "AM",
          label: "ADMIN"
        }
      ],
      "USUARIO": [
        {
          key: "MP",
          label: "MENÚ PRINCIPAL"
        },
        {
          key: "FV",
          label: "FACTURA DE  VENTA"
        },
        {
          key: "RC",
          label: "RECIBOS DE CAJA"
        },
        {
          key: "CE",
          label: "COMPROBANTES DE EGRESO"
        },
        {
          key: "DV",
          label: "DEVOLUCIONES"
        },{
          key: "AV",
          label: "ACTIVOS"
        },
        {
          key: "IV",
          label: "INVENTARIOL"
        },
        {
          key: "TR",
          label: "TERCEROS"
        },
        {
          key: "RP",
          label: "REPORTES"
        },
        {
          key: "EF",
          label: "INFORMES FINANCIEROS"
        }
      ],
    };
    return {
      name: "",
      role: "",
      permissions: permissions,
      token: ""
    };
  },
  getters: {
    getPermissions(): any[] {
      return this.permissions[this.role];
    }
  },
  actions: {
    async login(name: string, role: string, token: string) {
      this.name = name;
      this.role = role;
      this.token = token;
    },
    logout() {
      this.name = "";
      this.role = "";
      this.token = "";
    }
  },
  persist: true
})
