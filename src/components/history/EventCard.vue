<template>
  
    <div class="event-card-container">
    <p class="body-2 text-center mb-3">{{ eventDate }}</p>
    <h3 :class="title">
      {{ eventType }}
    </h3>
    <v-flex :class="alignment">
      <v-card :class="card" outlined width="75%" elevation="0">
        <p class="ma-0">
          {{ eventText }}
        </p>
        <v-row class="mt-4" v-if="attachment">
          <p class="mt-2 ml-3 mb-4">
            {{ attachmentText }}
          </p>
          <v-btn tile text small color="info" class="mb-2">
            <v-icon left> mdi-file-document </v-icon>
            View Attachment
          </v-btn>
        </v-row>
      </v-card>
    </v-flex>
  </div>
  
</template>

<script>
export default {
  props: [
    "author",
    "eventDate",
    "eventType",
    "eventText",
    "attachment",
    "attachmentText",
  ],
  data() {
    return {
      titleClass: "text-right black--text mb-2",
      flexClass: "d-flex justify-start",
      cardClass: "light-blue lighten-5 px-4 py-3 mb-2",
    };
  },
  computed: {
    alignment: function () {
      if (this.author === "Claimant") {
        return (this.flexClass = "d-flex justify-end");
      } else {
        return (this.flexClass = "d-flex justify-start");
      }
    },
    card: function () {
      if (this.author !== "Claimant") {
        return (this.cardClass = "px-4 py-3 mb-2");
      } else {
        return (this.cardClass = " light-blue lighten-5 px-4 py-3 mb-2");
      }
    },
    title: function () {
       if (this.author === "Claimant") {
        return (this.titleClass = "text-right black--text mb-2");
      } else {
        return (this.titleClass = "text-left black--text mb-2");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.event-card-container {
  
  display: flex;
  flex-direction: column;
  padding: 15px;
   
  
}
</style>