<template>
  <v-container class='modal-container'>
    <v-dialog persistent class="d-flex flex-column align-start dialog-top"  v-model="key" width="500">
      <v-card class="py-4 px-6">
       <div class="title d-flex align-baseline justify-start">
         <v-icon class="mt-1 warningRed--text" v-if="step">mdi-alert-circle</v-icon>
          <h5 class=" warningRed--text lighten-1 font-weight-bold ml-2 mr-3 mb-3 card-title" v-if="step">
          {{ cardTitle }}
        </h5>
        <h5 class=" darkGrey--text lighten-1 font-weight-bold lighten-1 mb-3 card-title" v-else>
          {{ cardTitle }}
        </h5>
        
       </div>

       <h6 class="black--text text-subtitle-1 font-weight-bold mt-1 mb-3" v-if="step"> {{step}} </h6>

        <div >
          <p class="text-body-1 font-weight-normal card-text text-left">
            {{ cardText }}
          </p>
        </div>


        <div  class=" button-container d-flex justify-start">
          <v-btn  class="actionBlue--text" text @click="advance()">
            {{ acceptText }}
          </v-btn>
          <v-btn
            v-if="rejectText"
            
            class="darkGrey--text"
            text
            @click="cancel()"
          >
            {{ rejectText }}
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script>
export default {
  props: [
    "depressed",
    "outlined",
    "buttonText",
    "cardTitle",
    "step",
    "cardText",
    "acceptText",
    "rejectText",
    "trigger",
    "advance",
    "cancel"
  ],
  data() {
    return {
    
      key: "",
    };
  },
  methods: {
    cancelCounterOffer() {
      this.cancel()
      this.key = false
    }
  },
  mounted() {
   
    let key = Object.keys(this.trigger);

    this.key = key[0];
  },

};
</script>

<style scoped lang='scss'>
.modal-container {
  position: absolute;
  left: 0;
}
 ::v-deep .v-dialog {
    align-self: flex-start;
    margin-top: 40px;
   
  }

   ::v-deep .v-card {
     .title {
       .v-icon {
       font-size: 24px;
       margin-left: -5px;
     }
     }
    .card-title {
      font-size: 24px;
    }
    .card-text {
      line-height: 24px;
    }
    .button-container {
      margin-left: -10px;
      
    }
    
  }
</style>