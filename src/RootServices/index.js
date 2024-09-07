import axios from "axios";
const BASEURL = 'https://rtms-backend.onrender.com/api/v1'

const initialition = () => {
  axios.interceptors.request.use((req) => {
    req.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return req
  })
  axios.interceptors.response.use((res) => {
    if (res.status == 403) {
      if(localStorage.getItem('token')){
        location.href='/dashboard'
      }
      else{
        location.href='/'
      }
      
    }
    return res
  })
}
initialition();
export const getReq = async (url) => {

  return axios.get(BASEURL + url)
    .catch((e) => {
      console.log(e);
      return e;
    })
}

export const postReq = async (url, data) => {

  return axios.post(BASEURL + url, data)
    .catch((e) => { console.log(e); return e })
}
export const putReq = async (url, data) => {

  return axios.put(BASEURL + url, data)
  // .catch((e) =>{ console.log(e);return e})
}
export const patchReq = async (url, data) => {

  return axios.patch(BASEURL + url, data)
  // .catch((e) =>{ console.log(e);return e})
}
export const deleteReq = async (url) => {

  return axios.delete(BASEURL + url)
  // .catch((e) =>{ console.log(e);return e})
}