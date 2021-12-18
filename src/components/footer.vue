<template>
  <div class="footer">
    <div class="left">
       <slot name="left">
        <div @click="footerLeft"><van-icon name="wap-home" color="rgb(96, 63, 154)" size="25px"/><div>主页</div></div>
       </slot>
    </div>
    <div class="center">
       <slot name="center">
         <van-icon name="label" color="rgb(96, 63, 154)" size="25px"/><div>任务列表{{topInfo}}</div>
       </slot>
    </div>
    <div class="right">
      <slot name="right">
        <div @click="footerRight"><van-icon name="manager" color="rgb(96, 63, 154)" size="25px"/><div>我的</div></div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: ['topInfo'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    footerLeft () {
      this.$emit('footerLeft')
    },
    footerRight () {
      this.$emit('footerRight')
    }
  }
}
</script>
<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    height: 60px;
    width: 100vw;
    background-color: rgb(224, 224, 224);
}
.left{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.center{
  font-size: 14px;
  flex: 1;
}
.right{
  flex: 1;
  font-size: 14px;
  text-align: center;
}
</style>
