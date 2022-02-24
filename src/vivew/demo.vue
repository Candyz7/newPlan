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
      <h1 slot="demo-header">使用插槽变成更改后的</h1>
    </new-table>
    <next-table :message="message"></next-table>
    <h2 @click="changeColor">点击变换颜色</h2>
    <input v-focus>
    <h2>{{msg | changeMsg}}</h2>
    <button v-preventReClick >不能连续点击</button>
    <div class="slide">
      <ul class="slide-auto">
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
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
      msg:'我的本来是新增的',
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
    // console.log('测试页面组件创建了')
  },
  destroyed() {
    console.log('测试页面组件销毁了')
  },
  async mounted () {
    Promise.all([this.openInformation(), this.openConsultation(), this.addInformation()]).then(res => {
      console.log(44444, res)

    }).catch(e => {
      console.log(55555555, e)
    })
  },
  methods: {
    async openInformation() {
      let haha = await this.openConsultation()
      return haha
    },
    openConsultation() {
      return new Promise((resolve, reject) => {
        let add = [3,4]
        console.log(2222, add)
        resolve(add)
      })
    },
    addInformation() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let add = [4]
          console.log(3333, add)
          resolve(add)
        }, 5000)
      })
    },



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

.slide {
    position: relative;
    margin: auto;
    width: 600px;
    height: 200px;
    text-align: center;
    font-family: Arial;
    color: #FFF;
    overflow: hidden;
}

.slide ul {
    margin: 10px 0;
    padding: 0;
    width: 9999px;
    transition: all 0.5s;
}

/*//自动播放*/
.slide .slide-auto {
    animation: marginLeft 10.5s infinite;
}

.slide li {
    float: left;
    width: 600px;
    height: 200px;
    list-style: none;
    line-height: 200px;
    font-size: 36px;
}

.slide li:nth-child(1) {
    background: #9fa8ef;
}

.slide li:nth-child(2) {
    background: #ef9fb1;
}

.slide li:nth-child(3) {
    background: #9fefc3;
}

@keyframes marginLeft {
    0% {
        margin-left: 0;
    }

    28.5% {
        margin-left: 0;
    }

    33.3% {
        margin-left: -600px;
    }

    62% {
        margin-left: -600px;
    }

    66.7% {
        margin-left: -1200px;
    }

    95.2% {
        margin-left: -1200px;
    }

    100% {
        margin-left: 0;
    }
}
</style>
