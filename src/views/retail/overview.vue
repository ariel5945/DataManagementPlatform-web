<template>
  <div class="general-bg">
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="综合概况" name="first">
          <div class="echarts-box">
            <ItemWrap
              title="当期网络零售额变化趋势"
              style="width: 1550px; height: 630px"
            >
              <div class="line" id="ehcats-line"></div>
              <el-table 
                stripe 
                :data="tableData"
                height="485"
                style="width: 760px;position: absolute;display: inline-block;"
                >
                <el-table-column
                  prop="date"
                  label="时间"
                  width="253"
                ></el-table-column>
                <el-table-column
                  prop="name"
                  label="网络零售额（万元）"
                  width="253"
                >
                </el-table-column>
                <el-table-column prop="address" label="同比（%）">
                </el-table-column>
              </el-table>
            </ItemWrap>
          </div>
        </el-tab-pane>
        <!-- tab 2 -->
        <el-tab-pane label="商品类型" name="second">
          <div class="tabs-box">
            <div class="doubleline-box" id="doubleline"></div>
            <ItemWrap
              title="各商品类型当期网络零售额变化趋势"
              style="width: 1500px; height: 600px"
            >
            <el-table 
                stripe 
                :data="tableData"
                height="490"
                class="nonTable"
                >
                <el-table-column
                  prop="date"
                  label="时间"
                  width="253"
                ></el-table-column>
                <el-table-column
                  prop="name"
                  label="网络零售额（万元）"
                  width="253"
                >
                </el-table-column>
                <el-table-column prop="address" label="同比（%）">
                </el-table-column>
              </el-table>
            </ItemWrap>
          </div>
        </el-tab-pane>
        <el-tab-pane label="交易平台" name="third">
          <!-- 筛选 -->
          <!-- 图表 -->
          <div class="echarts-box">
            <ItemWrap
              title="重点交易平台当期网络零售额占比"
              style="width: 1550px; height: 600px"
            >
              <div class="ehcatsline" id="ehcatsline"  style=" height: 550px"></div>
              <div class="tables">
                <table align="center" width="700px">
                  <thead style="background: #1a202c; color: #fff">
                    <tr>
                      <th>时间</th>
                      <th>网络零售额(万元)</th>
                      <th>同比(%)</th>
                    </tr>
                  </thead>
                  <tbody style="background: #1a202c; color: #fff">
                    <tr v-for="(item,index) in table " :key="index">
                      <td>{{ item.time }}</td>
                      <td>{{ item.same }}</td>
                      <td>{{ item.sale }}</td>
                      <td>{{ item.tb }}</td>
                      <td>{{ item.zz }}</td>
                      <td>{{ item.real }}</td>
                      <td>{{ item.same }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ItemWrap>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品大类" name="fourth">
          <div class="shop-con">
            <div class="shopcharts" id="fullwidthecharts" style="width: 1550px; height: 630px"></div>
            <div class="table">
              <ItemWrap
                title="实物一级行业当期网络零售额"
                style="width: 1550px; height: 630px"
              >
                <table align="center" width="1400px">
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
              </ItemWrap>
            </div>
            <div class="echarts-box">
              <ItemWrap
                title="实物行业二级类目当期网络零售额"
                style="width: 1550px; height: 630px"
              >
                <div class="line-secondary" id="ehcatslines"></div>
                <div class="tables">
                  <table align="center" width="800px">
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
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="非实物大类" name="five">
          <div class="five-fl">
            <div class="echarts">
              <div class="cont" id="con"></div>
            </div>
            <div class="tables">
              <ItemWrap
                title="非实物一级行业当期网络零售额"
                style="width: 1550px; height: 400px"
              >
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
          </div>
        </el-tab-pane>
        <el-tab-pane label="排行榜" name="six">
          <div class="tables">
            <ItemWrap title="企业店铺榜" style="width: 1550px; height: 600px">
              <table align="center" width="1400px">
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
            </ItemWrap>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import ItemWrap from "@/components/itemWrap/index.vue";
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
         {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
         {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
         {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
        {
          date: "2022年6月",
          name: "263.5",
          address: "421.6",
        },
      ],
      table: [
        {
          time: "2022-1",
          hang: "4568",
          sale: "44511",
          tb: "44%",
          zz: "22%",
          real:'55%',
          same:"633.8",
        },
        {
          time: "2022-1",
          hang: "4568",
          sale: "44511",
          tb: "44%",
          zz: "22%",
          real:'55%',
          same:"633.8",
        },
        {
         time: "2022-1",
          hang: "4568",
          sale: "44511",
          tb: "44%",
          zz: "22%",
          real:'55%',
          same:"633.8",
        },
        {
          time: "2022-1",
          hang: "4568",
          sale: "44511",
          tb: "44%",
          zz: "22%",
          real:'55%',
          same:"633.8",
        },
        {
          time: "2022-1",
          hang: "4568",
          sale: "44511",
          tb: "44%",
          zz: "22%",
          real:'55%',
          same:"633.8",
        },
        {
          time: "2022-1",
          hang: "4568",
          sale: "44511",
          tb: "44%",
          zz: "22%",
          real:'55%',
          same:"633.8",
        },
      ],
    };
  },
  mounted() {
    this.draws();
    this.drawechart();
    this.draw();
    this.drawdoubleline();
    this.drawed4();
    this.drawfullwidth();
  },
  methods: {
    drawfullwidth() {
      var chartDom = document.getElementById("fullwidthecharts");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid:{
          // left:-126,
          // right:'1%'
        },
        legend: {
          orient: "vertical",
          x: "center",
          y: "top",
          backgroundColor: "transparent",
          textStyle:{
            color:'#fff'
          }
        },
        // 取消hover时的阴影
        axisPointer: {
          show: false,
          axisLabel:{
            color:'#fff',
            fontSize:14
          }
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
          splitLine: {
            show: true,
            lineStyle: {
              // 设置虚线
              type: [50, 50],
              dashOffset: 5,
              color: "rgba(255,255,255,.2)",
            },
          },
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
            data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 25,
          },
        ],
      };
      option && myChart.setOption(option);
    },
    drawechart() {
      var chartDom = document.getElementById("con");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        // 取消hover时的阴影
        axisPointer: {
          show: false,
        },
        legend: {
          orient: "vertical",
          x: "center",
          y: "top",
          backgroundColor: "transparent",
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "category",
          data: ["在线餐饮", "虚拟商品", "在线文娱", "在线旅游"],
          axisTick: {
            //x轴刻度线
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          name: "单位:万元",
          nameLocation: "end",
          nameGap: 35,
          color: "#fff",
          axisLabel: {
            color: "#fff",
            fontSize: 14,
            color: "#fff",
          },
        },
        series: [
          {
            name: "网络零售额",
            barWidth: 50,
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
            data: [120, 200, 150, 80],
            type: "bar",
          },
        ],
      };
      option && myChart.setOption(option);
    },
    drawed4() {
      var chartDom = document.getElementById("ehcatslines");
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
          textStyle:{
            color:'#fff'
          }
        },
        // 取消hover时的阴影
        axisPointer: {
          show: false,
          axisLabel:{
            color:'#fff',
            fontSize:14
          }
        },
        xAxis: {
          type: "value",
          nameLocation: "end",
          nameGap: 35,
          splitLine: {
            show: true,
            lineStyle: {
              // 设置虚线
              type: [50, 50],
              dashOffset: 5,
              color: "rgba(255,255,255,.2)",
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            //x轴刻度线
            show: false,
          },
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
            data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            barWidth: 25,
          },
        ],
      };
      option && myChart.setOption(option);
    },
    draws() {
      var chartDom = document.getElementById("ehcatsline");
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
          textStyle:{
            color:'#fff'
          }
        },
        // 取消hover时的阴影
        axisPointer: {
          show: false,
          axisLabel:{
            color:'#fff',
            fontSize:14
          }
        },
        xAxis: {
          type: "value",
          nameLocation: "end",
          nameGap: 35,
          splitLine: {
            show: true,
            lineStyle: {
              // 设置虚线
              type: [50, 50],
              dashOffset: 5,
              color: "rgba(255,255,255,.2)",
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            //x轴刻度线
            show: false,
          },
          splitLine: {
              show: false,
              lineStyle: {
                // 设置虚线
                type: [50, 50],
                dashOffset: 5,
                color: "rgba(255,255,255,.2)",
              },
            },
        },
        series: [
          {
            name: "网络零售额",
            top:'50',
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
        ],
      };
      option && myChart.setOption(option);
    },
    draw() {
      var chartDom = document.getElementById("ehcats-line");
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
        legend: {
          show:false
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
            name: "实物占比",
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
            name: "非实物占比",
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
    drawdoubleline() {
      var chartDom = document.getElementById("doubleline");
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: "",
          textStyle: {
            //---主标题内容样式
            color: "#fff",
          },
          left: "center",
          padding: [30, 0],
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: true,
          textStyle: {
            color: "rgba(230, 247, 255, 1)",
            fontSize: 16,
          },
        },
        grid: {},
        toolbox: {
          show: true,
        },
        calculable: true,
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
            splitLine: { show: false },
            splitArea: { show: false },
            axisTick: { show: true },
            axisLine: {
              lineStyle: {
                color: "#fff", //坐标值得具体的颜色
              },
            },
          },
        ],
        yAxis: [
          {
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FFFFFF",
              },
            },
            axisTick: { show: true },
            type: "value",
            axisLabel: {
              formatter: "{value} ",
            },
            splitLine: {
              show: true,
              lineStyle: {
                // 设置虚线
                type: [50, 50],
                dashOffset: 5,
                color: "rgba(255,255,255,.2)",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            name: "实物占比",
            data: [2, 1, 1, 1, 1, 1, 2, 1, 3],
            barGap: "2%",
            // barWidth: 80, //设置宽度
            lineStyle: {
              color: "#1EE7E7", //柱状图颜色
            },
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0],
              color: new echarts.graphic.LinearGradient(
                //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                //通过修改前4个参数，可以实现不同的渐变方向
                /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                                      每项为一个对象，包含offset和color两个参数
                                    */
                0,
                0,
                0,
                1,
                [
                  {
                    //代表渐变色从正上方开始
                    offset: 0,
                    color: "#1f6a70  ",
                  },
                  {
                    offset: 1,
                    color: "#1EE7E7 ",
                  },
                ]
              ),
            },
          },
          {
            type: "bar",
            name: "非实物占比",
            data: [5, 3, 4, 2, 1, 2, 1, 2, 3, 8, 9, 1],
            barGap: "0%",
            itemStyle: {
              color: "#1890FF", //柱状图颜色
            },
            itemStyle: {
              barBorderRadius: [2, 2, 0, 0],
              color: new echarts.graphic.LinearGradient(
                //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                //通过修改前4个参数，可以实现不同的渐变方向
                /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                                      每项为一个对象，包含offset和color两个参数
                                    */
                0,
                0,
                0,
                1,
                [
                  {
                    //代表渐变色从正上方开始
                    offset: 0,
                    color: "#1c4c7d  ",
                  },
                  {
                    offset: 1,
                    color: "#238bf1 ",
                  },
                ]
              ),
            },
          },
          {
            type: "line",
            name: "实物同比",
            xAxisIndex: 1,
            data: [2, 1, 1, 1, 1, 1, 2, 1, 3],
            lineStyle: {
              color: "yellow",
            },
            symbol: "circle",
          },
          {
            type: "line",
            name: "非实物同比",
            xAxisIndex: 1,
            data: [5, 3, 4, 2, 1, 2, 1, 2, 3, 8, 9, 1],
            lineStyle: {
              color: "#ED5731 ",
            },
            symbol: "circle",
          },
        ],
      };
      //添加一个新的刻度线 实现折线在柱状图的中间显示
      option.xAxis[1] = {
        type: "value",
        max: option.xAxis[0].data.length,
        show: false,
      };
      option.series[2].data = option.series[2].data.map((x, i) => [
        0.25 + i,
        x,
      ]);
      option.series[3].data = option.series[3].data.map((x, i) => [
        0.75 + i,
        x,
      ]);
      //0.25和0.75表示两个折线图只需要向左向右偏移0.5即可实现居中（根据横坐标去计算）
      myChart.setOption(option);
    },
  },
  components: { ItemWrap },
};
</script>

