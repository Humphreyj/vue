
const StripeModule = {
  state: {
  },
  mutations: {

  },
  actions: {
    async createOffer () {
      const newOffer = {
        name: 'New Settlement Offer'
      }
      console.log(newOffer)
      // axios.post(`${process.env.VUE_APP_BACKEND}/stripe/createOffer`)
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    }
  }
}

export default StripeModule
