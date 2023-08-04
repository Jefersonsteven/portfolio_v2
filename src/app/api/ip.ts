import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_IP

export const ApiIp = axios.create({
  baseURL: `https://ipinfo.io/?token=${typeof API_KEY === 'string' ? API_KEY : ''}`
})
