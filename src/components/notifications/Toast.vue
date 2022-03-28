<template>
  <v-snackbar
    v-model="this.trigger"
    v-bind:class="textClass"
    :timeout="timeout"
    top
    centered
    fixed
    v-bind:color="color"
  >
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  props: ["trigger", "textClass", "timeout", "color", "text"],
  data() {
    return {

    };
  },
};
</script>