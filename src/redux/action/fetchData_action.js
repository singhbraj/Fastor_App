import {TYPE} from './type'
import axios from 'axios'


export const fetchData = (data) =>{

    
    let token = localStorage.getItem('token');
    let user_id = localStorage.getItem('user_id');

    let url =`https://staging.fastor.in/v1/m/restaurant?city_id=${user_id}`
  
    const request  = axios.get(url,{headers:{ "Authorization" : `Bearer ${token}`}})
          .then(response => response.data);
         return {
          type: TYPE.FETCH_DATA,
          payload: request
          };
  
  
  
  }
  