const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter The Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,'Please Enter The Product Description']
    },
    price:{
        type:Number,
        required:[true,"Please Enter The Product Price"],
        maxLength:[8,"Price Cannot Exceed 8 Figures"]
    },
    ratings:{
        type:Number,
        default:0 
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true,'Please Enter Product category'],
    },
    stock:{
        type:Number,
        require:[true,'Please Enter Product Stock'],
        maxLength:[4, "Stocks cannot exceeds more than"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
            required:true
        },
        name:{
            type:String,
            required:true,
        },rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }        
    }],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now 
    }
})


module.exports = mongoose.model("Product", productSchema) 