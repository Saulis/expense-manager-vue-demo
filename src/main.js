// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'x-grid',
  'paper-button', 'paper-input', 'iron-a11y-keys', 'vaadin-pouchdb', 'iron-ajax', 'paper-header-panel',
  'paper-toolbar', 'iron-icon', 'paper-toast', 'iron-localstorage', 'paper-icon-button',
  'paper-fab', 'vaadin-grid', 'vaadin-grid-column', 'vaadin-grid-sorter', 'iron-media-query',
  'paper-checkbox', 'vaadin-pouchdb', 'vaadin-date-picker', 'vaadin-combo-box', 'history-chart'
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
