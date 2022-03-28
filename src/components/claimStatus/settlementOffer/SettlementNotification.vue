<template>
  <v-dialog
    persistent
    class="d-flex flex-column align-start"
    v-model="show"
    width="500"
  >
    <v-card class="py-4 px-6">
      <div class="title d-flex align-baseline justify-start">
        <h5 class="textBlack--text h5-text mb-3 card-title">
          You have a settlement offer from AT&T!
        </h5>
      </div>
      <div class="list-container d-flex flex-column align-start">
        <ul class="darkGrey--text lighten-1">
          <li class="mb-2 mt-2 text-subtitle-1 font-weight-bold list-item">
            You must respond in {{ timeLeft }} days or this offer may expire.
          </li>
          <div v-for="item in notificationList" :key="item.id">
            <li class="mb-2 mt-2 text-subtitle-1 font-weight-bold list-item">
              {{ item.text }}
            </li>
          </div>
        </ul>
      </div>

      <div class="button-container d-flex justify-start">
        <v-btn class="white--text mt-3" color="actionBlue" @click="close()">
          View Offer
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["show", "close"],
  data() {
    return {
      timeLeft: 14,
      notificationList: [
        {
          id: 0,
          text: "If you accept the offer, most credit or cash payments from AT&T take 30 days to process.",
        },
        {
          id: 1,
          text: "Most credit report changes take 60-90 days to be completed by the credit reporting agencies.",
        },
      ],
    };
  },
  async mounted() {
    let dates = {
     
      end: "01/10/2022",
    };
    let result = await this.timeUntil(dates);

    this.timeLeft = result;
  },
  methods: {
    ...mapActions(["timeUntil"]),
  },
};
</script>


<style lang="scss" scoped>

::v-deep .v-dialog {
  align-self: flex-start;
  margin-top: 40px;
  .list-item {
    width: 95%;
    margin-left: -5px;
  }
}
</style>