const mongoose = require('mongoose')

const Schema = mongoose.Schema
const employeeSchema = new Schema({
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
    department:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Department'
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
    
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee