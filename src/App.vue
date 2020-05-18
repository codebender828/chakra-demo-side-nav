<template>
  <c-grid bg="gray.800" h="100vh" w="100wh" color="white" font-family="body" template-columns="80px 1fr">
    <side-nav grid-column="1/2" />
    <transition mode="out-in" name="fade">
      <router-view />
    </transition>
  </c-grid>
</template>

<script>
import SideNav from '@/components/SideNav'
import { CGrid } from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CGrid,
    SideNav
  },
  data () {
    return {
      transitionName: 'fade'
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
