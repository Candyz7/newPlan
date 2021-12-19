<template>
  <div class="details">
    <my-head title="题目详情"></my-head>
    <div class="details-content">
        <div class="details-play">
            <div class="details-title">
                <span :class="{'question-first': listData.subjectType==='1', 'question-next': listData.subjectType==='2'}">
                {{listData.subjectType === '1' ? '单选' : '多选'}}</span>
                {{listData.title}}
            </div>
        </div>
        <div class="details-option">
            <div
             v-for="(item, index) in listData.answers"
             :key="index"
             :class="{'playb': item.rightAnswer === '1', 'play': item.rightAnswer === '0'}">
             <span v-if="item.seq === '1'">A</span>
             <span v-if="item.seq === '2'">B</span>
             <span v-if="item.seq === '3'">C</span>
             <span v-if="item.seq === '4'">D</span>
             . {{item.answerDesc}}</div>
        </div>
        <div class="details-true">正确答案：<span>{{ answer}}</span></div>
    </div>
  </div>
</template>
<script>
import MyHead from '../components/myHead.vue'
export default {
  components: { MyHead },
  name: 'details',
  data () {
    return {
      data: '',
      answer: '',
      listData: []
    }
  },
  mounted () {
    this.data = this.$route.query.data
    console.log(this.data)
    this.getlistData()
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    async getlistData () {
      let vm = this
      let url = 'http://localhost:8081/practice/subject/detail?subjectId=' + this.data
      let param = {
        title: ''
      }
      let res = await vm.$axiosHttp.postHttp(url, param)
      this.listData = res.data
      var item = this.listData.answers.filter(function (data) {
        return data.rightAnswer === '1'
      })
      let rightseq = ''
      for (var i = 0; i < item.length; i++) {
        if (item[i].seq === '1') {
          rightseq = 'A'
        } else if (item[i].seq === '2') {
          rightseq = 'B'
        } else if (item[i].seq === '3') {
          rightseq = 'C'
        } else if (item[i].seq === '4') {
          rightseq = 'D'
        }
        this.answer = this.answer + rightseq
      }
    }
  }
}
</script>
<style scoped>
.details /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.details /deep/ .van-nav-bar .van-icon{
  color: white;
}
.details /deep/ .van-nav-bar__text{
  color: white;
}
.details /deep/ .van-nav-bar__title{
  color: white;
}
.details /deep/ .van-cell__title{
    text-align: left;
    font-weight: bold;
}
.details-content{
    height: calc(100vh - 50px);
}
.details-title{
    flex: 1;
    margin: 10px;
    TEXT-JUSTIFY: inter-ideograph;
    TEXT-ALIGN: justify;
}
.details-option{
    text-align: left;
    margin-top: 20px;
}
.details-true{
  text-align: left;
  margin: 30px 0px 0px 15px;
}
.play{
    margin: 15px 0px 10px 15px;
}
.playb{
    margin: 15px 0px 10px 15px;
    color: rgb(25, 137, 250);
}
.details-play{
    display: flex;
}
/* .details-type{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(25, 137, 250);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 10px 10px 0px 10px;
} */
.question-first{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(25, 137, 250);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    padding: 2px 5px;
}
.question-next{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(250, 228, 27);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    padding: 2px 5px;
}
</style>
