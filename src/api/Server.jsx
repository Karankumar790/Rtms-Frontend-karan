import axios from 'axios'
import { API_URL } from './Client.jsx';
import { catchError } from '../helper/helper.jsx';

export const sendOtpApi = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/send-otp-register`, formData)
  } catch (e) {
    return catchError(e);
  }
}

export const registerApi = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      headers: {
        content_Type: "multipart/formData"
      }
    }, formData)
  } catch (e) {
    return catchError(e);
  }

}