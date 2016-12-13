export default {
  name: 'items',
  data() {
    return {
      newItem: '',
      loading: false,
    };
  },
  computed: {
    items() {
      return this.$store.state.itemCount.items;
    },
  },
  methods: {
    addItem() {
      this.loading = true;
      this.$store.dispatch('addItemCountItem', { name: this.newItem }).then(() => {
        this.newItem = '';
      });
    },
  },
};
