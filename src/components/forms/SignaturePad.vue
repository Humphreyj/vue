<template>
  <v-container class="pt-4 d-flex flex-column">
    <div class="d-flex align-center justify-center pad-container">
      <VueSignature
        ref="signature"
        :sigOption="option"
        :clearOnResize="true"
        :w="'480px'"
        :h="'120px'"
      ></VueSignature>
    </div>
    <div class="button-container d-flex flex-column align-start justify-center">
      <v-btn class="darkGrey--text mt-2" text @click="clear()">
        Clear Signature Box
      </v-btn>
      <v-btn color="actionBlue" class="white--text mt-2" @click="save()">
        Approve Signature
      </v-btn>
    </div>
    <Toast
      v-bind:trigger="needsSignature"
      textClass="white--text"
      timeout="1500"
      color="negativeRed"
      text="You must sign your settlement to proceed."
    />
  </v-container>
</template>

<script>
import VueSignature from "vue-signature";
import Toast from "@/components/notifications/Toast";

export default {
  components: {
    VueSignature,
    Toast,
  },
  props: ["isSigning", "toggleSigning", "setSettlementSigned"],
  data() {
    return {
      option: {
        penColor: "#000",
        backgroundColor: "#f9f9f9",
      },
      disabled: false,
      dataURL: "",
      needsSignature: false,
    };
  },
  methods: {
    save() {
      let png = this.$refs.signature.save();
      // let jpeg = this.$refs.signature.save("image/jpeg");
      // let svg = this.$refs.signature.save("image/svg+xml");

      if (!this.$refs.signature.isEmpty()) {
        this.setSettlementSigned();
        this.toggleSigning();
      } else {
        console.log("You must sign the settlement to proceed");
        this.toggleNeedsSignature();
        setTimeout(this.toggleNeedsSignature, 1000);
      }
    },
    clear() {
      this.$refs.signature.clear();
    },
    undo() {
      this.$refs.signature.undo();
    },
    toggleNeedsSignature() {
      this.needsSignature = !this.needsSignature;
    },
    addWaterMark() {
      this.$refs.signature.addWaterMark({
        text: "Fairshake", // watermark text, > default ''
        font: "20px Arial", // mark font, > default '20px sans-serif'
        style: "all", // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill
        fillStyle: "red", // fillcolor, > default '#333'
        strokeStyle: "blue", // strokecolor, > default '#333'
        x: 100, // fill positionX, > default 20
        y: 200, // fill positionY, > default 20
        sx: 100, // stroke positionX, > default 40
        sy: 200, // stroke positionY, > default 40
      });
    },
    FromDataURL(url) {
      this.$refs.signature.fromDataURL("data:image/png;base64", url);
    },
    handleDisabled() {
      this.disabled = !this.disabled;
    },
  },
};
</script>


<style lang="scss" scoped>
.button-container {
  margin-left: -5px;
}
.pad-container {
  max-width: 500px;
  padding: 2px;
  width: 100%;
  border: 1px solid rgba(129,129,129,0.5);
  border-radius: 8px;
}
</style>