const mongoose = require('mongoose')

const Schema = mongoose.Schema
const customerSchema = new Schema({
    // title: String, 
    name: {
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
    
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer