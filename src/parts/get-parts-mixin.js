export default {
  created() {
    this.$store.dispatch('robots/getParts');
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
