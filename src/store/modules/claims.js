import axios from 'axios'

const ClaimsModule = {
  state: {
    claimData: 'Pending',
    claimRef: '',
    formSections: {
      name: {
        id: 0,
        sectionName: 'Name',
        fields: {
          first_name: {
            id: 'field-0',
            label: 'First Name',
            value: '',
            type: 'input'
          },
          last_name: {
            id: 'field-1',
            label: 'Last Name',
            value: '',
            type: 'input'
          }
        }
      },
      contact: {
        id: 1,
        sectionName: 'Contact',
        fields: {
          email: {
            id: 'field-2',
            label: 'Email',
            value: '',
            type: 'input'
          },
          phone: {
            id: 'field-3',
            label: 'Phone Number',
            value: '',
            type: 'input'
          }
        }
      },
      address: {
        id: 2,
        sectionName: 'Address',
        fields: {
          street_address: {
            id: 'field-4',
            label: 'Address',
            value: '',
            type: 'input'
          },
          city: {
            id: 'field-5',
            label: 'City',
            value: '',
            type: 'input'
          },
          state: {
            id: 'field-6',
            label: 'State',
            value: '',
            type: 'input'
          },
          zip: {
            id: 'field-7',
            label: 'Zip Code',
            value: '',
            type: 'input'
          }
        }
      },
      claimDetails: {
        id: 3,
        sectionName: 'Claim Details',
        fields: {
          dispute_text: {
            id: 'field-8',
            label: 'Dispute',
            value: '',
            type: 'text-area'
          },
          other_resolution: {
            id: 'field-9',
            label: 'Desired Resolution',
            value: '',
            type: 'text-area'
          },
          requested_refund: {
            id: 'field-10',
            label: 'Requested Refund',
            value: '',
            type: 'input'
          },
          requested_debt_relief: {
            id: 'field-11',
            label: 'Requsted Debt Relief',
            value: '',
            type: 'input'
          }
        }
      }
    }
  },
  mutations: {
    setClaimData (state, data) {
      state.claimData = data
    },
    updateClaimRef (state, data) {
      state.claimRef = data
    }
  },

  actions: {
    async postClaim (context, payload) {
      axios
        .post(`${process.env.VUE_APP_BACKEND}/webhooks/cognito`, payload)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.trace(err)
        })
    },
    async getClaimData (context, payload) {
      const claimId = payload.claimId
      axios
        .get(`${process.env.VUE_APP_BACKEND}/claims/${claimId}`)
        .then(res => {
          console.log(res)
          context.commit('setClaimData', res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    async editClaimData (context, payload) {
      const data = payload.data
      const claimId = payload.claimId
      axios
        .put(`${process.env.VUE_APP_BACKEND}/claims/${claimId}/edit`, data)
        .then(res => {
          context.commit('setClaimData', res.data)
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getClaimRef (context, payload) {
      const claimRef = payload
      context.commit('updateClaimRef', claimRef)
      return claimRef
    }
  }
}

export default ClaimsModule// export the module
