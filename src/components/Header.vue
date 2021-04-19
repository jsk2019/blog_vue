<template>
  <div>
    <div style="width: 100%; height: 200px">
      <el-image :src="back" style="height: 100%"></el-image>
    </div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        @select="handleSelect"
        background-color="#d81e06"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal"
    >
      <el-menu-item index="1" disabled style="width: 900px"></el-menu-item>

      <el-menu-item index="2" @click="$router.push('/BlogIndex')">首页</el-menu-item>

      <el-submenu index="3">
        <template slot="title">类别</template>
        <el-menu-item
            v-for="item in labels"

            :key="item.label_id"
            @click="selectById(item.label_id)"
        >
          {{ item.label_name }}
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="4" @click="$router.push('/Friend')">友链</el-menu-item>

      <el-menu-item index="5" @click="$router.push('/about')">关于</el-menu-item>

      <el-menu-item index="6">
        <head-search
            style="margin-top: 15px; text-align: right; bottom: 15px"
        ></head-search>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// 增加部分
import store from "@/vuex/store";
import axios from "axios";
import headSearch from "@/components/headSearch";
import picture from "@/assets/images/back.jpg";
export default {
  name: "Header",
  components: {
    headSearch,
  },
  data() {
    return {
      labels: [],
      activeIndex: "1",
      activeIndex2: "1",
      back: require("@/assets/images/back.jpg"),
      styles: {
        backgroundImage: `url(${picture})`,
      },
    };
  },
  created(){
    this.getAllLabels();
  },
  store,
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    selectById(id) {
      console.log(this.labels[id-1].label_name);
      store.commit("setLabel", this.labels[id-1].label_name);
    },
    getAllLabels(){
      axios
          .get("http://39.99.192.64:8080/labels/")
          .then((response) => {
            // console.log(response.data);//请求的返回体
            this.labels = response.data;
            console.log(this.labels);
          })
          .catch((error) => {
            console.log(error); //异常
          });
    }
  },
};
</script>

<style>
.header-search {
  display: inline-block;
  position: relative;
}

/*.el-menu--horizontal>.el-menu-item {*/
/*  float: right !important;*/

/*}*/
</style>
