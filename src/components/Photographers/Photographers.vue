<template>
<section  style="background:white;">

<div class="container">
     <h1 class="">Our Photographers</h1>

<div id="mainContainer" class="container">
  <div class="panel panel-default" style="border: 0px !important;">
    <div class="panel-body">
      <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" v-for="item in photographers">
          <div class="panel panel-default my_panel">
            <div class="panel-body">
              <img :src="item.userPic" alt="" class="img-responsive center-block" />
            </div>
            <div class="panel-footer" style="background:white!important;">
              <h3>{{item.name}}
              </h3>
              <p>{{item.BriefStatement}}
             
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>


</section>



</template>

<script>
    import firebase from 'firebase'
   
    export default {
        data() {
            return {
                email: '',
                password: '',
                 photographers : []
            }
        } ,
      
        methods: {
potpgraphers: function() {
               var self=this;
                firebase.database().ref('users/').once('value', function(snapshot) {
                    console.log("snapshot ", snapshot);

                    snapshot.forEach(function(childSnapshot) {
                        var childKey = childSnapshot.key;
                        var childData = childSnapshot.val();
                        self.photographers.push(childData);
                        console.log(self.photographers);

                        // ...
                    });
                });
                
            }
        },
        computed: {
            
        },
        beforeMount(){
    this.potpgraphers()
 }
    }

</script>
<style scoped="">
.my_panel > .panel-body {
  padding: 0px;
}
.my_panel > .panel-body > img {
  width: 100%;
  height: 100%;
}
.my_panel > .panel-footer {
  text-align: center;
}
</style>