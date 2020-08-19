<template>
    <section id="contact" class="parallax-section">
        <div class="container">
            <div class="row">

                <div class="col-md-offset-3 col-md-6 col-sm-12">
                    <div class="section-title">
                        <h1>Join us and show your art to the world</h1>
                    </div>
                </div>

                <div class="clearfix"></div>

                <div class="col-md-offset-2 col-md-8 col-sm-12">
                    <!-- CONTACT FORM HERE -->
                    <form id="contact-form" @submit.prevent="onSubmit">

                        <!-- IF MAIL SENT SUCCESSFULLY -->
                        <h6 class="text-success">Your message has been sent successfully. </h6>

                        <!-- IF MAIL SENDING UNSUCCESSFULL -->
                        <h6 class="text-danger">E-mail must be valid and message must be longer than 1 character.</h6>
                        <!--Name-->
                        <div class="col-md-6 col-sm-6">
                            <input type="text" class="form-control" id="cf-name" name="cf-name" placeholder="Name" v-model="name">
                        </div>

                        <!--Email-->
                        <div class="col-md-6 col-sm-6">
                            <input type="email" class="form-control" id="cf-email" name="cf-email" placeholder="Email Address" v-model="email">
                        </div>
                        <!--Spesialty-->
                        <div class="col-md-6 col-sm-6">
                            <input type="text" class="form-control" id="cf-spesilty" placeholder="Your specialty" v-model="specialty">
                        </div>
                        <!--country-->
                        <div class="col-md-6 col-sm-6">
                            <input type="text" class="form-control" id="cf-country" placeholder="Country" v-model="country">
                        </div>
                        <!--Braif-->
                        <div class="col-md-12 col-sm-12">
                            <input type="text" class="form-control" id="cf-subject" name="subject" placeholder="Subject">
                            <textarea class="form-control" rows="5" id="cf-message" name="cf-message" placeholder="Give us brief statement about you" v-model="BriefStatement"></textarea>
                        </div>
                        <!--upload-->
                        <div class="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                            <div class="section-btn">
                                <button type="submit" class="form-control" id="cf-submit" name="submit"><span data-hover="Send Message">Submit</span></button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>




        <!--  <form  @submit.prevent="onSubmit">
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" v-model="email" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Specialty</label>
    <select class="form-control" id="specialty" v-model="specialty">
      <option>Landscape</option>
      <option>Portrait</option>
      <option>Wildlife</option>
      <option>Sports</option>
      <option>Architectural</option>
    </select>
  </div>
  <div class="form-group">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="usa">Saudi Arabia</option>
            <option value="india">USA</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
  <div class="form-group">
    <label for="BrieStatement">Give us brief statement about you</label>
    <textarea class="form-control" id="BriefStatement" rows="3" v-model="BriefStatement" ></textarea>
  </div>
  
  <div class="form-group">
    <label for="images">Upload best images you have!</label>
    <input type="file" class="form-control-file" id="image">
  </div>
     <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
</form>
    -->
        <!--<div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="age">Your profosional</label>
          <input
                  type="text"
                  id="age"
                  v-model.number="age">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword">
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
     
        <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>-->


    </section>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                name: '',
                email: '',
                specialty: '',
                country: '',
                BriefStatement: '',

            }
        },
        methods: {


            onSubmit() {
                const formData = {
                    email: this.email,
                    specialty: this.specialty,
                    name: this.name,
                    BriefStatement: this.BriefStatement,
                    country: this.country,
                }
                console.log(formData)
                axios.post('https://photographs-8aa73.firebaseio.com/user.json', formData)
                    .then(res => console.log(res))
                    .catch(error => console.log(error))
                /*  this.$store.dispatch('sginUp',formData)*/
            }
        }
    }

</script>
