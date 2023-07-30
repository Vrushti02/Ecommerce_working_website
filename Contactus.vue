<template>
    <v-main>
        <Header></Header>
       
        <v-row>
            <v-col cols="10" offset-md="1" >
                 <v-breadcrumbs :items="breadcrumbsItems"></v-breadcrumbs></v-col>
        </v-row>
              <v-row>
           <v-col cols="10" offset-md="1" >
                    <h1>Contact Info</h1>
                    <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col  cols="10" offset-md="1">
                    <v-img :src="require('@/assets/c1.png')"></v-img>
                   
                </v-col>
              </v-row>
              <v-divider class="my-6"></v-divider>
              <v-row>
                <v-col  cols="5" offset-md="1">
                    <v-card elevation="0">
                        <v-card-title>
                          <h1>Send us Message</h1>
                        </v-card-title>
                        <v-text-field label="name" v-model="name" outlined></v-text-field>
                        <v-text-field label="E-mail" v-model="name" outlined></v-text-field>
                        <v-textarea label="Address" v-model="name" outlined></v-textarea>
                    </v-card>
                </v-col> <v-col  cols="5">
                    <v-card elevation="0">
                        <v-card-title class="mb-3">
                           <h1>Frequently Asked Questions</h1>
                        </v-card-title>
                        <v-expansion-panels tile elevation="0">
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i" tile
      
    >
      <v-expansion-panel-header class="mt-3">
        question{{ item }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
                    </v-card>
                </v-col></v-row>
            
        <Footer></Footer>
    </v-main>
</template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"

export default {
  name: "Home",
 components:{Header,Footer},
 
 name: "Contactus",

data: () => ({
    breadcrumbsItems: [
        { text: 'Home', disabled: false, href: '/' },
        { text: 'Contact Us', disabled: true },
      ]
})
}
</script>
<style>
</style>