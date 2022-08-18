<template>
  <div classs="main-bg">
    <el-tabs style="padding-left:30px">
      <el-tab-pane label="企业数量">
        <!-- 企业数量 -->
        <div class="number">
          <!-- 筛选  -->
          <div class="filtrate"></div>

          <!-- 看板 -->
              <ItemWrap title="企业数量关键看板" :style="styleObj" class="itemwrap">
          <div class="board">
            <div class="flexbox">
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
            <div class="flexbox">
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
          <!-- 趋势 -->
          
          <div class="TrendChart">
            <div class="tabs" style="margin:20px">
              <el-tabs v-model="activeName">
                <el-tab-pane label="开展经营业务企业数" name="first">
                      <ItemWrap title="月度趋势" :style="styleObj" class="itemwrap">
                  <div class="fir-con">
                    <div class="echarts">
                      <div class="cont" id="con" ref="con"></div>
                    </div>
                    <div class="tables">
                      <table  align="center" width="500px" style="padding-left:40px">
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
                <el-tab-pane label="活跃企业数" name="second"
                  >活跃企业数</el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="企业列表"> 
      <div class="market-bg">
    <!-- search -->
<div class="search">
  <div class="title"><h3>重点监测平台店铺业一户式查询</h3></h3></div>
  <div class="search-input">
      <el-input
      class="inputwid"
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="searchinput">
  </el-input>
  <el-button type="primary">搜索</el-button>
  </div>
</div>
    <!-- filter -->
    <!-- container -->
     <ItemWrap title="为你找到xx家企业" :style="styleObj" class="itemwrap">
    <div class="container">
      <div class="content-con">
        <div class="left">
          <img src="@/assets/img/kpi.png" alt="" />
        </div>
        <div class="center">
          <h3>旗舰店</h3>
          <p>
            经营主体:xxxx
            <span> 店铺主营:xxxx</span>
            <span> 开店时间:xxxxxxxx</span>
          </p>
          <p>
            经营地址:xxxx
            <span>主营范围:xxxx</span>
            <span> 开店时间:xxxxxxxx</span>
          </p>

          <p>累计销售额:xxxx <span>单月销售额:xxxx</span></p>
        </div>
        <div class="right">
          <div class="imgright"><img src="@/assets/img/kpi.png" alt="" /></div>
          <div class="right-con"><h3>关注</h3></div>
        </div>
      </div>
    </div>
     </ItemWrap>
  </div>
  </el-tab-pane>
      <el-tab-pane label="企业地图">
            <el-container >
        <el-aside style="margin-top:15px">
            <el-table 
          :data='buildinglist'
            @row-click="skiptomap" fit highlight-current-row stripe border>
                <el-table-column prop="name" lable="name" align="center"></el-table-column>
            </el-table>
        </el-aside>
        <div style="width:900px;height:900px;margin:auto;"> <el-container id="container" style="height:600px;width:800px;"></el-container>
        </div>
    </el-container>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      buildinglist: [
        {
          name: "上海迪士尼",
          j: 121.671964,
          w: 31.148267,
          add: "北京市东城区王府井大街88号乐天银泰百货八层",
        },
        { name: "上海东方明珠", j: 121.506377, w: 31.245105 },
        { name: "上海环球港", j: 121.419129, w: 31.239446 },
        { name: "上海图书馆", j: 121.451117, w: 31.213841 },
        { name: "中山公园", j: 121.425511, w: 31.227831 },
        { name: "浦东国际机场", j: 121.81509, w: 31.157478 },
        { name: "虹桥机场", j: 121.334574, w: 31.200171 },
        { name: "中山公园", j: 121.425511, w: 31.227831 },
        { name: "浦东国际机场", j: 121.81509, w: 31.157478 },
        { name: "虹桥机场", j: 121.334574, w: 31.200171 },
      ],
      // 上海
      // jd: 121.487899486,
      // wd: 31.24916171,
      jd: 111.659482,
      wd: 34.395435,
      map: {},
      point: {},
      searchinput: "",
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
    this.drawechart();
    this.loadmap(this.jd, this.wd);
  },
  watch: {
    // activeName() {
    //   this.$nextTick(() => {
    //     this.$refs.activeNameRef[0].focus();
    //   });
    // },
  },
  methods: {
    loadmap(jd, wd) {
      var _this = this;
      this.map = new BMap.Map("container", { enableMapClick: false }); // 创建地图实例
      this.point = new BMap.Point(jd, wd); // 创建点坐标
      this.map.centerAndZoom(this.point, 13); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.buildinglist.forEach(function (item) {
        //创建多标注
        var point2 = new BMap.Point(item.j, item.w);
        var marker = new BMap.Marker(point2); // 创建标注
        _this.map.addOverlay(marker); // 将标注添加到地图中
      });
    },
    skiptomap(row, event, column) {
      this.point = new BMap.Point(row.j, row.w);
      this.map.centerAndZoom(this.point, 12);
      //       var opts = {
      //     width: 250, // 信息窗口宽度
      //     height: 100, // 信息窗口高度
      //     title: "Hello", // 信息窗口标题
      //   };
      //   var infoWindow = new BMapGL.InfoWindow("World", opts); // 创建信息窗口对象
      //   map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
      var infoWindow = new BMap.InfoWindow(row.name);

      this.map.openInfoWindow(infoWindow, this.point); //开启信息窗口
    },

    drawechart() {
      var myChart = echarts.init(document.getElementById("con"));
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
            name: "企业数",
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
            barWidth: 20,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style type="text/css">
body,
html,
#allmap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}
</style>
<style lang="scss" scoped>
.item-content {
  color: #fff;
}
.inputwid {
  width: 40%;
  margin: auto;
}
.market-bg {
  padding: 20px;
  .search {
    background: #0f2c40;
    height: 200px;
    margin-bottom: 30px;
    .search-input {
      width: 50%;
      margin: auto;
    }
    .title {
      text-align: center;
      padding-top: 50px;
      h3 {
        font-size: 30px;
        color: #b1cffc;
        font-weight: 500;
        text-shadow: 0px 0px 1px #0f5dd8;
      }
    }
    .search-input {
      display: flex;
    }
  }
  .container {
    .content-con {
      color: #fff;
      display: flex;
      .left {
        width: 50px;
        height: 50px;
        position: relative;
        margin: 60px 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .center {
        width: 60%;
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;

        .imgright {
          width: 20px;
          height: 20px;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .right-con {
          h3 {
            color: #fff;
          }
        }
      }
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
  // background-image: linear-gradient(#e66465, #9198e5);
}
.number {
  padding: 20px;
  // margin: 20px 40px;
  height: 100%;
}
.fir-con {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
}
.echarts {
  .cont {
    width: 700px;
    height: 600px;
    margin: auto;
  }
}
.board {
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 15px;
  .flexbox {
    width: 20%;
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
</style>