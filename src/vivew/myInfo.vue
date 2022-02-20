<template>
  <div class="myInfo">
    <my-head title="我的信息" ref="tate"></my-head>
      <div class="myInfo-content">
        <div class="myInfo-first">
          <img class="myInfo-img" src="../assets/tx.png">
        </div>
        <div class="myInfo-next" ref="nafff">
          <van-cell-group>
          <van-cell title="姓名" :value="name" />
          <van-cell title="电话" :value="password" />
          </van-cell-group>
        </div>
      </div>
  </div>
</template>
<script>
import MyHead from '../components/myHead.vue'
export default {
  components: {MyHead },
  name: 'MyInfo',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  mounted () {
    this.name = this.$route.query.name
    this.password = this.$route.query.password
    this.$refs.tate.getdata()
    console.log(this.$refs)
    console.log(this.$refs.tate)
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.myInfo /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.myInfo /deep/ .van-nav-bar .van-icon{
  color: white;
}
.myInfo /deep/ .van-nav-bar__text{
  color: white;
}
.myInfo /deep/ .van-cell{
  display: flex;
  text-align: left;
}
.myInfo-content{
  background-color: rgb(241, 241, 241);
  height: calc(100vh - 50px);
}
.myInfo-first{
  height: 200px;
}
.myInfo-next{
  height: 200px;
}
.myInfo-img{
  width: 80px;
  height: 80px;
  margin-top: 50px;
  border-radius: 45px;
}
.myInfo-name{
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: rgb(247, 245, 245);
}
.myInfo-phone{
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 1px;
  background-color: rgb(247, 245, 245);
}
</style>
