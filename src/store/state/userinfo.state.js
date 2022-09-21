export default{
    state:{
        // userInfo:(localStorage.getItem("token"))
        userInfo:(localStorage.getItem("loginData")&&
        JSON.parse(localStorage.getItem("loginData")))||{}
    },
    mutations:{
        setUserInfo(state,uInfo){
            state.userInfo=uInfo
        }
    }
}