import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b6c1d906 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _483faad8 = () => interopDefault(import('../pages/userlogin.vue' /* webpackChunkName: "pages/userlogin" */))
const _1375104e = () => interopDefault(import('../pages/wxamp.vue' /* webpackChunkName: "pages/wxamp" */))
const _09c0b406 = () => interopDefault(import('../pages/User/management.vue' /* webpackChunkName: "pages/User/management" */))
const _59d5fcbc = () => interopDefault(import('../pages/User/profile/index.vue' /* webpackChunkName: "pages/User/profile/index" */))
const _6254eec5 = () => interopDefault(import('../pages/User/publish.vue' /* webpackChunkName: "pages/User/publish" */))
const _ca6f2e64 = () => interopDefault(import('../pages/User/profile/resetPwd.vue' /* webpackChunkName: "pages/User/profile/resetPwd" */))
const _238a6d38 = () => interopDefault(import('../pages/User/profile/userAvatar.vue' /* webpackChunkName: "pages/User/profile/userAvatar" */))
const _44b79be1 = () => interopDefault(import('../pages/User/profile/userEmail.vue' /* webpackChunkName: "pages/User/profile/userEmail" */))
const _b4d4ca0e = () => interopDefault(import('../pages/User/profile/userInfo.vue' /* webpackChunkName: "pages/User/profile/userInfo" */))
const _69d63384 = () => interopDefault(import('../pages/c/_contentId/index.vue' /* webpackChunkName: "pages/c/_contentId/index" */))
const _57e2d88f = () => interopDefault(import('../pages/email-validate/_uuid/index.vue' /* webpackChunkName: "pages/email-validate/_uuid/index" */))
const _5d384de8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/register",
    component: _b6c1d906,
    name: "register"
  }, {
    path: "/userlogin",
    component: _483faad8,
    name: "userlogin"
  }, {
    path: "/wxamp",
    component: _1375104e,
    name: "wxamp"
  }, {
    path: "/User/management",
    component: _09c0b406,
    name: "User-management"
  }, {
    path: "/User/profile",
    component: _59d5fcbc,
    name: "User-profile"
  }, {
    path: "/User/publish",
    component: _6254eec5,
    name: "User-publish"
  }, {
    path: "/User/profile/resetPwd",
    component: _ca6f2e64,
    name: "User-profile-resetPwd"
  }, {
    path: "/User/profile/userAvatar",
    component: _238a6d38,
    name: "User-profile-userAvatar"
  }, {
    path: "/User/profile/userEmail",
    component: _44b79be1,
    name: "User-profile-userEmail"
  }, {
    path: "/User/profile/userInfo",
    component: _b4d4ca0e,
    name: "User-profile-userInfo"
  }, {
    path: "/c/:contentId",
    component: _69d63384,
    name: "c-contentId"
  }, {
    path: "/email-validate/:uuid",
    component: _57e2d88f,
    name: "email-validate-uuid"
  }, {
    path: "/",
    component: _5d384de8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
