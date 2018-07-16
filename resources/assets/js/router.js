
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage    from '../components/HomePage.vue';
import ListingPage from '../components/ListingPage.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage,
            name: 'home'
        },
        {
            path: '/listing/:listing',
            component: ListingPage,
            name: 'listing'
        }
    ]
});
