<template>
  <v-container class="pt-4" fluid>
    <v-card class="mx-auto pb-4" max-width="480" elevation="2">
      <v-card-text>
        <h5
          class="
            text-h5
            mb-4
            font-weight-bold
            text--primary text-decoration-underline
          "
        >
          {{ `${userData.name.first_name} ${userData.name.last_name}` }} vs.
          Company Name
        </h5>
         <p class="text--primary body-1 ml-1">
           Curent Status: {{claimData.status}}
          </p>
        <div class="claim-data">
          <h6 class="text-h6 font-weight-bold text--primary">
            Personal Details
          </h6>
          <p class="text--primary body-1 ml-1">
            {{ `${userData.name.first_name} ${userData.name.last_name}` }}
          </p>
          <p class="text--primary body-1 ml-1">{{ userData.contact.phone }}</p>
          <p class="text--primary body-1 ml-1">{{ userData.contact.email }}</p>
          <p class="text--primary body-1 ml-1">
            {{ userData.address.street_address }}
          </p>
          <p class="text--primary body-1 ml-1">
            {{
              `${userData.address.city}, ${userData.address.state} ${userData.address.zip}`
            }}
          </p>
        </div>
      
        <div class="claim-data">
          <h6 class="text-h6 font-weight-bold text--primary">
            Dispute Summary
          </h6>
          <p class="text--primary body-1 ml-1" data-testid="dispute_text" >{{ claimData.dispute_text }}</p>
          <h6 class="text-h6 font-weight-bold text--primary" >
            Requested Resolution
          </h6>
          <p class="text--primary body-1 ml-1" data-testid="other_resolution">
            {{ claimData.other_resolution }}
          </p>
          <h6 class="text-h6 font-weight-bold text--primary">
            Requested Refund
          </h6>
          <p class="text--primary body-1 ml-1" data-testid="requested_refund">
            {{ claimData.requested_refund }}
          </p>
          <h6 class="text-h6 font-weight-bold text--primary">
            Requested Debt Relief
          </h6>
          <p class="text--primary body-1 ml-1" data-testid="requested_debt_relief">
            {{ claimData.requested_debt_relief }}
          </p>

          <div class="settlement-offers">
            <h6 class="text-h6 font-weight-bold text--primary">
              Settlement Offers
            </h6>
            <p
              class="text--primary body-1 ml-1"
              v-if="claimData.settlement_offers"
            >
              An offer is available for review.
            </p>
            <p class="text--primary body-1 ml-1" v-else>
              You currently have no settlement offers.
            </p>
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="mx-2">
        <v-btn  class="white--text" block depressed color="actionBlue" @click="buttonFunction()">
          Edit My Claim</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["buttonFunction"],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      claimData: (state) => state.ClaimsModule.claimData,
      userData: (state) => state.UserModule.userData,
    }),
  },
  methods: {
    ...mapActions(["editClaimData"]),
  },
  components: {},
};
</script>