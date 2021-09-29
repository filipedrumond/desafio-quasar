<template>
  <q-item
    clickable
    tag="a"
    :href="link"
  >
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductList',
  props: {
    img: {
      type: String,
      default: '~assets/quasar.png'
    },

    value: {
      type: String,
      default: '00.00'
    },

    link: {
      type: String,
      default: '#'
    },

    name: {
      type: String,
      default: ''
    }
  }
})
</script>
