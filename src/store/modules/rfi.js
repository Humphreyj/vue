import axios from 'axios'
const RfiModule = {
  state: {
    rfi: {}
  },
  mutations: {
    setRfiData (state, data) {
      state.rfi = data
    }
  },
  actions: {
    async respondToRfi (context, payload) {
      const claimId = payload.claimId
      const rfiUuid = payload.rfiUuid
      const data = payload.data
      console.log(claimId, rfiUuid, data)
      axios
        .post(`${process.env.VUE_APP_BACKEND}/claims/${claimId}/rfi/${rfiUuid}`, data)
        .then(res => {
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    async fetchRfi (context, payload) {
      const claimId = payload.claimId
      const rfiUuid = payload.rfiUuid
      console.log(claimId, rfiUuid)
      axios
        .get(`${process.env.VUE_APP_BACKEND}/claims/${claimId}/rfi/${rfiUuid}`)
        .then(res => {
          context.commit('setRfiData', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

}

export default RfiModule
