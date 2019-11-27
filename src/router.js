import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Work from './views/Work.vue';
import Skills from './views/Skills.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Resume from './views/Resume.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Work',
      name: 'work',
      component: Work,
      props: true
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/resume',
      name: 'resume',
      meta: {hideNavigation: true},
      component: Resume
    }
  ]
});