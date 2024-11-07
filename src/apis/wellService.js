import axios from "axios";
import { catchError } from "../helper/helper";
import { WELL_API } from "./Client";


// add location

export const addLocation = async (formData) => {
  try {
    const response = await axios.post(`${WELL_API}/add-location`, formData);
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

// GET ALL LOCATION
export const getLocation = async (organizationName) => {
  try {
    const response = await axios.get(
      `${WELL_API}/get-AllLocations?organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

//addInstallation on the basic of Location
export const addInstallation = async (formData) => {
  try {
    const response = await axios.post(
      `${WELL_API}/add-InstallationToLocation `,
      formData
    );
    return response.data;
  } catch (error) {
    return catchError(error);
  }
};

// GET ALL LOCATION
export const getAllInstallation = async (location, organizationName) => {
  try {
    const response = await axios.get(
     `${WELL_API}/get-InstallationsByLocation?location=${location}&organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    console.error(error); // Log error for debugging
    return catchError(error); // Throw error to handle in the calling function
  }
};

// add well number
export const addWellNum = async (formData) => {
  try {
    const response = await axios.post(
      `${WELL_API}/save-WellTypeAndNumber`,
      formData
    );
    return response.data
  } catch (error) {
    return catchError(error);
  }
};

//  GET SELECTED  WELL INFO 
export const getWellDetails = async (location,installationName,wellType, wellNumber,organizationName) => {
  try {
    const response = await axios.get(
       `${WELL_API}/get-WellDetails?location=${location}&installation=${installationName}&wellType=${wellType}&wellNumber=${wellNumber}&organizationName=${organizationName}`
    );
    return response.data;
  } catch (error) {
    console.error(error); 
    return catchError(error);
  }
};


// export const saveWellAlarmDetails = async (location, installation, wellType, wellNumber, organizationName) => {
//   try {
//     const response = await axios.post(`${WELL_API}/save-WellDetails?location=${location}&installation=${installation}&wellType=${wellType}&wellNumber=${wellNumber}&organizationName=${organizationName}`, wellData);
//     return response.data;
//   } catch (error) {
//     console.error("Error saving well details:", error);
//     return catchError(error);
//   }
// };


export const saveWellDetails = async (details) => {
  try {
    const response = await axios.post(`${WELL_API}/save-WellDetails?location=${details.location}&installation=${details.installation}&wellType=${details.wellType}&wellNumber=${details.wellNumber}&organizationName=${details.organizationName}`, {
      landmark: details.landmark,
      latitude: details.latitude,
      longitude: details.longitude,
      descriptions: details.descriptions,
      alarmSettings: details.alarmSettings,
      flowing: details.flowing,
      notFlowing: details.notFlowing,
    });
    return response.data;
  } catch (error) {
    console.error('Error saving well details:', error);
    return catchError; 
  }
};


export const getLocationOfWell = async (wellNumber, organizationName) => {
  try {
    const response = await axios.get(
      `${WELL_API}/get-WellLocations?organizationName=${organizationName}&wellNumber=${wellNumber}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return catchError; 
  }
};