// 封装的是具体的接口请求方法
// 注意：每个方法只负责请求一个url地址
import myAxios from '@/utils/request'
export const getListAPI = () => {
  // 原地是一个Promise对象（内部包含原生ajax请求）
  // return这个Promise对象到逻辑页面，去那边对Promise对象提取结果
  return myAxios({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'zwz',
      password: '11',
      repassword: '11'
    }
  })
}
