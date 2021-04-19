<template>
  <div>
    <el-container>
      <el-header>
        <router-link to="/">
          <img src="https://www.markerhub.com/dist/images/logo/markerhub-logo.png"
               style="height: 60%; margin-top: 10px;">
        </router-link>
      </el-header>
      <el-main style="margin-top: 100px">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="用户名" prop="username" style="width: 50%;margin-left: 300px" >
            <el-input type="text" maxlength="12" v-model="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" style="width: 50%;margin-left: 300px">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import axios from "axios";
import store from "@/vuex/store";
export default {
  name: 'Login',
  data() {
    // var validatePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      tokenInof:{
        key_token:''
      },
      ruleForm: {
        password: '',
        userName: ''
      },
      rules: {
        // password: [
        //   {validator: validatePass, trigger: 'blur'}
        // ],
        // username: [
        //   {required: true, message: '请输入用户名', trigger: 'blur'},
        //   {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
        // ]
      }
    };
  },
  store,
  methods: {
    submitForm() {
      const _this = this
      axios.post('http://39.99.192.64:8080/users/login',_this.ruleForm).then( function(resp){
        console.log(resp.data.token)
        localStorage.setItem('accessToken', resp.data.token)
        _this.$router.push('/adminBlog')
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
   // localStorage.removeItem('accessToken')
    const _this = this
    this.tokenInof.key_token = localStorage.getItem('accessToken')
    console.log("here")
    console.log(this.tokenInof.key_token)
    axios.post('http://39.99.192.64:8080/users/verify/',_this.tokenInof).then( function(resp){
      if (resp.data == "ok"){
        console.log('跳转')
        _this.$router.push('/adminBlog')
      }
    })
  }
}
</script>
