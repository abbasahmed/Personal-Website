import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify';
import VueTypedJs from 'vue-typed-js';
import router from './router';

Vue.config.productionTip = true

const requireComponent = require.context(
  './components',
  false,
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.use(VueParticles)
Vue.use(VueTypedJs)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
