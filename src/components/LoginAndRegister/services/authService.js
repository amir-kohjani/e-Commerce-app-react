import axios from "axios";
const apiAddress = process.env.REACT_APP_API_ADDRESS_DOMAIN_NAME

const headers = {
    "Content-Type": "application/json"
    
  };

  const authService = {
    genCode :(phoneNumber)=>{
        let params = {
            "phone": phoneNumber
        }
        return axios.get(apiAddress+"/auth",{ headers, params})
    },
    validateCode:(numberPhone,code)=>{
      console.log(numberPhone)
      let params = {
        "code": code,
        "phone":numberPhone
      }
      return axios.get(apiAddress+"/auth/valiteCode",{ headers, params}, )
    }
  }

  export default authService;