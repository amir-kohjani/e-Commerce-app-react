import axios from "axios";
const apiAddress =process.env.REACT_APP_API_ADDRESS_DOMAIN_NAME; 

const headers = {
    "Content-Type": "application/json"
};

export  const categoryService = {
    getProductsByCategory: (category,filters,curentPage) => {
  
        let params = {
            "category": category,
            "page":curentPage,
            ...filters?.color ? {"color":filters?.color} : {},
            ...filters?.size ? {"size":filters?.size} : {},
            ...filters?.sort ? {"sort":filters?.sort} : {},

        
        }
  
        return axios.get(apiAddress + "/product/byCategory", { headers, params })
    },
    test:()=>{
        
    }
}