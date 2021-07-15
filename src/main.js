import Vue from "vue";
import App from "./App.vue";
import MathLive from "mathlive";
import Mathfield from "mathlive/dist/vue-mathlive.mjs";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";
import UUID from "vue-uuid";

import VueSession from 'vue-session'


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Mathfield, MathLive);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(UUID);


var options = {
  persist: true
}

Vue.use(VueSession, options)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
