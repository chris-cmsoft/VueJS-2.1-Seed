export default {
  name: 'welcome',
  data() {
    return {
      msg: 'Welcome Template',
    };
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};
