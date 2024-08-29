import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import WeatherTitle from './components/WeatherTitle.js'
import WeatherLocationWrapper from './components/WeatherLocationWrapper.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',
  components: {
    WeatherTitle,
    WeatherLocationWrapper,
  },
  setup() {
    return {
      locationsList: getWeatherData(),
    }
  },
  template: `
    <div>
      <WeatherTitle text="Погода в Средиземье" />
      <ul class="weather-list unstyled-list">
        <WeatherLocationWrapper v-for="location in locationsList" :location="location" />
      </ul>
    </div>
  `,
})
