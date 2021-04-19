<template>
  <div>
    <Header></Header>
    <div class="securityresearch">
      <div class="title">
        <el-divider content-position="center">项目技术</el-divider>
        <p><el-tag>spring</el-tag><el-tag >vue</el-tag><el-tag>docker</el-tag></p>
      </div>
      <div class="skill">
        <span class='vue'>Spring</span>
        <span class='js'>ECharts</span>
        <span class='css'>Vue</span>
        <span class='echarts'>Docke</span>
        <span class='webpack'>Linux</span>
        <span class='python'>JWT</span>
        <span class='linux'>Mybatis</span>
      </div>
    </div>
  <div class="aboutus">
    <div class="title">
      <el-divider content-position="center">团队简介</el-divider>
      <p><el-tag>武汉大学</el-tag><el-tag>2018级软工六班</el-tag></p>
    </div>
    <el-card class="box-card" style="margin-bottom: 20px;">
      <div class="text item">
        <el-row :gutter="110">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="large">王帅</span> 2018302120023   热爱spring ，热爱学习JAVAEE，本学期哔哩哔哩观看视频记录首数spring系列
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="large">江圣坤</span>2018302080007  喜欢打游戏，最喜欢xiaohu，喜欢spring boot，不喜欢前端
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <span class="large">郭香俊</span>2018302120022   喜欢打篮球，也热爱spring。
            </div>
          </el-col>
        </el-row>
      </div>
      <div class='topMask square'></div><div class='topMask circular'></div>
    </el-card>
  </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: 'About',
  components:{
    Footer,
    Header
  }
}
</script>
<style>
.securityresearch .title p .el-tag{
  margin: 0px 5px;
  cursor: pointer;
}
.securityresearch .box-card .text{
  text-align: left;
}
</style>
<style scoped>
.securityresearch{
  font-size: 14px;
  padding: 0px 100px;
}
.title p{
  color: #8c8888;
  font-size: 15px;
  margin-bottom: 80px;
  text-align: center;
}
.content p{
  font-size: 20px;
  color: #8c8888;
}
.skill{
  margin: 100px 0px;
  position: relative;
}
.skill span{
  display: inline-block;
  color: #fff;
  border-radius: 50%;
}
span.vue{
  background-color: rgba(102,153,204,1) ;
  width: 200px;
  height: 200px;
  line-height: 200px;
  font-size: 28px;
  z-index: 100;
}
span.js{
  background-color: rgba(255,153,102,0.5);
  width: 130px;
  height: 130px;
  line-height: 130px;
  font-size: 26px;
  position: absolute;
  left: 43%;
  bottom: 150px;
  z-index: 0;
}
span.css{
  background-color: rgba(102,204,204,0.8);
  width: 90px;
  height: 90px;
  font-size: 26px;
  line-height: 90px;
  font-size: 26px;
  position: absolute;
  left: 35%;
  top: 100px;
  z-index: 0;
}
span.echarts{
  background-color: rgba(255,153,153,0.7) ;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 24px;
  position: absolute;
  left: 59%;
  bottom: 10px;
  z-index: 0;
}
span.webpack{
  background-color: rgba(255,204,51,0.8);
  width: 70px;
  height: 70px;
  line-height: 70px;
  font-size: 13px;
  position: absolute;
  left: 30%;
  top: 20px;
  z-index: 0;
}
span.python{
  background-color: rgba(204,102,102,0.5) ;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  position: absolute;
  left: 51%;
  bottom: -10px;
  z-index: 0;
}
span.linux{
  background-color: rgba(153,153,255,0.8) ;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  position: absolute;
  left: 60%;
  top: -50px;
  z-index: 0;
}
</style>
<style>
.aboutus .grid-content.line{
  border-right: 1px solid #ddd;
  height: 150px;
}
.aboutus .el-card__header{
  background: #545c64;
}
.aboutus .el-card__body{
  padding: 50px 20px;
}
.aboutus .el-timeline-item__wrapper{
  top: -8px;
}
.aboutus .title p .el-tag{
  margin: 0px 5px;
  cursor: pointer;
}
</style>
<style scoped>
.aboutus{
  font-size: 14px;
  text-align: left;
  padding: 0px 100px;
}
.intro{
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.text {
  font-size: 14px;
  text-align: left;
  line-height: 30px;
  text-indent: 2em;
}
.box-card{
  position: relative;
}
.item {
  display: inline-block;
  margin: 30px 50px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.clearfix span{
  color: #fff;
  font-weight: bold;
}
.title p{
  color: #8c8888;
  font-size: 15px;
  margin-bottom: 80px;
  text-align: center;
}
.grid-content .large{
  font-size: 16px;
  color: #409EFF;
  font-weight: bold;
}
.topMask{
  width: 100px;
  height: 100px;
  background-color: rgba(68,138,255,0.2);
  transform: rotate(45deg);
  position: absolute;
}
.square{
  border-radius: 5px;
  top: 0px;
}
.circular{
  border-radius: 50%;
  top:80px;
  left: 80%;
  background-color: rgba(255, 208, 75,0.2);
}
</style>
