<template>
  <div>
    <vuexone :products="products"></vuexone>
    <vuextwo :products="products"></vuextwo>
  </div>
</template>

<script>
import vuexone from '@/components/vuexone'
import vuextwo from '@/components/vuextwo'
export default {
    components: {
        vuexone, vuextwo
     },
    data() {
        return {
            products: [
                {name: '快船', price: '64'},
                {name: '湖人', price: '92'},
                {name: '勇士', price: '78'},
                {name: '太阳', price: '74'},
            ]
        }
    },
    created() {
    console.log('注册页面组件创建了')
    },
    destroyed() {
        console.log('注册页面组件销毁了')
    },
    methods: {

    }
}
</script>

<style>
</style>
