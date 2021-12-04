<template>
    <div class="vuex-two">
        <h2>vuex-two</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{product.name}}</span>
                <span class="price">{{product.price}}分</span>
            </li>
            <button @click="disqualification">犯规扣分</button>
            <button @click="disqualificationAsync">异步延迟扣分</button>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        // products: {
        //     type: Array,
        // }
    },
    data () {
        return {
            products: this.$store.state.products  //获取store中state的数据
        }
    },
    methods: {
        disqualification() {
            this.$store.commit('disqualification', 2); //提交`disqualification,payload为2
        },
        disqualificationAsync() {
            this.$store.dispatch('disqualificationAsync', 5); //分发actions中的disqualificationAsync这个异步函数
        }
    }
}
</script>

<style scoped>
.vuex-two {
    background-color: aqua;
    margin-bottom: 30px;
    padding: 10px 20px;
}
.vuex-two li {
    margin: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price {
    color: pink;
}
</style>
