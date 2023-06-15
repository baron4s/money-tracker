import WithOutShadowDom from '../base/litWithOutShadowDom'
import { html, nothing } from 'lit'

class PhotoInput extends WithOutShadowDom {
  static properties = {
    imgId: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    defaultImage: { type: String, reflect: true },
    invalidFeedBackMessage: { type: String, reflect: true },
    requeired: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this.defaultImage = ''
    console.log(`${this.inputId}`)
  }

  render() {
    return html`
      <div
        style="width: 100%; height:300px"
        class="mb-2 custom-border rounded-1 p-3"
      >
        <img
          src="${this.defaultImage ?? nothing}"
          alt="photo story"
          class="img-fluid custom-ratio"
          id=${this.imgId}
        />
      </div>
      <input
        type="file"
        id=${this.inputId || nothing}
        accept="image/*"
        ?required=${this.requeired}
        @change=${this._updatePhotoView}
      />

      ${this._feedBackTemplate()}
    `
  }

  _feedBackTemplate() {
    let invalidFeedBackTemplate = ''
    if (this.invalidFeedBackMessage) {
      invalidFeedBackTemplate = html`
        <div class="invalid-feedback">${this.invalidFeedBackMessage}</div>
      `
    }
    return html`
      ${this.invalidFeedBackTemplate}
    `
  }

  _updatePhotoView() {
    const photoStoryUpadetView = document.querySelector('#photoStory')
    const inputFilePhoto = document.querySelector('#filePhotoStory')
    console.log(inputFilePhoto)
    const photo = inputFilePhoto.files[0]
    if (!photo) return

    const reader = new FileReader()
    reader.onload = (event) => {
      photoStoryUpadetView.setAttribute('src', `${event.target.result}`)
    }
    reader.readAsDataURL(photo)
  }
}

customElements.define('input-photo-with-preview', PhotoInput)
