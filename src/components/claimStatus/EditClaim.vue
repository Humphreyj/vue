<template>
  <div class="container px-4 text-center font-weight-light">
    <section class="container fill-height px-0 container--fluid">
      <div class="row no gutters">
        <div class="col col-12">
          <section id="edit-claim">
            <v-card class="mx-auto" max-width="480px">
              <v-card-title class="blue-grey lighten-5 blue-grey--text">
                <span class="text-h6">Edit Claim</span>
                <v-spacer></v-spacer>
                <v-btn icon color="blue-grey">
                  <v-icon data-testid='closeEditing' @click="cancelFunction()">mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <FormTemplate
                v-bind:formData="formSections"
                v-bind:cancelFunction="cancelFunction"
                v-bind:buttonFunction="this.editClaimData"
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
import { mapActions, mapState } from "vuex";
export default {
  props: ["cancelFunction"],
  data() {
    return {};
  }, //data ends

  methods: {
    ...mapActions(["editClaimData", "getClaimData"]),
  },
  computed: {
    ...mapState({
      claimData: (state) => state.ClaimsModule.claimData,
      formSections: (state) => state.ClaimsModule.formSections,
      userData: (state) => state.UserModule.userData,
    }),
  },
  mounted() {
    for (const section in this.userData) {
      //loop through the sections in userData
      for (const field in this.userData[section]) {
        //for each field that is in user data
        //populate that field with data from 
        //vuex store
        this.formSections[section].fields[`${field}`].value =
          this.userData[section][`${field}`];
      }
    }
    for (const field in this.formSections.claimDetails.fields) {
      //for each section in 
      this.formSections.claimDetails.fields[`${field}`].value =
        this.claimData[`${field}`];
    }
  },
  components: {
    FormTemplate,
  },
};
</script>
