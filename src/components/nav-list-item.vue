<template>
  <c-box v-bind="$props" as="li">
    <c-pseudo-box :class="listItemClass" :as="tag" :to="to" display="block" px="3" my="3" pos="relative">
      <c-icon size="1rem" pos="relative" z-index="2" :name="icon" transition="all 0.2s ease-in-out" />
      <c-text as="span" border="3px solid black" font-size="1rem" p="5px 12px 5px 30px" rounded="full" bg="gray.100" color="black" pos="absolute" d="none" top="50%" left="0" transform="translateY(-43%)">
        <slot />
      </c-text>
    </c-pseudo-box>
  </c-box>
</template>

<script>
import { CBox, CPseudoBox, CIcon, CText, Css as mapStyles } from '@chakra-ui/vue'
import { css } from 'emotion'

export default {
  name: 'NavListItem',
  /**
   * If you would like to give your component Chakra "powers",
   * you can then use the `extends` property and the value would
   * be the component whose props we wish to compose.
   *
   * In this case, we just need the CBox component props.
   *
   * Don't forget to aaply the `v-bind="$props"` at the root of this template.
   *
   * Great! Now, we can can not apply CBox props on the NavListItem component!
   */
  extends: CBox,
  inject: ['$chakraTheme'],
  props: {
    /**
     * Icon name
     */
    icon: {
      type: String
    },
    /**
     * Route path
     */
    to: {
      type: String,
      default: '#'
    },
    /**
     * Tag of the actual anchor element
     */
    tag: {
      type: String,
      default: 'router-link'
    }
  },
  components: { CBox, CPseudoBox, CIcon, CText },
  computed: {
    theme: vm => vm.$chakraTheme(),
    /**
      * The `mapStyles` function is an advanced Chakra UI Vue utility that helps map
      * CSS style objects to values in your Chakra UI Vue theme.
      *
      * This also allows us to use shorthands in our JS (like d: 'flex', instead of display: 'flex').
      * The returned object is then passed in to emotion's `css` function.
      * the final returned value is the classname for the styles.
      *
      * You typically may not need this for basic styling. But if you need to
      * style with the theme in Javascript, you can use this to create styles as well.
      *
      * Otherwise, you could just use normal CSS. It'd do the trick
      **/
    listItemClass () {
      return css(mapStyles({
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
        },
        '&:active': {
          svg: {
            transform: 'scale(1.1)'
          }
        }
      })(this.theme))
    }
  }
}
</script>
