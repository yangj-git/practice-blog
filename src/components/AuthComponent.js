const { getToken } = require("@/utils");
const { Navigate } = require("react-router-dom");

function AuthComponent({children}){
	const token = getToken()
	if(token){
		return children
	}else{
		return <Navigate to='/login' replace />
	}
}

export { AuthComponent }