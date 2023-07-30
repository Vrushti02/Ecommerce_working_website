var express = require('express');
var router = express.Router();
let {category} =require("../model");
let config=require("../config/config")
let categoryfunc=require("./function/catadd.js")
/* GET home page. */
router.post('/add', async (req, res, next)=> {
  console.log("checkkkkkkk12344",req.body);
// try{
  // let data= await personfunc.create(req.body);
  let data=await categoryfunc(req.body);
  console.log("createdata..................",data)
  res.send(data);
// }catch(err){
// return err;
// }

});

module.exports = router;
