<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import Footer from './components/Footer/Footer.vue'
  export default {
    name: 'app',
    components: {
      'app-header': Header,
        'app-footer':Footer
    }
  }
</script>

