import axios from "axios";
import { baseUrl } from "../consts";

export class UsersApi {
  static async getUser() {
    const res = await axios(`${baseUrl}/users/user`, {
      withCredentials: true,
      credentials: "include",
    });
    console.log(res);
    return res;
  }
}
