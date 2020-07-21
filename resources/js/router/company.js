export default {
  path: '/agencies',
  name: 'agencies',
  component: () => import('../views/Company.vue'),
  redirect: { name: 'list' },
  children: [
    {
      name: 'list',
      path: '',
      component: () => import('../components/company/List')
    },
    {
      name: 'profile',
      path: ':id',
      component: () => import('../components/company/Profile.vue')
    },
    {
      name: 'new',
      path: 'new',
      component: () => import('../components/company/Profile.vue')
    }
  ]
};
