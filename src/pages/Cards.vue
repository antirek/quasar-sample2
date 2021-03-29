<template>
  <q-page>
    <div class="row q-pa-md">
      <div class="col-12">
      <h3>Cards</h3>
      </div>
    </div>
    <div class="row q-pa-md">
      <div class="col-4">
        <ListCard
          :items="items"
          header="Items"
        />
      </div>
    </div>
  </q-page>
</template>

<script>

import ListCard from '../components/ListCard.vue'

export default {
  components: {
    ListCard
  },
  data () {
    return {
      currentCompany: null,
      text: null,
      items: [
        {
          name: '1',
          text: '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2019-01-01'
        },
        {
          text: '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2020-01-02'
        },
        {
          text: '3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2021-01-03'
        },
        {
          text: '4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2020-01-04'
        },
        {
          text: '5. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2021-01-05'
        },
        {
          text: '6. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2020-01-06'
        },
        {
          text: '7. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2021-01-07'
        },
        {
          text: '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2019-01-01'
        },
        {
          text: '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2020-01-02'
        },
        {
          text: '3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2021-01-03'
        },
        {
          text: '4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2020-01-04'
        },
        {
          text: '5. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2021-01-05'
        },
        {
          text: '6. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2020-01-06'
        },
        {
          text: '7. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          date: '2021-01-07'
        }
      ]
    }
  },
  name: 'PageCards'
}
</script>
