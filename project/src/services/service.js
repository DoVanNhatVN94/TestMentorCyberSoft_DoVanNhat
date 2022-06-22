import { http } from "../util/settingAxios"

class service {

    signup=(user)=>{
        return http.post('/api/Users/signup',user)
    }
    signin=(user)=>{
        return http.post('/api/Users/signin',user)
    }
     signin2=(user)=>{
        return http.post('/api/Project/getAllProject',user)
    }
} 