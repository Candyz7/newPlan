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
    methods: {

    }
}
</script>

<style>
</style>
