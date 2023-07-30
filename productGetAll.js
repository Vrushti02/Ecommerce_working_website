let {product}= require("../../model");
let products
module.exports=async(params)=>{
    try{
        let condition;
        if(params.query){
          condition=JSON.parse(params.query.data);
        }
         products = await product.findAll(condition);
        if(!products)throw new Error("Product Not Found");
    }catch(error){
  throw error
    }
    return products;
}

