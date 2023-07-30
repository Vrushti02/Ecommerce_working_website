<template>
<v-app>
    <Header></Header>
    <v-row class="my-16"><v-col cols="6">
    <v-card class="ml-16" elevation="3">
        <v-card-title class="light-blue lighten-4">CATEGORY INPUTS</v-card-title>
        <v-form class="light-blue lighten-5 pa-16" method="post">
          <v-text-field label="categoryName" v-model="categoryName"></v-text-field>

          <v-switch v-model="status1" label="status"></v-switch>

          <v-checkbox  label="isSubcategory" v-model="isSubCategory1" ></v-checkbox>
          <!-- <v-checkbox v-else label="isSubcategory" @click="Show=true" v-model="checked" ></v-checkbox> -->

          <v-select label="Subcategory" :items="items" :v-model="select" v-if="isSubCategory1">
          </v-select>
          <v-file-input accept="image/*" label="File input" @change="onChange" v-model="image"></v-file-input>
          <v-btn label="Enter To Database" class="light-blue lighten-4 mt-6 ml-3" @click="IntoCategory" tile outlined> Enter To Database</v-btn>
        </v-form>
</v-card>
</v-col>

<!-- PRODUCT INPUTS STARTS FROM HERE -->

<v-col cols="6">
    <v-card class="mr-16" elevation="3">
        <v-card-title class="light-blue lighten-4">PRODUCT INPUTS</v-card-title>
        <v-form class="light-blue lighten-5 pa-16" method="post">
          <v-text-field label="productName" v-model="productName"></v-text-field>
          <v-text-field label="mrp" v-model="mrp"></v-text-field>
          <v-text-field label="price" v-model="price"></v-text-field>
          <v-text-field label="categoryid" v-model="categoryid"></v-text-field>
          <v-switch v-model="status" label="status"></v-switch>

          <v-checkbox  label="isSubcategory" v-model="isSubCategory" ></v-checkbox>
          <!-- <v-checkbox v-else label="isSubcategory" @click="Show=true" v-model="checked" ></v-checkbox> -->

          <v-select label="Subcategory" :items="items" :v-model="select" v-if="isSubCategory"> </v-select>
          <v-text-field label="productsku" v-model="productsku"></v-text-field>
          <v-text-field label="ean_number" v-model="EANnumber"></v-text-field>
          <v-file-input accept="image/*" label="File input" v-model="image"></v-file-input>
          <v-text-field label="brand_id" v-model="brandid"></v-text-field>
          <v-text-field label="description" v-model="description"></v-text-field>
          <v-btn label="Enter To Database" class="light-blue lighten-4 mt-6 ml-3" @click="IntoProduct" tile outlined> Enter To Database</v-btn>
        </v-form>
</v-card>
</v-col>
</v-row>
<Footer></Footer>
</v-app>
</template>
<script>
import systemconfig from "@/services/syetemconfig"
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
export default {
    components:{Header,Footer},
    data: () => ({
      items: ['fashion', 'groceries', 'accessories', 'drinks'],
      // posts:{
      // categoryName:'',
      // isSubCategory:false,
      // isSubCategory1:false,
      // status:true,
      // status1:true,
      // select:'',
      // Show:false,

      // },
      categoryName:'',
      isSubCategory:false,
      isSubCategory1:false,
      status:true,
      status1:true,
      select:'',
      Show:false,
      image:""
    }),
    methods:{
      // METHOD FOR CATEGORY INPUT 
    async IntoCategory(){
        let data={}; 
        data.categoryName=this.categoryName;
        data.isSubCategory=this.isSubCategory;
        data.isSubCategory1=this.isSubCategory1;
        data.status=this.status;
        data.status1=this.status1;
        data.select=this.categoryName;
        data.image=this.image
        console.log("datadekhrhaa",data)
        await systemconfig.post('/category/add',data).then((res)=>{
          console.log("ressssss",res)
        })
      },
      // METHOD FOR PRODUCT INPUT
      onChange(event) {
      this.image = event.target.files[0];
    },
      async IntoProduct(){
        let data={}; 
        // data.productName=this.productName;
        // data.mrp=this.mrp;
        // data.price=this.price;
        // data.categoryid=this.categoryid;
        // data.productsku=this.productsku;
        // data.image=this.image;
        // data.brandid=this.brandid;
        // data.EANnumber=this.EANnumber;
        // data.description=this.description
        // console.log("datadekhrhaa",data)
         const formData = new FormData();
      console.log("image", this.image, this.image.name);
      formData.append("image", this.image, this.image.name);

      formData.append("productName",this.productName);
      formData.append("mrp", this.mrp);
      formData.append("price", this.price);
      formData.append("categoryId", this.categoryid);
      formData.append("productsku", this.productsku);
//       formData.append("image", this.image);
      formData.append("brandid", this.brandid);
      formData.append("EANnumber", this.EANnumber);
      formData.append("description", this.description);
        await systemconfig.post('/product/add',formData).then((res)=>{
          console.log("ressssss",res)
        })
      },
    },
  }</script>
<style></style>