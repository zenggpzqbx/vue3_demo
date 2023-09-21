import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Bigger from './components/common.js'
let app = createApp(App)
app.use(ElementPlus).use(Bigger,{value:2}).mount('#app')
console.log('app:', app)
