import PagTable from "./PagTable.vue";
export default {
    install: (app, options) => {
        app.config.globalProperties.$bigger = (number) => {
            return number * options.value
        }
        app.provide('message', '我是provide提供的')
        app.component('PagTable', PagTable)
    }
}