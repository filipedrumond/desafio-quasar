<template>
  <q-page class="text-center" v-if="getShoppingCart.products.length >= 1">
    <h5 class="q-mb-sm q-mt-md">Carrinho de compras</h5>
    <ProductItem
      v-for="product in getShoppingCart.products"
      :key="product.name"
      v-bind="product"
      :isCart="true"
      @removeFromCart="removeFromShoppingCart(product.id)"
    />
    <div class="fixed-bottom q-pb-md">
      <div class="text-left q-pl-lg q-pb-md">
        <span class="text-h5">
          Total: {{ valorTotal }}
        </span>
      </div>
      <q-btn class="shadow-7"
        color="primary"
        padding="10px 80px"
        size="16px"
        label="Finalizar pedido"
        @click="finalizarPedido" />
    </div>
  </q-page>
  <q-page class="text-center"  v-if="getShoppingCart.products.length == 0">
    <div><h5>Seu carrinho está vazio 😢</h5></div>
    <div class="justify-between text-center q-pt-xl">
      <router-link to="/" class="text-primary">
        <div>
          <q-icon name="add_shopping_cart" size="md" />
        </div>
        <div class="text-h6">
          Ir para lista de produtos
        </div>
      </router-link>
    </div>
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
    ]),
    valorTotal: function () {
      let total = 0
      this.getShoppingCart.products.forEach(element => {
        total += element.price
      })
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)
    }
  },
  methods: {
    ...mapActionsProducts(['getProducts']),
    ...mapActionsSession(['addToShoppingCart', 'removeFromShoppingCart', 'submitShoppingCart']),
    finalizarPedido: function () {
      this.submitShoppingCart()
    }
  },
  created: function () {
    this.getProducts()
  }

})
</script>
