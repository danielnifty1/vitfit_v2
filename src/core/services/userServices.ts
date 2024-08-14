import { Axios } from "axios";
import authHeader from "../utils/auth.header";
import { http } from "../utils/http";

class UserService {
    constructor(private readonly request: Axios) { 
        console.log(request);
    }




}