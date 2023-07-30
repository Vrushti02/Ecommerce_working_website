<template>
    <v-main>
        <Header></Header>
        <v-row><v-col>  <v-img :src="require('@/assets/cat1.png')"></v-img></v-col></v-row>
        <v-row>
            <v-col cols="2" offset-md="1">
                <v-card>
                    <v-card-title><h2>Categories</h2></v-card-title>
                    <v-expansion-panels accordion flat>
      <v-expansion-panel
      v-for="(item,i) in items"
        :key="i">
        <v-expansion-panel-header>{{item}}</v-expansion-panel-header>
        <v-expansion-panel-content  v-for="(item,i) in accessories"
        :key="i">
          {{ item }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider></v-divider>
    <v-card-title>Price</v-card-title>
    <v-range-slider hint="Price-$0 to $10000" max="10000" min="0" thumb-label>    </v-range-slider>
    <v-divider></v-divider>
    <v-card-title>Featured Products</v-card-title>
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
    
                </v-card>
            </v-col>
            <v-col cols="8" >
                <v-container>
        <v-row>
          <v-col
            v-for="item in productList"
            :key="item.id"
            cols="4"
          >
            <v-card height="500"><v-row><v-col cols="10" offset-md="1"><v-img style="height: 300px;" :src="imagePrefix+item.image"></v-img><v-divider class="mt-6"></v-divider></v-col></v-row>
              <v-row><v-col><h2 class="pl-16"> {{ item.productName }}</h2>
              <pre class="pl-16">price:{{ item.price }}
              </pre></v-col></v-row></v-card>
          </v-col>
        </v-row>
      </v-container>
            </v-col>
        </v-row>
       <Footer></Footer>
    </v-main>
</template>
<script>

import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
import catalog from "@/services/syetemconfig"
import _ from 'lodash'
export default {
  name: "Category",
 components:{Header,Footer},
 
 name: "Contactus",

data: () => ({
    items:['Accessories','Dress','Electronices','Fashion','Music'],
    accessories:['cap','watches'],
    productList:[],
        imagePrefix:'http://localhost:3000/',
        latestProducts:[],
 }),
 async mounted() {
    // Accessing image references
    console.log(this.$refs.images); // Array of image references
 await  this.fetchProduct();
  },
  methods:{
   async fetchProduct(){
    let condition={
      // where:{
        // limit:8
        
      // }
    }
    const queryString = `?data=${encodeURIComponent(JSON.stringify(condition))}`;
  await  catalog.get(`/product/getProducts${queryString}`).then((res)=>{
    console.log("rrrrrrrressss",res);
    if(res && res.data){
      this.productList=res.data;
      // this.latestProducts=_.orderBy(this.productList,['id'],['desc']);
      // console.log("latestProducts",this.latestProducts)
      // this.latestProducts.length=4;
      
      // const criteria = [11,13,15,19,14,10];
      // this.sixProductList=_.filter(this.productList, (value) => _.includes(criteria, value.id));
      // console.log("sixProductList",this.sixProductList)
    }
  }).catch((err)=>{
    console.log("errrr",err);
  })

}
  }
}
</script>   
<style>
.horizontal-card {
  display: flex;
  flex-direction: row;}
  </style>