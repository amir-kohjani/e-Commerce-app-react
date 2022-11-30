import axios from "axios";
const apiAddress ="http://localhost:4000"

const headers = {
    "Content-Type": "application/json"
};

export  const categoryService = {
    getProductsByCategory: (category) => {
        console.log(apiAddress)
        let params = {
            "category": category
        }
        return axios.get(apiAddress + "/product/byCategory", { headers, params })
    },
    test:()=>{
        
    }
}