import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивная переменная для захвата пина
    const pinRef = ref(null)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      pinRef.value.style.left = `${event.offsetX}px`
      pinRef.value.style.top = `${event.offsetY}px`
    }

    return {
      handleClick,
      pinRef,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span ref="pinRef" class="pin">📍</span>
    </div>
  `,
})
