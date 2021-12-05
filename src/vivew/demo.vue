<template>
  <div class="demo">
    <!-- <div class="head">
      <button @click="ok">点击</button>
    </div>
      <a style="color:red;font-sze:20px" v-if="change">11111111111111111111111111</a>
      <a style="color:red;font-sze:20px" v-else>22222222222222222222222222</a>
      <a style="color:blue;font-sze:40px" v-show="change">33333333333333333333333333</a>
      <a style="color:blue;font-sze:40px" v-show="changes">44444444444444444444444444</a>
        <div v-for="(item, i) in list">{{item.id}} {{item.name}}</div>
        <div v-text="text" style="margin-top:50px"> {{text}} </div>
        <div v-html="html" style="margin-top:50px"> {{html}} </div>

        <div :style="{color:color, fontSize:size}">v-bind的使用</div>

        <div v-bind:class="{active: isActive}"
        style="width:200px;height:200px;text-align:center;background:pink">class与style的绑定</div>


    <Form ref="form" :model="form"  inline >
        <FormItem >
            <Input type="text" @on-change="inputChange()" v-model="form.user" placeholder="用户名">
            </Input>
        </FormItem>
        <FormItem >
            <Input type="password" @on-change="inputChange()" v-model="form.password" placeholder="密码">
            </Input>
        </FormItem>
        <button @click="changeUser">点击事件</button>
    </Form> -->

    <new-table :baseInfo="baseInfo" @fromNewtable="fromNewtable">
      <h1 slot="header">使用插槽变成更改后的</h1>
    </new-table>
    <next-table :message="message"></next-table>
    <h2 @click="changeColor">点击变换颜色</h2>
  </div>
</template>
<script>
import newTable from '@/components/newTable'
import nextTable from '@/components/nextTable'
export default {
  name: 'demo',
  components: {newTable, nextTable},
  data () {
    return {
      message: '',
      baseInfo:'我是父组件传过来的值',
      text: "<span>html标签在渲染的时候被源码输出</span>",
      html: "<span>html标签在渲染的时候被解析</span>",
      change: false,
      changes: true,
      list: [
        {id: '1', name: 'aa'},
        {id: '2', name: 'bb'},
        {id: '3', name: 'cc'}
      ],
      size:'50px',
      color:'pink',
      isActive:true,
      form: {
          user: '原来的用户名',
          password: ''
      },
    }
  },
  created() {
    console.log('测试页面组件创建了')
  },
  destroyed() {
    console.log('测试页面组件销毁了')
  },
  mounted () {
    // console.log(this.form.user)
  },
  methods: {
    changeColor(e) {
      e.target.style.color = 'red'
    },
    fromNewtable(data) {
      this.message = data
      console.log(data)
    },
    inputChange() {
      console.log('用户名',this.form.user)
      console.log('密码',this.form.password)
    },
    changeUser() {
      this.form.user = '修改后的名字'
      console.log(this.form.user)
    },
    ok () {
      this.change = true
      console.log('简单实现v-on的使用')
    }
  }
}
</script>
<style scoped>
.head {
  width: 100%;
  height: 100px;
  background-color: beige;
}
.active {
  background-color: pink;
  font-size: 20px;
}
</style>
