<script setup>
import CodeContainer from '../CodeContainer/index.vue'

import { code } from './code'

import 'element-plus/es/components/button/style/css'
import { ElButton } from 'element-plus'
import { useModal } from 'el-modal-hook'

const [register, { openModal, closeModal, setSubDisabled, setSubLoading }] = useModal({
  title: '基础能力',
})

const handleOk = () => {
  setTimeout(() => {
    setSubLoading(false)
  }, 1000)
}
</script>

<template>
  <div id="base" class="">
    <div class="text-2xl font-bold text-gray-500 my-6">基础用法</div>
    <div class="my-4">
      弹框的关闭、开启。逻辑交互下，按钮的状态切换，支持加载中，或禁用
    </div>

    <div class="rounded-tl rounded-tr border border-gray-300 p-4 px-6">
      <el-button type="primary" size="large" @click="openModal">
        打开
      </el-button>
    </div>
    
    <CodeContainer :value="[
      {
        fileName: 'index.vue',
        codeContent: code
      }
    ]" />

    <basicModal @register="register" @on-ok="handleOk">
      <div class="button-group">
        <el-button @click="closeModal">
          close modal
        </el-button>

        <el-button @click="setSubDisabled(true)">
          disabled submit button
        </el-button>
        <el-button @click="setSubDisabled(false)">
          active submit button
        </el-button>

        <el-button @click="setSubLoading(true)">
          loading submit button
        </el-button>
        <el-button @click="setSubLoading(false)">
          close loading
        </el-button>
      </div>
    </basicModal>
  </div>
</template>

<style scoped>
.button-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style> 
