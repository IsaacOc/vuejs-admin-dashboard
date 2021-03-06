import analytic from './view/analytics.vue'

export default {
  routes: [
    {
      path: '/analytics',
      name: 'analytics',
      component: analytic,
      meta: {
        pageTitle: 'Analytics',
        breadcrumb: [
          {
            text: 'Analytics',
            active: true,
          },
        ],
      },
    },
  ],
  beforeEach: (to, from, next) => {
    next()
  },
}
