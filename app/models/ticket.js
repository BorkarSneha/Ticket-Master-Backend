const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ticketSchema = new Schema({
    code: {
        type: String,
        required:true
    },
    customer:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Customer'
    },
    department:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Department'
    },
    employee:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Employee'
    }],
    message: {
        type: String,
        required:true
    },
    priority: {
        type: String,
        required:true
    },
    isPending : {
        type : Boolean,
        required : true
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }   
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket