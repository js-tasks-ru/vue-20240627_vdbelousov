import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',
  template: `
    <p>Сегодня {{new Date().toLocaleDateString('en-EN', { dateStyle: 'long' })}}</p>
  `,
})

createApp(App).mount('#app')
