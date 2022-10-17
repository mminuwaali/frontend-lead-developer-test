<script setup>
import { ref } from 'vue';
import $ from '../stores/auth';
import { storeToRefs } from 'pinia';

// states
const credentials = ref({ email: '', password: '' });

// store
const { $login } = $();
const { auth } = storeToRefs($());

// methods
const handleSubmit = () => { $login({ ...credentials.value }) };
</script>

<template>
  <form id="auth" @submit.prevnt="handleSubmit">
    <div class="header">
      <h3>authentication</h3>
      <span @click="$emit('close-modal')" />
    </div>
    <div class="inputs">
      <div class="card">
        <label for="email">email:</label>
        <input v-model="credentials.email" type="email" required placeholder="Enter a valid email" />
      </div>
      <div class="card">
        <label for="password">password:</label>
        <input v-model="credentials.password" type="password" required placeholder="Enter a valid password" />
      </div>
    </div>
    <div class="footer">
      <input type="submit" value="login" />
    </div>
  </form>
</template>

<style lang="scss">
#auth {
  top: 10%;
  left: 50%;
  opacity: 0;
  z-index: 10;
  /* height: 12em; */
  display: flex;
  position: fixed;
  overflow: hidden;
  border-radius: .5em;
  width: min(28em, 90vw);
  flex-direction: column;
  transform: translateX(-50%);
  background-color: #FFFFFF;
  animation: popup 300ms ease-out forwards;
  box-shadow: .2em .2em .2em rgba(0 0 0 / .1);

  .header {
    flex: none;
    height: 2em;
    width: 100%;
    display: flex;
    padding: 1.4em 10%;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 .1em .2em rgba(0 0 0 / .1);

    h3 {
      font-weight: 900;
      text-transform: capitalize;
    }

    span {
      width: 1em;
      height: 1em;
      display: flex;
      cursor: pointer;
      position: relative;
      align-items: center;
      justify-content: center;

      &::before,
      &::after {
        content: '';
        width: 100%;
        height: 0.2em;
        position: absolute;
        border-radius: 1em;
        transform: rotate(45deg);
        background-color: black;
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }

  .inputs {
    gap: 1em;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    padding: .5em 1em;
    align-items: center;
    justify-content: center;

    .card {
      gap: 0.1em;
      display: flex;
      flex-direction: column;

      label {
        font-size: 1.1em;
        font-weight: 900;
        font-variant: small-caps;
      }

      input {
        outline: none;
        padding: .3em 5%;
        border-radius: .3em;
        border: .2em solid grey;

        &::placeholder {
          color: grey;
          font-weight: 900;
          font-variant: small-caps;
          text-transform: lowercase;
        }
      }
    }
  }

  .footer {
    flex: none;
    width: 100%;
    padding: 1em;
    display: grid;
    place-content: center center;

    input {
      border: none;
      outline: none;
      display: flex;
      cursor: pointer;
      color: #FFFFFF;
      font-weight: 900;
      border-radius: 1em;
      align-items: center;
      transition: 400ms ease;
      padding: .4em 3em .5em;
      justify-content: center;
      text-transform: uppercase;
      background-color: #2A36A4;
      box-shadow: .2em .2em .2em rgba(0 0 0 / .3);

      &:hover {
        filter: brightness(1.4);
      }
    }
  }
}

@keyframes popup {
  from {
    opacity: 0;
    transform: translate(-50%, -3em);
  }

  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
</style>