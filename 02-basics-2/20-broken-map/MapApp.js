import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    const x = ref(0)
    const y = ref(0)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = `${event.offsetX}px`
      y.value = `${event.offsetY}px`
    }

    const pinStyles = computed(() => ({ left: x.value, top: y.value }));

    return {
      handleClick,
      pinStyles,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span :style="pinStyles" class="pin">📍</span>
    </div>
  `,
})
