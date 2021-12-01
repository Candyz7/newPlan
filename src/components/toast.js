import Vue from 'vue'
import toast from './toast.vue';

const toastConst = Vue.extend(toast);

function showToast(text) {
    const toastDOM = new toastConst({
        el: document.createElement('div'),
        data() {
            return {
                text: text,
                show: true
            }
        }
    });

    document.body.appendChild(toastDOM.$el)

    setTimeout(() => {
        toastDOM.show = false
    },5000)
}

function toastRegistry() {
    Vue.prototype.$toast = showToast;
}

export default toastRegistry;