<template>
  <v-card class="mx-3">
    <v-card-title class="blue-grey lighten-5 blue-grey--text">
      <span class="text-h6">Fee Waiver Application</span>
      <v-spacer></v-spacer>
      <span class="text-body-1">Step 3 of 5</span>
    </v-card-title>
    <v-card-text class="text-left">
      <p class="text-h6 mt-8">Prior Applications for AAA Fee Waivers</p>
      <v-radio-group v-model="waiver" row>
        <template v-slot:label>
          <div class="pb-4 text-body-1 font-weight-bold text--primary">
            Within the last two years, have you requested that the AAA or a
            court waive your fees and costs?
          </div>
        </template>
        <v-radio label="Yes" value="true"></v-radio>
        <v-radio label="No" value="false"></v-radio>
      </v-radio-group>
      <FormTemplate v-bind:formData="formData" :buttonFunction="submitApplication"/>
      
    </v-card-text>
    <v-card-actions>
      <v-btn class="ml-2 mb-2" @click="reverseCard(1)"> Back </v-btn>
      <v-btn color="primary" class="ml-2 mb-2" @click="advanceCard(1)">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import FormTemplate from "@/components/forms/FormTemplate";
import { mapState } from 'vuex'
export default {
  props: ["advanceCard", "reverseCard"],
  components: {
    FormTemplate,
  },
  computed: {
      ...mapState({
        priorFeeWaiver: (state) => state.EscalationModule.priorFeeWaiver,
      formData: (state) => state.EscalationModule.feeWaiverData,
    }),
    waiver: {
       get() {
        return this.$store.state.EscalationModule.priorFeeWaiver;
      },
      set(value) {
        this.$store.commit("setPriorFeeWaiver", value);
      },
    }
  },
  data() {
    return {
    }
  },
  methods: {
    submitApplication(data) {
      console.log(data)
    }
  }
};
</script>