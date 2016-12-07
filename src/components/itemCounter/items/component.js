export default {
  name: 'items',
  data() {
    return {
      newItem: '',
      loading: false,
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
      this.loading = true;
      this.$store.dispatch('addItemCountItem', {name: this.newItem}).then((data) => {
        // console.log(data);
        this.newItem = '';
      });
    },
  },
};
