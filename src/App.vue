<template>
  <app-header></app-header>
  <div class="container-fluid">
  <router-view />
  </div>
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


