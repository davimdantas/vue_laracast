<template>
  <div id="lesson_11_s">
    <tabs role="tablist" aria-label="Entertainment">
      <tab name="Home Page">
        <h1>Thats our land page</h1>
      </tab>
      <tab name="About us" :selected="true">
        <h1>We are we</h1>
      </tab>
      <tab name="Contact">
        <h1>You can call</h1>
      </tab>
    </tabs>
  </div>
</template>

<script>
import tabs from "./learning-tabs";
import tab from "./learning-tab";
export default {
  name: "lesson_11_s",
  components: {
    tabs,
    tab
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
