<template>
  <q-page class="text-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/products/react.png"
      style="width: 200px; height: 200px"
    > -->
    <!-- {{getAll}} -->
    <h3>here</h3>
    {{ getOne }}
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
      'getOne'
    ])
  },
  methods: {
    ...mapActions(['getProduct'])
  },
  created: function () {
    const self = this
    this.getProduct(self.$route.params.id)
  }

})
</script>
