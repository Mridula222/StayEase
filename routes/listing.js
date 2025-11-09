const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {listingSchema,reviewSchema}=require("../schema.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing=require("../models/Listing.js");

const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(404,errMsg);
    }else{
        next();
    }
}

//Index Route
router.get("/",wrapAsync(async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//New Route
router.get("/new",wrapAsync(async(req,res)=>{
    res.render("listings/new.ejs")
}));

//show Route
router.get("/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}))

//create Route
router.post("/",validateListing,wrapAsync(async (req, res, next) => {
  const listingData = req.body.listing;
  const newListing = new Listing(listingData);
  await newListing.save();
  req.flash("success","New Listing Created:");
  res.redirect("/listings");
}));

//Edit Route
router.get("/:id/edit",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

// Update Route
router.put("/:id",validateListing, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listingData = req.body.listing || req.body;
  await Listing.findByIdAndUpdate(id, { ...listingData });
  req.flash("success","Listing Updated!");
  res.redirect(`/listings/${id}`);
}));


//Delete Route
router.delete("/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted:");
    res.redirect("/listings");
}));

module.exports=router;