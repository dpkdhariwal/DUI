import { ref, h, defineComponent } from 'vue'

export const Dbutton = defineComponent(
  (props, { slots }) => {
    // use Composition API here like in <script setup>
    const count = ref(0)

    const handleClick = () => {
      count.value++
<<<<<<< HEAD
      console.log('Button has been clicked', count.value)
=======
      console.log('Button clicked', count.value)
>>>>>>> cc62cf784f8e09cbef616a64982ebf9aa3d650fb
    }

    return () => {
      // render function or JSX
      return h(
        'button',
        { class: 'dbutton', onClick: handleClick, role: 'button', style: { width: props.width } },
        [
          slots.default ? slots.default() : props.title, // Named slot "title"
          h('br'), // Line break for separation
          slots.description ? slots.description() : '', // Named slot "description" (optional)
        ],
      )
    }
  },
  // extra options, e.g. declare props and emits
  {
    props: {
      width: {
        type: String,
        default: '200px',
      },
      title: {
        type: String,
        default: 'Click Here',
      },
    },
  },
)
