<template>
  <div class="box">
    <ItemWrap title="非实物累计零售额" :style="styleObj">
      <div id="noRetai" style="width: 358px; height: 317px">
      </div>
    </ItemWrap>
  </div>
</template>

<script>
import * as echarts from "echarts";
const img =[]
export default {
  data() {
    return {
      noRetaiChart: {},
      styleObj: {
        width: "358px",
        height: "396px",
      },
    }
  },
  mounted() {
    this.getnoRetai()
    window.onresize = () => {
      this.noRetaiChart.resize();
    }
  },
  methods: {
    getnoRetai() {
      this.noRetaiChart = echarts.init(document.getElementById('noRetai'))
      const noRetaiOption = {
        grid: {
          top: '2%',
          bottom: '10%',
          left: '5%'
        },
        tooltip: {
          show:true,
          trigger: "axis",
          backgroundColr: "#235EAE",
          borderWidth: 1,
          formatter: "{b0}: {c0}万元"
        },
        // 取消hover时的阴影
        axisPointer: {
          show: false
        },
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          interval:0,
          offset: -20,
          position: "left",
          axisTick: {
            alignWithLabel: true,
            show: false
          },
          position: '60',
          axisLine: {
            show: false,
            onZero: true
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: "#fff",
              // 设置标题位置
              align: "left",
              lineHeight: 32,
              verticalAlign: "bottom",
            },

            // margin: 5,
            //  formatter: function (params) {
            //   var val = "";
            //   var show = 5;
            //   if (params.length > show) {
            //     val = params.substr(0, show) + '...';
            //     return val;
            //   } else {
            //     return params;
            //   }
            // },
          },
          show: true,
          type: "category",
          inverse: true,
          boundaryGap: true,
          animationDuration: 200,
          animationDurationUpdate: 200,
          alignWidthLabel: true,
          data: ['No.1在线餐饮', 'No.2虚拟商品', 'No.3在线文娱', 'No.4在线旅游']
        },
        series: [
          {
            data: [120, 300, 150, 80],
            type: 'bar',
            realtimeSort: false,
            showBackground: true,
            barWidth: 15,
            barMaxWidth: 100,
            // 动效
            animationDurationUpdate: 300,
            animationEasing: "linear",
            animationEasingUpdate: "quarticIn",
            animation: true,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: [230, -15],
                  stack: 'samestack',
                  formatter: "{c}" + "/万元",
                  textStyle: {
                    color: "#fff",
                    fontSize: 14
                  },
                },
                color: new echarts.graphic.LinearGradient(0, 0, 1, 2, [
                  { offset: 0, color: 'rgba(29, 231, 231, 1)' },
                  { offset: 0.5, color: 'rgba(24, 144, 255, .5)' },
                  { offset: 1, color: 'rgba(24, 144, 255, 1)' }
                ])
              }
            },
          }
        ],
      }
      setInterval(() => {
        for (let i = 0; i <= 3; i++) {//定义i确保柱图的每一项被刷新
          noRetaiOption.series[0].data[i] = (Math.round(Math.random() * 300) + 100);//数据随机取值
        }
        this.noRetaiChart && this.noRetaiChart.setOption(noRetaiOption);
      }, 2000)
    }
  }
}
</script>

<style scoped>
</style>

