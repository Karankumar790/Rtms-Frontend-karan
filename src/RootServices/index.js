// import axios from "axios";
// const BASEURL = 'https://rtms-backend.onrender.com/api/v1'

// const initialition = () => {

//   axios.interceptors.request.use((req) => {
//     req.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
//     return req
//   })

//   axios.interceptors.response.use((res) => {
//     if (res.status == 403) {
//       if (localStorage.getItem('token')) {
//         location.href = '/dashboard'
//       }
//       else {
//         location.href = '/'
//       }

//     }
//     return res
//   })
// }
// initialition();
// export const getReq = async (url) => {

//   return axios.get(BASEURL + url)
//     .catch((e) => {
//       console.log(e);
//       return e;
//     })
// }

// export const postReq = async (url, data) => {

//   return axios.post(BASEURL + url, data)
//     .catch((e) => { console.log(e); return e })
// }
// export const putReq = async (url, data) => {

//   return axios.put(BASEURL + url, data)
//   // .catch((e) =>{ console.log(e);return e})
// }
// export const patchReq = async (url, data) => {

//   return axios.patch(BASEURL + url, data)
//   // .catch((e) =>{ console.log(e);return e})
// }
// export const deleteReq = async (url) => {

//   return axios.delete(BASEURL + url)
//   // .catch((e) =>{ console.log(e);return e})
// }


import axios from "axios";

const BASEURL = 'https://rtms-backend.onrender.com/api/v1';

// Initialize axios interceptors
const initializeAxios = () => {
  axios.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
      req.headers.Authorization = 'Bearer ' + token;
    }
    return req;
  }, (error) => {
    // Handle request errors
    return Promise.reject(error);
  });

  axios.interceptors.response.use((res) => {
    return res;
  }, (error) => {
    // Handle response errors
    if (error.response && error.response.status === 403) {
      if (localStorage.getItem('token')) {
        window.location.href = '/dashboard';
      } else {
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  });
};

initializeAxios();

export const getReq = async (url) => {
  try {
    const response = await axios.get(BASEURL + url);
    return response;
  } catch (error) {
    console.error('Error in GET request:', error);
    return error.response || error;
  }
};

export const postReq = async (url, data) => {
  try {
    const response = await axios.post(BASEURL + url, data);
    return response;
  } catch (error) {
    console.error('Error in POST request:', error);
    return error.response || error;
  }
};

export const putReq = async (url, data) => {
  try {
    const response = await axios.put(BASEURL + url, data);
    return response;
  } catch (error) {
    console.error('Error in PUT request:', error);
    return error.response || error;
  }
};

export const patchReq = async (url, data) => {
  try {
    const response = await axios.patch(BASEURL + url, data);
    return response;
  } catch (error) {
    console.error('Error in PATCH request:', error);
    return error.response || error;
  }
};

export const deleteReq = async (url) => {
  try {
    const response = await axios.delete(BASEURL + url);
    return response;
  } catch (error) {
    console.error('Error in DELETE request:', error);
    return error.response || error;
  }
};
