const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    numViews:{
        type:Number,
        default:0,
    },
  

    isLiked:{
      type:Boolean,
      default:false
    },
    likes:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      }
    ],

    isDisliked : {
      type:Boolean,
      default:false
    },
    dislikes : [
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
    ],
    
    image : {
        type:String,
        default:"https://thumbs.dreamstime.com/z/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
    },

    auther: {
      type:String,
      default:"Admin"
    }
 }, 

 { 
    toJSON:{
      virtuals:true
    }, 
    toObject:{
      virtuals:true
    },
    timestamps:true
 }

);

//Export the model
module.exports = mongoose.model('Blog', blogSchema);