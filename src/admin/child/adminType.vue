<template>
    <div>
      <el-button
          style="float: right ;margin-bottom: 15px"
          type="primary"
          circle icon="el-icon-plus"
          @click="$router.push('/adminTypeEditor')"></el-button>
      <el-table
          :data="tableData"
          border
          style="width: 100% ;margin-top: 50px">
        <el-table-column
            fixed
            prop="label_id"
            label="id"
            width="150"
        >
        </el-table-column>
        <el-table-column
            prop="label_name"
            label="标签"
            width="120">
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
          page-size="3"

          :total="total"
          @current-change="page">
      </el-pagination>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "adminType",
  data(){
    return{
      total:null,
      tableData:[
        {
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
    page(currentPage){
      const _this = this
      axios.get('http://39.99.192.64:8080/labels/paged/'+currentPage+'/3').then( function(resp){
        _this.tableData = resp.data
        console.log(resp.data)
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
    const _this = this
    axios.get('http://39.99.192.64:8080/labels/paged/1/3').then( function(resp){
      _this.tableData=resp.data
      console.log(resp.data)
    })
    axios.get('http://39.99.192.64:8080/labels/getNum').then(function (resp){
      _this.total=resp.data.length
      console.log(resp.data)
    })
  }
}

</script>

<style scoped>

</style>
