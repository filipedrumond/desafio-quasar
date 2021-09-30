<template>
  <q-item class="c-product-item"
    clickable
    tag="a"
    :href="link"
  >

    <img
      :alt="'Logo ' + name"
      :src="img"
      class="q-mr-md"
    >
    <div class="text-left row items-center justify-between q-py-md w-100">
      <div class="column">
        <div class="text-h6">{{ name }}</div>
        <div class="value">{{ priceFormat }}</div>
      </div>
      <div class="q-pr-sm" v-if="isCart">
        <q-item
            clickable
            tag="a"
            href="/#/carrinho"
            @click="removeFromCart"
          >
            <q-icon name="delete" size="md" />
          </q-item>
      </div>
    </div>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductItem',
  props: {
    img: {
      type: String,
      default: '~assets/quasar.png'
    },

    id: {
      type: Number
    },

    price: {
      type: Number
    },

    name: {
      type: String,
      default: ''
    },

    isCart: {
      type: Boolean
    }
  },
  computed: {
    priceFormat: function () {
      const self = this
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(self.price)
    },
    link: function () {
      return '/#/product/' + this.id
    }
  },
  methods: {
    removeFromCart: function () {
      this.$emit('removeFromCart', this.id)
    }
  }
})
</script>
