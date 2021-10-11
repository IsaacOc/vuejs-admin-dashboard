import create from './view/create.vue'
import pop from './view/pop.vue'
import schedule from './view/schedule.vue'
import scheduled from './view/scheduled.vue'

export default {
  routes: [
    {
      path: '/create',
      name: 'create',
      component: create,
      meta: {
        pageTitle: 'Create Popup',
        breadcrumb: [
          {
            text: 'Create Popup',
            active: true,
          },
        ],
      },
    },
    {
      path: '/pop',
      name: 'pop',
      component: pop,
      meta: {
        pageTitle: 'View Popup',
        breadcrumb: [
          {
            text: 'View Popup',
            active: true,
          },
        ],
      },
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
      meta: {
        pageTitle: 'Schedule Popup',
        breadcrumb: [
          {
            text: 'Schedule Popup',
            active: true,
          },
        ],
      },
    },
    {
      path: '/scheduled',
      name: 'scheduled',
      component: scheduled,
      meta: {
        pageTitle: 'Scheduled Popup',
        breadcrumb: [
          {
            text: 'Scheduled Popup',
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
