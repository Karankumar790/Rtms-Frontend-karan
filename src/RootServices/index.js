import axios from "axios";
const BASEURL = 'https://rtms-backend.onrender.com/api/v1/users'

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