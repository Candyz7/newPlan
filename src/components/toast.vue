<template>
    <div class="container " v-if="show">
        <div>{{text}}</div>
    </div>
</template>

<script>
export default {
    name: 'toast',
    // data() {
    //     return {
    //         show:true,
    //         text: '弹窗内容'
    //     }
    // }
};
</script>

<style scoped>
.container {
    position: fixed;
    top: calc(50% - 20px);
    left: calc(50% - 50px);
    width: 200px;
    height: 40px;
    text-align: center;
    line-height:40px;
    color: #ffffff;
    background-color: black;
    border-radius: 10px;
    box-sizing: border-box;
}
</style>