<template>
    <v-container fluid>
      <div>
        <v-header>
          
          <v-row class="header-top mx-12">
            <v-col cols="8">
              <h4>FREE RETURNS. STANDARD SHIPPING ORDERS....</h4>
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col>
                  <v-icon>
                    mdi-facebook
                 </v-icon>
                </v-col>
                <v-col><v-icon  color="blue darken-2" >
                   mdi-twitter
                 </v-icon></v-col>
                <v-col><v-icon  color="blue darken-2" >
                   mdi-instagram
                 </v-icon>
                </v-col>

              </v-row>
            </v-col>
        
           </v-row>
           <v-divider class="mt-3"></v-divider>
           <v-row class="ma-3">
            <v-col cols="2" offset-md="1" class="
            pr-0">
              <v-img
             max-height="100"
             max-width="150"
             :src="require('@/assets/porto.png')">
            </v-img>
            </v-col>
            <v-col cols="6"> <v-combobox solo class="rounded-l-xl rounded-l-lg" hide-details append-icon=""  filled label="Search"></v-combobox>
            </v-col>
            <v-col cols="1" class="text-body-1">
              <v-icon large >mdi-phone</v-icon>call us now  +1-234567890</v-col>
            <v-col cols="2" class="text-body-1">
             <v-btn to="/login" plain><v-icon large class="mr-9" :to="'/login'">  mdi-account </v-icon></v-btn>
              <v-icon large class="mr-9" >  mdi-heart </v-icon>
              <v-btn to="/cart" plain><v-icon large to="/cart" >  mdi-cart </v-icon></v-btn>
             </v-col>
          </v-row>
          <v-divider inset></v-divider>
          <v-row class="fixed-row">
           
            <v-col cols="8" offset-md="1" class="mt-3">
              <v-tabs>
    <v-tab to="/home"> Home</v-tab>
    <v-tab to="/category">category</v-tab>
    <v-tab to="/detail">product </v-tab>
    <v-tab to="/form">inputs </v-tab>
    <v-tab>blog </v-tab>
    <v-tab to="/login">account</v-tab>
    <v-tab to="/contact">Contact us</v-tab>
  </v-tabs>
            </v-col>
            <v-col cols="1"  class="mt-4 text-body-1">
             special offer
            </v-col>
            <v-col cols="1"  class="mt-4 text-body-1">buy offer</v-col>
          </v-row>
      
        </v-header>
      </div>
    </v-container>
  </template>
  <script>
  export default {
    name: "Header",
    data(){
      return {

        icons:['mdi-message-text']

      }
    }
  }; 
  </script>
  <style></style>