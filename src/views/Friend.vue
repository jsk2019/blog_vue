<template>
  <div>
    <Header></Header>
    <div style="margin-bottom: 100px"></div>
    <div style="width: 60%;margin-left: 200px">
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        label="日期"
        width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
        label="姓名"
        width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>地址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" filter-placement="bottom-end" fixed="right">
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)" >访问</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
    <div style="margin-top: 300px;margin-bottom: 200px"></div>
    <Footer></Footer>
  </div>

</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  components:{
    Footer,
    Header
  },
  data() {
    return {
      tableData: [{
        date: '2020-12-20',
        name: '王帅',
        address: 'https://github.com/jsk2019/'
      }, {
        date: '2020-12-22',
        name: '江圣坤',
        address: 'https://github.com/leaf/'
      }, {
        date: '2020-12-22',
        name: '郭香俊',
        address: 'https://github.com/lebron/'
      },]
    }
  },
  methods: {
    handleEdit() {
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
