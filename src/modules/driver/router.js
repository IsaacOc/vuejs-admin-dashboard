import driver from './view/activedriver.vue'
import deactived from './view/deactived.vue'
import enroll from './view/Enrollment.vue'
import leader from './view/LeaderBord.vue'
import performance from './view/performance.vue'
import request from './view/request.vue'

export default {
  routes: [
    {
      path: '/active-driver',
      name: 'active-driver',
      component: driver,
      meta: {
        pageTitle: 'Active Driver',
        breadcrumb: [
          {
            text: 'Active Driver',
            active: true,
          },
        ],
      },
    },
    {
      path: '/deactivated-driver',
      name: 'deactivated-driver',
      component: deactived,
      meta: {
        pageTitle: 'Deactivated Driver',
        breadcrumb: [
          {
            text: 'Deactivated Driver',
            active: true,
          },
        ],
      },
    },
    {
      path: '/enroll-driver',
      name: 'enroll-driver',
      component: enroll,
      meta: {
        pageTitle: 'Enrollment Driver',
        breadcrumb: [
          {
            text: 'Enrollment Driver',
            active: true,
          },
        ],
      },
    },
    {
      path: '/leader-board',
      name: 'leader-board',
      component: leader,
      meta: {
        pageTitle: 'Leader Board',
        breadcrumb: [
          {
            text: 'Leader Board',
            active: true,
          },
        ],
      },
    },
    {
      path: '/performanced',
      name: 'performance',
      component: performance,
      meta: {
        pageTitle: 'Driver Performance',
        breadcrumb: [
          {
            text: 'Driver Performance',
            active: true,
          },
        ],
      },
    },
    {
      path: '/ride-request',
      name: 'ride-request',
      component: request,
      meta: {
        pageTitle: 'Ride Request',
        breadcrumb: [
          {
            text: 'Ride Request',
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
