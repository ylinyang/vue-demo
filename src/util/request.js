import {post, get} from "./service.js"

export const loginAPi=data=>{
    return post({
        url:"/login",
        data
    })
}

// 获取用户列表
export const userListAPi=data=>{
    return get({
        url:"/users",
        data
    })
}