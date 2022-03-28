<template>
  <div class="warning-modals">
    <Modal
      v-if="this.modals[1].trigger[`dialog1`]"
      :depressed="modals[1].depressed"
      :outlined="modals[1].outlined"
      :buttonText="modals[1].buttonText"
      :cardTitle="modals[1].cardTitle"
      :cardText="modals[1].cardText"
      :acceptText="modals[1].acceptText"
      :rejectText="modals[1].rejectText"
      :trigger="modals[1].trigger"
      :advance="advanceModal"
      :cancel="endWarning"
    />

    <Modal
      v-if="this.modals[2].trigger[`dialog2`]"
      :depressed="modals[2].depressed"
      :outlined="modals[2].outlined"
      :buttonText="modals[2].buttonText"
      :cardTitle="modals[2].cardTitle"
      :cardText="modals[2].cardText"
      :acceptText="modals[2].acceptText"
      :rejectText="modals[2].rejectText"
      :trigger="modals[2].trigger"
      :advance="advanceModal"
      :cancel="endWarning"
      :step="modals[2].step"
    />
    <Modal
      v-if="this.modals[3].trigger[`dialog3`]"
      :depressed="modals[3].depressed"
      :outlined="modals[3].outlined"
      :buttonText="modals[3].buttonText"
      :cardTitle="modals[3].cardTitle"
      :cardText="modals[3].cardText"
      :acceptText="modals[3].acceptText"
      :rejectText="modals[3].rejectText"
      :trigger="modals[3].trigger"
      :advance="advanceModal"
      :cancel="endWarning"
      :step="modals[3].step"
    />
    <Modal
      v-if="this.modals[4].trigger[`dialog4`]"
      :depressed="modals[4].depressed"
      :outlined="modals[4].outlined"
      :buttonText="modals[4].buttonText"
      :cardTitle="modals[4].cardTitle"
      :cardText="modals[4].cardText"
      :acceptText="modals[4].acceptText"
      :rejectText="modals[4].rejectText"
      :trigger="modals[4].trigger"
      :advance="advanceModal"
      :cancel="endWarning"
      :step="modals[4].step"
    />
  </div>
</template>

<script>
import Modal from "@/components/uiElements/Modal";
export default {
  props: ["rejectOffer", "endWarning"],
  data() {
    return {
      current: 1,
      next: 2,
      modals: {
        1: {
          depressed: "true",
          outlined: "true",
          buttonText: "Reject & Submit Counter-Offer",
          cardTitle: "Are you sure?",
          cardText:
            "If you reject this offer, you cannot accept it at a later date. You will be required to make a counter-offer that tells AT&T why you think their proposed settlement was unfair and what you think the settlement should be. Would you like to reject this offer and make a counter-offer?",
          acceptText: "Yes",
          rejectText: "No",
          trigger: { dialog1: true },
          step: ""
        },
        2: {
          depressed: "true",
          outlined: "true",
          buttonText: "Reject & Submit Counter-Offer",
          cardTitle: "Warning",
          cardText:
            "You are not guranteed to get a new offer. If you reject this offer and make a counter-offer, AT&T may reject your claim entirely.",
          acceptText: "I understand",
          rejectText: "Cancel",
          trigger: { dialog2: false },
          step: "1 of 3",
        },
        3: {
          depressed: "true",
          outlined: "true",
          buttonText: "Reject & Submit Counter-Offer",
          cardTitle: "Warning",
          cardText:
            "Counter-offers that request compensation for personal time, emotional damages, or pain and suffering almost never succeed.",
          acceptText: "I understand",
          rejectText: "Cancel",
          trigger: { dialog3: false },
          step: "2 of 3",
        },
        4: {
          depressed: "true",
          outlined: "true",
          buttonText: "Reject & Submit Counter-Offer",
          cardTitle: "Warning",
          cardText:
            "Most companies take 2 to 4 weeks to send a new offer, if they send one at all.",
          acceptText: "I understand",
          rejectText: "Cancel",
          trigger: { dialog4: false },
          step: "3 of 3",
        },
      },
    };
  },
  methods: {
    advanceModal() {
      if (this.current < 4) {
        this.modals[this.current].trigger[`dialog${this.current}`] = false;
        this.modals[this.next].trigger[`dialog${this.next}`] = true;
        this.current += 1;
        this.next += 1;
      } else {
        for (let index in this.modals) {
          this.modals[index].trigger[`dialog${index}`] = false;
        }
        this.endWarning();
        this.rejectOffer();
      }
    },
  },
  components: {
    Modal,
  },
};
</script>