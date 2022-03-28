<template>
  <div>
    <ActionCard
      title="Submit Claim"
      subtitle="Please make sure your claim description includes all 5 of the following details"
      buttonText="Submit Claim"
      v-bind:list="pendingList"
      v-bind:buttonFunction="buttonFunction"
    />
  </div>
</template>

<script>
import ActionCard from "@/components/cards/ActionCard";
import Alert from "@/components/notifications/Alert";
import { mapState, mapActions } from "vuex";
export default {
  props: ["buttonFunction"],
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
    };
  },
  computed: {
    ...mapState({
      claimData: (state) => state.ClaimsModule.claimData,
    }),
  },
  methods: {
    ...mapActions(["getClaimData"]),
  },
  components: {
    ActionCard,
    Alert,
  },
};
</script>