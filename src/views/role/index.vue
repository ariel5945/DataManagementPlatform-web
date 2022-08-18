<template>
<div>
  <header class="headerBar">
    <img src="">
  </header>
  <div class="wrapper">
    <div class="content">
        <div class="speech">
            <img src="" class="" />
        </div>
        <!-- <div class="role-pick">
            <ul>
                <li><img src=""></li>
                <li><img src=""></li>
            </ul>
        </div> -->
    </div>
  </div>
</div>
</template>

<script>
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
li {list-style-type:none;}
.headerBar{
    width: 100%;
    height: 100px;
    position: relative;
    background-color: rgba(35, 43, 56, 1);
}
.headerBar img{
    width: 200px;
    height: 40px;
    display: inline-block;
    position: relative;
    margin:34px 0 34px 48px;
}
.wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(26, 32, 44, 1);
}
.content{
    width: 1440px;
    margin: 0 auto;
    position: relative;
}
.speech{
   padding: 98px 270px 98px 270px;
}
.speech img{
    
}
.role-pick{
    width: 600px;
    height: 200px;
    position: relative;
    margin: 0 auto;
}
.role-pick ul{
    margin-top: 120px;
}
</style>
