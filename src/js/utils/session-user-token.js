const SessionTokenUser = {
  setToken(key, value) {
    return sessionStorage.setItem(key, value)
  },

  getToken(key) {
    return sessionStorage.getItem(key)
  },

  destroyToken(key) {
    return sessionStorage.removeItem(key)
  },
}

export default SessionTokenUser
