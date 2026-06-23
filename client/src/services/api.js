import axios from "axios";
 
const api=axios.create({
  baseURL:"https://interviewaceai-rpmo.onrender.com"
});
export default api;