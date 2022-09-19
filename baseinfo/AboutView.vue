<template>
  <div>
    <h2>vue3的生命周期</h2>
    <div id="dom">{{msg}}</div>
    <!-- 事件绑定 -->
    <button v-on:click="handleClick">click me</button>
    <hr>
    <!-- 双向绑定 -->
    <input type="text" placeholder="请输入姓名" v-model="userName"><br/>
    <textarea placeholder="请输入您的建议" cols="30" rows="10" v-model="userInput"></textarea>
    <p>{{userName}}--{{userInput}}</p>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import {reactive,toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated} from "vue"
export default{
  name:"about",
  setup(){
    const data = reactive({
      msg :"你好",
      userName:"",
      userInput:""
    })

    // 数据渲染前行为
    onBeforeMount(()=>{
      console.log("onBeforeMount",document.querySelector("#dom"))
    })
   // 数据渲染后行为 为你好
    onMounted(()=>{
      console.log("onMounted",document.querySelector("#dom"))
      // 2s后更新
      setTimeout(()=>{
        data.msg="hello" // 只有页面发生变化才会触发dom的变化
      },2000)
    })
    // dom更新前
    onBeforeUpdate(()=>{
      console.log("onBeforeUpdate")
    })
    // dom更新后 
    // 不要在update后再做时间更新，会陷入死循环
    onUpdated(()=>{
      console.log("onUpdated")
    })

    // 事件及方法
    const handleClick=()=>{
      alert("你好")
    }
    const submit=()=>{
      alert(`${data.userName}====${data.userInput}`)
    }
    return{
      ...toRefs(data),
      handleClick,
      submit
    }
  }
}
</script>