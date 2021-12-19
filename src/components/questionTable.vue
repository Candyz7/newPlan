<template>
  <div class="questionTable">
    <div class="question-box">
      <div class="question-type" v-for="(item, index) in listData" :key="index" @click="openDetails(item)">
      <div :class="{'question-single' : item.subjectType === '1', 'question-double' : item.subjectType === '2'}">
         {{item.subjectType === '1' ? '单选' : '多选'}}
      </div>
      <div class="question-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'questionTable',
  props: ['listData'],
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.listData)
  },
  methods: {
    openDetails(item) {
      console.log(item)
      this.$router.push({path: '/details', query: { data: item.subjectId } })
    }
  }
}
</script>
<style scoped>
.question-box{
    background-color: white;
    margin-top: 3px;
}
.question-type{
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(241, 241, 241);
}
.question-single{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(25, 137, 250);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 0px 10px 0px 10px;
}
.question-double{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(250, 228, 27);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 0px 10px 0px 10px;
}
.question-title{
    flex: 1;
    text-align: left;
    padding-left: 10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>
