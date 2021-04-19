<template>
  <div
      :style="styles">
  <div class="index">
    <el-container style="height: 800px; border: 1px solid #eee ">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <div style="margin-bottom: 50px;width: 200px; height: 300px" >
          <el-image
              style="margin-bottom:10px;margin-top: 50px; width: 200px;height: 200px"
              :lazy='true'
              :src="face"></el-image>
          <el-avatar>{{this.$data.name}}</el-avatar>
        </div>
        <el-menu router default-openeds="['0','1']">
          <el-menu-item  @click="go1">博客管理</el-menu-item>
          <div  style="margin: 30px"></div>
          <el-menu-item @click="$router.push('/adminType')" >标签管理</el-menu-item>
          <div style="margin: 30px"></div>
          <el-menu-item @click="$router.push('/adminUser')">友链管理</el-menu-item>
          <div style="margin: 30px"></div>
            <el-menu-item @click="$router.push('/adminView')">博客分类信息</el-menu-item>
          <div style="margin: 30px"></div>
            <el-menu-item @click="$router.push('/adminView2')">浏览次数</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="demo-type">
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
  </div>
</template>

<script>

import picture from "@/assets/images/bg.png";
import axios from "axios";

export default {
  name: "adminIndex",

  data(){
    return{
      tokenInof:{
        key_token:''
      },
      face:require('@/assets/images/logo.jpg'),
      name:'jsk',
      bg:'../assets/images/bg.png',
      styles:{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${picture})`
      },
    }
  },
  methods:{
    go1(){
      this.$router.push("/adminBlog")
    }
  },
  created() {
    const _this = this
    this.tokenInof.key_token = localStorage.getItem('accessToken')
    console.log("here")
    console.log(this.tokenInof.key_token)
    axios.post('http://39.99.192.64:8080/users/verify/',_this.tokenInof).then( function(resp){
      if (resp.data == "fail") {
        _this.$router.push('/login')
      }

    })
  }
}
</script>
<style scoped>
.el-menu-item{
  background: #ee7c72;
}

.index {
  filter:alpha(Opacity=85);
  -moz-opacity:0.85;
  opacity: 0.85;
}
</style>
<style >
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.index {
  filter:alpha(Opacity=85);
  -moz-opacity:0.85;
  opacity: 0.85;
}


</style>

