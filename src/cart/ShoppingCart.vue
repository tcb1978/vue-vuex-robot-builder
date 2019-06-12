<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr v-if="this.$store.state.robots.cart.length >= 1">
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
    <h2 v-if="cartSaleItems.length >= 1" class="sale-items">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr v-if="cartSaleItems.length >= 1">
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
        <tr v-else>
          <th class="robot-title"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
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
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters['robots/cartSaleItems'];
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
  .sale-items {
    color: red;
    font-size: 18px;
    margin-top: 50px;
  }
</style>