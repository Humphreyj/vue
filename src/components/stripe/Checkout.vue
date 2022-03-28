<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <v-btn
      class="white--text mr-2"
      data-testid="paymentButton"
      color="actionBlue"
      @click="submit"
    >
      Pay now!
    </v-btn>

    <v-btn color="lightGrey" class="darkGrey--text lighten-6" text @click="cancel">Cancel</v-btn>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import { mapActions } from "vuex";

export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey = process.env.VUE_APP_STRIPE_TEST_PUBLISHABLE_KEY;
    return {
      loading: false,
      lineItems: [{
        price: 'price_1K1DnQIo8Fv1JWIHN3t5P0dw',
        quantity: 1
      }], 
      successURL: `${process.env.VUE_APP_CLIENT_URL}/#/${this.$route.params.claimRef}/claim-status`,
      cancelURL: `${process.env.VUE_APP_CLIENT_URL}/#/${this.$route.params.claimRef}/claim-status`,
    };
  },
  methods: {
    ...mapActions(["createOffer"]),
    submit() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
     cancel() {
      this.createOffer()
     
      this.$router.push({
        name: "Claim Status",
        params: { claimRef: `${this.$route.params.claimRef}` },
      });
    },
  },
};
</script>