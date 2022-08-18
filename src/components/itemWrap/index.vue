<template>
  <div class="border-Main">
    <dv-decoration-10 style="width: 100%; height: 1px" />
    <div class="item-title">
      <span class="box-tit">{{ title }}</span>
      <dv-decoration-1
        style="width: 160px; height: 50px"
        class="right-icon icon"
      />
      <!-- <span class="right-icon icon"></span> -->
      <span class="title-icon icon"></span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
};
</script>
<style scoped>
.border-Main {
  width: 100%;
  height: 100%;
  background: no-repeat scroll 50% 50%;
  background-image: url(../../assets/icon/boxbgshadow.png);
  background-size: 100% 100%;
  display: inline-block;
}
.item-title {
  display: inline-block;
  height: 60px;
  width: 100%;
}
.box-tit {
  margin-left: 20px;
  font-size: 20px;
  width: 100%;
  height: 25px;
  line-height: 40px;
  color: #b1cffc;
  position: relative;
  top: 7px;
}

.title-icon {
  width: 333px;
  height: 21px;
  display: block;
  background-position:0 -7px ;
}
.right-icon {
  display: inline-block;
  float: right;
}
</style>
