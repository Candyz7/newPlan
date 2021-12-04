<template>
    <div class="vuex-one">
        <h2>vuex-one</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{product.name}}</span>
                <span class="price">{{product.price}}分</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'vuexOne',
    props: {
        // products: {
        //     type: Array,
        // }
    },
    data () {
        return {
            products : this.$store.getters.saleProducts //获取store中state的数据
        }
    }
}
</script>

<style scoped>
.vuex-one {
    background-color: pink;
    padding: 30px 10px;
}
.vuex-one li {
    display: inline-block;
    margin: 8px;
    padding: 10px;
    background-color: rgb(225, 225, 225);
}
.price {
    color: rgb(255, 46, 31);
}
</style>