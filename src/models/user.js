
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    fullName:{
        type : String,
    },
    userid:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    
},{timestamps:true});

const User = model('user',userSchema);

module.exports = User;