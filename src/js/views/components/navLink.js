import WithOutShadowDom from './base/litWithOutShadowDom'
import { html } from 'lit'

class NavLink extends WithOutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
    classes: { type: String, reflect: true },
  }
  constructor() {
    super()
    this._checkAvailabilityProperty()
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('content') && !this.hasAttribute('to')) {
      throw new Error(
        `Atribut "content atau to" harus diterapkan pada ${this.localName}`,
      )
    }
  }

  render() {
    return html`
      <li class="nav-item">
        <a class=${this.classes} aria-current="page" href="${this.to}">
          ${this.content ? this.content : 'aaa'}
        </a>
      </li>
    `
  }
}

customElements.define('nav-link', NavLink)
