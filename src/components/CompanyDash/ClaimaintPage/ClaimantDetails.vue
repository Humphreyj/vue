<template>
  <div class="claimaint-details">
    <div class="claimant-name-plate">
      <div class="name-and-claim">
        <h3 class="h3-text full-name">{{ fullName }}</h3>
        <p class="claim-ref">{{ user.claimRef }}</p>
      </div>

      <v-btn class="flag-claim white--text" color="negativeRed"
        >Flag Claim</v-btn
      >
    </div>
    <div class="claimant-contact-details">
      <div class="details-column">
        <p class="claimaint-phone">{{ user.contact.phone }}</p>
        <p class="claimaint-email">{{ user.contact.email }}</p>
       
      </div>
      <div class="details-column">
         <p class="claimaint-street-address">
          {{ user.address.street_address }}
        </p>
        <p class="claimant-full-address">{{ fullAddress }}</p>
        
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import EventCard from "@/components/history/EventCard";
export default {
  data() {
    return {
      claimantName: "",
      claimantAddress: "",
    };
  },
  components: { EventCard },
  computed: {
    ...mapState({
      claimReference: (state) => state.ClaimsModule.claimRef,
    }),
    fullName: function () {
      return (this.claimantName =
        this.user.name.first_name + " " + this.user.name.last_name);
    },
    fullAddress: function () {
      return (this.claimantAddress =
        this.user.address.city +
        ", " +
        this.user.address.state +
        " " +
        this.user.address.zip);
    },
  },
  methods: {
    ...mapActions(['getClaimData'])
  },
  props: ["user"],
  mounted() {
    //  const payload = {
    //   claimId: this.claimReference
    // }
    // this.getClaimData(payload);
    console.log(this.user)
  }
};
</script>

<style lang="scss" scoped>
.claimaint-details {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  .claimant-name-plate {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    .name-and-claim {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .full-name {
        font-size: 24px;
      }
      .claim-ref {
        margin-left: 20px;
        margin-top: 15px;
        font-size: 16px;
      }
    }
  }
  .claimant-contact-details {
    width: 400px;
    display: flex;
    justify-content:flex-start;
    align-items: baseline;
    padding: 1rem;
  
    .details-column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-right: 10px;
    }
  }
  .claim-history {
    // width: 50%;
  }
}
</style>