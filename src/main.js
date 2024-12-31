import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";

// import styles
import "./main.css";

import axios from "axios";

const app = createApp(App);

// set base url for axios
axios.defaults.baseURL = "http://localhost:3000/api";

// attach axios to the app instance globally
app.config.globalProperties.$axios = axios;

app.use(createPinia());
app.mount("#app");
