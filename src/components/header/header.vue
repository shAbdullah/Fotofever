<template>
  <div class="navbar custom-navbar navbar-fixed-top" role="navigation">
     <div class="container">

          <!-- NAVBAR HEADER -->
          <div class="navbar-header">
               <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
               </button>
               <!-- lOGO -->
              
                <router-link to="/" class="navbar-brand">Fotover</router-link>
          </div>

          <!-- MENU LINKS -->
          <div class="collapse navbar-collapse">
               <ul class="nav navbar-nav navbar-right">
                    <li>
                    <router-link to="/" class="smoothScroll">Home</router-link>
                   
                    <li>
                    <router-link to="/" class="smoothScroll">About</router-link>
                   </li>
                    <li>
                    <router-link to="/signup" class="smoothScroll">Join Us</router-link>
                    </li>  
                   
               </ul>
          </div>

     </div>
</div>


</template>

