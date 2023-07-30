let {product} =require("../../model");
// let imageuploads=require('./uploadimage');
let data;
module.exports=async (params)=>{
    console.log("checkkkkkkkkkkkk345454",params.file.path);
    let data=params.body;
    delete data.image;
     data.image=params.file.path;
    try{
        // params.image=imageupload;
        data= await product.create(data);
        console.log("data.........",data);
    }catch(err){
        return err;
    }
    return data.dataValues;
}