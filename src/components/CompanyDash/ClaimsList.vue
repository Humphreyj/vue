<template>
  <div class="claims-list-container">
    <ClaimListActionBar
      :listOfClaims="listOfClaims"
      :sortByActive="sortActiveClaims"
      :filterBy="filterBy"
      :sortByDate="sortByDate"
    />
    <div class="list-headers">
      <div v-for="header in headers" :key="header.id">
        <h6 class="text-h6 list-header">{{ header.text }}</h6>
      </div>
    </div>
    <div v-for="claim in listOfClaims" :key="claim.claim">
      <ClaimListCard
        :claimantName="claim.userData"
        :claimRef="claim.claimRef"
        :daysSinceNotice="claim.notice"
        :demandsArbitration="claim.demandForArbitration"
        :status="claim.status"
      />
    </div>
  </div>
</template>

<script>
import ClaimListActionBar from "@/components/CompanyDash/ClaimListActionBar";
import ClaimListCard from "@/components/CompanyDash/ClaimListCard";
import { mapState, mapActions } from "vuex";
export default {
  components: { ClaimListActionBar, ClaimListCard },
  computed: {
    ...mapState({
      headers: (state) => state.CompanyClaimsList.headers,
      allClaims: (state) => state.CompanyClaimsList.allClaims,
      claims: (state) => state.AllClaims.allClaims,
    }),
  },
  data() {
    return {
      listOfClaims: [],
    };
  },
  methods: {
    ...mapActions(["timeSince"]),
    filterBy(searchTerm, filter) {
      let filteredList;
      if (searchTerm && filter === "full_name") {
        filteredList = this.listOfClaims.filter((item) =>
          item.userData.name[`${filter}`]
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
        this.listOfClaims = filteredList;
      } else if (searchTerm) {
        filteredList = this.listOfClaims.filter((item) =>
          item[`${filter}`].toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.listOfClaims = filteredList;
      } else {
        this.listOfClaims = this.claims;
      }
    },
    sortByDate(value) {
      let listCopy = [...this.listOfClaims];
      let sortedClaims;

      if (value === "recent") {
        sortedClaims = listCopy.sort(
          (a, b) => new Date(b.notice) - new Date(a.notice)
        );
        this.listOfClaims = sortedClaims;
      } else if (value === "oldest") {
        sortedClaims = listCopy.sort(
          (a, b) => new Date(a.notice) - new Date(b.notice)
        );
        this.listOfClaims = sortedClaims;
      } else {
        this.listOfClaims = this.claims;
      }
    },
    sortActiveClaims(value) {
      let listCopy = [...this.claims];
      let result;
      if (value === "all") {
        this.listOfClaims = this.claims;
        return;
      } else if (value === true) {
        result = listCopy.filter((claim) => claim.active === true);
        this.listCopy = result;
      } else if (value === false) {
        result = listCopy.filter((claim) => claim.active === false);
        this.listCopy = result;
      }
      this.listOfClaims = result;
    },
  },
  mounted() {
    this.listOfClaims = this.claims;
  },
};
</script>

<style lang="scss" scoped>
.claims-list-container {
  position: relative;
  overflow-x: scroll;
  padding-top: 0;
  width: 100%;
  .list-headers {
    padding: 10px 25px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    text-align: center;
    border-bottom: 1px solid #c9d1d9;
    position: relative;
    .list-header {
      width: 140px;
      text-align: center;
      &:first-child {
        left: -2.3rem;
        position: relative;
      }
    }
  }
}
</style>