import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import {registerMicroApps, setDefaultMountApp, start} from 'qiankun';

let app = null;

function render({appContent, loading}) {
  if (app) {
    app.content = appContent;
    app.loading = loading;
  } else {
    app = new Vue({
      el: '#container',
      router,
      store,
      data() {
        return {
          content: appContent,
          loading,
        }
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading,
          }
        })
      }
    })
  }
}

render({loading: true})

function genActiveRule(routerPrefix) {
  //return location => location.pathname.startsWith(routerPrefix)
  return location => location.hash.startsWith('#' + routerPrefix)
}

registerMicroApps([
  {
    name: 'sys',
    //entry: { scripts: ['//localhost:8084/js/app.js'] },
    entry: '//localhost:8084',
    render,
    activeRule: genActiveRule('/sys'),
  },
  {
    name: 'vue',
    entry: '//localhost:8085',
    render,
    activeRule: genActiveRule('/vue'),
  }
])

setDefaultMountApp('/');

start()
