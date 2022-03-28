
// defines state to prevent standard
// from throwing an error

import Vue from 'vue'
import Vuex from 'vuex'
import ClaimsModule from './modules/claims'
import AllClaims from './modules/allClaims'
import UserModule from './modules/user'
import RfiModule from './modules/rfi'
import SettlementModule from './modules/settlementOffer'
import StripeModule from './modules/stripe'
import EscalationModule from './modules/escalation'
import CompanyClaimsList from './modules/companyClaimsList'
import DateTime from './modules/dateTime'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ClaimsModule,
    UserModule,
    RfiModule,
    SettlementModule,
    StripeModule,
    EscalationModule,
    CompanyClaimsList,
    DateTime,
    AllClaims
  }
})
