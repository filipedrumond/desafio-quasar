<template>
  <q-page class="text-center">
    <div class="text-h5 q-pt-md">Pedidos</div>
    <OrderItem
      v-for="order in getOrders"
      :key="order.name"
      v-bind="order"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import OrderItem from 'components/OrderItem.vue'

const { mapGetters: mapGettersSession, mapActions: mapActionsSession } = createNamespacedHelpers('session')

export default defineComponent({
  name: 'Orders',
  components: { OrderItem },
  computed: {
    ...mapGettersSession(['getOrders', 'getsessionID'])
  },
  methods: {
    ...mapActionsSession(['addToShoppingCart', 'loadOrders'])
  },
  created: function () {
    this.loadOrders()
  }

})
</script>
