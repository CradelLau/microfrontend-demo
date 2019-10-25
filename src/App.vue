<template>
  <div id="root">
    <!--
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    -->
    <nav>
      <ol>
        <li><a @click="goto('react15 app', '/15react15')">首页</a></li>
        <li><a @click="goto('vue app', '/vue')">vue2 + element2</a></li>
      </ol>
    </nav>
    <!--<router-view/>-->
    <div id="router-view" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'framework',
  props: {
    loading: Boolean,
    content: String,
  },
  methods: {
    goto(title, href) {
      window.history.pushState({}, title, href);
    },
  },
}
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#router-view {
  height: 100%;
}
</style>
