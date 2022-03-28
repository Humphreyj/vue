import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  options: {
    customProperties: true
  },
  theme: {
    themes: {
      light: {
        primary: '#000000',
        fairshakeBlue: '#074B6D',
        fairshakeRed: '#960B00',
        actionBlue: '#2D6AF6',
        negativeRed: '#BD0022',
        warningRed: '#FF5252',
        positiveGreen: '#00BD57',
        cautionYellow: '#EBD300',
        lightGrey: '#E0E0E0',
        greyButton: '#F5F5F5',
        darkGrey: '#818181',
        black: '#666666',
        textBlack: '#000000'
      }
    }
  }

})
