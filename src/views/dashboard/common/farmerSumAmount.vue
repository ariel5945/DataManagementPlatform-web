<template>
  <div class="box">
        <ItemWrap title="农产品累计网络零售额（万元）" :style="styleObj">
          <div class="numbg">
            <counTo :startVal='startVal' :endVal='endVal' :duration='3000' :decimals='2' class="counToNum"></counTo>
          </div>
        </ItemWrap>
    </div>
</template>

<script>
import counTo from 'vue-count-to'

export default {
  components: { counTo },
  data() {
    return {
      startVal: 0,
      endVal: 657.50,
      styleObj: {
        width: '600px',
        height: '206px',
        backgroundColor: 'rgba(220,220,220,0.03)'
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.counToNum{
  position: absolute;
  left: 50px;
  top: 20px;
  font-size: 50px;
  height: 50px;
  color: #4CBDAE;
  font-family: "YouSheBiaoTiHei";
}
.right-icon{
  position: relative;
  display:inline-block;
  bottom:70px;
  left: 197px;
}
</style>

