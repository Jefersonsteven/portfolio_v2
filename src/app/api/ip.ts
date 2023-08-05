import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_IP ?? '4b8302d0ab73bd'
const baseURL = `https://ipinfo.io/?token=${API_KEY}`

export const ApiIp = axios.create({
  baseURL
})

export const ApiViews = axios.create({
  baseURL: '/api/views'
})
