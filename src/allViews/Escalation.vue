<template>
  <v-container class="mt-6">
    <v-layout row wrap justify-center>
     
        <UnderstandingArbitration v-if="currentCard === 0" v-bind:advanceCard="advanceCard"/>
        <FeeWaiverEligibility v-if="currentCard === 1" v-bind:advanceCard="advanceCard" v-bind:reverseCard="reverseCard"/>
        <FeeWaiverApplication v-if="currentCard === 2"  v-bind:advanceCard="advanceCard" v-bind:reverseCard="reverseCard"/>
        <FilingFeeApproval  v-if="currentCard === 3" v-bind:advanceCard="advanceCard" v-bind:reverseCard="reverseCard"/>
        <VerifyClaimDetails v-if="currentCard === 4"  v-bind:reverseCard="reverseCard" />
     
    </v-layout>
  </v-container>
</template>


<script>
import { mapState,mapActions} from 'vuex'
import UnderstandingArbitration from "@/components/escalationFlow/UnderstandingArbitration";
import FeeWaiverEligibility from "@/components/escalationFlow/FeeWaiverEligibility";
import FeeWaiverApplication from "@/components/escalationFlow/FeeWaiverApplication";
import FilingFeeApproval from "@/components/escalationFlow/FilingFeeApproval";
import VerifyClaimDetails from "@/components/escalationFlow/VerifyClaimDetails";
export default {
  name:"Escalation",
  components: {
    UnderstandingArbitration,
    FeeWaiverEligibility,
    FeeWaiverApplication,
    FilingFeeApproval,
    VerifyClaimDetails
  },
  computed: {
     ...mapState({
      Escalation: (state) => state.EscalationModule,
      currentCard: (state) => state.EscalationModule.currentCard,
    }),
  },
  data() {
    return {
     
    };
  },
  methods: {
    ...mapActions(["advanceCard", "reverseCard"])
  }
};
</script>