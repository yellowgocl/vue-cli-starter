import axios, { requestHandle } from './'
/**
 * 获取产品详情
 * @param  {string} id 产品id
 * @return {promise}    请求promise
 */
export function fetch(id) {
  const request = axios.get('/index.php?route=interface/product/detail', { params: { productId: id } })
  return requestHandle(request)
}

/**
 * 获取产品秒杀列表信息
 * @return {promise} 请求promise
 */
export function seckill() {
  const request = axios.get('/index.php?route=interface/search/product/seckill')
  return requestHandle(request)
}
