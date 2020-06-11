import base from "./base"
import { getData } from "../utils/http"


const customer = {
    getCustomersData(){
        return getData("/customer.json")
    }


}

export default customer;