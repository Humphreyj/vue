<template>
  <v-app id="inspire" style="background: #f7fafc">
    <v-navigation-drawer absolute temporary v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Claimant Dashboard
          </v-list-item-title>
          <v-list-item-subtitle> Page Designs </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.path"
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

    <v-app-bar color="fairshakeBlue" dark app>
      <v-app-bar-nav-icon
        data-testid="hamburger"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-medium">FairShake</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="pr-8 text-body-1"
        >{{ `${userData.first_name} ${userData.last_name}` }} vs
        AT&T</v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: false,
    items: []
  }),
  methods: {
    ...mapActions(["getClaimRef"]),
  },
  computed: {
    ...mapState({
      userData: (state) => state.UserModule.userData.name,
      claimRef: (state) => state.ClaimsModule.claimRef,
    }),
  },
  updated() {
    if (this.$route.params.claimRef !== undefined) {
      this.getClaimRef(this.$route.params.claimRef);
      // if the claimant visits a route without the claimRef
      // this will not be reset
    }
  },
  watch: {
    // setting items in the updated hook sure did cause an infinite loop
    // so we watch claimRef here and when it exists render the items
    // in the sidebar
    claimRef: function () {
      if (this.claimRef) {
        this.items = [
          {
            title: "Claim Status",
            icon: "mdi-playlist-edit",
            path: {
              name: "Claim Status",
              params: { claimRef: `${this.claimRef}` },
            },
          },
          {
            title: "View Claim",
            icon: "mdi-playlist-edit",
            path: {
              name: "View Claim",
              params: { claimRef: `${this.claimRef}` },
            },
          },
          {
            title: "Escalation",
            icon: "mdi-account-voice",
            path: {
              name: "Escalation",
              params: { claimRef: `${this.claimRef}` },
            },
          },
          {
            title: "History",
            icon: "mdi-history",
            path: {
              name: "History",
              params: { claimRef: `${this.claimRef}` },
            },
          },
          { title: "Company Dash", icon: "mdi-domain", path: "/company-dash" },
         
          
        ];
      } 
    },
  },
  components: {},
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
$body-font-family: "Roboto";
.v-application {
  .v-navigation-drawer {
    z-index: 1500;
  }
  .v-app-bar {
    position: fixed;
    z-index: 1000;
  }
  
  
  font-family: $body-font-family, sans-serif !important;
  html {
    font-size: 62.5%;
  }
}
html {
  font-size: 62.5%;
}

</style>

