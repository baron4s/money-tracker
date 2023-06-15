import axios from 'axios'
import ApiEndPoint from '../config/api-endpoint'

const Auth = {
  async login({ email, password }) {
    return await axios.post(ApiEndPoint.Login, { email, password })
  },

  async register({ name, email, password }) {
    return await axios.post(ApiEndPoint.Register, { name, email, password })
  },
}

export default Auth
