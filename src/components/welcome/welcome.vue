<template>
  <div>

<section id="home" class="parallax-section">
     <div class="overlay"></div>
     <div class="container">
          <div class="row">
  <div class="col-md-10 col-sm-12">
                    <div class="home-text">
                         <h1>Welcome to Photographers Gallery!</h1>
                       <p>Fotofever is your number one pick when in search of the best photographer ever
</p>
                         <ul class="section-btn">
                              <a href="#about" class="smoothScroll"><span data-hover="Discover More">Join Us Now!!</span></a>
                         </ul>
                    </div>
               </div>

          </div>
     </div>

     <!-- Video -->
     <video controls autoplay loop muted>
          <source src="videos/video.mp4" type="video/mp4">
          Your browser does not support the video tag.
     </video>
</section>

<app-photographers> </app-photographers>
  </div>
</template>

<script>
import Photographers from '../Photographers/Photographers.vue'

  export default {
    name: 'app',
    components: {
      'app-photographers': Photographers
    }
  }
</script>
