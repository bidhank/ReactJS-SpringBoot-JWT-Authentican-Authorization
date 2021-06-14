import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiBaseUrl } from "../config.json";

const apiLoginEndPoint = apiBaseUrl + "/login";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(username, password) {
  const { headers } = await http.post(apiLoginEndPoint, { username, password });
  localStorage.setItem(tokenKey, headers.authorization);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}



export default {
  login,
  loginWithJwt,
  getJwt,
  logout,
  getCurrentUser,
};
