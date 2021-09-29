<template>
  <q-item class="c-product-item"
    clickable
    tag="a"
    :href="link"
  >
    <!-- <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section> -->
    <img
      :alt="'Logo ' + name"
      :src="img"
      class="q-mr-md"
    >
    <div class="text-left column justify-between q-py-md">
      <div class="text-h6">{{ name }}</div>
      <div class="value">{{ priceFormat }}</div>
    </div>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    img: {
      type: String,
      default: '~assets/quasar.png'
    },

    id: {
      type: String
    },

    price: {
      type: String
    },

    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    priceFormat: function () {
      const self = this
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(self.price)
    },
    link: function () {
      return '/product/' + this.id
    }
  }
})
</script>
