import manual from './view/manual.vue'

export default {
  routes: [
    {
      path: '/manual',
      name: 'manual',
      component: manual,
      meta: {
        pageTitle: 'Manual Dispatch',
        breadcrumb: [
          {
            text: 'Manual Dispatch',
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
