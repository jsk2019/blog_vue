<template>
<div style="margin-top: 100px" id="chartPie" class="pie-wrap"></div>
</template>

<script>
import * as echarts from 'echarts';
import axios from "axios";
require('echarts/theme/macarons');//引入主题

export default {
  data() {
    return {
      testData: "",
      chartPie: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPieChart();
    })
  },
  methods: {
    drawPieChart() {
      let mytextStyle = {
        color: "#333",
        fontSize: 18,
      };
      let mylabel = {
        show: true,
        position: "right",
        offset: [30, 40],
        formatter: '{b} : {c} ({d}%)',
        textStyle: mytextStyle
      };
      this.chartPie = echarts.init(document.getElementById('chartPie'),'macarons');
      this.chartPie.setOption({
        title: {
          text: '博客分类',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          data: ['JAVA', '算法', '神经网络', '操作系统'],
          left:"center",
          top:"bottom",
          orient:"horizontal",
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: [
              {value: 3, name: 'JAVA'},
              {value: 2, name: '算法'},
              {value: 4, name: '神经网络'},
              {value: 3, name: '操作系统'},
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
            label: {
              emphasis: mylabel
            }
          }
        ]
      });
    }
  },
  created() {
   // const _this = this
    for (var i=0;i<4;i++) {
      axios.get('http://39.99.192.64:8080//each/' + name).then(function (resp) {

        console.log(resp.data)
        window.location.reload()
      })
    }
  }
}
</script>

<style lang='less' scope>
.pie-wrap{
  width:100%;
  height:400px;
}
</style>
