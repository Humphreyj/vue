<template>
  <v-container pt-4 fluid>
    <StaticCard title="Claim Status" subtitle="Information Requested" />
    <RFI />
  </v-container>
</template>
<script>
import StaticCard from "@/components/cards/StaticCard";
import RFI from "@/components/forms/RFI";
export default {
  data() {
    return {};
  },
  components: {
    StaticCard,
    RFI,
  },
};
</script>