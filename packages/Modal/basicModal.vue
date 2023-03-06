<template>
  <el-dialog id="basic-modal" v-model="isModal">
    <template #header>
      <div id="basic-modal-bar" class="w-full cursor-move">
        {{ getBindValue.title }}
      </div>
    </template>

    <template #default>
      <slot name="default" />
    </template>

    <template v-if="!$slots.action" #action>
      <NSpace>
        <el-button @click="closeModal">
          取消
        </el-button>
        <el-button
          type="primary"
          :disabled="subSubDisabled"
          :loading="subLoading"
          @click="handleSubmit"
        >
          {{ subBtuText }}
        </el-button>
      </NSpace>
    </template>
    <template v-else #action>
      <slot name="action" />
    </template>
  </el-dialog>
</template>

<script setup>
import 'element-plus/es/components/dialog/style/css'
import { ElDialog } from 'element-plus'
import {
  computed,
  defineEmits,
  defineProps,
  getCurrentInstance,
  nextTick,
  ref,
  unref,
  useAttrs,
} from 'vue'
import { basicProps } from './props'
import { deepMerge } from './utils'

const props = defineProps({ ...basicProps })
const emit = defineEmits(['on-close', 'on-ok', 'register'])
const attrs = useAttrs()
const propsRef = ref(null)

const isModal = ref(false)
const subLoading = ref(false)
const modalLoading = ref(false)
const subSubDisabled = ref(false)

const getProps = computed(() => {
  return { ...props, ...(unref(propsRef)) }
})

const subBtuText = computed(() => {
  const { subBtuText } = propsRef.value
  return subBtuText || props.subBtuText
})

async function setProps(modalProps) {
  propsRef.value = deepMerge(unref(propsRef) || {}, modalProps)
}

const getBindValue = computed(() => {
  return {
    ...attrs,
    ...unref(getProps),
    ...unref(propsRef),
  }
})

function setSubLoading(status) {
  subLoading.value = status
}

function setSubDisabled(status) {
  subSubDisabled.value = status
}

function setModalLoading(status) {
  modalLoading.value = status
}

function openModal() {
  return new Promise((resolve) => {
    isModal.value = true
    nextTick(() => {
      resolve()
    })
  })
}

function closeModal() {
  isModal.value = false
  subLoading.value = false
  emit('on-close')
}

function onCloseModal() {
  isModal.value = false
  emit('on-close')
}

function handleSubmit() {
  subLoading.value = true
  emit('on-ok')
}

const modalMethods = {
  setProps,
  openModal,
  closeModal,
  setSubLoading,
  setModalLoading,
  setSubDisabled,
}

const instance = getCurrentInstance()
if (instance)
  emit('register', modalMethods)
</script>
