const mongoose = require('mongoose')

const Users = mongoose.model ('User',
    {
        name:String,
        age:Number ,
        gender:String,
        email:String,
        grade:Number,
    }
)

