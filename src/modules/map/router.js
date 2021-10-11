import map from './view/map.vue'

export default {
  routes: [
    {
      path: '/map',
      name: 'map',
      component: map,
      meta: {
        pageTitle: 'Map View',
        breadcrumb: [
          {
            text: 'Map View',
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
