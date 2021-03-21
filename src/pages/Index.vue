<template>
  <q-page class="flex flex-center">
    <List :companies="companies" :onClick="onListItemClick" />
    <company-card :company="currentCompany" v-if="currentCompany" />
    <p>{{newCounter}}</p>

    <q-btn @click="add(1)" label="inc 3"/>
    <q-btn @click="add(2)" label="inc 4"/>
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
      currentCompany: null
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
