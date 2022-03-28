<template>
  <div class="fee-approval">
    <v-card class="mx-3">
      <v-card-title class="blue-grey lighten-5 blue-grey--text">
        <span class="text-h6">AAA Filing Fee Approval</span>
        <v-spacer></v-spacer>
        <span class="text-body-1">Step 4 of 5</span>
      </v-card-title>
      <v-card-text>
        <p class="text-body-1 pt-2 pb-2">
          AT&T has agreed to reimburse the $200 American Arbitration Association
          filing fee. FairShake will pay this fee and then charge your card for
          $200 when we complete the filing process.
        </p>
        <v-checkbox
          v-model="cardIsAuthorized"
          label="I authorize my card to be charged $200 to pay the filing fee."
          color="secondary"
          :value="cardAuthorized"
          class="pl-2"
        ></v-checkbox>
      </v-card-text>
      <PaymentInput
        v-if="cardAuthorized && !cardSaved"
        :cancelPaymentInput="cancelPaymentInput"
        :setCardSaved="setCardSaved"
      />
      <v-alert
        v-if="cardSaved"
        dense
        text
        type="success"
        class="mx-4 mt-2 mb-6"
      >
        Card successfully saved
      </v-alert>
      <v-card-actions>
        <v-btn class="ml-2 mb-2" @click="reverseCard(1)"> Back </v-btn>
        <v-btn color="primary" class="ml-2 mb-2" @click="advance"> Next </v-btn>
      </v-card-actions>
    </v-card>
    <Toast
      :trigger="error"
      textClass="white--text"
      timeout="2000"
      color="negativeRed"
      text="You must add a valid payment method to proceed."
    />
  </div>
</template>

<script>
import PaymentInput from "@/components/stripe/PaymentInput";
import Toast from "@/components/notifications/Toast";
import { mapState } from "vuex";
export default {
  components: {
    PaymentInput,
    Toast,
  },
  computed: {
    ...mapState({
      cardAuthorized: (state) => state.EscalationModule.cardAuthorized,
      cardSaved: (state) => state.EscalationModule.cardSaved,
    }),
    cardIsAuthorized: {
      get() {
        return this.$store.state.EscalationModule.cardAuthorized;
      },
      set(value) {
        this.$store.commit("setCardAuthorized", value);
      },
    },
    cardIsSaved: {
      get() {
        return this.$store.state.EscalationModule.cardSaved;
      },
      set(value) {
        this.$store.commit("setCardSaved", value);
      },
    },
  },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    cancelPaymentInput() {
      this.$store.commit("setCardAuthorized", false);
    },
    setCardSaved() {
      this.$store.commit("setCardSaved", true);
    },
    setError() {
      this.error = !this.error;
    },
    advance() {
      if (this.cardSaved) {
        this.advanceCard(1);
      } else {
        this.setError();
        setTimeout(this.setError, 1000);
      }
    },
  },
  props: ["advanceCard", "reverseCard"],
};
</script>