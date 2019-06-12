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
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'BrowseParts'}" exact>Browse Parts</router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact>Cart</router-link>
            <div class="cart-items">{{ cart.length }}</div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main class="main">
        <router-view name="default"/>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {

  name: 'app',
  computed: {
    ...mapState('root', {rootFoo: 'foo'}),
    ...mapState('robot', {robotFoo: 'foo'}),
    ...mapState('users', {userFoo: 'foo'}),

    ...mapGetters({rootGetterFoo: 'foo'}),
    ...mapGetters({robotsGetterFoo: 'foo'}),
    ...mapGetters({usersGetterFoo: 'foo'}),

    cart() {
      return this.$store.state.robots.cart;
    }
  }
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
  flex: 11;
  /* margin: 0 auto; */
  /* max-width: 964px; */
  padding: 30px;
}

.header {
  background-color: #999;
  max-width: 1184px;
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

.nav-item.cart {
  border-right: none;
  margin-left: auto;
  position: relative;
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

.container {
  display: flex;
  justify-content: center;
  margin: 10px auto 0 auto;
}

.aside {
  background-color: #aaa;
  flex: 1;
  padding: 30px;
  min-height: 300px;
  width: 100%;
}

.cart-items {
  background-color: mediumseagreen;
  border-radius: 100px;
  display: inline-block;
  font-size: 18px;
  position: absolute;
  right: -9px;
  text-align: center;
  top: -5px;
  widows: 20px;
}
</style>
