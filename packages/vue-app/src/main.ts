import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { defineCustomElements } from 'ui-kit/loader';

defineCustomElements().then(() => {
  createApp(App).mount('#app');
});


