<template>
    <div id="banner"  :class="{'home-banner':isHome}" style="position: relative;bottom: 40px">
        <div class="banner-img" :style="{'background-image': `url(${src})`}">
            <template >
                <!--博主信息-->
                <div class="focusinfo">
                    <!-- 头像 -->
                    <div class="header-tou">
                      <el-avatar :size="50" :src="websiteInfo.avator"></el-avatar>
                    </div>
                    <!-- 简介 -->
                    <div class="header-info" style="width: 300px; height: 100px">
                      <span class="iconfont icon-touxiang">詹森吃家乡鸡</span>
                      <div></div>
                      <div style="position:relative;left:10px">
                      <span style="font-size: 18px; " class="iconfont icon-fangwen"></span>
                      <span style="margin-right: 10px">: {{titleForm.article_views}} </span>
                      <span class="iconfont icon-shijian1">:</span>
                      <span >{{titleForm.article_create_date}}</span>
                      </div>
                    </div>
                  <div style="position: relative;top: 20px">
                    <h1>{{titleForm.article_title}}</h1>
                  </div>
                </div>
                <!--左右倾斜-->
                <div class="slant-left"></div>
                <div class="slant-right"></div>
            </template>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "banner",
        data(){
            return{
                websiteInfo: {
                  avator: require('@/assets/images/swiper1.jpeg'),
                  name:'jsk'
                },
              titleForm:{
                article_views: 0,
                article_create_date: '',
                article_title:'',

              },
                socials: []
            }
        },
        props:{
            src:{
                type: String,
                default: 'https://s1.ax1x.com/2020/05/23/YxaLMq.jpg'
            },
            isHome:{
                type: [Boolean,String],
                default: false
            }
        },
        created(){
          const _this = this
          axios.get('/api/articles/'+_this.$route.params.blogId).then( function(resp){
            console.log(resp.data)
            _this.titleForm.article_create_date = resp.data.article_create_date
            _this.titleForm.article_title = resp.data.article_title
            _this.titleForm.article_views = resp.data.article_views
          })
          this.$message({
            message:this.$route.params.blogId,
            type:"success"
          })
        },
        methods:{
            getSocial(){

            },
            getWebSiteInfo(){

            }
        }
    }
</script>

<style scoped lang="less">

    #banner {
        position: relative;
        margin-top: 80px;
        width: 100%;
        height: 500px;
        .banner-img{
            width: inherit;
            height: inherit;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            transition: all 0.2s linear;
            overflow: hidden;
            &:hover {
                transform: scale(1.1, 1.1);
                filter: contrast(130%);
            }
        }
        &.home-banner {
            height: 550px;
            .banner-img{
                background-position: center center;
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
                z-index: -1;
                transition: unset;
                &:hover {
                    transform: unset;
                    filter: unset;
                }
            }
            .slant-left {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                border-bottom: 100px solid #FFF;
                border-right: 800px solid transparent;
                left: 0;
                bottom: 0;
            }
            .slant-right {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                border-bottom: 100px solid #FFF;
                border-left: 800px solid transparent;
                right: 0;
                bottom: 0;
            }
        }
    }
    .focusinfo {
        position: relative;
        max-width: 800px;
        padding: 0 10px;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        text-align: center;
        img {
            width: 80px;
            height: auto;
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.3);
        }
        .header-info {
            width: 60%;
            font-size: 14px;
            color: #EAEADF;
            background: rgba(0, 0, 0, 0.66);
            padding: 20px 30px;
            margin: 30px auto 0 auto;
            font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
            letter-spacing: 1px;
            line-height: 30px;
        }
        .top-social {
            height: 32px;
            margin-top: 30px;
            margin-left: 10px;
            list-style: none;
            display: inline-block;
            font-family: miranafont,"Hiragino Sans GB",STXihei,"Microsoft YaHei",SimSun,sans-serif;
            div {
                float: left;
                margin-right: 10px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                width: 32px;
                background: white;
                border-radius: 100%;
            }
        }
    }
    @media (max-width: 960px){
        #banner {height: 400px;}
    }
    @media (max-width: 800px){
        #banner {display: none;}
    }
</style>
