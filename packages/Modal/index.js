import ElModalHook from './basicModal.vue'
export { useModal } from './useModal'
export * from './Modal/src/type'

const components = [ElModalHook]

const install = (App) => {
  components.forEach((item) => {
    App.component(item.__name, item)
  })
}

export default {
  install,
}

