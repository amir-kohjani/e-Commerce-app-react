import axios from "axios";
// const apiAddress = "http://192.168.222.161:4000/product"
const apiAddress = process.env.REACT_APP_API_ADDRESS_DOMAIN_NAME

const headers = {
    "Content-Type": "application/json"
};

export const productService = {
    getProductsById: (id) => {
        let params = {
            "Id": id
        }


        return axios.get(apiAddress + "/product/byId", { headers, params })

    },
    getProductsSuggest: (categories) => {
        let params = {
            "category": categories
        }
        // console.log(categories)
        return axios.get(apiAddress + "/product/bySuggest", { headers, params })

    },
    addItemToCartByUserId : (item,userId) => {
        let data = {
            item,userId
        }
        return axios.post(apiAddress + "/cart/addItemToCartByUserId",data,{headers});
    }
}
