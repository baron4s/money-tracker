import Config from '../../config/config'
import SessionTokenUser from '../../utils/session-user-token'

const CheckAuthUser = {
  exludePage: ['login.html', 'register.html'],

  checkUserLogin() {
    const userToken = SessionTokenUser.getToken(Config.USER_TOKEN_KEY)
    const user = Boolean(userToken)
    const isUserOnAuthPage = this._isUserOnAuthPage(this.exludePage)

    if (user) {
      if (isUserOnAuthPage) {
        window.location.href = '/'
      } else {
        this._showLoginMenuOrUserLogMenu(user)
      }
    }
  },

  _showLoginMenuOrUserLogMenu(userLoginState) {
    const loginMenu = document.querySelector('#userLoginMenu')
    const userLoggedMenu = document.querySelector('#userLoggedMenu')

    if (userLoginState) {
      loginMenu.classList.add('d-none')
      userLoggedMenu.classList.add('d-block')

      loginMenu.classList.remove('d-block')
      userLoggedMenu.classList.remove('d-none')

      return
    }
  },

  _isUserOnAuthPage(pages) {
    const filteredPages = pages.filter((item) => {
      return window.location.pathname.endsWith(item)
    })

    return Boolean(filteredPages.length)
  },
}

export default CheckAuthUser
