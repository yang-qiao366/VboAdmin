import axios from "axios";

let getajax = ( url, params) => {
  return axios({
    method: 'get',
    url: `${url}`,
    params: params,
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      "x-token": "adhfasdksdfjvbaf"
    }
  });
}
 let postajax = ( url, data) => {
  return axios({
    method: 'post',
    url: `${url}`,
    data: data,
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      "x-token": "adhfasdksdfjvbaf"
    }
  });
}   
export default getajax  ;