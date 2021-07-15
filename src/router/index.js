import Vue from "vue";
import Router from "vue-router";

import Landing from "@/components/Landing";
import Reading from "@/components/Reading";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Landing",
			component: Landing,
		},
		{
			path: "/reading",
			name: "Reading",
			component: Reading,
		},
	],
});
