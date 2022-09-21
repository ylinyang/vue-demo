<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- 路由组件 -->
  <router-view></router-view>  
</template>

<style>
body,html{
  padding: 0;
  margin: 0;
}
/* flex布局类名*/
.flex-float{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex{
  display: flex;
  align-items: center;
}
.page_content{
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin-top: 30px;
  background: #fff;
}
.el-main{
  background: #efefef;
}
</style>
