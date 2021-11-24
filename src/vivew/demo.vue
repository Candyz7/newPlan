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
  </div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      change: false,
      changes: true,
      list: [
        {id: '1', name: 'aa'},
        {id: '2', name: 'bb'},
        {id: '3', name: 'cc'}
      ]
    }
  },
  mounted () {
  },
  methods: {
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
</style>
