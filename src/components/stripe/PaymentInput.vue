<template>
  <div class="payment-info">
    <stripe-element-card
      ref="elementRef"
      :pk="publishableKey"
      @token="tokenCreated"
    />
    <div class="button-container">
      <v-btn color="actionBlue" class="white--text" @click="submit">Save</v-btn>

      <v-btn color="actionBlue" class="white--text" @click="cancel">Cancel</v-btn>
    </div>
  </div>
</template>

<script>
import { StripeElementCard } from "@vue-stripe/vue-stripe";

export default {
  components: {
    StripeElementCard,
  },
  data() {
    this.publishableKey = process.env.VUE_APP_STRIPE_TEST_PUBLISHABLE_KEY;
    return {
      token: null,
    };
  },
  methods: {
    cancel () {
      this.cancelPaymentInput()
    },
    submit() {
      this.setCardSaved()
      // this will trigger the process
      // this.$refs.elementRef.submit();
    },
    tokenCreated(token) {
      console.log(token);
      // handle the token
      // send it to your server
    },
  },
  props: ["cancelPaymentInput", "setCardSaved"]
};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}
</style>