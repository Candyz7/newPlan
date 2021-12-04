import Vue from 'vue'
import confirm from './confirm.vue';

function showModal (propsData) {
    const Modal = Vue.extend(confirm)
    //创建元素  插入到body里面
    const div = document.createElement('div')
    document.body.appendChild(div)
    //过滤出除了closeCallback、 okCallback的其他属性  赋值给data
    const {closeCallback, okCallback, ...data} = propsData
    const ele = new Modal({  //创建一个实例
        propsData: {
            ...data,
            closeCallback: () => {
                if(propsData.closeCallback) propsData.closeCallback()
                ele.$el.remove()  //移除此元素
            },
            okCallback: () => {
                if(propsData.okCallback) propsData.okCallback()
                ele.$el.remove()
            }
        }
    }).$mount(div)  //挂载到元素上
    
}
function modalRegistry() {
    Vue.prototype.$myConfirm = showModal
}
export default modalRegistry;
