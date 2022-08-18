<template>
  <div class="main-con">
    <el-tabs v-model="activeName">
      <el-tab-pane label="综合概况" name="first">
        <!-- 筛选 -->

        <!-- 图表 -->
        <ItemWrap
          title="农产品当期网络零售额趋势变化"
          class="itemwrap"
        >
          <div class="charts-con">
            <div class="left" id="zhucharts"></div>
            <div class="right">
              <table align="center" width="500px" style="padding-left: 40px">
                <thead style="background: #1a202c; color: #fff">
                  <tr>
                    <th>时间</th>
                    <th>开展电商零售业务企业数(家)</th>
                    <th>占比(%)</th>
                  </tr>
                </thead>
                <tbody style="background: #1a202c; color: #fff">
                  <tr v-for="item in table" :key="item.id">
                    <td>{{ item.time }}</td>
                    <td>{{ item.hang }}</td>

                    <td>{{ item.zz }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ItemWrap>
      </el-tab-pane>
      <el-tab-pane label="交易平台" name="second">
        <ItemWrap
          title="重点交易平台产品当期网络零售额占比"
          class="itemwrap"
        >
          <div class="charts-con">
            <div class="left" id="ehcatsline"></div>
            <div class="right">
              <table align="center" width="500px" style="padding-left: 40px">
                <thead style="background: #1a202c; color: #fff">
                  <tr>
                    <th>时间</th>
                    <th>开展电商零售业务企业数(家)</th>
                    <th>占比(%)</th>
                  </tr>
                </thead>
                <tbody style="background: #1a202c; color: #fff">
                  <tr v-for="item in table" :key="item.id">
                    <td>{{ item.time }}</td>
                    <td>{{ item.hang }}</td>

                    <td>{{ item.zz }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ItemWrap>
      </el-tab-pane>
      <el-tab-pane label="商品大类" name="third">
        <div class="charts" id="fullzhu"></div>
        <div>
          <ItemWrap
            title="各农产品大类当期网络零售额分布"
            class="itemwrap"
          >
            <table align="center" width="1200px" style="padding-left: 40px">
              <thead style="background: #1a202c; color: #fff">
                <tr>
                  <th>时间</th>
                  <th>开展电商零售业务企业数(家)</th>
                  <th>占比(%)</th>
                </tr>
              </thead>
              <tbody style="background: #1a202c; color: #fff">
                <tr v-for="item in table" :key="item.id">
                  <td>{{ item.time }}</td>
                  <td>{{ item.hang }}</td>
                  <td>{{ item.zz }}</td>
                </tr>
              </tbody>
            </table>
          </ItemWrap>
        </div>
        <ItemWrap
          title="重点交易平台产品当期网络零售额占比"
          class="itemwrap"
        >
          <div
            class="charts-con"
            style="width: 100%; margin-top: 60px; margin: auto"
          >
            <div class="left" id="ehcatslines"></div>
            <div class="right">
              <table align="center" width="500px" style="padding-left: 40px">
                <thead style="background: #1a202c; color: #fff">
                  <tr>
                    <th>时间</th>
                    <th>开展电商零售业务企业数(家)</th>
                    <th>占比(%)</th>
                  </tr>
                </thead>
                <tbody style="background: #1a202c; color: #fff">
                  <tr v-for="item in table" :key="item.id">
                    <td>{{ item.time }}</td>
                    <td>{{ item.hang }}</td>

                    <td>{{ item.zz }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ItemWrap>
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">
        <ItemWrap title="企业榜"  class="itemwrap">
          <div class="tabsfl">
            <table align="center" width="1200px;padding-bottom:30px">
              <thead style="background: #1a202c; color: #fff">
                <tr>
                  <th>时间</th>
                  <th>网络零售额(万元)</th>
                  <th>同比(%)</th>
                </tr>
              </thead>
              <tbody style="background: #1a202c; color: #fff">
                <tr v-for="item in table" :key="item.id">
                  <td>{{ item.time }}</td>
                  <td>{{ item.sale }}</td>
                  <td>{{ item.tb }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ItemWrap>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      activeName: "first",
      table: [
        {
          time: "2022-1",
          hang: "22",
          zz: "22%",
        },
        {
          time: "2022-2",
          hang: "33",
          zz: "22%",
        },
        {
          time: "2022-3",
          hang: "44",
          zz: "22%",
        },
        {
          time: "2022-4",
          hang: "55",
          zz: "22%",
        },
      ],
    };
  },

  mounted() {
    this.drawzhu();
    this.hengdraws();
    this.drawfullwidth();
    this.tab3hengdraws();
  },

  methods: {
    tab3hengdraws() {
      var chartDom = document.getElementById("ehcatslines");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        // },
        legend: {
          // data: ["Evaporation", "Temperature"],
        },
        xAxis: [
          {
            type: "value",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            interval: 5,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "实物占比",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },

            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0], //柱体圆角
              color: new echarts.graphic.LinearGradient(
                //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                //通过修改前4个参数，可以实现不同的渐变方向
                /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                          每项为一个对象，包含offset和color两个参数
                        */
                2,
                2,
                0,
                0,
                [
                  {
                    //代表渐变色从正上方开始
                    offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                    color: "#3F95CE ",
                  }, //柱图渐变色
                  {
                    offset: 1, //指100%处的颜色
                    color: "#1EE7E7 ",
                  },
                ]
              ),
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    hengdraws() {
      var chartDom = document.getElementById("ehcatsline");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        // },
        legend: {
          data: ["Evaporation", "Temperature"],
        },
        xAxis: [
          {
            type: "value",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            interval: 5,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "实物占比",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },

            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0], //柱体圆角
              color: new echarts.graphic.LinearGradient(
                //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                //通过修改前4个参数，可以实现不同的渐变方向
                /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                          每项为一个对象，包含offset和color两个参数
                        */
                2,
                2,
                0,
                0,
                [
                  {
                    //代表渐变色从正上方开始
                    offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                    color: "#3F95CE ",
                  }, //柱图渐变色
                  {
                    offset: 1, //指100%处的颜色
                    color: "#1EE7E7 ",
                  },
                ]
              ),
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    drawzhu() {
      var chartDom = document.getElementById("zhucharts");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        // },
        legend: {
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Precipitation",

            interval: 50,
            axisLabel: {
              formatter: "{value} ",
            },
          },
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "实物占比",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0], //柱体圆角
              color: new echarts.graphic.LinearGradient(
                //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                //通过修改前4个参数，可以实现不同的渐变方向
                /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                          每项为一个对象，包含offset和color两个参数
                        */
                0,
                0,
                1,
                1,
                [
                  {
                    //代表渐变色从正上方开始
                    offset: 0, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                    color: "#1EE7E7 ",
                  }, //柱图渐变色
                  {
                    offset: 1, //指100%处的颜色
                    color: "#1EE7E7 ",
                  },
                ]
              ),
            },
          },

          {
            name: "非实物占比",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
            lineStyle: {
              color: "#ED5731 ",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    drawfullwidth() {
      var chartDom = document.getElementById("fullzhu");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          orient: "vertical",
          x: "center",
          y: "top",
          backgroundColor: "transparent",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            //x轴刻度线
            show: false,
          },
        },
        yAxis: {
          type: "value",
          name: "单位:万元",
          nameLocation: "end",
          nameGap: 35,
        },
        series: [
          {
            name: "网络零售额",
            itemStyle: {
              barBorderRadius: [2, 2, 2, 2], //柱体圆角
              color: new echarts.graphic.LinearGradient(
                //右下左上 四个方位。也就是从右边开始顺时针方向
                /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                          每项为一个对象，包含offset和color两个参数
                        */
                0,
                1,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "#3F95CE ",
                  },
                  {
                    offset: 1,
                    color: "#1DE7E7 ",
                  },
                ]
              ),
            },
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabsfl{
  padding-bottom: 30px;
}
.itemwrap{
  margin-bottom: 20px;
}
.main-con {
  padding: 20px;
  .charts-con {
    // width: 100vw;
    margin: auto;
    display: flex;
    padding-top: 30px;
    .left {
      width: 1000px;
      height: 600px;
    }
  }
}
.charts {
  width: 1200px;
  height: 600px;
  margin: auto;
}
tr {
  text-align: center;
}
tr:nth-child(even) {
  background: #122843;
}
tr:nth-child(odd) {
  background: #181e30;
  // background-image: linear-gradient(#e66465, #9198e5);
}
</style>
