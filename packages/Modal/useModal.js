import { getCurrentInstance, ref, unref, watch } from 'vue'
import { getDynamicProps } from './utils'

export function useModal(props) {
  const modalRef = ref<Nullable<ModalMethods>>(null)
  const currentInstance = getCurrentInstance()

  const insideRef = ref<any>(null)
  const currentChangeValue = ref<any>(null)

  const getInstance = () => {
    const instance = unref(modalRef.value)
    if (!instance)
      console.error('useModal instance is undefined!')

    return instance
  }

  const register = (modalInstance) => {
    // isProdMode() &&
    //   tryOnUnmounted(() => {
    //     modalRef.value = null;
    //   });

    modalRef.value = modalInstance
    currentInstance?.emit('register', modalInstance)

    watch(
      () => props,
      () => {
        props && modalInstance.setProps(getDynamicProps(props))
      },
      {
        immediate: true,
        deep: true,
      },
    )
  }

  const methods = {
    setProps: (props) => {
      getInstance()?.setProps(props)
    },
    openModal: () => {
      getInstance()?.openModal()
    },
    closeModal: () => {
      getInstance()?.closeModal()
    },
    setSubLoading: (status) => {
      getInstance()?.setSubLoading(status)
    },
    setModalLoading: (status) => {
      getInstance()?.setModalLoading(status)
    },
    setSubDisabled: (status) => {
      getInstance()?.setSubDisabled(status)
    },
    getInsideRef: () => {
      return insideRef
    },
    getCurrentChangeValue: () => {
      return currentChangeValue
    },
  }

  return [register, methods]
}
