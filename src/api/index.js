import axios from 'axios'
// 配置基准路径
const baseURL = 'http://193.112.55.79:9096/'
// 设置默认的基准路径
axios.defaults.baseURL = baseURL

// 一级分类模块
export const getFirstCateogry = () => {
  return axios.get(`/category/queryTopCategory`).then((res) => {
    return res.data
  })
}

// 二级分类模块
export const getSecondCateogry = (pa) => {
  return axios.get(`/category/querySecondCategory`, {params: pa}).then((res) => {
    return res.data
  })
}

// 产品模块
export const getQueryProduct = (pa) => {
  return axios.get(`/product/queryProduct`, {params: pa}).then((res) => {
    return res.data
  })
}