<style lang="scss" scoped>
.general-bg {
  overflow: hidden;
  width: 1550px;
}
.echarts {
  .cont {
    width: 1500px;
    height: 600px;
    position: relative;
    margin: 0 auto;
  }
}

.shopcharts {
  padding: 20px 0;
  width: 1550px;
  height: 400px;
}

.general-bg {
  // padding: 20px;
}

.echarts-box {
  position: relative;
  display: inline-block;
  margin-top: 40px;
  .line {
    flex: 1;
    width: 775px;
    height: 600px;
    display: inline-block;
    top: -20px;
  }
  .ehcatsline,
  .line-secondary {
    flex: 1;
    width: 775px;
    height: 600px;
    display: inline-block;
    top: -20px;
  }

  .line-secondary {
  }
  .tables {
    flex: 1;
    width: 750px;
    height: 560px;
    display: inline-block;
    position: relative;

    .tablesList {
      width: 100%;
    }
  }
}

.doubleline-box {
  width: 1550px;
  height: 700px;
  margin: auto;
}
// 商品类型
.nonTable{
  width: 1400px;
  margin:30px auto 0 auto;
}

// tr {
//   text-align: center;
//   height: 44px;
// }

// tr:nth-child(even) {
//   background: #122843;
// }

// tr:nth-child(odd) {
//   background: #181e30;
// }
// .echarts {
//   width: 1550px;
// }
// tr:nth-child(even) {
//   background: #122843;
// }
// tr:nth-child(odd) {
//   background: #181e30;
//   color: #fff;
//   background: url(../../assets/icon/box-2.png) no-repeat;
//   width: 750px;
//   height: 44px;
// }

