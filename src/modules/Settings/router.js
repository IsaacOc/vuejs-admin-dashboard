import general from './view/General.vue'
import citygeneral from './view/city_general.vue'
import vehiclefare from './view/vehicle_fare.vue'
import geofencing from './view/geofencing.vue'
import managersettings from './view/manager_settings.vue'
import enabledelivery from './view/enable_delivery.vue'

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
      component: citygeneral,
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
      component: vehiclefare,
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
      component: managersettings,
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
      component: enabledelivery,
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
