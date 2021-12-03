<template>
  <div class="home">
      <div class="head">
         <img id="img" class="home-img" src="../assets/hb1.png">
      </div>
      <div class="content">
         <van-button  color="rgb(96, 63, 154)" @click="goback">返回</van-button>
      </div>
      <div class="footer">
        <div class="left">
            <div><van-icon name="wap-home" size="25px"/><div>主页</div></div>
        </div>
        <div class="center">
            <van-icon name="label" size="25px"/><div>任务列表</div>
        </div>
        <div class="right">
            <div><van-icon name="manager" size="25px"/><div>我的</div></div>
        </div>
      </div>
 </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },

  mounted () {
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.home-img {
    width: 100%;
    height: 240px;
}
.footer{
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    height: 60px;
    width: 100vw;
    background-color: rgb(224, 224, 224);
}
.left{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.center{
  font-size: 14px;
  flex: 1;
}
.right{
  flex: 1;
  font-size: 14px;
  text-align: center;
}
</style>
