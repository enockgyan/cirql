import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4df9e19c = () => interopDefault(import('../pages/acceptable-use-policy/index.vue' /* webpackChunkName: "pages/acceptable-use-policy/index" */))
const _80e4ef84 = () => interopDefault(import('../pages/appsumo/index.vue' /* webpackChunkName: "pages/appsumo/index" */))
const _44243f36 = () => interopDefault(import('../pages/booked/index.vue' /* webpackChunkName: "pages/booked/index" */))
const _6a366dc8 = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _50381dd4 = () => interopDefault(import('../pages/cookie-policy/index.vue' /* webpackChunkName: "pages/cookie-policy/index" */))
const _fdabc906 = () => interopDefault(import('../pages/customer-support/index.vue' /* webpackChunkName: "pages/customer-support/index" */))
const _26920b1f = () => interopDefault(import('../pages/easy/index.vue' /* webpackChunkName: "pages/easy/index" */))
const _6f0dc77c = () => interopDefault(import('../pages/hosting-guide/index.vue' /* webpackChunkName: "pages/hosting-guide/index" */))
const _550728ac = () => interopDefault(import('../pages/next-steps/index.vue' /* webpackChunkName: "pages/next-steps/index" */))
const _37743974 = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _823884c8 = () => interopDefault(import('../pages/success/index.vue' /* webpackChunkName: "pages/success/index" */))
const _10ef6e11 = () => interopDefault(import('../pages/terms-and-conditions/index.vue' /* webpackChunkName: "pages/terms-and-conditions/index" */))
const _4f5e75bc = () => interopDefault(import('../pages/terms-of-service/index.vue' /* webpackChunkName: "pages/terms-of-service/index" */))
const _104e84d6 = () => interopDefault(import('../pages/thank-you/index.vue' /* webpackChunkName: "pages/thank-you/index" */))
const _5a511e12 = () => interopDefault(import('../pages/training/index.vue' /* webpackChunkName: "pages/training/index" */))
const _094482b0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acceptable-use-policy",
    component: _4df9e19c,
    name: "acceptable-use-policy"
  }, {
    path: "/appsumo",
    component: _80e4ef84,
    name: "appsumo"
  }, {
    path: "/booked",
    component: _44243f36,
    name: "booked"
  }, {
    path: "/contact-us",
    component: _6a366dc8,
    name: "contact-us"
  }, {
    path: "/cookie-policy",
    component: _50381dd4,
    name: "cookie-policy"
  }, {
    path: "/customer-support",
    component: _fdabc906,
    name: "customer-support"
  }, {
    path: "/easy",
    component: _26920b1f,
    name: "easy"
  }, {
    path: "/hosting-guide",
    component: _6f0dc77c,
    name: "hosting-guide"
  }, {
    path: "/next-steps",
    component: _550728ac,
    name: "next-steps"
  }, {
    path: "/privacy-policy",
    component: _37743974,
    name: "privacy-policy"
  }, {
    path: "/success",
    component: _823884c8,
    name: "success"
  }, {
    path: "/terms-and-conditions",
    component: _10ef6e11,
    name: "terms-and-conditions"
  }, {
    path: "/terms-of-service",
    component: _4f5e75bc,
    name: "terms-of-service"
  }, {
    path: "/thank-you",
    component: _104e84d6,
    name: "thank-you"
  }, {
    path: "/training",
    component: _5a511e12,
    name: "training"
  }, {
    path: "/",
    component: _094482b0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
