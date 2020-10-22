import "bootstrap/dist/css/bootstrap.min.css";
import Vue from 'vue'
import router from './router';
import App from './App.vue'
import { provider } from "./services/providers";
import ChildComponent from "./components/ChildComponent";
import CKEditor from '@ckeditor/ckeditor5-vue';

import './navigation';
Vue.prototype.$services  = provider;
Vue.config.productionTip = false
Vue.component("child-component", ChildComponent);
Vue.use( CKEditor );

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
