import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
//import VueTouch from 'vue-touch'
var VueTouch = require('vue-touch')
import bootstrap from 'bootstrap/dist/css/bootstrap.css'


Vue.use(Router);
Vue.use(Resource);
Vue.use(VueTouch);


import home from './page/home.vue'
var router = new Router({
  abstract: true,
  hashbang: false
});

router.map({
	'/home':{
		component:home
	},
});
router.start(App, '#app');