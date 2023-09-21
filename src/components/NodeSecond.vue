<script setup>
import {inject} from "vue";
let fields = [
  {
    fieldName: 'city', id: 0, fieldTitle: '省'
  },
  {
    fieldName: 'shi', id: 1, fieldTitle: '市'
  },
  {
    fieldName: 'xian', id: 2, fieldTitle: '县'
  },
]
let data = [
  {city:'河北省', shi:'石家庄', xian:'a'},
  {city:'河北省', shi:'哈尔滨', xian:'b'},
  {city:'河南省', shi:'南阳市', xian:'c'},
  {city:'河南省', shi:'平顶山市', xian:'d'},
]
let b = inject('message')
</script>

<template>
  <div class="parentContainer">
    <p>我是第二个子组件</p>
    <p>{{$bigger(45)}}</p>
    <p>{{b}}</p>
    <pag-table :fields="fields" :table-data="data"></pag-table>
  </div>

</template>

<style scoped>
.parentContainer{
  display: flex;
  flex-direction: column;
}
</style>