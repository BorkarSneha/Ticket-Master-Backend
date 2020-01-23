const mongoose = require('mongoose')

const configureDB = () => { 
    // DB Configuration
    mongoose.connect('mongodb://localhost:27017/ticket-master-backend-app', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}
module.exports = configureDB
