import axios from 'axios'
import ApiEndPoint from '../config/api-endpoint'
import SessionTokenUser from '../utils/session-user-token'
import Config from '../config/config'

const Stories = {
  async getAllStories(token) {
    return await axios.get(ApiEndPoint.GET_ALL_STORIES, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  async addNewStory({ description, photo }) {
    return await axios.post(
      ApiEndPoint.ADD_NEW_STORY,
      { description, photo },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${SessionTokenUser.getToken(
            Config.USER_TOKEN_KEY,
          )}`,
        },
      },
    )
  },

  async addNewStoryWithGuestAccount({ description, photo }) {
    return await axios.post(
      ApiEndPoint.ADD_NEW_STORY_GUEST_ACCOUNT,
      {
        description,
        photo,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
  },

  async getDetailStory(id) {
    return await axios(ApiEndPoint.GET_DETAIL_STORIES(id), {
      headers: {
        Authorization: `Bearer ${SessionTokenUser.getToken(
          Config.USER_TOKEN_KEY,
        )}`,
      },
    })
  },
}

export default Stories
