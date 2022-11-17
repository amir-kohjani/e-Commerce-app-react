import axios from "axios";
const apiAddress = "http://192.168.222.161:4000/product"

const headers = {
    "Content-Type": "application/json"
};

export const productService = {
    getProductsById: (id) => {
        let params = {
            "Id": id
        }

        
          return axios.get(apiAddress + "/byId", { headers, params })
        
       
    },
    getProductsSuggest:(categories) => {
        let params=  {
            "category":categories
        }
// console.log(categories)
        return axios.get(apiAddress + "/bySuggest", { headers, params })

    }
}
