<template>
  <div class="reject-offer-container">
    <v-card class="mb-4" max-width="480" elevation="2">
      <v-card-title
        class="d-flex align-center blue-grey lighten-5 blue-grey--text"
      >
        <span class="h5-text blue-grey--text">Counter Offer</span>
      </v-card-title>
      <v-card-text class="">
        <p
          class="
            text-subtitle-1
            font-weight-normal
            mb-1
            mt-5
            text-left
            textBlack--text
          "
        >
          What you write here will be sent directly back to AT&T. Fairshake will
          not view or edit what you write. Be as specific and detailed as
          possible. AT&T frequently ignores short or vague counter-offers.
        </p>
      </v-card-text>

      <FormTemplate
        v-bind:formData="formSections"
        v-bind:buttonFunction="rejectSettlementOffer"
        v-bind:cancelFunction="cancelFunction"
        v-bind:sendTo="setStatusNegotiating"
      />
    </v-card>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import FormTemplate from "@/components/forms/FormTemplate";

export default {
  name: "RejectOffer",
  props: ["title", "icon", "subtitle", "cancelFunction", "respond"],
  data() {
    return {
      formSections: {
        counter: {
          id: 0,
          sectionName: "",
          fields: {
            rejected_reason: {
              id: "field-0",
              label: "Why do you think this offer is unfair? (50 word minimum)",
              value: "",
              type: "textarea",
            },
            offer_changes: {
              id: "field-1",
              label: "How should the offer be increased?",
              subtitle:
                'Example: "Please remove $500 from my bill and cancel my account."',
              value: "",
              type: "textarea",
            },
          },
        },
      },
    };
  },
  methods: {
    ...mapActions(["rejectSettlementOffer", "editClaimData"]),
    setStatusNegotiating() {
      if (this.formSections.counter.fields.rejected_reason.value) {
        const sender = {
          claimId: this.$route.params.claimRef,
          data: { status: "Negotiating" },
        };
        this.editClaimData(sender);
      } else {
        console.log("Please fill out this form.");
      }
    },
  },
  components: {
    FormTemplate,
  },
};
</script>


<style lang="scss" scoped>
.reject-offer-container {
  height: calc(100vh - 100px);
  overflow-y: scroll;
}
</style>