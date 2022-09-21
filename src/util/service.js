import axios from "axios"
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
import store from "../store/index.js"
// 使用create创建axios实例
let loadingObj = null
const Service = axios.create({
    timeout:3000,
    baseURL:"/api/v1",
    headers:{
        "Content-type":"application/json;charset=utf-8",
        "Authorization":store.state.uInfo.userInfo.token
    }
})

// 请求拦截
Service.interceptors.request.use(config=>{
    loadingObj= ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
    return config
})

// 响应拦截 响应是200走成功  不是走失败
Service.interceptors.response.use(response=>{
    loadingObj.close()
    const data = response.data
    console.log("ddd",(data.status != "200"))
//    if (data.status != "200"){
    if (!data.status){
        ElMessage.error(data.message||"服务器出错")
        return data
    }
    return data   
},error=>{
    loadingObj.close()
    ElMessage({
        message: "服务器内部错误",
        type: "error",
        duration: 2000,
    })
})

// get请求
export const get=config=>{
    return Service({
        ...config,
        method:"get",
        params:config.data
    })
}
// post请求
export const post=config=>{
    return Service({
        ...config,
        method:"post",
        data:config.data
    })
}