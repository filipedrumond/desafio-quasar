<template>
  <q-item class="c-order-item">
    <div :class="'column text-left dados ' + 'status-' + status">
      <div class="text-h6">#{{id}}</div>
      <div>
        <small>Pedido Realizado em:</small>
        <div class="data-formatada">
          {{date}} as {{time}}
        </div>
      </div>
    </div>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OrderItem',
  props: {
    id: {
      type: Number
    },
    status: {
      type: Number
    },
    products: {
      type: Array
    },
    sessionID: {
      type: String
    },
    date: {
      type: String
    },
    time: {
      type: String
    }
  },
  computed: {
    priceFormat: function () {
      const self = this
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(self.price)
    }
  }
})
</script>
