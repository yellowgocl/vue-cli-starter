import { requestHandle } from './'
/**
 * 模拟登入
 * @return {[type]} [description]
 */
export function login() {
  return requestHandle(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { flag: true, info: { name: 'customer', email: 'customer@gzgi.com' } } })
    }, 2000)
  }))
}
/**
 * 模拟登出
 * @return {[type]} [description]
 */
export function logout() {
 return requestHandle(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { flag: true, info: { name: 'visitor', email: '' } } })
    }, 2000)
  }))
}

/**
 * 模拟获取授权用户信息
 * @return {[type]} [description]
 */
export function fetch() {
  return requestHandle(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { flag: true, info: { email: 'custom@gzgi.com', name: 'customer', fullname: 'customer.hello', descript: 'im customer.hello, nice to meet u!' } } })
    })
  }))
}
