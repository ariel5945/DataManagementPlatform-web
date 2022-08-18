<template>
  <div class="platbg">
    <div class="crumbs"></div>
    <div class="tabs"></div>
    <div class="echarts-con">
      <ItemWrap title="重点交易平台当期网络零售额占比" style="width: 1550px; height: 630px;">
      <div class="histogram">
        <div id="hist" class="hist" style="width: 750px; height: 600px"></div>
      </div>
      <div class="tables">
        <table align="center" style="width:750px; ">
          <thead style="background: #1a202c; color: #fff">
            <tr>
              <th>时间</th>
              <th>行业</th>
              <th>网络零售额(万元)</th>
              <th>同比(%)</th>
            </tr>
          </thead>
          <tbody style="background: #1a202c; color: #fff">
            <tr v-for="item in tableData" :key="item.id">
              <td>{{ item.rank }}</td>
              <td>{{ item.platform }}</td>
              <td>{{ item.int }}</td>
              <td>{{ item.proprt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </ItemWrap>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import ItemWrap from "@/components/itemWrap/index.vue";
export default {
    name: "BigdataindustryWebPlatformanalysis",
    data() {
        return {
            tableData: [
                {
                    rank: "1",
                    platform: "tb",
                    int: "333.2",
                    proprt: "40",
                },
                {
                    rank: "2",
                    platform: "tb",
                    int: "222.2",
                    proprt: "30",
                },
                {
                    rank: "3",
                    platform: "tb",
                    int: "100.2",
                    proprt: "20",
                },
                {
                    rank: "4",
                    platform: "tb",
                    int: "12.2",
                    proprt: "6",
                },
                {
                    rank: "5",
                    platform: "tb",
                    int: "30.2",
                    proprt: "3",
                },
                {
                    rank: "6",
                    platform: "tb",
                    int: "22.2",
                    proprt: "2",
                },
                {
                    rank: "7",
                    platform: "tb",
                    int: "22.2",
                    proprt: "2",
                },
                {
                    rank: "8",
                    platform: "tb",
                    int: "12.2",
                    proprt: "1",
                },
            ],
        };
    },
    mounted() {
        this.drawechartshist();
    },
    methods: {
        drawechartshist() {
            var chartDom = document.getElementById("hist");
            var myChart = echarts.init(chartDom);
            var option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                xAxis: [
                    {
                        name: "% ",
                        axisLine: {
                            //x轴坐标轴
                            show: true,
                        },
                        axisTick: {
                            //x轴刻度线
                            show: true,
                        },
                        axisLabel: {
                            show: true,
                            textStyle: { color: "#fff" },
                        },
                        type: "value",
                        min: 0,
                        max: 50,
                    },
                ],
                yAxis: [
                    {
                        axisLabel: {
                            textStyle: { color: "#fff" },
                        },
                        inverse: true,
                        data: ["tb", "pdd", "jd", "wph", "tcc", "xhs", "paypal"],
                        axisLine: {
                            show: true,
                        },
                        axisTick: { show: false, alignWidthLabel: false },
                        splitArea: { show: false },
                        type: "category",
                    },
                ],
                series: [
                    {
                        realtimeSort: true,
                        itemStyle: {
                            barBorderRadius: [2, 2, 2, 2],
                            color: new echarts.graphic.LinearGradient(
                            //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                            //通过修改前4个参数，可以实现不同的渐变方向
                            /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                                      每项为一个对象，包含offset和color两个参数
                                    */
                            1, 1, 0, 0, [
                                {
                                    //代表渐变色从正上方开始
                                    offset: 0,
                                    color: "#3F95CE ",
                                },
                                {
                                    offset: 1,
                                    color: "#1DE7E7 ",
                                },
                            ]),
                        },
                        name: "零售额占比(单位: %)",
                        type: "bar",
                        barWidth: "30%",
                        data: [10, 22, 30, 14, 10, 2, 12],
                    },
                ],
                // animationDuration: 0,
                // animationDurationUpdate: 3000,
                // animationEasing: "linear",
                // animationEasingUpdate: "linear",
            };
            option && myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },
    },
    components: { ItemWrap }
};
</script>

<style lang="scss" scoped>
.platbg {
  width: 100%;
  height: 100%;
  background-color: #1a202c;
  .crumbs {
    color: #fff;
  }
  .tabs {
    height: 125px;
    // background-color: antiquewhite;
    // background-color: #1a202c;
  }
  .echarts-con {
    // margin: 30px;
    // background: azure;
    // display: flex;
    width: 1550px;
    display: inline-block                                         ;
    .histogram {
      width: 750px;
      height: 600px;
      display: inline-block;
      .hist{
        display: inline-block;
      }
    }
    .tables {
      // margin-left: 60px;
      width: 700px;
      height: 600px;
      display: inline-block;
      // background-color: #1a202c;
    }
  }
}
tr {
  text-align: center;
}
tr:nth-child(even) {
  background: #122843;
}
tr:nth-child(odd) {
  background: #181e30;
}
</style>