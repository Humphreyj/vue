<template>
  <v-alert
    v-bind:type="type"
    max-width="480"
    class="mx-auto"
    v-bind:border="borderPosition"
    colored-border
    elevation="2"
  >
    {{text}}
  </v-alert>
</template>

<script>
export default {
  props: ["type", "borderPosition","text"]
}
</script>