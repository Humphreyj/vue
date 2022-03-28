<template>
  <v-dialog v-model="claimDetails" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        small
        depressed
        rounded
        color="orange"
        dark
        v-bind="attrs"
        v-on="on"
      >
        View Full Details
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 blue-grey lighten-5 blue-grey--text">
        Settlment Offer Details
      </v-card-title>
      <v-card-text class="pt-6">
        <h2>Full Document</h2>
        <v-btn small color="primary" class="mt-3"> View Offer PDF </v-btn>
        <h2 class="mt-6">Offer Summary</h2>
        <p class="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2 class="mt-6">Details from the Fine Print</h2>
        <v-row class="mt-2">
          <v-btn tile small text color="info">
            <v-icon left> mdi-information </v-icon>
            Award Treated As Taxable Income
          </v-btn>
          <v-btn tile small text color="info">
            <v-icon left> mdi-information </v-icon>
            Contains Confidential Clause
          </v-btn>
          <v-btn tile small text color="info">
            <v-icon left> mdi-information </v-icon>
            Contains General Release Clause
          </v-btn>
        </v-row>
        <h2 class="mt-6">Good to Know</h2>
        <p class="mt-3">
          You have 14 days to accept this offer before the offer expires.<br />If
          you accept the offer, most credit or cash payments take 30 days to
          process, most credit report changes take 60-90 days to be completed by
          the credit reporting agencies.
        </p>
        <h2 class="mt-6">FairShake Commision</h2>
        <p class="mt-3">
          FairShake's commission is 20% of all cash and credits and 10% of all
          bill adjustments or debt relief with a $20 minimum.
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="claimDetails = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["claimDetails"],
};
</script>