
require('./bootstrap');

import "core-js/fn/object/assign";

import Vue from 'vue';
import ListingPage from '../components/ListingPage.vue';

const app = new Vue({
    el: '#app',
    // render: h => h(ListingPage)
    render(element) {
        return element(ListingPage);
    }
});