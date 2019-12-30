<template>
  <div role="tab" :aria-selected="isActive">
    <slot role="tab" :aria-selected="isActive" v-if="isActive"></slot>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    name: { String, required: true },
    selected: { Boolean, default: false }
  },
  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  data: function() {
    return {
      isActive: false
    };
  },
  mounted() {
    this.isActive = this.selected;
  }
};
</script>