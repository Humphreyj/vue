<template>
  <div>
    <v-card class="mx-3">
      <v-card-title class="blue-grey lighten-5 blue-grey--text">
        <span class="text-h6">Understanding Arbitration</span>
        <v-spacer></v-spacer>
        <span class="text-body-1">Step 1 of 5</span>
      </v-card-title>
      <v-card-text>
        <p class="text-body-1 textBlack--text pt-2 pb-4">
          Arbitration is a process for resolving disputes without the cost and
          effort of getting a lawyer and going to court. The outcome is legally
          binding and is decided through the American Arbitration Association -
          a non-profit that administers arbitrations for disputes with companies
          such as T-Mobile, AT&T, Wells Fargo, etc.
        </p>
        <v-row>
          <v-btn tile text color="info">
            <v-icon left> mdi-information </v-icon>
            Learn more about arbitration
          </v-btn>
        </v-row>
        <v-checkbox
          v-model="attorney"
          label="I understand that I will not be represented by an attorney, and will be responsible for making my own arguments in these proceedings."
          color="blackText"
          :value="noAttorneyAcknowledged"
          hide-details
          class="pl-2"
        ></v-checkbox>
        <v-checkbox
          v-model="representation"
          label="I understand that the American Arbitration Association, the Arbitrator and the Case Administrator are neutral third parties and that they do not represent me."
          color="secondary"
          :value="noRepresentationAcknowledged"
          hide-details
          class="pl-2 mb-2"
        ></v-checkbox>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" class="ml-2 mb-2" @click="advance"> Next </v-btn>
      </v-card-actions>
    </v-card>
    <Toast
      :trigger="error"
      textClass="white--text"
      timeout="2000"
      color="negativeRed"
      text="You must read and accept these terms to proceed."
    />
  </div>
</template>

<script>
import Toast from "@/components/notifications/Toast";
import { mapState } from "vuex";
export default {
  components: { Toast },
  computed: {
    ...mapState({
      noAttorneyAcknowledged: (state) =>
        state.EscalationModule.noAttorneyAcknowledged,
      noRepresentationAcknowledged: (state) =>
        state.EscalationModule.noRepresentationAcknowledged,
    }),
    attorney: {
      get() {
        return this.$store.state.EscalationModule.noAttorneyAcknowledged;
      },
      set(value) {
        this.$store.commit("updateAttorney", value);
      },
    },
    representation: {
      get() {
        return this.$store.state.EscalationModule.noRepresentationAcknowledged;
      },
      set(value) {
        this.$store.commit("updateRepresentation", value);
      },
    },
  },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    setError() {
      this.error = !this.error;
    },
    advance() {
      if (this.noAttorneyAcknowledged && this.noRepresentationAcknowledged) {
        this.advanceCard(1);
      } else {
        this.setError();
        setTimeout(this.setError, 1000);
      }
    },
  },
  props: ["advanceCard"],
};
</script>