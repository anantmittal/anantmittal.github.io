import Vue from "vue";
import Router from "vue-router";

import Landing from "@/components/Landing";
import Publications from "@/components/Publications";
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
            path: "/publications",
            name: "Publications",
            component: Publications,
        },
        {
            path: "/reading",
            name: "Reading",
            component: Reading,
        },
    ],
});
