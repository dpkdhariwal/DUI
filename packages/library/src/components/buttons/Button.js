import { ref, h, defineComponent } from 'vue'

export const Dbutton = defineComponent(
  (props) => {
    // use Composition API here like in <script setup>
    const count = ref(0)

    const handleClick = () => {
      count.value++
    }

    return () => {
      // render function or JSX
      return h('button', { class: 'dbutton', onClick: handleClick }, count.value)
    }
  },
  // extra options, e.g. declare props and emits
  {
    props: {
      /* ... */
    },
  },
)
