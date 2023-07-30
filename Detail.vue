<template>
    <v-main>
        <Header></Header>
        <v-app class="mx-16 mb-16">
        
            <v-row>
                <v-col cols="5" offset="1">
                   <div style="height: 850,width:800;"> <v-img :src="imagePrefix+productData.image" height="700" width="800" ></v-img></div>
                    <v-row class="my-5">
                        <v-col cols="3">
                            <v-img :src="imagePrefix+productData.image"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="imagePrefix+productData.image"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="imagePrefix+productData.image"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="imagePrefix+productData.image"></v-img>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="6">

                    <v-card flat>
                        <v-card-title>
                            <h1>{{productData.productName}}</h1>
                            <v-spacer></v-spacer>
                            <v-row><v-col cols="1">
                                <v-divider></v-divider>
                            </v-col></v-row>
                        </v-card-title>
                        <v-card-subtitle class="mt-5">
                      
                            <v-spacer> </v-spacer>
                           <h1 style="display: inline-flex;"><div class="text-decoration-line-through mr-5">{{productData.mrp}} </div>{{productData.price}}
</h1>
                            <v-spacer> </v-spacer>
                            <v-spacer> </v-spacer>
                            <h3>{{productData.description}}
                             <v-spacer> </v-spacer>
                            <pre> 
SKU: {{productData.productSKU}}</pre></h3>
                        </v-card-subtitle>
                        <v-divider></v-divider>
                        <v-row class="my-6"><v-col ><v-btn depressed color="black" class="white--text mx-5" tile x-large> ADD TO CART </v-btn>
                        <v-btn depressed x-large> VIEW CART </v-btn></v-col></v-row>
                        
                        <v-divider></v-divider>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="11" offset="1"><v-tabs v-model="tabs">
    <v-tab>Description</v-tab>
    <v-tab>size guide</v-tab>
    <v-tab>Additional information</v-tab>
    <v-tab>review</v-tab>
    
  </v-tabs><hr/></v-col>
            </v-row>
            <v-row calss="mb-12">
                <v-col cols="10" offset="1">
                    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <div style="font-size: larger;">
           {{ productData.description }}
        </div>
        </v-card>
      </v-tab-item>
      <v-tab-item>
       
         <v-img :src="require('@/assets/chart.png')"></v-img>
        
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-simple-table>
            <tbody><tr v-for="item in items" key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td></tr></tbody>
          </v-simple-table>
            
        </v-card>
      </v-tab-item><v-tab-item>
        <v-card flat>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </v-card-text>
        </v-card>
      </v-tab-item></v-tabs-items>
            </v-col></v-row>
            <v-spacer></v-spacer>
            <v-divider class="my-12"></v-divider>
            <v-row>
                <v-col>
                    <v-card class="grey lighten-4 pa-12 mx-12">
                        <v-card-title>ADD A REVIEW</v-card-title>
                        <div class="ma-3"><h3>your rating</h3>
                   <v-rating
                     v-model="rating"
                     :clearable="false"
                     :hover="false"
                     :dense="true"
                     :size="24"
                     :colors="{ selected: 'amber darken-2', unselected: 'grey lighten-2' }"
                   ></v-rating>
                   
                 </div>
                 <h3>your review</h3>
                 <v-textarea
                         name="input-7-1"
                         label="Default style"
                         background-color="white"
                         hint="Hint text"
                         outlined
                       ></v-textarea>
                       <h3>Name</h3>
                       <v-text-field background-color="white" label="name" outlined></v-text-field>
                       <h3>Email</h3>
                       <v-text-field background-color="white" label="email" outlined></v-text-field>
               </v-card>
                </v-col>
            </v-row>

            <v-row><v-col cols="3"><v-card-title>Featured Products</v-card-title>
    <v-card class="horizontal-card  ma-2 pa-3" flat>
         <v-row><v-col>     
    <v-row no-gutters>
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-6">
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-col></v-row>
  </v-card>
    </v-col>
              <v-col cols="3"><v-card-title>Top Products</v-card-title>
    <v-card class="horizontal-card  ma-2 pa-3" flat>
         <v-row><v-col>     
    <v-row no-gutters>
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-6">
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-col></v-row>
  </v-card>
    </v-col>
              <v-col cols="3"><v-card-title>Related Products</v-card-title>
    <v-card class="horizontal-card  ma-2 pa-3" flat>
         <v-row><v-col>     
    <v-row no-gutters>
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-6">
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-col></v-row>
  </v-card>
    </v-col>
              <v-col cols="3"><v-card-title>Latest Products</v-card-title>
    <v-card class="horizontal-card  ma-2 pa-3" flat>
         <v-row><v-col>     
    <v-row no-gutters>
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-6">
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-col></v-row>
  </v-card>
    </v-col>
            </v-row>
          <!-- <v-row><v-col>  
        <v-row class="mx-16">
            <v-col cols="3"><v-card class="horizontal-card  ma-2 pa-3" flat>
                <v-card-title>TOP RELATED PRODUCT</v-card-title>
         <v-row no-gutters>
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
    
    <v-row no-gutters class="mt-6">
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card></v-col>
            <v-col cols="3"><v-card class="horizontal-card  ma-2 pa-3" flat>
                <v-card-title>TOP FEATURED PRODUCT</v-card-title>
    <v-row no-gutters>
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-6">
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card></v-col>
            <v-col cols="3"><v-card class="horizontal-card ma-2 pa-3" flat>
                <v-card-title>BEST SELLING </v-card-title>
    <v-row no-gutters>
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-6">
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card></v-col>
            <v-col cols="3"><v-card class="horizontal-card  ma-2 pa-3" flat>
                <v-card-title>LATEST PRODUCT</v-card-title>
    <v-row no-gutters>
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-6">
      <v-col cols="4">
        <v-img src="https://images.pexels.com/photos/10574052/pexels-photo-10574052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FNDY Handwash</v-card-title>
        <v-card-text>
        <b> Rs 150</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card></v-col></v-row>

  
      </v-col></v-row> -->
        </v-app>
        <Footer></Footer> 
    </v-main>
</template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
export default {
  name: "Detail",
 components:{Header,Footer},
  data: () => ({
    tabs:'',
    productData:{},
    imagePrefix:'http://localhost:3000/',
    items: [
          {
            name: 'Weight',
            value: '2.1kg',
          },
          {
            name: 'Dimension',
            value: '12*12*12',
          },
          {
            name: 'Color',
            value: 'black',
          },
          {
            name: 'Size',
            value: 'mid',
          },
         ],
         rating: 0

  }),
  mounted(){
    console.log("mountedddddddddddddddd",this.$route.query);
    this.productData=this.$route.query;
    console.log("dataaaaaaaaaaaaa", this.productData);
  }
}
 
</script>
<style>
.horizontal-card {
  display: flex;
  flex-direction: row;}
  </style>