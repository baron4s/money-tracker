import Config from './config'

const ApiEndPoint = {
  Register: `${Config.BASE_URL}/register`,
  Login: `${Config.BASE_URL}/login`,

  ADD_NEW_STORY: `${Config.BASE_URL}/stories`,
  ADD_NEW_STORY_GUEST_ACCOUNT: `${Config.BASE_URL}/stories/guest`,
  GET_ALL_STORIES: `${Config.BASE_URL}/stories`,
  GET_DETAIL_STORIES: (id) => `${Config.BASE_URL}/stories/${id}`,
}

export default ApiEndPoint
