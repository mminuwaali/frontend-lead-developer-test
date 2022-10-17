import { reactive } from 'vue';
import { get, post } from '../util';
import { defineStore } from 'pinia';

export default defineStore('investigation', () =>
{
  // state
  const investigation = reactive({ load: 0, error: 0, data: [] });

  // methods
  const $get = async () =>
  {
    try
    {
      const res = await get('investigations/');
      investigation.data = res.data;
    } catch (error)
    {
      investigation.error = error;
      console.error(error);
    }
  };

  const $post = async (data) =>
  {
    try
    {
      const res = await post('investigations/', { developer: 'Developer', ...data });
      investigation.data = res.data;
    } catch (error)
    {
      investigation.error = error;
      console.error(error);
    }
  };

  return ({ investigation, $get, $post });
});
