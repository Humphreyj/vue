<template>
    <v-card
        class="mx-auto pb-2"
        max-width="480"
        elevation="2"
      >
        <v-card-text>
          <p class="text-h6 font-weight-bold text--primary">
            {{title}}
          </p>
          </v-card-text>
          <div>
            <v-text-field
              class="mx-4"
              v-bind:label=inputLabel
              placeholder="12345678"
              outlined
            ></v-text-field>
          </div>
          <v-card-actions
            class="mx-2"
          >
            <v-btn
              block
              depressed
              v-bind:color=buttonColor
            >
              {{buttonText}}
            </v-btn>
          </v-card-actions>
    </v-card>
</template>

<script>

export default {
    props: ["title", "inputLabel", "buttonColor", "buttonText"]
}
</script>