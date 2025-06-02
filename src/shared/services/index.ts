import axios from "axios";

import {
  axiosConfig,
  axiosInterceptorRequestConfig,
  axiosInterceptorRequestError,
  axiosInterceptorResponseConfig,
  axiosInterceptorResponseError,
} from "@/plugins/axios";

const axiosInstance = axios.create(axiosConfig);

// set request global
axiosInstance.interceptors.request.use(axiosInterceptorRequestConfig, axiosInterceptorRequestError);

// set response global
axiosInstance.interceptors.response.use(axiosInterceptorResponseConfig, axiosInterceptorResponseError);

export const ApiService = {
  get(url: string, params = {}, headers = {}, options = {}) {
    return axiosInstance.get(`${url}`, { params, headers, ...options });
  },

  post(url: string, body: any, config = {}) {
    return axiosInstance.post(`${url}`, body, config);
  },

  put(url: string, body: any, params = {}) {
    return axiosInstance.put(`${url}`, body, { params });
  },

  delete(url: string, params = {}) {
    return axiosInstance.delete(`${url}`, { params });
  },

  upload(url: string, body: any, params = {}) {
    return axiosInstance.post(`${url}`, body, {
      params,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
