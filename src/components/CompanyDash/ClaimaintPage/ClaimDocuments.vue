<template>
  <div class="claim-documents-container">
    <h6 class="textBlack--text text-h6">Documents</h6>
    <div class="document-display">
      <div class="document">
        <v-icon x-large>mdi-file-document</v-icon>
        <p class="document-name">Notice of Dispute</p>
      </div>
      <div class="document">
        <v-icon x-large>mdi-file-document</v-icon>
        <p class="document-name">Consent to Share Info</p>
      </div>
      <div class="document">
        <v-icon x-large>mdi-file-document</v-icon>
        <p class="document-name">DFA</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.claim-documents-container {
  width: 100%;
  height: 120px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  .document-display {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .document {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .document-name {
        margin-top: 10px;
      }
    }
  }
}
</style>