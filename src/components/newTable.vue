<template>
  <div class="demo">
    <input v-model="information">
    <button @click="goDemo">组建通信</button>
    <header>
        <slot name="header">原来的信息</slot>
    </header>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['baseInfo'],
  data () {
    return {
        information: '我是兄弟组件传来的值'
    }
  },
  mounted () {
      console.log(this.baseInfo)
  },
  methods: {
      goDemo() {
          this.$emit('fromNewtable',this.information)
      }
  }
}
</script>
<style scoped>
</style>
