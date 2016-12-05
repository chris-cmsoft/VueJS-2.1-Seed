export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello Template',
    };
  },
  computed: {
    count() {
      return store.state.count
    }
  },
};
