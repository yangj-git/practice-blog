import { makeAutoObservable } from "mobx"
import { getToken, http, setToken } from "@/utils"

class LoginStore {
	token = getToken() || ''

	constructor() {
		makeAutoObservable(this)
	}
	setLoginToken = async ({username, password}) => {
		const resp = await http.post('http://geek.itheima.net/v1_0/authorizations', {
			mobile: username,
			code: password
		})
		this.token = resp.data.data.token
		// 存入localStorage
		setToken(this.token)
	}
}

export default LoginStore