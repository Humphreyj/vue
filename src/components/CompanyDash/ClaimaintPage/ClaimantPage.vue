<template>
  <div class="claimant-page">
    <router-link to="/company-dash" tag="div">
      <div class="go-back" link to="/company-dash">
        <v-icon x-large color='textBlack' >mdi-arrow-left</v-icon>
        <h6 class="text-h6 textBlack--text">Back</h6>
      </div></router-link
    >
    <div class="left-column">
      <ClaimantDetails :user="claimData.userData" />
      <ClaimDetails :claimData='claimData' />
      <ClaimDocuments />
    </div>
    <div class="right-column">
      <div class="claim-history">
        <div v-for="item in claimHistory" :key="item.id">
          <EventCard
            :author="item.author"
            :eventDate="item.eventDate"
            :eventType="item.eventType"
            :eventText="item.eventText"
            :attachment="item.attachment"
            :attachmentText="item.attachmentText"
          />
        </div>
      </div>
      <div class="action-bar" v-if="currentAction === ''">
        <v-btn
          class="white--text"
          color="actionBlue"
          @click="currentAction = 'Send Message'"
          >Send Message</v-btn
        >
        <v-btn
          class="white--text"
          color="actionBlue"
          @click="currentAction = 'Request Information'"
          >Request Information</v-btn
        >
        <v-btn
          class="white--text"
          color="actionBlue"
          @click="currentAction = 'Send Offer'"
          >Send Offer</v-btn
        >
      </div>
      <CompanyActions
        :currentAction="currentAction"
        :clearCurrentAction="clearCurrentAction"
        v-else
      />
    </div>
  </div>
</template>

<script>
import ClaimantDetails from "./ClaimantDetails.vue";
import ClaimDetails from "./ClaimDetails.vue";
import ClaimDocuments from "./ClaimDocuments.vue";
import EventCard from "@/components/history/EventCard";
import CompanyActions from "./CompanyActions.vue";
import {mapActions} from 'vuex';
export default {
  components: {
    ClaimantDetails,
    ClaimDetails,
    ClaimDocuments,
    EventCard,
    CompanyActions,
  },
  data() {
    return {
      claimData: undefined,
      currentAction: "",
      claimHistory: {
        //dummy data to populate history page
        0: {
          id: 0,
          author: "Company",
          eventDate: "Tues, Sept 28, 12:21pm",
          eventType: "Request for Information",
          eventText:
            "We have received your dispute but are unable to locate your account in our files. Please provide additional information about your account that we can use to locate you in our files. For example, the address on your account, your account number, or the last four digits of your social security number.",
        },
        1: {
          id: 1,
          author: "Claimant",
          eventDate: "Thurs, Sept 30, 12:06pm",
          eventType: "Response to Request for Information",
          eventText:
            "The address on the account is #1 First Street, San Francisco CA 99999.",
        },
        2: {
          id: 2,
          author: "Company",
          eventDate: "Thurs, Sept 30, 3:06pm",
          eventType: "Settlement Offer",
          eventText: "Please respond to the attached settlement offer.",
          attachment: "file",
          attachmentText: "PayPal has offered to unlock your account.",
        },
      },
    };
  },
  methods: {
    ...mapActions(['getClaimByRef']),
    clearCurrentAction() {
      this.currentAction = "";
    },
  },
  async created() {
    let payload = {
      claimRef : this.$route.params.claimRef
    }
   let newData = await this.getClaimByRef(payload)
   this.claimData = newData
   
    
  }
};
</script>
 



<style lang="scss" scoped>
.claimant-page {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 85%;
  max-width: 2000px;
  margin: 20px auto;
  height: 90vh;
  
  .go-back {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }
  .left-column {
    width: 55%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
  .right-column {
    width: 40%;
    height: inherit;
    display: flex;
    flex-direction: column;
    position: relative;

    .claim-history {
      display: flex;
      height: 80%;
      overflow-y: scroll;
      flex-direction: column;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      position: relative;
    }
    .action-bar {
      width: 100%;
      padding: 20px 0;
      display: flex;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 8px;
      position: absolute;
      bottom: 10px;

      .v-btn {
        width: 31%;
        font-size: 0.7rem;
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>