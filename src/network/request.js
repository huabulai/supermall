import axios from 'axios'

export const request = (option) => {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })
  // 删除传参对象的空值属性
  function removeEmptyKey (data) {
    const newObj = {}
    for (const key in data) {
      const ele = data[key]
      if (ele !== '' && ele !== null) {
        newObj[key] = ele
      }
    }
    return newObj
  }
  instance.interceptors.request.use(config => {
    console.log(config)
    if (config.method.toUpperCase() === 'GET') {
      config.params = {
        ...config.params,
        userToken: '9527get'
      }
    } else if (config.method.toLocaleUpperCase() === 'POST') {
      config.data = {
        ...config.data,
        userToken: '9527post'
      }
    }
    if (!config.needEmpty) {
      // 删除post请求中的空值属性
      config.data = removeEmptyKey(config.data)
      // 删除get请求中的空值属性
      config.params = removeEmptyKey(config.params)
    }
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(option)
}
