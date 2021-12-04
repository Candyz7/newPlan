import Vue from 'vue'
import toast from './toast.vue';

function showToast(text, setime = 2000) {
    const toastConst = Vue.extend(toast);
    const toastDOM = new toastConst({
        el: document.createElement('div'),
        data() {
            return {
                text: text,
                show: true
            }
        }
    });
    document.body.appendChild(toastDOM.$el)
    setTimeout(() => {
        toastDOM.show = false
    }, setime)
}

function toastRegistry() {
    Vue.prototype.$toast = showToast;
}
export default toastRegistry;

