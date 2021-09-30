<template>
  <q-page class="text-center">
    <h5>Pedidos</h5>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters: mapGettersSession, mapActions: mapActionsSession } = createNamespacedHelpers('session')

export default defineComponent({
  name: 'Orders',
  computed: {
    ...mapGettersSession(['getsessionID', 'getShoppingCart']),
    priceFormat: function () {
      const self = this
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(self.currentProduct.price)
    },
    weightFormat: function () {
      const weightKG = this.currentProduct.weightKG
      if (weightKG < 1) return (weightKG * 1000) + ' G'
      return weightKG + ' KG'
    }
  },
  methods: {
    ...mapActionsSession(['addToShoppingCart'])
  },
  created: function () {
    // this.getOneProduct(this.$route.params.id)
  }

})
</script>
