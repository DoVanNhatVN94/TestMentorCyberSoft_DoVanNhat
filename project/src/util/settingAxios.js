import axios from "axios"
import { assetToken, DOMAIN, token } from "./setting"

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000, // Thời gian nếu như load lâu sẽ out
})
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft: token,
        Authorization : assetToken,
    }
    return config
}, (errors => {
    return Promise.reject(errors)
}))
