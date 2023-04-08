import PRODUCTION from './production'
import PREVIEW from './preview'

const LIST = process.env.NODE_ENV === 'production' ? PRODUCTION : PREVIEW

export default LIST
