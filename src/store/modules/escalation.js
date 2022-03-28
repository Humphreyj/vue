import { feeWaiverData } from '@/components/escalationFlow/feeWaiverData'
const EscalationModule = {
  state: {
    currentCard: 0,
    noAttorneyAcknowledged: false,
    noRepresentationAcknowledged: false,
    feeWaiverData: feeWaiverData,
    qualifiesForWaiver: undefined,
    priorFeeWaiver: undefined,
    cardAuthorized: false,
    cardSaved: false,
    infoConfirmed: false,
    understandsArbitration: false
  },
  mutations: {
    increaseCard (state, data) {
      state.currentCard += data
    },
    decreaseCard (state, data) {
      state.currentCard -= data
    },
    updateAttorney (state, data) {
      state.noAttorneyAcknowledged = data
    },
    updateRepresentation (state, data) {
      state.noRepresentationAcknowledged = data
    },
    updateWaiverQualification (state, data) {
      state.qualifiesForWaiver = data
    },
    setPriorFeeWaiver (state, data) {
      state.priorFeeWaiver = data
    },
    setCardAuthorized (state, data) {
      state.cardAuthorized = data
    },
    setCardSaved (state, data) {
      state.cardSaved = data
    },
    setInfoConfirmed (state, data) {
      state.infoConfirmed = data
    },
    setUnderstandsArbitration (state, data) {
      state.understandsArbitration = data
    }
  },
  actions: {
    advanceCard (context, payload) {
      if (this.state.EscalationModule.currentCard < 5) {
        context.commit('increaseCard', payload)
      }
    },
    reverseCard (context, payload) {
      if (this.state.EscalationModule.currentCard >= 0) {
        context.commit('decreaseCard', payload)
      }
    }
  }

}

export default EscalationModule
