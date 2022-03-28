<template>
  <v-container class="pt-4" fluid>
    <Alert
      typeOf="error"
      text="After reviewing your claim we have determined that you will need to provide more information before we can send the Notice of Dispute to AT&T."
    />
    <v-card class="mb-5">
      <v-card-text>
        <p class="text-h6 font-weight-bold text--primary">
         Please make sure your claim description includes all 5 of the following details:
        </p>
        <div class="list-container">
          <ul v-for="item in pendingList" :key="item.id" class="text--primary">
            <li>{{ item.text }}</li>
          </ul>
        </div>
        <v-textarea
          name="Your Claim"
          outlined
          class="mt-4"
          v-model="disputeText"
          required="true"
        >
        </v-textarea>
      </v-card-text>
      <v-card-actions class="mx-5 pt-0">
        <v-row justify="start" class="mb-4">
          <v-btn
            class="white--text mr-2"
            data-testid="saveButton"
            color="actionBlue"
            @click="editDisputeText"
          >
            Save Update
          </v-btn>

          <v-btn
            class="textBlack--text mr-2"
            data-testid="saveButton"
            color="greyButton"
            @click="setEditing"
          >
            Edit Other Details
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
import Alert from "@/components/notifications/Alert";
import StaticCard from "@/components/cards/StaticCard";
import ActionCard from "@/components/cards/ActionCard";
import {mapState, mapActions} from 'vuex'

export default {
  props: ["setEditing"],
  name: "ContactVerified",
  data() {
    return {
      pendingList: [
        {
          id: 0,
          text: "There is a clearly described wrong act.",
        },
        {
          id: 1,
          text: "There is a specific request for relief.",
        },
        {
          id: 2,
          text: "It describes how the person was financially harmed by the act.",
        },
        {
          id: 3,
          text: "There is sufficient detail for credibility and for the company to find it in files.",
        },
        {
          id: 4,
          text: "There is a clear relationship between the request for relief and the financial harm.",
        },
      ],
      disputeText: ""
    };
  },
    methods: {
    ...mapActions(["editClaimData"]),
    editDisputeText() {
      
      let sender = {
        claimId: this.$route.params.claimRef,
        data: {dispute_text: this.disputeText},
      };
      
      this.editClaimData(sender)
    }
  },
  computed: {
    ...mapState({
      claimData: (state) => state.ClaimsModule.claimData,
    }),
  },
  mounted() {
    this.disputeText = this.claimData.dispute_text
  },
  components: {
    StaticCard,
    ActionCard,
    Alert,
  },
};
</script>
