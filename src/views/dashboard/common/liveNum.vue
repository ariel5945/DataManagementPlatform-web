<!-- 首页-概况-直播人数及零售 -->
<template>
  <div class="box">
    <ItemWrap title="直播从业人数" :style="styleObj">
      <div class="liveNum">
        <i class="icon tou"></i>
        <i class="icon di"></i>
        <div class="num real">{{ peopleNum }}</div>
        <div class="tip real">直播从业人数（人）</div>
      </div>
       <div class="screenings">
        <i class="icon tou"></i>
        <i class="icon di"></i>
        <div class="num real">{{ screeningsNum }}</div>
        <div class="tip real">直播场次（万次）</div>
      </div>
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
      screeningsNum:135,
      nonNum :2659.7,
      styleObj: {
        width: "360px",
        height: "462px",
        backgroundColor: "rgba(220,220,220,0.03)",
      },
    };
  },
  mounted() {
    // this.getRealChart();
    // this.getnonPhysical();
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
  right:260px;
}
.realPos{
  right:260px;
}
.liveNum ,.screenings{
  width: 174px;
  height: 380px;
  position: relative;
  display: inline-block;

}

.screenings{
  margin: 0px 0 0 12px;
}
.tou {
  width: 147px;
  height: 255px;
  display: inline-block;
  background-position: 0px -54px;
  z-index: 99;
}
.di {
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
