
require('./bootstrap');

window.Vue = require('vue');
import { populateAmenitiesAndPrices } from './helpers';

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

let model = JSON.parse(window.roomwav_listing_model);
model = populateAmenitiesAndPrices(model);

import ImageCarousel from '../components/ImageCarousel.vue';
import ModalWindow   from '../components/ModalWindow.vue';

const app = new Vue({
    el: '#app',

    data: Object.assign(model, {
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
        },
        contracted: true
    }),

    methods: {
        openModal() {
            this.$refs.imagemodal.modalOpen = true;
        }
    },

    components: {
        ImageCarousel,
        ModalWindow
    }
});