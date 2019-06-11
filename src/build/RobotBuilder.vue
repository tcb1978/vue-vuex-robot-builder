<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <figure class="top-row">
            <img :src="selectedRobot.head.src"/>
          </figure>
          <div class="middle-row">
            <figure><img :src="selectedRobot.leftArm.src" class="rotate-left"/></figure>
            <figure><img :src="selectedRobot.torso.src"/></figure>
            <figure><img :src="selectedRobot.rightArm.src" class="rotate-right"/></figure>
          </div>
          <figure class="bottom-row">
            <img :src="selectedRobot.base.src"/>
          </figure>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    </div>
    <div class="top-row">
      <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
      </div>
      <PartSelector :parts="availableParts.heads" position="top" @partSelected="part => selectedRobot.head=part"/>
    </div>
    <div class="middle-row">
      <PartSelector :parts="availableParts.arms" position="left" @partSelected="part => selectedRobot.leftArm=part"/>
      <PartSelector :parts="availableParts.torsos" position="center" @partSelected="part => selectedRobot.torso=part"/>
      <PartSelector :parts="availableParts.arms" position="right" @partSelected="part => selectedRobot.rightArm=part"/>
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.bases" position="bottom" @partSelected="part => selectedRobot.base=part"/>
    </div>
    <!-- <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script>
import availableParts from '../data/parts';
import createdHookMixin from './created-hook-mixin';
import CollapsibleSection from '../shared/CollapsibleSection';
import PartSelector from './PartSelector';

export default {
  name: 'RobotBuilder',

  beforeRouteLeave(to, from, next) {
    /* eslint no-alert: 0 */
    /* eslint no-restricted-globals: 0 */
    this.addedToCart ? next(true) : next(confirm('You have not added your robot to your cart, are you sure you want to leave?'))
  },

  components: {
    CollapsibleSection,
    PartSelector
  },

  data() {
    return {
      availableParts,
      addedToCart: false,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      }
    }
  },

  mixins: [createdHookMixin],

  computed: {
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale ? '3px solid red' : '3px solid #aaa'
      }
    },
  },

  methods: {
    addToCart() {
       const robot = this.selectedRobot;
       const cost = robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.base.cost;
        this.$store.commit('addRobotToCart', Object.assign({}, robot, { cost }))
        // this.cart.push(Object.assign({}, robot, { cost }));
        this.addedToCart = true;
    },
  }
}
</script>

<style lang="scss">
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview {
  img {
  width: 50px;
  height: 50px;
  }
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;

  width:165px;
}

.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.right {
  border-left: none;

   img {
    transform: rotate(90deg);
  }

  .prev-selector {
    top: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }
  .next-selector {
    top: auto;
    bottom: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }
  .next-selector {
    right: -3px;
  }
}
.left {
    border-right: none;
  img {
    transform: rotate(-90deg);
  }
  .prev-selector {
    top: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }
  .next-selector {
    top: auto;
    bottom: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }
}

.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  font-size: 1em;
  position: absolute;
  padding: 3px;
  width: 210px;
}

// td, th {
//   padding: 5px;
//   padding-right: 20px;
//   text-align: left;
// }
// .cost {
//   text-align: right;
// }

.sale-border {
  border: 3px solid red;
}
</style>
