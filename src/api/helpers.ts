import axios from "./config";
import { AxiosResponse } from "axios";

/**
 * Axios helper functions for TS implementation
 * @param response
 * @returns
 */
const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};
