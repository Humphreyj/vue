<template>
  <div class="form-container">
    <div
      class="text-left"
      v-for="item in formData"
      v-bind:key="item.id"
    >
      <!-- Loops through the form data and renders each section -->
      <div>
        <p class="text-h5 darkGrey--text lighten-1">{{ item.sectionName }}</p>
        <div
          class="input-block"
          v-for="field in item.fields"
          v-bind:key="field.id"
        >
          <!-- Then we loop through and render each field in that section -->
          <!-- If the field has type "input" an input is rendered, else we render and text area -->
          <div v-if="field.type === 'input'">
            <v-text-field
              v-bind:label="field.label"
              v-bind:placeholder="field.label"
              v-model="field.value"
              outlined
              class="mt-4"
            >
            </v-text-field>
          </div>
          <div v-else-if="field.type === 'checkbox'">
            <v-checkbox v-model="field.value" v-bind:label="field.label">
            </v-checkbox>
          </div>
          <div class="radio d-flex" v-else-if="field.type === 'radio'">
            <v-radio-group  v-model="field.value" v-for="label in field.label" :key="field.label.indexOf(label)" >
                <v-radio :label="label" :value="label"></v-radio>
            </v-radio-group>

          </div>
          <div v-else>
            <h6 class="text-h6 mb-2 font-weight-bold">
              {{field.label}}
            </h6>
            <h6 class="text-subtitle-1 black--text lighten-1 mb-2 font-weight-bold" v-if="field.subtitle">
              {{field.subtitle}}
            </h6>
            <v-textarea
              v-bind:name="field.label"
              outlined
              class="mt-4"
              v-model="field.value"
              required="true"
            >
            </v-textarea>
          </div>
        </div>
      </div>
    </div>
    <v-card-actions class="mx-5 pt-0">
      <v-row justify="start" class="mb-4">
        <v-btn
         class="white--text mr-2"
          data-testid="saveButton"
          color="actionBlue"
          @click="constructState(formData)"
        >
          Submit
        </v-btn>
        <v-btn class="black--text mr-2" v-if="cancelFunction" @click="cancelFunction()"> Cancel </v-btn>
      </v-row>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  methods: {
    constructState(state) {
      let newState = {};
      for (let item in state) {
        for (let field in state[item].fields) {
          newState[field] = state[item].fields[field].value;
        }
      }

      let sender = {
        claimId: this.$route.params.claimRef,
        data: newState,
        rejected_reason: newState.rejected_reason,
        rfiUuid: "0a0207a9-64e6-42eb-b57b-dc3355fbe392",
      };
      this.buttonFunction(sender);
      if(this.cancelFunction) {
        this.cancelFunction();
      }
      if(this.sendTo) {
        this.sendTo()
      }
    },
  },
  props: ["formData", "cancelFunction", "buttonFunction", "sendTo"],
};
</script>

<style lang="scss" scoped>
::v-deep .v-text-field {
    width: 100%;
    
    
  }
.form-container {
  div {
    width: 99%;
    margin: 0 auto;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  
}
</style>




