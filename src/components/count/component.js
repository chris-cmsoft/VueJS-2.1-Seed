export default {
  name: 'count',
  computed: {
    count() {
      return this.$store.getters.itemCount;
    },
  },
};
