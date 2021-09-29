<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        {{title}}
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dialog',
  props: {
    title: {
      type: String,
      required: true
    }
  },

  emits: [
    ...useDialogPluginComponent.emits
  ],

  setup () {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    return {
      dialogRef,
      onDialogHide,
      onOKClick () {
        onDialogOK()
      },
      onCancelClick: onDialogCancel
    }
  }
})
</script>
