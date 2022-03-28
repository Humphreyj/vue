<template>
  <v-container class="mt-4">
    <v-layout row wrap justify-center>
      <v-flex sm8 xs12 md8 lg6>
        <v-card class="mx-3 mb-4" elevation="2" outlined>
          <v-card-title class="blue-grey lighten-5 blue-grey--text">
            Claim History
          </v-card-title>
          <v-card-text>
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
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EventCard from "@/components/history/EventCard";
export default {
  components: {
    EventCard,
  },
  data() {
    return {
      claimHistory: {
        //dummy data to populate history page
        0: {
          id:0,
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
};
</script>