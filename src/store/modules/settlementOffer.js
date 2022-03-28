import axios from 'axios'
const SettlementModule = {
  state: {
  },
  mutations: {

  },
  actions: {
    async acceptSettlementOffer (context, payload) {
      const claimId = payload.claimId
      const settlementUuid = 'c525ff25-0248-4452-a246-926031e41d7a'
      const acceptance = {
        claim_id: claimId,
        accepted: true
      }
      axios
        .post(`${process.env.VUE_APP_BACKEND}/claims/${claimId}/so/${settlementUuid}`, acceptance)
        .then(res => {
          console.log(res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    async rejectSettlementOffer (context, payload) {
      const claimId = payload.claimId
      const settlementUuid = 'c525ff25-0248-4452-a246-926031e41d7a'
      const rejection = {
        claim_id: claimId,
        accepted: false,
        rejected_reason: payload.rejected_reason
      }
      if (rejection.rejected_reason) {
        axios
          .post(`${process.env.VUE_APP_BACKEND}/claims/${claimId}/so/${settlementUuid}`, rejection)
          .then(res => {
            console.log(res.data)
            return res.data
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        console.log('No data present, form not submitted.')
      }
    },
    async fetchSettlementOffer (context, payload) {
      const claimId = payload.claimId
      const settlementUuid = payload.settlementUuid
      const data = payload.data
      axios
        .get(`${process.env.VUE_APP_BACKEND}/claims/${claimId}/so/${settlementUuid}`, data)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

export default SettlementModule
