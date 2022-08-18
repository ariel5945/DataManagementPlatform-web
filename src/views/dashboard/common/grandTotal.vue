<!-- 首页-概况-直播人数及零售 -->
<template>
  <div class="box">
    <ItemWrap title="实物及非实物累计零售额" :style="styleObj">
      <div
        id="real"
        style="width: 260px; height: 220px"
        class="real realPos">
      </div>
      <div class="realNum">{{realNum}}</div>
       <div class="tip2">实物累计网络零售额（万元）</div>
      <div
        id="nonPhysical"
        style="width: 260px; height: 220px"
        class="real physical">
        </div>
        <div class="nonNum">{{nonNum}}</div>
        <div class="tip3">非实物累计网络零售额（万元）</div>
    </ItemWrap>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      peopleNum: 123,
      realNum: 12109.9,
      nonNum :2659.7,
      styleObj: {
        width: "360px",
        height: "462px",
        backgroundColor: "rgba(220,220,220,0.03)",
      },
    };
  },
  mounted() {
    this.getRealChart();
    this.getnonPhysical();
  },
  methods: {
    getRealChart() {
      const realChart = echarts.init(document.getElementById("real"));
      const realOpt = {
        grid: {
          // right: '50%',
          // bottom:'10%'
        },
        xAxis: {
          type: "category",
          show: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        },
        yAxis: {
          show: false,
          type: "value",
        },
        series: [
          {
            data: [80, 932, 191, 234, 1290],
            type: "line",
            smooth: true,
            stack: "Total",
            lineStyle: {
              normal: {
                width: 2,
                borderWidth: 2,
                color: "rgba(162, 255, 94, 1)",
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(162, 255, 94, .5)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(162, 255, 94, 0)",
                    },
                  ],
                  false
                ),
              },
            },
            itemStyle: {
              normal: { color: "rgba(162, 255, 94, 1)" },
            },
          },
        ],
      };
      realChart && realChart.setOption(realOpt);
      window.onresize = realOpt.resize;
    },
    getnonPhysical() {
      const physicalChart = echarts.init(
        document.getElementById("nonPhysical")
      );
      const physicalOpt = {
         grid: {
          // right: '50%',
          // top: '5%'
        },
        xAxis: {
          type: "category",
          show: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        },
        yAxis: {
          show: false,
          type: "value",
        },
        series: [
          {
            data: [380, 191, 932, 234, 1290],
            type: 'line',
            smooth: true,
            stack: "Total",
                lineStyle: {
                  normal: {
                    width: 2,
                    borderWidth: 2,
                    color: "rgba(94, 148, 255, 1)",
                  },
                },
                areaStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                      offset:0,
                      color:"rgba(94, 148, 255, .5)"
                    },{
                      offset:0.8,
                      color:'rgba(94, 148, 255, 0)'
                    }
                  ],
                  false
                  ),
                  },
                },
                itemStyle:{
                  normal:{color:'rgba(94, 148, 255, 1)'}
                },
          }
        ]
      };
      physicalChart && physicalChart.setOption(physicalOpt);
      window.onresize = physicalOpt.resize;
    },
  },
};
</script>

<style scoped>
.real,
.tip3,
.tip2,
.realNum, .nonNum
{
  display: inline;
  position: absolute;
}
.physical {
  bottom: 90px;
  right:210px;
}
.realPos{
  right:210px;
  bottom:300px;
}
.liveNum {
  width: 174px;
  height: 380px;
  position: relative;
  display: inline-block;
  margin: 0px 0 0 40px;
}
.liveNum .tou {
  width: 147px;
  height: 255px;
  display: inline-block;
  background-position: 0px -54px;
  z-index: 99;
}
.liveNum .di {
  width: 110px;
  height: 101px;
  display: inline-block;
  background-position: -169px -79px;
  position: relative;
  top: -102px;
  left: 18px;
  z-index: 100;
  animation-name: dsp;
  animation-duration: 2.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes dsp {
  0% {
    opacity: 1;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.tip,.tip2,.tip3 {
  font-size:14px;
  color: rgba(160, 174, 192, 1);
}
.num,
.tip
{
  width: 100%;
  height: 30px;
  line-height: 30px;
  left: 0;
  text-align: center;
}

.num, .realNum, .nonNum{
  color: #fff;
  font-size: 28px;
}
.tip {
  bottom: 38px;
}
.tip2{
  bottom: 460px;
  right: 290px;
}
.tip3{
  bottom: 260px;
  right: 290px;
}
.realNum{
  bottom: 480px;
  right: 370px;
} 
.nonNum {
  bottom: 280px;
  right: 390px;
}
</style>
