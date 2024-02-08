import { authKey } from "../constants/storageKey";
import { decodeToken } from "../utility/jwt";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../utility/local-storage";

export const storeUserInformation = (res) => {
  const token = res?.data?.accessToken;
  return setToLocalStorage(authKey, token);
};

export const getUserInformation = (res) => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodeToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInformation = (key) => {
  return localStorage.removeItem(key);
};
