<template>
  <div id="message">
    <article class="message is-dark" v-show="is_visible">
      <div class="message-header">
        <p>{{title}}</p>
        <button @click="hideModal" class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{{body}}</div>
    </article>
  </div>
</template>

<script>
export default {
  name: "message",
  props: {
    title: String,
    body: String
  },
  methods: {
    hideModal() {
      this.is_visible = false;
    }
  },
  data: function() {
    return {
      is_visible: true
    };
  }
};
</script>