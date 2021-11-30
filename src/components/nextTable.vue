<template>
  <div class="demo">
    {{data}}
  </div>
</template>
<script>
export default {
  name: '',
  props: ['message'],
  data () {
    return {
      data: ''
    }
  },
  mounted () {
      console.log(this.message)
      
      this.$event.$on("sendMessage", data => {
      this.data = data;
      console.log(this.data)
    })
  },
  methods: {
     
  }
}
</script>
<style scoped>
.demo {
  font-size: 20px;
}
</style>
