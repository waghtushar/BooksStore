const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://TusharData:0123456789@cluster0.o1la21q.mongodb.net/')
const db = mongoose.connection

db.on('connected', (err) => {
    if (err) {
        console.log("DataBase connected");
        return false
    }
    console.log("DataBase connected");
})

module.exports = db