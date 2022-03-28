<template>
    <v-navigation-drawer
      v-bind:v-model=state
      app
    >
     <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Claimant Dashboard
          </v-list-item-title>
          <v-list-item-subtitle>
            Page Designs
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>


<script>
export default {
  props: ["state"],
  data() {
   return {
      items: [
        { title: 'Contact Verified', icon: 'mdi-check-bold', to: '/' },
        { title: 'Edit Claim', icon: 'mdi-playlist-edit', to: '/edit-claim' },
        { title: 'Claim Pending', icon: 'mdi-clock-outline', to: '/claim-pending' },
        { title: 'RFI', icon: 'mdi-information', to: '/rfi' },
        { title: 'Negotiating', icon: 'mdi-account-voice', to: '/negotiating' },
        { title: 'Escalation', icon: 'mdi-account-voice', to: '/escalation' },
        { title: 'Settlement Offer', icon: 'mdi-file-document', to: '/settlement-offer' },
        { title: 'History', icon: 'mdi-history', to: '/history' },
        { title: 'Company Dash', icon: 'mdi-domain', to: '/company-dash' },
        { title: 'Company Inbox', icon: 'mdi-inbox-arrow-down', to: '/inbox' },
        { title: 'Layout', icon: 'mdi-fit-to-page', to: '/layout' },
      ],
   }
  }
}
</script>