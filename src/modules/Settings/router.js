import general from './view/General.vue'
import city_general from './view/city_general.vue'
import vehicle_fare from './view/vehicle_fare.vue'
import geofencing from './view/geofencing.vue'
import manager_settings from './view/manager_settings.vue'
import enable_delivery from './view/enable_delivery.vue'

export default {
  routes: [
    {
      path: '/general',
      name: 'general',
      component: general,
      meta: {
        pageTitle: 'General Setting',
        breadcrumb: [
          {
            text: 'General Setting',
            active: true,
          },
        ],
      },
    },
    {
      path: '/city_general',
      name: 'city_general',
      component: city_general,
      meta: {
        pageTitle: 'City Setting',
        breadcrumb: [
          {
            text: 'City Setting',
            active: true,
          },
        ],
      },
    },
    {
      path: '/vehicle_fare',
      name: 'vehicle_fare',
      component: vehicle_fare,
      meta: {
        pageTitle: 'Vehicle Fare Setting',
        breadcrumb: [
          {
            text: 'Vehicle Fare Setting',
            active: true,
          },
        ],
      },
    },
    {
      path: '/geofencing',
      name: 'geofencing',
      component: geofencing,
      meta: {
        pageTitle: 'Geofencing',
        breadcrumb: [
          {
            text: 'Geofencing',
            active: true,
           },
        ],
      },
    },
    {
      path: '/manager_settings',
      name: 'manager_settings',
      component: manager_settings,
      meta: {
        pageTitle: 'Manager Settings',
        breadcrumb: [
          {
            text: 'Manager Settings',
            active: true,
          },
        ],
      },
    },
    {
      path: '/enable_delivery',
      name: 'enable_delivery',
      component: enable_delivery,
      meta: {
        pageTitle: 'Enable Delivery',
        breadcrumb: [
          {
            text: 'Enable Delivery',
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
