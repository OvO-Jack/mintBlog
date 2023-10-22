<template>
  <div>
    {{ data }}
  </div>
</template>
<script setup lang="ts">
import {ref,reactive} from "vue"
defineProps(["data"]);
defineEmits(["updateData"]);


</script>
<style lang="scss" scoped>




</style>