import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import stores from "@/stores";

import "./styles";

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.use(stores);
app.mount("#app");
