<template>
  <app-header></app-header>
  <h1><strong>Hola desde Vue</strong></h1>
  <p>prueba</p>
  <app-footer></app-footer>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>
<style lang="scss">
@import './scss/global';
</style> 


