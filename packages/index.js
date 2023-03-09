import ElModalHook from './Modal/basicModal.vue'
import useModal from './Modal/useModal'

export { useModal }

const components = [ElModalHook]

const install = (App) => {
  components.forEach((item) => {
    App.component(item.__name, item)
  })
}

export default {
  install,
}

