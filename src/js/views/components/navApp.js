import WithOutShadowDom from './base/litWithOutShadowDom';
import { html } from 'lit';

class NavApp extends WithOutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg bg-white mt-1 shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">STORYAPP</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <nav-links class=" ms-auto"></nav-links>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
