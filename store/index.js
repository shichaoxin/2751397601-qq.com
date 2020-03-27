import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import dataStore from './modules/data.js'

Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		dataStore
	},
	getters,
	
})
