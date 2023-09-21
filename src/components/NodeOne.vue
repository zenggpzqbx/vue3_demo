<script setup>
import {getCurrentInstance, inject, ref} from "vue";
import NodeOneChildren from "./NodeOneChildren.vue";
let fields = [
  {
    fieldName: 'name', id: 0, fieldTitle: '姓名'
  },
  {
    fieldName: 'age', id: 0, fieldTitle: '年龄'
  },
  {
    fieldName: 'sex', id: 0, fieldTitle: '性别'
  },
]
let data = [
    {name:'zgp', age:28, sex:'男'},
    {name:'zgf', age:30, sex:'男'},
    {name:'鲁智深', age:128, sex:'男'},
    {name:'孙二娘', age:108, sex:'女'},
]

let a = inject('message')
let oneChildren = ref(null)
console.log(oneChildren)
function updateValue(){
  oneChildren.value.zgp = 1000
}
</script>

<template>
  <div class="parentContainer">
    <p>我是第一个子组件</p>
    <p>{{$bigger(6)}}</p>
    <p>{{a}}</p>
    <button @click="updateValue">更新值</button>
    <NodeOneChildren ref="oneChildren"></NodeOneChildren>
    <pag-table :fields="fields" :table-data="data"></pag-table>
  </div>

</template>

<style scoped>
.parentContainer{
  display: flex;
  flex-direction: column;
}
</style>