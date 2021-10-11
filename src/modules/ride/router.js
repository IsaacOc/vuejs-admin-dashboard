import Rides from './view/ride.vue'
import Completed from './view/completeRide.vue'
import Concelled from './view/concelledRides.vue'
import Missed from './view/missedRides.vue'

export default {
  routes: [
    {
      path: '/scheduled-routes',
      name: 'scheduled-routes',
      component: Rides,
      meta: {
        pageTitle: 'Scheduled Rides',
        breadcrumb: [
          {
            text: 'Scheduled Rides',
            active: true,
          },
        ],
      },
    },
    {
      path: '/completed-rides',
      name: 'completed-rides',
      component: Completed,
      meta: {
        pageTitle: 'Completed Rides',
        breadcrumb: [
          {
            text: 'Completed Rides',
            active: true,
          },
        ],
      },
    },
    {
      path: '/cancelled-rides',
      name: 'cancelled-rides',
      component: Concelled,
      meta: {
        pageTitle: 'Cancelled Rides',
        breadcrumb: [
          {
            text: 'Cancelled Rides',
            active: true,
          },
        ],
      },
    },
    {
      path: '/missed-rides',
      name: 'missed-rides',
      component: Missed,
      meta: {
        pageTitle: 'Missed Rides',
        breadcrumb: [
          {
            text: 'Missed Rides',
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
