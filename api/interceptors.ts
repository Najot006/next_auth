import axios from "axios";
import Cookies from "js-cookie"
const API_URL = "http://34.143.212.163:3000/api"
const $api = axios.create({
    baseURL: API_URL,
})

const $apiAuth = axios.create({
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    const accessToken = Cookies.get("token")
    if(config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

export  {$api,$apiAuth}

