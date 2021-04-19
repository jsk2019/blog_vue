<template>
  <div>
    <el-button
        style="float: right ;margin-bottom: 15px"
        type="primary"
        circle icon="el-icon-plus"
    @click="$router.push('/adminBlogEditor')"></el-button>
    <el-table
        :data="tableData"
        border
        style="width: 100% ">
      <el-table-column
          fixed
          prop="article_id"
          label="id"
          width="150"
      >
      </el-table-column>
      <el-table-column
          prop="article_title"
          label="博客"
          width="120">
      </el-table-column>
      <el-table-column
          prop="author"
          label="作者"
          width="120">
        詹森吃家乡鸡
      </el-table-column>
      <el-table-column
          prop="article_create_date"
          label="时间"
          width="200"
          >
      </el-table-column>
      <el-table-column
          prop="type"
          label="类型"
          width="200">
      </el-table-column>
      <el-table-column
          prop="article_views"
          label="浏览数"
          width="100">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"  type="primary" icon="el-icon-edit" circle size="small"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="small" @click="deletebook(scope.row)" ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        page-size="5"

        :total="total"
        @current-change="page">
    </el-pagination>

  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "adminBlog",

  methods: {
    handleClick(row) {
      this.$router.push({
        path:'/adminBlogEditor',
        query:{
          row: row.article_id
        }
      })
    },
    deletebook(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete('/api/articles/'+row.article_id).then( function(resp){
          console.log(resp)
          window.location.reload()
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    page(currentPage){
      const _this = this
      axios.get('/api/articles/paged/'+currentPage+'/5').then( function(resp){
        _this.tableData = resp.data
        console.log(resp.data)
      })
    },
  },
  data(){
    return{
      total: null,
      tableData: [
        {}
      ]
    }
  },
  created() {
    const _this = this
    axios.get('/api/articles/paged/1/5').then( function(resp){
      _this.tableData=resp.data
    })
    axios.get('/api/articles/totalNum').then(function (resp){
      _this.total=resp.data.length
      console.log(resp.data)
    })
  }

}
</script>

<style scoped>

</style>
