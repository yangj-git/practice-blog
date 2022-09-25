import { makeAutoObservable } from "mobx"
import { http } from "@/utils"

class LoginStore {
	token = ''
	constructor() {
		makeAutoObservable(this)
	}
	setLoginToken = async ({username, password}) => {
		const resp = await http.post('http://geek.itheima.net/v1_0/authorizations', {
			mobile: username,
			code: password
		})
		this.token = resp.data.data.token
	}
}

export default LoginStore