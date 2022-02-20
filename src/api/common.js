/**
 * 与 main 相关的业务接口
 */
import http from '@/utils/http'

/*
 * @Description:XXXX
 */
const login = (url) => {
  return http({
    url,
    data: {},
    method: 'get',
  })
}
/*
 * @Description:XXXX
 */
const newtopic = (params) => {
  const url = `/practice/subject/insert`
  return http({
    url,
    data: params,
    method: 'post',
  })
}

export {
  login,
  newtopic,
}