const { BASE_URL, PORT } = require('./api');

window._ = require('lodash');

window.$ = window.jQuery = require('jquery');

// require('bootstrap/dist/js/bootstrap.bundle.min');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = BASE_URL;
