import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import {registerMicroApps, start} from 'qiankun';

let app = null;

function render({appContent, loading}) {
  if (app) {
    app.content = appContent;
    app.loading = loading;
  } else {
    app = new Vue({
      el: '#app',
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

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

registerMicroApps([
  {
    name: 'sys',
    //entry: { scripts: ['//localhost:8084/js/app.js'] },
    entry: '//localhost:8084',
    render,
    activeRule: genActiveRule('/sys'),
  },
]);

start();
