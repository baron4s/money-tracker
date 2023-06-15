import Config from '../../config/config'
import Auth from '../../networks/auth'
import SessionTokenUser from '../../utils/session-user-token'
import CheckAuthUser from './check-auth-user'

const Login = {
  async init() {
    CheckAuthUser.checkUserLogin()
    this._initialListener()
  },

  _initialListener() {
    const formElement = document.getElementById('formLogin')
    formElement.addEventListener('submit', async (event) => {
      event.preventDefault()
      event.stopPropagation()

      formElement.classList.add('was-validated')
      await this._getLogged()
    })
  },

  async _getLogged() {
    const formUser = this._getFormUser()

    if (this._checkValidationData(formUser)) {
      try {
        const responese = await Auth.login({
          email: formUser.email,
          password: formUser.password,
        })
        console.log(responese.data.loginResult.token)
        SessionTokenUser.setToken(
          Config.USER_TOKEN_KEY,
          responese.data.loginResult.token,
        )
        window.alert('Berhasil login sebagai user')
        window.location.href = '/'
      } catch (error) {
        console.log(error.message)
      }
    }
  },

  _getFormUser() {
    const email = document.getElementById('inputEmail')
    const password = document.getElementById('inputPassword')

    return {
      email: email.value,
      password: password.value,
    }
  },

  _checkValidationData(valueUser) {
    const data = Object.values(valueUser).filter((item) => {
      item === ''
    })
    console.log(data)
    return data.length === 0
  },
}

export default Login
