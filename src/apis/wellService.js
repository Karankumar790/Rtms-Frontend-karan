import axios from "axios";
import { catchError } from "../helper/helper";
import { WELLMASTER_API } from "./Client";

// Add well type and well number of well master 
export const addWellType = async (formdata) => {
  try {
    const response = await axios.post(
      `${WELLMASTER_API}/save-WellTypeAndNumber`,
      formdata
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};


// Add Well installation 
export const addInstallation = async (formdata) => {
  try {
    const response = await axios.post(
      `${WELLMASTER_API}/add-InstallationToLocation`,
      formdata
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

// ADD location get API
export const addGetLocation = async (formdata) => {
  try {
    const response = await axios.get(
      `${WELLMASTER_API}/get-AllLocations`,
      formdata
    );
    return response.data;
  } catch (error) {
   return catchError(error);
  }
};