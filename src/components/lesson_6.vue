<template>
  <div id="lesson_6">
    <h5>All Tasks</h5>
    <ul>
      <div v-for=" (task, index) in tasks" v-bind:key="task.description" style="display: flex">
        <li v-text="task.description "></li>
        <button
          class="myButton"
          :class="{'bcolor-red': !task.completed}"
          @click="changeComplete(index)"
          style="margin-left: 5px;"
        >{{ task.completed ? 'Finish' : 'Start' }}</button>
      </div>
    </ul>
    <h5>Incompleted Tasks</h5>
    <ul>
      <li v-for=" task in incompleteTasks" v-bind:key="task.description" v-text="task.description"></li>
    </ul>
    <h5>Completed Tasks</h5>
    <ul>
      <li v-for="task in completeTasks" v-bind:key="task.description" v-text="task.description"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "lesson_6",
  props: {
    msg: String
  },
  data: function() {
    return {
      tasks: [
        { description: "Go to the store", completed: false },
        { description: "Complete two videos", completed: false },
        { description: "Organize the accounts", completed: true },
        { description: "Assemble the wardrobe", completed: true },
        { description: "Open the wall", completed: false },
        { description: "Go to the market", completed: true }
      ]
    };
  },

  computed: {
    completeTasks() {
      return this.tasks.filter(task => task.completed);
    },
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    }
  },

  methods: {
    changeComplete(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li,
h5 {
  font-size: 12px;
}
.color-red {
  color: blueviolet;
}
.color-blue {
  color: chartreuse;
}
.myButton {
  background-color: #44c767;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  border-radius: 7px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 12px;
  padding: 2px 7px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}

button.bcolor-red {
  background-color: red;
  border: 1px solid red;
}

.myButton:hover {
  background-color: whitesmoke;
}

.myButton:active {
  position: relative;
  top: 1px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
