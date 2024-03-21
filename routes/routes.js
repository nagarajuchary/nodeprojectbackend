const express = require("express");
const carModel = require("../models/models.js");


const route = express.Router();

route.post('/addcar', (req, res) => {
    const user = new carModel(req.body);
    user.save();
    res.status(201).json(user);
});
route.get('/carlist',async (req, res)=>{
  try{  
    const allcars= await carModel.find();
    res.status(201).json(allcars);
  }catch(err){console.error(error);
res.status(500).json({message:"internal server err"})}
});
route.put("/updatecar/:id", async (req, res)=>{
    const edituser=await carModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.status(201).json(edituser)
});
route.delete("/deleteuser/:id", async (req, res)=>{
    const deleteuser=await carModel.findByIdAndDelete(req.params.id);
    res.status(201).json(deleteuser);
});

module.exports = route;