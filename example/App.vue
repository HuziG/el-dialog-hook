<template>
	<basicModal @register="register" @on-ok="handleOk"></basicModal>

	<el-button @click="openModal">打开弹框</el-button>
</template>

<script setup>
import 'element-plus/es/components/button/style/css'
import { ElButton } from 'element-plus'

import { useModal } from 'el-modal-hook'

const [register, { openModal, closeModal, setSubDisabled, setSubLoading }] = useModal({
  title: 'Example',
})
</script>


<style></style>
