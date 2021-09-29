<template>
  <q-page class="text-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/products/react.png"
      style="width: 200px; height: 200px"
    > -->
    <!-- {{getAll}} -->
    <ProductItem
      v-for="product in getAll"
      :key="product.name"
      v-bind="product"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ProductItem from 'components/ProductItem.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('products')

export default defineComponent({
  name: 'PageIndex',
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters([
      'getAll'
    ])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created: function () {
    this.getProducts()
  }

})
</script>
