import Vue from 'vue'
function getHttp (url, params) {
  let vm = Vue.prototype
  return new Promise((resolve, reject) => {
    vm.$axios.get(url, params).then(function (response) {
      if (response.status === 200) {
        resolve(response.data)
      } else {
        vm.$dialog.alert({
          message: '接口异常'
        })
        resolve(false)
      }
    }).catch(function (error) {
      console.log(error)
      resolve(false)
    })
  })
}

function postHttp (url, params) {
  let vm = Vue.prototype
  return new Promise((resolve, reject) => {
    vm.$axios.post(url, params).then(function (response) {
      if (response.status === 200) {
        resolve(response.data)
      } else {
        vm.$dialog.alert({
          message: '接口异常'
        })
        resolve(false)
      }
    }).catch(function (error) {
      console.log(error)
      resolve(false)
    })
  })
}

export default {
  getHttp,
  postHttp
}
