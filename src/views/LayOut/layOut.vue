<template>
    <div class="common-layout">
      <el-container>
        <el-header class="common-header flex-float">
            <div class="flex">
                <img class="logo" src="../../assets/logo.png" alt="">
                <h1 class="title">商铺后台管理系统</h1>
            </div>
            <el-button type="primary" @click="loginout">退出</el-button>
        </el-header>
        <el-container>
          <el-aside class="common-aside" width="200px">
                <el-menu background-color="none" text-color="#fff" :router="true">
                    <el-sub-menu index="1">
                        <template #title>
                        <el-icon><User /></el-icon>
                        <span>账号管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/users">账号列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                        <el-icon><CreditCard /></el-icon>
                        <span>角色管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/roles">角色列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
<script>
import { useRouter } from "vue-router"
import { useStore } from "vuex"
export default{
    name:"layOut",
    setup(){
        const store = useStore()
        const router = useRouter()
        const loginout=()=>{
            // 请求后台接口

            // 移除本地存储登录标识 重置userinfo为空 重定向页面
            localStorage.removeItem("loginData")
            store.commit("setUserInfo",{});
            router.push({
                path:"/login"
            })
        }
        return {
            loginout
        }
    }
}
</script>
<style>
    .el-container{
        height: 100vh;
        overflow: hidden;
    }
    .common-header{
        background: rgb(39, 45, 53);
        display: flex;
    }
    .common-aside{
        background: rgb(48, 55, 65);
    }
    .logo{
        width: 40px;
    }
    .title{
        color: #fff;
    }
</style>