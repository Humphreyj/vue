<template>
<DisplayClaimData v-if="!editing" v-bind:buttonFunction="editClaim" v-bind:cancelFunction="cancelClaim"/>
<EditClaim v-else v-bind:cancelFunction="cancelClaim"/>

  
</template>

<script>
import { mapState,mapActions } from 'vuex'
import DisplayClaimData from "@/components/claimStatus/DisplayClaimData"
import EditClaim from "@/components/claimStatus/EditClaim"
export default {
  data () {
    return {
      editing: false
    }
  },
  components: {
    DisplayClaimData,
    EditClaim
  },
  methods: {
    ...mapActions(["getClaimData","editClaimData"]),
    cancelClaim() {
      this.editing = false;
    },
    editClaim() {
      this.editing = true;
    }
  },
  mounted() {
    const sender = {
      claimId: this.$route.params.claimRef
    }
    this.getClaimData(sender);
  },
}
</script>