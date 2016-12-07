export default {
  name: 'spinner',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
    },
  },
};
