<template>
  <q-page class="text-center">
    <img
      alt="Quasar logo"
      src="~assets/react.png"
      style="width: 200px; height: 200px"
    >
    <h3>
      products: {{ getAll }}
    </h3>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('products')

export default defineComponent({
  name: 'PageIndex',
  computed: {
    ...mapGetters([
      'getAll'
    ])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  mounted: function () {
    this.getProducts()
  }

})
</script>
