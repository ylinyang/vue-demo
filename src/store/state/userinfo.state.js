export default{
    state:{
        userInfo:(localStorage.getItem("token"))
    },
    mutations:{
        setUserInfo(state,uInfo){
            state.userInfo=uInfo
        }
    }
}