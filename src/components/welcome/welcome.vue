<template>
  <div>
<section id="home" class="parallax-section">
     <div class="overlay"></div>
     <div class="container">
          <div class="row">

               <div class="col-md-10 col-sm-12">
                    <div class="home-text">
                         <h1>Your Website has a video background!</h1>
                       
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
<app-photographers />
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
