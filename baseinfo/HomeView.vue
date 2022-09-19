<template>
  <h1>hello world</h1>
  <p v-text="name"></p>
  <p v-html="info"></p>
  <!-- 绑定动态的标签属性 -->
  <p v-bind:date="dataVal">我有一个属性</p>
  <!-- 类名绑定 -->
  <p :class="{'red':isRed}">我是红色</p>
  <!-- 判断语句 v-if -->
  <p v-if="isTrue">我是if存在</p>
  <p v-if="isFalse">if</p>
  <p v-else>else</p>
  <!-- for循环 -->
  <ul>
    <li v-for="(item,index) in userList" :key="index">
      姓名：{{item.name}}
      年龄：{{item.age}}
    </li>
  </ul>
</template>

<script>
  import {reactive,toRefs} from "vue"
  export default{
      name: "home",
      setup(){
        const data = reactive({
          name: "小红",
          age: 20,
          info: "<i>我是协议字<i>",
          dataVal:2,
          isRed:true,
          isTrue:true,
          isFalse:false,
          userList:[
            {username:"小红",age:20},
            {username:"小蓝",age:21},
          ]
        })
        return {
          ...toRefs(data)
        }
      }
};
</script>
<style>
  .red{
    color: red;
  }
</style>