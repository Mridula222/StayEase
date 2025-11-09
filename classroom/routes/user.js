const express=require("express");
const router=express.Router();
// const users=require("./routes/user.js");

//Index-users
router.get("/",(req,res)=>{
    res.send("GET for users");
})

//Show-users
router.get("/:id",(req,res)=>{
    res.send("GET for userid");
})

//POST-users
router.post("/",(req,res)=>{
    res.send("Post for users");
})

//DELETE-users
router.delete("/:id",(req,res)=>{
    res.send("Delete for user id");
});

module.exports=router;