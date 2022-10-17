<script setup>
import { storeToRefs } from 'pinia';
import $ from '../../stores/investigation';
import { onMounted, reactive, ref } from 'vue';

// store
const { $get, $post } = $();
const { investigation } = storeToRefs($());

// reactive states
const investigations = ref([]);
const otherData = ref({ ctscan: 'specify', mri: 'specify' });

// mounted hook
// onMounted(() => { $get() });

// methods
const handleSubmit = () => { console.log(investigations.value, otherData.value); };
</script>

<template>
  <form id="dashboard" @submit.prevent="handleSubmit">
    <div class="content">
      <div class="flex" v-for="record in investigation.data" key="record.id">
        <div class="title">
          <h2>{{record.title}}</h2>
        </div>
        <div class="list">
          <span v-for="i in record.investigations" key="i.id">
            <input type="checkbox" :value="i.id" v-model="investigations" />
            <label>{{i.title}}</label>
          </span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="dropdown">
        <div class="box">
          <label>CT Scan</label>
          <select name="ct-scan" required v-model="otherData.ctscan">
            <option value="specify" hidden selected>*specify</option>
            <option value="scan-1">scan-1</option>
            <option value="scan-2">scan-2</option>
            <option value="scan-3">scan-3</option>
          </select>
        </div>
        <div class="box">
          <label>MIRI</label>
          <select name="miri" required v-model="otherData.mri">
            <option value="specify" hidden selected>*specify</option>
            <option value="mri-1">mri-1</option>
            <option value="mri-2">mri-2</option>
            <option value="mri-3">mri-3</option>
          </select>
        </div>
      </div>
      <input type="submit" name="" value="save and send" class="submit" />
    </div>
  </form>
</template>

<style lang="scss">
#dashboard {
  display: flex;
  flex-direction: column;

  .content,
  .footer {
    gap: 1em;
    display: flex;
    padding-inline: 5%;
    flex-direction: column;
  }

  .content {
    flex: 1 1 auto;
    overflow: auto;
    justify-content: flex-start;

    .flex {
      gap: 1em;
      flex: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-bottom: .2em solid #E0E0E0;

      .title {
        flex: inherit;
        width: inherit;
        display: inherit;
        align-items: center;
        justify-content: flex-start;

        h2 {
          color: #382F90;
          font-weight: 900;
          text-transform: capitalize;
        }
      }

      .list {
        gap: 1em;
        display: grid;
        flex: 1 1 auto;
        grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));

        span {
          gap: 1em;
          height: 2em;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          label {
            font-weight: 900;
          }
        }
      }
    }
  }

  .footer {
    flex: none;
    align-items: flex-end;
    background-color: #FFFFFF;

    .dropdown {
      gap: 1em;
      width: 100%;
      display: flex;
      padding: 1em 0;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      .box {
        gap: .4em;
        color: grey;
        display: flex;
        flex: 0 1 20em;
        flex-direction: column;

        select {
          padding: .5em;
          color: inherit;
          outline-color: rgba(0 0 0 / .3);
        }
      }
    }

    input {
      &.submit {
        flex: none;
        border: none;
        outline: none;
        font-size: 1em;
        cursor: pointer;
        font-weight: 900;
        color: #FFFFFF;
        padding: .6em 1em;
        border-radius: .5em;
        text-transform: capitalize;
        background-color: #382F90;
      }
    }
  }
}
</style>