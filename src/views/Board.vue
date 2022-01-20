<template>
  <section class="row d-flex justify-content-center">
    <div class="col text-center">
      <h3 class="my-4">Mis Paneles <strong> -> </strong> {{ name }}</h3>

      <div class="d-flex justify-content-center mt-3">
        <input
          class="form-control w-25"
          type="text"
          placeholder="Añade una lista"
          v-model="listName"
          @keyup.enter="add()"
        />
      </div>

      <div class="row">
        <column
          v-for="(list, index) in boardList"
          :key="index"
          :listName="list.name"
        ></column>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Column from '@/components/Column'
  export default  {
    name: 'board',
    components:{
       Column
    },
    props: {
      id:String,
    },
    mounted () {

    },
    data () {
      return {
        name:this.$route.params.name,
        listName:'',
        boardList:[
          {id:1,name:'Todo'},
          {id:2,name:'Doing'}
        ]
      }
    },
    methods: {
      add(){
        const randomID = Math.round(Math.random() * (100 - 1) + 1)
        this.boardList.push({id: randomID,name:this.listName})
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss"></style>
