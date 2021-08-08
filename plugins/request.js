/**
 * 基于axios封装的请求模块
 */

import axios from "axios";

export const request = axios.create({
  //  baseURL: 'https://conduit.productionready.io'
  baseURL: "http://realworld.api.fed.lagounews.com"
}) 

// 通过插件机制获取上下文对象
export default ({ store }) => {

  // 请求拦截器
  request.interceptors.request.use(function (config) {
    const { user } = store.state

    if (user && user.token) {
      config.headers.Authorization = `Token ${store.state.user.token}`
      console.log(config.headers.Authorization)
    }

    return config
  }, function (error) {
    return Promise.reject(error)
  })

  // 响应拦截器
}



