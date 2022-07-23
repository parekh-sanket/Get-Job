const mongoose=require('mongoose');
const {Schema}=mongoose;

// schema is noting but struture of the document (means which type of value is store in key)
const UserSchema=new Schema({
    name :{
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique:true
    },
    password :{
        type: String,
        required: true
    },
    role:{
        type:String,
        required: true
    },
    date :{
        type: Date,
        default: Date.now
    },

    //new
    verified :{
        type : Boolean,
        default: false
    }
})
// A mogoose model is  a wrapper  on the Mongoos schema using this we can create create a database,updating,deleting,quering ect. 
// const User=mongoose.model(collection(db) name,struct of documentation);
const User=mongoose.model('user',UserSchema);
// User.createIndexes();
module.exports=User;