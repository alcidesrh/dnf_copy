export default [
  
  {
    path: '/elite',
    name: 'elite',
    component: () => import('../views/User.vue'),
    redirect: { name: 'elite_list' },
    children: [
      {
        name: 'elite_list',
        path: '',
        component: () => import('../components/user/ListElite.vue')
      },
      {
        name: 'elite_profile',
        path: ':id',
        component: () => import('../components/user/Profile.vue')
      },
      {
        name: 'elite_edit_profile',
        path: 'edit/:id',
        component: () => import('../components/user/EditEliteProfile.vue')
      }
    ]
  },
  {
    path: '/broker',
    name: 'broker',
    component: () => import('../views/User.vue'),
    redirect: { name: 'broker_list' },
    children: [
      {
        name: 'broker_list',
        path: '',
        component: () => import('../components/user/ListBroker.vue')
      },
      {
        name: 'broker_profile',
        path: ':id',
        component: () => import('../components/user/Profile.vue')
      },
      {
        name: 'broker_edit_profile',
        path: 'edit/:id',
        component: () => import('../components/user/EditBrokerProfile.vue')
      }
    ]
  },
  {
    path: '/representative',
    name: 'representative',
    component: () => import('../views/User.vue'),
    redirect: { name: 'representative_list' },
    children: [
      {
        name: 'representative_list',
        path: '',
        component: () => import('../components/user/List.vue')
      },
      {
        name: 'representative_profile',
        path: ':id',
        component: () => import('../components/user/Profile.vue')
      },
      {
        name: 'representative_edit_profile',
        path: 'edit/:id',
        component: () => import('../components/user/EditRepresentativeProfile.vue')
      }
    ]
  }
];
