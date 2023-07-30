<template>
  <v-container fluid>
    <Header></Header>
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      ref="images"
    ></v-carousel-item>
  </v-carousel>
  <V-ROW >
    <v-row  class="mt-5">
      <v-col cols="3" offset-md="2">
        <v-card class="horizontal-card" flat>
    <v-row no-gutters>
      <v-col cols="2">
        <v-img :src="require('@/assets/truck.png')" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>FREE SHIPPING AND RETURN</v-card-title>
        <v-card-text>
        <b> for all orders above $99</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
      </v-col><v-divider vertical></v-divider>
      <v-col cols="3">
        <v-card class="horizontal-card" flat>
    <v-row no-gutters>
      <v-col cols="2">
        <v-img :src="require('@/assets/money.png')" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>MONEY BACK GUARANTEE</v-card-title>
        <v-card-text>
        <b>100%money back gaurantee</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
      </v-col><v-divider vertical></v-divider>
      <v-col cols="3">
        <v-card class="horizontal-card" flat>
    <v-row no-gutters>
      <v-col cols="2">
        <v-img :src="require('@/assets/time.png')" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title>ONLINE SUPPORT 24/7</v-card-title>
        <v-card-text>
        <b>Lorem ipsum dolor sit amet</b>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
      </v-col>
    </v-row>
    <v-row class="my-5 ">
      <v-col cols="3" offset-md="2">
        <v-img :src="require('@/assets/p1.png')"></v-img>
      </v-col>
      <v-col cols="3">
        <v-img :src="require('@/assets/p2.png')"></v-img>
      </v-col>
      <v-col cols="3">
        <v-img :src="require('@/assets/p3.png')"></v-img>
      </v-col>
    </v-row>
    <v-container>
  <v-row no-gutters><v-col ><v-divider class="mt-4"></v-divider></v-col><v-col cols="2"><h2 style="text-align: center;">Featured Products</h2></v-col><v-col cols="5"><v-divider class="mt-4"></v-divider></v-col></v-row></v-container>
    
    <v-row class="mt-16 mx-12">
      <v-col cols="10" offset-md="1"><v-row>
        <!-- FEATURED PRODUCTS CARD OF 4 -->
          <v-col
            v-for="item in productList"
            :key="item.id"
            cols="3"><v-hover v-slot="{ hover }">
            <v-card @click="productDetails(item)" :elevation="hover ? 12 : 1" height="500">
              <v-row><v-col cols="10" offset-md="1"><v-img style="height: 300px;" :src="imagePrefix+item.image"></v-img><v-divider class="mt-6"></v-divider></v-col></v-row>
              <v-row><v-col><h2 class="pa-2">Name of product: {{ item.productName }}</h2>
              <v-card-text><pre>price:{{ item.price }}
              </pre></v-card-text></v-col></v-row>
            </v-card></v-hover>
          </v-col></v-row></v-col>
        </v-row>
  </V-ROW>
  <V-ROW><v-container class="mt-10">
    <v-row no-gutters><v-col ><v-divider class="mt-4"></v-divider></v-col><v-col cols="2"><h2 style="text-align: center;">Latest Products</h2></v-col><v-col cols="5"><v-divider class="mt-4"></v-divider></v-col></v-row></v-container>
   <v-row class="mt-16 mx-12">
      <v-col cols="10" offset-md="1"><v-row>
        <!-- CARD OF 4  -->
        <v-col
            v-for="item in latestProducts"
            :key="item.id"
            cols="3"><v-hover v-slot="{ hover }">
            <v-card @click="productDetails(item)" :elevation="hover ? 12 : 1" height="500"> <v-row><v-col cols="10" offset-md="1"><v-img style="height: 300px;" :src="imagePrefix+item.image"></v-img><v-divider class="mt-6"></v-divider></v-col></v-row>
              <v-row><v-col><h2 class="pa-2">Name of product: {{ item.productName }}</h2>
              <v-card-text><pre>price:{{ item.price }}

              </pre></v-card-text></v-col></v-row></v-card></v-hover>
          </v-col></v-row></v-col>
        </v-row>
  </V-ROW>
  <v-row class="mt-16 mx-12">
      <v-col cols="10" offset-md="1">
        <v-img :src="require('@/assets/b2.png')"></v-img>
      </v-col></v-row>
      <v-divider class="mt-12 mx-12"></v-divider>
      <v-row class="mt-16 mx-12">
      <v-col cols="10" offset-md="1"><v-row>
        <!-- CARD OF 6   -->
        <v-col
            v-for="item in sixProductList"
            :key="item.id"
            cols="2"><v-hover v-slot="{ hover }">
            <v-card @click="productDetails(item)" :elevation="hover ? 12 : 1" height="350"> <v-row><v-col cols="10" offset-md="1"><v-img style="height: 150px;" :src="imagePrefix+item.image"></v-img><v-divider class="mt-6"></v-divider></v-col></v-row>
              <v-row><v-col  cols="16"><h3 class="pa-2">Name of product: {{ item.productName }}</h3>
              <v-card-text><pre>price:{{ item.price }}

              </pre></v-card-text></v-col></v-row></v-card></v-hover>
          </v-col></v-row></v-col>
        </v-row>
        <v-row class="light-blue lighten-5 "><v-col  cols="10" offset-md="1">
        <v-row calss="my-3">
          <v-col >
          <v-card>
            <v-card-title>
