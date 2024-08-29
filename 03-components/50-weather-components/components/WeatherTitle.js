import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherTitle',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  template: `
    <h1 class="title">{{ text }}</h1>
  `,
})
