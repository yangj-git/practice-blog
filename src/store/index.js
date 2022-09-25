import React from "react";

const { default: LoginStore } = require("./login.store");

class RootStore {
	constructor() {
		this.loginStore = new LoginStore()
	}
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export { useStore }