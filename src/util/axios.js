import axios from "axios";
import { getToken as token } from "./token";

// base class for axios, it holds the base url and some configurations
const api = axios.create({
  headers: { Authorization: token() }, // assigns the token if present
  baseURL: 'https://testdrive.kompletecare.com/api', // base url for the api endpoints
});

// modified  get api request
export const get = async (url = '') => await api.get(url);
// modified  post api request
export const post = async (url = '', data = {}) => await api.post(url, data);
