export default {
  created() {
    this.$store.dispatch('getParts');
  },

  computed: {
    parts() {
      return this.$store.state.robotsparts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
