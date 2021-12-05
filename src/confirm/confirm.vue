<template>
<div class="modal-container">
    <div class="modal">
        <div class="header">
            <span class="title" v-html="title"></span>
        </div>
        <div class="content" v-html="content"></div>
        <div class="footer">
            <button class="btncancel-btn" @click="closeClick">{{ cancelText }}</button>
            <button class="btnok-btn" @click="okClick">{{ okText }}</button>
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
            default: '标题'
        },
        content: {
            type: String,
            default: '这里的内容随便更改，写长一点显得好看点,没错我就试一下换行'
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
.header{
    font-weight: bold;
    font-size: 16px;
    margin-top:10px;
}
.content {
    margin: 10px 10px 0px 10px;
    text-align: center;
    height: 55px;
}
.footer {
    display: inline-block;
}
.btncancel-btn {
    color: #FFFFFF;
    background-color: rgb(96, 63, 154);
    margin-right:5px;
    width: 80px;
    height: 35px;
}
.btnok-btn {
    color: #FFFFFF;
    background-color: rgb(96, 63, 154);
    margin-left: 5px;
    width: 80px;
    height: 35px;
}
.modal{
    position: fixed;
    text-align: center;
    margin-bottom: 270px;
    width: 300px;
    height: 150px;
    background-color:#ffffff;
    border: 1px solid rgb(224, 224, 224);
    border-radius:15px;
}
</style>
