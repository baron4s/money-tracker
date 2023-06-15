import WithOutShadowDom from './base/litWithOutShadowDom'
import { html } from 'lit'

class NavLinks extends WithOutShadowDom {
  constructor() {
    super()
  }

  render() {
    return html`
      <ul class="navbar-nav ms-auto py-2">
        <nav-link to="/" content="Dashboard" classes="nav-link"></nav-link>
        <nav-link
          to="addStory.html"
          content="Tambah Cerita"
          classes="nav-link"
        ></nav-link>
        <nav-link
          class=" mt-2 mt-lg-0 ms-lg-2 me-auto"
          to="auth/login.html"
          content="Login"
          classes="nav-link btn btn-dark px-3 text-white"
          id="userLoginMenu"
        ></nav-link>
        <nav-link-auth
          class="d-none mt-2 mt-lg-0 ms-lg-2 me-auto"
          id="userLoggedMenu"
        ></nav-link-auth>
      </ul>
    `
  }
}

customElements.define('nav-links', NavLinks)
