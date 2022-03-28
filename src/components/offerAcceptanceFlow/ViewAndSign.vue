<template>
  <v-container class="signature-container d-flex flex-column align-start px-4">
    <h6 class="text-h6 font-weight-bold black--text lighten-1">Step 1 of 2</h6>
    <h5 class="text-h5 mt-2 mb-2 font-weight-bold">Sign Settlement Offer</h5>

    <v-dialog
      class="d-flex flex-column justify-start align-start dialog-top"
      v-model="isSigning"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="open-button-container">
          <v-btn
            class="white--text mr-5"
            v-bind="attrs"
            v-on="on"
            depressed
            color="actionBlue"
            @click="toggleSigning()"
          >
            Click here to sign
          </v-btn>
        </div>
      </template>

      <v-card class="d-flex justify-center flex-column px-4 align-start">
        <h5 class="text-h5 black--text lighten-1 mt-4 mb-2">Sign Your Settlement</h5>
        <p class="text-subtitle-1 darkGrey--text lighten-1 mt-3 mb-2">
          I accept and agree to this settlement and release.
        </p>
        <SignaturePad
          v-bind:isSigning="isSigning"
          v-bind:toggleSigning="toggleSigning"
          v-bind:setSettlementSigned="setSettlementSigned"
        />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import SignaturePad from "@/components/forms/SignaturePad";
export default {
  props: [
    "isSigning",
    "toggleSigning",
    "settlementSigned",
    "setSettlementSigned",
  ],
  components: {
    SignaturePad,
  },
  data() {
    return {
      signatureAlert: false,
    };
  },
  methods: {
    toggleSignatureCaptured() {
      this.signatureCaptured = !this.signatureCaptured;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-dialog {
    align-self: flex-start;
    margin-top: 40px;
  }
</style>