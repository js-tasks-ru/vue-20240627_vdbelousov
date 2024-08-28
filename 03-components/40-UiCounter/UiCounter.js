import { defineComponent, computed } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      type: Number,
      required: false,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    const localCount = computed({
      get() {
        return props.count
      },
      set(newValue) {
        emit('update:count', newValue)
      },
    })

    return {
      localCount,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="localCount <= min" @click="localCount--">➖</UiButton>
      <span class="count" data-testid="count">{{ localCount }}</span>
      <UiButton aria-label="Increment" :disabled="localCount >= max" @click="localCount++">➕</UiButton>
    </div>
  `,
})
