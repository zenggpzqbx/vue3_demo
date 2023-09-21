<script setup>
import {ref} from "vue";

const props = defineProps({
  tableData: {
    type: Array,
    default: [],
    required: true
  },
  fields: {
    type: Array,
    default: [],
    required: true
  }
})
let pag = ref({
  current: 0,
  size: 0,
  total: 0,
})
function sizeChange(size){

}
function currentChange(current){

}
</script>

<template>
  <el-table :data="tableData">
    <el-table-column v-for="field in fields" :prop="field.fieldName" :key="field.id" :label="field.fieldTitle">
    </el-table-column>
    <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange" :current-page.sync="pag.current" :page-sizes="[20, 40, 80, 100]"
        :page-size="pag.size"
        layout="total, sizes, prev, pager, next, jumper" :total="pag.total" :pager-count="7">
    </el-pagination>
  </el-table>
</template>

<style scoped>

</style>