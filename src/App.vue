<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="Build-A-Bot">
            Build-A-Bot
          </li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <!--<HomePage />-->
      <RobotBuilder />
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage';
import RobotBuilder from './build/RobotBuilder';

export default {
  name: 'app',
  components: {
    // HomePage
    RobotBuilder
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
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
</style>
