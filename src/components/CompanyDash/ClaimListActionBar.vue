<template>
  <div class="company-actions">
    <div class="claim-type-select">
      <v-select
        v-model="selected"
        :items="selectItems"
        item-text="text"
        item-value="value"
        outlined
        @change="sortByActive"
      ></v-select>
    </div>
    <div class="claim-search-container">
      <v-text-field
        v-model="search"
        v-on:input="filterBy(search, selectedSearchFilter.value)"
        :label="`Search ${selectedSearchFilter.text}`"
        single-line
        outlined
        hide-details
      >
        <template v-slot:append>
          <v-btn color="actionBlue">
            <v-icon color="white">mdi-magnify</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </div>
    <div class="filter-button-container">
      <v-btn @click="toggleDisplayFilters" outlined depressed class="darkGrey--text font-weight-bold">
        <v-icon color="darkGrey" >mdi-filter-outline</v-icon>

        Filters
      </v-btn>
      <div class="filters-container" v-if='showSearchFilters'>
        <div v-for="filter in searchFilters" :key="filter.id">
          <p class="filter-display textBlack--text" @click="setSelectedSearchFilter(filter)">{{filter.text}}</p>
        </div>
      </div>
    </div>
    <div class="sort-claims-container">
      <p class="sort-label darkGrey--text font-weight-bold">Sort:</p>
      <v-select
        v-model="dateFilter"
        outlined
        :items="filterItems"
        item-text="text"
        item-value="value"
        @change="sortByDate"
      ></v-select>
      <v-btn v-if="showClearFilters" color="actionBlue" class="white--text" @click="clear">clear</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: { id: 0, text: "All Claims", value: "all" },
      selectItems: [
        { id: 0, text: "All Claims", value: "all" },
        { id: 1, text: "All Active Claims", value: true },
        { id: 2, text: "Inactive Claims", value: false },
      ],
      dateFilter: { id: 0, text: "Filter By Date", value: "" },
      filterItems: [
        { id: 0, text: "Filter By Date", value: "" },
        { id: 1, text: "Most Recent", value: "recent" },
        { id: 2, text: "Least Recent", value: "oldest" },
      ],
      showClearFilters: false,
      search: "",
      showSearchFilters: false,
      selectedSearchFilter: {id: 0, value: "full_name", text: "By Name"},
      searchFilters: [
        {id: 0, value: "full_name", text: "by Name"},
        {id: 1, value: "claimRef", text: "by Claim"},
        {id: 2, value: "status", text: "by Status"}
      ]
    };
  },
  methods: {
    clear () {
      this.dateFilter = ""
      this.sortByDate('clear')
    },
    toggleDisplayFilters() {
      this.showSearchFilters = !this.showSearchFilters
    },
    setSelectedSearchFilter(filter) {
      this.selectedSearchFilter = filter
      this.toggleDisplayFilters()
    }
  },
  props: ["listOfClaims", "sortByActive","filterBy","sortByDate"],
  watch: {
    dateFilter: function () {
      if(this.dateFilter === '') {
        this.showClearFilters = false
        this.dateFilter = ""
      }else {
        this.showClearFilters = true
      }
    }
  },
};
</script>


<style lang="scss" scoped>
.company-actions {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  padding: 30px 0;
  .claim-type-select {
    width: 25%;
    padding: 0;
    display: flex;
    align-items: baseline;
    height: 55px;
    justify-content: space-evenly;
  }
  .claim-search-container {
    width: 25%;
    position: relative;
    ::v-deep .v-btn {
      height: 98%;
      width: 20%;
      position: absolute;
      bottom: 0;
      right: 1px;
      top: 0;
    }
  }

  .filter-button-container {
    position: relative;
    ::v-deep .v-btn {
      height: 55px;
      padding-left: .5rem;
      position: relative;
      z-index: 20;
      background-color: white;
    }
    .filters-container {
      height: 150px;
      width: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border: 1px solid black;
      border-radius: 4px;
      border-top: none;
      margin-top: -.5rem;
      padding-left: .5rem;
      z-index: 10;
      background-color: white;
      .filter-display {
        position: relative;
        margin-top: 10px;
        font-size: 1.2rem;

      }
    }
  }

  .sort-claims-container {
    padding-top: 3px;
    margin: 0;
    display: flex;
    align-items: baseline;
    height: 57px;
    justify-content: space-evenly;
    position: relative;


    .sort-label {
      font-size: 20px;
      margin-right: 10px;
    }

    ::v-deep .v-btn {
      position: absolute;
      top: 4rem;
      margin-right: -3rem;
      height: 30px;
    }
  }
}
</style>