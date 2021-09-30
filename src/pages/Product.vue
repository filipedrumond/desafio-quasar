<template>
  <q-page class="text-center product-fix-bottom">
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
        @click="comprarClick" />
    </div>
  </q-page>

  <q-dialog ref="dialogRef" v-model="showDialog" @hide="closeDialog">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        Produto Adicionado
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="()=>{this.showDialog = !this.showDialog}" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters: mapGettersProducts, mapActions: mapActionsProducts } = createNamespacedHelpers('products')
const { mapGetters: mapGettersSession, mapActions: mapActionsSession } = createNamespacedHelpers('session')

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      showDialog: false
    }
  },
  computed: {
    ...mapGettersProducts(['currentProduct']),
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
    ...mapActionsProducts(['getOneProduct']),
    ...mapActionsSession(['addToShoppingCart']),
    comprarClick: function () {
      this.showDialog = !this.showDialog
      this.addToShoppingCart(this.currentProduct)
    },
    closeDialog: function () {
      this.showDialog = !this.showDialog
      this.$router.push('/carrinho')
    }
  },
  created: function () {
    this.getOneProduct(this.$route.params.id)
  }

})
</script>
