import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import util from './store/util'

import user from './store/modules/user/user'

import broker from './store/modules/user/broker'

import elite from './store/modules/user/elite'

import representative from './store/modules/user/representative'

import company from './store/modules/company'

import role from './store/modules/role'

import recruitment from './store/modules/recruitment'

import category from './store/modules/category'

export default new Vuex.Store({
  modules: {
    util,
    user,
    broker, 
    company,
    elite,
    representative,
    recruitment,
    role,
    category
  }
})
