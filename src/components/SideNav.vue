<template>
  <c-flex v-bind="$props" as="nav" bg="black" h="100vh" color="white" flex-dir="column" align-items="center" justify-content="center" font-family="body">
    <c-box font-size="2xl" py="4" font-weight="bold">
      <img src="../assets/chakra.png" alt="Chakra UI Vue" width="40px" />
    </c-box>
    <c-box list-style-type="none" as="ul" font-size="2xl" my="auto" font-weight="bold">
      <c-box as="li">
        <nav-list-item to="/" icon="home">
          Home
        </nav-list-item>
      </c-box>
      <c-box as="li">
        <nav-list-item to="/about" icon="info-circle">
          About
        </nav-list-item>
      </c-box>
      <c-box as="li">
        <nav-list-item to="/work" icon="briefcase">
          Work
        </nav-list-item>
      </c-box>
      <c-box as="li">
        <nav-list-item to="/hobbies" icon="palette">
          Hobbies
        </nav-list-item>
      </c-box>
      <c-box as="li">
        <nav-list-item tag="a" to="#" icon="scroll">
          Blog
        </nav-list-item>
      </c-box>
      <c-box as="li">
        <nav-list-item tag="a" to="#" icon="paper-plane">
            Contact
          </nav-list-item>
      </c-box>
    </c-box>
    <c-box font-size="2xl" py="4" font-weight="bold">
      <c-box as="ul" list-style-type="none">
        <c-box as="li">
          <nav-list-item tag="a" to="#" icon="coffee">
            Subscribe
          </nav-list-item>
        </c-box>
      </c-box>
    </c-box>
  </c-flex>
</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'
import NavListItem from '@/components/nav-list-item'

export default {
  name: 'SideNav',
  extends: CFlex,
  components: {
    CBox,
    CFlex,
    NavListItem
  }
}
</script>
