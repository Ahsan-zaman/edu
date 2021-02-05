<template>
  <div class="min-h-screen">
    <nav-bar></nav-bar>
    <router-view class="max-w-screen-xl md:mx-auto px-2 md:px-0"></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/App/Navbar'
import Footer from './components/App/Footer'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  mounted(){
	//   console.log('object')
  }
}
</script>
<style>
</style>