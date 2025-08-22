const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const L=listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    images:{
        type:String,
        default:
            "https://unsplash.com/photos/scenic-mountain-valley-with-winding-road-and-trees-JN4yXG7iNTo",

        set:(v)=>
        v === "" 
        ? "https://unsplash.com/photos/scenic-mountain-valley-with-winding-road-and-trees-JN4yXG7iNTo"
        :v,
    },
    
    price:Number,
    
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;