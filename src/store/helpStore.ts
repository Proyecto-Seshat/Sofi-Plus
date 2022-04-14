import {defineStore} from "pinia";

export const helpStore = defineStore("Help", {
  state: () => {
    const dict: { [key: string]: string } = {
      "terceros": "Son las personas agenas a tu negocio, pueden ser, a quienes vendes ( clientes) o a quienes compras (proveedores)",
      "nit/cc": "Este es el numero de identificacion de tu cedula en caso de querer registrar una persona o el numero de registro que la empresa tiene",
      "terceros:tipo": "Este es el tipo de persona que quieres registrar, seleccionas empresa si quieres registrar un negocio, o seleccionas persona si  quieres registrar una.",
      "factura:cantidad": "Se refiere a la cantidad de un item que se esta vendiendo",
      "factura:producto": "Se refiere al item que se esta vendiendo",
      "recibo:factura": "Factura asociada a la deuda en caso de que el cliente la este pagando"
    };
    return {
      dict: dict,
      helpFlag: false,
      helpInfo: ""
    };
  },
  actions: {
    requestHelp() {
      this.helpFlag = true;
      document.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.key == "Escape") {
          this.helpFlag = false;
        }
      });
    },
    provideHelp(key: string): string {
      this.helpFlag = false;
      this.helpInfo = this.dict[key];
      return this.dict[key];
    },
    closeHelp() {
      this.helpFlag = false;
      this.helpInfo = "";
    },
  },
  persist: true
})
