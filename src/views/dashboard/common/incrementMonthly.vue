<template>
  <div class="box">
    <ItemWrap title="月度网络零售增速（万元）" :style="styleObj">
      <div id="lineMain" style="width: 544px; height: 357px">
      </div>
    </ItemWrap>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      styleObj: {
        width: "544px",
        height: "396px",
      },
    }
  },
  mounted() {
    this.getlineMain()
  },
  methods: {
    getlineMain() {
      let lineChart = echarts.init(document.getElementById('lineMain'))
      let option = {
        legend: {
          show: true,
          aling: 'auto',
          type: 'plain',
          icon: 'rect',
          itemHeight: 10,
          itemWidth: 10,
          textStyle: {
            color: 'rgba(230, 247, 255, 1)',
            fontSize: 16
          }
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          axisLabel: {
            interval: 0,//数据全部展示
            inverse: true,
            textStyle: {
              fontSize: 14
            },
          },
        },
        yAxis: {
          type: 'value',
           axisLabel: {
            interval: 0,//数据全部展示
            inverse: true,
            textStyle: {
              fontSize: 14,
            },
          },
        },
        series: [
          {
            data: [450, 230, 224, 218, 135, 147],
            type: 'line',
            showSymbol: true,//是否默认展示圆点
            symbolSize: 6,   //设定实心点的大小
            name: '当月网络零售额同比',
            itemStyle: {
              normal: {
                color: 'rgba(24, 144, 255, 1)',
              },
            },
          },
          {
            data: [260, 330, 424, 118, 335, 247],
            type: 'line',
            name: '累计网络零售额同比',
            symbolSize: 6,   //设定实心点的大小
            showSymbol: true,//是否默认展示圆点
            itemStyle: {
              normal: {
                color: 'rgba(65, 228, 187, 1)',
              }
            }
          }
        ]
      }
      lineChart && lineChart.setOption(option);
      window.onresize = option.resize;
    }
  }
}
</script>

<style scoped>
</style>

