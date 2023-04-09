import AppVue from '@/App.vue'
import { createApp } from 'vue'

import '@/assets/main.css'
import { vuetify } from './vuetify'

createApp(AppVue).use(vuetify).mount('#app')
