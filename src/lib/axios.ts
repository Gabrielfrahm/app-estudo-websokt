import axios from 'axios/index';


const instance = axios.create({
  baseURL: 'http://192.168.15.139:3333'
});


instance.interceptors.response.use((response) =>{
  if (response.data) {
    
    return response.data;
  }
}, (error) => {
  return Promise.reject(error.response.data);
});

export default instance;