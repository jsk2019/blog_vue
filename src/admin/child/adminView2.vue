<template>

  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div style="" id="chartLine" class="line-wrap"></div>
</template>

<script>
import * as echarts from 'echarts';
require('echarts/theme/shine');//引入主题

export default {
  data() {
    return {
      chartLine: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLineChart();
    })
  },
  methods: {
    drawLineChart() {
      this.chartLine = echarts.init(this.$el,'shine');// 基于准备好的dom，初始化echarts实例
      let option = {
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['博客进入次数','后台进入次数','首页进入次数']
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            axisTick: {
              show: false
            },
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisTick: {
              show: false
            },
            name: '（人）'
          }
        ],
        series : [
          {
            name:'博客进入次数',
            type:'line',
            stack: '总量',
            data:[120,152,132,202]
          },
          {
            name:'后台进入次数',
            type:'line',
            stack: '总量',
            data:[12,15,62,12]
          },
          {
            name:'首页进入次数',
            type:'line',
            stack: '总量',
            data:[90,25,51,133]
          },
        ]
      };
      // 使用刚指定的配置项和数据显示图表
      this.chartLine.setOption(option);
    }
  }
}
</script>

<style lang='less' scope>
.line-wrap{
  width:50%;
  height:400px;
}
</style>
