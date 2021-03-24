<template>
  <q-page class="flex flex-center">
    <List :companies="companies" :onClick="onListItemClick" />
    <company-card :company="currentCompany" v-if="currentCompany" />
    <p>{{newCounter}}</p>

    <q-btn @click="add(1)" label="inc 3"/>
    <q-btn @click="add(2)" label="inc 4"/>
    <br/>
    <br/>
    <br/>
    {{ text }}
    <br/>
    <q-scroll-area style="height: 200px; width: 300px; border: 1px solid;" >
      <div v-for="(item, index) in items" :key="index" class="q-py-xs">
         <div v-intersection="function(entry) { onIntersection(item, entry)}">
          {{ item.text }}
         </div>
      </div>
    </q-scroll-area>
    <br>
     <q-card class="position-relative" style="height: 500px;">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        {{ lorem }}
      </q-card-section>
      <q-card-section class="absolute-bottom q-pa-none">
      <q-separator ></q-separator>
        <q-card-actions>
          <q-btn flat icon="event" />
          <q-btn flat>
            5:30PM
          </q-btn>
          <q-btn flat>
            7:00PM
          </q-btn>
          <q-btn flat color="primary">
            Reserve
          </q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>

import { mapState } from 'vuex'

import CompanyCard from '../components/CompanyCard.vue'
import InputDialog from '../components/InputDialog.vue'
import List from '../components/List.vue'

export default {
  components: {
    CompanyCard,
    List
  },
  data () {
    return {
      currentCompany: null,
      text: null,
      items: [
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
      /*
      companies: [
        {
          title: 'New Company 1'
        },
        {
          title: 'New Company 2'
        }
      ]
      */
    }
  },
  name: 'PageIndex',
  computed: {
    newCounter: {
      get () {
        return this.$store.getters['store/getNewSum']
      }
    },
    ...mapState({
      companies () {
        // return this.$store.state.store.companies
        // return this.$store.getters['store/getCompanies']
        return this.$store.getters['store/getCompaniesByType']('zero')
        // return this.$store.getters['store/getCompaniesZero']
      }
    })
  },
  methods: {
    onIntersection (item, entry) {
      if (entry.isIntersecting) {
        this.text = item.date
      }
    },
    onListItemClick (company) {
      this.currentCompany = company
      // console.log('c', this.$store.getters['store/getCompanies'])
    },
    add (companyId) {
      console.log('add', companyId)
      this.$store.commit('store/addNew', companyId)
      // console.log(this.$store)
    },
    async callDialog () {
      // const dialog =
      this.$q.dialog({
        title: 'qw',
        component: InputDialog,
        // progress: true, // we enable default settings
        persistent: true, // we want the user to not be able to close it
        ok: true // we want the user to not be able to close it
      }).onOk((data) => {
        console.log('data', data)
      }).onCancel(() => {
        console.log('cancel')
      })

      /*
      const response = await this.$q.showDialog({
        component: InputDialog,
        parent: this,
        persistent: true,
        title: 'Dialog title'
      })
      if (response.ok) {
        console.log(response.data)
      }
      */
    }
  }
}
</script>
