<template>
   <div class="q-pa-md" style="max-width: 450px">
    <q-list bordered separator v-for="(company, index) in companies" :key="index">
      <q-item
        clickable
        v-ripple
        @click="onClickItem(company)"
        :active="selected.companyId === company.companyId"
      >
        <q-item-section>{{ company.title }}</q-item-section>
        <q-item-section>new: {{ company.new }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      selected: {}
    }
  },
  props: {
    companies: {
      type: Array,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    onClickItem (company) {
      this.selected = company
      this.onClick(company)
    }
  }
}
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>
