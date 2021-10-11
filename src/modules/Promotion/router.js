import city from './view/City.vue'
import coupons from './view/coupons.vue'
import referrals from './view/Referrals.vue'

export default {
  routes: [
    {
      path: '/city',
      name: 'city',
      component: city,
      meta: {
        pageTitle: 'City',
        breadcrumb: [
          {
            text: 'City',
            active: true,
          },
        ],
      },
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupons,
      meta: {
        pageTitle: 'Coupons',
        breadcrumb: [
          {
            text: 'Coupons',
            active: true,
          },
        ],
      },
    },
    {
      path: '/referrals',
      name: 'referrals',
      component: referrals,
      meta: {
        pageTitle: 'Referrals',
        breadcrumb: [
          {
            text: 'Referrals',
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
