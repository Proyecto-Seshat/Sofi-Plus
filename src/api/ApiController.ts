import axios from "axios";
import {userStore} from "src/store/userStore";

export class ApiController {
  static userStore = userStore();

  private static url: string = "http://192.168.1.122:8080";

  static async post(path: string, data: any) {
    return await axios.post(ApiController.url + path, data, ApiController.userStore.token !== "" ? {
      headers: {
        Authorization: "Bearer " + ApiController.userStore.token
      }
    } : {});
  }

  static async catalog<T>(path: string): Promise<T[]> {
    return (await axios.get(ApiController.url + path + "/catalog", ApiController.userStore.token !== "" ? {
      headers: {
        Authorization: "Bearer " + ApiController.userStore.token
      }
    } : {})).data;
  }

}
