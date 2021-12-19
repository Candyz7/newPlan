<template>
  <div class="question">
    <my-head title="题库"></my-head>
    <!-- 提出的搜索组件 -->
    <Search @clickSearch="findtltle"></Search>
    <div class="question-content">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="slide">
          <!-- 表单数据组件 -->
          <question-table :listData="listData"></question-table>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import MyHead from '../components/myHead.vue'
import QuestionTable from '../components/questionTable.vue'
import Search from '../components/search.vue'
export default {
  name: 'question',
  components: { Search, QuestionTable, MyHead },
  data () {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      page: 0,
      pageSize: 20,
      searchValue: '',
      listData: []
    }
  },
  mounted () {
    this.getListData()
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    onRefresh () {
      // 清空列表数据
      this.listData = []
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.page = 0
      this.getListData()
    },
    //滑动时页数增加
    slide () {
      this.page++
      this.getListData()
    },
    async findtltle (value) {
      this.searchValue = value
      this.listData = []
      this.page = 0
      this.getListData()
    },
    async getListData () {
      let vm = this
      if (this.refreshing) {
        this.listData = []
        this.refreshing = false
      }
      let url = 'http://localhost:8081/practice/subject/list?page=' + vm.page + '&pageSize=' + vm.pageSize
      let param = {
        title: vm.searchValue
      }
      let res = await vm.$axiosHttp.postHttp(url, param)
      vm.listData = vm.listData.concat(res.list)
      console.log(vm.listData)
      // 加载状态结束
      this.loading = false
      // 数据全部加载完成
      if (vm.listData.length >= res.total) {
        this.finished = true
      }
    }
  }
}
</script>
<style scoped>
.question /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.question /deep/ .van-nav-bar .van-icon{
  color: white;
}
.question /deep/ .van-nav-bar__text{
  color: white;
}
.question /deep/ .van-nav-bar__title{
  color: white;
}
.question-content{
    width: 100%;
  background-color: rgb(241, 241, 241);
  height: calc(100vh - 105px);
  position: absolute;
  overflow: auto;
}
/* .question-search{
  display: flex;
} */
.question /deep/ .van-search{
  flex: 1;
}
/* .question-confirm{
  width: 40px;
  height: 30px;
  background-color: rgb(25, 137, 250);
  margin-top: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
} */
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
.question-first{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(25, 137, 250);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 0px 10px 0px 10px;
}
.question-next{
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
