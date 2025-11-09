const express=require("express");
const router=express.Router();


//Index
router.get("/",(req,res)=>{
    res.send("GET for posts");
});

//show
router.get("/:id",(req,res)=>{
    res.send("GET for post id");
});

//post
router.post("/",(req,res)=>{
    res.send("post for posts");
});

//DELETE
router.delete("/:id",(req,res)=>{
    res.send("Delete for posts id");
});

module.exports=router;