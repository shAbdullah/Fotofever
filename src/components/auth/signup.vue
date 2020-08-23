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
                    <form id="contact-form" @submit.prevent="onUpload">

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
                        <!--Phone-->
                        <div class="col-md-6 col-sm-6">
                            <input type="number" class="form-control" id="cf-subject" name="subject" placeholder="Phone Number" v-model="phone">
                        </div>

                        <!--YourImage-->
                        <div class="col-md-6 col-sm-6">


                            <!--
                <input type="file" value="Upload Your Image" class="btn btn-lg  form-control" accept="image/*" />
<input type="file" class="form-control custom-file-input"  accept="image/*" > 
                      -->


                            <label for="file-upload" class="form-control" style="height: 56px">
                                <i class="fas fa-upload"></i>


                                Upload your image
                            </label>
                            <input id="file-upload" type="file" @change="previewYourImage" accept="image/*" />
                        </div>
                        <!--Braif-->
                        <div class="col-md-12 col-sm-12">

                            <textarea class="form-control" rows="5" id="cf-message" name="cf-message" placeholder="Give us brief statement about you" v-model="BriefStatement"></textarea>
                        </div>
                        <!--images galary-->
                        <div class="col-md-12 col-sm-12">




                            <label for="file-upload1" class="form-control" style="height: 56px">
                                <i class="fas fa-upload"></i>


                                Upload your Art
                            </label>
                            <input id="file-upload1" type="file" @change="previewImages" accept="image/*" multiple />
                        </div>
                        <!--upload-->
                        <div class="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">

                            <div class="section-btn">
                                <button type="submit" class="form-control" id="cf-submit" name="submit" ><span data-hover="Submit">Submit</span></button>
                            </div>
                        </div>

                        <!--                     <div>
    <div >
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
      <button @click="onUpload">Upload</button>
    </div>
  </div-->
                    </form>
                </div>

            </div>
            
        </div>





    </section>
</template>

<script>
    import firebase from 'firebase'
    import axios from 'axios'
    export default {
        data() {
            return {
                name: '',
                email: '',
                specialty: '',
                country: '',
                phone: null,
                BriefStatement: '',
                UserImage: null,
                UserPictureUrl: null,

                UserArts: [],
                UserArtsUrl: [],

            }
        },
        methods: {

            previewYourImage(event) {
                this.UserPictureUrl = null;
                this.UserImage = event.target.files[0];
              
        


            },
            previewImages(event) {
                this.UserArtsUrl = [];
                   
 
           
              var key;
                for(key in event.target.files) {
                  
                  
                    if(typeof event.target.files[key] == 'object'){
                       this.UserArts.push(event.target.files[key]);
                  }}
                    
            },
            onUpload() {
                this.UserPictureUrl = null;
                this.UserArtsUrl = [];
                
      
                
                 const storageRef=firebase.storage().ref(`${this.UserImage.name}`).put(this.UserImage);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
             
     this.UserPictureUrl = url;
                            
  

                     
            

          
            function asyncAction(v) {
   return  new Promise((resolve, reject) => {
       var key;
                
     for (key in v.UserArts) {
                  
                    const storageRef1 = firebase.storage().ref(`${v.UserArts[key].name}`).put(v.UserArts[key]);
                    storageRef1.on(`state_changed`,snapshot=>{
      },error => {
                            console.log(error.message)
                        },
                        () => {

                            storageRef1.snapshot.ref.getDownloadURL().then((url) => {
                                v.UserArtsUrl.push(url);
                                console.log("there ",v.UserArtsUrl);
                            });
                        }
                    );
                }
       resolve();
  });
 
}
        
   /* function   asyncAction( ()=>{
  
       var key;
                
     for (key in v.UserArts) {
                   // console.log(this.UserArts[key]);
                    const storageRef1 = firebase.storage().ref(`${v.UserArts[key].name}`).put(v.UserArts[key]);
                    storageRef1.on(`state_changed`,snapshot=>{
      },error => {
                            console.log(error.message)
                        },
                        () => {

                            storageRef1.snapshot.ref.getDownloadURL().then((url) => {
                                v.UserArtsUrl.push(url);
                                console.log("there ",v.UserArtsUrl);
                            });
                        }
                    );
                }
            
        data( function(){
          const formData = {
                    email: this.email,
                    specialty: this.specialty,
                    name: this.name,
                    BriefStatement: this.BriefStatement,
                    country: this.country,
                    phone: this.phone,
                    userPic: this.UserPictureUrl,
               userArts:this.UserArts
                }
           
                                  firebase.database().ref(`users/${formData.name}`).set(formData); 
                    console.log(formData.userArts);
                                 
             
        });
  }*/
 

      
            
           
                asyncAction(this).then(()=>{
                    
           const formData = {
                    email: this.email,
                    specialty: this.specialty,
                    name: this.name,
                    BriefStatement: this.BriefStatement,
                    country: this.country,
                    phone: this.phone,
                    userPic: this.UserPictureUrl,
               userArts:this.UserArtsUrl
                }
           
                                  firebase.database().ref(`users/${formData.name}`).set(formData); 
                    console.log("hy",formData.userArts);
                                 
            },error => {
                            console.log(error.message)
                        });
            
                  
                
            
        
            
            
            
            
            
        });
      }
      );
              
                    
     

            }
        
        }
            
    }
                             
                              
    

</script>


<style scoped="">
    img.preview {
        width: 200px;
    }

    .custom-file-input::-webkit-file-upload-button {
        visibility: hidden;

    }

    input[type="file"] {
        display: none;

    }

    .custom-file-input::-webkit-file-upload-text {
        visibility: hidden;


    }

    .custom-file-input::before {
        visibility: visible;
        content: 'Upload Your Image';
        -webkit-user-select: none;
        cursor: pointer;

    }

</style>
