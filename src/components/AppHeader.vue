<template>

  <header class="d-flex align-items-center p-2">
    <span class="title ms-3"><strong>Vue Trello</strong> </span>
    <router-link to="/" class="btn btn-dark btn-header">Mis Paneles</router-link>
  </header>

</template>

<script>

  export default  {
    name: 'app-header',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  @import '../scss/components/header';
</style>
