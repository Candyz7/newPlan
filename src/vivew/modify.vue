<template>
  <div class="modify">
    <my-head title="修改密码"></my-head>
    <div class="modify-header">
        <div class="modify-title">用户名</div>
        <div class="modify-name">{{ name }}</div>
    </div>
    <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
    />
        <van-field
        v-model="newpassword"
        type="password"
        name="新密码"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请填写新密码' }]"
    />
    <div style="margin: 16px;">
        <van-button round block type="info" color="rgb(96, 63, 154)" @click="modifyPassword">修改</van-button>
    </div>
  </div>
</template>
<script>
import MyHead from '../components/myHead.vue'
export default {
  components: { MyHead },
  name: 'Modify',
  data () {
    return {
      name: '',
      password: '',
      newpassword: ''
    }
  },
  mounted () {
    this.name = this.$route.query.name
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    async modifyPassword () {
      const vm = this
      let url = 'http://localhost:8081/practice/user/ListUserByname?name=' + this.name + '&password=' + this.password
      let res = await vm.$axiosHttp.getHttp(url, {})
      if (res[0].password === vm.password) {
        vm.updata(res)
      } else {
        vm.$dialog.alert({
          message: '您输入的密码与原密码不符'
        })
      }
    },
    async updata (res) {
      let vm = this
      let url = 'http://localhost:8081/practice/user/update'
      let param = {
        id: res[0].id,
        name: res[0].name,
        password: vm.newpassword,
        phone: res[0].phone
      }
      // await方式
      try {
        let responseData = await vm.$axiosHttp.postHttp(url, param)
        if (responseData && responseData.message === '修改成功') {
          vm.$dialog.alert({
            message: '修改成功'
          })
        } else {
          vm.$dialog.alert({
            message: '修改失败'
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.modify-header{
    display: flex;
    height: 35px;
    margin-top: 60px;
}
.modify-title{
    width: 85px;
    height: 24px;
    text-align: left;
    padding: 10px 16px;
}
.modify-name{
    flex: 1;
    height: 24px;
    padding: 10px 16px;
    text-align: left;
}
</style>
