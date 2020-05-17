<template>
  <c-grid bg="gray.800" h="100vh" w="100wh" color="white" font-family="body" template-columns="80px 1fr">
    <side-nav grid-column="1/2" />
    <c-box grid-column="2/3" p="10">
      <c-heading>⚡️ Hello World</c-heading>
      <c-text :max-w="[null, null, '50%']" color="whiteAlpha.800" font-size="lg" mt="4">
        Hover over the side nav to view some cool interactions!
      </c-text>
      <c-text :max-w="[null, null, '50%']" color="whiteAlpha.800" mt="10">
        Made with <c-link color="vue.300" text-decoration="underline" href="https://vue.chakra-ui.com">@chakra-ui/vue</c-link> 💚
      </c-text>
    </c-box>
  </c-grid>
</template>

<script>
import SideNav from '@/components/SideNav'
import { CBox, CGrid, CHeading, CText, CLink } from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CBox,
    CGrid,
    SideNav,
    CHeading,
    CText,
    CLink
  }
}
</script>

<style>
</style>
