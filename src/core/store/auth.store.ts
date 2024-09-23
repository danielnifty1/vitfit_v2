import {Booking } from "../interface/booking.interface";
import { defineStore } from "pinia";
import userService from "../services/userServices";

const authStore = defineStore("auth", {
actions:{

    async userRegister(data: Booking): Promise<any> {

        try{
            const response = await userService.userRegister(data)
            if(response.data){
                console.log("this response.date"+response.data);
                return await Promise.resolve(response);
            } else if(response.response){
                console.log("this response.response"+response.response);

                return await Promise.reject(response.response);
            }else{
                console.log("this response.message"+response.message);
                
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