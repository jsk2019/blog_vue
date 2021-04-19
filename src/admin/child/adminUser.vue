<template>
  <div>
    <el-button
        style="float: right ;margin-bottom: 15px"
        type="primary"
        circle icon="el-icon-plus"
        @click="$router.push('/adminUserEditor')"></el-button>
    <el-table
        :data="tableData"
        border
        style="width: 100% ">
      <el-table-column
          fixed
          prop="id"
          label="id"
          width="150"
      >
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="num"
          label="链接"
          width="120">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="200" >
        <template slot-scope="scope" >
          <el-button type="danger" icon="el-icon-delete" circle size="small" @click="deletebook(scope.row)" ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        page-size="2"

        :total="total"
        @current-change="page">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "adminUser",
  data(){
    return{
      tableData:[
        {
          id:1,
          name:'郭香俊',
          num:'https://github.com/'
        },
        {
          id:2,
          name:'王帅',
          num:'https://github.com/'
        },
        {
          id:3,
          name:'江圣坤',
          num:'https://github.com/'
        }
      ]
    }
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        path:'/adminTypeEditor',
        query:{
          row: row
        }
      })
    },
    deletebook() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
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
    }
  },
  created() {
    //加载标签数据
  }
}

</script>

<style scoped>

</style>
