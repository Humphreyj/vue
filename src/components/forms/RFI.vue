<template>
  <v-card class="mx-auto mb-4" max-width="480" elevation="2">
    <v-card-text>
      <div>{{ title }}</div>
      <div class="d-flex justify-start">
        <v-icon> {{ icon }} </v-icon>
        <h4 v-if="subtitle" class="text-h4 font-weight-bold text--primary">
          {{ subtitle }}
        </h4>
        <Alert
          typeOf="error"
          text="To move forward, please provide the following information as soon as possible."
        />
      </div>

      <div class="text--primary">
        <h5 class="text-h5 font-weight-bold text--primary">
          Company Name needs the following information to address your claim:
        </h5>
      </div>
    </v-card-text>

    <FormTemplate
      v-bind:formData="formSections"
      v-bind:buttonFunction="respondToRfi"
      v-bind:sendTo='setStatusNegotiating'
    />

    <div class="call-to-action"></div>
  </v-card>
</template>


<script>
import { mapActions, mapState } from "vuex";
import Alert from "@/components/notifications/Alert";
import StaticCard from "@/components/cards/StaticCard";
import ActionCard from "@/components/cards/ActionCard";
import InputCard from "@/components/cards/InputCard";
import FormTemplate from "@/components/forms/FormTemplate";

export default {
  name: "RFI",
  props: ["title", "icon", "subtitle", "cancelFunction", "respond"],
  data() {
    return {
      requested_information: ["Account Number"],
      formSections: {},
    };
  },
  computed: {
    ...mapState({
      rfi: (state) => state.RfiModule.rfi,
    }),
  },
  methods: {
    ...mapActions(["fetchRfi", "respondToRfi", "editClaimData"]),
    setStatusNegotiating () {
      //test-function
      const sender = {
        claimId: this.$route.params.claimRef,
        data: {status: "Negotiating"}
      }
      this.editClaimData(sender)
    }
  },
  mounted() {
    const sender = {
      claimId: this.$route.params.claimRef,
      rfiUuid: "0a0207a9-64e6-42eb-b57b-dc3355fbe392",
    };
    this.fetchRfi(sender);
  },
  watch: {
    rfi: function () {
      this.formSections = {
      name: {
        id: 0,
        sectionName: "Information Needed",
        fields: {
          account_number: {
            id: "field-0",
            label: this.rfi.request,
            value: "",
            type: "input",
          },
        },
      },
    };
    },
  },
  components: {
    Alert,
    ActionCard,
    StaticCard,
    InputCard,
    FormTemplate,
  },
};
</script>
