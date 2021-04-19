<template>
  <div class="header-search">
    <i class="iconfont icon-search" style="font-size:23px;text-align: right" @click.stop="click"></i>
    <input ref="searchInput" :class="{'show':show}" v-model="searchValue" type="text" @click.stop="" @keyup.enter="search"/>

  </div>
</template>

<script>
// 增加部分
import store from "@/vuex/store";

export default {
  name: "headsearch",
  data(){
    return{
      searchValue: '',
      show: false
    }
  },
  store,
  watch:{
    show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
  },
  methods:{
    search(){
      // console.log(this.searchValue)
      this.$router.push({name:'search',params:{words:this.searchValue}});
      this.close()
    },
    click(){
      console.log(this.searchValue);
      store.commit("setKey",this.searchValue);
      this.searchValue = '';
      this.show = !this.show;
      if (this.show) {
        this.$refs.searchInput && this.$refs.searchInput.focus();
      }
    },
    close(){
      this.$refs.searchInput && this.$refs.searchInput.blur()
      this.show = false
    }
  }
}
</script>

<style scoped lang="less">
.header-search{
  //display: inline-block;
  // position: relative;
  i{
    font-size: 18px;
    position: relative;
    top: 3px;
  }
  input{
    border:none;
    outline:none;
    overflow: hidden;
    background: transparent;
    height: 30px;
    width: 0;
    transition: .2s all;
    &.show{
      width: 200px;
      margin-left: 10px;
    }
    &:focus{
      border-bottom: 1px solid #8fd0cc;
    }
  }
}
</style>
