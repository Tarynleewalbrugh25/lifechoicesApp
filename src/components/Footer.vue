<template>
    <footer class="footer container-fluid fixed">
      <div class="row">
        <p>Taryn-lee Walbrugh &copy; {{ currYear }}</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style>
.footer {
  background-color: #006D77;
  color: aliceblue;
}
 
  </style>