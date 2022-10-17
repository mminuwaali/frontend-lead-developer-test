<script setup>
import { ref } from 'vue';
import $ from '../stores/auth';
import VueAuth from './Auth.vue';
import { storeToRefs } from 'pinia';
import user from '../assets/user.svg';
import { RouterLink, useRoute } from 'vue-router';

import msg from '../assets/icon/msg.svg';
import bell from '../assets/icon/bell.svg';

// emmits
defineEmits(['close-modal']);

// refs
const showModal = ref(false);

// store
const { $login } = $();
const { auth } = storeToRefs($());

// hooks
const { path } = useRoute();

// $login({ email: 'tester@kompletecare.com', password: 'password' });
// methods
const handleLogin = () => { showModal.value = true; };
const handleCloseModal = () => { showModal.value = false; };
</script>

<template>
  <header id="header">
    <vue-auth v-if="showModal" @close-modal="handleCloseModal" />
    <div class="main">
      <router-link to="/">take a tour</router-link>
      <img :src="msg" class="icon" />
      <img :src="bell" class="icon" />
      <img :src="user" alt="" v-if="auth.data?.message" />
      <router-link v-else :to="path" @click="handleLogin">login</router-link>
    </div>
    <div class="aside">
      <h2>Update Patient Medical Record</h2>
      <span>Click the tabs to view and edit patient medical details</span>
    </div>
  </header>
</template>

<style lang="scss">
header#header {
  flex: none;
  width: 100%;
  display: flex;
  padding: 1em 0 2em;
  flex-direction: column;

  .main,
  .aside {
    flex: none;
    width: 100%;
    display: flex;
    font-family: sans-serif; // will change later
  }

  .main {
    gap: 1.5em;
    align-items: center;
    justify-content: flex-end;

    a {
      font-size: .8em;
      font-weight: 900;
      color: #382f9099;
      text-decoration: none;
      text-transform: capitalize;
    }

    img {
      width: 2em;
      height: 2em;
      border-radius: 50%;
      object-fit: contain;
      background-color: #FFFFFF;

      &[class] {
        width: initial;
        height: initial;
        background-color: initial;
      }
    }
  }

  .aside {
    gap: .5em;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h2 {
      color: #382F90;
      font-weight: 900;
      text-transform: capitalize;
    }

    span {
      font-size: .7em;
      color: #9FA2B4;
    }
  }
}
</style>