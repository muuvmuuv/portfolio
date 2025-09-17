import "@fontsource-variable/inter";
import "./icons";
import "./main.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import { routes } from "./routes";

const app = createApp(App);

const router = createRouter({
	history: createWebHistory(),
	routes,
});
app.use(router);

app.component("FaIcon", FontAwesomeIcon);

app.mount("#app");
