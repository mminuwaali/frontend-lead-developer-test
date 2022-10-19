<script setup>
import $ from '../stores/auth';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { computed, shallowReactive } from 'vue';

// components
import VueHeader from './Header.vue';
import record from './tab/Record.vue';
import wallet from './tab/Wallet.vue';
import profile from './tab/Profile.vue';
import service from './tab/Service.vue';
import message from './tab/Message.vue';
import account from './tab/Account.vue';
import contact from './tab/Support.vue';
import resource from './tab/Resource.vue';
import dashboard from './tab/Dashboard.vue';

// components object
const components = shallowReactive({
  record, wallet, profile,
  service, message, account,
  contact, resource, dashboard,
});

// store
const { auth } = storeToRefs($());

// hooks
const route = useRoute();
// watch(route, () => { console.log(route.path, tab.value) });
// computed
const tab = computed(() => components[route.path.slice(1) || 'dashboard']);
</script>

<template>
  <aside id="aside">
    <vue-header />
    <div class="content">
      <component :is="tab" v-if="auth.data" />
      <h1 v-else>Login to view tab content</h1>
    </div>
  </aside>
</template>

<style lang="scss">
aside#aside {
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  padding: 1em 5% 2em;
  flex-direction: column;
  background-color: #F5F5FB;

  .content {
    flex: 1 1 auto;
    overflow: auto;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: .5em;
    justify-content: center;
    background-color: #FFFFFF;

    &>* {
      padding: 1em;
      flex: 1 1 auto;
    }

    h1 {
      font-weight: 900;
      text-align: center;
      text-transform: capitalize;
      font-size: clamp(1em, 3vw, 5em);
    }
  }
}
</style>