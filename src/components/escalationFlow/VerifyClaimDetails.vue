<template>
  <div class="varify-claim-details">
    <v-card class="mx-3" v-if="!editing">
    <v-card-title class="blue-grey lighten-5 blue-grey--text">
      <span class="text-h6">Verify Claim Details</span>
      <v-spacer></v-spacer>
      <span class="text-body-1">Step 5 of 5</span>
    </v-card-title>
    <v-list-item>
      <v-list-item-content>
        <span class="text-h6 mt-4">Personal Details</span>
        <span class="text-body-1 pt-1 pb-2">{{ fullName }}</span>
        <span class="text-body-1 pt-0 pb-2">{{userData.contact.phone}}</span>
        <span class="text-body-1 pt-0 pb-2">{{userData.contact.email}}</span>
        <span class="text-body-1 pt-0 pb-2"
          > {{fullAddress}} </span
        >
        <span class="text-h6 mt-4">Dispute Summary</span>
        <p class="text-body-1 pt-2 pb-2">
          {{claimData.dispute_text}}
        </p>
        <span class="text-h6 mt-4">Desired Resolution</span>
        <p class="text-body-1 pt-2 pb-2">
          <strong class="text--secondary">Relief Payment Request: </strong
          >${{claimData.requested_refund}}
        </p>
        <p class="text-body-1 pt-1 pb-2">
          <strong class="text--secondary">Requested Debt Relief: </strong> ${{claimData.requested_debt_relief}}
        </p>
        <p class="text-body-1 pt-1 pb-2">
          <strong class="text--secondary">Other Relief: </strong> {{claimData.other_resolution}}
        </p>
        <p class="text-body-1 pt-1 pb-2">
          <strong class="text--secondary">Credit Repair Requested: </strong>No
        </p>
        <div class="mt-4">
          <v-btn @click="toggleEditing">Edit Claim</v-btn>
        </div>
        <v-divider class="my-12"></v-divider>
        <span class="text-h6">Acknowledgements</span>
        <v-checkbox
        v-model="infoIsConfirmed"
          label="I confirm that the infomation provided is true and correct to the best of my knowledge and direct FairShake to file this dispute with the American Arbitration Association for resolution."
          color="secondary"
          :value="infoConfirmed"
          hide-details
          class="pl-2"
        ></v-checkbox>
        <v-checkbox
        v-model="termsAccepted"
          label="I understand that arbitration is a serious legal process and I promise to be responsive and provide all information requested by the Arbitrator in a timely fashion."
          color="secondary"
          :value="understandsArbitration"
          hide-details
          class="pl-2"
        ></v-checkbox>
        <v-alert text type="warning" class="mt-4">
          WARNING: Filing false or frivolous claims can lead to monetary
          penalties, including payment of the other side's legal fees.
        </v-alert>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn class="ml-2 mb-2" @click="reverseCard(1)"> Back </v-btn>
      <v-btn class="ml-2 mb-2" @click="advance" color="primary"> Submit My Application </v-btn>
    </v-card-actions>
  </v-card>
  <EditClaim v-bind:cancelFunction="toggleEditing" v-else/>
    <Toast
      :trigger="error"
      textClass="white--text"
      timeout="2500"
      color="negativeRed"
      text="You must agree to the terms to proceed."
    />
  </div>
</template>


<script>
import { mapState,mapActions } from "vuex";
import Toast from "@/components/notifications/Toast";
import EditClaim from "@/components/claimStatus/EditClaim"
export default {
  components: {
    EditClaim,
    Toast
  },
  
  data() {
    return {
      error: false,
      editing: false,
      claimantName: "",
      claimantAddress: ""
    };
  },
  methods: {
    setError() {
      this.error = !this.error;
    },
     setStatusNegotiating () {
      //test-function
      const sender = {
        claimId: this.$route.params.claimRef,
        data: {status: "Negotiating"}
      }
      this.editClaimData(sender)
    },
     advance() {
      if (this.infoConfirmed && this.understandsArbitration) {
        this.setStatusNegotiating();
        this.$router.push({
        name: "Claim Status",
        params: { claimRef: `${this.$route.params.claimRef}` },
      });
      } else {
        this.setError();
        setTimeout(this.setError, 1000);
      }
    },
    ...mapActions(["getClaimData", "editClaimData"]),
    toggleEditing () {
      this.editing = !this.editing
    },
  },
  props: ["reverseCard"],
  computed: {
    ...mapState({
      claimData: (state) => state.ClaimsModule.claimData,
      userData: (state) => state.UserModule.userData,
      qualification: (state) => state.EscalationModule.qualifiesForWaiver,
      infoConfirmed: (state) => state.EscalationModule.infoConfirmed,
      understandsArbitration: (state) => state.EscalationModule.understandsArbitration
    }),
    fullName: function () {
      return (this.claimantName =
        this.userData.name.first_name + " " + this.userData.name.last_name);
    },
    fullAddress: function () {
      return this.claimantAddress =
        `${this.userData.address.street_address}, ${this.userData.address.city}, ${this.userData.address.state}, ${this.userData.address.zip}`
    },
    infoIsConfirmed: {
      get() {
        return this.$store.state.EscalationModule.infoConfirmed;
      },
      set(value) {
        this.$store.commit("setInfoConfirmed", value);
      },
    },
    termsAccepted: {
      get() {
        return this.$store.state.EscalationModule.understandsArbitration;
      },
      set(value) {
        this.$store.commit("setUnderstandsArbitration", value);
      },
    },
  },
   mounted() {
    const payload = {
      claimId: this.$route.params.claimRef
    }
    this.getClaimData(payload);
  },
};
</script>