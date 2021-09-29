<template>
  <q-page class="">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <h3>
      counter: {{ counterGetter }}
    </h3>
    <div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapMutations } = createNamespacedHelpers('moduleExample')

export default defineComponent({
  name: 'PageIndex',
  computed: {
    ...mapGetters([
      'counterGetter'
    ])
  },
  created: function () {
    console.log(mapGetters(['counterGetter']))
  },
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }
})
</script>
