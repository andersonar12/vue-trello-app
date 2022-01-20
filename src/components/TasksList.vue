<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task['completed'] }"
    >
      {{ task["title"] }}
    </li>
  </ul>
  <input
    type="text"
    placeholder="Añade una nueva tarea"
    v-model="title"
    @keyup.enter="add()"
  />
</template>

<script lang="js">

  export default  {
    name: 'tasks-list',
    props: {
      tasks:Array,
      listId:String
    },
    mounted () {

    },
    data () {
      return {
        title:''
      }
    },
    methods: {
      add(){
        //todo implementar evento
        // this.$emit
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
@import "@/scss/components/taskslist";
</style>
