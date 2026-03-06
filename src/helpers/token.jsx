import { isExpired, decodeToken } from "react-jwt";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
export const isNotValidToken = () => {
  if (!localStorage.getItem("token")) {
    return true;
  }
  if (isExpired(localStorage.getItem("token"))) {
    localStorage.removeItem("token");
    return true;
  }
  return isExpired(localStorage.getItem("token"));
};
export const getTokenInfo = () => {
  return decodeToken(localStorage.getItem("token"));
};
export const getToken = () => {
  return localStorage.getItem("token");
};
export const getDecodeToken = (token) => {
  return decodeToken(token);
};
export const validateExpiredToken = (token) => {
  if (!token) {
    return true;
  }
  if (isExpired(token)) {
    return true;
  }
  return false;
};
export const removeToken = () => {
  localStorage.removeItem("token");
};
