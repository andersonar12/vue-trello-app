<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="
        { completed: task['completed'] } +
        ' w-100 d-flex justify-content-between '
      "
    >
      {{ task["title"] }}
      <button @click="deleteTask(index)" class="rounded-3">X</button>
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

import loader from "../utils/loader.js";

  export default  {
    name: 'TasksList',
    emits: ["updateTask"],// <- es necesario declarar como opcion en Vue-3 los "emits" para poder emitir eventos desde el componente
    props: {
      tasks:Object,
      listId:String
    },
    data () {
      return {
        title:'',
        boardId:this.$route.params.id,
      }
    },
    mounted () {
      /* console.log('TasksList', this.listId); */
    },
    methods: {
      async add(){
        loader.present();
        await this.$store.dispatch("addTask",{ boardId:this.boardId, listId:this.listId, title:this.title });
        await this.$store.dispatch("fetchLists", {boardId:this.boardId});
        this.$emit('updateTask',this.$store.state.lists[this.listId].tasks)
        this.title = ''
        loader.close();
      },
      async deleteTask(taskId){
        loader.present();
        await this.$store.dispatch("deleteTask",{ boardId:this.boardId, listId:this.listId, taskId });
        await this.$store.dispatch("fetchLists", {boardId:this.boardId});
        this.$emit('updateTask',this.$store.state.lists[this.listId].tasks)
        loader.close();
      }
    },
}
</script>

<style scoped lang="scss">
@import "@/scss/components/taskslist";
</style>
