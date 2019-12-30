<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" v-bind:key="tab.name" :class="{'is-active': tab.isActive}">
          <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",

  data: function() {
    return {
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(currentTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == currentTab.name;
      });
    }
  }
};
</script>