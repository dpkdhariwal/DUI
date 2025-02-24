import DefaultTheme from 'vitepress/theme'
import '../../../src/assets/main.css' // Import global styles
import {Dbutton} from '../../../src/components/buttons/Button';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Dbutton', Dbutton)
  }
}
