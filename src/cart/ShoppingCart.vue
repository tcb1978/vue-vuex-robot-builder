<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr v-if="this.$store.state.cart.length >= 1">
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
        <tr v-else>
          <th class="robot-title">
            You're cart is currently empty.
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td v-if="robot.head.title" class="robot-title">
            {{robot.head.title}}
          </td>
          <td v-if="robot.cost" class="cost">
            ${{robot.cost}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
</style>