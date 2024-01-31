import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';
import EventsPage from './pages/EventsPage.vue';
import PackagesPage from './pages/PackagesPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
         {
            path: '/chi-siamo',
            name: 'about',
            component: AboutUsPage
        },
        
        {
            path: '/eventi',
            name: 'events',
            component: EventsPage
        },
        {
            path: '/packages',
            name: 'packages',
            component: PackagesPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        },
    ]
});

export { router };