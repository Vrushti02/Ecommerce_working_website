let {category} =require("../../model");
let data;
module.exports=async (params)=>{
    console.log("checkkkkkkkkkkkk",params);
    try{
        data= await category.create(params);
        console.log("data.........",data);
    }catch(err){
        return err;
    }
    return data.dataValues;
}