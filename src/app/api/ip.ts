import axios from 'axios'

export const ApiIp = axios.create({
  baseURL: `https://ipinfo.io/?token=${'4b8302d0ab73bd'}`
})
