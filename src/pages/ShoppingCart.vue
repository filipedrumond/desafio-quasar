<template>
  <q-page class="text-center">
    <h5>Carrinho de compras</h5>
    <ProductItem
      v-for="product in getShoppingCart.products"
      :key="product.name"
      v-bind="product"
      :isCart="true"
      @removeFromCart="removeFromShoppingCart(product.id)"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ProductItem from 'components/ProductItem.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters: mapGettersProducts, mapActions: mapActionsProducts } = createNamespacedHelpers('products')
const { mapGetters: mapGettersSession, mapActions: mapActionsSession } = createNamespacedHelpers('session')

export default defineComponent({
  name: 'ShoppingCart',
  components: {
    ProductItem
  },
  computed: {
    ...mapGettersProducts([
      'getAll',
      'currentProductsFromCart'
    ]),
    ...mapGettersSession([
      'getShoppingCart'
    ])
  },
  methods: {
    ...mapActionsProducts(['getProducts']),
    ...mapActionsSession(['addToShoppingCart', 'removeFromShoppingCart'])
  },
  created: function () {
    this.getProducts()
    // this['products/getAll']()
    // this['session/getShoppingCart']()
    // this.getProductsFromList()
  }

})
</script>
