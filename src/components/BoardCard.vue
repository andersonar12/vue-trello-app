<template>
  <!-- <section class="board-card d-flex align-items-center">
    <h1>{{name}}</h1>
    <button type="button" class="btn btn-danger" @click="emitDelete()">Eliminar</button>
  </section> -->

  <router-link
    class="board-card p-3 m-2"
    :to="{ name: 'board', params: { id, name } }"
  >
    <span class="board-card-title">{{ name }}</span>
  </router-link>
</template>

<script lang="js">

  export default  {
    name: 'BoardCard',
    props:{
      name:String,
      id:String
    },
    created () {
    },
    data () {
      return {
      }
    },
    methods: {
      /* emitDelete(){
        this.$emit('listenIndex',this.i)
      } */
    }
}
</script>

<style scoped lang="scss">
@import "../scss/components/boardcard";
</style>
