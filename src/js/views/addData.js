import Config from '../config/config'
import Stories from '../networks/stories'
import SessionTokenUser from '../utils/session-user-token'
import CheckAuthUser from './auth/check-auth-user'

const Add = {
  async init() {
    CheckAuthUser.checkUserLogin()
    this._handleListener()
  },

  _handleListener() {
    const formElement = document.querySelector('#submitStory')
    formElement.addEventListener(
      'submit',
      (event) => {
        if (!formElement.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        event.preventDefault()
        event.stopPropagation()
        formElement.classList.add('was-validated')
        this._sendStory()
      },
      false,
    )
  },

  async _sendStory() {
    const data = this._getData()
    const chekuserAuth = SessionTokenUser.getToken(Config.USER_TOKEN_KEY)
    const user = Boolean(chekuserAuth)
    if (user) {
      if (this._validationData(data)) {
        try {
          const response = await Stories.addNewStory({
            photo: data.photo,
            description: data.description,
          })
          window.alert('Story berhasil ditambahkan')
          window.location.href = '/'
        } catch (error) {
          console.log(error)
        }
      } else {
        throw new Error(
          window.alert('Gambar atau description tidak bisa di kirim'),
        )
      }
    } else {
      if (this._validationData(data)) {
        try {
          const response = await Stories.addNewStoryWithGuestAccount({
            photo: data.photo,
            description: data.description,
          })
          window.alert('Story berhasil ditambahkan sebagai tamu')
        } catch (error) {
          console.log(error)
        }
      } else {
        throw new Error(
          window.alert('Gambar atau description tidak bisa di kirim'),
        )
      }
    }
  },

  _getData() {
    const photo = document.getElementById('filePhotoStory')
    const description = document.getElementById('inputDescription')
    return {
      photo: photo.files[0],
      description: description.value,
    }
  },

  _validationData(data) {
    const maxSizePhoto = 1048576
    const checkedData = Object.values(data).filter(
      (item) => item.size >= maxSizePhoto,
    )
    return checkedData.length === 0
  },
}

export default Add
