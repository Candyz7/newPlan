import Vue from 'vue'
import confirm from './confirm.vue';

function showModal (propsData) {
    const Modal = Vue.extend(confirm)
    const div = document.createElement('div')
    document.body.appendChild(div)

    const {closeCallback, okCallback, ...data} = propsData
    const ele = new Modal({
        propsData: {
            ...data,
            closeCallback: () => {
                if(propsData.closeCallback) propsData.closeCallback()
                ele.$el.remove()
            },
            okCallback: () => {
                if(propsData.okCallback) propsData.okCallback()
                ele.$el.remove()
            }
        }
    }).$mount(div)
    
}
function modalRegistry() {
    Vue.prototype.$myConfirm = showModal
}
export default modalRegistry;
