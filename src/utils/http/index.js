import axios from 'axios'
import { requestBefore, requestError, responseAfter, responseError } from './interceptors'

// http defaults configs
const http = axios.create({
    baseURL: 'http://localhost:8081',
})
// axios.defaults.timeout = 10000
axios.defaults.retryDelay = 60000

// axios interceptors configs
http.interceptors.request.use(requestBefore, requestError)
http.interceptors.response.use(responseAfter, responseError)

export default http
