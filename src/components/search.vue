<template>
  <div class="search">
    <div class="question-search">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <div class="question-confirm"  @click="clickSearch">搜索</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: [],
  data () {
    return {
      value: ''
    }
  },
  mounted () {
  },
  methods: {
    clickSearch () {
      this.$emit('clickSearch', this.value)
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.question-search{
  display: flex;
}
.question-confirm{
  width: 40px;
  height: 30px;
  color: #ffffff;
  background-color: rgb(96, 63, 154);
  margin-top: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
