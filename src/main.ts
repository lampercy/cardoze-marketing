import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import 'normalize.css';

import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
