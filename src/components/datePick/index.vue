<template>
  <!-- 首页 时间选择器 -->
  <div class="headerPicker">
    <div ref="scrollView" class="scroll-view" id="scrollView">
      <ul>
        <li v-for="(item, index) in dateNumList" :key="index">
          <div class="dateBox">
            <div class="date-top">
                <i class="date-base"> </i>
                <span class="itemDate">{{ item.date }}</span>
            </div>
            
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import IScroll from "iscroll";

export default {
  data() {
    return {
      dateNumList: [
        { date: "2022年1月" },
        { date: "2022年2月" },
        { date: "2022年3月" },
        { date: "2022年4月" },
        { date: "2022年5月" },
        { date: "2022年6月" },
        { date: "2022年7月" },
      ],
    };
  },
  created() {},
  mounted() {
    this.iscroll = new IScroll(this.$refs.scrollView, {
      mousewheel: true,
      scrollbars: true,
      scrollX: false,
      sscrollY:true,
      disablePointer:true,
      disableTouch:true,
      disableMouse:true,
      click: true,
    });
    this.iscroll.refresh();
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}
.headerPicker {
  width: 1400px;
  height: 80px;
  border-bottom: 2px solid #333;
  //   margin-bottom: 40px;
  margin: 30px 0 40px 0;
  overflow: hidden;
}
.scroll-view {
  width: 100%;
  height: 100%;
  overflow: visible;
  // position: absolute;
  // left: 0;
  // top: 0;
  li {
    width: 252px;
    height: 80px;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    .dateBox {
      width: 126px;
      height: 64px;
      position: relative;
      .date-top {
        width: 126px;
        height: 64px;
        color:#fff;
        font-size:12px;
        font-style:normal;
        position: relative;
        display: inline-block;
        background: url("../../assets/icon/date.png") no-repeat;
      }
      .date-top:hover {
        background: url("../../assets/icon/dateH.png") no-repeat;
      }
      .date-base {
        width: 47px;
        height: 22px;
        display: inline-block;
        background: url("../../assets/icon/di.png") no-repeat;
        position: relative;
        top: 55px;
        left: 40px;
        z-index:999;
      }
      .date-top:hover .date-base {
        width: 47px;
        height: 22px;
        display: inline-block;
        position: relative;
        color:#fff;
        top: 55px;
        left: 40px;
        background: url("../../assets/icon/di.png") no-repeat;
        animation-name: dsp;
        animation-duration: 2.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    .itemDate {
        width: 126px;
        display: inline-block;
        text-align: right;
        padding-right: 11px;
        top: -14px;
        font-size: 14px;
        position: relative;
        color: #fff;
        z-index: 9999;
    }
}
    @keyframes dsp {
      0% {
        opacity: 1;
        transform: scale(0.5);
      }
    30% {
        opacity: 1;
        transform: scale(0.7);
      }
      50% {
        opacity: 1;
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}
</style>
