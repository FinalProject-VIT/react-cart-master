const axios = require('axios')
import {ipp} from './components/ipp'
function signin(e, p) {
  console.log(e, p)
  return axios.post(`http://${ipp}:3000/signin`, {
    email: e,
    password: p
  })
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
      return false;
    })
}
function dynamicProduct(userEmail) {
  return axios.post(`http://${ipp}:3000/cart`, {
    email: userEmail
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error)
      return {};
    })
}
module.exports = {
  signin,
  dynamicProduct
}