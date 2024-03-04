import axios from 'axios'



export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true
})


axiosClient.interceptors.request.use((request) => {
        return request
    }
)



axiosClient.interceptors.response.use(
       
)