import axios from 'axios';

const creatAPI = (baseURL) => {

  const apiConfigOptions = {
    crossdomain: true,
    baseURL,
    timeout: 50000,
    Accept: 'application/json',
    headers: {
      'Content-Type': 'application/json',
      // "Access-Control-Allow-Origin": "*"
    }
  }

  const api = axios.create(apiConfigOptions)

  // 请求发送拦截
  api.interceptors.request.use(
    async (config) => {
      return config
    },
    error => {
      return error
    }
  )

  // 请求结果拦截
  api.interceptors.response.use(
    async (res) => {
      return res
    },
    error => {
      return error
    }
  )

  return api
}

// const baseURL = 'http://47.104.237.42:80/users'
// const baseURL = 'https://47.104.237.42:80'
const baseURL = 'https://www.zhuliming.cn'
// const baseURL = 'http://47.104.237.42:80'
export default creatAPI(baseURL)