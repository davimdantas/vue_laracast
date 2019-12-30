<template>
  <div id="lesson_10">
    <modal
      v-if="showModal"
      @close="showModal=false"
    >LAorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae magnam temporibus nulla molestiae quisquam, iure maiores suscipit excepturi voluptate ratione, blanditiis dolore officiis laborum nihil molestias praesentium, totam esse."</modal>

    <button @click="showModal=true" class="button is-primary">Show modal</button>
  </div>
</template>

<script>
import modal from "./learning-modal";
export default {
  name: "lesson_10",
  components: {
    modal
  },
  data: function() {
    return {
      showModal: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
