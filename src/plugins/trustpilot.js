import Vue from 'vue'
import TrustpilotPlugin from 'vue-trustpilot'

const carouselWidget = {
  templateId: process.env.VUE_APP_TRUSTPILOT_TEMPLATE_ID,
  businessunitId: process.env.VUE_APP_TRUSTPILOT_BUSINESS_UNIT_ID,
  reviewUrl: process.env.UE_APP_TRUSTPILOT_URL,
  locale: 'en-us'
  // ...more Trstupilot options in camel case
}

const miniWidget = {
  templateId: process.env.VUE_APP_TRUSTPILOT_TEMPLATE_ID,
  businessunitId: process.env.VUE_APP_TRUSTPILOT_BUSINESS_UNIT_ID,
  reviewUrl: process.env.UE_APP_TRUSTPILOT_URL,
  locale: 'en-us'
  // ...more Trstupilot options in camel case
}

const options = {
  widgets: {
    carousel: carouselWidget,
    mini: miniWidget
  }
}

Vue.use(TrustpilotPlugin, options)
