import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://backend.tubetailor.ai/api/';
// axios.defaults.headers.common['Authorization'] = `Bearer 22|5TlSLTbUUXjTgVVnGz1jjVrwk3qa9p4KdSroxVYA37e4c6af`;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export async function getRequestApi(url, parameter) {
  // alert(localStorage.getItem('token'))
    try {
      const response = await axios.get(url, { params: parameter });
      return response.data;
    } catch (error) {
      console.error("Error in API request:", error);
      throw error;
    }
  }
  
export async function postRequest(url, parameter) {
    const response = await axios.post(url, parameter);
    return response.data;
}
