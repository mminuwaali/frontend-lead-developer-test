import { reactive } from 'vue';
import { get, post } from '../util';
import { defineStore } from 'pinia';

const raw = [
  {
    "id": 1,
    "title": "X-Ray",
    "investigations": [
      {
        "id": 1,
        "investigation_type_id": 1,
        "title": "Chest"
      },
      {
        "id": 2,
        "investigation_type_id": 1,
        "title": "Cervical Vertebrae"
      },
      {
        "id": 3,
        "investigation_type_id": 1,
        "title": "Thoracic Vertebrae"
      },
      {
        "id": 4,
        "investigation_type_id": 1,
        "title": "Lumbar Vartebrae"
      },
      {
        "id": 5,
        "investigation_type_id": 1,
        "title": "Lumbo Sacral Vertebrae"
      },
      {
        "id": 6,
        "investigation_type_id": 1,
        "title": "Wrist Joint"
      },
      {
        "id": 7,
        "investigation_type_id": 1,
        "title": "Ankle"
      },
      {
        "id": 8,
        "investigation_type_id": 1,
        "title": "Fingers"
      },
      {
        "id": 9,
        "investigation_type_id": 1,
        "title": "Toes"
      }
    ]
  },
  {
    "id": 2,
    "title": "Ultrasound Scan",
    "investigations": [
      {
        "id": 10,
        "investigation_type_id": 2,
        "title": "Breast"
      },
      {
        "id": 11,
        "investigation_type_id": 2,
        "title": "Pelvis"
      },
      {
        "id": 12,
        "investigation_type_id": 2,
        "title": "Prostate"
      },
      {
        "id": 13,
        "investigation_type_id": 2,
        "title": "Thyroid"
      }
    ]
  }
]

export default defineStore('investigation', () =>
{
  // state
  const investigation = reactive({ load: 0, error: 0, data: [...raw] });

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
