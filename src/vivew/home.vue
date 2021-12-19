<template>
  <div class="home">
      <div class="head">
        <my-head title="瓦坎达forever">
          <div slot="left" style="font-size: 12px">欢迎:{{name}}</div>
        </my-head>
      </div>
      <div class="content">
         <img id="img" class="home-img" src="../assets/hb1.png">
         <div class="home-content1">
            <div class="home-establish" @click="openTopic">
              <img class="home-imgLuru" src="../assets/luru.png">
              <div>新建题目</div>
            </div>
            <div class="home-myestablish" @click="openQuestion">
              <img class="home-imgTiku" src="../assets/tiku.png">
              <div>我的题库</div>
            </div>
        </div>
        <div class="home-content2">
            <div class="home-answer">
              <img class="home-imgDati" src="../assets/dati.png">
              <div style="margin-top:-7px">答题</div>
            </div>
            <div class="home-practice">
              <img class="home-imgContact" src="../assets/luru.png">
              <div>练习</div>
            </div>
        </div>
      </div>
      <div class="footer">
        <div class="left">
            <div><van-icon name="wap-home" color="rgb(96, 63, 154)" size="25px"/><div>主页</div></div>
        </div>
        <div class="center">
            <van-icon name="label" color="rgb(96, 63, 154)" size="25px"/><div>任务列表</div>
        </div>
        <div class="right" @click="goMine">
            <div><van-icon name="manager" color="rgb(96, 63, 154)" size="25px"/><div>我的</div></div>
        </div>
      </div>
 </div>
</template>
<script>
import myHead from '../components/myHead.vue'
export default {
  name: 'Home',
  components: {myHead},
  data () {
    return {
      name:'',
      password:''
    }
  },
  mounted () {
    this.name = this.$route.query.name
    this.password = this.$route.query.password
  },
  methods: {
    openTopic(){
      this.$router.push({path: '/newtopic'})
    },
    openQuestion() {
      this.$router.push({path: '/question'})

    },
    goback() {
      this.$router.go(-1)
    },
    goMine() {
      let vm = this
      this.$router.push({path: '/mine', query: {name: vm.name, password: vm.password}})
    }
  }
}
</script>
<style scoped>
.head {
  font-size: 16px;
  font-weight: bold;
}
.content{
  height: calc(100vh - 110px);
  position: absolute;
  overflow: auto;
}
.home-img {
    width: 100%;
    height: 220px;
}
.home-content1{
    display: flex;
}
.home-content2{
    display: flex;
}
.home-establish{
    flex: 1;
    height: 140px;
    color: rgb(96, 63, 154);
    margin: 4px 4px 4px 8px;
    border: 2px solid rgb(235, 235, 235);
}
.home-imgLuru{
  width: 50px;
  height: 50px;
  margin-top: 25px;
}
.home-myestablish{
    flex: 1;
    height: 140px;
    color: rgb(96, 63, 154);
    margin: 4px 8px 4px 4px;
    border: 2px solid rgb(235, 235, 235);
}
.home-imgTiku{
  width: 50px;
  height: 50px;
  margin-top: 25px;
}
.home-answer{
    flex: 1;
    height: 140px;
    color: rgb(96, 63, 154);
    margin: 4px 4px 4px 8px;
    border: 2px solid rgb(235, 235, 235);
}
.home-practice{
    flex: 1;
    height: 140px;
    color: rgb(96, 63, 154);
    margin: 4px 8px 4px 4px;
    border: 2px solid rgb(235, 235, 235);
}
.home-imgDati{
  width: 70px;
  height: 70px;
  margin-top: 20px;
}
.home-imgContact{
  width: 50px;
  height:50px;
  margin-top: 25px;
  margin-bottom: 10px;
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
