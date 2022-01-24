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
        <Column
          v-for="(list, index) in boardList"
          :key="index"
          :listId="index"
          :listName="list.name"
        ></Column>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Column from '@/components/Column'
import loader from "../utils/loader.js";
import { computed } from '@vue/runtime-core';

  export default  {
    name: 'board',
    components:{
       Column
    },
    data () {
      return {
        name:this.$route.params.name,
        id:this.$route.params.id,
        listName:'',
        boardList:[]
      }
    },
    async mounted () {
      loader.present();
      console.log(this.id);
      await this.$store.dispatch("fetchLists", {boardId:this.id});
      this.boardList = computed(() => this.$store.state.lists);
      console.log(this.boardList);
      loader.close();
    },
    methods: {
      async add(){
        loader.present();
        console.log(this.id)
        await this.$store.dispatch("addColumn",{ boardId:this.id, name:this.listName });
        await this.$store.dispatch("fetchLists", {boardId:this.id});
        this.listName = ''
        loader.close();
      }
    },
}
</script>

<style scoped lang="scss"></style>
