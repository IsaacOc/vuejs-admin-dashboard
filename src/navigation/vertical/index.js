export default [
  {
    title: 'Dashboard',
    route: 'home',
    icon: 'GridIcon',
  },
  {
    title: 'Rides',
    icon: 'TruckIcon',
    children: [
      {
        title: 'Ongoing Rides',
        route: 'ongoing-rides',
        icon: 'ridIcon',
      },
      {
        title: 'Scheduled Rides',
        route: 'scheduled-routes',
        icon: 'ridIcon',
      },
      {
        title: 'Completed Rides',
        route: 'completed-rides',
        icon: 'ridIcon',
      },
      {
        title: 'Cancelled Rides',
        route: 'cancelled-rides',
        icon: 'ridIcon',
      },
      {
        title: 'Missed Rides',
        route: 'missed-rides',
        icon: 'ridIcon',
      },
    ],
  },
  {
    title: 'PickUp And Delivery',
    route: 'pickup',
    icon: 'ShoppingCartIcon',
  },
  {
    title: 'Map View',
    route: 'map',
    icon: 'CompassIcon',
  },
  {
    title: 'Manual Dispatch',
    route: 'manual',
    icon: 'TruckIcon',
  },
  {
    title: 'Contact Drivers',
    route: 'contact-driver',
    icon: 'MailIcon',
  },
  {
    title: 'Dynamics Pricing',
    route: 'dynamics-pricing',
    icon: 'ZapIcon',
  },
  {
    title: 'Customer',
    icon: 'UserIcon',
    children: [
      {
        title: 'Active Customer',
        route: 'customer',
        icon: 'ridIcon',
      },
    ],
  },
  {
    title: 'Driver',
    icon: 'UserIcon',
    children: [
      {
        title: 'Active Driver',
        route: 'active-driver',
        icon: 'ridIcon',
      },
      {
        title: 'Deactivated Drivers',
        route: 'deactivated-driver',
        icon: 'ridIcon',
      },
      {
        title: 'Driver Enrollment',
        route: 'enroll-driver',
        icon: 'ridIcon',
      },
      {
        title: 'Leader Board',
        route: 'leader-board',
        icon: 'ridIcon',
      },
      {
        title: 'Driver Performance',
        route: 'performance',
        icon: 'ridIcon',
      },
      {
        title: 'Ride Request',
        route: 'ride-request',
        icon: 'ridIcon',
      },
    ],
  },
  {
    title: 'Promotions',
    icon: 'MailIcon',
    children: [
      {
        title: 'City wide',
        route: 'city',
        icon: 'ridIcon',
      },
      {
        title: 'Coupons',
        route: 'coupon',
        icon: 'ridIcon',
      },
      {
        title: 'Referrals',
        route: 'referrals',
        icon: 'ridIcon',
      },
    ],
  },
  {
    title: 'Chat Support',
    route: 'chat',
    icon: 'HelpCircleIcon',
  },
  {
    title: 'Analytics',
    route: 'analytics',
    icon: 'BarChartIcon',
  },
  {
    title: 'Pop Up',
    icon: 'ExternalLinkIcon',
    children: [
      {
        title: 'View Popup',
        route: 'pop',
        icon: 'ridIcon',
      },
      {
        title: 'Create Popup',
        route: 'create',
        icon: 'Filecon',
      },
      {
        title: 'Schedule Popup',
        route: 'schedule',
        icon: 'FilIcon',
      },
      {
        title: 'Scheduled Popups',
        route: 'scheduled',
        icon: 'Filecon',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'SettingsIcon',
    children: [
      {
        title: 'General Settings',
        route: 'general',
        icon: 'ridIcon',
      },
      {
        title: 'City Settings',
        route: 'city_general',
        icon: 'ileIcon',
      },
      {
        title: 'Vehicle Fare Setting',
        route: 'vehicle_fare',
        icon: 'ileIcon',
      },
      {
        title: 'Geofencing',
        route: 'geofencing',
        icon: 'ileIcon',
      },
      {
        title: 'Managers Settings',
        route: 'manager_settings',
        icon: 'ileIcon',
      },
      {
        title: 'Enable Delivery',
        route: 'enable_delivery',
        icon: 'ileIcon',
      },
    ],
  },
]
