import axios from "axios";
const apiAddress =process.env.REACT_APP_API_ADDRESS_DOMAIN_NAME; 


const headers = {
    "Content-Type": "application/json"
    
  };

export  const HomeService = {
    testConnection:()=>{
        return axios.get(apiAddress, {headers});
    },
    getProductsByCategory: (category) => {
      
        let params = {
            "category": category
        }
        return axios.get(apiAddress+"/product/byCategory", {headers,params})
    }
}
