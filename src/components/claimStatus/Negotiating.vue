<template>
  <v-container pt-4 fluid>
    <StaticCard
      title="Claim Status"
      subtitle= "Negotiating"
      text="AT&T has acknowledged your claim and assigned a paralegal or attorney to it. We will let you know when they propose a resolution or respond."
    />

    <div>
      <v-alert dense type="info" max-width="480" class="mx-auto mt-4" color="actionBlue">
        No action required at this time.
      </v-alert>
    </div>
    <NextStep nextStep="Review Settlement Offers" />
  </v-container>
  
</template>


<script>
import StaticCard from "@/components/cards/StaticCard";
import NextStep from "@/components/cards/NextStep";


export default {
  components: {
    StaticCard,
    NextStep
  },
};
</script>