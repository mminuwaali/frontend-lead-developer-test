<script setup>
import VueMain from '../components/Main.vue';
import VueAside from '../components/Aside.vue';
</script>

<template>
  <section>
    <vue-main />
    <vue-aside />
  </section>
</template>

<style lang="scss">
section {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>