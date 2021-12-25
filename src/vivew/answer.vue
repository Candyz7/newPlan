<template>
  <div class="answer">
    <my-head title="答题"></my-head>
    <div class="answer-content">
        <van-cell-group>
          <van-cell>
            <span slot="title">{{this.listData[listIndex].subjectType === '1' ? '单选题' : '多选题'}}</span>
            <span slot="default">{{ listIndex + 1}}/{{listData.length}}</span>
          </van-cell>
        </van-cell-group>
        <div class="answer-title">{{listData[listIndex].title}}</div>
        <div class="answer-option">
            <van-checkbox-group v-model="listData[listIndex].radio" :max="listData[listIndex].subjectType === '1' ? 1 : 4" @change="changePlan">
              <van-checkbox
              v-for="(item, index) in listData[listIndex].answers"
              :key="index"
               :name='item.seq'
              >{{item.answerDesc}}</van-checkbox>
            </van-checkbox-group>
        </div>
        <div class="answer-button">
          {{listData[listIndex].result}}
        </div>
        <button v-show="listData[listIndex].result && listIndex < listData.length - 1" @click="next">下一题</button>
        <button v-show="listData[listIndex].result && listIndex === listData.length - 1" @click="goFraction">查看答案分数</button>
    </div>
  </div>
</template>
<script>
import MyHead from '../components/myHead.vue'
export default {
  name: 'answer',
  components: { MyHead },
  data () {
    return {
      listData: [],
      listIndex: 0
    }
  },
  mounted () {
    this.getListRandom()
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    async getListRandom () {
      let vm = this
      let url = 'http://localhost:8081/practice/subject/listRandom?number=' + 5
      let res = await vm.$axiosHttp.postHttp(url, {})
      vm.listData = res
      console.log(this.listData)
    },
    changePlan () {
      var rightAnswerArr = this.listData[this.listIndex].answers.filter(function (opt) {
        return opt.rightAnswer === '1'
      })
      let arr = []
      rightAnswerArr.map((item) => {
        arr.push(item.seq)
      })
      console.log(arr)
      let raidoVale = JSON.parse(JSON.stringify(this.listData[this.listIndex].radio))
      console.log(raidoVale)
      if (raidoVale.sort().toString() === arr.sort().toString()) {
        this.listData[this.listIndex].result = '答案正确'
      } else {
        if (this.listData[this.listIndex].radio.length === 0) {
          this.listData[this.listIndex].result = ''
        } else {
          this.listData[this.listIndex].result = '答案错误'
        }
      }
      console.log(this.listData[this.listIndex].result)
      this.$forceUpdate()
    },
    next () {
      this.listIndex++
    },
    goFraction () {
      var item = this.listData.filter(function (mesg) {
        return mesg.result.indexOf('答案正确') !== -1
      })
      this.$myConfirm({
          content: '此次答题的分数是：' + 100 / this.listData.length * item.length,
          okCallback: () => {
            this.$router.go(-1)
          }
      })
    }
  }
}
</script>
<style scoped>
.answer /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.answer /deep/ .van-nav-bar .van-icon{
  color: white;
}
.answer /deep/ .van-nav-bar__text{
  color: white;
}
.answer /deep/ .van-nav-bar__title{
  color: white;
}
.answer /deep/ .van-cell__title{
    text-align: left;
    font-weight: bold;
}
.answer /deep/ .van-cell{
    height: 50px;
    border-bottom: 1px solid rgb(241,241,241);
}
.answer-content{
    height: calc(100vh - 50px);
}
.answer-title{
    margin:10px 10px 0px 10px;
    TEXT-JUSTIFY: inter-ideograph;
    TEXT-ALIGN: justify;
}
.answer-option{
    margin-top: 20px;
}
.answer /deep/ .van-checkbox{
    margin: 0px 15px 15px 15px;
    text-align: left;
}
.answer /deep/ .van-checkbox-group{
    margin-left: 10px;
}
.answer-button{
    display: flex;
    margin-left: 15px;
}
</style>
