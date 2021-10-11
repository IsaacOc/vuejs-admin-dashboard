import Customer from './view/customer.vue'

export default {
  routes: [
    {
      path: '/customer',
      name: 'customer',
      component: Customer,
      meta: {
        pageTitle: 'Customer',
        breadcrumb: [
          {
            text: 'Customer',
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
