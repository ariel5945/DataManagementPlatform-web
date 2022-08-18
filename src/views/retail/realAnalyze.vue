<template>
  <div class="main-con">
    <el-tabs v-model="activeName" class="font">
      <el-tab-pane label="实物网络零售" name="first">
        <div class="echarts-cont">
          <ItemWrap
            title="当期网络零售额变化趋势"
            style="width: 1550px; height: 630px"
          >
            <!-- 柱状图 -->
            <div class="overlay">
              <div
                id="main"
                style="width: 770px; height: 550px; display: inline-block"
              ></div>
            </div>
            <!-- 表格 -->
            <div class="form">
              <table id="tab" align="center" width="700px">
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
          </ItemWrap>
        </div>
      </el-tab-pane>
      <el-tab-pane label="实物行业统计" name="second">
        <!-- 筛选 -->
        <!-- 柱状图 -->
        <!-- <div id="bargraph">   -->
        <div
          class="cont"
          id="cont"
          style="width:1500px; height: 600px; margin: auto"
        >
          <!-- </div> -->
        </div>
        <!-- 表格 -->
        <div class="form1">
          <ItemWrap title="实物一级行业当期网络零售额" style="width:1550px;height: 630px;">
          <table align="center" width="1400px">
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
          </ItemWrap>
        </div>
      </el-tab-pane>
      <el-tab-pane label="实物行业洞察" name="third">
        <div class="category1">
          <ItemWrap title="一级类目网络零售情况" style="width: 1550px; height: 630px;">
            <table align="center" width="1400px">
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
          </ItemWrap>
        </div>
        <!--  -->
        <div style="margin-top: 60px" class="category2">
          <ItemWrap title="二级类目网络零售情况" style="width: 1550px; height: 630px;">
          <table align="center" width="1400px;">
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
          </ItemWrap>
        </div>
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
    this.drawlay();
    this.drawechart();
  },
  methods: {
    drawechart() {
      var chartDom = document.getElementById("cont");
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
          textStyle:{
            color:'#fff'
          }
        },
         // 取消hover时的阴影
        axisPointer: {
          show: false,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "yy", "dd"],
          axisTick: {
            //x轴刻度线
            show: false,
          },
          axisLabel: {
            interval: 0,
            rotate: 45,
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
              barBorderRadius: [2, 2, 2, 2],
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
            barWidth: "20",
          },
        ],
      };
      option && myChart.setOption(option);
    },
    drawlay() {
      var chartDom = document.getElementById("main");
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
            name: "",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ",
            },
          },
          {
            type: "value",
            name: "",
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
            name: "",
            itemStyle: {
              barBorderRadius: [2, 2, 2, 2],
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
            data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 25,
          },
          {
            name: "",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [2, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23, 16.5, 12, 6.2],
            lineStyle: {
              color: "#ED5731 ",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.font {
  color: #fff;
}
.main-con {
  width: 1550px;
  position: relative;
}
.overlay {
  display: inline-block;
}
.echarts-cont {
  width: 100%;
  display: inline-block;
  // margin: 20px 160px;
  // display: flex;
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
.form {
  // margin-left: 60px;
  width: 750px;
  height: 560px;
  display: inline-block;
  position: relative;
}
</style>
