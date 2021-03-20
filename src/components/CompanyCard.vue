<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" height="200px" width="700px"></q-img>

      <q-card-section>
        <div class="text-h6">{{ this.title }}</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  name: 'CompanyCard',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
