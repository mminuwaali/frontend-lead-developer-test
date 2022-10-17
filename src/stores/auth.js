import { get, post } from '../util';
import { reactive } from 'vue';
import { defineStore } from 'pinia';

export default defineStore('auth', () =>
{
  // state
  const auth = reactive({ load: 0, error: 0, data: {} });

  // methods
  const $login = async (data) =>
  {
    try
    {
      const res = await post('login/', data);
      auth.data = res.data;
    } catch (error)
    {
      auth.error = error;
      console.error(error);
    }
  };

  return ({ auth, $login });
});
