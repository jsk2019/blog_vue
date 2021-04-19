import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui'
import './assets/iconfont/iconfont.css'
import './assets/iconfont2/iconfont.css'
import './assets/iconfont3/iconfont.css'
import './assets/iconfont4/iconfont.css'
import './assets/iconfont5/iconfont.css'
import './assets/iconfont6/iconfont.css'
import './theme/element/index.css'
import Vuelazyload from 'vue-lazyload'
import store from "./store";
import VueQuillEditor from "vue-quill-editor";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import axios from 'axios'
//代码自动补全
import jshint from "jshint";
 window.JSHINT = jshint.JSHINT;

Vue.prototype.$axios = axios

Vue.use(VueCodeMirror,axios)


Vue.use(ElementUI)
Vue.config.productionTip = false;


Vue.use(Vuelazyload,{
  loading:'./assets/images/loading.png'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
