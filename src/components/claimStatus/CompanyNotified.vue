<template>
  <v-container class="pt-4" fluid>
    <StaticCard
      title="Claim Status"
      subtitle="Company Notified"
      text="Company Name has received your claim documents and is processing them. We will let you know when they have responded."
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
    <NextStep nextStep="Negotiating" />
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