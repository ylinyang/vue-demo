<template>
    <div class="login_wrap"></div>
    <div class="form_wrap">
        <el-form
            ref="formRef"
            :model="loginData"
            label-width="100px"
            class="demo-dynamic"
        >
        <el-form-item
            prop="username"
            label="用户名"
            :rules="[
                {
                required: true,
                message: 'Please input username',
                trigger: 'blur',
                },
            ]"
            >
            <el-input v-model="loginData.username" />
         </el-form-item>
         <el-form-item
            prop="password"
            label="密码"
            :rules="[
                {
                required: true,
                message: 'Please input password',
                trigger: 'blur',
                },
            ]"
            >
            <el-input  type="password" v-model="loginData.password" />
         </el-form-item>
        </el-form>
        <el-button type="primary" class="login_btn" @click="handleLogin">登录</el-button>
     
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { loginAPi } from '@/util/request';
    export default{
        name:"login",
        setup(){
            const store = useStore()
            const count = store.state.number.count
            const router = useRouter()
            const data=reactive({
                loginData:{
                    username:"",
                    password:"",
                    token:""
                },
                num:count,
              // numStatus: store.getters["number/countStatus"]
            })
            const handleLogin=()=>{
                // 调用请求的后台接口
                loginAPi( data.loginData ).then(res =>{
                    console.log("登录的返回",res)
                    if (res.status === 200){
                        data.loginData.token = res.token
                        store.commit('setUserInfo',data.loginData);
                        localStorage.setItem("token",res.token)
                        // 跳转到user页面
                        router.push({
                            path:"/users"
                        })
                    }
                })

            // const handleLogin=()=>{  vuex更改语法
            // //    store.commit('setCount',100);
            //     store.dispatch('number/setCountPromise',99).then(res=>{
            //         alert(修改成功)
            //     }).catch(err=>{
            //         alert(err)
            //     });
            //     console.log(store.state.number.count)
            //     console.log(store.getters["number/countStatus"])
            }
             return{
                ...toRefs(data),
                handleLogin
            }
        }
    }
</script>
<style>
    .login_wrap{
        width: 100%;
        height: 100vh;
        background: rgb(56, 85, 139);
         /* 居中对齐 */
        position: relative; 
    }
    .form_wrap{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
        padding: 30px 50px;
        border-radius: 5px;
    }
    .login_btn{
        display: block;
        margin: 10px auto;
    }
</style>