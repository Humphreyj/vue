<template>
      <v-card
      class="mx-auto mb-4"
      max-width="480"
      elevation="2"
    >
      <v-card-text>
        <div>{{title}}</div>
        <div class='d-flex justify-start'>
          <v-icon v-bind:color="iconColor"> {{icon}} </v-icon>
          <h4 class="text-h4 font-weight-bold text--primary">
          {{subtitle}}
        </h4>
        </div>
        
        <div class="text--primary">
          {{text}}
        </div>
      </v-card-text>
    </v-card>
</template>


<script>
export default {
    props: [
        'title',
        'icon',
        'iconColor',
        'subtitle',
        'text',
    ],
    data () {
      return {
     
      }
    }
}
</script>