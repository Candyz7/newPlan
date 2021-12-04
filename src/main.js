// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import newTable from '@/components/newTable';
import 'vant/lib/index.css';
import { Button, Form, Field, Icon } from 'vant';

Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(Icon);
import toastRegistry from '@/components/toast.js';
Vue.use(toastRegistry);
import myConfirmRegistry from '@/confirm/confirm.js';
Vue.use(myConfirmRegistry);
import Vuex from 'vuex'
Vue.use( Vuex );

const store = new Vuex.Store({
  state:{
    products: [
      {name: '快船', price: '64'},
      {name: '湖人', price: '92'},
      {name: '勇士', price: '78'},
      {name: '太阳', price: '74'},
  ]
  },
  getters:{ //添加getters
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  mutations:{ //添加mutations
    disqualification (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    }
  },
  actions:{ //添加actions
    disqualificationAsync( context, payload ) {
      setTimeout( () => {
        context.commit( 'disqualification', payload ); //context提交
      }, 2000)
    }
  }
})

window.eventBus = new Vue();   // 注册全局事件对象
Vue.prototype.$event = new Vue();

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(newTable);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
