import { CFG } from '@/cfg'
import google from 'googleapis'

// let authInitPromise: Promise<void>

// export const initAuthClient = async () => {
//   console.log('aaaaaaaaaaaaaa INIT CLIENT', gapi)

//   if (!authInitPromise) {
//     gapi.load('client', () => {
//       console.log('aaaaaaaaaaaaaa CLIENT CB', gapi, authInitPromise)
//       authInitPromise = gapi.client.init({
//         apiKey: CFG.googleApiKey,
//         clientId: CFG.googleClientId,
//         scope: CFG.baseUrl
//       })
//       console.log('aaaaaaaaaaaaaa END CLIENT CB', authInitPromise, gapi.client.getToken())
//     })
//   }

//   return authInitPromise
// }

// export const getToken = () => {
//   console.log('aaaaaaaaaaaaaa GET TOKEN', authInitPromise, gapi.auth?.getToken())
//   return gapi.auth.getToken().access_token
// }
