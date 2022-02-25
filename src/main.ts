import "tailwindcss/tailwind.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import Home from "./components/Home.vue";

const history = createWebHistory();

const router = createRouter({
	history,
	routes: [
		{
			name: "home",
			path: "/",
			component: Home,
		},
		{
			name: "page-one",
			path: "/page-one",
			component: PageOne,
		},
		{
			name: "page-two",
			path: "/page-two",
			component: PageTwo,
		},
	],
});

createApp(App).use(router).mount("#app");
