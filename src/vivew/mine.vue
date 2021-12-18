<template>
  <div class="setin">
    <my-head title="用户中心">
        <div slot="left" style="font-size: 12px"></div>
    </my-head>
    <!-- <div class="setin-title">用户中心</div> -->
    <div class="setin-content">
      <div class="setin-first" @click="goMyInfor">
        <div class="setin-information">我的信息</div>
        <div class="setin-icon">
          <van-icon class="Symbol" name="arrow" />
        </div>
      </div>
      <div class="setin-next" @click="goModify">
        <div class="setin-information">更改密码</div>
        <div class="setin-icon">
          <van-icon class="Symbol" name="arrow" />
        </div>
      </div>
      <router-link to='/login'>
        <van-button class="setin-cancellation" type="primary" color="rgb(96, 63, 154)" round size="large">注销登录</van-button>
      </router-link>
    </div>
    <div class="setin-footer">
      <Footer @footerLeft="goHome"></Footer>
    </div>
  </div>
</template>
<script>
import Footer from '../components/footer.vue'
import MyHead from '../components/myHead.vue'
export default {
  name: 'Setin',
  components: { Footer, MyHead },
  data () {
    return {
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    myInfo: function () {
      return '我的名字是：' + this.name1 + '我的年龄：' + this.psd
    }
  },
  mounted () {
    this.name = this.$route.query.name
    this.password = this.$route.query.password
    console.log(this.name)
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    goMyInfor () {
      this.$router.push({ path: '/myInfo', query: { name: this.name, password: this.password } })
    },
    goModify () {
      this.$router.push({ path: '/modify', query: { name: this.name } })
    },
    goHome () {
      this.$router.push({ path: '/home', query: { name: this.name, password: this.password } })
    }
  }
}
</script>
<style scoped>
.setin-title{
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(25, 137, 250);
}
.setin-content{
  height: calc(100vh - 115px);
  margin-top: 5px;
  /* position: absolute; */
  overflow: auto;
}
.setin-footer{
  display: flex;
  height: 60px;
  bottom: 0;
  align-items: center;
  background-color: rgb(241, 241, 241);
}
.setin-next{
  display: flex;
  height: 50px;
  border-bottom: 2px solid rgb(231, 231, 231);
}
.setin-information{
  flex: 1;
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 15px;
  }
.setin-first{
  display: flex;
  height: 50px;
  border-bottom: 2px solid rgb(231, 231, 231);
  border-top: 2px solid rgb(231, 231, 231);
}
.setin-icon{
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Symbol{
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.setin-firstpage{
    flex: 1;
    font-size: 12px;
}
.setin-list{
    flex: 1;
    font-size: 12px;
}
.setin-my{
    flex: 1;
    font-size: 12px;
}
.setin-cancellation{
  margin-top: 320px;
  width: 320px;
  background-color: rgb(25, 137, 250);
}
</style>
