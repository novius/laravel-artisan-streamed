import { createApp } from 'vue'
import StreamReader from './components/StreamReader.vue'
import './style.css'

createApp({})
    .component('StreamReader', StreamReader)
    .mount('#app');
