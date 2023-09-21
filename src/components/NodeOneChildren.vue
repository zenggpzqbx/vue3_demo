<script setup>
import {ref} from "vue";

let zgp = ref(0)
defineExpose({zgp})
</script>

<template>
  <p>我是NodeOneChildren组件</p>
  <p>{{zgp}}</p>
</template>

<style scoped>

</style>