import { html, nothing } from 'lit'
import WithOuthShadowDom from '../base/litWithOutShadowDom'

class InputWithValidation extends WithOuthShadowDom {
  static properties = {
    inputId: { type: String, reflect: true },
    inputValue: { type: String, reflect: true },
    inputType: { type: String, reflect: true },

    invalidFeedbackMessage: { type: String, reflect: true },
    validFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this._checkAvailabilityProperty()
    this.required = false
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribute "invalidFeedbackMessage harus di terapkan pada ${this.localName}" `,
      )
    }
  }

  render() {
    return html`
      <input
        type=${this.inputType || nothing}
        class="form-control"
        id=${this.inputId}
        value=${this.inputValue || nothing}
        ?required=${this.required}
        @input=${(e) => (this.inputValue = e.target.value)}
      />

      ${this._validFeddbackTemplate()}
    `
  }

  _validFeddbackTemplate() {
    let validFeedbackMessage = ''
    let invalidFeedbackMessage = ''
    if (this.validFeedbackMessage) {
      validFeedbackMessage = html`
        <div class="valid-feedback">
          ${this.validFeedbackMessage}
        </div>
      `
    }
    if (this.invalidFeedbackMessage) {
      invalidFeedbackMessage = html`
        <div class="invalid-feedback">
          ${this.invalidFeedbackMessage}
        </div>
      `
    }
    return validFeedbackMessage, invalidFeedbackMessage
  }
}

customElements.define('input-with-validation', InputWithValidation)
