import Vue from 'vue'

import router from './router';

import store from './store';

import vuetify from './vuetify'

import App from './App.vue'

import moment from 'moment'

import numeral from 'numeral';

import numFormat from 'vue-filter-number-format';

import { abilitiesPlugin } from '@casl/vue'

Vue.use(abilitiesPlugin, store.state.user.ability)
 
Vue.filter('numFormat', numFormat(numeral));

Vue.filter('dateFormat', function (value) {
  return moment(value).format("MM/DD/YYYY");
});

import axios from 'axios';  
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrfToken
};

new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  render: h => h(App)
})

