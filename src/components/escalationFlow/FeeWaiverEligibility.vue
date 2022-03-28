<template>
  <div>
    <v-card class="mx-3">
      <v-card-title class="blue-grey lighten-5 blue-grey--text">
        <span class="text-h6">Check Fee Waiver Eligibility</span>
        <v-spacer></v-spacer>
        <span class="text-body-1">Step 2 of 5</span>
      </v-card-title>
      <v-card-text>
        <p class="text-body-1 pt-2 pb-4">
          The American Arbitration Association will charge $200 to hear this
          case, but they allow lower income individuals to waive the filing fee.
          If your household income is less than the maximum income for fee
          waiver, you do not have to pay the filing fee.
        </p>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Number of persons in household</th>
                <th class="text-left">Maximum income for fee wavier</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in levels" :key="item.household_size">
                <td>{{ item.household_size }}</td>
                <td>{{ item.income }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
      <v-card-actions class="mx-2">
        <v-radio-group v-model="qualifies" row>
          <template v-slot:label>
            <div class="pb-4 text-body-1 font-weight-bold text--primary">
              Do you qualify for this fee waiver? If so, you must include
              additional information about your personal finances with your AAA
              arbitration application.
            </div>
          </template>
          <v-radio label="Yes" value="true"></v-radio>
          <v-radio label="No" value="false"></v-radio>
        </v-radio-group>
      </v-card-actions>
      <v-card-actions>
        <v-btn class="ml-2 mb-2" @click="reverseCard(1)"> Back </v-btn>
        <v-btn color="primary" class="ml-2 mb-2" @click="advance"> Next </v-btn>
      </v-card-actions>
    </v-card>
    <Toast
      :trigger="error"
      textClass="white--text"
      timeout="2500"
      color="negativeRed"
      text="You must choose one of the options below to proceed."
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
      qualification: (state) => state.EscalationModule.qualifiesForWaiver,
    }),
    qualifies: {
      get() {
        return this.$store.state.EscalationModule.qualifiesForWaiver;
      },
      set(value) {
        this.$store.commit("updateWaiverQualification", value);
      },
    },
  },
  props: ["advanceCard", "reverseCard"],
  data() {
    return {
      error: false,
      levels: [
        {
          household_size: "1",
          income: "$38,280",
        },
        {
          household_size: "2",
          income: "$51,720",
        },
        {
          household_size: "3",
          income: "$65,160",
        },
        {
          household_size: "4",
          income: "$78,600",
        },
        {
          household_size: "5",
          income: "$92,040",
        },
        {
          household_size: "6",
          income: "$105,480",
        },
        {
          household_size: "7",
          income: "$118,920",
        },
        {
          household_size: "8",
          income: "$132,360",
        },
      ],
    };
  },
  methods: {
    setError() {
      this.error = !this.error;
    },
    advance() {
      if (this.qualification === "true") {
        this.advanceCard(1);
      } else if (this.qualification === "false") {
        this.advanceCard(2);
      } else {
        this.setError();
        setTimeout(this.setError, 1000);
      }
    },
  },
};
</script>