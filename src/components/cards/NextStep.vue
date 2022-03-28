<template>
  <v-card class="mx-auto mb-4" max-width="480" elevation="2">
    <v-card-text>
      <div>Next Step</div>
      
        
        <h4 class="text-h4 font-weight-bold text--primary">
          {{ nextStep }}
        </h4>
      
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["nextStep"]
}
</script>