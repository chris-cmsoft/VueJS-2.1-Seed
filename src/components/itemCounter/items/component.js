export default {
  name: 'items',
  data() {
    return {
      newItem: '',
    };
  },
  computed: {
    count() {
      return this.$store.getters.itemCountCounter;
    },
    items() {
      return this.$store.state.itemCount.items;
    },
  },
  methods: {
    addItem() {

      this.$store.dispatch('addItemCountItem', {name: this.newItem});
      this.newItem = '';
    },
  },
};
