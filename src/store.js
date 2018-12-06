import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// these are our 'global variables'
  state: {
	varOne: '',
	varTwo: '',
	varThree: ''
  },
  // when you call one of these functions, it will return our global variable
  getters: {
	  getVarOne: state => {
		  return state.varOne
	  },
	  getVarTwo: state => {
		  return state.varTwo
	  },
	  getVarThree: state => {
		  return state.varThree
	  }
  },
  // mutations are used in conjunction with actions to change the data in our 'global variables' so that they work sychronysly
  mutations: {
	addVarOne(state, varOne){
		state.varOne = varOne
	},
	addVarTwo(state, varTwo){
		state.varTwo = varTwo
	},
	addVarThree(state, varThree){
		state.varThree = varThree
	}
  },
  // actions are what we call in our code in order to automatically call our mutations which then change our data
  // in order to call our actions, we use this.$store.dispatch('addVarOne', ourVariableThatWillBeSent);
  actions: {
	addVarOne({commit}, payload){
		commit('addVarOne', payload)
	},
	addVarTwo({commit}, payload){
		commit('addVarTwo', payload)
	},
	addVarThree({commit}, payload){
		commit('addVarThree', payload)
	}
  }
})
