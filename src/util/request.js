import {post, get} from "./service.js"

export const loginAPi=data=>{
    return post({
        url:"/login",
        data
    })
}