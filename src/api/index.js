import axios from 'axios'
import * as authModule from './auth'
import * as productModule from './product'
const querystring = require('query-string')
//这里是api修饰，具体设置在{projectpath/build/config/index.js}内的proxytable属性内定义具体策略
const host = '/api/'

export const request = axios.create({
  baseURL: host,
  timeout: 100 * 1000
})

export const transformRequestConfig = {
  transformRequest: [function (data) {
    let result = querystring.stringify(data, { encode: false })
    return result
  }]
}

export const requestHandle = (request) => {
  return request.then((res) => {
    return res.data
  }, (error) => {
    return error
  })
}

export default request
export const auth = authModule
export const product = productModule
