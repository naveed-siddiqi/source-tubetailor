import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(VueApexCharts)
  .use(pinia)
  .use(VueClipboard)
  .mount("#app");
