<!-- 首页概况---店铺统计---仪表盘 -->
<template>
  <div class="box">
    <ItemWrap title="网络店铺统计" :style="styleObj">
      <div
        id="shopNum"
        class="shop shopL"
        style="width: 180px; height: 400px"
      ></div>
      <div
        id="company"
        class="shop shopR"
        style="width: 180px; height: 400px"
      ></div>
    </ItemWrap>
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      styleObj: {
        width: "400px",
        height: "462px",
        backgroundColor: "rgba(220,220,220,0.03)",
      },
      // num: 1,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getdata("shopNum", "company");
  },
  methods: {
    getdata(real, then) {
      var titleval = "网络零售店铺数（家）\n其中，实物店铺数";
      var data = 136;
      this.getCharts(real, titleval, data); //实物店铺
      titleval = "当年开展电商零售业\n务企业数（家）";
      data = 156;
      this.getCharts(then, titleval, data); //企业数
    },
    // 实物店铺数，、当年电商企业数
    /*idName id名称
     *titleval :title内容
     * data 数据值
     */
    getCharts(idName, titleval, data) {
      const shopNumChart = echarts.init(document.getElementById(idName));
      const shopNumOption = {
        tooltip: {
          trigger: "item",
        },
        title: {
          text: titleval,
          x: "center",
          y: "center",
          textStyle: {
            fontSize: 14,
            lineHeight: 22,
            fontWeight: "normal",
            color: "rgba(160, 174, 192, 1)",
          },
          top: 260, //文字距离顶部距离
        },
        series: [
          {
            name: "零售额TOP4品类",
            type: "pie",
            silent: true,
            startAngle: 80, // 环图起始位置：正下发
            center: ["50%", "35%"], // 圆环中心相对于容器位置
            radius: ["60%", "50%"], // 圆环内径外径
            avoidLabelOverlap: false,
            hoverAnimation: false, //取消鼠标划入放大
            data: [
              {
                value: data,
                name: titleval,
                label: {
                  normal: {
                    formatter: function (params) {
                      console.log('value:',params.value)
                      return params.value;
                    },
                    show: true,
                    position: "center",
                    textStyle: {
                      fontSize: 32,
                      color: "#fff",
                    },
                  },
                },
                itemStyle: {
                  // 圆环颜色
                  color: {
                    x: 1,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(71, 228, 229, .5)",
                      },
                      {
                        offset: 1,
                        color: "rgba(43,142,243,.8)",
                      },
                    ],
                  },
                },
                labelLine: {
                  show: false,
                },
              },
              {
                //剩余
                value: "140",
                label: {
                  normal: {
                    show: false,
                  },
                  itemStyle: {
                    // 圆环颜色
                    color: {
                      x: 1,
                      y: 0,
                      x2: 1,
                      y2: 1,
                      type: "linear",
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: "rgba(43,142,243, .5)",
                        },
                        {
                          offset: 1,
                          color: "rgba(43,142,243,.8)",
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },
        ],
      };
      shopNumChart && shopNumChart.setOption(shopNumOption);
      window.onresize = shopNumOption.resize;
    },
  },
};
</script>
<style scoped>
.shop {
  display: inline;
}
.shopR {
  float: right;
}
.shopL {
  float: left;
}
.shop-tip {
  width: 180px;
  height: 50px;
  display: inline-block;
  position: relative;
  z-index: 9999;
  text-align: center;
  margin-left: 87px;
  color: #a0aec0;
}
.shop-tip .num {
  color: RGBA(65, 209, 232, 1);
}
</style>
