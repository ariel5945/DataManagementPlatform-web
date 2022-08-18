<template>
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
  <el-button class="search-btn">搜索</el-button>
  </div>
</div>
    <!-- filter -->
    <!-- container -->
      <ItemWrap title="为你找到xxx家企业" :style="styleObj" class="itemwrap">
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
</template>

<script>
export default {
  data() {
    return { searchinput: "" };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.inputwid {
  width: 40%;
  margin: auto;
}
.market-bg {
  padding: 20px;
  .search {
    height: 200px;
    background: #0f2c40;
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
    // background-color: aliceblue;

    .content-con {
      display: flex;
      color: #fff;
      .left {
        width: 50px;
        height: 50px;
        position: relative;
        margin: 60px 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .center {
        width: 70%;
        margin-left: 60px;
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 60px;
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
.search-btn {
  background: rgba(30, 221, 121, 0.4);
  border-radius: 2px;
  opacity: 1;
  border: none;
}
</style>