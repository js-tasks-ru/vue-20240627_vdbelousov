import { defineComponent } from 'vue'
import { WeatherConditionIcons } from '../weather.service'
import WeatherAlert from './WeatherAlert'
import WeatherMainInfo from './WeatherMainInfo'
import WeatherConditions from './WeatherConditions'
import WeatherDetails from './WeatherDetails'

export default defineComponent({
  name: 'WeatherLocationWrapper',
  components: {
    WeatherAlert,
    WeatherMainInfo,
    WeatherConditions,
    WeatherDetails,
  },
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isSun = (dt, sunrise, sunset) => dt > sunrise && dt < sunset
    return {
      icons: WeatherConditionIcons,
      isSun,
    }
  },
  template: `
    <li class="weather-card" :class="{'weather-card--night': !isSun(location.current.dt, location.current.sunrise, location.current.sunset) }" >
        <WeatherAlert v-if="location.alert" :sender-name="location.alert.sender_name" :description="location.alert.description" />
        <WeatherMainInfo :name="location.geographic_name" :time="location.current.dt" />
        <WeatherConditions :title="location.current.weather.description" :degree="(location.current.temp - 273.15).toFixed(1)" :icon="icons[location.current.weather.id]" />
        <div class="weather-details">
            <WeatherDetails title="Давление, мм рт. ст." :value="Math.round(location.current.pressure * 0.75)" />
            <WeatherDetails title="Влажность, %" :value="location.current.humidity" />
            <WeatherDetails title="Облачность, %" :value="location.current.clouds" />
            <WeatherDetails title="Ветер, м/с" :value="location.current.wind_speed" />
        </div>
    </li>
  `,
})
