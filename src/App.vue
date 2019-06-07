<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png" alt="Build-A-Bot">
              Build-A-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>Build</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

figure {
  margin: 0;
  padding: 0;
  display: inline-flex;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.main {
  background-color: #fff;
  margin: 0 auto;
  max-width: 1024px;
  padding: 30px;
}

.header {
  background-color: #999;
  max-width: 1024px;
  margin: 0 auto;
}

.nav-list {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

.nav-link {
  color: inherit;
  text-decoration: none;
}

.router-link-active {
  color: white;
}
</style>
