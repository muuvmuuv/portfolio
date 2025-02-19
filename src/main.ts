import "@fontsource-variable/inter";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import { routes } from "./routes";

import "./main.scss";
import "./icons";

const app = createApp(App);

const router = createRouter({
	history: createWebHistory(),
	routes,
});
app.use(router);

app.component("icon", FontAwesomeIcon);

app.mount("#app");
