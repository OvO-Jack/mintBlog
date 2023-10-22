<script setup lang="ts">
import '@/assets/js/custom.js'
import { onMounted } from 'vue'
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
:deep(.spacer) {
  height: 20px;
}
</style>
