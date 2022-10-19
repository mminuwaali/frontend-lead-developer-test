<script setup>
import $ from '../stores/auth';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
import logout from '../assets/icon/logout.svg';
import wallet from '../assets/icon/wallet.svg';
import medical from '../assets/icon/record.svg';
import message from '../assets/icon/message.svg';
import profile from '../assets/icon/profile.svg';
import service from '../assets/icon/service.svg';
import support from '../assets/icon/support.svg';
import resource from '../assets/icon/resource.svg';
import settings from '../assets/icon/settings.svg';
import dashboard from '../assets/icon/dashboard.svg';

// store
const { auth } = storeToRefs($());

// methods
const handleLogout = () => false;
</script>

<template>
  <main id="main">
    <div class="main">
      <router-link to="/">
        <img :src="dashboard" /><b>dashboard</b>
      </router-link>
      <router-link to="/profile">
        <img :src="profile" /><b>profile</b>
      </router-link>
      <router-link to="/service">
        <img :src="service" /><b>services</b>
      </router-link>
      <router-link to="/record">
        <img :src="medical" /><b>medical records</b>
      </router-link>
      <router-link to="/wallet">
        <img :src="wallet" /><b>care wallet</b>
      </router-link>
      <router-link to="/message">
        <img :src="message" /><b>messages</b>
      </router-link>
      <router-link to="/resource">
        <img :src="resource" /><b>resources</b>
      </router-link>
    </div>

    <div class="user">
      <router-link to="/account">
        <img :src="settings" /><b>account settings</b>
      </router-link>
      <router-link to="/contact">
        <img :src="support" /><b>contact support</b>
      </router-link>
      <router-link to="/logout" @click="false" v-if="auth.data">
        <img :src="logout" /><b>logout</b>
      </router-link>
    </div>
  </main>
</template>

<style lang="scss">
main#main {
  flex: none;
  width: 14em;
  height: 100%;
  display: flex;
  padding-top: 5%;
  flex-direction: column;
  background-color: #FFFFFF;

  @media screen and (max-width: 50em) {
    width: 2.5em;
  }

  .main,
  .user {
    gap: .1em;
    flex: none;
    width: 100%;
    display: flex;
    margin: .5em 0;
    overflow: hidden;
    flex-direction: column;
    border-bottom: .15em solid #DFE0EB;

    &:last-child {
      border-bottom: none;
    }

    a {
      gap: 1.5em;
      width: 100%;
      display: flex;
      font-size: .8em;
      padding: 1em 5%;
      color: #A0A0A0;
      overflow: hidden;
      padding-left: 1em;
      align-items: center;
      text-decoration: none;
      font-family: sans-serif;
      justify-content: flex-start;
      transition: 300ms ease-in-out;

      &:hover,
      &.router-link-active {
        color: #FFFFFF;
        background-color: #2A36A4;

        img {
          flex: none;
          filter: brightness(10);
        }
      }

      b {
        white-space: nowrap;
        text-transform: capitalize;
      }

      span {
        font-weight: 900;
      }
    }
  }
}
</style>