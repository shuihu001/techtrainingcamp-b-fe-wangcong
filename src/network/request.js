import axios from 'axios'
export function Request(config, success, failure) {
	const instance = axios.create({
		baseURL: 'https://i.snssdk.com/search/api/',
		timeout: 5000
	})
	//拦截器
	instance.interceptors.request.use(config => {
		return config
	}, error => {
		// 请求错误处理
	})
	instance.interceptors.response.use(res => {
		return res.data
	}, error => {
		// 响应错误处理
	})
	return instance(config)
}
