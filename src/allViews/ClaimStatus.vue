<template>
  <div class="claim-status-container">
     

     <div v-if="claimStatus === 'Submitted'">
      <ContactVerified v-bind:setEditing="setEditClaim"  />
    </div>
    <div v-else-if="claimStatus === 'Pending'">
      <ClaimPending v-bind:setEditing="setEditClaim"  />
    </div>
    <div v-else-if="claimStatus === 'Assigned'">
      <ClaimAccepted />
    </div>
    <div v-else-if="claimStatus === 'nod_sent' || claimStatus === 'Company Notified'">
      <CompanyNotified />
    </div>
    <div v-else-if="claimStatus === 'RFI'">
      <InformationRequested />
    </div>
    <div v-else-if="claimStatus === 'Negotiating'">
      <Negotiating />
    </div>
    <div v-else-if="claimStatus === 'Offer Pending'">
      <SettlementOffer />
    </div>
    <div v-else-if="claimStatus === 'editing'">
      <EditClaim v-bind:cancelFunction="cancelClaim" />
    </div>
   
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import ClaimPending from "@/components/claimStatus/ClaimPending";
import EditClaim from "@/components/claimStatus/EditClaim";
import ContactVerified from "@/components/claimStatus/ContactVerified"
import ClaimAccepted from "@/components/claimStatus/ClaimAccepted"
import CompanyNotified from "@/components/claimStatus/CompanyNotified"
import Negotiating from "@/components/claimStatus/Negotiating"
import SettlementOffer from "@/components/claimStatus/settlementOffer/SettlementOffer"
import InformationRequested from "@/components/claimStatus/InformationRequested"

export default {
  data() {
    return {
      claimStatus: undefined,
    };
  },
  methods: {
    ...mapActions(["getClaimData"]),
    startClaim() {
      this.claimStatus = "initiated";
    },
    cancelClaim() {
      this.claimStatus = this.claimData.status;
    },
    setEditClaim() {
      this.claimStatus = "editing";
    },
    fetchClaimStatus() {
      this.getClaimData();
    },
  },
  computed: {
    ...mapState({
      claimData: (state) => state.ClaimsModule.claimData,
    }),
  },
  mounted() {
    const payload = {
      claimId: this.$route.params.claimRef
    }
    this.getClaimData(payload);
  },
  watch: {
    claimData: function () {
      this.claimStatus = this.claimData.status;
    },
  },
  components: {
    ClaimPending,
    EditClaim,
    ContactVerified,
    ClaimAccepted,
    CompanyNotified,
    Negotiating,
    SettlementOffer,
    InformationRequested,
  },
};
</script>