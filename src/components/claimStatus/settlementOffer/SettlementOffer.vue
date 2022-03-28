<template>
  <div class="container px-4 text-center font-weight-light">
    <section class="container fill-height px-0 container--fluid">
      <div class="row no gutters">
        <div class="col col-12">
          <section v-if="!rejecting" id="settlement-offer">
            <h1 class="v-heading text-h4 text-sm-h3 mb-4">
              🎉 Congratulations!
            </h1>
            <p class="mx-auto text-h5" style="max-width: 568px">
              You have receieved a settlment offer from AT&T!
            </p>
            <v-card class="mx-auto mt-6 pb-2" max-width="480px">
              <v-card-title class="blue lighten-5 primary--text">
                <span class="text-h6">Offer Summary</span>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-card-text class="py-0 text-center">
                <p class="text-body-1 text--primary font-weight-bold pt-8">
                  AT&T has offered $310.45 in cash and will remove $410.63 for
                  your bill or debt. They will also replace your phone and
                  reinstate you service.
                </p>
                <div class="text-center">
                  <FullClaimDetails v-bind:claimDetails="claimDetails" />
                </div>
              </v-card-text>

              <v-card-actions class="mx-4 pt-12">
                <v-row align="center">
                  <v-btn
                    block
                    color="actionBlue"
                    class="white--text"
                    link
                    :to="link.path"
                  >
                    Accept Offer Now
                  </v-btn>

                  <v-btn
                    block
                    outlined
                    color="actionBlue"
                    class="white--text mt-3 mb-4"
                    @click="setWarning"
                  >
                    Submit Counter-offer
                  </v-btn>

                  <WarningModals
                    v-if="warning"
                    v-bind:endWarning="endWarning"
                    v-bind:rejectOffer="rejectOffer"
                  />
                </v-row>
              </v-card-actions>
            </v-card>
            <!-- MAIN CARD -->
            <div class="mt-8">
              <v-alert
                class="mx-auto text-left"
                border="left"
                colored-border
                color="success"
                elevation="2"
                max-width="480px"
              >
                An attorney has reviewed the fine print and found no red flags.
                Select 'Full Details' to learn what was in the fine print.
              </v-alert>
            </div>
          </section>
          <RejectOffer v-else v-bind:cancelFunction="cancelRejection" />
        </div>
      </div>
    </section>
    <SettlementNotification v-bind:show="showOfferNotification" v-bind:close="setNotification"/>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import StaticCard from "@/components/cards/StaticCard.vue";
import RejectOffer from "@/components/claimStatus/RejectOffer";
import SettlementNotification from "@/components/claimStatus/settlementOffer/SettlementNotification"
import FullClaimDetails from "@/components/claimStatus/settlementOffer/FullClaimDetails";
import WarningModals from "@/components/offerRejectionFlow/WarningModals";
export default {
  data() {
    return {
      claimDetails: false,
      rejecting: false,
      warning: false,
      showOfferNotification: true,
      link: {
        title: "Acceptance",
        icon: "mdi-playlist-edit",
        path: {
          name: "Acceptance",
          params: { claimRef: `${this.$route.params.claimRef}` },
        },
      },
    };
  },
  components: {
    StaticCard,
    RejectOffer,
    SettlementNotification,
    FullClaimDetails,
    WarningModals,
  },
  methods: {
    ...mapActions(["acceptSettlementOffer"]),
    acceptOffer() {
      const sender = {
        claimRef: this.$route.params.claimRef,
      };
      this.acceptSettlementOffer(sender);
    },
    rejectOffer() {
      this.rejecting = true;
    },
    setWarning() {
      this.warning = true;
    },
    setNotification() {
      this.showOfferNotification = false;
    },
    endWarning() {
      this.warning = false;
    },
    cancelRejection() {
      this.rejecting = false;
    },
  },
};
</script>