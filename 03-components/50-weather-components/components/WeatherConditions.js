import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherConditions',
  props: {
    title: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  template: `
    <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="title">
            {{ icon }}
        </div>
        <div class="weather-conditions__temp">{{ degree }} °C</div>
    </div>
  `,
})
