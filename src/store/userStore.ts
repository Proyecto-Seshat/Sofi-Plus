import {defineStore} from "pinia";

export const userStore = defineStore("User", {
  state: () => {
    const permissions: { [key: string]: string[] } = {
      "admin": [
        "MENÚ PRINCIPAL",
        "FACTURA DE  VENTA",
        "RECIBOS DE CAJA",
        "COMPROBANTES DE EGRESO",
        "DEVOLUCIONES",
        "ACTIVOS",
        "INVENTARIO",
        "TERCEROS",
        "REPORTES",
        "INFORMES FINANCIEROS"
      ],
      "cashier": [
        "MENÚ PRINCIPAL",
        "FACTURA DE  VENTA",
        "RECIBOS DE CAJA",
        "COMPROBANTES DE EGRESO",
        "DEVOLUCIONES"
      ],
      "manager": [
        "MENÚ PRINCIPAL",
        "FACTURA DE  VENTA",
        "RECIBOS DE CAJA",
        "COMPROBANTES DE EGRESO",
        "DEVOLUCIONES",
        "INVENTARIO",
        "TERCEROS"
      ]
    };
    return {
      name: "",
      role: "",
      permissions: permissions
    };
  },
  getters: {
    getPermissions(): string[] {
      return this.permissions[this.role];
    }
  },
  actions: {
    login(name: string, role: string) {
      this.name = name;
      this.role = role;
    },
    logout() {
      this.name = "";
      this.role = "";
    }
  },
  persist: true
})
