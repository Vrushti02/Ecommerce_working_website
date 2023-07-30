<template>
    <div class="hero">
        <div class="mask">
            <v-spacer></v-spacer>
            <v-row  class="mt-12">
                
                <v-col cols="4" offset="2" center>
                    <v-card class="pb-12" color="blue-grey lighten-5">
                       <v-card-title center>LOGIN</v-card-title>
                       <v-text-field label="email" class="pa-3" :rules="emailRules" v-model="login_email" required>

                       </v-text-field>
                       <v-text-field  class="pa-3" label="password" :rules="passwordRules" v-model="login_password" required>
                        
                    </v-text-field>
                    <v-card-actions class="pb-11 ">
      <v-btn 
      type="submit"
         @click="LogginUser ,enableButton"
        id="login"
        outlined
        rounded>
        submit
      </v-btn>
    </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card color="blue-grey lighten-5"><v-card-title>REGISTER</v-card-title>
                        <v-text-field  class="pa-3" label="email" :rules="emailRules" v-model="email" required>
                        
                    </v-text-field>
                    <v-text-field  class="pa-3" label="create password" :rules="passwordRules" v-model="password" required>
                        
                    </v-text-field>
                    <v-text-field  class="pa-3" label="re-enter password" :rules="passwordConfirmationRules" v-model="repwd">
                        
                    </v-text-field><v-card-actions>
      <v-btn
      type="submit"
      id="register"
          @click="submitUser,enableButton"
        outlined
        rounded>
        submit
      </v-btn>
    </v-card-actions></v-card>
                </v-col>
            </v-row>
        
        <v-row><v-col cols="10" offset-md="1">
          <div class="text-center">
    <v-btn
      rounded
      color="blue-grey lighten-5"
      class="ma-3"
    id="toSite"
    to="/home"
      
    >
     Go to site
    </v-btn>
  </div>
        </v-col></v-row>
      </div>
    </div>
    
</template>
<script>
// import axios from "axios"
import systemconfig from "@/services/syetemconfig"
export default{

    name :'login',
    data: () => ({
        email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v && v.length >= 8 || 'Password must be at least 8 characters',
        v => v && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(v) || 'Password must contain at least one lowercase letter, one uppercase letter, and one digit',
      ],
      passwordConfirmation: '',
      passwordConfirmationRules: [
        v => !!v || 'Please re-enter your password',
        v => v === this.password || 'Passwords do not match',
      ],
      login_email:null,
      login_password:null,
     
      
    }),
 
    methods:{
        async LogginUser(){
            let data={}; 
           data.email=this.login_email;
           data.password=this.login_password
          await systemconfig.post('/login/userlogin',data).then((res)=>{
               console.log("ressssss",res)
           })
        },
      async submitUser(){
            console.log("formdata",this.email,this.password);
            let data={};
           
            data.login_email=this.email;
            data.password=this.password
           await systemconfig.post('/login/add',data).then((res)=>{
                console.log("ressssss",res)
            })
        }
      },     


}
</script>
<style scoped>
.hero {
  background: url('../assets/loginpage.jpg');
  background-size: cover;
  height: auto;
  background-position: center center;
    display: flex;
    /* flex-direction: column; */
   
    min-height: 100vh;
  
    margin: 0;
   
    background-repeat: no-repeat;
    
}
.mask{
position:absolute;
width:100%;
height:100%;
background:rgba(0, 0, 0, 0.5);
align-items: center;
    justify-content: center;
    background-position: center center;
    /* display: flex; */
}
</style>