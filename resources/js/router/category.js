export default {
  path: '/category',
  name: 'category',
  component: () => import('../views/Category.vue'),
  redirect: { name: 'category_list' },
  children: [
    {
      name: 'category_list',
      path: '',
      component: () => import('../components/category/List')
    },
    {
      name: 'category_edit',
      path: ':id',
      component: () => import('../components/category/Profile.vue')
    },
    {
      name: 'category_new',
      path: 'new',
      component: () => import('../components/category/Profile.vue')
    }
  ]
};
