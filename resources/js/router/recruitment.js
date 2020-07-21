export default {
    path: '/recruitment',
    name: 'recruitment',
    component: () => import('../views/Recruitment.vue'),
    redirect: { name: 'recruitment_list' },
    children: [
      {
        name: 'recruitment_list',
        path: '',
        component: () => import('../components/recruitment/List.vue')
      },
      {
        name: 'recruitment_profile',
        path: ':id',
        component: () => import('../components/recruitment/Profile.vue')
      }
    ]
  }
