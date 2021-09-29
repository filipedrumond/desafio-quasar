<template>
  <q-page class="text-center">
    <img
      alt="Quasar logo"
      :src="currentProduct.img"
      style="width: 200px; height: 200px"
    >
    <div class="text-left q-px-md">
      <!-- H1 para SEO -->
      <div><h1 class="text-h4 q-my-xs">{{currentProduct.name}}</h1></div>
      <div>{{currentProduct.description}}</div>
      <div class="q-mb-sm">Peso do produto: {{weightFormat}}</div>
      <div>código: {{currentProduct.id}}</div>
      <div class="text-h6">{{ priceFormat }}</div>
    </div>

    <div class="fixed-bottom q-pb-md">
      <q-btn class="shadow-7"
        color="primary"
        padding="10px 100px"
        size="16px"
        label="ALUGAR"
        @click="onClick" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { useQuasar } from 'quasar'
import Dialog from 'components/Dialog.vue'

const { mapGetters, mapActions } = createNamespacedHelpers('products')

export default defineComponent({
  name: 'PageIndex',
  computed: {
    ...mapGetters([
      'currentProduct'
    ]),
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
    ...mapActions(['getOneProduct']),
    onClick: function () {
      const $q = useQuasar()
      $q.dialog({
        component: Dialog,
        componentProps: {
          title: 'something'
        }
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    }
  },
  created: function () {
    this.getOneProduct(this.$route.params.id)
  }

})
</script>
