import { computed, defineComponent, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(new Date())

    const updateTime = () => (currentTime.value = new Date())

    const updateInterval = setInterval(updateTime, 1000)

    onUnmounted(() => {
      clearInterval(updateInterval)
    })

    const formatter = new Intl.DateTimeFormat(navigator.language, {
      timeStyle: 'medium',
    })

    const formattedDate = computed(() => formatter.format(currentTime.value))

    return {
      formattedDate,
    }
  },

  template: `<div class="clock">{{ formattedDate }}</div>`,
})
