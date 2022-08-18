<template>
  <div class="content">
    <DatePick></DatePick>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <SumAmount class="item"></SumAmount>
        <FarmerSumAmount class="item"></FarmerSumAmount>
        <ShopStatistics class="item"></ShopStatistics>
        <LiveNum class="item"></LiveNum>
        <GrandTotal class="item"></GrandTotal>
      </swiper-slide>
      <swiper-slide>
        <RetailIndex class="item"></RetailIndex>
        <RetaiTopCategory class="item"></RetaiTopCategory>
        <nonPhysicalRetai class="item"></nonPhysicalRetai>
        <MonthlyRetail class="item"></MonthlyRetail>
        <IncrementMonthly class="item"></IncrementMonthly>
      </swiper-slide>
      <swiper-slide>
        <FocusCompany class="item"></FocusCompany>
        <FocusFood class="item"></FocusFood>
        <FocusShop class="item1"></FocusShop>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import ShopStatistics from '@/views/dashboard/common/shopStatistics'
import LiveNum from '@/views/dashboard/common/liveNum'
import SumAmount from '@/views/dashboard/common/sumAmount'
import FarmerSumAmount from '@/views/dashboard/common/farmerSumAmount'
import RetailIndex from '@/views/dashboard/common/retaiIndex'
import RetaiTopCategory from './common/retaiTopCategory'
import nonPhysicalRetai from '@/views/dashboard/common/nonPhysicalRetai'
import MonthlyRetail from '@/views/dashboard/common/monthlyRetail'
import IncrementMonthly from '@/views/dashboard/common/incrementMonthly'
import FocusCompany from './common/focusCompany'
import FocusFood from './common/focusFood'
import FocusShop from './common/focusShop'
import GrandTotal from './common/grandTotal'
import DatePick from "../../components/datePick/index"
export default {
  components: {
    ShopStatistics,
    LiveNum,
    SumAmount,
    FarmerSumAmount,
    RetailIndex,
    RetaiTopCategory,
    nonPhysicalRetai,
    MonthlyRetail,
    IncrementMonthly,
    FocusCompany,
    FocusFood,
    FocusShop,
    GrandTotal,
    DatePick
},
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        autoHeight: false,
        height: window.innerHeight,
        // 分页器
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.content {
   width: 1550px;
  /* width: 100%; */
  /* width: 1440px; */
  /* margin-top: 40px */
}

.item {
  flex: 2;
  justify-content: space-between;
  flex-wrap: wrap;
}

.swiper-slide {
  /* position: relative; */
  display: flex;
  flex-wrap: wrap;
}

.item1 {
  position: absolute;
  top: 468px;
  left: 775px;
}
</style>

