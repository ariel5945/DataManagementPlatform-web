<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="淘宝直播" name="first">
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
                  <div class="img-con">
                    <img src="@/assets/img/kpi.png" alt="" />
                  </div>
                  <div class="item-content">
                    <p>直播</p>
                    <p>20</p>
                    <p>同比20%</p>
                  </div>
                </div>
                <div class="item">
                  <div class="img-con">
                    <img src="@/assets/img/kpi.png" alt="" />
                  </div>
                  <div class="item-content">
                    <p>直播</p>
                    <p>20</p>
                    <p>同比20%</p>
                  </div>
                </div>
                <div class="item">
                  <div class="img-con">
                    <img src="@/assets/img/kpi.png" alt="" />
                  </div>
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
                  <div class="img-con">
                    <img src="@/assets/img/kpi.png" alt="" />
                  </div>
                  <div class="item-content">
                    <p>直播</p>
                    <p>20</p>
                    <p>同比20%</p>
                  </div>
                </div>
                <div class="item">
                  <div class="img-con">
                    <img src="@/assets/img/kpi.png" alt="" />
                  </div>
                  <div class="item-content">
                    <p>直播</p>
                    <p>20</p>
                    <p>同比20%</p>
                  </div>
                </div>
                <div class="item">
                  <div class="img-con">
                    <img src="@/assets/img/kpi.png" alt="" />
                  </div>
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
            <div class="monthtrend">
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
            </div>
          </ItemWrap>
          <!-- top 20 -->
          <ItemWrap title="淘宝主播排行榜TOP20" :style="styleObj"
          class="itemwrap"
          >
            <div class="top-con">
              <el-tabs v-model="active">
                <el-tab-pane label="主播粉丝数" name="one">
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
                <el-tab-pane label="直播场次" name="two">
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
                  </table></el-tab-pane
                >
                <el-tab-pane label="观看人次" name="three">
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
                  </table></el-tab-pane
                >
                <el-tab-pane label="商品商家上架次数" name="four">
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
                  </table></el-tab-pane
                >
              </el-tabs>
            </div>
          </ItemWrap>
        </div>
      </el-tab-pane>
      <el-tab-pane label="抖音直播" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  name: "BigdataindustryWebPlatanalyse",
  data() {
    return {
      active: "one",
      activeName: "first",
      monthtab: "a",
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
    this.drawdaihuo();
  },
  methods: {
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
          axisLabel: {
            textStyle: {
              show: true,
              fontFamily: "微软雅黑",
              color: "#fff",
              fontSize: "12",
            },
          },
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
              fontSize: "18",
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
.itemwrap{
  margin-bottom: 20px;
}
.tota-con {
  margin: 20px 40px;
  height: 100%;
  .livekpi {
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
.item-content {
  color: #fff;
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
.top-con {
  padding-bottom: 60px;
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
