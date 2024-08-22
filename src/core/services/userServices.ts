import { Axios } from "axios";
import {Booking } from "../interface/booking.interface";
import { http } from "../utils/https";


class AuthService {
    constructor(private readonly request: Axios) {
      console.log(request);
    }

     /**
   * Post -- Register
   * user register data.email,data.firstname.data.lastname,data.phone and data.password
   * @param {*} data
   */
    async userRegister(data: Booking): Promise<any> {
        const response = await this.request.post("/user/booking", data, {});
        return response;
      }

}
export default new AuthService(http);