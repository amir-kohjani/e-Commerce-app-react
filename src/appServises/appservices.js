import axios from "axios";
const apiAddress = process.env.REACT_APP_API_ADDRESS_DOMAIN_NAME

const headers = {
    "Content-Type": "application/json"

};

export const appService = {
    testConnection: () => {
        return axios.get(apiAddress, { headers });
    },
    getUserById: (id) => {

        let params = {
            "id": id
        }
        return axios.get(apiAddress + "/user/getUserById", { headers, params })
    },
    getCartByUserId: (id) => {
        let params = {
            "userId": id
        }
        return axios.get(apiAddress + "/cart/getCartByUserId", { headers, params });
    }
}
