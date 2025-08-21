
import axios from 'axios'
import { KEY_ACCESS_TOKEN, getItem } from './localStorageManage';
import { setLoading } from '../redux/Slice/appConfigSlice';


export const createAxiosClient = (store) => {
    const axiosClient = axios.create({
      baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1`,
      withCredentials: true,
    });

    axiosClient.interceptors.request.use((request) => {
        const accessToken = getItem(KEY_ACCESS_TOKEN);
         request.headers['Authorization'] = `Bearer ${accessToken}`
         store.dispatch(setLoading(true))
         return request
        }
        )
        
        
        
        axiosClient.interceptors.response.use((response) => {
            store.dispatch(setLoading(false))
            const data = response.data;
            // console.log('axios client data',data)
            if (data.status === 'ok') {
    
                return data
            }
    })
    
    return axiosClient
}






export const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}/api/v1`,
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
        // console.log('axios client data',data)
        if (data.status === 'ok') {

            return data
        }
})




