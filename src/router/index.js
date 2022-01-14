import {createRouter, createWebHistory} from "vue-router";

import NotFound from "../views/NotFound";
import Home from "../views/Home";
import ProjectDetail from "../views/ProjectDetail";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/project-detail/:id',
        name: "project-detail",
        component: ProjectDetail,
        props: true
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;