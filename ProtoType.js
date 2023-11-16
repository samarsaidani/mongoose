let mongoose = require('mongoose')
const prototype= new mongoose.Schema(
    {
        nom:{ type : String,
             required : true} ,
        age : Number ,
        favoriteFoods :[String],

    }
)
module.exports=mongoose.model('People',prototype)