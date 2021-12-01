<template>
  <div>
    <h1>使用vue.extend动态创建组件</h1>
    <button @click="showToast">打开弹窗</button>
  </div>
</template>

<script>
// import toast from './components/toast.vue';
export default {
    // components: {
    //     toast
    // },
    methods: {
        showToast() {
            this.$toast('弹窗内容')
        }
    }
}
</script>

<style>
</style>
