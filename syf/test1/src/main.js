import Vue from 'vue'
import App from './App.vue'
import {router} from './router/router'
import './plugins/element.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueResource from 'vue-resource';
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)
Vue.use(VueResource)
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  components: { App },
  render: h => h(App),
}).$mount('#app')
