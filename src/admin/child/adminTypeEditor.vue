<template>
<div >

  <div style="
  margin-top: 50px;
  margin-right: 80px">
    <div style="text-align: left">
      <el-tag
          v-for="types in typeList"
          :key="types"
          style="margin: 20px ;width: 85px;height: 35px;font-size: medium;text-align: center"
          :type="randomColor()"
          effect="plain"
      >{{types.label_name}}</el-tag>
    </div>

    </div>
  <el-form
      style="margin-top: 100px;margin-bottom: 50px ;margin-right: 100px"
      :model="type" ref="type" label-width="100px" class="demo-ruleForm">
    <el-form-item label="标签名称" prop="name" >
      <el-input v-model="type"></el-input>
    </el-form-item>
    <el-form-item style="position:relative;right: 30px">
      <el-button type="primary" @click="onSubmit"
                 style="margin-right: 30px">完成</el-button>
      <el-button >取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "adminTypeEditor",
  data(){
    return{
      typeList:[],
      type:'',
      color:'danger'
    }
  },
  created() {
    if(this.$route.query.row!=null) {
      this.type = this.$route.query.row.type
    }
    const _this = this
    axios.get('http://39.99.192.64:8080/labels/').then( function(resp){
      _this.typeList=resp.data
      console.log(resp.data)
    })

  },
  methods:{
    onSubmit() {
      //修改数据
      this.$router.push('/adminType')
    },
    cancel(){
      this.$router.push('/adminType')
    },
    randomColor(){
      var choose = Math.floor(Math.random()*4);
      switch (choose){
        case 1:
          return  "success";
          // eslint-disable-next-line no-fallthrough
        case 2:
          return   "";
          // eslint-disable-next-line no-fallthrough
        case 3:
          return  "danger";
          // eslint-disable-next-line no-fallthrough
        case 0:
          return  "warning";
      }

    },
    test(){
      return "ss"
    }

  }
}

</script>

<style scoped>

</style>
