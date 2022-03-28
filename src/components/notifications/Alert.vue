<template>
     <div>
      <v-alert v-bind:type=typeOf max-width="480" class="mx-auto" dense>
       {{text}}
      </v-alert>
    </div>
</template>

<script>
export default {
  props: ["typeOf", "text"]
}
</script>