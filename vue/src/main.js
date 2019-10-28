import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/*new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')*/

/*
import singleSpaVue from 'single-spa-vue';
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
    store
  },
});

export function bootstrap(props) {
  //setToken(props.info.token)
  //setUserInfo(props.info.userInfo)
  return vueLifecycles.bootstrap(props.singleSpa);
}

export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
*/

let instance = null;

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  instance = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
  });
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
