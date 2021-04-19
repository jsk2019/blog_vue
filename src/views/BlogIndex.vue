<template>
  <div :style="styles">
    <div class="index">
      <Header />
      <div
          style="width: 100%; height: 5px; border-bottom: #8c939d solid 5px"
      ></div>
      <!--文章列表-->
      <el-row >
        <el-col :offset="8" :span="16">
          <main class="site-main">
            <template v-for="item in postlists">
              <BlogCard
                  class="card"
                  :post="item"
                  :key="item.article_id"
              ></BlogCard>
            </template>
          </main>
        </el-col>
      </el-row>
      <router-view></router-view>
      <Footer style="flex: 0"></Footer>
    </div>
  </div>
</template>

<script>
// 增加部分
import store from "@/vuex/store";

import picture from "@/assets/images/bg.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import axios from "axios";

export default {
  name: "BlogIndex",
  components: {
    Header,
    Footer,
    BlogCard,
  },
  data() {
    return {
      styles: {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${picture})`,
      },
      postlists: [],

    };
  },
  computed:{
    labelInIndex(){
      return this.$store.state.label_type;
    },
    keyInIndex(){
      return this.$store.state.key_word;
    }
  },
  store,
  created(){
    this.testgetrequest();
  },
  watch:{
    labelInIndex(val,oldVal){
      axios
          .get("http://39.99.192.64:8080/labels/title/"+val)
          .then((response) => {
            // console.log(response.data);//请求的返回体
            this.postlists = response.data;
            console.log(this.postlists);
          })
          .catch((error) => {
            console.log(error); //异常
          });
      console.log("labelInIdex: "+val,oldVal);
    },
    keyInIndex(val,oldVal){
      axios
          .get("http://39.99.192.64:8080/articles/search/"+val)
          .then((response) => {
            // console.log(response.data);//请求的返回体
            this.postlists = response.data;
            console.log(this.postlists);
          })
          .catch((error) => {
            console.log(error); //异常
          });
      console.log("keyInIdex: "+val,oldVal);
    }
  },
  methods: {
    testgetrequest() {
      console.log("begin test");
      axios
          .get("http://39.99.192.64:8080/articles/")
          .then((response) => {
            // console.log(response.data);//请求的返回体
            this.postlists = response.data;
            console.log(this.postlists);
          })
          .catch((error) => {
            console.log(error); //异常
          });
    },
  },
};
</script>

<style scoped>
.index {
  filter: alpha(Opacity=85);
  -moz-opacity: 0.85;
  opacity: 0.85;
}
.site-main {
  padding-top: 80px;
}

.card {
  width: 780px;
}
</style>
