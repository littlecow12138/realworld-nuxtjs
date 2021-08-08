/**
 * 基于axios封装的请求模块
 */

import axios from "axios";

const request = axios.create({
  //  baseURL: 'https://conduit.productionready.io'
  baseURL: "http://realworld.api.fed.lagounews.com"
})

// 请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = "Token 用户token"

  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器

export default request