<template>
  <div class="header">
    <div class="left">
       <slot name="left">
         <div @click="goback"><van-icon name="arrow-left"/>返回</div>
       </slot>
    </div>
    <div class="center">
       <slot name="center">
          <div style="font-size: 16px">{{title}}</div>
       </slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myHead',
  props: ['title'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    getdata() {
      console.log(1111)
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .header{
    display: flex;
    align-items: center;
    height: 50px;
    width: 100vw;
    background-color: rgb(96, 63, 154);
    color: #ffffff;
  }
  .left{
    flex: 1;
    text-align: left;
    margin-left: 15px;
  }
  .center{
    flex: 1;
  }
  .right{
    flex: 1;
    text-align: right;
    margin-right: 15px;
  }
</style>
