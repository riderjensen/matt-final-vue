import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vueResource from 'vue-resource'
import router from './router'
import store from './store'

Vue.use(vueResource)

Vue.directive('upper', {
  bind(el, binding) {
    el.style.textTransform = 'uppercase';
  }
})

Vue.directive('highlight', {
  // bind hook - once directive is attached
  // inserted hook - inserted into parent node
  // updated hook - once component is updated without children
  // componenetUpdated hook - once component is updated with children
  // unbind hook - once directive is removed

  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    if(binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }

});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
