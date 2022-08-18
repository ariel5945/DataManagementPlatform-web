<template>
  <div class="content">
    <div class="crumb"></div>
    <div class="tabs"></div>
    <div class="echarts">
      <div class="cont" id="con"></div>
    </div>
    <div class="tables">
      <ItemWrap
        title="非实物一级行业当期网络零售额"
        style="width: 1550px; height: 420px"
      >
        <el-table :data="tableData" height="300" stripe class="nonTable">
          <el-table-column prop="date" label="时间" width="180"></el-table-column>
          <el-table-column prop="industry" label="行业" width="180"></el-table-column>
          <el-table-column prop="sales" label="网络销售额（万元）"> </el-table-column>
          <el-table-column prop="same" label="同比（%）"> </el-table-column>
          <el-table-column prop="proportion" label="占比（%）"> </el-table-column>
        </el-table>
      </ItemWrap>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "BigdataindustryWebNoPhysicalanalysis",
  data() {
    return {
      tableData:[
       {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
        {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
        {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
        {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
        {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
        {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
        {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
        {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
        {
          date: "2022年6月",
          industry: "在线餐饮",
          sales: "545.6",
          same:"633.8",
          proportion:"53.6"
        },
      ],
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
    this.drawechart();
  },
  methods: {
    drawechart() {
      var chartDom = document.getElementById("con");
      var myChart = echarts.init(chartDom);
      var option = {
        // 取消hover时的阴影
        axisPointer: {
          show: false,
        },
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
        },
        yAxis: {
          type: "value",
          name: "单位:万元",
        },
        series: [
          {
            name: "网络零售额",
            barWidth: 50,
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
            data: [120, 200, 150, 80],
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
.content {
  height: 100%;
  background: #1a202c;
  .echarts {
    .cont {
      width: 1550px;
      height: 400px;
      margin: auto;
    }
  }
}
// 修改的样式
.nonTable{
  width: 1400px;
  margin:30px auto 0 auto;
}
// 修改默认样式
::v-deep .el-table::before {
  //去除底部白线
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}

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
::v-deep .el-table tbody tr:hover > td:first-child {
  background-image: url('../../assets/icon/arrow.png');
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  margin-top: 50px;
}

::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: #233347;
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
