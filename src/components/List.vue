<template>
   <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator v-for="(company, index) in companies" :key="index">
      <q-item clickable v-ripple @click="onClick(company)">
        <q-item-section>{{ company.title }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    companies: {
      type: Array,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>
