<script setup>
import { ref } from 'vue';

const pwdForm= ref({
  old_pwd:'',
  new_pwd:'',
  re_pwd:''
})

</script>
<template>
    <page-container title="修改密码">
        <el-row>
          <el-col :span="12">
            <el-form
              ref="formRef"
              :model="pwdForm"
              :rules="rules"
              label-width="100px"
            >
              <el-form-item label="原密码" prop="old_pwd">
                <el-input v-model="pwdForm.old_pwd" show-password></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="new_pwd">
                <el-input v-model="pwdForm.new_pwd" show-password></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="re_pwd">
                <el-input v-model="pwdForm.re_pwd" show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">修改密码</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form></el-col
          >
        </el-row>
      </page-container>
</template>

<style>
</style>