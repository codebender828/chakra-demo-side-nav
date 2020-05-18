<template>
  <c-box grid-column="2/3" :px="[12, 12, 24]" py="10">
    <c-heading>Hobbies</c-heading>
    <c-text :max-w="[null, null, '50%']" color="whiteAlpha.800" font-size="lg" mt="4">
      Hover over the side nav to view some cool interactions!
    </c-text>
    <c-text :max-w="[null, null, '50%']" color="whiteAlpha.800" mt="10">
      Made with <c-link color="vue.300" text-decoration="underline" href="https://vue.chakra-ui.com">@chakra-ui/vue</c-link> 💚
    </c-text>
  </c-box>
</template>

<script>
import { CBox, CHeading, CText, CLink } from '@chakra-ui/vue'

export default {
  name: 'Hobbies',
  components: {
    CBox,
    CHeading,
    CText,
    CLink
  }
}
</script>
