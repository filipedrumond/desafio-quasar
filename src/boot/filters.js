import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  app.config.globalProperties.$filters = {
    capitalizeFirstLetter: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    moneyFormact: function (value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }
  }
})
