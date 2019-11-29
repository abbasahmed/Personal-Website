import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/dist/vuetify.min.css';
import VueTypedJs from 'vue-typed-js';
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';


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

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueParticles)
Vue.use(VueTypedJs)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
