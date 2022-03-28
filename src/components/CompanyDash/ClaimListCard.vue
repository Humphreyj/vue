<template>
  <div class="claims-list-item">
    <div class="name-and-claim">
      <h6 class="claimaint-name text-h6">{{ fullName }}</h6>
      <p @click="setClaimRef" class="claim-ref actionBlue--text"> {{ claimRef }} </p>
    </div>
    <h6 :class="noticeColor">{{ noticeDays }}</h6>
    <h6 class="days-until-eligible text-h6 claim-stat">
      {{ daysUntil }}
    </h6>
    <h6 class="demands-arbitration text-h6 claim-stat">
      {{ demandsArbitration }}
    </h6>
    <h6 class="status text-h6 claim-stat actionBlue--text">{{ status }}</h6>
    <div class="claims-list-select">
      <v-select
        v-model="input"
        :items="selectItems"
        item-text="text"
        item-value="id"
        color="actionBlue"
        height="35"
        solo
        flat
        dense
      />
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
     ...mapState({
      
      claimReference: (state) => state.ClaimsModule.claimRef,
    }),
    noticeColor: function () {
      if (this.noticeDays > 14 && this.noticeDays < 30) {
        return "days-since-notice text-h6 claim-stat cautionYellow--text font-weight-bold";
      } else if (this.noticeDays > 30) {
        return "days-since-notice text-h6 claim-stat negativeRed--text font-weight-bold";
      } else if (this.noticeDays === "!!") {
        return "days-since-notice text-h6 claim-stat negativeRed--text font-weight-bold";
      } 
      else {
        return "days-since-notice text-h6 claim-stat positiveGreen--text darken-1 font-weight-bold";
      }
    },
    daysSince: async function () {
      let result = await this.timeSince(this.daysSinceNotice);
     
      return (this.noticeDays = result);
    },
     fullName: function () {
      return (this.claimant =
        this.claimantName.name.first_name + " " + this.claimantName.name.last_name);
    },
  },
  data() {
    return {
      claimant: '',
      noticeDays: 0,
      daysUntil: 0,
      color: "positiveGreen",
      input: { id: 0, text: "Actions", value: "none" },
      selectItems: [
        { id: 0, text: "Actions", value: "none" },
        { id: 1, text: "Reject", value: "All" },
        { id: 2, text: "Accept", value: "Inactive" },
      ],
    };
  },
 
  methods: {
    ...mapActions(["timeSince", "timeUntil", "getClaimRef"]),
    async setClaimRef() {
      let claimId = await this.getClaimRef(this.claimRef)
      if(claimId) {
        
        this.$router.push({ name: 'Company Inbox', params: { claimRef: this.claimRef } })
      }else {
        console.log("nothing happened")
      }
    }
  },
  async created() {
    let result = await this.timeSince(this.daysSinceNotice);
    if (result <= 30) {
      this.daysUntil = 30 - result;
    } else {
      this.daysUntil = 0;
    }
    return (this.noticeDays = result);
  },
  async updated() {
    let result = await this.timeSince(this.daysSinceNotice);
    if (result <= 30) {
      this.daysUntil = 30 - result;
    } else {
      this.daysUntil = 0;
    }
    return (this.noticeDays = result);
  },
  props: [
    "claimantName",
    "claimRef",
    "daysSinceNotice",
    "demandsArbitration",
    "status",
  ],
};
</script>
<style lang="scss" scoped>
.claims-list-item {
  padding: 1rem 0.5rem;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #c9d1d9;
  .claim-stat {
    align-self: center;
    position: relative;
    left: -1rem;
    text-align: center;
    width: 110px;
  }
  .days-since-notice {
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.7);
  }
  .demands-arbitration {
    left: -1.5rem;
  }

  .status {
    width: 140px;
    left: -2.2rem;
  }

  .name-and-claim {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 0.5rem;
    margin-top: 1rem;
    position: relative;
    .claim-ref {
      font-size: 1rem;
      text-decoration: underline;
      cursor: pointer;
      position: relative;
      &:hover {
        font-weight: 600;
        top: .2rem;
      }
    }
  }

  .claims-list-select {
    width: 8rem;
    position: relative;
    right: -5rem;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    @media screen and (max-width: 1025px) {
      right: -2rem;
      width: 7.5rem;
    }
    ::v-deep .v-input__slot {
      margin-top: 1.5rem;
      background-color: #2d6af6;
      padding-left: 1rem;
      border-radius: 6px;
      text-align: center;
    }

    ::v-deep .v-select__selections {
      height: max-content;

      color: white;
      height: 3rem;
    }
    ::v-deep .v-icon {
      color: white;
      background-color: #2d6af6;
    }
  }
}
.v-list {
  background-color: #2d6af6;
}
::v-deep .v-list-item__title {
  color: white;
}
</style>