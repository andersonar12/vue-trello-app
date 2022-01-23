<template>
  <AppHeader></AppHeader>
  <div class="container-fluid">
    <router-view />
  </div>
  <AppFooter></AppFooter>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>
<style lang="scss">
@import "./scss/global";
</style>
