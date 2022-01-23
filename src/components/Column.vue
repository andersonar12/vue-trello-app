<template>
  <section class="col-2 text-start">
    <h5>{{ listName }}</h5>
    <TasksList :listId="listId" :tasks="tasksList"> </TasksList>
  </section>
</template>

<script lang="js">
import TasksList from '@/components/TasksList'

  export default  {
    name: 'Column',
    props: {
      listId:String,
      listName:String
    },
    components:{
      TasksList
    }
    ,
    mounted () {

    },
    data () {
      return {
        tasksList:[
          {id:1, title: "Aprender Vue", completed:false},
          {id:2, title: "Aprender Vuex", completed:false}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
@import "../scss/components/column";
</style>
