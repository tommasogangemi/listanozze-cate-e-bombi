import PRODUCTION from './production'
import PREVIEW from './preview'

const LIST = process.env.NODE_ENV === 'production' ? PRODUCTION : PREVIEW

console.log('aaaaaaaaaaaaaaa', process.env.NODE_ENV)

export default LIST
