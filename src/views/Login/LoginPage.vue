<script setup>
import {User, Lock} from '@element-plus/icons-vue'
import { ref } from 'vue';
//定义数据模型
const formModel = ref({
  username:'',
  password:'',
  rePassword:''
})

const checkRePassword = (rule,value,callback)=>{
    if(value === ""){
      callback(new Error('请再次输入密码'))
    }else if (value !== formModel.value.password){
      callback(new Error('请确保输入的密码一致'))
    }else{
      callback()
    }
}

const rules = {
  username: [
    {required:true,message:'请输入用户名',trigger:'blur' },
    {min:3,max:16,message:'请输入长度为3-16长度的用户名',trigger:'blur'}
  ],
  password: [
    {required:true,message:'请输入密码',trigger:'blur'},
  {min:3,max:16,message:'长度为3-16非空字符',trigger:'blur'}
],
  
  rePassword: [
    {validator:checkRePassword,trigger:'blur'}]
}

const isRegister = ref(false)
</script>

<template>
    <el-row class="login-page">
      <el-col :span="12" class="bg"></el-col>
      <el-col :span="6" :offset="3" class="form">
        <!-- 注册相关表单 -->
        <el-form :model="formModel" :rules="rules" ref="form" size="large" autocomplete="off" v-if="isRegister">
          <el-form-item>
            <h1>注册</h1>
          </el-form-item>
          <el-form-item prop="username">
            <el-input v-model="formModel.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="formModel.password" :prefix-icon="Lock" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="rePassword">
            <el-input v-model="formModel.rePassword" :prefix-icon="Lock" type="password" placeholder="请再输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="register" class="button" type="primary" auto-insert-space>
              注册
            </el-button>
          </el-form-item>
          <el-form-item class="flex">
            <el-link type="info" :underline="false" @click="isRegister = false">
              ← 返回
            </el-link>
          </el-form-item>
        </el-form>
        <!-- 登录相关表单 -->
        <el-form
          :model="formModel"
          :rules="rules"
          ref="form"
          size="large"
          autocomplete="off"
          v-else
        >
          <el-form-item>
            <h1>登录</h1>
          </el-form-item>
          <el-form-item prop="username">
            <el-input
              v-model="formModel.username"
              :prefix-icon="User"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="formModel.password"
              name="password"
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item class="flex">
            <div class="flex">
              <el-checkbox>记住我</el-checkbox>
              <el-link type="primary" :underline="false">忘记密码？</el-link>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              @click="login"
              class="button"
              type="primary"
              auto-insert-space
              >登录</el-button
            >
          </el-form-item>
          <el-form-item class="flex">
            <el-link type="info" :underline="false" @click="isRegister = true">
              注册 →
            </el-link>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </template>


<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background: url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
<!-- 
      1. 结构相关
        el-row表示一行，一行分成24份 
         el-col表示列  
         (1) :span="12"  代表在一行中，占12份 (50%)
         (2) :span="6"   表示在一行中，占6份  (25%)
         (3) :offset="3" 代表在一行中，左侧margin份数
  
         el-form 整个表单组件
         el-form-item 表单的一行 （一个表单域）
         el-input 表单元素（输入框）
      2. 校验相关
         (1) el-form => :model="ruleForm"      绑定的整个form的数据对象 { xxx, xxx, xxx }
         (2) el-form => :rules="rules"         绑定的整个rules规则对象  { xxx, xxx, xxx }
         (3) 表单元素 => v-model="ruleForm.xxx" 给表单元素，绑定form的子属性
         (4) el-form-item => prop配置生效的是哪个校验规则 (和rules中的字段要对应)
    -->