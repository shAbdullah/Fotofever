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
               <a href="/" class="navbar-brand">FOTOFEVER</a>
          </div>

          <!-- MENU LINKS -->
          <div class="collapse navbar-collapse">
               <ul class="nav navbar-nav navbar-right">
                     <li>
                    <router-link to="/" class="smoothScroll">Home</router-link>
                   
                    <li>
                    <router-link to="/about" class="smoothScroll">About</router-link>
                   </li>
                    <li>
                    <router-link to="/signup" class="smoothScroll">Join Us</router-link>
                    </li>  
               </ul>
          </div>

     </div>
</div>

</template>

