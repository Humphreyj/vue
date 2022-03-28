<template>
  <v-card class="mx-auto pb-2 mb-3" max-width="480" elevation="2">
    <v-card-text class="pb-4">
      <p class="text-h6 font-weight-bold text--primary">
        {{ title }}
      </p>

      <div v-if="list" class="list-container">
        <ul v-for="item in list" :key="item.id" class="text--primary">
          <li>{{ item.text }}</li>
        </ul>
      </div>
    </v-card-text>
    <v-card-actions class="mx-2">
      <v-btn class="white--text" block depressed color="actionBlue" @click='buttonFunction()'> {{ buttonText }} </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>

export default {
  props: ["title", "subtitle", "text", "buttonText", "list", "buttonFunction"],
  methods: {
   
  }
};
</script>