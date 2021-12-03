<template>
<div class="modal-container">
    <div class="modal">
        <div class="header">
            <div class="icon">
            <!-- <img src="./imgs/info.png" alt=""> -->
            </div>
            <span class="title" v-html="title"></span>
        </div>
        <div class="content" v-html="content"></div>
        <div class="footer">
            <button class="btn cancel-btn" @click="closeClick">{{ cancelText }}</button>
            <button class="btn ok-btn" @click="okClick">{{ okText }}</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'myModal',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        content: {
            type: String,
            default: '验证不通过'
        },
        closeCallback: {
            type: Function,
            default: () => {}
        },
        okCallback: {
            type: Function,
            default: () => {}
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        okText: {
            type: String,
            default: '确定'
        }
    },

    mounted() {
    },
    destroyed() {
    },
    methods: {
        closeClick() {
            this.closeCallback()
        },
        okClick() {
            this.okCallback()
        }
    }
}
</script>

<style  scoped>
.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal{
    position: fixed;
    text-align: center;
    margin-bottom: 270px;
    width: 300px;
    height: 150px;
    background-color:#ffffff;
    border: 1px solid pink;
}
</style>
