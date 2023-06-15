import Config from '../config/config'
import Stories from '../networks/stories'
import SessionTokenUser from '../utils/session-user-token'
import CheckAuthUser from './auth/check-auth-user'

const Dashboard = {
  async init() {
    CheckAuthUser.checkUserLogin()
    await this._initial()

    this._initialListener()
  },

  async _initial() {
    try {
      const tokenUser = SessionTokenUser.getToken(Config.USER_TOKEN_KEY)
      if (tokenUser) {
        console.log(tokenUser)
        const responseData = await Stories.getAllStories(tokenUser)
        this._ListStoryUser = responseData.data.listStory
        this._populateStoryDataToCard(this._ListStoryUser)
      }
    } catch (error) {
      console.log(error.message)
    }
  },

  _initialListener() {
    const storyDetailModal = document.getElementById('storyDetailModal')
    storyDetailModal.addEventListener('show.bs.modal', async (event) => {
      const storyId = event.relatedTarget.dataset.storyId
      console.log(storyId)
      try {
        const response = await Stories.getDetailStory(storyId)
        const story = await response.data.story
        this._populateDetailStoryModal(story)
      } catch (error) {
        console.log(error)
      }
    })
  },

  _populateDetailStoryModal(story) {
    const photoStory = document.getElementById('photoStory')
    const nameUserStory = document.getElementById('nameUserStory')
    const createdStory = document.getElementById('createdAtStory')
    const descriptionStory = document.getElementById('descriptionStory')

    photoStory.setAttribute('src', `${story.photoUrl}`)
    photoStory.setAttribute('alt', `${story.photoUrl}`)
    nameUserStory.textContent = `${story.name}`
    createdStory.textContent = `${new Date(story.createdAt).toDateString()}`
    descriptionStory.textContent = `${story.description}`
  },

  _populateStoryDataToCard(listStoryUser = null) {
    const listCardStory = document.getElementById('listsCardStory')
    listStoryUser.forEach((story) => {
      listCardStory.innerHTML += `
            <div class="col-12 col-md-4 col-lg-3 ">
            <div class="card" style="width: 100%;">
              <img src="${
                story.photoUrl
              }" class="card-img-top" alt="photo story">
              <div class="card-body">
                <h6 class="fw-bold my-1">${story.name}</h6>
                <p style="font-size:0.75rem;" class="mb-2">${new Date(
                  story.createdAt,
                ).toDateString()}</p>
                <p class="card-text text-truncate d-inline-block w-100 ">${
                  story.description
                }</p>
                <button type="button" class="btn btn-dark"         data-bs-toggle="modal" data-bs-target="#storyDetailModal"
                data-story-id=${story.id}
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
            `
    })
  },
}

export default Dashboard
