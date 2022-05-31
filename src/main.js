import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CountryFlag from "vue-country-flag-next";

createApp(App).use(router).use(CountryFlag).mount("#app");
