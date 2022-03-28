<template>
  <div class="container px-4 text-center font-weight-light">
    <section class="container fill-height px-0 container--fluid">
      <div class="row no gutters">
        <div class="col col-12">
          <section id="edit-claim">
            <v-card class="mx-auto" max-width="480px">
              <v-card-title class="blue-grey lighten-5 blue-grey--text">
                <span class="text-h6">Submit Claim</span>
                <v-spacer></v-spacer>
                <v-btn icon color="blue-grey">
                  <v-icon @click="cancelFunction()">mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <FormTemplate
                v-bind:formData="formSections"
                v-bind:cancelFunction="cancelFunction"
                v-bind:buttonFunction="this.postClaim"
              />
            </v-card>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import FormTemplate from "@/components/forms/FormTemplate";
import { mapActions } from "vuex";
export default {
  props: ["cancelFunction"],
  data() {
    return {
      formSections: {
        name: {
          id: 0,
          sectionName: "Name",
          fields: {
            firstName: {
              id: "field-0",
              label: "First Name",
              value: "",
              type: "input",
            },
            lastName: {
              id: "field-1",
              label: "Last Name",
              value: "",
              type: "input",
            },
          },
        },
        contact: {
          id: 1,
          sectionName: "Contact",
          fields: {
            email: {
              id: "field-2",
              label: "Email",
              value: "",
              type: "input",
            },
            phone: {
              id: "field-3",
              label: "Phone Number",
              value: "",
              type: "input",
            },
          },
        },
        address: {
          id: 2,
          sectionName: "Address",
          fields: {
            address: {
              id: "field-4",
              label: "Address",
              value: "",
              type: "input",
            },
            city: {
              id: "field-5",
              label: "City",
              value: "",
              type: "input",
            },
            state: {
              id: "field-6",
              label: "State",
              value: "",
              type: "input",
            },
            zip: {
              id: "field-7",
              label: "Zip Code",
              value: "",
              type: "input",
            },
          },
        },
        claimDetails: {
          id: 3,
          sectionName: "Claim Details",
          fields: {
            dispute: {
              id: "field-8",
              label: "Dispute",
              value: "",
              type: "text-area",
            },
            desiredResolution: {
              id: "field-9",
              label: "Desired Resolution",
              value: "",
              type: "text-area",
            },
            requestedRefund: {
              id: "field-10",
              label: "Requested Refund",
              value: "",
              type: "input",
            },
            requestedDebtRelief: {
              id: "field-11",
              label: "Requsted Debt Relief",
              value: "",
              type: "input",
            },
          },
        },
      },
    };
  }, //data ends
  methods: {
    ...mapActions(["postClaim"]),
    checkState(state) {
      let newState = {};
      for (let item in state) {
        for (let field in state[item].fields) {
          newState[field] = state[item].fields[field].value;
        }
      }
      let sender = {
        claimId: this.$route.params.claimRef,
        newState: newState,
      };
      this.postClaim(sender);
    },
  },
  components: {
    FormTemplate,
  },
};
</script>
