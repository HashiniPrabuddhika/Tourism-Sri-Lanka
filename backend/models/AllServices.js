const mongoose = require('mongoose');

//create variable of schema 
const Schema = mongoose.Schema;
const allservicesSchema = new Schema({
    title:{
        type : String,
        required: true //backend validation
        
    },
    description:{
        type: String,
        required: true
    },
    
    location:{
        type: String,
        required: true

    },

    // photos:{
    //     type: [String],
        
    // },

    price:{
        type: Number,
        required: true

    },
    photos: {
        type: String, 
        required: true
    }

})
module.exports = mongoose.model("AllServices",allservicesSchema);