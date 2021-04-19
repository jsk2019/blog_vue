<template>
  <article class="post post-list">
    <div class="post-entry">
      <el-row>
        <el-col :span="5">
          <div class="feature">
            <router-link :to="`/`">
              <img src="../assets/images/swiper1.jpeg" />
            </router-link>
          </div>
        </el-col>
        <el-col :offset="1" :span="16">
          <el-row>
            <el-col :span="16">
              <h1 class="entry-title">
                <!-- 连接到某一篇 博文 暂时改一下 -->
                <router-link :to="`/`"
                  ><span v-if="true" style="color: #ff6d6d; font-weight: 600"
                    >[置顶] </span
                  >{{ post.article_title }}</router-link
                >
              </h1>
            </el-col>
            <el-col :span="1">
              <div class="p-time">
                <i class="el-icon-time"></i> {{ post.article_create_date
                }}<i
                  v-if="true"
                  class="el-icon-price-tag"
                  style="margin-left: 5px; color: #ff6d6d"
                ></i>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :offset="1" :span="22">
              <p class="summary">{{ post.article_content }}</p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :offset="20" :span="4">
              <footer class="entry-footer">
                <div class="post-more">
                  <i
                    class="el-icon-right"
                    style="font-size: 25px"
                   @click=" $router.push({ path: '/BlogDetail/' + post.article_id })"
                  ></i>
                </div>
                <div class="info-meta">
                  <div class="comnum">
                    <span>
                      <i class="el-icon-s-comment"></i>

                      <a href="https://zhebk.cn/Web/Akina.html"
                        >{{ post.article_comment_count }} 条评论</a
                      >
                    </span>
                  </div>
                  <div class="views">
                    <span
                      ><i class="el-icon-view"></i
                      >{{ post.article_views }} 热度</span
                    >
                  </div>
                </div>
              </footer>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </article>
</template>

<script>
export default {
  name: "post",
  props: {
    post: {
      type: Object,
    },

  },
  methods:{

  }
};
</script>

<style scoped lang="less">
.post {
  margin: 0 0 4% 0;
  position: relative;
}

.post-entry {
  .feature {
    position: absolute;
    margin-top: 10px;

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 50%;
      padding: 2px;
      border: 1px solid #dadada;
      position: relative;
      transition: all 0.2s linear;
      overflow: hidden;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }

  .entry-title {
    font-size: 21px;
    font-weight: 600;
    line-height: 50px;
    margin: 0 0 0 17%;
    position: relative;
    z-index: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 70%;
    color: #737373;

    & a:hover {
      color: #8fd0cc;
    }
  }

  .p-time {
    position: absolute;
    right: 0;
    top: 16px;
    font-size: 12px;
    color: #989898;
    letter-spacing: 1px;
    font-family: din, "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif;
    display: flex;
    align-items: center;
  }

  p.summary {
    min-height: 60px;
    margin: 0 0 0 17%;
    font-size: 15px;
    color: #6f6f6f;
    letter-spacing: 1px;
    line-height: 30px;
    text-align: left;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  footer.entry-footer {
    margin: 0 0 0 10%;
    list-style: none;

    .post-more {
      margin-top: 10px;
      text-align: right;
      color: #a0dad0;

      a:hover {
        color: #737373;
      }
    }

    .info-meta {
      margin-top: 10px;
      font-family: din, "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif;
      position: absolute;
      top: 20px;
      opacity: 0;
      padding-top: 8px;
      border-top: 1px solid #ddd;
      -webkit-transform: translate3d(-150px, 0, 0);
      transform: translate3d(-150px, 0, 0);
      visibility: visible;
      transition: 0.7s all ease;
      -webkit-transition: 0.6s all ease;
      -moz-transition: 0.6s all linear;
      -o-transition: 0.6s all ease;
      -ms-transition: 0.6s all ease;

      span,
      a {
        color: #b3b3b3;
        font-size: 12px;
      }

      i {
        margin-top: 3px;
        margin-right: 10px;
        float: left;
      }
    }
    .comnum {
      float: left;
    }
  }
}

.post-entry:hover footer.entry-footer .info-meta {
  -webkit-transform: translate3d(-230px, 0, 0);
  transform: translate3d(-250px, 0, 0);
  opacity: 1;
  visibility: visible;
}

.post hr {
  width: 30%;
  height: 1px;
  margin: 0 auto;
  border: 0;
  background: #efefef;
}

/*******/
@media (max-width: 1060px) {
  .info-meta {
    display: none;
  }
}
@media (max-width: 800px) {
  .post-entry {
    .feature img {
      width: 50px;
      height: 50px;
    }
    .entry-title {
      font-size: 16px;
      line-height: 30px;
      margin: 0 0 0 65px;
    }
    .p-time {
      position: relative;
      margin: -15px 0 0 65px;
    }
    p.summary {
      margin: 20px 0 0 65px;
      font-size: 14px;
      height: 30px;
      overflow: hidden;
    }
    .post-more {
      display: none;
    }
  }
  .post-list hr {
    margin-top: 20px;
  }
}

/******/
</style>
