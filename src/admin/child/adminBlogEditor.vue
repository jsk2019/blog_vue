<template>
  <div>
    <el-form  ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.article_title"></el-input>
      </el-form-item>

      <el-form-item label="类型" style="text-align: left">
        <div>
          <el-checkbox-group v-model="checkboxGroup2" size="medium">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <el-form-item label="开启评论">
        <el-switch style="float: left ;margin-top: 10px"  ></el-switch>
      </el-form-item>
      <el-form-item label="正文">
        <div class="mavonEditor">
          <!-- markdownText: 双向绑定的数据
               toolbars：编辑器的配置	-->
          <mavon-editor
              v-model="form.article_content"
              style="min-height: 500px"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">完成</el-button>
        <el-button >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios"
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
const cityOptions = ['JAVA', '神经网络', '操作系统', '算法'];
export default {
  name: "adminBlogEditor",

  components:{// 在页面中注册组件
    mavonEditor
  },
  data() {
    return {
      cities: cityOptions,
      checkboxGroup2: ['上海'],
      form:{
        article_title: "",
        article_content: "",
        article_views: 0,
        article_comment_count: 0,
        article_create_date: "",
        article_like_count: 0,
        comments: [],
        user: {}
    }

  }
  },
  methods: {
    onSubmit() {
      //修改数据
      const _this = this
        console.log(_this.form)
      if(this.$route.query.row!=null) {
        // eslint-disable-next-line no-unused-vars
        axios.put('/api/articles/', _this.form).then(function (resp) {
          console.log(_this.form)
          if (resp.data == 'article change ok') {
            _this.$router.push('/adminBlog')
            _this.$message({
              message: '修改成功',
              type: "success"
            })
          } else {
            _this.$message({
              message: '修改失败',
              type: "error"
            })
          }
        })
      }
      else {
        axios.put("/api/articles/commit",_this.form).then(function (resp){
          if (resp.data == 'article commit ok') {
            _this.$router.push('/adminBlog')
            _this.$message({
              message: '新增成功',
              type: "success"
            })
          } else {
            _this.$message({
              message: '失败',
              type: "error"
            })
          }
        })
      }
      this.$router.push('/adminBlog')
    },
    cancel(){
      this.$router.push('/adminBlog')
    }
  },

  //获取从上一个页面传来的信息
  created() {
    if(this.$route.query.row!=null) {
      this.id = this.$route.query.row
    }
    const _this = this
    axios.get('http://39.99.192.64:8080/articles/'+_this.id).then( function(resp){
      _this.form = resp.data
    })
  }
}
</script>

<style scoped>

</style>
