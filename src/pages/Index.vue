<template>
  <q-page class="flex flex-center">
    <q-btn @click="callDialog" label="test" />
    <company-card title="RRRRRRR"></company-card>
  </q-page>
</template>

<script>

import CompanyCard from '../components/CompanyCard.vue'
import InputDialog from '../components/InputDialog.vue'

export default {
  components: {
    CompanyCard
  },
  name: 'PageIndex',
  methods: {
    async callDialog () {
      // const dialog =
      this.$q.dialog({
        component: InputDialog,
        message: 'Uploading... 0%',
        // progress: true, // we enable default settings
        persistent: true, // we want the user to not be able to close it
        ok: true // we want the user to not be able to close it
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
