<template>
  <v-container class="pt-4">
    <FairShakePayment v-if="settlememtSigned"/>
   

    <div class="signature" v-else>
      <ViewAndSign
        v-bind:isSigning="isSigning"
        v-bind:toggleSigning="toggleSigning"
        v-bind:setSettlementSigned="setSettlementSigned"
      />
      <div class="document-container grey"></div>
    </div>

    <Toast
      v-bind:trigger="capturedAlert"
      textClass="white--text"
      timeout="1500"
      color="positiveGreen"
      text="Signature Captured"
    />
    <TrustPilot />
  </v-container>
</template>


<script>
import { mapState } from "vuex";
import StaticCard from "@/components/cards/StaticCard";
import FairShakePayment from "@/components/offerAcceptanceFlow/FairShakePayment"
import ViewAndSign from "@/components/offerAcceptanceFlow/ViewAndSign";
import Toast from "@/components/notifications/Toast";
import TrustPilot from "@/components/claimStatus/settlementOffer/TrustPilot";
export default {
  data() {
    return {
      isSigning: false,
      settlememtSigned: false,
      capturedAlert: false,
    };
  },
  methods: {
    toggleSigning() {
      this.isSigning = !this.isSigning;
    },
    toggleCaptureAlert() {
      this.capturedAlert = !this.capturedAlert;
    },
    setSettlementSigned() {
      this.settlememtSigned = true;
      this.toggleCaptureAlert();
      setTimeout(this.toggleCaptureAlert, 1000);
    },
  },
  computed: {
    ...mapState({
      claimData: (state) => state.ClaimsModule.claimData,
      paymentMethod: (state) => state.UserModule.paymentData.paymentMethod,
    }),
  },
  components: {
    StaticCard,
    ViewAndSign,
    Toast,
    TrustPilot,
    FairShakePayment
  },
};
</script>

<style lang="scss" scoped>
.document-container {
  //css for the settlement offer placeholder
  width: 93%;
  height: 70vh;
  margin: 0 auto;
  background-color: "#D1D1D1";
}
</style>