import Vue from "vue";
import Vuex from "vuex";
import { store } from "./store/store";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import CountryList from "./components/CountryList.vue";
import AddItem from "./components/AddItem.vue";
import VueRouter from "vue-router";

Vue.use(Element);

Vue.use(Vuex);

Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.config.devtools = true;

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: CountryList },
    { path: "/additem", component: AddItem }
  ]
});

new Vue({
  store,
  router,
  Element,
  render: h => h(App)
}).$mount("#app");
