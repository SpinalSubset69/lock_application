import axios  from 'axios'
import { base_url } from '../constants'

export const axiosInstance = axios.create({ baseURL: base_url })