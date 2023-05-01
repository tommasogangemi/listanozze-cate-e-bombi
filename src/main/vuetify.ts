import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#465048',
          'primary-light': '#6f7d6d',
          accent: '#933e49',
          neutral: '#EDEBEA',
          'neutral-lighten-1': 'f6f5f5',
          'neutral-lighten-2': '#fdfdfd',
          'neutral-darken-1': '#d5d4d3',
          'neutral-darken-2': '#bebcbb',
          'neutral-darken-3': '#a6a5a4',
          'neutral-darken-4': '#8e8d8c',
          'neutral-darken-5': '#777675'
        }
      }
    }
  },
  defaults: {
    VTextField: {
      variant: 'outlined',
      color: 'primary'
    },
    VTextarea: {
      variant: 'outlined',
      color: 'primary'
    }
  }
})
