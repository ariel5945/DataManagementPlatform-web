<template>
  <div class="tota-con">
    <!-- kpi指标 -->
    <ItemWrap title="关键指标" :style="styleObj" class="itemwrap">
      <div class="livekpi">
        <div
          class="submenu"
          style="
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top: 15px;
            padding-bottom: 15px;
          "
        >
          <div class="item">
            <div class="img-con"><img src="@/assets/img/kpi.png" alt="" /></div>
            <div class="item-content">
              <p>直播</p>
              <p>20</p>
              <p>同比20%</p>
            </div>
          </div>
          <div class="item">
            <div class="img-con"><img src="@/assets/img/kpi.png" alt="" /></div>
            <div class="item-content">
              <p>直播</p>
              <p>20</p>
              <p>同比20%</p>
            </div>
          </div>
          <div class="item">
            <div class="img-con"><img src="@/assets/img/kpi.png" alt="" /></div>
            <div class="item-content">
              <p>直播</p>
              <p>20</p>
              <p>同比20%</p>
            </div>
          </div>
        </div>
        <div
          class="submenu"
          style="
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 15px;
          "
        >
          <div class="item">
            <div class="img-con"><img src="@/assets/img/kpi.png" alt="" /></div>
            <div class="item-content">
              <p>直播</p>
              <p>20</p>
              <p>同比20%</p>
            </div>
          </div>
          <div class="item">
            <div class="img-con"><img src="@/assets/img/kpi.png" alt="" /></div>
            <div class="item-content">
              <p>直播</p>
              <p>20</p>
              <p>同比20%</p>
            </div>
          </div>
          <div class="item">
            <div class="img-con"><img src="@/assets/img/kpi.png" alt="" /></div>
            <div class="item-content">
              <p>直播</p>
              <p>20</p>
              <p>同比20%</p>
            </div>
          </div>
        </div>
      </div>
    </ItemWrap>
    <!-- 月趋势 -->
    <ItemWrap title="月度趋势" :style="styleObj" class="itemwrap">
      <el-tabs v-model="monthtab">
        <el-tab-pane label="带货主播数" name="a">
          <div class="charts-box">
            <div
              class="left"
              id="daihuo"
              style="width: 800px; height: 600px"
            ></div>
            <div class="right">
              <table align="center" width="600">
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
          </div>
        </el-tab-pane>
        <el-tab-pane label="直播场次" name="b"></el-tab-pane>
        <el-tab-pane label="观看人数" name="c"></el-tab-pane>
        <el-tab-pane label="商品上架次数" name="d"></el-tab-pane>
        <el-tab-pane label="直播商品销售" name="e"></el-tab-pane>
        <el-tab-pane label="直播商品销售额" name="f"></el-tab-pane>
      </el-tabs>
    </ItemWrap>
    <!--平台分布  -->
    <ItemWrap title="平台分布" :style="styleObj" class="itemwrap">
      <div class="foundin">
        <el-tabs v-model="activeName">
          <el-tab-pane label="带货主播数" name="first">
            <div class="echarts-bg">
              <div class="DountChart" id="dount"></div>
              <div class="">
                <table align="center" width="100%">
                  <thead style="background: #1a202c; color: #fff">
                    <tr>
                      <th>时间</th>
                      <th>行业</th>
                      <th>网络零售额(万元)</th>
                      <th>同比(%)</th>
                      <th>占比(%)</th>
                    </tr>
                  </thead>
                  <tbody style="background: #1a202c; color: #fff">
                    <tr v-for="item in table" :key="item.id">
                      <td>{{ item.time }}</td>
                      <td>{{ item.hang }}</td>
                      <td>{{ item.sale }}</td>
                      <td>{{ item.tb }}</td>
                      <td>{{ item.zz }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="直播场次" name="second"></el-tab-pane>
          <el-tab-pane label="观看人数" name="third"></el-tab-pane>
          <el-tab-pane label="商品上架次数" name="fourth"></el-tab-pane>
          <el-tab-pane label="直播商品销量" name="five"></el-tab-pane>
          <el-tab-pane label="直播商品销量额" name="six"></el-tab-pane>
        </el-tabs>
      </div>
    </ItemWrap>
    <ItemWrap title="重点榜单" :style="styleObj" class="itemwrap">
      <div class="toplist">
        <el-tabs v-model="active">
          <el-tab-pane label="直播店铺带动销额 top 10" name="one">
            <!--tab table1 -->
            <div>
              <table align="center" width="100%">
                <thead style="background: #1a202c; color: #fff">
                  <tr>
                    <th>时间</th>
                    <th>行业</th>
                    <th>网络零售额(万元)</th>
                    <th>同比(%)</th>
                    <th>占比(%)</th>
                  </tr>
                </thead>
                <tbody style="background: #1a202c; color: #fff">
                  <tr v-for="item in table" :key="item.id">
                    <td>{{ item.time }}</td>
                    <td>{{ item.hang }}</td>
                    <td>{{ item.sale }}</td>
                    <td>{{ item.tb }}</td>
                    <td>{{ item.zz }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="直播企业带动销额 top 10" name="two">
            <!-- tab table2 -->
            <table align="center" width="100%">
              <thead style="background: #1a202c; color: #fff">
                <tr>
                  <th>时间</th>
                  <th>行业</th>
                  <th>网络零售额(万元)</th>
                  <th>同比(%)</th>
                  <th>占比(%)</th>
                </tr>
              </thead>
              <tbody style="background: #1a202c; color: #fff">
                <tr v-for="item in table" :key="item.id">
                  <td>{{ item.time }}</td>
                  <td>{{ item.hang }}</td>
                  <td>{{ item.sale }}</td>
                  <td>{{ item.tb }}</td>
                  <td>{{ item.zz }}</td>
                </tr>
              </tbody>
            </table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </ItemWrap>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "BigdataindustryWebTotalanalyse",
  data() {
    return {
      monthtab: "a",
      active: "one",
      activeName: "first",
      table: [
        {
          time: "2022-1",
          hang: "娱乐",
          sale: "445",
          tb: "44%",
          zz: "22%",
        },
        {
          time: "2022-2",
          hang: "餐饮",
          sale: "445",
          tb: "44%",
          zz: "22%",
        },
        {
          time: "2022-3",
          hang: "住宿",
          sale: "445",
          tb: "44%",
          zz: "22%",
        },
        {
          time: "2022-4",
          hang: "游玩",
          sale: "445",
          tb: "44%",
          zz: "22%",
        },
      ],
    };
  },
  mounted() {
    this.drawDountChart();
    this.drawdaihuo();
  },
  methods: {
    drawDountChart() {
      var myChart = echarts.init(document.getElementById("dount"));
      var option = {
        tooltip: {
          //提示框，可以在全局也可以在
          trigger: "item", //提示框的样式
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          color: "#000", //提示框的背景色
          textStyle: {
            //提示的字体样式
            color: "black",
          },
        },
        legend: {
          //图例
          orient: "vertical", //图例的布局，竖直    horizontal为水平
          x: "right", //图例显示在右边
          data: ["抖音直播", "淘宝直播"],
          textStyle: {
            //图例文字的样式
            color: "#333", //文字颜色
            fontSize: 12, //文字大小
          },
        },
        series: [
          {
            name: "带货主播数",
            type: "pie", //环形图的type和饼图相同
            radius: ["50%", "70%"], //饼图的半径，第一个为内半径，第二个为外半径
            avoidLabelOverlap: false,
            color: ["#D1FBEF", "#F9D858"],
            label: {
              normal: {
                //正常的样式
                show: true,
                position: "left",
              },
              // emphasis: {
              //   //选中时候的样式
              //   show: true,
              //   textStyle: {
              //     fontSize: "20",
              //     fontWeight: "bold",
              //   },
              // },
            }, //提示文字
            // labelLine: {
            //   normal: {
            //     show: false,
            //   },
            // },
            data: [
              { value: 335, name: "抖音直播" },
              { value: 310, name: "淘宝直播" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    drawdaihuo() {
      var chartDom = document.getElementById("daihuo");
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
          axisLabel: {
            textStyle: {
              show: true,
              fontFamily: "微软雅黑",
              color: "#fff",
              fontSize: "12",
            },
          },
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
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
          axisLabel: {
            textStyle: {
              show: true,
              fontFamily: "微软雅黑",
              color: "#fff",
              fontSize: "20",
            },
          },
        },
        series: [
          {
            name: "带货主播数",
            itemStyle: {
              barBorderRadius: [2, 2, 2, 2], //柱体圆角
              color: new echarts.graphic.LinearGradient(
                //右下左上 四个方位。也就是从右边开始顺时针方向
                /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                          每项为一个对象，包含offset和color两个参数
                        */
                0,
                0,
                1,
                1,
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
            data: [120, 200, 150, 80, 70, 110, 130, 30, 200, 300, 200, 300],
            type: "bar",
            barWidth: 20,
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
 

<style lang="scss" scoped>
.itemwrap {
  margin-bottom: 20px;
}
.tota-con {
  margin: 20px 40px;
  height: 100%;
  .livekpi {
    color: #fff;
    .item {
      display: flex;
      .img-con {
        width: 40px;
        height: 40px;
        position: relative;
        margin: 50px 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.echarts-bg {
  display: flex;
  justify-content: space-around;
  .DountChart {
    width: 500px;
    height: 500px;
  }
}
.charts-box {
  justify-content: space-around;

  display: flex;
  margin: auto;
  padding: 0 20px;
  .right {
    margin-right: 60px;
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
.toplist {
  padding-bottom: 50px;
}
</style>