<template>
  <div class="newtopic">
    <myHead :title=type></myHead>
    <div class="content">
        <div class="topic-type">题型:</div>
        <div class="option">
            <van-radio-group v-model="radio" direction="horizontal" :disabled="change">
                <van-radio name="1">单选题</van-radio>
                <van-radio name="2">多选题</van-radio>
            </van-radio-group>
        </div>
        <div class="topic-title">题目:</div>
        <div class="test">
            <van-field v-model="value" placeholder="请输入题目内容" :disabled="change"/>
        </div>
        <div class="topic-key">答案选项：</div>
        <div>
            <van-field v-model="playA" label="选项A" placeholder="请输入选项A内容"/>
            <van-field v-model="playB" label="选项B" placeholder="请输入选项B内容"/>
            <van-field v-model="playC" label="选项C" placeholder="请输入选项C内容"/>
            <van-field v-model="playD" label="选项D" placeholder="请输入选项D内容"/>
        </div>
        <div class="topic-rightKey">正确答案是：</div>
        <div class="option">
            <van-checkbox-group v-model="result" direction="horizontal" :max="maxNub" :disabled="disabled">
                <van-checkbox name="1">A</van-checkbox>
                <van-checkbox name="2">B</van-checkbox>
                <van-checkbox name="3">C</van-checkbox>
                <van-checkbox name="4">D</van-checkbox>
            </van-checkbox-group>
        </div>
    </div>
    <van-button color="rgb(96, 63, 154)" type="primary" size="large" :disabled="isSubmit" @click="gohome">提交</van-button>
  </div>
</template>
<script>
import myHead from '../components/myHead.vue'
export default {
  components: { myHead },
  name: 'newtopic',
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
        type:'新增题目',
        disabled:true,
        change:false
    }
  },
  watch: {
      radio:function () {
        if (this.radio === '1') {
            this.disabled = false
            this.maxNub = 1
        } else if (this.radio === '2') {
            this.disabled = false
            this.maxNub = 4
        }
        if(this.type == "编辑题目") {
            return
        }
        this.result = []
      }
  },
  computed: {
      isSubmit () {
      return !(this.radio && this.value && this.playA && this.playB && this.playC && this.playD && this.result.length > 0)
    }

  },
  mounted () {
        this.type = this.$route.query.type
        if(this.type == "编辑题目") {
            this.change = true
            let listData = this.$route.query.data
            console.log(listData)
            this.playA = listData.answers[0].answerDesc
            this.playB = listData.answers[1].answerDesc
            this.playC = listData.answers[2].answerDesc
            this.playD = listData.answers[3].answerDesc
            this.radio = listData.subjectType
            this.value = listData.title
            this.result = []
            for(let i=0; i<listData.answers.length; i++) {
                if(listData.answers[i].rightAnswer == 1) {
                    let result = listData.answers[i].seq
                     this.result.push(result.toString())
                    console.log(this.result)
                }
            }
        }
        
  },
  methods: {
      async gohome() {
          if(this.type == "新增题目"){
            let answer = []
            answer.push(this.playA, this.playB, this.playC, this.playD)
            let answers = [...new Set(answer)]
            if(answer.length !== answers.length) {
                this.$toast('答案不能重复')
                return
            } 
            if(this.radio === '2' && this.result.length < 2 ) {
                this.$toast('答案不能少于两个')
                return
            }
            let url = 'http://localhost:8081/practice/subject/insert'
            let param = {
                title: this.value,
                subjectType: this.radio,
                answers: [
                    {
                        seq: '1',
                        answerDesc: this.playA,
                        rightAnswer: 0
                    },
                    {
                        seq: '2',
                        answerDesc: this.playB,
                        rightAnswer: 0
                    },
                    {
                        seq: '3',
                        answerDesc: this.playC,
                        rightAnswer: 0
                    },
                    {
                        seq: '4',
                        answerDesc: this.playD,
                        rightAnswer: 0
                    }
                ]
            }
            for (var i = 0; i < param.answers.length; i++) {
                let index = this.result.findIndex((item) => {
                    return item === param.answers[i].seq
                })
                if (index > -1) {
                param.answers[i].rightAnswer = 1
                }
            }
            let subject = await this.$axiosHttp.postHttp(url, param)
            this.$toast(subject.message)
            this.$router.go(-1)

          }else {
              let url = 'http://localhost:8081/practice/subject/update'
              let param = {
                title: this.value,
                subjectType: this.radio,
                answers: [
                    {
                        seq: '1',
                        answerDesc: this.playA,
                        rightAnswer: 0
                    },
                    {
                        seq: '2',
                        answerDesc: this.playB,
                        rightAnswer: 0
                    },
                    {
                        seq: '3',
                        answerDesc: this.playC,
                        rightAnswer: 0
                    },
                    {
                        seq: '4',
                        answerDesc: this.playD,
                        rightAnswer: 0
                    }
                ]
            }
            for (var i = 0; i < param.answers.length; i++) {
                let index = this.result.findIndex((item) => {
                    return item === param.answers[i].seq
                })
                if (index > -1) {
                param.answers[i].rightAnswer = 1
                }
            }
            let chioes = await this.$axiosHttp.postHttp(url, param)
            this.$toast(chioes.message)
            this.$router.go(-1)
          }
        //////////////////////
      }
  }
}
</script>
<style scoped>
.newtopic /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.newtopic /deep/ .van-nav-bar__title{
    color: white;
}
.newtopic /deep/ .van-nav-bar .van-icon{
  color: white;
}
.newtopic /deep/ .van-nav-bar__text{
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
.newtopic /deep/ .van-radio--horizontal{
    padding-left: 20px;
}
.topic-title{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.newtopic /deep/ .van-cell{
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
.newtopic /deep/ .van-checkbox{
    padding-left: 30px;
}
</style>
