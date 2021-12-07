<template>
  <div class="login">
    <div class="head">
    <img id="img" class="login-img" src="../assets/bj.png">
    </div>
    <div class="content">
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
                <van-button round block type="info" color="rgb(96, 63, 154)">登录</van-button>
            </div>
            <span class="ceshiBtn" @click="ceshi">测试</span>
            <span class="registerBtn" @click="register">注册</span>
            
        </van-form>
    </div>
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
        if(this.username ==123456 & this.password == 123 ) {
            this.$router.push({path: '/home', query: {name: this.username, password: this.password}})
            this.$toast('登录成功')
        }else {
            this.$myConfirm({
                closeCallback: () => {
                },
                okCallback: () => {
                }
            })
        }
    },
    register() {
        this.$router.push({path: '/event'})
    },
    ceshi() {
        this.$router.push({path: '/demo'})
    }
    }
}
</script>

<style scoped>
.login-img {
    width: 100%;
    height: 240px;
}
.content {
    margin: 40px 40px 15px 40px;
}
/* margin-left 220px */
.registerBtn {
    margin-left: 190px;
    font-weight: bold;
    color:rgb(96, 63, 154);
}
.ceshiBtn {
    font-weight: bold;
    color:rgb(96, 63, 154);
}
</style>
