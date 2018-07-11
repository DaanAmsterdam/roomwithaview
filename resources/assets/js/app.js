
require('./bootstrap');

window.Vue = require('vue');
import { populateAmenitiesAndPrices } from './helpers';

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

let model = JSON.parse(window.roomwav_listing_model);
model = populateAmenitiesAndPrices(model);

import ImageCarousel from '../components/ImageCarousel.vue'

const app = new Vue({
    el: '#app',

    data: Object.assign(model, {
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
        },
        contracted: true,
        modalOpen: false,
    }),

    methods: {
        escapeKeyListener(evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },

    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },

    created: function() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },

    destroyed: function() {
        document.removeEventListener('keyup', this.escapeKeyListener);
    },

    components: {
        ImageCarousel
    }
});