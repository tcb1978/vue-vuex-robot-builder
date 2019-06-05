<template>
  <div class="home">
    <img class="robot" src="../assets/robot-home.png" alt="robot home" aria-hidden="true">
    <div class="get-started">
      <a href="">Get started</a> building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  min-height: 300px;
  text-align: center;
}

.robot {
  max-height: 300px;
}
</style>
