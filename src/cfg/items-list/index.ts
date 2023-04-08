import PRODUCTION_LIST from './production'
import PREVIEW_LIST from './preview'

export const itemsList = process.env.NODE_ENV === 'production' ? PRODUCTION_LIST : PREVIEW_LIST
