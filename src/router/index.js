import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home';
import About from '../views/about';
import Layout from '../views/layout';
Vue.use(VueRouter);

const router =new VueRouter({routes: [
    {
      path: '/',
      redirect: {name: 'home'},
      component: Layout,
      children: [
        {
          path: "home",
          name: "home",
          component: Home,
          meta: {
            title: 'Home'
          }
        },
        {
          path: "about",
          name: "about",
          component: About,
          meta: {
            title: 'About'
          }
        },
      ]
    }
  ]});

export default router;
