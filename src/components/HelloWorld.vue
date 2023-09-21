<script setup>
import {provide, ref, watch} from 'vue'
import NodeOne from "./NodeOne.vue";
import NodeSecond from "./NodeSecond.vue";
defineProps({
  msg: String,
})

let mes = ref('zgp')
let show = ref(true)
watch(show, (newValue) => {
  console.log('watch监听到的值：', newValue)
})
function togleValue(){
  show.value = !show.value
  if (show.value){
    console.log('我目前的值是true：', show.value)
  }else{
    console.log('我目前的值是false:', show.value)
  }
}
</script>

<template>
  <button @click="togleValue">切换</button>
  <div class="container">
    <NodeOne></NodeOne>
    <NodeSecond></NodeSecond>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.container{
  display: flex;
}
</style>
