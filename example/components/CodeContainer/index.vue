<template>
  <div class="rounded-bl rounded-br border-r border-b border-l border-gray-300 overflow-hidden">
    <div class="flex items-center justify-between">
      <div class="flex">
        <span v-for="item in props.value" class="px-4 border-r border-gray-300 active-button">
          {{ item.fileName }}
        </span>
      </div>

      <div class="flex items-center py-4 pr-4 text-xs">
        <span class="active-button mr-6">Codepen</span>
        <span class="active-button" @click="showCode = !showCode">查看代码</span>
      </div>
    </div>

    <pre class="bg-gray-100 p-1" :class="{
      'h-0': !showCode,
      'h-auto': showCode
    }"> {{ props.value[valueIndex].codeContent }} </pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  value: []
})

const valueIndex = ref(0)

const showCode = ref(false)
</script>

<style scoped>
</style>
