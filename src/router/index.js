import Vue from 'vue'

import Router from 'vue-router'

import Fruitlist from '../components/Fruitlist'

import Purchase from '../components/Purchase'

import apple from '../components/apple'

Vue.use(Router)



export default new Router({

  routes:[

		{

			path:'/',

			component:Fruitlist

		},

		{

			path:'/purchase',

			component:Purchase

    },
    {

			path:'/apple',

			component:apple

		}

	]

})