.titleBg {
  background: url("../../assets/icon/box-2.png") no-repeat;
  color: #fff;
}
.el-table {
  display: inline-block;
  // position: absolute;
}
// 以下修改默认样式
::v-deep .el-table th {
  background: url("../../assets/icon/box-2.png") no-repeat;
  color: #fff;
}
::v-deep .el-table td,
::v-deep .el-table th {
  text-align: center;
}
::v-deep .el-table td,
::v-deep .el-table th.is-leaf {
  border-bottom: none;
}
::v-deep .el-table td,
::v-deep .el-table th {
  padding: 10px 0;
}

::v-deep .el-table__body {
  background-color: rgba(26, 32, 44, 1);
  color: #fff;
  font-size: 14px;
}
::v-deep .el-table th,
::v-deep .el-table tr {
  background-color: transparent;
}
::v-deep .el-table tbody tr:hover > td {
  background-color: transparent;
}

::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  // background-image: url('../../assets/icon/box-1.png');
  background-color: #233347;
}

::v-deep .el-table::before {
  //去除底部白线
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}


::v-deep .el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
// 修改tabe滚动条
::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  width: 10px;
  height: 56px;
  margin-left: 10px;
}
// 设置滚动条的背景色和圆角
::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb  {
  background: url('../../assets/icon/strip.png') no-repeat;
}
</style>
