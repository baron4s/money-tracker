import WithOutShadowDom from '../base/litWithOutShadowDom'
import { html } from 'lit'

class InputDescription extends WithOutShadowDom {
  static properties = {
    inputId: { type: String, reflect: true },
    invalidFeedBackMessage: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this._checkAvailabilityProperty()
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
      )
    }
  }

  render() {
    return html`
      <textarea
        rows="6"
        class="form-control"
        id=${this.inputId}
        required
      ></textarea>
      <div class="invalid-feedback">${this.invalidFeedBackMessage}</div>
    `
  }
}

customElements.define('input-description', InputDescription)
