import dynamics from './view/dynamics.vue'
import addynamics from './view/add_dynamics.vue'

export default {
  routes: [
    {
      path: '/dynamics-pricing',
      name: 'dynamics-pricing',
      component: dynamics,
      meta: {
        pageTitle: 'Dynamics Pricing',
        breadcrumb: [
          {
            text: 'Dynamics Pricing',
            active: true,
          },
        ],
      },
    },
    {
      path: '/addynamics',
      name: 'addynamics',
      component: addynamics,
      meta: {
        pageTitle: 'Add Dynamics',
        breadcrumb: [
          {
            text: 'Add Dynamics',
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
