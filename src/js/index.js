// Import our custom CSS
import '../sass/main.scss'

// Import javascript file as needed
import * as bootstrap from 'bootstrap'

import './views/components/index'

import Dashboard from './views/dashboard'
import Add from './views/addData'
import Register from './views/auth/register'
import Login from './views/auth/login'

const routes = {
  '/': Dashboard,
  '/addStory.html': Add,
  '/auth/register.html': Register,
  '/auth/login.html': Login,
}

const detectedRoute = () => routes[window.location.pathname]

const initPages = () => {
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${
      header.clientHeight + footer.clientHeight
    }px)`
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initPages()
  const route = detectedRoute()
  route.init()
})
