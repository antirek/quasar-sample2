<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card style="min-width: 450px">
      <q-card-section>

        <span v-if="title">
          {{ title }}
          <q-space style="height: 10px"/>
        </span>

        <q-input
            dense
            v-model="data"
            autofocus
            outlined
        />

      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="OK" v-close-popup @click="onOKClick"/>
        <q-btn flat label="Cancel" v-close-popup @click="onCancelClick"/>
      </q-card-actions>

    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'InputDialog',
  data: function () {
    return {
      data: ''
    }
  },
  props: ['title'],
  methods: {
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      this.$emit('hide')
    },
    onOKClick () {
      this.$emit('ok', this.data)
      this.hide()
    },
    onCancelClick () {
      this.hide()
    }
  }
}
</script>
