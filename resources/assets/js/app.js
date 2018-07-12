
require('./bootstrap');

window.Vue = require('vue');
import { populateAmenitiesAndPrices } from './helpers';

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

let model = JSON.parse(window.roomwav_listing_model);
model = populateAmenitiesAndPrices(model);

import HeaderImage   from '../components/HeaderImage.vue';
import ImageCarousel from '../components/ImageCarousel.vue';
import ModalWindow   from '../components/ModalWindow.vue';
import FeatureList   from '../components/FeatureList.vue';

// ooh la

const app = new Vue({
    el: '#app',

    data: Object.assign(model, {
        contracted: true
    }),

    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        }
    },

    components: {
        ImageCarousel,
        ModalWindow,
        HeaderImage,
        FeatureList
    }
});