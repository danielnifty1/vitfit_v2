import {Booking } from "../interface/booking.interface";
import { defineStore } from "pinia";
import userService from "../services/userServices";

const authStore = defineStore("auth", {
actions:{

    async userRegister(data: Booking): Promise<any> {

        try{
            const response = await userService.userRegister(data)
            if(response.data){
                return await Promise.resolve(response);
            } else if(response.response){
                return await Promise.reject(response.response);
            }else{
                return await Promise.resolve(response.message);
            }
        }
        catch(e:any){
            return await Promise.reject(e);
        }

    }


}

})



export default authStore;