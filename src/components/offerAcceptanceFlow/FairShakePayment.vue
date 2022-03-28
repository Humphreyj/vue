<template>
  <div class="payment-container">
    <v-card class="mx-auto mb-4" max-width="480" elevation="2">
    <v-card-text>
      <h6 class="text-h6 font-weight-bold black--text lighten-1">
        Step 2 of 2
      </h6>
      <h5 class="text-h5 font-weight-bold textBlack--text mb-5">
        FairShake Payment
      </h5>
      <div class="amount-due d-flex mb-3 justify-start align-center">
        <p class="text-subtitle-1 mr-2 textBlack--text">Amount Due:</p>
        <p
          class="
            text-subtitle-1
            mr-2
            textBlack--text
            amount-value
            font-weight-black
          "
        >
          $156.23
        </p>
        <p class="view-details">View Details</p>
      </div>
      <Checkout />

      <div
        class="billing-help-container d-flex mt-6 align-baseline justify-start"
      >
        <v-icon x-small class="darkGrey--text mt-6 lighten-1"
          >mdi-help-circle</v-icon
        >
        <p class="billing-help-text">Billing Help</p>
      </div>
    </v-card-text>
  </v-card>

  <LiteAlert type="warning" borderPosition="left" text="Your response will not be sent to AT&T until you complete this step."/>
  </div>
</template>

<script>
import Checkout from "@/components/stripe/Checkout";
import LiteAlert from "@/components/notifications/LiteAlert"
export default {
  components: {
    Checkout,
    LiteAlert
  },
};
</script>

<style lang="scss" scoped>
.amount-due {
  .view-details {
    color: #2d6af6;
    font-size: 12px;
  }
}
.billing-help-container {
  .billing-help-text {
    color: #818181;
    font-size: 12px;
    margin-left: 2.5px;
  }
}
</style>