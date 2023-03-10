<template>
  <div class="rounded-bl rounded-br border-r border-b border-l border-gray-300 overflow-hidden">
    <div class="flex items-center justify-between">
      <div class="flex">
        <span v-for="item in []">
          {{ item }}
        </span>
      </div>

      <div class="flex items-center py-4 pr-4 text-xs">
        <span class="active-button mr-6">Codepen</span>
        <span class="active-button">查看代码</span>
      </div>
    </div>

    <div class="bg-gray-100 p-1">
      code !!
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  file: [],
  code: []
})
</script>

<style scoped>
</style>
