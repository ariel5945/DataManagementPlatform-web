<template>
  <div class="box">
    <ItemWrap title="网络零售TOP4品类" :style="styleObj">
      <div id="top1" style="width: 358px; height: 317px"></div>
    </ItemWrap>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      styleObj: {
        width: "358px",
        height: "396px",
      },
      titleData:[
        {
          name:'日用品'
        },
        {
          name:'家具'
        }
      ],
      titleData2:[
        {
          name:'粮食、食品'
        },
        {
          name:'日用品-日用杂品'
        }
      ]
    };
  },
  mounted() {
    this.top1();
  },
  methods: {
    top1() {
      var titleArr=[];
      const top1Chart = echarts.init(document.getElementById("top1"));
      const top1Optipn = {
        tooltip: {
         trigger: 'item',
        },
        title:titleArr,
        animation: true,
        series:[
          {
            name: '零售额TOP4品类',
            type: 'pie',
            silent: true,
            startAngle: 80,                        // 环图起始位置：正下发
            center: ['25%', '20%'],                 // 圆环中心相对于容器位置
            radius: ['25%', '35%'],                 // 圆环内径外径
            avoidLabelOverlap: false,
            hoverAnimation: false,//取消鼠标划入放大
            data:[{
              name: '',
              value: '55',
              label: {
                normal: {
                  show:true,
                  position: 'center',
                  fontSize: 14,
                  color: '#7788ff',
                  fontWeight: 'bolder',
                  formatter: 'No.1',
                  textBorderColor:'#B1CFFC',
                  textBorderWidth:5,
                }
              },
              itemStyle:{
                 "color": {
                    "x": 1,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                    "offset": 0,
                    "color": "rgba(24, 144, 255, .35)"
                    },{
                    "offset": 1,
                    "color": "rgba(24, 144, 255, 1)"
                  }]
                }
              },
              labelLine:{
                show:false
              }
            },{
              value:'40',
              label:{
                normal:{
                  show:false,
                },
                itemStyle:{
                  "color": {
                    "x": 1,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                      "offset": 0,
                      "color": "#1DC3C6"
                      },{
                      "offset": 1,
                      "color": "#1DC3C6"
                  }]
                }
                }
              }
            }]
          },{
            name: '零售额TOP4品类',
            type: 'pie',
            startAngle: 100,                        // 环图起始位置：正下发
            center: ['75%', '20%'],                 // 圆环中心相对于容器位置
            radius: ['25%', '35%'],                 // 圆环内径外径
            avoidLabelOverlap: false,
            hoverAnimation: false,//取消鼠标划入放大
             data:[{
              name: '',
              value: '55',
              label: {
                normal: {
                  show:true,
                  position: 'center',
                  fontSize: 14,
                  color: '#7788ff',
                  fontWeight: 'bolder',
                  formatter: 'No.2',
                  textBorderColor:'#B1CFFC',
                  textBorderWidth:5,
                }
              },
              itemStyle:{
                 "color": {
                    "x": 1,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                    "offset": 0,
                    "color": "rgba(24, 144, 255, .35)"
                    },{
                    "offset": 1,
                    "color": "rgba(24, 144, 255, 1)"
                  }]
                }
              },
              labelLine:{
                show:false
              }
            },{
              value:'40',
              label:{
                normal:{
                  show:false,
                },
                itemStyle:{
                  "color": {
                    "x": 1,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                    "offset": 0,
                    "color": "rgba(29, 195, 198, .35)"
                    },{
                    "offset": 1,
                    "color": "rgba(29, 195, 198, 1)"
                  }]
                }
                }
              }
            }]
          },
          {
            name: '零售额TOP4品类',
            type: 'pie',
            startAngle: 100,                        // 环图起始位置：正下发
            center: ['25%', '70%'],                 // 圆环中心相对于容器位置
            radius: ['25%', '35%'],                 // 圆环内径外径
            avoidLabelOverlap: false,
            hoverAnimation: false,//取消鼠标划入放大
             data:[{
              name: '',
              value: '60',
              label: {
                normal: {
                  show:true,
                  position: 'center',
                  fontSize: 14,
                  color: '#7788ff',
                  fontWeight: 'bolder',
                  formatter: 'No.3',
                  textBorderColor:'#B1CFFC',
                  textBorderWidth:5,
                }
              },
              itemStyle:{
                "color": {
                    "x": 1,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                    "offset": 0,
                    "color": "rgba(24, 144, 255, .35)"
                    },{
                    "offset": 1,
                    "color": "rgba(24, 144, 255, 1)"
                  }]
                }
              },
              labelLine:{
                show:false
              }
            },{
              value:'40',
              label:{
                normal:{
                  show:false,
                },
                itemStyle:{
                  "color": {
                    "x": 1,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                    "offset": 0,
                    "color": "rgba(29, 195, 198, .35)"
                    },{
                    "offset": 1,
                    "color": "rgba(29, 195, 198, 1)"
                  }]
                }
                }
              }
            }]
          },
          {
            name: '零售额TOP4品类',
            type: 'pie',
            startAngle: 100,                        // 环图起始位置：正下发
            center: ['75%', '70%'],                 // 圆环中心相对于容器位置
            radius: ['25%', '35%'],                 // 圆环内径外径
            avoidLabelOverlap: false,
            hoverAnimation: false,//取消鼠标划入放大
             data:[{
              name: '',
              value: '55',
              label: {
                normal: {
                  show:true,
                  position: 'center',
                  fontSize: 14,
                  color: '#7788ff',
                  fontWeight: 'bolder',
                  formatter: 'No.4',
                  textBorderColor:'#B1CFFC',
                  textBorderWidth:5,
                }
              },
              itemStyle:{
                 "color": {
                    "x": 1,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                    "offset": 0,
                    "color": "rgba(24, 144, 255, .35)"
                    },{
                    "offset": 1,
                    "color": "rgba(24, 144, 255, 1)"
                  }]
                }
              },
              labelLine:{
                show:false
              }
            },{
              value:'40',
              label:{
                normal:{
                  show:false,
                },
                itemStyle:{
                  "color": {
                    "x": 1,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                    "offset": 0,
                    "color": "rgba(29, 195, 198, .35)"
                    },{
                    "offset": 1,
                    "color": "rgba(29, 195, 198, 1)"
                  }]
                }
                }
              }
            }]
          },
        ]
      };
      this.titleData.forEach(function(item,index){
        titleArr.push({
          text:item.name,
          show: true,
          textAlign:'center',
          textVerticalAlign:'center',
          left:index * 190 + 80,
          top:'140',
          textStyle:{
            color:'#fff',
            fontSize:14,
          }
        })
      });
      this.titleData2.forEach(function(item,index){
        titleArr.push({
          text:item.name,
          show: true,
          textAlign:'center',
          textVerticalAlign:'center',
          left:index * 190 + 80,
          top:'290',
          textStyle:{
            color:'#fff',
            fontSize:14,
          }
        })
      })
      
      top1Chart && top1Chart.setOption(top1Optipn);
      window.onresize = top1Optipn.resize;
    },
  },
};
</script>

<style scoped>
</style>
