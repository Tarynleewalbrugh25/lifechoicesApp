<template>
    <nav class="navbar navbar-expand-lg  sticky-top">
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <RouterLink to="/" class="nav-link active"><i class="bi bi-houses"></i>
             Home
           </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./about"><i class="bi bi-info-circle"></i>
             About
            </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./products"><i class="bi bi-bag"></i>
             Products
            </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./product"><i class="bi bi-basket2"></i>
             Product
            </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./admin"><i class="bi bi-pc-display"></i>
             Admin
            </RouterLink>
         </li>
         <li class="nav-item">
            <RouterLink class="nav-link" to="./contact"><i class="bi bi-person-lines-fill"></i>
             Contact
            </RouterLink>
         </li>
       </ul>
     </div>
   </div>
 </nav>
 </template>
 
 <script>
     export default {
        
     }
 </script>
 
 <style scoped>
 .navbar{
  background-color: #006d77;
 }
 .navbar a {
  color: aliceblue;
 }
 </style>