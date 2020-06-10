<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderFooter from '../components/OrderFooter'
import OrderHeader from '../components/OrderHeader'
export default {
  components: {
    OrderHeader,
    OrderFooter
  }
}
</script>

<style></style>
