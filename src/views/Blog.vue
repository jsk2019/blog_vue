<template>
  <div :style="styles">
    <div class="index">
      <el-button
                 type="primary" class="iconfont icon-icon-arrow-left2"
                 style="position: fixed;top: 50px;left: 20px;"
                 @click="back()
                  " ></el-button>
<!--      <Header/>-->
      <!--标题部分-->
      <banner></banner>
      <!--正文部分-->
      <code-editor></code-editor>
      <el-backtop ></el-backtop>
      <div class="content" style="width: 70%;margin-left: 100px">

        <mavon-editor
            class="md"
            :value="htmlContent"
        :subfield="prop.subfield"
        :defaultOpen="prop.defaultOpen"
        :toolbarsFlag="prop.toolbarsFlag"
        :editable="prop.editable"
        :scrollStyle="prop.scrollStyle"
            :codeStyle="prop.codeStyle"
        ></mavon-editor>
      </div>

      <!--评论-->
      <h1 >评论</h1>
      <el-divider style="z-index: -99999"><i class="iconfont icon-pinglun" style="font-size: 20px" ></i></el-divider>
      <div style="width: 70%;margin-left: 100px">
        <comment  v-for="comment in comments" :key="comment.comment_id" :comment="comment">
          <template v-if="comment.childComments.length">
            <comment v-for=" child in comment.childComments" :key="child.child_comment_id" :comment="child"></comment>
          </template>
        </comment>


        <div style="text-align: left">
          <el-input
              type="text"
              placeholder="取个名字吧"
              v-model="commentname"
              maxlength="10"
              show-word-limit
              style="width: 200px;"
          />
          <comment-message-editor :inline="true" buttonText="发表" @submit="submitReply"></comment-message-editor>
      </div>

      </div>


      <div style="width: 100% ;height: 100px;border-bottom: #8c939d solid 5px"></div>
      <Footer style="flex: 0"></Footer>
    </div>
  </div>
</template>
<script>


import commentMessageEditor from 'comment-message-editor'
import banner from "@/components/banner";
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import picture from "@/assets/images/bg.png";
//import Header from "@/components/Header";
import Footer from "@/components/Footer";
import comment from "@/components/comment";
import CodeEditor from "@/components/codeEditor";
import axios from "axios";
export default {
  name: "Blog",
  components: {
    CodeEditor,
   // Header,
    Footer,
    mavonEditor,
    banner,
    comment,
    // eslint-disable-next-line vue/no-unused-components
    commentMessageEditor
  },
  methods:{
    back(){
      this.$router.go(-1);
      // this.$router.push('/')
    },
    submitReply(v){
      const _this = this
      this.PComment.comment_content = v
      this.PComment.comment_article_id = this.$route.params.blogId
      this.PComment.comment_like_count = 0
      this.PComment.comment_user_name = this.commentname
      axios.post('http://39.99.192.64:8080/comments/',_this.PComment).then(function (resp){
        console.log(resp.data)
        window.location.reload()
      })
    },
  },
  computed: {
    // 解析器配置
    prop () {
      let data = {
        subfield: false,// 单双栏模式
        defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,	// 是否允许编辑
        toolbarsFlag: false,
        scrollStyle: true,
        codeStyle: 'atelier-forest-dark',
      }
      return data
    }
  },
  data()
  {
    return{
      commentname:'',
      PComment:{
        comment_user_name: "坤仔",
        comment_article_id: 9,
        comment_like_count: 0,
        comment_date: "2020-12-23",
        comment_content: "哈哈哈哈哈",
        childComments: [],
        article: null
      },
      styles: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${picture})`
      },
      htmlContent: '',
       comments: []
    }
  },
  created() {

  },
  mounted() {
    const _this = this
    axios.get('/api/articles/'+_this.$route.params.blogId).then( function(resp){
      _this.htmlContent = resp.data.article_content;
    }),
    axios.get('http://39.99.192.64:8080/comments/article/'+_this.$route.params.blogId).then(function (resp){
      _this.comments = resp.data
      console.log("评论")
      console.log(_this.comments)
    })
  }
}
</script>

<style scoped>

</style>

<style>
/*导航*/
.BlogAnchor {
  background: #f1f1f1;
  padding: 10px;
  line-height: 180%;
  position: fixed;
  right: 48px;
  top: 48px;
  border: 1px solid #aaaaaa;
}
.BlogAnchor p {
  font-size: 18px;
  color: #15a230;
  margin: 0 0 0.3rem 0;
  text-align: right;
}
.BlogAnchor .AnchorContent {
  padding: 5px 0px;
  overflow: auto;
}
.BlogAnchor li{
  text-indent: 0.5rem;
  font-size: 14px;
  list-style: none;
}
.BlogAnchor li .nav_item{
  padding: 3px;
}
.BlogAnchor li .item_h1{
  margin-left: 0rem;
}
.BlogAnchor li .item_h2{
  margin-left: 2rem;
  font-size: 0.8rem;
}
.BlogAnchor li .nav_item.current{
  color: white;
  background-color: #5cc26f;
}
#AnchorContentToggle {
  font-size: 13px;
  font-weight: normal;
  color: #FFF;
  display: inline-block;
  line-height: 20px;
  background: #5cc26f;
  font-style: normal;
  padding: 1px 8px;
}
.BlogAnchor a:hover {
  color: #5cc26f;
}
.BlogAnchor a {
  text-decoration: none;
}
</style>
