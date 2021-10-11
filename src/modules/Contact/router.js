import Customer from './view/contactDriver.vue'

export default {
  routes: [
    {
      path: '/contact-driver',
      name: 'contact-driver',
      component: Customer,
      meta: {
        pageTitle: 'Contact Driver',
        breadcrumb: [
          {
            text: 'Contact Driver',
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
