<template>
  <section id="team" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-offset-2 col-md-8 col-sm-12">
                    <!-- SECTION TITLE -->
                    <div class="section-title">
                         <h1>Our Profesional </h1>
                    </div>
               </div>

               <div class="clearfix"></div>

               <div id="owl-team" class="owl-carousel">
                    <div class="col-md-4 col-sm-4 item">
                         <div class="team-item">
                              <img src="../../../images/team-image1.jpg" class="img-responsive" alt="">
                              <div class="team-overlay">
                                   <ul class="social-icon">
                                        <li><a href="#" class="fa fa-twitter"></a></li>
                                        <li><a href="#" class="fa fa-linkedin"></a></li>
                                   </ul>
                              </div>
                         </div>
                         <p>Catherine Jann</p>
                         <h3>Head Designer</h3>
                    </div>

                    <div class="col-md-4 col-sm-4 item">
                         <div class="team-item">
                              <img src="../../../images/team-image2.jpg" class="img-responsive" alt="">
                              <div class="team-overlay">
                                   <ul class="social-icon">
                                        <li><a href="#" class="fa fa-instagram"></a></li>
                                        <li><a href="#" class="fa fa-github"></a></li>
                                        <li><a href="#" class="fa fa-facebook"></a></li>
                                   </ul>
                              </div>
                         </div>
                         <p>Luke Wara</p>
                         <h3>Speciality Focus</h3>
                    </div>

                    <div class="col-md-4 col-sm-4 item">
                         <div class="team-item">
                              <img src="../../../images/team-image3.jpg" class="img-responsive" alt="">
                              <div class="team-overlay">
                                   <ul class="social-icon">
                                        <li><a href="#" class="fa fa-instagram"></a></li>
                                        <li><a href="#" class="fa fa-dribbble"></a></li>
                                        <li><a href="#" class="fa fa-behance"></a></li>
                                   </ul>
                              </div>
                         </div>
                         <p>Mono Mana</p>
                         <h3>Art director</h3>
                    </div>

                    <div class="col-md-4 col-sm-4 item">
                         <div class="team-item">
                              <img src="../../../images/team-image4.jpg" class="img-responsive" alt="">
                              <div class="team-overlay">
                                   <ul class="social-icon">
                                        <li><a href="#" class="fa fa-twitter"></a></li>
                                        <li><a href="#" class="fa fa-facebook"></a></li>
                                        <li><a href="#" class="fa fa-envelope-o"></a></li>
                                   </ul>
                              </div>
                         </div>
                         <p>Phway Phyu</p>
                         <h3>Designer in Chief</h3>
                    </div>

                    <div class="col-md-4 col-sm-4 item">
                         <div class="team-item">
                              <img src="../../../images/team-image1.jpg" class="img-responsive" alt="">
                              <div class="team-overlay">
                                   <ul class="social-icon">
                                        <li><a href="#" class="fa fa-twitter"></a></li>
                                        <li><a href="#" class="fa fa-linkedin"></a></li>
                                   </ul>
                              </div>
                         </div>
                         <p>Cherry Lynn</p>
                         <h3>Marketing Manager</h3>
                    </div>
               </div>

          </div>
     </div>
</section>
</template>

<script>
     import firebase from '../../firebase-auth';
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }   
        console.log(formData)
           this.$store.dispatch('login',formData)
     
           
      }
    }
  }
</script>

<style scoped>
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>