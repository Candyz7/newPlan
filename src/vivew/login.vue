<template>
  <div class="login">
    <div class="head">
        <div class="head-auto">
            <img  src="../assets/bj.png" style="width:100vw; height:240px;">
            <img  src="../assets/hb1.png" style="width:100vw; height:240px;">
            <img  src="../assets/hb2.png" style="width:100vw; height:240px;">
            <img  src="../assets/hb3.png" style="width:100vw; height:240px;">
        </div>
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
            <van-cell-group v-if="mation">
            <van-field
                v-model="code"
                clearable
                label="验证码"
                placeholder="请输入验证码"
            >
                <template #button>
                <van-button size="small" type="primary" color="rgb(96, 63, 154)" @click="sendCode">发送验证码</van-button>
                </template>
            </van-field>
            </van-cell-group>
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
import { login } from '@/api/common'
export default {
    data() {
        return {
        username: '',
        password: '',
        code:'',
        mation:false,
        };
    },
    methods: {

    sendCode() {
        this.$toast('您的验证码是:4410')
    },

    async onSubmit () {
      let vm = this
      let url = 'http://localhost:8081/practice/user/ListUserByname?name=' + this.username + '&password=' + this.password
      let res = await login(url) // res即为response.data
      console.log(333, res)
      if(res.length > 0) {
          this.mation = true
      } 
      if(res.length == 0){
            vm.$toast('用户不存在')
            } else if (this.username === res[0].name && this.password === res[0].password && this.code === '4410' ) {
                    vm.$toast('登录成功')
                    vm.$router.push({ path: '/home', query: {name: vm.username, password: vm.password} })
                }
                else {
                    // vm.$toast('账号或密码错误')
                }
    },
    register() {
        this.$router.push({path: '/register'})
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

.head {
    width: 100%;
    height: 240px;
    overflow: hidden;
}

.head img {
    float: left;
}

.head-auto {
    width: fit-content;
    height: 240px;
    display: flex;
    animation: 10.5s marginLeft infinite;
}

@keyframes marginLeft {
    0%{}
    25%{transform: translateX(0px)}
    30%{transform: translateX(-100vw)}
    50%{transform: translateX(-100vw)}
    55%{transform: translateX(-200vw)}
    75%{transform: translateX(-200vw)}
    80%{transform: translateX(-300vw)}
    100%{transform: translateX(-300vw)}
}
</style>
