var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose')
var PhotoSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User' 
        },
        username:String
    }
})
PhotoSchema.plugin(passportLocalMongoose)
module.exports= mongoose.model('Photo',PhotoSchema)