CUSTOMER SUPPORT
            </v-card-title>
            <v-card-text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat</v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card> <v-card-title>
FULLY CUSTOMIZABLE
</v-card-title>
<v-card-text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat</v-card-text></v-card></v-col>
          <v-col>
          <v-card> <v-card-title>
POWER ADMIN
</v-card-title>
<v-card-text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat</v-card-text></v-card>
        </v-col></v-row></v-col></v-row>
        <v-row>
          <v-img :src="require('@/assets/b3.png')"></v-img>
        </v-row>
        <v-row no-gutters class="mt-10"><v-col ><v-divider class="mt-4"></v-divider></v-col><v-col cols="2"><h2 style="text-align: center;">Latest Products</h2></v-col><v-col cols="5"><v-divider class="mt-4"></v-divider></v-col></v-row>
  
        <!-- <div class="a1">
          <div class="a2"></div>
          <h1 class="a3">hello</h1>
          <div class="a4"></div>
        </div> -->
   <v-row class="my-16 mx-12">
      <v-col cols="10" offset-md="1"><v-row>
          <v-col
            v-for="item in latestProducts"
            :key="item.id"
            cols="3"><v-hover v-slot="{ hover }">
            <v-card @click="productDetails(item)" :elevation="hover ? 12 : 1" height="500"> <v-row><v-col cols="10" offset-md="1"><v-img style="height: 300px;" :src="imagePrefix+item.image"></v-img><v-divider class="mt-6"></v-divider></v-col></v-row>
              <v-row><v-col cols="16"><h3 class="pa-2">Name of product: {{ item.productName }}</h3>
              <v-card-text><pre>price:{{ item.price }}

              </pre></v-card-text></v-col></v-row></v-card></v-hover>
          </v-col></v-row></v-col>
        </v-row>
        <v-row>
        <Footer></Footer></v-row>
  </v-container>
  </template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
import catalog from "@/services/syetemconfig"
import _ from 'lodash'
export default {
  name: "Home",
 components:{Header,Footer},
  data: () => ({
    items:[       
          {
            src: "https://static.vecteezy.com/system/resources/thumbnails/006/828/785/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEps8mAX4txbGVF7w66B-SfDtYmqjN-xth6w&usqp=CAU",
          },
         
        ],
        productList:[],
        imagePrefix:'http://localhost:3000/',
        latestProducts:[],
        sixProductList:[]
  }),
 async mounted() {
    // Accessing image references
    console.log(this.$refs.images); // Array of image references
 await  this.fetchProduct();
  },
  methods:{
    productDetails(item){
      console.log("item",item,);
    //  this.$router.push('/detail?productdata='+JSON.stringify(item))
    this.$router.push({
        name:"detail",
        query:item
      })
    },
   async fetchProduct(){
    let condition={
      // where:{
        limit:8
        
      // }
    }
    const queryString = `?data=${encodeURIComponent(JSON.stringify(condition))}`;
  await  catalog.get(`/product/getProducts${queryString}`).then((res)=>{
    console.log("rrrrrrrressss",res);
    if(res && res.data){
      this.productList=res.data;
      this.latestProducts=_.orderBy(this.productList,['id'],['desc']);
      console.log("latestProducts",this.latestProducts)
      this.latestProducts.length=4;
      
      const criteria = [11,13,15,19,14,10];
      this.sixProductList=_.filter(this.productList, (value) => _.includes(criteria, value.id));
      console.log("sixProductList",this.sixProductList)
    }
  }).catch((err)=>{
    console.log("errrr",err);
  })

}
  }
};

</script>
<style>
.horizontal-card {
  display: flex;
  flex-direction: row;}
  .divider-text {
    display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;}
  .a1{
    height: 20px;
    width: 80%;
    display: flex;
    margin: auto;
    margin-top: 50px;
  }
  /* .a2{
    background-color: rgb(56, 28, 237);
    height: 2px;
    width: 45%;
   

  } */
  .a3{
    height: 20px;
   margin-left: 10px;
   margin-right: 10px;
   margin-top: -20px;

  }
  /* .a4{
    background-color: rgb(216, 23, 23);
    height: 2px;
    width: 45%;
  } */

  </style>