import axios from "axios";
const apiAddress = "http://192.168.222.161:4000/product"

const headers = {
    "Content-Type": "application/json"
};

export const categoryService = {
    getProductsByCategory: (id) => {
        let params = {
            "Id": id
        }
        return axios.get(apiAddress + "/byId", { headers, params })
    }
}
