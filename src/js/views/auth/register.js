import Auth from '../../networks/auth'
import CheckAuthUser from './check-auth-user'

const Register = {
  async init() {
    CheckAuthUser.checkUserLogin()
    this._initalListener()
  },

  _initalListener() {
    const formElement = document.getElementById('formRegister')
    formElement.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault()
        event.stopPropagation()

        formElement.classList.add('was-validated')
        await this._getRegister()
      },
      false,
    )
  },

  async _getRegister() {
    const formUser = this._getFormUser()
    console.log(formUser)

    if (this._checkValidationData(formUser)) {
      try {
        const response = await Auth.register({
          name: formUser.name,
          email: formUser.email,
          password: formUser.password,
        })
        window.alert('Berhasil register')
        window.location.href = '/auth/login.html'
      } catch (error) {
        console.log(error.message)
      }
    }
  },

  _getFormUser() {
    const name = document.getElementById('inputName')
    const email = document.getElementById('inputEmail')
    const password = document.getElementById('inputPassword')

    return {
      name: name.value,
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

export default Register
