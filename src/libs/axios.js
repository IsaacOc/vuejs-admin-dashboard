import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  baseUrl: 'http://localhost:3000',
  get baseURL() {
    return this.baseUrl
  },
  set baseURL(value) {
    this.baseUrl = value
  },
  timeout: 1000,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

Vue.prototype.$http = axiosIns

export default axiosIns
