import axios from 'axios';

// Set config defaults when creating the instance
const axiosApi = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    withCredentials: true,
    /* headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    } */

    //'X-CSRFToken': csrftoken
});



export default axiosApi;