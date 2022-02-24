import Vue from "vue";

//自定义指令
Vue.directive('focus', {
    inserted: function (el) {
        el.focus();//聚焦
    }
});
Vue.directive('preventReClick', {
    inserted(el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true
                setTimeout(() => {
                    el.disabled = false
                }, binding.value || 2000)
            }
        })
    },
})