import axios from "axios";
import { baseUrl } from "../consts";

export class ContactApi {
  static async getContactApi(values) {
    try {
      await axios.post(`${baseUrl}/contact`, values);
    } catch (err) {
      console.log(err);
    }
  }
}
