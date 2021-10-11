import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Dashboard',
        breadcrumb: [
          {
            text: 'Dashboard',
            active: true,
          },
        ],
      },
    },
    {
      path: '/ongoing-rides',
      name: 'ongoing-rides',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Ongoing Rides',
        breadcrumb: [
          {
            text: 'Ongoing Rides',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
    {
      path: '/pickup',
      name: 'pickup',
      beforeEnter() {
        // Put the full page URL including the protocol http(s) below
        window.location.href = 'https://fatafat.ec2dashboard.com'
      },
    },
    {
      path: '/chat',
      name: 'chat',
      beforeEnter() {
        // Put the full page URL including the protocol http(s) below
        window.location.href = 'https://google.com'
      },
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
