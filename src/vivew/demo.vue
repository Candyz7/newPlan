<template>
  <div class="demo">
    <div class="head">
      <button @click="ok">点击</button>
    </div>
      <a style="color:red;font-sze:20px" v-if="change">11111111111111111111111111</a>
      <a style="color:red;font-sze:20px" v-else>22222222222222222222222222</a>
      <a style="color:blue;font-sze:40px" v-show="change">33333333333333333333333333</a>
      <a style="color:blue;font-sze:40px" v-show="changes">44444444444444444444444444</a>
        <!-- <div v-for="(item, i) in list">{{item.id}} {{item.name}}</div> -->
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
    </Form>
  </div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
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
  mounted () {
    console.log(this.form.user)
  },
  methods: {
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
