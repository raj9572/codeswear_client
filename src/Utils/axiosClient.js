import axios from 'axios'
import { KEY_ACCESS_TOKEN, getItem } from './localStorageManage';

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true
})


axiosClient.interceptors.request.use((request) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
     request.headers['Authorization'] = `Bearer ${accessToken}`
    return request
}
)



axiosClient.interceptors.response.use((response) => {

        const data = response.data;
        console.log('axios client data',data)
        if (data.status === 'ok') {
            return data
        }
})