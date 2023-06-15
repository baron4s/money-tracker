import Config from '../../config/config'
import SessionTokenUser from '../../utils/session-user-token'
import WithOutShadowDom from './base/litWithOutShadowDom'
import { html } from 'lit'

class NavLinkAuth extends WithOutShadowDom {
  constructor() {
    super()
  }
  render() {
    return html`
      <li class="nav-item dropdown">
        <a
          class="nav-link text-dark dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <span class="d-inline-block me-1">User</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark  dropdown-menu-end  ">
          <a class="dropdown-item py-1  " href="#" @click=${this._userLogout}>
            <span>Keluar</span>
          </a>
        </ul>
      </li>
    `
  }

  _userLogout() {
    SessionTokenUser.destroyToken(Config.USER_TOKEN_KEY)
    window.location.href = '/auth/login.html'
  }
}

customElements.define('nav-link-auth', NavLinkAuth)
