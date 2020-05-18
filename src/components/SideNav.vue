<template>
  <c-flex v-bind="$props" as="nav" bg="black" h="100vh" color="white" flex-dir="column" align-items="center" justify-content="center" font-family="body">
    <c-box font-size="2xl" py="4" font-weight="bold">
      <img src="../assets/chakra.png" alt="Chakra UI Vue" width="40px" />
    </c-box>
    <c-box as="ul" font-size="2xl" my="auto" font-weight="bold">
      <c-pseudo-box :class="listItemClass" as="router-link" to="/" display="block" px="3" my="3">
        <c-box pos="relative">
          <c-icon size="1.2rem" pos="relative" z-index="2" name="home" />
          <c-text as="span" border="3px solid black" font-size="1rem" p="5px 12px 5px 30px" rounded="full" bg="gray.100" color="black" pos="absolute" d="none" top="50%" left="-9px" transform="translateY(-43%)">
            Home
          </c-text>
        </c-box>
      </c-pseudo-box>
      <c-pseudo-box :class="listItemClass" as="router-link" to="/about" display="block" px="3" my="3">
        <c-box pos="relative">
          <c-icon size="1.2rem" pos="relative" z-index="2" name="info-circle" />
          <c-text as="span" border="3px solid black" font-size="1rem" p="5px 12px 5px 30px" rounded="full" bg="gray.100" color="black" pos="absolute" d="none" top="50%" left="-9px" transform="translateY(-43%)">
            About
          </c-text>
        </c-box>
      </c-pseudo-box>
      <c-pseudo-box :class="listItemClass" as="router-link" to="/work" display="block" px="3" my="3">
        <c-box pos="relative">
          <c-icon size="1.2rem" pos="relative" z-index="2" name="briefcase" />
          <c-text as="span" border="3px solid black" font-size="1rem" p="5px 12px 5px 30px" rounded="full" bg="gray.100" color="black" pos="absolute" d="none" top="50%" left="-9px" transform="translateY(-43%)">
            Work
          </c-text>
        </c-box>
      </c-pseudo-box>
      <c-pseudo-box :class="listItemClass" as="router-link" to="/hobbies" display="block" px="3" my="3">
        <c-box pos="relative">
          <c-icon size="1.2rem" pos="relative" z-index="2" name="palette" />
          <c-text as="span" border="3px solid black" font-size="1rem" p="5px 12px 5px 30px" rounded="full" bg="gray.100" color="black" pos="absolute" d="none" top="50%" left="-9px" transform="translateY(-43%)">
            Hobbies
          </c-text>
        </c-box>
      </c-pseudo-box>
      <c-pseudo-box :class="listItemClass" as="a" href="#" display="block" px="3" my="3">
        <c-box pos="relative">
          <c-icon size="1.2rem" pos="relative" z-index="2" name="scroll" />
          <c-text as="span" border="3px solid black" font-size="1rem" p="5px 12px 5px 30px" rounded="full" bg="gray.100" color="black" pos="absolute" d="none" top="50%" left="-9px" transform="translateY(-43%)">
            Blog
          </c-text>
        </c-box>
      </c-pseudo-box>
      <c-pseudo-box :class="listItemClass" as="a" href="#" display="block" px="3" my="3">
        <c-box pos="relative">
          <c-icon size="1.2rem" pos="relative" z-index="2" name="paper-plane" />
          <c-text as="span" border="3px solid black" font-size="1rem" p="5px 12px 5px 30px" rounded="full" bg="gray.100" color="black" pos="absolute" d="none" top="50%" left="-9px" transform="translateY(-43%)">
            Contact
          </c-text>
        </c-box>
      </c-pseudo-box>
    </c-box>
    <c-box font-size="2xl" py="4" font-weight="bold">
      <c-pseudo-box :class="listItemClass" as="a" href="#" display="block" px="3" my="3">
        <c-box pos="relative">
          <c-icon size="1.2rem" pos="relative" z-index="2" name="coffee" />
          <c-text as="span" border="3px solid black" font-size="1rem" p="5px 12px 5px 30px" rounded="full" bg="gray.100" color="black" pos="absolute" d="none" top="50%" left="-9px" transform="translateY(-43%)">
            Subscribe
          </c-text>
        </c-box>
      </c-pseudo-box>
    </c-box>
  </c-flex>
</template>

<script>
import { CBox, CPseudoBox, CFlex, CIcon, CText, Css } from '@chakra-ui/vue'
import { css } from 'emotion'

export default {
  name: 'SideNav',
  extends: CFlex,
  inject: ['$chakraTheme'],
  components: {
    CBox,
    CFlex,
    CIcon,
    CPseudoBox,
    CText
  },
  computed: {
    theme: vm => vm.$chakraTheme(),
    listItemClass () {
      return css(Css({
        '&.router-link-exact-active': {
          color: 'black',
          span: {
            d: 'block',
            bg: 'vue.400',
            border: '3px solid white',
            shadow: '0 0 0 3px black'
          }
        },
        '&:hover, :focus': {
          outline: 'none',
          svg: {
            color: 'black'
          },
          span: {
            display: 'block'
          }
        }
      })(this.theme))
    }
  }
}
</script>
