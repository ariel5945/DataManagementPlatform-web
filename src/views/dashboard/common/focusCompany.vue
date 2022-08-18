<template>
  <div class="box">
    <ItemWrap title="重点网络零售企业排行(万元)" :style="styleObj">
      <div id="main" style="width: 544px; height: 820px"></div>
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
        height: "876px",
        backgroundColor: "rgba(220,220,220,0.03)",
      },
    };
  },
  mounted() {
    this.getFocusCompany();
  },
  methods: {
    getFocusCompany() {
      let chartMain = echarts.init(document.getElementById("main"));
      let option = {
        grid: {
          top: "2%",
        },
        tooltip: {
          show: true,
          trigger: "axis",
          backgroundColr: "#235EAE",
          borderWidth: 1,
          formatter: "{b0}: {c0}万元",
        },
        // markPoint:{
        //   symbol:'pin',
        //   itemStyle:{
        //     color:'red',
        //     borderColor:'orange',
        //     borderWidth:1,
        //     borderType:'solid',
        //   }
        // },
        // 取消hover时的阴影
        axisPointer: {
          show: false,
        },
        xAxis: {
          type: "value",
          show: false,
        },
        yAxis: {
          type: "category",
          interval: 0,
          inverse: true,
          show: true,
          boundaryGap: true,
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          axisLine: {
            show: false,
            onZero: true,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: "#fff",
            },
            margin: 5,
            formatter: function (params) {
              var val = "";
              var show = 5;
              if (params.length > show) {
                val = params.substr(0, show) + "...";
                return val;
              } else {
                return params;
              }
            },
          },
          data: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
          ],
        },
        series: [
          {
            data: [120, 300, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110],
            type: "bar",
            barMaxWidth: 15,
            barMaxHeight: 100,
            realtimeSort: false,
            showBackground: true,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "right",
                  stack: "samestack",
                  formatter: "{c}",
                  textStyle: {
                    color: "#fff",
                    fontSize: 14,
                  },
                },
                color: new echarts.graphic.LinearGradient(0, 0, 1, 2, [
                  { offset: 0, color: "rgba(29, 231, 231, 1)" },
                  { offset: 0.5, color: "rgba(63,149, 206, .5)" },
                  { offset: 1, color: "rgba(63,149,206, .5)" },
                ]),
              },
            },
          },
        ],
      };
      chartMain && chartMain.setOption(option);
      window.onresize = option.resize;
    },
  },
};
</script>

<style scoped></style>
