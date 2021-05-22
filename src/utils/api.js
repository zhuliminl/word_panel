import axios from 'axios';

const creatAPI = (baseURL) => {

  const apiConfigOptions = {
    baseURL,
    timeout: 50000,
    Accept: 'application/json',
    headers: {
      'Content-Type': 'application/json',
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
const baseURL = 'http://47.104.237.42:80'
export default creatAPI(baseURL)