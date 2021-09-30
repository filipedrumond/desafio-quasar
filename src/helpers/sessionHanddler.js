import Cookies from 'js-cookie'
import makeid from './makeId'

export default function sessionHanddler (store) {
  const ssidStore = store.getters['session/getsessionID']
  const ssidCookie = Cookies.get('sessionID')

  if (ssidCookie !== undefined && ssidStore === '') {
    store.dispatch('session/setSessionIdAction', ssidCookie)
  }
  if (ssidCookie === undefined && ssidStore !== '') {
    Cookies.set('sessionID', ssidStore)
  }
  if (ssidCookie === undefined && ssidStore === '') {
    const newSsid = makeid(18)
    store.dispatch('session/setSessionIdAction', newSsid)
    Cookies.set('sessionID', newSsid)
  }
}
