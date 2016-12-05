export default {
  name: 'hello',
  computed: {
    msg() {
      return this.$store.state.itemCount.counter;
    },
  },
};
