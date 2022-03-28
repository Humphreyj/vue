<template>
  <v-container class="pt-4" fluid>
    <StaticCard
      title="Claim Status"
      subtitle="Claim Accepted"
      text="Your claim has been assigned and we are creating your claim documents. We will let you know when they have been mailed to Company Name"
    />
    <v-alert
      dense
      type="info"
      max-width="480"
      class="mx-auto mt-4"
      color="actionBlue"
    >
      No action required at this time.
    </v-alert>
    <NextStep nextStep="Company Notified" />
  </v-container>
</template>
<script>
import StaticCard from "@/components/cards/StaticCard";
import NextStep from "@/components/cards/NextStep";
export default {
  components: {
    StaticCard,
    NextStep,
  },
};
</script>