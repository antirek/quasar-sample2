<template>
  <q-dialog ref="dialog" @hide="onDialogHide" persistent>
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
        <q-input
            dense
            v-model="data2"
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
      data: '',
      data2: ''
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
      this.$emit('ok', { data: this.data, data2: this.data2 })
      this.hide()
    },
    onCancelClick () {
      this.hide()
    }
  }
}
</script>
