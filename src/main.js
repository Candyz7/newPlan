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

window.eventBus = new Vue();   // 注册全局事件对象
Vue.prototype.$event = new Vue();

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(newTable);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
