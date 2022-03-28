import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:claimRef/claim-status/',
    name: 'Claim Status',

    component: () => import(/* webpackChunkName: "about" */ '../allViews/ClaimStatus.vue')
  },
  {
    path: '/:claimRef/my-claim',
    name: 'View Claim',

    component: () => import(/* webpackChunkName: "about" */ '../allViews/ViewClaim.vue')
  },
  {
    path: '/:claimRef/accept-offer',
    name: 'Acceptance',

    component: () => import(/* webpackChunkName: "about" */ '../allViews/AcceptanceStatus.vue')
  },
  {
    path: '/company-dash',
    name: 'Company Dash',

    component: () => import(/* webpackChunkName: "about" */ '../allViews/CompanyDash.vue')
  },
  {
    path: '/:claimRef/history',
    name: 'History',

    component: () => import(/* webpackChunkName: "about" */ '../allViews/History.vue')
  },
  {
    path: '/layout',
    name: 'Layout',

    component: () => import(/* webpackChunkName: "about" */ '../allViews/Layout.vue')
  },
  {
    path: '/:claimRef/company-inbox',
    name: 'Company Inbox',

    component: () => import(/* webpackChunkName: "about" */ '../allViews/CompanyInbox.vue')
  },
  {
    path: '/:claimRef/escalation',
    name: 'Escalation',

    component: () => import(/* webpackChunkName: "about" */ '../allViews/Escalation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
