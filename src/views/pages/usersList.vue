<template>
    <div>
        <!-- 面包蟹 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
            ><a href="/">账号列表</a></el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 白色区域内容 -->
        <div class="page_content">
            <div class="flex">
                <div class="input_box">
                <el-input
                v-model="keyWord"
                placeholder="请输入关键字"
                class="input-with-select"
                >
                <template #append>
                    <el-button @click="searchList"><el-icon><Search /></el-icon></el-button>
                </template>
                </el-input>
            </div>
            <el-button type="primary" @click="addUser">新建用户</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import {userListAPi} from "@/util/request.js"
export default{
    name:"userList",
    setup(){
        const data=reactive({
            keyWord:"",
            searchParams:{
                query:"",
                pagesize:5,
                pagenum:1
            }
        })
        const searchList=()=>{
            userListAPi(data.searchParams).then(res=>{
                if(res.data){
                    console.log("用户数据",res)
                }
            })
        }
        const addUser=()=>{

        }
        // 方法初始化
        searchList()
        return{
            ... toRefs(data),
            searchList,
            addUser
        }
    }   
}
</script>
<style>
.input_box{
    width: 200px;
    margin-right: 15px;
}
</style>