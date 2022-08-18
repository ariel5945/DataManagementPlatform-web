<!-- 首页概况第二屏 -->
<template>
  <div class="box">
    <ItemWrap title="累计零售额占比" :style="styleObj">
      <div id="cakeBox" style="width: 358px; height: 317px"></div>
    </ItemWrap>
  </div>
</template>

<script>
import * as echarts from "echarts";
import Highcharts from "highcharts";
import Highcharts3d from "highcharts/highcharts-3d";
Highcharts3d(Highcharts);

export default {
  props: {
    dataList: {
      type: Array,
      default: () => [
        {
          name: "日用品",
          y: 10254,
          h: 0,
          bfb: 0,
        },
        {
          name: "家具",
          y: 6894,
          h: 0,
          bfb: 0,
        },
        {
          name: "粮食",
          y: 7667,
          h: 0,
          bfb: 0,
        },
        {
          name: "服装鞋帽",
          y: 4287,
          h: 0,
          bfb: 0,
        },
        {
          name: "家具",
          y: 8687,
          h: 0,
          bfb: 0,
        },
      ],
    },
  },
  watch: {
    dataList() {
      this.$nextTick(() => {
        this.getcakeBox();
      });
    },
  },
  data() {
    return {
      styleObj: {
        width: "358px",
        height: "396px",
      },
    };
  },
  created() {},
  mounted() {
    this.getcakeBox();
    window.addEventListener("resize", this.getcakeBox);
  },
  destroyed() {
    window.removeEventListener("resize", this.getcakeBox);
  },
  methods: {
    getcakeBox() {
      let highcharts = require("highcharts");
      let quantity = 0; // 总数
      this.dataList.forEach((item) => {
        quantity += item.y;
      });
      this.dataList.forEach((item) => {
        item.bfb = parseInt((item.y / quantity) * 100);
        item.h = item.bfb * 1.5 >= 70 ? 70 : item.bfb * 1.5;
      });
      // 修改3d饼图绘制过程
      var each = highcharts.each,
        round = Math.round,
        cos = Math.cos,
        sin = Math.sin,
        deg2rad = Math.deg2rad;
      highcharts.wrap(
        highcharts.seriesTypes.pie.prototype,
        "translate",
        function (proceed) {
          proceed.apply(this, [].slice.call(arguments, 1));
          // Do not do this if the chart is not 3D
          if (!this.chart.is3d()) {
            return;
          }
          var series = this,
            chart = series.chart,
            options = chart.options,
            seriesOptions = series.options,
            depth = seriesOptions.depth || 0,
            options3d = options.chart.options3d,
            alpha = options3d.alpha,
            beta = options3d.beta,
            z = seriesOptions.stacking
              ? (seriesOptions.stack || 0) * depth
              : series._i * depth;
          z += depth / 2;
          if (seriesOptions.grouping !== false) {
            z = 0;
          }
          each(series.data, function (point) {
            var shapeArgs = point.shapeArgs,
              angle;
            point.shapeType = "arc3d";
            var ran = point.options.h;
            shapeArgs.z = z;
            shapeArgs.depth = depth * 0.75 + ran;
            shapeArgs.alpha = alpha;
            shapeArgs.beta = beta;
            shapeArgs.center = series.center;
            shapeArgs.ran = ran;
            angle = (shapeArgs.end + shapeArgs.start) / 2;
            point.slicedTranslation = {
              translateX: round(
                cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              ),
              translateY: round(
                sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              ),
            };
          });
        }
      );
      (function (H) {
        H.wrap(
          highcharts.SVGRenderer.prototype,
          "arc3dPath",
          function (proceed) {
            // Run original proceed method
            var ret = proceed.apply(this, [].slice.call(arguments, 1));
            ret.zTop = (ret.zOut + 0.5) / 100;
            return ret;
          }
        );
      })(highcharts);
      (function (H) {
        Highcharts.wrap(
          Highcharts.seriesTypes.pie.prototype,
          "translate",
          function (proceed) {
            proceed.apply(this, [].slice.call(arguments, 1));
            if (!this.chart.is3d()) {
              return;
            }
            this.data.forEach((d) => {
              // 修改 3
              if (d.options.depth && typeof d.options.depth === "number") {
                d.shapeArgs.depth = d.shapeArgs.depth * 0.75 + d.options.depth;
              }
            });
          }
        );
        var cos = Math.cos,
          sin = Math.sin,
          PI = Math.PI,
          dFactor = (4 * (Math.sqrt(2) - 1)) / 3 / (PI / 2);
        function curveTo(cx, cy, rx, ry, start, end, dx, dy) {
          var result = [],
            arcAngle = end - start;
          if (end > start && end - start > Math.PI / 2 + 0.0001) {
            result = result.concat(
              curveTo(cx, cy, rx, ry, start, start + Math.PI / 2, dx, dy)
            );
            result = result.concat(
              curveTo(cx, cy, rx, ry, start + Math.PI / 2, end, dx, dy)
            );
            return result;
          }
          if (end < start && start - end > Math.PI / 2 + 0.0001) {
            result = result.concat(
              curveTo(cx, cy, rx, ry, start, start - Math.PI / 2, dx, dy)
            );
            result = result.concat(
              curveTo(cx, cy, rx, ry, start - Math.PI / 2, end, dx, dy)
            );
            return result;
          }
          return [
            [
              "C",
              cx +
                rx * Math.cos(start) -
                rx * dFactor * arcAngle * Math.sin(start) +
                dx,
              cy +
                ry * Math.sin(start) +
                ry * dFactor * arcAngle * Math.cos(start) +
                dy,
              cx +
                rx * Math.cos(end) +
                rx * dFactor * arcAngle * Math.sin(end) +
                dx,
              cy +
                ry * Math.sin(end) -
                ry * dFactor * arcAngle * Math.cos(end) +
                dy,
              cx + rx * Math.cos(end) + dx,
              cy + ry * Math.sin(end) + dy,
            ],
          ];
        }
        Highcharts.SVGRenderer.prototype.arc3dPath = function (shapeArgs) {
          let cx = shapeArgs.x || 0, // x coordinate of the center
            cy = shapeArgs.y || 0, // y coordinate of the center
            start = shapeArgs.start || 0, // start angle
            end = (shapeArgs.end || 0) - 0.00001, // end angle
            r = shapeArgs.r || 0, // radius
            ir = shapeArgs.innerR || 0, // inner radius
            d = shapeArgs.depth || 0, // depth
            alpha = shapeArgs.alpha || 0, // alpha rotation of the chart
            beta = shapeArgs.beta || 0; // beta rotation of the chart
          // Derived Variables
          const cs = Math.cos(start), // cosinus of the start angle
            ss = Math.sin(start), // sinus of the start angle
            ce = Math.cos(end), // cosinus of the end angle
            se = Math.sin(end), // sinus of the end angle
            rx = r * Math.cos(beta), // x-radius
            ry = r * Math.cos(alpha), // y-radius
            irx = ir * Math.cos(beta), // x-radius (inner)
            iry = ir * Math.cos(alpha), // y-radius (inner)
            dx = d * Math.sin(beta), // distance between top and bottom in x
            dy = d * Math.sin(alpha); // distance between top and bottom in y
          // 修改 1
          cy -= dy;
          // TOP
          let top = [["M", cx + rx * cs, cy + ry * ss]];
          top = top.concat(curveTo(cx, cy, rx, ry, start, end, 0, 0));
          top.push(["L", cx + irx * ce, cy + iry * se]);
          top = top.concat(curveTo(cx, cy, irx, iry, end, start, 0, 0));
          top.push(["Z"]);
          // OUTSIDE
          const b = beta > 0 ? Math.PI / 2 : 0,
            a = alpha > 0 ? 0 : Math.PI / 2;
          const start2 = start > -b ? start : end > -b ? -b : start,
            end2 = end < PI - a ? end : start < PI - a ? PI - a : end,
            midEnd = 2 * PI - a;
          let out = [["M", cx + rx * cos(start2), cy + ry * sin(start2)]];
          out = out.concat(curveTo(cx, cy, rx, ry, start2, end2, 0, 0));
          // When shape is wide, it can cross both, (c) and (d) edges, when using
          // startAngle
          if (end > midEnd && start < midEnd) {
            // Go to outer side
            out.push(["L", cx + rx * cos(end2) + dx, cy + ry * sin(end2) + dy]);
            // Curve to the right edge of the slice (d)
            out = out.concat(curveTo(cx, cy, rx, ry, end2, midEnd, dx, dy));
            // Go to the inner side
            out.push(["L", cx + rx * cos(midEnd), cy + ry * sin(midEnd)]);
            // Curve to the true end of the slice
            out = out.concat(curveTo(cx, cy, rx, ry, midEnd, end, 0, 0));
            // Go to the outer side
            out.push(["L", cx + rx * cos(end) + dx, cy + ry * sin(end) + dy]);
            // Go back to middle (d)
            out = out.concat(curveTo(cx, cy, rx, ry, end, midEnd, dx, dy));
            out.push(["L", cx + rx * cos(midEnd), cy + ry * sin(midEnd)]);
            // Go back to the left edge
            out = out.concat(curveTo(cx, cy, rx, ry, midEnd, end2, 0, 0));
            // But shape can cross also only (c) edge:
          } else if (end > PI - a && start < PI - a) {
            // Go to outer side
            out.push([
              "L",
              cx + rx * Math.cos(end2) + dx,
              cy + ry * Math.sin(end2) + dy,
            ]);
            // Curve to the true end of the slice
            out = out.concat(curveTo(cx, cy, rx, ry, end2, end, dx, dy));
            // Go to the inner side
            out.push(["L", cx + rx * Math.cos(end), cy + ry * Math.sin(end)]);
            // Go back to the artifical end2
            out = out.concat(curveTo(cx, cy, rx, ry, end, end2, 0, 0));
          }
          out.push([
            "L",
            cx + rx * Math.cos(end2) + dx,
            cy + ry * Math.sin(end2) + dy,
          ]);
          out = out.concat(curveTo(cx, cy, rx, ry, end2, start2, dx, dy));
          out.push(["Z"]);
          // INSIDE
          let inn = [["M", cx + irx * cs, cy + iry * ss]];
          inn = inn.concat(curveTo(cx, cy, irx, iry, start, end, 0, 0));
          inn.push([
            "L",
            cx + irx * Math.cos(end) + dx,
            cy + iry * Math.sin(end) + dy,
          ]);
          inn = inn.concat(curveTo(cx, cy, irx, iry, end, start, dx, dy));
          inn.push(["Z"]);
          // SIDES
          const side1 = [
            ["M", cx + rx * cs, cy + ry * ss],
            ["L", cx + rx * cs + dx, cy + ry * ss + dy],
            ["L", cx + irx * cs + dx, cy + iry * ss + dy],
            ["L", cx + irx * cs, cy + iry * ss],
            ["Z"],
          ];
          const side2 = [
            ["M", cx + rx * ce, cy + ry * se],
            ["L", cx + rx * ce + dx, cy + ry * se + dy],
            ["L", cx + irx * ce + dx, cy + iry * se + dy],
            ["L", cx + irx * ce, cy + iry * se],
            ["Z"],
          ];
          // correction for changed position of vanishing point caused by alpha
          // and beta rotations
          let angleCorr = Math.atan2(dy, -dx),
            angleEnd = Math.abs(end + angleCorr),
            angleStart = Math.abs(start + angleCorr),
            angleMid = Math.abs((start + end) / 2 + angleCorr);
          /**
           * set to 0-PI range
           * @private
           */
          function toZeroPIRange(angle) {
            angle = angle % (2 * Math.PI);
            if (angle > Math.PI) {
              angle = 2 * Math.PI - angle;
            }
            return angle;
          }
          angleEnd = toZeroPIRange(angleEnd);
          angleStart = toZeroPIRange(angleStart);
          angleMid = toZeroPIRange(angleMid);
          // *1e5 is to compensate pInt in zIndexSetter
          const incPrecision = 1e5,
            a1 = angleMid * incPrecision,
            a2 = angleStart * incPrecision,
            a3 = angleEnd * incPrecision;
          let result = {
            top: top,
            // max angle is PI, so this is always higher
            zTop: Math.PI * incPrecision + 1,
            out: out,
            zOut: Math.max(a1, a2, a3),
            inn: inn,
            zInn: Math.max(a1, a2, a3),
            side1: side1,
            // to keep below zOut and zInn in case of same values
            zSide1: a3 * 0.99,
            side2: side2,
            zSide2: a2 * 0.99,
          };
          // 修改 2
          result.zTop = (result.zOut + 0.5) / 100;
          return result;
        };
      })(Highcharts);
      highcharts.chart("cakeBox", {
        chart: {
          animation: false,
          backgroundColor: "none",
          type: "pie", //饼图
          options3d: {
            enabled: true, //使用3d功能
            alpha: 50, //延y轴向内的倾斜角度
            beta: 0,
            depath: 50,
          },
          events: {
            load: function () {
              var each = highcharts.each,
                points = this.series[0].points;
              each(points, function (p, i) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran,
                });
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran,
                });
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran,
                });
              });
            },
          },
        },
        title: {
          text: "",
        },
        credits: {
          enabled: false, // 禁用版权信息
        },
        legend: {
          enabled: true, // 关闭图例
          align: "center", //水平方向位置
          verticalAlign: "bottom", //垂直方向位置
          // selectedMode: false,
          x: 20,
          y: 0,
          symbolWidth: 10,
          symbolHeight: 10,
          symbolRadius: "50%", // 修改成圆
          itemMarginBottom: 8,
          useHTML: true,
          labelFormatter: function () {
            return this.name;
          },
          itemStyle: {
            color: "#f4f4f6",
            fontSize: 12,
            cursor: "default",
          },
          itemHoverStyle: {
            cursor: "default",
            color: "#fff",
          },
        },
        plotOptions: {
          events: {
            legendItemClick: function () {
              return true;
            },
          },
          pie: {
            allowPointSelect: true, // 禁用点击
            cursor: "pointer",
            depth: 15,
            showInLegend: true,
            size: "70%", // 外圈直径大小
            innerSize: 90, // 内圈直径大小
            center: ["50%", "80%"],
            colors: [
              "rgb(235,147,39)",
              "rgb(234,219,54)",
              "rgb(12,214,137)",
              "rgb(25,234,219)",
              "rgb(13,145,239)",
              "rgb(167,67,234)",
            ],
            dataLabels: {
              useHTML: true,
              enabled: false, //是否显示饼图的线形tip
              distance: 5,
              borderColor: "#007acc",
              align: "center",
              position: "right",
              format: "{point.bfb}%",
              color: "#ffffff",
              style: {
                textOutline: "none",
                fontSize: 13,
              },
            },
          },
        },
        series: [
          {
            type: "pie",
            name: "数量",
            data: this.dataList,
          },
        ],
      });
      highcharts.addEvent(highcharts, "redraw", function () {
        var each = Highcharts.each,
          points = highcharts.series[0].points;
        each(points, function (p, i) {
          p.graphic.attr({
            translateY: -p.shapeArgs.ran,
          });
          p.graphic.side1.attr({
            translateY: -p.shapeArgs.ran,
          });
          p.graphic.side2.attr({
            translateY: -p.shapeArgs.ran,
          });
        });
      });
    },
  },
};
</script>

<style scoped>
.right-icon {
  position: relative;
  display: inline-block;
  bottom: 70px;
  left: 197px;
}
</style>
