<template>
  <v-container class="pt-4" fluid>
    <Alert
      typeOf="success"
      text="Your contact information has been verified. Your claim will be mailed to AT&T after being reviewed."
    />
    <v-card class="mb-5">
      <v-card-title class="blue-grey lighten-5 blue-grey--text mb-1">
        <span class="text-h6">Strengthen Your Claim</span>
      </v-card-title>
      <v-card-text>
        <p class="text-h6 font-weight-bold text--primary">
          Make sure your claim contains the following:
        </p>
        <div class="list-container">
          <ul v-for="item in this.verifiedList" :key="item.id" class="text--primary">
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
    <LiteAlert 
    type="warning"
    borderPosition="left"
    text="This is your last chance to edit your claim before being sent to the
    company."
    />
  </v-container>
</template>


<script>
import StaticCard from "@/components/cards/StaticCard";
import ActionCard from "@/components/cards/ActionCard";
import Alert from "@/components/notifications/Alert";
import LiteAlert from "@/components/notifications/LiteAlert";
import { mapState,mapActions } from "vuex";

export default {
  name: "ContactVerified",
 props: ["setEditing"],
  data() {
    return {
      verifiedList: [
        {
          id: 0,
          text: "All services and account numbers you have with the company",
        },
        {
          id: 1,
          text: "Exactly how much you want from the company",
        },
        {
          id: 2,
          text: "How you calculated this amount",
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
    LiteAlert
  },
};
</script>
