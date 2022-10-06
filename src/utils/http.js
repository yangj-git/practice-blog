import axios from 'axios' 
import { getToken } from './token'

const http = axios.create({
	baseURL: 'http://localhost:3001/authorization',
	timeout: 5000
})

http.interceptors.request.use((config) => {
	const token = getToken()
	if(token){
		config.headers.Authorization = `${token}`
	}
	return config
}, (error) => {
	return Promise.reject(error);
})

http.interceptors.response.use((response) => {
	return response
}, (error) => {
	return Promise.reject(error);
})

export { http }