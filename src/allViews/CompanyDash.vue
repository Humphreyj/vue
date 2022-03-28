<template>
  <div>
    <v-container fluid>
      <v-card class='d-flex flex-column'  block>
        <ClaimsList />
      </v-card>
    </v-container>
  </div>
</template>


<script>
import ClaimsList from '@/components/CompanyDash/ClaimsList'
export default {
  components: {ClaimsList},
  data() {
    return {
        
    };
  },
};
</script>

