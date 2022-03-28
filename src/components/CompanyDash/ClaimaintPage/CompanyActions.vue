<template>
<div class="company-actions-container">
  <h4 class="action-title">{{currentAction}}</h4>
  <div class="company-action">
    <v-textarea placeholder="Enter your message here">

    </v-textarea>
    <div class="company-action-buttons">
      <v-btn class="white--text" color="actionBlue">Send</v-btn>
      <v-btn class="blackText--text" @click="clearCurrentAction">Cancel</v-btn>
    </div>
  </div>
</div>
</template>


<script>
export default {
  data() {
    return {
  
    };
  },
  props: ["currentAction", "clearCurrentAction"],
};
</script>

<style lang="scss" scoped>
.company-actions-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;

  .company-action-buttons {
    .v-btn {
      margin-left: 10px;
    }
  }
}
</style>