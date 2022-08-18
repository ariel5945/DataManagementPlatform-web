<template>
  <div class="box">
    <ItemWrap title="月度网络零售走势（万元）" :style="styleObj">
      <div id="monthBox" style="width: 544px; height: 357px">
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
    this.getMonthBox()
  },
  methods: {
    getMonthBox() {
      let monthBox = echarts.init(document.getElementById('monthBox'))
      let option = {
        legend: {
          show: true,
          x: 'right',
          padding: [0, 50, 0, 0],
          textStyle: {
            color: 'rgba(230, 247, 255, 1)',
            fontSize: 16
          }
        },
        xAxis: {
          type: 'category',
          offset: 8,
          axisTick: {
            show: false,
          },
          axisLine: {//轴线显示
            show: false,
          },
          splitLine: {
            show: false,
          },
          splitArea: { show: false },
          axisLabel: {
            interval: 0,//数据全部展示
            inverse: true,
            textStyle: {
              color: '#fff',
              fontSize: 12
            },
          },
          data: ['7月', '8月', '9月', '10月', '11月']
        },
        yAxis: {
          type: 'value',
          name: '单位(家)',
          axisLine: {//y轴线显示
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false  //坐标轴刻度线
          },
          splitLine: {
            show: true,
            lineStyle: {
              // 设置虚线
              type: [50, 50],
              dashOffset: 5,
              color: 'rgba(255,255,255,.2)'
            }
          },
          axisLabel: {
            interval: 0,
            color: '#fff',
            fontSize: 14
          },
        },
        series: [
          {
            data: ['233', '255', '267', '360', '150'],
            type: 'bar',
            name: '当月网络零售额',
            barWidth: 17,
            barGap: 10,
            showBackground: false,
            showSymbol: false,
            hoverAnimation: false,
            itemStyle: { //左面
              normal: {
                color: function (params) {
                  let colorList = ["rgba(72,255,255,0.3)"];
                  return colorList[0];
                },
              }
            },
            color: {
              type: 'liner',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(72,255,255,0.5)' },
                { offset: 0.5, color: 'rgba(44,166,166,.5)' },
                { offset: 1, color: 'rgba(44,166,166,1)' }
              ],
              global: false
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  stack: 'samestack',
                  formatter: "{c}",
                  textStyle: {
                    color: '#fff',
                    fontSize: 14
                  }
                }
              }
            }
          },
          {
            // 右面
            name: '',
            type: 'bar',
            barWidth: 17,
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = ["rgba(44,166,166,.3)"];
                  return colorList[0];
                },
              }
            },
            data: ['233', '255', '267', '360', '150'],
            barGap: 0
          },
          {//顶部
            type: 'pictorialBar',
            barWidth: 17,
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = ["rgba(44,166,166,.5)"];
                  return colorList[0];
                },
              }
            },
            symbol: 'diamond',
            symbolSize: ['35', '5'],
            symbolOffset: [1, -2],
            symbolPosition: 'end',
            data: ['233', '255', '267', '360', '150'],
            z: 3
          },
        ]
      }
      monthBox && monthBox.setOption(option);
      window.onresize = option.resize;
    }
  }
}
</script>

<style scoped>
</style>

