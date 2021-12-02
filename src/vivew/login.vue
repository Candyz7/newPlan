<template>
  <div class="head">
    <img id="img" class="login-img" src="../assets/bj.png">
    <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
        username: '',
        password: '',
        };
    },
    methods: {
     onSubmit() {
         if(this.username ==123456 & this.password == 123456 ) {
         this.$router.push({path: '/home'})

         }else {
            this.$myConfirm({
             closeCallback: () => {
             },
             okCallback: () => {

             }
         })
         this.$toast('登录成功')
        }
    },
    }
}
</script>

<style>

.login-img {
    width: 100%;
    height: 240px;
    margin-top: -60px;
}
</style>
