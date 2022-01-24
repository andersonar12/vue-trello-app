<template>
  <section class="col-2 text-start">
    <div class="w-100 d-flex justify-content-between mb-2">
      <h5>{{ listName }}</h5>
      <button type="button" class="btn btn-danger btn-sm" @click="deleteList()">
        Eliminar
      </button>
    </div>
    <TasksList
      :listId="listId"
      :tasks="tasksList"
      @updateTask="listenUpdateTasksList($event)"
    >
    </TasksList>
  </section>
</template>

<script lang="js">

import TasksList from '@/components/TasksList'
import loader from "../utils/loader.js";
  export default  {
    name: 'Column',
    components:{
      TasksList
    },
    props: {
      listId:String,
      listName:String
    },
      data () {
        return {
          boardId:this.$route.params.id,
          tasksList:{
            /* {id:1, title: "Aprender Vue", completed:false},
            {id:2, title: "Aprender Vuex", completed:false} */
          }
        }
      },

    mounted () {
      this.tasksList = this.$store.state.lists[this.listId].tasks
      console.log(this.tasksList);
    },
    methods: {
      async deleteList(){
        loader.present();
        await this.$store.dispatch("deleteList", {boardId:this.boardId,listId:this.listId});
        await this.$store.dispatch("fetchLists", {boardId:this.boardId});
        loader.close();
      },
      listenUpdateTasksList(tasksList){
        console.log('listenUpdateTasksList', tasksList)
        this.tasksList = tasksList
      }
    },
}
</script>

<style scoped lang="scss">
@import "../scss/components/column";
</style>
