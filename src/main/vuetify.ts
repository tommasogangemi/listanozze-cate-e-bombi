import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#275332',
          'primary-lighten-1': '#52755b',
          'primary-lighten-2': '#7d9884',
          'primary-lighten-3': '#a9baad',
          'primary-lighten-4': '#d4ddd6',
          'primary-darken-1': '#234b2d',
          'primary-darken-2': '#1f4228',
          'primary-darken-3': '#1b3a23',
          'primary-darken-4': '#17321e',
          'primary-darken-5': '#142a19',
          accent: '#99140B',
          'accent-lighten-1': '#ad433c',
          'accent-lighten-2': '#c2726d',
          'accent-lighten-3': '#d6a19d',
          'accent-lighten-4': '#ebd0ce',
          'accent-darken-1': '#8a120a',
          'accent-darken-2': '#7a1009',
          'accent-darken-3': '#6b0e08',
          'accent-darken-4': '#5c0c07',
          'accent-darken-5': '#4d0a06',
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
    }
  }
})
