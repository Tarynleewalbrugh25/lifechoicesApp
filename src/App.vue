<template>
  <NavBar/>
  <main class="container-fluid">
    <router-view/>
  </main>
  <Footer/>
</template>

<script>

import NavBar from './components/NavBar';


export default{
  components:{
    NavBar,


  }
}


</script>

<style src="@/assets/css/style.css">
</style>
