<template>
    <div class="comment" :id="`comment${comment.comment_id}`" style="text-align: left">
        <div class="comment-head" >
            <div class="user-avatar"><img src="../assets/images/swiper1.jpeg" alt=""></div>
            <div class="head-right">
                <section-title >
                    <div style="display: flex;align-items: center;justify-content: space-between;">
                        <div>
                            <span class="from-user user-name">{{comment.comment_user_name}}
                              <span style="margin: 0 5px;" v-if="comment.comment_parent_id">@</span><span class="user-name">{{comment.comment_to_user_name}}</span></span>
                        </div>
                        <div style="font-size: 13px;">
                            <span style="color: #9c9c9c;margin-right: 20px;">{{comment.comment_date}}</span>
                            <span @click.stop="showCommentEditor=true" style="cursor: pointer;">回复</span>
                        </div>
                    </div>
                </section-title>
            </div>
        </div>

        <div class="comment-body">
            <div class="content-text">
              <div v-html="comment.comment_content"></div>
            </div>
            <div v-if="showCommentEditor" @click.stop="">
              <el-input
                  type="text"
                  placeholder="取个名字吧"
                  v-model="commentname"
                  maxlength="10"
                  show-word-limit
                  style="width: 200px"
              />
                <comment-message-editor :inline="true" buttonText="回复" @submit="submitReply"></comment-message-editor>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/section-title'
    import commentMessageEditor from 'comment-message-editor'
    import axios from 'axios'
    export default {
        name: "comment",
        props: {

          comment:{
            type:Object
          }
        },
        data(){
          return{
            contentText:'',
            commentname:'',
            showCommentEditor: false,
            Childcomment:{
              comment_user_name: "hong",
              comment_like_count: 0,
              comment_date: "",
              comment_content: "",
              comment_parent_id: 0,
              comment_to_user_name: ""

            }
          }
        },
        watch:{
            showCommentEditor(value) {
                if (value) {
                    document.body.addEventListener('click', this.close)
                } else {
                    document.body.removeEventListener('click', this.close)
                }
            }
        },
        components: {
            sectionTitle,
            commentMessageEditor
        },
        methods: {
            reply(id){
              // eslint-disable-next-line no-unused-vars
                const ref = `comment${id}`
            },
          // eslint-disable-next-line no-unused-vars
            submitReply(v){
              const _this = this
              this.Childcomment.comment_parent_id = this.comment.comment_id
              this.Childcomment.comment_content = v
              this.Childcomment.comment_to_user_name = this.comment.comment_user_name
              this.Childcomment.comment_like_count = 0
              this.Childcomment.comment_user_name = this.commentname
              axios.post('http://39.99.192.64:8080/childComments/',_this.Childcomment).then(function (resp){
                console.log(resp.data)
                window.location.reload()
              })
            },
            close(){
                this.showCommentEditor = false
            }
        },
      created() {
        this.contentText = this.props.comment.comment_content
        console.log(this.contentText)
      },

    }
</script>

<style scoped lang="less">
    .comment{
        margin: 20px 0;
    }
    .comment-head{
        display: flex;
        .head-right{
            flex: 1;
        }
        .user-name{
            color: #8fd0cc;
        }
    }
    .comment-body{
        padding-left: 80px;
        .content-text{
            /*padding-bottom: 30px;*/
            margin-bottom: 30px;
            font-size: 14px;
            color: #9c9c9c;
            line-height: 1.3rem;
        }
    }
    .user-avatar{
        width: 50px;
        height: 50px;
        margin-right: 30px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }
    @media (max-width: 600px){
        .comment-body{
            padding-left: 15px;
            .content-text{
                margin-top: 10px;
            }
        }
        .user-avatar{
            margin-right: 10px;
        }
    }
</style>
