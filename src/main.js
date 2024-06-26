import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.config.devtools = true;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
