<template>
  <div class="demo">
    <input v-model="information" v-focus>
    <button @click="goDemo">组建通信</button>
    <div>
        <slot name="demo-header">原来的信息</slot>
    </div>
    <button @click="handleClick"> Send Message</button>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['baseInfo'],
  data () {
    return {
        information: '我是兄弟组件传来的值',
        message: '给兄弟组件传的值'
    }
  },
  mounted () {
  },
  methods: {
    handleClick() {
      this.$event.$emit("sendMessage", this.message)
    },
      goDemo() {
          this.$emit('fromNewtable',this.information)
      }
  }
}
</script>
<style scoped>
</style>
