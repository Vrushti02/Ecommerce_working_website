var express = require('express');
var router = express.Router();
let {login} =require("../model/");
let config=require("../config/config")

/* GET home page. */
router.post('/add',  (req, res, next)=> {
  console.log("checkkkkkkk",req.body);
try{
  let login_data= req.body;
  login_data.email= req.body.login_email
  let data=  login.create(login_data);

 console.log("data",typeof(data))
 let isempty=Object.keys(data).length==0;
 if(!isempty){
  res.send(data);
 }else{
  throw new  Error("User Already Created")
 }
 
}catch(err){
throw new  Error(err);
}

});
router.post('/userlogin', async (req, res, next)=> {
  console.log("checkkkkkkk",req.body);
try{
  let login_data= req.body;
console.log("login_data",login_data)
  let data= await login.findOne({
    where:{
      email:login_data.email
    }
  });
  
 console.log("data",data);
 if(data){
  let validate=data.password==login_data.password;
  if(validate){
    //return "User Logged in Successfully";
    res.send("User Logged in Successfully")
    console.log("user verified")
  }else{
    res.send("Password Not match");
  }
 }else{
 res.send("User Not register")
 }
 
 
}catch(err){
 
throw new  Error(err);
}
return "User Logged in Successfully"
});
module.exports = router;
