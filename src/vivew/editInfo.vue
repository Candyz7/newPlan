<template>
  <div class="editInfo">
    <!--必须在div中编写页面-->
    <my-head title="题目信息修改"></my-head>
    <div class="content">
        <div class="topic-type">题型:</div>
        <div class="option">
            <van-radio-group v-model="listData.subjectType" direction="horizontal">
                <van-radio name="1">单选题</van-radio>
                <van-radio name="2">多选题</van-radio>
            </van-radio-group>
        </div>
        <div class="topic-title">题目:</div>
        <div class="test">
            <van-field v-model="listData.title" placeholder="请输入题目内容" />
        </div>
        <div class="topic-key">答案选项：</div>
        <div v-for="(item, index) in listData.answers" :key="index">
            <van-field v-model="item.answerDesc" :label="item.seq"/>
        </div>
        <div class="topic-rightKey">正确答案是：</div>
        <div class="option">
            <van-checkbox-group v-for="(item, index) in listData.answers" :key="index" v-model="item.rightAnswer" direction="horizontal" >
                <van-checkbox  name="1" >{{item.seq}}</van-checkbox>
            </van-checkbox-group>
        </div>
        <!-- <div class="option">
            <van-checkbox-group v-model="result" direction="horizontal" >
                <van-checkbox name="1">A</van-checkbox>
                <van-checkbox name="2">B</van-checkbox>
                <van-checkbox name="3">C</van-checkbox>
                <van-checkbox name="4">D</van-checkbox>
            </van-checkbox-group>
        </div> -->
    </div>
    <van-button color="rgb(96, 63, 154)" type="primary" size="large" >提交</van-button>

  </div>
</template>
<script>
import MyHead from '../components/myHead.vue'
export default {
  components: { MyHead },
  name: 'editInfo',
  data () {
    return {
        radio:'',
        value:'',
        playA:'',
        playB:'',
        playC:'',
        playD:'',
        result: [],
        maxNub:'0',
        disabled:true,
        listData:[]
    }
  },
  mounted () {
      this.listData = this.$route.query.data
      console.log(this.listData)
  },

  methods: {
    upPage () {
      this.$router.go(-1)
    },
  }
}
</script>
<style scoped>
.editInfo /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.editInfo /deep/ .van-nav-bar__title{
    color: white;
}
.editInfo /deep/ .van-nav-bar .van-icon{
  color: white;
}
.editInfo /deep/ .van-nav-bar__text{
  color: white;
}
.content{
  background-color: rgb(241, 241, 241);
  height: calc(100vh - 100px);
}
.topic-type{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.option{
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
}
.editInfo /deep/ .van-radio--horizontal{
    padding-left: 20px;
}
.topic-title{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.editInfo /deep/ .van-cell{
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
}
.topic-key{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.topic-rightKey{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.editInfo /deep/ .van-checkbox{
    padding-left: 30px;
}
</style>
