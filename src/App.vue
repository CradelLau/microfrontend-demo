<template>
  <div id="root">
    <!--
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    -->
    <nav>
      <ol>
        <li><a @click="goto('/')">首页</a></li>
        <li><a @click="goto('/sys')">系统管理</a></li>
        <li><a @click="goto('/vue')">Vue</a></li>
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
    goto(href) {
      //location.href = href
      this.$router.push(href)
    }
  }
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
